function wp(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in e)){const s=Object.getOwnPropertyDescriptor(n,a);s&&Object.defineProperty(e,a,s.get?s:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}})();function bp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rc={exports:{}},Ja={},Lc={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mn=Symbol.for("react.element"),kp=Symbol.for("react.portal"),jp=Symbol.for("react.fragment"),Sp=Symbol.for("react.strict_mode"),_p=Symbol.for("react.profiler"),Ep=Symbol.for("react.provider"),Np=Symbol.for("react.context"),Cp=Symbol.for("react.forward_ref"),zp=Symbol.for("react.suspense"),Pp=Symbol.for("react.memo"),Tp=Symbol.for("react.lazy"),rl=Symbol.iterator;function Dp(e){return e===null||typeof e!="object"?null:(e=rl&&e[rl]||e["@@iterator"],typeof e=="function"?e:null)}var Ic={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ac=Object.assign,Mc={};function Kr(e,t,r){this.props=e,this.context=t,this.refs=Mc,this.updater=r||Ic}Kr.prototype.isReactComponent={};Kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Oc(){}Oc.prototype=Kr.prototype;function Qo(e,t,r){this.props=e,this.context=t,this.refs=Mc,this.updater=r||Ic}var Ko=Qo.prototype=new Oc;Ko.constructor=Qo;Ac(Ko,Kr.prototype);Ko.isPureReactComponent=!0;var nl=Array.isArray,Fc=Object.prototype.hasOwnProperty,Go={current:null},Uc={key:!0,ref:!0,__self:!0,__source:!0};function Bc(e,t,r){var n,a={},s=null,i=null;if(t!=null)for(n in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(s=""+t.key),t)Fc.call(t,n)&&!Uc.hasOwnProperty(n)&&(a[n]=t[n]);var l=arguments.length-2;if(l===1)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)a[n]===void 0&&(a[n]=l[n]);return{$$typeof:Mn,type:e,key:s,ref:i,props:a,_owner:Go.current}}function $p(e,t){return{$$typeof:Mn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Jo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mn}function Rp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var al=/\/+/g;function xs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Rp(""+e.key):t.toString(36)}function pa(e,t,r,n,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Mn:case kp:i=!0}}if(i)return i=e,a=a(i),e=n===""?"."+xs(i,0):n,nl(a)?(r="",e!=null&&(r=e.replace(al,"$&/")+"/"),pa(a,t,r,"",function(u){return u})):a!=null&&(Jo(a)&&(a=$p(a,r+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(al,"$&/")+"/")+e)),t.push(a)),1;if(i=0,n=n===""?".":n+":",nl(e))for(var l=0;l<e.length;l++){s=e[l];var c=n+xs(s,l);i+=pa(s,t,r,c,a)}else if(c=Dp(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=n+xs(s,l++),i+=pa(s,t,r,c,a);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Hn(e,t,r){if(e==null)return e;var n=[],a=0;return pa(e,n,"","",function(s){return t.call(r,s,a++)}),n}function Lp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},fa={transition:null},Ip={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:fa,ReactCurrentOwner:Go};function Wc(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:Hn,forEach:function(e,t,r){Hn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Hn(e,function(){t++}),t},toArray:function(e){return Hn(e,function(t){return t})||[]},only:function(e){if(!Jo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=Kr;F.Fragment=jp;F.Profiler=_p;F.PureComponent=Qo;F.StrictMode=Sp;F.Suspense=zp;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ip;F.act=Wc;F.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Ac({},e.props),a=e.key,s=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,i=Go.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Fc.call(t,c)&&!Uc.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:Mn,type:e.type,key:a,ref:s,props:n,_owner:i}};F.createContext=function(e){return e={$$typeof:Np,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ep,_context:e},e.Consumer=e};F.createElement=Bc;F.createFactory=function(e){var t=Bc.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Cp,render:e}};F.isValidElement=Jo;F.lazy=function(e){return{$$typeof:Tp,_payload:{_status:-1,_result:e},_init:Lp}};F.memo=function(e,t){return{$$typeof:Pp,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=fa.transition;fa.transition={};try{e()}finally{fa.transition=t}};F.unstable_act=Wc;F.useCallback=function(e,t){return Ce.current.useCallback(e,t)};F.useContext=function(e){return Ce.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};F.useEffect=function(e,t){return Ce.current.useEffect(e,t)};F.useId=function(){return Ce.current.useId()};F.useImperativeHandle=function(e,t,r){return Ce.current.useImperativeHandle(e,t,r)};F.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return Ce.current.useMemo(e,t)};F.useReducer=function(e,t,r){return Ce.current.useReducer(e,t,r)};F.useRef=function(e){return Ce.current.useRef(e)};F.useState=function(e){return Ce.current.useState(e)};F.useSyncExternalStore=function(e,t,r){return Ce.current.useSyncExternalStore(e,t,r)};F.useTransition=function(){return Ce.current.useTransition()};F.version="18.3.1";Lc.exports=F;var b=Lc.exports;const Ya=bp(b),Ap=wp({__proto__:null,default:Ya},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp=b,Op=Symbol.for("react.element"),Fp=Symbol.for("react.fragment"),Up=Object.prototype.hasOwnProperty,Bp=Mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wp={key:!0,ref:!0,__self:!0,__source:!0};function Vc(e,t,r){var n,a={},s=null,i=null;r!==void 0&&(s=""+r),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(i=t.ref);for(n in t)Up.call(t,n)&&!Wp.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:Op,type:e,key:s,ref:i,props:a,_owner:Bp.current}}Ja.Fragment=Fp;Ja.jsx=Vc;Ja.jsxs=Vc;Rc.exports=Ja;var o=Rc.exports,Qs={},qc={exports:{}},Be={},Hc={exports:{}},Qc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,T){var I=E.length;E.push(T);e:for(;0<I;){var H=I-1>>>1,ne=E[H];if(0<a(ne,T))E[H]=T,E[I]=ne,I=H;else break e}}function r(E){return E.length===0?null:E[0]}function n(E){if(E.length===0)return null;var T=E[0],I=E.pop();if(I!==T){E[0]=I;e:for(var H=0,ne=E.length,Ze=ne>>>1;H<Ze;){var G=2*(H+1)-1,L=E[G],A=G+1,O=E[A];if(0>a(L,I))A<ne&&0>a(O,L)?(E[H]=O,E[A]=I,H=A):(E[H]=L,E[G]=I,H=G);else if(A<ne&&0>a(O,I))E[H]=O,E[A]=I,H=A;else break e}}return T}function a(E,T){var I=E.sortIndex-T.sortIndex;return I!==0?I:E.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var c=[],u=[],m=1,f=null,g=3,v=!1,y=!1,x=!1,j=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(E){for(var T=r(u);T!==null;){if(T.callback===null)n(u);else if(T.startTime<=E)n(u),T.sortIndex=T.expirationTime,t(c,T);else break;T=r(u)}}function w(E){if(x=!1,h(E),!y)if(r(c)!==null)y=!0,Xe(S);else{var T=r(u);T!==null&&Se(w,T.startTime-E)}}function S(E,T){y=!1,x&&(x=!1,p(z),z=-1),v=!0;var I=g;try{for(h(T),f=r(c);f!==null&&(!(f.expirationTime>T)||E&&!W());){var H=f.callback;if(typeof H=="function"){f.callback=null,g=f.priorityLevel;var ne=H(f.expirationTime<=T);T=e.unstable_now(),typeof ne=="function"?f.callback=ne:f===r(c)&&n(c),h(T)}else n(c);f=r(c)}if(f!==null)var Ze=!0;else{var G=r(u);G!==null&&Se(w,G.startTime-T),Ze=!1}return Ze}finally{f=null,g=I,v=!1}}var N=!1,C=null,z=-1,$=5,R=-1;function W(){return!(e.unstable_now()-R<$)}function je(){if(C!==null){var E=e.unstable_now();R=E;var T=!0;try{T=C(!0,E)}finally{T?Ie():(N=!1,C=null)}}else N=!1}var Ie;if(typeof d=="function")Ie=function(){d(je)};else if(typeof MessageChannel<"u"){var zt=new MessageChannel,Ve=zt.port2;zt.port1.onmessage=je,Ie=function(){Ve.postMessage(null)}}else Ie=function(){j(je,0)};function Xe(E){C=E,N||(N=!0,Ie())}function Se(E,T){z=j(function(){E(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,Xe(S))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(E){switch(g){case 1:case 2:case 3:var T=3;break;default:T=g}var I=g;g=T;try{return E()}finally{g=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,T){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var I=g;g=E;try{return T()}finally{g=I}},e.unstable_scheduleCallback=function(E,T,I){var H=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?H+I:H):I=H,E){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=I+ne,E={id:m++,callback:T,priorityLevel:E,startTime:I,expirationTime:ne,sortIndex:-1},I>H?(E.sortIndex=I,t(u,E),r(c)===null&&E===r(u)&&(x?(p(z),z=-1):x=!0,Se(w,I-H))):(E.sortIndex=ne,t(c,E),y||v||(y=!0,Xe(S))),E},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(E){var T=g;return function(){var I=g;g=T;try{return E.apply(this,arguments)}finally{g=I}}}})(Qc);Hc.exports=Qc;var Vp=Hc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp=b,Ue=Vp;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kc=new Set,yn={};function pr(e,t){Ur(e,t),Ur(e+"Capture",t)}function Ur(e,t){for(yn[e]=t,e=0;e<t.length;e++)Kc.add(t[e])}var St=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ks=Object.prototype.hasOwnProperty,Hp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sl={},ol={};function Qp(e){return Ks.call(ol,e)?!0:Ks.call(sl,e)?!1:Hp.test(e)?ol[e]=!0:(sl[e]=!0,!1)}function Kp(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Gp(e,t,r,n){if(t===null||typeof t>"u"||Kp(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ze(e,t,r,n,a,s,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=i}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ge[t]=new ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var Yo=/[\-:]([a-z])/g;function Xo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Yo,Xo);ge[t]=new ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Yo,Xo);ge[t]=new ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Yo,Xo);ge[t]=new ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new ze(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zo(e,t,r,n){var a=ge.hasOwnProperty(t)?ge[t]:null;(a!==null?a.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Gp(t,r,a,n)&&(r=null),n||a===null?Qp(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,n=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Ct=qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qn=Symbol.for("react.element"),wr=Symbol.for("react.portal"),br=Symbol.for("react.fragment"),ei=Symbol.for("react.strict_mode"),Gs=Symbol.for("react.profiler"),Gc=Symbol.for("react.provider"),Jc=Symbol.for("react.context"),ti=Symbol.for("react.forward_ref"),Js=Symbol.for("react.suspense"),Ys=Symbol.for("react.suspense_list"),ri=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),Yc=Symbol.for("react.offscreen"),il=Symbol.iterator;function Yr(e){return e===null||typeof e!="object"?null:(e=il&&e[il]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,vs;function sn(e){if(vs===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);vs=t&&t[1]||""}return`
`+vs+e}var ys=!1;function ws(e,t){if(!e||ys)return"";ys=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),s=n.stack.split(`
`),i=a.length-1,l=s.length-1;1<=i&&0<=l&&a[i]!==s[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==s[l]){if(i!==1||l!==1)do if(i--,l--,0>l||a[i]!==s[l]){var c=`
`+a[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=l);break}}}finally{ys=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?sn(e):""}function Jp(e){switch(e.tag){case 5:return sn(e.type);case 16:return sn("Lazy");case 13:return sn("Suspense");case 19:return sn("SuspenseList");case 0:case 2:case 15:return e=ws(e.type,!1),e;case 11:return e=ws(e.type.render,!1),e;case 1:return e=ws(e.type,!0),e;default:return""}}function Xs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case br:return"Fragment";case wr:return"Portal";case Gs:return"Profiler";case ei:return"StrictMode";case Js:return"Suspense";case Ys:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Jc:return(e.displayName||"Context")+".Consumer";case Gc:return(e._context.displayName||"Context")+".Provider";case ti:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ri:return t=e.displayName||null,t!==null?t:Xs(e.type)||"Memo";case Tt:t=e._payload,e=e._init;try{return Xs(e(t))}catch{}}return null}function Yp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xs(t);case 8:return t===ei?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function qt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xp(e){var t=Xc(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,s=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){n=""+i,s.call(this,i)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Kn(e){e._valueTracker||(e._valueTracker=Xp(e))}function Zc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Xc(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function _a(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zs(e,t){var r=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function ll(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=qt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function eu(e,t){t=t.checked,t!=null&&Zo(e,"checked",t,!1)}function eo(e,t){eu(e,t);var r=qt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?to(e,t.type,r):t.hasOwnProperty("defaultValue")&&to(e,t.type,qt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function cl(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function to(e,t,r){(t!=="number"||_a(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var on=Array.isArray;function $r(e,t,r,n){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(r=""+qt(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function ro(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ul(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(_(92));if(on(r)){if(1<r.length)throw Error(_(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:qt(r)}}function tu(e,t){var r=qt(t.value),n=qt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function dl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ru(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function no(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ru(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Gn,nu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Gn=Gn||document.createElement("div"),Gn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Gn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var un={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zp=["Webkit","ms","Moz","O"];Object.keys(un).forEach(function(e){Zp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),un[t]=un[e]})});function au(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||un.hasOwnProperty(e)&&un[e]?(""+t).trim():t+"px"}function su(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,a=au(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,a):e[r]=a}}var ef=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ao(e,t){if(t){if(ef[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function so(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oo=null;function ni(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var io=null,Rr=null,Lr=null;function pl(e){if(e=Un(e)){if(typeof io!="function")throw Error(_(280));var t=e.stateNode;t&&(t=rs(t),io(e.stateNode,e.type,t))}}function ou(e){Rr?Lr?Lr.push(e):Lr=[e]:Rr=e}function iu(){if(Rr){var e=Rr,t=Lr;if(Lr=Rr=null,pl(e),t)for(e=0;e<t.length;e++)pl(t[e])}}function lu(e,t){return e(t)}function cu(){}var bs=!1;function uu(e,t,r){if(bs)return e(t,r);bs=!0;try{return lu(e,t,r)}finally{bs=!1,(Rr!==null||Lr!==null)&&(cu(),iu())}}function bn(e,t){var r=e.stateNode;if(r===null)return null;var n=rs(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(_(231,t,typeof r));return r}var lo=!1;if(St)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){lo=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{lo=!1}function tf(e,t,r,n,a,s,i,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(m){this.onError(m)}}var dn=!1,Ea=null,Na=!1,co=null,rf={onError:function(e){dn=!0,Ea=e}};function nf(e,t,r,n,a,s,i,l,c){dn=!1,Ea=null,tf.apply(rf,arguments)}function af(e,t,r,n,a,s,i,l,c){if(nf.apply(this,arguments),dn){if(dn){var u=Ea;dn=!1,Ea=null}else throw Error(_(198));Na||(Na=!0,co=u)}}function fr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function du(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fl(e){if(fr(e)!==e)throw Error(_(188))}function sf(e){var t=e.alternate;if(!t){if(t=fr(e),t===null)throw Error(_(188));return t!==e?null:e}for(var r=e,n=t;;){var a=r.return;if(a===null)break;var s=a.alternate;if(s===null){if(n=a.return,n!==null){r=n;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===r)return fl(a),e;if(s===n)return fl(a),t;s=s.sibling}throw Error(_(188))}if(r.return!==n.return)r=a,n=s;else{for(var i=!1,l=a.child;l;){if(l===r){i=!0,r=a,n=s;break}if(l===n){i=!0,n=a,r=s;break}l=l.sibling}if(!i){for(l=s.child;l;){if(l===r){i=!0,r=s,n=a;break}if(l===n){i=!0,n=s,r=a;break}l=l.sibling}if(!i)throw Error(_(189))}}if(r.alternate!==n)throw Error(_(190))}if(r.tag!==3)throw Error(_(188));return r.stateNode.current===r?e:t}function pu(e){return e=sf(e),e!==null?fu(e):null}function fu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=fu(e);if(t!==null)return t;e=e.sibling}return null}var mu=Ue.unstable_scheduleCallback,ml=Ue.unstable_cancelCallback,of=Ue.unstable_shouldYield,lf=Ue.unstable_requestPaint,ie=Ue.unstable_now,cf=Ue.unstable_getCurrentPriorityLevel,ai=Ue.unstable_ImmediatePriority,hu=Ue.unstable_UserBlockingPriority,Ca=Ue.unstable_NormalPriority,uf=Ue.unstable_LowPriority,gu=Ue.unstable_IdlePriority,Xa=null,mt=null;function df(e){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Xa,e,void 0,(e.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:mf,pf=Math.log,ff=Math.LN2;function mf(e){return e>>>=0,e===0?32:31-(pf(e)/ff|0)|0}var Jn=64,Yn=4194304;function ln(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function za(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,a=e.suspendedLanes,s=e.pingedLanes,i=r&268435455;if(i!==0){var l=i&~a;l!==0?n=ln(l):(s&=i,s!==0&&(n=ln(s)))}else i=r&~a,i!==0?n=ln(i):s!==0&&(n=ln(s));if(n===0)return 0;if(t!==0&&t!==n&&!(t&a)&&(a=n&-n,s=t&-t,a>=s||a===16&&(s&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-ot(t),a=1<<r,n|=e[r],t&=~a;return n}function hf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gf(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var i=31-ot(s),l=1<<i,c=a[i];c===-1?(!(l&r)||l&n)&&(a[i]=hf(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function uo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xu(){var e=Jn;return Jn<<=1,!(Jn&4194240)&&(Jn=64),e}function ks(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function On(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ot(t),e[t]=r}function xf(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-ot(r),s=1<<a;t[a]=0,n[a]=-1,e[a]=-1,r&=~s}}function si(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-ot(r),a=1<<n;a&t|e[n]&t&&(e[n]|=t),r&=~a}}var q=0;function vu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var yu,oi,wu,bu,ku,po=!1,Xn=[],At=null,Mt=null,Ot=null,kn=new Map,jn=new Map,$t=[],vf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hl(e,t){switch(e){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":kn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jn.delete(t.pointerId)}}function Zr(e,t,r,n,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:s,targetContainers:[a]},t!==null&&(t=Un(t),t!==null&&oi(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function yf(e,t,r,n,a){switch(t){case"focusin":return At=Zr(At,e,t,r,n,a),!0;case"dragenter":return Mt=Zr(Mt,e,t,r,n,a),!0;case"mouseover":return Ot=Zr(Ot,e,t,r,n,a),!0;case"pointerover":var s=a.pointerId;return kn.set(s,Zr(kn.get(s)||null,e,t,r,n,a)),!0;case"gotpointercapture":return s=a.pointerId,jn.set(s,Zr(jn.get(s)||null,e,t,r,n,a)),!0}return!1}function ju(e){var t=Xt(e.target);if(t!==null){var r=fr(t);if(r!==null){if(t=r.tag,t===13){if(t=du(r),t!==null){e.blockedOn=t,ku(e.priority,function(){wu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ma(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=fo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);oo=n,r.target.dispatchEvent(n),oo=null}else return t=Un(r),t!==null&&oi(t),e.blockedOn=r,!1;t.shift()}return!0}function gl(e,t,r){ma(e)&&r.delete(t)}function wf(){po=!1,At!==null&&ma(At)&&(At=null),Mt!==null&&ma(Mt)&&(Mt=null),Ot!==null&&ma(Ot)&&(Ot=null),kn.forEach(gl),jn.forEach(gl)}function en(e,t){e.blockedOn===t&&(e.blockedOn=null,po||(po=!0,Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority,wf)))}function Sn(e){function t(a){return en(a,e)}if(0<Xn.length){en(Xn[0],e);for(var r=1;r<Xn.length;r++){var n=Xn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(At!==null&&en(At,e),Mt!==null&&en(Mt,e),Ot!==null&&en(Ot,e),kn.forEach(t),jn.forEach(t),r=0;r<$t.length;r++)n=$t[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<$t.length&&(r=$t[0],r.blockedOn===null);)ju(r),r.blockedOn===null&&$t.shift()}var Ir=Ct.ReactCurrentBatchConfig,Pa=!0;function bf(e,t,r,n){var a=q,s=Ir.transition;Ir.transition=null;try{q=1,ii(e,t,r,n)}finally{q=a,Ir.transition=s}}function kf(e,t,r,n){var a=q,s=Ir.transition;Ir.transition=null;try{q=4,ii(e,t,r,n)}finally{q=a,Ir.transition=s}}function ii(e,t,r,n){if(Pa){var a=fo(e,t,r,n);if(a===null)Ds(e,t,n,Ta,r),hl(e,n);else if(yf(a,e,t,r,n))n.stopPropagation();else if(hl(e,n),t&4&&-1<vf.indexOf(e)){for(;a!==null;){var s=Un(a);if(s!==null&&yu(s),s=fo(e,t,r,n),s===null&&Ds(e,t,n,Ta,r),s===a)break;a=s}a!==null&&n.stopPropagation()}else Ds(e,t,n,null,r)}}var Ta=null;function fo(e,t,r,n){if(Ta=null,e=ni(n),e=Xt(e),e!==null)if(t=fr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=du(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ta=e,null}function Su(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cf()){case ai:return 1;case hu:return 4;case Ca:case uf:return 16;case gu:return 536870912;default:return 16}default:return 16}}var Lt=null,li=null,ha=null;function _u(){if(ha)return ha;var e,t=li,r=t.length,n,a="value"in Lt?Lt.value:Lt.textContent,s=a.length;for(e=0;e<r&&t[e]===a[e];e++);var i=r-e;for(n=1;n<=i&&t[r-n]===a[s-n];n++);return ha=a.slice(e,1<n?1-n:void 0)}function ga(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zn(){return!0}function xl(){return!1}function We(e){function t(r,n,a,s,i){this._reactName=r,this._targetInst=a,this.type=n,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Zn:xl,this.isPropagationStopped=xl,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Zn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Zn)},persist:function(){},isPersistent:Zn}),t}var Gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ci=We(Gr),Fn=re({},Gr,{view:0,detail:0}),jf=We(Fn),js,Ss,tn,Za=re({},Fn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ui,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tn&&(tn&&e.type==="mousemove"?(js=e.screenX-tn.screenX,Ss=e.screenY-tn.screenY):Ss=js=0,tn=e),js)},movementY:function(e){return"movementY"in e?e.movementY:Ss}}),vl=We(Za),Sf=re({},Za,{dataTransfer:0}),_f=We(Sf),Ef=re({},Fn,{relatedTarget:0}),_s=We(Ef),Nf=re({},Gr,{animationName:0,elapsedTime:0,pseudoElement:0}),Cf=We(Nf),zf=re({},Gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pf=We(zf),Tf=re({},Gr,{data:0}),yl=We(Tf),Df={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$f={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rf[e])?!!t[e]:!1}function ui(){return Lf}var If=re({},Fn,{key:function(e){if(e.key){var t=Df[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ga(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$f[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ui,charCode:function(e){return e.type==="keypress"?ga(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ga(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Af=We(If),Mf=re({},Za,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wl=We(Mf),Of=re({},Fn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ui}),Ff=We(Of),Uf=re({},Gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bf=We(Uf),Wf=re({},Za,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vf=We(Wf),qf=[9,13,27,32],di=St&&"CompositionEvent"in window,pn=null;St&&"documentMode"in document&&(pn=document.documentMode);var Hf=St&&"TextEvent"in window&&!pn,Eu=St&&(!di||pn&&8<pn&&11>=pn),bl=" ",kl=!1;function Nu(e,t){switch(e){case"keyup":return qf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kr=!1;function Qf(e,t){switch(e){case"compositionend":return Cu(t);case"keypress":return t.which!==32?null:(kl=!0,bl);case"textInput":return e=t.data,e===bl&&kl?null:e;default:return null}}function Kf(e,t){if(kr)return e==="compositionend"||!di&&Nu(e,t)?(e=_u(),ha=li=Lt=null,kr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Eu&&t.locale!=="ko"?null:t.data;default:return null}}var Gf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gf[e.type]:t==="textarea"}function zu(e,t,r,n){ou(n),t=Da(t,"onChange"),0<t.length&&(r=new ci("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var fn=null,_n=null;function Jf(e){Fu(e,0)}function es(e){var t=_r(e);if(Zc(t))return e}function Yf(e,t){if(e==="change")return t}var Pu=!1;if(St){var Es;if(St){var Ns="oninput"in document;if(!Ns){var Sl=document.createElement("div");Sl.setAttribute("oninput","return;"),Ns=typeof Sl.oninput=="function"}Es=Ns}else Es=!1;Pu=Es&&(!document.documentMode||9<document.documentMode)}function _l(){fn&&(fn.detachEvent("onpropertychange",Tu),_n=fn=null)}function Tu(e){if(e.propertyName==="value"&&es(_n)){var t=[];zu(t,_n,e,ni(e)),uu(Jf,t)}}function Xf(e,t,r){e==="focusin"?(_l(),fn=t,_n=r,fn.attachEvent("onpropertychange",Tu)):e==="focusout"&&_l()}function Zf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return es(_n)}function em(e,t){if(e==="click")return es(t)}function tm(e,t){if(e==="input"||e==="change")return es(t)}function rm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lt=typeof Object.is=="function"?Object.is:rm;function En(e,t){if(lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!Ks.call(t,a)||!lt(e[a],t[a]))return!1}return!0}function El(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nl(e,t){var r=El(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=El(r)}}function Du(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Du(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $u(){for(var e=window,t=_a();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=_a(e.document)}return t}function pi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function nm(e){var t=$u(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Du(r.ownerDocument.documentElement,r)){if(n!==null&&pi(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,s=Math.min(n.start,a);n=n.end===void 0?s:Math.min(n.end,a),!e.extend&&s>n&&(a=n,n=s,s=a),a=Nl(r,s);var i=Nl(r,n);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),s>n?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var am=St&&"documentMode"in document&&11>=document.documentMode,jr=null,mo=null,mn=null,ho=!1;function Cl(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ho||jr==null||jr!==_a(n)||(n=jr,"selectionStart"in n&&pi(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),mn&&En(mn,n)||(mn=n,n=Da(mo,"onSelect"),0<n.length&&(t=new ci("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=jr)))}function ea(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Sr={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionend:ea("Transition","TransitionEnd")},Cs={},Ru={};St&&(Ru=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);function ts(e){if(Cs[e])return Cs[e];if(!Sr[e])return e;var t=Sr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Ru)return Cs[e]=t[r];return e}var Lu=ts("animationend"),Iu=ts("animationiteration"),Au=ts("animationstart"),Mu=ts("transitionend"),Ou=new Map,zl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qt(e,t){Ou.set(e,t),pr(t,[e])}for(var zs=0;zs<zl.length;zs++){var Ps=zl[zs],sm=Ps.toLowerCase(),om=Ps[0].toUpperCase()+Ps.slice(1);Qt(sm,"on"+om)}Qt(Lu,"onAnimationEnd");Qt(Iu,"onAnimationIteration");Qt(Au,"onAnimationStart");Qt("dblclick","onDoubleClick");Qt("focusin","onFocus");Qt("focusout","onBlur");Qt(Mu,"onTransitionEnd");Ur("onMouseEnter",["mouseout","mouseover"]);Ur("onMouseLeave",["mouseout","mouseover"]);Ur("onPointerEnter",["pointerout","pointerover"]);Ur("onPointerLeave",["pointerout","pointerover"]);pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),im=new Set("cancel close invalid load scroll toggle".split(" ").concat(cn));function Pl(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,af(n,t,void 0,e),e.currentTarget=null}function Fu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],a=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var i=n.length-1;0<=i;i--){var l=n[i],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&a.isPropagationStopped())break e;Pl(a,l,u),s=c}else for(i=0;i<n.length;i++){if(l=n[i],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&a.isPropagationStopped())break e;Pl(a,l,u),s=c}}}if(Na)throw e=co,Na=!1,co=null,e}function J(e,t){var r=t[wo];r===void 0&&(r=t[wo]=new Set);var n=e+"__bubble";r.has(n)||(Uu(t,e,2,!1),r.add(n))}function Ts(e,t,r){var n=0;t&&(n|=4),Uu(r,e,n,t)}var ta="_reactListening"+Math.random().toString(36).slice(2);function Nn(e){if(!e[ta]){e[ta]=!0,Kc.forEach(function(r){r!=="selectionchange"&&(im.has(r)||Ts(r,!1,e),Ts(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ta]||(t[ta]=!0,Ts("selectionchange",!1,t))}}function Uu(e,t,r,n){switch(Su(t)){case 1:var a=bf;break;case 4:a=kf;break;default:a=ii}r=a.bind(null,t,r,e),a=void 0,!lo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Ds(e,t,r,n,a){var s=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var l=n.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(i===4)for(i=n.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;i=i.return}for(;l!==null;){if(i=Xt(l),i===null)return;if(c=i.tag,c===5||c===6){n=s=i;continue e}l=l.parentNode}}n=n.return}uu(function(){var u=s,m=ni(r),f=[];e:{var g=Ou.get(e);if(g!==void 0){var v=ci,y=e;switch(e){case"keypress":if(ga(r)===0)break e;case"keydown":case"keyup":v=Af;break;case"focusin":y="focus",v=_s;break;case"focusout":y="blur",v=_s;break;case"beforeblur":case"afterblur":v=_s;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=vl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=_f;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Ff;break;case Lu:case Iu:case Au:v=Cf;break;case Mu:v=Bf;break;case"scroll":v=jf;break;case"wheel":v=Vf;break;case"copy":case"cut":case"paste":v=Pf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=wl}var x=(t&4)!==0,j=!x&&e==="scroll",p=x?g!==null?g+"Capture":null:g;x=[];for(var d=u,h;d!==null;){h=d;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,p!==null&&(w=bn(d,p),w!=null&&x.push(Cn(d,w,h)))),j)break;d=d.return}0<x.length&&(g=new v(g,y,null,r,m),f.push({event:g,listeners:x}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&r!==oo&&(y=r.relatedTarget||r.fromElement)&&(Xt(y)||y[_t]))break e;if((v||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,v?(y=r.relatedTarget||r.toElement,v=u,y=y?Xt(y):null,y!==null&&(j=fr(y),y!==j||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(x=vl,w="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=wl,w="onPointerLeave",p="onPointerEnter",d="pointer"),j=v==null?g:_r(v),h=y==null?g:_r(y),g=new x(w,d+"leave",v,r,m),g.target=j,g.relatedTarget=h,w=null,Xt(m)===u&&(x=new x(p,d+"enter",y,r,m),x.target=h,x.relatedTarget=j,w=x),j=w,v&&y)t:{for(x=v,p=y,d=0,h=x;h;h=xr(h))d++;for(h=0,w=p;w;w=xr(w))h++;for(;0<d-h;)x=xr(x),d--;for(;0<h-d;)p=xr(p),h--;for(;d--;){if(x===p||p!==null&&x===p.alternate)break t;x=xr(x),p=xr(p)}x=null}else x=null;v!==null&&Tl(f,g,v,x,!1),y!==null&&j!==null&&Tl(f,j,y,x,!0)}}e:{if(g=u?_r(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var S=Yf;else if(jl(g))if(Pu)S=tm;else{S=Zf;var N=Xf}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=em);if(S&&(S=S(e,u))){zu(f,S,r,m);break e}N&&N(e,g,u),e==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&to(g,"number",g.value)}switch(N=u?_r(u):window,e){case"focusin":(jl(N)||N.contentEditable==="true")&&(jr=N,mo=u,mn=null);break;case"focusout":mn=mo=jr=null;break;case"mousedown":ho=!0;break;case"contextmenu":case"mouseup":case"dragend":ho=!1,Cl(f,r,m);break;case"selectionchange":if(am)break;case"keydown":case"keyup":Cl(f,r,m)}var C;if(di)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else kr?Nu(e,r)&&(z="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(z="onCompositionStart");z&&(Eu&&r.locale!=="ko"&&(kr||z!=="onCompositionStart"?z==="onCompositionEnd"&&kr&&(C=_u()):(Lt=m,li="value"in Lt?Lt.value:Lt.textContent,kr=!0)),N=Da(u,z),0<N.length&&(z=new yl(z,e,null,r,m),f.push({event:z,listeners:N}),C?z.data=C:(C=Cu(r),C!==null&&(z.data=C)))),(C=Hf?Qf(e,r):Kf(e,r))&&(u=Da(u,"onBeforeInput"),0<u.length&&(m=new yl("onBeforeInput","beforeinput",null,r,m),f.push({event:m,listeners:u}),m.data=C))}Fu(f,t)})}function Cn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Da(e,t){for(var r=t+"Capture",n=[];e!==null;){var a=e,s=a.stateNode;a.tag===5&&s!==null&&(a=s,s=bn(e,r),s!=null&&n.unshift(Cn(e,s,a)),s=bn(e,t),s!=null&&n.push(Cn(e,s,a))),e=e.return}return n}function xr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Tl(e,t,r,n,a){for(var s=t._reactName,i=[];r!==null&&r!==n;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===n)break;l.tag===5&&u!==null&&(l=u,a?(c=bn(r,s),c!=null&&i.unshift(Cn(r,c,l))):a||(c=bn(r,s),c!=null&&i.push(Cn(r,c,l)))),r=r.return}i.length!==0&&e.push({event:t,listeners:i})}var lm=/\r\n?/g,cm=/\u0000|\uFFFD/g;function Dl(e){return(typeof e=="string"?e:""+e).replace(lm,`
`).replace(cm,"")}function ra(e,t,r){if(t=Dl(t),Dl(e)!==t&&r)throw Error(_(425))}function $a(){}var go=null,xo=null;function vo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yo=typeof setTimeout=="function"?setTimeout:void 0,um=typeof clearTimeout=="function"?clearTimeout:void 0,$l=typeof Promise=="function"?Promise:void 0,dm=typeof queueMicrotask=="function"?queueMicrotask:typeof $l<"u"?function(e){return $l.resolve(null).then(e).catch(pm)}:yo;function pm(e){setTimeout(function(){throw e})}function $s(e,t){var r=t,n=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(n===0){e.removeChild(a),Sn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=a}while(r);Sn(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Rl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Jr=Math.random().toString(36).slice(2),pt="__reactFiber$"+Jr,zn="__reactProps$"+Jr,_t="__reactContainer$"+Jr,wo="__reactEvents$"+Jr,fm="__reactListeners$"+Jr,mm="__reactHandles$"+Jr;function Xt(e){var t=e[pt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[_t]||r[pt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Rl(e);e!==null;){if(r=e[pt])return r;e=Rl(e)}return t}e=r,r=e.parentNode}return null}function Un(e){return e=e[pt]||e[_t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _r(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function rs(e){return e[zn]||null}var bo=[],Er=-1;function Kt(e){return{current:e}}function Y(e){0>Er||(e.current=bo[Er],bo[Er]=null,Er--)}function K(e,t){Er++,bo[Er]=e.current,e.current=t}var Ht={},ke=Kt(Ht),$e=Kt(!1),or=Ht;function Br(e,t){var r=e.type.contextTypes;if(!r)return Ht;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var a={},s;for(s in r)a[s]=t[s];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Re(e){return e=e.childContextTypes,e!=null}function Ra(){Y($e),Y(ke)}function Ll(e,t,r){if(ke.current!==Ht)throw Error(_(168));K(ke,t),K($e,r)}function Bu(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var a in n)if(!(a in t))throw Error(_(108,Yp(e)||"Unknown",a));return re({},r,n)}function La(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ht,or=ke.current,K(ke,e),K($e,$e.current),!0}function Il(e,t,r){var n=e.stateNode;if(!n)throw Error(_(169));r?(e=Bu(e,t,or),n.__reactInternalMemoizedMergedChildContext=e,Y($e),Y(ke),K(ke,e)):Y($e),K($e,r)}var yt=null,ns=!1,Rs=!1;function Wu(e){yt===null?yt=[e]:yt.push(e)}function hm(e){ns=!0,Wu(e)}function Gt(){if(!Rs&&yt!==null){Rs=!0;var e=0,t=q;try{var r=yt;for(q=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}yt=null,ns=!1}catch(a){throw yt!==null&&(yt=yt.slice(e+1)),mu(ai,Gt),a}finally{q=t,Rs=!1}}return null}var Nr=[],Cr=0,Ia=null,Aa=0,qe=[],He=0,ir=null,bt=1,kt="";function Jt(e,t){Nr[Cr++]=Aa,Nr[Cr++]=Ia,Ia=e,Aa=t}function Vu(e,t,r){qe[He++]=bt,qe[He++]=kt,qe[He++]=ir,ir=e;var n=bt;e=kt;var a=32-ot(n)-1;n&=~(1<<a),r+=1;var s=32-ot(t)+a;if(30<s){var i=a-a%5;s=(n&(1<<i)-1).toString(32),n>>=i,a-=i,bt=1<<32-ot(t)+a|r<<a|n,kt=s+e}else bt=1<<s|r<<a|n,kt=e}function fi(e){e.return!==null&&(Jt(e,1),Vu(e,1,0))}function mi(e){for(;e===Ia;)Ia=Nr[--Cr],Nr[Cr]=null,Aa=Nr[--Cr],Nr[Cr]=null;for(;e===ir;)ir=qe[--He],qe[He]=null,kt=qe[--He],qe[He]=null,bt=qe[--He],qe[He]=null}var Fe=null,Oe=null,X=!1,at=null;function qu(e,t){var r=Qe(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Al(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Fe=e,Oe=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Fe=e,Oe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=ir!==null?{id:bt,overflow:kt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Qe(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Fe=e,Oe=null,!0):!1;default:return!1}}function ko(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jo(e){if(X){var t=Oe;if(t){var r=t;if(!Al(e,t)){if(ko(e))throw Error(_(418));t=Ft(r.nextSibling);var n=Fe;t&&Al(e,t)?qu(n,r):(e.flags=e.flags&-4097|2,X=!1,Fe=e)}}else{if(ko(e))throw Error(_(418));e.flags=e.flags&-4097|2,X=!1,Fe=e}}}function Ml(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Fe=e}function na(e){if(e!==Fe)return!1;if(!X)return Ml(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vo(e.type,e.memoizedProps)),t&&(t=Oe)){if(ko(e))throw Hu(),Error(_(418));for(;t;)qu(e,t),t=Ft(t.nextSibling)}if(Ml(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Oe=Ft(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Oe=null}}else Oe=Fe?Ft(e.stateNode.nextSibling):null;return!0}function Hu(){for(var e=Oe;e;)e=Ft(e.nextSibling)}function Wr(){Oe=Fe=null,X=!1}function hi(e){at===null?at=[e]:at.push(e)}var gm=Ct.ReactCurrentBatchConfig;function rn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(_(309));var n=r.stateNode}if(!n)throw Error(_(147,e));var a=n,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(i){var l=a.refs;i===null?delete l[s]:l[s]=i},t._stringRef=s,t)}if(typeof e!="string")throw Error(_(284));if(!r._owner)throw Error(_(290,e))}return e}function aa(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ol(e){var t=e._init;return t(e._payload)}function Qu(e){function t(p,d){if(e){var h=p.deletions;h===null?(p.deletions=[d],p.flags|=16):h.push(d)}}function r(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function n(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function a(p,d){return p=Vt(p,d),p.index=0,p.sibling=null,p}function s(p,d,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<d?(p.flags|=2,d):h):(p.flags|=2,d)):(p.flags|=1048576,d)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,d,h,w){return d===null||d.tag!==6?(d=Us(h,p.mode,w),d.return=p,d):(d=a(d,h),d.return=p,d)}function c(p,d,h,w){var S=h.type;return S===br?m(p,d,h.props.children,w,h.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Tt&&Ol(S)===d.type)?(w=a(d,h.props),w.ref=rn(p,d,h),w.return=p,w):(w=ja(h.type,h.key,h.props,null,p.mode,w),w.ref=rn(p,d,h),w.return=p,w)}function u(p,d,h,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Bs(h,p.mode,w),d.return=p,d):(d=a(d,h.children||[]),d.return=p,d)}function m(p,d,h,w,S){return d===null||d.tag!==7?(d=nr(h,p.mode,w,S),d.return=p,d):(d=a(d,h),d.return=p,d)}function f(p,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Us(""+d,p.mode,h),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Qn:return h=ja(d.type,d.key,d.props,null,p.mode,h),h.ref=rn(p,null,d),h.return=p,h;case wr:return d=Bs(d,p.mode,h),d.return=p,d;case Tt:var w=d._init;return f(p,w(d._payload),h)}if(on(d)||Yr(d))return d=nr(d,p.mode,h,null),d.return=p,d;aa(p,d)}return null}function g(p,d,h,w){var S=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:l(p,d,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Qn:return h.key===S?c(p,d,h,w):null;case wr:return h.key===S?u(p,d,h,w):null;case Tt:return S=h._init,g(p,d,S(h._payload),w)}if(on(h)||Yr(h))return S!==null?null:m(p,d,h,w,null);aa(p,h)}return null}function v(p,d,h,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(h)||null,l(d,p,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Qn:return p=p.get(w.key===null?h:w.key)||null,c(d,p,w,S);case wr:return p=p.get(w.key===null?h:w.key)||null,u(d,p,w,S);case Tt:var N=w._init;return v(p,d,h,N(w._payload),S)}if(on(w)||Yr(w))return p=p.get(h)||null,m(d,p,w,S,null);aa(d,w)}return null}function y(p,d,h,w){for(var S=null,N=null,C=d,z=d=0,$=null;C!==null&&z<h.length;z++){C.index>z?($=C,C=null):$=C.sibling;var R=g(p,C,h[z],w);if(R===null){C===null&&(C=$);break}e&&C&&R.alternate===null&&t(p,C),d=s(R,d,z),N===null?S=R:N.sibling=R,N=R,C=$}if(z===h.length)return r(p,C),X&&Jt(p,z),S;if(C===null){for(;z<h.length;z++)C=f(p,h[z],w),C!==null&&(d=s(C,d,z),N===null?S=C:N.sibling=C,N=C);return X&&Jt(p,z),S}for(C=n(p,C);z<h.length;z++)$=v(C,p,z,h[z],w),$!==null&&(e&&$.alternate!==null&&C.delete($.key===null?z:$.key),d=s($,d,z),N===null?S=$:N.sibling=$,N=$);return e&&C.forEach(function(W){return t(p,W)}),X&&Jt(p,z),S}function x(p,d,h,w){var S=Yr(h);if(typeof S!="function")throw Error(_(150));if(h=S.call(h),h==null)throw Error(_(151));for(var N=S=null,C=d,z=d=0,$=null,R=h.next();C!==null&&!R.done;z++,R=h.next()){C.index>z?($=C,C=null):$=C.sibling;var W=g(p,C,R.value,w);if(W===null){C===null&&(C=$);break}e&&C&&W.alternate===null&&t(p,C),d=s(W,d,z),N===null?S=W:N.sibling=W,N=W,C=$}if(R.done)return r(p,C),X&&Jt(p,z),S;if(C===null){for(;!R.done;z++,R=h.next())R=f(p,R.value,w),R!==null&&(d=s(R,d,z),N===null?S=R:N.sibling=R,N=R);return X&&Jt(p,z),S}for(C=n(p,C);!R.done;z++,R=h.next())R=v(C,p,z,R.value,w),R!==null&&(e&&R.alternate!==null&&C.delete(R.key===null?z:R.key),d=s(R,d,z),N===null?S=R:N.sibling=R,N=R);return e&&C.forEach(function(je){return t(p,je)}),X&&Jt(p,z),S}function j(p,d,h,w){if(typeof h=="object"&&h!==null&&h.type===br&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Qn:e:{for(var S=h.key,N=d;N!==null;){if(N.key===S){if(S=h.type,S===br){if(N.tag===7){r(p,N.sibling),d=a(N,h.props.children),d.return=p,p=d;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Tt&&Ol(S)===N.type){r(p,N.sibling),d=a(N,h.props),d.ref=rn(p,N,h),d.return=p,p=d;break e}r(p,N);break}else t(p,N);N=N.sibling}h.type===br?(d=nr(h.props.children,p.mode,w,h.key),d.return=p,p=d):(w=ja(h.type,h.key,h.props,null,p.mode,w),w.ref=rn(p,d,h),w.return=p,p=w)}return i(p);case wr:e:{for(N=h.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){r(p,d.sibling),d=a(d,h.children||[]),d.return=p,p=d;break e}else{r(p,d);break}else t(p,d);d=d.sibling}d=Bs(h,p.mode,w),d.return=p,p=d}return i(p);case Tt:return N=h._init,j(p,d,N(h._payload),w)}if(on(h))return y(p,d,h,w);if(Yr(h))return x(p,d,h,w);aa(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(r(p,d.sibling),d=a(d,h),d.return=p,p=d):(r(p,d),d=Us(h,p.mode,w),d.return=p,p=d),i(p)):r(p,d)}return j}var Vr=Qu(!0),Ku=Qu(!1),Ma=Kt(null),Oa=null,zr=null,gi=null;function xi(){gi=zr=Oa=null}function vi(e){var t=Ma.current;Y(Ma),e._currentValue=t}function So(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Ar(e,t){Oa=e,gi=zr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(De=!0),e.firstContext=null)}function Je(e){var t=e._currentValue;if(gi!==e)if(e={context:e,memoizedValue:t,next:null},zr===null){if(Oa===null)throw Error(_(308));zr=e,Oa.dependencies={lanes:0,firstContext:e}}else zr=zr.next=e;return t}var Zt=null;function yi(e){Zt===null?Zt=[e]:Zt.push(e)}function Gu(e,t,r,n){var a=t.interleaved;return a===null?(r.next=r,yi(t)):(r.next=a.next,a.next=r),t.interleaved=r,Et(e,n)}function Et(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Dt=!1;function wi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ju(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,B&2){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,Et(e,r)}return a=n.interleaved,a===null?(t.next=t,yi(n)):(t.next=a.next,a.next=t),n.interleaved=t,Et(e,r)}function xa(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,si(e,r)}}function Fl(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var a=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?a=s=i:s=s.next=i,r=r.next}while(r!==null);s===null?a=s=t:s=s.next=t}else a=s=t;r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Fa(e,t,r,n){var a=e.updateQueue;Dt=!1;var s=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,u=c.next;c.next=null,i===null?s=u:i.next=u,i=c;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==i&&(l===null?m.firstBaseUpdate=u:l.next=u,m.lastBaseUpdate=c))}if(s!==null){var f=a.baseState;i=0,m=u=c=null,l=s;do{var g=l.lane,v=l.eventTime;if((n&g)===g){m!==null&&(m=m.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,x=l;switch(g=t,v=r,x.tag){case 1:if(y=x.payload,typeof y=="function"){f=y.call(v,f,g);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,g=typeof y=="function"?y.call(v,f,g):y,g==null)break e;f=re({},f,g);break e;case 2:Dt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=a.effects,g===null?a.effects=[l]:g.push(l))}else v={eventTime:v,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(u=m=v,c=f):m=m.next=v,i|=g;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;g=l,l=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(!0);if(m===null&&(c=f),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=m,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else s===null&&(a.shared.lanes=0);cr|=i,e.lanes=i,e.memoizedState=f}}function Ul(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],a=n.callback;if(a!==null){if(n.callback=null,n=r,typeof a!="function")throw Error(_(191,a));a.call(n)}}}var Bn={},ht=Kt(Bn),Pn=Kt(Bn),Tn=Kt(Bn);function er(e){if(e===Bn)throw Error(_(174));return e}function bi(e,t){switch(K(Tn,t),K(Pn,e),K(ht,Bn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:no(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=no(t,e)}Y(ht),K(ht,t)}function qr(){Y(ht),Y(Pn),Y(Tn)}function Yu(e){er(Tn.current);var t=er(ht.current),r=no(t,e.type);t!==r&&(K(Pn,e),K(ht,r))}function ki(e){Pn.current===e&&(Y(ht),Y(Pn))}var ee=Kt(0);function Ua(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ls=[];function ji(){for(var e=0;e<Ls.length;e++)Ls[e]._workInProgressVersionPrimary=null;Ls.length=0}var va=Ct.ReactCurrentDispatcher,Is=Ct.ReactCurrentBatchConfig,lr=0,te=null,ue=null,pe=null,Ba=!1,hn=!1,Dn=0,xm=0;function ve(){throw Error(_(321))}function Si(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!lt(e[r],t[r]))return!1;return!0}function _i(e,t,r,n,a,s){if(lr=s,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,va.current=e===null||e.memoizedState===null?bm:km,e=r(n,a),hn){s=0;do{if(hn=!1,Dn=0,25<=s)throw Error(_(301));s+=1,pe=ue=null,t.updateQueue=null,va.current=jm,e=r(n,a)}while(hn)}if(va.current=Wa,t=ue!==null&&ue.next!==null,lr=0,pe=ue=te=null,Ba=!1,t)throw Error(_(300));return e}function Ei(){var e=Dn!==0;return Dn=0,e}function dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?te.memoizedState=pe=e:pe=pe.next=e,pe}function Ye(){if(ue===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=pe===null?te.memoizedState:pe.next;if(t!==null)pe=t,ue=e;else{if(e===null)throw Error(_(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},pe===null?te.memoizedState=pe=e:pe=pe.next=e}return pe}function $n(e,t){return typeof t=="function"?t(e):t}function As(e){var t=Ye(),r=t.queue;if(r===null)throw Error(_(311));r.lastRenderedReducer=e;var n=ue,a=n.baseQueue,s=r.pending;if(s!==null){if(a!==null){var i=a.next;a.next=s.next,s.next=i}n.baseQueue=a=s,r.pending=null}if(a!==null){s=a.next,n=n.baseState;var l=i=null,c=null,u=s;do{var m=u.lane;if((lr&m)===m)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var f={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,i=n):c=c.next=f,te.lanes|=m,cr|=m}u=u.next}while(u!==null&&u!==s);c===null?i=n:c.next=l,lt(n,t.memoizedState)||(De=!0),t.memoizedState=n,t.baseState=i,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){a=e;do s=a.lane,te.lanes|=s,cr|=s,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Ms(e){var t=Ye(),r=t.queue;if(r===null)throw Error(_(311));r.lastRenderedReducer=e;var n=r.dispatch,a=r.pending,s=t.memoizedState;if(a!==null){r.pending=null;var i=a=a.next;do s=e(s,i.action),i=i.next;while(i!==a);lt(s,t.memoizedState)||(De=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),r.lastRenderedState=s}return[s,n]}function Xu(){}function Zu(e,t){var r=te,n=Ye(),a=t(),s=!lt(n.memoizedState,a);if(s&&(n.memoizedState=a,De=!0),n=n.queue,Ni(rd.bind(null,r,n,e),[e]),n.getSnapshot!==t||s||pe!==null&&pe.memoizedState.tag&1){if(r.flags|=2048,Rn(9,td.bind(null,r,n,a,t),void 0,null),fe===null)throw Error(_(349));lr&30||ed(r,t,a)}return a}function ed(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function td(e,t,r,n){t.value=r,t.getSnapshot=n,nd(t)&&ad(e)}function rd(e,t,r){return r(function(){nd(t)&&ad(e)})}function nd(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!lt(e,r)}catch{return!0}}function ad(e){var t=Et(e,1);t!==null&&it(t,e,1,-1)}function Bl(e){var t=dt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$n,lastRenderedState:e},t.queue=e,e=e.dispatch=wm.bind(null,te,e),[t.memoizedState,e]}function Rn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function sd(){return Ye().memoizedState}function ya(e,t,r,n){var a=dt();te.flags|=e,a.memoizedState=Rn(1|t,r,void 0,n===void 0?null:n)}function as(e,t,r,n){var a=Ye();n=n===void 0?null:n;var s=void 0;if(ue!==null){var i=ue.memoizedState;if(s=i.destroy,n!==null&&Si(n,i.deps)){a.memoizedState=Rn(t,r,s,n);return}}te.flags|=e,a.memoizedState=Rn(1|t,r,s,n)}function Wl(e,t){return ya(8390656,8,e,t)}function Ni(e,t){return as(2048,8,e,t)}function od(e,t){return as(4,2,e,t)}function id(e,t){return as(4,4,e,t)}function ld(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cd(e,t,r){return r=r!=null?r.concat([e]):null,as(4,4,ld.bind(null,t,e),r)}function Ci(){}function ud(e,t){var r=Ye();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Si(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function dd(e,t){var r=Ye();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Si(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function pd(e,t,r){return lr&21?(lt(r,t)||(r=xu(),te.lanes|=r,cr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=r)}function vm(e,t){var r=q;q=r!==0&&4>r?r:4,e(!0);var n=Is.transition;Is.transition={};try{e(!1),t()}finally{q=r,Is.transition=n}}function fd(){return Ye().memoizedState}function ym(e,t,r){var n=Wt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},md(e))hd(t,r);else if(r=Gu(e,t,r,n),r!==null){var a=Ne();it(r,e,n,a),gd(r,t,n)}}function wm(e,t,r){var n=Wt(e),a={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(md(e))hd(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var i=t.lastRenderedState,l=s(i,r);if(a.hasEagerState=!0,a.eagerState=l,lt(l,i)){var c=t.interleaved;c===null?(a.next=a,yi(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}r=Gu(e,t,a,n),r!==null&&(a=Ne(),it(r,e,n,a),gd(r,t,n))}}function md(e){var t=e.alternate;return e===te||t!==null&&t===te}function hd(e,t){hn=Ba=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function gd(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,si(e,r)}}var Wa={readContext:Je,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useInsertionEffect:ve,useLayoutEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useMutableSource:ve,useSyncExternalStore:ve,useId:ve,unstable_isNewReconciler:!1},bm={readContext:Je,useCallback:function(e,t){return dt().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:Wl,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ya(4194308,4,ld.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ya(4194308,4,e,t)},useInsertionEffect:function(e,t){return ya(4,2,e,t)},useMemo:function(e,t){var r=dt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=dt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=ym.bind(null,te,e),[n.memoizedState,e]},useRef:function(e){var t=dt();return e={current:e},t.memoizedState=e},useState:Bl,useDebugValue:Ci,useDeferredValue:function(e){return dt().memoizedState=e},useTransition:function(){var e=Bl(!1),t=e[0];return e=vm.bind(null,e[1]),dt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=te,a=dt();if(X){if(r===void 0)throw Error(_(407));r=r()}else{if(r=t(),fe===null)throw Error(_(349));lr&30||ed(n,t,r)}a.memoizedState=r;var s={value:r,getSnapshot:t};return a.queue=s,Wl(rd.bind(null,n,s,e),[e]),n.flags|=2048,Rn(9,td.bind(null,n,s,r,t),void 0,null),r},useId:function(){var e=dt(),t=fe.identifierPrefix;if(X){var r=kt,n=bt;r=(n&~(1<<32-ot(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Dn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=xm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},km={readContext:Je,useCallback:ud,useContext:Je,useEffect:Ni,useImperativeHandle:cd,useInsertionEffect:od,useLayoutEffect:id,useMemo:dd,useReducer:As,useRef:sd,useState:function(){return As($n)},useDebugValue:Ci,useDeferredValue:function(e){var t=Ye();return pd(t,ue.memoizedState,e)},useTransition:function(){var e=As($n)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:Xu,useSyncExternalStore:Zu,useId:fd,unstable_isNewReconciler:!1},jm={readContext:Je,useCallback:ud,useContext:Je,useEffect:Ni,useImperativeHandle:cd,useInsertionEffect:od,useLayoutEffect:id,useMemo:dd,useReducer:Ms,useRef:sd,useState:function(){return Ms($n)},useDebugValue:Ci,useDeferredValue:function(e){var t=Ye();return ue===null?t.memoizedState=e:pd(t,ue.memoizedState,e)},useTransition:function(){var e=Ms($n)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:Xu,useSyncExternalStore:Zu,useId:fd,unstable_isNewReconciler:!1};function rt(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function _o(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:re({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ss={isMounted:function(e){return(e=e._reactInternals)?fr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Ne(),a=Wt(e),s=jt(n,a);s.payload=t,r!=null&&(s.callback=r),t=Ut(e,s,a),t!==null&&(it(t,e,a,n),xa(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Ne(),a=Wt(e),s=jt(n,a);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=Ut(e,s,a),t!==null&&(it(t,e,a,n),xa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ne(),n=Wt(e),a=jt(r,n);a.tag=2,t!=null&&(a.callback=t),t=Ut(e,a,n),t!==null&&(it(t,e,n,r),xa(t,e,n))}};function Vl(e,t,r,n,a,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,i):t.prototype&&t.prototype.isPureReactComponent?!En(r,n)||!En(a,s):!0}function xd(e,t,r){var n=!1,a=Ht,s=t.contextType;return typeof s=="object"&&s!==null?s=Je(s):(a=Re(t)?or:ke.current,n=t.contextTypes,s=(n=n!=null)?Br(e,a):Ht),t=new t(r,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ss,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=s),t}function ql(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&ss.enqueueReplaceState(t,t.state,null)}function Eo(e,t,r,n){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},wi(e);var s=t.contextType;typeof s=="object"&&s!==null?a.context=Je(s):(s=Re(t)?or:ke.current,a.context=Br(e,s)),a.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(_o(e,t,s,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&ss.enqueueReplaceState(a,a.state,null),Fa(e,r,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Hr(e,t){try{var r="",n=t;do r+=Jp(n),n=n.return;while(n);var a=r}catch(s){a=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:a,digest:null}}function Os(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function No(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Sm=typeof WeakMap=="function"?WeakMap:Map;function vd(e,t,r){r=jt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){qa||(qa=!0,Ao=n),No(e,t)},r}function yd(e,t,r){r=jt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=t.value;r.payload=function(){return n(a)},r.callback=function(){No(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){No(e,t),typeof n!="function"&&(Bt===null?Bt=new Set([this]):Bt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),r}function Hl(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Sm;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(r)||(a.add(r),e=Mm.bind(null,e,t,r),t.then(e,e))}function Ql(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Kl(e,t,r,n,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=jt(-1,1),t.tag=2,Ut(r,t,1))),r.lanes|=1),e)}var _m=Ct.ReactCurrentOwner,De=!1;function Ee(e,t,r,n){t.child=e===null?Ku(t,null,r,n):Vr(t,e.child,r,n)}function Gl(e,t,r,n,a){r=r.render;var s=t.ref;return Ar(t,a),n=_i(e,t,r,n,s,a),r=Ei(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Nt(e,t,a)):(X&&r&&fi(t),t.flags|=1,Ee(e,t,n,a),t.child)}function Jl(e,t,r,n,a){if(e===null){var s=r.type;return typeof s=="function"&&!Ii(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=s,wd(e,t,s,n,a)):(e=ja(r.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&a)){var i=s.memoizedProps;if(r=r.compare,r=r!==null?r:En,r(i,n)&&e.ref===t.ref)return Nt(e,t,a)}return t.flags|=1,e=Vt(s,n),e.ref=t.ref,e.return=t,t.child=e}function wd(e,t,r,n,a){if(e!==null){var s=e.memoizedProps;if(En(s,n)&&e.ref===t.ref)if(De=!1,t.pendingProps=n=s,(e.lanes&a)!==0)e.flags&131072&&(De=!0);else return t.lanes=e.lanes,Nt(e,t,a)}return Co(e,t,r,n,a)}function bd(e,t,r){var n=t.pendingProps,a=n.children,s=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(Tr,Me),Me|=r;else{if(!(r&1073741824))return e=s!==null?s.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(Tr,Me),Me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:r,K(Tr,Me),Me|=n}else s!==null?(n=s.baseLanes|r,t.memoizedState=null):n=r,K(Tr,Me),Me|=n;return Ee(e,t,a,r),t.child}function kd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Co(e,t,r,n,a){var s=Re(r)?or:ke.current;return s=Br(t,s),Ar(t,a),r=_i(e,t,r,n,s,a),n=Ei(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Nt(e,t,a)):(X&&n&&fi(t),t.flags|=1,Ee(e,t,r,a),t.child)}function Yl(e,t,r,n,a){if(Re(r)){var s=!0;La(t)}else s=!1;if(Ar(t,a),t.stateNode===null)wa(e,t),xd(t,r,n),Eo(t,r,n,a),n=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var c=i.context,u=r.contextType;typeof u=="object"&&u!==null?u=Je(u):(u=Re(r)?or:ke.current,u=Br(t,u));var m=r.getDerivedStateFromProps,f=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==n||c!==u)&&ql(t,i,n,u),Dt=!1;var g=t.memoizedState;i.state=g,Fa(t,n,i,a),c=t.memoizedState,l!==n||g!==c||$e.current||Dt?(typeof m=="function"&&(_o(t,r,m,n),c=t.memoizedState),(l=Dt||Vl(t,r,l,n,g,c,u))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),i.props=n,i.state=c,i.context=u,n=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,Ju(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:rt(t.type,l),i.props=u,f=t.pendingProps,g=i.context,c=r.contextType,typeof c=="object"&&c!==null?c=Je(c):(c=Re(r)?or:ke.current,c=Br(t,c));var v=r.getDerivedStateFromProps;(m=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==f||g!==c)&&ql(t,i,n,c),Dt=!1,g=t.memoizedState,i.state=g,Fa(t,n,i,a);var y=t.memoizedState;l!==f||g!==y||$e.current||Dt?(typeof v=="function"&&(_o(t,r,v,n),y=t.memoizedState),(u=Dt||Vl(t,r,u,n,g,y,c)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,y,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,y,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=y),i.props=n,i.state=y,i.context=c,n=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return zo(e,t,r,n,s,a)}function zo(e,t,r,n,a,s){kd(e,t);var i=(t.flags&128)!==0;if(!n&&!i)return a&&Il(t,r,!1),Nt(e,t,s);n=t.stateNode,_m.current=t;var l=i&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&i?(t.child=Vr(t,e.child,null,s),t.child=Vr(t,null,l,s)):Ee(e,t,l,s),t.memoizedState=n.state,a&&Il(t,r,!0),t.child}function jd(e){var t=e.stateNode;t.pendingContext?Ll(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ll(e,t.context,!1),bi(e,t.containerInfo)}function Xl(e,t,r,n,a){return Wr(),hi(a),t.flags|=256,Ee(e,t,r,n),t.child}var Po={dehydrated:null,treeContext:null,retryLane:0};function To(e){return{baseLanes:e,cachePool:null,transitions:null}}function Sd(e,t,r){var n=t.pendingProps,a=ee.current,s=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),K(ee,a&1),e===null)return jo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=n.children,e=n.fallback,s?(n=t.mode,s=t.child,i={mode:"hidden",children:i},!(n&1)&&s!==null?(s.childLanes=0,s.pendingProps=i):s=ls(i,n,0,null),e=nr(e,n,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=To(r),t.memoizedState=Po,e):zi(t,i));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Em(e,t,i,n,l,a,r);if(s){s=n.fallback,i=t.mode,a=e.child,l=a.sibling;var c={mode:"hidden",children:n.children};return!(i&1)&&t.child!==a?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=Vt(a,c),n.subtreeFlags=a.subtreeFlags&14680064),l!==null?s=Vt(l,s):(s=nr(s,i,r,null),s.flags|=2),s.return=t,n.return=t,n.sibling=s,t.child=n,n=s,s=t.child,i=e.child.memoizedState,i=i===null?To(r):{baseLanes:i.baseLanes|r,cachePool:null,transitions:i.transitions},s.memoizedState=i,s.childLanes=e.childLanes&~r,t.memoizedState=Po,n}return s=e.child,e=s.sibling,n=Vt(s,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function zi(e,t){return t=ls({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function sa(e,t,r,n){return n!==null&&hi(n),Vr(t,e.child,null,r),e=zi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Em(e,t,r,n,a,s,i){if(r)return t.flags&256?(t.flags&=-257,n=Os(Error(_(422))),sa(e,t,i,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=n.fallback,a=t.mode,n=ls({mode:"visible",children:n.children},a,0,null),s=nr(s,a,i,null),s.flags|=2,n.return=t,s.return=t,n.sibling=s,t.child=n,t.mode&1&&Vr(t,e.child,null,i),t.child.memoizedState=To(i),t.memoizedState=Po,s);if(!(t.mode&1))return sa(e,t,i,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var l=n.dgst;return n=l,s=Error(_(419)),n=Os(s,n,void 0),sa(e,t,i,n)}if(l=(i&e.childLanes)!==0,De||l){if(n=fe,n!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(n.suspendedLanes|i)?0:a,a!==0&&a!==s.retryLane&&(s.retryLane=a,Et(e,a),it(n,e,a,-1))}return Li(),n=Os(Error(_(421))),sa(e,t,i,n)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Om.bind(null,e),a._reactRetry=t,null):(e=s.treeContext,Oe=Ft(a.nextSibling),Fe=t,X=!0,at=null,e!==null&&(qe[He++]=bt,qe[He++]=kt,qe[He++]=ir,bt=e.id,kt=e.overflow,ir=t),t=zi(t,n.children),t.flags|=4096,t)}function Zl(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),So(e.return,t,r)}function Fs(e,t,r,n,a){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=r,s.tailMode=a)}function _d(e,t,r){var n=t.pendingProps,a=n.revealOrder,s=n.tail;if(Ee(e,t,n.children,r),n=ee.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zl(e,r,t);else if(e.tag===19)Zl(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(K(ee,n),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&Ua(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Fs(t,!1,a,r,s);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ua(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Fs(t,!0,r,null,s);break;case"together":Fs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function wa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),cr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,r=Vt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Vt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Nm(e,t,r){switch(t.tag){case 3:jd(t),Wr();break;case 5:Yu(t);break;case 1:Re(t.type)&&La(t);break;case 4:bi(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,a=t.memoizedProps.value;K(Ma,n._currentValue),n._currentValue=a;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(K(ee,ee.current&1),t.flags|=128,null):r&t.child.childLanes?Sd(e,t,r):(K(ee,ee.current&1),e=Nt(e,t,r),e!==null?e.sibling:null);K(ee,ee.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return _d(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),K(ee,ee.current),n)break;return null;case 22:case 23:return t.lanes=0,bd(e,t,r)}return Nt(e,t,r)}var Ed,Do,Nd,Cd;Ed=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Do=function(){};Nd=function(e,t,r,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,er(ht.current);var s=null;switch(r){case"input":a=Zs(e,a),n=Zs(e,n),s=[];break;case"select":a=re({},a,{value:void 0}),n=re({},n,{value:void 0}),s=[];break;case"textarea":a=ro(e,a),n=ro(e,n),s=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=$a)}ao(r,n);var i;r=null;for(u in a)if(!n.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(i in l)l.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(yn.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in n){var c=n[u];if(l=a!=null?a[u]:void 0,n.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in c)c.hasOwnProperty(i)&&l[i]!==c[i]&&(r||(r={}),r[i]=c[i])}else r||(s||(s=[]),s.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(yn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&J("scroll",e),s||l===c||(s=[])):(s=s||[]).push(u,c))}r&&(s=s||[]).push("style",r);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Cd=function(e,t,r,n){r!==n&&(t.flags|=4)};function nn(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Cm(e,t,r){var n=t.pendingProps;switch(mi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return Re(t.type)&&Ra(),ye(t),null;case 3:return n=t.stateNode,qr(),Y($e),Y(ke),ji(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(na(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,at!==null&&(Fo(at),at=null))),Do(e,t),ye(t),null;case 5:ki(t);var a=er(Tn.current);if(r=t.type,e!==null&&t.stateNode!=null)Nd(e,t,r,n,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(_(166));return ye(t),null}if(e=er(ht.current),na(t)){n=t.stateNode,r=t.type;var s=t.memoizedProps;switch(n[pt]=t,n[zn]=s,e=(t.mode&1)!==0,r){case"dialog":J("cancel",n),J("close",n);break;case"iframe":case"object":case"embed":J("load",n);break;case"video":case"audio":for(a=0;a<cn.length;a++)J(cn[a],n);break;case"source":J("error",n);break;case"img":case"image":case"link":J("error",n),J("load",n);break;case"details":J("toggle",n);break;case"input":ll(n,s),J("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},J("invalid",n);break;case"textarea":ul(n,s),J("invalid",n)}ao(r,s),a=null;for(var i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="children"?typeof l=="string"?n.textContent!==l&&(s.suppressHydrationWarning!==!0&&ra(n.textContent,l,e),a=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ra(n.textContent,l,e),a=["children",""+l]):yn.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&J("scroll",n)}switch(r){case"input":Kn(n),cl(n,s,!0);break;case"textarea":Kn(n),dl(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=$a)}n=a,t.updateQueue=n,n!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ru(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=i.createElement(r,{is:n.is}):(e=i.createElement(r),r==="select"&&(i=e,n.multiple?i.multiple=!0:n.size&&(i.size=n.size))):e=i.createElementNS(e,r),e[pt]=t,e[zn]=n,Ed(e,t,!1,!1),t.stateNode=e;e:{switch(i=so(r,n),r){case"dialog":J("cancel",e),J("close",e),a=n;break;case"iframe":case"object":case"embed":J("load",e),a=n;break;case"video":case"audio":for(a=0;a<cn.length;a++)J(cn[a],e);a=n;break;case"source":J("error",e),a=n;break;case"img":case"image":case"link":J("error",e),J("load",e),a=n;break;case"details":J("toggle",e),a=n;break;case"input":ll(e,n),a=Zs(e,n),J("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=re({},n,{value:void 0}),J("invalid",e);break;case"textarea":ul(e,n),a=ro(e,n),J("invalid",e);break;default:a=n}ao(r,a),l=a;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?su(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&nu(e,c)):s==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&wn(e,c):typeof c=="number"&&wn(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(yn.hasOwnProperty(s)?c!=null&&s==="onScroll"&&J("scroll",e):c!=null&&Zo(e,s,c,i))}switch(r){case"input":Kn(e),cl(e,n,!1);break;case"textarea":Kn(e),dl(e);break;case"option":n.value!=null&&e.setAttribute("value",""+qt(n.value));break;case"select":e.multiple=!!n.multiple,s=n.value,s!=null?$r(e,!!n.multiple,s,!1):n.defaultValue!=null&&$r(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=$a)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ye(t),null;case 6:if(e&&t.stateNode!=null)Cd(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(_(166));if(r=er(Tn.current),er(ht.current),na(t)){if(n=t.stateNode,r=t.memoizedProps,n[pt]=t,(s=n.nodeValue!==r)&&(e=Fe,e!==null))switch(e.tag){case 3:ra(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ra(n.nodeValue,r,(e.mode&1)!==0)}s&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[pt]=t,t.stateNode=n}return ye(t),null;case 13:if(Y(ee),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Oe!==null&&t.mode&1&&!(t.flags&128))Hu(),Wr(),t.flags|=98560,s=!1;else if(s=na(t),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(_(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(_(317));s[pt]=t}else Wr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ye(t),s=!1}else at!==null&&(Fo(at),at=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||ee.current&1?de===0&&(de=3):Li())),t.updateQueue!==null&&(t.flags|=4),ye(t),null);case 4:return qr(),Do(e,t),e===null&&Nn(t.stateNode.containerInfo),ye(t),null;case 10:return vi(t.type._context),ye(t),null;case 17:return Re(t.type)&&Ra(),ye(t),null;case 19:if(Y(ee),s=t.memoizedState,s===null)return ye(t),null;if(n=(t.flags&128)!==0,i=s.rendering,i===null)if(n)nn(s,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Ua(e),i!==null){for(t.flags|=128,nn(s,!1),n=i.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)s=r,e=n,s.flags&=14680066,i=s.alternate,i===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,s.type=i.type,e=i.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return K(ee,ee.current&1|2),t.child}e=e.sibling}s.tail!==null&&ie()>Qr&&(t.flags|=128,n=!0,nn(s,!1),t.lanes=4194304)}else{if(!n)if(e=Ua(i),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),nn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!i.alternate&&!X)return ye(t),null}else 2*ie()-s.renderingStartTime>Qr&&r!==1073741824&&(t.flags|=128,n=!0,nn(s,!1),t.lanes=4194304);s.isBackwards?(i.sibling=t.child,t.child=i):(r=s.last,r!==null?r.sibling=i:t.child=i,s.last=i)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ie(),t.sibling=null,r=ee.current,K(ee,n?r&1|2:r&1),t):(ye(t),null);case 22:case 23:return Ri(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Me&1073741824&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function zm(e,t){switch(mi(t),t.tag){case 1:return Re(t.type)&&Ra(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qr(),Y($e),Y(ke),ji(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ki(t),null;case 13:if(Y(ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Wr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(ee),null;case 4:return qr(),null;case 10:return vi(t.type._context),null;case 22:case 23:return Ri(),null;case 24:return null;default:return null}}var oa=!1,be=!1,Pm=typeof WeakSet=="function"?WeakSet:Set,P=null;function Pr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){ae(e,t,n)}else r.current=null}function $o(e,t,r){try{r()}catch(n){ae(e,t,n)}}var ec=!1;function Tm(e,t){if(go=Pa,e=$u(),pi(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var a=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var i=0,l=-1,c=-1,u=0,m=0,f=e,g=null;t:for(;;){for(var v;f!==r||a!==0&&f.nodeType!==3||(l=i+a),f!==s||n!==0&&f.nodeType!==3||(c=i+n),f.nodeType===3&&(i+=f.nodeValue.length),(v=f.firstChild)!==null;)g=f,f=v;for(;;){if(f===e)break t;if(g===r&&++u===a&&(l=i),g===s&&++m===n&&(c=i),(v=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=v}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(xo={focusedElem:e,selectionRange:r},Pa=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,j=y.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:rt(t.type,x),j);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(w){ae(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return y=ec,ec=!1,y}function gn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var s=a.destroy;a.destroy=void 0,s!==void 0&&$o(t,r,s)}a=a.next}while(a!==n)}}function os(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Ro(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function zd(e){var t=e.alternate;t!==null&&(e.alternate=null,zd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[zn],delete t[wo],delete t[fm],delete t[mm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pd(e){return e.tag===5||e.tag===3||e.tag===4}function tc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lo(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=$a));else if(n!==4&&(e=e.child,e!==null))for(Lo(e,t,r),e=e.sibling;e!==null;)Lo(e,t,r),e=e.sibling}function Io(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Io(e,t,r),e=e.sibling;e!==null;)Io(e,t,r),e=e.sibling}var me=null,nt=!1;function Pt(e,t,r){for(r=r.child;r!==null;)Td(e,t,r),r=r.sibling}function Td(e,t,r){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Xa,r)}catch{}switch(r.tag){case 5:be||Pr(r,t);case 6:var n=me,a=nt;me=null,Pt(e,t,r),me=n,nt=a,me!==null&&(nt?(e=me,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):me.removeChild(r.stateNode));break;case 18:me!==null&&(nt?(e=me,r=r.stateNode,e.nodeType===8?$s(e.parentNode,r):e.nodeType===1&&$s(e,r),Sn(e)):$s(me,r.stateNode));break;case 4:n=me,a=nt,me=r.stateNode.containerInfo,nt=!0,Pt(e,t,r),me=n,nt=a;break;case 0:case 11:case 14:case 15:if(!be&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var s=a,i=s.destroy;s=s.tag,i!==void 0&&(s&2||s&4)&&$o(r,t,i),a=a.next}while(a!==n)}Pt(e,t,r);break;case 1:if(!be&&(Pr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){ae(r,t,l)}Pt(e,t,r);break;case 21:Pt(e,t,r);break;case 22:r.mode&1?(be=(n=be)||r.memoizedState!==null,Pt(e,t,r),be=n):Pt(e,t,r);break;default:Pt(e,t,r)}}function rc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Pm),t.forEach(function(n){var a=Fm.bind(null,e,n);r.has(n)||(r.add(n),n.then(a,a))})}}function et(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var a=r[n];try{var s=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:me=l.stateNode,nt=!1;break e;case 3:me=l.stateNode.containerInfo,nt=!0;break e;case 4:me=l.stateNode.containerInfo,nt=!0;break e}l=l.return}if(me===null)throw Error(_(160));Td(s,i,a),me=null,nt=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){ae(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Dd(t,e),t=t.sibling}function Dd(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(et(t,e),ct(e),n&4){try{gn(3,e,e.return),os(3,e)}catch(x){ae(e,e.return,x)}try{gn(5,e,e.return)}catch(x){ae(e,e.return,x)}}break;case 1:et(t,e),ct(e),n&512&&r!==null&&Pr(r,r.return);break;case 5:if(et(t,e),ct(e),n&512&&r!==null&&Pr(r,r.return),e.flags&32){var a=e.stateNode;try{wn(a,"")}catch(x){ae(e,e.return,x)}}if(n&4&&(a=e.stateNode,a!=null)){var s=e.memoizedProps,i=r!==null?r.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&eu(a,s),so(l,i);var u=so(l,s);for(i=0;i<c.length;i+=2){var m=c[i],f=c[i+1];m==="style"?su(a,f):m==="dangerouslySetInnerHTML"?nu(a,f):m==="children"?wn(a,f):Zo(a,m,f,u)}switch(l){case"input":eo(a,s);break;case"textarea":tu(a,s);break;case"select":var g=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?$r(a,!!s.multiple,v,!1):g!==!!s.multiple&&(s.defaultValue!=null?$r(a,!!s.multiple,s.defaultValue,!0):$r(a,!!s.multiple,s.multiple?[]:"",!1))}a[zn]=s}catch(x){ae(e,e.return,x)}}break;case 6:if(et(t,e),ct(e),n&4){if(e.stateNode===null)throw Error(_(162));a=e.stateNode,s=e.memoizedProps;try{a.nodeValue=s}catch(x){ae(e,e.return,x)}}break;case 3:if(et(t,e),ct(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Sn(t.containerInfo)}catch(x){ae(e,e.return,x)}break;case 4:et(t,e),ct(e);break;case 13:et(t,e),ct(e),a=e.child,a.flags&8192&&(s=a.memoizedState!==null,a.stateNode.isHidden=s,!s||a.alternate!==null&&a.alternate.memoizedState!==null||(Di=ie())),n&4&&rc(e);break;case 22:if(m=r!==null&&r.memoizedState!==null,e.mode&1?(be=(u=be)||m,et(t,e),be=u):et(t,e),ct(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(P=e,m=e.child;m!==null;){for(f=P=m;P!==null;){switch(g=P,v=g.child,g.tag){case 0:case 11:case 14:case 15:gn(4,g,g.return);break;case 1:Pr(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){n=g,r=g.return;try{t=n,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){ae(n,r,x)}}break;case 5:Pr(g,g.return);break;case 22:if(g.memoizedState!==null){ac(f);continue}}v!==null?(v.return=g,P=v):ac(f)}m=m.sibling}e:for(m=null,f=e;;){if(f.tag===5){if(m===null){m=f;try{a=f.stateNode,u?(s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,c=f.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=au("display",i))}catch(x){ae(e,e.return,x)}}}else if(f.tag===6){if(m===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){ae(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;m===f&&(m=null),f=f.return}m===f&&(m=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:et(t,e),ct(e),n&4&&rc(e);break;case 21:break;default:et(t,e),ct(e)}}function ct(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Pd(r)){var n=r;break e}r=r.return}throw Error(_(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(wn(a,""),n.flags&=-33);var s=tc(e);Io(e,s,a);break;case 3:case 4:var i=n.stateNode.containerInfo,l=tc(e);Lo(e,l,i);break;default:throw Error(_(161))}}catch(c){ae(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Dm(e,t,r){P=e,$d(e)}function $d(e,t,r){for(var n=(e.mode&1)!==0;P!==null;){var a=P,s=a.child;if(a.tag===22&&n){var i=a.memoizedState!==null||oa;if(!i){var l=a.alternate,c=l!==null&&l.memoizedState!==null||be;l=oa;var u=be;if(oa=i,(be=c)&&!u)for(P=a;P!==null;)i=P,c=i.child,i.tag===22&&i.memoizedState!==null?sc(a):c!==null?(c.return=i,P=c):sc(a);for(;s!==null;)P=s,$d(s),s=s.sibling;P=a,oa=l,be=u}nc(e)}else a.subtreeFlags&8772&&s!==null?(s.return=a,P=s):nc(e)}}function nc(e){for(;P!==null;){var t=P;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:be||os(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!be)if(r===null)n.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:rt(t.type,r.memoizedProps);n.componentDidUpdate(a,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Ul(t,s,n);break;case 3:var i=t.updateQueue;if(i!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Ul(t,i,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var f=m.dehydrated;f!==null&&Sn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}be||t.flags&512&&Ro(t)}catch(g){ae(t,t.return,g)}}if(t===e){P=null;break}if(r=t.sibling,r!==null){r.return=t.return,P=r;break}P=t.return}}function ac(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var r=t.sibling;if(r!==null){r.return=t.return,P=r;break}P=t.return}}function sc(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{os(4,t)}catch(c){ae(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var a=t.return;try{n.componentDidMount()}catch(c){ae(t,a,c)}}var s=t.return;try{Ro(t)}catch(c){ae(t,s,c)}break;case 5:var i=t.return;try{Ro(t)}catch(c){ae(t,i,c)}}}catch(c){ae(t,t.return,c)}if(t===e){P=null;break}var l=t.sibling;if(l!==null){l.return=t.return,P=l;break}P=t.return}}var $m=Math.ceil,Va=Ct.ReactCurrentDispatcher,Pi=Ct.ReactCurrentOwner,Ge=Ct.ReactCurrentBatchConfig,B=0,fe=null,ce=null,he=0,Me=0,Tr=Kt(0),de=0,Ln=null,cr=0,is=0,Ti=0,xn=null,Te=null,Di=0,Qr=1/0,xt=null,qa=!1,Ao=null,Bt=null,ia=!1,It=null,Ha=0,vn=0,Mo=null,ba=-1,ka=0;function Ne(){return B&6?ie():ba!==-1?ba:ba=ie()}function Wt(e){return e.mode&1?B&2&&he!==0?he&-he:gm.transition!==null?(ka===0&&(ka=xu()),ka):(e=q,e!==0||(e=window.event,e=e===void 0?16:Su(e.type)),e):1}function it(e,t,r,n){if(50<vn)throw vn=0,Mo=null,Error(_(185));On(e,r,n),(!(B&2)||e!==fe)&&(e===fe&&(!(B&2)&&(is|=r),de===4&&Rt(e,he)),Le(e,n),r===1&&B===0&&!(t.mode&1)&&(Qr=ie()+500,ns&&Gt()))}function Le(e,t){var r=e.callbackNode;gf(e,t);var n=za(e,e===fe?he:0);if(n===0)r!==null&&ml(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&ml(r),t===1)e.tag===0?hm(oc.bind(null,e)):Wu(oc.bind(null,e)),dm(function(){!(B&6)&&Gt()}),r=null;else{switch(vu(n)){case 1:r=ai;break;case 4:r=hu;break;case 16:r=Ca;break;case 536870912:r=gu;break;default:r=Ca}r=Ud(r,Rd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Rd(e,t){if(ba=-1,ka=0,B&6)throw Error(_(327));var r=e.callbackNode;if(Mr()&&e.callbackNode!==r)return null;var n=za(e,e===fe?he:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Qa(e,n);else{t=n;var a=B;B|=2;var s=Id();(fe!==e||he!==t)&&(xt=null,Qr=ie()+500,rr(e,t));do try{Im();break}catch(l){Ld(e,l)}while(!0);xi(),Va.current=s,B=a,ce!==null?t=0:(fe=null,he=0,t=de)}if(t!==0){if(t===2&&(a=uo(e),a!==0&&(n=a,t=Oo(e,a))),t===1)throw r=Ln,rr(e,0),Rt(e,n),Le(e,ie()),r;if(t===6)Rt(e,n);else{if(a=e.current.alternate,!(n&30)&&!Rm(a)&&(t=Qa(e,n),t===2&&(s=uo(e),s!==0&&(n=s,t=Oo(e,s))),t===1))throw r=Ln,rr(e,0),Rt(e,n),Le(e,ie()),r;switch(e.finishedWork=a,e.finishedLanes=n,t){case 0:case 1:throw Error(_(345));case 2:Yt(e,Te,xt);break;case 3:if(Rt(e,n),(n&130023424)===n&&(t=Di+500-ie(),10<t)){if(za(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){Ne(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=yo(Yt.bind(null,e,Te,xt),t);break}Yt(e,Te,xt);break;case 4:if(Rt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,a=-1;0<n;){var i=31-ot(n);s=1<<i,i=t[i],i>a&&(a=i),n&=~s}if(n=a,n=ie()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*$m(n/1960))-n,10<n){e.timeoutHandle=yo(Yt.bind(null,e,Te,xt),n);break}Yt(e,Te,xt);break;case 5:Yt(e,Te,xt);break;default:throw Error(_(329))}}}return Le(e,ie()),e.callbackNode===r?Rd.bind(null,e):null}function Oo(e,t){var r=xn;return e.current.memoizedState.isDehydrated&&(rr(e,t).flags|=256),e=Qa(e,t),e!==2&&(t=Te,Te=r,t!==null&&Fo(t)),e}function Fo(e){Te===null?Te=e:Te.push.apply(Te,e)}function Rm(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var a=r[n],s=a.getSnapshot;a=a.value;try{if(!lt(s(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rt(e,t){for(t&=~Ti,t&=~is,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-ot(t),n=1<<r;e[r]=-1,t&=~n}}function oc(e){if(B&6)throw Error(_(327));Mr();var t=za(e,0);if(!(t&1))return Le(e,ie()),null;var r=Qa(e,t);if(e.tag!==0&&r===2){var n=uo(e);n!==0&&(t=n,r=Oo(e,n))}if(r===1)throw r=Ln,rr(e,0),Rt(e,t),Le(e,ie()),r;if(r===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yt(e,Te,xt),Le(e,ie()),null}function $i(e,t){var r=B;B|=1;try{return e(t)}finally{B=r,B===0&&(Qr=ie()+500,ns&&Gt())}}function ur(e){It!==null&&It.tag===0&&!(B&6)&&Mr();var t=B;B|=1;var r=Ge.transition,n=q;try{if(Ge.transition=null,q=1,e)return e()}finally{q=n,Ge.transition=r,B=t,!(B&6)&&Gt()}}function Ri(){Me=Tr.current,Y(Tr)}function rr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,um(r)),ce!==null)for(r=ce.return;r!==null;){var n=r;switch(mi(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Ra();break;case 3:qr(),Y($e),Y(ke),ji();break;case 5:ki(n);break;case 4:qr();break;case 13:Y(ee);break;case 19:Y(ee);break;case 10:vi(n.type._context);break;case 22:case 23:Ri()}r=r.return}if(fe=e,ce=e=Vt(e.current,null),he=Me=t,de=0,Ln=null,Ti=is=cr=0,Te=xn=null,Zt!==null){for(t=0;t<Zt.length;t++)if(r=Zt[t],n=r.interleaved,n!==null){r.interleaved=null;var a=n.next,s=r.pending;if(s!==null){var i=s.next;s.next=a,n.next=i}r.pending=n}Zt=null}return e}function Ld(e,t){do{var r=ce;try{if(xi(),va.current=Wa,Ba){for(var n=te.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}Ba=!1}if(lr=0,pe=ue=te=null,hn=!1,Dn=0,Pi.current=null,r===null||r.return===null){de=1,Ln=t,ce=null;break}e:{var s=e,i=r.return,l=r,c=t;if(t=he,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,m=l,f=m.tag;if(!(m.mode&1)&&(f===0||f===11||f===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=Ql(i);if(v!==null){v.flags&=-257,Kl(v,i,l,s,t),v.mode&1&&Hl(s,u,t),t=v,c=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(c),t.updateQueue=x}else y.add(c);break e}else{if(!(t&1)){Hl(s,u,t),Li();break e}c=Error(_(426))}}else if(X&&l.mode&1){var j=Ql(i);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Kl(j,i,l,s,t),hi(Hr(c,l));break e}}s=c=Hr(c,l),de!==4&&(de=2),xn===null?xn=[s]:xn.push(s),s=i;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=vd(s,c,t);Fl(s,p);break e;case 1:l=c;var d=s.type,h=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Bt===null||!Bt.has(h)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=yd(s,l,t);Fl(s,w);break e}}s=s.return}while(s!==null)}Md(r)}catch(S){t=S,ce===r&&r!==null&&(ce=r=r.return);continue}break}while(!0)}function Id(){var e=Va.current;return Va.current=Wa,e===null?Wa:e}function Li(){(de===0||de===3||de===2)&&(de=4),fe===null||!(cr&268435455)&&!(is&268435455)||Rt(fe,he)}function Qa(e,t){var r=B;B|=2;var n=Id();(fe!==e||he!==t)&&(xt=null,rr(e,t));do try{Lm();break}catch(a){Ld(e,a)}while(!0);if(xi(),B=r,Va.current=n,ce!==null)throw Error(_(261));return fe=null,he=0,de}function Lm(){for(;ce!==null;)Ad(ce)}function Im(){for(;ce!==null&&!of();)Ad(ce)}function Ad(e){var t=Fd(e.alternate,e,Me);e.memoizedProps=e.pendingProps,t===null?Md(e):ce=t,Pi.current=null}function Md(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=zm(r,t),r!==null){r.flags&=32767,ce=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,ce=null;return}}else if(r=Cm(r,t,Me),r!==null){ce=r;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);de===0&&(de=5)}function Yt(e,t,r){var n=q,a=Ge.transition;try{Ge.transition=null,q=1,Am(e,t,r,n)}finally{Ge.transition=a,q=n}return null}function Am(e,t,r,n){do Mr();while(It!==null);if(B&6)throw Error(_(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(xf(e,s),e===fe&&(ce=fe=null,he=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ia||(ia=!0,Ud(Ca,function(){return Mr(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=Ge.transition,Ge.transition=null;var i=q;q=1;var l=B;B|=4,Pi.current=null,Tm(e,r),Dd(r,e),nm(xo),Pa=!!go,xo=go=null,e.current=r,Dm(r),lf(),B=l,q=i,Ge.transition=s}else e.current=r;if(ia&&(ia=!1,It=e,Ha=a),s=e.pendingLanes,s===0&&(Bt=null),df(r.stateNode),Le(e,ie()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],n(a.value,{componentStack:a.stack,digest:a.digest});if(qa)throw qa=!1,e=Ao,Ao=null,e;return Ha&1&&e.tag!==0&&Mr(),s=e.pendingLanes,s&1?e===Mo?vn++:(vn=0,Mo=e):vn=0,Gt(),null}function Mr(){if(It!==null){var e=vu(Ha),t=Ge.transition,r=q;try{if(Ge.transition=null,q=16>e?16:e,It===null)var n=!1;else{if(e=It,It=null,Ha=0,B&6)throw Error(_(331));var a=B;for(B|=4,P=e.current;P!==null;){var s=P,i=s.child;if(P.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(P=u;P!==null;){var m=P;switch(m.tag){case 0:case 11:case 15:gn(8,m,s)}var f=m.child;if(f!==null)f.return=m,P=f;else for(;P!==null;){m=P;var g=m.sibling,v=m.return;if(zd(m),m===u){P=null;break}if(g!==null){g.return=v,P=g;break}P=v}}}var y=s.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var j=x.sibling;x.sibling=null,x=j}while(x!==null)}}P=s}}if(s.subtreeFlags&2064&&i!==null)i.return=s,P=i;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:gn(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,P=p;break e}P=s.return}}var d=e.current;for(P=d;P!==null;){i=P;var h=i.child;if(i.subtreeFlags&2064&&h!==null)h.return=i,P=h;else e:for(i=d;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:os(9,l)}}catch(S){ae(l,l.return,S)}if(l===i){P=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,P=w;break e}P=l.return}}if(B=a,Gt(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Xa,e)}catch{}n=!0}return n}finally{q=r,Ge.transition=t}}return!1}function ic(e,t,r){t=Hr(r,t),t=vd(e,t,1),e=Ut(e,t,1),t=Ne(),e!==null&&(On(e,1,t),Le(e,t))}function ae(e,t,r){if(e.tag===3)ic(e,e,r);else for(;t!==null;){if(t.tag===3){ic(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Bt===null||!Bt.has(n))){e=Hr(r,e),e=yd(t,e,1),t=Ut(t,e,1),e=Ne(),t!==null&&(On(t,1,e),Le(t,e));break}}t=t.return}}function Mm(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&r,fe===e&&(he&r)===r&&(de===4||de===3&&(he&130023424)===he&&500>ie()-Di?rr(e,0):Ti|=r),Le(e,t)}function Od(e,t){t===0&&(e.mode&1?(t=Yn,Yn<<=1,!(Yn&130023424)&&(Yn=4194304)):t=1);var r=Ne();e=Et(e,t),e!==null&&(On(e,t,r),Le(e,r))}function Om(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Od(e,r)}function Fm(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(_(314))}n!==null&&n.delete(t),Od(e,r)}var Fd;Fd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||$e.current)De=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return De=!1,Nm(e,t,r);De=!!(e.flags&131072)}else De=!1,X&&t.flags&1048576&&Vu(t,Aa,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;wa(e,t),e=t.pendingProps;var a=Br(t,ke.current);Ar(t,r),a=_i(null,t,n,e,a,r);var s=Ei();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Re(n)?(s=!0,La(t)):s=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,wi(t),a.updater=ss,t.stateNode=a,a._reactInternals=t,Eo(t,n,e,r),t=zo(null,t,n,!0,s,r)):(t.tag=0,X&&s&&fi(t),Ee(null,t,a,r),t=t.child),t;case 16:n=t.elementType;e:{switch(wa(e,t),e=t.pendingProps,a=n._init,n=a(n._payload),t.type=n,a=t.tag=Bm(n),e=rt(n,e),a){case 0:t=Co(null,t,n,e,r);break e;case 1:t=Yl(null,t,n,e,r);break e;case 11:t=Gl(null,t,n,e,r);break e;case 14:t=Jl(null,t,n,rt(n.type,e),r);break e}throw Error(_(306,n,""))}return t;case 0:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:rt(n,a),Co(e,t,n,a,r);case 1:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:rt(n,a),Yl(e,t,n,a,r);case 3:e:{if(jd(t),e===null)throw Error(_(387));n=t.pendingProps,s=t.memoizedState,a=s.element,Ju(e,t),Fa(t,n,null,r);var i=t.memoizedState;if(n=i.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){a=Hr(Error(_(423)),t),t=Xl(e,t,n,r,a);break e}else if(n!==a){a=Hr(Error(_(424)),t),t=Xl(e,t,n,r,a);break e}else for(Oe=Ft(t.stateNode.containerInfo.firstChild),Fe=t,X=!0,at=null,r=Ku(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Wr(),n===a){t=Nt(e,t,r);break e}Ee(e,t,n,r)}t=t.child}return t;case 5:return Yu(t),e===null&&jo(t),n=t.type,a=t.pendingProps,s=e!==null?e.memoizedProps:null,i=a.children,vo(n,a)?i=null:s!==null&&vo(n,s)&&(t.flags|=32),kd(e,t),Ee(e,t,i,r),t.child;case 6:return e===null&&jo(t),null;case 13:return Sd(e,t,r);case 4:return bi(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Vr(t,null,n,r):Ee(e,t,n,r),t.child;case 11:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:rt(n,a),Gl(e,t,n,a,r);case 7:return Ee(e,t,t.pendingProps,r),t.child;case 8:return Ee(e,t,t.pendingProps.children,r),t.child;case 12:return Ee(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,a=t.pendingProps,s=t.memoizedProps,i=a.value,K(Ma,n._currentValue),n._currentValue=i,s!==null)if(lt(s.value,i)){if(s.children===a.children&&!$e.current){t=Nt(e,t,r);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){i=s.child;for(var c=l.firstContext;c!==null;){if(c.context===n){if(s.tag===1){c=jt(-1,r&-r),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?c.next=c:(c.next=m.next,m.next=c),u.pending=c}}s.lanes|=r,c=s.alternate,c!==null&&(c.lanes|=r),So(s.return,r,t),l.lanes|=r;break}c=c.next}}else if(s.tag===10)i=s.type===t.type?null:s.child;else if(s.tag===18){if(i=s.return,i===null)throw Error(_(341));i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),So(i,r,t),i=s.sibling}else i=s.child;if(i!==null)i.return=s;else for(i=s;i!==null;){if(i===t){i=null;break}if(s=i.sibling,s!==null){s.return=i.return,i=s;break}i=i.return}s=i}Ee(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,n=t.pendingProps.children,Ar(t,r),a=Je(a),n=n(a),t.flags|=1,Ee(e,t,n,r),t.child;case 14:return n=t.type,a=rt(n,t.pendingProps),a=rt(n.type,a),Jl(e,t,n,a,r);case 15:return wd(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:rt(n,a),wa(e,t),t.tag=1,Re(n)?(e=!0,La(t)):e=!1,Ar(t,r),xd(t,n,a),Eo(t,n,a,r),zo(null,t,n,!0,e,r);case 19:return _d(e,t,r);case 22:return bd(e,t,r)}throw Error(_(156,t.tag))};function Ud(e,t){return mu(e,t)}function Um(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(e,t,r,n){return new Um(e,t,r,n)}function Ii(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bm(e){if(typeof e=="function")return Ii(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ti)return 11;if(e===ri)return 14}return 2}function Vt(e,t){var r=e.alternate;return r===null?(r=Qe(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ja(e,t,r,n,a,s){var i=2;if(n=e,typeof e=="function")Ii(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case br:return nr(r.children,a,s,t);case ei:i=8,a|=8;break;case Gs:return e=Qe(12,r,t,a|2),e.elementType=Gs,e.lanes=s,e;case Js:return e=Qe(13,r,t,a),e.elementType=Js,e.lanes=s,e;case Ys:return e=Qe(19,r,t,a),e.elementType=Ys,e.lanes=s,e;case Yc:return ls(r,a,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Gc:i=10;break e;case Jc:i=9;break e;case ti:i=11;break e;case ri:i=14;break e;case Tt:i=16,n=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Qe(i,r,t,a),t.elementType=e,t.type=n,t.lanes=s,t}function nr(e,t,r,n){return e=Qe(7,e,n,t),e.lanes=r,e}function ls(e,t,r,n){return e=Qe(22,e,n,t),e.elementType=Yc,e.lanes=r,e.stateNode={isHidden:!1},e}function Us(e,t,r){return e=Qe(6,e,null,t),e.lanes=r,e}function Bs(e,t,r){return t=Qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Wm(e,t,r,n,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ks(0),this.expirationTimes=ks(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ks(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ai(e,t,r,n,a,s,i,l,c){return e=new Wm(e,t,r,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Qe(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},wi(s),e}function Vm(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Bd(e){if(!e)return Ht;e=e._reactInternals;e:{if(fr(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Re(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var r=e.type;if(Re(r))return Bu(e,r,t)}return t}function Wd(e,t,r,n,a,s,i,l,c){return e=Ai(r,n,!0,e,a,s,i,l,c),e.context=Bd(null),r=e.current,n=Ne(),a=Wt(r),s=jt(n,a),s.callback=t??null,Ut(r,s,a),e.current.lanes=a,On(e,a,n),Le(e,n),e}function cs(e,t,r,n){var a=t.current,s=Ne(),i=Wt(a);return r=Bd(r),t.context===null?t.context=r:t.pendingContext=r,t=jt(s,i),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Ut(a,t,i),e!==null&&(it(e,a,i,s),xa(e,a,i)),i}function Ka(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Mi(e,t){lc(e,t),(e=e.alternate)&&lc(e,t)}function qm(){return null}var Vd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Oi(e){this._internalRoot=e}us.prototype.render=Oi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));cs(e,t,null,null)};us.prototype.unmount=Oi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ur(function(){cs(null,e,null,null)}),t[_t]=null}};function us(e){this._internalRoot=e}us.prototype.unstable_scheduleHydration=function(e){if(e){var t=bu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<$t.length&&t!==0&&t<$t[r].priority;r++);$t.splice(r,0,e),r===0&&ju(e)}};function Fi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ds(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cc(){}function Hm(e,t,r,n,a){if(a){if(typeof n=="function"){var s=n;n=function(){var u=Ka(i);s.call(u)}}var i=Wd(t,n,e,0,null,!1,!1,"",cc);return e._reactRootContainer=i,e[_t]=i.current,Nn(e.nodeType===8?e.parentNode:e),ur(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var l=n;n=function(){var u=Ka(c);l.call(u)}}var c=Ai(e,0,!1,null,null,!1,!1,"",cc);return e._reactRootContainer=c,e[_t]=c.current,Nn(e.nodeType===8?e.parentNode:e),ur(function(){cs(t,c,r,n)}),c}function ps(e,t,r,n,a){var s=r._reactRootContainer;if(s){var i=s;if(typeof a=="function"){var l=a;a=function(){var c=Ka(i);l.call(c)}}cs(t,i,e,a)}else i=Hm(r,t,e,a,n);return Ka(i)}yu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=ln(t.pendingLanes);r!==0&&(si(t,r|1),Le(t,ie()),!(B&6)&&(Qr=ie()+500,Gt()))}break;case 13:ur(function(){var n=Et(e,1);if(n!==null){var a=Ne();it(n,e,1,a)}}),Mi(e,1)}};oi=function(e){if(e.tag===13){var t=Et(e,134217728);if(t!==null){var r=Ne();it(t,e,134217728,r)}Mi(e,134217728)}};wu=function(e){if(e.tag===13){var t=Wt(e),r=Et(e,t);if(r!==null){var n=Ne();it(r,e,t,n)}Mi(e,t)}};bu=function(){return q};ku=function(e,t){var r=q;try{return q=e,t()}finally{q=r}};io=function(e,t,r){switch(t){case"input":if(eo(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var a=rs(n);if(!a)throw Error(_(90));Zc(n),eo(n,a)}}}break;case"textarea":tu(e,r);break;case"select":t=r.value,t!=null&&$r(e,!!r.multiple,t,!1)}};lu=$i;cu=ur;var Qm={usingClientEntryPoint:!1,Events:[Un,_r,rs,ou,iu,$i]},an={findFiberByHostInstance:Xt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Km={bundleType:an.bundleType,version:an.version,rendererPackageName:an.rendererPackageName,rendererConfig:an.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ct.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pu(e),e===null?null:e.stateNode},findFiberByHostInstance:an.findFiberByHostInstance||qm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var la=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!la.isDisabled&&la.supportsFiber)try{Xa=la.inject(Km),mt=la}catch{}}Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qm;Be.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fi(t))throw Error(_(200));return Vm(e,t,null,r)};Be.createRoot=function(e,t){if(!Fi(e))throw Error(_(299));var r=!1,n="",a=Vd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Ai(e,1,!1,null,null,r,!1,n,a),e[_t]=t.current,Nn(e.nodeType===8?e.parentNode:e),new Oi(t)};Be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=pu(t),e=e===null?null:e.stateNode,e};Be.flushSync=function(e){return ur(e)};Be.hydrate=function(e,t,r){if(!ds(t))throw Error(_(200));return ps(null,e,t,!0,r)};Be.hydrateRoot=function(e,t,r){if(!Fi(e))throw Error(_(405));var n=r!=null&&r.hydratedSources||null,a=!1,s="",i=Vd;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),t=Wd(t,null,e,1,r??null,a,!1,s,i),e[_t]=t.current,Nn(e),n)for(e=0;e<n.length;e++)r=n[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new us(t)};Be.render=function(e,t,r){if(!ds(t))throw Error(_(200));return ps(null,e,t,!1,r)};Be.unmountComponentAtNode=function(e){if(!ds(e))throw Error(_(40));return e._reactRootContainer?(ur(function(){ps(null,null,e,!1,function(){e._reactRootContainer=null,e[_t]=null})}),!0):!1};Be.unstable_batchedUpdates=$i;Be.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!ds(r))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return ps(e,t,r,!1,n)};Be.version="18.3.1-next-f1338f8080-20240426";function qd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qd)}catch(e){console.error(e)}}qd(),qc.exports=Be;var Gm=qc.exports,uc=Gm;Qs.createRoot=uc.createRoot,Qs.hydrateRoot=uc.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function In(){return In=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},In.apply(null,arguments)}var tr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(tr||(tr={}));const dc="popstate";function Jm(e){e===void 0&&(e={});function t(n,a){let{pathname:s,search:i,hash:l}=n.location;return Uo("",{pathname:s,search:i,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:Hd(a)}return Zm(t,r,null,e)}function gt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ym(e,t){{typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Xm(){return Math.random().toString(36).substr(2,8)}function pc(e,t){return{usr:e.state,key:e.key,idx:t}}function Uo(e,t,r,n){return r===void 0&&(r=null),In({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?fs(t):t,{state:r,key:t&&t.key||n||Xm()})}function Hd(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function fs(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Zm(e,t,r,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:s=!1}=n,i=a.history,l=tr.Pop,c=null,u=m();u==null&&(u=0,i.replaceState(In({},i.state,{idx:u}),""));function m(){return(i.state||{idx:null}).idx}function f(){l=tr.Pop;let j=m(),p=j==null?null:j-u;u=j,c&&c({action:l,location:x.location,delta:p})}function g(j,p){l=tr.Push;let d=Uo(x.location,j,p);u=m()+1;let h=pc(d,u),w=x.createHref(d);try{i.pushState(h,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;a.location.assign(w)}s&&c&&c({action:l,location:x.location,delta:1})}function v(j,p){l=tr.Replace;let d=Uo(x.location,j,p);u=m();let h=pc(d,u),w=x.createHref(d);i.replaceState(h,"",w),s&&c&&c({action:l,location:x.location,delta:0})}function y(j){let p=a.location.origin!=="null"?a.location.origin:a.location.href,d=typeof j=="string"?j:Hd(j);return d=d.replace(/ $/,"%20"),gt(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let x={get action(){return l},get location(){return e(a,i)},listen(j){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(dc,f),c=j,()=>{a.removeEventListener(dc,f),c=null}},createHref(j){return t(a,j)},createURL:y,encodeLocation(j){let p=y(j);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:v,go(j){return i.go(j)}};return x}var fc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(fc||(fc={}));function eh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const th=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rh=e=>th.test(e);function nh(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?fs(e):e,s;if(r)if(rh(r))s=r;else{if(r.includes("//")){let i=r;r=Qd(r),Ym(!1,"Pathnames cannot have embedded double slashes - normalizing "+(i+" -> "+r))}r.startsWith("/")?s=mc(r.substring(1),"/"):s=mc(r,t)}else s=t;return{pathname:s,search:lh(n),hash:ch(a)}}function mc(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function Ws(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ah(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function sh(e,t){let r=ah(e);return t?r.map((n,a)=>a===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function oh(e,t,r,n){n===void 0&&(n=!1);let a;typeof e=="string"?a=fs(e):(a=In({},e),gt(!a.pathname||!a.pathname.includes("?"),Ws("?","pathname","search",a)),gt(!a.pathname||!a.pathname.includes("#"),Ws("#","pathname","hash",a)),gt(!a.search||!a.search.includes("#"),Ws("#","search","hash",a)));let s=e===""||a.pathname==="",i=s?"/":a.pathname,l;if(i==null)l=r;else{let f=t.length-1;if(!n&&i.startsWith("..")){let g=i.split("/");for(;g[0]==="..";)g.shift(),f-=1;a.pathname=g.join("/")}l=f>=0?t[f]:"/"}let c=nh(a,l),u=i&&i!=="/"&&i.endsWith("/"),m=(s||i===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||m)&&(c.pathname+="/"),c}const Qd=e=>e.replace(/\/\/+/g,"/"),ih=e=>Qd(e.join("/")),lh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ch=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Kd=["post","put","patch","delete"];new Set(Kd);const uh=["get",...Kd];new Set(uh);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ga(){return Ga=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ga.apply(null,arguments)}const Gd=b.createContext(null),Ui=b.createContext(null),Bi=b.createContext(null),Wi=b.createContext({outlet:null,matches:[],isDataRoute:!1});function Vi(){return b.useContext(Bi)!=null}function Jd(){return Vi()||gt(!1),b.useContext(Bi).location}function Yd(e){b.useContext(Ui).static||b.useLayoutEffect(e)}function dh(){let{isDataRoute:e}=b.useContext(Wi);return e?gh():ph()}function ph(){Vi()||gt(!1);let e=b.useContext(Gd),{basename:t,future:r,navigator:n}=b.useContext(Ui),{matches:a}=b.useContext(Wi),{pathname:s}=Jd(),i=JSON.stringify(sh(a,r.v7_relativeSplatPath)),l=b.useRef(!1);return Yd(()=>{l.current=!0}),b.useCallback(function(u,m){if(m===void 0&&(m={}),!l.current)return;if(typeof u=="number"){n.go(u);return}let f=oh(u,JSON.parse(i),s,m.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:ih([t,f.pathname])),(m.replace?n.replace:n.push)(f,m.state,m)},[t,n,i,s,e])}var Xd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Xd||{}),Zd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Zd||{});function fh(e){let t=b.useContext(Gd);return t||gt(!1),t}function mh(e){let t=b.useContext(Wi);return t||gt(!1),t}function hh(e){let t=mh(),r=t.matches[t.matches.length-1];return r.route.id||gt(!1),r.route.id}function gh(){let{router:e}=fh(Xd.UseNavigateStable),t=hh(Zd.UseNavigateStable),r=b.useRef(!1);return Yd(()=>{r.current=!0}),b.useCallback(function(a,s){s===void 0&&(s={}),r.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Ga({fromRouteId:t},s)))},[e,t])}function xh(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function vh(e){let{basename:t="/",children:r=null,location:n,navigationType:a=tr.Pop,navigator:s,static:i=!1,future:l}=e;Vi()&&gt(!1);let c=t.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:c,navigator:s,static:i,future:Ga({v7_relativeSplatPath:!1},l)}),[c,l,s,i]);typeof n=="string"&&(n=fs(n));let{pathname:m="/",search:f="",hash:g="",state:v=null,key:y="default"}=n,x=b.useMemo(()=>{let j=eh(m,c);return j==null?null:{location:{pathname:j,search:f,hash:g,state:v,key:y},navigationType:a}},[c,m,f,g,v,y,a]);return x==null?null:b.createElement(Ui.Provider,{value:u},b.createElement(Bi.Provider,{children:r,value:x}))}new Promise(()=>{});/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const yh="6";try{window.__reactRouterVersion=yh}catch{}const wh="startTransition",hc=Ap[wh];function bh(e){let{basename:t,children:r,future:n,window:a}=e,s=b.useRef();s.current==null&&(s.current=Jm({window:a,v5Compat:!0}));let i=s.current,[l,c]=b.useState({action:i.action,location:i.location}),{v7_startTransition:u}=n||{},m=b.useCallback(f=>{u&&hc?hc(()=>c(f)):c(f)},[c,u]);return b.useLayoutEffect(()=>i.listen(m),[i,m]),b.useEffect(()=>xh(n),[n]),b.createElement(vh,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:i,future:n})}var gc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(gc||(gc={}));var xc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(xc||(xc={}));const V="/api",kh=".pdf,.png,.jpg,.jpeg,.tif,.tiff,.bmp,.webp,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv",Q={ADDED:{bg:"var(--diff-added-bg)",border:"var(--diff-added-border)",text:"var(--diff-added-text)",chip:"var(--diff-added-chip)"},DELETED:{bg:"var(--diff-deleted-bg)",border:"var(--diff-deleted-border)",text:"var(--diff-deleted-text)",chip:"var(--diff-deleted-chip)"},MODIFIED:{bg:"var(--diff-modified-bg)",border:"var(--diff-modified-border)",text:"var(--diff-modified-text)",chip:"var(--diff-modified-chip)"},UNCHANGED:{bg:"var(--diff-unchanged-bg)",border:"var(--diff-unchanged-border)",text:"var(--diff-unchanged-text)",chip:"var(--diff-unchanged-chip)"},MATCH:{bg:"var(--diff-match-bg)",border:"var(--diff-match-border)",text:"var(--diff-match-text)",chip:"var(--diff-match-chip)"}},jh=`
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
  .admin-detail-actions {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    flex-wrap: wrap;
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
`,ft={background:"#fffdf8",border:"1px solid #ded6c8",borderRadius:8,boxShadow:"0 1px 3px rgba(31,41,55,.08)"},ar={textAlign:"start",padding:"8px 9px",borderBottom:"1px solid #ded6c8",fontWeight:650,verticalAlign:"top",whiteSpace:"normal",overflowWrap:"anywhere"},Or={padding:"8px 9px",borderBottom:"1px solid #eee7dc",verticalAlign:"top",whiteSpace:"normal",overflowWrap:"anywhere",lineHeight:1.35},vr={border:"1px solid #ded6c8",background:"#fbfaf6",color:"#344054",borderRadius:999,padding:"4px 8px",fontSize:12,fontWeight:600};function Sh(e=!1,t={}){return{border:"none",borderRadius:6,background:e?"#98a2b3":"#1f2937",color:"white",padding:"9px 14px",fontWeight:550,cursor:e?"default":"pointer",...t}}function _h(e={}){return{border:"1px solid #c9c0b0",borderRadius:6,background:"#fffdf8",color:"#344054",padding:"9px 13px",fontWeight:550,cursor:"pointer",...e}}function Dr(e){if(!e)return"";const t=String(e);return t.includes("Traceback (most recent call last)")||t.includes("Internal Server Error")||t.includes("psycopg")||t.includes("OperationalError")||t.includes('File "')||t.length>500?"An unexpected internal server error occurred. Please try again or check server logs.":t.replace(/\/Users\/[a-zA-Z0-9_-]+\//g,".../")}async function se(e){try{const t=await e.text();if(!t)return`Request failed with status ${e.status}`;try{const r=JSON.parse(t);return Dr(st(r.detail||r.error||r.message||r))}catch{return t.trim().startsWith("<!DOCTYPE html>")||t.includes("<html")||t.length>200?`Server error (${e.status}). Please check backend logs.`:Dr(t)}}catch{return`Request failed with status ${e.status}`}}function oe(e){const t=st(e);return t.toLowerCase().includes("failed to fetch")?"The app could not reach the comparison service. Please confirm the backend is running and the API URL is correct.":t||"Something went wrong while processing the documents."}async function Eh(e){const t=await fetch(`${V}/extract-runs/${e}/structured-json`);if(t.ok){const s=Bo(await t.json());if(Sa(s))return s;const i=await vc(e,s);return Sa(i)?i:s}const r=await fetch(`${V}/extract-runs/${e}/json`);if(!r.ok)throw new Error(await se(t));const n=await r.json(),a=Bo(n);return Sa(a)?a:vc(e,a)}function Sa(e){return!!(e&&((e.content||[]).length>0||(e.tables||[]).length>0||(e.pages||[]).some(t=>(t.content||[]).length>0||(t.tables||[]).length>0)))}async function vc(e,t={}){const[r,n]=await Promise.allSettled([fetch(`${V}/extract-runs/${e}/blocks?limit=2000`).then(async i=>{if(!i.ok)throw new Error(await se(i));return i.json()}),fetch(`${V}/extract-runs/${e}/tables?include_rows=true`).then(async i=>{if(!i.ok)throw new Error(await se(i));return i.json()})]),a=r.status==="fulfilled"?r.value.blocks||[]:[],s=n.status==="fulfilled"?n.value.tables||[]:[];return Bo({...t,blocks:a,tables:s.length?s:t.tables||[]})}function Bo(e){var l,c,u;if(e!=null&&e.structured_json)return e.structured_json;if((e!=null&&e.document_summary||e!=null&&e.content||e!=null&&e.pages)&&Sa(e))return e;const t=(e==null?void 0:e.blocks)||[],r=(e==null?void 0:e.tables)||[],n=[];t.forEach(m=>{var v;const f=m.text||((v=m.payload)==null?void 0:v.text)||"",g=String(f).match(/^\s*([^:：]{2,80})\s*[:：]\s*(.{1,300})$/);g&&n.push({field:g[1].trim(),value:g[2].trim(),page:m.page_number,source:m.type,citation:`p.${m.page_number||"-"} - ${m.path||"document"}`}),zh(f).forEach(y=>{n.push({...y,page:m.page_number,source:m.type,citation:`p.${m.page_number||"-"} - ${m.path||"document"}`})})}),r.slice(0,40).forEach(m=>{(m.rows||[]).slice(0,50).forEach(f=>{Object.entries(f||{}).forEach(([g,v])=>{!v||String(g).startsWith("__")||n.push({field:g,value:v,page:m.page_first||m.page_number,source:"table",table:m.display_name||m.title,citation:`${m.page_label||"page"} - ${m.title||"table"}`})})})});const a=t.filter(m=>["paragraph","list_item","kv_pair","figure","section","heading"].includes(m.type)).map(m=>{var x;const f=m.text||((x=m.payload)==null?void 0:x.text)||"",g={page:m.page_number,order:m.sequence||0,type:m.type,path:m.path,text:f,citation:`p.${m.page_number||"-"} - ${m.path||"document"}`},v=[],y=String(f).match(/^\s*([^:：]{2,80})\s*[:：]\s*(.{1,300})$/);return y&&v.push({name:y[1].trim(),value:y[2].trim()}),v.length&&(g.key_values=v),g}).filter(m=>String(m.text||"").trim()),s=[],i=new Map;return a.forEach(m=>{const f=m.page||1;i.has(f)||i.set(f,{page:f,citation:`p.${f}`,content:[],tables:[]}),i.get(f).content.push(m)}),r.forEach(m=>{const f=m.page_first||m.page_number||1;i.has(f)||i.set(f,{page:f,citation:`p.${f}`,content:[],tables:[]}),i.get(f).tables.push(m)}),Array.from(i.keys()).sort((m,f)=>m-f).forEach(m=>s.push(i.get(m))),{document_summary:(e==null?void 0:e.document_summary)||{label:((l=e==null?void 0:e.summary)==null?void 0:l.label)||(e==null?void 0:e.label)||"Extracted document",source_type:((c=e==null?void 0:e.summary)==null?void 0:c.source_format)||(e==null?void 0:e.source_format)||"document",extraction_quality:{grade:((u=e==null?void 0:e.summary)==null?void 0:u.quality)||"not rated",coverage:e==null?void 0:e.coverage},counts:{text_blocks:a.length,tables:r.length,pages:s.length}},semantic_fields:n.slice(0,220),business_structure:Nh(t,r,n),sections:t.filter(m=>["section","heading"].includes(m.type)).slice(0,200),tables:r,pages:s,content:a}}function Nh(e,t,r){const n=[{document_index:1,label:"Extracted document",sections:[]}];let a=null;return e.slice().sort((s,i)=>(s.page_number||1)-(i.page_number||1)||(s.sequence||0)-(i.sequence||0)).forEach(s=>{var i;if(["section","heading"].includes(s.type)){a={title:s.text||s.path||`Page ${s.page_number||1}`,page:s.page_number||1,path:s.path,content:[],fields:[],inline_records:[],tables:[]},n[0].sections.push(a);return}if((!a||a.page!==(s.page_number||1))&&(a={title:`Page ${s.page_number||1}`,page:s.page_number||1,path:`/page_${s.page_number||1}`,content:[],fields:[],inline_records:[],tables:[]},n[0].sections.push(a)),["paragraph","list_item","kv_pair","figure"].includes(s.type)){const l=s.text||((i=s.payload)==null?void 0:i.text)||"",c=r.filter(m=>{var f;return m.page===s.page_number&&((f=m.citation)==null?void 0:f.includes(s.path||"__no_path__"))}),u=Ch(l);a.content.push({type:s.type,page:s.page_number,path:s.path,text:l,fields:c}),a.fields.push(...c),u&&a.inline_records.push({...u,page:s.page_number,citation:`p.${s.page_number||"-"} - ${s.path||"document"}`})}}),t.forEach(s=>{const i=s.page_first||s.page_number||1;let l=n[0].sections.find(c=>c.page===i);l||(l={title:`Page ${i}`,page:i,path:`/page_${i}`,content:[],fields:[],inline_records:[],tables:[]},n[0].sections.push(l)),l.tables.push({title:s.display_name||s.title||"Detected table",page_label:s.page_label,columns:s.columns||[],row_count:s.n_rows||0,sample_rows:(s.rows||s.row_preview||[]).slice(0,8)})}),{documents:n,section_count:n[0].sections.length}}function Ch(e){const t=String(e||"").trim();if(!t)return null;const r=t.includes("|")?t.split("|").map(n=>n.trim()).filter(Boolean):t.split(/\s{3,}/).map(n=>n.trim()).filter(Boolean);return r.length<2?null:{record_type:"inline_row",columns:r.map((n,a)=>`Column ${a+1}`),values:Object.fromEntries(r.map((n,a)=>[`Column ${a+1}`,n])),text:t}}function zh(e){const t=String(e||""),r=[["color",/\b(?:colou?r|shade)\s*(?:is|=|:)?\s*([A-Za-z][A-Za-z\s/-]{2,40})/gi],["size",/\b(?:size|dimension)\s*(?:is|=|:)?\s*([A-Z0-9][A-Z0-9\s./x-]{0,40})/gi],["quantity",/\b(?:qty|quantity|count|units?)\s*(?:is|=|:)?\s*(\d[\d,]*(?:\.\d+)?)/gi],["price",/([$€£]\s?\d[\d,]*(?:\.\d+)?)/g],["percentage",/\b(\d+(?:\.\d+)?%)\b/g],["date",/\b(\d{1,2}[/-]\d{1,2}[/-]\d{2,4}|\d{4}-\d{1,2}-\d{1,2})\b/g],["code",/\b([A-Z]{1,8}[- ]?\d{2,12}[A-Z]?)\b/gi]],n=[],a=new Set;return r.forEach(([s,i])=>{for(const l of t.matchAll(i)){const c=String(l[1]||"").replace(/\s+/g," ").trim(),u=`${s}:${c.toLowerCase()}`;!c||a.has(u)||(a.add(u),n.push({field:s,value:c}))}}),n}function st(e){if(!e)return"";if(typeof e=="string")return Dr(e);if(e instanceof Error)return st(e.message);if(Array.isArray(e))return e.map(st).filter(Boolean).join(`
`);if(typeof e=="object"){if(e.detail)return st(e.detail);if(e.error)return st(e.error);if(e.message)return st(e.message);try{return Dr(JSON.stringify(e,null,2))}catch{return Dr(String(e))}}return Dr(String(e))}function Ph(e){if(!(e!=null&&e.length))return[];const t=new Set;return e.slice(0,20).forEach(r=>{r&&typeof r=="object"&&!Array.isArray(r)&&Object.keys(r).forEach(n=>{mr(n)||t.add(n)})}),Array.from(t).slice(0,12)}function mr(e){const t=String(e||"");return!t||t.startsWith("__")?!0:["payload","raw","field_profiles","column_profiles","extraction_intelligence","source_tables","table_fingerprint","bbox_by_page","quality_warnings"].includes(t)}function dr(e){if(e==null||e==="")return"-";if(Array.isArray(e))return e.map(dr).join(", ");if(typeof e=="object"){const t=Object.fromEntries(Object.entries(e).filter(([r])=>!mr(r)));return Object.keys(t).length?JSON.stringify(t):"-"}return String(e)}function yc(e){return!e||typeof e!="object"?"":Object.entries(e).filter(([,t])=>t!=null&&String(t).trim()!=="").map(([t,r])=>`${t}: ${r}`).join(" | ")}function Th(e,t=560,r=1280){const n=Math.max(1,Number(e)||1);return Math.min(r,Math.max(t,180+n*180))}function Ke(e,t){if(!e)return"";const r=String(e).replace(/\s+/g," ").trim();return r.length<=t?r:`${r.slice(0,t-1)}...`}function wt(e){const t=Number(e||0);return Number.isFinite(t)?Math.round(t).toLocaleString():"0"}function Dh(e){if(!e)return"-";const t=new Date(e);return Number.isNaN(t.getTime())?"-":t.toLocaleString(void 0,{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function $h(e,t){const r=Number(e||0);if(!Number.isFinite(r)||r<=0)return t==="complete"||t==="failed"?"-":"Running";const n=Math.max(1,Math.round(r/1e3));if(n<60)return`${n}s`;const a=Math.floor(n/60),s=n%60;if(a<60)return s?`${a}m ${s}s`:`${a}m`;const i=Math.floor(a/60),l=a%60;return l?`${i}h ${l}m`:`${i}h`}function Rh(e){return String(e||"-").replace(/\bbase\s*p\.?\s*(\d+)/gi,"Baseline page $1").replace(/\btarget\s*p\.?\s*(\d+)/gi,"Revised page $1").replace(/\bbaseline\s*p\.?\s*(\d+)/gi,"Baseline page $1").replace(/\brevised\s*p\.?\s*(\d+)/gi,"Revised page $1").replace(/\s*->\s*/g," → ")}function wc(e){const t=String(e||"").toLowerCase();return t.includes("high")?3:t.includes("medium")?2:t.includes("low")?1:0}function Fr(e){const t=String((e==null?void 0:e.change_type)||(e==null?void 0:e.changeType)||(e==null?void 0:e.status)||"").toUpperCase();if(["ADDED","DELETED","MODIFIED","UNCHANGED","MATCH"].includes(t))return t;if((e!=null&&e.after||e!=null&&e.target_text)&&!(e!=null&&e.before||e!=null&&e.base_text))return"ADDED";if((e!=null&&e.before||e!=null&&e.base_text)&&!(e!=null&&e.after||e!=null&&e.target_text))return"DELETED";const r=`${(e==null?void 0:e.type)||""} ${(e==null?void 0:e.change)||""} ${(e==null?void 0:e.description)||""} ${(e==null?void 0:e.review)||""}`.toUpperCase();return r.includes("ADDED")||r.includes("NEW CONTENT")||r.includes("INTRODUCED")?"ADDED":r.includes("DELETED")||r.includes("REMOVED")||r.includes("DROPPED")?"DELETED":r.includes("MODIFIED")||r.includes("CHANGED")||r.includes("UPDATED")||r.includes("REVISED")?"MODIFIED":t||"MODIFIED"}function Lh(e){const t=Fr(e),r=(e==null?void 0:e.before)||"",n=(e==null?void 0:e.after)||"",a=(e==null?void 0:e.stable_key)||bc(e==null?void 0:e.path)||"Document change",s=[e!=null&&e.page_base?`Baseline page ${e.page_base}`:"",e!=null&&e.page_target?`Revised page ${e.page_target}`:""].filter(Boolean).join(" -> "),i=t==="ADDED"?`Added: ${Ke(n,260)}`:t==="DELETED"?`Deleted: ${Ke(r,260)}`:`Changed from "${Ke(r,120)}" to "${Ke(n,120)}"`;return{feature:a,item:a,area:bc(e==null?void 0:e.path)||"Document",change_type:t,change:i,before:r,after:n,citation:s,impact:e==null?void 0:e.impact,confidence:typeof(e==null?void 0:e.similarity)=="number"?Math.max(.55,Math.min(.98,1-Math.abs(1-e.similarity))):null,seek_clarification:t==="UNCHANGED"?"None":"Review recommended."}}function Ih(e,t){const r=Array.isArray(e)?[...e]:[],n=Array.isArray(t)?t:[],a=new Set(r.map(Fr)),s=new Set(r.map(i=>`${Fr(i)}:${i.stable_key||i.item||i.feature||i.path||i.change}`));return["ADDED","DELETED"].forEach(i=>{if(a.has(i))return;let l=0;n.forEach(c=>{if(l>=12||Fr(c)!==i)return;const u=`${i}:${c.stable_key||c.path||c.before||c.after}`;s.has(u)||(r.push(Lh(c)),s.add(u),l+=1)})}),r}function bc(e){const t=String(e||"").split("/").map(r=>r.trim()).filter(Boolean);return t[t.length-1]||""}function kc(e){const t=`${e.seek_clarification||""} ${e.review||""} ${e.recommendation||""}`.toLowerCase(),r=Wo(e.confidence);return t.includes("review")||t.includes("clarif")||t.includes("confirm")||typeof r=="number"&&r<.8}function Wo(e){return typeof e!="number"?null:e>1?e/100:e}function jc(e){return{border:"1px solid #c9c0b0",background:e?"#f1ece3":"#fffdf8",color:e?"#98a2b3":"#344054",borderRadius:7,padding:"7px 12px",cursor:e?"default":"pointer",fontWeight:600}}function Sc(e){return{border:"1px solid #c9c0b0",background:e?"#f1ece3":"#fffdf8",color:e?"#98a2b3":"#344054",borderRadius:6,padding:"5px 8px",cursor:e?"default":"pointer",fontWeight:600,fontSize:12}}function Vo(e,t=!1){const r=String(e||"").toLowerCase();return r==="added"?{background:t?Q.ADDED.bg:"rgba(31,160,70,.08)",border:t?void 0:`1px solid ${Q.ADDED.border}`,borderInlineStart:`3px solid ${Q.ADDED.border}`}:r==="deleted"?{background:t?Q.DELETED.bg:"rgba(218,54,54,.08)",border:t?void 0:`1px solid ${Q.DELETED.border}`,borderInlineStart:`3px solid ${Q.DELETED.border}`}:r==="modified"?{background:t?"rgba(196,85,16,.10)":"rgba(196,85,16,.08)",border:t?void 0:`1px solid ${Q.MODIFIED.border}`,borderInlineStart:`3px solid ${Q.MODIFIED.border}`}:{background:t?"transparent":"#fffdf8",border:t?void 0:"1px solid transparent",borderInlineStart:"3px solid transparent"}}function Ah({meta:e}){var r,n,a;const t=e.stats||{};return o.jsxs("section",{className:"stats-strip",children:[o.jsx(we,{label:"Added",value:t.ADDED||0,tone:"added"}),o.jsx(we,{label:"Deleted",value:t.DELETED||0,tone:"deleted"}),o.jsx(we,{label:"Modified",value:t.MODIFIED||0,tone:"modified"}),o.jsx(we,{label:"Unchanged",value:t.UNCHANGED||0}),o.jsx(we,{label:"Coverage",value:`${_c((r=e.coverage)==null?void 0:r.base)} / ${_c((n=e.coverage)==null?void 0:n.target)}`}),o.jsx(we,{label:"Pages",value:`${e.n_pages_base} / ${e.n_pages_target}`}),Number(((a=e.ai_usage)==null?void 0:a.total_tokens)||0)>0&&o.jsx(we,{label:"AI tokens",value:`${wt(e.ai_usage.total_tokens)} (${wt(e.ai_usage.calls||0)} calls)`})]})}function _c(e){return typeof e=="number"?`${e.toFixed(1)}%`:"-"}function we({label:e,value:t,tone:r}){return o.jsxs("span",{className:`stat-chip ${r||"neutral"}`,children:[o.jsx("span",{children:e}),o.jsx("strong",{children:t})]})}function Mh({usage:e}){const t=Number((e==null?void 0:e.total_tokens)||0);if(!t)return null;const n=(Array.isArray(e==null?void 0:e.operations)?e.operations:[]).slice(-4);return o.jsxs("div",{style:{border:"1px solid #ded6c8",borderRadius:8,padding:10,marginBottom:12,background:"#fbfaf6",fontSize:12,color:"#475467"},children:[o.jsx("strong",{style:{color:"#344054"},children:"AI usage:"})," ",wt(t)," tokens · ",wt(e.calls||0)," call(s) · ",wt(e.prompt_tokens||0)," input / ",wt(e.completion_tokens||0)," output",n.length>0&&o.jsx("div",{style:{marginTop:6,display:"flex",flexWrap:"wrap",gap:6},children:n.map((a,s)=>o.jsxs("span",{style:{border:"1px solid #d8d0c3",borderRadius:999,padding:"3px 7px",background:"#fffdf8"},children:[a.operation||"AI call"," · ",wt(a.total_tokens||0)]},`${a.operation||"op"}-${s}`))})]})}function Ec({progress:e,message:t,status:r}){const n=ms(r),a=Math.max(0,Math.min(100,Number(e)||0)),s=n.isFailed?100:Math.max(7,n.isComplete?100:a);return o.jsxs("div",{className:"processing-state",children:[o.jsxs("div",{className:"processing-state-head",children:[o.jsx("span",{style:{fontWeight:600},children:t}),o.jsxs("span",{children:[a,"%"]})]}),o.jsx("div",{className:"progress-track",children:o.jsx("div",{className:`progress-fill ${n.className}`,style:{width:`${s}%`}})}),o.jsx("p",{children:"The job is still running. This view updates automatically as the backend reports progress."})]})}function An({message:e}){return o.jsx("div",{style:{marginTop:16,border:"1px solid #f0b4b4",background:"#fff5f5",color:"#9f1d1d",borderRadius:8,padding:13,fontSize:14,fontWeight:600,lineHeight:1.45,whiteSpace:"pre-wrap"},children:st(e)})}function Wn({label:e}){return o.jsx("div",{style:{padding:20,color:"#667085",fontWeight:600},children:e})}function hr({label:e}){return o.jsx("div",{style:{padding:18,border:"1px dashed #c9c0b0",borderRadius:8,color:"#667085",background:"#fbfaf7",fontWeight:600},children:e})}function Oh({status:e}){const t=ms(e);return o.jsx("span",{style:{display:"inline-block",background:t.tone.chip,color:t.tone.text,border:`1px solid ${t.tone.border}`,padding:"2px 8px",borderRadius:999,fontWeight:650,fontSize:12},children:t.label})}function ms(e){const t=String(e||"queued").toLowerCase(),r=t==="complete"||t==="completed",n=t==="failed"||t==="error",a=t==="running"||t==="processing"||t==="uploading";return{value:t,label:r?"complete":n?"failed":t,className:r?"complete":n?"failed":a?"running":"queued",tone:r?Q.ADDED:n?Q.DELETED:a?Q.MODIFIED:Q.UNCHANGED,isComplete:r,isFailed:n}}function Fh({value:e,status:t}){const r=ms(t),n=Math.max(0,Math.min(100,Number(e)||0)),a=r.isFailed||r.isComplete?100:n;return o.jsxs("div",{children:[o.jsx("div",{className:"progress-track",style:{height:6,minWidth:140},children:o.jsx("div",{className:`progress-fill ${r.className}`,style:{width:`${a}%`}})}),o.jsx("div",{style:{marginTop:5,color:"#667085",fontSize:12},children:r.isFailed?"failed":`${r.isComplete?100:n}%`})]})}function ep({type:e}){const t=String(e||"MODIFIED").toUpperCase(),r=Q[t]||Q.MODIFIED;return o.jsx("span",{style:{display:"inline-block",background:r.chip,color:r.text,border:`1px solid ${r.border}`,padding:"2px 8px",borderRadius:999,fontWeight:650,fontSize:12},children:t})}function Uh({onOpenJob:e,onAskJob:t,error:r,historyKind:n="all",onStartCompare:a,onStartExtract:s}){const[i,l]=b.useState({loading:!0,error:"",jobs:[]}),[c,u]=b.useState(""),m=async()=>{try{const p=await fetch(`${V}/jobs?limit=80`);if(!p.ok)throw new Error(await se(p));const d=await p.json();l({loading:!1,error:"",jobs:d.jobs||[]})}catch(p){l({loading:!1,error:oe(p),jobs:[]})}};b.useEffect(()=>{let p=!1,d=null;const h=async()=>{p||(await m(),p||(d=setTimeout(h,2200)))};return h(),()=>{p=!0,d&&clearTimeout(d)}},[]);const f=async p=>{if(!(!(p!=null&&p.run_id)||c)){u(p.run_id);try{const d=await fetch(`${V}/jobs/${p.run_id}`,{method:"DELETE"});if(!d.ok)throw new Error(await se(d));await m()}catch(d){l(h=>({...h,error:oe(d)}))}finally{u("")}}},g=(i.jobs||[]).filter(p=>n==="all"||p.kind===n),v=g.filter(p=>!["complete","failed","error"].includes(p.status)).length,y=g.filter(p=>p.status==="complete").length,x=n==="comparison"?"Comparison History":n==="extraction"?"Extraction History":"Work History",j=n==="comparison"?"No comparison runs are available yet.":n==="extraction"?"No extraction runs are available yet.":"No document work is available yet.";return o.jsxs("section",{className:"session-board",children:[o.jsxs("div",{className:"board-head",children:[o.jsx("div",{children:o.jsx("h2",{children:x})}),o.jsxs("div",{className:"board-actions",children:[o.jsx("button",{type:"button",onClick:a,className:"primary-action compact",children:"New compare"}),o.jsx("button",{type:"button",onClick:s,className:"ghost-action compact",children:"New extract"}),o.jsxs("span",{children:[v," running"]}),o.jsxs("span",{children:[y," complete"]}),o.jsx("button",{type:"button",onClick:m,className:"ghost-action",children:"Refresh"})]})]}),r&&o.jsx(An,{message:r}),i.error&&o.jsx(An,{message:i.error}),i.loading&&!g.length?o.jsx(Wn,{label:"Loading jobs"}):g.length===0?o.jsx(hr,{label:j}):o.jsx("div",{className:"job-list",children:g.map(p=>o.jsx(Bh,{job:p,deleting:c===p.run_id,onOpen:()=>e(p),onAsk:()=>t==null?void 0:t(p),onDelete:()=>f(p)},p.run_id))})]})}function Bh({job:e,deleting:t,onOpen:r,onAsk:n,onDelete:a}){const s=e.status==="complete",i=ms(e.status),l=e.kind==="extraction",c=l?e.label||"Uploaded document":`${e.base_label||"Baseline"} → ${e.target_label||"Revised"}`,u=l?e.n_pages||"-":`${e.n_pages_base||"-"} / ${e.n_pages_target||"-"}`;return o.jsxs("article",{className:`job-card ${i.className}`,children:[o.jsxs("div",{className:"job-main",children:[o.jsx("div",{className:"job-kind",children:l?"Extraction":"Comparison"}),o.jsx("h3",{dir:"auto",children:c}),o.jsxs("div",{className:"job-meta",children:[o.jsxs("span",{children:["#",String(e.run_id||"").slice(0,6)]}),o.jsx("span",{children:[e.source_format,e.base_format,e.target_format].filter(Boolean).join(" / ")||"document"}),o.jsxs("span",{children:[u," pages"]}),o.jsx("span",{children:$h(e.duration_ms,e.status)})]}),e.status_message&&o.jsx("p",{dir:"auto",children:e.status_message}),i.isFailed&&e.error&&o.jsx("p",{className:"job-error",dir:"auto",children:Ke(st(e.error),180)})]}),o.jsxs("div",{className:"job-side",children:[o.jsx(Oh,{status:e.status}),o.jsx(Fh,{value:e.progress||0,status:e.status}),o.jsx("span",{className:"job-date",children:Dh(e.created_at)}),o.jsxs("div",{className:"job-actions",children:[o.jsx("button",{type:"button",onClick:r,disabled:!s,className:"primary-action compact",children:"Open"}),o.jsx("button",{type:"button",onClick:n,disabled:!s||!l,className:"ghost-action compact",children:"Query"}),o.jsx("button",{type:"button",onClick:a,disabled:t,className:"danger-action compact",children:t?"Deleting":"Delete"})]})]})]})}function Wh({onUpload:e,busy:t,onAdmin:r}){const n=tp("comparison"),a=t||n.loading||!n.selectedId||n.datasets.length===0;return o.jsxs("form",{onSubmit:e,className:"doc-workflow-card",children:[o.jsx("div",{className:"workflow-card-head",children:o.jsx("div",{children:o.jsx("h2",{children:"Compare two documents"})})}),o.jsx(rp,{...n,busy:t,onAdmin:r}),!n.loading&&n.datasets.length===0?o.jsx(np,{onAdmin:r}):null,o.jsxs("div",{className:"upload-grid compare",children:[o.jsx(qo,{label:"Baseline",helper:"Approved or reference file",name:"base",disabled:a}),o.jsx(qo,{label:"Revised",helper:"Latest or proposed file",name:"target",disabled:a}),o.jsxs("div",{className:"workflow-action-rail",children:[o.jsx("button",{disabled:a,className:"primary-action full",children:t?"Processing":"Compare documents"}),o.jsx("div",{className:"workflow-note",children:"Side-by-side preview, semantic changes, and export."})]})]})]})}function Vh({onUpload:e,busy:t,onAdmin:r}){const n=tp("extraction"),a=t||n.loading||!n.selectedId||n.datasets.length===0;return o.jsxs("form",{onSubmit:e,className:"doc-workflow-card",children:[o.jsx("div",{className:"workflow-card-head",children:o.jsx("div",{children:o.jsx("h2",{children:"Extract documents"})})}),o.jsx(rp,{...n,busy:t,onAdmin:r}),!n.loading&&n.datasets.length===0?o.jsx(np,{onAdmin:r}):null,o.jsxs("div",{className:"upload-grid extract",children:[o.jsx(qo,{label:"Document or image",helper:"PDF, image, Word, Excel, xlsb, CSV, or TSV",name:"document",disabled:a,multiple:!0}),o.jsxs("div",{className:"workflow-action-rail",children:[o.jsx("button",{disabled:a,className:"primary-action full",children:t?"Extracting":"Extract content"}),o.jsx("div",{className:"workflow-note",children:"Text, tables, OCR, structured JSON, and document query."})]})]})]})}function tp(e){const[t,r]=b.useState([]),[n,a]=b.useState(""),[s,i]=b.useState(!0),[l,c]=b.useState("");return b.useEffect(()=>{let u=!0;return(async()=>{i(!0),c("");try{const f=window.sessionStorage.getItem("simulated_role")||"platform_admin",g=await fetch(`${V}/datasets`,{headers:{"X-User-Role":f}});if(!g.ok){const j=g.status===404?"Use case service is not available. Confirm the backend admin/datasets routes are deployed, then refresh.":`Could not load use cases (${g.status})`;throw new Error(j)}const x=((await g.json()).datasets||[]).filter(j=>(j.use_case_type||"comparison")===e);if(!u)return;r(x),a(j=>{var p;return j||((p=x[0])==null?void 0:p.id)||""})}catch(f){if(!u)return;r([]),a(""),c((f==null?void 0:f.message)||"Could not load use cases.")}finally{u&&i(!1)}})(),()=>{u=!1}},[]),{datasets:t,selectedId:n,setSelectedId:a,loading:s,error:l}}function rp({datasets:e,selectedId:t,setSelectedId:r,loading:n,error:a,busy:s,onAdmin:i}){return o.jsxs("div",{className:"usecase-selector",children:[o.jsxs("label",{children:[o.jsx("span",{children:"Use case"}),o.jsxs("select",{name:"family_id",value:t,onChange:l=>r(l.target.value),required:!0,disabled:s||n||e.length===0,children:[o.jsx("option",{value:"",disabled:!0,children:n?"Loading use cases":"Select a use case"}),e.map(l=>o.jsxs("option",{value:l.id,children:[l.supplier," - ",l.family_name," (",l.domain||"generic",")"]},l.id))]})]}),a?o.jsx("p",{className:"usecase-error",children:a}):null,e.length>0?o.jsx("button",{type:"button",className:"ghost-action compact",onClick:i,children:"Manage"}):null]})}function np({onAdmin:e}){return o.jsxs("div",{className:"usecase-required",children:[o.jsx("strong",{children:"Use case required"}),o.jsx("p",{children:"Create or bootstrap a document use case before uploading files. The selected use case supplies metadata, template rules, access policy, and extraction guidance."}),o.jsx("button",{type:"button",className:"primary-action compact",onClick:e,children:"Open Admin Studio"})]})}function qo({label:e,helper:t,name:r,disabled:n,multiple:a=!1}){const[s,i]=b.useState(""),l=b.useRef(null),c=()=>{var u;n||(u=l.current)==null||u.click()};return o.jsxs("div",{onClick:c,onKeyDown:u=>{(u.key==="Enter"||u.key===" ")&&c()},role:"button",tabIndex:n?-1:0,className:`file-lane${n?" disabled":""}`,children:[o.jsx("input",{ref:l,type:"file",name:r,accept:kh,multiple:a,required:!0,disabled:n,onClick:u=>u.stopPropagation(),onChange:u=>{var f;const m=Array.from(u.target.files||[]);i(m.length>1?`${m.length} files selected`:((f=m[0])==null?void 0:f.name)||"")},style:{position:"absolute",width:1,height:1,opacity:0,pointerEvents:"none"}}),o.jsxs("div",{className:"file-lane-head",children:[o.jsxs("div",{children:[o.jsx("div",{className:"file-lane-title",children:e}),o.jsx("div",{className:"file-lane-helper",children:t})]}),o.jsx("span",{className:"file-lane-pill",children:"Files"})]}),o.jsx("div",{className:`file-lane-value${s?" selected":""}`,children:s||"Select a file"})]})}function qh({runId:e,meta:t,onVerifyPage:r}){const n=t.base_format&&t.base_format!=="pdf"?t.base_native_pages||t.n_pages_base||1:t.n_pages_base||1,a=t.target_format&&t.target_format!=="pdf"?t.target_native_pages||t.n_pages_target||1:t.n_pages_target||1,s=Math.max(n,a),[i,l]=b.useState(null),[c,u]=b.useState(!1);b.useEffect(()=>{let v=!1;return l(null),Promise.all([fetch(`${V}/runs/${e}/summary`).then(async y=>{if(!y.ok)throw new Error("Failed to load summary");return y.json()}),fetch(`${V}/runs/${e}/diff?limit=500`).then(async y=>y.ok?y.json():{diffs:[]})]).then(([y,x])=>{if(v)return;const j=Array.isArray(y)?y:y.rows||y.summary||[];l(Ih(j,x.diffs||[]))}).catch(y=>{v||(console.error("Failed to build quick summary",y),l([]))}),()=>{v=!0}},[e]);const m=Ya.useMemo(()=>(Array.isArray(i)?i:[]).filter(y=>y.change||y.description||y.before||y.after).sort((y,x)=>{const j=wc(y.impact)+(kc(y)?2:0)+(Wo(y.confidence)||0);return wc(x.impact)+(kc(x)?2:0)+(Wo(x.confidence)||0)-j}),[i]),f=v=>{const y=String(v||""),x=y.match(/(?:revised|target|page|p\.)\s*(\d+)/i)||y.match(/\b(\d{1,4})\b/);if(!x)return null;const j=Number.parseInt(x[1],10);return Number.isFinite(j)&&j>=1&&j<=s?j:null};if(i===null)return o.jsx("div",{className:"key-audit-empty",children:"Building comparison summary..."});if(!m.length)return o.jsx("div",{className:"key-audit-empty",children:"No prioritized summary items were returned for this comparison."});const g=c?m.slice(0,16):m.slice(0,8);return o.jsxs("div",{className:"key-audit-panel compact",children:[o.jsx("div",{className:"key-audit-list",children:g.map((v,y)=>{const x=f(v.citation);return o.jsxs("div",{className:"key-audit-item",children:[o.jsx(ep,{type:Fr(v)}),o.jsxs("div",{className:"key-audit-copy",dir:"auto",children:[o.jsx("strong",{children:Ke(v.feature||v.item||v.area||"Document change",120)}),o.jsx("span",{children:Ke(v.change||v.description||v.before||v.after||"Value updated.",260)}),v.citation?o.jsx("small",{children:Rh(v.citation)}):null]}),x?o.jsxs("button",{type:"button",className:"primary-action compact",onClick:()=>r(x),children:["Verify page ",x]}):null]},`${v.stable_key||v.feature||v.item||y}`)})}),m.length>8&&o.jsx("button",{type:"button",className:"key-audit-more",onClick:()=>u(v=>!v),children:c?"Show fewer":`Show ${Math.min(16,m.length)} items`})]})}function Hh({runId:e,meta:t,pageNum:r,setPageNum:n}){const a=t.base_format&&t.base_format!=="pdf"?t.base_native_pages||t.n_pages_base||1:t.n_pages_base||1,s=t.target_format&&t.target_format!=="pdf"?t.target_native_pages||t.n_pages_target||1:t.n_pages_target||1,i=Math.max(a,s),[l,c]=b.useState(r),[u,m]=b.useState(r),[f,g]=b.useState(100),[v,y]=b.useState(!1),[x,j]=b.useState(!0),p=b.useRef(null),d=b.useRef(null);b.useEffect(()=>{c(r),m(r)},[e,r]),b.useEffect(()=>{if(!x)return;const w=p.current,S=d.current;if(!w||!S)return;let N=!1;const C=(R,W)=>{N||(N=!0,W.scrollTop=R.scrollTop,W.scrollLeft=R.scrollLeft,window.requestAnimationFrame(()=>{N=!1}))},z=()=>C(w,S),$=()=>C(S,w);return w.addEventListener("scroll",z,{passive:!0}),S.addEventListener("scroll",$,{passive:!0}),()=>{w.removeEventListener("scroll",z),S.removeEventListener("scroll",$)}},[e,r,x]);const h=w=>{const S=Math.max(1,Math.min(i,w));n(S),c(S),m(S)};return o.jsxs("div",{children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:12,flexWrap:"wrap"},children:[o.jsx("button",{onClick:()=>h(r-1),disabled:r<=1,style:jc(r<=1),children:"Prev both"}),o.jsxs("span",{style:{fontSize:17,fontWeight:650,minWidth:100},children:["Page ",r," / ",i]}),o.jsx("button",{onClick:()=>h(r+1),disabled:r>=i,style:jc(r>=i),children:"Next both"}),o.jsxs("div",{className:"viewer-toolbar-group","aria-label":"PDF zoom controls",children:[o.jsx("button",{type:"button",onClick:()=>g(w=>Math.max(50,w-25)),title:"Zoom out",children:"-"}),o.jsxs("span",{children:[f,"%"]}),o.jsx("button",{type:"button",onClick:()=>g(w=>Math.min(300,w+25)),title:"Zoom in",children:"+"}),o.jsx("button",{type:"button",onClick:()=>g(100),title:"Reset zoom",children:"Reset"})]}),o.jsxs("label",{className:"viewer-sync-toggle",children:[o.jsx("input",{type:"checkbox",checked:x,onChange:w=>j(w.target.checked)}),o.jsx("span",{children:"Sync scroll"})]}),o.jsxs("label",{className:"viewer-sync-toggle",style:{marginLeft:8},children:[o.jsx("input",{type:"checkbox",checked:v,onChange:w=>y(w.target.checked)}),o.jsx("span",{children:"Smart crop"})]}),o.jsx(Qh,{})]}),o.jsxs("div",{className:"viewer-grid",style:{display:"grid",gridTemplateColumns:"minmax(0, 1fr) minmax(0, 1fr)",gap:14},children:[o.jsx(Nc,{runId:e,side:"base",pageNum:l,setPageNum:c,totalPages:a,label:"Baseline document",docName:t.base_label,format:t.base_format,zoom:f,scrollRef:p,cropMargins:v}),o.jsx(Nc,{runId:e,side:"target",pageNum:u,setPageNum:m,totalPages:s,label:"Revised document",docName:t.target_label,format:t.target_format,zoom:f,scrollRef:d,cropMargins:v})]})]})}function Qh(){return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7,marginLeft:6,flexWrap:"wrap"},children:[o.jsx(Vs,{label:"added",color:Q.ADDED.bg,border:Q.ADDED.border}),o.jsx(Vs,{label:"deleted",color:Q.DELETED.bg,border:Q.DELETED.border}),o.jsx(Vs,{label:"modified",color:Q.MODIFIED.bg,border:Q.MODIFIED.border})]})}function Vs({label:e,color:t,border:r}){return o.jsx("span",{style:{background:t,border:`1px solid ${r}`,color:"var(--text-primary)",padding:"2px 8px",borderRadius:999,fontSize:12,fontWeight:600},children:e})}function Nc({runId:e,side:t,pageNum:r,setPageNum:n,totalPages:a,label:s,docName:i,format:l,zoom:c=100,scrollRef:u,cropMargins:m}){const[f,g]=b.useState({regions:[]}),[v,y]=b.useState(null),[x,j]=b.useState("idle"),p=r>=1&&r<=a,d=l&&l!=="pdf";b.useEffect(()=>{if(j(p&&!d?"loading":"idle"),!p){g({regions:[]}),y(null);return}if(d){g({regions:[]}),fetch(`${V}/runs/${e}/native-page/${t}/${r}`).then($=>$.json()).then(y).catch(()=>y({items:[]}));return}y(null),fetch(`${V}/runs/${e}/overlay/${t}/${r}`).then($=>$.json()).then(g).catch(()=>g({regions:[]}))},[e,t,r,p,d]);const h=f.content_box,w=f.page_width||612,S=f.page_height||792,N=m&&h&&h.x_max>h.x_min&&h.y_max>h.y_min;let C={position:"relative",width:"100%"},z={position:"relative",width:`${c}%`};if(N){const $=h.x_min/w,R=h.y_min/S,W=(h.x_max-h.x_min)/w;C={position:"relative",overflow:"hidden",width:"100%",paddingTop:`${(h.y_max-h.y_min)/S/W*c}%`},z={position:"absolute",left:`${-($/W)*c}%`,top:`${-(R/W)*c}%`,width:`${1/W*c}%`}}return o.jsxs("div",{className:"doc-viewer-shell",children:[o.jsxs("div",{style:{marginBottom:7,display:"flex",justifyContent:"space-between",gap:10,alignItems:"flex-end",flexWrap:"wrap"},children:[o.jsxs("div",{children:[o.jsx("div",{style:{fontSize:13,color:"var(--text-secondary)",fontWeight:600},children:s}),o.jsxs("div",{style:{fontSize:14,color:"var(--text-primary)",fontWeight:600},children:[i," - ",p?`page ${r}`:"no page",l&&o.jsx("span",{style:{color:"var(--text-secondary)",fontSize:11,marginLeft:6},children:String(l).toUpperCase()})]})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[o.jsx("button",{type:"button",onClick:()=>n(Math.max(1,r-1)),disabled:r<=1,style:Sc(r<=1),title:`Previous ${s}`,children:"Prev"}),o.jsxs("span",{style:{color:"var(--text-secondary)",fontSize:12,minWidth:46,textAlign:"center"},children:[r,"/",a||1]}),o.jsx("button",{type:"button",onClick:()=>n(Math.min(a||1,r+1)),disabled:r>=(a||1),style:Sc(r>=(a||1)),title:`Next ${s}`,children:"Next"})]})]}),o.jsx("div",{ref:u,className:`doc-frame dl-scrollbar ${d?"native":""}`,style:{overflow:"auto",maxHeight:"75vh",position:"relative"},children:p?d?o.jsx(Gh,{page:v,side:t}):o.jsx("div",{style:C,children:o.jsxs("div",{className:"pdf-zoom-stage",style:z,children:[x==="loading"&&o.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)",background:"var(--surface-raised)",zIndex:1,fontWeight:600},children:["Loading page ",r]}),o.jsx("img",{src:`${V}/runs/${e}/pages/${t}/${r}`,onLoad:()=>j("ready"),onError:()=>j("error"),style:{display:"block",width:"100%",height:"auto"},alt:`${t} page ${r}`},`${t}-${r}`),x==="error"&&o.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:Q.DELETED.text,background:"#fff5f5",zIndex:2,fontWeight:600},children:["Could not load page ",r]}),(f.regions||[]).map(($,R)=>{const[W,je,Ie,zt]=$.bbox||[0,0,0,0],Ve=Q[String($.change_type||"").toUpperCase()]||Q.MODIFIED,Xe=$.page_width||f.page_width||612,Se=$.page_height||f.page_height||792,E=$.border_color||Ve.border,T=$.color||Ve.bg;return o.jsx("div",{title:`${$.change_type||"change"} ${$.stable_key||""} (${$.block_type||"block"})`,style:{position:"absolute",left:`${W/Xe*100}%`,top:`${je/Se*100}%`,width:`${Math.max(.15,(Ie-W)/Xe*100)}%`,height:`${Math.max(.15,(zt-je)/Se*100)}%`,background:T,border:`1px solid ${E}`,boxShadow:`inset 0 0 0 1px ${T}`,pointerEvents:"auto"}},R)})]})}):o.jsx(Kh,{pageNum:r})})]})}function Kh({pageNum:e}){return o.jsxs("div",{style:{minHeight:520,display:"grid",placeItems:"center",color:"var(--text-secondary)",fontWeight:600},children:["No page ",e," in this document."]})}function Gh({page:e,side:t}){if(!e)return o.jsx("div",{style:{minHeight:520,display:"grid",placeItems:"center",color:"var(--text-secondary)",fontWeight:600},children:"Loading structured page"});const r=e.items||[],n=e.viewer_type||(e.format==="spreadsheet"?"spreadsheet":"document");return r.length?o.jsx("div",{className:`native-page ${n}`,dir:"auto",children:r.map(a=>o.jsx(Jh,{item:a,viewerType:n,side:t||e.side},a.id))}):o.jsx("div",{style:{minHeight:520,display:"grid",placeItems:"center",color:"var(--text-secondary)",fontWeight:600},children:"No structured content on this page."})}function Jh({item:e,viewerType:t,side:r}){var i;const n=Vo(e.highlight);if(e.type==="table"&&!((i=e.payload)!=null&&i.layout_table)&&!eg(e,t))return o.jsx(Xh,{item:e,viewerType:t});const a=e.type==="table"?{...e,text:Zh(e),payload:{...e.payload||{},layout_table:!0}}:e,s=e.type==="section"||e.type==="heading";return o.jsx("div",{className:"native-block",dir:"auto",style:{...n,marginBottom:s?10:8,padding:s?"7px 9px":"6px 8px",borderRadius:6,fontSize:s?14:13,fontWeight:s?650:400,lineHeight:1.45},title:e.change_type,children:o.jsx(Yh,{item:a,side:r})})}function Yh({item:e,side:t}){var a,s;const r=e.token_diff||[];return e.highlight==="modified"&&Array.isArray(r)&&r.some(i=>i.op&&i.op!=="equal")?o.jsx("span",{dir:"auto",children:r.map((i,l)=>{const c=i.op;if(c==="delete"&&t!=="base"||c==="insert"&&t==="base")return null;const u=c==="equal"||t==="base"?i.text_a:i.text_b;if(!u)return null;let m="";return c==="delete"&&(m="native-token-delete"),c==="insert"&&(m="native-token-insert"),c==="replace"&&(m=t==="base"?"native-token-replace-base":"native-token-replace-target"),o.jsxs(Ya.Fragment,{children:[l>0?" ":"",o.jsx("span",{className:`native-token ${m}`,dir:"auto",children:u})]},l)})}):o.jsx("span",{dir:"auto",children:e.text||((a=e.payload)==null?void 0:a.text)||((s=e.payload)==null?void 0:s.layout_text)||e.path||"-"})}function Xh({item:e,viewerType:t}){var i;const r=qi(e),n=e.rows||[],a=((i=e.payload)==null?void 0:i.table_title)||e.text||"Table",s=t==="spreadsheet";return o.jsxs("div",{className:"native-block",dir:"auto",style:{...Vo(e.highlight),marginBottom:14,padding:10,borderRadius:7},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:10,alignItems:"baseline",flexWrap:"wrap",marginBottom:7},children:[o.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--text-primary)"},children:a}),o.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)"},children:[n.length," row",n.length===1?"":"s"]})]}),o.jsx("div",{className:"native-table-wrap dl-scrollbar",children:o.jsxs("table",{className:`native-table ${s?"spreadsheet":""}`,style:{fontSize:12},children:[o.jsx("thead",{children:o.jsx("tr",{style:{background:"var(--surface-sunken)",color:"var(--text-primary)"},children:r.map((l,c)=>{const u=String(l||"").toLowerCase(),m=c>0&&(u.includes("pcv")||u.includes("pcb")||u.includes("model")||u.includes("spec")||String(l||"").length<=4||r.length>=6&&String(l||"").length<=12);return o.jsx("th",{dir:"auto",className:m?"vertical-th":"",style:m?{...ar,verticalAlign:"bottom"}:ar,children:m?o.jsx("span",{className:"vertical-th-text",children:l}):l},l)})})}),o.jsx("tbody",{children:n.map(l=>{const c=Vo(l.highlight,!0);return o.jsx("tr",{title:l.change_type,style:{background:c.background},children:r.map(u=>{var m;return o.jsx("td",{dir:"auto",style:{...Or,borderLeft:c.borderLeft},children:dr((m=Hi(l.values))==null?void 0:m[u])},u)})},l.id)})})]})})]})}function qi(e){return(Array.isArray(e==null?void 0:e.header)?e.header:[]).map(r=>String(r||"").trim()).filter(r=>r&&!mr(r))}function Hi(e){return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).map(([t,r])=>[String(t||"").trim(),r]).filter(([t])=>t&&!mr(t)))}function Zh(e){const r=(Array.isArray(e==null?void 0:e.rows)?e.rows:[]).map(n=>{const a=Hi(n.values);return Object.values(a).map(i=>dr(i)).filter(i=>i&&i!=="-").join(" / ")||n.text||""}).filter(Boolean);return r.length?r.join(`
`):(e==null?void 0:e.text)||qi(e).join(" / ")||"Document text"}function eg(e,t){var v;if(((v=e==null?void 0:e.payload)==null?void 0:v.source_format)==="docx"||t!=="document")return!1;const r=Array.isArray(e==null?void 0:e.header)?e.header:[],n=qi(e),a=Array.isArray(e==null?void 0:e.rows)?e.rows:[],s=r.some(y=>mr(y)),i=a.flatMap(y=>Object.values(Hi(y.values||{})).map(x=>String(x||"").trim()).filter(Boolean));if(s&&n.length<=2)return!0;if(!a.length||!i.length)return!1;const c=i.filter(y=>y.length>70||y.split(/\s+/).length>=10).length/Math.max(1,i.length),m=i.filter(y=>/[\u0600-\u06ff]/.test(y)&&/[A-Za-z]/.test(y)).length/Math.max(1,i.length),g=n.filter(y=>/feature|description|item|name|order|code|part|model|price|amount|status|date|term|rent|fee/i.test(y)).length/Math.max(1,n.length);return m>=.2&&g<.35||a.length<=6&&c>=.45&&g<.35}function tg({columns:e,rows:t}){if(e=(e||[]).filter(n=>!mr(n)),!e.length||!(t!=null&&t.length))return null;const r=Th(e.length,420,920);return o.jsx("div",{className:"dl-scrollbar table-scroll-frame",style:{marginTop:12},children:o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12,minWidth:r},children:[o.jsx("thead",{children:o.jsx("tr",{style:{background:"#f2eee6"},children:e.map(n=>o.jsx("th",{title:n,style:ar,dir:"auto",children:n},n))})}),o.jsx("tbody",{children:t.map((n,a)=>o.jsx("tr",{children:e.map(s=>{var i;return o.jsx("td",{style:Or,dir:"auto",children:dr(((i=n==null?void 0:n.values)==null?void 0:i[s])??(n==null?void 0:n[s]))},s)})},a))})]})})}function sr({columns:e,rows:t}){const r=(e||[]).filter(n=>!mr(n));return o.jsx("div",{className:"dl-scrollbar",style:{overflowX:"auto"},children:o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13,minWidth:780},children:[o.jsx("thead",{children:o.jsx("tr",{style:{background:"#1f2937",color:"white"},children:r.map(n=>o.jsx("th",{dir:"auto",style:{...ar,padding:"10px 12px",borderBottom:"1px solid #384250",color:"white"},children:n},n))})}),o.jsx("tbody",{children:t.slice(0,200).map((n,a)=>o.jsx("tr",{children:r.map(s=>o.jsx("td",{dir:"auto",style:Or,children:dr(n[s])},s))},a))})]})})}function rg({rows:e}){return e!=null&&e.length?o.jsx("div",{className:"dl-scrollbar",style:{overflowX:"auto",marginTop:10},children:o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13,minWidth:640},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{background:"#f2eee6",color:"#344054"},children:[o.jsx("th",{style:ar,dir:"auto",children:"Field"}),o.jsx("th",{style:ar,dir:"auto",children:"Before"}),o.jsx("th",{style:ar,dir:"auto",children:"After"})]})}),o.jsx("tbody",{children:e.map((t,r)=>o.jsxs("tr",{children:[o.jsx("td",{style:Or,dir:"auto",children:t.field||t.column||t.name||"-"}),o.jsx("td",{style:{...Or,color:Q.DELETED.text},dir:"auto",children:dr(t.before??t.base??t.old)}),o.jsx("td",{style:{...Or,color:Q.ADDED.text},dir:"auto",children:dr(t.after??t.target??t.new)})]},r))})]})}):null}function ng({runId:e,meta:t,tab:r,setTab:n}){return o.jsxs(o.Fragment,{children:[o.jsx(sg,{meta:t}),o.jsx(og,{tab:r,setTab:n}),o.jsxs("main",{style:{...ft,padding:12},children:[r==="overview"&&o.jsx(ig,{runId:e,meta:t}),r==="tables"&&o.jsx(lg,{runId:e}),r==="text"&&o.jsx(cg,{runId:e}),r==="json"&&o.jsx(ug,{runId:e,meta:t})]}),o.jsxs("section",{className:"workspace-surface extraction-query-surface",style:{marginTop:12},children:[o.jsx("div",{className:"surface-title-row",children:o.jsxs("div",{children:[o.jsx("h3",{children:"Ask This Extraction"}),o.jsx("p",{children:"Search the extracted text, tables, headings, and page evidence from this document."})]})}),o.jsx(ag,{runId:e})]})]})}function ag({runId:e}){const[t,r]=b.useState(""),[n,a]=b.useState([]),[s,i]=b.useState(!1),l=async()=>{const c=t.trim();if(!c||s)return;const u=`extract-user-${Date.now()}`,m=`extract-answer-${Date.now()}`;a(f=>[...f,{id:u,role:"user",text:c,timestamp:new Date().toLocaleTimeString()}]),r(""),i(!0);try{const f=await fetch(`${V}/extract-runs/${e}/query`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:c,mode:"fast"})});if(!f.ok)throw new Error(await se(f));const g=await f.json();a(v=>{var y;return[...v,{id:m,role:"assistant",text:g.answer||`Found ${((y=g.rows)==null?void 0:y.length)||0} matching passages.`,rows:g.rows||[],columns:g.columns||["Page","Type","Path","Text","Score"],timestamp:new Date().toLocaleTimeString()}]})}catch(f){a(g=>[...g,{id:m,role:"assistant",text:oe(f),rows:[],timestamp:new Date().toLocaleTimeString(),isError:!0}])}finally{i(!1)}};return o.jsxs("section",{className:"query-workbench",children:[n.length===0?o.jsx(hr,{label:"Ask about clauses, tables, fields, dates, page content, or extracted values."}):o.jsx("div",{className:"query-chat-log",children:n.map(c=>{var u;return o.jsxs("article",{className:`query-message ${c.role}${c.isError?" error":""}`,children:[o.jsxs("div",{className:"query-message-meta",children:[o.jsx("span",{children:c.role==="user"?"You":"Extraction query"}),o.jsx("span",{children:c.timestamp})]}),o.jsx("div",{className:"query-message-text",dir:"auto",children:c.text}),((u=c.rows)==null?void 0:u.length)>0&&o.jsx("div",{className:"query-results-shell",style:{marginTop:10},children:o.jsx(sr,{columns:c.columns,rows:c.rows})})]},c.id)})}),o.jsxs("div",{className:"query-composer",children:[o.jsx("textarea",{value:t,onChange:c=>r(c.target.value),onKeyDown:c=>{c.key==="Enter"&&!c.shiftKey&&(c.preventDefault(),l())},placeholder:"Ask about the extracted document...",disabled:s,rows:3}),o.jsx("div",{className:"query-composer-actions",children:o.jsx("button",{type:"button",className:"primary-action compact",onClick:l,disabled:s||!t.trim(),children:s?"Searching":"Ask"})})]})]})}function sg({meta:e}){var r,n;const t=e.summary||{};return o.jsxs("section",{style:{...ft,padding:12,display:"flex",gap:8,marginBottom:12,flexWrap:"wrap",alignItems:"center"},children:[o.jsx(we,{label:"Format",value:(e.source_format||"-").toUpperCase()}),o.jsx(we,{label:"Documents",value:((r=e.documents)==null?void 0:r.length)||t.document_count||1}),o.jsx(we,{label:"Coverage",value:typeof e.coverage=="number"?`${e.coverage.toFixed(1)}%`:"-"}),o.jsx(we,{label:"Quality",value:t.quality||"-"}),o.jsx(we,{label:"Tables",value:t.table_count||0}),o.jsx(we,{label:"Blocks",value:Object.values(t.block_counts||{}).reduce((a,s)=>a+Number(s||0),0)}),o.jsx(we,{label:"Pages",value:e.n_pages||e.native_pages||0}),Number(((n=e.ai_usage)==null?void 0:n.total_tokens)||0)>0&&o.jsx(we,{label:"AI tokens",value:`${wt(e.ai_usage.total_tokens)} (${wt(e.ai_usage.calls||0)} calls)`})]})}function og({tab:e,setTab:t}){const r=[["overview","Extraction overview"],["tables","Extracted tables"],["text","Text blocks"],["json","Structured JSON"]];return o.jsx("nav",{style:{display:"flex",gap:4,borderBottom:"1px solid #d8d0c3",marginBottom:12,overflowX:"auto"},children:r.map(([n,a])=>{const s=e===n;return o.jsx("button",{onClick:()=>t(n),style:{padding:"10px 14px",background:s?"#1f2937":"transparent",color:s?"white":"#344054",border:s?"1px solid #1f2937":"1px solid transparent",borderRadius:"8px 8px 0 0",cursor:"pointer",fontWeight:600,whiteSpace:"nowrap"},children:a},n)})})}function ig({runId:e,meta:t}){const r=t.summary||{},n=t.ai_analysis,a=(n==null?void 0:n.result)||null;return o.jsxs("div",{children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12,flexWrap:"wrap",marginBottom:12},children:[o.jsxs("div",{children:[o.jsx("h2",{style:{margin:0,fontSize:18,fontWeight:650},dir:"auto",children:t.label||"Extracted document"}),o.jsx("p",{style:{margin:"6px 0 0",color:"#667085",fontSize:13},dir:"auto",children:r.message||"Extraction complete."})]}),o.jsx("button",{onClick:()=>{window.location.href=`${V}/extract-runs/${e}/json`},style:Sh(!1),children:"Download JSON"})]}),o.jsxs("div",{className:"report-metrics",style:{display:"grid",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",gap:10,marginBottom:12},children:[o.jsx(ca,{label:"Extraction coverage",value:typeof t.coverage=="number"?`${t.coverage.toFixed(1)}%`:"-"}),o.jsx(ca,{label:"Tables detected",value:r.table_count||0}),o.jsx(ca,{label:"Table rows",value:r.table_row_count||0}),o.jsx(ca,{label:"Image/OCR blocks",value:r.figure_count||0})]}),o.jsxs("div",{style:{...ft,padding:14,boxShadow:"none",marginBottom:12},children:[o.jsx("div",{style:{fontWeight:650,marginBottom:8},children:"Block breakdown"}),o.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[Object.entries(r.block_counts||{}).map(([s,i])=>o.jsx(we,{label:s.replace("_"," "),value:i},s)),Object.keys(r.block_counts||{}).length===0&&o.jsx("span",{style:{color:"#667085"},children:"No block statistics available."})]})]}),n&&o.jsxs("div",{style:{...ft,padding:14,boxShadow:"none"},children:[o.jsxs("div",{style:{fontWeight:650,marginBottom:8},children:["AI-assisted analysis ",n.available?"- available":"- unavailable"]}),!n.available&&o.jsx("div",{style:{color:Q.DELETED.text},dir:"auto",children:normalizeErrorMessage(n.error)||"AI analysis was not generated."}),a&&o.jsxs("div",{style:{color:"#344054",lineHeight:1.5},children:[o.jsx("p",{style:{marginTop:0},dir:"auto",children:a.executive_summary||"AI analysis completed."}),Array.isArray(a.key_items)&&a.key_items.length>0&&o.jsx(sr,{columns:["Item"],rows:a.key_items.slice(0,20).map(s=>({Item:typeof s=="string"?s:JSON.stringify(s)}))})]})]}),o.jsx(Mh,{usage:t.ai_usage})]})}function ca({label:e,value:t}){return o.jsxs("div",{style:{background:"#fbfaf6",border:"1px solid #ded6c8",borderRadius:8,padding:12},children:[o.jsx("div",{style:{fontSize:12,color:"#667085",fontWeight:600},children:e}),o.jsx("div",{style:{marginTop:4,fontSize:22,color:"#1f2937",fontWeight:650},children:t})]})}function lg({runId:e}){const[t,r]=b.useState({loading:!0,error:"",tables:[]});return b.useEffect(()=>{let n=!1;return r({loading:!0,error:"",tables:[]}),fetch(`${V}/extract-runs/${e}/tables?include_rows=true`).then(async a=>{if(!a.ok)throw new Error(await se(a));return a.json()}).then(a=>{n||r({loading:!1,error:"",tables:a.tables||[]})}).catch(a=>{n||r({loading:!1,error:oe(a),tables:[]})}),()=>{n=!0}},[e]),t.loading?o.jsx(Wn,{label:"Loading extracted tables..."}):t.error?o.jsx(Qi,{message:t.error}):t.tables.length?o.jsx("div",{style:{display:"grid",gap:12},children:t.tables.map(n=>o.jsxs("div",{style:{...ft,padding:12,boxShadow:"none"},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12,flexWrap:"wrap",marginBottom:8},children:[o.jsxs("div",{children:[o.jsx("div",{style:{fontWeight:650},dir:"auto",children:n.display_name||n.title||"Detected table"}),o.jsxs("div",{style:{color:"#667085",fontSize:13,marginTop:3},dir:"auto",children:[n.page_label," · ",n.n_columns," columns · ",n.n_rows," rows · header quality ",Math.round((n.header_quality||0)*100),"%",n.extraction_confidence?` · extraction ${Math.round(n.extraction_confidence*100)}%`:""]})]}),o.jsx("code",{children:String(n.id||"").slice(0,8)})]}),Array.isArray(n.quality_warnings)&&n.quality_warnings.length>0&&o.jsxs("div",{style:{color:"#8a5a00",fontSize:13,marginBottom:8},dir:"auto",children:["Review note: ",n.quality_warnings.slice(0,2).join(" ")]}),o.jsxs("div",{style:{color:"#475467",fontSize:13,marginBottom:8},dir:"auto",children:["Columns: ",(n.columns||[]).slice(0,12).join(" | ")||"No columns detected"]}),o.jsx(tg,{columns:n.columns||[],rows:n.rows||n.row_preview||[]})]},n.id))}):o.jsx(hr,{label:"No tables were detected in this document."})}function cg({runId:e}){const[t,r]=b.useState({loading:!0,error:"",blocks:[]});if(b.useEffect(()=>{let a=!1;return r({loading:!0,error:"",blocks:[]}),fetch(`${V}/extract-runs/${e}/blocks?limit=1000`).then(async s=>{if(!s.ok)throw new Error(await se(s));return s.json()}).then(s=>{a||r({loading:!1,error:"",blocks:s.blocks||[]})}).catch(s=>{a||r({loading:!1,error:oe(s),blocks:[]})}),()=>{a=!0}},[e]),t.loading)return o.jsx(Wn,{label:"Loading extracted text blocks..."});if(t.error)return o.jsx(Qi,{message:t.error});const n=t.blocks.filter(a=>a.text||a.type==="table").slice(0,500).map(a=>({Page:a.page_number,Type:a.type,Path:a.path,Text:Ke(a.text||JSON.stringify(a.payload||{}),700)}));return n.length?o.jsx(sr,{columns:["Page","Type","Path","Text"],rows:n}):o.jsx(hr,{label:"No extracted text blocks were returned."})}function ug({runId:e,meta:t}){const[r,n]=b.useState({loading:!0,error:"",data:null});if(b.useEffect(()=>{let f=!1;return n({loading:!0,error:"",data:null}),Eh(e).then(g=>{f||n({loading:!1,error:"",data:g})}).catch(g=>{f||n({loading:!1,error:oe(g),data:null})}),()=>{f=!0}},[e]),r.loading)return o.jsx(Wn,{label:"Building structured JSON preview..."});if(r.error)return o.jsx(Qi,{message:r.error});const a=r.data||{},s=a.tables||[],i=a.pages||[],l=a.content||i.flatMap(f=>f.content||[]),c=a.document_summary||{},u=c.extraction_quality||{},m=l.map(f=>f.inferred_record).filter(Boolean);return o.jsxs("div",{style:{display:"grid",gap:12},children:[o.jsxs("div",{style:{...ft,padding:12,boxShadow:"none"},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12,alignItems:"flex-start",flexWrap:"wrap"},children:[o.jsxs("div",{children:[o.jsx("div",{style:{fontWeight:650,marginBottom:8},dir:"auto",children:"Business extraction summary"}),o.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",color:"#344054",fontSize:13},children:[o.jsxs("span",{style:vr,children:["Document: ",c.label||t.label||"uploaded file"]}),o.jsxs("span",{style:vr,children:["Type: ",c.source_type||t.source_format||"document"]}),o.jsxs("span",{style:vr,children:["Template: ",c.detected_template||"generic document"]}),o.jsxs("span",{style:vr,children:["Quality: ",u.grade||"not rated"]}),Number.isFinite(u.score)&&o.jsxs("span",{style:vr,children:["Score: ",Math.round(u.score*100),"%"]}),c.detected_language&&o.jsxs("span",{style:vr,children:["Script: ",c.detected_language]})]})]}),o.jsx("button",{onClick:()=>{window.location.href=`${V}/extract-runs/${e}/json`},style:_h(),children:"Download clean JSON"})]}),Array.isArray(u.warnings)&&u.warnings.length>0&&o.jsx("div",{style:{color:"#8a5a00",fontSize:13,marginTop:8,lineHeight:1.4},dir:"auto",children:u.warnings.slice(0,3).map(f=>f.message||f).join(" ")})]}),o.jsxs("div",{style:{...ft,padding:12,boxShadow:"none"},children:[o.jsx("div",{style:{display:"flex",justifyContent:"space-between",gap:10,alignItems:"center",marginBottom:8},children:o.jsxs("div",{children:[o.jsx("div",{style:{fontWeight:650},children:"Document-order extracted text"}),o.jsxs("div",{style:{color:"#667085",fontSize:13,marginTop:3},children:[l.length," text block(s), ",m.length," inferred record(s), ",s.length," table(s), ",i.length," page(s)"]})]})}),l.length>0?o.jsx(sr,{columns:["Page","Type","Path","Text","Inferred record"],rows:l.slice(0,500).map(f=>({Page:f.page,Type:f.type,Path:f.path,Text:Ke(f.text,900),"Inferred record":f.inferred_record?yc(f.inferred_record.values):""}))}):o.jsx(hr,{label:"No ordered text content was returned. Check the Text blocks tab."})]}),m.length>0&&o.jsxs("div",{style:{...ft,padding:12,boxShadow:"none"},children:[o.jsx("div",{style:{fontWeight:650,marginBottom:8},children:"Inferred business records"}),o.jsx(sr,{columns:["Page","Values","Source text","Citation"],rows:m.slice(0,120).map(f=>({Page:f.page,Values:yc(f.values),"Source text":Ke(f.source_text,700),Citation:f.citation}))})]}),s.length>0&&o.jsxs("div",{style:{...ft,padding:12,boxShadow:"none"},children:[o.jsx("div",{style:{fontWeight:650,marginBottom:8},children:"Extracted tables"}),o.jsx(sr,{columns:["title","page","area","row_count","columns"],rows:s.slice(0,30).map(f=>({title:f.title,page:f.page,area:f.area,row_count:f.row_count,columns:(f.columns||[]).join(" | ")}))})]}),o.jsxs("div",{style:{...ft,padding:12,boxShadow:"none"},children:[o.jsx("div",{style:{fontWeight:650,marginBottom:8},children:"Clean JSON preview"}),o.jsx("pre",{className:"dl-scrollbar",style:{margin:0,maxHeight:360,overflow:"auto",background:"#fbfaf6",border:"1px solid #e0d8ca",borderRadius:8,padding:12,fontSize:12,lineHeight:1.45,whiteSpace:"pre-wrap"},children:JSON.stringify({document_summary:a.document_summary,content:l.slice(0,30),tables:s.slice(0,10)},null,2)})]})]})}function Qi({message:e}){return o.jsx("div",{style:{marginTop:16,border:"1px solid #f0b4b4",background:"#fff5f5",color:"#9f1d1d",borderRadius:8,padding:13,fontSize:14,fontWeight:600,lineHeight:1.45},children:e})}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ap=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=b.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:a="",children:s,iconNode:i,...l},c)=>b.createElement("svg",{ref:c,...pg,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:ap("lucide",a),...l},[...i.map(([u,m])=>b.createElement(u,m)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=(e,t)=>{const r=b.forwardRef(({className:n,...a},s)=>b.createElement(fg,{ref:s,iconNode:t,className:ap(`lucide-${dg(e)}`,n),...a}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=gr("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=gr("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=gr("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=gr("FileOutput",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2",key:"1vk7w2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6",key:"1jink5"}],["path",{d:"m5 11-3 3",key:"1dgrs4"}],["path",{d:"m5 17-3-3h10",key:"1mvvaf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=gr("GitCompare",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=gr("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=gr("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);function bg(){return o.jsxs("div",{className:"altrai-wordmark","aria-label":"Altrai",children:[o.jsx("span",{children:"Altr"}),o.jsx("span",{className:"accent",children:"ai"})]})}const kg=[{label:"AI Document Intelligence",items:[{key:"compare",label:"Compare",icon:vg},{key:"extract",label:"Extract",icon:xg},{key:"jobs",label:"Work History",icon:yg}]},{label:"Administration",items:[{key:"admin",label:"Admin Studio",icon:wg,title:"Use cases, datasets, and access policies"}]},{label:"AI Agents",items:[{key:"agents",label:"Coming soon",icon:mg,disabled:!0,title:"Future skills and multi-agent workflows"}]}];function jg({workspace:e,onNavigate:t,collapsed:r=!1}){return o.jsx("nav",{className:"workspace-nav","aria-label":"Workspace navigation",children:kg.map(n=>o.jsxs("div",{className:"workspace-nav-group",children:[!r&&o.jsx("div",{className:"workspace-nav-label",children:n.label}),n.items.map(a=>{const s=e===a.key;return o.jsxs("button",{type:"button",className:`workspace-nav-item${s?" active":""}`,onClick:()=>!a.disabled&&t(a.key),disabled:a.disabled,title:r?a.title||a.label:a.title,children:[o.jsx(a.icon,{className:"workspace-nav-icon","aria-hidden":"true"}),!r&&o.jsx("span",{className:"workspace-nav-text",children:a.label})]},`${n.label}-${a.label}-${a.key}`)})]},n.label))})}const sp=b.createContext(null),Cc="altrai_theme";function Sg({children:e}){const[t,r]=b.useState(()=>typeof window>"u"?"system":window.localStorage.getItem(Cc)||"system");b.useEffect(()=>{document.documentElement.dataset.theme=t,window.localStorage.setItem(Cc,t)},[t]);const n=b.useMemo(()=>({theme:t,setTheme:r}),[t]);return o.jsx(sp.Provider,{value:n,children:e})}function op(){const e=b.useContext(sp);if(!e)throw new Error("useTheme must be used within ThemeProvider");return e}const _g=[["system","Auto"],["light","Light"],["dark","Dark"]];function Eg({collapsed:e=!1}){const{theme:t,setTheme:r}=op();return o.jsxs("footer",{className:"user-footer",children:[o.jsx("div",{className:"user-avatar","aria-hidden":"true",children:"N"}),!e&&o.jsxs("div",{className:"user-meta",children:[o.jsx("strong",{children:"Nithin"}),o.jsx("span",{children:"platform_admin"})]}),!e&&o.jsx("div",{className:"rail-theme-toggle","aria-label":"Theme selector",children:_g.map(([n,a])=>o.jsx("button",{type:"button",className:t===n?"active":"",onClick:()=>r(n),children:a},n))})]})}const Ng={jobs:"Work History",compare:"Compare",extract:"Extract",agents:"AI Agents",admin:"Admin Studio"},Cg={compare:{label:"Comparison History",historyKind:"comparison"},extract:{label:"Extraction History",historyKind:"extraction"}};function zg({workspace:e,runId:t,onNavigate:r,onDownloadReport:n,children:a}){const[s,i]=b.useState(!1),{theme:l}=op(),c=Cg[e];return o.jsxs("div",{className:`workspace-shell theme-${l}${s?" collapsed":""}`,children:[o.jsxs("aside",{className:"workspace-sidebar",children:[o.jsxs("div",{className:"workspace-brand",children:[o.jsx("div",{className:"workspace-brand-copy",children:o.jsx(bg,{})}),o.jsx("button",{type:"button",className:"workspace-collapse-button",onClick:()=>i(u=>!u),"aria-label":s?"Expand navigation":"Collapse navigation",title:s?"Expand navigation":"Collapse navigation",children:s?o.jsx(gg,{size:16,strokeWidth:1.5}):o.jsx(hg,{size:16,strokeWidth:1.5})})]}),o.jsx(jg,{workspace:e,onNavigate:r,collapsed:s}),o.jsx(Eg,{collapsed:s})]}),o.jsxs("section",{className:"workspace-main",children:[o.jsxs("header",{className:"workspace-topbar",children:[o.jsx("div",{children:o.jsx("h1",{children:Ng[e]||"Workspace"})}),o.jsxs("div",{className:"workspace-actions",children:[t&&o.jsx("button",{type:"button",className:"workspace-primary-action",onClick:n,children:"Export report"}),c&&o.jsx("button",{type:"button",className:"workspace-secondary-action",onClick:()=>r("jobs",{historyKind:c.historyKind}),children:c.label})]})]}),o.jsx("div",{className:"workspace-content",children:a})]})]})}const Pg=[["platform_admin","Platform Admin"],["business_unit_admin","Business Unit Admin"],["reviewer","Reviewer"],["submitter","Submitter"],["viewer","Viewer"]],zc={supplier:"",family_name:"",domain:"generic",description:"",use_case_type:"comparison",expected_formats:["pdf","docx"],sample_plan:"",onboarding_notes:"",learning_mode:"ai_assisted_bootstrap",allowed_roles:[]},Tg=[["pdf","PDF"],["docx","Word"],["xlsx","Excel"],["csv","CSV/TSV"],["image","Scanned image"]],Dg=[["deterministic_first","Deterministic first"],["ai_assisted_bootstrap","AI-assisted bootstrap"],["manual_profile","Manual profile"]],$g=()=>({id:crypto.randomUUID(),baseline:null,revised:null});function Rg(){var Xi,Zi,el,tl;const[e,t]=b.useState([]),[r,n]=b.useState(""),[a,s]=b.useState(null),[i,l]=b.useState(zc),[c,u]=b.useState({supplier:"",family_name:"",domain:"generic",description:""}),[m,f]=b.useState(""),[g,v]=b.useState([]),[y,x]=b.useState(""),[j,p]=b.useState({use_case_type:"comparison",expected_formats:["pdf","docx"],sample_plan:"",onboarding_notes:"",learning_mode:"ai_assisted_bootstrap"}),[d,h]=b.useState({baseline:null,revised:null,variationPairs:[]}),[w,S]=b.useState(!0),[N,C]=b.useState(null),[z,$]=b.useState(""),[R,W]=b.useState(null),[je,Ie]=b.useState(null),[zt,Ve]=b.useState(null),[Xe,Se]=b.useState(0),[E,T]=b.useState({baseline:null,revised:null,variations:[]}),[I,H]=b.useState([]),[ne,Ze]=b.useState(!0),[G,L]=b.useState(""),[A,O]=b.useState(""),[Z,M]=b.useState(""),le=()=>({"Content-Type":"application/json","X-User-Role":window.sessionStorage.getItem("simulated_role")||"platform_admin"}),Ae=async()=>{Ze(!0),O("");try{const k=await yr("/admin/datasets",{headers:le()});t(k.datasets||[])}catch(k){O(oe(k))}finally{Ze(!1)}};b.useEffect(()=>{Ae(),Ki()},[]),b.useEffect(()=>{if(G!=="analyze"&&G!=="create")return;const k=Date.now();Se(0);const D=window.setInterval(()=>{Se(Math.floor((Date.now()-k)/1e3))},1e3);return()=>window.clearInterval(D)},[G]);const Ki=async()=>{try{const k=await yr("/ai-health");C(k);const D=(k.models||[]).find(U=>U.kind==="chat"&&U.configured);D!=null&&D.id&&$(D.id)}catch{C({ok:!1,models:[],message:"AI model status is unavailable."})}},Vn=async k=>{var D;n(k),O(""),M("");try{const U=await yr(`/admin/datasets/${k}`,{headers:le()});s(U),u({supplier:U.supplier||"",family_name:U.family_name||"",domain:U.domain||"generic",description:U.description||""}),f(U.prompt_guidelines||""),v(U.allowed_roles||[]),p({use_case_type:U.use_case_type||"comparison",expected_formats:U.expected_formats||["pdf","docx"],sample_plan:U.sample_plan||"",onboarding_notes:U.onboarding_notes||"",learning_mode:U.learning_mode||"deterministic_first"}),x(JSON.stringify(((D=U.template_profile)==null?void 0:D.column_rules)||[],null,2)),await lp(k)}catch(U){O(oe(U))}},lp=async k=>{try{const D=await yr(`/admin/datasets/${k}/documents`,{headers:le()});H(D.documents||[])}catch{H([])}},cp=async k=>{k.preventDefault(),L("create"),O(""),M("");const D=qs(d);Ve({status:"running",stage:"create",submitted:D,startedAt:new Date().toISOString(),error:""});try{const U=await Hg("/admin/datasets",{method:"POST",headers:le(),body:JSON.stringify(i)});let _e="",xe="";if(U.id&&ua(d)){Ve(Pe=>({...Pe||{},stage:"samples"}));try{await Gi(U.id,d,i.onboarding_notes,i.learning_mode==="ai_assisted_bootstrap"),_e=" Sample documents learned and model profile bootstrapped."}catch(Pe){xe=` Sample learning did not finish: ${oe(Pe)}`}}Ve(Pe=>({...Pe||{},status:"success",stage:"done",datasetId:U.id,sampleWarning:xe,finishedAt:new Date().toISOString()})),M(`Use case created.${_e||xe||" You can attach or relearn samples from the saved use case."}`),l(zc),h({baseline:null,revised:null,variationPairs:[]}),W(null);try{await Ae(),U.id&&await Vn(U.id)}catch{M(`Use case created.${_e||xe||""} Refresh the use case list if it does not appear immediately.`)}}catch(U){const _e=oe(U);O(_e),Ve(xe=>({...xe||{},status:"failed",finishedAt:new Date().toISOString(),error:_e}))}finally{L("")}},up=k=>{try{const D=Dc(y);if(D.some(_e=>_e.role===k)){M(`A rule for label '${k}' already exists.`);return}const U=[...D,{pattern:`.*${k.toLowerCase().replace(/_/g,".*")}.*`,role:k}];x(JSON.stringify(U,null,2)),M(`Added suggested mapping rule for '${k}'. Click 'Save profile settings' to apply.`)}catch{O("Column rules JSON is malformed. Please fix it before adding labels.")}},dp=async()=>{if(r){L("save"),O(""),M("");try{await yr(`/admin/datasets/${r}`,{method:"PUT",headers:le(),body:JSON.stringify({prompt_guidelines:m,allowed_roles:g,column_rules:Dc(y),...c,...j})}),M("Use case settings saved."),await Ae(),await Vn(r)}catch(k){O(oe(k))}finally{L("")}}},pp=async k=>{if(k.preventDefault(),!(!r||!ua(E))){L("bootstrap"),O(""),M("");try{await Gi(r,E,j.onboarding_notes||"",j.learning_mode==="ai_assisted_bootstrap"),M("Sample documents learned and model profile updated."),T({baseline:null,revised:null,variations:[]}),await Vn(r)}catch(D){O(oe(D))}finally{L("")}}},Gi=async(k,D,U,_e)=>{const xe=new FormData;D.baseline&&xe.append("baseline",D.baseline),D.revised&&xe.append("revised",D.revised),hs(D).forEach(gs=>xe.append("variations",gs)),xe.append("notes",U||""),xe.append("use_llm",String(_e));const Pe=await fp(k,xe);if(!Pe.ok)throw new Error(await se(Pe));return Pe.json()},fp=async(k,D)=>{const U=()=>{const Pe=new FormData;for(const[gs,yp]of D.entries())Pe.append(gs,yp);return Pe},_e=Pe=>fetch(`${V}${Pe}`,{method:"POST",headers:{"X-User-Role":window.sessionStorage.getItem("simulated_role")||"platform_admin"},body:U()}),xe=await _e(`/admin/datasets/${k}/samples`);return xe.status!==404?xe:_e(`/api/admin/datasets/${k}/samples`)},mp=async()=>{if(ua(d)){if(w&&!z){O("Select a configured AI model before running AI-assisted sample analysis.");return}L("analyze"),O(""),M(""),W(null),Ie({status:"running",mode:w?"ai":"deterministic",model:w?z:"",submitted:qs(d),startedAt:new Date().toISOString(),error:""});try{const k=await Mg({files:d,form:i,useAiAnalysis:w,selectedModel:z});if(!k.ok)throw new Error(await se(k));const D=await k.json(),U=D.suggested_dataset||{};W(D),Ie(_e=>({..._e||{},status:"success",finishedAt:new Date().toISOString(),backendUsage:Ig(D),model:D.selected_model||z})),l({...i,...U,allowed_roles:i.allowed_roles||[],learning_mode:w?"ai_assisted_bootstrap":"deterministic_first"}),M(w?"Sample analysis complete. Review the suggested use case model before creating it.":"Deterministic sample scan complete. Review the suggested use case model before creating it.")}catch(k){const D=oe(k);O(D),Ie(U=>({...U||{},status:"failed",finishedAt:new Date().toISOString(),error:D}))}finally{L("")}}},hp=async()=>{if(!(!r||!a||!window.confirm(`Delete use case "${a.supplier} · ${a.family_name}"? This removes the saved model profile from Admin Studio.`))){L("delete"),O(""),M("");try{await yr(`/admin/datasets/${r}`,{method:"DELETE",headers:le()}),M("Use case deleted."),n(""),s(null),H([]),await Ae()}catch(D){O(oe(D))}finally{L("")}}},Ji=qs(d),qn=ua(d),Yi=w&&!z,gp=!qn||G==="analyze"||Yi,xp=G==="analyze"?"Analyzing samples":w?"Analyze samples with AI":"Scan samples without AI",vp=qn?Yi?"Select an available chat model before AI analysis.":w?"Ready to send selected samples and context to the model.":"Ready for deterministic structure scan. No AI tokens will be used.":"Attach a baseline, revised, or variation sample to start.";return o.jsxs("section",{className:"admin-studio",children:[o.jsx("div",{className:"admin-intro",children:o.jsxs("div",{children:[o.jsx("h2",{children:"Use Case Onboarding"}),o.jsx("p",{children:"Create document models from representative samples. Use AI to suggest metadata, then keep governance and access settings with the saved use case."})]})}),Z&&o.jsx("div",{className:"admin-notice",children:Z}),A&&o.jsx(An,{message:A}),o.jsxs("div",{className:"admin-grid",children:[o.jsxs("aside",{className:"admin-panel",children:[o.jsxs("div",{className:"admin-panel-head",children:[o.jsx("h3",{children:"Use Cases"}),o.jsx("button",{type:"button",className:"ghost-action compact",onClick:Ae,children:"Refresh"})]}),ne?o.jsx(Wn,{label:"Loading use cases"}):e.length===0?o.jsx(hr,{label:"No use cases onboarded yet."}):o.jsx("div",{className:"dataset-list",children:e.map(k=>o.jsxs("button",{type:"button",className:`dataset-item${r===k.id?" active":""}`,onClick:()=>Vn(k.id),children:[o.jsx("strong",{children:k.supplier}),o.jsx("span",{children:k.family_name}),o.jsxs("small",{children:[k.use_case_type||"comparison"," · ",(k.expected_formats||[]).join(", ")||"formats"," · ",(k.allowed_roles||[]).length||"all"," roles"]})]},k.id))})]}),o.jsxs("main",{className:"admin-panel",children:[o.jsx("div",{className:"admin-panel-head",children:o.jsxs("div",{children:[o.jsx("h3",{children:"Onboard Document Model"}),o.jsx("p",{children:"Start with baseline, revised, or layout samples. The platform learns the structure and suggests the use-case metadata."})]})}),o.jsxs("form",{className:"admin-form onboarding-flow",onSubmit:cp,children:[o.jsxs("section",{className:"admin-review-card",children:[o.jsxs("div",{children:[o.jsx("h4",{children:"Use Case Identity"}),o.jsx("p",{children:"Define the business model before uploading samples. Analysis will use these values as context instead of guessing from file names."})]}),o.jsxs("div",{className:"admin-review-grid",children:[o.jsxs("label",{children:["Supplier or entity",o.jsx("input",{value:i.supplier,required:!0,onChange:k=>l({...i,supplier:k.target.value}),placeholder:"Ford, HR, Finance, Legal"})]}),o.jsxs("label",{children:["Use case or family",o.jsx("input",{value:i.family_name,required:!0,onChange:k=>l({...i,family_name:k.target.value}),placeholder:"Order Guide, Policy, Contract"})]}),o.jsxs("label",{children:["Use case type",o.jsxs("select",{value:i.use_case_type,onChange:k=>l({...i,use_case_type:k.target.value}),children:[o.jsx("option",{value:"comparison",children:"Comparison"}),o.jsx("option",{value:"extraction",children:"Extraction"})]})]}),o.jsxs("label",{children:["Domain",o.jsxs("select",{value:i.domain,onChange:k=>l({...i,domain:k.target.value}),children:[o.jsx("option",{value:"generic",children:"Generic"}),o.jsx("option",{value:"automotive",children:"Automotive"}),o.jsx("option",{value:"legal",children:"Legal"}),o.jsx("option",{value:"financial",children:"Financial"}),o.jsx("option",{value:"hr",children:"HR"}),o.jsx("option",{value:"engineering",children:"Engineering"})]})]}),o.jsx("div",{className:"admin-wide-field",children:o.jsx(Tc,{value:i.expected_formats,onChange:k=>l({...i,expected_formats:k})})})]})]}),o.jsxs("section",{className:"sample-intake-card",children:[o.jsxs("div",{className:"sample-intake-head",children:[o.jsxs("div",{children:[o.jsx("h4",{children:"Training Samples"}),o.jsx("p",{children:"Attach one baseline and one revised document. Add variation pairs only when you have alternate layouts, suppliers, model years, or document structures."})]}),o.jsxs("label",{className:"ai-toggle",children:[o.jsx("input",{type:"checkbox",checked:w,onChange:k=>S(k.target.checked)}),"Analyze with AI model"]})]}),w?o.jsxs("div",{className:"model-select-row",children:[o.jsxs("label",{children:["Model deployment",o.jsx("select",{value:z,onChange:k=>$(k.target.value),children:Pc(N).length?Pc(N).map(k=>o.jsx("option",{value:k.id,children:k.label||k.id},k.id)):o.jsx("option",{value:"",children:"No configured chat model found"})})]}),o.jsx("button",{type:"button",className:"ghost-action compact",onClick:Ki,children:"Refresh models"}),o.jsx("span",{children:N!=null&&N.ok?"Model connection verified.":(N==null?void 0:N.message)||"Checking AI model status."})]}):null,o.jsxs("div",{className:"sample-pair-grid",children:[o.jsxs("label",{children:["Baseline sample",o.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>{var D;return h({...d,baseline:((D=k.target.files)==null?void 0:D[0])||null})}})]}),o.jsxs("label",{children:["Revised sample",o.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>{var D;return h({...d,revised:((D=k.target.files)==null?void 0:D[0])||null})}})]})]}),o.jsx(Ug,{value:d.variationPairs,onChange:k=>h({...d,variationPairs:k})}),o.jsxs("div",{className:"sample-actions analysis-action-row",children:[o.jsxs("button",{type:"button",className:"analyze-action-button",onClick:mp,disabled:gp,"aria-busy":G==="analyze",children:[o.jsx("span",{children:xp}),o.jsx("small",{children:w?z||"No model selected":"Deterministic mode"})]}),o.jsxs("div",{className:"analysis-readiness",children:[o.jsx("span",{className:qn?"ready":"blocked",children:qn?"Samples ready":"Waiting for samples"}),o.jsxs("span",{children:[vt(Ji.count)," file(s)"]}),o.jsx("span",{children:ip(Ji.totalBytes)}),o.jsx("span",{children:w?"AI-assisted metadata":"No AI tokens"}),o.jsx("small",{children:vp})]})]}),o.jsx(Og,{run:je,elapsedSeconds:Xe,useAiAnalysis:w,selectedModel:z})]}),R?o.jsx(Bg,{data:R}):null,o.jsxs("section",{className:"admin-review-card",children:[o.jsxs("div",{children:[o.jsx("h4",{children:"Generated Metadata"}),o.jsx("p",{children:"Analysis fills this section with document understanding, extraction focus, accuracy hints, and reviewer notes. You can also maintain it manually."})]}),o.jsxs("div",{className:"admin-review-grid",children:[o.jsxs("label",{children:["Content description",o.jsx("textarea",{value:i.description,onChange:k=>l({...i,description:k.target.value}),placeholder:"Describe the documents, expected fields, tables, identifiers, and business context."})]}),o.jsxs("label",{children:["Onboarding notes",o.jsx("textarea",{value:i.onboarding_notes,onChange:k=>l({...i,onboarding_notes:k.target.value}),placeholder:"Known pain points, nested headers, language handling, reviewer expectations, or accuracy targets."})]}),o.jsxs("label",{className:"admin-wide-field",children:["Sample strategy",o.jsx("textarea",{value:i.sample_plan,onChange:k=>l({...i,sample_plan:k.target.value}),placeholder:"How many baseline/revised/variation samples should represent this model?"})]})]})]}),o.jsx("button",{type:"submit",className:"primary-action",disabled:G==="create",children:G==="create"?"Creating":"Create use case"}),o.jsx(Fg,{run:zt,elapsedSeconds:Xe})]})]})]}),a?o.jsx("section",{className:"admin-panel",children:o.jsxs("div",{className:"admin-detail",children:[o.jsxs("div",{className:"admin-detail-head",children:[o.jsxs("div",{children:[o.jsx("h3",{children:"Refine Use Case"}),o.jsx("p",{children:"Edit the saved document model, access policy, and extraction guidance without creating a duplicate use case."}),o.jsxs("span",{className:"admin-model-badge",children:[j.use_case_type," model · ",(j.expected_formats||[]).join(", ")]})]}),o.jsxs("div",{className:"admin-detail-actions",children:[o.jsx("button",{type:"button",className:"primary-action compact",onClick:dp,disabled:G==="save",children:G==="save"?"Saving":"Save changes"}),o.jsx("button",{type:"button",className:"danger-action compact",onClick:hp,disabled:G==="delete",children:G==="delete"?"Deleting":"Delete"})]})]}),o.jsxs("div",{className:"admin-edit-shell",children:[o.jsxs("section",{className:"admin-review-card",children:[o.jsxs("div",{children:[o.jsx("h4",{children:"Model Identity"}),o.jsx("p",{children:"These fields control how the use case appears in Compare, Extract, and Work History."})]}),o.jsxs("div",{className:"admin-review-grid",children:[o.jsxs("label",{children:["Supplier or entity",o.jsx("input",{value:c.supplier,required:!0,onChange:k=>u({...c,supplier:k.target.value})})]}),o.jsxs("label",{children:["Use case or family",o.jsx("input",{value:c.family_name,required:!0,onChange:k=>u({...c,family_name:k.target.value})})]}),o.jsxs("label",{children:["Domain",o.jsxs("select",{value:c.domain,onChange:k=>u({...c,domain:k.target.value}),children:[o.jsx("option",{value:"generic",children:"Generic"}),o.jsx("option",{value:"automotive",children:"Automotive"}),o.jsx("option",{value:"legal",children:"Legal"}),o.jsx("option",{value:"financial",children:"Financial"}),o.jsx("option",{value:"hr",children:"HR"}),o.jsx("option",{value:"engineering",children:"Engineering"})]})]}),o.jsxs("label",{children:["Use case type",o.jsxs("select",{value:j.use_case_type,onChange:k=>p({...j,use_case_type:k.target.value}),children:[o.jsx("option",{value:"comparison",children:"Comparison"}),o.jsx("option",{value:"extraction",children:"Extraction"})]})]}),o.jsxs("label",{className:"admin-wide-field",children:["Description",o.jsx("textarea",{value:c.description,onChange:k=>u({...c,description:k.target.value}),placeholder:"Describe the document family, business purpose, and expected reviewer outcome."})]})]})]}),o.jsxs("section",{className:"admin-review-card",children:[o.jsxs("div",{children:[o.jsx("h4",{children:"Learning Profile"}),o.jsx("p",{children:"Refine how this model should learn from samples and which formats it should accept."})]}),o.jsxs("div",{className:"admin-config-grid",children:[o.jsxs("label",{children:["Learning mode",o.jsx("select",{value:j.learning_mode,onChange:k=>p({...j,learning_mode:k.target.value}),children:Dg.map(([k,D])=>o.jsx("option",{value:k,children:D},k))})]}),o.jsx("div",{className:"admin-wide-field",children:o.jsx(Tc,{value:j.expected_formats,onChange:k=>p({...j,expected_formats:k})})}),o.jsxs("label",{children:["Sample strategy",o.jsx("textarea",{value:j.sample_plan,onChange:k=>p({...j,sample_plan:k.target.value}),placeholder:"How many samples or variations should represent this model?"})]}),o.jsxs("label",{children:["Onboarding notes",o.jsx("textarea",{value:j.onboarding_notes,onChange:k=>p({...j,onboarding_notes:k.target.value}),placeholder:"Business context, known table layouts, accuracy targets, and reviewer comments."})]})]})]}),o.jsxs("section",{className:"admin-review-card",children:[o.jsxs("div",{children:[o.jsx("h4",{children:"Extraction Guidance"}),o.jsx("p",{children:"Optional instructions and column mappings used by deterministic extraction and AI-assisted bootstrapping."})]}),o.jsxs("div",{className:"admin-config-grid",children:[o.jsxs("label",{children:["Prompt and extraction guidelines",o.jsx("textarea",{value:m,onChange:k=>f(k.target.value),placeholder:"Example: prioritize PCB thickness, PCV code changes, nested pricing rows, or legal obligations."})]}),o.jsxs("label",{children:["Column rules JSON",o.jsx("textarea",{className:"mono",value:y,onChange:k=>x(k.target.value)})]})]})]}),o.jsxs("section",{className:"admin-review-card",children:[o.jsxs("div",{children:[o.jsx("h4",{children:"Access"}),o.jsx("p",{children:"Choose the roles allowed to see and use this model. Leave empty for all configured users."})]}),o.jsx(Wg,{value:g,onChange:v})]})]}),o.jsxs("form",{className:"seed-form",onSubmit:pp,children:[o.jsxs("div",{children:[o.jsx("h4",{children:"Sample Document Learning"}),o.jsx("p",{children:"For comparison models, upload a baseline, revised document, and any format/layout variations. The profile stores structure, page range, table signatures, stable keys, and reviewer guidance."})]}),o.jsxs("div",{className:"sample-upload-grid",children:[o.jsxs("label",{children:["Baseline sample",o.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>{var D;return T({...E,baseline:((D=k.target.files)==null?void 0:D[0])||null})}})]}),o.jsxs("label",{children:["Revised sample",o.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>{var D;return T({...E,revised:((D=k.target.files)==null?void 0:D[0])||null})}})]}),o.jsxs("label",{children:["Additional variations",o.jsx("input",{type:"file",multiple:!0,accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>T({...E,variations:Array.from(k.target.files||[])})})]})]}),o.jsx("button",{type:"submit",className:"primary-action",disabled:!E.baseline&&!E.revised&&E.variations.length===0||G==="bootstrap",children:G==="bootstrap"?"Learning":"Learn from samples"})]}),o.jsxs("div",{className:"admin-profile-grid",children:[o.jsx(Vg,{profile:(Xi=a.template_profile)==null?void 0:Xi.sample_profile}),o.jsx(Hs,{title:"Sample Documents",items:I,labelKey:"label",valueKey:"page_count"}),o.jsx(qg,{profile:(Zi=a.template_profile)==null?void 0:Zi.ai_reasoning_profile,onAddLabel:up}),o.jsx(Hs,{title:"Stable Keys",items:(el=a.template_profile)==null?void 0:el.stable_key_patterns,labelKey:"name",valueKey:"regex"}),o.jsx(Hs,{title:"Column Rules",items:(tl=a.template_profile)==null?void 0:tl.column_rules,labelKey:"role",valueKey:"pattern"})]})]})}):null]})}function ua(e){var t;return!!(e!=null&&e.baseline||e!=null&&e.revised||(t=e==null?void 0:e.variations)!=null&&t.length||hs(e).length)}function hs(e){const t=Array.isArray(e==null?void 0:e.variations)?e.variations:[],r=Array.isArray(e==null?void 0:e.variationPairs)?e.variationPairs.flatMap(n=>[n.baseline,n.revised].filter(Boolean)):[];return[...t,...r]}function Lg(e){return[e==null?void 0:e.baseline,e==null?void 0:e.revised,...hs(e)].filter(Boolean)}function qs(e){const t=Lg(e),r=t.reduce((n,a)=>n+Number(a.size||0),0);return{count:t.length,totalBytes:r,totalMb:r/(1024*1024),estimatedInputTokens:Math.max(1,Math.ceil(r/4)),files:t.map(n=>({name:n.name,size:n.size||0}))}}function ip(e){const t=Number(e||0);return t>=1024*1024?`${(t/(1024*1024)).toFixed(2)} MB`:t>=1024?`${(t/1024).toFixed(1)} KB`:`${t} B`}function vt(e){return new Intl.NumberFormat().format(Math.round(Number(e||0)))}function Pc(e){const t=Array.isArray(e==null?void 0:e.models)?e.models:[];return t.length?t.filter(r=>r.kind==="chat"):e!=null&&e.deployment?[{id:e.deployment,label:e.deployment,kind:"chat",configured:e.configured}]:[]}function Ig(e){var n,a,s;if(e!=null&&e.usage)return{prompt_tokens:Number(e.usage.prompt_tokens||0),completion_tokens:Number(e.usage.completion_tokens||0),total_tokens:Number(e.usage.total_tokens||0),estimated_prompt_tokens:Number(e.usage.estimated_prompt_tokens||0),prompt_chars:Number(e.usage.prompt_chars||0),calls:Number(e.usage.calls||0)};const t=[],r=(n=e==null?void 0:e.analysis)==null?void 0:n.usage;return r&&t.push(r),(s=(a=e==null?void 0:e.template_profile)==null?void 0:a.ai_reasoning_profile)!=null&&s.usage&&t.push(e.template_profile.ai_reasoning_profile.usage),t.reduce((i,l)=>({prompt_tokens:i.prompt_tokens+Number(l.prompt_tokens||0),completion_tokens:i.completion_tokens+Number(l.completion_tokens||0),total_tokens:i.total_tokens+Number(l.total_tokens||0),estimated_prompt_tokens:i.estimated_prompt_tokens+Number(l.estimated_prompt_tokens||0),prompt_chars:i.prompt_chars+Number(l.prompt_chars||0),calls:i.calls+Number(l.calls||(l.total_tokens?1:0))}),{prompt_tokens:0,completion_tokens:0,total_tokens:0,estimated_prompt_tokens:0,prompt_chars:0,calls:0})}function Ag({files:e,form:t,useAiAnalysis:r,selectedModel:n}){const a=new FormData;return e.baseline&&a.append("baseline",e.baseline),e.revised&&a.append("revised",e.revised),hs(e).forEach(s=>a.append("variations",s)),a.append("supplier",t.supplier||""),a.append("family_name",t.family_name||""),a.append("domain",t.domain||"generic"),a.append("use_case_type",t.use_case_type||"comparison"),a.append("expected_formats",(t.expected_formats||[]).join(",")),a.append("notes",t.onboarding_notes||t.sample_plan||""),a.append("use_llm",String(r)),a.append("model_name",r?n:""),a}async function Mg(e){const t=async a=>fetch(`${V}${a}`,{method:"POST",headers:{"X-User-Role":window.sessionStorage.getItem("simulated_role")||"platform_admin"},body:Ag(e)}),r=await t("/admin/analyze-use-case-samples");if(r.status!==404)return r;const n=await t("/admin/datasets/analyze-samples");if(n.status!==404)return n;throw new Error("Sample analyzer route is missing in the deployed backend revision. This is not a database schema issue. Rebuild and deploy the backend image that includes backend/routers/admin.py with POST /admin/analyze-use-case-samples.")}function Og({run:e,elapsedSeconds:t,useAiAnalysis:r,selectedModel:n}){if(!e)return null;const a=e.submitted||{},s=e.backendUsage||{},i=e.status==="running"?"Running":e.status==="success"?"Completed":"Failed",l=e.status==="success"?3:e.status==="failed"?1:Math.min(3,Math.floor(t/12)),c=[["prepare","Preparing upload context"],["extract","Extracting sample structure"],["model",r?`Invoking ${n||"selected model"}`:"Deterministic profile scan"],["metadata","Generating metadata suggestions"]];return o.jsxs("div",{className:`analysis-run-panel ${e.status}`,children:[o.jsxs("div",{className:"analysis-run-head",children:[o.jsxs("div",{children:[o.jsx("strong",{children:i}),o.jsx("span",{children:e.status==="running"?`${t}s elapsed`:e.finishedAt?"Run finished":"Waiting"})]}),o.jsx("small",{children:e.mode==="ai"?`AI model: ${e.model||n||"not selected"}`:"AI disabled"})]}),o.jsxs("div",{className:"analysis-run-metrics",children:[o.jsxs("span",{children:[vt(a.count)," file(s)"]}),o.jsx("span",{children:ip(a.totalBytes)}),o.jsxs("span",{children:["Upload-size estimate ",vt(a.estimatedInputTokens)," tokens"]}),e.mode==="ai"?o.jsxs(o.Fragment,{children:[o.jsxs("span",{children:["LLM prompt est. ",vt(s.estimated_prompt_tokens||0)," tokens"]}),o.jsxs("span",{children:["Prompt ",s.prompt_tokens?vt(s.prompt_tokens):"not reported"]}),o.jsxs("span",{children:["Output ",s.completion_tokens?vt(s.completion_tokens):"not reported"]}),o.jsxs("span",{children:["Total ",s.total_tokens?vt(s.total_tokens):"not reported"]}),o.jsxs("span",{children:["Calls ",vt(s.calls||0)]})]}):o.jsx("span",{children:"No AI tokens used"})]}),o.jsx("div",{className:"analysis-run-steps",children:c.map(([u,m],f)=>o.jsx("span",{className:`${e.status==="success"||f<l?"done":""} ${e.status==="running"&&f===l?"active":""}`,children:m},u))}),e.error?o.jsx("p",{className:"analysis-run-error",children:e.error}):null]})}function Fg({run:e,elapsedSeconds:t}){var i,l;if(!e)return null;const r=e.status==="running"?"Creating use case":e.status==="success"?"Use case created":"Create failed",n=Number(((i=e.submitted)==null?void 0:i.count)||0)>0,a=[["create","Saving use case metadata"],["samples",n?"Learning attached samples":"No samples attached"],["done","Opening saved use case"]],s=Math.max(0,a.findIndex(([c])=>c===e.stage));return o.jsxs("div",{className:`analysis-run-panel create-run ${e.status}`,children:[o.jsxs("div",{className:"analysis-run-head",children:[o.jsxs("div",{children:[o.jsx("strong",{children:r}),o.jsx("span",{children:e.status==="running"?`${t}s elapsed`:e.finishedAt?"Run finished":"Waiting"})]}),o.jsx("small",{children:e.datasetId?`ID ${String(e.datasetId).slice(0,8)}`:`${vt(((l=e.submitted)==null?void 0:l.count)||0)} sample file(s)`})]}),o.jsx("div",{className:"analysis-run-steps",children:a.map(([c,u],m)=>o.jsx("span",{className:`${!n&&c==="samples"?"skipped":""} ${m<s||e.status==="success"?"done":""} ${m===s&&e.status==="running"?"active":""}`,children:u},c))}),e.sampleWarning?o.jsx("p",{className:"analysis-run-warning",children:e.sampleWarning}):null,e.error?o.jsx("p",{className:"analysis-run-error",children:e.error}):null]})}function Ug({value:e,onChange:t}){const r=Array.isArray(e)?e:[],n=(s,i)=>{t(r.map(l=>l.id===s?{...l,...i}:l))},a=s=>{t(r.filter(i=>i.id!==s))};return o.jsxs("div",{className:"variation-pairs",children:[o.jsxs("div",{className:"variation-pairs-head",children:[o.jsxs("div",{children:[o.jsx("h5",{children:"Variation pairs"}),o.jsx("p",{children:"Add only when another baseline/revised pair represents a different layout or document family variation."})]}),o.jsx("button",{type:"button",className:"icon-action",onClick:()=>t([...r,$g()]),disabled:r.length>=5,title:"Add variation pair",children:"+"})]}),r.length?o.jsx("div",{className:"variation-pair-list",children:r.map((s,i)=>o.jsxs("div",{className:"variation-pair-row",children:[o.jsxs("strong",{children:["Variation ",i+1]}),o.jsxs("label",{children:["Baseline",o.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:l=>{var c;return n(s.id,{baseline:((c=l.target.files)==null?void 0:c[0])||null})}})]}),o.jsxs("label",{children:["Revised",o.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:l=>{var c;return n(s.id,{revised:((c=l.target.files)==null?void 0:c[0])||null})}})]}),o.jsx("button",{type:"button",className:"ghost-action compact",onClick:()=>a(s.id),children:"Remove"})]},s.id))}):o.jsx("span",{className:"variation-empty",children:"No variation pairs added."})]})}function Bg({data:e}){const t=(e==null?void 0:e.suggested_dataset)||{},r=(e==null?void 0:e.analysis)||{},n=r.confidence_score!==void 0?Math.round(Number(r.confidence_score||0)*100):null,a=Array.isArray(r.complexity_reasons)?r.complexity_reasons:[],s=Array.isArray(r.enhancement_tips)?r.enhancement_tips:[];return o.jsxs("section",{className:"analysis-card",children:[o.jsxs("div",{className:"analysis-card-head",children:[o.jsxs("div",{children:[o.jsx("h4",{children:"Sample Analysis"}),o.jsx("p",{children:e!=null&&e.used_ai?"GPT-4o assisted the metadata suggestions.":"Deterministic scan generated metadata suggestions."})]}),o.jsxs("span",{children:[String(r.complexity_rating||"standard")," complexity"]})]}),o.jsxs("div",{className:"analysis-grid",children:[o.jsxs("p",{children:[o.jsx("strong",{children:t.supplier||"Supplier pending"}),o.jsx("small",{children:t.family_name||"Use case pending"})]}),o.jsxs("p",{children:[o.jsx("strong",{children:t.use_case_type||"comparison"}),o.jsx("small",{children:(t.expected_formats||[]).join(", ")||"formats pending"})]}),o.jsxs("p",{children:[o.jsx("strong",{children:t.domain||"generic"}),o.jsx("small",{children:n!==null?`${n}% estimated parser confidence`:"confidence pending"})]})]}),a.length||s.length?o.jsxs("div",{className:"analysis-notes",children:[a.slice(0,3).map((i,l)=>o.jsx("span",{children:i},`reason-${l}`)),s.slice(0,3).map((i,l)=>o.jsx("span",{children:i},`tip-${l}`))]}):null]})}function Wg({value:e,onChange:t}){const r=n=>{t(e.includes(n)?e.filter(a=>a!==n):[...e,n])};return o.jsxs("fieldset",{className:"role-picker",children:[o.jsx("legend",{children:"Allowed roles"}),Pg.map(([n,a])=>o.jsxs("label",{children:[o.jsx("input",{type:"checkbox",checked:e.includes(n),onChange:()=>r(n)}),a]},n))]})}function Tc({value:e,onChange:t}){const r=Array.isArray(e)?e:[],n=a=>{t(r.includes(a)?r.filter(s=>s!==a):[...r,a])};return o.jsxs("fieldset",{className:"format-picker",children:[o.jsx("legend",{children:"Expected formats"}),Tg.map(([a,s])=>o.jsxs("label",{children:[o.jsx("input",{type:"checkbox",checked:r.includes(a),onChange:()=>n(a)}),s]},a))]})}function Vg({profile:e}){const t=e&&typeof e=="object"?e:{};return o.jsxs("div",{className:"profile-card",children:[o.jsx("h4",{children:"Model Samples"}),o.jsxs("p",{children:[o.jsxs("strong",{children:[String(t.sample_count||0)," samples"]}),o.jsx("small",{children:(t.roles_present||[]).join(", ")||"No roles learned yet"})]}),o.jsxs("p",{children:[o.jsxs("strong",{children:[String(t.average_pages||0)," avg pages"]}),o.jsxs("small",{children:[String(t.min_pages||0)," min · ",String(t.max_pages||0)," max"]})]}),t.last_bootstrap_notes?o.jsxs("p",{children:[o.jsx("strong",{children:"Latest notes"}),o.jsx("small",{children:String(t.last_bootstrap_notes)})]}):null]})}function Hs({title:e,items:t,labelKey:r,valueKey:n}){const a=Array.isArray(t)?t:[];return o.jsxs("div",{className:"profile-card",children:[o.jsx("h4",{children:e}),a.length===0?o.jsx("span",{children:"No entries yet."}):a.slice(0,8).map((s,i)=>o.jsxs("p",{children:[o.jsx("strong",{children:String((s==null?void 0:s[r])??"Item")}),o.jsx("small",{children:String((s==null?void 0:s[n])??"")})]},i))]})}function qg({profile:e,onAddLabel:t}){const r=e&&typeof e=="object"?e:{},n=String(r.complexity_rating||"low").toUpperCase(),a=r.confidence_score!==void 0?Math.round(r.confidence_score*100):null,s=Array.isArray(r.complexity_reasons)?r.complexity_reasons:[],i=Array.isArray(r.enhancement_tips)?r.enhancement_tips:[],l=Array.isArray(r.suggested_data_labels)?r.suggested_data_labels:[],c=n==="HIGH"?"#9f2525":n==="MEDIUM"?"#c45510":"#1f7e41",u=n==="HIGH"?"#fff7f7":n==="MEDIUM"?"#fffbf7":"#f7fff9",m=n==="HIGH"?"#f1c6c6":n==="MEDIUM"?"#f7d6c1":"#c1f1d1";return o.jsxs("div",{className:"profile-card",style:{gridColumn:"span 2"},children:[o.jsxs("h4",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[o.jsx("span",{children:"AI Onboarding Analysis"}),o.jsxs("span",{style:{fontSize:11,fontWeight:700,color:c,background:u,border:`1px solid ${m}`,padding:"2px 8px",borderRadius:99},children:[n," COMPLEXITY"]})]}),a!==null&&o.jsxs("p",{style:{marginTop:8},children:[o.jsxs("strong",{children:["Parser Confidence Rating: ",a,"%"]}),o.jsx("small",{children:"Estimated baseline accuracy without AI assistance"})]}),s.length>0&&o.jsxs("p",{style:{marginTop:10},children:[o.jsx("strong",{children:"Structural Complexity Indicators"}),o.jsx("small",{style:{display:"block",marginTop:4},children:s.map((f,g)=>o.jsxs("span",{style:{display:"block",color:"var(--text-primary)"},children:["• ",f]},g))})]}),i.length>0&&o.jsxs("p",{style:{marginTop:10},children:[o.jsx("strong",{children:"Extraction Optimization Recommendations"}),o.jsx("small",{style:{display:"block",marginTop:4},children:i.map((f,g)=>o.jsxs("span",{style:{display:"block",color:"var(--text-primary)"},children:["• ",f]},g))})]}),l.length>0&&o.jsxs("p",{style:{marginTop:12},children:[o.jsx("strong",{children:"Suggested Data Labels (Click to map)"}),o.jsx("span",{style:{display:"flex",flexWrap:"wrap",gap:6,marginTop:6},children:l.map(f=>o.jsxs("button",{type:"button",onClick:()=>t(f),style:{background:"var(--surface-sunken)",border:"1px solid var(--border)",color:"var(--text-primary)",borderRadius:"4px",padding:"2px 8px",fontSize:12,fontWeight:650,cursor:"pointer"},title:"Click to automatically create a mapping rule for this label",children:["Add ",f]},f))})]})]})}async function yr(e,t={}){const r=await fetch(`${V}${e}`,t);if(r.status===404&&e.startsWith("/admin/")){const n=await fetch(`${V}/api${e}`,t);if(!n.ok)throw new Error(await se(n));return n.json()}if(!r.ok)throw new Error(await se(r));return r.json()}async function Hg(e,t={}){const r=await fetch(`${V}${e}`,t);if(r.status!==404){if(!r.ok)throw new Error(await se(r));return r.json()}const n=await fetch(`${V}/api${e}`,t);if(!n.ok)throw new Error(await se(n));return n.json()}function Dc(e){const t=e.trim();if(!t)return[];const r=JSON.parse(t);if(!Array.isArray(r))throw new Error("Column rules must be a JSON array.");return r}function Qg(e){b.useEffect(()=>{document.title=`${e} · Altrai`},[e])}const da=e=>Number(e||0).toLocaleString();function Kg(e,t,r){const n=String(e||"").toLowerCase(),a=n.includes("gpt-4")&&!n.includes("mini"),s=a?2.5:.15,i=a?10:.6;return(Number(t||0)*s+Number(r||0)*i)/1e6}function Gg({runId:e}){const[t,r]=b.useState(""),[n,a]=b.useState("fast"),[s,i]=b.useState("gpt-4o"),[l,c]=b.useState([]),[u,m]=b.useState({}),[f,g]=b.useState(!1),v=b.useMemo(()=>l.reduce((x,j)=>{const p=j.usage;return p&&(x.prompt+=Number(p.prompt_tokens||0),x.completion+=Number(p.completion_tokens||0),x.total+=Number(p.total_tokens||0),x.calls+=1,x.cost+=Kg(j.model,p.prompt_tokens,p.completion_tokens)),x},{prompt:0,completion:0,total:0,calls:0,cost:0}),[l]),y=async()=>{const x=t.trim();if(!x||f||!e)return;const j=`user-${Date.now()}`,p=`answer-${Date.now()}`;c(d=>[...d,{id:j,role:"user",text:x,timestamp:new Date().toLocaleTimeString()}]),r(""),g(!0);try{const d=await fetch(`${V}/runs/${e}/query`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:x,mode:n,response_language:"source",model_name:n==="ai"?s:null})});if(!d.ok)throw new Error(await se(d));const h=await d.json();c(w=>{var S;return[...w,{id:p,role:"assistant",text:h.answer||`I found ${((S=h.rows)==null?void 0:S.length)||0} matching changes.`,rows:h.rows||[],columns:h.columns||Ph(h.rows||[]),mode:h.mode||n,model:n==="ai"?s:null,usage:h.usage,confidence:h.confidence,warning:h.ai_error||(h.ai_unavailable?"AI response was unavailable; showing grounded evidence results.":""),timestamp:new Date().toLocaleTimeString()}]})}catch(d){c(h=>[...h,{id:p,role:"assistant",text:oe(d),rows:[],timestamp:new Date().toLocaleTimeString(),isError:!0}])}finally{g(!1)}};return o.jsxs("section",{className:"query-workbench",children:[l.length===0?o.jsx(hr,{label:"Ask what changed, why it matters, or where the evidence appears in the compared documents."}):o.jsx("div",{className:"query-chat-log",children:l.map(x=>{var j,p;return o.jsxs("article",{className:`query-message ${x.role}${x.isError?" error":""}`,children:[o.jsxs("div",{className:"query-message-meta",children:[o.jsx("span",{children:x.role==="user"?"You":x.mode==="ai"?`AI answer${x.model?` - ${x.model}`:""}`:"Natural language query"}),o.jsx("span",{children:x.timestamp})]}),o.jsx("div",{className:"query-message-text",dir:"auto",children:x.text}),x.warning&&o.jsx("div",{className:"query-warning",children:x.warning}),x.usage&&o.jsxs("div",{className:"query-usage",children:[o.jsxs("span",{children:[da(x.usage.total_tokens)," tokens"]}),o.jsxs("span",{children:[da(x.usage.prompt_tokens)," input / ",da(x.usage.completion_tokens)," output"]})]}),((j=x.rows)==null?void 0:j.length)>0&&o.jsxs("div",{className:"query-evidence",children:[o.jsx("button",{type:"button",className:"key-audit-toggle",onClick:()=>m(d=>({...d,[x.id]:!d[x.id]})),children:u[x.id]?"Hide evidence":`Show evidence (${x.rows.length})`}),u[x.id]&&o.jsx("div",{className:"query-results-shell",children:(p=x.columns)!=null&&p.length?o.jsx(sr,{columns:x.columns,rows:x.rows}):x.rows.slice(0,50).map((d,h)=>o.jsx(Jg,{row:d},h))})]})]},x.id)})}),v.total>0&&o.jsxs("div",{className:"query-usage-strip",children:[o.jsxs("span",{children:[da(v.total)," tokens across ",v.calls," AI call",v.calls===1?"":"s"]}),o.jsxs("strong",{children:["$",v.cost.toFixed(5)]})]}),o.jsxs("div",{className:"query-composer",children:[o.jsx("textarea",{value:t,onChange:x=>r(x.target.value),onKeyDown:x=>{x.key==="Enter"&&!x.shiftKey&&(x.preventDefault(),y())},placeholder:"Ask about changed clauses, tables, dates, values, deleted text, or page evidence...",disabled:f,rows:3}),o.jsxs("div",{className:"query-composer-actions",children:[o.jsxs("label",{children:[o.jsx("span",{children:"Mode"}),o.jsxs("select",{value:n,onChange:x=>a(x.target.value),disabled:f,children:[o.jsx("option",{value:"fast",children:"NL query"}),o.jsx("option",{value:"ai",children:"AI chat"})]})]}),n==="ai"&&o.jsxs("label",{children:[o.jsx("span",{children:"Model"}),o.jsxs("select",{value:s,onChange:x=>i(x.target.value),disabled:f,children:[o.jsx("option",{value:"gpt-4o",children:"gpt-4o"}),o.jsx("option",{value:"gpt-4o-mini",children:"gpt-4o-mini"}),o.jsx("option",{value:"phi-4-mini",children:"phi-4-mini"})]})]}),o.jsx("button",{type:"button",className:"primary-action compact",onClick:y,disabled:f||!t.trim(),children:f?"Working":n==="ai"?"Ask AI":"Ask"})]})]})]})}function Jg({row:e}){var t;return o.jsxs("div",{className:"query-result",children:[o.jsxs("div",{className:"query-result-head",children:[o.jsx(ep,{type:Fr(e)}),e.stable_key&&o.jsx("code",{children:e.stable_key}),o.jsx("span",{children:e.citation||`page ${e.page||"-"}`})]}),e.before&&o.jsxs("div",{dir:"auto",children:[o.jsx("strong",{children:"Before:"})," ",Ke(e.before,260)]}),e.after&&o.jsxs("div",{dir:"auto",children:[o.jsx("strong",{children:"After:"})," ",Ke(e.after,260)]}),((t=e.field_changes)==null?void 0:t.length)>0&&o.jsx(rg,{rows:e.field_changes})]})}const ut=(e,t)=>{if(typeof window>"u")return t;try{const r=window.sessionStorage.getItem(`doculens_${e}`);return r!==null?JSON.parse(r):t}catch{return t}},tt=(e,t)=>{if(!(typeof window>"u"))try{window.sessionStorage.setItem(`doculens_${e}`,JSON.stringify(t))}catch(r){console.error(r)}},Ho={compare:"/compare",extract:"/extract",jobs:"/work-history",agents:"/ai-agents",admin:"/admin"},Yg={"/":"compare",...Object.fromEntries(Object.entries(Ho).map(([e,t])=>[t,e]))},$c=e=>Yg[e]||"compare";function Xg(){const e=Jd(),t=dh(),[r,n]=b.useState(()=>$c(window.location.pathname)),[a,s]=b.useState(()=>ut("runId",null)),[i,l]=b.useState(()=>ut("meta",null)),[c,u]=b.useState(()=>ut("tab","viewer")),[m,f]=b.useState(()=>ut("pageNum",1)),[g,v]=b.useState(()=>ut("busy",!1)),[y,x]=b.useState(""),[j,p]=b.useState(()=>ut("extractRunId",null)),[d,h]=b.useState(()=>ut("extractMeta",null)),[w,S]=b.useState(()=>ut("extractBusy",!1)),[N,C]=b.useState(""),[z,$]=b.useState(()=>ut("extractTab","overview")),[R,W]=b.useState(""),[je,Ie]=b.useState(()=>ut("historyKind","all")),zt={compare:"Compare",extract:"Extract",jobs:"Work History",agents:"AI Agents",admin:"Admin Studio"}[r]||"Workspace";Qg(zt),b.useEffect(()=>{tt("workspace",r)},[r]),b.useEffect(()=>{tt("runId",a)},[a]),b.useEffect(()=>{tt("meta",i)},[i]),b.useEffect(()=>{tt("tab",c)},[c]),b.useEffect(()=>{tt("pageNum",m)},[m]),b.useEffect(()=>{tt("busy",g)},[g]),b.useEffect(()=>{tt("extractRunId",j)},[j]),b.useEffect(()=>{tt("extractMeta",d)},[d]),b.useEffect(()=>{tt("extractBusy",w)},[w]),b.useEffect(()=>{tt("extractTab",z)},[z]),b.useEffect(()=>{tt("historyKind",je)},[je]),b.useEffect(()=>{const L=$c(e.pathname);L!==r&&n(L)},[e.pathname]),b.useEffect(()=>{r==="compare"&&c!=="viewer"&&u("viewer")},[r]);const Ve=()=>{s(null),l(null),v(!1),x(""),f(1),u("viewer"),Se("compare")},Xe=()=>{p(null),h(null),S(!1),C(""),$("overview"),Se("extract")},Se=(L,A={})=>{n(L),L==="jobs"&&Ie(A.historyKind||"all"),x(""),C(""),W(""),t(Ho[L]||Ho.compare,{replace:!1})};b.useEffect(()=>{if(!a||!g)return;let L=!1,A=null;const O=async()=>{try{const Z=await fetch(`${V}/runs/${a}`);if(!Z.ok)throw new Error(await se(Z));const M=await Z.json();if(L)return;if(l(M),M.status==="complete"){v(!1),u("viewer");return}if(M.status==="failed"){v(!1),x(st(M.error||M.status_message||"Comparison failed."));return}A=setTimeout(O,1e3)}catch(Z){if(L)return;v(!1),x(oe(Z))}};return O(),()=>{L=!0,A&&clearTimeout(A)}},[a,g]),b.useEffect(()=>{if(!j||!w)return;let L=!1,A=null;const O=async()=>{try{const Z=await fetch(`${V}/extract-runs/${j}`);if(!Z.ok)throw new Error(await se(Z));const M=await Z.json();if(L)return;if(h(M),M.status==="complete"){S(!1),$("overview");return}if(M.status==="failed"){S(!1),C(st(M.error||M.status_message||"Extraction failed."));return}A=setTimeout(O,1e3)}catch(Z){if(L)return;S(!1),C(oe(Z))}};return O(),()=>{L=!0,A&&clearTimeout(A)}},[j,w]);const E=async L=>{L.preventDefault();const A=new FormData(L.currentTarget),O=A.get("base"),Z=A.get("target"),M=String(A.get("family_id")||"").trim();if(!O||!Z||!O.name||!Z.name){x("Please select both documents before starting.");return}if(!M){x("Please select a document use case before starting comparison.");return}n("compare"),v(!0),x(""),s(null),f(1),u("viewer"),l({status:"uploading",status_message:"Uploading documents",progress:3,stats:{},coverage:{},n_pages_base:0,n_pages_target:0});try{const le=await fetch(`${V}/compare`,{method:"POST",body:A});if(!le.ok)throw new Error(await se(le));const Ae=await le.json();s(Ae.run_id),v(Ae.status!=="complete"&&Ae.status!=="failed"),l({run_id:Ae.run_id,status:Ae.status,status_message:Ae.status_message||"Starting comparison",progress:Ae.progress||5,stats:{},coverage:{},n_pages_base:0,n_pages_target:0}),n("compare")}catch(le){v(!1),x(oe(le))}},T=async L=>{L.preventDefault();const A=new FormData(L.currentTarget),O=A.getAll("document").filter(M=>M&&M.name),Z=String(A.get("family_id")||"").trim();if(!O.length){C("Please select at least one document, spreadsheet, PDF, or image before starting extraction.");return}if(!Z){C("Please select a document use case before starting extraction.");return}n("extract"),S(!0),C(""),p(null),$("overview"),h({status:"uploading",status_message:"Uploading document",progress:3,summary:{}});try{const M=await fetch(`${V}/extract`,{method:"POST",body:A});if(!M.ok)throw new Error(await se(M));const le=await M.json();p(le.run_id),S(le.status!=="complete"&&le.status!=="failed"),h({run_id:le.run_id,status:le.status,status_message:le.status_message||"Starting extraction",progress:le.progress||5,summary:{}}),n("extract")}catch(M){S(!1),C(oe(M))}},I=async L=>{W("");try{if(L.kind==="extraction"){const Z=await fetch(`${V}/extract-runs/${L.run_id}`);if(!Z.ok)throw new Error(await se(Z));const M=await Z.json();s(null),l(null),v(!1),p(L.run_id),h(M),S(M.status!=="complete"&&M.status!=="failed"),$("overview"),n("extract");return}const A=await fetch(`${V}/runs/${L.run_id}`);if(!A.ok)throw new Error(await se(A));const O=await A.json();p(null),h(null),S(!1),s(L.run_id),l(O),v(O.status!=="complete"&&O.status!=="failed"),u("viewer"),f(1),n("compare")}catch(A){W(oe(A))}},H=async L=>{W("");try{if(L.kind==="extraction"){const A=await fetch(`${V}/extract-runs/${L.run_id}`);if(!A.ok)throw new Error(await se(A));const O=await A.json();s(null),l(null),v(!1),p(L.run_id),h(O),S(O.status!=="complete"&&O.status!=="failed"),n("extract");return}await I(L)}catch(A){W(oe(A))}},ne=()=>{a&&(window.location.href=`${V}/runs/${a}/report.pdf`)},Ze=(i==null?void 0:i.status)==="complete",G=(d==null?void 0:d.status)==="complete";return o.jsxs("div",{children:[o.jsx("style",{children:jh}),o.jsxs(zg,{workspace:r,runId:r==="compare"&&Ze?a:null,onNavigate:Se,onDownloadReport:ne,children:[r==="jobs"&&o.jsx(Uh,{onOpenJob:I,onAskJob:H,error:R,historyKind:je,onStartCompare:Ve,onStartExtract:Xe}),r==="compare"&&!Ze&&o.jsxs("section",{className:"workflow-panel",children:[o.jsx(Wh,{onUpload:E,busy:g,onAdmin:()=>Se("admin")}),g&&i&&o.jsx(Ec,{progress:i.progress||0,message:i.status_message||"Processing documents",status:i.status||"running"}),y&&o.jsx(An,{message:y})]}),r==="extract"&&!G&&o.jsxs("section",{className:"workflow-panel",children:[o.jsx(Vh,{onUpload:T,busy:w,onAdmin:()=>Se("admin")}),w&&d&&o.jsx(Ec,{progress:d.progress||0,message:d.status_message||"Extracting document",status:d.status||"running"}),N&&o.jsx(An,{message:N})]}),r==="compare"&&Ze&&a&&i&&o.jsxs("section",{className:"comparison-workspace",children:[o.jsxs("div",{className:"comparison-head",children:[o.jsx("div",{children:o.jsxs("h2",{dir:"auto",children:[i.base_label||"Baseline"," → ",i.target_label||"Revised"]})}),o.jsxs("div",{className:"comparison-head-actions",children:[o.jsx("button",{type:"button",className:"ghost-action compact",onClick:Ve,children:"New comparison"}),o.jsxs("div",{className:"comparison-id",children:["#",String(a).slice(0,6)]})]})]}),o.jsx(Ah,{meta:i}),o.jsxs("main",{className:"comparison-flow",children:[o.jsxs("section",{className:"workspace-surface",children:[o.jsx("div",{className:"surface-title-row",children:o.jsxs("div",{children:[o.jsx("h3",{children:"Quick Summary"}),o.jsx("p",{children:"Highest-priority differences detected from the comparison evidence."})]})}),o.jsx(qh,{runId:a,meta:i,onVerifyPage:f})]}),o.jsxs("section",{className:"workspace-surface",children:[o.jsx("div",{className:"surface-title-row",children:o.jsxs("div",{children:[o.jsx("h3",{children:"Visual Comparison"}),o.jsx("p",{children:"Side-by-side verification with synchronized scroll, zoom, and document overlays."})]})}),o.jsx(Hh,{runId:a,meta:i,pageNum:m,setPageNum:f})]}),o.jsxs("section",{className:"workspace-surface",children:[o.jsx("div",{className:"surface-title-row",children:o.jsxs("div",{children:[o.jsx("h3",{children:"Ask This Comparison"}),o.jsx("p",{children:"Start with natural language search. Switch to an AI model only when reasoning or richer synthesis is needed."})]})}),o.jsx(Gg,{runId:a})]})]})]}),r==="extract"&&G&&j&&d&&o.jsx(ng,{runId:j,meta:d,tab:z,setTab:$}),r==="agents"&&o.jsxs("section",{className:"workspace-placeholder",children:[o.jsx("h2",{children:"AI Agents"}),o.jsx("p",{children:"Future skills and multi-agent workflows will live here after the document intelligence workspace is stable."}),o.jsx("div",{className:"placeholder-list",children:o.jsx("span",{children:"Coming soon"})})]}),r==="admin"&&o.jsx(Rg,{})]})]})}Qs.createRoot(document.getElementById("root")).render(o.jsx(Ya.StrictMode,{children:o.jsx(Sg,{children:o.jsx(bh,{children:o.jsx(Xg,{})})})}));
