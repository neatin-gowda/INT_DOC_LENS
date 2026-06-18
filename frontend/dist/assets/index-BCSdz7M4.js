function Ip(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in e)){const o=Object.getOwnPropertyDescriptor(n,a);o&&Object.defineProperty(e,a,o.get?o:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();function Mp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hc={exports:{}},Za={},Qc={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fn=Symbol.for("react.element"),Op=Symbol.for("react.portal"),Fp=Symbol.for("react.fragment"),Up=Symbol.for("react.strict_mode"),Bp=Symbol.for("react.profiler"),Wp=Symbol.for("react.provider"),Vp=Symbol.for("react.context"),qp=Symbol.for("react.forward_ref"),Hp=Symbol.for("react.suspense"),Qp=Symbol.for("react.memo"),Kp=Symbol.for("react.lazy"),ul=Symbol.iterator;function Gp(e){return e===null||typeof e!="object"?null:(e=ul&&e[ul]||e["@@iterator"],typeof e=="function"?e:null)}var Kc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gc=Object.assign,Jc={};function Gr(e,t,r){this.props=e,this.context=t,this.refs=Jc,this.updater=r||Kc}Gr.prototype.isReactComponent={};Gr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Gr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yc(){}Yc.prototype=Gr.prototype;function Gs(e,t,r){this.props=e,this.context=t,this.refs=Jc,this.updater=r||Kc}var Js=Gs.prototype=new Yc;Js.constructor=Gs;Gc(Js,Gr.prototype);Js.isPureReactComponent=!0;var dl=Array.isArray,Xc=Object.prototype.hasOwnProperty,Ys={current:null},Zc={key:!0,ref:!0,__self:!0,__source:!0};function eu(e,t,r){var n,a={},o=null,i=null;if(t!=null)for(n in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Xc.call(t,n)&&!Zc.hasOwnProperty(n)&&(a[n]=t[n]);var l=arguments.length-2;if(l===1)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)a[n]===void 0&&(a[n]=l[n]);return{$$typeof:Fn,type:e,key:o,ref:i,props:a,_owner:Ys.current}}function Jp(e,t){return{$$typeof:Fn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fn}function Yp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var pl=/\/+/g;function yo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Yp(""+e.key):t.toString(36)}function ma(e,t,r,n,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Fn:case Op:i=!0}}if(i)return i=e,a=a(i),e=n===""?"."+yo(i,0):n,dl(a)?(r="",e!=null&&(r=e.replace(pl,"$&/")+"/"),ma(a,t,r,"",function(u){return u})):a!=null&&(Xs(a)&&(a=Jp(a,r+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(pl,"$&/")+"/")+e)),t.push(a)),1;if(i=0,n=n===""?".":n+":",dl(e))for(var l=0;l<e.length;l++){o=e[l];var c=n+yo(o,l);i+=ma(o,t,r,c,a)}else if(c=Gp(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=n+yo(o,l++),i+=ma(o,t,r,c,a);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Kn(e,t,r){if(e==null)return e;var n=[],a=0;return ma(e,n,"","",function(o){return t.call(r,o,a++)}),n}function Xp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Te={current:null},ha={transition:null},Zp={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:ha,ReactCurrentOwner:Ys};function tu(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:Kn,forEach:function(e,t,r){Kn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Kn(e,function(){t++}),t},toArray:function(e){return Kn(e,function(t){return t})||[]},only:function(e){if(!Xs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=Gr;F.Fragment=Fp;F.Profiler=Bp;F.PureComponent=Gs;F.StrictMode=Up;F.Suspense=Hp;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zp;F.act=tu;F.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Gc({},e.props),a=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Ys.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Xc.call(t,c)&&!Zc.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:Fn,type:e.type,key:a,ref:o,props:n,_owner:i}};F.createContext=function(e){return e={$$typeof:Vp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Wp,_context:e},e.Consumer=e};F.createElement=eu;F.createFactory=function(e){var t=eu.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:qp,render:e}};F.isValidElement=Xs;F.lazy=function(e){return{$$typeof:Kp,_payload:{_status:-1,_result:e},_init:Xp}};F.memo=function(e,t){return{$$typeof:Qp,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=ha.transition;ha.transition={};try{e()}finally{ha.transition=t}};F.unstable_act=tu;F.useCallback=function(e,t){return Te.current.useCallback(e,t)};F.useContext=function(e){return Te.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return Te.current.useDeferredValue(e)};F.useEffect=function(e,t){return Te.current.useEffect(e,t)};F.useId=function(){return Te.current.useId()};F.useImperativeHandle=function(e,t,r){return Te.current.useImperativeHandle(e,t,r)};F.useInsertionEffect=function(e,t){return Te.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return Te.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return Te.current.useMemo(e,t)};F.useReducer=function(e,t,r){return Te.current.useReducer(e,t,r)};F.useRef=function(e){return Te.current.useRef(e)};F.useState=function(e){return Te.current.useState(e)};F.useSyncExternalStore=function(e,t,r){return Te.current.useSyncExternalStore(e,t,r)};F.useTransition=function(){return Te.current.useTransition()};F.version="18.3.1";Qc.exports=F;var y=Qc.exports;const Ur=Mp(y),ef=Ip({__proto__:null,default:Ur},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tf=y,rf=Symbol.for("react.element"),nf=Symbol.for("react.fragment"),af=Object.prototype.hasOwnProperty,of=tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sf={key:!0,ref:!0,__self:!0,__source:!0};function ru(e,t,r){var n,a={},o=null,i=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(n in t)af.call(t,n)&&!sf.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:rf,type:e,key:o,ref:i,props:a,_owner:of.current}}Za.Fragment=nf;Za.jsx=ru;Za.jsxs=ru;Hc.exports=Za;var s=Hc.exports,Go={},nu={exports:{}},Ve={},au={exports:{}},ou={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,R){var I=z.length;z.push(R);e:for(;0<I;){var Q=I-1>>>1,oe=z[Q];if(0<a(oe,R))z[Q]=R,z[I]=oe,I=Q;else break e}}function r(z){return z.length===0?null:z[0]}function n(z){if(z.length===0)return null;var R=z[0],I=z.pop();if(I!==R){z[0]=I;e:for(var Q=0,oe=z.length,ht=oe>>>1;Q<ht;){var K=2*(Q+1)-1,ge=z[K],M=K+1,$=z[M];if(0>a(ge,I))M<oe&&0>a($,ge)?(z[Q]=$,z[M]=I,Q=M):(z[Q]=ge,z[K]=I,Q=K);else if(M<oe&&0>a($,I))z[Q]=$,z[M]=I,Q=M;else break e}}return R}function a(z,R){var I=z.sortIndex-R.sortIndex;return I!==0?I:z.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var c=[],u=[],f=1,p=null,g=3,v=!1,x=!1,b=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(z){for(var R=r(u);R!==null;){if(R.callback===null)n(u);else if(R.startTime<=z)n(u),R.sortIndex=R.expirationTime,t(c,R);else break;R=r(u)}}function w(z){if(b=!1,h(z),!x)if(r(c)!==null)x=!0,Xe(_);else{var R=r(u);R!==null&&Ne(w,R.startTime-z)}}function _(z,R){x=!1,b&&(b=!1,m(N),N=-1),v=!0;var I=g;try{for(h(R),p=r(c);p!==null&&(!(p.expirationTime>R)||z&&!L());){var Q=p.callback;if(typeof Q=="function"){p.callback=null,g=p.priorityLevel;var oe=Q(p.expirationTime<=R);R=e.unstable_now(),typeof oe=="function"?p.callback=oe:p===r(c)&&n(c),h(R)}else n(c);p=r(c)}if(p!==null)var ht=!0;else{var K=r(u);K!==null&&Ne(w,K.startTime-R),ht=!1}return ht}finally{p=null,g=I,v=!1}}var C=!1,j=null,N=-1,T=5,P=-1;function L(){return!(e.unstable_now()-P<T)}function ce(){if(j!==null){var z=e.unstable_now();P=z;var R=!0;try{R=j(!0,z)}finally{R?Oe():(C=!1,j=null)}}else C=!1}var Oe;if(typeof d=="function")Oe=function(){d(ce)};else if(typeof MessageChannel<"u"){var Ct=new MessageChannel,Ee=Ct.port2;Ct.port1.onmessage=ce,Oe=function(){Ee.postMessage(null)}}else Oe=function(){S(ce,0)};function Xe(z){j=z,C||(C=!0,Oe())}function Ne(z,R){N=S(function(){z(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,Xe(_))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(z){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var I=g;g=R;try{return z()}finally{g=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,R){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var I=g;g=z;try{return R()}finally{g=I}},e.unstable_scheduleCallback=function(z,R,I){var Q=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?Q+I:Q):I=Q,z){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=I+oe,z={id:f++,callback:R,priorityLevel:z,startTime:I,expirationTime:oe,sortIndex:-1},I>Q?(z.sortIndex=I,t(u,z),r(c)===null&&z===r(u)&&(b?(m(N),N=-1):b=!0,Ne(w,I-Q))):(z.sortIndex=oe,t(c,z),x||v||(x=!0,Xe(_))),z},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(z){var R=g;return function(){var I=g;g=R;try{return z.apply(this,arguments)}finally{g=I}}}})(ou);au.exports=ou;var lf=au.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cf=y,We=lf;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var su=new Set,bn={};function fr(e,t){Br(e,t),Br(e+"Capture",t)}function Br(e,t){for(bn[e]=t,e=0;e<t.length;e++)su.add(t[e])}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jo=Object.prototype.hasOwnProperty,uf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fl={},ml={};function df(e){return Jo.call(ml,e)?!0:Jo.call(fl,e)?!1:uf.test(e)?ml[e]=!0:(fl[e]=!0,!1)}function pf(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ff(e,t,r,n){if(t===null||typeof t>"u"||pf(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function De(e,t,r,n,a,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new De(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new De(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new De(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new De(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new De(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new De(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new De(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new De(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new De(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zs=/[\-:]([a-z])/g;function ei(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Zs,ei);we[t]=new De(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Zs,ei);we[t]=new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Zs,ei);we[t]=new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new De(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new De(e,1,!1,e.toLowerCase(),null,!0,!0)});function ti(e,t,r,n){var a=we.hasOwnProperty(t)?we[t]:null;(a!==null?a.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ff(t,r,a,n)&&(r=null),n||a===null?df(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,n=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Et=cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gn=Symbol.for("react.element"),wr=Symbol.for("react.portal"),br=Symbol.for("react.fragment"),ri=Symbol.for("react.strict_mode"),Yo=Symbol.for("react.profiler"),iu=Symbol.for("react.provider"),lu=Symbol.for("react.context"),ni=Symbol.for("react.forward_ref"),Xo=Symbol.for("react.suspense"),Zo=Symbol.for("react.suspense_list"),ai=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),cu=Symbol.for("react.offscreen"),hl=Symbol.iterator;function Zr(e){return e===null||typeof e!="object"?null:(e=hl&&e[hl]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Object.assign,wo;function ln(e){if(wo===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);wo=t&&t[1]||""}return`
`+wo+e}var bo=!1;function ko(e,t){if(!e||bo)return"";bo=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),o=n.stack.split(`
`),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(i!==1||l!==1)do if(i--,l--,0>l||a[i]!==o[l]){var c=`
`+a[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=l);break}}}finally{bo=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?ln(e):""}function mf(e){switch(e.tag){case 5:return ln(e.type);case 16:return ln("Lazy");case 13:return ln("Suspense");case 19:return ln("SuspenseList");case 0:case 2:case 15:return e=ko(e.type,!1),e;case 11:return e=ko(e.type.render,!1),e;case 1:return e=ko(e.type,!0),e;default:return""}}function es(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case br:return"Fragment";case wr:return"Portal";case Yo:return"Profiler";case ri:return"StrictMode";case Xo:return"Suspense";case Zo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lu:return(e.displayName||"Context")+".Consumer";case iu:return(e._context.displayName||"Context")+".Provider";case ni:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ai:return t=e.displayName||null,t!==null?t:es(e.type)||"Memo";case Tt:t=e._payload,e=e._init;try{return es(e(t))}catch{}}return null}function hf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return es(t);case 8:return t===ri?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function qt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function uu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gf(e){var t=uu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){n=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jn(e){e._valueTracker||(e._valueTracker=gf(e))}function du(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=uu(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Na(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ts(e,t){var r=t.checked;return ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function gl(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=qt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function pu(e,t){t=t.checked,t!=null&&ti(e,"checked",t,!1)}function rs(e,t){pu(e,t);var r=qt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ns(e,t.type,r):t.hasOwnProperty("defaultValue")&&ns(e,t.type,qt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xl(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function ns(e,t,r){(t!=="number"||Na(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var cn=Array.isArray;function $r(e,t,r,n){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(r=""+qt(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function as(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vl(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(E(92));if(cn(r)){if(1<r.length)throw Error(E(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:qt(r)}}function fu(e,t){var r=qt(t.value),n=qt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function yl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function mu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function os(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?mu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yn,hu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Yn=Yn||document.createElement("div"),Yn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function kn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var pn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xf=["Webkit","ms","Moz","O"];Object.keys(pn).forEach(function(e){xf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pn[t]=pn[e]})});function gu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||pn.hasOwnProperty(e)&&pn[e]?(""+t).trim():t+"px"}function xu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,a=gu(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,a):e[r]=a}}var vf=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ss(e,t){if(t){if(vf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function is(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ls=null;function oi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cs=null,Ar=null,Rr=null;function wl(e){if(e=Wn(e)){if(typeof cs!="function")throw Error(E(280));var t=e.stateNode;t&&(t=ao(t),cs(e.stateNode,e.type,t))}}function vu(e){Ar?Rr?Rr.push(e):Rr=[e]:Ar=e}function yu(){if(Ar){var e=Ar,t=Rr;if(Rr=Ar=null,wl(e),t)for(e=0;e<t.length;e++)wl(t[e])}}function wu(e,t){return e(t)}function bu(){}var jo=!1;function ku(e,t,r){if(jo)return e(t,r);jo=!0;try{return wu(e,t,r)}finally{jo=!1,(Ar!==null||Rr!==null)&&(bu(),yu())}}function jn(e,t){var r=e.stateNode;if(r===null)return null;var n=ao(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(E(231,t,typeof r));return r}var us=!1;if(kt)try{var en={};Object.defineProperty(en,"passive",{get:function(){us=!0}}),window.addEventListener("test",en,en),window.removeEventListener("test",en,en)}catch{us=!1}function yf(e,t,r,n,a,o,i,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(f){this.onError(f)}}var fn=!1,Ca=null,za=!1,ds=null,wf={onError:function(e){fn=!0,Ca=e}};function bf(e,t,r,n,a,o,i,l,c){fn=!1,Ca=null,yf.apply(wf,arguments)}function kf(e,t,r,n,a,o,i,l,c){if(bf.apply(this,arguments),fn){if(fn){var u=Ca;fn=!1,Ca=null}else throw Error(E(198));za||(za=!0,ds=u)}}function mr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function ju(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bl(e){if(mr(e)!==e)throw Error(E(188))}function jf(e){var t=e.alternate;if(!t){if(t=mr(e),t===null)throw Error(E(188));return t!==e?null:e}for(var r=e,n=t;;){var a=r.return;if(a===null)break;var o=a.alternate;if(o===null){if(n=a.return,n!==null){r=n;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===r)return bl(a),e;if(o===n)return bl(a),t;o=o.sibling}throw Error(E(188))}if(r.return!==n.return)r=a,n=o;else{for(var i=!1,l=a.child;l;){if(l===r){i=!0,r=a,n=o;break}if(l===n){i=!0,n=a,r=o;break}l=l.sibling}if(!i){for(l=o.child;l;){if(l===r){i=!0,r=o,n=a;break}if(l===n){i=!0,n=o,r=a;break}l=l.sibling}if(!i)throw Error(E(189))}}if(r.alternate!==n)throw Error(E(190))}if(r.tag!==3)throw Error(E(188));return r.stateNode.current===r?e:t}function Su(e){return e=jf(e),e!==null?_u(e):null}function _u(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_u(e);if(t!==null)return t;e=e.sibling}return null}var Eu=We.unstable_scheduleCallback,kl=We.unstable_cancelCallback,Sf=We.unstable_shouldYield,_f=We.unstable_requestPaint,le=We.unstable_now,Ef=We.unstable_getCurrentPriorityLevel,si=We.unstable_ImmediatePriority,Nu=We.unstable_UserBlockingPriority,Pa=We.unstable_NormalPriority,Nf=We.unstable_LowPriority,Cu=We.unstable_IdlePriority,eo=null,pt=null;function Cf(e){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(eo,e,void 0,(e.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:Tf,zf=Math.log,Pf=Math.LN2;function Tf(e){return e>>>=0,e===0?32:31-(zf(e)/Pf|0)|0}var Xn=64,Zn=4194304;function un(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ta(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,a=e.suspendedLanes,o=e.pingedLanes,i=r&268435455;if(i!==0){var l=i&~a;l!==0?n=un(l):(o&=i,o!==0&&(n=un(o)))}else i=r&~a,i!==0?n=un(i):o!==0&&(n=un(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&a)&&(a=n&-n,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-at(t),a=1<<r,n|=e[r],t&=~a;return n}function Df(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $f(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-at(o),l=1<<i,c=a[i];c===-1?(!(l&r)||l&n)&&(a[i]=Df(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function ps(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zu(){var e=Xn;return Xn<<=1,!(Xn&4194240)&&(Xn=64),e}function So(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Un(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-at(t),e[t]=r}function Af(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-at(r),o=1<<a;t[a]=0,n[a]=-1,e[a]=-1,r&=~o}}function ii(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-at(r),a=1<<n;a&t|e[n]&t&&(e[n]|=t),r&=~a}}var H=0;function Pu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Tu,li,Du,$u,Au,fs=!1,ea=[],It=null,Mt=null,Ot=null,Sn=new Map,_n=new Map,$t=[],Rf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jl(e,t){switch(e){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":Sn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_n.delete(t.pointerId)}}function tn(e,t,r,n,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[a]},t!==null&&(t=Wn(t),t!==null&&li(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Lf(e,t,r,n,a){switch(t){case"focusin":return It=tn(It,e,t,r,n,a),!0;case"dragenter":return Mt=tn(Mt,e,t,r,n,a),!0;case"mouseover":return Ot=tn(Ot,e,t,r,n,a),!0;case"pointerover":var o=a.pointerId;return Sn.set(o,tn(Sn.get(o)||null,e,t,r,n,a)),!0;case"gotpointercapture":return o=a.pointerId,_n.set(o,tn(_n.get(o)||null,e,t,r,n,a)),!0}return!1}function Ru(e){var t=Xt(e.target);if(t!==null){var r=mr(t);if(r!==null){if(t=r.tag,t===13){if(t=ju(r),t!==null){e.blockedOn=t,Au(e.priority,function(){Du(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ga(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=ms(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);ls=n,r.target.dispatchEvent(n),ls=null}else return t=Wn(r),t!==null&&li(t),e.blockedOn=r,!1;t.shift()}return!0}function Sl(e,t,r){ga(e)&&r.delete(t)}function If(){fs=!1,It!==null&&ga(It)&&(It=null),Mt!==null&&ga(Mt)&&(Mt=null),Ot!==null&&ga(Ot)&&(Ot=null),Sn.forEach(Sl),_n.forEach(Sl)}function rn(e,t){e.blockedOn===t&&(e.blockedOn=null,fs||(fs=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,If)))}function En(e){function t(a){return rn(a,e)}if(0<ea.length){rn(ea[0],e);for(var r=1;r<ea.length;r++){var n=ea[r];n.blockedOn===e&&(n.blockedOn=null)}}for(It!==null&&rn(It,e),Mt!==null&&rn(Mt,e),Ot!==null&&rn(Ot,e),Sn.forEach(t),_n.forEach(t),r=0;r<$t.length;r++)n=$t[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<$t.length&&(r=$t[0],r.blockedOn===null);)Ru(r),r.blockedOn===null&&$t.shift()}var Lr=Et.ReactCurrentBatchConfig,Da=!0;function Mf(e,t,r,n){var a=H,o=Lr.transition;Lr.transition=null;try{H=1,ci(e,t,r,n)}finally{H=a,Lr.transition=o}}function Of(e,t,r,n){var a=H,o=Lr.transition;Lr.transition=null;try{H=4,ci(e,t,r,n)}finally{H=a,Lr.transition=o}}function ci(e,t,r,n){if(Da){var a=ms(e,t,r,n);if(a===null)Ao(e,t,n,$a,r),jl(e,n);else if(Lf(a,e,t,r,n))n.stopPropagation();else if(jl(e,n),t&4&&-1<Rf.indexOf(e)){for(;a!==null;){var o=Wn(a);if(o!==null&&Tu(o),o=ms(e,t,r,n),o===null&&Ao(e,t,n,$a,r),o===a)break;a=o}a!==null&&n.stopPropagation()}else Ao(e,t,n,null,r)}}var $a=null;function ms(e,t,r,n){if($a=null,e=oi(n),e=Xt(e),e!==null)if(t=mr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=ju(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $a=e,null}function Lu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ef()){case si:return 1;case Nu:return 4;case Pa:case Nf:return 16;case Cu:return 536870912;default:return 16}default:return 16}}var Rt=null,ui=null,xa=null;function Iu(){if(xa)return xa;var e,t=ui,r=t.length,n,a="value"in Rt?Rt.value:Rt.textContent,o=a.length;for(e=0;e<r&&t[e]===a[e];e++);var i=r-e;for(n=1;n<=i&&t[r-n]===a[o-n];n++);return xa=a.slice(e,1<n?1-n:void 0)}function va(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ta(){return!0}function _l(){return!1}function qe(e){function t(r,n,a,o,i){this._reactName=r,this._targetInst=a,this.type=n,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ta:_l,this.isPropagationStopped=_l,this}return ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ta)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ta)},persist:function(){},isPersistent:ta}),t}var Jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},di=qe(Jr),Bn=ae({},Jr,{view:0,detail:0}),Ff=qe(Bn),_o,Eo,nn,to=ae({},Bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nn&&(nn&&e.type==="mousemove"?(_o=e.screenX-nn.screenX,Eo=e.screenY-nn.screenY):Eo=_o=0,nn=e),_o)},movementY:function(e){return"movementY"in e?e.movementY:Eo}}),El=qe(to),Uf=ae({},to,{dataTransfer:0}),Bf=qe(Uf),Wf=ae({},Bn,{relatedTarget:0}),No=qe(Wf),Vf=ae({},Jr,{animationName:0,elapsedTime:0,pseudoElement:0}),qf=qe(Vf),Hf=ae({},Jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qf=qe(Hf),Kf=ae({},Jr,{data:0}),Nl=qe(Kf),Gf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yf[e])?!!t[e]:!1}function pi(){return Xf}var Zf=ae({},Bn,{key:function(e){if(e.key){var t=Gf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=va(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pi,charCode:function(e){return e.type==="keypress"?va(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?va(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),em=qe(Zf),tm=ae({},to,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cl=qe(tm),rm=ae({},Bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pi}),nm=qe(rm),am=ae({},Jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),om=qe(am),sm=ae({},to,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),im=qe(sm),lm=[9,13,27,32],fi=kt&&"CompositionEvent"in window,mn=null;kt&&"documentMode"in document&&(mn=document.documentMode);var cm=kt&&"TextEvent"in window&&!mn,Mu=kt&&(!fi||mn&&8<mn&&11>=mn),zl=" ",Pl=!1;function Ou(e,t){switch(e){case"keyup":return lm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kr=!1;function um(e,t){switch(e){case"compositionend":return Fu(t);case"keypress":return t.which!==32?null:(Pl=!0,zl);case"textInput":return e=t.data,e===zl&&Pl?null:e;default:return null}}function dm(e,t){if(kr)return e==="compositionend"||!fi&&Ou(e,t)?(e=Iu(),xa=ui=Rt=null,kr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mu&&t.locale!=="ko"?null:t.data;default:return null}}var pm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!pm[e.type]:t==="textarea"}function Uu(e,t,r,n){vu(n),t=Aa(t,"onChange"),0<t.length&&(r=new di("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var hn=null,Nn=null;function fm(e){Xu(e,0)}function ro(e){var t=_r(e);if(du(t))return e}function mm(e,t){if(e==="change")return t}var Bu=!1;if(kt){var Co;if(kt){var zo="oninput"in document;if(!zo){var Dl=document.createElement("div");Dl.setAttribute("oninput","return;"),zo=typeof Dl.oninput=="function"}Co=zo}else Co=!1;Bu=Co&&(!document.documentMode||9<document.documentMode)}function $l(){hn&&(hn.detachEvent("onpropertychange",Wu),Nn=hn=null)}function Wu(e){if(e.propertyName==="value"&&ro(Nn)){var t=[];Uu(t,Nn,e,oi(e)),ku(fm,t)}}function hm(e,t,r){e==="focusin"?($l(),hn=t,Nn=r,hn.attachEvent("onpropertychange",Wu)):e==="focusout"&&$l()}function gm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ro(Nn)}function xm(e,t){if(e==="click")return ro(t)}function vm(e,t){if(e==="input"||e==="change")return ro(t)}function ym(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var st=typeof Object.is=="function"?Object.is:ym;function Cn(e,t){if(st(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!Jo.call(t,a)||!st(e[a],t[a]))return!1}return!0}function Al(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rl(e,t){var r=Al(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Al(r)}}function Vu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qu(){for(var e=window,t=Na();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Na(e.document)}return t}function mi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wm(e){var t=qu(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Vu(r.ownerDocument.documentElement,r)){if(n!==null&&mi(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,o=Math.min(n.start,a);n=n.end===void 0?o:Math.min(n.end,a),!e.extend&&o>n&&(a=n,n=o,o=a),a=Rl(r,o);var i=Rl(r,n);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bm=kt&&"documentMode"in document&&11>=document.documentMode,jr=null,hs=null,gn=null,gs=!1;function Ll(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;gs||jr==null||jr!==Na(n)||(n=jr,"selectionStart"in n&&mi(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),gn&&Cn(gn,n)||(gn=n,n=Aa(hs,"onSelect"),0<n.length&&(t=new di("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=jr)))}function ra(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Sr={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionend:ra("Transition","TransitionEnd")},Po={},Hu={};kt&&(Hu=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);function no(e){if(Po[e])return Po[e];if(!Sr[e])return e;var t=Sr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Hu)return Po[e]=t[r];return e}var Qu=no("animationend"),Ku=no("animationiteration"),Gu=no("animationstart"),Ju=no("transitionend"),Yu=new Map,Il="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qt(e,t){Yu.set(e,t),fr(t,[e])}for(var To=0;To<Il.length;To++){var Do=Il[To],km=Do.toLowerCase(),jm=Do[0].toUpperCase()+Do.slice(1);Qt(km,"on"+jm)}Qt(Qu,"onAnimationEnd");Qt(Ku,"onAnimationIteration");Qt(Gu,"onAnimationStart");Qt("dblclick","onDoubleClick");Qt("focusin","onFocus");Qt("focusout","onBlur");Qt(Ju,"onTransitionEnd");Br("onMouseEnter",["mouseout","mouseover"]);Br("onMouseLeave",["mouseout","mouseover"]);Br("onPointerEnter",["pointerout","pointerover"]);Br("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sm=new Set("cancel close invalid load scroll toggle".split(" ").concat(dn));function Ml(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,kf(n,t,void 0,e),e.currentTarget=null}function Xu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],a=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var i=n.length-1;0<=i;i--){var l=n[i],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&a.isPropagationStopped())break e;Ml(a,l,u),o=c}else for(i=0;i<n.length;i++){if(l=n[i],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&a.isPropagationStopped())break e;Ml(a,l,u),o=c}}}if(za)throw e=ds,za=!1,ds=null,e}function Y(e,t){var r=t[bs];r===void 0&&(r=t[bs]=new Set);var n=e+"__bubble";r.has(n)||(Zu(t,e,2,!1),r.add(n))}function $o(e,t,r){var n=0;t&&(n|=4),Zu(r,e,n,t)}var na="_reactListening"+Math.random().toString(36).slice(2);function zn(e){if(!e[na]){e[na]=!0,su.forEach(function(r){r!=="selectionchange"&&(Sm.has(r)||$o(r,!1,e),$o(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[na]||(t[na]=!0,$o("selectionchange",!1,t))}}function Zu(e,t,r,n){switch(Lu(t)){case 1:var a=Mf;break;case 4:a=Of;break;default:a=ci}r=a.bind(null,t,r,e),a=void 0,!us||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Ao(e,t,r,n,a){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var l=n.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(i===4)for(i=n.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;i=i.return}for(;l!==null;){if(i=Xt(l),i===null)return;if(c=i.tag,c===5||c===6){n=o=i;continue e}l=l.parentNode}}n=n.return}ku(function(){var u=o,f=oi(r),p=[];e:{var g=Yu.get(e);if(g!==void 0){var v=di,x=e;switch(e){case"keypress":if(va(r)===0)break e;case"keydown":case"keyup":v=em;break;case"focusin":x="focus",v=No;break;case"focusout":x="blur",v=No;break;case"beforeblur":case"afterblur":v=No;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=El;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Bf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=nm;break;case Qu:case Ku:case Gu:v=qf;break;case Ju:v=om;break;case"scroll":v=Ff;break;case"wheel":v=im;break;case"copy":case"cut":case"paste":v=Qf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Cl}var b=(t&4)!==0,S=!b&&e==="scroll",m=b?g!==null?g+"Capture":null:g;b=[];for(var d=u,h;d!==null;){h=d;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,m!==null&&(w=jn(d,m),w!=null&&b.push(Pn(d,w,h)))),S)break;d=d.return}0<b.length&&(g=new v(g,x,null,r,f),p.push({event:g,listeners:b}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&r!==ls&&(x=r.relatedTarget||r.fromElement)&&(Xt(x)||x[jt]))break e;if((v||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,v?(x=r.relatedTarget||r.toElement,v=u,x=x?Xt(x):null,x!==null&&(S=mr(x),x!==S||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=u),v!==x)){if(b=El,w="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(b=Cl,w="onPointerLeave",m="onPointerEnter",d="pointer"),S=v==null?g:_r(v),h=x==null?g:_r(x),g=new b(w,d+"leave",v,r,f),g.target=S,g.relatedTarget=h,w=null,Xt(f)===u&&(b=new b(m,d+"enter",x,r,f),b.target=h,b.relatedTarget=S,w=b),S=w,v&&x)t:{for(b=v,m=x,d=0,h=b;h;h=xr(h))d++;for(h=0,w=m;w;w=xr(w))h++;for(;0<d-h;)b=xr(b),d--;for(;0<h-d;)m=xr(m),h--;for(;d--;){if(b===m||m!==null&&b===m.alternate)break t;b=xr(b),m=xr(m)}b=null}else b=null;v!==null&&Ol(p,g,v,b,!1),x!==null&&S!==null&&Ol(p,S,x,b,!0)}}e:{if(g=u?_r(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var _=mm;else if(Tl(g))if(Bu)_=vm;else{_=gm;var C=hm}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(_=xm);if(_&&(_=_(e,u))){Uu(p,_,r,f);break e}C&&C(e,g,u),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&ns(g,"number",g.value)}switch(C=u?_r(u):window,e){case"focusin":(Tl(C)||C.contentEditable==="true")&&(jr=C,hs=u,gn=null);break;case"focusout":gn=hs=jr=null;break;case"mousedown":gs=!0;break;case"contextmenu":case"mouseup":case"dragend":gs=!1,Ll(p,r,f);break;case"selectionchange":if(bm)break;case"keydown":case"keyup":Ll(p,r,f)}var j;if(fi)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else kr?Ou(e,r)&&(N="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(N="onCompositionStart");N&&(Mu&&r.locale!=="ko"&&(kr||N!=="onCompositionStart"?N==="onCompositionEnd"&&kr&&(j=Iu()):(Rt=f,ui="value"in Rt?Rt.value:Rt.textContent,kr=!0)),C=Aa(u,N),0<C.length&&(N=new Nl(N,e,null,r,f),p.push({event:N,listeners:C}),j?N.data=j:(j=Fu(r),j!==null&&(N.data=j)))),(j=cm?um(e,r):dm(e,r))&&(u=Aa(u,"onBeforeInput"),0<u.length&&(f=new Nl("onBeforeInput","beforeinput",null,r,f),p.push({event:f,listeners:u}),f.data=j))}Xu(p,t)})}function Pn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Aa(e,t){for(var r=t+"Capture",n=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=jn(e,r),o!=null&&n.unshift(Pn(e,o,a)),o=jn(e,t),o!=null&&n.push(Pn(e,o,a))),e=e.return}return n}function xr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ol(e,t,r,n,a){for(var o=t._reactName,i=[];r!==null&&r!==n;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===n)break;l.tag===5&&u!==null&&(l=u,a?(c=jn(r,o),c!=null&&i.unshift(Pn(r,c,l))):a||(c=jn(r,o),c!=null&&i.push(Pn(r,c,l)))),r=r.return}i.length!==0&&e.push({event:t,listeners:i})}var _m=/\r\n?/g,Em=/\u0000|\uFFFD/g;function Fl(e){return(typeof e=="string"?e:""+e).replace(_m,`
`).replace(Em,"")}function aa(e,t,r){if(t=Fl(t),Fl(e)!==t&&r)throw Error(E(425))}function Ra(){}var xs=null,vs=null;function ys(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ws=typeof setTimeout=="function"?setTimeout:void 0,Nm=typeof clearTimeout=="function"?clearTimeout:void 0,Ul=typeof Promise=="function"?Promise:void 0,Cm=typeof queueMicrotask=="function"?queueMicrotask:typeof Ul<"u"?function(e){return Ul.resolve(null).then(e).catch(zm)}:ws;function zm(e){setTimeout(function(){throw e})}function Ro(e,t){var r=t,n=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(n===0){e.removeChild(a),En(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=a}while(r);En(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Bl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),ut="__reactFiber$"+Yr,Tn="__reactProps$"+Yr,jt="__reactContainer$"+Yr,bs="__reactEvents$"+Yr,Pm="__reactListeners$"+Yr,Tm="__reactHandles$"+Yr;function Xt(e){var t=e[ut];if(t)return t;for(var r=e.parentNode;r;){if(t=r[jt]||r[ut]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Bl(e);e!==null;){if(r=e[ut])return r;e=Bl(e)}return t}e=r,r=e.parentNode}return null}function Wn(e){return e=e[ut]||e[jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _r(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function ao(e){return e[Tn]||null}var ks=[],Er=-1;function Kt(e){return{current:e}}function X(e){0>Er||(e.current=ks[Er],ks[Er]=null,Er--)}function J(e,t){Er++,ks[Er]=e.current,e.current=t}var Ht={},_e=Kt(Ht),Le=Kt(!1),sr=Ht;function Wr(e,t){var r=e.type.contextTypes;if(!r)return Ht;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in r)a[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ie(e){return e=e.childContextTypes,e!=null}function La(){X(Le),X(_e)}function Wl(e,t,r){if(_e.current!==Ht)throw Error(E(168));J(_e,t),J(Le,r)}function ed(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var a in n)if(!(a in t))throw Error(E(108,hf(e)||"Unknown",a));return ae({},r,n)}function Ia(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ht,sr=_e.current,J(_e,e),J(Le,Le.current),!0}function Vl(e,t,r){var n=e.stateNode;if(!n)throw Error(E(169));r?(e=ed(e,t,sr),n.__reactInternalMemoizedMergedChildContext=e,X(Le),X(_e),J(_e,e)):X(Le),J(Le,r)}var xt=null,oo=!1,Lo=!1;function td(e){xt===null?xt=[e]:xt.push(e)}function Dm(e){oo=!0,td(e)}function Gt(){if(!Lo&&xt!==null){Lo=!0;var e=0,t=H;try{var r=xt;for(H=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}xt=null,oo=!1}catch(a){throw xt!==null&&(xt=xt.slice(e+1)),Eu(si,Gt),a}finally{H=t,Lo=!1}}return null}var Nr=[],Cr=0,Ma=null,Oa=0,He=[],Qe=0,ir=null,yt=1,wt="";function Jt(e,t){Nr[Cr++]=Oa,Nr[Cr++]=Ma,Ma=e,Oa=t}function rd(e,t,r){He[Qe++]=yt,He[Qe++]=wt,He[Qe++]=ir,ir=e;var n=yt;e=wt;var a=32-at(n)-1;n&=~(1<<a),r+=1;var o=32-at(t)+a;if(30<o){var i=a-a%5;o=(n&(1<<i)-1).toString(32),n>>=i,a-=i,yt=1<<32-at(t)+a|r<<a|n,wt=o+e}else yt=1<<o|r<<a|n,wt=e}function hi(e){e.return!==null&&(Jt(e,1),rd(e,1,0))}function gi(e){for(;e===Ma;)Ma=Nr[--Cr],Nr[Cr]=null,Oa=Nr[--Cr],Nr[Cr]=null;for(;e===ir;)ir=He[--Qe],He[Qe]=null,wt=He[--Qe],He[Qe]=null,yt=He[--Qe],He[Qe]=null}var Be=null,Ue=null,te=!1,rt=null;function nd(e,t){var r=Ke(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function ql(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Be=e,Ue=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Be=e,Ue=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=ir!==null?{id:yt,overflow:wt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Ke(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Be=e,Ue=null,!0):!1;default:return!1}}function js(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ss(e){if(te){var t=Ue;if(t){var r=t;if(!ql(e,t)){if(js(e))throw Error(E(418));t=Ft(r.nextSibling);var n=Be;t&&ql(e,t)?nd(n,r):(e.flags=e.flags&-4097|2,te=!1,Be=e)}}else{if(js(e))throw Error(E(418));e.flags=e.flags&-4097|2,te=!1,Be=e}}}function Hl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Be=e}function oa(e){if(e!==Be)return!1;if(!te)return Hl(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ys(e.type,e.memoizedProps)),t&&(t=Ue)){if(js(e))throw ad(),Error(E(418));for(;t;)nd(e,t),t=Ft(t.nextSibling)}if(Hl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Ue=Ft(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Ue=null}}else Ue=Be?Ft(e.stateNode.nextSibling):null;return!0}function ad(){for(var e=Ue;e;)e=Ft(e.nextSibling)}function Vr(){Ue=Be=null,te=!1}function xi(e){rt===null?rt=[e]:rt.push(e)}var $m=Et.ReactCurrentBatchConfig;function an(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(E(309));var n=r.stateNode}if(!n)throw Error(E(147,e));var a=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var l=a.refs;i===null?delete l[o]:l[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!r._owner)throw Error(E(290,e))}return e}function sa(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ql(e){var t=e._init;return t(e._payload)}function od(e){function t(m,d){if(e){var h=m.deletions;h===null?(m.deletions=[d],m.flags|=16):h.push(d)}}function r(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function n(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function a(m,d){return m=Vt(m,d),m.index=0,m.sibling=null,m}function o(m,d,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<d?(m.flags|=2,d):h):(m.flags|=2,d)):(m.flags|=1048576,d)}function i(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,d,h,w){return d===null||d.tag!==6?(d=Wo(h,m.mode,w),d.return=m,d):(d=a(d,h),d.return=m,d)}function c(m,d,h,w){var _=h.type;return _===br?f(m,d,h.props.children,w,h.key):d!==null&&(d.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Tt&&Ql(_)===d.type)?(w=a(d,h.props),w.ref=an(m,d,h),w.return=m,w):(w=_a(h.type,h.key,h.props,null,m.mode,w),w.ref=an(m,d,h),w.return=m,w)}function u(m,d,h,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Vo(h,m.mode,w),d.return=m,d):(d=a(d,h.children||[]),d.return=m,d)}function f(m,d,h,w,_){return d===null||d.tag!==7?(d=nr(h,m.mode,w,_),d.return=m,d):(d=a(d,h),d.return=m,d)}function p(m,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Wo(""+d,m.mode,h),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Gn:return h=_a(d.type,d.key,d.props,null,m.mode,h),h.ref=an(m,null,d),h.return=m,h;case wr:return d=Vo(d,m.mode,h),d.return=m,d;case Tt:var w=d._init;return p(m,w(d._payload),h)}if(cn(d)||Zr(d))return d=nr(d,m.mode,h,null),d.return=m,d;sa(m,d)}return null}function g(m,d,h,w){var _=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return _!==null?null:l(m,d,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Gn:return h.key===_?c(m,d,h,w):null;case wr:return h.key===_?u(m,d,h,w):null;case Tt:return _=h._init,g(m,d,_(h._payload),w)}if(cn(h)||Zr(h))return _!==null?null:f(m,d,h,w,null);sa(m,h)}return null}function v(m,d,h,w,_){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(h)||null,l(d,m,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Gn:return m=m.get(w.key===null?h:w.key)||null,c(d,m,w,_);case wr:return m=m.get(w.key===null?h:w.key)||null,u(d,m,w,_);case Tt:var C=w._init;return v(m,d,h,C(w._payload),_)}if(cn(w)||Zr(w))return m=m.get(h)||null,f(d,m,w,_,null);sa(d,w)}return null}function x(m,d,h,w){for(var _=null,C=null,j=d,N=d=0,T=null;j!==null&&N<h.length;N++){j.index>N?(T=j,j=null):T=j.sibling;var P=g(m,j,h[N],w);if(P===null){j===null&&(j=T);break}e&&j&&P.alternate===null&&t(m,j),d=o(P,d,N),C===null?_=P:C.sibling=P,C=P,j=T}if(N===h.length)return r(m,j),te&&Jt(m,N),_;if(j===null){for(;N<h.length;N++)j=p(m,h[N],w),j!==null&&(d=o(j,d,N),C===null?_=j:C.sibling=j,C=j);return te&&Jt(m,N),_}for(j=n(m,j);N<h.length;N++)T=v(j,m,N,h[N],w),T!==null&&(e&&T.alternate!==null&&j.delete(T.key===null?N:T.key),d=o(T,d,N),C===null?_=T:C.sibling=T,C=T);return e&&j.forEach(function(L){return t(m,L)}),te&&Jt(m,N),_}function b(m,d,h,w){var _=Zr(h);if(typeof _!="function")throw Error(E(150));if(h=_.call(h),h==null)throw Error(E(151));for(var C=_=null,j=d,N=d=0,T=null,P=h.next();j!==null&&!P.done;N++,P=h.next()){j.index>N?(T=j,j=null):T=j.sibling;var L=g(m,j,P.value,w);if(L===null){j===null&&(j=T);break}e&&j&&L.alternate===null&&t(m,j),d=o(L,d,N),C===null?_=L:C.sibling=L,C=L,j=T}if(P.done)return r(m,j),te&&Jt(m,N),_;if(j===null){for(;!P.done;N++,P=h.next())P=p(m,P.value,w),P!==null&&(d=o(P,d,N),C===null?_=P:C.sibling=P,C=P);return te&&Jt(m,N),_}for(j=n(m,j);!P.done;N++,P=h.next())P=v(j,m,N,P.value,w),P!==null&&(e&&P.alternate!==null&&j.delete(P.key===null?N:P.key),d=o(P,d,N),C===null?_=P:C.sibling=P,C=P);return e&&j.forEach(function(ce){return t(m,ce)}),te&&Jt(m,N),_}function S(m,d,h,w){if(typeof h=="object"&&h!==null&&h.type===br&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Gn:e:{for(var _=h.key,C=d;C!==null;){if(C.key===_){if(_=h.type,_===br){if(C.tag===7){r(m,C.sibling),d=a(C,h.props.children),d.return=m,m=d;break e}}else if(C.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Tt&&Ql(_)===C.type){r(m,C.sibling),d=a(C,h.props),d.ref=an(m,C,h),d.return=m,m=d;break e}r(m,C);break}else t(m,C);C=C.sibling}h.type===br?(d=nr(h.props.children,m.mode,w,h.key),d.return=m,m=d):(w=_a(h.type,h.key,h.props,null,m.mode,w),w.ref=an(m,d,h),w.return=m,m=w)}return i(m);case wr:e:{for(C=h.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){r(m,d.sibling),d=a(d,h.children||[]),d.return=m,m=d;break e}else{r(m,d);break}else t(m,d);d=d.sibling}d=Vo(h,m.mode,w),d.return=m,m=d}return i(m);case Tt:return C=h._init,S(m,d,C(h._payload),w)}if(cn(h))return x(m,d,h,w);if(Zr(h))return b(m,d,h,w);sa(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(r(m,d.sibling),d=a(d,h),d.return=m,m=d):(r(m,d),d=Wo(h,m.mode,w),d.return=m,m=d),i(m)):r(m,d)}return S}var qr=od(!0),sd=od(!1),Fa=Kt(null),Ua=null,zr=null,vi=null;function yi(){vi=zr=Ua=null}function wi(e){var t=Fa.current;X(Fa),e._currentValue=t}function _s(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Ir(e,t){Ua=e,vi=zr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ae=!0),e.firstContext=null)}function Je(e){var t=e._currentValue;if(vi!==e)if(e={context:e,memoizedValue:t,next:null},zr===null){if(Ua===null)throw Error(E(308));zr=e,Ua.dependencies={lanes:0,firstContext:e}}else zr=zr.next=e;return t}var Zt=null;function bi(e){Zt===null?Zt=[e]:Zt.push(e)}function id(e,t,r,n){var a=t.interleaved;return a===null?(r.next=r,bi(t)):(r.next=a.next,a.next=r),t.interleaved=r,St(e,n)}function St(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Dt=!1;function ki(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ld(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,W&2){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,St(e,r)}return a=n.interleaved,a===null?(t.next=t,bi(n)):(t.next=a.next,a.next=t),n.interleaved=t,St(e,r)}function ya(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ii(e,r)}}function Kl(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var a=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?a=o=i:o=o.next=i,r=r.next}while(r!==null);o===null?a=o=t:o=o.next=t}else a=o=t;r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ba(e,t,r,n){var a=e.updateQueue;Dt=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,u=c.next;c.next=null,i===null?o=u:i.next=u,i=c;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==i&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=c))}if(o!==null){var p=a.baseState;i=0,f=u=c=null,l=o;do{var g=l.lane,v=l.eventTime;if((n&g)===g){f!==null&&(f=f.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,b=l;switch(g=t,v=r,b.tag){case 1:if(x=b.payload,typeof x=="function"){p=x.call(v,p,g);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=b.payload,g=typeof x=="function"?x.call(v,p,g):x,g==null)break e;p=ae({},p,g);break e;case 2:Dt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=a.effects,g===null?a.effects=[l]:g.push(l))}else v={eventTime:v,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=v,c=p):f=f.next=v,i|=g;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;g=l,l=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(!0);if(f===null&&(c=p),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=f,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);cr|=i,e.lanes=i,e.memoizedState=p}}function Gl(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],a=n.callback;if(a!==null){if(n.callback=null,n=r,typeof a!="function")throw Error(E(191,a));a.call(n)}}}var Vn={},ft=Kt(Vn),Dn=Kt(Vn),$n=Kt(Vn);function er(e){if(e===Vn)throw Error(E(174));return e}function ji(e,t){switch(J($n,t),J(Dn,e),J(ft,Vn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:os(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=os(t,e)}X(ft),J(ft,t)}function Hr(){X(ft),X(Dn),X($n)}function cd(e){er($n.current);var t=er(ft.current),r=os(t,e.type);t!==r&&(J(Dn,e),J(ft,r))}function Si(e){Dn.current===e&&(X(ft),X(Dn))}var re=Kt(0);function Wa(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Io=[];function _i(){for(var e=0;e<Io.length;e++)Io[e]._workInProgressVersionPrimary=null;Io.length=0}var wa=Et.ReactCurrentDispatcher,Mo=Et.ReactCurrentBatchConfig,lr=0,ne=null,pe=null,me=null,Va=!1,xn=!1,An=0,Am=0;function be(){throw Error(E(321))}function Ei(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!st(e[r],t[r]))return!1;return!0}function Ni(e,t,r,n,a,o){if(lr=o,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wa.current=e===null||e.memoizedState===null?Mm:Om,e=r(n,a),xn){o=0;do{if(xn=!1,An=0,25<=o)throw Error(E(301));o+=1,me=pe=null,t.updateQueue=null,wa.current=Fm,e=r(n,a)}while(xn)}if(wa.current=qa,t=pe!==null&&pe.next!==null,lr=0,me=pe=ne=null,Va=!1,t)throw Error(E(300));return e}function Ci(){var e=An!==0;return An=0,e}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?ne.memoizedState=me=e:me=me.next=e,me}function Ye(){if(pe===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=me===null?ne.memoizedState:me.next;if(t!==null)me=t,pe=e;else{if(e===null)throw Error(E(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},me===null?ne.memoizedState=me=e:me=me.next=e}return me}function Rn(e,t){return typeof t=="function"?t(e):t}function Oo(e){var t=Ye(),r=t.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=e;var n=pe,a=n.baseQueue,o=r.pending;if(o!==null){if(a!==null){var i=a.next;a.next=o.next,o.next=i}n.baseQueue=a=o,r.pending=null}if(a!==null){o=a.next,n=n.baseState;var l=i=null,c=null,u=o;do{var f=u.lane;if((lr&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,i=n):c=c.next=p,ne.lanes|=f,cr|=f}u=u.next}while(u!==null&&u!==o);c===null?i=n:c.next=l,st(n,t.memoizedState)||(Ae=!0),t.memoizedState=n,t.baseState=i,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){a=e;do o=a.lane,ne.lanes|=o,cr|=o,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Fo(e){var t=Ye(),r=t.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=e;var n=r.dispatch,a=r.pending,o=t.memoizedState;if(a!==null){r.pending=null;var i=a=a.next;do o=e(o,i.action),i=i.next;while(i!==a);st(o,t.memoizedState)||(Ae=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function ud(){}function dd(e,t){var r=ne,n=Ye(),a=t(),o=!st(n.memoizedState,a);if(o&&(n.memoizedState=a,Ae=!0),n=n.queue,zi(md.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||me!==null&&me.memoizedState.tag&1){if(r.flags|=2048,Ln(9,fd.bind(null,r,n,a,t),void 0,null),he===null)throw Error(E(349));lr&30||pd(r,t,a)}return a}function pd(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function fd(e,t,r,n){t.value=r,t.getSnapshot=n,hd(t)&&gd(e)}function md(e,t,r){return r(function(){hd(t)&&gd(e)})}function hd(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!st(e,r)}catch{return!0}}function gd(e){var t=St(e,1);t!==null&&ot(t,e,1,-1)}function Jl(e){var t=ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rn,lastRenderedState:e},t.queue=e,e=e.dispatch=Im.bind(null,ne,e),[t.memoizedState,e]}function Ln(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function xd(){return Ye().memoizedState}function ba(e,t,r,n){var a=ct();ne.flags|=e,a.memoizedState=Ln(1|t,r,void 0,n===void 0?null:n)}function so(e,t,r,n){var a=Ye();n=n===void 0?null:n;var o=void 0;if(pe!==null){var i=pe.memoizedState;if(o=i.destroy,n!==null&&Ei(n,i.deps)){a.memoizedState=Ln(t,r,o,n);return}}ne.flags|=e,a.memoizedState=Ln(1|t,r,o,n)}function Yl(e,t){return ba(8390656,8,e,t)}function zi(e,t){return so(2048,8,e,t)}function vd(e,t){return so(4,2,e,t)}function yd(e,t){return so(4,4,e,t)}function wd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bd(e,t,r){return r=r!=null?r.concat([e]):null,so(4,4,wd.bind(null,t,e),r)}function Pi(){}function kd(e,t){var r=Ye();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Ei(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function jd(e,t){var r=Ye();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Ei(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Sd(e,t,r){return lr&21?(st(r,t)||(r=zu(),ne.lanes|=r,cr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ae=!0),e.memoizedState=r)}function Rm(e,t){var r=H;H=r!==0&&4>r?r:4,e(!0);var n=Mo.transition;Mo.transition={};try{e(!1),t()}finally{H=r,Mo.transition=n}}function _d(){return Ye().memoizedState}function Lm(e,t,r){var n=Wt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Ed(e))Nd(t,r);else if(r=id(e,t,r,n),r!==null){var a=Pe();ot(r,e,n,a),Cd(r,t,n)}}function Im(e,t,r){var n=Wt(e),a={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ed(e))Nd(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,l=o(i,r);if(a.hasEagerState=!0,a.eagerState=l,st(l,i)){var c=t.interleaved;c===null?(a.next=a,bi(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}r=id(e,t,a,n),r!==null&&(a=Pe(),ot(r,e,n,a),Cd(r,t,n))}}function Ed(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function Nd(e,t){xn=Va=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Cd(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ii(e,r)}}var qa={readContext:Je,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},Mm={readContext:Je,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:Yl,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ba(4194308,4,wd.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ba(4194308,4,e,t)},useInsertionEffect:function(e,t){return ba(4,2,e,t)},useMemo:function(e,t){var r=ct();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=ct();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Lm.bind(null,ne,e),[n.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:Jl,useDebugValue:Pi,useDeferredValue:function(e){return ct().memoizedState=e},useTransition:function(){var e=Jl(!1),t=e[0];return e=Rm.bind(null,e[1]),ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ne,a=ct();if(te){if(r===void 0)throw Error(E(407));r=r()}else{if(r=t(),he===null)throw Error(E(349));lr&30||pd(n,t,r)}a.memoizedState=r;var o={value:r,getSnapshot:t};return a.queue=o,Yl(md.bind(null,n,o,e),[e]),n.flags|=2048,Ln(9,fd.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=ct(),t=he.identifierPrefix;if(te){var r=wt,n=yt;r=(n&~(1<<32-at(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=An++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Am++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Om={readContext:Je,useCallback:kd,useContext:Je,useEffect:zi,useImperativeHandle:bd,useInsertionEffect:vd,useLayoutEffect:yd,useMemo:jd,useReducer:Oo,useRef:xd,useState:function(){return Oo(Rn)},useDebugValue:Pi,useDeferredValue:function(e){var t=Ye();return Sd(t,pe.memoizedState,e)},useTransition:function(){var e=Oo(Rn)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:ud,useSyncExternalStore:dd,useId:_d,unstable_isNewReconciler:!1},Fm={readContext:Je,useCallback:kd,useContext:Je,useEffect:zi,useImperativeHandle:bd,useInsertionEffect:vd,useLayoutEffect:yd,useMemo:jd,useReducer:Fo,useRef:xd,useState:function(){return Fo(Rn)},useDebugValue:Pi,useDeferredValue:function(e){var t=Ye();return pe===null?t.memoizedState=e:Sd(t,pe.memoizedState,e)},useTransition:function(){var e=Fo(Rn)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:ud,useSyncExternalStore:dd,useId:_d,unstable_isNewReconciler:!1};function et(e,t){if(e&&e.defaultProps){t=ae({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Es(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:ae({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var io={isMounted:function(e){return(e=e._reactInternals)?mr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Pe(),a=Wt(e),o=bt(n,a);o.payload=t,r!=null&&(o.callback=r),t=Ut(e,o,a),t!==null&&(ot(t,e,a,n),ya(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Pe(),a=Wt(e),o=bt(n,a);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=Ut(e,o,a),t!==null&&(ot(t,e,a,n),ya(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Pe(),n=Wt(e),a=bt(r,n);a.tag=2,t!=null&&(a.callback=t),t=Ut(e,a,n),t!==null&&(ot(t,e,n,r),ya(t,e,n))}};function Xl(e,t,r,n,a,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,i):t.prototype&&t.prototype.isPureReactComponent?!Cn(r,n)||!Cn(a,o):!0}function zd(e,t,r){var n=!1,a=Ht,o=t.contextType;return typeof o=="object"&&o!==null?o=Je(o):(a=Ie(t)?sr:_e.current,n=t.contextTypes,o=(n=n!=null)?Wr(e,a):Ht),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=io,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function Zl(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&io.enqueueReplaceState(t,t.state,null)}function Ns(e,t,r,n){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},ki(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=Je(o):(o=Ie(t)?sr:_e.current,a.context=Wr(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Es(e,t,o,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&io.enqueueReplaceState(a,a.state,null),Ba(e,r,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Qr(e,t){try{var r="",n=t;do r+=mf(n),n=n.return;while(n);var a=r}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function Uo(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Cs(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Um=typeof WeakMap=="function"?WeakMap:Map;function Pd(e,t,r){r=bt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Qa||(Qa=!0,Ms=n),Cs(e,t)},r}function Td(e,t,r){r=bt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=t.value;r.payload=function(){return n(a)},r.callback=function(){Cs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){Cs(e,t),typeof n!="function"&&(Bt===null?Bt=new Set([this]):Bt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),r}function ec(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Um;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(r)||(a.add(r),e=th.bind(null,e,t,r),t.then(e,e))}function tc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function rc(e,t,r,n,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=bt(-1,1),t.tag=2,Ut(r,t,1))),r.lanes|=1),e)}var Bm=Et.ReactCurrentOwner,Ae=!1;function ze(e,t,r,n){t.child=e===null?sd(t,null,r,n):qr(t,e.child,r,n)}function nc(e,t,r,n,a){r=r.render;var o=t.ref;return Ir(t,a),n=Ni(e,t,r,n,o,a),r=Ci(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,_t(e,t,a)):(te&&r&&hi(t),t.flags|=1,ze(e,t,n,a),t.child)}function ac(e,t,r,n,a){if(e===null){var o=r.type;return typeof o=="function"&&!Mi(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,Dd(e,t,o,n,a)):(e=_a(r.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&a)){var i=o.memoizedProps;if(r=r.compare,r=r!==null?r:Cn,r(i,n)&&e.ref===t.ref)return _t(e,t,a)}return t.flags|=1,e=Vt(o,n),e.ref=t.ref,e.return=t,t.child=e}function Dd(e,t,r,n,a){if(e!==null){var o=e.memoizedProps;if(Cn(o,n)&&e.ref===t.ref)if(Ae=!1,t.pendingProps=n=o,(e.lanes&a)!==0)e.flags&131072&&(Ae=!0);else return t.lanes=e.lanes,_t(e,t,a)}return zs(e,t,r,n,a)}function $d(e,t,r){var n=t.pendingProps,a=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(Tr,Fe),Fe|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(Tr,Fe),Fe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,J(Tr,Fe),Fe|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,J(Tr,Fe),Fe|=n;return ze(e,t,a,r),t.child}function Ad(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function zs(e,t,r,n,a){var o=Ie(r)?sr:_e.current;return o=Wr(t,o),Ir(t,a),r=Ni(e,t,r,n,o,a),n=Ci(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,_t(e,t,a)):(te&&n&&hi(t),t.flags|=1,ze(e,t,r,a),t.child)}function oc(e,t,r,n,a){if(Ie(r)){var o=!0;Ia(t)}else o=!1;if(Ir(t,a),t.stateNode===null)ka(e,t),zd(t,r,n),Ns(t,r,n,a),n=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var c=i.context,u=r.contextType;typeof u=="object"&&u!==null?u=Je(u):(u=Ie(r)?sr:_e.current,u=Wr(t,u));var f=r.getDerivedStateFromProps,p=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==n||c!==u)&&Zl(t,i,n,u),Dt=!1;var g=t.memoizedState;i.state=g,Ba(t,n,i,a),c=t.memoizedState,l!==n||g!==c||Le.current||Dt?(typeof f=="function"&&(Es(t,r,f,n),c=t.memoizedState),(l=Dt||Xl(t,r,l,n,g,c,u))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),i.props=n,i.state=c,i.context=u,n=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,ld(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:et(t.type,l),i.props=u,p=t.pendingProps,g=i.context,c=r.contextType,typeof c=="object"&&c!==null?c=Je(c):(c=Ie(r)?sr:_e.current,c=Wr(t,c));var v=r.getDerivedStateFromProps;(f=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==p||g!==c)&&Zl(t,i,n,c),Dt=!1,g=t.memoizedState,i.state=g,Ba(t,n,i,a);var x=t.memoizedState;l!==p||g!==x||Le.current||Dt?(typeof v=="function"&&(Es(t,r,v,n),x=t.memoizedState),(u=Dt||Xl(t,r,u,n,g,x,c)||!1)?(f||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,x,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,x,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=x),i.props=n,i.state=x,i.context=c,n=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return Ps(e,t,r,n,o,a)}function Ps(e,t,r,n,a,o){Ad(e,t);var i=(t.flags&128)!==0;if(!n&&!i)return a&&Vl(t,r,!1),_t(e,t,o);n=t.stateNode,Bm.current=t;var l=i&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&i?(t.child=qr(t,e.child,null,o),t.child=qr(t,null,l,o)):ze(e,t,l,o),t.memoizedState=n.state,a&&Vl(t,r,!0),t.child}function Rd(e){var t=e.stateNode;t.pendingContext?Wl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wl(e,t.context,!1),ji(e,t.containerInfo)}function sc(e,t,r,n,a){return Vr(),xi(a),t.flags|=256,ze(e,t,r,n),t.child}var Ts={dehydrated:null,treeContext:null,retryLane:0};function Ds(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ld(e,t,r){var n=t.pendingProps,a=re.current,o=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),J(re,a&1),e===null)return Ss(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=n.children,e=n.fallback,o?(n=t.mode,o=t.child,i={mode:"hidden",children:i},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=uo(i,n,0,null),e=nr(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ds(r),t.memoizedState=Ts,e):Ti(t,i));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Wm(e,t,i,n,l,a,r);if(o){o=n.fallback,i=t.mode,a=e.child,l=a.sibling;var c={mode:"hidden",children:n.children};return!(i&1)&&t.child!==a?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=Vt(a,c),n.subtreeFlags=a.subtreeFlags&14680064),l!==null?o=Vt(l,o):(o=nr(o,i,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,i=e.child.memoizedState,i=i===null?Ds(r):{baseLanes:i.baseLanes|r,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~r,t.memoizedState=Ts,n}return o=e.child,e=o.sibling,n=Vt(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Ti(e,t){return t=uo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ia(e,t,r,n){return n!==null&&xi(n),qr(t,e.child,null,r),e=Ti(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wm(e,t,r,n,a,o,i){if(r)return t.flags&256?(t.flags&=-257,n=Uo(Error(E(422))),ia(e,t,i,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,a=t.mode,n=uo({mode:"visible",children:n.children},a,0,null),o=nr(o,a,i,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&qr(t,e.child,null,i),t.child.memoizedState=Ds(i),t.memoizedState=Ts,o);if(!(t.mode&1))return ia(e,t,i,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var l=n.dgst;return n=l,o=Error(E(419)),n=Uo(o,n,void 0),ia(e,t,i,n)}if(l=(i&e.childLanes)!==0,Ae||l){if(n=he,n!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(n.suspendedLanes|i)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,St(e,a),ot(n,e,a,-1))}return Ii(),n=Uo(Error(E(421))),ia(e,t,i,n)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=rh.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Ue=Ft(a.nextSibling),Be=t,te=!0,rt=null,e!==null&&(He[Qe++]=yt,He[Qe++]=wt,He[Qe++]=ir,yt=e.id,wt=e.overflow,ir=t),t=Ti(t,n.children),t.flags|=4096,t)}function ic(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),_s(e.return,t,r)}function Bo(e,t,r,n,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=a)}function Id(e,t,r){var n=t.pendingProps,a=n.revealOrder,o=n.tail;if(ze(e,t,n.children,r),n=re.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ic(e,r,t);else if(e.tag===19)ic(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(J(re,n),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&Wa(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Bo(t,!1,a,r,o);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Wa(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Bo(t,!0,r,null,o);break;case"together":Bo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ka(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function _t(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),cr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,r=Vt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Vt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Vm(e,t,r){switch(t.tag){case 3:Rd(t),Vr();break;case 5:cd(t);break;case 1:Ie(t.type)&&Ia(t);break;case 4:ji(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,a=t.memoizedProps.value;J(Fa,n._currentValue),n._currentValue=a;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(J(re,re.current&1),t.flags|=128,null):r&t.child.childLanes?Ld(e,t,r):(J(re,re.current&1),e=_t(e,t,r),e!==null?e.sibling:null);J(re,re.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Id(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),J(re,re.current),n)break;return null;case 22:case 23:return t.lanes=0,$d(e,t,r)}return _t(e,t,r)}var Md,$s,Od,Fd;Md=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};$s=function(){};Od=function(e,t,r,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,er(ft.current);var o=null;switch(r){case"input":a=ts(e,a),n=ts(e,n),o=[];break;case"select":a=ae({},a,{value:void 0}),n=ae({},n,{value:void 0}),o=[];break;case"textarea":a=as(e,a),n=as(e,n),o=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Ra)}ss(r,n);var i;r=null;for(u in a)if(!n.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(i in l)l.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bn.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var c=n[u];if(l=a!=null?a[u]:void 0,n.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in c)c.hasOwnProperty(i)&&l[i]!==c[i]&&(r||(r={}),r[i]=c[i])}else r||(o||(o=[]),o.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Y("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}r&&(o=o||[]).push("style",r);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Fd=function(e,t,r,n){r!==n&&(t.flags|=4)};function on(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function qm(e,t,r){var n=t.pendingProps;switch(gi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(t),null;case 1:return Ie(t.type)&&La(),ke(t),null;case 3:return n=t.stateNode,Hr(),X(Le),X(_e),_i(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(oa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rt!==null&&(Us(rt),rt=null))),$s(e,t),ke(t),null;case 5:Si(t);var a=er($n.current);if(r=t.type,e!==null&&t.stateNode!=null)Od(e,t,r,n,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(E(166));return ke(t),null}if(e=er(ft.current),oa(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[ut]=t,n[Tn]=o,e=(t.mode&1)!==0,r){case"dialog":Y("cancel",n),Y("close",n);break;case"iframe":case"object":case"embed":Y("load",n);break;case"video":case"audio":for(a=0;a<dn.length;a++)Y(dn[a],n);break;case"source":Y("error",n);break;case"img":case"image":case"link":Y("error",n),Y("load",n);break;case"details":Y("toggle",n);break;case"input":gl(n,o),Y("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},Y("invalid",n);break;case"textarea":vl(n,o),Y("invalid",n)}ss(r,o),a=null;for(var i in o)if(o.hasOwnProperty(i)){var l=o[i];i==="children"?typeof l=="string"?n.textContent!==l&&(o.suppressHydrationWarning!==!0&&aa(n.textContent,l,e),a=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&aa(n.textContent,l,e),a=["children",""+l]):bn.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&Y("scroll",n)}switch(r){case"input":Jn(n),xl(n,o,!0);break;case"textarea":Jn(n),yl(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=Ra)}n=a,t.updateQueue=n,n!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=mu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=i.createElement(r,{is:n.is}):(e=i.createElement(r),r==="select"&&(i=e,n.multiple?i.multiple=!0:n.size&&(i.size=n.size))):e=i.createElementNS(e,r),e[ut]=t,e[Tn]=n,Md(e,t,!1,!1),t.stateNode=e;e:{switch(i=is(r,n),r){case"dialog":Y("cancel",e),Y("close",e),a=n;break;case"iframe":case"object":case"embed":Y("load",e),a=n;break;case"video":case"audio":for(a=0;a<dn.length;a++)Y(dn[a],e);a=n;break;case"source":Y("error",e),a=n;break;case"img":case"image":case"link":Y("error",e),Y("load",e),a=n;break;case"details":Y("toggle",e),a=n;break;case"input":gl(e,n),a=ts(e,n),Y("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=ae({},n,{value:void 0}),Y("invalid",e);break;case"textarea":vl(e,n),a=as(e,n),Y("invalid",e);break;default:a=n}ss(r,a),l=a;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?xu(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&hu(e,c)):o==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&kn(e,c):typeof c=="number"&&kn(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(bn.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Y("scroll",e):c!=null&&ti(e,o,c,i))}switch(r){case"input":Jn(e),xl(e,n,!1);break;case"textarea":Jn(e),yl(e);break;case"option":n.value!=null&&e.setAttribute("value",""+qt(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?$r(e,!!n.multiple,o,!1):n.defaultValue!=null&&$r(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ra)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ke(t),null;case 6:if(e&&t.stateNode!=null)Fd(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(E(166));if(r=er($n.current),er(ft.current),oa(t)){if(n=t.stateNode,r=t.memoizedProps,n[ut]=t,(o=n.nodeValue!==r)&&(e=Be,e!==null))switch(e.tag){case 3:aa(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&aa(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[ut]=t,t.stateNode=n}return ke(t),null;case 13:if(X(re),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Ue!==null&&t.mode&1&&!(t.flags&128))ad(),Vr(),t.flags|=98560,o=!1;else if(o=oa(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[ut]=t}else Vr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ke(t),o=!1}else rt!==null&&(Us(rt),rt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||re.current&1?fe===0&&(fe=3):Ii())),t.updateQueue!==null&&(t.flags|=4),ke(t),null);case 4:return Hr(),$s(e,t),e===null&&zn(t.stateNode.containerInfo),ke(t),null;case 10:return wi(t.type._context),ke(t),null;case 17:return Ie(t.type)&&La(),ke(t),null;case 19:if(X(re),o=t.memoizedState,o===null)return ke(t),null;if(n=(t.flags&128)!==0,i=o.rendering,i===null)if(n)on(o,!1);else{if(fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Wa(e),i!==null){for(t.flags|=128,on(o,!1),n=i.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return J(re,re.current&1|2),t.child}e=e.sibling}o.tail!==null&&le()>Kr&&(t.flags|=128,n=!0,on(o,!1),t.lanes=4194304)}else{if(!n)if(e=Wa(i),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),on(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!te)return ke(t),null}else 2*le()-o.renderingStartTime>Kr&&r!==1073741824&&(t.flags|=128,n=!0,on(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(r=o.last,r!==null?r.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=le(),t.sibling=null,r=re.current,J(re,n?r&1|2:r&1),t):(ke(t),null);case 22:case 23:return Li(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Fe&1073741824&&(ke(t),t.subtreeFlags&6&&(t.flags|=8192)):ke(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function Hm(e,t){switch(gi(t),t.tag){case 1:return Ie(t.type)&&La(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hr(),X(Le),X(_e),_i(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Si(t),null;case 13:if(X(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Vr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(re),null;case 4:return Hr(),null;case 10:return wi(t.type._context),null;case 22:case 23:return Li(),null;case 24:return null;default:return null}}var la=!1,Se=!1,Qm=typeof WeakSet=="function"?WeakSet:Set,D=null;function Pr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){se(e,t,n)}else r.current=null}function As(e,t,r){try{r()}catch(n){se(e,t,n)}}var lc=!1;function Km(e,t){if(xs=Da,e=qu(),mi(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var a=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var i=0,l=-1,c=-1,u=0,f=0,p=e,g=null;t:for(;;){for(var v;p!==r||a!==0&&p.nodeType!==3||(l=i+a),p!==o||n!==0&&p.nodeType!==3||(c=i+n),p.nodeType===3&&(i+=p.nodeValue.length),(v=p.firstChild)!==null;)g=p,p=v;for(;;){if(p===e)break t;if(g===r&&++u===a&&(l=i),g===o&&++f===n&&(c=i),(v=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=v}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(vs={focusedElem:e,selectionRange:r},Da=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var b=x.memoizedProps,S=x.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?b:et(t.type,b),S);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){se(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return x=lc,lc=!1,x}function vn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&As(t,r,o)}a=a.next}while(a!==n)}}function lo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Rs(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Ud(e){var t=e.alternate;t!==null&&(e.alternate=null,Ud(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ut],delete t[Tn],delete t[bs],delete t[Pm],delete t[Tm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bd(e){return e.tag===5||e.tag===3||e.tag===4}function cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ls(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ra));else if(n!==4&&(e=e.child,e!==null))for(Ls(e,t,r),e=e.sibling;e!==null;)Ls(e,t,r),e=e.sibling}function Is(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Is(e,t,r),e=e.sibling;e!==null;)Is(e,t,r),e=e.sibling}var ve=null,tt=!1;function Pt(e,t,r){for(r=r.child;r!==null;)Wd(e,t,r),r=r.sibling}function Wd(e,t,r){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(eo,r)}catch{}switch(r.tag){case 5:Se||Pr(r,t);case 6:var n=ve,a=tt;ve=null,Pt(e,t,r),ve=n,tt=a,ve!==null&&(tt?(e=ve,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ve.removeChild(r.stateNode));break;case 18:ve!==null&&(tt?(e=ve,r=r.stateNode,e.nodeType===8?Ro(e.parentNode,r):e.nodeType===1&&Ro(e,r),En(e)):Ro(ve,r.stateNode));break;case 4:n=ve,a=tt,ve=r.stateNode.containerInfo,tt=!0,Pt(e,t,r),ve=n,tt=a;break;case 0:case 11:case 14:case 15:if(!Se&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var o=a,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&As(r,t,i),a=a.next}while(a!==n)}Pt(e,t,r);break;case 1:if(!Se&&(Pr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){se(r,t,l)}Pt(e,t,r);break;case 21:Pt(e,t,r);break;case 22:r.mode&1?(Se=(n=Se)||r.memoizedState!==null,Pt(e,t,r),Se=n):Pt(e,t,r);break;default:Pt(e,t,r)}}function uc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Qm),t.forEach(function(n){var a=nh.bind(null,e,n);r.has(n)||(r.add(n),n.then(a,a))})}}function Ze(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var a=r[n];try{var o=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:ve=l.stateNode,tt=!1;break e;case 3:ve=l.stateNode.containerInfo,tt=!0;break e;case 4:ve=l.stateNode.containerInfo,tt=!0;break e}l=l.return}if(ve===null)throw Error(E(160));Wd(o,i,a),ve=null,tt=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){se(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vd(t,e),t=t.sibling}function Vd(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ze(t,e),lt(e),n&4){try{vn(3,e,e.return),lo(3,e)}catch(b){se(e,e.return,b)}try{vn(5,e,e.return)}catch(b){se(e,e.return,b)}}break;case 1:Ze(t,e),lt(e),n&512&&r!==null&&Pr(r,r.return);break;case 5:if(Ze(t,e),lt(e),n&512&&r!==null&&Pr(r,r.return),e.flags&32){var a=e.stateNode;try{kn(a,"")}catch(b){se(e,e.return,b)}}if(n&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,i=r!==null?r.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&pu(a,o),is(l,i);var u=is(l,o);for(i=0;i<c.length;i+=2){var f=c[i],p=c[i+1];f==="style"?xu(a,p):f==="dangerouslySetInnerHTML"?hu(a,p):f==="children"?kn(a,p):ti(a,f,p,u)}switch(l){case"input":rs(a,o);break;case"textarea":fu(a,o);break;case"select":var g=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?$r(a,!!o.multiple,v,!1):g!==!!o.multiple&&(o.defaultValue!=null?$r(a,!!o.multiple,o.defaultValue,!0):$r(a,!!o.multiple,o.multiple?[]:"",!1))}a[Tn]=o}catch(b){se(e,e.return,b)}}break;case 6:if(Ze(t,e),lt(e),n&4){if(e.stateNode===null)throw Error(E(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(b){se(e,e.return,b)}}break;case 3:if(Ze(t,e),lt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{En(t.containerInfo)}catch(b){se(e,e.return,b)}break;case 4:Ze(t,e),lt(e);break;case 13:Ze(t,e),lt(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(Ai=le())),n&4&&uc(e);break;case 22:if(f=r!==null&&r.memoizedState!==null,e.mode&1?(Se=(u=Se)||f,Ze(t,e),Se=u):Ze(t,e),lt(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(D=e,f=e.child;f!==null;){for(p=D=f;D!==null;){switch(g=D,v=g.child,g.tag){case 0:case 11:case 14:case 15:vn(4,g,g.return);break;case 1:Pr(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){n=g,r=g.return;try{t=n,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(b){se(n,r,b)}}break;case 5:Pr(g,g.return);break;case 22:if(g.memoizedState!==null){pc(p);continue}}v!==null?(v.return=g,D=v):pc(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{a=p.stateNode,u?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,c=p.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=gu("display",i))}catch(b){se(e,e.return,b)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(b){se(e,e.return,b)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ze(t,e),lt(e),n&4&&uc(e);break;case 21:break;default:Ze(t,e),lt(e)}}function lt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Bd(r)){var n=r;break e}r=r.return}throw Error(E(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(kn(a,""),n.flags&=-33);var o=cc(e);Is(e,o,a);break;case 3:case 4:var i=n.stateNode.containerInfo,l=cc(e);Ls(e,l,i);break;default:throw Error(E(161))}}catch(c){se(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gm(e,t,r){D=e,qd(e)}function qd(e,t,r){for(var n=(e.mode&1)!==0;D!==null;){var a=D,o=a.child;if(a.tag===22&&n){var i=a.memoizedState!==null||la;if(!i){var l=a.alternate,c=l!==null&&l.memoizedState!==null||Se;l=la;var u=Se;if(la=i,(Se=c)&&!u)for(D=a;D!==null;)i=D,c=i.child,i.tag===22&&i.memoizedState!==null?fc(a):c!==null?(c.return=i,D=c):fc(a);for(;o!==null;)D=o,qd(o),o=o.sibling;D=a,la=l,Se=u}dc(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,D=o):dc(e)}}function dc(e){for(;D!==null;){var t=D;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Se||lo(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Se)if(r===null)n.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:et(t.type,r.memoizedProps);n.componentDidUpdate(a,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Gl(t,o,n);break;case 3:var i=t.updateQueue;if(i!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Gl(t,i,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&En(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Se||t.flags&512&&Rs(t)}catch(g){se(t,t.return,g)}}if(t===e){D=null;break}if(r=t.sibling,r!==null){r.return=t.return,D=r;break}D=t.return}}function pc(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var r=t.sibling;if(r!==null){r.return=t.return,D=r;break}D=t.return}}function fc(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{lo(4,t)}catch(c){se(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var a=t.return;try{n.componentDidMount()}catch(c){se(t,a,c)}}var o=t.return;try{Rs(t)}catch(c){se(t,o,c)}break;case 5:var i=t.return;try{Rs(t)}catch(c){se(t,i,c)}}}catch(c){se(t,t.return,c)}if(t===e){D=null;break}var l=t.sibling;if(l!==null){l.return=t.return,D=l;break}D=t.return}}var Jm=Math.ceil,Ha=Et.ReactCurrentDispatcher,Di=Et.ReactCurrentOwner,Ge=Et.ReactCurrentBatchConfig,W=0,he=null,ue=null,ye=0,Fe=0,Tr=Kt(0),fe=0,In=null,cr=0,co=0,$i=0,yn=null,$e=null,Ai=0,Kr=1/0,gt=null,Qa=!1,Ms=null,Bt=null,ca=!1,Lt=null,Ka=0,wn=0,Os=null,ja=-1,Sa=0;function Pe(){return W&6?le():ja!==-1?ja:ja=le()}function Wt(e){return e.mode&1?W&2&&ye!==0?ye&-ye:$m.transition!==null?(Sa===0&&(Sa=zu()),Sa):(e=H,e!==0||(e=window.event,e=e===void 0?16:Lu(e.type)),e):1}function ot(e,t,r,n){if(50<wn)throw wn=0,Os=null,Error(E(185));Un(e,r,n),(!(W&2)||e!==he)&&(e===he&&(!(W&2)&&(co|=r),fe===4&&At(e,ye)),Me(e,n),r===1&&W===0&&!(t.mode&1)&&(Kr=le()+500,oo&&Gt()))}function Me(e,t){var r=e.callbackNode;$f(e,t);var n=Ta(e,e===he?ye:0);if(n===0)r!==null&&kl(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&kl(r),t===1)e.tag===0?Dm(mc.bind(null,e)):td(mc.bind(null,e)),Cm(function(){!(W&6)&&Gt()}),r=null;else{switch(Pu(n)){case 1:r=si;break;case 4:r=Nu;break;case 16:r=Pa;break;case 536870912:r=Cu;break;default:r=Pa}r=Zd(r,Hd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Hd(e,t){if(ja=-1,Sa=0,W&6)throw Error(E(327));var r=e.callbackNode;if(Mr()&&e.callbackNode!==r)return null;var n=Ta(e,e===he?ye:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Ga(e,n);else{t=n;var a=W;W|=2;var o=Kd();(he!==e||ye!==t)&&(gt=null,Kr=le()+500,rr(e,t));do try{Zm();break}catch(l){Qd(e,l)}while(!0);yi(),Ha.current=o,W=a,ue!==null?t=0:(he=null,ye=0,t=fe)}if(t!==0){if(t===2&&(a=ps(e),a!==0&&(n=a,t=Fs(e,a))),t===1)throw r=In,rr(e,0),At(e,n),Me(e,le()),r;if(t===6)At(e,n);else{if(a=e.current.alternate,!(n&30)&&!Ym(a)&&(t=Ga(e,n),t===2&&(o=ps(e),o!==0&&(n=o,t=Fs(e,o))),t===1))throw r=In,rr(e,0),At(e,n),Me(e,le()),r;switch(e.finishedWork=a,e.finishedLanes=n,t){case 0:case 1:throw Error(E(345));case 2:Yt(e,$e,gt);break;case 3:if(At(e,n),(n&130023424)===n&&(t=Ai+500-le(),10<t)){if(Ta(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){Pe(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ws(Yt.bind(null,e,$e,gt),t);break}Yt(e,$e,gt);break;case 4:if(At(e,n),(n&4194240)===n)break;for(t=e.eventTimes,a=-1;0<n;){var i=31-at(n);o=1<<i,i=t[i],i>a&&(a=i),n&=~o}if(n=a,n=le()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Jm(n/1960))-n,10<n){e.timeoutHandle=ws(Yt.bind(null,e,$e,gt),n);break}Yt(e,$e,gt);break;case 5:Yt(e,$e,gt);break;default:throw Error(E(329))}}}return Me(e,le()),e.callbackNode===r?Hd.bind(null,e):null}function Fs(e,t){var r=yn;return e.current.memoizedState.isDehydrated&&(rr(e,t).flags|=256),e=Ga(e,t),e!==2&&(t=$e,$e=r,t!==null&&Us(t)),e}function Us(e){$e===null?$e=e:$e.push.apply($e,e)}function Ym(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var a=r[n],o=a.getSnapshot;a=a.value;try{if(!st(o(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function At(e,t){for(t&=~$i,t&=~co,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-at(t),n=1<<r;e[r]=-1,t&=~n}}function mc(e){if(W&6)throw Error(E(327));Mr();var t=Ta(e,0);if(!(t&1))return Me(e,le()),null;var r=Ga(e,t);if(e.tag!==0&&r===2){var n=ps(e);n!==0&&(t=n,r=Fs(e,n))}if(r===1)throw r=In,rr(e,0),At(e,t),Me(e,le()),r;if(r===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yt(e,$e,gt),Me(e,le()),null}function Ri(e,t){var r=W;W|=1;try{return e(t)}finally{W=r,W===0&&(Kr=le()+500,oo&&Gt())}}function ur(e){Lt!==null&&Lt.tag===0&&!(W&6)&&Mr();var t=W;W|=1;var r=Ge.transition,n=H;try{if(Ge.transition=null,H=1,e)return e()}finally{H=n,Ge.transition=r,W=t,!(W&6)&&Gt()}}function Li(){Fe=Tr.current,X(Tr)}function rr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Nm(r)),ue!==null)for(r=ue.return;r!==null;){var n=r;switch(gi(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&La();break;case 3:Hr(),X(Le),X(_e),_i();break;case 5:Si(n);break;case 4:Hr();break;case 13:X(re);break;case 19:X(re);break;case 10:wi(n.type._context);break;case 22:case 23:Li()}r=r.return}if(he=e,ue=e=Vt(e.current,null),ye=Fe=t,fe=0,In=null,$i=co=cr=0,$e=yn=null,Zt!==null){for(t=0;t<Zt.length;t++)if(r=Zt[t],n=r.interleaved,n!==null){r.interleaved=null;var a=n.next,o=r.pending;if(o!==null){var i=o.next;o.next=a,n.next=i}r.pending=n}Zt=null}return e}function Qd(e,t){do{var r=ue;try{if(yi(),wa.current=qa,Va){for(var n=ne.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}Va=!1}if(lr=0,me=pe=ne=null,xn=!1,An=0,Di.current=null,r===null||r.return===null){fe=1,In=t,ue=null;break}e:{var o=e,i=r.return,l=r,c=t;if(t=ye,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=tc(i);if(v!==null){v.flags&=-257,rc(v,i,l,o,t),v.mode&1&&ec(o,u,t),t=v,c=u;var x=t.updateQueue;if(x===null){var b=new Set;b.add(c),t.updateQueue=b}else x.add(c);break e}else{if(!(t&1)){ec(o,u,t),Ii();break e}c=Error(E(426))}}else if(te&&l.mode&1){var S=tc(i);if(S!==null){!(S.flags&65536)&&(S.flags|=256),rc(S,i,l,o,t),xi(Qr(c,l));break e}}o=c=Qr(c,l),fe!==4&&(fe=2),yn===null?yn=[o]:yn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=Pd(o,c,t);Kl(o,m);break e;case 1:l=c;var d=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Bt===null||!Bt.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Td(o,l,t);Kl(o,w);break e}}o=o.return}while(o!==null)}Jd(r)}catch(_){t=_,ue===r&&r!==null&&(ue=r=r.return);continue}break}while(!0)}function Kd(){var e=Ha.current;return Ha.current=qa,e===null?qa:e}function Ii(){(fe===0||fe===3||fe===2)&&(fe=4),he===null||!(cr&268435455)&&!(co&268435455)||At(he,ye)}function Ga(e,t){var r=W;W|=2;var n=Kd();(he!==e||ye!==t)&&(gt=null,rr(e,t));do try{Xm();break}catch(a){Qd(e,a)}while(!0);if(yi(),W=r,Ha.current=n,ue!==null)throw Error(E(261));return he=null,ye=0,fe}function Xm(){for(;ue!==null;)Gd(ue)}function Zm(){for(;ue!==null&&!Sf();)Gd(ue)}function Gd(e){var t=Xd(e.alternate,e,Fe);e.memoizedProps=e.pendingProps,t===null?Jd(e):ue=t,Di.current=null}function Jd(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Hm(r,t),r!==null){r.flags&=32767,ue=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{fe=6,ue=null;return}}else if(r=qm(r,t,Fe),r!==null){ue=r;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);fe===0&&(fe=5)}function Yt(e,t,r){var n=H,a=Ge.transition;try{Ge.transition=null,H=1,eh(e,t,r,n)}finally{Ge.transition=a,H=n}return null}function eh(e,t,r,n){do Mr();while(Lt!==null);if(W&6)throw Error(E(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(Af(e,o),e===he&&(ue=he=null,ye=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ca||(ca=!0,Zd(Pa,function(){return Mr(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Ge.transition,Ge.transition=null;var i=H;H=1;var l=W;W|=4,Di.current=null,Km(e,r),Vd(r,e),wm(vs),Da=!!xs,vs=xs=null,e.current=r,Gm(r),_f(),W=l,H=i,Ge.transition=o}else e.current=r;if(ca&&(ca=!1,Lt=e,Ka=a),o=e.pendingLanes,o===0&&(Bt=null),Cf(r.stateNode),Me(e,le()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],n(a.value,{componentStack:a.stack,digest:a.digest});if(Qa)throw Qa=!1,e=Ms,Ms=null,e;return Ka&1&&e.tag!==0&&Mr(),o=e.pendingLanes,o&1?e===Os?wn++:(wn=0,Os=e):wn=0,Gt(),null}function Mr(){if(Lt!==null){var e=Pu(Ka),t=Ge.transition,r=H;try{if(Ge.transition=null,H=16>e?16:e,Lt===null)var n=!1;else{if(e=Lt,Lt=null,Ka=0,W&6)throw Error(E(331));var a=W;for(W|=4,D=e.current;D!==null;){var o=D,i=o.child;if(D.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(D=u;D!==null;){var f=D;switch(f.tag){case 0:case 11:case 15:vn(8,f,o)}var p=f.child;if(p!==null)p.return=f,D=p;else for(;D!==null;){f=D;var g=f.sibling,v=f.return;if(Ud(f),f===u){D=null;break}if(g!==null){g.return=v,D=g;break}D=v}}}var x=o.alternate;if(x!==null){var b=x.child;if(b!==null){x.child=null;do{var S=b.sibling;b.sibling=null,b=S}while(b!==null)}}D=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,D=i;else e:for(;D!==null;){if(o=D,o.flags&2048)switch(o.tag){case 0:case 11:case 15:vn(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,D=m;break e}D=o.return}}var d=e.current;for(D=d;D!==null;){i=D;var h=i.child;if(i.subtreeFlags&2064&&h!==null)h.return=i,D=h;else e:for(i=d;D!==null;){if(l=D,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:lo(9,l)}}catch(_){se(l,l.return,_)}if(l===i){D=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,D=w;break e}D=l.return}}if(W=a,Gt(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(eo,e)}catch{}n=!0}return n}finally{H=r,Ge.transition=t}}return!1}function hc(e,t,r){t=Qr(r,t),t=Pd(e,t,1),e=Ut(e,t,1),t=Pe(),e!==null&&(Un(e,1,t),Me(e,t))}function se(e,t,r){if(e.tag===3)hc(e,e,r);else for(;t!==null;){if(t.tag===3){hc(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Bt===null||!Bt.has(n))){e=Qr(r,e),e=Td(t,e,1),t=Ut(t,e,1),e=Pe(),t!==null&&(Un(t,1,e),Me(t,e));break}}t=t.return}}function th(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&r,he===e&&(ye&r)===r&&(fe===4||fe===3&&(ye&130023424)===ye&&500>le()-Ai?rr(e,0):$i|=r),Me(e,t)}function Yd(e,t){t===0&&(e.mode&1?(t=Zn,Zn<<=1,!(Zn&130023424)&&(Zn=4194304)):t=1);var r=Pe();e=St(e,t),e!==null&&(Un(e,t,r),Me(e,r))}function rh(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Yd(e,r)}function nh(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(E(314))}n!==null&&n.delete(t),Yd(e,r)}var Xd;Xd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)Ae=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Ae=!1,Vm(e,t,r);Ae=!!(e.flags&131072)}else Ae=!1,te&&t.flags&1048576&&rd(t,Oa,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;ka(e,t),e=t.pendingProps;var a=Wr(t,_e.current);Ir(t,r),a=Ni(null,t,n,e,a,r);var o=Ci();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ie(n)?(o=!0,Ia(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ki(t),a.updater=io,t.stateNode=a,a._reactInternals=t,Ns(t,n,e,r),t=Ps(null,t,n,!0,o,r)):(t.tag=0,te&&o&&hi(t),ze(null,t,a,r),t=t.child),t;case 16:n=t.elementType;e:{switch(ka(e,t),e=t.pendingProps,a=n._init,n=a(n._payload),t.type=n,a=t.tag=oh(n),e=et(n,e),a){case 0:t=zs(null,t,n,e,r);break e;case 1:t=oc(null,t,n,e,r);break e;case 11:t=nc(null,t,n,e,r);break e;case 14:t=ac(null,t,n,et(n.type,e),r);break e}throw Error(E(306,n,""))}return t;case 0:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:et(n,a),zs(e,t,n,a,r);case 1:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:et(n,a),oc(e,t,n,a,r);case 3:e:{if(Rd(t),e===null)throw Error(E(387));n=t.pendingProps,o=t.memoizedState,a=o.element,ld(e,t),Ba(t,n,null,r);var i=t.memoizedState;if(n=i.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Qr(Error(E(423)),t),t=sc(e,t,n,r,a);break e}else if(n!==a){a=Qr(Error(E(424)),t),t=sc(e,t,n,r,a);break e}else for(Ue=Ft(t.stateNode.containerInfo.firstChild),Be=t,te=!0,rt=null,r=sd(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Vr(),n===a){t=_t(e,t,r);break e}ze(e,t,n,r)}t=t.child}return t;case 5:return cd(t),e===null&&Ss(t),n=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,i=a.children,ys(n,a)?i=null:o!==null&&ys(n,o)&&(t.flags|=32),Ad(e,t),ze(e,t,i,r),t.child;case 6:return e===null&&Ss(t),null;case 13:return Ld(e,t,r);case 4:return ji(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=qr(t,null,n,r):ze(e,t,n,r),t.child;case 11:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:et(n,a),nc(e,t,n,a,r);case 7:return ze(e,t,t.pendingProps,r),t.child;case 8:return ze(e,t,t.pendingProps.children,r),t.child;case 12:return ze(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,a=t.pendingProps,o=t.memoizedProps,i=a.value,J(Fa,n._currentValue),n._currentValue=i,o!==null)if(st(o.value,i)){if(o.children===a.children&&!Le.current){t=_t(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){i=o.child;for(var c=l.firstContext;c!==null;){if(c.context===n){if(o.tag===1){c=bt(-1,r&-r),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}o.lanes|=r,c=o.alternate,c!==null&&(c.lanes|=r),_s(o.return,r,t),l.lanes|=r;break}c=c.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(E(341));i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),_s(i,r,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ze(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,n=t.pendingProps.children,Ir(t,r),a=Je(a),n=n(a),t.flags|=1,ze(e,t,n,r),t.child;case 14:return n=t.type,a=et(n,t.pendingProps),a=et(n.type,a),ac(e,t,n,a,r);case 15:return Dd(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:et(n,a),ka(e,t),t.tag=1,Ie(n)?(e=!0,Ia(t)):e=!1,Ir(t,r),zd(t,n,a),Ns(t,n,a,r),Ps(null,t,n,!0,e,r);case 19:return Id(e,t,r);case 22:return $d(e,t,r)}throw Error(E(156,t.tag))};function Zd(e,t){return Eu(e,t)}function ah(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(e,t,r,n){return new ah(e,t,r,n)}function Mi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oh(e){if(typeof e=="function")return Mi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ni)return 11;if(e===ai)return 14}return 2}function Vt(e,t){var r=e.alternate;return r===null?(r=Ke(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function _a(e,t,r,n,a,o){var i=2;if(n=e,typeof e=="function")Mi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case br:return nr(r.children,a,o,t);case ri:i=8,a|=8;break;case Yo:return e=Ke(12,r,t,a|2),e.elementType=Yo,e.lanes=o,e;case Xo:return e=Ke(13,r,t,a),e.elementType=Xo,e.lanes=o,e;case Zo:return e=Ke(19,r,t,a),e.elementType=Zo,e.lanes=o,e;case cu:return uo(r,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case iu:i=10;break e;case lu:i=9;break e;case ni:i=11;break e;case ai:i=14;break e;case Tt:i=16,n=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Ke(i,r,t,a),t.elementType=e,t.type=n,t.lanes=o,t}function nr(e,t,r,n){return e=Ke(7,e,n,t),e.lanes=r,e}function uo(e,t,r,n){return e=Ke(22,e,n,t),e.elementType=cu,e.lanes=r,e.stateNode={isHidden:!1},e}function Wo(e,t,r){return e=Ke(6,e,null,t),e.lanes=r,e}function Vo(e,t,r){return t=Ke(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sh(e,t,r,n,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=So(0),this.expirationTimes=So(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=So(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Oi(e,t,r,n,a,o,i,l,c){return e=new sh(e,t,r,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ke(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ki(o),e}function ih(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function ep(e){if(!e)return Ht;e=e._reactInternals;e:{if(mr(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ie(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var r=e.type;if(Ie(r))return ed(e,r,t)}return t}function tp(e,t,r,n,a,o,i,l,c){return e=Oi(r,n,!0,e,a,o,i,l,c),e.context=ep(null),r=e.current,n=Pe(),a=Wt(r),o=bt(n,a),o.callback=t??null,Ut(r,o,a),e.current.lanes=a,Un(e,a,n),Me(e,n),e}function po(e,t,r,n){var a=t.current,o=Pe(),i=Wt(a);return r=ep(r),t.context===null?t.context=r:t.pendingContext=r,t=bt(o,i),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Ut(a,t,i),e!==null&&(ot(e,a,i,o),ya(e,a,i)),i}function Ja(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Fi(e,t){gc(e,t),(e=e.alternate)&&gc(e,t)}function lh(){return null}var rp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ui(e){this._internalRoot=e}fo.prototype.render=Ui.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));po(e,t,null,null)};fo.prototype.unmount=Ui.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ur(function(){po(null,e,null,null)}),t[jt]=null}};function fo(e){this._internalRoot=e}fo.prototype.unstable_scheduleHydration=function(e){if(e){var t=$u();e={blockedOn:null,target:e,priority:t};for(var r=0;r<$t.length&&t!==0&&t<$t[r].priority;r++);$t.splice(r,0,e),r===0&&Ru(e)}};function Bi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function mo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xc(){}function ch(e,t,r,n,a){if(a){if(typeof n=="function"){var o=n;n=function(){var u=Ja(i);o.call(u)}}var i=tp(t,n,e,0,null,!1,!1,"",xc);return e._reactRootContainer=i,e[jt]=i.current,zn(e.nodeType===8?e.parentNode:e),ur(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var l=n;n=function(){var u=Ja(c);l.call(u)}}var c=Oi(e,0,!1,null,null,!1,!1,"",xc);return e._reactRootContainer=c,e[jt]=c.current,zn(e.nodeType===8?e.parentNode:e),ur(function(){po(t,c,r,n)}),c}function ho(e,t,r,n,a){var o=r._reactRootContainer;if(o){var i=o;if(typeof a=="function"){var l=a;a=function(){var c=Ja(i);l.call(c)}}po(t,i,e,a)}else i=ch(r,t,e,a,n);return Ja(i)}Tu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=un(t.pendingLanes);r!==0&&(ii(t,r|1),Me(t,le()),!(W&6)&&(Kr=le()+500,Gt()))}break;case 13:ur(function(){var n=St(e,1);if(n!==null){var a=Pe();ot(n,e,1,a)}}),Fi(e,1)}};li=function(e){if(e.tag===13){var t=St(e,134217728);if(t!==null){var r=Pe();ot(t,e,134217728,r)}Fi(e,134217728)}};Du=function(e){if(e.tag===13){var t=Wt(e),r=St(e,t);if(r!==null){var n=Pe();ot(r,e,t,n)}Fi(e,t)}};$u=function(){return H};Au=function(e,t){var r=H;try{return H=e,t()}finally{H=r}};cs=function(e,t,r){switch(t){case"input":if(rs(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var a=ao(n);if(!a)throw Error(E(90));du(n),rs(n,a)}}}break;case"textarea":fu(e,r);break;case"select":t=r.value,t!=null&&$r(e,!!r.multiple,t,!1)}};wu=Ri;bu=ur;var uh={usingClientEntryPoint:!1,Events:[Wn,_r,ao,vu,yu,Ri]},sn={findFiberByHostInstance:Xt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dh={bundleType:sn.bundleType,version:sn.version,rendererPackageName:sn.rendererPackageName,rendererConfig:sn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Su(e),e===null?null:e.stateNode},findFiberByHostInstance:sn.findFiberByHostInstance||lh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ua.isDisabled&&ua.supportsFiber)try{eo=ua.inject(dh),pt=ua}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uh;Ve.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bi(t))throw Error(E(200));return ih(e,t,null,r)};Ve.createRoot=function(e,t){if(!Bi(e))throw Error(E(299));var r=!1,n="",a=rp;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Oi(e,1,!1,null,null,r,!1,n,a),e[jt]=t.current,zn(e.nodeType===8?e.parentNode:e),new Ui(t)};Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Su(t),e=e===null?null:e.stateNode,e};Ve.flushSync=function(e){return ur(e)};Ve.hydrate=function(e,t,r){if(!mo(t))throw Error(E(200));return ho(null,e,t,!0,r)};Ve.hydrateRoot=function(e,t,r){if(!Bi(e))throw Error(E(405));var n=r!=null&&r.hydratedSources||null,a=!1,o="",i=rp;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),t=tp(t,null,e,1,r??null,a,!1,o,i),e[jt]=t.current,zn(e),n)for(e=0;e<n.length;e++)r=n[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new fo(t)};Ve.render=function(e,t,r){if(!mo(t))throw Error(E(200));return ho(null,e,t,!1,r)};Ve.unmountComponentAtNode=function(e){if(!mo(e))throw Error(E(40));return e._reactRootContainer?(ur(function(){ho(null,null,e,!1,function(){e._reactRootContainer=null,e[jt]=null})}),!0):!1};Ve.unstable_batchedUpdates=Ri;Ve.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!mo(r))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return ho(e,t,r,!1,n)};Ve.version="18.3.1-next-f1338f8080-20240426";function np(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(np)}catch(e){console.error(e)}}np(),nu.exports=Ve;var ph=nu.exports,vc=ph;Go.createRoot=vc.createRoot,Go.hydrateRoot=vc.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mn(){return Mn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Mn.apply(null,arguments)}var tr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(tr||(tr={}));const yc="popstate";function fh(e){e===void 0&&(e={});function t(n,a){let{pathname:o,search:i,hash:l}=n.location;return Bs("",{pathname:o,search:i,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:ap(a)}return gh(t,r,null,e)}function mt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function mh(e,t){{typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function hh(){return Math.random().toString(36).substr(2,8)}function wc(e,t){return{usr:e.state,key:e.key,idx:t}}function Bs(e,t,r,n){return r===void 0&&(r=null),Mn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?go(t):t,{state:r,key:t&&t.key||n||hh()})}function ap(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function go(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function gh(e,t,r,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:o=!1}=n,i=a.history,l=tr.Pop,c=null,u=f();u==null&&(u=0,i.replaceState(Mn({},i.state,{idx:u}),""));function f(){return(i.state||{idx:null}).idx}function p(){l=tr.Pop;let S=f(),m=S==null?null:S-u;u=S,c&&c({action:l,location:b.location,delta:m})}function g(S,m){l=tr.Push;let d=Bs(b.location,S,m);u=f()+1;let h=wc(d,u),w=b.createHref(d);try{i.pushState(h,"",w)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;a.location.assign(w)}o&&c&&c({action:l,location:b.location,delta:1})}function v(S,m){l=tr.Replace;let d=Bs(b.location,S,m);u=f();let h=wc(d,u),w=b.createHref(d);i.replaceState(h,"",w),o&&c&&c({action:l,location:b.location,delta:0})}function x(S){let m=a.location.origin!=="null"?a.location.origin:a.location.href,d=typeof S=="string"?S:ap(S);return d=d.replace(/ $/,"%20"),mt(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let b={get action(){return l},get location(){return e(a,i)},listen(S){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(yc,p),c=S,()=>{a.removeEventListener(yc,p),c=null}},createHref(S){return t(a,S)},createURL:x,encodeLocation(S){let m=x(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:v,go(S){return i.go(S)}};return b}var bc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(bc||(bc={}));function xh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const vh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yh=e=>vh.test(e);function wh(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?go(e):e,o;if(r)if(yh(r))o=r;else{if(r.includes("//")){let i=r;r=op(r),mh(!1,"Pathnames cannot have embedded double slashes - normalizing "+(i+" -> "+r))}r.startsWith("/")?o=kc(r.substring(1),"/"):o=kc(r,t)}else o=t;return{pathname:o,search:_h(n),hash:Eh(a)}}function kc(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function qo(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function bh(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function kh(e,t){let r=bh(e);return t?r.map((n,a)=>a===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function jh(e,t,r,n){n===void 0&&(n=!1);let a;typeof e=="string"?a=go(e):(a=Mn({},e),mt(!a.pathname||!a.pathname.includes("?"),qo("?","pathname","search",a)),mt(!a.pathname||!a.pathname.includes("#"),qo("#","pathname","hash",a)),mt(!a.search||!a.search.includes("#"),qo("#","search","hash",a)));let o=e===""||a.pathname==="",i=o?"/":a.pathname,l;if(i==null)l=r;else{let p=t.length-1;if(!n&&i.startsWith("..")){let g=i.split("/");for(;g[0]==="..";)g.shift(),p-=1;a.pathname=g.join("/")}l=p>=0?t[p]:"/"}let c=wh(a,l),u=i&&i!=="/"&&i.endsWith("/"),f=(o||i===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||f)&&(c.pathname+="/"),c}const op=e=>e.replace(/\/\/+/g,"/"),Sh=e=>op(e.join("/")),_h=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Eh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,sp=["post","put","patch","delete"];new Set(sp);const Nh=["get",...sp];new Set(Nh);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ya(){return Ya=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ya.apply(null,arguments)}const ip=y.createContext(null),Wi=y.createContext(null),Vi=y.createContext(null),qi=y.createContext({outlet:null,matches:[],isDataRoute:!1});function Hi(){return y.useContext(Vi)!=null}function lp(){return Hi()||mt(!1),y.useContext(Vi).location}function cp(e){y.useContext(Wi).static||y.useLayoutEffect(e)}function Ch(){let{isDataRoute:e}=y.useContext(qi);return e?$h():zh()}function zh(){Hi()||mt(!1);let e=y.useContext(ip),{basename:t,future:r,navigator:n}=y.useContext(Wi),{matches:a}=y.useContext(qi),{pathname:o}=lp(),i=JSON.stringify(kh(a,r.v7_relativeSplatPath)),l=y.useRef(!1);return cp(()=>{l.current=!0}),y.useCallback(function(u,f){if(f===void 0&&(f={}),!l.current)return;if(typeof u=="number"){n.go(u);return}let p=jh(u,JSON.parse(i),o,f.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Sh([t,p.pathname])),(f.replace?n.replace:n.push)(p,f.state,f)},[t,n,i,o,e])}var up=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(up||{}),dp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(dp||{});function Ph(e){let t=y.useContext(ip);return t||mt(!1),t}function Th(e){let t=y.useContext(qi);return t||mt(!1),t}function Dh(e){let t=Th(),r=t.matches[t.matches.length-1];return r.route.id||mt(!1),r.route.id}function $h(){let{router:e}=Ph(up.UseNavigateStable),t=Dh(dp.UseNavigateStable),r=y.useRef(!1);return cp(()=>{r.current=!0}),y.useCallback(function(a,o){o===void 0&&(o={}),r.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Ya({fromRouteId:t},o)))},[e,t])}function Ah(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Rh(e){let{basename:t="/",children:r=null,location:n,navigationType:a=tr.Pop,navigator:o,static:i=!1,future:l}=e;Hi()&&mt(!1);let c=t.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:c,navigator:o,static:i,future:Ya({v7_relativeSplatPath:!1},l)}),[c,l,o,i]);typeof n=="string"&&(n=go(n));let{pathname:f="/",search:p="",hash:g="",state:v=null,key:x="default"}=n,b=y.useMemo(()=>{let S=xh(f,c);return S==null?null:{location:{pathname:S,search:p,hash:g,state:v,key:x},navigationType:a}},[c,f,p,g,v,x,a]);return b==null?null:y.createElement(Wi.Provider,{value:u},y.createElement(Vi.Provider,{children:r,value:b}))}new Promise(()=>{});/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Lh="6";try{window.__reactRouterVersion=Lh}catch{}const Ih="startTransition",jc=ef[Ih];function Mh(e){let{basename:t,children:r,future:n,window:a}=e,o=y.useRef();o.current==null&&(o.current=fh({window:a,v5Compat:!0}));let i=o.current,[l,c]=y.useState({action:i.action,location:i.location}),{v7_startTransition:u}=n||{},f=y.useCallback(p=>{u&&jc?jc(()=>c(p)):c(p)},[c,u]);return y.useLayoutEffect(()=>i.listen(f),[i,f]),y.useEffect(()=>Ah(n),[n]),y.createElement(Rh,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:i,future:n})}var Sc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Sc||(Sc={}));var _c;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(_c||(_c={}));const B="/api",Oh=".pdf,.png,.jpg,.jpeg,.tif,.tiff,.bmp,.webp,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv",G={ADDED:{bg:"var(--diff-added-bg)",border:"var(--diff-added-border)",text:"var(--diff-added-text)",chip:"var(--diff-added-chip)"},DELETED:{bg:"var(--diff-deleted-bg)",border:"var(--diff-deleted-border)",text:"var(--diff-deleted-text)",chip:"var(--diff-deleted-chip)"},MODIFIED:{bg:"var(--diff-modified-bg)",border:"var(--diff-modified-border)",text:"var(--diff-modified-text)",chip:"var(--diff-modified-chip)"},UNCHANGED:{bg:"var(--diff-unchanged-bg)",border:"var(--diff-unchanged-border)",text:"var(--diff-unchanged-text)",chip:"var(--diff-unchanged-chip)"},MATCH:{bg:"var(--diff-match-bg)",border:"var(--diff-match-border)",text:"var(--diff-match-text)",chip:"var(--diff-match-chip)"}},Fh=`
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
    height: clamp(520px, calc(100dvh - 150px), 760px);
    min-height: 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    overflow: hidden;
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
    min-height: 0;
    display: flex;
    flex-direction: column;
    gap: 26px;
    padding: 28px 8px 34px;
    overflow-y: auto;
    overscroll-behavior: contain;
    scrollbar-gutter: stable;
    scrollbar-width: thin;
    scrollbar-color: color-mix(in srgb, var(--text-secondary) 34%, transparent) transparent;
  }
  .comparison-chat-thread::-webkit-scrollbar {
    width: 7px;
  }
  .comparison-chat-thread::-webkit-scrollbar-track {
    background: transparent;
  }
  .comparison-chat-thread::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: color-mix(in srgb, var(--text-secondary) 30%, transparent);
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
  .comparison-chat-inline-citation {
    display: inline;
    border: 0;
    border-radius: 5px;
    background: color-mix(in srgb, var(--brand-orange) 10%, transparent);
    color: var(--brand-orange);
    padding: 1px 4px;
    margin-inline: 1px;
    cursor: pointer;
    font: inherit;
    font-size: .78em;
    font-weight: 700;
    vertical-align: .12em;
  }
  .comparison-chat-inline-citation:hover {
    background: color-mix(in srgb, var(--brand-orange) 18%, transparent);
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
  .comparison-chat-table {
    max-width: 100%;
    margin-top: 14px;
    overflow: auto;
    border: 1px solid var(--border);
    border-radius: 10px;
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
  .comparison-chat-citation {
    max-width: 52%;
    border: 0;
    background: transparent;
    color: var(--brand-orange);
    padding: 0;
    cursor: pointer;
    font-size: 11px;
    font-weight: 600;
    line-height: 1.35;
    text-align: end;
    white-space: normal;
  }
  .comparison-chat-citation:hover:not(:disabled) {
    text-decoration: underline;
  }
  .comparison-chat-citation:disabled {
    color: var(--text-secondary);
    cursor: default;
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
    position: relative;
    z-index: 2;
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
      height: min(680px, calc(100dvh - 72px));
      min-height: 440px;
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
    .comparison-chat-citation {
      max-width: 100%;
      text-align: start;
    }
    .comparison-chat-mode {
      flex-wrap: wrap;
    }
  }
`,dt={background:"#fffdf8",border:"1px solid #ded6c8",borderRadius:8,boxShadow:"0 1px 3px rgba(31,41,55,.08)"},ar={textAlign:"start",padding:"8px 9px",borderBottom:"1px solid #ded6c8",fontWeight:650,verticalAlign:"top",whiteSpace:"normal",overflowWrap:"anywhere"},Or={padding:"8px 9px",borderBottom:"1px solid #eee7dc",verticalAlign:"top",whiteSpace:"normal",overflowWrap:"anywhere",lineHeight:1.35},vr={border:"1px solid #ded6c8",background:"#fbfaf6",color:"#344054",borderRadius:999,padding:"4px 8px",fontSize:12,fontWeight:600};function Uh(e=!1,t={}){return{border:"none",borderRadius:6,background:e?"#98a2b3":"#1f2937",color:"white",padding:"9px 14px",fontWeight:550,cursor:e?"default":"pointer",...t}}function Bh(e={}){return{border:"1px solid #c9c0b0",borderRadius:6,background:"#fffdf8",color:"#344054",padding:"9px 13px",fontWeight:550,cursor:"pointer",...e}}function Dr(e){if(!e)return"";const t=String(e);return t.includes("Traceback (most recent call last)")||t.includes("Internal Server Error")||t.includes("psycopg")||t.includes("OperationalError")||t.includes('File "')||t.length>500?"An unexpected internal server error occurred. Please try again or check server logs.":t.replace(/\/Users\/[a-zA-Z0-9_-]+\//g,".../")}async function ee(e){try{const t=await e.text();if(!t)return`Request failed with status ${e.status}`;try{const r=JSON.parse(t);return Dr(nt(r.detail||r.error||r.message||r))}catch{return t.trim().startsWith("<!DOCTYPE html>")||t.includes("<html")||t.length>200?`Server error (${e.status}). Please check backend logs.`:Dr(t)}}catch{return`Request failed with status ${e.status}`}}function ie(e){const t=nt(e);return t.toLowerCase().includes("failed to fetch")?"The app could not reach the comparison service. Please confirm the backend is running and the API URL is correct.":t||"Something went wrong while processing the documents."}async function Wh(e){const t=await fetch(`${B}/extract-runs/${e}/structured-json`);if(t.ok){const o=Ws(await t.json());if(Ea(o))return o;const i=await Ec(e,o);return Ea(i)?i:o}const r=await fetch(`${B}/extract-runs/${e}/json`);if(!r.ok)throw new Error(await ee(t));const n=await r.json(),a=Ws(n);return Ea(a)?a:Ec(e,a)}function Ea(e){return!!(e&&((e.content||[]).length>0||(e.tables||[]).length>0||(e.pages||[]).some(t=>(t.content||[]).length>0||(t.tables||[]).length>0)))}async function Ec(e,t={}){const[r,n]=await Promise.allSettled([fetch(`${B}/extract-runs/${e}/blocks?limit=2000`).then(async i=>{if(!i.ok)throw new Error(await ee(i));return i.json()}),fetch(`${B}/extract-runs/${e}/tables?include_rows=true`).then(async i=>{if(!i.ok)throw new Error(await ee(i));return i.json()})]),a=r.status==="fulfilled"?r.value.blocks||[]:[],o=n.status==="fulfilled"?n.value.tables||[]:[];return Ws({...t,blocks:a,tables:o.length?o:t.tables||[]})}function Ws(e){var l,c,u;if(e!=null&&e.structured_json)return e.structured_json;if((e!=null&&e.document_summary||e!=null&&e.content||e!=null&&e.pages)&&Ea(e))return e;const t=(e==null?void 0:e.blocks)||[],r=(e==null?void 0:e.tables)||[],n=[];t.forEach(f=>{var v;const p=f.text||((v=f.payload)==null?void 0:v.text)||"",g=String(p).match(/^\s*([^:：]{2,80})\s*[:：]\s*(.{1,300})$/);g&&n.push({field:g[1].trim(),value:g[2].trim(),page:f.page_number,source:f.type,citation:`p.${f.page_number||"-"} - ${f.path||"document"}`}),Hh(p).forEach(x=>{n.push({...x,page:f.page_number,source:f.type,citation:`p.${f.page_number||"-"} - ${f.path||"document"}`})})}),r.slice(0,40).forEach(f=>{(f.rows||[]).slice(0,50).forEach(p=>{Object.entries(p||{}).forEach(([g,v])=>{!v||String(g).startsWith("__")||n.push({field:g,value:v,page:f.page_first||f.page_number,source:"table",table:f.display_name||f.title,citation:`${f.page_label||"page"} - ${f.title||"table"}`})})})});const a=t.filter(f=>["paragraph","list_item","kv_pair","figure","section","heading"].includes(f.type)).map(f=>{var b;const p=f.text||((b=f.payload)==null?void 0:b.text)||"",g={page:f.page_number,order:f.sequence||0,type:f.type,path:f.path,text:p,citation:`p.${f.page_number||"-"} - ${f.path||"document"}`},v=[],x=String(p).match(/^\s*([^:：]{2,80})\s*[:：]\s*(.{1,300})$/);return x&&v.push({name:x[1].trim(),value:x[2].trim()}),v.length&&(g.key_values=v),g}).filter(f=>String(f.text||"").trim()),o=[],i=new Map;return a.forEach(f=>{const p=f.page||1;i.has(p)||i.set(p,{page:p,citation:`p.${p}`,content:[],tables:[]}),i.get(p).content.push(f)}),r.forEach(f=>{const p=f.page_first||f.page_number||1;i.has(p)||i.set(p,{page:p,citation:`p.${p}`,content:[],tables:[]}),i.get(p).tables.push(f)}),Array.from(i.keys()).sort((f,p)=>f-p).forEach(f=>o.push(i.get(f))),{document_summary:(e==null?void 0:e.document_summary)||{label:((l=e==null?void 0:e.summary)==null?void 0:l.label)||(e==null?void 0:e.label)||"Extracted document",source_type:((c=e==null?void 0:e.summary)==null?void 0:c.source_format)||(e==null?void 0:e.source_format)||"document",extraction_quality:{grade:((u=e==null?void 0:e.summary)==null?void 0:u.quality)||"not rated",coverage:e==null?void 0:e.coverage},counts:{text_blocks:a.length,tables:r.length,pages:o.length}},semantic_fields:n.slice(0,220),business_structure:Vh(t,r,n),sections:t.filter(f=>["section","heading"].includes(f.type)).slice(0,200),tables:r,pages:o,content:a}}function Vh(e,t,r){const n=[{document_index:1,label:"Extracted document",sections:[]}];let a=null;return e.slice().sort((o,i)=>(o.page_number||1)-(i.page_number||1)||(o.sequence||0)-(i.sequence||0)).forEach(o=>{var i;if(["section","heading"].includes(o.type)){a={title:o.text||o.path||`Page ${o.page_number||1}`,page:o.page_number||1,path:o.path,content:[],fields:[],inline_records:[],tables:[]},n[0].sections.push(a);return}if((!a||a.page!==(o.page_number||1))&&(a={title:`Page ${o.page_number||1}`,page:o.page_number||1,path:`/page_${o.page_number||1}`,content:[],fields:[],inline_records:[],tables:[]},n[0].sections.push(a)),["paragraph","list_item","kv_pair","figure"].includes(o.type)){const l=o.text||((i=o.payload)==null?void 0:i.text)||"",c=r.filter(f=>{var p;return f.page===o.page_number&&((p=f.citation)==null?void 0:p.includes(o.path||"__no_path__"))}),u=qh(l);a.content.push({type:o.type,page:o.page_number,path:o.path,text:l,fields:c}),a.fields.push(...c),u&&a.inline_records.push({...u,page:o.page_number,citation:`p.${o.page_number||"-"} - ${o.path||"document"}`})}}),t.forEach(o=>{const i=o.page_first||o.page_number||1;let l=n[0].sections.find(c=>c.page===i);l||(l={title:`Page ${i}`,page:i,path:`/page_${i}`,content:[],fields:[],inline_records:[],tables:[]},n[0].sections.push(l)),l.tables.push({title:o.display_name||o.title||"Detected table",page_label:o.page_label,columns:o.columns||[],row_count:o.n_rows||0,sample_rows:(o.rows||o.row_preview||[]).slice(0,8)})}),{documents:n,section_count:n[0].sections.length}}function qh(e){const t=String(e||"").trim();if(!t)return null;const r=t.includes("|")?t.split("|").map(n=>n.trim()).filter(Boolean):t.split(/\s{3,}/).map(n=>n.trim()).filter(Boolean);return r.length<2?null:{record_type:"inline_row",columns:r.map((n,a)=>`Column ${a+1}`),values:Object.fromEntries(r.map((n,a)=>[`Column ${a+1}`,n])),text:t}}function Hh(e){const t=String(e||""),r=[["color",/\b(?:colou?r|shade)\s*(?:is|=|:)?\s*([A-Za-z][A-Za-z\s/-]{2,40})/gi],["size",/\b(?:size|dimension)\s*(?:is|=|:)?\s*([A-Z0-9][A-Z0-9\s./x-]{0,40})/gi],["quantity",/\b(?:qty|quantity|count|units?)\s*(?:is|=|:)?\s*(\d[\d,]*(?:\.\d+)?)/gi],["price",/([$€£]\s?\d[\d,]*(?:\.\d+)?)/g],["percentage",/\b(\d+(?:\.\d+)?%)\b/g],["date",/\b(\d{1,2}[/-]\d{1,2}[/-]\d{2,4}|\d{4}-\d{1,2}-\d{1,2})\b/g],["code",/\b([A-Z]{1,8}[- ]?\d{2,12}[A-Z]?)\b/gi]],n=[],a=new Set;return r.forEach(([o,i])=>{for(const l of t.matchAll(i)){const c=String(l[1]||"").replace(/\s+/g," ").trim(),u=`${o}:${c.toLowerCase()}`;!c||a.has(u)||(a.add(u),n.push({field:o,value:c}))}}),n}function nt(e){if(!e)return"";if(typeof e=="string")return Dr(e);if(e instanceof Error)return nt(e.message);if(Array.isArray(e))return e.map(nt).filter(Boolean).join(`
`);if(typeof e=="object"){if(e.detail)return nt(e.detail);if(e.error)return nt(e.error);if(e.message)return nt(e.message);try{return Dr(JSON.stringify(e,null,2))}catch{return Dr(String(e))}}return Dr(String(e))}function Qh(e){if(!(e!=null&&e.length))return[];const t=new Set;return e.slice(0,20).forEach(r=>{r&&typeof r=="object"&&!Array.isArray(r)&&Object.keys(r).forEach(n=>{hr(n)||t.add(n)})}),Array.from(t).slice(0,12)}function hr(e){const t=String(e||"");return!t||t.startsWith("__")?!0:["payload","raw","field_profiles","column_profiles","extraction_intelligence","source_tables","table_fingerprint","bbox_by_page","quality_warnings"].includes(t)}function dr(e){if(e==null||e==="")return"-";if(Array.isArray(e))return e.map(dr).join(", ");if(typeof e=="object"){const t=Object.fromEntries(Object.entries(e).filter(([r])=>!hr(r)));return Object.keys(t).length?JSON.stringify(t):"-"}return String(e)}function Nc(e){return!e||typeof e!="object"?"":Object.entries(e).filter(([,t])=>t!=null&&String(t).trim()!=="").map(([t,r])=>`${t}: ${r}`).join(" | ")}function Kh(e,t=560,r=1280){const n=Math.max(1,Number(e)||1);return Math.min(r,Math.max(t,180+n*180))}function Re(e,t){if(!e)return"";const r=String(e).replace(/\s+/g," ").trim();return r.length<=t?r:`${r.slice(0,t-1)}...`}function vt(e){const t=Number(e||0);return Number.isFinite(t)?Math.round(t).toLocaleString():"0"}function Gh(e){if(!e)return"-";const t=new Date(e);return Number.isNaN(t.getTime())?"-":t.toLocaleString(void 0,{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function Jh(e,t){const r=Number(e||0);if(!Number.isFinite(r)||r<=0)return t==="complete"||t==="failed"?"-":"Running";const n=Math.max(1,Math.round(r/1e3));if(n<60)return`${n}s`;const a=Math.floor(n/60),o=n%60;if(a<60)return o?`${a}m ${o}s`:`${a}m`;const i=Math.floor(a/60),l=a%60;return l?`${i}h ${l}m`:`${i}h`}function Yh(e){return String(e||"-").replace(/\bbase\s*p\.?\s*(\d+)/gi,"Baseline page $1").replace(/\btarget\s*p\.?\s*(\d+)/gi,"Revised page $1").replace(/\bbaseline\s*p\.?\s*(\d+)/gi,"Baseline page $1").replace(/\brevised\s*p\.?\s*(\d+)/gi,"Revised page $1").replace(/\s*->\s*/g," → ")}function Cc(e){const t=String(e||"").toLowerCase();return t.includes("high")?3:t.includes("medium")?2:t.includes("low")?1:0}function Fr(e){const t=String((e==null?void 0:e.change_type)||(e==null?void 0:e.changeType)||(e==null?void 0:e.status)||"").toUpperCase();if(["ADDED","DELETED","MODIFIED","UNCHANGED","MATCH"].includes(t))return t;if((e!=null&&e.after||e!=null&&e.target_text)&&!(e!=null&&e.before||e!=null&&e.base_text))return"ADDED";if((e!=null&&e.before||e!=null&&e.base_text)&&!(e!=null&&e.after||e!=null&&e.target_text))return"DELETED";const r=`${(e==null?void 0:e.type)||""} ${(e==null?void 0:e.change)||""} ${(e==null?void 0:e.description)||""} ${(e==null?void 0:e.review)||""}`.toUpperCase();return r.includes("ADDED")||r.includes("NEW CONTENT")||r.includes("INTRODUCED")?"ADDED":r.includes("DELETED")||r.includes("REMOVED")||r.includes("DROPPED")?"DELETED":r.includes("MODIFIED")||r.includes("CHANGED")||r.includes("UPDATED")||r.includes("REVISED")?"MODIFIED":t||"MODIFIED"}function Xh(e){const t=Fr(e),r=(e==null?void 0:e.before)||"",n=(e==null?void 0:e.after)||"",a=(e==null?void 0:e.stable_key)||zc(e==null?void 0:e.path)||"Document change",o=[e!=null&&e.page_base?`Baseline page ${e.page_base}`:"",e!=null&&e.page_target?`Revised page ${e.page_target}`:""].filter(Boolean).join(" -> "),i=t==="ADDED"?`Added: ${Re(n,260)}`:t==="DELETED"?`Deleted: ${Re(r,260)}`:`Changed from "${Re(r,120)}" to "${Re(n,120)}"`;return{feature:a,item:a,area:zc(e==null?void 0:e.path)||"Document",change_type:t,change:i,before:r,after:n,citation:o,impact:e==null?void 0:e.impact,confidence:typeof(e==null?void 0:e.similarity)=="number"?Math.max(.55,Math.min(.98,1-Math.abs(1-e.similarity))):null,seek_clarification:t==="UNCHANGED"?"None":"Review recommended."}}function Zh(e,t){const r=Array.isArray(e)?[...e]:[],n=Array.isArray(t)?t:[],a=new Set(r.map(Fr)),o=new Set(r.map(i=>`${Fr(i)}:${i.stable_key||i.item||i.feature||i.path||i.change}`));return["ADDED","DELETED"].forEach(i=>{if(a.has(i))return;let l=0;n.forEach(c=>{if(l>=12||Fr(c)!==i)return;const u=`${i}:${c.stable_key||c.path||c.before||c.after}`;o.has(u)||(r.push(Xh(c)),o.add(u),l+=1)})}),r}function zc(e){const t=String(e||"").split("/").map(r=>r.trim()).filter(Boolean);return t[t.length-1]||""}function Pc(e){const t=`${e.seek_clarification||""} ${e.review||""} ${e.recommendation||""}`.toLowerCase(),r=Vs(e.confidence);return t.includes("review")||t.includes("clarif")||t.includes("confirm")||typeof r=="number"&&r<.8}function Vs(e){return typeof e!="number"?null:e>1?e/100:e}function Tc(e){return{border:"1px solid #c9c0b0",background:e?"#f1ece3":"#fffdf8",color:e?"#98a2b3":"#344054",borderRadius:7,padding:"7px 12px",cursor:e?"default":"pointer",fontWeight:600}}function Dc(e){return{border:"1px solid #c9c0b0",background:e?"#f1ece3":"#fffdf8",color:e?"#98a2b3":"#344054",borderRadius:6,padding:"5px 8px",cursor:e?"default":"pointer",fontWeight:600,fontSize:12}}function qs(e,t=!1){const r=String(e||"").toLowerCase();return r==="added"?{background:t?G.ADDED.bg:"rgba(31,160,70,.08)",border:t?void 0:`1px solid ${G.ADDED.border}`,borderInlineStart:`3px solid ${G.ADDED.border}`}:r==="deleted"?{background:t?G.DELETED.bg:"rgba(218,54,54,.08)",border:t?void 0:`1px solid ${G.DELETED.border}`,borderInlineStart:`3px solid ${G.DELETED.border}`}:r==="modified"?{background:t?"rgba(196,85,16,.10)":"rgba(196,85,16,.08)",border:t?void 0:`1px solid ${G.MODIFIED.border}`,borderInlineStart:`3px solid ${G.MODIFIED.border}`}:{background:t?"transparent":"#fffdf8",border:t?void 0:"1px solid transparent",borderInlineStart:"3px solid transparent"}}function eg({meta:e}){var r,n,a;const t=e.stats||{};return s.jsxs("section",{className:"stats-strip",children:[s.jsx(je,{label:"Added",value:t.ADDED||0,tone:"added"}),s.jsx(je,{label:"Deleted",value:t.DELETED||0,tone:"deleted"}),s.jsx(je,{label:"Modified",value:t.MODIFIED||0,tone:"modified"}),s.jsx(je,{label:"Unchanged",value:t.UNCHANGED||0}),s.jsx(je,{label:"Coverage",value:`${$c((r=e.coverage)==null?void 0:r.base)} / ${$c((n=e.coverage)==null?void 0:n.target)}`}),s.jsx(je,{label:"Pages",value:`${e.n_pages_base} / ${e.n_pages_target}`}),Number(((a=e.ai_usage)==null?void 0:a.total_tokens)||0)>0&&s.jsx(je,{label:"AI tokens",value:`${vt(e.ai_usage.total_tokens)} (${vt(e.ai_usage.calls||0)} calls)`})]})}function $c(e){return typeof e=="number"?`${e.toFixed(1)}%`:"-"}function je({label:e,value:t,tone:r}){return s.jsxs("span",{className:`stat-chip ${r||"neutral"}`,children:[s.jsx("span",{children:e}),s.jsx("strong",{children:t})]})}function tg({usage:e}){const t=Number((e==null?void 0:e.total_tokens)||0);if(!t)return null;const n=(Array.isArray(e==null?void 0:e.operations)?e.operations:[]).slice(-4);return s.jsxs("div",{style:{border:"1px solid #ded6c8",borderRadius:8,padding:10,marginBottom:12,background:"#fbfaf6",fontSize:12,color:"#475467"},children:[s.jsx("strong",{style:{color:"#344054"},children:"AI usage:"})," ",vt(t)," tokens · ",vt(e.calls||0)," call(s) · ",vt(e.prompt_tokens||0)," input / ",vt(e.completion_tokens||0)," output",n.length>0&&s.jsx("div",{style:{marginTop:6,display:"flex",flexWrap:"wrap",gap:6},children:n.map((a,o)=>s.jsxs("span",{style:{border:"1px solid #d8d0c3",borderRadius:999,padding:"3px 7px",background:"#fffdf8"},children:[a.operation||"AI call"," · ",vt(a.total_tokens||0)]},`${a.operation||"op"}-${o}`))})]})}function Ac({progress:e,message:t,status:r}){const n=xo(r),a=Math.max(0,Math.min(100,Number(e)||0)),o=n.isFailed?100:Math.max(7,n.isComplete?100:a);return s.jsxs("div",{className:"processing-state",children:[s.jsxs("div",{className:"processing-state-head",children:[s.jsx("span",{style:{fontWeight:600},children:t}),s.jsxs("span",{children:[a,"%"]})]}),s.jsx("div",{className:"progress-track",children:s.jsx("div",{className:`progress-fill ${n.className}`,style:{width:`${o}%`}})}),s.jsx("p",{children:"The job is still running. This view updates automatically as the backend reports progress."})]})}function On({message:e}){return s.jsx("div",{style:{marginTop:16,border:"1px solid #f0b4b4",background:"#fff5f5",color:"#9f1d1d",borderRadius:8,padding:13,fontSize:14,fontWeight:600,lineHeight:1.45,whiteSpace:"pre-wrap"},children:nt(e)})}function qn({label:e}){return s.jsx("div",{style:{padding:20,color:"#667085",fontWeight:600},children:e})}function pr({label:e}){return s.jsx("div",{style:{padding:18,border:"1px dashed #c9c0b0",borderRadius:8,color:"#667085",background:"#fbfaf7",fontWeight:600},children:e})}function rg({status:e}){const t=xo(e);return s.jsx("span",{style:{display:"inline-block",background:t.tone.chip,color:t.tone.text,border:`1px solid ${t.tone.border}`,padding:"2px 8px",borderRadius:999,fontWeight:650,fontSize:12},children:t.label})}function xo(e){const t=String(e||"queued").toLowerCase(),r=t==="complete"||t==="completed",n=t==="failed"||t==="error",a=t==="running"||t==="processing"||t==="uploading";return{value:t,label:r?"complete":n?"failed":t,className:r?"complete":n?"failed":a?"running":"queued",tone:r?G.ADDED:n?G.DELETED:a?G.MODIFIED:G.UNCHANGED,isComplete:r,isFailed:n}}function ng({value:e,status:t}){const r=xo(t),n=Math.max(0,Math.min(100,Number(e)||0)),a=r.isFailed||r.isComplete?100:n;return s.jsxs("div",{children:[s.jsx("div",{className:"progress-track",style:{height:6,minWidth:140},children:s.jsx("div",{className:`progress-fill ${r.className}`,style:{width:`${a}%`}})}),s.jsx("div",{style:{marginTop:5,color:"#667085",fontSize:12},children:r.isFailed?"failed":`${r.isComplete?100:n}%`})]})}function pp({type:e}){const t=String(e||"MODIFIED").toUpperCase(),r=G[t]||G.MODIFIED;return s.jsx("span",{style:{display:"inline-block",background:r.chip,color:r.text,border:`1px solid ${r.border}`,padding:"2px 8px",borderRadius:999,fontWeight:650,fontSize:12},children:t})}function ag({onOpenJob:e,onAskJob:t,error:r,historyKind:n="all",onStartCompare:a,onStartExtract:o}){const[i,l]=y.useState({loading:!0,error:"",jobs:[]}),[c,u]=y.useState(""),f=async()=>{try{const m=await fetch(`${B}/jobs?limit=80`);if(!m.ok)throw new Error(await ee(m));const d=await m.json();l({loading:!1,error:"",jobs:d.jobs||[]})}catch(m){l({loading:!1,error:ie(m),jobs:[]})}};y.useEffect(()=>{let m=!1,d=null;const h=async()=>{m||(await f(),m||(d=setTimeout(h,2200)))};return h(),()=>{m=!0,d&&clearTimeout(d)}},[]);const p=async m=>{if(!(!(m!=null&&m.run_id)||c)){u(m.run_id);try{const d=await fetch(`${B}/jobs/${m.run_id}`,{method:"DELETE"});if(!d.ok)throw new Error(await ee(d));await f()}catch(d){l(h=>({...h,error:ie(d)}))}finally{u("")}}},g=(i.jobs||[]).filter(m=>n==="all"||m.kind===n),v=g.filter(m=>!["complete","failed","error"].includes(m.status)).length,x=g.filter(m=>m.status==="complete").length,b=n==="comparison"?"Comparison History":n==="extraction"?"Extraction History":"Work History",S=n==="comparison"?"No comparison runs are available yet.":n==="extraction"?"No extraction runs are available yet.":"No document work is available yet.";return s.jsxs("section",{className:"session-board",children:[s.jsxs("div",{className:"board-head",children:[s.jsx("div",{children:s.jsx("h2",{children:b})}),s.jsxs("div",{className:"board-actions",children:[s.jsx("button",{type:"button",onClick:a,className:"primary-action compact",children:"New compare"}),s.jsx("button",{type:"button",onClick:o,className:"ghost-action compact",children:"New extract"}),s.jsxs("span",{children:[v," running"]}),s.jsxs("span",{children:[x," complete"]}),s.jsx("button",{type:"button",onClick:f,className:"ghost-action",children:"Refresh"})]})]}),r&&s.jsx(On,{message:r}),i.error&&s.jsx(On,{message:i.error}),i.loading&&!g.length?s.jsx(qn,{label:"Loading jobs"}):g.length===0?s.jsx(pr,{label:S}):s.jsx("div",{className:"job-list",children:g.map(m=>s.jsx(og,{job:m,deleting:c===m.run_id,onOpen:()=>e(m),onAsk:()=>t==null?void 0:t(m),onDelete:()=>p(m)},m.run_id))})]})}function og({job:e,deleting:t,onOpen:r,onAsk:n,onDelete:a}){const o=e.status==="complete",i=xo(e.status),l=e.kind==="extraction",c=l?e.label||"Uploaded document":`${e.base_label||"Baseline"} → ${e.target_label||"Revised"}`,u=l?e.n_pages||"-":`${e.n_pages_base||"-"} / ${e.n_pages_target||"-"}`;return s.jsxs("article",{className:`job-card ${i.className}`,children:[s.jsxs("div",{className:"job-main",children:[s.jsx("div",{className:"job-kind",children:l?"Extraction":"Comparison"}),s.jsx("h3",{dir:"auto",children:c}),s.jsxs("div",{className:"job-meta",children:[s.jsxs("span",{children:["#",String(e.run_id||"").slice(0,6)]}),s.jsx("span",{children:[e.source_format,e.base_format,e.target_format].filter(Boolean).join(" / ")||"document"}),s.jsxs("span",{children:[u," pages"]}),s.jsx("span",{children:Jh(e.duration_ms,e.status)})]}),e.status_message&&s.jsx("p",{dir:"auto",children:e.status_message}),i.isFailed&&e.error&&s.jsx("p",{className:"job-error",dir:"auto",children:Re(nt(e.error),180)})]}),s.jsxs("div",{className:"job-side",children:[s.jsx(rg,{status:e.status}),s.jsx(ng,{value:e.progress||0,status:e.status}),s.jsx("span",{className:"job-date",children:Gh(e.created_at)}),s.jsxs("div",{className:"job-actions",children:[s.jsx("button",{type:"button",onClick:r,disabled:!o,className:"primary-action compact",children:"Open"}),s.jsx("button",{type:"button",onClick:n,disabled:!o||!l,className:"ghost-action compact",children:"Query"}),s.jsx("button",{type:"button",onClick:a,disabled:t,className:"danger-action compact",children:t?"Deleting":"Delete"})]})]})]})}function sg({onUpload:e,busy:t,onAdmin:r}){const n=fp("comparison"),a=t||n.loading||!n.selectedId||n.datasets.length===0;return s.jsxs("form",{onSubmit:e,className:"doc-workflow-card",children:[s.jsx("div",{className:"workflow-card-head",children:s.jsx("div",{children:s.jsx("h2",{children:"Compare two documents"})})}),s.jsx(mp,{...n,busy:t,onAdmin:r}),!n.loading&&n.datasets.length===0?s.jsx(hp,{onAdmin:r}):null,s.jsxs("div",{className:"upload-grid compare",children:[s.jsx(Hs,{label:"Baseline",helper:"Approved or reference file",name:"base",disabled:a}),s.jsx(Hs,{label:"Revised",helper:"Latest or proposed file",name:"target",disabled:a}),s.jsxs("div",{className:"workflow-action-rail",children:[s.jsx("button",{disabled:a,className:"primary-action full",children:t?"Processing":"Compare documents"}),s.jsx("div",{className:"workflow-note",children:"Side-by-side preview, semantic changes, and export."})]})]})]})}function ig({onUpload:e,busy:t,onAdmin:r}){const n=fp("extraction"),a=t||n.loading||!n.selectedId||n.datasets.length===0;return s.jsxs("form",{onSubmit:e,className:"doc-workflow-card",children:[s.jsx("div",{className:"workflow-card-head",children:s.jsx("div",{children:s.jsx("h2",{children:"Extract documents"})})}),s.jsx(mp,{...n,busy:t,onAdmin:r}),!n.loading&&n.datasets.length===0?s.jsx(hp,{onAdmin:r}):null,s.jsxs("div",{className:"upload-grid extract",children:[s.jsx(Hs,{label:"Document or image",helper:"PDF, image, Word, Excel, xlsb, CSV, or TSV",name:"document",disabled:a,multiple:!0}),s.jsxs("div",{className:"workflow-action-rail",children:[s.jsx("button",{disabled:a,className:"primary-action full",children:t?"Extracting":"Extract content"}),s.jsx("div",{className:"workflow-note",children:"Text, tables, OCR, structured JSON, and document query."})]})]})]})}function fp(e){const[t,r]=y.useState([]),[n,a]=y.useState(""),[o,i]=y.useState(!0),[l,c]=y.useState("");return y.useEffect(()=>{let u=!0;return(async()=>{i(!0),c("");try{const p=window.sessionStorage.getItem("simulated_role")||"platform_admin",g=await fetch(`${B}/datasets`,{headers:{"X-User-Role":p}});if(!g.ok){const S=g.status===404?"Use case service is not available. Confirm the backend admin/datasets routes are deployed, then refresh.":`Could not load use cases (${g.status})`;throw new Error(S)}const b=((await g.json()).datasets||[]).filter(S=>(S.use_case_type||"comparison")===e);if(!u)return;r(b),a(S=>S&&b.some(m=>m.id===S)?S:"")}catch(p){if(!u)return;r([]),a(""),c((p==null?void 0:p.message)||"Could not load use cases.")}finally{u&&i(!1)}})(),()=>{u=!1}},[]),{datasets:t,selectedId:n,setSelectedId:a,loading:o,error:l}}function mp({datasets:e,selectedId:t,setSelectedId:r,loading:n,error:a,busy:o,onAdmin:i}){return s.jsxs("div",{className:"usecase-selector",children:[s.jsxs("label",{children:[s.jsx("span",{children:"Use case"}),s.jsxs("select",{name:"family_id",value:t,onChange:l=>r(l.target.value),required:!0,disabled:o||n||e.length===0,children:[s.jsx("option",{value:"",children:n?"Loading use cases":"Select a use case"}),e.map(l=>s.jsxs("option",{value:l.id,children:[l.supplier," - ",l.family_name," (",l.domain||"generic",")"]},l.id))]})]}),a?s.jsx("p",{className:"usecase-error",children:a}):null,e.length>0?s.jsx("button",{type:"button",className:"ghost-action compact",onClick:i,children:"Manage"}):null]})}function hp({onAdmin:e}){return s.jsxs("div",{className:"usecase-required",children:[s.jsx("strong",{children:"Use case required"}),s.jsx("p",{children:"Create or bootstrap a document use case before uploading files. The selected use case supplies metadata, template rules, access policy, and extraction guidance."}),s.jsx("button",{type:"button",className:"primary-action compact",onClick:e,children:"Open Admin Studio"})]})}function Hs({label:e,helper:t,name:r,disabled:n,multiple:a=!1}){const[o,i]=y.useState(""),l=y.useRef(null),c=()=>{var u;n||(u=l.current)==null||u.click()};return s.jsxs("div",{onClick:c,onKeyDown:u=>{(u.key==="Enter"||u.key===" ")&&c()},role:"button",tabIndex:n?-1:0,className:`file-lane${n?" disabled":""}`,children:[s.jsx("input",{ref:l,type:"file",name:r,accept:Oh,multiple:a,required:!0,disabled:n,onClick:u=>u.stopPropagation(),onChange:u=>{var p;const f=Array.from(u.target.files||[]);i(f.length>1?`${f.length} files selected`:((p=f[0])==null?void 0:p.name)||"")},style:{position:"absolute",width:1,height:1,opacity:0,pointerEvents:"none"}}),s.jsxs("div",{className:"file-lane-head",children:[s.jsxs("div",{children:[s.jsx("div",{className:"file-lane-title",children:e}),s.jsx("div",{className:"file-lane-helper",children:t})]}),s.jsx("span",{className:"file-lane-pill",children:"Files"})]}),s.jsx("div",{className:`file-lane-value${o?" selected":""}`,children:o||"Select a file"})]})}function lg({runId:e,meta:t,onVerifyPage:r}){const n=t.base_format&&t.base_format!=="pdf"?t.base_native_pages||t.n_pages_base||1:t.n_pages_base||1,a=t.target_format&&t.target_format!=="pdf"?t.target_native_pages||t.n_pages_target||1:t.n_pages_target||1,o=Math.max(n,a),[i,l]=y.useState(null),[c,u]=y.useState(!1);y.useEffect(()=>{let v=!1;return l(null),Promise.all([fetch(`${B}/runs/${e}/summary`).then(async x=>{if(!x.ok)throw new Error("Failed to load summary");return x.json()}),fetch(`${B}/runs/${e}/diff?limit=500`).then(async x=>x.ok?x.json():{diffs:[]})]).then(([x,b])=>{if(v)return;const S=Array.isArray(x)?x:x.rows||x.summary||[];l(Zh(S,b.diffs||[]))}).catch(x=>{v||(console.error("Failed to build quick summary",x),l([]))}),()=>{v=!0}},[e]);const f=Ur.useMemo(()=>(Array.isArray(i)?i:[]).filter(x=>x.change||x.description||x.before||x.after).sort((x,b)=>{const S=Cc(x.impact)+(Pc(x)?2:0)+(Vs(x.confidence)||0);return Cc(b.impact)+(Pc(b)?2:0)+(Vs(b.confidence)||0)-S}),[i]),p=v=>{const x=String(v||""),b=x.match(/(?:revised|target|page|p\.)\s*(\d+)/i)||x.match(/\b(\d{1,4})\b/);if(!b)return null;const S=Number.parseInt(b[1],10);return Number.isFinite(S)&&S>=1&&S<=o?S:null};if(i===null)return s.jsx("div",{className:"key-audit-empty",children:"Building comparison summary..."});if(!f.length)return s.jsx("div",{className:"key-audit-empty",children:"No prioritized summary items were returned for this comparison."});const g=c?f.slice(0,16):f.slice(0,8);return s.jsxs("div",{className:"key-audit-panel compact",children:[s.jsx("div",{className:"key-audit-list",children:g.map((v,x)=>{const b=p(v.citation);return s.jsxs("div",{className:"key-audit-item",children:[s.jsx(pp,{type:Fr(v)}),s.jsxs("div",{className:"key-audit-copy",dir:"auto",children:[s.jsx("strong",{children:Re(v.feature||v.item||v.area||"Document change",120)}),s.jsx("span",{children:Re(v.change||v.description||v.before||v.after||"Value updated.",260)}),v.citation?s.jsx("small",{children:Yh(v.citation)}):null]}),b?s.jsxs("button",{type:"button",className:"primary-action compact",onClick:()=>r(b),children:["Verify page ",b]}):null]},`${v.stable_key||v.feature||v.item||x}`)})}),f.length>8&&s.jsx("button",{type:"button",className:"key-audit-more",onClick:()=>u(v=>!v),children:c?"Show fewer":`Show ${Math.min(16,f.length)} items`})]})}function cg({runId:e,meta:t,pageNum:r,setPageNum:n}){const a=t.base_format&&t.base_format!=="pdf"?t.base_native_pages||t.n_pages_base||1:t.n_pages_base||1,o=t.target_format&&t.target_format!=="pdf"?t.target_native_pages||t.n_pages_target||1:t.n_pages_target||1,i=Math.max(a,o),[l,c]=y.useState(r),[u,f]=y.useState(r),[p,g]=y.useState(100),[v,x]=y.useState(!1),[b,S]=y.useState(!0),m=y.useRef(null),d=y.useRef(null);y.useEffect(()=>{c(r),f(r)},[e,r]),y.useEffect(()=>{if(!b)return;const w=m.current,_=d.current;if(!w||!_)return;let C=!1;const j=(P,L)=>{C||(C=!0,L.scrollTop=P.scrollTop,L.scrollLeft=P.scrollLeft,window.requestAnimationFrame(()=>{C=!1}))},N=()=>j(w,_),T=()=>j(_,w);return w.addEventListener("scroll",N,{passive:!0}),_.addEventListener("scroll",T,{passive:!0}),()=>{w.removeEventListener("scroll",N),_.removeEventListener("scroll",T)}},[e,r,b]);const h=w=>{const _=Math.max(1,Math.min(i,w));n(_),c(_),f(_)};return s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:12,flexWrap:"wrap"},children:[s.jsx("button",{onClick:()=>h(r-1),disabled:r<=1,style:Tc(r<=1),children:"Prev both"}),s.jsxs("span",{style:{fontSize:17,fontWeight:650,minWidth:100},children:["Page ",r," / ",i]}),s.jsx("button",{onClick:()=>h(r+1),disabled:r>=i,style:Tc(r>=i),children:"Next both"}),s.jsxs("div",{className:"viewer-toolbar-group","aria-label":"PDF zoom controls",children:[s.jsx("button",{type:"button",onClick:()=>g(w=>Math.max(50,w-25)),title:"Zoom out",children:"-"}),s.jsxs("span",{children:[p,"%"]}),s.jsx("button",{type:"button",onClick:()=>g(w=>Math.min(300,w+25)),title:"Zoom in",children:"+"}),s.jsx("button",{type:"button",onClick:()=>g(100),title:"Reset zoom",children:"Reset"})]}),s.jsxs("label",{className:"viewer-sync-toggle",children:[s.jsx("input",{type:"checkbox",checked:b,onChange:w=>S(w.target.checked)}),s.jsx("span",{children:"Sync scroll"})]}),s.jsxs("label",{className:"viewer-sync-toggle",style:{marginLeft:8},children:[s.jsx("input",{type:"checkbox",checked:v,onChange:w=>x(w.target.checked)}),s.jsx("span",{children:"Smart crop"})]}),s.jsx(ug,{})]}),s.jsxs("div",{className:"viewer-grid",style:{display:"grid",gridTemplateColumns:"minmax(0, 1fr) minmax(0, 1fr)",gap:14},children:[s.jsx(Rc,{runId:e,side:"base",pageNum:l,setPageNum:c,totalPages:a,label:"Baseline document",docName:t.base_label,format:t.base_format,zoom:p,scrollRef:m,cropMargins:v}),s.jsx(Rc,{runId:e,side:"target",pageNum:u,setPageNum:f,totalPages:o,label:"Revised document",docName:t.target_label,format:t.target_format,zoom:p,scrollRef:d,cropMargins:v})]})]})}function ug(){return s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7,marginLeft:6,flexWrap:"wrap"},children:[s.jsx(Ho,{label:"added",color:G.ADDED.bg,border:G.ADDED.border}),s.jsx(Ho,{label:"deleted",color:G.DELETED.bg,border:G.DELETED.border}),s.jsx(Ho,{label:"modified",color:G.MODIFIED.bg,border:G.MODIFIED.border})]})}function Ho({label:e,color:t,border:r}){return s.jsx("span",{style:{background:t,border:`1px solid ${r}`,color:"var(--text-primary)",padding:"2px 8px",borderRadius:999,fontSize:12,fontWeight:600},children:e})}function Rc({runId:e,side:t,pageNum:r,setPageNum:n,totalPages:a,label:o,docName:i,format:l,zoom:c=100,scrollRef:u,cropMargins:f}){const[p,g]=y.useState({regions:[]}),[v,x]=y.useState(null),[b,S]=y.useState("idle"),m=r>=1&&r<=a,d=l&&l!=="pdf";y.useEffect(()=>{if(S(m&&!d?"loading":"idle"),!m){g({regions:[]}),x(null);return}if(d){g({regions:[]}),fetch(`${B}/runs/${e}/native-page/${t}/${r}`).then(T=>T.json()).then(x).catch(()=>x({items:[]}));return}x(null),fetch(`${B}/runs/${e}/overlay/${t}/${r}`).then(T=>T.json()).then(g).catch(()=>g({regions:[]}))},[e,t,r,m,d]);const h=p.content_box,w=p.page_width||612,_=p.page_height||792,C=f&&h&&h.x_max>h.x_min&&h.y_max>h.y_min;let j={position:"relative",width:"100%"},N={position:"relative",width:`${c}%`};if(C){const T=h.x_min/w,P=h.y_min/_,L=(h.x_max-h.x_min)/w;j={position:"relative",overflow:"hidden",width:"100%",paddingTop:`${(h.y_max-h.y_min)/_/L*c}%`},N={position:"absolute",left:`${-(T/L)*c}%`,top:`${-(P/L)*c}%`,width:`${1/L*c}%`}}return s.jsxs("div",{className:"doc-viewer-shell",children:[s.jsxs("div",{style:{marginBottom:7,display:"flex",justifyContent:"space-between",gap:10,alignItems:"flex-end",flexWrap:"wrap"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:13,color:"var(--text-secondary)",fontWeight:600},children:o}),s.jsxs("div",{style:{fontSize:14,color:"var(--text-primary)",fontWeight:600},children:[i," - ",m?`page ${r}`:"no page",l&&s.jsx("span",{style:{color:"var(--text-secondary)",fontSize:11,marginLeft:6},children:String(l).toUpperCase()})]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[s.jsx("button",{type:"button",onClick:()=>n(Math.max(1,r-1)),disabled:r<=1,style:Dc(r<=1),title:`Previous ${o}`,children:"Prev"}),s.jsxs("span",{style:{color:"var(--text-secondary)",fontSize:12,minWidth:46,textAlign:"center"},children:[r,"/",a||1]}),s.jsx("button",{type:"button",onClick:()=>n(Math.min(a||1,r+1)),disabled:r>=(a||1),style:Dc(r>=(a||1)),title:`Next ${o}`,children:"Next"})]})]}),s.jsx("div",{ref:u,className:`doc-frame dl-scrollbar ${d?"native":""}`,style:{overflow:"auto",maxHeight:"75vh",position:"relative"},children:m?d?s.jsx(pg,{page:v,side:t}):s.jsx("div",{style:j,children:s.jsxs("div",{className:"pdf-zoom-stage",style:N,children:[b==="loading"&&s.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)",background:"var(--surface-raised)",zIndex:1,fontWeight:600},children:["Loading page ",r]}),s.jsx("img",{src:`${B}/runs/${e}/pages/${t}/${r}`,onLoad:()=>S("ready"),onError:()=>S("error"),style:{display:"block",width:"100%",height:"auto"},alt:`${t} page ${r}`},`${t}-${r}`),b==="error"&&s.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:G.DELETED.text,background:"#fff5f5",zIndex:2,fontWeight:600},children:["Could not load page ",r]}),(p.regions||[]).map((T,P)=>{const[L,ce,Oe,Ct]=T.bbox||[0,0,0,0],Ee=G[String(T.change_type||"").toUpperCase()]||G.MODIFIED,Xe=T.page_width||p.page_width||612,Ne=T.page_height||p.page_height||792,z=T.border_color||Ee.border,R=T.color||Ee.bg;return s.jsx("div",{title:`${T.change_type||"change"} ${T.stable_key||""} (${T.block_type||"block"})`,style:{position:"absolute",left:`${L/Xe*100}%`,top:`${ce/Ne*100}%`,width:`${Math.max(.15,(Oe-L)/Xe*100)}%`,height:`${Math.max(.15,(Ct-ce)/Ne*100)}%`,background:R,border:`1px solid ${z}`,boxShadow:`inset 0 0 0 1px ${R}`,pointerEvents:"auto"}},P)})]})}):s.jsx(dg,{pageNum:r})})]})}function dg({pageNum:e}){return s.jsxs("div",{style:{minHeight:520,display:"grid",placeItems:"center",color:"var(--text-secondary)",fontWeight:600},children:["No page ",e," in this document."]})}function pg({page:e,side:t}){if(!e)return s.jsx("div",{style:{minHeight:520,display:"grid",placeItems:"center",color:"var(--text-secondary)",fontWeight:600},children:"Loading structured page"});const r=e.items||[],n=e.viewer_type||(e.format==="spreadsheet"?"spreadsheet":"document");return r.length?s.jsx("div",{className:`native-page ${n}`,dir:"auto",children:r.map(a=>s.jsx(fg,{item:a,viewerType:n,side:t||e.side},a.id))}):s.jsx("div",{style:{minHeight:520,display:"grid",placeItems:"center",color:"var(--text-secondary)",fontWeight:600},children:"No structured content on this page."})}function fg({item:e,viewerType:t,side:r}){var i;const n=qs(e.highlight);if(e.type==="table"&&!((i=e.payload)!=null&&i.layout_table)&&!xg(e,t))return s.jsx(hg,{item:e,viewerType:t});const a=e.type==="table"?{...e,text:gg(e),payload:{...e.payload||{},layout_table:!0}}:e,o=e.type==="section"||e.type==="heading";return s.jsx("div",{className:"native-block",dir:"auto",style:{...n,marginBottom:o?10:8,padding:o?"7px 9px":"6px 8px",borderRadius:6,fontSize:o?14:13,fontWeight:o?650:400,lineHeight:1.45},title:e.change_type,children:s.jsx(mg,{item:a,side:r})})}function mg({item:e,side:t}){var a,o;const r=e.token_diff||[];return e.highlight==="modified"&&Array.isArray(r)&&r.some(i=>i.op&&i.op!=="equal")?s.jsx("span",{dir:"auto",children:r.map((i,l)=>{const c=i.op;if(c==="delete"&&t!=="base"||c==="insert"&&t==="base")return null;const u=c==="equal"||t==="base"?i.text_a:i.text_b;if(!u)return null;let f="";return c==="delete"&&(f="native-token-delete"),c==="insert"&&(f="native-token-insert"),c==="replace"&&(f=t==="base"?"native-token-replace-base":"native-token-replace-target"),s.jsxs(Ur.Fragment,{children:[l>0?" ":"",s.jsx("span",{className:`native-token ${f}`,dir:"auto",children:u})]},l)})}):s.jsx("span",{dir:"auto",children:e.text||((a=e.payload)==null?void 0:a.text)||((o=e.payload)==null?void 0:o.layout_text)||e.path||"-"})}function hg({item:e,viewerType:t}){var i;const r=Qi(e),n=e.rows||[],a=((i=e.payload)==null?void 0:i.table_title)||e.text||"Table",o=t==="spreadsheet";return s.jsxs("div",{className:"native-block",dir:"auto",style:{...qs(e.highlight),marginBottom:14,padding:10,borderRadius:7},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:10,alignItems:"baseline",flexWrap:"wrap",marginBottom:7},children:[s.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--text-primary)"},children:a}),s.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)"},children:[n.length," row",n.length===1?"":"s"]})]}),s.jsx("div",{className:"native-table-wrap dl-scrollbar",children:s.jsxs("table",{className:`native-table ${o?"spreadsheet":""}`,style:{fontSize:12},children:[s.jsx("thead",{children:s.jsx("tr",{style:{background:"var(--surface-sunken)",color:"var(--text-primary)"},children:r.map((l,c)=>{const u=String(l||"").toLowerCase(),f=c>0&&(u.includes("pcv")||u.includes("pcb")||u.includes("model")||u.includes("spec")||String(l||"").length<=4||r.length>=6&&String(l||"").length<=12);return s.jsx("th",{dir:"auto",className:f?"vertical-th":"",style:f?{...ar,verticalAlign:"bottom"}:ar,children:f?s.jsx("span",{className:"vertical-th-text",children:l}):l},l)})})}),s.jsx("tbody",{children:n.map(l=>{const c=qs(l.highlight,!0);return s.jsx("tr",{title:l.change_type,style:{background:c.background},children:r.map(u=>{var f;return s.jsx("td",{dir:"auto",style:{...Or,borderLeft:c.borderLeft},children:dr((f=Ki(l.values))==null?void 0:f[u])},u)})},l.id)})})]})})]})}function Qi(e){return(Array.isArray(e==null?void 0:e.header)?e.header:[]).map(r=>String(r||"").trim()).filter(r=>r&&!hr(r))}function Ki(e){return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).map(([t,r])=>[String(t||"").trim(),r]).filter(([t])=>t&&!hr(t)))}function gg(e){const r=(Array.isArray(e==null?void 0:e.rows)?e.rows:[]).map(n=>{const a=Ki(n.values);return Object.values(a).map(i=>dr(i)).filter(i=>i&&i!=="-").join(" / ")||n.text||""}).filter(Boolean);return r.length?r.join(`
`):(e==null?void 0:e.text)||Qi(e).join(" / ")||"Document text"}function xg(e,t){var v;if(((v=e==null?void 0:e.payload)==null?void 0:v.source_format)==="docx"||t!=="document")return!1;const r=Array.isArray(e==null?void 0:e.header)?e.header:[],n=Qi(e),a=Array.isArray(e==null?void 0:e.rows)?e.rows:[],o=r.some(x=>hr(x)),i=a.flatMap(x=>Object.values(Ki(x.values||{})).map(b=>String(b||"").trim()).filter(Boolean));if(o&&n.length<=2)return!0;if(!a.length||!i.length)return!1;const c=i.filter(x=>x.length>70||x.split(/\s+/).length>=10).length/Math.max(1,i.length),f=i.filter(x=>/[\u0600-\u06ff]/.test(x)&&/[A-Za-z]/.test(x)).length/Math.max(1,i.length),g=n.filter(x=>/feature|description|item|name|order|code|part|model|price|amount|status|date|term|rent|fee/i.test(x)).length/Math.max(1,n.length);return f>=.2&&g<.35||a.length<=6&&c>=.45&&g<.35}function vg({columns:e,rows:t}){if(e=(e||[]).filter(n=>!hr(n)),!e.length||!(t!=null&&t.length))return null;const r=Kh(e.length,420,920);return s.jsx("div",{className:"dl-scrollbar table-scroll-frame",style:{marginTop:12},children:s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12,minWidth:r},children:[s.jsx("thead",{children:s.jsx("tr",{style:{background:"#f2eee6"},children:e.map(n=>s.jsx("th",{title:n,style:ar,dir:"auto",children:n},n))})}),s.jsx("tbody",{children:t.map((n,a)=>s.jsx("tr",{children:e.map(o=>{var i;return s.jsx("td",{style:Or,dir:"auto",children:dr(((i=n==null?void 0:n.values)==null?void 0:i[o])??(n==null?void 0:n[o]))},o)})},a))})]})})}function or({columns:e,rows:t}){const r=(e||[]).filter(n=>!hr(n));return s.jsx("div",{className:"dl-scrollbar",style:{overflowX:"auto"},children:s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13,minWidth:780},children:[s.jsx("thead",{children:s.jsx("tr",{style:{background:"#1f2937",color:"white"},children:r.map(n=>s.jsx("th",{dir:"auto",style:{...ar,padding:"10px 12px",borderBottom:"1px solid #384250",color:"white"},children:n},n))})}),s.jsx("tbody",{children:t.slice(0,200).map((n,a)=>s.jsx("tr",{children:r.map(o=>s.jsx("td",{dir:"auto",style:Or,children:dr(n[o])},o))},a))})]})})}function yg({rows:e}){return e!=null&&e.length?s.jsx("div",{className:"dl-scrollbar",style:{overflowX:"auto",marginTop:10},children:s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13,minWidth:640},children:[s.jsx("thead",{children:s.jsxs("tr",{style:{background:"#f2eee6",color:"#344054"},children:[s.jsx("th",{style:ar,dir:"auto",children:"Field"}),s.jsx("th",{style:ar,dir:"auto",children:"Before"}),s.jsx("th",{style:ar,dir:"auto",children:"After"})]})}),s.jsx("tbody",{children:e.map((t,r)=>s.jsxs("tr",{children:[s.jsx("td",{style:Or,dir:"auto",children:t.field||t.column||t.name||"-"}),s.jsx("td",{style:{...Or,color:G.DELETED.text},dir:"auto",children:dr(t.before??t.base??t.old)}),s.jsx("td",{style:{...Or,color:G.ADDED.text},dir:"auto",children:dr(t.after??t.target??t.new)})]},r))})]})}):null}function wg({runId:e,meta:t,tab:r,setTab:n}){return s.jsxs(s.Fragment,{children:[s.jsx(kg,{meta:t}),s.jsx(jg,{tab:r,setTab:n}),s.jsxs("main",{style:{...dt,padding:12},children:[r==="overview"&&s.jsx(Sg,{runId:e,meta:t}),r==="tables"&&s.jsx(_g,{runId:e}),r==="text"&&s.jsx(Eg,{runId:e}),r==="json"&&s.jsx(Ng,{runId:e,meta:t})]}),s.jsxs("section",{className:"workspace-surface extraction-query-surface",style:{marginTop:12},children:[s.jsx("div",{className:"surface-title-row",children:s.jsxs("div",{children:[s.jsx("h3",{children:"Ask This Extraction"}),s.jsx("p",{children:"Search the extracted text, tables, headings, and page evidence from this document."})]})}),s.jsx(bg,{runId:e})]})]})}function bg({runId:e}){const[t,r]=y.useState(""),[n,a]=y.useState([]),[o,i]=y.useState(!1),l=async()=>{const c=t.trim();if(!c||o)return;const u=`extract-user-${Date.now()}`,f=`extract-answer-${Date.now()}`;a(p=>[...p,{id:u,role:"user",text:c,timestamp:new Date().toLocaleTimeString()}]),r(""),i(!0);try{const p=await fetch(`${B}/extract-runs/${e}/query`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:c,mode:"fast"})});if(!p.ok)throw new Error(await ee(p));const g=await p.json();a(v=>{var x;return[...v,{id:f,role:"assistant",text:g.answer||`Found ${((x=g.rows)==null?void 0:x.length)||0} matching passages.`,rows:g.rows||[],columns:g.columns||["Page","Type","Path","Text","Score"],timestamp:new Date().toLocaleTimeString()}]})}catch(p){a(g=>[...g,{id:f,role:"assistant",text:ie(p),rows:[],timestamp:new Date().toLocaleTimeString(),isError:!0}])}finally{i(!1)}};return s.jsxs("section",{className:"query-workbench",children:[n.length===0?s.jsx(pr,{label:"Ask about clauses, tables, fields, dates, page content, or extracted values."}):s.jsx("div",{className:"query-chat-log",children:n.map(c=>{var u;return s.jsxs("article",{className:`query-message ${c.role}${c.isError?" error":""}`,children:[s.jsxs("div",{className:"query-message-meta",children:[s.jsx("span",{children:c.role==="user"?"You":"Extraction query"}),s.jsx("span",{children:c.timestamp})]}),s.jsx("div",{className:"query-message-text",dir:"auto",children:c.text}),((u=c.rows)==null?void 0:u.length)>0&&s.jsx("div",{className:"query-results-shell",style:{marginTop:10},children:s.jsx(or,{columns:c.columns,rows:c.rows})})]},c.id)})}),s.jsxs("div",{className:"query-composer",children:[s.jsx("textarea",{value:t,onChange:c=>r(c.target.value),onKeyDown:c=>{c.key==="Enter"&&!c.shiftKey&&(c.preventDefault(),l())},placeholder:"Ask about the extracted document...",disabled:o,rows:3}),s.jsx("div",{className:"query-composer-actions",children:s.jsx("button",{type:"button",className:"primary-action compact",onClick:l,disabled:o||!t.trim(),children:o?"Searching":"Ask"})})]})]})}function kg({meta:e}){var r,n;const t=e.summary||{};return s.jsxs("section",{style:{...dt,padding:12,display:"flex",gap:8,marginBottom:12,flexWrap:"wrap",alignItems:"center"},children:[s.jsx(je,{label:"Format",value:(e.source_format||"-").toUpperCase()}),s.jsx(je,{label:"Documents",value:((r=e.documents)==null?void 0:r.length)||t.document_count||1}),s.jsx(je,{label:"Coverage",value:typeof e.coverage=="number"?`${e.coverage.toFixed(1)}%`:"-"}),s.jsx(je,{label:"Quality",value:t.quality||"-"}),s.jsx(je,{label:"Tables",value:t.table_count||0}),s.jsx(je,{label:"Blocks",value:Object.values(t.block_counts||{}).reduce((a,o)=>a+Number(o||0),0)}),s.jsx(je,{label:"Pages",value:e.n_pages||e.native_pages||0}),Number(((n=e.ai_usage)==null?void 0:n.total_tokens)||0)>0&&s.jsx(je,{label:"AI tokens",value:`${vt(e.ai_usage.total_tokens)} (${vt(e.ai_usage.calls||0)} calls)`})]})}function jg({tab:e,setTab:t}){const r=[["overview","Extraction overview"],["tables","Extracted tables"],["text","Text blocks"],["json","Structured JSON"]];return s.jsx("nav",{style:{display:"flex",gap:4,borderBottom:"1px solid #d8d0c3",marginBottom:12,overflowX:"auto"},children:r.map(([n,a])=>{const o=e===n;return s.jsx("button",{onClick:()=>t(n),style:{padding:"10px 14px",background:o?"#1f2937":"transparent",color:o?"white":"#344054",border:o?"1px solid #1f2937":"1px solid transparent",borderRadius:"8px 8px 0 0",cursor:"pointer",fontWeight:600,whiteSpace:"nowrap"},children:a},n)})})}function Sg({runId:e,meta:t}){const r=t.summary||{},n=t.ai_analysis,a=(n==null?void 0:n.result)||null;return s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12,flexWrap:"wrap",marginBottom:12},children:[s.jsxs("div",{children:[s.jsx("h2",{style:{margin:0,fontSize:18,fontWeight:650},dir:"auto",children:t.label||"Extracted document"}),s.jsx("p",{style:{margin:"6px 0 0",color:"#667085",fontSize:13},dir:"auto",children:r.message||"Extraction complete."})]}),s.jsx("button",{onClick:()=>{window.location.href=`${B}/extract-runs/${e}/json`},style:Uh(!1),children:"Download JSON"})]}),s.jsxs("div",{className:"report-metrics",style:{display:"grid",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",gap:10,marginBottom:12},children:[s.jsx(da,{label:"Extraction coverage",value:typeof t.coverage=="number"?`${t.coverage.toFixed(1)}%`:"-"}),s.jsx(da,{label:"Tables detected",value:r.table_count||0}),s.jsx(da,{label:"Table rows",value:r.table_row_count||0}),s.jsx(da,{label:"Image/OCR blocks",value:r.figure_count||0})]}),s.jsxs("div",{style:{...dt,padding:14,boxShadow:"none",marginBottom:12},children:[s.jsx("div",{style:{fontWeight:650,marginBottom:8},children:"Block breakdown"}),s.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[Object.entries(r.block_counts||{}).map(([o,i])=>s.jsx(je,{label:o.replace("_"," "),value:i},o)),Object.keys(r.block_counts||{}).length===0&&s.jsx("span",{style:{color:"#667085"},children:"No block statistics available."})]})]}),n&&s.jsxs("div",{style:{...dt,padding:14,boxShadow:"none"},children:[s.jsxs("div",{style:{fontWeight:650,marginBottom:8},children:["AI-assisted analysis ",n.available?"- available":"- unavailable"]}),!n.available&&s.jsx("div",{style:{color:G.DELETED.text},dir:"auto",children:normalizeErrorMessage(n.error)||"AI analysis was not generated."}),a&&s.jsxs("div",{style:{color:"#344054",lineHeight:1.5},children:[s.jsx("p",{style:{marginTop:0},dir:"auto",children:a.executive_summary||"AI analysis completed."}),Array.isArray(a.key_items)&&a.key_items.length>0&&s.jsx(or,{columns:["Item"],rows:a.key_items.slice(0,20).map(o=>({Item:typeof o=="string"?o:JSON.stringify(o)}))})]})]}),s.jsx(tg,{usage:t.ai_usage})]})}function da({label:e,value:t}){return s.jsxs("div",{style:{background:"#fbfaf6",border:"1px solid #ded6c8",borderRadius:8,padding:12},children:[s.jsx("div",{style:{fontSize:12,color:"#667085",fontWeight:600},children:e}),s.jsx("div",{style:{marginTop:4,fontSize:22,color:"#1f2937",fontWeight:650},children:t})]})}function _g({runId:e}){const[t,r]=y.useState({loading:!0,error:"",tables:[]});return y.useEffect(()=>{let n=!1;return r({loading:!0,error:"",tables:[]}),fetch(`${B}/extract-runs/${e}/tables?include_rows=true`).then(async a=>{if(!a.ok)throw new Error(await ee(a));return a.json()}).then(a=>{n||r({loading:!1,error:"",tables:a.tables||[]})}).catch(a=>{n||r({loading:!1,error:ie(a),tables:[]})}),()=>{n=!0}},[e]),t.loading?s.jsx(qn,{label:"Loading extracted tables..."}):t.error?s.jsx(Gi,{message:t.error}):t.tables.length?s.jsx("div",{style:{display:"grid",gap:12},children:t.tables.map(n=>s.jsxs("div",{style:{...dt,padding:12,boxShadow:"none"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12,flexWrap:"wrap",marginBottom:8},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:650},dir:"auto",children:n.display_name||n.title||"Detected table"}),s.jsxs("div",{style:{color:"#667085",fontSize:13,marginTop:3},dir:"auto",children:[n.page_label," · ",n.n_columns," columns · ",n.n_rows," rows · header quality ",Math.round((n.header_quality||0)*100),"%",n.extraction_confidence?` · extraction ${Math.round(n.extraction_confidence*100)}%`:""]})]}),s.jsx("code",{children:String(n.id||"").slice(0,8)})]}),Array.isArray(n.quality_warnings)&&n.quality_warnings.length>0&&s.jsxs("div",{style:{color:"#8a5a00",fontSize:13,marginBottom:8},dir:"auto",children:["Review note: ",n.quality_warnings.slice(0,2).join(" ")]}),s.jsxs("div",{style:{color:"#475467",fontSize:13,marginBottom:8},dir:"auto",children:["Columns: ",(n.columns||[]).slice(0,12).join(" | ")||"No columns detected"]}),s.jsx(vg,{columns:n.columns||[],rows:n.rows||n.row_preview||[]})]},n.id))}):s.jsx(pr,{label:"No tables were detected in this document."})}function Eg({runId:e}){const[t,r]=y.useState({loading:!0,error:"",blocks:[]});if(y.useEffect(()=>{let a=!1;return r({loading:!0,error:"",blocks:[]}),fetch(`${B}/extract-runs/${e}/blocks?limit=1000`).then(async o=>{if(!o.ok)throw new Error(await ee(o));return o.json()}).then(o=>{a||r({loading:!1,error:"",blocks:o.blocks||[]})}).catch(o=>{a||r({loading:!1,error:ie(o),blocks:[]})}),()=>{a=!0}},[e]),t.loading)return s.jsx(qn,{label:"Loading extracted text blocks..."});if(t.error)return s.jsx(Gi,{message:t.error});const n=t.blocks.filter(a=>a.text||a.type==="table").slice(0,500).map(a=>({Page:a.page_number,Type:a.type,Path:a.path,Text:Re(a.text||JSON.stringify(a.payload||{}),700)}));return n.length?s.jsx(or,{columns:["Page","Type","Path","Text"],rows:n}):s.jsx(pr,{label:"No extracted text blocks were returned."})}function Ng({runId:e,meta:t}){const[r,n]=y.useState({loading:!0,error:"",data:null});if(y.useEffect(()=>{let p=!1;return n({loading:!0,error:"",data:null}),Wh(e).then(g=>{p||n({loading:!1,error:"",data:g})}).catch(g=>{p||n({loading:!1,error:ie(g),data:null})}),()=>{p=!0}},[e]),r.loading)return s.jsx(qn,{label:"Building structured JSON preview..."});if(r.error)return s.jsx(Gi,{message:r.error});const a=r.data||{},o=a.tables||[],i=a.pages||[],l=a.content||i.flatMap(p=>p.content||[]),c=a.document_summary||{},u=c.extraction_quality||{},f=l.map(p=>p.inferred_record).filter(Boolean);return s.jsxs("div",{style:{display:"grid",gap:12},children:[s.jsxs("div",{style:{...dt,padding:12,boxShadow:"none"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12,alignItems:"flex-start",flexWrap:"wrap"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:650,marginBottom:8},dir:"auto",children:"Business extraction summary"}),s.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",color:"#344054",fontSize:13},children:[s.jsxs("span",{style:vr,children:["Document: ",c.label||t.label||"uploaded file"]}),s.jsxs("span",{style:vr,children:["Type: ",c.source_type||t.source_format||"document"]}),s.jsxs("span",{style:vr,children:["Template: ",c.detected_template||"generic document"]}),s.jsxs("span",{style:vr,children:["Quality: ",u.grade||"not rated"]}),Number.isFinite(u.score)&&s.jsxs("span",{style:vr,children:["Score: ",Math.round(u.score*100),"%"]}),c.detected_language&&s.jsxs("span",{style:vr,children:["Script: ",c.detected_language]})]})]}),s.jsx("button",{onClick:()=>{window.location.href=`${B}/extract-runs/${e}/json`},style:Bh(),children:"Download clean JSON"})]}),Array.isArray(u.warnings)&&u.warnings.length>0&&s.jsx("div",{style:{color:"#8a5a00",fontSize:13,marginTop:8,lineHeight:1.4},dir:"auto",children:u.warnings.slice(0,3).map(p=>p.message||p).join(" ")})]}),s.jsxs("div",{style:{...dt,padding:12,boxShadow:"none"},children:[s.jsx("div",{style:{display:"flex",justifyContent:"space-between",gap:10,alignItems:"center",marginBottom:8},children:s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:650},children:"Document-order extracted text"}),s.jsxs("div",{style:{color:"#667085",fontSize:13,marginTop:3},children:[l.length," text block(s), ",f.length," inferred record(s), ",o.length," table(s), ",i.length," page(s)"]})]})}),l.length>0?s.jsx(or,{columns:["Page","Type","Path","Text","Inferred record"],rows:l.slice(0,500).map(p=>({Page:p.page,Type:p.type,Path:p.path,Text:Re(p.text,900),"Inferred record":p.inferred_record?Nc(p.inferred_record.values):""}))}):s.jsx(pr,{label:"No ordered text content was returned. Check the Text blocks tab."})]}),f.length>0&&s.jsxs("div",{style:{...dt,padding:12,boxShadow:"none"},children:[s.jsx("div",{style:{fontWeight:650,marginBottom:8},children:"Inferred business records"}),s.jsx(or,{columns:["Page","Values","Source text","Citation"],rows:f.slice(0,120).map(p=>({Page:p.page,Values:Nc(p.values),"Source text":Re(p.source_text,700),Citation:p.citation}))})]}),o.length>0&&s.jsxs("div",{style:{...dt,padding:12,boxShadow:"none"},children:[s.jsx("div",{style:{fontWeight:650,marginBottom:8},children:"Extracted tables"}),s.jsx(or,{columns:["title","page","area","row_count","columns"],rows:o.slice(0,30).map(p=>({title:p.title,page:p.page,area:p.area,row_count:p.row_count,columns:(p.columns||[]).join(" | ")}))})]}),s.jsxs("div",{style:{...dt,padding:12,boxShadow:"none"},children:[s.jsx("div",{style:{fontWeight:650,marginBottom:8},children:"Clean JSON preview"}),s.jsx("pre",{className:"dl-scrollbar",style:{margin:0,maxHeight:360,overflow:"auto",background:"#fbfaf6",border:"1px solid #e0d8ca",borderRadius:8,padding:12,fontSize:12,lineHeight:1.45,whiteSpace:"pre-wrap"},children:JSON.stringify({document_summary:a.document_summary,content:l.slice(0,30),tables:o.slice(0,10)},null,2)})]})]})}function Gi({message:e}){return s.jsx("div",{style:{marginTop:16,border:"1px solid #f0b4b4",background:"#fff5f5",color:"#9f1d1d",borderRadius:8,padding:13,fontSize:14,fontWeight:600,lineHeight:1.45},children:e})}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gp=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var zg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=y.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:a="",children:o,iconNode:i,...l},c)=>y.createElement("svg",{ref:c,...zg,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:gp("lucide",a),...l},[...i.map(([u,f])=>y.createElement(u,f)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=(e,t)=>{const r=y.forwardRef(({className:n,...a},o)=>y.createElement(Pg,{ref:o,iconNode:t,className:gp(`lucide-${Cg(e)}`,n),...a}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=Nt("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=Nt("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=Nt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=Nt("FileOutput",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2",key:"1vk7w2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6",key:"1jink5"}],["path",{d:"m5 11-3 3",key:"1dgrs4"}],["path",{d:"m5 17-3-3h10",key:"1mvvaf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=Nt("GitCompare",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=Nt("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=Nt("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=Nt("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=Nt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);function Og(){return s.jsxs("div",{className:"altrai-wordmark","aria-label":"Altrai",children:[s.jsx("span",{children:"Altr"}),s.jsx("span",{className:"accent",children:"ai"})]})}const Fg=[{label:"AI Document Intelligence",items:[{key:"compare",label:"Compare",icon:Rg},{key:"extract",label:"Extract",icon:Ag},{key:"jobs",label:"Work History",icon:Lg}]},{label:"Administration",items:[{key:"admin",label:"Admin Studio",icon:Mg,title:"Use cases, datasets, and access policies"}]},{label:"AI Agents",items:[{key:"agents",label:"Coming soon",icon:Tg,disabled:!0,title:"Future skills and multi-agent workflows"}]}];function Ug({workspace:e,onNavigate:t,collapsed:r=!1}){return s.jsx("nav",{className:"workspace-nav","aria-label":"Workspace navigation",children:Fg.map(n=>s.jsxs("div",{className:"workspace-nav-group",children:[!r&&s.jsx("div",{className:"workspace-nav-label",children:n.label}),n.items.map(a=>{const o=e===a.key;return s.jsxs("button",{type:"button",className:`workspace-nav-item${o?" active":""}`,onClick:()=>!a.disabled&&t(a.key),disabled:a.disabled,title:r?a.title||a.label:a.title,children:[s.jsx(a.icon,{className:"workspace-nav-icon","aria-hidden":"true"}),!r&&s.jsx("span",{className:"workspace-nav-text",children:a.label})]},`${n.label}-${a.label}-${a.key}`)})]},n.label))})}const xp=y.createContext(null),Lc="altrai_theme";function Bg({children:e}){const[t,r]=y.useState(()=>typeof window>"u"?"system":window.localStorage.getItem(Lc)||"system");y.useEffect(()=>{document.documentElement.dataset.theme=t,window.localStorage.setItem(Lc,t)},[t]);const n=y.useMemo(()=>({theme:t,setTheme:r}),[t]);return s.jsx(xp.Provider,{value:n,children:e})}function vp(){const e=y.useContext(xp);if(!e)throw new Error("useTheme must be used within ThemeProvider");return e}const Wg=[["system","Auto"],["light","Light"],["dark","Dark"]];function Vg({collapsed:e=!1}){const{theme:t,setTheme:r}=vp();return s.jsxs("footer",{className:"user-footer",children:[s.jsx("div",{className:"user-avatar","aria-hidden":"true",children:"N"}),!e&&s.jsxs("div",{className:"user-meta",children:[s.jsx("strong",{children:"Nithin"}),s.jsx("span",{children:"platform_admin"})]}),!e&&s.jsx("div",{className:"rail-theme-toggle","aria-label":"Theme selector",children:Wg.map(([n,a])=>s.jsx("button",{type:"button",className:t===n?"active":"",onClick:()=>r(n),children:a},n))})]})}const qg={jobs:"Work History",compare:"Compare",extract:"Extract",agents:"AI Agents",admin:"Admin Studio"},Hg={compare:{label:"Comparison History",historyKind:"comparison"},extract:{label:"Extraction History",historyKind:"extraction"}};function Qg({workspace:e,runId:t,onNavigate:r,onDownloadReport:n,children:a}){const[o,i]=y.useState(!1),{theme:l}=vp(),c=Hg[e];return s.jsxs("div",{className:`workspace-shell theme-${l}${o?" collapsed":""}`,children:[s.jsxs("aside",{className:"workspace-sidebar",children:[s.jsxs("div",{className:"workspace-brand",children:[s.jsx("div",{className:"workspace-brand-copy",children:s.jsx(Og,{})}),s.jsx("button",{type:"button",className:"workspace-collapse-button",onClick:()=>i(u=>!u),"aria-label":o?"Expand navigation":"Collapse navigation",title:o?"Expand navigation":"Collapse navigation",children:o?s.jsx($g,{size:16,strokeWidth:1.5}):s.jsx(Dg,{size:16,strokeWidth:1.5})})]}),s.jsx(Ug,{workspace:e,onNavigate:r,collapsed:o}),s.jsx(Vg,{collapsed:o})]}),s.jsxs("section",{className:"workspace-main",children:[s.jsxs("header",{className:"workspace-topbar",children:[s.jsx("div",{children:s.jsx("h1",{children:qg[e]||"Workspace"})}),s.jsxs("div",{className:"workspace-actions",children:[t&&s.jsx("button",{type:"button",className:"workspace-primary-action",onClick:n,children:"Export report"}),c&&s.jsx("button",{type:"button",className:"workspace-secondary-action",onClick:()=>r("jobs",{historyKind:c.historyKind}),children:c.label})]})]}),s.jsx("div",{className:"workspace-content",children:a})]})]})}const Kg=[["platform_admin","Platform Admin"],["business_unit_admin","Business Unit Admin"],["reviewer","Reviewer"],["submitter","Submitter"],["viewer","Viewer"]],Ic={supplier:"",family_name:"",domain:"generic",description:"",use_case_type:"comparison",expected_formats:["pdf","docx"],sample_plan:"",onboarding_notes:"",learning_mode:"ai_assisted_bootstrap",allowed_roles:[]},Gg=[["pdf","PDF"],["docx","Word"],["xlsx","Excel"],["csv","CSV/TSV"],["image","Scanned image"]],Jg=[["deterministic_first","Deterministic first"],["ai_assisted_bootstrap","AI-assisted bootstrap"],["manual_profile","Manual profile"]],Yg=()=>({id:crypto.randomUUID(),baseline:null,revised:null});function Xg(){var sl,il,ll,cl;const[e,t]=y.useState([]),[r,n]=y.useState(""),[a,o]=y.useState(null),[i,l]=y.useState(Ic),[c,u]=y.useState({supplier:"",family_name:"",domain:"generic",description:""}),[f,p]=y.useState(""),[g,v]=y.useState([]),[x,b]=y.useState(""),[S,m]=y.useState({use_case_type:"comparison",expected_formats:["pdf","docx"],sample_plan:"",onboarding_notes:"",learning_mode:"ai_assisted_bootstrap"}),[d,h]=y.useState({baseline:null,revised:null,variationPairs:[]}),[w,_]=y.useState(!0),[C,j]=y.useState(null),[N,T]=y.useState(""),[P,L]=y.useState(null),[ce,Oe]=y.useState(null),[Ct,Ee]=y.useState(null),[Xe,Ne]=y.useState(0),[z,R]=y.useState({baseline:null,revised:null,variations:[]}),[I,Q]=y.useState([]),[oe,ht]=y.useState(!0),[K,ge]=y.useState(""),[M,$]=y.useState(""),[Z,U]=y.useState(""),[q,Ce]=y.useState(""),[it,Yi]=y.useState(!0),[Xi,kp]=y.useState(!0),[Zi,jp]=y.useState(!1),[el,Sp]=y.useState(!1),gr=()=>({"Content-Type":"application/json","X-User-Role":window.sessionStorage.getItem("simulated_role")||"platform_admin"}),Xr=async()=>{ht(!0),$("");try{const k=await yr("/admin/datasets",{headers:gr()});t(k.datasets||[])}catch(k){$(ie(k))}finally{ht(!1)}};y.useEffect(()=>{Xr(),tl()},[]),y.useEffect(()=>{if(K!=="analyze"&&K!=="create")return;const k=Date.now();Ne(0);const A=window.setInterval(()=>{Ne(Math.floor((Date.now()-k)/1e3))},1e3);return()=>window.clearInterval(A)},[K]);const tl=async()=>{try{const k=await yr("/ai-health");j(k);const A=(k.models||[]).find(O=>O.kind==="chat"&&O.configured);A!=null&&A.id&&T(A.id)}catch{j({ok:!1,models:[],message:"AI model status is unavailable."})}},Hn=async k=>{var A;n(k),$(""),U("");try{const O=await yr(`/admin/datasets/${k}`,{headers:gr()});o(O),u({supplier:O.supplier||"",family_name:O.family_name||"",domain:O.domain||"generic",description:O.description||""}),p(O.prompt_guidelines||""),v(O.allowed_roles||[]),m({use_case_type:O.use_case_type||"comparison",expected_formats:O.expected_formats||["pdf","docx"],sample_plan:O.sample_plan||"",onboarding_notes:O.onboarding_notes||"",learning_mode:O.learning_mode||"deterministic_first"}),b(JSON.stringify(((A=O.template_profile)==null?void 0:A.column_rules)||[],null,2)),await _p(k)}catch(O){$(ie(O))}},_p=async k=>{try{const A=await yr(`/admin/datasets/${k}/documents`,{headers:gr()});Q(A.documents||[])}catch{Q([])}},Ep=async k=>{k.preventDefault(),ge("create"),$(""),U("");const A=Qo(d);Ee({status:"running",stage:"create",submitted:A,startedAt:new Date().toISOString(),events:["Saving use case metadata"],error:""});try{const O=await ux("/admin/datasets",{method:"POST",headers:gr(),body:JSON.stringify(i)});let xe="",de="";Ee(V=>({...V||{},status:"success",stage:"saved",datasetId:O.id,events:[...(V==null?void 0:V.events)||[],"Use case metadata saved"]})),U("Use case created. Opening saved profile.");try{await Xr(),O.id&&await Hn(O.id)}catch{U("Use case created. Refresh the use case list if it does not appear immediately.")}if(O.id&&pa(d)){Ee(V=>({...V||{},stage:"samples",events:[...(V==null?void 0:V.events)||[],"Learning attached samples"]}));try{await rl(O.id,d,i.onboarding_notes,i.learning_mode==="ai_assisted_bootstrap"),xe=" Sample documents learned and model profile bootstrapped.",Ee(V=>({...V||{},events:[...(V==null?void 0:V.events)||[],"Sample learning completed"]}))}catch(V){de=` Sample learning did not finish: ${ie(V)}`,Ee(zt=>({...zt||{},sampleWarning:de,events:[...(zt==null?void 0:zt.events)||[],"Sample learning needs attention"]}))}}Ee(V=>({...V||{},status:"success",stage:"done",datasetId:O.id,sampleWarning:de,events:[...(V==null?void 0:V.events)||[],"Ready for refinement"],finishedAt:new Date().toISOString()})),U(`Use case created.${xe||de||" You can attach or relearn samples from the saved use case."}`),l(Ic),h({baseline:null,revised:null,variationPairs:[]}),L(null)}catch(O){const xe=ie(O);$(xe),Ee(de=>({...de||{},status:"failed",finishedAt:new Date().toISOString(),events:[...(de==null?void 0:de.events)||[],"Create failed"],error:xe}))}finally{ge("")}},Np=k=>{try{const A=Fc(x);if(A.some(xe=>xe.role===k)){U(`A rule for label '${k}' already exists.`);return}const O=[...A,{pattern:`.*${k.toLowerCase().replace(/_/g,".*")}.*`,role:k}];b(JSON.stringify(O,null,2)),U(`Added suggested mapping rule for '${k}'. Click 'Save profile settings' to apply.`)}catch{$("Column rules JSON is malformed. Please fix it before adding labels.")}},Cp=async()=>{if(r){ge("save"),$(""),U("");try{await yr(`/admin/datasets/${r}`,{method:"PUT",headers:gr(),body:JSON.stringify({prompt_guidelines:f,allowed_roles:g,column_rules:Fc(x),...c,...S})}),U("Use case settings saved."),await Xr(),await Hn(r)}catch(k){$(ie(k))}finally{ge("")}}},zp=async k=>{if(k.preventDefault(),!(!r||!pa(z))){ge("bootstrap"),$(""),U("");try{await rl(r,z,S.onboarding_notes||"",S.learning_mode==="ai_assisted_bootstrap"),U("Sample documents learned and model profile updated."),R({baseline:null,revised:null,variations:[]}),await Hn(r)}catch(A){$(ie(A))}finally{ge("")}}},rl=async(k,A,O,xe)=>{const de=new FormData;A.baseline&&de.append("baseline",A.baseline),A.revised&&de.append("revised",A.revised),vo(A).forEach(zt=>de.append("variations",zt)),de.append("notes",O||""),de.append("use_llm",String(xe));const V=await Pp(k,de);if(!V.ok)throw new Error(await ee(V));return V.json()},Pp=async(k,A)=>{const O=()=>{const V=new FormData;for(const[zt,Lp]of A.entries())V.append(zt,Lp);return V},xe=V=>fetch(`${B}${V}`,{method:"POST",headers:{"X-User-Role":window.sessionStorage.getItem("simulated_role")||"platform_admin"},body:O()}),de=await xe(`/admin/datasets/${k}/samples`);return de.status!==404?de:xe(`/api/admin/datasets/${k}/samples`)},Tp=async()=>{if(pa(d)){if(w&&!N){$("Select a configured AI model before running AI-assisted sample analysis.");return}ge("analyze"),$(""),U(""),L(null),Oe({status:"running",mode:w?"ai":"deterministic",model:w?N:"",submitted:Qo(d),startedAt:new Date().toISOString(),events:["Preparing upload context"],error:""});try{const k=await rx({files:d,form:i,useAiAnalysis:w,selectedModel:N});if(!k.ok)throw new Error(await ee(k));const A=await k.json(),O=A.suggested_dataset||{};L(A),Oe(xe=>({...xe||{},status:"success",finishedAt:new Date().toISOString(),backendUsage:ex(A),model:A.selected_model||N,events:[...(xe==null?void 0:xe.events)||[],"Sample structure analyzed","Metadata suggestions generated"]})),l({...i,...O,allowed_roles:i.allowed_roles||[],learning_mode:w?"ai_assisted_bootstrap":"deterministic_first"}),U(w?"Sample analysis complete. Review the suggested use case model before creating it.":"Deterministic sample scan complete. Review the suggested use case model before creating it.")}catch(k){const A=ie(k);$(A),Oe(O=>({...O||{},status:"failed",finishedAt:new Date().toISOString(),events:[...(O==null?void 0:O.events)||[],"Analysis failed"],error:A}))}finally{ge("")}}},Dp=async()=>{if(!(!r||!a||!window.confirm(`Delete use case "${a.supplier} · ${a.family_name}"? This removes the saved model profile from Admin Studio.`))){ge("delete"),$(""),U("");try{await yr(`/admin/datasets/${r}`,{method:"DELETE",headers:gr()}),U("Use case deleted."),n(""),o(null),Q([]),await Xr()}catch(A){$(ie(A))}finally{ge("")}}},nl=Qo(d),Qn=pa(d),al=w&&!N,$p=!Qn||K==="analyze"||al,Ap=K==="analyze"?"Analyzing samples":w?"Analyze samples with AI":"Scan samples without AI",Rp=Qn?al?"Select an available chat model before AI analysis.":w?"Ready to send selected samples and context to the model.":"Ready for deterministic structure scan. No AI tokens will be used.":"Attach a baseline, revised, or variation sample to start.",ol=e.filter(k=>{const A=q.trim().toLowerCase();return A?[k.supplier,k.family_name,k.domain,k.use_case_type].filter(Boolean).join(" ").toLowerCase().includes(A):!0});return s.jsxs("section",{className:"admin-studio",children:[s.jsx("div",{className:"admin-intro",children:s.jsxs("div",{children:[s.jsx("h2",{children:"Use Case Onboarding"}),s.jsx("p",{children:"Create document models from representative samples. Use AI to suggest metadata, then keep governance and access settings with the saved use case."})]})}),Z&&s.jsx("div",{className:"admin-notice",children:Z}),M&&s.jsx(On,{message:M}),s.jsxs("div",{className:"admin-grid",children:[s.jsxs("aside",{className:"admin-panel",children:[s.jsxs("div",{className:"admin-panel-head",children:[s.jsxs("div",{children:[s.jsx("h3",{children:"Use Cases"}),s.jsxs("p",{children:[e.length," saved model",e.length===1?"":"s"]})]}),s.jsx("button",{type:"button",className:"ghost-action compact",onClick:Xr,children:"Refresh"})]}),s.jsx("input",{className:"admin-search",value:q,onChange:k=>Ce(k.target.value),placeholder:"Search supplier, family, domain"}),oe?s.jsx(qn,{label:"Loading use cases"}):e.length===0?s.jsx(pr,{label:"No use cases onboarded yet."}):ol.length===0?s.jsx(pr,{label:"No matching use cases."}):s.jsx("div",{className:"dataset-list",children:ol.map(k=>s.jsxs("button",{type:"button",className:`dataset-item${r===k.id?" active":""}`,onClick:()=>Hn(k.id),children:[s.jsx("strong",{children:k.supplier}),s.jsx("span",{children:k.family_name}),s.jsxs("small",{children:[k.use_case_type||"comparison"," · ",(k.expected_formats||[]).join(", ")||"formats"," · ",(k.allowed_roles||[]).length||"all"," roles"]})]},k.id))})]}),s.jsxs("main",{className:"admin-panel",children:[s.jsx(fa,{title:"Onboard Document Model",description:"Create a new model from identity, representative samples, and generated metadata.",open:it,onToggle:()=>Yi(k=>!k)}),it?s.jsxs("form",{className:"admin-form onboarding-flow compact-flow",onSubmit:Ep,children:[s.jsxs("section",{className:"admin-review-card",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Use Case Identity"}),s.jsx("p",{children:"Define the business model before uploading samples. Analysis will use these values as context instead of guessing from file names."})]}),s.jsxs("div",{className:"admin-review-grid",children:[s.jsxs("label",{children:["Supplier or entity",s.jsx("input",{value:i.supplier,required:!0,onChange:k=>l({...i,supplier:k.target.value}),placeholder:"Ford, HR, Finance, Legal"})]}),s.jsxs("label",{children:["Use case or family",s.jsx("input",{value:i.family_name,required:!0,onChange:k=>l({...i,family_name:k.target.value}),placeholder:"Order Guide, Policy, Contract"})]}),s.jsxs("label",{children:["Use case type",s.jsxs("select",{value:i.use_case_type,onChange:k=>l({...i,use_case_type:k.target.value}),children:[s.jsx("option",{value:"comparison",children:"Comparison"}),s.jsx("option",{value:"extraction",children:"Extraction"})]})]}),s.jsxs("label",{children:["Domain",s.jsxs("select",{value:i.domain,onChange:k=>l({...i,domain:k.target.value}),children:[s.jsx("option",{value:"generic",children:"Generic"}),s.jsx("option",{value:"automotive",children:"Automotive"}),s.jsx("option",{value:"legal",children:"Legal"}),s.jsx("option",{value:"financial",children:"Financial"}),s.jsx("option",{value:"hr",children:"HR"}),s.jsx("option",{value:"engineering",children:"Engineering"})]})]}),s.jsx("div",{className:"admin-wide-field",children:s.jsx(Oc,{value:i.expected_formats,onChange:k=>l({...i,expected_formats:k})})})]})]}),s.jsxs("section",{className:"sample-intake-card",children:[s.jsxs("div",{className:"sample-intake-head",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Training Samples"}),s.jsx("p",{children:"Attach one baseline and one revised document. Add variation pairs only when you have alternate layouts, suppliers, model years, or document structures."})]}),s.jsxs("label",{className:"ai-toggle",children:[s.jsx("input",{type:"checkbox",checked:w,onChange:k=>_(k.target.checked)}),"Analyze with AI model"]})]}),w?s.jsxs("div",{className:"model-select-row",children:[s.jsxs("label",{children:["Model deployment",s.jsx("select",{value:N,onChange:k=>T(k.target.value),children:Mc(C).length?Mc(C).map(k=>s.jsx("option",{value:k.id,children:k.label||k.id},k.id)):s.jsx("option",{value:"",children:"No configured chat model found"})})]}),s.jsx("button",{type:"button",className:"ghost-action compact",onClick:tl,children:"Refresh models"}),s.jsx("span",{children:C!=null&&C.ok?"Model connection verified.":(C==null?void 0:C.message)||"Checking AI model status."})]}):null,s.jsxs("div",{className:"sample-pair-grid",children:[s.jsxs("label",{children:["Baseline sample",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>{var A;return h({...d,baseline:((A=k.target.files)==null?void 0:A[0])||null})}})]}),s.jsxs("label",{children:["Revised sample",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>{var A;return h({...d,revised:((A=k.target.files)==null?void 0:A[0])||null})}})]})]}),s.jsx(ox,{value:d.variationPairs,onChange:k=>h({...d,variationPairs:k})}),s.jsxs("div",{className:"sample-actions analysis-action-row",children:[s.jsxs("button",{type:"button",className:"analyze-action-button",onClick:Tp,disabled:$p,"aria-busy":K==="analyze",children:[s.jsx("span",{children:Ap}),s.jsx("small",{children:w?N||"No model selected":"Deterministic mode"})]}),s.jsxs("div",{className:"analysis-readiness",children:[s.jsx("span",{className:Qn?"ready":"blocked",children:Qn?"Samples ready":"Waiting for samples"}),s.jsxs("span",{children:[Xa(nl.count)," file(s)"]}),s.jsx("span",{children:yp(nl.totalBytes)}),s.jsx("span",{children:w?"AI-assisted metadata":"No AI tokens"}),s.jsx("small",{children:Rp})]})]}),s.jsx(nx,{run:ce,elapsedSeconds:Xe,useAiAnalysis:w,selectedModel:N})]}),P?s.jsx(sx,{data:P}):null,s.jsxs("section",{className:"admin-review-card",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Generated Metadata"}),s.jsx("p",{children:"Analysis fills this section with document understanding, extraction focus, accuracy hints, and reviewer notes. You can also maintain it manually."})]}),s.jsxs("div",{className:"admin-review-grid",children:[s.jsxs("label",{children:["Content description",s.jsx("textarea",{value:i.description,onChange:k=>l({...i,description:k.target.value}),placeholder:"Describe the documents, expected fields, tables, identifiers, and business context."})]}),s.jsxs("label",{children:["Onboarding notes",s.jsx("textarea",{value:i.onboarding_notes,onChange:k=>l({...i,onboarding_notes:k.target.value}),placeholder:"Known pain points, nested headers, language handling, reviewer expectations, or accuracy targets."})]}),s.jsxs("label",{className:"admin-wide-field",children:["Sample strategy",s.jsx("textarea",{value:i.sample_plan,onChange:k=>l({...i,sample_plan:k.target.value}),placeholder:"How many baseline/revised/variation samples should represent this model?"})]})]})]}),s.jsx("button",{type:"submit",className:"primary-action",disabled:K==="create",children:K==="create"?"Creating":"Create use case"}),s.jsx(ax,{run:Ct,elapsedSeconds:Xe})]}):s.jsxs("div",{className:"admin-collapsed-summary",children:[s.jsx("span",{children:"New use-case onboarding is collapsed."}),s.jsx("button",{type:"button",className:"ghost-action compact",onClick:()=>Yi(!0),children:"Open"})]})]})]}),a?s.jsx("section",{className:"admin-panel",children:s.jsxs("div",{className:"admin-detail",children:[s.jsx(fa,{title:`Refine ${a.supplier} · ${a.family_name}`,description:"Edit the saved model profile, then save changes without creating a duplicate.",open:Xi,onToggle:()=>kp(k=>!k),meta:`${S.use_case_type} model · ${(S.expected_formats||[]).join(", ")}`,actions:s.jsxs("div",{className:"admin-detail-actions",children:[s.jsx("button",{type:"button",className:"primary-action compact",onClick:Cp,disabled:K==="save",children:K==="save"?"Saving":"Save changes"}),s.jsx("button",{type:"button",className:"danger-action compact",onClick:Dp,disabled:K==="delete",children:K==="delete"?"Deleting":"Delete"})]})}),Xi?s.jsxs("div",{className:"admin-edit-shell",children:[s.jsxs("section",{className:"admin-review-card",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Model Identity"}),s.jsx("p",{children:"These fields control how the use case appears in Compare, Extract, and Work History."})]}),s.jsxs("div",{className:"admin-review-grid",children:[s.jsxs("label",{children:["Supplier or entity",s.jsx("input",{value:c.supplier,required:!0,onChange:k=>u({...c,supplier:k.target.value})})]}),s.jsxs("label",{children:["Use case or family",s.jsx("input",{value:c.family_name,required:!0,onChange:k=>u({...c,family_name:k.target.value})})]}),s.jsxs("label",{children:["Domain",s.jsxs("select",{value:c.domain,onChange:k=>u({...c,domain:k.target.value}),children:[s.jsx("option",{value:"generic",children:"Generic"}),s.jsx("option",{value:"automotive",children:"Automotive"}),s.jsx("option",{value:"legal",children:"Legal"}),s.jsx("option",{value:"financial",children:"Financial"}),s.jsx("option",{value:"hr",children:"HR"}),s.jsx("option",{value:"engineering",children:"Engineering"})]})]}),s.jsxs("label",{children:["Use case type",s.jsxs("select",{value:S.use_case_type,onChange:k=>m({...S,use_case_type:k.target.value}),children:[s.jsx("option",{value:"comparison",children:"Comparison"}),s.jsx("option",{value:"extraction",children:"Extraction"})]})]}),s.jsxs("label",{className:"admin-wide-field",children:["Description",s.jsx("textarea",{value:c.description,onChange:k=>u({...c,description:k.target.value}),placeholder:"Describe the document family, business purpose, and expected reviewer outcome."})]})]})]}),s.jsxs("section",{className:"admin-review-card",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Learning Profile"}),s.jsx("p",{children:"Refine how this model should learn from samples and which formats it should accept."})]}),s.jsxs("div",{className:"admin-config-grid",children:[s.jsxs("label",{children:["Learning mode",s.jsx("select",{value:S.learning_mode,onChange:k=>m({...S,learning_mode:k.target.value}),children:Jg.map(([k,A])=>s.jsx("option",{value:k,children:A},k))})]}),s.jsx("div",{className:"admin-wide-field",children:s.jsx(Oc,{value:S.expected_formats,onChange:k=>m({...S,expected_formats:k})})}),s.jsxs("label",{children:["Sample strategy",s.jsx("textarea",{value:S.sample_plan,onChange:k=>m({...S,sample_plan:k.target.value}),placeholder:"How many samples or variations should represent this model?"})]}),s.jsxs("label",{children:["Onboarding notes",s.jsx("textarea",{value:S.onboarding_notes,onChange:k=>m({...S,onboarding_notes:k.target.value}),placeholder:"Business context, known table layouts, accuracy targets, and reviewer comments."})]})]})]}),s.jsxs("section",{className:"admin-review-card",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Extraction Guidance"}),s.jsx("p",{children:"Optional instructions and column mappings used by deterministic extraction and AI-assisted bootstrapping."})]}),s.jsxs("div",{className:"admin-config-grid",children:[s.jsxs("label",{children:["Prompt and extraction guidelines",s.jsx("textarea",{value:f,onChange:k=>p(k.target.value),placeholder:"Example: prioritize PCB thickness, PCV code changes, nested pricing rows, or legal obligations."})]}),s.jsxs("label",{children:["Column rules JSON",s.jsx("textarea",{className:"mono",value:x,onChange:k=>b(k.target.value)})]})]})]}),s.jsxs("section",{className:"admin-review-card",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Access"}),s.jsx("p",{children:"Choose the roles allowed to see and use this model. Leave empty for all configured users."})]}),s.jsx(ix,{value:g,onChange:v})]})]}):null,s.jsx(fa,{title:"Sample Learning",description:"Attach or relearn representative samples after the model has been created.",open:Zi,onToggle:()=>jp(k=>!k),meta:`${I.length} learned document${I.length===1?"":"s"}`}),Zi?s.jsxs("form",{className:"seed-form",onSubmit:zp,children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Sample Document Learning"}),s.jsx("p",{children:"For comparison models, upload a baseline, revised document, and any format/layout variations. The profile stores structure, page range, table signatures, stable keys, and reviewer guidance."})]}),s.jsxs("div",{className:"sample-upload-grid",children:[s.jsxs("label",{children:["Baseline sample",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>{var A;return R({...z,baseline:((A=k.target.files)==null?void 0:A[0])||null})}})]}),s.jsxs("label",{children:["Revised sample",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>{var A;return R({...z,revised:((A=k.target.files)==null?void 0:A[0])||null})}})]}),s.jsxs("label",{children:["Additional variations",s.jsx("input",{type:"file",multiple:!0,accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>R({...z,variations:Array.from(k.target.files||[])})})]})]}),s.jsx("button",{type:"submit",className:"primary-action",disabled:!z.baseline&&!z.revised&&z.variations.length===0||K==="bootstrap",children:K==="bootstrap"?"Learning":"Learn from samples"})]}):null,s.jsx(fa,{title:"Profile Insights",description:"Review learned samples, stable keys, column rules, and AI onboarding notes.",open:el,onToggle:()=>Sp(k=>!k)}),el?s.jsxs("div",{className:"admin-profile-grid",children:[s.jsx(lx,{profile:(sl=a.template_profile)==null?void 0:sl.sample_profile}),s.jsx(Ko,{title:"Sample Documents",items:I,labelKey:"label",valueKey:"page_count"}),s.jsx(cx,{profile:(il=a.template_profile)==null?void 0:il.ai_reasoning_profile,onAddLabel:Np}),s.jsx(Ko,{title:"Stable Keys",items:(ll=a.template_profile)==null?void 0:ll.stable_key_patterns,labelKey:"name",valueKey:"regex"}),s.jsx(Ko,{title:"Column Rules",items:(cl=a.template_profile)==null?void 0:cl.column_rules,labelKey:"role",valueKey:"pattern"})]}):null]})}):null]})}function pa(e){var t;return!!(e!=null&&e.baseline||e!=null&&e.revised||(t=e==null?void 0:e.variations)!=null&&t.length||vo(e).length)}function vo(e){const t=Array.isArray(e==null?void 0:e.variations)?e.variations:[],r=Array.isArray(e==null?void 0:e.variationPairs)?e.variationPairs.flatMap(n=>[n.baseline,n.revised].filter(Boolean)):[];return[...t,...r]}function Zg(e){return[e==null?void 0:e.baseline,e==null?void 0:e.revised,...vo(e)].filter(Boolean)}function Qo(e){const t=Zg(e),r=t.reduce((n,a)=>n+Number(a.size||0),0);return{count:t.length,totalBytes:r,totalMb:r/(1024*1024),estimatedInputTokens:Math.max(1,Math.ceil(r/4)),files:t.map(n=>({name:n.name,size:n.size||0}))}}function yp(e){const t=Number(e||0);return t>=1024*1024?`${(t/(1024*1024)).toFixed(2)} MB`:t>=1024?`${(t/1024).toFixed(1)} KB`:`${t} B`}function Xa(e){return new Intl.NumberFormat().format(Math.round(Number(e||0)))}function Mc(e){const t=Array.isArray(e==null?void 0:e.models)?e.models:[];return t.length?t.filter(r=>r.kind==="chat"):e!=null&&e.deployment?[{id:e.deployment,label:e.deployment,kind:"chat",configured:e.configured}]:[]}function ex(e){var n,a,o;if(e!=null&&e.usage)return{prompt_tokens:Number(e.usage.prompt_tokens||0),completion_tokens:Number(e.usage.completion_tokens||0),total_tokens:Number(e.usage.total_tokens||0),estimated_prompt_tokens:Number(e.usage.estimated_prompt_tokens||0),prompt_chars:Number(e.usage.prompt_chars||0),calls:Number(e.usage.calls||0)};const t=[],r=(n=e==null?void 0:e.analysis)==null?void 0:n.usage;return r&&t.push(r),(o=(a=e==null?void 0:e.template_profile)==null?void 0:a.ai_reasoning_profile)!=null&&o.usage&&t.push(e.template_profile.ai_reasoning_profile.usage),t.reduce((i,l)=>({prompt_tokens:i.prompt_tokens+Number(l.prompt_tokens||0),completion_tokens:i.completion_tokens+Number(l.completion_tokens||0),total_tokens:i.total_tokens+Number(l.total_tokens||0),estimated_prompt_tokens:i.estimated_prompt_tokens+Number(l.estimated_prompt_tokens||0),prompt_chars:i.prompt_chars+Number(l.prompt_chars||0),calls:i.calls+Number(l.calls||(l.total_tokens?1:0))}),{prompt_tokens:0,completion_tokens:0,total_tokens:0,estimated_prompt_tokens:0,prompt_chars:0,calls:0})}function tx({files:e,form:t,useAiAnalysis:r,selectedModel:n}){const a=new FormData;return e.baseline&&a.append("baseline",e.baseline),e.revised&&a.append("revised",e.revised),vo(e).forEach(o=>a.append("variations",o)),a.append("supplier",t.supplier||""),a.append("family_name",t.family_name||""),a.append("domain",t.domain||"generic"),a.append("use_case_type",t.use_case_type||"comparison"),a.append("expected_formats",(t.expected_formats||[]).join(",")),a.append("notes",t.onboarding_notes||t.sample_plan||""),a.append("use_llm",String(r)),a.append("model_name",r?n:""),a}async function rx(e){const t=async a=>fetch(`${B}${a}`,{method:"POST",headers:{"X-User-Role":window.sessionStorage.getItem("simulated_role")||"platform_admin"},body:tx(e)}),r=await t("/admin/analyze-use-case-samples");if(r.status!==404)return r;const n=await t("/admin/datasets/analyze-samples");if(n.status!==404)return n;throw new Error("Sample analyzer route is missing in the deployed backend revision. This is not a database schema issue. Rebuild and deploy the backend image that includes backend/routers/admin.py with POST /admin/analyze-use-case-samples.")}function fa({title:e,description:t,open:r,onToggle:n,meta:a="",actions:o=null}){return s.jsxs("div",{className:"admin-collapse-head",children:[s.jsx("button",{type:"button",className:"admin-collapse-toggle",onClick:n,"aria-expanded":r,children:s.jsx("span",{children:r?"-":"+"})}),s.jsxs("div",{children:[s.jsx("h3",{children:e}),t?s.jsx("p",{children:t}):null,a?s.jsx("span",{className:"admin-model-badge",children:a}):null]}),o?s.jsx("div",{className:"admin-collapse-actions",children:o}):null]})}function nx({run:e,elapsedSeconds:t,useAiAnalysis:r,selectedModel:n}){var f,p;if(!e)return null;const a=e.submitted||{},o=e.backendUsage||{},i=e.status==="running"?"Running":e.status==="success"?"Completed":"Failed",l=e.status==="success"?3:e.status==="failed"?1:Math.min(3,Math.floor(t/12)),c=[["prepare","Preparing upload context"],["extract","Extracting sample structure"],["model",r?`Invoking ${n||"selected model"}`:"Deterministic profile scan"],["metadata","Generating metadata suggestions"]],u=(f=e.events)!=null&&f.length?e.events:c.slice(0,l+1).map(([,g])=>g);return s.jsxs("div",{className:`activity-stream ${e.status}`,children:[s.jsxs("div",{className:"activity-head",children:[s.jsx("strong",{children:i}),s.jsx("span",{children:e.status==="running"?`${t}s elapsed`:"Run finished"}),s.jsx("small",{children:e.mode==="ai"?`Model: ${e.model||n||"not selected"}`:"Deterministic scan"})]}),s.jsx(wp,{events:u,status:e.status,activeText:(p=c[l])==null?void 0:p[1]}),s.jsxs("div",{className:"activity-foot",children:[s.jsxs("span",{children:[Xa(a.count)," file(s)"]}),s.jsx("span",{children:yp(a.totalBytes)}),s.jsx("span",{children:e.mode==="ai"?`Tokens ${o.total_tokens?Xa(o.total_tokens):"pending"}`:"No AI tokens"})]}),e.error?s.jsx("p",{className:"analysis-run-error",children:e.error}):null]})}function ax({run:e,elapsedSeconds:t}){var o,i,l;if(!e)return null;const r=e.status==="running"?"Creating use case":e.status==="success"?"Use case created":"Create failed",n=Number(((o=e.submitted)==null?void 0:o.count)||0)>0,a=(i=e.events)!=null&&i.length?e.events:["Saving use case metadata"];return s.jsxs("div",{className:`activity-stream create-run ${e.status}`,children:[s.jsxs("div",{className:"activity-head",children:[s.jsx("strong",{children:r}),s.jsx("span",{children:e.status==="running"?`${t}s elapsed`:"Run finished"}),s.jsx("small",{children:e.datasetId?`ID ${String(e.datasetId).slice(0,8)}`:`${Xa(((l=e.submitted)==null?void 0:l.count)||0)} sample file(s)`})]}),s.jsx(wp,{events:a,status:e.status,activeText:n&&e.stage==="samples"?"Learning attached samples":""}),n?null:s.jsxs("div",{className:"activity-foot",children:[s.jsx("span",{children:"No samples attached"}),s.jsx("span",{children:"Metadata-only create"})]}),e.sampleWarning?s.jsx("p",{className:"analysis-run-warning",children:e.sampleWarning}):null,e.error?s.jsx("p",{className:"analysis-run-error",children:e.error}):null]})}function wp({events:e,status:t,activeText:r=""}){const n=[...e];return t==="running"&&r&&!n.includes(r)&&n.push(r),s.jsx("ol",{className:"activity-lines",children:n.map((a,o)=>{const i=o===n.length-1,l=t==="failed"&&i?"failed":t==="running"&&i?"active":"done";return s.jsx("li",{className:l,children:a},`${a}-${o}`)})})}function ox({value:e,onChange:t}){const r=Array.isArray(e)?e:[],n=(o,i)=>{t(r.map(l=>l.id===o?{...l,...i}:l))},a=o=>{t(r.filter(i=>i.id!==o))};return s.jsxs("div",{className:"variation-pairs",children:[s.jsxs("div",{className:"variation-pairs-head",children:[s.jsxs("div",{children:[s.jsx("h5",{children:"Variation pairs"}),s.jsx("p",{children:"Add only when another baseline/revised pair represents a different layout or document family variation."})]}),s.jsx("button",{type:"button",className:"icon-action",onClick:()=>t([...r,Yg()]),disabled:r.length>=5,title:"Add variation pair",children:"+"})]}),r.length?s.jsx("div",{className:"variation-pair-list",children:r.map((o,i)=>s.jsxs("div",{className:"variation-pair-row",children:[s.jsxs("strong",{children:["Variation ",i+1]}),s.jsxs("label",{children:["Baseline",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:l=>{var c;return n(o.id,{baseline:((c=l.target.files)==null?void 0:c[0])||null})}})]}),s.jsxs("label",{children:["Revised",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:l=>{var c;return n(o.id,{revised:((c=l.target.files)==null?void 0:c[0])||null})}})]}),s.jsx("button",{type:"button",className:"ghost-action compact",onClick:()=>a(o.id),children:"Remove"})]},o.id))}):s.jsx("span",{className:"variation-empty",children:"No variation pairs added."})]})}function sx({data:e}){const t=(e==null?void 0:e.suggested_dataset)||{},r=(e==null?void 0:e.analysis)||{},n=r.confidence_score!==void 0?Math.round(Number(r.confidence_score||0)*100):null,a=Array.isArray(r.complexity_reasons)?r.complexity_reasons:[],o=Array.isArray(r.enhancement_tips)?r.enhancement_tips:[];return s.jsxs("section",{className:"analysis-card",children:[s.jsxs("div",{className:"analysis-card-head",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Sample Analysis"}),s.jsx("p",{children:e!=null&&e.used_ai?"GPT-4o assisted the metadata suggestions.":"Deterministic scan generated metadata suggestions."})]}),s.jsxs("span",{children:[String(r.complexity_rating||"standard")," complexity"]})]}),s.jsxs("div",{className:"analysis-grid",children:[s.jsxs("p",{children:[s.jsx("strong",{children:t.supplier||"Supplier pending"}),s.jsx("small",{children:t.family_name||"Use case pending"})]}),s.jsxs("p",{children:[s.jsx("strong",{children:t.use_case_type||"comparison"}),s.jsx("small",{children:(t.expected_formats||[]).join(", ")||"formats pending"})]}),s.jsxs("p",{children:[s.jsx("strong",{children:t.domain||"generic"}),s.jsx("small",{children:n!==null?`${n}% estimated parser confidence`:"confidence pending"})]})]}),a.length||o.length?s.jsxs("div",{className:"analysis-notes",children:[a.slice(0,3).map((i,l)=>s.jsx("span",{children:i},`reason-${l}`)),o.slice(0,3).map((i,l)=>s.jsx("span",{children:i},`tip-${l}`))]}):null]})}function ix({value:e,onChange:t}){const r=n=>{t(e.includes(n)?e.filter(a=>a!==n):[...e,n])};return s.jsxs("fieldset",{className:"role-picker",children:[s.jsx("legend",{children:"Allowed roles"}),Kg.map(([n,a])=>s.jsxs("label",{children:[s.jsx("input",{type:"checkbox",checked:e.includes(n),onChange:()=>r(n)}),a]},n))]})}function Oc({value:e,onChange:t}){const r=Array.isArray(e)?e:[],n=a=>{t(r.includes(a)?r.filter(o=>o!==a):[...r,a])};return s.jsxs("fieldset",{className:"format-picker",children:[s.jsx("legend",{children:"Expected formats"}),Gg.map(([a,o])=>s.jsxs("label",{children:[s.jsx("input",{type:"checkbox",checked:r.includes(a),onChange:()=>n(a)}),o]},a))]})}function lx({profile:e}){const t=e&&typeof e=="object"?e:{};return s.jsxs("div",{className:"profile-card",children:[s.jsx("h4",{children:"Model Samples"}),s.jsxs("p",{children:[s.jsxs("strong",{children:[String(t.sample_count||0)," samples"]}),s.jsx("small",{children:(t.roles_present||[]).join(", ")||"No roles learned yet"})]}),s.jsxs("p",{children:[s.jsxs("strong",{children:[String(t.average_pages||0)," avg pages"]}),s.jsxs("small",{children:[String(t.min_pages||0)," min · ",String(t.max_pages||0)," max"]})]}),t.last_bootstrap_notes?s.jsxs("p",{children:[s.jsx("strong",{children:"Latest notes"}),s.jsx("small",{children:String(t.last_bootstrap_notes)})]}):null]})}function Ko({title:e,items:t,labelKey:r,valueKey:n}){const a=Array.isArray(t)?t:[];return s.jsxs("div",{className:"profile-card",children:[s.jsx("h4",{children:e}),a.length===0?s.jsx("span",{children:"No entries yet."}):a.slice(0,8).map((o,i)=>s.jsxs("p",{children:[s.jsx("strong",{children:String((o==null?void 0:o[r])??"Item")}),s.jsx("small",{children:String((o==null?void 0:o[n])??"")})]},i))]})}function cx({profile:e,onAddLabel:t}){const r=e&&typeof e=="object"?e:{},n=String(r.complexity_rating||"low").toUpperCase(),a=r.confidence_score!==void 0?Math.round(r.confidence_score*100):null,o=Array.isArray(r.complexity_reasons)?r.complexity_reasons:[],i=Array.isArray(r.enhancement_tips)?r.enhancement_tips:[],l=Array.isArray(r.suggested_data_labels)?r.suggested_data_labels:[],c=n==="HIGH"?"#9f2525":n==="MEDIUM"?"#c45510":"#1f7e41",u=n==="HIGH"?"#fff7f7":n==="MEDIUM"?"#fffbf7":"#f7fff9",f=n==="HIGH"?"#f1c6c6":n==="MEDIUM"?"#f7d6c1":"#c1f1d1";return s.jsxs("div",{className:"profile-card",style:{gridColumn:"span 2"},children:[s.jsxs("h4",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("span",{children:"AI Onboarding Analysis"}),s.jsxs("span",{style:{fontSize:11,fontWeight:700,color:c,background:u,border:`1px solid ${f}`,padding:"2px 8px",borderRadius:99},children:[n," COMPLEXITY"]})]}),a!==null&&s.jsxs("p",{style:{marginTop:8},children:[s.jsxs("strong",{children:["Parser Confidence Rating: ",a,"%"]}),s.jsx("small",{children:"Estimated baseline accuracy without AI assistance"})]}),o.length>0&&s.jsxs("p",{style:{marginTop:10},children:[s.jsx("strong",{children:"Structural Complexity Indicators"}),s.jsx("small",{style:{display:"block",marginTop:4},children:o.map((p,g)=>s.jsxs("span",{style:{display:"block",color:"var(--text-primary)"},children:["• ",p]},g))})]}),i.length>0&&s.jsxs("p",{style:{marginTop:10},children:[s.jsx("strong",{children:"Extraction Optimization Recommendations"}),s.jsx("small",{style:{display:"block",marginTop:4},children:i.map((p,g)=>s.jsxs("span",{style:{display:"block",color:"var(--text-primary)"},children:["• ",p]},g))})]}),l.length>0&&s.jsxs("p",{style:{marginTop:12},children:[s.jsx("strong",{children:"Suggested Data Labels (Click to map)"}),s.jsx("span",{style:{display:"flex",flexWrap:"wrap",gap:6,marginTop:6},children:l.map(p=>s.jsxs("button",{type:"button",onClick:()=>t(p),style:{background:"var(--surface-sunken)",border:"1px solid var(--border)",color:"var(--text-primary)",borderRadius:"4px",padding:"2px 8px",fontSize:12,fontWeight:650,cursor:"pointer"},title:"Click to automatically create a mapping rule for this label",children:["Add ",p]},p))})]})]})}async function yr(e,t={}){const r=await fetch(`${B}${e}`,t);if(r.status===404&&e.startsWith("/admin/")){const n=await fetch(`${B}/api${e}`,t);if(!n.ok)throw new Error(await ee(n));return n.json()}if(!r.ok)throw new Error(await ee(r));return r.json()}async function ux(e,t={}){const r=await fetch(`${B}${e}`,t);if(r.status!==404){if(!r.ok)throw new Error(await ee(r));return r.json()}const n=await fetch(`${B}/api${e}`,t);if(!n.ok)throw new Error(await ee(n));return n.json()}function Fc(e){const t=e.trim();if(!t)return[];const r=JSON.parse(t);if(!Array.isArray(r))throw new Error("Column rules must be a JSON array.");return r}function dx(e){y.useEffect(()=>{document.title=`${e} · Altrai`},[e])}const px=30,Uc=1200,fx=e=>Number(e||0).toLocaleString();function mx(e,t,r){const n=String(e||"").toLowerCase(),a=n.includes("gpt-4")&&!n.includes("mini"),o=a?2.5:.15,i=a?10:.6;return(Number(t||0)*o+Number(r||0)*i)/1e6}function Ji(e){return`doculens_compare_chat_${e}`}function Bc(e){if(typeof window>"u"||!e)return[];try{const t=window.sessionStorage.getItem(Ji(e)),r=t?JSON.parse(t):[];return Array.isArray(r)?r:[]}catch{return[]}}function Wc(e,t){if(!(typeof window>"u"||!e))try{const r=t.slice(-px).map(n=>({id:n.id,role:n.role,text:n.text,rows:Array.isArray(n.rows)?n.rows.slice(0,20):[],columns:Array.isArray(n.columns)?n.columns.slice(0,8):[],sources:Array.isArray(n.sources)?n.sources.slice(0,20):[],presentation:n.presentation||"text",mode:n.mode||"fast",model:n.model||null,usage:n.usage||null,confidence:n.confidence??null,warning:n.warning||"",timestamp:n.timestamp||"",isError:!!n.isError}));window.sessionStorage.setItem(Ji(e),JSON.stringify(r))}catch{}}function Vc(e){const t=Array.isArray(e==null?void 0:e.models)?e.models:[];return t.length?t.filter(r=>r.kind==="chat"&&r.configured!==!1):e!=null&&e.deployment?[{id:e.deployment,label:e.deployment,kind:"chat",configured:e.configured}]:[]}function hx({runId:e,onOpenCitation:t}){const[r,n]=y.useState(""),[a,o]=y.useState("fast"),[i,l]=y.useState(""),[c,u]=y.useState(null),[f,p]=y.useState([]),[g,v]=y.useState({}),[x,b]=y.useState(!1),[S,m]=y.useState(""),d=y.useRef(null),h=y.useRef(!1),w=y.useMemo(()=>Vc(c),[c]);y.useEffect(()=>{let j=!1;return(async()=>{try{const T=await fetch(`${B}/ai-health`);if(!T.ok)throw new Error(await ee(T));const P=await T.json();if(j)return;u(P);const L=Vc(P)[0];L!=null&&L.id&&l(ce=>ce||L.id)}catch{j||u({ok:!1,models:[],message:"AI model status is unavailable."})}})(),()=>{j=!0}},[]),y.useEffect(()=>{let j=!1;return(async()=>{h.current=!0,v({});try{const T=await fetch(`${B}/runs/${e}/conversation`);if(!T.ok)throw new Error(await ee(T));const P=await T.json();if(j)return;const L=P.durable?Array.isArray(P.messages)?P.messages:[]:Bc(e);p(L),Wc(e,L)}catch{j||p(Bc(e))}})(),()=>{j=!0}},[e]),y.useEffect(()=>{if(h.current){h.current=!1;return}Wc(e,f)},[e,f]),y.useEffect(()=>{var j;(j=d.current)==null||j.scrollIntoView({behavior:"smooth",block:"nearest"})},[f,x,S]),y.useEffect(()=>{if(!x){m("");return}const j=a==="ai"?["Searching comparison evidence","Reading relevant changes","Writing a grounded answer"]:["Searching comparison evidence","Ranking relevant changes","Preparing the answer"];let N=0;m(j[N]);const T=window.setInterval(()=>{N=Math.min(N+1,j.length-1),m(j[N])},1500);return()=>window.clearInterval(T)},[x,a]);const _=async()=>{const j=r.trim();if(!j||x||!e)return;const N=new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});p(T=>[...T,{id:`user-${Date.now()}`,role:"user",text:j,timestamp:N}]),n(""),b(!0);try{const T=await fetch(`${B}/runs/${e}/query`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:j,mode:a,response_language:"source",model_name:a==="ai"?i:null,history:f.filter(L=>L.role==="user"||L.role==="assistant").slice(-8).map(L=>({role:L.role,text:L.text}))})});if(!T.ok)throw new Error(await ee(T));const P=await T.json();p(L=>{var ce;return[...L,{id:`answer-${Date.now()}`,role:"assistant",text:P.answer||`I found ${((ce=P.rows)==null?void 0:ce.length)||0} relevant changes.`,rows:P.rows||[],columns:P.columns||Qh(P.rows||[]),sources:P.sources||P.rows||[],presentation:P.presentation||"text",mode:P.mode||a,model:P.ai_deployment||(a==="ai"?i:null),usage:(P.mode||a)==="ai"?P.usage:null,confidence:P.confidence,warning:P.ai_error||(P.ai_unavailable?"AI was unavailable, so this answer uses extracted comparison evidence.":""),timestamp:new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}]})}catch(T){p(P=>[...P,{id:`answer-${Date.now()}`,role:"assistant",text:ie(T),rows:[],timestamp:new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),isError:!0}])}finally{b(!1)}},C=async()=>{p([]),v({}),typeof window<"u"&&e&&window.sessionStorage.removeItem(Ji(e));try{await fetch(`${B}/runs/${e}/conversation`,{method:"DELETE"})}catch{}};return s.jsxs("section",{className:"comparison-chat",children:[s.jsxs("div",{className:"comparison-chat-toolbar",children:[s.jsx("span",{children:f.length?"Conversation saved with this comparison":"Ask anything about this comparison"}),f.length>0&&s.jsx("button",{type:"button",onClick:C,disabled:x,children:"Clear"})]}),s.jsxs("div",{className:"comparison-chat-thread",children:[f.length===0&&s.jsxs("div",{className:"comparison-chat-empty",children:[s.jsx(Qs,{"aria-hidden":"true"}),s.jsx("h4",{children:"What would you like to know?"}),s.jsx("p",{children:"Ask for a summary, a specific value, a changed table row, or the source page."})]}),f.map(j=>s.jsx(gx,{message:j,sourcesOpen:!!g[j.id],onOpenCitation:t,onToggleSources:()=>v(N=>({...N,[j.id]:!N[j.id]}))},j.id)),x&&s.jsxs("div",{className:"comparison-chat-message assistant thinking",children:[s.jsx("div",{className:"comparison-chat-avatar",children:s.jsx(Qs,{"aria-hidden":"true"})}),s.jsx("div",{className:"comparison-chat-response",children:s.jsxs("div",{className:"comparison-chat-thinking",children:[s.jsx("span",{}),s.jsx("span",{}),s.jsx("span",{}),s.jsx("em",{children:S||"Thinking"})]})})]}),s.jsx("div",{ref:d})]}),s.jsxs("div",{className:"comparison-chat-composer",children:[s.jsx("textarea",{value:r,onChange:j=>n(j.target.value),onKeyDown:j=>{j.key==="Enter"&&!j.shiftKey&&(j.preventDefault(),_())},placeholder:"Message this comparison",disabled:x,rows:1}),s.jsxs("div",{className:"comparison-chat-controls",children:[s.jsxs("div",{className:"comparison-chat-mode",children:[s.jsxs("select",{value:a,onChange:j=>o(j.target.value),disabled:x,children:[s.jsx("option",{value:"fast",children:"Evidence search"}),s.jsx("option",{value:"ai",children:"AI chat"})]}),a==="ai"&&s.jsx("select",{value:i,onChange:j=>l(j.target.value),disabled:x,children:w.length?w.map(j=>s.jsx("option",{value:j.id,children:j.label||j.id},j.id)):s.jsx("option",{value:"",children:"No AI model configured"})})]}),s.jsx("button",{type:"button",className:"comparison-chat-send",onClick:_,disabled:x||!r.trim()||a==="ai"&&!i,"aria-label":"Send message",title:"Send message",children:s.jsx(Ig,{"aria-hidden":"true"})})]})]})]})}function gx({message:e,sourcesOpen:t,onToggleSources:r,onOpenCitation:n}){const a=e.role==="user",o=Array.isArray(e.sources)&&e.sources.length?e.sources:Array.isArray(e.rows)?e.rows:[],i=String(e.presentation||"").includes("table")&&Array.isArray(e.columns)&&e.columns.length>0&&Array.isArray(e.rows)&&e.rows.length>0,l=e.usage,[c,u]=y.useState(!1),f=l?mx(e.model,l.prompt_tokens,l.completion_tokens):0,p=String(e.text||"").length>Uc,g=p&&!c?`${String(e.text||"").slice(0,Uc).trimEnd()}...`:e.text;return a?s.jsx("div",{className:"comparison-chat-message user",children:s.jsx("div",{className:"comparison-chat-user-bubble",dir:"auto",children:e.text})}):s.jsxs("div",{className:`comparison-chat-message assistant${e.isError?" error":""}`,children:[s.jsx("div",{className:"comparison-chat-avatar",children:s.jsx(Qs,{"aria-hidden":"true"})}),s.jsxs("div",{className:"comparison-chat-response",children:[s.jsx("div",{className:"comparison-chat-answer",dir:"auto",children:xx(g,o,t,r,n)}),e.warning&&s.jsx("p",{className:"comparison-chat-warning",children:e.warning}),i&&s.jsx("div",{className:"comparison-chat-table",children:s.jsx(or,{columns:e.columns,rows:e.rows.slice(0,30)})}),s.jsxs("div",{className:"comparison-chat-actions",children:[p&&s.jsx("button",{type:"button",onClick:()=>u(v=>!v),children:c?"Show less":"Show full response"}),o.length>0&&s.jsx("button",{type:"button",onClick:r,children:t?"Hide sources":`${o.length} source${o.length===1?"":"s"}`}),(e.model||l)&&s.jsxs("details",{className:"comparison-chat-details",children:[s.jsx("summary",{children:"Details"}),s.jsxs("div",{children:[e.model&&s.jsxs("span",{children:["Model: ",e.model]}),l&&s.jsxs("span",{children:[fx(l.total_tokens)," tokens · approximately $",f.toFixed(5)]})]})]})]}),t&&s.jsx("div",{className:"comparison-chat-sources",children:o.slice(0,8).map((v,x)=>s.jsx(vx,{row:v,index:x,onOpenCitation:n},`${v.stable_key||v.citation||x}`))})]})]})}function xx(e,t,r,n,a){return String(e||"").split(/(\[\d+\])/g).map((l,c)=>{const u=l.match(/^\[(\d+)\]$/);if(!u)return s.jsx(Ur.Fragment,{children:l},`${c}-${l.slice(0,12)}`);const f=Number(u[1]),p=t.find((g,v)=>Number((g==null?void 0:g.source_id)||v+1)===f);return p?s.jsx("button",{type:"button",className:"comparison-chat-inline-citation",onClick:()=>{r||n();const g=bp(p.citation,p);g&&(a==null||a(g,p))},title:p.citation||`Open source ${f}`,children:l},`${c}-${l}`):s.jsx(Ur.Fragment,{children:l},`${c}-${l}`)})}function vx({row:e,index:t,onOpenCitation:r}){var c,u;const n=Number((e==null?void 0:e.source_id)||t+1),a=e.feature||e.item||e.area||e.stable_key||e.path||`Source ${n}`,o=e.change||e.description||e.after||e.before||e.definition||"",i=e.citation||"",l=bp(i,e);return s.jsxs("article",{className:"comparison-chat-source",children:[s.jsxs("div",{children:[s.jsxs("strong",{dir:"auto",children:["[",n,"] ",Re(a,100)]}),i&&s.jsx("button",{type:"button",className:"comparison-chat-citation",onClick:()=>l&&(r==null?void 0:r(l,e)),disabled:!l,children:i})]}),o&&s.jsx("p",{dir:"auto",children:Re(typeof o=="string"?o:JSON.stringify(o),260)}),(e.before||e.after||((c=e.field_changes)==null?void 0:c.length)>0)&&s.jsxs("details",{children:[s.jsx("summary",{children:"View change"}),s.jsxs("div",{className:"comparison-chat-source-change",children:[s.jsx(pp,{type:Fr(e)}),e.before&&s.jsxs("div",{dir:"auto",children:[s.jsx("strong",{children:"Before:"})," ",Re(e.before,260)]}),e.after&&s.jsxs("div",{dir:"auto",children:[s.jsx("strong",{children:"After:"})," ",Re(e.after,260)]}),((u=e.field_changes)==null?void 0:u.length)>0&&s.jsx(yg,{rows:e.field_changes})]})]})]})}function bp(e,t){const r=Number((t==null?void 0:t.page_target)||(t==null?void 0:t.page)||(t==null?void 0:t.page_base)||0);if(r>0)return r;const n=String(e||""),a=n.match(/(?:target|revised)\s+p\.?\s*(\d+)/i);if(a)return Number(a[1]);const o=n.match(/(?:page|p\.)\s*(\d+)/i);return o?Number(o[1]):null}const yx=(e,t)=>{if(typeof window>"u")return t;try{const r=window.sessionStorage.getItem(`doculens_${e}`);return r!==null?JSON.parse(r):t}catch{return t}},wx=(e,t)=>{if(!(typeof window>"u"))try{window.sessionStorage.setItem(`doculens_${e}`,JSON.stringify(t))}catch(r){console.error(r)}},Ks={compare:"/compare",extract:"/extract",jobs:"/work-history",agents:"/ai-agents",admin:"/admin"},bx={"/":"compare",...Object.fromEntries(Object.entries(Ks).map(([e,t])=>[t,e]))},qc=e=>bx[e]||"compare";function kx(){const e=lp(),t=Ch(),[r,n]=y.useState(()=>qc(window.location.pathname)),[a,o]=y.useState(null),[i,l]=y.useState(null),[c,u]=y.useState("viewer"),[f,p]=y.useState(1),[g,v]=y.useState(!1),[x,b]=y.useState(""),[S,m]=y.useState(null),[d,h]=y.useState(null),[w,_]=y.useState(!1),[C,j]=y.useState(""),[N,T]=y.useState("overview"),[P,L]=y.useState(""),[ce,Oe]=y.useState(()=>yx("historyKind","all")),Ct={compare:"Compare",extract:"Extract",jobs:"Work History",agents:"AI Agents",admin:"Admin Studio"}[r]||"Workspace";dx(Ct),y.useEffect(()=>{wx("historyKind",ce)},[ce]),y.useEffect(()=>{const M=qc(e.pathname);M!==r&&n(M)},[e.pathname]),y.useEffect(()=>{r==="compare"&&c!=="viewer"&&u("viewer")},[r]);const Ee=()=>{o(null),l(null),v(!1),b(""),p(1),u("viewer"),Ne("compare")},Xe=()=>{m(null),h(null),_(!1),j(""),T("overview"),Ne("extract")},Ne=(M,$={})=>{n(M),M==="jobs"&&Oe($.historyKind||"all"),b(""),j(""),L(""),t(Ks[M]||Ks.compare,{replace:!1})};y.useEffect(()=>{if(!a||!g)return;let M=!1,$=null;const Z=async()=>{try{const U=await fetch(`${B}/runs/${a}`);if(!U.ok)throw new Error(await ee(U));const q=await U.json();if(M)return;if(l(q),q.status==="complete"){v(!1),u("viewer");return}if(q.status==="failed"){v(!1),b(nt(q.error||q.status_message||"Comparison failed."));return}$=setTimeout(Z,1e3)}catch(U){if(M)return;v(!1),b(ie(U))}};return Z(),()=>{M=!0,$&&clearTimeout($)}},[a,g]),y.useEffect(()=>{if(!S||!w)return;let M=!1,$=null;const Z=async()=>{try{const U=await fetch(`${B}/extract-runs/${S}`);if(!U.ok)throw new Error(await ee(U));const q=await U.json();if(M)return;if(h(q),q.status==="complete"){_(!1),T("overview");return}if(q.status==="failed"){_(!1),j(nt(q.error||q.status_message||"Extraction failed."));return}$=setTimeout(Z,1e3)}catch(U){if(M)return;_(!1),j(ie(U))}};return Z(),()=>{M=!0,$&&clearTimeout($)}},[S,w]);const z=async M=>{M.preventDefault();const $=new FormData(M.currentTarget),Z=$.get("base"),U=$.get("target"),q=String($.get("family_id")||"").trim();if(!Z||!U||!Z.name||!U.name){b("Please select both documents before starting.");return}if(!q){b("Please select a document use case before starting comparison.");return}n("compare"),v(!0),b(""),o(null),p(1),u("viewer"),l({status:"uploading",status_message:"Uploading documents",progress:3,stats:{},coverage:{},n_pages_base:0,n_pages_target:0});try{const Ce=await fetch(`${B}/compare`,{method:"POST",body:$});if(!Ce.ok)throw new Error(await ee(Ce));const it=await Ce.json();o(it.run_id),v(it.status!=="complete"&&it.status!=="failed"),l({run_id:it.run_id,status:it.status,status_message:it.status_message||"Starting comparison",progress:it.progress||5,stats:{},coverage:{},n_pages_base:0,n_pages_target:0}),n("compare")}catch(Ce){v(!1),b(ie(Ce))}},R=async M=>{M.preventDefault();const $=new FormData(M.currentTarget),Z=$.getAll("document").filter(q=>q&&q.name),U=String($.get("family_id")||"").trim();if(!Z.length){j("Please select at least one document, spreadsheet, PDF, or image before starting extraction.");return}if(!U){j("Please select a document use case before starting extraction.");return}n("extract"),_(!0),j(""),m(null),T("overview"),h({status:"uploading",status_message:"Uploading document",progress:3,summary:{}});try{const q=await fetch(`${B}/extract`,{method:"POST",body:$});if(!q.ok)throw new Error(await ee(q));const Ce=await q.json();m(Ce.run_id),_(Ce.status!=="complete"&&Ce.status!=="failed"),h({run_id:Ce.run_id,status:Ce.status,status_message:Ce.status_message||"Starting extraction",progress:Ce.progress||5,summary:{}}),n("extract")}catch(q){_(!1),j(ie(q))}},I=async M=>{L("");try{if(M.kind==="extraction"){const U=await fetch(`${B}/extract-runs/${M.run_id}`);if(!U.ok)throw new Error(await ee(U));const q=await U.json();o(null),l(null),v(!1),m(M.run_id),h(q),_(q.status!=="complete"&&q.status!=="failed"),T("overview"),n("extract");return}const $=await fetch(`${B}/runs/${M.run_id}`);if(!$.ok)throw new Error(await ee($));const Z=await $.json();m(null),h(null),_(!1),o(M.run_id),l(Z),v(Z.status!=="complete"&&Z.status!=="failed"),u("viewer"),p(1),n("compare")}catch($){L(ie($))}},Q=async M=>{L("");try{if(M.kind==="extraction"){const $=await fetch(`${B}/extract-runs/${M.run_id}`);if(!$.ok)throw new Error(await ee($));const Z=await $.json();o(null),l(null),v(!1),m(M.run_id),h(Z),_(Z.status!=="complete"&&Z.status!=="failed"),n("extract");return}await I(M)}catch($){L(ie($))}},oe=()=>{a&&(window.location.href=`${B}/runs/${a}/report.pdf`)},ht=M=>{const $=Number(M);!Number.isFinite($)||$<1||(p($),window.requestAnimationFrame(()=>{var Z;(Z=document.getElementById("visual-comparison"))==null||Z.scrollIntoView({behavior:"smooth",block:"start"})}))},K=(i==null?void 0:i.status)==="complete",ge=(d==null?void 0:d.status)==="complete";return s.jsxs("div",{children:[s.jsx("style",{children:Fh}),s.jsxs(Qg,{workspace:r,runId:r==="compare"&&K?a:null,onNavigate:Ne,onDownloadReport:oe,children:[r==="jobs"&&s.jsx(ag,{onOpenJob:I,onAskJob:Q,error:P,historyKind:ce,onStartCompare:Ee,onStartExtract:Xe}),r==="compare"&&!K&&s.jsxs("section",{className:"workflow-panel",children:[s.jsx(sg,{onUpload:z,busy:g,onAdmin:()=>Ne("admin")}),g&&i&&s.jsx(Ac,{progress:i.progress||0,message:i.status_message||"Processing documents",status:i.status||"running"}),x&&s.jsx(On,{message:x})]}),r==="extract"&&!ge&&s.jsxs("section",{className:"workflow-panel",children:[s.jsx(ig,{onUpload:R,busy:w,onAdmin:()=>Ne("admin")}),w&&d&&s.jsx(Ac,{progress:d.progress||0,message:d.status_message||"Extracting document",status:d.status||"running"}),C&&s.jsx(On,{message:C})]}),r==="compare"&&K&&a&&i&&s.jsxs("section",{className:"comparison-workspace",children:[s.jsxs("div",{className:"comparison-head",children:[s.jsx("div",{children:s.jsxs("h2",{dir:"auto",children:[i.base_label||"Baseline"," → ",i.target_label||"Revised"]})}),s.jsxs("div",{className:"comparison-head-actions",children:[s.jsx("button",{type:"button",className:"ghost-action compact",onClick:Ee,children:"New comparison"}),s.jsxs("div",{className:"comparison-id",children:["#",String(a).slice(0,6)]})]})]}),s.jsx(eg,{meta:i}),s.jsxs("main",{className:"comparison-flow",children:[s.jsxs("section",{className:"workspace-surface",children:[s.jsx("div",{className:"surface-title-row",children:s.jsxs("div",{children:[s.jsx("h3",{children:"Quick Summary"}),s.jsx("p",{children:"Highest-priority differences detected from the comparison evidence."})]})}),s.jsx(lg,{runId:a,meta:i,onVerifyPage:p})]}),s.jsxs("section",{className:"workspace-surface",id:"visual-comparison",children:[s.jsx("div",{className:"surface-title-row",children:s.jsxs("div",{children:[s.jsx("h3",{children:"Visual Comparison"}),s.jsx("p",{children:"Side-by-side verification with synchronized scroll, zoom, and document overlays."})]})}),s.jsx(cg,{runId:a,meta:i,pageNum:f,setPageNum:p})]}),s.jsxs("section",{className:"workspace-surface",children:[s.jsx("div",{className:"surface-title-row",children:s.jsxs("div",{children:[s.jsx("h3",{children:"Ask This Comparison"}),s.jsx("p",{children:"Start with natural language search. Switch to an AI model only when reasoning or richer synthesis is needed."})]})}),s.jsx(hx,{runId:a,onOpenCitation:ht})]})]})]}),r==="extract"&&ge&&S&&d&&s.jsx(wg,{runId:S,meta:d,tab:N,setTab:T}),r==="agents"&&s.jsxs("section",{className:"workspace-placeholder",children:[s.jsx("h2",{children:"AI Agents"}),s.jsx("p",{children:"Future skills and multi-agent workflows will live here after the document intelligence workspace is stable."}),s.jsx("div",{className:"placeholder-list",children:s.jsx("span",{children:"Coming soon"})})]}),r==="admin"&&s.jsx(Xg,{})]})]})}Go.createRoot(document.getElementById("root")).render(s.jsx(Ur.StrictMode,{children:s.jsx(Bg,{children:s.jsx(Mh,{children:s.jsx(kx,{})})})}));
