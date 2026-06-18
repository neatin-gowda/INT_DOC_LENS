function Rp(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in e)){const o=Object.getOwnPropertyDescriptor(n,a);o&&Object.defineProperty(e,a,o.get?o:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();function Lp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vc={exports:{}},Ya={},qc={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mn=Symbol.for("react.element"),Ap=Symbol.for("react.portal"),Ip=Symbol.for("react.fragment"),Mp=Symbol.for("react.strict_mode"),Op=Symbol.for("react.profiler"),Fp=Symbol.for("react.provider"),Up=Symbol.for("react.context"),Bp=Symbol.for("react.forward_ref"),Wp=Symbol.for("react.suspense"),Vp=Symbol.for("react.memo"),qp=Symbol.for("react.lazy"),ul=Symbol.iterator;function Hp(e){return e===null||typeof e!="object"?null:(e=ul&&e[ul]||e["@@iterator"],typeof e=="function"?e:null)}var Hc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qc=Object.assign,Kc={};function Qr(e,t,r){this.props=e,this.context=t,this.refs=Kc,this.updater=r||Hc}Qr.prototype.isReactComponent={};Qr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gc(){}Gc.prototype=Qr.prototype;function Ks(e,t,r){this.props=e,this.context=t,this.refs=Kc,this.updater=r||Hc}var Gs=Ks.prototype=new Gc;Gs.constructor=Ks;Qc(Gs,Qr.prototype);Gs.isPureReactComponent=!0;var dl=Array.isArray,Jc=Object.prototype.hasOwnProperty,Js={current:null},Yc={key:!0,ref:!0,__self:!0,__source:!0};function Xc(e,t,r){var n,a={},o=null,i=null;if(t!=null)for(n in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Jc.call(t,n)&&!Yc.hasOwnProperty(n)&&(a[n]=t[n]);var l=arguments.length-2;if(l===1)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)a[n]===void 0&&(a[n]=l[n]);return{$$typeof:Mn,type:e,key:o,ref:i,props:a,_owner:Js.current}}function Qp(e,t){return{$$typeof:Mn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ys(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mn}function Kp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var pl=/\/+/g;function vo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Kp(""+e.key):t.toString(36)}function pa(e,t,r,n,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Mn:case Ap:i=!0}}if(i)return i=e,a=a(i),e=n===""?"."+vo(i,0):n,dl(a)?(r="",e!=null&&(r=e.replace(pl,"$&/")+"/"),pa(a,t,r,"",function(u){return u})):a!=null&&(Ys(a)&&(a=Qp(a,r+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(pl,"$&/")+"/")+e)),t.push(a)),1;if(i=0,n=n===""?".":n+":",dl(e))for(var l=0;l<e.length;l++){o=e[l];var c=n+vo(o,l);i+=pa(o,t,r,c,a)}else if(c=Hp(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=n+vo(o,l++),i+=pa(o,t,r,c,a);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Hn(e,t,r){if(e==null)return e;var n=[],a=0;return pa(e,n,"","",function(o){return t.call(r,o,a++)}),n}function Gp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},fa={transition:null},Jp={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:fa,ReactCurrentOwner:Js};function Zc(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:Hn,forEach:function(e,t,r){Hn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Hn(e,function(){t++}),t},toArray:function(e){return Hn(e,function(t){return t})||[]},only:function(e){if(!Ys(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=Qr;B.Fragment=Ip;B.Profiler=Op;B.PureComponent=Ks;B.StrictMode=Mp;B.Suspense=Wp;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jp;B.act=Zc;B.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Qc({},e.props),a=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Js.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Jc.call(t,c)&&!Yc.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:Mn,type:e.type,key:a,ref:o,props:n,_owner:i}};B.createContext=function(e){return e={$$typeof:Up,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Fp,_context:e},e.Consumer=e};B.createElement=Xc;B.createFactory=function(e){var t=Xc.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:Bp,render:e}};B.isValidElement=Ys;B.lazy=function(e){return{$$typeof:qp,_payload:{_status:-1,_result:e},_init:Gp}};B.memo=function(e,t){return{$$typeof:Vp,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=fa.transition;fa.transition={};try{e()}finally{fa.transition=t}};B.unstable_act=Zc;B.useCallback=function(e,t){return Pe.current.useCallback(e,t)};B.useContext=function(e){return Pe.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};B.useEffect=function(e,t){return Pe.current.useEffect(e,t)};B.useId=function(){return Pe.current.useId()};B.useImperativeHandle=function(e,t,r){return Pe.current.useImperativeHandle(e,t,r)};B.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return Pe.current.useMemo(e,t)};B.useReducer=function(e,t,r){return Pe.current.useReducer(e,t,r)};B.useRef=function(e){return Pe.current.useRef(e)};B.useState=function(e){return Pe.current.useState(e)};B.useSyncExternalStore=function(e,t,r){return Pe.current.useSyncExternalStore(e,t,r)};B.useTransition=function(){return Pe.current.useTransition()};B.version="18.3.1";qc.exports=B;var y=qc.exports;const Xa=Lp(y),Yp=Rp({__proto__:null,default:Xa},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp=y,Zp=Symbol.for("react.element"),ef=Symbol.for("react.fragment"),tf=Object.prototype.hasOwnProperty,rf=Xp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nf={key:!0,ref:!0,__self:!0,__source:!0};function eu(e,t,r){var n,a={},o=null,i=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(n in t)tf.call(t,n)&&!nf.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:Zp,type:e,key:o,ref:i,props:a,_owner:rf.current}}Ya.Fragment=ef;Ya.jsx=eu;Ya.jsxs=eu;Vc.exports=Ya;var s=Vc.exports,Ko={},tu={exports:{}},We={},ru={exports:{}},nu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,R){var A=z.length;z.push(R);e:for(;0<A;){var Q=A-1>>>1,oe=z[Q];if(0<a(oe,R))z[Q]=R,z[A]=oe,A=Q;else break e}}function r(z){return z.length===0?null:z[0]}function n(z){if(z.length===0)return null;var R=z[0],A=z.pop();if(A!==R){z[0]=A;e:for(var Q=0,oe=z.length,Xe=oe>>>1;Q<Xe;){var J=2*(Q+1)-1,L=z[J],M=J+1,O=z[M];if(0>a(L,A))M<oe&&0>a(O,L)?(z[Q]=O,z[M]=A,Q=M):(z[Q]=L,z[J]=A,Q=J);else if(M<oe&&0>a(O,A))z[Q]=O,z[M]=A,Q=M;else break e}}return R}function a(z,R){var A=z.sortIndex-R.sortIndex;return A!==0?A:z.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var c=[],u=[],m=1,p=null,g=3,x=!1,v=!1,b=!1,S=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(z){for(var R=r(u);R!==null;){if(R.callback===null)n(u);else if(R.startTime<=z)n(u),R.sortIndex=R.expirationTime,t(c,R);else break;R=r(u)}}function w(z){if(b=!1,h(z),!v)if(r(c)!==null)v=!0,Ye(_);else{var R=r(u);R!==null&&Ne(w,R.startTime-z)}}function _(z,R){v=!1,b&&(b=!1,f(C),C=-1),x=!0;var A=g;try{for(h(R),p=r(c);p!==null&&(!(p.expirationTime>R)||z&&!U());){var Q=p.callback;if(typeof Q=="function"){p.callback=null,g=p.priorityLevel;var oe=Q(p.expirationTime<=R);R=e.unstable_now(),typeof oe=="function"?p.callback=oe:p===r(c)&&n(c),h(R)}else n(c);p=r(c)}if(p!==null)var Xe=!0;else{var J=r(u);J!==null&&Ne(w,J.startTime-R),Xe=!1}return Xe}finally{p=null,g=A,x=!1}}var j=!1,N=null,C=-1,P=5,D=-1;function U(){return!(e.unstable_now()-D<P)}function _e(){if(N!==null){var z=e.unstable_now();D=z;var R=!0;try{R=N(!0,z)}finally{R?Me():(j=!1,N=null)}}else j=!1}var Me;if(typeof d=="function")Me=function(){d(_e)};else if(typeof MessageChannel<"u"){var Nt=new MessageChannel,Ee=Nt.port2;Nt.port1.onmessage=_e,Me=function(){Ee.postMessage(null)}}else Me=function(){S(_e,0)};function Ye(z){N=z,j||(j=!0,Me())}function Ne(z,R){C=S(function(){z(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,Ye(_))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(z){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var A=g;g=R;try{return z()}finally{g=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,R){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var A=g;g=z;try{return R()}finally{g=A}},e.unstable_scheduleCallback=function(z,R,A){var Q=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?Q+A:Q):A=Q,z){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=A+oe,z={id:m++,callback:R,priorityLevel:z,startTime:A,expirationTime:oe,sortIndex:-1},A>Q?(z.sortIndex=A,t(u,z),r(c)===null&&z===r(u)&&(b?(f(C),C=-1):b=!0,Ne(w,A-Q))):(z.sortIndex=oe,t(c,z),v||x||(v=!0,Ye(_))),z},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(z){var R=g;return function(){var A=g;g=R;try{return z.apply(this,arguments)}finally{g=A}}}})(nu);ru.exports=nu;var af=ru.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var of=y,Be=af;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var au=new Set,yn={};function dr(e,t){Fr(e,t),Fr(e+"Capture",t)}function Fr(e,t){for(yn[e]=t,e=0;e<t.length;e++)au.add(t[e])}var bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Go=Object.prototype.hasOwnProperty,sf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fl={},ml={};function lf(e){return Go.call(ml,e)?!0:Go.call(fl,e)?!1:sf.test(e)?ml[e]=!0:(fl[e]=!0,!1)}function cf(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function uf(e,t,r,n){if(t===null||typeof t>"u"||cf(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Te(e,t,r,n,a,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ve[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ve[t]=new Te(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ve[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ve[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ve[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ve[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ve[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ve[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ve[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xs=/[\-:]([a-z])/g;function Zs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xs,Zs);ve[t]=new Te(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xs,Zs);ve[t]=new Te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xs,Zs);ve[t]=new Te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ve[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});ve.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ve[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function ei(e,t,r,n){var a=ve.hasOwnProperty(t)?ve[t]:null;(a!==null?a.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(uf(t,r,a,n)&&(r=null),n||a===null?lf(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,n=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var _t=of.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qn=Symbol.for("react.element"),vr=Symbol.for("react.portal"),yr=Symbol.for("react.fragment"),ti=Symbol.for("react.strict_mode"),Jo=Symbol.for("react.profiler"),ou=Symbol.for("react.provider"),su=Symbol.for("react.context"),ri=Symbol.for("react.forward_ref"),Yo=Symbol.for("react.suspense"),Xo=Symbol.for("react.suspense_list"),ni=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),iu=Symbol.for("react.offscreen"),hl=Symbol.iterator;function Yr(e){return e===null||typeof e!="object"?null:(e=hl&&e[hl]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Object.assign,yo;function on(e){if(yo===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);yo=t&&t[1]||""}return`
`+yo+e}var wo=!1;function bo(e,t){if(!e||wo)return"";wo=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),o=n.stack.split(`
`),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(i!==1||l!==1)do if(i--,l--,0>l||a[i]!==o[l]){var c=`
`+a[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=l);break}}}finally{wo=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?on(e):""}function df(e){switch(e.tag){case 5:return on(e.type);case 16:return on("Lazy");case 13:return on("Suspense");case 19:return on("SuspenseList");case 0:case 2:case 15:return e=bo(e.type,!1),e;case 11:return e=bo(e.type.render,!1),e;case 1:return e=bo(e.type,!0),e;default:return""}}function Zo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case yr:return"Fragment";case vr:return"Portal";case Jo:return"Profiler";case ti:return"StrictMode";case Yo:return"Suspense";case Xo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case su:return(e.displayName||"Context")+".Consumer";case ou:return(e._context.displayName||"Context")+".Provider";case ri:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ni:return t=e.displayName||null,t!==null?t:Zo(e.type)||"Memo";case Pt:t=e._payload,e=e._init;try{return Zo(e(t))}catch{}}return null}function pf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zo(t);case 8:return t===ti?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Vt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ff(e){var t=lu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){n=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Kn(e){e._valueTracker||(e._valueTracker=ff(e))}function cu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=lu(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function _a(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function es(e,t){var r=t.checked;return ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function gl(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Vt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function uu(e,t){t=t.checked,t!=null&&ei(e,"checked",t,!1)}function ts(e,t){uu(e,t);var r=Vt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?rs(e,t.type,r):t.hasOwnProperty("defaultValue")&&rs(e,t.type,Vt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xl(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function rs(e,t,r){(t!=="number"||_a(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var sn=Array.isArray;function Tr(e,t,r,n){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Vt(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function ns(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vl(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(E(92));if(sn(r)){if(1<r.length)throw Error(E(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Vt(r)}}function du(e,t){var r=Vt(t.value),n=Vt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function yl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function pu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function as(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?pu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Gn,fu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Gn=Gn||document.createElement("div"),Gn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Gn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var un={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mf=["Webkit","ms","Moz","O"];Object.keys(un).forEach(function(e){mf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),un[t]=un[e]})});function mu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||un.hasOwnProperty(e)&&un[e]?(""+t).trim():t+"px"}function hu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,a=mu(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,a):e[r]=a}}var hf=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function os(e,t){if(t){if(hf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function ss(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var is=null;function ai(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ls=null,Dr=null,$r=null;function wl(e){if(e=Un(e)){if(typeof ls!="function")throw Error(E(280));var t=e.stateNode;t&&(t=no(t),ls(e.stateNode,e.type,t))}}function gu(e){Dr?$r?$r.push(e):$r=[e]:Dr=e}function xu(){if(Dr){var e=Dr,t=$r;if($r=Dr=null,wl(e),t)for(e=0;e<t.length;e++)wl(t[e])}}function vu(e,t){return e(t)}function yu(){}var ko=!1;function wu(e,t,r){if(ko)return e(t,r);ko=!0;try{return vu(e,t,r)}finally{ko=!1,(Dr!==null||$r!==null)&&(yu(),xu())}}function bn(e,t){var r=e.stateNode;if(r===null)return null;var n=no(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(E(231,t,typeof r));return r}var cs=!1;if(bt)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){cs=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{cs=!1}function gf(e,t,r,n,a,o,i,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(m){this.onError(m)}}var dn=!1,Ea=null,Na=!1,us=null,xf={onError:function(e){dn=!0,Ea=e}};function vf(e,t,r,n,a,o,i,l,c){dn=!1,Ea=null,gf.apply(xf,arguments)}function yf(e,t,r,n,a,o,i,l,c){if(vf.apply(this,arguments),dn){if(dn){var u=Ea;dn=!1,Ea=null}else throw Error(E(198));Na||(Na=!0,us=u)}}function pr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function bu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bl(e){if(pr(e)!==e)throw Error(E(188))}function wf(e){var t=e.alternate;if(!t){if(t=pr(e),t===null)throw Error(E(188));return t!==e?null:e}for(var r=e,n=t;;){var a=r.return;if(a===null)break;var o=a.alternate;if(o===null){if(n=a.return,n!==null){r=n;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===r)return bl(a),e;if(o===n)return bl(a),t;o=o.sibling}throw Error(E(188))}if(r.return!==n.return)r=a,n=o;else{for(var i=!1,l=a.child;l;){if(l===r){i=!0,r=a,n=o;break}if(l===n){i=!0,n=a,r=o;break}l=l.sibling}if(!i){for(l=o.child;l;){if(l===r){i=!0,r=o,n=a;break}if(l===n){i=!0,n=o,r=a;break}l=l.sibling}if(!i)throw Error(E(189))}}if(r.alternate!==n)throw Error(E(190))}if(r.tag!==3)throw Error(E(188));return r.stateNode.current===r?e:t}function ku(e){return e=wf(e),e!==null?ju(e):null}function ju(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ju(e);if(t!==null)return t;e=e.sibling}return null}var Su=Be.unstable_scheduleCallback,kl=Be.unstable_cancelCallback,bf=Be.unstable_shouldYield,kf=Be.unstable_requestPaint,le=Be.unstable_now,jf=Be.unstable_getCurrentPriorityLevel,oi=Be.unstable_ImmediatePriority,_u=Be.unstable_UserBlockingPriority,Ca=Be.unstable_NormalPriority,Sf=Be.unstable_LowPriority,Eu=Be.unstable_IdlePriority,Za=null,dt=null;function _f(e){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Za,e,void 0,(e.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:Cf,Ef=Math.log,Nf=Math.LN2;function Cf(e){return e>>>=0,e===0?32:31-(Ef(e)/Nf|0)|0}var Jn=64,Yn=4194304;function ln(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function za(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,a=e.suspendedLanes,o=e.pingedLanes,i=r&268435455;if(i!==0){var l=i&~a;l!==0?n=ln(l):(o&=i,o!==0&&(n=ln(o)))}else i=r&~a,i!==0?n=ln(i):o!==0&&(n=ln(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&a)&&(a=n&-n,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-at(t),a=1<<r,n|=e[r],t&=~a;return n}function zf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pf(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-at(o),l=1<<i,c=a[i];c===-1?(!(l&r)||l&n)&&(a[i]=zf(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function ds(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Nu(){var e=Jn;return Jn<<=1,!(Jn&4194240)&&(Jn=64),e}function jo(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function On(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-at(t),e[t]=r}function Tf(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-at(r),o=1<<a;t[a]=0,n[a]=-1,e[a]=-1,r&=~o}}function si(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-at(r),a=1<<n;a&t|e[n]&t&&(e[n]|=t),r&=~a}}var H=0;function Cu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var zu,ii,Pu,Tu,Du,ps=!1,Xn=[],At=null,It=null,Mt=null,kn=new Map,jn=new Map,Dt=[],Df="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jl(e,t){switch(e){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":Mt=null;break;case"pointerover":case"pointerout":kn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jn.delete(t.pointerId)}}function Zr(e,t,r,n,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[a]},t!==null&&(t=Un(t),t!==null&&ii(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function $f(e,t,r,n,a){switch(t){case"focusin":return At=Zr(At,e,t,r,n,a),!0;case"dragenter":return It=Zr(It,e,t,r,n,a),!0;case"mouseover":return Mt=Zr(Mt,e,t,r,n,a),!0;case"pointerover":var o=a.pointerId;return kn.set(o,Zr(kn.get(o)||null,e,t,r,n,a)),!0;case"gotpointercapture":return o=a.pointerId,jn.set(o,Zr(jn.get(o)||null,e,t,r,n,a)),!0}return!1}function $u(e){var t=Yt(e.target);if(t!==null){var r=pr(t);if(r!==null){if(t=r.tag,t===13){if(t=bu(r),t!==null){e.blockedOn=t,Du(e.priority,function(){Pu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ma(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=fs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);is=n,r.target.dispatchEvent(n),is=null}else return t=Un(r),t!==null&&ii(t),e.blockedOn=r,!1;t.shift()}return!0}function Sl(e,t,r){ma(e)&&r.delete(t)}function Rf(){ps=!1,At!==null&&ma(At)&&(At=null),It!==null&&ma(It)&&(It=null),Mt!==null&&ma(Mt)&&(Mt=null),kn.forEach(Sl),jn.forEach(Sl)}function en(e,t){e.blockedOn===t&&(e.blockedOn=null,ps||(ps=!0,Be.unstable_scheduleCallback(Be.unstable_NormalPriority,Rf)))}function Sn(e){function t(a){return en(a,e)}if(0<Xn.length){en(Xn[0],e);for(var r=1;r<Xn.length;r++){var n=Xn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(At!==null&&en(At,e),It!==null&&en(It,e),Mt!==null&&en(Mt,e),kn.forEach(t),jn.forEach(t),r=0;r<Dt.length;r++)n=Dt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Dt.length&&(r=Dt[0],r.blockedOn===null);)$u(r),r.blockedOn===null&&Dt.shift()}var Rr=_t.ReactCurrentBatchConfig,Pa=!0;function Lf(e,t,r,n){var a=H,o=Rr.transition;Rr.transition=null;try{H=1,li(e,t,r,n)}finally{H=a,Rr.transition=o}}function Af(e,t,r,n){var a=H,o=Rr.transition;Rr.transition=null;try{H=4,li(e,t,r,n)}finally{H=a,Rr.transition=o}}function li(e,t,r,n){if(Pa){var a=fs(e,t,r,n);if(a===null)$o(e,t,n,Ta,r),jl(e,n);else if($f(a,e,t,r,n))n.stopPropagation();else if(jl(e,n),t&4&&-1<Df.indexOf(e)){for(;a!==null;){var o=Un(a);if(o!==null&&zu(o),o=fs(e,t,r,n),o===null&&$o(e,t,n,Ta,r),o===a)break;a=o}a!==null&&n.stopPropagation()}else $o(e,t,n,null,r)}}var Ta=null;function fs(e,t,r,n){if(Ta=null,e=ai(n),e=Yt(e),e!==null)if(t=pr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=bu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ta=e,null}function Ru(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jf()){case oi:return 1;case _u:return 4;case Ca:case Sf:return 16;case Eu:return 536870912;default:return 16}default:return 16}}var Rt=null,ci=null,ha=null;function Lu(){if(ha)return ha;var e,t=ci,r=t.length,n,a="value"in Rt?Rt.value:Rt.textContent,o=a.length;for(e=0;e<r&&t[e]===a[e];e++);var i=r-e;for(n=1;n<=i&&t[r-n]===a[o-n];n++);return ha=a.slice(e,1<n?1-n:void 0)}function ga(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zn(){return!0}function _l(){return!1}function Ve(e){function t(r,n,a,o,i){this._reactName=r,this._targetInst=a,this.type=n,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Zn:_l,this.isPropagationStopped=_l,this}return ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Zn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Zn)},persist:function(){},isPersistent:Zn}),t}var Kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ui=Ve(Kr),Fn=ae({},Kr,{view:0,detail:0}),If=Ve(Fn),So,_o,tn,eo=ae({},Fn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:di,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tn&&(tn&&e.type==="mousemove"?(So=e.screenX-tn.screenX,_o=e.screenY-tn.screenY):_o=So=0,tn=e),So)},movementY:function(e){return"movementY"in e?e.movementY:_o}}),El=Ve(eo),Mf=ae({},eo,{dataTransfer:0}),Of=Ve(Mf),Ff=ae({},Fn,{relatedTarget:0}),Eo=Ve(Ff),Uf=ae({},Kr,{animationName:0,elapsedTime:0,pseudoElement:0}),Bf=Ve(Uf),Wf=ae({},Kr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vf=Ve(Wf),qf=ae({},Kr,{data:0}),Nl=Ve(qf),Hf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kf[e])?!!t[e]:!1}function di(){return Gf}var Jf=ae({},Fn,{key:function(e){if(e.key){var t=Hf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ga(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:di,charCode:function(e){return e.type==="keypress"?ga(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ga(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yf=Ve(Jf),Xf=ae({},eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cl=Ve(Xf),Zf=ae({},Fn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:di}),em=Ve(Zf),tm=ae({},Kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),rm=Ve(tm),nm=ae({},eo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),am=Ve(nm),om=[9,13,27,32],pi=bt&&"CompositionEvent"in window,pn=null;bt&&"documentMode"in document&&(pn=document.documentMode);var sm=bt&&"TextEvent"in window&&!pn,Au=bt&&(!pi||pn&&8<pn&&11>=pn),zl=" ",Pl=!1;function Iu(e,t){switch(e){case"keyup":return om.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wr=!1;function im(e,t){switch(e){case"compositionend":return Mu(t);case"keypress":return t.which!==32?null:(Pl=!0,zl);case"textInput":return e=t.data,e===zl&&Pl?null:e;default:return null}}function lm(e,t){if(wr)return e==="compositionend"||!pi&&Iu(e,t)?(e=Lu(),ha=ci=Rt=null,wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Au&&t.locale!=="ko"?null:t.data;default:return null}}var cm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cm[e.type]:t==="textarea"}function Ou(e,t,r,n){gu(n),t=Da(t,"onChange"),0<t.length&&(r=new ui("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var fn=null,_n=null;function um(e){Ju(e,0)}function to(e){var t=jr(e);if(cu(t))return e}function dm(e,t){if(e==="change")return t}var Fu=!1;if(bt){var No;if(bt){var Co="oninput"in document;if(!Co){var Dl=document.createElement("div");Dl.setAttribute("oninput","return;"),Co=typeof Dl.oninput=="function"}No=Co}else No=!1;Fu=No&&(!document.documentMode||9<document.documentMode)}function $l(){fn&&(fn.detachEvent("onpropertychange",Uu),_n=fn=null)}function Uu(e){if(e.propertyName==="value"&&to(_n)){var t=[];Ou(t,_n,e,ai(e)),wu(um,t)}}function pm(e,t,r){e==="focusin"?($l(),fn=t,_n=r,fn.attachEvent("onpropertychange",Uu)):e==="focusout"&&$l()}function fm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return to(_n)}function mm(e,t){if(e==="click")return to(t)}function hm(e,t){if(e==="input"||e==="change")return to(t)}function gm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var st=typeof Object.is=="function"?Object.is:gm;function En(e,t){if(st(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!Go.call(t,a)||!st(e[a],t[a]))return!1}return!0}function Rl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ll(e,t){var r=Rl(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Rl(r)}}function Bu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wu(){for(var e=window,t=_a();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=_a(e.document)}return t}function fi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function xm(e){var t=Wu(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Bu(r.ownerDocument.documentElement,r)){if(n!==null&&fi(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,o=Math.min(n.start,a);n=n.end===void 0?o:Math.min(n.end,a),!e.extend&&o>n&&(a=n,n=o,o=a),a=Ll(r,o);var i=Ll(r,n);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vm=bt&&"documentMode"in document&&11>=document.documentMode,br=null,ms=null,mn=null,hs=!1;function Al(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;hs||br==null||br!==_a(n)||(n=br,"selectionStart"in n&&fi(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),mn&&En(mn,n)||(mn=n,n=Da(ms,"onSelect"),0<n.length&&(t=new ui("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=br)))}function ea(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var kr={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionend:ea("Transition","TransitionEnd")},zo={},Vu={};bt&&(Vu=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);function ro(e){if(zo[e])return zo[e];if(!kr[e])return e;var t=kr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Vu)return zo[e]=t[r];return e}var qu=ro("animationend"),Hu=ro("animationiteration"),Qu=ro("animationstart"),Ku=ro("transitionend"),Gu=new Map,Il="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ht(e,t){Gu.set(e,t),dr(t,[e])}for(var Po=0;Po<Il.length;Po++){var To=Il[Po],ym=To.toLowerCase(),wm=To[0].toUpperCase()+To.slice(1);Ht(ym,"on"+wm)}Ht(qu,"onAnimationEnd");Ht(Hu,"onAnimationIteration");Ht(Qu,"onAnimationStart");Ht("dblclick","onDoubleClick");Ht("focusin","onFocus");Ht("focusout","onBlur");Ht(Ku,"onTransitionEnd");Fr("onMouseEnter",["mouseout","mouseover"]);Fr("onMouseLeave",["mouseout","mouseover"]);Fr("onPointerEnter",["pointerout","pointerover"]);Fr("onPointerLeave",["pointerout","pointerover"]);dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bm=new Set("cancel close invalid load scroll toggle".split(" ").concat(cn));function Ml(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,yf(n,t,void 0,e),e.currentTarget=null}function Ju(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],a=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var i=n.length-1;0<=i;i--){var l=n[i],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&a.isPropagationStopped())break e;Ml(a,l,u),o=c}else for(i=0;i<n.length;i++){if(l=n[i],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&a.isPropagationStopped())break e;Ml(a,l,u),o=c}}}if(Na)throw e=us,Na=!1,us=null,e}function Y(e,t){var r=t[ws];r===void 0&&(r=t[ws]=new Set);var n=e+"__bubble";r.has(n)||(Yu(t,e,2,!1),r.add(n))}function Do(e,t,r){var n=0;t&&(n|=4),Yu(r,e,n,t)}var ta="_reactListening"+Math.random().toString(36).slice(2);function Nn(e){if(!e[ta]){e[ta]=!0,au.forEach(function(r){r!=="selectionchange"&&(bm.has(r)||Do(r,!1,e),Do(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ta]||(t[ta]=!0,Do("selectionchange",!1,t))}}function Yu(e,t,r,n){switch(Ru(t)){case 1:var a=Lf;break;case 4:a=Af;break;default:a=li}r=a.bind(null,t,r,e),a=void 0,!cs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function $o(e,t,r,n,a){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var l=n.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(i===4)for(i=n.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;i=i.return}for(;l!==null;){if(i=Yt(l),i===null)return;if(c=i.tag,c===5||c===6){n=o=i;continue e}l=l.parentNode}}n=n.return}wu(function(){var u=o,m=ai(r),p=[];e:{var g=Gu.get(e);if(g!==void 0){var x=ui,v=e;switch(e){case"keypress":if(ga(r)===0)break e;case"keydown":case"keyup":x=Yf;break;case"focusin":v="focus",x=Eo;break;case"focusout":v="blur",x=Eo;break;case"beforeblur":case"afterblur":x=Eo;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=El;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Of;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=em;break;case qu:case Hu:case Qu:x=Bf;break;case Ku:x=rm;break;case"scroll":x=If;break;case"wheel":x=am;break;case"copy":case"cut":case"paste":x=Vf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Cl}var b=(t&4)!==0,S=!b&&e==="scroll",f=b?g!==null?g+"Capture":null:g;b=[];for(var d=u,h;d!==null;){h=d;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,f!==null&&(w=bn(d,f),w!=null&&b.push(Cn(d,w,h)))),S)break;d=d.return}0<b.length&&(g=new x(g,v,null,r,m),p.push({event:g,listeners:b}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&r!==is&&(v=r.relatedTarget||r.fromElement)&&(Yt(v)||v[kt]))break e;if((x||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,x?(v=r.relatedTarget||r.toElement,x=u,v=v?Yt(v):null,v!==null&&(S=pr(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=u),x!==v)){if(b=El,w="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(b=Cl,w="onPointerLeave",f="onPointerEnter",d="pointer"),S=x==null?g:jr(x),h=v==null?g:jr(v),g=new b(w,d+"leave",x,r,m),g.target=S,g.relatedTarget=h,w=null,Yt(m)===u&&(b=new b(f,d+"enter",v,r,m),b.target=h,b.relatedTarget=S,w=b),S=w,x&&v)t:{for(b=x,f=v,d=0,h=b;h;h=hr(h))d++;for(h=0,w=f;w;w=hr(w))h++;for(;0<d-h;)b=hr(b),d--;for(;0<h-d;)f=hr(f),h--;for(;d--;){if(b===f||f!==null&&b===f.alternate)break t;b=hr(b),f=hr(f)}b=null}else b=null;x!==null&&Ol(p,g,x,b,!1),v!==null&&S!==null&&Ol(p,S,v,b,!0)}}e:{if(g=u?jr(u):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var _=dm;else if(Tl(g))if(Fu)_=hm;else{_=fm;var j=pm}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(_=mm);if(_&&(_=_(e,u))){Ou(p,_,r,m);break e}j&&j(e,g,u),e==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&rs(g,"number",g.value)}switch(j=u?jr(u):window,e){case"focusin":(Tl(j)||j.contentEditable==="true")&&(br=j,ms=u,mn=null);break;case"focusout":mn=ms=br=null;break;case"mousedown":hs=!0;break;case"contextmenu":case"mouseup":case"dragend":hs=!1,Al(p,r,m);break;case"selectionchange":if(vm)break;case"keydown":case"keyup":Al(p,r,m)}var N;if(pi)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else wr?Iu(e,r)&&(C="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(C="onCompositionStart");C&&(Au&&r.locale!=="ko"&&(wr||C!=="onCompositionStart"?C==="onCompositionEnd"&&wr&&(N=Lu()):(Rt=m,ci="value"in Rt?Rt.value:Rt.textContent,wr=!0)),j=Da(u,C),0<j.length&&(C=new Nl(C,e,null,r,m),p.push({event:C,listeners:j}),N?C.data=N:(N=Mu(r),N!==null&&(C.data=N)))),(N=sm?im(e,r):lm(e,r))&&(u=Da(u,"onBeforeInput"),0<u.length&&(m=new Nl("onBeforeInput","beforeinput",null,r,m),p.push({event:m,listeners:u}),m.data=N))}Ju(p,t)})}function Cn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Da(e,t){for(var r=t+"Capture",n=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=bn(e,r),o!=null&&n.unshift(Cn(e,o,a)),o=bn(e,t),o!=null&&n.push(Cn(e,o,a))),e=e.return}return n}function hr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ol(e,t,r,n,a){for(var o=t._reactName,i=[];r!==null&&r!==n;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===n)break;l.tag===5&&u!==null&&(l=u,a?(c=bn(r,o),c!=null&&i.unshift(Cn(r,c,l))):a||(c=bn(r,o),c!=null&&i.push(Cn(r,c,l)))),r=r.return}i.length!==0&&e.push({event:t,listeners:i})}var km=/\r\n?/g,jm=/\u0000|\uFFFD/g;function Fl(e){return(typeof e=="string"?e:""+e).replace(km,`
`).replace(jm,"")}function ra(e,t,r){if(t=Fl(t),Fl(e)!==t&&r)throw Error(E(425))}function $a(){}var gs=null,xs=null;function vs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ys=typeof setTimeout=="function"?setTimeout:void 0,Sm=typeof clearTimeout=="function"?clearTimeout:void 0,Ul=typeof Promise=="function"?Promise:void 0,_m=typeof queueMicrotask=="function"?queueMicrotask:typeof Ul<"u"?function(e){return Ul.resolve(null).then(e).catch(Em)}:ys;function Em(e){setTimeout(function(){throw e})}function Ro(e,t){var r=t,n=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(n===0){e.removeChild(a),Sn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=a}while(r);Sn(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Bl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Gr=Math.random().toString(36).slice(2),ct="__reactFiber$"+Gr,zn="__reactProps$"+Gr,kt="__reactContainer$"+Gr,ws="__reactEvents$"+Gr,Nm="__reactListeners$"+Gr,Cm="__reactHandles$"+Gr;function Yt(e){var t=e[ct];if(t)return t;for(var r=e.parentNode;r;){if(t=r[kt]||r[ct]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Bl(e);e!==null;){if(r=e[ct])return r;e=Bl(e)}return t}e=r,r=e.parentNode}return null}function Un(e){return e=e[ct]||e[kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function no(e){return e[zn]||null}var bs=[],Sr=-1;function Qt(e){return{current:e}}function X(e){0>Sr||(e.current=bs[Sr],bs[Sr]=null,Sr--)}function G(e,t){Sr++,bs[Sr]=e.current,e.current=t}var qt={},Se=Qt(qt),Le=Qt(!1),ar=qt;function Ur(e,t){var r=e.type.contextTypes;if(!r)return qt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in r)a[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ae(e){return e=e.childContextTypes,e!=null}function Ra(){X(Le),X(Se)}function Wl(e,t,r){if(Se.current!==qt)throw Error(E(168));G(Se,t),G(Le,r)}function Xu(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var a in n)if(!(a in t))throw Error(E(108,pf(e)||"Unknown",a));return ae({},r,n)}function La(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qt,ar=Se.current,G(Se,e),G(Le,Le.current),!0}function Vl(e,t,r){var n=e.stateNode;if(!n)throw Error(E(169));r?(e=Xu(e,t,ar),n.__reactInternalMemoizedMergedChildContext=e,X(Le),X(Se),G(Se,e)):X(Le),G(Le,r)}var gt=null,ao=!1,Lo=!1;function Zu(e){gt===null?gt=[e]:gt.push(e)}function zm(e){ao=!0,Zu(e)}function Kt(){if(!Lo&&gt!==null){Lo=!0;var e=0,t=H;try{var r=gt;for(H=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}gt=null,ao=!1}catch(a){throw gt!==null&&(gt=gt.slice(e+1)),Su(oi,Kt),a}finally{H=t,Lo=!1}}return null}var _r=[],Er=0,Aa=null,Ia=0,qe=[],He=0,or=null,vt=1,yt="";function Gt(e,t){_r[Er++]=Ia,_r[Er++]=Aa,Aa=e,Ia=t}function ed(e,t,r){qe[He++]=vt,qe[He++]=yt,qe[He++]=or,or=e;var n=vt;e=yt;var a=32-at(n)-1;n&=~(1<<a),r+=1;var o=32-at(t)+a;if(30<o){var i=a-a%5;o=(n&(1<<i)-1).toString(32),n>>=i,a-=i,vt=1<<32-at(t)+a|r<<a|n,yt=o+e}else vt=1<<o|r<<a|n,yt=e}function mi(e){e.return!==null&&(Gt(e,1),ed(e,1,0))}function hi(e){for(;e===Aa;)Aa=_r[--Er],_r[Er]=null,Ia=_r[--Er],_r[Er]=null;for(;e===or;)or=qe[--He],qe[He]=null,yt=qe[--He],qe[He]=null,vt=qe[--He],qe[He]=null}var Ue=null,Fe=null,Z=!1,rt=null;function td(e,t){var r=Qe(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function ql(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ue=e,Fe=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ue=e,Fe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=or!==null?{id:vt,overflow:yt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Qe(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Ue=e,Fe=null,!0):!1;default:return!1}}function ks(e){return(e.mode&1)!==0&&(e.flags&128)===0}function js(e){if(Z){var t=Fe;if(t){var r=t;if(!ql(e,t)){if(ks(e))throw Error(E(418));t=Ot(r.nextSibling);var n=Ue;t&&ql(e,t)?td(n,r):(e.flags=e.flags&-4097|2,Z=!1,Ue=e)}}else{if(ks(e))throw Error(E(418));e.flags=e.flags&-4097|2,Z=!1,Ue=e}}}function Hl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ue=e}function na(e){if(e!==Ue)return!1;if(!Z)return Hl(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vs(e.type,e.memoizedProps)),t&&(t=Fe)){if(ks(e))throw rd(),Error(E(418));for(;t;)td(e,t),t=Ot(t.nextSibling)}if(Hl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Fe=Ot(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Fe=null}}else Fe=Ue?Ot(e.stateNode.nextSibling):null;return!0}function rd(){for(var e=Fe;e;)e=Ot(e.nextSibling)}function Br(){Fe=Ue=null,Z=!1}function gi(e){rt===null?rt=[e]:rt.push(e)}var Pm=_t.ReactCurrentBatchConfig;function rn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(E(309));var n=r.stateNode}if(!n)throw Error(E(147,e));var a=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var l=a.refs;i===null?delete l[o]:l[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!r._owner)throw Error(E(290,e))}return e}function aa(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ql(e){var t=e._init;return t(e._payload)}function nd(e){function t(f,d){if(e){var h=f.deletions;h===null?(f.deletions=[d],f.flags|=16):h.push(d)}}function r(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function n(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function a(f,d){return f=Wt(f,d),f.index=0,f.sibling=null,f}function o(f,d,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<d?(f.flags|=2,d):h):(f.flags|=2,d)):(f.flags|=1048576,d)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,d,h,w){return d===null||d.tag!==6?(d=Bo(h,f.mode,w),d.return=f,d):(d=a(d,h),d.return=f,d)}function c(f,d,h,w){var _=h.type;return _===yr?m(f,d,h.props.children,w,h.key):d!==null&&(d.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Pt&&Ql(_)===d.type)?(w=a(d,h.props),w.ref=rn(f,d,h),w.return=f,w):(w=ja(h.type,h.key,h.props,null,f.mode,w),w.ref=rn(f,d,h),w.return=f,w)}function u(f,d,h,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Wo(h,f.mode,w),d.return=f,d):(d=a(d,h.children||[]),d.return=f,d)}function m(f,d,h,w,_){return d===null||d.tag!==7?(d=rr(h,f.mode,w,_),d.return=f,d):(d=a(d,h),d.return=f,d)}function p(f,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Bo(""+d,f.mode,h),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Qn:return h=ja(d.type,d.key,d.props,null,f.mode,h),h.ref=rn(f,null,d),h.return=f,h;case vr:return d=Wo(d,f.mode,h),d.return=f,d;case Pt:var w=d._init;return p(f,w(d._payload),h)}if(sn(d)||Yr(d))return d=rr(d,f.mode,h,null),d.return=f,d;aa(f,d)}return null}function g(f,d,h,w){var _=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return _!==null?null:l(f,d,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Qn:return h.key===_?c(f,d,h,w):null;case vr:return h.key===_?u(f,d,h,w):null;case Pt:return _=h._init,g(f,d,_(h._payload),w)}if(sn(h)||Yr(h))return _!==null?null:m(f,d,h,w,null);aa(f,h)}return null}function x(f,d,h,w,_){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(h)||null,l(d,f,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Qn:return f=f.get(w.key===null?h:w.key)||null,c(d,f,w,_);case vr:return f=f.get(w.key===null?h:w.key)||null,u(d,f,w,_);case Pt:var j=w._init;return x(f,d,h,j(w._payload),_)}if(sn(w)||Yr(w))return f=f.get(h)||null,m(d,f,w,_,null);aa(d,w)}return null}function v(f,d,h,w){for(var _=null,j=null,N=d,C=d=0,P=null;N!==null&&C<h.length;C++){N.index>C?(P=N,N=null):P=N.sibling;var D=g(f,N,h[C],w);if(D===null){N===null&&(N=P);break}e&&N&&D.alternate===null&&t(f,N),d=o(D,d,C),j===null?_=D:j.sibling=D,j=D,N=P}if(C===h.length)return r(f,N),Z&&Gt(f,C),_;if(N===null){for(;C<h.length;C++)N=p(f,h[C],w),N!==null&&(d=o(N,d,C),j===null?_=N:j.sibling=N,j=N);return Z&&Gt(f,C),_}for(N=n(f,N);C<h.length;C++)P=x(N,f,C,h[C],w),P!==null&&(e&&P.alternate!==null&&N.delete(P.key===null?C:P.key),d=o(P,d,C),j===null?_=P:j.sibling=P,j=P);return e&&N.forEach(function(U){return t(f,U)}),Z&&Gt(f,C),_}function b(f,d,h,w){var _=Yr(h);if(typeof _!="function")throw Error(E(150));if(h=_.call(h),h==null)throw Error(E(151));for(var j=_=null,N=d,C=d=0,P=null,D=h.next();N!==null&&!D.done;C++,D=h.next()){N.index>C?(P=N,N=null):P=N.sibling;var U=g(f,N,D.value,w);if(U===null){N===null&&(N=P);break}e&&N&&U.alternate===null&&t(f,N),d=o(U,d,C),j===null?_=U:j.sibling=U,j=U,N=P}if(D.done)return r(f,N),Z&&Gt(f,C),_;if(N===null){for(;!D.done;C++,D=h.next())D=p(f,D.value,w),D!==null&&(d=o(D,d,C),j===null?_=D:j.sibling=D,j=D);return Z&&Gt(f,C),_}for(N=n(f,N);!D.done;C++,D=h.next())D=x(N,f,C,D.value,w),D!==null&&(e&&D.alternate!==null&&N.delete(D.key===null?C:D.key),d=o(D,d,C),j===null?_=D:j.sibling=D,j=D);return e&&N.forEach(function(_e){return t(f,_e)}),Z&&Gt(f,C),_}function S(f,d,h,w){if(typeof h=="object"&&h!==null&&h.type===yr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Qn:e:{for(var _=h.key,j=d;j!==null;){if(j.key===_){if(_=h.type,_===yr){if(j.tag===7){r(f,j.sibling),d=a(j,h.props.children),d.return=f,f=d;break e}}else if(j.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Pt&&Ql(_)===j.type){r(f,j.sibling),d=a(j,h.props),d.ref=rn(f,j,h),d.return=f,f=d;break e}r(f,j);break}else t(f,j);j=j.sibling}h.type===yr?(d=rr(h.props.children,f.mode,w,h.key),d.return=f,f=d):(w=ja(h.type,h.key,h.props,null,f.mode,w),w.ref=rn(f,d,h),w.return=f,f=w)}return i(f);case vr:e:{for(j=h.key;d!==null;){if(d.key===j)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){r(f,d.sibling),d=a(d,h.children||[]),d.return=f,f=d;break e}else{r(f,d);break}else t(f,d);d=d.sibling}d=Wo(h,f.mode,w),d.return=f,f=d}return i(f);case Pt:return j=h._init,S(f,d,j(h._payload),w)}if(sn(h))return v(f,d,h,w);if(Yr(h))return b(f,d,h,w);aa(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(r(f,d.sibling),d=a(d,h),d.return=f,f=d):(r(f,d),d=Bo(h,f.mode,w),d.return=f,f=d),i(f)):r(f,d)}return S}var Wr=nd(!0),ad=nd(!1),Ma=Qt(null),Oa=null,Nr=null,xi=null;function vi(){xi=Nr=Oa=null}function yi(e){var t=Ma.current;X(Ma),e._currentValue=t}function Ss(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Lr(e,t){Oa=e,xi=Nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($e=!0),e.firstContext=null)}function Ge(e){var t=e._currentValue;if(xi!==e)if(e={context:e,memoizedValue:t,next:null},Nr===null){if(Oa===null)throw Error(E(308));Nr=e,Oa.dependencies={lanes:0,firstContext:e}}else Nr=Nr.next=e;return t}var Xt=null;function wi(e){Xt===null?Xt=[e]:Xt.push(e)}function od(e,t,r,n){var a=t.interleaved;return a===null?(r.next=r,wi(t)):(r.next=a.next,a.next=r),t.interleaved=r,jt(e,n)}function jt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Tt=!1;function bi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,V&2){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,jt(e,r)}return a=n.interleaved,a===null?(t.next=t,wi(n)):(t.next=a.next,a.next=t),n.interleaved=t,jt(e,r)}function xa(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,si(e,r)}}function Kl(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var a=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?a=o=i:o=o.next=i,r=r.next}while(r!==null);o===null?a=o=t:o=o.next=t}else a=o=t;r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Fa(e,t,r,n){var a=e.updateQueue;Tt=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,u=c.next;c.next=null,i===null?o=u:i.next=u,i=c;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==i&&(l===null?m.firstBaseUpdate=u:l.next=u,m.lastBaseUpdate=c))}if(o!==null){var p=a.baseState;i=0,m=u=c=null,l=o;do{var g=l.lane,x=l.eventTime;if((n&g)===g){m!==null&&(m=m.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,b=l;switch(g=t,x=r,b.tag){case 1:if(v=b.payload,typeof v=="function"){p=v.call(x,p,g);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,g=typeof v=="function"?v.call(x,p,g):v,g==null)break e;p=ae({},p,g);break e;case 2:Tt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=a.effects,g===null?a.effects=[l]:g.push(l))}else x={eventTime:x,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(u=m=x,c=p):m=m.next=x,i|=g;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;g=l,l=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(!0);if(m===null&&(c=p),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=m,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);ir|=i,e.lanes=i,e.memoizedState=p}}function Gl(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],a=n.callback;if(a!==null){if(n.callback=null,n=r,typeof a!="function")throw Error(E(191,a));a.call(n)}}}var Bn={},pt=Qt(Bn),Pn=Qt(Bn),Tn=Qt(Bn);function Zt(e){if(e===Bn)throw Error(E(174));return e}function ki(e,t){switch(G(Tn,t),G(Pn,e),G(pt,Bn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:as(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=as(t,e)}X(pt),G(pt,t)}function Vr(){X(pt),X(Pn),X(Tn)}function id(e){Zt(Tn.current);var t=Zt(pt.current),r=as(t,e.type);t!==r&&(G(Pn,e),G(pt,r))}function ji(e){Pn.current===e&&(X(pt),X(Pn))}var te=Qt(0);function Ua(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ao=[];function Si(){for(var e=0;e<Ao.length;e++)Ao[e]._workInProgressVersionPrimary=null;Ao.length=0}var va=_t.ReactCurrentDispatcher,Io=_t.ReactCurrentBatchConfig,sr=0,ne=null,de=null,fe=null,Ba=!1,hn=!1,Dn=0,Tm=0;function we(){throw Error(E(321))}function _i(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!st(e[r],t[r]))return!1;return!0}function Ei(e,t,r,n,a,o){if(sr=o,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,va.current=e===null||e.memoizedState===null?Lm:Am,e=r(n,a),hn){o=0;do{if(hn=!1,Dn=0,25<=o)throw Error(E(301));o+=1,fe=de=null,t.updateQueue=null,va.current=Im,e=r(n,a)}while(hn)}if(va.current=Wa,t=de!==null&&de.next!==null,sr=0,fe=de=ne=null,Ba=!1,t)throw Error(E(300));return e}function Ni(){var e=Dn!==0;return Dn=0,e}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?ne.memoizedState=fe=e:fe=fe.next=e,fe}function Je(){if(de===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=fe===null?ne.memoizedState:fe.next;if(t!==null)fe=t,de=e;else{if(e===null)throw Error(E(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},fe===null?ne.memoizedState=fe=e:fe=fe.next=e}return fe}function $n(e,t){return typeof t=="function"?t(e):t}function Mo(e){var t=Je(),r=t.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=e;var n=de,a=n.baseQueue,o=r.pending;if(o!==null){if(a!==null){var i=a.next;a.next=o.next,o.next=i}n.baseQueue=a=o,r.pending=null}if(a!==null){o=a.next,n=n.baseState;var l=i=null,c=null,u=o;do{var m=u.lane;if((sr&m)===m)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var p={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,i=n):c=c.next=p,ne.lanes|=m,ir|=m}u=u.next}while(u!==null&&u!==o);c===null?i=n:c.next=l,st(n,t.memoizedState)||($e=!0),t.memoizedState=n,t.baseState=i,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){a=e;do o=a.lane,ne.lanes|=o,ir|=o,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Oo(e){var t=Je(),r=t.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=e;var n=r.dispatch,a=r.pending,o=t.memoizedState;if(a!==null){r.pending=null;var i=a=a.next;do o=e(o,i.action),i=i.next;while(i!==a);st(o,t.memoizedState)||($e=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function ld(){}function cd(e,t){var r=ne,n=Je(),a=t(),o=!st(n.memoizedState,a);if(o&&(n.memoizedState=a,$e=!0),n=n.queue,Ci(pd.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||fe!==null&&fe.memoizedState.tag&1){if(r.flags|=2048,Rn(9,dd.bind(null,r,n,a,t),void 0,null),me===null)throw Error(E(349));sr&30||ud(r,t,a)}return a}function ud(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function dd(e,t,r,n){t.value=r,t.getSnapshot=n,fd(t)&&md(e)}function pd(e,t,r){return r(function(){fd(t)&&md(e)})}function fd(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!st(e,r)}catch{return!0}}function md(e){var t=jt(e,1);t!==null&&ot(t,e,1,-1)}function Jl(e){var t=lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$n,lastRenderedState:e},t.queue=e,e=e.dispatch=Rm.bind(null,ne,e),[t.memoizedState,e]}function Rn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function hd(){return Je().memoizedState}function ya(e,t,r,n){var a=lt();ne.flags|=e,a.memoizedState=Rn(1|t,r,void 0,n===void 0?null:n)}function oo(e,t,r,n){var a=Je();n=n===void 0?null:n;var o=void 0;if(de!==null){var i=de.memoizedState;if(o=i.destroy,n!==null&&_i(n,i.deps)){a.memoizedState=Rn(t,r,o,n);return}}ne.flags|=e,a.memoizedState=Rn(1|t,r,o,n)}function Yl(e,t){return ya(8390656,8,e,t)}function Ci(e,t){return oo(2048,8,e,t)}function gd(e,t){return oo(4,2,e,t)}function xd(e,t){return oo(4,4,e,t)}function vd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yd(e,t,r){return r=r!=null?r.concat([e]):null,oo(4,4,vd.bind(null,t,e),r)}function zi(){}function wd(e,t){var r=Je();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&_i(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function bd(e,t){var r=Je();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&_i(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function kd(e,t,r){return sr&21?(st(r,t)||(r=Nu(),ne.lanes|=r,ir|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=r)}function Dm(e,t){var r=H;H=r!==0&&4>r?r:4,e(!0);var n=Io.transition;Io.transition={};try{e(!1),t()}finally{H=r,Io.transition=n}}function jd(){return Je().memoizedState}function $m(e,t,r){var n=Bt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Sd(e))_d(t,r);else if(r=od(e,t,r,n),r!==null){var a=ze();ot(r,e,n,a),Ed(r,t,n)}}function Rm(e,t,r){var n=Bt(e),a={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Sd(e))_d(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,l=o(i,r);if(a.hasEagerState=!0,a.eagerState=l,st(l,i)){var c=t.interleaved;c===null?(a.next=a,wi(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}r=od(e,t,a,n),r!==null&&(a=ze(),ot(r,e,n,a),Ed(r,t,n))}}function Sd(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function _d(e,t){hn=Ba=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Ed(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,si(e,r)}}var Wa={readContext:Ge,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},Lm={readContext:Ge,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:Yl,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ya(4194308,4,vd.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ya(4194308,4,e,t)},useInsertionEffect:function(e,t){return ya(4,2,e,t)},useMemo:function(e,t){var r=lt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=lt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=$m.bind(null,ne,e),[n.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:Jl,useDebugValue:zi,useDeferredValue:function(e){return lt().memoizedState=e},useTransition:function(){var e=Jl(!1),t=e[0];return e=Dm.bind(null,e[1]),lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ne,a=lt();if(Z){if(r===void 0)throw Error(E(407));r=r()}else{if(r=t(),me===null)throw Error(E(349));sr&30||ud(n,t,r)}a.memoizedState=r;var o={value:r,getSnapshot:t};return a.queue=o,Yl(pd.bind(null,n,o,e),[e]),n.flags|=2048,Rn(9,dd.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=lt(),t=me.identifierPrefix;if(Z){var r=yt,n=vt;r=(n&~(1<<32-at(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Dn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Tm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Am={readContext:Ge,useCallback:wd,useContext:Ge,useEffect:Ci,useImperativeHandle:yd,useInsertionEffect:gd,useLayoutEffect:xd,useMemo:bd,useReducer:Mo,useRef:hd,useState:function(){return Mo($n)},useDebugValue:zi,useDeferredValue:function(e){var t=Je();return kd(t,de.memoizedState,e)},useTransition:function(){var e=Mo($n)[0],t=Je().memoizedState;return[e,t]},useMutableSource:ld,useSyncExternalStore:cd,useId:jd,unstable_isNewReconciler:!1},Im={readContext:Ge,useCallback:wd,useContext:Ge,useEffect:Ci,useImperativeHandle:yd,useInsertionEffect:gd,useLayoutEffect:xd,useMemo:bd,useReducer:Oo,useRef:hd,useState:function(){return Oo($n)},useDebugValue:zi,useDeferredValue:function(e){var t=Je();return de===null?t.memoizedState=e:kd(t,de.memoizedState,e)},useTransition:function(){var e=Oo($n)[0],t=Je().memoizedState;return[e,t]},useMutableSource:ld,useSyncExternalStore:cd,useId:jd,unstable_isNewReconciler:!1};function et(e,t){if(e&&e.defaultProps){t=ae({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function _s(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:ae({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var so={isMounted:function(e){return(e=e._reactInternals)?pr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=ze(),a=Bt(e),o=wt(n,a);o.payload=t,r!=null&&(o.callback=r),t=Ft(e,o,a),t!==null&&(ot(t,e,a,n),xa(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=ze(),a=Bt(e),o=wt(n,a);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=Ft(e,o,a),t!==null&&(ot(t,e,a,n),xa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ze(),n=Bt(e),a=wt(r,n);a.tag=2,t!=null&&(a.callback=t),t=Ft(e,a,n),t!==null&&(ot(t,e,n,r),xa(t,e,n))}};function Xl(e,t,r,n,a,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,i):t.prototype&&t.prototype.isPureReactComponent?!En(r,n)||!En(a,o):!0}function Nd(e,t,r){var n=!1,a=qt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ge(o):(a=Ae(t)?ar:Se.current,n=t.contextTypes,o=(n=n!=null)?Ur(e,a):qt),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=so,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function Zl(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&so.enqueueReplaceState(t,t.state,null)}function Es(e,t,r,n){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},bi(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=Ge(o):(o=Ae(t)?ar:Se.current,a.context=Ur(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(_s(e,t,o,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&so.enqueueReplaceState(a,a.state,null),Fa(e,r,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function qr(e,t){try{var r="",n=t;do r+=df(n),n=n.return;while(n);var a=r}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function Fo(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Ns(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Mm=typeof WeakMap=="function"?WeakMap:Map;function Cd(e,t,r){r=wt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){qa||(qa=!0,Is=n),Ns(e,t)},r}function zd(e,t,r){r=wt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=t.value;r.payload=function(){return n(a)},r.callback=function(){Ns(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){Ns(e,t),typeof n!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),r}function ec(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Mm;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(r)||(a.add(r),e=Xm.bind(null,e,t,r),t.then(e,e))}function tc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function rc(e,t,r,n,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=wt(-1,1),t.tag=2,Ft(r,t,1))),r.lanes|=1),e)}var Om=_t.ReactCurrentOwner,$e=!1;function Ce(e,t,r,n){t.child=e===null?ad(t,null,r,n):Wr(t,e.child,r,n)}function nc(e,t,r,n,a){r=r.render;var o=t.ref;return Lr(t,a),n=Ei(e,t,r,n,o,a),r=Ni(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,St(e,t,a)):(Z&&r&&mi(t),t.flags|=1,Ce(e,t,n,a),t.child)}function ac(e,t,r,n,a){if(e===null){var o=r.type;return typeof o=="function"&&!Ii(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,Pd(e,t,o,n,a)):(e=ja(r.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&a)){var i=o.memoizedProps;if(r=r.compare,r=r!==null?r:En,r(i,n)&&e.ref===t.ref)return St(e,t,a)}return t.flags|=1,e=Wt(o,n),e.ref=t.ref,e.return=t,t.child=e}function Pd(e,t,r,n,a){if(e!==null){var o=e.memoizedProps;if(En(o,n)&&e.ref===t.ref)if($e=!1,t.pendingProps=n=o,(e.lanes&a)!==0)e.flags&131072&&($e=!0);else return t.lanes=e.lanes,St(e,t,a)}return Cs(e,t,r,n,a)}function Td(e,t,r){var n=t.pendingProps,a=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(zr,Oe),Oe|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(zr,Oe),Oe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,G(zr,Oe),Oe|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,G(zr,Oe),Oe|=n;return Ce(e,t,a,r),t.child}function Dd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Cs(e,t,r,n,a){var o=Ae(r)?ar:Se.current;return o=Ur(t,o),Lr(t,a),r=Ei(e,t,r,n,o,a),n=Ni(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,St(e,t,a)):(Z&&n&&mi(t),t.flags|=1,Ce(e,t,r,a),t.child)}function oc(e,t,r,n,a){if(Ae(r)){var o=!0;La(t)}else o=!1;if(Lr(t,a),t.stateNode===null)wa(e,t),Nd(t,r,n),Es(t,r,n,a),n=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var c=i.context,u=r.contextType;typeof u=="object"&&u!==null?u=Ge(u):(u=Ae(r)?ar:Se.current,u=Ur(t,u));var m=r.getDerivedStateFromProps,p=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==n||c!==u)&&Zl(t,i,n,u),Tt=!1;var g=t.memoizedState;i.state=g,Fa(t,n,i,a),c=t.memoizedState,l!==n||g!==c||Le.current||Tt?(typeof m=="function"&&(_s(t,r,m,n),c=t.memoizedState),(l=Tt||Xl(t,r,l,n,g,c,u))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),i.props=n,i.state=c,i.context=u,n=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,sd(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:et(t.type,l),i.props=u,p=t.pendingProps,g=i.context,c=r.contextType,typeof c=="object"&&c!==null?c=Ge(c):(c=Ae(r)?ar:Se.current,c=Ur(t,c));var x=r.getDerivedStateFromProps;(m=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==p||g!==c)&&Zl(t,i,n,c),Tt=!1,g=t.memoizedState,i.state=g,Fa(t,n,i,a);var v=t.memoizedState;l!==p||g!==v||Le.current||Tt?(typeof x=="function"&&(_s(t,r,x,n),v=t.memoizedState),(u=Tt||Xl(t,r,u,n,g,v,c)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,v,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,v,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=v),i.props=n,i.state=v,i.context=c,n=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return zs(e,t,r,n,o,a)}function zs(e,t,r,n,a,o){Dd(e,t);var i=(t.flags&128)!==0;if(!n&&!i)return a&&Vl(t,r,!1),St(e,t,o);n=t.stateNode,Om.current=t;var l=i&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&i?(t.child=Wr(t,e.child,null,o),t.child=Wr(t,null,l,o)):Ce(e,t,l,o),t.memoizedState=n.state,a&&Vl(t,r,!0),t.child}function $d(e){var t=e.stateNode;t.pendingContext?Wl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wl(e,t.context,!1),ki(e,t.containerInfo)}function sc(e,t,r,n,a){return Br(),gi(a),t.flags|=256,Ce(e,t,r,n),t.child}var Ps={dehydrated:null,treeContext:null,retryLane:0};function Ts(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rd(e,t,r){var n=t.pendingProps,a=te.current,o=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),G(te,a&1),e===null)return js(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=n.children,e=n.fallback,o?(n=t.mode,o=t.child,i={mode:"hidden",children:i},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=co(i,n,0,null),e=rr(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ts(r),t.memoizedState=Ps,e):Pi(t,i));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Fm(e,t,i,n,l,a,r);if(o){o=n.fallback,i=t.mode,a=e.child,l=a.sibling;var c={mode:"hidden",children:n.children};return!(i&1)&&t.child!==a?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=Wt(a,c),n.subtreeFlags=a.subtreeFlags&14680064),l!==null?o=Wt(l,o):(o=rr(o,i,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,i=e.child.memoizedState,i=i===null?Ts(r):{baseLanes:i.baseLanes|r,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~r,t.memoizedState=Ps,n}return o=e.child,e=o.sibling,n=Wt(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Pi(e,t){return t=co({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function oa(e,t,r,n){return n!==null&&gi(n),Wr(t,e.child,null,r),e=Pi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Fm(e,t,r,n,a,o,i){if(r)return t.flags&256?(t.flags&=-257,n=Fo(Error(E(422))),oa(e,t,i,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,a=t.mode,n=co({mode:"visible",children:n.children},a,0,null),o=rr(o,a,i,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&Wr(t,e.child,null,i),t.child.memoizedState=Ts(i),t.memoizedState=Ps,o);if(!(t.mode&1))return oa(e,t,i,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var l=n.dgst;return n=l,o=Error(E(419)),n=Fo(o,n,void 0),oa(e,t,i,n)}if(l=(i&e.childLanes)!==0,$e||l){if(n=me,n!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(n.suspendedLanes|i)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,jt(e,a),ot(n,e,a,-1))}return Ai(),n=Fo(Error(E(421))),oa(e,t,i,n)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Zm.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Fe=Ot(a.nextSibling),Ue=t,Z=!0,rt=null,e!==null&&(qe[He++]=vt,qe[He++]=yt,qe[He++]=or,vt=e.id,yt=e.overflow,or=t),t=Pi(t,n.children),t.flags|=4096,t)}function ic(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ss(e.return,t,r)}function Uo(e,t,r,n,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=a)}function Ld(e,t,r){var n=t.pendingProps,a=n.revealOrder,o=n.tail;if(Ce(e,t,n.children,r),n=te.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ic(e,r,t);else if(e.tag===19)ic(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(G(te,n),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&Ua(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Uo(t,!1,a,r,o);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ua(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Uo(t,!0,r,null,o);break;case"together":Uo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function wa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function St(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),ir|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,r=Wt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Wt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Um(e,t,r){switch(t.tag){case 3:$d(t),Br();break;case 5:id(t);break;case 1:Ae(t.type)&&La(t);break;case 4:ki(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,a=t.memoizedProps.value;G(Ma,n._currentValue),n._currentValue=a;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(G(te,te.current&1),t.flags|=128,null):r&t.child.childLanes?Rd(e,t,r):(G(te,te.current&1),e=St(e,t,r),e!==null?e.sibling:null);G(te,te.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Ld(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),G(te,te.current),n)break;return null;case 22:case 23:return t.lanes=0,Td(e,t,r)}return St(e,t,r)}var Ad,Ds,Id,Md;Ad=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Ds=function(){};Id=function(e,t,r,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,Zt(pt.current);var o=null;switch(r){case"input":a=es(e,a),n=es(e,n),o=[];break;case"select":a=ae({},a,{value:void 0}),n=ae({},n,{value:void 0}),o=[];break;case"textarea":a=ns(e,a),n=ns(e,n),o=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=$a)}os(r,n);var i;r=null;for(u in a)if(!n.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(i in l)l.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(yn.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var c=n[u];if(l=a!=null?a[u]:void 0,n.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in c)c.hasOwnProperty(i)&&l[i]!==c[i]&&(r||(r={}),r[i]=c[i])}else r||(o||(o=[]),o.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(yn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Y("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}r&&(o=o||[]).push("style",r);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Md=function(e,t,r,n){r!==n&&(t.flags|=4)};function nn(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Bm(e,t,r){var n=t.pendingProps;switch(hi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return Ae(t.type)&&Ra(),be(t),null;case 3:return n=t.stateNode,Vr(),X(Le),X(Se),Si(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(na(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rt!==null&&(Fs(rt),rt=null))),Ds(e,t),be(t),null;case 5:ji(t);var a=Zt(Tn.current);if(r=t.type,e!==null&&t.stateNode!=null)Id(e,t,r,n,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(E(166));return be(t),null}if(e=Zt(pt.current),na(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[ct]=t,n[zn]=o,e=(t.mode&1)!==0,r){case"dialog":Y("cancel",n),Y("close",n);break;case"iframe":case"object":case"embed":Y("load",n);break;case"video":case"audio":for(a=0;a<cn.length;a++)Y(cn[a],n);break;case"source":Y("error",n);break;case"img":case"image":case"link":Y("error",n),Y("load",n);break;case"details":Y("toggle",n);break;case"input":gl(n,o),Y("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},Y("invalid",n);break;case"textarea":vl(n,o),Y("invalid",n)}os(r,o),a=null;for(var i in o)if(o.hasOwnProperty(i)){var l=o[i];i==="children"?typeof l=="string"?n.textContent!==l&&(o.suppressHydrationWarning!==!0&&ra(n.textContent,l,e),a=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&ra(n.textContent,l,e),a=["children",""+l]):yn.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&Y("scroll",n)}switch(r){case"input":Kn(n),xl(n,o,!0);break;case"textarea":Kn(n),yl(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=$a)}n=a,t.updateQueue=n,n!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=i.createElement(r,{is:n.is}):(e=i.createElement(r),r==="select"&&(i=e,n.multiple?i.multiple=!0:n.size&&(i.size=n.size))):e=i.createElementNS(e,r),e[ct]=t,e[zn]=n,Ad(e,t,!1,!1),t.stateNode=e;e:{switch(i=ss(r,n),r){case"dialog":Y("cancel",e),Y("close",e),a=n;break;case"iframe":case"object":case"embed":Y("load",e),a=n;break;case"video":case"audio":for(a=0;a<cn.length;a++)Y(cn[a],e);a=n;break;case"source":Y("error",e),a=n;break;case"img":case"image":case"link":Y("error",e),Y("load",e),a=n;break;case"details":Y("toggle",e),a=n;break;case"input":gl(e,n),a=es(e,n),Y("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=ae({},n,{value:void 0}),Y("invalid",e);break;case"textarea":vl(e,n),a=ns(e,n),Y("invalid",e);break;default:a=n}os(r,a),l=a;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?hu(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&fu(e,c)):o==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&wn(e,c):typeof c=="number"&&wn(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(yn.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Y("scroll",e):c!=null&&ei(e,o,c,i))}switch(r){case"input":Kn(e),xl(e,n,!1);break;case"textarea":Kn(e),yl(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Vt(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?Tr(e,!!n.multiple,o,!1):n.defaultValue!=null&&Tr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=$a)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return be(t),null;case 6:if(e&&t.stateNode!=null)Md(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(E(166));if(r=Zt(Tn.current),Zt(pt.current),na(t)){if(n=t.stateNode,r=t.memoizedProps,n[ct]=t,(o=n.nodeValue!==r)&&(e=Ue,e!==null))switch(e.tag){case 3:ra(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ra(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[ct]=t,t.stateNode=n}return be(t),null;case 13:if(X(te),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Fe!==null&&t.mode&1&&!(t.flags&128))rd(),Br(),t.flags|=98560,o=!1;else if(o=na(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[ct]=t}else Br(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),o=!1}else rt!==null&&(Fs(rt),rt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?pe===0&&(pe=3):Ai())),t.updateQueue!==null&&(t.flags|=4),be(t),null);case 4:return Vr(),Ds(e,t),e===null&&Nn(t.stateNode.containerInfo),be(t),null;case 10:return yi(t.type._context),be(t),null;case 17:return Ae(t.type)&&Ra(),be(t),null;case 19:if(X(te),o=t.memoizedState,o===null)return be(t),null;if(n=(t.flags&128)!==0,i=o.rendering,i===null)if(n)nn(o,!1);else{if(pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Ua(e),i!==null){for(t.flags|=128,nn(o,!1),n=i.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return G(te,te.current&1|2),t.child}e=e.sibling}o.tail!==null&&le()>Hr&&(t.flags|=128,n=!0,nn(o,!1),t.lanes=4194304)}else{if(!n)if(e=Ua(i),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),nn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!Z)return be(t),null}else 2*le()-o.renderingStartTime>Hr&&r!==1073741824&&(t.flags|=128,n=!0,nn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(r=o.last,r!==null?r.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=le(),t.sibling=null,r=te.current,G(te,n?r&1|2:r&1),t):(be(t),null);case 22:case 23:return Li(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Oe&1073741824&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function Wm(e,t){switch(hi(t),t.tag){case 1:return Ae(t.type)&&Ra(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vr(),X(Le),X(Se),Si(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ji(t),null;case 13:if(X(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(te),null;case 4:return Vr(),null;case 10:return yi(t.type._context),null;case 22:case 23:return Li(),null;case 24:return null;default:return null}}var sa=!1,je=!1,Vm=typeof WeakSet=="function"?WeakSet:Set,T=null;function Cr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){se(e,t,n)}else r.current=null}function $s(e,t,r){try{r()}catch(n){se(e,t,n)}}var lc=!1;function qm(e,t){if(gs=Pa,e=Wu(),fi(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var a=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var i=0,l=-1,c=-1,u=0,m=0,p=e,g=null;t:for(;;){for(var x;p!==r||a!==0&&p.nodeType!==3||(l=i+a),p!==o||n!==0&&p.nodeType!==3||(c=i+n),p.nodeType===3&&(i+=p.nodeValue.length),(x=p.firstChild)!==null;)g=p,p=x;for(;;){if(p===e)break t;if(g===r&&++u===a&&(l=i),g===o&&++m===n&&(c=i),(x=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=x}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(xs={focusedElem:e,selectionRange:r},Pa=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var b=v.memoizedProps,S=v.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?b:et(t.type,b),S);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){se(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return v=lc,lc=!1,v}function gn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&$s(t,r,o)}a=a.next}while(a!==n)}}function io(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Rs(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Od(e){var t=e.alternate;t!==null&&(e.alternate=null,Od(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ct],delete t[zn],delete t[ws],delete t[Nm],delete t[Cm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fd(e){return e.tag===5||e.tag===3||e.tag===4}function cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ls(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=$a));else if(n!==4&&(e=e.child,e!==null))for(Ls(e,t,r),e=e.sibling;e!==null;)Ls(e,t,r),e=e.sibling}function As(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(As(e,t,r),e=e.sibling;e!==null;)As(e,t,r),e=e.sibling}var ge=null,tt=!1;function zt(e,t,r){for(r=r.child;r!==null;)Ud(e,t,r),r=r.sibling}function Ud(e,t,r){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Za,r)}catch{}switch(r.tag){case 5:je||Cr(r,t);case 6:var n=ge,a=tt;ge=null,zt(e,t,r),ge=n,tt=a,ge!==null&&(tt?(e=ge,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ge.removeChild(r.stateNode));break;case 18:ge!==null&&(tt?(e=ge,r=r.stateNode,e.nodeType===8?Ro(e.parentNode,r):e.nodeType===1&&Ro(e,r),Sn(e)):Ro(ge,r.stateNode));break;case 4:n=ge,a=tt,ge=r.stateNode.containerInfo,tt=!0,zt(e,t,r),ge=n,tt=a;break;case 0:case 11:case 14:case 15:if(!je&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var o=a,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&$s(r,t,i),a=a.next}while(a!==n)}zt(e,t,r);break;case 1:if(!je&&(Cr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){se(r,t,l)}zt(e,t,r);break;case 21:zt(e,t,r);break;case 22:r.mode&1?(je=(n=je)||r.memoizedState!==null,zt(e,t,r),je=n):zt(e,t,r);break;default:zt(e,t,r)}}function uc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Vm),t.forEach(function(n){var a=eh.bind(null,e,n);r.has(n)||(r.add(n),n.then(a,a))})}}function Ze(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var a=r[n];try{var o=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:ge=l.stateNode,tt=!1;break e;case 3:ge=l.stateNode.containerInfo,tt=!0;break e;case 4:ge=l.stateNode.containerInfo,tt=!0;break e}l=l.return}if(ge===null)throw Error(E(160));Ud(o,i,a),ge=null,tt=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){se(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bd(t,e),t=t.sibling}function Bd(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ze(t,e),it(e),n&4){try{gn(3,e,e.return),io(3,e)}catch(b){se(e,e.return,b)}try{gn(5,e,e.return)}catch(b){se(e,e.return,b)}}break;case 1:Ze(t,e),it(e),n&512&&r!==null&&Cr(r,r.return);break;case 5:if(Ze(t,e),it(e),n&512&&r!==null&&Cr(r,r.return),e.flags&32){var a=e.stateNode;try{wn(a,"")}catch(b){se(e,e.return,b)}}if(n&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,i=r!==null?r.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&uu(a,o),ss(l,i);var u=ss(l,o);for(i=0;i<c.length;i+=2){var m=c[i],p=c[i+1];m==="style"?hu(a,p):m==="dangerouslySetInnerHTML"?fu(a,p):m==="children"?wn(a,p):ei(a,m,p,u)}switch(l){case"input":ts(a,o);break;case"textarea":du(a,o);break;case"select":var g=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?Tr(a,!!o.multiple,x,!1):g!==!!o.multiple&&(o.defaultValue!=null?Tr(a,!!o.multiple,o.defaultValue,!0):Tr(a,!!o.multiple,o.multiple?[]:"",!1))}a[zn]=o}catch(b){se(e,e.return,b)}}break;case 6:if(Ze(t,e),it(e),n&4){if(e.stateNode===null)throw Error(E(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(b){se(e,e.return,b)}}break;case 3:if(Ze(t,e),it(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Sn(t.containerInfo)}catch(b){se(e,e.return,b)}break;case 4:Ze(t,e),it(e);break;case 13:Ze(t,e),it(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||($i=le())),n&4&&uc(e);break;case 22:if(m=r!==null&&r.memoizedState!==null,e.mode&1?(je=(u=je)||m,Ze(t,e),je=u):Ze(t,e),it(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(T=e,m=e.child;m!==null;){for(p=T=m;T!==null;){switch(g=T,x=g.child,g.tag){case 0:case 11:case 14:case 15:gn(4,g,g.return);break;case 1:Cr(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){n=g,r=g.return;try{t=n,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(b){se(n,r,b)}}break;case 5:Cr(g,g.return);break;case 22:if(g.memoizedState!==null){pc(p);continue}}x!==null?(x.return=g,T=x):pc(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{a=p.stateNode,u?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,c=p.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=mu("display",i))}catch(b){se(e,e.return,b)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(b){se(e,e.return,b)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ze(t,e),it(e),n&4&&uc(e);break;case 21:break;default:Ze(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Fd(r)){var n=r;break e}r=r.return}throw Error(E(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(wn(a,""),n.flags&=-33);var o=cc(e);As(e,o,a);break;case 3:case 4:var i=n.stateNode.containerInfo,l=cc(e);Ls(e,l,i);break;default:throw Error(E(161))}}catch(c){se(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hm(e,t,r){T=e,Wd(e)}function Wd(e,t,r){for(var n=(e.mode&1)!==0;T!==null;){var a=T,o=a.child;if(a.tag===22&&n){var i=a.memoizedState!==null||sa;if(!i){var l=a.alternate,c=l!==null&&l.memoizedState!==null||je;l=sa;var u=je;if(sa=i,(je=c)&&!u)for(T=a;T!==null;)i=T,c=i.child,i.tag===22&&i.memoizedState!==null?fc(a):c!==null?(c.return=i,T=c):fc(a);for(;o!==null;)T=o,Wd(o),o=o.sibling;T=a,sa=l,je=u}dc(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,T=o):dc(e)}}function dc(e){for(;T!==null;){var t=T;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:je||io(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!je)if(r===null)n.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:et(t.type,r.memoizedProps);n.componentDidUpdate(a,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Gl(t,o,n);break;case 3:var i=t.updateQueue;if(i!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Gl(t,i,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Sn(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}je||t.flags&512&&Rs(t)}catch(g){se(t,t.return,g)}}if(t===e){T=null;break}if(r=t.sibling,r!==null){r.return=t.return,T=r;break}T=t.return}}function pc(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var r=t.sibling;if(r!==null){r.return=t.return,T=r;break}T=t.return}}function fc(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{io(4,t)}catch(c){se(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var a=t.return;try{n.componentDidMount()}catch(c){se(t,a,c)}}var o=t.return;try{Rs(t)}catch(c){se(t,o,c)}break;case 5:var i=t.return;try{Rs(t)}catch(c){se(t,i,c)}}}catch(c){se(t,t.return,c)}if(t===e){T=null;break}var l=t.sibling;if(l!==null){l.return=t.return,T=l;break}T=t.return}}var Qm=Math.ceil,Va=_t.ReactCurrentDispatcher,Ti=_t.ReactCurrentOwner,Ke=_t.ReactCurrentBatchConfig,V=0,me=null,ce=null,xe=0,Oe=0,zr=Qt(0),pe=0,Ln=null,ir=0,lo=0,Di=0,xn=null,De=null,$i=0,Hr=1/0,ht=null,qa=!1,Is=null,Ut=null,ia=!1,Lt=null,Ha=0,vn=0,Ms=null,ba=-1,ka=0;function ze(){return V&6?le():ba!==-1?ba:ba=le()}function Bt(e){return e.mode&1?V&2&&xe!==0?xe&-xe:Pm.transition!==null?(ka===0&&(ka=Nu()),ka):(e=H,e!==0||(e=window.event,e=e===void 0?16:Ru(e.type)),e):1}function ot(e,t,r,n){if(50<vn)throw vn=0,Ms=null,Error(E(185));On(e,r,n),(!(V&2)||e!==me)&&(e===me&&(!(V&2)&&(lo|=r),pe===4&&$t(e,xe)),Ie(e,n),r===1&&V===0&&!(t.mode&1)&&(Hr=le()+500,ao&&Kt()))}function Ie(e,t){var r=e.callbackNode;Pf(e,t);var n=za(e,e===me?xe:0);if(n===0)r!==null&&kl(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&kl(r),t===1)e.tag===0?zm(mc.bind(null,e)):Zu(mc.bind(null,e)),_m(function(){!(V&6)&&Kt()}),r=null;else{switch(Cu(n)){case 1:r=oi;break;case 4:r=_u;break;case 16:r=Ca;break;case 536870912:r=Eu;break;default:r=Ca}r=Yd(r,Vd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Vd(e,t){if(ba=-1,ka=0,V&6)throw Error(E(327));var r=e.callbackNode;if(Ar()&&e.callbackNode!==r)return null;var n=za(e,e===me?xe:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Qa(e,n);else{t=n;var a=V;V|=2;var o=Hd();(me!==e||xe!==t)&&(ht=null,Hr=le()+500,tr(e,t));do try{Jm();break}catch(l){qd(e,l)}while(!0);vi(),Va.current=o,V=a,ce!==null?t=0:(me=null,xe=0,t=pe)}if(t!==0){if(t===2&&(a=ds(e),a!==0&&(n=a,t=Os(e,a))),t===1)throw r=Ln,tr(e,0),$t(e,n),Ie(e,le()),r;if(t===6)$t(e,n);else{if(a=e.current.alternate,!(n&30)&&!Km(a)&&(t=Qa(e,n),t===2&&(o=ds(e),o!==0&&(n=o,t=Os(e,o))),t===1))throw r=Ln,tr(e,0),$t(e,n),Ie(e,le()),r;switch(e.finishedWork=a,e.finishedLanes=n,t){case 0:case 1:throw Error(E(345));case 2:Jt(e,De,ht);break;case 3:if($t(e,n),(n&130023424)===n&&(t=$i+500-le(),10<t)){if(za(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){ze(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ys(Jt.bind(null,e,De,ht),t);break}Jt(e,De,ht);break;case 4:if($t(e,n),(n&4194240)===n)break;for(t=e.eventTimes,a=-1;0<n;){var i=31-at(n);o=1<<i,i=t[i],i>a&&(a=i),n&=~o}if(n=a,n=le()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Qm(n/1960))-n,10<n){e.timeoutHandle=ys(Jt.bind(null,e,De,ht),n);break}Jt(e,De,ht);break;case 5:Jt(e,De,ht);break;default:throw Error(E(329))}}}return Ie(e,le()),e.callbackNode===r?Vd.bind(null,e):null}function Os(e,t){var r=xn;return e.current.memoizedState.isDehydrated&&(tr(e,t).flags|=256),e=Qa(e,t),e!==2&&(t=De,De=r,t!==null&&Fs(t)),e}function Fs(e){De===null?De=e:De.push.apply(De,e)}function Km(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var a=r[n],o=a.getSnapshot;a=a.value;try{if(!st(o(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $t(e,t){for(t&=~Di,t&=~lo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-at(t),n=1<<r;e[r]=-1,t&=~n}}function mc(e){if(V&6)throw Error(E(327));Ar();var t=za(e,0);if(!(t&1))return Ie(e,le()),null;var r=Qa(e,t);if(e.tag!==0&&r===2){var n=ds(e);n!==0&&(t=n,r=Os(e,n))}if(r===1)throw r=Ln,tr(e,0),$t(e,t),Ie(e,le()),r;if(r===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jt(e,De,ht),Ie(e,le()),null}function Ri(e,t){var r=V;V|=1;try{return e(t)}finally{V=r,V===0&&(Hr=le()+500,ao&&Kt())}}function lr(e){Lt!==null&&Lt.tag===0&&!(V&6)&&Ar();var t=V;V|=1;var r=Ke.transition,n=H;try{if(Ke.transition=null,H=1,e)return e()}finally{H=n,Ke.transition=r,V=t,!(V&6)&&Kt()}}function Li(){Oe=zr.current,X(zr)}function tr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Sm(r)),ce!==null)for(r=ce.return;r!==null;){var n=r;switch(hi(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Ra();break;case 3:Vr(),X(Le),X(Se),Si();break;case 5:ji(n);break;case 4:Vr();break;case 13:X(te);break;case 19:X(te);break;case 10:yi(n.type._context);break;case 22:case 23:Li()}r=r.return}if(me=e,ce=e=Wt(e.current,null),xe=Oe=t,pe=0,Ln=null,Di=lo=ir=0,De=xn=null,Xt!==null){for(t=0;t<Xt.length;t++)if(r=Xt[t],n=r.interleaved,n!==null){r.interleaved=null;var a=n.next,o=r.pending;if(o!==null){var i=o.next;o.next=a,n.next=i}r.pending=n}Xt=null}return e}function qd(e,t){do{var r=ce;try{if(vi(),va.current=Wa,Ba){for(var n=ne.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}Ba=!1}if(sr=0,fe=de=ne=null,hn=!1,Dn=0,Ti.current=null,r===null||r.return===null){pe=1,Ln=t,ce=null;break}e:{var o=e,i=r.return,l=r,c=t;if(t=xe,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,m=l,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var x=tc(i);if(x!==null){x.flags&=-257,rc(x,i,l,o,t),x.mode&1&&ec(o,u,t),t=x,c=u;var v=t.updateQueue;if(v===null){var b=new Set;b.add(c),t.updateQueue=b}else v.add(c);break e}else{if(!(t&1)){ec(o,u,t),Ai();break e}c=Error(E(426))}}else if(Z&&l.mode&1){var S=tc(i);if(S!==null){!(S.flags&65536)&&(S.flags|=256),rc(S,i,l,o,t),gi(qr(c,l));break e}}o=c=qr(c,l),pe!==4&&(pe=2),xn===null?xn=[o]:xn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Cd(o,c,t);Kl(o,f);break e;case 1:l=c;var d=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ut===null||!Ut.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=zd(o,l,t);Kl(o,w);break e}}o=o.return}while(o!==null)}Kd(r)}catch(_){t=_,ce===r&&r!==null&&(ce=r=r.return);continue}break}while(!0)}function Hd(){var e=Va.current;return Va.current=Wa,e===null?Wa:e}function Ai(){(pe===0||pe===3||pe===2)&&(pe=4),me===null||!(ir&268435455)&&!(lo&268435455)||$t(me,xe)}function Qa(e,t){var r=V;V|=2;var n=Hd();(me!==e||xe!==t)&&(ht=null,tr(e,t));do try{Gm();break}catch(a){qd(e,a)}while(!0);if(vi(),V=r,Va.current=n,ce!==null)throw Error(E(261));return me=null,xe=0,pe}function Gm(){for(;ce!==null;)Qd(ce)}function Jm(){for(;ce!==null&&!bf();)Qd(ce)}function Qd(e){var t=Jd(e.alternate,e,Oe);e.memoizedProps=e.pendingProps,t===null?Kd(e):ce=t,Ti.current=null}function Kd(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Wm(r,t),r!==null){r.flags&=32767,ce=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,ce=null;return}}else if(r=Bm(r,t,Oe),r!==null){ce=r;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);pe===0&&(pe=5)}function Jt(e,t,r){var n=H,a=Ke.transition;try{Ke.transition=null,H=1,Ym(e,t,r,n)}finally{Ke.transition=a,H=n}return null}function Ym(e,t,r,n){do Ar();while(Lt!==null);if(V&6)throw Error(E(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(Tf(e,o),e===me&&(ce=me=null,xe=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ia||(ia=!0,Yd(Ca,function(){return Ar(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Ke.transition,Ke.transition=null;var i=H;H=1;var l=V;V|=4,Ti.current=null,qm(e,r),Bd(r,e),xm(xs),Pa=!!gs,xs=gs=null,e.current=r,Hm(r),kf(),V=l,H=i,Ke.transition=o}else e.current=r;if(ia&&(ia=!1,Lt=e,Ha=a),o=e.pendingLanes,o===0&&(Ut=null),_f(r.stateNode),Ie(e,le()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],n(a.value,{componentStack:a.stack,digest:a.digest});if(qa)throw qa=!1,e=Is,Is=null,e;return Ha&1&&e.tag!==0&&Ar(),o=e.pendingLanes,o&1?e===Ms?vn++:(vn=0,Ms=e):vn=0,Kt(),null}function Ar(){if(Lt!==null){var e=Cu(Ha),t=Ke.transition,r=H;try{if(Ke.transition=null,H=16>e?16:e,Lt===null)var n=!1;else{if(e=Lt,Lt=null,Ha=0,V&6)throw Error(E(331));var a=V;for(V|=4,T=e.current;T!==null;){var o=T,i=o.child;if(T.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(T=u;T!==null;){var m=T;switch(m.tag){case 0:case 11:case 15:gn(8,m,o)}var p=m.child;if(p!==null)p.return=m,T=p;else for(;T!==null;){m=T;var g=m.sibling,x=m.return;if(Od(m),m===u){T=null;break}if(g!==null){g.return=x,T=g;break}T=x}}}var v=o.alternate;if(v!==null){var b=v.child;if(b!==null){v.child=null;do{var S=b.sibling;b.sibling=null,b=S}while(b!==null)}}T=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,T=i;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:gn(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,T=f;break e}T=o.return}}var d=e.current;for(T=d;T!==null;){i=T;var h=i.child;if(i.subtreeFlags&2064&&h!==null)h.return=i,T=h;else e:for(i=d;T!==null;){if(l=T,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:io(9,l)}}catch(_){se(l,l.return,_)}if(l===i){T=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,T=w;break e}T=l.return}}if(V=a,Kt(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Za,e)}catch{}n=!0}return n}finally{H=r,Ke.transition=t}}return!1}function hc(e,t,r){t=qr(r,t),t=Cd(e,t,1),e=Ft(e,t,1),t=ze(),e!==null&&(On(e,1,t),Ie(e,t))}function se(e,t,r){if(e.tag===3)hc(e,e,r);else for(;t!==null;){if(t.tag===3){hc(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ut===null||!Ut.has(n))){e=qr(r,e),e=zd(t,e,1),t=Ft(t,e,1),e=ze(),t!==null&&(On(t,1,e),Ie(t,e));break}}t=t.return}}function Xm(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=ze(),e.pingedLanes|=e.suspendedLanes&r,me===e&&(xe&r)===r&&(pe===4||pe===3&&(xe&130023424)===xe&&500>le()-$i?tr(e,0):Di|=r),Ie(e,t)}function Gd(e,t){t===0&&(e.mode&1?(t=Yn,Yn<<=1,!(Yn&130023424)&&(Yn=4194304)):t=1);var r=ze();e=jt(e,t),e!==null&&(On(e,t,r),Ie(e,r))}function Zm(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Gd(e,r)}function eh(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(E(314))}n!==null&&n.delete(t),Gd(e,r)}var Jd;Jd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)$e=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return $e=!1,Um(e,t,r);$e=!!(e.flags&131072)}else $e=!1,Z&&t.flags&1048576&&ed(t,Ia,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;wa(e,t),e=t.pendingProps;var a=Ur(t,Se.current);Lr(t,r),a=Ei(null,t,n,e,a,r);var o=Ni();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(n)?(o=!0,La(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,bi(t),a.updater=so,t.stateNode=a,a._reactInternals=t,Es(t,n,e,r),t=zs(null,t,n,!0,o,r)):(t.tag=0,Z&&o&&mi(t),Ce(null,t,a,r),t=t.child),t;case 16:n=t.elementType;e:{switch(wa(e,t),e=t.pendingProps,a=n._init,n=a(n._payload),t.type=n,a=t.tag=rh(n),e=et(n,e),a){case 0:t=Cs(null,t,n,e,r);break e;case 1:t=oc(null,t,n,e,r);break e;case 11:t=nc(null,t,n,e,r);break e;case 14:t=ac(null,t,n,et(n.type,e),r);break e}throw Error(E(306,n,""))}return t;case 0:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:et(n,a),Cs(e,t,n,a,r);case 1:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:et(n,a),oc(e,t,n,a,r);case 3:e:{if($d(t),e===null)throw Error(E(387));n=t.pendingProps,o=t.memoizedState,a=o.element,sd(e,t),Fa(t,n,null,r);var i=t.memoizedState;if(n=i.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=qr(Error(E(423)),t),t=sc(e,t,n,r,a);break e}else if(n!==a){a=qr(Error(E(424)),t),t=sc(e,t,n,r,a);break e}else for(Fe=Ot(t.stateNode.containerInfo.firstChild),Ue=t,Z=!0,rt=null,r=ad(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Br(),n===a){t=St(e,t,r);break e}Ce(e,t,n,r)}t=t.child}return t;case 5:return id(t),e===null&&js(t),n=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,i=a.children,vs(n,a)?i=null:o!==null&&vs(n,o)&&(t.flags|=32),Dd(e,t),Ce(e,t,i,r),t.child;case 6:return e===null&&js(t),null;case 13:return Rd(e,t,r);case 4:return ki(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Wr(t,null,n,r):Ce(e,t,n,r),t.child;case 11:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:et(n,a),nc(e,t,n,a,r);case 7:return Ce(e,t,t.pendingProps,r),t.child;case 8:return Ce(e,t,t.pendingProps.children,r),t.child;case 12:return Ce(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,a=t.pendingProps,o=t.memoizedProps,i=a.value,G(Ma,n._currentValue),n._currentValue=i,o!==null)if(st(o.value,i)){if(o.children===a.children&&!Le.current){t=St(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){i=o.child;for(var c=l.firstContext;c!==null;){if(c.context===n){if(o.tag===1){c=wt(-1,r&-r),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?c.next=c:(c.next=m.next,m.next=c),u.pending=c}}o.lanes|=r,c=o.alternate,c!==null&&(c.lanes|=r),Ss(o.return,r,t),l.lanes|=r;break}c=c.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(E(341));i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),Ss(i,r,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}Ce(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,n=t.pendingProps.children,Lr(t,r),a=Ge(a),n=n(a),t.flags|=1,Ce(e,t,n,r),t.child;case 14:return n=t.type,a=et(n,t.pendingProps),a=et(n.type,a),ac(e,t,n,a,r);case 15:return Pd(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:et(n,a),wa(e,t),t.tag=1,Ae(n)?(e=!0,La(t)):e=!1,Lr(t,r),Nd(t,n,a),Es(t,n,a,r),zs(null,t,n,!0,e,r);case 19:return Ld(e,t,r);case 22:return Td(e,t,r)}throw Error(E(156,t.tag))};function Yd(e,t){return Su(e,t)}function th(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(e,t,r,n){return new th(e,t,r,n)}function Ii(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rh(e){if(typeof e=="function")return Ii(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ri)return 11;if(e===ni)return 14}return 2}function Wt(e,t){var r=e.alternate;return r===null?(r=Qe(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ja(e,t,r,n,a,o){var i=2;if(n=e,typeof e=="function")Ii(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case yr:return rr(r.children,a,o,t);case ti:i=8,a|=8;break;case Jo:return e=Qe(12,r,t,a|2),e.elementType=Jo,e.lanes=o,e;case Yo:return e=Qe(13,r,t,a),e.elementType=Yo,e.lanes=o,e;case Xo:return e=Qe(19,r,t,a),e.elementType=Xo,e.lanes=o,e;case iu:return co(r,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ou:i=10;break e;case su:i=9;break e;case ri:i=11;break e;case ni:i=14;break e;case Pt:i=16,n=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Qe(i,r,t,a),t.elementType=e,t.type=n,t.lanes=o,t}function rr(e,t,r,n){return e=Qe(7,e,n,t),e.lanes=r,e}function co(e,t,r,n){return e=Qe(22,e,n,t),e.elementType=iu,e.lanes=r,e.stateNode={isHidden:!1},e}function Bo(e,t,r){return e=Qe(6,e,null,t),e.lanes=r,e}function Wo(e,t,r){return t=Qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nh(e,t,r,n,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jo(0),this.expirationTimes=jo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jo(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Mi(e,t,r,n,a,o,i,l,c){return e=new nh(e,t,r,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Qe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},bi(o),e}function ah(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Xd(e){if(!e)return qt;e=e._reactInternals;e:{if(pr(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var r=e.type;if(Ae(r))return Xu(e,r,t)}return t}function Zd(e,t,r,n,a,o,i,l,c){return e=Mi(r,n,!0,e,a,o,i,l,c),e.context=Xd(null),r=e.current,n=ze(),a=Bt(r),o=wt(n,a),o.callback=t??null,Ft(r,o,a),e.current.lanes=a,On(e,a,n),Ie(e,n),e}function uo(e,t,r,n){var a=t.current,o=ze(),i=Bt(a);return r=Xd(r),t.context===null?t.context=r:t.pendingContext=r,t=wt(o,i),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Ft(a,t,i),e!==null&&(ot(e,a,i,o),xa(e,a,i)),i}function Ka(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Oi(e,t){gc(e,t),(e=e.alternate)&&gc(e,t)}function oh(){return null}var ep=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fi(e){this._internalRoot=e}po.prototype.render=Fi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));uo(e,t,null,null)};po.prototype.unmount=Fi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lr(function(){uo(null,e,null,null)}),t[kt]=null}};function po(e){this._internalRoot=e}po.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Dt.length&&t!==0&&t<Dt[r].priority;r++);Dt.splice(r,0,e),r===0&&$u(e)}};function Ui(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xc(){}function sh(e,t,r,n,a){if(a){if(typeof n=="function"){var o=n;n=function(){var u=Ka(i);o.call(u)}}var i=Zd(t,n,e,0,null,!1,!1,"",xc);return e._reactRootContainer=i,e[kt]=i.current,Nn(e.nodeType===8?e.parentNode:e),lr(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var l=n;n=function(){var u=Ka(c);l.call(u)}}var c=Mi(e,0,!1,null,null,!1,!1,"",xc);return e._reactRootContainer=c,e[kt]=c.current,Nn(e.nodeType===8?e.parentNode:e),lr(function(){uo(t,c,r,n)}),c}function mo(e,t,r,n,a){var o=r._reactRootContainer;if(o){var i=o;if(typeof a=="function"){var l=a;a=function(){var c=Ka(i);l.call(c)}}uo(t,i,e,a)}else i=sh(r,t,e,a,n);return Ka(i)}zu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=ln(t.pendingLanes);r!==0&&(si(t,r|1),Ie(t,le()),!(V&6)&&(Hr=le()+500,Kt()))}break;case 13:lr(function(){var n=jt(e,1);if(n!==null){var a=ze();ot(n,e,1,a)}}),Oi(e,1)}};ii=function(e){if(e.tag===13){var t=jt(e,134217728);if(t!==null){var r=ze();ot(t,e,134217728,r)}Oi(e,134217728)}};Pu=function(e){if(e.tag===13){var t=Bt(e),r=jt(e,t);if(r!==null){var n=ze();ot(r,e,t,n)}Oi(e,t)}};Tu=function(){return H};Du=function(e,t){var r=H;try{return H=e,t()}finally{H=r}};ls=function(e,t,r){switch(t){case"input":if(ts(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var a=no(n);if(!a)throw Error(E(90));cu(n),ts(n,a)}}}break;case"textarea":du(e,r);break;case"select":t=r.value,t!=null&&Tr(e,!!r.multiple,t,!1)}};vu=Ri;yu=lr;var ih={usingClientEntryPoint:!1,Events:[Un,jr,no,gu,xu,Ri]},an={findFiberByHostInstance:Yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lh={bundleType:an.bundleType,version:an.version,rendererPackageName:an.rendererPackageName,rendererConfig:an.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_t.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ku(e),e===null?null:e.stateNode},findFiberByHostInstance:an.findFiberByHostInstance||oh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var la=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!la.isDisabled&&la.supportsFiber)try{Za=la.inject(lh),dt=la}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ih;We.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ui(t))throw Error(E(200));return ah(e,t,null,r)};We.createRoot=function(e,t){if(!Ui(e))throw Error(E(299));var r=!1,n="",a=ep;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Mi(e,1,!1,null,null,r,!1,n,a),e[kt]=t.current,Nn(e.nodeType===8?e.parentNode:e),new Fi(t)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=ku(t),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return lr(e)};We.hydrate=function(e,t,r){if(!fo(t))throw Error(E(200));return mo(null,e,t,!0,r)};We.hydrateRoot=function(e,t,r){if(!Ui(e))throw Error(E(405));var n=r!=null&&r.hydratedSources||null,a=!1,o="",i=ep;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),t=Zd(t,null,e,1,r??null,a,!1,o,i),e[kt]=t.current,Nn(e),n)for(e=0;e<n.length;e++)r=n[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new po(t)};We.render=function(e,t,r){if(!fo(t))throw Error(E(200));return mo(null,e,t,!1,r)};We.unmountComponentAtNode=function(e){if(!fo(e))throw Error(E(40));return e._reactRootContainer?(lr(function(){mo(null,null,e,!1,function(){e._reactRootContainer=null,e[kt]=null})}),!0):!1};We.unstable_batchedUpdates=Ri;We.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!fo(r))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return mo(e,t,r,!1,n)};We.version="18.3.1-next-f1338f8080-20240426";function tp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tp)}catch(e){console.error(e)}}tp(),tu.exports=We;var ch=tu.exports,vc=ch;Ko.createRoot=vc.createRoot,Ko.hydrateRoot=vc.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function An(){return An=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},An.apply(null,arguments)}var er;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(er||(er={}));const yc="popstate";function uh(e){e===void 0&&(e={});function t(n,a){let{pathname:o,search:i,hash:l}=n.location;return Us("",{pathname:o,search:i,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:rp(a)}return fh(t,r,null,e)}function ft(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function dh(e,t){{typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ph(){return Math.random().toString(36).substr(2,8)}function wc(e,t){return{usr:e.state,key:e.key,idx:t}}function Us(e,t,r,n){return r===void 0&&(r=null),An({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ho(t):t,{state:r,key:t&&t.key||n||ph()})}function rp(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function ho(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function fh(e,t,r,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:o=!1}=n,i=a.history,l=er.Pop,c=null,u=m();u==null&&(u=0,i.replaceState(An({},i.state,{idx:u}),""));function m(){return(i.state||{idx:null}).idx}function p(){l=er.Pop;let S=m(),f=S==null?null:S-u;u=S,c&&c({action:l,location:b.location,delta:f})}function g(S,f){l=er.Push;let d=Us(b.location,S,f);u=m()+1;let h=wc(d,u),w=b.createHref(d);try{i.pushState(h,"",w)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;a.location.assign(w)}o&&c&&c({action:l,location:b.location,delta:1})}function x(S,f){l=er.Replace;let d=Us(b.location,S,f);u=m();let h=wc(d,u),w=b.createHref(d);i.replaceState(h,"",w),o&&c&&c({action:l,location:b.location,delta:0})}function v(S){let f=a.location.origin!=="null"?a.location.origin:a.location.href,d=typeof S=="string"?S:rp(S);return d=d.replace(/ $/,"%20"),ft(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let b={get action(){return l},get location(){return e(a,i)},listen(S){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(yc,p),c=S,()=>{a.removeEventListener(yc,p),c=null}},createHref(S){return t(a,S)},createURL:v,encodeLocation(S){let f=v(S);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:x,go(S){return i.go(S)}};return b}var bc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(bc||(bc={}));function mh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const hh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gh=e=>hh.test(e);function xh(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?ho(e):e,o;if(r)if(gh(r))o=r;else{if(r.includes("//")){let i=r;r=np(r),dh(!1,"Pathnames cannot have embedded double slashes - normalizing "+(i+" -> "+r))}r.startsWith("/")?o=kc(r.substring(1),"/"):o=kc(r,t)}else o=t;return{pathname:o,search:kh(n),hash:jh(a)}}function kc(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function Vo(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function vh(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function yh(e,t){let r=vh(e);return t?r.map((n,a)=>a===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function wh(e,t,r,n){n===void 0&&(n=!1);let a;typeof e=="string"?a=ho(e):(a=An({},e),ft(!a.pathname||!a.pathname.includes("?"),Vo("?","pathname","search",a)),ft(!a.pathname||!a.pathname.includes("#"),Vo("#","pathname","hash",a)),ft(!a.search||!a.search.includes("#"),Vo("#","search","hash",a)));let o=e===""||a.pathname==="",i=o?"/":a.pathname,l;if(i==null)l=r;else{let p=t.length-1;if(!n&&i.startsWith("..")){let g=i.split("/");for(;g[0]==="..";)g.shift(),p-=1;a.pathname=g.join("/")}l=p>=0?t[p]:"/"}let c=xh(a,l),u=i&&i!=="/"&&i.endsWith("/"),m=(o||i===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||m)&&(c.pathname+="/"),c}const np=e=>e.replace(/\/\/+/g,"/"),bh=e=>np(e.join("/")),kh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,jh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,ap=["post","put","patch","delete"];new Set(ap);const Sh=["get",...ap];new Set(Sh);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ga(){return Ga=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ga.apply(null,arguments)}const op=y.createContext(null),Bi=y.createContext(null),Wi=y.createContext(null),Vi=y.createContext({outlet:null,matches:[],isDataRoute:!1});function qi(){return y.useContext(Wi)!=null}function sp(){return qi()||ft(!1),y.useContext(Wi).location}function ip(e){y.useContext(Bi).static||y.useLayoutEffect(e)}function _h(){let{isDataRoute:e}=y.useContext(Vi);return e?Ph():Eh()}function Eh(){qi()||ft(!1);let e=y.useContext(op),{basename:t,future:r,navigator:n}=y.useContext(Bi),{matches:a}=y.useContext(Vi),{pathname:o}=sp(),i=JSON.stringify(yh(a,r.v7_relativeSplatPath)),l=y.useRef(!1);return ip(()=>{l.current=!0}),y.useCallback(function(u,m){if(m===void 0&&(m={}),!l.current)return;if(typeof u=="number"){n.go(u);return}let p=wh(u,JSON.parse(i),o,m.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:bh([t,p.pathname])),(m.replace?n.replace:n.push)(p,m.state,m)},[t,n,i,o,e])}var lp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(lp||{}),cp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(cp||{});function Nh(e){let t=y.useContext(op);return t||ft(!1),t}function Ch(e){let t=y.useContext(Vi);return t||ft(!1),t}function zh(e){let t=Ch(),r=t.matches[t.matches.length-1];return r.route.id||ft(!1),r.route.id}function Ph(){let{router:e}=Nh(lp.UseNavigateStable),t=zh(cp.UseNavigateStable),r=y.useRef(!1);return ip(()=>{r.current=!0}),y.useCallback(function(a,o){o===void 0&&(o={}),r.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Ga({fromRouteId:t},o)))},[e,t])}function Th(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Dh(e){let{basename:t="/",children:r=null,location:n,navigationType:a=er.Pop,navigator:o,static:i=!1,future:l}=e;qi()&&ft(!1);let c=t.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:c,navigator:o,static:i,future:Ga({v7_relativeSplatPath:!1},l)}),[c,l,o,i]);typeof n=="string"&&(n=ho(n));let{pathname:m="/",search:p="",hash:g="",state:x=null,key:v="default"}=n,b=y.useMemo(()=>{let S=mh(m,c);return S==null?null:{location:{pathname:S,search:p,hash:g,state:x,key:v},navigationType:a}},[c,m,p,g,x,v,a]);return b==null?null:y.createElement(Bi.Provider,{value:u},y.createElement(Wi.Provider,{children:r,value:b}))}new Promise(()=>{});/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const $h="6";try{window.__reactRouterVersion=$h}catch{}const Rh="startTransition",jc=Yp[Rh];function Lh(e){let{basename:t,children:r,future:n,window:a}=e,o=y.useRef();o.current==null&&(o.current=uh({window:a,v5Compat:!0}));let i=o.current,[l,c]=y.useState({action:i.action,location:i.location}),{v7_startTransition:u}=n||{},m=y.useCallback(p=>{u&&jc?jc(()=>c(p)):c(p)},[c,u]);return y.useLayoutEffect(()=>i.listen(m),[i,m]),y.useEffect(()=>Th(n),[n]),y.createElement(Dh,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:i,future:n})}var Sc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Sc||(Sc={}));var _c;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(_c||(_c={}));const W="/api",Ah=".pdf,.png,.jpg,.jpeg,.tif,.tiff,.bmp,.webp,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv",K={ADDED:{bg:"var(--diff-added-bg)",border:"var(--diff-added-border)",text:"var(--diff-added-text)",chip:"var(--diff-added-chip)"},DELETED:{bg:"var(--diff-deleted-bg)",border:"var(--diff-deleted-border)",text:"var(--diff-deleted-text)",chip:"var(--diff-deleted-chip)"},MODIFIED:{bg:"var(--diff-modified-bg)",border:"var(--diff-modified-border)",text:"var(--diff-modified-text)",chip:"var(--diff-modified-chip)"},UNCHANGED:{bg:"var(--diff-unchanged-bg)",border:"var(--diff-unchanged-border)",text:"var(--diff-unchanged-text)",chip:"var(--diff-unchanged-chip)"},MATCH:{bg:"var(--diff-match-bg)",border:"var(--diff-match-border)",text:"var(--diff-match-text)",chip:"var(--diff-match-chip)"}},Ih=`
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
    color: #f8fbff;
    text-shadow: 0 1px 1px rgba(7, 13, 24, .22);
  }
  .theme-light .altrai-wordmark .accent,
  [data-theme="light"] .altrai-wordmark .accent {
    color: #df7a2f;
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
    color: #a9b8cc;
    font-size: 11px;
    font-weight: 600;
            padding: 0 10px 7px;
  }
  .workspace-nav-item {
    width: 100%;
    border: 1px solid transparent;
    background: transparent;
    color: #d9e4f1;
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
    color: #b8c7d9;
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
  .query-thread-head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
  }
  .query-thread-head strong {
    display: block;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 700;
  }
  .query-thread-head p {
    margin: 4px 0 0;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.45;
    max-width: 760px;
  }
  .query-status-strip {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap;
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 10px 12px;
    background: color-mix(in srgb, var(--surface-sunken) 82%, transparent);
    color: var(--text-secondary);
    font-size: 12px;
    font-weight: 600;
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
  .theme-light .query-thread-head strong,
  .theme-light .query-evidence-row span {
    color: #0b1f3a;
  }
  .theme-light .query-thread-head p,
  .theme-light .query-status-strip,
  .theme-light .query-evidence-row strong {
    color: #64748b;
  }
  .query-chat-log {
    display: grid;
    gap: 10px;
    max-height: min(58vh, 620px);
    overflow: auto;
    padding-right: 3px;
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
  .query-message.streaming {
    border-style: dashed;
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
  .query-stream-line {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--text-secondary);
    font-size: 13px;
    font-weight: 650;
  }
  .query-stream-line span {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: var(--brand-orange);
    box-shadow: 0 0 0 4px color-mix(in srgb, var(--brand-orange) 16%, transparent);
    animation: stream-pulse 1.1s ease-in-out infinite;
  }
  @keyframes stream-pulse {
    0%, 100% { opacity: .45; transform: scale(.82); }
    50% { opacity: 1; transform: scale(1); }
  }
  .query-stream-subline {
    margin-top: 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.4;
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
  .query-evidence-actions {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
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
  .query-evidence-card {
    display: grid;
    gap: 8px;
    border: 1px solid var(--border);
    border-radius: 12px;
    background: var(--surface-sunken);
    padding: 11px 12px;
    color: var(--text-primary);
  }
  .query-evidence-row {
    display: grid;
    gap: 2px;
  }
  .query-evidence-row strong {
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .02em;
  }
  .query-evidence-row span {
    color: var(--text-primary);
    font-size: 13px;
    line-height: 1.45;
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
    color: #a9b8cc;
    font-size: 11px;
    font-weight: 600;
  }
  .workspace-nav-item {
    border-radius: var(--radius-md);
    color: #d9e4f1;
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
  .admin-search {
    width: 100%;
    border: 1px solid var(--border);
    background: var(--surface-sunken);
    color: var(--text-primary);
    border-radius: var(--radius-md);
    padding: 9px 10px;
    margin-bottom: 12px;
  }
  .admin-search::placeholder {
    color: var(--text-secondary);
  }
  .admin-panel-head,
  .admin-detail-head {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    align-items: flex-start;
    margin-bottom: 14px;
  }
  .admin-detail-actions {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    flex-wrap: wrap;
  }
  .admin-collapse-head {
    display: grid;
    grid-template-columns: 34px minmax(0, 1fr) auto;
    gap: 10px;
    align-items: start;
    border: 1px solid var(--border);
    background: var(--surface-sunken);
    border-radius: var(--radius-md);
    padding: 11px;
    margin-bottom: 12px;
  }
  .admin-collapse-toggle {
    width: 28px;
    height: 28px;
    border: 1px solid var(--border);
    background: var(--surface-raised);
    color: var(--text-primary);
    border-radius: 999px;
    display: grid;
    place-items: center;
    font-weight: 750;
    cursor: pointer;
  }
  .admin-collapse-head h3 {
    margin: 0;
    color: var(--text-primary);
    font-size: 16px;
    font-weight: 700;
  }
  .admin-collapse-head p {
    margin: 4px 0 0;
    color: var(--text-secondary);
    font-size: 13px;
    line-height: 1.4;
  }
  .admin-collapse-actions {
    display: inline-flex;
    justify-content: flex-end;
    gap: 8px;
    flex-wrap: wrap;
  }
  .admin-collapsed-summary {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    align-items: center;
    border: 1px dashed var(--border);
    background: var(--surface-sunken);
    border-radius: var(--radius-md);
    padding: 12px;
    color: var(--text-secondary);
    font-size: 13px;
  }
  .dataset-list,
  .admin-form,
  .onboarding-flow,
  .admin-detail,
  .admin-edit-shell,
  .admin-config-grid,
  .seed-form {
    display: grid;
    gap: 12px;
  }
  .dataset-list {
    max-height: 62vh;
    overflow: auto;
    padding-right: 2px;
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
  .analysis-action-row {
    align-items: stretch;
    border: 1px solid var(--border);
    background: var(--surface-raised);
    border-radius: var(--radius-md);
    padding: 10px;
  }
  .analyze-action-button {
    min-width: 230px;
    border: 1px solid color-mix(in srgb, var(--brand-orange) 74%, var(--border));
    background: linear-gradient(135deg, var(--brand-orange), color-mix(in srgb, var(--brand-orange) 76%, #7a3d10));
    color: #fff;
    border-radius: var(--radius-md);
    padding: 10px 14px;
    display: grid;
    gap: 2px;
    justify-items: start;
    cursor: pointer;
    box-shadow: 0 10px 26px color-mix(in srgb, var(--brand-orange) 18%, transparent);
  }
  .analyze-action-button span {
    color: inherit;
    font-size: 14px;
    font-weight: 750;
  }
  .analyze-action-button small {
    color: rgba(255, 255, 255, .82);
    font-size: 12px;
    font-weight: 600;
    overflow-wrap: anywhere;
  }
  .analyze-action-button:disabled {
    border-color: var(--border);
    background: var(--surface-sunken);
    color: var(--text-secondary);
    box-shadow: none;
    cursor: default;
  }
  .analyze-action-button:disabled small {
    color: var(--text-secondary);
  }
  .analysis-readiness {
    flex: 1 1 320px;
    min-width: 240px;
    display: flex;
    align-content: center;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    color: var(--text-secondary);
  }
  .analysis-readiness span {
    margin: 0;
    border: 1px solid var(--border);
    background: var(--surface-sunken);
    color: var(--text-secondary);
    border-radius: 999px;
    padding: 5px 8px;
    font-size: 12px;
    font-weight: 650;
  }
  .analysis-readiness span.ready {
    border-color: color-mix(in srgb, #1f7e41 42%, var(--border));
    background: color-mix(in srgb, #1f7e41 10%, var(--surface-raised));
    color: var(--text-primary);
  }
  .analysis-readiness span.blocked {
    border-color: color-mix(in srgb, var(--brand-orange) 38%, var(--border));
    background: color-mix(in srgb, var(--brand-orange) 10%, var(--surface-raised));
    color: var(--text-primary);
  }
  .analysis-readiness small {
    flex-basis: 100%;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.35;
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
    background: color-mix(in srgb, var(--brand-orange) 12%, var(--surface-raised));
    color: var(--text-primary);
  }
  .analysis-run-steps span.done {
    border-color: color-mix(in srgb, #1f7e41 42%, var(--border));
    background: color-mix(in srgb, #1f7e41 10%, var(--surface-raised));
    color: var(--text-primary);
  }
  .analysis-run-steps span.skipped {
    border-style: dashed;
    border-color: var(--border);
    background: var(--surface-sunken);
    color: var(--text-secondary);
  }
  .analysis-run-steps span.skipped.done {
    border-color: var(--border);
    background: var(--surface-sunken);
    color: var(--text-secondary);
  }
  .analysis-run-warning {
    margin: 0;
    color: var(--brand-orange);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
  }
  .analysis-run-error {
    margin: 0;
    color: #9f2525;
    font-size: 13px;
    font-weight: 600;
  }
  .activity-stream {
    display: grid;
    gap: 9px;
    border-inline-start: 3px solid color-mix(in srgb, var(--brand-orange) 56%, var(--border));
    background: transparent;
    padding: 4px 0 4px 12px;
  }
  .activity-stream.success {
    border-inline-start-color: color-mix(in srgb, #1f7e41 56%, var(--border));
  }
  .activity-stream.failed {
    border-inline-start-color: color-mix(in srgb, #9f2525 56%, var(--border));
  }
  .activity-head {
    display: flex;
    gap: 8px;
    align-items: baseline;
    flex-wrap: wrap;
  }
  .activity-head strong {
    color: var(--text-primary);
    font-size: 14px;
  }
  .activity-head span,
  .activity-head small {
    color: var(--text-secondary);
    font-size: 12px;
  }
  .activity-lines {
    list-style: none;
    display: grid;
    gap: 5px;
    margin: 0;
    padding: 0;
  }
  .activity-lines li {
    position: relative;
    color: var(--text-secondary);
    font-size: 13px;
    line-height: 1.35;
    padding-inline-start: 18px;
  }
  .activity-lines li::before {
    content: "";
    position: absolute;
    inset-inline-start: 0;
    top: .45em;
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: var(--border);
  }
  .activity-lines li.done {
    color: var(--text-primary);
  }
  .activity-lines li.done::before {
    background: #1f7e41;
  }
  .activity-lines li.active::before {
    background: var(--brand-orange);
    box-shadow: 0 0 0 4px color-mix(in srgb, var(--brand-orange) 16%, transparent);
  }
  .activity-lines li.failed {
    color: #9f2525;
  }
  .activity-lines li.failed::before {
    background: #9f2525;
  }
  .activity-foot {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .activity-foot span {
    border: 1px solid var(--border);
    background: var(--surface-sunken);
    color: var(--text-secondary);
    border-radius: 999px;
    padding: 4px 7px;
    font-size: 12px;
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

  .comparison-chat {
    width: min(920px, 100%);
    min-height: 560px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  .comparison-chat-toolbar {
    min-height: 34px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 0 4px 10px;
    color: var(--text-secondary);
    font-size: 12px;
  }
  .comparison-chat-toolbar button,
  .comparison-chat-actions button {
    border: 0;
    background: transparent;
    color: var(--text-secondary);
    padding: 4px 0;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
  }
  .comparison-chat-toolbar button:hover,
  .comparison-chat-actions button:hover {
    color: var(--text-primary);
  }
  .comparison-chat-thread {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 26px;
    padding: 28px 8px 34px;
  }
  .comparison-chat-empty {
    min-height: 280px;
    display: grid;
    place-content: center;
    justify-items: center;
    text-align: center;
    color: var(--text-secondary);
  }
  .comparison-chat-empty svg {
    width: 28px;
    height: 28px;
    margin-bottom: 14px;
    color: var(--brand-orange);
    stroke-width: 1.5;
  }
  .comparison-chat-empty h4 {
    margin: 0;
    color: var(--text-primary);
    font-size: 20px;
    font-weight: 600;
  }
  .comparison-chat-empty p {
    max-width: 520px;
    margin: 8px 0 0;
    color: var(--text-secondary);
    font-size: 14px;
    line-height: 1.5;
  }
  .comparison-chat-message.user {
    display: flex;
    justify-content: flex-end;
  }
  .comparison-chat-user-bubble {
    max-width: min(680px, 82%);
    border-radius: 18px 18px 4px 18px;
    background: var(--surface-sunken);
    color: var(--text-primary);
    padding: 11px 15px;
    font-size: 15px;
    line-height: 1.5;
  }
  .comparison-chat-message.assistant {
    display: grid;
    grid-template-columns: 30px minmax(0, 1fr);
    gap: 12px;
    align-items: start;
  }
  .comparison-chat-avatar {
    width: 30px;
    height: 30px;
    border: 1px solid color-mix(in srgb, var(--brand-orange) 42%, var(--border));
    border-radius: 9px;
    display: grid;
    place-items: center;
    color: var(--brand-orange);
    background: color-mix(in srgb, var(--brand-orange) 8%, var(--surface-raised));
  }
  .comparison-chat-avatar svg {
    width: 15px;
    height: 15px;
    stroke-width: 1.7;
  }
  .comparison-chat-response {
    min-width: 0;
    padding-top: 3px;
  }
  .comparison-chat-answer {
    color: var(--text-primary);
    font-size: 15px;
    line-height: 1.65;
    white-space: pre-wrap;
  }
  .comparison-chat-message.error .comparison-chat-answer,
  .comparison-chat-warning {
    color: var(--diff-deleted-text);
  }
  .comparison-chat-warning {
    margin: 8px 0 0;
    font-size: 12px;
    line-height: 1.45;
  }
  .comparison-chat-actions {
    min-height: 26px;
    display: flex;
    align-items: center;
    gap: 14px;
    margin-top: 8px;
  }
  .comparison-chat-details {
    position: relative;
    color: var(--text-secondary);
    font-size: 12px;
  }
  .comparison-chat-details summary {
    cursor: pointer;
    font-weight: 600;
    list-style: none;
  }
  .comparison-chat-details summary::-webkit-details-marker {
    display: none;
  }
  .comparison-chat-details > div {
    display: grid;
    gap: 3px;
    margin-top: 7px;
    padding: 8px 10px;
    border: 1px solid var(--border);
    border-radius: 9px;
    background: var(--surface-sunken);
  }
  .comparison-chat-sources {
    display: grid;
    gap: 8px;
    margin-top: 10px;
  }
  .comparison-chat-source {
    border-inline-start: 2px solid color-mix(in srgb, var(--brand-orange) 62%, var(--border));
    background: var(--surface-sunken);
    border-radius: 0 10px 10px 0;
    padding: 10px 12px;
  }
  .comparison-chat-source > div:first-child {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
  }
  .comparison-chat-source strong {
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
  }
  .comparison-chat-source span {
    color: var(--text-secondary);
    font-size: 11px;
    white-space: nowrap;
  }
  .comparison-chat-source p {
    margin: 5px 0 0;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.45;
  }
  .comparison-chat-source details {
    margin-top: 7px;
    color: var(--text-secondary);
    font-size: 12px;
  }
  .comparison-chat-source summary {
    cursor: pointer;
    font-weight: 600;
  }
  .comparison-chat-source-change {
    display: grid;
    gap: 7px;
    margin-top: 8px;
    color: var(--text-primary);
    line-height: 1.45;
  }
  .comparison-chat-thinking {
    min-height: 30px;
    display: flex;
    align-items: center;
    gap: 4px;
    color: var(--text-secondary);
  }
  .comparison-chat-thinking span {
    width: 5px;
    height: 5px;
    border-radius: 999px;
    background: var(--text-secondary);
    animation: comparison-chat-dot 1.2s ease-in-out infinite;
  }
  .comparison-chat-thinking span:nth-child(2) {
    animation-delay: .15s;
  }
  .comparison-chat-thinking span:nth-child(3) {
    animation-delay: .3s;
  }
  .comparison-chat-thinking em {
    margin-inline-start: 6px;
    font-size: 13px;
    font-style: normal;
  }
  @keyframes comparison-chat-dot {
    0%, 70%, 100% { opacity: .3; transform: translateY(0); }
    35% { opacity: 1; transform: translateY(-3px); }
  }
  .comparison-chat-composer {
    position: sticky;
    bottom: 12px;
    z-index: 4;
    border: 1px solid var(--border);
    border-radius: 18px;
    background: var(--surface-raised);
    padding: 12px;
    box-shadow: 0 12px 34px rgba(5, 10, 20, .14);
  }
  .comparison-chat-composer textarea {
    width: 100%;
    min-height: 42px;
    max-height: 160px;
    resize: vertical;
    border: 0;
    outline: 0;
    background: transparent;
    color: var(--text-primary);
    padding: 5px 4px 10px;
    font: inherit;
    font-size: 15px;
    line-height: 1.45;
  }
  .comparison-chat-composer textarea::placeholder {
    color: var(--text-secondary);
  }
  .comparison-chat-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
  .comparison-chat-mode {
    display: flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
  }
  .comparison-chat-mode select {
    min-height: 30px;
    max-width: 220px;
    border: 1px solid var(--border);
    border-radius: 999px;
    background: var(--surface-sunken);
    color: var(--text-secondary);
    padding: 0 10px;
    outline: 0;
    font-size: 11px;
    font-weight: 600;
  }
  .comparison-chat-send {
    width: 36px;
    height: 36px;
    flex: 0 0 36px;
    border: 0;
    border-radius: 999px;
    background: var(--brand-navy);
    color: #ffffff;
    display: grid;
    place-items: center;
    cursor: pointer;
  }
  .comparison-chat-send svg {
    width: 16px;
    height: 16px;
  }
  .comparison-chat-send:disabled {
    opacity: .35;
    cursor: default;
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
    .comparison-chat {
      min-height: 480px;
    }
    .comparison-chat-thread {
      padding-inline: 0;
    }
    .comparison-chat-user-bubble {
      max-width: 92%;
    }
    .comparison-chat-source > div:first-child,
    .comparison-chat-controls {
      align-items: flex-start;
    }
    .comparison-chat-source > div:first-child {
      flex-direction: column;
      gap: 3px;
    }
    .comparison-chat-source span {
      white-space: normal;
    }
    .comparison-chat-mode {
      flex-wrap: wrap;
    }
  }
`,ut={background:"#fffdf8",border:"1px solid #ded6c8",borderRadius:8,boxShadow:"0 1px 3px rgba(31,41,55,.08)"},nr={textAlign:"start",padding:"8px 9px",borderBottom:"1px solid #ded6c8",fontWeight:650,verticalAlign:"top",whiteSpace:"normal",overflowWrap:"anywhere"},Ir={padding:"8px 9px",borderBottom:"1px solid #eee7dc",verticalAlign:"top",whiteSpace:"normal",overflowWrap:"anywhere",lineHeight:1.35},gr={border:"1px solid #ded6c8",background:"#fbfaf6",color:"#344054",borderRadius:999,padding:"4px 8px",fontSize:12,fontWeight:600};function Mh(e=!1,t={}){return{border:"none",borderRadius:6,background:e?"#98a2b3":"#1f2937",color:"white",padding:"9px 14px",fontWeight:550,cursor:e?"default":"pointer",...t}}function Oh(e={}){return{border:"1px solid #c9c0b0",borderRadius:6,background:"#fffdf8",color:"#344054",padding:"9px 13px",fontWeight:550,cursor:"pointer",...e}}function Pr(e){if(!e)return"";const t=String(e);return t.includes("Traceback (most recent call last)")||t.includes("Internal Server Error")||t.includes("psycopg")||t.includes("OperationalError")||t.includes('File "')||t.length>500?"An unexpected internal server error occurred. Please try again or check server logs.":t.replace(/\/Users\/[a-zA-Z0-9_-]+\//g,".../")}async function re(e){try{const t=await e.text();if(!t)return`Request failed with status ${e.status}`;try{const r=JSON.parse(t);return Pr(nt(r.detail||r.error||r.message||r))}catch{return t.trim().startsWith("<!DOCTYPE html>")||t.includes("<html")||t.length>200?`Server error (${e.status}). Please check backend logs.`:Pr(t)}}catch{return`Request failed with status ${e.status}`}}function ie(e){const t=nt(e);return t.toLowerCase().includes("failed to fetch")?"The app could not reach the comparison service. Please confirm the backend is running and the API URL is correct.":t||"Something went wrong while processing the documents."}async function Fh(e){const t=await fetch(`${W}/extract-runs/${e}/structured-json`);if(t.ok){const o=Bs(await t.json());if(Sa(o))return o;const i=await Ec(e,o);return Sa(i)?i:o}const r=await fetch(`${W}/extract-runs/${e}/json`);if(!r.ok)throw new Error(await re(t));const n=await r.json(),a=Bs(n);return Sa(a)?a:Ec(e,a)}function Sa(e){return!!(e&&((e.content||[]).length>0||(e.tables||[]).length>0||(e.pages||[]).some(t=>(t.content||[]).length>0||(t.tables||[]).length>0)))}async function Ec(e,t={}){const[r,n]=await Promise.allSettled([fetch(`${W}/extract-runs/${e}/blocks?limit=2000`).then(async i=>{if(!i.ok)throw new Error(await re(i));return i.json()}),fetch(`${W}/extract-runs/${e}/tables?include_rows=true`).then(async i=>{if(!i.ok)throw new Error(await re(i));return i.json()})]),a=r.status==="fulfilled"?r.value.blocks||[]:[],o=n.status==="fulfilled"?n.value.tables||[]:[];return Bs({...t,blocks:a,tables:o.length?o:t.tables||[]})}function Bs(e){var l,c,u;if(e!=null&&e.structured_json)return e.structured_json;if((e!=null&&e.document_summary||e!=null&&e.content||e!=null&&e.pages)&&Sa(e))return e;const t=(e==null?void 0:e.blocks)||[],r=(e==null?void 0:e.tables)||[],n=[];t.forEach(m=>{var x;const p=m.text||((x=m.payload)==null?void 0:x.text)||"",g=String(p).match(/^\s*([^:：]{2,80})\s*[:：]\s*(.{1,300})$/);g&&n.push({field:g[1].trim(),value:g[2].trim(),page:m.page_number,source:m.type,citation:`p.${m.page_number||"-"} - ${m.path||"document"}`}),Wh(p).forEach(v=>{n.push({...v,page:m.page_number,source:m.type,citation:`p.${m.page_number||"-"} - ${m.path||"document"}`})})}),r.slice(0,40).forEach(m=>{(m.rows||[]).slice(0,50).forEach(p=>{Object.entries(p||{}).forEach(([g,x])=>{!x||String(g).startsWith("__")||n.push({field:g,value:x,page:m.page_first||m.page_number,source:"table",table:m.display_name||m.title,citation:`${m.page_label||"page"} - ${m.title||"table"}`})})})});const a=t.filter(m=>["paragraph","list_item","kv_pair","figure","section","heading"].includes(m.type)).map(m=>{var b;const p=m.text||((b=m.payload)==null?void 0:b.text)||"",g={page:m.page_number,order:m.sequence||0,type:m.type,path:m.path,text:p,citation:`p.${m.page_number||"-"} - ${m.path||"document"}`},x=[],v=String(p).match(/^\s*([^:：]{2,80})\s*[:：]\s*(.{1,300})$/);return v&&x.push({name:v[1].trim(),value:v[2].trim()}),x.length&&(g.key_values=x),g}).filter(m=>String(m.text||"").trim()),o=[],i=new Map;return a.forEach(m=>{const p=m.page||1;i.has(p)||i.set(p,{page:p,citation:`p.${p}`,content:[],tables:[]}),i.get(p).content.push(m)}),r.forEach(m=>{const p=m.page_first||m.page_number||1;i.has(p)||i.set(p,{page:p,citation:`p.${p}`,content:[],tables:[]}),i.get(p).tables.push(m)}),Array.from(i.keys()).sort((m,p)=>m-p).forEach(m=>o.push(i.get(m))),{document_summary:(e==null?void 0:e.document_summary)||{label:((l=e==null?void 0:e.summary)==null?void 0:l.label)||(e==null?void 0:e.label)||"Extracted document",source_type:((c=e==null?void 0:e.summary)==null?void 0:c.source_format)||(e==null?void 0:e.source_format)||"document",extraction_quality:{grade:((u=e==null?void 0:e.summary)==null?void 0:u.quality)||"not rated",coverage:e==null?void 0:e.coverage},counts:{text_blocks:a.length,tables:r.length,pages:o.length}},semantic_fields:n.slice(0,220),business_structure:Uh(t,r,n),sections:t.filter(m=>["section","heading"].includes(m.type)).slice(0,200),tables:r,pages:o,content:a}}function Uh(e,t,r){const n=[{document_index:1,label:"Extracted document",sections:[]}];let a=null;return e.slice().sort((o,i)=>(o.page_number||1)-(i.page_number||1)||(o.sequence||0)-(i.sequence||0)).forEach(o=>{var i;if(["section","heading"].includes(o.type)){a={title:o.text||o.path||`Page ${o.page_number||1}`,page:o.page_number||1,path:o.path,content:[],fields:[],inline_records:[],tables:[]},n[0].sections.push(a);return}if((!a||a.page!==(o.page_number||1))&&(a={title:`Page ${o.page_number||1}`,page:o.page_number||1,path:`/page_${o.page_number||1}`,content:[],fields:[],inline_records:[],tables:[]},n[0].sections.push(a)),["paragraph","list_item","kv_pair","figure"].includes(o.type)){const l=o.text||((i=o.payload)==null?void 0:i.text)||"",c=r.filter(m=>{var p;return m.page===o.page_number&&((p=m.citation)==null?void 0:p.includes(o.path||"__no_path__"))}),u=Bh(l);a.content.push({type:o.type,page:o.page_number,path:o.path,text:l,fields:c}),a.fields.push(...c),u&&a.inline_records.push({...u,page:o.page_number,citation:`p.${o.page_number||"-"} - ${o.path||"document"}`})}}),t.forEach(o=>{const i=o.page_first||o.page_number||1;let l=n[0].sections.find(c=>c.page===i);l||(l={title:`Page ${i}`,page:i,path:`/page_${i}`,content:[],fields:[],inline_records:[],tables:[]},n[0].sections.push(l)),l.tables.push({title:o.display_name||o.title||"Detected table",page_label:o.page_label,columns:o.columns||[],row_count:o.n_rows||0,sample_rows:(o.rows||o.row_preview||[]).slice(0,8)})}),{documents:n,section_count:n[0].sections.length}}function Bh(e){const t=String(e||"").trim();if(!t)return null;const r=t.includes("|")?t.split("|").map(n=>n.trim()).filter(Boolean):t.split(/\s{3,}/).map(n=>n.trim()).filter(Boolean);return r.length<2?null:{record_type:"inline_row",columns:r.map((n,a)=>`Column ${a+1}`),values:Object.fromEntries(r.map((n,a)=>[`Column ${a+1}`,n])),text:t}}function Wh(e){const t=String(e||""),r=[["color",/\b(?:colou?r|shade)\s*(?:is|=|:)?\s*([A-Za-z][A-Za-z\s/-]{2,40})/gi],["size",/\b(?:size|dimension)\s*(?:is|=|:)?\s*([A-Z0-9][A-Z0-9\s./x-]{0,40})/gi],["quantity",/\b(?:qty|quantity|count|units?)\s*(?:is|=|:)?\s*(\d[\d,]*(?:\.\d+)?)/gi],["price",/([$€£]\s?\d[\d,]*(?:\.\d+)?)/g],["percentage",/\b(\d+(?:\.\d+)?%)\b/g],["date",/\b(\d{1,2}[/-]\d{1,2}[/-]\d{2,4}|\d{4}-\d{1,2}-\d{1,2})\b/g],["code",/\b([A-Z]{1,8}[- ]?\d{2,12}[A-Z]?)\b/gi]],n=[],a=new Set;return r.forEach(([o,i])=>{for(const l of t.matchAll(i)){const c=String(l[1]||"").replace(/\s+/g," ").trim(),u=`${o}:${c.toLowerCase()}`;!c||a.has(u)||(a.add(u),n.push({field:o,value:c}))}}),n}function nt(e){if(!e)return"";if(typeof e=="string")return Pr(e);if(e instanceof Error)return nt(e.message);if(Array.isArray(e))return e.map(nt).filter(Boolean).join(`
`);if(typeof e=="object"){if(e.detail)return nt(e.detail);if(e.error)return nt(e.error);if(e.message)return nt(e.message);try{return Pr(JSON.stringify(e,null,2))}catch{return Pr(String(e))}}return Pr(String(e))}function Vh(e){if(!(e!=null&&e.length))return[];const t=new Set;return e.slice(0,20).forEach(r=>{r&&typeof r=="object"&&!Array.isArray(r)&&Object.keys(r).forEach(n=>{fr(n)||t.add(n)})}),Array.from(t).slice(0,12)}function fr(e){const t=String(e||"");return!t||t.startsWith("__")?!0:["payload","raw","field_profiles","column_profiles","extraction_intelligence","source_tables","table_fingerprint","bbox_by_page","quality_warnings"].includes(t)}function cr(e){if(e==null||e==="")return"-";if(Array.isArray(e))return e.map(cr).join(", ");if(typeof e=="object"){const t=Object.fromEntries(Object.entries(e).filter(([r])=>!fr(r)));return Object.keys(t).length?JSON.stringify(t):"-"}return String(e)}function Nc(e){return!e||typeof e!="object"?"":Object.entries(e).filter(([,t])=>t!=null&&String(t).trim()!=="").map(([t,r])=>`${t}: ${r}`).join(" | ")}function qh(e,t=560,r=1280){const n=Math.max(1,Number(e)||1);return Math.min(r,Math.max(t,180+n*180))}function Re(e,t){if(!e)return"";const r=String(e).replace(/\s+/g," ").trim();return r.length<=t?r:`${r.slice(0,t-1)}...`}function xt(e){const t=Number(e||0);return Number.isFinite(t)?Math.round(t).toLocaleString():"0"}function Hh(e){if(!e)return"-";const t=new Date(e);return Number.isNaN(t.getTime())?"-":t.toLocaleString(void 0,{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function Qh(e,t){const r=Number(e||0);if(!Number.isFinite(r)||r<=0)return t==="complete"||t==="failed"?"-":"Running";const n=Math.max(1,Math.round(r/1e3));if(n<60)return`${n}s`;const a=Math.floor(n/60),o=n%60;if(a<60)return o?`${a}m ${o}s`:`${a}m`;const i=Math.floor(a/60),l=a%60;return l?`${i}h ${l}m`:`${i}h`}function Kh(e){return String(e||"-").replace(/\bbase\s*p\.?\s*(\d+)/gi,"Baseline page $1").replace(/\btarget\s*p\.?\s*(\d+)/gi,"Revised page $1").replace(/\bbaseline\s*p\.?\s*(\d+)/gi,"Baseline page $1").replace(/\brevised\s*p\.?\s*(\d+)/gi,"Revised page $1").replace(/\s*->\s*/g," → ")}function Cc(e){const t=String(e||"").toLowerCase();return t.includes("high")?3:t.includes("medium")?2:t.includes("low")?1:0}function Mr(e){const t=String((e==null?void 0:e.change_type)||(e==null?void 0:e.changeType)||(e==null?void 0:e.status)||"").toUpperCase();if(["ADDED","DELETED","MODIFIED","UNCHANGED","MATCH"].includes(t))return t;if((e!=null&&e.after||e!=null&&e.target_text)&&!(e!=null&&e.before||e!=null&&e.base_text))return"ADDED";if((e!=null&&e.before||e!=null&&e.base_text)&&!(e!=null&&e.after||e!=null&&e.target_text))return"DELETED";const r=`${(e==null?void 0:e.type)||""} ${(e==null?void 0:e.change)||""} ${(e==null?void 0:e.description)||""} ${(e==null?void 0:e.review)||""}`.toUpperCase();return r.includes("ADDED")||r.includes("NEW CONTENT")||r.includes("INTRODUCED")?"ADDED":r.includes("DELETED")||r.includes("REMOVED")||r.includes("DROPPED")?"DELETED":r.includes("MODIFIED")||r.includes("CHANGED")||r.includes("UPDATED")||r.includes("REVISED")?"MODIFIED":t||"MODIFIED"}function Gh(e){const t=Mr(e),r=(e==null?void 0:e.before)||"",n=(e==null?void 0:e.after)||"",a=(e==null?void 0:e.stable_key)||zc(e==null?void 0:e.path)||"Document change",o=[e!=null&&e.page_base?`Baseline page ${e.page_base}`:"",e!=null&&e.page_target?`Revised page ${e.page_target}`:""].filter(Boolean).join(" -> "),i=t==="ADDED"?`Added: ${Re(n,260)}`:t==="DELETED"?`Deleted: ${Re(r,260)}`:`Changed from "${Re(r,120)}" to "${Re(n,120)}"`;return{feature:a,item:a,area:zc(e==null?void 0:e.path)||"Document",change_type:t,change:i,before:r,after:n,citation:o,impact:e==null?void 0:e.impact,confidence:typeof(e==null?void 0:e.similarity)=="number"?Math.max(.55,Math.min(.98,1-Math.abs(1-e.similarity))):null,seek_clarification:t==="UNCHANGED"?"None":"Review recommended."}}function Jh(e,t){const r=Array.isArray(e)?[...e]:[],n=Array.isArray(t)?t:[],a=new Set(r.map(Mr)),o=new Set(r.map(i=>`${Mr(i)}:${i.stable_key||i.item||i.feature||i.path||i.change}`));return["ADDED","DELETED"].forEach(i=>{if(a.has(i))return;let l=0;n.forEach(c=>{if(l>=12||Mr(c)!==i)return;const u=`${i}:${c.stable_key||c.path||c.before||c.after}`;o.has(u)||(r.push(Gh(c)),o.add(u),l+=1)})}),r}function zc(e){const t=String(e||"").split("/").map(r=>r.trim()).filter(Boolean);return t[t.length-1]||""}function Pc(e){const t=`${e.seek_clarification||""} ${e.review||""} ${e.recommendation||""}`.toLowerCase(),r=Ws(e.confidence);return t.includes("review")||t.includes("clarif")||t.includes("confirm")||typeof r=="number"&&r<.8}function Ws(e){return typeof e!="number"?null:e>1?e/100:e}function Tc(e){return{border:"1px solid #c9c0b0",background:e?"#f1ece3":"#fffdf8",color:e?"#98a2b3":"#344054",borderRadius:7,padding:"7px 12px",cursor:e?"default":"pointer",fontWeight:600}}function Dc(e){return{border:"1px solid #c9c0b0",background:e?"#f1ece3":"#fffdf8",color:e?"#98a2b3":"#344054",borderRadius:6,padding:"5px 8px",cursor:e?"default":"pointer",fontWeight:600,fontSize:12}}function Vs(e,t=!1){const r=String(e||"").toLowerCase();return r==="added"?{background:t?K.ADDED.bg:"rgba(31,160,70,.08)",border:t?void 0:`1px solid ${K.ADDED.border}`,borderInlineStart:`3px solid ${K.ADDED.border}`}:r==="deleted"?{background:t?K.DELETED.bg:"rgba(218,54,54,.08)",border:t?void 0:`1px solid ${K.DELETED.border}`,borderInlineStart:`3px solid ${K.DELETED.border}`}:r==="modified"?{background:t?"rgba(196,85,16,.10)":"rgba(196,85,16,.08)",border:t?void 0:`1px solid ${K.MODIFIED.border}`,borderInlineStart:`3px solid ${K.MODIFIED.border}`}:{background:t?"transparent":"#fffdf8",border:t?void 0:"1px solid transparent",borderInlineStart:"3px solid transparent"}}function Yh({meta:e}){var r,n,a;const t=e.stats||{};return s.jsxs("section",{className:"stats-strip",children:[s.jsx(ke,{label:"Added",value:t.ADDED||0,tone:"added"}),s.jsx(ke,{label:"Deleted",value:t.DELETED||0,tone:"deleted"}),s.jsx(ke,{label:"Modified",value:t.MODIFIED||0,tone:"modified"}),s.jsx(ke,{label:"Unchanged",value:t.UNCHANGED||0}),s.jsx(ke,{label:"Coverage",value:`${$c((r=e.coverage)==null?void 0:r.base)} / ${$c((n=e.coverage)==null?void 0:n.target)}`}),s.jsx(ke,{label:"Pages",value:`${e.n_pages_base} / ${e.n_pages_target}`}),Number(((a=e.ai_usage)==null?void 0:a.total_tokens)||0)>0&&s.jsx(ke,{label:"AI tokens",value:`${xt(e.ai_usage.total_tokens)} (${xt(e.ai_usage.calls||0)} calls)`})]})}function $c(e){return typeof e=="number"?`${e.toFixed(1)}%`:"-"}function ke({label:e,value:t,tone:r}){return s.jsxs("span",{className:`stat-chip ${r||"neutral"}`,children:[s.jsx("span",{children:e}),s.jsx("strong",{children:t})]})}function Xh({usage:e}){const t=Number((e==null?void 0:e.total_tokens)||0);if(!t)return null;const n=(Array.isArray(e==null?void 0:e.operations)?e.operations:[]).slice(-4);return s.jsxs("div",{style:{border:"1px solid #ded6c8",borderRadius:8,padding:10,marginBottom:12,background:"#fbfaf6",fontSize:12,color:"#475467"},children:[s.jsx("strong",{style:{color:"#344054"},children:"AI usage:"})," ",xt(t)," tokens · ",xt(e.calls||0)," call(s) · ",xt(e.prompt_tokens||0)," input / ",xt(e.completion_tokens||0)," output",n.length>0&&s.jsx("div",{style:{marginTop:6,display:"flex",flexWrap:"wrap",gap:6},children:n.map((a,o)=>s.jsxs("span",{style:{border:"1px solid #d8d0c3",borderRadius:999,padding:"3px 7px",background:"#fffdf8"},children:[a.operation||"AI call"," · ",xt(a.total_tokens||0)]},`${a.operation||"op"}-${o}`))})]})}function Rc({progress:e,message:t,status:r}){const n=go(r),a=Math.max(0,Math.min(100,Number(e)||0)),o=n.isFailed?100:Math.max(7,n.isComplete?100:a);return s.jsxs("div",{className:"processing-state",children:[s.jsxs("div",{className:"processing-state-head",children:[s.jsx("span",{style:{fontWeight:600},children:t}),s.jsxs("span",{children:[a,"%"]})]}),s.jsx("div",{className:"progress-track",children:s.jsx("div",{className:`progress-fill ${n.className}`,style:{width:`${o}%`}})}),s.jsx("p",{children:"The job is still running. This view updates automatically as the backend reports progress."})]})}function In({message:e}){return s.jsx("div",{style:{marginTop:16,border:"1px solid #f0b4b4",background:"#fff5f5",color:"#9f1d1d",borderRadius:8,padding:13,fontSize:14,fontWeight:600,lineHeight:1.45,whiteSpace:"pre-wrap"},children:nt(e)})}function Wn({label:e}){return s.jsx("div",{style:{padding:20,color:"#667085",fontWeight:600},children:e})}function ur({label:e}){return s.jsx("div",{style:{padding:18,border:"1px dashed #c9c0b0",borderRadius:8,color:"#667085",background:"#fbfaf7",fontWeight:600},children:e})}function Zh({status:e}){const t=go(e);return s.jsx("span",{style:{display:"inline-block",background:t.tone.chip,color:t.tone.text,border:`1px solid ${t.tone.border}`,padding:"2px 8px",borderRadius:999,fontWeight:650,fontSize:12},children:t.label})}function go(e){const t=String(e||"queued").toLowerCase(),r=t==="complete"||t==="completed",n=t==="failed"||t==="error",a=t==="running"||t==="processing"||t==="uploading";return{value:t,label:r?"complete":n?"failed":t,className:r?"complete":n?"failed":a?"running":"queued",tone:r?K.ADDED:n?K.DELETED:a?K.MODIFIED:K.UNCHANGED,isComplete:r,isFailed:n}}function eg({value:e,status:t}){const r=go(t),n=Math.max(0,Math.min(100,Number(e)||0)),a=r.isFailed||r.isComplete?100:n;return s.jsxs("div",{children:[s.jsx("div",{className:"progress-track",style:{height:6,minWidth:140},children:s.jsx("div",{className:`progress-fill ${r.className}`,style:{width:`${a}%`}})}),s.jsx("div",{style:{marginTop:5,color:"#667085",fontSize:12},children:r.isFailed?"failed":`${r.isComplete?100:n}%`})]})}function up({type:e}){const t=String(e||"MODIFIED").toUpperCase(),r=K[t]||K.MODIFIED;return s.jsx("span",{style:{display:"inline-block",background:r.chip,color:r.text,border:`1px solid ${r.border}`,padding:"2px 8px",borderRadius:999,fontWeight:650,fontSize:12},children:t})}function tg({onOpenJob:e,onAskJob:t,error:r,historyKind:n="all",onStartCompare:a,onStartExtract:o}){const[i,l]=y.useState({loading:!0,error:"",jobs:[]}),[c,u]=y.useState(""),m=async()=>{try{const f=await fetch(`${W}/jobs?limit=80`);if(!f.ok)throw new Error(await re(f));const d=await f.json();l({loading:!1,error:"",jobs:d.jobs||[]})}catch(f){l({loading:!1,error:ie(f),jobs:[]})}};y.useEffect(()=>{let f=!1,d=null;const h=async()=>{f||(await m(),f||(d=setTimeout(h,2200)))};return h(),()=>{f=!0,d&&clearTimeout(d)}},[]);const p=async f=>{if(!(!(f!=null&&f.run_id)||c)){u(f.run_id);try{const d=await fetch(`${W}/jobs/${f.run_id}`,{method:"DELETE"});if(!d.ok)throw new Error(await re(d));await m()}catch(d){l(h=>({...h,error:ie(d)}))}finally{u("")}}},g=(i.jobs||[]).filter(f=>n==="all"||f.kind===n),x=g.filter(f=>!["complete","failed","error"].includes(f.status)).length,v=g.filter(f=>f.status==="complete").length,b=n==="comparison"?"Comparison History":n==="extraction"?"Extraction History":"Work History",S=n==="comparison"?"No comparison runs are available yet.":n==="extraction"?"No extraction runs are available yet.":"No document work is available yet.";return s.jsxs("section",{className:"session-board",children:[s.jsxs("div",{className:"board-head",children:[s.jsx("div",{children:s.jsx("h2",{children:b})}),s.jsxs("div",{className:"board-actions",children:[s.jsx("button",{type:"button",onClick:a,className:"primary-action compact",children:"New compare"}),s.jsx("button",{type:"button",onClick:o,className:"ghost-action compact",children:"New extract"}),s.jsxs("span",{children:[x," running"]}),s.jsxs("span",{children:[v," complete"]}),s.jsx("button",{type:"button",onClick:m,className:"ghost-action",children:"Refresh"})]})]}),r&&s.jsx(In,{message:r}),i.error&&s.jsx(In,{message:i.error}),i.loading&&!g.length?s.jsx(Wn,{label:"Loading jobs"}):g.length===0?s.jsx(ur,{label:S}):s.jsx("div",{className:"job-list",children:g.map(f=>s.jsx(rg,{job:f,deleting:c===f.run_id,onOpen:()=>e(f),onAsk:()=>t==null?void 0:t(f),onDelete:()=>p(f)},f.run_id))})]})}function rg({job:e,deleting:t,onOpen:r,onAsk:n,onDelete:a}){const o=e.status==="complete",i=go(e.status),l=e.kind==="extraction",c=l?e.label||"Uploaded document":`${e.base_label||"Baseline"} → ${e.target_label||"Revised"}`,u=l?e.n_pages||"-":`${e.n_pages_base||"-"} / ${e.n_pages_target||"-"}`;return s.jsxs("article",{className:`job-card ${i.className}`,children:[s.jsxs("div",{className:"job-main",children:[s.jsx("div",{className:"job-kind",children:l?"Extraction":"Comparison"}),s.jsx("h3",{dir:"auto",children:c}),s.jsxs("div",{className:"job-meta",children:[s.jsxs("span",{children:["#",String(e.run_id||"").slice(0,6)]}),s.jsx("span",{children:[e.source_format,e.base_format,e.target_format].filter(Boolean).join(" / ")||"document"}),s.jsxs("span",{children:[u," pages"]}),s.jsx("span",{children:Qh(e.duration_ms,e.status)})]}),e.status_message&&s.jsx("p",{dir:"auto",children:e.status_message}),i.isFailed&&e.error&&s.jsx("p",{className:"job-error",dir:"auto",children:Re(nt(e.error),180)})]}),s.jsxs("div",{className:"job-side",children:[s.jsx(Zh,{status:e.status}),s.jsx(eg,{value:e.progress||0,status:e.status}),s.jsx("span",{className:"job-date",children:Hh(e.created_at)}),s.jsxs("div",{className:"job-actions",children:[s.jsx("button",{type:"button",onClick:r,disabled:!o,className:"primary-action compact",children:"Open"}),s.jsx("button",{type:"button",onClick:n,disabled:!o||!l,className:"ghost-action compact",children:"Query"}),s.jsx("button",{type:"button",onClick:a,disabled:t,className:"danger-action compact",children:t?"Deleting":"Delete"})]})]})]})}function ng({onUpload:e,busy:t,onAdmin:r}){const n=dp("comparison"),a=t||n.loading||!n.selectedId||n.datasets.length===0;return s.jsxs("form",{onSubmit:e,className:"doc-workflow-card",children:[s.jsx("div",{className:"workflow-card-head",children:s.jsx("div",{children:s.jsx("h2",{children:"Compare two documents"})})}),s.jsx(pp,{...n,busy:t,onAdmin:r}),!n.loading&&n.datasets.length===0?s.jsx(fp,{onAdmin:r}):null,s.jsxs("div",{className:"upload-grid compare",children:[s.jsx(qs,{label:"Baseline",helper:"Approved or reference file",name:"base",disabled:a}),s.jsx(qs,{label:"Revised",helper:"Latest or proposed file",name:"target",disabled:a}),s.jsxs("div",{className:"workflow-action-rail",children:[s.jsx("button",{disabled:a,className:"primary-action full",children:t?"Processing":"Compare documents"}),s.jsx("div",{className:"workflow-note",children:"Side-by-side preview, semantic changes, and export."})]})]})]})}function ag({onUpload:e,busy:t,onAdmin:r}){const n=dp("extraction"),a=t||n.loading||!n.selectedId||n.datasets.length===0;return s.jsxs("form",{onSubmit:e,className:"doc-workflow-card",children:[s.jsx("div",{className:"workflow-card-head",children:s.jsx("div",{children:s.jsx("h2",{children:"Extract documents"})})}),s.jsx(pp,{...n,busy:t,onAdmin:r}),!n.loading&&n.datasets.length===0?s.jsx(fp,{onAdmin:r}):null,s.jsxs("div",{className:"upload-grid extract",children:[s.jsx(qs,{label:"Document or image",helper:"PDF, image, Word, Excel, xlsb, CSV, or TSV",name:"document",disabled:a,multiple:!0}),s.jsxs("div",{className:"workflow-action-rail",children:[s.jsx("button",{disabled:a,className:"primary-action full",children:t?"Extracting":"Extract content"}),s.jsx("div",{className:"workflow-note",children:"Text, tables, OCR, structured JSON, and document query."})]})]})]})}function dp(e){const[t,r]=y.useState([]),[n,a]=y.useState(""),[o,i]=y.useState(!0),[l,c]=y.useState("");return y.useEffect(()=>{let u=!0;return(async()=>{i(!0),c("");try{const p=window.sessionStorage.getItem("simulated_role")||"platform_admin",g=await fetch(`${W}/datasets`,{headers:{"X-User-Role":p}});if(!g.ok){const S=g.status===404?"Use case service is not available. Confirm the backend admin/datasets routes are deployed, then refresh.":`Could not load use cases (${g.status})`;throw new Error(S)}const b=((await g.json()).datasets||[]).filter(S=>(S.use_case_type||"comparison")===e);if(!u)return;r(b),a(S=>S&&b.some(f=>f.id===S)?S:"")}catch(p){if(!u)return;r([]),a(""),c((p==null?void 0:p.message)||"Could not load use cases.")}finally{u&&i(!1)}})(),()=>{u=!1}},[]),{datasets:t,selectedId:n,setSelectedId:a,loading:o,error:l}}function pp({datasets:e,selectedId:t,setSelectedId:r,loading:n,error:a,busy:o,onAdmin:i}){return s.jsxs("div",{className:"usecase-selector",children:[s.jsxs("label",{children:[s.jsx("span",{children:"Use case"}),s.jsxs("select",{name:"family_id",value:t,onChange:l=>r(l.target.value),required:!0,disabled:o||n||e.length===0,children:[s.jsx("option",{value:"",children:n?"Loading use cases":"Select a use case"}),e.map(l=>s.jsxs("option",{value:l.id,children:[l.supplier," - ",l.family_name," (",l.domain||"generic",")"]},l.id))]})]}),a?s.jsx("p",{className:"usecase-error",children:a}):null,e.length>0?s.jsx("button",{type:"button",className:"ghost-action compact",onClick:i,children:"Manage"}):null]})}function fp({onAdmin:e}){return s.jsxs("div",{className:"usecase-required",children:[s.jsx("strong",{children:"Use case required"}),s.jsx("p",{children:"Create or bootstrap a document use case before uploading files. The selected use case supplies metadata, template rules, access policy, and extraction guidance."}),s.jsx("button",{type:"button",className:"primary-action compact",onClick:e,children:"Open Admin Studio"})]})}function qs({label:e,helper:t,name:r,disabled:n,multiple:a=!1}){const[o,i]=y.useState(""),l=y.useRef(null),c=()=>{var u;n||(u=l.current)==null||u.click()};return s.jsxs("div",{onClick:c,onKeyDown:u=>{(u.key==="Enter"||u.key===" ")&&c()},role:"button",tabIndex:n?-1:0,className:`file-lane${n?" disabled":""}`,children:[s.jsx("input",{ref:l,type:"file",name:r,accept:Ah,multiple:a,required:!0,disabled:n,onClick:u=>u.stopPropagation(),onChange:u=>{var p;const m=Array.from(u.target.files||[]);i(m.length>1?`${m.length} files selected`:((p=m[0])==null?void 0:p.name)||"")},style:{position:"absolute",width:1,height:1,opacity:0,pointerEvents:"none"}}),s.jsxs("div",{className:"file-lane-head",children:[s.jsxs("div",{children:[s.jsx("div",{className:"file-lane-title",children:e}),s.jsx("div",{className:"file-lane-helper",children:t})]}),s.jsx("span",{className:"file-lane-pill",children:"Files"})]}),s.jsx("div",{className:`file-lane-value${o?" selected":""}`,children:o||"Select a file"})]})}function og({runId:e,meta:t,onVerifyPage:r}){const n=t.base_format&&t.base_format!=="pdf"?t.base_native_pages||t.n_pages_base||1:t.n_pages_base||1,a=t.target_format&&t.target_format!=="pdf"?t.target_native_pages||t.n_pages_target||1:t.n_pages_target||1,o=Math.max(n,a),[i,l]=y.useState(null),[c,u]=y.useState(!1);y.useEffect(()=>{let x=!1;return l(null),Promise.all([fetch(`${W}/runs/${e}/summary`).then(async v=>{if(!v.ok)throw new Error("Failed to load summary");return v.json()}),fetch(`${W}/runs/${e}/diff?limit=500`).then(async v=>v.ok?v.json():{diffs:[]})]).then(([v,b])=>{if(x)return;const S=Array.isArray(v)?v:v.rows||v.summary||[];l(Jh(S,b.diffs||[]))}).catch(v=>{x||(console.error("Failed to build quick summary",v),l([]))}),()=>{x=!0}},[e]);const m=Xa.useMemo(()=>(Array.isArray(i)?i:[]).filter(v=>v.change||v.description||v.before||v.after).sort((v,b)=>{const S=Cc(v.impact)+(Pc(v)?2:0)+(Ws(v.confidence)||0);return Cc(b.impact)+(Pc(b)?2:0)+(Ws(b.confidence)||0)-S}),[i]),p=x=>{const v=String(x||""),b=v.match(/(?:revised|target|page|p\.)\s*(\d+)/i)||v.match(/\b(\d{1,4})\b/);if(!b)return null;const S=Number.parseInt(b[1],10);return Number.isFinite(S)&&S>=1&&S<=o?S:null};if(i===null)return s.jsx("div",{className:"key-audit-empty",children:"Building comparison summary..."});if(!m.length)return s.jsx("div",{className:"key-audit-empty",children:"No prioritized summary items were returned for this comparison."});const g=c?m.slice(0,16):m.slice(0,8);return s.jsxs("div",{className:"key-audit-panel compact",children:[s.jsx("div",{className:"key-audit-list",children:g.map((x,v)=>{const b=p(x.citation);return s.jsxs("div",{className:"key-audit-item",children:[s.jsx(up,{type:Mr(x)}),s.jsxs("div",{className:"key-audit-copy",dir:"auto",children:[s.jsx("strong",{children:Re(x.feature||x.item||x.area||"Document change",120)}),s.jsx("span",{children:Re(x.change||x.description||x.before||x.after||"Value updated.",260)}),x.citation?s.jsx("small",{children:Kh(x.citation)}):null]}),b?s.jsxs("button",{type:"button",className:"primary-action compact",onClick:()=>r(b),children:["Verify page ",b]}):null]},`${x.stable_key||x.feature||x.item||v}`)})}),m.length>8&&s.jsx("button",{type:"button",className:"key-audit-more",onClick:()=>u(x=>!x),children:c?"Show fewer":`Show ${Math.min(16,m.length)} items`})]})}function sg({runId:e,meta:t,pageNum:r,setPageNum:n}){const a=t.base_format&&t.base_format!=="pdf"?t.base_native_pages||t.n_pages_base||1:t.n_pages_base||1,o=t.target_format&&t.target_format!=="pdf"?t.target_native_pages||t.n_pages_target||1:t.n_pages_target||1,i=Math.max(a,o),[l,c]=y.useState(r),[u,m]=y.useState(r),[p,g]=y.useState(100),[x,v]=y.useState(!1),[b,S]=y.useState(!0),f=y.useRef(null),d=y.useRef(null);y.useEffect(()=>{c(r),m(r)},[e,r]),y.useEffect(()=>{if(!b)return;const w=f.current,_=d.current;if(!w||!_)return;let j=!1;const N=(D,U)=>{j||(j=!0,U.scrollTop=D.scrollTop,U.scrollLeft=D.scrollLeft,window.requestAnimationFrame(()=>{j=!1}))},C=()=>N(w,_),P=()=>N(_,w);return w.addEventListener("scroll",C,{passive:!0}),_.addEventListener("scroll",P,{passive:!0}),()=>{w.removeEventListener("scroll",C),_.removeEventListener("scroll",P)}},[e,r,b]);const h=w=>{const _=Math.max(1,Math.min(i,w));n(_),c(_),m(_)};return s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:12,flexWrap:"wrap"},children:[s.jsx("button",{onClick:()=>h(r-1),disabled:r<=1,style:Tc(r<=1),children:"Prev both"}),s.jsxs("span",{style:{fontSize:17,fontWeight:650,minWidth:100},children:["Page ",r," / ",i]}),s.jsx("button",{onClick:()=>h(r+1),disabled:r>=i,style:Tc(r>=i),children:"Next both"}),s.jsxs("div",{className:"viewer-toolbar-group","aria-label":"PDF zoom controls",children:[s.jsx("button",{type:"button",onClick:()=>g(w=>Math.max(50,w-25)),title:"Zoom out",children:"-"}),s.jsxs("span",{children:[p,"%"]}),s.jsx("button",{type:"button",onClick:()=>g(w=>Math.min(300,w+25)),title:"Zoom in",children:"+"}),s.jsx("button",{type:"button",onClick:()=>g(100),title:"Reset zoom",children:"Reset"})]}),s.jsxs("label",{className:"viewer-sync-toggle",children:[s.jsx("input",{type:"checkbox",checked:b,onChange:w=>S(w.target.checked)}),s.jsx("span",{children:"Sync scroll"})]}),s.jsxs("label",{className:"viewer-sync-toggle",style:{marginLeft:8},children:[s.jsx("input",{type:"checkbox",checked:x,onChange:w=>v(w.target.checked)}),s.jsx("span",{children:"Smart crop"})]}),s.jsx(ig,{})]}),s.jsxs("div",{className:"viewer-grid",style:{display:"grid",gridTemplateColumns:"minmax(0, 1fr) minmax(0, 1fr)",gap:14},children:[s.jsx(Lc,{runId:e,side:"base",pageNum:l,setPageNum:c,totalPages:a,label:"Baseline document",docName:t.base_label,format:t.base_format,zoom:p,scrollRef:f,cropMargins:x}),s.jsx(Lc,{runId:e,side:"target",pageNum:u,setPageNum:m,totalPages:o,label:"Revised document",docName:t.target_label,format:t.target_format,zoom:p,scrollRef:d,cropMargins:x})]})]})}function ig(){return s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7,marginLeft:6,flexWrap:"wrap"},children:[s.jsx(qo,{label:"added",color:K.ADDED.bg,border:K.ADDED.border}),s.jsx(qo,{label:"deleted",color:K.DELETED.bg,border:K.DELETED.border}),s.jsx(qo,{label:"modified",color:K.MODIFIED.bg,border:K.MODIFIED.border})]})}function qo({label:e,color:t,border:r}){return s.jsx("span",{style:{background:t,border:`1px solid ${r}`,color:"var(--text-primary)",padding:"2px 8px",borderRadius:999,fontSize:12,fontWeight:600},children:e})}function Lc({runId:e,side:t,pageNum:r,setPageNum:n,totalPages:a,label:o,docName:i,format:l,zoom:c=100,scrollRef:u,cropMargins:m}){const[p,g]=y.useState({regions:[]}),[x,v]=y.useState(null),[b,S]=y.useState("idle"),f=r>=1&&r<=a,d=l&&l!=="pdf";y.useEffect(()=>{if(S(f&&!d?"loading":"idle"),!f){g({regions:[]}),v(null);return}if(d){g({regions:[]}),fetch(`${W}/runs/${e}/native-page/${t}/${r}`).then(P=>P.json()).then(v).catch(()=>v({items:[]}));return}v(null),fetch(`${W}/runs/${e}/overlay/${t}/${r}`).then(P=>P.json()).then(g).catch(()=>g({regions:[]}))},[e,t,r,f,d]);const h=p.content_box,w=p.page_width||612,_=p.page_height||792,j=m&&h&&h.x_max>h.x_min&&h.y_max>h.y_min;let N={position:"relative",width:"100%"},C={position:"relative",width:`${c}%`};if(j){const P=h.x_min/w,D=h.y_min/_,U=(h.x_max-h.x_min)/w;N={position:"relative",overflow:"hidden",width:"100%",paddingTop:`${(h.y_max-h.y_min)/_/U*c}%`},C={position:"absolute",left:`${-(P/U)*c}%`,top:`${-(D/U)*c}%`,width:`${1/U*c}%`}}return s.jsxs("div",{className:"doc-viewer-shell",children:[s.jsxs("div",{style:{marginBottom:7,display:"flex",justifyContent:"space-between",gap:10,alignItems:"flex-end",flexWrap:"wrap"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:13,color:"var(--text-secondary)",fontWeight:600},children:o}),s.jsxs("div",{style:{fontSize:14,color:"var(--text-primary)",fontWeight:600},children:[i," - ",f?`page ${r}`:"no page",l&&s.jsx("span",{style:{color:"var(--text-secondary)",fontSize:11,marginLeft:6},children:String(l).toUpperCase()})]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[s.jsx("button",{type:"button",onClick:()=>n(Math.max(1,r-1)),disabled:r<=1,style:Dc(r<=1),title:`Previous ${o}`,children:"Prev"}),s.jsxs("span",{style:{color:"var(--text-secondary)",fontSize:12,minWidth:46,textAlign:"center"},children:[r,"/",a||1]}),s.jsx("button",{type:"button",onClick:()=>n(Math.min(a||1,r+1)),disabled:r>=(a||1),style:Dc(r>=(a||1)),title:`Next ${o}`,children:"Next"})]})]}),s.jsx("div",{ref:u,className:`doc-frame dl-scrollbar ${d?"native":""}`,style:{overflow:"auto",maxHeight:"75vh",position:"relative"},children:f?d?s.jsx(cg,{page:x,side:t}):s.jsx("div",{style:N,children:s.jsxs("div",{className:"pdf-zoom-stage",style:C,children:[b==="loading"&&s.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)",background:"var(--surface-raised)",zIndex:1,fontWeight:600},children:["Loading page ",r]}),s.jsx("img",{src:`${W}/runs/${e}/pages/${t}/${r}`,onLoad:()=>S("ready"),onError:()=>S("error"),style:{display:"block",width:"100%",height:"auto"},alt:`${t} page ${r}`},`${t}-${r}`),b==="error"&&s.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:K.DELETED.text,background:"#fff5f5",zIndex:2,fontWeight:600},children:["Could not load page ",r]}),(p.regions||[]).map((P,D)=>{const[U,_e,Me,Nt]=P.bbox||[0,0,0,0],Ee=K[String(P.change_type||"").toUpperCase()]||K.MODIFIED,Ye=P.page_width||p.page_width||612,Ne=P.page_height||p.page_height||792,z=P.border_color||Ee.border,R=P.color||Ee.bg;return s.jsx("div",{title:`${P.change_type||"change"} ${P.stable_key||""} (${P.block_type||"block"})`,style:{position:"absolute",left:`${U/Ye*100}%`,top:`${_e/Ne*100}%`,width:`${Math.max(.15,(Me-U)/Ye*100)}%`,height:`${Math.max(.15,(Nt-_e)/Ne*100)}%`,background:R,border:`1px solid ${z}`,boxShadow:`inset 0 0 0 1px ${R}`,pointerEvents:"auto"}},D)})]})}):s.jsx(lg,{pageNum:r})})]})}function lg({pageNum:e}){return s.jsxs("div",{style:{minHeight:520,display:"grid",placeItems:"center",color:"var(--text-secondary)",fontWeight:600},children:["No page ",e," in this document."]})}function cg({page:e,side:t}){if(!e)return s.jsx("div",{style:{minHeight:520,display:"grid",placeItems:"center",color:"var(--text-secondary)",fontWeight:600},children:"Loading structured page"});const r=e.items||[],n=e.viewer_type||(e.format==="spreadsheet"?"spreadsheet":"document");return r.length?s.jsx("div",{className:`native-page ${n}`,dir:"auto",children:r.map(a=>s.jsx(ug,{item:a,viewerType:n,side:t||e.side},a.id))}):s.jsx("div",{style:{minHeight:520,display:"grid",placeItems:"center",color:"var(--text-secondary)",fontWeight:600},children:"No structured content on this page."})}function ug({item:e,viewerType:t,side:r}){var i;const n=Vs(e.highlight);if(e.type==="table"&&!((i=e.payload)!=null&&i.layout_table)&&!mg(e,t))return s.jsx(pg,{item:e,viewerType:t});const a=e.type==="table"?{...e,text:fg(e),payload:{...e.payload||{},layout_table:!0}}:e,o=e.type==="section"||e.type==="heading";return s.jsx("div",{className:"native-block",dir:"auto",style:{...n,marginBottom:o?10:8,padding:o?"7px 9px":"6px 8px",borderRadius:6,fontSize:o?14:13,fontWeight:o?650:400,lineHeight:1.45},title:e.change_type,children:s.jsx(dg,{item:a,side:r})})}function dg({item:e,side:t}){var a,o;const r=e.token_diff||[];return e.highlight==="modified"&&Array.isArray(r)&&r.some(i=>i.op&&i.op!=="equal")?s.jsx("span",{dir:"auto",children:r.map((i,l)=>{const c=i.op;if(c==="delete"&&t!=="base"||c==="insert"&&t==="base")return null;const u=c==="equal"||t==="base"?i.text_a:i.text_b;if(!u)return null;let m="";return c==="delete"&&(m="native-token-delete"),c==="insert"&&(m="native-token-insert"),c==="replace"&&(m=t==="base"?"native-token-replace-base":"native-token-replace-target"),s.jsxs(Xa.Fragment,{children:[l>0?" ":"",s.jsx("span",{className:`native-token ${m}`,dir:"auto",children:u})]},l)})}):s.jsx("span",{dir:"auto",children:e.text||((a=e.payload)==null?void 0:a.text)||((o=e.payload)==null?void 0:o.layout_text)||e.path||"-"})}function pg({item:e,viewerType:t}){var i;const r=Hi(e),n=e.rows||[],a=((i=e.payload)==null?void 0:i.table_title)||e.text||"Table",o=t==="spreadsheet";return s.jsxs("div",{className:"native-block",dir:"auto",style:{...Vs(e.highlight),marginBottom:14,padding:10,borderRadius:7},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:10,alignItems:"baseline",flexWrap:"wrap",marginBottom:7},children:[s.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--text-primary)"},children:a}),s.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)"},children:[n.length," row",n.length===1?"":"s"]})]}),s.jsx("div",{className:"native-table-wrap dl-scrollbar",children:s.jsxs("table",{className:`native-table ${o?"spreadsheet":""}`,style:{fontSize:12},children:[s.jsx("thead",{children:s.jsx("tr",{style:{background:"var(--surface-sunken)",color:"var(--text-primary)"},children:r.map((l,c)=>{const u=String(l||"").toLowerCase(),m=c>0&&(u.includes("pcv")||u.includes("pcb")||u.includes("model")||u.includes("spec")||String(l||"").length<=4||r.length>=6&&String(l||"").length<=12);return s.jsx("th",{dir:"auto",className:m?"vertical-th":"",style:m?{...nr,verticalAlign:"bottom"}:nr,children:m?s.jsx("span",{className:"vertical-th-text",children:l}):l},l)})})}),s.jsx("tbody",{children:n.map(l=>{const c=Vs(l.highlight,!0);return s.jsx("tr",{title:l.change_type,style:{background:c.background},children:r.map(u=>{var m;return s.jsx("td",{dir:"auto",style:{...Ir,borderLeft:c.borderLeft},children:cr((m=Qi(l.values))==null?void 0:m[u])},u)})},l.id)})})]})})]})}function Hi(e){return(Array.isArray(e==null?void 0:e.header)?e.header:[]).map(r=>String(r||"").trim()).filter(r=>r&&!fr(r))}function Qi(e){return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).map(([t,r])=>[String(t||"").trim(),r]).filter(([t])=>t&&!fr(t)))}function fg(e){const r=(Array.isArray(e==null?void 0:e.rows)?e.rows:[]).map(n=>{const a=Qi(n.values);return Object.values(a).map(i=>cr(i)).filter(i=>i&&i!=="-").join(" / ")||n.text||""}).filter(Boolean);return r.length?r.join(`
`):(e==null?void 0:e.text)||Hi(e).join(" / ")||"Document text"}function mg(e,t){var x;if(((x=e==null?void 0:e.payload)==null?void 0:x.source_format)==="docx"||t!=="document")return!1;const r=Array.isArray(e==null?void 0:e.header)?e.header:[],n=Hi(e),a=Array.isArray(e==null?void 0:e.rows)?e.rows:[],o=r.some(v=>fr(v)),i=a.flatMap(v=>Object.values(Qi(v.values||{})).map(b=>String(b||"").trim()).filter(Boolean));if(o&&n.length<=2)return!0;if(!a.length||!i.length)return!1;const c=i.filter(v=>v.length>70||v.split(/\s+/).length>=10).length/Math.max(1,i.length),m=i.filter(v=>/[\u0600-\u06ff]/.test(v)&&/[A-Za-z]/.test(v)).length/Math.max(1,i.length),g=n.filter(v=>/feature|description|item|name|order|code|part|model|price|amount|status|date|term|rent|fee/i.test(v)).length/Math.max(1,n.length);return m>=.2&&g<.35||a.length<=6&&c>=.45&&g<.35}function hg({columns:e,rows:t}){if(e=(e||[]).filter(n=>!fr(n)),!e.length||!(t!=null&&t.length))return null;const r=qh(e.length,420,920);return s.jsx("div",{className:"dl-scrollbar table-scroll-frame",style:{marginTop:12},children:s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12,minWidth:r},children:[s.jsx("thead",{children:s.jsx("tr",{style:{background:"#f2eee6"},children:e.map(n=>s.jsx("th",{title:n,style:nr,dir:"auto",children:n},n))})}),s.jsx("tbody",{children:t.map((n,a)=>s.jsx("tr",{children:e.map(o=>{var i;return s.jsx("td",{style:Ir,dir:"auto",children:cr(((i=n==null?void 0:n.values)==null?void 0:i[o])??(n==null?void 0:n[o]))},o)})},a))})]})})}function Or({columns:e,rows:t}){const r=(e||[]).filter(n=>!fr(n));return s.jsx("div",{className:"dl-scrollbar",style:{overflowX:"auto"},children:s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13,minWidth:780},children:[s.jsx("thead",{children:s.jsx("tr",{style:{background:"#1f2937",color:"white"},children:r.map(n=>s.jsx("th",{dir:"auto",style:{...nr,padding:"10px 12px",borderBottom:"1px solid #384250",color:"white"},children:n},n))})}),s.jsx("tbody",{children:t.slice(0,200).map((n,a)=>s.jsx("tr",{children:r.map(o=>s.jsx("td",{dir:"auto",style:Ir,children:cr(n[o])},o))},a))})]})})}function gg({rows:e}){return e!=null&&e.length?s.jsx("div",{className:"dl-scrollbar",style:{overflowX:"auto",marginTop:10},children:s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13,minWidth:640},children:[s.jsx("thead",{children:s.jsxs("tr",{style:{background:"#f2eee6",color:"#344054"},children:[s.jsx("th",{style:nr,dir:"auto",children:"Field"}),s.jsx("th",{style:nr,dir:"auto",children:"Before"}),s.jsx("th",{style:nr,dir:"auto",children:"After"})]})}),s.jsx("tbody",{children:e.map((t,r)=>s.jsxs("tr",{children:[s.jsx("td",{style:Ir,dir:"auto",children:t.field||t.column||t.name||"-"}),s.jsx("td",{style:{...Ir,color:K.DELETED.text},dir:"auto",children:cr(t.before??t.base??t.old)}),s.jsx("td",{style:{...Ir,color:K.ADDED.text},dir:"auto",children:cr(t.after??t.target??t.new)})]},r))})]})}):null}function xg({runId:e,meta:t,tab:r,setTab:n}){return s.jsxs(s.Fragment,{children:[s.jsx(yg,{meta:t}),s.jsx(wg,{tab:r,setTab:n}),s.jsxs("main",{style:{...ut,padding:12},children:[r==="overview"&&s.jsx(bg,{runId:e,meta:t}),r==="tables"&&s.jsx(kg,{runId:e}),r==="text"&&s.jsx(jg,{runId:e}),r==="json"&&s.jsx(Sg,{runId:e,meta:t})]}),s.jsxs("section",{className:"workspace-surface extraction-query-surface",style:{marginTop:12},children:[s.jsx("div",{className:"surface-title-row",children:s.jsxs("div",{children:[s.jsx("h3",{children:"Ask This Extraction"}),s.jsx("p",{children:"Search the extracted text, tables, headings, and page evidence from this document."})]})}),s.jsx(vg,{runId:e})]})]})}function vg({runId:e}){const[t,r]=y.useState(""),[n,a]=y.useState([]),[o,i]=y.useState(!1),l=async()=>{const c=t.trim();if(!c||o)return;const u=`extract-user-${Date.now()}`,m=`extract-answer-${Date.now()}`;a(p=>[...p,{id:u,role:"user",text:c,timestamp:new Date().toLocaleTimeString()}]),r(""),i(!0);try{const p=await fetch(`${W}/extract-runs/${e}/query`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:c,mode:"fast"})});if(!p.ok)throw new Error(await re(p));const g=await p.json();a(x=>{var v;return[...x,{id:m,role:"assistant",text:g.answer||`Found ${((v=g.rows)==null?void 0:v.length)||0} matching passages.`,rows:g.rows||[],columns:g.columns||["Page","Type","Path","Text","Score"],timestamp:new Date().toLocaleTimeString()}]})}catch(p){a(g=>[...g,{id:m,role:"assistant",text:ie(p),rows:[],timestamp:new Date().toLocaleTimeString(),isError:!0}])}finally{i(!1)}};return s.jsxs("section",{className:"query-workbench",children:[n.length===0?s.jsx(ur,{label:"Ask about clauses, tables, fields, dates, page content, or extracted values."}):s.jsx("div",{className:"query-chat-log",children:n.map(c=>{var u;return s.jsxs("article",{className:`query-message ${c.role}${c.isError?" error":""}`,children:[s.jsxs("div",{className:"query-message-meta",children:[s.jsx("span",{children:c.role==="user"?"You":"Extraction query"}),s.jsx("span",{children:c.timestamp})]}),s.jsx("div",{className:"query-message-text",dir:"auto",children:c.text}),((u=c.rows)==null?void 0:u.length)>0&&s.jsx("div",{className:"query-results-shell",style:{marginTop:10},children:s.jsx(Or,{columns:c.columns,rows:c.rows})})]},c.id)})}),s.jsxs("div",{className:"query-composer",children:[s.jsx("textarea",{value:t,onChange:c=>r(c.target.value),onKeyDown:c=>{c.key==="Enter"&&!c.shiftKey&&(c.preventDefault(),l())},placeholder:"Ask about the extracted document...",disabled:o,rows:3}),s.jsx("div",{className:"query-composer-actions",children:s.jsx("button",{type:"button",className:"primary-action compact",onClick:l,disabled:o||!t.trim(),children:o?"Searching":"Ask"})})]})]})}function yg({meta:e}){var r,n;const t=e.summary||{};return s.jsxs("section",{style:{...ut,padding:12,display:"flex",gap:8,marginBottom:12,flexWrap:"wrap",alignItems:"center"},children:[s.jsx(ke,{label:"Format",value:(e.source_format||"-").toUpperCase()}),s.jsx(ke,{label:"Documents",value:((r=e.documents)==null?void 0:r.length)||t.document_count||1}),s.jsx(ke,{label:"Coverage",value:typeof e.coverage=="number"?`${e.coverage.toFixed(1)}%`:"-"}),s.jsx(ke,{label:"Quality",value:t.quality||"-"}),s.jsx(ke,{label:"Tables",value:t.table_count||0}),s.jsx(ke,{label:"Blocks",value:Object.values(t.block_counts||{}).reduce((a,o)=>a+Number(o||0),0)}),s.jsx(ke,{label:"Pages",value:e.n_pages||e.native_pages||0}),Number(((n=e.ai_usage)==null?void 0:n.total_tokens)||0)>0&&s.jsx(ke,{label:"AI tokens",value:`${xt(e.ai_usage.total_tokens)} (${xt(e.ai_usage.calls||0)} calls)`})]})}function wg({tab:e,setTab:t}){const r=[["overview","Extraction overview"],["tables","Extracted tables"],["text","Text blocks"],["json","Structured JSON"]];return s.jsx("nav",{style:{display:"flex",gap:4,borderBottom:"1px solid #d8d0c3",marginBottom:12,overflowX:"auto"},children:r.map(([n,a])=>{const o=e===n;return s.jsx("button",{onClick:()=>t(n),style:{padding:"10px 14px",background:o?"#1f2937":"transparent",color:o?"white":"#344054",border:o?"1px solid #1f2937":"1px solid transparent",borderRadius:"8px 8px 0 0",cursor:"pointer",fontWeight:600,whiteSpace:"nowrap"},children:a},n)})})}function bg({runId:e,meta:t}){const r=t.summary||{},n=t.ai_analysis,a=(n==null?void 0:n.result)||null;return s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12,flexWrap:"wrap",marginBottom:12},children:[s.jsxs("div",{children:[s.jsx("h2",{style:{margin:0,fontSize:18,fontWeight:650},dir:"auto",children:t.label||"Extracted document"}),s.jsx("p",{style:{margin:"6px 0 0",color:"#667085",fontSize:13},dir:"auto",children:r.message||"Extraction complete."})]}),s.jsx("button",{onClick:()=>{window.location.href=`${W}/extract-runs/${e}/json`},style:Mh(!1),children:"Download JSON"})]}),s.jsxs("div",{className:"report-metrics",style:{display:"grid",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",gap:10,marginBottom:12},children:[s.jsx(ca,{label:"Extraction coverage",value:typeof t.coverage=="number"?`${t.coverage.toFixed(1)}%`:"-"}),s.jsx(ca,{label:"Tables detected",value:r.table_count||0}),s.jsx(ca,{label:"Table rows",value:r.table_row_count||0}),s.jsx(ca,{label:"Image/OCR blocks",value:r.figure_count||0})]}),s.jsxs("div",{style:{...ut,padding:14,boxShadow:"none",marginBottom:12},children:[s.jsx("div",{style:{fontWeight:650,marginBottom:8},children:"Block breakdown"}),s.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[Object.entries(r.block_counts||{}).map(([o,i])=>s.jsx(ke,{label:o.replace("_"," "),value:i},o)),Object.keys(r.block_counts||{}).length===0&&s.jsx("span",{style:{color:"#667085"},children:"No block statistics available."})]})]}),n&&s.jsxs("div",{style:{...ut,padding:14,boxShadow:"none"},children:[s.jsxs("div",{style:{fontWeight:650,marginBottom:8},children:["AI-assisted analysis ",n.available?"- available":"- unavailable"]}),!n.available&&s.jsx("div",{style:{color:K.DELETED.text},dir:"auto",children:normalizeErrorMessage(n.error)||"AI analysis was not generated."}),a&&s.jsxs("div",{style:{color:"#344054",lineHeight:1.5},children:[s.jsx("p",{style:{marginTop:0},dir:"auto",children:a.executive_summary||"AI analysis completed."}),Array.isArray(a.key_items)&&a.key_items.length>0&&s.jsx(Or,{columns:["Item"],rows:a.key_items.slice(0,20).map(o=>({Item:typeof o=="string"?o:JSON.stringify(o)}))})]})]}),s.jsx(Xh,{usage:t.ai_usage})]})}function ca({label:e,value:t}){return s.jsxs("div",{style:{background:"#fbfaf6",border:"1px solid #ded6c8",borderRadius:8,padding:12},children:[s.jsx("div",{style:{fontSize:12,color:"#667085",fontWeight:600},children:e}),s.jsx("div",{style:{marginTop:4,fontSize:22,color:"#1f2937",fontWeight:650},children:t})]})}function kg({runId:e}){const[t,r]=y.useState({loading:!0,error:"",tables:[]});return y.useEffect(()=>{let n=!1;return r({loading:!0,error:"",tables:[]}),fetch(`${W}/extract-runs/${e}/tables?include_rows=true`).then(async a=>{if(!a.ok)throw new Error(await re(a));return a.json()}).then(a=>{n||r({loading:!1,error:"",tables:a.tables||[]})}).catch(a=>{n||r({loading:!1,error:ie(a),tables:[]})}),()=>{n=!0}},[e]),t.loading?s.jsx(Wn,{label:"Loading extracted tables..."}):t.error?s.jsx(Ki,{message:t.error}):t.tables.length?s.jsx("div",{style:{display:"grid",gap:12},children:t.tables.map(n=>s.jsxs("div",{style:{...ut,padding:12,boxShadow:"none"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12,flexWrap:"wrap",marginBottom:8},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:650},dir:"auto",children:n.display_name||n.title||"Detected table"}),s.jsxs("div",{style:{color:"#667085",fontSize:13,marginTop:3},dir:"auto",children:[n.page_label," · ",n.n_columns," columns · ",n.n_rows," rows · header quality ",Math.round((n.header_quality||0)*100),"%",n.extraction_confidence?` · extraction ${Math.round(n.extraction_confidence*100)}%`:""]})]}),s.jsx("code",{children:String(n.id||"").slice(0,8)})]}),Array.isArray(n.quality_warnings)&&n.quality_warnings.length>0&&s.jsxs("div",{style:{color:"#8a5a00",fontSize:13,marginBottom:8},dir:"auto",children:["Review note: ",n.quality_warnings.slice(0,2).join(" ")]}),s.jsxs("div",{style:{color:"#475467",fontSize:13,marginBottom:8},dir:"auto",children:["Columns: ",(n.columns||[]).slice(0,12).join(" | ")||"No columns detected"]}),s.jsx(hg,{columns:n.columns||[],rows:n.rows||n.row_preview||[]})]},n.id))}):s.jsx(ur,{label:"No tables were detected in this document."})}function jg({runId:e}){const[t,r]=y.useState({loading:!0,error:"",blocks:[]});if(y.useEffect(()=>{let a=!1;return r({loading:!0,error:"",blocks:[]}),fetch(`${W}/extract-runs/${e}/blocks?limit=1000`).then(async o=>{if(!o.ok)throw new Error(await re(o));return o.json()}).then(o=>{a||r({loading:!1,error:"",blocks:o.blocks||[]})}).catch(o=>{a||r({loading:!1,error:ie(o),blocks:[]})}),()=>{a=!0}},[e]),t.loading)return s.jsx(Wn,{label:"Loading extracted text blocks..."});if(t.error)return s.jsx(Ki,{message:t.error});const n=t.blocks.filter(a=>a.text||a.type==="table").slice(0,500).map(a=>({Page:a.page_number,Type:a.type,Path:a.path,Text:Re(a.text||JSON.stringify(a.payload||{}),700)}));return n.length?s.jsx(Or,{columns:["Page","Type","Path","Text"],rows:n}):s.jsx(ur,{label:"No extracted text blocks were returned."})}function Sg({runId:e,meta:t}){const[r,n]=y.useState({loading:!0,error:"",data:null});if(y.useEffect(()=>{let p=!1;return n({loading:!0,error:"",data:null}),Fh(e).then(g=>{p||n({loading:!1,error:"",data:g})}).catch(g=>{p||n({loading:!1,error:ie(g),data:null})}),()=>{p=!0}},[e]),r.loading)return s.jsx(Wn,{label:"Building structured JSON preview..."});if(r.error)return s.jsx(Ki,{message:r.error});const a=r.data||{},o=a.tables||[],i=a.pages||[],l=a.content||i.flatMap(p=>p.content||[]),c=a.document_summary||{},u=c.extraction_quality||{},m=l.map(p=>p.inferred_record).filter(Boolean);return s.jsxs("div",{style:{display:"grid",gap:12},children:[s.jsxs("div",{style:{...ut,padding:12,boxShadow:"none"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12,alignItems:"flex-start",flexWrap:"wrap"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:650,marginBottom:8},dir:"auto",children:"Business extraction summary"}),s.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",color:"#344054",fontSize:13},children:[s.jsxs("span",{style:gr,children:["Document: ",c.label||t.label||"uploaded file"]}),s.jsxs("span",{style:gr,children:["Type: ",c.source_type||t.source_format||"document"]}),s.jsxs("span",{style:gr,children:["Template: ",c.detected_template||"generic document"]}),s.jsxs("span",{style:gr,children:["Quality: ",u.grade||"not rated"]}),Number.isFinite(u.score)&&s.jsxs("span",{style:gr,children:["Score: ",Math.round(u.score*100),"%"]}),c.detected_language&&s.jsxs("span",{style:gr,children:["Script: ",c.detected_language]})]})]}),s.jsx("button",{onClick:()=>{window.location.href=`${W}/extract-runs/${e}/json`},style:Oh(),children:"Download clean JSON"})]}),Array.isArray(u.warnings)&&u.warnings.length>0&&s.jsx("div",{style:{color:"#8a5a00",fontSize:13,marginTop:8,lineHeight:1.4},dir:"auto",children:u.warnings.slice(0,3).map(p=>p.message||p).join(" ")})]}),s.jsxs("div",{style:{...ut,padding:12,boxShadow:"none"},children:[s.jsx("div",{style:{display:"flex",justifyContent:"space-between",gap:10,alignItems:"center",marginBottom:8},children:s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:650},children:"Document-order extracted text"}),s.jsxs("div",{style:{color:"#667085",fontSize:13,marginTop:3},children:[l.length," text block(s), ",m.length," inferred record(s), ",o.length," table(s), ",i.length," page(s)"]})]})}),l.length>0?s.jsx(Or,{columns:["Page","Type","Path","Text","Inferred record"],rows:l.slice(0,500).map(p=>({Page:p.page,Type:p.type,Path:p.path,Text:Re(p.text,900),"Inferred record":p.inferred_record?Nc(p.inferred_record.values):""}))}):s.jsx(ur,{label:"No ordered text content was returned. Check the Text blocks tab."})]}),m.length>0&&s.jsxs("div",{style:{...ut,padding:12,boxShadow:"none"},children:[s.jsx("div",{style:{fontWeight:650,marginBottom:8},children:"Inferred business records"}),s.jsx(Or,{columns:["Page","Values","Source text","Citation"],rows:m.slice(0,120).map(p=>({Page:p.page,Values:Nc(p.values),"Source text":Re(p.source_text,700),Citation:p.citation}))})]}),o.length>0&&s.jsxs("div",{style:{...ut,padding:12,boxShadow:"none"},children:[s.jsx("div",{style:{fontWeight:650,marginBottom:8},children:"Extracted tables"}),s.jsx(Or,{columns:["title","page","area","row_count","columns"],rows:o.slice(0,30).map(p=>({title:p.title,page:p.page,area:p.area,row_count:p.row_count,columns:(p.columns||[]).join(" | ")}))})]}),s.jsxs("div",{style:{...ut,padding:12,boxShadow:"none"},children:[s.jsx("div",{style:{fontWeight:650,marginBottom:8},children:"Clean JSON preview"}),s.jsx("pre",{className:"dl-scrollbar",style:{margin:0,maxHeight:360,overflow:"auto",background:"#fbfaf6",border:"1px solid #e0d8ca",borderRadius:8,padding:12,fontSize:12,lineHeight:1.45,whiteSpace:"pre-wrap"},children:JSON.stringify({document_summary:a.document_summary,content:l.slice(0,30),tables:o.slice(0,10)},null,2)})]})]})}function Ki({message:e}){return s.jsx("div",{style:{marginTop:16,border:"1px solid #f0b4b4",background:"#fff5f5",color:"#9f1d1d",borderRadius:8,padding:13,fontSize:14,fontWeight:600,lineHeight:1.45},children:e})}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),mp=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Eg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=y.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:a="",children:o,iconNode:i,...l},c)=>y.createElement("svg",{ref:c,...Eg,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:mp("lucide",a),...l},[...i.map(([u,m])=>y.createElement(u,m)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=(e,t)=>{const r=y.forwardRef(({className:n,...a},o)=>y.createElement(Ng,{ref:o,iconNode:t,className:mp(`lucide-${_g(e)}`,n),...a}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=Et("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=Et("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=Et("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=Et("FileOutput",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2",key:"1vk7w2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6",key:"1jink5"}],["path",{d:"m5 11-3 3",key:"1dgrs4"}],["path",{d:"m5 17-3-3h10",key:"1mvvaf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=Et("GitCompare",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=Et("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=Et("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=Et("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=Et("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);function Ag(){return s.jsxs("div",{className:"altrai-wordmark","aria-label":"Altrai",children:[s.jsx("span",{children:"Altr"}),s.jsx("span",{className:"accent",children:"ai"})]})}const Ig=[{label:"AI Document Intelligence",items:[{key:"compare",label:"Compare",icon:Dg},{key:"extract",label:"Extract",icon:Tg},{key:"jobs",label:"Work History",icon:$g}]},{label:"Administration",items:[{key:"admin",label:"Admin Studio",icon:Lg,title:"Use cases, datasets, and access policies"}]},{label:"AI Agents",items:[{key:"agents",label:"Coming soon",icon:Cg,disabled:!0,title:"Future skills and multi-agent workflows"}]}];function Mg({workspace:e,onNavigate:t,collapsed:r=!1}){return s.jsx("nav",{className:"workspace-nav","aria-label":"Workspace navigation",children:Ig.map(n=>s.jsxs("div",{className:"workspace-nav-group",children:[!r&&s.jsx("div",{className:"workspace-nav-label",children:n.label}),n.items.map(a=>{const o=e===a.key;return s.jsxs("button",{type:"button",className:`workspace-nav-item${o?" active":""}`,onClick:()=>!a.disabled&&t(a.key),disabled:a.disabled,title:r?a.title||a.label:a.title,children:[s.jsx(a.icon,{className:"workspace-nav-icon","aria-hidden":"true"}),!r&&s.jsx("span",{className:"workspace-nav-text",children:a.label})]},`${n.label}-${a.label}-${a.key}`)})]},n.label))})}const hp=y.createContext(null),Ac="altrai_theme";function Og({children:e}){const[t,r]=y.useState(()=>typeof window>"u"?"system":window.localStorage.getItem(Ac)||"system");y.useEffect(()=>{document.documentElement.dataset.theme=t,window.localStorage.setItem(Ac,t)},[t]);const n=y.useMemo(()=>({theme:t,setTheme:r}),[t]);return s.jsx(hp.Provider,{value:n,children:e})}function gp(){const e=y.useContext(hp);if(!e)throw new Error("useTheme must be used within ThemeProvider");return e}const Fg=[["system","Auto"],["light","Light"],["dark","Dark"]];function Ug({collapsed:e=!1}){const{theme:t,setTheme:r}=gp();return s.jsxs("footer",{className:"user-footer",children:[s.jsx("div",{className:"user-avatar","aria-hidden":"true",children:"N"}),!e&&s.jsxs("div",{className:"user-meta",children:[s.jsx("strong",{children:"Nithin"}),s.jsx("span",{children:"platform_admin"})]}),!e&&s.jsx("div",{className:"rail-theme-toggle","aria-label":"Theme selector",children:Fg.map(([n,a])=>s.jsx("button",{type:"button",className:t===n?"active":"",onClick:()=>r(n),children:a},n))})]})}const Bg={jobs:"Work History",compare:"Compare",extract:"Extract",agents:"AI Agents",admin:"Admin Studio"},Wg={compare:{label:"Comparison History",historyKind:"comparison"},extract:{label:"Extraction History",historyKind:"extraction"}};function Vg({workspace:e,runId:t,onNavigate:r,onDownloadReport:n,children:a}){const[o,i]=y.useState(!1),{theme:l}=gp(),c=Wg[e];return s.jsxs("div",{className:`workspace-shell theme-${l}${o?" collapsed":""}`,children:[s.jsxs("aside",{className:"workspace-sidebar",children:[s.jsxs("div",{className:"workspace-brand",children:[s.jsx("div",{className:"workspace-brand-copy",children:s.jsx(Ag,{})}),s.jsx("button",{type:"button",className:"workspace-collapse-button",onClick:()=>i(u=>!u),"aria-label":o?"Expand navigation":"Collapse navigation",title:o?"Expand navigation":"Collapse navigation",children:o?s.jsx(Pg,{size:16,strokeWidth:1.5}):s.jsx(zg,{size:16,strokeWidth:1.5})})]}),s.jsx(Mg,{workspace:e,onNavigate:r,collapsed:o}),s.jsx(Ug,{collapsed:o})]}),s.jsxs("section",{className:"workspace-main",children:[s.jsxs("header",{className:"workspace-topbar",children:[s.jsx("div",{children:s.jsx("h1",{children:Bg[e]||"Workspace"})}),s.jsxs("div",{className:"workspace-actions",children:[t&&s.jsx("button",{type:"button",className:"workspace-primary-action",onClick:n,children:"Export report"}),c&&s.jsx("button",{type:"button",className:"workspace-secondary-action",onClick:()=>r("jobs",{historyKind:c.historyKind}),children:c.label})]})]}),s.jsx("div",{className:"workspace-content",children:a})]})]})}const qg=[["platform_admin","Platform Admin"],["business_unit_admin","Business Unit Admin"],["reviewer","Reviewer"],["submitter","Submitter"],["viewer","Viewer"]],Ic={supplier:"",family_name:"",domain:"generic",description:"",use_case_type:"comparison",expected_formats:["pdf","docx"],sample_plan:"",onboarding_notes:"",learning_mode:"ai_assisted_bootstrap",allowed_roles:[]},Hg=[["pdf","PDF"],["docx","Word"],["xlsx","Excel"],["csv","CSV/TSV"],["image","Scanned image"]],Qg=[["deterministic_first","Deterministic first"],["ai_assisted_bootstrap","AI-assisted bootstrap"],["manual_profile","Manual profile"]],Kg=()=>({id:crypto.randomUUID(),baseline:null,revised:null});function Gg(){var sl,il,ll,cl;const[e,t]=y.useState([]),[r,n]=y.useState(""),[a,o]=y.useState(null),[i,l]=y.useState(Ic),[c,u]=y.useState({supplier:"",family_name:"",domain:"generic",description:""}),[m,p]=y.useState(""),[g,x]=y.useState([]),[v,b]=y.useState(""),[S,f]=y.useState({use_case_type:"comparison",expected_formats:["pdf","docx"],sample_plan:"",onboarding_notes:"",learning_mode:"ai_assisted_bootstrap"}),[d,h]=y.useState({baseline:null,revised:null,variationPairs:[]}),[w,_]=y.useState(!0),[j,N]=y.useState(null),[C,P]=y.useState(""),[D,U]=y.useState(null),[_e,Me]=y.useState(null),[Nt,Ee]=y.useState(null),[Ye,Ne]=y.useState(0),[z,R]=y.useState({baseline:null,revised:null,variations:[]}),[A,Q]=y.useState([]),[oe,Xe]=y.useState(!0),[J,L]=y.useState(""),[M,O]=y.useState(""),[ee,I]=y.useState(""),[ye,mt]=y.useState(""),[Ji,Yi]=y.useState(!0),[Xi,yp]=y.useState(!0),[Zi,wp]=y.useState(!1),[el,bp]=y.useState(!1),mr=()=>({"Content-Type":"application/json","X-User-Role":window.sessionStorage.getItem("simulated_role")||"platform_admin"}),Jr=async()=>{Xe(!0),O("");try{const k=await xr("/admin/datasets",{headers:mr()});t(k.datasets||[])}catch(k){O(ie(k))}finally{Xe(!1)}};y.useEffect(()=>{Jr(),tl()},[]),y.useEffect(()=>{if(J!=="analyze"&&J!=="create")return;const k=Date.now();Ne(0);const $=window.setInterval(()=>{Ne(Math.floor((Date.now()-k)/1e3))},1e3);return()=>window.clearInterval($)},[J]);const tl=async()=>{try{const k=await xr("/ai-health");N(k);const $=(k.models||[]).find(F=>F.kind==="chat"&&F.configured);$!=null&&$.id&&P($.id)}catch{N({ok:!1,models:[],message:"AI model status is unavailable."})}},Vn=async k=>{var $;n(k),O(""),I("");try{const F=await xr(`/admin/datasets/${k}`,{headers:mr()});o(F),u({supplier:F.supplier||"",family_name:F.family_name||"",domain:F.domain||"generic",description:F.description||""}),p(F.prompt_guidelines||""),x(F.allowed_roles||[]),f({use_case_type:F.use_case_type||"comparison",expected_formats:F.expected_formats||["pdf","docx"],sample_plan:F.sample_plan||"",onboarding_notes:F.onboarding_notes||"",learning_mode:F.learning_mode||"deterministic_first"}),b(JSON.stringify((($=F.template_profile)==null?void 0:$.column_rules)||[],null,2)),await kp(k)}catch(F){O(ie(F))}},kp=async k=>{try{const $=await xr(`/admin/datasets/${k}/documents`,{headers:mr()});Q($.documents||[])}catch{Q([])}},jp=async k=>{k.preventDefault(),L("create"),O(""),I("");const $=Ho(d);Ee({status:"running",stage:"create",submitted:$,startedAt:new Date().toISOString(),events:["Saving use case metadata"],error:""});try{const F=await ix("/admin/datasets",{method:"POST",headers:mr(),body:JSON.stringify(i)});let he="",ue="";Ee(q=>({...q||{},status:"success",stage:"saved",datasetId:F.id,events:[...(q==null?void 0:q.events)||[],"Use case metadata saved"]})),I("Use case created. Opening saved profile.");try{await Jr(),F.id&&await Vn(F.id)}catch{I("Use case created. Refresh the use case list if it does not appear immediately.")}if(F.id&&ua(d)){Ee(q=>({...q||{},stage:"samples",events:[...(q==null?void 0:q.events)||[],"Learning attached samples"]}));try{await rl(F.id,d,i.onboarding_notes,i.learning_mode==="ai_assisted_bootstrap"),he=" Sample documents learned and model profile bootstrapped.",Ee(q=>({...q||{},events:[...(q==null?void 0:q.events)||[],"Sample learning completed"]}))}catch(q){ue=` Sample learning did not finish: ${ie(q)}`,Ee(Ct=>({...Ct||{},sampleWarning:ue,events:[...(Ct==null?void 0:Ct.events)||[],"Sample learning needs attention"]}))}}Ee(q=>({...q||{},status:"success",stage:"done",datasetId:F.id,sampleWarning:ue,events:[...(q==null?void 0:q.events)||[],"Ready for refinement"],finishedAt:new Date().toISOString()})),I(`Use case created.${he||ue||" You can attach or relearn samples from the saved use case."}`),l(Ic),h({baseline:null,revised:null,variationPairs:[]}),U(null)}catch(F){const he=ie(F);O(he),Ee(ue=>({...ue||{},status:"failed",finishedAt:new Date().toISOString(),events:[...(ue==null?void 0:ue.events)||[],"Create failed"],error:he}))}finally{L("")}},Sp=k=>{try{const $=Fc(v);if($.some(he=>he.role===k)){I(`A rule for label '${k}' already exists.`);return}const F=[...$,{pattern:`.*${k.toLowerCase().replace(/_/g,".*")}.*`,role:k}];b(JSON.stringify(F,null,2)),I(`Added suggested mapping rule for '${k}'. Click 'Save profile settings' to apply.`)}catch{O("Column rules JSON is malformed. Please fix it before adding labels.")}},_p=async()=>{if(r){L("save"),O(""),I("");try{await xr(`/admin/datasets/${r}`,{method:"PUT",headers:mr(),body:JSON.stringify({prompt_guidelines:m,allowed_roles:g,column_rules:Fc(v),...c,...S})}),I("Use case settings saved."),await Jr(),await Vn(r)}catch(k){O(ie(k))}finally{L("")}}},Ep=async k=>{if(k.preventDefault(),!(!r||!ua(z))){L("bootstrap"),O(""),I("");try{await rl(r,z,S.onboarding_notes||"",S.learning_mode==="ai_assisted_bootstrap"),I("Sample documents learned and model profile updated."),R({baseline:null,revised:null,variations:[]}),await Vn(r)}catch($){O(ie($))}finally{L("")}}},rl=async(k,$,F,he)=>{const ue=new FormData;$.baseline&&ue.append("baseline",$.baseline),$.revised&&ue.append("revised",$.revised),xo($).forEach(Ct=>ue.append("variations",Ct)),ue.append("notes",F||""),ue.append("use_llm",String(he));const q=await Np(k,ue);if(!q.ok)throw new Error(await re(q));return q.json()},Np=async(k,$)=>{const F=()=>{const q=new FormData;for(const[Ct,$p]of $.entries())q.append(Ct,$p);return q},he=q=>fetch(`${W}${q}`,{method:"POST",headers:{"X-User-Role":window.sessionStorage.getItem("simulated_role")||"platform_admin"},body:F()}),ue=await he(`/admin/datasets/${k}/samples`);return ue.status!==404?ue:he(`/api/admin/datasets/${k}/samples`)},Cp=async()=>{if(ua(d)){if(w&&!C){O("Select a configured AI model before running AI-assisted sample analysis.");return}L("analyze"),O(""),I(""),U(null),Me({status:"running",mode:w?"ai":"deterministic",model:w?C:"",submitted:Ho(d),startedAt:new Date().toISOString(),events:["Preparing upload context"],error:""});try{const k=await Zg({files:d,form:i,useAiAnalysis:w,selectedModel:C});if(!k.ok)throw new Error(await re(k));const $=await k.json(),F=$.suggested_dataset||{};U($),Me(he=>({...he||{},status:"success",finishedAt:new Date().toISOString(),backendUsage:Yg($),model:$.selected_model||C,events:[...(he==null?void 0:he.events)||[],"Sample structure analyzed","Metadata suggestions generated"]})),l({...i,...F,allowed_roles:i.allowed_roles||[],learning_mode:w?"ai_assisted_bootstrap":"deterministic_first"}),I(w?"Sample analysis complete. Review the suggested use case model before creating it.":"Deterministic sample scan complete. Review the suggested use case model before creating it.")}catch(k){const $=ie(k);O($),Me(F=>({...F||{},status:"failed",finishedAt:new Date().toISOString(),events:[...(F==null?void 0:F.events)||[],"Analysis failed"],error:$}))}finally{L("")}}},zp=async()=>{if(!(!r||!a||!window.confirm(`Delete use case "${a.supplier} · ${a.family_name}"? This removes the saved model profile from Admin Studio.`))){L("delete"),O(""),I("");try{await xr(`/admin/datasets/${r}`,{method:"DELETE",headers:mr()}),I("Use case deleted."),n(""),o(null),Q([]),await Jr()}catch($){O(ie($))}finally{L("")}}},nl=Ho(d),qn=ua(d),al=w&&!C,Pp=!qn||J==="analyze"||al,Tp=J==="analyze"?"Analyzing samples":w?"Analyze samples with AI":"Scan samples without AI",Dp=qn?al?"Select an available chat model before AI analysis.":w?"Ready to send selected samples and context to the model.":"Ready for deterministic structure scan. No AI tokens will be used.":"Attach a baseline, revised, or variation sample to start.",ol=e.filter(k=>{const $=ye.trim().toLowerCase();return $?[k.supplier,k.family_name,k.domain,k.use_case_type].filter(Boolean).join(" ").toLowerCase().includes($):!0});return s.jsxs("section",{className:"admin-studio",children:[s.jsx("div",{className:"admin-intro",children:s.jsxs("div",{children:[s.jsx("h2",{children:"Use Case Onboarding"}),s.jsx("p",{children:"Create document models from representative samples. Use AI to suggest metadata, then keep governance and access settings with the saved use case."})]})}),ee&&s.jsx("div",{className:"admin-notice",children:ee}),M&&s.jsx(In,{message:M}),s.jsxs("div",{className:"admin-grid",children:[s.jsxs("aside",{className:"admin-panel",children:[s.jsxs("div",{className:"admin-panel-head",children:[s.jsxs("div",{children:[s.jsx("h3",{children:"Use Cases"}),s.jsxs("p",{children:[e.length," saved model",e.length===1?"":"s"]})]}),s.jsx("button",{type:"button",className:"ghost-action compact",onClick:Jr,children:"Refresh"})]}),s.jsx("input",{className:"admin-search",value:ye,onChange:k=>mt(k.target.value),placeholder:"Search supplier, family, domain"}),oe?s.jsx(Wn,{label:"Loading use cases"}):e.length===0?s.jsx(ur,{label:"No use cases onboarded yet."}):ol.length===0?s.jsx(ur,{label:"No matching use cases."}):s.jsx("div",{className:"dataset-list",children:ol.map(k=>s.jsxs("button",{type:"button",className:`dataset-item${r===k.id?" active":""}`,onClick:()=>Vn(k.id),children:[s.jsx("strong",{children:k.supplier}),s.jsx("span",{children:k.family_name}),s.jsxs("small",{children:[k.use_case_type||"comparison"," · ",(k.expected_formats||[]).join(", ")||"formats"," · ",(k.allowed_roles||[]).length||"all"," roles"]})]},k.id))})]}),s.jsxs("main",{className:"admin-panel",children:[s.jsx(da,{title:"Onboard Document Model",description:"Create a new model from identity, representative samples, and generated metadata.",open:Ji,onToggle:()=>Yi(k=>!k)}),Ji?s.jsxs("form",{className:"admin-form onboarding-flow compact-flow",onSubmit:jp,children:[s.jsxs("section",{className:"admin-review-card",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Use Case Identity"}),s.jsx("p",{children:"Define the business model before uploading samples. Analysis will use these values as context instead of guessing from file names."})]}),s.jsxs("div",{className:"admin-review-grid",children:[s.jsxs("label",{children:["Supplier or entity",s.jsx("input",{value:i.supplier,required:!0,onChange:k=>l({...i,supplier:k.target.value}),placeholder:"Ford, HR, Finance, Legal"})]}),s.jsxs("label",{children:["Use case or family",s.jsx("input",{value:i.family_name,required:!0,onChange:k=>l({...i,family_name:k.target.value}),placeholder:"Order Guide, Policy, Contract"})]}),s.jsxs("label",{children:["Use case type",s.jsxs("select",{value:i.use_case_type,onChange:k=>l({...i,use_case_type:k.target.value}),children:[s.jsx("option",{value:"comparison",children:"Comparison"}),s.jsx("option",{value:"extraction",children:"Extraction"})]})]}),s.jsxs("label",{children:["Domain",s.jsxs("select",{value:i.domain,onChange:k=>l({...i,domain:k.target.value}),children:[s.jsx("option",{value:"generic",children:"Generic"}),s.jsx("option",{value:"automotive",children:"Automotive"}),s.jsx("option",{value:"legal",children:"Legal"}),s.jsx("option",{value:"financial",children:"Financial"}),s.jsx("option",{value:"hr",children:"HR"}),s.jsx("option",{value:"engineering",children:"Engineering"})]})]}),s.jsx("div",{className:"admin-wide-field",children:s.jsx(Oc,{value:i.expected_formats,onChange:k=>l({...i,expected_formats:k})})})]})]}),s.jsxs("section",{className:"sample-intake-card",children:[s.jsxs("div",{className:"sample-intake-head",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Training Samples"}),s.jsx("p",{children:"Attach one baseline and one revised document. Add variation pairs only when you have alternate layouts, suppliers, model years, or document structures."})]}),s.jsxs("label",{className:"ai-toggle",children:[s.jsx("input",{type:"checkbox",checked:w,onChange:k=>_(k.target.checked)}),"Analyze with AI model"]})]}),w?s.jsxs("div",{className:"model-select-row",children:[s.jsxs("label",{children:["Model deployment",s.jsx("select",{value:C,onChange:k=>P(k.target.value),children:Mc(j).length?Mc(j).map(k=>s.jsx("option",{value:k.id,children:k.label||k.id},k.id)):s.jsx("option",{value:"",children:"No configured chat model found"})})]}),s.jsx("button",{type:"button",className:"ghost-action compact",onClick:tl,children:"Refresh models"}),s.jsx("span",{children:j!=null&&j.ok?"Model connection verified.":(j==null?void 0:j.message)||"Checking AI model status."})]}):null,s.jsxs("div",{className:"sample-pair-grid",children:[s.jsxs("label",{children:["Baseline sample",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>{var $;return h({...d,baseline:(($=k.target.files)==null?void 0:$[0])||null})}})]}),s.jsxs("label",{children:["Revised sample",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>{var $;return h({...d,revised:(($=k.target.files)==null?void 0:$[0])||null})}})]})]}),s.jsx(rx,{value:d.variationPairs,onChange:k=>h({...d,variationPairs:k})}),s.jsxs("div",{className:"sample-actions analysis-action-row",children:[s.jsxs("button",{type:"button",className:"analyze-action-button",onClick:Cp,disabled:Pp,"aria-busy":J==="analyze",children:[s.jsx("span",{children:Tp}),s.jsx("small",{children:w?C||"No model selected":"Deterministic mode"})]}),s.jsxs("div",{className:"analysis-readiness",children:[s.jsx("span",{className:qn?"ready":"blocked",children:qn?"Samples ready":"Waiting for samples"}),s.jsxs("span",{children:[Ja(nl.count)," file(s)"]}),s.jsx("span",{children:xp(nl.totalBytes)}),s.jsx("span",{children:w?"AI-assisted metadata":"No AI tokens"}),s.jsx("small",{children:Dp})]})]}),s.jsx(ex,{run:_e,elapsedSeconds:Ye,useAiAnalysis:w,selectedModel:C})]}),D?s.jsx(nx,{data:D}):null,s.jsxs("section",{className:"admin-review-card",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Generated Metadata"}),s.jsx("p",{children:"Analysis fills this section with document understanding, extraction focus, accuracy hints, and reviewer notes. You can also maintain it manually."})]}),s.jsxs("div",{className:"admin-review-grid",children:[s.jsxs("label",{children:["Content description",s.jsx("textarea",{value:i.description,onChange:k=>l({...i,description:k.target.value}),placeholder:"Describe the documents, expected fields, tables, identifiers, and business context."})]}),s.jsxs("label",{children:["Onboarding notes",s.jsx("textarea",{value:i.onboarding_notes,onChange:k=>l({...i,onboarding_notes:k.target.value}),placeholder:"Known pain points, nested headers, language handling, reviewer expectations, or accuracy targets."})]}),s.jsxs("label",{className:"admin-wide-field",children:["Sample strategy",s.jsx("textarea",{value:i.sample_plan,onChange:k=>l({...i,sample_plan:k.target.value}),placeholder:"How many baseline/revised/variation samples should represent this model?"})]})]})]}),s.jsx("button",{type:"submit",className:"primary-action",disabled:J==="create",children:J==="create"?"Creating":"Create use case"}),s.jsx(tx,{run:Nt,elapsedSeconds:Ye})]}):s.jsxs("div",{className:"admin-collapsed-summary",children:[s.jsx("span",{children:"New use-case onboarding is collapsed."}),s.jsx("button",{type:"button",className:"ghost-action compact",onClick:()=>Yi(!0),children:"Open"})]})]})]}),a?s.jsx("section",{className:"admin-panel",children:s.jsxs("div",{className:"admin-detail",children:[s.jsx(da,{title:`Refine ${a.supplier} · ${a.family_name}`,description:"Edit the saved model profile, then save changes without creating a duplicate.",open:Xi,onToggle:()=>yp(k=>!k),meta:`${S.use_case_type} model · ${(S.expected_formats||[]).join(", ")}`,actions:s.jsxs("div",{className:"admin-detail-actions",children:[s.jsx("button",{type:"button",className:"primary-action compact",onClick:_p,disabled:J==="save",children:J==="save"?"Saving":"Save changes"}),s.jsx("button",{type:"button",className:"danger-action compact",onClick:zp,disabled:J==="delete",children:J==="delete"?"Deleting":"Delete"})]})}),Xi?s.jsxs("div",{className:"admin-edit-shell",children:[s.jsxs("section",{className:"admin-review-card",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Model Identity"}),s.jsx("p",{children:"These fields control how the use case appears in Compare, Extract, and Work History."})]}),s.jsxs("div",{className:"admin-review-grid",children:[s.jsxs("label",{children:["Supplier or entity",s.jsx("input",{value:c.supplier,required:!0,onChange:k=>u({...c,supplier:k.target.value})})]}),s.jsxs("label",{children:["Use case or family",s.jsx("input",{value:c.family_name,required:!0,onChange:k=>u({...c,family_name:k.target.value})})]}),s.jsxs("label",{children:["Domain",s.jsxs("select",{value:c.domain,onChange:k=>u({...c,domain:k.target.value}),children:[s.jsx("option",{value:"generic",children:"Generic"}),s.jsx("option",{value:"automotive",children:"Automotive"}),s.jsx("option",{value:"legal",children:"Legal"}),s.jsx("option",{value:"financial",children:"Financial"}),s.jsx("option",{value:"hr",children:"HR"}),s.jsx("option",{value:"engineering",children:"Engineering"})]})]}),s.jsxs("label",{children:["Use case type",s.jsxs("select",{value:S.use_case_type,onChange:k=>f({...S,use_case_type:k.target.value}),children:[s.jsx("option",{value:"comparison",children:"Comparison"}),s.jsx("option",{value:"extraction",children:"Extraction"})]})]}),s.jsxs("label",{className:"admin-wide-field",children:["Description",s.jsx("textarea",{value:c.description,onChange:k=>u({...c,description:k.target.value}),placeholder:"Describe the document family, business purpose, and expected reviewer outcome."})]})]})]}),s.jsxs("section",{className:"admin-review-card",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Learning Profile"}),s.jsx("p",{children:"Refine how this model should learn from samples and which formats it should accept."})]}),s.jsxs("div",{className:"admin-config-grid",children:[s.jsxs("label",{children:["Learning mode",s.jsx("select",{value:S.learning_mode,onChange:k=>f({...S,learning_mode:k.target.value}),children:Qg.map(([k,$])=>s.jsx("option",{value:k,children:$},k))})]}),s.jsx("div",{className:"admin-wide-field",children:s.jsx(Oc,{value:S.expected_formats,onChange:k=>f({...S,expected_formats:k})})}),s.jsxs("label",{children:["Sample strategy",s.jsx("textarea",{value:S.sample_plan,onChange:k=>f({...S,sample_plan:k.target.value}),placeholder:"How many samples or variations should represent this model?"})]}),s.jsxs("label",{children:["Onboarding notes",s.jsx("textarea",{value:S.onboarding_notes,onChange:k=>f({...S,onboarding_notes:k.target.value}),placeholder:"Business context, known table layouts, accuracy targets, and reviewer comments."})]})]})]}),s.jsxs("section",{className:"admin-review-card",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Extraction Guidance"}),s.jsx("p",{children:"Optional instructions and column mappings used by deterministic extraction and AI-assisted bootstrapping."})]}),s.jsxs("div",{className:"admin-config-grid",children:[s.jsxs("label",{children:["Prompt and extraction guidelines",s.jsx("textarea",{value:m,onChange:k=>p(k.target.value),placeholder:"Example: prioritize PCB thickness, PCV code changes, nested pricing rows, or legal obligations."})]}),s.jsxs("label",{children:["Column rules JSON",s.jsx("textarea",{className:"mono",value:v,onChange:k=>b(k.target.value)})]})]})]}),s.jsxs("section",{className:"admin-review-card",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Access"}),s.jsx("p",{children:"Choose the roles allowed to see and use this model. Leave empty for all configured users."})]}),s.jsx(ax,{value:g,onChange:x})]})]}):null,s.jsx(da,{title:"Sample Learning",description:"Attach or relearn representative samples after the model has been created.",open:Zi,onToggle:()=>wp(k=>!k),meta:`${A.length} learned document${A.length===1?"":"s"}`}),Zi?s.jsxs("form",{className:"seed-form",onSubmit:Ep,children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Sample Document Learning"}),s.jsx("p",{children:"For comparison models, upload a baseline, revised document, and any format/layout variations. The profile stores structure, page range, table signatures, stable keys, and reviewer guidance."})]}),s.jsxs("div",{className:"sample-upload-grid",children:[s.jsxs("label",{children:["Baseline sample",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>{var $;return R({...z,baseline:(($=k.target.files)==null?void 0:$[0])||null})}})]}),s.jsxs("label",{children:["Revised sample",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>{var $;return R({...z,revised:(($=k.target.files)==null?void 0:$[0])||null})}})]}),s.jsxs("label",{children:["Additional variations",s.jsx("input",{type:"file",multiple:!0,accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>R({...z,variations:Array.from(k.target.files||[])})})]})]}),s.jsx("button",{type:"submit",className:"primary-action",disabled:!z.baseline&&!z.revised&&z.variations.length===0||J==="bootstrap",children:J==="bootstrap"?"Learning":"Learn from samples"})]}):null,s.jsx(da,{title:"Profile Insights",description:"Review learned samples, stable keys, column rules, and AI onboarding notes.",open:el,onToggle:()=>bp(k=>!k)}),el?s.jsxs("div",{className:"admin-profile-grid",children:[s.jsx(ox,{profile:(sl=a.template_profile)==null?void 0:sl.sample_profile}),s.jsx(Qo,{title:"Sample Documents",items:A,labelKey:"label",valueKey:"page_count"}),s.jsx(sx,{profile:(il=a.template_profile)==null?void 0:il.ai_reasoning_profile,onAddLabel:Sp}),s.jsx(Qo,{title:"Stable Keys",items:(ll=a.template_profile)==null?void 0:ll.stable_key_patterns,labelKey:"name",valueKey:"regex"}),s.jsx(Qo,{title:"Column Rules",items:(cl=a.template_profile)==null?void 0:cl.column_rules,labelKey:"role",valueKey:"pattern"})]}):null]})}):null]})}function ua(e){var t;return!!(e!=null&&e.baseline||e!=null&&e.revised||(t=e==null?void 0:e.variations)!=null&&t.length||xo(e).length)}function xo(e){const t=Array.isArray(e==null?void 0:e.variations)?e.variations:[],r=Array.isArray(e==null?void 0:e.variationPairs)?e.variationPairs.flatMap(n=>[n.baseline,n.revised].filter(Boolean)):[];return[...t,...r]}function Jg(e){return[e==null?void 0:e.baseline,e==null?void 0:e.revised,...xo(e)].filter(Boolean)}function Ho(e){const t=Jg(e),r=t.reduce((n,a)=>n+Number(a.size||0),0);return{count:t.length,totalBytes:r,totalMb:r/(1024*1024),estimatedInputTokens:Math.max(1,Math.ceil(r/4)),files:t.map(n=>({name:n.name,size:n.size||0}))}}function xp(e){const t=Number(e||0);return t>=1024*1024?`${(t/(1024*1024)).toFixed(2)} MB`:t>=1024?`${(t/1024).toFixed(1)} KB`:`${t} B`}function Ja(e){return new Intl.NumberFormat().format(Math.round(Number(e||0)))}function Mc(e){const t=Array.isArray(e==null?void 0:e.models)?e.models:[];return t.length?t.filter(r=>r.kind==="chat"):e!=null&&e.deployment?[{id:e.deployment,label:e.deployment,kind:"chat",configured:e.configured}]:[]}function Yg(e){var n,a,o;if(e!=null&&e.usage)return{prompt_tokens:Number(e.usage.prompt_tokens||0),completion_tokens:Number(e.usage.completion_tokens||0),total_tokens:Number(e.usage.total_tokens||0),estimated_prompt_tokens:Number(e.usage.estimated_prompt_tokens||0),prompt_chars:Number(e.usage.prompt_chars||0),calls:Number(e.usage.calls||0)};const t=[],r=(n=e==null?void 0:e.analysis)==null?void 0:n.usage;return r&&t.push(r),(o=(a=e==null?void 0:e.template_profile)==null?void 0:a.ai_reasoning_profile)!=null&&o.usage&&t.push(e.template_profile.ai_reasoning_profile.usage),t.reduce((i,l)=>({prompt_tokens:i.prompt_tokens+Number(l.prompt_tokens||0),completion_tokens:i.completion_tokens+Number(l.completion_tokens||0),total_tokens:i.total_tokens+Number(l.total_tokens||0),estimated_prompt_tokens:i.estimated_prompt_tokens+Number(l.estimated_prompt_tokens||0),prompt_chars:i.prompt_chars+Number(l.prompt_chars||0),calls:i.calls+Number(l.calls||(l.total_tokens?1:0))}),{prompt_tokens:0,completion_tokens:0,total_tokens:0,estimated_prompt_tokens:0,prompt_chars:0,calls:0})}function Xg({files:e,form:t,useAiAnalysis:r,selectedModel:n}){const a=new FormData;return e.baseline&&a.append("baseline",e.baseline),e.revised&&a.append("revised",e.revised),xo(e).forEach(o=>a.append("variations",o)),a.append("supplier",t.supplier||""),a.append("family_name",t.family_name||""),a.append("domain",t.domain||"generic"),a.append("use_case_type",t.use_case_type||"comparison"),a.append("expected_formats",(t.expected_formats||[]).join(",")),a.append("notes",t.onboarding_notes||t.sample_plan||""),a.append("use_llm",String(r)),a.append("model_name",r?n:""),a}async function Zg(e){const t=async a=>fetch(`${W}${a}`,{method:"POST",headers:{"X-User-Role":window.sessionStorage.getItem("simulated_role")||"platform_admin"},body:Xg(e)}),r=await t("/admin/analyze-use-case-samples");if(r.status!==404)return r;const n=await t("/admin/datasets/analyze-samples");if(n.status!==404)return n;throw new Error("Sample analyzer route is missing in the deployed backend revision. This is not a database schema issue. Rebuild and deploy the backend image that includes backend/routers/admin.py with POST /admin/analyze-use-case-samples.")}function da({title:e,description:t,open:r,onToggle:n,meta:a="",actions:o=null}){return s.jsxs("div",{className:"admin-collapse-head",children:[s.jsx("button",{type:"button",className:"admin-collapse-toggle",onClick:n,"aria-expanded":r,children:s.jsx("span",{children:r?"-":"+"})}),s.jsxs("div",{children:[s.jsx("h3",{children:e}),t?s.jsx("p",{children:t}):null,a?s.jsx("span",{className:"admin-model-badge",children:a}):null]}),o?s.jsx("div",{className:"admin-collapse-actions",children:o}):null]})}function ex({run:e,elapsedSeconds:t,useAiAnalysis:r,selectedModel:n}){var m,p;if(!e)return null;const a=e.submitted||{},o=e.backendUsage||{},i=e.status==="running"?"Running":e.status==="success"?"Completed":"Failed",l=e.status==="success"?3:e.status==="failed"?1:Math.min(3,Math.floor(t/12)),c=[["prepare","Preparing upload context"],["extract","Extracting sample structure"],["model",r?`Invoking ${n||"selected model"}`:"Deterministic profile scan"],["metadata","Generating metadata suggestions"]],u=(m=e.events)!=null&&m.length?e.events:c.slice(0,l+1).map(([,g])=>g);return s.jsxs("div",{className:`activity-stream ${e.status}`,children:[s.jsxs("div",{className:"activity-head",children:[s.jsx("strong",{children:i}),s.jsx("span",{children:e.status==="running"?`${t}s elapsed`:"Run finished"}),s.jsx("small",{children:e.mode==="ai"?`Model: ${e.model||n||"not selected"}`:"Deterministic scan"})]}),s.jsx(vp,{events:u,status:e.status,activeText:(p=c[l])==null?void 0:p[1]}),s.jsxs("div",{className:"activity-foot",children:[s.jsxs("span",{children:[Ja(a.count)," file(s)"]}),s.jsx("span",{children:xp(a.totalBytes)}),s.jsx("span",{children:e.mode==="ai"?`Tokens ${o.total_tokens?Ja(o.total_tokens):"pending"}`:"No AI tokens"})]}),e.error?s.jsx("p",{className:"analysis-run-error",children:e.error}):null]})}function tx({run:e,elapsedSeconds:t}){var o,i,l;if(!e)return null;const r=e.status==="running"?"Creating use case":e.status==="success"?"Use case created":"Create failed",n=Number(((o=e.submitted)==null?void 0:o.count)||0)>0,a=(i=e.events)!=null&&i.length?e.events:["Saving use case metadata"];return s.jsxs("div",{className:`activity-stream create-run ${e.status}`,children:[s.jsxs("div",{className:"activity-head",children:[s.jsx("strong",{children:r}),s.jsx("span",{children:e.status==="running"?`${t}s elapsed`:"Run finished"}),s.jsx("small",{children:e.datasetId?`ID ${String(e.datasetId).slice(0,8)}`:`${Ja(((l=e.submitted)==null?void 0:l.count)||0)} sample file(s)`})]}),s.jsx(vp,{events:a,status:e.status,activeText:n&&e.stage==="samples"?"Learning attached samples":""}),n?null:s.jsxs("div",{className:"activity-foot",children:[s.jsx("span",{children:"No samples attached"}),s.jsx("span",{children:"Metadata-only create"})]}),e.sampleWarning?s.jsx("p",{className:"analysis-run-warning",children:e.sampleWarning}):null,e.error?s.jsx("p",{className:"analysis-run-error",children:e.error}):null]})}function vp({events:e,status:t,activeText:r=""}){const n=[...e];return t==="running"&&r&&!n.includes(r)&&n.push(r),s.jsx("ol",{className:"activity-lines",children:n.map((a,o)=>{const i=o===n.length-1,l=t==="failed"&&i?"failed":t==="running"&&i?"active":"done";return s.jsx("li",{className:l,children:a},`${a}-${o}`)})})}function rx({value:e,onChange:t}){const r=Array.isArray(e)?e:[],n=(o,i)=>{t(r.map(l=>l.id===o?{...l,...i}:l))},a=o=>{t(r.filter(i=>i.id!==o))};return s.jsxs("div",{className:"variation-pairs",children:[s.jsxs("div",{className:"variation-pairs-head",children:[s.jsxs("div",{children:[s.jsx("h5",{children:"Variation pairs"}),s.jsx("p",{children:"Add only when another baseline/revised pair represents a different layout or document family variation."})]}),s.jsx("button",{type:"button",className:"icon-action",onClick:()=>t([...r,Kg()]),disabled:r.length>=5,title:"Add variation pair",children:"+"})]}),r.length?s.jsx("div",{className:"variation-pair-list",children:r.map((o,i)=>s.jsxs("div",{className:"variation-pair-row",children:[s.jsxs("strong",{children:["Variation ",i+1]}),s.jsxs("label",{children:["Baseline",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:l=>{var c;return n(o.id,{baseline:((c=l.target.files)==null?void 0:c[0])||null})}})]}),s.jsxs("label",{children:["Revised",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:l=>{var c;return n(o.id,{revised:((c=l.target.files)==null?void 0:c[0])||null})}})]}),s.jsx("button",{type:"button",className:"ghost-action compact",onClick:()=>a(o.id),children:"Remove"})]},o.id))}):s.jsx("span",{className:"variation-empty",children:"No variation pairs added."})]})}function nx({data:e}){const t=(e==null?void 0:e.suggested_dataset)||{},r=(e==null?void 0:e.analysis)||{},n=r.confidence_score!==void 0?Math.round(Number(r.confidence_score||0)*100):null,a=Array.isArray(r.complexity_reasons)?r.complexity_reasons:[],o=Array.isArray(r.enhancement_tips)?r.enhancement_tips:[];return s.jsxs("section",{className:"analysis-card",children:[s.jsxs("div",{className:"analysis-card-head",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Sample Analysis"}),s.jsx("p",{children:e!=null&&e.used_ai?"GPT-4o assisted the metadata suggestions.":"Deterministic scan generated metadata suggestions."})]}),s.jsxs("span",{children:[String(r.complexity_rating||"standard")," complexity"]})]}),s.jsxs("div",{className:"analysis-grid",children:[s.jsxs("p",{children:[s.jsx("strong",{children:t.supplier||"Supplier pending"}),s.jsx("small",{children:t.family_name||"Use case pending"})]}),s.jsxs("p",{children:[s.jsx("strong",{children:t.use_case_type||"comparison"}),s.jsx("small",{children:(t.expected_formats||[]).join(", ")||"formats pending"})]}),s.jsxs("p",{children:[s.jsx("strong",{children:t.domain||"generic"}),s.jsx("small",{children:n!==null?`${n}% estimated parser confidence`:"confidence pending"})]})]}),a.length||o.length?s.jsxs("div",{className:"analysis-notes",children:[a.slice(0,3).map((i,l)=>s.jsx("span",{children:i},`reason-${l}`)),o.slice(0,3).map((i,l)=>s.jsx("span",{children:i},`tip-${l}`))]}):null]})}function ax({value:e,onChange:t}){const r=n=>{t(e.includes(n)?e.filter(a=>a!==n):[...e,n])};return s.jsxs("fieldset",{className:"role-picker",children:[s.jsx("legend",{children:"Allowed roles"}),qg.map(([n,a])=>s.jsxs("label",{children:[s.jsx("input",{type:"checkbox",checked:e.includes(n),onChange:()=>r(n)}),a]},n))]})}function Oc({value:e,onChange:t}){const r=Array.isArray(e)?e:[],n=a=>{t(r.includes(a)?r.filter(o=>o!==a):[...r,a])};return s.jsxs("fieldset",{className:"format-picker",children:[s.jsx("legend",{children:"Expected formats"}),Hg.map(([a,o])=>s.jsxs("label",{children:[s.jsx("input",{type:"checkbox",checked:r.includes(a),onChange:()=>n(a)}),o]},a))]})}function ox({profile:e}){const t=e&&typeof e=="object"?e:{};return s.jsxs("div",{className:"profile-card",children:[s.jsx("h4",{children:"Model Samples"}),s.jsxs("p",{children:[s.jsxs("strong",{children:[String(t.sample_count||0)," samples"]}),s.jsx("small",{children:(t.roles_present||[]).join(", ")||"No roles learned yet"})]}),s.jsxs("p",{children:[s.jsxs("strong",{children:[String(t.average_pages||0)," avg pages"]}),s.jsxs("small",{children:[String(t.min_pages||0)," min · ",String(t.max_pages||0)," max"]})]}),t.last_bootstrap_notes?s.jsxs("p",{children:[s.jsx("strong",{children:"Latest notes"}),s.jsx("small",{children:String(t.last_bootstrap_notes)})]}):null]})}function Qo({title:e,items:t,labelKey:r,valueKey:n}){const a=Array.isArray(t)?t:[];return s.jsxs("div",{className:"profile-card",children:[s.jsx("h4",{children:e}),a.length===0?s.jsx("span",{children:"No entries yet."}):a.slice(0,8).map((o,i)=>s.jsxs("p",{children:[s.jsx("strong",{children:String((o==null?void 0:o[r])??"Item")}),s.jsx("small",{children:String((o==null?void 0:o[n])??"")})]},i))]})}function sx({profile:e,onAddLabel:t}){const r=e&&typeof e=="object"?e:{},n=String(r.complexity_rating||"low").toUpperCase(),a=r.confidence_score!==void 0?Math.round(r.confidence_score*100):null,o=Array.isArray(r.complexity_reasons)?r.complexity_reasons:[],i=Array.isArray(r.enhancement_tips)?r.enhancement_tips:[],l=Array.isArray(r.suggested_data_labels)?r.suggested_data_labels:[],c=n==="HIGH"?"#9f2525":n==="MEDIUM"?"#c45510":"#1f7e41",u=n==="HIGH"?"#fff7f7":n==="MEDIUM"?"#fffbf7":"#f7fff9",m=n==="HIGH"?"#f1c6c6":n==="MEDIUM"?"#f7d6c1":"#c1f1d1";return s.jsxs("div",{className:"profile-card",style:{gridColumn:"span 2"},children:[s.jsxs("h4",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("span",{children:"AI Onboarding Analysis"}),s.jsxs("span",{style:{fontSize:11,fontWeight:700,color:c,background:u,border:`1px solid ${m}`,padding:"2px 8px",borderRadius:99},children:[n," COMPLEXITY"]})]}),a!==null&&s.jsxs("p",{style:{marginTop:8},children:[s.jsxs("strong",{children:["Parser Confidence Rating: ",a,"%"]}),s.jsx("small",{children:"Estimated baseline accuracy without AI assistance"})]}),o.length>0&&s.jsxs("p",{style:{marginTop:10},children:[s.jsx("strong",{children:"Structural Complexity Indicators"}),s.jsx("small",{style:{display:"block",marginTop:4},children:o.map((p,g)=>s.jsxs("span",{style:{display:"block",color:"var(--text-primary)"},children:["• ",p]},g))})]}),i.length>0&&s.jsxs("p",{style:{marginTop:10},children:[s.jsx("strong",{children:"Extraction Optimization Recommendations"}),s.jsx("small",{style:{display:"block",marginTop:4},children:i.map((p,g)=>s.jsxs("span",{style:{display:"block",color:"var(--text-primary)"},children:["• ",p]},g))})]}),l.length>0&&s.jsxs("p",{style:{marginTop:12},children:[s.jsx("strong",{children:"Suggested Data Labels (Click to map)"}),s.jsx("span",{style:{display:"flex",flexWrap:"wrap",gap:6,marginTop:6},children:l.map(p=>s.jsxs("button",{type:"button",onClick:()=>t(p),style:{background:"var(--surface-sunken)",border:"1px solid var(--border)",color:"var(--text-primary)",borderRadius:"4px",padding:"2px 8px",fontSize:12,fontWeight:650,cursor:"pointer"},title:"Click to automatically create a mapping rule for this label",children:["Add ",p]},p))})]})]})}async function xr(e,t={}){const r=await fetch(`${W}${e}`,t);if(r.status===404&&e.startsWith("/admin/")){const n=await fetch(`${W}/api${e}`,t);if(!n.ok)throw new Error(await re(n));return n.json()}if(!r.ok)throw new Error(await re(r));return r.json()}async function ix(e,t={}){const r=await fetch(`${W}${e}`,t);if(r.status!==404){if(!r.ok)throw new Error(await re(r));return r.json()}const n=await fetch(`${W}/api${e}`,t);if(!n.ok)throw new Error(await re(n));return n.json()}function Fc(e){const t=e.trim();if(!t)return[];const r=JSON.parse(t);if(!Array.isArray(r))throw new Error("Column rules must be a JSON array.");return r}function lx(e){y.useEffect(()=>{document.title=`${e} · Altrai`},[e])}const cx=30,Uc=1200,ux=e=>Number(e||0).toLocaleString();function dx(e,t,r){const n=String(e||"").toLowerCase(),a=n.includes("gpt-4")&&!n.includes("mini"),o=a?2.5:.15,i=a?10:.6;return(Number(t||0)*o+Number(r||0)*i)/1e6}function Gi(e){return`doculens_compare_chat_${e}`}function px(e){if(typeof window>"u"||!e)return[];try{const t=window.sessionStorage.getItem(Gi(e)),r=t?JSON.parse(t):[];return Array.isArray(r)?r:[]}catch{return[]}}function fx(e,t){if(!(typeof window>"u"||!e))try{const r=t.slice(-cx).map(n=>({id:n.id,role:n.role,text:n.text,rows:Array.isArray(n.rows)?n.rows.slice(0,20):[],columns:Array.isArray(n.columns)?n.columns.slice(0,8):[],mode:n.mode||"fast",model:n.model||null,usage:n.usage||null,confidence:n.confidence??null,warning:n.warning||"",timestamp:n.timestamp||"",isError:!!n.isError}));window.sessionStorage.setItem(Gi(e),JSON.stringify(r))}catch{}}function Bc(e){const t=Array.isArray(e==null?void 0:e.models)?e.models:[];return t.length?t.filter(r=>r.kind==="chat"&&r.configured!==!1):e!=null&&e.deployment?[{id:e.deployment,label:e.deployment,kind:"chat",configured:e.configured}]:[]}function mx({runId:e}){const[t,r]=y.useState(""),[n,a]=y.useState("fast"),[o,i]=y.useState(""),[l,c]=y.useState(null),[u,m]=y.useState([]),[p,g]=y.useState({}),[x,v]=y.useState(!1),[b,S]=y.useState(""),f=y.useRef(null),d=y.useRef(!1),h=y.useMemo(()=>Bc(l),[l]);y.useEffect(()=>{let j=!1;return(async()=>{try{const C=await fetch(`${W}/ai-health`);if(!C.ok)throw new Error(await re(C));const P=await C.json();if(j)return;c(P);const D=Bc(P)[0];D!=null&&D.id&&i(U=>U||D.id)}catch{j||c({ok:!1,models:[],message:"AI model status is unavailable."})}})(),()=>{j=!0}},[]),y.useEffect(()=>{d.current=!0,m(px(e)),g({})},[e]),y.useEffect(()=>{if(d.current){d.current=!1;return}fx(e,u)},[e,u]),y.useEffect(()=>{var j;(j=f.current)==null||j.scrollIntoView({behavior:"smooth",block:"nearest"})},[u,x,b]),y.useEffect(()=>{if(!x){S("");return}const j=n==="ai"?["Searching comparison evidence","Reading relevant changes","Writing a grounded answer"]:["Searching comparison evidence","Ranking relevant changes","Preparing the answer"];let N=0;S(j[N]);const C=window.setInterval(()=>{N=Math.min(N+1,j.length-1),S(j[N])},1500);return()=>window.clearInterval(C)},[x,n]);const w=async()=>{const j=t.trim();if(!j||x||!e)return;const N=new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});m(C=>[...C,{id:`user-${Date.now()}`,role:"user",text:j,timestamp:N}]),r(""),v(!0);try{const C=await fetch(`${W}/runs/${e}/query`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:j,mode:n,response_language:"source",model_name:n==="ai"?o:null,history:u.filter(D=>D.role==="user"||D.role==="assistant").slice(-8).map(D=>({role:D.role,text:D.text}))})});if(!C.ok)throw new Error(await re(C));const P=await C.json();m(D=>{var U;return[...D,{id:`answer-${Date.now()}`,role:"assistant",text:P.answer||`I found ${((U=P.rows)==null?void 0:U.length)||0} relevant changes.`,rows:P.rows||[],columns:P.columns||Vh(P.rows||[]),mode:P.mode||n,model:P.ai_deployment||(n==="ai"?o:null),usage:(P.mode||n)==="ai"?P.usage:null,confidence:P.confidence,warning:P.ai_error||(P.ai_unavailable?"AI was unavailable, so this answer uses extracted comparison evidence.":""),timestamp:new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}]})}catch(C){m(P=>[...P,{id:`answer-${Date.now()}`,role:"assistant",text:ie(C),rows:[],timestamp:new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),isError:!0}])}finally{v(!1)}},_=()=>{m([]),g({}),typeof window<"u"&&e&&window.sessionStorage.removeItem(Gi(e))};return s.jsxs("section",{className:"comparison-chat",children:[s.jsxs("div",{className:"comparison-chat-toolbar",children:[s.jsx("span",{children:u.length?"Conversation saved with this comparison":"Ask anything about this comparison"}),u.length>0&&s.jsx("button",{type:"button",onClick:_,disabled:x,children:"Clear"})]}),s.jsxs("div",{className:"comparison-chat-thread",children:[u.length===0&&s.jsxs("div",{className:"comparison-chat-empty",children:[s.jsx(Hs,{"aria-hidden":"true"}),s.jsx("h4",{children:"What would you like to know?"}),s.jsx("p",{children:"Ask for a summary, a specific value, a changed table row, or the source page."})]}),u.map(j=>s.jsx(hx,{message:j,sourcesOpen:!!p[j.id],onToggleSources:()=>g(N=>({...N,[j.id]:!N[j.id]}))},j.id)),x&&s.jsxs("div",{className:"comparison-chat-message assistant thinking",children:[s.jsx("div",{className:"comparison-chat-avatar",children:s.jsx(Hs,{"aria-hidden":"true"})}),s.jsx("div",{className:"comparison-chat-response",children:s.jsxs("div",{className:"comparison-chat-thinking",children:[s.jsx("span",{}),s.jsx("span",{}),s.jsx("span",{}),s.jsx("em",{children:b||"Thinking"})]})})]}),s.jsx("div",{ref:f})]}),s.jsxs("div",{className:"comparison-chat-composer",children:[s.jsx("textarea",{value:t,onChange:j=>r(j.target.value),onKeyDown:j=>{j.key==="Enter"&&!j.shiftKey&&(j.preventDefault(),w())},placeholder:"Message this comparison",disabled:x,rows:1}),s.jsxs("div",{className:"comparison-chat-controls",children:[s.jsxs("div",{className:"comparison-chat-mode",children:[s.jsxs("select",{value:n,onChange:j=>a(j.target.value),disabled:x,children:[s.jsx("option",{value:"fast",children:"Evidence search"}),s.jsx("option",{value:"ai",children:"AI chat"})]}),n==="ai"&&s.jsx("select",{value:o,onChange:j=>i(j.target.value),disabled:x,children:h.length?h.map(j=>s.jsx("option",{value:j.id,children:j.label||j.id},j.id)):s.jsx("option",{value:"",children:"No AI model configured"})})]}),s.jsx("button",{type:"button",className:"comparison-chat-send",onClick:w,disabled:x||!t.trim()||n==="ai"&&!o,"aria-label":"Send message",title:"Send message",children:s.jsx(Rg,{"aria-hidden":"true"})})]})]})]})}function hx({message:e,sourcesOpen:t,onToggleSources:r}){const n=e.role==="user",a=Array.isArray(e.rows)?e.rows:[],o=e.usage,[i,l]=y.useState(!1),c=o?dx(e.model,o.prompt_tokens,o.completion_tokens):0,u=String(e.text||"").length>Uc,m=u&&!i?`${String(e.text||"").slice(0,Uc).trimEnd()}...`:e.text;return n?s.jsx("div",{className:"comparison-chat-message user",children:s.jsx("div",{className:"comparison-chat-user-bubble",dir:"auto",children:e.text})}):s.jsxs("div",{className:`comparison-chat-message assistant${e.isError?" error":""}`,children:[s.jsx("div",{className:"comparison-chat-avatar",children:s.jsx(Hs,{"aria-hidden":"true"})}),s.jsxs("div",{className:"comparison-chat-response",children:[s.jsx("div",{className:"comparison-chat-answer",dir:"auto",children:m}),e.warning&&s.jsx("p",{className:"comparison-chat-warning",children:e.warning}),s.jsxs("div",{className:"comparison-chat-actions",children:[u&&s.jsx("button",{type:"button",onClick:()=>l(p=>!p),children:i?"Show less":"Show full response"}),a.length>0&&s.jsx("button",{type:"button",onClick:r,children:t?"Hide sources":`${a.length} source${a.length===1?"":"s"}`}),(e.model||o)&&s.jsxs("details",{className:"comparison-chat-details",children:[s.jsx("summary",{children:"Details"}),s.jsxs("div",{children:[e.model&&s.jsxs("span",{children:["Model: ",e.model]}),o&&s.jsxs("span",{children:[ux(o.total_tokens)," tokens · approximately $",c.toFixed(5)]})]})]})]}),t&&s.jsx("div",{className:"comparison-chat-sources",children:a.slice(0,8).map((p,g)=>s.jsx(gx,{row:p,index:g},`${p.stable_key||p.citation||g}`))})]})]})}function gx({row:e,index:t}){var a,o;const r=e.feature||e.item||e.area||e.stable_key||`Source ${t+1}`,n=e.change||e.description||e.after||e.before||e.definition||"";return s.jsxs("article",{className:"comparison-chat-source",children:[s.jsxs("div",{children:[s.jsx("strong",{dir:"auto",children:Re(r,100)}),e.citation&&s.jsx("span",{children:e.citation})]}),n&&s.jsx("p",{dir:"auto",children:Re(typeof n=="string"?n:JSON.stringify(n),260)}),(e.before||e.after||((a=e.field_changes)==null?void 0:a.length)>0)&&s.jsxs("details",{children:[s.jsx("summary",{children:"View change"}),s.jsxs("div",{className:"comparison-chat-source-change",children:[s.jsx(up,{type:Mr(e)}),e.before&&s.jsxs("div",{dir:"auto",children:[s.jsx("strong",{children:"Before:"})," ",Re(e.before,260)]}),e.after&&s.jsxs("div",{dir:"auto",children:[s.jsx("strong",{children:"After:"})," ",Re(e.after,260)]}),((o=e.field_changes)==null?void 0:o.length)>0&&s.jsx(gg,{rows:e.field_changes})]})]})]})}const xx=(e,t)=>{if(typeof window>"u")return t;try{const r=window.sessionStorage.getItem(`doculens_${e}`);return r!==null?JSON.parse(r):t}catch{return t}},vx=(e,t)=>{if(!(typeof window>"u"))try{window.sessionStorage.setItem(`doculens_${e}`,JSON.stringify(t))}catch(r){console.error(r)}},Qs={compare:"/compare",extract:"/extract",jobs:"/work-history",agents:"/ai-agents",admin:"/admin"},yx={"/":"compare",...Object.fromEntries(Object.entries(Qs).map(([e,t])=>[t,e]))},Wc=e=>yx[e]||"compare";function wx(){const e=sp(),t=_h(),[r,n]=y.useState(()=>Wc(window.location.pathname)),[a,o]=y.useState(null),[i,l]=y.useState(null),[c,u]=y.useState("viewer"),[m,p]=y.useState(1),[g,x]=y.useState(!1),[v,b]=y.useState(""),[S,f]=y.useState(null),[d,h]=y.useState(null),[w,_]=y.useState(!1),[j,N]=y.useState(""),[C,P]=y.useState("overview"),[D,U]=y.useState(""),[_e,Me]=y.useState(()=>xx("historyKind","all")),Nt={compare:"Compare",extract:"Extract",jobs:"Work History",agents:"AI Agents",admin:"Admin Studio"}[r]||"Workspace";lx(Nt),y.useEffect(()=>{vx("historyKind",_e)},[_e]),y.useEffect(()=>{const L=Wc(e.pathname);L!==r&&n(L)},[e.pathname]),y.useEffect(()=>{r==="compare"&&c!=="viewer"&&u("viewer")},[r]);const Ee=()=>{o(null),l(null),x(!1),b(""),p(1),u("viewer"),Ne("compare")},Ye=()=>{f(null),h(null),_(!1),N(""),P("overview"),Ne("extract")},Ne=(L,M={})=>{n(L),L==="jobs"&&Me(M.historyKind||"all"),b(""),N(""),U(""),t(Qs[L]||Qs.compare,{replace:!1})};y.useEffect(()=>{if(!a||!g)return;let L=!1,M=null;const O=async()=>{try{const ee=await fetch(`${W}/runs/${a}`);if(!ee.ok)throw new Error(await re(ee));const I=await ee.json();if(L)return;if(l(I),I.status==="complete"){x(!1),u("viewer");return}if(I.status==="failed"){x(!1),b(nt(I.error||I.status_message||"Comparison failed."));return}M=setTimeout(O,1e3)}catch(ee){if(L)return;x(!1),b(ie(ee))}};return O(),()=>{L=!0,M&&clearTimeout(M)}},[a,g]),y.useEffect(()=>{if(!S||!w)return;let L=!1,M=null;const O=async()=>{try{const ee=await fetch(`${W}/extract-runs/${S}`);if(!ee.ok)throw new Error(await re(ee));const I=await ee.json();if(L)return;if(h(I),I.status==="complete"){_(!1),P("overview");return}if(I.status==="failed"){_(!1),N(nt(I.error||I.status_message||"Extraction failed."));return}M=setTimeout(O,1e3)}catch(ee){if(L)return;_(!1),N(ie(ee))}};return O(),()=>{L=!0,M&&clearTimeout(M)}},[S,w]);const z=async L=>{L.preventDefault();const M=new FormData(L.currentTarget),O=M.get("base"),ee=M.get("target"),I=String(M.get("family_id")||"").trim();if(!O||!ee||!O.name||!ee.name){b("Please select both documents before starting.");return}if(!I){b("Please select a document use case before starting comparison.");return}n("compare"),x(!0),b(""),o(null),p(1),u("viewer"),l({status:"uploading",status_message:"Uploading documents",progress:3,stats:{},coverage:{},n_pages_base:0,n_pages_target:0});try{const ye=await fetch(`${W}/compare`,{method:"POST",body:M});if(!ye.ok)throw new Error(await re(ye));const mt=await ye.json();o(mt.run_id),x(mt.status!=="complete"&&mt.status!=="failed"),l({run_id:mt.run_id,status:mt.status,status_message:mt.status_message||"Starting comparison",progress:mt.progress||5,stats:{},coverage:{},n_pages_base:0,n_pages_target:0}),n("compare")}catch(ye){x(!1),b(ie(ye))}},R=async L=>{L.preventDefault();const M=new FormData(L.currentTarget),O=M.getAll("document").filter(I=>I&&I.name),ee=String(M.get("family_id")||"").trim();if(!O.length){N("Please select at least one document, spreadsheet, PDF, or image before starting extraction.");return}if(!ee){N("Please select a document use case before starting extraction.");return}n("extract"),_(!0),N(""),f(null),P("overview"),h({status:"uploading",status_message:"Uploading document",progress:3,summary:{}});try{const I=await fetch(`${W}/extract`,{method:"POST",body:M});if(!I.ok)throw new Error(await re(I));const ye=await I.json();f(ye.run_id),_(ye.status!=="complete"&&ye.status!=="failed"),h({run_id:ye.run_id,status:ye.status,status_message:ye.status_message||"Starting extraction",progress:ye.progress||5,summary:{}}),n("extract")}catch(I){_(!1),N(ie(I))}},A=async L=>{U("");try{if(L.kind==="extraction"){const ee=await fetch(`${W}/extract-runs/${L.run_id}`);if(!ee.ok)throw new Error(await re(ee));const I=await ee.json();o(null),l(null),x(!1),f(L.run_id),h(I),_(I.status!=="complete"&&I.status!=="failed"),P("overview"),n("extract");return}const M=await fetch(`${W}/runs/${L.run_id}`);if(!M.ok)throw new Error(await re(M));const O=await M.json();f(null),h(null),_(!1),o(L.run_id),l(O),x(O.status!=="complete"&&O.status!=="failed"),u("viewer"),p(1),n("compare")}catch(M){U(ie(M))}},Q=async L=>{U("");try{if(L.kind==="extraction"){const M=await fetch(`${W}/extract-runs/${L.run_id}`);if(!M.ok)throw new Error(await re(M));const O=await M.json();o(null),l(null),x(!1),f(L.run_id),h(O),_(O.status!=="complete"&&O.status!=="failed"),n("extract");return}await A(L)}catch(M){U(ie(M))}},oe=()=>{a&&(window.location.href=`${W}/runs/${a}/report.pdf`)},Xe=(i==null?void 0:i.status)==="complete",J=(d==null?void 0:d.status)==="complete";return s.jsxs("div",{children:[s.jsx("style",{children:Ih}),s.jsxs(Vg,{workspace:r,runId:r==="compare"&&Xe?a:null,onNavigate:Ne,onDownloadReport:oe,children:[r==="jobs"&&s.jsx(tg,{onOpenJob:A,onAskJob:Q,error:D,historyKind:_e,onStartCompare:Ee,onStartExtract:Ye}),r==="compare"&&!Xe&&s.jsxs("section",{className:"workflow-panel",children:[s.jsx(ng,{onUpload:z,busy:g,onAdmin:()=>Ne("admin")}),g&&i&&s.jsx(Rc,{progress:i.progress||0,message:i.status_message||"Processing documents",status:i.status||"running"}),v&&s.jsx(In,{message:v})]}),r==="extract"&&!J&&s.jsxs("section",{className:"workflow-panel",children:[s.jsx(ag,{onUpload:R,busy:w,onAdmin:()=>Ne("admin")}),w&&d&&s.jsx(Rc,{progress:d.progress||0,message:d.status_message||"Extracting document",status:d.status||"running"}),j&&s.jsx(In,{message:j})]}),r==="compare"&&Xe&&a&&i&&s.jsxs("section",{className:"comparison-workspace",children:[s.jsxs("div",{className:"comparison-head",children:[s.jsx("div",{children:s.jsxs("h2",{dir:"auto",children:[i.base_label||"Baseline"," → ",i.target_label||"Revised"]})}),s.jsxs("div",{className:"comparison-head-actions",children:[s.jsx("button",{type:"button",className:"ghost-action compact",onClick:Ee,children:"New comparison"}),s.jsxs("div",{className:"comparison-id",children:["#",String(a).slice(0,6)]})]})]}),s.jsx(Yh,{meta:i}),s.jsxs("main",{className:"comparison-flow",children:[s.jsxs("section",{className:"workspace-surface",children:[s.jsx("div",{className:"surface-title-row",children:s.jsxs("div",{children:[s.jsx("h3",{children:"Quick Summary"}),s.jsx("p",{children:"Highest-priority differences detected from the comparison evidence."})]})}),s.jsx(og,{runId:a,meta:i,onVerifyPage:p})]}),s.jsxs("section",{className:"workspace-surface",children:[s.jsx("div",{className:"surface-title-row",children:s.jsxs("div",{children:[s.jsx("h3",{children:"Visual Comparison"}),s.jsx("p",{children:"Side-by-side verification with synchronized scroll, zoom, and document overlays."})]})}),s.jsx(sg,{runId:a,meta:i,pageNum:m,setPageNum:p})]}),s.jsxs("section",{className:"workspace-surface",children:[s.jsx("div",{className:"surface-title-row",children:s.jsxs("div",{children:[s.jsx("h3",{children:"Ask This Comparison"}),s.jsx("p",{children:"Start with natural language search. Switch to an AI model only when reasoning or richer synthesis is needed."})]})}),s.jsx(mx,{runId:a})]})]})]}),r==="extract"&&J&&S&&d&&s.jsx(xg,{runId:S,meta:d,tab:C,setTab:P}),r==="agents"&&s.jsxs("section",{className:"workspace-placeholder",children:[s.jsx("h2",{children:"AI Agents"}),s.jsx("p",{children:"Future skills and multi-agent workflows will live here after the document intelligence workspace is stable."}),s.jsx("div",{className:"placeholder-list",children:s.jsx("span",{children:"Coming soon"})})]}),r==="admin"&&s.jsx(Gg,{})]})]})}Ko.createRoot(document.getElementById("root")).render(s.jsx(Xa.StrictMode,{children:s.jsx(Og,{children:s.jsx(Lh,{children:s.jsx(wx,{})})})}));
