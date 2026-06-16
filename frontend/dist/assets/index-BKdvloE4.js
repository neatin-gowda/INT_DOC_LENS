function Rp(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in e)){const s=Object.getOwnPropertyDescriptor(n,a);s&&Object.defineProperty(e,a,s.get?s:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}})();function Lp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qc={exports:{}},es={},Vc={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fn=Symbol.for("react.element"),Ip=Symbol.for("react.portal"),Ap=Symbol.for("react.fragment"),Mp=Symbol.for("react.strict_mode"),Op=Symbol.for("react.profiler"),Fp=Symbol.for("react.provider"),Up=Symbol.for("react.context"),Bp=Symbol.for("react.forward_ref"),Wp=Symbol.for("react.suspense"),qp=Symbol.for("react.memo"),Vp=Symbol.for("react.lazy"),pl=Symbol.iterator;function Hp(e){return e===null||typeof e!="object"?null:(e=pl&&e[pl]||e["@@iterator"],typeof e=="function"?e:null)}var Hc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qc=Object.assign,Kc={};function Gr(e,t,r){this.props=e,this.context=t,this.refs=Kc,this.updater=r||Hc}Gr.prototype.isReactComponent={};Gr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Gr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gc(){}Gc.prototype=Gr.prototype;function Yo(e,t,r){this.props=e,this.context=t,this.refs=Kc,this.updater=r||Hc}var Xo=Yo.prototype=new Gc;Xo.constructor=Yo;Qc(Xo,Gr.prototype);Xo.isPureReactComponent=!0;var fl=Array.isArray,Jc=Object.prototype.hasOwnProperty,Zo={current:null},Yc={key:!0,ref:!0,__self:!0,__source:!0};function Xc(e,t,r){var n,a={},s=null,i=null;if(t!=null)for(n in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(s=""+t.key),t)Jc.call(t,n)&&!Yc.hasOwnProperty(n)&&(a[n]=t[n]);var l=arguments.length-2;if(l===1)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)a[n]===void 0&&(a[n]=l[n]);return{$$typeof:Fn,type:e,key:s,ref:i,props:a,_owner:Zo.current}}function Qp(e,t){return{$$typeof:Fn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ei(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fn}function Kp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var ml=/\/+/g;function ws(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Kp(""+e.key):t.toString(36)}function ha(e,t,r,n,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Fn:case Ip:i=!0}}if(i)return i=e,a=a(i),e=n===""?"."+ws(i,0):n,fl(a)?(r="",e!=null&&(r=e.replace(ml,"$&/")+"/"),ha(a,t,r,"",function(u){return u})):a!=null&&(ei(a)&&(a=Qp(a,r+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(ml,"$&/")+"/")+e)),t.push(a)),1;if(i=0,n=n===""?".":n+":",fl(e))for(var l=0;l<e.length;l++){s=e[l];var c=n+ws(s,l);i+=ha(s,t,r,c,a)}else if(c=Hp(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=n+ws(s,l++),i+=ha(s,t,r,c,a);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Kn(e,t,r){if(e==null)return e;var n=[],a=0;return ha(e,n,"","",function(s){return t.call(r,s,a++)}),n}function Gp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},ga={transition:null},Jp={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:ga,ReactCurrentOwner:Zo};function Zc(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Kn,forEach:function(e,t,r){Kn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Kn(e,function(){t++}),t},toArray:function(e){return Kn(e,function(t){return t})||[]},only:function(e){if(!ei(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Gr;U.Fragment=Ap;U.Profiler=Op;U.PureComponent=Yo;U.StrictMode=Mp;U.Suspense=Wp;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jp;U.act=Zc;U.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Qc({},e.props),a=e.key,s=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,i=Zo.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Jc.call(t,c)&&!Yc.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:Fn,type:e.type,key:a,ref:s,props:n,_owner:i}};U.createContext=function(e){return e={$$typeof:Up,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Fp,_context:e},e.Consumer=e};U.createElement=Xc;U.createFactory=function(e){var t=Xc.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:Bp,render:e}};U.isValidElement=ei;U.lazy=function(e){return{$$typeof:Vp,_payload:{_status:-1,_result:e},_init:Gp}};U.memo=function(e,t){return{$$typeof:qp,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=ga.transition;ga.transition={};try{e()}finally{ga.transition=t}};U.unstable_act=Zc;U.useCallback=function(e,t){return Pe.current.useCallback(e,t)};U.useContext=function(e){return Pe.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};U.useEffect=function(e,t){return Pe.current.useEffect(e,t)};U.useId=function(){return Pe.current.useId()};U.useImperativeHandle=function(e,t,r){return Pe.current.useImperativeHandle(e,t,r)};U.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return Pe.current.useMemo(e,t)};U.useReducer=function(e,t,r){return Pe.current.useReducer(e,t,r)};U.useRef=function(e){return Pe.current.useRef(e)};U.useState=function(e){return Pe.current.useState(e)};U.useSyncExternalStore=function(e,t,r){return Pe.current.useSyncExternalStore(e,t,r)};U.useTransition=function(){return Pe.current.useTransition()};U.version="18.3.1";Vc.exports=U;var y=Vc.exports;const ts=Lp(y),Yp=Rp({__proto__:null,default:ts},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp=y,Zp=Symbol.for("react.element"),ef=Symbol.for("react.fragment"),tf=Object.prototype.hasOwnProperty,rf=Xp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nf={key:!0,ref:!0,__self:!0,__source:!0};function eu(e,t,r){var n,a={},s=null,i=null;r!==void 0&&(s=""+r),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(i=t.ref);for(n in t)tf.call(t,n)&&!nf.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:Zp,type:e,key:s,ref:i,props:a,_owner:rf.current}}es.Fragment=ef;es.jsx=eu;es.jsxs=eu;qc.exports=es;var o=qc.exports,Ys={},tu={exports:{}},Be={},ru={exports:{}},nu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,$){var I=C.length;C.push($);e:for(;0<I;){var Q=I-1>>>1,se=C[Q];if(0<a(se,$))C[Q]=$,C[I]=se,I=Q;else break e}}function r(C){return C.length===0?null:C[0]}function n(C){if(C.length===0)return null;var $=C[0],I=C.pop();if(I!==$){C[0]=I;e:for(var Q=0,se=C.length,Xe=se>>>1;Q<Xe;){var J=2*(Q+1)-1,L=C[J],M=J+1,O=C[M];if(0>a(L,I))M<se&&0>a(O,L)?(C[Q]=O,C[M]=I,Q=M):(C[Q]=L,C[J]=I,Q=J);else if(M<se&&0>a(O,I))C[Q]=O,C[M]=I,Q=M;else break e}}return $}function a(C,$){var I=C.sortIndex-$.sortIndex;return I!==0?I:C.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var c=[],u=[],h=1,m=null,g=3,v=!1,w=!1,b=!1,S=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(C){for(var $=r(u);$!==null;){if($.callback===null)n(u);else if($.startTime<=C)n(u),$.sortIndex=$.expirationTime,t(c,$);else break;$=r(u)}}function x(C){if(b=!1,d(C),!w)if(r(c)!==null)w=!0,Ye(j);else{var $=r(u);$!==null&&Ne(x,$.startTime-C)}}function j(C,$){w=!1,b&&(b=!1,f(z),z=-1),v=!0;var I=g;try{for(d($),m=r(c);m!==null&&(!(m.expirationTime>$)||C&&!q());){var Q=m.callback;if(typeof Q=="function"){m.callback=null,g=m.priorityLevel;var se=Q(m.expirationTime<=$);$=e.unstable_now(),typeof se=="function"?m.callback=se:m===r(c)&&n(c),d($)}else n(c);m=r(c)}if(m!==null)var Xe=!0;else{var J=r(u);J!==null&&Ne(x,J.startTime-$),Xe=!1}return Xe}finally{m=null,g=I,v=!1}}var N=!1,_=null,z=-1,D=5,R=-1;function q(){return!(e.unstable_now()-R<D)}function _e(){if(_!==null){var C=e.unstable_now();R=C;var $=!0;try{$=_(!0,C)}finally{$?Ae():(N=!1,_=null)}}else N=!1}var Ae;if(typeof p=="function")Ae=function(){p(_e)};else if(typeof MessageChannel<"u"){var Ct=new MessageChannel,Ee=Ct.port2;Ct.port1.onmessage=_e,Ae=function(){Ee.postMessage(null)}}else Ae=function(){S(_e,0)};function Ye(C){_=C,N||(N=!0,Ae())}function Ne(C,$){z=S(function(){C(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,Ye(j))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(C){switch(g){case 1:case 2:case 3:var $=3;break;default:$=g}var I=g;g=$;try{return C()}finally{g=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,$){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var I=g;g=C;try{return $()}finally{g=I}},e.unstable_scheduleCallback=function(C,$,I){var Q=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?Q+I:Q):I=Q,C){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=I+se,C={id:h++,callback:$,priorityLevel:C,startTime:I,expirationTime:se,sortIndex:-1},I>Q?(C.sortIndex=I,t(u,C),r(c)===null&&C===r(u)&&(b?(f(z),z=-1):b=!0,Ne(x,I-Q))):(C.sortIndex=se,t(c,C),w||v||(w=!0,Ye(j))),C},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(C){var $=g;return function(){var I=g;g=$;try{return C.apply(this,arguments)}finally{g=I}}}})(nu);ru.exports=nu;var af=ru.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sf=y,Ue=af;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var au=new Set,bn={};function fr(e,t){Br(e,t),Br(e+"Capture",t)}function Br(e,t){for(bn[e]=t,e=0;e<t.length;e++)au.add(t[e])}var jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xs=Object.prototype.hasOwnProperty,of=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hl={},gl={};function lf(e){return Xs.call(gl,e)?!0:Xs.call(hl,e)?!1:of.test(e)?gl[e]=!0:(hl[e]=!0,!1)}function cf(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function uf(e,t,r,n){if(t===null||typeof t>"u"||cf(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Te(e,t,r,n,a,s,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=i}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ve[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ve[t]=new Te(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ve[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ve[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ve[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ve[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ve[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ve[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ve[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var ti=/[\-:]([a-z])/g;function ri(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ti,ri);ve[t]=new Te(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ti,ri);ve[t]=new Te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ti,ri);ve[t]=new Te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ve[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});ve.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ve[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function ni(e,t,r,n){var a=ve.hasOwnProperty(t)?ve[t]:null;(a!==null?a.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(uf(t,r,a,n)&&(r=null),n||a===null?lf(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,n=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Nt=sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gn=Symbol.for("react.element"),br=Symbol.for("react.portal"),kr=Symbol.for("react.fragment"),ai=Symbol.for("react.strict_mode"),Zs=Symbol.for("react.profiler"),su=Symbol.for("react.provider"),ou=Symbol.for("react.context"),si=Symbol.for("react.forward_ref"),eo=Symbol.for("react.suspense"),to=Symbol.for("react.suspense_list"),oi=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),iu=Symbol.for("react.offscreen"),xl=Symbol.iterator;function Zr(e){return e===null||typeof e!="object"?null:(e=xl&&e[xl]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Object.assign,bs;function ln(e){if(bs===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);bs=t&&t[1]||""}return`
`+bs+e}var ks=!1;function js(e,t){if(!e||ks)return"";ks=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),s=n.stack.split(`
`),i=a.length-1,l=s.length-1;1<=i&&0<=l&&a[i]!==s[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==s[l]){if(i!==1||l!==1)do if(i--,l--,0>l||a[i]!==s[l]){var c=`
`+a[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=l);break}}}finally{ks=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?ln(e):""}function df(e){switch(e.tag){case 5:return ln(e.type);case 16:return ln("Lazy");case 13:return ln("Suspense");case 19:return ln("SuspenseList");case 0:case 2:case 15:return e=js(e.type,!1),e;case 11:return e=js(e.type.render,!1),e;case 1:return e=js(e.type,!0),e;default:return""}}function ro(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kr:return"Fragment";case br:return"Portal";case Zs:return"Profiler";case ai:return"StrictMode";case eo:return"Suspense";case to:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ou:return(e.displayName||"Context")+".Consumer";case su:return(e._context.displayName||"Context")+".Provider";case si:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case oi:return t=e.displayName||null,t!==null?t:ro(e.type)||"Memo";case Tt:t=e._payload,e=e._init;try{return ro(e(t))}catch{}}return null}function pf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ro(t);case 8:return t===ai?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Vt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ff(e){var t=lu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,s=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){n=""+i,s.call(this,i)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jn(e){e._valueTracker||(e._valueTracker=ff(e))}function cu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=lu(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Ca(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function no(e,t){var r=t.checked;return ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function vl(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Vt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function uu(e,t){t=t.checked,t!=null&&ni(e,"checked",t,!1)}function ao(e,t){uu(e,t);var r=Vt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?so(e,t.type,r):t.hasOwnProperty("defaultValue")&&so(e,t.type,Vt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function yl(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function so(e,t,r){(t!=="number"||Ca(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var cn=Array.isArray;function Rr(e,t,r,n){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Vt(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function oo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wl(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(E(92));if(cn(r)){if(1<r.length)throw Error(E(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Vt(r)}}function du(e,t){var r=Vt(t.value),n=Vt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function bl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function pu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function io(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?pu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yn,fu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Yn=Yn||document.createElement("div"),Yn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function kn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var pn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mf=["Webkit","ms","Moz","O"];Object.keys(pn).forEach(function(e){mf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pn[t]=pn[e]})});function mu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||pn.hasOwnProperty(e)&&pn[e]?(""+t).trim():t+"px"}function hu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,a=mu(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,a):e[r]=a}}var hf=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lo(e,t){if(t){if(hf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function co(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uo=null;function ii(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var po=null,Lr=null,Ir=null;function kl(e){if(e=Wn(e)){if(typeof po!="function")throw Error(E(280));var t=e.stateNode;t&&(t=os(t),po(e.stateNode,e.type,t))}}function gu(e){Lr?Ir?Ir.push(e):Ir=[e]:Lr=e}function xu(){if(Lr){var e=Lr,t=Ir;if(Ir=Lr=null,kl(e),t)for(e=0;e<t.length;e++)kl(t[e])}}function vu(e,t){return e(t)}function yu(){}var Ss=!1;function wu(e,t,r){if(Ss)return e(t,r);Ss=!0;try{return vu(e,t,r)}finally{Ss=!1,(Lr!==null||Ir!==null)&&(yu(),xu())}}function jn(e,t){var r=e.stateNode;if(r===null)return null;var n=os(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(E(231,t,typeof r));return r}var fo=!1;if(jt)try{var en={};Object.defineProperty(en,"passive",{get:function(){fo=!0}}),window.addEventListener("test",en,en),window.removeEventListener("test",en,en)}catch{fo=!1}function gf(e,t,r,n,a,s,i,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(h){this.onError(h)}}var fn=!1,za=null,Pa=!1,mo=null,xf={onError:function(e){fn=!0,za=e}};function vf(e,t,r,n,a,s,i,l,c){fn=!1,za=null,gf.apply(xf,arguments)}function yf(e,t,r,n,a,s,i,l,c){if(vf.apply(this,arguments),fn){if(fn){var u=za;fn=!1,za=null}else throw Error(E(198));Pa||(Pa=!0,mo=u)}}function mr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function bu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function jl(e){if(mr(e)!==e)throw Error(E(188))}function wf(e){var t=e.alternate;if(!t){if(t=mr(e),t===null)throw Error(E(188));return t!==e?null:e}for(var r=e,n=t;;){var a=r.return;if(a===null)break;var s=a.alternate;if(s===null){if(n=a.return,n!==null){r=n;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===r)return jl(a),e;if(s===n)return jl(a),t;s=s.sibling}throw Error(E(188))}if(r.return!==n.return)r=a,n=s;else{for(var i=!1,l=a.child;l;){if(l===r){i=!0,r=a,n=s;break}if(l===n){i=!0,n=a,r=s;break}l=l.sibling}if(!i){for(l=s.child;l;){if(l===r){i=!0,r=s,n=a;break}if(l===n){i=!0,n=s,r=a;break}l=l.sibling}if(!i)throw Error(E(189))}}if(r.alternate!==n)throw Error(E(190))}if(r.tag!==3)throw Error(E(188));return r.stateNode.current===r?e:t}function ku(e){return e=wf(e),e!==null?ju(e):null}function ju(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ju(e);if(t!==null)return t;e=e.sibling}return null}var Su=Ue.unstable_scheduleCallback,Sl=Ue.unstable_cancelCallback,bf=Ue.unstable_shouldYield,kf=Ue.unstable_requestPaint,le=Ue.unstable_now,jf=Ue.unstable_getCurrentPriorityLevel,li=Ue.unstable_ImmediatePriority,_u=Ue.unstable_UserBlockingPriority,Ta=Ue.unstable_NormalPriority,Sf=Ue.unstable_LowPriority,Eu=Ue.unstable_IdlePriority,rs=null,ft=null;function _f(e){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(rs,e,void 0,(e.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:Cf,Ef=Math.log,Nf=Math.LN2;function Cf(e){return e>>>=0,e===0?32:31-(Ef(e)/Nf|0)|0}var Xn=64,Zn=4194304;function un(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Da(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,a=e.suspendedLanes,s=e.pingedLanes,i=r&268435455;if(i!==0){var l=i&~a;l!==0?n=un(l):(s&=i,s!==0&&(n=un(s)))}else i=r&~a,i!==0?n=un(i):s!==0&&(n=un(s));if(n===0)return 0;if(t!==0&&t!==n&&!(t&a)&&(a=n&-n,s=t&-t,a>=s||a===16&&(s&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-st(t),a=1<<r,n|=e[r],t&=~a;return n}function zf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pf(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var i=31-st(s),l=1<<i,c=a[i];c===-1?(!(l&r)||l&n)&&(a[i]=zf(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function ho(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Nu(){var e=Xn;return Xn<<=1,!(Xn&4194240)&&(Xn=64),e}function _s(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Un(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-st(t),e[t]=r}function Tf(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-st(r),s=1<<a;t[a]=0,n[a]=-1,e[a]=-1,r&=~s}}function ci(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-st(r),a=1<<n;a&t|e[n]&t&&(e[n]|=t),r&=~a}}var H=0;function Cu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var zu,ui,Pu,Tu,Du,go=!1,ea=[],At=null,Mt=null,Ot=null,Sn=new Map,_n=new Map,$t=[],Df="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _l(e,t){switch(e){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":Sn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_n.delete(t.pointerId)}}function tn(e,t,r,n,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:s,targetContainers:[a]},t!==null&&(t=Wn(t),t!==null&&ui(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function $f(e,t,r,n,a){switch(t){case"focusin":return At=tn(At,e,t,r,n,a),!0;case"dragenter":return Mt=tn(Mt,e,t,r,n,a),!0;case"mouseover":return Ot=tn(Ot,e,t,r,n,a),!0;case"pointerover":var s=a.pointerId;return Sn.set(s,tn(Sn.get(s)||null,e,t,r,n,a)),!0;case"gotpointercapture":return s=a.pointerId,_n.set(s,tn(_n.get(s)||null,e,t,r,n,a)),!0}return!1}function $u(e){var t=Zt(e.target);if(t!==null){var r=mr(t);if(r!==null){if(t=r.tag,t===13){if(t=bu(r),t!==null){e.blockedOn=t,Du(e.priority,function(){Pu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=xo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);uo=n,r.target.dispatchEvent(n),uo=null}else return t=Wn(r),t!==null&&ui(t),e.blockedOn=r,!1;t.shift()}return!0}function El(e,t,r){xa(e)&&r.delete(t)}function Rf(){go=!1,At!==null&&xa(At)&&(At=null),Mt!==null&&xa(Mt)&&(Mt=null),Ot!==null&&xa(Ot)&&(Ot=null),Sn.forEach(El),_n.forEach(El)}function rn(e,t){e.blockedOn===t&&(e.blockedOn=null,go||(go=!0,Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority,Rf)))}function En(e){function t(a){return rn(a,e)}if(0<ea.length){rn(ea[0],e);for(var r=1;r<ea.length;r++){var n=ea[r];n.blockedOn===e&&(n.blockedOn=null)}}for(At!==null&&rn(At,e),Mt!==null&&rn(Mt,e),Ot!==null&&rn(Ot,e),Sn.forEach(t),_n.forEach(t),r=0;r<$t.length;r++)n=$t[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<$t.length&&(r=$t[0],r.blockedOn===null);)$u(r),r.blockedOn===null&&$t.shift()}var Ar=Nt.ReactCurrentBatchConfig,$a=!0;function Lf(e,t,r,n){var a=H,s=Ar.transition;Ar.transition=null;try{H=1,di(e,t,r,n)}finally{H=a,Ar.transition=s}}function If(e,t,r,n){var a=H,s=Ar.transition;Ar.transition=null;try{H=4,di(e,t,r,n)}finally{H=a,Ar.transition=s}}function di(e,t,r,n){if($a){var a=xo(e,t,r,n);if(a===null)Ls(e,t,n,Ra,r),_l(e,n);else if($f(a,e,t,r,n))n.stopPropagation();else if(_l(e,n),t&4&&-1<Df.indexOf(e)){for(;a!==null;){var s=Wn(a);if(s!==null&&zu(s),s=xo(e,t,r,n),s===null&&Ls(e,t,n,Ra,r),s===a)break;a=s}a!==null&&n.stopPropagation()}else Ls(e,t,n,null,r)}}var Ra=null;function xo(e,t,r,n){if(Ra=null,e=ii(n),e=Zt(e),e!==null)if(t=mr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=bu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ra=e,null}function Ru(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jf()){case li:return 1;case _u:return 4;case Ta:case Sf:return 16;case Eu:return 536870912;default:return 16}default:return 16}}var Lt=null,pi=null,va=null;function Lu(){if(va)return va;var e,t=pi,r=t.length,n,a="value"in Lt?Lt.value:Lt.textContent,s=a.length;for(e=0;e<r&&t[e]===a[e];e++);var i=r-e;for(n=1;n<=i&&t[r-n]===a[s-n];n++);return va=a.slice(e,1<n?1-n:void 0)}function ya(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ta(){return!0}function Nl(){return!1}function We(e){function t(r,n,a,s,i){this._reactName=r,this._targetInst=a,this.type=n,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ta:Nl,this.isPropagationStopped=Nl,this}return ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ta)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ta)},persist:function(){},isPersistent:ta}),t}var Jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fi=We(Jr),Bn=ae({},Jr,{view:0,detail:0}),Af=We(Bn),Es,Ns,nn,ns=ae({},Bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nn&&(nn&&e.type==="mousemove"?(Es=e.screenX-nn.screenX,Ns=e.screenY-nn.screenY):Ns=Es=0,nn=e),Es)},movementY:function(e){return"movementY"in e?e.movementY:Ns}}),Cl=We(ns),Mf=ae({},ns,{dataTransfer:0}),Of=We(Mf),Ff=ae({},Bn,{relatedTarget:0}),Cs=We(Ff),Uf=ae({},Jr,{animationName:0,elapsedTime:0,pseudoElement:0}),Bf=We(Uf),Wf=ae({},Jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qf=We(Wf),Vf=ae({},Jr,{data:0}),zl=We(Vf),Hf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kf[e])?!!t[e]:!1}function mi(){return Gf}var Jf=ae({},Bn,{key:function(e){if(e.key){var t=Hf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ya(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mi,charCode:function(e){return e.type==="keypress"?ya(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ya(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yf=We(Jf),Xf=ae({},ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pl=We(Xf),Zf=ae({},Bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mi}),em=We(Zf),tm=ae({},Jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),rm=We(tm),nm=ae({},ns,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),am=We(nm),sm=[9,13,27,32],hi=jt&&"CompositionEvent"in window,mn=null;jt&&"documentMode"in document&&(mn=document.documentMode);var om=jt&&"TextEvent"in window&&!mn,Iu=jt&&(!hi||mn&&8<mn&&11>=mn),Tl=" ",Dl=!1;function Au(e,t){switch(e){case"keyup":return sm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jr=!1;function im(e,t){switch(e){case"compositionend":return Mu(t);case"keypress":return t.which!==32?null:(Dl=!0,Tl);case"textInput":return e=t.data,e===Tl&&Dl?null:e;default:return null}}function lm(e,t){if(jr)return e==="compositionend"||!hi&&Au(e,t)?(e=Lu(),va=pi=Lt=null,jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Iu&&t.locale!=="ko"?null:t.data;default:return null}}var cm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $l(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cm[e.type]:t==="textarea"}function Ou(e,t,r,n){gu(n),t=La(t,"onChange"),0<t.length&&(r=new fi("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var hn=null,Nn=null;function um(e){Ju(e,0)}function as(e){var t=Er(e);if(cu(t))return e}function dm(e,t){if(e==="change")return t}var Fu=!1;if(jt){var zs;if(jt){var Ps="oninput"in document;if(!Ps){var Rl=document.createElement("div");Rl.setAttribute("oninput","return;"),Ps=typeof Rl.oninput=="function"}zs=Ps}else zs=!1;Fu=zs&&(!document.documentMode||9<document.documentMode)}function Ll(){hn&&(hn.detachEvent("onpropertychange",Uu),Nn=hn=null)}function Uu(e){if(e.propertyName==="value"&&as(Nn)){var t=[];Ou(t,Nn,e,ii(e)),wu(um,t)}}function pm(e,t,r){e==="focusin"?(Ll(),hn=t,Nn=r,hn.attachEvent("onpropertychange",Uu)):e==="focusout"&&Ll()}function fm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return as(Nn)}function mm(e,t){if(e==="click")return as(t)}function hm(e,t){if(e==="input"||e==="change")return as(t)}function gm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:gm;function Cn(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!Xs.call(t,a)||!it(e[a],t[a]))return!1}return!0}function Il(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Al(e,t){var r=Il(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Il(r)}}function Bu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wu(){for(var e=window,t=Ca();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ca(e.document)}return t}function gi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function xm(e){var t=Wu(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Bu(r.ownerDocument.documentElement,r)){if(n!==null&&gi(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,s=Math.min(n.start,a);n=n.end===void 0?s:Math.min(n.end,a),!e.extend&&s>n&&(a=n,n=s,s=a),a=Al(r,s);var i=Al(r,n);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),s>n?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vm=jt&&"documentMode"in document&&11>=document.documentMode,Sr=null,vo=null,gn=null,yo=!1;function Ml(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;yo||Sr==null||Sr!==Ca(n)||(n=Sr,"selectionStart"in n&&gi(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),gn&&Cn(gn,n)||(gn=n,n=La(vo,"onSelect"),0<n.length&&(t=new fi("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Sr)))}function ra(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var _r={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionend:ra("Transition","TransitionEnd")},Ts={},qu={};jt&&(qu=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);function ss(e){if(Ts[e])return Ts[e];if(!_r[e])return e;var t=_r[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in qu)return Ts[e]=t[r];return e}var Vu=ss("animationend"),Hu=ss("animationiteration"),Qu=ss("animationstart"),Ku=ss("transitionend"),Gu=new Map,Ol="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kt(e,t){Gu.set(e,t),fr(t,[e])}for(var Ds=0;Ds<Ol.length;Ds++){var $s=Ol[Ds],ym=$s.toLowerCase(),wm=$s[0].toUpperCase()+$s.slice(1);Kt(ym,"on"+wm)}Kt(Vu,"onAnimationEnd");Kt(Hu,"onAnimationIteration");Kt(Qu,"onAnimationStart");Kt("dblclick","onDoubleClick");Kt("focusin","onFocus");Kt("focusout","onBlur");Kt(Ku,"onTransitionEnd");Br("onMouseEnter",["mouseout","mouseover"]);Br("onMouseLeave",["mouseout","mouseover"]);Br("onPointerEnter",["pointerout","pointerover"]);Br("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bm=new Set("cancel close invalid load scroll toggle".split(" ").concat(dn));function Fl(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,yf(n,t,void 0,e),e.currentTarget=null}function Ju(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],a=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var i=n.length-1;0<=i;i--){var l=n[i],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&a.isPropagationStopped())break e;Fl(a,l,u),s=c}else for(i=0;i<n.length;i++){if(l=n[i],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&a.isPropagationStopped())break e;Fl(a,l,u),s=c}}}if(Pa)throw e=mo,Pa=!1,mo=null,e}function Y(e,t){var r=t[So];r===void 0&&(r=t[So]=new Set);var n=e+"__bubble";r.has(n)||(Yu(t,e,2,!1),r.add(n))}function Rs(e,t,r){var n=0;t&&(n|=4),Yu(r,e,n,t)}var na="_reactListening"+Math.random().toString(36).slice(2);function zn(e){if(!e[na]){e[na]=!0,au.forEach(function(r){r!=="selectionchange"&&(bm.has(r)||Rs(r,!1,e),Rs(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[na]||(t[na]=!0,Rs("selectionchange",!1,t))}}function Yu(e,t,r,n){switch(Ru(t)){case 1:var a=Lf;break;case 4:a=If;break;default:a=di}r=a.bind(null,t,r,e),a=void 0,!fo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Ls(e,t,r,n,a){var s=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var l=n.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(i===4)for(i=n.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;i=i.return}for(;l!==null;){if(i=Zt(l),i===null)return;if(c=i.tag,c===5||c===6){n=s=i;continue e}l=l.parentNode}}n=n.return}wu(function(){var u=s,h=ii(r),m=[];e:{var g=Gu.get(e);if(g!==void 0){var v=fi,w=e;switch(e){case"keypress":if(ya(r)===0)break e;case"keydown":case"keyup":v=Yf;break;case"focusin":w="focus",v=Cs;break;case"focusout":w="blur",v=Cs;break;case"beforeblur":case"afterblur":v=Cs;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Cl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Of;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=em;break;case Vu:case Hu:case Qu:v=Bf;break;case Ku:v=rm;break;case"scroll":v=Af;break;case"wheel":v=am;break;case"copy":case"cut":case"paste":v=qf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Pl}var b=(t&4)!==0,S=!b&&e==="scroll",f=b?g!==null?g+"Capture":null:g;b=[];for(var p=u,d;p!==null;){d=p;var x=d.stateNode;if(d.tag===5&&x!==null&&(d=x,f!==null&&(x=jn(p,f),x!=null&&b.push(Pn(p,x,d)))),S)break;p=p.return}0<b.length&&(g=new v(g,w,null,r,h),m.push({event:g,listeners:b}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&r!==uo&&(w=r.relatedTarget||r.fromElement)&&(Zt(w)||w[St]))break e;if((v||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,v?(w=r.relatedTarget||r.toElement,v=u,w=w?Zt(w):null,w!==null&&(S=mr(w),w!==S||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=u),v!==w)){if(b=Cl,x="onMouseLeave",f="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(b=Pl,x="onPointerLeave",f="onPointerEnter",p="pointer"),S=v==null?g:Er(v),d=w==null?g:Er(w),g=new b(x,p+"leave",v,r,h),g.target=S,g.relatedTarget=d,x=null,Zt(h)===u&&(b=new b(f,p+"enter",w,r,h),b.target=d,b.relatedTarget=S,x=b),S=x,v&&w)t:{for(b=v,f=w,p=0,d=b;d;d=vr(d))p++;for(d=0,x=f;x;x=vr(x))d++;for(;0<p-d;)b=vr(b),p--;for(;0<d-p;)f=vr(f),d--;for(;p--;){if(b===f||f!==null&&b===f.alternate)break t;b=vr(b),f=vr(f)}b=null}else b=null;v!==null&&Ul(m,g,v,b,!1),w!==null&&S!==null&&Ul(m,S,w,b,!0)}}e:{if(g=u?Er(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var j=dm;else if($l(g))if(Fu)j=hm;else{j=fm;var N=pm}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=mm);if(j&&(j=j(e,u))){Ou(m,j,r,h);break e}N&&N(e,g,u),e==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&so(g,"number",g.value)}switch(N=u?Er(u):window,e){case"focusin":($l(N)||N.contentEditable==="true")&&(Sr=N,vo=u,gn=null);break;case"focusout":gn=vo=Sr=null;break;case"mousedown":yo=!0;break;case"contextmenu":case"mouseup":case"dragend":yo=!1,Ml(m,r,h);break;case"selectionchange":if(vm)break;case"keydown":case"keyup":Ml(m,r,h)}var _;if(hi)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else jr?Au(e,r)&&(z="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(z="onCompositionStart");z&&(Iu&&r.locale!=="ko"&&(jr||z!=="onCompositionStart"?z==="onCompositionEnd"&&jr&&(_=Lu()):(Lt=h,pi="value"in Lt?Lt.value:Lt.textContent,jr=!0)),N=La(u,z),0<N.length&&(z=new zl(z,e,null,r,h),m.push({event:z,listeners:N}),_?z.data=_:(_=Mu(r),_!==null&&(z.data=_)))),(_=om?im(e,r):lm(e,r))&&(u=La(u,"onBeforeInput"),0<u.length&&(h=new zl("onBeforeInput","beforeinput",null,r,h),m.push({event:h,listeners:u}),h.data=_))}Ju(m,t)})}function Pn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function La(e,t){for(var r=t+"Capture",n=[];e!==null;){var a=e,s=a.stateNode;a.tag===5&&s!==null&&(a=s,s=jn(e,r),s!=null&&n.unshift(Pn(e,s,a)),s=jn(e,t),s!=null&&n.push(Pn(e,s,a))),e=e.return}return n}function vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ul(e,t,r,n,a){for(var s=t._reactName,i=[];r!==null&&r!==n;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===n)break;l.tag===5&&u!==null&&(l=u,a?(c=jn(r,s),c!=null&&i.unshift(Pn(r,c,l))):a||(c=jn(r,s),c!=null&&i.push(Pn(r,c,l)))),r=r.return}i.length!==0&&e.push({event:t,listeners:i})}var km=/\r\n?/g,jm=/\u0000|\uFFFD/g;function Bl(e){return(typeof e=="string"?e:""+e).replace(km,`
`).replace(jm,"")}function aa(e,t,r){if(t=Bl(t),Bl(e)!==t&&r)throw Error(E(425))}function Ia(){}var wo=null,bo=null;function ko(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jo=typeof setTimeout=="function"?setTimeout:void 0,Sm=typeof clearTimeout=="function"?clearTimeout:void 0,Wl=typeof Promise=="function"?Promise:void 0,_m=typeof queueMicrotask=="function"?queueMicrotask:typeof Wl<"u"?function(e){return Wl.resolve(null).then(e).catch(Em)}:jo;function Em(e){setTimeout(function(){throw e})}function Is(e,t){var r=t,n=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(n===0){e.removeChild(a),En(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=a}while(r);En(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ql(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),dt="__reactFiber$"+Yr,Tn="__reactProps$"+Yr,St="__reactContainer$"+Yr,So="__reactEvents$"+Yr,Nm="__reactListeners$"+Yr,Cm="__reactHandles$"+Yr;function Zt(e){var t=e[dt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[St]||r[dt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=ql(e);e!==null;){if(r=e[dt])return r;e=ql(e)}return t}e=r,r=e.parentNode}return null}function Wn(e){return e=e[dt]||e[St],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function os(e){return e[Tn]||null}var _o=[],Nr=-1;function Gt(e){return{current:e}}function X(e){0>Nr||(e.current=_o[Nr],_o[Nr]=null,Nr--)}function G(e,t){Nr++,_o[Nr]=e.current,e.current=t}var Ht={},Se=Gt(Ht),Re=Gt(!1),ir=Ht;function Wr(e,t){var r=e.type.contextTypes;if(!r)return Ht;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var a={},s;for(s in r)a[s]=t[s];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Le(e){return e=e.childContextTypes,e!=null}function Aa(){X(Re),X(Se)}function Vl(e,t,r){if(Se.current!==Ht)throw Error(E(168));G(Se,t),G(Re,r)}function Xu(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var a in n)if(!(a in t))throw Error(E(108,pf(e)||"Unknown",a));return ae({},r,n)}function Ma(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ht,ir=Se.current,G(Se,e),G(Re,Re.current),!0}function Hl(e,t,r){var n=e.stateNode;if(!n)throw Error(E(169));r?(e=Xu(e,t,ir),n.__reactInternalMemoizedMergedChildContext=e,X(Re),X(Se),G(Se,e)):X(Re),G(Re,r)}var vt=null,is=!1,As=!1;function Zu(e){vt===null?vt=[e]:vt.push(e)}function zm(e){is=!0,Zu(e)}function Jt(){if(!As&&vt!==null){As=!0;var e=0,t=H;try{var r=vt;for(H=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}vt=null,is=!1}catch(a){throw vt!==null&&(vt=vt.slice(e+1)),Su(li,Jt),a}finally{H=t,As=!1}}return null}var Cr=[],zr=0,Oa=null,Fa=0,qe=[],Ve=0,lr=null,wt=1,bt="";function Yt(e,t){Cr[zr++]=Fa,Cr[zr++]=Oa,Oa=e,Fa=t}function ed(e,t,r){qe[Ve++]=wt,qe[Ve++]=bt,qe[Ve++]=lr,lr=e;var n=wt;e=bt;var a=32-st(n)-1;n&=~(1<<a),r+=1;var s=32-st(t)+a;if(30<s){var i=a-a%5;s=(n&(1<<i)-1).toString(32),n>>=i,a-=i,wt=1<<32-st(t)+a|r<<a|n,bt=s+e}else wt=1<<s|r<<a|n,bt=e}function xi(e){e.return!==null&&(Yt(e,1),ed(e,1,0))}function vi(e){for(;e===Oa;)Oa=Cr[--zr],Cr[zr]=null,Fa=Cr[--zr],Cr[zr]=null;for(;e===lr;)lr=qe[--Ve],qe[Ve]=null,bt=qe[--Ve],qe[Ve]=null,wt=qe[--Ve],qe[Ve]=null}var Fe=null,Oe=null,Z=!1,nt=null;function td(e,t){var r=He(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Ql(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Fe=e,Oe=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Fe=e,Oe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=lr!==null?{id:wt,overflow:bt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=He(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Fe=e,Oe=null,!0):!1;default:return!1}}function Eo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function No(e){if(Z){var t=Oe;if(t){var r=t;if(!Ql(e,t)){if(Eo(e))throw Error(E(418));t=Ft(r.nextSibling);var n=Fe;t&&Ql(e,t)?td(n,r):(e.flags=e.flags&-4097|2,Z=!1,Fe=e)}}else{if(Eo(e))throw Error(E(418));e.flags=e.flags&-4097|2,Z=!1,Fe=e}}}function Kl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Fe=e}function sa(e){if(e!==Fe)return!1;if(!Z)return Kl(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ko(e.type,e.memoizedProps)),t&&(t=Oe)){if(Eo(e))throw rd(),Error(E(418));for(;t;)td(e,t),t=Ft(t.nextSibling)}if(Kl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Oe=Ft(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Oe=null}}else Oe=Fe?Ft(e.stateNode.nextSibling):null;return!0}function rd(){for(var e=Oe;e;)e=Ft(e.nextSibling)}function qr(){Oe=Fe=null,Z=!1}function yi(e){nt===null?nt=[e]:nt.push(e)}var Pm=Nt.ReactCurrentBatchConfig;function an(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(E(309));var n=r.stateNode}if(!n)throw Error(E(147,e));var a=n,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(i){var l=a.refs;i===null?delete l[s]:l[s]=i},t._stringRef=s,t)}if(typeof e!="string")throw Error(E(284));if(!r._owner)throw Error(E(290,e))}return e}function oa(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gl(e){var t=e._init;return t(e._payload)}function nd(e){function t(f,p){if(e){var d=f.deletions;d===null?(f.deletions=[p],f.flags|=16):d.push(p)}}function r(f,p){if(!e)return null;for(;p!==null;)t(f,p),p=p.sibling;return null}function n(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function a(f,p){return f=qt(f,p),f.index=0,f.sibling=null,f}function s(f,p,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<p?(f.flags|=2,p):d):(f.flags|=2,p)):(f.flags|=1048576,p)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,p,d,x){return p===null||p.tag!==6?(p=qs(d,f.mode,x),p.return=f,p):(p=a(p,d),p.return=f,p)}function c(f,p,d,x){var j=d.type;return j===kr?h(f,p,d.props.children,x,d.key):p!==null&&(p.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Tt&&Gl(j)===p.type)?(x=a(p,d.props),x.ref=an(f,p,d),x.return=f,x):(x=Ea(d.type,d.key,d.props,null,f.mode,x),x.ref=an(f,p,d),x.return=f,x)}function u(f,p,d,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==d.containerInfo||p.stateNode.implementation!==d.implementation?(p=Vs(d,f.mode,x),p.return=f,p):(p=a(p,d.children||[]),p.return=f,p)}function h(f,p,d,x,j){return p===null||p.tag!==7?(p=ar(d,f.mode,x,j),p.return=f,p):(p=a(p,d),p.return=f,p)}function m(f,p,d){if(typeof p=="string"&&p!==""||typeof p=="number")return p=qs(""+p,f.mode,d),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Gn:return d=Ea(p.type,p.key,p.props,null,f.mode,d),d.ref=an(f,null,p),d.return=f,d;case br:return p=Vs(p,f.mode,d),p.return=f,p;case Tt:var x=p._init;return m(f,x(p._payload),d)}if(cn(p)||Zr(p))return p=ar(p,f.mode,d,null),p.return=f,p;oa(f,p)}return null}function g(f,p,d,x){var j=p!==null?p.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return j!==null?null:l(f,p,""+d,x);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Gn:return d.key===j?c(f,p,d,x):null;case br:return d.key===j?u(f,p,d,x):null;case Tt:return j=d._init,g(f,p,j(d._payload),x)}if(cn(d)||Zr(d))return j!==null?null:h(f,p,d,x,null);oa(f,d)}return null}function v(f,p,d,x,j){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(d)||null,l(p,f,""+x,j);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Gn:return f=f.get(x.key===null?d:x.key)||null,c(p,f,x,j);case br:return f=f.get(x.key===null?d:x.key)||null,u(p,f,x,j);case Tt:var N=x._init;return v(f,p,d,N(x._payload),j)}if(cn(x)||Zr(x))return f=f.get(d)||null,h(p,f,x,j,null);oa(p,x)}return null}function w(f,p,d,x){for(var j=null,N=null,_=p,z=p=0,D=null;_!==null&&z<d.length;z++){_.index>z?(D=_,_=null):D=_.sibling;var R=g(f,_,d[z],x);if(R===null){_===null&&(_=D);break}e&&_&&R.alternate===null&&t(f,_),p=s(R,p,z),N===null?j=R:N.sibling=R,N=R,_=D}if(z===d.length)return r(f,_),Z&&Yt(f,z),j;if(_===null){for(;z<d.length;z++)_=m(f,d[z],x),_!==null&&(p=s(_,p,z),N===null?j=_:N.sibling=_,N=_);return Z&&Yt(f,z),j}for(_=n(f,_);z<d.length;z++)D=v(_,f,z,d[z],x),D!==null&&(e&&D.alternate!==null&&_.delete(D.key===null?z:D.key),p=s(D,p,z),N===null?j=D:N.sibling=D,N=D);return e&&_.forEach(function(q){return t(f,q)}),Z&&Yt(f,z),j}function b(f,p,d,x){var j=Zr(d);if(typeof j!="function")throw Error(E(150));if(d=j.call(d),d==null)throw Error(E(151));for(var N=j=null,_=p,z=p=0,D=null,R=d.next();_!==null&&!R.done;z++,R=d.next()){_.index>z?(D=_,_=null):D=_.sibling;var q=g(f,_,R.value,x);if(q===null){_===null&&(_=D);break}e&&_&&q.alternate===null&&t(f,_),p=s(q,p,z),N===null?j=q:N.sibling=q,N=q,_=D}if(R.done)return r(f,_),Z&&Yt(f,z),j;if(_===null){for(;!R.done;z++,R=d.next())R=m(f,R.value,x),R!==null&&(p=s(R,p,z),N===null?j=R:N.sibling=R,N=R);return Z&&Yt(f,z),j}for(_=n(f,_);!R.done;z++,R=d.next())R=v(_,f,z,R.value,x),R!==null&&(e&&R.alternate!==null&&_.delete(R.key===null?z:R.key),p=s(R,p,z),N===null?j=R:N.sibling=R,N=R);return e&&_.forEach(function(_e){return t(f,_e)}),Z&&Yt(f,z),j}function S(f,p,d,x){if(typeof d=="object"&&d!==null&&d.type===kr&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Gn:e:{for(var j=d.key,N=p;N!==null;){if(N.key===j){if(j=d.type,j===kr){if(N.tag===7){r(f,N.sibling),p=a(N,d.props.children),p.return=f,f=p;break e}}else if(N.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Tt&&Gl(j)===N.type){r(f,N.sibling),p=a(N,d.props),p.ref=an(f,N,d),p.return=f,f=p;break e}r(f,N);break}else t(f,N);N=N.sibling}d.type===kr?(p=ar(d.props.children,f.mode,x,d.key),p.return=f,f=p):(x=Ea(d.type,d.key,d.props,null,f.mode,x),x.ref=an(f,p,d),x.return=f,f=x)}return i(f);case br:e:{for(N=d.key;p!==null;){if(p.key===N)if(p.tag===4&&p.stateNode.containerInfo===d.containerInfo&&p.stateNode.implementation===d.implementation){r(f,p.sibling),p=a(p,d.children||[]),p.return=f,f=p;break e}else{r(f,p);break}else t(f,p);p=p.sibling}p=Vs(d,f.mode,x),p.return=f,f=p}return i(f);case Tt:return N=d._init,S(f,p,N(d._payload),x)}if(cn(d))return w(f,p,d,x);if(Zr(d))return b(f,p,d,x);oa(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,p!==null&&p.tag===6?(r(f,p.sibling),p=a(p,d),p.return=f,f=p):(r(f,p),p=qs(d,f.mode,x),p.return=f,f=p),i(f)):r(f,p)}return S}var Vr=nd(!0),ad=nd(!1),Ua=Gt(null),Ba=null,Pr=null,wi=null;function bi(){wi=Pr=Ba=null}function ki(e){var t=Ua.current;X(Ua),e._currentValue=t}function Co(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Mr(e,t){Ba=e,wi=Pr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($e=!0),e.firstContext=null)}function Ge(e){var t=e._currentValue;if(wi!==e)if(e={context:e,memoizedValue:t,next:null},Pr===null){if(Ba===null)throw Error(E(308));Pr=e,Ba.dependencies={lanes:0,firstContext:e}}else Pr=Pr.next=e;return t}var er=null;function ji(e){er===null?er=[e]:er.push(e)}function sd(e,t,r,n){var a=t.interleaved;return a===null?(r.next=r,ji(t)):(r.next=a.next,a.next=r),t.interleaved=r,_t(e,n)}function _t(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Dt=!1;function Si(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function od(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,W&2){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,_t(e,r)}return a=n.interleaved,a===null?(t.next=t,ji(n)):(t.next=a.next,a.next=t),n.interleaved=t,_t(e,r)}function wa(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ci(e,r)}}function Jl(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var a=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?a=s=i:s=s.next=i,r=r.next}while(r!==null);s===null?a=s=t:s=s.next=t}else a=s=t;r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Wa(e,t,r,n){var a=e.updateQueue;Dt=!1;var s=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,u=c.next;c.next=null,i===null?s=u:i.next=u,i=c;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==i&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=c))}if(s!==null){var m=a.baseState;i=0,h=u=c=null,l=s;do{var g=l.lane,v=l.eventTime;if((n&g)===g){h!==null&&(h=h.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,b=l;switch(g=t,v=r,b.tag){case 1:if(w=b.payload,typeof w=="function"){m=w.call(v,m,g);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=b.payload,g=typeof w=="function"?w.call(v,m,g):w,g==null)break e;m=ae({},m,g);break e;case 2:Dt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=a.effects,g===null?a.effects=[l]:g.push(l))}else v={eventTime:v,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=v,c=m):h=h.next=v,i|=g;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;g=l,l=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(!0);if(h===null&&(c=m),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=h,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else s===null&&(a.shared.lanes=0);ur|=i,e.lanes=i,e.memoizedState=m}}function Yl(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],a=n.callback;if(a!==null){if(n.callback=null,n=r,typeof a!="function")throw Error(E(191,a));a.call(n)}}}var qn={},mt=Gt(qn),Dn=Gt(qn),$n=Gt(qn);function tr(e){if(e===qn)throw Error(E(174));return e}function _i(e,t){switch(G($n,t),G(Dn,e),G(mt,qn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:io(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=io(t,e)}X(mt),G(mt,t)}function Hr(){X(mt),X(Dn),X($n)}function id(e){tr($n.current);var t=tr(mt.current),r=io(t,e.type);t!==r&&(G(Dn,e),G(mt,r))}function Ei(e){Dn.current===e&&(X(mt),X(Dn))}var te=Gt(0);function qa(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ms=[];function Ni(){for(var e=0;e<Ms.length;e++)Ms[e]._workInProgressVersionPrimary=null;Ms.length=0}var ba=Nt.ReactCurrentDispatcher,Os=Nt.ReactCurrentBatchConfig,cr=0,ne=null,de=null,fe=null,Va=!1,xn=!1,Rn=0,Tm=0;function we(){throw Error(E(321))}function Ci(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!it(e[r],t[r]))return!1;return!0}function zi(e,t,r,n,a,s){if(cr=s,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ba.current=e===null||e.memoizedState===null?Lm:Im,e=r(n,a),xn){s=0;do{if(xn=!1,Rn=0,25<=s)throw Error(E(301));s+=1,fe=de=null,t.updateQueue=null,ba.current=Am,e=r(n,a)}while(xn)}if(ba.current=Ha,t=de!==null&&de.next!==null,cr=0,fe=de=ne=null,Va=!1,t)throw Error(E(300));return e}function Pi(){var e=Rn!==0;return Rn=0,e}function ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?ne.memoizedState=fe=e:fe=fe.next=e,fe}function Je(){if(de===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=fe===null?ne.memoizedState:fe.next;if(t!==null)fe=t,de=e;else{if(e===null)throw Error(E(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},fe===null?ne.memoizedState=fe=e:fe=fe.next=e}return fe}function Ln(e,t){return typeof t=="function"?t(e):t}function Fs(e){var t=Je(),r=t.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=e;var n=de,a=n.baseQueue,s=r.pending;if(s!==null){if(a!==null){var i=a.next;a.next=s.next,s.next=i}n.baseQueue=a=s,r.pending=null}if(a!==null){s=a.next,n=n.baseState;var l=i=null,c=null,u=s;do{var h=u.lane;if((cr&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var m={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=m,i=n):c=c.next=m,ne.lanes|=h,ur|=h}u=u.next}while(u!==null&&u!==s);c===null?i=n:c.next=l,it(n,t.memoizedState)||($e=!0),t.memoizedState=n,t.baseState=i,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){a=e;do s=a.lane,ne.lanes|=s,ur|=s,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Us(e){var t=Je(),r=t.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=e;var n=r.dispatch,a=r.pending,s=t.memoizedState;if(a!==null){r.pending=null;var i=a=a.next;do s=e(s,i.action),i=i.next;while(i!==a);it(s,t.memoizedState)||($e=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),r.lastRenderedState=s}return[s,n]}function ld(){}function cd(e,t){var r=ne,n=Je(),a=t(),s=!it(n.memoizedState,a);if(s&&(n.memoizedState=a,$e=!0),n=n.queue,Ti(pd.bind(null,r,n,e),[e]),n.getSnapshot!==t||s||fe!==null&&fe.memoizedState.tag&1){if(r.flags|=2048,In(9,dd.bind(null,r,n,a,t),void 0,null),me===null)throw Error(E(349));cr&30||ud(r,t,a)}return a}function ud(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function dd(e,t,r,n){t.value=r,t.getSnapshot=n,fd(t)&&md(e)}function pd(e,t,r){return r(function(){fd(t)&&md(e)})}function fd(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!it(e,r)}catch{return!0}}function md(e){var t=_t(e,1);t!==null&&ot(t,e,1,-1)}function Xl(e){var t=ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ln,lastRenderedState:e},t.queue=e,e=e.dispatch=Rm.bind(null,ne,e),[t.memoizedState,e]}function In(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function hd(){return Je().memoizedState}function ka(e,t,r,n){var a=ut();ne.flags|=e,a.memoizedState=In(1|t,r,void 0,n===void 0?null:n)}function ls(e,t,r,n){var a=Je();n=n===void 0?null:n;var s=void 0;if(de!==null){var i=de.memoizedState;if(s=i.destroy,n!==null&&Ci(n,i.deps)){a.memoizedState=In(t,r,s,n);return}}ne.flags|=e,a.memoizedState=In(1|t,r,s,n)}function Zl(e,t){return ka(8390656,8,e,t)}function Ti(e,t){return ls(2048,8,e,t)}function gd(e,t){return ls(4,2,e,t)}function xd(e,t){return ls(4,4,e,t)}function vd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yd(e,t,r){return r=r!=null?r.concat([e]):null,ls(4,4,vd.bind(null,t,e),r)}function Di(){}function wd(e,t){var r=Je();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Ci(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function bd(e,t){var r=Je();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Ci(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function kd(e,t,r){return cr&21?(it(r,t)||(r=Nu(),ne.lanes|=r,ur|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=r)}function Dm(e,t){var r=H;H=r!==0&&4>r?r:4,e(!0);var n=Os.transition;Os.transition={};try{e(!1),t()}finally{H=r,Os.transition=n}}function jd(){return Je().memoizedState}function $m(e,t,r){var n=Wt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Sd(e))_d(t,r);else if(r=sd(e,t,r,n),r!==null){var a=ze();ot(r,e,n,a),Ed(r,t,n)}}function Rm(e,t,r){var n=Wt(e),a={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Sd(e))_d(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var i=t.lastRenderedState,l=s(i,r);if(a.hasEagerState=!0,a.eagerState=l,it(l,i)){var c=t.interleaved;c===null?(a.next=a,ji(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}r=sd(e,t,a,n),r!==null&&(a=ze(),ot(r,e,n,a),Ed(r,t,n))}}function Sd(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function _d(e,t){xn=Va=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Ed(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ci(e,r)}}var Ha={readContext:Ge,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},Lm={readContext:Ge,useCallback:function(e,t){return ut().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:Zl,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ka(4194308,4,vd.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ka(4194308,4,e,t)},useInsertionEffect:function(e,t){return ka(4,2,e,t)},useMemo:function(e,t){var r=ut();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=ut();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=$m.bind(null,ne,e),[n.memoizedState,e]},useRef:function(e){var t=ut();return e={current:e},t.memoizedState=e},useState:Xl,useDebugValue:Di,useDeferredValue:function(e){return ut().memoizedState=e},useTransition:function(){var e=Xl(!1),t=e[0];return e=Dm.bind(null,e[1]),ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ne,a=ut();if(Z){if(r===void 0)throw Error(E(407));r=r()}else{if(r=t(),me===null)throw Error(E(349));cr&30||ud(n,t,r)}a.memoizedState=r;var s={value:r,getSnapshot:t};return a.queue=s,Zl(pd.bind(null,n,s,e),[e]),n.flags|=2048,In(9,dd.bind(null,n,s,r,t),void 0,null),r},useId:function(){var e=ut(),t=me.identifierPrefix;if(Z){var r=bt,n=wt;r=(n&~(1<<32-st(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Rn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Tm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Im={readContext:Ge,useCallback:wd,useContext:Ge,useEffect:Ti,useImperativeHandle:yd,useInsertionEffect:gd,useLayoutEffect:xd,useMemo:bd,useReducer:Fs,useRef:hd,useState:function(){return Fs(Ln)},useDebugValue:Di,useDeferredValue:function(e){var t=Je();return kd(t,de.memoizedState,e)},useTransition:function(){var e=Fs(Ln)[0],t=Je().memoizedState;return[e,t]},useMutableSource:ld,useSyncExternalStore:cd,useId:jd,unstable_isNewReconciler:!1},Am={readContext:Ge,useCallback:wd,useContext:Ge,useEffect:Ti,useImperativeHandle:yd,useInsertionEffect:gd,useLayoutEffect:xd,useMemo:bd,useReducer:Us,useRef:hd,useState:function(){return Us(Ln)},useDebugValue:Di,useDeferredValue:function(e){var t=Je();return de===null?t.memoizedState=e:kd(t,de.memoizedState,e)},useTransition:function(){var e=Us(Ln)[0],t=Je().memoizedState;return[e,t]},useMutableSource:ld,useSyncExternalStore:cd,useId:jd,unstable_isNewReconciler:!1};function tt(e,t){if(e&&e.defaultProps){t=ae({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function zo(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:ae({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var cs={isMounted:function(e){return(e=e._reactInternals)?mr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=ze(),a=Wt(e),s=kt(n,a);s.payload=t,r!=null&&(s.callback=r),t=Ut(e,s,a),t!==null&&(ot(t,e,a,n),wa(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=ze(),a=Wt(e),s=kt(n,a);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=Ut(e,s,a),t!==null&&(ot(t,e,a,n),wa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ze(),n=Wt(e),a=kt(r,n);a.tag=2,t!=null&&(a.callback=t),t=Ut(e,a,n),t!==null&&(ot(t,e,n,r),wa(t,e,n))}};function ec(e,t,r,n,a,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,i):t.prototype&&t.prototype.isPureReactComponent?!Cn(r,n)||!Cn(a,s):!0}function Nd(e,t,r){var n=!1,a=Ht,s=t.contextType;return typeof s=="object"&&s!==null?s=Ge(s):(a=Le(t)?ir:Se.current,n=t.contextTypes,s=(n=n!=null)?Wr(e,a):Ht),t=new t(r,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cs,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=s),t}function tc(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&cs.enqueueReplaceState(t,t.state,null)}function Po(e,t,r,n){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},Si(e);var s=t.contextType;typeof s=="object"&&s!==null?a.context=Ge(s):(s=Le(t)?ir:Se.current,a.context=Wr(e,s)),a.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(zo(e,t,s,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&cs.enqueueReplaceState(a,a.state,null),Wa(e,r,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Qr(e,t){try{var r="",n=t;do r+=df(n),n=n.return;while(n);var a=r}catch(s){a=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:a,digest:null}}function Bs(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function To(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Mm=typeof WeakMap=="function"?WeakMap:Map;function Cd(e,t,r){r=kt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Ka||(Ka=!0,Uo=n),To(e,t)},r}function zd(e,t,r){r=kt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=t.value;r.payload=function(){return n(a)},r.callback=function(){To(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){To(e,t),typeof n!="function"&&(Bt===null?Bt=new Set([this]):Bt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),r}function rc(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Mm;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(r)||(a.add(r),e=Xm.bind(null,e,t,r),t.then(e,e))}function nc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ac(e,t,r,n,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=kt(-1,1),t.tag=2,Ut(r,t,1))),r.lanes|=1),e)}var Om=Nt.ReactCurrentOwner,$e=!1;function Ce(e,t,r,n){t.child=e===null?ad(t,null,r,n):Vr(t,e.child,r,n)}function sc(e,t,r,n,a){r=r.render;var s=t.ref;return Mr(t,a),n=zi(e,t,r,n,s,a),r=Pi(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Et(e,t,a)):(Z&&r&&xi(t),t.flags|=1,Ce(e,t,n,a),t.child)}function oc(e,t,r,n,a){if(e===null){var s=r.type;return typeof s=="function"&&!Fi(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=s,Pd(e,t,s,n,a)):(e=Ea(r.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&a)){var i=s.memoizedProps;if(r=r.compare,r=r!==null?r:Cn,r(i,n)&&e.ref===t.ref)return Et(e,t,a)}return t.flags|=1,e=qt(s,n),e.ref=t.ref,e.return=t,t.child=e}function Pd(e,t,r,n,a){if(e!==null){var s=e.memoizedProps;if(Cn(s,n)&&e.ref===t.ref)if($e=!1,t.pendingProps=n=s,(e.lanes&a)!==0)e.flags&131072&&($e=!0);else return t.lanes=e.lanes,Et(e,t,a)}return Do(e,t,r,n,a)}function Td(e,t,r){var n=t.pendingProps,a=n.children,s=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(Dr,Me),Me|=r;else{if(!(r&1073741824))return e=s!==null?s.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(Dr,Me),Me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:r,G(Dr,Me),Me|=n}else s!==null?(n=s.baseLanes|r,t.memoizedState=null):n=r,G(Dr,Me),Me|=n;return Ce(e,t,a,r),t.child}function Dd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Do(e,t,r,n,a){var s=Le(r)?ir:Se.current;return s=Wr(t,s),Mr(t,a),r=zi(e,t,r,n,s,a),n=Pi(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Et(e,t,a)):(Z&&n&&xi(t),t.flags|=1,Ce(e,t,r,a),t.child)}function ic(e,t,r,n,a){if(Le(r)){var s=!0;Ma(t)}else s=!1;if(Mr(t,a),t.stateNode===null)ja(e,t),Nd(t,r,n),Po(t,r,n,a),n=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var c=i.context,u=r.contextType;typeof u=="object"&&u!==null?u=Ge(u):(u=Le(r)?ir:Se.current,u=Wr(t,u));var h=r.getDerivedStateFromProps,m=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==n||c!==u)&&tc(t,i,n,u),Dt=!1;var g=t.memoizedState;i.state=g,Wa(t,n,i,a),c=t.memoizedState,l!==n||g!==c||Re.current||Dt?(typeof h=="function"&&(zo(t,r,h,n),c=t.memoizedState),(l=Dt||ec(t,r,l,n,g,c,u))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),i.props=n,i.state=c,i.context=u,n=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,od(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:tt(t.type,l),i.props=u,m=t.pendingProps,g=i.context,c=r.contextType,typeof c=="object"&&c!==null?c=Ge(c):(c=Le(r)?ir:Se.current,c=Wr(t,c));var v=r.getDerivedStateFromProps;(h=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==m||g!==c)&&tc(t,i,n,c),Dt=!1,g=t.memoizedState,i.state=g,Wa(t,n,i,a);var w=t.memoizedState;l!==m||g!==w||Re.current||Dt?(typeof v=="function"&&(zo(t,r,v,n),w=t.memoizedState),(u=Dt||ec(t,r,u,n,g,w,c)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,w,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,w,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=w),i.props=n,i.state=w,i.context=c,n=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return $o(e,t,r,n,s,a)}function $o(e,t,r,n,a,s){Dd(e,t);var i=(t.flags&128)!==0;if(!n&&!i)return a&&Hl(t,r,!1),Et(e,t,s);n=t.stateNode,Om.current=t;var l=i&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&i?(t.child=Vr(t,e.child,null,s),t.child=Vr(t,null,l,s)):Ce(e,t,l,s),t.memoizedState=n.state,a&&Hl(t,r,!0),t.child}function $d(e){var t=e.stateNode;t.pendingContext?Vl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vl(e,t.context,!1),_i(e,t.containerInfo)}function lc(e,t,r,n,a){return qr(),yi(a),t.flags|=256,Ce(e,t,r,n),t.child}var Ro={dehydrated:null,treeContext:null,retryLane:0};function Lo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rd(e,t,r){var n=t.pendingProps,a=te.current,s=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),G(te,a&1),e===null)return No(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=n.children,e=n.fallback,s?(n=t.mode,s=t.child,i={mode:"hidden",children:i},!(n&1)&&s!==null?(s.childLanes=0,s.pendingProps=i):s=ps(i,n,0,null),e=ar(e,n,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Lo(r),t.memoizedState=Ro,e):$i(t,i));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Fm(e,t,i,n,l,a,r);if(s){s=n.fallback,i=t.mode,a=e.child,l=a.sibling;var c={mode:"hidden",children:n.children};return!(i&1)&&t.child!==a?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=qt(a,c),n.subtreeFlags=a.subtreeFlags&14680064),l!==null?s=qt(l,s):(s=ar(s,i,r,null),s.flags|=2),s.return=t,n.return=t,n.sibling=s,t.child=n,n=s,s=t.child,i=e.child.memoizedState,i=i===null?Lo(r):{baseLanes:i.baseLanes|r,cachePool:null,transitions:i.transitions},s.memoizedState=i,s.childLanes=e.childLanes&~r,t.memoizedState=Ro,n}return s=e.child,e=s.sibling,n=qt(s,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function $i(e,t){return t=ps({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ia(e,t,r,n){return n!==null&&yi(n),Vr(t,e.child,null,r),e=$i(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Fm(e,t,r,n,a,s,i){if(r)return t.flags&256?(t.flags&=-257,n=Bs(Error(E(422))),ia(e,t,i,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=n.fallback,a=t.mode,n=ps({mode:"visible",children:n.children},a,0,null),s=ar(s,a,i,null),s.flags|=2,n.return=t,s.return=t,n.sibling=s,t.child=n,t.mode&1&&Vr(t,e.child,null,i),t.child.memoizedState=Lo(i),t.memoizedState=Ro,s);if(!(t.mode&1))return ia(e,t,i,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var l=n.dgst;return n=l,s=Error(E(419)),n=Bs(s,n,void 0),ia(e,t,i,n)}if(l=(i&e.childLanes)!==0,$e||l){if(n=me,n!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(n.suspendedLanes|i)?0:a,a!==0&&a!==s.retryLane&&(s.retryLane=a,_t(e,a),ot(n,e,a,-1))}return Oi(),n=Bs(Error(E(421))),ia(e,t,i,n)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Zm.bind(null,e),a._reactRetry=t,null):(e=s.treeContext,Oe=Ft(a.nextSibling),Fe=t,Z=!0,nt=null,e!==null&&(qe[Ve++]=wt,qe[Ve++]=bt,qe[Ve++]=lr,wt=e.id,bt=e.overflow,lr=t),t=$i(t,n.children),t.flags|=4096,t)}function cc(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Co(e.return,t,r)}function Ws(e,t,r,n,a){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=r,s.tailMode=a)}function Ld(e,t,r){var n=t.pendingProps,a=n.revealOrder,s=n.tail;if(Ce(e,t,n.children,r),n=te.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cc(e,r,t);else if(e.tag===19)cc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(G(te,n),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&qa(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Ws(t,!1,a,r,s);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&qa(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Ws(t,!0,r,null,s);break;case"together":Ws(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ja(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Et(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),ur|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,r=qt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=qt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Um(e,t,r){switch(t.tag){case 3:$d(t),qr();break;case 5:id(t);break;case 1:Le(t.type)&&Ma(t);break;case 4:_i(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,a=t.memoizedProps.value;G(Ua,n._currentValue),n._currentValue=a;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(G(te,te.current&1),t.flags|=128,null):r&t.child.childLanes?Rd(e,t,r):(G(te,te.current&1),e=Et(e,t,r),e!==null?e.sibling:null);G(te,te.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Ld(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),G(te,te.current),n)break;return null;case 22:case 23:return t.lanes=0,Td(e,t,r)}return Et(e,t,r)}var Id,Io,Ad,Md;Id=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Io=function(){};Ad=function(e,t,r,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,tr(mt.current);var s=null;switch(r){case"input":a=no(e,a),n=no(e,n),s=[];break;case"select":a=ae({},a,{value:void 0}),n=ae({},n,{value:void 0}),s=[];break;case"textarea":a=oo(e,a),n=oo(e,n),s=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Ia)}lo(r,n);var i;r=null;for(u in a)if(!n.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(i in l)l.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bn.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in n){var c=n[u];if(l=a!=null?a[u]:void 0,n.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in c)c.hasOwnProperty(i)&&l[i]!==c[i]&&(r||(r={}),r[i]=c[i])}else r||(s||(s=[]),s.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Y("scroll",e),s||l===c||(s=[])):(s=s||[]).push(u,c))}r&&(s=s||[]).push("style",r);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Md=function(e,t,r,n){r!==n&&(t.flags|=4)};function sn(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Bm(e,t,r){var n=t.pendingProps;switch(vi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return Le(t.type)&&Aa(),be(t),null;case 3:return n=t.stateNode,Hr(),X(Re),X(Se),Ni(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(sa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,nt!==null&&(qo(nt),nt=null))),Io(e,t),be(t),null;case 5:Ei(t);var a=tr($n.current);if(r=t.type,e!==null&&t.stateNode!=null)Ad(e,t,r,n,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(E(166));return be(t),null}if(e=tr(mt.current),sa(t)){n=t.stateNode,r=t.type;var s=t.memoizedProps;switch(n[dt]=t,n[Tn]=s,e=(t.mode&1)!==0,r){case"dialog":Y("cancel",n),Y("close",n);break;case"iframe":case"object":case"embed":Y("load",n);break;case"video":case"audio":for(a=0;a<dn.length;a++)Y(dn[a],n);break;case"source":Y("error",n);break;case"img":case"image":case"link":Y("error",n),Y("load",n);break;case"details":Y("toggle",n);break;case"input":vl(n,s),Y("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},Y("invalid",n);break;case"textarea":wl(n,s),Y("invalid",n)}lo(r,s),a=null;for(var i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="children"?typeof l=="string"?n.textContent!==l&&(s.suppressHydrationWarning!==!0&&aa(n.textContent,l,e),a=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&aa(n.textContent,l,e),a=["children",""+l]):bn.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&Y("scroll",n)}switch(r){case"input":Jn(n),yl(n,s,!0);break;case"textarea":Jn(n),bl(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=Ia)}n=a,t.updateQueue=n,n!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=i.createElement(r,{is:n.is}):(e=i.createElement(r),r==="select"&&(i=e,n.multiple?i.multiple=!0:n.size&&(i.size=n.size))):e=i.createElementNS(e,r),e[dt]=t,e[Tn]=n,Id(e,t,!1,!1),t.stateNode=e;e:{switch(i=co(r,n),r){case"dialog":Y("cancel",e),Y("close",e),a=n;break;case"iframe":case"object":case"embed":Y("load",e),a=n;break;case"video":case"audio":for(a=0;a<dn.length;a++)Y(dn[a],e);a=n;break;case"source":Y("error",e),a=n;break;case"img":case"image":case"link":Y("error",e),Y("load",e),a=n;break;case"details":Y("toggle",e),a=n;break;case"input":vl(e,n),a=no(e,n),Y("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=ae({},n,{value:void 0}),Y("invalid",e);break;case"textarea":wl(e,n),a=oo(e,n),Y("invalid",e);break;default:a=n}lo(r,a),l=a;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?hu(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&fu(e,c)):s==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&kn(e,c):typeof c=="number"&&kn(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bn.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Y("scroll",e):c!=null&&ni(e,s,c,i))}switch(r){case"input":Jn(e),yl(e,n,!1);break;case"textarea":Jn(e),bl(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Vt(n.value));break;case"select":e.multiple=!!n.multiple,s=n.value,s!=null?Rr(e,!!n.multiple,s,!1):n.defaultValue!=null&&Rr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ia)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return be(t),null;case 6:if(e&&t.stateNode!=null)Md(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(E(166));if(r=tr($n.current),tr(mt.current),sa(t)){if(n=t.stateNode,r=t.memoizedProps,n[dt]=t,(s=n.nodeValue!==r)&&(e=Fe,e!==null))switch(e.tag){case 3:aa(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&aa(n.nodeValue,r,(e.mode&1)!==0)}s&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[dt]=t,t.stateNode=n}return be(t),null;case 13:if(X(te),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Oe!==null&&t.mode&1&&!(t.flags&128))rd(),qr(),t.flags|=98560,s=!1;else if(s=sa(t),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(E(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[dt]=t}else qr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),s=!1}else nt!==null&&(qo(nt),nt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?pe===0&&(pe=3):Oi())),t.updateQueue!==null&&(t.flags|=4),be(t),null);case 4:return Hr(),Io(e,t),e===null&&zn(t.stateNode.containerInfo),be(t),null;case 10:return ki(t.type._context),be(t),null;case 17:return Le(t.type)&&Aa(),be(t),null;case 19:if(X(te),s=t.memoizedState,s===null)return be(t),null;if(n=(t.flags&128)!==0,i=s.rendering,i===null)if(n)sn(s,!1);else{if(pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=qa(e),i!==null){for(t.flags|=128,sn(s,!1),n=i.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)s=r,e=n,s.flags&=14680066,i=s.alternate,i===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,s.type=i.type,e=i.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return G(te,te.current&1|2),t.child}e=e.sibling}s.tail!==null&&le()>Kr&&(t.flags|=128,n=!0,sn(s,!1),t.lanes=4194304)}else{if(!n)if(e=qa(i),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),sn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!i.alternate&&!Z)return be(t),null}else 2*le()-s.renderingStartTime>Kr&&r!==1073741824&&(t.flags|=128,n=!0,sn(s,!1),t.lanes=4194304);s.isBackwards?(i.sibling=t.child,t.child=i):(r=s.last,r!==null?r.sibling=i:t.child=i,s.last=i)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=le(),t.sibling=null,r=te.current,G(te,n?r&1|2:r&1),t):(be(t),null);case 22:case 23:return Mi(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Me&1073741824&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function Wm(e,t){switch(vi(t),t.tag){case 1:return Le(t.type)&&Aa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hr(),X(Re),X(Se),Ni(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ei(t),null;case 13:if(X(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));qr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(te),null;case 4:return Hr(),null;case 10:return ki(t.type._context),null;case 22:case 23:return Mi(),null;case 24:return null;default:return null}}var la=!1,je=!1,qm=typeof WeakSet=="function"?WeakSet:Set,P=null;function Tr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){oe(e,t,n)}else r.current=null}function Ao(e,t,r){try{r()}catch(n){oe(e,t,n)}}var uc=!1;function Vm(e,t){if(wo=$a,e=Wu(),gi(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var a=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var i=0,l=-1,c=-1,u=0,h=0,m=e,g=null;t:for(;;){for(var v;m!==r||a!==0&&m.nodeType!==3||(l=i+a),m!==s||n!==0&&m.nodeType!==3||(c=i+n),m.nodeType===3&&(i+=m.nodeValue.length),(v=m.firstChild)!==null;)g=m,m=v;for(;;){if(m===e)break t;if(g===r&&++u===a&&(l=i),g===s&&++h===n&&(c=i),(v=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=v}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(bo={focusedElem:e,selectionRange:r},$a=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var b=w.memoizedProps,S=w.memoizedState,f=t.stateNode,p=f.getSnapshotBeforeUpdate(t.elementType===t.type?b:tt(t.type,b),S);f.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(x){oe(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return w=uc,uc=!1,w}function vn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var s=a.destroy;a.destroy=void 0,s!==void 0&&Ao(t,r,s)}a=a.next}while(a!==n)}}function us(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Mo(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Od(e){var t=e.alternate;t!==null&&(e.alternate=null,Od(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[dt],delete t[Tn],delete t[So],delete t[Nm],delete t[Cm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fd(e){return e.tag===5||e.tag===3||e.tag===4}function dc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oo(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ia));else if(n!==4&&(e=e.child,e!==null))for(Oo(e,t,r),e=e.sibling;e!==null;)Oo(e,t,r),e=e.sibling}function Fo(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Fo(e,t,r),e=e.sibling;e!==null;)Fo(e,t,r),e=e.sibling}var ge=null,rt=!1;function Pt(e,t,r){for(r=r.child;r!==null;)Ud(e,t,r),r=r.sibling}function Ud(e,t,r){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(rs,r)}catch{}switch(r.tag){case 5:je||Tr(r,t);case 6:var n=ge,a=rt;ge=null,Pt(e,t,r),ge=n,rt=a,ge!==null&&(rt?(e=ge,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ge.removeChild(r.stateNode));break;case 18:ge!==null&&(rt?(e=ge,r=r.stateNode,e.nodeType===8?Is(e.parentNode,r):e.nodeType===1&&Is(e,r),En(e)):Is(ge,r.stateNode));break;case 4:n=ge,a=rt,ge=r.stateNode.containerInfo,rt=!0,Pt(e,t,r),ge=n,rt=a;break;case 0:case 11:case 14:case 15:if(!je&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var s=a,i=s.destroy;s=s.tag,i!==void 0&&(s&2||s&4)&&Ao(r,t,i),a=a.next}while(a!==n)}Pt(e,t,r);break;case 1:if(!je&&(Tr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){oe(r,t,l)}Pt(e,t,r);break;case 21:Pt(e,t,r);break;case 22:r.mode&1?(je=(n=je)||r.memoizedState!==null,Pt(e,t,r),je=n):Pt(e,t,r);break;default:Pt(e,t,r)}}function pc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new qm),t.forEach(function(n){var a=eh.bind(null,e,n);r.has(n)||(r.add(n),n.then(a,a))})}}function Ze(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var a=r[n];try{var s=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:ge=l.stateNode,rt=!1;break e;case 3:ge=l.stateNode.containerInfo,rt=!0;break e;case 4:ge=l.stateNode.containerInfo,rt=!0;break e}l=l.return}if(ge===null)throw Error(E(160));Ud(s,i,a),ge=null,rt=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){oe(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bd(t,e),t=t.sibling}function Bd(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ze(t,e),lt(e),n&4){try{vn(3,e,e.return),us(3,e)}catch(b){oe(e,e.return,b)}try{vn(5,e,e.return)}catch(b){oe(e,e.return,b)}}break;case 1:Ze(t,e),lt(e),n&512&&r!==null&&Tr(r,r.return);break;case 5:if(Ze(t,e),lt(e),n&512&&r!==null&&Tr(r,r.return),e.flags&32){var a=e.stateNode;try{kn(a,"")}catch(b){oe(e,e.return,b)}}if(n&4&&(a=e.stateNode,a!=null)){var s=e.memoizedProps,i=r!==null?r.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&uu(a,s),co(l,i);var u=co(l,s);for(i=0;i<c.length;i+=2){var h=c[i],m=c[i+1];h==="style"?hu(a,m):h==="dangerouslySetInnerHTML"?fu(a,m):h==="children"?kn(a,m):ni(a,h,m,u)}switch(l){case"input":ao(a,s);break;case"textarea":du(a,s);break;case"select":var g=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Rr(a,!!s.multiple,v,!1):g!==!!s.multiple&&(s.defaultValue!=null?Rr(a,!!s.multiple,s.defaultValue,!0):Rr(a,!!s.multiple,s.multiple?[]:"",!1))}a[Tn]=s}catch(b){oe(e,e.return,b)}}break;case 6:if(Ze(t,e),lt(e),n&4){if(e.stateNode===null)throw Error(E(162));a=e.stateNode,s=e.memoizedProps;try{a.nodeValue=s}catch(b){oe(e,e.return,b)}}break;case 3:if(Ze(t,e),lt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{En(t.containerInfo)}catch(b){oe(e,e.return,b)}break;case 4:Ze(t,e),lt(e);break;case 13:Ze(t,e),lt(e),a=e.child,a.flags&8192&&(s=a.memoizedState!==null,a.stateNode.isHidden=s,!s||a.alternate!==null&&a.alternate.memoizedState!==null||(Ii=le())),n&4&&pc(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(je=(u=je)||h,Ze(t,e),je=u):Ze(t,e),lt(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(P=e,h=e.child;h!==null;){for(m=P=h;P!==null;){switch(g=P,v=g.child,g.tag){case 0:case 11:case 14:case 15:vn(4,g,g.return);break;case 1:Tr(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){n=g,r=g.return;try{t=n,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(b){oe(n,r,b)}}break;case 5:Tr(g,g.return);break;case 22:if(g.memoizedState!==null){mc(m);continue}}v!==null?(v.return=g,P=v):mc(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{a=m.stateNode,u?(s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,c=m.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=mu("display",i))}catch(b){oe(e,e.return,b)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(b){oe(e,e.return,b)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ze(t,e),lt(e),n&4&&pc(e);break;case 21:break;default:Ze(t,e),lt(e)}}function lt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Fd(r)){var n=r;break e}r=r.return}throw Error(E(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(kn(a,""),n.flags&=-33);var s=dc(e);Fo(e,s,a);break;case 3:case 4:var i=n.stateNode.containerInfo,l=dc(e);Oo(e,l,i);break;default:throw Error(E(161))}}catch(c){oe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hm(e,t,r){P=e,Wd(e)}function Wd(e,t,r){for(var n=(e.mode&1)!==0;P!==null;){var a=P,s=a.child;if(a.tag===22&&n){var i=a.memoizedState!==null||la;if(!i){var l=a.alternate,c=l!==null&&l.memoizedState!==null||je;l=la;var u=je;if(la=i,(je=c)&&!u)for(P=a;P!==null;)i=P,c=i.child,i.tag===22&&i.memoizedState!==null?hc(a):c!==null?(c.return=i,P=c):hc(a);for(;s!==null;)P=s,Wd(s),s=s.sibling;P=a,la=l,je=u}fc(e)}else a.subtreeFlags&8772&&s!==null?(s.return=a,P=s):fc(e)}}function fc(e){for(;P!==null;){var t=P;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:je||us(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!je)if(r===null)n.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:tt(t.type,r.memoizedProps);n.componentDidUpdate(a,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Yl(t,s,n);break;case 3:var i=t.updateQueue;if(i!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Yl(t,i,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&En(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}je||t.flags&512&&Mo(t)}catch(g){oe(t,t.return,g)}}if(t===e){P=null;break}if(r=t.sibling,r!==null){r.return=t.return,P=r;break}P=t.return}}function mc(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var r=t.sibling;if(r!==null){r.return=t.return,P=r;break}P=t.return}}function hc(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{us(4,t)}catch(c){oe(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var a=t.return;try{n.componentDidMount()}catch(c){oe(t,a,c)}}var s=t.return;try{Mo(t)}catch(c){oe(t,s,c)}break;case 5:var i=t.return;try{Mo(t)}catch(c){oe(t,i,c)}}}catch(c){oe(t,t.return,c)}if(t===e){P=null;break}var l=t.sibling;if(l!==null){l.return=t.return,P=l;break}P=t.return}}var Qm=Math.ceil,Qa=Nt.ReactCurrentDispatcher,Ri=Nt.ReactCurrentOwner,Ke=Nt.ReactCurrentBatchConfig,W=0,me=null,ce=null,xe=0,Me=0,Dr=Gt(0),pe=0,An=null,ur=0,ds=0,Li=0,yn=null,De=null,Ii=0,Kr=1/0,xt=null,Ka=!1,Uo=null,Bt=null,ca=!1,It=null,Ga=0,wn=0,Bo=null,Sa=-1,_a=0;function ze(){return W&6?le():Sa!==-1?Sa:Sa=le()}function Wt(e){return e.mode&1?W&2&&xe!==0?xe&-xe:Pm.transition!==null?(_a===0&&(_a=Nu()),_a):(e=H,e!==0||(e=window.event,e=e===void 0?16:Ru(e.type)),e):1}function ot(e,t,r,n){if(50<wn)throw wn=0,Bo=null,Error(E(185));Un(e,r,n),(!(W&2)||e!==me)&&(e===me&&(!(W&2)&&(ds|=r),pe===4&&Rt(e,xe)),Ie(e,n),r===1&&W===0&&!(t.mode&1)&&(Kr=le()+500,is&&Jt()))}function Ie(e,t){var r=e.callbackNode;Pf(e,t);var n=Da(e,e===me?xe:0);if(n===0)r!==null&&Sl(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Sl(r),t===1)e.tag===0?zm(gc.bind(null,e)):Zu(gc.bind(null,e)),_m(function(){!(W&6)&&Jt()}),r=null;else{switch(Cu(n)){case 1:r=li;break;case 4:r=_u;break;case 16:r=Ta;break;case 536870912:r=Eu;break;default:r=Ta}r=Yd(r,qd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function qd(e,t){if(Sa=-1,_a=0,W&6)throw Error(E(327));var r=e.callbackNode;if(Or()&&e.callbackNode!==r)return null;var n=Da(e,e===me?xe:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Ja(e,n);else{t=n;var a=W;W|=2;var s=Hd();(me!==e||xe!==t)&&(xt=null,Kr=le()+500,nr(e,t));do try{Jm();break}catch(l){Vd(e,l)}while(!0);bi(),Qa.current=s,W=a,ce!==null?t=0:(me=null,xe=0,t=pe)}if(t!==0){if(t===2&&(a=ho(e),a!==0&&(n=a,t=Wo(e,a))),t===1)throw r=An,nr(e,0),Rt(e,n),Ie(e,le()),r;if(t===6)Rt(e,n);else{if(a=e.current.alternate,!(n&30)&&!Km(a)&&(t=Ja(e,n),t===2&&(s=ho(e),s!==0&&(n=s,t=Wo(e,s))),t===1))throw r=An,nr(e,0),Rt(e,n),Ie(e,le()),r;switch(e.finishedWork=a,e.finishedLanes=n,t){case 0:case 1:throw Error(E(345));case 2:Xt(e,De,xt);break;case 3:if(Rt(e,n),(n&130023424)===n&&(t=Ii+500-le(),10<t)){if(Da(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){ze(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=jo(Xt.bind(null,e,De,xt),t);break}Xt(e,De,xt);break;case 4:if(Rt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,a=-1;0<n;){var i=31-st(n);s=1<<i,i=t[i],i>a&&(a=i),n&=~s}if(n=a,n=le()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Qm(n/1960))-n,10<n){e.timeoutHandle=jo(Xt.bind(null,e,De,xt),n);break}Xt(e,De,xt);break;case 5:Xt(e,De,xt);break;default:throw Error(E(329))}}}return Ie(e,le()),e.callbackNode===r?qd.bind(null,e):null}function Wo(e,t){var r=yn;return e.current.memoizedState.isDehydrated&&(nr(e,t).flags|=256),e=Ja(e,t),e!==2&&(t=De,De=r,t!==null&&qo(t)),e}function qo(e){De===null?De=e:De.push.apply(De,e)}function Km(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var a=r[n],s=a.getSnapshot;a=a.value;try{if(!it(s(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rt(e,t){for(t&=~Li,t&=~ds,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-st(t),n=1<<r;e[r]=-1,t&=~n}}function gc(e){if(W&6)throw Error(E(327));Or();var t=Da(e,0);if(!(t&1))return Ie(e,le()),null;var r=Ja(e,t);if(e.tag!==0&&r===2){var n=ho(e);n!==0&&(t=n,r=Wo(e,n))}if(r===1)throw r=An,nr(e,0),Rt(e,t),Ie(e,le()),r;if(r===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Xt(e,De,xt),Ie(e,le()),null}function Ai(e,t){var r=W;W|=1;try{return e(t)}finally{W=r,W===0&&(Kr=le()+500,is&&Jt())}}function dr(e){It!==null&&It.tag===0&&!(W&6)&&Or();var t=W;W|=1;var r=Ke.transition,n=H;try{if(Ke.transition=null,H=1,e)return e()}finally{H=n,Ke.transition=r,W=t,!(W&6)&&Jt()}}function Mi(){Me=Dr.current,X(Dr)}function nr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Sm(r)),ce!==null)for(r=ce.return;r!==null;){var n=r;switch(vi(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Aa();break;case 3:Hr(),X(Re),X(Se),Ni();break;case 5:Ei(n);break;case 4:Hr();break;case 13:X(te);break;case 19:X(te);break;case 10:ki(n.type._context);break;case 22:case 23:Mi()}r=r.return}if(me=e,ce=e=qt(e.current,null),xe=Me=t,pe=0,An=null,Li=ds=ur=0,De=yn=null,er!==null){for(t=0;t<er.length;t++)if(r=er[t],n=r.interleaved,n!==null){r.interleaved=null;var a=n.next,s=r.pending;if(s!==null){var i=s.next;s.next=a,n.next=i}r.pending=n}er=null}return e}function Vd(e,t){do{var r=ce;try{if(bi(),ba.current=Ha,Va){for(var n=ne.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}Va=!1}if(cr=0,fe=de=ne=null,xn=!1,Rn=0,Ri.current=null,r===null||r.return===null){pe=1,An=t,ce=null;break}e:{var s=e,i=r.return,l=r,c=t;if(t=xe,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=l,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=nc(i);if(v!==null){v.flags&=-257,ac(v,i,l,s,t),v.mode&1&&rc(s,u,t),t=v,c=u;var w=t.updateQueue;if(w===null){var b=new Set;b.add(c),t.updateQueue=b}else w.add(c);break e}else{if(!(t&1)){rc(s,u,t),Oi();break e}c=Error(E(426))}}else if(Z&&l.mode&1){var S=nc(i);if(S!==null){!(S.flags&65536)&&(S.flags|=256),ac(S,i,l,s,t),yi(Qr(c,l));break e}}s=c=Qr(c,l),pe!==4&&(pe=2),yn===null?yn=[s]:yn.push(s),s=i;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var f=Cd(s,c,t);Jl(s,f);break e;case 1:l=c;var p=s.type,d=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Bt===null||!Bt.has(d)))){s.flags|=65536,t&=-t,s.lanes|=t;var x=zd(s,l,t);Jl(s,x);break e}}s=s.return}while(s!==null)}Kd(r)}catch(j){t=j,ce===r&&r!==null&&(ce=r=r.return);continue}break}while(!0)}function Hd(){var e=Qa.current;return Qa.current=Ha,e===null?Ha:e}function Oi(){(pe===0||pe===3||pe===2)&&(pe=4),me===null||!(ur&268435455)&&!(ds&268435455)||Rt(me,xe)}function Ja(e,t){var r=W;W|=2;var n=Hd();(me!==e||xe!==t)&&(xt=null,nr(e,t));do try{Gm();break}catch(a){Vd(e,a)}while(!0);if(bi(),W=r,Qa.current=n,ce!==null)throw Error(E(261));return me=null,xe=0,pe}function Gm(){for(;ce!==null;)Qd(ce)}function Jm(){for(;ce!==null&&!bf();)Qd(ce)}function Qd(e){var t=Jd(e.alternate,e,Me);e.memoizedProps=e.pendingProps,t===null?Kd(e):ce=t,Ri.current=null}function Kd(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Wm(r,t),r!==null){r.flags&=32767,ce=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,ce=null;return}}else if(r=Bm(r,t,Me),r!==null){ce=r;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);pe===0&&(pe=5)}function Xt(e,t,r){var n=H,a=Ke.transition;try{Ke.transition=null,H=1,Ym(e,t,r,n)}finally{Ke.transition=a,H=n}return null}function Ym(e,t,r,n){do Or();while(It!==null);if(W&6)throw Error(E(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(Tf(e,s),e===me&&(ce=me=null,xe=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ca||(ca=!0,Yd(Ta,function(){return Or(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=Ke.transition,Ke.transition=null;var i=H;H=1;var l=W;W|=4,Ri.current=null,Vm(e,r),Bd(r,e),xm(bo),$a=!!wo,bo=wo=null,e.current=r,Hm(r),kf(),W=l,H=i,Ke.transition=s}else e.current=r;if(ca&&(ca=!1,It=e,Ga=a),s=e.pendingLanes,s===0&&(Bt=null),_f(r.stateNode),Ie(e,le()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],n(a.value,{componentStack:a.stack,digest:a.digest});if(Ka)throw Ka=!1,e=Uo,Uo=null,e;return Ga&1&&e.tag!==0&&Or(),s=e.pendingLanes,s&1?e===Bo?wn++:(wn=0,Bo=e):wn=0,Jt(),null}function Or(){if(It!==null){var e=Cu(Ga),t=Ke.transition,r=H;try{if(Ke.transition=null,H=16>e?16:e,It===null)var n=!1;else{if(e=It,It=null,Ga=0,W&6)throw Error(E(331));var a=W;for(W|=4,P=e.current;P!==null;){var s=P,i=s.child;if(P.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(P=u;P!==null;){var h=P;switch(h.tag){case 0:case 11:case 15:vn(8,h,s)}var m=h.child;if(m!==null)m.return=h,P=m;else for(;P!==null;){h=P;var g=h.sibling,v=h.return;if(Od(h),h===u){P=null;break}if(g!==null){g.return=v,P=g;break}P=v}}}var w=s.alternate;if(w!==null){var b=w.child;if(b!==null){w.child=null;do{var S=b.sibling;b.sibling=null,b=S}while(b!==null)}}P=s}}if(s.subtreeFlags&2064&&i!==null)i.return=s,P=i;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:vn(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,P=f;break e}P=s.return}}var p=e.current;for(P=p;P!==null;){i=P;var d=i.child;if(i.subtreeFlags&2064&&d!==null)d.return=i,P=d;else e:for(i=p;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:us(9,l)}}catch(j){oe(l,l.return,j)}if(l===i){P=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,P=x;break e}P=l.return}}if(W=a,Jt(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(rs,e)}catch{}n=!0}return n}finally{H=r,Ke.transition=t}}return!1}function xc(e,t,r){t=Qr(r,t),t=Cd(e,t,1),e=Ut(e,t,1),t=ze(),e!==null&&(Un(e,1,t),Ie(e,t))}function oe(e,t,r){if(e.tag===3)xc(e,e,r);else for(;t!==null;){if(t.tag===3){xc(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Bt===null||!Bt.has(n))){e=Qr(r,e),e=zd(t,e,1),t=Ut(t,e,1),e=ze(),t!==null&&(Un(t,1,e),Ie(t,e));break}}t=t.return}}function Xm(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=ze(),e.pingedLanes|=e.suspendedLanes&r,me===e&&(xe&r)===r&&(pe===4||pe===3&&(xe&130023424)===xe&&500>le()-Ii?nr(e,0):Li|=r),Ie(e,t)}function Gd(e,t){t===0&&(e.mode&1?(t=Zn,Zn<<=1,!(Zn&130023424)&&(Zn=4194304)):t=1);var r=ze();e=_t(e,t),e!==null&&(Un(e,t,r),Ie(e,r))}function Zm(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Gd(e,r)}function eh(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(E(314))}n!==null&&n.delete(t),Gd(e,r)}var Jd;Jd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)$e=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return $e=!1,Um(e,t,r);$e=!!(e.flags&131072)}else $e=!1,Z&&t.flags&1048576&&ed(t,Fa,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;ja(e,t),e=t.pendingProps;var a=Wr(t,Se.current);Mr(t,r),a=zi(null,t,n,e,a,r);var s=Pi();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Le(n)?(s=!0,Ma(t)):s=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Si(t),a.updater=cs,t.stateNode=a,a._reactInternals=t,Po(t,n,e,r),t=$o(null,t,n,!0,s,r)):(t.tag=0,Z&&s&&xi(t),Ce(null,t,a,r),t=t.child),t;case 16:n=t.elementType;e:{switch(ja(e,t),e=t.pendingProps,a=n._init,n=a(n._payload),t.type=n,a=t.tag=rh(n),e=tt(n,e),a){case 0:t=Do(null,t,n,e,r);break e;case 1:t=ic(null,t,n,e,r);break e;case 11:t=sc(null,t,n,e,r);break e;case 14:t=oc(null,t,n,tt(n.type,e),r);break e}throw Error(E(306,n,""))}return t;case 0:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:tt(n,a),Do(e,t,n,a,r);case 1:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:tt(n,a),ic(e,t,n,a,r);case 3:e:{if($d(t),e===null)throw Error(E(387));n=t.pendingProps,s=t.memoizedState,a=s.element,od(e,t),Wa(t,n,null,r);var i=t.memoizedState;if(n=i.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){a=Qr(Error(E(423)),t),t=lc(e,t,n,r,a);break e}else if(n!==a){a=Qr(Error(E(424)),t),t=lc(e,t,n,r,a);break e}else for(Oe=Ft(t.stateNode.containerInfo.firstChild),Fe=t,Z=!0,nt=null,r=ad(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(qr(),n===a){t=Et(e,t,r);break e}Ce(e,t,n,r)}t=t.child}return t;case 5:return id(t),e===null&&No(t),n=t.type,a=t.pendingProps,s=e!==null?e.memoizedProps:null,i=a.children,ko(n,a)?i=null:s!==null&&ko(n,s)&&(t.flags|=32),Dd(e,t),Ce(e,t,i,r),t.child;case 6:return e===null&&No(t),null;case 13:return Rd(e,t,r);case 4:return _i(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Vr(t,null,n,r):Ce(e,t,n,r),t.child;case 11:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:tt(n,a),sc(e,t,n,a,r);case 7:return Ce(e,t,t.pendingProps,r),t.child;case 8:return Ce(e,t,t.pendingProps.children,r),t.child;case 12:return Ce(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,a=t.pendingProps,s=t.memoizedProps,i=a.value,G(Ua,n._currentValue),n._currentValue=i,s!==null)if(it(s.value,i)){if(s.children===a.children&&!Re.current){t=Et(e,t,r);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){i=s.child;for(var c=l.firstContext;c!==null;){if(c.context===n){if(s.tag===1){c=kt(-1,r&-r),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}s.lanes|=r,c=s.alternate,c!==null&&(c.lanes|=r),Co(s.return,r,t),l.lanes|=r;break}c=c.next}}else if(s.tag===10)i=s.type===t.type?null:s.child;else if(s.tag===18){if(i=s.return,i===null)throw Error(E(341));i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),Co(i,r,t),i=s.sibling}else i=s.child;if(i!==null)i.return=s;else for(i=s;i!==null;){if(i===t){i=null;break}if(s=i.sibling,s!==null){s.return=i.return,i=s;break}i=i.return}s=i}Ce(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,n=t.pendingProps.children,Mr(t,r),a=Ge(a),n=n(a),t.flags|=1,Ce(e,t,n,r),t.child;case 14:return n=t.type,a=tt(n,t.pendingProps),a=tt(n.type,a),oc(e,t,n,a,r);case 15:return Pd(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:tt(n,a),ja(e,t),t.tag=1,Le(n)?(e=!0,Ma(t)):e=!1,Mr(t,r),Nd(t,n,a),Po(t,n,a,r),$o(null,t,n,!0,e,r);case 19:return Ld(e,t,r);case 22:return Td(e,t,r)}throw Error(E(156,t.tag))};function Yd(e,t){return Su(e,t)}function th(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,t,r,n){return new th(e,t,r,n)}function Fi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rh(e){if(typeof e=="function")return Fi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===si)return 11;if(e===oi)return 14}return 2}function qt(e,t){var r=e.alternate;return r===null?(r=He(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ea(e,t,r,n,a,s){var i=2;if(n=e,typeof e=="function")Fi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case kr:return ar(r.children,a,s,t);case ai:i=8,a|=8;break;case Zs:return e=He(12,r,t,a|2),e.elementType=Zs,e.lanes=s,e;case eo:return e=He(13,r,t,a),e.elementType=eo,e.lanes=s,e;case to:return e=He(19,r,t,a),e.elementType=to,e.lanes=s,e;case iu:return ps(r,a,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case su:i=10;break e;case ou:i=9;break e;case si:i=11;break e;case oi:i=14;break e;case Tt:i=16,n=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=He(i,r,t,a),t.elementType=e,t.type=n,t.lanes=s,t}function ar(e,t,r,n){return e=He(7,e,n,t),e.lanes=r,e}function ps(e,t,r,n){return e=He(22,e,n,t),e.elementType=iu,e.lanes=r,e.stateNode={isHidden:!1},e}function qs(e,t,r){return e=He(6,e,null,t),e.lanes=r,e}function Vs(e,t,r){return t=He(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nh(e,t,r,n,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_s(0),this.expirationTimes=_s(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_s(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ui(e,t,r,n,a,s,i,l,c){return e=new nh(e,t,r,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=He(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Si(s),e}function ah(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:br,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Xd(e){if(!e)return Ht;e=e._reactInternals;e:{if(mr(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Le(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var r=e.type;if(Le(r))return Xu(e,r,t)}return t}function Zd(e,t,r,n,a,s,i,l,c){return e=Ui(r,n,!0,e,a,s,i,l,c),e.context=Xd(null),r=e.current,n=ze(),a=Wt(r),s=kt(n,a),s.callback=t??null,Ut(r,s,a),e.current.lanes=a,Un(e,a,n),Ie(e,n),e}function fs(e,t,r,n){var a=t.current,s=ze(),i=Wt(a);return r=Xd(r),t.context===null?t.context=r:t.pendingContext=r,t=kt(s,i),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Ut(a,t,i),e!==null&&(ot(e,a,i,s),wa(e,a,i)),i}function Ya(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Bi(e,t){vc(e,t),(e=e.alternate)&&vc(e,t)}function sh(){return null}var ep=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wi(e){this._internalRoot=e}ms.prototype.render=Wi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));fs(e,t,null,null)};ms.prototype.unmount=Wi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dr(function(){fs(null,e,null,null)}),t[St]=null}};function ms(e){this._internalRoot=e}ms.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<$t.length&&t!==0&&t<$t[r].priority;r++);$t.splice(r,0,e),r===0&&$u(e)}};function qi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yc(){}function oh(e,t,r,n,a){if(a){if(typeof n=="function"){var s=n;n=function(){var u=Ya(i);s.call(u)}}var i=Zd(t,n,e,0,null,!1,!1,"",yc);return e._reactRootContainer=i,e[St]=i.current,zn(e.nodeType===8?e.parentNode:e),dr(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var l=n;n=function(){var u=Ya(c);l.call(u)}}var c=Ui(e,0,!1,null,null,!1,!1,"",yc);return e._reactRootContainer=c,e[St]=c.current,zn(e.nodeType===8?e.parentNode:e),dr(function(){fs(t,c,r,n)}),c}function gs(e,t,r,n,a){var s=r._reactRootContainer;if(s){var i=s;if(typeof a=="function"){var l=a;a=function(){var c=Ya(i);l.call(c)}}fs(t,i,e,a)}else i=oh(r,t,e,a,n);return Ya(i)}zu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=un(t.pendingLanes);r!==0&&(ci(t,r|1),Ie(t,le()),!(W&6)&&(Kr=le()+500,Jt()))}break;case 13:dr(function(){var n=_t(e,1);if(n!==null){var a=ze();ot(n,e,1,a)}}),Bi(e,1)}};ui=function(e){if(e.tag===13){var t=_t(e,134217728);if(t!==null){var r=ze();ot(t,e,134217728,r)}Bi(e,134217728)}};Pu=function(e){if(e.tag===13){var t=Wt(e),r=_t(e,t);if(r!==null){var n=ze();ot(r,e,t,n)}Bi(e,t)}};Tu=function(){return H};Du=function(e,t){var r=H;try{return H=e,t()}finally{H=r}};po=function(e,t,r){switch(t){case"input":if(ao(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var a=os(n);if(!a)throw Error(E(90));cu(n),ao(n,a)}}}break;case"textarea":du(e,r);break;case"select":t=r.value,t!=null&&Rr(e,!!r.multiple,t,!1)}};vu=Ai;yu=dr;var ih={usingClientEntryPoint:!1,Events:[Wn,Er,os,gu,xu,Ai]},on={findFiberByHostInstance:Zt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lh={bundleType:on.bundleType,version:on.version,rendererPackageName:on.rendererPackageName,rendererConfig:on.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ku(e),e===null?null:e.stateNode},findFiberByHostInstance:on.findFiberByHostInstance||sh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ua.isDisabled&&ua.supportsFiber)try{rs=ua.inject(lh),ft=ua}catch{}}Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ih;Be.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qi(t))throw Error(E(200));return ah(e,t,null,r)};Be.createRoot=function(e,t){if(!qi(e))throw Error(E(299));var r=!1,n="",a=ep;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Ui(e,1,!1,null,null,r,!1,n,a),e[St]=t.current,zn(e.nodeType===8?e.parentNode:e),new Wi(t)};Be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=ku(t),e=e===null?null:e.stateNode,e};Be.flushSync=function(e){return dr(e)};Be.hydrate=function(e,t,r){if(!hs(t))throw Error(E(200));return gs(null,e,t,!0,r)};Be.hydrateRoot=function(e,t,r){if(!qi(e))throw Error(E(405));var n=r!=null&&r.hydratedSources||null,a=!1,s="",i=ep;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),t=Zd(t,null,e,1,r??null,a,!1,s,i),e[St]=t.current,zn(e),n)for(e=0;e<n.length;e++)r=n[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new ms(t)};Be.render=function(e,t,r){if(!hs(t))throw Error(E(200));return gs(null,e,t,!1,r)};Be.unmountComponentAtNode=function(e){if(!hs(e))throw Error(E(40));return e._reactRootContainer?(dr(function(){gs(null,null,e,!1,function(){e._reactRootContainer=null,e[St]=null})}),!0):!1};Be.unstable_batchedUpdates=Ai;Be.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!hs(r))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return gs(e,t,r,!1,n)};Be.version="18.3.1-next-f1338f8080-20240426";function tp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tp)}catch(e){console.error(e)}}tp(),tu.exports=Be;var ch=tu.exports,wc=ch;Ys.createRoot=wc.createRoot,Ys.hydrateRoot=wc.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mn(){return Mn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Mn.apply(null,arguments)}var rr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(rr||(rr={}));const bc="popstate";function uh(e){e===void 0&&(e={});function t(n,a){let{pathname:s,search:i,hash:l}=n.location;return Vo("",{pathname:s,search:i,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:rp(a)}return fh(t,r,null,e)}function ht(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function dh(e,t){{typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ph(){return Math.random().toString(36).substr(2,8)}function kc(e,t){return{usr:e.state,key:e.key,idx:t}}function Vo(e,t,r,n){return r===void 0&&(r=null),Mn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?xs(t):t,{state:r,key:t&&t.key||n||ph()})}function rp(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function xs(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function fh(e,t,r,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:s=!1}=n,i=a.history,l=rr.Pop,c=null,u=h();u==null&&(u=0,i.replaceState(Mn({},i.state,{idx:u}),""));function h(){return(i.state||{idx:null}).idx}function m(){l=rr.Pop;let S=h(),f=S==null?null:S-u;u=S,c&&c({action:l,location:b.location,delta:f})}function g(S,f){l=rr.Push;let p=Vo(b.location,S,f);u=h()+1;let d=kc(p,u),x=b.createHref(p);try{i.pushState(d,"",x)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;a.location.assign(x)}s&&c&&c({action:l,location:b.location,delta:1})}function v(S,f){l=rr.Replace;let p=Vo(b.location,S,f);u=h();let d=kc(p,u),x=b.createHref(p);i.replaceState(d,"",x),s&&c&&c({action:l,location:b.location,delta:0})}function w(S){let f=a.location.origin!=="null"?a.location.origin:a.location.href,p=typeof S=="string"?S:rp(S);return p=p.replace(/ $/,"%20"),ht(f,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,f)}let b={get action(){return l},get location(){return e(a,i)},listen(S){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(bc,m),c=S,()=>{a.removeEventListener(bc,m),c=null}},createHref(S){return t(a,S)},createURL:w,encodeLocation(S){let f=w(S);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:v,go(S){return i.go(S)}};return b}var jc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(jc||(jc={}));function mh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const hh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gh=e=>hh.test(e);function xh(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?xs(e):e,s;if(r)if(gh(r))s=r;else{if(r.includes("//")){let i=r;r=np(r),dh(!1,"Pathnames cannot have embedded double slashes - normalizing "+(i+" -> "+r))}r.startsWith("/")?s=Sc(r.substring(1),"/"):s=Sc(r,t)}else s=t;return{pathname:s,search:kh(n),hash:jh(a)}}function Sc(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function Hs(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function vh(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function yh(e,t){let r=vh(e);return t?r.map((n,a)=>a===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function wh(e,t,r,n){n===void 0&&(n=!1);let a;typeof e=="string"?a=xs(e):(a=Mn({},e),ht(!a.pathname||!a.pathname.includes("?"),Hs("?","pathname","search",a)),ht(!a.pathname||!a.pathname.includes("#"),Hs("#","pathname","hash",a)),ht(!a.search||!a.search.includes("#"),Hs("#","search","hash",a)));let s=e===""||a.pathname==="",i=s?"/":a.pathname,l;if(i==null)l=r;else{let m=t.length-1;if(!n&&i.startsWith("..")){let g=i.split("/");for(;g[0]==="..";)g.shift(),m-=1;a.pathname=g.join("/")}l=m>=0?t[m]:"/"}let c=xh(a,l),u=i&&i!=="/"&&i.endsWith("/"),h=(s||i===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||h)&&(c.pathname+="/"),c}const np=e=>e.replace(/\/\/+/g,"/"),bh=e=>np(e.join("/")),kh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,jh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,ap=["post","put","patch","delete"];new Set(ap);const Sh=["get",...ap];new Set(Sh);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xa(){return Xa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Xa.apply(null,arguments)}const sp=y.createContext(null),Vi=y.createContext(null),Hi=y.createContext(null),Qi=y.createContext({outlet:null,matches:[],isDataRoute:!1});function Ki(){return y.useContext(Hi)!=null}function op(){return Ki()||ht(!1),y.useContext(Hi).location}function ip(e){y.useContext(Vi).static||y.useLayoutEffect(e)}function _h(){let{isDataRoute:e}=y.useContext(Qi);return e?Ph():Eh()}function Eh(){Ki()||ht(!1);let e=y.useContext(sp),{basename:t,future:r,navigator:n}=y.useContext(Vi),{matches:a}=y.useContext(Qi),{pathname:s}=op(),i=JSON.stringify(yh(a,r.v7_relativeSplatPath)),l=y.useRef(!1);return ip(()=>{l.current=!0}),y.useCallback(function(u,h){if(h===void 0&&(h={}),!l.current)return;if(typeof u=="number"){n.go(u);return}let m=wh(u,JSON.parse(i),s,h.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:bh([t,m.pathname])),(h.replace?n.replace:n.push)(m,h.state,h)},[t,n,i,s,e])}var lp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(lp||{}),cp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(cp||{});function Nh(e){let t=y.useContext(sp);return t||ht(!1),t}function Ch(e){let t=y.useContext(Qi);return t||ht(!1),t}function zh(e){let t=Ch(),r=t.matches[t.matches.length-1];return r.route.id||ht(!1),r.route.id}function Ph(){let{router:e}=Nh(lp.UseNavigateStable),t=zh(cp.UseNavigateStable),r=y.useRef(!1);return ip(()=>{r.current=!0}),y.useCallback(function(a,s){s===void 0&&(s={}),r.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Xa({fromRouteId:t},s)))},[e,t])}function Th(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Dh(e){let{basename:t="/",children:r=null,location:n,navigationType:a=rr.Pop,navigator:s,static:i=!1,future:l}=e;Ki()&&ht(!1);let c=t.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:c,navigator:s,static:i,future:Xa({v7_relativeSplatPath:!1},l)}),[c,l,s,i]);typeof n=="string"&&(n=xs(n));let{pathname:h="/",search:m="",hash:g="",state:v=null,key:w="default"}=n,b=y.useMemo(()=>{let S=mh(h,c);return S==null?null:{location:{pathname:S,search:m,hash:g,state:v,key:w},navigationType:a}},[c,h,m,g,v,w,a]);return b==null?null:y.createElement(Vi.Provider,{value:u},y.createElement(Hi.Provider,{children:r,value:b}))}new Promise(()=>{});/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const $h="6";try{window.__reactRouterVersion=$h}catch{}const Rh="startTransition",_c=Yp[Rh];function Lh(e){let{basename:t,children:r,future:n,window:a}=e,s=y.useRef();s.current==null&&(s.current=uh({window:a,v5Compat:!0}));let i=s.current,[l,c]=y.useState({action:i.action,location:i.location}),{v7_startTransition:u}=n||{},h=y.useCallback(m=>{u&&_c?_c(()=>c(m)):c(m)},[c,u]);return y.useLayoutEffect(()=>i.listen(h),[i,h]),y.useEffect(()=>Th(n),[n]),y.createElement(Dh,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:i,future:n})}var Ec;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ec||(Ec={}));var Nc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Nc||(Nc={}));const B="/api",Ih=".pdf,.png,.jpg,.jpeg,.tif,.tiff,.bmp,.webp,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv",K={ADDED:{bg:"var(--diff-added-bg)",border:"var(--diff-added-border)",text:"var(--diff-added-text)",chip:"var(--diff-added-chip)"},DELETED:{bg:"var(--diff-deleted-bg)",border:"var(--diff-deleted-border)",text:"var(--diff-deleted-text)",chip:"var(--diff-deleted-chip)"},MODIFIED:{bg:"var(--diff-modified-bg)",border:"var(--diff-modified-border)",text:"var(--diff-modified-text)",chip:"var(--diff-modified-chip)"},UNCHANGED:{bg:"var(--diff-unchanged-bg)",border:"var(--diff-unchanged-border)",text:"var(--diff-unchanged-text)",chip:"var(--diff-unchanged-chip)"},MATCH:{bg:"var(--diff-match-bg)",border:"var(--diff-match-border)",text:"var(--diff-match-text)",chip:"var(--diff-match-chip)"}},Ah=`
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
`,pt={background:"#fffdf8",border:"1px solid #ded6c8",borderRadius:8,boxShadow:"0 1px 3px rgba(31,41,55,.08)"},sr={textAlign:"start",padding:"8px 9px",borderBottom:"1px solid #ded6c8",fontWeight:650,verticalAlign:"top",whiteSpace:"normal",overflowWrap:"anywhere"},Fr={padding:"8px 9px",borderBottom:"1px solid #eee7dc",verticalAlign:"top",whiteSpace:"normal",overflowWrap:"anywhere",lineHeight:1.35},yr={border:"1px solid #ded6c8",background:"#fbfaf6",color:"#344054",borderRadius:999,padding:"4px 8px",fontSize:12,fontWeight:600};function Mh(e=!1,t={}){return{border:"none",borderRadius:6,background:e?"#98a2b3":"#1f2937",color:"white",padding:"9px 14px",fontWeight:550,cursor:e?"default":"pointer",...t}}function Oh(e={}){return{border:"1px solid #c9c0b0",borderRadius:6,background:"#fffdf8",color:"#344054",padding:"9px 13px",fontWeight:550,cursor:"pointer",...e}}function $r(e){if(!e)return"";const t=String(e);return t.includes("Traceback (most recent call last)")||t.includes("Internal Server Error")||t.includes("psycopg")||t.includes("OperationalError")||t.includes('File "')||t.length>500?"An unexpected internal server error occurred. Please try again or check server logs.":t.replace(/\/Users\/[a-zA-Z0-9_-]+\//g,".../")}async function re(e){try{const t=await e.text();if(!t)return`Request failed with status ${e.status}`;try{const r=JSON.parse(t);return $r(at(r.detail||r.error||r.message||r))}catch{return t.trim().startsWith("<!DOCTYPE html>")||t.includes("<html")||t.length>200?`Server error (${e.status}). Please check backend logs.`:$r(t)}}catch{return`Request failed with status ${e.status}`}}function ie(e){const t=at(e);return t.toLowerCase().includes("failed to fetch")?"The app could not reach the comparison service. Please confirm the backend is running and the API URL is correct.":t||"Something went wrong while processing the documents."}async function Fh(e){const t=await fetch(`${B}/extract-runs/${e}/structured-json`);if(t.ok){const s=Ho(await t.json());if(Na(s))return s;const i=await Cc(e,s);return Na(i)?i:s}const r=await fetch(`${B}/extract-runs/${e}/json`);if(!r.ok)throw new Error(await re(t));const n=await r.json(),a=Ho(n);return Na(a)?a:Cc(e,a)}function Na(e){return!!(e&&((e.content||[]).length>0||(e.tables||[]).length>0||(e.pages||[]).some(t=>(t.content||[]).length>0||(t.tables||[]).length>0)))}async function Cc(e,t={}){const[r,n]=await Promise.allSettled([fetch(`${B}/extract-runs/${e}/blocks?limit=2000`).then(async i=>{if(!i.ok)throw new Error(await re(i));return i.json()}),fetch(`${B}/extract-runs/${e}/tables?include_rows=true`).then(async i=>{if(!i.ok)throw new Error(await re(i));return i.json()})]),a=r.status==="fulfilled"?r.value.blocks||[]:[],s=n.status==="fulfilled"?n.value.tables||[]:[];return Ho({...t,blocks:a,tables:s.length?s:t.tables||[]})}function Ho(e){var l,c,u;if(e!=null&&e.structured_json)return e.structured_json;if((e!=null&&e.document_summary||e!=null&&e.content||e!=null&&e.pages)&&Na(e))return e;const t=(e==null?void 0:e.blocks)||[],r=(e==null?void 0:e.tables)||[],n=[];t.forEach(h=>{var v;const m=h.text||((v=h.payload)==null?void 0:v.text)||"",g=String(m).match(/^\s*([^:：]{2,80})\s*[:：]\s*(.{1,300})$/);g&&n.push({field:g[1].trim(),value:g[2].trim(),page:h.page_number,source:h.type,citation:`p.${h.page_number||"-"} - ${h.path||"document"}`}),Wh(m).forEach(w=>{n.push({...w,page:h.page_number,source:h.type,citation:`p.${h.page_number||"-"} - ${h.path||"document"}`})})}),r.slice(0,40).forEach(h=>{(h.rows||[]).slice(0,50).forEach(m=>{Object.entries(m||{}).forEach(([g,v])=>{!v||String(g).startsWith("__")||n.push({field:g,value:v,page:h.page_first||h.page_number,source:"table",table:h.display_name||h.title,citation:`${h.page_label||"page"} - ${h.title||"table"}`})})})});const a=t.filter(h=>["paragraph","list_item","kv_pair","figure","section","heading"].includes(h.type)).map(h=>{var b;const m=h.text||((b=h.payload)==null?void 0:b.text)||"",g={page:h.page_number,order:h.sequence||0,type:h.type,path:h.path,text:m,citation:`p.${h.page_number||"-"} - ${h.path||"document"}`},v=[],w=String(m).match(/^\s*([^:：]{2,80})\s*[:：]\s*(.{1,300})$/);return w&&v.push({name:w[1].trim(),value:w[2].trim()}),v.length&&(g.key_values=v),g}).filter(h=>String(h.text||"").trim()),s=[],i=new Map;return a.forEach(h=>{const m=h.page||1;i.has(m)||i.set(m,{page:m,citation:`p.${m}`,content:[],tables:[]}),i.get(m).content.push(h)}),r.forEach(h=>{const m=h.page_first||h.page_number||1;i.has(m)||i.set(m,{page:m,citation:`p.${m}`,content:[],tables:[]}),i.get(m).tables.push(h)}),Array.from(i.keys()).sort((h,m)=>h-m).forEach(h=>s.push(i.get(h))),{document_summary:(e==null?void 0:e.document_summary)||{label:((l=e==null?void 0:e.summary)==null?void 0:l.label)||(e==null?void 0:e.label)||"Extracted document",source_type:((c=e==null?void 0:e.summary)==null?void 0:c.source_format)||(e==null?void 0:e.source_format)||"document",extraction_quality:{grade:((u=e==null?void 0:e.summary)==null?void 0:u.quality)||"not rated",coverage:e==null?void 0:e.coverage},counts:{text_blocks:a.length,tables:r.length,pages:s.length}},semantic_fields:n.slice(0,220),business_structure:Uh(t,r,n),sections:t.filter(h=>["section","heading"].includes(h.type)).slice(0,200),tables:r,pages:s,content:a}}function Uh(e,t,r){const n=[{document_index:1,label:"Extracted document",sections:[]}];let a=null;return e.slice().sort((s,i)=>(s.page_number||1)-(i.page_number||1)||(s.sequence||0)-(i.sequence||0)).forEach(s=>{var i;if(["section","heading"].includes(s.type)){a={title:s.text||s.path||`Page ${s.page_number||1}`,page:s.page_number||1,path:s.path,content:[],fields:[],inline_records:[],tables:[]},n[0].sections.push(a);return}if((!a||a.page!==(s.page_number||1))&&(a={title:`Page ${s.page_number||1}`,page:s.page_number||1,path:`/page_${s.page_number||1}`,content:[],fields:[],inline_records:[],tables:[]},n[0].sections.push(a)),["paragraph","list_item","kv_pair","figure"].includes(s.type)){const l=s.text||((i=s.payload)==null?void 0:i.text)||"",c=r.filter(h=>{var m;return h.page===s.page_number&&((m=h.citation)==null?void 0:m.includes(s.path||"__no_path__"))}),u=Bh(l);a.content.push({type:s.type,page:s.page_number,path:s.path,text:l,fields:c}),a.fields.push(...c),u&&a.inline_records.push({...u,page:s.page_number,citation:`p.${s.page_number||"-"} - ${s.path||"document"}`})}}),t.forEach(s=>{const i=s.page_first||s.page_number||1;let l=n[0].sections.find(c=>c.page===i);l||(l={title:`Page ${i}`,page:i,path:`/page_${i}`,content:[],fields:[],inline_records:[],tables:[]},n[0].sections.push(l)),l.tables.push({title:s.display_name||s.title||"Detected table",page_label:s.page_label,columns:s.columns||[],row_count:s.n_rows||0,sample_rows:(s.rows||s.row_preview||[]).slice(0,8)})}),{documents:n,section_count:n[0].sections.length}}function Bh(e){const t=String(e||"").trim();if(!t)return null;const r=t.includes("|")?t.split("|").map(n=>n.trim()).filter(Boolean):t.split(/\s{3,}/).map(n=>n.trim()).filter(Boolean);return r.length<2?null:{record_type:"inline_row",columns:r.map((n,a)=>`Column ${a+1}`),values:Object.fromEntries(r.map((n,a)=>[`Column ${a+1}`,n])),text:t}}function Wh(e){const t=String(e||""),r=[["color",/\b(?:colou?r|shade)\s*(?:is|=|:)?\s*([A-Za-z][A-Za-z\s/-]{2,40})/gi],["size",/\b(?:size|dimension)\s*(?:is|=|:)?\s*([A-Z0-9][A-Z0-9\s./x-]{0,40})/gi],["quantity",/\b(?:qty|quantity|count|units?)\s*(?:is|=|:)?\s*(\d[\d,]*(?:\.\d+)?)/gi],["price",/([$€£]\s?\d[\d,]*(?:\.\d+)?)/g],["percentage",/\b(\d+(?:\.\d+)?%)\b/g],["date",/\b(\d{1,2}[/-]\d{1,2}[/-]\d{2,4}|\d{4}-\d{1,2}-\d{1,2})\b/g],["code",/\b([A-Z]{1,8}[- ]?\d{2,12}[A-Z]?)\b/gi]],n=[],a=new Set;return r.forEach(([s,i])=>{for(const l of t.matchAll(i)){const c=String(l[1]||"").replace(/\s+/g," ").trim(),u=`${s}:${c.toLowerCase()}`;!c||a.has(u)||(a.add(u),n.push({field:s,value:c}))}}),n}function at(e){if(!e)return"";if(typeof e=="string")return $r(e);if(e instanceof Error)return at(e.message);if(Array.isArray(e))return e.map(at).filter(Boolean).join(`
`);if(typeof e=="object"){if(e.detail)return at(e.detail);if(e.error)return at(e.error);if(e.message)return at(e.message);try{return $r(JSON.stringify(e,null,2))}catch{return $r(String(e))}}return $r(String(e))}function qh(e){if(!(e!=null&&e.length))return[];const t=new Set;return e.slice(0,20).forEach(r=>{r&&typeof r=="object"&&!Array.isArray(r)&&Object.keys(r).forEach(n=>{hr(n)||t.add(n)})}),Array.from(t).slice(0,12)}function hr(e){const t=String(e||"");return!t||t.startsWith("__")?!0:["payload","raw","field_profiles","column_profiles","extraction_intelligence","source_tables","table_fingerprint","bbox_by_page","quality_warnings"].includes(t)}function pr(e){if(e==null||e==="")return"-";if(Array.isArray(e))return e.map(pr).join(", ");if(typeof e=="object"){const t=Object.fromEntries(Object.entries(e).filter(([r])=>!hr(r)));return Object.keys(t).length?JSON.stringify(t):"-"}return String(e)}function zc(e){return!e||typeof e!="object"?"":Object.entries(e).filter(([,t])=>t!=null&&String(t).trim()!=="").map(([t,r])=>`${t}: ${r}`).join(" | ")}function Vh(e,t=560,r=1280){const n=Math.max(1,Number(e)||1);return Math.min(r,Math.max(t,180+n*180))}function Qe(e,t){if(!e)return"";const r=String(e).replace(/\s+/g," ").trim();return r.length<=t?r:`${r.slice(0,t-1)}...`}function yt(e){const t=Number(e||0);return Number.isFinite(t)?Math.round(t).toLocaleString():"0"}function Hh(e){if(!e)return"-";const t=new Date(e);return Number.isNaN(t.getTime())?"-":t.toLocaleString(void 0,{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function Qh(e,t){const r=Number(e||0);if(!Number.isFinite(r)||r<=0)return t==="complete"||t==="failed"?"-":"Running";const n=Math.max(1,Math.round(r/1e3));if(n<60)return`${n}s`;const a=Math.floor(n/60),s=n%60;if(a<60)return s?`${a}m ${s}s`:`${a}m`;const i=Math.floor(a/60),l=a%60;return l?`${i}h ${l}m`:`${i}h`}function Kh(e){return String(e||"-").replace(/\bbase\s*p\.?\s*(\d+)/gi,"Baseline page $1").replace(/\btarget\s*p\.?\s*(\d+)/gi,"Revised page $1").replace(/\bbaseline\s*p\.?\s*(\d+)/gi,"Baseline page $1").replace(/\brevised\s*p\.?\s*(\d+)/gi,"Revised page $1").replace(/\s*->\s*/g," → ")}function Pc(e){const t=String(e||"").toLowerCase();return t.includes("high")?3:t.includes("medium")?2:t.includes("low")?1:0}function Ur(e){const t=String((e==null?void 0:e.change_type)||(e==null?void 0:e.changeType)||(e==null?void 0:e.status)||"").toUpperCase();if(["ADDED","DELETED","MODIFIED","UNCHANGED","MATCH"].includes(t))return t;if((e!=null&&e.after||e!=null&&e.target_text)&&!(e!=null&&e.before||e!=null&&e.base_text))return"ADDED";if((e!=null&&e.before||e!=null&&e.base_text)&&!(e!=null&&e.after||e!=null&&e.target_text))return"DELETED";const r=`${(e==null?void 0:e.type)||""} ${(e==null?void 0:e.change)||""} ${(e==null?void 0:e.description)||""} ${(e==null?void 0:e.review)||""}`.toUpperCase();return r.includes("ADDED")||r.includes("NEW CONTENT")||r.includes("INTRODUCED")?"ADDED":r.includes("DELETED")||r.includes("REMOVED")||r.includes("DROPPED")?"DELETED":r.includes("MODIFIED")||r.includes("CHANGED")||r.includes("UPDATED")||r.includes("REVISED")?"MODIFIED":t||"MODIFIED"}function Gh(e){const t=Ur(e),r=(e==null?void 0:e.before)||"",n=(e==null?void 0:e.after)||"",a=(e==null?void 0:e.stable_key)||Tc(e==null?void 0:e.path)||"Document change",s=[e!=null&&e.page_base?`Baseline page ${e.page_base}`:"",e!=null&&e.page_target?`Revised page ${e.page_target}`:""].filter(Boolean).join(" -> "),i=t==="ADDED"?`Added: ${Qe(n,260)}`:t==="DELETED"?`Deleted: ${Qe(r,260)}`:`Changed from "${Qe(r,120)}" to "${Qe(n,120)}"`;return{feature:a,item:a,area:Tc(e==null?void 0:e.path)||"Document",change_type:t,change:i,before:r,after:n,citation:s,impact:e==null?void 0:e.impact,confidence:typeof(e==null?void 0:e.similarity)=="number"?Math.max(.55,Math.min(.98,1-Math.abs(1-e.similarity))):null,seek_clarification:t==="UNCHANGED"?"None":"Review recommended."}}function Jh(e,t){const r=Array.isArray(e)?[...e]:[],n=Array.isArray(t)?t:[],a=new Set(r.map(Ur)),s=new Set(r.map(i=>`${Ur(i)}:${i.stable_key||i.item||i.feature||i.path||i.change}`));return["ADDED","DELETED"].forEach(i=>{if(a.has(i))return;let l=0;n.forEach(c=>{if(l>=12||Ur(c)!==i)return;const u=`${i}:${c.stable_key||c.path||c.before||c.after}`;s.has(u)||(r.push(Gh(c)),s.add(u),l+=1)})}),r}function Tc(e){const t=String(e||"").split("/").map(r=>r.trim()).filter(Boolean);return t[t.length-1]||""}function Dc(e){const t=`${e.seek_clarification||""} ${e.review||""} ${e.recommendation||""}`.toLowerCase(),r=Qo(e.confidence);return t.includes("review")||t.includes("clarif")||t.includes("confirm")||typeof r=="number"&&r<.8}function Qo(e){return typeof e!="number"?null:e>1?e/100:e}function $c(e){return{border:"1px solid #c9c0b0",background:e?"#f1ece3":"#fffdf8",color:e?"#98a2b3":"#344054",borderRadius:7,padding:"7px 12px",cursor:e?"default":"pointer",fontWeight:600}}function Rc(e){return{border:"1px solid #c9c0b0",background:e?"#f1ece3":"#fffdf8",color:e?"#98a2b3":"#344054",borderRadius:6,padding:"5px 8px",cursor:e?"default":"pointer",fontWeight:600,fontSize:12}}function Ko(e,t=!1){const r=String(e||"").toLowerCase();return r==="added"?{background:t?K.ADDED.bg:"rgba(31,160,70,.08)",border:t?void 0:`1px solid ${K.ADDED.border}`,borderInlineStart:`3px solid ${K.ADDED.border}`}:r==="deleted"?{background:t?K.DELETED.bg:"rgba(218,54,54,.08)",border:t?void 0:`1px solid ${K.DELETED.border}`,borderInlineStart:`3px solid ${K.DELETED.border}`}:r==="modified"?{background:t?"rgba(196,85,16,.10)":"rgba(196,85,16,.08)",border:t?void 0:`1px solid ${K.MODIFIED.border}`,borderInlineStart:`3px solid ${K.MODIFIED.border}`}:{background:t?"transparent":"#fffdf8",border:t?void 0:"1px solid transparent",borderInlineStart:"3px solid transparent"}}function Yh({meta:e}){var r,n,a;const t=e.stats||{};return o.jsxs("section",{className:"stats-strip",children:[o.jsx(ke,{label:"Added",value:t.ADDED||0,tone:"added"}),o.jsx(ke,{label:"Deleted",value:t.DELETED||0,tone:"deleted"}),o.jsx(ke,{label:"Modified",value:t.MODIFIED||0,tone:"modified"}),o.jsx(ke,{label:"Unchanged",value:t.UNCHANGED||0}),o.jsx(ke,{label:"Coverage",value:`${Lc((r=e.coverage)==null?void 0:r.base)} / ${Lc((n=e.coverage)==null?void 0:n.target)}`}),o.jsx(ke,{label:"Pages",value:`${e.n_pages_base} / ${e.n_pages_target}`}),Number(((a=e.ai_usage)==null?void 0:a.total_tokens)||0)>0&&o.jsx(ke,{label:"AI tokens",value:`${yt(e.ai_usage.total_tokens)} (${yt(e.ai_usage.calls||0)} calls)`})]})}function Lc(e){return typeof e=="number"?`${e.toFixed(1)}%`:"-"}function ke({label:e,value:t,tone:r}){return o.jsxs("span",{className:`stat-chip ${r||"neutral"}`,children:[o.jsx("span",{children:e}),o.jsx("strong",{children:t})]})}function Xh({usage:e}){const t=Number((e==null?void 0:e.total_tokens)||0);if(!t)return null;const n=(Array.isArray(e==null?void 0:e.operations)?e.operations:[]).slice(-4);return o.jsxs("div",{style:{border:"1px solid #ded6c8",borderRadius:8,padding:10,marginBottom:12,background:"#fbfaf6",fontSize:12,color:"#475467"},children:[o.jsx("strong",{style:{color:"#344054"},children:"AI usage:"})," ",yt(t)," tokens · ",yt(e.calls||0)," call(s) · ",yt(e.prompt_tokens||0)," input / ",yt(e.completion_tokens||0)," output",n.length>0&&o.jsx("div",{style:{marginTop:6,display:"flex",flexWrap:"wrap",gap:6},children:n.map((a,s)=>o.jsxs("span",{style:{border:"1px solid #d8d0c3",borderRadius:999,padding:"3px 7px",background:"#fffdf8"},children:[a.operation||"AI call"," · ",yt(a.total_tokens||0)]},`${a.operation||"op"}-${s}`))})]})}function Ic({progress:e,message:t,status:r}){const n=vs(r),a=Math.max(0,Math.min(100,Number(e)||0)),s=n.isFailed?100:Math.max(7,n.isComplete?100:a);return o.jsxs("div",{className:"processing-state",children:[o.jsxs("div",{className:"processing-state-head",children:[o.jsx("span",{style:{fontWeight:600},children:t}),o.jsxs("span",{children:[a,"%"]})]}),o.jsx("div",{className:"progress-track",children:o.jsx("div",{className:`progress-fill ${n.className}`,style:{width:`${s}%`}})}),o.jsx("p",{children:"The job is still running. This view updates automatically as the backend reports progress."})]})}function On({message:e}){return o.jsx("div",{style:{marginTop:16,border:"1px solid #f0b4b4",background:"#fff5f5",color:"#9f1d1d",borderRadius:8,padding:13,fontSize:14,fontWeight:600,lineHeight:1.45,whiteSpace:"pre-wrap"},children:at(e)})}function Vn({label:e}){return o.jsx("div",{style:{padding:20,color:"#667085",fontWeight:600},children:e})}function Qt({label:e}){return o.jsx("div",{style:{padding:18,border:"1px dashed #c9c0b0",borderRadius:8,color:"#667085",background:"#fbfaf7",fontWeight:600},children:e})}function Zh({status:e}){const t=vs(e);return o.jsx("span",{style:{display:"inline-block",background:t.tone.chip,color:t.tone.text,border:`1px solid ${t.tone.border}`,padding:"2px 8px",borderRadius:999,fontWeight:650,fontSize:12},children:t.label})}function vs(e){const t=String(e||"queued").toLowerCase(),r=t==="complete"||t==="completed",n=t==="failed"||t==="error",a=t==="running"||t==="processing"||t==="uploading";return{value:t,label:r?"complete":n?"failed":t,className:r?"complete":n?"failed":a?"running":"queued",tone:r?K.ADDED:n?K.DELETED:a?K.MODIFIED:K.UNCHANGED,isComplete:r,isFailed:n}}function eg({value:e,status:t}){const r=vs(t),n=Math.max(0,Math.min(100,Number(e)||0)),a=r.isFailed||r.isComplete?100:n;return o.jsxs("div",{children:[o.jsx("div",{className:"progress-track",style:{height:6,minWidth:140},children:o.jsx("div",{className:`progress-fill ${r.className}`,style:{width:`${a}%`}})}),o.jsx("div",{style:{marginTop:5,color:"#667085",fontSize:12},children:r.isFailed?"failed":`${r.isComplete?100:n}%`})]})}function up({type:e}){const t=String(e||"MODIFIED").toUpperCase(),r=K[t]||K.MODIFIED;return o.jsx("span",{style:{display:"inline-block",background:r.chip,color:r.text,border:`1px solid ${r.border}`,padding:"2px 8px",borderRadius:999,fontWeight:650,fontSize:12},children:t})}function tg({onOpenJob:e,onAskJob:t,error:r,historyKind:n="all",onStartCompare:a,onStartExtract:s}){const[i,l]=y.useState({loading:!0,error:"",jobs:[]}),[c,u]=y.useState(""),h=async()=>{try{const f=await fetch(`${B}/jobs?limit=80`);if(!f.ok)throw new Error(await re(f));const p=await f.json();l({loading:!1,error:"",jobs:p.jobs||[]})}catch(f){l({loading:!1,error:ie(f),jobs:[]})}};y.useEffect(()=>{let f=!1,p=null;const d=async()=>{f||(await h(),f||(p=setTimeout(d,2200)))};return d(),()=>{f=!0,p&&clearTimeout(p)}},[]);const m=async f=>{if(!(!(f!=null&&f.run_id)||c)){u(f.run_id);try{const p=await fetch(`${B}/jobs/${f.run_id}`,{method:"DELETE"});if(!p.ok)throw new Error(await re(p));await h()}catch(p){l(d=>({...d,error:ie(p)}))}finally{u("")}}},g=(i.jobs||[]).filter(f=>n==="all"||f.kind===n),v=g.filter(f=>!["complete","failed","error"].includes(f.status)).length,w=g.filter(f=>f.status==="complete").length,b=n==="comparison"?"Comparison History":n==="extraction"?"Extraction History":"Work History",S=n==="comparison"?"No comparison runs are available yet.":n==="extraction"?"No extraction runs are available yet.":"No document work is available yet.";return o.jsxs("section",{className:"session-board",children:[o.jsxs("div",{className:"board-head",children:[o.jsx("div",{children:o.jsx("h2",{children:b})}),o.jsxs("div",{className:"board-actions",children:[o.jsx("button",{type:"button",onClick:a,className:"primary-action compact",children:"New compare"}),o.jsx("button",{type:"button",onClick:s,className:"ghost-action compact",children:"New extract"}),o.jsxs("span",{children:[v," running"]}),o.jsxs("span",{children:[w," complete"]}),o.jsx("button",{type:"button",onClick:h,className:"ghost-action",children:"Refresh"})]})]}),r&&o.jsx(On,{message:r}),i.error&&o.jsx(On,{message:i.error}),i.loading&&!g.length?o.jsx(Vn,{label:"Loading jobs"}):g.length===0?o.jsx(Qt,{label:S}):o.jsx("div",{className:"job-list",children:g.map(f=>o.jsx(rg,{job:f,deleting:c===f.run_id,onOpen:()=>e(f),onAsk:()=>t==null?void 0:t(f),onDelete:()=>m(f)},f.run_id))})]})}function rg({job:e,deleting:t,onOpen:r,onAsk:n,onDelete:a}){const s=e.status==="complete",i=vs(e.status),l=e.kind==="extraction",c=l?e.label||"Uploaded document":`${e.base_label||"Baseline"} → ${e.target_label||"Revised"}`,u=l?e.n_pages||"-":`${e.n_pages_base||"-"} / ${e.n_pages_target||"-"}`;return o.jsxs("article",{className:`job-card ${i.className}`,children:[o.jsxs("div",{className:"job-main",children:[o.jsx("div",{className:"job-kind",children:l?"Extraction":"Comparison"}),o.jsx("h3",{dir:"auto",children:c}),o.jsxs("div",{className:"job-meta",children:[o.jsxs("span",{children:["#",String(e.run_id||"").slice(0,6)]}),o.jsx("span",{children:[e.source_format,e.base_format,e.target_format].filter(Boolean).join(" / ")||"document"}),o.jsxs("span",{children:[u," pages"]}),o.jsx("span",{children:Qh(e.duration_ms,e.status)})]}),e.status_message&&o.jsx("p",{dir:"auto",children:e.status_message}),i.isFailed&&e.error&&o.jsx("p",{className:"job-error",dir:"auto",children:Qe(at(e.error),180)})]}),o.jsxs("div",{className:"job-side",children:[o.jsx(Zh,{status:e.status}),o.jsx(eg,{value:e.progress||0,status:e.status}),o.jsx("span",{className:"job-date",children:Hh(e.created_at)}),o.jsxs("div",{className:"job-actions",children:[o.jsx("button",{type:"button",onClick:r,disabled:!s,className:"primary-action compact",children:"Open"}),o.jsx("button",{type:"button",onClick:n,disabled:!s||!l,className:"ghost-action compact",children:"Query"}),o.jsx("button",{type:"button",onClick:a,disabled:t,className:"danger-action compact",children:t?"Deleting":"Delete"})]})]})]})}function ng({onUpload:e,busy:t,onAdmin:r}){const n=dp("comparison"),a=t||n.loading||!n.selectedId||n.datasets.length===0;return o.jsxs("form",{onSubmit:e,className:"doc-workflow-card",children:[o.jsx("div",{className:"workflow-card-head",children:o.jsx("div",{children:o.jsx("h2",{children:"Compare two documents"})})}),o.jsx(pp,{...n,busy:t,onAdmin:r}),!n.loading&&n.datasets.length===0?o.jsx(fp,{onAdmin:r}):null,o.jsxs("div",{className:"upload-grid compare",children:[o.jsx(Go,{label:"Baseline",helper:"Approved or reference file",name:"base",disabled:a}),o.jsx(Go,{label:"Revised",helper:"Latest or proposed file",name:"target",disabled:a}),o.jsxs("div",{className:"workflow-action-rail",children:[o.jsx("button",{disabled:a,className:"primary-action full",children:t?"Processing":"Compare documents"}),o.jsx("div",{className:"workflow-note",children:"Side-by-side preview, semantic changes, and export."})]})]})]})}function ag({onUpload:e,busy:t,onAdmin:r}){const n=dp("extraction"),a=t||n.loading||!n.selectedId||n.datasets.length===0;return o.jsxs("form",{onSubmit:e,className:"doc-workflow-card",children:[o.jsx("div",{className:"workflow-card-head",children:o.jsx("div",{children:o.jsx("h2",{children:"Extract documents"})})}),o.jsx(pp,{...n,busy:t,onAdmin:r}),!n.loading&&n.datasets.length===0?o.jsx(fp,{onAdmin:r}):null,o.jsxs("div",{className:"upload-grid extract",children:[o.jsx(Go,{label:"Document or image",helper:"PDF, image, Word, Excel, xlsb, CSV, or TSV",name:"document",disabled:a,multiple:!0}),o.jsxs("div",{className:"workflow-action-rail",children:[o.jsx("button",{disabled:a,className:"primary-action full",children:t?"Extracting":"Extract content"}),o.jsx("div",{className:"workflow-note",children:"Text, tables, OCR, structured JSON, and document query."})]})]})]})}function dp(e){const[t,r]=y.useState([]),[n,a]=y.useState(""),[s,i]=y.useState(!0),[l,c]=y.useState("");return y.useEffect(()=>{let u=!0;return(async()=>{i(!0),c("");try{const m=window.sessionStorage.getItem("simulated_role")||"platform_admin",g=await fetch(`${B}/datasets`,{headers:{"X-User-Role":m}});if(!g.ok){const S=g.status===404?"Use case service is not available. Confirm the backend admin/datasets routes are deployed, then refresh.":`Could not load use cases (${g.status})`;throw new Error(S)}const b=((await g.json()).datasets||[]).filter(S=>(S.use_case_type||"comparison")===e);if(!u)return;r(b),a(S=>{var f;return S||((f=b[0])==null?void 0:f.id)||""})}catch(m){if(!u)return;r([]),a(""),c((m==null?void 0:m.message)||"Could not load use cases.")}finally{u&&i(!1)}})(),()=>{u=!1}},[]),{datasets:t,selectedId:n,setSelectedId:a,loading:s,error:l}}function pp({datasets:e,selectedId:t,setSelectedId:r,loading:n,error:a,busy:s,onAdmin:i}){return o.jsxs("div",{className:"usecase-selector",children:[o.jsxs("label",{children:[o.jsx("span",{children:"Use case"}),o.jsxs("select",{name:"family_id",value:t,onChange:l=>r(l.target.value),required:!0,disabled:s||n||e.length===0,children:[o.jsx("option",{value:"",disabled:!0,children:n?"Loading use cases":"Select a use case"}),e.map(l=>o.jsxs("option",{value:l.id,children:[l.supplier," - ",l.family_name," (",l.domain||"generic",")"]},l.id))]})]}),a?o.jsx("p",{className:"usecase-error",children:a}):null,e.length>0?o.jsx("button",{type:"button",className:"ghost-action compact",onClick:i,children:"Manage"}):null]})}function fp({onAdmin:e}){return o.jsxs("div",{className:"usecase-required",children:[o.jsx("strong",{children:"Use case required"}),o.jsx("p",{children:"Create or bootstrap a document use case before uploading files. The selected use case supplies metadata, template rules, access policy, and extraction guidance."}),o.jsx("button",{type:"button",className:"primary-action compact",onClick:e,children:"Open Admin Studio"})]})}function Go({label:e,helper:t,name:r,disabled:n,multiple:a=!1}){const[s,i]=y.useState(""),l=y.useRef(null),c=()=>{var u;n||(u=l.current)==null||u.click()};return o.jsxs("div",{onClick:c,onKeyDown:u=>{(u.key==="Enter"||u.key===" ")&&c()},role:"button",tabIndex:n?-1:0,className:`file-lane${n?" disabled":""}`,children:[o.jsx("input",{ref:l,type:"file",name:r,accept:Ih,multiple:a,required:!0,disabled:n,onClick:u=>u.stopPropagation(),onChange:u=>{var m;const h=Array.from(u.target.files||[]);i(h.length>1?`${h.length} files selected`:((m=h[0])==null?void 0:m.name)||"")},style:{position:"absolute",width:1,height:1,opacity:0,pointerEvents:"none"}}),o.jsxs("div",{className:"file-lane-head",children:[o.jsxs("div",{children:[o.jsx("div",{className:"file-lane-title",children:e}),o.jsx("div",{className:"file-lane-helper",children:t})]}),o.jsx("span",{className:"file-lane-pill",children:"Files"})]}),o.jsx("div",{className:`file-lane-value${s?" selected":""}`,children:s||"Select a file"})]})}function sg({runId:e,meta:t,onVerifyPage:r}){const n=t.base_format&&t.base_format!=="pdf"?t.base_native_pages||t.n_pages_base||1:t.n_pages_base||1,a=t.target_format&&t.target_format!=="pdf"?t.target_native_pages||t.n_pages_target||1:t.n_pages_target||1,s=Math.max(n,a),[i,l]=y.useState(null),[c,u]=y.useState(!1);y.useEffect(()=>{let v=!1;return l(null),Promise.all([fetch(`${B}/runs/${e}/summary`).then(async w=>{if(!w.ok)throw new Error("Failed to load summary");return w.json()}),fetch(`${B}/runs/${e}/diff?limit=500`).then(async w=>w.ok?w.json():{diffs:[]})]).then(([w,b])=>{if(v)return;const S=Array.isArray(w)?w:w.rows||w.summary||[];l(Jh(S,b.diffs||[]))}).catch(w=>{v||(console.error("Failed to build quick summary",w),l([]))}),()=>{v=!0}},[e]);const h=ts.useMemo(()=>(Array.isArray(i)?i:[]).filter(w=>w.change||w.description||w.before||w.after).sort((w,b)=>{const S=Pc(w.impact)+(Dc(w)?2:0)+(Qo(w.confidence)||0);return Pc(b.impact)+(Dc(b)?2:0)+(Qo(b.confidence)||0)-S}),[i]),m=v=>{const w=String(v||""),b=w.match(/(?:revised|target|page|p\.)\s*(\d+)/i)||w.match(/\b(\d{1,4})\b/);if(!b)return null;const S=Number.parseInt(b[1],10);return Number.isFinite(S)&&S>=1&&S<=s?S:null};if(i===null)return o.jsx("div",{className:"key-audit-empty",children:"Building comparison summary..."});if(!h.length)return o.jsx("div",{className:"key-audit-empty",children:"No prioritized summary items were returned for this comparison."});const g=c?h.slice(0,16):h.slice(0,8);return o.jsxs("div",{className:"key-audit-panel compact",children:[o.jsx("div",{className:"key-audit-list",children:g.map((v,w)=>{const b=m(v.citation);return o.jsxs("div",{className:"key-audit-item",children:[o.jsx(up,{type:Ur(v)}),o.jsxs("div",{className:"key-audit-copy",dir:"auto",children:[o.jsx("strong",{children:Qe(v.feature||v.item||v.area||"Document change",120)}),o.jsx("span",{children:Qe(v.change||v.description||v.before||v.after||"Value updated.",260)}),v.citation?o.jsx("small",{children:Kh(v.citation)}):null]}),b?o.jsxs("button",{type:"button",className:"primary-action compact",onClick:()=>r(b),children:["Verify page ",b]}):null]},`${v.stable_key||v.feature||v.item||w}`)})}),h.length>8&&o.jsx("button",{type:"button",className:"key-audit-more",onClick:()=>u(v=>!v),children:c?"Show fewer":`Show ${Math.min(16,h.length)} items`})]})}function og({runId:e,meta:t,pageNum:r,setPageNum:n}){const a=t.base_format&&t.base_format!=="pdf"?t.base_native_pages||t.n_pages_base||1:t.n_pages_base||1,s=t.target_format&&t.target_format!=="pdf"?t.target_native_pages||t.n_pages_target||1:t.n_pages_target||1,i=Math.max(a,s),[l,c]=y.useState(r),[u,h]=y.useState(r),[m,g]=y.useState(100),[v,w]=y.useState(!1),[b,S]=y.useState(!0),f=y.useRef(null),p=y.useRef(null);y.useEffect(()=>{c(r),h(r)},[e,r]),y.useEffect(()=>{if(!b)return;const x=f.current,j=p.current;if(!x||!j)return;let N=!1;const _=(R,q)=>{N||(N=!0,q.scrollTop=R.scrollTop,q.scrollLeft=R.scrollLeft,window.requestAnimationFrame(()=>{N=!1}))},z=()=>_(x,j),D=()=>_(j,x);return x.addEventListener("scroll",z,{passive:!0}),j.addEventListener("scroll",D,{passive:!0}),()=>{x.removeEventListener("scroll",z),j.removeEventListener("scroll",D)}},[e,r,b]);const d=x=>{const j=Math.max(1,Math.min(i,x));n(j),c(j),h(j)};return o.jsxs("div",{children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:12,flexWrap:"wrap"},children:[o.jsx("button",{onClick:()=>d(r-1),disabled:r<=1,style:$c(r<=1),children:"Prev both"}),o.jsxs("span",{style:{fontSize:17,fontWeight:650,minWidth:100},children:["Page ",r," / ",i]}),o.jsx("button",{onClick:()=>d(r+1),disabled:r>=i,style:$c(r>=i),children:"Next both"}),o.jsxs("div",{className:"viewer-toolbar-group","aria-label":"PDF zoom controls",children:[o.jsx("button",{type:"button",onClick:()=>g(x=>Math.max(50,x-25)),title:"Zoom out",children:"-"}),o.jsxs("span",{children:[m,"%"]}),o.jsx("button",{type:"button",onClick:()=>g(x=>Math.min(300,x+25)),title:"Zoom in",children:"+"}),o.jsx("button",{type:"button",onClick:()=>g(100),title:"Reset zoom",children:"Reset"})]}),o.jsxs("label",{className:"viewer-sync-toggle",children:[o.jsx("input",{type:"checkbox",checked:b,onChange:x=>S(x.target.checked)}),o.jsx("span",{children:"Sync scroll"})]}),o.jsxs("label",{className:"viewer-sync-toggle",style:{marginLeft:8},children:[o.jsx("input",{type:"checkbox",checked:v,onChange:x=>w(x.target.checked)}),o.jsx("span",{children:"Smart crop"})]}),o.jsx(ig,{})]}),o.jsxs("div",{className:"viewer-grid",style:{display:"grid",gridTemplateColumns:"minmax(0, 1fr) minmax(0, 1fr)",gap:14},children:[o.jsx(Ac,{runId:e,side:"base",pageNum:l,setPageNum:c,totalPages:a,label:"Baseline document",docName:t.base_label,format:t.base_format,zoom:m,scrollRef:f,cropMargins:v}),o.jsx(Ac,{runId:e,side:"target",pageNum:u,setPageNum:h,totalPages:s,label:"Revised document",docName:t.target_label,format:t.target_format,zoom:m,scrollRef:p,cropMargins:v})]})]})}function ig(){return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7,marginLeft:6,flexWrap:"wrap"},children:[o.jsx(Qs,{label:"added",color:K.ADDED.bg,border:K.ADDED.border}),o.jsx(Qs,{label:"deleted",color:K.DELETED.bg,border:K.DELETED.border}),o.jsx(Qs,{label:"modified",color:K.MODIFIED.bg,border:K.MODIFIED.border})]})}function Qs({label:e,color:t,border:r}){return o.jsx("span",{style:{background:t,border:`1px solid ${r}`,color:"var(--text-primary)",padding:"2px 8px",borderRadius:999,fontSize:12,fontWeight:600},children:e})}function Ac({runId:e,side:t,pageNum:r,setPageNum:n,totalPages:a,label:s,docName:i,format:l,zoom:c=100,scrollRef:u,cropMargins:h}){const[m,g]=y.useState({regions:[]}),[v,w]=y.useState(null),[b,S]=y.useState("idle"),f=r>=1&&r<=a,p=l&&l!=="pdf";y.useEffect(()=>{if(S(f&&!p?"loading":"idle"),!f){g({regions:[]}),w(null);return}if(p){g({regions:[]}),fetch(`${B}/runs/${e}/native-page/${t}/${r}`).then(D=>D.json()).then(w).catch(()=>w({items:[]}));return}w(null),fetch(`${B}/runs/${e}/overlay/${t}/${r}`).then(D=>D.json()).then(g).catch(()=>g({regions:[]}))},[e,t,r,f,p]);const d=m.content_box,x=m.page_width||612,j=m.page_height||792,N=h&&d&&d.x_max>d.x_min&&d.y_max>d.y_min;let _={position:"relative",width:"100%"},z={position:"relative",width:`${c}%`};if(N){const D=d.x_min/x,R=d.y_min/j,q=(d.x_max-d.x_min)/x;_={position:"relative",overflow:"hidden",width:"100%",paddingTop:`${(d.y_max-d.y_min)/j/q*c}%`},z={position:"absolute",left:`${-(D/q)*c}%`,top:`${-(R/q)*c}%`,width:`${1/q*c}%`}}return o.jsxs("div",{className:"doc-viewer-shell",children:[o.jsxs("div",{style:{marginBottom:7,display:"flex",justifyContent:"space-between",gap:10,alignItems:"flex-end",flexWrap:"wrap"},children:[o.jsxs("div",{children:[o.jsx("div",{style:{fontSize:13,color:"var(--text-secondary)",fontWeight:600},children:s}),o.jsxs("div",{style:{fontSize:14,color:"var(--text-primary)",fontWeight:600},children:[i," - ",f?`page ${r}`:"no page",l&&o.jsx("span",{style:{color:"var(--text-secondary)",fontSize:11,marginLeft:6},children:String(l).toUpperCase()})]})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[o.jsx("button",{type:"button",onClick:()=>n(Math.max(1,r-1)),disabled:r<=1,style:Rc(r<=1),title:`Previous ${s}`,children:"Prev"}),o.jsxs("span",{style:{color:"var(--text-secondary)",fontSize:12,minWidth:46,textAlign:"center"},children:[r,"/",a||1]}),o.jsx("button",{type:"button",onClick:()=>n(Math.min(a||1,r+1)),disabled:r>=(a||1),style:Rc(r>=(a||1)),title:`Next ${s}`,children:"Next"})]})]}),o.jsx("div",{ref:u,className:`doc-frame dl-scrollbar ${p?"native":""}`,style:{overflow:"auto",maxHeight:"75vh",position:"relative"},children:f?p?o.jsx(cg,{page:v,side:t}):o.jsx("div",{style:_,children:o.jsxs("div",{className:"pdf-zoom-stage",style:z,children:[b==="loading"&&o.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)",background:"var(--surface-raised)",zIndex:1,fontWeight:600},children:["Loading page ",r]}),o.jsx("img",{src:`${B}/runs/${e}/pages/${t}/${r}`,onLoad:()=>S("ready"),onError:()=>S("error"),style:{display:"block",width:"100%",height:"auto"},alt:`${t} page ${r}`},`${t}-${r}`),b==="error"&&o.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:K.DELETED.text,background:"#fff5f5",zIndex:2,fontWeight:600},children:["Could not load page ",r]}),(m.regions||[]).map((D,R)=>{const[q,_e,Ae,Ct]=D.bbox||[0,0,0,0],Ee=K[String(D.change_type||"").toUpperCase()]||K.MODIFIED,Ye=D.page_width||m.page_width||612,Ne=D.page_height||m.page_height||792,C=D.border_color||Ee.border,$=D.color||Ee.bg;return o.jsx("div",{title:`${D.change_type||"change"} ${D.stable_key||""} (${D.block_type||"block"})`,style:{position:"absolute",left:`${q/Ye*100}%`,top:`${_e/Ne*100}%`,width:`${Math.max(.15,(Ae-q)/Ye*100)}%`,height:`${Math.max(.15,(Ct-_e)/Ne*100)}%`,background:$,border:`1px solid ${C}`,boxShadow:`inset 0 0 0 1px ${$}`,pointerEvents:"auto"}},R)})]})}):o.jsx(lg,{pageNum:r})})]})}function lg({pageNum:e}){return o.jsxs("div",{style:{minHeight:520,display:"grid",placeItems:"center",color:"var(--text-secondary)",fontWeight:600},children:["No page ",e," in this document."]})}function cg({page:e,side:t}){if(!e)return o.jsx("div",{style:{minHeight:520,display:"grid",placeItems:"center",color:"var(--text-secondary)",fontWeight:600},children:"Loading structured page"});const r=e.items||[],n=e.viewer_type||(e.format==="spreadsheet"?"spreadsheet":"document");return r.length?o.jsx("div",{className:`native-page ${n}`,dir:"auto",children:r.map(a=>o.jsx(ug,{item:a,viewerType:n,side:t||e.side},a.id))}):o.jsx("div",{style:{minHeight:520,display:"grid",placeItems:"center",color:"var(--text-secondary)",fontWeight:600},children:"No structured content on this page."})}function ug({item:e,viewerType:t,side:r}){var i;const n=Ko(e.highlight);if(e.type==="table"&&!((i=e.payload)!=null&&i.layout_table)&&!mg(e,t))return o.jsx(pg,{item:e,viewerType:t});const a=e.type==="table"?{...e,text:fg(e),payload:{...e.payload||{},layout_table:!0}}:e,s=e.type==="section"||e.type==="heading";return o.jsx("div",{className:"native-block",dir:"auto",style:{...n,marginBottom:s?10:8,padding:s?"7px 9px":"6px 8px",borderRadius:6,fontSize:s?14:13,fontWeight:s?650:400,lineHeight:1.45},title:e.change_type,children:o.jsx(dg,{item:a,side:r})})}function dg({item:e,side:t}){var a,s;const r=e.token_diff||[];return e.highlight==="modified"&&Array.isArray(r)&&r.some(i=>i.op&&i.op!=="equal")?o.jsx("span",{dir:"auto",children:r.map((i,l)=>{const c=i.op;if(c==="delete"&&t!=="base"||c==="insert"&&t==="base")return null;const u=c==="equal"||t==="base"?i.text_a:i.text_b;if(!u)return null;let h="";return c==="delete"&&(h="native-token-delete"),c==="insert"&&(h="native-token-insert"),c==="replace"&&(h=t==="base"?"native-token-replace-base":"native-token-replace-target"),o.jsxs(ts.Fragment,{children:[l>0?" ":"",o.jsx("span",{className:`native-token ${h}`,dir:"auto",children:u})]},l)})}):o.jsx("span",{dir:"auto",children:e.text||((a=e.payload)==null?void 0:a.text)||((s=e.payload)==null?void 0:s.layout_text)||e.path||"-"})}function pg({item:e,viewerType:t}){var i;const r=Gi(e),n=e.rows||[],a=((i=e.payload)==null?void 0:i.table_title)||e.text||"Table",s=t==="spreadsheet";return o.jsxs("div",{className:"native-block",dir:"auto",style:{...Ko(e.highlight),marginBottom:14,padding:10,borderRadius:7},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:10,alignItems:"baseline",flexWrap:"wrap",marginBottom:7},children:[o.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--text-primary)"},children:a}),o.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)"},children:[n.length," row",n.length===1?"":"s"]})]}),o.jsx("div",{className:"native-table-wrap dl-scrollbar",children:o.jsxs("table",{className:`native-table ${s?"spreadsheet":""}`,style:{fontSize:12},children:[o.jsx("thead",{children:o.jsx("tr",{style:{background:"var(--surface-sunken)",color:"var(--text-primary)"},children:r.map((l,c)=>{const u=String(l||"").toLowerCase(),h=c>0&&(u.includes("pcv")||u.includes("pcb")||u.includes("model")||u.includes("spec")||String(l||"").length<=4||r.length>=6&&String(l||"").length<=12);return o.jsx("th",{dir:"auto",className:h?"vertical-th":"",style:h?{...sr,verticalAlign:"bottom"}:sr,children:h?o.jsx("span",{className:"vertical-th-text",children:l}):l},l)})})}),o.jsx("tbody",{children:n.map(l=>{const c=Ko(l.highlight,!0);return o.jsx("tr",{title:l.change_type,style:{background:c.background},children:r.map(u=>{var h;return o.jsx("td",{dir:"auto",style:{...Fr,borderLeft:c.borderLeft},children:pr((h=Ji(l.values))==null?void 0:h[u])},u)})},l.id)})})]})})]})}function Gi(e){return(Array.isArray(e==null?void 0:e.header)?e.header:[]).map(r=>String(r||"").trim()).filter(r=>r&&!hr(r))}function Ji(e){return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).map(([t,r])=>[String(t||"").trim(),r]).filter(([t])=>t&&!hr(t)))}function fg(e){const r=(Array.isArray(e==null?void 0:e.rows)?e.rows:[]).map(n=>{const a=Ji(n.values);return Object.values(a).map(i=>pr(i)).filter(i=>i&&i!=="-").join(" / ")||n.text||""}).filter(Boolean);return r.length?r.join(`
`):(e==null?void 0:e.text)||Gi(e).join(" / ")||"Document text"}function mg(e,t){var v;if(((v=e==null?void 0:e.payload)==null?void 0:v.source_format)==="docx"||t!=="document")return!1;const r=Array.isArray(e==null?void 0:e.header)?e.header:[],n=Gi(e),a=Array.isArray(e==null?void 0:e.rows)?e.rows:[],s=r.some(w=>hr(w)),i=a.flatMap(w=>Object.values(Ji(w.values||{})).map(b=>String(b||"").trim()).filter(Boolean));if(s&&n.length<=2)return!0;if(!a.length||!i.length)return!1;const c=i.filter(w=>w.length>70||w.split(/\s+/).length>=10).length/Math.max(1,i.length),h=i.filter(w=>/[\u0600-\u06ff]/.test(w)&&/[A-Za-z]/.test(w)).length/Math.max(1,i.length),g=n.filter(w=>/feature|description|item|name|order|code|part|model|price|amount|status|date|term|rent|fee/i.test(w)).length/Math.max(1,n.length);return h>=.2&&g<.35||a.length<=6&&c>=.45&&g<.35}function hg({columns:e,rows:t}){if(e=(e||[]).filter(n=>!hr(n)),!e.length||!(t!=null&&t.length))return null;const r=Vh(e.length,420,920);return o.jsx("div",{className:"dl-scrollbar table-scroll-frame",style:{marginTop:12},children:o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12,minWidth:r},children:[o.jsx("thead",{children:o.jsx("tr",{style:{background:"#f2eee6"},children:e.map(n=>o.jsx("th",{title:n,style:sr,dir:"auto",children:n},n))})}),o.jsx("tbody",{children:t.map((n,a)=>o.jsx("tr",{children:e.map(s=>{var i;return o.jsx("td",{style:Fr,dir:"auto",children:pr(((i=n==null?void 0:n.values)==null?void 0:i[s])??(n==null?void 0:n[s]))},s)})},a))})]})})}function or({columns:e,rows:t}){const r=(e||[]).filter(n=>!hr(n));return o.jsx("div",{className:"dl-scrollbar",style:{overflowX:"auto"},children:o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13,minWidth:780},children:[o.jsx("thead",{children:o.jsx("tr",{style:{background:"#1f2937",color:"white"},children:r.map(n=>o.jsx("th",{dir:"auto",style:{...sr,padding:"10px 12px",borderBottom:"1px solid #384250",color:"white"},children:n},n))})}),o.jsx("tbody",{children:t.slice(0,200).map((n,a)=>o.jsx("tr",{children:r.map(s=>o.jsx("td",{dir:"auto",style:Fr,children:pr(n[s])},s))},a))})]})})}function gg({rows:e}){return e!=null&&e.length?o.jsx("div",{className:"dl-scrollbar",style:{overflowX:"auto",marginTop:10},children:o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13,minWidth:640},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{background:"#f2eee6",color:"#344054"},children:[o.jsx("th",{style:sr,dir:"auto",children:"Field"}),o.jsx("th",{style:sr,dir:"auto",children:"Before"}),o.jsx("th",{style:sr,dir:"auto",children:"After"})]})}),o.jsx("tbody",{children:e.map((t,r)=>o.jsxs("tr",{children:[o.jsx("td",{style:Fr,dir:"auto",children:t.field||t.column||t.name||"-"}),o.jsx("td",{style:{...Fr,color:K.DELETED.text},dir:"auto",children:pr(t.before??t.base??t.old)}),o.jsx("td",{style:{...Fr,color:K.ADDED.text},dir:"auto",children:pr(t.after??t.target??t.new)})]},r))})]})}):null}function xg({runId:e,meta:t,tab:r,setTab:n}){return o.jsxs(o.Fragment,{children:[o.jsx(yg,{meta:t}),o.jsx(wg,{tab:r,setTab:n}),o.jsxs("main",{style:{...pt,padding:12},children:[r==="overview"&&o.jsx(bg,{runId:e,meta:t}),r==="tables"&&o.jsx(kg,{runId:e}),r==="text"&&o.jsx(jg,{runId:e}),r==="json"&&o.jsx(Sg,{runId:e,meta:t})]}),o.jsxs("section",{className:"workspace-surface extraction-query-surface",style:{marginTop:12},children:[o.jsx("div",{className:"surface-title-row",children:o.jsxs("div",{children:[o.jsx("h3",{children:"Ask This Extraction"}),o.jsx("p",{children:"Search the extracted text, tables, headings, and page evidence from this document."})]})}),o.jsx(vg,{runId:e})]})]})}function vg({runId:e}){const[t,r]=y.useState(""),[n,a]=y.useState([]),[s,i]=y.useState(!1),l=async()=>{const c=t.trim();if(!c||s)return;const u=`extract-user-${Date.now()}`,h=`extract-answer-${Date.now()}`;a(m=>[...m,{id:u,role:"user",text:c,timestamp:new Date().toLocaleTimeString()}]),r(""),i(!0);try{const m=await fetch(`${B}/extract-runs/${e}/query`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:c,mode:"fast"})});if(!m.ok)throw new Error(await re(m));const g=await m.json();a(v=>{var w;return[...v,{id:h,role:"assistant",text:g.answer||`Found ${((w=g.rows)==null?void 0:w.length)||0} matching passages.`,rows:g.rows||[],columns:g.columns||["Page","Type","Path","Text","Score"],timestamp:new Date().toLocaleTimeString()}]})}catch(m){a(g=>[...g,{id:h,role:"assistant",text:ie(m),rows:[],timestamp:new Date().toLocaleTimeString(),isError:!0}])}finally{i(!1)}};return o.jsxs("section",{className:"query-workbench",children:[n.length===0?o.jsx(Qt,{label:"Ask about clauses, tables, fields, dates, page content, or extracted values."}):o.jsx("div",{className:"query-chat-log",children:n.map(c=>{var u;return o.jsxs("article",{className:`query-message ${c.role}${c.isError?" error":""}`,children:[o.jsxs("div",{className:"query-message-meta",children:[o.jsx("span",{children:c.role==="user"?"You":"Extraction query"}),o.jsx("span",{children:c.timestamp})]}),o.jsx("div",{className:"query-message-text",dir:"auto",children:c.text}),((u=c.rows)==null?void 0:u.length)>0&&o.jsx("div",{className:"query-results-shell",style:{marginTop:10},children:o.jsx(or,{columns:c.columns,rows:c.rows})})]},c.id)})}),o.jsxs("div",{className:"query-composer",children:[o.jsx("textarea",{value:t,onChange:c=>r(c.target.value),onKeyDown:c=>{c.key==="Enter"&&!c.shiftKey&&(c.preventDefault(),l())},placeholder:"Ask about the extracted document...",disabled:s,rows:3}),o.jsx("div",{className:"query-composer-actions",children:o.jsx("button",{type:"button",className:"primary-action compact",onClick:l,disabled:s||!t.trim(),children:s?"Searching":"Ask"})})]})]})}function yg({meta:e}){var r,n;const t=e.summary||{};return o.jsxs("section",{style:{...pt,padding:12,display:"flex",gap:8,marginBottom:12,flexWrap:"wrap",alignItems:"center"},children:[o.jsx(ke,{label:"Format",value:(e.source_format||"-").toUpperCase()}),o.jsx(ke,{label:"Documents",value:((r=e.documents)==null?void 0:r.length)||t.document_count||1}),o.jsx(ke,{label:"Coverage",value:typeof e.coverage=="number"?`${e.coverage.toFixed(1)}%`:"-"}),o.jsx(ke,{label:"Quality",value:t.quality||"-"}),o.jsx(ke,{label:"Tables",value:t.table_count||0}),o.jsx(ke,{label:"Blocks",value:Object.values(t.block_counts||{}).reduce((a,s)=>a+Number(s||0),0)}),o.jsx(ke,{label:"Pages",value:e.n_pages||e.native_pages||0}),Number(((n=e.ai_usage)==null?void 0:n.total_tokens)||0)>0&&o.jsx(ke,{label:"AI tokens",value:`${yt(e.ai_usage.total_tokens)} (${yt(e.ai_usage.calls||0)} calls)`})]})}function wg({tab:e,setTab:t}){const r=[["overview","Extraction overview"],["tables","Extracted tables"],["text","Text blocks"],["json","Structured JSON"]];return o.jsx("nav",{style:{display:"flex",gap:4,borderBottom:"1px solid #d8d0c3",marginBottom:12,overflowX:"auto"},children:r.map(([n,a])=>{const s=e===n;return o.jsx("button",{onClick:()=>t(n),style:{padding:"10px 14px",background:s?"#1f2937":"transparent",color:s?"white":"#344054",border:s?"1px solid #1f2937":"1px solid transparent",borderRadius:"8px 8px 0 0",cursor:"pointer",fontWeight:600,whiteSpace:"nowrap"},children:a},n)})})}function bg({runId:e,meta:t}){const r=t.summary||{},n=t.ai_analysis,a=(n==null?void 0:n.result)||null;return o.jsxs("div",{children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12,flexWrap:"wrap",marginBottom:12},children:[o.jsxs("div",{children:[o.jsx("h2",{style:{margin:0,fontSize:18,fontWeight:650},dir:"auto",children:t.label||"Extracted document"}),o.jsx("p",{style:{margin:"6px 0 0",color:"#667085",fontSize:13},dir:"auto",children:r.message||"Extraction complete."})]}),o.jsx("button",{onClick:()=>{window.location.href=`${B}/extract-runs/${e}/json`},style:Mh(!1),children:"Download JSON"})]}),o.jsxs("div",{className:"report-metrics",style:{display:"grid",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",gap:10,marginBottom:12},children:[o.jsx(da,{label:"Extraction coverage",value:typeof t.coverage=="number"?`${t.coverage.toFixed(1)}%`:"-"}),o.jsx(da,{label:"Tables detected",value:r.table_count||0}),o.jsx(da,{label:"Table rows",value:r.table_row_count||0}),o.jsx(da,{label:"Image/OCR blocks",value:r.figure_count||0})]}),o.jsxs("div",{style:{...pt,padding:14,boxShadow:"none",marginBottom:12},children:[o.jsx("div",{style:{fontWeight:650,marginBottom:8},children:"Block breakdown"}),o.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[Object.entries(r.block_counts||{}).map(([s,i])=>o.jsx(ke,{label:s.replace("_"," "),value:i},s)),Object.keys(r.block_counts||{}).length===0&&o.jsx("span",{style:{color:"#667085"},children:"No block statistics available."})]})]}),n&&o.jsxs("div",{style:{...pt,padding:14,boxShadow:"none"},children:[o.jsxs("div",{style:{fontWeight:650,marginBottom:8},children:["AI-assisted analysis ",n.available?"- available":"- unavailable"]}),!n.available&&o.jsx("div",{style:{color:K.DELETED.text},dir:"auto",children:normalizeErrorMessage(n.error)||"AI analysis was not generated."}),a&&o.jsxs("div",{style:{color:"#344054",lineHeight:1.5},children:[o.jsx("p",{style:{marginTop:0},dir:"auto",children:a.executive_summary||"AI analysis completed."}),Array.isArray(a.key_items)&&a.key_items.length>0&&o.jsx(or,{columns:["Item"],rows:a.key_items.slice(0,20).map(s=>({Item:typeof s=="string"?s:JSON.stringify(s)}))})]})]}),o.jsx(Xh,{usage:t.ai_usage})]})}function da({label:e,value:t}){return o.jsxs("div",{style:{background:"#fbfaf6",border:"1px solid #ded6c8",borderRadius:8,padding:12},children:[o.jsx("div",{style:{fontSize:12,color:"#667085",fontWeight:600},children:e}),o.jsx("div",{style:{marginTop:4,fontSize:22,color:"#1f2937",fontWeight:650},children:t})]})}function kg({runId:e}){const[t,r]=y.useState({loading:!0,error:"",tables:[]});return y.useEffect(()=>{let n=!1;return r({loading:!0,error:"",tables:[]}),fetch(`${B}/extract-runs/${e}/tables?include_rows=true`).then(async a=>{if(!a.ok)throw new Error(await re(a));return a.json()}).then(a=>{n||r({loading:!1,error:"",tables:a.tables||[]})}).catch(a=>{n||r({loading:!1,error:ie(a),tables:[]})}),()=>{n=!0}},[e]),t.loading?o.jsx(Vn,{label:"Loading extracted tables..."}):t.error?o.jsx(Yi,{message:t.error}):t.tables.length?o.jsx("div",{style:{display:"grid",gap:12},children:t.tables.map(n=>o.jsxs("div",{style:{...pt,padding:12,boxShadow:"none"},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12,flexWrap:"wrap",marginBottom:8},children:[o.jsxs("div",{children:[o.jsx("div",{style:{fontWeight:650},dir:"auto",children:n.display_name||n.title||"Detected table"}),o.jsxs("div",{style:{color:"#667085",fontSize:13,marginTop:3},dir:"auto",children:[n.page_label," · ",n.n_columns," columns · ",n.n_rows," rows · header quality ",Math.round((n.header_quality||0)*100),"%",n.extraction_confidence?` · extraction ${Math.round(n.extraction_confidence*100)}%`:""]})]}),o.jsx("code",{children:String(n.id||"").slice(0,8)})]}),Array.isArray(n.quality_warnings)&&n.quality_warnings.length>0&&o.jsxs("div",{style:{color:"#8a5a00",fontSize:13,marginBottom:8},dir:"auto",children:["Review note: ",n.quality_warnings.slice(0,2).join(" ")]}),o.jsxs("div",{style:{color:"#475467",fontSize:13,marginBottom:8},dir:"auto",children:["Columns: ",(n.columns||[]).slice(0,12).join(" | ")||"No columns detected"]}),o.jsx(hg,{columns:n.columns||[],rows:n.rows||n.row_preview||[]})]},n.id))}):o.jsx(Qt,{label:"No tables were detected in this document."})}function jg({runId:e}){const[t,r]=y.useState({loading:!0,error:"",blocks:[]});if(y.useEffect(()=>{let a=!1;return r({loading:!0,error:"",blocks:[]}),fetch(`${B}/extract-runs/${e}/blocks?limit=1000`).then(async s=>{if(!s.ok)throw new Error(await re(s));return s.json()}).then(s=>{a||r({loading:!1,error:"",blocks:s.blocks||[]})}).catch(s=>{a||r({loading:!1,error:ie(s),blocks:[]})}),()=>{a=!0}},[e]),t.loading)return o.jsx(Vn,{label:"Loading extracted text blocks..."});if(t.error)return o.jsx(Yi,{message:t.error});const n=t.blocks.filter(a=>a.text||a.type==="table").slice(0,500).map(a=>({Page:a.page_number,Type:a.type,Path:a.path,Text:Qe(a.text||JSON.stringify(a.payload||{}),700)}));return n.length?o.jsx(or,{columns:["Page","Type","Path","Text"],rows:n}):o.jsx(Qt,{label:"No extracted text blocks were returned."})}function Sg({runId:e,meta:t}){const[r,n]=y.useState({loading:!0,error:"",data:null});if(y.useEffect(()=>{let m=!1;return n({loading:!0,error:"",data:null}),Fh(e).then(g=>{m||n({loading:!1,error:"",data:g})}).catch(g=>{m||n({loading:!1,error:ie(g),data:null})}),()=>{m=!0}},[e]),r.loading)return o.jsx(Vn,{label:"Building structured JSON preview..."});if(r.error)return o.jsx(Yi,{message:r.error});const a=r.data||{},s=a.tables||[],i=a.pages||[],l=a.content||i.flatMap(m=>m.content||[]),c=a.document_summary||{},u=c.extraction_quality||{},h=l.map(m=>m.inferred_record).filter(Boolean);return o.jsxs("div",{style:{display:"grid",gap:12},children:[o.jsxs("div",{style:{...pt,padding:12,boxShadow:"none"},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12,alignItems:"flex-start",flexWrap:"wrap"},children:[o.jsxs("div",{children:[o.jsx("div",{style:{fontWeight:650,marginBottom:8},dir:"auto",children:"Business extraction summary"}),o.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",color:"#344054",fontSize:13},children:[o.jsxs("span",{style:yr,children:["Document: ",c.label||t.label||"uploaded file"]}),o.jsxs("span",{style:yr,children:["Type: ",c.source_type||t.source_format||"document"]}),o.jsxs("span",{style:yr,children:["Template: ",c.detected_template||"generic document"]}),o.jsxs("span",{style:yr,children:["Quality: ",u.grade||"not rated"]}),Number.isFinite(u.score)&&o.jsxs("span",{style:yr,children:["Score: ",Math.round(u.score*100),"%"]}),c.detected_language&&o.jsxs("span",{style:yr,children:["Script: ",c.detected_language]})]})]}),o.jsx("button",{onClick:()=>{window.location.href=`${B}/extract-runs/${e}/json`},style:Oh(),children:"Download clean JSON"})]}),Array.isArray(u.warnings)&&u.warnings.length>0&&o.jsx("div",{style:{color:"#8a5a00",fontSize:13,marginTop:8,lineHeight:1.4},dir:"auto",children:u.warnings.slice(0,3).map(m=>m.message||m).join(" ")})]}),o.jsxs("div",{style:{...pt,padding:12,boxShadow:"none"},children:[o.jsx("div",{style:{display:"flex",justifyContent:"space-between",gap:10,alignItems:"center",marginBottom:8},children:o.jsxs("div",{children:[o.jsx("div",{style:{fontWeight:650},children:"Document-order extracted text"}),o.jsxs("div",{style:{color:"#667085",fontSize:13,marginTop:3},children:[l.length," text block(s), ",h.length," inferred record(s), ",s.length," table(s), ",i.length," page(s)"]})]})}),l.length>0?o.jsx(or,{columns:["Page","Type","Path","Text","Inferred record"],rows:l.slice(0,500).map(m=>({Page:m.page,Type:m.type,Path:m.path,Text:Qe(m.text,900),"Inferred record":m.inferred_record?zc(m.inferred_record.values):""}))}):o.jsx(Qt,{label:"No ordered text content was returned. Check the Text blocks tab."})]}),h.length>0&&o.jsxs("div",{style:{...pt,padding:12,boxShadow:"none"},children:[o.jsx("div",{style:{fontWeight:650,marginBottom:8},children:"Inferred business records"}),o.jsx(or,{columns:["Page","Values","Source text","Citation"],rows:h.slice(0,120).map(m=>({Page:m.page,Values:zc(m.values),"Source text":Qe(m.source_text,700),Citation:m.citation}))})]}),s.length>0&&o.jsxs("div",{style:{...pt,padding:12,boxShadow:"none"},children:[o.jsx("div",{style:{fontWeight:650,marginBottom:8},children:"Extracted tables"}),o.jsx(or,{columns:["title","page","area","row_count","columns"],rows:s.slice(0,30).map(m=>({title:m.title,page:m.page,area:m.area,row_count:m.row_count,columns:(m.columns||[]).join(" | ")}))})]}),o.jsxs("div",{style:{...pt,padding:12,boxShadow:"none"},children:[o.jsx("div",{style:{fontWeight:650,marginBottom:8},children:"Clean JSON preview"}),o.jsx("pre",{className:"dl-scrollbar",style:{margin:0,maxHeight:360,overflow:"auto",background:"#fbfaf6",border:"1px solid #e0d8ca",borderRadius:8,padding:12,fontSize:12,lineHeight:1.45,whiteSpace:"pre-wrap"},children:JSON.stringify({document_summary:a.document_summary,content:l.slice(0,30),tables:s.slice(0,10)},null,2)})]})]})}function Yi({message:e}){return o.jsx("div",{style:{marginTop:16,border:"1px solid #f0b4b4",background:"#fff5f5",color:"#9f1d1d",borderRadius:8,padding:13,fontSize:14,fontWeight:600,lineHeight:1.45},children:e})}/**
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
 */const Ng=y.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:a="",children:s,iconNode:i,...l},c)=>y.createElement("svg",{ref:c,...Eg,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:mp("lucide",a),...l},[...i.map(([u,h])=>y.createElement(u,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=(e,t)=>{const r=y.forwardRef(({className:n,...a},s)=>y.createElement(Ng,{ref:s,iconNode:t,className:mp(`lucide-${_g(e)}`,n),...a}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=gr("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=gr("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=gr("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=gr("FileOutput",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2",key:"1vk7w2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6",key:"1jink5"}],["path",{d:"m5 11-3 3",key:"1dgrs4"}],["path",{d:"m5 17-3-3h10",key:"1mvvaf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=gr("GitCompare",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=gr("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=gr("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);function Lg(){return o.jsxs("div",{className:"altrai-wordmark","aria-label":"Altrai",children:[o.jsx("span",{children:"Altr"}),o.jsx("span",{className:"accent",children:"ai"})]})}const Ig=[{label:"AI Document Intelligence",items:[{key:"compare",label:"Compare",icon:Dg},{key:"extract",label:"Extract",icon:Tg},{key:"jobs",label:"Work History",icon:$g}]},{label:"Administration",items:[{key:"admin",label:"Admin Studio",icon:Rg,title:"Use cases, datasets, and access policies"}]},{label:"AI Agents",items:[{key:"agents",label:"Coming soon",icon:Cg,disabled:!0,title:"Future skills and multi-agent workflows"}]}];function Ag({workspace:e,onNavigate:t,collapsed:r=!1}){return o.jsx("nav",{className:"workspace-nav","aria-label":"Workspace navigation",children:Ig.map(n=>o.jsxs("div",{className:"workspace-nav-group",children:[!r&&o.jsx("div",{className:"workspace-nav-label",children:n.label}),n.items.map(a=>{const s=e===a.key;return o.jsxs("button",{type:"button",className:`workspace-nav-item${s?" active":""}`,onClick:()=>!a.disabled&&t(a.key),disabled:a.disabled,title:r?a.title||a.label:a.title,children:[o.jsx(a.icon,{className:"workspace-nav-icon","aria-hidden":"true"}),!r&&o.jsx("span",{className:"workspace-nav-text",children:a.label})]},`${n.label}-${a.label}-${a.key}`)})]},n.label))})}const hp=y.createContext(null),Mc="altrai_theme";function Mg({children:e}){const[t,r]=y.useState(()=>typeof window>"u"?"system":window.localStorage.getItem(Mc)||"system");y.useEffect(()=>{document.documentElement.dataset.theme=t,window.localStorage.setItem(Mc,t)},[t]);const n=y.useMemo(()=>({theme:t,setTheme:r}),[t]);return o.jsx(hp.Provider,{value:n,children:e})}function gp(){const e=y.useContext(hp);if(!e)throw new Error("useTheme must be used within ThemeProvider");return e}const Og=[["system","Auto"],["light","Light"],["dark","Dark"]];function Fg({collapsed:e=!1}){const{theme:t,setTheme:r}=gp();return o.jsxs("footer",{className:"user-footer",children:[o.jsx("div",{className:"user-avatar","aria-hidden":"true",children:"N"}),!e&&o.jsxs("div",{className:"user-meta",children:[o.jsx("strong",{children:"Nithin"}),o.jsx("span",{children:"platform_admin"})]}),!e&&o.jsx("div",{className:"rail-theme-toggle","aria-label":"Theme selector",children:Og.map(([n,a])=>o.jsx("button",{type:"button",className:t===n?"active":"",onClick:()=>r(n),children:a},n))})]})}const Ug={jobs:"Work History",compare:"Compare",extract:"Extract",agents:"AI Agents",admin:"Admin Studio"},Bg={compare:{label:"Comparison History",historyKind:"comparison"},extract:{label:"Extraction History",historyKind:"extraction"}};function Wg({workspace:e,runId:t,onNavigate:r,onDownloadReport:n,children:a}){const[s,i]=y.useState(!1),{theme:l}=gp(),c=Bg[e];return o.jsxs("div",{className:`workspace-shell theme-${l}${s?" collapsed":""}`,children:[o.jsxs("aside",{className:"workspace-sidebar",children:[o.jsxs("div",{className:"workspace-brand",children:[o.jsx("div",{className:"workspace-brand-copy",children:o.jsx(Lg,{})}),o.jsx("button",{type:"button",className:"workspace-collapse-button",onClick:()=>i(u=>!u),"aria-label":s?"Expand navigation":"Collapse navigation",title:s?"Expand navigation":"Collapse navigation",children:s?o.jsx(Pg,{size:16,strokeWidth:1.5}):o.jsx(zg,{size:16,strokeWidth:1.5})})]}),o.jsx(Ag,{workspace:e,onNavigate:r,collapsed:s}),o.jsx(Fg,{collapsed:s})]}),o.jsxs("section",{className:"workspace-main",children:[o.jsxs("header",{className:"workspace-topbar",children:[o.jsx("div",{children:o.jsx("h1",{children:Ug[e]||"Workspace"})}),o.jsxs("div",{className:"workspace-actions",children:[t&&o.jsx("button",{type:"button",className:"workspace-primary-action",onClick:n,children:"Export report"}),c&&o.jsx("button",{type:"button",className:"workspace-secondary-action",onClick:()=>r("jobs",{historyKind:c.historyKind}),children:c.label})]})]}),o.jsx("div",{className:"workspace-content",children:a})]})]})}const qg=[["platform_admin","Platform Admin"],["business_unit_admin","Business Unit Admin"],["reviewer","Reviewer"],["submitter","Submitter"],["viewer","Viewer"]],Oc={supplier:"",family_name:"",domain:"generic",description:"",use_case_type:"comparison",expected_formats:["pdf","docx"],sample_plan:"",onboarding_notes:"",learning_mode:"ai_assisted_bootstrap",allowed_roles:[]},Vg=[["pdf","PDF"],["docx","Word"],["xlsx","Excel"],["csv","CSV/TSV"],["image","Scanned image"]],Hg=[["deterministic_first","Deterministic first"],["ai_assisted_bootstrap","AI-assisted bootstrap"],["manual_profile","Manual profile"]],Qg=()=>({id:crypto.randomUUID(),baseline:null,revised:null});function Kg(){var ll,cl,ul,dl;const[e,t]=y.useState([]),[r,n]=y.useState(""),[a,s]=y.useState(null),[i,l]=y.useState(Oc),[c,u]=y.useState({supplier:"",family_name:"",domain:"generic",description:""}),[h,m]=y.useState(""),[g,v]=y.useState([]),[w,b]=y.useState(""),[S,f]=y.useState({use_case_type:"comparison",expected_formats:["pdf","docx"],sample_plan:"",onboarding_notes:"",learning_mode:"ai_assisted_bootstrap"}),[p,d]=y.useState({baseline:null,revised:null,variationPairs:[]}),[x,j]=y.useState(!0),[N,_]=y.useState(null),[z,D]=y.useState(""),[R,q]=y.useState(null),[_e,Ae]=y.useState(null),[Ct,Ee]=y.useState(null),[Ye,Ne]=y.useState(0),[C,$]=y.useState({baseline:null,revised:null,variations:[]}),[I,Q]=y.useState([]),[se,Xe]=y.useState(!0),[J,L]=y.useState(""),[M,O]=y.useState(""),[ee,A]=y.useState(""),[ye,gt]=y.useState(""),[Xi,Zi]=y.useState(!0),[el,yp]=y.useState(!0),[tl,wp]=y.useState(!1),[rl,bp]=y.useState(!1),xr=()=>({"Content-Type":"application/json","X-User-Role":window.sessionStorage.getItem("simulated_role")||"platform_admin"}),Xr=async()=>{Xe(!0),O("");try{const k=await wr("/admin/datasets",{headers:xr()});t(k.datasets||[])}catch(k){O(ie(k))}finally{Xe(!1)}};y.useEffect(()=>{Xr(),nl()},[]),y.useEffect(()=>{if(J!=="analyze"&&J!=="create")return;const k=Date.now();Ne(0);const T=window.setInterval(()=>{Ne(Math.floor((Date.now()-k)/1e3))},1e3);return()=>window.clearInterval(T)},[J]);const nl=async()=>{try{const k=await wr("/ai-health");_(k);const T=(k.models||[]).find(F=>F.kind==="chat"&&F.configured);T!=null&&T.id&&D(T.id)}catch{_({ok:!1,models:[],message:"AI model status is unavailable."})}},Hn=async k=>{var T;n(k),O(""),A("");try{const F=await wr(`/admin/datasets/${k}`,{headers:xr()});s(F),u({supplier:F.supplier||"",family_name:F.family_name||"",domain:F.domain||"generic",description:F.description||""}),m(F.prompt_guidelines||""),v(F.allowed_roles||[]),f({use_case_type:F.use_case_type||"comparison",expected_formats:F.expected_formats||["pdf","docx"],sample_plan:F.sample_plan||"",onboarding_notes:F.onboarding_notes||"",learning_mode:F.learning_mode||"deterministic_first"}),b(JSON.stringify(((T=F.template_profile)==null?void 0:T.column_rules)||[],null,2)),await kp(k)}catch(F){O(ie(F))}},kp=async k=>{try{const T=await wr(`/admin/datasets/${k}/documents`,{headers:xr()});Q(T.documents||[])}catch{Q([])}},jp=async k=>{k.preventDefault(),L("create"),O(""),A("");const T=Ks(p);Ee({status:"running",stage:"create",submitted:T,startedAt:new Date().toISOString(),events:["Saving use case metadata"],error:""});try{const F=await ox("/admin/datasets",{method:"POST",headers:xr(),body:JSON.stringify(i)});let he="",ue="";Ee(V=>({...V||{},status:"success",stage:"saved",datasetId:F.id,events:[...(V==null?void 0:V.events)||[],"Use case metadata saved"]})),A("Use case created. Opening saved profile.");try{await Xr(),F.id&&await Hn(F.id)}catch{A("Use case created. Refresh the use case list if it does not appear immediately.")}if(F.id&&pa(p)){Ee(V=>({...V||{},stage:"samples",events:[...(V==null?void 0:V.events)||[],"Learning attached samples"]}));try{await al(F.id,p,i.onboarding_notes,i.learning_mode==="ai_assisted_bootstrap"),he=" Sample documents learned and model profile bootstrapped.",Ee(V=>({...V||{},events:[...(V==null?void 0:V.events)||[],"Sample learning completed"]}))}catch(V){ue=` Sample learning did not finish: ${ie(V)}`,Ee(zt=>({...zt||{},sampleWarning:ue,events:[...(zt==null?void 0:zt.events)||[],"Sample learning needs attention"]}))}}Ee(V=>({...V||{},status:"success",stage:"done",datasetId:F.id,sampleWarning:ue,events:[...(V==null?void 0:V.events)||[],"Ready for refinement"],finishedAt:new Date().toISOString()})),A(`Use case created.${he||ue||" You can attach or relearn samples from the saved use case."}`),l(Oc),d({baseline:null,revised:null,variationPairs:[]}),q(null)}catch(F){const he=ie(F);O(he),Ee(ue=>({...ue||{},status:"failed",finishedAt:new Date().toISOString(),events:[...(ue==null?void 0:ue.events)||[],"Create failed"],error:he}))}finally{L("")}},Sp=k=>{try{const T=Bc(w);if(T.some(he=>he.role===k)){A(`A rule for label '${k}' already exists.`);return}const F=[...T,{pattern:`.*${k.toLowerCase().replace(/_/g,".*")}.*`,role:k}];b(JSON.stringify(F,null,2)),A(`Added suggested mapping rule for '${k}'. Click 'Save profile settings' to apply.`)}catch{O("Column rules JSON is malformed. Please fix it before adding labels.")}},_p=async()=>{if(r){L("save"),O(""),A("");try{await wr(`/admin/datasets/${r}`,{method:"PUT",headers:xr(),body:JSON.stringify({prompt_guidelines:h,allowed_roles:g,column_rules:Bc(w),...c,...S})}),A("Use case settings saved."),await Xr(),await Hn(r)}catch(k){O(ie(k))}finally{L("")}}},Ep=async k=>{if(k.preventDefault(),!(!r||!pa(C))){L("bootstrap"),O(""),A("");try{await al(r,C,S.onboarding_notes||"",S.learning_mode==="ai_assisted_bootstrap"),A("Sample documents learned and model profile updated."),$({baseline:null,revised:null,variations:[]}),await Hn(r)}catch(T){O(ie(T))}finally{L("")}}},al=async(k,T,F,he)=>{const ue=new FormData;T.baseline&&ue.append("baseline",T.baseline),T.revised&&ue.append("revised",T.revised),ys(T).forEach(zt=>ue.append("variations",zt)),ue.append("notes",F||""),ue.append("use_llm",String(he));const V=await Np(k,ue);if(!V.ok)throw new Error(await re(V));return V.json()},Np=async(k,T)=>{const F=()=>{const V=new FormData;for(const[zt,$p]of T.entries())V.append(zt,$p);return V},he=V=>fetch(`${B}${V}`,{method:"POST",headers:{"X-User-Role":window.sessionStorage.getItem("simulated_role")||"platform_admin"},body:F()}),ue=await he(`/admin/datasets/${k}/samples`);return ue.status!==404?ue:he(`/api/admin/datasets/${k}/samples`)},Cp=async()=>{if(pa(p)){if(x&&!z){O("Select a configured AI model before running AI-assisted sample analysis.");return}L("analyze"),O(""),A(""),q(null),Ae({status:"running",mode:x?"ai":"deterministic",model:x?z:"",submitted:Ks(p),startedAt:new Date().toISOString(),events:["Preparing upload context"],error:""});try{const k=await Xg({files:p,form:i,useAiAnalysis:x,selectedModel:z});if(!k.ok)throw new Error(await re(k));const T=await k.json(),F=T.suggested_dataset||{};q(T),Ae(he=>({...he||{},status:"success",finishedAt:new Date().toISOString(),backendUsage:Jg(T),model:T.selected_model||z,events:[...(he==null?void 0:he.events)||[],"Sample structure analyzed","Metadata suggestions generated"]})),l({...i,...F,allowed_roles:i.allowed_roles||[],learning_mode:x?"ai_assisted_bootstrap":"deterministic_first"}),A(x?"Sample analysis complete. Review the suggested use case model before creating it.":"Deterministic sample scan complete. Review the suggested use case model before creating it.")}catch(k){const T=ie(k);O(T),Ae(F=>({...F||{},status:"failed",finishedAt:new Date().toISOString(),events:[...(F==null?void 0:F.events)||[],"Analysis failed"],error:T}))}finally{L("")}}},zp=async()=>{if(!(!r||!a||!window.confirm(`Delete use case "${a.supplier} · ${a.family_name}"? This removes the saved model profile from Admin Studio.`))){L("delete"),O(""),A("");try{await wr(`/admin/datasets/${r}`,{method:"DELETE",headers:xr()}),A("Use case deleted."),n(""),s(null),Q([]),await Xr()}catch(T){O(ie(T))}finally{L("")}}},sl=Ks(p),Qn=pa(p),ol=x&&!z,Pp=!Qn||J==="analyze"||ol,Tp=J==="analyze"?"Analyzing samples":x?"Analyze samples with AI":"Scan samples without AI",Dp=Qn?ol?"Select an available chat model before AI analysis.":x?"Ready to send selected samples and context to the model.":"Ready for deterministic structure scan. No AI tokens will be used.":"Attach a baseline, revised, or variation sample to start.",il=e.filter(k=>{const T=ye.trim().toLowerCase();return T?[k.supplier,k.family_name,k.domain,k.use_case_type].filter(Boolean).join(" ").toLowerCase().includes(T):!0});return o.jsxs("section",{className:"admin-studio",children:[o.jsx("div",{className:"admin-intro",children:o.jsxs("div",{children:[o.jsx("h2",{children:"Use Case Onboarding"}),o.jsx("p",{children:"Create document models from representative samples. Use AI to suggest metadata, then keep governance and access settings with the saved use case."})]})}),ee&&o.jsx("div",{className:"admin-notice",children:ee}),M&&o.jsx(On,{message:M}),o.jsxs("div",{className:"admin-grid",children:[o.jsxs("aside",{className:"admin-panel",children:[o.jsxs("div",{className:"admin-panel-head",children:[o.jsxs("div",{children:[o.jsx("h3",{children:"Use Cases"}),o.jsxs("p",{children:[e.length," saved model",e.length===1?"":"s"]})]}),o.jsx("button",{type:"button",className:"ghost-action compact",onClick:Xr,children:"Refresh"})]}),o.jsx("input",{className:"admin-search",value:ye,onChange:k=>gt(k.target.value),placeholder:"Search supplier, family, domain"}),se?o.jsx(Vn,{label:"Loading use cases"}):e.length===0?o.jsx(Qt,{label:"No use cases onboarded yet."}):il.length===0?o.jsx(Qt,{label:"No matching use cases."}):o.jsx("div",{className:"dataset-list",children:il.map(k=>o.jsxs("button",{type:"button",className:`dataset-item${r===k.id?" active":""}`,onClick:()=>Hn(k.id),children:[o.jsx("strong",{children:k.supplier}),o.jsx("span",{children:k.family_name}),o.jsxs("small",{children:[k.use_case_type||"comparison"," · ",(k.expected_formats||[]).join(", ")||"formats"," · ",(k.allowed_roles||[]).length||"all"," roles"]})]},k.id))})]}),o.jsxs("main",{className:"admin-panel",children:[o.jsx(fa,{title:"Onboard Document Model",description:"Create a new model from identity, representative samples, and generated metadata.",open:Xi,onToggle:()=>Zi(k=>!k)}),Xi?o.jsxs("form",{className:"admin-form onboarding-flow compact-flow",onSubmit:jp,children:[o.jsxs("section",{className:"admin-review-card",children:[o.jsxs("div",{children:[o.jsx("h4",{children:"Use Case Identity"}),o.jsx("p",{children:"Define the business model before uploading samples. Analysis will use these values as context instead of guessing from file names."})]}),o.jsxs("div",{className:"admin-review-grid",children:[o.jsxs("label",{children:["Supplier or entity",o.jsx("input",{value:i.supplier,required:!0,onChange:k=>l({...i,supplier:k.target.value}),placeholder:"Ford, HR, Finance, Legal"})]}),o.jsxs("label",{children:["Use case or family",o.jsx("input",{value:i.family_name,required:!0,onChange:k=>l({...i,family_name:k.target.value}),placeholder:"Order Guide, Policy, Contract"})]}),o.jsxs("label",{children:["Use case type",o.jsxs("select",{value:i.use_case_type,onChange:k=>l({...i,use_case_type:k.target.value}),children:[o.jsx("option",{value:"comparison",children:"Comparison"}),o.jsx("option",{value:"extraction",children:"Extraction"})]})]}),o.jsxs("label",{children:["Domain",o.jsxs("select",{value:i.domain,onChange:k=>l({...i,domain:k.target.value}),children:[o.jsx("option",{value:"generic",children:"Generic"}),o.jsx("option",{value:"automotive",children:"Automotive"}),o.jsx("option",{value:"legal",children:"Legal"}),o.jsx("option",{value:"financial",children:"Financial"}),o.jsx("option",{value:"hr",children:"HR"}),o.jsx("option",{value:"engineering",children:"Engineering"})]})]}),o.jsx("div",{className:"admin-wide-field",children:o.jsx(Uc,{value:i.expected_formats,onChange:k=>l({...i,expected_formats:k})})})]})]}),o.jsxs("section",{className:"sample-intake-card",children:[o.jsxs("div",{className:"sample-intake-head",children:[o.jsxs("div",{children:[o.jsx("h4",{children:"Training Samples"}),o.jsx("p",{children:"Attach one baseline and one revised document. Add variation pairs only when you have alternate layouts, suppliers, model years, or document structures."})]}),o.jsxs("label",{className:"ai-toggle",children:[o.jsx("input",{type:"checkbox",checked:x,onChange:k=>j(k.target.checked)}),"Analyze with AI model"]})]}),x?o.jsxs("div",{className:"model-select-row",children:[o.jsxs("label",{children:["Model deployment",o.jsx("select",{value:z,onChange:k=>D(k.target.value),children:Fc(N).length?Fc(N).map(k=>o.jsx("option",{value:k.id,children:k.label||k.id},k.id)):o.jsx("option",{value:"",children:"No configured chat model found"})})]}),o.jsx("button",{type:"button",className:"ghost-action compact",onClick:nl,children:"Refresh models"}),o.jsx("span",{children:N!=null&&N.ok?"Model connection verified.":(N==null?void 0:N.message)||"Checking AI model status."})]}):null,o.jsxs("div",{className:"sample-pair-grid",children:[o.jsxs("label",{children:["Baseline sample",o.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>{var T;return d({...p,baseline:((T=k.target.files)==null?void 0:T[0])||null})}})]}),o.jsxs("label",{children:["Revised sample",o.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>{var T;return d({...p,revised:((T=k.target.files)==null?void 0:T[0])||null})}})]})]}),o.jsx(tx,{value:p.variationPairs,onChange:k=>d({...p,variationPairs:k})}),o.jsxs("div",{className:"sample-actions analysis-action-row",children:[o.jsxs("button",{type:"button",className:"analyze-action-button",onClick:Cp,disabled:Pp,"aria-busy":J==="analyze",children:[o.jsx("span",{children:Tp}),o.jsx("small",{children:x?z||"No model selected":"Deterministic mode"})]}),o.jsxs("div",{className:"analysis-readiness",children:[o.jsx("span",{className:Qn?"ready":"blocked",children:Qn?"Samples ready":"Waiting for samples"}),o.jsxs("span",{children:[Za(sl.count)," file(s)"]}),o.jsx("span",{children:xp(sl.totalBytes)}),o.jsx("span",{children:x?"AI-assisted metadata":"No AI tokens"}),o.jsx("small",{children:Dp})]})]}),o.jsx(Zg,{run:_e,elapsedSeconds:Ye,useAiAnalysis:x,selectedModel:z})]}),R?o.jsx(rx,{data:R}):null,o.jsxs("section",{className:"admin-review-card",children:[o.jsxs("div",{children:[o.jsx("h4",{children:"Generated Metadata"}),o.jsx("p",{children:"Analysis fills this section with document understanding, extraction focus, accuracy hints, and reviewer notes. You can also maintain it manually."})]}),o.jsxs("div",{className:"admin-review-grid",children:[o.jsxs("label",{children:["Content description",o.jsx("textarea",{value:i.description,onChange:k=>l({...i,description:k.target.value}),placeholder:"Describe the documents, expected fields, tables, identifiers, and business context."})]}),o.jsxs("label",{children:["Onboarding notes",o.jsx("textarea",{value:i.onboarding_notes,onChange:k=>l({...i,onboarding_notes:k.target.value}),placeholder:"Known pain points, nested headers, language handling, reviewer expectations, or accuracy targets."})]}),o.jsxs("label",{className:"admin-wide-field",children:["Sample strategy",o.jsx("textarea",{value:i.sample_plan,onChange:k=>l({...i,sample_plan:k.target.value}),placeholder:"How many baseline/revised/variation samples should represent this model?"})]})]})]}),o.jsx("button",{type:"submit",className:"primary-action",disabled:J==="create",children:J==="create"?"Creating":"Create use case"}),o.jsx(ex,{run:Ct,elapsedSeconds:Ye})]}):o.jsxs("div",{className:"admin-collapsed-summary",children:[o.jsx("span",{children:"New use-case onboarding is collapsed."}),o.jsx("button",{type:"button",className:"ghost-action compact",onClick:()=>Zi(!0),children:"Open"})]})]})]}),a?o.jsx("section",{className:"admin-panel",children:o.jsxs("div",{className:"admin-detail",children:[o.jsx(fa,{title:`Refine ${a.supplier} · ${a.family_name}`,description:"Edit the saved model profile, then save changes without creating a duplicate.",open:el,onToggle:()=>yp(k=>!k),meta:`${S.use_case_type} model · ${(S.expected_formats||[]).join(", ")}`,actions:o.jsxs("div",{className:"admin-detail-actions",children:[o.jsx("button",{type:"button",className:"primary-action compact",onClick:_p,disabled:J==="save",children:J==="save"?"Saving":"Save changes"}),o.jsx("button",{type:"button",className:"danger-action compact",onClick:zp,disabled:J==="delete",children:J==="delete"?"Deleting":"Delete"})]})}),el?o.jsxs("div",{className:"admin-edit-shell",children:[o.jsxs("section",{className:"admin-review-card",children:[o.jsxs("div",{children:[o.jsx("h4",{children:"Model Identity"}),o.jsx("p",{children:"These fields control how the use case appears in Compare, Extract, and Work History."})]}),o.jsxs("div",{className:"admin-review-grid",children:[o.jsxs("label",{children:["Supplier or entity",o.jsx("input",{value:c.supplier,required:!0,onChange:k=>u({...c,supplier:k.target.value})})]}),o.jsxs("label",{children:["Use case or family",o.jsx("input",{value:c.family_name,required:!0,onChange:k=>u({...c,family_name:k.target.value})})]}),o.jsxs("label",{children:["Domain",o.jsxs("select",{value:c.domain,onChange:k=>u({...c,domain:k.target.value}),children:[o.jsx("option",{value:"generic",children:"Generic"}),o.jsx("option",{value:"automotive",children:"Automotive"}),o.jsx("option",{value:"legal",children:"Legal"}),o.jsx("option",{value:"financial",children:"Financial"}),o.jsx("option",{value:"hr",children:"HR"}),o.jsx("option",{value:"engineering",children:"Engineering"})]})]}),o.jsxs("label",{children:["Use case type",o.jsxs("select",{value:S.use_case_type,onChange:k=>f({...S,use_case_type:k.target.value}),children:[o.jsx("option",{value:"comparison",children:"Comparison"}),o.jsx("option",{value:"extraction",children:"Extraction"})]})]}),o.jsxs("label",{className:"admin-wide-field",children:["Description",o.jsx("textarea",{value:c.description,onChange:k=>u({...c,description:k.target.value}),placeholder:"Describe the document family, business purpose, and expected reviewer outcome."})]})]})]}),o.jsxs("section",{className:"admin-review-card",children:[o.jsxs("div",{children:[o.jsx("h4",{children:"Learning Profile"}),o.jsx("p",{children:"Refine how this model should learn from samples and which formats it should accept."})]}),o.jsxs("div",{className:"admin-config-grid",children:[o.jsxs("label",{children:["Learning mode",o.jsx("select",{value:S.learning_mode,onChange:k=>f({...S,learning_mode:k.target.value}),children:Hg.map(([k,T])=>o.jsx("option",{value:k,children:T},k))})]}),o.jsx("div",{className:"admin-wide-field",children:o.jsx(Uc,{value:S.expected_formats,onChange:k=>f({...S,expected_formats:k})})}),o.jsxs("label",{children:["Sample strategy",o.jsx("textarea",{value:S.sample_plan,onChange:k=>f({...S,sample_plan:k.target.value}),placeholder:"How many samples or variations should represent this model?"})]}),o.jsxs("label",{children:["Onboarding notes",o.jsx("textarea",{value:S.onboarding_notes,onChange:k=>f({...S,onboarding_notes:k.target.value}),placeholder:"Business context, known table layouts, accuracy targets, and reviewer comments."})]})]})]}),o.jsxs("section",{className:"admin-review-card",children:[o.jsxs("div",{children:[o.jsx("h4",{children:"Extraction Guidance"}),o.jsx("p",{children:"Optional instructions and column mappings used by deterministic extraction and AI-assisted bootstrapping."})]}),o.jsxs("div",{className:"admin-config-grid",children:[o.jsxs("label",{children:["Prompt and extraction guidelines",o.jsx("textarea",{value:h,onChange:k=>m(k.target.value),placeholder:"Example: prioritize PCB thickness, PCV code changes, nested pricing rows, or legal obligations."})]}),o.jsxs("label",{children:["Column rules JSON",o.jsx("textarea",{className:"mono",value:w,onChange:k=>b(k.target.value)})]})]})]}),o.jsxs("section",{className:"admin-review-card",children:[o.jsxs("div",{children:[o.jsx("h4",{children:"Access"}),o.jsx("p",{children:"Choose the roles allowed to see and use this model. Leave empty for all configured users."})]}),o.jsx(nx,{value:g,onChange:v})]})]}):null,o.jsx(fa,{title:"Sample Learning",description:"Attach or relearn representative samples after the model has been created.",open:tl,onToggle:()=>wp(k=>!k),meta:`${I.length} learned document${I.length===1?"":"s"}`}),tl?o.jsxs("form",{className:"seed-form",onSubmit:Ep,children:[o.jsxs("div",{children:[o.jsx("h4",{children:"Sample Document Learning"}),o.jsx("p",{children:"For comparison models, upload a baseline, revised document, and any format/layout variations. The profile stores structure, page range, table signatures, stable keys, and reviewer guidance."})]}),o.jsxs("div",{className:"sample-upload-grid",children:[o.jsxs("label",{children:["Baseline sample",o.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>{var T;return $({...C,baseline:((T=k.target.files)==null?void 0:T[0])||null})}})]}),o.jsxs("label",{children:["Revised sample",o.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>{var T;return $({...C,revised:((T=k.target.files)==null?void 0:T[0])||null})}})]}),o.jsxs("label",{children:["Additional variations",o.jsx("input",{type:"file",multiple:!0,accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>$({...C,variations:Array.from(k.target.files||[])})})]})]}),o.jsx("button",{type:"submit",className:"primary-action",disabled:!C.baseline&&!C.revised&&C.variations.length===0||J==="bootstrap",children:J==="bootstrap"?"Learning":"Learn from samples"})]}):null,o.jsx(fa,{title:"Profile Insights",description:"Review learned samples, stable keys, column rules, and AI onboarding notes.",open:rl,onToggle:()=>bp(k=>!k)}),rl?o.jsxs("div",{className:"admin-profile-grid",children:[o.jsx(ax,{profile:(ll=a.template_profile)==null?void 0:ll.sample_profile}),o.jsx(Gs,{title:"Sample Documents",items:I,labelKey:"label",valueKey:"page_count"}),o.jsx(sx,{profile:(cl=a.template_profile)==null?void 0:cl.ai_reasoning_profile,onAddLabel:Sp}),o.jsx(Gs,{title:"Stable Keys",items:(ul=a.template_profile)==null?void 0:ul.stable_key_patterns,labelKey:"name",valueKey:"regex"}),o.jsx(Gs,{title:"Column Rules",items:(dl=a.template_profile)==null?void 0:dl.column_rules,labelKey:"role",valueKey:"pattern"})]}):null]})}):null]})}function pa(e){var t;return!!(e!=null&&e.baseline||e!=null&&e.revised||(t=e==null?void 0:e.variations)!=null&&t.length||ys(e).length)}function ys(e){const t=Array.isArray(e==null?void 0:e.variations)?e.variations:[],r=Array.isArray(e==null?void 0:e.variationPairs)?e.variationPairs.flatMap(n=>[n.baseline,n.revised].filter(Boolean)):[];return[...t,...r]}function Gg(e){return[e==null?void 0:e.baseline,e==null?void 0:e.revised,...ys(e)].filter(Boolean)}function Ks(e){const t=Gg(e),r=t.reduce((n,a)=>n+Number(a.size||0),0);return{count:t.length,totalBytes:r,totalMb:r/(1024*1024),estimatedInputTokens:Math.max(1,Math.ceil(r/4)),files:t.map(n=>({name:n.name,size:n.size||0}))}}function xp(e){const t=Number(e||0);return t>=1024*1024?`${(t/(1024*1024)).toFixed(2)} MB`:t>=1024?`${(t/1024).toFixed(1)} KB`:`${t} B`}function Za(e){return new Intl.NumberFormat().format(Math.round(Number(e||0)))}function Fc(e){const t=Array.isArray(e==null?void 0:e.models)?e.models:[];return t.length?t.filter(r=>r.kind==="chat"):e!=null&&e.deployment?[{id:e.deployment,label:e.deployment,kind:"chat",configured:e.configured}]:[]}function Jg(e){var n,a,s;if(e!=null&&e.usage)return{prompt_tokens:Number(e.usage.prompt_tokens||0),completion_tokens:Number(e.usage.completion_tokens||0),total_tokens:Number(e.usage.total_tokens||0),estimated_prompt_tokens:Number(e.usage.estimated_prompt_tokens||0),prompt_chars:Number(e.usage.prompt_chars||0),calls:Number(e.usage.calls||0)};const t=[],r=(n=e==null?void 0:e.analysis)==null?void 0:n.usage;return r&&t.push(r),(s=(a=e==null?void 0:e.template_profile)==null?void 0:a.ai_reasoning_profile)!=null&&s.usage&&t.push(e.template_profile.ai_reasoning_profile.usage),t.reduce((i,l)=>({prompt_tokens:i.prompt_tokens+Number(l.prompt_tokens||0),completion_tokens:i.completion_tokens+Number(l.completion_tokens||0),total_tokens:i.total_tokens+Number(l.total_tokens||0),estimated_prompt_tokens:i.estimated_prompt_tokens+Number(l.estimated_prompt_tokens||0),prompt_chars:i.prompt_chars+Number(l.prompt_chars||0),calls:i.calls+Number(l.calls||(l.total_tokens?1:0))}),{prompt_tokens:0,completion_tokens:0,total_tokens:0,estimated_prompt_tokens:0,prompt_chars:0,calls:0})}function Yg({files:e,form:t,useAiAnalysis:r,selectedModel:n}){const a=new FormData;return e.baseline&&a.append("baseline",e.baseline),e.revised&&a.append("revised",e.revised),ys(e).forEach(s=>a.append("variations",s)),a.append("supplier",t.supplier||""),a.append("family_name",t.family_name||""),a.append("domain",t.domain||"generic"),a.append("use_case_type",t.use_case_type||"comparison"),a.append("expected_formats",(t.expected_formats||[]).join(",")),a.append("notes",t.onboarding_notes||t.sample_plan||""),a.append("use_llm",String(r)),a.append("model_name",r?n:""),a}async function Xg(e){const t=async a=>fetch(`${B}${a}`,{method:"POST",headers:{"X-User-Role":window.sessionStorage.getItem("simulated_role")||"platform_admin"},body:Yg(e)}),r=await t("/admin/analyze-use-case-samples");if(r.status!==404)return r;const n=await t("/admin/datasets/analyze-samples");if(n.status!==404)return n;throw new Error("Sample analyzer route is missing in the deployed backend revision. This is not a database schema issue. Rebuild and deploy the backend image that includes backend/routers/admin.py with POST /admin/analyze-use-case-samples.")}function fa({title:e,description:t,open:r,onToggle:n,meta:a="",actions:s=null}){return o.jsxs("div",{className:"admin-collapse-head",children:[o.jsx("button",{type:"button",className:"admin-collapse-toggle",onClick:n,"aria-expanded":r,children:o.jsx("span",{children:r?"-":"+"})}),o.jsxs("div",{children:[o.jsx("h3",{children:e}),t?o.jsx("p",{children:t}):null,a?o.jsx("span",{className:"admin-model-badge",children:a}):null]}),s?o.jsx("div",{className:"admin-collapse-actions",children:s}):null]})}function Zg({run:e,elapsedSeconds:t,useAiAnalysis:r,selectedModel:n}){var h,m;if(!e)return null;const a=e.submitted||{},s=e.backendUsage||{},i=e.status==="running"?"Running":e.status==="success"?"Completed":"Failed",l=e.status==="success"?3:e.status==="failed"?1:Math.min(3,Math.floor(t/12)),c=[["prepare","Preparing upload context"],["extract","Extracting sample structure"],["model",r?`Invoking ${n||"selected model"}`:"Deterministic profile scan"],["metadata","Generating metadata suggestions"]],u=(h=e.events)!=null&&h.length?e.events:c.slice(0,l+1).map(([,g])=>g);return o.jsxs("div",{className:`activity-stream ${e.status}`,children:[o.jsxs("div",{className:"activity-head",children:[o.jsx("strong",{children:i}),o.jsx("span",{children:e.status==="running"?`${t}s elapsed`:"Run finished"}),o.jsx("small",{children:e.mode==="ai"?`Model: ${e.model||n||"not selected"}`:"Deterministic scan"})]}),o.jsx(vp,{events:u,status:e.status,activeText:(m=c[l])==null?void 0:m[1]}),o.jsxs("div",{className:"activity-foot",children:[o.jsxs("span",{children:[Za(a.count)," file(s)"]}),o.jsx("span",{children:xp(a.totalBytes)}),o.jsx("span",{children:e.mode==="ai"?`Tokens ${s.total_tokens?Za(s.total_tokens):"pending"}`:"No AI tokens"})]}),e.error?o.jsx("p",{className:"analysis-run-error",children:e.error}):null]})}function ex({run:e,elapsedSeconds:t}){var s,i,l;if(!e)return null;const r=e.status==="running"?"Creating use case":e.status==="success"?"Use case created":"Create failed",n=Number(((s=e.submitted)==null?void 0:s.count)||0)>0,a=(i=e.events)!=null&&i.length?e.events:["Saving use case metadata"];return o.jsxs("div",{className:`activity-stream create-run ${e.status}`,children:[o.jsxs("div",{className:"activity-head",children:[o.jsx("strong",{children:r}),o.jsx("span",{children:e.status==="running"?`${t}s elapsed`:"Run finished"}),o.jsx("small",{children:e.datasetId?`ID ${String(e.datasetId).slice(0,8)}`:`${Za(((l=e.submitted)==null?void 0:l.count)||0)} sample file(s)`})]}),o.jsx(vp,{events:a,status:e.status,activeText:n&&e.stage==="samples"?"Learning attached samples":""}),n?null:o.jsxs("div",{className:"activity-foot",children:[o.jsx("span",{children:"No samples attached"}),o.jsx("span",{children:"Metadata-only create"})]}),e.sampleWarning?o.jsx("p",{className:"analysis-run-warning",children:e.sampleWarning}):null,e.error?o.jsx("p",{className:"analysis-run-error",children:e.error}):null]})}function vp({events:e,status:t,activeText:r=""}){const n=[...e];return t==="running"&&r&&!n.includes(r)&&n.push(r),o.jsx("ol",{className:"activity-lines",children:n.map((a,s)=>{const i=s===n.length-1,l=t==="failed"&&i?"failed":t==="running"&&i?"active":"done";return o.jsx("li",{className:l,children:a},`${a}-${s}`)})})}function tx({value:e,onChange:t}){const r=Array.isArray(e)?e:[],n=(s,i)=>{t(r.map(l=>l.id===s?{...l,...i}:l))},a=s=>{t(r.filter(i=>i.id!==s))};return o.jsxs("div",{className:"variation-pairs",children:[o.jsxs("div",{className:"variation-pairs-head",children:[o.jsxs("div",{children:[o.jsx("h5",{children:"Variation pairs"}),o.jsx("p",{children:"Add only when another baseline/revised pair represents a different layout or document family variation."})]}),o.jsx("button",{type:"button",className:"icon-action",onClick:()=>t([...r,Qg()]),disabled:r.length>=5,title:"Add variation pair",children:"+"})]}),r.length?o.jsx("div",{className:"variation-pair-list",children:r.map((s,i)=>o.jsxs("div",{className:"variation-pair-row",children:[o.jsxs("strong",{children:["Variation ",i+1]}),o.jsxs("label",{children:["Baseline",o.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:l=>{var c;return n(s.id,{baseline:((c=l.target.files)==null?void 0:c[0])||null})}})]}),o.jsxs("label",{children:["Revised",o.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:l=>{var c;return n(s.id,{revised:((c=l.target.files)==null?void 0:c[0])||null})}})]}),o.jsx("button",{type:"button",className:"ghost-action compact",onClick:()=>a(s.id),children:"Remove"})]},s.id))}):o.jsx("span",{className:"variation-empty",children:"No variation pairs added."})]})}function rx({data:e}){const t=(e==null?void 0:e.suggested_dataset)||{},r=(e==null?void 0:e.analysis)||{},n=r.confidence_score!==void 0?Math.round(Number(r.confidence_score||0)*100):null,a=Array.isArray(r.complexity_reasons)?r.complexity_reasons:[],s=Array.isArray(r.enhancement_tips)?r.enhancement_tips:[];return o.jsxs("section",{className:"analysis-card",children:[o.jsxs("div",{className:"analysis-card-head",children:[o.jsxs("div",{children:[o.jsx("h4",{children:"Sample Analysis"}),o.jsx("p",{children:e!=null&&e.used_ai?"GPT-4o assisted the metadata suggestions.":"Deterministic scan generated metadata suggestions."})]}),o.jsxs("span",{children:[String(r.complexity_rating||"standard")," complexity"]})]}),o.jsxs("div",{className:"analysis-grid",children:[o.jsxs("p",{children:[o.jsx("strong",{children:t.supplier||"Supplier pending"}),o.jsx("small",{children:t.family_name||"Use case pending"})]}),o.jsxs("p",{children:[o.jsx("strong",{children:t.use_case_type||"comparison"}),o.jsx("small",{children:(t.expected_formats||[]).join(", ")||"formats pending"})]}),o.jsxs("p",{children:[o.jsx("strong",{children:t.domain||"generic"}),o.jsx("small",{children:n!==null?`${n}% estimated parser confidence`:"confidence pending"})]})]}),a.length||s.length?o.jsxs("div",{className:"analysis-notes",children:[a.slice(0,3).map((i,l)=>o.jsx("span",{children:i},`reason-${l}`)),s.slice(0,3).map((i,l)=>o.jsx("span",{children:i},`tip-${l}`))]}):null]})}function nx({value:e,onChange:t}){const r=n=>{t(e.includes(n)?e.filter(a=>a!==n):[...e,n])};return o.jsxs("fieldset",{className:"role-picker",children:[o.jsx("legend",{children:"Allowed roles"}),qg.map(([n,a])=>o.jsxs("label",{children:[o.jsx("input",{type:"checkbox",checked:e.includes(n),onChange:()=>r(n)}),a]},n))]})}function Uc({value:e,onChange:t}){const r=Array.isArray(e)?e:[],n=a=>{t(r.includes(a)?r.filter(s=>s!==a):[...r,a])};return o.jsxs("fieldset",{className:"format-picker",children:[o.jsx("legend",{children:"Expected formats"}),Vg.map(([a,s])=>o.jsxs("label",{children:[o.jsx("input",{type:"checkbox",checked:r.includes(a),onChange:()=>n(a)}),s]},a))]})}function ax({profile:e}){const t=e&&typeof e=="object"?e:{};return o.jsxs("div",{className:"profile-card",children:[o.jsx("h4",{children:"Model Samples"}),o.jsxs("p",{children:[o.jsxs("strong",{children:[String(t.sample_count||0)," samples"]}),o.jsx("small",{children:(t.roles_present||[]).join(", ")||"No roles learned yet"})]}),o.jsxs("p",{children:[o.jsxs("strong",{children:[String(t.average_pages||0)," avg pages"]}),o.jsxs("small",{children:[String(t.min_pages||0)," min · ",String(t.max_pages||0)," max"]})]}),t.last_bootstrap_notes?o.jsxs("p",{children:[o.jsx("strong",{children:"Latest notes"}),o.jsx("small",{children:String(t.last_bootstrap_notes)})]}):null]})}function Gs({title:e,items:t,labelKey:r,valueKey:n}){const a=Array.isArray(t)?t:[];return o.jsxs("div",{className:"profile-card",children:[o.jsx("h4",{children:e}),a.length===0?o.jsx("span",{children:"No entries yet."}):a.slice(0,8).map((s,i)=>o.jsxs("p",{children:[o.jsx("strong",{children:String((s==null?void 0:s[r])??"Item")}),o.jsx("small",{children:String((s==null?void 0:s[n])??"")})]},i))]})}function sx({profile:e,onAddLabel:t}){const r=e&&typeof e=="object"?e:{},n=String(r.complexity_rating||"low").toUpperCase(),a=r.confidence_score!==void 0?Math.round(r.confidence_score*100):null,s=Array.isArray(r.complexity_reasons)?r.complexity_reasons:[],i=Array.isArray(r.enhancement_tips)?r.enhancement_tips:[],l=Array.isArray(r.suggested_data_labels)?r.suggested_data_labels:[],c=n==="HIGH"?"#9f2525":n==="MEDIUM"?"#c45510":"#1f7e41",u=n==="HIGH"?"#fff7f7":n==="MEDIUM"?"#fffbf7":"#f7fff9",h=n==="HIGH"?"#f1c6c6":n==="MEDIUM"?"#f7d6c1":"#c1f1d1";return o.jsxs("div",{className:"profile-card",style:{gridColumn:"span 2"},children:[o.jsxs("h4",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[o.jsx("span",{children:"AI Onboarding Analysis"}),o.jsxs("span",{style:{fontSize:11,fontWeight:700,color:c,background:u,border:`1px solid ${h}`,padding:"2px 8px",borderRadius:99},children:[n," COMPLEXITY"]})]}),a!==null&&o.jsxs("p",{style:{marginTop:8},children:[o.jsxs("strong",{children:["Parser Confidence Rating: ",a,"%"]}),o.jsx("small",{children:"Estimated baseline accuracy without AI assistance"})]}),s.length>0&&o.jsxs("p",{style:{marginTop:10},children:[o.jsx("strong",{children:"Structural Complexity Indicators"}),o.jsx("small",{style:{display:"block",marginTop:4},children:s.map((m,g)=>o.jsxs("span",{style:{display:"block",color:"var(--text-primary)"},children:["• ",m]},g))})]}),i.length>0&&o.jsxs("p",{style:{marginTop:10},children:[o.jsx("strong",{children:"Extraction Optimization Recommendations"}),o.jsx("small",{style:{display:"block",marginTop:4},children:i.map((m,g)=>o.jsxs("span",{style:{display:"block",color:"var(--text-primary)"},children:["• ",m]},g))})]}),l.length>0&&o.jsxs("p",{style:{marginTop:12},children:[o.jsx("strong",{children:"Suggested Data Labels (Click to map)"}),o.jsx("span",{style:{display:"flex",flexWrap:"wrap",gap:6,marginTop:6},children:l.map(m=>o.jsxs("button",{type:"button",onClick:()=>t(m),style:{background:"var(--surface-sunken)",border:"1px solid var(--border)",color:"var(--text-primary)",borderRadius:"4px",padding:"2px 8px",fontSize:12,fontWeight:650,cursor:"pointer"},title:"Click to automatically create a mapping rule for this label",children:["Add ",m]},m))})]})]})}async function wr(e,t={}){const r=await fetch(`${B}${e}`,t);if(r.status===404&&e.startsWith("/admin/")){const n=await fetch(`${B}/api${e}`,t);if(!n.ok)throw new Error(await re(n));return n.json()}if(!r.ok)throw new Error(await re(r));return r.json()}async function ox(e,t={}){const r=await fetch(`${B}${e}`,t);if(r.status!==404){if(!r.ok)throw new Error(await re(r));return r.json()}const n=await fetch(`${B}/api${e}`,t);if(!n.ok)throw new Error(await re(n));return n.json()}function Bc(e){const t=e.trim();if(!t)return[];const r=JSON.parse(t);if(!Array.isArray(r))throw new Error("Column rules must be a JSON array.");return r}function ix(e){y.useEffect(()=>{document.title=`${e} · Altrai`},[e])}const ma=e=>Number(e||0).toLocaleString();function lx(e,t,r){const n=String(e||"").toLowerCase(),a=n.includes("gpt-4")&&!n.includes("mini"),s=a?2.5:.15,i=a?10:.6;return(Number(t||0)*s+Number(r||0)*i)/1e6}function cx({runId:e}){const[t,r]=y.useState(""),[n,a]=y.useState("fast"),[s,i]=y.useState(""),[l,c]=y.useState(null),[u,h]=y.useState([]),[m,g]=y.useState({}),[v,w]=y.useState(!1),[b,S]=y.useState("");y.useEffect(()=>{let d=!1;return(async()=>{try{const j=await fetch(`${B}/ai-health`);if(!j.ok)throw new Error(await re(j));const N=await j.json();if(d)return;c(N);const _=Js(N)[0];_!=null&&_.id&&i(z=>z||_.id)}catch{d||c({ok:!1,models:[],message:"AI model status is unavailable."})}})(),()=>{d=!0}},[]),y.useEffect(()=>{if(!v){S("");return}const d=n==="ai"?["Retrieving comparison evidence","Building grounded context",`Generating AI answer${s?` with ${s}`:""}`]:["Retrieving comparison evidence","Ranking matching changes","Preparing deterministic answer"];let x=0;S(d[x]);const j=window.setInterval(()=>{x=Math.min(x+1,d.length-1),S(d[x])},1600);return()=>window.clearInterval(j)},[v,n,s]);const f=y.useMemo(()=>u.reduce((d,x)=>{if(x.mode!=="ai")return d;const j=x.usage;return j&&(d.prompt+=Number(j.prompt_tokens||0),d.completion+=Number(j.completion_tokens||0),d.total+=Number(j.total_tokens||0),d.calls+=1,d.cost+=lx(x.model,j.prompt_tokens,j.completion_tokens)),d},{prompt:0,completion:0,total:0,calls:0,cost:0}),[u]),p=async()=>{const d=t.trim();if(!d||v||!e)return;const x=`user-${Date.now()}`,j=`answer-${Date.now()}`;h(N=>[...N,{id:x,role:"user",text:d,timestamp:new Date().toLocaleTimeString()}]),r(""),w(!0);try{const N=await fetch(`${B}/runs/${e}/query`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:d,mode:n,response_language:"source",model_name:n==="ai"?s:null})});if(!N.ok)throw new Error(await re(N));const _=await N.json();h(z=>{var D;return[...z,{id:j,role:"assistant",text:_.answer||`I found ${((D=_.rows)==null?void 0:D.length)||0} matching changes.`,rows:_.rows||[],columns:_.columns||qh(_.rows||[]),mode:_.mode||n,model:n==="ai"?s:null,usage:(_.mode||n)==="ai"?_.usage:null,confidence:_.confidence,warning:_.ai_error||(_.ai_unavailable?"AI response was unavailable; showing grounded evidence results.":""),timestamp:new Date().toLocaleTimeString()}]})}catch(N){h(_=>[..._,{id:j,role:"assistant",text:ie(N),rows:[],timestamp:new Date().toLocaleTimeString(),isError:!0}])}finally{w(!1)}};return o.jsxs("section",{className:"query-workbench",children:[u.length===0?o.jsx(Qt,{label:"Ask what changed, why it matters, or where the evidence appears in the compared documents."}):o.jsxs("div",{className:"query-chat-log",children:[u.map(d=>{var x,j;return o.jsxs("article",{className:`query-message ${d.role}${d.isError?" error":""}`,children:[o.jsxs("div",{className:"query-message-meta",children:[o.jsx("span",{children:d.role==="user"?"You":d.mode==="ai"?`AI answer${d.model?` - ${d.model}`:""}`:"Natural language query"}),o.jsx("span",{children:d.timestamp})]}),o.jsx("div",{className:"query-message-text",dir:"auto",children:d.text}),d.warning&&o.jsx("div",{className:"query-warning",children:d.warning}),d.usage&&o.jsxs("div",{className:"query-usage",children:[o.jsxs("span",{children:[ma(d.usage.total_tokens)," tokens"]}),o.jsxs("span",{children:[ma(d.usage.prompt_tokens)," input / ",ma(d.usage.completion_tokens)," output"]})]}),((x=d.rows)==null?void 0:x.length)>0&&o.jsxs("div",{className:"query-evidence",children:[o.jsx("button",{type:"button",className:"key-audit-toggle",onClick:()=>g(N=>({...N,[d.id]:!N[d.id]})),children:m[d.id]?"Hide evidence":`Show evidence (${d.rows.length})`}),m[d.id]&&o.jsx("div",{className:"query-results-shell",children:(j=d.columns)!=null&&j.length?o.jsx(or,{columns:d.columns,rows:d.rows}):d.rows.slice(0,50).map((N,_)=>o.jsx(ux,{row:N},_))})]})]},d.id)}),v&&o.jsxs("article",{className:"query-message assistant streaming",children:[o.jsxs("div",{className:"query-message-meta",children:[o.jsx("span",{children:n==="ai"?`AI answer${s?` - ${s}`:""}`:"Natural language query"}),o.jsx("span",{children:"Working"})]}),o.jsxs("div",{className:"query-stream-line",children:[o.jsx("span",{}),b||"Retrieving evidence"]})]})]}),f.total>0&&o.jsxs("div",{className:"query-usage-strip",children:[o.jsxs("span",{children:[ma(f.total)," tokens across ",f.calls," AI call",f.calls===1?"":"s"]}),o.jsxs("strong",{children:["$",f.cost.toFixed(5)]})]}),o.jsxs("div",{className:"query-composer",children:[o.jsx("textarea",{value:t,onChange:d=>r(d.target.value),onKeyDown:d=>{d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),p())},placeholder:"Ask about changed clauses, tables, dates, values, deleted text, or page evidence...",disabled:v,rows:3}),o.jsxs("div",{className:"query-composer-actions",children:[o.jsxs("label",{children:[o.jsx("span",{children:"Mode"}),o.jsxs("select",{value:n,onChange:d=>a(d.target.value),disabled:v,children:[o.jsx("option",{value:"fast",children:"NL query"}),o.jsx("option",{value:"ai",children:"AI chat"})]})]}),n==="ai"&&o.jsxs("label",{children:[o.jsx("span",{children:"Model"}),o.jsx("select",{value:s,onChange:d=>i(d.target.value),disabled:v,children:Js(l).length?Js(l).map(d=>o.jsx("option",{value:d.id,children:d.label||d.id},d.id)):o.jsx("option",{value:"",children:"No configured chat model found"})})]}),o.jsx("button",{type:"button",className:"primary-action compact",onClick:p,disabled:v||!t.trim()||n==="ai"&&!s,children:v?"Working":n==="ai"?"Ask AI":"Ask"})]})]})]})}function Js(e){const t=Array.isArray(e==null?void 0:e.models)?e.models:[];return t.length?t.filter(r=>r.kind==="chat"&&r.configured!==!1):e!=null&&e.deployment?[{id:e.deployment,label:e.deployment,kind:"chat",configured:e.configured}]:[]}function ux({row:e}){var t;return o.jsxs("div",{className:"query-result",children:[o.jsxs("div",{className:"query-result-head",children:[o.jsx(up,{type:Ur(e)}),e.stable_key&&o.jsx("code",{children:e.stable_key}),o.jsx("span",{children:e.citation||`page ${e.page||"-"}`})]}),e.before&&o.jsxs("div",{dir:"auto",children:[o.jsx("strong",{children:"Before:"})," ",Qe(e.before,260)]}),e.after&&o.jsxs("div",{dir:"auto",children:[o.jsx("strong",{children:"After:"})," ",Qe(e.after,260)]}),((t=e.field_changes)==null?void 0:t.length)>0&&o.jsx(gg,{rows:e.field_changes})]})}const ct=(e,t)=>{if(typeof window>"u")return t;try{const r=window.sessionStorage.getItem(`doculens_${e}`);return r!==null?JSON.parse(r):t}catch{return t}},et=(e,t)=>{if(!(typeof window>"u"))try{window.sessionStorage.setItem(`doculens_${e}`,JSON.stringify(t))}catch(r){console.error(r)}},Jo={compare:"/compare",extract:"/extract",jobs:"/work-history",agents:"/ai-agents",admin:"/admin"},dx={"/":"compare",...Object.fromEntries(Object.entries(Jo).map(([e,t])=>[t,e]))},Wc=e=>dx[e]||"compare";function px(){const e=op(),t=_h(),[r,n]=y.useState(()=>Wc(window.location.pathname)),[a,s]=y.useState(()=>ct("runId",null)),[i,l]=y.useState(()=>ct("meta",null)),[c,u]=y.useState(()=>ct("tab","viewer")),[h,m]=y.useState(()=>ct("pageNum",1)),[g,v]=y.useState(()=>ct("busy",!1)),[w,b]=y.useState(""),[S,f]=y.useState(()=>ct("extractRunId",null)),[p,d]=y.useState(()=>ct("extractMeta",null)),[x,j]=y.useState(()=>ct("extractBusy",!1)),[N,_]=y.useState(""),[z,D]=y.useState(()=>ct("extractTab","overview")),[R,q]=y.useState(""),[_e,Ae]=y.useState(()=>ct("historyKind","all")),Ct={compare:"Compare",extract:"Extract",jobs:"Work History",agents:"AI Agents",admin:"Admin Studio"}[r]||"Workspace";ix(Ct),y.useEffect(()=>{et("workspace",r)},[r]),y.useEffect(()=>{et("runId",a)},[a]),y.useEffect(()=>{et("meta",i)},[i]),y.useEffect(()=>{et("tab",c)},[c]),y.useEffect(()=>{et("pageNum",h)},[h]),y.useEffect(()=>{et("busy",g)},[g]),y.useEffect(()=>{et("extractRunId",S)},[S]),y.useEffect(()=>{et("extractMeta",p)},[p]),y.useEffect(()=>{et("extractBusy",x)},[x]),y.useEffect(()=>{et("extractTab",z)},[z]),y.useEffect(()=>{et("historyKind",_e)},[_e]),y.useEffect(()=>{const L=Wc(e.pathname);L!==r&&n(L)},[e.pathname]),y.useEffect(()=>{r==="compare"&&c!=="viewer"&&u("viewer")},[r]);const Ee=()=>{s(null),l(null),v(!1),b(""),m(1),u("viewer"),Ne("compare")},Ye=()=>{f(null),d(null),j(!1),_(""),D("overview"),Ne("extract")},Ne=(L,M={})=>{n(L),L==="jobs"&&Ae(M.historyKind||"all"),b(""),_(""),q(""),t(Jo[L]||Jo.compare,{replace:!1})};y.useEffect(()=>{if(!a||!g)return;let L=!1,M=null;const O=async()=>{try{const ee=await fetch(`${B}/runs/${a}`);if(!ee.ok)throw new Error(await re(ee));const A=await ee.json();if(L)return;if(l(A),A.status==="complete"){v(!1),u("viewer");return}if(A.status==="failed"){v(!1),b(at(A.error||A.status_message||"Comparison failed."));return}M=setTimeout(O,1e3)}catch(ee){if(L)return;v(!1),b(ie(ee))}};return O(),()=>{L=!0,M&&clearTimeout(M)}},[a,g]),y.useEffect(()=>{if(!S||!x)return;let L=!1,M=null;const O=async()=>{try{const ee=await fetch(`${B}/extract-runs/${S}`);if(!ee.ok)throw new Error(await re(ee));const A=await ee.json();if(L)return;if(d(A),A.status==="complete"){j(!1),D("overview");return}if(A.status==="failed"){j(!1),_(at(A.error||A.status_message||"Extraction failed."));return}M=setTimeout(O,1e3)}catch(ee){if(L)return;j(!1),_(ie(ee))}};return O(),()=>{L=!0,M&&clearTimeout(M)}},[S,x]);const C=async L=>{L.preventDefault();const M=new FormData(L.currentTarget),O=M.get("base"),ee=M.get("target"),A=String(M.get("family_id")||"").trim();if(!O||!ee||!O.name||!ee.name){b("Please select both documents before starting.");return}if(!A){b("Please select a document use case before starting comparison.");return}n("compare"),v(!0),b(""),s(null),m(1),u("viewer"),l({status:"uploading",status_message:"Uploading documents",progress:3,stats:{},coverage:{},n_pages_base:0,n_pages_target:0});try{const ye=await fetch(`${B}/compare`,{method:"POST",body:M});if(!ye.ok)throw new Error(await re(ye));const gt=await ye.json();s(gt.run_id),v(gt.status!=="complete"&&gt.status!=="failed"),l({run_id:gt.run_id,status:gt.status,status_message:gt.status_message||"Starting comparison",progress:gt.progress||5,stats:{},coverage:{},n_pages_base:0,n_pages_target:0}),n("compare")}catch(ye){v(!1),b(ie(ye))}},$=async L=>{L.preventDefault();const M=new FormData(L.currentTarget),O=M.getAll("document").filter(A=>A&&A.name),ee=String(M.get("family_id")||"").trim();if(!O.length){_("Please select at least one document, spreadsheet, PDF, or image before starting extraction.");return}if(!ee){_("Please select a document use case before starting extraction.");return}n("extract"),j(!0),_(""),f(null),D("overview"),d({status:"uploading",status_message:"Uploading document",progress:3,summary:{}});try{const A=await fetch(`${B}/extract`,{method:"POST",body:M});if(!A.ok)throw new Error(await re(A));const ye=await A.json();f(ye.run_id),j(ye.status!=="complete"&&ye.status!=="failed"),d({run_id:ye.run_id,status:ye.status,status_message:ye.status_message||"Starting extraction",progress:ye.progress||5,summary:{}}),n("extract")}catch(A){j(!1),_(ie(A))}},I=async L=>{q("");try{if(L.kind==="extraction"){const ee=await fetch(`${B}/extract-runs/${L.run_id}`);if(!ee.ok)throw new Error(await re(ee));const A=await ee.json();s(null),l(null),v(!1),f(L.run_id),d(A),j(A.status!=="complete"&&A.status!=="failed"),D("overview"),n("extract");return}const M=await fetch(`${B}/runs/${L.run_id}`);if(!M.ok)throw new Error(await re(M));const O=await M.json();f(null),d(null),j(!1),s(L.run_id),l(O),v(O.status!=="complete"&&O.status!=="failed"),u("viewer"),m(1),n("compare")}catch(M){q(ie(M))}},Q=async L=>{q("");try{if(L.kind==="extraction"){const M=await fetch(`${B}/extract-runs/${L.run_id}`);if(!M.ok)throw new Error(await re(M));const O=await M.json();s(null),l(null),v(!1),f(L.run_id),d(O),j(O.status!=="complete"&&O.status!=="failed"),n("extract");return}await I(L)}catch(M){q(ie(M))}},se=()=>{a&&(window.location.href=`${B}/runs/${a}/report.pdf`)},Xe=(i==null?void 0:i.status)==="complete",J=(p==null?void 0:p.status)==="complete";return o.jsxs("div",{children:[o.jsx("style",{children:Ah}),o.jsxs(Wg,{workspace:r,runId:r==="compare"&&Xe?a:null,onNavigate:Ne,onDownloadReport:se,children:[r==="jobs"&&o.jsx(tg,{onOpenJob:I,onAskJob:Q,error:R,historyKind:_e,onStartCompare:Ee,onStartExtract:Ye}),r==="compare"&&!Xe&&o.jsxs("section",{className:"workflow-panel",children:[o.jsx(ng,{onUpload:C,busy:g,onAdmin:()=>Ne("admin")}),g&&i&&o.jsx(Ic,{progress:i.progress||0,message:i.status_message||"Processing documents",status:i.status||"running"}),w&&o.jsx(On,{message:w})]}),r==="extract"&&!J&&o.jsxs("section",{className:"workflow-panel",children:[o.jsx(ag,{onUpload:$,busy:x,onAdmin:()=>Ne("admin")}),x&&p&&o.jsx(Ic,{progress:p.progress||0,message:p.status_message||"Extracting document",status:p.status||"running"}),N&&o.jsx(On,{message:N})]}),r==="compare"&&Xe&&a&&i&&o.jsxs("section",{className:"comparison-workspace",children:[o.jsxs("div",{className:"comparison-head",children:[o.jsx("div",{children:o.jsxs("h2",{dir:"auto",children:[i.base_label||"Baseline"," → ",i.target_label||"Revised"]})}),o.jsxs("div",{className:"comparison-head-actions",children:[o.jsx("button",{type:"button",className:"ghost-action compact",onClick:Ee,children:"New comparison"}),o.jsxs("div",{className:"comparison-id",children:["#",String(a).slice(0,6)]})]})]}),o.jsx(Yh,{meta:i}),o.jsxs("main",{className:"comparison-flow",children:[o.jsxs("section",{className:"workspace-surface",children:[o.jsx("div",{className:"surface-title-row",children:o.jsxs("div",{children:[o.jsx("h3",{children:"Quick Summary"}),o.jsx("p",{children:"Highest-priority differences detected from the comparison evidence."})]})}),o.jsx(sg,{runId:a,meta:i,onVerifyPage:m})]}),o.jsxs("section",{className:"workspace-surface",children:[o.jsx("div",{className:"surface-title-row",children:o.jsxs("div",{children:[o.jsx("h3",{children:"Visual Comparison"}),o.jsx("p",{children:"Side-by-side verification with synchronized scroll, zoom, and document overlays."})]})}),o.jsx(og,{runId:a,meta:i,pageNum:h,setPageNum:m})]}),o.jsxs("section",{className:"workspace-surface",children:[o.jsx("div",{className:"surface-title-row",children:o.jsxs("div",{children:[o.jsx("h3",{children:"Ask This Comparison"}),o.jsx("p",{children:"Start with natural language search. Switch to an AI model only when reasoning or richer synthesis is needed."})]})}),o.jsx(cx,{runId:a})]})]})]}),r==="extract"&&J&&S&&p&&o.jsx(xg,{runId:S,meta:p,tab:z,setTab:D}),r==="agents"&&o.jsxs("section",{className:"workspace-placeholder",children:[o.jsx("h2",{children:"AI Agents"}),o.jsx("p",{children:"Future skills and multi-agent workflows will live here after the document intelligence workspace is stable."}),o.jsx("div",{className:"placeholder-list",children:o.jsx("span",{children:"Coming soon"})})]}),r==="admin"&&o.jsx(Kg,{})]})]})}Ys.createRoot(document.getElementById("root")).render(o.jsx(ts.StrictMode,{children:o.jsx(Mg,{children:o.jsx(Lh,{children:o.jsx(px,{})})})}));
