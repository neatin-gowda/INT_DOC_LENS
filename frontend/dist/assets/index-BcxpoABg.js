function $p(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in e)){const o=Object.getOwnPropertyDescriptor(n,a);o&&Object.defineProperty(e,a,o.get?o:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();function Rp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wc={exports:{}},eo={},Vc={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fn=Symbol.for("react.element"),Lp=Symbol.for("react.portal"),Ip=Symbol.for("react.fragment"),Ap=Symbol.for("react.strict_mode"),Mp=Symbol.for("react.profiler"),Op=Symbol.for("react.provider"),Fp=Symbol.for("react.context"),Up=Symbol.for("react.forward_ref"),Bp=Symbol.for("react.suspense"),Wp=Symbol.for("react.memo"),Vp=Symbol.for("react.lazy"),dl=Symbol.iterator;function qp(e){return e===null||typeof e!="object"?null:(e=dl&&e[dl]||e["@@iterator"],typeof e=="function"?e:null)}var qc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hc=Object.assign,Qc={};function Gr(e,t,r){this.props=e,this.context=t,this.refs=Qc,this.updater=r||qc}Gr.prototype.isReactComponent={};Gr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Gr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kc(){}Kc.prototype=Gr.prototype;function Js(e,t,r){this.props=e,this.context=t,this.refs=Qc,this.updater=r||qc}var Ys=Js.prototype=new Kc;Ys.constructor=Js;Hc(Ys,Gr.prototype);Ys.isPureReactComponent=!0;var pl=Array.isArray,Gc=Object.prototype.hasOwnProperty,Xs={current:null},Jc={key:!0,ref:!0,__self:!0,__source:!0};function Yc(e,t,r){var n,a={},o=null,i=null;if(t!=null)for(n in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Gc.call(t,n)&&!Jc.hasOwnProperty(n)&&(a[n]=t[n]);var l=arguments.length-2;if(l===1)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)a[n]===void 0&&(a[n]=l[n]);return{$$typeof:Fn,type:e,key:o,ref:i,props:a,_owner:Xs.current}}function Hp(e,t){return{$$typeof:Fn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Zs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fn}function Qp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var fl=/\/+/g;function bo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Qp(""+e.key):t.toString(36)}function ha(e,t,r,n,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Fn:case Lp:i=!0}}if(i)return i=e,a=a(i),e=n===""?"."+bo(i,0):n,pl(a)?(r="",e!=null&&(r=e.replace(fl,"$&/")+"/"),ha(a,t,r,"",function(u){return u})):a!=null&&(Zs(a)&&(a=Hp(a,r+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(fl,"$&/")+"/")+e)),t.push(a)),1;if(i=0,n=n===""?".":n+":",pl(e))for(var l=0;l<e.length;l++){o=e[l];var c=n+bo(o,l);i+=ha(o,t,r,c,a)}else if(c=qp(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=n+bo(o,l++),i+=ha(o,t,r,c,a);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Kn(e,t,r){if(e==null)return e;var n=[],a=0;return ha(e,n,"","",function(o){return t.call(r,o,a++)}),n}function Kp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},ga={transition:null},Gp={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:ga,ReactCurrentOwner:Xs};function Xc(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Kn,forEach:function(e,t,r){Kn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Kn(e,function(){t++}),t},toArray:function(e){return Kn(e,function(t){return t})||[]},only:function(e){if(!Zs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Gr;U.Fragment=Ip;U.Profiler=Mp;U.PureComponent=Js;U.StrictMode=Ap;U.Suspense=Bp;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gp;U.act=Xc;U.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Hc({},e.props),a=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Xs.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Gc.call(t,c)&&!Jc.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:Fn,type:e.type,key:a,ref:o,props:n,_owner:i}};U.createContext=function(e){return e={$$typeof:Fp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Op,_context:e},e.Consumer=e};U.createElement=Yc;U.createFactory=function(e){var t=Yc.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:Up,render:e}};U.isValidElement=Zs;U.lazy=function(e){return{$$typeof:Vp,_payload:{_status:-1,_result:e},_init:Kp}};U.memo=function(e,t){return{$$typeof:Wp,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=ga.transition;ga.transition={};try{e()}finally{ga.transition=t}};U.unstable_act=Xc;U.useCallback=function(e,t){return Pe.current.useCallback(e,t)};U.useContext=function(e){return Pe.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};U.useEffect=function(e,t){return Pe.current.useEffect(e,t)};U.useId=function(){return Pe.current.useId()};U.useImperativeHandle=function(e,t,r){return Pe.current.useImperativeHandle(e,t,r)};U.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return Pe.current.useMemo(e,t)};U.useReducer=function(e,t,r){return Pe.current.useReducer(e,t,r)};U.useRef=function(e){return Pe.current.useRef(e)};U.useState=function(e){return Pe.current.useState(e)};U.useSyncExternalStore=function(e,t,r){return Pe.current.useSyncExternalStore(e,t,r)};U.useTransition=function(){return Pe.current.useTransition()};U.version="18.3.1";Vc.exports=U;var w=Vc.exports;const to=Rp(w),Jp=$p({__proto__:null,default:to},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp=w,Xp=Symbol.for("react.element"),Zp=Symbol.for("react.fragment"),ef=Object.prototype.hasOwnProperty,tf=Yp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rf={key:!0,ref:!0,__self:!0,__source:!0};function Zc(e,t,r){var n,a={},o=null,i=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(n in t)ef.call(t,n)&&!rf.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:Xp,type:e,key:o,ref:i,props:a,_owner:tf.current}}eo.Fragment=Zp;eo.jsx=Zc;eo.jsxs=Zc;Wc.exports=eo;var s=Wc.exports,Yo={},eu={exports:{}},Be={},tu={exports:{}},ru={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,D){var I=E.length;E.push(D);e:for(;0<I;){var Q=I-1>>>1,ae=E[Q];if(0<a(ae,D))E[Q]=D,E[I]=ae,I=Q;else break e}}function r(E){return E.length===0?null:E[0]}function n(E){if(E.length===0)return null;var D=E[0],I=E.pop();if(I!==D){E[0]=I;e:for(var Q=0,ae=E.length,Xe=ae>>>1;Q<Xe;){var J=2*(Q+1)-1,L=E[J],M=J+1,O=E[M];if(0>a(L,I))M<ae&&0>a(O,L)?(E[Q]=O,E[M]=I,Q=M):(E[Q]=L,E[J]=I,Q=J);else if(M<ae&&0>a(O,I))E[Q]=O,E[M]=I,Q=M;else break e}}return D}function a(E,D){var I=E.sortIndex-D.sortIndex;return I!==0?I:E.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var c=[],u=[],m=1,f=null,g=3,v=!1,y=!1,x=!1,j=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(E){for(var D=r(u);D!==null;){if(D.callback===null)n(u);else if(D.startTime<=E)n(u),D.sortIndex=D.expirationTime,t(c,D);else break;D=r(u)}}function b(E){if(x=!1,h(E),!y)if(r(c)!==null)y=!0,Ye(S);else{var D=r(u);D!==null&&Ne(b,D.startTime-E)}}function S(E,D){y=!1,x&&(x=!1,p(z),z=-1),v=!0;var I=g;try{for(h(D),f=r(c);f!==null&&(!(f.expirationTime>D)||E&&!W());){var Q=f.callback;if(typeof Q=="function"){f.callback=null,g=f.priorityLevel;var ae=Q(f.expirationTime<=D);D=e.unstable_now(),typeof ae=="function"?f.callback=ae:f===r(c)&&n(c),h(D)}else n(c);f=r(c)}if(f!==null)var Xe=!0;else{var J=r(u);J!==null&&Ne(b,J.startTime-D),Xe=!1}return Xe}finally{f=null,g=I,v=!1}}var N=!1,C=null,z=-1,$=5,R=-1;function W(){return!(e.unstable_now()-R<$)}function _e(){if(C!==null){var E=e.unstable_now();R=E;var D=!0;try{D=C(!0,E)}finally{D?Ae():(N=!1,C=null)}}else N=!1}var Ae;if(typeof d=="function")Ae=function(){d(_e)};else if(typeof MessageChannel<"u"){var Ct=new MessageChannel,Ee=Ct.port2;Ct.port1.onmessage=_e,Ae=function(){Ee.postMessage(null)}}else Ae=function(){j(_e,0)};function Ye(E){C=E,N||(N=!0,Ae())}function Ne(E,D){z=j(function(){E(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,Ye(S))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(E){switch(g){case 1:case 2:case 3:var D=3;break;default:D=g}var I=g;g=D;try{return E()}finally{g=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,D){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var I=g;g=E;try{return D()}finally{g=I}},e.unstable_scheduleCallback=function(E,D,I){var Q=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?Q+I:Q):I=Q,E){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=I+ae,E={id:m++,callback:D,priorityLevel:E,startTime:I,expirationTime:ae,sortIndex:-1},I>Q?(E.sortIndex=I,t(u,E),r(c)===null&&E===r(u)&&(x?(p(z),z=-1):x=!0,Ne(b,I-Q))):(E.sortIndex=ae,t(c,E),y||v||(y=!0,Ye(S))),E},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(E){var D=g;return function(){var I=g;g=D;try{return E.apply(this,arguments)}finally{g=I}}}})(ru);tu.exports=ru;var nf=tu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var af=w,Ue=nf;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nu=new Set,bn={};function fr(e,t){Br(e,t),Br(e+"Capture",t)}function Br(e,t){for(bn[e]=t,e=0;e<t.length;e++)nu.add(t[e])}var jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xo=Object.prototype.hasOwnProperty,of=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ml={},hl={};function sf(e){return Xo.call(hl,e)?!0:Xo.call(ml,e)?!1:of.test(e)?hl[e]=!0:(ml[e]=!0,!1)}function lf(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function cf(e,t,r,n){if(t===null||typeof t>"u"||lf(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Te(e,t,r,n,a,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ve[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ve[t]=new Te(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ve[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ve[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ve[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ve[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ve[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ve[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ve[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var ei=/[\-:]([a-z])/g;function ti(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ei,ti);ve[t]=new Te(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ei,ti);ve[t]=new Te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ei,ti);ve[t]=new Te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ve[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});ve.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ve[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function ri(e,t,r,n){var a=ve.hasOwnProperty(t)?ve[t]:null;(a!==null?a.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(cf(t,r,a,n)&&(r=null),n||a===null?sf(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,n=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Nt=af.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gn=Symbol.for("react.element"),br=Symbol.for("react.portal"),kr=Symbol.for("react.fragment"),ni=Symbol.for("react.strict_mode"),Zo=Symbol.for("react.profiler"),au=Symbol.for("react.provider"),ou=Symbol.for("react.context"),ai=Symbol.for("react.forward_ref"),es=Symbol.for("react.suspense"),ts=Symbol.for("react.suspense_list"),oi=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),su=Symbol.for("react.offscreen"),gl=Symbol.iterator;function Zr(e){return e===null||typeof e!="object"?null:(e=gl&&e[gl]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,ko;function ln(e){if(ko===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);ko=t&&t[1]||""}return`
`+ko+e}var jo=!1;function So(e,t){if(!e||jo)return"";jo=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),o=n.stack.split(`
`),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(i!==1||l!==1)do if(i--,l--,0>l||a[i]!==o[l]){var c=`
`+a[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=l);break}}}finally{jo=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?ln(e):""}function uf(e){switch(e.tag){case 5:return ln(e.type);case 16:return ln("Lazy");case 13:return ln("Suspense");case 19:return ln("SuspenseList");case 0:case 2:case 15:return e=So(e.type,!1),e;case 11:return e=So(e.type.render,!1),e;case 1:return e=So(e.type,!0),e;default:return""}}function rs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kr:return"Fragment";case br:return"Portal";case Zo:return"Profiler";case ni:return"StrictMode";case es:return"Suspense";case ts:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ou:return(e.displayName||"Context")+".Consumer";case au:return(e._context.displayName||"Context")+".Provider";case ai:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case oi:return t=e.displayName||null,t!==null?t:rs(e.type)||"Memo";case Tt:t=e._payload,e=e._init;try{return rs(e(t))}catch{}}return null}function df(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rs(t);case 8:return t===ni?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function qt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function iu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pf(e){var t=iu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){n=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jn(e){e._valueTracker||(e._valueTracker=pf(e))}function lu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=iu(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Ca(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ns(e,t){var r=t.checked;return ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function xl(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=qt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cu(e,t){t=t.checked,t!=null&&ri(e,"checked",t,!1)}function as(e,t){cu(e,t);var r=qt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?os(e,t.type,r):t.hasOwnProperty("defaultValue")&&os(e,t.type,qt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function vl(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function os(e,t,r){(t!=="number"||Ca(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var cn=Array.isArray;function Rr(e,t,r,n){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(r=""+qt(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function ss(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function yl(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(_(92));if(cn(r)){if(1<r.length)throw Error(_(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:qt(r)}}function uu(e,t){var r=qt(t.value),n=qt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function wl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function du(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function is(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?du(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yn,pu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Yn=Yn||document.createElement("div"),Yn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function kn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var pn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ff=["Webkit","ms","Moz","O"];Object.keys(pn).forEach(function(e){ff.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pn[t]=pn[e]})});function fu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||pn.hasOwnProperty(e)&&pn[e]?(""+t).trim():t+"px"}function mu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,a=fu(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,a):e[r]=a}}var mf=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ls(e,t){if(t){if(mf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function cs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var us=null;function si(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ds=null,Lr=null,Ir=null;function bl(e){if(e=Wn(e)){if(typeof ds!="function")throw Error(_(280));var t=e.stateNode;t&&(t=so(t),ds(e.stateNode,e.type,t))}}function hu(e){Lr?Ir?Ir.push(e):Ir=[e]:Lr=e}function gu(){if(Lr){var e=Lr,t=Ir;if(Ir=Lr=null,bl(e),t)for(e=0;e<t.length;e++)bl(t[e])}}function xu(e,t){return e(t)}function vu(){}var _o=!1;function yu(e,t,r){if(_o)return e(t,r);_o=!0;try{return xu(e,t,r)}finally{_o=!1,(Lr!==null||Ir!==null)&&(vu(),gu())}}function jn(e,t){var r=e.stateNode;if(r===null)return null;var n=so(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(_(231,t,typeof r));return r}var ps=!1;if(jt)try{var en={};Object.defineProperty(en,"passive",{get:function(){ps=!0}}),window.addEventListener("test",en,en),window.removeEventListener("test",en,en)}catch{ps=!1}function hf(e,t,r,n,a,o,i,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(m){this.onError(m)}}var fn=!1,za=null,Pa=!1,fs=null,gf={onError:function(e){fn=!0,za=e}};function xf(e,t,r,n,a,o,i,l,c){fn=!1,za=null,hf.apply(gf,arguments)}function vf(e,t,r,n,a,o,i,l,c){if(xf.apply(this,arguments),fn){if(fn){var u=za;fn=!1,za=null}else throw Error(_(198));Pa||(Pa=!0,fs=u)}}function mr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function wu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function kl(e){if(mr(e)!==e)throw Error(_(188))}function yf(e){var t=e.alternate;if(!t){if(t=mr(e),t===null)throw Error(_(188));return t!==e?null:e}for(var r=e,n=t;;){var a=r.return;if(a===null)break;var o=a.alternate;if(o===null){if(n=a.return,n!==null){r=n;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===r)return kl(a),e;if(o===n)return kl(a),t;o=o.sibling}throw Error(_(188))}if(r.return!==n.return)r=a,n=o;else{for(var i=!1,l=a.child;l;){if(l===r){i=!0,r=a,n=o;break}if(l===n){i=!0,n=a,r=o;break}l=l.sibling}if(!i){for(l=o.child;l;){if(l===r){i=!0,r=o,n=a;break}if(l===n){i=!0,n=o,r=a;break}l=l.sibling}if(!i)throw Error(_(189))}}if(r.alternate!==n)throw Error(_(190))}if(r.tag!==3)throw Error(_(188));return r.stateNode.current===r?e:t}function bu(e){return e=yf(e),e!==null?ku(e):null}function ku(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ku(e);if(t!==null)return t;e=e.sibling}return null}var ju=Ue.unstable_scheduleCallback,jl=Ue.unstable_cancelCallback,wf=Ue.unstable_shouldYield,bf=Ue.unstable_requestPaint,le=Ue.unstable_now,kf=Ue.unstable_getCurrentPriorityLevel,ii=Ue.unstable_ImmediatePriority,Su=Ue.unstable_UserBlockingPriority,Ta=Ue.unstable_NormalPriority,jf=Ue.unstable_LowPriority,_u=Ue.unstable_IdlePriority,ro=null,ft=null;function Sf(e){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(ro,e,void 0,(e.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:Nf,_f=Math.log,Ef=Math.LN2;function Nf(e){return e>>>=0,e===0?32:31-(_f(e)/Ef|0)|0}var Xn=64,Zn=4194304;function un(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Da(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,a=e.suspendedLanes,o=e.pingedLanes,i=r&268435455;if(i!==0){var l=i&~a;l!==0?n=un(l):(o&=i,o!==0&&(n=un(o)))}else i=r&~a,i!==0?n=un(i):o!==0&&(n=un(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&a)&&(a=n&-n,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-ot(t),a=1<<r,n|=e[r],t&=~a;return n}function Cf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zf(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-ot(o),l=1<<i,c=a[i];c===-1?(!(l&r)||l&n)&&(a[i]=Cf(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function ms(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Eu(){var e=Xn;return Xn<<=1,!(Xn&4194240)&&(Xn=64),e}function Eo(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Un(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ot(t),e[t]=r}function Pf(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-ot(r),o=1<<a;t[a]=0,n[a]=-1,e[a]=-1,r&=~o}}function li(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-ot(r),a=1<<n;a&t|e[n]&t&&(e[n]|=t),r&=~a}}var H=0;function Nu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Cu,ci,zu,Pu,Tu,hs=!1,ea=[],At=null,Mt=null,Ot=null,Sn=new Map,_n=new Map,$t=[],Tf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sl(e,t){switch(e){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":Sn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_n.delete(t.pointerId)}}function tn(e,t,r,n,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[a]},t!==null&&(t=Wn(t),t!==null&&ci(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Df(e,t,r,n,a){switch(t){case"focusin":return At=tn(At,e,t,r,n,a),!0;case"dragenter":return Mt=tn(Mt,e,t,r,n,a),!0;case"mouseover":return Ot=tn(Ot,e,t,r,n,a),!0;case"pointerover":var o=a.pointerId;return Sn.set(o,tn(Sn.get(o)||null,e,t,r,n,a)),!0;case"gotpointercapture":return o=a.pointerId,_n.set(o,tn(_n.get(o)||null,e,t,r,n,a)),!0}return!1}function Du(e){var t=Zt(e.target);if(t!==null){var r=mr(t);if(r!==null){if(t=r.tag,t===13){if(t=wu(r),t!==null){e.blockedOn=t,Tu(e.priority,function(){zu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=gs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);us=n,r.target.dispatchEvent(n),us=null}else return t=Wn(r),t!==null&&ci(t),e.blockedOn=r,!1;t.shift()}return!0}function _l(e,t,r){xa(e)&&r.delete(t)}function $f(){hs=!1,At!==null&&xa(At)&&(At=null),Mt!==null&&xa(Mt)&&(Mt=null),Ot!==null&&xa(Ot)&&(Ot=null),Sn.forEach(_l),_n.forEach(_l)}function rn(e,t){e.blockedOn===t&&(e.blockedOn=null,hs||(hs=!0,Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority,$f)))}function En(e){function t(a){return rn(a,e)}if(0<ea.length){rn(ea[0],e);for(var r=1;r<ea.length;r++){var n=ea[r];n.blockedOn===e&&(n.blockedOn=null)}}for(At!==null&&rn(At,e),Mt!==null&&rn(Mt,e),Ot!==null&&rn(Ot,e),Sn.forEach(t),_n.forEach(t),r=0;r<$t.length;r++)n=$t[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<$t.length&&(r=$t[0],r.blockedOn===null);)Du(r),r.blockedOn===null&&$t.shift()}var Ar=Nt.ReactCurrentBatchConfig,$a=!0;function Rf(e,t,r,n){var a=H,o=Ar.transition;Ar.transition=null;try{H=1,ui(e,t,r,n)}finally{H=a,Ar.transition=o}}function Lf(e,t,r,n){var a=H,o=Ar.transition;Ar.transition=null;try{H=4,ui(e,t,r,n)}finally{H=a,Ar.transition=o}}function ui(e,t,r,n){if($a){var a=gs(e,t,r,n);if(a===null)Io(e,t,n,Ra,r),Sl(e,n);else if(Df(a,e,t,r,n))n.stopPropagation();else if(Sl(e,n),t&4&&-1<Tf.indexOf(e)){for(;a!==null;){var o=Wn(a);if(o!==null&&Cu(o),o=gs(e,t,r,n),o===null&&Io(e,t,n,Ra,r),o===a)break;a=o}a!==null&&n.stopPropagation()}else Io(e,t,n,null,r)}}var Ra=null;function gs(e,t,r,n){if(Ra=null,e=si(n),e=Zt(e),e!==null)if(t=mr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=wu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ra=e,null}function $u(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kf()){case ii:return 1;case Su:return 4;case Ta:case jf:return 16;case _u:return 536870912;default:return 16}default:return 16}}var Lt=null,di=null,va=null;function Ru(){if(va)return va;var e,t=di,r=t.length,n,a="value"in Lt?Lt.value:Lt.textContent,o=a.length;for(e=0;e<r&&t[e]===a[e];e++);var i=r-e;for(n=1;n<=i&&t[r-n]===a[o-n];n++);return va=a.slice(e,1<n?1-n:void 0)}function ya(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ta(){return!0}function El(){return!1}function We(e){function t(r,n,a,o,i){this._reactName=r,this._targetInst=a,this.type=n,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ta:El,this.isPropagationStopped=El,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ta)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ta)},persist:function(){},isPersistent:ta}),t}var Jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pi=We(Jr),Bn=ne({},Jr,{view:0,detail:0}),If=We(Bn),No,Co,nn,no=ne({},Bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nn&&(nn&&e.type==="mousemove"?(No=e.screenX-nn.screenX,Co=e.screenY-nn.screenY):Co=No=0,nn=e),No)},movementY:function(e){return"movementY"in e?e.movementY:Co}}),Nl=We(no),Af=ne({},no,{dataTransfer:0}),Mf=We(Af),Of=ne({},Bn,{relatedTarget:0}),zo=We(Of),Ff=ne({},Jr,{animationName:0,elapsedTime:0,pseudoElement:0}),Uf=We(Ff),Bf=ne({},Jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wf=We(Bf),Vf=ne({},Jr,{data:0}),Cl=We(Vf),qf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qf[e])?!!t[e]:!1}function fi(){return Kf}var Gf=ne({},Bn,{key:function(e){if(e.key){var t=qf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ya(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fi,charCode:function(e){return e.type==="keypress"?ya(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ya(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jf=We(Gf),Yf=ne({},no,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zl=We(Yf),Xf=ne({},Bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fi}),Zf=We(Xf),em=ne({},Jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),tm=We(em),rm=ne({},no,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nm=We(rm),am=[9,13,27,32],mi=jt&&"CompositionEvent"in window,mn=null;jt&&"documentMode"in document&&(mn=document.documentMode);var om=jt&&"TextEvent"in window&&!mn,Lu=jt&&(!mi||mn&&8<mn&&11>=mn),Pl=" ",Tl=!1;function Iu(e,t){switch(e){case"keyup":return am.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Au(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jr=!1;function sm(e,t){switch(e){case"compositionend":return Au(t);case"keypress":return t.which!==32?null:(Tl=!0,Pl);case"textInput":return e=t.data,e===Pl&&Tl?null:e;default:return null}}function im(e,t){if(jr)return e==="compositionend"||!mi&&Iu(e,t)?(e=Ru(),va=di=Lt=null,jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lu&&t.locale!=="ko"?null:t.data;default:return null}}var lm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lm[e.type]:t==="textarea"}function Mu(e,t,r,n){hu(n),t=La(t,"onChange"),0<t.length&&(r=new pi("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var hn=null,Nn=null;function cm(e){Gu(e,0)}function ao(e){var t=Er(e);if(lu(t))return e}function um(e,t){if(e==="change")return t}var Ou=!1;if(jt){var Po;if(jt){var To="oninput"in document;if(!To){var $l=document.createElement("div");$l.setAttribute("oninput","return;"),To=typeof $l.oninput=="function"}Po=To}else Po=!1;Ou=Po&&(!document.documentMode||9<document.documentMode)}function Rl(){hn&&(hn.detachEvent("onpropertychange",Fu),Nn=hn=null)}function Fu(e){if(e.propertyName==="value"&&ao(Nn)){var t=[];Mu(t,Nn,e,si(e)),yu(cm,t)}}function dm(e,t,r){e==="focusin"?(Rl(),hn=t,Nn=r,hn.attachEvent("onpropertychange",Fu)):e==="focusout"&&Rl()}function pm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ao(Nn)}function fm(e,t){if(e==="click")return ao(t)}function mm(e,t){if(e==="input"||e==="change")return ao(t)}function hm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:hm;function Cn(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!Xo.call(t,a)||!it(e[a],t[a]))return!1}return!0}function Ll(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Il(e,t){var r=Ll(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Ll(r)}}function Uu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Uu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bu(){for(var e=window,t=Ca();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ca(e.document)}return t}function hi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gm(e){var t=Bu(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Uu(r.ownerDocument.documentElement,r)){if(n!==null&&hi(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,o=Math.min(n.start,a);n=n.end===void 0?o:Math.min(n.end,a),!e.extend&&o>n&&(a=n,n=o,o=a),a=Il(r,o);var i=Il(r,n);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var xm=jt&&"documentMode"in document&&11>=document.documentMode,Sr=null,xs=null,gn=null,vs=!1;function Al(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;vs||Sr==null||Sr!==Ca(n)||(n=Sr,"selectionStart"in n&&hi(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),gn&&Cn(gn,n)||(gn=n,n=La(xs,"onSelect"),0<n.length&&(t=new pi("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Sr)))}function ra(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var _r={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionend:ra("Transition","TransitionEnd")},Do={},Wu={};jt&&(Wu=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);function oo(e){if(Do[e])return Do[e];if(!_r[e])return e;var t=_r[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Wu)return Do[e]=t[r];return e}var Vu=oo("animationend"),qu=oo("animationiteration"),Hu=oo("animationstart"),Qu=oo("transitionend"),Ku=new Map,Ml="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kt(e,t){Ku.set(e,t),fr(t,[e])}for(var $o=0;$o<Ml.length;$o++){var Ro=Ml[$o],vm=Ro.toLowerCase(),ym=Ro[0].toUpperCase()+Ro.slice(1);Kt(vm,"on"+ym)}Kt(Vu,"onAnimationEnd");Kt(qu,"onAnimationIteration");Kt(Hu,"onAnimationStart");Kt("dblclick","onDoubleClick");Kt("focusin","onFocus");Kt("focusout","onBlur");Kt(Qu,"onTransitionEnd");Br("onMouseEnter",["mouseout","mouseover"]);Br("onMouseLeave",["mouseout","mouseover"]);Br("onPointerEnter",["pointerout","pointerover"]);Br("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wm=new Set("cancel close invalid load scroll toggle".split(" ").concat(dn));function Ol(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,vf(n,t,void 0,e),e.currentTarget=null}function Gu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],a=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var i=n.length-1;0<=i;i--){var l=n[i],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&a.isPropagationStopped())break e;Ol(a,l,u),o=c}else for(i=0;i<n.length;i++){if(l=n[i],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&a.isPropagationStopped())break e;Ol(a,l,u),o=c}}}if(Pa)throw e=fs,Pa=!1,fs=null,e}function Y(e,t){var r=t[js];r===void 0&&(r=t[js]=new Set);var n=e+"__bubble";r.has(n)||(Ju(t,e,2,!1),r.add(n))}function Lo(e,t,r){var n=0;t&&(n|=4),Ju(r,e,n,t)}var na="_reactListening"+Math.random().toString(36).slice(2);function zn(e){if(!e[na]){e[na]=!0,nu.forEach(function(r){r!=="selectionchange"&&(wm.has(r)||Lo(r,!1,e),Lo(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[na]||(t[na]=!0,Lo("selectionchange",!1,t))}}function Ju(e,t,r,n){switch($u(t)){case 1:var a=Rf;break;case 4:a=Lf;break;default:a=ui}r=a.bind(null,t,r,e),a=void 0,!ps||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Io(e,t,r,n,a){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var l=n.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(i===4)for(i=n.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;i=i.return}for(;l!==null;){if(i=Zt(l),i===null)return;if(c=i.tag,c===5||c===6){n=o=i;continue e}l=l.parentNode}}n=n.return}yu(function(){var u=o,m=si(r),f=[];e:{var g=Ku.get(e);if(g!==void 0){var v=pi,y=e;switch(e){case"keypress":if(ya(r)===0)break e;case"keydown":case"keyup":v=Jf;break;case"focusin":y="focus",v=zo;break;case"focusout":y="blur",v=zo;break;case"beforeblur":case"afterblur":v=zo;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Nl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Mf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Zf;break;case Vu:case qu:case Hu:v=Uf;break;case Qu:v=tm;break;case"scroll":v=If;break;case"wheel":v=nm;break;case"copy":case"cut":case"paste":v=Wf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=zl}var x=(t&4)!==0,j=!x&&e==="scroll",p=x?g!==null?g+"Capture":null:g;x=[];for(var d=u,h;d!==null;){h=d;var b=h.stateNode;if(h.tag===5&&b!==null&&(h=b,p!==null&&(b=jn(d,p),b!=null&&x.push(Pn(d,b,h)))),j)break;d=d.return}0<x.length&&(g=new v(g,y,null,r,m),f.push({event:g,listeners:x}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&r!==us&&(y=r.relatedTarget||r.fromElement)&&(Zt(y)||y[St]))break e;if((v||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,v?(y=r.relatedTarget||r.toElement,v=u,y=y?Zt(y):null,y!==null&&(j=mr(y),y!==j||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(x=Nl,b="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=zl,b="onPointerLeave",p="onPointerEnter",d="pointer"),j=v==null?g:Er(v),h=y==null?g:Er(y),g=new x(b,d+"leave",v,r,m),g.target=j,g.relatedTarget=h,b=null,Zt(m)===u&&(x=new x(p,d+"enter",y,r,m),x.target=h,x.relatedTarget=j,b=x),j=b,v&&y)t:{for(x=v,p=y,d=0,h=x;h;h=vr(h))d++;for(h=0,b=p;b;b=vr(b))h++;for(;0<d-h;)x=vr(x),d--;for(;0<h-d;)p=vr(p),h--;for(;d--;){if(x===p||p!==null&&x===p.alternate)break t;x=vr(x),p=vr(p)}x=null}else x=null;v!==null&&Fl(f,g,v,x,!1),y!==null&&j!==null&&Fl(f,j,y,x,!0)}}e:{if(g=u?Er(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var S=um;else if(Dl(g))if(Ou)S=mm;else{S=pm;var N=dm}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=fm);if(S&&(S=S(e,u))){Mu(f,S,r,m);break e}N&&N(e,g,u),e==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&os(g,"number",g.value)}switch(N=u?Er(u):window,e){case"focusin":(Dl(N)||N.contentEditable==="true")&&(Sr=N,xs=u,gn=null);break;case"focusout":gn=xs=Sr=null;break;case"mousedown":vs=!0;break;case"contextmenu":case"mouseup":case"dragend":vs=!1,Al(f,r,m);break;case"selectionchange":if(xm)break;case"keydown":case"keyup":Al(f,r,m)}var C;if(mi)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else jr?Iu(e,r)&&(z="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(z="onCompositionStart");z&&(Lu&&r.locale!=="ko"&&(jr||z!=="onCompositionStart"?z==="onCompositionEnd"&&jr&&(C=Ru()):(Lt=m,di="value"in Lt?Lt.value:Lt.textContent,jr=!0)),N=La(u,z),0<N.length&&(z=new Cl(z,e,null,r,m),f.push({event:z,listeners:N}),C?z.data=C:(C=Au(r),C!==null&&(z.data=C)))),(C=om?sm(e,r):im(e,r))&&(u=La(u,"onBeforeInput"),0<u.length&&(m=new Cl("onBeforeInput","beforeinput",null,r,m),f.push({event:m,listeners:u}),m.data=C))}Gu(f,t)})}function Pn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function La(e,t){for(var r=t+"Capture",n=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=jn(e,r),o!=null&&n.unshift(Pn(e,o,a)),o=jn(e,t),o!=null&&n.push(Pn(e,o,a))),e=e.return}return n}function vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fl(e,t,r,n,a){for(var o=t._reactName,i=[];r!==null&&r!==n;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===n)break;l.tag===5&&u!==null&&(l=u,a?(c=jn(r,o),c!=null&&i.unshift(Pn(r,c,l))):a||(c=jn(r,o),c!=null&&i.push(Pn(r,c,l)))),r=r.return}i.length!==0&&e.push({event:t,listeners:i})}var bm=/\r\n?/g,km=/\u0000|\uFFFD/g;function Ul(e){return(typeof e=="string"?e:""+e).replace(bm,`
`).replace(km,"")}function aa(e,t,r){if(t=Ul(t),Ul(e)!==t&&r)throw Error(_(425))}function Ia(){}var ys=null,ws=null;function bs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ks=typeof setTimeout=="function"?setTimeout:void 0,jm=typeof clearTimeout=="function"?clearTimeout:void 0,Bl=typeof Promise=="function"?Promise:void 0,Sm=typeof queueMicrotask=="function"?queueMicrotask:typeof Bl<"u"?function(e){return Bl.resolve(null).then(e).catch(_m)}:ks;function _m(e){setTimeout(function(){throw e})}function Ao(e,t){var r=t,n=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(n===0){e.removeChild(a),En(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=a}while(r);En(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),dt="__reactFiber$"+Yr,Tn="__reactProps$"+Yr,St="__reactContainer$"+Yr,js="__reactEvents$"+Yr,Em="__reactListeners$"+Yr,Nm="__reactHandles$"+Yr;function Zt(e){var t=e[dt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[St]||r[dt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Wl(e);e!==null;){if(r=e[dt])return r;e=Wl(e)}return t}e=r,r=e.parentNode}return null}function Wn(e){return e=e[dt]||e[St],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function so(e){return e[Tn]||null}var Ss=[],Nr=-1;function Gt(e){return{current:e}}function X(e){0>Nr||(e.current=Ss[Nr],Ss[Nr]=null,Nr--)}function G(e,t){Nr++,Ss[Nr]=e.current,e.current=t}var Ht={},Se=Gt(Ht),Re=Gt(!1),ir=Ht;function Wr(e,t){var r=e.type.contextTypes;if(!r)return Ht;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in r)a[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Le(e){return e=e.childContextTypes,e!=null}function Aa(){X(Re),X(Se)}function Vl(e,t,r){if(Se.current!==Ht)throw Error(_(168));G(Se,t),G(Re,r)}function Yu(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var a in n)if(!(a in t))throw Error(_(108,df(e)||"Unknown",a));return ne({},r,n)}function Ma(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ht,ir=Se.current,G(Se,e),G(Re,Re.current),!0}function ql(e,t,r){var n=e.stateNode;if(!n)throw Error(_(169));r?(e=Yu(e,t,ir),n.__reactInternalMemoizedMergedChildContext=e,X(Re),X(Se),G(Se,e)):X(Re),G(Re,r)}var vt=null,io=!1,Mo=!1;function Xu(e){vt===null?vt=[e]:vt.push(e)}function Cm(e){io=!0,Xu(e)}function Jt(){if(!Mo&&vt!==null){Mo=!0;var e=0,t=H;try{var r=vt;for(H=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}vt=null,io=!1}catch(a){throw vt!==null&&(vt=vt.slice(e+1)),ju(ii,Jt),a}finally{H=t,Mo=!1}}return null}var Cr=[],zr=0,Oa=null,Fa=0,Ve=[],qe=0,lr=null,wt=1,bt="";function Yt(e,t){Cr[zr++]=Fa,Cr[zr++]=Oa,Oa=e,Fa=t}function Zu(e,t,r){Ve[qe++]=wt,Ve[qe++]=bt,Ve[qe++]=lr,lr=e;var n=wt;e=bt;var a=32-ot(n)-1;n&=~(1<<a),r+=1;var o=32-ot(t)+a;if(30<o){var i=a-a%5;o=(n&(1<<i)-1).toString(32),n>>=i,a-=i,wt=1<<32-ot(t)+a|r<<a|n,bt=o+e}else wt=1<<o|r<<a|n,bt=e}function gi(e){e.return!==null&&(Yt(e,1),Zu(e,1,0))}function xi(e){for(;e===Oa;)Oa=Cr[--zr],Cr[zr]=null,Fa=Cr[--zr],Cr[zr]=null;for(;e===lr;)lr=Ve[--qe],Ve[qe]=null,bt=Ve[--qe],Ve[qe]=null,wt=Ve[--qe],Ve[qe]=null}var Fe=null,Oe=null,Z=!1,nt=null;function ed(e,t){var r=He(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Hl(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Fe=e,Oe=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Fe=e,Oe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=lr!==null?{id:wt,overflow:bt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=He(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Fe=e,Oe=null,!0):!1;default:return!1}}function _s(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Es(e){if(Z){var t=Oe;if(t){var r=t;if(!Hl(e,t)){if(_s(e))throw Error(_(418));t=Ft(r.nextSibling);var n=Fe;t&&Hl(e,t)?ed(n,r):(e.flags=e.flags&-4097|2,Z=!1,Fe=e)}}else{if(_s(e))throw Error(_(418));e.flags=e.flags&-4097|2,Z=!1,Fe=e}}}function Ql(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Fe=e}function oa(e){if(e!==Fe)return!1;if(!Z)return Ql(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!bs(e.type,e.memoizedProps)),t&&(t=Oe)){if(_s(e))throw td(),Error(_(418));for(;t;)ed(e,t),t=Ft(t.nextSibling)}if(Ql(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Oe=Ft(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Oe=null}}else Oe=Fe?Ft(e.stateNode.nextSibling):null;return!0}function td(){for(var e=Oe;e;)e=Ft(e.nextSibling)}function Vr(){Oe=Fe=null,Z=!1}function vi(e){nt===null?nt=[e]:nt.push(e)}var zm=Nt.ReactCurrentBatchConfig;function an(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(_(309));var n=r.stateNode}if(!n)throw Error(_(147,e));var a=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var l=a.refs;i===null?delete l[o]:l[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!r._owner)throw Error(_(290,e))}return e}function sa(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Kl(e){var t=e._init;return t(e._payload)}function rd(e){function t(p,d){if(e){var h=p.deletions;h===null?(p.deletions=[d],p.flags|=16):h.push(d)}}function r(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function n(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function a(p,d){return p=Vt(p,d),p.index=0,p.sibling=null,p}function o(p,d,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<d?(p.flags|=2,d):h):(p.flags|=2,d)):(p.flags|=1048576,d)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,d,h,b){return d===null||d.tag!==6?(d=qo(h,p.mode,b),d.return=p,d):(d=a(d,h),d.return=p,d)}function c(p,d,h,b){var S=h.type;return S===kr?m(p,d,h.props.children,b,h.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Tt&&Kl(S)===d.type)?(b=a(d,h.props),b.ref=an(p,d,h),b.return=p,b):(b=Ea(h.type,h.key,h.props,null,p.mode,b),b.ref=an(p,d,h),b.return=p,b)}function u(p,d,h,b){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Ho(h,p.mode,b),d.return=p,d):(d=a(d,h.children||[]),d.return=p,d)}function m(p,d,h,b,S){return d===null||d.tag!==7?(d=ar(h,p.mode,b,S),d.return=p,d):(d=a(d,h),d.return=p,d)}function f(p,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=qo(""+d,p.mode,h),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Gn:return h=Ea(d.type,d.key,d.props,null,p.mode,h),h.ref=an(p,null,d),h.return=p,h;case br:return d=Ho(d,p.mode,h),d.return=p,d;case Tt:var b=d._init;return f(p,b(d._payload),h)}if(cn(d)||Zr(d))return d=ar(d,p.mode,h,null),d.return=p,d;sa(p,d)}return null}function g(p,d,h,b){var S=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:l(p,d,""+h,b);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Gn:return h.key===S?c(p,d,h,b):null;case br:return h.key===S?u(p,d,h,b):null;case Tt:return S=h._init,g(p,d,S(h._payload),b)}if(cn(h)||Zr(h))return S!==null?null:m(p,d,h,b,null);sa(p,h)}return null}function v(p,d,h,b,S){if(typeof b=="string"&&b!==""||typeof b=="number")return p=p.get(h)||null,l(d,p,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Gn:return p=p.get(b.key===null?h:b.key)||null,c(d,p,b,S);case br:return p=p.get(b.key===null?h:b.key)||null,u(d,p,b,S);case Tt:var N=b._init;return v(p,d,h,N(b._payload),S)}if(cn(b)||Zr(b))return p=p.get(h)||null,m(d,p,b,S,null);sa(d,b)}return null}function y(p,d,h,b){for(var S=null,N=null,C=d,z=d=0,$=null;C!==null&&z<h.length;z++){C.index>z?($=C,C=null):$=C.sibling;var R=g(p,C,h[z],b);if(R===null){C===null&&(C=$);break}e&&C&&R.alternate===null&&t(p,C),d=o(R,d,z),N===null?S=R:N.sibling=R,N=R,C=$}if(z===h.length)return r(p,C),Z&&Yt(p,z),S;if(C===null){for(;z<h.length;z++)C=f(p,h[z],b),C!==null&&(d=o(C,d,z),N===null?S=C:N.sibling=C,N=C);return Z&&Yt(p,z),S}for(C=n(p,C);z<h.length;z++)$=v(C,p,z,h[z],b),$!==null&&(e&&$.alternate!==null&&C.delete($.key===null?z:$.key),d=o($,d,z),N===null?S=$:N.sibling=$,N=$);return e&&C.forEach(function(W){return t(p,W)}),Z&&Yt(p,z),S}function x(p,d,h,b){var S=Zr(h);if(typeof S!="function")throw Error(_(150));if(h=S.call(h),h==null)throw Error(_(151));for(var N=S=null,C=d,z=d=0,$=null,R=h.next();C!==null&&!R.done;z++,R=h.next()){C.index>z?($=C,C=null):$=C.sibling;var W=g(p,C,R.value,b);if(W===null){C===null&&(C=$);break}e&&C&&W.alternate===null&&t(p,C),d=o(W,d,z),N===null?S=W:N.sibling=W,N=W,C=$}if(R.done)return r(p,C),Z&&Yt(p,z),S;if(C===null){for(;!R.done;z++,R=h.next())R=f(p,R.value,b),R!==null&&(d=o(R,d,z),N===null?S=R:N.sibling=R,N=R);return Z&&Yt(p,z),S}for(C=n(p,C);!R.done;z++,R=h.next())R=v(C,p,z,R.value,b),R!==null&&(e&&R.alternate!==null&&C.delete(R.key===null?z:R.key),d=o(R,d,z),N===null?S=R:N.sibling=R,N=R);return e&&C.forEach(function(_e){return t(p,_e)}),Z&&Yt(p,z),S}function j(p,d,h,b){if(typeof h=="object"&&h!==null&&h.type===kr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Gn:e:{for(var S=h.key,N=d;N!==null;){if(N.key===S){if(S=h.type,S===kr){if(N.tag===7){r(p,N.sibling),d=a(N,h.props.children),d.return=p,p=d;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Tt&&Kl(S)===N.type){r(p,N.sibling),d=a(N,h.props),d.ref=an(p,N,h),d.return=p,p=d;break e}r(p,N);break}else t(p,N);N=N.sibling}h.type===kr?(d=ar(h.props.children,p.mode,b,h.key),d.return=p,p=d):(b=Ea(h.type,h.key,h.props,null,p.mode,b),b.ref=an(p,d,h),b.return=p,p=b)}return i(p);case br:e:{for(N=h.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){r(p,d.sibling),d=a(d,h.children||[]),d.return=p,p=d;break e}else{r(p,d);break}else t(p,d);d=d.sibling}d=Ho(h,p.mode,b),d.return=p,p=d}return i(p);case Tt:return N=h._init,j(p,d,N(h._payload),b)}if(cn(h))return y(p,d,h,b);if(Zr(h))return x(p,d,h,b);sa(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(r(p,d.sibling),d=a(d,h),d.return=p,p=d):(r(p,d),d=qo(h,p.mode,b),d.return=p,p=d),i(p)):r(p,d)}return j}var qr=rd(!0),nd=rd(!1),Ua=Gt(null),Ba=null,Pr=null,yi=null;function wi(){yi=Pr=Ba=null}function bi(e){var t=Ua.current;X(Ua),e._currentValue=t}function Ns(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Mr(e,t){Ba=e,yi=Pr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($e=!0),e.firstContext=null)}function Ge(e){var t=e._currentValue;if(yi!==e)if(e={context:e,memoizedValue:t,next:null},Pr===null){if(Ba===null)throw Error(_(308));Pr=e,Ba.dependencies={lanes:0,firstContext:e}}else Pr=Pr.next=e;return t}var er=null;function ki(e){er===null?er=[e]:er.push(e)}function ad(e,t,r,n){var a=t.interleaved;return a===null?(r.next=r,ki(t)):(r.next=a.next,a.next=r),t.interleaved=r,_t(e,n)}function _t(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Dt=!1;function ji(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function od(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,B&2){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,_t(e,r)}return a=n.interleaved,a===null?(t.next=t,ki(n)):(t.next=a.next,a.next=t),n.interleaved=t,_t(e,r)}function wa(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,li(e,r)}}function Gl(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var a=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?a=o=i:o=o.next=i,r=r.next}while(r!==null);o===null?a=o=t:o=o.next=t}else a=o=t;r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Wa(e,t,r,n){var a=e.updateQueue;Dt=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,u=c.next;c.next=null,i===null?o=u:i.next=u,i=c;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==i&&(l===null?m.firstBaseUpdate=u:l.next=u,m.lastBaseUpdate=c))}if(o!==null){var f=a.baseState;i=0,m=u=c=null,l=o;do{var g=l.lane,v=l.eventTime;if((n&g)===g){m!==null&&(m=m.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,x=l;switch(g=t,v=r,x.tag){case 1:if(y=x.payload,typeof y=="function"){f=y.call(v,f,g);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,g=typeof y=="function"?y.call(v,f,g):y,g==null)break e;f=ne({},f,g);break e;case 2:Dt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=a.effects,g===null?a.effects=[l]:g.push(l))}else v={eventTime:v,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(u=m=v,c=f):m=m.next=v,i|=g;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;g=l,l=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(!0);if(m===null&&(c=f),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=m,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);ur|=i,e.lanes=i,e.memoizedState=f}}function Jl(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],a=n.callback;if(a!==null){if(n.callback=null,n=r,typeof a!="function")throw Error(_(191,a));a.call(n)}}}var Vn={},mt=Gt(Vn),Dn=Gt(Vn),$n=Gt(Vn);function tr(e){if(e===Vn)throw Error(_(174));return e}function Si(e,t){switch(G($n,t),G(Dn,e),G(mt,Vn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:is(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=is(t,e)}X(mt),G(mt,t)}function Hr(){X(mt),X(Dn),X($n)}function sd(e){tr($n.current);var t=tr(mt.current),r=is(t,e.type);t!==r&&(G(Dn,e),G(mt,r))}function _i(e){Dn.current===e&&(X(mt),X(Dn))}var te=Gt(0);function Va(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Oo=[];function Ei(){for(var e=0;e<Oo.length;e++)Oo[e]._workInProgressVersionPrimary=null;Oo.length=0}var ba=Nt.ReactCurrentDispatcher,Fo=Nt.ReactCurrentBatchConfig,cr=0,re=null,de=null,fe=null,qa=!1,xn=!1,Rn=0,Pm=0;function we(){throw Error(_(321))}function Ni(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!it(e[r],t[r]))return!1;return!0}function Ci(e,t,r,n,a,o){if(cr=o,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ba.current=e===null||e.memoizedState===null?Rm:Lm,e=r(n,a),xn){o=0;do{if(xn=!1,Rn=0,25<=o)throw Error(_(301));o+=1,fe=de=null,t.updateQueue=null,ba.current=Im,e=r(n,a)}while(xn)}if(ba.current=Ha,t=de!==null&&de.next!==null,cr=0,fe=de=re=null,qa=!1,t)throw Error(_(300));return e}function zi(){var e=Rn!==0;return Rn=0,e}function ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?re.memoizedState=fe=e:fe=fe.next=e,fe}function Je(){if(de===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=fe===null?re.memoizedState:fe.next;if(t!==null)fe=t,de=e;else{if(e===null)throw Error(_(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},fe===null?re.memoizedState=fe=e:fe=fe.next=e}return fe}function Ln(e,t){return typeof t=="function"?t(e):t}function Uo(e){var t=Je(),r=t.queue;if(r===null)throw Error(_(311));r.lastRenderedReducer=e;var n=de,a=n.baseQueue,o=r.pending;if(o!==null){if(a!==null){var i=a.next;a.next=o.next,o.next=i}n.baseQueue=a=o,r.pending=null}if(a!==null){o=a.next,n=n.baseState;var l=i=null,c=null,u=o;do{var m=u.lane;if((cr&m)===m)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var f={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,i=n):c=c.next=f,re.lanes|=m,ur|=m}u=u.next}while(u!==null&&u!==o);c===null?i=n:c.next=l,it(n,t.memoizedState)||($e=!0),t.memoizedState=n,t.baseState=i,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){a=e;do o=a.lane,re.lanes|=o,ur|=o,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Bo(e){var t=Je(),r=t.queue;if(r===null)throw Error(_(311));r.lastRenderedReducer=e;var n=r.dispatch,a=r.pending,o=t.memoizedState;if(a!==null){r.pending=null;var i=a=a.next;do o=e(o,i.action),i=i.next;while(i!==a);it(o,t.memoizedState)||($e=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function id(){}function ld(e,t){var r=re,n=Je(),a=t(),o=!it(n.memoizedState,a);if(o&&(n.memoizedState=a,$e=!0),n=n.queue,Pi(dd.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||fe!==null&&fe.memoizedState.tag&1){if(r.flags|=2048,In(9,ud.bind(null,r,n,a,t),void 0,null),me===null)throw Error(_(349));cr&30||cd(r,t,a)}return a}function cd(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function ud(e,t,r,n){t.value=r,t.getSnapshot=n,pd(t)&&fd(e)}function dd(e,t,r){return r(function(){pd(t)&&fd(e)})}function pd(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!it(e,r)}catch{return!0}}function fd(e){var t=_t(e,1);t!==null&&st(t,e,1,-1)}function Yl(e){var t=ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ln,lastRenderedState:e},t.queue=e,e=e.dispatch=$m.bind(null,re,e),[t.memoizedState,e]}function In(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function md(){return Je().memoizedState}function ka(e,t,r,n){var a=ut();re.flags|=e,a.memoizedState=In(1|t,r,void 0,n===void 0?null:n)}function lo(e,t,r,n){var a=Je();n=n===void 0?null:n;var o=void 0;if(de!==null){var i=de.memoizedState;if(o=i.destroy,n!==null&&Ni(n,i.deps)){a.memoizedState=In(t,r,o,n);return}}re.flags|=e,a.memoizedState=In(1|t,r,o,n)}function Xl(e,t){return ka(8390656,8,e,t)}function Pi(e,t){return lo(2048,8,e,t)}function hd(e,t){return lo(4,2,e,t)}function gd(e,t){return lo(4,4,e,t)}function xd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vd(e,t,r){return r=r!=null?r.concat([e]):null,lo(4,4,xd.bind(null,t,e),r)}function Ti(){}function yd(e,t){var r=Je();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Ni(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function wd(e,t){var r=Je();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Ni(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function bd(e,t,r){return cr&21?(it(r,t)||(r=Eu(),re.lanes|=r,ur|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=r)}function Tm(e,t){var r=H;H=r!==0&&4>r?r:4,e(!0);var n=Fo.transition;Fo.transition={};try{e(!1),t()}finally{H=r,Fo.transition=n}}function kd(){return Je().memoizedState}function Dm(e,t,r){var n=Wt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},jd(e))Sd(t,r);else if(r=ad(e,t,r,n),r!==null){var a=ze();st(r,e,n,a),_d(r,t,n)}}function $m(e,t,r){var n=Wt(e),a={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(jd(e))Sd(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,l=o(i,r);if(a.hasEagerState=!0,a.eagerState=l,it(l,i)){var c=t.interleaved;c===null?(a.next=a,ki(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}r=ad(e,t,a,n),r!==null&&(a=ze(),st(r,e,n,a),_d(r,t,n))}}function jd(e){var t=e.alternate;return e===re||t!==null&&t===re}function Sd(e,t){xn=qa=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function _d(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,li(e,r)}}var Ha={readContext:Ge,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},Rm={readContext:Ge,useCallback:function(e,t){return ut().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:Xl,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ka(4194308,4,xd.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ka(4194308,4,e,t)},useInsertionEffect:function(e,t){return ka(4,2,e,t)},useMemo:function(e,t){var r=ut();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=ut();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Dm.bind(null,re,e),[n.memoizedState,e]},useRef:function(e){var t=ut();return e={current:e},t.memoizedState=e},useState:Yl,useDebugValue:Ti,useDeferredValue:function(e){return ut().memoizedState=e},useTransition:function(){var e=Yl(!1),t=e[0];return e=Tm.bind(null,e[1]),ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=re,a=ut();if(Z){if(r===void 0)throw Error(_(407));r=r()}else{if(r=t(),me===null)throw Error(_(349));cr&30||cd(n,t,r)}a.memoizedState=r;var o={value:r,getSnapshot:t};return a.queue=o,Xl(dd.bind(null,n,o,e),[e]),n.flags|=2048,In(9,ud.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=ut(),t=me.identifierPrefix;if(Z){var r=bt,n=wt;r=(n&~(1<<32-ot(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Rn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Pm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Lm={readContext:Ge,useCallback:yd,useContext:Ge,useEffect:Pi,useImperativeHandle:vd,useInsertionEffect:hd,useLayoutEffect:gd,useMemo:wd,useReducer:Uo,useRef:md,useState:function(){return Uo(Ln)},useDebugValue:Ti,useDeferredValue:function(e){var t=Je();return bd(t,de.memoizedState,e)},useTransition:function(){var e=Uo(Ln)[0],t=Je().memoizedState;return[e,t]},useMutableSource:id,useSyncExternalStore:ld,useId:kd,unstable_isNewReconciler:!1},Im={readContext:Ge,useCallback:yd,useContext:Ge,useEffect:Pi,useImperativeHandle:vd,useInsertionEffect:hd,useLayoutEffect:gd,useMemo:wd,useReducer:Bo,useRef:md,useState:function(){return Bo(Ln)},useDebugValue:Ti,useDeferredValue:function(e){var t=Je();return de===null?t.memoizedState=e:bd(t,de.memoizedState,e)},useTransition:function(){var e=Bo(Ln)[0],t=Je().memoizedState;return[e,t]},useMutableSource:id,useSyncExternalStore:ld,useId:kd,unstable_isNewReconciler:!1};function tt(e,t){if(e&&e.defaultProps){t=ne({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Cs(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:ne({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var co={isMounted:function(e){return(e=e._reactInternals)?mr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=ze(),a=Wt(e),o=kt(n,a);o.payload=t,r!=null&&(o.callback=r),t=Ut(e,o,a),t!==null&&(st(t,e,a,n),wa(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=ze(),a=Wt(e),o=kt(n,a);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=Ut(e,o,a),t!==null&&(st(t,e,a,n),wa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ze(),n=Wt(e),a=kt(r,n);a.tag=2,t!=null&&(a.callback=t),t=Ut(e,a,n),t!==null&&(st(t,e,n,r),wa(t,e,n))}};function Zl(e,t,r,n,a,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,i):t.prototype&&t.prototype.isPureReactComponent?!Cn(r,n)||!Cn(a,o):!0}function Ed(e,t,r){var n=!1,a=Ht,o=t.contextType;return typeof o=="object"&&o!==null?o=Ge(o):(a=Le(t)?ir:Se.current,n=t.contextTypes,o=(n=n!=null)?Wr(e,a):Ht),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=co,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function ec(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&co.enqueueReplaceState(t,t.state,null)}function zs(e,t,r,n){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},ji(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=Ge(o):(o=Le(t)?ir:Se.current,a.context=Wr(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Cs(e,t,o,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&co.enqueueReplaceState(a,a.state,null),Wa(e,r,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Qr(e,t){try{var r="",n=t;do r+=uf(n),n=n.return;while(n);var a=r}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function Wo(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Ps(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Am=typeof WeakMap=="function"?WeakMap:Map;function Nd(e,t,r){r=kt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Ka||(Ka=!0,Fs=n),Ps(e,t)},r}function Cd(e,t,r){r=kt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=t.value;r.payload=function(){return n(a)},r.callback=function(){Ps(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){Ps(e,t),typeof n!="function"&&(Bt===null?Bt=new Set([this]):Bt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),r}function tc(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Am;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(r)||(a.add(r),e=Ym.bind(null,e,t,r),t.then(e,e))}function rc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function nc(e,t,r,n,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=kt(-1,1),t.tag=2,Ut(r,t,1))),r.lanes|=1),e)}var Mm=Nt.ReactCurrentOwner,$e=!1;function Ce(e,t,r,n){t.child=e===null?nd(t,null,r,n):qr(t,e.child,r,n)}function ac(e,t,r,n,a){r=r.render;var o=t.ref;return Mr(t,a),n=Ci(e,t,r,n,o,a),r=zi(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Et(e,t,a)):(Z&&r&&gi(t),t.flags|=1,Ce(e,t,n,a),t.child)}function oc(e,t,r,n,a){if(e===null){var o=r.type;return typeof o=="function"&&!Oi(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,zd(e,t,o,n,a)):(e=Ea(r.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&a)){var i=o.memoizedProps;if(r=r.compare,r=r!==null?r:Cn,r(i,n)&&e.ref===t.ref)return Et(e,t,a)}return t.flags|=1,e=Vt(o,n),e.ref=t.ref,e.return=t,t.child=e}function zd(e,t,r,n,a){if(e!==null){var o=e.memoizedProps;if(Cn(o,n)&&e.ref===t.ref)if($e=!1,t.pendingProps=n=o,(e.lanes&a)!==0)e.flags&131072&&($e=!0);else return t.lanes=e.lanes,Et(e,t,a)}return Ts(e,t,r,n,a)}function Pd(e,t,r){var n=t.pendingProps,a=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(Dr,Me),Me|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(Dr,Me),Me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,G(Dr,Me),Me|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,G(Dr,Me),Me|=n;return Ce(e,t,a,r),t.child}function Td(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ts(e,t,r,n,a){var o=Le(r)?ir:Se.current;return o=Wr(t,o),Mr(t,a),r=Ci(e,t,r,n,o,a),n=zi(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Et(e,t,a)):(Z&&n&&gi(t),t.flags|=1,Ce(e,t,r,a),t.child)}function sc(e,t,r,n,a){if(Le(r)){var o=!0;Ma(t)}else o=!1;if(Mr(t,a),t.stateNode===null)ja(e,t),Ed(t,r,n),zs(t,r,n,a),n=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var c=i.context,u=r.contextType;typeof u=="object"&&u!==null?u=Ge(u):(u=Le(r)?ir:Se.current,u=Wr(t,u));var m=r.getDerivedStateFromProps,f=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==n||c!==u)&&ec(t,i,n,u),Dt=!1;var g=t.memoizedState;i.state=g,Wa(t,n,i,a),c=t.memoizedState,l!==n||g!==c||Re.current||Dt?(typeof m=="function"&&(Cs(t,r,m,n),c=t.memoizedState),(l=Dt||Zl(t,r,l,n,g,c,u))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),i.props=n,i.state=c,i.context=u,n=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,od(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:tt(t.type,l),i.props=u,f=t.pendingProps,g=i.context,c=r.contextType,typeof c=="object"&&c!==null?c=Ge(c):(c=Le(r)?ir:Se.current,c=Wr(t,c));var v=r.getDerivedStateFromProps;(m=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==f||g!==c)&&ec(t,i,n,c),Dt=!1,g=t.memoizedState,i.state=g,Wa(t,n,i,a);var y=t.memoizedState;l!==f||g!==y||Re.current||Dt?(typeof v=="function"&&(Cs(t,r,v,n),y=t.memoizedState),(u=Dt||Zl(t,r,u,n,g,y,c)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,y,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,y,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=y),i.props=n,i.state=y,i.context=c,n=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return Ds(e,t,r,n,o,a)}function Ds(e,t,r,n,a,o){Td(e,t);var i=(t.flags&128)!==0;if(!n&&!i)return a&&ql(t,r,!1),Et(e,t,o);n=t.stateNode,Mm.current=t;var l=i&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&i?(t.child=qr(t,e.child,null,o),t.child=qr(t,null,l,o)):Ce(e,t,l,o),t.memoizedState=n.state,a&&ql(t,r,!0),t.child}function Dd(e){var t=e.stateNode;t.pendingContext?Vl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vl(e,t.context,!1),Si(e,t.containerInfo)}function ic(e,t,r,n,a){return Vr(),vi(a),t.flags|=256,Ce(e,t,r,n),t.child}var $s={dehydrated:null,treeContext:null,retryLane:0};function Rs(e){return{baseLanes:e,cachePool:null,transitions:null}}function $d(e,t,r){var n=t.pendingProps,a=te.current,o=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),G(te,a&1),e===null)return Es(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=n.children,e=n.fallback,o?(n=t.mode,o=t.child,i={mode:"hidden",children:i},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=fo(i,n,0,null),e=ar(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Rs(r),t.memoizedState=$s,e):Di(t,i));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Om(e,t,i,n,l,a,r);if(o){o=n.fallback,i=t.mode,a=e.child,l=a.sibling;var c={mode:"hidden",children:n.children};return!(i&1)&&t.child!==a?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=Vt(a,c),n.subtreeFlags=a.subtreeFlags&14680064),l!==null?o=Vt(l,o):(o=ar(o,i,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,i=e.child.memoizedState,i=i===null?Rs(r):{baseLanes:i.baseLanes|r,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~r,t.memoizedState=$s,n}return o=e.child,e=o.sibling,n=Vt(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Di(e,t){return t=fo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ia(e,t,r,n){return n!==null&&vi(n),qr(t,e.child,null,r),e=Di(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Om(e,t,r,n,a,o,i){if(r)return t.flags&256?(t.flags&=-257,n=Wo(Error(_(422))),ia(e,t,i,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,a=t.mode,n=fo({mode:"visible",children:n.children},a,0,null),o=ar(o,a,i,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&qr(t,e.child,null,i),t.child.memoizedState=Rs(i),t.memoizedState=$s,o);if(!(t.mode&1))return ia(e,t,i,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var l=n.dgst;return n=l,o=Error(_(419)),n=Wo(o,n,void 0),ia(e,t,i,n)}if(l=(i&e.childLanes)!==0,$e||l){if(n=me,n!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(n.suspendedLanes|i)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,_t(e,a),st(n,e,a,-1))}return Mi(),n=Wo(Error(_(421))),ia(e,t,i,n)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Xm.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Oe=Ft(a.nextSibling),Fe=t,Z=!0,nt=null,e!==null&&(Ve[qe++]=wt,Ve[qe++]=bt,Ve[qe++]=lr,wt=e.id,bt=e.overflow,lr=t),t=Di(t,n.children),t.flags|=4096,t)}function lc(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ns(e.return,t,r)}function Vo(e,t,r,n,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=a)}function Rd(e,t,r){var n=t.pendingProps,a=n.revealOrder,o=n.tail;if(Ce(e,t,n.children,r),n=te.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lc(e,r,t);else if(e.tag===19)lc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(G(te,n),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&Va(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Vo(t,!1,a,r,o);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Va(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Vo(t,!0,r,null,o);break;case"together":Vo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ja(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Et(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),ur|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,r=Vt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Vt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Fm(e,t,r){switch(t.tag){case 3:Dd(t),Vr();break;case 5:sd(t);break;case 1:Le(t.type)&&Ma(t);break;case 4:Si(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,a=t.memoizedProps.value;G(Ua,n._currentValue),n._currentValue=a;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(G(te,te.current&1),t.flags|=128,null):r&t.child.childLanes?$d(e,t,r):(G(te,te.current&1),e=Et(e,t,r),e!==null?e.sibling:null);G(te,te.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Rd(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),G(te,te.current),n)break;return null;case 22:case 23:return t.lanes=0,Pd(e,t,r)}return Et(e,t,r)}var Ld,Ls,Id,Ad;Ld=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Ls=function(){};Id=function(e,t,r,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,tr(mt.current);var o=null;switch(r){case"input":a=ns(e,a),n=ns(e,n),o=[];break;case"select":a=ne({},a,{value:void 0}),n=ne({},n,{value:void 0}),o=[];break;case"textarea":a=ss(e,a),n=ss(e,n),o=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Ia)}ls(r,n);var i;r=null;for(u in a)if(!n.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(i in l)l.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bn.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var c=n[u];if(l=a!=null?a[u]:void 0,n.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in c)c.hasOwnProperty(i)&&l[i]!==c[i]&&(r||(r={}),r[i]=c[i])}else r||(o||(o=[]),o.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Y("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}r&&(o=o||[]).push("style",r);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Ad=function(e,t,r,n){r!==n&&(t.flags|=4)};function on(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Um(e,t,r){var n=t.pendingProps;switch(xi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return Le(t.type)&&Aa(),be(t),null;case 3:return n=t.stateNode,Hr(),X(Re),X(Se),Ei(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(oa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,nt!==null&&(Ws(nt),nt=null))),Ls(e,t),be(t),null;case 5:_i(t);var a=tr($n.current);if(r=t.type,e!==null&&t.stateNode!=null)Id(e,t,r,n,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(_(166));return be(t),null}if(e=tr(mt.current),oa(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[dt]=t,n[Tn]=o,e=(t.mode&1)!==0,r){case"dialog":Y("cancel",n),Y("close",n);break;case"iframe":case"object":case"embed":Y("load",n);break;case"video":case"audio":for(a=0;a<dn.length;a++)Y(dn[a],n);break;case"source":Y("error",n);break;case"img":case"image":case"link":Y("error",n),Y("load",n);break;case"details":Y("toggle",n);break;case"input":xl(n,o),Y("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},Y("invalid",n);break;case"textarea":yl(n,o),Y("invalid",n)}ls(r,o),a=null;for(var i in o)if(o.hasOwnProperty(i)){var l=o[i];i==="children"?typeof l=="string"?n.textContent!==l&&(o.suppressHydrationWarning!==!0&&aa(n.textContent,l,e),a=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&aa(n.textContent,l,e),a=["children",""+l]):bn.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&Y("scroll",n)}switch(r){case"input":Jn(n),vl(n,o,!0);break;case"textarea":Jn(n),wl(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=Ia)}n=a,t.updateQueue=n,n!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=du(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=i.createElement(r,{is:n.is}):(e=i.createElement(r),r==="select"&&(i=e,n.multiple?i.multiple=!0:n.size&&(i.size=n.size))):e=i.createElementNS(e,r),e[dt]=t,e[Tn]=n,Ld(e,t,!1,!1),t.stateNode=e;e:{switch(i=cs(r,n),r){case"dialog":Y("cancel",e),Y("close",e),a=n;break;case"iframe":case"object":case"embed":Y("load",e),a=n;break;case"video":case"audio":for(a=0;a<dn.length;a++)Y(dn[a],e);a=n;break;case"source":Y("error",e),a=n;break;case"img":case"image":case"link":Y("error",e),Y("load",e),a=n;break;case"details":Y("toggle",e),a=n;break;case"input":xl(e,n),a=ns(e,n),Y("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=ne({},n,{value:void 0}),Y("invalid",e);break;case"textarea":yl(e,n),a=ss(e,n),Y("invalid",e);break;default:a=n}ls(r,a),l=a;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?mu(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&pu(e,c)):o==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&kn(e,c):typeof c=="number"&&kn(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(bn.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Y("scroll",e):c!=null&&ri(e,o,c,i))}switch(r){case"input":Jn(e),vl(e,n,!1);break;case"textarea":Jn(e),wl(e);break;case"option":n.value!=null&&e.setAttribute("value",""+qt(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?Rr(e,!!n.multiple,o,!1):n.defaultValue!=null&&Rr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ia)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return be(t),null;case 6:if(e&&t.stateNode!=null)Ad(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(_(166));if(r=tr($n.current),tr(mt.current),oa(t)){if(n=t.stateNode,r=t.memoizedProps,n[dt]=t,(o=n.nodeValue!==r)&&(e=Fe,e!==null))switch(e.tag){case 3:aa(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&aa(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[dt]=t,t.stateNode=n}return be(t),null;case 13:if(X(te),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Oe!==null&&t.mode&1&&!(t.flags&128))td(),Vr(),t.flags|=98560,o=!1;else if(o=oa(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[dt]=t}else Vr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),o=!1}else nt!==null&&(Ws(nt),nt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?pe===0&&(pe=3):Mi())),t.updateQueue!==null&&(t.flags|=4),be(t),null);case 4:return Hr(),Ls(e,t),e===null&&zn(t.stateNode.containerInfo),be(t),null;case 10:return bi(t.type._context),be(t),null;case 17:return Le(t.type)&&Aa(),be(t),null;case 19:if(X(te),o=t.memoizedState,o===null)return be(t),null;if(n=(t.flags&128)!==0,i=o.rendering,i===null)if(n)on(o,!1);else{if(pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Va(e),i!==null){for(t.flags|=128,on(o,!1),n=i.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return G(te,te.current&1|2),t.child}e=e.sibling}o.tail!==null&&le()>Kr&&(t.flags|=128,n=!0,on(o,!1),t.lanes=4194304)}else{if(!n)if(e=Va(i),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),on(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!Z)return be(t),null}else 2*le()-o.renderingStartTime>Kr&&r!==1073741824&&(t.flags|=128,n=!0,on(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(r=o.last,r!==null?r.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=le(),t.sibling=null,r=te.current,G(te,n?r&1|2:r&1),t):(be(t),null);case 22:case 23:return Ai(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Me&1073741824&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Bm(e,t){switch(xi(t),t.tag){case 1:return Le(t.type)&&Aa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hr(),X(Re),X(Se),Ei(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return _i(t),null;case 13:if(X(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Vr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(te),null;case 4:return Hr(),null;case 10:return bi(t.type._context),null;case 22:case 23:return Ai(),null;case 24:return null;default:return null}}var la=!1,je=!1,Wm=typeof WeakSet=="function"?WeakSet:Set,P=null;function Tr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){oe(e,t,n)}else r.current=null}function Is(e,t,r){try{r()}catch(n){oe(e,t,n)}}var cc=!1;function Vm(e,t){if(ys=$a,e=Bu(),hi(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var a=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var i=0,l=-1,c=-1,u=0,m=0,f=e,g=null;t:for(;;){for(var v;f!==r||a!==0&&f.nodeType!==3||(l=i+a),f!==o||n!==0&&f.nodeType!==3||(c=i+n),f.nodeType===3&&(i+=f.nodeValue.length),(v=f.firstChild)!==null;)g=f,f=v;for(;;){if(f===e)break t;if(g===r&&++u===a&&(l=i),g===o&&++m===n&&(c=i),(v=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=v}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(ws={focusedElem:e,selectionRange:r},$a=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,j=y.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:tt(t.type,x),j);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(b){oe(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return y=cc,cc=!1,y}function vn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&Is(t,r,o)}a=a.next}while(a!==n)}}function uo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function As(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Md(e){var t=e.alternate;t!==null&&(e.alternate=null,Md(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[dt],delete t[Tn],delete t[js],delete t[Em],delete t[Nm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Od(e){return e.tag===5||e.tag===3||e.tag===4}function uc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Od(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ms(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ia));else if(n!==4&&(e=e.child,e!==null))for(Ms(e,t,r),e=e.sibling;e!==null;)Ms(e,t,r),e=e.sibling}function Os(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Os(e,t,r),e=e.sibling;e!==null;)Os(e,t,r),e=e.sibling}var ge=null,rt=!1;function Pt(e,t,r){for(r=r.child;r!==null;)Fd(e,t,r),r=r.sibling}function Fd(e,t,r){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(ro,r)}catch{}switch(r.tag){case 5:je||Tr(r,t);case 6:var n=ge,a=rt;ge=null,Pt(e,t,r),ge=n,rt=a,ge!==null&&(rt?(e=ge,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ge.removeChild(r.stateNode));break;case 18:ge!==null&&(rt?(e=ge,r=r.stateNode,e.nodeType===8?Ao(e.parentNode,r):e.nodeType===1&&Ao(e,r),En(e)):Ao(ge,r.stateNode));break;case 4:n=ge,a=rt,ge=r.stateNode.containerInfo,rt=!0,Pt(e,t,r),ge=n,rt=a;break;case 0:case 11:case 14:case 15:if(!je&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var o=a,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Is(r,t,i),a=a.next}while(a!==n)}Pt(e,t,r);break;case 1:if(!je&&(Tr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){oe(r,t,l)}Pt(e,t,r);break;case 21:Pt(e,t,r);break;case 22:r.mode&1?(je=(n=je)||r.memoizedState!==null,Pt(e,t,r),je=n):Pt(e,t,r);break;default:Pt(e,t,r)}}function dc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Wm),t.forEach(function(n){var a=Zm.bind(null,e,n);r.has(n)||(r.add(n),n.then(a,a))})}}function Ze(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var a=r[n];try{var o=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:ge=l.stateNode,rt=!1;break e;case 3:ge=l.stateNode.containerInfo,rt=!0;break e;case 4:ge=l.stateNode.containerInfo,rt=!0;break e}l=l.return}if(ge===null)throw Error(_(160));Fd(o,i,a),ge=null,rt=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){oe(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ud(t,e),t=t.sibling}function Ud(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ze(t,e),lt(e),n&4){try{vn(3,e,e.return),uo(3,e)}catch(x){oe(e,e.return,x)}try{vn(5,e,e.return)}catch(x){oe(e,e.return,x)}}break;case 1:Ze(t,e),lt(e),n&512&&r!==null&&Tr(r,r.return);break;case 5:if(Ze(t,e),lt(e),n&512&&r!==null&&Tr(r,r.return),e.flags&32){var a=e.stateNode;try{kn(a,"")}catch(x){oe(e,e.return,x)}}if(n&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,i=r!==null?r.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&cu(a,o),cs(l,i);var u=cs(l,o);for(i=0;i<c.length;i+=2){var m=c[i],f=c[i+1];m==="style"?mu(a,f):m==="dangerouslySetInnerHTML"?pu(a,f):m==="children"?kn(a,f):ri(a,m,f,u)}switch(l){case"input":as(a,o);break;case"textarea":uu(a,o);break;case"select":var g=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Rr(a,!!o.multiple,v,!1):g!==!!o.multiple&&(o.defaultValue!=null?Rr(a,!!o.multiple,o.defaultValue,!0):Rr(a,!!o.multiple,o.multiple?[]:"",!1))}a[Tn]=o}catch(x){oe(e,e.return,x)}}break;case 6:if(Ze(t,e),lt(e),n&4){if(e.stateNode===null)throw Error(_(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(x){oe(e,e.return,x)}}break;case 3:if(Ze(t,e),lt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{En(t.containerInfo)}catch(x){oe(e,e.return,x)}break;case 4:Ze(t,e),lt(e);break;case 13:Ze(t,e),lt(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(Li=le())),n&4&&dc(e);break;case 22:if(m=r!==null&&r.memoizedState!==null,e.mode&1?(je=(u=je)||m,Ze(t,e),je=u):Ze(t,e),lt(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(P=e,m=e.child;m!==null;){for(f=P=m;P!==null;){switch(g=P,v=g.child,g.tag){case 0:case 11:case 14:case 15:vn(4,g,g.return);break;case 1:Tr(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){n=g,r=g.return;try{t=n,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){oe(n,r,x)}}break;case 5:Tr(g,g.return);break;case 22:if(g.memoizedState!==null){fc(f);continue}}v!==null?(v.return=g,P=v):fc(f)}m=m.sibling}e:for(m=null,f=e;;){if(f.tag===5){if(m===null){m=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,c=f.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=fu("display",i))}catch(x){oe(e,e.return,x)}}}else if(f.tag===6){if(m===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){oe(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;m===f&&(m=null),f=f.return}m===f&&(m=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ze(t,e),lt(e),n&4&&dc(e);break;case 21:break;default:Ze(t,e),lt(e)}}function lt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Od(r)){var n=r;break e}r=r.return}throw Error(_(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(kn(a,""),n.flags&=-33);var o=uc(e);Os(e,o,a);break;case 3:case 4:var i=n.stateNode.containerInfo,l=uc(e);Ms(e,l,i);break;default:throw Error(_(161))}}catch(c){oe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qm(e,t,r){P=e,Bd(e)}function Bd(e,t,r){for(var n=(e.mode&1)!==0;P!==null;){var a=P,o=a.child;if(a.tag===22&&n){var i=a.memoizedState!==null||la;if(!i){var l=a.alternate,c=l!==null&&l.memoizedState!==null||je;l=la;var u=je;if(la=i,(je=c)&&!u)for(P=a;P!==null;)i=P,c=i.child,i.tag===22&&i.memoizedState!==null?mc(a):c!==null?(c.return=i,P=c):mc(a);for(;o!==null;)P=o,Bd(o),o=o.sibling;P=a,la=l,je=u}pc(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,P=o):pc(e)}}function pc(e){for(;P!==null;){var t=P;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:je||uo(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!je)if(r===null)n.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:tt(t.type,r.memoizedProps);n.componentDidUpdate(a,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Jl(t,o,n);break;case 3:var i=t.updateQueue;if(i!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Jl(t,i,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var f=m.dehydrated;f!==null&&En(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}je||t.flags&512&&As(t)}catch(g){oe(t,t.return,g)}}if(t===e){P=null;break}if(r=t.sibling,r!==null){r.return=t.return,P=r;break}P=t.return}}function fc(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var r=t.sibling;if(r!==null){r.return=t.return,P=r;break}P=t.return}}function mc(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{uo(4,t)}catch(c){oe(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var a=t.return;try{n.componentDidMount()}catch(c){oe(t,a,c)}}var o=t.return;try{As(t)}catch(c){oe(t,o,c)}break;case 5:var i=t.return;try{As(t)}catch(c){oe(t,i,c)}}}catch(c){oe(t,t.return,c)}if(t===e){P=null;break}var l=t.sibling;if(l!==null){l.return=t.return,P=l;break}P=t.return}}var Hm=Math.ceil,Qa=Nt.ReactCurrentDispatcher,$i=Nt.ReactCurrentOwner,Ke=Nt.ReactCurrentBatchConfig,B=0,me=null,ce=null,xe=0,Me=0,Dr=Gt(0),pe=0,An=null,ur=0,po=0,Ri=0,yn=null,De=null,Li=0,Kr=1/0,xt=null,Ka=!1,Fs=null,Bt=null,ca=!1,It=null,Ga=0,wn=0,Us=null,Sa=-1,_a=0;function ze(){return B&6?le():Sa!==-1?Sa:Sa=le()}function Wt(e){return e.mode&1?B&2&&xe!==0?xe&-xe:zm.transition!==null?(_a===0&&(_a=Eu()),_a):(e=H,e!==0||(e=window.event,e=e===void 0?16:$u(e.type)),e):1}function st(e,t,r,n){if(50<wn)throw wn=0,Us=null,Error(_(185));Un(e,r,n),(!(B&2)||e!==me)&&(e===me&&(!(B&2)&&(po|=r),pe===4&&Rt(e,xe)),Ie(e,n),r===1&&B===0&&!(t.mode&1)&&(Kr=le()+500,io&&Jt()))}function Ie(e,t){var r=e.callbackNode;zf(e,t);var n=Da(e,e===me?xe:0);if(n===0)r!==null&&jl(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&jl(r),t===1)e.tag===0?Cm(hc.bind(null,e)):Xu(hc.bind(null,e)),Sm(function(){!(B&6)&&Jt()}),r=null;else{switch(Nu(n)){case 1:r=ii;break;case 4:r=Su;break;case 16:r=Ta;break;case 536870912:r=_u;break;default:r=Ta}r=Jd(r,Wd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Wd(e,t){if(Sa=-1,_a=0,B&6)throw Error(_(327));var r=e.callbackNode;if(Or()&&e.callbackNode!==r)return null;var n=Da(e,e===me?xe:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Ja(e,n);else{t=n;var a=B;B|=2;var o=qd();(me!==e||xe!==t)&&(xt=null,Kr=le()+500,nr(e,t));do try{Gm();break}catch(l){Vd(e,l)}while(!0);wi(),Qa.current=o,B=a,ce!==null?t=0:(me=null,xe=0,t=pe)}if(t!==0){if(t===2&&(a=ms(e),a!==0&&(n=a,t=Bs(e,a))),t===1)throw r=An,nr(e,0),Rt(e,n),Ie(e,le()),r;if(t===6)Rt(e,n);else{if(a=e.current.alternate,!(n&30)&&!Qm(a)&&(t=Ja(e,n),t===2&&(o=ms(e),o!==0&&(n=o,t=Bs(e,o))),t===1))throw r=An,nr(e,0),Rt(e,n),Ie(e,le()),r;switch(e.finishedWork=a,e.finishedLanes=n,t){case 0:case 1:throw Error(_(345));case 2:Xt(e,De,xt);break;case 3:if(Rt(e,n),(n&130023424)===n&&(t=Li+500-le(),10<t)){if(Da(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){ze(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ks(Xt.bind(null,e,De,xt),t);break}Xt(e,De,xt);break;case 4:if(Rt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,a=-1;0<n;){var i=31-ot(n);o=1<<i,i=t[i],i>a&&(a=i),n&=~o}if(n=a,n=le()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Hm(n/1960))-n,10<n){e.timeoutHandle=ks(Xt.bind(null,e,De,xt),n);break}Xt(e,De,xt);break;case 5:Xt(e,De,xt);break;default:throw Error(_(329))}}}return Ie(e,le()),e.callbackNode===r?Wd.bind(null,e):null}function Bs(e,t){var r=yn;return e.current.memoizedState.isDehydrated&&(nr(e,t).flags|=256),e=Ja(e,t),e!==2&&(t=De,De=r,t!==null&&Ws(t)),e}function Ws(e){De===null?De=e:De.push.apply(De,e)}function Qm(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var a=r[n],o=a.getSnapshot;a=a.value;try{if(!it(o(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rt(e,t){for(t&=~Ri,t&=~po,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-ot(t),n=1<<r;e[r]=-1,t&=~n}}function hc(e){if(B&6)throw Error(_(327));Or();var t=Da(e,0);if(!(t&1))return Ie(e,le()),null;var r=Ja(e,t);if(e.tag!==0&&r===2){var n=ms(e);n!==0&&(t=n,r=Bs(e,n))}if(r===1)throw r=An,nr(e,0),Rt(e,t),Ie(e,le()),r;if(r===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Xt(e,De,xt),Ie(e,le()),null}function Ii(e,t){var r=B;B|=1;try{return e(t)}finally{B=r,B===0&&(Kr=le()+500,io&&Jt())}}function dr(e){It!==null&&It.tag===0&&!(B&6)&&Or();var t=B;B|=1;var r=Ke.transition,n=H;try{if(Ke.transition=null,H=1,e)return e()}finally{H=n,Ke.transition=r,B=t,!(B&6)&&Jt()}}function Ai(){Me=Dr.current,X(Dr)}function nr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,jm(r)),ce!==null)for(r=ce.return;r!==null;){var n=r;switch(xi(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Aa();break;case 3:Hr(),X(Re),X(Se),Ei();break;case 5:_i(n);break;case 4:Hr();break;case 13:X(te);break;case 19:X(te);break;case 10:bi(n.type._context);break;case 22:case 23:Ai()}r=r.return}if(me=e,ce=e=Vt(e.current,null),xe=Me=t,pe=0,An=null,Ri=po=ur=0,De=yn=null,er!==null){for(t=0;t<er.length;t++)if(r=er[t],n=r.interleaved,n!==null){r.interleaved=null;var a=n.next,o=r.pending;if(o!==null){var i=o.next;o.next=a,n.next=i}r.pending=n}er=null}return e}function Vd(e,t){do{var r=ce;try{if(wi(),ba.current=Ha,qa){for(var n=re.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}qa=!1}if(cr=0,fe=de=re=null,xn=!1,Rn=0,$i.current=null,r===null||r.return===null){pe=1,An=t,ce=null;break}e:{var o=e,i=r.return,l=r,c=t;if(t=xe,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,m=l,f=m.tag;if(!(m.mode&1)&&(f===0||f===11||f===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=rc(i);if(v!==null){v.flags&=-257,nc(v,i,l,o,t),v.mode&1&&tc(o,u,t),t=v,c=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(c),t.updateQueue=x}else y.add(c);break e}else{if(!(t&1)){tc(o,u,t),Mi();break e}c=Error(_(426))}}else if(Z&&l.mode&1){var j=rc(i);if(j!==null){!(j.flags&65536)&&(j.flags|=256),nc(j,i,l,o,t),vi(Qr(c,l));break e}}o=c=Qr(c,l),pe!==4&&(pe=2),yn===null?yn=[o]:yn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Nd(o,c,t);Gl(o,p);break e;case 1:l=c;var d=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Bt===null||!Bt.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=Cd(o,l,t);Gl(o,b);break e}}o=o.return}while(o!==null)}Qd(r)}catch(S){t=S,ce===r&&r!==null&&(ce=r=r.return);continue}break}while(!0)}function qd(){var e=Qa.current;return Qa.current=Ha,e===null?Ha:e}function Mi(){(pe===0||pe===3||pe===2)&&(pe=4),me===null||!(ur&268435455)&&!(po&268435455)||Rt(me,xe)}function Ja(e,t){var r=B;B|=2;var n=qd();(me!==e||xe!==t)&&(xt=null,nr(e,t));do try{Km();break}catch(a){Vd(e,a)}while(!0);if(wi(),B=r,Qa.current=n,ce!==null)throw Error(_(261));return me=null,xe=0,pe}function Km(){for(;ce!==null;)Hd(ce)}function Gm(){for(;ce!==null&&!wf();)Hd(ce)}function Hd(e){var t=Gd(e.alternate,e,Me);e.memoizedProps=e.pendingProps,t===null?Qd(e):ce=t,$i.current=null}function Qd(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Bm(r,t),r!==null){r.flags&=32767,ce=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,ce=null;return}}else if(r=Um(r,t,Me),r!==null){ce=r;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);pe===0&&(pe=5)}function Xt(e,t,r){var n=H,a=Ke.transition;try{Ke.transition=null,H=1,Jm(e,t,r,n)}finally{Ke.transition=a,H=n}return null}function Jm(e,t,r,n){do Or();while(It!==null);if(B&6)throw Error(_(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(Pf(e,o),e===me&&(ce=me=null,xe=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ca||(ca=!0,Jd(Ta,function(){return Or(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Ke.transition,Ke.transition=null;var i=H;H=1;var l=B;B|=4,$i.current=null,Vm(e,r),Ud(r,e),gm(ws),$a=!!ys,ws=ys=null,e.current=r,qm(r),bf(),B=l,H=i,Ke.transition=o}else e.current=r;if(ca&&(ca=!1,It=e,Ga=a),o=e.pendingLanes,o===0&&(Bt=null),Sf(r.stateNode),Ie(e,le()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],n(a.value,{componentStack:a.stack,digest:a.digest});if(Ka)throw Ka=!1,e=Fs,Fs=null,e;return Ga&1&&e.tag!==0&&Or(),o=e.pendingLanes,o&1?e===Us?wn++:(wn=0,Us=e):wn=0,Jt(),null}function Or(){if(It!==null){var e=Nu(Ga),t=Ke.transition,r=H;try{if(Ke.transition=null,H=16>e?16:e,It===null)var n=!1;else{if(e=It,It=null,Ga=0,B&6)throw Error(_(331));var a=B;for(B|=4,P=e.current;P!==null;){var o=P,i=o.child;if(P.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(P=u;P!==null;){var m=P;switch(m.tag){case 0:case 11:case 15:vn(8,m,o)}var f=m.child;if(f!==null)f.return=m,P=f;else for(;P!==null;){m=P;var g=m.sibling,v=m.return;if(Md(m),m===u){P=null;break}if(g!==null){g.return=v,P=g;break}P=v}}}var y=o.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var j=x.sibling;x.sibling=null,x=j}while(x!==null)}}P=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,P=i;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:vn(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,P=p;break e}P=o.return}}var d=e.current;for(P=d;P!==null;){i=P;var h=i.child;if(i.subtreeFlags&2064&&h!==null)h.return=i,P=h;else e:for(i=d;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:uo(9,l)}}catch(S){oe(l,l.return,S)}if(l===i){P=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,P=b;break e}P=l.return}}if(B=a,Jt(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(ro,e)}catch{}n=!0}return n}finally{H=r,Ke.transition=t}}return!1}function gc(e,t,r){t=Qr(r,t),t=Nd(e,t,1),e=Ut(e,t,1),t=ze(),e!==null&&(Un(e,1,t),Ie(e,t))}function oe(e,t,r){if(e.tag===3)gc(e,e,r);else for(;t!==null;){if(t.tag===3){gc(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Bt===null||!Bt.has(n))){e=Qr(r,e),e=Cd(t,e,1),t=Ut(t,e,1),e=ze(),t!==null&&(Un(t,1,e),Ie(t,e));break}}t=t.return}}function Ym(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=ze(),e.pingedLanes|=e.suspendedLanes&r,me===e&&(xe&r)===r&&(pe===4||pe===3&&(xe&130023424)===xe&&500>le()-Li?nr(e,0):Ri|=r),Ie(e,t)}function Kd(e,t){t===0&&(e.mode&1?(t=Zn,Zn<<=1,!(Zn&130023424)&&(Zn=4194304)):t=1);var r=ze();e=_t(e,t),e!==null&&(Un(e,t,r),Ie(e,r))}function Xm(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Kd(e,r)}function Zm(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(_(314))}n!==null&&n.delete(t),Kd(e,r)}var Gd;Gd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)$e=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return $e=!1,Fm(e,t,r);$e=!!(e.flags&131072)}else $e=!1,Z&&t.flags&1048576&&Zu(t,Fa,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;ja(e,t),e=t.pendingProps;var a=Wr(t,Se.current);Mr(t,r),a=Ci(null,t,n,e,a,r);var o=zi();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Le(n)?(o=!0,Ma(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ji(t),a.updater=co,t.stateNode=a,a._reactInternals=t,zs(t,n,e,r),t=Ds(null,t,n,!0,o,r)):(t.tag=0,Z&&o&&gi(t),Ce(null,t,a,r),t=t.child),t;case 16:n=t.elementType;e:{switch(ja(e,t),e=t.pendingProps,a=n._init,n=a(n._payload),t.type=n,a=t.tag=th(n),e=tt(n,e),a){case 0:t=Ts(null,t,n,e,r);break e;case 1:t=sc(null,t,n,e,r);break e;case 11:t=ac(null,t,n,e,r);break e;case 14:t=oc(null,t,n,tt(n.type,e),r);break e}throw Error(_(306,n,""))}return t;case 0:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:tt(n,a),Ts(e,t,n,a,r);case 1:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:tt(n,a),sc(e,t,n,a,r);case 3:e:{if(Dd(t),e===null)throw Error(_(387));n=t.pendingProps,o=t.memoizedState,a=o.element,od(e,t),Wa(t,n,null,r);var i=t.memoizedState;if(n=i.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Qr(Error(_(423)),t),t=ic(e,t,n,r,a);break e}else if(n!==a){a=Qr(Error(_(424)),t),t=ic(e,t,n,r,a);break e}else for(Oe=Ft(t.stateNode.containerInfo.firstChild),Fe=t,Z=!0,nt=null,r=nd(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Vr(),n===a){t=Et(e,t,r);break e}Ce(e,t,n,r)}t=t.child}return t;case 5:return sd(t),e===null&&Es(t),n=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,i=a.children,bs(n,a)?i=null:o!==null&&bs(n,o)&&(t.flags|=32),Td(e,t),Ce(e,t,i,r),t.child;case 6:return e===null&&Es(t),null;case 13:return $d(e,t,r);case 4:return Si(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=qr(t,null,n,r):Ce(e,t,n,r),t.child;case 11:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:tt(n,a),ac(e,t,n,a,r);case 7:return Ce(e,t,t.pendingProps,r),t.child;case 8:return Ce(e,t,t.pendingProps.children,r),t.child;case 12:return Ce(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,a=t.pendingProps,o=t.memoizedProps,i=a.value,G(Ua,n._currentValue),n._currentValue=i,o!==null)if(it(o.value,i)){if(o.children===a.children&&!Re.current){t=Et(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){i=o.child;for(var c=l.firstContext;c!==null;){if(c.context===n){if(o.tag===1){c=kt(-1,r&-r),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?c.next=c:(c.next=m.next,m.next=c),u.pending=c}}o.lanes|=r,c=o.alternate,c!==null&&(c.lanes|=r),Ns(o.return,r,t),l.lanes|=r;break}c=c.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(_(341));i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),Ns(i,r,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}Ce(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,n=t.pendingProps.children,Mr(t,r),a=Ge(a),n=n(a),t.flags|=1,Ce(e,t,n,r),t.child;case 14:return n=t.type,a=tt(n,t.pendingProps),a=tt(n.type,a),oc(e,t,n,a,r);case 15:return zd(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:tt(n,a),ja(e,t),t.tag=1,Le(n)?(e=!0,Ma(t)):e=!1,Mr(t,r),Ed(t,n,a),zs(t,n,a,r),Ds(null,t,n,!0,e,r);case 19:return Rd(e,t,r);case 22:return Pd(e,t,r)}throw Error(_(156,t.tag))};function Jd(e,t){return ju(e,t)}function eh(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,t,r,n){return new eh(e,t,r,n)}function Oi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function th(e){if(typeof e=="function")return Oi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ai)return 11;if(e===oi)return 14}return 2}function Vt(e,t){var r=e.alternate;return r===null?(r=He(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ea(e,t,r,n,a,o){var i=2;if(n=e,typeof e=="function")Oi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case kr:return ar(r.children,a,o,t);case ni:i=8,a|=8;break;case Zo:return e=He(12,r,t,a|2),e.elementType=Zo,e.lanes=o,e;case es:return e=He(13,r,t,a),e.elementType=es,e.lanes=o,e;case ts:return e=He(19,r,t,a),e.elementType=ts,e.lanes=o,e;case su:return fo(r,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case au:i=10;break e;case ou:i=9;break e;case ai:i=11;break e;case oi:i=14;break e;case Tt:i=16,n=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=He(i,r,t,a),t.elementType=e,t.type=n,t.lanes=o,t}function ar(e,t,r,n){return e=He(7,e,n,t),e.lanes=r,e}function fo(e,t,r,n){return e=He(22,e,n,t),e.elementType=su,e.lanes=r,e.stateNode={isHidden:!1},e}function qo(e,t,r){return e=He(6,e,null,t),e.lanes=r,e}function Ho(e,t,r){return t=He(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function rh(e,t,r,n,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Eo(0),this.expirationTimes=Eo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Eo(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Fi(e,t,r,n,a,o,i,l,c){return e=new rh(e,t,r,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=He(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ji(o),e}function nh(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:br,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Yd(e){if(!e)return Ht;e=e._reactInternals;e:{if(mr(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Le(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var r=e.type;if(Le(r))return Yu(e,r,t)}return t}function Xd(e,t,r,n,a,o,i,l,c){return e=Fi(r,n,!0,e,a,o,i,l,c),e.context=Yd(null),r=e.current,n=ze(),a=Wt(r),o=kt(n,a),o.callback=t??null,Ut(r,o,a),e.current.lanes=a,Un(e,a,n),Ie(e,n),e}function mo(e,t,r,n){var a=t.current,o=ze(),i=Wt(a);return r=Yd(r),t.context===null?t.context=r:t.pendingContext=r,t=kt(o,i),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Ut(a,t,i),e!==null&&(st(e,a,i,o),wa(e,a,i)),i}function Ya(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Ui(e,t){xc(e,t),(e=e.alternate)&&xc(e,t)}function ah(){return null}var Zd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bi(e){this._internalRoot=e}ho.prototype.render=Bi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));mo(e,t,null,null)};ho.prototype.unmount=Bi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dr(function(){mo(null,e,null,null)}),t[St]=null}};function ho(e){this._internalRoot=e}ho.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<$t.length&&t!==0&&t<$t[r].priority;r++);$t.splice(r,0,e),r===0&&Du(e)}};function Wi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function go(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function vc(){}function oh(e,t,r,n,a){if(a){if(typeof n=="function"){var o=n;n=function(){var u=Ya(i);o.call(u)}}var i=Xd(t,n,e,0,null,!1,!1,"",vc);return e._reactRootContainer=i,e[St]=i.current,zn(e.nodeType===8?e.parentNode:e),dr(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var l=n;n=function(){var u=Ya(c);l.call(u)}}var c=Fi(e,0,!1,null,null,!1,!1,"",vc);return e._reactRootContainer=c,e[St]=c.current,zn(e.nodeType===8?e.parentNode:e),dr(function(){mo(t,c,r,n)}),c}function xo(e,t,r,n,a){var o=r._reactRootContainer;if(o){var i=o;if(typeof a=="function"){var l=a;a=function(){var c=Ya(i);l.call(c)}}mo(t,i,e,a)}else i=oh(r,t,e,a,n);return Ya(i)}Cu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=un(t.pendingLanes);r!==0&&(li(t,r|1),Ie(t,le()),!(B&6)&&(Kr=le()+500,Jt()))}break;case 13:dr(function(){var n=_t(e,1);if(n!==null){var a=ze();st(n,e,1,a)}}),Ui(e,1)}};ci=function(e){if(e.tag===13){var t=_t(e,134217728);if(t!==null){var r=ze();st(t,e,134217728,r)}Ui(e,134217728)}};zu=function(e){if(e.tag===13){var t=Wt(e),r=_t(e,t);if(r!==null){var n=ze();st(r,e,t,n)}Ui(e,t)}};Pu=function(){return H};Tu=function(e,t){var r=H;try{return H=e,t()}finally{H=r}};ds=function(e,t,r){switch(t){case"input":if(as(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var a=so(n);if(!a)throw Error(_(90));lu(n),as(n,a)}}}break;case"textarea":uu(e,r);break;case"select":t=r.value,t!=null&&Rr(e,!!r.multiple,t,!1)}};xu=Ii;vu=dr;var sh={usingClientEntryPoint:!1,Events:[Wn,Er,so,hu,gu,Ii]},sn={findFiberByHostInstance:Zt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ih={bundleType:sn.bundleType,version:sn.version,rendererPackageName:sn.rendererPackageName,rendererConfig:sn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bu(e),e===null?null:e.stateNode},findFiberByHostInstance:sn.findFiberByHostInstance||ah,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ua.isDisabled&&ua.supportsFiber)try{ro=ua.inject(ih),ft=ua}catch{}}Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sh;Be.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wi(t))throw Error(_(200));return nh(e,t,null,r)};Be.createRoot=function(e,t){if(!Wi(e))throw Error(_(299));var r=!1,n="",a=Zd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Fi(e,1,!1,null,null,r,!1,n,a),e[St]=t.current,zn(e.nodeType===8?e.parentNode:e),new Bi(t)};Be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=bu(t),e=e===null?null:e.stateNode,e};Be.flushSync=function(e){return dr(e)};Be.hydrate=function(e,t,r){if(!go(t))throw Error(_(200));return xo(null,e,t,!0,r)};Be.hydrateRoot=function(e,t,r){if(!Wi(e))throw Error(_(405));var n=r!=null&&r.hydratedSources||null,a=!1,o="",i=Zd;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),t=Xd(t,null,e,1,r??null,a,!1,o,i),e[St]=t.current,zn(e),n)for(e=0;e<n.length;e++)r=n[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new ho(t)};Be.render=function(e,t,r){if(!go(t))throw Error(_(200));return xo(null,e,t,!1,r)};Be.unmountComponentAtNode=function(e){if(!go(e))throw Error(_(40));return e._reactRootContainer?(dr(function(){xo(null,null,e,!1,function(){e._reactRootContainer=null,e[St]=null})}),!0):!1};Be.unstable_batchedUpdates=Ii;Be.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!go(r))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return xo(e,t,r,!1,n)};Be.version="18.3.1-next-f1338f8080-20240426";function ep(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ep)}catch(e){console.error(e)}}ep(),eu.exports=Be;var lh=eu.exports,yc=lh;Yo.createRoot=yc.createRoot,Yo.hydrateRoot=yc.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mn(){return Mn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Mn.apply(null,arguments)}var rr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(rr||(rr={}));const wc="popstate";function ch(e){e===void 0&&(e={});function t(n,a){let{pathname:o,search:i,hash:l}=n.location;return Vs("",{pathname:o,search:i,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:tp(a)}return ph(t,r,null,e)}function ht(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function uh(e,t){{typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function dh(){return Math.random().toString(36).substr(2,8)}function bc(e,t){return{usr:e.state,key:e.key,idx:t}}function Vs(e,t,r,n){return r===void 0&&(r=null),Mn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?vo(t):t,{state:r,key:t&&t.key||n||dh()})}function tp(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function vo(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function ph(e,t,r,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:o=!1}=n,i=a.history,l=rr.Pop,c=null,u=m();u==null&&(u=0,i.replaceState(Mn({},i.state,{idx:u}),""));function m(){return(i.state||{idx:null}).idx}function f(){l=rr.Pop;let j=m(),p=j==null?null:j-u;u=j,c&&c({action:l,location:x.location,delta:p})}function g(j,p){l=rr.Push;let d=Vs(x.location,j,p);u=m()+1;let h=bc(d,u),b=x.createHref(d);try{i.pushState(h,"",b)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;a.location.assign(b)}o&&c&&c({action:l,location:x.location,delta:1})}function v(j,p){l=rr.Replace;let d=Vs(x.location,j,p);u=m();let h=bc(d,u),b=x.createHref(d);i.replaceState(h,"",b),o&&c&&c({action:l,location:x.location,delta:0})}function y(j){let p=a.location.origin!=="null"?a.location.origin:a.location.href,d=typeof j=="string"?j:tp(j);return d=d.replace(/ $/,"%20"),ht(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let x={get action(){return l},get location(){return e(a,i)},listen(j){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(wc,f),c=j,()=>{a.removeEventListener(wc,f),c=null}},createHref(j){return t(a,j)},createURL:y,encodeLocation(j){let p=y(j);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:v,go(j){return i.go(j)}};return x}var kc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(kc||(kc={}));function fh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const mh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hh=e=>mh.test(e);function gh(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?vo(e):e,o;if(r)if(hh(r))o=r;else{if(r.includes("//")){let i=r;r=rp(r),uh(!1,"Pathnames cannot have embedded double slashes - normalizing "+(i+" -> "+r))}r.startsWith("/")?o=jc(r.substring(1),"/"):o=jc(r,t)}else o=t;return{pathname:o,search:bh(n),hash:kh(a)}}function jc(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function Qo(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xh(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function vh(e,t){let r=xh(e);return t?r.map((n,a)=>a===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function yh(e,t,r,n){n===void 0&&(n=!1);let a;typeof e=="string"?a=vo(e):(a=Mn({},e),ht(!a.pathname||!a.pathname.includes("?"),Qo("?","pathname","search",a)),ht(!a.pathname||!a.pathname.includes("#"),Qo("#","pathname","hash",a)),ht(!a.search||!a.search.includes("#"),Qo("#","search","hash",a)));let o=e===""||a.pathname==="",i=o?"/":a.pathname,l;if(i==null)l=r;else{let f=t.length-1;if(!n&&i.startsWith("..")){let g=i.split("/");for(;g[0]==="..";)g.shift(),f-=1;a.pathname=g.join("/")}l=f>=0?t[f]:"/"}let c=gh(a,l),u=i&&i!=="/"&&i.endsWith("/"),m=(o||i===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||m)&&(c.pathname+="/"),c}const rp=e=>e.replace(/\/\/+/g,"/"),wh=e=>rp(e.join("/")),bh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,kh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,np=["post","put","patch","delete"];new Set(np);const jh=["get",...np];new Set(jh);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xa(){return Xa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Xa.apply(null,arguments)}const ap=w.createContext(null),Vi=w.createContext(null),qi=w.createContext(null),Hi=w.createContext({outlet:null,matches:[],isDataRoute:!1});function Qi(){return w.useContext(qi)!=null}function op(){return Qi()||ht(!1),w.useContext(qi).location}function sp(e){w.useContext(Vi).static||w.useLayoutEffect(e)}function Sh(){let{isDataRoute:e}=w.useContext(Hi);return e?zh():_h()}function _h(){Qi()||ht(!1);let e=w.useContext(ap),{basename:t,future:r,navigator:n}=w.useContext(Vi),{matches:a}=w.useContext(Hi),{pathname:o}=op(),i=JSON.stringify(vh(a,r.v7_relativeSplatPath)),l=w.useRef(!1);return sp(()=>{l.current=!0}),w.useCallback(function(u,m){if(m===void 0&&(m={}),!l.current)return;if(typeof u=="number"){n.go(u);return}let f=yh(u,JSON.parse(i),o,m.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:wh([t,f.pathname])),(m.replace?n.replace:n.push)(f,m.state,m)},[t,n,i,o,e])}var ip=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ip||{}),lp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(lp||{});function Eh(e){let t=w.useContext(ap);return t||ht(!1),t}function Nh(e){let t=w.useContext(Hi);return t||ht(!1),t}function Ch(e){let t=Nh(),r=t.matches[t.matches.length-1];return r.route.id||ht(!1),r.route.id}function zh(){let{router:e}=Eh(ip.UseNavigateStable),t=Ch(lp.UseNavigateStable),r=w.useRef(!1);return sp(()=>{r.current=!0}),w.useCallback(function(a,o){o===void 0&&(o={}),r.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Xa({fromRouteId:t},o)))},[e,t])}function Ph(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Th(e){let{basename:t="/",children:r=null,location:n,navigationType:a=rr.Pop,navigator:o,static:i=!1,future:l}=e;Qi()&&ht(!1);let c=t.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:c,navigator:o,static:i,future:Xa({v7_relativeSplatPath:!1},l)}),[c,l,o,i]);typeof n=="string"&&(n=vo(n));let{pathname:m="/",search:f="",hash:g="",state:v=null,key:y="default"}=n,x=w.useMemo(()=>{let j=fh(m,c);return j==null?null:{location:{pathname:j,search:f,hash:g,state:v,key:y},navigationType:a}},[c,m,f,g,v,y,a]);return x==null?null:w.createElement(Vi.Provider,{value:u},w.createElement(qi.Provider,{children:r,value:x}))}new Promise(()=>{});/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Dh="6";try{window.__reactRouterVersion=Dh}catch{}const $h="startTransition",Sc=Jp[$h];function Rh(e){let{basename:t,children:r,future:n,window:a}=e,o=w.useRef();o.current==null&&(o.current=ch({window:a,v5Compat:!0}));let i=o.current,[l,c]=w.useState({action:i.action,location:i.location}),{v7_startTransition:u}=n||{},m=w.useCallback(f=>{u&&Sc?Sc(()=>c(f)):c(f)},[c,u]);return w.useLayoutEffect(()=>i.listen(m),[i,m]),w.useEffect(()=>Ph(n),[n]),w.createElement(Th,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:i,future:n})}var _c;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(_c||(_c={}));var Ec;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ec||(Ec={}));const V="/api",Lh=".pdf,.png,.jpg,.jpeg,.tif,.tiff,.bmp,.webp,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv",K={ADDED:{bg:"var(--diff-added-bg)",border:"var(--diff-added-border)",text:"var(--diff-added-text)",chip:"var(--diff-added-chip)"},DELETED:{bg:"var(--diff-deleted-bg)",border:"var(--diff-deleted-border)",text:"var(--diff-deleted-text)",chip:"var(--diff-deleted-chip)"},MODIFIED:{bg:"var(--diff-modified-bg)",border:"var(--diff-modified-border)",text:"var(--diff-modified-text)",chip:"var(--diff-modified-chip)"},UNCHANGED:{bg:"var(--diff-unchanged-bg)",border:"var(--diff-unchanged-border)",text:"var(--diff-unchanged-text)",chip:"var(--diff-unchanged-chip)"},MATCH:{bg:"var(--diff-match-bg)",border:"var(--diff-match-border)",text:"var(--diff-match-text)",chip:"var(--diff-match-chip)"}},Ih=`
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
`,pt={background:"#fffdf8",border:"1px solid #ded6c8",borderRadius:8,boxShadow:"0 1px 3px rgba(31,41,55,.08)"},or={textAlign:"start",padding:"8px 9px",borderBottom:"1px solid #ded6c8",fontWeight:650,verticalAlign:"top",whiteSpace:"normal",overflowWrap:"anywhere"},Fr={padding:"8px 9px",borderBottom:"1px solid #eee7dc",verticalAlign:"top",whiteSpace:"normal",overflowWrap:"anywhere",lineHeight:1.35},yr={border:"1px solid #ded6c8",background:"#fbfaf6",color:"#344054",borderRadius:999,padding:"4px 8px",fontSize:12,fontWeight:600};function Ah(e=!1,t={}){return{border:"none",borderRadius:6,background:e?"#98a2b3":"#1f2937",color:"white",padding:"9px 14px",fontWeight:550,cursor:e?"default":"pointer",...t}}function Mh(e={}){return{border:"1px solid #c9c0b0",borderRadius:6,background:"#fffdf8",color:"#344054",padding:"9px 13px",fontWeight:550,cursor:"pointer",...e}}function $r(e){if(!e)return"";const t=String(e);return t.includes("Traceback (most recent call last)")||t.includes("Internal Server Error")||t.includes("psycopg")||t.includes("OperationalError")||t.includes('File "')||t.length>500?"An unexpected internal server error occurred. Please try again or check server logs.":t.replace(/\/Users\/[a-zA-Z0-9_-]+\//g,".../")}async function se(e){try{const t=await e.text();if(!t)return`Request failed with status ${e.status}`;try{const r=JSON.parse(t);return $r(at(r.detail||r.error||r.message||r))}catch{return t.trim().startsWith("<!DOCTYPE html>")||t.includes("<html")||t.length>200?`Server error (${e.status}). Please check backend logs.`:$r(t)}}catch{return`Request failed with status ${e.status}`}}function ie(e){const t=at(e);return t.toLowerCase().includes("failed to fetch")?"The app could not reach the comparison service. Please confirm the backend is running and the API URL is correct.":t||"Something went wrong while processing the documents."}async function Oh(e){const t=await fetch(`${V}/extract-runs/${e}/structured-json`);if(t.ok){const o=qs(await t.json());if(Na(o))return o;const i=await Nc(e,o);return Na(i)?i:o}const r=await fetch(`${V}/extract-runs/${e}/json`);if(!r.ok)throw new Error(await se(t));const n=await r.json(),a=qs(n);return Na(a)?a:Nc(e,a)}function Na(e){return!!(e&&((e.content||[]).length>0||(e.tables||[]).length>0||(e.pages||[]).some(t=>(t.content||[]).length>0||(t.tables||[]).length>0)))}async function Nc(e,t={}){const[r,n]=await Promise.allSettled([fetch(`${V}/extract-runs/${e}/blocks?limit=2000`).then(async i=>{if(!i.ok)throw new Error(await se(i));return i.json()}),fetch(`${V}/extract-runs/${e}/tables?include_rows=true`).then(async i=>{if(!i.ok)throw new Error(await se(i));return i.json()})]),a=r.status==="fulfilled"?r.value.blocks||[]:[],o=n.status==="fulfilled"?n.value.tables||[]:[];return qs({...t,blocks:a,tables:o.length?o:t.tables||[]})}function qs(e){var l,c,u;if(e!=null&&e.structured_json)return e.structured_json;if((e!=null&&e.document_summary||e!=null&&e.content||e!=null&&e.pages)&&Na(e))return e;const t=(e==null?void 0:e.blocks)||[],r=(e==null?void 0:e.tables)||[],n=[];t.forEach(m=>{var v;const f=m.text||((v=m.payload)==null?void 0:v.text)||"",g=String(f).match(/^\s*([^:：]{2,80})\s*[:：]\s*(.{1,300})$/);g&&n.push({field:g[1].trim(),value:g[2].trim(),page:m.page_number,source:m.type,citation:`p.${m.page_number||"-"} - ${m.path||"document"}`}),Bh(f).forEach(y=>{n.push({...y,page:m.page_number,source:m.type,citation:`p.${m.page_number||"-"} - ${m.path||"document"}`})})}),r.slice(0,40).forEach(m=>{(m.rows||[]).slice(0,50).forEach(f=>{Object.entries(f||{}).forEach(([g,v])=>{!v||String(g).startsWith("__")||n.push({field:g,value:v,page:m.page_first||m.page_number,source:"table",table:m.display_name||m.title,citation:`${m.page_label||"page"} - ${m.title||"table"}`})})})});const a=t.filter(m=>["paragraph","list_item","kv_pair","figure","section","heading"].includes(m.type)).map(m=>{var x;const f=m.text||((x=m.payload)==null?void 0:x.text)||"",g={page:m.page_number,order:m.sequence||0,type:m.type,path:m.path,text:f,citation:`p.${m.page_number||"-"} - ${m.path||"document"}`},v=[],y=String(f).match(/^\s*([^:：]{2,80})\s*[:：]\s*(.{1,300})$/);return y&&v.push({name:y[1].trim(),value:y[2].trim()}),v.length&&(g.key_values=v),g}).filter(m=>String(m.text||"").trim()),o=[],i=new Map;return a.forEach(m=>{const f=m.page||1;i.has(f)||i.set(f,{page:f,citation:`p.${f}`,content:[],tables:[]}),i.get(f).content.push(m)}),r.forEach(m=>{const f=m.page_first||m.page_number||1;i.has(f)||i.set(f,{page:f,citation:`p.${f}`,content:[],tables:[]}),i.get(f).tables.push(m)}),Array.from(i.keys()).sort((m,f)=>m-f).forEach(m=>o.push(i.get(m))),{document_summary:(e==null?void 0:e.document_summary)||{label:((l=e==null?void 0:e.summary)==null?void 0:l.label)||(e==null?void 0:e.label)||"Extracted document",source_type:((c=e==null?void 0:e.summary)==null?void 0:c.source_format)||(e==null?void 0:e.source_format)||"document",extraction_quality:{grade:((u=e==null?void 0:e.summary)==null?void 0:u.quality)||"not rated",coverage:e==null?void 0:e.coverage},counts:{text_blocks:a.length,tables:r.length,pages:o.length}},semantic_fields:n.slice(0,220),business_structure:Fh(t,r,n),sections:t.filter(m=>["section","heading"].includes(m.type)).slice(0,200),tables:r,pages:o,content:a}}function Fh(e,t,r){const n=[{document_index:1,label:"Extracted document",sections:[]}];let a=null;return e.slice().sort((o,i)=>(o.page_number||1)-(i.page_number||1)||(o.sequence||0)-(i.sequence||0)).forEach(o=>{var i;if(["section","heading"].includes(o.type)){a={title:o.text||o.path||`Page ${o.page_number||1}`,page:o.page_number||1,path:o.path,content:[],fields:[],inline_records:[],tables:[]},n[0].sections.push(a);return}if((!a||a.page!==(o.page_number||1))&&(a={title:`Page ${o.page_number||1}`,page:o.page_number||1,path:`/page_${o.page_number||1}`,content:[],fields:[],inline_records:[],tables:[]},n[0].sections.push(a)),["paragraph","list_item","kv_pair","figure"].includes(o.type)){const l=o.text||((i=o.payload)==null?void 0:i.text)||"",c=r.filter(m=>{var f;return m.page===o.page_number&&((f=m.citation)==null?void 0:f.includes(o.path||"__no_path__"))}),u=Uh(l);a.content.push({type:o.type,page:o.page_number,path:o.path,text:l,fields:c}),a.fields.push(...c),u&&a.inline_records.push({...u,page:o.page_number,citation:`p.${o.page_number||"-"} - ${o.path||"document"}`})}}),t.forEach(o=>{const i=o.page_first||o.page_number||1;let l=n[0].sections.find(c=>c.page===i);l||(l={title:`Page ${i}`,page:i,path:`/page_${i}`,content:[],fields:[],inline_records:[],tables:[]},n[0].sections.push(l)),l.tables.push({title:o.display_name||o.title||"Detected table",page_label:o.page_label,columns:o.columns||[],row_count:o.n_rows||0,sample_rows:(o.rows||o.row_preview||[]).slice(0,8)})}),{documents:n,section_count:n[0].sections.length}}function Uh(e){const t=String(e||"").trim();if(!t)return null;const r=t.includes("|")?t.split("|").map(n=>n.trim()).filter(Boolean):t.split(/\s{3,}/).map(n=>n.trim()).filter(Boolean);return r.length<2?null:{record_type:"inline_row",columns:r.map((n,a)=>`Column ${a+1}`),values:Object.fromEntries(r.map((n,a)=>[`Column ${a+1}`,n])),text:t}}function Bh(e){const t=String(e||""),r=[["color",/\b(?:colou?r|shade)\s*(?:is|=|:)?\s*([A-Za-z][A-Za-z\s/-]{2,40})/gi],["size",/\b(?:size|dimension)\s*(?:is|=|:)?\s*([A-Z0-9][A-Z0-9\s./x-]{0,40})/gi],["quantity",/\b(?:qty|quantity|count|units?)\s*(?:is|=|:)?\s*(\d[\d,]*(?:\.\d+)?)/gi],["price",/([$€£]\s?\d[\d,]*(?:\.\d+)?)/g],["percentage",/\b(\d+(?:\.\d+)?%)\b/g],["date",/\b(\d{1,2}[/-]\d{1,2}[/-]\d{2,4}|\d{4}-\d{1,2}-\d{1,2})\b/g],["code",/\b([A-Z]{1,8}[- ]?\d{2,12}[A-Z]?)\b/gi]],n=[],a=new Set;return r.forEach(([o,i])=>{for(const l of t.matchAll(i)){const c=String(l[1]||"").replace(/\s+/g," ").trim(),u=`${o}:${c.toLowerCase()}`;!c||a.has(u)||(a.add(u),n.push({field:o,value:c}))}}),n}function at(e){if(!e)return"";if(typeof e=="string")return $r(e);if(e instanceof Error)return at(e.message);if(Array.isArray(e))return e.map(at).filter(Boolean).join(`
`);if(typeof e=="object"){if(e.detail)return at(e.detail);if(e.error)return at(e.error);if(e.message)return at(e.message);try{return $r(JSON.stringify(e,null,2))}catch{return $r(String(e))}}return $r(String(e))}function Wh(e){if(!(e!=null&&e.length))return[];const t=new Set;return e.slice(0,20).forEach(r=>{r&&typeof r=="object"&&!Array.isArray(r)&&Object.keys(r).forEach(n=>{hr(n)||t.add(n)})}),Array.from(t).slice(0,12)}function hr(e){const t=String(e||"");return!t||t.startsWith("__")?!0:["payload","raw","field_profiles","column_profiles","extraction_intelligence","source_tables","table_fingerprint","bbox_by_page","quality_warnings"].includes(t)}function pr(e){if(e==null||e==="")return"-";if(Array.isArray(e))return e.map(pr).join(", ");if(typeof e=="object"){const t=Object.fromEntries(Object.entries(e).filter(([r])=>!hr(r)));return Object.keys(t).length?JSON.stringify(t):"-"}return String(e)}function Cc(e){return!e||typeof e!="object"?"":Object.entries(e).filter(([,t])=>t!=null&&String(t).trim()!=="").map(([t,r])=>`${t}: ${r}`).join(" | ")}function Vh(e,t=560,r=1280){const n=Math.max(1,Number(e)||1);return Math.min(r,Math.max(t,180+n*180))}function Qe(e,t){if(!e)return"";const r=String(e).replace(/\s+/g," ").trim();return r.length<=t?r:`${r.slice(0,t-1)}...`}function yt(e){const t=Number(e||0);return Number.isFinite(t)?Math.round(t).toLocaleString():"0"}function qh(e){if(!e)return"-";const t=new Date(e);return Number.isNaN(t.getTime())?"-":t.toLocaleString(void 0,{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function Hh(e,t){const r=Number(e||0);if(!Number.isFinite(r)||r<=0)return t==="complete"||t==="failed"?"-":"Running";const n=Math.max(1,Math.round(r/1e3));if(n<60)return`${n}s`;const a=Math.floor(n/60),o=n%60;if(a<60)return o?`${a}m ${o}s`:`${a}m`;const i=Math.floor(a/60),l=a%60;return l?`${i}h ${l}m`:`${i}h`}function Qh(e){return String(e||"-").replace(/\bbase\s*p\.?\s*(\d+)/gi,"Baseline page $1").replace(/\btarget\s*p\.?\s*(\d+)/gi,"Revised page $1").replace(/\bbaseline\s*p\.?\s*(\d+)/gi,"Baseline page $1").replace(/\brevised\s*p\.?\s*(\d+)/gi,"Revised page $1").replace(/\s*->\s*/g," → ")}function zc(e){const t=String(e||"").toLowerCase();return t.includes("high")?3:t.includes("medium")?2:t.includes("low")?1:0}function Ur(e){const t=String((e==null?void 0:e.change_type)||(e==null?void 0:e.changeType)||(e==null?void 0:e.status)||"").toUpperCase();if(["ADDED","DELETED","MODIFIED","UNCHANGED","MATCH"].includes(t))return t;if((e!=null&&e.after||e!=null&&e.target_text)&&!(e!=null&&e.before||e!=null&&e.base_text))return"ADDED";if((e!=null&&e.before||e!=null&&e.base_text)&&!(e!=null&&e.after||e!=null&&e.target_text))return"DELETED";const r=`${(e==null?void 0:e.type)||""} ${(e==null?void 0:e.change)||""} ${(e==null?void 0:e.description)||""} ${(e==null?void 0:e.review)||""}`.toUpperCase();return r.includes("ADDED")||r.includes("NEW CONTENT")||r.includes("INTRODUCED")?"ADDED":r.includes("DELETED")||r.includes("REMOVED")||r.includes("DROPPED")?"DELETED":r.includes("MODIFIED")||r.includes("CHANGED")||r.includes("UPDATED")||r.includes("REVISED")?"MODIFIED":t||"MODIFIED"}function Kh(e){const t=Ur(e),r=(e==null?void 0:e.before)||"",n=(e==null?void 0:e.after)||"",a=(e==null?void 0:e.stable_key)||Pc(e==null?void 0:e.path)||"Document change",o=[e!=null&&e.page_base?`Baseline page ${e.page_base}`:"",e!=null&&e.page_target?`Revised page ${e.page_target}`:""].filter(Boolean).join(" -> "),i=t==="ADDED"?`Added: ${Qe(n,260)}`:t==="DELETED"?`Deleted: ${Qe(r,260)}`:`Changed from "${Qe(r,120)}" to "${Qe(n,120)}"`;return{feature:a,item:a,area:Pc(e==null?void 0:e.path)||"Document",change_type:t,change:i,before:r,after:n,citation:o,impact:e==null?void 0:e.impact,confidence:typeof(e==null?void 0:e.similarity)=="number"?Math.max(.55,Math.min(.98,1-Math.abs(1-e.similarity))):null,seek_clarification:t==="UNCHANGED"?"None":"Review recommended."}}function Gh(e,t){const r=Array.isArray(e)?[...e]:[],n=Array.isArray(t)?t:[],a=new Set(r.map(Ur)),o=new Set(r.map(i=>`${Ur(i)}:${i.stable_key||i.item||i.feature||i.path||i.change}`));return["ADDED","DELETED"].forEach(i=>{if(a.has(i))return;let l=0;n.forEach(c=>{if(l>=12||Ur(c)!==i)return;const u=`${i}:${c.stable_key||c.path||c.before||c.after}`;o.has(u)||(r.push(Kh(c)),o.add(u),l+=1)})}),r}function Pc(e){const t=String(e||"").split("/").map(r=>r.trim()).filter(Boolean);return t[t.length-1]||""}function Tc(e){const t=`${e.seek_clarification||""} ${e.review||""} ${e.recommendation||""}`.toLowerCase(),r=Hs(e.confidence);return t.includes("review")||t.includes("clarif")||t.includes("confirm")||typeof r=="number"&&r<.8}function Hs(e){return typeof e!="number"?null:e>1?e/100:e}function Dc(e){return{border:"1px solid #c9c0b0",background:e?"#f1ece3":"#fffdf8",color:e?"#98a2b3":"#344054",borderRadius:7,padding:"7px 12px",cursor:e?"default":"pointer",fontWeight:600}}function $c(e){return{border:"1px solid #c9c0b0",background:e?"#f1ece3":"#fffdf8",color:e?"#98a2b3":"#344054",borderRadius:6,padding:"5px 8px",cursor:e?"default":"pointer",fontWeight:600,fontSize:12}}function Qs(e,t=!1){const r=String(e||"").toLowerCase();return r==="added"?{background:t?K.ADDED.bg:"rgba(31,160,70,.08)",border:t?void 0:`1px solid ${K.ADDED.border}`,borderInlineStart:`3px solid ${K.ADDED.border}`}:r==="deleted"?{background:t?K.DELETED.bg:"rgba(218,54,54,.08)",border:t?void 0:`1px solid ${K.DELETED.border}`,borderInlineStart:`3px solid ${K.DELETED.border}`}:r==="modified"?{background:t?"rgba(196,85,16,.10)":"rgba(196,85,16,.08)",border:t?void 0:`1px solid ${K.MODIFIED.border}`,borderInlineStart:`3px solid ${K.MODIFIED.border}`}:{background:t?"transparent":"#fffdf8",border:t?void 0:"1px solid transparent",borderInlineStart:"3px solid transparent"}}function Jh({meta:e}){var r,n,a;const t=e.stats||{};return s.jsxs("section",{className:"stats-strip",children:[s.jsx(ke,{label:"Added",value:t.ADDED||0,tone:"added"}),s.jsx(ke,{label:"Deleted",value:t.DELETED||0,tone:"deleted"}),s.jsx(ke,{label:"Modified",value:t.MODIFIED||0,tone:"modified"}),s.jsx(ke,{label:"Unchanged",value:t.UNCHANGED||0}),s.jsx(ke,{label:"Coverage",value:`${Rc((r=e.coverage)==null?void 0:r.base)} / ${Rc((n=e.coverage)==null?void 0:n.target)}`}),s.jsx(ke,{label:"Pages",value:`${e.n_pages_base} / ${e.n_pages_target}`}),Number(((a=e.ai_usage)==null?void 0:a.total_tokens)||0)>0&&s.jsx(ke,{label:"AI tokens",value:`${yt(e.ai_usage.total_tokens)} (${yt(e.ai_usage.calls||0)} calls)`})]})}function Rc(e){return typeof e=="number"?`${e.toFixed(1)}%`:"-"}function ke({label:e,value:t,tone:r}){return s.jsxs("span",{className:`stat-chip ${r||"neutral"}`,children:[s.jsx("span",{children:e}),s.jsx("strong",{children:t})]})}function Yh({usage:e}){const t=Number((e==null?void 0:e.total_tokens)||0);if(!t)return null;const n=(Array.isArray(e==null?void 0:e.operations)?e.operations:[]).slice(-4);return s.jsxs("div",{style:{border:"1px solid #ded6c8",borderRadius:8,padding:10,marginBottom:12,background:"#fbfaf6",fontSize:12,color:"#475467"},children:[s.jsx("strong",{style:{color:"#344054"},children:"AI usage:"})," ",yt(t)," tokens · ",yt(e.calls||0)," call(s) · ",yt(e.prompt_tokens||0)," input / ",yt(e.completion_tokens||0)," output",n.length>0&&s.jsx("div",{style:{marginTop:6,display:"flex",flexWrap:"wrap",gap:6},children:n.map((a,o)=>s.jsxs("span",{style:{border:"1px solid #d8d0c3",borderRadius:999,padding:"3px 7px",background:"#fffdf8"},children:[a.operation||"AI call"," · ",yt(a.total_tokens||0)]},`${a.operation||"op"}-${o}`))})]})}function Lc({progress:e,message:t,status:r}){const n=yo(r),a=Math.max(0,Math.min(100,Number(e)||0)),o=n.isFailed?100:Math.max(7,n.isComplete?100:a);return s.jsxs("div",{className:"processing-state",children:[s.jsxs("div",{className:"processing-state-head",children:[s.jsx("span",{style:{fontWeight:600},children:t}),s.jsxs("span",{children:[a,"%"]})]}),s.jsx("div",{className:"progress-track",children:s.jsx("div",{className:`progress-fill ${n.className}`,style:{width:`${o}%`}})}),s.jsx("p",{children:"The job is still running. This view updates automatically as the backend reports progress."})]})}function On({message:e}){return s.jsx("div",{style:{marginTop:16,border:"1px solid #f0b4b4",background:"#fff5f5",color:"#9f1d1d",borderRadius:8,padding:13,fontSize:14,fontWeight:600,lineHeight:1.45,whiteSpace:"pre-wrap"},children:at(e)})}function qn({label:e}){return s.jsx("div",{style:{padding:20,color:"#667085",fontWeight:600},children:e})}function Qt({label:e}){return s.jsx("div",{style:{padding:18,border:"1px dashed #c9c0b0",borderRadius:8,color:"#667085",background:"#fbfaf7",fontWeight:600},children:e})}function Xh({status:e}){const t=yo(e);return s.jsx("span",{style:{display:"inline-block",background:t.tone.chip,color:t.tone.text,border:`1px solid ${t.tone.border}`,padding:"2px 8px",borderRadius:999,fontWeight:650,fontSize:12},children:t.label})}function yo(e){const t=String(e||"queued").toLowerCase(),r=t==="complete"||t==="completed",n=t==="failed"||t==="error",a=t==="running"||t==="processing"||t==="uploading";return{value:t,label:r?"complete":n?"failed":t,className:r?"complete":n?"failed":a?"running":"queued",tone:r?K.ADDED:n?K.DELETED:a?K.MODIFIED:K.UNCHANGED,isComplete:r,isFailed:n}}function Zh({value:e,status:t}){const r=yo(t),n=Math.max(0,Math.min(100,Number(e)||0)),a=r.isFailed||r.isComplete?100:n;return s.jsxs("div",{children:[s.jsx("div",{className:"progress-track",style:{height:6,minWidth:140},children:s.jsx("div",{className:`progress-fill ${r.className}`,style:{width:`${a}%`}})}),s.jsx("div",{style:{marginTop:5,color:"#667085",fontSize:12},children:r.isFailed?"failed":`${r.isComplete?100:n}%`})]})}function cp({type:e}){const t=String(e||"MODIFIED").toUpperCase(),r=K[t]||K.MODIFIED;return s.jsx("span",{style:{display:"inline-block",background:r.chip,color:r.text,border:`1px solid ${r.border}`,padding:"2px 8px",borderRadius:999,fontWeight:650,fontSize:12},children:t})}function eg({onOpenJob:e,onAskJob:t,error:r,historyKind:n="all",onStartCompare:a,onStartExtract:o}){const[i,l]=w.useState({loading:!0,error:"",jobs:[]}),[c,u]=w.useState(""),m=async()=>{try{const p=await fetch(`${V}/jobs?limit=80`);if(!p.ok)throw new Error(await se(p));const d=await p.json();l({loading:!1,error:"",jobs:d.jobs||[]})}catch(p){l({loading:!1,error:ie(p),jobs:[]})}};w.useEffect(()=>{let p=!1,d=null;const h=async()=>{p||(await m(),p||(d=setTimeout(h,2200)))};return h(),()=>{p=!0,d&&clearTimeout(d)}},[]);const f=async p=>{if(!(!(p!=null&&p.run_id)||c)){u(p.run_id);try{const d=await fetch(`${V}/jobs/${p.run_id}`,{method:"DELETE"});if(!d.ok)throw new Error(await se(d));await m()}catch(d){l(h=>({...h,error:ie(d)}))}finally{u("")}}},g=(i.jobs||[]).filter(p=>n==="all"||p.kind===n),v=g.filter(p=>!["complete","failed","error"].includes(p.status)).length,y=g.filter(p=>p.status==="complete").length,x=n==="comparison"?"Comparison History":n==="extraction"?"Extraction History":"Work History",j=n==="comparison"?"No comparison runs are available yet.":n==="extraction"?"No extraction runs are available yet.":"No document work is available yet.";return s.jsxs("section",{className:"session-board",children:[s.jsxs("div",{className:"board-head",children:[s.jsx("div",{children:s.jsx("h2",{children:x})}),s.jsxs("div",{className:"board-actions",children:[s.jsx("button",{type:"button",onClick:a,className:"primary-action compact",children:"New compare"}),s.jsx("button",{type:"button",onClick:o,className:"ghost-action compact",children:"New extract"}),s.jsxs("span",{children:[v," running"]}),s.jsxs("span",{children:[y," complete"]}),s.jsx("button",{type:"button",onClick:m,className:"ghost-action",children:"Refresh"})]})]}),r&&s.jsx(On,{message:r}),i.error&&s.jsx(On,{message:i.error}),i.loading&&!g.length?s.jsx(qn,{label:"Loading jobs"}):g.length===0?s.jsx(Qt,{label:j}):s.jsx("div",{className:"job-list",children:g.map(p=>s.jsx(tg,{job:p,deleting:c===p.run_id,onOpen:()=>e(p),onAsk:()=>t==null?void 0:t(p),onDelete:()=>f(p)},p.run_id))})]})}function tg({job:e,deleting:t,onOpen:r,onAsk:n,onDelete:a}){const o=e.status==="complete",i=yo(e.status),l=e.kind==="extraction",c=l?e.label||"Uploaded document":`${e.base_label||"Baseline"} → ${e.target_label||"Revised"}`,u=l?e.n_pages||"-":`${e.n_pages_base||"-"} / ${e.n_pages_target||"-"}`;return s.jsxs("article",{className:`job-card ${i.className}`,children:[s.jsxs("div",{className:"job-main",children:[s.jsx("div",{className:"job-kind",children:l?"Extraction":"Comparison"}),s.jsx("h3",{dir:"auto",children:c}),s.jsxs("div",{className:"job-meta",children:[s.jsxs("span",{children:["#",String(e.run_id||"").slice(0,6)]}),s.jsx("span",{children:[e.source_format,e.base_format,e.target_format].filter(Boolean).join(" / ")||"document"}),s.jsxs("span",{children:[u," pages"]}),s.jsx("span",{children:Hh(e.duration_ms,e.status)})]}),e.status_message&&s.jsx("p",{dir:"auto",children:e.status_message}),i.isFailed&&e.error&&s.jsx("p",{className:"job-error",dir:"auto",children:Qe(at(e.error),180)})]}),s.jsxs("div",{className:"job-side",children:[s.jsx(Xh,{status:e.status}),s.jsx(Zh,{value:e.progress||0,status:e.status}),s.jsx("span",{className:"job-date",children:qh(e.created_at)}),s.jsxs("div",{className:"job-actions",children:[s.jsx("button",{type:"button",onClick:r,disabled:!o,className:"primary-action compact",children:"Open"}),s.jsx("button",{type:"button",onClick:n,disabled:!o||!l,className:"ghost-action compact",children:"Query"}),s.jsx("button",{type:"button",onClick:a,disabled:t,className:"danger-action compact",children:t?"Deleting":"Delete"})]})]})]})}function rg({onUpload:e,busy:t,onAdmin:r}){const n=up("comparison"),a=t||n.loading||!n.selectedId||n.datasets.length===0;return s.jsxs("form",{onSubmit:e,className:"doc-workflow-card",children:[s.jsx("div",{className:"workflow-card-head",children:s.jsx("div",{children:s.jsx("h2",{children:"Compare two documents"})})}),s.jsx(dp,{...n,busy:t,onAdmin:r}),!n.loading&&n.datasets.length===0?s.jsx(pp,{onAdmin:r}):null,s.jsxs("div",{className:"upload-grid compare",children:[s.jsx(Ks,{label:"Baseline",helper:"Approved or reference file",name:"base",disabled:a}),s.jsx(Ks,{label:"Revised",helper:"Latest or proposed file",name:"target",disabled:a}),s.jsxs("div",{className:"workflow-action-rail",children:[s.jsx("button",{disabled:a,className:"primary-action full",children:t?"Processing":"Compare documents"}),s.jsx("div",{className:"workflow-note",children:"Side-by-side preview, semantic changes, and export."})]})]})]})}function ng({onUpload:e,busy:t,onAdmin:r}){const n=up("extraction"),a=t||n.loading||!n.selectedId||n.datasets.length===0;return s.jsxs("form",{onSubmit:e,className:"doc-workflow-card",children:[s.jsx("div",{className:"workflow-card-head",children:s.jsx("div",{children:s.jsx("h2",{children:"Extract documents"})})}),s.jsx(dp,{...n,busy:t,onAdmin:r}),!n.loading&&n.datasets.length===0?s.jsx(pp,{onAdmin:r}):null,s.jsxs("div",{className:"upload-grid extract",children:[s.jsx(Ks,{label:"Document or image",helper:"PDF, image, Word, Excel, xlsb, CSV, or TSV",name:"document",disabled:a,multiple:!0}),s.jsxs("div",{className:"workflow-action-rail",children:[s.jsx("button",{disabled:a,className:"primary-action full",children:t?"Extracting":"Extract content"}),s.jsx("div",{className:"workflow-note",children:"Text, tables, OCR, structured JSON, and document query."})]})]})]})}function up(e){const[t,r]=w.useState([]),[n,a]=w.useState(""),[o,i]=w.useState(!0),[l,c]=w.useState("");return w.useEffect(()=>{let u=!0;return(async()=>{i(!0),c("");try{const f=window.sessionStorage.getItem("simulated_role")||"platform_admin",g=await fetch(`${V}/datasets`,{headers:{"X-User-Role":f}});if(!g.ok){const j=g.status===404?"Use case service is not available. Confirm the backend admin/datasets routes are deployed, then refresh.":`Could not load use cases (${g.status})`;throw new Error(j)}const x=((await g.json()).datasets||[]).filter(j=>(j.use_case_type||"comparison")===e);if(!u)return;r(x),a(j=>{var p;return j||((p=x[0])==null?void 0:p.id)||""})}catch(f){if(!u)return;r([]),a(""),c((f==null?void 0:f.message)||"Could not load use cases.")}finally{u&&i(!1)}})(),()=>{u=!1}},[]),{datasets:t,selectedId:n,setSelectedId:a,loading:o,error:l}}function dp({datasets:e,selectedId:t,setSelectedId:r,loading:n,error:a,busy:o,onAdmin:i}){return s.jsxs("div",{className:"usecase-selector",children:[s.jsxs("label",{children:[s.jsx("span",{children:"Use case"}),s.jsxs("select",{name:"family_id",value:t,onChange:l=>r(l.target.value),required:!0,disabled:o||n||e.length===0,children:[s.jsx("option",{value:"",disabled:!0,children:n?"Loading use cases":"Select a use case"}),e.map(l=>s.jsxs("option",{value:l.id,children:[l.supplier," - ",l.family_name," (",l.domain||"generic",")"]},l.id))]})]}),a?s.jsx("p",{className:"usecase-error",children:a}):null,e.length>0?s.jsx("button",{type:"button",className:"ghost-action compact",onClick:i,children:"Manage"}):null]})}function pp({onAdmin:e}){return s.jsxs("div",{className:"usecase-required",children:[s.jsx("strong",{children:"Use case required"}),s.jsx("p",{children:"Create or bootstrap a document use case before uploading files. The selected use case supplies metadata, template rules, access policy, and extraction guidance."}),s.jsx("button",{type:"button",className:"primary-action compact",onClick:e,children:"Open Admin Studio"})]})}function Ks({label:e,helper:t,name:r,disabled:n,multiple:a=!1}){const[o,i]=w.useState(""),l=w.useRef(null),c=()=>{var u;n||(u=l.current)==null||u.click()};return s.jsxs("div",{onClick:c,onKeyDown:u=>{(u.key==="Enter"||u.key===" ")&&c()},role:"button",tabIndex:n?-1:0,className:`file-lane${n?" disabled":""}`,children:[s.jsx("input",{ref:l,type:"file",name:r,accept:Lh,multiple:a,required:!0,disabled:n,onClick:u=>u.stopPropagation(),onChange:u=>{var f;const m=Array.from(u.target.files||[]);i(m.length>1?`${m.length} files selected`:((f=m[0])==null?void 0:f.name)||"")},style:{position:"absolute",width:1,height:1,opacity:0,pointerEvents:"none"}}),s.jsxs("div",{className:"file-lane-head",children:[s.jsxs("div",{children:[s.jsx("div",{className:"file-lane-title",children:e}),s.jsx("div",{className:"file-lane-helper",children:t})]}),s.jsx("span",{className:"file-lane-pill",children:"Files"})]}),s.jsx("div",{className:`file-lane-value${o?" selected":""}`,children:o||"Select a file"})]})}function ag({runId:e,meta:t,onVerifyPage:r}){const n=t.base_format&&t.base_format!=="pdf"?t.base_native_pages||t.n_pages_base||1:t.n_pages_base||1,a=t.target_format&&t.target_format!=="pdf"?t.target_native_pages||t.n_pages_target||1:t.n_pages_target||1,o=Math.max(n,a),[i,l]=w.useState(null),[c,u]=w.useState(!1);w.useEffect(()=>{let v=!1;return l(null),Promise.all([fetch(`${V}/runs/${e}/summary`).then(async y=>{if(!y.ok)throw new Error("Failed to load summary");return y.json()}),fetch(`${V}/runs/${e}/diff?limit=500`).then(async y=>y.ok?y.json():{diffs:[]})]).then(([y,x])=>{if(v)return;const j=Array.isArray(y)?y:y.rows||y.summary||[];l(Gh(j,x.diffs||[]))}).catch(y=>{v||(console.error("Failed to build quick summary",y),l([]))}),()=>{v=!0}},[e]);const m=to.useMemo(()=>(Array.isArray(i)?i:[]).filter(y=>y.change||y.description||y.before||y.after).sort((y,x)=>{const j=zc(y.impact)+(Tc(y)?2:0)+(Hs(y.confidence)||0);return zc(x.impact)+(Tc(x)?2:0)+(Hs(x.confidence)||0)-j}),[i]),f=v=>{const y=String(v||""),x=y.match(/(?:revised|target|page|p\.)\s*(\d+)/i)||y.match(/\b(\d{1,4})\b/);if(!x)return null;const j=Number.parseInt(x[1],10);return Number.isFinite(j)&&j>=1&&j<=o?j:null};if(i===null)return s.jsx("div",{className:"key-audit-empty",children:"Building comparison summary..."});if(!m.length)return s.jsx("div",{className:"key-audit-empty",children:"No prioritized summary items were returned for this comparison."});const g=c?m.slice(0,16):m.slice(0,8);return s.jsxs("div",{className:"key-audit-panel compact",children:[s.jsx("div",{className:"key-audit-list",children:g.map((v,y)=>{const x=f(v.citation);return s.jsxs("div",{className:"key-audit-item",children:[s.jsx(cp,{type:Ur(v)}),s.jsxs("div",{className:"key-audit-copy",dir:"auto",children:[s.jsx("strong",{children:Qe(v.feature||v.item||v.area||"Document change",120)}),s.jsx("span",{children:Qe(v.change||v.description||v.before||v.after||"Value updated.",260)}),v.citation?s.jsx("small",{children:Qh(v.citation)}):null]}),x?s.jsxs("button",{type:"button",className:"primary-action compact",onClick:()=>r(x),children:["Verify page ",x]}):null]},`${v.stable_key||v.feature||v.item||y}`)})}),m.length>8&&s.jsx("button",{type:"button",className:"key-audit-more",onClick:()=>u(v=>!v),children:c?"Show fewer":`Show ${Math.min(16,m.length)} items`})]})}function og({runId:e,meta:t,pageNum:r,setPageNum:n}){const a=t.base_format&&t.base_format!=="pdf"?t.base_native_pages||t.n_pages_base||1:t.n_pages_base||1,o=t.target_format&&t.target_format!=="pdf"?t.target_native_pages||t.n_pages_target||1:t.n_pages_target||1,i=Math.max(a,o),[l,c]=w.useState(r),[u,m]=w.useState(r),[f,g]=w.useState(100),[v,y]=w.useState(!1),[x,j]=w.useState(!0),p=w.useRef(null),d=w.useRef(null);w.useEffect(()=>{c(r),m(r)},[e,r]),w.useEffect(()=>{if(!x)return;const b=p.current,S=d.current;if(!b||!S)return;let N=!1;const C=(R,W)=>{N||(N=!0,W.scrollTop=R.scrollTop,W.scrollLeft=R.scrollLeft,window.requestAnimationFrame(()=>{N=!1}))},z=()=>C(b,S),$=()=>C(S,b);return b.addEventListener("scroll",z,{passive:!0}),S.addEventListener("scroll",$,{passive:!0}),()=>{b.removeEventListener("scroll",z),S.removeEventListener("scroll",$)}},[e,r,x]);const h=b=>{const S=Math.max(1,Math.min(i,b));n(S),c(S),m(S)};return s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:12,flexWrap:"wrap"},children:[s.jsx("button",{onClick:()=>h(r-1),disabled:r<=1,style:Dc(r<=1),children:"Prev both"}),s.jsxs("span",{style:{fontSize:17,fontWeight:650,minWidth:100},children:["Page ",r," / ",i]}),s.jsx("button",{onClick:()=>h(r+1),disabled:r>=i,style:Dc(r>=i),children:"Next both"}),s.jsxs("div",{className:"viewer-toolbar-group","aria-label":"PDF zoom controls",children:[s.jsx("button",{type:"button",onClick:()=>g(b=>Math.max(50,b-25)),title:"Zoom out",children:"-"}),s.jsxs("span",{children:[f,"%"]}),s.jsx("button",{type:"button",onClick:()=>g(b=>Math.min(300,b+25)),title:"Zoom in",children:"+"}),s.jsx("button",{type:"button",onClick:()=>g(100),title:"Reset zoom",children:"Reset"})]}),s.jsxs("label",{className:"viewer-sync-toggle",children:[s.jsx("input",{type:"checkbox",checked:x,onChange:b=>j(b.target.checked)}),s.jsx("span",{children:"Sync scroll"})]}),s.jsxs("label",{className:"viewer-sync-toggle",style:{marginLeft:8},children:[s.jsx("input",{type:"checkbox",checked:v,onChange:b=>y(b.target.checked)}),s.jsx("span",{children:"Smart crop"})]}),s.jsx(sg,{})]}),s.jsxs("div",{className:"viewer-grid",style:{display:"grid",gridTemplateColumns:"minmax(0, 1fr) minmax(0, 1fr)",gap:14},children:[s.jsx(Ic,{runId:e,side:"base",pageNum:l,setPageNum:c,totalPages:a,label:"Baseline document",docName:t.base_label,format:t.base_format,zoom:f,scrollRef:p,cropMargins:v}),s.jsx(Ic,{runId:e,side:"target",pageNum:u,setPageNum:m,totalPages:o,label:"Revised document",docName:t.target_label,format:t.target_format,zoom:f,scrollRef:d,cropMargins:v})]})]})}function sg(){return s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7,marginLeft:6,flexWrap:"wrap"},children:[s.jsx(Ko,{label:"added",color:K.ADDED.bg,border:K.ADDED.border}),s.jsx(Ko,{label:"deleted",color:K.DELETED.bg,border:K.DELETED.border}),s.jsx(Ko,{label:"modified",color:K.MODIFIED.bg,border:K.MODIFIED.border})]})}function Ko({label:e,color:t,border:r}){return s.jsx("span",{style:{background:t,border:`1px solid ${r}`,color:"var(--text-primary)",padding:"2px 8px",borderRadius:999,fontSize:12,fontWeight:600},children:e})}function Ic({runId:e,side:t,pageNum:r,setPageNum:n,totalPages:a,label:o,docName:i,format:l,zoom:c=100,scrollRef:u,cropMargins:m}){const[f,g]=w.useState({regions:[]}),[v,y]=w.useState(null),[x,j]=w.useState("idle"),p=r>=1&&r<=a,d=l&&l!=="pdf";w.useEffect(()=>{if(j(p&&!d?"loading":"idle"),!p){g({regions:[]}),y(null);return}if(d){g({regions:[]}),fetch(`${V}/runs/${e}/native-page/${t}/${r}`).then($=>$.json()).then(y).catch(()=>y({items:[]}));return}y(null),fetch(`${V}/runs/${e}/overlay/${t}/${r}`).then($=>$.json()).then(g).catch(()=>g({regions:[]}))},[e,t,r,p,d]);const h=f.content_box,b=f.page_width||612,S=f.page_height||792,N=m&&h&&h.x_max>h.x_min&&h.y_max>h.y_min;let C={position:"relative",width:"100%"},z={position:"relative",width:`${c}%`};if(N){const $=h.x_min/b,R=h.y_min/S,W=(h.x_max-h.x_min)/b;C={position:"relative",overflow:"hidden",width:"100%",paddingTop:`${(h.y_max-h.y_min)/S/W*c}%`},z={position:"absolute",left:`${-($/W)*c}%`,top:`${-(R/W)*c}%`,width:`${1/W*c}%`}}return s.jsxs("div",{className:"doc-viewer-shell",children:[s.jsxs("div",{style:{marginBottom:7,display:"flex",justifyContent:"space-between",gap:10,alignItems:"flex-end",flexWrap:"wrap"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:13,color:"var(--text-secondary)",fontWeight:600},children:o}),s.jsxs("div",{style:{fontSize:14,color:"var(--text-primary)",fontWeight:600},children:[i," - ",p?`page ${r}`:"no page",l&&s.jsx("span",{style:{color:"var(--text-secondary)",fontSize:11,marginLeft:6},children:String(l).toUpperCase()})]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[s.jsx("button",{type:"button",onClick:()=>n(Math.max(1,r-1)),disabled:r<=1,style:$c(r<=1),title:`Previous ${o}`,children:"Prev"}),s.jsxs("span",{style:{color:"var(--text-secondary)",fontSize:12,minWidth:46,textAlign:"center"},children:[r,"/",a||1]}),s.jsx("button",{type:"button",onClick:()=>n(Math.min(a||1,r+1)),disabled:r>=(a||1),style:$c(r>=(a||1)),title:`Next ${o}`,children:"Next"})]})]}),s.jsx("div",{ref:u,className:`doc-frame dl-scrollbar ${d?"native":""}`,style:{overflow:"auto",maxHeight:"75vh",position:"relative"},children:p?d?s.jsx(lg,{page:v,side:t}):s.jsx("div",{style:C,children:s.jsxs("div",{className:"pdf-zoom-stage",style:z,children:[x==="loading"&&s.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)",background:"var(--surface-raised)",zIndex:1,fontWeight:600},children:["Loading page ",r]}),s.jsx("img",{src:`${V}/runs/${e}/pages/${t}/${r}`,onLoad:()=>j("ready"),onError:()=>j("error"),style:{display:"block",width:"100%",height:"auto"},alt:`${t} page ${r}`},`${t}-${r}`),x==="error"&&s.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:K.DELETED.text,background:"#fff5f5",zIndex:2,fontWeight:600},children:["Could not load page ",r]}),(f.regions||[]).map(($,R)=>{const[W,_e,Ae,Ct]=$.bbox||[0,0,0,0],Ee=K[String($.change_type||"").toUpperCase()]||K.MODIFIED,Ye=$.page_width||f.page_width||612,Ne=$.page_height||f.page_height||792,E=$.border_color||Ee.border,D=$.color||Ee.bg;return s.jsx("div",{title:`${$.change_type||"change"} ${$.stable_key||""} (${$.block_type||"block"})`,style:{position:"absolute",left:`${W/Ye*100}%`,top:`${_e/Ne*100}%`,width:`${Math.max(.15,(Ae-W)/Ye*100)}%`,height:`${Math.max(.15,(Ct-_e)/Ne*100)}%`,background:D,border:`1px solid ${E}`,boxShadow:`inset 0 0 0 1px ${D}`,pointerEvents:"auto"}},R)})]})}):s.jsx(ig,{pageNum:r})})]})}function ig({pageNum:e}){return s.jsxs("div",{style:{minHeight:520,display:"grid",placeItems:"center",color:"var(--text-secondary)",fontWeight:600},children:["No page ",e," in this document."]})}function lg({page:e,side:t}){if(!e)return s.jsx("div",{style:{minHeight:520,display:"grid",placeItems:"center",color:"var(--text-secondary)",fontWeight:600},children:"Loading structured page"});const r=e.items||[],n=e.viewer_type||(e.format==="spreadsheet"?"spreadsheet":"document");return r.length?s.jsx("div",{className:`native-page ${n}`,dir:"auto",children:r.map(a=>s.jsx(cg,{item:a,viewerType:n,side:t||e.side},a.id))}):s.jsx("div",{style:{minHeight:520,display:"grid",placeItems:"center",color:"var(--text-secondary)",fontWeight:600},children:"No structured content on this page."})}function cg({item:e,viewerType:t,side:r}){var i;const n=Qs(e.highlight);if(e.type==="table"&&!((i=e.payload)!=null&&i.layout_table)&&!fg(e,t))return s.jsx(dg,{item:e,viewerType:t});const a=e.type==="table"?{...e,text:pg(e),payload:{...e.payload||{},layout_table:!0}}:e,o=e.type==="section"||e.type==="heading";return s.jsx("div",{className:"native-block",dir:"auto",style:{...n,marginBottom:o?10:8,padding:o?"7px 9px":"6px 8px",borderRadius:6,fontSize:o?14:13,fontWeight:o?650:400,lineHeight:1.45},title:e.change_type,children:s.jsx(ug,{item:a,side:r})})}function ug({item:e,side:t}){var a,o;const r=e.token_diff||[];return e.highlight==="modified"&&Array.isArray(r)&&r.some(i=>i.op&&i.op!=="equal")?s.jsx("span",{dir:"auto",children:r.map((i,l)=>{const c=i.op;if(c==="delete"&&t!=="base"||c==="insert"&&t==="base")return null;const u=c==="equal"||t==="base"?i.text_a:i.text_b;if(!u)return null;let m="";return c==="delete"&&(m="native-token-delete"),c==="insert"&&(m="native-token-insert"),c==="replace"&&(m=t==="base"?"native-token-replace-base":"native-token-replace-target"),s.jsxs(to.Fragment,{children:[l>0?" ":"",s.jsx("span",{className:`native-token ${m}`,dir:"auto",children:u})]},l)})}):s.jsx("span",{dir:"auto",children:e.text||((a=e.payload)==null?void 0:a.text)||((o=e.payload)==null?void 0:o.layout_text)||e.path||"-"})}function dg({item:e,viewerType:t}){var i;const r=Ki(e),n=e.rows||[],a=((i=e.payload)==null?void 0:i.table_title)||e.text||"Table",o=t==="spreadsheet";return s.jsxs("div",{className:"native-block",dir:"auto",style:{...Qs(e.highlight),marginBottom:14,padding:10,borderRadius:7},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:10,alignItems:"baseline",flexWrap:"wrap",marginBottom:7},children:[s.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--text-primary)"},children:a}),s.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)"},children:[n.length," row",n.length===1?"":"s"]})]}),s.jsx("div",{className:"native-table-wrap dl-scrollbar",children:s.jsxs("table",{className:`native-table ${o?"spreadsheet":""}`,style:{fontSize:12},children:[s.jsx("thead",{children:s.jsx("tr",{style:{background:"var(--surface-sunken)",color:"var(--text-primary)"},children:r.map((l,c)=>{const u=String(l||"").toLowerCase(),m=c>0&&(u.includes("pcv")||u.includes("pcb")||u.includes("model")||u.includes("spec")||String(l||"").length<=4||r.length>=6&&String(l||"").length<=12);return s.jsx("th",{dir:"auto",className:m?"vertical-th":"",style:m?{...or,verticalAlign:"bottom"}:or,children:m?s.jsx("span",{className:"vertical-th-text",children:l}):l},l)})})}),s.jsx("tbody",{children:n.map(l=>{const c=Qs(l.highlight,!0);return s.jsx("tr",{title:l.change_type,style:{background:c.background},children:r.map(u=>{var m;return s.jsx("td",{dir:"auto",style:{...Fr,borderLeft:c.borderLeft},children:pr((m=Gi(l.values))==null?void 0:m[u])},u)})},l.id)})})]})})]})}function Ki(e){return(Array.isArray(e==null?void 0:e.header)?e.header:[]).map(r=>String(r||"").trim()).filter(r=>r&&!hr(r))}function Gi(e){return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).map(([t,r])=>[String(t||"").trim(),r]).filter(([t])=>t&&!hr(t)))}function pg(e){const r=(Array.isArray(e==null?void 0:e.rows)?e.rows:[]).map(n=>{const a=Gi(n.values);return Object.values(a).map(i=>pr(i)).filter(i=>i&&i!=="-").join(" / ")||n.text||""}).filter(Boolean);return r.length?r.join(`
`):(e==null?void 0:e.text)||Ki(e).join(" / ")||"Document text"}function fg(e,t){var v;if(((v=e==null?void 0:e.payload)==null?void 0:v.source_format)==="docx"||t!=="document")return!1;const r=Array.isArray(e==null?void 0:e.header)?e.header:[],n=Ki(e),a=Array.isArray(e==null?void 0:e.rows)?e.rows:[],o=r.some(y=>hr(y)),i=a.flatMap(y=>Object.values(Gi(y.values||{})).map(x=>String(x||"").trim()).filter(Boolean));if(o&&n.length<=2)return!0;if(!a.length||!i.length)return!1;const c=i.filter(y=>y.length>70||y.split(/\s+/).length>=10).length/Math.max(1,i.length),m=i.filter(y=>/[\u0600-\u06ff]/.test(y)&&/[A-Za-z]/.test(y)).length/Math.max(1,i.length),g=n.filter(y=>/feature|description|item|name|order|code|part|model|price|amount|status|date|term|rent|fee/i.test(y)).length/Math.max(1,n.length);return m>=.2&&g<.35||a.length<=6&&c>=.45&&g<.35}function mg({columns:e,rows:t}){if(e=(e||[]).filter(n=>!hr(n)),!e.length||!(t!=null&&t.length))return null;const r=Vh(e.length,420,920);return s.jsx("div",{className:"dl-scrollbar table-scroll-frame",style:{marginTop:12},children:s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12,minWidth:r},children:[s.jsx("thead",{children:s.jsx("tr",{style:{background:"#f2eee6"},children:e.map(n=>s.jsx("th",{title:n,style:or,dir:"auto",children:n},n))})}),s.jsx("tbody",{children:t.map((n,a)=>s.jsx("tr",{children:e.map(o=>{var i;return s.jsx("td",{style:Fr,dir:"auto",children:pr(((i=n==null?void 0:n.values)==null?void 0:i[o])??(n==null?void 0:n[o]))},o)})},a))})]})})}function sr({columns:e,rows:t}){const r=(e||[]).filter(n=>!hr(n));return s.jsx("div",{className:"dl-scrollbar",style:{overflowX:"auto"},children:s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13,minWidth:780},children:[s.jsx("thead",{children:s.jsx("tr",{style:{background:"#1f2937",color:"white"},children:r.map(n=>s.jsx("th",{dir:"auto",style:{...or,padding:"10px 12px",borderBottom:"1px solid #384250",color:"white"},children:n},n))})}),s.jsx("tbody",{children:t.slice(0,200).map((n,a)=>s.jsx("tr",{children:r.map(o=>s.jsx("td",{dir:"auto",style:Fr,children:pr(n[o])},o))},a))})]})})}function hg({rows:e}){return e!=null&&e.length?s.jsx("div",{className:"dl-scrollbar",style:{overflowX:"auto",marginTop:10},children:s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13,minWidth:640},children:[s.jsx("thead",{children:s.jsxs("tr",{style:{background:"#f2eee6",color:"#344054"},children:[s.jsx("th",{style:or,dir:"auto",children:"Field"}),s.jsx("th",{style:or,dir:"auto",children:"Before"}),s.jsx("th",{style:or,dir:"auto",children:"After"})]})}),s.jsx("tbody",{children:e.map((t,r)=>s.jsxs("tr",{children:[s.jsx("td",{style:Fr,dir:"auto",children:t.field||t.column||t.name||"-"}),s.jsx("td",{style:{...Fr,color:K.DELETED.text},dir:"auto",children:pr(t.before??t.base??t.old)}),s.jsx("td",{style:{...Fr,color:K.ADDED.text},dir:"auto",children:pr(t.after??t.target??t.new)})]},r))})]})}):null}function gg({runId:e,meta:t,tab:r,setTab:n}){return s.jsxs(s.Fragment,{children:[s.jsx(vg,{meta:t}),s.jsx(yg,{tab:r,setTab:n}),s.jsxs("main",{style:{...pt,padding:12},children:[r==="overview"&&s.jsx(wg,{runId:e,meta:t}),r==="tables"&&s.jsx(bg,{runId:e}),r==="text"&&s.jsx(kg,{runId:e}),r==="json"&&s.jsx(jg,{runId:e,meta:t})]}),s.jsxs("section",{className:"workspace-surface extraction-query-surface",style:{marginTop:12},children:[s.jsx("div",{className:"surface-title-row",children:s.jsxs("div",{children:[s.jsx("h3",{children:"Ask This Extraction"}),s.jsx("p",{children:"Search the extracted text, tables, headings, and page evidence from this document."})]})}),s.jsx(xg,{runId:e})]})]})}function xg({runId:e}){const[t,r]=w.useState(""),[n,a]=w.useState([]),[o,i]=w.useState(!1),l=async()=>{const c=t.trim();if(!c||o)return;const u=`extract-user-${Date.now()}`,m=`extract-answer-${Date.now()}`;a(f=>[...f,{id:u,role:"user",text:c,timestamp:new Date().toLocaleTimeString()}]),r(""),i(!0);try{const f=await fetch(`${V}/extract-runs/${e}/query`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:c,mode:"fast"})});if(!f.ok)throw new Error(await se(f));const g=await f.json();a(v=>{var y;return[...v,{id:m,role:"assistant",text:g.answer||`Found ${((y=g.rows)==null?void 0:y.length)||0} matching passages.`,rows:g.rows||[],columns:g.columns||["Page","Type","Path","Text","Score"],timestamp:new Date().toLocaleTimeString()}]})}catch(f){a(g=>[...g,{id:m,role:"assistant",text:ie(f),rows:[],timestamp:new Date().toLocaleTimeString(),isError:!0}])}finally{i(!1)}};return s.jsxs("section",{className:"query-workbench",children:[n.length===0?s.jsx(Qt,{label:"Ask about clauses, tables, fields, dates, page content, or extracted values."}):s.jsx("div",{className:"query-chat-log",children:n.map(c=>{var u;return s.jsxs("article",{className:`query-message ${c.role}${c.isError?" error":""}`,children:[s.jsxs("div",{className:"query-message-meta",children:[s.jsx("span",{children:c.role==="user"?"You":"Extraction query"}),s.jsx("span",{children:c.timestamp})]}),s.jsx("div",{className:"query-message-text",dir:"auto",children:c.text}),((u=c.rows)==null?void 0:u.length)>0&&s.jsx("div",{className:"query-results-shell",style:{marginTop:10},children:s.jsx(sr,{columns:c.columns,rows:c.rows})})]},c.id)})}),s.jsxs("div",{className:"query-composer",children:[s.jsx("textarea",{value:t,onChange:c=>r(c.target.value),onKeyDown:c=>{c.key==="Enter"&&!c.shiftKey&&(c.preventDefault(),l())},placeholder:"Ask about the extracted document...",disabled:o,rows:3}),s.jsx("div",{className:"query-composer-actions",children:s.jsx("button",{type:"button",className:"primary-action compact",onClick:l,disabled:o||!t.trim(),children:o?"Searching":"Ask"})})]})]})}function vg({meta:e}){var r,n;const t=e.summary||{};return s.jsxs("section",{style:{...pt,padding:12,display:"flex",gap:8,marginBottom:12,flexWrap:"wrap",alignItems:"center"},children:[s.jsx(ke,{label:"Format",value:(e.source_format||"-").toUpperCase()}),s.jsx(ke,{label:"Documents",value:((r=e.documents)==null?void 0:r.length)||t.document_count||1}),s.jsx(ke,{label:"Coverage",value:typeof e.coverage=="number"?`${e.coverage.toFixed(1)}%`:"-"}),s.jsx(ke,{label:"Quality",value:t.quality||"-"}),s.jsx(ke,{label:"Tables",value:t.table_count||0}),s.jsx(ke,{label:"Blocks",value:Object.values(t.block_counts||{}).reduce((a,o)=>a+Number(o||0),0)}),s.jsx(ke,{label:"Pages",value:e.n_pages||e.native_pages||0}),Number(((n=e.ai_usage)==null?void 0:n.total_tokens)||0)>0&&s.jsx(ke,{label:"AI tokens",value:`${yt(e.ai_usage.total_tokens)} (${yt(e.ai_usage.calls||0)} calls)`})]})}function yg({tab:e,setTab:t}){const r=[["overview","Extraction overview"],["tables","Extracted tables"],["text","Text blocks"],["json","Structured JSON"]];return s.jsx("nav",{style:{display:"flex",gap:4,borderBottom:"1px solid #d8d0c3",marginBottom:12,overflowX:"auto"},children:r.map(([n,a])=>{const o=e===n;return s.jsx("button",{onClick:()=>t(n),style:{padding:"10px 14px",background:o?"#1f2937":"transparent",color:o?"white":"#344054",border:o?"1px solid #1f2937":"1px solid transparent",borderRadius:"8px 8px 0 0",cursor:"pointer",fontWeight:600,whiteSpace:"nowrap"},children:a},n)})})}function wg({runId:e,meta:t}){const r=t.summary||{},n=t.ai_analysis,a=(n==null?void 0:n.result)||null;return s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12,flexWrap:"wrap",marginBottom:12},children:[s.jsxs("div",{children:[s.jsx("h2",{style:{margin:0,fontSize:18,fontWeight:650},dir:"auto",children:t.label||"Extracted document"}),s.jsx("p",{style:{margin:"6px 0 0",color:"#667085",fontSize:13},dir:"auto",children:r.message||"Extraction complete."})]}),s.jsx("button",{onClick:()=>{window.location.href=`${V}/extract-runs/${e}/json`},style:Ah(!1),children:"Download JSON"})]}),s.jsxs("div",{className:"report-metrics",style:{display:"grid",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",gap:10,marginBottom:12},children:[s.jsx(da,{label:"Extraction coverage",value:typeof t.coverage=="number"?`${t.coverage.toFixed(1)}%`:"-"}),s.jsx(da,{label:"Tables detected",value:r.table_count||0}),s.jsx(da,{label:"Table rows",value:r.table_row_count||0}),s.jsx(da,{label:"Image/OCR blocks",value:r.figure_count||0})]}),s.jsxs("div",{style:{...pt,padding:14,boxShadow:"none",marginBottom:12},children:[s.jsx("div",{style:{fontWeight:650,marginBottom:8},children:"Block breakdown"}),s.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[Object.entries(r.block_counts||{}).map(([o,i])=>s.jsx(ke,{label:o.replace("_"," "),value:i},o)),Object.keys(r.block_counts||{}).length===0&&s.jsx("span",{style:{color:"#667085"},children:"No block statistics available."})]})]}),n&&s.jsxs("div",{style:{...pt,padding:14,boxShadow:"none"},children:[s.jsxs("div",{style:{fontWeight:650,marginBottom:8},children:["AI-assisted analysis ",n.available?"- available":"- unavailable"]}),!n.available&&s.jsx("div",{style:{color:K.DELETED.text},dir:"auto",children:normalizeErrorMessage(n.error)||"AI analysis was not generated."}),a&&s.jsxs("div",{style:{color:"#344054",lineHeight:1.5},children:[s.jsx("p",{style:{marginTop:0},dir:"auto",children:a.executive_summary||"AI analysis completed."}),Array.isArray(a.key_items)&&a.key_items.length>0&&s.jsx(sr,{columns:["Item"],rows:a.key_items.slice(0,20).map(o=>({Item:typeof o=="string"?o:JSON.stringify(o)}))})]})]}),s.jsx(Yh,{usage:t.ai_usage})]})}function da({label:e,value:t}){return s.jsxs("div",{style:{background:"#fbfaf6",border:"1px solid #ded6c8",borderRadius:8,padding:12},children:[s.jsx("div",{style:{fontSize:12,color:"#667085",fontWeight:600},children:e}),s.jsx("div",{style:{marginTop:4,fontSize:22,color:"#1f2937",fontWeight:650},children:t})]})}function bg({runId:e}){const[t,r]=w.useState({loading:!0,error:"",tables:[]});return w.useEffect(()=>{let n=!1;return r({loading:!0,error:"",tables:[]}),fetch(`${V}/extract-runs/${e}/tables?include_rows=true`).then(async a=>{if(!a.ok)throw new Error(await se(a));return a.json()}).then(a=>{n||r({loading:!1,error:"",tables:a.tables||[]})}).catch(a=>{n||r({loading:!1,error:ie(a),tables:[]})}),()=>{n=!0}},[e]),t.loading?s.jsx(qn,{label:"Loading extracted tables..."}):t.error?s.jsx(Ji,{message:t.error}):t.tables.length?s.jsx("div",{style:{display:"grid",gap:12},children:t.tables.map(n=>s.jsxs("div",{style:{...pt,padding:12,boxShadow:"none"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12,flexWrap:"wrap",marginBottom:8},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:650},dir:"auto",children:n.display_name||n.title||"Detected table"}),s.jsxs("div",{style:{color:"#667085",fontSize:13,marginTop:3},dir:"auto",children:[n.page_label," · ",n.n_columns," columns · ",n.n_rows," rows · header quality ",Math.round((n.header_quality||0)*100),"%",n.extraction_confidence?` · extraction ${Math.round(n.extraction_confidence*100)}%`:""]})]}),s.jsx("code",{children:String(n.id||"").slice(0,8)})]}),Array.isArray(n.quality_warnings)&&n.quality_warnings.length>0&&s.jsxs("div",{style:{color:"#8a5a00",fontSize:13,marginBottom:8},dir:"auto",children:["Review note: ",n.quality_warnings.slice(0,2).join(" ")]}),s.jsxs("div",{style:{color:"#475467",fontSize:13,marginBottom:8},dir:"auto",children:["Columns: ",(n.columns||[]).slice(0,12).join(" | ")||"No columns detected"]}),s.jsx(mg,{columns:n.columns||[],rows:n.rows||n.row_preview||[]})]},n.id))}):s.jsx(Qt,{label:"No tables were detected in this document."})}function kg({runId:e}){const[t,r]=w.useState({loading:!0,error:"",blocks:[]});if(w.useEffect(()=>{let a=!1;return r({loading:!0,error:"",blocks:[]}),fetch(`${V}/extract-runs/${e}/blocks?limit=1000`).then(async o=>{if(!o.ok)throw new Error(await se(o));return o.json()}).then(o=>{a||r({loading:!1,error:"",blocks:o.blocks||[]})}).catch(o=>{a||r({loading:!1,error:ie(o),blocks:[]})}),()=>{a=!0}},[e]),t.loading)return s.jsx(qn,{label:"Loading extracted text blocks..."});if(t.error)return s.jsx(Ji,{message:t.error});const n=t.blocks.filter(a=>a.text||a.type==="table").slice(0,500).map(a=>({Page:a.page_number,Type:a.type,Path:a.path,Text:Qe(a.text||JSON.stringify(a.payload||{}),700)}));return n.length?s.jsx(sr,{columns:["Page","Type","Path","Text"],rows:n}):s.jsx(Qt,{label:"No extracted text blocks were returned."})}function jg({runId:e,meta:t}){const[r,n]=w.useState({loading:!0,error:"",data:null});if(w.useEffect(()=>{let f=!1;return n({loading:!0,error:"",data:null}),Oh(e).then(g=>{f||n({loading:!1,error:"",data:g})}).catch(g=>{f||n({loading:!1,error:ie(g),data:null})}),()=>{f=!0}},[e]),r.loading)return s.jsx(qn,{label:"Building structured JSON preview..."});if(r.error)return s.jsx(Ji,{message:r.error});const a=r.data||{},o=a.tables||[],i=a.pages||[],l=a.content||i.flatMap(f=>f.content||[]),c=a.document_summary||{},u=c.extraction_quality||{},m=l.map(f=>f.inferred_record).filter(Boolean);return s.jsxs("div",{style:{display:"grid",gap:12},children:[s.jsxs("div",{style:{...pt,padding:12,boxShadow:"none"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12,alignItems:"flex-start",flexWrap:"wrap"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:650,marginBottom:8},dir:"auto",children:"Business extraction summary"}),s.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",color:"#344054",fontSize:13},children:[s.jsxs("span",{style:yr,children:["Document: ",c.label||t.label||"uploaded file"]}),s.jsxs("span",{style:yr,children:["Type: ",c.source_type||t.source_format||"document"]}),s.jsxs("span",{style:yr,children:["Template: ",c.detected_template||"generic document"]}),s.jsxs("span",{style:yr,children:["Quality: ",u.grade||"not rated"]}),Number.isFinite(u.score)&&s.jsxs("span",{style:yr,children:["Score: ",Math.round(u.score*100),"%"]}),c.detected_language&&s.jsxs("span",{style:yr,children:["Script: ",c.detected_language]})]})]}),s.jsx("button",{onClick:()=>{window.location.href=`${V}/extract-runs/${e}/json`},style:Mh(),children:"Download clean JSON"})]}),Array.isArray(u.warnings)&&u.warnings.length>0&&s.jsx("div",{style:{color:"#8a5a00",fontSize:13,marginTop:8,lineHeight:1.4},dir:"auto",children:u.warnings.slice(0,3).map(f=>f.message||f).join(" ")})]}),s.jsxs("div",{style:{...pt,padding:12,boxShadow:"none"},children:[s.jsx("div",{style:{display:"flex",justifyContent:"space-between",gap:10,alignItems:"center",marginBottom:8},children:s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:650},children:"Document-order extracted text"}),s.jsxs("div",{style:{color:"#667085",fontSize:13,marginTop:3},children:[l.length," text block(s), ",m.length," inferred record(s), ",o.length," table(s), ",i.length," page(s)"]})]})}),l.length>0?s.jsx(sr,{columns:["Page","Type","Path","Text","Inferred record"],rows:l.slice(0,500).map(f=>({Page:f.page,Type:f.type,Path:f.path,Text:Qe(f.text,900),"Inferred record":f.inferred_record?Cc(f.inferred_record.values):""}))}):s.jsx(Qt,{label:"No ordered text content was returned. Check the Text blocks tab."})]}),m.length>0&&s.jsxs("div",{style:{...pt,padding:12,boxShadow:"none"},children:[s.jsx("div",{style:{fontWeight:650,marginBottom:8},children:"Inferred business records"}),s.jsx(sr,{columns:["Page","Values","Source text","Citation"],rows:m.slice(0,120).map(f=>({Page:f.page,Values:Cc(f.values),"Source text":Qe(f.source_text,700),Citation:f.citation}))})]}),o.length>0&&s.jsxs("div",{style:{...pt,padding:12,boxShadow:"none"},children:[s.jsx("div",{style:{fontWeight:650,marginBottom:8},children:"Extracted tables"}),s.jsx(sr,{columns:["title","page","area","row_count","columns"],rows:o.slice(0,30).map(f=>({title:f.title,page:f.page,area:f.area,row_count:f.row_count,columns:(f.columns||[]).join(" | ")}))})]}),s.jsxs("div",{style:{...pt,padding:12,boxShadow:"none"},children:[s.jsx("div",{style:{fontWeight:650,marginBottom:8},children:"Clean JSON preview"}),s.jsx("pre",{className:"dl-scrollbar",style:{margin:0,maxHeight:360,overflow:"auto",background:"#fbfaf6",border:"1px solid #e0d8ca",borderRadius:8,padding:12,fontSize:12,lineHeight:1.45,whiteSpace:"pre-wrap"},children:JSON.stringify({document_summary:a.document_summary,content:l.slice(0,30),tables:o.slice(0,10)},null,2)})]})]})}function Ji({message:e}){return s.jsx("div",{style:{marginTop:16,border:"1px solid #f0b4b4",background:"#fff5f5",color:"#9f1d1d",borderRadius:8,padding:13,fontSize:14,fontWeight:600,lineHeight:1.45},children:e})}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),fp=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _g={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=w.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:a="",children:o,iconNode:i,...l},c)=>w.createElement("svg",{ref:c,..._g,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:fp("lucide",a),...l},[...i.map(([u,m])=>w.createElement(u,m)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=(e,t)=>{const r=w.forwardRef(({className:n,...a},o)=>w.createElement(Eg,{ref:o,iconNode:t,className:fp(`lucide-${Sg(e)}`,n),...a}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=gr("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=gr("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=gr("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=gr("FileOutput",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2",key:"1vk7w2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6",key:"1jink5"}],["path",{d:"m5 11-3 3",key:"1dgrs4"}],["path",{d:"m5 17-3-3h10",key:"1mvvaf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=gr("GitCompare",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=gr("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=gr("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);function Rg(){return s.jsxs("div",{className:"altrai-wordmark","aria-label":"Altrai",children:[s.jsx("span",{children:"Altr"}),s.jsx("span",{className:"accent",children:"ai"})]})}const Lg=[{label:"AI Document Intelligence",items:[{key:"compare",label:"Compare",icon:Tg},{key:"extract",label:"Extract",icon:Pg},{key:"jobs",label:"Work History",icon:Dg}]},{label:"Administration",items:[{key:"admin",label:"Admin Studio",icon:$g,title:"Use cases, datasets, and access policies"}]},{label:"AI Agents",items:[{key:"agents",label:"Coming soon",icon:Ng,disabled:!0,title:"Future skills and multi-agent workflows"}]}];function Ig({workspace:e,onNavigate:t,collapsed:r=!1}){return s.jsx("nav",{className:"workspace-nav","aria-label":"Workspace navigation",children:Lg.map(n=>s.jsxs("div",{className:"workspace-nav-group",children:[!r&&s.jsx("div",{className:"workspace-nav-label",children:n.label}),n.items.map(a=>{const o=e===a.key;return s.jsxs("button",{type:"button",className:`workspace-nav-item${o?" active":""}`,onClick:()=>!a.disabled&&t(a.key),disabled:a.disabled,title:r?a.title||a.label:a.title,children:[s.jsx(a.icon,{className:"workspace-nav-icon","aria-hidden":"true"}),!r&&s.jsx("span",{className:"workspace-nav-text",children:a.label})]},`${n.label}-${a.label}-${a.key}`)})]},n.label))})}const mp=w.createContext(null),Ac="altrai_theme";function Ag({children:e}){const[t,r]=w.useState(()=>typeof window>"u"?"system":window.localStorage.getItem(Ac)||"system");w.useEffect(()=>{document.documentElement.dataset.theme=t,window.localStorage.setItem(Ac,t)},[t]);const n=w.useMemo(()=>({theme:t,setTheme:r}),[t]);return s.jsx(mp.Provider,{value:n,children:e})}function hp(){const e=w.useContext(mp);if(!e)throw new Error("useTheme must be used within ThemeProvider");return e}const Mg=[["system","Auto"],["light","Light"],["dark","Dark"]];function Og({collapsed:e=!1}){const{theme:t,setTheme:r}=hp();return s.jsxs("footer",{className:"user-footer",children:[s.jsx("div",{className:"user-avatar","aria-hidden":"true",children:"N"}),!e&&s.jsxs("div",{className:"user-meta",children:[s.jsx("strong",{children:"Nithin"}),s.jsx("span",{children:"platform_admin"})]}),!e&&s.jsx("div",{className:"rail-theme-toggle","aria-label":"Theme selector",children:Mg.map(([n,a])=>s.jsx("button",{type:"button",className:t===n?"active":"",onClick:()=>r(n),children:a},n))})]})}const Fg={jobs:"Work History",compare:"Compare",extract:"Extract",agents:"AI Agents",admin:"Admin Studio"},Ug={compare:{label:"Comparison History",historyKind:"comparison"},extract:{label:"Extraction History",historyKind:"extraction"}};function Bg({workspace:e,runId:t,onNavigate:r,onDownloadReport:n,children:a}){const[o,i]=w.useState(!1),{theme:l}=hp(),c=Ug[e];return s.jsxs("div",{className:`workspace-shell theme-${l}${o?" collapsed":""}`,children:[s.jsxs("aside",{className:"workspace-sidebar",children:[s.jsxs("div",{className:"workspace-brand",children:[s.jsx("div",{className:"workspace-brand-copy",children:s.jsx(Rg,{})}),s.jsx("button",{type:"button",className:"workspace-collapse-button",onClick:()=>i(u=>!u),"aria-label":o?"Expand navigation":"Collapse navigation",title:o?"Expand navigation":"Collapse navigation",children:o?s.jsx(zg,{size:16,strokeWidth:1.5}):s.jsx(Cg,{size:16,strokeWidth:1.5})})]}),s.jsx(Ig,{workspace:e,onNavigate:r,collapsed:o}),s.jsx(Og,{collapsed:o})]}),s.jsxs("section",{className:"workspace-main",children:[s.jsxs("header",{className:"workspace-topbar",children:[s.jsx("div",{children:s.jsx("h1",{children:Fg[e]||"Workspace"})}),s.jsxs("div",{className:"workspace-actions",children:[t&&s.jsx("button",{type:"button",className:"workspace-primary-action",onClick:n,children:"Export report"}),c&&s.jsx("button",{type:"button",className:"workspace-secondary-action",onClick:()=>r("jobs",{historyKind:c.historyKind}),children:c.label})]})]}),s.jsx("div",{className:"workspace-content",children:a})]})]})}const Wg=[["platform_admin","Platform Admin"],["business_unit_admin","Business Unit Admin"],["reviewer","Reviewer"],["submitter","Submitter"],["viewer","Viewer"]],Mc={supplier:"",family_name:"",domain:"generic",description:"",use_case_type:"comparison",expected_formats:["pdf","docx"],sample_plan:"",onboarding_notes:"",learning_mode:"ai_assisted_bootstrap",allowed_roles:[]},Vg=[["pdf","PDF"],["docx","Word"],["xlsx","Excel"],["csv","CSV/TSV"],["image","Scanned image"]],qg=[["deterministic_first","Deterministic first"],["ai_assisted_bootstrap","AI-assisted bootstrap"],["manual_profile","Manual profile"]],Hg=()=>({id:crypto.randomUUID(),baseline:null,revised:null});function Qg(){var il,ll,cl,ul;const[e,t]=w.useState([]),[r,n]=w.useState(""),[a,o]=w.useState(null),[i,l]=w.useState(Mc),[c,u]=w.useState({supplier:"",family_name:"",domain:"generic",description:""}),[m,f]=w.useState(""),[g,v]=w.useState([]),[y,x]=w.useState(""),[j,p]=w.useState({use_case_type:"comparison",expected_formats:["pdf","docx"],sample_plan:"",onboarding_notes:"",learning_mode:"ai_assisted_bootstrap"}),[d,h]=w.useState({baseline:null,revised:null,variationPairs:[]}),[b,S]=w.useState(!0),[N,C]=w.useState(null),[z,$]=w.useState(""),[R,W]=w.useState(null),[_e,Ae]=w.useState(null),[Ct,Ee]=w.useState(null),[Ye,Ne]=w.useState(0),[E,D]=w.useState({baseline:null,revised:null,variations:[]}),[I,Q]=w.useState([]),[ae,Xe]=w.useState(!0),[J,L]=w.useState(""),[M,O]=w.useState(""),[ee,A]=w.useState(""),[ye,gt]=w.useState(""),[Yi,Xi]=w.useState(!0),[Zi,vp]=w.useState(!0),[el,yp]=w.useState(!1),[tl,wp]=w.useState(!1),xr=()=>({"Content-Type":"application/json","X-User-Role":window.sessionStorage.getItem("simulated_role")||"platform_admin"}),Xr=async()=>{Xe(!0),O("");try{const k=await wr("/admin/datasets",{headers:xr()});t(k.datasets||[])}catch(k){O(ie(k))}finally{Xe(!1)}};w.useEffect(()=>{Xr(),rl()},[]),w.useEffect(()=>{if(J!=="analyze"&&J!=="create")return;const k=Date.now();Ne(0);const T=window.setInterval(()=>{Ne(Math.floor((Date.now()-k)/1e3))},1e3);return()=>window.clearInterval(T)},[J]);const rl=async()=>{try{const k=await wr("/ai-health");C(k);const T=(k.models||[]).find(F=>F.kind==="chat"&&F.configured);T!=null&&T.id&&$(T.id)}catch{C({ok:!1,models:[],message:"AI model status is unavailable."})}},Hn=async k=>{var T;n(k),O(""),A("");try{const F=await wr(`/admin/datasets/${k}`,{headers:xr()});o(F),u({supplier:F.supplier||"",family_name:F.family_name||"",domain:F.domain||"generic",description:F.description||""}),f(F.prompt_guidelines||""),v(F.allowed_roles||[]),p({use_case_type:F.use_case_type||"comparison",expected_formats:F.expected_formats||["pdf","docx"],sample_plan:F.sample_plan||"",onboarding_notes:F.onboarding_notes||"",learning_mode:F.learning_mode||"deterministic_first"}),x(JSON.stringify(((T=F.template_profile)==null?void 0:T.column_rules)||[],null,2)),await bp(k)}catch(F){O(ie(F))}},bp=async k=>{try{const T=await wr(`/admin/datasets/${k}/documents`,{headers:xr()});Q(T.documents||[])}catch{Q([])}},kp=async k=>{k.preventDefault(),L("create"),O(""),A("");const T=Go(d);Ee({status:"running",stage:"create",submitted:T,startedAt:new Date().toISOString(),events:["Saving use case metadata"],error:""});try{const F=await ox("/admin/datasets",{method:"POST",headers:xr(),body:JSON.stringify(i)});let he="",ue="";Ee(q=>({...q||{},status:"success",stage:"saved",datasetId:F.id,events:[...(q==null?void 0:q.events)||[],"Use case metadata saved"]})),A("Use case created. Opening saved profile.");try{await Xr(),F.id&&await Hn(F.id)}catch{A("Use case created. Refresh the use case list if it does not appear immediately.")}if(F.id&&pa(d)){Ee(q=>({...q||{},stage:"samples",events:[...(q==null?void 0:q.events)||[],"Learning attached samples"]}));try{await nl(F.id,d,i.onboarding_notes,i.learning_mode==="ai_assisted_bootstrap"),he=" Sample documents learned and model profile bootstrapped.",Ee(q=>({...q||{},events:[...(q==null?void 0:q.events)||[],"Sample learning completed"]}))}catch(q){ue=` Sample learning did not finish: ${ie(q)}`,Ee(zt=>({...zt||{},sampleWarning:ue,events:[...(zt==null?void 0:zt.events)||[],"Sample learning needs attention"]}))}}Ee(q=>({...q||{},status:"success",stage:"done",datasetId:F.id,sampleWarning:ue,events:[...(q==null?void 0:q.events)||[],"Ready for refinement"],finishedAt:new Date().toISOString()})),A(`Use case created.${he||ue||" You can attach or relearn samples from the saved use case."}`),l(Mc),h({baseline:null,revised:null,variationPairs:[]}),W(null)}catch(F){const he=ie(F);O(he),Ee(ue=>({...ue||{},status:"failed",finishedAt:new Date().toISOString(),events:[...(ue==null?void 0:ue.events)||[],"Create failed"],error:he}))}finally{L("")}},jp=k=>{try{const T=Uc(y);if(T.some(he=>he.role===k)){A(`A rule for label '${k}' already exists.`);return}const F=[...T,{pattern:`.*${k.toLowerCase().replace(/_/g,".*")}.*`,role:k}];x(JSON.stringify(F,null,2)),A(`Added suggested mapping rule for '${k}'. Click 'Save profile settings' to apply.`)}catch{O("Column rules JSON is malformed. Please fix it before adding labels.")}},Sp=async()=>{if(r){L("save"),O(""),A("");try{await wr(`/admin/datasets/${r}`,{method:"PUT",headers:xr(),body:JSON.stringify({prompt_guidelines:m,allowed_roles:g,column_rules:Uc(y),...c,...j})}),A("Use case settings saved."),await Xr(),await Hn(r)}catch(k){O(ie(k))}finally{L("")}}},_p=async k=>{if(k.preventDefault(),!(!r||!pa(E))){L("bootstrap"),O(""),A("");try{await nl(r,E,j.onboarding_notes||"",j.learning_mode==="ai_assisted_bootstrap"),A("Sample documents learned and model profile updated."),D({baseline:null,revised:null,variations:[]}),await Hn(r)}catch(T){O(ie(T))}finally{L("")}}},nl=async(k,T,F,he)=>{const ue=new FormData;T.baseline&&ue.append("baseline",T.baseline),T.revised&&ue.append("revised",T.revised),wo(T).forEach(zt=>ue.append("variations",zt)),ue.append("notes",F||""),ue.append("use_llm",String(he));const q=await Ep(k,ue);if(!q.ok)throw new Error(await se(q));return q.json()},Ep=async(k,T)=>{const F=()=>{const q=new FormData;for(const[zt,Dp]of T.entries())q.append(zt,Dp);return q},he=q=>fetch(`${V}${q}`,{method:"POST",headers:{"X-User-Role":window.sessionStorage.getItem("simulated_role")||"platform_admin"},body:F()}),ue=await he(`/admin/datasets/${k}/samples`);return ue.status!==404?ue:he(`/api/admin/datasets/${k}/samples`)},Np=async()=>{if(pa(d)){if(b&&!z){O("Select a configured AI model before running AI-assisted sample analysis.");return}L("analyze"),O(""),A(""),W(null),Ae({status:"running",mode:b?"ai":"deterministic",model:b?z:"",submitted:Go(d),startedAt:new Date().toISOString(),events:["Preparing upload context"],error:""});try{const k=await Yg({files:d,form:i,useAiAnalysis:b,selectedModel:z});if(!k.ok)throw new Error(await se(k));const T=await k.json(),F=T.suggested_dataset||{};W(T),Ae(he=>({...he||{},status:"success",finishedAt:new Date().toISOString(),backendUsage:Gg(T),model:T.selected_model||z,events:[...(he==null?void 0:he.events)||[],"Sample structure analyzed","Metadata suggestions generated"]})),l({...i,...F,allowed_roles:i.allowed_roles||[],learning_mode:b?"ai_assisted_bootstrap":"deterministic_first"}),A(b?"Sample analysis complete. Review the suggested use case model before creating it.":"Deterministic sample scan complete. Review the suggested use case model before creating it.")}catch(k){const T=ie(k);O(T),Ae(F=>({...F||{},status:"failed",finishedAt:new Date().toISOString(),events:[...(F==null?void 0:F.events)||[],"Analysis failed"],error:T}))}finally{L("")}}},Cp=async()=>{if(!(!r||!a||!window.confirm(`Delete use case "${a.supplier} · ${a.family_name}"? This removes the saved model profile from Admin Studio.`))){L("delete"),O(""),A("");try{await wr(`/admin/datasets/${r}`,{method:"DELETE",headers:xr()}),A("Use case deleted."),n(""),o(null),Q([]),await Xr()}catch(T){O(ie(T))}finally{L("")}}},al=Go(d),Qn=pa(d),ol=b&&!z,zp=!Qn||J==="analyze"||ol,Pp=J==="analyze"?"Analyzing samples":b?"Analyze samples with AI":"Scan samples without AI",Tp=Qn?ol?"Select an available chat model before AI analysis.":b?"Ready to send selected samples and context to the model.":"Ready for deterministic structure scan. No AI tokens will be used.":"Attach a baseline, revised, or variation sample to start.",sl=e.filter(k=>{const T=ye.trim().toLowerCase();return T?[k.supplier,k.family_name,k.domain,k.use_case_type].filter(Boolean).join(" ").toLowerCase().includes(T):!0});return s.jsxs("section",{className:"admin-studio",children:[s.jsx("div",{className:"admin-intro",children:s.jsxs("div",{children:[s.jsx("h2",{children:"Use Case Onboarding"}),s.jsx("p",{children:"Create document models from representative samples. Use AI to suggest metadata, then keep governance and access settings with the saved use case."})]})}),ee&&s.jsx("div",{className:"admin-notice",children:ee}),M&&s.jsx(On,{message:M}),s.jsxs("div",{className:"admin-grid",children:[s.jsxs("aside",{className:"admin-panel",children:[s.jsxs("div",{className:"admin-panel-head",children:[s.jsxs("div",{children:[s.jsx("h3",{children:"Use Cases"}),s.jsxs("p",{children:[e.length," saved model",e.length===1?"":"s"]})]}),s.jsx("button",{type:"button",className:"ghost-action compact",onClick:Xr,children:"Refresh"})]}),s.jsx("input",{className:"admin-search",value:ye,onChange:k=>gt(k.target.value),placeholder:"Search supplier, family, domain"}),ae?s.jsx(qn,{label:"Loading use cases"}):e.length===0?s.jsx(Qt,{label:"No use cases onboarded yet."}):sl.length===0?s.jsx(Qt,{label:"No matching use cases."}):s.jsx("div",{className:"dataset-list",children:sl.map(k=>s.jsxs("button",{type:"button",className:`dataset-item${r===k.id?" active":""}`,onClick:()=>Hn(k.id),children:[s.jsx("strong",{children:k.supplier}),s.jsx("span",{children:k.family_name}),s.jsxs("small",{children:[k.use_case_type||"comparison"," · ",(k.expected_formats||[]).join(", ")||"formats"," · ",(k.allowed_roles||[]).length||"all"," roles"]})]},k.id))})]}),s.jsxs("main",{className:"admin-panel",children:[s.jsx(fa,{title:"Onboard Document Model",description:"Create a new model from identity, representative samples, and generated metadata.",open:Yi,onToggle:()=>Xi(k=>!k)}),Yi?s.jsxs("form",{className:"admin-form onboarding-flow compact-flow",onSubmit:kp,children:[s.jsxs("section",{className:"admin-review-card",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Use Case Identity"}),s.jsx("p",{children:"Define the business model before uploading samples. Analysis will use these values as context instead of guessing from file names."})]}),s.jsxs("div",{className:"admin-review-grid",children:[s.jsxs("label",{children:["Supplier or entity",s.jsx("input",{value:i.supplier,required:!0,onChange:k=>l({...i,supplier:k.target.value}),placeholder:"Ford, HR, Finance, Legal"})]}),s.jsxs("label",{children:["Use case or family",s.jsx("input",{value:i.family_name,required:!0,onChange:k=>l({...i,family_name:k.target.value}),placeholder:"Order Guide, Policy, Contract"})]}),s.jsxs("label",{children:["Use case type",s.jsxs("select",{value:i.use_case_type,onChange:k=>l({...i,use_case_type:k.target.value}),children:[s.jsx("option",{value:"comparison",children:"Comparison"}),s.jsx("option",{value:"extraction",children:"Extraction"})]})]}),s.jsxs("label",{children:["Domain",s.jsxs("select",{value:i.domain,onChange:k=>l({...i,domain:k.target.value}),children:[s.jsx("option",{value:"generic",children:"Generic"}),s.jsx("option",{value:"automotive",children:"Automotive"}),s.jsx("option",{value:"legal",children:"Legal"}),s.jsx("option",{value:"financial",children:"Financial"}),s.jsx("option",{value:"hr",children:"HR"}),s.jsx("option",{value:"engineering",children:"Engineering"})]})]}),s.jsx("div",{className:"admin-wide-field",children:s.jsx(Fc,{value:i.expected_formats,onChange:k=>l({...i,expected_formats:k})})})]})]}),s.jsxs("section",{className:"sample-intake-card",children:[s.jsxs("div",{className:"sample-intake-head",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Training Samples"}),s.jsx("p",{children:"Attach one baseline and one revised document. Add variation pairs only when you have alternate layouts, suppliers, model years, or document structures."})]}),s.jsxs("label",{className:"ai-toggle",children:[s.jsx("input",{type:"checkbox",checked:b,onChange:k=>S(k.target.checked)}),"Analyze with AI model"]})]}),b?s.jsxs("div",{className:"model-select-row",children:[s.jsxs("label",{children:["Model deployment",s.jsx("select",{value:z,onChange:k=>$(k.target.value),children:Oc(N).length?Oc(N).map(k=>s.jsx("option",{value:k.id,children:k.label||k.id},k.id)):s.jsx("option",{value:"",children:"No configured chat model found"})})]}),s.jsx("button",{type:"button",className:"ghost-action compact",onClick:rl,children:"Refresh models"}),s.jsx("span",{children:N!=null&&N.ok?"Model connection verified.":(N==null?void 0:N.message)||"Checking AI model status."})]}):null,s.jsxs("div",{className:"sample-pair-grid",children:[s.jsxs("label",{children:["Baseline sample",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>{var T;return h({...d,baseline:((T=k.target.files)==null?void 0:T[0])||null})}})]}),s.jsxs("label",{children:["Revised sample",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>{var T;return h({...d,revised:((T=k.target.files)==null?void 0:T[0])||null})}})]})]}),s.jsx(ex,{value:d.variationPairs,onChange:k=>h({...d,variationPairs:k})}),s.jsxs("div",{className:"sample-actions analysis-action-row",children:[s.jsxs("button",{type:"button",className:"analyze-action-button",onClick:Np,disabled:zp,"aria-busy":J==="analyze",children:[s.jsx("span",{children:Pp}),s.jsx("small",{children:b?z||"No model selected":"Deterministic mode"})]}),s.jsxs("div",{className:"analysis-readiness",children:[s.jsx("span",{className:Qn?"ready":"blocked",children:Qn?"Samples ready":"Waiting for samples"}),s.jsxs("span",{children:[Za(al.count)," file(s)"]}),s.jsx("span",{children:gp(al.totalBytes)}),s.jsx("span",{children:b?"AI-assisted metadata":"No AI tokens"}),s.jsx("small",{children:Tp})]})]}),s.jsx(Xg,{run:_e,elapsedSeconds:Ye,useAiAnalysis:b,selectedModel:z})]}),R?s.jsx(tx,{data:R}):null,s.jsxs("section",{className:"admin-review-card",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Generated Metadata"}),s.jsx("p",{children:"Analysis fills this section with document understanding, extraction focus, accuracy hints, and reviewer notes. You can also maintain it manually."})]}),s.jsxs("div",{className:"admin-review-grid",children:[s.jsxs("label",{children:["Content description",s.jsx("textarea",{value:i.description,onChange:k=>l({...i,description:k.target.value}),placeholder:"Describe the documents, expected fields, tables, identifiers, and business context."})]}),s.jsxs("label",{children:["Onboarding notes",s.jsx("textarea",{value:i.onboarding_notes,onChange:k=>l({...i,onboarding_notes:k.target.value}),placeholder:"Known pain points, nested headers, language handling, reviewer expectations, or accuracy targets."})]}),s.jsxs("label",{className:"admin-wide-field",children:["Sample strategy",s.jsx("textarea",{value:i.sample_plan,onChange:k=>l({...i,sample_plan:k.target.value}),placeholder:"How many baseline/revised/variation samples should represent this model?"})]})]})]}),s.jsx("button",{type:"submit",className:"primary-action",disabled:J==="create",children:J==="create"?"Creating":"Create use case"}),s.jsx(Zg,{run:Ct,elapsedSeconds:Ye})]}):s.jsxs("div",{className:"admin-collapsed-summary",children:[s.jsx("span",{children:"New use-case onboarding is collapsed."}),s.jsx("button",{type:"button",className:"ghost-action compact",onClick:()=>Xi(!0),children:"Open"})]})]})]}),a?s.jsx("section",{className:"admin-panel",children:s.jsxs("div",{className:"admin-detail",children:[s.jsx(fa,{title:`Refine ${a.supplier} · ${a.family_name}`,description:"Edit the saved model profile, then save changes without creating a duplicate.",open:Zi,onToggle:()=>vp(k=>!k),meta:`${j.use_case_type} model · ${(j.expected_formats||[]).join(", ")}`,actions:s.jsxs("div",{className:"admin-detail-actions",children:[s.jsx("button",{type:"button",className:"primary-action compact",onClick:Sp,disabled:J==="save",children:J==="save"?"Saving":"Save changes"}),s.jsx("button",{type:"button",className:"danger-action compact",onClick:Cp,disabled:J==="delete",children:J==="delete"?"Deleting":"Delete"})]})}),Zi?s.jsxs("div",{className:"admin-edit-shell",children:[s.jsxs("section",{className:"admin-review-card",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Model Identity"}),s.jsx("p",{children:"These fields control how the use case appears in Compare, Extract, and Work History."})]}),s.jsxs("div",{className:"admin-review-grid",children:[s.jsxs("label",{children:["Supplier or entity",s.jsx("input",{value:c.supplier,required:!0,onChange:k=>u({...c,supplier:k.target.value})})]}),s.jsxs("label",{children:["Use case or family",s.jsx("input",{value:c.family_name,required:!0,onChange:k=>u({...c,family_name:k.target.value})})]}),s.jsxs("label",{children:["Domain",s.jsxs("select",{value:c.domain,onChange:k=>u({...c,domain:k.target.value}),children:[s.jsx("option",{value:"generic",children:"Generic"}),s.jsx("option",{value:"automotive",children:"Automotive"}),s.jsx("option",{value:"legal",children:"Legal"}),s.jsx("option",{value:"financial",children:"Financial"}),s.jsx("option",{value:"hr",children:"HR"}),s.jsx("option",{value:"engineering",children:"Engineering"})]})]}),s.jsxs("label",{children:["Use case type",s.jsxs("select",{value:j.use_case_type,onChange:k=>p({...j,use_case_type:k.target.value}),children:[s.jsx("option",{value:"comparison",children:"Comparison"}),s.jsx("option",{value:"extraction",children:"Extraction"})]})]}),s.jsxs("label",{className:"admin-wide-field",children:["Description",s.jsx("textarea",{value:c.description,onChange:k=>u({...c,description:k.target.value}),placeholder:"Describe the document family, business purpose, and expected reviewer outcome."})]})]})]}),s.jsxs("section",{className:"admin-review-card",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Learning Profile"}),s.jsx("p",{children:"Refine how this model should learn from samples and which formats it should accept."})]}),s.jsxs("div",{className:"admin-config-grid",children:[s.jsxs("label",{children:["Learning mode",s.jsx("select",{value:j.learning_mode,onChange:k=>p({...j,learning_mode:k.target.value}),children:qg.map(([k,T])=>s.jsx("option",{value:k,children:T},k))})]}),s.jsx("div",{className:"admin-wide-field",children:s.jsx(Fc,{value:j.expected_formats,onChange:k=>p({...j,expected_formats:k})})}),s.jsxs("label",{children:["Sample strategy",s.jsx("textarea",{value:j.sample_plan,onChange:k=>p({...j,sample_plan:k.target.value}),placeholder:"How many samples or variations should represent this model?"})]}),s.jsxs("label",{children:["Onboarding notes",s.jsx("textarea",{value:j.onboarding_notes,onChange:k=>p({...j,onboarding_notes:k.target.value}),placeholder:"Business context, known table layouts, accuracy targets, and reviewer comments."})]})]})]}),s.jsxs("section",{className:"admin-review-card",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Extraction Guidance"}),s.jsx("p",{children:"Optional instructions and column mappings used by deterministic extraction and AI-assisted bootstrapping."})]}),s.jsxs("div",{className:"admin-config-grid",children:[s.jsxs("label",{children:["Prompt and extraction guidelines",s.jsx("textarea",{value:m,onChange:k=>f(k.target.value),placeholder:"Example: prioritize PCB thickness, PCV code changes, nested pricing rows, or legal obligations."})]}),s.jsxs("label",{children:["Column rules JSON",s.jsx("textarea",{className:"mono",value:y,onChange:k=>x(k.target.value)})]})]})]}),s.jsxs("section",{className:"admin-review-card",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Access"}),s.jsx("p",{children:"Choose the roles allowed to see and use this model. Leave empty for all configured users."})]}),s.jsx(rx,{value:g,onChange:v})]})]}):null,s.jsx(fa,{title:"Sample Learning",description:"Attach or relearn representative samples after the model has been created.",open:el,onToggle:()=>yp(k=>!k),meta:`${I.length} learned document${I.length===1?"":"s"}`}),el?s.jsxs("form",{className:"seed-form",onSubmit:_p,children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Sample Document Learning"}),s.jsx("p",{children:"For comparison models, upload a baseline, revised document, and any format/layout variations. The profile stores structure, page range, table signatures, stable keys, and reviewer guidance."})]}),s.jsxs("div",{className:"sample-upload-grid",children:[s.jsxs("label",{children:["Baseline sample",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>{var T;return D({...E,baseline:((T=k.target.files)==null?void 0:T[0])||null})}})]}),s.jsxs("label",{children:["Revised sample",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>{var T;return D({...E,revised:((T=k.target.files)==null?void 0:T[0])||null})}})]}),s.jsxs("label",{children:["Additional variations",s.jsx("input",{type:"file",multiple:!0,accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>D({...E,variations:Array.from(k.target.files||[])})})]})]}),s.jsx("button",{type:"submit",className:"primary-action",disabled:!E.baseline&&!E.revised&&E.variations.length===0||J==="bootstrap",children:J==="bootstrap"?"Learning":"Learn from samples"})]}):null,s.jsx(fa,{title:"Profile Insights",description:"Review learned samples, stable keys, column rules, and AI onboarding notes.",open:tl,onToggle:()=>wp(k=>!k)}),tl?s.jsxs("div",{className:"admin-profile-grid",children:[s.jsx(nx,{profile:(il=a.template_profile)==null?void 0:il.sample_profile}),s.jsx(Jo,{title:"Sample Documents",items:I,labelKey:"label",valueKey:"page_count"}),s.jsx(ax,{profile:(ll=a.template_profile)==null?void 0:ll.ai_reasoning_profile,onAddLabel:jp}),s.jsx(Jo,{title:"Stable Keys",items:(cl=a.template_profile)==null?void 0:cl.stable_key_patterns,labelKey:"name",valueKey:"regex"}),s.jsx(Jo,{title:"Column Rules",items:(ul=a.template_profile)==null?void 0:ul.column_rules,labelKey:"role",valueKey:"pattern"})]}):null]})}):null]})}function pa(e){var t;return!!(e!=null&&e.baseline||e!=null&&e.revised||(t=e==null?void 0:e.variations)!=null&&t.length||wo(e).length)}function wo(e){const t=Array.isArray(e==null?void 0:e.variations)?e.variations:[],r=Array.isArray(e==null?void 0:e.variationPairs)?e.variationPairs.flatMap(n=>[n.baseline,n.revised].filter(Boolean)):[];return[...t,...r]}function Kg(e){return[e==null?void 0:e.baseline,e==null?void 0:e.revised,...wo(e)].filter(Boolean)}function Go(e){const t=Kg(e),r=t.reduce((n,a)=>n+Number(a.size||0),0);return{count:t.length,totalBytes:r,totalMb:r/(1024*1024),estimatedInputTokens:Math.max(1,Math.ceil(r/4)),files:t.map(n=>({name:n.name,size:n.size||0}))}}function gp(e){const t=Number(e||0);return t>=1024*1024?`${(t/(1024*1024)).toFixed(2)} MB`:t>=1024?`${(t/1024).toFixed(1)} KB`:`${t} B`}function Za(e){return new Intl.NumberFormat().format(Math.round(Number(e||0)))}function Oc(e){const t=Array.isArray(e==null?void 0:e.models)?e.models:[];return t.length?t.filter(r=>r.kind==="chat"):e!=null&&e.deployment?[{id:e.deployment,label:e.deployment,kind:"chat",configured:e.configured}]:[]}function Gg(e){var n,a,o;if(e!=null&&e.usage)return{prompt_tokens:Number(e.usage.prompt_tokens||0),completion_tokens:Number(e.usage.completion_tokens||0),total_tokens:Number(e.usage.total_tokens||0),estimated_prompt_tokens:Number(e.usage.estimated_prompt_tokens||0),prompt_chars:Number(e.usage.prompt_chars||0),calls:Number(e.usage.calls||0)};const t=[],r=(n=e==null?void 0:e.analysis)==null?void 0:n.usage;return r&&t.push(r),(o=(a=e==null?void 0:e.template_profile)==null?void 0:a.ai_reasoning_profile)!=null&&o.usage&&t.push(e.template_profile.ai_reasoning_profile.usage),t.reduce((i,l)=>({prompt_tokens:i.prompt_tokens+Number(l.prompt_tokens||0),completion_tokens:i.completion_tokens+Number(l.completion_tokens||0),total_tokens:i.total_tokens+Number(l.total_tokens||0),estimated_prompt_tokens:i.estimated_prompt_tokens+Number(l.estimated_prompt_tokens||0),prompt_chars:i.prompt_chars+Number(l.prompt_chars||0),calls:i.calls+Number(l.calls||(l.total_tokens?1:0))}),{prompt_tokens:0,completion_tokens:0,total_tokens:0,estimated_prompt_tokens:0,prompt_chars:0,calls:0})}function Jg({files:e,form:t,useAiAnalysis:r,selectedModel:n}){const a=new FormData;return e.baseline&&a.append("baseline",e.baseline),e.revised&&a.append("revised",e.revised),wo(e).forEach(o=>a.append("variations",o)),a.append("supplier",t.supplier||""),a.append("family_name",t.family_name||""),a.append("domain",t.domain||"generic"),a.append("use_case_type",t.use_case_type||"comparison"),a.append("expected_formats",(t.expected_formats||[]).join(",")),a.append("notes",t.onboarding_notes||t.sample_plan||""),a.append("use_llm",String(r)),a.append("model_name",r?n:""),a}async function Yg(e){const t=async a=>fetch(`${V}${a}`,{method:"POST",headers:{"X-User-Role":window.sessionStorage.getItem("simulated_role")||"platform_admin"},body:Jg(e)}),r=await t("/admin/analyze-use-case-samples");if(r.status!==404)return r;const n=await t("/admin/datasets/analyze-samples");if(n.status!==404)return n;throw new Error("Sample analyzer route is missing in the deployed backend revision. This is not a database schema issue. Rebuild and deploy the backend image that includes backend/routers/admin.py with POST /admin/analyze-use-case-samples.")}function fa({title:e,description:t,open:r,onToggle:n,meta:a="",actions:o=null}){return s.jsxs("div",{className:"admin-collapse-head",children:[s.jsx("button",{type:"button",className:"admin-collapse-toggle",onClick:n,"aria-expanded":r,children:s.jsx("span",{children:r?"-":"+"})}),s.jsxs("div",{children:[s.jsx("h3",{children:e}),t?s.jsx("p",{children:t}):null,a?s.jsx("span",{className:"admin-model-badge",children:a}):null]}),o?s.jsx("div",{className:"admin-collapse-actions",children:o}):null]})}function Xg({run:e,elapsedSeconds:t,useAiAnalysis:r,selectedModel:n}){var m,f;if(!e)return null;const a=e.submitted||{},o=e.backendUsage||{},i=e.status==="running"?"Running":e.status==="success"?"Completed":"Failed",l=e.status==="success"?3:e.status==="failed"?1:Math.min(3,Math.floor(t/12)),c=[["prepare","Preparing upload context"],["extract","Extracting sample structure"],["model",r?`Invoking ${n||"selected model"}`:"Deterministic profile scan"],["metadata","Generating metadata suggestions"]],u=(m=e.events)!=null&&m.length?e.events:c.slice(0,l+1).map(([,g])=>g);return s.jsxs("div",{className:`activity-stream ${e.status}`,children:[s.jsxs("div",{className:"activity-head",children:[s.jsx("strong",{children:i}),s.jsx("span",{children:e.status==="running"?`${t}s elapsed`:"Run finished"}),s.jsx("small",{children:e.mode==="ai"?`Model: ${e.model||n||"not selected"}`:"Deterministic scan"})]}),s.jsx(xp,{events:u,status:e.status,activeText:(f=c[l])==null?void 0:f[1]}),s.jsxs("div",{className:"activity-foot",children:[s.jsxs("span",{children:[Za(a.count)," file(s)"]}),s.jsx("span",{children:gp(a.totalBytes)}),s.jsx("span",{children:e.mode==="ai"?`Tokens ${o.total_tokens?Za(o.total_tokens):"pending"}`:"No AI tokens"})]}),e.error?s.jsx("p",{className:"analysis-run-error",children:e.error}):null]})}function Zg({run:e,elapsedSeconds:t}){var o,i,l;if(!e)return null;const r=e.status==="running"?"Creating use case":e.status==="success"?"Use case created":"Create failed",n=Number(((o=e.submitted)==null?void 0:o.count)||0)>0,a=(i=e.events)!=null&&i.length?e.events:["Saving use case metadata"];return s.jsxs("div",{className:`activity-stream create-run ${e.status}`,children:[s.jsxs("div",{className:"activity-head",children:[s.jsx("strong",{children:r}),s.jsx("span",{children:e.status==="running"?`${t}s elapsed`:"Run finished"}),s.jsx("small",{children:e.datasetId?`ID ${String(e.datasetId).slice(0,8)}`:`${Za(((l=e.submitted)==null?void 0:l.count)||0)} sample file(s)`})]}),s.jsx(xp,{events:a,status:e.status,activeText:n&&e.stage==="samples"?"Learning attached samples":""}),n?null:s.jsxs("div",{className:"activity-foot",children:[s.jsx("span",{children:"No samples attached"}),s.jsx("span",{children:"Metadata-only create"})]}),e.sampleWarning?s.jsx("p",{className:"analysis-run-warning",children:e.sampleWarning}):null,e.error?s.jsx("p",{className:"analysis-run-error",children:e.error}):null]})}function xp({events:e,status:t,activeText:r=""}){const n=[...e];return t==="running"&&r&&!n.includes(r)&&n.push(r),s.jsx("ol",{className:"activity-lines",children:n.map((a,o)=>{const i=o===n.length-1,l=t==="failed"&&i?"failed":t==="running"&&i?"active":"done";return s.jsx("li",{className:l,children:a},`${a}-${o}`)})})}function ex({value:e,onChange:t}){const r=Array.isArray(e)?e:[],n=(o,i)=>{t(r.map(l=>l.id===o?{...l,...i}:l))},a=o=>{t(r.filter(i=>i.id!==o))};return s.jsxs("div",{className:"variation-pairs",children:[s.jsxs("div",{className:"variation-pairs-head",children:[s.jsxs("div",{children:[s.jsx("h5",{children:"Variation pairs"}),s.jsx("p",{children:"Add only when another baseline/revised pair represents a different layout or document family variation."})]}),s.jsx("button",{type:"button",className:"icon-action",onClick:()=>t([...r,Hg()]),disabled:r.length>=5,title:"Add variation pair",children:"+"})]}),r.length?s.jsx("div",{className:"variation-pair-list",children:r.map((o,i)=>s.jsxs("div",{className:"variation-pair-row",children:[s.jsxs("strong",{children:["Variation ",i+1]}),s.jsxs("label",{children:["Baseline",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:l=>{var c;return n(o.id,{baseline:((c=l.target.files)==null?void 0:c[0])||null})}})]}),s.jsxs("label",{children:["Revised",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:l=>{var c;return n(o.id,{revised:((c=l.target.files)==null?void 0:c[0])||null})}})]}),s.jsx("button",{type:"button",className:"ghost-action compact",onClick:()=>a(o.id),children:"Remove"})]},o.id))}):s.jsx("span",{className:"variation-empty",children:"No variation pairs added."})]})}function tx({data:e}){const t=(e==null?void 0:e.suggested_dataset)||{},r=(e==null?void 0:e.analysis)||{},n=r.confidence_score!==void 0?Math.round(Number(r.confidence_score||0)*100):null,a=Array.isArray(r.complexity_reasons)?r.complexity_reasons:[],o=Array.isArray(r.enhancement_tips)?r.enhancement_tips:[];return s.jsxs("section",{className:"analysis-card",children:[s.jsxs("div",{className:"analysis-card-head",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Sample Analysis"}),s.jsx("p",{children:e!=null&&e.used_ai?"GPT-4o assisted the metadata suggestions.":"Deterministic scan generated metadata suggestions."})]}),s.jsxs("span",{children:[String(r.complexity_rating||"standard")," complexity"]})]}),s.jsxs("div",{className:"analysis-grid",children:[s.jsxs("p",{children:[s.jsx("strong",{children:t.supplier||"Supplier pending"}),s.jsx("small",{children:t.family_name||"Use case pending"})]}),s.jsxs("p",{children:[s.jsx("strong",{children:t.use_case_type||"comparison"}),s.jsx("small",{children:(t.expected_formats||[]).join(", ")||"formats pending"})]}),s.jsxs("p",{children:[s.jsx("strong",{children:t.domain||"generic"}),s.jsx("small",{children:n!==null?`${n}% estimated parser confidence`:"confidence pending"})]})]}),a.length||o.length?s.jsxs("div",{className:"analysis-notes",children:[a.slice(0,3).map((i,l)=>s.jsx("span",{children:i},`reason-${l}`)),o.slice(0,3).map((i,l)=>s.jsx("span",{children:i},`tip-${l}`))]}):null]})}function rx({value:e,onChange:t}){const r=n=>{t(e.includes(n)?e.filter(a=>a!==n):[...e,n])};return s.jsxs("fieldset",{className:"role-picker",children:[s.jsx("legend",{children:"Allowed roles"}),Wg.map(([n,a])=>s.jsxs("label",{children:[s.jsx("input",{type:"checkbox",checked:e.includes(n),onChange:()=>r(n)}),a]},n))]})}function Fc({value:e,onChange:t}){const r=Array.isArray(e)?e:[],n=a=>{t(r.includes(a)?r.filter(o=>o!==a):[...r,a])};return s.jsxs("fieldset",{className:"format-picker",children:[s.jsx("legend",{children:"Expected formats"}),Vg.map(([a,o])=>s.jsxs("label",{children:[s.jsx("input",{type:"checkbox",checked:r.includes(a),onChange:()=>n(a)}),o]},a))]})}function nx({profile:e}){const t=e&&typeof e=="object"?e:{};return s.jsxs("div",{className:"profile-card",children:[s.jsx("h4",{children:"Model Samples"}),s.jsxs("p",{children:[s.jsxs("strong",{children:[String(t.sample_count||0)," samples"]}),s.jsx("small",{children:(t.roles_present||[]).join(", ")||"No roles learned yet"})]}),s.jsxs("p",{children:[s.jsxs("strong",{children:[String(t.average_pages||0)," avg pages"]}),s.jsxs("small",{children:[String(t.min_pages||0)," min · ",String(t.max_pages||0)," max"]})]}),t.last_bootstrap_notes?s.jsxs("p",{children:[s.jsx("strong",{children:"Latest notes"}),s.jsx("small",{children:String(t.last_bootstrap_notes)})]}):null]})}function Jo({title:e,items:t,labelKey:r,valueKey:n}){const a=Array.isArray(t)?t:[];return s.jsxs("div",{className:"profile-card",children:[s.jsx("h4",{children:e}),a.length===0?s.jsx("span",{children:"No entries yet."}):a.slice(0,8).map((o,i)=>s.jsxs("p",{children:[s.jsx("strong",{children:String((o==null?void 0:o[r])??"Item")}),s.jsx("small",{children:String((o==null?void 0:o[n])??"")})]},i))]})}function ax({profile:e,onAddLabel:t}){const r=e&&typeof e=="object"?e:{},n=String(r.complexity_rating||"low").toUpperCase(),a=r.confidence_score!==void 0?Math.round(r.confidence_score*100):null,o=Array.isArray(r.complexity_reasons)?r.complexity_reasons:[],i=Array.isArray(r.enhancement_tips)?r.enhancement_tips:[],l=Array.isArray(r.suggested_data_labels)?r.suggested_data_labels:[],c=n==="HIGH"?"#9f2525":n==="MEDIUM"?"#c45510":"#1f7e41",u=n==="HIGH"?"#fff7f7":n==="MEDIUM"?"#fffbf7":"#f7fff9",m=n==="HIGH"?"#f1c6c6":n==="MEDIUM"?"#f7d6c1":"#c1f1d1";return s.jsxs("div",{className:"profile-card",style:{gridColumn:"span 2"},children:[s.jsxs("h4",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("span",{children:"AI Onboarding Analysis"}),s.jsxs("span",{style:{fontSize:11,fontWeight:700,color:c,background:u,border:`1px solid ${m}`,padding:"2px 8px",borderRadius:99},children:[n," COMPLEXITY"]})]}),a!==null&&s.jsxs("p",{style:{marginTop:8},children:[s.jsxs("strong",{children:["Parser Confidence Rating: ",a,"%"]}),s.jsx("small",{children:"Estimated baseline accuracy without AI assistance"})]}),o.length>0&&s.jsxs("p",{style:{marginTop:10},children:[s.jsx("strong",{children:"Structural Complexity Indicators"}),s.jsx("small",{style:{display:"block",marginTop:4},children:o.map((f,g)=>s.jsxs("span",{style:{display:"block",color:"var(--text-primary)"},children:["• ",f]},g))})]}),i.length>0&&s.jsxs("p",{style:{marginTop:10},children:[s.jsx("strong",{children:"Extraction Optimization Recommendations"}),s.jsx("small",{style:{display:"block",marginTop:4},children:i.map((f,g)=>s.jsxs("span",{style:{display:"block",color:"var(--text-primary)"},children:["• ",f]},g))})]}),l.length>0&&s.jsxs("p",{style:{marginTop:12},children:[s.jsx("strong",{children:"Suggested Data Labels (Click to map)"}),s.jsx("span",{style:{display:"flex",flexWrap:"wrap",gap:6,marginTop:6},children:l.map(f=>s.jsxs("button",{type:"button",onClick:()=>t(f),style:{background:"var(--surface-sunken)",border:"1px solid var(--border)",color:"var(--text-primary)",borderRadius:"4px",padding:"2px 8px",fontSize:12,fontWeight:650,cursor:"pointer"},title:"Click to automatically create a mapping rule for this label",children:["Add ",f]},f))})]})]})}async function wr(e,t={}){const r=await fetch(`${V}${e}`,t);if(r.status===404&&e.startsWith("/admin/")){const n=await fetch(`${V}/api${e}`,t);if(!n.ok)throw new Error(await se(n));return n.json()}if(!r.ok)throw new Error(await se(r));return r.json()}async function ox(e,t={}){const r=await fetch(`${V}${e}`,t);if(r.status!==404){if(!r.ok)throw new Error(await se(r));return r.json()}const n=await fetch(`${V}/api${e}`,t);if(!n.ok)throw new Error(await se(n));return n.json()}function Uc(e){const t=e.trim();if(!t)return[];const r=JSON.parse(t);if(!Array.isArray(r))throw new Error("Column rules must be a JSON array.");return r}function sx(e){w.useEffect(()=>{document.title=`${e} · Altrai`},[e])}const ma=e=>Number(e||0).toLocaleString();function ix(e,t,r){const n=String(e||"").toLowerCase(),a=n.includes("gpt-4")&&!n.includes("mini"),o=a?2.5:.15,i=a?10:.6;return(Number(t||0)*o+Number(r||0)*i)/1e6}function lx({runId:e}){const[t,r]=w.useState(""),[n,a]=w.useState("fast"),[o,i]=w.useState("gpt-4o"),[l,c]=w.useState([]),[u,m]=w.useState({}),[f,g]=w.useState(!1),v=w.useMemo(()=>l.reduce((x,j)=>{const p=j.usage;return p&&(x.prompt+=Number(p.prompt_tokens||0),x.completion+=Number(p.completion_tokens||0),x.total+=Number(p.total_tokens||0),x.calls+=1,x.cost+=ix(j.model,p.prompt_tokens,p.completion_tokens)),x},{prompt:0,completion:0,total:0,calls:0,cost:0}),[l]),y=async()=>{const x=t.trim();if(!x||f||!e)return;const j=`user-${Date.now()}`,p=`answer-${Date.now()}`;c(d=>[...d,{id:j,role:"user",text:x,timestamp:new Date().toLocaleTimeString()}]),r(""),g(!0);try{const d=await fetch(`${V}/runs/${e}/query`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:x,mode:n,response_language:"source",model_name:n==="ai"?o:null})});if(!d.ok)throw new Error(await se(d));const h=await d.json();c(b=>{var S;return[...b,{id:p,role:"assistant",text:h.answer||`I found ${((S=h.rows)==null?void 0:S.length)||0} matching changes.`,rows:h.rows||[],columns:h.columns||Wh(h.rows||[]),mode:h.mode||n,model:n==="ai"?o:null,usage:h.usage,confidence:h.confidence,warning:h.ai_error||(h.ai_unavailable?"AI response was unavailable; showing grounded evidence results.":""),timestamp:new Date().toLocaleTimeString()}]})}catch(d){c(h=>[...h,{id:p,role:"assistant",text:ie(d),rows:[],timestamp:new Date().toLocaleTimeString(),isError:!0}])}finally{g(!1)}};return s.jsxs("section",{className:"query-workbench",children:[l.length===0?s.jsx(Qt,{label:"Ask what changed, why it matters, or where the evidence appears in the compared documents."}):s.jsx("div",{className:"query-chat-log",children:l.map(x=>{var j,p;return s.jsxs("article",{className:`query-message ${x.role}${x.isError?" error":""}`,children:[s.jsxs("div",{className:"query-message-meta",children:[s.jsx("span",{children:x.role==="user"?"You":x.mode==="ai"?`AI answer${x.model?` - ${x.model}`:""}`:"Natural language query"}),s.jsx("span",{children:x.timestamp})]}),s.jsx("div",{className:"query-message-text",dir:"auto",children:x.text}),x.warning&&s.jsx("div",{className:"query-warning",children:x.warning}),x.usage&&s.jsxs("div",{className:"query-usage",children:[s.jsxs("span",{children:[ma(x.usage.total_tokens)," tokens"]}),s.jsxs("span",{children:[ma(x.usage.prompt_tokens)," input / ",ma(x.usage.completion_tokens)," output"]})]}),((j=x.rows)==null?void 0:j.length)>0&&s.jsxs("div",{className:"query-evidence",children:[s.jsx("button",{type:"button",className:"key-audit-toggle",onClick:()=>m(d=>({...d,[x.id]:!d[x.id]})),children:u[x.id]?"Hide evidence":`Show evidence (${x.rows.length})`}),u[x.id]&&s.jsx("div",{className:"query-results-shell",children:(p=x.columns)!=null&&p.length?s.jsx(sr,{columns:x.columns,rows:x.rows}):x.rows.slice(0,50).map((d,h)=>s.jsx(cx,{row:d},h))})]})]},x.id)})}),v.total>0&&s.jsxs("div",{className:"query-usage-strip",children:[s.jsxs("span",{children:[ma(v.total)," tokens across ",v.calls," AI call",v.calls===1?"":"s"]}),s.jsxs("strong",{children:["$",v.cost.toFixed(5)]})]}),s.jsxs("div",{className:"query-composer",children:[s.jsx("textarea",{value:t,onChange:x=>r(x.target.value),onKeyDown:x=>{x.key==="Enter"&&!x.shiftKey&&(x.preventDefault(),y())},placeholder:"Ask about changed clauses, tables, dates, values, deleted text, or page evidence...",disabled:f,rows:3}),s.jsxs("div",{className:"query-composer-actions",children:[s.jsxs("label",{children:[s.jsx("span",{children:"Mode"}),s.jsxs("select",{value:n,onChange:x=>a(x.target.value),disabled:f,children:[s.jsx("option",{value:"fast",children:"NL query"}),s.jsx("option",{value:"ai",children:"AI chat"})]})]}),n==="ai"&&s.jsxs("label",{children:[s.jsx("span",{children:"Model"}),s.jsxs("select",{value:o,onChange:x=>i(x.target.value),disabled:f,children:[s.jsx("option",{value:"gpt-4o",children:"gpt-4o"}),s.jsx("option",{value:"gpt-4o-mini",children:"gpt-4o-mini"}),s.jsx("option",{value:"phi-4-mini",children:"phi-4-mini"})]})]}),s.jsx("button",{type:"button",className:"primary-action compact",onClick:y,disabled:f||!t.trim(),children:f?"Working":n==="ai"?"Ask AI":"Ask"})]})]})]})}function cx({row:e}){var t;return s.jsxs("div",{className:"query-result",children:[s.jsxs("div",{className:"query-result-head",children:[s.jsx(cp,{type:Ur(e)}),e.stable_key&&s.jsx("code",{children:e.stable_key}),s.jsx("span",{children:e.citation||`page ${e.page||"-"}`})]}),e.before&&s.jsxs("div",{dir:"auto",children:[s.jsx("strong",{children:"Before:"})," ",Qe(e.before,260)]}),e.after&&s.jsxs("div",{dir:"auto",children:[s.jsx("strong",{children:"After:"})," ",Qe(e.after,260)]}),((t=e.field_changes)==null?void 0:t.length)>0&&s.jsx(hg,{rows:e.field_changes})]})}const ct=(e,t)=>{if(typeof window>"u")return t;try{const r=window.sessionStorage.getItem(`doculens_${e}`);return r!==null?JSON.parse(r):t}catch{return t}},et=(e,t)=>{if(!(typeof window>"u"))try{window.sessionStorage.setItem(`doculens_${e}`,JSON.stringify(t))}catch(r){console.error(r)}},Gs={compare:"/compare",extract:"/extract",jobs:"/work-history",agents:"/ai-agents",admin:"/admin"},ux={"/":"compare",...Object.fromEntries(Object.entries(Gs).map(([e,t])=>[t,e]))},Bc=e=>ux[e]||"compare";function dx(){const e=op(),t=Sh(),[r,n]=w.useState(()=>Bc(window.location.pathname)),[a,o]=w.useState(()=>ct("runId",null)),[i,l]=w.useState(()=>ct("meta",null)),[c,u]=w.useState(()=>ct("tab","viewer")),[m,f]=w.useState(()=>ct("pageNum",1)),[g,v]=w.useState(()=>ct("busy",!1)),[y,x]=w.useState(""),[j,p]=w.useState(()=>ct("extractRunId",null)),[d,h]=w.useState(()=>ct("extractMeta",null)),[b,S]=w.useState(()=>ct("extractBusy",!1)),[N,C]=w.useState(""),[z,$]=w.useState(()=>ct("extractTab","overview")),[R,W]=w.useState(""),[_e,Ae]=w.useState(()=>ct("historyKind","all")),Ct={compare:"Compare",extract:"Extract",jobs:"Work History",agents:"AI Agents",admin:"Admin Studio"}[r]||"Workspace";sx(Ct),w.useEffect(()=>{et("workspace",r)},[r]),w.useEffect(()=>{et("runId",a)},[a]),w.useEffect(()=>{et("meta",i)},[i]),w.useEffect(()=>{et("tab",c)},[c]),w.useEffect(()=>{et("pageNum",m)},[m]),w.useEffect(()=>{et("busy",g)},[g]),w.useEffect(()=>{et("extractRunId",j)},[j]),w.useEffect(()=>{et("extractMeta",d)},[d]),w.useEffect(()=>{et("extractBusy",b)},[b]),w.useEffect(()=>{et("extractTab",z)},[z]),w.useEffect(()=>{et("historyKind",_e)},[_e]),w.useEffect(()=>{const L=Bc(e.pathname);L!==r&&n(L)},[e.pathname]),w.useEffect(()=>{r==="compare"&&c!=="viewer"&&u("viewer")},[r]);const Ee=()=>{o(null),l(null),v(!1),x(""),f(1),u("viewer"),Ne("compare")},Ye=()=>{p(null),h(null),S(!1),C(""),$("overview"),Ne("extract")},Ne=(L,M={})=>{n(L),L==="jobs"&&Ae(M.historyKind||"all"),x(""),C(""),W(""),t(Gs[L]||Gs.compare,{replace:!1})};w.useEffect(()=>{if(!a||!g)return;let L=!1,M=null;const O=async()=>{try{const ee=await fetch(`${V}/runs/${a}`);if(!ee.ok)throw new Error(await se(ee));const A=await ee.json();if(L)return;if(l(A),A.status==="complete"){v(!1),u("viewer");return}if(A.status==="failed"){v(!1),x(at(A.error||A.status_message||"Comparison failed."));return}M=setTimeout(O,1e3)}catch(ee){if(L)return;v(!1),x(ie(ee))}};return O(),()=>{L=!0,M&&clearTimeout(M)}},[a,g]),w.useEffect(()=>{if(!j||!b)return;let L=!1,M=null;const O=async()=>{try{const ee=await fetch(`${V}/extract-runs/${j}`);if(!ee.ok)throw new Error(await se(ee));const A=await ee.json();if(L)return;if(h(A),A.status==="complete"){S(!1),$("overview");return}if(A.status==="failed"){S(!1),C(at(A.error||A.status_message||"Extraction failed."));return}M=setTimeout(O,1e3)}catch(ee){if(L)return;S(!1),C(ie(ee))}};return O(),()=>{L=!0,M&&clearTimeout(M)}},[j,b]);const E=async L=>{L.preventDefault();const M=new FormData(L.currentTarget),O=M.get("base"),ee=M.get("target"),A=String(M.get("family_id")||"").trim();if(!O||!ee||!O.name||!ee.name){x("Please select both documents before starting.");return}if(!A){x("Please select a document use case before starting comparison.");return}n("compare"),v(!0),x(""),o(null),f(1),u("viewer"),l({status:"uploading",status_message:"Uploading documents",progress:3,stats:{},coverage:{},n_pages_base:0,n_pages_target:0});try{const ye=await fetch(`${V}/compare`,{method:"POST",body:M});if(!ye.ok)throw new Error(await se(ye));const gt=await ye.json();o(gt.run_id),v(gt.status!=="complete"&&gt.status!=="failed"),l({run_id:gt.run_id,status:gt.status,status_message:gt.status_message||"Starting comparison",progress:gt.progress||5,stats:{},coverage:{},n_pages_base:0,n_pages_target:0}),n("compare")}catch(ye){v(!1),x(ie(ye))}},D=async L=>{L.preventDefault();const M=new FormData(L.currentTarget),O=M.getAll("document").filter(A=>A&&A.name),ee=String(M.get("family_id")||"").trim();if(!O.length){C("Please select at least one document, spreadsheet, PDF, or image before starting extraction.");return}if(!ee){C("Please select a document use case before starting extraction.");return}n("extract"),S(!0),C(""),p(null),$("overview"),h({status:"uploading",status_message:"Uploading document",progress:3,summary:{}});try{const A=await fetch(`${V}/extract`,{method:"POST",body:M});if(!A.ok)throw new Error(await se(A));const ye=await A.json();p(ye.run_id),S(ye.status!=="complete"&&ye.status!=="failed"),h({run_id:ye.run_id,status:ye.status,status_message:ye.status_message||"Starting extraction",progress:ye.progress||5,summary:{}}),n("extract")}catch(A){S(!1),C(ie(A))}},I=async L=>{W("");try{if(L.kind==="extraction"){const ee=await fetch(`${V}/extract-runs/${L.run_id}`);if(!ee.ok)throw new Error(await se(ee));const A=await ee.json();o(null),l(null),v(!1),p(L.run_id),h(A),S(A.status!=="complete"&&A.status!=="failed"),$("overview"),n("extract");return}const M=await fetch(`${V}/runs/${L.run_id}`);if(!M.ok)throw new Error(await se(M));const O=await M.json();p(null),h(null),S(!1),o(L.run_id),l(O),v(O.status!=="complete"&&O.status!=="failed"),u("viewer"),f(1),n("compare")}catch(M){W(ie(M))}},Q=async L=>{W("");try{if(L.kind==="extraction"){const M=await fetch(`${V}/extract-runs/${L.run_id}`);if(!M.ok)throw new Error(await se(M));const O=await M.json();o(null),l(null),v(!1),p(L.run_id),h(O),S(O.status!=="complete"&&O.status!=="failed"),n("extract");return}await I(L)}catch(M){W(ie(M))}},ae=()=>{a&&(window.location.href=`${V}/runs/${a}/report.pdf`)},Xe=(i==null?void 0:i.status)==="complete",J=(d==null?void 0:d.status)==="complete";return s.jsxs("div",{children:[s.jsx("style",{children:Ih}),s.jsxs(Bg,{workspace:r,runId:r==="compare"&&Xe?a:null,onNavigate:Ne,onDownloadReport:ae,children:[r==="jobs"&&s.jsx(eg,{onOpenJob:I,onAskJob:Q,error:R,historyKind:_e,onStartCompare:Ee,onStartExtract:Ye}),r==="compare"&&!Xe&&s.jsxs("section",{className:"workflow-panel",children:[s.jsx(rg,{onUpload:E,busy:g,onAdmin:()=>Ne("admin")}),g&&i&&s.jsx(Lc,{progress:i.progress||0,message:i.status_message||"Processing documents",status:i.status||"running"}),y&&s.jsx(On,{message:y})]}),r==="extract"&&!J&&s.jsxs("section",{className:"workflow-panel",children:[s.jsx(ng,{onUpload:D,busy:b,onAdmin:()=>Ne("admin")}),b&&d&&s.jsx(Lc,{progress:d.progress||0,message:d.status_message||"Extracting document",status:d.status||"running"}),N&&s.jsx(On,{message:N})]}),r==="compare"&&Xe&&a&&i&&s.jsxs("section",{className:"comparison-workspace",children:[s.jsxs("div",{className:"comparison-head",children:[s.jsx("div",{children:s.jsxs("h2",{dir:"auto",children:[i.base_label||"Baseline"," → ",i.target_label||"Revised"]})}),s.jsxs("div",{className:"comparison-head-actions",children:[s.jsx("button",{type:"button",className:"ghost-action compact",onClick:Ee,children:"New comparison"}),s.jsxs("div",{className:"comparison-id",children:["#",String(a).slice(0,6)]})]})]}),s.jsx(Jh,{meta:i}),s.jsxs("main",{className:"comparison-flow",children:[s.jsxs("section",{className:"workspace-surface",children:[s.jsx("div",{className:"surface-title-row",children:s.jsxs("div",{children:[s.jsx("h3",{children:"Quick Summary"}),s.jsx("p",{children:"Highest-priority differences detected from the comparison evidence."})]})}),s.jsx(ag,{runId:a,meta:i,onVerifyPage:f})]}),s.jsxs("section",{className:"workspace-surface",children:[s.jsx("div",{className:"surface-title-row",children:s.jsxs("div",{children:[s.jsx("h3",{children:"Visual Comparison"}),s.jsx("p",{children:"Side-by-side verification with synchronized scroll, zoom, and document overlays."})]})}),s.jsx(og,{runId:a,meta:i,pageNum:m,setPageNum:f})]}),s.jsxs("section",{className:"workspace-surface",children:[s.jsx("div",{className:"surface-title-row",children:s.jsxs("div",{children:[s.jsx("h3",{children:"Ask This Comparison"}),s.jsx("p",{children:"Start with natural language search. Switch to an AI model only when reasoning or richer synthesis is needed."})]})}),s.jsx(lx,{runId:a})]})]})]}),r==="extract"&&J&&j&&d&&s.jsx(gg,{runId:j,meta:d,tab:z,setTab:$}),r==="agents"&&s.jsxs("section",{className:"workspace-placeholder",children:[s.jsx("h2",{children:"AI Agents"}),s.jsx("p",{children:"Future skills and multi-agent workflows will live here after the document intelligence workspace is stable."}),s.jsx("div",{className:"placeholder-list",children:s.jsx("span",{children:"Coming soon"})})]}),r==="admin"&&s.jsx(Qg,{})]})]})}Yo.createRoot(document.getElementById("root")).render(s.jsx(to.StrictMode,{children:s.jsx(Ag,{children:s.jsx(Rh,{children:s.jsx(dx,{})})})}));
