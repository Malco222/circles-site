function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var react = {exports: {}};

var react_production_min = {};

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReact_production_min;

function requireReact_production_min () {
	if (hasRequiredReact_production_min) return react_production_min;
	hasRequiredReact_production_min = 1;
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return "function"===typeof a?a:null}
	var B={isMounted:function(){return  false},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}E.prototype.isReactComponent={};
	E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}var H=G.prototype=new F;
	H.constructor=G;C(H,E.prototype);H.isPureReactComponent=true;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:true,ref:true,__self:true,__source:true};
	function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g) void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
	function N(a,b){return {$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
	function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=false;if(null===a)h=true;else switch(k){case "string":case "number":h=true;break;case "object":switch(a.$$typeof){case l:case n:h=true;}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
	a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c);}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
	function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
	var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.");}
	react_production_min.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S(a,function(){b++;});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E;react_production_min.Fragment=p;react_production_min.Profiler=r;react_production_min.PureComponent=G;react_production_min.StrictMode=q;react_production_min.Suspense=w;
	react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;react_production_min.act=X;
	react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){ void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
	for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};react_production_min.createElement=M;react_production_min.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
	react_production_min.forwardRef=function(a){return {$$typeof:v,render:a}};react_production_min.isValidElement=O;react_production_min.lazy=function(a){return {$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};react_production_min.memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V.transition;V.transition={};try{a();}finally{V.transition=b;}};react_production_min.unstable_act=X;react_production_min.useCallback=function(a,b){return U.current.useCallback(a,b)};react_production_min.useContext=function(a){return U.current.useContext(a)};
	react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U.current.useEffect(a,b)};react_production_min.useId=function(){return U.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};react_production_min.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};
	react_production_min.useMemo=function(a,b){return U.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U.current.useRef(a)};react_production_min.useState=function(a){return U.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};react_production_min.useTransition=function(){return U.current.useTransition()};react_production_min.version="18.3.1";
	return react_production_min;
}

var hasRequiredReact;

function requireReact () {
	if (hasRequiredReact) return react.exports;
	hasRequiredReact = 1;

	{
	  react.exports = requireReact_production_min();
	}
	return react.exports;
}

var reactExports = requireReact();
var React = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

var client = {};

var reactDom = {exports: {}};

var reactDom_production_min = {};

var scheduler = {exports: {}};

var scheduler_production_min = {};

/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredScheduler_production_min;

function requireScheduler_production_min () {
	if (hasRequiredScheduler_production_min) return scheduler_production_min;
	hasRequiredScheduler_production_min = 1;
	(function (exports) {
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
		function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()};}else {var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q};}var r=[],t=[],u=1,v=null,y=3,z=false,A=false,B=false,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
		"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t);}}function H(a){B=false;G(a);if(!A)if(null!==h(r))A=true,I(J);else {var b=h(t);null!==b&&K(H,b.startTime-a);}}
		function J(a,b){A=false;B&&(B=false,E(L),L=-1);z=true;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b);}else k(r);v=h(r);}if(null!==v)var w=!0;else {var m=h(t);null!==m&&K(H,m.startTime-b);w=!1;}return w}finally{v=null,y=c,z=false;}}var N=false,O=null,L=-1,P=5,Q=-1;
		function M(){return exports.unstable_now()-Q<P?false:true}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=true;try{b=O(!0,a);}finally{b?S():(N=false,O=null);}}else N=false;}var S;if("function"===typeof F)S=function(){F(R);};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null);};}else S=function(){D(R,0);};function I(a){O=a;N||(N=true,S());}function K(a,b){L=D(function(){a(exports.unstable_now());},b);}
		exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null;};exports.unstable_continueExecution=function(){A||z||(A=true,I(J));};
		exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5;};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y;}var c=y;y=b;try{return a()}finally{y=c;}};exports.unstable_pauseExecution=function(){};
		exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=y;y=a;try{return b()}finally{y=c;}};
		exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3;}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=true,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=true,I(J)));return a};
		exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c;}}}; 
	} (scheduler_production_min));
	return scheduler_production_min;
}

var hasRequiredScheduler;

function requireScheduler () {
	if (hasRequiredScheduler) return scheduler.exports;
	hasRequiredScheduler = 1;

	{
	  scheduler.exports = requireScheduler_production_min();
	}
	return scheduler.exports;
}

/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactDom_production_min;

function requireReactDom_production_min () {
	if (hasRequiredReactDom_production_min) return reactDom_production_min;
	hasRequiredReactDom_production_min = 1;
var aa=requireReact(),ca=requireScheduler();function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b);}
	function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a]);}
	var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
	{},ma={};function oa(a){if(ja.call(ma,a))return  true;if(ja.call(la,a))return  false;if(ka.test(a))return ma[a]=true;la[a]=true;return  false}function pa(a,b,c,d){if(null!==c&&0===c.type)return  false;switch(typeof b){case "function":case "symbol":return  true;case "boolean":if(d)return  false;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return  false}}
	function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return  true;if(d)return  false;if(null!==c)switch(c.type){case 3:return !b;case 4:return  false===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return  false}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g;}var z={};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,false,a,null,false,false);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,false,a[1],null,false,false);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,false,a.toLowerCase(),null,false,false);});
	["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,false,a,null,false,false);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,false,a.toLowerCase(),null,false,false);});
	["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,true,a,null,false,false);});["capture","download"].forEach(function(a){z[a]=new v(a,4,false,a,null,false,false);});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,false,a,null,false,false);});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,false,a.toLowerCase(),null,false,false);});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
	sa);z[b]=new v(b,1,false,a,null,false,false);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,false,a,"http://www.w3.org/1999/xlink",false,false);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,false,a,"http://www.w3.org/XML/1998/namespace",false,false);});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,false,a.toLowerCase(),null,false,false);});
	z.xlinkHref=new v("xlinkHref",1,false,"xlink:href","http://www.w3.org/1999/xlink",true,false);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,false,a.toLowerCase(),null,true,true);});
	function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?false:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&true===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)));}
	var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");	var Ia=Symbol.for("react.offscreen");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return "function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||"";}return "\n"+La+a}var Na=false;
	function Oa(a,b){if(!a||Na)return "";Na=true;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[]);}catch(l){var d=l;}Reflect.construct(a,[],b);}else {try{b.call();}catch(l){d=l;}a.call(b.prototype);}else {try{throw Error();}catch(l){d=l;}a();}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
	f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=false,Error.prepareStackTrace=c;}return (a=a?a.displayName||a.name:"")?Ma(a):""}
	function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,false),a;case 11:return a=Oa(a.type.render,false),a;case 1:return a=Oa(a.type,true),a;default:return ""}}
	function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return "Fragment";case wa:return "Portal";case Aa:return "Profiler";case za:return "StrictMode";case Ea:return "Suspense";case Fa:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return (a.displayName||"Context")+".Consumer";case Ba:return (a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
	b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
	function Ra(a){var b=a.type;switch(a.tag){case 24:return "Cache";case 9:return (b.displayName||"Context")+".Consumer";case 10:return (b._context.displayName||"Context")+".Provider";case 18:return "DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return "Fragment";case 5:return b;case 4:return "Portal";case 3:return "Root";case 6:return "Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return "Offscreen";
	case 12:return "Profiler";case 21:return "Scope";case 13:return "Suspense";case 19:return "SuspenseList";case 25:return "TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return ""}}
	function Ta(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
	function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:true,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
	null;delete a[b];}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a));}function Wa(a){if(!a)return  false;var b=a._valueTracker;if(!b)return  true;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),true):false}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
	function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,false);}
	function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
	function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
	function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}var eb=Array.isArray;
	function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=true;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=true);}else {c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=true;d&&(a[e].defaultSelected=true);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=true);}}
	function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0];}b=c;}null==b&&(b="");c=b;}a._wrapperState={initialValue:Sa(c)};}
	function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b);}function kb(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}
	function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
	var mb,nb=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else {mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
	function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}
	var pb={animationIterationCount:true,aspectRatio:true,borderImageOutset:true,borderImageSlice:true,borderImageWidth:true,boxFlex:true,boxFlexGroup:true,boxOrdinalGroup:true,columnCount:true,columns:true,flex:true,flexGrow:true,flexPositive:true,flexShrink:true,flexNegative:true,flexOrder:true,gridArea:true,gridRow:true,gridRowEnd:true,gridRowSpan:true,gridRowStart:true,gridColumn:true,gridColumnEnd:true,gridColumnSpan:true,gridColumnStart:true,fontWeight:true,lineClamp:true,lineHeight:true,opacity:true,order:true,orphans:true,tabSize:true,widows:true,zIndex:true,
	zoom:true,fillOpacity:true,floodOpacity:true,stopOpacity:true,strokeDasharray:true,strokeDashoffset:true,strokeMiterlimit:true,strokeOpacity:true,strokeWidth:true},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a];});});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
	function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var tb=A({menuitem:true},{area:true,base:true,br:true,col:true,embed:true,hr:true,img:true,input:true,keygen:true,link:true,meta:true,param:true,source:true,track:true,wbr:true});
	function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p(62));}}
	function vb(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return  false;default:return  true}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
	function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b));}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a;}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a]);}}function Gb(a,b){return a(b)}function Hb(){}var Ib=false;function Jb(a,b,c){if(Ib)return a(b,c);Ib=true;try{return Gb(a,b,c)}finally{if(Ib=false,null!==zb||null!==Ab)Hb(),Fb();}}
	function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=false;}if(a)return null;if(c&&"function"!==
	typeof c)throw Error(p(231,b,typeof c));return c}var Lb=false;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0;}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb);}catch(a){Lb=false;}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l);}catch(m){this.onError(m);}}var Ob=false,Pb=null,Qb=false,Rb=null,Sb={onError:function(a){Ob=true;Pb=a;}};function Tb(a,b,c,d,e,f,g,h,k){Ob=false;Pb=null;Nb.apply(Sb,arguments);}
	function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=false;Pb=null;}else throw Error(p(198));Qb||(Qb=true,Rb=l);}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else {a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188));}
	function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling;}throw Error(p(188));}if(c.return!==d.return)c=e,d=f;else {for(var g=false,h=e.child;h;){if(h===c){g=true;c=e;d=f;break}if(h===d){g=true;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===
	c){g=true;c=f;d=e;break}if(h===d){g=true;d=f;c=e;break}h=h.sibling;}if(!g)throw Error(p(189));}}if(c.alternate!==d)throw Error(p(190));}if(3!==c.tag)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling;}return null}
	var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128));}catch(b){}}
	var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
	function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
	default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)));}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
	function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return  -1;case 134217728:case 268435456:case 536870912:case 1073741824:return  -1;default:return  -1}}
	function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b);}else k<=b&&(a.expiredLanes|=h);f&=~h;}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
	function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c;}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f;}}
	function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e;}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=false,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
	function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId);}}
	function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
	function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),true;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),true;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),true;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return  true;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),true}return  false}
	function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c);});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null;}
	function Xc(a){if(null!==a.blockedOn)return  false;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null;}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,false;b.shift();}return  true}function Zc(a,b,c){Xc(a)&&c.delete(b);}function $c(){Jc=false;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc);}
	function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=true,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)));}
	function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null);}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift();}var cd=ua.ReactCurrentBatchConfig,dd=true;
	function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d);}finally{C=e,cd.transition=f;}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d);}finally{C=e,cd.transition=f;}}
	function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f;}null!==e&&d.stopPropagation();}else hd(a,b,d,null,c);}}var id=null;
	function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null;}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null;}else b!==a&&(a=null);id=a;return null}
	function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
	case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
	function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return  true}function qd(){return  false}
	function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:false===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=true;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
	(a.returnValue=false),this.isDefaultPrevented=pd);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=true),this.isPropagationStopped=pd);},persist:function(){},isPersistent:pd});return b}
	var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
	a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return "movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
	Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
	119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:false}function zd(){return Pd}
	var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return "keypress"===a.type?od(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===
	a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
	deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=false;
	function ge(a,b){switch(a){case "keyup":return  -1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return  true;default:return  false}}function he(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var ie=false;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=true;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
	function ke(a,b){if(ie)return "compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=false,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
	var le={color:true,date:true,datetime:true,"datetime-local":true,email:true,month:true,number:true,password:true,range:true,search:true,tel:true,text:true,time:true,url:true,week:true};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!le[a.type]:"textarea"===b?true:false}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}));}var pe=null,qe=null;function re(a){se(a,0);}function te(a){var b=ue(a);if(Wa(b))return a}
	function ve(a,b){if("change"===a)return b}var we=false;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput;}xe=ye;}else xe=false;we=xe&&(!document.documentMode||9<document.documentMode);}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null);}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b);}}
	function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae();}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
	function Ie(a,b){if(He(a,b))return  true;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return  false;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return  false;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return  false}return  true}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
	function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=Je(c);}}function Le(a,b){return a&&b?a===b?true:a&&3===a.nodeType?false:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):false:false}
	function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=false;}if(c)a=b.contentWindow;else break;b=Xa(a.document);}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
	function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
	d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)));}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top;}}
	var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=false;
	function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)));}
	function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
	ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	function ff(a,b){df.set(a,b);fa(b,[a]);}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf);}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
	ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
	fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
	function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null;}
	function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}}}if(Qb)throw a=Rb,Qb=false,Rb=null,a;}
	function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,false),c.add(d));}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b);}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=true;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,false,a),qf(b,true,a));});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=true,qf("selectionchange",false,b));}}
	function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd;}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=true);d?void 0!==e?a.addEventListener(b,c,{capture:true,passive:e}):a.addEventListener(b,c,true):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,false);}
	function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return;}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode;}}d=d.return;}Jb(function(){var d=f,e=xb(c),g=[];
	a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
	Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td;}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
	w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return;}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}));}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
	n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null;}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
	vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x);}t=null;}else t=null;null!==k&&wf(g,h,k,t,false);null!==n&&null!==J&&wf(g,J,n,t,true);}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else {na=De;var xa=Ce;}else (k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
	xa.controlled&&"number"===h.type&&cb(h,"number",h.value);}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=true;break;case "contextmenu":case "mouseup":case "dragend":Te=false;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e);}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
	break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0;}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=true)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
	0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a);}se(g,b);});}function tf(a,b,c){return {instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return;}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
	function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return;}0!==g.length&&a.push({event:b,listeners:g});}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return ("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p(425));}function Bf(){}
	var Cf=null,Df=null;function Ef(a,b){return "textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
	var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;});}
	function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--;}else "$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e;}while(c);bd(b);}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
	function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--;}else "/$"===c&&b++;}a=a.previousSibling;}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
	function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a);}return b}a=c;c=a.parentNode;}return null}function Cb(a){a=a[Of]||a[uf];return !a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return {current:a}}
	function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--);}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b;}var Vf={},H=Uf(Vf),Wf=Uf(false),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
	function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H);}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b);G(Wf,c);}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}
	function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return  true}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c);}var eg=null,fg=false,gg=false;function hg(a){null===eg?eg=[a]:eg.push(a);}function ig(a){fg=true;hg(a);}
	function jg(){if(!gg&&null!==eg){gg=true;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1;}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=false;}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b;}
	function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a;}else rg=1<<f|c<<e|d,sg=a;}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0));}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null;}var xg=null,yg=null,I=false,zg=null;
	function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c);}
	function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),true):false;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,true):false;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
	null,true):false;default:return  false}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=false,xg=a);}}else {if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2;I=false;xg=a;}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a;}
	function Gg(a){if(a!==xg)return  false;if(!I)return Fg(a),I=true,false;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling);}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--;}else "$"!==c&&"$!"!==c&&"$?"!==c||b++;}a=a.nextSibling;}yg=
	null;}}else yg=xg?Lf(a.stateNode.nextSibling):null;return  true}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling);}function Ig(){yg=xg=null;I=false;}function Jg(a){null===zg?zg=[a]:zg.push(a);}var Kg=ua.ReactCurrentBatchConfig;
	function Lg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p(309));var d=c.stateNode;}if(!d)throw Error(p(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;null===a?delete b[f]:b[f]=a;};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p(284));if(!c._owner)throw Error(p(290,a));}return a}
	function Mg(a,b){a=Object.prototype.toString.call(b);throw Error(p(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function Ng(a){var b=a._init;return b(a._payload)}
	function Og(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c);}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Pg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
	null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Qg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&Ng(f)===b.type))return d=e(b,c.props),d.ref=Lg(a,b,c),d.return=a,d;d=Rg(c.type,c.key,c.props,null,a.mode,d);d.ref=Lg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
	b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=Sg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Tg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=Qg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=Rg(b.type,b.key,b.props,null,a.mode,c),
	c.ref=Lg(a,null,b),c.return=a,c;case wa:return b=Sg(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Tg(b,a.mode,c,null),b.return=a,b;Mg(a,b);}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
	b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);Mg(a,c);}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);Mg(b,d);}return null}
	function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x;}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
	x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p(150));h=l.call(h);if(null==h)throw Error(p(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x;}if(n.done)return c(e,
	m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
	f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&Ng(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=Lg(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling;}f.type===ya?(d=Tg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Rg(f.type,f.key,f.props,null,a.mode,h),h.ref=Lg(a,d,f),h.return=a,a=h);}return g(a);case wa:a:{for(l=f.key;null!==
	d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else {c(a,d);break}else b(a,d);d=d.sibling;}d=Sg(f,a.mode,h);d.return=a;a=d;}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);Mg(a,f);}return "string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
	(c(a,d),d=Qg(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Ug=Og(true),Vg=Og(false),Wg=Uf(null),Xg=null,Yg=null,Zg=null;function $g(){Zg=Yg=Xg=null;}function ah(a){var b=Wg.current;E(Wg);a._currentValue=b;}function bh(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return;}}
	function ch(a,b){Xg=a;Zg=Yg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(dh=true),a.firstContext=null);}function eh(a){var b=a._currentValue;if(Zg!==a)if(a={context:a,memoizedValue:b,next:null},null===Yg){if(null===Xg)throw Error(p(308));Yg=a;Xg.dependencies={lanes:0,firstContext:a};}else Yg=Yg.next=a;return b}var fh=null;function gh(a){null===fh?fh=[a]:fh.push(a);}
	function hh(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,gh(b)):(c.next=e.next,e.next=c);b.interleaved=c;return ih(a,d)}function ih(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var jh=false;function kh(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null};}
	function lh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects});}function mh(a,b){return {eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
	function nh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return ih(a,c)}e=d.interleaved;null===e?(b.next=b,gh(d)):(b.next=e.next,e.next=b);d.interleaved=b;return ih(a,c)}function oh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}
	function ph(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next;}while(null!==c);null===f?e=f=b:f=f.next=b;}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
	b;c.lastBaseUpdate=b;}
	function qh(a,b,c,d){var e=a.updateQueue;jh=false;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k));}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
	next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:jh=true;}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h));}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
	h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null;}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);rh|=g;a.lanes=g;a.memoizedState=q;}}
	function sh(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p(191,e));e.call(d);}}}var th={},uh=Uf(th),vh=Uf(th),wh=Uf(th);function xh(a){if(a===th)throw Error(p(174));return a}
	function yh(a,b){G(wh,b);G(vh,a);G(uh,th);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a);}E(uh);G(uh,b);}function zh(){E(uh);E(vh);E(wh);}function Ah(a){xh(wh.current);var b=xh(uh.current);var c=lb(b,a.type);b!==c&&(G(vh,a),G(uh,c));}function Bh(a){vh.current===a&&(E(uh),E(vh));}var L=Uf(0);
	function Ch(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}return null}var Dh=[];
	function Eh(){for(var a=0;a<Dh.length;a++)Dh[a]._workInProgressVersionPrimary=null;Dh.length=0;}var Fh=ua.ReactCurrentDispatcher,Gh=ua.ReactCurrentBatchConfig,Hh=0,M=null,N=null,O=null,Ih=false,Jh=false,Kh=0,Lh=0;function P(){throw Error(p(321));}function Mh(a,b){if(null===b)return  false;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return  false;return  true}
	function Nh(a,b,c,d,e,f){Hh=f;M=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Fh.current=null===a||null===a.memoizedState?Oh:Ph;a=c(d,e);if(Jh){f=0;do{Jh=false;Kh=0;if(25<=f)throw Error(p(301));f+=1;O=N=null;b.updateQueue=null;Fh.current=Qh;a=c(d,e);}while(Jh)}Fh.current=Rh;b=null!==N&&null!==N.next;Hh=0;O=N=M=null;Ih=false;if(b)throw Error(p(300));return a}function Sh(){var a=0!==Kh;Kh=0;return a}
	function Th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===O?M.memoizedState=O=a:O=O.next=a;return O}function Uh(){if(null===N){var a=M.alternate;a=null!==a?a.memoizedState:null;}else a=N.next;var b=null===O?M.memoizedState:O.next;if(null!==b)O=b,N=a;else {if(null===a)throw Error(p(310));N=a;a={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null};null===O?M.memoizedState=O=a:O=O.next=a;}return O}
	function Vh(a,b){return "function"===typeof b?b(a):b}
	function Wh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=N,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g;}d.baseQueue=e=f;c.pending=null;}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Hh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else {var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
	eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;M.lanes|=m;rh|=m;}l=l.next;}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(dh=true);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d;}a=c.interleaved;if(null!==a){e=a;do f=e.lane,M.lanes|=f,rh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return [b.memoizedState,c.dispatch]}
	function Xh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(dh=true);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f;}return [f,d]}function Yh(){}
	function Zh(a,b){var c=M,d=Uh(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,dh=true);d=d.queue;$h(ai.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==O&&O.memoizedState.tag&1){c.flags|=2048;bi(9,ci.bind(null,c,d,e,b),void 0,null);if(null===Q)throw Error(p(349));0!==(Hh&30)||di(c,b,e);}return e}function di(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a));}
	function ci(a,b,c,d){b.value=c;b.getSnapshot=d;ei(b)&&fi(a);}function ai(a,b,c){return c(function(){ei(b)&&fi(a);})}function ei(a){var b=a.getSnapshot;a=a.value;try{var c=b();return !He(a,c)}catch(d){return  true}}function fi(a){var b=ih(a,1);null!==b&&gi(b,a,1,-1);}
	function hi(a){var b=Th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:a};b.queue=a;a=a.dispatch=ii.bind(null,M,a);return [b.memoizedState,a]}
	function bi(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function ji(){return Uh().memoizedState}function ki(a,b,c,d){var e=Th();M.flags|=a;e.memoizedState=bi(1|b,c,void 0,void 0===d?null:d);}
	function li(a,b,c,d){var e=Uh();d=void 0===d?null:d;var f=void 0;if(null!==N){var g=N.memoizedState;f=g.destroy;if(null!==d&&Mh(d,g.deps)){e.memoizedState=bi(b,c,f,d);return}}M.flags|=a;e.memoizedState=bi(1|b,c,f,d);}function mi(a,b){return ki(8390656,8,a,b)}function $h(a,b){return li(2048,8,a,b)}function ni(a,b){return li(4,2,a,b)}function oi(a,b){return li(4,4,a,b)}
	function pi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}function qi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return li(4,4,pi.bind(null,b,a),c)}function ri(){}function si(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
	function ti(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function ui(a,b,c){if(0===(Hh&21))return a.baseState&&(a.baseState=false,dh=true),a.memoizedState=c;He(c,b)||(c=yc(),M.lanes|=c,rh|=c,a.baseState=true);return b}function vi(a,b){var c=C;C=0!==c&&4>c?c:4;a(true);var d=Gh.transition;Gh.transition={};try{a(!1),b();}finally{C=c,Gh.transition=d;}}function wi(){return Uh().memoizedState}
	function xi(a,b,c){var d=yi(a);c={lane:d,action:c,hasEagerState:false,eagerState:null,next:null};if(zi(a))Ai(b,c);else if(c=hh(a,b,c,d),null!==c){var e=R();gi(c,a,d,e);Bi(c,b,d);}}
	function ii(a,b,c){var d=yi(a),e={lane:d,action:c,hasEagerState:false,eagerState:null,next:null};if(zi(a))Ai(b,e);else {var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,gh(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=hh(a,b,e,d);null!==c&&(e=R(),gi(c,a,d,e),Bi(c,b,d));}}
	function zi(a){var b=a.alternate;return a===M||null!==b&&b===M}function Ai(a,b){Jh=Ih=true;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b;}function Bi(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}
	var Rh={readContext:eh,useCallback:P,useContext:P,useEffect:P,useImperativeHandle:P,useInsertionEffect:P,useLayoutEffect:P,useMemo:P,useReducer:P,useRef:P,useState:P,useDebugValue:P,useDeferredValue:P,useTransition:P,useMutableSource:P,useSyncExternalStore:P,useId:P,unstable_isNewReconciler:false},Oh={readContext:eh,useCallback:function(a,b){Th().memoizedState=[a,void 0===b?null:b];return a},useContext:eh,useEffect:mi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ki(4194308,
	4,pi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ki(4194308,4,a,b)},useInsertionEffect:function(a,b){return ki(4,2,a,b)},useMemo:function(a,b){var c=Th();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=xi.bind(null,M,a);return [d.memoizedState,a]},useRef:function(a){var b=
	Th();a={current:a};return b.memoizedState=a},useState:hi,useDebugValue:ri,useDeferredValue:function(a){return Th().memoizedState=a},useTransition:function(){var a=hi(false),b=a[0];a=vi.bind(null,a[1]);Th().memoizedState=a;return [b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=M,e=Th();if(I){if(void 0===c)throw Error(p(407));c=c();}else {c=b();if(null===Q)throw Error(p(349));0!==(Hh&30)||di(d,b,c);}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;mi(ai.bind(null,d,
	f,a),[a]);d.flags|=2048;bi(9,ci.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Th(),b=Q.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Kh++;0<c&&(b+="H"+c.toString(32));b+=":";}else c=Lh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:false},Ph={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Wh,useRef:ji,useState:function(){return Wh(Vh)},
	useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return ui(b,N.memoizedState,a)},useTransition:function(){var a=Wh(Vh)[0],b=Uh().memoizedState;return [a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:false},Qh={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Xh,useRef:ji,useState:function(){return Xh(Vh)},useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return null===
	N?b.memoizedState=a:ui(b,N.memoizedState,a)},useTransition:function(){var a=Xh(Vh)[0],b=Uh().memoizedState;return [a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:false};function Ci(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a) void 0===b[c]&&(b[c]=a[c]);return b}return b}function Di(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c);}
	var Ei={isMounted:function(a){return (a=a._reactInternals)?Vb(a)===a:false},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e));},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e));},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=R(),d=
	yi(a),e=mh(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=nh(a,e,d);null!==b&&(gi(b,a,d,c),oh(b,a,d));}};function Fi(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):true}
	function Gi(a,b,c){var d=false,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=eh(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Ei;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
	function Hi(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Ei.enqueueReplaceState(b,b.state,null);}
	function Ii(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs={};kh(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=eh(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Di(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
	"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Ei.enqueueReplaceState(e,e.state,null),qh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308);}function Ji(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c;}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack;}return {value:a,source:b,stack:e,digest:null}}
	function Ki(a,b,c){return {value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}function Li(a,b){try{console.error(b.value);}catch(c){setTimeout(function(){throw c;});}}var Mi="function"===typeof WeakMap?WeakMap:Map;function Ni(a,b,c){c=mh(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Oi||(Oi=true,Pi=d);Li(a,b);};return c}
	function Qi(a,b,c){c=mh(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Li(a,b);};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Li(a,b);"function"!==typeof d&&(null===Ri?Ri=new Set([this]):Ri.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c}
	function Si(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Mi;var e=new Set;d.set(b,e);}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ti.bind(null,a,b,c),b.then(a,a));}function Ui(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?true:false:true;if(b)return a;a=a.return;}while(null!==a);return null}
	function Vi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=mh(-1,1),b.tag=2,nh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Wi=ua.ReactCurrentOwner,dh=false;function Xi(a,b,c,d){b.child=null===a?Vg(b,null,c,d):Ug(b,a.child,c,d);}
	function Yi(a,b,c,d,e){c=c.render;var f=b.ref;ch(b,e);d=Nh(a,b,c,d,f,e);c=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&c&&vg(b);b.flags|=1;Xi(a,b,d,e);return b.child}
	function $i(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!aj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,bj(a,b,f,d,e);a=Rg(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return Zi(a,b,e)}b.flags|=1;a=Pg(f,d);a.ref=b.ref;a.return=b;return b.child=a}
	function bj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(dh=false,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(dh=true);else return b.lanes=a.lanes,Zi(a,b,e)}return cj(a,b,c,d,e)}
	function dj(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(ej,fj),fj|=c;else {if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(ej,fj),fj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(ej,fj);fj|=d;}else null!==
	f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(ej,fj),fj|=d;Xi(a,b,e,c);return b.child}function gj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152;}function cj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);ch(b,e);c=Nh(a,b,c,d,f,e);d=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&d&&vg(b);b.flags|=1;Xi(a,b,c,e);return b.child}
	function hj(a,b,c,d,e){if(Zf(c)){var f=true;cg(b);}else f=false;ch(b,e);if(null===b.stateNode)ij(a,b),Gi(b,c,d),Ii(b,c,d,e),d=true;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=eh(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
	(h!==d||k!==l)&&Hi(b,g,d,l);jh=false;var r=b.memoizedState;g.state=r;qh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||jh?("function"===typeof m&&(Di(b,c,m,d),k=b.memoizedState),(h=jh||Fi(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
	("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=false);}else {g=b.stateNode;lh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Ci(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=eh(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
	"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&Hi(b,g,d,k);jh=false;r=b.memoizedState;g.state=r;qh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||jh?("function"===typeof y&&(Di(b,c,y,d),n=b.memoizedState),(l=jh||Fi(b,c,l,d,r,n,k)||false)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
	g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
	a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=false);}return jj(a,b,c,d,f,e)}
	function jj(a,b,c,d,e,f){gj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,false),Zi(a,b,f);d=b.stateNode;Wi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Ug(b,a.child,null,f),b.child=Ug(b,null,h,f)):Xi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,true);return b.child}function kj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,false);yh(a,b.containerInfo);}
	function lj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Xi(a,b,c,d);return b.child}var mj={dehydrated:null,treeContext:null,retryLane:0};function nj(a){return {baseLanes:a,cachePool:null,transitions:null}}
	function oj(a,b,c){var d=b.pendingProps,e=L.current,f=false,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?false:0!==(e&2));if(h)f=true,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(L,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
	g):f=pj(g,d,0,null),a=Tg(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=nj(c),b.memoizedState=mj,a):qj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return rj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=Pg(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=Pg(h,f):(f=Tg(f,g,c,null),f.flags|=2);f.return=
	b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?nj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=mj;return d}f=a.child;a=f.sibling;d=Pg(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
	function qj(a,b){b=pj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function sj(a,b,c,d){null!==d&&Jg(d);Ug(b,a.child,null,c);a=qj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
	function rj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Ki(Error(p(422))),sj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=pj({mode:"visible",children:d.children},e,0,null);f=Tg(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Ug(b,a.child,null,g);b.child.memoizedState=nj(g);b.memoizedState=mj;return f}if(0===(b.mode&1))return sj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
	if(d)var h=d.dgst;d=h;f=Error(p(419));d=Ki(f,d,void 0);return sj(a,b,g,d)}h=0!==(g&a.childLanes);if(dh||h){d=Q;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0;}e=0!==(e&(d.suspendedLanes|g))?0:e;
	0!==e&&e!==f.retryLane&&(f.retryLane=e,ih(a,e),gi(d,a,e,-1));}tj();d=Ki(Error(p(421)));return sj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=uj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=true;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=qj(b,d.children);b.flags|=4096;return b}function vj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);bh(a.return,b,c);}
	function wj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e);}
	function xj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Xi(a,b,d.children,c);d=L.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else {if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&vj(a,c,b);else if(19===a.tag)vj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}d&=1;}G(L,d);if(0===(b.mode&1))b.memoizedState=
	null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Ch(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);wj(b,false,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Ch(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a;}wj(b,true,c,null,f);break;case "together":wj(b,false,null,null,void 0);break;default:b.memoizedState=null;}return b.child}
	function ij(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);}function Zi(a,b,c){null!==a&&(b.dependencies=a.dependencies);rh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p(153));if(null!==b.child){a=b.child;c=Pg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Pg(a,a.pendingProps),c.return=b;c.sibling=null;}return b.child}
	function yj(a,b,c){switch(b.tag){case 3:kj(b);Ig();break;case 5:Ah(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:yh(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Wg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(L,L.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return oj(a,b,c);G(L,L.current&1);a=Zi(a,b,c);return null!==a?a.sibling:null}G(L,L.current&1);break;case 19:d=0!==(c&
	b.childLanes);if(0!==(a.flags&128)){if(d)return xj(a,b,c);b.flags|=128;}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(L,L.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,dj(a,b,c)}return Zi(a,b,c)}var zj,Aj,Bj,Cj;
	zj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};Aj=function(){};
	Bj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;xh(uh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf);}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
	(c||(c={}),c[g]="");}else "dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g]);}else c||(f||(f=[]),f.push(l,
	c)),c=k;else "dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k));}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4;}};Cj=function(a,b,c,d){c!==d&&(b.flags|=4);};
	function Dj(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}
	function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
	function Ej(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;zh();E(Wf);E(H);Eh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Fj(zg),zg=null));Aj(a,b);S(b);return null;case 5:Bh(b);var e=xh(wh.current);
	c=b.type;if(null!==a&&null!=b.stateNode)Bj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else {if(!d){if(null===b.stateNode)throw Error(p(166));S(b);return null}a=xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
	d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d);}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(true!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(true!==f.suppressHydrationWarning&&Af(d.textContent,
	h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d);}switch(c){case "input":Va(d);db(d,f,true);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf);}d=e;b.updateQueue=d;null!==d&&(b.flags|=4);}else {g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
	"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=true:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;zj(a,b,false,false);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
	a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d;}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
	c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g));}switch(c){case "input":Va(a);db(a,d,false);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,false):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
	true);break;default:"function"===typeof e.onClick&&(a.onclick=Bf);}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=true;break a;default:d=false;}}d&&(b.flags|=4);}null!==b.ref&&(b.flags|=512,b.flags|=2097152);}S(b);return null;case 6:if(a&&null!=b.stateNode)Cj(a,b,a.memoizedProps,d);else {if("string"!==typeof d&&null===b.stateNode)throw Error(p(166));c=xh(wh.current);xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
	xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:true!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1));}f&&(b.flags|=4);}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d;}S(b);return null;case 13:E(L);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=false;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
	a){if(!f)throw Error(p(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p(317));f[Of]=b;}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=false;}else null!==zg&&(Fj(zg),zg=null),f=true;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(L.current&1)?0===T&&(T=3):tj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return zh(),
	Aj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return ah(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(L);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Dj(f,false);else {if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Ch(a);if(null!==g){b.flags|=128;Dj(f,false);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
	g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(L,L.current&1|2);return b.child}a=
	a.sibling;}null!==f.tail&&B()>Gj&&(b.flags|=128,d=true,Dj(f,false),b.lanes=4194304);}else {if(!d)if(a=Ch(g),null!==a){if(b.flags|=128,d=true,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Dj(f,true),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Gj&&1073741824!==c&&(b.flags|=128,d=true,Dj(f,false),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g);}if(null!==f.tail)return b=f.tail,f.rendering=
	b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=L.current,G(L,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Hj(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(fj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag));}
	function Ij(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return zh(),E(Wf),E(H),Eh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Bh(b),null;case 13:E(L);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p(340));Ig();}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(L),null;case 4:return zh(),null;case 10:return ah(b.type._context),null;case 22:case 23:return Hj(),
	null;case 24:return null;default:return null}}var Jj=false,U=false,Kj="function"===typeof WeakSet?WeakSet:Set,V=null;function Lj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null);}catch(d){W(a,b,d);}else c.current=null;}function Mj(a,b,c){try{c();}catch(d){W(a,b,d);}}var Nj=false;
	function Oj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType;}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
	q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y;}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode;}q=y;}c=-1===h||-1===k?null:{start:h,end:k};}else c=null;}c=c||{start:0,end:0};}else c=null;Df={focusedElem:a,selectionRange:c};dd=false;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
	case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Ci(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w;}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163));}}catch(F){W(b,b.return,F);}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return;}n=Nj;Nj=false;return n}
	function Pj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Mj(b,c,f);}e=e.next;}while(e!==d)}}function Qj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d();}c=c.next;}while(c!==b)}}function Rj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c;}"function"===typeof b?b(a):b.current=a;}}
	function Sj(a){var b=a.alternate;null!==b&&(a.alternate=null,Sj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null;}function Tj(a){return 5===a.tag||3===a.tag||4===a.tag}
	function Uj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Tj(a.return))return null;a=a.return;}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child;}if(!(a.flags&2))return a.stateNode}}
	function Vj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Vj(a,b,c),a=a.sibling;null!==a;)Vj(a,b,c),a=a.sibling;}
	function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling;}var X=null,Xj=false;function Yj(a,b,c){for(c=c.child;null!==c;)Zj(a,b,c),c=c.sibling;}
	function Zj(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c);}catch(h){}switch(c.tag){case 5:U||Lj(c,b);case 6:var d=X,e=Xj;X=null;Yj(a,b,c);X=d;Xj=e;null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Xj;X=c.stateNode.containerInfo;Xj=true;
	Yj(a,b,c);X=d;Xj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Mj(c,b,g):0!==(f&4)&&Mj(c,b,g));e=e.next;}while(e!==d)}Yj(a,b,c);break;case 1:if(!U&&(Lj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount();}catch(h){W(c,b,h);}Yj(a,b,c);break;case 21:Yj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
	c.memoizedState,Yj(a,b,c),U=d):Yj(a,b,c);break;default:Yj(a,b,c);}}function ak(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Kj);b.forEach(function(b){var d=bk.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}
	function ck(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Xj=!1;break a;case 3:X=h.stateNode.containerInfo;Xj=!0;break a;case 4:X=h.stateNode.containerInfo;Xj=!0;break a}h=h.return;}if(null===X)throw Error(p(160));Zj(f,g,e);X=null;Xj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null;}catch(l){W(e,b,l);}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)dk(b,a),b=b.sibling;}
	function dk(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:ck(b,a);ek(a);if(d&4){try{Pj(3,a,a.return),Qj(3,a);}catch(t){W(a,a.return,t);}try{Pj(5,a,a.return);}catch(t){W(a,a.return,t);}}break;case 1:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);break;case 5:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"");}catch(t){W(a,a.return,t);}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
	a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l);}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
	f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1));}e[Pf]=f;}catch(t){W(a,a.return,t);}}break;case 6:ck(b,a);ek(a);if(d&4){if(null===a.stateNode)throw Error(p(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f;}catch(t){W(a,a.return,t);}}break;case 3:ck(b,a);ek(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo);}catch(t){W(a,a.return,t);}break;case 4:ck(b,a);ek(a);break;case 13:ck(b,a);ek(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
	null!==e.alternate&&null!==e.alternate.memoizedState||(fk=B()));d&4&&ak(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,ck(b,a),U=l):ck(b,a);ek(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Pj(4,r,r.return);break;case 1:Lj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
	b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount();}catch(t){W(d,c,t);}}break;case 5:Lj(r,r.return);break;case 22:if(null!==r.memoizedState){gk(q);continue}}null!==y?(y.return=r,V=y):gk(q);}m=m.sibling;}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
	rb("display",g));}catch(t){W(a,a.return,t);}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps;}catch(t){W(a,a.return,t);}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return;}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling;}}break;case 19:ck(b,a);ek(a);d&4&&ak(a);break;case 21:break;default:ck(b,
	a),ek(a);}}function ek(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Tj(c)){var d=c;break a}c=c.return;}throw Error(p(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Uj(a);Wj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Uj(a);Vj(a,h,g);break;default:throw Error(p(161));}}catch(k){W(a,a.return,k);}a.flags&=-3;}b&4096&&(a.flags&=-4097);}function hk(a,b,c){V=a;ik(a);}
	function ik(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Jj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Jj;var l=U;Jj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?jk(e):null!==k?(k.return=g,V=k):jk(e);for(;null!==f;)V=f,ik(f),f=f.sibling;V=e;Jj=h;U=l;}kk(a);}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):kk(a);}}
	function kk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Qj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else {var e=b.elementType===b.type?c.memoizedProps:Ci(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate);}var f=b.updateQueue;null!==f&&sh(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
	b.child.stateNode;break;case 1:c=b.child.stateNode;}sh(b,g,c);}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src);}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q);}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
	default:throw Error(p(163));}U||b.flags&512&&Rj(b);}catch(r){W(b,b.return,r);}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return;}}function gk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return;}}
	function jk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Qj(4,b);}catch(k){W(b,c,k);}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount();}catch(k){W(b,e,k);}}var f=b.return;try{Rj(b);}catch(k){W(b,f,k);}break;case 5:var g=b.return;try{Rj(b);}catch(k){W(b,g,k);}}}catch(k){W(b,b.return,k);}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return;}}
	var lk=Math.ceil,mk=ua.ReactCurrentDispatcher,nk=ua.ReactCurrentOwner,ok=ua.ReactCurrentBatchConfig,K=0,Q=null,Y=null,Z=0,fj=0,ej=Uf(0),T=0,pk=null,rh=0,qk=0,rk=0,sk=null,tk=null,fk=0,Gj=Infinity,uk=null,Oi=false,Pi=null,Ri=null,vk=false,wk=null,xk=0,yk=0,zk=null,Ak=-1,Bk=0;function R(){return 0!==(K&6)?B():-1!==Ak?Ak:Ak=B()}
	function yi(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Bk&&(Bk=yc()),Bk;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function gi(a,b,c,d){if(50<yk)throw yk=0,zk=null,Error(p(185));Ac(a,c,d);if(0===(K&2)||a!==Q)a===Q&&(0===(K&2)&&(qk|=c),4===T&&Ck(a,Z)),Dk(a,d),1===c&&0===K&&0===(b.mode&1)&&(Gj=B()+500,fg&&jg());}
	function Dk(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===Q?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Ek.bind(null,a)):hg(Ek.bind(null,a)),Jf(function(){0===(K&6)&&jg();}),c=null;else {switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc;}c=Fk(c,Gk.bind(null,a));}a.callbackPriority=b;a.callbackNode=c;}}
	function Gk(a,b){Ak=-1;Bk=0;if(0!==(K&6))throw Error(p(327));var c=a.callbackNode;if(Hk()&&a.callbackNode!==c)return null;var d=uc(a,a===Q?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Ik(a,d);else {b=d;var e=K;K|=2;var f=Jk();if(Q!==a||Z!==b)uk=null,Gj=B()+500,Kk(a,b);do try{Lk();break}catch(h){Mk(a,h);}while(1);$g();mk.current=f;K=e;null!==Y?b=0:(Q=null,Z=0,b=T);}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Nk(a,e)));if(1===b)throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;if(6===b)Ck(a,d);
	else {e=a.current.alternate;if(0===(d&30)&&!Ok(e)&&(b=Ik(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Nk(a,f))),1===b))throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p(345));case 2:Pk(a,tk,uk);break;case 3:Ck(a,d);if((d&130023424)===d&&(b=fk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){R();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),b);break}Pk(a,tk,uk);break;case 4:Ck(a,d);if((d&4194240)===
	d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f;}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*lk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),d);break}Pk(a,tk,uk);break;case 5:Pk(a,tk,uk);break;default:throw Error(p(329));}}}Dk(a,B());return a.callbackNode===c?Gk.bind(null,a):null}
	function Nk(a,b){var c=sk;a.current.memoizedState.isDehydrated&&(Kk(a,b).flags|=256);a=Ik(a,b);2!==a&&(b=tk,tk=c,null!==b&&Fj(b));return a}function Fj(a){null===tk?tk=a:tk.push.apply(tk,a);}
	function Ok(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return !1}catch(g){return  false}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else {if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return  true;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return  true}
	function Ck(a,b){b&=~rk;b&=~qk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d;}}function Ek(a){if(0!==(K&6))throw Error(p(327));Hk();var b=uc(a,0);if(0===(b&1))return Dk(a,B()),null;var c=Ik(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Nk(a,d));}if(1===c)throw c=pk,Kk(a,0),Ck(a,b),Dk(a,B()),c;if(6===c)throw Error(p(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Pk(a,tk,uk);Dk(a,B());return null}
	function Qk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Gj=B()+500,fg&&jg());}}function Rk(a){null!==wk&&0===wk.tag&&0===(K&6)&&Hk();var b=K;K|=1;var c=ok.transition,d=C;try{if(ok.transition=null,C=1,a)return a()}finally{C=d,ok.transition=c,K=b,0===(K&6)&&jg();}}function Hj(){fj=ej.current;E(ej);}
	function Kk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:zh();E(Wf);E(H);Eh();break;case 5:Bh(d);break;case 4:zh();break;case 13:E(L);break;case 19:E(L);break;case 10:ah(d.type._context);break;case 22:case 23:Hj();}c=c.return;}Q=a;Y=a=Pg(a.current,null);Z=fj=b;T=0;pk=null;rk=qk=rh=0;tk=sk=null;if(null!==fh){for(b=
	0;b<fh.length;b++)if(c=fh[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g;}c.pending=d;}fh=null;}return a}
	function Mk(a,b){do{var c=Y;try{$g();Fh.current=Rh;if(Ih){for(var d=M.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next;}Ih=!1;}Hh=0;O=N=M=null;Jh=!1;Kh=0;nk.current=null;if(null===c||null===c.return){T=1;pk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
	m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null);}var y=Ui(g);if(null!==y){y.flags&=-257;Vi(y,g,h,f,b);y.mode&1&&Si(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t;}else n.add(k);break a}else {if(0===(b&1)){Si(f,l,b);tj();break a}k=Error(p(426));}}else if(I&&h.mode&1){var J=Ui(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Vi(J,g,h,f,b);Jg(Ji(k,h));break a}}f=k=Ji(k,h);4!==T&&(T=2);null===sk?sk=[f]:sk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
	b&=-b;f.lanes|=b;var x=Ni(f,k,b);ph(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Ri||!Ri.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Qi(f,h,b);ph(f,F);break a}}f=f.return;}while(null!==f)}Sk(c);}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Jk(){var a=mk.current;mk.current=Rh;return null===a?Rh:a}
	function tj(){if(0===T||3===T||2===T)T=4;null===Q||0===(rh&268435455)&&0===(qk&268435455)||Ck(Q,Z);}function Ik(a,b){var c=K;K|=2;var d=Jk();if(Q!==a||Z!==b)uk=null,Kk(a,b);do try{Tk();break}catch(e){Mk(a,e);}while(1);$g();K=c;mk.current=d;if(null!==Y)throw Error(p(261));Q=null;Z=0;return T}function Tk(){for(;null!==Y;)Uk(Y);}function Lk(){for(;null!==Y&&!cc();)Uk(Y);}function Uk(a){var b=Vk(a.alternate,a,fj);a.memoizedProps=a.pendingProps;null===b?Sk(a):Y=b;nk.current=null;}
	function Sk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Ej(c,b,fj),null!==c){Y=c;return}}else {c=Ij(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else {T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a;}while(null!==b);0===T&&(T=5);}function Pk(a,b,c){var d=C,e=ok.transition;try{ok.transition=null,C=1,Wk(a,b,c,d);}finally{ok.transition=e,C=d;}return null}
	function Wk(a,b,c,d){do Hk();while(null!==wk);if(0!==(K&6))throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===Q&&(Y=Q=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||vk||(vk=true,Fk(hc,function(){Hk();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=ok.transition;ok.transition=null;
	var g=C;C=1;var h=K;K|=4;nk.current=null;Oj(a,c);dk(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;hk(c);dc();K=h;C=g;ok.transition=f;}else a.current=c;vk&&(vk=false,wk=a,xk=e);f=a.pendingLanes;0===f&&(Ri=null);mc(c.stateNode);Dk(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Oi)throw Oi=false,a=Pi,Pi=null,a;0!==(xk&1)&&0!==a.tag&&Hk();f=a.pendingLanes;0!==(f&1)?a===zk?yk++:(yk=0,zk=a):yk=0;jg();return null}
	function Hk(){if(null!==wk){var a=Dc(xk),b=ok.transition,c=C;try{ok.transition=null;C=16>a?16:a;if(null===wk)var d=!1;else {a=wk;wk=null;xk=0;if(0!==(K&6))throw Error(p(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Pj(8,m,f);}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Sj(m);if(m===
	l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y;}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J;}while(null!==t)}}V=f;}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Pj(9,f,f.return);}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return;}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
	u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Qj(9,h);}}catch(na){W(h,h.return,na);}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return;}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a);}catch(na){}d=!0;}return d}finally{C=c,ok.transition=b;}}return  false}function Xk(a,b,c){b=Ji(c,b);b=Ni(a,b,1);a=nh(a,b,1);b=R();null!==a&&(Ac(a,1,b),Dk(a,b));}
	function W(a,b,c){if(3===a.tag)Xk(a,a,c);else for(;null!==b;){if(3===b.tag){Xk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ri||!Ri.has(d))){a=Ji(c,a);a=Qi(b,a,1);b=nh(b,a,1);a=R();null!==b&&(Ac(b,1,a),Dk(b,a));break}}b=b.return;}}
	function Ti(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=R();a.pingedLanes|=a.suspendedLanes&c;Q===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-fk?Kk(a,0):rk|=c);Dk(a,b);}function Yk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=R();a=ih(a,b);null!==a&&(Ac(a,b,c),Dk(a,c));}function uj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Yk(a,c);}
	function bk(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314));}null!==d&&d.delete(b);Yk(a,c);}var Vk;
	Vk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)dh=true;else {if(0===(a.lanes&c)&&0===(b.flags&128))return dh=false,yj(a,b,c);dh=0!==(a.flags&131072)?true:false;}else dh=false,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;ij(a,b);a=b.pendingProps;var e=Yf(b,H.current);ch(b,c);e=Nh(null,b,d,a,e,c);var f=Sh();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
	null,Zf(d)?(f=true,cg(b)):f=false,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,kh(b),e.updater=Ei,b.stateNode=e,e._reactInternals=b,Ii(b,d,a,c),b=jj(null,b,d,true,f,c)):(b.tag=0,I&&f&&vg(b),Xi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{ij(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Zk(d);a=Ci(d,a);switch(e){case 0:b=cj(null,b,d,a,c);break a;case 1:b=hj(null,b,d,a,c);break a;case 11:b=Yi(null,b,d,a,c);break a;case 14:b=$i(null,b,d,Ci(d.type,a),c);break a}throw Error(p(306,
	d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),cj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),hj(a,b,d,e,c);case 3:a:{kj(b);if(null===a)throw Error(p(387));d=b.pendingProps;f=b.memoizedState;e=f.element;lh(a,b);qh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:false,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
	f,b.memoizedState=f,b.flags&256){e=Ji(Error(p(423)),b);b=lj(a,b,d,c,e);break a}else if(d!==e){e=Ji(Error(p(424)),b);b=lj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=true,zg=null,c=Vg(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else {Ig();if(d===e){b=Zi(a,b,c);break a}Xi(a,b,d,c);}b=b.child;}return b;case 5:return Ah(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
	gj(a,b),Xi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return oj(a,b,c);case 4:return yh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Ug(b,null,d,c):Xi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),Yi(a,b,d,e,c);case 7:return Xi(a,b,b.pendingProps,c),b.child;case 8:return Xi(a,b,b.pendingProps.children,c),b.child;case 12:return Xi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
	g=e.value;G(Wg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=Zi(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=mh(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k;}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);bh(f.return,
	c,b);h.lanes|=c;break}k=k.next;}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);bh(g,c,b);g=f.sibling;}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return;}f=g;}Xi(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,d=b.pendingProps.children,ch(b,c),e=eh(e),d=d(e),b.flags|=1,Xi(a,b,d,c),
	b.child;case 14:return d=b.type,e=Ci(d,b.pendingProps),e=Ci(d.type,e),$i(a,b,d,e,c);case 15:return bj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),ij(a,b),b.tag=1,Zf(d)?(a=true,cg(b)):a=false,ch(b,c),Gi(b,d,e),Ii(b,d,e,c),jj(null,b,d,true,a,c);case 19:return xj(a,b,c);case 22:return dj(a,b,c)}throw Error(p(156,b.tag));};function Fk(a,b){return ac(a,b)}
	function $k(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null;}function Bg(a,b,c,d){return new $k(a,b,c,d)}function aj(a){a=a.prototype;return !(!a||!a.isReactComponent)}
	function Zk(a){if("function"===typeof a)return aj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
	function Pg(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
	c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
	function Rg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)aj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Tg(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return pj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
	break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Tg(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function pj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:false};return a}function Qg(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
	function Sg(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
	function al(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
	null;}function bl(a,b,c,d,e,f,g,h,k){a=new al(a,b,c,h,k);1===b?(b=1,true===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};kh(f);return a}function cl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
	function dl(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return;}while(null!==b);throw Error(p(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
	function el(a,b,c,d,e,f,g,h,k){a=bl(c,d,true,a,e,f,g,h,k);a.context=dl(null);c=a.current;d=R();e=yi(c);f=mh(d,e);f.callback=void 0!==b&&null!==b?b:null;nh(c,f,e);a.current.lanes=e;Ac(a,e,d);Dk(a,d);return a}function fl(a,b,c,d){var e=b.current,f=R(),g=yi(e);c=dl(c);null===b.context?b.context=c:b.pendingContext=c;b=mh(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=nh(e,b,g);null!==a&&(gi(a,e,g,f),oh(a,e,g));return g}
	function gl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function hl(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b;}}function il(a,b){hl(a,b);(a=a.alternate)&&hl(a,b);}function jl(){return null}var kl="function"===typeof reportError?reportError:function(a){console.error(a);};function ll(a){this._internalRoot=a;}
	ml.prototype.render=ll.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p(409));fl(a,b,null,null);};ml.prototype.unmount=ll.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Rk(function(){fl(null,a,null,null);});b[uf]=null;}};function ml(a){this._internalRoot=a;}
	ml.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a);}};function nl(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function ol(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function pl(){}
	function ql(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=gl(g);f.call(a);};}var g=el(b,d,a,0,null,false,false,"",pl);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Rk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=gl(k);h.call(a);};}var k=bl(a,0,false,null,null,false,false,"",pl);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Rk(function(){fl(b,k,c,d);});return k}
	function rl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=gl(g);h.call(a);};}fl(b,g,a,e);}else g=ql(c,b,a,e,d);return gl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Dk(b,B()),0===(K&6)&&(Gj=B()+500,jg()));}break;case 13:Rk(function(){var b=ih(a,1);if(null!==b){var c=R();gi(b,a,1,c);}}),il(a,1);}};
	Fc=function(a){if(13===a.tag){var b=ih(a,134217728);if(null!==b){var c=R();gi(b,a,134217728,c);}il(a,134217728);}};Gc=function(a){if(13===a.tag){var b=yi(a),c=ih(a,b);if(null!==c){var d=R();gi(c,a,b,d);}il(a,b);}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c;}};
	yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d);bb(d,e);}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,false);}};Gb=Qk;Hb=Rk;
	var sl={usingClientEntryPoint:false,Events:[Cb,ue,Db,Eb,Fb,Qk]},tl={findFiberByHostInstance:Wc,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"};
	var ul={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||
	jl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{kc=vl.inject(ul),lc=vl;}catch(a){}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sl;
	reactDom_production_min.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!nl(b))throw Error(p(200));return cl(a,b,null,c)};reactDom_production_min.createRoot=function(a,b){if(!nl(a))throw Error(p(299));var c=false,d="",e=kl;null!==b&&void 0!==b&&(true===b.unstable_strictMode&&(c=true),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=bl(a,1,false,null,null,c,false,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ll(b)};
	reactDom_production_min.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p(188));a=Object.keys(a).join(",");throw Error(p(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};reactDom_production_min.flushSync=function(a){return Rk(a)};reactDom_production_min.hydrate=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,true,c)};
	reactDom_production_min.hydrateRoot=function(a,b,c){if(!nl(a))throw Error(p(405));var d=null!=c&&c.hydratedSources||null,e=false,f="",g=kl;null!==c&&void 0!==c&&(true===c.unstable_strictMode&&(e=true),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=el(b,null,a,1,null!=c?c:null,e,false,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
	e);return new ml(b)};reactDom_production_min.render=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,false,c)};reactDom_production_min.unmountComponentAtNode=function(a){if(!ol(a))throw Error(p(40));return a._reactRootContainer?(Rk(function(){rl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null;});}),true):false};reactDom_production_min.unstable_batchedUpdates=Qk;
	reactDom_production_min.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!ol(c))throw Error(p(200));if(null==a||void 0===a._reactInternals)throw Error(p(38));return rl(a,b,c,false,d)};reactDom_production_min.version="18.3.1-next-f1338f8080-20240426";
	return reactDom_production_min;
}

var hasRequiredReactDom;

function requireReactDom () {
	if (hasRequiredReactDom) return reactDom.exports;
	hasRequiredReactDom = 1;

	function checkDCE() {
	  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	  if (
	    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
	    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
	  ) {
	    return;
	  }
	  try {
	    // Verify that the code above has been dead code eliminated (DCE'd).
	    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	  } catch (err) {
	    // DevTools shouldn't crash React, no matter what.
	    // We should still report in case we break this code.
	    console.error(err);
	  }
	}

	{
	  // DCE check should happen before ReactDOM bundle executes so that
	  // DevTools can report bad minification during injection.
	  checkDCE();
	  reactDom.exports = requireReactDom_production_min();
	}
	return reactDom.exports;
}

var hasRequiredClient;

function requireClient () {
	if (hasRequiredClient) return client;
	hasRequiredClient = 1;

	var m = requireReactDom();
	{
	  client.createRoot = m.createRoot;
	  client.hydrateRoot = m.hydrateRoot;
	}
	return client;
}

var clientExports = requireClient();

// First-run default circles. Earthy palette to match the field-notebook feel.
// `parentId: null` = top-level circle. Sub-circles set parentId to their parent.

function seedCircles() {
  return [{
    id: 'circle_work',
    name: 'Work',
    color: '#3A5A6C',
    parentId: null
  },
  // ink blue
  {
    id: 'circle_school',
    name: "Kids' School",
    color: '#B89548',
    parentId: null
  },
  // ochre
  {
    id: 'circle_sports',
    name: "Kids' Sports",
    color: '#5A7A4F',
    parentId: null
  },
  // forest
  {
    id: 'circle_college',
    name: 'College Friends',
    color: '#9C5C76',
    parentId: null
  },
  // dusty rose
  {
    id: 'circle_hometown',
    name: 'Hometown Friends',
    color: '#C97B3A',
    parentId: null
  } // amber
  ];
}

// Palette to offer when the user adds a new circle.
const CIRCLE_PALETTE = ['#3A5A6C', '#B89548', '#5A7A4F', '#9C5C76', '#C97B3A', '#7B6CA6', '#4D7A82', '#8E5A3F', '#6B7A3A', '#A85C50'];

// storage.js
//
// The ONLY module that touches persistence. Today this wraps localStorage;
// tomorrow it can wrap a fetch-backed API without any UI changes, as long
// as the loadData / saveData signatures stay the same.
//
// Shape on disk:
//   {
//     version: number,
//     circles:  Circle[],
//     people:   Person[],
//     settings: {
//       calendar?: { source: 'ics', url: string, label: string } | null
//     }
//   }

const KEY = 'circles.v1';
const VERSION = 1;

// Automatic rolling backups. The app writes a snapshot at most once per
// interval and keeps the last N, so a user can roll back even if they never
// exported by hand — the cheapest insurance against data loss.
const BACKUPS_KEY = 'circles.backups';
const MAX_BACKUPS = 8;
const BACKUP_INTERVAL_MS = 12 * 60 * 60 * 1000; // ~ one restore point per half-day

/**
 * Pure: given the existing backup list and a fresh JSON snapshot, decide the
 * next list. Adds a new entry only if enough time has passed since the most
 * recent one, then trims to `max`. Newest first. Deterministic given `now`.
 */
function pushBackup(existing, json, now, opts = {}) {
  const {
    max = MAX_BACKUPS,
    minIntervalMs = BACKUP_INTERVAL_MS
  } = opts;
  const list = Array.isArray(existing) ? existing : [];
  const last = list[0];
  if (last && typeof last.ts === 'number' && now - last.ts < minIntervalMs) {
    return list; // too soon — keep the history sparse and meaningful
  }
  const entry = {
    id: `bk_${now.toString(36)}`,
    ts: now,
    json
  };
  return [entry, ...list].slice(0, max);
}
const DEFAULT_SETTINGS = {
  calendar: null
};
const EMPTY = {
  version: VERSION,
  circles: [],
  people: [],
  settings: {
    ...DEFAULT_SETTINGS
  }
};
function safeParse(raw) {
  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return null;
    return parsed;
  } catch {
    return null;
  }
}

/** Returns { circles, people, settings }. Seeds default circles on first run. */
async function loadData() {
  if (typeof window === 'undefined' || !window.localStorage) {
    return {
      circles: seedCircles(),
      people: [],
      settings: {
        ...DEFAULT_SETTINGS
      }
    };
  }
  const raw = window.localStorage.getItem(KEY);
  if (!raw) {
    const fresh = {
      ...EMPTY,
      circles: seedCircles()
    };
    window.localStorage.setItem(KEY, JSON.stringify(fresh));
    return {
      circles: fresh.circles,
      people: fresh.people,
      settings: {
        ...fresh.settings
      }
    };
  }
  const parsed = safeParse(raw) || {
    ...EMPTY
  };
  return {
    circles: Array.isArray(parsed.circles) ? parsed.circles : [],
    people: migratePeople(parsed.people),
    settings: {
      ...DEFAULT_SETTINGS,
      ...(parsed.settings && typeof parsed.settings === 'object' ? parsed.settings : {})
    }
  };
}

// Migration on load. Purely additive — re-running is a no-op.
//
//   Phase 2: person.interactions[] (auto-log ledger of calendar events)
//   Phase 3: person.details[] grows from string[] to
//            { id, text, learnedAt, confirmedAt }[] so decay tracking
//            ("Still True?" prompts) has timestamps to age against.
function migratePeople(input) {
  if (!Array.isArray(input)) return [];
  const nowIso = new Date().toISOString();
  let detailCounter = 0;
  return input.map(p => {
    if (!p || typeof p !== 'object') return p;
    return {
      ...p,
      interactions: Array.isArray(p.interactions) ? p.interactions : [],
      // Phase 4: unresolved storylines ("open loops") — see lib/openLoops.js
      openLoops: Array.isArray(p.openLoops) ? p.openLoops : [],
      details: (Array.isArray(p.details) ? p.details : []).map(d => {
        if (typeof d === 'string') {
          // Old shape — upgrade. learnedAt defaults to now because we
          // genuinely don't know when it was learned; same for confirmedAt.
          // The decay check is "older than 180d AND not recently confirmed",
          // so backfilled items won't fire decay until they age 180d from
          // this migration, which is the right behavior.
          return {
            id: `det_${Date.now().toString(36)}_${detailCounter++}`,
            text: d,
            learnedAt: nowIso,
            confirmedAt: nowIso
          };
        }
        // Already an object — make sure required fields exist
        if (d && typeof d === 'object') {
          return {
            id: d.id || `det_${Date.now().toString(36)}_${detailCounter++}`,
            text: d.text || '',
            learnedAt: d.learnedAt || nowIso,
            confirmedAt: d.confirmedAt || d.learnedAt || nowIso
          };
        }
        return d;
      })
    };
  });
}

/** Persists the entire app state. Caller passes { circles, people, settings }. */
async function saveData({
  circles,
  people,
  settings
}) {
  if (typeof window === 'undefined' || !window.localStorage) return;
  const json = JSON.stringify({
    version: VERSION,
    circles,
    people,
    settings: settings || {
      ...DEFAULT_SETTINGS
    }
  });
  try {
    window.localStorage.setItem(KEY, json);
  } catch (e) {
    // Out of quota — free the backups and retry once so the live save (the
    // important one) still lands.
    try {
      window.localStorage.removeItem(BACKUPS_KEY);
    } catch {}
    try {
      window.localStorage.setItem(KEY, json);
    } catch (e2) {
      console.error('saveData failed (quota)', e2);
      return;
    }
  }
  maybeSnapshot(json);
}
function readBackups() {
  try {
    const raw = window.localStorage.getItem(BACKUPS_KEY);
    const list = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}
function writeBackups(list) {
  try {
    window.localStorage.setItem(BACKUPS_KEY, JSON.stringify(list));
  } catch {
    // Quota: keep only the most recent few and try once more; never throw.
    try {
      window.localStorage.setItem(BACKUPS_KEY, JSON.stringify(list.slice(0, 3)));
    } catch {}
  }
}
function maybeSnapshot(json, now = Date.now()) {
  if (typeof window === 'undefined' || !window.localStorage) return;
  const list = readBackups();
  const next = pushBackup(list, json, now);
  if (next !== list) writeBackups(next); // new array only when a snapshot was added
}

/** Restore points for the Settings UI — newest first, with a quick summary. */
function listBackups() {
  if (typeof window === 'undefined' || !window.localStorage) return [];
  return readBackups().map(b => {
    let people = 0;
    let circles = 0;
    try {
      const d = JSON.parse(b.json);
      people = Array.isArray(d.people) ? d.people.length : 0;
      circles = Array.isArray(d.circles) ? d.circles.length : 0;
    } catch {}
    return {
      id: b.id,
      ts: b.ts,
      people,
      circles
    };
  });
}

/** Timestamp (ms) of the most recent automatic backup, or null. */
function lastBackupAt() {
  if (typeof window === 'undefined' || !window.localStorage) return null;
  const list = readBackups();
  return list[0]?.ts || null;
}

// Off-device backup tracking. Distinct from the on-device auto-backups above:
// this records when the user last saved a copy somewhere that survives losing
// the phone (a file download / iCloud Drive). The auto-backups live in this same
// localStorage, so they're gone with the device — this timestamp is what the
// "back up off your phone" reminder is judged against.
const EXPORT_KEY = 'circles.lastExport';

/** Record that the user just saved a backup off this device. */
function markExported(now = Date.now()) {
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    window.localStorage.setItem(EXPORT_KEY, String(now));
  } catch {}
}

/** Timestamp (ms) of the last off-device backup the user saved, or null. */
function lastExportAt() {
  if (typeof window === 'undefined' || !window.localStorage) return null;
  const v = window.localStorage.getItem(EXPORT_KEY);
  const n = v ? Number(v) : NaN;
  return Number.isFinite(n) ? n : null;
}

/** Restore a specific automatic backup by id. Throws if missing/invalid. */
function restoreBackup(id) {
  const b = readBackups().find(x => x.id === id);
  if (!b) throw new Error('That backup is no longer available.');
  importData(b.json); // validates + writes KEY; throws on bad data
  return true;
}

/** Dev / debug helper. Not used by the app. */
async function clearData() {
  if (typeof window === 'undefined' || !window.localStorage) return;
  window.localStorage.removeItem(KEY);
}

/** Human-readable backup of everything on this device (pretty-printed). */
function exportData() {
  if (typeof window === 'undefined' || !window.localStorage) return '{}';
  const raw = window.localStorage.getItem(KEY) || JSON.stringify(EMPTY);
  try {
    return JSON.stringify(JSON.parse(raw), null, 2);
  } catch {
    return raw;
  }
}

/**
 * Restore from a backup string. Validates it looks like a Circles export
 * before overwriting — throws a friendly error otherwise. The caller should
 * reload so the app re-hydrates from storage.
 */
function importData(text) {
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new Error("That file isn't valid JSON.");
  }
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new Error("This doesn't look like a Circles backup.");
  }
  if (!Array.isArray(parsed.people) || !Array.isArray(parsed.circles)) {
    throw new Error("This backup is missing its people or circles.");
  }
  if (typeof window === 'undefined' || !window.localStorage) return false;
  window.localStorage.setItem(KEY, JSON.stringify({
    version: VERSION,
    circles: parsed.circles,
    people: parsed.people,
    settings: parsed.settings && typeof parsed.settings === 'object' ? parsed.settings : {
      ...DEFAULT_SETTINGS
    }
  }));
  return true;
}

// Almanac design tokens — single source of truth for visual style.
// Source: prototype/direction-d.jsx in the design handoff.

const theme = {
  // NOTE: UI tokens resolve to CSS variables (defined in index.html) so the
  // app can flip between the light "paper" palette and the dark "lamplight"
  // palette by toggling [data-theme] on <html>. The values below are the
  // var() references — the actual colors live in the :root blocks.
  colors: {
    // Paper layer (warm cream)
    paper: 'var(--c-paper)',
    paperDeep: 'var(--c-paper-deep)',
    card: 'var(--c-card)',
    // Ink (warm near-black scale)
    ink: 'var(--c-ink)',
    ink2: 'var(--c-ink2)',
    ink3: 'var(--c-ink3)',
    ink4: 'var(--c-ink4)',
    // Rules & dividers
    rule: 'var(--c-rule)',
    ruleStrong: 'var(--c-rule-strong)',
    // Accent (terracotta)
    accent: 'var(--c-accent)',
    accentInk: 'var(--c-accent-ink)',
    accentSoft: 'var(--c-accent-soft)',
    accentSofter: 'var(--c-accent-softer)',
    // Amber (secondary highlight — calendar voice orb)
    amber: 'var(--c-amber)',
    amberInk: 'var(--c-amber-ink)',
    // Status
    success: 'var(--c-success)',
    danger: 'var(--c-danger)',
    overlay: 'var(--c-overlay)',
    // Derived tokens (added in the polish pass — see docs of the sweep)
    onAccent: 'var(--c-on-accent)',
    accentBorder: 'var(--c-accent-border)',
    dangerSoft: 'var(--c-danger-soft)',
    toastAction: 'var(--c-toast-action)' // UNDO on the dark toast, AA in both themes
  },
  // Wallet-stack card colors (cycle by event index)
  walletColors: [{
    bg: '#b8593a',
    fg: '#f6f1e7',
    name: 'terracotta'
  }, {
    bg: '#3a4664',
    fg: '#f6f1e7',
    name: 'night'
  }, {
    bg: '#c98a2c',
    fg: '#3a2a10',
    name: 'amber'
  }, {
    bg: '#3d4a3a',
    fg: '#f6f1e7',
    name: 'forest'
  }],
  fonts: {
    // Display: serif for titles, names, quotes, italic accents
    serif: '"Newsreader", "Source Serif 4", Georgia, serif',
    // Body: clean modern sans
    sans: '"Geist", -apple-system, system-ui, "Segoe UI", sans-serif',
    // Labels: uppercase mono for section headers, source tags, meta
    mono: '"JetBrains Mono", ui-monospace, "SF Mono", monospace',
    // Backwards-compatible aliases (so old code that still references these works)
    display: '"Newsreader", "Source Serif 4", Georgia, serif',
    body: '"Geist", -apple-system, system-ui, "Segoe UI", sans-serif'
  },
  tracking: {
    // serif display headings
    label: '0.12em' // EVERY uppercase mono element
  },
  space: {
    sm: 8,
    md: 12,
    lg: 18},
  radii: {
    md: 8,
    lg: 14,
    pill: 999
  },
  // Neutral shadows resolve to CSS vars so they deepen correctly in dark
  // mode. `card`/`cardRaised` are two-pass (ambient + key light) for real
  // physical depth on the wallet stack. Colored shadows stay literal.
  shadow: {
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)',
    card: 'var(--shadow-card)',
    cardRaised: 'var(--shadow-card-raised)',
    accent: '0 8px 24px rgba(184, 89, 58, 0.4)'},
  // Shared easing + duration tokens so motion feels consistent everywhere.
  ease: {
    spring: 'cubic-bezier(.32,.72,.24,1)',
    // settle with slight follow-through
    out: 'cubic-bezier(.22,1,.36,1)',
    // decelerate (enters)
    standard: 'cubic-bezier(.4,0,.2,1)' // material standard
  },
  motion: {
    base: 240,
    slow: 360
  }};

// THE micro-label: every uppercase mono label in the app is this, verbatim.
// (Only exceptions: SVG chart axis ticks at 9, and the splash tagline's wide
// 0.22em brand tracking.) Spread it, then override color when needed.
const microLabel = {
  fontFamily: theme.fonts.mono,
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: theme.colors.ink3
};

// Shared ruled-notepad geometry — QuickCapture, DebriefSheet, and Glance notes
// must render the identical paper: same line rhythm, same margin line.
const notepad = {
  LINE_H: 32,
  // ruled-line rhythm; textarea line-height must match
  MARGIN_X: 44,
  // left margin line position
  TEXT_PAD_LEFT: 18,
  // gap from margin line to text
  rule: 'var(--c-rule)',
  // ruled horizontal lines
  marginLine: 'var(--c-selection)' // terracotta margin line (theme-aware)
};

// Convenience: standardized container width for non-phone layouts (legacy)
const PAGE_MAX_WIDTH = 760;

// Tiny non-cryptographic id generator. Stable enough for client-side records.
// Format: short prefix + base36 timestamp + random tail.

function makeId(prefix = 'id') {
  const t = Date.now().toString(36);
  const r = Math.random().toString(36).slice(2, 8);
  return `${prefix}_${t}${r}`;
}

// Phase 2 — the passive ledger.
//
// `person.interactions[]` is the durable record of every calendar event the
// app has decided belongs to a person. It's the single source of truth for
// "when did I last see X?" so the user never has to enter recency by hand.
//
// Reconciliation is idempotent: rerunning it a thousand times with the same
// events leaves the ledger unchanged. The dedup key is (source, eventId).
//
// We deliberately keep this module pure — no React, no storage, no fetch.
// App.jsx is the only thing that decides when to call reconcileEvents and
// what to do with the result.


// Stable identity for a calendar event. uid alone isn't enough because
// recurring events repeat the same uid for every instance, so we fold in
// the start time. (The server already does the same trick for its dedup.)
function eventIdFor(ev) {
  if (!ev) return null;
  const uid = ev.uid || `${ev.summary || ''}`;
  const start = ev.start || '';
  return `${uid}@${start}`;
}

/**
 * Walk `events`, find ones that already matched a person via annotateEvents
 * (so each event has matchedPersonIds[]), and append a fresh interaction
 * to each matched person — UNLESS one with the same (source, eventId)
 * already exists.
 *
 * Past events only: we don't want "Coffee with Sarah" showing up in the
 * activity feed before it's happened.
 *
 * Returns { people, addedCount }. `people` is a new array (or the same
 * reference if nothing changed) so React's strict equality skips the
 * re-render when there's nothing new.
 */
function reconcileEvents(people, events, now = Date.now()) {
  if (!Array.isArray(people) || !Array.isArray(events)) {
    return {
      people: people || [],
      addedCount: 0
    };
  }

  // Build the lookup once: personId -> Set of eventIds already in the ledger
  const seen = new Map();
  for (const p of people) {
    const set = new Set();
    for (const i of p.interactions || []) {
      if (i && i.source === 'calendar' && i.eventId) set.add(i.eventId);
    }
    seen.set(p.id, set);
  }

  // For each past, matched event, queue up new interactions per personId
  const newRowsByPerson = new Map(); // personId -> InteractionRow[]
  let addedCount = 0;
  for (const ev of events) {
    if (!ev || !ev.start) continue;
    const startMs = new Date(ev.start).getTime();
    if (Number.isNaN(startMs) || startMs > now) continue; // future = not yet
    const matched = ev.matchedPersonIds || [];
    if (matched.length === 0) continue;
    const eventId = eventIdFor(ev);
    if (!eventId) continue;
    for (const pid of matched) {
      const already = seen.get(pid);
      if (!already || already.has(eventId)) continue;
      already.add(eventId); // prevent same event matching twice in one pass
      const row = {
        id: makeId('int'),
        source: 'calendar',
        eventId,
        date: ev.start,
        summary: ev.summary || '',
        location: ev.location || ''
      };
      const list = newRowsByPerson.get(pid) || [];
      list.push(row);
      newRowsByPerson.set(pid, list);
      addedCount++;
    }
  }
  if (addedCount === 0) return {
    people,
    addedCount: 0
  };
  const nextPeople = people.map(p => {
    const rows = newRowsByPerson.get(p.id);
    if (!rows || rows.length === 0) return p;
    return {
      ...p,
      interactions: [...(p.interactions || []), ...rows]
    };
  });
  return {
    people: nextPeople,
    addedCount
  };
}

/**
 * The single source of recency. Takes the max date across notes +
 * interactions and returns an ISO string, or null if the person has
 * never been recorded.
 *
 * Callers can pass through `relativeDays(lastTouch(p))` for the chip
 * text or compare ms directly for sorting/filtering.
 */
function lastTouch(person) {
  if (!person) return null;
  let max = null;
  for (const n of person.notes || []) {
    if (n && n.date && (!max || n.date > max)) max = n.date;
  }
  for (const i of person.interactions || []) {
    if (i && i.date && (!max || i.date > max)) max = i.date;
  }
  return max;
}

/**
 * Convenience: days since lastTouch, or Infinity if never. Mirrors the
 * patterns already in graph.js / PeopleList.jsx so swapping callers is
 * a one-line drop-in.
 */
function daysSinceTouch(person, now = Date.now()) {
  const iso = lastTouch(person);
  if (!iso) return Infinity;
  return Math.floor((now - new Date(iso).getTime()) / 86_400_000);
}

/**
 * Build a manual (user-logged) interaction row. Source = 'manual' so the
 * activity feed can tag it differently from auto-logged calendar events
 * and downstream code knows it wasn't sourced from the .ics fetch.
 *
 * The caller is responsible for splicing this into person.interactions
 * (typically via onChange) — keeping the helper pure makes it easy to
 * reuse from forms, voice capture, or future bulk-import flows.
 */
function makeManualInteraction({
  date,
  summary,
  location
} = {}) {
  return {
    id: makeId('int'),
    source: 'manual',
    // No eventId for manual rows — reconcileEvents skips them by virtue
    // of the source !== 'calendar' check in its dedup pass.
    date: date || new Date().toISOString(),
    summary: (summary || '').trim(),
    location: (location || '').trim()
  };
}

// Phase 4 — smart circles.
//
// A smart circle's membership is COMPUTED, not stored. The user creates
// one of the presets below ("Drifting", "Connectors", "Untouched"), and
// from then on the membership stays current automatically as people's
// activity, referrals, and circle assignments change.
//
// Rule shape:
//   { type: 'drift' | 'connector' | 'untouched',
//     params?: { days?: number, minOut?: number } }
//
// All three rules below read from existing person fields — no new data
// plumbing. evaluateSmartCircle is a pure function; the UI calls it at
// render time and never persists computed memberships.


// ---------------- Preset registry ----------------
//
// PRESETS drives the "+ Smart" picker UI in CirclesManager. Each entry
// gives the human label, an icon glyph, a default rule, and an optional
// description shown beneath the name.

const PRESETS = [{
  key: 'drift',
  name: 'Drifting',
  icon: '↓',
  description: 'People you haven\'t touched in {days}+ days who you\'ve logged before.',
  defaultRule: {
    type: 'drift',
    params: {
      days: 30
    }
  },
  tone: 'personal'
}, {
  key: 'connector',
  name: 'Connectors',
  icon: '✦',
  description: 'People who\'ve introduced you to {minOut}+ others.',
  defaultRule: {
    type: 'connector',
    params: {
      minOut: 2
    }
  },
  tone: 'work'
}, {
  key: 'untouched',
  name: 'Untouched',
  icon: '○',
  description: 'People you haven\'t logged a moment or note with yet.',
  defaultRule: {
    type: 'untouched',
    params: {}
  },
  tone: 'personal'
}];

// Render a preset description with its params injected, e.g. "30+ days".
function describePreset(preset, rule) {
  const params = rule?.params || preset.defaultRule.params || {};
  return (preset.description || '').replace('{days}', String(params.days ?? preset.defaultRule.params?.days ?? '')).replace('{minOut}', String(params.minOut ?? preset.defaultRule.params?.minOut ?? ''));
}

// ---------------- Evaluator ----------------

/**
 * Returns a Set<personId> for the given rule.
 *
 * @param {Rule}   rule    {type, params}
 * @param {Person[]} people
 * @param {Object} ctx     reserved for future signals (events, circles)
 * @param {number} [now]
 */
function evaluateSmartCircle(rule, people, ctx = {}, now = Date.now()) {
  if (!rule || !Array.isArray(people)) return new Set();
  switch (rule.type) {
    case 'drift':
      return evalDrift(rule.params || {}, people, now);
    case 'connector':
      return evalConnector(rule.params || {}, people);
    case 'untouched':
      return evalUntouched(people);
    default:
      return new Set();
  }
}
function evalDrift({
  days = 30
}, people, now) {
  const out = new Set();
  for (const p of people) {
    const last = lastTouch(p);
    if (!last) continue; // must have prior activity
    const d = daysSinceTouch(p, now);
    if (d >= days) out.add(p.id);
  }
  return out;
}
function evalConnector({
  minOut = 2
}, people) {
  // Count outgoing referrals: for each person, how many OTHER people
  // list them as referredBy?
  const outDegree = new Map();
  for (const p of people) {
    if (p.referredBy) {
      outDegree.set(p.referredBy, (outDegree.get(p.referredBy) || 0) + 1);
    }
  }
  const out = new Set();
  for (const [pid, count] of outDegree) {
    if (count >= minOut) out.add(pid);
  }
  return out;
}
function evalUntouched(people) {
  const out = new Set();
  for (const p of people) {
    if (!lastTouch(p)) out.add(p.id);
  }
  return out;
}

// ---------------- Preset lookup helpers ----------------

function presetForRule(rule) {
  if (!rule || !rule.type) return null;
  return PRESETS.find(p => p.key === rule.type) || null;
}

// circles.js
//
// Pure helpers for the circle tree. Circles form a tree via Circle.parentId
// (null/undefined = top-level). Arbitrary depth allowed; cycles are caller's
// problem (the UI prevents them).

const PATH_SEP = ' › '; // U+203A SINGLE RIGHT-POINTING ANGLE QUOTATION MARK

/** Parent id of a circle, normalized to null for missing/falsy. */
function parentIdOf(circle) {
  return circle?.parentId || null;
}

/** Returns a Map<id, circle> for fast lookup. */
function indexCircles(circles) {
  const map = new Map();
  for (const c of circles) map.set(c.id, c);
  return map;
}

/**
 * Returns a Map<parentId | 'root', child[]>.
 *   sort: 'name' (default) | 'natural' — 'natural' keeps insertion/array order
 *         so the user can hand-arrange top-level circles via drag-and-drop.
 */
function indexChildren(circles, {
  sort = 'name'
} = {}) {
  const map = new Map();
  for (const c of circles) {
    const key = parentIdOf(c) || 'root';
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(c);
  }
  if (sort === 'name') {
    for (const arr of map.values()) {
      arr.sort((a, b) => a.name.localeCompare(b.name));
    }
  }
  return map;
}

/**
 * Returns a flat list of circles in depth-first tree order, each annotated
 * with depth (0 = top-level). Useful for indented chip rendering.
 *   [{ ...circle, depth: 0 }, { ...circle, depth: 1 }, ...]
 */
function flattenTree(circles) {
  const children = indexChildren(circles);
  const out = [];
  function visit(parentKey, depth) {
    const kids = children.get(parentKey) || [];
    for (const c of kids) {
      out.push({
        ...c,
        depth
      });
      visit(c.id, depth + 1);
    }
  }
  visit('root', 0);
  return out;
}

/**
 * Returns the chain of ancestor ids for a given circle id, starting from the
 * immediate parent and walking up. Returns [] for top-level or unknown.
 */
function getAncestorIds(circles, id) {
  const byId = indexCircles(circles);
  const out = [];
  let cur = byId.get(id);
  const seen = new Set();
  while (cur && parentIdOf(cur) && !seen.has(cur.id)) {
    seen.add(cur.id);
    const parentId = parentIdOf(cur);
    out.push(parentId);
    cur = byId.get(parentId);
  }
  return out;
}

/** Returns this circle's id and all its descendants' ids (depth-first). */
function getDescendantIds(circles, id) {
  const children = indexChildren(circles);
  const out = [];
  function visit(curId) {
    out.push(curId);
    for (const c of children.get(curId) || []) visit(c.id);
  }
  visit(id);
  return out;
}

/** Returns the breadcrumb path of names for a circle id, e.g. ["Erik", "Baseball"]. */
function getPathNames(circles, id) {
  const byId = indexCircles(circles);
  const ancestors = getAncestorIds(circles, id).reverse(); // root → parent
  const names = ancestors.map(aid => byId.get(aid)?.name).filter(Boolean);
  const self = byId.get(id);
  if (self) names.push(self.name);
  return names;
}

/** Convenience: "Erik › Baseball". */
function getPathString(circles, id) {
  return getPathNames(circles, id).join(PATH_SEP);
}

/** Tries to find a circle by a "Parent > Child" path string (any separator). */
function findByPath(circles, pathStr) {
  if (!pathStr) return null;
  const segments = pathStr.split(/\s*(?:›|>|\/|»)\s*/) // accept several separators
  .map(s => s.trim()).filter(Boolean);
  if (segments.length === 0) return null;

  // Single segment: match by name (top-level preferred, then any)
  if (segments.length === 1) {
    const exactTop = circles.find(c => !parentIdOf(c) && c.name.toLowerCase() === segments[0].toLowerCase());
    if (exactTop) return exactTop;
    return circles.find(c => c.name.toLowerCase() === segments[0].toLowerCase()) || null;
  }

  // Multi-segment: walk from root
  let parentKey = null;
  let match = null;
  const children = indexChildren(circles);
  for (let i = 0; i < segments.length; i++) {
    const arr = children.get(parentKey || 'root') || [];
    match = arr.find(c => c.name.toLowerCase() === segments[i].toLowerCase());
    if (!match) return null;
    parentKey = match.id;
  }
  return match;
}

/** Promote descendants of `removedId` to top-level (parentId = null). */
function promoteChildren(circles, removedId) {
  return circles.map(c => parentIdOf(c) === removedId ? {
    ...c,
    parentId: null
  } : c);
}

/** Remove a circle and ALL its descendants. */
function deleteCascade(circles, removedId) {
  const toRemove = new Set(getDescendantIds(circles, removedId));
  return circles.filter(c => !toRemove.has(c.id));
}

/** Remove just one circle; promote its direct children to top-level. */
function deletePromote(circles, removedId) {
  return promoteChildren(circles, removedId).filter(c => c.id !== removedId);
}

// ─────────────────────────────────────────────────────────────────────────
// Tone — categorization metadata for the Circles browse grid.
//   work / home / past / family
// ─────────────────────────────────────────────────────────────────────────

// Three tones: personal / work / family.
const TONE_META = {
  personal: {
    color: '#9C5C76',
    label: 'PERSONAL'
  },
  // dusty rose
  work: {
    color: '#3A5A6C',
    label: 'WORK'
  },
  // ink blue
  family: {
    color: '#B8593A',
    label: 'FAMILY'
  } // terracotta
};

// Back-compat: older data used home/past — collapse both to personal.
const TONE_ALIAS = {
  home: 'personal',
  past: 'personal'
};
const TONE_HINTS = {
  work: ['work', 'team', 'office', 'company', 'colleagues', 'startup'],
  personal: ['neighborhood', 'neighbor', 'block', 'building', 'street', 'apartment', 'college', 'university', 'high school', 'hometown', 'friends', 'church', 'gym', 'book club', 'social', 'club']
};

/**
 * Infer a circle's tone if none is set.
 *   1) explicit `circle.tone` wins (with home/past back-compat aliased to personal)
 *   2) sub-circle inherits parent's inferred tone
 *   3) name-keyword match
 *   4) single short proper noun (likely a kid) → family
 *   5) fall back to 'personal'
 */
function inferTone(circle, allCircles) {
  if (!circle) return 'personal';
  if (circle.tone) {
    const aliased = TONE_ALIAS[circle.tone] || circle.tone;
    if (TONE_META[aliased]) return aliased;
  }
  const parentId = parentIdOf(circle);
  if (parentId) {
    const parent = (allCircles || []).find(c => c.id === parentId);
    if (parent) return inferTone(parent, allCircles);
  }
  const name = (circle.name || '').toLowerCase();
  for (const [tone, hints] of Object.entries(TONE_HINTS)) {
    if (hints.some(h => name.includes(h))) return tone;
  }
  // Kid-name heuristic: a single short proper noun ("Erik", "Lily", "Axel")
  if (/^[A-Z][a-z]+$/.test(circle.name || '') && (circle.name || '').length < 10) {
    return 'family';
  }
  return 'personal';
}

/**
 * Number of distinct people inside this circle's reach (self + descendants)
 * who have ANY note in the last 7 days. Used for "X active this week".
 */
function activeThisWeek(circleId, people, circles, days = 7) {
  const threshold = Date.now() - days * 86_400_000;
  const reach = new Set(getDescendantIds(circles, circleId));
  return people.filter(p => (p.circleIds || []).some(id => reach.has(id)) && (p.notes || []).some(n => new Date(n.date).getTime() > threshold)).length;
}

/**
 * Count of distinct people in this circle's reach (self + descendants).
 * Includes direct + via any descendant sub-circle.
 */
function reachCount(circleId, people, circles) {
  const reach = new Set(getDescendantIds(circles, circleId));
  return people.filter(p => (p.circleIds || []).some(id => reach.has(id))).length;
}

/** True if this circle's membership is computed by a rule (not manual). */
function isSmartCircle(circle) {
  return Boolean(circle && circle.rule && circle.rule.type);
}

/**
 * Returns an array of personIds for this circle's membership.
 *
 *   • Smart circle  → evaluateSmartCircle(rule, people)
 *   • Manual circle → people whose circleIds include this circle's id
 *
 * One API for every consumer (browse grid, detail screen, filter chips,
 * Glance badges) so smart circles slot in without each call site
 * re-implementing the predicate.
 */
function getCircleMembers(circle, people) {
  if (!circle || !Array.isArray(people)) return [];
  if (isSmartCircle(circle)) {
    const set = evaluateSmartCircle(circle.rule, people);
    return people.filter(p => set.has(p.id)).map(p => p.id);
  }
  return people.filter(p => (p.circleIds || []).includes(circle.id)).map(p => p.id);
}

// openLoops.js — the small unfinished storylines between you and a person.
//
// A relationship stays warm on specifics, not on "it's been 30 days". An open
// loop captures ONE specific unresolved thing, typed by whose move it is:
//   promise — something YOU said you'd do for them      (ripens fast: 2 days)
//   waiting — news / an answer pending from THEIR side  (medium: 7 days)
//   thread  — an unresolved storyline worth asking about (slow: 14 days)
// A loop "ripens" — becomes worth surfacing on Today — once its ripeAt passes:
// either an explicit expected-by date or a per-kind default delay. Pure +
// deterministic given `now` (ms epoch); no React, no storage.

const DAY$3 = 86_400_000;
const LOOP_KINDS = [{
  key: 'promise',
  label: 'You promised',
  defaultDays: 2
}, {
  key: 'waiting',
  label: 'Waiting on them',
  defaultDays: 7
}, {
  key: 'thread',
  label: 'Open thread',
  defaultDays: 14
}];
const BY_KEY$1 = new Map(LOOP_KINDS.map(k => [k.key, k]));

// Start of the given calendar day as ISO. 'YYYY-MM-DD' is read as a LOCAL
// date on purpose — new Date('2026-06-20') would be UTC midnight, which is
// the previous local day for anyone west of Greenwich.
function startOfDayIso(value) {
  if (value == null) return null;
  let d;
  if (value instanceof Date) d = new Date(value.getTime());else {
    const m = String(value).trim().match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
    d = m ? new Date(+m[1], +m[2] - 1, +m[3]) : new Date(value);
  }
  if (Number.isNaN(d.getTime())) return null;
  d.setHours(0, 0, 0, 0);
  return d.toISOString();
}
function capWords$1(text, n) {
  const words = String(text || '').trim().split(/\s+/);
  if (words.length <= n) return words.join(' ');
  return words.slice(0, n).join(' ') + '…';
}

/**
 * Build a fresh open loop. ripeAt = the expected-by day (start of day, local)
 * when one is given and valid, else now + the kind's default ripen delay.
 */
function makeOpenLoop({
  text,
  kind = 'thread',
  now = Date.now(),
  expectedBy = null,
  source = 'manual'
} = {}) {
  const k = BY_KEY$1.has(kind) ? kind : 'thread';
  const nowMs = new Date(now).getTime();
  const ripeAt = expectedBy && startOfDayIso(expectedBy) || new Date(nowMs + BY_KEY$1.get(k).defaultDays * DAY$3).toISOString();
  return {
    id: makeId('loop'),
    text: String(text ?? '').trim(),
    kind: k,
    createdAt: new Date(nowMs).toISOString(),
    ripeAt,
    resolvedAt: null,
    source: source === 'capture' ? 'capture' : 'manual'
  };
}

/** Loops still open on this person, newest first. */
function unresolvedLoops(person) {
  return (person?.openLoops || []).filter(l => l && !l.resolvedAt).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

/**
 * The loops worth surfacing today, across everyone. A loop qualifies when it
 * is unresolved, past its ripeAt, and not actively snoozed (snoozes is a map
 * of 'loop:<id>' → ms timestamp until which it should stay quiet).
 * Most-overdue first, capped at 3 — Today is a nudge, not a backlog.
 * Returns [{ person, loop, ageDays }].
 */
function ripeLoops(people, {
  now = Date.now(),
  snoozes = {}
} = {}) {
  if (!Array.isArray(people)) return [];
  const nowMs = new Date(now).getTime();
  const out = [];
  for (const person of people) {
    for (const loop of person?.openLoops || []) {
      if (!loop || loop.resolvedAt) continue;
      const ripe = new Date(loop.ripeAt).getTime();
      if (Number.isNaN(ripe) || ripe > nowMs) continue;
      const snoozedUntil = snoozes['loop:' + loop.id];
      if (snoozedUntil && snoozedUntil > nowMs) continue;
      out.push({
        person,
        loop,
        ageDays: Math.floor((nowMs - new Date(loop.createdAt).getTime()) / DAY$3)
      });
    }
  }
  out.sort((a, b) => new Date(a.loop.ripeAt).getTime() - new Date(b.loop.ripeAt).getTime());
  return out.slice(0, 3);
}

// Lowercase a leading article/possessive so "His new job" reads naturally
// after "Ask about". Proper nouns stay capitalized.
const LEAD_RE = /^(his|her|their|the|a|an|my|our|that|whether|how)\s/i;
const lowerLead = t => LEAD_RE.test(t) ? t.charAt(0).toLowerCase() + t.slice(1) : t;

/**
 * One short human line per kind, ≤ ~12 words:
 *   promise → "You said you'd send the intro deck"
 *   waiting → "Interview results — any news?"
 *   thread  → "Ask about his new job"
 */
function loopHeadline$1({
  loop
} = {}) {
  const text = String(loop?.text || '').trim().replace(/[.…]+$/, '');
  if (!text) return '';
  if (loop.kind === 'promise') {
    // Text already phrased around "you" — don't stack a second "you said".
    if (/^you\b/i.test(text)) return capWords$1(text.charAt(0).toUpperCase() + text.slice(1), 12);
    return "You said you'd " + capWords$1(text.charAt(0).toLowerCase() + text.slice(1), 9);
  }
  if (loop.kind === 'waiting') {
    return capWords$1(text.replace(/[?!]+$/, ''), 9) + ' — any news?';
  }
  return 'Ask about ' + capWords$1(lowerLead(text), 10);
}

/** Short age of the loop from createdAt: today / yesterday / N days ago / N wk ago. */
function ageLabel(loop, now = Date.now()) {
  const t = new Date(loop?.createdAt ?? NaN).getTime();
  if (Number.isNaN(t)) return '';
  const days = Math.floor((now - t) / DAY$3);
  if (days <= 0) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 7) return `${days} days ago`;
  return `${Math.floor(days / 7)} wk ago`;
}

/**
 * Close a loop. Returns a NEW person with that loop's resolvedAt stamped
 * (untouched loops keep their references); same person back if id not found.
 */
function resolveLoop(person, loopId, now = Date.now()) {
  const loops = person?.openLoops;
  if (!Array.isArray(loops)) return person;
  const idx = loops.findIndex(l => l && l.id === loopId);
  if (idx === -1) return person;
  const next = loops.slice();
  next[idx] = {
    ...loops[idx],
    resolvedAt: new Date(now).toISOString()
  };
  return {
    ...person,
    openLoops: next
  };
}

// merge.js
//
// Pure functions that turn a Quick Capture result into either an updated
// existing person or a brand-new person. Kept separate from React so it's
// easy to reason about and (later) easy to unit-test.


// Capture.openLoops rows ({text, kind, expectedBy}) → stored loop objects.
function loopsFromCapture(capture, source = 'capture') {
  return (capture.openLoops || []).filter(l => l && typeof l.text === 'string' && l.text.trim()).map(l => makeOpenLoop({
    text: l.text,
    kind: l.kind,
    expectedBy: l.expectedBy || null,
    source
  }));
}
function dedupeStrings(existing, incoming) {
  const lower = new Set(existing.map(s => s.toLowerCase()));
  const out = [...existing];
  for (const s of incoming || []) {
    const v = (s || '').trim();
    if (v && !lower.has(v.toLowerCase())) {
      out.push(v);
      lower.add(v.toLowerCase());
    }
  }
  return out;
}
function dedupeFamily(existing, incoming) {
  const key = f => `${(f.name || '').toLowerCase()}|${(f.relation || '').toLowerCase()}`;
  const seen = new Set(existing.map(key));
  const out = [...existing];
  for (const f of incoming || []) {
    if (!f?.name || !f?.relation) continue;
    const k = key(f);
    if (!seen.has(k)) {
      out.push({
        name: f.name.trim(),
        relation: f.relation.trim()
      });
      seen.add(k);
    }
  }
  return out;
}

/** Returns a new person object built from a capture result. */
function createPersonFromCapture(capture, circles) {
  const circle = capture.circleSuggestion ? findByPath(circles, capture.circleSuggestion) : null;
  return {
    id: makeId('per'),
    name: capture.personName || 'Untitled',
    location: capture.location || '',
    howWeMet: capture.howWeMet || '',
    circleIds: circle ? [circle.id] : [],
    family: (capture.family || []).map(f => ({
      name: (f.name || '').trim(),
      relation: (f.relation || '').trim()
    })).filter(f => f.name && f.relation),
    details: (capture.details || []).map(s => s.trim()).filter(Boolean),
    notes: capture.note ? [{
      id: makeId('note'),
      date: new Date().toISOString(),
      text: capture.note
    }] : [],
    followUps: (capture.followUps || []).map(s => s.trim()).filter(Boolean).map(text => ({
      id: makeId('fu'),
      text,
      done: false
    })),
    openLoops: loopsFromCapture(capture)
  };
}

/** Returns a new person object = existing person merged with the capture. */
function mergeCaptureIntoPerson(person, capture, circles) {
  const next = {
    ...person
  };

  // Additive lists, deduped
  next.family = dedupeFamily(person.family || [], capture.family || []);
  next.details = dedupeStrings(person.details || [], capture.details || []);
  next.followUps = [...(person.followUps || []), ...(capture.followUps || []).map(s => s.trim()).filter(Boolean).map(text => ({
    id: makeId('fu'),
    text,
    done: false
  }))];

  // Open loops: append new ones; skip texts already tracked unresolved
  const incomingLoops = loopsFromCapture(capture);
  if (incomingLoops.length) {
    const openTexts = new Set((person.openLoops || []).filter(l => l && !l.resolvedAt).map(l => (l.text || '').toLowerCase()));
    next.openLoops = [...(person.openLoops || []), ...incomingLoops.filter(l => !openTexts.has(l.text.toLowerCase()))];
  }

  // Note: prepend (newest first)
  if (capture.note && capture.note.trim()) {
    next.notes = [{
      id: makeId('note'),
      date: new Date().toISOString(),
      text: capture.note.trim()
    }, ...(person.notes || [])];
  }

  // Scalar fields: only fill in if currently empty (don't overwrite real data)
  if (!next.location && capture.location) next.location = capture.location;
  if (!next.howWeMet && capture.howWeMet) next.howWeMet = capture.howWeMet;

  // Circle: add to set if not already present
  if (capture.circleSuggestion) {
    const circle = findByPath(circles, capture.circleSuggestion);
    if (circle && !(person.circleIds || []).includes(circle.id)) {
      next.circleIds = [...(person.circleIds || []), circle.id];
    }
  }
  return next;
}

/** Returns a blank person — used by the "New person" form. */
function blankPerson() {
  return {
    id: makeId('per'),
    name: '',
    location: '',
    howWeMet: '',
    metOn: '',
    // 'YYYY' | 'YYYY-MM' | 'YYYY-MM-DD' — drives friendaversaries
    email: '',
    // tap-to-mailto on Glance
    phone: '',
    // tap-to-tel on Glance
    birthday: '',
    // 'MM-DD' or 'YYYY-MM-DD' — drives birthday reminders
    circleIds: [],
    family: [],
    details: [],
    notes: [],
    followUps: [],
    interactions: [],
    // Phase 2: auto-log of matched calendar events
    referredBy: null,
    // personId of who introduced you, or null
    photo: null // base64 dataURL OR null
  };
}

// lib/calendar.js
//
// Pure helpers for the Briefing view. Takes raw events from /api/calendar/fetch
// and produces:
//   - heuristic matches of event → person ids (no API call needed)
//   - grouping by Today / Tomorrow / Rest of week
//   - human-friendly time strings


// ----------------- MATCHING -----------------

// Common prefixes the user might put before someone's name in an event title.
// Order: longest/most specific first.
const TITLE_PREFIXES = [/^lunch\s+(with|w\/?|w[ie]th)\s+/i, /^dinner\s+(with|w\/?)\s+/i, /^breakfast\s+(with|w\/?)\s+/i, /^brunch\s+(with|w\/?)\s+/i, /^coffee\s+(with|w\/?)\s+/i, /^drinks?\s+(with|w\/?)\s+/i, /^tea\s+(with|w\/?)\s+/i, /^catch[- ]?up\s+(with|w\/?)\s+/i, /^1[: ]?on[: ]?1\s+(with|w\/?)\s+/i, /^1\s*:\s*1\s+(with|w\/?)\s+/i, /^meeting\s+(with|w\/?)\s+/i, /^sync\s+(with|w\/?)\s+/i, /^chat\s+(with|w\/?)\s+/i, /^call\s+(with|w\/?)\s+/i, /^check[- ]?in\s+(with|w\/?)\s+/i, /^intro\s+(to|w\/?|with)\s+/i, /^(lunch|dinner|coffee|drinks?|brunch|breakfast)\s*[:\-—]\s+/i,
// Strip lone time prefixes like "12:00pm - " (rare on Google Cal but happens)
/^\d{1,2}(:\d{2})?\s*(am|pm)?\s*[\-–—]\s+/i];
function stripTitlePrefix(title) {
  let s = (title || '').trim();
  let changed = true;
  while (changed) {
    changed = false;
    for (const re of TITLE_PREFIXES) {
      if (re.test(s)) {
        s = s.replace(re, '').trim();
        changed = true;
        break;
      }
    }
  }
  return s;
}

// Extract plausible candidate names from an event.
// Returns array of lowercase strings to match against person names.
function extractCandidates(event) {
  const out = new Set();
  const stripped = stripTitlePrefix(event.summary || '');
  if (stripped) {
    // Whole stripped title (e.g. "Dave Whitfield")
    out.add(stripped.toLowerCase());
    // Normalize multiple kinds of separators to commas, then split
    const normalized = stripped
    // em-dash, en-dash, or " - " between names
    .replace(/\s*[—–]\s*/g, ', ').replace(/\s+-\s+/g, ', ')
    // conjunctions
    .replace(/\s+(?:and|with|w\/?)\s+/gi, ', ')
    // other glue chars
    .replace(/\s*[&+/]\s*/g, ', ');
    for (const piece of normalized.split(/\s*,\s*/)) {
      const p = piece.trim();
      if (p) out.add(p.toLowerCase());
    }
  }
  for (const a of event.attendees || []) {
    if (a.name) out.add(a.name.trim().toLowerCase());
    if (a.email) {
      const localPart = a.email.split('@')[0];
      // "dave.whitfield" → "dave whitfield"
      out.add(localPart.replace(/[._-]+/g, ' ').toLowerCase());
    }
  }
  return [...out].filter(Boolean);
}

// Given one candidate string, find matching person ids using lenient rules:
// 1. Exact (case-insensitive) match against the full person name.
// 2. First-name match (candidate equals or contains the person's first word).
// 3. Person name is contained in the candidate (handles "Dave Whitfield" candidate matching "Dave Whitfield" person).
function matchesForCandidate(candidate, people) {
  const lower = candidate.toLowerCase();
  const matched = new Set();
  for (const p of people) {
    if (!p.name) continue;
    const pn = p.name.toLowerCase().trim();
    const firstWord = pn.split(/\s+/)[0];
    if (!pn) continue;
    if (lower === pn) matched.add(p.id);else if (lower.includes(pn)) matched.add(p.id);else if (pn.includes(lower) && lower.length >= 3) matched.add(p.id);else if (lower === firstWord || lower.split(/\s+/)[0] === firstWord) {
      matched.add(p.id);
    }
  }
  return [...matched];
}

/**
 * Returns the array of matched person ids for one event.
 * De-duplicated.
 *
 * Two passes:
 *   1. EMAIL match — if any attendee's email equals any directory person's
 *      email (case-insensitive, trimmed), that person matches. This is the
 *      strongest signal and runs first, so once a user adds a chip-only
 *      attendee as a real contact, the wallet card immediately surfaces
 *      the contact's actual name instead of the email.
 *   2. NAME-CANDIDATE match — the original heuristic over event titles,
 *      attendee CNs, and email local parts. Still catches the common case
 *      where the calendar only carries a display name like "Coach Patel".
 */
function matchEvent(event, people) {
  const ids = new Set();

  // Pass 1: email-to-email
  const emailIndex = new Map(); // lowercased email → personId
  for (const p of people) {
    if (p.email) {
      const k = String(p.email).trim().toLowerCase();
      if (k) emailIndex.set(k, p.id);
    }
  }
  for (const ea of event.attendees || []) {
    if (!ea?.email) continue;
    const k = String(ea.email).trim().toLowerCase();
    const pid = emailIndex.get(k);
    if (pid) ids.add(pid);
  }

  // Pass 2: existing name-based candidate matching
  for (const cand of extractCandidates(event)) {
    for (const pid of matchesForCandidate(cand, people)) ids.add(pid);
  }
  return [...ids];
}

/** Annotate every event with `matchedPersonIds`. */
function annotateEvents(events, people) {
  return (events || []).map(e => ({
    ...e,
    matchedPersonIds: matchEvent(e, people)
  }));
}

// ----------------- PEOPLE DISCOVERY -----------------

// Build a stable identity (key + display fields) for a raw attendee.
function attendeeIdentity(a) {
  const email = a?.email ? String(a.email).trim().toLowerCase() : '';
  let name = (a?.name || '').trim();
  if (!name && email) {
    name = email.split('@')[0].replace(/[._-]+/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }
  return {
    key: email || name.toLowerCase(),
    name,
    email
  };
}

// Is this attendee already someone in the directory (by email or name)?
function attendeeIsKnown(a, people, emailIndex) {
  const email = a?.email ? String(a.email).trim().toLowerCase() : '';
  if (email && emailIndex.has(email)) return true;
  const name = (a?.name || '').trim().toLowerCase();
  if (name && matchesForCandidate(name, people).length) return true;
  if (email) {
    const local = email.split('@')[0].replace(/[._-]+/g, ' ');
    if (matchesForCandidate(local, people).length) return true;
  }
  return false;
}

/**
 * Recurring attendees who AREN'T in the directory yet — "you keep meeting X."
 * Turns the calendar into an automatic people-finder so the user rarely has to
 * add anyone by hand. Pure; pass `now` for determinism.
 *
 * Returns [{ key, name, email, count, lastSeen }] sorted most-seen first.
 */
function suggestedContacts(events, people, {
  minCount = 2,
  selfEmails = [],
  dismissed = []
} = {}) {
  const emailIndex = new Map();
  for (const p of people) {
    if (p.email) emailIndex.set(String(p.email).trim().toLowerCase(), p.id);
  }
  const self = new Set((selfEmails || []).map(e => String(e).trim().toLowerCase()).filter(Boolean));
  const skip = new Set(dismissed || []);
  const agg = new Map();
  for (const ev of events || []) {
    const startMs = ev.start ? new Date(ev.start).getTime() : NaN;
    for (const a of ev.attendees || []) {
      if (attendeeIsKnown(a, people, emailIndex)) continue;
      const id = attendeeIdentity(a);
      if (!id.key || !id.name) continue;
      if (id.email && self.has(id.email)) continue;
      if (skip.has(id.key)) continue;
      const prev = agg.get(id.key) || {
        key: id.key,
        name: id.name,
        email: id.email,
        count: 0,
        lastSeen: 0
      };
      prev.count += 1;
      if (!prev.name && id.name) prev.name = id.name;
      if (!prev.email && id.email) prev.email = id.email;
      if (!Number.isNaN(startMs) && startMs > prev.lastSeen) prev.lastSeen = startMs;
      agg.set(id.key, prev);
    }
  }
  return [...agg.values()].filter(s => s.count >= minCount).sort((a, b) => b.count - a.count || b.lastSeen - a.lastSeen);
}

// Family auto-link logic.
//
// Each person has a family[] of { name, relation, personId? }. When a user
// types a family member into the form, we want that family member to also
// appear in the directory as a real contact — so the kids show up next to
// the parents, the spouse shows up as a tappable card, etc.
//
// `materializeFamily` walks a person's freshly saved family entries and:
//   1. For each entry without a personId, tries to match an existing person
//      by name (case-insensitive). If found, links via personId.
//   2. Otherwise, creates a new person record inheriting the source person's
//      primary circle (so kids land in the same family circle) and links
//      via personId.
//   3. Ensures the relationship is bidirectional — the linked person gets a
//      family entry pointing back at the source, with the inverse relation
//      (son ↔ parent, wife ↔ spouse, brother ↔ sibling, etc.).
//
// Returns { person, peopleNext } — the updated source person and the full
// updated people array (with new family contacts appended and reverse
// links written). App.jsx threads peopleNext back into setPeople.


// ---- Relation inversion ----

// What to write on the OTHER end. Anything not in the table inverts to
// itself (mentor↔mentor) or 'relative' if we'd rather be vague — we go
// with self-inverse so freeform relations are preserved.
const INVERSE = {
  son: 'parent',
  daughter: 'parent',
  child: 'parent',
  father: 'child',
  mother: 'child',
  dad: 'child',
  mom: 'child',
  parent: 'child',
  husband: 'spouse',
  wife: 'spouse',
  spouse: 'spouse',
  partner: 'partner',
  brother: 'sibling',
  sister: 'sibling',
  sibling: 'sibling',
  grandson: 'grandparent',
  granddaughter: 'grandparent',
  grandchild: 'grandparent',
  grandfather: 'grandchild',
  grandmother: 'grandchild',
  grandparent: 'grandchild',
  uncle: 'niece-nephew',
  aunt: 'niece-nephew',
  nephew: 'aunt-uncle',
  niece: 'aunt-uncle',
  cousin: 'cousin',
  'in-law': 'in-law'
};
function inverseRelation(rel) {
  if (!rel) return '';
  const r = rel.trim().toLowerCase();
  return INVERSE[r] || r; // self-inverse for unknown relations
}

// Relation type buckets used by the triangulation pass. We're deliberately
// conservative: only spouse/child triangulation runs automatically because
// it's the one inference that almost always holds in real families. Sibling
// → parent inference is intentionally skipped (half-siblings, step-parents).
const CHILD_REL = new Set(['son', 'daughter', 'child']);
const SPOUSE_REL = new Set(['husband', 'wife', 'spouse', 'partner']);
function isChild(rel) {
  return CHILD_REL.has((rel || '').trim().toLowerCase());
}
function isSpouse(rel) {
  return SPOUSE_REL.has((rel || '').trim().toLowerCase());
}

// Given a child's gender-neutral relation back to a parent, pick the
// inverse the parent should hold. We use plain "parent"/"child" because
// we don't track gender; users can hand-tune to "mom"/"dad" if they want.
function parentToChildRelation() {
  return 'child';
}
function childToParentRelation() {
  return 'parent';
}

// ---- Person matching ----

function normalizeName(s) {
  return (s || '').trim().toLowerCase().replace(/\s+/g, ' ');
}
function findPersonByName(name, people) {
  if (!name) return null;
  const needle = normalizeName(name);
  if (!needle) return null;
  return people.find(p => normalizeName(p.name) === needle) || null;
}

// Create a new lightweight person record. Inherits the source person's
// circles so a newly-added family member lands in the right buckets
// without the user having to re-pick.
//
//   • Spouses (wife/husband/spouse/partner) inherit ALL of the source's
//     circles — partners almost always overlap the full membership set.
//   • Everyone else (children, parents, siblings, freeform) inherits
//     just the primary circle — kids in a "Family" circle, sure, but
//     not in Dad's "Work" circle. Users can hand-add others later.
function newPersonFrom(name, sourcePerson, relation) {
  const sourceCircles = sourcePerson.circleIds || [];
  const circleIds = isSpouse(relation) ? sourceCircles.slice() : sourceCircles.slice(0, 1);
  return {
    id: makeId('p'),
    name: (name || '').trim(),
    location: '',
    howWeMet: '',
    photo: null,
    circleIds,
    notes: [],
    followUps: [],
    details: [],
    family: [],
    interactions: []
  };
}

// ---- The main entry point ----

/**
 * Run after a person is saved. Walks their family entries, links existing
 * people, creates new people where there's no match, and writes the
 * inverse relation back on each linked end.
 *
 * @param {Person} person   The person whose family[] we just edited.
 * @param {Person[]} people The full people array (excluding `person` — it
 *                          will be slotted back in by the caller).
 * @returns {{ person: Person, peopleNext: Person[] }}
 */
function materializeFamily(person, people) {
  const familyIn = Array.isArray(person.family) ? person.family : [];
  if (familyIn.length === 0) {
    // Nothing to materialize. Caller still needs the updated array though.
    return {
      person,
      peopleNext: upsertPerson(people, person)
    };
  }

  // Build a working copy of people we'll mutate as we go (creating new
  // members and writing reverse links into existing ones).
  let working = upsertPerson(people, person);

  // Walk family entries and link / create each.
  const familyOut = familyIn.map(entry => {
    if (!entry || !entry.name) return entry;

    // Already linked — make sure the reverse link exists, then return as-is.
    if (entry.personId) {
      const target = working.find(p => p.id === entry.personId);
      if (target) {
        working = ensureReverseLink(working, target, person, entry.relation);
      }
      return entry;
    }

    // Try to match an existing person by name.
    const match = findPersonByName(entry.name, working);
    if (match && match.id !== person.id) {
      working = ensureReverseLink(working, match, person, entry.relation);
      return {
        ...entry,
        personId: match.id,
        name: match.name
      };
    }

    // No match — create a new contact for them. Pass the relation
    // through so spouses inherit ALL of the source's circles, not just
    // the primary one.
    const created = newPersonFrom(entry.name, person, entry.relation);
    // Seed the reverse link before we add them so they ship with it.
    created.family = [{
      personId: person.id,
      name: person.name,
      relation: inverseRelation(entry.relation)
    }];
    working = [...working, created];
    return {
      ...entry,
      personId: created.id,
      name: created.name
    };
  });

  // Write the (possibly augmented) family back onto the source person.
  const finalPerson = {
    ...person,
    family: familyOut
  };
  working = upsertPerson(working, finalPerson);

  // Triangulation pass — link the source's spouses to the source's children
  // (and vice-versa). Adding "Anders (son)" to Sean's record when Sean
  // already has "Margret (wife)" makes Margret↔Anders a parent↔child link
  // on both Margret and Anders without the user doing anything.
  working = triangulateSpouseChild(finalPerson, working);
  return {
    person: finalPerson,
    peopleNext: working
  };
}

/**
 * For each (child, spouse) pair on the source person's family list, ensure
 * the child has the spouse as parent and the spouse has the child as
 * child. Operates only on linked entries (those with personId); unlinked
 * stub entries are skipped because we have no record to update.
 */
function triangulateSpouseChild(source, people) {
  const family = source.family || [];
  const children = family.filter(f => f.personId && isChild(f.relation));
  const spouses = family.filter(f => f.personId && isSpouse(f.relation));
  if (children.length === 0 || spouses.length === 0) return people;
  let working = people;
  for (const child of children) {
    for (const spouse of spouses) {
      if (child.personId === spouse.personId) continue; // sanity
      const childPerson = working.find(p => p.id === child.personId);
      const spousePerson = working.find(p => p.id === spouse.personId);
      if (!childPerson || !spousePerson) continue;

      // Link spouse → child (spouse gets child in their family)
      working = ensureLink(working, spousePerson, childPerson, parentToChildRelation());
      // Link child → spouse (child gets spouse as parent in their family)
      working = ensureLink(working, childPerson, spousePerson, childToParentRelation());
    }
  }
  return working;
}

/**
 * Idempotent add: ensure `holder.family` contains an entry with
 * `personId === counterpart.id`. If absent, append with the given
 * relation. If present, leave it alone (the user may have hand-tuned
 * the relation already).
 */
function ensureLink(people, holder, counterpart, relation) {
  const existing = (holder.family || []).find(f => f.personId === counterpart.id);
  if (existing) return people;
  const next = {
    ...holder,
    family: [...(holder.family || []), {
      personId: counterpart.id,
      name: counterpart.name,
      relation
    }]
  };
  return upsertPerson(people, next);
}

// ---- Helpers ----

function upsertPerson(people, person) {
  const idx = people.findIndex(p => p.id === person.id);
  if (idx === -1) return [...people, person];
  const next = people.slice();
  next[idx] = person;
  return next;
}

// Ensure `target` has a family entry pointing back at `source` with the
// inverse relation. If one already exists for that personId, leave it
// (we don't overwrite a relation the user may have hand-tuned on the
// other person's card).
function ensureReverseLink(people, target, source, sourceRelation) {
  const existing = (target.family || []).find(f => f.personId === source.id);
  if (existing) return people;
  const reverse = {
    personId: source.id,
    name: source.name,
    relation: inverseRelation(sourceRelation)
  };
  const updated = {
    ...target,
    family: [...(target.family || []), reverse]
  };
  return upsertPerson(people, updated);
}

// Phase 3 — timed post-event capture.
//
// When a calendar event ends and the user hasn't logged anything for the
// matched people since, the home page surfaces a "JUST WRAPPED" prompt:
// "How was your meeting with X?" → one-tap capture sheet.
//
// Gates kept tight on purpose. A captureable event must:
//   1. Have ended (start + duration is in the past)
//   2. Have ended within the last 12 hours (no stale buildup)
//   3. Match at least one person in the directory
//   4. Not appear in settings.captures.skippedEventIds (user dismissed it)
//   5. Not already have a follow-up note/interaction for that person
//      after the event ended (already captured implicitly)
//
// The capture itself is written as an interaction with source 'capture'
// (alongside 'calendar' for auto-logged and 'manual' for user-typed
// past meetings). makeCaptureInteraction returns the row; App.jsx splices
// it into person.interactions and updates state.

const CAPTURE_WINDOW_MS = 12 * 60 * 60 * 1000; // 12 hours

/**
 * Returns the list of (event, personId) capture candidates, sorted by
 * event end time (most recently wrapped first). Each candidate is what
 * the UI needs to render one card.
 *
 * Output shape:
 *   [{ key, event, person, endMs }]
 *
 * `key` is `eventId|personId` — used as React key and to write to
 * settings.captures.skippedEventIds when the user dismisses.
 */
function gatherCaptureCandidates(people, events, settings, now = Date.now()) {
  const out = [];
  if (!Array.isArray(people) || !Array.isArray(events)) return out;
  const personById = new Map(people.map(p => [p.id, p]));
  const skipped = new Set((settings?.captures?.skippedEventIds || []).slice());
  for (const ev of events) {
    if (!ev || !ev.start) continue;
    // Event must have ended. Some events lack `end` — assume 60 min.
    const startMs = new Date(ev.start).getTime();
    const endMs = ev.end ? new Date(ev.end).getTime() : startMs + 60 * 60 * 1000;
    if (Number.isNaN(endMs) || endMs > now) continue;
    if (now - endMs > CAPTURE_WINDOW_MS) continue;
    const matched = ev.matchedPersonIds || [];
    if (matched.length === 0) continue;
    const eventId = eventIdFor(ev);
    for (const pid of matched) {
      const person = personById.get(pid);
      if (!person) continue;
      const candidateKey = `${eventId}|${pid}`;
      if (skipped.has(candidateKey)) continue;

      // Already captured? An interaction with this exact eventId already
      // exists (Phase 2 reconciliation writes auto-log rows). The capture
      // we're prompting for is the SUBJECTIVE one ("how did it go") that
      // goes on top — distinguished by source==='capture'.
      const alreadyCaptured = (person.interactions || []).some(i => i.source === 'capture' && i.eventId === eventId);
      if (alreadyCaptured) continue;
      out.push({
        key: candidateKey,
        event: ev,
        person,
        endMs
      });
    }
  }

  // Most recently wrapped first
  out.sort((a, b) => b.endMs - a.endMs);
  return out;
}

/**
 * Build a capture-style interaction. Attached to person.interactions so
 * it shows up on the timeline alongside auto-log + manual entries, and
 * counts toward lastTouch (recency moves forward immediately when the
 * user captures).
 */
function makeCaptureInteraction({
  event,
  noteText,
  now = Date.now()
}) {
  return {
    id: makeId('int'),
    source: 'capture',
    eventId: eventIdFor(event),
    date: event.end || event.start || new Date(now).toISOString(),
    summary: event.summary || '',
    location: event.location || '',
    noteText: (noteText || '').trim()
  };
}

// Haptic feedback.
//
// On the native iOS app (Capacitor) this drives the real Taptic Engine via
// window.Capacitor.Plugins.Haptics — accessed at RUNTIME so the no-bundler web
// build is untouched (no static @capacitor import). On the web it falls back to
// the Vibration API (Android/installed PWA; iOS Safari ignores it). Gated by a
// user setting so people can turn the buzz off.

let enabled = true;
function setHapticsEnabled(v) {
  enabled = v !== false;
}
function nativeHaptics() {
  return typeof window !== 'undefined' && window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Haptics || null;
}

// Web fallback — the Vibration API.
function buzz(pattern) {
  if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
    try {
      navigator.vibrate(pattern);
    } catch {
      /* some browsers throw without a user gesture — ignore */
    }
  }
}

// Sharp transient — prefer the native impact generator, else a short vibrate.
function impact(style, fallback) {
  if (!enabled) return;
  const H = nativeHaptics();
  if (H) {
    try {
      H.impact({
        style
      });
    } catch {}
    return;
  }
  buzz(fallback);
}

// Notification-style cue (success/warning) — native notification generator,
// else a patterned vibrate.
function notify(type, fallback) {
  if (!enabled) return;
  const H = nativeHaptics();
  if (H) {
    try {
      H.notification({
        type
      });
    } catch {}
    return;
  }
  buzz(fallback);
}
const haptics = {
  // light tick — tab switches, card taps
  tap: () => impact('LIGHT', 8),
  // a touch firmer — selection / opening something
  select: () => impact('MEDIUM', 12),
  // positive confirmation — saved / logged
  success: () => notify('SUCCESS', [10, 40, 18]),
  // gentle warning — skip / dismiss / undo
  warn: () => notify('WARNING', [16, 50, 16])
};

// Shared name helpers.

/** First token of a name, or a gentle fallback. */
function firstNameOf(name) {
  return (name || '').trim().split(/\s+/)[0] || name || 'them';
}

// lifeEvents.js — birthdays + "on this day" memory math.
//
// Pure, dependency-free date helpers that power three things:
//   1. The Birthdays tier on Today
//   2. The "On this day" memory card
//   3. The notification engine's birthday reminders
//
// Birthdays are stored on person.birthday as either 'MM-DD' or 'YYYY-MM-DD'.
// We never require a year — many people only know the month/day.


/** Parse a person.birthday string into { month (1-12), day, year|null }. */
function parseBirthday(raw) {
  if (typeof raw !== 'string') return null;
  const s = raw.trim();
  if (!s) return null;
  // YYYY-MM-DD
  let m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (m) return {
    year: +m[1],
    month: +m[2],
    day: +m[3]
  };
  // MM-DD  (or MM/DD)
  m = s.match(/^(\d{1,2})[-/](\d{1,2})$/);
  if (m) return {
    year: null,
    month: +m[1],
    day: +m[2]
  };
  return null;
}

/** Days until the next occurrence of month/day from `now` (0 = today). */
function daysUntilNextOccurrence(month, day, now = new Date()) {
  const today = new Date(now);
  today.setHours(0, 0, 0, 0);
  let next = new Date(today.getFullYear(), month - 1, day);
  next.setHours(0, 0, 0, 0);
  if (next < today) next = new Date(today.getFullYear() + 1, month - 1, day);
  return Math.round((next - today) / 86_400_000);
}

/** Age they'll turn on the next occurrence, or null if no birth year. */
function turningAge(parsed, now = new Date()) {
  if (!parsed || parsed.year == null) return null;
  const today = new Date(now);
  today.setHours(0, 0, 0, 0);
  const thisYear = new Date(today.getFullYear(), parsed.month - 1, parsed.day);
  thisYear.setHours(0, 0, 0, 0);
  const nextYear = thisYear < today ? today.getFullYear() + 1 : today.getFullYear();
  return nextYear - parsed.year;
}
const MONTHS$2 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function ordinal(n) {
  const t = n % 100;
  if (t >= 11 && t <= 13) return `${n}th`;
  switch (n % 10) {
    case 1:
      return `${n}st`;
    case 2:
      return `${n}nd`;
    case 3:
      return `${n}rd`;
    default:
      return `${n}th`;
  }
}

/** "Jun 3rd" — short, human label for a month/day. */
function birthdayLabel(parsed) {
  if (!parsed) return '';
  return `${MONTHS$2[parsed.month - 1]} ${ordinal(parsed.day)}`;
}

/** Relative phrasing: "Today", "Tomorrow", "in 5 days". */
function whenLabel(days) {
  if (days === 0) return 'Today';
  if (days === 1) return 'Tomorrow';
  return `in ${days} days`;
}

/**
 * Upcoming birthdays within `windowDays`, soonest first.
 * Returns [{ person, parsed, days, label, age }].
 */
function upcomingBirthdays(people, windowDays = 30, now = new Date()) {
  if (!Array.isArray(people)) return [];
  const out = [];
  for (const p of people) {
    const parsed = parseBirthday(p.birthday);
    if (!parsed) continue;
    const days = daysUntilNextOccurrence(parsed.month, parsed.day, now);
    if (days <= windowDays) {
      out.push({
        person: p,
        parsed,
        days,
        label: birthdayLabel(parsed),
        age: turningAge(parsed, new Date(now))
      });
    }
  }
  out.sort((a, b) => a.days - b.days);
  return out;
}

/**
 * "On this day" — interactions that happened ~1+ years ago around today's
 * calendar date (±`slopDays`). Returns the single best memory per person,
 * most years-ago first, capped to `max`.
 */
function onThisDay(people, {
  now = new Date(),
  slopDays = 2,
  max = 2
} = {}) {
  if (!Array.isArray(people)) return [];
  const today = new Date(now);
  const tMonth = today.getMonth();
  const tDate = today.getDate();
  const out = [];
  for (const p of people) {
    const all = [...(p.interactions || []), ...(p.notes || []).map(n => ({
      date: n.date,
      summary: n.text,
      source: 'note'
    }))];
    let best = null;
    for (const item of all) {
      if (!item || !item.date) continue;
      const d = new Date(item.date);
      if (Number.isNaN(d.getTime())) continue;
      const yearsAgo = today.getFullYear() - d.getFullYear();
      if (yearsAgo < 1) continue; // must be a real "memory", at least last year
      // Same calendar date within slop, ignoring year
      const anchor = new Date(today.getFullYear(), d.getMonth(), d.getDate());
      const diff = Math.abs(Math.round((anchor - new Date(today.getFullYear(), tMonth, tDate)) / 86_400_000));
      if (diff <= slopDays) {
        if (!best || yearsAgo > best.yearsAgo) {
          best = {
            person: p,
            item,
            yearsAgo,
            date: item.date
          };
        }
      }
    }
    if (best) out.push(best);
  }
  out.sort((a, b) => b.yearsAgo - a.yearsAgo);
  return out.slice(0, max);
}

/** "1 year ago" / "3 years ago" */
function yearsAgoLabel(n) {
  return n === 1 ? '1 year ago' : `${n} years ago`;
}

// ---------------------------------------------------------------------------
// Friendaversaries — anniversaries of when a friendship started.
//
// person.metOn is the origin date, stored at whatever precision the user
// actually remembers: 'YYYY', 'YYYY-MM', or 'YYYY-MM-DD'. Only a full
// month+day earns a real anniversary; year-only data still gets a
// "Friends since 2018" badge instead of being silently dropped.

/** Parse a person.metOn string into { year, month|null, day|null }. */
function parseMetOn(raw) {
  if (typeof raw !== 'string') return null;
  const s = raw.trim();
  if (!s) return null;
  // YYYY-MM-DD  (or YYYY/MM/DD)
  let m = s.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/);
  if (m) return {
    year: +m[1],
    month: +m[2],
    day: +m[3]
  };
  // YYYY-MM  (or YYYY/MM)
  m = s.match(/^(\d{4})[-/](\d{1,2})$/);
  if (m) return {
    year: +m[1],
    month: +m[2],
    day: null
  };
  // YYYY
  m = s.match(/^(\d{4})$/);
  if (m) return {
    year: +m[1],
    month: null,
    day: null
  };
  return null;
}

/**
 * Upcoming friend-anniversaries within `windowDays`, soonest first.
 * Requires a month AND day on metOn, and at least one full year of
 * friendship (years = anniversary year − metOn year).
 * Returns [{ person, years, days, label, when }].
 */
function friendaversaries(people, windowDays = 14, now = new Date()) {
  if (!Array.isArray(people)) return [];
  const today = new Date(now);
  today.setHours(0, 0, 0, 0);
  const out = [];
  for (const p of people) {
    const parsed = parseMetOn(p.metOn);
    if (!parsed || parsed.month == null || parsed.day == null) continue;
    const days = daysUntilNextOccurrence(parsed.month, parsed.day, now);
    if (days > windowDays) continue;
    const thisYear = new Date(today.getFullYear(), parsed.month - 1, parsed.day);
    thisYear.setHours(0, 0, 0, 0);
    const annivYear = thisYear < today ? today.getFullYear() + 1 : today.getFullYear();
    const years = annivYear - parsed.year;
    if (years < 1) continue; // met less than a year ago — nothing to celebrate yet
    out.push({
      person: p,
      years,
      days,
      label: years === 1 ? '1 year since you met' : `${years} years since you met`,
      when: whenLabel(days)
    });
  }
  out.sort((a, b) => a.days - b.days);
  return out;
}

/** "Friends since 2018" — the fallback badge for year-only metOn data. */
function friendsSinceLabel(metOnParsed, now = new Date()) {
  if (!metOnParsed || metOnParsed.year == null) return null;
  return `Friends since ${metOnParsed.year}`;
}

// recency.js — "when did I last SEE vs SPEAK to this person", plus one very
// easy, ≤8-word reason to reach out. Pure + deterministic given `now`.
//
// In-person  = calendar events (you were there) + manual met/coffee/lunch/…
// Spoke      = remote contact (call / text / email / DM / video).
// These are intentionally orthogonal: "saw them 3 weeks ago, but last texted
// 2 days ago" is exactly the useful signal on a relationship map.

const IN_PERSON_RE = /\b(met|coffee|lunch|dinner|drinks|brunch|saw|hung out|hangout|visit|in person)\b/i;
const REMOTE_RE = /\b(call|called|phone|rang|text|texted|message|messaged|dm|email|emailed|zoom|facetime|video)\b/i;
function maxStamp(person, predicate) {
  let max = null;
  for (const i of person?.interactions || []) {
    if (!i?.date || !predicate(i)) continue;
    const t = new Date(i.date).getTime();
    if (!Number.isNaN(t) && (max === null || t > max)) max = t;
  }
  return max === null ? null : new Date(max).toISOString();
}
const isInPerson = i => i.source === 'calendar' || IN_PERSON_RE.test(i.summary || '');
const isRemote = i => i.source !== 'calendar' && REMOTE_RE.test(i.summary || '');

// Later of two ISO strings (or the non-null one, or null).
function maxIso(a, b) {
  if (!a) return b || null;
  if (!b) return a;
  return new Date(a).getTime() >= new Date(b).getTime() ? a : b;
}

/** ISO of the last in-person interaction, or null. */
function lastSeenInPerson(person) {
  return maxStamp(person, isInPerson);
}

/**
 * ISO of the last time you actually connected — call/text/email OR in person.
 * Seeing someone counts as speaking, so an in-person meeting overrides the
 * remote timeline (spoke is always ≥ seen).
 */
function lastSpoke(person) {
  return maxIso(lastSeenInPerson(person), maxStamp(person, isRemote));
}

/** Short friendly recency label: Today / Yesterday / 3 days ago / 2 weeks ago / Never. */
function recencyLabel(iso, now = Date.now()) {
  if (!iso) return 'Never';
  const days = Math.floor((now - new Date(iso).getTime()) / 86_400_000);
  if (days <= 0) return 'Today';
  if (days === 1) return 'Yesterday';
  if (days < 7) return `${days} days ago`;
  if (days < 30) {
    const w = Math.floor(days / 7);
    return `${w} ${w === 1 ? 'week' : 'weeks'} ago`;
  }
  if (days < 365) {
    const m = Math.floor(days / 30);
    return `${m} ${m === 1 ? 'month' : 'months'} ago`;
  }
  const y = Math.floor(days / 365);
  return `${y} ${y === 1 ? 'year' : 'years'} ago`;
}

// Days until the next birthday, from a 'MM-DD' or 'YYYY-MM-DD' string.
function daysUntilBirthday(birthday, now) {
  const m = String(birthday || '').match(/(\d{1,2})-(\d{1,2})$/);
  if (!m) return null;
  const month = +m[1] - 1;
  const day = +m[2];
  const t = new Date(now);
  const startToday = new Date(t.getFullYear(), t.getMonth(), t.getDate());
  let next = new Date(t.getFullYear(), month, day);
  if (next < startToday) next = new Date(t.getFullYear() + 1, month, day);
  return Math.round((next - startToday) / 86_400_000);
}
function capWords(text, n) {
  const words = String(text || '').trim().split(/\s+/);
  if (words.length <= n) return words.join(' ');
  return words.slice(0, n).join(' ') + '…';
}

// Logging prefixes ("Coffee — …") and conversational verbs, so we can lift the
// TOPIC out of a note. We only build a reason when one of these strips cleanly,
// which keeps the result grammatical ("Helped him move" → skipped, not
// "Ask about Helped him move").
const NOTE_LEAD_RE = /^(coffee|call|called|texted|emailed|met up|met|lunch|dinner|drinks|chat|catchup|catch-up)\s*[—–:-]+\s*/i;
const NOTE_VERB_RE = /^(caught up on|caught up|talked about|talked|chatted about|spoke about|asked about|asked|discussed|mentioned|told me about|thanked (?:him|her|them|you)?\s*for|brought up|followed up on|following up on|checked in about|checked in on|updated me on|update on|heard about|learned about|shared about|vented about|complained about|worried about|excited about|planning|wants to)\s+/i;
const NOTE_ABOUT_RE = /\b(?:about|regarding|re:)\s+(.+)/i;

/**
 * Pull a short conversation topic from the person's most recent substantive
 * note, or null. Used to phrase a reach-out around what you last discussed.
 */
function conversationTopic(person) {
  const notes = [...(person?.notes || [])].filter(n => n && typeof n.text === 'string' && n.text.trim().length > 3).sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime());
  for (const n of notes) {
    // First clause only — ignore trailing follow-up sentences.
    let t = n.text.trim().split(/[.!?\n]/)[0].trim();
    t = t.replace(NOTE_LEAD_RE, '').trim();
    let topic = null;
    if (NOTE_VERB_RE.test(t)) {
      topic = t.replace(NOTE_VERB_RE, '').trim();
    } else {
      const m = t.match(NOTE_ABOUT_RE);
      if (m) topic = m[1].trim();
    }
    if (!topic) continue;

    // Clean + cap to keep the final sentence ≤ 8 words.
    topic = topic.replace(/^(his|her|their|the|a|an|my|our)\s+/i, w => w.toLowerCase()).split(/\s*(?:,|;|—|–| but | and | because | so )\s*/i)[0].trim().replace(/[.,;:'"]+$/, '');
    const words = topic.split(/\s+/).filter(Boolean);
    if (words.length < 1 || topic.length < 3) continue;
    return words.slice(0, 5).join(' ');
  }
  return null;
}

/**
 * One very easy reason to reach out — 8 words or fewer. Deterministic, no AI.
 * Priority: imminent birthday → open follow-up → drift → gentle default.
 */
function easyReason(person, now = Date.now()) {
  const bdayIn = daysUntilBirthday(person?.birthday, now);
  if (bdayIn != null && bdayIn <= 14) {
    return bdayIn === 0 ? 'Wish them a happy birthday today.' : "Their birthday's near — send a note.";
  }
  const open = (person?.followUps || []).find(f => f && !f.done && f.text);
  if (open) return capWords(open.text, 8);

  // Based on what you last talked about.
  const topic = conversationTopic(person);
  if (topic) return capWords(`Ask about ${topic}.`, 8);
  const days = daysSinceTouch(person, now);
  if (!Number.isFinite(days)) return 'Break the ice — just say hello.';
  if (days > 90) return "It's been months — time to reconnect.";
  if (days > 30) return 'Been a while — drop a quick line.';
  return 'Send a quick hello, no occasion needed.';
}

// brief.js — the pre-meeting "Morning Read": a one-glance brief built ONLY
// from what the user already logged. No AI, no network — just their own open
// loops, notes, follow-ups and recency, ranked so the top line is the thing
// they'd most regret not mentioning.
//
// Pure + deterministic given `now` (ms epoch). The UI renders `lines` in
// order; `thin` means the brief has little substance beyond recency, so the
// card pads with the origin story ("How you met…") instead of sitting bare.

const MAX_LINES = 4;
const MAX_LOOP_LINES = 2;
const MAX_NOTIFY_CHARS = 70;

// One-line phrasing for a loop, by kind. 'waiting' reads as "Pending: …"
// because the brief voice is telegraphic, not chatty.
function loopHeadline(loop) {
  const text = String(loop?.text || '').trim();
  if (!text) return null;
  if (loop.kind === 'promise') return `You promised: ${text}`;
  if (loop.kind === 'waiting') return `Pending: ${text}`;
  return `Ask about ${text}`; // 'thread' — and any unknown kind reads fine too
}
function truncate$1(text, max) {
  if (text.length <= max) return text;
  return text.slice(0, max - 1).trimEnd() + '…';
}

/**
 * The Morning Read for one person: { lines: [{ kind, text }], thin }.
 *
 * Priority (max 4 lines; lowest priority dropped first):
 *   1. up to two unresolved open loops   → kind 'loop'
 *   2. what you last talked about        → kind 'topic' (skipped if a loop
 *      already covers it — case-insensitive substring test either way)
 *   3. first open follow-up              → kind 'todo'
 *   4. recency                           → kind 'recency'
 *
 * thin = fewer than 2 lines besides recency. A thin brief with a known
 * origin appends kind 'origin' so there's still a way into the conversation.
 */
function buildBrief(person, {
  now = Date.now()
} = {}) {
  const lines = [];

  // 1. Open loops — the highest-stakes content; cap at two.
  const loopTexts = [];
  for (const loop of unresolvedLoops(person) || []) {
    if (lines.length >= MAX_LOOP_LINES) break;
    const text = loopHeadline(loop);
    if (!text) continue;
    lines.push({
      kind: 'loop',
      text
    });
    loopTexts.push(String(loop.text).trim().toLowerCase());
  }

  // 2. What you last talked about — unless a loop already says it.
  const topic = conversationTopic(person);
  if (topic && lines.length < MAX_LINES) {
    const t = topic.toLowerCase();
    const dupe = loopTexts.some(lt => lt.includes(t) || t.includes(lt));
    if (!dupe) lines.push({
      kind: 'topic',
      text: `Last time: ${topic}`
    });
  }

  // 3. First open follow-up.
  const todo = (person?.followUps || []).find(f => f && !f.done && f.text);
  if (todo && lines.length < MAX_LINES) {
    lines.push({
      kind: 'todo',
      text: `Follow-up: ${todo.text}`
    });
  }

  // 4. Recency — lowest priority, so a full brief drops it first.
  if (lines.length < MAX_LINES) {
    const spokeLabel = recencyLabel(lastSpoke(person), now);
    let text = `Last spoke ${spokeLabel.toLowerCase()}`;
    // Only mention "saw" when it tells a different story than "spoke"
    // (labels compared so an hours-apart same-day pair doesn't repeat itself).
    const seenIso = lastSeenInPerson(person);
    if (seenIso) {
      const seenLabel = recencyLabel(seenIso, now);
      if (seenLabel !== spokeLabel) text += `, last saw them ${seenLabel.toLowerCase()}`;
    }
    lines.push({
      kind: 'recency',
      text
    });
  }
  const substantive = lines.filter(l => l.kind !== 'recency').length;
  const thin = substantive < 2;
  if (thin && person?.howWeMet) {
    lines.push({
      kind: 'origin',
      text: `How you met: ${person.howWeMet}`
    });
  }
  return {
    lines,
    thin
  };
}

/**
 * One short line (≤ ~70 chars) for the pre-meeting notification body:
 * the first loop headline, else "Bring up: <last topic>", else null so the
 * caller can fall back to its default copy.
 */
function briefNotificationLine(person, {
  now = Date.now()
} = {}) {
  for (const loop of unresolvedLoops(person) || []) {
    const text = loopHeadline(loop);
    if (text) return truncate$1(text, MAX_NOTIFY_CHARS);
  }
  const topic = conversationTopic(person);
  if (topic) return truncate$1(`Bring up: ${topic}`, MAX_NOTIFY_CHARS);
  return null;
}

// notifications.js — the local notification engine.
//
// Privacy-preserving by design: there is NO push server. Everything is
// scheduled on-device. Where the browser supports the Notification Triggers
// API (`TimestampTrigger`, Chromium/installed PWAs), we schedule notifications
// that fire even when the app is closed. Everywhere else we fall back to
// in-session timers (fire while the app is open), which still covers the
// common "phone open in the morning" case. iOS Safari ignores web
// notifications entirely, so this degrades to nothing there.
//
// The schedule is derived purely from events + people + settings via
// buildSchedule(), which is exported so it can be unit-tested in isolation.


// ---------- capability checks ----------

function notificationsSupported() {
  return typeof window !== 'undefined' && 'Notification' in window;
}
function notificationPermission() {
  return notificationsSupported() ? Notification.permission : 'unsupported';
}
function supportsTriggers() {
  return notificationsSupported() && 'showTrigger' in Notification.prototype && typeof window.TimestampTrigger === 'function';
}

// ---------- service worker ----------

let swReg = null;
async function registerSW() {
  if (swReg) return swReg;
  if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
    try {
      // Relative registration: resolves to /sw.js in dev and /app/sw.js on
      // a subpath host (GitHub Pages) — the scope follows automatically.
      swReg = await navigator.serviceWorker.register('./sw.js');
      return swReg;
    } catch {
      return null;
    }
  }
  return null;
}

// ---------- permission ----------

async function requestNotificationPermission() {
  if (!notificationsSupported()) return 'unsupported';
  try {
    const p = await Notification.requestPermission();
    if (p === 'granted') await registerSW();
    return p;
  } catch {
    return 'denied';
  }
}

// ---------- firing ----------

async function fireNow(title, opts) {
  if (notificationPermission() !== 'granted') return;
  const reg = await registerSW();
  if (reg && reg.showNotification) {
    try {
      await reg.showNotification(title, opts);
      return;
    } catch {
      /* fall through */
    }
  }
  try {
    // eslint-disable-next-line no-new
    new Notification(title, opts);
  } catch {
    /* ignore */
  }
}

/** A one-off test notification the user can trigger from Settings. */
async function sendTestNotification() {
  await fireNow('Circles', {
    body: 'Notifications are on. This is what a nudge looks like.',
    icon: './circles-logo-mark-v4.png',
    badge: './circles-logo-mark-v4.png',
    tag: 'circles-test',
    data: {
      url: './'
    }
  });
}

// In-session timers we own, so reschedules can clear them cleanly.
let timers = [];
function clearTimers() {
  timers.forEach(t => clearTimeout(t));
  timers = [];
}
async function scheduleEntry(entry) {
  const ms = entry.time - Date.now();
  if (ms < -6e4) return; // already (well) past — skip
  const reg = await registerSW();
  const opts = {
    body: entry.body,
    icon: './circles-logo-mark-v4.png',
    badge: './circles-logo-mark-v4.png',
    tag: entry.tag,
    data: {
      url: './',
      view: entry.view || 'briefing'
    }
  };
  if (supportsTriggers() && reg && reg.showNotification && ms > 0) {
    try {
      await reg.showNotification(entry.title, {
        ...opts,
        showTrigger: new window.TimestampTrigger(entry.time)
      });
      return;
    } catch {
      /* fall through to timer */
    }
  }
  if (ms <= 0) {
    fireNow(entry.title, opts);
    return;
  }
  // setTimeout caps near 24.8 days; our schedule window is well under that.
  const t = setTimeout(() => fireNow(entry.title, opts), Math.min(ms, 2_000_000_000));
  timers.push(t);
}

// ---------- schedule construction (pure) ----------

/**
 * Returns a sorted list of { time(ms), title, body, tag, view } from the
 * user's data + settings. Pure + deterministic given `now`.
 */
function buildSchedule({
  events = [],
  people = [],
  settings = {},
  now = Date.now()
} = {}) {
  const notif = settings.notifications || {};
  const out = [];
  const today = new Date(now);

  // 1) Morning brief — next occurrence of the configured hour (default 8am).
  if (notif.morningBrief !== false) {
    const hour = Number.isFinite(notif.morningHour) ? notif.morningHour : 8;
    const brief = new Date(today);
    brief.setHours(hour, 0, 0, 0);
    if (brief.getTime() <= now) brief.setDate(brief.getDate() + 1);
    // Count people on the calendar for the brief's day
    const dayStart = new Date(brief);
    dayStart.setHours(0, 0, 0, 0);
    const dayEnd = new Date(dayStart);
    dayEnd.setDate(dayEnd.getDate() + 1);
    const ids = new Set();
    for (const ev of events) {
      const t = ev?.start ? new Date(ev.start).getTime() : NaN;
      if (t >= dayStart.getTime() && t < dayEnd.getTime()) {
        for (const id of ev.matchedPersonIds || []) ids.add(id);
      }
    }
    const n = ids.size;
    out.push({
      time: brief.getTime(),
      title: 'Good morning',
      body: n > 0 ? `${n} ${n === 1 ? 'person' : 'people'} on your calendar today. Tap to prep.` : 'A quiet day ahead. A good time to reconnect with someone.',
      tag: 'circles-brief',
      view: 'briefing'
    });
  }

  // 2) Pre-meeting prep + 3) post-meeting capture — next 7 days, cap 12.
  const horizon = now + 7 * 86_400_000;
  const upcoming = events.filter(e => e?.start && (e.matchedPersonIds || []).length > 0).filter(e => {
    const t = new Date(e.start).getTime();
    return t >= now - 86_400_000 && t <= horizon;
  }).sort((a, b) => new Date(a.start) - new Date(b.start)).slice(0, 12);
  const byId = new Map(people.map(p => [p.id, p]));
  for (const ev of upcoming) {
    const leadId = (ev.matchedPersonIds || [])[0];
    const lead = byId.get(leadId);
    const who = lead ? firstNameOf(lead.name) : 'someone';
    const startMs = new Date(ev.start).getTime();
    if (notif.preMeeting !== false) {
      // Best talking point: open loop / last topic (the brief) beats a
      // static detail — this is the "walk in prepared" moment.
      const briefLine = lead ? briefNotificationLine(lead, {
        now
      }) : null;
      const detail = pickDetailText(lead);
      out.push({
        time: startMs - 30 * 60_000,
        title: `Soon: ${ev.summary || 'event'}`,
        body: briefLine ? `With ${who} — ${briefLine}` : detail ? `With ${who} — bring up: ${detail}` : `You'll see ${who} in 30 minutes.`,
        tag: `circles-pre-${ev.uid || ev.id || startMs}`,
        view: 'briefing'
      });
    }
    if (notif.postMeeting !== false) {
      const endMs = ev.end ? new Date(ev.end).getTime() : startMs + 60 * 60_000;
      out.push({
        time: endMs + 5 * 60_000,
        title: `How did it go with ${who}?`,
        body: '15 seconds before you forget — tap to log it.',
        tag: `circles-post-${ev.uid || ev.id || startMs}`,
        view: 'briefing'
      });
    }
  }

  // 4) Birthdays — next 14 days, fire at 9am that day.
  if (notif.birthdays !== false) {
    for (const b of upcomingBirthdays(people, 14, today)) {
      const day = new Date(today);
      day.setDate(day.getDate() + b.days);
      day.setHours(9, 0, 0, 0);
      out.push({
        time: day.getTime(),
        title: `${b.person.name}'s birthday ${whenLabel(b.days).toLowerCase()}`,
        body: b.age ? `Turning ${b.age}. A good moment to reach out.` : 'A good moment to reach out.',
        tag: `circles-bday-${b.person.id}`,
        view: 'briefing'
      });
    }
  }
  return out.filter(e => Number.isFinite(e.time) && e.time > now - 60_000).sort((a, b) => a.time - b.time);
}
function pickDetailText(person) {
  if (!person || !Array.isArray(person.details)) return null;
  for (const d of person.details) {
    const text = typeof d === 'string' ? d : d?.text;
    if (text && text.trim()) return text.trim();
  }
  return null;
}

// ---------- public reschedule ----------

/** Clear in-session timers and (re)build the whole schedule. */
async function rescheduleAll(ctx) {
  if (notificationPermission() !== 'granted') return;
  await registerSW();
  clearTimers();
  const schedule = buildSchedule(ctx);
  for (const entry of schedule) {
    // eslint-disable-next-line no-await-in-loop
    await scheduleEntry(entry);
  }
}

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production_min;

function requireReactJsxRuntime_production_min () {
	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
	hasRequiredReactJsxRuntime_production_min = 1;
var f=requireReact(),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:true,ref:true,__self:true,__source:true};
	function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a) void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
	return reactJsxRuntime_production_min;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;

	{
	  jsxRuntime.exports = requireReactJsxRuntime_production_min();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

// Tiny inline icons. 24×24 viewBox, stroke-current, sized via font-size.
// Match the prototype's stroke style (1.8, round caps).
//
// Usage:  <Ico name="mic" />  or  Icons.mic

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
};
const baseSvg = {
  width: '1em',
  height: '1em',
  display: 'inline-block',
  verticalAlign: 'middle'
};
const Icons = {
  mic: /*#__PURE__*/jsxRuntimeExports.jsxs("svg", {
    viewBox: "0 0 24 24",
    ...stroke,
    style: baseSvg,
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("rect", {
      x: "9",
      y: "3",
      width: "6",
      height: "12",
      rx: "3"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
      d: "M5 11a7 7 0 0 0 14 0M12 18v3"
    })]
  }),
  search: /*#__PURE__*/jsxRuntimeExports.jsxs("svg", {
    viewBox: "0 0 24 24",
    ...stroke,
    style: baseSvg,
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
      d: "M20 20l-3.5-3.5"
    })]
  }),
  plus: /*#__PURE__*/jsxRuntimeExports.jsx("svg", {
    viewBox: "0 0 24 24",
    ...stroke,
    style: baseSvg,
    children: /*#__PURE__*/jsxRuntimeExports.jsx("path", {
      d: "M12 5v14M5 12h14"
    })
  }),
  arrow: /*#__PURE__*/jsxRuntimeExports.jsx("svg", {
    viewBox: "0 0 24 24",
    ...stroke,
    style: baseSvg,
    children: /*#__PURE__*/jsxRuntimeExports.jsx("path", {
      d: "M5 12h14M13 6l6 6-6 6"
    })
  }),
  calendar: /*#__PURE__*/jsxRuntimeExports.jsxs("svg", {
    viewBox: "0 0 24 24",
    ...stroke,
    style: baseSvg,
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("rect", {
      x: "3",
      y: "5",
      width: "18",
      height: "16",
      rx: "2"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
      d: "M3 9h18M8 3v4M16 3v4"
    })]
  }),
  user: /*#__PURE__*/jsxRuntimeExports.jsxs("svg", {
    viewBox: "0 0 24 24",
    ...stroke,
    style: baseSvg,
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("circle", {
      cx: "12",
      cy: "8",
      r: "4"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
      d: "M4 21c0-4 4-7 8-7s8 3 8 7"
    })]
  }),
  gear: /*#__PURE__*/jsxRuntimeExports.jsxs("svg", {
    viewBox: "0 0 24 24",
    ...stroke,
    style: baseSvg,
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
      d: "M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"
    })]
  }),
  check: /*#__PURE__*/jsxRuntimeExports.jsx("svg", {
    viewBox: "0 0 24 24",
    ...stroke,
    strokeWidth: 2.2,
    style: baseSvg,
    children: /*#__PURE__*/jsxRuntimeExports.jsx("path", {
      d: "M4 12l5 5 11-12"
    })
  }),
  chevronLeft: /*#__PURE__*/jsxRuntimeExports.jsx("svg", {
    viewBox: "0 0 24 24",
    ...stroke,
    style: baseSvg,
    children: /*#__PURE__*/jsxRuntimeExports.jsx("path", {
      d: "M15 18l-6-6 6-6"
    })
  }),
  // Half-disc — kept for backward compat, not used in the tab bar anymore.
  halfDisc: /*#__PURE__*/jsxRuntimeExports.jsx("span", {
    style: {
      fontFamily: 'serif',
      fontSize: '1em'
    },
    children: "\u25D0"
  }),
  // Outlined single ring — drawn like its siblings so stroke weight matches.
  ring: /*#__PURE__*/jsxRuntimeExports.jsx("svg", {
    viewBox: "0 0 24 24",
    ...stroke,
    style: baseSvg,
    children: /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
      cx: "12",
      cy: "12",
      r: "8"
    })
  }),
  // Dismiss ×
  x: /*#__PURE__*/jsxRuntimeExports.jsx("svg", {
    viewBox: "0 0 24 24",
    ...stroke,
    style: baseSvg,
    children: /*#__PURE__*/jsxRuntimeExports.jsx("path", {
      d: "M6 6l12 12M18 6L6 18"
    })
  }),
  // Edit pencil
  pencil: /*#__PURE__*/jsxRuntimeExports.jsxs("svg", {
    viewBox: "0 0 24 24",
    ...stroke,
    style: baseSvg,
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
      d: "M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19l-4 1z"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
      d: "M13.5 7.5l3 3"
    })]
  }),
  // Keypad delete
  backspace: /*#__PURE__*/jsxRuntimeExports.jsxs("svg", {
    viewBox: "0 0 24 24",
    ...stroke,
    style: baseSvg,
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
      d: "M9 5h11a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H9l-6-7 6-7z"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
      d: "M13 10l4 4M17 10l-4 4"
    })]
  }),
  // Met up — two clasped hands (simplified)
  handshake: /*#__PURE__*/jsxRuntimeExports.jsxs("svg", {
    viewBox: "0 0 24 24",
    ...stroke,
    style: baseSvg,
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
      d: "M3 11l4-4 5 1 4-3 5 5"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
      d: "M12 8l-3.5 3.5a1.5 1.5 0 0 0 2 2.2L12 12l2 2a1.5 1.5 0 0 0 2.2-2L21 7"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
      d: "M3 11l5 6a1.6 1.6 0 0 0 2.4-2.1"
    })]
  }),
  // Coffee cup
  cup: /*#__PURE__*/jsxRuntimeExports.jsxs("svg", {
    viewBox: "0 0 24 24",
    ...stroke,
    style: baseSvg,
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
      d: "M5 9h11v6a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5V9z"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
      d: "M16 10h2a2.5 2.5 0 0 1 0 5h-2"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
      d: "M8 5c0-1 .8-1 .8-2M12 5c0-1 .8-1 .8-2"
    })]
  }),
  // Text/message bubble
  message: /*#__PURE__*/jsxRuntimeExports.jsx("svg", {
    viewBox: "0 0 24 24",
    ...stroke,
    style: baseSvg,
    children: /*#__PURE__*/jsxRuntimeExports.jsx("path", {
      d: "M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4V6z"
    })
  }),
  // House — Today tab
  house: /*#__PURE__*/jsxRuntimeExports.jsxs("svg", {
    viewBox: "0 0 24 24",
    ...stroke,
    style: baseSvg,
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
      d: "M3 11.5L12 4l9 7.5"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
      d: "M5 10.5V20h14v-9.5"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
      d: "M10 20v-6h4v6"
    })]
  }),
  // Concentric rings — Circles tab (echoes the brand mark)
  target: /*#__PURE__*/jsxRuntimeExports.jsxs("svg", {
    viewBox: "0 0 24 24",
    ...stroke,
    style: baseSvg,
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
      cx: "12",
      cy: "12",
      r: "3.5"
    })]
  }),
  // Network — Map tab (4 nodes + connecting lines)
  network: /*#__PURE__*/jsxRuntimeExports.jsxs("svg", {
    viewBox: "0 0 24 24",
    ...stroke,
    style: baseSvg,
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("circle", {
      cx: "12",
      cy: "12",
      r: "2.5"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
      cx: "5",
      cy: "6",
      r: "2"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
      cx: "19",
      cy: "6",
      r: "2"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
      cx: "5",
      cy: "18",
      r: "2"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
      cx: "19",
      cy: "18",
      r: "2"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
      d: "M12 12 L5 6 M12 12 L19 6 M12 12 L5 18 M12 12 L19 18"
    })]
  }),
  // Phone receiver — for tap-to-call on contact card
  phone: /*#__PURE__*/jsxRuntimeExports.jsx("svg", {
    viewBox: "0 0 24 24",
    ...stroke,
    style: baseSvg,
    children: /*#__PURE__*/jsxRuntimeExports.jsx("path", {
      d: "M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z"
    })
  }),
  // Envelope — for tap-to-email on contact card
  mail: /*#__PURE__*/jsxRuntimeExports.jsxs("svg", {
    viewBox: "0 0 24 24",
    ...stroke,
    style: baseSvg,
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("rect", {
      x: "3",
      y: "5",
      width: "18",
      height: "14",
      rx: "2"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
      d: "M3 7l9 6 9-6"
    })]
  })
};
function Ico({
  name,
  size,
  color,
  style
}) {
  const node = Icons[name] || null;
  if (!node) return null;
  return /*#__PURE__*/jsxRuntimeExports.jsx("span", {
    style: {
      fontSize: size || 18,
      color,
      lineHeight: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...(style || {})
    },
    children: node
  });
}

function Nav({
  view,
  onChange
}) {
  const active = activeTabFor(view);

  // Gliding spotlight: measure the active tab's box and slide a soft accent
  // lozenge behind it. Re-measures on tab change and on width changes.
  const barRef = reactExports.useRef(null);
  const [ind, setInd] = reactExports.useState(null);
  reactExports.useLayoutEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const el = bar.querySelector(`[data-tab="${active}"]`);
    if (!el) return;
    setInd({
      left: el.offsetLeft,
      top: el.offsetTop,
      width: el.offsetWidth,
      height: el.offsetHeight
    });
  }, [active]);
  reactExports.useEffect(() => {
    const onResize = () => {
      const bar = barRef.current;
      if (!bar) return;
      const el = bar.querySelector(`[data-tab="${active}"]`);
      if (!el) return;
      setInd({
        left: el.offsetLeft,
        top: el.offsetTop,
        width: el.offsetWidth,
        height: el.offsetHeight
      });
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [active]);
  return /*#__PURE__*/jsxRuntimeExports.jsx("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      // Respect the home-indicator safe area on notched devices, but never
      // less than 22px so it floats nicely in the desktop bezel too.
      paddingBottom: 'max(22px, env(safe-area-inset-bottom))',
      // Thin legibility veil (not a solid wall) — rows visibly glide
      // beneath the frosted pill instead of dying behind it.
      background: 'linear-gradient(to top, var(--paper-veil) 20%, transparent)',
      zIndex: 30
    },
    children: /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      ref: barRef,
      className: "al-glass",
      style: {
        position: 'relative',
        margin: '0 16px',
        padding: '0 4px',
        borderRadius: theme.radii.pill,
        display: 'flex',
        alignItems: 'center'
      },
      children: [ind && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        "aria-hidden": "true",
        style: {
          position: 'absolute',
          left: ind.left + 3,
          top: ind.top + 5,
          width: ind.width - 6,
          height: ind.height - 10,
          borderRadius: 14,
          background: 'linear-gradient(180deg, var(--c-accent-soft), var(--c-accent-softer))',
          boxShadow: 'inset 0 0.5px 0 var(--glass-edge)',
          transition: 'left 440ms cubic-bezier(0.22, 1, 0.36, 1), width 440ms cubic-bezier(0.22, 1, 0.36, 1)',
          zIndex: 0,
          pointerEvents: 'none'
        }
      }), /*#__PURE__*/jsxRuntimeExports.jsx(Tab, {
        tabKey: "briefing",
        label: "Today",
        icon: "house",
        active: active === 'briefing',
        onClick: () => onChange({
          kind: 'briefing'
        })
      }), /*#__PURE__*/jsxRuntimeExports.jsx(Tab, {
        tabKey: "list",
        label: "People",
        icon: "user",
        active: active === 'list',
        onClick: () => onChange({
          kind: 'list'
        })
      }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
        className: "al-press",
        "aria-label": "Capture a note",
        onClick: () => {
          haptics.select();
          onChange({
            kind: 'capture',
            autoListen: true
          });
        },
        style: {
          position: 'relative',
          zIndex: 1,
          padding: '0 12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          background: 'transparent',
          border: 'none'
        },
        children: /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            width: 48,
            height: 48,
            borderRadius: 24,
            background: theme.colors.accent,
            color: theme.colors.onAccent,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: theme.shadow.accent
          },
          children: /*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
            name: "mic",
            size: 22
          })
        })
      }), /*#__PURE__*/jsxRuntimeExports.jsx(Tab, {
        tabKey: "circles",
        label: "Circles",
        icon: "target",
        active: active === 'circles',
        onClick: () => onChange({
          kind: 'circles'
        })
      }), /*#__PURE__*/jsxRuntimeExports.jsx(Tab, {
        tabKey: "map",
        label: "Map",
        icon: "network",
        active: active === 'map',
        onClick: () => onChange({
          kind: 'map'
        })
      })]
    })
  });
}
function Tab({
  tabKey,
  label,
  icon,
  active,
  onClick
}) {
  const color = active ? theme.colors.accent : theme.colors.ink3;
  return /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
    className: "al-press",
    "data-tab": tabKey,
    "aria-label": label,
    "aria-current": active ? 'page' : undefined,
    onClick: () => {
      haptics.tap();
      onClick && onClick();
    },
    style: {
      position: 'relative',
      zIndex: 1,
      flex: 1,
      padding: '8px 0 6px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
      color,
      cursor: 'pointer',
      WebkitTapHighlightColor: 'transparent',
      background: 'transparent',
      border: 'none'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
      name: icon,
      size: 19
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        fontFamily: theme.fonts.mono,
        fontSize: 10,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        fontWeight: active ? 500 : 400
      },
      children: label
    })]
  });
}
function activeTabFor(view) {
  if (view.kind === 'detail' || view.kind === 'edit' || view.kind === 'new') return 'list';
  if (view.kind === 'circles_edit') return 'circles';
  if (view.kind === 'circle_detail') return 'circles';
  if (view.kind === 'search') return 'list'; // legacy — folded into People
  return view.kind;
}

const ringShadow = (extra = '') => `0 0 0 2px var(--c-paper), 0 0 0 4px color-mix(in srgb, var(--c-accent) 65%, transparent)${extra}`;

/**
 * Avatar — warm gradient circle with initials.
 *
 * Variants:
 *   - default:  filled gradient (linked person)
 *   - dashed:   translucent + dashed border (event-only attendee, not in app)
 *   - ring:     accent ring around it (highlights the lead attendee)
 *   - tone:     'paper' or 'card' background — pass dark={true} when sitting
 *               on a dark wallet-card background to flip styles.
 */
function Avatar({
  name,
  initials,
  photo,
  // base64 dataURL — when set, render the photo instead of initials
  size = 36,
  variant = 'filled',
  ring = false,
  dark = false,
  style
}) {
  const inits = (initials || computeInitials(name) || '?').slice(0, 2);
  const isDashed = variant === 'dashed';
  const base = {
    width: size,
    height: size,
    borderRadius: '50%',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: theme.fonts.serif,
    fontWeight: 500,
    fontSize: size * 0.36,
    letterSpacing: 0.3,
    boxSizing: 'border-box'
  };

  // Real photo — render an <img> filling the circle
  if (photo) {
    return /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        ...base,
        background: theme.colors.paperDeep,
        overflow: 'hidden',
        boxShadow: ring ? ringShadow() : 'inset 0 0 0 0.5px rgba(0,0,0,.08)',
        ...(style || {})
      },
      children: /*#__PURE__*/jsxRuntimeExports.jsx("img", {
        src: photo,
        alt: name || 'avatar',
        style: {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block'
        }
      })
    });
  }
  if (isDashed) {
    return /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        ...base,
        background: dark ? 'rgba(246,241,231,0.18)' : theme.colors.paperDeep,
        color: dark ? 'rgba(246,241,231,0.92)' : theme.colors.ink2,
        border: dark ? '1px dashed rgba(246,241,231,0.50)' : `1px dashed ${theme.colors.ruleStrong}`,
        ...(style || {})
      },
      children: inits
    });
  }
  return /*#__PURE__*/jsxRuntimeExports.jsx("div", {
    style: {
      ...base,
      background: gradientByName(name || initials),
      color: 'rgba(40,34,26,0.82)',
      // Glossy bead: a top highlight + a hairline edge for dimension.
      boxShadow: ring ? ringShadow(', inset 0 1px 1.5px rgba(255,255,255,0.45)') : 'inset 0 1px 1.5px rgba(255,255,255,0.45), inset 0 0 0 0.5px rgba(0,0,0,0.07)',
      ...(style || {})
    },
    children: inits
  });
}

// Bespoke duotone gradient per person — a stable hash picks an anchor hue, and
// the avatar is a soft two-stop blend toward a neighbouring hue. Every contact
// gets a unique, recognisable "bead" while staying in the muted, warm register.
function gradientByName(name) {
  let h = 5381;
  const s = String(name || '?');
  for (let i = 0; i < s.length; i++) h = (h << 5) + h + s.charCodeAt(i) >>> 0;

  // Anchor hue on the warm arc (rose→terracotta→amber→olive) so every bead
  // stays on-brand; a second hash drives the hue-spread direction so
  // neighbours don't all lean the same way.
  const hue = (330 + h % 140) % 360;
  const spread = 24 + h % 18; // 24–41° of separation
  const dir = h >> 9 & 1 ? 1 : -1;
  const hue2 = (hue + dir * spread + 360) % 360;

  // Muted, slightly luminous: light enough for dark ink to stay legible,
  // saturated enough to read as a deliberate colour rather than grey.
  const c1 = `hsl(${hue}, 42%, 78%)`;
  const c2 = `hsl(${hue2}, 48%, 67%)`;
  return `linear-gradient(150deg, ${c1} 0%, ${c2} 100%)`;
}

/** Stack of overlapping mini-avatars. */
function AvatarPile({
  items,
  size = 24,
  max = 4,
  dark = false
}) {
  const shown = items.slice(0, max);
  const overflow = items.length - max;
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      display: 'flex'
    },
    children: [shown.map((a, i) => /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginLeft: i ? -8 : 0,
        position: 'relative',
        zIndex: max - i
      },
      children: /*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
        name: a.name,
        initials: a.initials,
        photo: a.photo,
        size: size,
        variant: a.linked === false ? 'dashed' : 'filled',
        dark: dark
      })
    }, a.id || a.name || i)), overflow > 0 && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginLeft: -8,
        width: size,
        height: size,
        borderRadius: size / 2,
        background: dark ? 'rgba(255,255,255,0.12)' : theme.colors.paperDeep,
        color: dark ? 'rgba(246,241,231,0.85)' : theme.colors.ink2,
        fontFamily: theme.fonts.serif,
        fontSize: size * 0.36,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 0 1.5px ' + theme.colors.card,
        zIndex: 0,
        boxSizing: 'border-box'
      },
      children: ["+", overflow]
    })]
  });
}

/** Compute "MS" from "Mike Smith", "Erik" → "E", etc. */
function computeInitials(name) {
  if (!name) return '';
  const words = String(name).trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return '';
  if (words.length === 1) return words[0][0].toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

// THE control system — every button in the app is one of these variants.
//
//   primary     : ink pill, serif 15, 44px — the editorial CTA signature.
//                 (Accent fill is reserved for exactly one hero: onboarding.)
//   secondary   : card bg + rule border, serif 14, 38px.
//   mini        : sans 13/500, 36px pill — inline row actions.
//   miniPrimary : mini metrics + ink bg — inline confirm ("Add", "Log it").
//   ghost       : uppercase mono text button (LATER, SKIP, cancel).
//   danger      : ghost voice in the danger color.
//
// 44×44 effective touch targets: mini/ghost keep small visuals but callers
// should pair them with padded rows; CloseButton bakes the target in.

const base = {
  fontFamily: theme.fonts.serif,
  fontSize: 15,
  letterSpacing: '0.005em',
  border: '1px solid transparent',
  borderRadius: theme.radii.pill,
  padding: '12px 20px',
  minHeight: 44,
  lineHeight: 1.2,
  transition: 'background 120ms ease, border-color 120ms ease, color 120ms ease',
  WebkitAppearance: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 6
};
function styleFor(variant, hover) {
  switch (variant) {
    case 'primary':
      return {
        background: hover ? theme.colors.ink2 : theme.colors.ink,
        color: theme.colors.paper,
        borderColor: 'transparent'
      };
    case 'secondary':
      return {
        background: hover ? theme.colors.paperDeep : theme.colors.card,
        color: theme.colors.ink,
        borderColor: theme.colors.rule,
        fontSize: 14,
        minHeight: 38,
        padding: '9px 16px'
      };
    case 'mini':
      return {
        background: hover ? theme.colors.paperDeep : theme.colors.card,
        color: theme.colors.ink,
        borderColor: theme.colors.rule,
        fontFamily: theme.fonts.sans,
        fontSize: 13,
        fontWeight: 500,
        minHeight: 36,
        padding: '8px 16px'
      };
    case 'miniPrimary':
      return {
        background: hover ? theme.colors.ink2 : theme.colors.ink,
        color: theme.colors.paper,
        borderColor: 'transparent',
        fontFamily: theme.fonts.sans,
        fontSize: 13,
        fontWeight: 500,
        minHeight: 36,
        padding: '8px 16px'
      };
    case 'ghost':
      return {
        background: hover ? theme.colors.paperDeep : 'transparent',
        color: theme.colors.ink3,
        borderColor: 'transparent',
        fontFamily: theme.fonts.mono,
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: theme.tracking.label,
        textTransform: 'uppercase',
        padding: '8px 10px',
        margin: '-8px -10px',
        minHeight: 32
      };
    case 'danger':
      return {
        background: hover ? theme.colors.dangerSoft : 'transparent',
        color: theme.colors.danger,
        borderColor: 'transparent',
        padding: '6px 10px',
        fontSize: 14
      };
    default:
      return {};
  }
}
function Button({
  variant = 'primary',
  style,
  children,
  disabled,
  type = 'button',
  ...rest
}) {
  const [hover, setHover] = reactExports.useState(false);
  const variantStyle = styleFor(variant, hover && !disabled);
  return /*#__PURE__*/jsxRuntimeExports.jsx("button", {
    ...rest,
    type: type,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variantStyle,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      ...(style || {})
    },
    children: children
  });
}

/**
 * The one dismiss affordance — a drawn ×, 44×44 touch target, negative
 * margin so it nests into headers without inflating layout.
 */
function CloseButton({
  label = 'Close',
  size = 18,
  style,
  ...rest
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsx("button", {
    type: "button",
    "aria-label": label,
    ...rest,
    style: {
      width: 44,
      height: 44,
      margin: -10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
      border: 'none',
      borderRadius: theme.radii.pill,
      color: theme.colors.ink3,
      cursor: 'pointer',
      ...(style || {})
    },
    children: /*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
      name: "x",
      size: size
    })
  });
}

// EmptyState — the quiet "nothing here yet" panel.
//
// Uses the Circles ring motif (concentric rings + a person dot) drawn in
// muted ink so it reads as part of the brand, not a sad blank. Paint is set
// via `style` (not SVG attributes) so the theme's CSS variables resolve in
// both light and dark.

function EmptyState$3({
  title,
  subtitle,
  action
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    className: "al-rise",
    style: {
      textAlign: 'center',
      padding: '52px 28px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 14
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx(RingMark, {}), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        fontFamily: theme.fonts.serif,
        fontSize: 18,
        fontWeight: 500,
        color: theme.colors.ink2
      },
      children: title
    }), subtitle && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        fontFamily: theme.fonts.sans,
        fontSize: 13,
        color: theme.colors.ink3,
        maxWidth: 250,
        lineHeight: 1.55
      },
      children: subtitle
    }), action && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginTop: 4
      },
      children: action
    })]
  });
}
function RingMark() {
  const rings = [{
    r: 25,
    op: 0.45
  }, {
    r: 17,
    op: 0.32
  }, {
    r: 9,
    op: 0.2
  }];
  return /*#__PURE__*/jsxRuntimeExports.jsxs("svg", {
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    "aria-hidden": "true",
    children: [rings.map((ring, i) => /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
      cx: "30",
      cy: "30",
      r: ring.r,
      fill: "none",
      style: {
        stroke: theme.colors.ink4,
        strokeWidth: 1.5,
        opacity: ring.op
      }
    }, i)), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
      cx: "30",
      cy: "24",
      r: "5",
      style: {
        fill: theme.colors.ink4,
        opacity: 0.34
      }
    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
      d: "M21 39c1.5-5 16.5-5 18 0",
      style: {
        fill: theme.colors.ink4,
        opacity: 0.34
      }
    })]
  });
}

// THE search field. One recipe for every search input (People, Circles,
// Map picker, full-text Search): pill card with a drawn glass icon and a
// transparent 16px inner input (16 = the iOS zoom-guard floor, so desktop
// and device render identically).

function SearchField({
  value,
  onChange,
  placeholder = 'Search…',
  fontFamily = theme.fonts.sans,
  autoFocus = false,
  inputRef,
  onKeyDown,
  right = null,
  // optional right-side adornment (e.g. clear button)
  style
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 16px',
      background: theme.colors.card,
      border: `1px solid ${theme.colors.rule}`,
      borderRadius: theme.radii.pill,
      ...(style || {})
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
      name: "search",
      size: 16,
      color: theme.colors.ink3,
      style: {
        flexShrink: 0
      }
    }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
      ref: inputRef,
      value: value,
      onChange: onChange,
      onKeyDown: onKeyDown,
      placeholder: placeholder,
      autoFocus: autoFocus,
      style: {
        flex: 1,
        minWidth: 0,
        border: 'none',
        outline: 'none',
        background: 'transparent',
        fontFamily,
        fontSize: 16,
        color: theme.colors.ink,
        padding: 0
      }
    }), right]
  });
}

// People — flat list per the latest design + NEXT STEP strip on top.
//
// Header: ALL · N mono + Newsreader title.
// Below the header: a 3-slot NEXT STEP card that surfaces the most
// pressing thing across all relationships:
//   1. Open follow-up for someone you'll see soon
//   2. Oldest unchecked follow-up
//   3. Longest-overdue check-in (drifting relationship)
// Each row tap-routes to that person's Glance.
//
// Then a flat list of all people with avatar + name + role + time-since.

function matchesQuery(person, q, circles) {
  if (!q) return true;
  const needle = q.toLowerCase();
  if (person.name?.toLowerCase().includes(needle)) return true;
  if (person.location?.toLowerCase().includes(needle)) return true;
  if (person.howWeMet?.toLowerCase().includes(needle)) return true;
  // Support details as either string[] (legacy) or {text}[] (new)
  if ((person.details || []).some(d => (typeof d === 'string' ? d : d?.text || '').toLowerCase().includes(needle))) return true;
  if ((person.family || []).some(f => f.name.toLowerCase().includes(needle) || f.relation.toLowerCase().includes(needle))) return true;
  if ((person.notes || []).some(n => (n.text || '').toLowerCase().includes(needle))) return true;
  // Open threads / follow-ups ("who do I owe X?")
  if ((person.followUps || []).some(f => (f.text || '').toLowerCase().includes(needle))) return true;
  // Logged moments — calendar events + one-tap captures ("who did I have coffee with?")
  if ((person.interactions || []).some(i => `${i.summary || ''} ${i.location || ''}`.toLowerCase().includes(needle))) return true;
  // Contact handles
  if (person.email?.toLowerCase().includes(needle)) return true;
  if (person.phone?.toLowerCase().includes(needle)) return true;
  // Match by circle name too
  for (const cid of person.circleIds || []) {
    const c = circles.find(x => x.id === cid);
    if (c?.name.toLowerCase().includes(needle)) return true;
  }
  return false;
}
function timeSince$1(iso) {
  if (!iso) return '—';
  const ms = Date.now() - new Date(iso).getTime();
  if (ms < 0) return 'NOW';
  const sec = Math.floor(ms / 1000);
  const min = Math.floor(sec / 60);
  const hr = Math.floor(min / 60);
  const day = Math.floor(hr / 24);
  if (day === 0) return hr <= 0 ? `${Math.max(min, 1)}M` : `${hr}H`;
  if (day < 7) return `${day}D`;
  if (day < 30) return `${Math.floor(day / 7)}W`;
  if (day < 365) return `${Math.floor(day / 30)}MO`;
  return `${Math.floor(day / 365)}Y`;
}
function humanWhen(iso) {
  if (!iso) return null;
  const d = new Date(iso);
  const ms = d.getTime() - Date.now();
  const day = Math.floor(ms / 86400000);
  if (day < 0) return null;
  if (day === 0) {
    const hr = Math.floor(ms / 3600000);
    if (hr <= 1) return 'in <1h';
    if (hr < 24) return `in ${hr}h`;
    return 'today';
  }
  if (day === 1) return 'tomorrow';
  if (day < 7) return d.toLocaleDateString(undefined, {
    weekday: 'long'
  });
  return d.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric'
  });
}

// ---- compute next steps (prioritized across all people) ----
function computeNextSteps(people, events) {
  const out = [];

  // Slot 1: someone you'll see soon (next 5 days) AND has an open follow-up
  const soonByPerson = new Map(); // personId -> nearest upcoming event
  for (const e of events || []) {
    const start = new Date(e.start).getTime();
    const days = (start - Date.now()) / 86400000;
    if (days < 0 || days > 5) continue;
    for (const id of e.matchedPersonIds || []) {
      if (!soonByPerson.has(id) || soonByPerson.get(id).start > e.start) {
        soonByPerson.set(id, e);
      }
    }
  }
  let prepCand = null;
  for (const p of people) {
    const open = (p.followUps || []).find(f => !f.done);
    if (!open) continue;
    const ev = soonByPerson.get(p.id);
    if (!ev) continue;
    if (!prepCand || ev.start < prepCand.event.start) {
      prepCand = {
        person: p,
        event: ev,
        followUp: open
      };
    }
  }
  if (prepCand) {
    out.push({
      key: `prep-${prepCand.person.id}`,
      kind: 'prep',
      personId: prepCand.person.id,
      person: prepCand.person,
      title: prepCand.followUp.text,
      meta: `${humanWhen(prepCand.event.start) || 'soon'} · ${prepCand.event.summary}`
    });
  }

  // Slot 2: oldest unchecked follow-up not already in slot 1
  let oldestCand = null;
  for (const p of people) {
    if (prepCand && p.id === prepCand.person.id) continue;
    const open = (p.followUps || []).find(f => !f.done);
    if (!open) continue;
    // Parse timestamp from the id (makeId encodes Date.now() as base36)
    const m = open.id.match(/_([0-9a-z]+)/i);
    const t = m ? parseInt(m[1].slice(0, 8), 36) : 0;
    if (!oldestCand || t < oldestCand.t) {
      oldestCand = {
        person: p,
        followUp: open,
        t
      };
    }
  }
  if (oldestCand) {
    out.push({
      key: `followup-${oldestCand.person.id}`,
      kind: 'followup',
      personId: oldestCand.person.id,
      person: oldestCand.person,
      title: oldestCand.followUp.text,
      meta: 'open thread'
    });
  }

  // Slot 3: longest-overdue check-in (oldest lastTouch among people NOT
  // already slotted). Reads from the ledger so a calendar interaction
  // counts as a real touch — you don't show up as "drifting" just because
  // you never wrote a note about someone you actually saw last week.
  const taken = new Set(out.map(x => x.personId));
  let driftCand = null;
  for (const p of people) {
    if (taken.has(p.id)) continue;
    const last = lastTouch(p);
    if (!last) continue;
    const ms = Date.now() - new Date(last).getTime();
    const days = ms / 86400000;
    if (days < 14) continue; // only drifting if 2+ weeks
    if (!driftCand || ms > driftCand.ms) {
      driftCand = {
        person: p,
        ms,
        last,
        days: Math.floor(days)
      };
    }
  }
  if (driftCand) {
    const wks = Math.floor(driftCand.days / 7);
    out.push({
      key: `drift-${driftCand.person.id}`,
      kind: 'drift',
      personId: driftCand.person.id,
      person: driftCand.person,
      title: `Haven't talked in ${wks >= 1 ? wks + (wks === 1 ? ' week' : ' weeks') : driftCand.days + ' days'}`,
      meta: 'check in?'
    });
  }
  return out;
}
function roleLine(person, circles) {
  // Prefer howWeMet (verbatim), else primary circle path
  if (person.howWeMet) return person.howWeMet;
  const primaryId = person.circleIds?.[0];
  if (primaryId) return getPathString(circles, primaryId);
  return '';
}
function PeopleList({
  people,
  circles,
  events = [],
  onSelect,
  onAdd,
  onCapture
}) {
  const [q, setQ] = reactExports.useState('');
  const filtered = reactExports.useMemo(() => people.filter(p => matchesQuery(p, q.trim(), circles)), [people, q, circles]);
  const sorted = reactExports.useMemo(() => [...filtered].sort((a, b) => {
    // Sort by recency: lastTouch covers both notes and auto-logged
    // calendar interactions, so the order reflects when you actually
    // last had contact — not just when you last typed something.
    const aDate = lastTouch(a) || '';
    const bDate = lastTouch(b) || '';
    if (aDate !== bDate) return bDate.localeCompare(aDate);
    return (a.name || '').localeCompare(b.name || '');
  }), [filtered]);
  const nextSteps = reactExports.useMemo(() => computeNextSteps(people, events), [people, events]);
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      padding: '54px 22px 0'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        fontFamily: theme.fonts.mono,
        fontSize: 10,
        color: theme.colors.ink3,
        letterSpacing: 0.9,
        textTransform: 'uppercase'
      },
      children: ["ALL \xB7 ", people.length]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginTop: 4
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("h1", {
        style: {
          margin: 0,
          fontFamily: theme.fonts.serif,
          fontSize: 32,
          fontWeight: 500,
          letterSpacing: '-0.02em',
          color: theme.colors.ink,
          lineHeight: 1
        },
        children: "People"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: onAdd,
        style: {
          background: 'transparent',
          border: 'none',
          padding: '14px 0 14px 16px',
          margin: '-14px 0',
          minHeight: 44,
          display: 'inline-flex',
          alignItems: 'center',
          cursor: 'pointer',
          fontFamily: theme.fonts.serif,
          fontStyle: 'italic',
          fontSize: 15,
          color: theme.colors.accent
        },
        children: "+ New"
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx(SearchField, {
      value: q,
      onChange: e => setQ(e.target.value),
      placeholder: "Search names, circles, topics, notes\u2026",
      fontFamily: theme.fonts.serif,
      style: {
        marginTop: 14
      },
      right: q ? /*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: () => setQ(''),
        "aria-label": "Clear",
        style: {
          background: 'transparent',
          border: 'none',
          color: theme.colors.ink3,
          fontSize: 18,
          padding: 13,
          margin: '-13px -14px -13px -13px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          lineHeight: 1
        },
        children: "\xD7"
      }) : null
    }), !q && nextSteps.length > 0 && /*#__PURE__*/jsxRuntimeExports.jsx(NextStepStrip, {
      steps: nextSteps,
      onSelect: onSelect
    }), people.length === 0 ? /*#__PURE__*/jsxRuntimeExports.jsx(EmptyState$2, {
      onCapture: onCapture,
      onAdd: onAdd
    }) : sorted.length === 0 ? /*#__PURE__*/jsxRuntimeExports.jsx(EmptyState$3, {
      title: "No matches",
      subtitle: `No one matches “${q.trim()}” — check the spelling or add them.`,
      action: /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
        variant: "ghost",
        onClick: () => setQ(''),
        children: "Clear search"
      })
    }) : /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          ...microLabel,
          marginTop: 24
        },
        children: "EVERYONE"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("ul", {
        style: {
          listStyle: 'none',
          margin: 0,
          marginTop: 4,
          padding: 0
        },
        children: sorted.map((p, i) => /*#__PURE__*/jsxRuntimeExports.jsx(PersonRow, {
          person: p,
          circles: circles,
          index: i,
          isLast: i === sorted.length - 1,
          onClick: () => onSelect(p.id)
        }, p.id))
      })]
    })]
  });
}

// ---- NEXT STEP strip — a 3-slot prioritized to-do card on top of People ----

function NextStepStrip({
  steps,
  onSelect
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      marginTop: 18
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        fontFamily: theme.fonts.mono,
        fontSize: 10,
        color: theme.colors.ink3,
        letterSpacing: 0.9,
        textTransform: 'uppercase',
        marginBottom: 6
      },
      children: ["NEXT STEP \xB7 ", steps.length]
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        background: theme.colors.card,
        border: `1px solid ${theme.colors.rule}`,
        borderRadius: theme.radii.lg,
        overflow: 'hidden'
      },
      children: steps.map((s, i) => /*#__PURE__*/jsxRuntimeExports.jsx(NextStepRow, {
        step: s,
        isLast: i === steps.length - 1,
        onClick: () => onSelect(s.personId)
      }, s.key))
    })]
  });
}
function NextStepRow({
  step,
  isLast,
  onClick
}) {
  const kindStyle = {
    prep: {
      dot: theme.colors.accent,
      tag: 'PREP'
    },
    followup: {
      dot: theme.colors.amber,
      tag: 'OWED'
    },
    drift: {
      dot: theme.colors.ink3,
      tag: 'DRIFT'
    }
  }[step.kind] || {
    dot: theme.colors.ink3,
    tag: ''
  };
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    onClick: onClick,
    role: "button",
    tabIndex: 0,
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick && onClick();
      }
    },
    className: "al-press al-hover-row",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      padding: '12px 14px',
      borderBottom: isLast ? 'none' : `1px solid ${theme.colors.rule}`,
      cursor: 'pointer'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 4,
        width: 6
      },
      children: /*#__PURE__*/jsxRuntimeExports.jsx("span", {
        style: {
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: kindStyle.dot,
          marginTop: 6
        }
      })
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        flex: 1,
        minWidth: 0
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          fontFamily: theme.fonts.serif,
          fontStyle: step.kind === 'drift' ? 'italic' : 'normal',
          fontSize: 15,
          color: theme.colors.ink,
          lineHeight: 1.35,
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical'
        },
        children: step.kind !== 'drift' ? `"${step.title}"` : step.title
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          ...microLabel,
          marginTop: 4
        },
        children: kindStyle.tag ? `${kindStyle.tag} · ${step.meta}` : step.meta
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
      name: step.person.name,
      photo: step.person.photo,
      size: 32,
      style: {
        alignSelf: 'center'
      }
    })]
  });
}
function PersonRow({
  person,
  circles,
  onClick,
  index = 0,
  isLast = false
}) {
  const role = roleLine(person, circles);
  const latest = lastTouch(person);
  return /*#__PURE__*/jsxRuntimeExports.jsxs("li", {
    onClick: onClick,
    role: "button",
    tabIndex: 0,
    "aria-label": person.name || 'Someone new',
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick && onClick();
      }
    },
    className: "al-rise al-press",
    style: {
      '--i': Math.min(index, 12),
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 0',
      borderBottom: isLast ? 'none' : `1px solid ${theme.colors.rule}`,
      cursor: 'pointer'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
      name: person.name,
      photo: person.photo,
      size: 36
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        flex: 1,
        minWidth: 0
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          fontFamily: theme.fonts.serif,
          fontSize: 15,
          fontWeight: 500,
          color: theme.colors.ink,
          letterSpacing: -0.2,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        },
        children: person.name || 'Someone new'
      }), role && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          fontFamily: theme.fonts.sans,
          fontSize: 12.5,
          color: theme.colors.ink3,
          marginTop: 2,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        },
        children: role
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        flexShrink: 0,
        fontFamily: theme.fonts.mono,
        fontSize: 11,
        color: theme.colors.ink3,
        letterSpacing: '0.12em'
      },
      children: timeSince$1(latest)
    })]
  });
}
function EmptyState$2({
  onCapture,
  onAdd
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      marginTop: 40,
      padding: '32px 18px',
      textAlign: 'center',
      background: theme.colors.card,
      border: `1px dashed ${theme.colors.rule}`,
      borderRadius: theme.radii.lg
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        fontFamily: theme.fonts.serif,
        fontStyle: 'italic',
        fontSize: 18,
        color: theme.colors.ink
      },
      children: "No one here yet."
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginTop: 8,
        fontFamily: theme.fonts.serif,
        fontSize: 14,
        color: theme.colors.ink3,
        lineHeight: 1.5,
        maxWidth: 280,
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      children: "Tap the mic and tell Circles about someone you saw \u2014 or add one manually."
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        gap: 10,
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: 14
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: onCapture,
        style: {
          padding: '12px 20px',
          minHeight: 44,
          borderRadius: theme.radii.pill,
          border: 'none',
          background: theme.colors.ink,
          color: theme.colors.paper,
          fontFamily: theme.fonts.serif,
          fontSize: 14,
          cursor: 'pointer'
        },
        children: "Capture a note"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: onAdd,
        style: {
          padding: '12px 20px',
          minHeight: 44,
          borderRadius: theme.radii.pill,
          border: `1px solid ${theme.colors.rule}`,
          background: theme.colors.card,
          color: theme.colors.ink,
          fontFamily: theme.fonts.serif,
          fontSize: 14,
          cursor: 'pointer'
        },
        children: "Add manually"
      })]
    })]
  });
}

// cadence.js — per-person "keep in touch" goals.
//
// A cadence is the user's intent for a relationship: "I want to stay in touch
// with Dave every two weeks." It turns the app's one-size-fits-all drift rule
// (14/45 days) into something personal — a monthly friend isn't "drifting" at
// 30 days, but a weekly one is overdue at 10.
//
// Pure and deterministic given `now`. The cadence lives on the person as the
// optional field `person.keepInTouch` (a key below). Unset = no goal, and the
// app falls back to its global recency heuristic.


// Ordered loosest-to-tightest is NOT the display order; we show tightest first
// because that's how people think about "how often."
const CADENCE_OPTIONS = [{
  key: 'weekly',
  days: 7,
  label: 'Weekly',
  short: '1w'
}, {
  key: 'biweekly',
  days: 14,
  label: 'Every 2 weeks',
  short: '2w'
}, {
  key: 'monthly',
  days: 30,
  label: 'Monthly',
  short: '1mo'
}, {
  key: 'quarterly',
  days: 90,
  label: 'Every 3 months',
  short: '3mo'
}, {
  key: 'biannual',
  days: 182,
  label: 'Twice a year',
  short: '6mo'
}, {
  key: 'yearly',
  days: 365,
  label: 'Once a year',
  short: '1y'
}];
const BY_KEY = new Map(CADENCE_OPTIONS.map(o => [o.key, o]));

/** Period length in days for a cadence key, or null if unset/unknown. */
function cadenceDays(key) {
  const o = BY_KEY.get(key);
  return o ? o.days : null;
}

/** Human label ("Every 2 weeks") for a cadence key, or null. */
function cadenceLabel(key) {
  const o = BY_KEY.get(key);
  return o ? o.label : null;
}

/**
 * Where a person stands against their keep-in-touch goal.
 * Returns null when no cadence is set (caller falls back to global recency).
 *
 *   state:    'ok'      — comfortably within the window
 *             'due'     — in the soft zone (last fifth of the period)
 *             'overdue' — past the period
 *   remaining — days until due (negative once overdue)
 *   overdueBy — days past the period (0 unless overdue)
 */
function cadenceStatus(person, now = Date.now()) {
  const key = person?.keepInTouch;
  const periodDays = cadenceDays(key);
  if (!periodDays) return null;
  const daysSince = daysSinceTouch(person, now);
  const remaining = periodDays - daysSince;
  let state = 'ok';
  if (daysSince >= periodDays) state = 'overdue';else if (daysSince >= periodDays * 0.8) state = 'due';
  return {
    key,
    periodDays,
    daysSince,
    remaining,
    overdueBy: Math.max(0, daysSince - periodDays),
    state
  };
}

/**
 * Short, friendly status line for a person with a cadence.
 * e.g. "Overdue by 5 days", "Due now", "Next nudge in 8 days".
 * Returns null when no cadence is set.
 */
function cadenceSummary(person, now = Date.now()) {
  const s = cadenceStatus(person, now);
  if (!s) return null;
  if (s.state === 'overdue') {
    if (!Number.isFinite(s.daysSince)) return 'Never reached out';
    const by = s.overdueBy;
    return by <= 0 ? 'Due now' : `Overdue by ${humanDays(by)}`;
  }
  if (s.state === 'due') return 'Due about now';
  return `Next nudge in ${humanDays(s.remaining)}`;
}
function humanDays(d) {
  const n = Math.max(0, Math.round(d));
  if (n >= 365) {
    const y = Math.floor(n / 365);
    return `${y} ${y === 1 ? 'year' : 'years'}`;
  }
  if (n >= 60) {
    const mo = Math.floor(n / 30);
    return `${mo} months`;
  }
  if (n >= 14) {
    const w = Math.floor(n / 7);
    return `${w} weeks`;
  }
  return `${n} ${n === 1 ? 'day' : 'days'}`;
}

// trendlines.js — which way is this relationship moving?
//
// Every competitor shows a static "last contacted" date. A trendline reads the
// direction: warming (more touches lately), steady, or cooling (the current
// silence is outgrowing your normal rhythm) — plus, when cooling, a plain
// forecast: "At this pace, 90 days quiet by Sep 12."
//
// HONESTY RULES (this feature dies if it overclaims):
//   - No trend without data: fewer than MIN_TOUCHES touches or a history
//     shorter than MIN_SPAN_DAYS returns null. Small-n "trends" are noise.
//   - Weather language, never blame: states describe the rhythm, not the user.
//   - Steady is the default; warming/cooling require a clear signal.
//
// Pure + deterministic given `now`.

const WINDOW_DAYS = 180; // history considered
const RECENT_DAYS = 45; // "lately" vs the 45 days before that
const MIN_TOUCHES = 4;
const MIN_SPAN_DAYS = 42;
const QUIET_HORIZON = 90; // the drift line the forecast projects toward
const DAY$2 = 86_400_000;
function touchStamps(person, now) {
  const out = [];
  const floor = now - WINDOW_DAYS * DAY$2;
  for (const list of [person?.interactions, person?.notes]) {
    for (const x of list || []) {
      if (!x?.date) continue;
      const t = new Date(x.date).getTime();
      if (!Number.isNaN(t) && t <= now && t >= floor) out.push(t);
    }
  }
  return out.sort((a, b) => a - b);
}
function median(nums) {
  if (!nums.length) return null;
  const s = [...nums].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
}
const MONTHS$1 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function shortDate(ms) {
  const d = new Date(ms);
  return `${MONTHS$1[d.getMonth()]} ${d.getDate()}`;
}

/**
 * The trend for one person, or null when the data can't honestly support one.
 * Returns { state, label, glyph, line }:
 *   warming — clearly more touches lately        (↗, line about the lift)
 *   cooling — current gap outgrew the rhythm,    (↘, forecast line)
 *             or touches clearly dropped off
 *   steady  — everything else                    (→, no line; not news)
 */
function trendFor(person, now = Date.now()) {
  const stamps = touchStamps(person, now);
  if (stamps.length < MIN_TOUCHES) return null;
  const spanDays = (stamps[stamps.length - 1] - stamps[0]) / DAY$2;
  if (spanDays < MIN_SPAN_DAYS) return null;
  const gaps = [];
  for (let i = 1; i < stamps.length; i++) gaps.push((stamps[i] - stamps[i - 1]) / DAY$2);
  const typicalGap = median(gaps);
  const currentGap = (now - stamps[stamps.length - 1]) / DAY$2;
  const recentCount = stamps.filter(t => t >= now - RECENT_DAYS * DAY$2).length;
  const priorCount = stamps.filter(t => t >= now - 2 * RECENT_DAYS * DAY$2 && t < now - RECENT_DAYS * DAY$2).length;

  // Cooling: the silence has clearly outgrown the rhythm, or the pace
  // visibly dropped between the two windows.
  const gapCooling = currentGap >= Math.max(10, typicalGap * 1.5);
  const rateCooling = priorCount >= 2 && recentCount <= priorCount - 2;
  if (gapCooling || rateCooling) {
    const quietAt = stamps[stamps.length - 1] + QUIET_HORIZON * DAY$2;
    const line = currentGap >= QUIET_HORIZON ? `Quiet for ${Math.floor(currentGap)} days now.` : `At this pace, ${QUIET_HORIZON} days quiet by ${shortDate(quietAt)}.`;
    return {
      state: 'cooling',
      label: 'Cooling',
      glyph: '↘',
      line
    };
  }

  // Warming: clearly more touches lately than the window before.
  if (recentCount >= priorCount + 2 && recentCount >= 3) {
    return {
      state: 'warming',
      label: 'Warming',
      glyph: '↗',
      line: 'More often lately — this one’s growing.'
    };
  }
  return {
    state: 'steady',
    label: 'Steady',
    glyph: '→',
    line: null
  };
}

// circleSuggest.js — "which circle does this person belong in?"
//
// Pure heuristics over what a contact card actually carries (name, org,
// title, email, howWeMet) plus the people already sorted into circles.
// Every suggestion comes with a human-readable `reason` so the UI can show
// WHY — a suggestion you can't explain reads as creepy, one you can reads
// as smart. Returns { circleId, reason } or null. No network, no AI.

const FREE_EMAIL = new Set(['gmail.com', 'yahoo.com', 'icloud.com', 'me.com', 'mac.com', 'hotmail.com', 'outlook.com', 'live.com', 'aol.com', 'proton.me', 'protonmail.com', 'msn.com', 'comcast.net', 'verizon.net']);
const KEYWORD_RULES = [
// [circle-name matcher, keywords seen in title/org/howWeMet, reason label]
{
  circle: /sport|team|athletic/i,
  kw: /\bcoach|soccer|hockey|baseball|basketball|lacrosse|swim|gym|karate|tennis|practice\b/i,
  label: 'sports'
}, {
  circle: /school|class|pta/i,
  kw: /\bteacher|school|principal|professor|tutor|pta|classroom|grade\b/i,
  label: 'school'
}, {
  circle: /work|colleague|office|professional/i,
  kw: /\bceo|cto|cfo|vp|director|manager|engineer|designer|recruiter|sales|founder|analyst|consultant|partner\b/i,
  label: 'work title'
}, {
  circle: /neighbor|hometown|home/i,
  kw: /\bneighbor|neighbour|street|hoa\b/i,
  label: 'neighbors'
}, {
  circle: /family/i,
  kw: /\bmom|dad|mother|father|sister|brother|aunt|uncle|cousin|grandma|grandpa|in-law\b/i,
  label: 'family word'
}];
function emailDomain(email) {
  const m = String(email || '').toLowerCase().match(/@([^@\s]+)$/);
  return m ? m[1] : '';
}
function lastName(name) {
  const parts = String(name || '').trim().split(/\s+/);
  return parts.length > 1 ? parts[parts.length - 1].toLowerCase() : '';
}
function findCircle(circles, re) {
  return (circles || []).find(c => re.test(c.name || '')) || null;
}

/**
 * Suggest a circle for a contact draft (or a circle-less person).
 * `draft`: { name, org, title, email, howWeMet }  ·  `people`: existing directory.
 */
function suggestCircle(draft, circles = [], people = []) {
  if (!draft) return null;
  const text = `${draft.title || ''} ${draft.org || ''} ${draft.howWeMet || ''}`;

  // 1) Keyword rules — the strongest, most explainable signal.
  for (const rule of KEYWORD_RULES) {
    if (rule.kw.test(text)) {
      const c = findCircle(circles, rule.circle);
      if (c) {
        const hit = text.match(rule.kw);
        return {
          circleId: c.id,
          reason: `“${hit[0].toLowerCase()}” sounds like ${c.name}`
        };
      }
    }
  }

  // 2) Family: shares a last name with someone already in a family circle.
  const family = findCircle(circles, /family/i);
  const ln = lastName(draft.name);
  if (family && ln) {
    const relative = (people || []).find(p => lastName(p.name) === ln && (p.circleIds || []).includes(family.id));
    if (relative) {
      return {
        circleId: family.id,
        reason: `shares a name with ${relative.name.split(/\s+/)[0]}`
      };
    }
  }

  // 3) Domain affinity: people from the same email domain are already sorted.
  const dom = emailDomain(draft.email);
  if (dom && !FREE_EMAIL.has(dom)) {
    const counts = new Map();
    for (const p of people || []) {
      if (emailDomain(p.email) !== dom) continue;
      for (const cid of p.circleIds || []) counts.set(cid, (counts.get(cid) || 0) + 1);
    }
    let bestId = null;
    let bestN = 0;
    for (const [cid, n] of counts) if (n > bestN) {
      bestN = n;
      bestId = cid;
    }
    if (bestId && (circles || []).some(c => c.id === bestId)) {
      return {
        circleId: bestId,
        reason: `${bestN} ${bestN === 1 ? 'person' : 'people'} from ${dom} are here`
      };
    }
    // 4) Corporate email or org/title present → Work.
    const work = findCircle(circles, /work|colleague|office|professional/i);
    if (work) return {
      circleId: work.id,
      reason: `works at ${draft.org || dom}`
    };
  }
  if ((draft.org || draft.title) && true) {
    const work = findCircle(circles, /work|colleague|office|professional/i);
    if (work) return {
      circleId: work.id,
      reason: `works at ${draft.org || 'a company'}`
    };
  }
  return null;
}

// US phone formatter + validator.
//
// Used by PersonForm to format the phone field on every keystroke
// and by handleSave to block submission when the number isn't 10 digits.
// Also runs at vCard import so phones in any format land normalized.
//
// Scope: US 10-digit format only. International numbers are intentionally
// rejected — the rule from the user is "10 digits required."

/**
 * Returns just the digit characters, dropping any leading country-code
 * "1" so paste like "+1 (617) 555-0142" or "1-617-555-0142" works.
 * Caps the result at 10 digits.
 */
function digitsOnly(raw) {
  let d = String(raw || '').replace(/\D/g, '');
  if (d.length === 11 && d.startsWith('1')) d = d.slice(1);
  return d.slice(0, 10);
}

/**
 * Live formatter — progressively reveals the format as digits arrive.
 *   ''           → ''
 *   '617'        → '(617'
 *   '617555'     → '(617) 555'
 *   '6175550142' → '(617) 555-0142'
 *
 * Safe to call on already-formatted input (re-runs cleanly because
 * digitsOnly strips the punctuation first).
 */
function formatUSPhone(raw) {
  const d = digitsOnly(raw);
  if (d.length === 0) return '';
  if (d.length <= 3) return `(${d}`;
  if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6, 10)}`;
}

/**
 * Empty counts as valid (phone is optional). Otherwise must be exactly
 * 10 digits after stripping punctuation.
 */
function isValidUSPhone(raw) {
  const s = String(raw || '').trim();
  if (!s) return true;
  return digitsOnly(s).length === 10;
}

// useFocusTrap — accessible modal behavior in one hook.
//
// Given a ref to the dialog container and an onClose callback, it:
//   • moves focus into the dialog on mount (first focusable, or the container)
//   • traps Tab / Shift+Tab within the dialog
//   • closes on Escape
//   • restores focus to the previously-focused element on unmount
//
// Pair with role="dialog" aria-modal="true" + an aria-label on the container.

const FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),textarea:not([disabled]),select:not([disabled]),[tabindex]:not([tabindex="-1"])';
function useFocusTrap(ref, onClose) {
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const previouslyFocused = typeof document !== 'undefined' ? document.activeElement : null;
    const focusables = () => Array.from(el.querySelectorAll(FOCUSABLE)).filter(n => n.offsetParent !== null);

    // Move focus inside on open.
    const first = focusables()[0];
    if (first) first.focus();else if (el.focus) el.focus();
    function onKeyDown(e) {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose && onClose();
        return;
      }
      if (e.key !== 'Tab') return;
      const f = focusables();
      if (f.length === 0) {
        e.preventDefault();
        return;
      }
      const firstEl = f[0];
      const lastEl = f[f.length - 1];
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    }
    el.addEventListener('keydown', onKeyDown);
    return () => {
      el.removeEventListener('keydown', onKeyDown);
      if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
        previouslyFocused.focus();
      }
    };
  }, [ref, onClose]);
}

// DraftMessageSheet — modal-like overlay that fetches an AI-generated
// reconnection draft for a person and lets the user send/copy/edit before
// it goes anywhere. The original "alert('Phase 4 feature')" stub is gone.
//
// Flow:
//   1. Mount → POST /api/draft-message with {person, daysSince}
//   2. Server returns { draft: { subject, body } }
//   3. User can edit both fields freely
//   4. Email   → opens user's mail client via mailto: (uses person.email)
//   5. Copy    → puts "Subject\n\nBody" on the clipboard
//   6. Close   → dismisses; nothing persisted

function DraftMessageSheet({
  person,
  onClose
}) {
  const sheetRef = reactExports.useRef(null);
  // Exit choreography: every close request plays al-sheet-down/al-overlay-out
  // first; the real onClose fires from the sheet's onAnimationEnd.
  const [closing, setClosing] = reactExports.useState(false);
  const requestClose = reactExports.useCallback(() => setClosing(true), []);
  useFocusTrap(sheetRef, requestClose);
  const [loading, setLoading] = reactExports.useState(true);
  const [usedFallback, setUsedFallback] = reactExports.useState(false);
  const [subject, setSubject] = reactExports.useState('');
  const [body, setBody] = reactExports.useState('');
  const [copied, setCopied] = reactExports.useState(false);
  reactExports.useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch('/api/draft-message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            person,
            daysSince: daysSinceTouch(person)
          })
        });
        if (!res.ok) {
          throw new Error('api');
        }
        const data = await res.json();
        if (cancelled) return;
        setSubject(data.draft?.subject || '');
        setBody(data.draft?.body || '');
      } catch (e) {
        if (cancelled) return;
        // API unreachable or out of credits — fall back to a useful
        // template so the user still gets something to edit & send.
        const template = templateDraft(person);
        setSubject(template.subject);
        setBody(template.body);
        setUsedFallback(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [person.id]);
  function handleEmail() {
    const to = person.email || '';
    const url = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    requestClose();
  }
  function handleText() {
    // SMS carries the body only (no subject). Strip the phone to digits and
    // add +1 for bare US 10-digit numbers. The `?&body=` form is the quirk
    // that works across iOS + Android.
    const digits = (person.phone || '').replace(/\D/g, '');
    const num = digits.length === 10 ? `+1${digits}` : digits;
    const url = `sms:${num}?&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    requestClose();
  }
  async function handleShare() {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          text: body
        });
        requestClose();
        return;
      } catch {
        /* user cancelled the share sheet — keep the sheet open */
        return;
      }
    }
    handleCopy();
  }
  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(`${subject}\n\n${body}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      // Clipboard can reject without a user gesture / on insecure origins.
      // Nothing actionable for the user — just log it.
      console.error('Copy failed', e);
    }
  }
  const canShare = typeof navigator !== 'undefined' && !!navigator.share;
  return /*#__PURE__*/jsxRuntimeExports.jsx("div", {
    onClick: requestClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: theme.colors.overlay,
      zIndex: 80,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      animation: closing ? `al-overlay-out 180ms ${theme.ease.standard} forwards` : `al-overlay-in 200ms ${theme.ease.standard} both`
    },
    children: /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      ref: sheetRef,
      role: "dialog",
      "aria-modal": "true",
      "aria-label": `Draft a message to ${person.name}`,
      onClick: e => e.stopPropagation(),
      onAnimationEnd: e => {
        // Only the sheet's own exit animation hands off to the real close.
        if (closing && e.target === e.currentTarget) onClose();
      },
      style: {
        width: '100%',
        maxWidth: 460,
        background: theme.colors.paper,
        borderTopLeftRadius: theme.radii.lg,
        borderTopRightRadius: theme.radii.lg,
        padding: '18px 18px 22px',
        maxHeight: '88%',
        overflowY: 'auto',
        boxShadow: theme.shadow.lg,
        animation: closing ? `al-sheet-down 220ms ${theme.ease.standard} forwards` : `al-sheet-up 300ms ${theme.ease.out} both`
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          marginBottom: 4
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
          name: person.name,
          photo: person.photo,
          size: 32
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            flex: 1,
            minWidth: 0
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
            style: {
              fontFamily: theme.fonts.mono,
              fontSize: 10,
              color: theme.colors.ink3,
              letterSpacing: 0.9,
              textTransform: 'uppercase'
            },
            children: "DRAFT MESSAGE"
          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
            style: {
              fontFamily: theme.fonts.serif,
              fontSize: 18,
              color: theme.colors.ink,
              fontWeight: 500,
              lineHeight: 1.2
            },
            children: ["To ", person.name]
          })]
        }), /*#__PURE__*/jsxRuntimeExports.jsx(CloseButton, {
          onClick: requestClose,
          label: "Close"
        })]
      }), loading && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          padding: '28px 4px',
          fontFamily: theme.fonts.serif,
          fontStyle: 'italic',
          fontSize: 14,
          color: theme.colors.ink3,
          textAlign: 'center'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
          style: {
            display: 'inline-block',
            width: 10,
            height: 10,
            borderRadius: theme.radii.pill,
            background: theme.colors.accent,
            marginRight: 8,
            animation: 'al-pulse 1.2s infinite ease-in-out'
          }
        }), "Writing a draft based on your context\u2026"]
      }), !loading && usedFallback && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          marginTop: 10,
          padding: '8px 12px',
          background: theme.colors.accentSofter,
          border: `1px solid ${theme.colors.rule}`,
          borderRadius: 8,
          fontFamily: theme.fonts.serif,
          fontStyle: 'italic',
          fontSize: 12.5,
          color: theme.colors.ink3,
          lineHeight: 1.4
        },
        children: "AI drafting unavailable \u2014 here's a template to edit."
      }), !loading && /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("label", {
          style: {
            display: 'block',
            marginTop: 14,
            fontFamily: theme.fonts.mono,
            fontSize: 9.5,
            color: theme.colors.ink3,
            letterSpacing: 0.9,
            textTransform: 'uppercase',
            marginBottom: 4
          },
          children: "Subject"
        }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
          value: subject,
          onChange: e => setSubject(e.target.value),
          style: inputStyle$2()
        }), /*#__PURE__*/jsxRuntimeExports.jsx("label", {
          style: {
            display: 'block',
            marginTop: 12,
            fontFamily: theme.fonts.mono,
            fontSize: 9.5,
            color: theme.colors.ink3,
            letterSpacing: 0.9,
            textTransform: 'uppercase',
            marginBottom: 4
          },
          children: "Message"
        }), /*#__PURE__*/jsxRuntimeExports.jsx("textarea", {
          value: body,
          onChange: e => setBody(e.target.value),
          rows: 6,
          style: {
            ...inputStyle$2(),
            resize: 'vertical',
            lineHeight: 1.5
          }
        }), !person.email && !person.phone && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            marginTop: 8,
            fontFamily: theme.fonts.serif,
            fontStyle: 'italic',
            fontSize: 12,
            color: theme.colors.ink3
          },
          children: "No phone or email on file \u2014 use Copy and paste anywhere."
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            marginTop: 14,
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 8,
            flexWrap: 'wrap'
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx("button", {
            onClick: handleCopy,
            className: "al-press",
            style: btnStyle(false),
            children: copied ? '✓ Copied' : 'Copy'
          }), canShare && /*#__PURE__*/jsxRuntimeExports.jsx("button", {
            onClick: handleShare,
            className: "al-press",
            style: btnStyle(false),
            children: "Share"
          }), person.phone && /*#__PURE__*/jsxRuntimeExports.jsx("button", {
            onClick: handleText,
            className: "al-press",
            style: btnStyle(true),
            children: "Text"
          }), person.email && /*#__PURE__*/jsxRuntimeExports.jsx("button", {
            onClick: handleEmail,
            className: "al-press",
            style: btnStyle(!person.phone),
            children: "Email"
          })]
        })]
      })]
    })
  });
}

// Local fallback when the API is unreachable / out of credits. Produces
// a friendly, generic-but-specific-where-possible draft using the same
// inputs the AI version would use, so the experience never bottoms out.
function templateDraft(person) {
  const first = (person.name || '').split(' ')[0] || person.name || 'there';
  const daysAgo = daysSinceTouch(person);
  let opener;
  if (!Number.isFinite(daysAgo)) {
    opener = 'It\'s been a while';
  } else if (daysAgo < 30) {
    opener = `It's been a few weeks`;
  } else if (daysAgo < 90) {
    const weeks = Math.floor(daysAgo / 7);
    opener = `It's been ${weeks} weeks`;
  } else {
    const months = Math.floor(daysAgo / 30);
    opener = `It's been ${months} months`;
  }
  const hook = pickHook(person);
  const body = `Hey ${first} — ${opener} since we last talked` + (hook ? `${hook}` : '') + `. Free to grab a quick coffee or call in the next couple weeks?`;
  return {
    subject: 'Catching up',
    body
  };
}
function pickHook(person) {
  // Drop in one concrete reference if we have something good.
  // Priorities: most recent note → first detail → family member → location.
  const last = (person.notes || [])[0];
  if (last && last.text) {
    // Use a short verb phrase, not the full quote
    return `. I keep thinking about your note re: "${truncate(last.text, 60)}"`;
  }
  const detail = (person.details || []).find(d => typeof d === 'string' ? d.trim() : d?.text);
  if (detail) {
    const t = typeof detail === 'string' ? detail : detail.text;
    return `. How's ${truncate(t, 40)} going`;
  }
  if ((person.family || []).length > 0) {
    const f = person.family[0];
    return `. How's ${f.name || 'the family'}`;
  }
  if (person.location) {
    return `. How are things in ${person.location}`;
  }
  return '';
}
function truncate(s, max) {
  if (!s) return '';
  return s.length > max ? s.slice(0, max - 1) + '…' : s;
}
function inputStyle$2() {
  return {
    width: '100%',
    padding: '10px 12px',
    fontFamily: theme.fonts.serif,
    fontSize: 14,
    background: theme.colors.card,
    border: `1px solid ${theme.colors.rule}`,
    borderRadius: 8,
    outline: 'none',
    color: theme.colors.ink,
    boxSizing: 'border-box'
  };
}
function btnStyle(primary) {
  if (primary) {
    // Button-primary metrics: ink pill, serif 15, 44px.
    return {
      padding: '12px 20px',
      minHeight: 44,
      borderRadius: theme.radii.pill,
      border: 'none',
      background: theme.colors.ink,
      color: theme.colors.paper,
      fontFamily: theme.fonts.serif,
      fontSize: 15,
      cursor: 'pointer',
      lineHeight: 1.2
    };
  }
  // Mini metrics: sans 13/500, 36px pill.
  return {
    padding: '8px 16px',
    minHeight: 36,
    borderRadius: theme.radii.pill,
    border: `1px solid ${theme.colors.rule}`,
    background: 'transparent',
    color: theme.colors.ink,
    fontFamily: theme.fonts.sans,
    fontSize: 13,
    fontWeight: 500,
    cursor: 'pointer',
    lineHeight: 1.2
  };
}

var reactDomExports = requireReactDom();

// useDictation — Web Speech API dictation, append-only.
//
// Shared by QuickCapture (the center mic) and DebriefSheet (the per-person
// call debrief). Calls setText with an updater so transcripts append rather
// than replace. Returns { supported, listening, toggle, start, stop }.

function useDictation(setText) {
  const recognitionRef = reactExports.useRef(null);
  const [supported, setSupported] = reactExports.useState(false);
  const [listening, setListening] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (typeof window === 'undefined') return;
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return;
    setSupported(true);
    const r = new SR();
    r.continuous = true;
    r.interimResults = false;
    r.lang = navigator.language || 'en-US';
    r.onresult = event => {
      let final = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) final += event.results[i][0].transcript;
      }
      if (final) {
        setText(prev => prev ? prev.trimEnd() + ' ' + final : final);
      }
    };
    r.onend = () => setListening(false);
    r.onerror = () => setListening(false);
    recognitionRef.current = r;
    return () => {
      try {
        r.abort();
      } catch {}
    };
  }, [setText]);
  function start() {
    const r = recognitionRef.current;
    if (!r || listening) return;
    try {
      r.start();
      setListening(true);
    } catch {}
  }
  function stop() {
    const r = recognitionRef.current;
    if (!r || !listening) return;
    try {
      r.stop();
    } catch {}
    setListening(false);
  }
  function toggle() {
    if (listening) stop();else start();
  }
  return {
    supported,
    listening,
    toggle,
    start,
    stop
  };
}

// DebriefSheet — "what happened?" capture for a single person.
//
// Opened from a person card's "Log a moment" chips. Same dictation engine as
// the center mic, but scoped: it logs the moment (Coffee / Call / …) against
// THIS person and attaches whatever you dictate or type as a timeline note.
// Voice auto-starts on open so you can just talk after a call. Nothing saves
// until you tap Save — and saving with an empty note still logs the moment,
// so it stays as fast as the old one-tap when you've nothing to add.

const {
  LINE_H,
  MARGIN_X,
  TEXT_PAD_LEFT
} = notepad;
function DebriefSheet({
  person,
  kind,
  onSave,
  onClose
}) {
  const [text, setText] = reactExports.useState('');
  // Exit choreography: Save and Cancel both play al-sheet-down first; the
  // real onSave/onClose fires from the root's onAnimationEnd.
  const [closing, setClosing] = reactExports.useState(null); // { text } | { cancel: true }
  const requestCancel = reactExports.useCallback(() => setClosing({
    cancel: true
  }), []);
  const {
    supported,
    listening,
    toggle,
    start
  } = useDictation(setText);
  const taRef = reactExports.useRef(null);
  const rootRef = reactExports.useRef(null);
  useFocusTrap(rootRef, requestCancel);

  // Auto-start listening on open — you just got off the call, start talking.
  reactExports.useEffect(() => {
    if (supported) {
      try {
        start();
      } catch {}
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supported]);

  // Keep the latest dictated line in view.
  reactExports.useEffect(() => {
    if (taRef.current) taRef.current.scrollTop = taRef.current.scrollHeight;
  }, [text]);
  const first = (person.name || 'them').trim().split(/\s+/)[0];
  const empty = text.trim().length === 0;

  // Portal to <body> so the sheet is a true full-screen modal ABOVE the
  // floating nav (it mounts deep in the scroll tree otherwise, leaving the
  // nav on top of — and tappable through — its controls). position:fixed +
  // body portal escapes the transformed/will-change ancestors cleanly.
  if (typeof document === 'undefined') return null;
  return /*#__PURE__*/reactDomExports.createPortal(/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    ref: rootRef,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": `Debrief — ${kind.label} with ${first}`,
    onAnimationEnd: e => {
      // Only the root's own exit animation hands off to the real action.
      if (!closing || e.target !== e.currentTarget) return;
      if (closing.cancel) onClose();else onSave(closing.text);
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: theme.colors.paper,
      display: 'flex',
      flexDirection: 'column',
      animation: closing ? `al-sheet-down 220ms ${theme.ease.standard} forwards` : `al-sheet-up 320ms ${theme.ease.out} both`
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        padding: '20px 22px 12px',
        paddingTop: 'max(20px, env(safe-area-inset-top))',
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        borderBottom: `1px solid ${theme.colors.rule}`
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
        name: person.name,
        photo: person.photo,
        size: 36
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          flex: 1,
          minWidth: 0
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            fontFamily: theme.fonts.mono,
            fontSize: 10,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: theme.colors.accent
          },
          children: "Debrief"
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            fontFamily: theme.fonts.serif,
            fontSize: 18,
            fontWeight: 600,
            color: theme.colors.ink,
            lineHeight: 1.1
          },
          children: [kind.label, " with ", first]
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsx(CloseButton, {
        label: "Cancel debrief",
        onClick: requestCancel
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        padding: '12px 22px 0',
        minHeight: 26
      },
      children: listening ? /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
        style: {
          ...mono,
          color: theme.colors.accent,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
          style: {
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: theme.colors.accent,
            animation: 'al-caret 1s steps(2) infinite'
          }
        }), "LISTENING \u2014 JUST TALK"]
      }) : /*#__PURE__*/jsxRuntimeExports.jsx("span", {
        style: mono,
        children: empty ? 'TYPE, OR TAP DICTATE' : 'NOTE READY'
      })
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        flex: 1,
        minHeight: 0,
        position: 'relative',
        padding: `8px 22px 0 ${MARGIN_X + TEXT_PAD_LEFT}px`,
        backgroundImage: `repeating-linear-gradient(to bottom, transparent 0, transparent ${LINE_H - 1}px, ${notepad.rule} ${LINE_H - 1}px, ${notepad.rule} ${LINE_H}px)`,
        backgroundSize: `100% ${LINE_H}px`,
        backgroundPosition: `0 ${LINE_H + 1}px`,
        backgroundAttachment: 'local'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        "aria-hidden": true,
        style: {
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: MARGIN_X,
          width: 1,
          background: notepad.marginLine
        }
      }), /*#__PURE__*/jsxRuntimeExports.jsx("textarea", {
        ref: taRef,
        className: "al-capture",
        value: text,
        onChange: e => setText(e.target.value),
        onKeyDown: e => {
          if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) setClosing({
            text
          });
        },
        placeholder: "What did you talk about? Anything to remember or follow up on?",
        style: {
          width: '100%',
          height: '100%',
          border: 'none',
          background: 'transparent',
          outline: 'none',
          resize: 'none',
          fontFamily: theme.fonts.serif,
          fontSize: 22,
          lineHeight: `${LINE_H}px`,
          color: theme.colors.ink,
          letterSpacing: -0.2,
          padding: 0
        }
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        padding: '14px 22px',
        paddingBottom: 'max(16px, env(safe-area-inset-bottom))',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12,
        borderTop: `1px solid ${theme.colors.rule}`,
        background: theme.colors.paper
      },
      children: [supported ? /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
        onClick: toggle,
        className: "al-press",
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '8px 14px 8px 10px',
          borderRadius: theme.radii.pill,
          border: `1px solid ${listening ? theme.colors.accent : theme.colors.rule}`,
          background: listening ? theme.colors.accent : theme.colors.card,
          color: listening ? theme.colors.onAccent : theme.colors.ink,
          fontFamily: theme.fonts.serif,
          fontSize: 14,
          cursor: 'pointer'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
          style: {
            width: 26,
            height: 26,
            borderRadius: '50%',
            background: listening ? 'rgba(255,255,255,0.18)' : theme.colors.paper,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: listening ? theme.colors.onAccent : theme.colors.accent
          },
          children: /*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
            name: "mic",
            size: 14
          })
        }), listening ? 'Stop' : 'Dictate']
      }) : /*#__PURE__*/jsxRuntimeExports.jsx("span", {
        style: {
          ...mono,
          opacity: 0.6
        },
        children: "VOICE UNSUPPORTED \xB7 TYPE"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: () => {
          haptics.success && haptics.success();
          setClosing({
            text
          });
        },
        className: "al-press",
        style: {
          padding: '12px 20px',
          minHeight: 44,
          borderRadius: theme.radii.pill,
          border: 'none',
          background: theme.colors.ink,
          color: theme.colors.paper,
          fontFamily: theme.fonts.serif,
          fontSize: 15,
          cursor: 'pointer'
        },
        children: empty ? `Log ${kind.label}` : 'Save note'
      })]
    })]
  }), document.body);
}
const mono = {
  fontFamily: theme.fonts.mono,
  fontSize: 10,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: theme.colors.ink3
};

// Toast / snackbar — the app's confirmation + undo surface.
//
// Usage:
//   const toast = useToast()
//   toast.show({ message: 'Logged ✓' })
//   toast.show({ message: 'Skipped', actionLabel: 'Undo', onAction: () => ... })
//
// One toast at a time (latest wins) — plenty for a single-column phone UI.
// The viewport renders absolutely inside the phone frame, floating just above
// the bottom nav. Auto-dismisses; tapping the action dismisses immediately.

const ToastContext = /*#__PURE__*/reactExports.createContext({
  show: () => {}
});
function useToast() {
  return reactExports.useContext(ToastContext);
}
function ToastProvider({
  children
}) {
  const [toast, setToast] = reactExports.useState(null); // { id, message, actionLabel?, onAction?, tone }
  const [leaving, setLeaving] = reactExports.useState(false);
  const timerRef = reactExports.useRef(null);
  const idRef = reactExports.useRef(0);
  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };
  const dismiss = reactExports.useCallback(() => {
    clearTimer();
    setLeaving(true);
    // Let the exit animation play before unmounting.
    timerRef.current = setTimeout(() => {
      setToast(null);
      setLeaving(false);
    }, 200);
  }, []);
  const show = reactExports.useCallback(({
    message,
    actionLabel,
    onAction,
    tone = 'default',
    duration = 3400
  }) => {
    clearTimer();
    setLeaving(false);
    const id = ++idRef.current;
    setToast({
      id,
      message,
      actionLabel,
      onAction,
      tone
    });
    timerRef.current = setTimeout(() => {
      // Only auto-dismiss if this is still the active toast.
      setLeaving(true);
      timerRef.current = setTimeout(() => {
        setToast(t => t && t.id === id ? null : t);
        setLeaving(false);
      }, 200);
    }, duration);
  }, []);
  reactExports.useEffect(() => () => clearTimer(), []);

  // Pause the auto-dismiss while the pointer is over the toast or focus is
  // within it (keyboard users tabbing to Undo shouldn't race the timer);
  // resume with a short grace period on leave/blur. No-ops mid-exit so the
  // unmount timeout can't be cancelled.
  const pauseTimer = () => {
    if (!leaving) clearTimer();
  };
  const resumeTimer = () => {
    if (leaving) return;
    clearTimer();
    timerRef.current = setTimeout(dismiss, 1600);
  };
  return /*#__PURE__*/jsxRuntimeExports.jsxs(ToastContext.Provider, {
    value: {
      show,
      dismiss
    },
    children: [children, /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 'calc(max(22px, env(safe-area-inset-bottom, 0px)) + 74px)',
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
        zIndex: 300,
        padding: '0 16px'
      },
      children: /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        role: "status",
        "aria-live": "polite",
        style: {
          maxWidth: '100%',
          pointerEvents: toast ? 'auto' : 'none'
        },
        children: toast && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          onMouseEnter: pauseTimer,
          onMouseLeave: resumeTimer,
          onFocusCapture: pauseTimer,
          onBlurCapture: resumeTimer,
          style: {
            maxWidth: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            padding: '12px 16px',
            background: theme.colors.ink,
            color: theme.colors.paper,
            borderRadius: 14,
            boxShadow: theme.shadow.lg,
            animation: leaving ? 'al-toast-out 200ms ease forwards' : `al-toast-in 320ms ${theme.ease.out}`
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
            style: {
              fontFamily: theme.fonts.sans,
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: '0.005em',
              lineHeight: 1.3
            },
            children: toast.message
          }), toast.actionLabel && /*#__PURE__*/jsxRuntimeExports.jsx("button", {
            onClick: () => {
              try {
                toast.onAction && toast.onAction();
              } finally {
                dismiss();
              }
            },
            style: {
              flexShrink: 0,
              background: 'transparent',
              border: 'none',
              color: theme.colors.toastAction,
              fontFamily: theme.fonts.mono,
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              padding: '14px 12px',
              margin: '-14px -12px -14px -4px'
            },
            children: toast.actionLabel
          })]
        })
      })
    })]
  });
}

// Glance — the "10-second refresher" person card.
// Two modes:
//   - 'glance' (collapsed)  → when/where strip + identity + ASK FIRST + family + facts + last note + pull-up handle
//   - 'deep'   (expanded)   → sticky header + timeline + open follow-ups (interactive) + add-note + edit/delete

const QUICK_KINDS = [{
  key: 'met',
  icon: 'handshake',
  label: 'Met up'
}, {
  key: 'coffee',
  icon: 'cup',
  label: 'Coffee'
}, {
  key: 'call',
  icon: 'phone',
  label: 'Call'
}, {
  key: 'text',
  icon: 'message',
  label: 'Texted'
}, {
  key: 'email',
  icon: 'mail',
  label: 'Emailed'
}];
function firstName$3(name) {
  return (name || '').trim().split(/\s+/)[0] || name || 'them';
}

// =============================================================
// SHARED HELPERS
// =============================================================

const Label = ({
  children,
  accent,
  style
}) => /*#__PURE__*/jsxRuntimeExports.jsx("div", {
  style: {
    ...microLabel,
    ...(accent ? {
      color: theme.colors.accent
    } : {}),
    ...(style || {})
  },
  children: children
});
const cardSm = {
  background: theme.colors.card,
  border: `1px solid ${theme.colors.rule}`,
  borderRadius: theme.radii.lg
};
function relativeEta(iso) {
  if (!iso) return null;
  const d = new Date(iso);
  const now = new Date();
  const n0 = new Date(now);
  n0.setHours(0, 0, 0, 0);
  const t1 = new Date(n0);
  t1.setDate(n0.getDate() + 1);
  const t2 = new Date(n0);
  t2.setDate(n0.getDate() + 2);
  const t7 = new Date(n0);
  t7.setDate(n0.getDate() + 7);

  // Within ~3 hours → "IN N MIN"
  const minsUntil = Math.round((d - now) / 60000);
  if (minsUntil >= 0 && minsUntil < 180) return minsUntil < 1 ? 'NOW' : `IN ${minsUntil} MIN`;
  if (d < t1) return 'TODAY';
  if (d < t2) return 'TOMORROW';
  if (d < t7) return d.toLocaleDateString(undefined, {
    weekday: 'short'
  }).toUpperCase();
  return d.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric'
  }).toUpperCase();
}
function exactWhen(iso) {
  const d = new Date(iso);
  const wk = d.toLocaleDateString(undefined, {
    weekday: 'short'
  }).toUpperCase();
  const tm = d.toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: '2-digit'
  });
  return `${wk} · ${tm}`;
}
function timelineRelative(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  const days = Math.floor((Date.now() - d) / (1000 * 60 * 60 * 24));
  if (days === 0) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 7) return `${days}d ago`;
  if (days < 30) return `${Math.floor(days / 7)}w ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

// Highlight capitalized words (likely names) in the ASK FIRST quote
function highlightNames(text) {
  if (!text) return null;
  return text.split(/(\b[A-Z][a-zA-Z]+(?:'s)?\b)/).map((s, i) => /^[A-Z]/.test(s) ? /*#__PURE__*/jsxRuntimeExports.jsx("span", {
    style: {
      color: theme.colors.accent
    },
    children: s
  }, i) : /*#__PURE__*/jsxRuntimeExports.jsx("span", {
    children: s
  }, i));
}

// Derive a "ERIK · BASEBALL" badge from the person's primary circle path
function badgeFromCircles(person, circles) {
  const id = (person.circleIds || [])[0];
  if (!id) return null;
  const names = getPathNames(circles, id);
  if (names.length === 0) return null;
  const parts = names.slice(-2).map(s => s.replace(/^[^a-zA-Z]+/, ''));
  return parts.join(' · ').toUpperCase();
}

// =============================================================
// MAIN COMPONENT
// =============================================================

function Glance({
  person,
  circles,
  people = [],
  events = [],
  nextEvent,
  mode = 'glance',
  onBack,
  onSwitchMode,
  onChange,
  onOpenPerson,
  onEdit,
  onDelete,
  onCallInitiated,
  onOutreach,
  onResolveLoop
}) {
  if (mode === 'deep') {
    return /*#__PURE__*/jsxRuntimeExports.jsx(GlanceDeep, {
      person: person,
      circles: circles,
      events: events,
      nextEvent: nextEvent,
      onCollapse: () => onSwitchMode('glance'),
      onChange: onChange,
      onEdit: onEdit,
      onDelete: onDelete,
      onResolveLoop: onResolveLoop
    });
  }
  return /*#__PURE__*/jsxRuntimeExports.jsx(GlanceCollapsed, {
    person: person,
    circles: circles,
    people: people,
    events: events,
    nextEvent: nextEvent,
    onBack: onBack,
    onPullUp: () => onSwitchMode('deep'),
    onChange: onChange,
    onOpenPerson: onOpenPerson,
    onEdit: onEdit,
    onCallInitiated: onCallInitiated,
    onOutreach: onOutreach
  });
}

// =============================================================
// COLLAPSED MODE
// =============================================================

function GlanceCollapsed({
  person,
  circles,
  people = [],
  events = [],
  nextEvent,
  onBack,
  onPullUp,
  onChange,
  onOpenPerson,
  onEdit,
  onCallInitiated,
  onOutreach
}) {
  const badge = badgeFromCircles(person, circles);
  // "Friends since 2018" — only when metOn parses to at least a year
  const friendsSince = friendsSinceLabel(parseMetOn(person.metOn));
  // Trendline — which way the rhythm is moving. Steady is omitted (not
  // news); null when the history is too thin to say anything honest.
  const trend = trendFor(person);
  const trendChip = trend && trend.state !== 'steady' ? trend : null;
  const openFollowUps = (person.followUps || []).filter(f => !f.done);
  const askFirst = openFollowUps[0]?.text || null;
  const nextStep = computeNextStep(person, nextEvent);
  const activity = useActivityFeed(person);
  const [showDraft, setShowDraft] = reactExports.useState(false);
  const toast = useToast();

  // Referrals: who referred you, and who you referred
  const referrer = person.referredBy ? people.find(p => p.id === person.referredBy) : null;
  const introductions = people.filter(p => p.referredBy === person.id);

  // Completion beat — show the strike-through + fade for ~420ms, THEN
  // commit the mutation, so ticking off a promise is seen, not blinked.
  const [closingNextStep, setClosingNextStep] = reactExports.useState(false);
  const personRef = reactExports.useRef(person);
  personRef.current = person;
  function markFollowUpDone(id) {
    if (!onChange || closingNextStep) return;
    setClosingNextStep(true);
    setTimeout(() => {
      const current = personRef.current;
      onChange({
        ...current,
        followUps: (current.followUps || []).map(f => f.id === id ? {
          ...f,
          done: true
        } : f)
      });
      setClosingNextStep(false);
    }, 420);
  }

  // Tapping a "Log a moment" kind opens a debrief — dictate or type what
  // happened on the call, then it logs the moment AND attaches the note.
  const [debriefKind, setDebriefKind] = reactExports.useState(null);
  function openDebrief(kind) {
    if (!onChange) return;
    haptics.select && haptics.select();
    setDebriefKind(kind);
  }
  function saveDebrief(noteText) {
    const kind = debriefKind;
    setDebriefKind(null);
    if (!kind || !onChange) return;
    const before = person;
    const nowIso = new Date().toISOString();
    const interactions = [...(person.interactions || []), makeManualInteraction({
      date: nowIso,
      summary: kind.label
    })];
    const trimmed = (noteText || '').trim();
    const notes = trimmed ? [{
      id: makeId('note'),
      date: nowIso,
      text: trimmed
    }, ...(person.notes || [])] : person.notes || [];
    onChange({
      ...person,
      interactions,
      notes
    });
    haptics.success && haptics.success();
    toast.show({
      message: trimmed ? `Logged with note · ${firstName$3(person.name)} ✓` : `Logged · ${firstName$3(person.name)} ✓`,
      actionLabel: 'Undo',
      onAction: () => onChange(before)
    });
  }
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      position: 'relative',
      minHeight: '100%'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        position: 'absolute',
        top: 50,
        left: 22,
        zIndex: 5
      },
      children: /*#__PURE__*/jsxRuntimeExports.jsx(FloatingIconBtn, {
        onClick: onBack,
        ariaLabel: "Back",
        children: /*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
          name: "chevronLeft",
          size: 18
        })
      })
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        position: 'absolute',
        top: 50,
        right: 22,
        zIndex: 5
      },
      children: /*#__PURE__*/jsxRuntimeExports.jsx(FloatingIconBtn, {
        onClick: onEdit,
        ariaLabel: "Edit",
        children: /*#__PURE__*/jsxRuntimeExports.jsx("span", {
          style: {
            ...microLabel,
            color: theme.colors.ink2
          },
          children: "edit"
        })
      })
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        paddingTop: 100
      },
      children: [nextEvent && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          margin: '0 22px',
          padding: '12px 14px',
          background: theme.colors.accentSofter,
          border: 'none',
          borderRadius: theme.radii.lg
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between'
          },
          children: /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
            style: {
              display: 'flex',
              alignItems: 'baseline',
              gap: 8
            },
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(Label, {
              accent: true,
              children: relativeEta(nextEvent.start)
            }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
              style: microLabel,
              children: exactWhen(nextEvent.start)
            })]
          })
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            fontFamily: theme.fonts.serif,
            fontSize: 16,
            color: theme.colors.ink,
            marginTop: 2
          },
          children: [nextEvent.summary || '—', nextEvent.location && /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
            style: {
              color: theme.colors.ink3,
              fontStyle: 'italic'
            },
            children: [' · ', nextEvent.location]
          })]
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          padding: '20px 22px 0',
          display: 'flex',
          gap: 14,
          alignItems: 'flex-start'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
          name: person.name,
          photo: person.photo,
          size: 56,
          ring: true
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            flex: 1,
            minWidth: 0,
            paddingTop: 1
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
            style: {
              fontFamily: theme.fonts.serif,
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: -0.4,
              lineHeight: 1.12,
              color: theme.colors.ink
            },
            children: person.name
          }), (person.howWeMet || person.location) && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
            style: {
              fontFamily: theme.fonts.serif,
              fontSize: 14,
              fontStyle: 'italic',
              color: theme.colors.ink2,
              marginTop: 5,
              lineHeight: 1.35
            },
            children: [person.howWeMet, person.location].filter(Boolean).join(' · ')
          }), (badge || referrer || friendsSince || trendChip) && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
            style: {
              marginTop: 12,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              flexWrap: 'wrap'
            },
            children: [badge && /*#__PURE__*/jsxRuntimeExports.jsx("span", {
              style: {
                ...microLabel,
                color: theme.colors.accent,
                padding: '4px 10px',
                background: theme.colors.accentSofter,
                borderRadius: theme.radii.pill,
                whiteSpace: 'nowrap',
                lineHeight: 1.3
              },
              children: badge
            }), friendsSince && /*#__PURE__*/jsxRuntimeExports.jsx("span", {
              style: {
                ...microLabel,
                padding: '4px 10px',
                background: theme.colors.card,
                border: `1px solid ${theme.colors.rule}`,
                borderRadius: theme.radii.pill,
                whiteSpace: 'nowrap',
                lineHeight: 1.3
              },
              children: friendsSince
            }), trendChip && /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
              title: trendChip.line || undefined,
              style: {
                ...microLabel,
                color: trendChip.state === 'warming' ? theme.colors.success : theme.colors.amber,
                padding: '4px 10px',
                background: theme.colors.card,
                border: `1px solid ${theme.colors.rule}`,
                borderRadius: theme.radii.pill,
                whiteSpace: 'nowrap',
                lineHeight: 1.3
              },
              children: [trendChip.glyph, " ", trendChip.label]
            }), referrer && /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
              onClick: () => onOpenPerson && onOpenPerson(referrer.id),
              className: "al-press",
              "aria-label": `Introduced by ${referrer.name}`,
              style: {
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '3px 11px 3px 3px',
                maxWidth: '100%',
                background: theme.colors.card,
                border: `1px solid ${theme.colors.rule}`,
                borderRadius: theme.radii.pill,
                cursor: 'pointer'
              },
              children: [/*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
                name: referrer.name,
                photo: referrer.photo,
                size: 20
              }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
                style: {
                  fontFamily: theme.fonts.sans,
                  fontSize: 11,
                  color: theme.colors.ink2,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                },
                children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
                  style: {
                    color: theme.colors.ink3
                  },
                  children: "Intro \xB7 "
                }), referrer.name]
              })]
            })]
          }), trendChip && trendChip.line && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
            style: {
              marginTop: 8,
              fontFamily: theme.fonts.serif,
              fontStyle: 'italic',
              fontSize: 13,
              color: theme.colors.ink3,
              lineHeight: 1.4
            },
            children: trendChip.line
          })]
        })]
      }), !person.howWeMet && onEdit && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          padding: '14px 22px 0'
        },
        children: /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
          onClick: onEdit,
          className: "al-press",
          style: {
            width: '100%',
            minHeight: 44,
            padding: '10px 14px',
            background: theme.colors.accentSofter,
            border: 'none',
            borderRadius: theme.radii.lg,
            textAlign: 'left',
            fontFamily: theme.fonts.serif,
            fontStyle: 'italic',
            fontSize: 13,
            lineHeight: 1.4,
            color: theme.colors.ink3,
            cursor: 'pointer'
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
            style: {
              color: theme.colors.accent,
              fontStyle: 'normal'
            },
            children: "\u2736"
          }), ' ', "How did you two meet? Add the story"]
        })
      }), onChange && /*#__PURE__*/jsxRuntimeExports.jsx(QuickCircles, {
        person: person,
        circles: circles,
        people: people,
        onChange: onChange
      }), (person.phone || person.email) && /*#__PURE__*/jsxRuntimeExports.jsx(ContactRow, {
        phone: person.phone,
        email: person.email,
        onCallInitiated: () => onCallInitiated && onCallInitiated(person.id),
        onEmailInitiated: () => onOutreach && onOutreach(person.id, 'email')
      }), askFirst && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          padding: '16px 22px 0'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Label, {
          accent: true,
          children: "ASK FIRST"
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            fontFamily: theme.fonts.serif,
            fontSize: 22,
            lineHeight: 1.3,
            marginTop: 4,
            letterSpacing: -0.3
          },
          children: ["\"", highlightNames(askFirst), "\""]
        }), openFollowUps.length > 1 && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            fontSize: 11,
            color: theme.colors.ink3,
            marginTop: 4
          },
          children: ["+", openFollowUps.length - 1, " more open thread", openFollowUps.length - 1 === 1 ? '' : 's']
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          padding: '16px 22px 0'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Label, {
          accent: true,
          children: "RECOMMENDED NEXT STEP"
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            marginTop: 4,
            fontFamily: theme.fonts.serif,
            fontSize: 17,
            lineHeight: 1.35,
            color: closingNextStep ? theme.colors.ink3 : theme.colors.ink,
            letterSpacing: -0.2,
            textDecoration: closingNextStep ? 'line-through' : 'none',
            opacity: closingNextStep ? 0.35 : 1,
            transition: 'opacity 320ms ease 120ms'
          },
          children: nextStep.title
        }), nextStep.sub && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            marginTop: 3,
            fontFamily: theme.fonts.serif,
            fontStyle: 'italic',
            fontSize: 13,
            color: theme.colors.ink3,
            lineHeight: 1.4,
            textDecoration: closingNextStep ? 'line-through' : 'none',
            opacity: closingNextStep ? 0.35 : 1,
            transition: 'opacity 320ms ease 120ms'
          },
          children: nextStep.sub
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            marginTop: 10,
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap'
          },
          children: [nextStep.followUpId && /*#__PURE__*/jsxRuntimeExports.jsxs(ActionChip, {
            primary: true,
            onClick: () => markFollowUpDone(nextStep.followUpId),
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
              name: "check",
              size: 13
            }), " Mark done"]
          }), nextStep.kind === 'drift' && /*#__PURE__*/jsxRuntimeExports.jsxs(ActionChip, {
            onClick: () => setShowDraft(true),
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
              name: "mail",
              size: 13
            }), " Draft message"]
          }), /*#__PURE__*/jsxRuntimeExports.jsx(ActionChip, {
            onClick: onPullUp,
            children: "+ Note"
          })]
        })]
      }), onChange && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          padding: '16px 22px 0'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Label, {
          children: "LOG A MOMENT"
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            marginTop: 8,
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap'
          },
          children: QUICK_KINDS.map(k => /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
            className: "al-press",
            onClick: () => openDebrief(k),
            "aria-label": `Log ${k.label} with ${firstName$3(person.name)}`,
            style: {
              display: 'inline-flex',
              alignItems: 'center',
              gap: 5,
              padding: '7px 13px',
              borderRadius: theme.radii.pill,
              border: `1px solid ${theme.colors.rule}`,
              background: theme.colors.card,
              color: theme.colors.ink2,
              fontFamily: theme.fonts.sans,
              fontSize: 13,
              fontWeight: 500,
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            },
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
              name: k.icon,
              size: 14
            }), k.label]
          }, k.key))
        })]
      }), (person.family || []).length > 0 && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          padding: '16px 22px 0'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Label, {
          children: "FAMILY"
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            marginTop: 8,
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap'
          },
          children: person.family.map((f, i) => {
            // Resolve from the live people array so the chip stays
            // current (photo, name updates) even if the family entry
            // is stale.
            const linked = f.personId ? people.find(p => p.id === f.personId) : null;
            const displayName = linked?.name || f.name;
            const photo = linked?.photo || null;
            const Tag = linked ? 'button' : 'div';
            return /*#__PURE__*/jsxRuntimeExports.jsxs(Tag, {
              onClick: linked && onOpenPerson ? () => onOpenPerson(linked.id) : undefined,
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '4px 12px 4px 4px',
                background: theme.colors.card,
                border: `1px solid ${theme.colors.rule}`,
                borderRadius: theme.radii.pill,
                cursor: linked ? 'pointer' : 'default',
                fontFamily: theme.fonts.serif,
                color: theme.colors.ink
              },
              children: [/*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
                name: displayName,
                photo: photo,
                size: 20
              }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
                style: {
                  fontFamily: theme.fonts.serif,
                  fontSize: 12.5,
                  textDecoration: linked ? 'underline' : 'none',
                  textDecorationColor: linked ? 'var(--c-accent-soft)' : undefined,
                  textUnderlineOffset: 3
                },
                children: displayName
              }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
                style: microLabel,
                children: ["\xB7 ", f.relation]
              })]
            }, i);
          })
        })]
      }), (person.details || []).length > 0 && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          padding: '16px 22px 0'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Label, {
          children: "WORTH REMEMBERING"
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            marginTop: 6,
            fontFamily: theme.fonts.serif,
            fontSize: 13,
            lineHeight: 1.55,
            color: theme.colors.ink2
          },
          children: person.details.slice(0, 5).map((f, i) => /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
            style: {
              display: 'flex',
              gap: 10,
              alignItems: 'baseline',
              padding: '2px 0'
            },
            children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
              style: {
                color: theme.colors.accent,
                fontSize: 10
              },
              children: "\u25C6"
            }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
              children: typeof f === 'string' ? f : f?.text || ''
            })]
          }, f && f.id || i))
        })]
      }), activity.length > 0 && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          padding: '16px 22px 0'
        },
        children: /*#__PURE__*/jsxRuntimeExports.jsx(ActivityTimeline, {
          activity: activity
        })
      }), introductions.length > 0 && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          padding: '16px 22px 0'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsxs(Label, {
          children: ["INTRODUCED YOU TO \xB7 ", introductions.length]
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            marginTop: 6,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8
          },
          children: introductions.map(p => /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
            onClick: () => onOpenPerson && onOpenPerson(p.id),
            style: {
              padding: '5px 12px 5px 5px',
              borderRadius: theme.radii.pill,
              background: theme.colors.card,
              border: `1px solid ${theme.colors.rule}`,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontFamily: theme.fonts.serif,
              fontSize: 13,
              color: theme.colors.ink
            },
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
              name: p.name,
              photo: p.photo,
              size: 20
            }), p.name]
          }, p.id))
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        onClick: onPullUp,
        style: {
          marginTop: 18,
          padding: '14px 0 12px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer',
          background: 'linear-gradient(to top, var(--c-paper-deep), transparent)'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            width: 40,
            height: 4,
            borderRadius: 2,
            background: theme.colors.ruleStrong,
            marginBottom: 6
          }
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: microLabel,
          children: "Pull \xB7 timeline, follow-ups, all notes"
        })]
      })]
    }), showDraft && /*#__PURE__*/jsxRuntimeExports.jsx(DraftMessageSheet, {
      person: person,
      onClose: () => setShowDraft(false)
    }), debriefKind && /*#__PURE__*/jsxRuntimeExports.jsx(DebriefSheet, {
      person: person,
      kind: debriefKind,
      onSave: saveDebrief,
      onClose: () => setDebriefKind(null)
    })]
  });
}

// =============================================================
// DEEP MODE — timeline + follow-ups (interactive) + actions
// =============================================================

function GlanceDeep({
  person,
  circles,
  events = [],
  nextEvent,
  onCollapse,
  onChange,
  onEdit,
  onDelete,
  onResolveLoop
}) {
  const [newFollowUp, setNewFollowUp] = reactExports.useState('');
  const [newNote, setNewNote] = reactExports.useState('');
  const openLoops = unresolvedLoops(person);
  const openFollowUps = (person.followUps || []).filter(f => !f.done);
  const doneFollowUps = (person.followUps || []).filter(f => f.done);
  person.notes || [];
  const activity = useActivityFeed(person);
  const badge = badgeFromCircles(person, circles);
  const eta = nextEvent ? relativeEta(nextEvent.start) : null;

  // Completion beat — rows being resolved stay mounted for ~420ms with a
  // filled check + strike-through + fade, THEN the data mutation fires.
  const [closingIds, setClosingIds] = reactExports.useState([]);
  const personRef = reactExports.useRef(person);
  personRef.current = person;
  function toggleFollowUp(id) {
    onChange({
      ...person,
      followUps: (person.followUps || []).map(f => f.id === id ? {
        ...f,
        done: !f.done
      } : f)
    });
  }
  function completeFollowUp(id) {
    if (closingIds.includes(id)) return;
    setClosingIds(ids => [...ids, id]);
    setTimeout(() => {
      const current = personRef.current;
      onChange({
        ...current,
        followUps: (current.followUps || []).map(f => f.id === id ? {
          ...f,
          done: true
        } : f)
      });
      setClosingIds(ids => ids.filter(x => x !== id));
    }, 420);
  }
  function resolveLoop(loopId) {
    if (!onResolveLoop || closingIds.includes(loopId)) return;
    setClosingIds(ids => [...ids, loopId]);
    setTimeout(() => {
      onResolveLoop(person.id, loopId);
      setClosingIds(ids => ids.filter(x => x !== loopId));
    }, 420);
  }
  function deleteFollowUp(id) {
    onChange({
      ...person,
      followUps: (person.followUps || []).filter(f => f.id !== id)
    });
  }
  function addFollowUp() {
    const t = newFollowUp.trim();
    if (!t) return;
    onChange({
      ...person,
      followUps: [...(person.followUps || []), {
        id: makeId('fu'),
        text: t,
        done: false
      }]
    });
    setNewFollowUp('');
  }
  function deleteNote(id) {
    onChange({
      ...person,
      notes: (person.notes || []).filter(n => n.id !== id)
    });
  }
  function addNote() {
    const t = newNote.trim();
    if (!t) return;
    onChange({
      ...person,
      notes: [{
        id: makeId('note'),
        date: new Date().toISOString(),
        text: t
      }, ...(person.notes || [])]
    });
    setNewNote('');
  }
  function logManualMeeting({
    date,
    summary,
    location
  }) {
    onChange({
      ...person,
      interactions: [...(person.interactions || []), makeManualInteraction({
        date,
        summary,
        location
      })]
    });
  }
  function deleteInteraction(id) {
    onChange({
      ...person,
      interactions: (person.interactions || []).filter(i => i.id !== id)
    });
  }
  function confirmDelete() {
    if (window.confirm(`Delete ${person.name}? This cannot be undone (yet).`)) {
      onDelete();
    }
  }
  const inputStyle = {
    width: '100%',
    padding: '10px 12px',
    fontFamily: theme.fonts.sans,
    fontSize: 16,
    background: theme.colors.paper,
    border: `1px solid ${theme.colors.rule}`,
    borderRadius: 8,
    outline: 'none',
    color: theme.colors.ink
  };
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      onClick: onCollapse,
      style: {
        position: 'sticky',
        top: 0,
        padding: '50px 22px 12px',
        background: theme.colors.paper,
        borderBottom: `1px solid ${theme.colors.rule}`,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        cursor: 'pointer',
        zIndex: 5
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
        name: "chevronLeft",
        size: 18,
        color: theme.colors.ink3
      }), /*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
        name: person.name,
        photo: person.photo,
        size: 36
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          flex: 1,
          minWidth: 0
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            fontFamily: theme.fonts.serif,
            fontSize: 16,
            fontWeight: 500,
            lineHeight: 1
          },
          children: person.name
        }), /*#__PURE__*/jsxRuntimeExports.jsx(Label, {
          accent: true,
          style: {
            marginTop: 3
          },
          children: eta ? `${eta} · ${nextEvent.summary || ''}` : badge || 'NO UPCOMING'
        })]
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        padding: '14px 22px 24px'
      },
      children: [openLoops.length > 0 && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          marginBottom: 22
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsxs(Label, {
          children: ["OPEN LOOPS \xB7 ", openLoops.length]
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            gap: 6
          },
          children: openLoops.map(loop => {
            const closing = closingIds.includes(loop.id);
            return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
              style: {
                display: 'flex',
                gap: 10,
                alignItems: 'flex-start',
                padding: '8px 10px',
                ...cardSm,
                opacity: closing ? 0.35 : 1,
                transition: 'opacity 320ms ease 120ms'
              },
              children: [/*#__PURE__*/jsxRuntimeExports.jsx("button", {
                onClick: () => resolveLoop(loop.id),
                "aria-label": "Resolve",
                style: {
                  width: 44,
                  height: 44,
                  margin: '-15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  flexShrink: 0
                },
                children: /*#__PURE__*/jsxRuntimeExports.jsx("span", {
                  "aria-hidden": true,
                  style: {
                    width: 14,
                    height: 14,
                    border: `1.5px solid ${theme.colors.accent}`,
                    borderRadius: 3,
                    ...(closing ? {
                      background: theme.colors.accent,
                      color: theme.colors.onAccent,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 10,
                      lineHeight: 1
                    } : {
                      display: 'block'
                    })
                  },
                  children: closing ? '✓' : null
                })
              }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: 0
                },
                children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
                  style: {
                    fontFamily: theme.fonts.serif,
                    fontSize: 14,
                    lineHeight: 1.4,
                    color: closing ? theme.colors.ink3 : theme.colors.ink,
                    textDecoration: closing ? 'line-through' : 'none'
                  },
                  children: loopHeadline$1({
                    loop
                  })
                }), /*#__PURE__*/jsxRuntimeExports.jsx(Label, {
                  style: {
                    marginTop: 3
                  },
                  children: ageLabel(loop)
                })]
              })]
            }, loop.id);
          })
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs(Label, {
        children: ["OPEN FOLLOW-UPS", openFollowUps.length > 0 ? ` · ${openFollowUps.length}` : '']
      }), openFollowUps.length === 0 ? /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          marginTop: 6,
          fontFamily: theme.fonts.serif,
          fontStyle: 'italic',
          fontSize: 13,
          color: theme.colors.ink3
        },
        children: "Nothing to follow up on."
      }) : /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          gap: 6
        },
        children: openFollowUps.map(f => {
          const closing = closingIds.includes(f.id);
          return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
            style: {
              display: 'flex',
              gap: 10,
              alignItems: 'flex-start',
              padding: '8px 10px',
              ...cardSm,
              opacity: closing ? 0.35 : 1,
              transition: 'opacity 320ms ease 120ms'
            },
            children: [/*#__PURE__*/jsxRuntimeExports.jsx("button", {
              onClick: () => completeFollowUp(f.id),
              "aria-label": "Mark done",
              style: {
                width: 44,
                height: 44,
                margin: '-15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                flexShrink: 0
              },
              children: /*#__PURE__*/jsxRuntimeExports.jsx("span", {
                "aria-hidden": true,
                style: {
                  width: 14,
                  height: 14,
                  border: `1.5px solid ${theme.colors.accent}`,
                  borderRadius: 3,
                  ...(closing ? {
                    background: theme.colors.accent,
                    color: theme.colors.onAccent,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 10,
                    lineHeight: 1
                  } : {
                    display: 'block'
                  })
                },
                children: closing ? '✓' : null
              })
            }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
              style: {
                flex: 1,
                fontFamily: theme.fonts.serif,
                fontSize: 14,
                lineHeight: 1.4,
                color: closing ? theme.colors.ink3 : theme.colors.ink,
                textDecoration: closing ? 'line-through' : 'none'
              },
              children: f.text
            }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
              onClick: () => deleteFollowUp(f.id),
              "aria-label": "Delete",
              style: {
                background: 'transparent',
                border: 'none',
                color: theme.colors.ink3,
                fontSize: 14,
                cursor: 'pointer',
                padding: 14,
                margin: -14
              },
              children: "\xD7"
            })]
          }, f.id);
        })
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          marginTop: 8,
          display: 'flex',
          gap: 6
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("input", {
          value: newFollowUp,
          onChange: e => setNewFollowUp(e.target.value),
          onKeyDown: e => e.key === 'Enter' && addFollowUp(),
          placeholder: "Add a follow-up\u2026",
          style: {
            ...inputStyle,
            flex: 1
          }
        }), /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
          variant: "secondary",
          onClick: addFollowUp,
          disabled: !newFollowUp.trim(),
          children: "Add"
        })]
      }), doneFollowUps.length > 0 && /*#__PURE__*/jsxRuntimeExports.jsxs("details", {
        style: {
          marginTop: 12
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("summary", {
          style: {
            fontSize: 11,
            color: theme.colors.ink3,
            cursor: 'pointer',
            fontFamily: theme.fonts.mono,
            letterSpacing: theme.tracking.label,
            textTransform: 'uppercase'
          },
          children: [doneFollowUps.length, " done"]
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            marginTop: 6,
            display: 'flex',
            flexDirection: 'column',
            gap: 4
          },
          children: doneFollowUps.map(f => /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
            style: {
              display: 'flex',
              gap: 10,
              alignItems: 'center',
              padding: '4px 0'
            },
            children: [/*#__PURE__*/jsxRuntimeExports.jsx("button", {
              onClick: () => toggleFollowUp(f.id),
              style: {
                width: 44,
                height: 44,
                margin: '-15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                flexShrink: 0
              },
              children: /*#__PURE__*/jsxRuntimeExports.jsx("span", {
                "aria-hidden": true,
                style: {
                  width: 14,
                  height: 14,
                  border: `1.5px solid ${theme.colors.accent}`,
                  background: theme.colors.accent,
                  borderRadius: 3,
                  color: theme.colors.onAccent,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 10,
                  lineHeight: 1
                },
                children: "\u2713"
              })
            }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
              style: {
                flex: 1,
                fontSize: 13,
                color: theme.colors.ink3,
                textDecoration: 'line-through',
                fontFamily: theme.fonts.serif
              },
              children: f.text
            }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
              onClick: () => deleteFollowUp(f.id),
              style: {
                background: 'transparent',
                border: 'none',
                color: theme.colors.ink3,
                cursor: 'pointer',
                fontSize: 14,
                padding: 14,
                margin: -14
              },
              children: "\xD7"
            })]
          }, f.id))
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs(Label, {
        style: {
          marginTop: 22
        },
        children: ["TIMELINE", activity.length > 0 ? ` · ${activity.length}` : '']
      }), /*#__PURE__*/jsxRuntimeExports.jsx(NotePadInput, {
        value: newNote,
        onChange: setNewNote,
        onSave: addNote
      }), /*#__PURE__*/jsxRuntimeExports.jsx(LogMeetingForm, {
        onSave: logManualMeeting
      }), activity.length === 0 ? /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          marginTop: 10,
          fontFamily: theme.fonts.serif,
          fontStyle: 'italic',
          fontSize: 13,
          color: theme.colors.ink3
        },
        children: "No activity yet."
      }) : /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          marginTop: 14,
          paddingLeft: 14,
          borderLeft: `1px solid ${theme.colors.rule}`
        },
        children: activity.map((item, i) => /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            position: 'relative',
            padding: '6px 0 14px 16px'
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
            style: {
              position: 'absolute',
              left: -19,
              top: 12,
              width: 8,
              height: 8,
              borderRadius: 4,
              background: i === 0 ? theme.colors.accent : theme.colors.ink4
            }
          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              gap: 8
            },
            children: [/*#__PURE__*/jsxRuntimeExports.jsxs(Label, {
              children: [timelineRelative(item.date), item.kind === 'event' && /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
                style: {
                  marginLeft: 6,
                  color: theme.colors.ink3
                },
                children: ["\xB7 ", item.source === 'manual' ? 'MEETING' : 'CAL']
              })]
            }), item.kind === 'note' && /*#__PURE__*/jsxRuntimeExports.jsx("button", {
              onClick: () => deleteNote(item.id),
              "aria-label": "Delete note",
              style: {
                background: 'transparent',
                border: 'none',
                color: theme.colors.ink3,
                fontSize: 12,
                cursor: 'pointer',
                padding: 14,
                margin: -14
              },
              children: "\xD7"
            }), item.kind === 'event' && item.source === 'manual' && /*#__PURE__*/jsxRuntimeExports.jsx("button", {
              onClick: () => deleteInteraction(item.id),
              "aria-label": "Delete logged meeting",
              style: {
                background: 'transparent',
                border: 'none',
                color: theme.colors.ink3,
                fontSize: 12,
                cursor: 'pointer',
                padding: 14,
                margin: -14
              },
              children: "\xD7"
            })]
          }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
            style: {
              fontFamily: theme.fonts.serif,
              fontSize: 13,
              color: theme.colors.ink,
              marginTop: 2,
              lineHeight: 1.45,
              fontStyle: item.kind === 'note' && i === 0 ? 'italic' : 'normal',
              whiteSpace: 'pre-wrap'
            },
            children: item.kind === 'note' ? i === 0 ? `"${item.text}"` : item.text : item.text
          }), item.kind === 'event' && item.location && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
            style: {
              fontFamily: theme.fonts.serif,
              fontStyle: 'italic',
              fontSize: 12,
              color: theme.colors.ink3,
              marginTop: 2
            },
            children: item.location
          })]
        }, `${item.kind}-${item.id}`))
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          marginTop: 28,
          display: 'flex',
          gap: 8,
          justifyContent: 'flex-end'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Button, {
          variant: "secondary",
          onClick: onEdit,
          children: "Edit"
        }), /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
          variant: "danger",
          onClick: confirmDelete,
          children: "Delete"
        })]
      })]
    })]
  });
}

// =============================================================
// SMALL SHARED ATOMS
// =============================================================

// One-tap circle assignment on the card. Top-level circles as toggle chips —
// assigned ones wear the circle's own color; when the person is uncategorized
// the engine's pick wears a dashed accent border with its reason as the tooltip.
function QuickCircles({
  person,
  circles,
  people,
  onChange
}) {
  const topLevel = (circles || []).filter(c => !c.parentId);
  if (topLevel.length === 0) return null;
  const assigned = new Set(person.circleIds || []);
  const suggestion = assigned.size === 0 ? suggestCircle({
    name: person.name,
    email: person.email,
    howWeMet: person.howWeMet
  }, circles, people) : null;
  function toggleCircle(id) {
    haptics.tap();
    const next = assigned.has(id) ? (person.circleIds || []).filter(x => x !== id) : [...(person.circleIds || []), id];
    onChange({
      ...person,
      circleIds: next
    });
  }
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      padding: '14px 22px 0'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx(Label, {
      children: "CIRCLES"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginTop: 8,
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      },
      children: topLevel.map(c => {
        const on = assigned.has(c.id);
        const isSugg = suggestion && suggestion.circleId === c.id;
        return /*#__PURE__*/jsxRuntimeExports.jsx("button", {
          onClick: () => toggleCircle(c.id),
          className: "al-press",
          "aria-pressed": on,
          title: isSugg ? `Suggested: ${suggestion.reason}` : undefined,
          "aria-label": `${on ? 'Remove from' : 'Add to'} ${c.name}${isSugg ? ` (suggested — ${suggestion.reason})` : ''}`,
          style: {
            padding: '5px 12px',
            borderRadius: theme.radii.pill,
            border: on ? '1px solid transparent' : isSugg ? '1px dashed var(--c-accent)' : `1px solid ${theme.colors.rule}`,
            background: on ? c.color || theme.colors.ink : isSugg ? theme.colors.accentSofter : 'transparent',
            color: on ? theme.colors.onAccent : isSugg ? theme.colors.accent : theme.colors.ink2,
            fontFamily: theme.fonts.sans,
            fontSize: 12,
            fontWeight: on ? 600 : 500,
            cursor: 'pointer',
            whiteSpace: 'nowrap'
          },
          children: c.name
        }, c.id);
      })
    }), suggestion && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 6,
        fontFamily: theme.fonts.sans,
        fontSize: 11,
        color: theme.colors.ink3,
        fontStyle: 'italic'
      },
      children: ["Suggested because ", suggestion.reason, "."]
    })]
  });
}
function FloatingIconBtn({
  onClick,
  children,
  ariaLabel
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsx("button", {
    onClick: onClick,
    "aria-label": ariaLabel
    // Glass chip — theme-aware class (defined in index.html)
    ,
    className: "al-glass-chip",
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.colors.ink2,
      cursor: 'pointer',
      padding: 0
    },
    children: children
  });
}

// Compact notepad-style note input — ruled lines + faded terracotta margin,
// matching the QuickCapture compose phase but scaled for a card.
function NotePadInput({
  value,
  onChange,
  onSave
}) {
  const LINE_H = 22; // 14px font × ~1.5 line-height
  const MARGIN_X = 22; // left margin line position
  const TEXT_PAD_LEFT = 14; // gutter between margin and text
  const MIN_LINES = 3;
  const empty = !value.trim();
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      marginTop: 10,
      background: theme.colors.card,
      border: `1px solid ${theme.colors.rule}`,
      borderRadius: 8,
      overflow: 'hidden'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        padding: '8px 12px 4px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
        style: microLabel,
        children: "NEW NOTE"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: onSave,
        disabled: empty,
        style: {
          padding: '8px 16px',
          minHeight: 36,
          borderRadius: theme.radii.pill,
          border: 'none',
          background: theme.colors.ink,
          color: theme.colors.paper,
          fontFamily: theme.fonts.sans,
          fontSize: 13,
          fontWeight: 500,
          cursor: empty ? 'not-allowed' : 'pointer',
          opacity: empty ? 0.45 : 1
        },
        children: "Save"
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        position: 'relative',
        padding: `4px 12px 12px ${MARGIN_X + TEXT_PAD_LEFT}px`,
        minHeight: LINE_H * MIN_LINES + 16,
        backgroundImage: `repeating-linear-gradient(
            to bottom,
            transparent 0,
            transparent ${LINE_H - 1}px,
            var(--c-rule) ${LINE_H - 1}px,
            var(--c-rule) ${LINE_H}px
          )`,
        backgroundSize: `100% ${LINE_H}px`,
        backgroundPosition: `0 ${LINE_H - 4}px`,
        backgroundAttachment: 'local'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        "aria-hidden": true,
        style: {
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: MARGIN_X,
          width: 1,
          background: 'var(--c-selection)',
          pointerEvents: 'none'
        }
      }), /*#__PURE__*/jsxRuntimeExports.jsx("textarea", {
        value: value,
        onChange: e => onChange(e.target.value),
        onKeyDown: e => {
          if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) onSave();
        },
        placeholder: " ",
        rows: MIN_LINES,
        style: {
          width: '100%',
          border: 'none',
          background: 'transparent',
          outline: 'none',
          resize: 'vertical',
          fontFamily: theme.fonts.serif,
          fontSize: 14,
          lineHeight: `${LINE_H}px`,
          color: theme.colors.ink,
          padding: 0,
          margin: 0,
          display: 'block',
          minHeight: LINE_H * MIN_LINES
        }
      }), empty && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        "aria-hidden": true,
        style: {
          position: 'absolute',
          top: 4,
          left: MARGIN_X + TEXT_PAD_LEFT,
          right: 12,
          fontFamily: theme.fonts.serif,
          fontStyle: 'italic',
          fontSize: 14,
          lineHeight: `${LINE_H}px`,
          color: theme.colors.ink4,
          pointerEvents: 'none'
        },
        children: "What did they say?"
      })]
    })]
  });
}

// ---- Per-person recommended-next-step logic ----
// Priority: PREP (upcoming event + open follow-up) → FOLLOWUP → DRIFT → WARM.
function computeNextStep(person, nextEvent) {
  const open = (person.followUps || []).filter(f => !f.done);
  const lastIso = person.notes?.[0]?.date;
  const daysSince = lastIso ? Math.floor((Date.now() - new Date(lastIso).getTime()) / 86400000) : Infinity;
  if (nextEvent && open.length > 0) {
    return {
      kind: 'prep',
      title: 'Handle the open thread before you see them.',
      sub: `"${open[0].text}"`,
      followUpId: open[0].id
    };
  }
  if (open.length > 0) {
    return {
      kind: 'followup',
      title: 'Close the loop.',
      sub: open.length === 1 ? 'One open thread — mark it done when you have.' : `${open.length} open threads — start with the oldest.`,
      followUpId: open[0].id
    };
  }
  // Personal cadence takes priority over the global recency rule — the user
  // told us how often they want to reconnect, so judge against that.
  const cad = cadenceStatus(person);
  if (cad) {
    const goal = `${cadenceLabel(cad.key)} goal`;
    if (cad.state === 'overdue') {
      return {
        kind: 'drift',
        title: 'Reach out — keep them warm.',
        sub: `${cadenceSummary(person)} · ${goal}`
      };
    }
    if (cad.state === 'due') {
      return {
        kind: 'drift',
        title: 'Coming due soon.',
        sub: `${cadenceSummary(person)} · ${goal}`
      };
    }
    return {
      kind: 'warm',
      title: "You're in a good rhythm.",
      sub: `${cadenceSummary(person)} · ${goal}`
    };
  }
  if (daysSince >= 14 && daysSince !== Infinity) {
    const wks = Math.floor(daysSince / 7);
    const phrase = wks >= 1 ? `${wks} week${wks === 1 ? '' : 's'}` : `${daysSince} days`;
    return {
      kind: 'drift',
      title: 'Reach out — keep them warm.',
      sub: `It's been ${phrase} since you talked.`
    };
  }
  // Never touched: no notes, no interactions — invite the first moment
  // instead of claiming a rhythm that doesn't exist yet.
  if (!Number.isFinite(daysSince) && !(person.interactions || []).length) {
    return {
      kind: 'start',
      title: 'Start the record.',
      sub: 'Brand new — say hello and log the first moment.'
    };
  }
  return {
    kind: 'warm',
    title: "You're in a good rhythm.",
    sub: 'No pressing thread — just keep showing up.'
  };
}

// ---- Activity feed: notes ∪ interactions (the auto-log ledger) ----
//
// Each item is normalized to { id, kind, date (iso), text, location? } so the
// collapsed and deep timelines can render off the same array. Phase 2 reads
// from person.interactions[] — the durable ledger written by reconcileEvents
// — instead of filtering the live events array. That means activity history
// persists even if the calendar URL changes or the fetch window scrolls past
// old events.
//
// The `events` parameter is kept for backwards compat / future hooks but
// currently unused — interactions are populated upstream by App.jsx.
function useActivityFeed(person /* , events = [] */) {
  return reactExports.useMemo(() => {
    const notes = (person.notes || []).map(n => ({
      id: n.id,
      kind: 'note',
      date: n.date,
      text: n.text
    }));
    const interactions = (person.interactions || []).map(i => ({
      id: i.id,
      kind: 'event',
      // Preserve source so the tag can render 'CAL' for auto-logged
      // calendar events vs 'MEETING' for manual entries the user logged
      // through the past-meeting form.
      source: i.source || 'calendar',
      date: i.date,
      text: i.summary || (i.source === 'manual' ? 'Past meeting' : 'Calendar event'),
      location: i.location || ''
    }));
    return [...notes, ...interactions].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  }, [person.notes, person.interactions]);
}

// Collapsible activity timeline shown in the collapsed Glance card.
// Defaults to three items + a chevron to expand all; a second tap on the
// header collapses the whole section if the user doesn't want activity at all.
function ActivityTimeline({
  activity
}) {
  // 'preview' = first 3 items, 'all' = everything, 'hidden' = section folded
  const [mode, setMode] = reactExports.useState('preview');
  const isHidden = mode === 'hidden';
  const isAll = mode === 'all';

  // Items stay mounted even while hidden so the grid-rows collapse below
  // can animate the panel closed instead of snapping it empty.
  const shown = isAll ? activity : activity.slice(0, 3);
  const remaining = activity.length - shown.length;
  function cycle() {
    // preview → all → hidden → preview
    setMode(m => m === 'preview' ? 'all' : m === 'all' ? 'hidden' : 'preview');
  }
  const headerHint = isHidden ? 'show' : isAll ? 'hide' : remaining > 0 ? `show all · ${activity.length}` : 'hide';
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("button", {
      onClick: cycle,
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        background: 'transparent',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        textAlign: 'left'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
        style: microLabel,
        children: ["ACTIVITY \xB7 ", activity.length]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
        style: {
          ...microLabel,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          color: theme.colors.accent
        },
        children: [headerHint, /*#__PURE__*/jsxRuntimeExports.jsx("span", {
          "aria-hidden": true,
          style: {
            display: 'inline-block',
            transform: isHidden ? 'rotate(-90deg)' : isAll ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: `transform 200ms ${theme.ease.standard}`,
            fontSize: 10,
            lineHeight: 1
          },
          children: "\u2304"
        })]
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        display: 'grid',
        gridTemplateRows: isHidden ? '0fr' : '1fr',
        transition: `grid-template-rows 280ms ${theme.ease.out}`
      },
      "aria-hidden": isHidden,
      children: /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          overflow: 'hidden',
          minHeight: 0,
          marginLeft: -6,
          paddingLeft: 6
        },
        children: /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            marginTop: 8,
            paddingLeft: 12,
            borderLeft: `1px solid ${theme.colors.rule}`
          },
          children: [shown.map((item, i) => /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
            style: {
              position: 'relative',
              padding: '4px 0 12px 14px'
            },
            children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
              "aria-hidden": true,
              style: {
                position: 'absolute',
                left: -17,
                top: 9,
                width: 7,
                height: 7,
                borderRadius: 4,
                background: i === 0 ? theme.colors.accent : theme.colors.ink4
              }
            }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
              style: {
                ...microLabel,
                display: 'flex',
                alignItems: 'baseline',
                gap: 6
              },
              children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
                children: timelineRelative(item.date)
              }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
                style: {
                  color: theme.colors.ink4
                },
                children: "\xB7"
              }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
                style: {
                  color: theme.colors.ink3
                },
                children: item.kind === 'event' ? item.source === 'manual' ? 'meeting' : 'cal' : 'note'
              })]
            }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
              style: {
                marginTop: 2,
                fontFamily: theme.fonts.serif,
                fontSize: 13,
                color: theme.colors.ink,
                lineHeight: 1.45,
                fontStyle: item.kind === 'note' && i === 0 ? 'italic' : 'normal',
                whiteSpace: 'pre-wrap'
              },
              children: item.kind === 'note' && i === 0 ? `"${item.text}"` : item.text
            }), item.kind === 'event' && item.location && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
              style: {
                marginTop: 1,
                fontFamily: theme.fonts.serif,
                fontStyle: 'italic',
                fontSize: 12,
                color: theme.colors.ink3
              },
              children: item.location
            })]
          }, `${item.kind}-${item.id}`)), !isAll && remaining > 0 && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
            style: {
              paddingLeft: 14,
              fontFamily: theme.fonts.serif,
              fontStyle: 'italic',
              fontSize: 12.5,
              color: theme.colors.ink3
            },
            children: ["+", remaining, " more"]
          })]
        })
      })
    })]
  });
}

// Collapsed-by-default form for logging a meeting that didn't come from
// the calendar. Useful for backfilling history before connecting the
// calendar, drop-in conversations, phone calls, etc. Until expanded, it's
// just a small mono link — keeps the deep view from feeling cluttered.
function LogMeetingForm({
  onSave
}) {
  const [open, setOpen] = reactExports.useState(false);
  // Default the date to today in the local timezone (yyyy-mm-dd format
  // that <input type="date"> expects).
  const todayLocalIso = () => {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${dd}`;
  };
  const [date, setDate] = reactExports.useState(todayLocalIso());
  const [summary, setSummary] = reactExports.useState('');
  const [location, setLocation] = reactExports.useState('');
  const empty = !summary.trim();
  function reset() {
    setDate(todayLocalIso());
    setSummary('');
    setLocation('');
  }
  function handleSave() {
    if (empty) return;
    // Convert the YYYY-MM-DD into an ISO at noon local — picks a
    // reasonable time-of-day so the timeline sort stays stable and the
    // relative label ("3d ago") works as expected.
    const [y, m, d] = date.split('-').map(Number);
    const local = new Date(y, m - 1, d, 12, 0, 0);
    onSave({
      date: local.toISOString(),
      summary: summary.trim(),
      location: location.trim()
    });
    reset();
    setOpen(false);
  }
  if (!open) {
    return /*#__PURE__*/jsxRuntimeExports.jsx("button", {
      onClick: () => setOpen(true),
      style: {
        marginTop: 8,
        background: 'transparent',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        fontFamily: theme.fonts.mono,
        fontSize: 10,
        color: theme.colors.accent,
        letterSpacing: theme.tracking.label,
        textTransform: 'uppercase'
      },
      children: "+ Log past meeting"
    });
  }
  const inputStyle = {
    width: '100%',
    padding: '8px 10px',
    fontFamily: theme.fonts.sans,
    fontSize: 16,
    background: theme.colors.paper,
    border: `1px solid ${theme.colors.rule}`,
    borderRadius: theme.radii.md,
    outline: 'none',
    color: theme.colors.ink,
    boxSizing: 'border-box'
  };
  const labelStyle = {
    display: 'block',
    ...microLabel,
    marginBottom: 3
  };
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      marginTop: 10,
      background: theme.colors.card,
      border: `1px solid ${theme.colors.rule}`,
      borderRadius: 8,
      padding: '10px 12px'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
        style: labelStyle,
        children: "LOG A PAST MEETING"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: () => {
          reset();
          setOpen(false);
        },
        "aria-label": "Cancel",
        style: {
          background: 'transparent',
          border: 'none',
          color: theme.colors.ink3,
          fontSize: 14,
          cursor: 'pointer',
          padding: 14,
          margin: -14
        },
        children: "\xD7"
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        gap: 8,
        marginBottom: 8
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          flex: '0 0 130px'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("label", {
          style: labelStyle,
          children: "When"
        }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
          type: "date",
          value: date,
          max: todayLocalIso(),
          onChange: e => setDate(e.target.value),
          style: inputStyle
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          flex: 1
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("label", {
          style: labelStyle,
          children: "What happened"
        }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
          value: summary,
          onChange: e => setSummary(e.target.value),
          placeholder: "e.g., Coffee at Tatte",
          autoFocus: true,
          style: inputStyle,
          onKeyDown: e => {
            if (e.key === 'Enter' && !empty) handleSave();
          }
        })]
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginBottom: 10
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("label", {
        style: labelStyle,
        children: "Where (optional)"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
        value: location,
        onChange: e => setLocation(e.target.value),
        placeholder: "Tatte, North End",
        style: inputStyle
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        display: 'flex',
        justifyContent: 'flex-end'
      },
      children: /*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: handleSave,
        disabled: empty,
        style: {
          padding: '8px 16px',
          minHeight: 36,
          borderRadius: theme.radii.pill,
          border: 'none',
          background: theme.colors.ink,
          color: theme.colors.paper,
          fontFamily: theme.fonts.sans,
          fontSize: 13,
          fontWeight: 500,
          cursor: empty ? 'not-allowed' : 'pointer',
          opacity: empty ? 0.45 : 1
        },
        children: "Log it"
      })
    })]
  });
}

// Phone + email pills, just above ASK FIRST. Tapping the phone pill
// hands off to the OS dialer via `tel:`; tapping the email pill opens
// the user's mail client via `mailto:`. We keep the rendered text
// short (the formatted number / email username) so two pills can sit
// side-by-side on a phone-width card.
function ContactRow({
  phone,
  email,
  onCallInitiated,
  onEmailInitiated
}) {
  // Display the phone in canonical (XXX) XXX-XXXX format regardless of
  // how it's stored — handles legacy data like "+16177632933" or "617-
  // 763-2933" that pre-dates the live formatter. Falls back to the raw
  // value for anything that doesn't parse to 10 digits (international,
  // partial, etc.) so we never hide the number.
  const phoneDisplay = phone ? isValidUSPhone(phone) ? formatUSPhone(phone) : phone : null;
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      padding: '14px 22px 0',
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    },
    children: [phoneDisplay && /*#__PURE__*/jsxRuntimeExports.jsxs("a", {
      href: `tel:${normalizeTel(phone)}`,
      "aria-label": `Call ${phoneDisplay}`,
      onClick: () => onCallInitiated && onCallInitiated(),
      style: contactPillStyle,
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
        name: "phone",
        size: 14
      }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
        style: contactPillText,
        children: phoneDisplay
      })]
    }), email && /*#__PURE__*/jsxRuntimeExports.jsxs("a", {
      href: `mailto:${email}`,
      "aria-label": `Email ${email}`,
      onClick: () => onEmailInitiated && onEmailInitiated(),
      style: contactPillStyle,
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
        name: "mail",
        size: 14
      }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
        style: contactPillText,
        children: email
      })]
    })]
  });
}

// Strip everything that isn't a digit, leading +, or extension marker.
// Most OS dialers accept the cleaned form even if the user typed it
// with parens, spaces, or dashes.
function normalizeTel(raw) {
  return String(raw).replace(/[^\d+;,*#]/g, '');
}
const contactPillStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  padding: '6px 12px 6px 10px',
  background: theme.colors.card,
  border: `1px solid ${theme.colors.rule}`,
  borderRadius: theme.radii.pill,
  color: theme.colors.ink,
  textDecoration: 'none',
  cursor: 'pointer',
  maxWidth: '100%'
};
const contactPillText = {
  fontFamily: theme.fonts.mono,
  fontSize: 11,
  letterSpacing: 0.2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
};

// Inline mini-system pill button: primary = ink bg + paper text, default =
// card bg + rule outline.
function ActionChip({
  primary = false,
  onClick,
  children
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsx("button", {
    onClick: onClick,
    style: {
      padding: '8px 16px',
      minHeight: 36,
      borderRadius: theme.radii.pill,
      border: primary ? '1px solid transparent' : `1px solid ${theme.colors.rule}`,
      background: primary ? theme.colors.ink : theme.colors.card,
      color: primary ? theme.colors.paper : theme.colors.ink,
      fontFamily: theme.fonts.sans,
      fontSize: 13,
      fontWeight: 500,
      cursor: 'pointer',
      lineHeight: 1.2,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6
    },
    children: children
  });
}

// Email validator + normalizer.
//
// Used by PersonForm.handleSave to block saves on invalid input, and by
// vCard import + Quick Capture to normalize stored values to lowercase
// trimmed canonical form.
//
// We use a deliberately pragmatic regex — not RFC 5322 strict (which
// allows weird forms users would never type) but tight enough to catch
// "obviously broken" inputs like missing @, no TLD, embedded spaces, etc.
//
//   local-part: one or more chars from a permissive set
//   @
//   domain: chunks separated by dots, with a TLD of at least 2 chars
//
// Empty is valid (email is optional).

const EMAIL_RE = /^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/;
function isValidEmail(raw) {
  const s = String(raw || '').trim();
  if (!s) return true; // empty = optional, treat as valid
  // Reject anything with whitespace
  if (/\s/.test(s)) return false;
  return EMAIL_RE.test(s);
}

/**
 * Canonical storage form: trimmed + lowercased. We lowercase the whole
 * thing — RFC technically only requires the domain to be case-insensitive,
 * but in practice nobody cares and lowercased is what every contact
 * system stores. Makes email-based dedupe and matching reliable.
 */
function normalizeEmail(raw) {
  return String(raw || '').trim().toLowerCase();
}

async function fileToCompressedDataURL(file, maxDim = 240, quality = 0.72) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      try {
        const ratio = Math.min(maxDim / img.width, maxDim / img.height, 1);
        const w = Math.round(img.width * ratio);
        const h = Math.round(img.height * ratio);
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        const data = canvas.toDataURL('image/jpeg', quality);
        URL.revokeObjectURL(url);
        resolve(data);
      } catch (e) {
        URL.revokeObjectURL(url);
        reject(e);
      }
    };
    img.onerror = e => {
      URL.revokeObjectURL(url);
      reject(e);
    };
    img.src = url;
  });
}
const labelStyle$3 = {
  display: 'block',
  ...microLabel,
  marginBottom: 6
};
const inputStyle$1 = {
  width: '100%',
  padding: '10px 12px',
  fontFamily: theme.fonts.body,
  fontSize: 15,
  background: theme.colors.paper,
  border: `1px solid ${theme.colors.rule}`,
  borderRadius: theme.radii.md,
  outline: 'none',
  color: theme.colors.ink
};
const cardStyle$2 = {
  background: theme.colors.card,
  border: `1px solid ${theme.colors.rule}`,
  borderRadius: theme.radii.lg,
  padding: theme.space.lg,
  boxShadow: theme.shadow.sm
};
const fieldGroupStyle = {
  marginBottom: theme.space.md
};

// Selectable pill for the keep-in-touch cadence picker.
function CadenceChip({
  label,
  active,
  onClick
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsx("button", {
    type: "button",
    onClick: onClick,
    className: "al-press",
    "aria-pressed": active,
    style: {
      padding: '7px 13px',
      borderRadius: theme.radii.pill,
      border: `1px solid ${active ? theme.colors.ink : theme.colors.rule}`,
      background: active ? theme.colors.ink : 'transparent',
      color: active ? theme.colors.paper : theme.colors.ink2,
      fontFamily: theme.fonts.sans,
      fontSize: 13,
      fontWeight: active ? 600 : 500,
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transition: 'background 160ms ease, border-color 160ms ease, color 160ms ease'
    },
    children: label
  });
}
function PersonForm({
  person,
  circles,
  people = [],
  onSave,
  onCancel,
  isNew
}) {
  const [draft, setDraft] = reactExports.useState(person);
  function update(field, value) {
    setDraft(d => ({
      ...d,
      [field]: value
    }));
  }
  function toggleCircle(id) {
    setDraft(d => ({
      ...d,
      circleIds: d.circleIds?.includes(id) ? d.circleIds.filter(c => c !== id) : [...(d.circleIds || []), id]
    }));
  }
  function addFamily() {
    setDraft(d => ({
      ...d,
      family: [...(d.family || []), {
        name: '',
        relation: ''
      }]
    }));
  }
  function updateFamily(idx, field, value) {
    setDraft(d => ({
      ...d,
      family: d.family.map((f, i) => i === idx ? {
        ...f,
        [field]: value
      } : f)
    }));
  }

  // Used by the name-autocomplete when the user picks an existing contact.
  // Sets name + personId atomically so materializeFamily skips creating a
  // duplicate. If the user later edits the typed name, we strip personId
  // so the link doesn't drift (handled in the input below).
  function linkFamilyToPerson(idx, person) {
    setDraft(d => ({
      ...d,
      family: d.family.map((f, i) => i === idx ? {
        ...f,
        name: person.name,
        personId: person.id
      } : f)
    }));
  }
  function unlinkFamily(idx) {
    setDraft(d => ({
      ...d,
      family: d.family.map((f, i) => {
        if (i !== idx) return f;
        const {
          personId,
          ...rest
        } = f;
        return rest;
      })
    }));
  }
  function removeFamily(idx) {
    setDraft(d => ({
      ...d,
      family: d.family.filter((_, i) => i !== idx)
    }));
  }
  function addDetail() {
    // New details get a fresh learnedAt + confirmedAt so the decay clock
    // starts at zero (the user just told us this is true now).
    setDraft(d => {
      const now = new Date().toISOString();
      return {
        ...d,
        details: [...(d.details || []), {
          id: `det_${Date.now().toString(36)}_${(d.details || []).length}`,
          text: '',
          learnedAt: now,
          confirmedAt: now
        }]
      };
    });
  }
  function updateDetail(idx, value) {
    // Edit operates on .text; timestamps survive. Tolerates the legacy
    // string shape too (typed at creation in older sessions).
    setDraft(d => ({
      ...d,
      details: d.details.map((s, i) => {
        if (i !== idx) return s;
        if (typeof s === 'string') {
          const now = new Date().toISOString();
          return {
            id: `det_${Date.now().toString(36)}_${i}`,
            text: value,
            learnedAt: now,
            confirmedAt: now
          };
        }
        return {
          ...s,
          text: value
        };
      })
    }));
  }
  function removeDetail(idx) {
    setDraft(d => ({
      ...d,
      details: d.details.filter((_, i) => i !== idx)
    }));
  }
  function handleSave() {
    const cleaned = {
      ...draft,
      name: (draft.name || '').trim(),
      location: (draft.location || '').trim(),
      howWeMet: (draft.howWeMet || '').trim(),
      birthday: (draft.birthday || '').trim(),
      metOn: (draft.metOn || '').trim(),
      // Normalize phone to canonical (XXX) XXX-XXXX. If the input is
      // already valid 10-digit US, reformat so storage is consistent
      // regardless of how the user typed it. Invalid input passes
      // through and gets caught by isValidUSPhone below.
      phone: (() => {
        const raw = (draft.phone || '').trim();
        return isValidUSPhone(raw) ? formatUSPhone(raw) : raw;
      })(),
      // Normalize email to lowercased+trimmed canonical storage form.
      // Invalid input (bad format) is caught by isValidEmail below — we
      // still normalize whatever was typed so the error alert + form
      // state stay consistent.
      email: normalizeEmail(draft.email),
      family: (draft.family || []).map(f => ({
        // Preserve personId when present — materializeFamily uses it
        // as the link to the existing contact (and skips creating a
        // duplicate). New entries don't have one yet; materialize
        // either finds a name-match or creates a fresh contact.
        ...(f.personId ? {
          personId: f.personId
        } : {}),
        name: (f.name || '').trim(),
        relation: (f.relation || '').trim()
      })).filter(f => f.name && f.relation),
      // Details are objects { id, text, learnedAt, confirmedAt } — trim
      // text and drop entries whose text is empty after trim. Preserve
      // the timestamps on retained items so decay tracking keeps working.
      details: (draft.details || []).map(d => {
        if (typeof d === 'string') {
          const t = d.trim();
          return t ? {
            id: `det_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`,
            text: t,
            learnedAt: new Date().toISOString(),
            confirmedAt: new Date().toISOString()
          } : null;
        }
        if (!d || typeof d !== 'object') return null;
        const text = (d.text || '').trim();
        if (!text) return null;
        return {
          ...d,
          text
        };
      }).filter(Boolean)
    };
    if (!cleaned.name) {
      alert('Please give them a name.');
      return;
    }
    if (!isValidUSPhone(cleaned.phone)) {
      alert('Phone must be 10 digits — like (555) 555-5555.');
      return;
    }
    if (!isValidEmail(cleaned.email)) {
      alert('That doesn\'t look like a valid email — try the format name@example.com.');
      return;
    }
    onSave(cleaned);
  }
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      maxWidth: PAGE_MAX_WIDTH,
      margin: '0 auto',
      padding: '18px 22px 24px'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("button", {
      onClick: onCancel,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        background: 'transparent',
        border: 'none',
        padding: '4px 0',
        ...microLabel,
        marginBottom: theme.space.md,
        cursor: 'pointer'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
        name: "chevronLeft",
        size: 16
      }), "Back"]
    }), /*#__PURE__*/jsxRuntimeExports.jsx("h1", {
      style: {
        margin: 0,
        marginBottom: theme.space.lg,
        fontFamily: theme.fonts.display,
        fontWeight: 500,
        fontSize: 'clamp(28px, 7vw, 36px)',
        color: theme.colors.ink,
        letterSpacing: '-0.02em'
      },
      children: isNew ? 'New person' : `Edit ${person.name || 'person'}`
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("section", {
      style: {
        ...cardStyle$2,
        marginBottom: theme.space.md
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(PhotoPicker, {
        name: draft.name,
        photo: draft.photo,
        onChange: photo => update('photo', photo)
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: fieldGroupStyle,
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("label", {
          style: labelStyle$3,
          children: "Name"
        }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
          value: draft.name || '',
          onChange: e => update('name', e.target.value),
          style: inputStyle$1,
          autoFocus: isNew
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: fieldGroupStyle,
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("label", {
          style: labelStyle$3,
          children: "Phone"
        }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
          value: draft.phone || ''
          // Live-format on every keystroke. formatUSPhone is idempotent
          // and paste-safe — "+1-617-555-0142" → "(617) 555-0142".
          ,
          onChange: e => update('phone', formatUSPhone(e.target.value)),
          placeholder: "(617) 555-0118",
          inputMode: "tel",
          maxLength: 14 // "(XXX) XXX-XXXX" — 14 chars
          ,
          style: inputStyle$1
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: fieldGroupStyle,
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("label", {
          style: labelStyle$3,
          children: "Email"
        }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
          value: draft.email || '',
          onChange: e => update('email', e.target.value),
          placeholder: "name@example.com",
          inputMode: "email",
          style: inputStyle$1
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: fieldGroupStyle,
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("label", {
          style: labelStyle$3,
          children: "Birthday"
        }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
          value: draft.birthday || '',
          onChange: e => update('birthday', e.target.value),
          placeholder: "MM-DD (or YYYY-MM-DD)",
          inputMode: "numeric",
          style: inputStyle$1
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: fieldGroupStyle,
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("label", {
          style: labelStyle$3,
          children: "Location"
        }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
          value: draft.location || '',
          onChange: e => update('location', e.target.value),
          placeholder: "e.g., Newton, MA",
          style: inputStyle$1
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: fieldGroupStyle,
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("label", {
          style: labelStyle$3,
          children: "How we met"
        }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
          value: draft.howWeMet || '',
          onChange: e => update('howWeMet', e.target.value),
          placeholder: "e.g., Erik's hockey team",
          style: inputStyle$1
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: fieldGroupStyle,
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("label", {
          style: labelStyle$3,
          children: "When you met"
        }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
          value: draft.metOn || '',
          onChange: e => update('metOn', e.target.value),
          placeholder: "e.g., 2018 or 2018-06-15",
          style: inputStyle$1
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          ...fieldGroupStyle,
          marginBottom: 0
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("label", {
          style: labelStyle$3,
          children: "Introduced by"
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("select", {
          value: draft.referredBy || '',
          onChange: e => update('referredBy', e.target.value || null),
          style: {
            ...inputStyle$1,
            appearance: 'auto',
            cursor: 'pointer'
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx("option", {
            value: "",
            children: "\u2014 No one \u2014"
          }), people.filter(p => p.id !== draft.id && p.name).sort((a, b) => a.name.localeCompare(b.name)).map(p => /*#__PURE__*/jsxRuntimeExports.jsxs("option", {
            value: p.id,
            children: [p.name, p.howWeMet ? ` — ${p.howWeMet}` : '']
          }, p.id))]
        })]
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx(CirclePicker, {
      circles: circles,
      selected: draft.circleIds || [],
      onToggle: toggleCircle,
      cardStyle: cardStyle$2,
      labelStyle: labelStyle$3
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("section", {
      style: {
        ...cardStyle$2,
        marginBottom: theme.space.md
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("label", {
        style: labelStyle$3,
        children: "Keep in touch"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          fontFamily: theme.fonts.sans,
          fontSize: 12.5,
          color: theme.colors.ink3,
          margin: '2px 0 12px',
          lineHeight: 1.4
        },
        children: "How often you\u2019d like to reconnect. Circles nudges you when it\u2019s been too long \u2014 quietly, never nagging."
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(CadenceChip, {
          label: "Off",
          active: !draft.keepInTouch,
          onClick: () => update('keepInTouch', null)
        }), CADENCE_OPTIONS.map(o => /*#__PURE__*/jsxRuntimeExports.jsx(CadenceChip, {
          label: o.label,
          active: draft.keepInTouch === o.key,
          onClick: () => update('keepInTouch', o.key)
        }, o.key))]
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("section", {
      style: {
        ...cardStyle$2,
        marginBottom: theme.space.md
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: theme.space.sm
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("label", {
          style: {
            ...labelStyle$3,
            marginBottom: 0
          },
          children: "Family"
        }), /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
          variant: "ghost",
          onClick: addFamily,
          children: "+ Add"
        })]
      }), (draft.family || []).length === 0 ? /*#__PURE__*/jsxRuntimeExports.jsx("p", {
        style: {
          margin: 0,
          color: theme.colors.ink3,
          fontSize: 14,
          fontStyle: 'italic'
        },
        children: "No family members yet."
      }) : /*#__PURE__*/jsxRuntimeExports.jsx("ul", {
        style: {
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 6
        },
        children: draft.family.map((f, i) => /*#__PURE__*/jsxRuntimeExports.jsxs("li", {
          style: {
            display: 'flex',
            gap: 6,
            alignItems: 'center'
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx(FamilyNameInput, {
            value: f.name,
            linkedPersonId: f.personId,
            onChange: name => {
              // If the typed value drifts from the linked person's
              // name, drop the link so it doesn't stay attached to
              // someone the user no longer means.
              updateFamily(i, 'name', name);
              if (f.personId && people.find(p => p.id === f.personId)?.name !== name) {
                unlinkFamily(i);
              }
            },
            onPick: p => linkFamilyToPerson(i, p),
            people: people,
            excludeIds: [draft.id, ...(draft.family || []).map((x, j) => j !== i ? x.personId : null).filter(Boolean)],
            inputStyle: inputStyle$1
          }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
            value: f.relation,
            onChange: e => updateFamily(i, 'relation', e.target.value),
            placeholder: "Relation",
            style: {
              ...inputStyle$1,
              flex: 1
            }
          }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
            onClick: () => removeFamily(i),
            "aria-label": "Remove",
            style: {
              background: 'transparent',
              border: 'none',
              color: theme.colors.ink3,
              fontSize: 18,
              padding: 14,
              margin: -14,
              cursor: 'pointer'
            },
            children: "\xD7"
          })]
        }, i))
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("section", {
      style: {
        ...cardStyle$2,
        marginBottom: theme.space.md
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: theme.space.sm
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("label", {
          style: {
            ...labelStyle$3,
            marginBottom: 0
          },
          children: "Details"
        }), /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
          variant: "ghost",
          onClick: addDetail,
          children: "+ Add"
        })]
      }), (draft.details || []).length === 0 ? /*#__PURE__*/jsxRuntimeExports.jsx("p", {
        style: {
          margin: 0,
          color: theme.colors.ink3,
          fontSize: 14,
          fontStyle: 'italic'
        },
        children: "No details yet."
      }) : /*#__PURE__*/jsxRuntimeExports.jsx("ul", {
        style: {
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 6
        },
        children: draft.details.map((d, i) => /*#__PURE__*/jsxRuntimeExports.jsxs("li", {
          style: {
            display: 'flex',
            gap: 6,
            alignItems: 'center'
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx("input", {
            value: typeof d === 'string' ? d : d?.text || '',
            onChange: e => updateDetail(i, e.target.value),
            placeholder: "e.g., Sox fan",
            style: {
              ...inputStyle$1,
              flex: 1
            }
          }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
            onClick: () => removeDetail(i),
            "aria-label": "Remove",
            style: {
              background: 'transparent',
              border: 'none',
              color: theme.colors.ink3,
              fontSize: 18,
              padding: 14,
              margin: -14,
              cursor: 'pointer'
            },
            children: "\xD7"
          })]
        }, d && d.id || i))
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        gap: theme.space.sm,
        justifyContent: 'flex-end'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(Button, {
        variant: "secondary",
        onClick: onCancel,
        children: "Cancel"
      }), /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
        onClick: handleSave,
        children: isNew ? 'Create' : 'Save'
      })]
    })]
  });
}

// Tree-flat circle picker. Renders each circle as a chip with an indent based
// on depth and the full breadcrumb in its label (so duplicate names like
// "School" under different parents stay distinguishable).
function CirclePicker({
  circles,
  selected,
  onToggle,
  cardStyle,
  labelStyle
}) {
  const flat = reactExports.useMemo(() => flattenTree(circles), [circles]);
  const sel = new Set(selected);
  return /*#__PURE__*/jsxRuntimeExports.jsxs("section", {
    style: {
      ...cardStyle,
      marginBottom: theme.space.md
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("label", {
      style: labelStyle,
      children: "Circles"
    }), flat.length === 0 ? /*#__PURE__*/jsxRuntimeExports.jsx("p", {
      style: {
        margin: 0,
        color: theme.colors.ink3,
        fontSize: 14,
        fontStyle: 'italic'
      },
      children: "No circles yet \u2014 create some in the Circles tab."
    }) : /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      },
      children: flat.map(c => {
        const isSelected = sel.has(c.id);
        const pathNames = getPathNames(circles, c.id);
        const isSub = c.depth > 0;
        return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            paddingLeft: c.depth * 16
          },
          children: [isSub && /*#__PURE__*/jsxRuntimeExports.jsx("span", {
            "aria-hidden": true,
            style: {
              color: theme.colors.ink3,
              fontSize: 14,
              marginRight: 2
            },
            children: "\u2514"
          }), /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
            type: "button",
            onClick: () => onToggle(c.id),
            style: {
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '6px 12px',
              borderRadius: theme.radii.pill,
              border: `1px solid ${isSelected ? theme.colors.ink : theme.colors.rule}`,
              background: isSelected ? theme.colors.ink : 'transparent',
              color: isSelected ? theme.colors.paper : theme.colors.ink2,
              fontSize: 13,
              fontWeight: isSelected ? 600 : 500,
              cursor: 'pointer'
            },
            title: pathNames.join(' › '),
            children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
              style: {
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: c.color
              }
            }), c.name]
          })]
        }, c.id);
      })
    })]
  });
}

// 72px photo preview + Choose/Change/Remove controls. Compresses to ~240px JPEG.
function PhotoPicker({
  name,
  photo,
  onChange
}) {
  const inputRef = reactExports.useRef(null);
  const [busy, setBusy] = reactExports.useState(false);
  async function handlePick(e) {
    const file = e.target.files?.[0];
    e.target.value = ''; // allow picking the same file again
    if (!file) return;
    setBusy(true);
    try {
      const data = await fileToCompressedDataURL(file);
      onChange(data);
    } catch (err) {
      alert("Couldn't read that image: " + (err?.message || err));
    } finally {
      setBusy(false);
    }
  }
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.space.md,
      marginBottom: theme.space.md
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
      name: name || '?',
      photo: photo,
      size: 72
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("button", {
        type: "button",
        onClick: () => inputRef.current?.click(),
        disabled: busy,
        style: {
          padding: '6px 14px',
          borderRadius: theme.radii.pill,
          border: `1px solid ${theme.colors.rule}`,
          background: theme.colors.card,
          color: theme.colors.ink,
          fontFamily: theme.fonts.sans,
          fontSize: 13,
          fontWeight: 500,
          cursor: busy ? 'wait' : 'pointer',
          alignSelf: 'flex-start'
        },
        children: busy ? 'Reading…' : photo ? 'Change photo' : 'Add photo'
      }), photo && /*#__PURE__*/jsxRuntimeExports.jsx("button", {
        type: "button",
        onClick: () => onChange(null),
        style: {
          padding: '4px 10px',
          borderRadius: theme.radii.pill,
          border: 'none',
          background: 'transparent',
          color: theme.colors.danger,
          fontFamily: theme.fonts.serif,
          fontSize: 12.5,
          fontStyle: 'italic',
          cursor: 'pointer',
          alignSelf: 'flex-start'
        },
        children: "Remove"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
        ref: inputRef,
        type: "file",
        accept: "image/*",
        onChange: handlePick,
        style: {
          display: 'none'
        }
      })]
    })]
  });
}

// Family member name input with live autocomplete against the contact
// directory. Picking a match (click or Enter on the highlighted row)
// links the family entry to that contact via personId; materializeFamily
// will then skip auto-creation and just write the reverse link.
//
// Behavior:
//   • The dropdown only opens when there's at least one match and the
//     field has focus + input is non-empty.
//   • ↑ / ↓ move the highlight, Enter picks it, Esc closes the dropdown.
//   • If exactly one match exists with the typed text, Enter picks it
//     even when the user hasn't arrowed down — saves a keystroke.
//   • A small green dot next to the input means "linked" — the typed name
//     resolves to an existing contact.
function FamilyNameInput({
  value,
  linkedPersonId,
  onChange,
  onPick,
  people,
  excludeIds,
  inputStyle
}) {
  const [focused, setFocused] = reactExports.useState(false);
  const [highlight, setHighlight] = reactExports.useState(0);
  const exclude = reactExports.useMemo(() => new Set(excludeIds || []), [excludeIds]);
  const matches = reactExports.useMemo(() => {
    const q = (value || '').trim().toLowerCase();
    if (!q) return [];
    return people.filter(p => p.name && !exclude.has(p.id))
    // Already an exact match to a linked contact — suppress the dropdown.
    .filter(p => !(linkedPersonId === p.id)).filter(p => p.name.toLowerCase().includes(q)).sort((a, b) => {
      // startsWith ranks above contains
      const aStarts = a.name.toLowerCase().startsWith(q) ? 0 : 1;
      const bStarts = b.name.toLowerCase().startsWith(q) ? 0 : 1;
      if (aStarts !== bStarts) return aStarts - bStarts;
      return a.name.localeCompare(b.name);
    }).slice(0, 6);
  }, [value, people, exclude, linkedPersonId]);
  const open = focused && matches.length > 0;
  function handleKeyDown(e) {
    if (!open) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlight(h => (h + 1) % matches.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlight(h => (h - 1 + matches.length) % matches.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const pick = matches[Math.min(highlight, matches.length - 1)];
      if (pick) onPick(pick);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setFocused(false);
    }
  }
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      position: 'relative',
      flex: 2
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("input", {
        value: value || '',
        onChange: e => {
          onChange(e.target.value);
          setHighlight(0);
        },
        onFocus: () => setFocused(true)
        // Delay so the click on a dropdown row still registers
        ,
        onBlur: () => setTimeout(() => setFocused(false), 120),
        onKeyDown: handleKeyDown,
        placeholder: "Name",
        autoComplete: "off",
        style: {
          ...inputStyle,
          width: '100%'
        }
      }), linkedPersonId && /*#__PURE__*/jsxRuntimeExports.jsx("span", {
        "aria-label": "Linked",
        title: "Linked to an existing contact",
        style: {
          width: 8,
          height: 8,
          borderRadius: 4,
          background: theme.colors.success,
          flexShrink: 0
        }
      })]
    }), open && /*#__PURE__*/jsxRuntimeExports.jsx("ul", {
      style: {
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        marginTop: 4,
        maxHeight: 220,
        overflowY: 'auto',
        background: theme.colors.paper,
        border: `1px solid ${theme.colors.ruleStrong}`,
        borderRadius: 8,
        boxShadow: theme.shadow.md,
        zIndex: 20,
        listStyle: 'none',
        padding: 4,
        margin: 0
      },
      children: matches.map((p, i) => /*#__PURE__*/jsxRuntimeExports.jsxs("li", {
        // onMouseDown beats onClick to the punch — input.onBlur would
        // have hidden the dropdown by the time a click registered.
        onMouseDown: e => {
          e.preventDefault();
          onPick(p);
        },
        onMouseEnter: () => setHighlight(i),
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 8px',
          borderRadius: theme.radii.pill,
          cursor: 'pointer',
          background: i === highlight ? theme.colors.accentSoft : 'transparent'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
          name: p.name,
          photo: p.photo,
          size: 20
        }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
          style: {
            fontFamily: theme.fonts.serif,
            fontSize: 13.5,
            color: theme.colors.ink
          },
          children: p.name
        })]
      }, p.id))
    })]
  });
}

const inputStyle = {
  width: '100%',
  padding: '10px 12px',
  fontFamily: theme.fonts.body,
  fontSize: 15,
  background: theme.colors.paper,
  border: `1px solid ${theme.colors.rule}`,
  borderRadius: theme.radii.md,
  outline: 'none',
  color: theme.colors.ink
};
const cardStyle$1 = {
  background: theme.colors.card,
  border: `1px solid ${theme.colors.rule}`,
  borderRadius: theme.radii.lg,
  padding: theme.space.md
};
function CirclesManager({
  circles,
  people,
  onChange,
  onBack
}) {
  const [newName, setNewName] = reactExports.useState('');
  const [newColor, setNewColor] = reactExports.useState(CIRCLE_PALETTE[0]);
  // For "+ Sub" inline-add: which parent id is currently open
  const [addingUnder, setAddingUnder] = reactExports.useState(null);
  const [subDraftName, setSubDraftName] = reactExports.useState('');
  const childrenMap = indexChildren(circles);
  const roots = childrenMap.get('root') || [];
  function addTopLevel() {
    const name = newName.trim();
    if (!name) return;
    const id = makeId('circle');
    onChange([...circles, {
      id,
      name,
      color: newColor,
      parentId: null
    }]);
    setNewName('');
  }

  // Spawn a smart circle from one of the presets. Inherits the preset's
  // default rule + a suggested tone; the user can rename inline like any
  // other circle.
  function addSmartCircle(preset) {
    const id = makeId('circle');
    const next = {
      id,
      name: preset.name,
      color: CIRCLE_PALETTE[0],
      parentId: null,
      tone: preset.tone || 'personal',
      rule: {
        ...preset.defaultRule
      }
    };
    onChange([...circles, next]);
  }
  function addSubCircle(parentId) {
    const name = subDraftName.trim();
    if (!name) return;
    const parent = circles.find(c => c.id === parentId);
    const id = makeId('circle');
    onChange([...circles, {
      id,
      name,
      color: parent?.color || CIRCLE_PALETTE[0],
      parentId
    }]);
    setSubDraftName('');
    setAddingUnder(null);
  }
  function updateCircle(id, field, value) {
    onChange(circles.map(c => c.id === id ? {
      ...c,
      [field]: value
    } : c));
  }
  function handleDelete(id) {
    const target = circles.find(c => c.id === id);
    if (!target) return;
    const descendantIds = getDescendantIds(circles, id).filter(i => i !== id);
    const directMembers = people.filter(p => (p.circleIds || []).includes(id)).length;
    if (descendantIds.length === 0) {
      const msg = directMembers ? `Delete "${target.name}"? It currently includes ${directMembers} ${directMembers === 1 ? 'person' : 'people'} — they'll stay, but lose this circle.` : `Delete "${target.name}"?`;
      if (window.confirm(msg)) onChange(deleteCascade(circles, id));
      return;
    }

    // Has sub-circles: 3-way choice
    const subN = descendantIds.length;
    const cascade = window.confirm(`"${target.name}" has ${subN} sub-circle${subN === 1 ? '' : 's'}.\n\n` + `OK = delete "${target.name}" AND all sub-circles.\n` + `Cancel = keep the sub-circles (you'll get a follow-up prompt).`);
    if (cascade) {
      onChange(deleteCascade(circles, id));
      return;
    }
    const promote = window.confirm(`Promote ${subN} sub-circle${subN === 1 ? '' : 's'} to top-level and ` + `delete only "${target.name}"?`);
    if (promote) onChange(deletePromote(circles, id));
    // else: cancelled both prompts → no-op
  }
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      padding: '54px 22px 24px'
    },
    children: [onBack && /*#__PURE__*/jsxRuntimeExports.jsx("button", {
      onClick: onBack,
      style: {
        background: 'transparent',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        fontFamily: theme.fonts.mono,
        fontSize: 10,
        color: theme.colors.ink3,
        letterSpacing: 0.9,
        textTransform: 'uppercase',
        marginBottom: 12
      },
      children: "\u2190 BACK TO CIRCLES"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("h1", {
      style: {
        margin: 0,
        marginBottom: theme.space.lg,
        fontFamily: theme.fonts.serif,
        fontWeight: 500,
        fontSize: 32,
        lineHeight: 1.1,
        color: theme.colors.ink,
        letterSpacing: '-0.02em'
      },
      children: "Edit Circles"
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("ul", {
      style: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: theme.space.sm,
        marginBottom: theme.space.lg
      },
      children: [roots.length === 0 && /*#__PURE__*/jsxRuntimeExports.jsx("li", {
        style: {
          ...cardStyle$1,
          color: theme.colors.ink3,
          fontStyle: 'italic',
          fontSize: 14,
          textAlign: 'center'
        },
        children: "No circles yet \u2014 add one below."
      }), roots.map(c => /*#__PURE__*/jsxRuntimeExports.jsx(CircleNode, {
        circle: c,
        depth: 0,
        circles: circles,
        people: people,
        childrenMap: childrenMap,
        addingUnder: addingUnder,
        setAddingUnder: setAddingUnder,
        subDraftName: subDraftName,
        setSubDraftName: setSubDraftName,
        onUpdate: updateCircle,
        onDelete: handleDelete,
        onAddSub: addSubCircle
      }, c.id))]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("section", {
      style: {
        ...cardStyle$1,
        padding: theme.space.lg,
        border: `1px dashed ${theme.colors.rule}`
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("label", {
        style: {
          display: 'block',
          ...microLabel,
          marginBottom: theme.space.sm
        },
        children: "Add a top-level circle"
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          display: 'flex',
          gap: theme.space.sm,
          alignItems: 'center'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(ColorPicker, {
          value: newColor,
          onChange: setNewColor
        }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
          value: newName,
          onChange: e => setNewName(e.target.value),
          onKeyDown: e => e.key === 'Enter' && addTopLevel(),
          placeholder: "e.g., Erik",
          style: {
            ...inputStyle,
            flex: 1
          }
        }), /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
          onClick: addTopLevel,
          disabled: !newName.trim(),
          children: "Add"
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("p", {
        style: {
          margin: 0,
          marginTop: 8,
          fontSize: 12,
          color: theme.colors.ink3
        },
        children: ["Tip: after creating a circle, use ", /*#__PURE__*/jsxRuntimeExports.jsx("strong", {
          children: "+ Sub"
        }), " on its row to nest sub-circles underneath (e.g. ", /*#__PURE__*/jsxRuntimeExports.jsx("em", {
          children: "Erik \u203A Baseball"
        }), ")."]
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("section", {
      style: {
        ...cardStyle$1,
        marginTop: theme.space.lg
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("label", {
        style: {
          display: 'block',
          ...microLabel,
          marginBottom: theme.space.sm
        },
        children: "Smart circles"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
        style: {
          margin: 0,
          marginBottom: theme.space.md,
          fontSize: 12.5,
          color: theme.colors.ink3,
          fontStyle: 'italic',
          lineHeight: 1.4
        },
        children: "Membership stays current automatically \u2014 no manual adds. Pick a preset."
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 6
        },
        children: PRESETS.map(preset => {
          const exists = circles.some(c => isSmartCircle(c) && c.rule.type === preset.key);
          return /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
            onClick: () => addSmartCircle(preset),
            disabled: exists,
            style: {
              padding: '10px 12px',
              background: theme.colors.paper,
              border: `1px solid ${theme.colors.rule}`,
              borderRadius: theme.radii.md,
              cursor: exists ? 'not-allowed' : 'pointer',
              textAlign: 'left',
              opacity: exists ? 0.5 : 1,
              display: 'flex',
              alignItems: 'center',
              gap: 10
            },
            children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
              style: {
                width: 28,
                height: 28,
                borderRadius: 14,
                background: theme.colors.accentSoft,
                color: theme.colors.accent,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: theme.fonts.serif,
                fontSize: 14
              },
              children: preset.icon
            }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
              style: {
                flex: 1,
                minWidth: 0
              },
              children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
                style: {
                  fontFamily: theme.fonts.serif,
                  fontSize: 14,
                  fontWeight: 500,
                  color: theme.colors.ink
                },
                children: preset.name
              }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
                style: {
                  marginTop: 1,
                  fontFamily: theme.fonts.serif,
                  fontStyle: 'italic',
                  fontSize: 12,
                  color: theme.colors.ink3,
                  lineHeight: 1.35
                },
                children: describePreset(preset, preset.defaultRule)
              })]
            }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
              style: {
                fontFamily: theme.fonts.mono,
                fontSize: 10,
                color: exists ? theme.colors.ink3 : theme.colors.accent,
                letterSpacing: 0.6,
                textTransform: 'uppercase'
              },
              children: exists ? 'added' : '+ add'
            })]
          }, preset.key);
        })
      })]
    })]
  });
}
function CircleNode({
  circle,
  depth,
  circles,
  people,
  childrenMap,
  addingUnder,
  setAddingUnder,
  subDraftName,
  setSubDraftName,
  onUpdate,
  onDelete,
  onAddSub
}) {
  const directCount = people.filter(p => (p.circleIds || []).includes(circle.id)).length;
  const kids = childrenMap.get(circle.id) || [];
  const adding = addingUnder === circle.id;

  // Total reach: this + everyone in any descendant
  const reachIds = new Set([circle.id, ...descendants(childrenMap, circle.id)]);
  const reach = people.filter(p => (p.circleIds || []).some(id => reachIds.has(id))).length;
  return /*#__PURE__*/jsxRuntimeExports.jsxs("li", {
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        ...cardStyle$1,
        marginLeft: depth * 20
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          display: 'flex',
          gap: theme.space.sm,
          alignItems: 'center',
          flexWrap: 'wrap'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(ColorPicker, {
          value: circle.color,
          onChange: v => onUpdate(circle.id, 'color', v)
        }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
          value: circle.name,
          onChange: e => onUpdate(circle.id, 'name', e.target.value),
          style: {
            ...inputStyle,
            flex: 1,
            minWidth: 140
          }
        }), /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
          variant: "ghost",
          onClick: () => {
            setAddingUnder(adding ? null : circle.id);
            setSubDraftName('');
          },
          children: adding ? 'Done' : '+ Sub'
        }), /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
          variant: "danger",
          onClick: () => onDelete(circle.id),
          style: {
            padding: '6px 10px'
          },
          children: "Delete"
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
        style: {
          margin: 0,
          marginTop: 6,
          fontSize: 12,
          color: theme.colors.ink3,
          paddingLeft: 32
        },
        children: isSmartCircle(circle) ? /*#__PURE__*/jsxRuntimeExports.jsx(SmartRuleEditor, {
          circle: circle,
          onUpdate: onUpdate
        }) : /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
          children: [directCount, " direct", kids.length > 0 ? ` · ${reach} including sub-circles` : '']
        })
      }), adding && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          display: 'flex',
          gap: 6,
          marginTop: theme.space.sm,
          alignItems: 'center',
          paddingLeft: 32
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("input", {
          value: subDraftName,
          onChange: e => setSubDraftName(e.target.value),
          onKeyDown: e => e.key === 'Enter' && onAddSub(circle.id),
          placeholder: `Sub-circle of "${circle.name}" (e.g. School)`,
          autoFocus: true,
          style: {
            ...inputStyle,
            flex: 1,
            fontSize: 13
          }
        }), /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
          onClick: () => onAddSub(circle.id),
          disabled: !subDraftName.trim(),
          style: {
            padding: '8px 12px',
            fontSize: 13
          },
          children: "Add sub"
        })]
      })]
    }), kids.length > 0 && /*#__PURE__*/jsxRuntimeExports.jsx("ul", {
      style: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: theme.space.sm,
        marginTop: theme.space.sm
      },
      children: kids.map(k => /*#__PURE__*/jsxRuntimeExports.jsx(CircleNode, {
        circle: k,
        depth: depth + 1,
        circles: circles,
        people: people,
        childrenMap: childrenMap,
        addingUnder: addingUnder,
        setAddingUnder: setAddingUnder,
        subDraftName: subDraftName,
        setSubDraftName: setSubDraftName,
        onUpdate: onUpdate,
        onDelete: onDelete,
        onAddSub: onAddSub
      }, k.id))
    })]
  });
}

// Internal helper to avoid circular import (lib/circles already exports
// getDescendantIds but we have childrenMap on hand here).
function descendants(childrenMap, id) {
  const out = [];
  function visit(curId) {
    for (const c of childrenMap.get(curId) || []) {
      out.push(c.id);
      visit(c.id);
    }
  }
  visit(id);
  return out;
}
function ColorPicker({
  value,
  onChange
}) {
  const [open, setOpen] = reactExports.useState(false);
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      position: 'relative'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("button", {
      onClick: () => setOpen(o => !o),
      "aria-label": "Pick color",
      style: {
        width: 28,
        height: 28,
        borderRadius: '50%',
        background: value,
        border: `2px solid ${theme.colors.paper}`,
        boxShadow: `0 0 0 1px ${theme.colors.rule}`,
        cursor: 'pointer',
        padding: 0
      }
    }), open && /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        onClick: () => setOpen(false),
        style: {
          position: 'fixed',
          inset: 0,
          zIndex: 50
        }
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        className: "al-pop",
        style: {
          position: 'absolute',
          top: 36,
          left: 0,
          zIndex: 51,
          background: theme.colors.card,
          border: `1px solid ${theme.colors.rule}`,
          borderRadius: theme.radii.md,
          padding: 8,
          boxShadow: theme.shadow.md,
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 24px)',
          gap: 6
        },
        children: CIRCLE_PALETTE.map(c => /*#__PURE__*/jsxRuntimeExports.jsx("button", {
          onClick: () => {
            onChange(c);
            setOpen(false);
          },
          "aria-label": c,
          style: {
            width: 24,
            height: 24,
            borderRadius: '50%',
            background: c,
            border: c === value ? `2px solid ${theme.colors.ink}` : `2px solid transparent`,
            cursor: 'pointer',
            padding: 0
          }
        }, c))
      })]
    })]
  });
}

// Inline editor shown beneath a smart circle's name in the tree. Shows
// a small "AUTO" badge, the human description, and (for rules with a
// numeric threshold) a number input the user can tune.
function SmartRuleEditor({
  circle,
  onUpdate
}) {
  const preset = presetForRule(circle.rule);
  if (!preset) {
    return /*#__PURE__*/jsxRuntimeExports.jsx("span", {
      style: {
        color: theme.colors.ink3
      },
      children: "auto \u2014 unknown rule"
    });
  }
  function updateRuleParam(key, value) {
    const next = {
      ...circle.rule,
      params: {
        ...(circle.rule.params || {}),
        [key]: value
      }
    };
    onUpdate(circle.id, 'rule', next);
  }
  const params = circle.rule.params || {};
  return /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap',
      fontSize: 12
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
      style: {
        padding: '2px 7px',
        borderRadius: theme.radii.pill,
        border: `1px solid ${theme.colors.accent}`,
        color: theme.colors.accent,
        fontSize: 10,
        fontWeight: 500,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        fontFamily: theme.fonts.mono
      },
      children: "AUTO"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
      style: {
        color: theme.colors.ink3,
        fontStyle: 'italic'
      },
      children: describePreset(preset, circle.rule)
    }), preset.key === 'drift' && /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("input", {
        type: "number",
        min: 1,
        value: params.days ?? 30,
        onChange: e => updateRuleParam('days', Math.max(1, Number(e.target.value) || 30)),
        style: {
          width: 52,
          padding: '3px 6px',
          border: `1px solid ${theme.colors.rule}`,
          borderRadius: 4,
          fontFamily: theme.fonts.mono,
          fontSize: 11,
          background: theme.colors.paper,
          color: theme.colors.ink
        }
      }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
        style: {
          color: theme.colors.ink3
        },
        children: "days"
      })]
    }), preset.key === 'connector' && /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("input", {
        type: "number",
        min: 1,
        value: params.minOut ?? 2,
        onChange: e => updateRuleParam('minOut', Math.max(1, Number(e.target.value) || 2)),
        style: {
          width: 44,
          padding: '3px 6px',
          border: `1px solid ${theme.colors.rule}`,
          borderRadius: 4,
          fontFamily: theme.fonts.mono,
          fontSize: 11,
          background: theme.colors.paper,
          color: theme.colors.ink
        }
      }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
        style: {
          color: theme.colors.ink3
        },
        children: "min intros"
      })]
    })]
  });
}

// localParse.js — offline fallback for Quick Capture. When /api/parse is
// unreachable (or the user has AI turned off), a note still has to become a
// saveable capture, so this is the deterministic on-device stand-in. It
// returns the EXACT shape the server returns, so the review screen and
// merge.js never need to know which parser ran.
//
// Deliberately conservative — name + note + follow-ups only, never invents:
//   name       directory match first, then the QuickCapture STARTERS
//              lead-ins ("Coffee with…", "Called…", "Ran into…").
//   note       the whole text verbatim; the review screen lets you edit.
//   followUps  only clauses that OPEN with an explicit action trigger.
//   the rest   location/howWeMet/circle/family/details stay empty.
// openLoops is ALWAYS [] here: telling a promise from a waiting-on-them
// thread from an open storyline takes real language understanding, and a
// wrongly-typed loop nags the user for weeks — loops stay an AI-only
// feature rather than ship confident wrong guesses.
//
// Pure + deterministic: no clock, no storage, no network. Never throws.

const escapeRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const firstWord = name => name.trim().split(/\s+/)[0];

// Whole-word, case-insensitive index of a stored name in the note (-1 when
// absent). Dictation often lowercases names, so matching must too; internal
// whitespace in the stored name matches any whitespace in the note.
function nameIndex(text, name) {
  const pattern = name.trim().split(/\s+/).map(escapeRe).join('\\s+');
  return text.search(new RegExp(`\\b${pattern}\\b`, 'i'));
}

// (a) Directory scan. A full-name hit is trusted outright; a first-name hit
// is trusted only when exactly one person carries that first name. When
// several people are mentioned, the EARLIEST mention wins — "Lunch with Dev
// and Maya" is a note about Dev. An ambiguous first name (two Sarahs) keeps
// the name for the review screen but refuses to guess WHICH person, so
// matchedId stays null and the user picks.
function matchDirectory(text, people) {
  const dir = (Array.isArray(people) ? people : []).filter(p => p && typeof p.name === 'string' && p.name.trim());
  const mentions = [];
  for (const p of dir) {
    const full = nameIndex(text, p.name);
    if (full !== -1) {
      mentions.push({
        person: p,
        index: full,
        kind: 'full'
      });
      continue;
    }
    const first = nameIndex(text, firstWord(p.name));
    if (first !== -1) mentions.push({
      person: p,
      index: first,
      kind: 'first'
    });
  }
  if (mentions.length === 0) return null;
  mentions.sort((a, b) => a.index - b.index || Number(b.kind === 'full') - Number(a.kind === 'full'));
  const top = mentions[0];
  if (top.kind === 'first') {
    const name = firstWord(top.person.name);
    const carriers = dir.filter(p => firstWord(p.name).toLowerCase() === name.toLowerCase());
    if (carriers.length > 1) return {
      personName: name,
      matchedId: null
    };
  }
  return {
    personName: top.person.name.trim(),
    matchedId: top.person.id ?? null
  };
}

// (b) The QuickCapture STARTERS lead-ins. The name is the 1–3 Capitalized
// words right after the lead-in — punctuation or a lowercase word ends it.
// (Same spirit as recency.js's NOTE_LEAD_RE, but here we want the NAME after
// the lead-in, not the topic.)
const LEAD_IN_RE = /\b(?:(?:coffee|lunch|dinner|drinks|celebrated)[ \t]+with|called|ran[ \t]+into|met(?:[ \t]+up)?(?:[ \t]+with)?|texted|emailed)[ \t]+/gi;
const NAME_AFTER_LEAD_RE = /[A-Z][A-Za-z'’-]*(?:[ \t]+[A-Z][A-Za-z'’-]*){0,2}/y;
function nameFromLeadIn(text) {
  LEAD_IN_RE.lastIndex = 0;
  while ((LEAD_IN_RE.exec(text)) !== null) {
    NAME_AFTER_LEAD_RE.lastIndex = LEAD_IN_RE.lastIndex;
    const n = NAME_AFTER_LEAD_RE.exec(text);
    if (n) return n[0];
  }
  return '';
}

// (c) Last resort: the first Capitalized Pair that is NOT sentence-initial
// ("…my neighbor Jamie Park stopped by"). Sentence-initial caps are just
// sentence case, not evidence of a name, so they don't count.
const PAIR_RE = /\b[A-Z][a-z'’-]+[ \t]+[A-Z][a-z'’-]+/g;
function nameFromPair(text) {
  PAIR_RE.lastIndex = 0;
  let m;
  while ((m = PAIR_RE.exec(text)) !== null) {
    let i = m.index - 1;
    while (i >= 0 && /[ \t"'“”‘’(]/.test(text[i])) i--;
    if (i >= 0 && !/[.!?;\n]/.test(text[i])) return m[0];
  }
  return '';
}

// FOLLOW-UPS — only clauses that OPEN with an explicit action trigger; a
// "send" buried mid-sentence is not a to-do. Clauses split on sentence
// punctuation, commas, or a spaced em dash (the STARTERS voice: "Coffee with
// Maya — ask about Denver"; the spoken voice: "Called Dave, need to send the
// photos"). Commas are safe: a comma clause without a trigger is ignored.
// "Remind me to…"-style lead-ins are stripped so the saved follow-up reads
// as the action itself.
const CLAUSE_SPLIT_RE = /[.!?;,\n]+|\s+—\s+/;
const TRIGGER_RE = /^(?:remind me to|i need to|need to|i should|should|follow up (?:on|with)|ask|send)\s+/i;
const STRIP_RE = /^(?:remind me to|i need to|need to|i should)\s+/i;
function extractFollowUps(text) {
  const out = [];
  const seen = new Set();
  for (const part of text.split(CLAUSE_SPLIT_RE)) {
    const clause = part.trim();
    if (!clause || !TRIGGER_RE.test(clause)) continue;
    const stripped = clause.replace(STRIP_RE, '').trim();
    if (!stripped) continue;
    const phrase = stripped.charAt(0).toUpperCase() + stripped.slice(1);
    if (seen.has(phrase.toLowerCase())) continue;
    seen.add(phrase.toLowerCase());
    out.push(phrase);
    if (out.length === 3) break;
  }
  return out;
}

/**
 * Deterministic on-device parse of a Quick Capture note. Same capture shape
 * as POST /api/parse — name + note + follow-ups only, everything else empty.
 * `people` is the directory ([{ id, name, … }]) used for matching.
 * Never throws: empty/garbage input → an empty-but-well-formed capture.
 */
function localParse(text, opts) {
  let raw = '';
  if (typeof text === 'string') raw = text;else if (text != null) {
    try {
      raw = String(text);
    } catch {/* unstringable → treat as empty */}
  }
  const note = raw.trim();
  const people = opts && opts.people || [];
  let personName = '';
  let matchedId = null;
  if (note) {
    const hit = matchDirectory(note, people);
    if (hit) {
      personName = hit.personName;
      matchedId = hit.matchedId;
    } else {
      personName = nameFromLeadIn(note) || nameFromPair(note);
    }
  }
  return {
    personName,
    matchedId,
    location: null,
    howWeMet: null,
    circleSuggestion: null,
    family: [],
    details: [],
    note,
    followUps: note ? extractFollowUps(note) : [],
    openLoops: [] // AI-only — see header
  };
}

// QuickCapture — editorial voice + text capture.
//
// Two phases:
//   compose  : single unified document — type or dictate. Voice appends.
//              Header reads "● LIVE · 24s" while listening, "NEW NOTE"
//              when idle. Shimmer line at the bottom is the only "we're
//              hot" indicator. No orb, no equalizer.
//   review   : parsed-fields preview before saving.
//
// The mic in the bottom tab bar passes `autoListen` so the recorder
// starts on entry.

const EXAMPLES = ['Coffee with Maya — she got the Stripe offer, dinner next week', 'Lunch with Dev, his daughter starts at BU. He’s hiring a designer.', 'Ran into Sam at the gym — new baby coming in March', 'Called Mom, she’s planning the family reunion for July', 'Drinks with Priya — moving to Austin, ask how the search is going'];

// One-tap lead-ins. Tapping drops a clean opener the parser reads perfectly,
// so all you add is the name + the one thing worth remembering.
const STARTERS = [{
  label: 'Coffee with',
  lead: 'Coffee with'
}, {
  icon: 'phone',
  label: 'Called',
  lead: 'Called'
}, {
  label: 'Ran into',
  lead: 'Ran into'
}, {
  label: 'Dinner with',
  lead: 'Dinner with'
}, {
  label: 'Celebrated',
  lead: 'Celebrated with'
}];
const firstName$2 = name => String(name || '').trim().split(/\s+/)[0] || '';

// Rank who you're most likely logging about right now: people you owe a touch
// (cadence due/overdue) float up, then those you're actively in contact with.
function rankCaptureSuggestions(people, now) {
  return [...(people || [])].map(p => {
    const cad = cadenceStatus(p, now);
    const days = daysSinceTouch(p, now);
    let score = 0;
    if (cad?.state === 'overdue') score += 1000;else if (cad?.state === 'due') score += 600;
    score += Number.isFinite(days) ? Math.max(0, 220 - days) : 0;
    score += Math.min(60, (p.interactions?.length || 0) * 4 + (p.notes?.length || 0) * 3);
    return {
      p,
      score
    };
  }).sort((a, b) => b.score - a.score).slice(0, 8).map(x => x.p);
}

// =========================================================================
// MAIN COMPONENT
// =========================================================================

function QuickCapture({
  people,
  circles,
  onSave,
  autoListen = false,
  aiEnabled = true
}) {
  // phase: 'compose' | 'loading' | 'review' | 'error'
  const [phase, setPhase] = reactExports.useState('compose');
  const [text, setText] = reactExports.useState('');
  const [capture, setCapture] = reactExports.useState(null);
  const [error, setError] = reactExports.useState(null);

  // The self-contained path: deterministic on-device parse (name + note +
  // follow-ups). Nothing is lost — the review screen lets the user fix
  // anything before saving. `_local` drives the review banner copy.
  function parseLocally(reason) {
    const parsed = localParse(text, {
      people
    });
    setCapture({
      ...parsed,
      _local: reason
    });
    setPhase('review');
  }
  async function handleParse() {
    if (!text.trim()) return;
    if (!aiEnabled) {
      parseLocally('off'); // AI parsing disabled in Settings
      return;
    }
    setPhase('loading');
    setError(null);
    try {
      const res = await fetch('/api/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text,
          people: people.map(p => ({
            id: p.id,
            name: p.name,
            location: p.location
          })),
          circles: flattenTree(circles).map(c => getPathString(circles, c.id))
        })
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || `Server error ${res.status}`);
      }
      const {
        capture: parsed
      } = await res.json();
      setCapture(parsed);
      setPhase('review');
    } catch {
      // Server down / offline / no key — degrade gracefully, never dead-end.
      parseLocally('unreachable');
    }
  }
  function handleCancel() {
    setPhase('compose');
    setCapture(null);
    setError(null);
  }
  function handleSaveConfirmed({
    targetPersonId,
    edited
  }) {
    if (targetPersonId === '__new__') {
      const created = createPersonFromCapture(edited, circles);
      onSave({
        kind: 'create',
        person: created
      });
    } else {
      const existing = people.find(p => p.id === targetPersonId);
      if (!existing) return;
      const merged = mergeCaptureIntoPerson(existing, edited, circles);
      onSave({
        kind: 'merge',
        person: merged
      });
    }
    setPhase('compose');
    setText('');
    setCapture(null);
  }
  if (phase === 'loading') return /*#__PURE__*/jsxRuntimeExports.jsx(LoadingPhase, {
    text: text
  });
  if (phase === 'error') return /*#__PURE__*/jsxRuntimeExports.jsx(ErrorPhase, {
    error: error,
    text: text,
    onBack: handleCancel
  });
  if (phase === 'review' && capture) return /*#__PURE__*/jsxRuntimeExports.jsx(ReviewPhase, {
    capture: capture,
    people: people,
    circles: circles,
    originalText: text,
    onCancel: handleCancel,
    onSave: handleSaveConfirmed
  });
  return /*#__PURE__*/jsxRuntimeExports.jsx(ComposePhase, {
    people: people,
    text: text,
    setText: setText,
    onParse: handleParse,
    autoListen: autoListen
  });
}

// =========================================================================
// COMPOSE PHASE — the new editorial design
// =========================================================================

function ComposePhase({
  people,
  text,
  setText,
  onParse,
  autoListen
}) {
  const {
    supported,
    listening,
    toggle,
    start
  } = useDictation(setText);
  const taRef = reactExports.useRef(null);

  // Who you're most likely capturing about — and a fresh example each entry.
  const suggestions = reactExports.useMemo(() => rankCaptureSuggestions(people, Date.now()), [people]);
  const [exampleIdx] = reactExports.useState(() => Math.floor(Math.random() * EXAMPLES.length));

  // Drop a chip's text into the note, then keep the caret where you can type.
  function focusEnd() {
    requestAnimationFrame(() => {
      const ta = taRef.current;
      if (!ta) return;
      ta.focus();
      const n = ta.value.length;
      try {
        ta.setSelectionRange(n, n);
      } catch {}
      ta.scrollTop = ta.scrollHeight;
    });
  }
  function appendSnippet(snippet) {
    setText(prev => {
      const base = (prev || '').replace(/\s+$/, '');
      return (base ? base + ' ' : '') + snippet + ' ';
    });
    focusEnd();
  }

  // Auto-start the recorder when entered via the tab-bar mic.
  // Some browsers require a user gesture; the tab tap propagates.
  reactExports.useEffect(() => {
    if (autoListen && supported) {
      try {
        start();
      } catch {}
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoListen, supported]);

  // Keep the cursor at the end when transcript appends
  reactExports.useEffect(() => {
    if (listening && taRef.current) {
      taRef.current.scrollTop = taRef.current.scrollHeight;
    }
  }, [text, listening]);
  const empty = text.trim().length === 0;
  const status = listening ? /*#__PURE__*/jsxRuntimeExports.jsx(ListeningPill, {}) : /*#__PURE__*/jsxRuntimeExports.jsx("span", {
    style: mutedMonoStyle,
    children: "NEW NOTE"
  });

  // Hardware-keyboard hint (and tighter bottom padding) only make sense on
  // hover/fine-pointer devices.
  const finePointer = typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  // ---- Notepad geometry ----
  // Shared ruled-paper geometry (theme's `notepad` export) — the line rhythm
  // must match the textarea's line-height so text lands ON the lines.
  const {
    LINE_H,
    MARGIN_X,
    TEXT_PAD_LEFT
  } = notepad;
  const HERO_PAD_TOP = 8; // small breathing room above first line

  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      position: 'relative',
      // Fill the whole screen so the notepad spans top→bottom. Viewport
      // units dodge the auto-height parent chain that made minHeight:100%
      // collapse; the 96px reserve clears the floating nav.
      minHeight: 'calc(100dvh - 96px)',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      background: theme.colors.paper
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        padding: '54px 22px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: 60
      },
      children: [status, text.length > 0 && /*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: () => setText(''),
        style: {
          background: 'transparent',
          border: 'none',
          padding: '14px 12px',
          margin: '-14px -12px',
          fontFamily: theme.fonts.mono,
          fontSize: 11,
          fontWeight: 500,
          color: theme.colors.ink3,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          cursor: 'pointer'
        },
        children: "clear"
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        padding: `${HERO_PAD_TOP}px 22px 0 ${MARGIN_X + TEXT_PAD_LEFT}px`,
        flex: 1,
        minHeight: 0,
        display: 'flex',
        position: 'relative',
        // ruled horizontal lines — every LINE_H px under the text baseline
        backgroundImage: `repeating-linear-gradient(
            to bottom,
            transparent 0,
            transparent ${LINE_H - 1}px,
            ${notepad.rule} ${LINE_H - 1}px,
            ${notepad.rule} ${LINE_H}px
          )`,
        backgroundSize: `100% ${LINE_H}px`,
        backgroundPosition: `0 ${HERO_PAD_TOP + LINE_H - 6}px`,
        backgroundAttachment: 'local'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        "aria-hidden": true,
        style: {
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: MARGIN_X,
          width: 1,
          background: notepad.marginLine,
          pointerEvents: 'none'
        }
      }), /*#__PURE__*/jsxRuntimeExports.jsx("textarea", {
        ref: taRef,
        className: "al-capture",
        value: text,
        onChange: e => setText(e.target.value),
        onKeyDown: e => {
          if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) onParse();
        },
        placeholder: " ",
        style: {
          flex: 1,
          width: '100%',
          border: 'none',
          background: 'transparent',
          outline: 'none',
          resize: 'none',
          fontFamily: theme.fonts.serif,
          fontSize: 22,
          lineHeight: `${LINE_H}px`,
          color: theme.colors.ink,
          letterSpacing: -0.2,
          padding: 0
        }
      }), empty && !listening && /*#__PURE__*/jsxRuntimeExports.jsx(PlaceholderHint, {
        left: MARGIN_X + TEXT_PAD_LEFT,
        top: HERO_PAD_TOP,
        lineHeight: LINE_H,
        example: EXAMPLES[exampleIdx]
      }), empty && listening && /*#__PURE__*/jsxRuntimeExports.jsx(ListeningHint, {
        left: MARGIN_X + TEXT_PAD_LEFT,
        top: HERO_PAD_TOP,
        lineHeight: LINE_H
      }), !empty && listening && /*#__PURE__*/jsxRuntimeExports.jsx("span", {
        "aria-hidden": true,
        style: {
          position: 'absolute',
          right: 24,
          bottom: 14,
          width: 2,
          height: 22,
          background: theme.colors.accent,
          animation: 'al-caret 1s steps(2) infinite'
        }
      })]
    }), !listening && text.trim().length < 60 && (empty || suggestions.length > 0) && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      className: "al-pop",
      style: {
        marginTop: 10
      },
      children: [empty && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        className: "al-scroll",
        style: chipRowStyle,
        children: STARTERS.map(s => /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
          className: "al-press",
          onClick: () => appendSnippet(s.lead),
          style: scaffoldChipStyle,
          children: [s.icon && /*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
            name: s.icon,
            size: 13,
            color: theme.colors.ink2,
            style: {
              marginRight: 6
            }
          }), s.label]
        }, s.label))
      }), suggestions.length > 0 && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        className: "al-scroll",
        style: {
          ...chipRowStyle,
          marginTop: empty ? 8 : 0
        },
        children: suggestions.map(p => /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
          className: "al-press",
          onClick: () => appendSnippet(firstName$2(p.name)),
          style: personChipStyle,
          "aria-label": `Add ${p.name} to the note`,
          children: [/*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
            name: p.name,
            photo: p.photo,
            size: 22
          }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
            style: {
              marginLeft: 7
            },
            children: firstName$2(p.name)
          })]
        }, p.id))
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      "aria-hidden": true,
      style: {
        margin: '12px 22px 0',
        height: 2,
        borderRadius: 2,
        background: listening ? `linear-gradient(90deg, transparent 0%, transparent 30%, ${theme.colors.accent} 50%, transparent 70%, transparent 100%)` : 'transparent',
        backgroundSize: '60% 100%',
        backgroundRepeat: 'no-repeat',
        animation: listening ? 'al-shimmer 2.2s ease-in-out infinite' : 'none',
        opacity: listening ? 1 : 0,
        transition: 'opacity 200ms ease'
      }
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        padding: finePointer ? '14px 22px 18px' : '14px 22px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(MicToggle, {
        supported: supported,
        listening: listening,
        onClick: toggle
      }), /*#__PURE__*/jsxRuntimeExports.jsx(ParseButton, {
        disabled: empty,
        onClick: onParse
      })]
    }), finePointer && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        ...microLabel,
        padding: '0 22px 10px'
      },
      children: "\u2318\u21B5 to parse"
    })]
  });
}

// ----- Sub-pieces of Compose phase -----

const mutedMonoStyle = {
  fontFamily: theme.fonts.mono,
  fontSize: 10,
  color: theme.colors.ink3,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6
};

// Horizontally-scrolling chip rail (scrollbar hidden via .al-scroll).
const chipRowStyle = {
  display: 'flex',
  gap: 8,
  overflowX: 'auto',
  padding: '0 22px',
  WebkitOverflowScrolling: 'touch'
};
const scaffoldChipStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  flexShrink: 0,
  minHeight: 32,
  boxSizing: 'border-box',
  padding: '7px 14px',
  borderRadius: theme.radii.pill,
  border: `1px solid ${theme.colors.rule}`,
  background: theme.colors.card,
  color: theme.colors.ink,
  fontFamily: theme.fonts.serif,
  fontSize: 14,
  cursor: 'pointer'
};
const personChipStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  flexShrink: 0,
  minHeight: 32,
  boxSizing: 'border-box',
  padding: '5px 14px 5px 5px',
  borderRadius: theme.radii.pill,
  border: `1px solid ${theme.colors.rule}`,
  background: theme.colors.card,
  color: theme.colors.ink,
  fontFamily: theme.fonts.serif,
  fontSize: 14,
  cursor: 'pointer'
};
function ListeningPill() {
  const [secs, setSecs] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => setSecs(Math.floor((Date.now() - start) / 1000)), 1000);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
    style: {
      ...mutedMonoStyle,
      color: theme.colors.accent
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: theme.colors.accent,
        animation: 'al-caret 1s steps(2) infinite'
      }
    }), "LIVE \xB7 ", secs, "s"]
  });
}
function PlaceholderHint({
  left = 22,
  top = 22,
  lineHeight = 32,
  example
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      left,
      top,
      right: 22,
      fontFamily: theme.fonts.serif,
      fontStyle: 'italic',
      fontSize: 22,
      lineHeight: `${lineHeight}px`,
      color: theme.colors.ink4,
      pointerEvents: 'none',
      letterSpacing: -0.2
    },
    children: ["What happened?", /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 16,
        fontFamily: theme.fonts.sans,
        fontSize: 13,
        fontStyle: 'normal',
        color: theme.colors.ink3,
        lineHeight: 1.55,
        letterSpacing: 0
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
        style: {
          ...microLabel,
          color: theme.colors.ink4,
          marginRight: 7
        },
        children: "Try"
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
        style: {
          fontStyle: 'italic',
          color: theme.colors.ink2
        },
        children: ["\u201C", example, "\u201D"]
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          marginTop: 12,
          color: theme.colors.ink3
        },
        children: "Tap a name below to start, or just talk \u2014 I\u2019ll sort it when you hit Parse."
      })]
    })]
  });
}
function ListeningHint({
  left = 22,
  top = 22,
  lineHeight = 32
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      left,
      top,
      right: 22,
      fontFamily: theme.fonts.serif,
      fontStyle: 'italic',
      fontSize: 22,
      lineHeight: `${lineHeight}px`,
      color: theme.colors.ink4,
      pointerEvents: 'none',
      letterSpacing: -0.2,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    },
    children: ["Listening\u2026", /*#__PURE__*/jsxRuntimeExports.jsx("span", {
      style: {
        width: 2,
        height: 22,
        background: theme.colors.accent,
        animation: 'al-caret 1s steps(2) infinite'
      }
    })]
  });
}
function MicToggle({
  supported,
  listening,
  onClick
}) {
  if (!supported) {
    return /*#__PURE__*/jsxRuntimeExports.jsx("span", {
      style: {
        ...mutedMonoStyle,
        opacity: 0.6
      },
      children: "VOICE UNSUPPORTED \xB7 TYPE"
    });
  }
  return /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 14px 8px 10px',
      borderRadius: theme.radii.pill,
      border: listening ? `1px solid ${theme.colors.accent}` : `1px solid ${theme.colors.rule}`,
      background: listening ? theme.colors.accent : theme.colors.card,
      color: listening ? theme.colors.onAccent : theme.colors.ink,
      fontFamily: theme.fonts.serif,
      fontSize: 14,
      cursor: 'pointer',
      transition: 'background 150ms, border-color 150ms, color 150ms'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
      style: {
        width: 26,
        height: 26,
        borderRadius: '50%',
        background: listening ? 'rgba(255,255,255,0.18)' : theme.colors.paper,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: listening ? theme.colors.onAccent : theme.colors.accent
      },
      children: /*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
        name: "mic",
        size: 14
      })
    }), listening ? 'Stop' : 'Dictate']
  });
}
function ParseButton({
  disabled,
  onClick
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
    onClick: onClick,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '12px 20px',
      minHeight: 44,
      borderRadius: theme.radii.pill,
      border: 'none',
      background: disabled ? theme.colors.ruleStrong : theme.colors.ink,
      color: theme.colors.paper,
      fontFamily: theme.fonts.serif,
      fontSize: 15,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      transition: 'opacity 150ms'
    },
    children: ["Parse", /*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
      name: "arrow",
      size: 13
    })]
  });
}

// =========================================================================
// LOADING + ERROR
// =========================================================================

function LoadingPhase({
  text
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      padding: '54px 22px 0',
      background: theme.colors.paper,
      minHeight: '100%'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
      style: {
        ...mutedMonoStyle,
        color: theme.colors.accent
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(ShimmerDot, {}), " PARSING"]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 18,
        fontFamily: theme.fonts.serif,
        fontStyle: 'italic',
        fontSize: 22,
        color: theme.colors.ink2,
        lineHeight: 1.45,
        letterSpacing: -0.2,
        whiteSpace: 'pre-wrap'
      },
      children: ["\"", text, "\""]
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        margin: '24px 0',
        height: 2,
        background: `linear-gradient(90deg, transparent 0%, transparent 30%, ${theme.colors.accent} 50%, transparent 70%, transparent 100%)`,
        backgroundSize: '60% 100%',
        backgroundRepeat: 'no-repeat',
        borderRadius: 2,
        animation: 'al-shimmer 1.6s ease-in-out infinite'
      }
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        fontFamily: theme.fonts.serif,
        fontSize: 14,
        fontStyle: 'italic',
        color: theme.colors.ink3
      },
      children: "Reading your note\u2026"
    })]
  });
}
function ShimmerDot() {
  return /*#__PURE__*/jsxRuntimeExports.jsx("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: theme.colors.accent,
      animation: 'al-caret 1s steps(2) infinite',
      marginRight: 6,
      display: 'inline-block'
    }
  });
}
function ErrorPhase({
  error,
  text,
  onBack
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      padding: '54px 22px 0'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
      style: {
        ...mutedMonoStyle,
        color: theme.colors.danger
      },
      children: "SOMETHING WENT WRONG"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginTop: 12,
        fontFamily: theme.fonts.serif,
        fontStyle: 'italic',
        fontSize: 18,
        color: theme.colors.ink,
        lineHeight: 1.4
      },
      children: error
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("details", {
      style: {
        marginTop: 14,
        color: theme.colors.ink3,
        fontSize: 13
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("summary", {
        style: {
          cursor: 'pointer',
          fontFamily: theme.fonts.mono,
          fontSize: 10,
          letterSpacing: '0.12em',
          textTransform: 'uppercase'
        },
        children: "Show original"
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("p", {
        style: {
          marginTop: 6,
          padding: 12,
          background: theme.colors.card,
          border: `1px solid ${theme.colors.rule}`,
          borderRadius: 8,
          fontFamily: theme.fonts.serif,
          fontStyle: 'italic',
          fontSize: 13,
          color: theme.colors.ink2,
          lineHeight: 1.45,
          whiteSpace: 'pre-wrap'
        },
        children: ["\"", text, "\""]
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginTop: 24
      },
      children: /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
        onClick: onBack,
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          padding: '10px 18px',
          borderRadius: theme.radii.pill,
          border: `1px solid ${theme.colors.rule}`,
          background: theme.colors.card,
          color: theme.colors.ink,
          fontFamily: theme.fonts.serif,
          fontSize: 14,
          cursor: 'pointer'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
          name: "chevronLeft",
          size: 13
        }), "Back"]
      })
    })]
  });
}

// =========================================================================
// REVIEW PHASE — fields editable, "Save to" dropdown
// =========================================================================

function ReviewPhase({
  capture,
  people,
  circles,
  originalText,
  onCancel,
  onSave
}) {
  const [edited, setEdited] = reactExports.useState(() => ({
    personName: capture.personName || '',
    location: capture.location || '',
    howWeMet: capture.howWeMet || '',
    circleSuggestion: capture.circleSuggestion || '',
    family: capture.family || [],
    details: capture.details || [],
    note: capture.note || '',
    followUps: capture.followUps || [],
    openLoops: capture.openLoops || []
  }));
  const [targetId, setTargetId] = reactExports.useState(capture.matchedId && people.find(p => p.id === capture.matchedId) ? capture.matchedId : '__new__');
  reactExports.useMemo(() => targetId === '__new__' ? null : people.find(p => p.id === targetId), [targetId, people]);
  function update(field, value) {
    setEdited(e => ({
      ...e,
      [field]: value
    }));
  }
  function updateFamily(i, k, v) {
    setEdited(e => ({
      ...e,
      family: e.family.map((f, j) => i === j ? {
        ...f,
        [k]: v
      } : f)
    }));
  }
  function removeFamily(i) {
    setEdited(e => ({
      ...e,
      family: e.family.filter((_, j) => j !== i)
    }));
  }
  function addFamily() {
    setEdited(e => ({
      ...e,
      family: [...e.family, {
        name: '',
        relation: ''
      }]
    }));
  }
  function updateDetail(i, v) {
    setEdited(e => ({
      ...e,
      details: e.details.map((s, j) => i === j ? v : s)
    }));
  }
  function removeDetail(i) {
    setEdited(e => ({
      ...e,
      details: e.details.filter((_, j) => j !== i)
    }));
  }
  function addDetail() {
    setEdited(e => ({
      ...e,
      details: [...e.details, '']
    }));
  }
  function updateFollowUp(i, v) {
    setEdited(e => ({
      ...e,
      followUps: e.followUps.map((s, j) => i === j ? v : s)
    }));
  }
  function removeFollowUp(i) {
    setEdited(e => ({
      ...e,
      followUps: e.followUps.filter((_, j) => j !== i)
    }));
  }
  function addFollowUp() {
    setEdited(e => ({
      ...e,
      followUps: [...e.followUps, '']
    }));
  }
  function updateOpenLoop(i, k, v) {
    setEdited(e => ({
      ...e,
      openLoops: e.openLoops.map((l, j) => i === j ? {
        ...l,
        [k]: v
      } : l)
    }));
  }
  function removeOpenLoop(i) {
    setEdited(e => ({
      ...e,
      openLoops: e.openLoops.filter((_, j) => j !== i)
    }));
  }
  function addOpenLoop() {
    setEdited(e => ({
      ...e,
      openLoops: [...e.openLoops, {
        text: '',
        kind: 'thread',
        expectedBy: null
      }]
    }));
  }
  function handleSave() {
    const cleaned = {
      personName: (edited.personName || '').trim(),
      matchedId: targetId === '__new__' ? null : targetId,
      location: (edited.location || '').trim() || null,
      howWeMet: (edited.howWeMet || '').trim() || null,
      circleSuggestion: edited.circleSuggestion || null,
      family: edited.family.map(f => ({
        name: (f.name || '').trim(),
        relation: (f.relation || '').trim()
      })).filter(f => f.name && f.relation),
      details: edited.details.map(s => s.trim()).filter(Boolean),
      note: (edited.note || '').trim(),
      followUps: edited.followUps.map(s => s.trim()).filter(Boolean),
      openLoops: edited.openLoops.map(l => ({
        text: (l.text || '').trim(),
        kind: l.kind || 'thread',
        expectedBy: l.expectedBy || null
      })).filter(l => l.text)
    };
    if (targetId === '__new__' && !cleaned.personName) {
      alert('Please give them a name.');
      return;
    }
    onSave({
      targetPersonId: targetId,
      edited: cleaned
    });
  }
  const labelStyle = {
    ...microLabel,
    marginBottom: 6
  };
  const inputStyle = {
    width: '100%',
    padding: '10px 12px',
    fontFamily: theme.fonts.sans,
    fontSize: 16,
    background: theme.colors.paper,
    border: `1px solid ${theme.colors.rule}`,
    borderRadius: 8,
    outline: 'none',
    color: theme.colors.ink
  };
  const cardStyle = {
    background: theme.colors.card,
    border: `1px solid ${theme.colors.rule}`,
    borderRadius: theme.radii.lg,
    padding: 16
  };
  const matchedName = targetId !== '__new__' && people.find(p => p.id === targetId)?.name;
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      padding: '54px 22px 24px'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      },
      children: /*#__PURE__*/jsxRuntimeExports.jsx("span", {
        style: {
          ...mutedMonoStyle
        },
        children: "READY TO SAVE"
      })
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        fontFamily: theme.fonts.serif,
        fontSize: 22,
        fontWeight: 500,
        marginTop: 8,
        letterSpacing: -0.3,
        lineHeight: 1.2
      },
      children: ["Save this to", ' ', /*#__PURE__*/jsxRuntimeExports.jsx("span", {
        style: {
          color: theme.colors.accent
        },
        children: matchedName || 'a new person'
      }), "."]
    }), capture._local && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginTop: 10,
        padding: '9px 12px',
        borderRadius: theme.radii.md,
        background: theme.colors.accentSofter,
        fontFamily: theme.fonts.sans,
        fontSize: 13,
        color: theme.colors.ink2,
        lineHeight: 1.45
      },
      children: capture._local === 'off' ? 'Sorted on device — AI parsing is off. Edit anything before saving.' : 'Sorted on device — the AI parser wasn’t reachable. Edit anything before saving.'
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 16,
        ...cardStyle
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: labelStyle,
        children: "YOU SAID"
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          fontFamily: theme.fonts.serif,
          fontStyle: 'italic',
          fontSize: 14,
          color: theme.colors.ink,
          lineHeight: 1.5
        },
        children: ["\"", originalText, "\""]
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 16,
        ...cardStyle
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: labelStyle,
        children: "SAVE TO"
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("select", {
        value: targetId,
        onChange: e => setTargetId(e.target.value),
        style: {
          ...inputStyle,
          appearance: 'auto',
          cursor: 'pointer'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("option", {
          value: "__new__",
          children: ["+ New person (", edited.personName || 'unnamed', ")"]
        }), people.map(p => /*#__PURE__*/jsxRuntimeExports.jsxs("option", {
          value: p.id,
          children: [p.name, p.location ? ` — ${p.location}` : '']
        }, p.id))]
      }), capture.matchedId && targetId === capture.matchedId && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          marginTop: 6,
          fontSize: 12,
          color: theme.colors.success,
          fontFamily: theme.fonts.serif,
          fontStyle: 'italic'
        },
        children: ["\u2713 ", capture._local ? 'Matched from your directory:' : 'Claude thinks this is', ' ', people.find(p => p.id === capture.matchedId)?.name, "."]
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 16,
        ...cardStyle,
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      },
      children: [targetId === '__new__' && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: labelStyle,
          children: "NAME"
        }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
          value: edited.personName,
          onChange: e => update('personName', e.target.value),
          style: inputStyle
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: labelStyle,
          children: "LOCATION"
        }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
          value: edited.location,
          onChange: e => update('location', e.target.value),
          placeholder: "e.g., Newton, MA",
          style: inputStyle
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: labelStyle,
          children: "HOW WE MET"
        }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
          value: edited.howWeMet,
          onChange: e => update('howWeMet', e.target.value),
          placeholder: "e.g., Erik's hockey team",
          style: inputStyle
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: labelStyle,
          children: "CIRCLE"
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("select", {
          value: edited.circleSuggestion || '',
          onChange: e => update('circleSuggestion', e.target.value),
          style: {
            ...inputStyle,
            appearance: 'auto',
            cursor: 'pointer'
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx("option", {
            value: "",
            children: "\u2014 None \u2014"
          }), flattenTree(circles).map(c => {
            const path = getPathString(circles, c.id);
            return /*#__PURE__*/jsxRuntimeExports.jsx("option", {
              value: path,
              children: path
            }, c.id);
          })]
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsx(FieldList, {
        label: "FAMILY",
        empty: "No family mentioned.",
        items: edited.family,
        onAdd: addFamily,
        renderItem: (f, i) => /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            display: 'flex',
            gap: 6
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx("input", {
            value: f.name,
            onChange: e => updateFamily(i, 'name', e.target.value),
            placeholder: "Name",
            style: {
              ...inputStyle,
              flex: 2
            }
          }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
            value: f.relation,
            onChange: e => updateFamily(i, 'relation', e.target.value),
            placeholder: "Relation",
            style: {
              ...inputStyle,
              flex: 1
            }
          }), /*#__PURE__*/jsxRuntimeExports.jsx(RemoveBtn, {
            onClick: () => removeFamily(i)
          })]
        }, i)
      }), /*#__PURE__*/jsxRuntimeExports.jsx(FieldList, {
        label: "DETAILS",
        empty: "No details mentioned.",
        items: edited.details,
        onAdd: addDetail,
        renderItem: (d, i) => /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            display: 'flex',
            gap: 6
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx("input", {
            value: d,
            onChange: e => updateDetail(i, e.target.value),
            style: {
              ...inputStyle,
              flex: 1
            }
          }), /*#__PURE__*/jsxRuntimeExports.jsx(RemoveBtn, {
            onClick: () => removeDetail(i)
          })]
        }, i)
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: labelStyle,
          children: "NOTE (added to timeline)"
        }), /*#__PURE__*/jsxRuntimeExports.jsx("textarea", {
          value: edited.note,
          onChange: e => update('note', e.target.value),
          rows: 4,
          style: {
            ...inputStyle,
            resize: 'vertical',
            minHeight: 80,
            lineHeight: 1.5,
            fontFamily: theme.fonts.serif,
            fontSize: 16
          }
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsx(FieldList, {
        label: "FOLLOW-UPS",
        empty: "No follow-ups mentioned.",
        items: edited.followUps,
        onAdd: addFollowUp,
        renderItem: (f, i) => /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            display: 'flex',
            gap: 6
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx("input", {
            value: f,
            onChange: e => updateFollowUp(i, e.target.value),
            style: {
              ...inputStyle,
              flex: 1
            }
          }), /*#__PURE__*/jsxRuntimeExports.jsx(RemoveBtn, {
            onClick: () => removeFollowUp(i)
          })]
        }, i)
      }), /*#__PURE__*/jsxRuntimeExports.jsx(FieldList, {
        label: "OPEN LOOPS",
        empty: "No open loops mentioned.",
        items: edited.openLoops,
        onAdd: addOpenLoop,
        caption: "Circles will remind you when these are ready to ask about.",
        renderItem: (l, i) => /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            display: 'flex',
            gap: 6
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx("input", {
            value: l.text,
            onChange: e => updateOpenLoop(i, 'text', e.target.value),
            style: {
              ...inputStyle,
              flex: 1
            }
          }), /*#__PURE__*/jsxRuntimeExports.jsxs("select", {
            value: l.kind,
            onChange: e => updateOpenLoop(i, 'kind', e.target.value),
            style: {
              ...inputStyle,
              width: 'auto',
              appearance: 'auto',
              cursor: 'pointer'
            },
            children: [/*#__PURE__*/jsxRuntimeExports.jsx("option", {
              value: "promise",
              children: "You promised"
            }), /*#__PURE__*/jsxRuntimeExports.jsx("option", {
              value: "waiting",
              children: "Waiting on them"
            }), /*#__PURE__*/jsxRuntimeExports.jsx("option", {
              value: "thread",
              children: "Open thread"
            })]
          }), /*#__PURE__*/jsxRuntimeExports.jsx(RemoveBtn, {
            onClick: () => removeOpenLoop(i)
          })]
        }, i)
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 20,
        display: 'flex',
        gap: 10,
        position: 'sticky',
        bottom: 0,
        padding: '12px 0',
        background: theme.colors.paper
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: onCancel,
        style: {
          flex: 1,
          padding: '12px 18px',
          borderRadius: theme.radii.pill,
          border: `1px solid ${theme.colors.rule}`,
          background: theme.colors.card,
          fontFamily: theme.fonts.serif,
          fontSize: 14,
          color: theme.colors.ink,
          cursor: 'pointer'
        },
        children: "Back to note"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: handleSave,
        style: {
          flex: 2,
          padding: '12px 20px',
          minHeight: 44,
          borderRadius: theme.radii.pill,
          background: theme.colors.ink,
          color: theme.colors.paper,
          border: 'none',
          fontFamily: theme.fonts.serif,
          fontSize: 15,
          cursor: 'pointer'
        },
        children: targetId === '__new__' ? `Create ${edited.personName || 'person'}` : `Save to ${matchedName}`
      })]
    })]
  });
}
function FieldList({
  label,
  empty,
  items,
  onAdd,
  renderItem,
  caption
}) {
  const labelStyle = {
    ...microLabel
  };
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: labelStyle,
        children: label
      }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: onAdd,
        style: {
          background: 'transparent',
          border: 'none',
          color: theme.colors.ink3,
          fontFamily: theme.fonts.mono,
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          padding: '14px 12px',
          margin: '-14px -12px'
        },
        children: "+ ADD"
      })]
    }), caption && items && items.length > 0 && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        fontFamily: theme.fonts.sans,
        fontSize: 12,
        color: theme.colors.ink3,
        marginBottom: 6
      },
      children: caption
    }), !items || items.length === 0 ? /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        fontFamily: theme.fonts.serif,
        fontStyle: 'italic',
        fontSize: 13,
        color: theme.colors.ink3
      },
      children: empty
    }) : /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      },
      children: items.map((item, i) => renderItem(item, i))
    })]
  });
}
function RemoveBtn({
  onClick
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsx("button", {
    onClick: onClick,
    "aria-label": "Remove",
    style: {
      background: 'transparent',
      border: 'none',
      color: theme.colors.ink3,
      fontSize: 18,
      width: 44,
      height: 44,
      padding: 0,
      margin: '0 -10px',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer'
    },
    children: "\xD7"
  });
}

// THE filter/toggle chip. One voice for every selectable chip row in the app
// (range pickers, circle filters, still-true prompts, import filters).
//
//   inactive : transparent bg · 1px rule border · ink2
//   active   : ink bg · ink border · paper text  (never accent — accent tint
//              means "suggested, not chosen")
//
// Mono 10 / 0.12em uppercase, 32px min height, pill.

function Chip({
  active = false,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsx("button", {
    type: "button",
    "aria-pressed": active,
    ...rest,
    className: `al-press${rest.className ? ` ${rest.className}` : ''}`,
    style: {
      fontFamily: theme.fonts.mono,
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: theme.tracking.label,
      textTransform: 'uppercase',
      padding: '8px 14px',
      minHeight: 32,
      borderRadius: theme.radii.pill,
      border: `1px solid ${active ? theme.colors.ink : theme.colors.rule}`,
      background: active ? theme.colors.ink : 'transparent',
      color: active ? theme.colors.paper : theme.colors.ink2,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      transition: 'background 120ms ease, border-color 120ms ease, color 120ms ease',
      ...(style || {})
    },
    children: children
  });
}

// Circles logo lockups — the orange ring + person silhouette mark,
// optionally paired with the "Circles" wordmark.
//
//   "full"       — splash size. Mark stacked over wordmark + tagline.
//   "horizontal" — header size. Mark inline with wordmark to its right.
//   "mark"       — tiny app-icon. Just the mark, no text.
//
// We use the v4 mark file so old teal/navy renders never come back from
// browser cache.

// Relative on purpose: resolves at the domain root (dev, Capacitor) AND
// under a subpath (GitHub Pages /circles-site/app/).
const LOGO_MARK = './circles-logo-mark-v4.png';

// Wordmark colors resolve to the theme CSS variables so the lockup adapts to
// dark mode (the mark image itself is the same orange in both themes).
const INK = 'var(--c-ink)';
const MUTED = 'var(--c-ink3)';
const DEFAULT_SIZES = {
  full: 180,
  horizontal: 40,
  mark: 80
};
function CirclesLogo({
  size,
  lockup = 'full',
  style
}) {
  const dim = size || DEFAULT_SIZES[lockup] || 80;
  if (lockup === 'mark') {
    return /*#__PURE__*/jsxRuntimeExports.jsx("img", {
      src: LOGO_MARK,
      alt: "Circles",
      width: dim,
      height: dim,
      style: {
        display: 'block',
        objectFit: 'contain',
        flexShrink: 0,
        ...(style || {})
      }
    });
  }
  if (lockup === 'horizontal') {
    return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: Math.round(dim * 0.22),
        ...(style || {})
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("img", {
        src: LOGO_MARK,
        alt: "",
        width: dim,
        height: dim,
        style: {
          display: 'block',
          objectFit: 'contain',
          flexShrink: 0
        }
      }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
        style: {
          fontFamily: '"Crimson Pro", Georgia, serif',
          fontSize: Math.round(dim * 0.7),
          fontWeight: 600,
          color: INK,
          letterSpacing: '-0.01em',
          lineHeight: 1
        },
        children: "Circles"
      })]
    });
  }

  // "full" — splash lockup, mark stacked over wordmark
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: Math.round(dim * 0.08),
      ...(style || {})
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("img", {
      src: LOGO_MARK,
      alt: "",
      width: dim,
      height: dim,
      style: {
        display: 'block',
        objectFit: 'contain',
        flexShrink: 0
      }
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        fontFamily: '"Crimson Pro", Georgia, serif',
        fontSize: Math.round(dim * 0.28),
        fontWeight: 600,
        color: INK,
        letterSpacing: '-0.01em',
        lineHeight: 1
      },
      children: "Circles"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        fontFamily: '"Inter", system-ui, sans-serif',
        fontSize: Math.round(dim * 0.085),
        fontWeight: 500,
        color: MUTED,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        marginTop: Math.round(dim * 0.02)
      },
      children: "Relationship Almanac"
    })]
  });
}

// Phase 3 — self-aging decay flags.
//
// Walks every person's details[] looking for facts that have aged past
// the freshness threshold. A "stale" detail is one whose confirmedAt
// (or learnedAt if there's no confirmedAt) is older than 180 days.
//
// Gates:
//   1. Detail must be the object shape ({id, text, learnedAt, confirmedAt}).
//      Plain strings are legacy or fresh — skip.
//   2. confirmedAt (or learnedAt) is older than DECAY_DAYS.
//   3. One prompt per person per pass — avoid swarm if a person has many
//      stale facts.
//
// Output is sorted oldest-first so the most aged facts surface earliest.

const DECAY_DAYS = 180;
const DECAY_MS = DECAY_DAYS * 24 * 60 * 60 * 1000;
function isStaleDetail(detail, now = Date.now()) {
  if (!detail || typeof detail !== 'object') return false;
  const stamp = detail.confirmedAt || detail.learnedAt;
  if (!stamp) return false;
  const ms = Date.parse(stamp);
  if (Number.isNaN(ms)) return false;
  return now - ms >= DECAY_MS;
}
function gatherStillTrueCandidates(people, opts = {}) {
  const now = opts.now || Date.now();
  const max = opts.max ?? 2; // cap surface area
  const out = [];
  if (!Array.isArray(people)) return out;
  for (const p of people) {
    const stale = (p.details || []).filter(d => isStaleDetail(d, now));
    if (stale.length === 0) continue;
    // Pick the oldest stale detail for this person — one prompt per
    // person so the section doesn't get swamped.
    stale.sort((a, b) => Date.parse(a.confirmedAt || a.learnedAt) - Date.parse(b.confirmedAt || b.learnedAt));
    const top = stale[0];
    out.push({
      key: `still-${p.id}-${top.id}`,
      person: p,
      detail: top,
      ageMs: now - Date.parse(top.confirmedAt || top.learnedAt)
    });
  }

  // Oldest-first across people too
  out.sort((a, b) => b.ageMs - a.ageMs);
  return out.slice(0, max);
}

/** Returns a relative-time string like "8mo ago" / "2y ago". */
function relativeAge(ms) {
  const days = Math.floor(ms / 86_400_000);
  if (days < 60) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  const years = Math.floor(months / 12);
  return years === 1 ? '1y ago' : `${years}y ago`;
}

// outreach.js — the Loop Closer: after a call/text/email quick action, ask
// "did you connect?" at the right moment on Today.
//
// Tapping a quick action only proves intent — the call may have gone to
// voicemail, the text may still be unanswered. So we remember the attempt in
// settings.pendingCallRecaps (legacy key, kept for existing data; old rows
// predate channels and mean 'call') and surface a recap prompt once an answer
// is plausible: a call has an outcome immediately, a text/email needs time for
// a reply (20h), and everything goes quiet after 4 days — a stale "did they
// text back?" is nagging, not helpful. Pure + deterministic given `now`.

const RIPE_AFTER_HOURS = {
  call: 0,
  text: 20,
  email: 20
};
const EXPIRE_AFTER_HOURS = 96;
const MAX_PROMPTS = 2;
const HOUR = 3_600_000;
const CHANNELS = new Set(['call', 'text', 'email']);

// Calendar-day key in UTC — deterministic in every timezone, and the rare
// near-midnight miss only means one extra (capped) prompt, never a lost one.
function dayKey$1(ts) {
  return new Date(ts).toISOString().slice(0, 10);
}

/**
 * Clean a stored pendingCallRecaps list: legacy rows lack `channel` (they
 * predate texts/emails and were always calls) → default to 'call'; rows with
 * no personId, an unusable timestamp, or an unknown channel are dropped.
 */
function normalizeOutreach(list) {
  const out = [];
  for (const e of Array.isArray(list) ? list : []) {
    if (!e || !e.personId || !Number.isFinite(e.ts)) continue;
    const channel = e.channel == null ? 'call' : e.channel;
    if (!CHANNELS.has(channel)) continue;
    out.push({
      personId: e.personId,
      ts: e.ts,
      channel
    });
  }
  return out;
}

/**
 * Record an outreach attempt → new array (input untouched).
 * Tapping "call Dave" twice in one day is one loop, not two, so a same-day
 * entry for the same person+channel is replaced. The list is capped at
 * MAX_PENDING, dropping the oldest — beyond that these are stale anyway.
 */
function recordOutreach(list, {
  personId,
  channel,
  now = Date.now()
}) {
  const today = dayKey$1(now);
  const kept = normalizeOutreach(list).filter(e => !(e.personId === personId && e.channel === channel && dayKey$1(e.ts) === today));
  kept.push({
    personId,
    ts: now,
    channel
  });
  kept.sort((a, b) => a.ts - b.ts);
  return kept.slice(-20);
}

/**
 * The recap prompts worth showing right now, oldest first, at most
 * MAX_PROMPTS — Today should ask one good question, not run a survey.
 * Returns [{ entry, person, prompt, ageHours }]. An entry is ripe once its
 * channel's wait has passed, expires entirely at EXPIRE_AFTER_HOURS, and is
 * dropped if the person has since been deleted.
 */
function ripeOutreach(list, people, now = Date.now()) {
  const byId = new Map((Array.isArray(people) ? people : []).map(p => [p.id, p]));
  const ripe = [];
  for (const entry of normalizeOutreach(list)) {
    const person = byId.get(entry.personId);
    if (!person) continue;
    const ageHours = (now - entry.ts) / HOUR;
    if (ageHours < RIPE_AFTER_HOURS[entry.channel]) continue;
    if (ageHours >= EXPIRE_AFTER_HOURS) continue;
    ripe.push({
      entry,
      person,
      prompt: outreachPrompt(person, entry.channel),
      ageHours
    });
  }
  ripe.sort((a, b) => a.entry.ts - b.entry.ts);
  return ripe.slice(0, MAX_PROMPTS);
}

/** The recap question for a channel, phrased around the person's first name. */
function outreachPrompt(person, channel) {
  const first = String(person?.name || '').trim().split(/\s+/)[0] || 'them';
  if (channel === 'text') return `Did ${first} text back?`;
  if (channel === 'email') return `Did ${first} get back to you?`;
  return `How was the call with ${first}?`;
}

/**
 * Drop pending recaps for a person → new array. With a channel, only that
 * loop closes; with null, all of them (e.g. the person was deleted, or one
 * real conversation answered everything).
 */
function clearOutreach(list, personId, channel = null) {
  return normalizeOutreach(list).filter(e => !(e.personId === personId && (channel === null || e.channel === channel)));
}

// dailyDeal.js — the finite morning hand.
//
// Today's Relationship Intelligence stack could grow unbounded — nine cards
// deep on a busy week — which turns a ritual into a feed. The Daily Deal caps
// the day at THREE dealt cards, stable all day (persisted as
// settings.dailyDeal = { day, dealt: [keys] }), and when the hand is cleared
// the app says "that's it for today" and means it. Honest-design twist on the
// daily-game mechanic: completion, not streaks; the rest of the stack stays
// one tap away behind "show waiting", never rationed by force.
//
// Pure + deterministic: the hand for a given (day, candidate pool) is always
// the same — a seeded pick, mixing tiers so the hand isn't three birthdays.

const HAND_SIZE = 3;

/** Local calendar day key, 'YYYY-MM-DD' — the deal resets at local midnight. */
function dayKey(now = Date.now()) {
  const d = new Date(now);
  const p = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

// Small deterministic hash → 32-bit seed.
function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

// Mulberry32 — tiny seeded PRNG, plenty for shuffling a card pool.
function rng(seed) {
  let a = seed;
  return () => {
    a |= 0;
    a = a + 0x6d2b79f5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

/**
 * Deal a hand from the candidate pool.
 *
 * candidates: [{ key, tier }] in PRIORITY order (recaps first … reconnects
 * last). Selection rules:
 *   1. The top-priority candidate always makes the hand — the day's one
 *      must-see is never shuffled away.
 *   2. Remaining slots are filled by a day-seeded shuffle that prefers
 *      UNREPRESENTED tiers (variety: a loop + a birthday + a reconnect beats
 *      three loops), falling back to already-used tiers when the pool is thin.
 *
 * exclude: keys never to deal again today (already dealt & acted on) — used
 * by the top-up path so a cleared card isn't replaced by its neighbour.
 */
function dealHand(candidates, {
  day,
  size = HAND_SIZE,
  exclude = []
} = {}) {
  const skip = new Set(exclude);
  const pool = (candidates || []).filter(c => c && c.key && !skip.has(c.key));
  if (pool.length === 0) return [];
  const hand = [pool[0]];
  const usedTiers = new Set([pool[0].tier]);
  const rest = pool.slice(1);

  // Seeded shuffle of the remainder — stable for the whole day.
  const rand = rng(hash(String(day || '')));
  const shuffled = [...rest];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Variety pass: new tiers first…
  for (const c of shuffled) {
    if (hand.length >= size) break;
    if (!usedTiers.has(c.tier)) {
      hand.push(c);
      usedTiers.add(c.tier);
    }
  }
  // …then anything, in shuffled order.
  for (const c of shuffled) {
    if (hand.length >= size) break;
    if (!hand.includes(c)) hand.push(c);
  }
  return hand.map(c => c.key);
}

/**
 * Reconcile the persisted deal with today's live pool.
 * Returns { day, dealt, changed } — `changed` true when the caller should
 * persist (new day, or a top-up because the morning pool was thin).
 *
 *   - New day (or no record): deal fresh.
 *   - Same day, hand below size, and undealt candidates exist: top up —
 *     WITHOUT replacing cards the user already cleared (they stay in `dealt`
 *     as spent slots; done-ness is judged elsewhere against the live pool).
 */
function reconcileDeal(prev, candidates, {
  now = Date.now(),
  size = HAND_SIZE
} = {}) {
  const day = dayKey(now);
  if (!prev || prev.day !== day || !Array.isArray(prev.dealt)) {
    return {
      day,
      dealt: dealHand(candidates, {
        day,
        size
      }),
      changed: true
    };
  }
  if (prev.dealt.length < size) {
    const topUp = dealHand(candidates, {
      day,
      size: size - prev.dealt.length,
      exclude: prev.dealt
    });
    if (topUp.length > 0) {
      return {
        day,
        dealt: [...prev.dealt, ...topUp],
        changed: true
      };
    }
  }
  return {
    day,
    dealt: prev.dealt,
    changed: false
  };
}

/**
 * Judge the hand against the live pool.
 *   inHand(key)  — should this card render in the capped view?
 *   liveDealt    — dealt cards still awaiting action
 *   waiting      — live cards NOT in the hand (behind "show waiting")
 *   done         — the hand existed and every dealt card has been handled
 */
function handStatus(dealt, liveKeys) {
  const dealtSet = new Set(dealt || []);
  const live = new Set(liveKeys || []);
  const liveDealt = (dealt || []).filter(k => live.has(k));
  const waiting = (liveKeys || []).filter(k => !dealtSet.has(k));
  return {
    dealtSet,
    liveDealt,
    waiting,
    done: (dealt || []).length > 0 && liveDealt.length === 0
  };
}

// pulse.js — relationship health buckets + the "Year in People" recap.
//
// Pure, deterministic given `now`. Two exports:
//   relationshipHealth() — sorts everyone in a circle into nurtured / steady /
//                          drifting by recency, so the user can see at a glance
//                          who they're keeping up with and who's slipping.
//   yearRecap()          — Spotify-Wrapped-style summary of the year so far.

const NURTURED_DAYS = 14;
const STEADY_DAYS = 45;

/**
 * Which health bucket a person falls in. When they have a personal cadence,
 * judge them against THAT (overdue → drifting, due → steady, ok → nurtured).
 * Otherwise fall back to the global recency thresholds.
 *
 * HONESTY RULE: someone with no logged touch EVER is 'new', never 'drifting'.
 * A relationship can't drift before it has moved — calling a just-imported
 * contact "drifting" guilt-trips the user on minute one.
 */
function bucketFor(person, days, now) {
  if (!Number.isFinite(days)) return 'new';
  const cad = cadenceStatus(person, now);
  if (cad) {
    if (cad.state === 'overdue') return 'drifting';
    if (cad.state === 'due') return 'steady';
    return 'nurtured';
  }
  if (days <= NURTURED_DAYS) return 'nurtured';
  if (days <= STEADY_DAYS) return 'steady';
  return 'drifting';
}

/**
 * Buckets people who belong to at least one circle into nurtured / steady /
 * drifting / fresh (never-touched). Each person is judged against their own
 * keep-in-touch cadence when set, else by global recency. Buckets are sorted
 * most-overdue-first within drifting and most-recent-first within nurtured so
 * the lists read naturally.
 *
 * `fresh` people are EXCLUDED from the health score denominator: the score
 * measures how you're tending relationships you've started, not how fast you
 * bootstrap new imports.
 */
function relationshipHealth(people, now = Date.now()) {
  const inCircles = (people || []).filter(p => (p.circleIds || []).length > 0);
  const withDays = inCircles.map(p => ({
    person: p,
    days: daysSinceTouch(p, now),
    bucket: bucketFor(p, daysSinceTouch(p, now), now)
  }));
  const nurtured = withDays.filter(x => x.bucket === 'nurtured').sort((a, b) => a.days - b.days);
  const steady = withDays.filter(x => x.bucket === 'steady').sort((a, b) => a.days - b.days);
  const drifting = withDays.filter(x => x.bucket === 'drifting').sort((a, b) => b.days - a.days);
  const fresh = withDays.filter(x => x.bucket === 'new');
  const scored = inCircles.length - fresh.length;
  return {
    nurtured,
    steady,
    drifting,
    fresh,
    total: inCircles.length,
    // 0..1 — share of STARTED relationships you're actively keeping up with.
    score: scored ? (nurtured.length + steady.length * 0.5) / scored : 0
  };
}
function timestampsFor(person) {
  const out = [];
  for (const i of person.interactions || []) if (i?.date) out.push(new Date(i.date).getTime());
  for (const n of person.notes || []) if (n?.date) out.push(new Date(n.date).getTime());
  return out.filter(t => !Number.isNaN(t));
}

/**
 * Year-so-far recap. `now` defaults to live time; pass a fixed value in tests.
 * Returns counts + the standout person, all computed locally.
 */
function yearRecap(people, now = Date.now()) {
  const year = new Date(now).getFullYear();
  const startOfYear = new Date(year, 0, 1).getTime();
  let totalMoments = 0;
  let newThisYear = 0;
  const counts = new Map(); // personId -> moments this year

  for (const p of people || []) {
    const stamps = timestampsFor(p);
    const thisYear = stamps.filter(t => t >= startOfYear);
    if (thisYear.length > 0) {
      counts.set(p.id, thisYear.length);
      totalMoments += thisYear.length;
    }
    // "New face" heuristic: their earliest recorded moment is this year.
    if (stamps.length > 0 && Math.min(...stamps) >= startOfYear) newThisYear++;
  }
  let topId = null;
  let topCount = 0;
  for (const [id, c] of counts) {
    if (c > topCount) {
      topCount = c;
      topId = id;
    }
  }
  const mostSeenPerson = topId ? (people || []).find(p => p.id === topId) || null : null;
  return {
    year,
    totalMoments,
    peopleSeen: counts.size,
    newThisYear,
    mostSeenPerson,
    mostSeenCount: topCount
  };
}

/**
 * GitHub-style activity grid: buckets every logged moment into
 * (week column, weekday row) cells over the trailing `weeks` weeks, with the
 * last column ending today. Weeks start Monday (row 0 = Mon … row 6 = Sun).
 * Returns { grid: number[weeks][7], max, total, monthTicks: [{col,label}] }.
 * Pure and deterministic given `now`.
 */
function weeklyMomentGrid(people, weeks = 20, now = Date.now()) {
  const grid = Array.from({
    length: weeks
  }, () => new Array(7).fill(0));
  const today = new Date(now);
  const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
  const todayRow = (today.getDay() + 6) % 7; // Mon=0 … Sun=6

  let total = 0;
  let max = 0;
  for (const p of people || []) {
    for (const ts of timestampsFor(p)) {
      if (ts > now) continue;
      const d = new Date(ts);
      const dayStart = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
      const diffDays = Math.round((startOfToday - dayStart) / 86_400_000);
      if (diffDays < 0) continue;
      const row = (d.getDay() + 6) % 7;
      const weeksAgo = Math.floor((diffDays + todayRow - row) / 7);
      const col = weeks - 1 - weeksAgo;
      if (col < 0 || col >= weeks) continue;
      grid[col][row] += 1;
      total += 1;
      if (grid[col][row] > max) max = grid[col][row];
    }
  }

  // Month tick when a column's Monday lands in a new month. If two ticks
  // would crowd (<3 columns apart — a partial month at the window edge),
  // keep the later, fuller month.
  const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const monthTicks = [];
  let prevMonth = -1;
  for (let col = 0; col < weeks; col++) {
    const weeksAgo = weeks - 1 - col;
    const mondayMs = startOfToday - (todayRow + weeksAgo * 7) * 86_400_000;
    const m = new Date(mondayMs).getMonth();
    if (m !== prevMonth) {
      const last = monthTicks[monthTicks.length - 1];
      if (last && col - last.col < 3) monthTicks.pop();
      monthTicks.push({
        col,
        label: MONTHS[m]
      });
      prevMonth = m;
    }
  }
  return {
    grid,
    max,
    total,
    monthTicks
  };
}

/**
 * Moments per day over the trailing `days` days (today last). Powers the
 * 7-day momentum strip under the Circle Score dial.
 * Returns { days: [{ key, label, count, isToday }], total }.
 */
function dailyMomentCounts(people, days = 7, now = Date.now()) {
  const DAY_LETTER = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const today = new Date(now);
  const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
  const counts = new Array(days).fill(0);
  for (const p of people || []) {
    for (const ts of timestampsFor(p)) {
      if (ts > now) continue;
      const d = new Date(ts);
      const dayStart = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
      const diff = Math.round((startOfToday - dayStart) / 86_400_000);
      if (diff < 0 || diff >= days) continue;
      counts[days - 1 - diff] += 1;
    }
  }
  const out = counts.map((count, i) => {
    const ms = startOfToday - (days - 1 - i) * 86_400_000;
    const d = new Date(ms);
    return {
      key: `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`,
      label: DAY_LETTER[d.getDay()],
      count,
      isToday: i === days - 1
    };
  });
  return {
    days: out,
    total: counts.reduce((a, b) => a + b, 0)
  };
}

/** Season label for the recap header, from the month. */
function seasonLabel(now = new Date()) {
  const m = now.getMonth();
  if (m <= 1 || m === 11) return 'Winter';
  if (m <= 4) return 'Spring';
  if (m <= 7) return 'Summer';
  return 'Autumn';
}

// backup.js — when to nudge the user to save a copy OFF their phone.
//
// All of Circles lives in localStorage on one device, and even the automatic
// restore points live there too — so they vanish if the phone is lost. The one
// thing that survives is a backup the user saved elsewhere (a file in iCloud
// Drive). These helpers decide how stale that off-device copy is and whether
// it's time to remind. Pure + deterministic given `now`; no storage, no React.

const STALE_AFTER_DAYS = 14;
// Don't pester brand-new users — only nudge once there's enough to lose.
const MIN_PEOPLE_TO_REMIND = 4;
const DAY$1 = 86_400_000;

/** Whole days since the last off-device backup, or Infinity if never. */
function backupAgeDays(lastExportAt, now = Date.now()) {
  if (!lastExportAt) return Infinity;
  return Math.floor((now - lastExportAt) / DAY$1);
}

/** 'never' | 'stale' | 'fresh' — how protected the data is right now. */
function backupStatus(lastExportAt, now = Date.now()) {
  if (!lastExportAt) return 'never';
  return backupAgeDays(lastExportAt, now) >= STALE_AFTER_DAYS ? 'stale' : 'fresh';
}

/** True when it's worth showing the "back up your circles" reminder. */
function shouldRemindBackup(people, lastExportAt, now = Date.now()) {
  const count = Array.isArray(people) ? people.length : 0;
  if (count < MIN_PEOPLE_TO_REMIND) return false;
  return backupStatus(lastExportAt, now) !== 'fresh';
}

/** Short friendly age label: Never / Today / 3 days ago / 2 weeks ago. */
function backupAgoLabel(lastExportAt, now = Date.now()) {
  if (!lastExportAt) return 'Never';
  const d = backupAgeDays(lastExportAt, now);
  if (d <= 0) return 'Today';
  if (d === 1) return 'Yesterday';
  if (d < 7) return `${d} days ago`;
  if (d < 30) {
    const w = Math.floor(d / 7);
    return `${w} ${w === 1 ? 'week' : 'weeks'} ago`;
  }
  if (d < 365) {
    const m = Math.floor(d / 30);
    return `${m} ${m === 1 ? 'month' : 'months'} ago`;
  }
  const y = Math.floor(d / 365);
  return `${y} ${y === 1 ? 'year' : 'years'} ago`;
}

/** One-line reason for the reminder card, tuned to the current status. */
function backupReminderText(people, lastExportAt, now = Date.now()) {
  const count = Array.isArray(people) ? people.length : 0;
  if (backupStatus(lastExportAt, now) === 'never') {
    return `Your ${count} ${count === 1 ? 'person lives' : 'people live'} only on this phone.`;
  }
  return `Your last off-device backup was ${backupAgoLabel(lastExportAt, now).toLowerCase()}.`;
}

// insights.js — the compounding-value engine.
//
// The premise: the more you use Circles, the more it knows — and the more it
// gives back. This module turns the data you've already logged into (a) a
// "relationship memory" depth score that grows mostly from *showing up over
// time*, and (b) a ladder of insights that unlock at honest data thresholds.
// Locked insights advertise what's coming, so there's always a reason to
// return. Everything here is pure and deterministic given `now`.

// ── Moment helpers ─────────────────────────────────────────────────────────

/** All dated moment timestamps (notes ∪ interactions) for one person. */
function momentStamps(person) {
  const out = [];
  for (const n of person?.notes || []) {
    const t = n?.date ? new Date(n.date).getTime() : NaN;
    if (!Number.isNaN(t)) out.push(t);
  }
  for (const i of person?.interactions || []) {
    const t = i?.date ? new Date(i.date).getTime() : NaN;
    if (!Number.isNaN(t)) out.push(t);
  }
  return out;
}
function monthKey(ts) {
  const d = new Date(ts);
  return `${d.getFullYear()}-${d.getMonth()}`;
}
const WEEKDAYS$1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// ── Depth meter ────────────────────────────────────────────────────────────

// Warm, growth-flavored tiers. The longer you tend it, the deeper it roots.
const MEMORY_TIERS = [{
  floor: 0,
  name: 'Seedling'
}, {
  floor: 20,
  name: 'Taking root'
}, {
  floor: 50,
  name: 'Growing'
}, {
  floor: 100,
  name: 'Established'
}, {
  floor: 180,
  name: 'Flourishing'
}, {
  floor: 300,
  name: 'Old growth'
}];

/**
 * Relationship-memory score. Components are chosen so the score can't be
 * rushed: the heaviest weight is on *active months* (you have to keep coming
 * back), and per-person depth is capped so you can't farm one contact.
 */
function relationshipMemory(people = [], now = Date.now()) {
  let depthPts = 0;
  let totalMoments = 0;
  let peopleTracked = 0;
  let completePts = 0;
  const months = new Set();
  for (const p of people) {
    const stamps = momentStamps(p).filter(t => t <= now);
    if (stamps.length) {
      peopleTracked++;
      totalMoments += stamps.length;
      depthPts += Math.min(stamps.length, 10); // cap: no farming one person
      for (const t of stamps) months.add(monthKey(t));
    }
    if (p.birthday || p.howWeMet) completePts += 1;
  }
  const breadthPts = peopleTracked * 2;
  const activeMonths = months.size;
  const consistencyPts = activeMonths * 8; // the part you can only earn with time
  const score = Math.round(depthPts + breadthPts + consistencyPts + completePts);
  let idx = 0;
  for (let i = 0; i < MEMORY_TIERS.length; i++) {
    if (score >= MEMORY_TIERS[i].floor) idx = i;
  }
  const tier = MEMORY_TIERS[idx];
  const next = MEMORY_TIERS[idx + 1] || null;
  const span = next ? next.floor - tier.floor : 1;
  const progress = next ? Math.min(1, (score - tier.floor) / span) : 1;
  return {
    score,
    tier: {
      name: tier.name,
      index: idx
    },
    next: next ? {
      name: next.name,
      floor: next.floor
    } : null,
    toNext: next ? Math.max(0, next.floor - score) : 0,
    progress,
    activeMonths,
    totalMoments,
    peopleTracked
  };
}

// ── Insight ladder ─────────────────────────────────────────────────────────

function firstName$1(name) {
  return (name || '').trim().split(/\s+/)[0] || name || 'Someone';
}
function joinNames(names) {
  if (names.length === 1) return names[0];
  if (names.length === 2) return `${names[0]} & ${names[1]}`;
  return `${names.slice(0, -1).join(', ')} & ${names[names.length - 1]}`;
}

/**
 * Build the full insight ladder. Each entry is shown whether locked or not —
 * locked entries carry a `hint` + `progress` so the user can see what's coming
 * and how close they are. Unlocked entries carry `headline` + `detail`.
 */
function computeInsights(people = [], circles = [], now = Date.now()) {
  // Flatten all past moments with their person.
  const moments = [];
  const countByPerson = new Map();
  const earliestByPerson = new Map();
  for (const p of people) {
    const stamps = momentStamps(p).filter(t => t <= now);
    if (stamps.length) {
      countByPerson.set(p.id, stamps.length);
      earliestByPerson.set(p.id, Math.min(...stamps));
    }
    for (const t of stamps) moments.push({
      personId: p.id,
      ts: t
    });
  }
  const total = moments.length;
  const byId = new Map(people.map(p => [p.id, p]));
  const months = new Set(moments.map(m => monthKey(m.ts)));
  const calMonths = new Set(moments.map(m => new Date(m.ts).getMonth()));
  const cards = [];

  // 1) Inner circle — your most-tended people.
  {
    const NEED = 15;
    const top = [...countByPerson.entries()].sort((a, b) => b[1] - a[1]).slice(0, 3).map(([id]) => firstName$1(byId.get(id)?.name)).filter(Boolean);
    const unlocked = total >= NEED && top.length > 0;
    cards.push({
      id: 'inner-circle',
      title: 'Your inner circle',
      unlocked,
      progress: Math.min(1, total / NEED),
      hint: `Log ${Math.max(1, NEED - total)} more moments to reveal who's closest.`,
      headline: unlocked ? joinNames(top) : null,
      detail: unlocked ? 'The people you tend to most.' : null
    });
  }

  // 2) The connector — who's opened the most doors for you.
  {
    const refCount = new Map();
    for (const p of people) {
      if (p.referredBy && byId.has(p.referredBy)) {
        refCount.set(p.referredBy, (refCount.get(p.referredBy) || 0) + 1);
      }
    }
    const totalIntros = [...refCount.values()].reduce((a, b) => a + b, 0);
    let topId = null;
    let topN = 0;
    for (const [id, c] of refCount) if (c > topN) {
      topN = c;
      topId = id;
    }
    const unlocked = totalIntros >= 2 && Boolean(topId);
    cards.push({
      id: 'connector',
      title: 'Your connector',
      unlocked,
      progress: Math.min(1, totalIntros / 2),
      hint: 'Record who introduced you to people to find your super-connector.',
      headline: unlocked ? firstName$1(byId.get(topId)?.name) : null,
      detail: unlocked ? `Opened the door to ${topN} ${topN === 1 ? 'person' : 'people'} in your circles.` : null
    });
  }

  // 3) Circle balance — where your attention actually goes.
  {
    const NEED = 3;
    const perCircle = new Map();
    for (const p of people) {
      for (const cid of p.circleIds || []) {
        perCircle.set(cid, (perCircle.get(cid) || 0) + 1);
      }
    }
    const used = perCircle.size;
    const totalMemberships = [...perCircle.values()].reduce((a, b) => a + b, 0);
    let topCid = null;
    let topC = 0;
    for (const [cid, c] of perCircle) if (c > topC) {
      topC = c;
      topCid = cid;
    }
    const topCircle = circles.find(c => c.id === topCid);
    const unlocked = used >= NEED && totalMemberships > 0;
    const pct = totalMemberships ? Math.round(topC / totalMemberships * 100) : 0;
    cards.push({
      id: 'circle-balance',
      title: 'Circle balance',
      unlocked,
      progress: Math.min(1, used / NEED),
      hint: `Add people across ${Math.max(1, NEED - used)} more circles to see your balance.`,
      headline: unlocked && topCircle ? `${topCircle.name} leads` : 'Balanced',
      detail: unlocked ? `${pct}% of your tracked people sit in your biggest circle.` : null
    });
  }

  // 4) Your rhythm — the day you connect most.
  {
    const NEED = 12;
    const wd = new Array(7).fill(0);
    for (const m of moments) wd[new Date(m.ts).getDay()]++;
    let topDay = 0;
    for (let i = 1; i < 7; i++) if (wd[i] > wd[topDay]) topDay = i;
    const unlocked = total >= NEED;
    cards.push({
      id: 'rhythm',
      title: 'Your rhythm',
      unlocked,
      progress: Math.min(1, total / NEED),
      hint: `${Math.max(1, NEED - total)} more moments unlocks the day you connect most.`,
      headline: unlocked ? `${WEEKDAYS$1[topDay]}s` : null,
      detail: unlocked ? 'When you tend to see people.' : null
    });
  }

  // 5) Seasonal — the time of year you're most social.
  {
    const NEED = 3;
    const byMonth = new Map();
    for (const m of moments) {
      const mo = new Date(m.ts).getMonth();
      byMonth.set(mo, (byMonth.get(mo) || 0) + 1);
    }
    let topMo = null;
    let topC = 0;
    for (const [mo, c] of byMonth) if (c > topC) {
      topC = c;
      topMo = mo;
    }
    const unlocked = calMonths.size >= NEED && topMo != null;
    cards.push({
      id: 'seasonal',
      title: 'Seasonal patterns',
      unlocked,
      progress: Math.min(1, calMonths.size / NEED),
      hint: `Keep logging across the year — ${Math.max(1, NEED - calMonths.size)} more months reveals your busiest season.`,
      headline: unlocked ? MONTHS[topMo] : null,
      detail: unlocked ? 'Your most connected month so far.' : null
    });
  }

  // 6) Showing up — your consistency streak.
  {
    const NEED = 2;
    // Count consecutive months (ending this month or last) with a moment.
    const monthSet = months;
    const d = new Date(now);
    let y = d.getFullYear();
    let mo = d.getMonth();
    let streak = 0;
    // allow the streak to start this month or the previous one
    if (!monthSet.has(`${y}-${mo}`)) {
      mo -= 1;
      if (mo < 0) {
        mo = 11;
        y -= 1;
      }
    }
    while (monthSet.has(`${y}-${mo}`)) {
      streak++;
      mo -= 1;
      if (mo < 0) {
        mo = 11;
        y -= 1;
      }
    }
    const unlocked = monthSet.size >= NEED;
    cards.push({
      id: 'consistency',
      title: 'Showing up',
      unlocked,
      progress: Math.min(1, monthSet.size / NEED),
      hint: 'Log moments in another month to start your consistency streak.',
      headline: unlocked ? streak >= 2 ? `${streak} months running` : `${monthSet.size} active months` : null,
      detail: unlocked ? 'Consistency is what compounds.' : null
    });
  }

  // 7) Oldest friendship — known the longest.
  {
    const NEED = 10;
    let oldestId = null;
    let oldestTs = Infinity;
    for (const [id, t] of earliestByPerson) if (t < oldestTs) {
      oldestTs = t;
      oldestId = id;
    }
    const unlocked = total >= NEED && Boolean(oldestId);
    const years = oldestId ? (now - oldestTs) / (365.25 * 86_400_000) : 0;
    const span = years >= 1 ? `${Math.floor(years)}+ ${Math.floor(years) === 1 ? 'year' : 'years'}` : 'months';
    cards.push({
      id: 'oldest',
      title: 'Longest thread',
      unlocked,
      progress: Math.min(1, total / NEED),
      hint: `${Math.max(1, NEED - total)} more moments surfaces your longest-running friendship.`,
      headline: unlocked ? firstName$1(byId.get(oldestId)?.name) : null,
      detail: unlocked ? `Your earliest logged thread — going ${span} back.` : null
    });
  }
  const unlockedCount = cards.filter(c => c.unlocked).length;
  return {
    cards,
    unlockedCount,
    total: cards.length
  };
}

// Pulse — "Year in People" recap + relationship-health view.
//
// The compounding-value surface: the longer you use Circles, the richer this
// gets. Two parts: a season recap (moments logged, people seen, new faces,
// who you saw most) and a health breakdown (nurtured / steady / drifting),
// each tappable straight to the person.

function Pulse({
  people = [],
  circles = [],
  onBack,
  onOpenPerson
}) {
  const health = relationshipHealth(people);
  const recap = yearRecap(people);
  const season = seasonLabel();
  const scorePct = Math.round(health.score * 100);
  // Relationships that have actually started — fresh (never-touched) people
  // are invited, not scored, so they never power a guilt surface.
  const started = health.nurtured.length + health.steady.length + health.drifting.length;
  const memory = relationshipMemory(people);
  const insights = computeInsights(people, circles);
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      padding: '28px 22px 40px'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 6
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: () => {
          haptics.tap();
          onBack && onBack();
        },
        "aria-label": "Back",
        className: "al-press",
        style: {
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          width: 44,
          height: 44,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: -12,
          padding: 0
        },
        children: /*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
          name: "chevronLeft",
          size: 20,
          color: theme.colors.ink2
        })
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: labelStyle$2,
        children: "YOUR PULSE"
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("h1", {
      style: {
        fontFamily: theme.fonts.serif,
        fontSize: 32,
        fontWeight: 500,
        color: theme.colors.ink,
        margin: '0 0 4px',
        letterSpacing: '-0.02em'
      },
      children: [season, " in people"]
    }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
      style: {
        fontFamily: theme.fonts.serif,
        fontStyle: 'italic',
        fontSize: 15,
        color: theme.colors.ink3,
        margin: '0 0 24px'
      },
      children: recap.totalMoments > 0 ? 'A look at how this year has gone.' : 'Log a few moments and your story starts here.'
    }), /*#__PURE__*/jsxRuntimeExports.jsx(DepthMeter, {
      memory: memory
    }), /*#__PURE__*/jsxRuntimeExports.jsx(InsightLadder, {
      insights: insights
    }), /*#__PURE__*/jsxRuntimeExports.jsx(MomentHeatmap, {
      people: people
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 12,
        marginBottom: 12
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(StatCard, {
        value: recap.totalMoments,
        label: "moments",
        small: true
      }), /*#__PURE__*/jsxRuntimeExports.jsx(StatCard, {
        value: recap.peopleSeen,
        label: "people seen",
        small: true
      }), /*#__PURE__*/jsxRuntimeExports.jsx(StatCard, {
        value: recap.newThisYear,
        label: "new faces",
        small: true
      })]
    }), recap.mostSeenPerson && /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
      onClick: () => onOpenPerson && onOpenPerson(recap.mostSeenPerson.id),
      className: "al-press",
      style: {
        ...cardStyle,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        cursor: 'pointer',
        textAlign: 'left',
        marginBottom: 24
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
        name: recap.mostSeenPerson.name,
        photo: recap.mostSeenPerson.photo,
        size: 40
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          flex: 1,
          minWidth: 0
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: miniLabel,
          children: "SEEN MOST"
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            fontFamily: theme.fonts.serif,
            fontSize: 17,
            fontWeight: 600,
            color: theme.colors.ink
          },
          children: recap.mostSeenPerson.name
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        className: "al-tnum",
        style: {
          fontFamily: theme.fonts.mono,
          fontSize: 13,
          color: theme.colors.accent
        },
        children: [recap.mostSeenCount, "\xD7"]
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        ...labelStyle$2,
        marginBottom: 12
      },
      children: "RELATIONSHIP HEALTH"
    }), started > 0 && /*#__PURE__*/jsxRuntimeExports.jsx(HealthRing, {
      health: health,
      scorePct: scorePct
    }), /*#__PURE__*/jsxRuntimeExports.jsx(HealthBucket, {
      title: "Nurtured",
      sub: "Seen in the last two weeks",
      dot: theme.colors.success,
      rows: health.nurtured,
      onOpenPerson: onOpenPerson
    }), /*#__PURE__*/jsxRuntimeExports.jsx(HealthBucket, {
      title: "Steady",
      sub: "Within the last six weeks",
      dot: theme.colors.amber,
      rows: health.steady,
      onOpenPerson: onOpenPerson
    }), /*#__PURE__*/jsxRuntimeExports.jsx(HealthBucket, {
      title: "Drifting",
      sub: "Overdue for a check-in",
      dot: theme.colors.accent,
      rows: health.drifting,
      onOpenPerson: onOpenPerson,
      expandable: true
    }), /*#__PURE__*/jsxRuntimeExports.jsx(HealthBucket, {
      title: "New",
      sub: "Say hello \u2014 log your first moment",
      dot: theme.colors.ink4,
      rows: health.fresh,
      onOpenPerson: onOpenPerson,
      expandable: true
    }), (health.total === 0 || started === 0) && /*#__PURE__*/jsxRuntimeExports.jsx("p", {
      style: {
        fontFamily: theme.fonts.serif,
        fontStyle: 'italic',
        color: theme.colors.ink3,
        fontSize: 14,
        textAlign: 'center',
        marginTop: 20
      },
      children: health.total === 0 ? "Add people to circles to see how you're keeping up." : 'Health starts with your first logged moment.'
    })]
  });
}

// Depth meter — the compounding spine. Grows mostly from showing up over time.
function DepthMeter({
  memory
}) {
  const pct = Math.round(memory.progress * 100);
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      ...cardStyle,
      marginBottom: 24
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        gap: 10
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: miniLabel,
          children: "RELATIONSHIP MEMORY"
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            fontFamily: theme.fonts.serif,
            fontSize: 22,
            fontWeight: 600,
            color: theme.colors.ink,
            lineHeight: 1.1,
            marginTop: 2
          },
          children: memory.tier.name
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        className: "al-tnum",
        style: {
          fontFamily: theme.fonts.mono,
          fontSize: 11,
          color: theme.colors.ink3,
          letterSpacing: 0.4,
          textAlign: 'right'
        },
        children: [memory.activeMonths, " ", memory.activeMonths === 1 ? 'mo' : 'mos', /*#__PURE__*/jsxRuntimeExports.jsx("br", {}), memory.totalMoments, " logged"]
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginTop: 12,
        height: 8,
        borderRadius: theme.radii.pill,
        background: theme.colors.paperDeep,
        overflow: 'hidden'
      },
      children: /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          width: `${pct}%`,
          height: '100%',
          borderRadius: theme.radii.pill,
          background: theme.colors.accent,
          transition: 'width 600ms cubic-bezier(0.22, 1, 0.36, 1)'
        }
      })
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginTop: 8,
        fontFamily: theme.fonts.serif,
        fontStyle: 'italic',
        fontSize: 13,
        color: theme.colors.ink3
      },
      children: memory.next ? `${memory.toNext} more to ${memory.next.name}` : 'Old growth — your record runs deep.'
    })]
  });
}

// The unlock ladder — the reason to come back. Locked cards advertise what's
// coming and how close you are.
function InsightLadder({
  insights
}) {
  const {
    cards,
    unlockedCount,
    total
  } = insights;
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      marginBottom: 24
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        ...labelStyle$2,
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
        children: "INSIGHTS"
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
        className: "al-tnum",
        style: {
          color: theme.colors.ink4
        },
        children: [unlockedCount, "/", total, " UNLOCKED"]
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 10
      },
      children: cards.map(c => /*#__PURE__*/jsxRuntimeExports.jsx(InsightCard, {
        card: c
      }, c.id))
    })]
  });
}
function InsightCard({
  card
}) {
  if (card.unlocked) {
    return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        ...cardStyle,
        padding: '13px 14px'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          ...miniLabel,
          color: theme.colors.accent
        },
        children: card.title
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          fontFamily: theme.fonts.serif,
          fontSize: 17,
          fontWeight: 600,
          color: theme.colors.ink,
          lineHeight: 1.15,
          marginTop: 4
        },
        children: card.headline
      }), card.detail && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          fontFamily: theme.fonts.sans,
          fontSize: 12,
          color: theme.colors.ink3,
          marginTop: 3,
          lineHeight: 1.35
        },
        children: card.detail
      })]
    });
  }
  const pct = Math.round((card.progress || 0) * 100);
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      ...cardStyle,
      padding: '13px 14px',
      background: 'transparent',
      borderStyle: 'dashed',
      boxShadow: 'none'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
        "aria-hidden": "true",
        style: {
          fontSize: 10,
          color: theme.colors.ink4,
          lineHeight: 1
        },
        children: "\u25CC"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          ...miniLabel,
          color: theme.colors.ink4,
          marginBottom: 0
        },
        children: card.title
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        fontFamily: theme.fonts.sans,
        fontSize: 12,
        color: theme.colors.ink3,
        marginTop: 6,
        lineHeight: 1.35,
        minHeight: 30
      },
      children: card.hint
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginTop: 8,
        height: 4,
        borderRadius: theme.radii.pill,
        background: theme.colors.paperDeep,
        overflow: 'hidden'
      },
      children: /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          width: `${pct}%`,
          height: '100%',
          background: theme.colors.ruleStrong,
          borderRadius: theme.radii.pill
        }
      })
    })]
  });
}

// Segmented donut — nurtured / steady / drifting share of the circle, with
// the kept-up score counting up in the middle. The dashboard centerpiece.
function HealthRing({
  health,
  scorePct
}) {
  const [mounted, setMounted] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hidden = typeof document !== 'undefined' && document.hidden;
    if (reduce || hidden) {
      setMounted(true);
      return;
    }
    const id = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(id);
  }, []);
  const R = 56;
  const C = 2 * Math.PI * R;
  const total = health.total || 1;
  const segs = [{
    key: 'Nurtured',
    count: health.nurtured.length,
    color: 'var(--c-success)'
  }, {
    key: 'Steady',
    count: health.steady.length,
    color: 'var(--c-amber)'
  }, {
    key: 'Drifting',
    count: health.drifting.length,
    color: 'var(--c-accent)'
  }];
  let acc = 0;
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      ...cardStyle,
      marginBottom: 12,
      display: 'flex',
      alignItems: 'center',
      gap: 18
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        position: 'relative',
        width: 116,
        flexShrink: 0
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("svg", {
        viewBox: "0 0 132 132",
        style: {
          width: '100%',
          display: 'block'
        },
        "aria-hidden": "true",
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("circle", {
          cx: 66,
          cy: 66,
          r: R,
          fill: "none",
          stroke: "var(--c-paper-deep)",
          strokeWidth: 12
        }), segs.map(s => {
          const len = C * s.count / total;
          const offset = -acc + 2;
          acc += len;
          if (s.count === 0) return null;
          return /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
            cx: 66,
            cy: 66,
            r: R,
            fill: "none",
            stroke: s.color,
            strokeWidth: 12,
            strokeLinecap: "round",
            strokeDasharray: `${Math.max(0.01, len - 4)} ${C - len + 4}`,
            strokeDashoffset: mounted ? offset : offset + C * 0.25,
            transform: "rotate(-90 66 66)",
            style: {
              opacity: mounted ? 1 : 0,
              transition: 'stroke-dashoffset 900ms cubic-bezier(0.22,1,0.36,1), opacity 500ms ease'
            }
          }, s.key);
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          className: "al-tnum",
          style: {
            fontFamily: theme.fonts.serif,
            fontSize: 28,
            fontWeight: 600,
            color: theme.colors.ink,
            lineHeight: 1
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx(CountUp, {
            value: scorePct
          }), "%"]
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            ...miniLabel,
            marginTop: 3
          },
          children: "KEPT UP"
        })]
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        flex: 1,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 9
      },
      children: segs.map(s => /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
          style: {
            width: 9,
            height: 9,
            borderRadius: '50%',
            background: s.color,
            flexShrink: 0
          }
        }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
          style: {
            fontFamily: theme.fonts.serif,
            fontSize: 15,
            color: theme.colors.ink
          },
          children: s.key
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
          className: "al-tnum",
          style: {
            marginLeft: 'auto',
            fontFamily: theme.fonts.mono,
            fontSize: 12,
            color: theme.colors.ink3
          },
          children: [s.count, " \xB7 ", Math.round(s.count / total * 100), "%"]
        })]
      }, s.key))
    })]
  });
}

// GitHub-style 20-week activity grid — each cell a day, depth = moments.
function MomentHeatmap({
  people
}) {
  const WEEKS = 20;
  const {
    grid,
    max,
    total,
    monthTicks
  } = weeklyMomentGrid(people, WEEKS);
  if (total === 0) return null;
  const CELL = 16; // pitch
  const SIZEW = 14 + WEEKS * CELL;
  const SIZEH = 16 + 7 * CELL;
  const stepOpacity = count => count === 0 ? 1 : [0.28, 0.52, 0.76, 1][Math.min(3, Math.ceil(4 * count / Math.max(1, max)) - 1)];
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      ...cardStyle,
      marginBottom: 24
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: miniLabel,
        children: ["LAST ", WEEKS, " WEEKS"]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        className: "al-tnum",
        style: {
          ...microLabel,
          color: theme.colors.ink4
        },
        children: [total, " MOMENTS"]
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("svg", {
      viewBox: `0 0 ${SIZEW} ${SIZEH}`,
      style: {
        width: '100%',
        display: 'block',
        marginTop: 8
      },
      "aria-label": `Activity heatmap: ${total} moments over the last ${WEEKS} weeks`,
      role: "img",
      children: [[['M', 1], ['W', 3], ['F', 5]].map(([ch, row]) => /*#__PURE__*/jsxRuntimeExports.jsx("text", {
        x: 4,
        y: 16 + row * CELL + 9,
        style: {
          fontFamily: theme.fonts.mono,
          fontSize: 9,
          fill: 'var(--c-ink4)'
        },
        children: ch
      }, ch)), monthTicks.map(t => /*#__PURE__*/jsxRuntimeExports.jsx("text", {
        x: 14 + t.col * CELL,
        y: 9,
        style: {
          fontFamily: theme.fonts.mono,
          fontSize: 9,
          letterSpacing: 0.5,
          fill: 'var(--c-ink4)'
        },
        children: t.label
      }, `${t.col}-${t.label}`)), grid.map((col, c) => col.map((count, r) => /*#__PURE__*/jsxRuntimeExports.jsx("rect", {
        x: 14 + c * CELL,
        y: 16 + r * CELL,
        width: 12,
        height: 12,
        rx: 3,
        fill: count === 0 ? 'var(--c-paper-deep)' : 'var(--c-accent)',
        fillOpacity: stepOpacity(count),
        style: {
          animation: 'al-heat-in 300ms cubic-bezier(0.22,1,0.36,1) both',
          animationDelay: `${c * 16}ms`,
          transformOrigin: 'center',
          transformBox: 'fill-box'
        }
      }, `${c}-${r}`)))]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 6,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 4,
        fontFamily: theme.fonts.mono,
        fontSize: 9,
        letterSpacing: 0.5,
        color: theme.colors.ink4
      },
      children: ["LESS", [0.28, 0.52, 0.76, 1].map(o => /*#__PURE__*/jsxRuntimeExports.jsx("span", {
        style: {
          width: 8,
          height: 8,
          borderRadius: 2,
          background: 'var(--c-accent)',
          opacity: o
        }
      }, o)), "MORE"]
    })]
  });
}
function StatCard({
  value,
  suffix = '',
  label,
  small
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      ...cardStyle,
      textAlign: 'center',
      padding: small ? '14px 8px' : '16px 12px'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      className: "al-tnum",
      style: {
        fontFamily: theme.fonts.serif,
        fontSize: small ? 28 : 34,
        fontWeight: 600,
        color: theme.colors.ink,
        lineHeight: 1
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(CountUp, {
        value: value
      }), suffix]
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        ...microLabel,
        marginTop: 6
      },
      children: label
    })]
  });
}

// Animate a number from 0 → value on mount with an ease-out curve. The recap
// figures "tick up" as the screen settles — a small, premium flourish. The
// rAF timestamp keeps it sandbox-safe; reduced-motion jumps straight to rest.
// Exported — the Circle Score dial on Today reuses it.
function CountUp({
  value,
  durationMs = 950
}) {
  const target = Number(value) || 0;
  const [display, setDisplay] = reactExports.useState(target === 0 ? 0 : 0);
  reactExports.useEffect(() => {
    const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // When the tab is hidden, rAF is throttled and the figure would stick at 0.
    // Show the real value immediately in that case (and for reduced-motion).
    const hidden = typeof document !== 'undefined' && document.hidden;
    if (reduce || hidden || target === 0) {
      setDisplay(target);
      return;
    }
    let raf;
    let startTs = null;
    const tick = ts => {
      if (startTs == null) startTs = ts;
      const p = Math.min(1, (ts - startTs) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setDisplay(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => raf && cancelAnimationFrame(raf);
  }, [target, durationMs]);
  return /*#__PURE__*/jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
    children: display
  });
}
function HealthBucket({
  title,
  sub,
  dot,
  rows,
  onOpenPerson,
  expandable
}) {
  if (!rows || rows.length === 0) return null;
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      ...cardStyle,
      marginBottom: 12
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
        style: {
          width: 9,
          height: 9,
          borderRadius: '50%',
          background: dot,
          flexShrink: 0
        }
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          fontFamily: theme.fonts.serif,
          fontSize: 16,
          fontWeight: 600,
          color: theme.colors.ink
        },
        children: title
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        className: "al-tnum",
        style: {
          marginLeft: 'auto',
          fontFamily: theme.fonts.mono,
          fontSize: 12,
          color: theme.colors.ink3
        },
        children: rows.length
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        fontFamily: theme.fonts.sans,
        fontSize: 12,
        color: theme.colors.ink3,
        margin: '2px 0 10px 17px'
      },
      children: sub
    }), expandable ? /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        marginLeft: 17
      },
      children: [rows.slice(0, 5).map(({
        person,
        days
      }) => /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
        onClick: () => onOpenPerson && onOpenPerson(person.id),
        className: "al-press",
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          background: 'transparent',
          border: 'none',
          minHeight: 44,
          padding: '8px 0',
          cursor: 'pointer',
          textAlign: 'left'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
          name: person.name,
          photo: person.photo,
          size: 28
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            flex: 1,
            minWidth: 0
          },
          children: /*#__PURE__*/jsxRuntimeExports.jsx("div", {
            style: {
              fontFamily: theme.fonts.serif,
              fontSize: 14,
              color: theme.colors.ink,
              fontWeight: 500
            },
            children: person.name
          })
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          className: "al-tnum",
          style: {
            fontFamily: theme.fonts.mono,
            fontSize: 11,
            color: theme.colors.ink3
          },
          children: agoLabel(days)
        })]
      }, person.id)), rows.length > 5 && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          fontFamily: theme.fonts.mono,
          fontSize: 10,
          color: theme.colors.ink4,
          letterSpacing: 0.4
        },
        children: ["+", rows.length - 5, " more"]
      })]
    }) : /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginLeft: 17
      },
      children: /*#__PURE__*/jsxRuntimeExports.jsx(AvatarPile, {
        items: rows.map(({
          person
        }) => ({
          name: person.name
        })),
        max: 6,
        size: 28
      })
    })]
  });
}
function agoLabel(days) {
  if (!Number.isFinite(days)) return 'never';
  if (days >= 365) return `${Math.floor(days / 365)}y`;
  if (days >= 30) return `${Math.floor(days / 30)}mo`;
  if (days >= 7) return `${Math.floor(days / 7)}w`;
  return `${days}d`;
}
const labelStyle$2 = {
  ...microLabel
};
const miniLabel = {
  ...microLabel,
  marginBottom: 1
};
const cardStyle = {
  background: theme.colors.card,
  border: `1px solid ${theme.colors.rule}`,
  borderRadius: theme.radii.lg,
  boxShadow: theme.shadow.card,
  padding: '14px 16px'
};

// Wallet-stack range selector — calendar-aware time windows.
//
// Used by Briefing to filter the events array before passing it to
// WalletStack. Four options that the user can toggle via the segmented
// pill row; the choice persists in settings.briefing.range.
//
// "This week" follows the US convention of week ending Sunday. Adjust
// WEEK_END_DAY if you want Saturday-end instead.

const WEEK_END_DAY = 0; // 0 = Sunday, 6 = Saturday

const RANGES = [{
  key: 'today',
  label: 'Today',
  short: 'TODAY'
}, {
  key: 'this-week',
  label: 'This week',
  short: 'WEEK'
}, {
  key: 'two-weeks',
  label: '+ Next',
  short: '2W'
}, {
  key: 'four-weeks',
  label: '4 weeks',
  short: '4W'
},
// Looking backward — last 7 days. Most recent first so the user can
// jump in and backfill any meeting they forgot to log.
{
  key: 'past-week',
  label: 'Past week',
  short: 'PAST'
}];
const DEFAULT_RANGE = 'this-week';

/**
 * Returns { startMs, endMs } for the given range, relative to `now`.
 * Uses local time so end-of-week is the user's Sunday, not UTC's.
 */
function rangeBounds(rangeKey, now = new Date()) {
  const today = new Date(now);
  today.setHours(0, 0, 0, 0);
  const startMs = today.getTime();
  let end;
  switch (rangeKey) {
    case 'today':
      {
        end = new Date(today);
        end.setDate(end.getDate() + 1); // end of today (start of tomorrow)
        break;
      }
    case 'this-week':
      {
        end = endOfWeek(today);
        break;
      }
    case 'two-weeks':
      {
        // End of NEXT week — i.e. end of this week + 7 days
        end = endOfWeek(today);
        end.setDate(end.getDate() + 7);
        break;
      }
    case 'four-weeks':
      {
        end = new Date(today);
        end.setDate(end.getDate() + 28);
        break;
      }
    case 'past-week':
      {
        // Reverse window: 7 days BACK from today (exclusive of today
        // itself — captured events from today belong to the JUST WRAPPED
        // / RELATIONSHIP INTELLIGENCE tier on the live ranges).
        const start = new Date(today);
        start.setDate(start.getDate() - 7);
        return {
          startMs: start.getTime(),
          endMs: today.getTime()
        };
      }
    default:
      end = endOfWeek(today);
  }
  return {
    startMs,
    endMs: end.getTime()
  };
}

/**
 * Filter an annotated events array by a range key. Returns events
 * whose start falls within [startMs, endMs). Past ranges are reversed
 * so the most-recently-ended event sits at the top.
 */
function filterEventsByRange(events, rangeKey, now = new Date()) {
  if (!Array.isArray(events)) return [];
  const {
    startMs,
    endMs
  } = rangeBounds(rangeKey, now);
  const filtered = events.filter(e => {
    if (!e || !e.start) return false;
    const t = new Date(e.start).getTime();
    return t >= startMs && t < endMs;
  });
  if (rangeKey === 'past-week') {
    // Most-recent first for backward windows
    return filtered.slice().sort((a, b) => b.start.localeCompare(a.start));
  }
  return filtered;
}

// ---- internals ----

function endOfWeek(fromDay) {
  // fromDay is at 00:00 local. Find the upcoming end-of-week boundary
  // (exclusive — equal to 00:00 of the day AFTER the week ends).
  const out = new Date(fromDay);
  const dow = out.getDay(); // 0 Sun..6 Sat
  // Days remaining until the START of the day AFTER the week-end
  // If today is Mon (1) and WEEK_END_DAY is 0 (Sun), the week ends
  // next Sunday end-of-day → start of Monday is 7 days from Mon? No:
  // Sun (0) → Mon (1) is 1 day. Today Mon (1), next start-of-week-after-end
  // is Mon (1) next week = +7. Today Tue (2), +6. Today Sun (0), +1.
  // Formula: (WEEK_END_DAY - dow + 7) % 7 + 1
  const offset = (WEEK_END_DAY - dow + 7) % 7 + 1;
  out.setDate(out.getDate() + offset);
  return out;
}

const cardShellStyle = {
  background: theme.colors.card,
  border: `1px solid ${theme.colors.rule}`,
  borderRadius: theme.radii.lg,
  padding: '12px 14px',
  boxShadow: theme.shadow.card
};

// Right-side eyebrow meta on the retention-arc cards — the microLabel voice
// (mono 10 / '0.12em') without the uppercase, shared by every card in the
// Relationship Intelligence stack.
const metaRightStyle = {
  fontFamily: theme.fonts.mono,
  fontSize: 10,
  letterSpacing: '0.12em',
  color: theme.colors.ink3
};
const labelStyle$1 = {
  ...microLabel
};
function labelAccent() {
  return {
    ...labelStyle$1,
    color: theme.colors.accent
  };
}

// ── CardExit — the one shared exit for Today's action cards ───────────────
// Wraps a card render site. While `leaving` is false it's an inert wrapper.
// When `leaving` flips true the card lifts away (al-card-out) while the
// wrapper collapses its height, so the cards below settle instead of
// jumping; the real data mutation fires in `onGone` once the collapse ends.
function CardExit({
  leaving,
  onGone,
  style,
  children
}) {
  const ref = reactExports.useRef(null);
  const [height, setHeight] = reactExports.useState(null);
  const [collapsed, setCollapsed] = reactExports.useState(false);
  const goneRef = reactExports.useRef(onGone);
  goneRef.current = onGone;
  const firedRef = reactExports.useRef(false);
  function fireGone() {
    if (firedRef.current) return;
    firedRef.current = true;
    goneRef.current && goneRef.current();
  }
  reactExports.useLayoutEffect(() => {
    if (!leaving) {
      setHeight(null);
      setCollapsed(false);
      firedRef.current = false;
      return;
    }
    const el = ref.current;
    if (!el) {
      fireGone();
      return;
    }
    // Lock the current height, then collapse it on the next frame so the
    // transition has a concrete start value.
    setHeight(el.offsetHeight);
    let raf2 = 0;
    const raf = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setCollapsed(true));
    });
    // Belt-and-braces: commit the mutation even if transitionend never
    // reports back (frozen tab, interrupted transition).
    const timer = setTimeout(fireGone, 420);
    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(raf2);
      clearTimeout(timer);
    };
  }, [leaving]); // eslint-disable-line react-hooks/exhaustive-deps

  return /*#__PURE__*/jsxRuntimeExports.jsx("div", {
    ref: ref,
    onTransitionEnd: e => {
      if (leaving && e.target === e.currentTarget && e.propertyName === 'height') {
        fireGone();
      }
    },
    style: {
      ...style,
      ...(leaving ? {
        height: collapsed ? 0 : height == null ? undefined : height,
        marginTop: collapsed ? 0 : style ? style.marginTop : undefined,
        overflow: 'hidden',
        pointerEvents: 'none',
        transition: `height 260ms ${theme.ease.standard}, margin 260ms ${theme.ease.standard}`
      } : null)
    },
    children: /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: leaving ? {
        animation: `al-card-out 220ms ${theme.ease.standard} both`
      } : undefined,
      children: children
    })
  });
}
function relativeDayShort(date) {
  const now = new Date();
  const n0 = new Date(now);
  n0.setHours(0, 0, 0, 0);
  const t1 = new Date(n0);
  t1.setDate(n0.getDate() + 1);
  const t2 = new Date(n0);
  t2.setDate(n0.getDate() + 2);
  const t7 = new Date(n0);
  t7.setDate(n0.getDate() + 7);
  if (date < t1) return 'Today';
  if (date < t2) return 'Tomorrow';
  if (date < t7) return date.toLocaleDateString(undefined, {
    weekday: 'short'
  });
  return date.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric'
  });
}
function timeExactString(iso) {
  const d = new Date(iso);
  // Short weekday + Month + Day with ordinal suffix + time, e.g.
  // "Mon, May 25th, 10:00 AM". Locale-aware where it makes sense; the
  // ordinal is en-US only (most other locales don't use ordinal suffixes
  // for dates anyway — they'd see plain "25").
  const wk = d.toLocaleDateString(undefined, {
    weekday: 'short'
  });
  const mo = d.toLocaleDateString(undefined, {
    month: 'short'
  });
  const day = d.getDate();
  const tm = d.toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: '2-digit'
  });
  return `${wk}, ${mo} ${day}${ordinalSuffix(day)}, ${tm}`;
}

// Pull the wallet-card color from the lead attendee's primary circle.
// Returns { bg, fg } or null. The fg is chosen by reading the bg's
// perceived luminance — dark bg → cream fg, light bg → ink fg.
function circleColorForEvent(ev, circles) {
  const leadId = ev?.attendees?.[0]?.personId;
  if (!leadId) return null;
  // The enriched attendee carries personId but not the full person —
  // walk circles by id since the primary circle id is on the person…
  // but the WalletStack doesn't have `people`. Workaround: enriched
  // events should already carry a circleId on the lead attendee. If
  // not (legacy enrichEvent), we'd need to thread `people`. Fall back
  // to whatever circleId is reachable on the attendee object.
  const lead = ev.attendees[0];
  const circleId = lead.primaryCircleId || lead.circleId;
  if (!circleId) return null;
  const circle = circles.find(c => c.id === circleId);
  if (!circle || !circle.color) return null;
  const bg = circle.color;
  return {
    bg,
    fg: readableFgFor(bg),
    name: circle.name
  };
}

// True when a hex color is perceptually "light" (so it wants dark text on
// top). Used both to pick a readable foreground AND to decide whether a
// wallet card is dark — the latter must NOT compare against theme.colors.*,
// since those now resolve to var() strings, not literal hex.
function isLightHex(hex) {
  if (typeof hex !== 'string') return false;
  const h = hex.replace('#', '');
  if (h.length !== 6) return false;
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  // sRGB luminance — perceived brightness
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum >= 0.55;
}
function readableFgFor(hex) {
  return isLightHex(hex) ? '#2a241c' : '#f6f1e7';
}

// ── Wallet-card material ──────────────────────────────────────────────────
// A flat fill reads cheap. These give each card a soft top-lit gradient and a
// shadow tinted by the card's own colour, so it casts a faint coloured glow —
// the "expensive object resting on paper" look.
function hexToRgb(hex) {
  if (typeof hex !== 'string') return null;
  const h = hex.replace('#', '');
  if (h.length !== 6) return null;
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16)
  };
}

// Shift a hex toward white (amt > 0) or black (amt < 0), amt in [-1, 1].
function shadeHex(hex, amt) {
  const c = hexToRgb(hex);
  if (!c) return hex;
  const f = v => amt >= 0 ? v + (255 - v) * amt : v * (1 + amt);
  const to2 = v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0');
  return `#${to2(f(c.r))}${to2(f(c.g))}${to2(f(c.b))}`;
}
function walletGradient(hex) {
  if (!hexToRgb(hex)) return hex;
  return `linear-gradient(157deg, ${shadeHex(hex, 0.1)} 0%, ${hex} 48%, ${shadeHex(hex, -0.08)} 100%)`;
}

// Ambient + content-tinted glow. `strong` = the full hero card.
function walletShadow(hex, strong) {
  const c = hexToRgb(hex);
  if (!c) return strong ? theme.shadow.lg : theme.shadow.card;
  const tint = strong ? 0.4 : 0.28;
  const y = strong ? 16 : 10;
  const blur = strong ? 34 : 22;
  return `0 ${y}px ${blur}px -10px rgba(${c.r},${c.g},${c.b},${tint}), 0 2px 6px rgba(42,36,28,0.1)`;
}
function firstName(name) {
  return (name || '').trim().split(/\s+/)[0] || name || 'them';
}
function ordinalSuffix(n) {
  const tens = n % 100;
  if (tens >= 11 && tens <= 13) return 'th';
  switch (n % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

// Adaptive headline: counts the unique matched-people across upcoming events.
function uniquePeopleTitle(enriched) {
  const ids = new Set();
  for (const e of enriched) {
    for (const a of e.attendees || []) {
      if (a.personId) ids.add(a.personId);
    }
  }
  const n = ids.size;
  if (n === 0) return "Today's quiet.";
  if (n === 1) return 'One person up.';
  return `${capFirst(spellOut(n))} people up.`;
}
function capFirst(s) {
  return s ? s[0].toUpperCase() + s.slice(1) : s;
}

// Search pill replaces the old WeekdayPill in the header. Tap to open
// the QuickJumpOverlay below — a full-screen contact picker for jumping
// to someone's Glance card on the fly (e.g. before a surprise meeting).
function SearchPill({
  onOpen
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
    onClick: onOpen,
    "aria-label": "Jump to a contact",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 38,
      padding: '0 14px 0 12px',
      borderRadius: theme.radii.pill,
      background: theme.colors.card,
      border: `1px solid ${theme.colors.rule}`,
      color: theme.colors.ink2,
      cursor: 'pointer',
      fontFamily: theme.fonts.serif,
      fontSize: 14
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
      name: "search",
      size: 13
    }), "Search", CAN_HOVER && /*#__PURE__*/jsxRuntimeExports.jsx("span", {
      className: "al-kbd",
      children: "\u2318K"
    })]
  });
}

// Advertise the palette shortcut only where a keyboard is likely.
const CAN_HOVER = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

// Full-screen contact picker. Autofocused input + live-filtered list.
// Backed by people only (not events). Match priority: startsWith on
// name > contains on name > email/location/howWeMet. Empty input shows
// the most recently active contacts first so "jump to last person I
// just saw" is a fast path.
function QuickJumpOverlay({
  people,
  onClose,
  onPick
}) {
  const [q, setQ] = reactExports.useState('');
  const overlayRef = reactExports.useRef(null);
  useFocusTrap(overlayRef, onClose);
  const results = reactExports.useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) {
      // No query → recently-touched first (uses lastTouch via sort key).
      const withTouch = people.filter(p => p.name).map(p => ({
        p,
        touch: lastTouch(p) || ''
      }));
      withTouch.sort((a, b) => b.touch !== a.touch ? b.touch.localeCompare(a.touch) : (a.p.name || '').localeCompare(b.p.name || ''));
      return withTouch.slice(0, 12).map(x => x.p);
    }
    const scored = [];
    for (const p of people) {
      if (!p.name) continue;
      const name = p.name.toLowerCase();
      let score;
      if (name.startsWith(needle)) score = 0;else if (name.includes(needle)) score = 1;else if ((p.email || '').toLowerCase().includes(needle)) score = 2;else if ((p.location || '').toLowerCase().includes(needle)) score = 3;else if ((p.howWeMet || '').toLowerCase().includes(needle)) score = 4;else continue;
      scored.push({
        p,
        score
      });
    }
    scored.sort((a, b) => a.score !== b.score ? a.score - b.score : (a.p.name || '').localeCompare(b.p.name || ''));
    return scored.slice(0, 15).map(x => x.p);
  }, [people, q]);
  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const first = results[0];
      if (first) onPick(first.id);
    }
  }
  return /*#__PURE__*/jsxRuntimeExports.jsx("div", {
    onClick: onClose,
    style: {
      // Scope to the phone frame (.al-phone is position:relative,
      // overflow:hidden — so absolute inset:0 fills it exactly and
      // nothing bleeds onto the dark stage outside). Fully opaque so
      // the calendar / RI content underneath is completely hidden —
      // the search behaves like its own screen, not a modal.
      position: 'absolute',
      inset: 0,
      background: theme.colors.paper,
      // Above the wallet stack (its active card uses z-index 100)
      zIndex: 200,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingTop: 24
    },
    children: /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      ref: overlayRef,
      role: "dialog",
      "aria-modal": "true",
      "aria-label": "Search people",
      onClick: e => e.stopPropagation(),
      style: {
        width: 'calc(100% - 44px)',
        background: theme.colors.paper,
        borderRadius: 0,
        padding: 0,
        maxHeight: 'calc(100% - 40px)',
        display: 'flex',
        flexDirection: 'column'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '0 4px 8px',
          borderBottom: `1px solid ${theme.colors.rule}`
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
          name: "search",
          size: 16,
          color: theme.colors.ink3
        }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
          autoFocus: true,
          value: q,
          onChange: e => setQ(e.target.value),
          onKeyDown: handleKeyDown,
          placeholder: "Jump to a contact\u2026",
          style: {
            flex: 1,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontFamily: theme.fonts.serif,
            fontSize: 17,
            color: theme.colors.ink,
            padding: '6px 0'
          }
        }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
          onClick: onClose,
          "aria-label": "Close",
          style: {
            background: 'transparent',
            border: 'none',
            color: theme.colors.ink3,
            fontSize: 20,
            cursor: 'pointer',
            padding: 14,
            margin: -14
          },
          children: "\xD7"
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("ul", {
        style: {
          listStyle: 'none',
          margin: 0,
          padding: '4px 0',
          overflowY: 'auto',
          flex: 1
        },
        children: [results.map(p => /*#__PURE__*/jsxRuntimeExports.jsxs("li", {
          onClick: () => onPick(p.id),
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '8px 4px',
            borderBottom: `1px solid ${theme.colors.rule}`,
            cursor: 'pointer'
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
            name: p.name,
            photo: p.photo,
            size: 28
          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
            style: {
              flex: 1,
              minWidth: 0
            },
            children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
              style: {
                fontFamily: theme.fonts.serif,
                fontSize: 14.5,
                color: theme.colors.ink,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              },
              children: p.name
            }), (p.howWeMet || p.location) && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
              style: {
                marginTop: 1,
                fontFamily: theme.fonts.serif,
                fontStyle: 'italic',
                fontSize: 12,
                color: theme.colors.ink3,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              },
              children: [p.howWeMet, p.location].filter(Boolean).join(' · ')
            })]
          }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
            style: {
              fontFamily: theme.fonts.mono,
              fontSize: 10,
              color: theme.colors.ink4,
              letterSpacing: 0.5
            },
            children: "\u2192"
          })]
        }, p.id)), results.length === 0 && /*#__PURE__*/jsxRuntimeExports.jsx("li", {
          style: {
            padding: '20px 4px',
            fontFamily: theme.fonts.serif,
            fontStyle: 'italic',
            fontSize: 14,
            color: theme.colors.ink3,
            textAlign: 'center'
          },
          children: "No matches."
        })]
      })]
    })
  });
}
function todayMonoLabel() {
  return new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  }).toUpperCase().replace(',', ' ·');
}

// Build the attendee list shape the wallet card consumes.
// Matched people get full kit; event-only attendees from the .ics get a
// minimal row with a dashed-border avatar.
function enrichEvent(ev, people, circles) {
  const matched = (ev.matchedPersonIds || []).map(id => people.find(p => p.id === id)).filter(Boolean);
  const attendees = matched.map(p => {
    const primaryCircleId = (p.circleIds || [])[0];
    const primaryPath = primaryCircleId ? getPathString(circles, primaryCircleId) : null;
    const role = p.howWeMet || primaryPath || '';
    const openFollowUps = (p.followUps || []).filter(f => !f.done);
    const headsUp = openFollowUps[0]?.text || null;
    const talkingPoints = [];
    for (const d of (p.details || []).slice(0, 2)) {
      // Details are now { id, text, learnedAt, confirmedAt } objects (Phase 3
      // migration). Accept either shape so legacy strings still work too.
      const text = typeof d === 'string' ? d : d?.text;
      if (text) talkingPoints.push(text);
    }
    for (const f of (p.family || []).slice(0, 2)) {
      talkingPoints.push(`${f.name} · ${f.relation}`);
    }
    if (talkingPoints.length === 0 && p.location) talkingPoints.push(p.location);
    return {
      personId: p.id,
      // Forward the lead person's primary circle id so WalletStack can
      // color the card to match the circle. circleColorForEvent reads
      // this off attendees[0].
      primaryCircleId,
      name: p.name,
      photo: p.photo || null,
      initials: computeInitials(p.name),
      role,
      headsUp,
      talkingPoints: talkingPoints.slice(0, 3)
    };
  });

  // Event-only attendees (in the .ics but not in our directory).
  // Dedup by BOTH name and email — when a chip's email resolves to a
  // matched person (e.g. user just added "brian.malconian@gmail.com" as
  // a contact named "Me"), the matched-by-email pass surfaces "Me" in
  // matched[], but the event-only attendee still has display name
  // "Brian.Malconian@Gmail.Com" which wouldn't match "Me" by name.
  // The email-based dedup catches it.
  const matchedNamesLower = new Set(matched.map(p => p.name.toLowerCase()));
  const matchedEmailsLower = new Set(matched.map(p => (p.email || '').trim().toLowerCase()).filter(Boolean));
  for (const ea of ev.attendees || []) {
    const eaEmail = (ea.email || '').trim().toLowerCase();
    if (eaEmail && matchedEmailsLower.has(eaEmail)) continue;
    const rawName = ea.name && ea.name.trim() || ea.email && ea.email.split('@')[0].replace(/[._-]+/g, ' ') || '';
    const name = titleCase(rawName).trim();
    if (!name) continue;
    if (matchedNamesLower.has(name.toLowerCase())) continue;
    attendees.push({
      personId: null,
      name,
      // Forward the raw email so the "+ add" chip can park it in the
      // right field. Important when the .ics had no CN parameter and
      // `name` ends up being titlecased from the email's local part —
      // we still want the real email available to the new-person form.
      email: ea.email || null,
      initials: computeInitials(name),
      role: null,
      headsUp: null,
      talkingPoints: []
    });
  }
  return {
    id: ev.uid + ev.start,
    title: ev.summary || 'Calendar event',
    timeExact: timeExactString(ev.start),
    timeShort: relativeDayShort(new Date(ev.start)),
    place: ev.location || '',
    attendees,
    raw: ev
  };
}
function titleCase(s) {
  if (!s) return '';
  return s.split(/\s+/).map(w => w ? w[0].toUpperCase() + w.slice(1) : w).join(' ');
}

// =========================================================================
// COMPONENT
// =========================================================================

function Briefing({
  settings,
  onUpdateSettings,
  people,
  circles,
  events = [],
  loading = false,
  error = null,
  onRefresh,
  onRetryCalendar,
  onOpenPerson,
  onAddPerson,
  onOpenContactsImport,
  onCaptureSave,
  onCaptureSkip,
  onCaptureSkipUndo,
  onConfirmDetail,
  onRemoveDetail,
  onCallRecapSave,
  onCallRecapDismiss,
  onOutreachConnected,
  onResolveLoop,
  onOpenSettings,
  onSnooze,
  onOpenPulse,
  newlyUnlockedInsights = [],
  onAckInsights,
  onOpenSearch,
  lastExportAt = null,
  onBackup
}) {
  const cal = settings?.calendar;
  const range = settings?.briefing?.range || DEFAULT_RANGE;
  const [jumpOpen, setJumpOpen] = reactExports.useState(false);

  // Unlock banner dismiss runs the shared CardExit choreography; the ack
  // mutation fires in onGone.
  const [unlockLeaving, setUnlockLeaving] = reactExports.useState(false);

  // BackupNudge stays latched through its exit: "Later" defers its snooze
  // to onGone, and a successful backup flips `backupDue` false, which
  // triggers the same choreographed exit before unlatching.
  const backupDue = shouldRemindBackup(people, lastExportAt) && Date.now() > (settings?.snoozes?.backup || 0);
  const [backupShown, setBackupShown] = reactExports.useState(backupDue);
  const [backupLeaving, setBackupLeaving] = reactExports.useState(false);
  const backupCommitRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (backupDue) {
      setBackupShown(true);
      setBackupLeaving(false);
    } else if (backupShown) {
      setBackupLeaving(true);
    }
  }, [backupDue, backupShown]);

  // Filter events by the user's range pick (today / week / +next / 4w),
  // THEN enrich. Slice 4 last so the wallet stack always shows up to
  // 4 chronologically-earliest events in the chosen window.
  const enriched = reactExports.useMemo(() => filterEventsByRange(events, range).map(e => enrichEvent(e, people, circles)).slice(0, 4), [events, people, circles, range]);

  // Full filtered count (pre-slice) so the section label can say
  // "4 of N this week" when there are more than fit in the stack.
  const totalInRange = reactExports.useMemo(() => filterEventsByRange(events, range).length, [events, range]);
  function setRange(nextRange) {
    onUpdateSettings && onUpdateSettings({
      ...(settings || {}),
      briefing: {
        ...(settings && settings.briefing || {}),
        range: nextRange
      }
    });
  }
  const recentCaptures = reactExports.useMemo(() => recentCapturesFrom(people), [people]);

  // UP NEXT — the front half of Meeting Bookends. The next event inside 24h
  // with a matched person gets a one-glance Morning Read built purely from
  // what's already logged (open loops, last topic, follow-ups, recency).
  // Skipped when the brief is thin — an empty reading card is worse than none.
  const upNext = reactExports.useMemo(() => {
    const now = Date.now();
    const next = events.filter(e => {
      const t = new Date(e.start).getTime();
      return !Number.isNaN(t) && t >= now && t - now <= 24 * 3_600_000 && (e.matchedPersonIds || []).length > 0;
    }).sort((a, b) => new Date(a.start) - new Date(b.start))[0];
    if (!next) return null;
    const person = people.find(p => p.id === next.matchedPersonIds[0]);
    if (!person) return null;
    const brief = buildBrief(person, {
      now
    });
    if (brief.thin && brief.lines.length < 2) return null;
    return {
      event: next,
      person,
      brief
    };
  }, [events, people]);
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      padding: '28px 22px 0'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(CirclesLogo, {
        lockup: "horizontal"
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(SearchPill, {
          onOpen: () => onOpenSearch ? onOpenSearch() : setJumpOpen(true)
        }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
          onClick: () => {
            haptics.tap();
            onOpenSettings && onOpenSettings();
          },
          "aria-label": "Settings",
          className: "al-press",
          style: {
            width: 38,
            height: 38,
            borderRadius: theme.radii.pill,
            background: theme.colors.card,
            border: `1px solid ${theme.colors.rule}`,
            color: theme.colors.ink2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          },
          children: /*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
            name: "gear",
            size: 17
          })
        })]
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginTop: 16,
        ...labelStyle$1
      },
      children: todayMonoLabel()
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        fontFamily: theme.fonts.serif,
        fontSize: 32,
        fontWeight: 500,
        letterSpacing: '-0.02em',
        lineHeight: 1.08,
        marginTop: 6,
        color: theme.colors.ink
      },
      children: uniquePeopleTitle(enriched)
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginTop: 4,
        fontFamily: theme.fonts.serif,
        fontStyle: 'italic',
        fontSize: 16,
        color: theme.colors.ink3,
        lineHeight: 1.4
      },
      children: enriched.length > 0 ? 'Tap a card to bring it to the front.' : cal ? 'Nothing on your calendar this week.' : 'Connect a calendar to see who you’ll see.'
    }), people.length > 0 && /*#__PURE__*/jsxRuntimeExports.jsx(ScoreDial, {
      people: people,
      onOpenPulse: onOpenPulse
    }), !settings?.contacts?.imported && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginTop: 22
      },
      children: /*#__PURE__*/jsxRuntimeExports.jsx(ConnectContactsCard, {
        onStart: onOpenContactsImport,
        onSkip: () => onUpdateSettings({
          ...(settings || {}),
          contacts: {
            ...(settings?.contacts || {}),
            imported: true
          }
        })
      })
    }), newlyUnlockedInsights.length > 0 && /*#__PURE__*/jsxRuntimeExports.jsx(CardExit, {
      leaving: unlockLeaving,
      style: {
        marginTop: 22
      },
      onGone: () => {
        setUnlockLeaving(false);
        onAckInsights && onAckInsights();
      },
      children: /*#__PURE__*/jsxRuntimeExports.jsx(UnlockBanner, {
        insights: newlyUnlockedInsights,
        onOpen: () => {
          haptics.success && haptics.success();
          onAckInsights && onAckInsights();
          onOpenPulse && onOpenPulse();
        },
        onDismiss: () => {
          haptics.tap && haptics.tap();
          setUnlockLeaving(true);
        }
      })
    }), backupShown && /*#__PURE__*/jsxRuntimeExports.jsx(CardExit, {
      leaving: backupLeaving,
      style: {
        marginTop: 22
      },
      onGone: () => {
        const commit = backupCommitRef.current;
        backupCommitRef.current = null;
        setBackupShown(false);
        setBackupLeaving(false);
        commit && commit();
      },
      children: /*#__PURE__*/jsxRuntimeExports.jsx(BackupNudge, {
        people: people,
        lastExportAt: lastExportAt,
        onBackup: onBackup,
        onLater: () => {
          haptics.tap && haptics.tap();
          backupCommitRef.current = () => onUpdateSettings({
            ...(settings || {}),
            snoozes: {
              ...(settings?.snoozes || {}),
              backup: Date.now() + 7 * 86_400_000
            }
          });
          setBackupLeaving(true);
        }
      })
    }), people.length === 0 && Boolean(settings?.contacts?.imported) && /*#__PURE__*/jsxRuntimeExports.jsx(FirstPeopleCard, {
      onImport: () => onOpenContactsImport && onOpenContactsImport()
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 22
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        children: /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: labelStyle$1,
          children: ["WHAT'S COMING", totalInRange > enriched.length && /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
            style: {
              marginLeft: 6,
              color: theme.colors.ink4
            },
            children: ["\xB7 ", enriched.length, " OF ", totalInRange]
          }), totalInRange === enriched.length && totalInRange > 0 && /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
            style: {
              marginLeft: 6,
              color: theme.colors.ink4
            },
            children: ["\xB7 ", totalInRange]
          })]
        })
      }), cal && /*#__PURE__*/jsxRuntimeExports.jsx(RangeChips, {
        current: range,
        onChange: setRange
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          marginTop: 12
        },
        children: [!cal && /*#__PURE__*/jsxRuntimeExports.jsx(ConnectCard, {
          onConnect: value => onUpdateSettings({
            ...(settings || {}),
            calendar: value
          })
        }), cal && enriched.length > 0 && /*#__PURE__*/jsxRuntimeExports.jsx(WalletStack, {
          events: enriched,
          circles: circles,
          onOpenPerson: onOpenPerson,
          onAddPerson: onAddPerson
        }), cal && loading && enriched.length === 0 && !error && /*#__PURE__*/jsxRuntimeExports.jsx(WalletSkeleton, {}), cal && enriched.length === 0 && !loading && !error && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            ...cardShellStyle,
            textAlign: 'center',
            color: theme.colors.ink3,
            fontStyle: 'italic',
            fontFamily: theme.fonts.serif
          },
          children: emptyMessageFor(range)
        }), cal && error && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            ...cardShellStyle,
            borderColor: theme.colors.accent,
            color: theme.colors.accentInk
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
            style: labelAccent(),
            children: "COULDN'T LOAD"
          }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
            style: {
              marginTop: 4,
              fontSize: 13
            },
            children: error
          }), onRetryCalendar && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
            style: {
              marginTop: 10
            },
            children: /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
              variant: "mini",
              onClick: onRetryCalendar,
              children: "Try again"
            })
          })]
        })]
      })]
    }), upNext && /*#__PURE__*/jsxRuntimeExports.jsx(UpNextBrief, {
      event: upNext.event,
      person: upNext.person,
      brief: upNext.brief,
      onOpen: () => onOpenPerson(upNext.person.id)
    }), /*#__PURE__*/jsxRuntimeExports.jsx(RelationshipIntelligence, {
      people: people,
      circles: circles,
      events: events,
      settings: settings,
      onUpdateSettings: onUpdateSettings,
      onAddPerson: onAddPerson,
      onOpenPerson: onOpenPerson,
      onCaptureSave: onCaptureSave,
      onCaptureSkip: onCaptureSkip,
      onCaptureSkipUndo: onCaptureSkipUndo,
      onConfirmDetail: onConfirmDetail,
      onRemoveDetail: onRemoveDetail,
      onCallRecapSave: onCallRecapSave,
      onCallRecapDismiss: onCallRecapDismiss,
      onOutreachConnected: onOutreachConnected,
      onResolveLoop: onResolveLoop,
      onSnooze: onSnooze
    }), recentCaptures.length > 0 && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 22
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: labelStyle$1,
        children: "RECENT CAPTURES"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          marginTop: 10,
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        },
        children: recentCaptures.map(c => /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            ...cardShellStyle,
            padding: '10px 12px',
            cursor: 'pointer'
          },
          onClick: () => onOpenPerson(c.personId),
          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
            style: {
              display: 'flex',
              justifyContent: 'space-between'
            },
            children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
              style: labelStyle$1,
              children: c.when
            }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
              style: labelAccent(),
              children: ["\u2192 ", c.name]
            })]
          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
            style: {
              marginTop: 5,
              fontFamily: theme.fonts.serif,
              fontSize: 13,
              fontStyle: 'italic',
              lineHeight: 1.45,
              color: theme.colors.ink,
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical'
            },
            children: ["\"", c.text, "\""]
          })]
        }, c.id))
      })]
    }), people.length > 0 && /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
      onClick: () => onOpenPulse && onOpenPulse(),
      className: "al-press",
      style: {
        ...cardShellStyle,
        marginTop: 22,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        cursor: 'pointer',
        textAlign: 'left',
        background: theme.colors.accentSofter,
        borderColor: 'transparent'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          flex: 1,
          minWidth: 0
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            ...microLabel,
            color: theme.colors.accent
          },
          children: ["\u2736 YOUR ", seasonLabel().toUpperCase(), " IN PEOPLE"]
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            marginTop: 3,
            fontFamily: theme.fonts.serif,
            fontSize: 15,
            color: theme.colors.ink
          },
          children: "See your recap and who you're keeping up with."
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          fontFamily: theme.fonts.mono,
          fontSize: 16,
          color: theme.colors.accent
        },
        children: "\u2192"
      })]
    }), jumpOpen && /*#__PURE__*/jsxRuntimeExports.jsx(QuickJumpOverlay, {
      people: people,
      onClose: () => setJumpOpen(false),
      onPick: personId => {
        setJumpOpen(false);
        onOpenPerson && onOpenPerson(personId);
      }
    })]
  });
}

// =========================================================================
// SUB-COMPONENTS
// =========================================================================

// First-run hero — Today with zero people (the onboarding skip path).
// Same quiet voice as the shared EmptyState: serif title, sans subtitle,
// one primary action. Invitation, never obligation.
function FirstPeopleCard({
  onImport
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    className: "al-rise",
    style: {
      ...cardShellStyle,
      marginTop: 22,
      padding: '28px 22px 26px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 14,
      textAlign: 'center'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        fontFamily: theme.fonts.serif,
        fontSize: 18,
        fontWeight: 500,
        color: theme.colors.ink2
      },
      children: "Your circle starts here"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        fontFamily: theme.fonts.sans,
        fontSize: 13,
        color: theme.colors.ink3,
        maxWidth: 250,
        lineHeight: 1.55
      },
      children: "Add the few people who matter, then capture a moment with one of them \u2014 Circles builds from what you record."
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginTop: 4
      },
      children: /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
        onClick: onImport,
        children: "Add your first people"
      })
    })]
  });
}
function spellOut(n) {
  const map = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  return map[n] || String(n);
}

// Segmented pill row above the wallet stack — TODAY / WEEK / +NEXT / 4W.
// Each chip is a small mono pill matching the Map filter chips so the
// language is consistent across screens.
function RangeChips({
  current,
  onChange
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsx("div", {
    style: {
      marginTop: 8,
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    },
    children: RANGES.map(r => /*#__PURE__*/jsxRuntimeExports.jsx(Chip, {
      active: r.key === current,
      onClick: () => onChange(r.key),
      children: r.short
    }, r.key))
  });
}
function emptyMessageFor(range) {
  switch (range) {
    case 'today':
      return 'Nothing on your calendar today.';
    case 'this-week':
      return 'Nothing else on your calendar this week.';
    case 'two-weeks':
      return 'Nothing on your calendar in the next two weeks.';
    case 'four-weeks':
      return 'Nothing on your calendar in the next four weeks.';
    case 'past-week':
      return 'No events in the last week.';
    default:
      return 'Nothing on your calendar in this range.';
  }
}

// ============================ WALLET STACK ============================

function WalletStack({
  events,
  circles = [],
  onOpenPerson,
  onAddPerson
}) {
  const [activeIdx, setActiveIdx] = reactExports.useState(0);
  const items = events.slice(0, 4);
  const peekH = 42;

  // Every card lives in the same loop with a stable key so React can keep
  // it mounted while we slide it between peek and front positions. The card's
  // `top`/`left`/`right` change → CSS transition does the work.
  //
  // Layout rules:
  //   - back rank 0 sits at the top peek slot (oldest in stack visually);
  //     subsequent peeks step down by peekH; back cards in chronological order
  //   - active card sits below all peeks, full height
  const backIndices = items.map((_, i) => i).filter(i => i !== activeIdx);
  const backCount = backIndices.length;

  // Measure the active card's actual rendered height so the container
  // doesn't reserve dead space below short cards (e.g. the "No one
  // matched in your directory yet" empty state). ResizeObserver keeps
  // it accurate as the card's content changes — when the user expands
  // "see all" attendees, the container grows in step.
  const activeRef = reactExports.useRef(null);
  const [activeHeight, setActiveHeight] = reactExports.useState(360); // sensible default

  reactExports.useLayoutEffect(() => {
    const el = activeRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(entries => {
      const h = entries[0]?.contentRect?.height;
      if (typeof h === 'number' && h > 0) setActiveHeight(h);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [activeIdx]);
  function positionFor(i) {
    if (i === activeIdx) {
      return {
        top: backCount * peekH,
        left: 0,
        right: 0,
        zIndex: 100,
        scale: 1
      };
    }
    const rank = backIndices.indexOf(i);
    const inset = (backCount - rank) * 4;
    return {
      top: rank * peekH,
      left: inset,
      right: inset,
      zIndex: 10 + rank,
      // Cards further back sit very slightly smaller, so the stack reads
      // as receding paper rather than flat overlapping rectangles.
      scale: 1 - (backCount - rank) * 0.008
    };
  }
  const containerHeight = backCount * peekH + activeHeight;
  return /*#__PURE__*/jsxRuntimeExports.jsx("div", {
    style: {
      position: 'relative',
      height: containerHeight
    },
    children: items.map((ev, i) => {
      // Color comes from the lead attendee's primary circle when
      // possible — so a glance at the wallet stack tells you which
      // group each meeting belongs to. Falls back to the rotating
      // wallet palette only when nothing is matched / no circle is
      // assigned.
      const color = circleColorForEvent(ev, circles) || theme.walletColors[i % theme.walletColors.length];
      const isActive = i === activeIdx;
      const pos = positionFor(i);
      return /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        ref: isActive ? activeRef : null,
        className: isActive ? undefined : 'al-press',
        onClick: isActive ? undefined : () => setActiveIdx(i),
        role: isActive ? undefined : 'button',
        tabIndex: isActive ? undefined : 0,
        "aria-label": isActive ? undefined : `Bring ${ev.title || 'event'} to front`,
        onKeyDown: isActive ? undefined : e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setActiveIdx(i);
          }
        },
        style: {
          position: 'absolute',
          top: pos.top,
          left: pos.left,
          right: pos.right,
          zIndex: pos.zIndex,
          transform: `scale(${pos.scale})`,
          transformOrigin: 'center top',
          cursor: isActive ? 'default' : 'pointer',
          transition: ['top', 'left', 'right', 'transform'].map(p => `${p} ${theme.motion.slow}ms ${theme.ease.spring}`).join(', ')
        },
        children: isActive ? /*#__PURE__*/jsxRuntimeExports.jsx(EventCardFull, {
          ev: ev,
          color: color,
          onOpenPerson: onOpenPerson,
          onAddPerson: onAddPerson
        }) : /*#__PURE__*/jsxRuntimeExports.jsx(EventCardPeek, {
          ev: ev,
          color: color
        })
      }, ev.id);
    })
  });
}

// Shimmer placeholder shown while the calendar .ics is being fetched — three
// thin "peek" bars over one tall card, mirroring the real wallet stack so the
// layout doesn't jump when the events arrive.
function WalletSkeleton() {
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      position: 'relative'
    },
    "aria-hidden": "true",
    children: [[0, 1, 2].map(i => /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      className: "al-skel",
      style: {
        height: 34,
        borderRadius: 14,
        margin: `0 ${(3 - i) * 4}px 8px`,
        opacity: 0.7 - i * 0.14
      }
    }, i)), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      className: "al-skel",
      style: {
        height: 220,
        borderRadius: 14
      }
    })]
  });
}
function EventCardPeek({
  ev,
  color
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsx("div", {
    style: {
      padding: '12px 16px',
      background: walletGradient(color.bg),
      color: color.fg,
      borderRadius: 14,
      overflow: 'hidden',
      boxShadow: walletShadow(color.bg, false)
    },
    children: /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          display: 'flex',
          alignItems: 'baseline',
          gap: 8,
          minWidth: 0
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
          style: {
            fontFamily: theme.fonts.mono,
            fontSize: 10,
            opacity: 0.78,
            letterSpacing: 0.5,
            whiteSpace: 'nowrap'
          },
          children: ev.timeExact
        }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
          style: {
            fontFamily: theme.fonts.serif,
            fontSize: 14,
            fontWeight: 500,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          },
          children: ev.title
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          flexShrink: 0
        },
        children: /*#__PURE__*/jsxRuntimeExports.jsx(AvatarPile, {
          items: ev.attendees.map(a => ({
            name: a.name,
            initials: a.initials
          })),
          max: 2,
          size: 22,
          dark: !isLightHex(color.bg)
        })
      })]
    })
  });
}
function EventCardFull({
  ev,
  color,
  onOpenPerson,
  onAddPerson
}) {
  const multi = ev.attendees.length > 1;
  const isDark = !isLightHex(color.bg);
  const onDarkRgba = a => `rgba(246,241,231,${a})`;
  const onLightRgba = a => `rgba(58,42,16,${a})`;
  const sub = isDark ? onDarkRgba : onLightRgba;
  const [expanded, setExpanded] = reactExports.useState(false);
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      padding: '14px 18px 16px',
      background: walletGradient(color.bg),
      color: color.fg,
      borderRadius: 14,
      boxShadow: walletShadow(color.bg, true),
      position: 'relative',
      overflow: 'hidden'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          fontFamily: theme.fonts.mono,
          fontSize: 10,
          color: sub(0.78),
          letterSpacing: 0.6
        },
        children: ev.timeExact
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          fontFamily: theme.fonts.mono,
          fontSize: 9,
          color: sub(0.7)
        },
        children: ["\u25CF NEXT", multi ? ` · ${ev.attendees.length} PEOPLE` : '']
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        fontFamily: theme.fonts.serif,
        fontSize: 22,
        fontWeight: 500,
        letterSpacing: -0.3,
        marginTop: 4,
        lineHeight: 1.1
      },
      children: ev.title
    }), ev.place && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        ...microLabel,
        color: sub(0.6),
        marginTop: 4
      },
      children: ev.place
    }), ev.attendees.length === 0 ? /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 12,
        padding: '10px 12px',
        background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.30)',
        borderRadius: 10,
        fontFamily: theme.fonts.serif,
        fontStyle: 'italic',
        fontSize: 13,
        color: sub(0.78)
      },
      children: ["No one from this meeting is in Circles yet.", onAddPerson && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        children: /*#__PURE__*/jsxRuntimeExports.jsx("button", {
          className: "al-press",
          onClick: () => onAddPerson({
            name: '',
            email: ''
          }),
          style: {
            marginTop: 8,
            padding: '8px 16px',
            minHeight: 36,
            borderRadius: theme.radii.pill,
            border: 'none',
            background: isDark ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.35)',
            fontFamily: theme.fonts.sans,
            fontStyle: 'normal',
            fontSize: 13,
            fontWeight: 500,
            color: sub(0.9),
            cursor: 'pointer'
          },
          children: "+ Add someone"
        })
      })]
    }) : /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(AttendeeRow, {
        attendee: ev.attendees[0],
        sub: sub,
        isDark: isDark,
        withRing: multi,
        onClick: () => ev.attendees[0].personId && onOpenPerson && onOpenPerson(ev.attendees[0].personId),
        onAdd: !ev.attendees[0].personId && onAddPerson ? () => onAddPerson({
          name: ev.attendees[0].name,
          email: ev.attendees[0].email
        }) : null
      }), ev.attendees.length >= 3 && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          marginTop: 9,
          padding: '7px 12px',
          background: isDark ? 'rgba(0,0,0,0.10)' : 'rgba(0,0,0,0.05)',
          borderRadius: 8
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            ...microLabel,
            color: sub(0.55)
          },
          children: "FOR THE GROUP"
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            marginTop: 3,
            fontFamily: theme.fonts.serif,
            fontSize: 12,
            fontStyle: 'italic',
            lineHeight: 1.4,
            color: sub(0.92)
          },
          children: (ev.groupNotes && ev.groupNotes.length > 0 ? ev.groupNotes : ['Group event — tap a face to prep individually.']).map((g, i) => /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
            children: ["\xB7 ", g]
          }, i))
        })]
      }), multi && /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
        onClick: () => setExpanded(v => !v),
        style: {
          marginTop: 10,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 10,
          background: 'transparent',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          textAlign: 'left',
          color: 'inherit'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            minWidth: 0
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx(AvatarPile, {
            items: ev.attendees.slice(1).map(o => ({
              name: o.name,
              initials: o.initials,
              linked: Boolean(o.personId)
            })),
            max: 4,
            size: 26,
            dark: isDark
          }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
            style: {
              fontFamily: theme.fonts.serif,
              fontStyle: 'italic',
              fontSize: 12,
              color: sub(0.78),
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            },
            children: ev.attendees.slice(1).map(o => o.name.split(' ')[0]).join(', ')
          })]
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            fontFamily: theme.fonts.mono,
            fontSize: 10,
            color: sub(0.85),
            letterSpacing: 0.4,
            flexShrink: 0,
            textTransform: 'lowercase'
          },
          children: expanded ? '← show less' : 'see all →'
        })]
      }), multi && expanded && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          marginTop: 10,
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        },
        children: ev.attendees.slice(1).map((a, i) => /*#__PURE__*/jsxRuntimeExports.jsx(AttendeeRow, {
          attendee: a,
          sub: sub,
          isDark: isDark,
          onClick: () => a.personId && onOpenPerson && onOpenPerson(a.personId),
          onAdd: !a.personId && onAddPerson ? () => onAddPerson({
            name: a.name,
            email: a.email
          }) : null
        }, i))
      })]
    })]
  });
}

// One attendee's full kit inside an event card.
function AttendeeRow({
  attendee: a,
  sub,
  isDark,
  onClick,
  onAdd,
  withRing = false
}) {
  const linked = Boolean(a.personId);
  const chipBg = isDark ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.55)';
  const bubbleBg = isDark ? linked ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.05)' : linked ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.18)';
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    onClick: onClick,
    style: {
      padding: '10px 12px',
      background: bubbleBg,
      borderRadius: 10,
      cursor: linked ? 'pointer' : 'default',
      opacity: linked ? 1 : 0.85
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
        name: a.name,
        initials: a.initials,
        size: 32,
        dark: isDark,
        variant: linked ? 'filled' : 'dashed',
        ring: withRing
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          flex: 1,
          minWidth: 0,
          paddingTop: 1
        },
        children: /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            display: 'flex',
            alignItems: 'baseline',
            gap: 6,
            flexWrap: 'wrap',
            lineHeight: 1.2
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
            style: {
              fontFamily: theme.fonts.serif,
              fontSize: 14.5,
              fontWeight: 500
            },
            children: a.name
          }), a.role && /*#__PURE__*/jsxRuntimeExports.jsx("span", {
            style: {
              fontFamily: theme.fonts.serif,
              fontStyle: 'italic',
              fontSize: 12,
              color: sub(0.65)
            },
            children: a.role
          }), !linked && !a.role && /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
            style: {
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontFamily: theme.fonts.mono,
              fontSize: 9,
              color: sub(0.5),
              letterSpacing: 0.5,
              textTransform: 'uppercase'
            },
            children: ["not a contact", onAdd && /*#__PURE__*/jsxRuntimeExports.jsx("button", {
              onClick: e => {
                e.stopPropagation();
                onAdd();
              },
              "aria-label": `Add ${a.name} as a contact`,
              style: {
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 28,
                height: 28,
                borderRadius: theme.radii.pill,
                border: `1px solid ${sub(0.55)}`,
                background: 'transparent',
                color: sub(0.85),
                fontSize: 14,
                lineHeight: 1,
                cursor: 'pointer',
                padding: 0
              },
              children: "+"
            })]
          })]
        })
      })]
    }), a.headsUp && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 8,
        paddingLeft: 8,
        borderLeft: `2px solid ${sub(0.55)}`
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          ...microLabel,
          color: sub(0.55)
        },
        children: "ASK FIRST"
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          fontFamily: theme.fonts.serif,
          fontStyle: 'italic',
          fontSize: 13,
          lineHeight: 1.4,
          marginTop: 2
        },
        children: ["\"", a.headsUp, "\""]
      })]
    }), a.talkingPoints && a.talkingPoints.length > 0 && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 8
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          ...microLabel,
          color: sub(0.55)
        },
        children: "BRING UP"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          marginTop: 5,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 5
        },
        children: a.talkingPoints.map((t, i) => /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            padding: '3px 9px',
            borderRadius: 10,
            background: chipBg,
            fontFamily: theme.fonts.serif,
            fontSize: 11,
            lineHeight: 1.2
          },
          children: typeof t === 'string' ? t : t?.text || ''
        }, i))
      })]
    })]
  });
}

// ====================== RELATIONSHIP INTELLIGENCE ======================
//
// Two prompt families, rendered in strict priority order:
//
//   1. OPEN THREADS — anyone with at least one open follow-up
//   2. RECONNECT    — drift candidates, gated by:
//      a) is in at least one circle (person.circleIds.length > 0)
//      b) has prior logged activity (lastTouch !== null)
//      c) hasn't been touched in 30+ days
//
// The gating on (a) and (b) is deliberate — newly imported contacts you
// haven't built any history with shouldn't suddenly nag you. Only people
// you've already been intentional about (placed in a circle + logged a
// note OR had a calendar interaction with) qualify.

const RECONNECT_DAYS = 30;
const MAX_OPEN_THREADS = 3;
const MAX_RECONNECTS = 2;
function relativeStretch(days) {
  if (days < 14) return `${days} days`;
  if (days < 60) return `${Math.floor(days / 7)} weeks`;
  if (days < 365) return `${Math.floor(days / 30)} months`;
  return `${Math.floor(days / 365)} years`;
}

// A nudge is snoozed when settings.snoozes["kind:personId"] is a future ms.
function isSnoozed(settings, kind, personId, now = Date.now()) {
  const until = settings?.snoozes?.[`${kind}:${personId}`];
  return typeof until === 'number' && until > now;
}
function gatherOpenThreads(people, takenIds, settings, max = MAX_OPEN_THREADS) {
  const out = [];
  const now = Date.now();
  for (const p of people) {
    if (takenIds.has(p.id)) continue;
    if (isSnoozed(settings, 'open', p.id, now)) continue;
    const open = (p.followUps || []).filter(f => !f.done);
    if (open.length === 0) continue;
    out.push({
      kind: 'open',
      key: `open-${p.id}-${open[0].id}`,
      person: p,
      text: open[0].text,
      extra: open.length > 1 ? `+${open.length - 1} more open` : null
    });
    if (out.length >= max) break;
  }
  return out;
}
function gatherReconnects(people, takenIds, settings, max = MAX_RECONNECTS, now = Date.now()) {
  const candidates = [];
  for (const p of people) {
    if (takenIds.has(p.id)) continue;
    if (isSnoozed(settings, 'reconnect', p.id, now)) continue;
    // Gate (a): must be in at least one circle
    if (!(p.circleIds || []).length) continue;
    // Gate (b): must have prior activity
    const lastIso = lastTouch(p);
    if (!lastIso) continue;
    const ms = now - new Date(lastIso).getTime();
    const days = Math.floor(ms / 86_400_000);

    // Gate (c): overdue. With a personal cadence, "overdue" means past THEIR
    // window; without one, fall back to the global 30-day default. People who
    // set an explicit goal are prioritized — that's intent the app should honor.
    const cad = cadenceStatus(p, now);
    if (cad) {
      if (cad.state !== 'overdue') continue;
    } else if (days < RECONNECT_DAYS) {
      continue;
    }
    candidates.push({
      p,
      ms,
      days,
      cad
    });
  }
  // Cadence-overdue first (the user asked for it), then by how overdue.
  candidates.sort((a, b) => {
    const ax = a.cad ? 1 : 0;
    const bx = b.cad ? 1 : 0;
    if (ax !== bx) return bx - ax;
    return b.ms - a.ms;
  });
  return candidates.slice(0, max).map(({
    p,
    days,
    cad
  }) => ({
    kind: 'reconnect',
    key: `reconnect-${p.id}`,
    person: p,
    text: cad ? `It's been ${relativeStretch(days)} — time to reconnect.` : `It's been ${relativeStretch(days)} — worth a check-in?`,
    extra: cad ? `Goal · ${cadenceLabel(cad.key)}` : null,
    days
  }));
}

// ── Circle Score — the WHOOP-style daily dial ────────────────────────────
// One color-banded number that owns the day (the cadence-aware kept-up
// score), a coach line that says what to do about it, and a 7-day momentum
// strip for context. Tap-through to Pulse for the full breakdown.

function scoreBand(score) {
  if (score >= 67) return {
    color: 'var(--c-success)',
    word: 'Strong'
  };
  if (score >= 34) return {
    color: 'var(--c-amber)',
    word: 'Cooling'
  };
  return {
    color: 'var(--c-danger)',
    word: 'Drifting'
  };
}
function coachLine(score, health) {
  // health.drifting already excludes never-touched ('new') people, so the
  // cooling count only speaks about relationships with an actual record.
  const n = health.drifting.length;
  if (score >= 67) return "You're well connected — keep the rhythm.";
  if (score >= 34) {
    return n > 0 ? `${n} ${n === 1 ? 'thread is' : 'threads are'} cooling — one check-in today lifts it.` : 'Steady — a touch this week keeps it green.';
  }
  return 'Quiet week so far — one hello changes that.';
}
function ScoreDial({
  people,
  onOpenPulse
}) {
  const health = relationshipHealth(people);
  const week = dailyMomentCounts(people, 7);
  const score = Math.round(health.score * 100);
  const band = scoreBand(score);

  // Sweep the arc in on mount; rest immediately under reduced-motion or a
  // hidden tab (where animations freeze and would strand the dial at zero).
  const [mounted, setMounted] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hidden = typeof document !== 'undefined' && document.hidden;
    if (reduce || hidden) {
      setMounted(true);
      return;
    }
    const id = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(id);
  }, []);
  if (health.total === 0) return null;

  // Honesty at zero: if everyone in circles is still 'new' (no moment ever
  // logged), there is no score to show — invite the first moment instead of
  // rendering a red 0 about relationships the app knows nothing about yet.
  if (health.total - health.fresh.length === 0) {
    return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        ...cardShellStyle,
        marginTop: 22,
        padding: '14px 16px'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: microLabel,
        children: "CIRCLE SCORE"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          marginTop: 6,
          fontFamily: theme.fonts.serif,
          fontSize: 17,
          color: theme.colors.ink
        },
        children: "Starts with your first moment."
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          marginTop: 3,
          fontFamily: theme.fonts.serif,
          fontStyle: 'italic',
          fontSize: 13,
          color: theme.colors.ink3,
          lineHeight: 1.45
        },
        children: "Log a coffee, a call, a catch-up \u2014 your score builds from what you record."
      })]
    });
  }
  const R = 70;
  const SW = 11;
  const C = 2 * Math.PI * R;
  const SWEEP = 0.75; // 270° dial, gap at the bottom
  const arcLen = C * SWEEP;
  const valueLen = Math.max(0.01, arcLen * (score / 100));
  const maxDay = Math.max(...week.days.map(d => d.count), 1);
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    role: "button",
    tabIndex: 0,
    "aria-label": `Circle score ${score} percent — ${band.word}. ${coachLine(score, health)} Open your pulse.`,
    onClick: () => {
      haptics.tap();
      onOpenPulse && onOpenPulse();
    },
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onOpenPulse && onOpenPulse();
      }
    },
    className: "al-press",
    style: {
      ...cardShellStyle,
      marginTop: 22,
      padding: '14px 16px 12px',
      cursor: 'pointer'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: microLabel,
        children: "CIRCLE SCORE"
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        className: "al-tnum",
        style: {
          fontFamily: theme.fonts.mono,
          fontSize: 9,
          color: theme.colors.ink4,
          letterSpacing: '0.12em'
        },
        children: ["THIS WEEK \xB7 ", week.total, " ", week.total === 1 ? 'MOMENT' : 'MOMENTS']
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        position: 'relative',
        width: 172,
        margin: '6px auto 0'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("svg", {
        viewBox: "0 0 168 168",
        style: {
          width: '100%',
          display: 'block'
        },
        "aria-hidden": "true",
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("circle", {
          cx: 84,
          cy: 84,
          r: R,
          fill: "none",
          stroke: "var(--c-paper-deep)",
          strokeWidth: SW,
          strokeLinecap: "round",
          strokeDasharray: `${arcLen} ${C}`,
          transform: "rotate(135 84 84)"
        }), /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
          className: "al-score-arc",
          cx: 84,
          cy: 84,
          r: R,
          fill: "none",
          stroke: "currentColor",
          strokeWidth: SW,
          strokeLinecap: "round",
          strokeDasharray: `${valueLen} ${C}`,
          strokeDashoffset: mounted ? 0 : valueLen,
          transform: "rotate(135 84 84)",
          style: {
            color: band.color,
            opacity: mounted ? 1 : 0,
            transition: `stroke-dashoffset 1100ms ${theme.ease.out}, opacity 400ms ease`
          }
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          className: "al-tnum",
          style: {
            fontFamily: theme.fonts.serif,
            fontSize: 40,
            fontWeight: 600,
            color: theme.colors.ink,
            lineHeight: 1,
            letterSpacing: '-0.02em'
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx(CountUp, {
            value: score,
            durationMs: 1100
          }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
            style: {
              fontSize: 20,
              fontWeight: 500,
              color: theme.colors.ink3
            },
            children: "%"
          })]
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            ...microLabel,
            marginTop: 4,
            color: band.color
          },
          children: band.word
        })]
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        textAlign: 'center',
        fontFamily: theme.fonts.serif,
        fontStyle: 'italic',
        fontSize: 13,
        color: theme.colors.ink2,
        margin: '2px 0 12px',
        lineHeight: 1.4
      },
      children: coachLine(score, health)
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        gap: 6,
        padding: '0 8px'
      },
      children: week.days.map(d => /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            width: '100%',
            maxWidth: 22,
            height: 4 + Math.round(d.count / maxDay * 24),
            borderRadius: 4,
            background: d.count === 0 ? 'var(--c-paper-deep)' : band.color,
            opacity: d.count === 0 ? 1 : d.isToday ? 1 : 0.55,
            transition: `height 400ms ${theme.ease.out}`
          }
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            fontFamily: theme.fonts.mono,
            fontSize: 10,
            color: d.isToday ? theme.colors.ink : theme.colors.ink4,
            fontWeight: d.isToday ? 600 : 400
          },
          children: d.label
        })]
      }, d.key))
    })]
  });
}

// The "back up your circles" reminder card. Tone shifts on how exposed the
// data is: warm-amber when stale, a firmer terracotta when never backed up.
function BackupNudge({
  people,
  lastExportAt,
  onBackup,
  onLater
}) {
  const [busy, setBusy] = reactExports.useState(false);
  const toast = useToast();
  const status = backupStatus(lastExportAt);
  const never = status === 'never';
  const tint = never ? theme.colors.accent : theme.colors.amber; // terracotta vs amber

  async function go() {
    if (busy) return;
    haptics.tap && haptics.tap();
    setBusy(true);
    try {
      const res = onBackup ? await onBackup() : null;
      if (res && res.ok) {
        haptics.success && haptics.success();
        // The card unmounts as the data goes fresh — the toast carries the
        // confirmation (and lives in the provider above, so it survives).
        toast.show({
          message: res.method === 'download' ? 'Backed up ✓ — keep that file in iCloud Drive' : 'Backed up ✓'
        });
      }
    } finally {
      setBusy(false);
    }
  }
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    className: "al-pop",
    style: {
      ...cardShellStyle,
      padding: '16px 16px 14px'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 12
      },
      children: /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          flex: 1,
          minWidth: 0
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            ...microLabel,
            color: tint
          },
          children: never ? 'Not backed up' : 'Backup is getting old'
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            marginTop: 4,
            fontFamily: theme.fonts.serif,
            fontSize: 18,
            letterSpacing: -0.3,
            color: theme.colors.ink
          },
          children: "Back up your circles."
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            marginTop: 3,
            fontFamily: theme.fonts.sans,
            fontSize: 13,
            lineHeight: 1.5,
            color: theme.colors.ink3
          },
          children: [backupReminderText(people, lastExportAt), " If you lose your phone, they\u2019re gone. Save a copy to iCloud Drive."]
        })]
      })
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 12,
        display: 'flex',
        gap: 8,
        justifyContent: 'flex-end',
        alignItems: 'center'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: onLater,
        className: "al-press",
        style: {
          background: 'transparent',
          border: 'none',
          fontFamily: theme.fonts.mono,
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: theme.colors.ink3,
          cursor: 'pointer',
          padding: '8px 10px',
          margin: '-8px -10px',
          minHeight: 32
        },
        children: "LATER"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: go,
        disabled: busy,
        className: "al-press",
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          padding: '12px 20px',
          minHeight: 44,
          borderRadius: theme.radii.pill,
          border: 'none',
          background: theme.colors.ink,
          color: theme.colors.paper,
          fontFamily: theme.fonts.serif,
          fontSize: 15,
          cursor: busy ? 'default' : 'pointer',
          opacity: busy ? 0.6 : 1
        },
        children: busy ? 'Saving…' : 'Back up now'
      })]
    })]
  });
}
function UnlockBanner({
  insights,
  onOpen,
  onDismiss
}) {
  const one = insights.length === 1;
  const title = one ? insights[0].title : `${insights.length} new insights`;
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    role: "button",
    tabIndex: 0,
    "aria-label": `New insight unlocked: ${title}. Open your pulse.`,
    onClick: onOpen,
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onOpen();
      }
    },
    className: "al-press al-rise",
    style: {
      ...cardShellStyle,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: theme.colors.accentSoft,
      borderColor: 'transparent',
      cursor: 'pointer'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        fontSize: 16,
        lineHeight: 1,
        color: theme.colors.accent,
        animation: `al-sparkle 600ms ${theme.ease.out} both`
      },
      "aria-hidden": "true",
      children: "\u2736"
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        flex: 1,
        minWidth: 0
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          ...microLabel,
          color: theme.colors.accent
        },
        children: "New insight unlocked"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          fontFamily: theme.fonts.serif,
          fontSize: 15,
          fontWeight: 600,
          color: theme.colors.ink,
          marginTop: 1,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        },
        children: title
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
      style: {
        fontFamily: theme.fonts.mono,
        fontSize: 10,
        color: theme.colors.accent,
        whiteSpace: 'nowrap'
      },
      children: "See \u2192"
    }), /*#__PURE__*/jsxRuntimeExports.jsx(CloseButton, {
      label: "Dismiss",
      onClick: e => {
        e.stopPropagation();
        onDismiss && onDismiss();
      }
    })]
  });
}
function RelationshipIntelligence({
  people,
  circles = [],
  events = [],
  settings,
  onUpdateSettings,
  onAddPerson,
  onOpenPerson,
  onCaptureSave,
  onCaptureSkip,
  onCaptureSkipUndo,
  onConfirmDetail,
  onRemoveDetail,
  onCallRecapSave,
  onCallRecapDismiss,
  onOutreachConnected,
  onResolveLoop,
  onSnooze
}) {
  const toast = useToast();

  // Shared exit choreography (motion.1): a tapped action marks its card
  // "leaving"; CardExit runs al-card-out + the height collapse, then the
  // real mutation fires in onGone via the pending-commit map.
  const [leavingKeys, setLeavingKeys] = reactExports.useState(() => new Set());
  const pendingGone = reactExports.useRef(new Map());
  function leaveCard(key, commit) {
    pendingGone.current.set(key, commit);
    setLeavingKeys(prev => {
      const next = new Set(prev);
      next.add(key);
      return next;
    });
  }
  function cardGone(key) {
    const commit = pendingGone.current.get(key);
    pendingGone.current.delete(key);
    setLeavingKeys(prev => {
      if (!prev.has(key)) return prev;
      const next = new Set(prev);
      next.delete(key);
      return next;
    });
    commit && commit();
  }

  // Outreach recaps (the Loop Closer) — settings.pendingCallRecaps[] holds
  // { personId, ts, channel } rows written when the user taps a call/text/
  // email quick action. ripeOutreach picks the ones worth asking about now
  // (calls immediately, texts/emails after 20h, all expire at 96h, cap 2)
  // and resolves each to its person so the card can render avatar + name.
  const callRecaps = reactExports.useMemo(() => ripeOutreach(settings && settings.pendingCallRecaps || [], people, Date.now()), [settings, people]);

  // Phase 3 tiers — order matters; everything renders top-down.
  // Cross-card dedupe: ONE card per person per render. Each tier claims its
  // people so lower tiers skip them — recap > capture > loop > birthday >
  // friendaversary > open thread > reconnect. Memories and still-true checks
  // stay exempt (they're about the record, not another nag), and discoveries
  // are by definition people not in Circles yet.
  const {
    captures,
    loops,
    birthdays,
    anniversaries,
    openThreads,
    reconnects
  } = reactExports.useMemo(() => {
    const now = Date.now();
    const taken = new Set(callRecaps.map(r => r.person.id));
    const claim = list => {
      const kept = list.filter(x => !taken.has(x.person.id));
      for (const x of kept) taken.add(x.person.id);
      return kept;
    };
    const captures = claim(gatherCaptureCandidates(people, events, settings));
    // Open loops that have ripened — unresolved, past their ripeAt, not
    // actively snoozed. Capped at 3 inside ripeLoops; Today is a nudge,
    // not a backlog.
    const loops = claim(ripeLoops(people, {
      now,
      snoozes: settings?.snoozes || {}
    }));
    // Birthdays in the next 10 days; friend-anniversaries in two weeks.
    const birthdays = claim(upcomingBirthdays(people, 10));
    const anniversaries = claim(friendaversaries(people, 14, new Date()).slice(0, 2));
    const openThreads = gatherOpenThreads(people, taken, settings);
    for (const t of openThreads) taken.add(t.person.id);
    const reconnects = gatherReconnects(people, taken, settings);
    return {
      captures,
      loops,
      birthdays,
      anniversaries,
      openThreads,
      reconnects
    };
  }, [callRecaps, people, events, settings]);
  const stillTrue = reactExports.useMemo(() => gatherStillTrueCandidates(people), [people]);
  // "On this day" memories from a year+ ago.
  const memories = reactExports.useMemo(() => onThisDay(people), [people]);

  // People you keep meeting who aren't in Circles yet — the calendar turning
  // itself into a people-finder.
  const discoveries = reactExports.useMemo(() => {
    const selfEmails = [settings?.me?.email].filter(Boolean);
    const dismissed = settings?.discoveryDismissed || [];
    return suggestedContacts(events, people, {
      selfEmails,
      dismissed
    }).slice(0, 2);
  }, [events, people, settings]);
  function dismissDiscovery(key) {
    if (!onUpdateSettings) return;
    const prev = settings?.discoveryDismissed || [];
    onUpdateSettings({
      ...(settings || {}),
      discoveryDismissed: [...prev, key]
    });
  }

  // ---- The Daily Deal — a finite hand of ASKS, three per day ----
  // Celebrations (birthdays, friendaversaries, memories) always show: hiding
  // a birthday behind "show waiting" would be dishonest. The asks — the cards
  // that want something from you — are dealt three per local day, stable all
  // day (persisted in settings.dailyDeal), and when the hand is cleared the
  // stack says "that's it for today" and means it. The rest stays one tap
  // away, never rationed by force.
  const askCards = reactExports.useMemo(() => [...callRecaps.map(r => ({
    key: `recap-${r.entry.personId}-${r.entry.channel}-${r.entry.ts}`,
    tier: 'recap'
  })), ...captures.map(c => ({
    key: c.key,
    tier: 'capture'
  })), ...loops.map(l => ({
    key: `loop-${l.loop.id}`,
    tier: 'loop'
  })), ...discoveries.map(d => ({
    key: d.key,
    tier: 'discovery'
  })), ...stillTrue.map(s => ({
    key: s.key,
    tier: 'stillTrue'
  })), ...openThreads.map(p => ({
    key: p.key,
    tier: 'thread'
  })), ...reconnects.map(p => ({
    key: p.key,
    tier: 'reconnect'
  }))], [callRecaps, captures, loops, discoveries, stillTrue, openThreads, reconnects]);
  const askKeysSig = askCards.map(c => c.key).join('|');
  const [showAll, setShowAll] = reactExports.useState(false);
  const deal = settings?.dailyDeal;
  reactExports.useEffect(() => {
    if (!onUpdateSettings) return;
    const r = reconcileDeal(deal, askCards);
    if (r.changed) {
      onUpdateSettings({
        ...(settings || {}),
        dailyDeal: {
          day: r.day,
          dealt: r.dealt
        }
      });
    }
    // Narrow deps on purpose — reconcileDeal is a no-op for a full same-day
    // hand, so this only writes on a new day or a thin-morning top-up.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [askKeysSig, deal?.day, (deal?.dealt || []).length]);
  const {
    dealtSet,
    waiting,
    done
  } = reactExports.useMemo(() => handStatus(deal?.day === dayKey() ? deal?.dealt : [], askCards.map(c => c.key)),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [deal, askKeysSig]);
  const inHand = key => showAll || dealtSet.has(key);
  const totalCount = callRecaps.length + captures.length + loops.length + discoveries.length + birthdays.length + anniversaries.length + openThreads.length + reconnects.length + memories.length + stillTrue.length;
  // Keep the section mounted for the "that's it for today" close even when
  // clearing the last ask empties the stack.
  if (totalCount === 0 && !done) return null;
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      marginTop: 22
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: labelStyle$1,
      children: ["RELATIONSHIP INTELLIGENCE \xB7 ", totalCount]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      },
      children: [discoveries.filter(d => inHand(d.key)).map(d => /*#__PURE__*/jsxRuntimeExports.jsx(CardExit, {
        leaving: leavingKeys.has(d.key),
        onGone: () => cardGone(d.key),
        children: /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            ...cardShellStyle,
            padding: '10px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: 10
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
            name: d.name,
            size: 28
          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
            style: {
              flex: 1,
              minWidth: 0
            },
            children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
              style: {
                ...microLabel,
                color: theme.colors.accent
              },
              children: "\u25CF You keep meeting"
            }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
              style: {
                fontFamily: theme.fonts.serif,
                fontSize: 15,
                fontWeight: 600,
                color: theme.colors.ink,
                marginTop: 1,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              },
              children: d.name
            }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
              className: "al-tnum",
              style: {
                fontFamily: theme.fonts.sans,
                fontSize: 11,
                color: theme.colors.ink3
              },
              children: ["Together in ", d.count, " events"]
            })]
          }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
            onClick: () => onAddPerson && onAddPerson({
              name: d.name,
              email: d.email
            }),
            className: "al-press",
            style: {
              padding: '8px 16px',
              minHeight: 36,
              borderRadius: theme.radii.pill,
              border: 'none',
              background: theme.colors.ink,
              color: theme.colors.paper,
              fontFamily: theme.fonts.sans,
              fontSize: 13,
              fontWeight: 500,
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            },
            children: "Add"
          }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
            onClick: () => {
              haptics.tap && haptics.tap();
              leaveCard(d.key, () => dismissDiscovery(d.key));
            },
            "aria-label": `Dismiss ${d.name}`,
            style: {
              background: 'transparent',
              border: 'none',
              color: theme.colors.ink3,
              fontSize: 16,
              lineHeight: 1,
              cursor: 'pointer',
              padding: 14,
              margin: -14
            },
            children: "\xD7"
          })]
        })
      }, d.key)), callRecaps.filter(r => inHand(`recap-${r.entry.personId}-${r.entry.channel}-${r.entry.ts}`)).map(r => {
        const key = `recap-${r.entry.personId}-${r.entry.channel}-${r.entry.ts}`;
        return /*#__PURE__*/jsxRuntimeExports.jsx(CardExit, {
          leaving: leavingKeys.has(key),
          onGone: () => cardGone(key),
          children: /*#__PURE__*/jsxRuntimeExports.jsx(CallRecapCard, {
            person: r.person,
            entry: r.entry,
            prompt: r.prompt,
            onConnected: () => {
              haptics.success && haptics.success();
              leaveCard(key, () => {
                onOutreachConnected && onOutreachConnected(r.person.id, r.entry.channel);
                toast.show({
                  message: `Logged · ${firstName(r.person.name)} ✓`
                });
              });
            },
            onSave: text => {
              haptics.success && haptics.success();
              leaveCard(key, () => {
                onCallRecapSave && onCallRecapSave(r.person.id, text, r.entry.channel);
                toast.show({
                  message: `Logged · ${firstName(r.person.name)} ✓`
                });
              });
            },
            onDismiss: () => {
              haptics.tap && haptics.tap();
              leaveCard(key, () => {
                onCallRecapDismiss && onCallRecapDismiss(r.person.id, r.entry.channel);
              });
            }
          })
        }, key);
      }), captures.filter(c => inHand(c.key)).map(c => /*#__PURE__*/jsxRuntimeExports.jsx(CaptureCard, {
        candidate: c,
        onSave: noteText => {
          haptics.success && haptics.success();
          onCaptureSave && onCaptureSave({
            event: c.event,
            personId: c.person.id,
            noteText
          });
          toast.show({
            message: `Saved to ${firstName(c.person.name)} ✓`
          });
        },
        onSkip: () => {
          haptics.tap && haptics.tap();
          onCaptureSkip && onCaptureSkip(c.key);
          toast.show({
            message: 'Skipped',
            actionLabel: 'Undo',
            onAction: () => onCaptureSkipUndo && onCaptureSkipUndo(c.key)
          });
        },
        onOpen: () => onOpenPerson(c.person.id)
      }, c.key)), loops.filter(l => inHand(`loop-${l.loop.id}`)).map(l => {
        const key = `loop-${l.loop.id}`;
        return /*#__PURE__*/jsxRuntimeExports.jsx(CardExit, {
          leaving: leavingKeys.has(key),
          onGone: () => cardGone(key),
          children: /*#__PURE__*/jsxRuntimeExports.jsx(OpenLoopCard, {
            person: l.person,
            loop: l.loop,
            onOpen: () => onOpenPerson(l.person.id),
            onResolve: () => {
              haptics.success && haptics.success();
              leaveCard(key, () => {
                onResolveLoop && onResolveLoop(l.person.id, l.loop.id);
                toast.show({
                  message: `Loop closed · ${firstName(l.person.name)} ✓`
                });
              });
            },
            onSnooze: () => {
              haptics.tap && haptics.tap();
              leaveCard(key, () => {
                onSnooze && onSnooze('loop', l.loop.id);
                toast.show({
                  message: 'Snoozed for a week'
                });
              });
            }
          })
        }, key);
      }), birthdays.map(b => /*#__PURE__*/jsxRuntimeExports.jsx(BirthdayCard, {
        entry: b,
        onOpen: () => onOpenPerson(b.person.id)
      }, `bday-${b.person.id}`)), anniversaries.map(a => /*#__PURE__*/jsxRuntimeExports.jsx(FriendaversaryCard, {
        entry: a,
        onOpen: () => onOpenPerson(a.person.id)
      }, `franniv-${a.person.id}`)), openThreads.filter(p => inHand(p.key)).map(p => /*#__PURE__*/jsxRuntimeExports.jsx(CardExit, {
        leaving: leavingKeys.has(p.key),
        onGone: () => cardGone(p.key),
        children: /*#__PURE__*/jsxRuntimeExports.jsx(PromptCard, {
          kind: p.kind,
          person: p.person,
          text: p.text,
          extra: p.extra,
          onOpen: () => onOpenPerson(p.person.id),
          onSnooze: () => {
            haptics.tap && haptics.tap();
            leaveCard(p.key, () => {
              onSnooze && onSnooze('open', p.person.id);
              toast.show({
                message: `Snoozed ${firstName(p.person.name)} for a week`
              });
            });
          }
        })
      }, p.key)), reconnects.filter(p => inHand(p.key)).map(p => /*#__PURE__*/jsxRuntimeExports.jsx(CardExit, {
        leaving: leavingKeys.has(p.key),
        onGone: () => cardGone(p.key),
        children: /*#__PURE__*/jsxRuntimeExports.jsx(PromptCard, {
          kind: p.kind,
          person: p.person,
          text: p.text,
          extra: p.extra,
          onOpen: () => onOpenPerson(p.person.id),
          onSnooze: () => {
            haptics.tap && haptics.tap();
            leaveCard(p.key, () => {
              onSnooze && onSnooze('reconnect', p.person.id);
              toast.show({
                message: `Snoozed ${firstName(p.person.name)} for a week`
              });
            });
          }
        })
      }, p.key)), memories.map(m => /*#__PURE__*/jsxRuntimeExports.jsx(MemoryCard, {
        memory: m,
        onOpen: () => onOpenPerson(m.person.id)
      }, `mem-${m.person.id}-${m.date}`)), stillTrue.filter(s => inHand(s.key)).map(s => /*#__PURE__*/jsxRuntimeExports.jsx(StillTrueCard, {
        candidate: s,
        onConfirm: () => onConfirmDetail && onConfirmDetail(s.person.id, s.detail.id),
        onRemove: () => onRemoveDetail && onRemoveDetail(s.person.id, s.detail.id),
        onEdit: () => onOpenPerson(s.person.id)
      }, s.key)), !showAll && done && /*#__PURE__*/jsxRuntimeExports.jsx(DealDoneCard, {
        waiting: waiting.length,
        onShowAll: () => setShowAll(true)
      }), !showAll && !done && waiting.length > 0 && /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
        onClick: () => setShowAll(true),
        className: "al-press",
        style: {
          ...microLabel,
          alignSelf: 'center',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '10px 12px'
        },
        children: ["Show ", waiting.length, " more waiting"]
      })]
    })]
  });
}

// The Daily Deal's close — the only relationship app that tells you when
// you're done. Warm full stop, not a reward screen; "show waiting" keeps the
// finiteness honest (a cap on attention, not on information).
function DealDoneCard({
  waiting,
  onShowAll
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    className: "al-pop",
    style: {
      ...cardShellStyle,
      background: theme.colors.accentSoft,
      borderColor: 'transparent',
      padding: '16px 16px 14px',
      textAlign: 'center'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
      "aria-hidden": true,
      style: {
        display: 'inline-block',
        color: theme.colors.accent,
        fontSize: 16,
        animation: `al-sparkle 600ms ${theme.ease.out} both`
      },
      children: "\u2736"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginTop: 6,
        fontFamily: theme.fonts.serif,
        fontSize: 18,
        letterSpacing: '-0.01em',
        color: theme.colors.ink
      },
      children: "That's it for today."
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginTop: 3,
        fontFamily: theme.fonts.sans,
        fontSize: 13,
        lineHeight: 1.5,
        color: theme.colors.ink2
      },
      children: "The rest can wait \u2014 see you tomorrow."
    }), waiting > 0 && /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
      onClick: onShowAll,
      className: "al-press",
      style: {
        ...microLabel,
        marginTop: 10,
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '10px 12px'
      },
      children: ["Show ", waiting, " waiting"]
    })]
  });
}

// Capture card — collapsed by default ("How was X?"), tap to expand
// into a small note input with Save + Skip.
// Outreach recap card (the Loop Closer) — appears at the top of
// RELATIONSHIP INTELLIGENCE once an outreach attempt (call/text/email
// quick action) is ripe for an answer. The headline is the channel's
// question ("Did Anna text back?"). "We connected ✓" logs the connection
// without a note; typing a note swaps the primary to save via
// onCallRecapSave; "didn't happen" dismisses without writing anything.
function CallRecapCard({
  person,
  entry,
  prompt,
  onConnected,
  onSave,
  onDismiss
}) {
  // Mounts collapsed — no surface may steal focus (or the keyboard) on
  // Today. Expanding is the user's call; only then does the textarea focus.
  const [open, setOpen] = reactExports.useState(false);
  const [text, setText] = reactExports.useState('');
  const taRef = reactExports.useRef(null);
  const mins = Math.max(0, Math.round((Date.now() - entry.ts) / 60000));
  const when = mins < 1 ? 'just now' : mins < 60 ? `${mins} min ago` : mins < 1440 ? `${Math.floor(mins / 60)}h ago` : `${Math.floor(mins / 1440)}d ago`;
  function handleSave() {
    if (!onSave) return;
    onSave(text);
    setText('');
  }
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      ...cardShellStyle,
      padding: '10px 12px',
      textAlign: 'left'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          ...microLabel,
          color: theme.colors.accent
        },
        children: ["\u25CF CONNECTED? \xB7 ", when]
      }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: onDismiss,
        "aria-label": "Didn't happen",
        style: {
          background: 'transparent',
          border: 'none',
          color: theme.colors.ink3,
          fontSize: 11,
          fontWeight: 500,
          fontFamily: theme.fonts.mono,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          padding: '12px 10px',
          margin: '-12px -10px',
          whiteSpace: 'nowrap'
        },
        children: "didn't happen"
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
      onClick: () => setOpen(v => {
        const next = !v;
        if (next) setTimeout(() => taRef.current && taRef.current.focus(), 0);
        return next;
      }),
      "aria-expanded": open,
      style: {
        marginTop: 4,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        background: 'transparent',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        textAlign: 'left',
        color: 'inherit'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
        name: person.name,
        photo: person.photo,
        size: 28
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          flex: 1,
          minWidth: 0
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            fontFamily: theme.fonts.serif,
            fontSize: 14,
            fontWeight: 500,
            color: theme.colors.ink,
            lineHeight: 1.2
          },
          children: prompt
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            marginTop: 1,
            fontFamily: theme.fonts.sans,
            fontSize: 13,
            color: theme.colors.ink3,
            lineHeight: 1.35,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          },
          children: person.name
        })]
      })]
    }), open && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 10
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("textarea", {
        ref: taRef,
        value: text,
        onChange: e => setText(e.target.value),
        placeholder: "One line about what came up\u2026",
        rows: 2,
        style: {
          width: '100%',
          padding: '10px 12px',
          fontFamily: theme.fonts.serif,
          fontSize: 16,
          background: theme.colors.paper,
          border: `1px solid ${theme.colors.rule}`,
          borderRadius: theme.radii.md,
          outline: 'none',
          color: theme.colors.ink,
          resize: 'vertical',
          boxSizing: 'border-box'
        },
        onKeyDown: e => {
          if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) handleSave();
        }
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          marginTop: 8,
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 8
        },
        children: /*#__PURE__*/jsxRuntimeExports.jsx("button", {
          onClick: () => text.trim() ? handleSave() : onConnected && onConnected(),
          style: {
            padding: '8px 16px',
            minHeight: 36,
            borderRadius: theme.radii.pill,
            border: 'none',
            background: theme.colors.ink,
            color: theme.colors.paper,
            fontFamily: theme.fonts.sans,
            fontSize: 13,
            fontWeight: 500,
            cursor: 'pointer'
          },
          children: text.trim() ? 'Save recap' : 'We connected ✓'
        })
      })]
    })]
  });
}
function CaptureCard({
  candidate,
  onSave,
  onSkip,
  onOpen
}) {
  const [open, setOpen] = reactExports.useState(false);
  const [text, setText] = reactExports.useState('');
  const {
    event,
    person
  } = candidate;
  const firstName = (person.name || '').split(' ')[0] || person.name;
  function handleSave() {
    if (!onSave) return;
    onSave(text);
    setText('');
    setOpen(false);
  }
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      ...cardShellStyle,
      padding: '10px 12px',
      textAlign: 'left'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          ...microLabel,
          color: theme.colors.accent
        },
        children: "\u25CF JUST WRAPPED"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: onSkip,
        "aria-label": "Skip capture",
        style: {
          background: 'transparent',
          border: 'none',
          color: theme.colors.ink3,
          fontSize: 11,
          fontWeight: 500,
          fontFamily: theme.fonts.mono,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          padding: '12px 10px',
          margin: '-12px -10px'
        },
        children: "skip"
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
      onClick: () => setOpen(v => !v),
      "aria-expanded": open,
      style: {
        marginTop: 4,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        background: 'transparent',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        textAlign: 'left',
        color: 'inherit'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
        name: person.name,
        photo: person.photo,
        size: 28
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          flex: 1,
          minWidth: 0
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            fontFamily: theme.fonts.serif,
            fontSize: 14,
            fontWeight: 500,
            color: theme.colors.ink,
            lineHeight: 1.2
          },
          children: ["How did it go with ", firstName, "?"]
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            marginTop: 1,
            fontFamily: theme.fonts.sans,
            fontSize: 13,
            color: theme.colors.ink3,
            lineHeight: 1.35,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          },
          children: event.title || event.summary || 'Past event'
        })]
      })]
    }), open && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 10
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("textarea", {
        value: text,
        onChange: e => setText(e.target.value),
        placeholder: "One line about what came up\u2026",
        rows: 2,
        autoFocus: true,
        style: {
          width: '100%',
          padding: '10px 12px',
          fontFamily: theme.fonts.serif,
          fontSize: 16,
          background: theme.colors.paper,
          border: `1px solid ${theme.colors.rule}`,
          borderRadius: theme.radii.md,
          outline: 'none',
          color: theme.colors.ink,
          resize: 'vertical',
          boxSizing: 'border-box'
        },
        onKeyDown: e => {
          if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) handleSave();
        }
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          marginTop: 8,
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 8
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("button", {
          onClick: onOpen,
          style: {
            background: 'transparent',
            border: 'none',
            color: theme.colors.ink3,
            fontFamily: theme.fonts.mono,
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            padding: '8px 10px',
            margin: '-8px -10px',
            minHeight: 32
          },
          children: "open card \u2192"
        }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
          onClick: handleSave,
          style: {
            padding: '8px 16px',
            minHeight: 36,
            borderRadius: theme.radii.pill,
            border: 'none',
            background: theme.colors.ink,
            color: theme.colors.paper,
            fontFamily: theme.fonts.sans,
            fontSize: 13,
            fontWeight: 500,
            cursor: 'pointer'
          },
          children: text.trim() ? 'Log it' : 'Just log the meeting'
        })]
      })]
    })]
  });
}

// Still-true card — shows the aged detail with three inline actions:
// ✓ Still true (resets confirmedAt), ✎ Update (opens person's card),
// × No longer (removes the detail).
function StillTrueCard({
  candidate,
  onConfirm,
  onRemove,
  onEdit
}) {
  const {
    person,
    detail,
    ageMs
  } = candidate;
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      ...cardShellStyle,
      padding: '10px 12px'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          ...microLabel,
          color: theme.colors.accent
        },
        children: "\u25CF STILL TRUE?"
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: metaRightStyle,
        children: [relativeAge(ageMs), " \xB7 ", person.name.split(' ')[0]]
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 4,
        display: 'flex',
        alignItems: 'center',
        gap: 10
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
        name: person.name,
        photo: person.photo,
        size: 28
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          flex: 1,
          minWidth: 0,
          fontFamily: theme.fonts.serif,
          fontSize: 13,
          color: theme.colors.ink,
          lineHeight: 1.4,
          fontStyle: 'italic'
        },
        children: ["\"", detail.text, "\""]
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 8,
        display: 'flex',
        justifyContent: 'flex-end',
        gap: 6
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(StillTrueChip, {
        onClick: onRemove,
        children: "\xD7 No longer"
      }), /*#__PURE__*/jsxRuntimeExports.jsx(StillTrueChip, {
        onClick: onEdit,
        children: "\u270E Update"
      }), /*#__PURE__*/jsxRuntimeExports.jsx(StillTrueChip, {
        primary: true,
        onClick: onConfirm,
        children: "\u2713 Still true"
      })]
    })]
  });
}
function StillTrueChip({
  primary = false,
  onClick,
  children
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsx(Chip, {
    active: primary,
    onClick: onClick,
    children: children
  });
}
function BirthdayCard({
  entry,
  onOpen
}) {
  const {
    person,
    label,
    days,
    age
  } = entry;
  return /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
    onClick: onOpen,
    className: "al-press",
    style: {
      ...cardShellStyle,
      padding: '10px 12px',
      cursor: 'pointer',
      textAlign: 'left',
      display: 'block',
      width: '100%',
      color: 'inherit',
      font: 'inherit'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          ...microLabel,
          color: theme.colors.amberInk
        },
        children: ["\u25CF BIRTHDAY \xB7 ", whenLabel(days)]
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: metaRightStyle,
        children: label
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 6,
        display: 'flex',
        alignItems: 'center',
        gap: 10
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
        name: person.name,
        photo: person.photo,
        size: 28
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          minWidth: 0
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            fontFamily: theme.fonts.serif,
            fontSize: 15,
            fontWeight: 600,
            color: theme.colors.ink
          },
          children: person.name
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            fontFamily: theme.fonts.sans,
            fontSize: 13,
            color: theme.colors.ink3
          },
          children: age ? `Turning ${age}` : 'A good moment to reach out'
        })]
      })]
    })]
  });
}

// Friendaversary card — the anniversary of when a friendship started
// (person.metOn). Mirrors BirthdayCard so the two celebrations sit as
// siblings in the stack.
function FriendaversaryCard({
  entry,
  onOpen
}) {
  const {
    person,
    years,
    label,
    when
  } = entry;
  return /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
    onClick: onOpen,
    className: "al-press",
    style: {
      ...cardShellStyle,
      padding: '10px 12px',
      cursor: 'pointer',
      textAlign: 'left',
      display: 'block',
      width: '100%',
      color: 'inherit',
      font: 'inherit'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          ...microLabel,
          color: theme.colors.amberInk
        },
        children: ["\u2736 FRIENDAVERSARY \xB7 ", when.toUpperCase()]
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: metaRightStyle,
        children: years === 1 ? '1 year' : `${years} years`
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 6,
        display: 'flex',
        alignItems: 'center',
        gap: 10
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
        name: person.name,
        photo: person.photo,
        size: 28
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          minWidth: 0
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            fontFamily: theme.fonts.serif,
            fontSize: 15,
            fontWeight: 600,
            color: theme.colors.ink
          },
          children: person.name
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            fontFamily: theme.fonts.sans,
            fontSize: 13,
            color: theme.colors.ink3
          },
          children: label
        })]
      })]
    })]
  });
}
function MemoryCard({
  memory,
  onOpen
}) {
  const {
    person,
    item,
    yearsAgo
  } = memory;
  const isNote = item.source === 'note';
  const summary = (item.summary || '').trim() || (isNote ? 'a note' : 'you met');
  const who = (person.name || '').split(' ')[0];
  return /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
    onClick: onOpen,
    className: "al-press",
    style: {
      ...cardShellStyle,
      padding: '10px 12px',
      cursor: 'pointer',
      textAlign: 'left',
      display: 'block',
      width: '100%',
      color: 'inherit',
      font: 'inherit'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: microLabel,
        children: ["\u2736 ON THIS DAY \xB7 ", yearsAgoLabel(yearsAgo)]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: metaRightStyle,
        children: ["\u2192 ", who]
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginTop: 5,
        fontFamily: theme.fonts.serif,
        fontStyle: 'italic',
        fontSize: 14,
        color: theme.colors.ink,
        lineHeight: 1.4
      },
      children: isNote ? `“${summary}”` : summary
    })]
  });
}
function PromptCard({
  kind,
  person,
  text,
  extra,
  onOpen,
  onSnooze
}) {
  const tagLabel = kind === 'open' ? 'OPEN THREAD' : 'RECONNECT';
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    onClick: onOpen,
    className: "al-press",
    style: {
      ...cardShellStyle,
      padding: '10px 12px',
      cursor: 'pointer',
      textAlign: 'left',
      display: 'block',
      width: '100%',
      color: 'inherit',
      font: 'inherit'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          ...microLabel,
          color: theme.colors.accent
        },
        children: ["\u25CF ", tagLabel]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 10
        },
        children: [onSnooze && /*#__PURE__*/jsxRuntimeExports.jsx("button", {
          onClick: e => {
            e.stopPropagation();
            onSnooze();
          },
          "aria-label": `Later — snooze ${person.name} for a week`,
          style: {
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontFamily: theme.fonts.mono,
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: theme.colors.ink3,
            padding: '12px 10px',
            margin: '-12px -10px'
          },
          children: "Later"
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: metaRightStyle,
          children: ["\u2192 ", person.name.split(' ')[0]]
        })]
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
      onClick: e => {
        e.stopPropagation();
        onOpen();
      },
      "aria-label": `${kind === 'open' ? 'Open thread' : 'Reconnect'} — ${person.name}: ${text}`,
      style: {
        marginTop: 4,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        background: 'transparent',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        textAlign: 'left',
        color: 'inherit',
        font: 'inherit'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
        name: person.name,
        photo: person.photo,
        size: 28
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          flex: 1,
          minWidth: 0
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            fontFamily: theme.fonts.serif,
            fontSize: 14,
            fontWeight: 500,
            color: theme.colors.ink,
            lineHeight: 1.2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          },
          children: person.name
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            marginTop: 1,
            fontFamily: theme.fonts.serif,
            fontStyle: kind === 'reconnect' ? 'italic' : 'normal',
            fontSize: 13,
            color: kind === 'reconnect' ? theme.colors.ink3 : theme.colors.ink2,
            lineHeight: 1.35,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
          },
          children: kind === 'open' ? `"${text}"` : text
        }), extra && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            marginTop: 2,
            fontFamily: theme.fonts.mono,
            fontSize: 9,
            color: theme.colors.ink3,
            letterSpacing: 0.4
          },
          children: extra
        })]
      })]
    })]
  });
}

// Open-loop card — one ripened unfinished storyline ("You said you'd send
// the intro deck"). Tap the card to open the person; "Resolved ✓" stamps
// the loop closed, "Later" snoozes it for a week.
function OpenLoopCard({
  person,
  loop,
  onOpen,
  onResolve,
  onSnooze
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    onClick: onOpen,
    className: "al-press",
    style: {
      ...cardShellStyle,
      padding: '10px 12px',
      cursor: 'pointer',
      textAlign: 'left',
      display: 'block',
      width: '100%',
      color: 'inherit',
      font: 'inherit'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          ...microLabel,
          color: theme.colors.accent
        },
        children: "\u25CF OPEN LOOP"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: metaRightStyle,
        children: ageLabel(loop)
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
      onClick: e => {
        e.stopPropagation();
        onOpen();
      },
      "aria-label": `Open loop: ${loopHeadline$1({
        loop
      })} — ${person.name} · ${ageLabel(loop)}`,
      style: {
        marginTop: 4,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        background: 'transparent',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        textAlign: 'left',
        color: 'inherit',
        font: 'inherit'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
        name: person.name,
        photo: person.photo,
        size: 28
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          flex: 1,
          minWidth: 0
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            fontFamily: theme.fonts.serif,
            fontSize: 14,
            fontWeight: 500,
            color: theme.colors.ink,
            lineHeight: 1.35,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
          },
          children: loopHeadline$1({
            loop
          })
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            marginTop: 1,
            fontFamily: theme.fonts.sans,
            fontSize: 13,
            color: theme.colors.ink3,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          },
          children: person.name
        })]
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 8,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 8
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: e => {
          e.stopPropagation();
          onSnooze && onSnooze();
        },
        "aria-label": `Later — snooze ${person.name} for a week`,
        style: {
          background: 'transparent',
          border: 'none',
          color: theme.colors.ink3,
          fontFamily: theme.fonts.mono,
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          padding: '12px 10px',
          margin: '-12px -10px'
        },
        children: "Later"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: e => {
          e.stopPropagation();
          onResolve && onResolve();
        },
        "aria-label": `Mark resolved — ${person.name}`,
        style: {
          padding: '8px 16px',
          minHeight: 36,
          borderRadius: theme.radii.pill,
          border: 'none',
          background: theme.colors.ink,
          color: theme.colors.paper,
          fontFamily: theme.fonts.sans,
          fontSize: 13,
          fontWeight: 500,
          cursor: 'pointer',
          whiteSpace: 'nowrap'
        },
        children: "Resolved \u2713"
      })]
    })]
  });
}

// Up-next brief — the front half of Meeting Bookends. A calm reading card
// for the next event inside 24h: what you'd most regret not mentioning,
// straight from the person's own record. Tap anywhere to open them.
function UpNextBrief({
  event,
  person,
  brief,
  onOpen
}) {
  const first = (person.name || '').split(' ')[0] || person.name;
  const start = new Date(event.start);
  const timeLabel = `${relativeDayShort(start).toUpperCase()} ${start.toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: '2-digit'
  }).toUpperCase()}`;
  return /*#__PURE__*/jsxRuntimeExports.jsx("div", {
    style: {
      marginTop: 22
    },
    children: /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
      onClick: onOpen,
      className: "al-press",
      style: {
        ...cardShellStyle,
        padding: '12px 14px',
        cursor: 'pointer',
        textAlign: 'left',
        display: 'block',
        width: '100%',
        color: 'inherit',
        font: 'inherit'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 8
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: labelStyle$1,
          children: ["UP NEXT \xB7 ", timeLabel]
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: metaRightStyle,
          children: ["\u2192 ", first]
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          marginTop: 6,
          display: 'flex',
          alignItems: 'center',
          gap: 10
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
          name: person.name,
          photo: person.photo,
          size: 28
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            minWidth: 0,
            fontFamily: theme.fonts.serif,
            fontSize: 16,
            fontWeight: 500,
            letterSpacing: '-0.01em',
            color: theme.colors.ink,
            lineHeight: 1.25,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          },
          children: event.summary || `You'll see ${first}`
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          gap: 5
        },
        children: brief.lines.map((line, i) => /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            display: 'flex',
            alignItems: 'flex-start',
            gap: 8
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
            style: {
              width: 4,
              height: 4,
              borderRadius: '50%',
              background: theme.colors.accent,
              marginTop: 6,
              flexShrink: 0
            }
          }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
            style: {
              fontFamily: theme.fonts.sans,
              fontSize: 12,
              color: theme.colors.ink2,
              lineHeight: 1.45
            },
            children: line.text
          })]
        }, `${line.kind}-${i}`))
      })]
    })
  });
}

// ====================== RECENT CAPTURES helper ======================

function recentCapturesFrom(people) {
  const all = [];
  for (const p of people) {
    for (const n of p.notes || []) {
      all.push({
        id: n.id,
        date: n.date,
        text: n.text,
        personId: p.id,
        name: p.name
      });
    }
  }
  all.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  return all.slice(0, 3).map(c => ({
    ...c,
    when: timeAgoCapture(c.date)
  }));
}
function timeAgoCapture(iso) {
  try {
    const d = new Date(iso);
    const mins = Math.floor((Date.now() - d) / 60000);
    if (mins < 60) return `${Math.max(1, mins)}M AGO`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}H AGO`;
    const days = Math.floor(hrs / 24);
    if (days < 7) return `${days}D AGO`;
    return d.toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric'
    }).toUpperCase();
  } catch {
    return '';
  }
}

// ====================== CONNECT CALENDAR CARD =======================

function ConnectCard({
  onConnect
}) {
  const [url, setUrl] = reactExports.useState('');
  const [label, setLabel] = reactExports.useState('');
  const [testing, setTesting] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  async function handleConnect() {
    if (!url.trim()) return;
    setTesting(true);
    setError(null);
    try {
      const res = await fetch('/api/calendar/fetch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          url: url.trim()
        })
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || 'That link didn’t respond — double-check the URL and try again.');
      }
      onConnect({
        source: 'ics',
        url: url.trim(),
        label: label.trim() || 'My calendar'
      });
    } catch (e) {
      // fetch network failures are TypeError — only copy we wrote (or the
      // server's own j.error) ever reaches the card, never raw jargon.
      setError(e instanceof TypeError ? 'Couldn’t reach that calendar — check your connection and try again.' : e.message || 'Couldn’t connect — try again.');
    } finally {
      setTesting(false);
    }
  }
  const inputStyle = {
    width: '100%',
    padding: '10px 12px',
    fontFamily: theme.fonts.sans,
    fontSize: 16,
    background: theme.colors.paper,
    border: `1px solid ${theme.colors.rule}`,
    borderRadius: 8,
    outline: 'none',
    color: theme.colors.ink
  };
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      ...cardShellStyle,
      padding: '16px 18px'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        fontFamily: theme.fonts.serif,
        fontSize: 18,
        fontWeight: 500,
        letterSpacing: -0.3,
        color: theme.colors.ink,
        marginBottom: 4
      },
      children: "Connect a calendar."
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        fontFamily: theme.fonts.serif,
        fontStyle: 'italic',
        fontSize: 13,
        color: theme.colors.ink3,
        marginBottom: 14,
        lineHeight: 1.4
      },
      children: "See who's on your schedule \u2014 with prep cards already loaded."
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: labelStyle$1,
      children: "CALENDAR (.ICS URL)"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
      value: url,
      onChange: e => setUrl(e.target.value),
      placeholder: "https://calendar.google.com/.../basic.ics",
      style: {
        ...inputStyle,
        marginTop: 4,
        marginBottom: 10
      },
      autoFocus: true
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: labelStyle$1,
      children: "LABEL (OPTIONAL)"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
      value: label,
      onChange: e => setLabel(e.target.value),
      placeholder: "e.g., Work calendar",
      style: {
        ...inputStyle,
        marginTop: 4,
        marginBottom: 12
      }
    }), error && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        fontSize: 12,
        color: theme.colors.accentInk,
        marginBottom: 10,
        fontFamily: theme.fonts.serif,
        fontStyle: 'italic'
      },
      children: error
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        display: 'flex',
        justifyContent: 'flex-end'
      },
      children: /*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: handleConnect,
        disabled: !url.trim() || testing,
        style: {
          padding: '12px 20px',
          minHeight: 44,
          borderRadius: theme.radii.pill,
          background: theme.colors.ink,
          color: theme.colors.paper,
          border: 'none',
          fontFamily: theme.fonts.serif,
          fontSize: 15,
          cursor: !url.trim() || testing ? 'not-allowed' : 'pointer',
          opacity: !url.trim() || testing ? 0.55 : 1
        },
        children: testing ? 'Testing…' : 'Connect'
      })
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("details", {
      style: {
        marginTop: 14,
        color: theme.colors.ink3,
        fontSize: 13,
        lineHeight: 1.55
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("summary", {
        style: {
          cursor: 'pointer',
          fontFamily: theme.fonts.serif,
          fontStyle: 'italic',
          color: theme.colors.ink2
        },
        children: "Where do I get my .ics URL?"
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("p", {
        style: {
          marginTop: 6
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("strong", {
          children: "Google"
        }), " \u2014 Settings \u2192 your calendar \u2192 ", /*#__PURE__*/jsxRuntimeExports.jsx("em", {
          children: "Integrate calendar"
        }), " \u2192 copy ", /*#__PURE__*/jsxRuntimeExports.jsx("em", {
          children: "Secret address in iCal format"
        }), "."]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("p", {
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("strong", {
          children: "iCloud"
        }), " \u2014 right-click a calendar \u2192 ", /*#__PURE__*/jsxRuntimeExports.jsx("em", {
          children: "Share"
        }), " \u2192 enable", /*#__PURE__*/jsxRuntimeExports.jsx("em", {
          children: " Public Calendar"
        }), " \u2192 swap ", /*#__PURE__*/jsxRuntimeExports.jsx("code", {
          children: "webcal://"
        }), " for ", /*#__PURE__*/jsxRuntimeExports.jsx("code", {
          children: "https://"
        }), "."]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("p", {
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("strong", {
          children: "Outlook"
        }), " \u2014 Settings \u2192 Calendar \u2192 Shared calendars \u2192", /*#__PURE__*/jsxRuntimeExports.jsx("em", {
          children: " Publish"
        }), " \u2192 ICS link."]
      })]
    })]
  });
}

// ====================== CONNECT CONTACTS CARD =======================
//
// Prompt card that mirrors ConnectCard but for contacts. Clicking
// "Sync contacts" routes to the dedicated ContactsImport screen.
// "Skip" just flips settings.contacts.imported so the prompt stops
// nagging without forcing the user through the picker.
function ConnectContactsCard({
  onStart,
  onSkip
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      ...cardShellStyle,
      padding: '16px 18px'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: labelStyle$1,
        children: "CONTACTS"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: onSkip,
        style: {
          background: 'transparent',
          border: 'none',
          color: theme.colors.ink3,
          cursor: 'pointer',
          fontFamily: theme.fonts.mono,
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          padding: '12px 10px',
          margin: '-12px -10px'
        },
        children: "skip"
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginTop: 6,
        fontFamily: theme.fonts.serif,
        fontSize: 18,
        fontWeight: 500,
        letterSpacing: -0.3,
        color: theme.colors.ink,
        marginBottom: 4
      },
      children: "Sync your contacts."
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        fontFamily: theme.fonts.serif,
        fontStyle: 'italic',
        fontSize: 13,
        color: theme.colors.ink3,
        marginBottom: 14,
        lineHeight: 1.4
      },
      children: "Import a vCard (.vcf) from your phone \u2014 we'll show every contact for your review before anything gets saved."
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        display: 'flex',
        justifyContent: 'flex-end'
      },
      children: /*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: onStart,
        style: {
          padding: '12px 20px',
          minHeight: 44,
          borderRadius: theme.radii.pill,
          background: theme.colors.ink,
          color: theme.colors.paper,
          border: 'none',
          fontFamily: theme.fonts.serif,
          fontSize: 15,
          cursor: 'pointer'
        },
        children: "Sync contacts"
      })
    })]
  });
}

// native.js — a thin runtime bridge to Capacitor.
//
// IMPORTANT: never statically import @capacitor/* here. The web app is served
// with no bundler (esm.sh import maps), so a bare `@capacitor/...` import would
// break dev and bloat the build. Everything is reached through the runtime
// global `window.Capacitor.Plugins`, with graceful web no-ops — exactly the
// pattern src/lib/contacts.js uses.

function plugins() {
  return typeof window !== 'undefined' && window.Capacitor && window.Capacitor.Plugins || null;
}

/** True only inside the native iOS/Android shell. */
function isNative() {
  return Boolean(typeof window !== 'undefined' && window.Capacitor && typeof window.Capacitor.isNativePlatform === 'function' && window.Capacitor.isNativePlatform());
}

/**
 * Fire an immediate local notification on device. Requests permission the first
 * time. No-op (returns false) on the web, where the in-app banner already
 * covers the case. Never throws.
 */
async function fireLocalNotification({
  title,
  body,
  id
} = {}) {
  const LN = plugins() && plugins().LocalNotifications;
  if (!LN) return false;
  try {
    let granted = false;
    if (LN.checkPermissions) {
      const p = await LN.checkPermissions();
      granted = p && p.display === 'granted';
    }
    if (!granted && LN.requestPermissions) {
      const r = await LN.requestPermissions();
      granted = r && r.display === 'granted';
    }
    if (!granted) return false;
    await LN.schedule({
      notifications: [{
        id: id || Math.floor(Math.random() * 1_000_000),
        title: title || 'Circles',
        body: body || ''
      }]
    });
    return true;
  } catch {
    return false;
  }
}

/**
 * Save a backup file the user can keep OFF this device.
 *
 *   Native iOS: write the JSON into the app's Documents, then present the
 *   system share sheet so the user can one-tap "Save to Files → iCloud Drive"
 *   (or AirDrop / Mail it). Needs @capacitor/filesystem + @capacitor/share in
 *   the native shell; falls through to the web path if they're absent.
 *
 *   Web: trigger a normal file download. On iOS Safari this lands in Files,
 *   where the user can move it into iCloud Drive.
 *
 * Returns { ok, method }. Never throws.
 */
async function saveBackupFile({
  filename,
  text
} = {}) {
  const name = filename || 'circles-backup.json';
  const P = plugins();
  if (isNative() && P && P.Filesystem && P.Share) {
    try {
      const written = await P.Filesystem.writeFile({
        path: name,
        data: text || '',
        directory: 'DOCUMENTS',
        // Capacitor Directory.Documents
        encoding: 'utf8' // Capacitor Encoding.UTF8
      });
      await P.Share.share({
        title: 'Circles backup',
        text: 'Your Circles backup — save it to iCloud Drive to keep it safe.',
        url: written && written.uri,
        dialogTitle: 'Save your Circles backup'
      });
      return {
        ok: true,
        method: 'share'
      };
    } catch {
      // fall through to the web download below
    }
  }
  try {
    if (typeof document === 'undefined') return {
      ok: false,
      method: 'none'
    };
    const blob = new Blob([text || ''], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    return {
      ok: true,
      method: 'download'
    };
  } catch {
    return {
      ok: false,
      method: 'none'
    };
  }
}

// --- Native HTTP (CORS-free) ----------------------------------------------
// The web app can't fetch a third-party .ics directly (CORS), so it proxies
// through the Express server. The native shell CAN — CapacitorHttp issues
// the request from the OS layer. Returns the body text, or null when the
// plugin is unavailable (caller falls back to the server path). Never throws.

async function httpGetText(url, {
  timeoutMs = 10_000
} = {}) {
  const P = plugins();
  const Http = P && (P.CapacitorHttp || P.Http);
  if (!Http || !Http.get) return null;
  try {
    const res = await Http.get({
      url,
      headers: {
        Accept: 'text/calendar, text/plain, */*'
      },
      connectTimeout: timeoutMs,
      readTimeout: timeoutMs,
      responseType: 'text'
    });
    if (!res || res.status < 200 || res.status >= 300) return null;
    return typeof res.data === 'string' ? res.data : String(res.data ?? '');
  } catch {
    return null;
  }
}

// --- Biometric app-lock (Face ID / Touch ID) -----------------------------
// Reached through @aparajita/capacitor-biometric-auth's runtime plugin
// `BiometricAuth`. On the web (or a native build without the plugin) these
// no-op so the app falls back to the passcode. Never throw.

function biometricPlugin() {
  const P = plugins();
  return P && P.BiometricAuth || null;
}

/** { available, type } — whether Face ID / Touch ID can be used right now. */
async function biometricAvailable() {
  const B = biometricPlugin();
  if (!B || !B.checkBiometry) return {
    available: false,
    type: null
  };
  try {
    const r = await B.checkBiometry();
    return {
      available: Boolean(r && r.isAvailable),
      type: r && r.biometryType || null
    };
  } catch {
    return {
      available: false,
      type: null
    };
  }
}

/**
 * Prompt Face ID / Touch ID to unlock. Resolves true on success, false on
 * cancel/failure (caller then offers the passcode). Allows the device
 * passcode as the system fallback.
 */
async function verifyBiometric(reason = 'Unlock Circles') {
  const B = biometricPlugin();
  if (!B || !B.authenticate) return false;
  try {
    await B.authenticate({
      reason,
      allowDeviceCredential: true,
      iosFallbackTitle: 'Use Passcode',
      cancelTitle: 'Cancel'
    });
    return true;
  } catch {
    return false;
  }
}

// ics.js — parse iCalendar (.ics) text ON-DEVICE, so the native app can read
// a calendar feed with no server round-trip. Output matches EXACTLY what the
// server's /api/calendar/fetch returns (see server/index.js normalizeEvent):
//   { uid, start, end, allDay, summary, location, description, attendees }
// so App.jsx can push either source through the same pipeline and dedupe on
// uid+start. Pure + deterministic given `now`; expandIcsEvents NEVER throws —
// unparseable events are skipped, garbage input yields [].
//
// Scope is the RFC 5545 subset real Google/Apple/Outlook exports contain,
// with two deliberate approximations:
//   • Floating and TZID-parameterized times are read as LOCAL wall-clock time
//     on this device — no VTIMEZONE math. For "did I see this person", the
//     device's zone is ~always the event's zone, and full IANA timezone
//     resolution is not worth shipping to a phone.
//   • MONTHLY BYDAY understands ordinal forms (2TU = second Tuesday, -1FR =
//     last Friday); a bare weekday list on MONTHLY falls back to the
//     same-day-of-month rule.
// Recurrence expansion is window-bounded and hard-capped (1000 instances per
// file) so a hostile feed can't wedge the UI thread.

const DAY = 86_400_000;

// ───────── text plumbing ─────────

// RFC folding: a line starting with one space/tab continues the previous line.
function unfoldLines(text) {
  const out = [];
  for (const line of String(text).split(/\r?\n/)) {
    if ((line.startsWith(' ') || line.startsWith('\t')) && out.length) {
      out[out.length - 1] += line.slice(1);
    } else if (line !== '') {
      out.push(line);
    }
  }
  return out;
}

// TEXT value escapes: \n (newline), \, \; \\ literals.
const unescapeText$1 = s => String(s).replace(/\\([\\;,nN])/g, (_, c) => c === 'n' || c === 'N' ? '\n' : c);

// NAME;PARAM="a:b";P2=c:VALUE — the colon and semicolons that structure the
// line only count OUTSIDE quoted param values (CN="Smith, Jane" is one param).
function parseContentLine(line) {
  let inQ = false;
  let colon = -1;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') inQ = !inQ;else if (c === ':' && !inQ) {
      colon = i;
      break;
    }
  }
  if (colon === -1) return null;
  const head = line.slice(0, colon);
  const value = line.slice(colon + 1);
  const parts = [];
  let cur = '';
  inQ = false;
  for (const c of head) {
    if (c === '"') {
      inQ = !inQ;
      cur += c;
    } else if (c === ';' && !inQ) {
      parts.push(cur);
      cur = '';
    } else cur += c;
  }
  parts.push(cur);
  const name = parts[0].trim().toUpperCase();
  if (!name) return null;
  const params = {};
  for (const p of parts.slice(1)) {
    const eq = p.indexOf('=');
    if (eq === -1) continue;
    let v = p.slice(eq + 1).trim();
    if (v.length >= 2 && v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1);
    params[p.slice(0, eq).trim().toUpperCase()] = v;
  }
  return {
    name,
    params,
    value
  };
}

// Pull out VEVENT blocks only. Components nested INSIDE a VEVENT (VALARM) are
// skipped via a depth counter; components outside (VTIMEZONE, VTODO) never
// open a block, so their lines — including their DTSTARTs — are ignored.
function extractVevents(lines) {
  const blocks = [];
  let current = null;
  let nested = 0;
  for (const line of lines) {
    const up = line.toUpperCase();
    if (up.startsWith('BEGIN:')) {
      if (current) nested++;else if (up.slice(6).trim() === 'VEVENT') {
        current = [];
        nested = 0;
      }
      continue;
    }
    if (up.startsWith('END:')) {
      if (!current) continue;
      if (nested > 0) {
        nested--;
        continue;
      }
      if (up.slice(4).trim() === 'VEVENT') blocks.push(current);
      current = null; // mismatched END also abandons the block — garbage tolerance
      continue;
    }
    if (current && nested === 0) current.push(line);
  }
  return blocks;
}

// ───────── dates ─────────

// A parsed ICS time kept as CALENDAR COMPONENTS (not epoch ms) so recurrence
// stepping can do calendar math — month lengths, DST — and only turn into a
// concrete Date at the end. `utc` picks which frame the components live in.
function compToDate(c) {
  return c.utc ? new Date(Date.UTC(c.y, c.mo, c.d, c.hh, c.mm, c.ss)) : new Date(c.y, c.mo, c.d, c.hh, c.mm, c.ss);
}
const compMs = c => compToDate(c).getTime();

// Re-read components off the constructed Date so overflowed fields
// (month 13, day 45 from a sloppy feed) become canonical before we step them.
function canonicalize(c) {
  const d = compToDate(c);
  if (Number.isNaN(d.getTime())) return null;
  return c.utc ? {
    ...c,
    y: d.getUTCFullYear(),
    mo: d.getUTCMonth(),
    d: d.getUTCDate(),
    hh: d.getUTCHours(),
    mm: d.getUTCMinutes(),
    ss: d.getUTCSeconds()
  } : {
    ...c,
    y: d.getFullYear(),
    mo: d.getMonth(),
    d: d.getDate(),
    hh: d.getHours(),
    mm: d.getMinutes(),
    ss: d.getSeconds()
  };
}

// DATE (all-day, local midnight) · DATE-TIME with Z (UTC exact) ·
// floating / TZID (LOCAL wall-clock — the documented approximation).
function parseIcsDate(value, params = {}) {
  const v = String(value || '').trim();
  const wantsDate = (params.VALUE || '').toUpperCase() === 'DATE';
  let m = v.match(/^(\d{4})(\d{2})(\d{2})$/);
  if (m || wantsDate) {
    if (!m) m = v.match(/^(\d{4})(\d{2})(\d{2})/);
    if (!m) return null;
    return canonicalize({
      y: +m[1],
      mo: +m[2] - 1,
      d: +m[3],
      hh: 0,
      mm: 0,
      ss: 0,
      utc: false,
      allDay: true
    });
  }
  m = v.match(/^(\d{4})(\d{2})(\d{2})t(\d{2})(\d{2})(\d{2})(z?)$/i);
  if (!m) return null;
  return canonicalize({
    y: +m[1],
    mo: +m[2] - 1,
    d: +m[3],
    hh: +m[4],
    mm: +m[5],
    ss: +m[6],
    utc: m[7].toUpperCase() === 'Z',
    allDay: false
  });
}

// PT1H / PT30M / P1D / P2W / P1DT2H30M, optional leading sign.
function parseDuration(value) {
  const m = String(value || '').trim().match(/^([+-]?)P(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/i);
  if (!m) return null;
  const secs = (+m[2] || 0) * 7 * 86_400 + (+m[3] || 0) * 86_400 + (+m[4] || 0) * 3600 + (+m[5] || 0) * 60 + (+m[6] || 0);
  return (m[1] === '-' ? -1 : 1) * secs * 1000;
}

// ───────── recurrence ─────────

const FREQS = new Set(['DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY']);
const WEEKDAYS = {
  SU: 0,
  MO: 1,
  TU: 2,
  WE: 3,
  TH: 4,
  FR: 5,
  SA: 6
};
function parseRrule(value) {
  const rule = {};
  for (const part of String(value).split(';')) {
    const eq = part.indexOf('=');
    if (eq === -1) continue;
    rule[part.slice(0, eq).trim().toUpperCase()] = part.slice(eq + 1).trim().toUpperCase();
  }
  // Unknown FREQ → treat the event as non-recurring rather than dropping it.
  return FREQS.has(rule.FREQ) ? rule : null;
}
function parseWeekdayList(byday) {
  if (!byday) return [];
  const out = [];
  for (const tok of byday.split(',')) {
    const wd = WEEKDAYS[tok.trim()];
    if (wd != null) out.push(wd);
  }
  return out;
}

// '2TU' → { n: 2, wd: TU } · '-1FR' → { n: -1, wd: FR }. Bare weekdays are
// ignored here (MONTHLY falls back to same-day-of-month — see header).
function parseOrdinalByday(byday) {
  if (!byday) return [];
  const out = [];
  for (const tok of byday.split(',')) {
    const m = tok.trim().match(/^([+-]?\d{1,2})(SU|MO|TU|WE|TH|FR|SA)$/);
    if (!m || +m[1] === 0) continue;
    out.push({
      n: +m[1],
      wd: WEEKDAYS[m[2]]
    });
  }
  return out;
}

// Weekday of a calendar date is frame-independent, so compute it in UTC.
const dayOfWeek = c => new Date(Date.UTC(c.y, c.mo, c.d)).getUTCDay();
const daysInMonth = (y, mo) => new Date(Date.UTC(y, mo + 1, 0)).getUTCDate();

// Day-of-month of the nth <weekday> (n<0 counts from the end), or null when
// the month has no such day (no 5th Tuesday).
function nthWeekdayOfMonth(y, mo, wd, n) {
  const dim = daysInMonth(y, mo);
  if (n > 0) {
    const firstDow = new Date(Date.UTC(y, mo, 1)).getUTCDay();
    const day = 1 + (wd - firstDow + 7) % 7 + (n - 1) * 7;
    return day <= dim ? day : null;
  }
  const lastDow = new Date(Date.UTC(y, mo, dim)).getUTCDay();
  const day = dim - (lastDow - wd + 7) % 7 + (n + 1) * 7;
  return day >= 1 ? day : null;
}

// Candidate occurrence starts (epoch ms), ascending, starting at the pattern
// slot of DTSTART's period. Every loop is hard-capped so a hostile RRULE can
// never spin forever — the consumer breaks far earlier on window/UNTIL/COUNT.
function* candidateStarts(s, rule, interval) {
  if (rule.FREQ === 'DAILY') {
    for (let k = 0; k < 100_000; k++) yield compMs({
      ...s,
      d: s.d + k * interval
    });
    return;
  }
  if (rule.FREQ === 'WEEKLY') {
    const byday = parseWeekdayList(rule.BYDAY);
    if (!byday.length) {
      for (let k = 0; k < 20_000; k++) yield compMs({
        ...s,
        d: s.d + k * 7 * interval
      });
      return;
    }
    const sinceMonday = (dayOfWeek(s) + 6) % 7; // WKST=MO, the RFC default
    for (let week = 0; week < 20_000; week++) {
      const monday = s.d - sinceMonday + week * 7 * interval;
      for (let off = 0; off < 7; off++) {
        if (byday.includes((off + 1) % 7)) yield compMs({
          ...s,
          d: monday + off
        });
      }
    }
    return;
  }
  if (rule.FREQ === 'MONTHLY') {
    const ordinals = parseOrdinalByday(rule.BYDAY);
    for (let k = 0; k < 20_000; k++) {
      const mo = s.mo + k * interval;
      if (ordinals.length) {
        const days = [];
        for (const {
          n,
          wd
        } of ordinals) {
          const day = nthWeekdayOfMonth(s.y, mo, wd, n);
          if (day != null) days.push(day);
        }
        days.sort((a, b) => a - b);
        for (const d of days) yield compMs({
          ...s,
          mo,
          d
        });
      } else if (s.d <= daysInMonth(s.y, mo)) {
        // Months without this day (Jan 31 → Feb) are skipped, per RFC.
        yield compMs({
          ...s,
          mo
        });
      }
    }
    return;
  }
  if (rule.FREQ === 'YEARLY') {
    for (let k = 0; k < 20_000; k++) {
      const y = s.y + k * interval;
      if (s.d <= daysInMonth(y, s.mo)) yield compMs({
        ...s,
        y
      }); // Feb 29 skips non-leap years
    }
  }
}

// Instance starts for one recurring event, in [pastFloor, horizon]. COUNT is
// consumed by every pattern occurrence ≥ DTSTART — including EXDATE'd,
// overridden, and before-the-window ones — which is how RFC COUNT works.
function expandSeries(rec, {
  pastFloor,
  horizon,
  overrides,
  budget
}) {
  const rule = rec.rrule;
  const interval = Math.max(1, parseInt(rule.INTERVAL, 10) || 1);
  let countLeft = Infinity;
  if (rule.COUNT != null) {
    const c = parseInt(rule.COUNT, 10);
    countLeft = Number.isFinite(c) && c > 0 ? c : 0;
  }
  let untilMs = Infinity;
  if (rule.UNTIL) {
    const u = parseIcsDate(rule.UNTIL);
    // Date-form UNTIL is inclusive of that whole day.
    if (u) untilMs = u.allDay ? compMs({
      ...u,
      hh: 23,
      mm: 59,
      ss: 59
    }) : compMs(u);
  }
  const ex = new Set(rec.exdates);
  const out = [];
  let guard = 0;
  for (const ms of candidateStarts(rec.start, rule, interval)) {
    if (++guard > 200_000 || Number.isNaN(ms)) break;
    if (ms < rec.startMs) continue; // pattern slots before DTSTART don't exist or count
    if (ms > untilMs || ms > horizon) break; // candidates are ascending
    if (countLeft <= 0) break;
    countLeft--;
    if (ex.has(ms)) continue;
    if (overrides && overrides.has(ms)) continue; // replaced by a RECURRENCE-ID VEVENT
    if (ms < pastFloor) continue;
    if (budget.left <= 0) break;
    budget.left--;
    out.push(ms);
  }
  return out;
}

// ───────── VEVENT → internal record → output shape ─────────

function parseVevent(lines) {
  const props = [];
  for (const line of lines) {
    const p = parseContentLine(line);
    if (p) props.push(p);
  }
  const first = n => props.find(p => p.name === n) || null;
  const all = n => props.filter(p => p.name === n);
  const text = n => {
    const p = first(n);
    return p ? unescapeText$1(p.value).trim() || null : null;
  };
  const dtstart = first('DTSTART');
  const start = dtstart && parseIcsDate(dtstart.value, dtstart.params);
  if (!start) return null;
  const startMs = compMs(start);
  if (Number.isNaN(startMs)) return null;

  // End: DTEND wins; else DURATION; else all-day spans one day; else null.
  let endMs = null;
  const dtend = first('DTEND');
  const end = dtend && parseIcsDate(dtend.value, dtend.params);
  if (end) endMs = compMs(end);else {
    const dur = first('DURATION') && parseDuration(first('DURATION').value);
    if (dur != null) endMs = startMs + dur;else if (start.allDay) endMs = startMs + DAY;
  }
  if (Number.isNaN(endMs)) endMs = null;
  const exdates = [];
  for (const p of all('EXDATE')) {
    for (const part of p.value.split(',')) {
      const c = parseIcsDate(part, p.params);
      if (c) exdates.push(compMs(c));
    }
  }
  const recId = first('RECURRENCE-ID');
  const recComp = recId && parseIcsDate(recId.value, recId.params);
  const rruleProp = first('RRULE');
  return {
    uid: (first('UID')?.value || '').trim(),
    summary: unescapeText$1(first('SUMMARY')?.value ?? '').trim(),
    location: text('LOCATION'),
    description: text('DESCRIPTION'),
    attendees: all('ATTENDEE').map(p => ({
      email: p.value.trim().replace(/^mailto:/i, '') || null,
      name: p.params.CN ? unescapeText$1(p.params.CN).trim() || null : null
    })),
    start,
    startMs,
    endMs,
    allDay: start.allDay,
    rrule: rruleProp ? parseRrule(rruleProp.value) : null,
    exdates,
    recurrenceIdMs: recComp ? compMs(recComp) : null
  };
}

// One occurrence at `ms`, shaped exactly like the server's normalizeEvent.
// Recurrence instances keep the parent uid (dedupe key is uid+start) and the
// parent's duration; attendees are cloned so instances never share objects.
function instanceEvent(rec, ms) {
  const start = new Date(ms).toISOString();
  return {
    uid: rec.uid || `${start}-${rec.summary}`,
    start,
    end: rec.endMs == null ? null : new Date(ms + (rec.endMs - rec.startMs)).toISOString(),
    allDay: rec.allDay,
    summary: rec.summary,
    location: rec.location,
    description: rec.description,
    attendees: rec.attendees.map(a => ({
      ...a
    }))
  };
}

/**
 * Parse .ics text and expand recurrences into concrete events within
 * [now − daysBack, now + daysAhead] (inclusive, like the server), sorted by
 * start ascending. The only API App.jsx calls. Never throws on any input:
 * unparseable events are skipped, non-string/garbage input returns [].
 */
function expandIcsEvents(icsText, {
  daysBack = 90,
  daysAhead = 14,
  now = Date.now()
} = {}) {
  try {
    if (typeof icsText !== 'string' || !icsText) return [];
    const nowMs = new Date(now).getTime();
    if (Number.isNaN(nowMs)) return [];
    const pastFloor = nowMs - daysBack * DAY;
    const horizon = nowMs + daysAhead * DAY;
    const records = [];
    for (const block of extractVevents(unfoldLines(icsText))) {
      try {
        const rec = parseVevent(block);
        if (rec) records.push(rec);
      } catch {
        // one bad VEVENT never takes down the feed
      }
    }

    // RECURRENCE-ID overrides: suppress the parent's instance at that time —
    // the override VEVENT is emitted as its own (possibly moved) event below.
    const overridesByUid = new Map();
    for (const rec of records) {
      if (rec.recurrenceIdMs == null || !rec.uid) continue;
      if (!overridesByUid.has(rec.uid)) overridesByUid.set(rec.uid, new Set());
      overridesByUid.get(rec.uid).add(rec.recurrenceIdMs);
    }
    const events = [];
    const budget = {
      left: 1000
    }; // shared across every series in the file
    for (const rec of records) {
      try {
        if (rec.rrule && rec.recurrenceIdMs == null) {
          const overrides = overridesByUid.get(rec.uid) || null;
          for (const ms of expandSeries(rec, {
            pastFloor,
            horizon,
            overrides,
            budget
          })) {
            events.push(instanceEvent(rec, ms));
          }
        } else if (rec.startMs >= pastFloor && rec.startMs <= horizon) {
          events.push(instanceEvent(rec, rec.startMs));
        }
      } catch {
        // skip just this event
      }
    }
    events.sort((a, b) => a.start.localeCompare(b.start));
    return events;
  } catch {
    return [];
  }
}

// demoSeed.js — a rich sample dataset for demos.
//
// Triggered by `?demo` in the URL (see App.jsx). Seeds 8 people across the
// default circles, with notes, logged moments spread over several months,
// introductions, birthdays, and a couple of keep-in-touch cadences — enough to
// light up Today, the Map, relationship health, and the insight unlocks. Only
// seeds when the device has no people yet, so it never clobbers real data.
//
// Circle ids are the stable constants from seed.js.

function buildDemoPeople(now = Date.now()) {
  const iso = d => new Date(now - d * 86_400_000).toISOString();
  const note = (d, text) => ({
    id: makeId('note'),
    date: iso(d),
    text
  });
  const intr = (d, summary, source = 'manual') => ({
    id: makeId('int'),
    source,
    date: iso(d),
    summary,
    location: ''
  });
  const detail = (text, d) => ({
    id: makeId('det'),
    text,
    learnedAt: iso(d),
    confirmedAt: iso(d)
  });
  const bdayIn = n => {
    const dt = new Date(now + n * 86_400_000);
    return `${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`;
  };
  // metOn whose anniversary lands n days from now, yearsAgo years back —
  // lights up the friendaversary card in the demo.
  const metIn = (n, yearsAgo) => {
    const dt = new Date(now + n * 86_400_000);
    return `${dt.getFullYear() - yearsAgo}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`;
  };
  // An unresolved storyline, already ripe `ripeD` days ago.
  const loop = (kind, text, createdD, ripeD) => ({
    id: makeId('loop'),
    text,
    kind,
    createdAt: iso(createdD),
    ripeAt: iso(ripeD),
    resolvedAt: null,
    source: 'capture'
  });
  const P = o => Object.assign({
    id: makeId('per'),
    name: '',
    howWeMet: '',
    metOn: '',
    location: '',
    email: '',
    phone: '',
    birthday: '',
    circleIds: [],
    family: [],
    details: [],
    notes: [],
    followUps: [],
    interactions: [],
    openLoops: [],
    referredBy: null,
    photo: null
  }, o);
  const dave = P({
    name: 'Dave Whitfield',
    howWeMet: 'Old college roommate',
    metOn: metIn(5, 12),
    // friendaversary in 5 days — 12 years
    location: 'Brookline, MA',
    email: 'dave@example.com',
    phone: '(617) 555-1042',
    circleIds: ['circle_college'],
    birthday: bdayIn(3),
    keepInTouch: 'monthly',
    openLoops: [loop('thread', "how the first weeks at Fidelity are going", 12, 2)],
    notes: [note(0, "Coffee — caught up on his new role at Fidelity"), note(46, 'Asked about Sarah'), note(110, 'Helped him move')],
    interactions: [intr(0, 'Coffee'), intr(13, 'Call'), intr(46, 'Lunch'), intr(110, 'Met up', 'calendar'), intr(410, 'Met up', 'calendar')]
  });
  const reyes = P({
    name: 'Ms. Reyes',
    howWeMet: "Erik's 5th grade teacher",
    location: 'Cambridge, MA',
    circleIds: ['circle_school'],
    notes: [note(1, 'Parent-teacher — Erik doing well in science')],
    interactions: [intr(1, 'Met up', 'calendar'), intr(35, 'Emailed')],
    followUps: [{
      id: makeId('fu'),
      text: 'Confirm spring science fair signup',
      done: false
    }]
  });
  const patel = P({
    name: 'Coach Patel',
    howWeMet: "Erik's soccer coach",
    location: 'Cambridge, MA',
    circleIds: ['circle_sports'],
    referredBy: dave.id,
    details: [detail('Coached at Larz Anderson for 7 years', 60), detail('Prefers texting', 60)],
    notes: [note(1, 'Tournament ran long')],
    // Touches bunching up lately — lights up the ↗ Warming trendline.
    interactions: [intr(0, 'Coffee'), intr(1, 'Met up', 'calendar'), intr(8, 'Texted'), intr(20, 'Call'), intr(33, 'Texted'), intr(50, 'Call')]
  });
  const margret = P({
    name: 'Margret Duddy',
    howWeMet: 'Neighbors',
    location: 'Newton, MA',
    circleIds: ['circle_hometown'],
    notes: [note(2, 'Borrowed the ladder back')],
    interactions: [intr(2, 'Met up'), intr(70, 'Coffee')]
  });
  const anna = P({
    name: 'Anna Liu',
    howWeMet: 'Conference panel',
    location: 'San Francisco, CA',
    email: 'anna@example.com',
    circleIds: ['circle_work'],
    keepInTouch: 'weekly',
    notes: [note(7, 'Panel follow-up — wants the deck')],
    interactions: [intr(7, 'Coffee'), intr(60, 'Call'), intr(150, 'Met up', 'calendar')],
    followUps: [{
      id: makeId('fu'),
      text: 'Send the intro deck',
      done: false
    }],
    openLoops: [loop('waiting', 'her Series A term sheet decision', 9, 1)]
  });
  const sean = P({
    name: 'Sean Duddy',
    howWeMet: "Margret's husband",
    location: 'Newton, MA',
    circleIds: ['circle_hometown'],
    referredBy: margret.id,
    interactions: [intr(16, 'Met up'), intr(90, 'Met up', 'calendar')]
  });
  const jordan = P({
    name: 'Jordan Park',
    howWeMet: 'Old teammate',
    location: 'Austin, TX',
    circleIds: ['circle_work'],
    notes: [note(62, 'Quick catch-up call')],
    // A rhythm (~every 12 days) that went quiet 62 days ago — lights up the
    // ↘ Cooling trendline with its forecast in the demo.
    interactions: [intr(62, 'Call'), intr(74, 'Texted'), intr(86, 'Call'), intr(98, 'Coffee'), intr(110, 'Texted'), intr(200, 'Met up', 'calendar')]
  });
  const mae = P({
    name: 'Mae Ito',
    howWeMet: 'Carpool parent',
    location: 'Cambridge, MA',
    email: 'mae.ito@example.com',
    circleIds: ['circle_school'],
    keepInTouch: 'monthly',
    referredBy: reyes.id,
    notes: [note(95, 'Thanked her for the carpool help')],
    interactions: [intr(95, 'Met up', 'calendar')]
  });
  return [dave, reyes, patel, margret, anna, sean, jordan, mae];
}

// CommandPalette — the ⌘K surface. One field that reaches everything:
// people (fuzzy over name / role / location), navigation, and quick actions.
// Frosted glass, full keyboard support (⌘K / "/" to open, arrows + Enter,
// Esc to close). The kind of affordance that marks serious production
// software — and on desktop it makes the whole app drivable without a mouse.

const NAV_ITEMS = [{
  kind: 'nav',
  key: 'briefing',
  icon: 'house',
  label: 'Today'
}, {
  kind: 'nav',
  key: 'list',
  icon: 'user',
  label: 'People'
}, {
  kind: 'nav',
  key: 'circles',
  icon: 'target',
  label: 'Circles'
}, {
  kind: 'nav',
  key: 'map',
  icon: 'network',
  label: 'Map'
}, {
  kind: 'nav',
  key: 'pulse',
  icon: 'ring',
  label: 'Your Pulse'
}, {
  kind: 'nav',
  key: 'settings',
  icon: 'gear',
  label: 'Settings'
}];
const ACTION_ITEMS = [{
  kind: 'action',
  key: 'new',
  icon: 'plus',
  label: 'Add a person'
}, {
  kind: 'action',
  key: 'contacts',
  icon: 'mail',
  label: 'Import contacts'
}, {
  kind: 'action',
  key: 'capture',
  icon: 'mic',
  label: 'Capture a note'
}];
function CommandPalette({
  open,
  people = [],
  onClose,
  onOpenPerson,
  onNavigate
}) {
  const [q, setQ] = reactExports.useState('');
  const [active, setActive] = reactExports.useState(0);
  const inputRef = reactExports.useRef(null);
  const listRef = reactExports.useRef(null);
  const rootRef = reactExports.useRef(null);
  useFocusTrap(rootRef, open ? onClose : null);

  // Reset on every open so it always starts fresh.
  reactExports.useEffect(() => {
    if (open) {
      setQ('');
      setActive(0);
      // Focus after the entrance animation has begun.
      const id = setTimeout(() => inputRef.current && inputRef.current.focus(), 30);
      return () => clearTimeout(id);
    }
  }, [open]);
  const needle = q.trim().toLowerCase();
  const personItems = reactExports.useMemo(() => {
    const matches = people.filter(p => {
      if (!p.name) return false;
      if (!needle) return true;
      return p.name.toLowerCase().includes(needle) || (p.howWeMet || '').toLowerCase().includes(needle) || (p.location || '').toLowerCase().includes(needle);
    });
    // Most-recently-touched first — the people you're most likely to want.
    return matches.map(p => ({
      p,
      t: new Date(lastTouch(p) || 0).getTime()
    })).sort((a, b) => b.t - a.t).slice(0, needle ? 7 : 4).map(({
      p
    }) => ({
      kind: 'person',
      key: p.id,
      person: p
    }));
  }, [people, needle]);
  const navItems = reactExports.useMemo(() => NAV_ITEMS.filter(i => !needle || i.label.toLowerCase().includes(needle)), [needle]);
  const actionItems = reactExports.useMemo(() => ACTION_ITEMS.filter(i => !needle || i.label.toLowerCase().includes(needle)), [needle]);

  // One flat list drives keyboard order; section headers are decoration.
  const flat = reactExports.useMemo(() => [...personItems, ...navItems, ...actionItems], [personItems, navItems, actionItems]);
  reactExports.useEffect(() => {
    setActive(0);
  }, [needle]);
  function run(item) {
    if (!item) return;
    haptics.select();
    onClose();
    if (item.kind === 'person') onOpenPerson && onOpenPerson(item.person.id);else onNavigate && onNavigate(item.key);
  }
  function onKeyDown(e) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive(a => Math.min(a + 1, flat.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive(a => Math.max(a - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      run(flat[active]);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  }

  // Keep the active row visible while arrowing.
  reactExports.useEffect(() => {
    const el = listRef.current && listRef.current.querySelector(`[data-idx="${active}"]`);
    el && el.scrollIntoView({
      block: 'nearest'
    });
  }, [active]);
  if (!open) return null;
  let idx = -1;
  const row = (item, content) => {
    idx++;
    const i = idx;
    const isActive = i === active;
    return /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
      "data-idx": i,
      onClick: () => run(item),
      onMouseMove: () => setActive(i),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        width: '100%',
        textAlign: 'left',
        padding: '10px 12px',
        borderRadius: theme.radii.md,
        border: 'none',
        cursor: 'pointer',
        background: isActive ? theme.colors.accentSoft : 'transparent',
        color: theme.colors.ink
      },
      children: [content, isActive && /*#__PURE__*/jsxRuntimeExports.jsx("span", {
        "aria-hidden": "true",
        style: {
          marginLeft: 'auto',
          fontFamily: theme.fonts.mono,
          fontSize: 10,
          color: theme.colors.accent
        },
        children: "\u21B5"
      })]
    }, `${item.kind}-${item.key}`);
  };
  const sectionLabel = text => /*#__PURE__*/jsxRuntimeExports.jsx("div", {
    style: {
      ...microLabel,
      padding: '10px 12px 4px'
    },
    children: text
  });
  return /*#__PURE__*/jsxRuntimeExports.jsx("div", {
    ref: rootRef,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Command palette",
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 400,
      background: 'var(--c-overlay)',
      WebkitBackdropFilter: 'blur(3px)',
      backdropFilter: 'blur(3px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '64px 16px 0'
    },
    children: /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      className: "al-glass al-pop",
      onClick: e => e.stopPropagation(),
      style: {
        width: '100%',
        maxWidth: 480,
        borderRadius: theme.radii.lg,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '62%'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '13px 14px',
          borderBottom: `1px solid ${theme.colors.rule}`
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
          style: {
            color: theme.colors.ink3,
            display: 'flex'
          },
          children: /*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
            name: "search",
            size: 16
          })
        }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
          ref: inputRef,
          value: q,
          onChange: e => setQ(e.target.value),
          onKeyDown: onKeyDown,
          placeholder: "Search people, or jump anywhere\u2026",
          "aria-label": "Search people and actions",
          style: {
            flex: 1,
            minWidth: 0,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            fontFamily: theme.fonts.serif,
            fontSize: 16,
            color: theme.colors.ink
          }
        }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
          className: "al-kbd",
          children: "esc"
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        ref: listRef,
        style: {
          overflowY: 'auto',
          padding: '2px 6px 10px'
        },
        children: [personItems.length > 0 && sectionLabel(needle ? 'People' : 'Recent people'), personItems.map(item => row(item, /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
          children: [/*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
            name: item.person.name,
            photo: item.person.photo,
            size: 26
          }), /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
            style: {
              minWidth: 0,
              overflow: 'hidden'
            },
            children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
              style: {
                display: 'block',
                fontFamily: theme.fonts.serif,
                fontSize: 15,
                fontWeight: 500,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              },
              children: item.person.name
            }), item.person.howWeMet && /*#__PURE__*/jsxRuntimeExports.jsx("span", {
              style: {
                display: 'block',
                fontFamily: theme.fonts.sans,
                fontSize: 11,
                color: theme.colors.ink3,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              },
              children: item.person.howWeMet
            })]
          })]
        }))), navItems.length > 0 && sectionLabel('Go to'), navItems.map(item => row(item, /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
          children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
            style: {
              width: 26,
              height: 26,
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: theme.colors.paperDeep,
              color: theme.colors.ink2
            },
            children: /*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
              name: item.icon,
              size: 14
            })
          }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
            style: {
              fontFamily: theme.fonts.sans,
              fontSize: 14
            },
            children: item.label
          })]
        }))), actionItems.length > 0 && sectionLabel('Actions'), actionItems.map(item => row(item, /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
          children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
            style: {
              width: 26,
              height: 26,
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: theme.colors.accentSofter,
              color: theme.colors.accent
            },
            children: /*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
              name: item.icon,
              size: 14
            })
          }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
            style: {
              fontFamily: theme.fonts.sans,
              fontSize: 14
            },
            children: item.label
          })]
        }))), flat.length === 0 && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            padding: '22px 12px',
            textAlign: 'center',
            fontFamily: theme.fonts.serif,
            fontStyle: 'italic',
            fontSize: 14,
            color: theme.colors.ink3
          },
          children: ["Nothing matches \u201C", q, "\u201D."]
        })]
      })]
    })
  });
}

// Circles — browse grid. The Circles tab lands here.
// Tap "edit circles" in the header to open the tree-edit screen
// (existing CirclesManager, routed as view.kind = 'circles_edit').

function CirclesBrowse({
  circles,
  people,
  onOpenEdit,
  onAdd,
  onOpenCircle,
  onReorder
}) {
  const [q, setQ] = reactExports.useState('');
  const [filter, setFilter] = reactExports.useState('all'); // 'all' | 'personal' | 'work' | 'family'
  const [dragId, setDragId] = reactExports.useState(null);
  const [dragOverId, setDragOverId] = reactExports.useState(null);

  // Top-level circles in natural (user-arranged) order — drag-and-drop rewrites
  // the circles array via onReorder.
  const topLevel = reactExports.useMemo(() => {
    const map = indexChildren(circles, {
      sort: 'natural'
    });
    return map.get('root') || [];
  }, [circles]);

  // Enrich each top-level with derived stats + children
  const enriched = reactExports.useMemo(() => {
    const childrenMap = indexChildren(circles);
    return topLevel.map(c => {
      const tone = inferTone(c, circles);
      const subs = childrenMap.get(c.id) || [];
      const smart = isSmartCircle(c);
      const preset = smart ? presetForRule(c.rule) : null;
      // Smart circles: members come from the rule evaluator. Manual:
      // walk the descendant tree the way we always have.
      const smartMembers = smart ? people.filter(p => new Set(getCircleMembers(c, people)).has(p.id)) : null;
      return {
        ...c,
        tone,
        toneMeta: TONE_META[tone],
        subs,
        smart,
        preset,
        peopleCount: smart ? smartMembers.length : reachCount(c.id, people, circles),
        activeCount: smart ? 0 : activeThisWeek(c.id, people, circles),
        peopleInReach: smart ? smartMembers : peopleInReach(c.id, people, circles)
      };
    });
  }, [topLevel, circles, people]);

  // Apply filter + search
  const visible = reactExports.useMemo(() => {
    const ql = q.trim().toLowerCase();
    return enriched.filter(c => {
      if (filter !== 'all' && c.tone !== filter) return false;
      if (ql && !c.name.toLowerCase().includes(ql)) return false;
      return true;
    });
  }, [enriched, filter, q]);
  const totalPeople = people.length;
  const totalCircles = circles.length;
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      padding: '54px 22px 0'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(CirclesLogo, {
        lockup: "horizontal"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: onAdd,
        style: {
          background: 'transparent',
          border: 'none',
          padding: '14px 8px',
          margin: '-14px -8px',
          cursor: 'pointer',
          fontFamily: theme.fonts.serif,
          fontStyle: 'italic',
          fontSize: 15,
          color: theme.colors.accent
        },
        children: "+ New"
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 16,
        fontFamily: theme.fonts.mono,
        fontSize: 10,
        color: theme.colors.ink3,
        letterSpacing: 0.9,
        textTransform: 'uppercase'
      },
      children: ["YOUR PEOPLE \xB7 ", totalPeople, " ACROSS ", totalCircles, " CIRCLES"]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        marginTop: 4,
        gap: 12
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("h1", {
        style: {
          margin: 0,
          fontFamily: theme.fonts.serif,
          fontSize: 'clamp(28px, 7vw, 38px)',
          fontWeight: 500,
          letterSpacing: -0.5,
          color: theme.colors.ink,
          lineHeight: 1
        },
        children: "Circles"
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
        onClick: onOpenEdit,
        style: {
          background: 'transparent',
          border: 'none',
          padding: '14px 8px',
          margin: '-14px -8px',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 5,
          fontFamily: theme.fonts.mono,
          fontSize: 10,
          color: theme.colors.ink3,
          letterSpacing: '0.12em',
          textTransform: 'uppercase'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
          name: "pencil",
          size: 11
        }), "EDIT CIRCLES"]
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginTop: 6,
        fontFamily: theme.fonts.serif,
        fontStyle: 'italic',
        fontSize: 15,
        color: theme.colors.ink3,
        lineHeight: 1.4
      },
      children: "The shape of how you know everyone."
    }), /*#__PURE__*/jsxRuntimeExports.jsx(SearchField, {
      value: q,
      onChange: e => setQ(e.target.value),
      placeholder: "Search circles",
      fontFamily: theme.fonts.serif,
      style: {
        marginTop: 14
      }
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 12,
        display: 'flex',
        gap: 6,
        flexWrap: 'wrap'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(FilterChip, {
        label: "All",
        active: filter === 'all',
        onClick: () => setFilter('all')
      }), /*#__PURE__*/jsxRuntimeExports.jsx(FilterChip, {
        label: "Personal",
        active: filter === 'personal',
        onClick: () => setFilter('personal')
      }), /*#__PURE__*/jsxRuntimeExports.jsx(FilterChip, {
        label: "Work",
        active: filter === 'work',
        onClick: () => setFilter('work')
      }), /*#__PURE__*/jsxRuntimeExports.jsx(FilterChip, {
        label: "Family",
        active: filter === 'family',
        onClick: () => setFilter('family')
      })]
    }), visible.length === 0 ? /*#__PURE__*/jsxRuntimeExports.jsx(EmptyState$1, {
      filter: filter,
      q: q
    }) : /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginTop: 16,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 10
      },
      children: visible.map((c, i) => /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        className: "al-rise",
        style: {
          '--i': Math.min(i, 12)
        },
        children: /*#__PURE__*/jsxRuntimeExports.jsx(CircleCard, {
          circle: c,
          circles: circles,
          people: people,
          onClick: () => onOpenCircle && onOpenCircle(c.id),
          isDragging: dragId === c.id,
          isDragOver: dragOverId === c.id && dragId !== c.id,
          onDragStart: e => {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', c.id);
            setDragId(c.id);
          },
          onDragOver: e => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            if (c.id !== dragOverId) setDragOverId(c.id);
          },
          onDragLeave: () => {
            if (dragOverId === c.id) setDragOverId(null);
          },
          onDrop: e => {
            e.preventDefault();
            const sourceId = e.dataTransfer.getData('text/plain') || dragId;
            if (sourceId && sourceId !== c.id) {
              onReorder && onReorder(sourceId, c.id);
            }
            setDragId(null);
            setDragOverId(null);
          },
          onDragEnd: () => {
            setDragId(null);
            setDragOverId(null);
          }
        })
      }, c.id))
    })]
  });
}
function FilterChip({
  label,
  active,
  onClick
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsx(Chip, {
    active: active,
    onClick: onClick,
    children: label
  });
}
function CircleCard({
  circle,
  circles,
  people,
  onClick,
  isDragging,
  isDragOver,
  onDragStart,
  onDragOver,
  onDragLeave,
  onDrop,
  onDragEnd
}) {
  const isFamily = circle.tone === 'family';
  const hasSubs = circle.subs.length > 0;
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    onClick: onClick,
    draggable: true,
    onDragStart: onDragStart,
    onDragOver: onDragOver,
    onDragLeave: onDragLeave,
    onDrop: onDrop,
    onDragEnd: onDragEnd,
    style: {
      padding: '14px 14px',
      background: isFamily ? theme.colors.accentSofter : theme.colors.card,
      border: `1px ${isDragOver ? 'dashed' : 'solid'} ${isDragOver ? theme.colors.accent : isFamily ? theme.colors.accentSoft : theme.colors.rule}`,
      borderRadius: theme.radii.lg,
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
      cursor: 'grab',
      opacity: isDragging ? 0.45 : 1,
      transform: isDragOver ? 'scale(1.02)' : 'scale(1)',
      transition: 'transform 120ms, border-color 120ms, opacity 120ms'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        ...microLabel
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
        style: {
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: circle.toneMeta.color
        }
      }), circle.toneMeta.label, circle.smart && /*#__PURE__*/jsxRuntimeExports.jsx("span", {
        title: "Smart circle \u2014 membership is computed",
        style: {
          marginLeft: 4,
          padding: '2px 7px',
          borderRadius: theme.radii.pill,
          border: `1px solid ${theme.colors.accent}`,
          color: theme.colors.accent,
          fontFamily: theme.fonts.mono,
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: '0.12em',
          textTransform: 'uppercase'
        },
        children: "AUTO"
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginTop: 6,
        fontFamily: theme.fonts.serif,
        fontSize: 18,
        fontWeight: 500,
        letterSpacing: -0.3,
        color: theme.colors.ink,
        lineHeight: 1.1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      },
      children: circle.name
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginTop: 2,
        ...microLabel
      },
      children: isFamily && hasSubs ? `${circle.subs.length} SUB · ${circle.peopleCount} ${circle.peopleCount === 1 ? 'PERSON' : 'PEOPLE'}` : `${circle.peopleCount} ${circle.peopleCount === 1 ? 'PERSON' : 'PEOPLE'}`
    }), isFamily && hasSubs ? /*#__PURE__*/jsxRuntimeExports.jsx("ul", {
      style: {
        listStyle: 'none',
        margin: 0,
        marginTop: 10,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      },
      children: circle.subs.slice(0, 3).map(s => {
        const subCount = reachCount(s.id, people, circles);
        return /*#__PURE__*/jsxRuntimeExports.jsxs("li", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: theme.fonts.serif,
            fontSize: 13,
            color: theme.colors.ink2
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
            style: {
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              paddingRight: 6
            },
            children: s.name.replace(/^[A-Z][a-z]+'s\s+/i, '')
          }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
            style: {
              fontFamily: theme.fonts.mono,
              fontSize: 11,
              color: theme.colors.ink3
            },
            children: subCount
          })]
        }, s.id);
      })
    }) : circle.peopleInReach.length > 0 && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginTop: 10
      },
      children: /*#__PURE__*/jsxRuntimeExports.jsx(AvatarPile, {
        items: circle.peopleInReach.map(p => ({
          name: p.name,
          id: p.id,
          photo: p.photo
        })),
        size: 26,
        max: 4
      })
    }), circle.activeCount > 0 && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 12,
        fontFamily: theme.fonts.serif,
        fontStyle: 'italic',
        fontSize: 12,
        color: theme.colors.accent
      },
      children: [circle.activeCount, " active this week"]
    })]
  });
}
function EmptyState$1({
  filter,
  q
}) {
  let title, subtitle;
  if (q) {
    title = 'No matches';
    subtitle = `No circles match “${q}”.`;
  } else if (filter === 'active') {
    title = 'A quiet stretch';
    subtitle = 'Nobody’s been active in the last week.';
  } else if (filter === 'family') {
    title = 'No family circles yet';
    subtitle = 'Add one from Edit Circles to group the people closest to you.';
  } else {
    title = 'No circles yet';
    subtitle = 'Create your first circle to group the people in your life.';
  }
  return /*#__PURE__*/jsxRuntimeExports.jsx(EmptyState$3, {
    title: title,
    subtitle: subtitle
  });
}

// Helper: distinct people in this circle's reach (used for avatar piles).
function peopleInReach(circleId, people, circles) {
  const idsInReach = new Set(require_getDescendantIds(circles, circleId));
  return people.filter(p => (p.circleIds || []).some(id => idsInReach.has(id)));
}

// Local import shim — keeps the file's top imports tidy.
function require_getDescendantIds(circles, id) {
  // Lazy-import to keep this helper colocated.
  // We can't `import` inside a function; this is just a wrapper around
  // the indexChildren we already imported.
  const map = indexChildren(circles);
  const out = [];
  const walk = cur => {
    out.push(cur);
    for (const k of map.get(cur) || []) walk(k.id);
  };
  walk(id);
  return out;
}

// Drill-down view for a single circle.
// Tapped from a CirclesBrowse card. Shows:
//   - Tone tag + circle name + reach count
//   - SUB-CIRCLES (if any) — each as a small card with count + avatar pile
//   - PEOPLE — flat list of everyone in this circle's reach (direct + descendants)

function timeSince(iso) {
  if (!iso) return '—';
  const ms = Date.now() - new Date(iso).getTime();
  if (ms < 0) return 'NOW';
  const day = Math.floor(ms / 86_400_000);
  if (day === 0) return 'TODAY';
  if (day < 7) return `${day}D`;
  if (day < 30) return `${Math.floor(day / 7)}W`;
  if (day < 365) return `${Math.floor(day / 30)}MO`;
  return `${Math.floor(day / 365)}Y`;
}
function CircleDetail({
  circleId,
  circles,
  people,
  onBack,
  onOpenCircle,
  onOpenPerson,
  onOpenEdit,
  onAddPerson
}) {
  const circle = circles.find(c => c.id === circleId);
  if (!circle) {
    return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        padding: '54px 22px 0',
        color: theme.colors.ink3
      },
      children: ["Circle not found.", /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        children: /*#__PURE__*/jsxRuntimeExports.jsx("button", {
          onClick: onBack,
          style: {
            background: 'transparent',
            border: 'none',
            color: theme.colors.accent,
            cursor: 'pointer'
          },
          children: "\u2190 Back"
        })
      })]
    });
  }
  const tone = inferTone(circle, circles);
  const toneMeta = TONE_META[tone];
  const childrenMap = reactExports.useMemo(() => indexChildren(circles), [circles]);
  const subs = childrenMap.get(circleId) || [];
  const smart = isSmartCircle(circle);
  const preset = smart ? presetForRule(circle.rule) : null;
  const total = smart ? getCircleMembers(circle, people).length : reachCount(circleId, people, circles);

  // Smart circles have no manual "direct" assignments — the whole
  // membership is computed and there are no sub-circles.
  const directPeople = smart ? [] : people.filter(p => (p.circleIds || []).includes(circleId));

  // All people in reach. For smart circles this is the computed set;
  // for manual circles it's direct + via-sub.
  const allInReach = reactExports.useMemo(() => {
    let list;
    if (smart) {
      const set = new Set(getCircleMembers(circle, people));
      list = people.filter(p => set.has(p.id));
    } else {
      const inSet = new Set();
      function walk(cur) {
        inSet.add(cur);
        for (const k of childrenMap.get(cur) || []) walk(k.id);
      }
      walk(circleId);
      list = people.filter(p => (p.circleIds || []).some(id => inSet.has(id)));
    }
    return list.sort((a, b) => {
      // Sort by lastTouch so calendar-only contact still ranks high.
      const ad = lastTouch(a) || '';
      const bd = lastTouch(b) || '';
      if (ad !== bd) return bd.localeCompare(ad);
      return (a.name || '').localeCompare(b.name || '');
    });
  }, [circleId, childrenMap, people, smart, circle]);

  // Breadcrumb for sub-circles
  const path = getPathString(circles, circleId);
  const isSub = path.includes('›');
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      padding: '54px 22px 0'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("button", {
      onClick: onBack,
      style: {
        background: 'transparent',
        border: 'none',
        padding: '14px 8px',
        margin: '-14px -8px',
        cursor: 'pointer',
        fontFamily: theme.fonts.mono,
        fontSize: 11,
        fontWeight: 500,
        color: theme.colors.ink3,
        letterSpacing: '0.12em',
        textTransform: 'uppercase'
      },
      children: "\u2190 CIRCLES"
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 12,
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: theme.fonts.mono,
        fontSize: 9.5,
        color: theme.colors.ink3,
        letterSpacing: 0.7,
        textTransform: 'uppercase'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
        style: {
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: toneMeta.color
        }
      }), toneMeta.label]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        gap: 12,
        marginTop: 4
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("h1", {
        style: {
          margin: 0,
          fontFamily: theme.fonts.serif,
          fontWeight: 500,
          fontSize: 'clamp(28px, 7vw, 36px)',
          letterSpacing: -0.4,
          color: theme.colors.ink,
          lineHeight: 1
        },
        children: circle.name
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
        onClick: onOpenEdit,
        style: {
          background: 'transparent',
          border: 'none',
          padding: '14px 8px',
          margin: '-14px -8px',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 5,
          fontFamily: theme.fonts.mono,
          fontSize: 11,
          fontWeight: 500,
          color: theme.colors.ink3,
          letterSpacing: '0.12em',
          textTransform: 'uppercase'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
          name: "pencil",
          size: 11
        }), "EDIT"]
      })]
    }), isSub && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginTop: 4,
        fontFamily: theme.fonts.serif,
        fontStyle: 'italic',
        fontSize: 13,
        color: theme.colors.ink3
      },
      children: path
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 6,
        fontFamily: theme.fonts.mono,
        fontSize: 10,
        color: theme.colors.ink3,
        letterSpacing: 0.7,
        textTransform: 'uppercase'
      },
      children: [total, " ", total === 1 ? 'PERSON' : 'PEOPLE', subs.length > 0 ? ` · ${subs.length} SUB-CIRCLE${subs.length === 1 ? '' : 'S'}` : '', smart && /*#__PURE__*/jsxRuntimeExports.jsx("span", {
        title: "Smart circle \u2014 membership is computed",
        style: {
          marginLeft: 8,
          padding: '2px 7px',
          borderRadius: theme.radii.pill,
          border: `1px solid ${theme.colors.accent}`,
          color: theme.colors.accent,
          fontFamily: theme.fonts.mono,
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: '0.12em',
          textTransform: 'uppercase'
        },
        children: "AUTO"
      })]
    }), smart && preset && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginTop: 8,
        fontFamily: theme.fonts.serif,
        fontStyle: 'italic',
        fontSize: 13,
        color: theme.colors.ink3,
        lineHeight: 1.45
      },
      children: describePreset(preset, circle.rule)
    }), !smart && subs.length > 0 && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 18
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          fontFamily: theme.fonts.mono,
          fontSize: 10,
          color: theme.colors.ink3,
          letterSpacing: 0.9,
          textTransform: 'uppercase',
          marginBottom: 8
        },
        children: "SUB-CIRCLES"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 10
        },
        children: subs.map(s => {
          const subTone = inferTone(s, circles);
          const subToneMeta = TONE_META[subTone];
          const subPeople = people.filter(p => (p.circleIds || []).includes(s.id));
          return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
            onClick: () => onOpenCircle && onOpenCircle(s.id),
            style: {
              padding: 12,
              background: theme.colors.card,
              border: `1px solid ${theme.colors.rule}`,
              borderRadius: theme.radii.lg,
              cursor: 'pointer'
            },
            children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                ...microLabel
              },
              children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
                style: {
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  background: subToneMeta.color
                }
              }), subToneMeta.label]
            }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
              style: {
                marginTop: 4,
                fontFamily: theme.fonts.serif,
                fontSize: 15,
                fontWeight: 500,
                color: theme.colors.ink,
                letterSpacing: -0.2,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              },
              children: s.name.replace(/^[A-Z][a-z]+'s\s+/i, '')
            }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
              style: {
                marginTop: 2,
                ...microLabel
              },
              children: [subPeople.length, " ", subPeople.length === 1 ? 'PERSON' : 'PEOPLE']
            }), subPeople.length > 0 && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
              style: {
                marginTop: 8
              },
              children: /*#__PURE__*/jsxRuntimeExports.jsx(AvatarPile, {
                items: subPeople.map(p => ({
                  name: p.name,
                  id: p.id
                })),
                size: 22,
                max: 3
              })
            })]
          }, s.id);
        })
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 22
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          fontFamily: theme.fonts.mono,
          fontSize: 10,
          color: theme.colors.ink3,
          letterSpacing: 0.9,
          textTransform: 'uppercase',
          marginBottom: 4
        },
        children: ["PEOPLE \xB7 ", allInReach.length]
      }), allInReach.length === 0 ? /*#__PURE__*/jsxRuntimeExports.jsx(EmptyState$3, {
        title: "No one here yet",
        subtitle: smart ? 'This circle fills itself as you log moments and add people.' : onAddPerson ? `People you add to ${circle.name} appear here.` : `People you add to ${circle.name} appear here — add them from the People tab.`,
        action: !smart && onAddPerson ? /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
          variant: "miniPrimary",
          onClick: onAddPerson,
          children: "Add someone"
        }) : null
      }) : /*#__PURE__*/jsxRuntimeExports.jsx("ul", {
        style: {
          listStyle: 'none',
          margin: 0,
          padding: 0
        },
        children: allInReach.map(p => {
          const isDirect = directPeople.some(d => d.id === p.id);
          const subPath = !isDirect ? (p.circleIds || []).map(id => circles.find(c => c.id === id)).filter(c => c && c.parentId === circleId).map(c => c.name).join(', ') : null;
          return /*#__PURE__*/jsxRuntimeExports.jsxs("li", {
            onClick: () => onOpenPerson(p.id),
            style: {
              display: 'flex',
              gap: 12,
              alignItems: 'center',
              padding: '12px 0',
              borderBottom: `1px solid ${theme.colors.rule}`,
              cursor: 'pointer'
            },
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
              name: p.name,
              photo: p.photo,
              size: 36
            }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
              style: {
                flex: 1,
                minWidth: 0
              },
              children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
                style: {
                  fontFamily: theme.fonts.serif,
                  fontSize: 16,
                  fontWeight: 500,
                  color: theme.colors.ink,
                  letterSpacing: -0.2
                },
                children: p.name
              }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
                style: {
                  fontFamily: theme.fonts.sans,
                  fontSize: 12.5,
                  color: theme.colors.ink3,
                  marginTop: 1
                },
                children: p.howWeMet || (subPath ? `via ${subPath}` : '') || ' '
              })]
            }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
              style: {
                flexShrink: 0,
                fontFamily: theme.fonts.mono,
                fontSize: 11,
                color: theme.colors.ink3,
                letterSpacing: 0.4
              },
              children: timeSince(lastTouch(p))
            })]
          }, p.id);
        })
      })]
    })]
  });
}

// Builds the relationship graph the Map renders.
//
// Nodes:
//   - one "you" node at center (pinned)
//   - one per person in the directory
//
// Edges (introduction tree):
//   - if person.referredBy is set and refers to an existing person → edge from
//     referrer → person
//   - else → edge from "you" → person
//
// Roles:
//   - connector = person with the highest outgoing-introduction degree (≥2)
//   - orphan    = person with no incoming referral AND no outgoing referrals
//                 (their only edge is to "you")

const ME_ID = '_me';
const YOU_NODE_ID = ME_ID;
function buildGraph(people, circles, opts = {}) {
  const {
    youInitials = 'ME'
  } = opts;
  const personById = new Map(people.map(p => [p.id, p]));

  // Out-degree for each person (how many people they introduced you to)
  const outDegree = new Map();
  for (const p of people) {
    if (p.referredBy && personById.has(p.referredBy)) {
      outDegree.set(p.referredBy, (outDegree.get(p.referredBy) || 0) + 1);
    }
  }

  // Determine connector threshold: anyone with ≥2 introductions, OR if no one
  // has ≥2, anyone with ≥1.
  const maxOut = Math.max(0, ...outDegree.values());
  const connectorThreshold = maxOut >= 2 ? 2 : 1;
  const connectorIds = new Set([...outDegree.entries()].filter(([, n]) => n >= connectorThreshold).map(([id]) => id));

  // Orphan = no referrer AND no people they introduced
  const orphanIds = new Set(people.filter(p => !p.referredBy && !(outDegree.get(p.id) > 0)).map(p => p.id));

  // Quiet edge = either endpoint hasn't been touched in ≥45 days
  const QUIET_DAYS = 45;
  const now = Date.now();

  // Build node list
  const nodes = [{
    id: ME_ID,
    kind: 'you',
    label: youInitials || 'ME',
    pin: true,
    // pinned at center — runSimulation reads px/py
    // Must match the W/H in MapScreen.jsx (currently 400×520)
    px: 200,
    py: 260,
    color: '#2a241c',
    // ink — strong dark center
    size: 36
  }, ...people.map(p => {
    const primaryId = (p.circleIds || [])[0];
    const tone = primaryId ? inferTone(circles.find(c => c.id === primaryId) || {}, circles) : 'personal';
    // Phase 2: recency comes from the ledger (notes ∪ interactions),
    // not just the latest note.
    const lastIso = lastTouch(p);
    // Infinity (not a numeric sentinel) so consumers can distinguish
    // "never touched" from "long ago" with Number.isFinite — a new
    // import must never count as drifting.
    const daysSince = lastIso ? Math.floor((now - new Date(lastIso).getTime()) / 86_400_000) : Infinity;
    // size: recent → larger (28-44); fades toward 22 as it ages out
    const recencyScore = Math.max(0, 1 - daysSince / 90);
    const size = Math.round(26 + recencyScore * 16);
    return {
      id: p.id,
      kind: 'person',
      label: initials(p.name),
      name: p.name,
      photo: p.photo || null,
      color: TONE_META[tone]?.color || TONE_META.personal.color,
      connector: connectorIds.has(p.id),
      orphan: orphanIds.has(p.id),
      size,
      daysSince,
      referredBy: p.referredBy || null,
      role: p.howWeMet || ''
    };
  })];

  // Build edges
  const edges = [];
  for (const p of people) {
    const sourceId = p.referredBy && personById.has(p.referredBy) ? p.referredBy : ME_ID;
    const sourcePerson = sourceId === ME_ID ? null : personById.get(sourceId);
    // Quiet-edge check now uses lastTouch so a recent calendar interaction
    // keeps an edge "live" even if no note was ever written.
    const sourceIso = sourcePerson ? lastTouch(sourcePerson) : null;
    const sourceDays = sourcePerson ? sourceIso ? Math.floor((now - new Date(sourceIso).getTime()) / 86_400_000) : 9999 : 0;
    const targetIso = lastTouch(p);
    const targetDays = targetIso ? Math.floor((now - new Date(targetIso).getTime()) / 86_400_000) : 9999;
    edges.push({
      source: sourceId,
      target: p.id,
      quiet: targetDays >= QUIET_DAYS && sourceDays >= QUIET_DAYS
    });
  }
  const connectorsCount = connectorIds.size;
  const orphansCount = orphanIds.size;
  const introductionsCount = [...outDegree.values()].reduce((s, n) => s + n, 0);
  const quietEdgesCount = edges.filter(e => e.quiet).length;
  return {
    nodes,
    edges,
    connectorIds,
    orphanIds,
    stats: {
      people: people.length,
      introductions: introductionsCount,
      connectors: connectorsCount,
      orphans: orphansCount,
      quietEdges: quietEdgesCount
    }
  };
}
function initials(name) {
  if (!name) return '?';
  const parts = String(name).trim().split(/\s+/).slice(0, 2);
  return parts.map(p => p[0]?.toUpperCase() || '').join('').slice(0, 2);
}

// Map — the relationship orbit.
// You at the centre (pinned), people orbiting at a distance set by how
// recently you've connected — closer = in touch, the outer ring = drifting.
// Tap a node → bottom sheet with intro chain + last touch.

function MapScreen({
  people,
  circles,
  settings,
  onOpenPerson,
  onOutreach,
  onAddPerson
}) {
  const [activeId, setActiveId] = reactExports.useState(null); // selected node id (for highlight + sheet)

  const youInitials = settings?.me?.initials || 'ME';

  // Build the graph. useMemo so it's stable across renders unless the
  // people/circles change.
  const graph = reactExports.useMemo(() => buildGraph(people, circles, {
    youInitials
  }), [people, circles, youInitials]);

  // The orbital view positions people itself from recency, so it only needs
  // the per-person data (recency + primary circle colour) buildGraph computed.
  const personNodes = reactExports.useMemo(() => graph.nodes.filter(n => n.kind === 'person'), [graph]);

  // Drifting requires a real gap — people with no logged touch ever are
  // 'new', not drifting (you can't drift from someone you just added).
  const driftingCount = reactExports.useMemo(() => graph.nodes.filter(n => n.kind === 'person' && Number.isFinite(n.daysSince) && n.daysSince > 45).length, [graph]);
  const neverCount = reactExports.useMemo(() => personNodes.filter(n => !Number.isFinite(n.daysSince)).length, [personNodes]);
  const activeNode = activeId ? graph.nodes.find(n => n.id === activeId) : null;
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      padding: '28px 22px 0'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx(CirclesLogo, {
      lockup: "horizontal"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("h1", {
      style: {
        margin: 0,
        marginTop: 18,
        fontFamily: theme.fonts.serif,
        fontWeight: 500,
        fontSize: 'clamp(28px, 7vw, 38px)',
        letterSpacing: -0.5,
        color: theme.colors.ink,
        lineHeight: 1
      },
      children: "Map"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginTop: 6,
        fontFamily: theme.fonts.serif,
        fontStyle: 'italic',
        fontSize: 15,
        color: theme.colors.ink3,
        lineHeight: 1.4
      },
      children: personNodes.length === 0 ? 'Add people to see your orbit.' : driftingCount > 0 ? `${driftingCount} ${driftingCount === 1 ? 'person is' : 'people are'} drifting toward the edge — tap to reconnect.` : neverCount === personNodes.length ? neverCount === 1 ? '1 new face — tap to say hello.' : `${neverCount} new faces — tap one to say hello.` : "Everyone's close. Nicely kept up."
    }), personNodes.length === 0 ? /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginTop: 16
      },
      children: /*#__PURE__*/jsxRuntimeExports.jsx(EmptyState, {
        onAddPerson: onAddPerson
      })
    }) : /*#__PURE__*/jsxRuntimeExports.jsx(OrbitMap, {
      nodes: personNodes,
      youInitials: youInitials,
      activeId: activeId,
      onTapNode: id => setActiveId(id === activeId ? null : id)
    }), activeNode && activeNode.id !== YOU_NODE_ID && /*#__PURE__*/jsxRuntimeExports.jsx(NodeSheet, {
      graph: graph,
      node: activeNode,
      person: people.find(p => p.id === activeNode.id) || null,
      onClose: () => setActiveId(null),
      onOpen: () => {
        onOpenPerson(activeNode.id);
      },
      onOutreach: onOutreach
    })]
  });
}

// ─────────────────────────────────────────────────────────────────────────
// Orbital view — people circle YOU at a distance set by how recently you've
// connected. Closer = in touch; the outer ring = drifting. No edges, so it
// reads at a glance. Echoes the Circles logo's concentric rings.
// ─────────────────────────────────────────────────────────────────────────

function initialsOf(name) {
  return (name || '').trim().split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase() || '?';
}
function OrbitMap({
  nodes,
  youInitials,
  activeId,
  onTapNode
}) {
  // Planets ease out from the sun on first paint — a small choreographed
  // "system coming to life." Honour reduced-motion by skipping straight to rest.
  const [shown, setShown] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setShown(true);
      return;
    }
    const id = setTimeout(() => setShown(true), 40);
    return () => clearTimeout(id);
  }, []);
  const SIZE = 352;
  const C = SIZE / 2;
  const R = C - 22;
  const bands = [{
    key: 'near',
    r: R * 0.46,
    label: 'This week'
  }, {
    key: 'mid',
    r: R * 0.73,
    label: 'This month'
  }, {
    key: 'far',
    r: R * 0.99,
    label: 'Drifting'
  }];
  const bandIndex = d => !Number.isFinite(d) ? 2 : d <= 14 ? 0 : d <= 45 ? 1 : 2;

  // Stable, grouped placement: sort by recency, bucket into rings, then spread
  // each ring's people evenly around the circle (offset per ring so they don't
  // line up radially).
  const grouped = [[], [], []];
  for (const n of [...nodes].sort((a, b) => (a.daysSince ?? 1e9) - (b.daysSince ?? 1e9))) {
    grouped[bandIndex(n.daysSince)].push(n);
  }
  // Spread each ring's people across the circle but leave an empty wedge at
  // the very top (GAP) reserved for the ring labels, so they never collide.
  const placed = [];
  const GAP = 0.95;
  grouped.forEach((list, bi) => {
    const span = Math.PI * 2 - GAP;
    const start = -Math.PI / 2 + GAP / 2;
    list.forEach((n, i) => {
      const t = list.length === 1 ? 0.5 : (i + 0.5) / list.length;
      const ang = start + t * span;
      const jitter = list.length > 4 ? i % 2 === 0 ? 7 : -7 : 0;
      const r = bands[bi].r + jitter;
      placed.push({
        n,
        x: C + r * Math.cos(ang),
        y: C + r * Math.sin(ang),
        bi
      });
    });
  });
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    role: "group",
    "aria-label": `Your orbit: ${grouped[0].length} seen this week, ${grouped[1].length} this month, ${grouped[2].length} drifting. People closer to the centre were seen more recently.`,
    style: {
      position: 'relative',
      width: SIZE,
      height: SIZE,
      margin: '18px auto 0'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        position: 'absolute',
        inset: 0,
        borderRadius: '50%',
        background: 'radial-gradient(circle at center, color-mix(in srgb, var(--c-accent) 20%, transparent) 0%, color-mix(in srgb, var(--c-accent) 7%, transparent) 32%, transparent 62%)',
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/jsxRuntimeExports.jsx("svg", {
      width: SIZE,
      height: SIZE,
      style: {
        position: 'absolute',
        inset: 0
      },
      "aria-hidden": "true",
      children: bands.map((b, i) => /*#__PURE__*/jsxRuntimeExports.jsx("circle", {
        cx: C,
        cy: C,
        r: b.r,
        fill: "none",
        stroke: theme.colors.ruleStrong,
        strokeWidth: i === bands.length - 1 ? 1.5 : 1.25,
        strokeDasharray: i === bands.length - 1 ? '3 5' : undefined
      }, i))
    }), bands.map((b, i) => /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        left: C,
        top: C - b.r,
        transform: 'translate(-50%, -50%)',
        // Frosted tag sitting ON the ring, not a paper hole punched in it.
        background: 'var(--glass-chip)',
        WebkitBackdropFilter: 'blur(8px)',
        backdropFilter: 'blur(8px)',
        border: '1px solid var(--c-rule)',
        padding: '2px 8px',
        borderRadius: theme.radii.pill,
        fontFamily: theme.fonts.mono,
        fontSize: 10,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: i === 2 ? theme.colors.accent : theme.colors.ink3,
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        zIndex: 1
      },
      children: b.label
    }, i)), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        position: 'absolute',
        left: C,
        top: C,
        transform: 'translate(-50%, -50%)',
        width: 48,
        height: 48,
        borderRadius: '50%',
        background: theme.colors.accent,
        color: theme.colors.onAccent,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: theme.fonts.mono,
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: 0.5,
        zIndex: 2,
        boxShadow: '0 0 0 5px color-mix(in srgb, var(--c-accent) 12%, transparent), 0 0 26px color-mix(in srgb, var(--c-accent) 50%, transparent), 0 3px 10px rgba(0,0,0,0.22)'
      },
      children: youInitials
    }), placed.map(({
      n,
      x,
      y,
      bi
    }, idx) => {
      const size = bi === 0 ? 38 : bi === 1 ? 33 : 29;
      const active = n.id === activeId;
      // Rest at its orbit, or — before reveal — collapsed onto the sun.
      const dx = C - x;
      const dy = C - y;
      const transform = shown ? 'translate(-50%, -50%) scale(1)' : `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(0.18)`;
      // Inner rings settle first; planets in the same ring fan out in turn.
      const delay = shown ? Math.min(idx * 36, 540) : 0;
      return /*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: () => onTapNode(n.id),
        "aria-label": `${n.name} — ${['seen this week', 'seen this month', 'drifting'][bi]}`,
        className: "al-press",
        style: {
          position: 'absolute',
          left: x,
          top: y,
          transform,
          opacity: shown ? 1 : 0,
          transition: 'transform 660ms cubic-bezier(0.22, 1, 0.36, 1), opacity 420ms ease',
          transitionDelay: `${delay}ms`,
          background: 'transparent',
          border: 'none',
          padding: 0,
          width: 44,
          height: 44,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: active ? 5 : 3
        },
        children: /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            width: size,
            height: size,
            borderRadius: '50%',
            background: n.color || theme.colors.ink3,
            color: theme.colors.onAccent,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: theme.fonts.mono,
            fontSize: size * 0.32,
            fontWeight: 500,
            boxShadow: theme.shadow.md,
            outline: active ? `2px solid ${theme.colors.ink}` : bi === 2 ? '1.5px dashed color-mix(in srgb, var(--c-accent) 60%, transparent)' : 'none',
            outlineOffset: 2,
            overflow: 'hidden'
          },
          children: n.photo ? /*#__PURE__*/jsxRuntimeExports.jsx("img", {
            src: n.photo,
            alt: "",
            style: {
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }
          }) : initialsOf(n.name)
        })
      }, n.id);
    })]
  });
}

// ─────────────────────────────────────────────────────────────────────────
// Bottom sheet
// ─────────────────────────────────────────────────────────────────────────

function NodeSheet({
  graph,
  node,
  person,
  onClose,
  onOpen,
  onOutreach
}) {
  const rootRef = reactExports.useRef(null);
  // Dialog behavior: focus moves in on open, Tab is trapped, Escape closes,
  // and focus returns to the tapped orbit node on unmount.
  useFocusTrap(rootRef, onClose);
  const referrer = node.referredBy ? graph.nodes.find(n => n.id === node.referredBy) : null;
  const seenLabel = recencyLabel(lastSeenInPerson(person));
  const spokeLabel = recencyLabel(lastSpoke(person));
  const reason = person ? easyReason(person) : null;
  // Trendline chip — only when it's news (warming/cooling, never steady).
  const trend = person ? trendFor(person) : null;
  const trendChip = trend && trend.state !== 'steady' ? trend : null;
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    ref: rootRef,
    className: "al-pop",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": `${node.name} — ${seenLabel && seenLabel !== 'Never' ? 'seen ' + seenLabel : 'details'}`
    // Solid sheet — the orbit is busy underneath, so the card must be
    // fully opaque to stay readable. Raised shadow separates it instead.
    ,
    style: {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 96,
      margin: '0 auto',
      width: 'calc(100% - 28px)',
      maxWidth: 374,
      borderRadius: 14,
      padding: '14px 16px',
      zIndex: 40,
      background: theme.colors.card,
      border: `1px solid ${theme.colors.rule}`,
      boxShadow: theme.shadow.cardRaised
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
        name: node.name,
        photo: node.photo,
        size: 42
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          flex: 1,
          minWidth: 0
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            fontFamily: theme.fonts.serif,
            fontSize: 17,
            fontWeight: 500,
            color: theme.colors.ink,
            letterSpacing: -0.2
          },
          children: node.name
        }), node.role && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            fontFamily: theme.fonts.serif,
            fontStyle: 'italic',
            fontSize: 13,
            color: theme.colors.ink3,
            marginTop: 1
          },
          children: node.role
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsx(CloseButton, {
        label: "close",
        onClick: onClose
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 12,
        display: 'flex',
        gap: 8
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(RecencyStat, {
        label: "SPOKE",
        sub: "any contact",
        value: spokeLabel
      }), /*#__PURE__*/jsxRuntimeExports.jsx(RecencyStat, {
        label: "SEEN",
        sub: "in person",
        value: seenLabel
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 12,
        display: 'flex',
        gap: 12,
        fontFamily: theme.fonts.mono,
        fontSize: 10,
        color: theme.colors.ink3,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        flexWrap: 'wrap'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
        children: ["MET VIA", ' ', /*#__PURE__*/jsxRuntimeExports.jsx("strong", {
          style: {
            color: referrer ? theme.colors.accent : theme.colors.ink2
          },
          children: referrer ? referrer.name : 'directly'
        })]
      }), trendChip && /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
        title: trendChip.line || undefined,
        style: {
          color: trendChip.state === 'warming' ? theme.colors.success : theme.colors.amber
        },
        children: [trendChip.glyph, " ", trendChip.label]
      }), node.connector && /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
        style: {
          color: theme.colors.accent,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 5
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
          "aria-hidden": true,
          style: {
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: theme.colors.accent,
            flexShrink: 0
          }
        }), "CONNECTOR"]
      }), node.orphan && /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
        style: {
          color: theme.colors.ink2,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 5
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
          "aria-hidden": true,
          style: {
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: 'transparent',
            border: '1.5px dashed ' + theme.colors.ink3,
            flexShrink: 0
          }
        }), "ORPHAN"]
      })]
    }), reason && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 12,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '9px 12px',
        borderRadius: theme.radii.md,
        background: theme.colors.accentSoft
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
        name: "arrow",
        size: 13,
        color: theme.colors.accent,
        style: {
          flexShrink: 0
        }
      }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
        style: {
          fontFamily: theme.fonts.serif,
          fontStyle: 'italic',
          fontSize: 14,
          color: theme.colors.ink,
          lineHeight: 1.35
        },
        children: reason
      })]
    }), (person?.phone || person?.email) && /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 12,
        display: 'flex',
        gap: 8
      },
      children: [person.phone && /*#__PURE__*/jsxRuntimeExports.jsx(QuickAction, {
        icon: "phone",
        label: "Call",
        href: `tel:${telHref(person.phone)}`,
        aria: `Call ${node.name}`,
        onClick: () => onOutreach && onOutreach(person.id, 'call')
      }), person.phone && /*#__PURE__*/jsxRuntimeExports.jsx(QuickAction, {
        icon: "message",
        label: "Text",
        href: `sms:${telHref(person.phone)}`,
        aria: `Text ${node.name}`,
        onClick: () => onOutreach && onOutreach(person.id, 'text')
      }), person.email && /*#__PURE__*/jsxRuntimeExports.jsx(QuickAction, {
        icon: "mail",
        label: "Email",
        href: `mailto:${person.email}`,
        aria: `Email ${node.name}`,
        onClick: () => onOutreach && onOutreach(person.id, 'email')
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginTop: 12,
        display: 'flex',
        gap: 8
      },
      children: /*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: onOpen,
        style: {
          flex: 1,
          padding: '12px 16px',
          minHeight: 44,
          borderRadius: theme.radii.pill,
          border: 'none',
          background: theme.colors.ink,
          color: theme.colors.paper,
          fontFamily: theme.fonts.serif,
          fontSize: 15,
          cursor: 'pointer'
        },
        children: "Open card"
      })
    })]
  }, node.id);
}

// Strip formatting so the OS dialer/SMS accepts it (digits and + only).
const telHref = raw => String(raw || '').replace(/[^\d+]/g, '');

// One quick-contact pill: drawn icon + label, mini-secondary voice.
function QuickAction({
  icon,
  label,
  href,
  aria,
  onClick
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsxs("a", {
    href: href,
    "aria-label": aria,
    onClick: onClick,
    className: "al-press",
    style: {
      flex: 1,
      minHeight: 44,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      padding: '8px 10px',
      borderRadius: theme.radii.pill,
      border: `1px solid ${theme.colors.rule}`,
      background: theme.colors.paper,
      color: theme.colors.ink,
      fontFamily: theme.fonts.sans,
      fontSize: 13,
      fontWeight: 500,
      textDecoration: 'none'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
      name: icon,
      size: 14,
      color: theme.colors.accent
    }), label]
  });
}
function RecencyStat({
  label,
  sub,
  value
}) {
  const never = value === 'Never';
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      flex: 1,
      minWidth: 0,
      padding: '8px 10px',
      borderRadius: theme.radii.md,
      // Recessed a step below the (now solid) card so the tiles read.
      background: theme.colors.paperDeep,
      border: `1px solid ${theme.colors.rule}`
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        ...microLabel,
        whiteSpace: 'nowrap'
      },
      children: [label, " ", /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
        style: {
          color: theme.colors.ink4
        },
        children: ["\xB7 ", sub]
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginTop: 2,
        fontFamily: theme.fonts.serif,
        fontSize: 15,
        fontWeight: 600,
        color: never ? theme.colors.ink4 : theme.colors.ink,
        whiteSpace: 'nowrap'
      },
      children: value
    })]
  });
}
function EmptyState({
  onAddPerson
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsx(EmptyState$3, {
    title: "Your orbit is empty",
    subtitle: "Add people, then log moments \u2014 the closer someone orbits, the more recently you've connected.",
    action: onAddPerson ? /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
      variant: "secondary",
      onClick: onAddPerson,
      children: "Add a person"
    }) : undefined
  });
}

// Minimal vCard parser — vCard 3.0/4.0 surface area only.
//
// Every iPhone and Android device exports contacts as .vcf. This is the
// shortest path to "sync with phone contacts" that doesn't require
// OAuth / restricted scopes / CASA. We parse only the fields the app
// can actually use:
//
//   FN     → full name
//   N      → family/given (used if FN missing)
//   EMAIL  → first email address
//   TEL    → first phone number
//   ORG    → company (becomes howWeMet hint)
//   TITLE  → role (becomes howWeMet hint)
//   PHOTO  → base64-embedded image (if present and small)
//
// We deliberately drop everything else (addresses, social profiles,
// notes, custom X- fields). The user will be shown a review screen
// before any of these become real contacts — nothing is silently saved.

const LINE_SPLIT = /\r?\n/;

/** Returns an array of contact drafts: { name, email, phone, org, title, photo }. */
function parseVcf(text) {
  if (typeof text !== 'string' || text.length === 0) return [];

  // vCards use line-folding: lines beginning with a space are continuations.
  const folded = [];
  for (const raw of text.split(LINE_SPLIT)) {
    if (raw.startsWith(' ') || raw.startsWith('\t')) {
      folded[folded.length - 1] = (folded[folded.length - 1] || '') + raw.slice(1);
    } else {
      folded.push(raw);
    }
  }
  const cards = [];
  let cur = null;
  for (const line of folded) {
    const up = line.trim().toUpperCase();
    if (up === 'BEGIN:VCARD') {
      cur = {};
    } else if (up === 'END:VCARD') {
      if (cur) cards.push(cur);
      cur = null;
    } else if (cur) {
      readField(cur, line);
    }
  }
  return cards.map(finalize).filter(c => c.name);
}

// ---- Field readers ----

function readField(card, line) {
  const colonIdx = line.indexOf(':');
  if (colonIdx === -1) return;
  const head = line.slice(0, colonIdx);
  const value = line.slice(colonIdx + 1);
  // head can be "FN" or "EMAIL;TYPE=INTERNET" or "PHOTO;ENCODING=b;TYPE=JPEG"
  const semi = head.indexOf(';');
  const tag = (semi === -1 ? head : head.slice(0, semi)).toUpperCase();
  const params = semi === -1 ? '' : head.slice(semi + 1).toUpperCase();
  switch (tag) {
    case 'FN':
      card.fn = unescapeText(value);
      break;
    case 'N':
      {
        // N:Family;Given;Middle;Prefix;Suffix
        const parts = value.split(';').map(unescapeText);
        card.n = parts;
        break;
      }
    case 'EMAIL':
      if (!card.email) card.email = value.trim();
      break;
    case 'TEL':
      if (!card.phone) card.phone = value.trim();
      break;
    case 'ORG':
      if (!card.org) card.org = unescapeText(value).split(';')[0];
      break;
    case 'TITLE':
      if (!card.title) card.title = unescapeText(value);
      break;
    case 'BDAY':
      // Phones export birthdays here — drives Circles' birthday reminders.
      if (!card.bday) card.bday = normalizeBday(value);
      break;
    case 'PHOTO':
      {
        const v = value.trim();
        // vCard 4.0 inline form: PHOTO:data:image/jpeg;base64,...
        if (v.startsWith('data:')) {
          card.photo = v;
          break;
        }
        // vCard 3.0 form: PHOTO;ENCODING=b;TYPE=JPEG:<base64>
        const isB64 = /ENCODING=B|BASE64/.test(params);
        if (isB64) {
          const mime = /TYPE=([A-Z]+)/.exec(params)?.[1]?.toLowerCase();
          card.photo = `data:image/${mime || 'jpeg'};base64,${v.replace(/\s+/g, '')}`;
        }
        break;
      }
  }
}

// Normalize a vCard BDAY value to 'YYYY-MM-DD' (or 'MM-DD' when the year is
// omitted, as iOS does for year-less birthdays) — the shape lib/lifeEvents
// understands. Returns '' for anything unparseable.
function normalizeBday(raw) {
  let s = (raw || '').trim();
  if (!s) return '';
  s = s.split('T')[0]; // drop any time component
  // v4 year-omitted: --MMDD or --MM-DD
  let m = s.match(/^--(\d{2})-?(\d{2})$/);
  if (m) return `${m[1]}-${m[2]}`;
  // YYYYMMDD
  m = s.match(/^(\d{4})(\d{2})(\d{2})$/);
  if (m) return `${m[1]}-${m[2]}-${m[3]}`;
  // YYYY-M-D
  m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (m) return `${m[1]}-${String(m[2]).padStart(2, '0')}-${String(m[3]).padStart(2, '0')}`;
  return '';
}
function unescapeText(s) {
  // vCard text escapes: \, \; \\ \n \N
  return (s || '').replace(/\\n/gi, ' ').replace(/\\,/g, ',').replace(/\\;/g, ';').replace(/\\\\/g, '\\').trim();
}
function finalize(card) {
  const name = card.fn || (card.n ?
  // N: family;given → "Given Family"
  [card.n[1], card.n[0]].filter(Boolean).join(' ').trim() : '');
  return {
    name,
    email: card.email || '',
    phone: card.phone || '',
    org: card.org || '',
    title: card.title || '',
    birthday: card.bday || '',
    photo: card.photo || null
  };
}

/**
 * Turn a parsed vCard draft into a Person record ready for setPeople.
 * The new person inherits no circles — the import UI lets the user
 * batch-assign a circle if they want, but we don't auto-bucket anyone.
 *
 * Phones are normalized through formatUSPhone so the contact card shows
 * the same (XXX) XXX-XXXX format whether the entry came from the form
 * or an import. Phones that don't parse to 10 digits (international,
 * partial, etc.) are dropped — better empty than a broken tel: link.
 */
function draftToPerson(draft, opts = {}) {
  const {
    id,
    circleIds = []
  } = opts;
  const howWeMet = draft.title && draft.org ? `${draft.title} at ${draft.org}` : draft.title || draft.org || '';
  const phoneFormatted = draft.phone && isValidUSPhone(draft.phone) ? formatUSPhone(draft.phone) : '';
  // Drop malformed emails entirely — better empty than a bad mailto: link.
  const emailNormalized = draft.email && isValidEmail(draft.email) ? normalizeEmail(draft.email) : '';
  return {
    id,
    name: draft.name || '',
    location: '',
    howWeMet,
    birthday: draft.birthday || '',
    photo: draft.photo || null,
    circleIds,
    notes: [],
    followUps: [],
    details: [],
    family: [],
    interactions: [],
    ...(emailNormalized ? {
      email: emailNormalized
    } : {}),
    ...(phoneFormatted ? {
      phone: phoneFormatted
    } : {})
  };
}

// contacts.js — one interface over "get me some contacts", with the right
// implementation per platform:
//
//   • Native (iOS/Android via Capacitor): the system contact picker (no
//     permission prompt) OR a full address-book import (with permission).
//   • Web (iOS Safari 14.5+/Chrome Android): the Contact Picker API —
//     user-mediated multi-select, name/email/tel only.
//   • Older web: the vCard (.vcf) file flow (also the richest: birthdays,
//     org, photos survive only through .vcf on the web).
//
// Both native paths normalize to the SAME draft shape parseVcf() returns —
// { name, email, phone, org, title, birthday, photo } — so the review screen
// and draftToPerson() don't care where a contact came from.
//
// The Capacitor plugin (@capacitor-community/contacts) is reached through the
// runtime global `window.Capacitor.Plugins.Contacts`, NOT a static import, so
// the web bundle never needs the native package.

function cap() {
  return typeof window !== 'undefined' && window.Capacitor || null;
}
function contactsPlugin() {
  const c = cap();
  return c && c.Plugins && c.Plugins.Contacts || null;
}

/** True when running inside the native app with the Contacts plugin present. */
function contactsNativeAvailable() {
  const c = cap();
  return !!(c && typeof c.isNativePlatform === 'function' && c.isNativePlatform() && contactsPlugin());
}
const PROJECTION = {
  name: true,
  phones: true,
  emails: true,
  birthday: true,
  image: true,
  organization: true
};
function pad(n) {
  return String(n).padStart(2, '0');
}

// Capacitor Contacts contact → our draft shape.
function normalizeNative(c) {
  if (!c) return null;
  const name = c.name?.display || [c.name?.given, c.name?.family].filter(Boolean).join(' ').trim() || '';
  const phone = Array.isArray(c.phones) && c.phones[0]?.number || '';
  const email = Array.isArray(c.emails) && c.emails[0]?.address || '';
  const org = c.organization?.company || '';
  const title = c.organization?.jobTitle || '';
  let birthday = '';
  const b = c.birthday;
  if (b && b.month && b.day) {
    birthday = b.year ? `${b.year}-${pad(b.month)}-${pad(b.day)}` : `${pad(b.month)}-${pad(b.day)}`;
  }
  let photo = null;
  const img = c.image?.base64String;
  if (img) photo = img.startsWith('data:') ? img : `data:image/jpeg;base64,${img}`;
  return {
    name,
    email,
    phone,
    org,
    title,
    birthday,
    photo
  };
}

/**
 * Open the system contact PICKER — the user hand-picks people and NO
 * all-contacts permission is required. The privacy-friendliest path.
 * Returns an array of drafts (one or more depending on the OS picker).
 */
/**
 * True when the BROWSER exposes the Contact Picker API — iOS Safari 14.5+
 * and Chrome on Android. Fully user-mediated: the OS shows its own picker,
 * the user selects, and the page receives only those entries. No standing
 * permission is granted; nothing is readable without a fresh pick.
 */
function contactsWebPickerAvailable() {
  return typeof navigator !== 'undefined' && 'contacts' in navigator && navigator.contacts && typeof navigator.contacts.select === 'function';
}

/**
 * Open the OS contact picker from the web app. Returns draft rows in the
 * same shape as the vCard path (name/email/phone; the web API exposes no
 * birthday/org/photo — the .vcf route stays the full-fidelity import).
 */
async function pickWebContacts() {
  if (!contactsWebPickerAvailable()) {
    throw new Error('Contact picking is not available in this browser.');
  }
  let props = ['name', 'email', 'tel'];
  try {
    if (typeof navigator.contacts.getProperties === 'function') {
      const avail = await navigator.contacts.getProperties();
      const filtered = props.filter(p => avail.includes(p));
      if (filtered.length) props = filtered;
    }
  } catch {
    /* keep defaults */
  }
  const picked = await navigator.contacts.select(props, {
    multiple: true
  });
  const first = v => Array.isArray(v) ? v[0] || '' : v || '';
  return (picked || []).map(c => ({
    name: String(first(c.name)).trim(),
    email: String(first(c.email)).trim(),
    phone: String(first(c.tel)).trim(),
    org: '',
    title: '',
    birthday: '',
    photo: null
  })).filter(c => c.name);
}
async function pickNativeContacts() {
  const p = contactsPlugin();
  if (!p || typeof p.pickContact !== 'function') {
    throw new Error('Contact picker is not available.');
  }
  const res = await p.pickContact({
    projection: PROJECTION
  });
  const list = res?.contacts || (res?.contact ? [res.contact] : []);
  return list.map(normalizeNative).filter(c => c && c.name);
}

/**
 * Full address-book import (requires the contacts permission). Use for the
 * "bring in everyone" first-run path; review screen still gates the save.
 */
async function importAllNativeContacts() {
  const p = contactsPlugin();
  if (!p || typeof p.getContacts !== 'function') {
    throw new Error('Contacts access is not available.');
  }
  if (typeof p.requestPermissions === 'function') {
    const perm = await p.requestPermissions();
    const granted = perm?.contacts === 'granted' || perm?.contacts === 'limited';
    if (perm && perm.contacts && !granted) {
      throw new Error('Contacts permission was denied.');
    }
  }
  const res = await p.getContacts({
    projection: PROJECTION
  });
  return (res?.contacts || []).map(normalizeNative).filter(c => c && c.name);
}

// ContactsImport — the vCard import flow.
//
// Flow:
//   1. File picker (accept=.vcf) → parseVcf → drafts[]
//   2. Review screen: each draft has a checkbox (default ON), pre-filled
//      name + role hint; user can deselect anyone they don't want.
//   3. Pick a circle to bucket everyone into (optional).
//   4. Hit "Add N contacts" → builds Person records via draftToPerson,
//      passes them up via onSave; settings.contacts.imported flips so
//      the prompt card disappears.
//
// Nothing is saved until the user explicitly confirms. We never silently
// write — this is the "AI output is shown for review" rule applied to
// the import flow too.

function ContactsImport({
  circles,
  people,
  onSave,
  onCancel,
  onSkip
}) {
  const fileRef = reactExports.useRef(null);
  const [drafts, setDrafts] = reactExports.useState(null); // null = haven't picked yet
  const [selected, setSelected] = reactExports.useState(new Set());
  // Per-contact circle assignment (index → circleId | ''), pre-filled from
  // the suggestion engine; `suggestions` keeps the originals so the UI can
  // mark which assignments are "ours" (✨) vs the user's.
  const [rowCircle, setRowCircle] = reactExports.useState({});
  const [suggestions, setSuggestions] = reactExports.useState({});
  const [fileName, setFileName] = reactExports.useState('');
  const [skipped, setSkipped] = reactExports.useState(0);
  const [query, setQuery] = reactExports.useState('');
  const [busy, setBusy] = reactExports.useState(false);
  const [error, setError] = reactExports.useState('');
  const nativeAvailable = contactsNativeAvailable();
  const webPickerAvailable = !nativeAvailable && contactsWebPickerAvailable();

  // Already-imported names guard us against creating duplicates.
  const existingNames = reactExports.useMemo(() => new Set(people.map(p => (p.name || '').trim().toLowerCase()).filter(Boolean)), [people]);

  // For the circle picker — flat indented list, same as PersonForm.
  const circleOptions = reactExports.useMemo(() => {
    const out = [];
    indexChildren(circles);
    const walk = (parentId, depth) => {
      const roots = circles.filter(c => (c.parentId || null) === parentId);
      for (const c of roots) {
        out.push({
          id: c.id,
          label: '  '.repeat(depth) + c.name,
          path: getPathString(circles, c.id)
        });
        walk(c.id, depth + 1);
      }
    };
    walk(null, 0);
    return out;
  }, [circles]);
  function handlePickFile() {
    fileRef.current?.click();
  }

  // Common path for drafts arriving from a file OR the native picker/import.
  function acceptParsed(parsed, label) {
    const fresh = parsed.filter(d => !existingNames.has((d.name || '').trim().toLowerCase()));
    setSkipped(parsed.length - fresh.length);
    setFileName(label);
    setDrafts(fresh);
    setSelected(new Set(fresh.map((_, i) => i)));
    // Pre-sort everyone into their likeliest circle — the user just reviews.
    const sugg = {};
    const assign = {};
    fresh.forEach((d, i) => {
      const s = suggestCircle(d, circles, people);
      if (s) {
        sugg[i] = s;
        assign[i] = s.circleId;
      }
    });
    setSuggestions(sugg);
    setRowCircle(assign);
    setQuery('');
  }

  // Tap a row's circle chip → cycle: suggestion/current → next circle → … → none.
  function cycleRowCircle(i) {
    const order = ['', ...circleOptions.map(c => c.id)];
    setRowCircle(rc => {
      const cur = rc[i] || '';
      const next = order[(order.indexOf(cur) + 1) % order.length];
      return {
        ...rc,
        [i]: next
      };
    });
  }
  function setAllCircles(cid) {
    if (!drafts) return;
    const next = {};
    drafts.forEach((_, i) => {
      next[i] = cid;
    });
    setRowCircle(next);
  }
  async function handleFile(e) {
    const f = e.target.files?.[0];
    if (!f) return;
    const text = await f.text();
    acceptParsed(parseVcf(text), f.name);
  }
  async function handleNativeImport() {
    setBusy(true);
    setError('');
    try {
      acceptParsed(await importAllNativeContacts(), 'iPhone Contacts');
    } catch (err) {
      setError(err?.message || 'Could not access your contacts.');
    } finally {
      setBusy(false);
    }
  }
  async function handleNativePick() {
    setBusy(true);
    setError('');
    try {
      const picked = await pickNativeContacts();
      if (picked.length) acceptParsed(picked, 'Selected contacts');
    } catch (err) {
      setError(err?.message || 'Could not open the contact picker.');
    } finally {
      setBusy(false);
    }
  }

  // Web Contact Picker (iOS Safari 14.5+/Chrome Android) — the OS shows its
  // own picker; we receive only what the user selects. Safari throws on
  // cancel, which isn't an error worth showing.
  async function handleWebPick() {
    setBusy(true);
    setError('');
    try {
      const picked = await pickWebContacts();
      if (picked.length) acceptParsed(picked, 'Selected contacts');
    } catch (err) {
      const msg = String(err?.message || '');
      if (!/abort|cancel|denied/i.test(msg)) {
        setError(msg || 'Could not open the contact picker.');
      }
    } finally {
      setBusy(false);
    }
  }
  function toggle(i) {
    setSelected(s => {
      const n = new Set(s);
      if (n.has(i)) n.delete(i);else n.add(i);
      return n;
    });
  }
  function selectAll() {
    setSelected(new Set(drafts.map((_, i) => i)));
  }
  function selectNone() {
    setSelected(new Set());
  }
  function handleAdd() {
    if (!drafts || selected.size === 0) return;
    const newPeople = [...selected].sort((a, b) => a - b).map(i => draftToPerson(drafts[i], {
      id: makeId('p'),
      circleIds: rowCircle[i] ? [rowCircle[i]] : []
    }));
    onSave(newPeople);
  }

  // ---------------- RENDER ----------------

  if (drafts === null) {
    // Step 1: choose a source
    return /*#__PURE__*/jsxRuntimeExports.jsxs(Frame, {
      title: "Bring in your people",
      subtitle: "Birthdays and photos come along \u2014 nothing is saved until you review.",
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("input", {
        ref: fileRef,
        type: "file",
        accept: ".vcf,text/vcard",
        onChange: handleFile,
        style: {
          display: 'none'
        }
      }), nativeAvailable ?
      /*#__PURE__*/
      // Native app: one-tap access. The picker needs no permission prompt.
      jsxRuntimeExports.jsxs("div", {
        style: {
          marginTop: 22,
          display: 'flex',
          flexDirection: 'column',
          gap: 10
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Button, {
          onClick: handleNativeImport,
          disabled: busy,
          style: {
            width: '100%'
          },
          children: busy ? 'Opening…' : 'Sync my contacts'
        }), /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
          variant: "secondary",
          onClick: handleNativePick,
          disabled: busy,
          style: {
            width: '100%'
          },
          children: "Pick specific contacts"
        }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
          onClick: handlePickFile,
          style: {
            background: 'transparent',
            border: 'none',
            color: theme.colors.ink3,
            fontFamily: theme.fonts.sans,
            fontSize: 12.5,
            cursor: 'pointer',
            marginTop: 2
          },
          children: "or import a .vcf file"
        })]
      }) : webPickerAvailable ?
      /*#__PURE__*/
      // Modern mobile browser: the OS contact picker works right here.
      // (.vcf stays available — it's the only web path that carries
      // birthdays and photos along.)
      jsxRuntimeExports.jsxs("div", {
        style: {
          marginTop: 22,
          display: 'flex',
          flexDirection: 'column',
          gap: 10
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Button, {
          onClick: handleWebPick,
          disabled: busy,
          style: {
            width: '100%'
          },
          children: busy ? 'Opening…' : 'Choose from your contacts'
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            fontFamily: theme.fonts.sans,
            fontSize: 12,
            color: theme.colors.ink3,
            textAlign: 'center',
            lineHeight: 1.5
          },
          children: "Your phone shows the picker \u2014 only the people you select come across, names, numbers, and emails."
        }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
          onClick: handlePickFile,
          style: {
            background: 'transparent',
            border: 'none',
            color: theme.colors.ink3,
            fontFamily: theme.fonts.sans,
            fontSize: 13,
            cursor: 'pointer',
            marginTop: 2,
            padding: '10px 8px'
          },
          children: "or import a .vcf file (brings birthdays and photos too)"
        })]
      }) : /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          marginTop: 22,
          padding: '18px 16px',
          background: theme.colors.card,
          border: `1px dashed ${theme.colors.ruleStrong}`,
          borderRadius: theme.radii.lg,
          textAlign: 'center'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            fontFamily: theme.fonts.serif,
            fontStyle: 'italic',
            fontSize: 14,
            color: theme.colors.ink2,
            lineHeight: 1.5,
            marginBottom: 14
          },
          children: ["On iPhone: open the Contacts app \u2192 Lists \u2192 tap a list \u2192 Share \u2192 Export vCard.", /*#__PURE__*/jsxRuntimeExports.jsx("br", {}), "On Android: open Contacts \u2192 menu \u2192 Settings \u2192 Export."]
        }), /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
          onClick: handlePickFile,
          children: "Choose a .vcf file"
        })]
      }), error && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          marginTop: 14,
          fontFamily: theme.fonts.serif,
          fontStyle: 'italic',
          fontSize: 13,
          color: theme.colors.danger
        },
        children: error
      }), /*#__PURE__*/jsxRuntimeExports.jsx(Footer, {
        onCancel: onCancel,
        onSkip: onSkip
      })]
    });
  }
  if (drafts.length === 0) {
    return /*#__PURE__*/jsxRuntimeExports.jsxs(Frame, {
      title: "Nothing to import",
      subtitle: `${fileName} had no new contacts.`,
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          marginTop: 18,
          fontFamily: theme.fonts.serif,
          fontStyle: 'italic',
          fontSize: 13,
          color: theme.colors.ink3
        },
        children: "Every contact in this file is already in your directory."
      }), /*#__PURE__*/jsxRuntimeExports.jsx(Footer, {
        onCancel: onCancel,
        onSkip: onSkip,
        primaryLabel: "Done",
        onPrimary: onSkip
      })]
    });
  }

  // Step 2: review screen
  const q = query.trim().toLowerCase();
  const visible = drafts.map((d, i) => ({
    d,
    i
  })).filter(({
    d
  }) => !q || `${d.name} ${d.email} ${d.org} ${d.title}`.toLowerCase().includes(q));
  const suggestedCount = Object.keys(suggestions).length;
  const subtitle = [skipped > 0 ? `${fileName} · ${skipped} already in your circles` : fileName, suggestedCount > 0 ? `${suggestedCount} sorted into circles for you ✨` : null].filter(Boolean).join(' · ');
  const circleNameOf = cid => circles.find(c => c.id === cid)?.name || '';
  return /*#__PURE__*/jsxRuntimeExports.jsxs(Frame, {
    title: `Import ${drafts.length} contact${drafts.length === 1 ? '' : 's'}`,
    subtitle: subtitle,
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      className: "al-glass",
      style: {
        position: 'sticky',
        top: 8,
        zIndex: 25,
        marginTop: 14,
        padding: '8px 8px 8px 14px',
        borderRadius: 16,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        className: "al-tnum",
        style: {
          fontFamily: theme.fonts.mono,
          fontSize: 10.5,
          letterSpacing: 0.6,
          textTransform: 'uppercase',
          color: theme.colors.ink2
        },
        children: [selected.size, " selected"]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs(Button, {
        onClick: handleAdd,
        disabled: selected.size === 0,
        children: ["Add ", selected.size || '']
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        marginTop: 12,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        flexWrap: 'wrap'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          display: 'flex',
          gap: 6
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(ChipBtn, {
          onClick: selectAll,
          active: selected.size === drafts.length,
          children: "All"
        }), /*#__PURE__*/jsxRuntimeExports.jsx(ChipBtn, {
          onClick: selectNone,
          active: selected.size === 0,
          children: "None"
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("select", {
        value: "",
        onChange: e => e.target.value !== '' && setAllCircles(e.target.value === '__none' ? '' : e.target.value),
        "aria-label": "Set a circle for all contacts",
        style: {
          padding: '6px 10px',
          fontFamily: theme.fonts.serif,
          fontSize: 13,
          background: theme.colors.card,
          border: `1px solid ${theme.colors.rule}`,
          borderRadius: theme.radii.pill,
          color: theme.colors.ink,
          outline: 'none'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("option", {
          value: "",
          disabled: true,
          children: "Set all to\u2026"
        }), /*#__PURE__*/jsxRuntimeExports.jsx("option", {
          value: "__none",
          children: "No circle"
        }), circleOptions.map(c => /*#__PURE__*/jsxRuntimeExports.jsx("option", {
          value: c.id,
          children: c.label
        }, c.id))]
      })]
    }), drafts.length > 6 && /*#__PURE__*/jsxRuntimeExports.jsx("input", {
      value: query,
      onChange: e => setQuery(e.target.value),
      placeholder: "Search contacts\u2026",
      style: {
        width: '100%',
        marginTop: 12,
        padding: '9px 12px',
        fontFamily: theme.fonts.sans,
        fontSize: 14,
        background: theme.colors.card,
        border: `1px solid ${theme.colors.rule}`,
        borderRadius: theme.radii.lg,
        outline: 'none',
        color: theme.colors.ink,
        boxSizing: 'border-box'
      }
    }), /*#__PURE__*/jsxRuntimeExports.jsx("ul", {
      style: {
        listStyle: 'none',
        margin: '14px 0 0',
        padding: 0
      },
      children: visible.map(({
        d,
        i
      }) => {
        const isOn = selected.has(i);
        const bday = d.birthday ? birthdayLabel(parseBirthday(d.birthday)) : '';
        const assigned = rowCircle[i] || '';
        const sugg = suggestions[i];
        const isSuggested = sugg && assigned === sugg.circleId;
        return /*#__PURE__*/jsxRuntimeExports.jsxs("li", {
          onClick: () => toggle(i),
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '10px 0',
            borderBottom: `1px solid ${theme.colors.rule}`,
            cursor: 'pointer',
            opacity: isOn ? 1 : 0.5
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx(Checkbox, {
            checked: isOn
          }), /*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
            name: d.name,
            photo: d.photo,
            size: 32
          }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
            style: {
              flex: 1,
              minWidth: 0
            },
            children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
              style: {
                fontFamily: theme.fonts.serif,
                fontSize: 15,
                fontWeight: 500,
                color: theme.colors.ink
              },
              children: d.name
            }), (d.title || d.org || d.email || bday) && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
              style: {
                fontFamily: theme.fonts.serif,
                fontStyle: 'italic',
                fontSize: 12,
                color: theme.colors.ink3,
                marginTop: 1,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              },
              children: [d.title && d.org ? `${d.title} at ${d.org}` : d.title || d.org, d.email, bday ? `🎂 ${bday}` : null].filter(Boolean).join(' · ')
            })]
          }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
            onClick: e => {
              e.stopPropagation();
              cycleRowCircle(i);
            },
            title: isSuggested ? `Suggested: ${sugg.reason}` : 'Tap to change circle',
            "aria-label": assigned ? `Circle: ${circleNameOf(assigned)}${isSuggested ? ` (suggested — ${sugg.reason})` : ''}. Tap to change.` : 'No circle. Tap to assign.',
            style: {
              flexShrink: 0,
              maxWidth: 124,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              padding: '4px 10px',
              borderRadius: theme.radii.pill,
              border: assigned ? `1px solid ${isSuggested ? theme.colors.accentBorder : theme.colors.ruleStrong}` : `1px dashed ${theme.colors.ruleStrong}`,
              background: assigned ? isSuggested ? theme.colors.accentSofter : theme.colors.card : 'transparent',
              color: assigned ? isSuggested ? theme.colors.accent : theme.colors.ink2 : theme.colors.ink3,
              fontFamily: theme.fonts.sans,
              fontSize: 11,
              cursor: 'pointer'
            },
            children: assigned ? `${isSuggested ? '✨ ' : ''}${circleNameOf(assigned)}` : '+ Circle'
          })]
        }, i);
      })
    }), /*#__PURE__*/jsxRuntimeExports.jsx(Footer, {
      onCancel: onCancel,
      onSkip: onSkip
    })]
  });
}

// ---- Small layout helpers ----

function Frame({
  title,
  subtitle,
  children
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      padding: '54px 22px 24px'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        fontFamily: theme.fonts.mono,
        fontSize: 10,
        color: theme.colors.ink3,
        letterSpacing: 0.9,
        textTransform: 'uppercase'
      },
      children: "CONTACTS"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("h1", {
      style: {
        margin: 0,
        marginTop: 4,
        fontFamily: theme.fonts.serif,
        fontWeight: 500,
        fontSize: 32,
        letterSpacing: -0.5,
        color: theme.colors.ink,
        lineHeight: 1.05
      },
      children: title
    }), subtitle && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginTop: 4,
        fontFamily: theme.fonts.serif,
        fontStyle: 'italic',
        fontSize: 14,
        color: theme.colors.ink3
      },
      children: subtitle
    }), children]
  });
}
function Footer({
  onCancel,
  onSkip,
  primaryLabel,
  onPrimary,
  primaryDisabled
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 10
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("button", {
      onClick: onSkip || onCancel,
      style: {
        background: 'transparent',
        border: 'none',
        color: theme.colors.ink3,
        cursor: 'pointer',
        fontFamily: theme.fonts.mono,
        fontSize: 10,
        letterSpacing: 0.5,
        textTransform: 'uppercase'
      },
      children: "skip for now"
    }), primaryLabel && /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
      onClick: onPrimary,
      disabled: primaryDisabled,
      children: primaryLabel
    })]
  });
}
function ChipBtn({
  children,
  onClick,
  active
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsx(Chip, {
    active: active,
    onClick: onClick,
    children: children
  });
}
function Checkbox({
  checked
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsx("div", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 4,
      border: `1.5px solid ${checked ? theme.colors.accent : theme.colors.ruleStrong}`,
      background: checked ? theme.colors.accent : 'transparent',
      color: theme.colors.paper,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 11,
      lineHeight: 1,
      flexShrink: 0
    },
    children: checked ? '✓' : ''
  });
}

// applock.js — passcode / Face ID gate for opening the app.
//
// A relationship vault deserves a lock. On the native build this becomes Face ID
// (see verifyBiometric in native.js); everywhere — including the web pilot — a
// 4–8 digit passcode is the universal fallback. We never store the passcode,
// only a salted SHA-256 hash, so reading localStorage doesn't reveal it.
//
// Pure + deterministic (the hash helpers are async only because SubtleCrypto
// is). No React, no storage — the caller persists `settings.security`.

const PIN_LENGTH = 4;
const MAX_PIN = 8;
const SALT = 'circles.pin.v1:';

/** Strip everything but digits and cap the length. */
function normalizePin(value) {
  return String(value || '').replace(/\D/g, '').slice(0, MAX_PIN);
}

/** Is the app-lock turned on? */
function appLockEnabled(settings) {
  return Boolean(settings && settings.security && settings.security.appLock);
}

/** The stored passcode hash, or null. */
function pinHashOf(settings) {
  return settings && settings.security && settings.security.pinHash || null;
}

/** Salted SHA-256 of a normalized passcode → lowercase hex. */
async function hashPin(pin) {
  const norm = normalizePin(pin);
  const bytes = new TextEncoder().encode(SALT + norm);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2, '0')).join('');
}

/** True when `pin` matches the stored `hash`. Never throws. */
async function verifyPin(pin, hash) {
  if (!hash) return false;
  try {
    return (await hashPin(pin)) === hash;
  } catch {
    return false;
  }
}

// LockScreen — the passcode / Face ID gate.
//
// Two modes:
//   unlock : shown over the whole app when it's locked. Auto-prompts Face ID on
//            native; a 4-digit passcode is the universal fallback.
//   set    : used from Settings to create a passcode (enter → confirm).
//
// Rendered through a portal at a very high z-index so it sits above the floating
// nav and any sheets. The keypad keys are large (≥44px) so iOS never zooms.

function LockScreen({
  mode = 'unlock',
  settings,
  onUnlock,
  onSet,
  onCancel
}) {
  const isSet = mode === 'set';
  const [buf, setBuf] = reactExports.useState('');
  const [stage, setStage] = reactExports.useState('first'); // set-mode: 'first' | 'confirm'
  const firstRef = reactExports.useRef('');
  const [error, setError] = reactExports.useState('');
  const [shake, setShake] = reactExports.useState(false);
  const [hasBio, setHasBio] = reactExports.useState(false);
  const [leaving, setLeaving] = reactExports.useState(false);
  const rootRef = reactExports.useRef(null);
  const storedHash = pinHashOf(settings);

  // The gate must actually gate: trap Tab inside the dialog so keyboard focus
  // can't wander into the app underneath. Escape cancels only where a cancel
  // handler exists (set mode / disable-lock confirm); the real lock passes
  // nothing, so Escape is a no-op there.
  useFocusTrap(rootRef, onCancel || null);

  // Native: see if Face ID / Touch ID is available, and auto-prompt on entry.
  reactExports.useEffect(() => {
    if (isSet) return;
    let alive = true;
    (async () => {
      const {
        available
      } = await biometricAvailable();
      if (!alive) return;
      setHasBio(available);
      if (available) tryBiometric();
    })();
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  async function tryBiometric() {
    const ok = await verifyBiometric('Unlock Circles');
    if (ok) {
      haptics.success && haptics.success();
      setLeaving(true);
    }
  }
  function fail(msg) {
    setError(msg);
    setShake(true);
    haptics.warn && haptics.warn();
    setTimeout(() => setShake(false), 420);
    setTimeout(() => setBuf(''), 180);
  }
  async function complete(pin) {
    if (isSet) {
      if (stage === 'first') {
        firstRef.current = pin;
        setStage('confirm');
        setError('');
        setBuf('');
        return;
      }
      // confirm
      if (pin !== firstRef.current) {
        setStage('first');
        firstRef.current = '';
        fail('Those didn’t match — try again.');
        return;
      }
      const hash = await hashPin(pin);
      haptics.success && haptics.success();
      onSet && onSet(hash);
      return;
    }
    // unlock
    const ok = await verifyPin(pin, storedHash);
    if (ok) {
      haptics.success && haptics.success();
      setLeaving(true); // onUnlock fires when the exit animation ends
    } else {
      fail('Wrong passcode.');
    }
  }
  function press(d) {
    setError('');
    haptics.tap && haptics.tap();
    setBuf(prev => {
      if (prev.length >= PIN_LENGTH) return prev;
      const next = prev + d;
      if (next.length === PIN_LENGTH) setTimeout(() => complete(next), 110);
      return next;
    });
  }
  function del() {
    haptics.tap && haptics.tap();
    setBuf(p => p.slice(0, -1));
  }

  // Hardware keyboard (iPad + Magic Keyboard, desktop PWA): digits type,
  // Backspace deletes — both modes. The listener is scoped to mount but calls
  // through a ref so set-mode's stage ('first' → 'confirm') is never stale;
  // there are no text inputs here to collide with.
  const keyHandlerRef = reactExports.useRef(null);
  keyHandlerRef.current = e => {
    if (/^[0-9]$/.test(e.key)) {
      e.preventDefault();
      press(e.key);
    } else if (e.key === 'Backspace') {
      e.preventDefault();
      del();
    }
  };
  reactExports.useEffect(() => {
    const onKey = e => keyHandlerRef.current && keyHandlerRef.current(e);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  const title = isSet ? stage === 'first' ? 'Create a passcode' : 'Confirm your passcode' : 'Circles is locked';
  const subtitle = isSet ? 'You’ll use this 4-digit code to open Circles.' : hasBio ? 'Use Face ID, or enter your passcode.' : 'Enter your passcode to continue.';
  const node = /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    ref: rootRef,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onAnimationEnd: e => {
      // Only the root's own al-splash-out — never a bubbled child animation.
      if (leaving && e.target === e.currentTarget) onUnlock && onUnlock();
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 2000,
      background: theme.colors.paper,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'max(54px, env(safe-area-inset-top)) 22px max(28px, env(safe-area-inset-bottom))',
      boxSizing: 'border-box',
      animation: leaving ? `al-splash-out ${theme.motion.base}ms ${theme.ease.standard} forwards` : undefined
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        minHeight: 22
      },
      children: onCancel && /*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: onCancel,
        style: {
          ...microLabel,
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '12px 16px',
          margin: '-12px 0 0 -16px'
        },
        children: "Cancel"
      })
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 18
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(CirclesLogo, {
        lockup: "full"
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          textAlign: 'center'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            fontFamily: theme.fonts.serif,
            fontSize: 22,
            letterSpacing: -0.3,
            color: theme.colors.ink
          },
          children: title
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          "aria-live": "assertive",
          style: {
            marginTop: 6,
            fontFamily: theme.fonts.sans,
            fontSize: 13,
            color: theme.colors.ink3,
            lineHeight: 1.5,
            minHeight: 18
          },
          children: error ? /*#__PURE__*/jsxRuntimeExports.jsx("span", {
            style: {
              color: theme.colors.danger
            },
            children: error
          }) : subtitle
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        role: "status",
        "aria-label": `Passcode: ${buf.length} of ${PIN_LENGTH} digits entered`,
        style: {
          display: 'flex',
          gap: 16,
          transition: 'transform 80ms',
          transform: shake ? 'translateX(0)' : 'none',
          animation: shake ? 'al-shake 0.4s' : 'none'
        },
        children: Array.from({
          length: PIN_LENGTH
        }).map((_, i) => {
          const filled = i < buf.length;
          return /*#__PURE__*/jsxRuntimeExports.jsx("span", {
            "aria-hidden": true,
            style: {
              width: 13,
              height: 13,
              borderRadius: '50%',
              background: filled ? theme.colors.accent : 'transparent',
              border: `1.5px solid ${filled ? theme.colors.accent : theme.colors.ruleStrong}`,
              transition: 'background 120ms, border-color 120ms'
            }
          }, i);
        })
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 14,
        width: '100%',
        maxWidth: 300
      },
      children: [['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(d => /*#__PURE__*/jsxRuntimeExports.jsx(KeypadButton, {
        onClick: () => press(d),
        children: d
      }, d)), !isSet && hasBio ? /*#__PURE__*/jsxRuntimeExports.jsx(KeypadButton, {
        onClick: tryBiometric,
        "aria-label": "Unlock with Face ID",
        subtle: true,
        children: /*#__PURE__*/jsxRuntimeExports.jsx(FaceIdGlyph, {})
      }) : /*#__PURE__*/jsxRuntimeExports.jsx("div", {}), /*#__PURE__*/jsxRuntimeExports.jsx(KeypadButton, {
        onClick: () => press('0'),
        children: "0"
      }), /*#__PURE__*/jsxRuntimeExports.jsx(KeypadButton, {
        onClick: del,
        "aria-label": "Delete",
        subtle: true,
        disabled: buf.length === 0,
        children: /*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
          name: "backspace",
          size: 24,
          color: theme.colors.ink2
        })
      })]
    })]
  });
  if (typeof document === 'undefined') return node;
  return /*#__PURE__*/reactDomExports.createPortal(node, document.body);
}
function KeypadButton({
  children,
  onClick,
  subtle = false,
  disabled = false,
  ...rest
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsx("button", {
    onClick: onClick,
    disabled: disabled,
    className: "al-press",
    style: {
      height: 64,
      borderRadius: theme.radii.lg,
      border: subtle ? 'none' : `1px solid ${theme.colors.rule}`,
      background: subtle ? 'transparent' : theme.colors.card,
      color: theme.colors.ink,
      fontFamily: theme.fonts.serif,
      fontSize: subtle ? 22 : 26,
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.3 : 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      userSelect: 'none',
      WebkitUserSelect: 'none'
    },
    ...rest,
    children: children
  });
}
function FaceIdGlyph() {
  return /*#__PURE__*/jsxRuntimeExports.jsxs("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: theme.colors.accent,
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
      d: "M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
      d: "M9 10v1M15 10v1M12 9v4l-1 1M9.5 15.5c.8.7 4.2.7 5 0"
    })]
  });
}

// Settings — the one place all the scattered preferences live.
//
// Sections: Appearance (light/dark/system), Notifications (call recap),
// Feedback (haptics), Calendar (sync status + refresh), Contacts (re-import),
// About. Everything writes through onUpdateSettings so it persists via the
// single storage.js path.

function Settings({
  settings,
  onUpdateSettings,
  onBack,
  onRefresh,
  calLoading,
  calFetchedAt,
  onOpenContactsImport,
  onOpenPulse,
  onBackup,
  lastExportAt = null
}) {
  const s = settings || {};
  const themePref = s.appearance?.theme || 'system';
  const callRemEnabled = s.callReminders?.enabled !== false;
  const hapticsEnabled = s.haptics?.enabled !== false;
  const cal = s.calendar;
  const notif = s.notifications || {};
  const patch = next => onUpdateSettings({
    ...s,
    ...next
  });
  const patchNotif = next => patch({
    notifications: {
      ...notif,
      ...next
    }
  });
  const [perm, setPerm] = reactExports.useState(notificationPermission());
  const askPermission = async () => {
    haptics.tap();
    const p = await requestNotificationPermission();
    setPerm(p);
  };
  const fileRef = reactExports.useRef(null);
  const [backups] = reactExports.useState(() => listBackups());
  const lastBackup = lastBackupAt();
  // null | 'set' (creating a passcode) | 'disable' (confirm before turning off)
  const [securityFlow, setSecurityFlow] = reactExports.useState(null);
  const lockOn = appLockEnabled(s);
  function handleRestoreBackup(id) {
    if (!window.confirm('Restore this backup? Everything currently on this device will be replaced.')) return;
    try {
      restoreBackup(id);
      haptics.success();
      window.location.reload();
    } catch (e) {
      window.alert(e.message || 'Could not restore that backup.');
    }
  }
  async function handleExport() {
    haptics.tap();
    // Prefer the app-level handler (native share sheet / records the timestamp).
    if (onBackup) {
      const res = await onBackup();
      if (res && res.ok) haptics.success();
      return;
    }
    // Fallback: plain web download (no timestamp tracking).
    const text = exportData();
    const blob = new Blob([text], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `circles-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }
  function handleRestoreFile(e) {
    const file = e.target.files && e.target.files[0];
    e.target.value = ''; // allow re-selecting the same file later
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        importData(String(reader.result));
        haptics.success();
        if (window.confirm('Backup restored. Reload to see it?')) location.reload();
      } catch (err) {
        haptics.warn();
        window.alert(err.message || 'Could not read that backup.');
      }
    };
    reader.readAsText(file);
  }
  function handleClear() {
    haptics.warn();
    if (window.confirm('Erase everything on this device — circles, people, notes, history? This cannot be undone.')) {
      clearData();
      location.reload();
    }
  }
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      padding: '28px 22px 40px'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 8
      },
      children: /*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: () => {
          haptics.tap();
          onBack && onBack();
        },
        "aria-label": "Back",
        className: "al-press",
        style: {
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          width: 44,
          height: 44,
          margin: '-11px 0 -11px -13px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        children: /*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
          name: "chevronLeft",
          size: 22,
          color: theme.colors.accent
        })
      })
    }), /*#__PURE__*/jsxRuntimeExports.jsx("h1", {
      style: {
        fontFamily: theme.fonts.serif,
        fontSize: 32,
        fontWeight: 500,
        color: theme.colors.ink,
        margin: '0 0 24px',
        letterSpacing: '-0.02em'
      },
      children: "Settings"
    }), /*#__PURE__*/jsxRuntimeExports.jsx(Section, {
      title: "YOUR YEAR",
      children: /*#__PURE__*/jsxRuntimeExports.jsx(Row, {
        label: "Relationship pulse",
        sub: "Your recap + who you're keeping up with.",
        children: /*#__PURE__*/jsxRuntimeExports.jsx("button", {
          onClick: () => {
            haptics.tap();
            onOpenPulse && onOpenPulse();
          },
          className: "al-press",
          style: miniBtnStyle,
          children: "Open"
        })
      })
    }), /*#__PURE__*/jsxRuntimeExports.jsx(Section, {
      title: "APPEARANCE",
      children: /*#__PURE__*/jsxRuntimeExports.jsx(Row, {
        label: "Theme",
        sub: "Light, dark, or follow your device.",
        children: /*#__PURE__*/jsxRuntimeExports.jsx(Segmented, {
          value: themePref,
          options: [{
            value: 'system',
            label: 'Auto'
          }, {
            value: 'light',
            label: 'Light'
          }, {
            value: 'dark',
            label: 'Dark'
          }],
          onChange: v => {
            haptics.tap();
            patch({
              appearance: {
                ...(s.appearance || {}),
                theme: v
              }
            });
          }
        })
      })
    }), /*#__PURE__*/jsxRuntimeExports.jsxs(Section, {
      title: "NOTIFICATIONS",
      children: [!notificationsSupported() ? /*#__PURE__*/jsxRuntimeExports.jsx(Row, {
        label: "Not available",
        sub: "This browser doesn't support notifications. Try installing Circles to your home screen.",
        children: /*#__PURE__*/jsxRuntimeExports.jsx(StatusDot, {})
      }) : perm !== 'granted' ? /*#__PURE__*/jsxRuntimeExports.jsx(Row, {
        label: "Turn on notifications",
        sub: perm === 'denied' ? 'Blocked in your browser settings — re-enable there to get nudges.' : 'Morning brief, pre-meeting prep, and birthday reminders.',
        children: /*#__PURE__*/jsxRuntimeExports.jsx("button", {
          onClick: askPermission,
          disabled: perm === 'denied',
          className: "al-press",
          style: {
            ...miniBtnStyle,
            background: theme.colors.accent,
            color: theme.colors.onAccent,
            borderColor: theme.colors.accent,
            opacity: perm === 'denied' ? 0.5 : 1
          },
          children: "Enable"
        })
      }) : /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Row, {
          label: "Morning brief",
          sub: "A daily heads-up of who you'll see.",
          children: /*#__PURE__*/jsxRuntimeExports.jsx(Toggle, {
            on: notif.morningBrief !== false,
            onChange: v => {
              haptics.tap();
              patchNotif({
                morningBrief: v
              });
            }
          })
        }), /*#__PURE__*/jsxRuntimeExports.jsx(Row, {
          label: "Pre-meeting prep",
          sub: "30 min before, with what to bring up.",
          children: /*#__PURE__*/jsxRuntimeExports.jsx(Toggle, {
            on: notif.preMeeting !== false,
            onChange: v => {
              haptics.tap();
              patchNotif({
                preMeeting: v
              });
            }
          })
        }), /*#__PURE__*/jsxRuntimeExports.jsx(Row, {
          label: "Post-meeting capture",
          sub: "A nudge to log it right after.",
          children: /*#__PURE__*/jsxRuntimeExports.jsx(Toggle, {
            on: notif.postMeeting !== false,
            onChange: v => {
              haptics.tap();
              patchNotif({
                postMeeting: v
              });
            }
          })
        }), /*#__PURE__*/jsxRuntimeExports.jsx(Row, {
          label: "Birthdays",
          sub: "A reminder the morning of.",
          children: /*#__PURE__*/jsxRuntimeExports.jsx(Toggle, {
            on: notif.birthdays !== false,
            onChange: v => {
              haptics.tap();
              patchNotif({
                birthdays: v
              });
            }
          })
        }), /*#__PURE__*/jsxRuntimeExports.jsx(Row, {
          label: "Send a test",
          sub: "See what a nudge looks like.",
          children: /*#__PURE__*/jsxRuntimeExports.jsx("button", {
            onClick: () => {
              haptics.success();
              sendTestNotification();
            },
            className: "al-press",
            style: miniBtnStyle,
            children: "Test"
          })
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsx(Row, {
        label: "Call recap reminders",
        sub: "After you tap to call a contact, nudge for a 15-second recap.",
        children: /*#__PURE__*/jsxRuntimeExports.jsx(Toggle, {
          on: callRemEnabled,
          onChange: v => {
            haptics.tap();
            patch({
              callReminders: {
                ...(s.callReminders || {}),
                enabled: v
              }
            });
          }
        })
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx(Section, {
      title: "FEEDBACK",
      children: /*#__PURE__*/jsxRuntimeExports.jsx(Row, {
        label: "Haptics",
        sub: "Subtle vibration on taps and confirmations.",
        children: /*#__PURE__*/jsxRuntimeExports.jsx(Toggle, {
          on: hapticsEnabled,
          onChange: v => {
            // Buzz on enable so the user feels it take effect.
            if (v) haptics.success();
            patch({
              haptics: {
                ...(s.haptics || {}),
                enabled: v
              }
            });
          }
        })
      })
    }), /*#__PURE__*/jsxRuntimeExports.jsxs(Section, {
      title: "PRIVACY & SECURITY",
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(Row, {
        label: "Require Face ID / passcode",
        sub: "Lock Circles when you open it or switch back to it.",
        children: /*#__PURE__*/jsxRuntimeExports.jsx(Toggle, {
          on: lockOn,
          onChange: v => {
            haptics.tap();
            setSecurityFlow(v ? 'set' : 'disable');
          }
        })
      }), lockOn && /*#__PURE__*/jsxRuntimeExports.jsx(Row, {
        label: "Change passcode",
        sub: "Set a new 4-digit code.",
        children: /*#__PURE__*/jsxRuntimeExports.jsx("button", {
          onClick: () => {
            haptics.tap();
            setSecurityFlow('set');
          },
          className: "al-press",
          style: miniBtnStyle,
          children: "Change"
        })
      }), /*#__PURE__*/jsxRuntimeExports.jsx(Row, {
        label: "AI note parsing",
        sub: "Notes you capture are sorted by AI. Off = sorted on device, nothing sent anywhere.",
        children: /*#__PURE__*/jsxRuntimeExports.jsx(Toggle, {
          on: s.ai?.enabled !== false,
          onChange: v => {
            haptics.tap();
            patch({
              ai: {
                ...(s.ai || {}),
                enabled: v
              }
            });
          }
        })
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx(Section, {
      title: "CALENDAR",
      children: cal?.url ? /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Row, {
          label: cal.label || 'Connected',
          sub: truncateUrl(cal.url),
          children: /*#__PURE__*/jsxRuntimeExports.jsx(StatusDot, {
            ok: true
          })
        }), /*#__PURE__*/jsxRuntimeExports.jsx(Row, {
          label: "Last synced",
          sub: calLoading ? 'Syncing…' : formatSince(calFetchedAt),
          children: /*#__PURE__*/jsxRuntimeExports.jsx("button", {
            onClick: () => {
              haptics.tap();
              onRefresh && onRefresh();
            },
            className: "al-press",
            style: miniBtnStyle,
            children: calLoading ? 'Syncing…' : 'Refresh'
          })
        }), /*#__PURE__*/jsxRuntimeExports.jsx(Row, {
          label: "Disconnect",
          sub: "Stop syncing this calendar.",
          children: /*#__PURE__*/jsxRuntimeExports.jsx("button", {
            onClick: () => {
              haptics.warn();
              patch({
                calendar: null
              });
            },
            className: "al-press",
            style: {
              ...miniBtnStyle,
              color: theme.colors.danger
            },
            children: "Remove"
          })
        })]
      }) : /*#__PURE__*/jsxRuntimeExports.jsx(Row, {
        label: "No calendar connected",
        sub: "Connect one from the Today tab.",
        children: /*#__PURE__*/jsxRuntimeExports.jsx(StatusDot, {})
      })
    }), /*#__PURE__*/jsxRuntimeExports.jsx(Section, {
      title: "CONTACTS",
      children: /*#__PURE__*/jsxRuntimeExports.jsx(Row, {
        label: "Import contacts",
        sub: "Add people from a vCard (.vcf) export.",
        children: /*#__PURE__*/jsxRuntimeExports.jsx("button", {
          onClick: () => {
            haptics.tap();
            onOpenContactsImport && onOpenContactsImport();
          },
          className: "al-press",
          style: miniBtnStyle,
          children: "Import"
        })
      })
    }), /*#__PURE__*/jsxRuntimeExports.jsxs(Section, {
      title: "YOUR DATA",
      children: [(() => {
        const status = backupStatus(lastExportAt);
        const dot = status === 'fresh' ? theme.colors.success : status === 'stale' ? theme.colors.amber : theme.colors.danger;
        const sub = status === 'never' ? 'Not yet saved off this phone' : `Saved ${backupAgoLabel(lastExportAt).toLowerCase()}`;
        return /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
          children: [/*#__PURE__*/jsxRuntimeExports.jsxs(Row, {
            label: "Off-device backup",
            sub: sub,
            children: [/*#__PURE__*/jsxRuntimeExports.jsx("span", {
              "aria-hidden": true,
              style: {
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: dot,
                marginRight: 10,
                boxShadow: `0 0 0 3px color-mix(in srgb, ${dot} 14%, transparent)`
              }
            }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
              onClick: handleExport,
              className: "al-press",
              style: miniBtnStyle,
              children: "Back up"
            })]
          }), status !== 'fresh' && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
            style: {
              margin: '-6px 0 0',
              padding: '0 16px 12px',
              fontFamily: theme.fonts.sans,
              fontSize: 13,
              lineHeight: 1.5,
              color: theme.colors.ink3
            },
            children: "Your circles live only on this device. Save a copy to iCloud Drive so a lost phone never means lost relationships."
          })]
        });
      })(), /*#__PURE__*/jsxRuntimeExports.jsxs(Row, {
        label: "Restore from backup",
        sub: "Load a previously exported file.",
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("button", {
          onClick: () => {
            haptics.tap();
            fileRef.current && fileRef.current.click();
          },
          className: "al-press",
          style: miniBtnStyle,
          children: "Restore"
        }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
          ref: fileRef,
          type: "file",
          accept: "application/json,.json",
          onChange: handleRestoreFile,
          style: {
            display: 'none'
          }
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        style: {
          padding: '12px 16px 14px',
          borderTop: `1px solid ${theme.colors.rule}`
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline'
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
            style: {
              fontFamily: theme.fonts.sans,
              fontSize: 14,
              color: theme.colors.ink,
              fontWeight: 500
            },
            children: "Automatic backups"
          }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
            style: {
              fontFamily: theme.fonts.mono,
              fontSize: 11,
              color: theme.colors.ink3
            },
            children: lastBackup ? `Saved ${agoText(lastBackup)}` : 'None yet'
          })]
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            fontFamily: theme.fonts.sans,
            fontSize: 13,
            color: theme.colors.ink3,
            margin: '3px 0 0',
            lineHeight: 1.5
          },
          children: "Circles quietly keeps recent restore points on this device, so a slip never costs you everything."
        }), backups.length > 0 && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          style: {
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            gap: 6
          },
          children: backups.map(b => /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '8px 10px',
              background: theme.colors.paperDeep,
              borderRadius: theme.radii.md
            },
            children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
              style: {
                flex: 1,
                minWidth: 0
              },
              children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
                style: {
                  fontFamily: theme.fonts.sans,
                  fontSize: 13,
                  color: theme.colors.ink
                },
                children: agoText(b.ts)
              }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
                className: "al-tnum",
                style: {
                  fontFamily: theme.fonts.mono,
                  fontSize: 11,
                  color: theme.colors.ink3
                },
                children: [b.people, " people \xB7 ", b.circles, " circles"]
              })]
            }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
              onClick: () => handleRestoreBackup(b.id),
              className: "al-press",
              style: miniBtnStyle,
              children: "Restore"
            })]
          }, b.id))
        })]
      }), /*#__PURE__*/jsxRuntimeExports.jsx(Row, {
        label: "Clear all data",
        sub: "Erase everything on this device.",
        children: /*#__PURE__*/jsxRuntimeExports.jsx("button", {
          onClick: handleClear,
          className: "al-press",
          style: {
            ...miniBtnStyle,
            color: theme.colors.danger
          },
          children: "Erase"
        })
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs(Section, {
      title: "ABOUT",
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(Row, {
        label: "Circles",
        sub: "Relationship Almanac \xB7 v1.0",
        children: /*#__PURE__*/jsxRuntimeExports.jsx("span", {
          style: {
            fontFamily: theme.fonts.mono,
            fontSize: 11,
            color: theme.colors.ink4
          },
          children: "\u2666"
        })
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          margin: '-4px 0 0',
          padding: '0 16px 14px',
          fontFamily: theme.fonts.sans,
          fontSize: 13,
          color: theme.colors.ink3,
          lineHeight: 1.5
        },
        children: "Everything stays on this device. Your circles, notes, and history are never sent anywhere unless you ask."
      })]
    }), securityFlow === 'set' && /*#__PURE__*/jsxRuntimeExports.jsx(LockScreen, {
      mode: "set",
      onSet: hash => {
        patch({
          security: {
            ...(s.security || {}),
            appLock: true,
            pinHash: hash
          }
        });
        haptics.success();
        setSecurityFlow(null);
      },
      onCancel: () => setSecurityFlow(null)
    }), securityFlow === 'disable' && /*#__PURE__*/jsxRuntimeExports.jsx(LockScreen, {
      mode: "unlock",
      settings: s,
      onUnlock: () => {
        patch({
          security: {
            ...(s.security || {}),
            appLock: false,
            pinHash: null
          }
        });
        haptics.success();
        setSecurityFlow(null);
      },
      onCancel: () => setSecurityFlow(null)
    })]
  });
}

// ---------- building blocks ----------

function agoText(ts) {
  if (!ts) return '';
  const diff = Date.now() - ts;
  const m = Math.floor(diff / 60000);
  if (m < 1) return 'just now';
  if (m < 60) return `${m} min ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h} hr${h === 1 ? '' : 's'} ago`;
  const d = Math.floor(h / 24);
  if (d < 30) return `${d} day${d === 1 ? '' : 's'} ago`;
  return new Date(ts).toLocaleDateString();
}
const labelStyle = {
  ...microLabel
};
const miniBtnStyle = {
  background: theme.colors.card,
  border: `1px solid ${theme.colors.rule}`,
  borderRadius: theme.radii.pill,
  padding: '8px 16px',
  minHeight: 36,
  lineHeight: '20px',
  fontFamily: theme.fonts.sans,
  fontSize: 13,
  fontWeight: 500,
  color: theme.colors.ink,
  cursor: 'pointer'
};
function Section({
  title,
  children
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      marginBottom: 26
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        ...labelStyle,
        marginBottom: 10
      },
      children: title
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        background: theme.colors.card,
        border: `1px solid ${theme.colors.rule}`,
        borderRadius: theme.radii.lg,
        boxShadow: theme.shadow.card,
        overflow: 'hidden'
      },
      children: reactExports.Children.toArray(children).map((child, i) => /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          borderTop: i > 0 ? `1px solid ${theme.colors.rule}` : 'none'
        },
        children: child
      }, i))
    })]
  });
}
function Row({
  label,
  sub,
  children
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 16px'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        flex: 1,
        minWidth: 0
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          fontFamily: theme.fonts.sans,
          fontSize: 15,
          fontWeight: 500,
          color: theme.colors.ink
        },
        children: label
      }), sub && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          fontFamily: theme.fonts.sans,
          fontSize: 12.5,
          color: theme.colors.ink3,
          marginTop: 2,
          lineHeight: 1.4,
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        },
        children: sub
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        flexShrink: 0
      },
      children: children
    })]
  });
}
function Toggle({
  on,
  onChange
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsx("button", {
    role: "switch",
    "aria-checked": on,
    onClick: () => onChange(!on),
    style: {
      width: 46,
      height: 28,
      borderRadius: 999,
      border: 'none',
      padding: 3,
      cursor: 'pointer',
      background: on ? theme.colors.accent : theme.colors.ink4,
      transition: 'background 200ms ease'
    },
    children: /*#__PURE__*/jsxRuntimeExports.jsx("span", {
      style: {
        display: 'block',
        transform: on ? 'translateX(18px)' : 'translateX(0)',
        width: 22,
        height: 22,
        borderRadius: '50%',
        background: '#fbf7ee',
        boxShadow: theme.shadow.sm,
        transition: 'transform 200ms cubic-bezier(.32,.72,.24,1)'
      }
    })
  });
}
function Segmented({
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsx("div", {
    style: {
      display: 'inline-flex',
      background: theme.colors.paperDeep,
      borderRadius: theme.radii.pill,
      padding: 3,
      gap: 2
    },
    children: options.map(opt => {
      const active = opt.value === value;
      return /*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: () => onChange(opt.value),
        style: {
          border: 'none',
          cursor: 'pointer',
          borderRadius: theme.radii.pill,
          padding: '7px 12px',
          fontFamily: theme.fonts.mono,
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          background: active ? theme.colors.ink : 'transparent',
          color: active ? theme.colors.paper : theme.colors.ink2,
          transition: 'background 160ms ease, color 160ms ease'
        },
        children: opt.label
      }, opt.value);
    })
  });
}
function StatusDot({
  ok
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsx("span", {
    style: {
      display: 'inline-block',
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: ok ? theme.colors.success : theme.colors.ink4
    }
  });
}
function truncateUrl(url) {
  if (!url) return '';
  return url.length > 38 ? url.slice(0, 22) + '…' + url.slice(-12) : url;
}
function formatSince(iso) {
  if (!iso) return 'Never';
  const ms = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(ms / 60000);
  if (mins < 1) return 'Just now';
  if (mins < 60) return `${mins} min ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

// Onboarding — the first-run flow. Four quick steps that get a new user to a
// populated, useful Today as fast as possible:
//
//   Welcome → Connect calendar → Import contacts → Enable notifications → done
//
// Time-to-value is the whole point: connecting a calendar means the very first
// screen already shows who you'll see, and the notification opt-in (captured
// here, early) is the single biggest retention lever. Every step is skippable.

const STEP_COUNT = 5;
function Onboarding({
  onConnectCalendar,
  onImportContacts,
  onSeedPeople,
  onComplete
}) {
  const [step, setStep] = reactExports.useState(0);
  const [url, setUrl] = reactExports.useState('');
  const [names, setNames] = reactExports.useState([]);
  const [perm, setPerm] = reactExports.useState(notificationPermission());
  const rootRef = reactExports.useRef(null);
  useFocusTrap(rootRef); // trap Tab within onboarding; no Esc (it's the gate)

  const next = () => {
    haptics.tap();
    setStep(s => Math.min(s + 1, STEP_COUNT - 1));
  };
  const back = () => {
    haptics.tap();
    setStep(s => Math.max(s - 1, 0));
  };
  const finish = () => {
    haptics.success();
    onComplete && onComplete();
  };
  // Seed any names the user typed, then advance.
  const leavePeople = () => {
    if (names.length && onSeedPeople) onSeedPeople(names);
    next();
  };
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    ref: rootRef,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Welcome to Circles \u2014 getting started",
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 350,
      background: theme.colors.paper,
      display: 'flex',
      flexDirection: 'column',
      padding: '28px 22px'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        minHeight: 28
      },
      children: [step > 0 ? /*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: back,
        "aria-label": "Back",
        className: "al-press",
        style: {
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          width: 44,
          height: 44,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '-8px 0 -8px -14px',
          padding: 0
        },
        children: /*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
          name: "chevronLeft",
          size: 20,
          color: theme.colors.ink2
        })
      }) : /*#__PURE__*/jsxRuntimeExports.jsx("span", {
        style: {
          width: 30
        }
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          display: 'flex',
          gap: 6,
          flex: 1
        },
        children: Array.from({
          length: STEP_COUNT
        }).map((_, i) => /*#__PURE__*/jsxRuntimeExports.jsx("span", {
          style: {
            height: 4,
            flex: 1,
            borderRadius: 2,
            background: i <= step ? theme.colors.accent : theme.colors.rule,
            transition: 'background 240ms ease'
          }
        }, i))
      }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: finish,
        className: "al-press",
        style: {
          background: 'transparent',
          border: 'none',
          color: theme.colors.ink3,
          fontFamily: theme.fonts.mono,
          fontSize: 11,
          letterSpacing: 0.6,
          textTransform: 'uppercase',
          cursor: 'pointer',
          padding: 4
        },
        children: "Skip"
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        animation: 'al-view-in 320ms cubic-bezier(.22,1,.36,1) both'
      },
      children: [step === 0 && /*#__PURE__*/jsxRuntimeExports.jsx(Welcome, {}), step === 1 && /*#__PURE__*/jsxRuntimeExports.jsx(PeopleStep, {
        names: names,
        setNames: setNames
      }), step === 2 && /*#__PURE__*/jsxRuntimeExports.jsx(CalendarStep, {
        url: url,
        setUrl: setUrl
      }), step === 3 && /*#__PURE__*/jsxRuntimeExports.jsx(ContactsStep, {}), step === 4 && /*#__PURE__*/jsxRuntimeExports.jsx(NotificationsStep, {
        perm: perm,
        setPerm: setPerm
      })]
    }, step), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      },
      children: [step === 0 && /*#__PURE__*/jsxRuntimeExports.jsx(PrimaryButton, {
        onClick: next,
        children: "Get started"
      }), step === 1 && /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(PrimaryButton, {
          onClick: leavePeople,
          children: names.length ? `Add ${names.length} ${names.length === 1 ? 'person' : 'people'}` : 'Continue'
        }), names.length === 0 && /*#__PURE__*/jsxRuntimeExports.jsx(GhostButton, {
          onClick: next,
          children: "I'll add them later"
        })]
      }), step === 2 && /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(PrimaryButton, {
          disabled: !url.trim(),
          onClick: () => {
            onConnectCalendar && onConnectCalendar(url.trim());
            next();
          },
          children: "Connect calendar"
        }), /*#__PURE__*/jsxRuntimeExports.jsx(GhostButton, {
          onClick: next,
          children: "Skip for now"
        })]
      }), step === 3 && /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(PrimaryButton, {
          onClick: () => {
            haptics.tap();
            onImportContacts && onImportContacts();
          },
          children: "Import contacts"
        }), /*#__PURE__*/jsxRuntimeExports.jsx(GhostButton, {
          onClick: next,
          children: "Skip for now"
        })]
      }), step === 4 && /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [notificationsSupported() && perm !== 'granted' ? /*#__PURE__*/jsxRuntimeExports.jsx(PrimaryButton, {
          disabled: perm === 'denied',
          onClick: async () => {
            haptics.tap();
            const p = await requestNotificationPermission();
            setPerm(p);
            if (p === 'granted') setTimeout(finish, 350);
          },
          children: perm === 'denied' ? 'Blocked in browser' : 'Turn on notifications'
        }) : /*#__PURE__*/jsxRuntimeExports.jsx(PrimaryButton, {
          onClick: finish,
          children: perm === 'granted' ? "You're all set" : 'Enter Circles'
        }), perm !== 'granted' && /*#__PURE__*/jsxRuntimeExports.jsx(GhostButton, {
          onClick: finish,
          children: "Maybe later"
        })]
      })]
    })]
  });
}

// ---------- step bodies ----------

function Welcome() {
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      textAlign: 'center'
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("img", {
      src: LOGO_MARK,
      alt: "Circles",
      width: 104,
      height: 104,
      style: {
        display: 'inline-block',
        objectFit: 'contain'
      }
    }), /*#__PURE__*/jsxRuntimeExports.jsx("h1", {
      style: {
        fontFamily: theme.fonts.serif,
        fontSize: 32,
        fontWeight: 500,
        color: theme.colors.ink,
        margin: '20px 0 0',
        letterSpacing: '-0.01em'
      },
      children: "Circles"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
      style: lead,
      children: "A quiet almanac for the people who matter \u2014 so you remember the small things, and never lose the thread."
    })]
  });
}
function PeopleStep({
  names,
  setNames
}) {
  const [val, setVal] = reactExports.useState('');
  const add = n => {
    const t = (n ?? val).trim();
    if (!t) return;
    if (!names.some(x => x.toLowerCase() === t.toLowerCase())) {
      setNames([...names, t]);
    }
    setVal('');
  };
  const remove = n => setNames(names.filter(x => x !== n));
  const SUGGESTIONS = ['Mom', 'Dad', 'Best friend', 'A mentor', 'Sibling'];
  const open = SUGGESTIONS.filter(s => !names.some(n => n.toLowerCase() === s.toLowerCase()));
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    children: [/*#__PURE__*/jsxRuntimeExports.jsx(StepTitle, {
      children: "Who do you want to keep close?"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
      style: lead,
      children: "Add a few people to start \u2014 a first name is enough. You can flesh them out anytime."
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        gap: 8,
        marginTop: 18
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("input", {
        value: val,
        onChange: e => setVal(e.target.value),
        onKeyDown: e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            add();
          }
        },
        placeholder: "Type a name\u2026",
        autoCapitalize: "words",
        style: {
          flex: 1,
          minWidth: 0,
          padding: '12px 14px',
          fontFamily: theme.fonts.sans,
          fontSize: 15,
          background: theme.colors.card,
          border: `1px solid ${theme.colors.rule}`,
          borderRadius: theme.radii.md,
          outline: 'none',
          color: theme.colors.ink,
          boxSizing: 'border-box'
        }
      }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: () => add(),
        className: "al-press",
        "aria-label": "Add person",
        style: {
          flexShrink: 0,
          padding: '0 18px',
          borderRadius: theme.radii.pill,
          border: `1px solid ${theme.colors.rule}`,
          background: theme.colors.card,
          color: theme.colors.ink,
          fontFamily: theme.fonts.sans,
          fontSize: 15,
          fontWeight: 600,
          cursor: 'pointer'
        },
        children: "Add"
      })]
    }), names.length < 3 && open.length > 0 && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        marginTop: 16
      },
      children: open.slice(0, 4).map(s => /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
        onClick: () => add(s),
        className: "al-press",
        style: {
          padding: '6px 12px',
          borderRadius: theme.radii.pill,
          border: `1px solid ${theme.colors.rule}`,
          background: theme.colors.accentSofter,
          color: theme.colors.ink3,
          fontFamily: theme.fonts.sans,
          fontSize: 13,
          cursor: 'pointer'
        },
        children: ["+ ", s]
      }, s))
    }), names.length > 0 && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        marginTop: 16
      },
      children: names.map(n => /*#__PURE__*/jsxRuntimeExports.jsxs("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 7,
          padding: '4px 8px 4px 4px',
          borderRadius: theme.radii.pill,
          background: theme.colors.card,
          border: `1px solid ${theme.colors.rule}`
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Avatar, {
          name: n,
          size: 22
        }), /*#__PURE__*/jsxRuntimeExports.jsx("span", {
          style: {
            fontFamily: theme.fonts.sans,
            fontSize: 14,
            color: theme.colors.ink
          },
          children: n
        }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
          onClick: () => remove(n),
          "aria-label": `Remove ${n}`,
          style: {
            background: 'transparent',
            border: 'none',
            color: theme.colors.ink3,
            fontSize: 16,
            lineHeight: 1,
            cursor: 'pointer',
            padding: 0,
            width: 32,
            height: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '-5px -8px -5px -2px',
            borderRadius: theme.radii.pill
          },
          children: "\xD7"
        })]
      }, n))
    })]
  });
}
function CalendarStep({
  url,
  setUrl
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    children: [/*#__PURE__*/jsxRuntimeExports.jsx(StepTitle, {
      children: "See who's coming up"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
      style: lead,
      children: "Paste a calendar link (.ics) and Today fills with who you'll see \u2014 prep notes already loaded."
    }), /*#__PURE__*/jsxRuntimeExports.jsx("input", {
      value: url,
      onChange: e => setUrl(e.target.value),
      placeholder: "https://calendar.google.com/\u2026/basic.ics",
      inputMode: "url",
      autoCapitalize: "off",
      autoCorrect: "off",
      style: {
        width: '100%',
        marginTop: 18,
        padding: '12px 14px',
        fontFamily: theme.fonts.sans,
        fontSize: 14,
        background: theme.colors.card,
        border: `1px solid ${theme.colors.rule}`,
        borderRadius: theme.radii.md,
        outline: 'none',
        color: theme.colors.ink,
        boxSizing: 'border-box'
      }
    }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
      style: {
        ...fine,
        marginTop: 10
      },
      children: "Read-only. It never leaves your device except to fetch the events."
    })]
  });
}
function ContactsStep() {
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    children: [/*#__PURE__*/jsxRuntimeExports.jsx(StepTitle, {
      children: "Bring in your people"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
      style: lead,
      children: "Import a vCard (.vcf) from your phone. We show every contact for your review before anything is saved."
    }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
      style: {
        ...fine,
        marginTop: 14
      },
      children: "You can always do this later from the Today screen."
    })]
  });
}
function NotificationsStep({
  perm
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    children: [/*#__PURE__*/jsxRuntimeExports.jsx(StepTitle, {
      children: "Never lose the thread"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
      style: lead,
      children: "A gentle morning brief, a heads-up before you see someone (with what to bring up), and birthday reminders. All on-device."
    }), perm === 'granted' && /*#__PURE__*/jsxRuntimeExports.jsxs("p", {
      style: {
        ...fine,
        marginTop: 16,
        color: theme.colors.success,
        fontStyle: 'normal'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
        name: "check",
        size: 12,
        color: theme.colors.success
      }), " Notifications are on."]
    }), perm === 'denied' && /*#__PURE__*/jsxRuntimeExports.jsx("p", {
      style: {
        ...fine,
        marginTop: 16
      },
      children: "Notifications are blocked in your browser \u2014 you can re-enable them in your browser settings anytime."
    })]
  });
}

// ---------- shared bits ----------

function StepTitle({
  children
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsx("h2", {
    style: {
      fontFamily: theme.fonts.serif,
      fontSize: 28,
      fontWeight: 600,
      color: theme.colors.ink,
      margin: 0,
      letterSpacing: '-0.01em',
      lineHeight: 1.15
    },
    children: children
  });
}
function PrimaryButton({
  children,
  onClick,
  disabled
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsx("button", {
    onClick: onClick,
    disabled: disabled,
    className: "al-press",
    style: {
      width: '100%',
      padding: '14px 18px',
      borderRadius: theme.radii.pill,
      border: 'none',
      background: theme.colors.accent,
      color: theme.colors.onAccent,
      fontFamily: theme.fonts.sans,
      fontSize: 15,
      fontWeight: 600,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      boxShadow: '0 2px 10px rgba(184,89,58,0.25)'
    },
    children: children
  });
}
function GhostButton({
  children,
  onClick
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsx("button", {
    onClick: onClick,
    className: "al-press",
    style: {
      width: '100%',
      padding: '12px 18px',
      borderRadius: theme.radii.pill,
      border: 'none',
      background: 'transparent',
      color: theme.colors.ink3,
      fontFamily: theme.fonts.sans,
      fontSize: 15,
      fontWeight: 500,
      cursor: 'pointer'
    },
    children: children
  });
}
const lead = {
  fontFamily: theme.fonts.serif,
  fontSize: 16,
  lineHeight: 1.5,
  color: theme.colors.ink2,
  margin: '12px 0 0'
};
const fine = {
  fontFamily: theme.fonts.sans,
  fontSize: 12.5,
  lineHeight: 1.5,
  color: theme.colors.ink3,
  margin: 0,
  fontStyle: 'italic'
};

// ErrorBoundary — keeps one bad record or render from taking down the whole
// app (we already hit one such crash with a migrated data shape). React only
// supports error boundaries as class components, so this stays a class.
//
// Two uses:
//   • Top-level (main.jsx) — ultimate safety net; full-screen reassuring
//     fallback with a reload.
//   • Per-view (App.jsx, keyed by view) — a crash in one screen shows a
//     compact fallback while the nav/shell survive; navigating away (which
//     changes the key) resets it.

class ErrorBoundary extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  componentDidCatch(error, info) {
    // No remote logging (privacy-first) — just the console for debugging.
    console.error('[Circles] render error:', error, info?.componentStack);
  }
  render() {
    if (!this.state.error) return this.props.children;
    if (this.props.compact) return /*#__PURE__*/jsxRuntimeExports.jsx(CompactFallback, {
      onRetry: () => this.setState({
        error: null
      })
    });
    return /*#__PURE__*/jsxRuntimeExports.jsx(FullFallback, {
      error: this.state.error
    });
  }
}
function FullFallback({
  error
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsx("div", {
    style: {
      position: 'fixed',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      background: 'radial-gradient(800px 600px at 30% 20%, rgba(184,89,58,0.10), transparent 60%), #1a1814',
      fontFamily: theme.fonts.sans
    },
    children: /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        maxWidth: 360,
        width: '100%',
        background: theme.colors.paper,
        borderRadius: theme.radii.lg,
        padding: '32px 28px',
        textAlign: 'center',
        boxShadow: '0 40px 80px rgba(0,0,0,0.45)'
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          fontFamily: theme.fonts.serif,
          fontSize: 24,
          fontWeight: 600,
          color: theme.colors.ink
        },
        children: "Something went sideways"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
        style: {
          fontFamily: theme.fonts.serif,
          fontStyle: 'italic',
          fontSize: 15,
          lineHeight: 1.5,
          color: theme.colors.ink2,
          margin: '12px 0 22px'
        },
        children: "Your circles, notes, and history are saved safely on this device \u2014 nothing was lost. A reload should set things right."
      }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: () => location.reload(),
        style: {
          width: '100%',
          padding: '12px 20px',
          minHeight: 44,
          borderRadius: theme.radii.pill,
          border: 'none',
          background: theme.colors.ink,
          color: theme.colors.paper,
          fontFamily: theme.fonts.serif,
          fontSize: 15,
          cursor: 'pointer'
        },
        children: "Reload Circles"
      }), error?.message && /*#__PURE__*/jsxRuntimeExports.jsxs("details", {
        style: {
          marginTop: 16,
          textAlign: 'left'
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("summary", {
          style: {
            fontFamily: theme.fonts.mono,
            fontSize: 10,
            letterSpacing: 0.6,
            textTransform: 'uppercase',
            color: theme.colors.ink3,
            cursor: 'pointer'
          },
          children: "Details"
        }), /*#__PURE__*/jsxRuntimeExports.jsx("pre", {
          style: {
            marginTop: 8,
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            fontFamily: theme.fonts.mono,
            fontSize: 11,
            color: theme.colors.ink3,
            background: theme.colors.paperDeep,
            padding: 10,
            borderRadius: 8
          },
          children: String(error.message)
        })]
      })]
    })
  });
}
function CompactFallback({
  onRetry
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    role: "alert",
    style: {
      margin: '40px 18px',
      padding: '24px 20px',
      background: theme.colors.card,
      border: `1px solid ${theme.colors.rule}`,
      borderRadius: theme.radii.lg,
      textAlign: 'center',
      fontFamily: theme.fonts.sans
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        fontFamily: theme.fonts.serif,
        fontSize: 18,
        fontWeight: 600,
        color: theme.colors.ink
      },
      children: "This screen hit a snag"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
      style: {
        fontFamily: theme.fonts.serif,
        fontStyle: 'italic',
        fontSize: 13,
        color: theme.colors.ink3,
        margin: '8px 0 16px',
        lineHeight: 1.5
      },
      children: "Your data is safe. Try again, or tap another tab below."
    }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
      onClick: onRetry,
      style: {
        padding: '9px 16px',
        minHeight: 38,
        borderRadius: theme.radii.pill,
        border: `1px solid ${theme.colors.rule}`,
        background: theme.colors.card,
        color: theme.colors.ink,
        fontFamily: theme.fonts.serif,
        fontSize: 14,
        cursor: 'pointer'
      },
      children: "Try again"
    })]
  });
}

function App() {
  const [circles, setCircles] = reactExports.useState([]);
  const [people, setPeople] = reactExports.useState([]);
  const [settings, setSettings] = reactExports.useState({
    calendar: null
  });
  // When the user last saved a backup OFF this device (file / iCloud Drive).
  // Drives the "back up your circles" reminder + the Settings status line.
  const [lastExport, setLastExport] = reactExports.useState(() => lastExportAt());
  // App-lock: true while the passcode / Face ID gate is covering the app.
  const [locked, setLocked] = reactExports.useState(false);
  // view: { kind, personId?, mode? } — mode is 'glance' | 'deep' for detail
  const [view, setView] = reactExports.useState({
    kind: 'briefing'
  });
  const [loaded, setLoaded] = reactExports.useState(false);
  // Ensures the splash logo is visible for at least 1.6s, even if localStorage
  // hydrates in <50ms. Set to true after the timer + load both finish.
  const [splashDone, setSplashDone] = reactExports.useState(false);
  // Stays mounted through the fade-out, then flips so the splash unmounts.
  const [splashGone, setSplashGone] = reactExports.useState(false);
  const hydrated = reactExports.useRef(false);
  // ⌘K command palette — global; opened by keyboard or the header Search chip.
  const [paletteOpen, setPaletteOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    function onKey(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen(v => !v);
        return;
      }
      // Plain-key shortcuts — never while typing in a field or chorded.
      const t = e.target;
      const typing = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable);
      if (typing || e.metaKey || e.ctrlKey || e.altKey || paletteOpen) return;
      if (e.key === '/') {
        e.preventDefault();
        setPaletteOpen(true);
      } else if (e.key === '1') setView({
        kind: 'briefing'
      });else if (e.key === '2') setView({
        kind: 'list'
      });else if (e.key === '3') setView({
        kind: 'circles'
      });else if (e.key === '4') setView({
        kind: 'map'
      });else if (e.key.toLowerCase() === 'n') setView({
        kind: 'new'
      });
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [paletteOpen]);
  reactExports.useEffect(() => {
    // The 1.6s cinematic splash is a FIRST-launch brand moment. Returning
    // opens (the other ~10,000) get in and out in well under a second —
    // enforced dead time on every open reads as slowness, not craft.
    let returning = false;
    try {
      returning = Boolean(window.localStorage.getItem('circles.launched'));
      window.localStorage.setItem('circles.launched', '1');
    } catch {}
    const t = setTimeout(() => setSplashDone(true), returning ? 500 : 1600);
    return () => clearTimeout(t);
  }, []);

  // Once both load + min-timer are satisfied, the splash plays its exit
  // animation and this removes it after the animation finishes.
  const splashExiting = loaded && splashDone && !splashGone;

  // Robustness: don't rely solely on the exit animation's onAnimationEnd to
  // clear the splash (it won't fire if the animation is interrupted or the
  // tab is backgrounded). Force it after the animation's duration + buffer.
  reactExports.useEffect(() => {
    if (!splashExiting) return;
    const t = setTimeout(() => setSplashGone(true), 650);
    return () => clearTimeout(t);
  }, [splashExiting]);

  // ---- calendar events (lifted here so Briefing AND Glance can use them) ----
  const [rawEvents, setRawEvents] = reactExports.useState([]);
  const [calLoading, setCalLoading] = reactExports.useState(false);
  const [calError, setCalError] = reactExports.useState(null);
  const [calFetchedAt, setCalFetchedAt] = reactExports.useState(null);

  // initial load
  reactExports.useEffect(() => {
    let cancelled = false;
    (async () => {
      const data = await loadData();
      if (cancelled) return;
      let people = data.people;
      let settings = data.settings || {
        calendar: null
      };
      // ?demo seeds a rich sample dataset on a fresh device (e.g. a phone you're
      // demoing on) — only when empty, so it never clobbers real data.
      const wantDemo = typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('demo');
      if (wantDemo && people.length === 0) {
        people = buildDemoPeople();
        settings = {
          ...settings,
          onboarding: {
            ...(settings.onboarding || {}),
            completed: true
          }
        };
      }
      // Legacy pendingCallRecaps rows were {personId, calledAt: ISO} — the
      // outreach lib expects {personId, ts: ms, channel}. Heal on load.
      if (Array.isArray(settings.pendingCallRecaps)) {
        settings = {
          ...settings,
          pendingCallRecaps: settings.pendingCallRecaps.map(r => r && r.ts == null && r.calledAt ? {
            personId: r.personId,
            ts: Date.parse(r.calledAt),
            channel: 'call'
          } : r).filter(r => r && Number.isFinite(r.ts))
        };
      }
      // First run on existing data: adopt the current unlock set as the
      // baseline SYNCHRONOUSLY, so upgrades never retro-flood the banner.
      // (An effect-based adopt raced the people state and baselined to [].)
      if (settings.seenInsights === undefined) {
        settings = {
          ...settings,
          seenInsights: computeInsights(people, data.circles).cards.filter(c => c.unlocked).map(c => c.id)
        };
      }
      setCircles(data.circles);
      setPeople(people);
      setSettings(settings);
      if (appLockEnabled(settings)) setLocked(true); // gate before first paint of content
      setLoaded(true);
      hydrated.current = true;
      setView({
        kind: 'briefing'
      });
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Re-lock whenever the app is backgrounded, so returning to it requires the
  // passcode / Face ID again — and the iOS app-switcher snapshot is blanked.
  reactExports.useEffect(() => {
    if (typeof document === 'undefined') return;
    function onVis() {
      if (document.visibilityState === 'hidden' && appLockEnabled(settings)) {
        setLocked(true);
      }
    }
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, [settings]);

  // persist
  reactExports.useEffect(() => {
    if (!hydrated.current) return;
    saveData({
      circles,
      people,
      settings
    }).catch(e => console.error('saveData failed', e));
  }, [circles, people, settings]);

  // fetch calendar whenever the url changes.
  //
  // Two transports, one contract:
  //   native : fetch the .ics directly (CapacitorHttp is CORS-free) and
  //            parse ON-DEVICE via lib/ics.js — no server needed at all.
  //   web    : proxy through the Express server (browser CORS forces it).
  // Phase 2 asks for 90 days of past events so reconcileEvents can
  // backfill the interactions ledger.
  const calendarUrl = settings?.calendar?.url;
  const refreshCalendar = reactExports.useCallback(async () => {
    if (!calendarUrl) {
      setRawEvents([]);
      return;
    }
    setCalLoading(true);
    setCalError(null);
    try {
      if (isNative()) {
        const httpUrl = calendarUrl.replace(/^webcals?:\/\//, 'https://');
        const text = await httpGetText(httpUrl);
        if (text != null) {
          setRawEvents(expandIcsEvents(text, {
            daysBack: 90,
            daysAhead: 14
          }));
          setCalFetchedAt(new Date().toISOString());
          return;
        }
        // plugin missing / fetch failed — fall through to the server path
      }
      const res = await fetch('/api/calendar/fetch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          url: calendarUrl,
          daysBack: 90,
          daysAhead: 14
        })
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || `Server error ${res.status}`);
      }
      const data = await res.json();
      setRawEvents(data.events || []);
      setCalFetchedAt(data.fetchedAt || new Date().toISOString());
    } catch (e) {
      // Never surface raw exception text ("Failed to fetch", "Server error
      // 500") — translate to plain words plus a next step.
      const raw = String(e?.message || '');
      const friendly = /fetch|network|load/i.test(raw) ? 'Couldn’t reach your calendar — check your connection and pull to retry.' : /4\d\d|invalid|url/i.test(raw) ? 'That calendar link didn’t work — double-check the .ics URL in Settings.' : 'Couldn’t load your calendar just now — pull to retry.';
      setCalError(friendly);
    } finally {
      setCalLoading(false);
    }
  }, [calendarUrl]);
  reactExports.useEffect(() => {
    refreshCalendar();
  }, [refreshCalendar]);

  // annotate with matchedPersonIds (re-runs when events or people change)
  const events = reactExports.useMemo(() => annotateEvents(rawEvents, people), [rawEvents, people]);

  // Insight unlocks — the re-engagement loop. Detect insights newly unlocked
  // since the user last looked so Today can celebrate them. On first encounter
  // we silently adopt the current set as the baseline, so existing users don't
  // get a retroactive flood.
  const insights = reactExports.useMemo(() => computeInsights(people, circles), [people, circles]);
  const unlockedInsightIds = reactExports.useMemo(() => insights.cards.filter(c => c.unlocked).map(c => c.id), [insights]);
  const newlyUnlockedInsights = reactExports.useMemo(() => {
    const seen = settings?.seenInsights;
    if (!Array.isArray(seen)) return [];
    return insights.cards.filter(c => c.unlocked && !seen.includes(c.id));
  }, [insights, settings]);
  function handleAckInsights() {
    setSettings(s => ({
      ...(s || {}),
      seenInsights: unlockedInsightIds
    }));
  }
  // On device, also fire a real local notification for each new unlock (the
  // OS-level ping; no-op on web, which already shows the in-app banner). The
  // ref guards against re-firing for an insight we've already announced.
  const notifiedInsights = reactExports.useRef(new Set());
  reactExports.useEffect(() => {
    const fresh = newlyUnlockedInsights.filter(c => !notifiedInsights.current.has(c.id));
    if (fresh.length === 0) return;
    fresh.forEach(c => notifiedInsights.current.add(c.id));
    fireLocalNotification({
      title: 'New insight unlocked',
      body: fresh.length === 1 ? fresh[0].title : `${fresh.length} new insights`
    });
  }, [newlyUnlockedInsights]);

  // Phase 2: reconcile annotated past events into person.interactions[]
  // whenever the events list changes. The check on addedCount is what keeps
  // this from becoming a render loop — reconcile is idempotent and returns
  // the same `people` ref when there's nothing new to write.
  reactExports.useEffect(() => {
    if (!hydrated.current) return;
    if (events.length === 0) return;
    const {
      people: nextPeople,
      addedCount
    } = reconcileEvents(people, events);
    if (addedCount > 0) {
      setPeople(nextPeople);
    }
    // We intentionally don't depend on `people` here: each setPeople above
    // would re-trigger this effect, but the next reconcile sees the new
    // rows already present and exits with addedCount === 0. Listing it
    // would still be safe — but listing only `events` keeps the dependency
    // graph easy to reason about.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [events]);
  const currentPerson = reactExports.useMemo(() => view.personId ? people.find(p => p.id === view.personId) || null : null, [view.personId, people]);

  // Keep the haptics module in sync with the user's preference.
  reactExports.useEffect(() => {
    setHapticsEnabled(settings?.haptics?.enabled !== false);
  }, [settings?.haptics?.enabled]);

  // Apply the appearance theme: 'system' (default) follows the OS, otherwise
  // force light/dark by setting [data-theme] on <html>. The CSS variables in
  // index.html do the rest.
  const themePref = settings?.appearance?.theme || 'system';
  reactExports.useEffect(() => {
    const root = document.documentElement;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const apply = () => {
      const dark = themePref === 'dark' || themePref === 'system' && mq.matches;
      root.dataset.theme = dark ? 'dark' : 'light';
      // Keep the iOS status-bar tint in step with the surface behind it.
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', dark ? '#17140f' : '#f6f1e7');
    };
    apply();
    if (themePref === 'system') {
      mq.addEventListener?.('change', apply);
      return () => mq.removeEventListener?.('change', apply);
    }
  }, [themePref]);

  // (Re)build the local notification schedule whenever the data or prefs
  // change. rescheduleAll() no-ops unless permission is granted.
  reactExports.useEffect(() => {
    if (!loaded) return;
    rescheduleAll({
      events,
      people,
      settings
    });
  }, [events, people, settings, loaded]);

  // A tapped notification (from the service worker) asks us to navigate.
  reactExports.useEffect(() => {
    if (typeof navigator === 'undefined' || !navigator.serviceWorker) return;
    const handler = e => {
      if (e.data?.type === 'navigate' && e.data.view) {
        setView({
          kind: e.data.view
        });
      }
    };
    navigator.serviceWorker.addEventListener('message', handler);
    return () => navigator.serviceWorker.removeEventListener('message', handler);
  }, []);

  // The soonest upcoming event matching the current person, used by Glance.
  const nextEventForCurrent = reactExports.useMemo(() => {
    if (!view.personId) return null;
    return events.filter(e => (e.matchedPersonIds || []).includes(view.personId)).sort((a, b) => a.start.localeCompare(b.start))[0] || null;
  }, [events, view.personId]);

  // ----- handlers -----

  function handleSelectPerson(id) {
    setView({
      kind: 'detail',
      personId: id,
      mode: 'glance'
    });
  }
  function handleChangePerson(updated) {
    setPeople(ps => ps.map(p => p.id === updated.id ? updated : p));
  }
  function handleDeletePerson(id) {
    setPeople(ps => ps.filter(p => p.id !== id));
    setView({
      kind: 'list'
    });
  }
  function handleSaveNewPerson(p) {
    // Email-dedup: if any existing person has the same email, merge the
    // new draft INTO that existing record instead of creating a duplicate.
    // This is the canonical fix for the "+ chip from a calendar attendee"
    // flow — the chip pre-fills the email, and on save we may find a
    // placeholder person already exists with that email (e.g. user added
    // them earlier with no name). Merging keeps the placeholder's id so
    // calendar matches, family back-links, and any historical activity
    // survive intact.
    const incomingEmail = (p.email || '').trim().toLowerCase();
    const existing = incomingEmail ? people.find(x => (x.email || '').trim().toLowerCase() === incomingEmail) : null;
    if (existing) {
      // Build the merged record. Keep existing's id + accumulated history
      // (notes, followUps, interactions, family links). Overlay name,
      // phone, photo, circleIds, etc. from the new draft.
      const merged = {
        ...existing,
        ...p,
        id: existing.id,
        // Preserve accumulated history from the existing record
        notes: existing.notes || [],
        followUps: existing.followUps || [],
        interactions: existing.interactions || [],
        // Family: prefer existing's link graph; the new draft is typically
        // a fresh-from-chip person with no family entries anyway.
        family: p.family && p.family.length > 0 ? p.family : existing.family || [],
        // Photo: take whichever is set
        photo: p.photo || existing.photo || null
      };
      setPeople(ps => {
        const withMerged = ps.map(x => x.id === existing.id ? merged : x);
        const {
          peopleNext
        } = materializeFamily(merged, withMerged.filter(x => x.id !== merged.id));
        return peopleNext;
      });
      setView({
        kind: 'detail',
        personId: existing.id,
        mode: 'glance'
      });
      return;
    }

    // No collision — normal new-person path
    setPeople(ps => {
      const withNew = [...ps, p];
      const {
        peopleNext
      } = materializeFamily(p, ps);
      return peopleNext.length >= withNew.length ? peopleNext : withNew;
    });
    setView({
      kind: 'detail',
      personId: p.id,
      mode: 'glance'
    });
  }
  function handleSaveEditedPerson(p) {
    // Email-dedup on edit: if the user changes their email to one that
    // belongs to a DIFFERENT existing person, block with an alert rather
    // than silently merging (edits are intentional — we want the user
    // to resolve the collision explicitly).
    const incomingEmail = (p.email || '').trim().toLowerCase();
    if (incomingEmail) {
      const collision = people.find(x => x.id !== p.id && (x.email || '').trim().toLowerCase() === incomingEmail);
      if (collision) {
        window.alert(`${collision.name || 'Another contact'} already has this email. ` + `Use a different email, or delete the other contact first.`);
        return;
      }
    }
    setPeople(ps => {
      const {
        peopleNext
      } = materializeFamily(p, ps.filter(x => x.id !== p.id) // remove old; materialize re-upserts
      );
      return peopleNext;
    });
    setView({
      kind: 'detail',
      personId: p.id,
      mode: 'glance'
    });
  }
  // ----- Phase 3 handlers -----

  // Save a post-event capture. Appends a capture-source interaction to
  // the matched person (so the timeline + lastTouch update immediately)
  // AND, if the user typed a note, a journal-style note too.
  function handleCaptureSave({
    event,
    personId,
    noteText
  }) {
    setPeople(ps => ps.map(p => {
      if (p.id !== personId) return p;
      const next = {
        ...p,
        interactions: [...(p.interactions || []), makeCaptureInteraction({
          event,
          noteText
        })]
      };
      const text = (noteText || '').trim();
      if (text) {
        next.notes = [{
          id: makeId('note'),
          date: event.end || event.start || new Date().toISOString(),
          text
        }, ...(p.notes || [])];
      }
      return next;
    }));
  }

  // Dismiss a capture card. Writes the key (eventId|personId) to settings
  // so it stops surfacing. Persists via the existing saveData useEffect.
  function handleCaptureSkip(candidateKey) {
    setSettings(s => ({
      ...(s || {}),
      captures: {
        ...(s && s.captures || {}),
        skippedEventIds: [...((s && s.captures || {}).skippedEventIds || []), candidateKey]
      }
    }));
  }

  // Undo a skip — pull the key back out of skippedEventIds so the capture
  // card resurfaces. Wired to the toast's "Undo" action.
  function handleCaptureSkipUndo(candidateKey) {
    setSettings(s => ({
      ...(s || {}),
      captures: {
        ...(s && s.captures || {}),
        skippedEventIds: ((s && s.captures || {}).skippedEventIds || []).filter(k => k !== candidateKey)
      }
    }));
  }

  // ✓ Still true — bumps the confirmedAt timestamp so decay resets.
  function handleConfirmDetail(personId, detailId) {
    const nowIso = new Date().toISOString();
    setPeople(ps => ps.map(p => {
      if (p.id !== personId) return p;
      return {
        ...p,
        details: (p.details || []).map(d => d && typeof d === 'object' && d.id === detailId ? {
          ...d,
          confirmedAt: nowIso
        } : d)
      };
    }));
  }

  // × No longer — removes the detail entirely.
  function handleRemoveDetail(personId, detailId) {
    setPeople(ps => ps.map(p => {
      if (p.id !== personId) return p;
      return {
        ...p,
        details: (p.details || []).filter(d => !(d && typeof d === 'object' && d.id === detailId))
      };
    }));
  }

  // The Loop Closer — when the user taps a call/text/email quick action
  // (Glance contact pills, Map node sheet), we record the outbound intent in
  // settings.pendingCallRecaps (legacy key; rows are {personId, ts, channel}).
  // Today then closes the loop at the right moment: calls immediately ("How
  // was the call?"), texts/emails the next day ("Did they get back to you?").
  //
  // Opt-in via settings.callReminders.enabled (default true). The browser
  // can't observe the actual call/text — we trust the tap as intent.
  function handleOutreach(personId, channel = 'call') {
    if (!personId) return;
    const enabled = settings?.callReminders?.enabled !== false;
    if (!enabled) return;
    setSettings(s => ({
      ...(s || {}),
      pendingCallRecaps: recordOutreach(s && s.pendingCallRecaps || [], {
        personId,
        channel
      })
    }));
  }
  // Back-compat alias — Glance's tel: pill calls this with just a personId.
  const handleCallInitiated = personId => handleOutreach(personId, 'call');
  const OUTREACH_SUMMARY = {
    call: 'Phone call',
    text: 'Texted',
    email: 'Emailed'
  };
  function handleCallRecapSave(personId, recapText, channel = 'call') {
    const trimmed = (recapText || '').trim();
    if (trimmed) {
      setPeople(ps => ps.map(p => {
        if (p.id !== personId) return p;
        const now = new Date().toISOString();
        return {
          ...p,
          notes: [{
            id: makeId('note'),
            date: now,
            text: trimmed
          }, ...(p.notes || [])],
          interactions: [...(p.interactions || []), {
            id: makeId('int'),
            source: 'manual',
            date: now,
            summary: OUTREACH_SUMMARY[channel] || 'Reached out',
            location: ''
          }]
        };
      }));
    }
    handleCallRecapDismiss(personId, channel);
  }

  // Mark a connection WITHOUT a note — the one-tap "yes, we connected" path.
  // Logs the touch (moves recency + Circle Score) and clears the pending row.
  function handleOutreachConnected(personId, channel = 'call') {
    setPeople(ps => ps.map(p => p.id !== personId ? p : {
      ...p,
      interactions: [...(p.interactions || []), {
        id: makeId('int'),
        source: 'manual',
        date: new Date().toISOString(),
        summary: OUTREACH_SUMMARY[channel] || 'Reached out',
        location: ''
      }]
    }));
    handleCallRecapDismiss(personId, channel);
  }

  // Resolve an open loop (storyline answered / promise kept).
  function handleResolveLoop(personId, loopId) {
    setPeople(ps => ps.map(p => p.id === personId ? resolveLoop(p, loopId) : p));
  }
  // Snooze a relationship-intelligence nudge (open thread / reconnect) for a
  // week. Stored as a future timestamp keyed by "kind:personId" in settings.
  function handleSnooze(kind, personId) {
    const until = Date.now() + 7 * 86_400_000;
    setSettings(s => ({
      ...(s || {}),
      snoozes: {
        ...(s && s.snoozes || {}),
        [`${kind}:${personId}`]: until
      }
    }));
  }

  // Save a copy of everything OFF this device. Native → share sheet (Save to
  // Files / iCloud Drive); web → file download. Records the timestamp so the
  // reminder + Settings status reflect it immediately. Returns { ok, method }.
  async function handleBackup() {
    const text = exportData();
    const filename = `circles-backup-${new Date().toISOString().slice(0, 10)}.json`;
    const res = await saveBackupFile({
      filename,
      text
    });
    if (res && res.ok) {
      markExported();
      setLastExport(lastExportAt());
    }
    return res;
  }
  function handleCallRecapDismiss(personId, channel = null) {
    setSettings(s => ({
      ...(s || {}),
      pendingCallRecaps: clearOutreach(s && s.pendingCallRecaps || [], personId, channel)
    }));
  }

  // ----- onboarding -----
  function handleOnboardingConnectCalendar(url) {
    if (!url) return;
    setSettings(s => ({
      ...(s || {}),
      calendar: {
        url,
        label: 'My calendar'
      }
    }));
  }
  function handleOnboardingComplete() {
    setSettings(s => ({
      ...(s || {}),
      onboarding: {
        ...(s && s.onboarding || {}),
        completed: true
      }
    }));
  }
  // Guided first-run seeding: turn a few typed names into real people so the
  // app is never empty after onboarding. Drop them into the first circle so
  // they immediately show up in Circles, the Map, and relationship health.
  function handleSeedPeople(names) {
    const list = (names || []).map(n => String(n).trim()).filter(Boolean);
    if (!list.length) return;
    const defaultCircleId = circles?.[0]?.id;
    const seeded = list.map(name => ({
      ...blankPerson(),
      name,
      circleIds: defaultCircleId ? [defaultCircleId] : []
    }));
    setPeople(prev => [...seeded, ...prev]);
  }
  function handleOnboardingImportContacts() {
    handleOnboardingComplete();
    setView({
      kind: 'contacts'
    });
  }
  function handleChangeCircles(nextCircles) {
    const removedIds = circles.filter(c => !nextCircles.find(n => n.id === c.id)).map(c => c.id);
    if (removedIds.length > 0) {
      setPeople(ps => ps.map(p => ({
        ...p,
        circleIds: (p.circleIds || []).filter(id => !removedIds.includes(id))
      })));
    }
    setCircles(nextCircles);
  }
  function handleSaveCapture({
    kind,
    person
  }) {
    if (kind === 'create') setPeople(ps => [...ps, person]);else setPeople(ps => ps.map(p => p.id === person.id ? person : p));
    setView({
      kind: 'detail',
      personId: person.id,
      mode: 'glance'
    });
  }

  // Drag-to-reorder a top-level circle: move `sourceId` to where `targetId`
  // currently sits, inside the global circles array (display uses natural
  // array order on the browse grid).
  function handleReorderCircles(sourceId, targetId) {
    setCircles(prev => {
      const sourceIdx = prev.findIndex(c => c.id === sourceId);
      const targetIdx = prev.findIndex(c => c.id === targetId);
      if (sourceIdx < 0 || targetIdx < 0 || sourceIdx === targetIdx) return prev;
      const next = [...prev];
      const [moved] = next.splice(sourceIdx, 1);
      const insertAt = sourceIdx < targetIdx ? targetIdx - 1 : targetIdx;
      next.splice(insertAt + (sourceIdx < targetIdx ? 1 : 0), 0, moved);
      return next;
    });
  }

  // ---- view transition direction ----
  // Each view has a "depth": tab roots are 0, a record detail is 1, an
  // editor is 2. Going deeper slides in from the right; coming back slides
  // from the left; switching between same-depth tabs cross-fades. This is
  // the cheap, robust stand-in for shared-element transitions.
  const viewKey = `${view.kind}:${view.personId || view.circleId || ''}`;
  const curDepth = viewDepth(view.kind);
  const prevDepthRef = reactExports.useRef(curDepth);
  const dir = curDepth > prevDepthRef.current ? 'fwd' : curDepth < prevDepthRef.current ? 'back' : 'same';
  reactExports.useEffect(() => {
    prevDepthRef.current = curDepth;
  }, [viewKey, curDepth]);
  const viewAnim = dir === 'fwd' ? 'al-view-in 320ms cubic-bezier(.22,1,.36,1) both' : dir === 'back' ? 'al-view-in-back 320ms cubic-bezier(.22,1,.36,1) both' : 'al-fade 260ms ease both';

  // ---- pull-to-refresh (Today only) ----
  // Drag down from the top of the briefing scroll to re-sync the calendar.
  // Touch-only; degrades to nothing with a mouse. We dampen the drag for a
  // rubber-band feel and trip the refresh past ~56px.
  const scrollRef = reactExports.useRef(null);
  const pullStartY = reactExports.useRef(null);
  const [pull, setPull] = reactExports.useState(0);
  const [refreshing, setRefreshing] = reactExports.useState(false);
  const canPull = view.kind === 'briefing' && !!calendarUrl && !refreshing;
  const onTouchStart = e => {
    if (!canPull) {
      pullStartY.current = null;
      return;
    }
    const el = scrollRef.current;
    pullStartY.current = el && el.scrollTop <= 0 ? e.touches[0].clientY : null;
  };
  const onTouchMove = e => {
    if (pullStartY.current == null) return;
    const dy = e.touches[0].clientY - pullStartY.current;
    setPull(dy > 0 ? Math.min(dy * 0.45, 84) : 0);
  };
  const onTouchEnd = () => {
    if (pullStartY.current == null) return;
    const triggered = pull > 56;
    pullStartY.current = null;
    if (triggered) {
      setRefreshing(true);
      setPull(46);
      Promise.resolve(refreshCalendar()).finally(() => {
        setRefreshing(false);
        setPull(0);
      });
    } else {
      setPull(0);
    }
  };
  return /*#__PURE__*/jsxRuntimeExports.jsx("div", {
    className: "al-stage",
    children: /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      className: "al-phone",
      children: /*#__PURE__*/jsxRuntimeExports.jsxs(ToastProvider, {
        children: [loaded && locked && appLockEnabled(settings) && /*#__PURE__*/jsxRuntimeExports.jsx(LockScreen, {
          mode: "unlock",
          settings: settings,
          onUnlock: () => setLocked(false)
        }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          style: {
            position: 'absolute',
            inset: 0,
            isolation: 'isolate',
            zIndex: 0,
            background: theme.colors.paper,
            color: theme.colors.ink,
            fontFamily: theme.fonts.sans,
            overflow: 'hidden'
          },
          children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
            className: "al-aurora",
            "aria-hidden": "true"
          }), loaded && /*#__PURE__*/jsxRuntimeExports.jsxs("main", {
            className: "al-scroll",
            ref: scrollRef,
            onTouchStart: onTouchStart,
            onTouchMove: onTouchMove,
            onTouchEnd: onTouchEnd,
            style: {
              position: 'absolute',
              inset: 0,
              overflowY: 'auto',
              overflowX: 'hidden',
              paddingBottom: 110
            },
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(PullIndicator, {
              pull: pull,
              refreshing: refreshing
            }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
              style: {
                animation: viewAnim,
                willChange: 'transform, opacity',
                transform: pull ? `translateY(${pull}px)` : undefined,
                transition: pull ? 'none' : 'transform 260ms cubic-bezier(.22,1,.36,1)'
              },
              children: /*#__PURE__*/jsxRuntimeExports.jsxs(ErrorBoundary, {
                compact: true,
                children: [view.kind === 'briefing' && /*#__PURE__*/jsxRuntimeExports.jsx(Briefing, {
                  settings: settings,
                  onUpdateSettings: setSettings,
                  people: people,
                  circles: circles,
                  events: events,
                  loading: calLoading,
                  error: calError,
                  fetchedAt: calFetchedAt,
                  onRefresh: refreshCalendar,
                  onOpenPerson: handleSelectPerson,
                  onAddPerson: seed => setView({
                    kind: 'new',
                    seed
                  }),
                  onOpenContactsImport: () => setView({
                    kind: 'contacts'
                  }),
                  onCaptureSave: handleCaptureSave,
                  onCaptureSkip: handleCaptureSkip,
                  onCaptureSkipUndo: handleCaptureSkipUndo,
                  onConfirmDetail: handleConfirmDetail,
                  onRemoveDetail: handleRemoveDetail,
                  onCallRecapSave: handleCallRecapSave,
                  onCallRecapDismiss: handleCallRecapDismiss,
                  onOutreachConnected: handleOutreachConnected,
                  onResolveLoop: handleResolveLoop,
                  onOpenSettings: () => setView({
                    kind: 'settings'
                  }),
                  onSnooze: handleSnooze,
                  onOpenPulse: () => setView({
                    kind: 'pulse'
                  }),
                  newlyUnlockedInsights: newlyUnlockedInsights,
                  onAckInsights: handleAckInsights,
                  onOpenSearch: () => setPaletteOpen(true),
                  lastExportAt: lastExport,
                  onBackup: handleBackup,
                  onRetryCalendar: refreshCalendar
                }), view.kind === 'capture' && /*#__PURE__*/jsxRuntimeExports.jsx(QuickCapture, {
                  people: people,
                  circles: circles,
                  onSave: handleSaveCapture,
                  autoListen: Boolean(view.autoListen),
                  aiEnabled: settings?.ai?.enabled !== false
                }), view.kind === 'list' && /*#__PURE__*/jsxRuntimeExports.jsx(PeopleList, {
                  people: people,
                  circles: circles,
                  events: events,
                  onSelect: handleSelectPerson,
                  onAdd: () => setView({
                    kind: 'new'
                  }),
                  onCapture: () => setView({
                    kind: 'capture'
                  })
                }), view.kind === 'detail' && currentPerson && /*#__PURE__*/jsxRuntimeExports.jsx(Glance, {
                  person: currentPerson,
                  circles: circles,
                  people: people,
                  events: events,
                  nextEvent: nextEventForCurrent,
                  mode: view.mode || 'glance',
                  onBack: () => setView({
                    kind: 'list'
                  }),
                  onSwitchMode: mode => setView(v => ({
                    ...v,
                    mode
                  })),
                  onChange: handleChangePerson,
                  onOpenPerson: handleSelectPerson,
                  onCallInitiated: handleCallInitiated,
                  onOutreach: handleOutreach,
                  onResolveLoop: handleResolveLoop,
                  onEdit: () => setView({
                    kind: 'edit',
                    personId: currentPerson.id
                  }),
                  onDelete: () => handleDeletePerson(currentPerson.id)
                }), view.kind === 'detail' && !currentPerson && /*#__PURE__*/jsxRuntimeExports.jsx(MissingPerson, {
                  onBack: () => setView({
                    kind: 'list'
                  })
                }), view.kind === 'new' && /*#__PURE__*/jsxRuntimeExports.jsx(PersonForm, {
                  isNew: true,
                  person: (() => {
                    // When opened from an attendee chip we get a seed
                    // {name, email}; otherwise start from blankPerson().
                    const base = blankPerson();
                    if (view.seed) {
                      const raw = view.seed;
                      // Calendars with no CN parameter can leak the email
                      // into the display name (e.g. B222m@yahoo.com). If
                      // the seed's "name" itself looks like an email,
                      // park it in the email field and leave the name
                      // blank for the user to fill in.
                      const looksLikeEmail = s => typeof s === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim());
                      const nameIsEmail = looksLikeEmail(raw.name);
                      return {
                        ...base,
                        name: nameIsEmail ? '' : raw.name || base.name,
                        email: raw.email || (nameIsEmail ? raw.name.trim().toLowerCase() : base.email || '')
                      };
                    }
                    return base;
                  })(),
                  circles: circles,
                  people: people,
                  onSave: handleSaveNewPerson,
                  onCancel: () => setView({
                    kind: 'list'
                  })
                }), view.kind === 'edit' && currentPerson && /*#__PURE__*/jsxRuntimeExports.jsx(PersonForm, {
                  isNew: false,
                  person: currentPerson,
                  circles: circles,
                  people: people,
                  onSave: handleSaveEditedPerson,
                  onCancel: () => setView({
                    kind: 'detail',
                    personId: currentPerson.id,
                    mode: 'glance'
                  })
                }), view.kind === 'circles' && /*#__PURE__*/jsxRuntimeExports.jsx(CirclesBrowse, {
                  circles: circles,
                  people: people,
                  onOpenEdit: () => setView({
                    kind: 'circles_edit'
                  }),
                  onAdd: () => setView({
                    kind: 'circles_edit'
                  }),
                  onOpenCircle: id => setView({
                    kind: 'circle_detail',
                    circleId: id
                  }),
                  onReorder: handleReorderCircles
                }), view.kind === 'circle_detail' && /*#__PURE__*/jsxRuntimeExports.jsx(CircleDetail, {
                  circleId: view.circleId,
                  circles: circles,
                  people: people,
                  onBack: () => setView({
                    kind: 'circles'
                  }),
                  onOpenCircle: id => setView({
                    kind: 'circle_detail',
                    circleId: id
                  }),
                  onOpenPerson: handleSelectPerson,
                  onOpenEdit: () => setView({
                    kind: 'circles_edit'
                  })
                }), view.kind === 'circles_edit' && /*#__PURE__*/jsxRuntimeExports.jsx(CirclesManager, {
                  circles: circles,
                  people: people,
                  onChange: handleChangeCircles,
                  onBack: () => setView({
                    kind: 'circles'
                  })
                }), view.kind === 'map' && /*#__PURE__*/jsxRuntimeExports.jsx(MapScreen, {
                  people: people,
                  circles: circles,
                  settings: settings,
                  onOpenPerson: handleSelectPerson,
                  onOutreach: handleOutreach,
                  onAddPerson: () => setView({
                    kind: 'new'
                  })
                }), view.kind === 'contacts' && /*#__PURE__*/jsxRuntimeExports.jsx(ContactsImport, {
                  circles: circles,
                  people: people,
                  onSave: batch => {
                    setPeople(ps => [...ps, ...batch]);
                    setSettings(s => ({
                      ...(s || {}),
                      contacts: {
                        ...(s?.contacts || {}),
                        imported: true
                      }
                    }));
                    setView({
                      kind: 'list'
                    });
                  },
                  onSkip: () => {
                    setSettings(s => ({
                      ...(s || {}),
                      contacts: {
                        ...(s?.contacts || {}),
                        imported: true
                      }
                    }));
                    setView({
                      kind: 'briefing'
                    });
                  },
                  onCancel: () => setView({
                    kind: 'briefing'
                  })
                }), view.kind === 'settings' && /*#__PURE__*/jsxRuntimeExports.jsx(Settings, {
                  settings: settings,
                  onUpdateSettings: setSettings,
                  onBack: () => setView({
                    kind: 'briefing'
                  }),
                  onRefresh: refreshCalendar,
                  calLoading: calLoading,
                  calFetchedAt: calFetchedAt,
                  onOpenContactsImport: () => setView({
                    kind: 'contacts'
                  }),
                  onOpenPulse: () => setView({
                    kind: 'pulse'
                  }),
                  lastExportAt: lastExport,
                  onBackup: handleBackup
                }), view.kind === 'pulse' && /*#__PURE__*/jsxRuntimeExports.jsx(Pulse, {
                  people: people,
                  circles: circles,
                  onBack: () => setView({
                    kind: 'briefing'
                  }),
                  onOpenPerson: handleSelectPerson
                }), view.kind === 'search' && /*#__PURE__*/jsxRuntimeExports.jsx(PeopleList, {
                  people: people,
                  circles: circles,
                  events: events,
                  onSelect: handleSelectPerson,
                  onAdd: () => setView({
                    kind: 'new'
                  }),
                  onCapture: () => setView({
                    kind: 'capture'
                  })
                })]
              })
            }, viewKey)]
          }), !splashGone && /*#__PURE__*/jsxRuntimeExports.jsx(SplashState, {
            exiting: splashExiting,
            onExited: () => setSplashGone(true)
          }), loaded && splashGone && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
            "aria-hidden": "true",
            style: {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 'calc(env(safe-area-inset-top, 0px) + 52px)',
              zIndex: 20,
              pointerEvents: 'none',
              WebkitBackdropFilter: 'blur(12px)',
              backdropFilter: 'blur(12px)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
              background: 'linear-gradient(to bottom, var(--paper-veil), transparent 75%)'
            }
          })]
        }), loaded && splashDone && /*#__PURE__*/jsxRuntimeExports.jsx(Nav, {
          view: view,
          onChange: setView
        }), /*#__PURE__*/jsxRuntimeExports.jsx(CommandPalette, {
          open: paletteOpen,
          people: people,
          onClose: () => setPaletteOpen(false),
          onOpenPerson: handleSelectPerson,
          onNavigate: key => setView(key === 'capture' ? {
            kind: 'capture',
            autoListen: false
          } : {
            kind: key
          })
        }), loaded && splashGone && !settings?.onboarding?.completed && /*#__PURE__*/jsxRuntimeExports.jsx(Onboarding, {
          onConnectCalendar: handleOnboardingConnectCalendar,
          onImportContacts: handleOnboardingImportContacts,
          onSeedPeople: handleSeedPeople,
          onComplete: handleOnboardingComplete
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          className: "al-grain",
          "aria-hidden": "true"
        })]
      })
    })
  });
}

// Pull-to-refresh spinner — fades/rotates in as you drag, spins while syncing.
function PullIndicator({
  pull,
  refreshing
}) {
  if (!pull && !refreshing) return null;
  const progress = Math.min(pull / 56, 1);
  return /*#__PURE__*/jsxRuntimeExports.jsx("div", {
    style: {
      position: 'absolute',
      top: 6,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      pointerEvents: 'none',
      zIndex: 5,
      transform: `translateY(${Math.max(0, pull - 40)}px)`,
      opacity: refreshing ? 1 : progress,
      transition: pull ? 'none' : 'opacity 200ms ease, transform 200ms ease'
    },
    children: /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        width: 32,
        height: 32,
        borderRadius: '50%',
        background: theme.colors.card,
        boxShadow: theme.shadow.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      children: /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        style: {
          width: 16,
          height: 16,
          borderRadius: '50%',
          border: `2px solid ${theme.colors.rule}`,
          borderTopColor: theme.colors.accent,
          transform: refreshing ? undefined : `rotate(${progress * 300}deg)`,
          animation: refreshing ? 'al-spin 0.7s linear infinite' : undefined
        }
      })
    })
  });
}

// Navigation depth per view kind — drives the slide direction of the
// view transition (deeper = slide in from the right, shallower = from left).
function viewDepth(kind) {
  switch (kind) {
    case 'detail':
    case 'circle_detail':
    case 'contacts':
      return 1;
    case 'edit':
    case 'new':
    case 'circles_edit':
      return 2;
    case 'settings':
    case 'pulse':
      return 1;
    default:
      return 0;
  }
}
function SplashState({
  exiting = false,
  onExited
}) {
  const MARK = 168;
  // Three concentric ripples that wash outward from behind the mark.
  const ripples = [0, 1, 2];
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    onAnimationEnd: e => {
      // Only the splash container's own exit animation should fire onExited
      if (exiting && e.target === e.currentTarget && onExited) onExited();
    },
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 400,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: theme.colors.paper,
      gap: 22,
      animation: exiting ? 'al-splash-out 460ms cubic-bezier(.4,0,.2,1) forwards' : undefined
    },
    children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        position: 'relative',
        width: MARK,
        height: MARK,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      children: [ripples.map(i => /*#__PURE__*/jsxRuntimeExports.jsx("span", {
        style: {
          position: 'absolute',
          width: MARK,
          height: MARK,
          borderRadius: '50%',
          border: `2px solid ${theme.colors.accent}`,
          opacity: 0,
          animation: `al-ripple 2.4s cubic-bezier(.22,1,.36,1) ${i * 0.6}s infinite`
        }
      }, i)), /*#__PURE__*/jsxRuntimeExports.jsx("img", {
        src: LOGO_MARK,
        alt: "Circles",
        width: MARK,
        height: MARK,
        style: {
          position: 'relative',
          display: 'block',
          objectFit: 'contain',
          animation: 'al-splash-pop 720ms cubic-bezier(.22,1,.36,1) both'
        }
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        className: "al-rise",
        style: {
          '--i': 7,
          fontFamily: theme.fonts.serif,
          fontSize: 40,
          fontWeight: 600,
          color: theme.colors.ink,
          letterSpacing: '-0.02em',
          lineHeight: 1
        },
        children: "Circles"
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        className: "al-rise",
        style: {
          '--i': 9,
          fontFamily: theme.fonts.mono,
          fontSize: 11,
          fontWeight: 500,
          color: theme.colors.ink3,
          letterSpacing: '0.22em',
          textTransform: 'uppercase'
        },
        children: "Relationship Almanac"
      })]
    })]
  });
}
function MissingPerson({
  onBack
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    style: {
      textAlign: 'center',
      padding: 32,
      color: theme.colors.ink3,
      fontFamily: theme.fonts.serif,
      fontStyle: 'italic'
    },
    children: ["That person no longer exists.", /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      style: {
        marginTop: 12
      },
      children: /*#__PURE__*/jsxRuntimeExports.jsxs("button", {
        onClick: onBack,
        style: {
          background: 'transparent',
          border: 'none',
          color: theme.colors.accent,
          cursor: 'pointer',
          fontSize: 14,
          fontFamily: theme.fonts.sans,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          padding: '12px 16px',
          minHeight: 44,
          fontWeight: 500
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Ico, {
          name: "chevronLeft",
          size: 16
        }), "Back to People"]
      })
    })]
  });
}

clientExports.createRoot(document.getElementById('root')).render(/*#__PURE__*/jsxRuntimeExports.jsx(React.StrictMode, {
  children: /*#__PURE__*/jsxRuntimeExports.jsx(ErrorBoundary, {
    children: /*#__PURE__*/jsxRuntimeExports.jsx(App, {})
  })
}));

// Register the service worker for installability + offline. Notifs reuse the
// same registration (see lib/notifications.js). Registering at module-eval is
// fine (modules run after DOM parse) — gating on `load` can miss the event if
// it already fired, leaving the app non-installable.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(() => {
    /* SW is an enhancement — ignore registration failures */
  });
}
