// Circles service worker.
//
// Two jobs:
//   1. Render local notifications + focus the app when one is tapped.
//   2. A lightweight offline layer so the app opens without a connection.
//
// Caching strategy is deliberately conservative so it never serves stale code
// during normal use:
//   • same-origin GET  → network-first, fall back to cache (offline). Online
//     always gets fresh modules; the cache is only a safety net.
//   • cross-origin (esm.sh deps, Google Fonts) → cache-first (immutable,
//     versioned URLs — safe to keep forever).
//   • /api and /test     → never cached (live data / demo feed).
//
// There is no push server; notifications are scheduled on-device.

const CACHE = 'circles-cache-v1'
// Relative to the SW's own location, so the shell caches correctly whether
// the app lives at the domain root or under a subpath (GitHub Pages /app/).
const SHELL = ['./', './manifest.json', './circles-logo-mark-v4.png']

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((c) => c.addAll(SHELL).catch(() => {}))
      .then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  )
})

function isCrossOrigin(url) {
  return url.origin !== self.location.origin
}

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return

  const url = new URL(request.url)

  // Live data / demo feed — always go to network, no caching.
  if (
    !isCrossOrigin(url) &&
    (url.pathname.startsWith('/api/') || url.pathname.startsWith('/test/'))
  ) {
    return
  }

  // Cross-origin deps (esm.sh, fonts) — cache-first; they're immutable.
  if (isCrossOrigin(url)) {
    event.respondWith(
      caches.match(request).then(
        (hit) =>
          hit ||
          fetch(request).then((res) => {
            const copy = res.clone()
            caches.open(CACHE).then((c) => c.put(request, copy)).catch(() => {})
            return res
          })
      )
    )
    return
  }

  // Same-origin — network-first, fall back to cache (then to the app shell
  // for navigations) when offline.
  event.respondWith(
    fetch(request)
      .then((res) => {
        const copy = res.clone()
        caches.open(CACHE).then((c) => c.put(request, copy)).catch(() => {})
        return res
      })
      .catch(() =>
        caches.match(request).then((hit) => {
          if (hit) return hit
          if (request.mode === 'navigate') return caches.match('./')
          return new Response('', { status: 504, statusText: 'Offline' })
        })
      )
  )
})

self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  const data = event.notification.data || {}
  const url = data.url || './'
  event.waitUntil(
    self.clients
      .matchAll({ type: 'window', includeUncontrolled: true })
      .then((clientList) => {
        for (const client of clientList) {
          if ('focus' in client) {
            client.focus()
            if (data.view && 'postMessage' in client) {
              client.postMessage({ type: 'navigate', view: data.view })
            }
            return
          }
        }
        if (self.clients.openWindow) return self.clients.openWindow(url)
      })
  )
})
