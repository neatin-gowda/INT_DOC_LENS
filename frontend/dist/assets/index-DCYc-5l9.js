function sp(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in e)){const o=Object.getOwnPropertyDescriptor(n,a);o&&Object.defineProperty(e,a,o.get?o:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();function ip(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Cc={exports:{}},Qa={},Nc={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var In=Symbol.for("react.element"),lp=Symbol.for("react.portal"),cp=Symbol.for("react.fragment"),up=Symbol.for("react.strict_mode"),dp=Symbol.for("react.profiler"),pp=Symbol.for("react.provider"),fp=Symbol.for("react.context"),mp=Symbol.for("react.forward_ref"),hp=Symbol.for("react.suspense"),gp=Symbol.for("react.memo"),xp=Symbol.for("react.lazy"),Gi=Symbol.iterator;function vp(e){return e===null||typeof e!="object"?null:(e=Gi&&e[Gi]||e["@@iterator"],typeof e=="function"?e:null)}var Pc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zc=Object.assign,Tc={};function qr(e,t,r){this.props=e,this.context=t,this.refs=Tc,this.updater=r||Pc}qr.prototype.isReactComponent={};qr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Dc(){}Dc.prototype=qr.prototype;function Ws(e,t,r){this.props=e,this.context=t,this.refs=Tc,this.updater=r||Pc}var Vs=Ws.prototype=new Dc;Vs.constructor=Ws;zc(Vs,qr.prototype);Vs.isPureReactComponent=!0;var Ji=Array.isArray,$c=Object.prototype.hasOwnProperty,qs={current:null},Rc={key:!0,ref:!0,__self:!0,__source:!0};function Lc(e,t,r){var n,a={},o=null,i=null;if(t!=null)for(n in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)$c.call(t,n)&&!Rc.hasOwnProperty(n)&&(a[n]=t[n]);var l=arguments.length-2;if(l===1)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)a[n]===void 0&&(a[n]=l[n]);return{$$typeof:In,type:e,key:o,ref:i,props:a,_owner:qs.current}}function yp(e,t){return{$$typeof:In,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Hs(e){return typeof e=="object"&&e!==null&&e.$$typeof===In}function wp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Yi=/\/+/g;function mo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wp(""+e.key):t.toString(36)}function la(e,t,r,n,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case In:case lp:i=!0}}if(i)return i=e,a=a(i),e=n===""?"."+mo(i,0):n,Ji(a)?(r="",e!=null&&(r=e.replace(Yi,"$&/")+"/"),la(a,t,r,"",function(u){return u})):a!=null&&(Hs(a)&&(a=yp(a,r+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(Yi,"$&/")+"/")+e)),t.push(a)),1;if(i=0,n=n===""?".":n+":",Ji(e))for(var l=0;l<e.length;l++){o=e[l];var c=n+mo(o,l);i+=la(o,t,r,c,a)}else if(c=vp(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=n+mo(o,l++),i+=la(o,t,r,c,a);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Wn(e,t,r){if(e==null)return e;var n=[],a=0;return la(e,n,"","",function(o){return t.call(r,o,a++)}),n}function bp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},ca={transition:null},kp={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:ca,ReactCurrentOwner:qs};function Ac(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:Wn,forEach:function(e,t,r){Wn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Wn(e,function(){t++}),t},toArray:function(e){return Wn(e,function(t){return t})||[]},only:function(e){if(!Hs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=qr;M.Fragment=cp;M.Profiler=dp;M.PureComponent=Ws;M.StrictMode=up;M.Suspense=hp;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kp;M.act=Ac;M.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=zc({},e.props),a=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=qs.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)$c.call(t,c)&&!Rc.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:In,type:e.type,key:a,ref:o,props:n,_owner:i}};M.createContext=function(e){return e={$$typeof:fp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:pp,_context:e},e.Consumer=e};M.createElement=Lc;M.createFactory=function(e){var t=Lc.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:mp,render:e}};M.isValidElement=Hs;M.lazy=function(e){return{$$typeof:xp,_payload:{_status:-1,_result:e},_init:bp}};M.memo=function(e,t){return{$$typeof:gp,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=ca.transition;ca.transition={};try{e()}finally{ca.transition=t}};M.unstable_act=Ac;M.useCallback=function(e,t){return Ce.current.useCallback(e,t)};M.useContext=function(e){return Ce.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};M.useEffect=function(e,t){return Ce.current.useEffect(e,t)};M.useId=function(){return Ce.current.useId()};M.useImperativeHandle=function(e,t,r){return Ce.current.useImperativeHandle(e,t,r)};M.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return Ce.current.useMemo(e,t)};M.useReducer=function(e,t,r){return Ce.current.useReducer(e,t,r)};M.useRef=function(e){return Ce.current.useRef(e)};M.useState=function(e){return Ce.current.useState(e)};M.useSyncExternalStore=function(e,t,r){return Ce.current.useSyncExternalStore(e,t,r)};M.useTransition=function(){return Ce.current.useTransition()};M.version="18.3.1";Nc.exports=M;var w=Nc.exports;const Ka=ip(w),jp=sp({__proto__:null,default:Ka},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp=w,_p=Symbol.for("react.element"),Ep=Symbol.for("react.fragment"),Cp=Object.prototype.hasOwnProperty,Np=Sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pp={key:!0,ref:!0,__self:!0,__source:!0};function Ic(e,t,r){var n,a={},o=null,i=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(n in t)Cp.call(t,n)&&!Pp.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:_p,type:e,key:o,ref:i,props:a,_owner:Np.current}}Qa.Fragment=Ep;Qa.jsx=Ic;Qa.jsxs=Ic;Cc.exports=Qa;var s=Cc.exports,Vo={},Mc={exports:{}},Oe={},Oc={exports:{}},Fc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,R){var T=N.length;N.push(R);e:for(;0<T;){var O=T-1>>>1,Z=N[O];if(0<a(Z,R))N[O]=R,N[T]=Z,T=O;else break e}}function r(N){return N.length===0?null:N[0]}function n(N){if(N.length===0)return null;var R=N[0],T=N.pop();if(T!==R){N[0]=T;e:for(var O=0,Z=N.length,G=Z>>>1;O<G;){var Re=2*(O+1)-1,L=N[Re],I=Re+1,W=N[I];if(0>a(L,T))I<Z&&0>a(W,L)?(N[O]=W,N[I]=T,O=I):(N[O]=L,N[Re]=T,O=Re);else if(I<Z&&0>a(W,T))N[O]=W,N[I]=T,O=I;else break e}}return R}function a(N,R){var T=N.sortIndex-R.sortIndex;return T!==0?T:N.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var c=[],u=[],m=1,f=null,g=3,y=!1,v=!1,x=!1,j=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(N){for(var R=r(u);R!==null;){if(R.callback===null)n(u);else if(R.startTime<=N)n(u),R.sortIndex=R.expirationTime,t(c,R);else break;R=r(u)}}function b(N){if(x=!1,h(N),!v)if(r(c)!==null)v=!0,ot(S);else{var R=r(u);R!==null&&ge(b,R.startTime-N)}}function S(N,R){v=!1,x&&(x=!1,p(P),P=-1),y=!0;var T=g;try{for(h(R),f=r(c);f!==null&&(!(f.expirationTime>R)||N&&!U());){var O=f.callback;if(typeof O=="function"){f.callback=null,g=f.priorityLevel;var Z=O(f.expirationTime<=R);R=e.unstable_now(),typeof Z=="function"?f.callback=Z:f===r(c)&&n(c),h(R)}else n(c);f=r(c)}if(f!==null)var G=!0;else{var Re=r(u);Re!==null&&ge(b,Re.startTime-R),G=!1}return G}finally{f=null,g=T,y=!1}}var C=!1,E=null,P=-1,$=5,A=-1;function U(){return!(e.unstable_now()-A<$)}function ke(){if(E!==null){var N=e.unstable_now();A=N;var R=!0;try{R=E(!0,N)}finally{R?Ue():(C=!1,E=null)}}else C=!1}var Ue;if(typeof d=="function")Ue=function(){d(ke)};else if(typeof MessageChannel<"u"){var je=new MessageChannel,Be=je.port2;je.port1.onmessage=ke,Ue=function(){Be.postMessage(null)}}else Ue=function(){j(ke,0)};function ot(N){E=N,C||(C=!0,Ue())}function ge(N,R){P=j(function(){N(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,ot(S))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(N){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var T=g;g=R;try{return N()}finally{g=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,R){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var T=g;g=N;try{return R()}finally{g=T}},e.unstable_scheduleCallback=function(N,R,T){var O=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?O+T:O):T=O,N){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=T+Z,N={id:m++,callback:R,priorityLevel:N,startTime:T,expirationTime:Z,sortIndex:-1},T>O?(N.sortIndex=T,t(u,N),r(c)===null&&N===r(u)&&(x?(p(P),P=-1):x=!0,ge(b,T-O))):(N.sortIndex=Z,t(c,N),v||y||(v=!0,ot(S))),N},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(N){var R=g;return function(){var T=g;g=R;try{return N.apply(this,arguments)}finally{g=T}}}})(Fc);Oc.exports=Fc;var zp=Oc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp=w,Me=zp;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Uc=new Set,vn={};function dr(e,t){Mr(e,t),Mr(e+"Capture",t)}function Mr(e,t){for(vn[e]=t,e=0;e<t.length;e++)Uc.add(t[e])}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qo=Object.prototype.hasOwnProperty,Dp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xi={},Zi={};function $p(e){return qo.call(Zi,e)?!0:qo.call(Xi,e)?!1:Dp.test(e)?Zi[e]=!0:(Xi[e]=!0,!1)}function Rp(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Lp(e,t,r,n){if(t===null||typeof t>"u"||Rp(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ne(e,t,r,n,a,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new Ne(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new Ne(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new Ne(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new Ne(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new Ne(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new Ne(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new Ne(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new Ne(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new Ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qs=/[\-:]([a-z])/g;function Ks(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Qs,Ks);he[t]=new Ne(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Qs,Ks);he[t]=new Ne(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Qs,Ks);he[t]=new Ne(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new Ne(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new Ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function Gs(e,t,r,n){var a=he.hasOwnProperty(t)?he[t]:null;(a!==null?a.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Lp(t,r,a,n)&&(r=null),n||a===null?$p(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,n=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Et=Tp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vn=Symbol.for("react.element"),xr=Symbol.for("react.portal"),vr=Symbol.for("react.fragment"),Js=Symbol.for("react.strict_mode"),Ho=Symbol.for("react.profiler"),Bc=Symbol.for("react.provider"),Wc=Symbol.for("react.context"),Ys=Symbol.for("react.forward_ref"),Qo=Symbol.for("react.suspense"),Ko=Symbol.for("react.suspense_list"),Xs=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),Vc=Symbol.for("react.offscreen"),el=Symbol.iterator;function Gr(e){return e===null||typeof e!="object"?null:(e=el&&e[el]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,ho;function an(e){if(ho===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);ho=t&&t[1]||""}return`
`+ho+e}var go=!1;function xo(e,t){if(!e||go)return"";go=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),o=n.stack.split(`
`),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(i!==1||l!==1)do if(i--,l--,0>l||a[i]!==o[l]){var c=`
`+a[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=l);break}}}finally{go=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?an(e):""}function Ap(e){switch(e.tag){case 5:return an(e.type);case 16:return an("Lazy");case 13:return an("Suspense");case 19:return an("SuspenseList");case 0:case 2:case 15:return e=xo(e.type,!1),e;case 11:return e=xo(e.type.render,!1),e;case 1:return e=xo(e.type,!0),e;default:return""}}function Go(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vr:return"Fragment";case xr:return"Portal";case Ho:return"Profiler";case Js:return"StrictMode";case Qo:return"Suspense";case Ko:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Wc:return(e.displayName||"Context")+".Consumer";case Bc:return(e._context.displayName||"Context")+".Provider";case Ys:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xs:return t=e.displayName||null,t!==null?t:Go(e.type)||"Memo";case Nt:t=e._payload,e=e._init;try{return Go(e(t))}catch{}}return null}function Ip(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Go(t);case 8:return t===Js?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Mp(e){var t=qc(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){n=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qn(e){e._valueTracker||(e._valueTracker=Mp(e))}function Hc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=qc(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function ba(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jo(e,t){var r=t.checked;return ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function tl(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Bt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Qc(e,t){t=t.checked,t!=null&&Gs(e,"checked",t,!1)}function Yo(e,t){Qc(e,t);var r=Bt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xo(e,t.type,r):t.hasOwnProperty("defaultValue")&&Xo(e,t.type,Bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function rl(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Xo(e,t,r){(t!=="number"||ba(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var on=Array.isArray;function zr(e,t,r,n){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Bt(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Zo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nl(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(_(92));if(on(r)){if(1<r.length)throw Error(_(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Bt(r)}}function Kc(e,t){var r=Bt(t.value),n=Bt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function al(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function es(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Hn,Jc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Hn=Hn||document.createElement("div"),Hn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Hn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function yn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var cn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Op=["Webkit","ms","Moz","O"];Object.keys(cn).forEach(function(e){Op.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),cn[t]=cn[e]})});function Yc(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||cn.hasOwnProperty(e)&&cn[e]?(""+t).trim():t+"px"}function Xc(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,a=Yc(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,a):e[r]=a}}var Fp=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ts(e,t){if(t){if(Fp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function rs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ns=null;function Zs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var as=null,Tr=null,Dr=null;function ol(e){if(e=Fn(e)){if(typeof as!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Za(t),as(e.stateNode,e.type,t))}}function Zc(e){Tr?Dr?Dr.push(e):Dr=[e]:Tr=e}function eu(){if(Tr){var e=Tr,t=Dr;if(Dr=Tr=null,ol(e),t)for(e=0;e<t.length;e++)ol(t[e])}}function tu(e,t){return e(t)}function ru(){}var vo=!1;function nu(e,t,r){if(vo)return e(t,r);vo=!0;try{return tu(e,t,r)}finally{vo=!1,(Tr!==null||Dr!==null)&&(ru(),eu())}}function wn(e,t){var r=e.stateNode;if(r===null)return null;var n=Za(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(_(231,t,typeof r));return r}var os=!1;if(kt)try{var Jr={};Object.defineProperty(Jr,"passive",{get:function(){os=!0}}),window.addEventListener("test",Jr,Jr),window.removeEventListener("test",Jr,Jr)}catch{os=!1}function Up(e,t,r,n,a,o,i,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(m){this.onError(m)}}var un=!1,ka=null,ja=!1,ss=null,Bp={onError:function(e){un=!0,ka=e}};function Wp(e,t,r,n,a,o,i,l,c){un=!1,ka=null,Up.apply(Bp,arguments)}function Vp(e,t,r,n,a,o,i,l,c){if(Wp.apply(this,arguments),un){if(un){var u=ka;un=!1,ka=null}else throw Error(_(198));ja||(ja=!0,ss=u)}}function pr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function au(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function sl(e){if(pr(e)!==e)throw Error(_(188))}function qp(e){var t=e.alternate;if(!t){if(t=pr(e),t===null)throw Error(_(188));return t!==e?null:e}for(var r=e,n=t;;){var a=r.return;if(a===null)break;var o=a.alternate;if(o===null){if(n=a.return,n!==null){r=n;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===r)return sl(a),e;if(o===n)return sl(a),t;o=o.sibling}throw Error(_(188))}if(r.return!==n.return)r=a,n=o;else{for(var i=!1,l=a.child;l;){if(l===r){i=!0,r=a,n=o;break}if(l===n){i=!0,n=a,r=o;break}l=l.sibling}if(!i){for(l=o.child;l;){if(l===r){i=!0,r=o,n=a;break}if(l===n){i=!0,n=o,r=a;break}l=l.sibling}if(!i)throw Error(_(189))}}if(r.alternate!==n)throw Error(_(190))}if(r.tag!==3)throw Error(_(188));return r.stateNode.current===r?e:t}function ou(e){return e=qp(e),e!==null?su(e):null}function su(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=su(e);if(t!==null)return t;e=e.sibling}return null}var iu=Me.unstable_scheduleCallback,il=Me.unstable_cancelCallback,Hp=Me.unstable_shouldYield,Qp=Me.unstable_requestPaint,oe=Me.unstable_now,Kp=Me.unstable_getCurrentPriorityLevel,ei=Me.unstable_ImmediatePriority,lu=Me.unstable_UserBlockingPriority,Sa=Me.unstable_NormalPriority,Gp=Me.unstable_LowPriority,cu=Me.unstable_IdlePriority,Ga=null,pt=null;function Jp(e){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(Ga,e,void 0,(e.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:Zp,Yp=Math.log,Xp=Math.LN2;function Zp(e){return e>>>=0,e===0?32:31-(Yp(e)/Xp|0)|0}var Qn=64,Kn=4194304;function sn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _a(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,a=e.suspendedLanes,o=e.pingedLanes,i=r&268435455;if(i!==0){var l=i&~a;l!==0?n=sn(l):(o&=i,o!==0&&(n=sn(o)))}else i=r&~a,i!==0?n=sn(i):o!==0&&(n=sn(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&a)&&(a=n&-n,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-rt(t),a=1<<r,n|=e[r],t&=~a;return n}function ef(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tf(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-rt(o),l=1<<i,c=a[i];c===-1?(!(l&r)||l&n)&&(a[i]=ef(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function is(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function uu(){var e=Qn;return Qn<<=1,!(Qn&4194240)&&(Qn=64),e}function yo(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Mn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rt(t),e[t]=r}function rf(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-rt(r),o=1<<a;t[a]=0,n[a]=-1,e[a]=-1,r&=~o}}function ti(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-rt(r),a=1<<n;a&t|e[n]&t&&(e[n]|=t),r&=~a}}var q=0;function du(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var pu,ri,fu,mu,hu,ls=!1,Gn=[],Rt=null,Lt=null,At=null,bn=new Map,kn=new Map,zt=[],nf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ll(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":kn.delete(t.pointerId)}}function Yr(e,t,r,n,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[a]},t!==null&&(t=Fn(t),t!==null&&ri(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function af(e,t,r,n,a){switch(t){case"focusin":return Rt=Yr(Rt,e,t,r,n,a),!0;case"dragenter":return Lt=Yr(Lt,e,t,r,n,a),!0;case"mouseover":return At=Yr(At,e,t,r,n,a),!0;case"pointerover":var o=a.pointerId;return bn.set(o,Yr(bn.get(o)||null,e,t,r,n,a)),!0;case"gotpointercapture":return o=a.pointerId,kn.set(o,Yr(kn.get(o)||null,e,t,r,n,a)),!0}return!1}function gu(e){var t=Yt(e.target);if(t!==null){var r=pr(t);if(r!==null){if(t=r.tag,t===13){if(t=au(r),t!==null){e.blockedOn=t,hu(e.priority,function(){fu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ua(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=cs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);ns=n,r.target.dispatchEvent(n),ns=null}else return t=Fn(r),t!==null&&ri(t),e.blockedOn=r,!1;t.shift()}return!0}function cl(e,t,r){ua(e)&&r.delete(t)}function of(){ls=!1,Rt!==null&&ua(Rt)&&(Rt=null),Lt!==null&&ua(Lt)&&(Lt=null),At!==null&&ua(At)&&(At=null),bn.forEach(cl),kn.forEach(cl)}function Xr(e,t){e.blockedOn===t&&(e.blockedOn=null,ls||(ls=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,of)))}function jn(e){function t(a){return Xr(a,e)}if(0<Gn.length){Xr(Gn[0],e);for(var r=1;r<Gn.length;r++){var n=Gn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Rt!==null&&Xr(Rt,e),Lt!==null&&Xr(Lt,e),At!==null&&Xr(At,e),bn.forEach(t),kn.forEach(t),r=0;r<zt.length;r++)n=zt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<zt.length&&(r=zt[0],r.blockedOn===null);)gu(r),r.blockedOn===null&&zt.shift()}var $r=Et.ReactCurrentBatchConfig,Ea=!0;function sf(e,t,r,n){var a=q,o=$r.transition;$r.transition=null;try{q=1,ni(e,t,r,n)}finally{q=a,$r.transition=o}}function lf(e,t,r,n){var a=q,o=$r.transition;$r.transition=null;try{q=4,ni(e,t,r,n)}finally{q=a,$r.transition=o}}function ni(e,t,r,n){if(Ea){var a=cs(e,t,r,n);if(a===null)Po(e,t,n,Ca,r),ll(e,n);else if(af(a,e,t,r,n))n.stopPropagation();else if(ll(e,n),t&4&&-1<nf.indexOf(e)){for(;a!==null;){var o=Fn(a);if(o!==null&&pu(o),o=cs(e,t,r,n),o===null&&Po(e,t,n,Ca,r),o===a)break;a=o}a!==null&&n.stopPropagation()}else Po(e,t,n,null,r)}}var Ca=null;function cs(e,t,r,n){if(Ca=null,e=Zs(n),e=Yt(e),e!==null)if(t=pr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=au(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ca=e,null}function xu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kp()){case ei:return 1;case lu:return 4;case Sa:case Gp:return 16;case cu:return 536870912;default:return 16}default:return 16}}var Dt=null,ai=null,da=null;function vu(){if(da)return da;var e,t=ai,r=t.length,n,a="value"in Dt?Dt.value:Dt.textContent,o=a.length;for(e=0;e<r&&t[e]===a[e];e++);var i=r-e;for(n=1;n<=i&&t[r-n]===a[o-n];n++);return da=a.slice(e,1<n?1-n:void 0)}function pa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Jn(){return!0}function ul(){return!1}function Fe(e){function t(r,n,a,o,i){this._reactName=r,this._targetInst=a,this.type=n,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Jn:ul,this.isPropagationStopped=ul,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Jn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Jn)},persist:function(){},isPersistent:Jn}),t}var Hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oi=Fe(Hr),On=ne({},Hr,{view:0,detail:0}),cf=Fe(On),wo,bo,Zr,Ja=ne({},On,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:si,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zr&&(Zr&&e.type==="mousemove"?(wo=e.screenX-Zr.screenX,bo=e.screenY-Zr.screenY):bo=wo=0,Zr=e),wo)},movementY:function(e){return"movementY"in e?e.movementY:bo}}),dl=Fe(Ja),uf=ne({},Ja,{dataTransfer:0}),df=Fe(uf),pf=ne({},On,{relatedTarget:0}),ko=Fe(pf),ff=ne({},Hr,{animationName:0,elapsedTime:0,pseudoElement:0}),mf=Fe(ff),hf=ne({},Hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gf=Fe(hf),xf=ne({},Hr,{data:0}),pl=Fe(xf),vf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wf[e])?!!t[e]:!1}function si(){return bf}var kf=ne({},On,{key:function(e){if(e.key){var t=vf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=pa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:si,charCode:function(e){return e.type==="keypress"?pa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jf=Fe(kf),Sf=ne({},Ja,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fl=Fe(Sf),_f=ne({},On,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:si}),Ef=Fe(_f),Cf=ne({},Hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nf=Fe(Cf),Pf=ne({},Ja,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zf=Fe(Pf),Tf=[9,13,27,32],ii=kt&&"CompositionEvent"in window,dn=null;kt&&"documentMode"in document&&(dn=document.documentMode);var Df=kt&&"TextEvent"in window&&!dn,yu=kt&&(!ii||dn&&8<dn&&11>=dn),ml=" ",hl=!1;function wu(e,t){switch(e){case"keyup":return Tf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yr=!1;function $f(e,t){switch(e){case"compositionend":return bu(t);case"keypress":return t.which!==32?null:(hl=!0,ml);case"textInput":return e=t.data,e===ml&&hl?null:e;default:return null}}function Rf(e,t){if(yr)return e==="compositionend"||!ii&&wu(e,t)?(e=vu(),da=ai=Dt=null,yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yu&&t.locale!=="ko"?null:t.data;default:return null}}var Lf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lf[e.type]:t==="textarea"}function ku(e,t,r,n){Zc(n),t=Na(t,"onChange"),0<t.length&&(r=new oi("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var pn=null,Sn=null;function Af(e){$u(e,0)}function Ya(e){var t=kr(e);if(Hc(t))return e}function If(e,t){if(e==="change")return t}var ju=!1;if(kt){var jo;if(kt){var So="oninput"in document;if(!So){var xl=document.createElement("div");xl.setAttribute("oninput","return;"),So=typeof xl.oninput=="function"}jo=So}else jo=!1;ju=jo&&(!document.documentMode||9<document.documentMode)}function vl(){pn&&(pn.detachEvent("onpropertychange",Su),Sn=pn=null)}function Su(e){if(e.propertyName==="value"&&Ya(Sn)){var t=[];ku(t,Sn,e,Zs(e)),nu(Af,t)}}function Mf(e,t,r){e==="focusin"?(vl(),pn=t,Sn=r,pn.attachEvent("onpropertychange",Su)):e==="focusout"&&vl()}function Of(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ya(Sn)}function Ff(e,t){if(e==="click")return Ya(t)}function Uf(e,t){if(e==="input"||e==="change")return Ya(t)}function Bf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var at=typeof Object.is=="function"?Object.is:Bf;function _n(e,t){if(at(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!qo.call(t,a)||!at(e[a],t[a]))return!1}return!0}function yl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wl(e,t){var r=yl(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=yl(r)}}function _u(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_u(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Eu(){for(var e=window,t=ba();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=ba(e.document)}return t}function li(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wf(e){var t=Eu(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&_u(r.ownerDocument.documentElement,r)){if(n!==null&&li(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,o=Math.min(n.start,a);n=n.end===void 0?o:Math.min(n.end,a),!e.extend&&o>n&&(a=n,n=o,o=a),a=wl(r,o);var i=wl(r,n);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vf=kt&&"documentMode"in document&&11>=document.documentMode,wr=null,us=null,fn=null,ds=!1;function bl(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ds||wr==null||wr!==ba(n)||(n=wr,"selectionStart"in n&&li(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),fn&&_n(fn,n)||(fn=n,n=Na(us,"onSelect"),0<n.length&&(t=new oi("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=wr)))}function Yn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var br={animationend:Yn("Animation","AnimationEnd"),animationiteration:Yn("Animation","AnimationIteration"),animationstart:Yn("Animation","AnimationStart"),transitionend:Yn("Transition","TransitionEnd")},_o={},Cu={};kt&&(Cu=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function Xa(e){if(_o[e])return _o[e];if(!br[e])return e;var t=br[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Cu)return _o[e]=t[r];return e}var Nu=Xa("animationend"),Pu=Xa("animationiteration"),zu=Xa("animationstart"),Tu=Xa("transitionend"),Du=new Map,kl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qt(e,t){Du.set(e,t),dr(t,[e])}for(var Eo=0;Eo<kl.length;Eo++){var Co=kl[Eo],qf=Co.toLowerCase(),Hf=Co[0].toUpperCase()+Co.slice(1);qt(qf,"on"+Hf)}qt(Nu,"onAnimationEnd");qt(Pu,"onAnimationIteration");qt(zu,"onAnimationStart");qt("dblclick","onDoubleClick");qt("focusin","onFocus");qt("focusout","onBlur");qt(Tu,"onTransitionEnd");Mr("onMouseEnter",["mouseout","mouseover"]);Mr("onMouseLeave",["mouseout","mouseover"]);Mr("onPointerEnter",["pointerout","pointerover"]);Mr("onPointerLeave",["pointerout","pointerover"]);dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qf=new Set("cancel close invalid load scroll toggle".split(" ").concat(ln));function jl(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Vp(n,t,void 0,e),e.currentTarget=null}function $u(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],a=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var i=n.length-1;0<=i;i--){var l=n[i],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&a.isPropagationStopped())break e;jl(a,l,u),o=c}else for(i=0;i<n.length;i++){if(l=n[i],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&a.isPropagationStopped())break e;jl(a,l,u),o=c}}}if(ja)throw e=ss,ja=!1,ss=null,e}function J(e,t){var r=t[gs];r===void 0&&(r=t[gs]=new Set);var n=e+"__bubble";r.has(n)||(Ru(t,e,2,!1),r.add(n))}function No(e,t,r){var n=0;t&&(n|=4),Ru(r,e,n,t)}var Xn="_reactListening"+Math.random().toString(36).slice(2);function En(e){if(!e[Xn]){e[Xn]=!0,Uc.forEach(function(r){r!=="selectionchange"&&(Qf.has(r)||No(r,!1,e),No(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xn]||(t[Xn]=!0,No("selectionchange",!1,t))}}function Ru(e,t,r,n){switch(xu(t)){case 1:var a=sf;break;case 4:a=lf;break;default:a=ni}r=a.bind(null,t,r,e),a=void 0,!os||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Po(e,t,r,n,a){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var l=n.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(i===4)for(i=n.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;i=i.return}for(;l!==null;){if(i=Yt(l),i===null)return;if(c=i.tag,c===5||c===6){n=o=i;continue e}l=l.parentNode}}n=n.return}nu(function(){var u=o,m=Zs(r),f=[];e:{var g=Du.get(e);if(g!==void 0){var y=oi,v=e;switch(e){case"keypress":if(pa(r)===0)break e;case"keydown":case"keyup":y=jf;break;case"focusin":v="focus",y=ko;break;case"focusout":v="blur",y=ko;break;case"beforeblur":case"afterblur":y=ko;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=dl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=df;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Ef;break;case Nu:case Pu:case zu:y=mf;break;case Tu:y=Nf;break;case"scroll":y=cf;break;case"wheel":y=zf;break;case"copy":case"cut":case"paste":y=gf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=fl}var x=(t&4)!==0,j=!x&&e==="scroll",p=x?g!==null?g+"Capture":null:g;x=[];for(var d=u,h;d!==null;){h=d;var b=h.stateNode;if(h.tag===5&&b!==null&&(h=b,p!==null&&(b=wn(d,p),b!=null&&x.push(Cn(d,b,h)))),j)break;d=d.return}0<x.length&&(g=new y(g,v,null,r,m),f.push({event:g,listeners:x}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&r!==ns&&(v=r.relatedTarget||r.fromElement)&&(Yt(v)||v[jt]))break e;if((y||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,y?(v=r.relatedTarget||r.toElement,y=u,v=v?Yt(v):null,v!==null&&(j=pr(v),v!==j||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(x=dl,b="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=fl,b="onPointerLeave",p="onPointerEnter",d="pointer"),j=y==null?g:kr(y),h=v==null?g:kr(v),g=new x(b,d+"leave",y,r,m),g.target=j,g.relatedTarget=h,b=null,Yt(m)===u&&(x=new x(p,d+"enter",v,r,m),x.target=h,x.relatedTarget=j,b=x),j=b,y&&v)t:{for(x=y,p=v,d=0,h=x;h;h=hr(h))d++;for(h=0,b=p;b;b=hr(b))h++;for(;0<d-h;)x=hr(x),d--;for(;0<h-d;)p=hr(p),h--;for(;d--;){if(x===p||p!==null&&x===p.alternate)break t;x=hr(x),p=hr(p)}x=null}else x=null;y!==null&&Sl(f,g,y,x,!1),v!==null&&j!==null&&Sl(f,j,v,x,!0)}}e:{if(g=u?kr(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var S=If;else if(gl(g))if(ju)S=Uf;else{S=Of;var C=Mf}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=Ff);if(S&&(S=S(e,u))){ku(f,S,r,m);break e}C&&C(e,g,u),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&Xo(g,"number",g.value)}switch(C=u?kr(u):window,e){case"focusin":(gl(C)||C.contentEditable==="true")&&(wr=C,us=u,fn=null);break;case"focusout":fn=us=wr=null;break;case"mousedown":ds=!0;break;case"contextmenu":case"mouseup":case"dragend":ds=!1,bl(f,r,m);break;case"selectionchange":if(Vf)break;case"keydown":case"keyup":bl(f,r,m)}var E;if(ii)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else yr?wu(e,r)&&(P="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(P="onCompositionStart");P&&(yu&&r.locale!=="ko"&&(yr||P!=="onCompositionStart"?P==="onCompositionEnd"&&yr&&(E=vu()):(Dt=m,ai="value"in Dt?Dt.value:Dt.textContent,yr=!0)),C=Na(u,P),0<C.length&&(P=new pl(P,e,null,r,m),f.push({event:P,listeners:C}),E?P.data=E:(E=bu(r),E!==null&&(P.data=E)))),(E=Df?$f(e,r):Rf(e,r))&&(u=Na(u,"onBeforeInput"),0<u.length&&(m=new pl("onBeforeInput","beforeinput",null,r,m),f.push({event:m,listeners:u}),m.data=E))}$u(f,t)})}function Cn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Na(e,t){for(var r=t+"Capture",n=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=wn(e,r),o!=null&&n.unshift(Cn(e,o,a)),o=wn(e,t),o!=null&&n.push(Cn(e,o,a))),e=e.return}return n}function hr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Sl(e,t,r,n,a){for(var o=t._reactName,i=[];r!==null&&r!==n;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===n)break;l.tag===5&&u!==null&&(l=u,a?(c=wn(r,o),c!=null&&i.unshift(Cn(r,c,l))):a||(c=wn(r,o),c!=null&&i.push(Cn(r,c,l)))),r=r.return}i.length!==0&&e.push({event:t,listeners:i})}var Kf=/\r\n?/g,Gf=/\u0000|\uFFFD/g;function _l(e){return(typeof e=="string"?e:""+e).replace(Kf,`
`).replace(Gf,"")}function Zn(e,t,r){if(t=_l(t),_l(e)!==t&&r)throw Error(_(425))}function Pa(){}var ps=null,fs=null;function ms(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hs=typeof setTimeout=="function"?setTimeout:void 0,Jf=typeof clearTimeout=="function"?clearTimeout:void 0,El=typeof Promise=="function"?Promise:void 0,Yf=typeof queueMicrotask=="function"?queueMicrotask:typeof El<"u"?function(e){return El.resolve(null).then(e).catch(Xf)}:hs;function Xf(e){setTimeout(function(){throw e})}function zo(e,t){var r=t,n=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(n===0){e.removeChild(a),jn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=a}while(r);jn(t)}function It(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Cl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Qr=Math.random().toString(36).slice(2),ut="__reactFiber$"+Qr,Nn="__reactProps$"+Qr,jt="__reactContainer$"+Qr,gs="__reactEvents$"+Qr,Zf="__reactListeners$"+Qr,em="__reactHandles$"+Qr;function Yt(e){var t=e[ut];if(t)return t;for(var r=e.parentNode;r;){if(t=r[jt]||r[ut]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Cl(e);e!==null;){if(r=e[ut])return r;e=Cl(e)}return t}e=r,r=e.parentNode}return null}function Fn(e){return e=e[ut]||e[jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Za(e){return e[Nn]||null}var xs=[],jr=-1;function Ht(e){return{current:e}}function Y(e){0>jr||(e.current=xs[jr],xs[jr]=null,jr--)}function K(e,t){jr++,xs[jr]=e.current,e.current=t}var Wt={},be=Ht(Wt),Te=Ht(!1),or=Wt;function Or(e,t){var r=e.type.contextTypes;if(!r)return Wt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in r)a[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function De(e){return e=e.childContextTypes,e!=null}function za(){Y(Te),Y(be)}function Nl(e,t,r){if(be.current!==Wt)throw Error(_(168));K(be,t),K(Te,r)}function Lu(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var a in n)if(!(a in t))throw Error(_(108,Ip(e)||"Unknown",a));return ne({},r,n)}function Ta(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wt,or=be.current,K(be,e),K(Te,Te.current),!0}function Pl(e,t,r){var n=e.stateNode;if(!n)throw Error(_(169));r?(e=Lu(e,t,or),n.__reactInternalMemoizedMergedChildContext=e,Y(Te),Y(be),K(be,e)):Y(Te),K(Te,r)}var xt=null,eo=!1,To=!1;function Au(e){xt===null?xt=[e]:xt.push(e)}function tm(e){eo=!0,Au(e)}function Qt(){if(!To&&xt!==null){To=!0;var e=0,t=q;try{var r=xt;for(q=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}xt=null,eo=!1}catch(a){throw xt!==null&&(xt=xt.slice(e+1)),iu(ei,Qt),a}finally{q=t,To=!1}}return null}var Sr=[],_r=0,Da=null,$a=0,We=[],Ve=0,sr=null,yt=1,wt="";function Gt(e,t){Sr[_r++]=$a,Sr[_r++]=Da,Da=e,$a=t}function Iu(e,t,r){We[Ve++]=yt,We[Ve++]=wt,We[Ve++]=sr,sr=e;var n=yt;e=wt;var a=32-rt(n)-1;n&=~(1<<a),r+=1;var o=32-rt(t)+a;if(30<o){var i=a-a%5;o=(n&(1<<i)-1).toString(32),n>>=i,a-=i,yt=1<<32-rt(t)+a|r<<a|n,wt=o+e}else yt=1<<o|r<<a|n,wt=e}function ci(e){e.return!==null&&(Gt(e,1),Iu(e,1,0))}function ui(e){for(;e===Da;)Da=Sr[--_r],Sr[_r]=null,$a=Sr[--_r],Sr[_r]=null;for(;e===sr;)sr=We[--Ve],We[Ve]=null,wt=We[--Ve],We[Ve]=null,yt=We[--Ve],We[Ve]=null}var Ie=null,Ae=null,X=!1,et=null;function Mu(e,t){var r=qe(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function zl(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ie=e,Ae=It(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ie=e,Ae=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=sr!==null?{id:yt,overflow:wt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=qe(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Ie=e,Ae=null,!0):!1;default:return!1}}function vs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ys(e){if(X){var t=Ae;if(t){var r=t;if(!zl(e,t)){if(vs(e))throw Error(_(418));t=It(r.nextSibling);var n=Ie;t&&zl(e,t)?Mu(n,r):(e.flags=e.flags&-4097|2,X=!1,Ie=e)}}else{if(vs(e))throw Error(_(418));e.flags=e.flags&-4097|2,X=!1,Ie=e}}}function Tl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function ea(e){if(e!==Ie)return!1;if(!X)return Tl(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ms(e.type,e.memoizedProps)),t&&(t=Ae)){if(vs(e))throw Ou(),Error(_(418));for(;t;)Mu(e,t),t=It(t.nextSibling)}if(Tl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Ae=It(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Ae=null}}else Ae=Ie?It(e.stateNode.nextSibling):null;return!0}function Ou(){for(var e=Ae;e;)e=It(e.nextSibling)}function Fr(){Ae=Ie=null,X=!1}function di(e){et===null?et=[e]:et.push(e)}var rm=Et.ReactCurrentBatchConfig;function en(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(_(309));var n=r.stateNode}if(!n)throw Error(_(147,e));var a=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var l=a.refs;i===null?delete l[o]:l[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!r._owner)throw Error(_(290,e))}return e}function ta(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Dl(e){var t=e._init;return t(e._payload)}function Fu(e){function t(p,d){if(e){var h=p.deletions;h===null?(p.deletions=[d],p.flags|=16):h.push(d)}}function r(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function n(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function a(p,d){return p=Ut(p,d),p.index=0,p.sibling=null,p}function o(p,d,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<d?(p.flags|=2,d):h):(p.flags|=2,d)):(p.flags|=1048576,d)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,d,h,b){return d===null||d.tag!==6?(d=Mo(h,p.mode,b),d.return=p,d):(d=a(d,h),d.return=p,d)}function c(p,d,h,b){var S=h.type;return S===vr?m(p,d,h.props.children,b,h.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Nt&&Dl(S)===d.type)?(b=a(d,h.props),b.ref=en(p,d,h),b.return=p,b):(b=ya(h.type,h.key,h.props,null,p.mode,b),b.ref=en(p,d,h),b.return=p,b)}function u(p,d,h,b){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Oo(h,p.mode,b),d.return=p,d):(d=a(d,h.children||[]),d.return=p,d)}function m(p,d,h,b,S){return d===null||d.tag!==7?(d=rr(h,p.mode,b,S),d.return=p,d):(d=a(d,h),d.return=p,d)}function f(p,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Mo(""+d,p.mode,h),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Vn:return h=ya(d.type,d.key,d.props,null,p.mode,h),h.ref=en(p,null,d),h.return=p,h;case xr:return d=Oo(d,p.mode,h),d.return=p,d;case Nt:var b=d._init;return f(p,b(d._payload),h)}if(on(d)||Gr(d))return d=rr(d,p.mode,h,null),d.return=p,d;ta(p,d)}return null}function g(p,d,h,b){var S=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:l(p,d,""+h,b);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Vn:return h.key===S?c(p,d,h,b):null;case xr:return h.key===S?u(p,d,h,b):null;case Nt:return S=h._init,g(p,d,S(h._payload),b)}if(on(h)||Gr(h))return S!==null?null:m(p,d,h,b,null);ta(p,h)}return null}function y(p,d,h,b,S){if(typeof b=="string"&&b!==""||typeof b=="number")return p=p.get(h)||null,l(d,p,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Vn:return p=p.get(b.key===null?h:b.key)||null,c(d,p,b,S);case xr:return p=p.get(b.key===null?h:b.key)||null,u(d,p,b,S);case Nt:var C=b._init;return y(p,d,h,C(b._payload),S)}if(on(b)||Gr(b))return p=p.get(h)||null,m(d,p,b,S,null);ta(d,b)}return null}function v(p,d,h,b){for(var S=null,C=null,E=d,P=d=0,$=null;E!==null&&P<h.length;P++){E.index>P?($=E,E=null):$=E.sibling;var A=g(p,E,h[P],b);if(A===null){E===null&&(E=$);break}e&&E&&A.alternate===null&&t(p,E),d=o(A,d,P),C===null?S=A:C.sibling=A,C=A,E=$}if(P===h.length)return r(p,E),X&&Gt(p,P),S;if(E===null){for(;P<h.length;P++)E=f(p,h[P],b),E!==null&&(d=o(E,d,P),C===null?S=E:C.sibling=E,C=E);return X&&Gt(p,P),S}for(E=n(p,E);P<h.length;P++)$=y(E,p,P,h[P],b),$!==null&&(e&&$.alternate!==null&&E.delete($.key===null?P:$.key),d=o($,d,P),C===null?S=$:C.sibling=$,C=$);return e&&E.forEach(function(U){return t(p,U)}),X&&Gt(p,P),S}function x(p,d,h,b){var S=Gr(h);if(typeof S!="function")throw Error(_(150));if(h=S.call(h),h==null)throw Error(_(151));for(var C=S=null,E=d,P=d=0,$=null,A=h.next();E!==null&&!A.done;P++,A=h.next()){E.index>P?($=E,E=null):$=E.sibling;var U=g(p,E,A.value,b);if(U===null){E===null&&(E=$);break}e&&E&&U.alternate===null&&t(p,E),d=o(U,d,P),C===null?S=U:C.sibling=U,C=U,E=$}if(A.done)return r(p,E),X&&Gt(p,P),S;if(E===null){for(;!A.done;P++,A=h.next())A=f(p,A.value,b),A!==null&&(d=o(A,d,P),C===null?S=A:C.sibling=A,C=A);return X&&Gt(p,P),S}for(E=n(p,E);!A.done;P++,A=h.next())A=y(E,p,P,A.value,b),A!==null&&(e&&A.alternate!==null&&E.delete(A.key===null?P:A.key),d=o(A,d,P),C===null?S=A:C.sibling=A,C=A);return e&&E.forEach(function(ke){return t(p,ke)}),X&&Gt(p,P),S}function j(p,d,h,b){if(typeof h=="object"&&h!==null&&h.type===vr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Vn:e:{for(var S=h.key,C=d;C!==null;){if(C.key===S){if(S=h.type,S===vr){if(C.tag===7){r(p,C.sibling),d=a(C,h.props.children),d.return=p,p=d;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Nt&&Dl(S)===C.type){r(p,C.sibling),d=a(C,h.props),d.ref=en(p,C,h),d.return=p,p=d;break e}r(p,C);break}else t(p,C);C=C.sibling}h.type===vr?(d=rr(h.props.children,p.mode,b,h.key),d.return=p,p=d):(b=ya(h.type,h.key,h.props,null,p.mode,b),b.ref=en(p,d,h),b.return=p,p=b)}return i(p);case xr:e:{for(C=h.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){r(p,d.sibling),d=a(d,h.children||[]),d.return=p,p=d;break e}else{r(p,d);break}else t(p,d);d=d.sibling}d=Oo(h,p.mode,b),d.return=p,p=d}return i(p);case Nt:return C=h._init,j(p,d,C(h._payload),b)}if(on(h))return v(p,d,h,b);if(Gr(h))return x(p,d,h,b);ta(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(r(p,d.sibling),d=a(d,h),d.return=p,p=d):(r(p,d),d=Mo(h,p.mode,b),d.return=p,p=d),i(p)):r(p,d)}return j}var Ur=Fu(!0),Uu=Fu(!1),Ra=Ht(null),La=null,Er=null,pi=null;function fi(){pi=Er=La=null}function mi(e){var t=Ra.current;Y(Ra),e._currentValue=t}function ws(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Rr(e,t){La=e,pi=Er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ze=!0),e.firstContext=null)}function Ke(e){var t=e._currentValue;if(pi!==e)if(e={context:e,memoizedValue:t,next:null},Er===null){if(La===null)throw Error(_(308));Er=e,La.dependencies={lanes:0,firstContext:e}}else Er=Er.next=e;return t}var Xt=null;function hi(e){Xt===null?Xt=[e]:Xt.push(e)}function Bu(e,t,r,n){var a=t.interleaved;return a===null?(r.next=r,hi(t)):(r.next=a.next,a.next=r),t.interleaved=r,St(e,n)}function St(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Pt=!1;function gi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,F&2){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,St(e,r)}return a=n.interleaved,a===null?(t.next=t,hi(n)):(t.next=a.next,a.next=t),n.interleaved=t,St(e,r)}function fa(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ti(e,r)}}function $l(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var a=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?a=o=i:o=o.next=i,r=r.next}while(r!==null);o===null?a=o=t:o=o.next=t}else a=o=t;r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Aa(e,t,r,n){var a=e.updateQueue;Pt=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,u=c.next;c.next=null,i===null?o=u:i.next=u,i=c;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==i&&(l===null?m.firstBaseUpdate=u:l.next=u,m.lastBaseUpdate=c))}if(o!==null){var f=a.baseState;i=0,m=u=c=null,l=o;do{var g=l.lane,y=l.eventTime;if((n&g)===g){m!==null&&(m=m.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,x=l;switch(g=t,y=r,x.tag){case 1:if(v=x.payload,typeof v=="function"){f=v.call(y,f,g);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,g=typeof v=="function"?v.call(y,f,g):v,g==null)break e;f=ne({},f,g);break e;case 2:Pt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=a.effects,g===null?a.effects=[l]:g.push(l))}else y={eventTime:y,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(u=m=y,c=f):m=m.next=y,i|=g;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;g=l,l=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(!0);if(m===null&&(c=f),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=m,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);lr|=i,e.lanes=i,e.memoizedState=f}}function Rl(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],a=n.callback;if(a!==null){if(n.callback=null,n=r,typeof a!="function")throw Error(_(191,a));a.call(n)}}}var Un={},ft=Ht(Un),Pn=Ht(Un),zn=Ht(Un);function Zt(e){if(e===Un)throw Error(_(174));return e}function xi(e,t){switch(K(zn,t),K(Pn,e),K(ft,Un),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:es(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=es(t,e)}Y(ft),K(ft,t)}function Br(){Y(ft),Y(Pn),Y(zn)}function Vu(e){Zt(zn.current);var t=Zt(ft.current),r=es(t,e.type);t!==r&&(K(Pn,e),K(ft,r))}function vi(e){Pn.current===e&&(Y(ft),Y(Pn))}var te=Ht(0);function Ia(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Do=[];function yi(){for(var e=0;e<Do.length;e++)Do[e]._workInProgressVersionPrimary=null;Do.length=0}var ma=Et.ReactCurrentDispatcher,$o=Et.ReactCurrentBatchConfig,ir=0,re=null,le=null,de=null,Ma=!1,mn=!1,Tn=0,nm=0;function xe(){throw Error(_(321))}function wi(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!at(e[r],t[r]))return!1;return!0}function bi(e,t,r,n,a,o){if(ir=o,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ma.current=e===null||e.memoizedState===null?im:lm,e=r(n,a),mn){o=0;do{if(mn=!1,Tn=0,25<=o)throw Error(_(301));o+=1,de=le=null,t.updateQueue=null,ma.current=cm,e=r(n,a)}while(mn)}if(ma.current=Oa,t=le!==null&&le.next!==null,ir=0,de=le=re=null,Ma=!1,t)throw Error(_(300));return e}function ki(){var e=Tn!==0;return Tn=0,e}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?re.memoizedState=de=e:de=de.next=e,de}function Ge(){if(le===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=de===null?re.memoizedState:de.next;if(t!==null)de=t,le=e;else{if(e===null)throw Error(_(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},de===null?re.memoizedState=de=e:de=de.next=e}return de}function Dn(e,t){return typeof t=="function"?t(e):t}function Ro(e){var t=Ge(),r=t.queue;if(r===null)throw Error(_(311));r.lastRenderedReducer=e;var n=le,a=n.baseQueue,o=r.pending;if(o!==null){if(a!==null){var i=a.next;a.next=o.next,o.next=i}n.baseQueue=a=o,r.pending=null}if(a!==null){o=a.next,n=n.baseState;var l=i=null,c=null,u=o;do{var m=u.lane;if((ir&m)===m)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var f={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,i=n):c=c.next=f,re.lanes|=m,lr|=m}u=u.next}while(u!==null&&u!==o);c===null?i=n:c.next=l,at(n,t.memoizedState)||(ze=!0),t.memoizedState=n,t.baseState=i,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){a=e;do o=a.lane,re.lanes|=o,lr|=o,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Lo(e){var t=Ge(),r=t.queue;if(r===null)throw Error(_(311));r.lastRenderedReducer=e;var n=r.dispatch,a=r.pending,o=t.memoizedState;if(a!==null){r.pending=null;var i=a=a.next;do o=e(o,i.action),i=i.next;while(i!==a);at(o,t.memoizedState)||(ze=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function qu(){}function Hu(e,t){var r=re,n=Ge(),a=t(),o=!at(n.memoizedState,a);if(o&&(n.memoizedState=a,ze=!0),n=n.queue,ji(Gu.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||de!==null&&de.memoizedState.tag&1){if(r.flags|=2048,$n(9,Ku.bind(null,r,n,a,t),void 0,null),pe===null)throw Error(_(349));ir&30||Qu(r,t,a)}return a}function Qu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Ku(e,t,r,n){t.value=r,t.getSnapshot=n,Ju(t)&&Yu(e)}function Gu(e,t,r){return r(function(){Ju(t)&&Yu(e)})}function Ju(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!at(e,r)}catch{return!0}}function Yu(e){var t=St(e,1);t!==null&&nt(t,e,1,-1)}function Ll(e){var t=ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Dn,lastRenderedState:e},t.queue=e,e=e.dispatch=sm.bind(null,re,e),[t.memoizedState,e]}function $n(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Xu(){return Ge().memoizedState}function ha(e,t,r,n){var a=ct();re.flags|=e,a.memoizedState=$n(1|t,r,void 0,n===void 0?null:n)}function to(e,t,r,n){var a=Ge();n=n===void 0?null:n;var o=void 0;if(le!==null){var i=le.memoizedState;if(o=i.destroy,n!==null&&wi(n,i.deps)){a.memoizedState=$n(t,r,o,n);return}}re.flags|=e,a.memoizedState=$n(1|t,r,o,n)}function Al(e,t){return ha(8390656,8,e,t)}function ji(e,t){return to(2048,8,e,t)}function Zu(e,t){return to(4,2,e,t)}function ed(e,t){return to(4,4,e,t)}function td(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rd(e,t,r){return r=r!=null?r.concat([e]):null,to(4,4,td.bind(null,t,e),r)}function Si(){}function nd(e,t){var r=Ge();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&wi(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function ad(e,t){var r=Ge();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&wi(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function od(e,t,r){return ir&21?(at(r,t)||(r=uu(),re.lanes|=r,lr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=r)}function am(e,t){var r=q;q=r!==0&&4>r?r:4,e(!0);var n=$o.transition;$o.transition={};try{e(!1),t()}finally{q=r,$o.transition=n}}function sd(){return Ge().memoizedState}function om(e,t,r){var n=Ft(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},id(e))ld(t,r);else if(r=Bu(e,t,r,n),r!==null){var a=Ee();nt(r,e,n,a),cd(r,t,n)}}function sm(e,t,r){var n=Ft(e),a={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(id(e))ld(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,l=o(i,r);if(a.hasEagerState=!0,a.eagerState=l,at(l,i)){var c=t.interleaved;c===null?(a.next=a,hi(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}r=Bu(e,t,a,n),r!==null&&(a=Ee(),nt(r,e,n,a),cd(r,t,n))}}function id(e){var t=e.alternate;return e===re||t!==null&&t===re}function ld(e,t){mn=Ma=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function cd(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ti(e,r)}}var Oa={readContext:Ke,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},im={readContext:Ke,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:Al,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ha(4194308,4,td.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ha(4194308,4,e,t)},useInsertionEffect:function(e,t){return ha(4,2,e,t)},useMemo:function(e,t){var r=ct();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=ct();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=om.bind(null,re,e),[n.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:Ll,useDebugValue:Si,useDeferredValue:function(e){return ct().memoizedState=e},useTransition:function(){var e=Ll(!1),t=e[0];return e=am.bind(null,e[1]),ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=re,a=ct();if(X){if(r===void 0)throw Error(_(407));r=r()}else{if(r=t(),pe===null)throw Error(_(349));ir&30||Qu(n,t,r)}a.memoizedState=r;var o={value:r,getSnapshot:t};return a.queue=o,Al(Gu.bind(null,n,o,e),[e]),n.flags|=2048,$n(9,Ku.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=ct(),t=pe.identifierPrefix;if(X){var r=wt,n=yt;r=(n&~(1<<32-rt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Tn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=nm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},lm={readContext:Ke,useCallback:nd,useContext:Ke,useEffect:ji,useImperativeHandle:rd,useInsertionEffect:Zu,useLayoutEffect:ed,useMemo:ad,useReducer:Ro,useRef:Xu,useState:function(){return Ro(Dn)},useDebugValue:Si,useDeferredValue:function(e){var t=Ge();return od(t,le.memoizedState,e)},useTransition:function(){var e=Ro(Dn)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:qu,useSyncExternalStore:Hu,useId:sd,unstable_isNewReconciler:!1},cm={readContext:Ke,useCallback:nd,useContext:Ke,useEffect:ji,useImperativeHandle:rd,useInsertionEffect:Zu,useLayoutEffect:ed,useMemo:ad,useReducer:Lo,useRef:Xu,useState:function(){return Lo(Dn)},useDebugValue:Si,useDeferredValue:function(e){var t=Ge();return le===null?t.memoizedState=e:od(t,le.memoizedState,e)},useTransition:function(){var e=Lo(Dn)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:qu,useSyncExternalStore:Hu,useId:sd,unstable_isNewReconciler:!1};function Xe(e,t){if(e&&e.defaultProps){t=ne({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function bs(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:ne({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ro={isMounted:function(e){return(e=e._reactInternals)?pr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Ee(),a=Ft(e),o=bt(n,a);o.payload=t,r!=null&&(o.callback=r),t=Mt(e,o,a),t!==null&&(nt(t,e,a,n),fa(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Ee(),a=Ft(e),o=bt(n,a);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=Mt(e,o,a),t!==null&&(nt(t,e,a,n),fa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ee(),n=Ft(e),a=bt(r,n);a.tag=2,t!=null&&(a.callback=t),t=Mt(e,a,n),t!==null&&(nt(t,e,n,r),fa(t,e,n))}};function Il(e,t,r,n,a,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,i):t.prototype&&t.prototype.isPureReactComponent?!_n(r,n)||!_n(a,o):!0}function ud(e,t,r){var n=!1,a=Wt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ke(o):(a=De(t)?or:be.current,n=t.contextTypes,o=(n=n!=null)?Or(e,a):Wt),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ro,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ml(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&ro.enqueueReplaceState(t,t.state,null)}function ks(e,t,r,n){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},gi(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=Ke(o):(o=De(t)?or:be.current,a.context=Or(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(bs(e,t,o,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&ro.enqueueReplaceState(a,a.state,null),Aa(e,r,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Wr(e,t){try{var r="",n=t;do r+=Ap(n),n=n.return;while(n);var a=r}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function Ao(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function js(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var um=typeof WeakMap=="function"?WeakMap:Map;function dd(e,t,r){r=bt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Ua||(Ua=!0,$s=n),js(e,t)},r}function pd(e,t,r){r=bt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=t.value;r.payload=function(){return n(a)},r.callback=function(){js(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){js(e,t),typeof n!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),r}function Ol(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new um;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(r)||(a.add(r),e=Sm.bind(null,e,t,r),t.then(e,e))}function Fl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ul(e,t,r,n,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=bt(-1,1),t.tag=2,Mt(r,t,1))),r.lanes|=1),e)}var dm=Et.ReactCurrentOwner,ze=!1;function _e(e,t,r,n){t.child=e===null?Uu(t,null,r,n):Ur(t,e.child,r,n)}function Bl(e,t,r,n,a){r=r.render;var o=t.ref;return Rr(t,a),n=bi(e,t,r,n,o,a),r=ki(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,_t(e,t,a)):(X&&r&&ci(t),t.flags|=1,_e(e,t,n,a),t.child)}function Wl(e,t,r,n,a){if(e===null){var o=r.type;return typeof o=="function"&&!Di(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,fd(e,t,o,n,a)):(e=ya(r.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&a)){var i=o.memoizedProps;if(r=r.compare,r=r!==null?r:_n,r(i,n)&&e.ref===t.ref)return _t(e,t,a)}return t.flags|=1,e=Ut(o,n),e.ref=t.ref,e.return=t,t.child=e}function fd(e,t,r,n,a){if(e!==null){var o=e.memoizedProps;if(_n(o,n)&&e.ref===t.ref)if(ze=!1,t.pendingProps=n=o,(e.lanes&a)!==0)e.flags&131072&&(ze=!0);else return t.lanes=e.lanes,_t(e,t,a)}return Ss(e,t,r,n,a)}function md(e,t,r){var n=t.pendingProps,a=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(Nr,Le),Le|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(Nr,Le),Le|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,K(Nr,Le),Le|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,K(Nr,Le),Le|=n;return _e(e,t,a,r),t.child}function hd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ss(e,t,r,n,a){var o=De(r)?or:be.current;return o=Or(t,o),Rr(t,a),r=bi(e,t,r,n,o,a),n=ki(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,_t(e,t,a)):(X&&n&&ci(t),t.flags|=1,_e(e,t,r,a),t.child)}function Vl(e,t,r,n,a){if(De(r)){var o=!0;Ta(t)}else o=!1;if(Rr(t,a),t.stateNode===null)ga(e,t),ud(t,r,n),ks(t,r,n,a),n=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var c=i.context,u=r.contextType;typeof u=="object"&&u!==null?u=Ke(u):(u=De(r)?or:be.current,u=Or(t,u));var m=r.getDerivedStateFromProps,f=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==n||c!==u)&&Ml(t,i,n,u),Pt=!1;var g=t.memoizedState;i.state=g,Aa(t,n,i,a),c=t.memoizedState,l!==n||g!==c||Te.current||Pt?(typeof m=="function"&&(bs(t,r,m,n),c=t.memoizedState),(l=Pt||Il(t,r,l,n,g,c,u))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),i.props=n,i.state=c,i.context=u,n=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,Wu(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Xe(t.type,l),i.props=u,f=t.pendingProps,g=i.context,c=r.contextType,typeof c=="object"&&c!==null?c=Ke(c):(c=De(r)?or:be.current,c=Or(t,c));var y=r.getDerivedStateFromProps;(m=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==f||g!==c)&&Ml(t,i,n,c),Pt=!1,g=t.memoizedState,i.state=g,Aa(t,n,i,a);var v=t.memoizedState;l!==f||g!==v||Te.current||Pt?(typeof y=="function"&&(bs(t,r,y,n),v=t.memoizedState),(u=Pt||Il(t,r,u,n,g,v,c)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,v,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,v,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=v),i.props=n,i.state=v,i.context=c,n=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return _s(e,t,r,n,o,a)}function _s(e,t,r,n,a,o){hd(e,t);var i=(t.flags&128)!==0;if(!n&&!i)return a&&Pl(t,r,!1),_t(e,t,o);n=t.stateNode,dm.current=t;var l=i&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&i?(t.child=Ur(t,e.child,null,o),t.child=Ur(t,null,l,o)):_e(e,t,l,o),t.memoizedState=n.state,a&&Pl(t,r,!0),t.child}function gd(e){var t=e.stateNode;t.pendingContext?Nl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Nl(e,t.context,!1),xi(e,t.containerInfo)}function ql(e,t,r,n,a){return Fr(),di(a),t.flags|=256,_e(e,t,r,n),t.child}var Es={dehydrated:null,treeContext:null,retryLane:0};function Cs(e){return{baseLanes:e,cachePool:null,transitions:null}}function xd(e,t,r){var n=t.pendingProps,a=te.current,o=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),K(te,a&1),e===null)return ys(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=n.children,e=n.fallback,o?(n=t.mode,o=t.child,i={mode:"hidden",children:i},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=oo(i,n,0,null),e=rr(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Cs(r),t.memoizedState=Es,e):_i(t,i));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return pm(e,t,i,n,l,a,r);if(o){o=n.fallback,i=t.mode,a=e.child,l=a.sibling;var c={mode:"hidden",children:n.children};return!(i&1)&&t.child!==a?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=Ut(a,c),n.subtreeFlags=a.subtreeFlags&14680064),l!==null?o=Ut(l,o):(o=rr(o,i,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,i=e.child.memoizedState,i=i===null?Cs(r):{baseLanes:i.baseLanes|r,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~r,t.memoizedState=Es,n}return o=e.child,e=o.sibling,n=Ut(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function _i(e,t){return t=oo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ra(e,t,r,n){return n!==null&&di(n),Ur(t,e.child,null,r),e=_i(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pm(e,t,r,n,a,o,i){if(r)return t.flags&256?(t.flags&=-257,n=Ao(Error(_(422))),ra(e,t,i,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,a=t.mode,n=oo({mode:"visible",children:n.children},a,0,null),o=rr(o,a,i,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&Ur(t,e.child,null,i),t.child.memoizedState=Cs(i),t.memoizedState=Es,o);if(!(t.mode&1))return ra(e,t,i,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var l=n.dgst;return n=l,o=Error(_(419)),n=Ao(o,n,void 0),ra(e,t,i,n)}if(l=(i&e.childLanes)!==0,ze||l){if(n=pe,n!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(n.suspendedLanes|i)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,St(e,a),nt(n,e,a,-1))}return Ti(),n=Ao(Error(_(421))),ra(e,t,i,n)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=_m.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Ae=It(a.nextSibling),Ie=t,X=!0,et=null,e!==null&&(We[Ve++]=yt,We[Ve++]=wt,We[Ve++]=sr,yt=e.id,wt=e.overflow,sr=t),t=_i(t,n.children),t.flags|=4096,t)}function Hl(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ws(e.return,t,r)}function Io(e,t,r,n,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=a)}function vd(e,t,r){var n=t.pendingProps,a=n.revealOrder,o=n.tail;if(_e(e,t,n.children,r),n=te.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hl(e,r,t);else if(e.tag===19)Hl(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(K(te,n),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&Ia(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Io(t,!1,a,r,o);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ia(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Io(t,!0,r,null,o);break;case"together":Io(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ga(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function _t(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),lr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,r=Ut(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Ut(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function fm(e,t,r){switch(t.tag){case 3:gd(t),Fr();break;case 5:Vu(t);break;case 1:De(t.type)&&Ta(t);break;case 4:xi(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,a=t.memoizedProps.value;K(Ra,n._currentValue),n._currentValue=a;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(K(te,te.current&1),t.flags|=128,null):r&t.child.childLanes?xd(e,t,r):(K(te,te.current&1),e=_t(e,t,r),e!==null?e.sibling:null);K(te,te.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return vd(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),K(te,te.current),n)break;return null;case 22:case 23:return t.lanes=0,md(e,t,r)}return _t(e,t,r)}var yd,Ns,wd,bd;yd=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Ns=function(){};wd=function(e,t,r,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,Zt(ft.current);var o=null;switch(r){case"input":a=Jo(e,a),n=Jo(e,n),o=[];break;case"select":a=ne({},a,{value:void 0}),n=ne({},n,{value:void 0}),o=[];break;case"textarea":a=Zo(e,a),n=Zo(e,n),o=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Pa)}ts(r,n);var i;r=null;for(u in a)if(!n.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(i in l)l.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(vn.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var c=n[u];if(l=a!=null?a[u]:void 0,n.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in c)c.hasOwnProperty(i)&&l[i]!==c[i]&&(r||(r={}),r[i]=c[i])}else r||(o||(o=[]),o.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(vn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&J("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}r&&(o=o||[]).push("style",r);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};bd=function(e,t,r,n){r!==n&&(t.flags|=4)};function tn(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function mm(e,t,r){var n=t.pendingProps;switch(ui(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return De(t.type)&&za(),ve(t),null;case 3:return n=t.stateNode,Br(),Y(Te),Y(be),yi(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ea(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,et!==null&&(As(et),et=null))),Ns(e,t),ve(t),null;case 5:vi(t);var a=Zt(zn.current);if(r=t.type,e!==null&&t.stateNode!=null)wd(e,t,r,n,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(_(166));return ve(t),null}if(e=Zt(ft.current),ea(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[ut]=t,n[Nn]=o,e=(t.mode&1)!==0,r){case"dialog":J("cancel",n),J("close",n);break;case"iframe":case"object":case"embed":J("load",n);break;case"video":case"audio":for(a=0;a<ln.length;a++)J(ln[a],n);break;case"source":J("error",n);break;case"img":case"image":case"link":J("error",n),J("load",n);break;case"details":J("toggle",n);break;case"input":tl(n,o),J("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},J("invalid",n);break;case"textarea":nl(n,o),J("invalid",n)}ts(r,o),a=null;for(var i in o)if(o.hasOwnProperty(i)){var l=o[i];i==="children"?typeof l=="string"?n.textContent!==l&&(o.suppressHydrationWarning!==!0&&Zn(n.textContent,l,e),a=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Zn(n.textContent,l,e),a=["children",""+l]):vn.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&J("scroll",n)}switch(r){case"input":qn(n),rl(n,o,!0);break;case"textarea":qn(n),al(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=Pa)}n=a,t.updateQueue=n,n!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gc(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=i.createElement(r,{is:n.is}):(e=i.createElement(r),r==="select"&&(i=e,n.multiple?i.multiple=!0:n.size&&(i.size=n.size))):e=i.createElementNS(e,r),e[ut]=t,e[Nn]=n,yd(e,t,!1,!1),t.stateNode=e;e:{switch(i=rs(r,n),r){case"dialog":J("cancel",e),J("close",e),a=n;break;case"iframe":case"object":case"embed":J("load",e),a=n;break;case"video":case"audio":for(a=0;a<ln.length;a++)J(ln[a],e);a=n;break;case"source":J("error",e),a=n;break;case"img":case"image":case"link":J("error",e),J("load",e),a=n;break;case"details":J("toggle",e),a=n;break;case"input":tl(e,n),a=Jo(e,n),J("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=ne({},n,{value:void 0}),J("invalid",e);break;case"textarea":nl(e,n),a=Zo(e,n),J("invalid",e);break;default:a=n}ts(r,a),l=a;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Xc(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Jc(e,c)):o==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&yn(e,c):typeof c=="number"&&yn(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(vn.hasOwnProperty(o)?c!=null&&o==="onScroll"&&J("scroll",e):c!=null&&Gs(e,o,c,i))}switch(r){case"input":qn(e),rl(e,n,!1);break;case"textarea":qn(e),al(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Bt(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?zr(e,!!n.multiple,o,!1):n.defaultValue!=null&&zr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Pa)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)bd(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(_(166));if(r=Zt(zn.current),Zt(ft.current),ea(t)){if(n=t.stateNode,r=t.memoizedProps,n[ut]=t,(o=n.nodeValue!==r)&&(e=Ie,e!==null))switch(e.tag){case 3:Zn(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zn(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[ut]=t,t.stateNode=n}return ve(t),null;case 13:if(Y(te),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Ae!==null&&t.mode&1&&!(t.flags&128))Ou(),Fr(),t.flags|=98560,o=!1;else if(o=ea(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[ut]=t}else Fr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),o=!1}else et!==null&&(As(et),et=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?ue===0&&(ue=3):Ti())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return Br(),Ns(e,t),e===null&&En(t.stateNode.containerInfo),ve(t),null;case 10:return mi(t.type._context),ve(t),null;case 17:return De(t.type)&&za(),ve(t),null;case 19:if(Y(te),o=t.memoizedState,o===null)return ve(t),null;if(n=(t.flags&128)!==0,i=o.rendering,i===null)if(n)tn(o,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Ia(e),i!==null){for(t.flags|=128,tn(o,!1),n=i.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return K(te,te.current&1|2),t.child}e=e.sibling}o.tail!==null&&oe()>Vr&&(t.flags|=128,n=!0,tn(o,!1),t.lanes=4194304)}else{if(!n)if(e=Ia(i),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),tn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!X)return ve(t),null}else 2*oe()-o.renderingStartTime>Vr&&r!==1073741824&&(t.flags|=128,n=!0,tn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(r=o.last,r!==null?r.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=oe(),t.sibling=null,r=te.current,K(te,n?r&1|2:r&1),t):(ve(t),null);case 22:case 23:return zi(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Le&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function hm(e,t){switch(ui(t),t.tag){case 1:return De(t.type)&&za(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Br(),Y(Te),Y(be),yi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vi(t),null;case 13:if(Y(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(te),null;case 4:return Br(),null;case 10:return mi(t.type._context),null;case 22:case 23:return zi(),null;case 24:return null;default:return null}}var na=!1,we=!1,gm=typeof WeakSet=="function"?WeakSet:Set,z=null;function Cr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){ae(e,t,n)}else r.current=null}function Ps(e,t,r){try{r()}catch(n){ae(e,t,n)}}var Ql=!1;function xm(e,t){if(ps=Ea,e=Eu(),li(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var a=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var i=0,l=-1,c=-1,u=0,m=0,f=e,g=null;t:for(;;){for(var y;f!==r||a!==0&&f.nodeType!==3||(l=i+a),f!==o||n!==0&&f.nodeType!==3||(c=i+n),f.nodeType===3&&(i+=f.nodeValue.length),(y=f.firstChild)!==null;)g=f,f=y;for(;;){if(f===e)break t;if(g===r&&++u===a&&(l=i),g===o&&++m===n&&(c=i),(y=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=y}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(fs={focusedElem:e,selectionRange:r},Ea=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,j=v.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:Xe(t.type,x),j);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(b){ae(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return v=Ql,Ql=!1,v}function hn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&Ps(t,r,o)}a=a.next}while(a!==n)}}function no(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function zs(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function kd(e){var t=e.alternate;t!==null&&(e.alternate=null,kd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ut],delete t[Nn],delete t[gs],delete t[Zf],delete t[em])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jd(e){return e.tag===5||e.tag===3||e.tag===4}function Kl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ts(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Pa));else if(n!==4&&(e=e.child,e!==null))for(Ts(e,t,r),e=e.sibling;e!==null;)Ts(e,t,r),e=e.sibling}function Ds(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Ds(e,t,r),e=e.sibling;e!==null;)Ds(e,t,r),e=e.sibling}var fe=null,Ze=!1;function Ct(e,t,r){for(r=r.child;r!==null;)Sd(e,t,r),r=r.sibling}function Sd(e,t,r){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(Ga,r)}catch{}switch(r.tag){case 5:we||Cr(r,t);case 6:var n=fe,a=Ze;fe=null,Ct(e,t,r),fe=n,Ze=a,fe!==null&&(Ze?(e=fe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):fe.removeChild(r.stateNode));break;case 18:fe!==null&&(Ze?(e=fe,r=r.stateNode,e.nodeType===8?zo(e.parentNode,r):e.nodeType===1&&zo(e,r),jn(e)):zo(fe,r.stateNode));break;case 4:n=fe,a=Ze,fe=r.stateNode.containerInfo,Ze=!0,Ct(e,t,r),fe=n,Ze=a;break;case 0:case 11:case 14:case 15:if(!we&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var o=a,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Ps(r,t,i),a=a.next}while(a!==n)}Ct(e,t,r);break;case 1:if(!we&&(Cr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){ae(r,t,l)}Ct(e,t,r);break;case 21:Ct(e,t,r);break;case 22:r.mode&1?(we=(n=we)||r.memoizedState!==null,Ct(e,t,r),we=n):Ct(e,t,r);break;default:Ct(e,t,r)}}function Gl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new gm),t.forEach(function(n){var a=Em.bind(null,e,n);r.has(n)||(r.add(n),n.then(a,a))})}}function Je(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var a=r[n];try{var o=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:fe=l.stateNode,Ze=!1;break e;case 3:fe=l.stateNode.containerInfo,Ze=!0;break e;case 4:fe=l.stateNode.containerInfo,Ze=!0;break e}l=l.return}if(fe===null)throw Error(_(160));Sd(o,i,a),fe=null,Ze=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){ae(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_d(t,e),t=t.sibling}function _d(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Je(t,e),it(e),n&4){try{hn(3,e,e.return),no(3,e)}catch(x){ae(e,e.return,x)}try{hn(5,e,e.return)}catch(x){ae(e,e.return,x)}}break;case 1:Je(t,e),it(e),n&512&&r!==null&&Cr(r,r.return);break;case 5:if(Je(t,e),it(e),n&512&&r!==null&&Cr(r,r.return),e.flags&32){var a=e.stateNode;try{yn(a,"")}catch(x){ae(e,e.return,x)}}if(n&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,i=r!==null?r.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Qc(a,o),rs(l,i);var u=rs(l,o);for(i=0;i<c.length;i+=2){var m=c[i],f=c[i+1];m==="style"?Xc(a,f):m==="dangerouslySetInnerHTML"?Jc(a,f):m==="children"?yn(a,f):Gs(a,m,f,u)}switch(l){case"input":Yo(a,o);break;case"textarea":Kc(a,o);break;case"select":var g=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?zr(a,!!o.multiple,y,!1):g!==!!o.multiple&&(o.defaultValue!=null?zr(a,!!o.multiple,o.defaultValue,!0):zr(a,!!o.multiple,o.multiple?[]:"",!1))}a[Nn]=o}catch(x){ae(e,e.return,x)}}break;case 6:if(Je(t,e),it(e),n&4){if(e.stateNode===null)throw Error(_(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(x){ae(e,e.return,x)}}break;case 3:if(Je(t,e),it(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{jn(t.containerInfo)}catch(x){ae(e,e.return,x)}break;case 4:Je(t,e),it(e);break;case 13:Je(t,e),it(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(Ni=oe())),n&4&&Gl(e);break;case 22:if(m=r!==null&&r.memoizedState!==null,e.mode&1?(we=(u=we)||m,Je(t,e),we=u):Je(t,e),it(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(z=e,m=e.child;m!==null;){for(f=z=m;z!==null;){switch(g=z,y=g.child,g.tag){case 0:case 11:case 14:case 15:hn(4,g,g.return);break;case 1:Cr(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){n=g,r=g.return;try{t=n,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){ae(n,r,x)}}break;case 5:Cr(g,g.return);break;case 22:if(g.memoizedState!==null){Yl(f);continue}}y!==null?(y.return=g,z=y):Yl(f)}m=m.sibling}e:for(m=null,f=e;;){if(f.tag===5){if(m===null){m=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,c=f.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Yc("display",i))}catch(x){ae(e,e.return,x)}}}else if(f.tag===6){if(m===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){ae(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;m===f&&(m=null),f=f.return}m===f&&(m=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Je(t,e),it(e),n&4&&Gl(e);break;case 21:break;default:Je(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(jd(r)){var n=r;break e}r=r.return}throw Error(_(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(yn(a,""),n.flags&=-33);var o=Kl(e);Ds(e,o,a);break;case 3:case 4:var i=n.stateNode.containerInfo,l=Kl(e);Ts(e,l,i);break;default:throw Error(_(161))}}catch(c){ae(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vm(e,t,r){z=e,Ed(e)}function Ed(e,t,r){for(var n=(e.mode&1)!==0;z!==null;){var a=z,o=a.child;if(a.tag===22&&n){var i=a.memoizedState!==null||na;if(!i){var l=a.alternate,c=l!==null&&l.memoizedState!==null||we;l=na;var u=we;if(na=i,(we=c)&&!u)for(z=a;z!==null;)i=z,c=i.child,i.tag===22&&i.memoizedState!==null?Xl(a):c!==null?(c.return=i,z=c):Xl(a);for(;o!==null;)z=o,Ed(o),o=o.sibling;z=a,na=l,we=u}Jl(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,z=o):Jl(e)}}function Jl(e){for(;z!==null;){var t=z;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:we||no(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!we)if(r===null)n.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Xe(t.type,r.memoizedProps);n.componentDidUpdate(a,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Rl(t,o,n);break;case 3:var i=t.updateQueue;if(i!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Rl(t,i,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var f=m.dehydrated;f!==null&&jn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}we||t.flags&512&&zs(t)}catch(g){ae(t,t.return,g)}}if(t===e){z=null;break}if(r=t.sibling,r!==null){r.return=t.return,z=r;break}z=t.return}}function Yl(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var r=t.sibling;if(r!==null){r.return=t.return,z=r;break}z=t.return}}function Xl(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{no(4,t)}catch(c){ae(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var a=t.return;try{n.componentDidMount()}catch(c){ae(t,a,c)}}var o=t.return;try{zs(t)}catch(c){ae(t,o,c)}break;case 5:var i=t.return;try{zs(t)}catch(c){ae(t,i,c)}}}catch(c){ae(t,t.return,c)}if(t===e){z=null;break}var l=t.sibling;if(l!==null){l.return=t.return,z=l;break}z=t.return}}var ym=Math.ceil,Fa=Et.ReactCurrentDispatcher,Ei=Et.ReactCurrentOwner,Qe=Et.ReactCurrentBatchConfig,F=0,pe=null,ie=null,me=0,Le=0,Nr=Ht(0),ue=0,Rn=null,lr=0,ao=0,Ci=0,gn=null,Pe=null,Ni=0,Vr=1/0,gt=null,Ua=!1,$s=null,Ot=null,aa=!1,$t=null,Ba=0,xn=0,Rs=null,xa=-1,va=0;function Ee(){return F&6?oe():xa!==-1?xa:xa=oe()}function Ft(e){return e.mode&1?F&2&&me!==0?me&-me:rm.transition!==null?(va===0&&(va=uu()),va):(e=q,e!==0||(e=window.event,e=e===void 0?16:xu(e.type)),e):1}function nt(e,t,r,n){if(50<xn)throw xn=0,Rs=null,Error(_(185));Mn(e,r,n),(!(F&2)||e!==pe)&&(e===pe&&(!(F&2)&&(ao|=r),ue===4&&Tt(e,me)),$e(e,n),r===1&&F===0&&!(t.mode&1)&&(Vr=oe()+500,eo&&Qt()))}function $e(e,t){var r=e.callbackNode;tf(e,t);var n=_a(e,e===pe?me:0);if(n===0)r!==null&&il(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&il(r),t===1)e.tag===0?tm(Zl.bind(null,e)):Au(Zl.bind(null,e)),Yf(function(){!(F&6)&&Qt()}),r=null;else{switch(du(n)){case 1:r=ei;break;case 4:r=lu;break;case 16:r=Sa;break;case 536870912:r=cu;break;default:r=Sa}r=Rd(r,Cd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Cd(e,t){if(xa=-1,va=0,F&6)throw Error(_(327));var r=e.callbackNode;if(Lr()&&e.callbackNode!==r)return null;var n=_a(e,e===pe?me:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Wa(e,n);else{t=n;var a=F;F|=2;var o=Pd();(pe!==e||me!==t)&&(gt=null,Vr=oe()+500,tr(e,t));do try{km();break}catch(l){Nd(e,l)}while(!0);fi(),Fa.current=o,F=a,ie!==null?t=0:(pe=null,me=0,t=ue)}if(t!==0){if(t===2&&(a=is(e),a!==0&&(n=a,t=Ls(e,a))),t===1)throw r=Rn,tr(e,0),Tt(e,n),$e(e,oe()),r;if(t===6)Tt(e,n);else{if(a=e.current.alternate,!(n&30)&&!wm(a)&&(t=Wa(e,n),t===2&&(o=is(e),o!==0&&(n=o,t=Ls(e,o))),t===1))throw r=Rn,tr(e,0),Tt(e,n),$e(e,oe()),r;switch(e.finishedWork=a,e.finishedLanes=n,t){case 0:case 1:throw Error(_(345));case 2:Jt(e,Pe,gt);break;case 3:if(Tt(e,n),(n&130023424)===n&&(t=Ni+500-oe(),10<t)){if(_a(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){Ee(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=hs(Jt.bind(null,e,Pe,gt),t);break}Jt(e,Pe,gt);break;case 4:if(Tt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,a=-1;0<n;){var i=31-rt(n);o=1<<i,i=t[i],i>a&&(a=i),n&=~o}if(n=a,n=oe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*ym(n/1960))-n,10<n){e.timeoutHandle=hs(Jt.bind(null,e,Pe,gt),n);break}Jt(e,Pe,gt);break;case 5:Jt(e,Pe,gt);break;default:throw Error(_(329))}}}return $e(e,oe()),e.callbackNode===r?Cd.bind(null,e):null}function Ls(e,t){var r=gn;return e.current.memoizedState.isDehydrated&&(tr(e,t).flags|=256),e=Wa(e,t),e!==2&&(t=Pe,Pe=r,t!==null&&As(t)),e}function As(e){Pe===null?Pe=e:Pe.push.apply(Pe,e)}function wm(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var a=r[n],o=a.getSnapshot;a=a.value;try{if(!at(o(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tt(e,t){for(t&=~Ci,t&=~ao,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-rt(t),n=1<<r;e[r]=-1,t&=~n}}function Zl(e){if(F&6)throw Error(_(327));Lr();var t=_a(e,0);if(!(t&1))return $e(e,oe()),null;var r=Wa(e,t);if(e.tag!==0&&r===2){var n=is(e);n!==0&&(t=n,r=Ls(e,n))}if(r===1)throw r=Rn,tr(e,0),Tt(e,t),$e(e,oe()),r;if(r===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jt(e,Pe,gt),$e(e,oe()),null}function Pi(e,t){var r=F;F|=1;try{return e(t)}finally{F=r,F===0&&(Vr=oe()+500,eo&&Qt())}}function cr(e){$t!==null&&$t.tag===0&&!(F&6)&&Lr();var t=F;F|=1;var r=Qe.transition,n=q;try{if(Qe.transition=null,q=1,e)return e()}finally{q=n,Qe.transition=r,F=t,!(F&6)&&Qt()}}function zi(){Le=Nr.current,Y(Nr)}function tr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Jf(r)),ie!==null)for(r=ie.return;r!==null;){var n=r;switch(ui(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&za();break;case 3:Br(),Y(Te),Y(be),yi();break;case 5:vi(n);break;case 4:Br();break;case 13:Y(te);break;case 19:Y(te);break;case 10:mi(n.type._context);break;case 22:case 23:zi()}r=r.return}if(pe=e,ie=e=Ut(e.current,null),me=Le=t,ue=0,Rn=null,Ci=ao=lr=0,Pe=gn=null,Xt!==null){for(t=0;t<Xt.length;t++)if(r=Xt[t],n=r.interleaved,n!==null){r.interleaved=null;var a=n.next,o=r.pending;if(o!==null){var i=o.next;o.next=a,n.next=i}r.pending=n}Xt=null}return e}function Nd(e,t){do{var r=ie;try{if(fi(),ma.current=Oa,Ma){for(var n=re.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}Ma=!1}if(ir=0,de=le=re=null,mn=!1,Tn=0,Ei.current=null,r===null||r.return===null){ue=1,Rn=t,ie=null;break}e:{var o=e,i=r.return,l=r,c=t;if(t=me,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,m=l,f=m.tag;if(!(m.mode&1)&&(f===0||f===11||f===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Fl(i);if(y!==null){y.flags&=-257,Ul(y,i,l,o,t),y.mode&1&&Ol(o,u,t),t=y,c=u;var v=t.updateQueue;if(v===null){var x=new Set;x.add(c),t.updateQueue=x}else v.add(c);break e}else{if(!(t&1)){Ol(o,u,t),Ti();break e}c=Error(_(426))}}else if(X&&l.mode&1){var j=Fl(i);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Ul(j,i,l,o,t),di(Wr(c,l));break e}}o=c=Wr(c,l),ue!==4&&(ue=2),gn===null?gn=[o]:gn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=dd(o,c,t);$l(o,p);break e;case 1:l=c;var d=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ot===null||!Ot.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=pd(o,l,t);$l(o,b);break e}}o=o.return}while(o!==null)}Td(r)}catch(S){t=S,ie===r&&r!==null&&(ie=r=r.return);continue}break}while(!0)}function Pd(){var e=Fa.current;return Fa.current=Oa,e===null?Oa:e}function Ti(){(ue===0||ue===3||ue===2)&&(ue=4),pe===null||!(lr&268435455)&&!(ao&268435455)||Tt(pe,me)}function Wa(e,t){var r=F;F|=2;var n=Pd();(pe!==e||me!==t)&&(gt=null,tr(e,t));do try{bm();break}catch(a){Nd(e,a)}while(!0);if(fi(),F=r,Fa.current=n,ie!==null)throw Error(_(261));return pe=null,me=0,ue}function bm(){for(;ie!==null;)zd(ie)}function km(){for(;ie!==null&&!Hp();)zd(ie)}function zd(e){var t=$d(e.alternate,e,Le);e.memoizedProps=e.pendingProps,t===null?Td(e):ie=t,Ei.current=null}function Td(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=hm(r,t),r!==null){r.flags&=32767,ie=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,ie=null;return}}else if(r=mm(r,t,Le),r!==null){ie=r;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);ue===0&&(ue=5)}function Jt(e,t,r){var n=q,a=Qe.transition;try{Qe.transition=null,q=1,jm(e,t,r,n)}finally{Qe.transition=a,q=n}return null}function jm(e,t,r,n){do Lr();while($t!==null);if(F&6)throw Error(_(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(rf(e,o),e===pe&&(ie=pe=null,me=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||aa||(aa=!0,Rd(Sa,function(){return Lr(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Qe.transition,Qe.transition=null;var i=q;q=1;var l=F;F|=4,Ei.current=null,xm(e,r),_d(r,e),Wf(fs),Ea=!!ps,fs=ps=null,e.current=r,vm(r),Qp(),F=l,q=i,Qe.transition=o}else e.current=r;if(aa&&(aa=!1,$t=e,Ba=a),o=e.pendingLanes,o===0&&(Ot=null),Jp(r.stateNode),$e(e,oe()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],n(a.value,{componentStack:a.stack,digest:a.digest});if(Ua)throw Ua=!1,e=$s,$s=null,e;return Ba&1&&e.tag!==0&&Lr(),o=e.pendingLanes,o&1?e===Rs?xn++:(xn=0,Rs=e):xn=0,Qt(),null}function Lr(){if($t!==null){var e=du(Ba),t=Qe.transition,r=q;try{if(Qe.transition=null,q=16>e?16:e,$t===null)var n=!1;else{if(e=$t,$t=null,Ba=0,F&6)throw Error(_(331));var a=F;for(F|=4,z=e.current;z!==null;){var o=z,i=o.child;if(z.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(z=u;z!==null;){var m=z;switch(m.tag){case 0:case 11:case 15:hn(8,m,o)}var f=m.child;if(f!==null)f.return=m,z=f;else for(;z!==null;){m=z;var g=m.sibling,y=m.return;if(kd(m),m===u){z=null;break}if(g!==null){g.return=y,z=g;break}z=y}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var j=x.sibling;x.sibling=null,x=j}while(x!==null)}}z=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,z=i;else e:for(;z!==null;){if(o=z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:hn(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,z=p;break e}z=o.return}}var d=e.current;for(z=d;z!==null;){i=z;var h=i.child;if(i.subtreeFlags&2064&&h!==null)h.return=i,z=h;else e:for(i=d;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:no(9,l)}}catch(S){ae(l,l.return,S)}if(l===i){z=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,z=b;break e}z=l.return}}if(F=a,Qt(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(Ga,e)}catch{}n=!0}return n}finally{q=r,Qe.transition=t}}return!1}function ec(e,t,r){t=Wr(r,t),t=dd(e,t,1),e=Mt(e,t,1),t=Ee(),e!==null&&(Mn(e,1,t),$e(e,t))}function ae(e,t,r){if(e.tag===3)ec(e,e,r);else for(;t!==null;){if(t.tag===3){ec(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ot===null||!Ot.has(n))){e=Wr(r,e),e=pd(t,e,1),t=Mt(t,e,1),e=Ee(),t!==null&&(Mn(t,1,e),$e(t,e));break}}t=t.return}}function Sm(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Ee(),e.pingedLanes|=e.suspendedLanes&r,pe===e&&(me&r)===r&&(ue===4||ue===3&&(me&130023424)===me&&500>oe()-Ni?tr(e,0):Ci|=r),$e(e,t)}function Dd(e,t){t===0&&(e.mode&1?(t=Kn,Kn<<=1,!(Kn&130023424)&&(Kn=4194304)):t=1);var r=Ee();e=St(e,t),e!==null&&(Mn(e,t,r),$e(e,r))}function _m(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Dd(e,r)}function Em(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(_(314))}n!==null&&n.delete(t),Dd(e,r)}var $d;$d=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)ze=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return ze=!1,fm(e,t,r);ze=!!(e.flags&131072)}else ze=!1,X&&t.flags&1048576&&Iu(t,$a,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;ga(e,t),e=t.pendingProps;var a=Or(t,be.current);Rr(t,r),a=bi(null,t,n,e,a,r);var o=ki();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,De(n)?(o=!0,Ta(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,gi(t),a.updater=ro,t.stateNode=a,a._reactInternals=t,ks(t,n,e,r),t=_s(null,t,n,!0,o,r)):(t.tag=0,X&&o&&ci(t),_e(null,t,a,r),t=t.child),t;case 16:n=t.elementType;e:{switch(ga(e,t),e=t.pendingProps,a=n._init,n=a(n._payload),t.type=n,a=t.tag=Nm(n),e=Xe(n,e),a){case 0:t=Ss(null,t,n,e,r);break e;case 1:t=Vl(null,t,n,e,r);break e;case 11:t=Bl(null,t,n,e,r);break e;case 14:t=Wl(null,t,n,Xe(n.type,e),r);break e}throw Error(_(306,n,""))}return t;case 0:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Xe(n,a),Ss(e,t,n,a,r);case 1:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Xe(n,a),Vl(e,t,n,a,r);case 3:e:{if(gd(t),e===null)throw Error(_(387));n=t.pendingProps,o=t.memoizedState,a=o.element,Wu(e,t),Aa(t,n,null,r);var i=t.memoizedState;if(n=i.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Wr(Error(_(423)),t),t=ql(e,t,n,r,a);break e}else if(n!==a){a=Wr(Error(_(424)),t),t=ql(e,t,n,r,a);break e}else for(Ae=It(t.stateNode.containerInfo.firstChild),Ie=t,X=!0,et=null,r=Uu(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Fr(),n===a){t=_t(e,t,r);break e}_e(e,t,n,r)}t=t.child}return t;case 5:return Vu(t),e===null&&ys(t),n=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,i=a.children,ms(n,a)?i=null:o!==null&&ms(n,o)&&(t.flags|=32),hd(e,t),_e(e,t,i,r),t.child;case 6:return e===null&&ys(t),null;case 13:return xd(e,t,r);case 4:return xi(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Ur(t,null,n,r):_e(e,t,n,r),t.child;case 11:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Xe(n,a),Bl(e,t,n,a,r);case 7:return _e(e,t,t.pendingProps,r),t.child;case 8:return _e(e,t,t.pendingProps.children,r),t.child;case 12:return _e(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,a=t.pendingProps,o=t.memoizedProps,i=a.value,K(Ra,n._currentValue),n._currentValue=i,o!==null)if(at(o.value,i)){if(o.children===a.children&&!Te.current){t=_t(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){i=o.child;for(var c=l.firstContext;c!==null;){if(c.context===n){if(o.tag===1){c=bt(-1,r&-r),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?c.next=c:(c.next=m.next,m.next=c),u.pending=c}}o.lanes|=r,c=o.alternate,c!==null&&(c.lanes|=r),ws(o.return,r,t),l.lanes|=r;break}c=c.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(_(341));i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),ws(i,r,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}_e(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,n=t.pendingProps.children,Rr(t,r),a=Ke(a),n=n(a),t.flags|=1,_e(e,t,n,r),t.child;case 14:return n=t.type,a=Xe(n,t.pendingProps),a=Xe(n.type,a),Wl(e,t,n,a,r);case 15:return fd(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Xe(n,a),ga(e,t),t.tag=1,De(n)?(e=!0,Ta(t)):e=!1,Rr(t,r),ud(t,n,a),ks(t,n,a,r),_s(null,t,n,!0,e,r);case 19:return vd(e,t,r);case 22:return md(e,t,r)}throw Error(_(156,t.tag))};function Rd(e,t){return iu(e,t)}function Cm(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,r,n){return new Cm(e,t,r,n)}function Di(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nm(e){if(typeof e=="function")return Di(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ys)return 11;if(e===Xs)return 14}return 2}function Ut(e,t){var r=e.alternate;return r===null?(r=qe(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ya(e,t,r,n,a,o){var i=2;if(n=e,typeof e=="function")Di(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case vr:return rr(r.children,a,o,t);case Js:i=8,a|=8;break;case Ho:return e=qe(12,r,t,a|2),e.elementType=Ho,e.lanes=o,e;case Qo:return e=qe(13,r,t,a),e.elementType=Qo,e.lanes=o,e;case Ko:return e=qe(19,r,t,a),e.elementType=Ko,e.lanes=o,e;case Vc:return oo(r,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bc:i=10;break e;case Wc:i=9;break e;case Ys:i=11;break e;case Xs:i=14;break e;case Nt:i=16,n=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=qe(i,r,t,a),t.elementType=e,t.type=n,t.lanes=o,t}function rr(e,t,r,n){return e=qe(7,e,n,t),e.lanes=r,e}function oo(e,t,r,n){return e=qe(22,e,n,t),e.elementType=Vc,e.lanes=r,e.stateNode={isHidden:!1},e}function Mo(e,t,r){return e=qe(6,e,null,t),e.lanes=r,e}function Oo(e,t,r){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Pm(e,t,r,n,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yo(0),this.expirationTimes=yo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yo(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function $i(e,t,r,n,a,o,i,l,c){return e=new Pm(e,t,r,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=qe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},gi(o),e}function zm(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Ld(e){if(!e)return Wt;e=e._reactInternals;e:{if(pr(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(De(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var r=e.type;if(De(r))return Lu(e,r,t)}return t}function Ad(e,t,r,n,a,o,i,l,c){return e=$i(r,n,!0,e,a,o,i,l,c),e.context=Ld(null),r=e.current,n=Ee(),a=Ft(r),o=bt(n,a),o.callback=t??null,Mt(r,o,a),e.current.lanes=a,Mn(e,a,n),$e(e,n),e}function so(e,t,r,n){var a=t.current,o=Ee(),i=Ft(a);return r=Ld(r),t.context===null?t.context=r:t.pendingContext=r,t=bt(o,i),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Mt(a,t,i),e!==null&&(nt(e,a,i,o),fa(e,a,i)),i}function Va(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function tc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Ri(e,t){tc(e,t),(e=e.alternate)&&tc(e,t)}function Tm(){return null}var Id=typeof reportError=="function"?reportError:function(e){console.error(e)};function Li(e){this._internalRoot=e}io.prototype.render=Li.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));so(e,t,null,null)};io.prototype.unmount=Li.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cr(function(){so(null,e,null,null)}),t[jt]=null}};function io(e){this._internalRoot=e}io.prototype.unstable_scheduleHydration=function(e){if(e){var t=mu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<zt.length&&t!==0&&t<zt[r].priority;r++);zt.splice(r,0,e),r===0&&gu(e)}};function Ai(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function lo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function rc(){}function Dm(e,t,r,n,a){if(a){if(typeof n=="function"){var o=n;n=function(){var u=Va(i);o.call(u)}}var i=Ad(t,n,e,0,null,!1,!1,"",rc);return e._reactRootContainer=i,e[jt]=i.current,En(e.nodeType===8?e.parentNode:e),cr(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var l=n;n=function(){var u=Va(c);l.call(u)}}var c=$i(e,0,!1,null,null,!1,!1,"",rc);return e._reactRootContainer=c,e[jt]=c.current,En(e.nodeType===8?e.parentNode:e),cr(function(){so(t,c,r,n)}),c}function co(e,t,r,n,a){var o=r._reactRootContainer;if(o){var i=o;if(typeof a=="function"){var l=a;a=function(){var c=Va(i);l.call(c)}}so(t,i,e,a)}else i=Dm(r,t,e,a,n);return Va(i)}pu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=sn(t.pendingLanes);r!==0&&(ti(t,r|1),$e(t,oe()),!(F&6)&&(Vr=oe()+500,Qt()))}break;case 13:cr(function(){var n=St(e,1);if(n!==null){var a=Ee();nt(n,e,1,a)}}),Ri(e,1)}};ri=function(e){if(e.tag===13){var t=St(e,134217728);if(t!==null){var r=Ee();nt(t,e,134217728,r)}Ri(e,134217728)}};fu=function(e){if(e.tag===13){var t=Ft(e),r=St(e,t);if(r!==null){var n=Ee();nt(r,e,t,n)}Ri(e,t)}};mu=function(){return q};hu=function(e,t){var r=q;try{return q=e,t()}finally{q=r}};as=function(e,t,r){switch(t){case"input":if(Yo(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var a=Za(n);if(!a)throw Error(_(90));Hc(n),Yo(n,a)}}}break;case"textarea":Kc(e,r);break;case"select":t=r.value,t!=null&&zr(e,!!r.multiple,t,!1)}};tu=Pi;ru=cr;var $m={usingClientEntryPoint:!1,Events:[Fn,kr,Za,Zc,eu,Pi]},rn={findFiberByHostInstance:Yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rm={bundleType:rn.bundleType,version:rn.version,rendererPackageName:rn.rendererPackageName,rendererConfig:rn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ou(e),e===null?null:e.stateNode},findFiberByHostInstance:rn.findFiberByHostInstance||Tm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oa.isDisabled&&oa.supportsFiber)try{Ga=oa.inject(Rm),pt=oa}catch{}}Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$m;Oe.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ai(t))throw Error(_(200));return zm(e,t,null,r)};Oe.createRoot=function(e,t){if(!Ai(e))throw Error(_(299));var r=!1,n="",a=Id;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=$i(e,1,!1,null,null,r,!1,n,a),e[jt]=t.current,En(e.nodeType===8?e.parentNode:e),new Li(t)};Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=ou(t),e=e===null?null:e.stateNode,e};Oe.flushSync=function(e){return cr(e)};Oe.hydrate=function(e,t,r){if(!lo(t))throw Error(_(200));return co(null,e,t,!0,r)};Oe.hydrateRoot=function(e,t,r){if(!Ai(e))throw Error(_(405));var n=r!=null&&r.hydratedSources||null,a=!1,o="",i=Id;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),t=Ad(t,null,e,1,r??null,a,!1,o,i),e[jt]=t.current,En(e),n)for(e=0;e<n.length;e++)r=n[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new io(t)};Oe.render=function(e,t,r){if(!lo(t))throw Error(_(200));return co(null,e,t,!1,r)};Oe.unmountComponentAtNode=function(e){if(!lo(e))throw Error(_(40));return e._reactRootContainer?(cr(function(){co(null,null,e,!1,function(){e._reactRootContainer=null,e[jt]=null})}),!0):!1};Oe.unstable_batchedUpdates=Pi;Oe.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!lo(r))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return co(e,t,r,!1,n)};Oe.version="18.3.1-next-f1338f8080-20240426";function Md(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Md)}catch(e){console.error(e)}}Md(),Mc.exports=Oe;var Lm=Mc.exports,nc=Lm;Vo.createRoot=nc.createRoot,Vo.hydrateRoot=nc.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ln(){return Ln=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ln.apply(null,arguments)}var er;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(er||(er={}));const ac="popstate";function Am(e){e===void 0&&(e={});function t(n,a){let{pathname:o,search:i,hash:l}=n.location;return Is("",{pathname:o,search:i,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:Od(a)}return Om(t,r,null,e)}function mt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Im(e,t){{typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Mm(){return Math.random().toString(36).substr(2,8)}function oc(e,t){return{usr:e.state,key:e.key,idx:t}}function Is(e,t,r,n){return r===void 0&&(r=null),Ln({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?uo(t):t,{state:r,key:t&&t.key||n||Mm()})}function Od(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function uo(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Om(e,t,r,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:o=!1}=n,i=a.history,l=er.Pop,c=null,u=m();u==null&&(u=0,i.replaceState(Ln({},i.state,{idx:u}),""));function m(){return(i.state||{idx:null}).idx}function f(){l=er.Pop;let j=m(),p=j==null?null:j-u;u=j,c&&c({action:l,location:x.location,delta:p})}function g(j,p){l=er.Push;let d=Is(x.location,j,p);u=m()+1;let h=oc(d,u),b=x.createHref(d);try{i.pushState(h,"",b)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;a.location.assign(b)}o&&c&&c({action:l,location:x.location,delta:1})}function y(j,p){l=er.Replace;let d=Is(x.location,j,p);u=m();let h=oc(d,u),b=x.createHref(d);i.replaceState(h,"",b),o&&c&&c({action:l,location:x.location,delta:0})}function v(j){let p=a.location.origin!=="null"?a.location.origin:a.location.href,d=typeof j=="string"?j:Od(j);return d=d.replace(/ $/,"%20"),mt(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let x={get action(){return l},get location(){return e(a,i)},listen(j){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(ac,f),c=j,()=>{a.removeEventListener(ac,f),c=null}},createHref(j){return t(a,j)},createURL:v,encodeLocation(j){let p=v(j);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:y,go(j){return i.go(j)}};return x}var sc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(sc||(sc={}));function Fm(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const Um=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Bm=e=>Um.test(e);function Wm(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?uo(e):e,o;if(r)if(Bm(r))o=r;else{if(r.includes("//")){let i=r;r=Fd(r),Im(!1,"Pathnames cannot have embedded double slashes - normalizing "+(i+" -> "+r))}r.startsWith("/")?o=ic(r.substring(1),"/"):o=ic(r,t)}else o=t;return{pathname:o,search:Km(n),hash:Gm(a)}}function ic(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function Fo(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Vm(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function qm(e,t){let r=Vm(e);return t?r.map((n,a)=>a===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function Hm(e,t,r,n){n===void 0&&(n=!1);let a;typeof e=="string"?a=uo(e):(a=Ln({},e),mt(!a.pathname||!a.pathname.includes("?"),Fo("?","pathname","search",a)),mt(!a.pathname||!a.pathname.includes("#"),Fo("#","pathname","hash",a)),mt(!a.search||!a.search.includes("#"),Fo("#","search","hash",a)));let o=e===""||a.pathname==="",i=o?"/":a.pathname,l;if(i==null)l=r;else{let f=t.length-1;if(!n&&i.startsWith("..")){let g=i.split("/");for(;g[0]==="..";)g.shift(),f-=1;a.pathname=g.join("/")}l=f>=0?t[f]:"/"}let c=Wm(a,l),u=i&&i!=="/"&&i.endsWith("/"),m=(o||i===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||m)&&(c.pathname+="/"),c}const Fd=e=>e.replace(/\/\/+/g,"/"),Qm=e=>Fd(e.join("/")),Km=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Gm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Ud=["post","put","patch","delete"];new Set(Ud);const Jm=["get",...Ud];new Set(Jm);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qa(){return qa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},qa.apply(null,arguments)}const Bd=w.createContext(null),Ii=w.createContext(null),Mi=w.createContext(null),Oi=w.createContext({outlet:null,matches:[],isDataRoute:!1});function Fi(){return w.useContext(Mi)!=null}function Wd(){return Fi()||mt(!1),w.useContext(Mi).location}function Vd(e){w.useContext(Ii).static||w.useLayoutEffect(e)}function Ym(){let{isDataRoute:e}=w.useContext(Oi);return e?rh():Xm()}function Xm(){Fi()||mt(!1);let e=w.useContext(Bd),{basename:t,future:r,navigator:n}=w.useContext(Ii),{matches:a}=w.useContext(Oi),{pathname:o}=Wd(),i=JSON.stringify(qm(a,r.v7_relativeSplatPath)),l=w.useRef(!1);return Vd(()=>{l.current=!0}),w.useCallback(function(u,m){if(m===void 0&&(m={}),!l.current)return;if(typeof u=="number"){n.go(u);return}let f=Hm(u,JSON.parse(i),o,m.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Qm([t,f.pathname])),(m.replace?n.replace:n.push)(f,m.state,m)},[t,n,i,o,e])}var qd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(qd||{}),Hd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Hd||{});function Zm(e){let t=w.useContext(Bd);return t||mt(!1),t}function eh(e){let t=w.useContext(Oi);return t||mt(!1),t}function th(e){let t=eh(),r=t.matches[t.matches.length-1];return r.route.id||mt(!1),r.route.id}function rh(){let{router:e}=Zm(qd.UseNavigateStable),t=th(Hd.UseNavigateStable),r=w.useRef(!1);return Vd(()=>{r.current=!0}),w.useCallback(function(a,o){o===void 0&&(o={}),r.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,qa({fromRouteId:t},o)))},[e,t])}function nh(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ah(e){let{basename:t="/",children:r=null,location:n,navigationType:a=er.Pop,navigator:o,static:i=!1,future:l}=e;Fi()&&mt(!1);let c=t.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:c,navigator:o,static:i,future:qa({v7_relativeSplatPath:!1},l)}),[c,l,o,i]);typeof n=="string"&&(n=uo(n));let{pathname:m="/",search:f="",hash:g="",state:y=null,key:v="default"}=n,x=w.useMemo(()=>{let j=Fm(m,c);return j==null?null:{location:{pathname:j,search:f,hash:g,state:y,key:v},navigationType:a}},[c,m,f,g,y,v,a]);return x==null?null:w.createElement(Ii.Provider,{value:u},w.createElement(Mi.Provider,{children:r,value:x}))}new Promise(()=>{});/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const oh="6";try{window.__reactRouterVersion=oh}catch{}const sh="startTransition",lc=jp[sh];function ih(e){let{basename:t,children:r,future:n,window:a}=e,o=w.useRef();o.current==null&&(o.current=Am({window:a,v5Compat:!0}));let i=o.current,[l,c]=w.useState({action:i.action,location:i.location}),{v7_startTransition:u}=n||{},m=w.useCallback(f=>{u&&lc?lc(()=>c(f)):c(f)},[c,u]);return w.useLayoutEffect(()=>i.listen(m),[i,m]),w.useEffect(()=>nh(n),[n]),w.createElement(ah,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:i,future:n})}var cc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(cc||(cc={}));var uc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(uc||(uc={}));const V="/api",lh=".pdf,.png,.jpg,.jpeg,.tif,.tiff,.bmp,.webp,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv",Q={ADDED:{bg:"var(--diff-added-bg)",border:"var(--diff-added-border)",text:"var(--diff-added-text)",chip:"var(--diff-added-chip)"},DELETED:{bg:"var(--diff-deleted-bg)",border:"var(--diff-deleted-border)",text:"var(--diff-deleted-text)",chip:"var(--diff-deleted-chip)"},MODIFIED:{bg:"var(--diff-modified-bg)",border:"var(--diff-modified-border)",text:"var(--diff-modified-text)",chip:"var(--diff-modified-chip)"},UNCHANGED:{bg:"var(--diff-unchanged-bg)",border:"var(--diff-unchanged-border)",text:"var(--diff-unchanged-text)",chip:"var(--diff-unchanged-chip)"},MATCH:{bg:"var(--diff-match-bg)",border:"var(--diff-match-border)",text:"var(--diff-match-text)",chip:"var(--diff-match-chip)"}},ch=`
  * { box-sizing: border-box; }
  html, body, #root { min-height: 100%; }
  body { margin: 0; overflow-x: hidden; }
  button, input, select, textarea { font: inherit; }
  button { transition: background .15s ease, border-color .15s ease, color .15s ease, opacity .15s ease, transform .15s ease; }
  button:not(:disabled):hover { transform: translateY(-1px); }
  button:disabled { transform: none; }
  code { background: #f6f1e8; border: 1px solid #e2d8c8; border-radius: 5px; padding: 1px 5px; }
  .workspace-shell {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 292px minmax(0, 1fr);
    color: #e5edf7;
    background: var(--surface);
  }
  .altrai-wordmark {
    color: var(--wordmark);
    font-family: var(--font-ui, Inter, "Segoe UI", system-ui, sans-serif);
    font-size: 18px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: 0;
  }
  .altrai-wordmark .accent {
    color: var(--brand-orange, #c45510);
  }
  .theme-light .altrai-wordmark,
  [data-theme="light"] .altrai-wordmark {
    color: var(--brand-navy, #0a1f4d);
  }
  .workspace-shell.theme-light {
    color: #0f172a;
    background: var(--surface);
  }
  @media (prefers-color-scheme: light) {
    .workspace-shell.theme-system {
      color: #0f172a;
      background: var(--surface);
    }
  }
  .workspace-shell.collapsed {
    grid-template-columns: 82px minmax(0, 1fr);
  }
  .workspace-sidebar {
    position: sticky;
    top: 0;
    height: 100vh;
    padding: 18px 14px;
    border-inline-end: 1px solid var(--border);
    background: rgba(7, 13, 24, .72);
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .theme-light .workspace-sidebar {
    background: rgba(11, 31, 58, .88);
  }
  @media (prefers-color-scheme: light) {
    .theme-system .workspace-sidebar {
      background: rgba(11, 31, 58, .88);
    }
  }
  .workspace-shell.collapsed .workspace-sidebar {
    padding-inline: 10px;
  }
  .workspace-brand {
    display: flex;
    gap: 11px;
    align-items: center;
    padding: 8px 8px 14px;
  }
  .workspace-shell.collapsed .workspace-brand {
    justify-content: center;
    padding-inline: 0;
  }

  .workspace-brand-name {
    font-weight: 600;
    color: white;
    line-height: 1.1;
  }
  .workspace-brand-subtitle {
    color: #93a4b8;
    font-size: 12px;
    margin-top: 3px;
  }
  .workspace-collapse-button {
    margin-inline-start: auto;
    width: 28px;
    height: 28px;
    border: 1px solid var(--border);
    border-radius: 9px;
    background: var(--border);
    color: #e5edf7;
    cursor: pointer;
    font-weight: 600;
  }
  .workspace-shell.collapsed .workspace-brand-copy,
  .workspace-shell.collapsed .workspace-nav-label,
  .workspace-shell.collapsed .workspace-nav-text {
    display: none;
  }
  .workspace-shell.collapsed .workspace-collapse-button {
    position: absolute;
    top: 64px;
    right: 10px;
  }
  .workspace-nav {
    overflow: auto;
    padding-inline: 2px;
    flex: 1;
  }
  .workspace-nav-group {
    margin-bottom: 16px;
  }
  .workspace-nav-label {
    color: #7d8da3;
    font-size: 11px;
    font-weight: 600;
            padding: 0 10px 7px;
  }
  .workspace-nav-item {
    width: 100%;
    border: 1px solid transparent;
    background: transparent;
    color: #c7d2df;
    border-radius: 10px;
    padding: 9px 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    text-align: start;
    font-weight: 600;
  }
  .workspace-shell.collapsed .workspace-nav-item {
    justify-content: center;
    padding: 9px 0;
  }
  .workspace-nav-item.active {
    border-color: var(--border);
    background: var(--border);
    color: white;
    box-shadow: var(--shadow-soft);
  }
  .workspace-nav-item:disabled {
    opacity: .48;
    cursor: default;
  }
  .workspace-nav-icon {
    width: 16px;
    height: 16px;
    color: var(--text-secondary);
    stroke-width: 1.5;
    flex: 0 0 auto;
  }
  .workspace-nav-item.active {
    border-left: 2px solid var(--brand-orange);
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    background: var(--surface-sunken);
    color: var(--text-primary);
    box-shadow: var(--shadow-soft);
  }
  .workspace-nav-item.active .workspace-nav-icon {
    color: var(--text-primary);
  }

  .workspace-main {
    min-width: 0;
    padding: 18px;
  }
  .user-footer {
    border-top: 1px solid var(--border);
    padding: 12px 6px 0;
    display: grid;
    grid-template-columns: 34px minmax(0, 1fr);
    gap: 9px;
    align-items: center;
    color: #e5edf7;
  }
  .user-avatar {
    width: 34px;
    height: 34px;
    border-radius: 999px;
    display: grid;
    place-items: center;
    background: var(--surface-sunken);
    border: 1px solid var(--brand-orange);
    color: #ffffff;
    font-weight: 600;
  }
  .user-meta {
    min-width: 0;
    display: grid;
    line-height: 1.2;
  }
  .user-meta strong {
    font-weight: 600;
    color: #ffffff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .user-meta span {
    color: #a8b3c2;
    font-size: 12px;
  }
  .rail-theme-toggle {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;
    margin-top: 8px;
    padding: 3px;
    border: 1px solid var(--border);
    border-radius: 999px;
    background: var(--border);
  }
  .rail-theme-toggle button {
    border: 0;
    border-radius: 999px;
    background: transparent;
    color: #cbd5e1;
    cursor: pointer;
    font-size: 11px;
    font-weight: 500;
    padding: 5px 6px;
  }
  .rail-theme-toggle button.active {
    border: 1px solid var(--brand-orange);
    background: var(--surface-raised);
    color: var(--brand-orange);
  }
  .workspace-shell.collapsed .user-footer {
    grid-template-columns: 1fr;
    justify-items: center;
    padding-inline: 0;
  }
  .workspace-topbar {
    min-height: 76px;
    border: 1px solid var(--border);
    background: var(--border);
    border-radius: 18px;
    padding: 14px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 14px;
    margin-bottom: 16px;
    box-shadow: var(--shadow-soft);
    position: relative;
  }
  .workspace-topbar::after {
    content: "";
    position: absolute;
    inset-inline: 0;
    bottom: -1px;
    height: 1px;
    background: var(--hairline-gradient);
  }
  .theme-light .workspace-topbar,
  .theme-light .command-hero,
  .theme-light .assistant-console,
  .theme-light .workspace-placeholder,
  .theme-light .workspace-lane,
  .theme-light .ask-documents-panel {
    border-color: rgba(15,23,42,.12);
    background: var(--border);
    color: #243247;
  }
  .theme-light .workspace-topbar h1,
  .theme-light .command-hero h2,
  .theme-light .workspace-placeholder h2,
  .theme-light .ask-documents-panel h2 {
    color: #0f172a;
  }
  .theme-light .workspace-secondary-action,
  .theme-light .assistant-input-shell,
  .theme-light .workspace-launch,
  .theme-light .model-strip,
  .theme-light .assistant-message.user {
    border-color: rgba(15,23,42,.12);
    background: var(--border);
    color: #172033;
  }

  .workspace-topbar h1,
  .command-hero h2,
  .workspace-placeholder h2 {
    margin: 4px 0 0;
    color: white;
    font-size: 24px;
    letter-spacing: 0;
    line-height: 1.15;
  }
  .workspace-actions,
  .command-actions {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }
  .theme-switch {
    display: inline-flex;
    gap: 3px;
    border: 1px solid var(--border);
    background: var(--border);
    padding: 3px;
    border-radius: 999px;
  }
  .theme-switch button {
    border: none;
    background: transparent;
    color: #c7d2df;
    border-radius: 999px;
    padding: 6px 8px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
      }
  .theme-switch button.active {
    border: 1px solid var(--brand-orange);
    background: var(--surface-raised);
    color: var(--brand-orange);
  }
  .workspace-primary-action,
  .workspace-secondary-action {
    border-radius: 10px;
    padding: 9px 13px;
    font-weight: 600;
    cursor: pointer;
  }
  .workspace-primary-action {
    border: 1px solid var(--border);
    background: var(--surface-raised);
    color: #0f172a;
  }
  .workspace-secondary-action {
    border: 1px solid var(--border);
    background: var(--border);
    color: #e5edf7;
  }
  .workspace-content {
    min-width: 0;
    color: #202936;
    overflow: hidden;
  }
  .command-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.35fr) minmax(360px, .85fr);
    gap: 16px;
  }
  .command-hero,
  .assistant-console,
  .workspace-placeholder,
  .workspace-lane {
    border: 1px solid var(--border);
    background: var(--border);
    border-radius: 18px;
    box-shadow: var(--shadow-soft);
  }
  .command-hero {
    min-height: 190px;
    padding: 18px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .command-hero h2 {
    max-width: 640px;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
  }
  .assistant-console {
    padding: 16px;
    min-height: 190px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .assistant-console-header {
    display: flex;
    justify-content: space-between;
    color: #e5edf7;
    font-weight: 600;
  }
  .assistant-console-header strong {
    color: #c96f1a;
    font-size: 12px;
          }
  .assistant-message {
    border-radius: 14px;
    padding: 11px 12px;
    line-height: 1.45;
    font-size: 13px;
  }
  .assistant-message.user {
    background: var(--border);
    color: white;
  }
  .assistant-message.system {
    background: var(--surface-sunken);
    color: #fff7ed;
  }
  .assistant-input-shell {
    margin-top: auto;
    border: 1px solid var(--border);
    background: var(--border);
    border-radius: 13px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    color: #aebacc;
    font-size: 13px;
  }
  .assistant-input-shell input {
    min-width: 0;
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    color: inherit;
  }
  .assistant-input-shell button:disabled {
    opacity: .5;
    cursor: default;
  }
  .assistant-input-shell button {
    border: none;
    background: #e5edf7;
    color: #0f172a;
    border-radius: 9px;
    padding: 6px 10px;
    font-weight: 600;
    cursor: pointer;
  }
  .assistant-dropzone {
    min-height: 112px;
    border: 1px dashed var(--border);
    border-radius: 16px;
    display: grid;
    place-items: center;
    color: #e5edf7;
    background: var(--surface);
    font-weight: 600;
    text-align: center;
    padding: 16px;
  }
  .assistant-dropzone.large {
    min-height: 188px;
    margin-top: 18px;
  }
  .model-strip {
    border: 1px solid var(--border);
    background: rgba(5,10,20,.24);
    border-radius: 13px;
    padding: 10px 11px;
    color: #aebacc;
    display: grid;
    gap: 3px;
  }
  .model-strip span {
    color: #c96f1a;
    font-size: 11px;
    font-weight: 600;
          }
  .model-strip strong {
    color: white;
  }
  .model-strip small {
    color: #aebacc;
    line-height: 1.35;
  }
  .ask-documents-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(360px, .85fr);
    gap: 16px;
  }
  .ask-documents-panel {
    border: 1px solid var(--border);
    background: var(--border);
    border-radius: 18px;
    padding: 18px;
    color: #c7d2df;
    min-width: 0;
    box-shadow: var(--shadow-soft);
  }
  .ask-documents-panel h2 {
    color: white;
    margin: 6px 0 0;
    font-size: 26px;
    letter-spacing: 0;
  }
  .ask-documents-panel.chat {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .processing-steps {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 8px;
    margin-top: 14px;
  }
  .processing-steps span,
  .process-status-card {
    border: 1px solid var(--brand-orange);
    background: var(--surface-sunken);
    color: #ffd08a;
    border-radius: 12px;
    padding: 10px 12px;
    font-size: 13px;
    font-weight: 600;
    text-align: center;
  }
  .processing-steps span.active {
    border-color: #b85b16;
    background: var(--surface-sunken);
    color: #ffffff;
  }
  .theme-light .processing-steps span,
  .theme-light .process-status-card {
    border-color: #fed7aa;
    background: var(--surface-sunken);
    color: #92400e;
  }
  .theme-light .processing-steps span.active {
    border-color: #b85b16;
    background: var(--surface-sunken);
    color: #7c2d12;
  }
  .ask-status {
    margin-top: 14px;
    border: 1px solid var(--border);
    background: var(--border);
    color: #e5edf7;
    border-radius: 12px;
    padding: 10px 11px;
    display: flex;
    justify-content: space-between;
    gap: 12px;
  }
  .theme-light .ask-status {
    border-color: rgba(15,23,42,.12);
    background: var(--border);
    color: #172033;
  }
  .ask-error {
    margin-top: 12px;
    border: 1px solid #fecaca;
    background: #fff1f2;
    color: #991b1b;
    border-radius: 12px;
    padding: 10px 11px;
    font-weight: 600;
  }
  .ask-results {
    max-height: 260px;
    overflow: auto;
    display: grid;
    gap: 8px;
  }
  .ask-results div {
    border: 1px solid var(--border);
    background: var(--border);
    border-radius: 12px;
    padding: 9px 10px;
    display: grid;
    gap: 4px;
    color: #c7d2df;
  }
  .ask-results strong {
    color: #c96f1a;
    font-size: 12px;
  }
  .ask-results span {
    line-height: 1.4;
    font-size: 13px;
  }
  .theme-light .ask-results div {
    border-color: rgba(15,23,42,.12);
    background: var(--border);
    color: #243247;
  }
  .theme-light .ask-results strong {
    color: #9a3412;
  }
  .workspace-lane {
    grid-column: 1 / -1;
    padding: 12px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
  }
  .workspace-launch {
    border: 1px solid var(--border);
    background: var(--border);
    border-radius: 14px;
    padding: 15px;
    color: white;
    cursor: pointer;
    text-align: start;
  }
  .workspace-launch span {
    display: block;
    font-weight: 600;
    margin-bottom: 6px;
  }
  .workspace-launch small {
    color: #b7c4d4;
    line-height: 1.4;
  }
  .workspace-placeholder {
    padding: 24px;
    color: #c7d2df;
  }
  .workspace-placeholder p {
    max-width: 780px;
    line-height: 1.55;
    color: #c7d2df;
  }
  .placeholder-list {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-top: 18px;
  }
  .placeholder-list span {
    border: 1px solid var(--border);
    background: var(--border);
    color: white;
    border-radius: 999px;
    padding: 6px 10px;
    font-weight: 600;
    font-size: 13px;
  }
  .workflow-panel,
  .comparison-workspace,
  .workspace-surface,
  .session-board,
  .doc-workflow-card,
  .query-panel,
  .query-answer,
  .query-results-shell {
    border: 1px solid var(--border);
    background: var(--border);
    color: #e5edf7;
    border-radius: 16px;
    box-shadow: var(--shadow-soft);
  }
  .theme-light .workflow-panel,
  .theme-light .comparison-workspace,
  .theme-light .workspace-surface,
  .theme-light .session-board,
  .theme-light .doc-workflow-card,
  .theme-light .query-panel,
  .theme-light .query-answer,
  .theme-light .query-results-shell {
    border-color: rgba(11,31,58,.12);
    background: var(--border);
    color: #132033;
    box-shadow: var(--shadow-soft);
  }
  @media (prefers-color-scheme: light) {
    .theme-system .workflow-panel,
    .theme-system .comparison-workspace,
    .theme-system .workspace-surface,
    .theme-system .session-board,
    .theme-system .doc-workflow-card,
    .theme-system .query-panel,
    .theme-system .query-answer,
    .theme-system .query-results-shell {
      border-color: rgba(11,31,58,.12);
      background: var(--border);
      color: #132033;
      box-shadow: var(--shadow-soft);
    }
  }
  .workflow-panel,
  .session-board,
  .comparison-workspace {
    padding: 14px;
  }
  .comparison-flow {
    display: grid;
    gap: 14px;
  }
  .workspace-surface {
    padding: 12px;
    min-width: 0;
    overflow: hidden;
  }
  .surface-title-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 12px;
  }
  .surface-title-row h3 {
    margin: 0;
    color: var(--text-primary);
    font-size: 16px;
    font-weight: 700;
  }
  .surface-title-row p {
    margin: 4px 0 0;
    color: var(--text-secondary);
    font-size: 13px;
    line-height: 1.4;
  }
  .workflow-card-head,
  .board-head,
  .comparison-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    margin-bottom: 14px;
  }
  .workflow-card-head h2,
  .board-head h2,
  .comparison-head h2,
  .query-panel h2 {
    margin: 2px 0 0;
    font-size: 18px;
    line-height: 1.25;
    font-weight: 600;
    color: #ffffff;
  }
  .theme-light .workflow-card-head h2,
  .theme-light .board-head h2,
  .theme-light .comparison-head h2,
  .theme-light .query-panel h2 {
    color: #0b1f3a;
  }
  @media (prefers-color-scheme: light) {
    .theme-system .workflow-card-head h2,
    .theme-system .board-head h2,
    .theme-system .comparison-head h2,
    .theme-system .query-panel h2 {
      color: #0b1f3a;
    }
  }
  .usecase-selector {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 10px;
    align-items: end;
    margin: 0 0 12px;
  }
  .usecase-selector label {
    display: grid;
    gap: 6px;
    color: #aebacc;
    font-size: 12px;
    font-weight: 600;
  }
  .usecase-selector select {
    min-height: 42px;
    width: 100%;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--surface-sunken);
    color: #ffffff;
    padding: 0 11px;
    font: inherit;
    outline: none;
  }
  .usecase-selector select:focus {
    border-color: rgba(201,111,26,.68);
    box-shadow: 0 0 0 3px rgba(201,111,26,.16);
  }
  .usecase-selector select:disabled {
    opacity: .64;
    cursor: default;
  }
  .usecase-error {
    grid-column: 1 / -1;
    margin: -2px 0 0;
    color: #fecaca;
    font-size: 12px;
    line-height: 1.35;
  }
  .usecase-required {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 10px;
    align-items: center;
    margin: 0 0 12px;
    padding: 12px;
    border-radius: 12px;
    border: 1px solid rgba(201,111,26,.32);
    background: rgba(201,111,26,.10);
    color: #e5edf7;
  }
  .usecase-required strong {
    display: block;
    margin-bottom: 3px;
    color: #ffd08a;
    font-size: 13px;
    font-weight: 700;
  }
  .usecase-required p {
    margin: 0;
    color: #aebacc;
    font-size: 12px;
    line-height: 1.4;
  }
  .theme-light .usecase-selector label {
    color: #64748b;
  }
  .theme-light .usecase-selector select {
    border-color: rgba(11,31,58,.12);
    background: #ffffff;
    color: #0b1f3a;
  }
  .theme-light .usecase-error {
    color: #991b1b;
  }
  .theme-light .usecase-required {
    border-color: rgba(201,111,26,.26);
    background: #fff7ed;
    color: #0b1f3a;
  }
  .theme-light .usecase-required strong {
    color: #9a4b13;
  }
  .theme-light .usecase-required p {
    color: #64748b;
  }
  @media (prefers-color-scheme: light) {
    .theme-system .usecase-selector label {
      color: #64748b;
    }
    .theme-system .usecase-selector select {
      border-color: rgba(11,31,58,.12);
      background: #ffffff;
      color: #0b1f3a;
    }
    .theme-system .usecase-error {
      color: #991b1b;
    }
    .theme-system .usecase-required {
      border-color: rgba(201,111,26,.26);
      background: #fff7ed;
      color: #0b1f3a;
    }
    .theme-system .usecase-required strong {
      color: #9a4b13;
    }
    .theme-system .usecase-required p {
      color: #64748b;
    }
  }

  .upload-grid {
    display: grid;
    gap: 12px;
    align-items: stretch;
  }
  .upload-grid.compare {
    grid-template-columns: minmax(220px, 1fr) minmax(220px, 1fr) 210px;
  }
  .upload-grid.extract {
    grid-template-columns: minmax(280px, 1fr) 220px;
  }
  .file-lane {
    min-height: 132px;
    border: 1px dashed var(--border);
    border-radius: 14px;
    background: var(--border);
    padding: 14px;
    cursor: pointer;
    outline: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .file-lane:focus-visible {
    box-shadow: var(--shadow-soft);
  }
  .file-lane.disabled {
    cursor: default;
    opacity: .72;
  }
  .theme-light .file-lane {
    border-color: rgba(11,31,58,.18);
    background: var(--border);
  }
  .file-lane-head {
    display: flex;
    gap: 12px;
    justify-content: space-between;
  }
  .file-lane-title {
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
  }
  .theme-light .file-lane-title {
    color: #0b1f3a;
  }
  .file-lane-helper,
  .workflow-note {
    color: #aebacc;
    font-size: 12px;
    line-height: 1.35;
  }
  .theme-light .file-lane-helper,
  .theme-light .workflow-note {
    color: #64748b;
  }
  .file-lane-pill,
  .comparison-id,
  .board-actions span {
    border: 1px solid var(--brand-orange);
    background: var(--surface-sunken);
    color: #ffd08a;
    border-radius: 999px;
    padding: 4px 8px;
    height: fit-content;
    font-size: 11px;
    font-weight: 600;
  }
  .theme-light .file-lane-pill,
  .theme-light .comparison-id,
  .theme-light .board-actions span {
    color: #92400e;
    background: var(--surface-sunken);
    border-color: #fed7aa;
  }
  .file-lane-value {
    margin-top: 18px;
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 10px 11px;
    background: rgba(5,10,20,.22);
    color: #aebacc;
    font-size: 13px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .file-lane-value.selected {
    color: #ffffff;
  }
  .theme-light .file-lane-value {
    border-color: rgba(11,31,58,.12);
    background: var(--border);
    color: #64748b;
  }
  .theme-light .file-lane-value.selected {
    color: #0b1f3a;
  }
  .workflow-action-rail {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .primary-action,
  .ghost-action,
  .danger-action {
    border-radius: 10px;
    padding: 9px 12px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
  }
  .primary-action {
    border: 1px solid var(--brand-navy);
    background: var(--brand-navy);
    color: #ffffff;
  }
  .ghost-action {
    border: 1px solid var(--border);
    background: var(--border);
    color: #e5edf7;
  }
  .danger-action {
    border: 1px solid rgba(248,113,113,.36);
    background: rgba(248,113,113,.10);
    color: #fecaca;
  }
  .theme-light .ghost-action {
    border-color: rgba(11,31,58,.12);
    background: var(--border);
    color: #0b1f3a;
  }
  .theme-light .danger-action {
    color: #991b1b;
    background: #fff1f2;
    border-color: #fecaca;
  }
  .primary-action.full {
    width: 100%;
    min-height: 42px;
  }
  .primary-action.compact,
  .ghost-action.compact,
  .danger-action.compact {
    padding: 7px 10px;
  }
  .primary-action:disabled,
  .ghost-action:disabled,
  .danger-action:disabled {
    opacity: .48;
    cursor: default;
  }
  .stats-strip {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 12px;
  }
  .stat-chip {
    display: inline-flex;
    align-items: baseline;
    gap: 6px;
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 6px 10px;
    background: var(--border);
    color: #dbe5f2;
    font-size: 12px;
  }
  .stat-chip strong {
    font-weight: 600;
    color: #ffffff;
  }
  .stat-chip.added strong { color: #86efac; }
  .stat-chip.deleted strong { color: #fca5a5; }
  .stat-chip.modified strong { color: #fbbf24; }
  .theme-light .stat-chip {
    border-color: rgba(11,31,58,.12);
    background: var(--border);
    color: #475569;
  }
  .theme-light .stat-chip strong {
    color: #0b1f3a;
  }
  .workspace-tabs {
    display: flex;
    gap: 6px;
    margin-bottom: 12px;
    overflow-x: auto;
  }
  .workspace-tabs button {
    border: 1px solid var(--border);
    background: var(--border);
    color: #dbe5f2;
    border-radius: 999px;
    padding: 8px 12px;
    cursor: pointer;
    font-weight: 600;
    white-space: nowrap;
  }
  .workspace-tabs button.active {
    background: var(--surface-sunken);
    color: var(--text-primary);
    border-color: var(--border);
    border-bottom-color: var(--brand-orange);
  }
  .theme-light .workspace-tabs button {
    border-color: rgba(11,31,58,.12);
    background: var(--border);
    color: #0b1f3a;
  }
  .theme-light .workspace-tabs button.active {
    background: #0b1f3a;
    color: #ffffff;
    border-color: #0b1f3a;
  }
  .board-actions,
  .job-actions,
  .query-presets,
  .query-input-row {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: center;
  }
  .job-list {
    display: grid;
    gap: 10px;
  }
  .job-card {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 270px;
    gap: 14px;
    border: 1px solid var(--border);
    background: var(--border);
    border-radius: 14px;
    padding: 13px;
  }
  .theme-light .job-card {
    border-color: rgba(11,31,58,.12);
    background: var(--border);
  }
  .job-kind {
    color: #c96f1a;
    font-size: 11px;
    font-weight: 600;
          }
  .job-card h3 {
    margin: 4px 0 8px;
    color: #ffffff;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.35;
  }
  .theme-light .job-card h3 {
    color: #0b1f3a;
  }
  .job-meta {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    color: #aebacc;
    font-size: 12px;
  }
  .theme-light .job-meta {
    color: #64748b;
  }
  .job-card p {
    margin: 8px 0 0;
    color: #c7d2df;
    font-size: 12px;
    line-height: 1.4;
  }
  .theme-light .job-card p {
    color: #475569;
  }
  .job-card .job-error {
    color: #fecaca;
  }
  .theme-light .job-card .job-error {
    color: #991b1b;
  }
  .job-side {
    display: grid;
    gap: 8px;
    align-content: start;
  }
  .job-date {
    color: #aebacc;
    font-size: 12px;
  }
  .theme-light .job-date {
    color: #64748b;
  }
  .query-workbench {
    display: grid;
    gap: 12px;
  }
  .query-panel,
  .query-answer,
  .query-results-shell {
    padding: 14px;
  }
  .query-panel-head,
  .key-audit-head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
  }
  .query-panel-head p,
  .key-audit-head p {
    margin: 4px 0 0;
    color: var(--text-secondary);
    font-size: 13px;
    line-height: 1.45;
  }
  .query-mode-toggle {
    display: inline-flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border);
    border-radius: 999px;
    background: var(--surface-sunken);
  }
  .query-mode-toggle button {
    border: 0;
    border-radius: 999px;
    padding: 6px 11px;
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
    font-weight: 650;
  }
  .query-mode-toggle button.active {
    background: var(--brand-orange);
    color: #fff;
  }
  .query-mode-toggle button:disabled {
    opacity: .55;
    cursor: default;
  }
  .query-model-row {
    display: grid;
    gap: 6px;
    max-width: 360px;
    margin-top: 12px;
    color: var(--text-secondary);
    font-size: 12px;
    font-weight: 650;
  }
  .query-model-row select {
    min-height: 40px;
    border: 1px solid var(--border);
    border-radius: 11px;
    background: var(--surface-sunken);
    color: var(--text-primary);
    padding: 0 10px;
    outline: none;
  }
  .query-presets {
    margin: 12px 0;
  }
  .preset-chip {
    border: 1px solid var(--border);
    background: var(--border);
    color: #dbe5f2;
    border-radius: 999px;
    padding: 6px 10px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
  }
  .theme-light .preset-chip {
    border-color: rgba(11,31,58,.12);
    background: var(--border);
    color: #0b1f3a;
  }
  .query-input-row {
    flex-wrap: nowrap;
  }
  .query-input-row input {
    min-width: 0;
    flex: 1;
    border: 1px solid var(--border);
    background: rgba(5,10,20,.22);
    color: #ffffff;
    border-radius: 11px;
    padding: 10px 11px;
    outline: none;
  }
  .theme-light .query-input-row input {
    border-color: rgba(11,31,58,.12);
    background: var(--border);
    color: #0b1f3a;
  }
  .query-answer {
    line-height: 1.5;
    color: #dbe5f2;
  }
  .theme-light .query-answer {
    color: #132033;
  }
  .query-chat-log {
    display: grid;
    gap: 10px;
  }
  .query-message {
    max-width: min(860px, 92%);
    border: 1px solid var(--border);
    border-radius: 13px;
    padding: 12px 13px;
    background: var(--surface-raised);
    color: var(--text-primary);
  }
  .query-message.user {
    justify-self: end;
    background: var(--brand-navy);
    border-color: rgba(255,255,255,.12);
    color: #fff;
  }
  .query-message.assistant {
    justify-self: start;
  }
  .query-message.error {
    border-color: rgba(239,68,68,.38);
  }
  .query-message-meta,
  .query-usage {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 650;
    margin-bottom: 6px;
  }
  .query-message.user .query-message-meta {
    color: rgba(255,255,255,.72);
  }
  .query-message-text {
    white-space: pre-wrap;
    line-height: 1.5;
  }
  .query-warning {
    margin-top: 8px;
    color: var(--diff-deleted-text);
    font-size: 12px;
    font-weight: 650;
  }
  .query-usage {
    justify-content: flex-start;
    margin: 8px 0 0;
    padding-top: 7px;
    border-top: 1px dashed var(--border);
  }
  .query-usage-strip {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 9px 12px;
    background: var(--surface-raised);
    color: var(--text-secondary);
    font-size: 12px;
  }
  .query-usage-strip strong {
    color: var(--brand-orange);
  }
  .query-evidence {
    margin-top: 9px;
  }
  .query-composer {
    border: 1px solid var(--border);
    border-radius: 14px;
    background: var(--surface-raised);
    padding: 10px;
    display: grid;
    gap: 9px;
  }
  .query-composer textarea {
    width: 100%;
    resize: vertical;
    min-height: 76px;
    border: 1px solid var(--border);
    border-radius: 12px;
    background: var(--surface-sunken);
    color: var(--text-primary);
    padding: 10px 11px;
    outline: none;
    font: inherit;
    line-height: 1.45;
  }
  .query-composer-actions {
    display: flex;
    align-items: end;
    justify-content: flex-end;
    gap: 8px;
    flex-wrap: wrap;
  }
  .query-composer-actions label {
    display: grid;
    gap: 4px;
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 700;
  }
  .query-composer-actions select {
    min-height: 34px;
    min-width: 140px;
    border: 1px solid var(--border);
    border-radius: 10px;
    background: var(--surface-sunken);
    color: var(--text-primary);
    padding: 0 9px;
    outline: none;
  }
  .query-result {
    border-inline-start: 4px solid #b85b16;
    border-radius: 12px;
    background: var(--border);
    padding: 11px 12px;
    color: #dbe5f2;
    font-size: 13px;
  }
  .query-result-head {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 6px;
    color: #aebacc;
  }
  .key-audit-panel {
    border: 1px solid var(--border);
    border-radius: 14px;
    background: var(--surface-raised);
    padding: 13px;
    margin-bottom: 12px;
    box-shadow: var(--shadow-soft);
  }
  .key-audit-panel.compact {
    margin-bottom: 0;
    box-shadow: none;
  }
  .key-audit-empty {
    border: 1px dashed var(--border);
    border-radius: 12px;
    background: var(--surface-sunken);
    color: var(--text-secondary);
    padding: 14px;
    font-size: 13px;
  }
  .key-audit-head h3 {
    margin: 0;
    color: var(--text-primary);
    font-size: 16px;
    font-weight: 700;
  }
  .key-audit-list {
    display: grid;
    gap: 8px;
    margin-top: 12px;
  }
  .key-audit-item {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    gap: 10px;
    align-items: center;
    border: 1px solid var(--border);
    border-radius: 12px;
    background: var(--surface-sunken);
    padding: 10px;
  }
  .key-audit-copy {
    min-width: 0;
    display: grid;
    gap: 3px;
  }
  .key-audit-copy strong {
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 700;
  }
  .key-audit-copy span,
  .key-audit-copy small {
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.35;
  }
  .key-audit-toggle {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 12px;
  }
  .query-evidence .key-audit-toggle {
    display: inline-flex;
    margin-bottom: 8px;
    border: 0;
    background: transparent;
    color: var(--brand-orange);
    padding: 0;
    font-weight: 700;
    cursor: pointer;
  }
  .key-audit-more {
    justify-self: start;
    margin-top: 10px;
    border: 1px solid var(--border);
    border-radius: 999px;
    background: var(--surface-sunken);
    color: var(--text-primary);
    padding: 6px 10px;
    font-weight: 700;
    cursor: pointer;
  }
  @media (prefers-color-scheme: light) {
    .theme-system .workflow-card-head h2,
    .theme-system .board-head h2,
    .theme-system .comparison-head h2,
    .theme-system .query-panel h2,
    .theme-system .file-lane-title,
    .theme-system .job-card h3 {
      color: #0b1f3a;
    }
    .theme-system .file-lane {
      border-color: rgba(11,31,58,.18);
      background: var(--border);
    }
    .theme-system .file-lane-helper,
    .theme-system .workflow-note,
    .theme-system .job-meta,
    .theme-system .job-date {
      color: #64748b;
    }
    .theme-system .file-lane-value,
    .theme-system .query-input-row input {
      border-color: rgba(11,31,58,.12);
      background: var(--border);
      color: #0b1f3a;
    }
    .theme-system .file-lane-pill,
    .theme-system .comparison-id,
    .theme-system .board-actions span {
      color: #92400e;
      background: var(--surface-sunken);
      border-color: #fed7aa;
    }
    .theme-system .ghost-action,
    .theme-system .preset-chip,
    .theme-system .workspace-tabs button {
      border-color: rgba(11,31,58,.12);
      background: var(--border);
      color: #0b1f3a;
    }
    .theme-system .danger-action {
      color: #991b1b;
      background: #fff1f2;
      border-color: #fecaca;
    }
    .theme-system .stat-chip {
      border-color: rgba(11,31,58,.12);
      background: var(--border);
      color: #475569;
    }
    .theme-system .stat-chip strong {
      color: #0b1f3a;
    }
    .theme-system .workspace-tabs button.active {
      background: #0b1f3a;
      color: #ffffff;
      border-color: #0b1f3a;
    }
    .theme-system .job-card {
      border-color: rgba(11,31,58,.12);
      background: var(--border);
    }
    .theme-system .job-card p {
      color: #475569;
    }
    .theme-system .query-answer {
      color: #132033;
    }
    .theme-system .processing-steps span,
    .theme-system .process-status-card {
      border-color: #fed7aa;
      background: var(--surface-sunken);
      color: #92400e;
    }
    .theme-system .processing-steps span.active {
      border-color: #b85b16;
      background: var(--surface-sunken);
      color: #7c2d12;
    }
  }
  .dl-scrollbar::-webkit-scrollbar { height: 10px; width: 10px; }
  .dl-scrollbar::-webkit-scrollbar-thumb { background: #c9c0b0; border-radius: 999px; }
  .dl-scrollbar::-webkit-scrollbar-track { background: #f2ece2; }
  .processing-state {
    margin-top: 20px;
    color: var(--text-primary);
  }
  .processing-state-head {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 7px;
    color: var(--text-primary);
    font-size: 13px;
  }
  .processing-state p {
    margin: 10px 0 0;
    color: var(--text-secondary);
    font-size: 13px;
  }
  .progress-track {
    height: 7px;
    background: color-mix(in srgb, var(--border) 60%, transparent);
    border-radius: 999px;
    overflow: hidden;
    position: relative;
  }
  .progress-fill {
    height: 100%;
    min-width: 7%;
    border-radius: 999px;
    overflow: hidden;
    position: relative;
    background: linear-gradient(90deg, #c45510, #e08a2e);
    transition: width 450ms ease, background 250ms ease;
  }
  .progress-fill.running,
  .progress-fill.queued,
  .progress-fill.uploading {
    background: linear-gradient(90deg, #c45510 0%, #e08a2e 45%, #0a1f4d 100%);
  }
  .progress-fill.complete {
    background: linear-gradient(90deg, #1f7e41, #37a36a);
  }
  .progress-fill.failed {
    background: linear-gradient(90deg, #b02e2e, #d75a4a);
  }
  .progress-fill.running::after,
  .progress-fill.queued::after,
  .progress-fill.uploading::after {
    content: "";
    position: absolute;
    inset: 0;
    transform: translateX(-100%);
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.62), transparent);
    animation: progress-shimmer 1.45s ease-in-out infinite;
  }
  @keyframes progress-shimmer {
    100% { transform: translateX(100%); }
  }
  .grid-safe {
    min-width: 0;
  }
  .viewer-grid {
    align-items: start;
    min-width: 0;
  }
  .viewer-grid > * {
    min-width: 0;
  }
  .doc-viewer-shell {
    min-width: 0;
  }
  .doc-frame {
    position: relative;
    border: 1px solid #b7ae9f;
    background: #f9f6ef;
    min-height: 520px;
    overflow: visible;
  }
  .doc-frame.native {
    background: #f7f2e9;
  }
  .native-page {
    width: 100%;
    min-width: 0;
    min-height: 520px;
    padding: 14px;
    color: #1f2937;
  }
  .native-page.document {
    max-width: 980px;
    margin: 0 auto;
    background: #fffdf8;
    box-shadow: var(--shadow-soft);
  }
  .native-page.spreadsheet {
    min-width: 100%;
    background: #fffdf8;
  }
  .native-block {
    max-width: 100%;
    overflow-wrap: anywhere;
  }
  .native-token {
    border-radius: 4px;
    padding: 0 2px;
  }
  .native-token-delete,
  .native-token-replace-base {
    color: #9f2525;
    background: rgba(218,54,54,.16);
    text-decoration: line-through;
    text-decoration-thickness: 1px;
  }
  .native-token-insert,
  .native-token-replace-target {
    color: #176c38;
    background: rgba(31,160,70,.16);
    font-weight: 600;
  }
  .native-table-wrap {
    max-width: 100%;
    overflow-x: auto;
    border: 1px solid #e9dfd0;
    border-radius: 6px;
    background: #fffdf8;
  }
  .native-table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
  }
  .native-table.spreadsheet {
    table-layout: auto;
    min-width: 720px;
  }
  .native-table th,
  .native-table td {
    overflow-wrap: anywhere;
    vertical-align: top;
  }
  .table-selected-stack {
    display: grid;
    grid-template-columns: 1fr;
    gap: 14px;
    margin-bottom: 14px;
    min-width: 0;
  }
  .table-preview-shell {
    max-width: 100%;
    min-width: 0;
    overflow: hidden;
  }
  .table-scroll-frame {
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    border: 1px solid #eee7dc;
    border-radius: 8px;
  }
  .viewer-toolbar-group {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    margin-inline-start: 6px;
    border: 1px solid var(--border);
    background: var(--surface-sunken);
    color: var(--text-primary);
    border-radius: var(--radius-md);
    padding: 4px 7px;
  }
  .viewer-toolbar-group button {
    min-width: 28px;
    min-height: 26px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-primary);
    cursor: pointer;
    font-weight: 600;
  }
  .viewer-toolbar-group button:hover {
    border-color: var(--border);
    background: var(--surface-raised);
  }
  .viewer-toolbar-group span {
    min-width: 44px;
    text-align: center;
    font-size: 13px;
    font-weight: 600;
  }
  .viewer-sync-toggle {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
  }
  .viewer-sync-toggle input {
    accent-color: var(--brand-orange);
  }
  .pdf-zoom-stage {
    position: relative;
    transform-origin: top left;
    transition: width 120ms ease;
  }
  th.vertical-th {
    padding: 10px 4px !important;
    height: 132px;
    min-width: 32px;
    max-width: 54px;
    vertical-align: bottom !important;
    text-align: center;
  }
  .vertical-th-text {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    white-space: nowrap;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
  }
  .cell-wrap {
    white-space: normal;
    overflow-wrap: anywhere;
    word-break: normal;
  }
  .cell-truncate {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  @media (max-width: 1200px) {
    .command-grid,
    .ask-documents-grid {
      grid-template-columns: 1fr;
    }
    .table-picker-grid, .table-config-grid {
      grid-template-columns: 1fr !important;
    }
  }
  @media (max-width: 760px) {
    .table-action-grid {
      grid-template-columns: 1fr !important;
    }
    .table-action-grid button {
      width: 100%;
    }
  }
  @media (max-width: 980px) {
    .workspace-shell {
      grid-template-columns: 1fr;
    }
    .workspace-shell.collapsed {
      grid-template-columns: 1fr;
    }
    .workspace-sidebar {
      position: relative;
      height: auto;
      border-inline-end: none;
      border-bottom: 1px solid var(--border);
    }
    .workspace-nav {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 8px;
    }
    .workspace-shell.collapsed .workspace-brand-copy,
    .workspace-shell.collapsed .workspace-nav-label,
    .workspace-shell.collapsed .workspace-nav-text {
      display: block;
    }
    .workspace-shell.collapsed .workspace-nav-item {
      justify-content: flex-start;
      padding: 9px 10px;
    }
    .workspace-shell.collapsed .workspace-collapse-button {
      position: static;
    }
    .workspace-nav-group {
      margin-bottom: 0;
    }
    .workspace-main {
      padding: 12px;
    }
    .workspace-topbar,
    .workspace-lane {
      grid-template-columns: 1fr;
    }
    .processing-steps {
      grid-template-columns: 1fr 1fr;
    }
    .upload-grid, .viewer-grid, .two-grid, .report-metrics, .table-picker-grid, .table-config-grid {
      grid-template-columns: 1fr !important;
    }
    .job-card {
      grid-template-columns: 1fr;
    }
    .job-side {
      grid-template-columns: 1fr;
    }
    .query-input-row {
      flex-wrap: wrap;
    }
    .query-input-row input,
    .query-input-row button {
      width: 100%;
    }
    .header-actions { justify-content: flex-start !important; }
  }

  /* Product polish layer: compact shell, stable collapse, and accessible palette. */
  .workspace-shell {
    --navy-950: #061427;
    --navy-900: #0b1f3a;
    --navy-800: #12345a;
    --orange-700: #b85b16;
    --orange-600: #c96f1a;
    --orange-100: #fff3e6;
    --text-900: #111827;
    --text-700: #374151;
    --text-500: #6b7280;
    --line-light: rgba(15, 23, 42, .12);
    --line-dark: rgba(255, 255, 255, .14);
    --surface-dark: rgba(8, 20, 38, .78);
    --surface-light: rgba(255, 255, 255, .88);
    grid-template-columns: 276px minmax(0, 1fr);
    background: var(--surface);
  }
  .workspace-shell.theme-light {
    background: var(--surface);
  }
  @media (prefers-color-scheme: light) {
    .workspace-shell.theme-system {
      background: var(--surface);
    }
  }
  .workspace-shell.collapsed {
    grid-template-columns: 74px minmax(0, 1fr);
  }
  .workspace-sidebar {
    padding: 14px 12px;
    background: rgba(5, 16, 32, .88);
  }
  .theme-light .workspace-sidebar {
    background: var(--navy-900);
  }
  .workspace-brand {
    min-height: 48px;
    padding: 6px;
  }

  .workspace-brand-name {
    font-weight: 600;
  }
  .workspace-collapse-button {
    width: 30px;
    height: 30px;
    border-radius: 9px;
    display: grid;
    place-items: center;
  }
  .workspace-shell.collapsed .workspace-brand {
    flex-direction: column;
    justify-content: flex-start;
    gap: 8px;
  }
  .workspace-shell.collapsed .workspace-collapse-button {
    position: static;
    margin: 0;
  }
  .workspace-shell.collapsed .workspace-nav {
    padding-inline: 0;
  }
  .workspace-shell.collapsed .workspace-nav-group {
    margin-bottom: 12px;
  }
  .workspace-shell.collapsed .workspace-nav-item {
    width: 48px;
    height: 44px;
    margin-inline: auto;
    padding: 0;
    justify-content: center;
  }
  .workspace-main {
    padding: 14px;
  }
  .workspace-topbar,
  .command-hero,
  .assistant-console,
  .workspace-placeholder,
  .workspace-lane,
  .workflow-panel,
  .comparison-workspace,
  .workspace-surface,
  .session-board,
  .doc-workflow-card,
  .ask-documents-panel,
  .chat-workbench,
  .chat-thread,
  .chat-composer {
    border-radius: 12px;
    border-color: var(--line-dark);
    background: var(--surface-dark);
    box-shadow: var(--shadow-soft);
  }
  .theme-light .workspace-topbar,
  .theme-light .command-hero,
  .theme-light .assistant-console,
  .theme-light .workspace-placeholder,
  .theme-light .workspace-lane,
  .theme-light .workflow-panel,
  .theme-light .comparison-workspace,
  .theme-light .workspace-surface,
  .theme-light .session-board,
  .theme-light .doc-workflow-card,
  .theme-light .ask-documents-panel,
  .theme-light .chat-workbench,
  .theme-light .chat-thread,
  .theme-light .chat-composer {
    border-color: var(--line-light);
    background: var(--surface-light);
    color: var(--text-900);
    box-shadow: var(--shadow-soft);
  }
  @media (prefers-color-scheme: light) {
    .theme-system .workspace-topbar,
    .theme-system .command-hero,
    .theme-system .assistant-console,
    .theme-system .workspace-placeholder,
    .theme-system .workspace-lane,
    .theme-system .workflow-panel,
    .theme-system .comparison-workspace,
    .theme-system .workspace-surface,
    .theme-system .session-board,
    .theme-system .doc-workflow-card,
    .theme-system .ask-documents-panel,
    .theme-system .chat-workbench,
    .theme-system .chat-thread,
    .theme-system .chat-composer {
      border-color: var(--line-light);
      background: var(--surface-light);
      color: var(--text-900);
      box-shadow: var(--shadow-soft);
    }
  }
    .job-kind,
  .model-strip span,
  .assistant-console-header strong,
  .ask-results strong {
    color: var(--orange-600);
  }
  .workspace-topbar h1,
  .command-hero h2,
  .workflow-card-head h2,
  .board-head h2,
  .comparison-head h2,
  .chat-empty h2,
  .ask-documents-panel h2,
  .assistant-console-header,
  .file-lane-title,
  .job-card h3 {
    color: #ffffff;
    font-weight: 600;
  }
  .theme-light .workspace-topbar h1,
  .theme-light .command-hero h2,
  .theme-light .workflow-card-head h2,
  .theme-light .board-head h2,
  .theme-light .comparison-head h2,
  .theme-light .chat-empty h2,
  .theme-light .ask-documents-panel h2,
  .theme-light .assistant-console-header,
  .theme-light .file-lane-title,
  .theme-light .job-card h3 {
    color: var(--text-900);
  }
  .workspace-primary-action,
  .primary-action {
    background: var(--brand-navy);
    border-color: var(--brand-navy);
    color: #ffffff;
  }
  .theme-switch button.active,
  .workspace-tabs button.active {
    background: var(--surface-sunken);
    border-color: var(--border);
    border-bottom-color: var(--brand-orange);
    color: var(--text-primary);
  }
  .workspace-secondary-action,
  .ghost-action,
  .preset-chip,
  .workspace-tabs button {
    border-color: var(--border);
    background: var(--border);
    color: #e5edf7;
  }
  .theme-light .workspace-secondary-action,
  .theme-light .ghost-action,
  .theme-light .preset-chip,
  .theme-light .workspace-tabs button,
  .theme-light .theme-switch {
    border-color: var(--line-light);
    background: #ffffff;
    color: var(--text-900);
  }
  .command-grid {
    grid-template-columns: minmax(0, 1fr) minmax(320px, .55fr);
    gap: 12px;
  }
  .command-hero,
  .assistant-console {
    min-height: 0;
    padding: 14px;
  }
  .command-hero {
    justify-content: flex-start;
  }
  .command-hero h2 {
    font-size: 20px;
    margin: 4px 0 14px;
  }
  .command-tiles {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
  }
  .workspace-lane {
    padding: 10px;
  }
  .workspace-launch {
    min-height: 86px;
    border-radius: 10px;
    padding: 12px;
  }
  .theme-light .workspace-launch small,
  .theme-light .workspace-placeholder p,
  .theme-light .model-strip small,
  .theme-light .assistant-input-shell,
  .theme-light .file-lane-helper,
  .theme-light .workflow-note,
  .theme-light .job-meta,
  .theme-light .job-date {
    color: var(--text-500);
  }
  .upload-grid.compare {
    grid-template-columns: minmax(220px, 1fr) minmax(220px, 1fr) 190px;
    align-items: stretch;
  }
  .doc-workflow-card,
  .workflow-panel,
  .comparison-workspace,
  .session-board {
    padding: 12px;
  }
  .file-lane {
    min-height: 116px;
    border-style: solid;
    border-color: var(--border);
    border-radius: 10px;
    background: var(--border);
  }
  .theme-light .file-lane {
    border-color: var(--line-light);
    background: #ffffff;
  }
  .file-lane-pill {
    display: none;
  }
  .file-lane-value {
    border-radius: 8px;
    margin-top: 14px;
  }
  .workflow-action-rail {
    justify-content: space-between;
  }
  .process-status-card,
  .processing-steps span {
    border-color: rgba(201,111,26,.26);
    background: var(--surface-sunken);
    color: #f4b078;
  }
  .theme-light .process-status-card,
  .theme-light .processing-steps span {
    border-color: rgba(201,111,26,.24);
    background: var(--orange-100);
    color: #8f3f0f;
  }
  .workspace-surface {
    background: var(--border);
    border-width: 1px;
  }
  .theme-light .workspace-surface {
    background: #ffffff;
  }
  .doc-frame {
    border-color: rgba(11,31,58,.28);
    background: #ffffff;
  }
  .chat-workbench {
    display: grid;
    grid-template-rows: minmax(320px, 1fr) auto;
    gap: 10px;
    padding: 10px;
  }
  .chat-thread {
    min-height: 330px;
    max-height: 58vh;
    overflow: auto;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .document-chat-thread {
    min-height: 220px;
    max-height: 46vh;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    border: 1px solid var(--border);
    border-radius: 12px;
    background: rgba(5,16,32,.20);
  }
  .theme-light .document-chat-thread {
    border-color: var(--line-light);
    background: #f8fafc;
  }
  .chat-composer {
    padding: 10px;
  }
  .chat-empty {
    max-width: 560px;
    margin: auto;
    text-align: center;
    color: #aebacc;
  }
  .theme-light .chat-empty {
    color: var(--text-500);
  }
  .chat-empty h2 {
    margin: 6px 0;
    font-size: 19px;
  }
  .chat-empty p {
    margin: 0;
    line-height: 1.45;
  }
  .chat-empty.compact {
    margin: auto;
    max-width: 420px;
    font-size: 13px;
  }
  .chat-row {
    display: flex;
  }
  .chat-row.user {
    justify-content: flex-end;
  }
  .chat-row.assistant {
    justify-content: flex-start;
  }
  .chat-bubble {
    max-width: min(820px, 88%);
    border-radius: 14px;
    padding: 11px 12px;
    line-height: 1.5;
    font-size: 13px;
  }
  .chat-bubble.user {
    background: var(--orange-600);
    color: #ffffff;
    border-end-end-radius: 5px;
  }
  .chat-bubble.assistant {
    border: 1px solid var(--border);
    background: var(--border);
    color: #e5edf7;
    border-end-start-radius: 5px;
  }
  .theme-light .chat-bubble.assistant {
    border-color: var(--line-light);
    background: #f8fafc;
    color: var(--text-900);
  }
  .chat-bubble.thinking {
    color: #aebacc;
  }
  .ask-results.compact {
    margin-top: 10px;
    max-height: none;
  }
  .ask-results.compact div {
    border-color: var(--border);
    background: var(--border);
  }
  .theme-light .ask-results.compact div {
    border-color: var(--line-light);
    background: #ffffff;
  }
  .evidence-block {
    margin-top: 10px;
    display: grid;
    gap: 8px;
  }
  .evidence-head {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }
  .evidence-list {
    display: grid;
    gap: 8px;
  }
  .evidence-card {
    border-inline-start: 3px solid var(--orange-600);
    border-radius: 10px;
    background: var(--border);
    padding: 9px 10px;
  }
  .theme-light .evidence-card {
    background: #ffffff;
    border: 1px solid var(--line-light);
    border-inline-start-width: 3px;
  }
  .evidence-card-head {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
    color: inherit;
    font-weight: 600;
  }
  .evidence-card p,
  .evidence-before,
  .evidence-after,
  .evidence-meta {
    margin: 6px 0 0;
    color: #c7d2df;
    font-size: 12px;
    line-height: 1.45;
    overflow-wrap: anywhere;
  }
  .theme-light .evidence-card p,
  .theme-light .evidence-before,
  .theme-light .evidence-after,
  .theme-light .evidence-meta {
    color: var(--text-700);
  }
  @media (max-width: 1200px) {
    .command-grid,
    .upload-grid.compare,
    .upload-grid.extract {
      grid-template-columns: 1fr;
    }
    .usecase-selector,
    .usecase-required {
      grid-template-columns: 1fr;
      align-items: stretch;
    }
    .command-tiles {
      grid-template-columns: 1fr;
    }
  }
  @media (prefers-color-scheme: light) {
    .theme-system .workspace-topbar h1,
    .theme-system .command-hero h2,
    .theme-system .workflow-card-head h2,
    .theme-system .board-head h2,
    .theme-system .comparison-head h2,
    .theme-system .chat-empty h2,
    .theme-system .ask-documents-panel h2,
    .theme-system .assistant-console-header,
    .theme-system .file-lane-title,
    .theme-system .job-card h3 {
      color: var(--text-900);
    }
    .theme-system .workspace-secondary-action,
    .theme-system .ghost-action,
    .theme-system .preset-chip,
    .theme-system .workspace-tabs button,
    .theme-system .theme-switch {
      border-color: var(--line-light);
      background: #ffffff;
      color: var(--text-900);
    }
    .theme-system .workspace-launch small,
    .theme-system .workspace-placeholder p,
    .theme-system .model-strip small,
    .theme-system .assistant-input-shell,
    .theme-system .file-lane-helper,
    .theme-system .workflow-note,
    .theme-system .job-meta,
    .theme-system .job-date,
    .theme-system .chat-empty {
      color: var(--text-500);
    }
    .theme-system .file-lane,
    .theme-system .document-chat-thread {
      border-color: var(--line-light);
      background: #ffffff;
    }
    .theme-system .chat-bubble.assistant {
      border-color: var(--line-light);
      background: #f8fafc;
      color: var(--text-900);
    }
    .theme-system .ask-results.compact div,
    .theme-system .evidence-card {
      border-color: var(--line-light);
      background: #ffffff;
      color: var(--text-900);
    }
    .theme-system .evidence-card p,
    .theme-system .evidence-before,
    .theme-system .evidence-after,
    .theme-system .evidence-meta {
      color: var(--text-700);
    }
  }

  /* Phase 2.5 document workspace baseline. */
  .workspace-shell,
  .workspace-shell.theme-light,
  .workspace-shell.theme-system {
    color: var(--text-primary);
    background: var(--surface);
  }
  .workspace-sidebar {
    background: var(--surface-raised);
    border-inline-end: 1px solid var(--border);
    color: var(--text-primary);
    box-shadow: none;
  }
  .workspace-collapse-button {
    border-color: var(--border);
    background: var(--surface-sunken);
    color: var(--text-secondary);
  }
  .workspace-collapse-button:hover {
    border-color: var(--brand-orange);
    color: var(--brand-orange);
  }
  .workspace-nav-label {
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 600;
  }
  .workspace-nav-item {
    border-radius: var(--radius-md);
    color: var(--text-secondary);
    font-weight: 500;
  }
  .workspace-nav-item:hover:not(:disabled) {
    background: var(--surface-sunken);
    color: var(--text-primary);
  }
  .workspace-nav-icon {
    color: currentColor;
  }
  .workspace-nav-item.active {
    border-color: transparent;
    border-inline-start: 2px solid var(--brand-orange);
    background: var(--surface-sunken);
    color: var(--text-primary);
    box-shadow: none;
  }
  .workspace-shell.collapsed .workspace-nav-item {
    width: 44px;
    height: 42px;
  }
  .user-footer {
    border-top-color: var(--border);
    color: var(--text-primary);
  }
  .user-avatar {
    background: var(--surface-sunken);
    color: var(--brand-navy);
  }
  .user-meta strong {
    color: var(--text-primary);
    font-weight: 600;
  }
  .user-meta span,
  .rail-theme-toggle button {
    color: var(--text-secondary);
  }
  .rail-theme-toggle {
    border-color: var(--border);
    background: var(--surface-sunken);
  }
  .rail-theme-toggle button.active {
    background: var(--surface-raised);
    color: var(--brand-orange);
  }
  .workspace-main {
    background: var(--surface);
  }
  .workspace-topbar,
  .session-board,
  .ask-documents-panel,
  .workspace-surface,
  .comparison-workspace,
  .doc-workflow-card,
  .workflow-panel,
  .chat-workbench,
  .chat-thread,
  .chat-composer {
    border: 1px solid var(--border);
    background: var(--surface-raised);
    color: var(--text-primary);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-soft);
  }
  .workspace-topbar {
    min-height: 64px;
    padding: 12px 14px;
  }
  .workspace-topbar::after {
    background: transparent;
  }
  .workspace-topbar h1,
  .board-head h2,
  .ask-documents-panel h2,
  .job-card h3,
  .assistant-console-header,
  .comparison-head h2,
  .workflow-card-head h2,
  .chat-empty h2 {
    color: var(--text-primary);
    font-weight: 600;
    letter-spacing: 0;
  }
  .workspace-content {
    color: var(--text-primary);
    overflow: visible;
  }
  .workspace-primary-action,
  .primary-action {
    background: var(--brand-navy);
    border-color: var(--brand-navy);
    color: #ffffff;
  }
  .workspace-secondary-action,
  .ghost-action,
  .secondary-action,
  .preset-chip,
  .workspace-tabs button {
    border-color: var(--border);
    background: var(--surface-raised);
    color: var(--text-primary);
  }
  .assistant-dropzone {
    min-height: 132px;
    border-color: var(--border-strong);
    background: var(--surface-sunken);
    color: var(--text-primary);
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .assistant-dropzone.large {
    min-height: 150px;
  }
  .assistant-dropzone span {
    max-width: 100%;
    overflow-wrap: anywhere;
    font-weight: 600;
  }
  .assistant-dropzone small {
    color: var(--text-secondary);
    font-weight: 400;
  }
  .processing-steps {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .processing-steps span,
  .process-status-card {
    border-color: var(--border);
    background: var(--surface-raised);
    color: var(--text-secondary);
    border-radius: var(--radius-md);
    font-weight: 500;
  }
  .processing-steps span.active {
    border-color: var(--brand-orange);
    background: var(--surface-sunken);
    color: var(--text-primary);
  }
  .ask-status,
  .model-strip,
  .assistant-input-shell,
  .document-chat-thread {
    border-color: var(--border);
    background: var(--surface-sunken);
    color: var(--text-primary);
  }
  .model-strip span,
  .job-kind,
  .assistant-console-header strong,
  .ask-results strong {
    color: var(--brand-orange);
  }
  .model-strip strong {
    color: var(--text-primary);
  }
  .model-strip small,
  .chat-empty,
  .job-meta,
  .job-date,
  .job-card p {
    color: var(--text-secondary);
  }
  .assistant-input-shell input {
    color: var(--text-primary);
  }
  .assistant-input-shell input::placeholder {
    color: var(--text-secondary);
  }
  .assistant-input-shell button {
    border: 1px solid var(--border);
    background: var(--surface-raised);
    color: var(--text-primary);
  }
  .assistant-input-shell button:not(:disabled) {
    border-color: var(--brand-navy);
    background: var(--brand-navy);
    color: #ffffff;
  }
  .chat-bubble.user {
    background: var(--surface-sunken);
    border: 1px solid var(--border);
    color: var(--text-primary);
  }
  .chat-bubble.assistant {
    background: var(--surface-raised);
    border-color: var(--border);
    color: var(--text-primary);
  }
  .ask-results.compact div,
  .evidence-card {
    border-color: var(--border);
    background: var(--surface-sunken);
    color: var(--text-primary);
  }
  .ask-evidence-row strong {
    display: inline-flex;
    width: fit-content;
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    padding: 2px 6px;
    background: var(--surface-raised);
  }
  .doc-viewer-shell {
    color: var(--text-primary);
  }
  .doc-frame,
  .doc-frame.native {
    border-color: var(--border-strong);
    background: #ffffff;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-soft);
  }
  .native-page,
  .native-page.document,
  .native-page.spreadsheet {
    background: #ffffff;
    color: #16181d;
  }
  .native-token-delete,
  .native-token-replace-base {
    color: #9f2525;
    background: rgba(176, 46, 46, .13);
  }
  .native-token-insert,
  .native-token-replace-target {
    color: #176c38;
    background: rgba(31, 126, 65, .13);
    font-weight: 500;
  }
  .native-block {
    color: inherit;
  }
  .native-table-wrap {
    border-color: var(--border);
    background: #ffffff;
  }
  .native-table th,
  .native-table td {
    border-color: var(--border);
  }
  .job-card {
    grid-template-columns: minmax(0, 1fr) 250px;
    border-color: var(--border);
    background: var(--surface-raised);
    border-radius: var(--radius-lg);
    box-shadow: none;
  }
  .job-side {
    justify-items: end;
  }
  .danger-action {
    border-color: #f1c6c6;
    background: #fff7f7;
    color: #9f2525;
  }
  [data-theme="dark"] .danger-action,
  .theme-dark .danger-action {
    border-color: #4d2528;
    background: #1d1112;
    color: #ffb2b2;
  }
  .admin-studio {
    display: grid;
    gap: 16px;
  }
  .admin-intro,
  .admin-panel {
    border: 1px solid var(--border);
    background: var(--surface-raised);
    color: var(--text-primary);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-soft);
  }
  .admin-intro,
  .admin-panel {
    padding: 16px;
  }
  .admin-intro h2,
  .admin-panel h3,
  .admin-panel h4 {
    margin: 0;
    color: var(--text-primary);
    font-weight: 600;
    letter-spacing: 0;
  }
  .admin-intro p,
  .admin-panel-head p,
  .admin-detail-head p,
  .seed-form p {
    margin: 6px 0 0;
    color: var(--text-secondary);
  }
  .admin-model-badge {
    display: inline-flex;
    width: fit-content;
    margin-top: 8px;
    border: 1px solid color-mix(in srgb, var(--brand-orange) 38%, var(--border));
    background: color-mix(in srgb, var(--brand-orange) 9%, var(--surface-raised));
    color: var(--text-primary);
    border-radius: 999px;
    padding: 4px 8px;
    font-size: 12px;
    font-weight: 600;
  }
  .admin-notice {
    border: 1px solid color-mix(in srgb, #1f7e41 48%, var(--border));
    background: color-mix(in srgb, #1f7e41 12%, var(--surface-raised));
    color: var(--text-primary);
    border-radius: var(--radius-md);
    padding: 10px 12px;
    font-weight: 600;
  }
  .admin-grid {
    display: grid;
    grid-template-columns: minmax(260px, 360px) minmax(0, 1fr);
    gap: 16px;
    align-items: start;
  }
  .admin-panel-head,
  .admin-detail-head {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    align-items: flex-start;
    margin-bottom: 14px;
  }
  .dataset-list,
  .admin-form,
  .onboarding-flow,
  .admin-detail,
  .admin-config-grid,
  .seed-form {
    display: grid;
    gap: 12px;
  }
  .dataset-item {
    width: 100%;
    text-align: start;
    display: grid;
    gap: 4px;
    border: 1px solid var(--border);
    background: var(--surface-sunken);
    color: var(--text-primary);
    border-radius: var(--radius-md);
    padding: 11px;
  }
  .dataset-item.active {
    border-color: var(--brand-orange);
    background: color-mix(in srgb, var(--brand-orange) 9%, var(--surface-raised));
  }
  .dataset-item span,
  .dataset-item small,
  .profile-card span,
  .profile-card small {
    color: var(--text-secondary);
  }
  .admin-config-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .admin-review-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }
  .admin-wide-field {
    grid-column: 1 / -1;
  }
  .sample-intake-card,
  .admin-review-card,
  .analysis-card {
    display: grid;
    gap: 12px;
    border: 1px solid var(--border);
    background: color-mix(in srgb, var(--surface-sunken) 78%, transparent);
    border-radius: var(--radius-md);
    padding: 14px;
  }
  .sample-intake-head,
  .analysis-card-head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 14px;
  }
  .sample-intake-head h4,
  .admin-review-card h4,
  .analysis-card h4 {
    margin: 0;
  }
  .sample-intake-head p,
  .admin-review-card p,
  .analysis-card p,
  .sample-actions span {
    margin: 4px 0 0;
    color: var(--text-secondary);
    font-size: 13px;
  }
  .ai-toggle {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    width: fit-content;
    white-space: nowrap;
    border: 1px solid color-mix(in srgb, var(--brand-orange) 34%, var(--border));
    border-radius: 999px;
    padding: 7px 10px;
    background: color-mix(in srgb, var(--brand-orange) 8%, var(--surface-raised));
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 650;
  }
  .model-select-row {
    display: grid;
    grid-template-columns: minmax(220px, 1fr) auto minmax(180px, .8fr);
    gap: 10px;
    align-items: end;
    border: 1px solid var(--border);
    background: var(--surface-raised);
    border-radius: var(--radius-md);
    padding: 10px;
  }
  .model-select-row label {
    display: grid;
    gap: 6px;
    color: var(--text-secondary);
    font-size: 13px;
    font-weight: 600;
  }
  .model-select-row select {
    width: 100%;
    border: 1px solid var(--border);
    background: var(--surface-sunken);
    color: var(--text-primary);
    border-radius: var(--radius-md);
    padding: 9px 10px;
  }
  .model-select-row span {
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.35;
  }
  .sample-actions {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }
  .analysis-run-panel {
    display: grid;
    gap: 10px;
    border: 1px solid var(--border);
    background: var(--surface-raised);
    border-radius: var(--radius-md);
    padding: 12px;
  }
  .analysis-run-panel.running {
    border-color: color-mix(in srgb, var(--brand-orange) 46%, var(--border));
  }
  .analysis-run-panel.success {
    border-color: color-mix(in srgb, #1f7e41 42%, var(--border));
  }
  .analysis-run-panel.failed {
    border-color: color-mix(in srgb, #9f2525 46%, var(--border));
  }
  .analysis-run-head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
  }
  .analysis-run-head div {
    display: grid;
    gap: 2px;
  }
  .analysis-run-head strong {
    color: var(--text-primary);
    font-size: 14px;
  }
  .analysis-run-head span,
  .analysis-run-head small {
    color: var(--text-secondary);
    font-size: 12px;
  }
  .analysis-run-metrics,
  .analysis-run-steps {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .analysis-run-metrics span,
  .analysis-run-steps span {
    border: 1px solid var(--border);
    background: var(--surface-sunken);
    color: var(--text-secondary);
    border-radius: 999px;
    padding: 5px 8px;
    font-size: 12px;
    font-weight: 600;
  }
  .analysis-run-steps span.active {
    border-color: color-mix(in srgb, var(--brand-orange) 38%, var(--border));
    color: var(--text-primary);
  }
  .analysis-run-error {
    margin: 0;
    color: #9f2525;
    font-size: 13px;
    font-weight: 600;
  }
  .analysis-card {
    border-color: color-mix(in srgb, var(--brand-orange) 42%, var(--border));
    background: color-mix(in srgb, var(--brand-orange) 8%, var(--surface-raised));
  }
  .analysis-card-head span {
    border: 1px solid var(--border);
    background: var(--surface-raised);
    color: var(--text-primary);
    border-radius: 999px;
    padding: 4px 8px;
    font-size: 12px;
    font-weight: 650;
    white-space: nowrap;
  }
  .analysis-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
  }
  .analysis-grid p {
    display: grid;
    gap: 3px;
    min-width: 0;
    border: 1px solid var(--border);
    background: var(--surface-raised);
    border-radius: var(--radius-md);
    padding: 10px;
  }
  .analysis-grid strong,
  .analysis-grid small {
    overflow-wrap: anywhere;
  }
  .analysis-notes {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .analysis-notes span {
    border: 1px solid var(--border);
    background: var(--surface-raised);
    color: var(--text-secondary);
    border-radius: 999px;
    padding: 5px 8px;
    font-size: 12px;
  }
  .admin-form label,
  .admin-review-grid label,
  .admin-config-grid label,
  .seed-form label {
    display: grid;
    gap: 6px;
    color: var(--text-secondary);
    font-size: 13px;
    font-weight: 600;
  }
  .admin-form input,
  .admin-form select,
  .admin-form textarea,
  .admin-review-grid input,
  .admin-review-grid select,
  .admin-review-grid textarea,
  .admin-config-grid input,
  .admin-config-grid select,
  .admin-config-grid textarea,
  .seed-form input {
    width: 100%;
    border: 1px solid var(--border);
    background: var(--surface-sunken);
    color: var(--text-primary);
    border-radius: var(--radius-md);
    padding: 9px 10px;
    min-width: 0;
  }
  .admin-form textarea,
  .admin-review-grid textarea,
  .admin-config-grid textarea {
    min-height: 92px;
    resize: vertical;
  }
  .admin-config-grid textarea.mono {
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 12px;
    min-height: 140px;
  }
  .role-picker {
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px 12px;
  }
  .format-picker {
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px 12px;
    color: var(--text-primary);
  }
  .format-picker legend {
    color: var(--text-secondary);
    font-size: 13px;
    font-weight: 600;
    padding: 0 5px;
  }
  .format-picker label {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--text-primary);
    font-size: 13px;
  }
  .role-picker legend {
    color: var(--text-secondary);
    font-size: 13px;
    font-weight: 600;
    padding: 0 5px;
  }
  .role-picker label {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--text-primary);
    font-size: 13px;
  }
  .seed-form {
    border-top: 1px solid var(--border);
    padding-top: 14px;
  }
  .sample-upload-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
  }
  .sample-pair-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }
  .variation-pairs {
    display: grid;
    gap: 10px;
    border: 1px solid var(--border);
    background: var(--surface-raised);
    border-radius: var(--radius-md);
    padding: 12px;
  }
  .variation-pairs-head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
  }
  .variation-pairs-head h5 {
    margin: 0;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 650;
  }
  .variation-pairs-head p,
  .variation-empty {
    margin: 4px 0 0;
    color: var(--text-secondary);
    font-size: 13px;
  }
  .variation-pair-list {
    display: grid;
    gap: 9px;
  }
  .variation-pair-row {
    display: grid;
    grid-template-columns: minmax(90px, .45fr) minmax(0, 1fr) minmax(0, 1fr) auto;
    gap: 10px;
    align-items: end;
    border: 1px solid var(--border);
    background: var(--surface-sunken);
    border-radius: var(--radius-md);
    padding: 10px;
  }
  .variation-pair-row strong {
    color: var(--text-primary);
    font-size: 13px;
    align-self: center;
  }
  .icon-action {
    width: 34px;
    height: 34px;
    border-radius: 999px;
    border: 1px solid var(--brand-orange);
    background: color-mix(in srgb, var(--brand-orange) 10%, var(--surface-raised));
    color: var(--brand-orange);
    font-size: 20px;
    line-height: 1;
    font-weight: 700;
    display: inline-grid;
    place-items: center;
    cursor: pointer;
  }
  .icon-action:disabled {
    border-color: var(--border);
    color: var(--text-secondary);
    background: var(--surface-sunken);
    cursor: default;
  }
  .admin-profile-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 12px;
  }
  .profile-card {
    border: 1px solid var(--border);
    background: var(--surface-sunken);
    border-radius: var(--radius-md);
    padding: 12px;
    min-width: 0;
  }
  .profile-card p {
    display: grid;
    gap: 2px;
    margin: 8px 0 0;
    overflow-wrap: anywhere;
  }
  .comparison-head-actions {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
  @media (prefers-color-scheme: dark) {
    .theme-system .danger-action {
      border-color: #4d2528;
      background: #1d1112;
      color: #ffb2b2;
    }
  }
  @media (max-width: 980px) {
    .workspace-shell,
    .workspace-shell.collapsed {
      grid-template-columns: 1fr;
    }
    .workspace-sidebar {
      position: static;
      height: auto;
    }
    .ask-documents-grid,
    .job-card,
    .admin-grid,
    .admin-review-grid,
    .analysis-grid,
    .model-select-row,
    .admin-config-grid,
    .sample-upload-grid,
    .sample-pair-grid,
    .variation-pair-row,
    .admin-profile-grid {
      grid-template-columns: 1fr;
    }
    .job-side {
      justify-items: start;
    }
  }
`,dt={background:"#fffdf8",border:"1px solid #ded6c8",borderRadius:8,boxShadow:"0 1px 3px rgba(31,41,55,.08)"},nr={textAlign:"start",padding:"8px 9px",borderBottom:"1px solid #ded6c8",fontWeight:650,verticalAlign:"top",whiteSpace:"normal",overflowWrap:"anywhere"},Ar={padding:"8px 9px",borderBottom:"1px solid #eee7dc",verticalAlign:"top",whiteSpace:"normal",overflowWrap:"anywhere",lineHeight:1.35},gr={border:"1px solid #ded6c8",background:"#fbfaf6",color:"#344054",borderRadius:999,padding:"4px 8px",fontSize:12,fontWeight:600};function uh(e=!1,t={}){return{border:"none",borderRadius:6,background:e?"#98a2b3":"#1f2937",color:"white",padding:"9px 14px",fontWeight:550,cursor:e?"default":"pointer",...t}}function dh(e={}){return{border:"1px solid #c9c0b0",borderRadius:6,background:"#fffdf8",color:"#344054",padding:"9px 13px",fontWeight:550,cursor:"pointer",...e}}function Pr(e){if(!e)return"";const t=String(e);return t.includes("Traceback (most recent call last)")||t.includes("Internal Server Error")||t.includes("psycopg")||t.includes("OperationalError")||t.includes('File "')||t.length>500?"An unexpected internal server error occurred. Please try again or check server logs.":t.replace(/\/Users\/[a-zA-Z0-9_-]+\//g,".../")}async function ce(e){try{const t=await e.text();if(!t)return`Request failed with status ${e.status}`;try{const r=JSON.parse(t);return Pr(tt(r.detail||r.error||r.message||r))}catch{return t.trim().startsWith("<!DOCTYPE html>")||t.includes("<html")||t.length>200?`Server error (${e.status}). Please check backend logs.`:Pr(t)}}catch{return`Request failed with status ${e.status}`}}function se(e){const t=tt(e);return t.toLowerCase().includes("failed to fetch")?"The app could not reach the comparison service. Please confirm the backend is running and the API URL is correct.":t||"Something went wrong while processing the documents."}async function ph(e){const t=await fetch(`${V}/extract-runs/${e}/structured-json`);if(t.ok){const o=Ms(await t.json());if(wa(o))return o;const i=await dc(e,o);return wa(i)?i:o}const r=await fetch(`${V}/extract-runs/${e}/json`);if(!r.ok)throw new Error(await ce(t));const n=await r.json(),a=Ms(n);return wa(a)?a:dc(e,a)}function wa(e){return!!(e&&((e.content||[]).length>0||(e.tables||[]).length>0||(e.pages||[]).some(t=>(t.content||[]).length>0||(t.tables||[]).length>0)))}async function dc(e,t={}){const[r,n]=await Promise.allSettled([fetch(`${V}/extract-runs/${e}/blocks?limit=2000`).then(async i=>{if(!i.ok)throw new Error(await ce(i));return i.json()}),fetch(`${V}/extract-runs/${e}/tables?include_rows=true`).then(async i=>{if(!i.ok)throw new Error(await ce(i));return i.json()})]),a=r.status==="fulfilled"?r.value.blocks||[]:[],o=n.status==="fulfilled"?n.value.tables||[]:[];return Ms({...t,blocks:a,tables:o.length?o:t.tables||[]})}function Ms(e){var l,c,u;if(e!=null&&e.structured_json)return e.structured_json;if((e!=null&&e.document_summary||e!=null&&e.content||e!=null&&e.pages)&&wa(e))return e;const t=(e==null?void 0:e.blocks)||[],r=(e==null?void 0:e.tables)||[],n=[];t.forEach(m=>{var y;const f=m.text||((y=m.payload)==null?void 0:y.text)||"",g=String(f).match(/^\s*([^:：]{2,80})\s*[:：]\s*(.{1,300})$/);g&&n.push({field:g[1].trim(),value:g[2].trim(),page:m.page_number,source:m.type,citation:`p.${m.page_number||"-"} - ${m.path||"document"}`}),hh(f).forEach(v=>{n.push({...v,page:m.page_number,source:m.type,citation:`p.${m.page_number||"-"} - ${m.path||"document"}`})})}),r.slice(0,40).forEach(m=>{(m.rows||[]).slice(0,50).forEach(f=>{Object.entries(f||{}).forEach(([g,y])=>{!y||String(g).startsWith("__")||n.push({field:g,value:y,page:m.page_first||m.page_number,source:"table",table:m.display_name||m.title,citation:`${m.page_label||"page"} - ${m.title||"table"}`})})})});const a=t.filter(m=>["paragraph","list_item","kv_pair","figure","section","heading"].includes(m.type)).map(m=>{var x;const f=m.text||((x=m.payload)==null?void 0:x.text)||"",g={page:m.page_number,order:m.sequence||0,type:m.type,path:m.path,text:f,citation:`p.${m.page_number||"-"} - ${m.path||"document"}`},y=[],v=String(f).match(/^\s*([^:：]{2,80})\s*[:：]\s*(.{1,300})$/);return v&&y.push({name:v[1].trim(),value:v[2].trim()}),y.length&&(g.key_values=y),g}).filter(m=>String(m.text||"").trim()),o=[],i=new Map;return a.forEach(m=>{const f=m.page||1;i.has(f)||i.set(f,{page:f,citation:`p.${f}`,content:[],tables:[]}),i.get(f).content.push(m)}),r.forEach(m=>{const f=m.page_first||m.page_number||1;i.has(f)||i.set(f,{page:f,citation:`p.${f}`,content:[],tables:[]}),i.get(f).tables.push(m)}),Array.from(i.keys()).sort((m,f)=>m-f).forEach(m=>o.push(i.get(m))),{document_summary:(e==null?void 0:e.document_summary)||{label:((l=e==null?void 0:e.summary)==null?void 0:l.label)||(e==null?void 0:e.label)||"Extracted document",source_type:((c=e==null?void 0:e.summary)==null?void 0:c.source_format)||(e==null?void 0:e.source_format)||"document",extraction_quality:{grade:((u=e==null?void 0:e.summary)==null?void 0:u.quality)||"not rated",coverage:e==null?void 0:e.coverage},counts:{text_blocks:a.length,tables:r.length,pages:o.length}},semantic_fields:n.slice(0,220),business_structure:fh(t,r,n),sections:t.filter(m=>["section","heading"].includes(m.type)).slice(0,200),tables:r,pages:o,content:a}}function fh(e,t,r){const n=[{document_index:1,label:"Extracted document",sections:[]}];let a=null;return e.slice().sort((o,i)=>(o.page_number||1)-(i.page_number||1)||(o.sequence||0)-(i.sequence||0)).forEach(o=>{var i;if(["section","heading"].includes(o.type)){a={title:o.text||o.path||`Page ${o.page_number||1}`,page:o.page_number||1,path:o.path,content:[],fields:[],inline_records:[],tables:[]},n[0].sections.push(a);return}if((!a||a.page!==(o.page_number||1))&&(a={title:`Page ${o.page_number||1}`,page:o.page_number||1,path:`/page_${o.page_number||1}`,content:[],fields:[],inline_records:[],tables:[]},n[0].sections.push(a)),["paragraph","list_item","kv_pair","figure"].includes(o.type)){const l=o.text||((i=o.payload)==null?void 0:i.text)||"",c=r.filter(m=>{var f;return m.page===o.page_number&&((f=m.citation)==null?void 0:f.includes(o.path||"__no_path__"))}),u=mh(l);a.content.push({type:o.type,page:o.page_number,path:o.path,text:l,fields:c}),a.fields.push(...c),u&&a.inline_records.push({...u,page:o.page_number,citation:`p.${o.page_number||"-"} - ${o.path||"document"}`})}}),t.forEach(o=>{const i=o.page_first||o.page_number||1;let l=n[0].sections.find(c=>c.page===i);l||(l={title:`Page ${i}`,page:i,path:`/page_${i}`,content:[],fields:[],inline_records:[],tables:[]},n[0].sections.push(l)),l.tables.push({title:o.display_name||o.title||"Detected table",page_label:o.page_label,columns:o.columns||[],row_count:o.n_rows||0,sample_rows:(o.rows||o.row_preview||[]).slice(0,8)})}),{documents:n,section_count:n[0].sections.length}}function mh(e){const t=String(e||"").trim();if(!t)return null;const r=t.includes("|")?t.split("|").map(n=>n.trim()).filter(Boolean):t.split(/\s{3,}/).map(n=>n.trim()).filter(Boolean);return r.length<2?null:{record_type:"inline_row",columns:r.map((n,a)=>`Column ${a+1}`),values:Object.fromEntries(r.map((n,a)=>[`Column ${a+1}`,n])),text:t}}function hh(e){const t=String(e||""),r=[["color",/\b(?:colou?r|shade)\s*(?:is|=|:)?\s*([A-Za-z][A-Za-z\s/-]{2,40})/gi],["size",/\b(?:size|dimension)\s*(?:is|=|:)?\s*([A-Z0-9][A-Z0-9\s./x-]{0,40})/gi],["quantity",/\b(?:qty|quantity|count|units?)\s*(?:is|=|:)?\s*(\d[\d,]*(?:\.\d+)?)/gi],["price",/([$€£]\s?\d[\d,]*(?:\.\d+)?)/g],["percentage",/\b(\d+(?:\.\d+)?%)\b/g],["date",/\b(\d{1,2}[/-]\d{1,2}[/-]\d{2,4}|\d{4}-\d{1,2}-\d{1,2})\b/g],["code",/\b([A-Z]{1,8}[- ]?\d{2,12}[A-Z]?)\b/gi]],n=[],a=new Set;return r.forEach(([o,i])=>{for(const l of t.matchAll(i)){const c=String(l[1]||"").replace(/\s+/g," ").trim(),u=`${o}:${c.toLowerCase()}`;!c||a.has(u)||(a.add(u),n.push({field:o,value:c}))}}),n}function tt(e){if(!e)return"";if(typeof e=="string")return Pr(e);if(e instanceof Error)return tt(e.message);if(Array.isArray(e))return e.map(tt).filter(Boolean).join(`
`);if(typeof e=="object"){if(e.detail)return tt(e.detail);if(e.error)return tt(e.error);if(e.message)return tt(e.message);try{return Pr(JSON.stringify(e,null,2))}catch{return Pr(String(e))}}return Pr(String(e))}function gh(e){if(!(e!=null&&e.length))return[];const t=new Set;return e.slice(0,20).forEach(r=>{r&&typeof r=="object"&&!Array.isArray(r)&&Object.keys(r).forEach(n=>{fr(n)||t.add(n)})}),Array.from(t).slice(0,12)}function fr(e){const t=String(e||"");return!t||t.startsWith("__")?!0:["payload","raw","field_profiles","column_profiles","extraction_intelligence","source_tables","table_fingerprint","bbox_by_page","quality_warnings"].includes(t)}function ur(e){if(e==null||e==="")return"-";if(Array.isArray(e))return e.map(ur).join(", ");if(typeof e=="object"){const t=Object.fromEntries(Object.entries(e).filter(([r])=>!fr(r)));return Object.keys(t).length?JSON.stringify(t):"-"}return String(e)}function pc(e){return!e||typeof e!="object"?"":Object.entries(e).filter(([,t])=>t!=null&&String(t).trim()!=="").map(([t,r])=>`${t}: ${r}`).join(" | ")}function xh(e,t=560,r=1280){const n=Math.max(1,Number(e)||1);return Math.min(r,Math.max(t,180+n*180))}function He(e,t){if(!e)return"";const r=String(e).replace(/\s+/g," ").trim();return r.length<=t?r:`${r.slice(0,t-1)}...`}function vt(e){const t=Number(e||0);return Number.isFinite(t)?Math.round(t).toLocaleString():"0"}function vh(e){if(!e)return"-";const t=new Date(e);return Number.isNaN(t.getTime())?"-":t.toLocaleString(void 0,{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function yh(e,t){const r=Number(e||0);if(!Number.isFinite(r)||r<=0)return t==="complete"||t==="failed"?"-":"Running";const n=Math.max(1,Math.round(r/1e3));if(n<60)return`${n}s`;const a=Math.floor(n/60),o=n%60;if(a<60)return o?`${a}m ${o}s`:`${a}m`;const i=Math.floor(a/60),l=a%60;return l?`${i}h ${l}m`:`${i}h`}function wh(e){return String(e||"-").replace(/\bbase\s*p\.?\s*(\d+)/gi,"Baseline page $1").replace(/\btarget\s*p\.?\s*(\d+)/gi,"Revised page $1").replace(/\bbaseline\s*p\.?\s*(\d+)/gi,"Baseline page $1").replace(/\brevised\s*p\.?\s*(\d+)/gi,"Revised page $1").replace(/\s*->\s*/g," → ")}function fc(e){const t=String(e||"").toLowerCase();return t.includes("high")?3:t.includes("medium")?2:t.includes("low")?1:0}function Ir(e){const t=String((e==null?void 0:e.change_type)||(e==null?void 0:e.changeType)||(e==null?void 0:e.status)||"").toUpperCase();if(["ADDED","DELETED","MODIFIED","UNCHANGED","MATCH"].includes(t))return t;if((e!=null&&e.after||e!=null&&e.target_text)&&!(e!=null&&e.before||e!=null&&e.base_text))return"ADDED";if((e!=null&&e.before||e!=null&&e.base_text)&&!(e!=null&&e.after||e!=null&&e.target_text))return"DELETED";const r=`${(e==null?void 0:e.type)||""} ${(e==null?void 0:e.change)||""} ${(e==null?void 0:e.description)||""} ${(e==null?void 0:e.review)||""}`.toUpperCase();return r.includes("ADDED")||r.includes("NEW CONTENT")||r.includes("INTRODUCED")?"ADDED":r.includes("DELETED")||r.includes("REMOVED")||r.includes("DROPPED")?"DELETED":r.includes("MODIFIED")||r.includes("CHANGED")||r.includes("UPDATED")||r.includes("REVISED")?"MODIFIED":t||"MODIFIED"}function bh(e){const t=Ir(e),r=(e==null?void 0:e.before)||"",n=(e==null?void 0:e.after)||"",a=(e==null?void 0:e.stable_key)||mc(e==null?void 0:e.path)||"Document change",o=[e!=null&&e.page_base?`Baseline page ${e.page_base}`:"",e!=null&&e.page_target?`Revised page ${e.page_target}`:""].filter(Boolean).join(" -> "),i=t==="ADDED"?`Added: ${He(n,260)}`:t==="DELETED"?`Deleted: ${He(r,260)}`:`Changed from "${He(r,120)}" to "${He(n,120)}"`;return{feature:a,item:a,area:mc(e==null?void 0:e.path)||"Document",change_type:t,change:i,before:r,after:n,citation:o,impact:e==null?void 0:e.impact,confidence:typeof(e==null?void 0:e.similarity)=="number"?Math.max(.55,Math.min(.98,1-Math.abs(1-e.similarity))):null,seek_clarification:t==="UNCHANGED"?"None":"Review recommended."}}function kh(e,t){const r=Array.isArray(e)?[...e]:[],n=Array.isArray(t)?t:[],a=new Set(r.map(Ir)),o=new Set(r.map(i=>`${Ir(i)}:${i.stable_key||i.item||i.feature||i.path||i.change}`));return["ADDED","DELETED"].forEach(i=>{if(a.has(i))return;let l=0;n.forEach(c=>{if(l>=12||Ir(c)!==i)return;const u=`${i}:${c.stable_key||c.path||c.before||c.after}`;o.has(u)||(r.push(bh(c)),o.add(u),l+=1)})}),r}function mc(e){const t=String(e||"").split("/").map(r=>r.trim()).filter(Boolean);return t[t.length-1]||""}function hc(e){const t=`${e.seek_clarification||""} ${e.review||""} ${e.recommendation||""}`.toLowerCase(),r=Os(e.confidence);return t.includes("review")||t.includes("clarif")||t.includes("confirm")||typeof r=="number"&&r<.8}function Os(e){return typeof e!="number"?null:e>1?e/100:e}function gc(e){return{border:"1px solid #c9c0b0",background:e?"#f1ece3":"#fffdf8",color:e?"#98a2b3":"#344054",borderRadius:7,padding:"7px 12px",cursor:e?"default":"pointer",fontWeight:600}}function xc(e){return{border:"1px solid #c9c0b0",background:e?"#f1ece3":"#fffdf8",color:e?"#98a2b3":"#344054",borderRadius:6,padding:"5px 8px",cursor:e?"default":"pointer",fontWeight:600,fontSize:12}}function Fs(e,t=!1){const r=String(e||"").toLowerCase();return r==="added"?{background:t?Q.ADDED.bg:"rgba(31,160,70,.08)",border:t?void 0:`1px solid ${Q.ADDED.border}`,borderInlineStart:`3px solid ${Q.ADDED.border}`}:r==="deleted"?{background:t?Q.DELETED.bg:"rgba(218,54,54,.08)",border:t?void 0:`1px solid ${Q.DELETED.border}`,borderInlineStart:`3px solid ${Q.DELETED.border}`}:r==="modified"?{background:t?"rgba(196,85,16,.10)":"rgba(196,85,16,.08)",border:t?void 0:`1px solid ${Q.MODIFIED.border}`,borderInlineStart:`3px solid ${Q.MODIFIED.border}`}:{background:t?"transparent":"#fffdf8",border:t?void 0:"1px solid transparent",borderInlineStart:"3px solid transparent"}}function jh({meta:e}){var r,n,a;const t=e.stats||{};return s.jsxs("section",{className:"stats-strip",children:[s.jsx(ye,{label:"Added",value:t.ADDED||0,tone:"added"}),s.jsx(ye,{label:"Deleted",value:t.DELETED||0,tone:"deleted"}),s.jsx(ye,{label:"Modified",value:t.MODIFIED||0,tone:"modified"}),s.jsx(ye,{label:"Unchanged",value:t.UNCHANGED||0}),s.jsx(ye,{label:"Coverage",value:`${vc((r=e.coverage)==null?void 0:r.base)} / ${vc((n=e.coverage)==null?void 0:n.target)}`}),s.jsx(ye,{label:"Pages",value:`${e.n_pages_base} / ${e.n_pages_target}`}),Number(((a=e.ai_usage)==null?void 0:a.total_tokens)||0)>0&&s.jsx(ye,{label:"AI tokens",value:`${vt(e.ai_usage.total_tokens)} (${vt(e.ai_usage.calls||0)} calls)`})]})}function vc(e){return typeof e=="number"?`${e.toFixed(1)}%`:"-"}function ye({label:e,value:t,tone:r}){return s.jsxs("span",{className:`stat-chip ${r||"neutral"}`,children:[s.jsx("span",{children:e}),s.jsx("strong",{children:t})]})}function Sh({usage:e}){const t=Number((e==null?void 0:e.total_tokens)||0);if(!t)return null;const n=(Array.isArray(e==null?void 0:e.operations)?e.operations:[]).slice(-4);return s.jsxs("div",{style:{border:"1px solid #ded6c8",borderRadius:8,padding:10,marginBottom:12,background:"#fbfaf6",fontSize:12,color:"#475467"},children:[s.jsx("strong",{style:{color:"#344054"},children:"AI usage:"})," ",vt(t)," tokens · ",vt(e.calls||0)," call(s) · ",vt(e.prompt_tokens||0)," input / ",vt(e.completion_tokens||0)," output",n.length>0&&s.jsx("div",{style:{marginTop:6,display:"flex",flexWrap:"wrap",gap:6},children:n.map((a,o)=>s.jsxs("span",{style:{border:"1px solid #d8d0c3",borderRadius:999,padding:"3px 7px",background:"#fffdf8"},children:[a.operation||"AI call"," · ",vt(a.total_tokens||0)]},`${a.operation||"op"}-${o}`))})]})}function yc({progress:e,message:t,status:r}){const n=po(r),a=Math.max(0,Math.min(100,Number(e)||0)),o=n.isFailed?100:Math.max(7,n.isComplete?100:a);return s.jsxs("div",{className:"processing-state",children:[s.jsxs("div",{className:"processing-state-head",children:[s.jsx("span",{style:{fontWeight:600},children:t}),s.jsxs("span",{children:[a,"%"]})]}),s.jsx("div",{className:"progress-track",children:s.jsx("div",{className:`progress-fill ${n.className}`,style:{width:`${o}%`}})}),s.jsx("p",{children:"The job is still running. This view updates automatically as the backend reports progress."})]})}function An({message:e}){return s.jsx("div",{style:{marginTop:16,border:"1px solid #f0b4b4",background:"#fff5f5",color:"#9f1d1d",borderRadius:8,padding:13,fontSize:14,fontWeight:600,lineHeight:1.45,whiteSpace:"pre-wrap"},children:tt(e)})}function Bn({label:e}){return s.jsx("div",{style:{padding:20,color:"#667085",fontWeight:600},children:e})}function Vt({label:e}){return s.jsx("div",{style:{padding:18,border:"1px dashed #c9c0b0",borderRadius:8,color:"#667085",background:"#fbfaf7",fontWeight:600},children:e})}function _h({status:e}){const t=po(e);return s.jsx("span",{style:{display:"inline-block",background:t.tone.chip,color:t.tone.text,border:`1px solid ${t.tone.border}`,padding:"2px 8px",borderRadius:999,fontWeight:650,fontSize:12},children:t.label})}function po(e){const t=String(e||"queued").toLowerCase(),r=t==="complete"||t==="completed",n=t==="failed"||t==="error",a=t==="running"||t==="processing"||t==="uploading";return{value:t,label:r?"complete":n?"failed":t,className:r?"complete":n?"failed":a?"running":"queued",tone:r?Q.ADDED:n?Q.DELETED:a?Q.MODIFIED:Q.UNCHANGED,isComplete:r,isFailed:n}}function Eh({value:e,status:t}){const r=po(t),n=Math.max(0,Math.min(100,Number(e)||0)),a=r.isFailed||r.isComplete?100:n;return s.jsxs("div",{children:[s.jsx("div",{className:"progress-track",style:{height:6,minWidth:140},children:s.jsx("div",{className:`progress-fill ${r.className}`,style:{width:`${a}%`}})}),s.jsx("div",{style:{marginTop:5,color:"#667085",fontSize:12},children:r.isFailed?"failed":`${r.isComplete?100:n}%`})]})}function Qd({type:e}){const t=String(e||"MODIFIED").toUpperCase(),r=Q[t]||Q.MODIFIED;return s.jsx("span",{style:{display:"inline-block",background:r.chip,color:r.text,border:`1px solid ${r.border}`,padding:"2px 8px",borderRadius:999,fontWeight:650,fontSize:12},children:t})}function Ch({onOpenJob:e,onAskJob:t,error:r,historyKind:n="all",onStartCompare:a,onStartExtract:o}){const[i,l]=w.useState({loading:!0,error:"",jobs:[]}),[c,u]=w.useState(""),m=async()=>{try{const p=await fetch(`${V}/jobs?limit=80`);if(!p.ok)throw new Error(await ce(p));const d=await p.json();l({loading:!1,error:"",jobs:d.jobs||[]})}catch(p){l({loading:!1,error:se(p),jobs:[]})}};w.useEffect(()=>{let p=!1,d=null;const h=async()=>{p||(await m(),p||(d=setTimeout(h,2200)))};return h(),()=>{p=!0,d&&clearTimeout(d)}},[]);const f=async p=>{if(!(!(p!=null&&p.run_id)||c)){u(p.run_id);try{const d=await fetch(`${V}/jobs/${p.run_id}`,{method:"DELETE"});if(!d.ok)throw new Error(await ce(d));await m()}catch(d){l(h=>({...h,error:se(d)}))}finally{u("")}}},g=(i.jobs||[]).filter(p=>n==="all"||p.kind===n),y=g.filter(p=>!["complete","failed","error"].includes(p.status)).length,v=g.filter(p=>p.status==="complete").length,x=n==="comparison"?"Comparison History":n==="extraction"?"Extraction History":"Work History",j=n==="comparison"?"No comparison runs are available yet.":n==="extraction"?"No extraction runs are available yet.":"No document work is available yet.";return s.jsxs("section",{className:"session-board",children:[s.jsxs("div",{className:"board-head",children:[s.jsx("div",{children:s.jsx("h2",{children:x})}),s.jsxs("div",{className:"board-actions",children:[s.jsx("button",{type:"button",onClick:a,className:"primary-action compact",children:"New compare"}),s.jsx("button",{type:"button",onClick:o,className:"ghost-action compact",children:"New extract"}),s.jsxs("span",{children:[y," running"]}),s.jsxs("span",{children:[v," complete"]}),s.jsx("button",{type:"button",onClick:m,className:"ghost-action",children:"Refresh"})]})]}),r&&s.jsx(An,{message:r}),i.error&&s.jsx(An,{message:i.error}),i.loading&&!g.length?s.jsx(Bn,{label:"Loading jobs"}):g.length===0?s.jsx(Vt,{label:j}):s.jsx("div",{className:"job-list",children:g.map(p=>s.jsx(Nh,{job:p,deleting:c===p.run_id,onOpen:()=>e(p),onAsk:()=>t==null?void 0:t(p),onDelete:()=>f(p)},p.run_id))})]})}function Nh({job:e,deleting:t,onOpen:r,onAsk:n,onDelete:a}){const o=e.status==="complete",i=po(e.status),l=e.kind==="extraction",c=l?e.label||"Uploaded document":`${e.base_label||"Baseline"} → ${e.target_label||"Revised"}`,u=l?e.n_pages||"-":`${e.n_pages_base||"-"} / ${e.n_pages_target||"-"}`;return s.jsxs("article",{className:`job-card ${i.className}`,children:[s.jsxs("div",{className:"job-main",children:[s.jsx("div",{className:"job-kind",children:l?"Extraction":"Comparison"}),s.jsx("h3",{dir:"auto",children:c}),s.jsxs("div",{className:"job-meta",children:[s.jsxs("span",{children:["#",String(e.run_id||"").slice(0,6)]}),s.jsx("span",{children:[e.source_format,e.base_format,e.target_format].filter(Boolean).join(" / ")||"document"}),s.jsxs("span",{children:[u," pages"]}),s.jsx("span",{children:yh(e.duration_ms,e.status)})]}),e.status_message&&s.jsx("p",{dir:"auto",children:e.status_message}),i.isFailed&&e.error&&s.jsx("p",{className:"job-error",dir:"auto",children:He(tt(e.error),180)})]}),s.jsxs("div",{className:"job-side",children:[s.jsx(_h,{status:e.status}),s.jsx(Eh,{value:e.progress||0,status:e.status}),s.jsx("span",{className:"job-date",children:vh(e.created_at)}),s.jsxs("div",{className:"job-actions",children:[s.jsx("button",{type:"button",onClick:r,disabled:!o,className:"primary-action compact",children:"Open"}),s.jsx("button",{type:"button",onClick:n,disabled:!o||!l,className:"ghost-action compact",children:"Query"}),s.jsx("button",{type:"button",onClick:a,disabled:t,className:"danger-action compact",children:t?"Deleting":"Delete"})]})]})]})}function Ph({onUpload:e,busy:t,onAdmin:r}){const n=Kd("comparison"),a=t||n.loading||!n.selectedId||n.datasets.length===0;return s.jsxs("form",{onSubmit:e,className:"doc-workflow-card",children:[s.jsx("div",{className:"workflow-card-head",children:s.jsx("div",{children:s.jsx("h2",{children:"Compare two documents"})})}),s.jsx(Gd,{...n,busy:t,onAdmin:r}),!n.loading&&n.datasets.length===0?s.jsx(Jd,{onAdmin:r}):null,s.jsxs("div",{className:"upload-grid compare",children:[s.jsx(Us,{label:"Baseline",helper:"Approved or reference file",name:"base",disabled:a}),s.jsx(Us,{label:"Revised",helper:"Latest or proposed file",name:"target",disabled:a}),s.jsxs("div",{className:"workflow-action-rail",children:[s.jsx("button",{disabled:a,className:"primary-action full",children:t?"Processing":"Compare documents"}),s.jsx("div",{className:"workflow-note",children:"Side-by-side preview, semantic changes, and export."})]})]})]})}function zh({onUpload:e,busy:t,onAdmin:r}){const n=Kd("extraction"),a=t||n.loading||!n.selectedId||n.datasets.length===0;return s.jsxs("form",{onSubmit:e,className:"doc-workflow-card",children:[s.jsx("div",{className:"workflow-card-head",children:s.jsx("div",{children:s.jsx("h2",{children:"Extract documents"})})}),s.jsx(Gd,{...n,busy:t,onAdmin:r}),!n.loading&&n.datasets.length===0?s.jsx(Jd,{onAdmin:r}):null,s.jsxs("div",{className:"upload-grid extract",children:[s.jsx(Us,{label:"Document or image",helper:"PDF, image, Word, Excel, xlsb, CSV, or TSV",name:"document",disabled:a,multiple:!0}),s.jsxs("div",{className:"workflow-action-rail",children:[s.jsx("button",{disabled:a,className:"primary-action full",children:t?"Extracting":"Extract content"}),s.jsx("div",{className:"workflow-note",children:"Text, tables, OCR, structured JSON, and document query."})]})]})]})}function Kd(e){const[t,r]=w.useState([]),[n,a]=w.useState(""),[o,i]=w.useState(!0),[l,c]=w.useState("");return w.useEffect(()=>{let u=!0;return(async()=>{i(!0),c("");try{const f=window.sessionStorage.getItem("simulated_role")||"platform_admin",g=await fetch(`${V}/datasets`,{headers:{"X-User-Role":f}});if(!g.ok){const j=g.status===404?"Use case service is not available. Confirm the backend admin/datasets routes are deployed, then refresh.":`Could not load use cases (${g.status})`;throw new Error(j)}const x=((await g.json()).datasets||[]).filter(j=>(j.use_case_type||"comparison")===e);if(!u)return;r(x),a(j=>{var p;return j||((p=x[0])==null?void 0:p.id)||""})}catch(f){if(!u)return;r([]),a(""),c((f==null?void 0:f.message)||"Could not load use cases.")}finally{u&&i(!1)}})(),()=>{u=!1}},[]),{datasets:t,selectedId:n,setSelectedId:a,loading:o,error:l}}function Gd({datasets:e,selectedId:t,setSelectedId:r,loading:n,error:a,busy:o,onAdmin:i}){return s.jsxs("div",{className:"usecase-selector",children:[s.jsxs("label",{children:[s.jsx("span",{children:"Use case"}),s.jsxs("select",{name:"family_id",value:t,onChange:l=>r(l.target.value),required:!0,disabled:o||n||e.length===0,children:[s.jsx("option",{value:"",disabled:!0,children:n?"Loading use cases":"Select a use case"}),e.map(l=>s.jsxs("option",{value:l.id,children:[l.supplier," - ",l.family_name," (",l.domain||"generic",")"]},l.id))]})]}),a?s.jsx("p",{className:"usecase-error",children:a}):null,e.length>0?s.jsx("button",{type:"button",className:"ghost-action compact",onClick:i,children:"Manage"}):null]})}function Jd({onAdmin:e}){return s.jsxs("div",{className:"usecase-required",children:[s.jsx("strong",{children:"Use case required"}),s.jsx("p",{children:"Create or bootstrap a document use case before uploading files. The selected use case supplies metadata, template rules, access policy, and extraction guidance."}),s.jsx("button",{type:"button",className:"primary-action compact",onClick:e,children:"Open Admin Studio"})]})}function Us({label:e,helper:t,name:r,disabled:n,multiple:a=!1}){const[o,i]=w.useState(""),l=w.useRef(null),c=()=>{var u;n||(u=l.current)==null||u.click()};return s.jsxs("div",{onClick:c,onKeyDown:u=>{(u.key==="Enter"||u.key===" ")&&c()},role:"button",tabIndex:n?-1:0,className:`file-lane${n?" disabled":""}`,children:[s.jsx("input",{ref:l,type:"file",name:r,accept:lh,multiple:a,required:!0,disabled:n,onClick:u=>u.stopPropagation(),onChange:u=>{var f;const m=Array.from(u.target.files||[]);i(m.length>1?`${m.length} files selected`:((f=m[0])==null?void 0:f.name)||"")},style:{position:"absolute",width:1,height:1,opacity:0,pointerEvents:"none"}}),s.jsxs("div",{className:"file-lane-head",children:[s.jsxs("div",{children:[s.jsx("div",{className:"file-lane-title",children:e}),s.jsx("div",{className:"file-lane-helper",children:t})]}),s.jsx("span",{className:"file-lane-pill",children:"Files"})]}),s.jsx("div",{className:`file-lane-value${o?" selected":""}`,children:o||"Select a file"})]})}function Th({runId:e,meta:t,onVerifyPage:r}){const n=t.base_format&&t.base_format!=="pdf"?t.base_native_pages||t.n_pages_base||1:t.n_pages_base||1,a=t.target_format&&t.target_format!=="pdf"?t.target_native_pages||t.n_pages_target||1:t.n_pages_target||1,o=Math.max(n,a),[i,l]=w.useState(null),[c,u]=w.useState(!1);w.useEffect(()=>{let y=!1;return l(null),Promise.all([fetch(`${V}/runs/${e}/summary`).then(async v=>{if(!v.ok)throw new Error("Failed to load summary");return v.json()}),fetch(`${V}/runs/${e}/diff?limit=500`).then(async v=>v.ok?v.json():{diffs:[]})]).then(([v,x])=>{if(y)return;const j=Array.isArray(v)?v:v.rows||v.summary||[];l(kh(j,x.diffs||[]))}).catch(v=>{y||(console.error("Failed to build quick summary",v),l([]))}),()=>{y=!0}},[e]);const m=Ka.useMemo(()=>(Array.isArray(i)?i:[]).filter(v=>v.change||v.description||v.before||v.after).sort((v,x)=>{const j=fc(v.impact)+(hc(v)?2:0)+(Os(v.confidence)||0);return fc(x.impact)+(hc(x)?2:0)+(Os(x.confidence)||0)-j}),[i]),f=y=>{const v=String(y||""),x=v.match(/(?:revised|target|page|p\.)\s*(\d+)/i)||v.match(/\b(\d{1,4})\b/);if(!x)return null;const j=Number.parseInt(x[1],10);return Number.isFinite(j)&&j>=1&&j<=o?j:null};if(i===null)return s.jsx("div",{className:"key-audit-empty",children:"Building comparison summary..."});if(!m.length)return s.jsx("div",{className:"key-audit-empty",children:"No prioritized summary items were returned for this comparison."});const g=c?m.slice(0,16):m.slice(0,8);return s.jsxs("div",{className:"key-audit-panel compact",children:[s.jsx("div",{className:"key-audit-list",children:g.map((y,v)=>{const x=f(y.citation);return s.jsxs("div",{className:"key-audit-item",children:[s.jsx(Qd,{type:Ir(y)}),s.jsxs("div",{className:"key-audit-copy",dir:"auto",children:[s.jsx("strong",{children:He(y.feature||y.item||y.area||"Document change",120)}),s.jsx("span",{children:He(y.change||y.description||y.before||y.after||"Value updated.",260)}),y.citation?s.jsx("small",{children:wh(y.citation)}):null]}),x?s.jsxs("button",{type:"button",className:"primary-action compact",onClick:()=>r(x),children:["Verify page ",x]}):null]},`${y.stable_key||y.feature||y.item||v}`)})}),m.length>8&&s.jsx("button",{type:"button",className:"key-audit-more",onClick:()=>u(y=>!y),children:c?"Show fewer":`Show ${Math.min(16,m.length)} items`})]})}function Dh({runId:e,meta:t,pageNum:r,setPageNum:n}){const a=t.base_format&&t.base_format!=="pdf"?t.base_native_pages||t.n_pages_base||1:t.n_pages_base||1,o=t.target_format&&t.target_format!=="pdf"?t.target_native_pages||t.n_pages_target||1:t.n_pages_target||1,i=Math.max(a,o),[l,c]=w.useState(r),[u,m]=w.useState(r),[f,g]=w.useState(100),[y,v]=w.useState(!1),[x,j]=w.useState(!0),p=w.useRef(null),d=w.useRef(null);w.useEffect(()=>{c(r),m(r)},[e,r]),w.useEffect(()=>{if(!x)return;const b=p.current,S=d.current;if(!b||!S)return;let C=!1;const E=(A,U)=>{C||(C=!0,U.scrollTop=A.scrollTop,U.scrollLeft=A.scrollLeft,window.requestAnimationFrame(()=>{C=!1}))},P=()=>E(b,S),$=()=>E(S,b);return b.addEventListener("scroll",P,{passive:!0}),S.addEventListener("scroll",$,{passive:!0}),()=>{b.removeEventListener("scroll",P),S.removeEventListener("scroll",$)}},[e,r,x]);const h=b=>{const S=Math.max(1,Math.min(i,b));n(S),c(S),m(S)};return s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:12,flexWrap:"wrap"},children:[s.jsx("button",{onClick:()=>h(r-1),disabled:r<=1,style:gc(r<=1),children:"Prev both"}),s.jsxs("span",{style:{fontSize:17,fontWeight:650,minWidth:100},children:["Page ",r," / ",i]}),s.jsx("button",{onClick:()=>h(r+1),disabled:r>=i,style:gc(r>=i),children:"Next both"}),s.jsxs("div",{className:"viewer-toolbar-group","aria-label":"PDF zoom controls",children:[s.jsx("button",{type:"button",onClick:()=>g(b=>Math.max(50,b-25)),title:"Zoom out",children:"-"}),s.jsxs("span",{children:[f,"%"]}),s.jsx("button",{type:"button",onClick:()=>g(b=>Math.min(300,b+25)),title:"Zoom in",children:"+"}),s.jsx("button",{type:"button",onClick:()=>g(100),title:"Reset zoom",children:"Reset"})]}),s.jsxs("label",{className:"viewer-sync-toggle",children:[s.jsx("input",{type:"checkbox",checked:x,onChange:b=>j(b.target.checked)}),s.jsx("span",{children:"Sync scroll"})]}),s.jsxs("label",{className:"viewer-sync-toggle",style:{marginLeft:8},children:[s.jsx("input",{type:"checkbox",checked:y,onChange:b=>v(b.target.checked)}),s.jsx("span",{children:"Smart crop"})]}),s.jsx($h,{})]}),s.jsxs("div",{className:"viewer-grid",style:{display:"grid",gridTemplateColumns:"minmax(0, 1fr) minmax(0, 1fr)",gap:14},children:[s.jsx(wc,{runId:e,side:"base",pageNum:l,setPageNum:c,totalPages:a,label:"Baseline document",docName:t.base_label,format:t.base_format,zoom:f,scrollRef:p,cropMargins:y}),s.jsx(wc,{runId:e,side:"target",pageNum:u,setPageNum:m,totalPages:o,label:"Revised document",docName:t.target_label,format:t.target_format,zoom:f,scrollRef:d,cropMargins:y})]})]})}function $h(){return s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7,marginLeft:6,flexWrap:"wrap"},children:[s.jsx(Uo,{label:"added",color:Q.ADDED.bg,border:Q.ADDED.border}),s.jsx(Uo,{label:"deleted",color:Q.DELETED.bg,border:Q.DELETED.border}),s.jsx(Uo,{label:"modified",color:Q.MODIFIED.bg,border:Q.MODIFIED.border})]})}function Uo({label:e,color:t,border:r}){return s.jsx("span",{style:{background:t,border:`1px solid ${r}`,color:"var(--text-primary)",padding:"2px 8px",borderRadius:999,fontSize:12,fontWeight:600},children:e})}function wc({runId:e,side:t,pageNum:r,setPageNum:n,totalPages:a,label:o,docName:i,format:l,zoom:c=100,scrollRef:u,cropMargins:m}){const[f,g]=w.useState({regions:[]}),[y,v]=w.useState(null),[x,j]=w.useState("idle"),p=r>=1&&r<=a,d=l&&l!=="pdf";w.useEffect(()=>{if(j(p&&!d?"loading":"idle"),!p){g({regions:[]}),v(null);return}if(d){g({regions:[]}),fetch(`${V}/runs/${e}/native-page/${t}/${r}`).then($=>$.json()).then(v).catch(()=>v({items:[]}));return}v(null),fetch(`${V}/runs/${e}/overlay/${t}/${r}`).then($=>$.json()).then(g).catch(()=>g({regions:[]}))},[e,t,r,p,d]);const h=f.content_box,b=f.page_width||612,S=f.page_height||792,C=m&&h&&h.x_max>h.x_min&&h.y_max>h.y_min;let E={position:"relative",width:"100%"},P={position:"relative",width:`${c}%`};if(C){const $=h.x_min/b,A=h.y_min/S,U=(h.x_max-h.x_min)/b;E={position:"relative",overflow:"hidden",width:"100%",paddingTop:`${(h.y_max-h.y_min)/S/U*c}%`},P={position:"absolute",left:`${-($/U)*c}%`,top:`${-(A/U)*c}%`,width:`${1/U*c}%`}}return s.jsxs("div",{className:"doc-viewer-shell",children:[s.jsxs("div",{style:{marginBottom:7,display:"flex",justifyContent:"space-between",gap:10,alignItems:"flex-end",flexWrap:"wrap"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:13,color:"var(--text-secondary)",fontWeight:600},children:o}),s.jsxs("div",{style:{fontSize:14,color:"var(--text-primary)",fontWeight:600},children:[i," - ",p?`page ${r}`:"no page",l&&s.jsx("span",{style:{color:"var(--text-secondary)",fontSize:11,marginLeft:6},children:String(l).toUpperCase()})]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[s.jsx("button",{type:"button",onClick:()=>n(Math.max(1,r-1)),disabled:r<=1,style:xc(r<=1),title:`Previous ${o}`,children:"Prev"}),s.jsxs("span",{style:{color:"var(--text-secondary)",fontSize:12,minWidth:46,textAlign:"center"},children:[r,"/",a||1]}),s.jsx("button",{type:"button",onClick:()=>n(Math.min(a||1,r+1)),disabled:r>=(a||1),style:xc(r>=(a||1)),title:`Next ${o}`,children:"Next"})]})]}),s.jsx("div",{ref:u,className:`doc-frame dl-scrollbar ${d?"native":""}`,style:{overflow:"auto",maxHeight:"75vh",position:"relative"},children:p?d?s.jsx(Lh,{page:y,side:t}):s.jsx("div",{style:E,children:s.jsxs("div",{className:"pdf-zoom-stage",style:P,children:[x==="loading"&&s.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)",background:"var(--surface-raised)",zIndex:1,fontWeight:600},children:["Loading page ",r]}),s.jsx("img",{src:`${V}/runs/${e}/pages/${t}/${r}`,onLoad:()=>j("ready"),onError:()=>j("error"),style:{display:"block",width:"100%",height:"auto"},alt:`${t} page ${r}`},`${t}-${r}`),x==="error"&&s.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:Q.DELETED.text,background:"#fff5f5",zIndex:2,fontWeight:600},children:["Could not load page ",r]}),(f.regions||[]).map(($,A)=>{const[U,ke,Ue,je]=$.bbox||[0,0,0,0],Be=Q[String($.change_type||"").toUpperCase()]||Q.MODIFIED,ot=$.page_width||f.page_width||612,ge=$.page_height||f.page_height||792,N=$.border_color||Be.border,R=$.color||Be.bg;return s.jsx("div",{title:`${$.change_type||"change"} ${$.stable_key||""} (${$.block_type||"block"})`,style:{position:"absolute",left:`${U/ot*100}%`,top:`${ke/ge*100}%`,width:`${Math.max(.15,(Ue-U)/ot*100)}%`,height:`${Math.max(.15,(je-ke)/ge*100)}%`,background:R,border:`1px solid ${N}`,boxShadow:`inset 0 0 0 1px ${R}`,pointerEvents:"auto"}},A)})]})}):s.jsx(Rh,{pageNum:r})})]})}function Rh({pageNum:e}){return s.jsxs("div",{style:{minHeight:520,display:"grid",placeItems:"center",color:"var(--text-secondary)",fontWeight:600},children:["No page ",e," in this document."]})}function Lh({page:e,side:t}){if(!e)return s.jsx("div",{style:{minHeight:520,display:"grid",placeItems:"center",color:"var(--text-secondary)",fontWeight:600},children:"Loading structured page"});const r=e.items||[],n=e.viewer_type||(e.format==="spreadsheet"?"spreadsheet":"document");return r.length?s.jsx("div",{className:`native-page ${n}`,dir:"auto",children:r.map(a=>s.jsx(Ah,{item:a,viewerType:n,side:t||e.side},a.id))}):s.jsx("div",{style:{minHeight:520,display:"grid",placeItems:"center",color:"var(--text-secondary)",fontWeight:600},children:"No structured content on this page."})}function Ah({item:e,viewerType:t,side:r}){var i;const n=Fs(e.highlight);if(e.type==="table"&&!((i=e.payload)!=null&&i.layout_table)&&!Fh(e,t))return s.jsx(Mh,{item:e,viewerType:t});const a=e.type==="table"?{...e,text:Oh(e),payload:{...e.payload||{},layout_table:!0}}:e,o=e.type==="section"||e.type==="heading";return s.jsx("div",{className:"native-block",dir:"auto",style:{...n,marginBottom:o?10:8,padding:o?"7px 9px":"6px 8px",borderRadius:6,fontSize:o?14:13,fontWeight:o?650:400,lineHeight:1.45},title:e.change_type,children:s.jsx(Ih,{item:a,side:r})})}function Ih({item:e,side:t}){var a,o;const r=e.token_diff||[];return e.highlight==="modified"&&Array.isArray(r)&&r.some(i=>i.op&&i.op!=="equal")?s.jsx("span",{dir:"auto",children:r.map((i,l)=>{const c=i.op;if(c==="delete"&&t!=="base"||c==="insert"&&t==="base")return null;const u=c==="equal"||t==="base"?i.text_a:i.text_b;if(!u)return null;let m="";return c==="delete"&&(m="native-token-delete"),c==="insert"&&(m="native-token-insert"),c==="replace"&&(m=t==="base"?"native-token-replace-base":"native-token-replace-target"),s.jsxs(Ka.Fragment,{children:[l>0?" ":"",s.jsx("span",{className:`native-token ${m}`,dir:"auto",children:u})]},l)})}):s.jsx("span",{dir:"auto",children:e.text||((a=e.payload)==null?void 0:a.text)||((o=e.payload)==null?void 0:o.layout_text)||e.path||"-"})}function Mh({item:e,viewerType:t}){var i;const r=Ui(e),n=e.rows||[],a=((i=e.payload)==null?void 0:i.table_title)||e.text||"Table",o=t==="spreadsheet";return s.jsxs("div",{className:"native-block",dir:"auto",style:{...Fs(e.highlight),marginBottom:14,padding:10,borderRadius:7},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:10,alignItems:"baseline",flexWrap:"wrap",marginBottom:7},children:[s.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--text-primary)"},children:a}),s.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)"},children:[n.length," row",n.length===1?"":"s"]})]}),s.jsx("div",{className:"native-table-wrap dl-scrollbar",children:s.jsxs("table",{className:`native-table ${o?"spreadsheet":""}`,style:{fontSize:12},children:[s.jsx("thead",{children:s.jsx("tr",{style:{background:"var(--surface-sunken)",color:"var(--text-primary)"},children:r.map((l,c)=>{const u=String(l||"").toLowerCase(),m=c>0&&(u.includes("pcv")||u.includes("pcb")||u.includes("model")||u.includes("spec")||String(l||"").length<=4||r.length>=6&&String(l||"").length<=12);return s.jsx("th",{dir:"auto",className:m?"vertical-th":"",style:m?{...nr,verticalAlign:"bottom"}:nr,children:m?s.jsx("span",{className:"vertical-th-text",children:l}):l},l)})})}),s.jsx("tbody",{children:n.map(l=>{const c=Fs(l.highlight,!0);return s.jsx("tr",{title:l.change_type,style:{background:c.background},children:r.map(u=>{var m;return s.jsx("td",{dir:"auto",style:{...Ar,borderLeft:c.borderLeft},children:ur((m=Bi(l.values))==null?void 0:m[u])},u)})},l.id)})})]})})]})}function Ui(e){return(Array.isArray(e==null?void 0:e.header)?e.header:[]).map(r=>String(r||"").trim()).filter(r=>r&&!fr(r))}function Bi(e){return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).map(([t,r])=>[String(t||"").trim(),r]).filter(([t])=>t&&!fr(t)))}function Oh(e){const r=(Array.isArray(e==null?void 0:e.rows)?e.rows:[]).map(n=>{const a=Bi(n.values);return Object.values(a).map(i=>ur(i)).filter(i=>i&&i!=="-").join(" / ")||n.text||""}).filter(Boolean);return r.length?r.join(`
`):(e==null?void 0:e.text)||Ui(e).join(" / ")||"Document text"}function Fh(e,t){var y;if(((y=e==null?void 0:e.payload)==null?void 0:y.source_format)==="docx"||t!=="document")return!1;const r=Array.isArray(e==null?void 0:e.header)?e.header:[],n=Ui(e),a=Array.isArray(e==null?void 0:e.rows)?e.rows:[],o=r.some(v=>fr(v)),i=a.flatMap(v=>Object.values(Bi(v.values||{})).map(x=>String(x||"").trim()).filter(Boolean));if(o&&n.length<=2)return!0;if(!a.length||!i.length)return!1;const c=i.filter(v=>v.length>70||v.split(/\s+/).length>=10).length/Math.max(1,i.length),m=i.filter(v=>/[\u0600-\u06ff]/.test(v)&&/[A-Za-z]/.test(v)).length/Math.max(1,i.length),g=n.filter(v=>/feature|description|item|name|order|code|part|model|price|amount|status|date|term|rent|fee/i.test(v)).length/Math.max(1,n.length);return m>=.2&&g<.35||a.length<=6&&c>=.45&&g<.35}function Uh({columns:e,rows:t}){if(e=(e||[]).filter(n=>!fr(n)),!e.length||!(t!=null&&t.length))return null;const r=xh(e.length,420,920);return s.jsx("div",{className:"dl-scrollbar table-scroll-frame",style:{marginTop:12},children:s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12,minWidth:r},children:[s.jsx("thead",{children:s.jsx("tr",{style:{background:"#f2eee6"},children:e.map(n=>s.jsx("th",{title:n,style:nr,dir:"auto",children:n},n))})}),s.jsx("tbody",{children:t.map((n,a)=>s.jsx("tr",{children:e.map(o=>{var i;return s.jsx("td",{style:Ar,dir:"auto",children:ur(((i=n==null?void 0:n.values)==null?void 0:i[o])??(n==null?void 0:n[o]))},o)})},a))})]})})}function ar({columns:e,rows:t}){const r=(e||[]).filter(n=>!fr(n));return s.jsx("div",{className:"dl-scrollbar",style:{overflowX:"auto"},children:s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13,minWidth:780},children:[s.jsx("thead",{children:s.jsx("tr",{style:{background:"#1f2937",color:"white"},children:r.map(n=>s.jsx("th",{dir:"auto",style:{...nr,padding:"10px 12px",borderBottom:"1px solid #384250",color:"white"},children:n},n))})}),s.jsx("tbody",{children:t.slice(0,200).map((n,a)=>s.jsx("tr",{children:r.map(o=>s.jsx("td",{dir:"auto",style:Ar,children:ur(n[o])},o))},a))})]})})}function Bh({rows:e}){return e!=null&&e.length?s.jsx("div",{className:"dl-scrollbar",style:{overflowX:"auto",marginTop:10},children:s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13,minWidth:640},children:[s.jsx("thead",{children:s.jsxs("tr",{style:{background:"#f2eee6",color:"#344054"},children:[s.jsx("th",{style:nr,dir:"auto",children:"Field"}),s.jsx("th",{style:nr,dir:"auto",children:"Before"}),s.jsx("th",{style:nr,dir:"auto",children:"After"})]})}),s.jsx("tbody",{children:e.map((t,r)=>s.jsxs("tr",{children:[s.jsx("td",{style:Ar,dir:"auto",children:t.field||t.column||t.name||"-"}),s.jsx("td",{style:{...Ar,color:Q.DELETED.text},dir:"auto",children:ur(t.before??t.base??t.old)}),s.jsx("td",{style:{...Ar,color:Q.ADDED.text},dir:"auto",children:ur(t.after??t.target??t.new)})]},r))})]})}):null}function Wh({runId:e,meta:t,tab:r,setTab:n}){return s.jsxs(s.Fragment,{children:[s.jsx(qh,{meta:t}),s.jsx(Hh,{tab:r,setTab:n}),s.jsxs("main",{style:{...dt,padding:12},children:[r==="overview"&&s.jsx(Qh,{runId:e,meta:t}),r==="tables"&&s.jsx(Kh,{runId:e}),r==="text"&&s.jsx(Gh,{runId:e}),r==="json"&&s.jsx(Jh,{runId:e,meta:t})]}),s.jsxs("section",{className:"workspace-surface extraction-query-surface",style:{marginTop:12},children:[s.jsx("div",{className:"surface-title-row",children:s.jsxs("div",{children:[s.jsx("h3",{children:"Ask This Extraction"}),s.jsx("p",{children:"Search the extracted text, tables, headings, and page evidence from this document."})]})}),s.jsx(Vh,{runId:e})]})]})}function Vh({runId:e}){const[t,r]=w.useState(""),[n,a]=w.useState([]),[o,i]=w.useState(!1),l=async()=>{const c=t.trim();if(!c||o)return;const u=`extract-user-${Date.now()}`,m=`extract-answer-${Date.now()}`;a(f=>[...f,{id:u,role:"user",text:c,timestamp:new Date().toLocaleTimeString()}]),r(""),i(!0);try{const f=await fetch(`${V}/extract-runs/${e}/query`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:c,mode:"fast"})});if(!f.ok)throw new Error(await ce(f));const g=await f.json();a(y=>{var v;return[...y,{id:m,role:"assistant",text:g.answer||`Found ${((v=g.rows)==null?void 0:v.length)||0} matching passages.`,rows:g.rows||[],columns:g.columns||["Page","Type","Path","Text","Score"],timestamp:new Date().toLocaleTimeString()}]})}catch(f){a(g=>[...g,{id:m,role:"assistant",text:se(f),rows:[],timestamp:new Date().toLocaleTimeString(),isError:!0}])}finally{i(!1)}};return s.jsxs("section",{className:"query-workbench",children:[n.length===0?s.jsx(Vt,{label:"Ask about clauses, tables, fields, dates, page content, or extracted values."}):s.jsx("div",{className:"query-chat-log",children:n.map(c=>{var u;return s.jsxs("article",{className:`query-message ${c.role}${c.isError?" error":""}`,children:[s.jsxs("div",{className:"query-message-meta",children:[s.jsx("span",{children:c.role==="user"?"You":"Extraction query"}),s.jsx("span",{children:c.timestamp})]}),s.jsx("div",{className:"query-message-text",dir:"auto",children:c.text}),((u=c.rows)==null?void 0:u.length)>0&&s.jsx("div",{className:"query-results-shell",style:{marginTop:10},children:s.jsx(ar,{columns:c.columns,rows:c.rows})})]},c.id)})}),s.jsxs("div",{className:"query-composer",children:[s.jsx("textarea",{value:t,onChange:c=>r(c.target.value),onKeyDown:c=>{c.key==="Enter"&&!c.shiftKey&&(c.preventDefault(),l())},placeholder:"Ask about the extracted document...",disabled:o,rows:3}),s.jsx("div",{className:"query-composer-actions",children:s.jsx("button",{type:"button",className:"primary-action compact",onClick:l,disabled:o||!t.trim(),children:o?"Searching":"Ask"})})]})]})}function qh({meta:e}){var r,n;const t=e.summary||{};return s.jsxs("section",{style:{...dt,padding:12,display:"flex",gap:8,marginBottom:12,flexWrap:"wrap",alignItems:"center"},children:[s.jsx(ye,{label:"Format",value:(e.source_format||"-").toUpperCase()}),s.jsx(ye,{label:"Documents",value:((r=e.documents)==null?void 0:r.length)||t.document_count||1}),s.jsx(ye,{label:"Coverage",value:typeof e.coverage=="number"?`${e.coverage.toFixed(1)}%`:"-"}),s.jsx(ye,{label:"Quality",value:t.quality||"-"}),s.jsx(ye,{label:"Tables",value:t.table_count||0}),s.jsx(ye,{label:"Blocks",value:Object.values(t.block_counts||{}).reduce((a,o)=>a+Number(o||0),0)}),s.jsx(ye,{label:"Pages",value:e.n_pages||e.native_pages||0}),Number(((n=e.ai_usage)==null?void 0:n.total_tokens)||0)>0&&s.jsx(ye,{label:"AI tokens",value:`${vt(e.ai_usage.total_tokens)} (${vt(e.ai_usage.calls||0)} calls)`})]})}function Hh({tab:e,setTab:t}){const r=[["overview","Extraction overview"],["tables","Extracted tables"],["text","Text blocks"],["json","Structured JSON"]];return s.jsx("nav",{style:{display:"flex",gap:4,borderBottom:"1px solid #d8d0c3",marginBottom:12,overflowX:"auto"},children:r.map(([n,a])=>{const o=e===n;return s.jsx("button",{onClick:()=>t(n),style:{padding:"10px 14px",background:o?"#1f2937":"transparent",color:o?"white":"#344054",border:o?"1px solid #1f2937":"1px solid transparent",borderRadius:"8px 8px 0 0",cursor:"pointer",fontWeight:600,whiteSpace:"nowrap"},children:a},n)})})}function Qh({runId:e,meta:t}){const r=t.summary||{},n=t.ai_analysis,a=(n==null?void 0:n.result)||null;return s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12,flexWrap:"wrap",marginBottom:12},children:[s.jsxs("div",{children:[s.jsx("h2",{style:{margin:0,fontSize:18,fontWeight:650},dir:"auto",children:t.label||"Extracted document"}),s.jsx("p",{style:{margin:"6px 0 0",color:"#667085",fontSize:13},dir:"auto",children:r.message||"Extraction complete."})]}),s.jsx("button",{onClick:()=>{window.location.href=`${V}/extract-runs/${e}/json`},style:uh(!1),children:"Download JSON"})]}),s.jsxs("div",{className:"report-metrics",style:{display:"grid",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",gap:10,marginBottom:12},children:[s.jsx(sa,{label:"Extraction coverage",value:typeof t.coverage=="number"?`${t.coverage.toFixed(1)}%`:"-"}),s.jsx(sa,{label:"Tables detected",value:r.table_count||0}),s.jsx(sa,{label:"Table rows",value:r.table_row_count||0}),s.jsx(sa,{label:"Image/OCR blocks",value:r.figure_count||0})]}),s.jsxs("div",{style:{...dt,padding:14,boxShadow:"none",marginBottom:12},children:[s.jsx("div",{style:{fontWeight:650,marginBottom:8},children:"Block breakdown"}),s.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[Object.entries(r.block_counts||{}).map(([o,i])=>s.jsx(ye,{label:o.replace("_"," "),value:i},o)),Object.keys(r.block_counts||{}).length===0&&s.jsx("span",{style:{color:"#667085"},children:"No block statistics available."})]})]}),n&&s.jsxs("div",{style:{...dt,padding:14,boxShadow:"none"},children:[s.jsxs("div",{style:{fontWeight:650,marginBottom:8},children:["AI-assisted analysis ",n.available?"- available":"- unavailable"]}),!n.available&&s.jsx("div",{style:{color:Q.DELETED.text},dir:"auto",children:normalizeErrorMessage(n.error)||"AI analysis was not generated."}),a&&s.jsxs("div",{style:{color:"#344054",lineHeight:1.5},children:[s.jsx("p",{style:{marginTop:0},dir:"auto",children:a.executive_summary||"AI analysis completed."}),Array.isArray(a.key_items)&&a.key_items.length>0&&s.jsx(ar,{columns:["Item"],rows:a.key_items.slice(0,20).map(o=>({Item:typeof o=="string"?o:JSON.stringify(o)}))})]})]}),s.jsx(Sh,{usage:t.ai_usage})]})}function sa({label:e,value:t}){return s.jsxs("div",{style:{background:"#fbfaf6",border:"1px solid #ded6c8",borderRadius:8,padding:12},children:[s.jsx("div",{style:{fontSize:12,color:"#667085",fontWeight:600},children:e}),s.jsx("div",{style:{marginTop:4,fontSize:22,color:"#1f2937",fontWeight:650},children:t})]})}function Kh({runId:e}){const[t,r]=w.useState({loading:!0,error:"",tables:[]});return w.useEffect(()=>{let n=!1;return r({loading:!0,error:"",tables:[]}),fetch(`${V}/extract-runs/${e}/tables?include_rows=true`).then(async a=>{if(!a.ok)throw new Error(await ce(a));return a.json()}).then(a=>{n||r({loading:!1,error:"",tables:a.tables||[]})}).catch(a=>{n||r({loading:!1,error:se(a),tables:[]})}),()=>{n=!0}},[e]),t.loading?s.jsx(Bn,{label:"Loading extracted tables..."}):t.error?s.jsx(Wi,{message:t.error}):t.tables.length?s.jsx("div",{style:{display:"grid",gap:12},children:t.tables.map(n=>s.jsxs("div",{style:{...dt,padding:12,boxShadow:"none"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12,flexWrap:"wrap",marginBottom:8},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:650},dir:"auto",children:n.display_name||n.title||"Detected table"}),s.jsxs("div",{style:{color:"#667085",fontSize:13,marginTop:3},dir:"auto",children:[n.page_label," · ",n.n_columns," columns · ",n.n_rows," rows · header quality ",Math.round((n.header_quality||0)*100),"%",n.extraction_confidence?` · extraction ${Math.round(n.extraction_confidence*100)}%`:""]})]}),s.jsx("code",{children:String(n.id||"").slice(0,8)})]}),Array.isArray(n.quality_warnings)&&n.quality_warnings.length>0&&s.jsxs("div",{style:{color:"#8a5a00",fontSize:13,marginBottom:8},dir:"auto",children:["Review note: ",n.quality_warnings.slice(0,2).join(" ")]}),s.jsxs("div",{style:{color:"#475467",fontSize:13,marginBottom:8},dir:"auto",children:["Columns: ",(n.columns||[]).slice(0,12).join(" | ")||"No columns detected"]}),s.jsx(Uh,{columns:n.columns||[],rows:n.rows||n.row_preview||[]})]},n.id))}):s.jsx(Vt,{label:"No tables were detected in this document."})}function Gh({runId:e}){const[t,r]=w.useState({loading:!0,error:"",blocks:[]});if(w.useEffect(()=>{let a=!1;return r({loading:!0,error:"",blocks:[]}),fetch(`${V}/extract-runs/${e}/blocks?limit=1000`).then(async o=>{if(!o.ok)throw new Error(await ce(o));return o.json()}).then(o=>{a||r({loading:!1,error:"",blocks:o.blocks||[]})}).catch(o=>{a||r({loading:!1,error:se(o),blocks:[]})}),()=>{a=!0}},[e]),t.loading)return s.jsx(Bn,{label:"Loading extracted text blocks..."});if(t.error)return s.jsx(Wi,{message:t.error});const n=t.blocks.filter(a=>a.text||a.type==="table").slice(0,500).map(a=>({Page:a.page_number,Type:a.type,Path:a.path,Text:He(a.text||JSON.stringify(a.payload||{}),700)}));return n.length?s.jsx(ar,{columns:["Page","Type","Path","Text"],rows:n}):s.jsx(Vt,{label:"No extracted text blocks were returned."})}function Jh({runId:e,meta:t}){const[r,n]=w.useState({loading:!0,error:"",data:null});if(w.useEffect(()=>{let f=!1;return n({loading:!0,error:"",data:null}),ph(e).then(g=>{f||n({loading:!1,error:"",data:g})}).catch(g=>{f||n({loading:!1,error:se(g),data:null})}),()=>{f=!0}},[e]),r.loading)return s.jsx(Bn,{label:"Building structured JSON preview..."});if(r.error)return s.jsx(Wi,{message:r.error});const a=r.data||{},o=a.tables||[],i=a.pages||[],l=a.content||i.flatMap(f=>f.content||[]),c=a.document_summary||{},u=c.extraction_quality||{},m=l.map(f=>f.inferred_record).filter(Boolean);return s.jsxs("div",{style:{display:"grid",gap:12},children:[s.jsxs("div",{style:{...dt,padding:12,boxShadow:"none"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12,alignItems:"flex-start",flexWrap:"wrap"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:650,marginBottom:8},dir:"auto",children:"Business extraction summary"}),s.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",color:"#344054",fontSize:13},children:[s.jsxs("span",{style:gr,children:["Document: ",c.label||t.label||"uploaded file"]}),s.jsxs("span",{style:gr,children:["Type: ",c.source_type||t.source_format||"document"]}),s.jsxs("span",{style:gr,children:["Template: ",c.detected_template||"generic document"]}),s.jsxs("span",{style:gr,children:["Quality: ",u.grade||"not rated"]}),Number.isFinite(u.score)&&s.jsxs("span",{style:gr,children:["Score: ",Math.round(u.score*100),"%"]}),c.detected_language&&s.jsxs("span",{style:gr,children:["Script: ",c.detected_language]})]})]}),s.jsx("button",{onClick:()=>{window.location.href=`${V}/extract-runs/${e}/json`},style:dh(),children:"Download clean JSON"})]}),Array.isArray(u.warnings)&&u.warnings.length>0&&s.jsx("div",{style:{color:"#8a5a00",fontSize:13,marginTop:8,lineHeight:1.4},dir:"auto",children:u.warnings.slice(0,3).map(f=>f.message||f).join(" ")})]}),s.jsxs("div",{style:{...dt,padding:12,boxShadow:"none"},children:[s.jsx("div",{style:{display:"flex",justifyContent:"space-between",gap:10,alignItems:"center",marginBottom:8},children:s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:650},children:"Document-order extracted text"}),s.jsxs("div",{style:{color:"#667085",fontSize:13,marginTop:3},children:[l.length," text block(s), ",m.length," inferred record(s), ",o.length," table(s), ",i.length," page(s)"]})]})}),l.length>0?s.jsx(ar,{columns:["Page","Type","Path","Text","Inferred record"],rows:l.slice(0,500).map(f=>({Page:f.page,Type:f.type,Path:f.path,Text:He(f.text,900),"Inferred record":f.inferred_record?pc(f.inferred_record.values):""}))}):s.jsx(Vt,{label:"No ordered text content was returned. Check the Text blocks tab."})]}),m.length>0&&s.jsxs("div",{style:{...dt,padding:12,boxShadow:"none"},children:[s.jsx("div",{style:{fontWeight:650,marginBottom:8},children:"Inferred business records"}),s.jsx(ar,{columns:["Page","Values","Source text","Citation"],rows:m.slice(0,120).map(f=>({Page:f.page,Values:pc(f.values),"Source text":He(f.source_text,700),Citation:f.citation}))})]}),o.length>0&&s.jsxs("div",{style:{...dt,padding:12,boxShadow:"none"},children:[s.jsx("div",{style:{fontWeight:650,marginBottom:8},children:"Extracted tables"}),s.jsx(ar,{columns:["title","page","area","row_count","columns"],rows:o.slice(0,30).map(f=>({title:f.title,page:f.page,area:f.area,row_count:f.row_count,columns:(f.columns||[]).join(" | ")}))})]}),s.jsxs("div",{style:{...dt,padding:12,boxShadow:"none"},children:[s.jsx("div",{style:{fontWeight:650,marginBottom:8},children:"Clean JSON preview"}),s.jsx("pre",{className:"dl-scrollbar",style:{margin:0,maxHeight:360,overflow:"auto",background:"#fbfaf6",border:"1px solid #e0d8ca",borderRadius:8,padding:12,fontSize:12,lineHeight:1.45,whiteSpace:"pre-wrap"},children:JSON.stringify({document_summary:a.document_summary,content:l.slice(0,30),tables:o.slice(0,10)},null,2)})]})]})}function Wi({message:e}){return s.jsx("div",{style:{marginTop:16,border:"1px solid #f0b4b4",background:"#fff5f5",color:"#9f1d1d",borderRadius:8,padding:13,fontSize:14,fontWeight:600,lineHeight:1.45},children:e})}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Yd=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=w.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:a="",children:o,iconNode:i,...l},c)=>w.createElement("svg",{ref:c,...Xh,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:Yd("lucide",a),...l},[...i.map(([u,m])=>w.createElement(u,m)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=(e,t)=>{const r=w.forwardRef(({className:n,...a},o)=>w.createElement(Zh,{ref:o,iconNode:t,className:Yd(`lucide-${Yh(e)}`,n),...a}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=mr("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=mr("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=mr("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=mr("FileOutput",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2",key:"1vk7w2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6",key:"1jink5"}],["path",{d:"m5 11-3 3",key:"1dgrs4"}],["path",{d:"m5 17-3-3h10",key:"1mvvaf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=mr("GitCompare",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=mr("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=mr("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);function ig(){return s.jsxs("div",{className:"altrai-wordmark","aria-label":"Altrai",children:[s.jsx("span",{children:"Altr"}),s.jsx("span",{className:"accent",children:"ai"})]})}const lg=[{label:"AI Document Intelligence",items:[{key:"compare",label:"Compare",icon:ag},{key:"extract",label:"Extract",icon:ng},{key:"jobs",label:"Work History",icon:og}]},{label:"Administration",items:[{key:"admin",label:"Admin Studio",icon:sg,title:"Use cases, datasets, and access policies"}]},{label:"AI Agents",items:[{key:"agents",label:"Coming soon",icon:eg,disabled:!0,title:"Future skills and multi-agent workflows"}]}];function cg({workspace:e,onNavigate:t,collapsed:r=!1}){return s.jsx("nav",{className:"workspace-nav","aria-label":"Workspace navigation",children:lg.map(n=>s.jsxs("div",{className:"workspace-nav-group",children:[!r&&s.jsx("div",{className:"workspace-nav-label",children:n.label}),n.items.map(a=>{const o=e===a.key;return s.jsxs("button",{type:"button",className:`workspace-nav-item${o?" active":""}`,onClick:()=>!a.disabled&&t(a.key),disabled:a.disabled,title:r?a.title||a.label:a.title,children:[s.jsx(a.icon,{className:"workspace-nav-icon","aria-hidden":"true"}),!r&&s.jsx("span",{className:"workspace-nav-text",children:a.label})]},`${n.label}-${a.label}-${a.key}`)})]},n.label))})}const Xd=w.createContext(null),bc="altrai_theme";function ug({children:e}){const[t,r]=w.useState(()=>typeof window>"u"?"system":window.localStorage.getItem(bc)||"system");w.useEffect(()=>{document.documentElement.dataset.theme=t,window.localStorage.setItem(bc,t)},[t]);const n=w.useMemo(()=>({theme:t,setTheme:r}),[t]);return s.jsx(Xd.Provider,{value:n,children:e})}function Zd(){const e=w.useContext(Xd);if(!e)throw new Error("useTheme must be used within ThemeProvider");return e}const dg=[["system","Auto"],["light","Light"],["dark","Dark"]];function pg({collapsed:e=!1}){const{theme:t,setTheme:r}=Zd();return s.jsxs("footer",{className:"user-footer",children:[s.jsx("div",{className:"user-avatar","aria-hidden":"true",children:"N"}),!e&&s.jsxs("div",{className:"user-meta",children:[s.jsx("strong",{children:"Nithin"}),s.jsx("span",{children:"platform_admin"})]}),!e&&s.jsx("div",{className:"rail-theme-toggle","aria-label":"Theme selector",children:dg.map(([n,a])=>s.jsx("button",{type:"button",className:t===n?"active":"",onClick:()=>r(n),children:a},n))})]})}const fg={jobs:"Work History",compare:"Compare",extract:"Extract",agents:"AI Agents",admin:"Admin Studio"},mg={compare:{label:"Comparison History",historyKind:"comparison"},extract:{label:"Extraction History",historyKind:"extraction"}};function hg({workspace:e,runId:t,onNavigate:r,onDownloadReport:n,children:a}){const[o,i]=w.useState(!1),{theme:l}=Zd(),c=mg[e];return s.jsxs("div",{className:`workspace-shell theme-${l}${o?" collapsed":""}`,children:[s.jsxs("aside",{className:"workspace-sidebar",children:[s.jsxs("div",{className:"workspace-brand",children:[s.jsx("div",{className:"workspace-brand-copy",children:s.jsx(ig,{})}),s.jsx("button",{type:"button",className:"workspace-collapse-button",onClick:()=>i(u=>!u),"aria-label":o?"Expand navigation":"Collapse navigation",title:o?"Expand navigation":"Collapse navigation",children:o?s.jsx(rg,{size:16,strokeWidth:1.5}):s.jsx(tg,{size:16,strokeWidth:1.5})})]}),s.jsx(cg,{workspace:e,onNavigate:r,collapsed:o}),s.jsx(pg,{collapsed:o})]}),s.jsxs("section",{className:"workspace-main",children:[s.jsxs("header",{className:"workspace-topbar",children:[s.jsx("div",{children:s.jsx("h1",{children:fg[e]||"Workspace"})}),s.jsxs("div",{className:"workspace-actions",children:[t&&s.jsx("button",{type:"button",className:"workspace-primary-action",onClick:n,children:"Export report"}),c&&s.jsx("button",{type:"button",className:"workspace-secondary-action",onClick:()=>r("jobs",{historyKind:c.historyKind}),children:c.label})]})]}),s.jsx("div",{className:"workspace-content",children:a})]})]})}const gg=[["platform_admin","Platform Admin"],["business_unit_admin","Business Unit Admin"],["reviewer","Reviewer"],["submitter","Submitter"],["viewer","Viewer"]],kc={supplier:"",family_name:"",domain:"generic",description:"",use_case_type:"comparison",expected_formats:["pdf","docx"],sample_plan:"",onboarding_notes:"",learning_mode:"ai_assisted_bootstrap",allowed_roles:[]},xg=[["pdf","PDF"],["docx","Word"],["xlsx","Excel"],["csv","CSV/TSV"],["image","Scanned image"]],vg=[["deterministic_first","Deterministic first"],["ai_assisted_bootstrap","AI-assisted bootstrap"],["manual_profile","Manual profile"]],yg=()=>({id:crypto.randomUUID(),baseline:null,revised:null});function wg(){var qi,Hi,Qi,Ki;const[e,t]=w.useState([]),[r,n]=w.useState(""),[a,o]=w.useState(null),[i,l]=w.useState(kc),[c,u]=w.useState(""),[m,f]=w.useState([]),[g,y]=w.useState(""),[v,x]=w.useState({use_case_type:"comparison",expected_formats:["pdf","docx"],sample_plan:"",onboarding_notes:"",learning_mode:"ai_assisted_bootstrap"}),[j,p]=w.useState({baseline:null,revised:null,variationPairs:[]}),[d,h]=w.useState(!0),[b,S]=w.useState(null),[C,E]=w.useState(""),[P,$]=w.useState(null),[A,U]=w.useState(null),[ke,Ue]=w.useState(0),[je,Be]=w.useState({baseline:null,revised:null,variations:[]}),[ot,ge]=w.useState([]),[N,R]=w.useState(!0),[T,O]=w.useState(""),[Z,G]=w.useState(""),[Re,L]=w.useState(""),I=()=>({"Content-Type":"application/json","X-User-Role":window.sessionStorage.getItem("simulated_role")||"platform_admin"}),W=async()=>{R(!0),G("");try{const k=await Kt("/admin/datasets",{headers:I()});t(k.datasets||[])}catch(k){G(se(k))}finally{R(!1)}};w.useEffect(()=>{W(),ee()},[]),w.useEffect(()=>{if(T!=="analyze")return;const k=Date.now();Ue(0);const D=window.setInterval(()=>{Ue(Math.floor((Date.now()-k)/1e3))},1e3);return()=>window.clearInterval(D)},[T]);const ee=async()=>{try{const k=await Kt("/ai-health");S(k);const D=(k.models||[]).find(H=>H.kind==="chat"&&H.configured);D!=null&&D.id&&E(D.id)}catch{S({ok:!1,models:[],message:"AI model status is unavailable."})}},B=async k=>{var D;n(k),G(""),L("");try{const H=await Kt(`/admin/datasets/${k}`,{headers:I()});o(H),u(H.prompt_guidelines||""),f(H.allowed_roles||[]),x({use_case_type:H.use_case_type||"comparison",expected_formats:H.expected_formats||["pdf","docx"],sample_plan:H.sample_plan||"",onboarding_notes:H.onboarding_notes||"",learning_mode:H.learning_mode||"deterministic_first"}),y(JSON.stringify(((D=H.template_profile)==null?void 0:D.column_rules)||[],null,2)),await Se(k)}catch(H){G(se(H))}},Se=async k=>{try{const D=await Kt(`/admin/datasets/${k}/documents`,{headers:I()});ge(D.documents||[])}catch{ge([])}},ht=async k=>{k.preventDefault(),O("create"),G(""),L("");try{const D=await Kt("/admin/datasets",{method:"POST",headers:I(),body:JSON.stringify(i)});let H="";D.id&&nn(j)&&(await Vi(D.id,j,i.onboarding_notes,i.learning_mode==="ai_assisted_bootstrap"),H=" Sample documents learned and model profile bootstrapped."),L(`Use case created.${H}`),l(kc),p({baseline:null,revised:null,variationPairs:[]}),$(null),await W(),D.id&&await B(D.id)}catch(D){G(se(D))}finally{O("")}},ep=k=>{try{const D=_c(g);if(D.some(Kr=>Kr.role===k)){L(`A rule for label '${k}' already exists.`);return}const H=[...D,{pattern:`.*${k.toLowerCase().replace(/_/g,".*")}.*`,role:k}];y(JSON.stringify(H,null,2)),L(`Added suggested mapping rule for '${k}'. Click 'Save profile settings' to apply.`)}catch{G("Column rules JSON is malformed. Please fix it before adding labels.")}},tp=async()=>{if(r){O("save"),G(""),L("");try{await Kt(`/admin/datasets/${r}`,{method:"PUT",headers:I(),body:JSON.stringify({prompt_guidelines:c,allowed_roles:m,column_rules:_c(g),...v})}),L("Use case settings saved."),await W(),await B(r)}catch(k){G(se(k))}finally{O("")}}},rp=async k=>{if(k.preventDefault(),!(!r||!nn(je))){O("bootstrap"),G(""),L("");try{await Vi(r,je,v.onboarding_notes||"",v.learning_mode==="ai_assisted_bootstrap"),L("Sample documents learned and model profile updated."),Be({baseline:null,revised:null,variations:[]}),await B(r)}catch(D){G(se(D))}finally{O("")}}},Vi=async(k,D,H,Kr)=>{const st=new FormData;D.baseline&&st.append("baseline",D.baseline),D.revised&&st.append("revised",D.revised),Ha(D).forEach(op=>st.append("variations",op)),st.append("notes",H||""),st.append("use_llm",String(Kr));const fo=await fetch(`${V}/admin/datasets/${k}/samples`,{method:"POST",headers:{"X-User-Role":window.sessionStorage.getItem("simulated_role")||"platform_admin"},body:st});if(!fo.ok)throw new Error(await ce(fo));return fo.json()},np=async()=>{if(nn(j)){if(d&&!C){G("Select a configured AI model before running AI-assisted sample analysis.");return}O("analyze"),G(""),L(""),$(null),U({status:"running",mode:d?"ai":"deterministic",model:d?C:"",submitted:kg(j),startedAt:new Date().toISOString(),error:""});try{const k=new FormData;j.baseline&&k.append("baseline",j.baseline),j.revised&&k.append("revised",j.revised),Ha(j).forEach(st=>k.append("variations",st)),k.append("supplier",i.supplier||""),k.append("family_name",i.family_name||""),k.append("domain",i.domain||"generic"),k.append("use_case_type",i.use_case_type||"comparison"),k.append("expected_formats",(i.expected_formats||[]).join(",")),k.append("notes",i.onboarding_notes||i.sample_plan||""),k.append("use_llm",String(d)),k.append("model_name",d?C:"");const D=await fetch(`${V}/admin/analyze-use-case-samples`,{method:"POST",headers:{"X-User-Role":window.sessionStorage.getItem("simulated_role")||"platform_admin"},body:k});if(D.status===404)throw new Error("Sample analyzer endpoint was not found in the backend. Deploy the latest backend image that includes POST /admin/analyze-use-case-samples.");if(!D.ok)throw new Error(await ce(D));const H=await D.json(),Kr=H.suggested_dataset||{};$(H),U(st=>({...st||{},status:"success",finishedAt:new Date().toISOString(),backendUsage:Sg(H),model:H.selected_model||C})),l({...i,...Kr,allowed_roles:i.allowed_roles||[],learning_mode:d?"ai_assisted_bootstrap":"deterministic_first"}),L(d?"Sample analysis complete. Review the suggested use case model before creating it.":"Deterministic sample scan complete. Review the suggested use case model before creating it.")}catch(k){const D=se(k);G(D),U(H=>({...H||{},status:"failed",finishedAt:new Date().toISOString(),error:D}))}finally{O("")}}},ap=async()=>{if(!(!r||!a)){O("delete"),G(""),L("");try{await Kt(`/admin/datasets/${r}`,{method:"DELETE",headers:I()}),L("Use case deleted."),n(""),o(null),ge([]),await W()}catch(k){G(se(k))}finally{O("")}}};return s.jsxs("section",{className:"admin-studio",children:[s.jsx("div",{className:"admin-intro",children:s.jsxs("div",{children:[s.jsx("h2",{children:"Use Case Onboarding"}),s.jsx("p",{children:"Create document models from representative samples. Use AI to suggest metadata, then keep governance and access settings with the saved use case."})]})}),Re&&s.jsx("div",{className:"admin-notice",children:Re}),Z&&s.jsx(An,{message:Z}),s.jsxs("div",{className:"admin-grid",children:[s.jsxs("aside",{className:"admin-panel",children:[s.jsxs("div",{className:"admin-panel-head",children:[s.jsx("h3",{children:"Use Cases"}),s.jsx("button",{type:"button",className:"ghost-action compact",onClick:W,children:"Refresh"})]}),N?s.jsx(Bn,{label:"Loading use cases"}):e.length===0?s.jsx(Vt,{label:"No use cases onboarded yet."}):s.jsx("div",{className:"dataset-list",children:e.map(k=>s.jsxs("button",{type:"button",className:`dataset-item${r===k.id?" active":""}`,onClick:()=>B(k.id),children:[s.jsx("strong",{children:k.supplier}),s.jsx("span",{children:k.family_name}),s.jsxs("small",{children:[k.use_case_type||"comparison"," · ",(k.expected_formats||[]).join(", ")||"formats"," · ",(k.allowed_roles||[]).length||"all"," roles"]})]},k.id))})]}),s.jsxs("main",{className:"admin-panel",children:[s.jsx("div",{className:"admin-panel-head",children:s.jsxs("div",{children:[s.jsx("h3",{children:"Onboard Document Model"}),s.jsx("p",{children:"Start with baseline, revised, or layout samples. The platform learns the structure and suggests the use-case metadata."})]})}),s.jsxs("form",{className:"admin-form onboarding-flow",onSubmit:ht,children:[s.jsxs("section",{className:"admin-review-card",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Use Case Identity"}),s.jsx("p",{children:"Define the business model before uploading samples. Analysis will use these values as context instead of guessing from file names."})]}),s.jsxs("div",{className:"admin-review-grid",children:[s.jsxs("label",{children:["Supplier or entity",s.jsx("input",{value:i.supplier,required:!0,onChange:k=>l({...i,supplier:k.target.value}),placeholder:"Ford, HR, Finance, Legal"})]}),s.jsxs("label",{children:["Use case or family",s.jsx("input",{value:i.family_name,required:!0,onChange:k=>l({...i,family_name:k.target.value}),placeholder:"Order Guide, Policy, Contract"})]}),s.jsxs("label",{children:["Use case type",s.jsxs("select",{value:i.use_case_type,onChange:k=>l({...i,use_case_type:k.target.value}),children:[s.jsx("option",{value:"comparison",children:"Comparison"}),s.jsx("option",{value:"extraction",children:"Extraction"})]})]}),s.jsxs("label",{children:["Domain",s.jsxs("select",{value:i.domain,onChange:k=>l({...i,domain:k.target.value}),children:[s.jsx("option",{value:"generic",children:"Generic"}),s.jsx("option",{value:"automotive",children:"Automotive"}),s.jsx("option",{value:"legal",children:"Legal"}),s.jsx("option",{value:"financial",children:"Financial"}),s.jsx("option",{value:"hr",children:"HR"}),s.jsx("option",{value:"engineering",children:"Engineering"})]})]}),s.jsx("div",{className:"admin-wide-field",children:s.jsx(Sc,{value:i.expected_formats,onChange:k=>l({...i,expected_formats:k})})})]})]}),s.jsxs("section",{className:"sample-intake-card",children:[s.jsxs("div",{className:"sample-intake-head",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Training Samples"}),s.jsx("p",{children:"Attach one baseline and one revised document. Add variation pairs only when you have alternate layouts, suppliers, model years, or document structures."})]}),s.jsxs("label",{className:"ai-toggle",children:[s.jsx("input",{type:"checkbox",checked:d,onChange:k=>h(k.target.checked)}),"Analyze with AI model"]})]}),d?s.jsxs("div",{className:"model-select-row",children:[s.jsxs("label",{children:["Model deployment",s.jsx("select",{value:C,onChange:k=>E(k.target.value),children:jc(b).length?jc(b).map(k=>s.jsx("option",{value:k.id,children:k.label||k.id},k.id)):s.jsx("option",{value:"",children:"No configured chat model found"})})]}),s.jsx("button",{type:"button",className:"ghost-action compact",onClick:ee,children:"Refresh models"}),s.jsx("span",{children:b!=null&&b.ok?"Model connection verified.":(b==null?void 0:b.message)||"Checking AI model status."})]}):null,s.jsxs("div",{className:"sample-pair-grid",children:[s.jsxs("label",{children:["Baseline sample",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>{var D;return p({...j,baseline:((D=k.target.files)==null?void 0:D[0])||null})}})]}),s.jsxs("label",{children:["Revised sample",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>{var D;return p({...j,revised:((D=k.target.files)==null?void 0:D[0])||null})}})]})]}),s.jsx(Eg,{value:j.variationPairs,onChange:k=>p({...j,variationPairs:k})}),s.jsxs("div",{className:"sample-actions",children:[s.jsx("button",{type:"button",className:"secondary-action",onClick:np,disabled:!nn(j)||T==="analyze"||d&&!C,children:T==="analyze"?"Analyzing samples":"Analyze samples"}),s.jsx("span",{children:nn(j)?"Analysis can prefill the fields below. You can still edit everything manually.":"Attach at least one sample to run analysis."})]}),s.jsx(_g,{run:A,elapsedSeconds:ke,useAiAnalysis:d,selectedModel:C})]}),P?s.jsx(Cg,{data:P}):null,s.jsxs("section",{className:"admin-review-card",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Generated Metadata"}),s.jsx("p",{children:"Analysis fills this section with document understanding, extraction focus, accuracy hints, and reviewer notes. You can also maintain it manually."})]}),s.jsxs("div",{className:"admin-review-grid",children:[s.jsxs("label",{children:["Content description",s.jsx("textarea",{value:i.description,onChange:k=>l({...i,description:k.target.value}),placeholder:"Describe the documents, expected fields, tables, identifiers, and business context."})]}),s.jsxs("label",{children:["Onboarding notes",s.jsx("textarea",{value:i.onboarding_notes,onChange:k=>l({...i,onboarding_notes:k.target.value}),placeholder:"Known pain points, nested headers, language handling, reviewer expectations, or accuracy targets."})]}),s.jsxs("label",{className:"admin-wide-field",children:["Sample strategy",s.jsx("textarea",{value:i.sample_plan,onChange:k=>l({...i,sample_plan:k.target.value}),placeholder:"How many baseline/revised/variation samples should represent this model?"})]})]})]}),s.jsx("button",{type:"submit",className:"primary-action",disabled:T==="create",children:T==="create"?"Creating":"Create use case"})]})]})]}),s.jsx("section",{className:"admin-panel",children:a?s.jsxs("div",{className:"admin-detail",children:[s.jsxs("div",{className:"admin-detail-head",children:[s.jsxs("div",{children:[s.jsxs("h3",{children:[a.supplier," · ",a.family_name]}),s.jsx("p",{children:a.description||"No description yet."}),s.jsxs("span",{className:"admin-model-badge",children:[v.use_case_type," model · ",(v.expected_formats||[]).join(", ")]})]}),s.jsx("button",{type:"button",className:"danger-action compact",onClick:ap,disabled:T==="delete",children:T==="delete"?"Deleting":"Delete"})]}),s.jsxs("div",{className:"admin-config-grid",children:[s.jsxs("label",{children:["Use case type",s.jsxs("select",{value:v.use_case_type,onChange:k=>x({...v,use_case_type:k.target.value}),children:[s.jsx("option",{value:"comparison",children:"Comparison"}),s.jsx("option",{value:"extraction",children:"Extraction"})]})]}),s.jsxs("label",{children:["Learning mode",s.jsx("select",{value:v.learning_mode,onChange:k=>x({...v,learning_mode:k.target.value}),children:vg.map(([k,D])=>s.jsx("option",{value:k,children:D},k))})]}),s.jsx("div",{className:"admin-wide-field",children:s.jsx(Sc,{value:v.expected_formats,onChange:k=>x({...v,expected_formats:k})})}),s.jsxs("label",{children:["Sample strategy",s.jsx("textarea",{value:v.sample_plan,onChange:k=>x({...v,sample_plan:k.target.value}),placeholder:"How many samples or variations should represent this model?"})]}),s.jsxs("label",{children:["Onboarding notes",s.jsx("textarea",{value:v.onboarding_notes,onChange:k=>x({...v,onboarding_notes:k.target.value}),placeholder:"Business context, known table layouts, accuracy targets, and reviewer comments."})]}),s.jsxs("label",{children:["Prompt and extraction guidelines",s.jsx("textarea",{value:c,onChange:k=>u(k.target.value),placeholder:"Example: prioritize PCB thickness, PCV code changes, nested pricing rows, or legal obligations."})]}),s.jsxs("label",{children:["Column rules JSON",s.jsx("textarea",{className:"mono",value:g,onChange:k=>y(k.target.value)})]})]}),s.jsx(Ng,{value:m,onChange:f}),s.jsx("button",{type:"button",className:"primary-action",onClick:tp,disabled:T==="save",children:T==="save"?"Saving":"Save profile settings"}),s.jsxs("form",{className:"seed-form",onSubmit:rp,children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Sample Document Learning"}),s.jsx("p",{children:"For comparison models, upload a baseline, revised document, and any format/layout variations. The profile stores structure, page range, table signatures, stable keys, and reviewer guidance."})]}),s.jsxs("div",{className:"sample-upload-grid",children:[s.jsxs("label",{children:["Baseline sample",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>{var D;return Be({...je,baseline:((D=k.target.files)==null?void 0:D[0])||null})}})]}),s.jsxs("label",{children:["Revised sample",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>{var D;return Be({...je,revised:((D=k.target.files)==null?void 0:D[0])||null})}})]}),s.jsxs("label",{children:["Additional variations",s.jsx("input",{type:"file",multiple:!0,accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>Be({...je,variations:Array.from(k.target.files||[])})})]})]}),s.jsx("button",{type:"submit",className:"primary-action",disabled:!je.baseline&&!je.revised&&je.variations.length===0||T==="bootstrap",children:T==="bootstrap"?"Learning":"Learn from samples"})]}),s.jsxs("div",{className:"admin-profile-grid",children:[s.jsx(Pg,{profile:(qi=a.template_profile)==null?void 0:qi.sample_profile}),s.jsx(Wo,{title:"Sample Documents",items:ot,labelKey:"label",valueKey:"page_count"}),s.jsx(zg,{profile:(Hi=a.template_profile)==null?void 0:Hi.ai_reasoning_profile,onAddLabel:ep}),s.jsx(Wo,{title:"Stable Keys",items:(Qi=a.template_profile)==null?void 0:Qi.stable_key_patterns,labelKey:"name",valueKey:"regex"}),s.jsx(Wo,{title:"Column Rules",items:(Ki=a.template_profile)==null?void 0:Ki.column_rules,labelKey:"role",valueKey:"pattern"})]})]}):s.jsx(Vt,{label:"Select a use case to configure profile learning."})})]})}function nn(e){var t;return!!(e!=null&&e.baseline||e!=null&&e.revised||(t=e==null?void 0:e.variations)!=null&&t.length||Ha(e).length)}function Ha(e){const t=Array.isArray(e==null?void 0:e.variations)?e.variations:[],r=Array.isArray(e==null?void 0:e.variationPairs)?e.variationPairs.flatMap(n=>[n.baseline,n.revised].filter(Boolean)):[];return[...t,...r]}function bg(e){return[e==null?void 0:e.baseline,e==null?void 0:e.revised,...Ha(e)].filter(Boolean)}function kg(e){const t=bg(e),r=t.reduce((n,a)=>n+Number(a.size||0),0);return{count:t.length,totalBytes:r,totalMb:r/(1024*1024),estimatedInputTokens:Math.max(1,Math.ceil(r/4)),files:t.map(n=>({name:n.name,size:n.size||0}))}}function jg(e){const t=Number(e||0);return t>=1024*1024?`${(t/(1024*1024)).toFixed(2)} MB`:t>=1024?`${(t/1024).toFixed(1)} KB`:`${t} B`}function Bo(e){return new Intl.NumberFormat().format(Math.round(Number(e||0)))}function jc(e){const t=Array.isArray(e==null?void 0:e.models)?e.models:[];return t.length?t.filter(r=>r.kind==="chat"):e!=null&&e.deployment?[{id:e.deployment,label:e.deployment,kind:"chat",configured:e.configured}]:[]}function Sg(e){var n,a,o;if(e!=null&&e.usage)return{prompt_tokens:Number(e.usage.prompt_tokens||0),completion_tokens:Number(e.usage.completion_tokens||0),total_tokens:Number(e.usage.total_tokens||0),calls:Number(e.usage.calls||0)};const t=[],r=(n=e==null?void 0:e.analysis)==null?void 0:n.usage;return r&&t.push(r),(o=(a=e==null?void 0:e.template_profile)==null?void 0:a.ai_reasoning_profile)!=null&&o.usage&&t.push(e.template_profile.ai_reasoning_profile.usage),t.reduce((i,l)=>({prompt_tokens:i.prompt_tokens+Number(l.prompt_tokens||0),completion_tokens:i.completion_tokens+Number(l.completion_tokens||0),total_tokens:i.total_tokens+Number(l.total_tokens||0),calls:i.calls+Number(l.calls||(l.total_tokens?1:0))}),{prompt_tokens:0,completion_tokens:0,total_tokens:0,calls:0})}function _g({run:e,elapsedSeconds:t,useAiAnalysis:r,selectedModel:n}){if(!e)return null;const a=e.submitted||{},o=e.backendUsage||{},i=e.status==="running"?"Running":e.status==="success"?"Completed":"Failed",l=[["prepare","Preparing upload context"],["extract","Extracting sample structure"],["model",r?`Invoking ${n||"selected model"}`:"Deterministic profile scan"],["metadata","Generating metadata suggestions"]];return s.jsxs("div",{className:`analysis-run-panel ${e.status}`,children:[s.jsxs("div",{className:"analysis-run-head",children:[s.jsxs("div",{children:[s.jsx("strong",{children:i}),s.jsx("span",{children:e.status==="running"?`${t}s elapsed`:e.finishedAt?"Run finished":"Waiting"})]}),s.jsx("small",{children:e.mode==="ai"?`AI model: ${e.model||n||"not selected"}`:"AI disabled"})]}),s.jsxs("div",{className:"analysis-run-metrics",children:[s.jsxs("span",{children:[Bo(a.count)," file(s)"]}),s.jsx("span",{children:jg(a.totalBytes)}),s.jsxs("span",{children:["Est. input ",Bo(a.estimatedInputTokens)," tokens"]}),o.total_tokens?s.jsxs("span",{children:["Actual AI ",Bo(o.total_tokens)," tokens"]}):null]}),s.jsx("div",{className:"analysis-run-steps",children:l.map(([c,u],m)=>s.jsx("span",{className:e.status==="running"||e.status==="success"||m===0?"active":"",children:u},c))}),e.error?s.jsx("p",{className:"analysis-run-error",children:e.error}):null]})}function Eg({value:e,onChange:t}){const r=Array.isArray(e)?e:[],n=(o,i)=>{t(r.map(l=>l.id===o?{...l,...i}:l))},a=o=>{t(r.filter(i=>i.id!==o))};return s.jsxs("div",{className:"variation-pairs",children:[s.jsxs("div",{className:"variation-pairs-head",children:[s.jsxs("div",{children:[s.jsx("h5",{children:"Variation pairs"}),s.jsx("p",{children:"Add only when another baseline/revised pair represents a different layout or document family variation."})]}),s.jsx("button",{type:"button",className:"icon-action",onClick:()=>t([...r,yg()]),disabled:r.length>=5,title:"Add variation pair",children:"+"})]}),r.length?s.jsx("div",{className:"variation-pair-list",children:r.map((o,i)=>s.jsxs("div",{className:"variation-pair-row",children:[s.jsxs("strong",{children:["Variation ",i+1]}),s.jsxs("label",{children:["Baseline",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:l=>{var c;return n(o.id,{baseline:((c=l.target.files)==null?void 0:c[0])||null})}})]}),s.jsxs("label",{children:["Revised",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:l=>{var c;return n(o.id,{revised:((c=l.target.files)==null?void 0:c[0])||null})}})]}),s.jsx("button",{type:"button",className:"ghost-action compact",onClick:()=>a(o.id),children:"Remove"})]},o.id))}):s.jsx("span",{className:"variation-empty",children:"No variation pairs added."})]})}function Cg({data:e}){const t=(e==null?void 0:e.suggested_dataset)||{},r=(e==null?void 0:e.analysis)||{},n=r.confidence_score!==void 0?Math.round(Number(r.confidence_score||0)*100):null,a=Array.isArray(r.complexity_reasons)?r.complexity_reasons:[],o=Array.isArray(r.enhancement_tips)?r.enhancement_tips:[];return s.jsxs("section",{className:"analysis-card",children:[s.jsxs("div",{className:"analysis-card-head",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Sample Analysis"}),s.jsx("p",{children:e!=null&&e.used_ai?"GPT-4o assisted the metadata suggestions.":"Deterministic scan generated metadata suggestions."})]}),s.jsxs("span",{children:[String(r.complexity_rating||"standard")," complexity"]})]}),s.jsxs("div",{className:"analysis-grid",children:[s.jsxs("p",{children:[s.jsx("strong",{children:t.supplier||"Supplier pending"}),s.jsx("small",{children:t.family_name||"Use case pending"})]}),s.jsxs("p",{children:[s.jsx("strong",{children:t.use_case_type||"comparison"}),s.jsx("small",{children:(t.expected_formats||[]).join(", ")||"formats pending"})]}),s.jsxs("p",{children:[s.jsx("strong",{children:t.domain||"generic"}),s.jsx("small",{children:n!==null?`${n}% estimated parser confidence`:"confidence pending"})]})]}),a.length||o.length?s.jsxs("div",{className:"analysis-notes",children:[a.slice(0,3).map((i,l)=>s.jsx("span",{children:i},`reason-${l}`)),o.slice(0,3).map((i,l)=>s.jsx("span",{children:i},`tip-${l}`))]}):null]})}function Ng({value:e,onChange:t}){const r=n=>{t(e.includes(n)?e.filter(a=>a!==n):[...e,n])};return s.jsxs("fieldset",{className:"role-picker",children:[s.jsx("legend",{children:"Allowed roles"}),gg.map(([n,a])=>s.jsxs("label",{children:[s.jsx("input",{type:"checkbox",checked:e.includes(n),onChange:()=>r(n)}),a]},n))]})}function Sc({value:e,onChange:t}){const r=Array.isArray(e)?e:[],n=a=>{t(r.includes(a)?r.filter(o=>o!==a):[...r,a])};return s.jsxs("fieldset",{className:"format-picker",children:[s.jsx("legend",{children:"Expected formats"}),xg.map(([a,o])=>s.jsxs("label",{children:[s.jsx("input",{type:"checkbox",checked:r.includes(a),onChange:()=>n(a)}),o]},a))]})}function Pg({profile:e}){const t=e&&typeof e=="object"?e:{};return s.jsxs("div",{className:"profile-card",children:[s.jsx("h4",{children:"Model Samples"}),s.jsxs("p",{children:[s.jsxs("strong",{children:[String(t.sample_count||0)," samples"]}),s.jsx("small",{children:(t.roles_present||[]).join(", ")||"No roles learned yet"})]}),s.jsxs("p",{children:[s.jsxs("strong",{children:[String(t.average_pages||0)," avg pages"]}),s.jsxs("small",{children:[String(t.min_pages||0)," min · ",String(t.max_pages||0)," max"]})]}),t.last_bootstrap_notes?s.jsxs("p",{children:[s.jsx("strong",{children:"Latest notes"}),s.jsx("small",{children:String(t.last_bootstrap_notes)})]}):null]})}function Wo({title:e,items:t,labelKey:r,valueKey:n}){const a=Array.isArray(t)?t:[];return s.jsxs("div",{className:"profile-card",children:[s.jsx("h4",{children:e}),a.length===0?s.jsx("span",{children:"No entries yet."}):a.slice(0,8).map((o,i)=>s.jsxs("p",{children:[s.jsx("strong",{children:String((o==null?void 0:o[r])??"Item")}),s.jsx("small",{children:String((o==null?void 0:o[n])??"")})]},i))]})}function zg({profile:e,onAddLabel:t}){const r=e&&typeof e=="object"?e:{},n=String(r.complexity_rating||"low").toUpperCase(),a=r.confidence_score!==void 0?Math.round(r.confidence_score*100):null,o=Array.isArray(r.complexity_reasons)?r.complexity_reasons:[],i=Array.isArray(r.enhancement_tips)?r.enhancement_tips:[],l=Array.isArray(r.suggested_data_labels)?r.suggested_data_labels:[],c=n==="HIGH"?"#9f2525":n==="MEDIUM"?"#c45510":"#1f7e41",u=n==="HIGH"?"#fff7f7":n==="MEDIUM"?"#fffbf7":"#f7fff9",m=n==="HIGH"?"#f1c6c6":n==="MEDIUM"?"#f7d6c1":"#c1f1d1";return s.jsxs("div",{className:"profile-card",style:{gridColumn:"span 2"},children:[s.jsxs("h4",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("span",{children:"AI Onboarding Analysis"}),s.jsxs("span",{style:{fontSize:11,fontWeight:700,color:c,background:u,border:`1px solid ${m}`,padding:"2px 8px",borderRadius:99},children:[n," COMPLEXITY"]})]}),a!==null&&s.jsxs("p",{style:{marginTop:8},children:[s.jsxs("strong",{children:["Parser Confidence Rating: ",a,"%"]}),s.jsx("small",{children:"Estimated baseline accuracy without AI assistance"})]}),o.length>0&&s.jsxs("p",{style:{marginTop:10},children:[s.jsx("strong",{children:"Structural Complexity Indicators"}),s.jsx("small",{style:{display:"block",marginTop:4},children:o.map((f,g)=>s.jsxs("span",{style:{display:"block",color:"var(--text-primary)"},children:["• ",f]},g))})]}),i.length>0&&s.jsxs("p",{style:{marginTop:10},children:[s.jsx("strong",{children:"Extraction Optimization Recommendations"}),s.jsx("small",{style:{display:"block",marginTop:4},children:i.map((f,g)=>s.jsxs("span",{style:{display:"block",color:"var(--text-primary)"},children:["• ",f]},g))})]}),l.length>0&&s.jsxs("p",{style:{marginTop:12},children:[s.jsx("strong",{children:"Suggested Data Labels (Click to map)"}),s.jsx("span",{style:{display:"flex",flexWrap:"wrap",gap:6,marginTop:6},children:l.map(f=>s.jsxs("button",{type:"button",onClick:()=>t(f),style:{background:"var(--surface-sunken)",border:"1px solid var(--border)",color:"var(--text-primary)",borderRadius:"4px",padding:"2px 8px",fontSize:12,fontWeight:650,cursor:"pointer"},title:"Click to automatically create a mapping rule for this label",children:["Add ",f]},f))})]})]})}async function Kt(e,t={}){const r=await fetch(`${V}${e}`,t);if(!r.ok)throw new Error(await ce(r));return r.json()}function _c(e){const t=e.trim();if(!t)return[];const r=JSON.parse(t);if(!Array.isArray(r))throw new Error("Column rules must be a JSON array.");return r}function Tg(e){w.useEffect(()=>{document.title=`${e} · Altrai`},[e])}const ia=e=>Number(e||0).toLocaleString();function Dg(e,t,r){const n=String(e||"").toLowerCase(),a=n.includes("gpt-4")&&!n.includes("mini"),o=a?2.5:.15,i=a?10:.6;return(Number(t||0)*o+Number(r||0)*i)/1e6}function $g({runId:e}){const[t,r]=w.useState(""),[n,a]=w.useState("fast"),[o,i]=w.useState("gpt-4o"),[l,c]=w.useState([]),[u,m]=w.useState({}),[f,g]=w.useState(!1),y=w.useMemo(()=>l.reduce((x,j)=>{const p=j.usage;return p&&(x.prompt+=Number(p.prompt_tokens||0),x.completion+=Number(p.completion_tokens||0),x.total+=Number(p.total_tokens||0),x.calls+=1,x.cost+=Dg(j.model,p.prompt_tokens,p.completion_tokens)),x},{prompt:0,completion:0,total:0,calls:0,cost:0}),[l]),v=async()=>{const x=t.trim();if(!x||f||!e)return;const j=`user-${Date.now()}`,p=`answer-${Date.now()}`;c(d=>[...d,{id:j,role:"user",text:x,timestamp:new Date().toLocaleTimeString()}]),r(""),g(!0);try{const d=await fetch(`${V}/runs/${e}/query`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:x,mode:n,response_language:"source",model_name:n==="ai"?o:null})});if(!d.ok)throw new Error(await ce(d));const h=await d.json();c(b=>{var S;return[...b,{id:p,role:"assistant",text:h.answer||`I found ${((S=h.rows)==null?void 0:S.length)||0} matching changes.`,rows:h.rows||[],columns:h.columns||gh(h.rows||[]),mode:h.mode||n,model:n==="ai"?o:null,usage:h.usage,confidence:h.confidence,warning:h.ai_error||(h.ai_unavailable?"AI response was unavailable; showing grounded evidence results.":""),timestamp:new Date().toLocaleTimeString()}]})}catch(d){c(h=>[...h,{id:p,role:"assistant",text:se(d),rows:[],timestamp:new Date().toLocaleTimeString(),isError:!0}])}finally{g(!1)}};return s.jsxs("section",{className:"query-workbench",children:[l.length===0?s.jsx(Vt,{label:"Ask what changed, why it matters, or where the evidence appears in the compared documents."}):s.jsx("div",{className:"query-chat-log",children:l.map(x=>{var j,p;return s.jsxs("article",{className:`query-message ${x.role}${x.isError?" error":""}`,children:[s.jsxs("div",{className:"query-message-meta",children:[s.jsx("span",{children:x.role==="user"?"You":x.mode==="ai"?`AI answer${x.model?` - ${x.model}`:""}`:"Natural language query"}),s.jsx("span",{children:x.timestamp})]}),s.jsx("div",{className:"query-message-text",dir:"auto",children:x.text}),x.warning&&s.jsx("div",{className:"query-warning",children:x.warning}),x.usage&&s.jsxs("div",{className:"query-usage",children:[s.jsxs("span",{children:[ia(x.usage.total_tokens)," tokens"]}),s.jsxs("span",{children:[ia(x.usage.prompt_tokens)," input / ",ia(x.usage.completion_tokens)," output"]})]}),((j=x.rows)==null?void 0:j.length)>0&&s.jsxs("div",{className:"query-evidence",children:[s.jsx("button",{type:"button",className:"key-audit-toggle",onClick:()=>m(d=>({...d,[x.id]:!d[x.id]})),children:u[x.id]?"Hide evidence":`Show evidence (${x.rows.length})`}),u[x.id]&&s.jsx("div",{className:"query-results-shell",children:(p=x.columns)!=null&&p.length?s.jsx(ar,{columns:x.columns,rows:x.rows}):x.rows.slice(0,50).map((d,h)=>s.jsx(Rg,{row:d},h))})]})]},x.id)})}),y.total>0&&s.jsxs("div",{className:"query-usage-strip",children:[s.jsxs("span",{children:[ia(y.total)," tokens across ",y.calls," AI call",y.calls===1?"":"s"]}),s.jsxs("strong",{children:["$",y.cost.toFixed(5)]})]}),s.jsxs("div",{className:"query-composer",children:[s.jsx("textarea",{value:t,onChange:x=>r(x.target.value),onKeyDown:x=>{x.key==="Enter"&&!x.shiftKey&&(x.preventDefault(),v())},placeholder:"Ask about changed clauses, tables, dates, values, deleted text, or page evidence...",disabled:f,rows:3}),s.jsxs("div",{className:"query-composer-actions",children:[s.jsxs("label",{children:[s.jsx("span",{children:"Mode"}),s.jsxs("select",{value:n,onChange:x=>a(x.target.value),disabled:f,children:[s.jsx("option",{value:"fast",children:"NL query"}),s.jsx("option",{value:"ai",children:"AI chat"})]})]}),n==="ai"&&s.jsxs("label",{children:[s.jsx("span",{children:"Model"}),s.jsxs("select",{value:o,onChange:x=>i(x.target.value),disabled:f,children:[s.jsx("option",{value:"gpt-4o",children:"gpt-4o"}),s.jsx("option",{value:"gpt-4o-mini",children:"gpt-4o-mini"}),s.jsx("option",{value:"phi-4-mini",children:"phi-4-mini"})]})]}),s.jsx("button",{type:"button",className:"primary-action compact",onClick:v,disabled:f||!t.trim(),children:f?"Working":n==="ai"?"Ask AI":"Ask"})]})]})]})}function Rg({row:e}){var t;return s.jsxs("div",{className:"query-result",children:[s.jsxs("div",{className:"query-result-head",children:[s.jsx(Qd,{type:Ir(e)}),e.stable_key&&s.jsx("code",{children:e.stable_key}),s.jsx("span",{children:e.citation||`page ${e.page||"-"}`})]}),e.before&&s.jsxs("div",{dir:"auto",children:[s.jsx("strong",{children:"Before:"})," ",He(e.before,260)]}),e.after&&s.jsxs("div",{dir:"auto",children:[s.jsx("strong",{children:"After:"})," ",He(e.after,260)]}),((t=e.field_changes)==null?void 0:t.length)>0&&s.jsx(Bh,{rows:e.field_changes})]})}const lt=(e,t)=>{if(typeof window>"u")return t;try{const r=window.sessionStorage.getItem(`doculens_${e}`);return r!==null?JSON.parse(r):t}catch{return t}},Ye=(e,t)=>{if(!(typeof window>"u"))try{window.sessionStorage.setItem(`doculens_${e}`,JSON.stringify(t))}catch(r){console.error(r)}},Bs={compare:"/compare",extract:"/extract",jobs:"/work-history",agents:"/ai-agents",admin:"/admin"},Lg={"/":"compare",...Object.fromEntries(Object.entries(Bs).map(([e,t])=>[t,e]))},Ec=e=>Lg[e]||"compare";function Ag(){const e=Wd(),t=Ym(),[r,n]=w.useState(()=>Ec(window.location.pathname)),[a,o]=w.useState(()=>lt("runId",null)),[i,l]=w.useState(()=>lt("meta",null)),[c,u]=w.useState(()=>lt("tab","viewer")),[m,f]=w.useState(()=>lt("pageNum",1)),[g,y]=w.useState(()=>lt("busy",!1)),[v,x]=w.useState(""),[j,p]=w.useState(()=>lt("extractRunId",null)),[d,h]=w.useState(()=>lt("extractMeta",null)),[b,S]=w.useState(()=>lt("extractBusy",!1)),[C,E]=w.useState(""),[P,$]=w.useState(()=>lt("extractTab","overview")),[A,U]=w.useState(""),[ke,Ue]=w.useState(()=>lt("historyKind","all")),je={compare:"Compare",extract:"Extract",jobs:"Work History",agents:"AI Agents",admin:"Admin Studio"}[r]||"Workspace";Tg(je),w.useEffect(()=>{Ye("workspace",r)},[r]),w.useEffect(()=>{Ye("runId",a)},[a]),w.useEffect(()=>{Ye("meta",i)},[i]),w.useEffect(()=>{Ye("tab",c)},[c]),w.useEffect(()=>{Ye("pageNum",m)},[m]),w.useEffect(()=>{Ye("busy",g)},[g]),w.useEffect(()=>{Ye("extractRunId",j)},[j]),w.useEffect(()=>{Ye("extractMeta",d)},[d]),w.useEffect(()=>{Ye("extractBusy",b)},[b]),w.useEffect(()=>{Ye("extractTab",P)},[P]),w.useEffect(()=>{Ye("historyKind",ke)},[ke]),w.useEffect(()=>{const L=Ec(e.pathname);L!==r&&n(L)},[e.pathname]),w.useEffect(()=>{r==="compare"&&c!=="viewer"&&u("viewer")},[r]);const Be=()=>{o(null),l(null),y(!1),x(""),f(1),u("viewer"),ge("compare")},ot=()=>{p(null),h(null),S(!1),E(""),$("overview"),ge("extract")},ge=(L,I={})=>{n(L),L==="jobs"&&Ue(I.historyKind||"all"),x(""),E(""),U(""),t(Bs[L]||Bs.compare,{replace:!1})};w.useEffect(()=>{if(!a||!g)return;let L=!1,I=null;const W=async()=>{try{const ee=await fetch(`${V}/runs/${a}`);if(!ee.ok)throw new Error(await ce(ee));const B=await ee.json();if(L)return;if(l(B),B.status==="complete"){y(!1),u("viewer");return}if(B.status==="failed"){y(!1),x(tt(B.error||B.status_message||"Comparison failed."));return}I=setTimeout(W,1e3)}catch(ee){if(L)return;y(!1),x(se(ee))}};return W(),()=>{L=!0,I&&clearTimeout(I)}},[a,g]),w.useEffect(()=>{if(!j||!b)return;let L=!1,I=null;const W=async()=>{try{const ee=await fetch(`${V}/extract-runs/${j}`);if(!ee.ok)throw new Error(await ce(ee));const B=await ee.json();if(L)return;if(h(B),B.status==="complete"){S(!1),$("overview");return}if(B.status==="failed"){S(!1),E(tt(B.error||B.status_message||"Extraction failed."));return}I=setTimeout(W,1e3)}catch(ee){if(L)return;S(!1),E(se(ee))}};return W(),()=>{L=!0,I&&clearTimeout(I)}},[j,b]);const N=async L=>{L.preventDefault();const I=new FormData(L.currentTarget),W=I.get("base"),ee=I.get("target"),B=String(I.get("family_id")||"").trim();if(!W||!ee||!W.name||!ee.name){x("Please select both documents before starting.");return}if(!B){x("Please select a document use case before starting comparison.");return}n("compare"),y(!0),x(""),o(null),f(1),u("viewer"),l({status:"uploading",status_message:"Uploading documents",progress:3,stats:{},coverage:{},n_pages_base:0,n_pages_target:0});try{const Se=await fetch(`${V}/compare`,{method:"POST",body:I});if(!Se.ok)throw new Error(await ce(Se));const ht=await Se.json();o(ht.run_id),y(ht.status!=="complete"&&ht.status!=="failed"),l({run_id:ht.run_id,status:ht.status,status_message:ht.status_message||"Starting comparison",progress:ht.progress||5,stats:{},coverage:{},n_pages_base:0,n_pages_target:0}),n("compare")}catch(Se){y(!1),x(se(Se))}},R=async L=>{L.preventDefault();const I=new FormData(L.currentTarget),W=I.getAll("document").filter(B=>B&&B.name),ee=String(I.get("family_id")||"").trim();if(!W.length){E("Please select at least one document, spreadsheet, PDF, or image before starting extraction.");return}if(!ee){E("Please select a document use case before starting extraction.");return}n("extract"),S(!0),E(""),p(null),$("overview"),h({status:"uploading",status_message:"Uploading document",progress:3,summary:{}});try{const B=await fetch(`${V}/extract`,{method:"POST",body:I});if(!B.ok)throw new Error(await ce(B));const Se=await B.json();p(Se.run_id),S(Se.status!=="complete"&&Se.status!=="failed"),h({run_id:Se.run_id,status:Se.status,status_message:Se.status_message||"Starting extraction",progress:Se.progress||5,summary:{}}),n("extract")}catch(B){S(!1),E(se(B))}},T=async L=>{U("");try{if(L.kind==="extraction"){const ee=await fetch(`${V}/extract-runs/${L.run_id}`);if(!ee.ok)throw new Error(await ce(ee));const B=await ee.json();o(null),l(null),y(!1),p(L.run_id),h(B),S(B.status!=="complete"&&B.status!=="failed"),$("overview"),n("extract");return}const I=await fetch(`${V}/runs/${L.run_id}`);if(!I.ok)throw new Error(await ce(I));const W=await I.json();p(null),h(null),S(!1),o(L.run_id),l(W),y(W.status!=="complete"&&W.status!=="failed"),u("viewer"),f(1),n("compare")}catch(I){U(se(I))}},O=async L=>{U("");try{if(L.kind==="extraction"){const I=await fetch(`${V}/extract-runs/${L.run_id}`);if(!I.ok)throw new Error(await ce(I));const W=await I.json();o(null),l(null),y(!1),p(L.run_id),h(W),S(W.status!=="complete"&&W.status!=="failed"),n("extract");return}await T(L)}catch(I){U(se(I))}},Z=()=>{a&&(window.location.href=`${V}/runs/${a}/report.pdf`)},G=(i==null?void 0:i.status)==="complete",Re=(d==null?void 0:d.status)==="complete";return s.jsxs("div",{children:[s.jsx("style",{children:ch}),s.jsxs(hg,{workspace:r,runId:r==="compare"&&G?a:null,onNavigate:ge,onDownloadReport:Z,children:[r==="jobs"&&s.jsx(Ch,{onOpenJob:T,onAskJob:O,error:A,historyKind:ke,onStartCompare:Be,onStartExtract:ot}),r==="compare"&&!G&&s.jsxs("section",{className:"workflow-panel",children:[s.jsx(Ph,{onUpload:N,busy:g,onAdmin:()=>ge("admin")}),g&&i&&s.jsx(yc,{progress:i.progress||0,message:i.status_message||"Processing documents",status:i.status||"running"}),v&&s.jsx(An,{message:v})]}),r==="extract"&&!Re&&s.jsxs("section",{className:"workflow-panel",children:[s.jsx(zh,{onUpload:R,busy:b,onAdmin:()=>ge("admin")}),b&&d&&s.jsx(yc,{progress:d.progress||0,message:d.status_message||"Extracting document",status:d.status||"running"}),C&&s.jsx(An,{message:C})]}),r==="compare"&&G&&a&&i&&s.jsxs("section",{className:"comparison-workspace",children:[s.jsxs("div",{className:"comparison-head",children:[s.jsx("div",{children:s.jsxs("h2",{dir:"auto",children:[i.base_label||"Baseline"," → ",i.target_label||"Revised"]})}),s.jsxs("div",{className:"comparison-head-actions",children:[s.jsx("button",{type:"button",className:"ghost-action compact",onClick:Be,children:"New comparison"}),s.jsxs("div",{className:"comparison-id",children:["#",String(a).slice(0,6)]})]})]}),s.jsx(jh,{meta:i}),s.jsxs("main",{className:"comparison-flow",children:[s.jsxs("section",{className:"workspace-surface",children:[s.jsx("div",{className:"surface-title-row",children:s.jsxs("div",{children:[s.jsx("h3",{children:"Quick Summary"}),s.jsx("p",{children:"Highest-priority differences detected from the comparison evidence."})]})}),s.jsx(Th,{runId:a,meta:i,onVerifyPage:f})]}),s.jsxs("section",{className:"workspace-surface",children:[s.jsx("div",{className:"surface-title-row",children:s.jsxs("div",{children:[s.jsx("h3",{children:"Visual Comparison"}),s.jsx("p",{children:"Side-by-side verification with synchronized scroll, zoom, and document overlays."})]})}),s.jsx(Dh,{runId:a,meta:i,pageNum:m,setPageNum:f})]}),s.jsxs("section",{className:"workspace-surface",children:[s.jsx("div",{className:"surface-title-row",children:s.jsxs("div",{children:[s.jsx("h3",{children:"Ask This Comparison"}),s.jsx("p",{children:"Start with natural language search. Switch to an AI model only when reasoning or richer synthesis is needed."})]})}),s.jsx($g,{runId:a})]})]})]}),r==="extract"&&Re&&j&&d&&s.jsx(Wh,{runId:j,meta:d,tab:P,setTab:$}),r==="agents"&&s.jsxs("section",{className:"workspace-placeholder",children:[s.jsx("h2",{children:"AI Agents"}),s.jsx("p",{children:"Future skills and multi-agent workflows will live here after the document intelligence workspace is stable."}),s.jsx("div",{className:"placeholder-list",children:s.jsx("span",{children:"Coming soon"})})]}),r==="admin"&&s.jsx(wg,{})]})]})}Vo.createRoot(document.getElementById("root")).render(s.jsx(Ka.StrictMode,{children:s.jsx(ug,{children:s.jsx(ih,{children:s.jsx(Ag,{})})})}));
