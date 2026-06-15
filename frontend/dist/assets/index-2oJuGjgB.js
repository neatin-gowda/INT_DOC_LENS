function Gd(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in e)){const o=Object.getOwnPropertyDescriptor(n,a);o&&Object.defineProperty(e,a,o.get?o:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();function Jd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bu={exports:{}},qa={},ku={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var An=Symbol.for("react.element"),Yd=Symbol.for("react.portal"),Xd=Symbol.for("react.fragment"),Zd=Symbol.for("react.strict_mode"),ep=Symbol.for("react.profiler"),tp=Symbol.for("react.provider"),rp=Symbol.for("react.context"),np=Symbol.for("react.forward_ref"),ap=Symbol.for("react.suspense"),op=Symbol.for("react.memo"),sp=Symbol.for("react.lazy"),Vi=Symbol.iterator;function ip(e){return e===null||typeof e!="object"?null:(e=Vi&&e[Vi]||e["@@iterator"],typeof e=="function"?e:null)}var ju={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Su=Object.assign,_u={};function Hr(e,t,r){this.props=e,this.context=t,this.refs=_u,this.updater=r||ju}Hr.prototype.isReactComponent={};Hr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Hr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Eu(){}Eu.prototype=Hr.prototype;function Bs(e,t,r){this.props=e,this.context=t,this.refs=_u,this.updater=r||ju}var Ws=Bs.prototype=new Eu;Ws.constructor=Bs;Su(Ws,Hr.prototype);Ws.isPureReactComponent=!0;var Hi=Array.isArray,Cu=Object.prototype.hasOwnProperty,Vs={current:null},Nu={key:!0,ref:!0,__self:!0,__source:!0};function Pu(e,t,r){var n,a={},o=null,i=null;if(t!=null)for(n in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Cu.call(t,n)&&!Nu.hasOwnProperty(n)&&(a[n]=t[n]);var l=arguments.length-2;if(l===1)a.children=r;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];a.children=u}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)a[n]===void 0&&(a[n]=l[n]);return{$$typeof:An,type:e,key:o,ref:i,props:a,_owner:Vs.current}}function lp(e,t){return{$$typeof:An,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Hs(e){return typeof e=="object"&&e!==null&&e.$$typeof===An}function up(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var qi=/\/+/g;function fo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?up(""+e.key):t.toString(36)}function la(e,t,r,n,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case An:case Yd:i=!0}}if(i)return i=e,a=a(i),e=n===""?"."+fo(i,0):n,Hi(a)?(r="",e!=null&&(r=e.replace(qi,"$&/")+"/"),la(a,t,r,"",function(c){return c})):a!=null&&(Hs(a)&&(a=lp(a,r+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(qi,"$&/")+"/")+e)),t.push(a)),1;if(i=0,n=n===""?".":n+":",Hi(e))for(var l=0;l<e.length;l++){o=e[l];var u=n+fo(o,l);i+=la(o,t,r,u,a)}else if(u=ip(e),typeof u=="function")for(e=u.call(e),l=0;!(o=e.next()).done;)o=o.value,u=n+fo(o,l++),i+=la(o,t,r,u,a);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Wn(e,t,r){if(e==null)return e;var n=[],a=0;return la(e,n,"","",function(o){return t.call(r,o,a++)}),n}function cp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},ua={transition:null},dp={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:ua,ReactCurrentOwner:Vs};function zu(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:Wn,forEach:function(e,t,r){Wn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Wn(e,function(){t++}),t},toArray:function(e){return Wn(e,function(t){return t})||[]},only:function(e){if(!Hs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Hr;M.Fragment=Xd;M.Profiler=ep;M.PureComponent=Bs;M.StrictMode=Zd;M.Suspense=ap;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dp;M.act=zu;M.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Su({},e.props),a=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Vs.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)Cu.call(t,u)&&!Nu.hasOwnProperty(u)&&(n[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];n.children=l}return{$$typeof:An,type:e.type,key:a,ref:o,props:n,_owner:i}};M.createContext=function(e){return e={$$typeof:rp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:tp,_context:e},e.Consumer=e};M.createElement=Pu;M.createFactory=function(e){var t=Pu.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:np,render:e}};M.isValidElement=Hs;M.lazy=function(e){return{$$typeof:sp,_payload:{_status:-1,_result:e},_init:cp}};M.memo=function(e,t){return{$$typeof:op,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=ua.transition;ua.transition={};try{e()}finally{ua.transition=t}};M.unstable_act=zu;M.useCallback=function(e,t){return Ce.current.useCallback(e,t)};M.useContext=function(e){return Ce.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};M.useEffect=function(e,t){return Ce.current.useEffect(e,t)};M.useId=function(){return Ce.current.useId()};M.useImperativeHandle=function(e,t,r){return Ce.current.useImperativeHandle(e,t,r)};M.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return Ce.current.useMemo(e,t)};M.useReducer=function(e,t,r){return Ce.current.useReducer(e,t,r)};M.useRef=function(e){return Ce.current.useRef(e)};M.useState=function(e){return Ce.current.useState(e)};M.useSyncExternalStore=function(e,t,r){return Ce.current.useSyncExternalStore(e,t,r)};M.useTransition=function(){return Ce.current.useTransition()};M.version="18.3.1";ku.exports=M;var w=ku.exports;const Qa=Jd(w),pp=Gd({__proto__:null,default:Qa},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fp=w,hp=Symbol.for("react.element"),mp=Symbol.for("react.fragment"),gp=Object.prototype.hasOwnProperty,xp=fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vp={key:!0,ref:!0,__self:!0,__source:!0};function Tu(e,t,r){var n,a={},o=null,i=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(n in t)gp.call(t,n)&&!vp.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:hp,type:e,key:o,ref:i,props:a,_owner:xp.current}}qa.Fragment=mp;qa.jsx=Tu;qa.jsxs=Tu;bu.exports=qa;var s=bu.exports,Bo={},Du={exports:{}},Me={},$u={exports:{}},Lu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,T){var L=N.length;N.push(T);e:for(;0<L;){var Q=L-1>>>1,ne=N[Q];if(0<a(ne,T))N[Q]=T,N[L]=ne,L=Q;else break e}}function r(N){return N.length===0?null:N[0]}function n(N){if(N.length===0)return null;var T=N[0],L=N.pop();if(L!==T){N[0]=L;e:for(var Q=0,ne=N.length,at=ne>>>1;Q<at;){var Fe=2*(Q+1)-1,A=N[Fe],R=Fe+1,K=N[R];if(0>a(A,L))R<ne&&0>a(K,A)?(N[Q]=K,N[R]=L,Q=R):(N[Q]=A,N[Fe]=L,Q=Fe);else if(R<ne&&0>a(K,L))N[Q]=K,N[R]=L,Q=R;else break e}}return T}function a(N,T){var L=N.sortIndex-T.sortIndex;return L!==0?L:N.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var u=[],c=[],h=1,f=null,g=3,y=!1,v=!1,x=!1,k=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var T=r(c);T!==null;){if(T.callback===null)n(c);else if(T.startTime<=N)n(c),T.sortIndex=T.expirationTime,t(u,T);else break;T=r(c)}}function b(N){if(x=!1,m(N),!v)if(r(u)!==null)v=!0,Ke(j);else{var T=r(c);T!==null&&V(b,T.startTime-N)}}function j(N,T){v=!1,x&&(x=!1,p(z),z=-1),y=!0;var L=g;try{for(m(T),f=r(u);f!==null&&(!(f.expirationTime>T)||N&&!F());){var Q=f.callback;if(typeof Q=="function"){f.callback=null,g=f.priorityLevel;var ne=Q(f.expirationTime<=T);T=e.unstable_now(),typeof ne=="function"?f.callback=ne:f===r(u)&&n(u),m(T)}else n(u);f=r(u)}if(f!==null)var at=!0;else{var Fe=r(c);Fe!==null&&V(b,Fe.startTime-T),at=!1}return at}finally{f=null,g=L,y=!1}}var C=!1,E=null,z=-1,D=5,$=-1;function F(){return!(e.unstable_now()-$<D)}function Y(){if(E!==null){var N=e.unstable_now();$=N;var T=!0;try{T=E(!0,N)}finally{T?le():(C=!1,E=null)}}else C=!1}var le;if(typeof d=="function")le=function(){d(Y)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,Z=ht.port2;ht.port1.onmessage=Y,le=function(){Z.postMessage(null)}}else le=function(){k(Y,0)};function Ke(N){E=N,C||(C=!0,le())}function V(N,T){z=k(function(){N(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,Ke(j))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(u)},e.unstable_next=function(N){switch(g){case 1:case 2:case 3:var T=3;break;default:T=g}var L=g;g=T;try{return N()}finally{g=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,T){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var L=g;g=N;try{return T()}finally{g=L}},e.unstable_scheduleCallback=function(N,T,L){var Q=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?Q+L:Q):L=Q,N){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=L+ne,N={id:h++,callback:T,priorityLevel:N,startTime:L,expirationTime:ne,sortIndex:-1},L>Q?(N.sortIndex=L,t(c,N),r(u)===null&&N===r(c)&&(x?(p(z),z=-1):x=!0,V(b,L-Q))):(N.sortIndex=ne,t(u,N),v||y||(v=!0,Ke(j))),N},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(N){var T=g;return function(){var L=g;g=T;try{return N.apply(this,arguments)}finally{g=L}}}})(Lu);$u.exports=Lu;var yp=$u.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp=w,Ae=yp;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ru=new Set,vn={};function cr(e,t){Mr(e,t),Mr(e+"Capture",t)}function Mr(e,t){for(vn[e]=t,e=0;e<t.length;e++)Ru.add(t[e])}var bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wo=Object.prototype.hasOwnProperty,bp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qi={},Ki={};function kp(e){return Wo.call(Ki,e)?!0:Wo.call(Qi,e)?!1:bp.test(e)?Ki[e]=!0:(Qi[e]=!0,!1)}function jp(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sp(e,t,r,n){if(t===null||typeof t>"u"||jp(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ne(e,t,r,n,a,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ve[e]=new Ne(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ve[t]=new Ne(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ve[e]=new Ne(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ve[e]=new Ne(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ve[e]=new Ne(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ve[e]=new Ne(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ve[e]=new Ne(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ve[e]=new Ne(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ve[e]=new Ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var qs=/[\-:]([a-z])/g;function Qs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qs,Qs);ve[t]=new Ne(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qs,Qs);ve[t]=new Ne(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qs,Qs);ve[t]=new Ne(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ve[e]=new Ne(e,1,!1,e.toLowerCase(),null,!1,!1)});ve.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ve[e]=new Ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ks(e,t,r,n){var a=ve.hasOwnProperty(t)?ve[t]:null;(a!==null?a.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Sp(t,r,a,n)&&(r=null),n||a===null?kp(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,n=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var _t=wp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vn=Symbol.for("react.element"),xr=Symbol.for("react.portal"),vr=Symbol.for("react.fragment"),Gs=Symbol.for("react.strict_mode"),Vo=Symbol.for("react.profiler"),Iu=Symbol.for("react.provider"),Au=Symbol.for("react.context"),Js=Symbol.for("react.forward_ref"),Ho=Symbol.for("react.suspense"),qo=Symbol.for("react.suspense_list"),Ys=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),Mu=Symbol.for("react.offscreen"),Gi=Symbol.iterator;function Gr(e){return e===null||typeof e!="object"?null:(e=Gi&&e[Gi]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,ho;function an(e){if(ho===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);ho=t&&t[1]||""}return`
`+ho+e}var mo=!1;function go(e,t){if(!e||mo)return"";mo=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var a=c.stack.split(`
`),o=n.stack.split(`
`),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(i!==1||l!==1)do if(i--,l--,0>l||a[i]!==o[l]){var u=`
`+a[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=l);break}}}finally{mo=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?an(e):""}function _p(e){switch(e.tag){case 5:return an(e.type);case 16:return an("Lazy");case 13:return an("Suspense");case 19:return an("SuspenseList");case 0:case 2:case 15:return e=go(e.type,!1),e;case 11:return e=go(e.type.render,!1),e;case 1:return e=go(e.type,!0),e;default:return""}}function Qo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vr:return"Fragment";case xr:return"Portal";case Vo:return"Profiler";case Gs:return"StrictMode";case Ho:return"Suspense";case qo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Au:return(e.displayName||"Context")+".Consumer";case Iu:return(e._context.displayName||"Context")+".Provider";case Js:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ys:return t=e.displayName||null,t!==null?t:Qo(e.type)||"Memo";case Nt:t=e._payload,e=e._init;try{return Qo(e(t))}catch{}}return null}function Ep(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qo(t);case 8:return t===Gs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ou(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cp(e){var t=Ou(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){n=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hn(e){e._valueTracker||(e._valueTracker=Cp(e))}function Fu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Ou(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function ba(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ko(e,t){var r=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ji(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Bt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Uu(e,t){t=t.checked,t!=null&&Ks(e,"checked",t,!1)}function Go(e,t){Uu(e,t);var r=Bt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Jo(e,t.type,r):t.hasOwnProperty("defaultValue")&&Jo(e,t.type,Bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Yi(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Jo(e,t,r){(t!=="number"||ba(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var on=Array.isArray;function zr(e,t,r,n){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Bt(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Yo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xi(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(_(92));if(on(r)){if(1<r.length)throw Error(_(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Bt(r)}}function Bu(e,t){var r=Bt(t.value),n=Bt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Zi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qn,Vu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qn=qn||document.createElement("div"),qn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function yn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var un={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Np=["Webkit","ms","Moz","O"];Object.keys(un).forEach(function(e){Np.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),un[t]=un[e]})});function Hu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||un.hasOwnProperty(e)&&un[e]?(""+t).trim():t+"px"}function qu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,a=Hu(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,a):e[r]=a}}var Pp=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zo(e,t){if(t){if(Pp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function es(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ts=null;function Xs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rs=null,Tr=null,Dr=null;function el(e){if(e=Fn(e)){if(typeof rs!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Xa(t),rs(e.stateNode,e.type,t))}}function Qu(e){Tr?Dr?Dr.push(e):Dr=[e]:Tr=e}function Ku(){if(Tr){var e=Tr,t=Dr;if(Dr=Tr=null,el(e),t)for(e=0;e<t.length;e++)el(t[e])}}function Gu(e,t){return e(t)}function Ju(){}var xo=!1;function Yu(e,t,r){if(xo)return e(t,r);xo=!0;try{return Gu(e,t,r)}finally{xo=!1,(Tr!==null||Dr!==null)&&(Ju(),Ku())}}function wn(e,t){var r=e.stateNode;if(r===null)return null;var n=Xa(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(_(231,t,typeof r));return r}var ns=!1;if(bt)try{var Jr={};Object.defineProperty(Jr,"passive",{get:function(){ns=!0}}),window.addEventListener("test",Jr,Jr),window.removeEventListener("test",Jr,Jr)}catch{ns=!1}function zp(e,t,r,n,a,o,i,l,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(h){this.onError(h)}}var cn=!1,ka=null,ja=!1,as=null,Tp={onError:function(e){cn=!0,ka=e}};function Dp(e,t,r,n,a,o,i,l,u){cn=!1,ka=null,zp.apply(Tp,arguments)}function $p(e,t,r,n,a,o,i,l,u){if(Dp.apply(this,arguments),cn){if(cn){var c=ka;cn=!1,ka=null}else throw Error(_(198));ja||(ja=!0,as=c)}}function dr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Xu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function tl(e){if(dr(e)!==e)throw Error(_(188))}function Lp(e){var t=e.alternate;if(!t){if(t=dr(e),t===null)throw Error(_(188));return t!==e?null:e}for(var r=e,n=t;;){var a=r.return;if(a===null)break;var o=a.alternate;if(o===null){if(n=a.return,n!==null){r=n;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===r)return tl(a),e;if(o===n)return tl(a),t;o=o.sibling}throw Error(_(188))}if(r.return!==n.return)r=a,n=o;else{for(var i=!1,l=a.child;l;){if(l===r){i=!0,r=a,n=o;break}if(l===n){i=!0,n=a,r=o;break}l=l.sibling}if(!i){for(l=o.child;l;){if(l===r){i=!0,r=o,n=a;break}if(l===n){i=!0,n=o,r=a;break}l=l.sibling}if(!i)throw Error(_(189))}}if(r.alternate!==n)throw Error(_(190))}if(r.tag!==3)throw Error(_(188));return r.stateNode.current===r?e:t}function Zu(e){return e=Lp(e),e!==null?ec(e):null}function ec(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ec(e);if(t!==null)return t;e=e.sibling}return null}var tc=Ae.unstable_scheduleCallback,rl=Ae.unstable_cancelCallback,Rp=Ae.unstable_shouldYield,Ip=Ae.unstable_requestPaint,ie=Ae.unstable_now,Ap=Ae.unstable_getCurrentPriorityLevel,Zs=Ae.unstable_ImmediatePriority,rc=Ae.unstable_UserBlockingPriority,Sa=Ae.unstable_NormalPriority,Mp=Ae.unstable_LowPriority,nc=Ae.unstable_IdlePriority,Ka=null,dt=null;function Op(e){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Ka,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:Bp,Fp=Math.log,Up=Math.LN2;function Bp(e){return e>>>=0,e===0?32:31-(Fp(e)/Up|0)|0}var Qn=64,Kn=4194304;function sn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _a(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,a=e.suspendedLanes,o=e.pingedLanes,i=r&268435455;if(i!==0){var l=i&~a;l!==0?n=sn(l):(o&=i,o!==0&&(n=sn(o)))}else i=r&~a,i!==0?n=sn(i):o!==0&&(n=sn(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&a)&&(a=n&-n,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-tt(t),a=1<<r,n|=e[r],t&=~a;return n}function Wp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vp(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-tt(o),l=1<<i,u=a[i];u===-1?(!(l&r)||l&n)&&(a[i]=Wp(l,t)):u<=t&&(e.expiredLanes|=l),o&=~l}}function os(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ac(){var e=Qn;return Qn<<=1,!(Qn&4194240)&&(Qn=64),e}function vo(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Mn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=r}function Hp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-tt(r),o=1<<a;t[a]=0,n[a]=-1,e[a]=-1,r&=~o}}function ei(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-tt(r),a=1<<n;a&t|e[n]&t&&(e[n]|=t),r&=~a}}var W=0;function oc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var sc,ti,ic,lc,uc,ss=!1,Gn=[],Lt=null,Rt=null,It=null,bn=new Map,kn=new Map,zt=[],qp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nl(e,t){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":kn.delete(t.pointerId)}}function Yr(e,t,r,n,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[a]},t!==null&&(t=Fn(t),t!==null&&ti(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Qp(e,t,r,n,a){switch(t){case"focusin":return Lt=Yr(Lt,e,t,r,n,a),!0;case"dragenter":return Rt=Yr(Rt,e,t,r,n,a),!0;case"mouseover":return It=Yr(It,e,t,r,n,a),!0;case"pointerover":var o=a.pointerId;return bn.set(o,Yr(bn.get(o)||null,e,t,r,n,a)),!0;case"gotpointercapture":return o=a.pointerId,kn.set(o,Yr(kn.get(o)||null,e,t,r,n,a)),!0}return!1}function cc(e){var t=Jt(e.target);if(t!==null){var r=dr(t);if(r!==null){if(t=r.tag,t===13){if(t=Xu(r),t!==null){e.blockedOn=t,uc(e.priority,function(){ic(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ca(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=is(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);ts=n,r.target.dispatchEvent(n),ts=null}else return t=Fn(r),t!==null&&ti(t),e.blockedOn=r,!1;t.shift()}return!0}function al(e,t,r){ca(e)&&r.delete(t)}function Kp(){ss=!1,Lt!==null&&ca(Lt)&&(Lt=null),Rt!==null&&ca(Rt)&&(Rt=null),It!==null&&ca(It)&&(It=null),bn.forEach(al),kn.forEach(al)}function Xr(e,t){e.blockedOn===t&&(e.blockedOn=null,ss||(ss=!0,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,Kp)))}function jn(e){function t(a){return Xr(a,e)}if(0<Gn.length){Xr(Gn[0],e);for(var r=1;r<Gn.length;r++){var n=Gn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Lt!==null&&Xr(Lt,e),Rt!==null&&Xr(Rt,e),It!==null&&Xr(It,e),bn.forEach(t),kn.forEach(t),r=0;r<zt.length;r++)n=zt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<zt.length&&(r=zt[0],r.blockedOn===null);)cc(r),r.blockedOn===null&&zt.shift()}var $r=_t.ReactCurrentBatchConfig,Ea=!0;function Gp(e,t,r,n){var a=W,o=$r.transition;$r.transition=null;try{W=1,ri(e,t,r,n)}finally{W=a,$r.transition=o}}function Jp(e,t,r,n){var a=W,o=$r.transition;$r.transition=null;try{W=4,ri(e,t,r,n)}finally{W=a,$r.transition=o}}function ri(e,t,r,n){if(Ea){var a=is(e,t,r,n);if(a===null)No(e,t,n,Ca,r),nl(e,n);else if(Qp(a,e,t,r,n))n.stopPropagation();else if(nl(e,n),t&4&&-1<qp.indexOf(e)){for(;a!==null;){var o=Fn(a);if(o!==null&&sc(o),o=is(e,t,r,n),o===null&&No(e,t,n,Ca,r),o===a)break;a=o}a!==null&&n.stopPropagation()}else No(e,t,n,null,r)}}var Ca=null;function is(e,t,r,n){if(Ca=null,e=Xs(n),e=Jt(e),e!==null)if(t=dr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Xu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ca=e,null}function dc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ap()){case Zs:return 1;case rc:return 4;case Sa:case Mp:return 16;case nc:return 536870912;default:return 16}default:return 16}}var Dt=null,ni=null,da=null;function pc(){if(da)return da;var e,t=ni,r=t.length,n,a="value"in Dt?Dt.value:Dt.textContent,o=a.length;for(e=0;e<r&&t[e]===a[e];e++);var i=r-e;for(n=1;n<=i&&t[r-n]===a[o-n];n++);return da=a.slice(e,1<n?1-n:void 0)}function pa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Jn(){return!0}function ol(){return!1}function Oe(e){function t(r,n,a,o,i){this._reactName=r,this._targetInst=a,this.type=n,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Jn:ol,this.isPropagationStopped=ol,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Jn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Jn)},persist:function(){},isPersistent:Jn}),t}var qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ai=Oe(qr),On=re({},qr,{view:0,detail:0}),Yp=Oe(On),yo,wo,Zr,Ga=re({},On,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zr&&(Zr&&e.type==="mousemove"?(yo=e.screenX-Zr.screenX,wo=e.screenY-Zr.screenY):wo=yo=0,Zr=e),yo)},movementY:function(e){return"movementY"in e?e.movementY:wo}}),sl=Oe(Ga),Xp=re({},Ga,{dataTransfer:0}),Zp=Oe(Xp),ef=re({},On,{relatedTarget:0}),bo=Oe(ef),tf=re({},qr,{animationName:0,elapsedTime:0,pseudoElement:0}),rf=Oe(tf),nf=re({},qr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),af=Oe(nf),of=re({},qr,{data:0}),il=Oe(of),sf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=uf[e])?!!t[e]:!1}function oi(){return cf}var df=re({},On,{key:function(e){if(e.key){var t=sf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=pa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oi,charCode:function(e){return e.type==="keypress"?pa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pf=Oe(df),ff=re({},Ga,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ll=Oe(ff),hf=re({},On,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oi}),mf=Oe(hf),gf=re({},qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),xf=Oe(gf),vf=re({},Ga,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yf=Oe(vf),wf=[9,13,27,32],si=bt&&"CompositionEvent"in window,dn=null;bt&&"documentMode"in document&&(dn=document.documentMode);var bf=bt&&"TextEvent"in window&&!dn,fc=bt&&(!si||dn&&8<dn&&11>=dn),ul=" ",cl=!1;function hc(e,t){switch(e){case"keyup":return wf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yr=!1;function kf(e,t){switch(e){case"compositionend":return mc(t);case"keypress":return t.which!==32?null:(cl=!0,ul);case"textInput":return e=t.data,e===ul&&cl?null:e;default:return null}}function jf(e,t){if(yr)return e==="compositionend"||!si&&hc(e,t)?(e=pc(),da=ni=Dt=null,yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fc&&t.locale!=="ko"?null:t.data;default:return null}}var Sf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sf[e.type]:t==="textarea"}function gc(e,t,r,n){Qu(n),t=Na(t,"onChange"),0<t.length&&(r=new ai("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var pn=null,Sn=null;function _f(e){Cc(e,0)}function Ja(e){var t=kr(e);if(Fu(t))return e}function Ef(e,t){if(e==="change")return t}var xc=!1;if(bt){var ko;if(bt){var jo="oninput"in document;if(!jo){var pl=document.createElement("div");pl.setAttribute("oninput","return;"),jo=typeof pl.oninput=="function"}ko=jo}else ko=!1;xc=ko&&(!document.documentMode||9<document.documentMode)}function fl(){pn&&(pn.detachEvent("onpropertychange",vc),Sn=pn=null)}function vc(e){if(e.propertyName==="value"&&Ja(Sn)){var t=[];gc(t,Sn,e,Xs(e)),Yu(_f,t)}}function Cf(e,t,r){e==="focusin"?(fl(),pn=t,Sn=r,pn.attachEvent("onpropertychange",vc)):e==="focusout"&&fl()}function Nf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ja(Sn)}function Pf(e,t){if(e==="click")return Ja(t)}function zf(e,t){if(e==="input"||e==="change")return Ja(t)}function Tf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:Tf;function _n(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!Wo.call(t,a)||!nt(e[a],t[a]))return!1}return!0}function hl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ml(e,t){var r=hl(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=hl(r)}}function yc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wc(){for(var e=window,t=ba();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=ba(e.document)}return t}function ii(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Df(e){var t=wc(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&yc(r.ownerDocument.documentElement,r)){if(n!==null&&ii(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,o=Math.min(n.start,a);n=n.end===void 0?o:Math.min(n.end,a),!e.extend&&o>n&&(a=n,n=o,o=a),a=ml(r,o);var i=ml(r,n);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $f=bt&&"documentMode"in document&&11>=document.documentMode,wr=null,ls=null,fn=null,us=!1;function gl(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;us||wr==null||wr!==ba(n)||(n=wr,"selectionStart"in n&&ii(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),fn&&_n(fn,n)||(fn=n,n=Na(ls,"onSelect"),0<n.length&&(t=new ai("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=wr)))}function Yn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var br={animationend:Yn("Animation","AnimationEnd"),animationiteration:Yn("Animation","AnimationIteration"),animationstart:Yn("Animation","AnimationStart"),transitionend:Yn("Transition","TransitionEnd")},So={},bc={};bt&&(bc=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function Ya(e){if(So[e])return So[e];if(!br[e])return e;var t=br[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in bc)return So[e]=t[r];return e}var kc=Ya("animationend"),jc=Ya("animationiteration"),Sc=Ya("animationstart"),_c=Ya("transitionend"),Ec=new Map,xl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ht(e,t){Ec.set(e,t),cr(t,[e])}for(var _o=0;_o<xl.length;_o++){var Eo=xl[_o],Lf=Eo.toLowerCase(),Rf=Eo[0].toUpperCase()+Eo.slice(1);Ht(Lf,"on"+Rf)}Ht(kc,"onAnimationEnd");Ht(jc,"onAnimationIteration");Ht(Sc,"onAnimationStart");Ht("dblclick","onDoubleClick");Ht("focusin","onFocus");Ht("focusout","onBlur");Ht(_c,"onTransitionEnd");Mr("onMouseEnter",["mouseout","mouseover"]);Mr("onMouseLeave",["mouseout","mouseover"]);Mr("onPointerEnter",["pointerout","pointerover"]);Mr("onPointerLeave",["pointerout","pointerover"]);cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),If=new Set("cancel close invalid load scroll toggle".split(" ").concat(ln));function vl(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,$p(n,t,void 0,e),e.currentTarget=null}function Cc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],a=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var i=n.length-1;0<=i;i--){var l=n[i],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==o&&a.isPropagationStopped())break e;vl(a,l,c),o=u}else for(i=0;i<n.length;i++){if(l=n[i],u=l.instance,c=l.currentTarget,l=l.listener,u!==o&&a.isPropagationStopped())break e;vl(a,l,c),o=u}}}if(ja)throw e=as,ja=!1,as=null,e}function G(e,t){var r=t[hs];r===void 0&&(r=t[hs]=new Set);var n=e+"__bubble";r.has(n)||(Nc(t,e,2,!1),r.add(n))}function Co(e,t,r){var n=0;t&&(n|=4),Nc(r,e,n,t)}var Xn="_reactListening"+Math.random().toString(36).slice(2);function En(e){if(!e[Xn]){e[Xn]=!0,Ru.forEach(function(r){r!=="selectionchange"&&(If.has(r)||Co(r,!1,e),Co(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xn]||(t[Xn]=!0,Co("selectionchange",!1,t))}}function Nc(e,t,r,n){switch(dc(t)){case 1:var a=Gp;break;case 4:a=Jp;break;default:a=ri}r=a.bind(null,t,r,e),a=void 0,!ns||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function No(e,t,r,n,a){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var l=n.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(i===4)for(i=n.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===a||u.nodeType===8&&u.parentNode===a))return;i=i.return}for(;l!==null;){if(i=Jt(l),i===null)return;if(u=i.tag,u===5||u===6){n=o=i;continue e}l=l.parentNode}}n=n.return}Yu(function(){var c=o,h=Xs(r),f=[];e:{var g=Ec.get(e);if(g!==void 0){var y=ai,v=e;switch(e){case"keypress":if(pa(r)===0)break e;case"keydown":case"keyup":y=pf;break;case"focusin":v="focus",y=bo;break;case"focusout":v="blur",y=bo;break;case"beforeblur":case"afterblur":y=bo;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=sl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Zp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=mf;break;case kc:case jc:case Sc:y=rf;break;case _c:y=xf;break;case"scroll":y=Yp;break;case"wheel":y=yf;break;case"copy":case"cut":case"paste":y=af;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ll}var x=(t&4)!==0,k=!x&&e==="scroll",p=x?g!==null?g+"Capture":null:g;x=[];for(var d=c,m;d!==null;){m=d;var b=m.stateNode;if(m.tag===5&&b!==null&&(m=b,p!==null&&(b=wn(d,p),b!=null&&x.push(Cn(d,b,m)))),k)break;d=d.return}0<x.length&&(g=new y(g,v,null,r,h),f.push({event:g,listeners:x}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&r!==ts&&(v=r.relatedTarget||r.fromElement)&&(Jt(v)||v[kt]))break e;if((y||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,y?(v=r.relatedTarget||r.toElement,y=c,v=v?Jt(v):null,v!==null&&(k=dr(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=c),y!==v)){if(x=sl,b="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=ll,b="onPointerLeave",p="onPointerEnter",d="pointer"),k=y==null?g:kr(y),m=v==null?g:kr(v),g=new x(b,d+"leave",y,r,h),g.target=k,g.relatedTarget=m,b=null,Jt(h)===c&&(x=new x(p,d+"enter",v,r,h),x.target=m,x.relatedTarget=k,b=x),k=b,y&&v)t:{for(x=y,p=v,d=0,m=x;m;m=hr(m))d++;for(m=0,b=p;b;b=hr(b))m++;for(;0<d-m;)x=hr(x),d--;for(;0<m-d;)p=hr(p),m--;for(;d--;){if(x===p||p!==null&&x===p.alternate)break t;x=hr(x),p=hr(p)}x=null}else x=null;y!==null&&yl(f,g,y,x,!1),v!==null&&k!==null&&yl(f,k,v,x,!0)}}e:{if(g=c?kr(c):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var j=Ef;else if(dl(g))if(xc)j=zf;else{j=Nf;var C=Cf}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=Pf);if(j&&(j=j(e,c))){gc(f,j,r,h);break e}C&&C(e,g,c),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&Jo(g,"number",g.value)}switch(C=c?kr(c):window,e){case"focusin":(dl(C)||C.contentEditable==="true")&&(wr=C,ls=c,fn=null);break;case"focusout":fn=ls=wr=null;break;case"mousedown":us=!0;break;case"contextmenu":case"mouseup":case"dragend":us=!1,gl(f,r,h);break;case"selectionchange":if($f)break;case"keydown":case"keyup":gl(f,r,h)}var E;if(si)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else yr?hc(e,r)&&(z="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(z="onCompositionStart");z&&(fc&&r.locale!=="ko"&&(yr||z!=="onCompositionStart"?z==="onCompositionEnd"&&yr&&(E=pc()):(Dt=h,ni="value"in Dt?Dt.value:Dt.textContent,yr=!0)),C=Na(c,z),0<C.length&&(z=new il(z,e,null,r,h),f.push({event:z,listeners:C}),E?z.data=E:(E=mc(r),E!==null&&(z.data=E)))),(E=bf?kf(e,r):jf(e,r))&&(c=Na(c,"onBeforeInput"),0<c.length&&(h=new il("onBeforeInput","beforeinput",null,r,h),f.push({event:h,listeners:c}),h.data=E))}Cc(f,t)})}function Cn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Na(e,t){for(var r=t+"Capture",n=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=wn(e,r),o!=null&&n.unshift(Cn(e,o,a)),o=wn(e,t),o!=null&&n.push(Cn(e,o,a))),e=e.return}return n}function hr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yl(e,t,r,n,a){for(var o=t._reactName,i=[];r!==null&&r!==n;){var l=r,u=l.alternate,c=l.stateNode;if(u!==null&&u===n)break;l.tag===5&&c!==null&&(l=c,a?(u=wn(r,o),u!=null&&i.unshift(Cn(r,u,l))):a||(u=wn(r,o),u!=null&&i.push(Cn(r,u,l)))),r=r.return}i.length!==0&&e.push({event:t,listeners:i})}var Af=/\r\n?/g,Mf=/\u0000|\uFFFD/g;function wl(e){return(typeof e=="string"?e:""+e).replace(Af,`
`).replace(Mf,"")}function Zn(e,t,r){if(t=wl(t),wl(e)!==t&&r)throw Error(_(425))}function Pa(){}var cs=null,ds=null;function ps(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fs=typeof setTimeout=="function"?setTimeout:void 0,Of=typeof clearTimeout=="function"?clearTimeout:void 0,bl=typeof Promise=="function"?Promise:void 0,Ff=typeof queueMicrotask=="function"?queueMicrotask:typeof bl<"u"?function(e){return bl.resolve(null).then(e).catch(Uf)}:fs;function Uf(e){setTimeout(function(){throw e})}function Po(e,t){var r=t,n=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(n===0){e.removeChild(a),jn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=a}while(r);jn(t)}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function kl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Qr=Math.random().toString(36).slice(2),ut="__reactFiber$"+Qr,Nn="__reactProps$"+Qr,kt="__reactContainer$"+Qr,hs="__reactEvents$"+Qr,Bf="__reactListeners$"+Qr,Wf="__reactHandles$"+Qr;function Jt(e){var t=e[ut];if(t)return t;for(var r=e.parentNode;r;){if(t=r[kt]||r[ut]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=kl(e);e!==null;){if(r=e[ut])return r;e=kl(e)}return t}e=r,r=e.parentNode}return null}function Fn(e){return e=e[ut]||e[kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Xa(e){return e[Nn]||null}var ms=[],jr=-1;function qt(e){return{current:e}}function J(e){0>jr||(e.current=ms[jr],ms[jr]=null,jr--)}function q(e,t){jr++,ms[jr]=e.current,e.current=t}var Wt={},Se=qt(Wt),Te=qt(!1),ar=Wt;function Or(e,t){var r=e.type.contextTypes;if(!r)return Wt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in r)a[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function De(e){return e=e.childContextTypes,e!=null}function za(){J(Te),J(Se)}function jl(e,t,r){if(Se.current!==Wt)throw Error(_(168));q(Se,t),q(Te,r)}function Pc(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var a in n)if(!(a in t))throw Error(_(108,Ep(e)||"Unknown",a));return re({},r,n)}function Ta(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wt,ar=Se.current,q(Se,e),q(Te,Te.current),!0}function Sl(e,t,r){var n=e.stateNode;if(!n)throw Error(_(169));r?(e=Pc(e,t,ar),n.__reactInternalMemoizedMergedChildContext=e,J(Te),J(Se),q(Se,e)):J(Te),q(Te,r)}var gt=null,Za=!1,zo=!1;function zc(e){gt===null?gt=[e]:gt.push(e)}function Vf(e){Za=!0,zc(e)}function Qt(){if(!zo&&gt!==null){zo=!0;var e=0,t=W;try{var r=gt;for(W=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}gt=null,Za=!1}catch(a){throw gt!==null&&(gt=gt.slice(e+1)),tc(Zs,Qt),a}finally{W=t,zo=!1}}return null}var Sr=[],_r=0,Da=null,$a=0,Ue=[],Be=0,or=null,vt=1,yt="";function Kt(e,t){Sr[_r++]=$a,Sr[_r++]=Da,Da=e,$a=t}function Tc(e,t,r){Ue[Be++]=vt,Ue[Be++]=yt,Ue[Be++]=or,or=e;var n=vt;e=yt;var a=32-tt(n)-1;n&=~(1<<a),r+=1;var o=32-tt(t)+a;if(30<o){var i=a-a%5;o=(n&(1<<i)-1).toString(32),n>>=i,a-=i,vt=1<<32-tt(t)+a|r<<a|n,yt=o+e}else vt=1<<o|r<<a|n,yt=e}function li(e){e.return!==null&&(Kt(e,1),Tc(e,1,0))}function ui(e){for(;e===Da;)Da=Sr[--_r],Sr[_r]=null,$a=Sr[--_r],Sr[_r]=null;for(;e===or;)or=Ue[--Be],Ue[Be]=null,yt=Ue[--Be],Ue[Be]=null,vt=Ue[--Be],Ue[Be]=null}var Ie=null,Re=null,X=!1,Ze=null;function Dc(e,t){var r=We(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function _l(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ie=e,Re=At(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ie=e,Re=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=or!==null?{id:vt,overflow:yt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=We(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Ie=e,Re=null,!0):!1;default:return!1}}function gs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xs(e){if(X){var t=Re;if(t){var r=t;if(!_l(e,t)){if(gs(e))throw Error(_(418));t=At(r.nextSibling);var n=Ie;t&&_l(e,t)?Dc(n,r):(e.flags=e.flags&-4097|2,X=!1,Ie=e)}}else{if(gs(e))throw Error(_(418));e.flags=e.flags&-4097|2,X=!1,Ie=e}}}function El(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function ea(e){if(e!==Ie)return!1;if(!X)return El(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ps(e.type,e.memoizedProps)),t&&(t=Re)){if(gs(e))throw $c(),Error(_(418));for(;t;)Dc(e,t),t=At(t.nextSibling)}if(El(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Re=At(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Re=null}}else Re=Ie?At(e.stateNode.nextSibling):null;return!0}function $c(){for(var e=Re;e;)e=At(e.nextSibling)}function Fr(){Re=Ie=null,X=!1}function ci(e){Ze===null?Ze=[e]:Ze.push(e)}var Hf=_t.ReactCurrentBatchConfig;function en(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(_(309));var n=r.stateNode}if(!n)throw Error(_(147,e));var a=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var l=a.refs;i===null?delete l[o]:l[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!r._owner)throw Error(_(290,e))}return e}function ta(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Cl(e){var t=e._init;return t(e._payload)}function Lc(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function r(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function n(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function a(p,d){return p=Ut(p,d),p.index=0,p.sibling=null,p}function o(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,d,m,b){return d===null||d.tag!==6?(d=Ao(m,p.mode,b),d.return=p,d):(d=a(d,m),d.return=p,d)}function u(p,d,m,b){var j=m.type;return j===vr?h(p,d,m.props.children,b,m.key):d!==null&&(d.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Nt&&Cl(j)===d.type)?(b=a(d,m.props),b.ref=en(p,d,m),b.return=p,b):(b=ya(m.type,m.key,m.props,null,p.mode,b),b.ref=en(p,d,m),b.return=p,b)}function c(p,d,m,b){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Mo(m,p.mode,b),d.return=p,d):(d=a(d,m.children||[]),d.return=p,d)}function h(p,d,m,b,j){return d===null||d.tag!==7?(d=tr(m,p.mode,b,j),d.return=p,d):(d=a(d,m),d.return=p,d)}function f(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ao(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Vn:return m=ya(d.type,d.key,d.props,null,p.mode,m),m.ref=en(p,null,d),m.return=p,m;case xr:return d=Mo(d,p.mode,m),d.return=p,d;case Nt:var b=d._init;return f(p,b(d._payload),m)}if(on(d)||Gr(d))return d=tr(d,p.mode,m,null),d.return=p,d;ta(p,d)}return null}function g(p,d,m,b){var j=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return j!==null?null:l(p,d,""+m,b);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Vn:return m.key===j?u(p,d,m,b):null;case xr:return m.key===j?c(p,d,m,b):null;case Nt:return j=m._init,g(p,d,j(m._payload),b)}if(on(m)||Gr(m))return j!==null?null:h(p,d,m,b,null);ta(p,m)}return null}function y(p,d,m,b,j){if(typeof b=="string"&&b!==""||typeof b=="number")return p=p.get(m)||null,l(d,p,""+b,j);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Vn:return p=p.get(b.key===null?m:b.key)||null,u(d,p,b,j);case xr:return p=p.get(b.key===null?m:b.key)||null,c(d,p,b,j);case Nt:var C=b._init;return y(p,d,m,C(b._payload),j)}if(on(b)||Gr(b))return p=p.get(m)||null,h(d,p,b,j,null);ta(d,b)}return null}function v(p,d,m,b){for(var j=null,C=null,E=d,z=d=0,D=null;E!==null&&z<m.length;z++){E.index>z?(D=E,E=null):D=E.sibling;var $=g(p,E,m[z],b);if($===null){E===null&&(E=D);break}e&&E&&$.alternate===null&&t(p,E),d=o($,d,z),C===null?j=$:C.sibling=$,C=$,E=D}if(z===m.length)return r(p,E),X&&Kt(p,z),j;if(E===null){for(;z<m.length;z++)E=f(p,m[z],b),E!==null&&(d=o(E,d,z),C===null?j=E:C.sibling=E,C=E);return X&&Kt(p,z),j}for(E=n(p,E);z<m.length;z++)D=y(E,p,z,m[z],b),D!==null&&(e&&D.alternate!==null&&E.delete(D.key===null?z:D.key),d=o(D,d,z),C===null?j=D:C.sibling=D,C=D);return e&&E.forEach(function(F){return t(p,F)}),X&&Kt(p,z),j}function x(p,d,m,b){var j=Gr(m);if(typeof j!="function")throw Error(_(150));if(m=j.call(m),m==null)throw Error(_(151));for(var C=j=null,E=d,z=d=0,D=null,$=m.next();E!==null&&!$.done;z++,$=m.next()){E.index>z?(D=E,E=null):D=E.sibling;var F=g(p,E,$.value,b);if(F===null){E===null&&(E=D);break}e&&E&&F.alternate===null&&t(p,E),d=o(F,d,z),C===null?j=F:C.sibling=F,C=F,E=D}if($.done)return r(p,E),X&&Kt(p,z),j;if(E===null){for(;!$.done;z++,$=m.next())$=f(p,$.value,b),$!==null&&(d=o($,d,z),C===null?j=$:C.sibling=$,C=$);return X&&Kt(p,z),j}for(E=n(p,E);!$.done;z++,$=m.next())$=y(E,p,z,$.value,b),$!==null&&(e&&$.alternate!==null&&E.delete($.key===null?z:$.key),d=o($,d,z),C===null?j=$:C.sibling=$,C=$);return e&&E.forEach(function(Y){return t(p,Y)}),X&&Kt(p,z),j}function k(p,d,m,b){if(typeof m=="object"&&m!==null&&m.type===vr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Vn:e:{for(var j=m.key,C=d;C!==null;){if(C.key===j){if(j=m.type,j===vr){if(C.tag===7){r(p,C.sibling),d=a(C,m.props.children),d.return=p,p=d;break e}}else if(C.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Nt&&Cl(j)===C.type){r(p,C.sibling),d=a(C,m.props),d.ref=en(p,C,m),d.return=p,p=d;break e}r(p,C);break}else t(p,C);C=C.sibling}m.type===vr?(d=tr(m.props.children,p.mode,b,m.key),d.return=p,p=d):(b=ya(m.type,m.key,m.props,null,p.mode,b),b.ref=en(p,d,m),b.return=p,p=b)}return i(p);case xr:e:{for(C=m.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){r(p,d.sibling),d=a(d,m.children||[]),d.return=p,p=d;break e}else{r(p,d);break}else t(p,d);d=d.sibling}d=Mo(m,p.mode,b),d.return=p,p=d}return i(p);case Nt:return C=m._init,k(p,d,C(m._payload),b)}if(on(m))return v(p,d,m,b);if(Gr(m))return x(p,d,m,b);ta(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(r(p,d.sibling),d=a(d,m),d.return=p,p=d):(r(p,d),d=Ao(m,p.mode,b),d.return=p,p=d),i(p)):r(p,d)}return k}var Ur=Lc(!0),Rc=Lc(!1),La=qt(null),Ra=null,Er=null,di=null;function pi(){di=Er=Ra=null}function fi(e){var t=La.current;J(La),e._currentValue=t}function vs(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Lr(e,t){Ra=e,di=Er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ze=!0),e.firstContext=null)}function qe(e){var t=e._currentValue;if(di!==e)if(e={context:e,memoizedValue:t,next:null},Er===null){if(Ra===null)throw Error(_(308));Er=e,Ra.dependencies={lanes:0,firstContext:e}}else Er=Er.next=e;return t}var Yt=null;function hi(e){Yt===null?Yt=[e]:Yt.push(e)}function Ic(e,t,r,n){var a=t.interleaved;return a===null?(r.next=r,hi(t)):(r.next=a.next,a.next=r),t.interleaved=r,jt(e,n)}function jt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Pt=!1;function mi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ac(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,O&2){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,jt(e,r)}return a=n.interleaved,a===null?(t.next=t,hi(n)):(t.next=a.next,a.next=t),n.interleaved=t,jt(e,r)}function fa(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ei(e,r)}}function Nl(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var a=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?a=o=i:o=o.next=i,r=r.next}while(r!==null);o===null?a=o=t:o=o.next=t}else a=o=t;r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ia(e,t,r,n){var a=e.updateQueue;Pt=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var u=l,c=u.next;u.next=null,i===null?o=c:i.next=c,i=u;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==i&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=u))}if(o!==null){var f=a.baseState;i=0,h=c=u=null,l=o;do{var g=l.lane,y=l.eventTime;if((n&g)===g){h!==null&&(h=h.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,x=l;switch(g=t,y=r,x.tag){case 1:if(v=x.payload,typeof v=="function"){f=v.call(y,f,g);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,g=typeof v=="function"?v.call(y,f,g):v,g==null)break e;f=re({},f,g);break e;case 2:Pt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=a.effects,g===null?a.effects=[l]:g.push(l))}else y={eventTime:y,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=y,u=f):h=h.next=y,i|=g;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;g=l,l=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(!0);if(h===null&&(u=f),a.baseState=u,a.firstBaseUpdate=c,a.lastBaseUpdate=h,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);ir|=i,e.lanes=i,e.memoizedState=f}}function Pl(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],a=n.callback;if(a!==null){if(n.callback=null,n=r,typeof a!="function")throw Error(_(191,a));a.call(n)}}}var Un={},pt=qt(Un),Pn=qt(Un),zn=qt(Un);function Xt(e){if(e===Un)throw Error(_(174));return e}function gi(e,t){switch(q(zn,t),q(Pn,e),q(pt,Un),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Xo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Xo(t,e)}J(pt),q(pt,t)}function Br(){J(pt),J(Pn),J(zn)}function Mc(e){Xt(zn.current);var t=Xt(pt.current),r=Xo(t,e.type);t!==r&&(q(Pn,e),q(pt,r))}function xi(e){Pn.current===e&&(J(pt),J(Pn))}var ee=qt(0);function Aa(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var To=[];function vi(){for(var e=0;e<To.length;e++)To[e]._workInProgressVersionPrimary=null;To.length=0}var ha=_t.ReactCurrentDispatcher,Do=_t.ReactCurrentBatchConfig,sr=0,te=null,de=null,he=null,Ma=!1,hn=!1,Tn=0,qf=0;function we(){throw Error(_(321))}function yi(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!nt(e[r],t[r]))return!1;return!0}function wi(e,t,r,n,a,o){if(sr=o,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ha.current=e===null||e.memoizedState===null?Jf:Yf,e=r(n,a),hn){o=0;do{if(hn=!1,Tn=0,25<=o)throw Error(_(301));o+=1,he=de=null,t.updateQueue=null,ha.current=Xf,e=r(n,a)}while(hn)}if(ha.current=Oa,t=de!==null&&de.next!==null,sr=0,he=de=te=null,Ma=!1,t)throw Error(_(300));return e}function bi(){var e=Tn!==0;return Tn=0,e}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?te.memoizedState=he=e:he=he.next=e,he}function Qe(){if(de===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=he===null?te.memoizedState:he.next;if(t!==null)he=t,de=e;else{if(e===null)throw Error(_(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},he===null?te.memoizedState=he=e:he=he.next=e}return he}function Dn(e,t){return typeof t=="function"?t(e):t}function $o(e){var t=Qe(),r=t.queue;if(r===null)throw Error(_(311));r.lastRenderedReducer=e;var n=de,a=n.baseQueue,o=r.pending;if(o!==null){if(a!==null){var i=a.next;a.next=o.next,o.next=i}n.baseQueue=a=o,r.pending=null}if(a!==null){o=a.next,n=n.baseState;var l=i=null,u=null,c=o;do{var h=c.lane;if((sr&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=f,i=n):u=u.next=f,te.lanes|=h,ir|=h}c=c.next}while(c!==null&&c!==o);u===null?i=n:u.next=l,nt(n,t.memoizedState)||(ze=!0),t.memoizedState=n,t.baseState=i,t.baseQueue=u,r.lastRenderedState=n}if(e=r.interleaved,e!==null){a=e;do o=a.lane,te.lanes|=o,ir|=o,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Lo(e){var t=Qe(),r=t.queue;if(r===null)throw Error(_(311));r.lastRenderedReducer=e;var n=r.dispatch,a=r.pending,o=t.memoizedState;if(a!==null){r.pending=null;var i=a=a.next;do o=e(o,i.action),i=i.next;while(i!==a);nt(o,t.memoizedState)||(ze=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function Oc(){}function Fc(e,t){var r=te,n=Qe(),a=t(),o=!nt(n.memoizedState,a);if(o&&(n.memoizedState=a,ze=!0),n=n.queue,ki(Wc.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||he!==null&&he.memoizedState.tag&1){if(r.flags|=2048,$n(9,Bc.bind(null,r,n,a,t),void 0,null),me===null)throw Error(_(349));sr&30||Uc(r,t,a)}return a}function Uc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Bc(e,t,r,n){t.value=r,t.getSnapshot=n,Vc(t)&&Hc(e)}function Wc(e,t,r){return r(function(){Vc(t)&&Hc(e)})}function Vc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!nt(e,r)}catch{return!0}}function Hc(e){var t=jt(e,1);t!==null&&rt(t,e,1,-1)}function zl(e){var t=lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Dn,lastRenderedState:e},t.queue=e,e=e.dispatch=Gf.bind(null,te,e),[t.memoizedState,e]}function $n(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function qc(){return Qe().memoizedState}function ma(e,t,r,n){var a=lt();te.flags|=e,a.memoizedState=$n(1|t,r,void 0,n===void 0?null:n)}function eo(e,t,r,n){var a=Qe();n=n===void 0?null:n;var o=void 0;if(de!==null){var i=de.memoizedState;if(o=i.destroy,n!==null&&yi(n,i.deps)){a.memoizedState=$n(t,r,o,n);return}}te.flags|=e,a.memoizedState=$n(1|t,r,o,n)}function Tl(e,t){return ma(8390656,8,e,t)}function ki(e,t){return eo(2048,8,e,t)}function Qc(e,t){return eo(4,2,e,t)}function Kc(e,t){return eo(4,4,e,t)}function Gc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Jc(e,t,r){return r=r!=null?r.concat([e]):null,eo(4,4,Gc.bind(null,t,e),r)}function ji(){}function Yc(e,t){var r=Qe();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&yi(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Xc(e,t){var r=Qe();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&yi(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Zc(e,t,r){return sr&21?(nt(r,t)||(r=ac(),te.lanes|=r,ir|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=r)}function Qf(e,t){var r=W;W=r!==0&&4>r?r:4,e(!0);var n=Do.transition;Do.transition={};try{e(!1),t()}finally{W=r,Do.transition=n}}function ed(){return Qe().memoizedState}function Kf(e,t,r){var n=Ft(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},td(e))rd(t,r);else if(r=Ic(e,t,r,n),r!==null){var a=Ee();rt(r,e,n,a),nd(r,t,n)}}function Gf(e,t,r){var n=Ft(e),a={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(td(e))rd(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,l=o(i,r);if(a.hasEagerState=!0,a.eagerState=l,nt(l,i)){var u=t.interleaved;u===null?(a.next=a,hi(t)):(a.next=u.next,u.next=a),t.interleaved=a;return}}catch{}finally{}r=Ic(e,t,a,n),r!==null&&(a=Ee(),rt(r,e,n,a),nd(r,t,n))}}function td(e){var t=e.alternate;return e===te||t!==null&&t===te}function rd(e,t){hn=Ma=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function nd(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ei(e,r)}}var Oa={readContext:qe,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},Jf={readContext:qe,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:qe,useEffect:Tl,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ma(4194308,4,Gc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ma(4194308,4,e,t)},useInsertionEffect:function(e,t){return ma(4,2,e,t)},useMemo:function(e,t){var r=lt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=lt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Kf.bind(null,te,e),[n.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:zl,useDebugValue:ji,useDeferredValue:function(e){return lt().memoizedState=e},useTransition:function(){var e=zl(!1),t=e[0];return e=Qf.bind(null,e[1]),lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=te,a=lt();if(X){if(r===void 0)throw Error(_(407));r=r()}else{if(r=t(),me===null)throw Error(_(349));sr&30||Uc(n,t,r)}a.memoizedState=r;var o={value:r,getSnapshot:t};return a.queue=o,Tl(Wc.bind(null,n,o,e),[e]),n.flags|=2048,$n(9,Bc.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=lt(),t=me.identifierPrefix;if(X){var r=yt,n=vt;r=(n&~(1<<32-tt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Tn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=qf++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Yf={readContext:qe,useCallback:Yc,useContext:qe,useEffect:ki,useImperativeHandle:Jc,useInsertionEffect:Qc,useLayoutEffect:Kc,useMemo:Xc,useReducer:$o,useRef:qc,useState:function(){return $o(Dn)},useDebugValue:ji,useDeferredValue:function(e){var t=Qe();return Zc(t,de.memoizedState,e)},useTransition:function(){var e=$o(Dn)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Oc,useSyncExternalStore:Fc,useId:ed,unstable_isNewReconciler:!1},Xf={readContext:qe,useCallback:Yc,useContext:qe,useEffect:ki,useImperativeHandle:Jc,useInsertionEffect:Qc,useLayoutEffect:Kc,useMemo:Xc,useReducer:Lo,useRef:qc,useState:function(){return Lo(Dn)},useDebugValue:ji,useDeferredValue:function(e){var t=Qe();return de===null?t.memoizedState=e:Zc(t,de.memoizedState,e)},useTransition:function(){var e=Lo(Dn)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Oc,useSyncExternalStore:Fc,useId:ed,unstable_isNewReconciler:!1};function Ye(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ys(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:re({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var to={isMounted:function(e){return(e=e._reactInternals)?dr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Ee(),a=Ft(e),o=wt(n,a);o.payload=t,r!=null&&(o.callback=r),t=Mt(e,o,a),t!==null&&(rt(t,e,a,n),fa(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Ee(),a=Ft(e),o=wt(n,a);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=Mt(e,o,a),t!==null&&(rt(t,e,a,n),fa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ee(),n=Ft(e),a=wt(r,n);a.tag=2,t!=null&&(a.callback=t),t=Mt(e,a,n),t!==null&&(rt(t,e,n,r),fa(t,e,n))}};function Dl(e,t,r,n,a,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,i):t.prototype&&t.prototype.isPureReactComponent?!_n(r,n)||!_n(a,o):!0}function ad(e,t,r){var n=!1,a=Wt,o=t.contextType;return typeof o=="object"&&o!==null?o=qe(o):(a=De(t)?ar:Se.current,n=t.contextTypes,o=(n=n!=null)?Or(e,a):Wt),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=to,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function $l(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&to.enqueueReplaceState(t,t.state,null)}function ws(e,t,r,n){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},mi(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=qe(o):(o=De(t)?ar:Se.current,a.context=Or(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ys(e,t,o,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&to.enqueueReplaceState(a,a.state,null),Ia(e,r,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Wr(e,t){try{var r="",n=t;do r+=_p(n),n=n.return;while(n);var a=r}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function Ro(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function bs(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Zf=typeof WeakMap=="function"?WeakMap:Map;function od(e,t,r){r=wt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Ua||(Ua=!0,Ts=n),bs(e,t)},r}function sd(e,t,r){r=wt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=t.value;r.payload=function(){return n(a)},r.callback=function(){bs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){bs(e,t),typeof n!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),r}function Ll(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Zf;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(r)||(a.add(r),e=fh.bind(null,e,t,r),t.then(e,e))}function Rl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Il(e,t,r,n,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=wt(-1,1),t.tag=2,Mt(r,t,1))),r.lanes|=1),e)}var eh=_t.ReactCurrentOwner,ze=!1;function _e(e,t,r,n){t.child=e===null?Rc(t,null,r,n):Ur(t,e.child,r,n)}function Al(e,t,r,n,a){r=r.render;var o=t.ref;return Lr(t,a),n=wi(e,t,r,n,o,a),r=bi(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,St(e,t,a)):(X&&r&&li(t),t.flags|=1,_e(e,t,n,a),t.child)}function Ml(e,t,r,n,a){if(e===null){var o=r.type;return typeof o=="function"&&!Ti(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,id(e,t,o,n,a)):(e=ya(r.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&a)){var i=o.memoizedProps;if(r=r.compare,r=r!==null?r:_n,r(i,n)&&e.ref===t.ref)return St(e,t,a)}return t.flags|=1,e=Ut(o,n),e.ref=t.ref,e.return=t,t.child=e}function id(e,t,r,n,a){if(e!==null){var o=e.memoizedProps;if(_n(o,n)&&e.ref===t.ref)if(ze=!1,t.pendingProps=n=o,(e.lanes&a)!==0)e.flags&131072&&(ze=!0);else return t.lanes=e.lanes,St(e,t,a)}return ks(e,t,r,n,a)}function ld(e,t,r){var n=t.pendingProps,a=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(Nr,Le),Le|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(Nr,Le),Le|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,q(Nr,Le),Le|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,q(Nr,Le),Le|=n;return _e(e,t,a,r),t.child}function ud(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ks(e,t,r,n,a){var o=De(r)?ar:Se.current;return o=Or(t,o),Lr(t,a),r=wi(e,t,r,n,o,a),n=bi(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,St(e,t,a)):(X&&n&&li(t),t.flags|=1,_e(e,t,r,a),t.child)}function Ol(e,t,r,n,a){if(De(r)){var o=!0;Ta(t)}else o=!1;if(Lr(t,a),t.stateNode===null)ga(e,t),ad(t,r,n),ws(t,r,n,a),n=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var u=i.context,c=r.contextType;typeof c=="object"&&c!==null?c=qe(c):(c=De(r)?ar:Se.current,c=Or(t,c));var h=r.getDerivedStateFromProps,f=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==n||u!==c)&&$l(t,i,n,c),Pt=!1;var g=t.memoizedState;i.state=g,Ia(t,n,i,a),u=t.memoizedState,l!==n||g!==u||Te.current||Pt?(typeof h=="function"&&(ys(t,r,h,n),u=t.memoizedState),(l=Pt||Dl(t,r,l,n,g,u,c))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=u),i.props=n,i.state=u,i.context=c,n=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,Ac(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Ye(t.type,l),i.props=c,f=t.pendingProps,g=i.context,u=r.contextType,typeof u=="object"&&u!==null?u=qe(u):(u=De(r)?ar:Se.current,u=Or(t,u));var y=r.getDerivedStateFromProps;(h=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==f||g!==u)&&$l(t,i,n,u),Pt=!1,g=t.memoizedState,i.state=g,Ia(t,n,i,a);var v=t.memoizedState;l!==f||g!==v||Te.current||Pt?(typeof y=="function"&&(ys(t,r,y,n),v=t.memoizedState),(c=Pt||Dl(t,r,c,n,g,v,u)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,v,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,v,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=v),i.props=n,i.state=v,i.context=u,n=c):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return js(e,t,r,n,o,a)}function js(e,t,r,n,a,o){ud(e,t);var i=(t.flags&128)!==0;if(!n&&!i)return a&&Sl(t,r,!1),St(e,t,o);n=t.stateNode,eh.current=t;var l=i&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&i?(t.child=Ur(t,e.child,null,o),t.child=Ur(t,null,l,o)):_e(e,t,l,o),t.memoizedState=n.state,a&&Sl(t,r,!0),t.child}function cd(e){var t=e.stateNode;t.pendingContext?jl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&jl(e,t.context,!1),gi(e,t.containerInfo)}function Fl(e,t,r,n,a){return Fr(),ci(a),t.flags|=256,_e(e,t,r,n),t.child}var Ss={dehydrated:null,treeContext:null,retryLane:0};function _s(e){return{baseLanes:e,cachePool:null,transitions:null}}function dd(e,t,r){var n=t.pendingProps,a=ee.current,o=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),q(ee,a&1),e===null)return xs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=n.children,e=n.fallback,o?(n=t.mode,o=t.child,i={mode:"hidden",children:i},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=ao(i,n,0,null),e=tr(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=_s(r),t.memoizedState=Ss,e):Si(t,i));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return th(e,t,i,n,l,a,r);if(o){o=n.fallback,i=t.mode,a=e.child,l=a.sibling;var u={mode:"hidden",children:n.children};return!(i&1)&&t.child!==a?(n=t.child,n.childLanes=0,n.pendingProps=u,t.deletions=null):(n=Ut(a,u),n.subtreeFlags=a.subtreeFlags&14680064),l!==null?o=Ut(l,o):(o=tr(o,i,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,i=e.child.memoizedState,i=i===null?_s(r):{baseLanes:i.baseLanes|r,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~r,t.memoizedState=Ss,n}return o=e.child,e=o.sibling,n=Ut(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Si(e,t){return t=ao({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ra(e,t,r,n){return n!==null&&ci(n),Ur(t,e.child,null,r),e=Si(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function th(e,t,r,n,a,o,i){if(r)return t.flags&256?(t.flags&=-257,n=Ro(Error(_(422))),ra(e,t,i,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,a=t.mode,n=ao({mode:"visible",children:n.children},a,0,null),o=tr(o,a,i,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&Ur(t,e.child,null,i),t.child.memoizedState=_s(i),t.memoizedState=Ss,o);if(!(t.mode&1))return ra(e,t,i,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var l=n.dgst;return n=l,o=Error(_(419)),n=Ro(o,n,void 0),ra(e,t,i,n)}if(l=(i&e.childLanes)!==0,ze||l){if(n=me,n!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(n.suspendedLanes|i)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,jt(e,a),rt(n,e,a,-1))}return zi(),n=Ro(Error(_(421))),ra(e,t,i,n)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=hh.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Re=At(a.nextSibling),Ie=t,X=!0,Ze=null,e!==null&&(Ue[Be++]=vt,Ue[Be++]=yt,Ue[Be++]=or,vt=e.id,yt=e.overflow,or=t),t=Si(t,n.children),t.flags|=4096,t)}function Ul(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),vs(e.return,t,r)}function Io(e,t,r,n,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=a)}function pd(e,t,r){var n=t.pendingProps,a=n.revealOrder,o=n.tail;if(_e(e,t,n.children,r),n=ee.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ul(e,r,t);else if(e.tag===19)Ul(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(q(ee,n),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&Aa(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Io(t,!1,a,r,o);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Aa(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Io(t,!0,r,null,o);break;case"together":Io(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ga(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function St(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),ir|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,r=Ut(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Ut(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function rh(e,t,r){switch(t.tag){case 3:cd(t),Fr();break;case 5:Mc(t);break;case 1:De(t.type)&&Ta(t);break;case 4:gi(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,a=t.memoizedProps.value;q(La,n._currentValue),n._currentValue=a;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(q(ee,ee.current&1),t.flags|=128,null):r&t.child.childLanes?dd(e,t,r):(q(ee,ee.current&1),e=St(e,t,r),e!==null?e.sibling:null);q(ee,ee.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return pd(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),q(ee,ee.current),n)break;return null;case 22:case 23:return t.lanes=0,ld(e,t,r)}return St(e,t,r)}var fd,Es,hd,md;fd=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Es=function(){};hd=function(e,t,r,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,Xt(pt.current);var o=null;switch(r){case"input":a=Ko(e,a),n=Ko(e,n),o=[];break;case"select":a=re({},a,{value:void 0}),n=re({},n,{value:void 0}),o=[];break;case"textarea":a=Yo(e,a),n=Yo(e,n),o=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Pa)}Zo(r,n);var i;r=null;for(c in a)if(!n.hasOwnProperty(c)&&a.hasOwnProperty(c)&&a[c]!=null)if(c==="style"){var l=a[c];for(i in l)l.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(vn.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in n){var u=n[c];if(l=a!=null?a[c]:void 0,n.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(i in l)!l.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in u)u.hasOwnProperty(i)&&l[i]!==u[i]&&(r||(r={}),r[i]=u[i])}else r||(o||(o=[]),o.push(c,r)),r=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(vn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&G("scroll",e),o||l===u||(o=[])):(o=o||[]).push(c,u))}r&&(o=o||[]).push("style",r);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};md=function(e,t,r,n){r!==n&&(t.flags|=4)};function tn(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function nh(e,t,r){var n=t.pendingProps;switch(ui(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return De(t.type)&&za(),be(t),null;case 3:return n=t.stateNode,Br(),J(Te),J(Se),vi(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ea(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ze!==null&&(Ls(Ze),Ze=null))),Es(e,t),be(t),null;case 5:xi(t);var a=Xt(zn.current);if(r=t.type,e!==null&&t.stateNode!=null)hd(e,t,r,n,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(_(166));return be(t),null}if(e=Xt(pt.current),ea(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[ut]=t,n[Nn]=o,e=(t.mode&1)!==0,r){case"dialog":G("cancel",n),G("close",n);break;case"iframe":case"object":case"embed":G("load",n);break;case"video":case"audio":for(a=0;a<ln.length;a++)G(ln[a],n);break;case"source":G("error",n);break;case"img":case"image":case"link":G("error",n),G("load",n);break;case"details":G("toggle",n);break;case"input":Ji(n,o),G("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},G("invalid",n);break;case"textarea":Xi(n,o),G("invalid",n)}Zo(r,o),a=null;for(var i in o)if(o.hasOwnProperty(i)){var l=o[i];i==="children"?typeof l=="string"?n.textContent!==l&&(o.suppressHydrationWarning!==!0&&Zn(n.textContent,l,e),a=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Zn(n.textContent,l,e),a=["children",""+l]):vn.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&G("scroll",n)}switch(r){case"input":Hn(n),Yi(n,o,!0);break;case"textarea":Hn(n),Zi(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=Pa)}n=a,t.updateQueue=n,n!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=i.createElement(r,{is:n.is}):(e=i.createElement(r),r==="select"&&(i=e,n.multiple?i.multiple=!0:n.size&&(i.size=n.size))):e=i.createElementNS(e,r),e[ut]=t,e[Nn]=n,fd(e,t,!1,!1),t.stateNode=e;e:{switch(i=es(r,n),r){case"dialog":G("cancel",e),G("close",e),a=n;break;case"iframe":case"object":case"embed":G("load",e),a=n;break;case"video":case"audio":for(a=0;a<ln.length;a++)G(ln[a],e);a=n;break;case"source":G("error",e),a=n;break;case"img":case"image":case"link":G("error",e),G("load",e),a=n;break;case"details":G("toggle",e),a=n;break;case"input":Ji(e,n),a=Ko(e,n),G("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=re({},n,{value:void 0}),G("invalid",e);break;case"textarea":Xi(e,n),a=Yo(e,n),G("invalid",e);break;default:a=n}Zo(r,a),l=a;for(o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="style"?qu(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Vu(e,u)):o==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&yn(e,u):typeof u=="number"&&yn(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(vn.hasOwnProperty(o)?u!=null&&o==="onScroll"&&G("scroll",e):u!=null&&Ks(e,o,u,i))}switch(r){case"input":Hn(e),Yi(e,n,!1);break;case"textarea":Hn(e),Zi(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Bt(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?zr(e,!!n.multiple,o,!1):n.defaultValue!=null&&zr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Pa)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return be(t),null;case 6:if(e&&t.stateNode!=null)md(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(_(166));if(r=Xt(zn.current),Xt(pt.current),ea(t)){if(n=t.stateNode,r=t.memoizedProps,n[ut]=t,(o=n.nodeValue!==r)&&(e=Ie,e!==null))switch(e.tag){case 3:Zn(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zn(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[ut]=t,t.stateNode=n}return be(t),null;case 13:if(J(ee),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Re!==null&&t.mode&1&&!(t.flags&128))$c(),Fr(),t.flags|=98560,o=!1;else if(o=ea(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[ut]=t}else Fr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),o=!1}else Ze!==null&&(Ls(Ze),Ze=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||ee.current&1?fe===0&&(fe=3):zi())),t.updateQueue!==null&&(t.flags|=4),be(t),null);case 4:return Br(),Es(e,t),e===null&&En(t.stateNode.containerInfo),be(t),null;case 10:return fi(t.type._context),be(t),null;case 17:return De(t.type)&&za(),be(t),null;case 19:if(J(ee),o=t.memoizedState,o===null)return be(t),null;if(n=(t.flags&128)!==0,i=o.rendering,i===null)if(n)tn(o,!1);else{if(fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Aa(e),i!==null){for(t.flags|=128,tn(o,!1),n=i.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return q(ee,ee.current&1|2),t.child}e=e.sibling}o.tail!==null&&ie()>Vr&&(t.flags|=128,n=!0,tn(o,!1),t.lanes=4194304)}else{if(!n)if(e=Aa(i),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),tn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!X)return be(t),null}else 2*ie()-o.renderingStartTime>Vr&&r!==1073741824&&(t.flags|=128,n=!0,tn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(r=o.last,r!==null?r.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ie(),t.sibling=null,r=ee.current,q(ee,n?r&1|2:r&1),t):(be(t),null);case 22:case 23:return Pi(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Le&1073741824&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function ah(e,t){switch(ui(t),t.tag){case 1:return De(t.type)&&za(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Br(),J(Te),J(Se),vi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xi(t),null;case 13:if(J(ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(ee),null;case 4:return Br(),null;case 10:return fi(t.type._context),null;case 22:case 23:return Pi(),null;case 24:return null;default:return null}}var na=!1,je=!1,oh=typeof WeakSet=="function"?WeakSet:Set,P=null;function Cr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){oe(e,t,n)}else r.current=null}function Cs(e,t,r){try{r()}catch(n){oe(e,t,n)}}var Bl=!1;function sh(e,t){if(cs=Ea,e=wc(),ii(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var a=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var i=0,l=-1,u=-1,c=0,h=0,f=e,g=null;t:for(;;){for(var y;f!==r||a!==0&&f.nodeType!==3||(l=i+a),f!==o||n!==0&&f.nodeType!==3||(u=i+n),f.nodeType===3&&(i+=f.nodeValue.length),(y=f.firstChild)!==null;)g=f,f=y;for(;;){if(f===e)break t;if(g===r&&++c===a&&(l=i),g===o&&++h===n&&(u=i),(y=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=y}r=l===-1||u===-1?null:{start:l,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(ds={focusedElem:e,selectionRange:r},Ea=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,k=v.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:Ye(t.type,x),k);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(b){oe(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return v=Bl,Bl=!1,v}function mn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&Cs(t,r,o)}a=a.next}while(a!==n)}}function ro(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Ns(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function gd(e){var t=e.alternate;t!==null&&(e.alternate=null,gd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ut],delete t[Nn],delete t[hs],delete t[Bf],delete t[Wf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xd(e){return e.tag===5||e.tag===3||e.tag===4}function Wl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ps(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Pa));else if(n!==4&&(e=e.child,e!==null))for(Ps(e,t,r),e=e.sibling;e!==null;)Ps(e,t,r),e=e.sibling}function zs(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(zs(e,t,r),e=e.sibling;e!==null;)zs(e,t,r),e=e.sibling}var ge=null,Xe=!1;function Ct(e,t,r){for(r=r.child;r!==null;)vd(e,t,r),r=r.sibling}function vd(e,t,r){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Ka,r)}catch{}switch(r.tag){case 5:je||Cr(r,t);case 6:var n=ge,a=Xe;ge=null,Ct(e,t,r),ge=n,Xe=a,ge!==null&&(Xe?(e=ge,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ge.removeChild(r.stateNode));break;case 18:ge!==null&&(Xe?(e=ge,r=r.stateNode,e.nodeType===8?Po(e.parentNode,r):e.nodeType===1&&Po(e,r),jn(e)):Po(ge,r.stateNode));break;case 4:n=ge,a=Xe,ge=r.stateNode.containerInfo,Xe=!0,Ct(e,t,r),ge=n,Xe=a;break;case 0:case 11:case 14:case 15:if(!je&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var o=a,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Cs(r,t,i),a=a.next}while(a!==n)}Ct(e,t,r);break;case 1:if(!je&&(Cr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){oe(r,t,l)}Ct(e,t,r);break;case 21:Ct(e,t,r);break;case 22:r.mode&1?(je=(n=je)||r.memoizedState!==null,Ct(e,t,r),je=n):Ct(e,t,r);break;default:Ct(e,t,r)}}function Vl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new oh),t.forEach(function(n){var a=mh.bind(null,e,n);r.has(n)||(r.add(n),n.then(a,a))})}}function Ge(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var a=r[n];try{var o=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:ge=l.stateNode,Xe=!1;break e;case 3:ge=l.stateNode.containerInfo,Xe=!0;break e;case 4:ge=l.stateNode.containerInfo,Xe=!0;break e}l=l.return}if(ge===null)throw Error(_(160));vd(o,i,a),ge=null,Xe=!1;var u=a.alternate;u!==null&&(u.return=null),a.return=null}catch(c){oe(a,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yd(t,e),t=t.sibling}function yd(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(t,e),st(e),n&4){try{mn(3,e,e.return),ro(3,e)}catch(x){oe(e,e.return,x)}try{mn(5,e,e.return)}catch(x){oe(e,e.return,x)}}break;case 1:Ge(t,e),st(e),n&512&&r!==null&&Cr(r,r.return);break;case 5:if(Ge(t,e),st(e),n&512&&r!==null&&Cr(r,r.return),e.flags&32){var a=e.stateNode;try{yn(a,"")}catch(x){oe(e,e.return,x)}}if(n&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,i=r!==null?r.memoizedProps:o,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Uu(a,o),es(l,i);var c=es(l,o);for(i=0;i<u.length;i+=2){var h=u[i],f=u[i+1];h==="style"?qu(a,f):h==="dangerouslySetInnerHTML"?Vu(a,f):h==="children"?yn(a,f):Ks(a,h,f,c)}switch(l){case"input":Go(a,o);break;case"textarea":Bu(a,o);break;case"select":var g=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?zr(a,!!o.multiple,y,!1):g!==!!o.multiple&&(o.defaultValue!=null?zr(a,!!o.multiple,o.defaultValue,!0):zr(a,!!o.multiple,o.multiple?[]:"",!1))}a[Nn]=o}catch(x){oe(e,e.return,x)}}break;case 6:if(Ge(t,e),st(e),n&4){if(e.stateNode===null)throw Error(_(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(x){oe(e,e.return,x)}}break;case 3:if(Ge(t,e),st(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{jn(t.containerInfo)}catch(x){oe(e,e.return,x)}break;case 4:Ge(t,e),st(e);break;case 13:Ge(t,e),st(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(Ci=ie())),n&4&&Vl(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(je=(c=je)||h,Ge(t,e),je=c):Ge(t,e),st(e),n&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(P=e,h=e.child;h!==null;){for(f=P=h;P!==null;){switch(g=P,y=g.child,g.tag){case 0:case 11:case 14:case 15:mn(4,g,g.return);break;case 1:Cr(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){n=g,r=g.return;try{t=n,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){oe(n,r,x)}}break;case 5:Cr(g,g.return);break;case 22:if(g.memoizedState!==null){ql(f);continue}}y!==null?(y.return=g,P=y):ql(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{a=f.stateNode,c?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,u=f.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Hu("display",i))}catch(x){oe(e,e.return,x)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){oe(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ge(t,e),st(e),n&4&&Vl(e);break;case 21:break;default:Ge(t,e),st(e)}}function st(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(xd(r)){var n=r;break e}r=r.return}throw Error(_(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(yn(a,""),n.flags&=-33);var o=Wl(e);zs(e,o,a);break;case 3:case 4:var i=n.stateNode.containerInfo,l=Wl(e);Ps(e,l,i);break;default:throw Error(_(161))}}catch(u){oe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ih(e,t,r){P=e,wd(e)}function wd(e,t,r){for(var n=(e.mode&1)!==0;P!==null;){var a=P,o=a.child;if(a.tag===22&&n){var i=a.memoizedState!==null||na;if(!i){var l=a.alternate,u=l!==null&&l.memoizedState!==null||je;l=na;var c=je;if(na=i,(je=u)&&!c)for(P=a;P!==null;)i=P,u=i.child,i.tag===22&&i.memoizedState!==null?Ql(a):u!==null?(u.return=i,P=u):Ql(a);for(;o!==null;)P=o,wd(o),o=o.sibling;P=a,na=l,je=c}Hl(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,P=o):Hl(e)}}function Hl(e){for(;P!==null;){var t=P;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:je||ro(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!je)if(r===null)n.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Ye(t.type,r.memoizedProps);n.componentDidUpdate(a,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Pl(t,o,n);break;case 3:var i=t.updateQueue;if(i!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Pl(t,i,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&jn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}je||t.flags&512&&Ns(t)}catch(g){oe(t,t.return,g)}}if(t===e){P=null;break}if(r=t.sibling,r!==null){r.return=t.return,P=r;break}P=t.return}}function ql(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var r=t.sibling;if(r!==null){r.return=t.return,P=r;break}P=t.return}}function Ql(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{ro(4,t)}catch(u){oe(t,r,u)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var a=t.return;try{n.componentDidMount()}catch(u){oe(t,a,u)}}var o=t.return;try{Ns(t)}catch(u){oe(t,o,u)}break;case 5:var i=t.return;try{Ns(t)}catch(u){oe(t,i,u)}}}catch(u){oe(t,t.return,u)}if(t===e){P=null;break}var l=t.sibling;if(l!==null){l.return=t.return,P=l;break}P=t.return}}var lh=Math.ceil,Fa=_t.ReactCurrentDispatcher,_i=_t.ReactCurrentOwner,He=_t.ReactCurrentBatchConfig,O=0,me=null,ce=null,xe=0,Le=0,Nr=qt(0),fe=0,Ln=null,ir=0,no=0,Ei=0,gn=null,Pe=null,Ci=0,Vr=1/0,mt=null,Ua=!1,Ts=null,Ot=null,aa=!1,$t=null,Ba=0,xn=0,Ds=null,xa=-1,va=0;function Ee(){return O&6?ie():xa!==-1?xa:xa=ie()}function Ft(e){return e.mode&1?O&2&&xe!==0?xe&-xe:Hf.transition!==null?(va===0&&(va=ac()),va):(e=W,e!==0||(e=window.event,e=e===void 0?16:dc(e.type)),e):1}function rt(e,t,r,n){if(50<xn)throw xn=0,Ds=null,Error(_(185));Mn(e,r,n),(!(O&2)||e!==me)&&(e===me&&(!(O&2)&&(no|=r),fe===4&&Tt(e,xe)),$e(e,n),r===1&&O===0&&!(t.mode&1)&&(Vr=ie()+500,Za&&Qt()))}function $e(e,t){var r=e.callbackNode;Vp(e,t);var n=_a(e,e===me?xe:0);if(n===0)r!==null&&rl(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&rl(r),t===1)e.tag===0?Vf(Kl.bind(null,e)):zc(Kl.bind(null,e)),Ff(function(){!(O&6)&&Qt()}),r=null;else{switch(oc(n)){case 1:r=Zs;break;case 4:r=rc;break;case 16:r=Sa;break;case 536870912:r=nc;break;default:r=Sa}r=Nd(r,bd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function bd(e,t){if(xa=-1,va=0,O&6)throw Error(_(327));var r=e.callbackNode;if(Rr()&&e.callbackNode!==r)return null;var n=_a(e,e===me?xe:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Wa(e,n);else{t=n;var a=O;O|=2;var o=jd();(me!==e||xe!==t)&&(mt=null,Vr=ie()+500,er(e,t));do try{dh();break}catch(l){kd(e,l)}while(!0);pi(),Fa.current=o,O=a,ce!==null?t=0:(me=null,xe=0,t=fe)}if(t!==0){if(t===2&&(a=os(e),a!==0&&(n=a,t=$s(e,a))),t===1)throw r=Ln,er(e,0),Tt(e,n),$e(e,ie()),r;if(t===6)Tt(e,n);else{if(a=e.current.alternate,!(n&30)&&!uh(a)&&(t=Wa(e,n),t===2&&(o=os(e),o!==0&&(n=o,t=$s(e,o))),t===1))throw r=Ln,er(e,0),Tt(e,n),$e(e,ie()),r;switch(e.finishedWork=a,e.finishedLanes=n,t){case 0:case 1:throw Error(_(345));case 2:Gt(e,Pe,mt);break;case 3:if(Tt(e,n),(n&130023424)===n&&(t=Ci+500-ie(),10<t)){if(_a(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){Ee(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=fs(Gt.bind(null,e,Pe,mt),t);break}Gt(e,Pe,mt);break;case 4:if(Tt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,a=-1;0<n;){var i=31-tt(n);o=1<<i,i=t[i],i>a&&(a=i),n&=~o}if(n=a,n=ie()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*lh(n/1960))-n,10<n){e.timeoutHandle=fs(Gt.bind(null,e,Pe,mt),n);break}Gt(e,Pe,mt);break;case 5:Gt(e,Pe,mt);break;default:throw Error(_(329))}}}return $e(e,ie()),e.callbackNode===r?bd.bind(null,e):null}function $s(e,t){var r=gn;return e.current.memoizedState.isDehydrated&&(er(e,t).flags|=256),e=Wa(e,t),e!==2&&(t=Pe,Pe=r,t!==null&&Ls(t)),e}function Ls(e){Pe===null?Pe=e:Pe.push.apply(Pe,e)}function uh(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var a=r[n],o=a.getSnapshot;a=a.value;try{if(!nt(o(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tt(e,t){for(t&=~Ei,t&=~no,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-tt(t),n=1<<r;e[r]=-1,t&=~n}}function Kl(e){if(O&6)throw Error(_(327));Rr();var t=_a(e,0);if(!(t&1))return $e(e,ie()),null;var r=Wa(e,t);if(e.tag!==0&&r===2){var n=os(e);n!==0&&(t=n,r=$s(e,n))}if(r===1)throw r=Ln,er(e,0),Tt(e,t),$e(e,ie()),r;if(r===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gt(e,Pe,mt),$e(e,ie()),null}function Ni(e,t){var r=O;O|=1;try{return e(t)}finally{O=r,O===0&&(Vr=ie()+500,Za&&Qt())}}function lr(e){$t!==null&&$t.tag===0&&!(O&6)&&Rr();var t=O;O|=1;var r=He.transition,n=W;try{if(He.transition=null,W=1,e)return e()}finally{W=n,He.transition=r,O=t,!(O&6)&&Qt()}}function Pi(){Le=Nr.current,J(Nr)}function er(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Of(r)),ce!==null)for(r=ce.return;r!==null;){var n=r;switch(ui(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&za();break;case 3:Br(),J(Te),J(Se),vi();break;case 5:xi(n);break;case 4:Br();break;case 13:J(ee);break;case 19:J(ee);break;case 10:fi(n.type._context);break;case 22:case 23:Pi()}r=r.return}if(me=e,ce=e=Ut(e.current,null),xe=Le=t,fe=0,Ln=null,Ei=no=ir=0,Pe=gn=null,Yt!==null){for(t=0;t<Yt.length;t++)if(r=Yt[t],n=r.interleaved,n!==null){r.interleaved=null;var a=n.next,o=r.pending;if(o!==null){var i=o.next;o.next=a,n.next=i}r.pending=n}Yt=null}return e}function kd(e,t){do{var r=ce;try{if(pi(),ha.current=Oa,Ma){for(var n=te.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}Ma=!1}if(sr=0,he=de=te=null,hn=!1,Tn=0,_i.current=null,r===null||r.return===null){fe=1,Ln=t,ce=null;break}e:{var o=e,i=r.return,l=r,u=t;if(t=xe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=l,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Rl(i);if(y!==null){y.flags&=-257,Il(y,i,l,o,t),y.mode&1&&Ll(o,c,t),t=y,u=c;var v=t.updateQueue;if(v===null){var x=new Set;x.add(u),t.updateQueue=x}else v.add(u);break e}else{if(!(t&1)){Ll(o,c,t),zi();break e}u=Error(_(426))}}else if(X&&l.mode&1){var k=Rl(i);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Il(k,i,l,o,t),ci(Wr(u,l));break e}}o=u=Wr(u,l),fe!==4&&(fe=2),gn===null?gn=[o]:gn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=od(o,u,t);Nl(o,p);break e;case 1:l=u;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ot===null||!Ot.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=sd(o,l,t);Nl(o,b);break e}}o=o.return}while(o!==null)}_d(r)}catch(j){t=j,ce===r&&r!==null&&(ce=r=r.return);continue}break}while(!0)}function jd(){var e=Fa.current;return Fa.current=Oa,e===null?Oa:e}function zi(){(fe===0||fe===3||fe===2)&&(fe=4),me===null||!(ir&268435455)&&!(no&268435455)||Tt(me,xe)}function Wa(e,t){var r=O;O|=2;var n=jd();(me!==e||xe!==t)&&(mt=null,er(e,t));do try{ch();break}catch(a){kd(e,a)}while(!0);if(pi(),O=r,Fa.current=n,ce!==null)throw Error(_(261));return me=null,xe=0,fe}function ch(){for(;ce!==null;)Sd(ce)}function dh(){for(;ce!==null&&!Rp();)Sd(ce)}function Sd(e){var t=Cd(e.alternate,e,Le);e.memoizedProps=e.pendingProps,t===null?_d(e):ce=t,_i.current=null}function _d(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=ah(r,t),r!==null){r.flags&=32767,ce=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{fe=6,ce=null;return}}else if(r=nh(r,t,Le),r!==null){ce=r;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);fe===0&&(fe=5)}function Gt(e,t,r){var n=W,a=He.transition;try{He.transition=null,W=1,ph(e,t,r,n)}finally{He.transition=a,W=n}return null}function ph(e,t,r,n){do Rr();while($t!==null);if(O&6)throw Error(_(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(Hp(e,o),e===me&&(ce=me=null,xe=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||aa||(aa=!0,Nd(Sa,function(){return Rr(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=He.transition,He.transition=null;var i=W;W=1;var l=O;O|=4,_i.current=null,sh(e,r),yd(r,e),Df(ds),Ea=!!cs,ds=cs=null,e.current=r,ih(r),Ip(),O=l,W=i,He.transition=o}else e.current=r;if(aa&&(aa=!1,$t=e,Ba=a),o=e.pendingLanes,o===0&&(Ot=null),Op(r.stateNode),$e(e,ie()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],n(a.value,{componentStack:a.stack,digest:a.digest});if(Ua)throw Ua=!1,e=Ts,Ts=null,e;return Ba&1&&e.tag!==0&&Rr(),o=e.pendingLanes,o&1?e===Ds?xn++:(xn=0,Ds=e):xn=0,Qt(),null}function Rr(){if($t!==null){var e=oc(Ba),t=He.transition,r=W;try{if(He.transition=null,W=16>e?16:e,$t===null)var n=!1;else{if(e=$t,$t=null,Ba=0,O&6)throw Error(_(331));var a=O;for(O|=4,P=e.current;P!==null;){var o=P,i=o.child;if(P.flags&16){var l=o.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(P=c;P!==null;){var h=P;switch(h.tag){case 0:case 11:case 15:mn(8,h,o)}var f=h.child;if(f!==null)f.return=h,P=f;else for(;P!==null;){h=P;var g=h.sibling,y=h.return;if(gd(h),h===c){P=null;break}if(g!==null){g.return=y,P=g;break}P=y}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var k=x.sibling;x.sibling=null,x=k}while(x!==null)}}P=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,P=i;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:mn(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,P=p;break e}P=o.return}}var d=e.current;for(P=d;P!==null;){i=P;var m=i.child;if(i.subtreeFlags&2064&&m!==null)m.return=i,P=m;else e:for(i=d;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ro(9,l)}}catch(j){oe(l,l.return,j)}if(l===i){P=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,P=b;break e}P=l.return}}if(O=a,Qt(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Ka,e)}catch{}n=!0}return n}finally{W=r,He.transition=t}}return!1}function Gl(e,t,r){t=Wr(r,t),t=od(e,t,1),e=Mt(e,t,1),t=Ee(),e!==null&&(Mn(e,1,t),$e(e,t))}function oe(e,t,r){if(e.tag===3)Gl(e,e,r);else for(;t!==null;){if(t.tag===3){Gl(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ot===null||!Ot.has(n))){e=Wr(r,e),e=sd(t,e,1),t=Mt(t,e,1),e=Ee(),t!==null&&(Mn(t,1,e),$e(t,e));break}}t=t.return}}function fh(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Ee(),e.pingedLanes|=e.suspendedLanes&r,me===e&&(xe&r)===r&&(fe===4||fe===3&&(xe&130023424)===xe&&500>ie()-Ci?er(e,0):Ei|=r),$e(e,t)}function Ed(e,t){t===0&&(e.mode&1?(t=Kn,Kn<<=1,!(Kn&130023424)&&(Kn=4194304)):t=1);var r=Ee();e=jt(e,t),e!==null&&(Mn(e,t,r),$e(e,r))}function hh(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Ed(e,r)}function mh(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(_(314))}n!==null&&n.delete(t),Ed(e,r)}var Cd;Cd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)ze=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return ze=!1,rh(e,t,r);ze=!!(e.flags&131072)}else ze=!1,X&&t.flags&1048576&&Tc(t,$a,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;ga(e,t),e=t.pendingProps;var a=Or(t,Se.current);Lr(t,r),a=wi(null,t,n,e,a,r);var o=bi();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,De(n)?(o=!0,Ta(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,mi(t),a.updater=to,t.stateNode=a,a._reactInternals=t,ws(t,n,e,r),t=js(null,t,n,!0,o,r)):(t.tag=0,X&&o&&li(t),_e(null,t,a,r),t=t.child),t;case 16:n=t.elementType;e:{switch(ga(e,t),e=t.pendingProps,a=n._init,n=a(n._payload),t.type=n,a=t.tag=xh(n),e=Ye(n,e),a){case 0:t=ks(null,t,n,e,r);break e;case 1:t=Ol(null,t,n,e,r);break e;case 11:t=Al(null,t,n,e,r);break e;case 14:t=Ml(null,t,n,Ye(n.type,e),r);break e}throw Error(_(306,n,""))}return t;case 0:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Ye(n,a),ks(e,t,n,a,r);case 1:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Ye(n,a),Ol(e,t,n,a,r);case 3:e:{if(cd(t),e===null)throw Error(_(387));n=t.pendingProps,o=t.memoizedState,a=o.element,Ac(e,t),Ia(t,n,null,r);var i=t.memoizedState;if(n=i.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Wr(Error(_(423)),t),t=Fl(e,t,n,r,a);break e}else if(n!==a){a=Wr(Error(_(424)),t),t=Fl(e,t,n,r,a);break e}else for(Re=At(t.stateNode.containerInfo.firstChild),Ie=t,X=!0,Ze=null,r=Rc(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Fr(),n===a){t=St(e,t,r);break e}_e(e,t,n,r)}t=t.child}return t;case 5:return Mc(t),e===null&&xs(t),n=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,i=a.children,ps(n,a)?i=null:o!==null&&ps(n,o)&&(t.flags|=32),ud(e,t),_e(e,t,i,r),t.child;case 6:return e===null&&xs(t),null;case 13:return dd(e,t,r);case 4:return gi(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Ur(t,null,n,r):_e(e,t,n,r),t.child;case 11:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Ye(n,a),Al(e,t,n,a,r);case 7:return _e(e,t,t.pendingProps,r),t.child;case 8:return _e(e,t,t.pendingProps.children,r),t.child;case 12:return _e(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,a=t.pendingProps,o=t.memoizedProps,i=a.value,q(La,n._currentValue),n._currentValue=i,o!==null)if(nt(o.value,i)){if(o.children===a.children&&!Te.current){t=St(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){i=o.child;for(var u=l.firstContext;u!==null;){if(u.context===n){if(o.tag===1){u=wt(-1,r&-r),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}o.lanes|=r,u=o.alternate,u!==null&&(u.lanes|=r),vs(o.return,r,t),l.lanes|=r;break}u=u.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(_(341));i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),vs(i,r,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}_e(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,n=t.pendingProps.children,Lr(t,r),a=qe(a),n=n(a),t.flags|=1,_e(e,t,n,r),t.child;case 14:return n=t.type,a=Ye(n,t.pendingProps),a=Ye(n.type,a),Ml(e,t,n,a,r);case 15:return id(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Ye(n,a),ga(e,t),t.tag=1,De(n)?(e=!0,Ta(t)):e=!1,Lr(t,r),ad(t,n,a),ws(t,n,a,r),js(null,t,n,!0,e,r);case 19:return pd(e,t,r);case 22:return ld(e,t,r)}throw Error(_(156,t.tag))};function Nd(e,t){return tc(e,t)}function gh(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,t,r,n){return new gh(e,t,r,n)}function Ti(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xh(e){if(typeof e=="function")return Ti(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Js)return 11;if(e===Ys)return 14}return 2}function Ut(e,t){var r=e.alternate;return r===null?(r=We(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ya(e,t,r,n,a,o){var i=2;if(n=e,typeof e=="function")Ti(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case vr:return tr(r.children,a,o,t);case Gs:i=8,a|=8;break;case Vo:return e=We(12,r,t,a|2),e.elementType=Vo,e.lanes=o,e;case Ho:return e=We(13,r,t,a),e.elementType=Ho,e.lanes=o,e;case qo:return e=We(19,r,t,a),e.elementType=qo,e.lanes=o,e;case Mu:return ao(r,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Iu:i=10;break e;case Au:i=9;break e;case Js:i=11;break e;case Ys:i=14;break e;case Nt:i=16,n=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=We(i,r,t,a),t.elementType=e,t.type=n,t.lanes=o,t}function tr(e,t,r,n){return e=We(7,e,n,t),e.lanes=r,e}function ao(e,t,r,n){return e=We(22,e,n,t),e.elementType=Mu,e.lanes=r,e.stateNode={isHidden:!1},e}function Ao(e,t,r){return e=We(6,e,null,t),e.lanes=r,e}function Mo(e,t,r){return t=We(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function vh(e,t,r,n,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vo(0),this.expirationTimes=vo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vo(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Di(e,t,r,n,a,o,i,l,u){return e=new vh(e,t,r,l,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=We(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},mi(o),e}function yh(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Pd(e){if(!e)return Wt;e=e._reactInternals;e:{if(dr(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(De(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var r=e.type;if(De(r))return Pc(e,r,t)}return t}function zd(e,t,r,n,a,o,i,l,u){return e=Di(r,n,!0,e,a,o,i,l,u),e.context=Pd(null),r=e.current,n=Ee(),a=Ft(r),o=wt(n,a),o.callback=t??null,Mt(r,o,a),e.current.lanes=a,Mn(e,a,n),$e(e,n),e}function oo(e,t,r,n){var a=t.current,o=Ee(),i=Ft(a);return r=Pd(r),t.context===null?t.context=r:t.pendingContext=r,t=wt(o,i),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Mt(a,t,i),e!==null&&(rt(e,a,i,o),fa(e,a,i)),i}function Va(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function $i(e,t){Jl(e,t),(e=e.alternate)&&Jl(e,t)}function wh(){return null}var Td=typeof reportError=="function"?reportError:function(e){console.error(e)};function Li(e){this._internalRoot=e}so.prototype.render=Li.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));oo(e,t,null,null)};so.prototype.unmount=Li.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lr(function(){oo(null,e,null,null)}),t[kt]=null}};function so(e){this._internalRoot=e}so.prototype.unstable_scheduleHydration=function(e){if(e){var t=lc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<zt.length&&t!==0&&t<zt[r].priority;r++);zt.splice(r,0,e),r===0&&cc(e)}};function Ri(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function io(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yl(){}function bh(e,t,r,n,a){if(a){if(typeof n=="function"){var o=n;n=function(){var c=Va(i);o.call(c)}}var i=zd(t,n,e,0,null,!1,!1,"",Yl);return e._reactRootContainer=i,e[kt]=i.current,En(e.nodeType===8?e.parentNode:e),lr(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var l=n;n=function(){var c=Va(u);l.call(c)}}var u=Di(e,0,!1,null,null,!1,!1,"",Yl);return e._reactRootContainer=u,e[kt]=u.current,En(e.nodeType===8?e.parentNode:e),lr(function(){oo(t,u,r,n)}),u}function lo(e,t,r,n,a){var o=r._reactRootContainer;if(o){var i=o;if(typeof a=="function"){var l=a;a=function(){var u=Va(i);l.call(u)}}oo(t,i,e,a)}else i=bh(r,t,e,a,n);return Va(i)}sc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=sn(t.pendingLanes);r!==0&&(ei(t,r|1),$e(t,ie()),!(O&6)&&(Vr=ie()+500,Qt()))}break;case 13:lr(function(){var n=jt(e,1);if(n!==null){var a=Ee();rt(n,e,1,a)}}),$i(e,1)}};ti=function(e){if(e.tag===13){var t=jt(e,134217728);if(t!==null){var r=Ee();rt(t,e,134217728,r)}$i(e,134217728)}};ic=function(e){if(e.tag===13){var t=Ft(e),r=jt(e,t);if(r!==null){var n=Ee();rt(r,e,t,n)}$i(e,t)}};lc=function(){return W};uc=function(e,t){var r=W;try{return W=e,t()}finally{W=r}};rs=function(e,t,r){switch(t){case"input":if(Go(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var a=Xa(n);if(!a)throw Error(_(90));Fu(n),Go(n,a)}}}break;case"textarea":Bu(e,r);break;case"select":t=r.value,t!=null&&zr(e,!!r.multiple,t,!1)}};Gu=Ni;Ju=lr;var kh={usingClientEntryPoint:!1,Events:[Fn,kr,Xa,Qu,Ku,Ni]},rn={findFiberByHostInstance:Jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jh={bundleType:rn.bundleType,version:rn.version,rendererPackageName:rn.rendererPackageName,rendererConfig:rn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_t.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zu(e),e===null?null:e.stateNode},findFiberByHostInstance:rn.findFiberByHostInstance||wh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oa.isDisabled&&oa.supportsFiber)try{Ka=oa.inject(jh),dt=oa}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kh;Me.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ri(t))throw Error(_(200));return yh(e,t,null,r)};Me.createRoot=function(e,t){if(!Ri(e))throw Error(_(299));var r=!1,n="",a=Td;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Di(e,1,!1,null,null,r,!1,n,a),e[kt]=t.current,En(e.nodeType===8?e.parentNode:e),new Li(t)};Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Zu(t),e=e===null?null:e.stateNode,e};Me.flushSync=function(e){return lr(e)};Me.hydrate=function(e,t,r){if(!io(t))throw Error(_(200));return lo(null,e,t,!0,r)};Me.hydrateRoot=function(e,t,r){if(!Ri(e))throw Error(_(405));var n=r!=null&&r.hydratedSources||null,a=!1,o="",i=Td;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),t=zd(t,null,e,1,r??null,a,!1,o,i),e[kt]=t.current,En(e),n)for(e=0;e<n.length;e++)r=n[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new so(t)};Me.render=function(e,t,r){if(!io(t))throw Error(_(200));return lo(null,e,t,!1,r)};Me.unmountComponentAtNode=function(e){if(!io(e))throw Error(_(40));return e._reactRootContainer?(lr(function(){lo(null,null,e,!1,function(){e._reactRootContainer=null,e[kt]=null})}),!0):!1};Me.unstable_batchedUpdates=Ni;Me.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!io(r))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return lo(e,t,r,!1,n)};Me.version="18.3.1-next-f1338f8080-20240426";function Dd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dd)}catch(e){console.error(e)}}Dd(),Du.exports=Me;var Sh=Du.exports,Xl=Sh;Bo.createRoot=Xl.createRoot,Bo.hydrateRoot=Xl.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rn(){return Rn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Rn.apply(null,arguments)}var Zt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Zt||(Zt={}));const Zl="popstate";function _h(e){e===void 0&&(e={});function t(n,a){let{pathname:o,search:i,hash:l}=n.location;return Rs("",{pathname:o,search:i,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:$d(a)}return Nh(t,r,null,e)}function ft(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Eh(e,t){{typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ch(){return Math.random().toString(36).substr(2,8)}function eu(e,t){return{usr:e.state,key:e.key,idx:t}}function Rs(e,t,r,n){return r===void 0&&(r=null),Rn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?uo(t):t,{state:r,key:t&&t.key||n||Ch()})}function $d(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function uo(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Nh(e,t,r,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:o=!1}=n,i=a.history,l=Zt.Pop,u=null,c=h();c==null&&(c=0,i.replaceState(Rn({},i.state,{idx:c}),""));function h(){return(i.state||{idx:null}).idx}function f(){l=Zt.Pop;let k=h(),p=k==null?null:k-c;c=k,u&&u({action:l,location:x.location,delta:p})}function g(k,p){l=Zt.Push;let d=Rs(x.location,k,p);c=h()+1;let m=eu(d,c),b=x.createHref(d);try{i.pushState(m,"",b)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;a.location.assign(b)}o&&u&&u({action:l,location:x.location,delta:1})}function y(k,p){l=Zt.Replace;let d=Rs(x.location,k,p);c=h();let m=eu(d,c),b=x.createHref(d);i.replaceState(m,"",b),o&&u&&u({action:l,location:x.location,delta:0})}function v(k){let p=a.location.origin!=="null"?a.location.origin:a.location.href,d=typeof k=="string"?k:$d(k);return d=d.replace(/ $/,"%20"),ft(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let x={get action(){return l},get location(){return e(a,i)},listen(k){if(u)throw new Error("A history only accepts one active listener");return a.addEventListener(Zl,f),u=k,()=>{a.removeEventListener(Zl,f),u=null}},createHref(k){return t(a,k)},createURL:v,encodeLocation(k){let p=v(k);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:y,go(k){return i.go(k)}};return x}var tu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(tu||(tu={}));function Ph(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const zh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Th=e=>zh.test(e);function Dh(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?uo(e):e,o;if(r)if(Th(r))o=r;else{if(r.includes("//")){let i=r;r=Ld(r),Eh(!1,"Pathnames cannot have embedded double slashes - normalizing "+(i+" -> "+r))}r.startsWith("/")?o=ru(r.substring(1),"/"):o=ru(r,t)}else o=t;return{pathname:o,search:Ah(n),hash:Mh(a)}}function ru(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function Oo(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $h(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Lh(e,t){let r=$h(e);return t?r.map((n,a)=>a===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function Rh(e,t,r,n){n===void 0&&(n=!1);let a;typeof e=="string"?a=uo(e):(a=Rn({},e),ft(!a.pathname||!a.pathname.includes("?"),Oo("?","pathname","search",a)),ft(!a.pathname||!a.pathname.includes("#"),Oo("#","pathname","hash",a)),ft(!a.search||!a.search.includes("#"),Oo("#","search","hash",a)));let o=e===""||a.pathname==="",i=o?"/":a.pathname,l;if(i==null)l=r;else{let f=t.length-1;if(!n&&i.startsWith("..")){let g=i.split("/");for(;g[0]==="..";)g.shift(),f-=1;a.pathname=g.join("/")}l=f>=0?t[f]:"/"}let u=Dh(a,l),c=i&&i!=="/"&&i.endsWith("/"),h=(o||i===".")&&r.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const Ld=e=>e.replace(/\/\/+/g,"/"),Ih=e=>Ld(e.join("/")),Ah=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Mh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Rd=["post","put","patch","delete"];new Set(Rd);const Oh=["get",...Rd];new Set(Oh);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ha(){return Ha=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ha.apply(null,arguments)}const Id=w.createContext(null),Ii=w.createContext(null),Ai=w.createContext(null),Mi=w.createContext({outlet:null,matches:[],isDataRoute:!1});function Oi(){return w.useContext(Ai)!=null}function Ad(){return Oi()||ft(!1),w.useContext(Ai).location}function Md(e){w.useContext(Ii).static||w.useLayoutEffect(e)}function Fh(){let{isDataRoute:e}=w.useContext(Mi);return e?Hh():Uh()}function Uh(){Oi()||ft(!1);let e=w.useContext(Id),{basename:t,future:r,navigator:n}=w.useContext(Ii),{matches:a}=w.useContext(Mi),{pathname:o}=Ad(),i=JSON.stringify(Lh(a,r.v7_relativeSplatPath)),l=w.useRef(!1);return Md(()=>{l.current=!0}),w.useCallback(function(c,h){if(h===void 0&&(h={}),!l.current)return;if(typeof c=="number"){n.go(c);return}let f=Rh(c,JSON.parse(i),o,h.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Ih([t,f.pathname])),(h.replace?n.replace:n.push)(f,h.state,h)},[t,n,i,o,e])}var Od=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Od||{}),Fd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Fd||{});function Bh(e){let t=w.useContext(Id);return t||ft(!1),t}function Wh(e){let t=w.useContext(Mi);return t||ft(!1),t}function Vh(e){let t=Wh(),r=t.matches[t.matches.length-1];return r.route.id||ft(!1),r.route.id}function Hh(){let{router:e}=Bh(Od.UseNavigateStable),t=Vh(Fd.UseNavigateStable),r=w.useRef(!1);return Md(()=>{r.current=!0}),w.useCallback(function(a,o){o===void 0&&(o={}),r.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Ha({fromRouteId:t},o)))},[e,t])}function qh(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Qh(e){let{basename:t="/",children:r=null,location:n,navigationType:a=Zt.Pop,navigator:o,static:i=!1,future:l}=e;Oi()&&ft(!1);let u=t.replace(/^\/*/,"/"),c=w.useMemo(()=>({basename:u,navigator:o,static:i,future:Ha({v7_relativeSplatPath:!1},l)}),[u,l,o,i]);typeof n=="string"&&(n=uo(n));let{pathname:h="/",search:f="",hash:g="",state:y=null,key:v="default"}=n,x=w.useMemo(()=>{let k=Ph(h,u);return k==null?null:{location:{pathname:k,search:f,hash:g,state:y,key:v},navigationType:a}},[u,h,f,g,y,v,a]);return x==null?null:w.createElement(Ii.Provider,{value:c},w.createElement(Ai.Provider,{children:r,value:x}))}new Promise(()=>{});/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Kh="6";try{window.__reactRouterVersion=Kh}catch{}const Gh="startTransition",nu=pp[Gh];function Jh(e){let{basename:t,children:r,future:n,window:a}=e,o=w.useRef();o.current==null&&(o.current=_h({window:a,v5Compat:!0}));let i=o.current,[l,u]=w.useState({action:i.action,location:i.location}),{v7_startTransition:c}=n||{},h=w.useCallback(f=>{c&&nu?nu(()=>u(f)):u(f)},[u,c]);return w.useLayoutEffect(()=>i.listen(h),[i,h]),w.useEffect(()=>qh(n),[n]),w.createElement(Qh,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:i,future:n})}var au;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(au||(au={}));var ou;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ou||(ou={}));const B="/api",Yh=".pdf,.png,.jpg,.jpeg,.tif,.tiff,.bmp,.webp,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv",H={ADDED:{bg:"var(--diff-added-bg)",border:"var(--diff-added-border)",text:"var(--diff-added-text)",chip:"var(--diff-added-chip)"},DELETED:{bg:"var(--diff-deleted-bg)",border:"var(--diff-deleted-border)",text:"var(--diff-deleted-text)",chip:"var(--diff-deleted-chip)"},MODIFIED:{bg:"var(--diff-modified-bg)",border:"var(--diff-modified-border)",text:"var(--diff-modified-text)",chip:"var(--diff-modified-chip)"},UNCHANGED:{bg:"var(--diff-unchanged-bg)",border:"var(--diff-unchanged-border)",text:"var(--diff-unchanged-text)",chip:"var(--diff-unchanged-chip)"},MATCH:{bg:"var(--diff-match-bg)",border:"var(--diff-match-border)",text:"var(--diff-match-text)",chip:"var(--diff-match-chip)"}},Xh=`
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
  .sample-actions {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
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
`,ct={background:"#fffdf8",border:"1px solid #ded6c8",borderRadius:8,boxShadow:"0 1px 3px rgba(31,41,55,.08)"},rr={textAlign:"start",padding:"8px 9px",borderBottom:"1px solid #ded6c8",fontWeight:650,verticalAlign:"top",whiteSpace:"normal",overflowWrap:"anywhere"},Ir={padding:"8px 9px",borderBottom:"1px solid #eee7dc",verticalAlign:"top",whiteSpace:"normal",overflowWrap:"anywhere",lineHeight:1.35},mr={border:"1px solid #ded6c8",background:"#fbfaf6",color:"#344054",borderRadius:999,padding:"4px 8px",fontSize:12,fontWeight:600};function Zh(e=!1,t={}){return{border:"none",borderRadius:6,background:e?"#98a2b3":"#1f2937",color:"white",padding:"9px 14px",fontWeight:550,cursor:e?"default":"pointer",...t}}function em(e={}){return{border:"1px solid #c9c0b0",borderRadius:6,background:"#fffdf8",color:"#344054",padding:"9px 13px",fontWeight:550,cursor:"pointer",...e}}function Pr(e){if(!e)return"";const t=String(e);return t.includes("Traceback (most recent call last)")||t.includes("Internal Server Error")||t.includes("psycopg")||t.includes("OperationalError")||t.includes('File "')||t.length>500?"An unexpected internal server error occurred. Please try again or check server logs.":t.replace(/\/Users\/[a-zA-Z0-9_-]+\//g,".../")}async function pe(e){try{const t=await e.text();if(!t)return`Request failed with status ${e.status}`;try{const r=JSON.parse(t);return Pr(et(r.detail||r.error||r.message||r))}catch{return t.trim().startsWith("<!DOCTYPE html>")||t.includes("<html")||t.length>200?`Server error (${e.status}). Please check backend logs.`:Pr(t)}}catch{return`Request failed with status ${e.status}`}}function ue(e){const t=et(e);return t.toLowerCase().includes("failed to fetch")?"The app could not reach the comparison service. Please confirm the backend is running and the API URL is correct.":t||"Something went wrong while processing the documents."}async function tm(e){const t=await fetch(`${B}/extract-runs/${e}/structured-json`);if(t.ok){const o=Is(await t.json());if(wa(o))return o;const i=await su(e,o);return wa(i)?i:o}const r=await fetch(`${B}/extract-runs/${e}/json`);if(!r.ok)throw new Error(await pe(t));const n=await r.json(),a=Is(n);return wa(a)?a:su(e,a)}function wa(e){return!!(e&&((e.content||[]).length>0||(e.tables||[]).length>0||(e.pages||[]).some(t=>(t.content||[]).length>0||(t.tables||[]).length>0)))}async function su(e,t={}){const[r,n]=await Promise.allSettled([fetch(`${B}/extract-runs/${e}/blocks?limit=2000`).then(async i=>{if(!i.ok)throw new Error(await pe(i));return i.json()}),fetch(`${B}/extract-runs/${e}/tables?include_rows=true`).then(async i=>{if(!i.ok)throw new Error(await pe(i));return i.json()})]),a=r.status==="fulfilled"?r.value.blocks||[]:[],o=n.status==="fulfilled"?n.value.tables||[]:[];return Is({...t,blocks:a,tables:o.length?o:t.tables||[]})}function Is(e){var l,u,c;if(e!=null&&e.structured_json)return e.structured_json;if((e!=null&&e.document_summary||e!=null&&e.content||e!=null&&e.pages)&&wa(e))return e;const t=(e==null?void 0:e.blocks)||[],r=(e==null?void 0:e.tables)||[],n=[];t.forEach(h=>{var y;const f=h.text||((y=h.payload)==null?void 0:y.text)||"",g=String(f).match(/^\s*([^:：]{2,80})\s*[:：]\s*(.{1,300})$/);g&&n.push({field:g[1].trim(),value:g[2].trim(),page:h.page_number,source:h.type,citation:`p.${h.page_number||"-"} - ${h.path||"document"}`}),am(f).forEach(v=>{n.push({...v,page:h.page_number,source:h.type,citation:`p.${h.page_number||"-"} - ${h.path||"document"}`})})}),r.slice(0,40).forEach(h=>{(h.rows||[]).slice(0,50).forEach(f=>{Object.entries(f||{}).forEach(([g,y])=>{!y||String(g).startsWith("__")||n.push({field:g,value:y,page:h.page_first||h.page_number,source:"table",table:h.display_name||h.title,citation:`${h.page_label||"page"} - ${h.title||"table"}`})})})});const a=t.filter(h=>["paragraph","list_item","kv_pair","figure","section","heading"].includes(h.type)).map(h=>{var x;const f=h.text||((x=h.payload)==null?void 0:x.text)||"",g={page:h.page_number,order:h.sequence||0,type:h.type,path:h.path,text:f,citation:`p.${h.page_number||"-"} - ${h.path||"document"}`},y=[],v=String(f).match(/^\s*([^:：]{2,80})\s*[:：]\s*(.{1,300})$/);return v&&y.push({name:v[1].trim(),value:v[2].trim()}),y.length&&(g.key_values=y),g}).filter(h=>String(h.text||"").trim()),o=[],i=new Map;return a.forEach(h=>{const f=h.page||1;i.has(f)||i.set(f,{page:f,citation:`p.${f}`,content:[],tables:[]}),i.get(f).content.push(h)}),r.forEach(h=>{const f=h.page_first||h.page_number||1;i.has(f)||i.set(f,{page:f,citation:`p.${f}`,content:[],tables:[]}),i.get(f).tables.push(h)}),Array.from(i.keys()).sort((h,f)=>h-f).forEach(h=>o.push(i.get(h))),{document_summary:(e==null?void 0:e.document_summary)||{label:((l=e==null?void 0:e.summary)==null?void 0:l.label)||(e==null?void 0:e.label)||"Extracted document",source_type:((u=e==null?void 0:e.summary)==null?void 0:u.source_format)||(e==null?void 0:e.source_format)||"document",extraction_quality:{grade:((c=e==null?void 0:e.summary)==null?void 0:c.quality)||"not rated",coverage:e==null?void 0:e.coverage},counts:{text_blocks:a.length,tables:r.length,pages:o.length}},semantic_fields:n.slice(0,220),business_structure:rm(t,r,n),sections:t.filter(h=>["section","heading"].includes(h.type)).slice(0,200),tables:r,pages:o,content:a}}function rm(e,t,r){const n=[{document_index:1,label:"Extracted document",sections:[]}];let a=null;return e.slice().sort((o,i)=>(o.page_number||1)-(i.page_number||1)||(o.sequence||0)-(i.sequence||0)).forEach(o=>{var i;if(["section","heading"].includes(o.type)){a={title:o.text||o.path||`Page ${o.page_number||1}`,page:o.page_number||1,path:o.path,content:[],fields:[],inline_records:[],tables:[]},n[0].sections.push(a);return}if((!a||a.page!==(o.page_number||1))&&(a={title:`Page ${o.page_number||1}`,page:o.page_number||1,path:`/page_${o.page_number||1}`,content:[],fields:[],inline_records:[],tables:[]},n[0].sections.push(a)),["paragraph","list_item","kv_pair","figure"].includes(o.type)){const l=o.text||((i=o.payload)==null?void 0:i.text)||"",u=r.filter(h=>{var f;return h.page===o.page_number&&((f=h.citation)==null?void 0:f.includes(o.path||"__no_path__"))}),c=nm(l);a.content.push({type:o.type,page:o.page_number,path:o.path,text:l,fields:u}),a.fields.push(...u),c&&a.inline_records.push({...c,page:o.page_number,citation:`p.${o.page_number||"-"} - ${o.path||"document"}`})}}),t.forEach(o=>{const i=o.page_first||o.page_number||1;let l=n[0].sections.find(u=>u.page===i);l||(l={title:`Page ${i}`,page:i,path:`/page_${i}`,content:[],fields:[],inline_records:[],tables:[]},n[0].sections.push(l)),l.tables.push({title:o.display_name||o.title||"Detected table",page_label:o.page_label,columns:o.columns||[],row_count:o.n_rows||0,sample_rows:(o.rows||o.row_preview||[]).slice(0,8)})}),{documents:n,section_count:n[0].sections.length}}function nm(e){const t=String(e||"").trim();if(!t)return null;const r=t.includes("|")?t.split("|").map(n=>n.trim()).filter(Boolean):t.split(/\s{3,}/).map(n=>n.trim()).filter(Boolean);return r.length<2?null:{record_type:"inline_row",columns:r.map((n,a)=>`Column ${a+1}`),values:Object.fromEntries(r.map((n,a)=>[`Column ${a+1}`,n])),text:t}}function am(e){const t=String(e||""),r=[["color",/\b(?:colou?r|shade)\s*(?:is|=|:)?\s*([A-Za-z][A-Za-z\s/-]{2,40})/gi],["size",/\b(?:size|dimension)\s*(?:is|=|:)?\s*([A-Z0-9][A-Z0-9\s./x-]{0,40})/gi],["quantity",/\b(?:qty|quantity|count|units?)\s*(?:is|=|:)?\s*(\d[\d,]*(?:\.\d+)?)/gi],["price",/([$€£]\s?\d[\d,]*(?:\.\d+)?)/g],["percentage",/\b(\d+(?:\.\d+)?%)\b/g],["date",/\b(\d{1,2}[/-]\d{1,2}[/-]\d{2,4}|\d{4}-\d{1,2}-\d{1,2})\b/g],["code",/\b([A-Z]{1,8}[- ]?\d{2,12}[A-Z]?)\b/gi]],n=[],a=new Set;return r.forEach(([o,i])=>{for(const l of t.matchAll(i)){const u=String(l[1]||"").replace(/\s+/g," ").trim(),c=`${o}:${u.toLowerCase()}`;!u||a.has(c)||(a.add(c),n.push({field:o,value:u}))}}),n}function et(e){if(!e)return"";if(typeof e=="string")return Pr(e);if(e instanceof Error)return et(e.message);if(Array.isArray(e))return e.map(et).filter(Boolean).join(`
`);if(typeof e=="object"){if(e.detail)return et(e.detail);if(e.error)return et(e.error);if(e.message)return et(e.message);try{return Pr(JSON.stringify(e,null,2))}catch{return Pr(String(e))}}return Pr(String(e))}function om(e){if(!(e!=null&&e.length))return[];const t=new Set;return e.slice(0,20).forEach(r=>{r&&typeof r=="object"&&!Array.isArray(r)&&Object.keys(r).forEach(n=>{pr(n)||t.add(n)})}),Array.from(t).slice(0,12)}function pr(e){const t=String(e||"");return!t||t.startsWith("__")?!0:["payload","raw","field_profiles","column_profiles","extraction_intelligence","source_tables","table_fingerprint","bbox_by_page","quality_warnings"].includes(t)}function ur(e){if(e==null||e==="")return"-";if(Array.isArray(e))return e.map(ur).join(", ");if(typeof e=="object"){const t=Object.fromEntries(Object.entries(e).filter(([r])=>!pr(r)));return Object.keys(t).length?JSON.stringify(t):"-"}return String(e)}function iu(e){return!e||typeof e!="object"?"":Object.entries(e).filter(([,t])=>t!=null&&String(t).trim()!=="").map(([t,r])=>`${t}: ${r}`).join(" | ")}function sm(e,t=560,r=1280){const n=Math.max(1,Number(e)||1);return Math.min(r,Math.max(t,180+n*180))}function Ve(e,t){if(!e)return"";const r=String(e).replace(/\s+/g," ").trim();return r.length<=t?r:`${r.slice(0,t-1)}...`}function xt(e){const t=Number(e||0);return Number.isFinite(t)?Math.round(t).toLocaleString():"0"}function im(e){if(!e)return"-";const t=new Date(e);return Number.isNaN(t.getTime())?"-":t.toLocaleString(void 0,{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function lm(e,t){const r=Number(e||0);if(!Number.isFinite(r)||r<=0)return t==="complete"||t==="failed"?"-":"Running";const n=Math.max(1,Math.round(r/1e3));if(n<60)return`${n}s`;const a=Math.floor(n/60),o=n%60;if(a<60)return o?`${a}m ${o}s`:`${a}m`;const i=Math.floor(a/60),l=a%60;return l?`${i}h ${l}m`:`${i}h`}function um(e){return String(e||"-").replace(/\bbase\s*p\.?\s*(\d+)/gi,"Baseline page $1").replace(/\btarget\s*p\.?\s*(\d+)/gi,"Revised page $1").replace(/\bbaseline\s*p\.?\s*(\d+)/gi,"Baseline page $1").replace(/\brevised\s*p\.?\s*(\d+)/gi,"Revised page $1").replace(/\s*->\s*/g," → ")}function lu(e){const t=String(e||"").toLowerCase();return t.includes("high")?3:t.includes("medium")?2:t.includes("low")?1:0}function Ar(e){const t=String((e==null?void 0:e.change_type)||(e==null?void 0:e.changeType)||(e==null?void 0:e.status)||"").toUpperCase();if(["ADDED","DELETED","MODIFIED","UNCHANGED","MATCH"].includes(t))return t;if((e!=null&&e.after||e!=null&&e.target_text)&&!(e!=null&&e.before||e!=null&&e.base_text))return"ADDED";if((e!=null&&e.before||e!=null&&e.base_text)&&!(e!=null&&e.after||e!=null&&e.target_text))return"DELETED";const r=`${(e==null?void 0:e.type)||""} ${(e==null?void 0:e.change)||""} ${(e==null?void 0:e.description)||""} ${(e==null?void 0:e.review)||""}`.toUpperCase();return r.includes("ADDED")||r.includes("NEW CONTENT")||r.includes("INTRODUCED")?"ADDED":r.includes("DELETED")||r.includes("REMOVED")||r.includes("DROPPED")?"DELETED":r.includes("MODIFIED")||r.includes("CHANGED")||r.includes("UPDATED")||r.includes("REVISED")?"MODIFIED":t||"MODIFIED"}function cm(e){const t=Ar(e),r=(e==null?void 0:e.before)||"",n=(e==null?void 0:e.after)||"",a=(e==null?void 0:e.stable_key)||uu(e==null?void 0:e.path)||"Document change",o=[e!=null&&e.page_base?`Baseline page ${e.page_base}`:"",e!=null&&e.page_target?`Revised page ${e.page_target}`:""].filter(Boolean).join(" -> "),i=t==="ADDED"?`Added: ${Ve(n,260)}`:t==="DELETED"?`Deleted: ${Ve(r,260)}`:`Changed from "${Ve(r,120)}" to "${Ve(n,120)}"`;return{feature:a,item:a,area:uu(e==null?void 0:e.path)||"Document",change_type:t,change:i,before:r,after:n,citation:o,impact:e==null?void 0:e.impact,confidence:typeof(e==null?void 0:e.similarity)=="number"?Math.max(.55,Math.min(.98,1-Math.abs(1-e.similarity))):null,seek_clarification:t==="UNCHANGED"?"None":"Review recommended."}}function dm(e,t){const r=Array.isArray(e)?[...e]:[],n=Array.isArray(t)?t:[],a=new Set(r.map(Ar)),o=new Set(r.map(i=>`${Ar(i)}:${i.stable_key||i.item||i.feature||i.path||i.change}`));return["ADDED","DELETED"].forEach(i=>{if(a.has(i))return;let l=0;n.forEach(u=>{if(l>=12||Ar(u)!==i)return;const c=`${i}:${u.stable_key||u.path||u.before||u.after}`;o.has(c)||(r.push(cm(u)),o.add(c),l+=1)})}),r}function uu(e){const t=String(e||"").split("/").map(r=>r.trim()).filter(Boolean);return t[t.length-1]||""}function cu(e){const t=`${e.seek_clarification||""} ${e.review||""} ${e.recommendation||""}`.toLowerCase(),r=As(e.confidence);return t.includes("review")||t.includes("clarif")||t.includes("confirm")||typeof r=="number"&&r<.8}function As(e){return typeof e!="number"?null:e>1?e/100:e}function du(e){return{border:"1px solid #c9c0b0",background:e?"#f1ece3":"#fffdf8",color:e?"#98a2b3":"#344054",borderRadius:7,padding:"7px 12px",cursor:e?"default":"pointer",fontWeight:600}}function pu(e){return{border:"1px solid #c9c0b0",background:e?"#f1ece3":"#fffdf8",color:e?"#98a2b3":"#344054",borderRadius:6,padding:"5px 8px",cursor:e?"default":"pointer",fontWeight:600,fontSize:12}}function Ms(e,t=!1){const r=String(e||"").toLowerCase();return r==="added"?{background:t?H.ADDED.bg:"rgba(31,160,70,.08)",border:t?void 0:`1px solid ${H.ADDED.border}`,borderInlineStart:`3px solid ${H.ADDED.border}`}:r==="deleted"?{background:t?H.DELETED.bg:"rgba(218,54,54,.08)",border:t?void 0:`1px solid ${H.DELETED.border}`,borderInlineStart:`3px solid ${H.DELETED.border}`}:r==="modified"?{background:t?"rgba(196,85,16,.10)":"rgba(196,85,16,.08)",border:t?void 0:`1px solid ${H.MODIFIED.border}`,borderInlineStart:`3px solid ${H.MODIFIED.border}`}:{background:t?"transparent":"#fffdf8",border:t?void 0:"1px solid transparent",borderInlineStart:"3px solid transparent"}}function pm({meta:e}){var r,n,a;const t=e.stats||{};return s.jsxs("section",{className:"stats-strip",children:[s.jsx(ke,{label:"Added",value:t.ADDED||0,tone:"added"}),s.jsx(ke,{label:"Deleted",value:t.DELETED||0,tone:"deleted"}),s.jsx(ke,{label:"Modified",value:t.MODIFIED||0,tone:"modified"}),s.jsx(ke,{label:"Unchanged",value:t.UNCHANGED||0}),s.jsx(ke,{label:"Coverage",value:`${fu((r=e.coverage)==null?void 0:r.base)} / ${fu((n=e.coverage)==null?void 0:n.target)}`}),s.jsx(ke,{label:"Pages",value:`${e.n_pages_base} / ${e.n_pages_target}`}),Number(((a=e.ai_usage)==null?void 0:a.total_tokens)||0)>0&&s.jsx(ke,{label:"AI tokens",value:`${xt(e.ai_usage.total_tokens)} (${xt(e.ai_usage.calls||0)} calls)`})]})}function fu(e){return typeof e=="number"?`${e.toFixed(1)}%`:"-"}function ke({label:e,value:t,tone:r}){return s.jsxs("span",{className:`stat-chip ${r||"neutral"}`,children:[s.jsx("span",{children:e}),s.jsx("strong",{children:t})]})}function fm({usage:e}){const t=Number((e==null?void 0:e.total_tokens)||0);if(!t)return null;const n=(Array.isArray(e==null?void 0:e.operations)?e.operations:[]).slice(-4);return s.jsxs("div",{style:{border:"1px solid #ded6c8",borderRadius:8,padding:10,marginBottom:12,background:"#fbfaf6",fontSize:12,color:"#475467"},children:[s.jsx("strong",{style:{color:"#344054"},children:"AI usage:"})," ",xt(t)," tokens · ",xt(e.calls||0)," call(s) · ",xt(e.prompt_tokens||0)," input / ",xt(e.completion_tokens||0)," output",n.length>0&&s.jsx("div",{style:{marginTop:6,display:"flex",flexWrap:"wrap",gap:6},children:n.map((a,o)=>s.jsxs("span",{style:{border:"1px solid #d8d0c3",borderRadius:999,padding:"3px 7px",background:"#fffdf8"},children:[a.operation||"AI call"," · ",xt(a.total_tokens||0)]},`${a.operation||"op"}-${o}`))})]})}function hu({progress:e,message:t,status:r}){const n=co(r),a=Math.max(0,Math.min(100,Number(e)||0)),o=n.isFailed?100:Math.max(7,n.isComplete?100:a);return s.jsxs("div",{className:"processing-state",children:[s.jsxs("div",{className:"processing-state-head",children:[s.jsx("span",{style:{fontWeight:600},children:t}),s.jsxs("span",{children:[a,"%"]})]}),s.jsx("div",{className:"progress-track",children:s.jsx("div",{className:`progress-fill ${n.className}`,style:{width:`${o}%`}})}),s.jsx("p",{children:"The job is still running. This view updates automatically as the backend reports progress."})]})}function In({message:e}){return s.jsx("div",{style:{marginTop:16,border:"1px solid #f0b4b4",background:"#fff5f5",color:"#9f1d1d",borderRadius:8,padding:13,fontSize:14,fontWeight:600,lineHeight:1.45,whiteSpace:"pre-wrap"},children:et(e)})}function Bn({label:e}){return s.jsx("div",{style:{padding:20,color:"#667085",fontWeight:600},children:e})}function Vt({label:e}){return s.jsx("div",{style:{padding:18,border:"1px dashed #c9c0b0",borderRadius:8,color:"#667085",background:"#fbfaf7",fontWeight:600},children:e})}function hm({status:e}){const t=co(e);return s.jsx("span",{style:{display:"inline-block",background:t.tone.chip,color:t.tone.text,border:`1px solid ${t.tone.border}`,padding:"2px 8px",borderRadius:999,fontWeight:650,fontSize:12},children:t.label})}function co(e){const t=String(e||"queued").toLowerCase(),r=t==="complete"||t==="completed",n=t==="failed"||t==="error",a=t==="running"||t==="processing"||t==="uploading";return{value:t,label:r?"complete":n?"failed":t,className:r?"complete":n?"failed":a?"running":"queued",tone:r?H.ADDED:n?H.DELETED:a?H.MODIFIED:H.UNCHANGED,isComplete:r,isFailed:n}}function mm({value:e,status:t}){const r=co(t),n=Math.max(0,Math.min(100,Number(e)||0)),a=r.isFailed||r.isComplete?100:n;return s.jsxs("div",{children:[s.jsx("div",{className:"progress-track",style:{height:6,minWidth:140},children:s.jsx("div",{className:`progress-fill ${r.className}`,style:{width:`${a}%`}})}),s.jsx("div",{style:{marginTop:5,color:"#667085",fontSize:12},children:r.isFailed?"failed":`${r.isComplete?100:n}%`})]})}function Ud({type:e}){const t=String(e||"MODIFIED").toUpperCase(),r=H[t]||H.MODIFIED;return s.jsx("span",{style:{display:"inline-block",background:r.chip,color:r.text,border:`1px solid ${r.border}`,padding:"2px 8px",borderRadius:999,fontWeight:650,fontSize:12},children:t})}function gm({onOpenJob:e,onAskJob:t,error:r,historyKind:n="all",onStartCompare:a,onStartExtract:o}){const[i,l]=w.useState({loading:!0,error:"",jobs:[]}),[u,c]=w.useState(""),h=async()=>{try{const p=await fetch(`${B}/jobs?limit=80`);if(!p.ok)throw new Error(await pe(p));const d=await p.json();l({loading:!1,error:"",jobs:d.jobs||[]})}catch(p){l({loading:!1,error:ue(p),jobs:[]})}};w.useEffect(()=>{let p=!1,d=null;const m=async()=>{p||(await h(),p||(d=setTimeout(m,2200)))};return m(),()=>{p=!0,d&&clearTimeout(d)}},[]);const f=async p=>{if(!(!(p!=null&&p.run_id)||u)){c(p.run_id);try{const d=await fetch(`${B}/jobs/${p.run_id}`,{method:"DELETE"});if(!d.ok)throw new Error(await pe(d));await h()}catch(d){l(m=>({...m,error:ue(d)}))}finally{c("")}}},g=(i.jobs||[]).filter(p=>n==="all"||p.kind===n),y=g.filter(p=>!["complete","failed","error"].includes(p.status)).length,v=g.filter(p=>p.status==="complete").length,x=n==="comparison"?"Comparison History":n==="extraction"?"Extraction History":"Work History",k=n==="comparison"?"No comparison runs are available yet.":n==="extraction"?"No extraction runs are available yet.":"No document work is available yet.";return s.jsxs("section",{className:"session-board",children:[s.jsxs("div",{className:"board-head",children:[s.jsx("div",{children:s.jsx("h2",{children:x})}),s.jsxs("div",{className:"board-actions",children:[s.jsx("button",{type:"button",onClick:a,className:"primary-action compact",children:"New compare"}),s.jsx("button",{type:"button",onClick:o,className:"ghost-action compact",children:"New extract"}),s.jsxs("span",{children:[y," running"]}),s.jsxs("span",{children:[v," complete"]}),s.jsx("button",{type:"button",onClick:h,className:"ghost-action",children:"Refresh"})]})]}),r&&s.jsx(In,{message:r}),i.error&&s.jsx(In,{message:i.error}),i.loading&&!g.length?s.jsx(Bn,{label:"Loading jobs"}):g.length===0?s.jsx(Vt,{label:k}):s.jsx("div",{className:"job-list",children:g.map(p=>s.jsx(xm,{job:p,deleting:u===p.run_id,onOpen:()=>e(p),onAsk:()=>t==null?void 0:t(p),onDelete:()=>f(p)},p.run_id))})]})}function xm({job:e,deleting:t,onOpen:r,onAsk:n,onDelete:a}){const o=e.status==="complete",i=co(e.status),l=e.kind==="extraction",u=l?e.label||"Uploaded document":`${e.base_label||"Baseline"} → ${e.target_label||"Revised"}`,c=l?e.n_pages||"-":`${e.n_pages_base||"-"} / ${e.n_pages_target||"-"}`;return s.jsxs("article",{className:`job-card ${i.className}`,children:[s.jsxs("div",{className:"job-main",children:[s.jsx("div",{className:"job-kind",children:l?"Extraction":"Comparison"}),s.jsx("h3",{dir:"auto",children:u}),s.jsxs("div",{className:"job-meta",children:[s.jsxs("span",{children:["#",String(e.run_id||"").slice(0,6)]}),s.jsx("span",{children:[e.source_format,e.base_format,e.target_format].filter(Boolean).join(" / ")||"document"}),s.jsxs("span",{children:[c," pages"]}),s.jsx("span",{children:lm(e.duration_ms,e.status)})]}),e.status_message&&s.jsx("p",{dir:"auto",children:e.status_message}),i.isFailed&&e.error&&s.jsx("p",{className:"job-error",dir:"auto",children:Ve(et(e.error),180)})]}),s.jsxs("div",{className:"job-side",children:[s.jsx(hm,{status:e.status}),s.jsx(mm,{value:e.progress||0,status:e.status}),s.jsx("span",{className:"job-date",children:im(e.created_at)}),s.jsxs("div",{className:"job-actions",children:[s.jsx("button",{type:"button",onClick:r,disabled:!o,className:"primary-action compact",children:"Open"}),s.jsx("button",{type:"button",onClick:n,disabled:!o||!l,className:"ghost-action compact",children:"Query"}),s.jsx("button",{type:"button",onClick:a,disabled:t,className:"danger-action compact",children:t?"Deleting":"Delete"})]})]})]})}function vm({onUpload:e,busy:t,onAdmin:r}){const n=Bd("comparison"),a=t||n.loading||!n.selectedId||n.datasets.length===0;return s.jsxs("form",{onSubmit:e,className:"doc-workflow-card",children:[s.jsx("div",{className:"workflow-card-head",children:s.jsx("div",{children:s.jsx("h2",{children:"Compare two documents"})})}),s.jsx(Wd,{...n,busy:t,onAdmin:r}),!n.loading&&n.datasets.length===0?s.jsx(Vd,{onAdmin:r}):null,s.jsxs("div",{className:"upload-grid compare",children:[s.jsx(Os,{label:"Baseline",helper:"Approved or reference file",name:"base",disabled:a}),s.jsx(Os,{label:"Revised",helper:"Latest or proposed file",name:"target",disabled:a}),s.jsxs("div",{className:"workflow-action-rail",children:[s.jsx("button",{disabled:a,className:"primary-action full",children:t?"Processing":"Compare documents"}),s.jsx("div",{className:"workflow-note",children:"Side-by-side preview, semantic changes, and export."})]})]})]})}function ym({onUpload:e,busy:t,onAdmin:r}){const n=Bd("extraction"),a=t||n.loading||!n.selectedId||n.datasets.length===0;return s.jsxs("form",{onSubmit:e,className:"doc-workflow-card",children:[s.jsx("div",{className:"workflow-card-head",children:s.jsx("div",{children:s.jsx("h2",{children:"Extract documents"})})}),s.jsx(Wd,{...n,busy:t,onAdmin:r}),!n.loading&&n.datasets.length===0?s.jsx(Vd,{onAdmin:r}):null,s.jsxs("div",{className:"upload-grid extract",children:[s.jsx(Os,{label:"Document or image",helper:"PDF, image, Word, Excel, xlsb, CSV, or TSV",name:"document",disabled:a,multiple:!0}),s.jsxs("div",{className:"workflow-action-rail",children:[s.jsx("button",{disabled:a,className:"primary-action full",children:t?"Extracting":"Extract content"}),s.jsx("div",{className:"workflow-note",children:"Text, tables, OCR, structured JSON, and document query."})]})]})]})}function Bd(e){const[t,r]=w.useState([]),[n,a]=w.useState(""),[o,i]=w.useState(!0),[l,u]=w.useState("");return w.useEffect(()=>{let c=!0;return(async()=>{i(!0),u("");try{const f=window.sessionStorage.getItem("simulated_role")||"platform_admin",g=await fetch(`${B}/datasets`,{headers:{"X-User-Role":f}});if(!g.ok){const k=g.status===404?"Use case service is not available. Confirm the backend admin/datasets routes are deployed, then refresh.":`Could not load use cases (${g.status})`;throw new Error(k)}const x=((await g.json()).datasets||[]).filter(k=>(k.use_case_type||"comparison")===e);if(!c)return;r(x),a(k=>{var p;return k||((p=x[0])==null?void 0:p.id)||""})}catch(f){if(!c)return;r([]),a(""),u((f==null?void 0:f.message)||"Could not load use cases.")}finally{c&&i(!1)}})(),()=>{c=!1}},[]),{datasets:t,selectedId:n,setSelectedId:a,loading:o,error:l}}function Wd({datasets:e,selectedId:t,setSelectedId:r,loading:n,error:a,busy:o,onAdmin:i}){return s.jsxs("div",{className:"usecase-selector",children:[s.jsxs("label",{children:[s.jsx("span",{children:"Use case"}),s.jsxs("select",{name:"family_id",value:t,onChange:l=>r(l.target.value),required:!0,disabled:o||n||e.length===0,children:[s.jsx("option",{value:"",disabled:!0,children:n?"Loading use cases":"Select a use case"}),e.map(l=>s.jsxs("option",{value:l.id,children:[l.supplier," - ",l.family_name," (",l.domain||"generic",")"]},l.id))]})]}),a?s.jsx("p",{className:"usecase-error",children:a}):null,e.length>0?s.jsx("button",{type:"button",className:"ghost-action compact",onClick:i,children:"Manage"}):null]})}function Vd({onAdmin:e}){return s.jsxs("div",{className:"usecase-required",children:[s.jsx("strong",{children:"Use case required"}),s.jsx("p",{children:"Create or bootstrap a document use case before uploading files. The selected use case supplies metadata, template rules, access policy, and extraction guidance."}),s.jsx("button",{type:"button",className:"primary-action compact",onClick:e,children:"Open Admin Studio"})]})}function Os({label:e,helper:t,name:r,disabled:n,multiple:a=!1}){const[o,i]=w.useState(""),l=w.useRef(null),u=()=>{var c;n||(c=l.current)==null||c.click()};return s.jsxs("div",{onClick:u,onKeyDown:c=>{(c.key==="Enter"||c.key===" ")&&u()},role:"button",tabIndex:n?-1:0,className:`file-lane${n?" disabled":""}`,children:[s.jsx("input",{ref:l,type:"file",name:r,accept:Yh,multiple:a,required:!0,disabled:n,onClick:c=>c.stopPropagation(),onChange:c=>{var f;const h=Array.from(c.target.files||[]);i(h.length>1?`${h.length} files selected`:((f=h[0])==null?void 0:f.name)||"")},style:{position:"absolute",width:1,height:1,opacity:0,pointerEvents:"none"}}),s.jsxs("div",{className:"file-lane-head",children:[s.jsxs("div",{children:[s.jsx("div",{className:"file-lane-title",children:e}),s.jsx("div",{className:"file-lane-helper",children:t})]}),s.jsx("span",{className:"file-lane-pill",children:"Files"})]}),s.jsx("div",{className:`file-lane-value${o?" selected":""}`,children:o||"Select a file"})]})}function wm({runId:e,meta:t,onVerifyPage:r}){const n=t.base_format&&t.base_format!=="pdf"?t.base_native_pages||t.n_pages_base||1:t.n_pages_base||1,a=t.target_format&&t.target_format!=="pdf"?t.target_native_pages||t.n_pages_target||1:t.n_pages_target||1,o=Math.max(n,a),[i,l]=w.useState(null),[u,c]=w.useState(!1);w.useEffect(()=>{let y=!1;return l(null),Promise.all([fetch(`${B}/runs/${e}/summary`).then(async v=>{if(!v.ok)throw new Error("Failed to load summary");return v.json()}),fetch(`${B}/runs/${e}/diff?limit=500`).then(async v=>v.ok?v.json():{diffs:[]})]).then(([v,x])=>{if(y)return;const k=Array.isArray(v)?v:v.rows||v.summary||[];l(dm(k,x.diffs||[]))}).catch(v=>{y||(console.error("Failed to build quick summary",v),l([]))}),()=>{y=!0}},[e]);const h=Qa.useMemo(()=>(Array.isArray(i)?i:[]).filter(v=>v.change||v.description||v.before||v.after).sort((v,x)=>{const k=lu(v.impact)+(cu(v)?2:0)+(As(v.confidence)||0);return lu(x.impact)+(cu(x)?2:0)+(As(x.confidence)||0)-k}),[i]),f=y=>{const v=String(y||""),x=v.match(/(?:revised|target|page|p\.)\s*(\d+)/i)||v.match(/\b(\d{1,4})\b/);if(!x)return null;const k=Number.parseInt(x[1],10);return Number.isFinite(k)&&k>=1&&k<=o?k:null};if(i===null)return s.jsx("div",{className:"key-audit-empty",children:"Building comparison summary..."});if(!h.length)return s.jsx("div",{className:"key-audit-empty",children:"No prioritized summary items were returned for this comparison."});const g=u?h.slice(0,16):h.slice(0,8);return s.jsxs("div",{className:"key-audit-panel compact",children:[s.jsx("div",{className:"key-audit-list",children:g.map((y,v)=>{const x=f(y.citation);return s.jsxs("div",{className:"key-audit-item",children:[s.jsx(Ud,{type:Ar(y)}),s.jsxs("div",{className:"key-audit-copy",dir:"auto",children:[s.jsx("strong",{children:Ve(y.feature||y.item||y.area||"Document change",120)}),s.jsx("span",{children:Ve(y.change||y.description||y.before||y.after||"Value updated.",260)}),y.citation?s.jsx("small",{children:um(y.citation)}):null]}),x?s.jsxs("button",{type:"button",className:"primary-action compact",onClick:()=>r(x),children:["Verify page ",x]}):null]},`${y.stable_key||y.feature||y.item||v}`)})}),h.length>8&&s.jsx("button",{type:"button",className:"key-audit-more",onClick:()=>c(y=>!y),children:u?"Show fewer":`Show ${Math.min(16,h.length)} items`})]})}function bm({runId:e,meta:t,pageNum:r,setPageNum:n}){const a=t.base_format&&t.base_format!=="pdf"?t.base_native_pages||t.n_pages_base||1:t.n_pages_base||1,o=t.target_format&&t.target_format!=="pdf"?t.target_native_pages||t.n_pages_target||1:t.n_pages_target||1,i=Math.max(a,o),[l,u]=w.useState(r),[c,h]=w.useState(r),[f,g]=w.useState(100),[y,v]=w.useState(!1),[x,k]=w.useState(!0),p=w.useRef(null),d=w.useRef(null);w.useEffect(()=>{u(r),h(r)},[e,r]),w.useEffect(()=>{if(!x)return;const b=p.current,j=d.current;if(!b||!j)return;let C=!1;const E=($,F)=>{C||(C=!0,F.scrollTop=$.scrollTop,F.scrollLeft=$.scrollLeft,window.requestAnimationFrame(()=>{C=!1}))},z=()=>E(b,j),D=()=>E(j,b);return b.addEventListener("scroll",z,{passive:!0}),j.addEventListener("scroll",D,{passive:!0}),()=>{b.removeEventListener("scroll",z),j.removeEventListener("scroll",D)}},[e,r,x]);const m=b=>{const j=Math.max(1,Math.min(i,b));n(j),u(j),h(j)};return s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:12,flexWrap:"wrap"},children:[s.jsx("button",{onClick:()=>m(r-1),disabled:r<=1,style:du(r<=1),children:"Prev both"}),s.jsxs("span",{style:{fontSize:17,fontWeight:650,minWidth:100},children:["Page ",r," / ",i]}),s.jsx("button",{onClick:()=>m(r+1),disabled:r>=i,style:du(r>=i),children:"Next both"}),s.jsxs("div",{className:"viewer-toolbar-group","aria-label":"PDF zoom controls",children:[s.jsx("button",{type:"button",onClick:()=>g(b=>Math.max(50,b-25)),title:"Zoom out",children:"-"}),s.jsxs("span",{children:[f,"%"]}),s.jsx("button",{type:"button",onClick:()=>g(b=>Math.min(300,b+25)),title:"Zoom in",children:"+"}),s.jsx("button",{type:"button",onClick:()=>g(100),title:"Reset zoom",children:"Reset"})]}),s.jsxs("label",{className:"viewer-sync-toggle",children:[s.jsx("input",{type:"checkbox",checked:x,onChange:b=>k(b.target.checked)}),s.jsx("span",{children:"Sync scroll"})]}),s.jsxs("label",{className:"viewer-sync-toggle",style:{marginLeft:8},children:[s.jsx("input",{type:"checkbox",checked:y,onChange:b=>v(b.target.checked)}),s.jsx("span",{children:"Smart crop"})]}),s.jsx(km,{})]}),s.jsxs("div",{className:"viewer-grid",style:{display:"grid",gridTemplateColumns:"minmax(0, 1fr) minmax(0, 1fr)",gap:14},children:[s.jsx(mu,{runId:e,side:"base",pageNum:l,setPageNum:u,totalPages:a,label:"Baseline document",docName:t.base_label,format:t.base_format,zoom:f,scrollRef:p,cropMargins:y}),s.jsx(mu,{runId:e,side:"target",pageNum:c,setPageNum:h,totalPages:o,label:"Revised document",docName:t.target_label,format:t.target_format,zoom:f,scrollRef:d,cropMargins:y})]})]})}function km(){return s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7,marginLeft:6,flexWrap:"wrap"},children:[s.jsx(Fo,{label:"added",color:H.ADDED.bg,border:H.ADDED.border}),s.jsx(Fo,{label:"deleted",color:H.DELETED.bg,border:H.DELETED.border}),s.jsx(Fo,{label:"modified",color:H.MODIFIED.bg,border:H.MODIFIED.border})]})}function Fo({label:e,color:t,border:r}){return s.jsx("span",{style:{background:t,border:`1px solid ${r}`,color:"var(--text-primary)",padding:"2px 8px",borderRadius:999,fontSize:12,fontWeight:600},children:e})}function mu({runId:e,side:t,pageNum:r,setPageNum:n,totalPages:a,label:o,docName:i,format:l,zoom:u=100,scrollRef:c,cropMargins:h}){const[f,g]=w.useState({regions:[]}),[y,v]=w.useState(null),[x,k]=w.useState("idle"),p=r>=1&&r<=a,d=l&&l!=="pdf";w.useEffect(()=>{if(k(p&&!d?"loading":"idle"),!p){g({regions:[]}),v(null);return}if(d){g({regions:[]}),fetch(`${B}/runs/${e}/native-page/${t}/${r}`).then(D=>D.json()).then(v).catch(()=>v({items:[]}));return}v(null),fetch(`${B}/runs/${e}/overlay/${t}/${r}`).then(D=>D.json()).then(g).catch(()=>g({regions:[]}))},[e,t,r,p,d]);const m=f.content_box,b=f.page_width||612,j=f.page_height||792,C=h&&m&&m.x_max>m.x_min&&m.y_max>m.y_min;let E={position:"relative",width:"100%"},z={position:"relative",width:`${u}%`};if(C){const D=m.x_min/b,$=m.y_min/j,F=(m.x_max-m.x_min)/b;E={position:"relative",overflow:"hidden",width:"100%",paddingTop:`${(m.y_max-m.y_min)/j/F*u}%`},z={position:"absolute",left:`${-(D/F)*u}%`,top:`${-($/F)*u}%`,width:`${1/F*u}%`}}return s.jsxs("div",{className:"doc-viewer-shell",children:[s.jsxs("div",{style:{marginBottom:7,display:"flex",justifyContent:"space-between",gap:10,alignItems:"flex-end",flexWrap:"wrap"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:13,color:"var(--text-secondary)",fontWeight:600},children:o}),s.jsxs("div",{style:{fontSize:14,color:"var(--text-primary)",fontWeight:600},children:[i," - ",p?`page ${r}`:"no page",l&&s.jsx("span",{style:{color:"var(--text-secondary)",fontSize:11,marginLeft:6},children:String(l).toUpperCase()})]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[s.jsx("button",{type:"button",onClick:()=>n(Math.max(1,r-1)),disabled:r<=1,style:pu(r<=1),title:`Previous ${o}`,children:"Prev"}),s.jsxs("span",{style:{color:"var(--text-secondary)",fontSize:12,minWidth:46,textAlign:"center"},children:[r,"/",a||1]}),s.jsx("button",{type:"button",onClick:()=>n(Math.min(a||1,r+1)),disabled:r>=(a||1),style:pu(r>=(a||1)),title:`Next ${o}`,children:"Next"})]})]}),s.jsx("div",{ref:c,className:`doc-frame dl-scrollbar ${d?"native":""}`,style:{overflow:"auto",maxHeight:"75vh",position:"relative"},children:p?d?s.jsx(Sm,{page:y,side:t}):s.jsx("div",{style:E,children:s.jsxs("div",{className:"pdf-zoom-stage",style:z,children:[x==="loading"&&s.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)",background:"var(--surface-raised)",zIndex:1,fontWeight:600},children:["Loading page ",r]}),s.jsx("img",{src:`${B}/runs/${e}/pages/${t}/${r}`,onLoad:()=>k("ready"),onError:()=>k("error"),style:{display:"block",width:"100%",height:"auto"},alt:`${t} page ${r}`},`${t}-${r}`),x==="error"&&s.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:H.DELETED.text,background:"#fff5f5",zIndex:2,fontWeight:600},children:["Could not load page ",r]}),(f.regions||[]).map((D,$)=>{const[F,Y,le,ht]=D.bbox||[0,0,0,0],Z=H[String(D.change_type||"").toUpperCase()]||H.MODIFIED,Ke=D.page_width||f.page_width||612,V=D.page_height||f.page_height||792,N=D.border_color||Z.border,T=D.color||Z.bg;return s.jsx("div",{title:`${D.change_type||"change"} ${D.stable_key||""} (${D.block_type||"block"})`,style:{position:"absolute",left:`${F/Ke*100}%`,top:`${Y/V*100}%`,width:`${Math.max(.15,(le-F)/Ke*100)}%`,height:`${Math.max(.15,(ht-Y)/V*100)}%`,background:T,border:`1px solid ${N}`,boxShadow:`inset 0 0 0 1px ${T}`,pointerEvents:"auto"}},$)})]})}):s.jsx(jm,{pageNum:r})})]})}function jm({pageNum:e}){return s.jsxs("div",{style:{minHeight:520,display:"grid",placeItems:"center",color:"var(--text-secondary)",fontWeight:600},children:["No page ",e," in this document."]})}function Sm({page:e,side:t}){if(!e)return s.jsx("div",{style:{minHeight:520,display:"grid",placeItems:"center",color:"var(--text-secondary)",fontWeight:600},children:"Loading structured page"});const r=e.items||[],n=e.viewer_type||(e.format==="spreadsheet"?"spreadsheet":"document");return r.length?s.jsx("div",{className:`native-page ${n}`,dir:"auto",children:r.map(a=>s.jsx(_m,{item:a,viewerType:n,side:t||e.side},a.id))}):s.jsx("div",{style:{minHeight:520,display:"grid",placeItems:"center",color:"var(--text-secondary)",fontWeight:600},children:"No structured content on this page."})}function _m({item:e,viewerType:t,side:r}){var i;const n=Ms(e.highlight);if(e.type==="table"&&!((i=e.payload)!=null&&i.layout_table)&&!Pm(e,t))return s.jsx(Cm,{item:e,viewerType:t});const a=e.type==="table"?{...e,text:Nm(e),payload:{...e.payload||{},layout_table:!0}}:e,o=e.type==="section"||e.type==="heading";return s.jsx("div",{className:"native-block",dir:"auto",style:{...n,marginBottom:o?10:8,padding:o?"7px 9px":"6px 8px",borderRadius:6,fontSize:o?14:13,fontWeight:o?650:400,lineHeight:1.45},title:e.change_type,children:s.jsx(Em,{item:a,side:r})})}function Em({item:e,side:t}){var a,o;const r=e.token_diff||[];return e.highlight==="modified"&&Array.isArray(r)&&r.some(i=>i.op&&i.op!=="equal")?s.jsx("span",{dir:"auto",children:r.map((i,l)=>{const u=i.op;if(u==="delete"&&t!=="base"||u==="insert"&&t==="base")return null;const c=u==="equal"||t==="base"?i.text_a:i.text_b;if(!c)return null;let h="";return u==="delete"&&(h="native-token-delete"),u==="insert"&&(h="native-token-insert"),u==="replace"&&(h=t==="base"?"native-token-replace-base":"native-token-replace-target"),s.jsxs(Qa.Fragment,{children:[l>0?" ":"",s.jsx("span",{className:`native-token ${h}`,dir:"auto",children:c})]},l)})}):s.jsx("span",{dir:"auto",children:e.text||((a=e.payload)==null?void 0:a.text)||((o=e.payload)==null?void 0:o.layout_text)||e.path||"-"})}function Cm({item:e,viewerType:t}){var i;const r=Fi(e),n=e.rows||[],a=((i=e.payload)==null?void 0:i.table_title)||e.text||"Table",o=t==="spreadsheet";return s.jsxs("div",{className:"native-block",dir:"auto",style:{...Ms(e.highlight),marginBottom:14,padding:10,borderRadius:7},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:10,alignItems:"baseline",flexWrap:"wrap",marginBottom:7},children:[s.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--text-primary)"},children:a}),s.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)"},children:[n.length," row",n.length===1?"":"s"]})]}),s.jsx("div",{className:"native-table-wrap dl-scrollbar",children:s.jsxs("table",{className:`native-table ${o?"spreadsheet":""}`,style:{fontSize:12},children:[s.jsx("thead",{children:s.jsx("tr",{style:{background:"var(--surface-sunken)",color:"var(--text-primary)"},children:r.map((l,u)=>{const c=String(l||"").toLowerCase(),h=u>0&&(c.includes("pcv")||c.includes("pcb")||c.includes("model")||c.includes("spec")||String(l||"").length<=4||r.length>=6&&String(l||"").length<=12);return s.jsx("th",{dir:"auto",className:h?"vertical-th":"",style:h?{...rr,verticalAlign:"bottom"}:rr,children:h?s.jsx("span",{className:"vertical-th-text",children:l}):l},l)})})}),s.jsx("tbody",{children:n.map(l=>{const u=Ms(l.highlight,!0);return s.jsx("tr",{title:l.change_type,style:{background:u.background},children:r.map(c=>{var h;return s.jsx("td",{dir:"auto",style:{...Ir,borderLeft:u.borderLeft},children:ur((h=Ui(l.values))==null?void 0:h[c])},c)})},l.id)})})]})})]})}function Fi(e){return(Array.isArray(e==null?void 0:e.header)?e.header:[]).map(r=>String(r||"").trim()).filter(r=>r&&!pr(r))}function Ui(e){return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).map(([t,r])=>[String(t||"").trim(),r]).filter(([t])=>t&&!pr(t)))}function Nm(e){const r=(Array.isArray(e==null?void 0:e.rows)?e.rows:[]).map(n=>{const a=Ui(n.values);return Object.values(a).map(i=>ur(i)).filter(i=>i&&i!=="-").join(" / ")||n.text||""}).filter(Boolean);return r.length?r.join(`
`):(e==null?void 0:e.text)||Fi(e).join(" / ")||"Document text"}function Pm(e,t){var y;if(((y=e==null?void 0:e.payload)==null?void 0:y.source_format)==="docx"||t!=="document")return!1;const r=Array.isArray(e==null?void 0:e.header)?e.header:[],n=Fi(e),a=Array.isArray(e==null?void 0:e.rows)?e.rows:[],o=r.some(v=>pr(v)),i=a.flatMap(v=>Object.values(Ui(v.values||{})).map(x=>String(x||"").trim()).filter(Boolean));if(o&&n.length<=2)return!0;if(!a.length||!i.length)return!1;const u=i.filter(v=>v.length>70||v.split(/\s+/).length>=10).length/Math.max(1,i.length),h=i.filter(v=>/[\u0600-\u06ff]/.test(v)&&/[A-Za-z]/.test(v)).length/Math.max(1,i.length),g=n.filter(v=>/feature|description|item|name|order|code|part|model|price|amount|status|date|term|rent|fee/i.test(v)).length/Math.max(1,n.length);return h>=.2&&g<.35||a.length<=6&&u>=.45&&g<.35}function zm({columns:e,rows:t}){if(e=(e||[]).filter(n=>!pr(n)),!e.length||!(t!=null&&t.length))return null;const r=sm(e.length,420,920);return s.jsx("div",{className:"dl-scrollbar table-scroll-frame",style:{marginTop:12},children:s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12,minWidth:r},children:[s.jsx("thead",{children:s.jsx("tr",{style:{background:"#f2eee6"},children:e.map(n=>s.jsx("th",{title:n,style:rr,dir:"auto",children:n},n))})}),s.jsx("tbody",{children:t.map((n,a)=>s.jsx("tr",{children:e.map(o=>{var i;return s.jsx("td",{style:Ir,dir:"auto",children:ur(((i=n==null?void 0:n.values)==null?void 0:i[o])??(n==null?void 0:n[o]))},o)})},a))})]})})}function nr({columns:e,rows:t}){const r=(e||[]).filter(n=>!pr(n));return s.jsx("div",{className:"dl-scrollbar",style:{overflowX:"auto"},children:s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13,minWidth:780},children:[s.jsx("thead",{children:s.jsx("tr",{style:{background:"#1f2937",color:"white"},children:r.map(n=>s.jsx("th",{dir:"auto",style:{...rr,padding:"10px 12px",borderBottom:"1px solid #384250",color:"white"},children:n},n))})}),s.jsx("tbody",{children:t.slice(0,200).map((n,a)=>s.jsx("tr",{children:r.map(o=>s.jsx("td",{dir:"auto",style:Ir,children:ur(n[o])},o))},a))})]})})}function Tm({rows:e}){return e!=null&&e.length?s.jsx("div",{className:"dl-scrollbar",style:{overflowX:"auto",marginTop:10},children:s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13,minWidth:640},children:[s.jsx("thead",{children:s.jsxs("tr",{style:{background:"#f2eee6",color:"#344054"},children:[s.jsx("th",{style:rr,dir:"auto",children:"Field"}),s.jsx("th",{style:rr,dir:"auto",children:"Before"}),s.jsx("th",{style:rr,dir:"auto",children:"After"})]})}),s.jsx("tbody",{children:e.map((t,r)=>s.jsxs("tr",{children:[s.jsx("td",{style:Ir,dir:"auto",children:t.field||t.column||t.name||"-"}),s.jsx("td",{style:{...Ir,color:H.DELETED.text},dir:"auto",children:ur(t.before??t.base??t.old)}),s.jsx("td",{style:{...Ir,color:H.ADDED.text},dir:"auto",children:ur(t.after??t.target??t.new)})]},r))})]})}):null}function Dm({runId:e,meta:t,tab:r,setTab:n}){return s.jsxs(s.Fragment,{children:[s.jsx(Lm,{meta:t}),s.jsx(Rm,{tab:r,setTab:n}),s.jsxs("main",{style:{...ct,padding:12},children:[r==="overview"&&s.jsx(Im,{runId:e,meta:t}),r==="tables"&&s.jsx(Am,{runId:e}),r==="text"&&s.jsx(Mm,{runId:e}),r==="json"&&s.jsx(Om,{runId:e,meta:t})]}),s.jsxs("section",{className:"workspace-surface extraction-query-surface",style:{marginTop:12},children:[s.jsx("div",{className:"surface-title-row",children:s.jsxs("div",{children:[s.jsx("h3",{children:"Ask This Extraction"}),s.jsx("p",{children:"Search the extracted text, tables, headings, and page evidence from this document."})]})}),s.jsx($m,{runId:e})]})]})}function $m({runId:e}){const[t,r]=w.useState(""),[n,a]=w.useState([]),[o,i]=w.useState(!1),l=async()=>{const u=t.trim();if(!u||o)return;const c=`extract-user-${Date.now()}`,h=`extract-answer-${Date.now()}`;a(f=>[...f,{id:c,role:"user",text:u,timestamp:new Date().toLocaleTimeString()}]),r(""),i(!0);try{const f=await fetch(`${B}/extract-runs/${e}/query`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:u,mode:"fast"})});if(!f.ok)throw new Error(await pe(f));const g=await f.json();a(y=>{var v;return[...y,{id:h,role:"assistant",text:g.answer||`Found ${((v=g.rows)==null?void 0:v.length)||0} matching passages.`,rows:g.rows||[],columns:g.columns||["Page","Type","Path","Text","Score"],timestamp:new Date().toLocaleTimeString()}]})}catch(f){a(g=>[...g,{id:h,role:"assistant",text:ue(f),rows:[],timestamp:new Date().toLocaleTimeString(),isError:!0}])}finally{i(!1)}};return s.jsxs("section",{className:"query-workbench",children:[n.length===0?s.jsx(Vt,{label:"Ask about clauses, tables, fields, dates, page content, or extracted values."}):s.jsx("div",{className:"query-chat-log",children:n.map(u=>{var c;return s.jsxs("article",{className:`query-message ${u.role}${u.isError?" error":""}`,children:[s.jsxs("div",{className:"query-message-meta",children:[s.jsx("span",{children:u.role==="user"?"You":"Extraction query"}),s.jsx("span",{children:u.timestamp})]}),s.jsx("div",{className:"query-message-text",dir:"auto",children:u.text}),((c=u.rows)==null?void 0:c.length)>0&&s.jsx("div",{className:"query-results-shell",style:{marginTop:10},children:s.jsx(nr,{columns:u.columns,rows:u.rows})})]},u.id)})}),s.jsxs("div",{className:"query-composer",children:[s.jsx("textarea",{value:t,onChange:u=>r(u.target.value),onKeyDown:u=>{u.key==="Enter"&&!u.shiftKey&&(u.preventDefault(),l())},placeholder:"Ask about the extracted document...",disabled:o,rows:3}),s.jsx("div",{className:"query-composer-actions",children:s.jsx("button",{type:"button",className:"primary-action compact",onClick:l,disabled:o||!t.trim(),children:o?"Searching":"Ask"})})]})]})}function Lm({meta:e}){var r,n;const t=e.summary||{};return s.jsxs("section",{style:{...ct,padding:12,display:"flex",gap:8,marginBottom:12,flexWrap:"wrap",alignItems:"center"},children:[s.jsx(ke,{label:"Format",value:(e.source_format||"-").toUpperCase()}),s.jsx(ke,{label:"Documents",value:((r=e.documents)==null?void 0:r.length)||t.document_count||1}),s.jsx(ke,{label:"Coverage",value:typeof e.coverage=="number"?`${e.coverage.toFixed(1)}%`:"-"}),s.jsx(ke,{label:"Quality",value:t.quality||"-"}),s.jsx(ke,{label:"Tables",value:t.table_count||0}),s.jsx(ke,{label:"Blocks",value:Object.values(t.block_counts||{}).reduce((a,o)=>a+Number(o||0),0)}),s.jsx(ke,{label:"Pages",value:e.n_pages||e.native_pages||0}),Number(((n=e.ai_usage)==null?void 0:n.total_tokens)||0)>0&&s.jsx(ke,{label:"AI tokens",value:`${xt(e.ai_usage.total_tokens)} (${xt(e.ai_usage.calls||0)} calls)`})]})}function Rm({tab:e,setTab:t}){const r=[["overview","Extraction overview"],["tables","Extracted tables"],["text","Text blocks"],["json","Structured JSON"]];return s.jsx("nav",{style:{display:"flex",gap:4,borderBottom:"1px solid #d8d0c3",marginBottom:12,overflowX:"auto"},children:r.map(([n,a])=>{const o=e===n;return s.jsx("button",{onClick:()=>t(n),style:{padding:"10px 14px",background:o?"#1f2937":"transparent",color:o?"white":"#344054",border:o?"1px solid #1f2937":"1px solid transparent",borderRadius:"8px 8px 0 0",cursor:"pointer",fontWeight:600,whiteSpace:"nowrap"},children:a},n)})})}function Im({runId:e,meta:t}){const r=t.summary||{},n=t.ai_analysis,a=(n==null?void 0:n.result)||null;return s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12,flexWrap:"wrap",marginBottom:12},children:[s.jsxs("div",{children:[s.jsx("h2",{style:{margin:0,fontSize:18,fontWeight:650},dir:"auto",children:t.label||"Extracted document"}),s.jsx("p",{style:{margin:"6px 0 0",color:"#667085",fontSize:13},dir:"auto",children:r.message||"Extraction complete."})]}),s.jsx("button",{onClick:()=>{window.location.href=`${B}/extract-runs/${e}/json`},style:Zh(!1),children:"Download JSON"})]}),s.jsxs("div",{className:"report-metrics",style:{display:"grid",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",gap:10,marginBottom:12},children:[s.jsx(sa,{label:"Extraction coverage",value:typeof t.coverage=="number"?`${t.coverage.toFixed(1)}%`:"-"}),s.jsx(sa,{label:"Tables detected",value:r.table_count||0}),s.jsx(sa,{label:"Table rows",value:r.table_row_count||0}),s.jsx(sa,{label:"Image/OCR blocks",value:r.figure_count||0})]}),s.jsxs("div",{style:{...ct,padding:14,boxShadow:"none",marginBottom:12},children:[s.jsx("div",{style:{fontWeight:650,marginBottom:8},children:"Block breakdown"}),s.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[Object.entries(r.block_counts||{}).map(([o,i])=>s.jsx(ke,{label:o.replace("_"," "),value:i},o)),Object.keys(r.block_counts||{}).length===0&&s.jsx("span",{style:{color:"#667085"},children:"No block statistics available."})]})]}),n&&s.jsxs("div",{style:{...ct,padding:14,boxShadow:"none"},children:[s.jsxs("div",{style:{fontWeight:650,marginBottom:8},children:["AI-assisted analysis ",n.available?"- available":"- unavailable"]}),!n.available&&s.jsx("div",{style:{color:H.DELETED.text},dir:"auto",children:normalizeErrorMessage(n.error)||"AI analysis was not generated."}),a&&s.jsxs("div",{style:{color:"#344054",lineHeight:1.5},children:[s.jsx("p",{style:{marginTop:0},dir:"auto",children:a.executive_summary||"AI analysis completed."}),Array.isArray(a.key_items)&&a.key_items.length>0&&s.jsx(nr,{columns:["Item"],rows:a.key_items.slice(0,20).map(o=>({Item:typeof o=="string"?o:JSON.stringify(o)}))})]})]}),s.jsx(fm,{usage:t.ai_usage})]})}function sa({label:e,value:t}){return s.jsxs("div",{style:{background:"#fbfaf6",border:"1px solid #ded6c8",borderRadius:8,padding:12},children:[s.jsx("div",{style:{fontSize:12,color:"#667085",fontWeight:600},children:e}),s.jsx("div",{style:{marginTop:4,fontSize:22,color:"#1f2937",fontWeight:650},children:t})]})}function Am({runId:e}){const[t,r]=w.useState({loading:!0,error:"",tables:[]});return w.useEffect(()=>{let n=!1;return r({loading:!0,error:"",tables:[]}),fetch(`${B}/extract-runs/${e}/tables?include_rows=true`).then(async a=>{if(!a.ok)throw new Error(await pe(a));return a.json()}).then(a=>{n||r({loading:!1,error:"",tables:a.tables||[]})}).catch(a=>{n||r({loading:!1,error:ue(a),tables:[]})}),()=>{n=!0}},[e]),t.loading?s.jsx(Bn,{label:"Loading extracted tables..."}):t.error?s.jsx(Bi,{message:t.error}):t.tables.length?s.jsx("div",{style:{display:"grid",gap:12},children:t.tables.map(n=>s.jsxs("div",{style:{...ct,padding:12,boxShadow:"none"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12,flexWrap:"wrap",marginBottom:8},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:650},dir:"auto",children:n.display_name||n.title||"Detected table"}),s.jsxs("div",{style:{color:"#667085",fontSize:13,marginTop:3},dir:"auto",children:[n.page_label," · ",n.n_columns," columns · ",n.n_rows," rows · header quality ",Math.round((n.header_quality||0)*100),"%",n.extraction_confidence?` · extraction ${Math.round(n.extraction_confidence*100)}%`:""]})]}),s.jsx("code",{children:String(n.id||"").slice(0,8)})]}),Array.isArray(n.quality_warnings)&&n.quality_warnings.length>0&&s.jsxs("div",{style:{color:"#8a5a00",fontSize:13,marginBottom:8},dir:"auto",children:["Review note: ",n.quality_warnings.slice(0,2).join(" ")]}),s.jsxs("div",{style:{color:"#475467",fontSize:13,marginBottom:8},dir:"auto",children:["Columns: ",(n.columns||[]).slice(0,12).join(" | ")||"No columns detected"]}),s.jsx(zm,{columns:n.columns||[],rows:n.rows||n.row_preview||[]})]},n.id))}):s.jsx(Vt,{label:"No tables were detected in this document."})}function Mm({runId:e}){const[t,r]=w.useState({loading:!0,error:"",blocks:[]});if(w.useEffect(()=>{let a=!1;return r({loading:!0,error:"",blocks:[]}),fetch(`${B}/extract-runs/${e}/blocks?limit=1000`).then(async o=>{if(!o.ok)throw new Error(await pe(o));return o.json()}).then(o=>{a||r({loading:!1,error:"",blocks:o.blocks||[]})}).catch(o=>{a||r({loading:!1,error:ue(o),blocks:[]})}),()=>{a=!0}},[e]),t.loading)return s.jsx(Bn,{label:"Loading extracted text blocks..."});if(t.error)return s.jsx(Bi,{message:t.error});const n=t.blocks.filter(a=>a.text||a.type==="table").slice(0,500).map(a=>({Page:a.page_number,Type:a.type,Path:a.path,Text:Ve(a.text||JSON.stringify(a.payload||{}),700)}));return n.length?s.jsx(nr,{columns:["Page","Type","Path","Text"],rows:n}):s.jsx(Vt,{label:"No extracted text blocks were returned."})}function Om({runId:e,meta:t}){const[r,n]=w.useState({loading:!0,error:"",data:null});if(w.useEffect(()=>{let f=!1;return n({loading:!0,error:"",data:null}),tm(e).then(g=>{f||n({loading:!1,error:"",data:g})}).catch(g=>{f||n({loading:!1,error:ue(g),data:null})}),()=>{f=!0}},[e]),r.loading)return s.jsx(Bn,{label:"Building structured JSON preview..."});if(r.error)return s.jsx(Bi,{message:r.error});const a=r.data||{},o=a.tables||[],i=a.pages||[],l=a.content||i.flatMap(f=>f.content||[]),u=a.document_summary||{},c=u.extraction_quality||{},h=l.map(f=>f.inferred_record).filter(Boolean);return s.jsxs("div",{style:{display:"grid",gap:12},children:[s.jsxs("div",{style:{...ct,padding:12,boxShadow:"none"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12,alignItems:"flex-start",flexWrap:"wrap"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:650,marginBottom:8},dir:"auto",children:"Business extraction summary"}),s.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",color:"#344054",fontSize:13},children:[s.jsxs("span",{style:mr,children:["Document: ",u.label||t.label||"uploaded file"]}),s.jsxs("span",{style:mr,children:["Type: ",u.source_type||t.source_format||"document"]}),s.jsxs("span",{style:mr,children:["Template: ",u.detected_template||"generic document"]}),s.jsxs("span",{style:mr,children:["Quality: ",c.grade||"not rated"]}),Number.isFinite(c.score)&&s.jsxs("span",{style:mr,children:["Score: ",Math.round(c.score*100),"%"]}),u.detected_language&&s.jsxs("span",{style:mr,children:["Script: ",u.detected_language]})]})]}),s.jsx("button",{onClick:()=>{window.location.href=`${B}/extract-runs/${e}/json`},style:em(),children:"Download clean JSON"})]}),Array.isArray(c.warnings)&&c.warnings.length>0&&s.jsx("div",{style:{color:"#8a5a00",fontSize:13,marginTop:8,lineHeight:1.4},dir:"auto",children:c.warnings.slice(0,3).map(f=>f.message||f).join(" ")})]}),s.jsxs("div",{style:{...ct,padding:12,boxShadow:"none"},children:[s.jsx("div",{style:{display:"flex",justifyContent:"space-between",gap:10,alignItems:"center",marginBottom:8},children:s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:650},children:"Document-order extracted text"}),s.jsxs("div",{style:{color:"#667085",fontSize:13,marginTop:3},children:[l.length," text block(s), ",h.length," inferred record(s), ",o.length," table(s), ",i.length," page(s)"]})]})}),l.length>0?s.jsx(nr,{columns:["Page","Type","Path","Text","Inferred record"],rows:l.slice(0,500).map(f=>({Page:f.page,Type:f.type,Path:f.path,Text:Ve(f.text,900),"Inferred record":f.inferred_record?iu(f.inferred_record.values):""}))}):s.jsx(Vt,{label:"No ordered text content was returned. Check the Text blocks tab."})]}),h.length>0&&s.jsxs("div",{style:{...ct,padding:12,boxShadow:"none"},children:[s.jsx("div",{style:{fontWeight:650,marginBottom:8},children:"Inferred business records"}),s.jsx(nr,{columns:["Page","Values","Source text","Citation"],rows:h.slice(0,120).map(f=>({Page:f.page,Values:iu(f.values),"Source text":Ve(f.source_text,700),Citation:f.citation}))})]}),o.length>0&&s.jsxs("div",{style:{...ct,padding:12,boxShadow:"none"},children:[s.jsx("div",{style:{fontWeight:650,marginBottom:8},children:"Extracted tables"}),s.jsx(nr,{columns:["title","page","area","row_count","columns"],rows:o.slice(0,30).map(f=>({title:f.title,page:f.page,area:f.area,row_count:f.row_count,columns:(f.columns||[]).join(" | ")}))})]}),s.jsxs("div",{style:{...ct,padding:12,boxShadow:"none"},children:[s.jsx("div",{style:{fontWeight:650,marginBottom:8},children:"Clean JSON preview"}),s.jsx("pre",{className:"dl-scrollbar",style:{margin:0,maxHeight:360,overflow:"auto",background:"#fbfaf6",border:"1px solid #e0d8ca",borderRadius:8,padding:12,fontSize:12,lineHeight:1.45,whiteSpace:"pre-wrap"},children:JSON.stringify({document_summary:a.document_summary,content:l.slice(0,30),tables:o.slice(0,10)},null,2)})]})]})}function Bi({message:e}){return s.jsx("div",{style:{marginTop:16,border:"1px solid #f0b4b4",background:"#fff5f5",color:"#9f1d1d",borderRadius:8,padding:13,fontSize:14,fontWeight:600,lineHeight:1.45},children:e})}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Hd=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Um={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=w.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:a="",children:o,iconNode:i,...l},u)=>w.createElement("svg",{ref:u,...Um,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:Hd("lucide",a),...l},[...i.map(([c,h])=>w.createElement(c,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=(e,t)=>{const r=w.forwardRef(({className:n,...a},o)=>w.createElement(Bm,{ref:o,iconNode:t,className:Hd(`lucide-${Fm(e)}`,n),...a}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=fr("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=fr("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=fr("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=fr("FileOutput",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2",key:"1vk7w2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6",key:"1jink5"}],["path",{d:"m5 11-3 3",key:"1dgrs4"}],["path",{d:"m5 17-3-3h10",key:"1mvvaf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=fr("GitCompare",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=fr("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=fr("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);function Jm(){return s.jsxs("div",{className:"altrai-wordmark","aria-label":"Altrai",children:[s.jsx("span",{children:"Altr"}),s.jsx("span",{className:"accent",children:"ai"})]})}const Ym=[{label:"AI Document Intelligence",items:[{key:"compare",label:"Compare",icon:Qm},{key:"extract",label:"Extract",icon:qm},{key:"jobs",label:"Work History",icon:Km}]},{label:"Administration",items:[{key:"admin",label:"Admin Studio",icon:Gm,title:"Use cases, datasets, and access policies"}]},{label:"AI Agents",items:[{key:"agents",label:"Coming soon",icon:Wm,disabled:!0,title:"Future skills and multi-agent workflows"}]}];function Xm({workspace:e,onNavigate:t,collapsed:r=!1}){return s.jsx("nav",{className:"workspace-nav","aria-label":"Workspace navigation",children:Ym.map(n=>s.jsxs("div",{className:"workspace-nav-group",children:[!r&&s.jsx("div",{className:"workspace-nav-label",children:n.label}),n.items.map(a=>{const o=e===a.key;return s.jsxs("button",{type:"button",className:`workspace-nav-item${o?" active":""}`,onClick:()=>!a.disabled&&t(a.key),disabled:a.disabled,title:r?a.title||a.label:a.title,children:[s.jsx(a.icon,{className:"workspace-nav-icon","aria-hidden":"true"}),!r&&s.jsx("span",{className:"workspace-nav-text",children:a.label})]},`${n.label}-${a.label}-${a.key}`)})]},n.label))})}const qd=w.createContext(null),gu="altrai_theme";function Zm({children:e}){const[t,r]=w.useState(()=>typeof window>"u"?"system":window.localStorage.getItem(gu)||"system");w.useEffect(()=>{document.documentElement.dataset.theme=t,window.localStorage.setItem(gu,t)},[t]);const n=w.useMemo(()=>({theme:t,setTheme:r}),[t]);return s.jsx(qd.Provider,{value:n,children:e})}function Qd(){const e=w.useContext(qd);if(!e)throw new Error("useTheme must be used within ThemeProvider");return e}const eg=[["system","Auto"],["light","Light"],["dark","Dark"]];function tg({collapsed:e=!1}){const{theme:t,setTheme:r}=Qd();return s.jsxs("footer",{className:"user-footer",children:[s.jsx("div",{className:"user-avatar","aria-hidden":"true",children:"N"}),!e&&s.jsxs("div",{className:"user-meta",children:[s.jsx("strong",{children:"Nithin"}),s.jsx("span",{children:"platform_admin"})]}),!e&&s.jsx("div",{className:"rail-theme-toggle","aria-label":"Theme selector",children:eg.map(([n,a])=>s.jsx("button",{type:"button",className:t===n?"active":"",onClick:()=>r(n),children:a},n))})]})}const rg={jobs:"Work History",compare:"Compare",extract:"Extract",agents:"AI Agents",admin:"Admin Studio"},ng={compare:{label:"Comparison History",historyKind:"comparison"},extract:{label:"Extraction History",historyKind:"extraction"}};function ag({workspace:e,runId:t,onNavigate:r,onDownloadReport:n,children:a}){const[o,i]=w.useState(!1),{theme:l}=Qd(),u=ng[e];return s.jsxs("div",{className:`workspace-shell theme-${l}${o?" collapsed":""}`,children:[s.jsxs("aside",{className:"workspace-sidebar",children:[s.jsxs("div",{className:"workspace-brand",children:[s.jsx("div",{className:"workspace-brand-copy",children:s.jsx(Jm,{})}),s.jsx("button",{type:"button",className:"workspace-collapse-button",onClick:()=>i(c=>!c),"aria-label":o?"Expand navigation":"Collapse navigation",title:o?"Expand navigation":"Collapse navigation",children:o?s.jsx(Hm,{size:16,strokeWidth:1.5}):s.jsx(Vm,{size:16,strokeWidth:1.5})})]}),s.jsx(Xm,{workspace:e,onNavigate:r,collapsed:o}),s.jsx(tg,{collapsed:o})]}),s.jsxs("section",{className:"workspace-main",children:[s.jsxs("header",{className:"workspace-topbar",children:[s.jsx("div",{children:s.jsx("h1",{children:rg[e]||"Workspace"})}),s.jsxs("div",{className:"workspace-actions",children:[t&&s.jsx("button",{type:"button",className:"workspace-primary-action",onClick:n,children:"Export report"}),u&&s.jsx("button",{type:"button",className:"workspace-secondary-action",onClick:()=>r("jobs",{historyKind:u.historyKind}),children:u.label})]})]}),s.jsx("div",{className:"workspace-content",children:a})]})]})}const og=[["platform_admin","Platform Admin"],["business_unit_admin","Business Unit Admin"],["reviewer","Reviewer"],["submitter","Submitter"],["viewer","Viewer"]],xu={supplier:"",family_name:"",domain:"generic",description:"",use_case_type:"comparison",expected_formats:["pdf","docx"],sample_plan:"",onboarding_notes:"",learning_mode:"ai_assisted_bootstrap",allowed_roles:[]},sg=[["pdf","PDF"],["docx","Word"],["xlsx","Excel"],["csv","CSV/TSV"],["image","Scanned image"]],ig=[["deterministic_first","Deterministic first"],["ai_assisted_bootstrap","AI-assisted bootstrap"],["manual_profile","Manual profile"]],lg=()=>({id:crypto.randomUUID(),baseline:null,revised:null});function ug(){var U,ye,ot,Wi;const[e,t]=w.useState([]),[r,n]=w.useState(""),[a,o]=w.useState(null),[i,l]=w.useState(xu),[u,c]=w.useState(""),[h,f]=w.useState([]),[g,y]=w.useState(""),[v,x]=w.useState({use_case_type:"comparison",expected_formats:["pdf","docx"],sample_plan:"",onboarding_notes:"",learning_mode:"ai_assisted_bootstrap"}),[k,p]=w.useState({baseline:null,revised:null,variationPairs:[]}),[d,m]=w.useState(!0),[b,j]=w.useState(null),[C,E]=w.useState({baseline:null,revised:null,variations:[]}),[z,D]=w.useState([]),[$,F]=w.useState(!0),[Y,le]=w.useState(""),[ht,Z]=w.useState(""),[Ke,V]=w.useState(""),N=()=>({"Content-Type":"application/json","X-User-Role":window.sessionStorage.getItem("simulated_role")||"platform_admin"}),T=async()=>{F(!0),Z("");try{const S=await gr("/admin/datasets",{headers:N()});t(S.datasets||[])}catch(S){Z(ue(S))}finally{F(!1)}};w.useEffect(()=>{T()},[]);const L=async S=>{var I;n(S),Z(""),V("");try{const se=await gr(`/admin/datasets/${S}`,{headers:N()});o(se),c(se.prompt_guidelines||""),f(se.allowed_roles||[]),x({use_case_type:se.use_case_type||"comparison",expected_formats:se.expected_formats||["pdf","docx"],sample_plan:se.sample_plan||"",onboarding_notes:se.onboarding_notes||"",learning_mode:se.learning_mode||"deterministic_first"}),y(JSON.stringify(((I=se.template_profile)==null?void 0:I.column_rules)||[],null,2)),await Q(S)}catch(se){Z(ue(se))}},Q=async S=>{try{const I=await gr(`/admin/datasets/${S}/documents`,{headers:N()});D(I.documents||[])}catch{D([])}},ne=async S=>{S.preventDefault(),le("create"),Z(""),V("");try{const I=await gr("/admin/datasets",{method:"POST",headers:N(),body:JSON.stringify(i)});let se="";I.id&&nn(k)&&(await R(I.id,k,i.onboarding_notes,i.learning_mode==="ai_assisted_bootstrap"),se=" Sample documents learned and model profile bootstrapped."),V(`Use case created.${se}`),l(xu),p({baseline:null,revised:null,variationPairs:[]}),j(null),await T(),I.id&&await L(I.id)}catch(I){Z(ue(I))}finally{le("")}},at=S=>{try{const I=yu(g);if(I.some(Kr=>Kr.role===S)){V(`A rule for label '${S}' already exists.`);return}const se=[...I,{pattern:`.*${S.toLowerCase().replace(/_/g,".*")}.*`,role:S}];y(JSON.stringify(se,null,2)),V(`Added suggested mapping rule for '${S}'. Click 'Save profile settings' to apply.`)}catch{Z("Column rules JSON is malformed. Please fix it before adding labels.")}},Fe=async()=>{if(r){le("save"),Z(""),V("");try{await gr(`/admin/datasets/${r}`,{method:"PUT",headers:N(),body:JSON.stringify({prompt_guidelines:u,allowed_roles:h,column_rules:yu(g),...v})}),V("Use case settings saved."),await T(),await L(r)}catch(S){Z(ue(S))}finally{le("")}}},A=async S=>{if(S.preventDefault(),!(!r||!nn(C))){le("bootstrap"),Z(""),V("");try{await R(r,C,v.onboarding_notes||"",v.learning_mode==="ai_assisted_bootstrap"),V("Sample documents learned and model profile updated."),E({baseline:null,revised:null,variations:[]}),await L(r)}catch(I){Z(ue(I))}finally{le("")}}},R=async(S,I,se,Kr)=>{const Et=new FormData;I.baseline&&Et.append("baseline",I.baseline),I.revised&&Et.append("revised",I.revised),Fs(I).forEach(Kd=>Et.append("variations",Kd)),Et.append("notes",se||""),Et.append("use_llm",String(Kr));const po=await fetch(`${B}/admin/datasets/${S}/samples`,{method:"POST",headers:{"X-User-Role":window.sessionStorage.getItem("simulated_role")||"platform_admin"},body:Et});if(!po.ok)throw new Error(await pe(po));return po.json()},K=async()=>{if(nn(k)){le("analyze"),Z(""),V("");try{const S=new FormData;k.baseline&&S.append("baseline",k.baseline),k.revised&&S.append("revised",k.revised),Fs(k).forEach(Et=>S.append("variations",Et)),S.append("supplier",i.supplier||""),S.append("family_name",i.family_name||""),S.append("domain",i.domain||"generic"),S.append("use_case_type",i.use_case_type||"comparison"),S.append("expected_formats",(i.expected_formats||[]).join(",")),S.append("notes",i.onboarding_notes||i.sample_plan||""),S.append("use_llm",String(d));const I=await fetch(`${B}/admin/analyze-use-case-samples`,{method:"POST",headers:{"X-User-Role":window.sessionStorage.getItem("simulated_role")||"platform_admin"},body:S});if(I.status===404)throw new Error("Sample analyzer endpoint was not found in the backend. Deploy the latest backend image that includes POST /admin/analyze-use-case-samples.");if(!I.ok)throw new Error(await pe(I));const se=await I.json(),Kr=se.suggested_dataset||{};j(se),l({...i,...Kr,allowed_roles:i.allowed_roles||[],learning_mode:d?"ai_assisted_bootstrap":"deterministic_first"}),V(d?"Sample analysis complete. Review the suggested use case model before creating it.":"Deterministic sample scan complete. Review the suggested use case model before creating it.")}catch(S){Z(ue(S))}finally{le("")}}},ae=async()=>{if(!(!r||!a)){le("delete"),Z(""),V("");try{await gr(`/admin/datasets/${r}`,{method:"DELETE",headers:N()}),V("Use case deleted."),n(""),o(null),D([]),await T()}catch(S){Z(ue(S))}finally{le("")}}};return s.jsxs("section",{className:"admin-studio",children:[s.jsx("div",{className:"admin-intro",children:s.jsxs("div",{children:[s.jsx("h2",{children:"Use Case Onboarding"}),s.jsx("p",{children:"Create document models from representative samples. Use AI to suggest metadata, then keep governance and access settings with the saved use case."})]})}),Ke&&s.jsx("div",{className:"admin-notice",children:Ke}),ht&&s.jsx(In,{message:ht}),s.jsxs("div",{className:"admin-grid",children:[s.jsxs("aside",{className:"admin-panel",children:[s.jsxs("div",{className:"admin-panel-head",children:[s.jsx("h3",{children:"Use Cases"}),s.jsx("button",{type:"button",className:"ghost-action compact",onClick:T,children:"Refresh"})]}),$?s.jsx(Bn,{label:"Loading use cases"}):e.length===0?s.jsx(Vt,{label:"No use cases onboarded yet."}):s.jsx("div",{className:"dataset-list",children:e.map(S=>s.jsxs("button",{type:"button",className:`dataset-item${r===S.id?" active":""}`,onClick:()=>L(S.id),children:[s.jsx("strong",{children:S.supplier}),s.jsx("span",{children:S.family_name}),s.jsxs("small",{children:[S.use_case_type||"comparison"," · ",(S.expected_formats||[]).join(", ")||"formats"," · ",(S.allowed_roles||[]).length||"all"," roles"]})]},S.id))})]}),s.jsxs("main",{className:"admin-panel",children:[s.jsx("div",{className:"admin-panel-head",children:s.jsxs("div",{children:[s.jsx("h3",{children:"Onboard Document Model"}),s.jsx("p",{children:"Start with baseline, revised, or layout samples. The platform learns the structure and suggests the use-case metadata."})]})}),s.jsxs("form",{className:"admin-form onboarding-flow",onSubmit:ne,children:[s.jsxs("section",{className:"admin-review-card",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Use Case Identity"}),s.jsx("p",{children:"Define the business model before uploading samples. Analysis will use these values as context instead of guessing from file names."})]}),s.jsxs("div",{className:"admin-review-grid",children:[s.jsxs("label",{children:["Supplier or entity",s.jsx("input",{value:i.supplier,required:!0,onChange:S=>l({...i,supplier:S.target.value}),placeholder:"Ford, HR, Finance, Legal"})]}),s.jsxs("label",{children:["Use case or family",s.jsx("input",{value:i.family_name,required:!0,onChange:S=>l({...i,family_name:S.target.value}),placeholder:"Order Guide, Policy, Contract"})]}),s.jsxs("label",{children:["Use case type",s.jsxs("select",{value:i.use_case_type,onChange:S=>l({...i,use_case_type:S.target.value}),children:[s.jsx("option",{value:"comparison",children:"Comparison"}),s.jsx("option",{value:"extraction",children:"Extraction"})]})]}),s.jsxs("label",{children:["Domain",s.jsxs("select",{value:i.domain,onChange:S=>l({...i,domain:S.target.value}),children:[s.jsx("option",{value:"generic",children:"Generic"}),s.jsx("option",{value:"automotive",children:"Automotive"}),s.jsx("option",{value:"legal",children:"Legal"}),s.jsx("option",{value:"financial",children:"Financial"}),s.jsx("option",{value:"hr",children:"HR"}),s.jsx("option",{value:"engineering",children:"Engineering"})]})]}),s.jsx("div",{className:"admin-wide-field",children:s.jsx(vu,{value:i.expected_formats,onChange:S=>l({...i,expected_formats:S})})})]})]}),s.jsxs("section",{className:"sample-intake-card",children:[s.jsxs("div",{className:"sample-intake-head",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Training Samples"}),s.jsx("p",{children:"Attach one baseline and one revised document. Add variation pairs only when you have alternate layouts, suppliers, model years, or document structures."})]}),s.jsxs("label",{className:"ai-toggle",children:[s.jsx("input",{type:"checkbox",checked:d,onChange:S=>m(S.target.checked)}),"Analyze with GPT-4o"]})]}),s.jsxs("div",{className:"sample-pair-grid",children:[s.jsxs("label",{children:["Baseline sample",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:S=>{var I;return p({...k,baseline:((I=S.target.files)==null?void 0:I[0])||null})}})]}),s.jsxs("label",{children:["Revised sample",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:S=>{var I;return p({...k,revised:((I=S.target.files)==null?void 0:I[0])||null})}})]})]}),s.jsx(cg,{value:k.variationPairs,onChange:S=>p({...k,variationPairs:S})}),s.jsxs("div",{className:"sample-actions",children:[s.jsx("button",{type:"button",className:"secondary-action",onClick:K,disabled:!nn(k)||Y==="analyze",children:Y==="analyze"?"Analyzing samples":"Analyze samples"}),s.jsx("span",{children:nn(k)?"Analysis can prefill the fields below. You can still edit everything manually.":"Attach at least one sample to run analysis."})]})]}),b?s.jsx(dg,{data:b}):null,s.jsxs("section",{className:"admin-review-card",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Generated Metadata"}),s.jsx("p",{children:"Analysis fills this section with document understanding, extraction focus, accuracy hints, and reviewer notes. You can also maintain it manually."})]}),s.jsxs("div",{className:"admin-review-grid",children:[s.jsxs("label",{children:["Content description",s.jsx("textarea",{value:i.description,onChange:S=>l({...i,description:S.target.value}),placeholder:"Describe the documents, expected fields, tables, identifiers, and business context."})]}),s.jsxs("label",{children:["Onboarding notes",s.jsx("textarea",{value:i.onboarding_notes,onChange:S=>l({...i,onboarding_notes:S.target.value}),placeholder:"Known pain points, nested headers, language handling, reviewer expectations, or accuracy targets."})]}),s.jsxs("label",{className:"admin-wide-field",children:["Sample strategy",s.jsx("textarea",{value:i.sample_plan,onChange:S=>l({...i,sample_plan:S.target.value}),placeholder:"How many baseline/revised/variation samples should represent this model?"})]})]})]}),s.jsx("button",{type:"submit",className:"primary-action",disabled:Y==="create",children:Y==="create"?"Creating":"Create use case"})]})]})]}),s.jsx("section",{className:"admin-panel",children:a?s.jsxs("div",{className:"admin-detail",children:[s.jsxs("div",{className:"admin-detail-head",children:[s.jsxs("div",{children:[s.jsxs("h3",{children:[a.supplier," · ",a.family_name]}),s.jsx("p",{children:a.description||"No description yet."}),s.jsxs("span",{className:"admin-model-badge",children:[v.use_case_type," model · ",(v.expected_formats||[]).join(", ")]})]}),s.jsx("button",{type:"button",className:"danger-action compact",onClick:ae,disabled:Y==="delete",children:Y==="delete"?"Deleting":"Delete"})]}),s.jsxs("div",{className:"admin-config-grid",children:[s.jsxs("label",{children:["Use case type",s.jsxs("select",{value:v.use_case_type,onChange:S=>x({...v,use_case_type:S.target.value}),children:[s.jsx("option",{value:"comparison",children:"Comparison"}),s.jsx("option",{value:"extraction",children:"Extraction"})]})]}),s.jsxs("label",{children:["Learning mode",s.jsx("select",{value:v.learning_mode,onChange:S=>x({...v,learning_mode:S.target.value}),children:ig.map(([S,I])=>s.jsx("option",{value:S,children:I},S))})]}),s.jsx("div",{className:"admin-wide-field",children:s.jsx(vu,{value:v.expected_formats,onChange:S=>x({...v,expected_formats:S})})}),s.jsxs("label",{children:["Sample strategy",s.jsx("textarea",{value:v.sample_plan,onChange:S=>x({...v,sample_plan:S.target.value}),placeholder:"How many samples or variations should represent this model?"})]}),s.jsxs("label",{children:["Onboarding notes",s.jsx("textarea",{value:v.onboarding_notes,onChange:S=>x({...v,onboarding_notes:S.target.value}),placeholder:"Business context, known table layouts, accuracy targets, and reviewer comments."})]}),s.jsxs("label",{children:["Prompt and extraction guidelines",s.jsx("textarea",{value:u,onChange:S=>c(S.target.value),placeholder:"Example: prioritize PCB thickness, PCV code changes, nested pricing rows, or legal obligations."})]}),s.jsxs("label",{children:["Column rules JSON",s.jsx("textarea",{className:"mono",value:g,onChange:S=>y(S.target.value)})]})]}),s.jsx(pg,{value:h,onChange:f}),s.jsx("button",{type:"button",className:"primary-action",onClick:Fe,disabled:Y==="save",children:Y==="save"?"Saving":"Save profile settings"}),s.jsxs("form",{className:"seed-form",onSubmit:A,children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Sample Document Learning"}),s.jsx("p",{children:"For comparison models, upload a baseline, revised document, and any format/layout variations. The profile stores structure, page range, table signatures, stable keys, and reviewer guidance."})]}),s.jsxs("div",{className:"sample-upload-grid",children:[s.jsxs("label",{children:["Baseline sample",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:S=>{var I;return E({...C,baseline:((I=S.target.files)==null?void 0:I[0])||null})}})]}),s.jsxs("label",{children:["Revised sample",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:S=>{var I;return E({...C,revised:((I=S.target.files)==null?void 0:I[0])||null})}})]}),s.jsxs("label",{children:["Additional variations",s.jsx("input",{type:"file",multiple:!0,accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:S=>E({...C,variations:Array.from(S.target.files||[])})})]})]}),s.jsx("button",{type:"submit",className:"primary-action",disabled:!C.baseline&&!C.revised&&C.variations.length===0||Y==="bootstrap",children:Y==="bootstrap"?"Learning":"Learn from samples"})]}),s.jsxs("div",{className:"admin-profile-grid",children:[s.jsx(fg,{profile:(U=a.template_profile)==null?void 0:U.sample_profile}),s.jsx(Uo,{title:"Sample Documents",items:z,labelKey:"label",valueKey:"page_count"}),s.jsx(hg,{profile:(ye=a.template_profile)==null?void 0:ye.ai_reasoning_profile,onAddLabel:at}),s.jsx(Uo,{title:"Stable Keys",items:(ot=a.template_profile)==null?void 0:ot.stable_key_patterns,labelKey:"name",valueKey:"regex"}),s.jsx(Uo,{title:"Column Rules",items:(Wi=a.template_profile)==null?void 0:Wi.column_rules,labelKey:"role",valueKey:"pattern"})]})]}):s.jsx(Vt,{label:"Select a use case to configure profile learning."})})]})}function nn(e){var t;return!!(e!=null&&e.baseline||e!=null&&e.revised||(t=e==null?void 0:e.variations)!=null&&t.length||Fs(e).length)}function Fs(e){const t=Array.isArray(e==null?void 0:e.variations)?e.variations:[],r=Array.isArray(e==null?void 0:e.variationPairs)?e.variationPairs.flatMap(n=>[n.baseline,n.revised].filter(Boolean)):[];return[...t,...r]}function cg({value:e,onChange:t}){const r=Array.isArray(e)?e:[],n=(o,i)=>{t(r.map(l=>l.id===o?{...l,...i}:l))},a=o=>{t(r.filter(i=>i.id!==o))};return s.jsxs("div",{className:"variation-pairs",children:[s.jsxs("div",{className:"variation-pairs-head",children:[s.jsxs("div",{children:[s.jsx("h5",{children:"Variation pairs"}),s.jsx("p",{children:"Add only when another baseline/revised pair represents a different layout or document family variation."})]}),s.jsx("button",{type:"button",className:"secondary-action compact",onClick:()=>t([...r,lg()]),disabled:r.length>=5,children:"Add pair"})]}),r.length?s.jsx("div",{className:"variation-pair-list",children:r.map((o,i)=>s.jsxs("div",{className:"variation-pair-row",children:[s.jsxs("strong",{children:["Variation ",i+1]}),s.jsxs("label",{children:["Baseline",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:l=>{var u;return n(o.id,{baseline:((u=l.target.files)==null?void 0:u[0])||null})}})]}),s.jsxs("label",{children:["Revised",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:l=>{var u;return n(o.id,{revised:((u=l.target.files)==null?void 0:u[0])||null})}})]}),s.jsx("button",{type:"button",className:"ghost-action compact",onClick:()=>a(o.id),children:"Remove"})]},o.id))}):s.jsx("span",{className:"variation-empty",children:"No variation pairs added."})]})}function dg({data:e}){const t=(e==null?void 0:e.suggested_dataset)||{},r=(e==null?void 0:e.analysis)||{},n=r.confidence_score!==void 0?Math.round(Number(r.confidence_score||0)*100):null,a=Array.isArray(r.complexity_reasons)?r.complexity_reasons:[],o=Array.isArray(r.enhancement_tips)?r.enhancement_tips:[];return s.jsxs("section",{className:"analysis-card",children:[s.jsxs("div",{className:"analysis-card-head",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Sample Analysis"}),s.jsx("p",{children:e!=null&&e.used_ai?"GPT-4o assisted the metadata suggestions.":"Deterministic scan generated metadata suggestions."})]}),s.jsxs("span",{children:[String(r.complexity_rating||"standard")," complexity"]})]}),s.jsxs("div",{className:"analysis-grid",children:[s.jsxs("p",{children:[s.jsx("strong",{children:t.supplier||"Supplier pending"}),s.jsx("small",{children:t.family_name||"Use case pending"})]}),s.jsxs("p",{children:[s.jsx("strong",{children:t.use_case_type||"comparison"}),s.jsx("small",{children:(t.expected_formats||[]).join(", ")||"formats pending"})]}),s.jsxs("p",{children:[s.jsx("strong",{children:t.domain||"generic"}),s.jsx("small",{children:n!==null?`${n}% estimated parser confidence`:"confidence pending"})]})]}),a.length||o.length?s.jsxs("div",{className:"analysis-notes",children:[a.slice(0,3).map((i,l)=>s.jsx("span",{children:i},`reason-${l}`)),o.slice(0,3).map((i,l)=>s.jsx("span",{children:i},`tip-${l}`))]}):null]})}function pg({value:e,onChange:t}){const r=n=>{t(e.includes(n)?e.filter(a=>a!==n):[...e,n])};return s.jsxs("fieldset",{className:"role-picker",children:[s.jsx("legend",{children:"Allowed roles"}),og.map(([n,a])=>s.jsxs("label",{children:[s.jsx("input",{type:"checkbox",checked:e.includes(n),onChange:()=>r(n)}),a]},n))]})}function vu({value:e,onChange:t}){const r=Array.isArray(e)?e:[],n=a=>{t(r.includes(a)?r.filter(o=>o!==a):[...r,a])};return s.jsxs("fieldset",{className:"format-picker",children:[s.jsx("legend",{children:"Expected formats"}),sg.map(([a,o])=>s.jsxs("label",{children:[s.jsx("input",{type:"checkbox",checked:r.includes(a),onChange:()=>n(a)}),o]},a))]})}function fg({profile:e}){const t=e&&typeof e=="object"?e:{};return s.jsxs("div",{className:"profile-card",children:[s.jsx("h4",{children:"Model Samples"}),s.jsxs("p",{children:[s.jsxs("strong",{children:[String(t.sample_count||0)," samples"]}),s.jsx("small",{children:(t.roles_present||[]).join(", ")||"No roles learned yet"})]}),s.jsxs("p",{children:[s.jsxs("strong",{children:[String(t.average_pages||0)," avg pages"]}),s.jsxs("small",{children:[String(t.min_pages||0)," min · ",String(t.max_pages||0)," max"]})]}),t.last_bootstrap_notes?s.jsxs("p",{children:[s.jsx("strong",{children:"Latest notes"}),s.jsx("small",{children:String(t.last_bootstrap_notes)})]}):null]})}function Uo({title:e,items:t,labelKey:r,valueKey:n}){const a=Array.isArray(t)?t:[];return s.jsxs("div",{className:"profile-card",children:[s.jsx("h4",{children:e}),a.length===0?s.jsx("span",{children:"No entries yet."}):a.slice(0,8).map((o,i)=>s.jsxs("p",{children:[s.jsx("strong",{children:String((o==null?void 0:o[r])??"Item")}),s.jsx("small",{children:String((o==null?void 0:o[n])??"")})]},i))]})}function hg({profile:e,onAddLabel:t}){const r=e&&typeof e=="object"?e:{},n=String(r.complexity_rating||"low").toUpperCase(),a=r.confidence_score!==void 0?Math.round(r.confidence_score*100):null,o=Array.isArray(r.complexity_reasons)?r.complexity_reasons:[],i=Array.isArray(r.enhancement_tips)?r.enhancement_tips:[],l=Array.isArray(r.suggested_data_labels)?r.suggested_data_labels:[],u=n==="HIGH"?"#9f2525":n==="MEDIUM"?"#c45510":"#1f7e41",c=n==="HIGH"?"#fff7f7":n==="MEDIUM"?"#fffbf7":"#f7fff9",h=n==="HIGH"?"#f1c6c6":n==="MEDIUM"?"#f7d6c1":"#c1f1d1";return s.jsxs("div",{className:"profile-card",style:{gridColumn:"span 2"},children:[s.jsxs("h4",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("span",{children:"AI Onboarding Analysis"}),s.jsxs("span",{style:{fontSize:11,fontWeight:700,color:u,background:c,border:`1px solid ${h}`,padding:"2px 8px",borderRadius:99},children:[n," COMPLEXITY"]})]}),a!==null&&s.jsxs("p",{style:{marginTop:8},children:[s.jsxs("strong",{children:["Parser Confidence Rating: ",a,"%"]}),s.jsx("small",{children:"Estimated baseline accuracy without AI assistance"})]}),o.length>0&&s.jsxs("p",{style:{marginTop:10},children:[s.jsx("strong",{children:"Structural Complexity Indicators"}),s.jsx("small",{style:{display:"block",marginTop:4},children:o.map((f,g)=>s.jsxs("span",{style:{display:"block",color:"var(--text-primary)"},children:["• ",f]},g))})]}),i.length>0&&s.jsxs("p",{style:{marginTop:10},children:[s.jsx("strong",{children:"Extraction Optimization Recommendations"}),s.jsx("small",{style:{display:"block",marginTop:4},children:i.map((f,g)=>s.jsxs("span",{style:{display:"block",color:"var(--text-primary)"},children:["• ",f]},g))})]}),l.length>0&&s.jsxs("p",{style:{marginTop:12},children:[s.jsx("strong",{children:"Suggested Data Labels (Click to map)"}),s.jsx("span",{style:{display:"flex",flexWrap:"wrap",gap:6,marginTop:6},children:l.map(f=>s.jsxs("button",{type:"button",onClick:()=>t(f),style:{background:"var(--surface-sunken)",border:"1px solid var(--border)",color:"var(--text-primary)",borderRadius:"4px",padding:"2px 8px",fontSize:12,fontWeight:650,cursor:"pointer"},title:"Click to automatically create a mapping rule for this label",children:["Add ",f]},f))})]})]})}async function gr(e,t={}){const r=await fetch(`${B}${e}`,t);if(!r.ok)throw new Error(await pe(r));return r.json()}function yu(e){const t=e.trim();if(!t)return[];const r=JSON.parse(t);if(!Array.isArray(r))throw new Error("Column rules must be a JSON array.");return r}function mg(e){w.useEffect(()=>{document.title=`${e} · Altrai`},[e])}const ia=e=>Number(e||0).toLocaleString();function gg(e,t,r){const n=String(e||"").toLowerCase(),a=n.includes("gpt-4")&&!n.includes("mini"),o=a?2.5:.15,i=a?10:.6;return(Number(t||0)*o+Number(r||0)*i)/1e6}function xg({runId:e}){const[t,r]=w.useState(""),[n,a]=w.useState("fast"),[o,i]=w.useState("gpt-4o"),[l,u]=w.useState([]),[c,h]=w.useState({}),[f,g]=w.useState(!1),y=w.useMemo(()=>l.reduce((x,k)=>{const p=k.usage;return p&&(x.prompt+=Number(p.prompt_tokens||0),x.completion+=Number(p.completion_tokens||0),x.total+=Number(p.total_tokens||0),x.calls+=1,x.cost+=gg(k.model,p.prompt_tokens,p.completion_tokens)),x},{prompt:0,completion:0,total:0,calls:0,cost:0}),[l]),v=async()=>{const x=t.trim();if(!x||f||!e)return;const k=`user-${Date.now()}`,p=`answer-${Date.now()}`;u(d=>[...d,{id:k,role:"user",text:x,timestamp:new Date().toLocaleTimeString()}]),r(""),g(!0);try{const d=await fetch(`${B}/runs/${e}/query`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:x,mode:n,response_language:"source",model_name:n==="ai"?o:null})});if(!d.ok)throw new Error(await pe(d));const m=await d.json();u(b=>{var j;return[...b,{id:p,role:"assistant",text:m.answer||`I found ${((j=m.rows)==null?void 0:j.length)||0} matching changes.`,rows:m.rows||[],columns:m.columns||om(m.rows||[]),mode:m.mode||n,model:n==="ai"?o:null,usage:m.usage,confidence:m.confidence,warning:m.ai_error||(m.ai_unavailable?"AI response was unavailable; showing grounded evidence results.":""),timestamp:new Date().toLocaleTimeString()}]})}catch(d){u(m=>[...m,{id:p,role:"assistant",text:ue(d),rows:[],timestamp:new Date().toLocaleTimeString(),isError:!0}])}finally{g(!1)}};return s.jsxs("section",{className:"query-workbench",children:[l.length===0?s.jsx(Vt,{label:"Ask what changed, why it matters, or where the evidence appears in the compared documents."}):s.jsx("div",{className:"query-chat-log",children:l.map(x=>{var k,p;return s.jsxs("article",{className:`query-message ${x.role}${x.isError?" error":""}`,children:[s.jsxs("div",{className:"query-message-meta",children:[s.jsx("span",{children:x.role==="user"?"You":x.mode==="ai"?`AI answer${x.model?` - ${x.model}`:""}`:"Natural language query"}),s.jsx("span",{children:x.timestamp})]}),s.jsx("div",{className:"query-message-text",dir:"auto",children:x.text}),x.warning&&s.jsx("div",{className:"query-warning",children:x.warning}),x.usage&&s.jsxs("div",{className:"query-usage",children:[s.jsxs("span",{children:[ia(x.usage.total_tokens)," tokens"]}),s.jsxs("span",{children:[ia(x.usage.prompt_tokens)," input / ",ia(x.usage.completion_tokens)," output"]})]}),((k=x.rows)==null?void 0:k.length)>0&&s.jsxs("div",{className:"query-evidence",children:[s.jsx("button",{type:"button",className:"key-audit-toggle",onClick:()=>h(d=>({...d,[x.id]:!d[x.id]})),children:c[x.id]?"Hide evidence":`Show evidence (${x.rows.length})`}),c[x.id]&&s.jsx("div",{className:"query-results-shell",children:(p=x.columns)!=null&&p.length?s.jsx(nr,{columns:x.columns,rows:x.rows}):x.rows.slice(0,50).map((d,m)=>s.jsx(vg,{row:d},m))})]})]},x.id)})}),y.total>0&&s.jsxs("div",{className:"query-usage-strip",children:[s.jsxs("span",{children:[ia(y.total)," tokens across ",y.calls," AI call",y.calls===1?"":"s"]}),s.jsxs("strong",{children:["$",y.cost.toFixed(5)]})]}),s.jsxs("div",{className:"query-composer",children:[s.jsx("textarea",{value:t,onChange:x=>r(x.target.value),onKeyDown:x=>{x.key==="Enter"&&!x.shiftKey&&(x.preventDefault(),v())},placeholder:"Ask about changed clauses, tables, dates, values, deleted text, or page evidence...",disabled:f,rows:3}),s.jsxs("div",{className:"query-composer-actions",children:[s.jsxs("label",{children:[s.jsx("span",{children:"Mode"}),s.jsxs("select",{value:n,onChange:x=>a(x.target.value),disabled:f,children:[s.jsx("option",{value:"fast",children:"NL query"}),s.jsx("option",{value:"ai",children:"AI chat"})]})]}),n==="ai"&&s.jsxs("label",{children:[s.jsx("span",{children:"Model"}),s.jsxs("select",{value:o,onChange:x=>i(x.target.value),disabled:f,children:[s.jsx("option",{value:"gpt-4o",children:"gpt-4o"}),s.jsx("option",{value:"gpt-4o-mini",children:"gpt-4o-mini"}),s.jsx("option",{value:"phi-4-mini",children:"phi-4-mini"})]})]}),s.jsx("button",{type:"button",className:"primary-action compact",onClick:v,disabled:f||!t.trim(),children:f?"Working":n==="ai"?"Ask AI":"Ask"})]})]})]})}function vg({row:e}){var t;return s.jsxs("div",{className:"query-result",children:[s.jsxs("div",{className:"query-result-head",children:[s.jsx(Ud,{type:Ar(e)}),e.stable_key&&s.jsx("code",{children:e.stable_key}),s.jsx("span",{children:e.citation||`page ${e.page||"-"}`})]}),e.before&&s.jsxs("div",{dir:"auto",children:[s.jsx("strong",{children:"Before:"})," ",Ve(e.before,260)]}),e.after&&s.jsxs("div",{dir:"auto",children:[s.jsx("strong",{children:"After:"})," ",Ve(e.after,260)]}),((t=e.field_changes)==null?void 0:t.length)>0&&s.jsx(Tm,{rows:e.field_changes})]})}const it=(e,t)=>{if(typeof window>"u")return t;try{const r=window.sessionStorage.getItem(`doculens_${e}`);return r!==null?JSON.parse(r):t}catch{return t}},Je=(e,t)=>{if(!(typeof window>"u"))try{window.sessionStorage.setItem(`doculens_${e}`,JSON.stringify(t))}catch(r){console.error(r)}},Us={compare:"/compare",extract:"/extract",jobs:"/work-history",agents:"/ai-agents",admin:"/admin"},yg={"/":"compare",...Object.fromEntries(Object.entries(Us).map(([e,t])=>[t,e]))},wu=e=>yg[e]||"compare";function wg(){const e=Ad(),t=Fh(),[r,n]=w.useState(()=>wu(window.location.pathname)),[a,o]=w.useState(()=>it("runId",null)),[i,l]=w.useState(()=>it("meta",null)),[u,c]=w.useState(()=>it("tab","viewer")),[h,f]=w.useState(()=>it("pageNum",1)),[g,y]=w.useState(()=>it("busy",!1)),[v,x]=w.useState(""),[k,p]=w.useState(()=>it("extractRunId",null)),[d,m]=w.useState(()=>it("extractMeta",null)),[b,j]=w.useState(()=>it("extractBusy",!1)),[C,E]=w.useState(""),[z,D]=w.useState(()=>it("extractTab","overview")),[$,F]=w.useState(""),[Y,le]=w.useState(()=>it("historyKind","all")),ht={compare:"Compare",extract:"Extract",jobs:"Work History",agents:"AI Agents",admin:"Admin Studio"}[r]||"Workspace";mg(ht),w.useEffect(()=>{Je("workspace",r)},[r]),w.useEffect(()=>{Je("runId",a)},[a]),w.useEffect(()=>{Je("meta",i)},[i]),w.useEffect(()=>{Je("tab",u)},[u]),w.useEffect(()=>{Je("pageNum",h)},[h]),w.useEffect(()=>{Je("busy",g)},[g]),w.useEffect(()=>{Je("extractRunId",k)},[k]),w.useEffect(()=>{Je("extractMeta",d)},[d]),w.useEffect(()=>{Je("extractBusy",b)},[b]),w.useEffect(()=>{Je("extractTab",z)},[z]),w.useEffect(()=>{Je("historyKind",Y)},[Y]),w.useEffect(()=>{const A=wu(e.pathname);A!==r&&n(A)},[e.pathname]),w.useEffect(()=>{r==="compare"&&u!=="viewer"&&c("viewer")},[r]);const Z=()=>{o(null),l(null),y(!1),x(""),f(1),c("viewer"),V("compare")},Ke=()=>{p(null),m(null),j(!1),E(""),D("overview"),V("extract")},V=(A,R={})=>{n(A),A==="jobs"&&le(R.historyKind||"all"),x(""),E(""),F(""),t(Us[A]||Us.compare,{replace:!1})};w.useEffect(()=>{if(!a||!g)return;let A=!1,R=null;const K=async()=>{try{const ae=await fetch(`${B}/runs/${a}`);if(!ae.ok)throw new Error(await pe(ae));const U=await ae.json();if(A)return;if(l(U),U.status==="complete"){y(!1),c("viewer");return}if(U.status==="failed"){y(!1),x(et(U.error||U.status_message||"Comparison failed."));return}R=setTimeout(K,1e3)}catch(ae){if(A)return;y(!1),x(ue(ae))}};return K(),()=>{A=!0,R&&clearTimeout(R)}},[a,g]),w.useEffect(()=>{if(!k||!b)return;let A=!1,R=null;const K=async()=>{try{const ae=await fetch(`${B}/extract-runs/${k}`);if(!ae.ok)throw new Error(await pe(ae));const U=await ae.json();if(A)return;if(m(U),U.status==="complete"){j(!1),D("overview");return}if(U.status==="failed"){j(!1),E(et(U.error||U.status_message||"Extraction failed."));return}R=setTimeout(K,1e3)}catch(ae){if(A)return;j(!1),E(ue(ae))}};return K(),()=>{A=!0,R&&clearTimeout(R)}},[k,b]);const N=async A=>{A.preventDefault();const R=new FormData(A.currentTarget),K=R.get("base"),ae=R.get("target"),U=String(R.get("family_id")||"").trim();if(!K||!ae||!K.name||!ae.name){x("Please select both documents before starting.");return}if(!U){x("Please select a document use case before starting comparison.");return}n("compare"),y(!0),x(""),o(null),f(1),c("viewer"),l({status:"uploading",status_message:"Uploading documents",progress:3,stats:{},coverage:{},n_pages_base:0,n_pages_target:0});try{const ye=await fetch(`${B}/compare`,{method:"POST",body:R});if(!ye.ok)throw new Error(await pe(ye));const ot=await ye.json();o(ot.run_id),y(ot.status!=="complete"&&ot.status!=="failed"),l({run_id:ot.run_id,status:ot.status,status_message:ot.status_message||"Starting comparison",progress:ot.progress||5,stats:{},coverage:{},n_pages_base:0,n_pages_target:0}),n("compare")}catch(ye){y(!1),x(ue(ye))}},T=async A=>{A.preventDefault();const R=new FormData(A.currentTarget),K=R.getAll("document").filter(U=>U&&U.name),ae=String(R.get("family_id")||"").trim();if(!K.length){E("Please select at least one document, spreadsheet, PDF, or image before starting extraction.");return}if(!ae){E("Please select a document use case before starting extraction.");return}n("extract"),j(!0),E(""),p(null),D("overview"),m({status:"uploading",status_message:"Uploading document",progress:3,summary:{}});try{const U=await fetch(`${B}/extract`,{method:"POST",body:R});if(!U.ok)throw new Error(await pe(U));const ye=await U.json();p(ye.run_id),j(ye.status!=="complete"&&ye.status!=="failed"),m({run_id:ye.run_id,status:ye.status,status_message:ye.status_message||"Starting extraction",progress:ye.progress||5,summary:{}}),n("extract")}catch(U){j(!1),E(ue(U))}},L=async A=>{F("");try{if(A.kind==="extraction"){const ae=await fetch(`${B}/extract-runs/${A.run_id}`);if(!ae.ok)throw new Error(await pe(ae));const U=await ae.json();o(null),l(null),y(!1),p(A.run_id),m(U),j(U.status!=="complete"&&U.status!=="failed"),D("overview"),n("extract");return}const R=await fetch(`${B}/runs/${A.run_id}`);if(!R.ok)throw new Error(await pe(R));const K=await R.json();p(null),m(null),j(!1),o(A.run_id),l(K),y(K.status!=="complete"&&K.status!=="failed"),c("viewer"),f(1),n("compare")}catch(R){F(ue(R))}},Q=async A=>{F("");try{if(A.kind==="extraction"){const R=await fetch(`${B}/extract-runs/${A.run_id}`);if(!R.ok)throw new Error(await pe(R));const K=await R.json();o(null),l(null),y(!1),p(A.run_id),m(K),j(K.status!=="complete"&&K.status!=="failed"),n("extract");return}await L(A)}catch(R){F(ue(R))}},ne=()=>{a&&(window.location.href=`${B}/runs/${a}/report.pdf`)},at=(i==null?void 0:i.status)==="complete",Fe=(d==null?void 0:d.status)==="complete";return s.jsxs("div",{children:[s.jsx("style",{children:Xh}),s.jsxs(ag,{workspace:r,runId:r==="compare"&&at?a:null,onNavigate:V,onDownloadReport:ne,children:[r==="jobs"&&s.jsx(gm,{onOpenJob:L,onAskJob:Q,error:$,historyKind:Y,onStartCompare:Z,onStartExtract:Ke}),r==="compare"&&!at&&s.jsxs("section",{className:"workflow-panel",children:[s.jsx(vm,{onUpload:N,busy:g,onAdmin:()=>V("admin")}),g&&i&&s.jsx(hu,{progress:i.progress||0,message:i.status_message||"Processing documents",status:i.status||"running"}),v&&s.jsx(In,{message:v})]}),r==="extract"&&!Fe&&s.jsxs("section",{className:"workflow-panel",children:[s.jsx(ym,{onUpload:T,busy:b,onAdmin:()=>V("admin")}),b&&d&&s.jsx(hu,{progress:d.progress||0,message:d.status_message||"Extracting document",status:d.status||"running"}),C&&s.jsx(In,{message:C})]}),r==="compare"&&at&&a&&i&&s.jsxs("section",{className:"comparison-workspace",children:[s.jsxs("div",{className:"comparison-head",children:[s.jsx("div",{children:s.jsxs("h2",{dir:"auto",children:[i.base_label||"Baseline"," → ",i.target_label||"Revised"]})}),s.jsxs("div",{className:"comparison-head-actions",children:[s.jsx("button",{type:"button",className:"ghost-action compact",onClick:Z,children:"New comparison"}),s.jsxs("div",{className:"comparison-id",children:["#",String(a).slice(0,6)]})]})]}),s.jsx(pm,{meta:i}),s.jsxs("main",{className:"comparison-flow",children:[s.jsxs("section",{className:"workspace-surface",children:[s.jsx("div",{className:"surface-title-row",children:s.jsxs("div",{children:[s.jsx("h3",{children:"Quick Summary"}),s.jsx("p",{children:"Highest-priority differences detected from the comparison evidence."})]})}),s.jsx(wm,{runId:a,meta:i,onVerifyPage:f})]}),s.jsxs("section",{className:"workspace-surface",children:[s.jsx("div",{className:"surface-title-row",children:s.jsxs("div",{children:[s.jsx("h3",{children:"Visual Comparison"}),s.jsx("p",{children:"Side-by-side verification with synchronized scroll, zoom, and document overlays."})]})}),s.jsx(bm,{runId:a,meta:i,pageNum:h,setPageNum:f})]}),s.jsxs("section",{className:"workspace-surface",children:[s.jsx("div",{className:"surface-title-row",children:s.jsxs("div",{children:[s.jsx("h3",{children:"Ask This Comparison"}),s.jsx("p",{children:"Start with natural language search. Switch to an AI model only when reasoning or richer synthesis is needed."})]})}),s.jsx(xg,{runId:a})]})]})]}),r==="extract"&&Fe&&k&&d&&s.jsx(Dm,{runId:k,meta:d,tab:z,setTab:D}),r==="agents"&&s.jsxs("section",{className:"workspace-placeholder",children:[s.jsx("h2",{children:"AI Agents"}),s.jsx("p",{children:"Future skills and multi-agent workflows will live here after the document intelligence workspace is stable."}),s.jsx("div",{className:"placeholder-list",children:s.jsx("span",{children:"Coming soon"})})]}),r==="admin"&&s.jsx(ug,{})]})]})}Bo.createRoot(document.getElementById("root")).render(s.jsx(Qa.StrictMode,{children:s.jsx(Zm,{children:s.jsx(Jh,{children:s.jsx(wg,{})})})}));
