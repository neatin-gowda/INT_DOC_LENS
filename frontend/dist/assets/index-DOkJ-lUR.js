function vp(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in e)){const o=Object.getOwnPropertyDescriptor(n,a);o&&Object.defineProperty(e,a,o.get?o:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();function yp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Dc={exports:{}},Ga={},$c={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mn=Symbol.for("react.element"),wp=Symbol.for("react.portal"),bp=Symbol.for("react.fragment"),kp=Symbol.for("react.strict_mode"),jp=Symbol.for("react.profiler"),Sp=Symbol.for("react.provider"),_p=Symbol.for("react.context"),Ep=Symbol.for("react.forward_ref"),Np=Symbol.for("react.suspense"),Cp=Symbol.for("react.memo"),zp=Symbol.for("react.lazy"),el=Symbol.iterator;function Pp(e){return e===null||typeof e!="object"?null:(e=el&&e[el]||e["@@iterator"],typeof e=="function"?e:null)}var Rc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lc=Object.assign,Ic={};function Kr(e,t,r){this.props=e,this.context=t,this.refs=Ic,this.updater=r||Rc}Kr.prototype.isReactComponent={};Kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ac(){}Ac.prototype=Kr.prototype;function Hs(e,t,r){this.props=e,this.context=t,this.refs=Ic,this.updater=r||Rc}var Qs=Hs.prototype=new Ac;Qs.constructor=Hs;Lc(Qs,Kr.prototype);Qs.isPureReactComponent=!0;var tl=Array.isArray,Mc=Object.prototype.hasOwnProperty,Ks={current:null},Oc={key:!0,ref:!0,__self:!0,__source:!0};function Fc(e,t,r){var n,a={},o=null,i=null;if(t!=null)for(n in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Mc.call(t,n)&&!Oc.hasOwnProperty(n)&&(a[n]=t[n]);var l=arguments.length-2;if(l===1)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)a[n]===void 0&&(a[n]=l[n]);return{$$typeof:Mn,type:e,key:o,ref:i,props:a,_owner:Ks.current}}function Tp(e,t){return{$$typeof:Mn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Gs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mn}function Dp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var rl=/\/+/g;function xo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Dp(""+e.key):t.toString(36)}function da(e,t,r,n,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Mn:case wp:i=!0}}if(i)return i=e,a=a(i),e=n===""?"."+xo(i,0):n,tl(a)?(r="",e!=null&&(r=e.replace(rl,"$&/")+"/"),da(a,t,r,"",function(u){return u})):a!=null&&(Gs(a)&&(a=Tp(a,r+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(rl,"$&/")+"/")+e)),t.push(a)),1;if(i=0,n=n===""?".":n+":",tl(e))for(var l=0;l<e.length;l++){o=e[l];var c=n+xo(o,l);i+=da(o,t,r,c,a)}else if(c=Pp(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=n+xo(o,l++),i+=da(o,t,r,c,a);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function qn(e,t,r){if(e==null)return e;var n=[],a=0;return da(e,n,"","",function(o){return t.call(r,o,a++)}),n}function $p(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ze={current:null},pa={transition:null},Rp={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:pa,ReactCurrentOwner:Ks};function Uc(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:qn,forEach:function(e,t,r){qn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return qn(e,function(){t++}),t},toArray:function(e){return qn(e,function(t){return t})||[]},only:function(e){if(!Gs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Kr;O.Fragment=bp;O.Profiler=jp;O.PureComponent=Hs;O.StrictMode=kp;O.Suspense=Np;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rp;O.act=Uc;O.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Lc({},e.props),a=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Ks.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Mc.call(t,c)&&!Oc.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:Mn,type:e.type,key:a,ref:o,props:n,_owner:i}};O.createContext=function(e){return e={$$typeof:_p,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Sp,_context:e},e.Consumer=e};O.createElement=Fc;O.createFactory=function(e){var t=Fc.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:Ep,render:e}};O.isValidElement=Gs;O.lazy=function(e){return{$$typeof:zp,_payload:{_status:-1,_result:e},_init:$p}};O.memo=function(e,t){return{$$typeof:Cp,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=pa.transition;pa.transition={};try{e()}finally{pa.transition=t}};O.unstable_act=Uc;O.useCallback=function(e,t){return ze.current.useCallback(e,t)};O.useContext=function(e){return ze.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return ze.current.useDeferredValue(e)};O.useEffect=function(e,t){return ze.current.useEffect(e,t)};O.useId=function(){return ze.current.useId()};O.useImperativeHandle=function(e,t,r){return ze.current.useImperativeHandle(e,t,r)};O.useInsertionEffect=function(e,t){return ze.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return ze.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return ze.current.useMemo(e,t)};O.useReducer=function(e,t,r){return ze.current.useReducer(e,t,r)};O.useRef=function(e){return ze.current.useRef(e)};O.useState=function(e){return ze.current.useState(e)};O.useSyncExternalStore=function(e,t,r){return ze.current.useSyncExternalStore(e,t,r)};O.useTransition=function(){return ze.current.useTransition()};O.version="18.3.1";$c.exports=O;var w=$c.exports;const Ja=yp(w),Lp=vp({__proto__:null,default:Ja},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip=w,Ap=Symbol.for("react.element"),Mp=Symbol.for("react.fragment"),Op=Object.prototype.hasOwnProperty,Fp=Ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Up={key:!0,ref:!0,__self:!0,__source:!0};function Bc(e,t,r){var n,a={},o=null,i=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(n in t)Op.call(t,n)&&!Up.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:Ap,type:e,key:o,ref:i,props:a,_owner:Fp.current}}Ga.Fragment=Mp;Ga.jsx=Bc;Ga.jsxs=Bc;Dc.exports=Ga;var s=Dc.exports,Qo={},Wc={exports:{}},We={},Vc={exports:{}},qc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,$){var I=C.length;C.push($);e:for(;0<I;){var K=I-1>>>1,F=C[K];if(0<a(F,$))C[K]=$,C[I]=F,I=K;else break e}}function r(C){return C.length===0?null:C[0]}function n(C){if(C.length===0)return null;var $=C[0],I=C.pop();if(I!==$){C[0]=I;e:for(var K=0,F=C.length,le=F>>>1;K<le;){var Me=2*(K+1)-1,T=C[Me],A=Me+1,M=C[A];if(0>a(T,I))A<F&&0>a(M,T)?(C[K]=M,C[A]=I,K=A):(C[K]=T,C[Me]=I,K=Me);else if(A<F&&0>a(M,I))C[K]=M,C[A]=I,K=A;else break e}}return $}function a(C,$){var I=C.sortIndex-$.sortIndex;return I!==0?I:C.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var c=[],u=[],m=1,f=null,g=3,y=!1,v=!1,x=!1,j=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(C){for(var $=r(u);$!==null;){if($.callback===null)n(u);else if($.startTime<=C)n(u),$.sortIndex=$.expirationTime,t(c,$);else break;$=r(u)}}function b(C){if(x=!1,h(C),!v)if(r(c)!==null)v=!0,fe(S);else{var $=r(u);$!==null&&me(b,$.startTime-C)}}function S(C,$){v=!1,x&&(x=!1,p(z),z=-1),y=!0;var I=g;try{for(h($),f=r(c);f!==null&&(!(f.expirationTime>$)||C&&!B());){var K=f.callback;if(typeof K=="function"){f.callback=null,g=f.priorityLevel;var F=K(f.expirationTime<=$);$=e.unstable_now(),typeof F=="function"?f.callback=F:f===r(c)&&n(c),h($)}else n(c);f=r(c)}if(f!==null)var le=!0;else{var Me=r(u);Me!==null&&me(b,Me.startTime-$),le=!1}return le}finally{f=null,g=I,y=!1}}var E=!1,N=null,z=-1,D=5,L=-1;function B(){return!(e.unstable_now()-L<D)}function _e(){if(N!==null){var C=e.unstable_now();L=C;var $=!0;try{$=N(!0,C)}finally{$?Te():(E=!1,N=null)}}else E=!1}var Te;if(typeof d=="function")Te=function(){d(_e)};else if(typeof MessageChannel<"u"){var xt=new MessageChannel,lt=xt.port2;xt.port1.onmessage=_e,Te=function(){lt.postMessage(null)}}else Te=function(){j(_e,0)};function fe(C){N=C,E||(E=!0,Te())}function me(C,$){z=j(function(){C(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,fe(S))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(C){switch(g){case 1:case 2:case 3:var $=3;break;default:$=g}var I=g;g=$;try{return C()}finally{g=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,$){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var I=g;g=C;try{return $()}finally{g=I}},e.unstable_scheduleCallback=function(C,$,I){var K=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?K+I:K):I=K,C){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=I+F,C={id:m++,callback:$,priorityLevel:C,startTime:I,expirationTime:F,sortIndex:-1},I>K?(C.sortIndex=I,t(u,C),r(c)===null&&C===r(u)&&(x?(p(z),z=-1):x=!0,me(b,I-K))):(C.sortIndex=F,t(c,C),v||y||(v=!0,fe(S))),C},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(C){var $=g;return function(){var I=g;g=$;try{return C.apply(this,arguments)}finally{g=I}}}})(qc);Vc.exports=qc;var Bp=Vc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp=w,Be=Bp;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hc=new Set,yn={};function pr(e,t){Ur(e,t),Ur(e+"Capture",t)}function Ur(e,t){for(yn[e]=t,e=0;e<t.length;e++)Hc.add(t[e])}var _t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ko=Object.prototype.hasOwnProperty,Vp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nl={},al={};function qp(e){return Ko.call(al,e)?!0:Ko.call(nl,e)?!1:Vp.test(e)?al[e]=!0:(nl[e]=!0,!1)}function Hp(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qp(e,t,r,n){if(t===null||typeof t>"u"||Hp(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Pe(e,t,r,n,a,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xe[e]=new Pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xe[t]=new Pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xe[e]=new Pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xe[e]=new Pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xe[e]=new Pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xe[e]=new Pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xe[e]=new Pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xe[e]=new Pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xe[e]=new Pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Js=/[\-:]([a-z])/g;function Ys(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Js,Ys);xe[t]=new Pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Js,Ys);xe[t]=new Pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Js,Ys);xe[t]=new Pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xe[e]=new Pe(e,1,!1,e.toLowerCase(),null,!1,!1)});xe.xlinkHref=new Pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xe[e]=new Pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xs(e,t,r,n){var a=xe.hasOwnProperty(t)?xe[t]:null;(a!==null?a.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qp(t,r,a,n)&&(r=null),n||a===null?qp(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,n=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var zt=Wp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hn=Symbol.for("react.element"),wr=Symbol.for("react.portal"),br=Symbol.for("react.fragment"),Zs=Symbol.for("react.strict_mode"),Go=Symbol.for("react.profiler"),Qc=Symbol.for("react.provider"),Kc=Symbol.for("react.context"),ei=Symbol.for("react.forward_ref"),Jo=Symbol.for("react.suspense"),Yo=Symbol.for("react.suspense_list"),ti=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),Gc=Symbol.for("react.offscreen"),ol=Symbol.iterator;function Yr(e){return e===null||typeof e!="object"?null:(e=ol&&e[ol]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,vo;function on(e){if(vo===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);vo=t&&t[1]||""}return`
`+vo+e}var yo=!1;function wo(e,t){if(!e||yo)return"";yo=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),o=n.stack.split(`
`),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(i!==1||l!==1)do if(i--,l--,0>l||a[i]!==o[l]){var c=`
`+a[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=l);break}}}finally{yo=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?on(e):""}function Kp(e){switch(e.tag){case 5:return on(e.type);case 16:return on("Lazy");case 13:return on("Suspense");case 19:return on("SuspenseList");case 0:case 2:case 15:return e=wo(e.type,!1),e;case 11:return e=wo(e.type.render,!1),e;case 1:return e=wo(e.type,!0),e;default:return""}}function Xo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case br:return"Fragment";case wr:return"Portal";case Go:return"Profiler";case Zs:return"StrictMode";case Jo:return"Suspense";case Yo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Kc:return(e.displayName||"Context")+".Consumer";case Qc:return(e._context.displayName||"Context")+".Provider";case ei:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ti:return t=e.displayName||null,t!==null?t:Xo(e.type)||"Memo";case Tt:t=e._payload,e=e._init;try{return Xo(e(t))}catch{}}return null}function Gp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xo(t);case 8:return t===Zs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function qt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jp(e){var t=Jc(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){n=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qn(e){e._valueTracker||(e._valueTracker=Jp(e))}function Yc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Jc(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Sa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zo(e,t){var r=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function sl(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=qt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xc(e,t){t=t.checked,t!=null&&Xs(e,"checked",t,!1)}function es(e,t){Xc(e,t);var r=qt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ts(e,t.type,r):t.hasOwnProperty("defaultValue")&&ts(e,t.type,qt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function il(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function ts(e,t,r){(t!=="number"||Sa(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var sn=Array.isArray;function $r(e,t,r,n){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(r=""+qt(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function rs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ll(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(_(92));if(sn(r)){if(1<r.length)throw Error(_(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:qt(r)}}function Zc(e,t){var r=qt(t.value),n=qt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function cl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function eu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ns(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?eu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Kn,tu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Kn=Kn||document.createElement("div"),Kn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Kn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var un={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yp=["Webkit","ms","Moz","O"];Object.keys(un).forEach(function(e){Yp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),un[t]=un[e]})});function ru(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||un.hasOwnProperty(e)&&un[e]?(""+t).trim():t+"px"}function nu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,a=ru(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,a):e[r]=a}}var Xp=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function as(e,t){if(t){if(Xp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function os(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ss=null;function ri(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var is=null,Rr=null,Lr=null;function ul(e){if(e=Un(e)){if(typeof is!="function")throw Error(_(280));var t=e.stateNode;t&&(t=to(t),is(e.stateNode,e.type,t))}}function au(e){Rr?Lr?Lr.push(e):Lr=[e]:Rr=e}function ou(){if(Rr){var e=Rr,t=Lr;if(Lr=Rr=null,ul(e),t)for(e=0;e<t.length;e++)ul(t[e])}}function su(e,t){return e(t)}function iu(){}var bo=!1;function lu(e,t,r){if(bo)return e(t,r);bo=!0;try{return su(e,t,r)}finally{bo=!1,(Rr!==null||Lr!==null)&&(iu(),ou())}}function bn(e,t){var r=e.stateNode;if(r===null)return null;var n=to(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(_(231,t,typeof r));return r}var ls=!1;if(_t)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){ls=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{ls=!1}function Zp(e,t,r,n,a,o,i,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(m){this.onError(m)}}var dn=!1,_a=null,Ea=!1,cs=null,ef={onError:function(e){dn=!0,_a=e}};function tf(e,t,r,n,a,o,i,l,c){dn=!1,_a=null,Zp.apply(ef,arguments)}function rf(e,t,r,n,a,o,i,l,c){if(tf.apply(this,arguments),dn){if(dn){var u=_a;dn=!1,_a=null}else throw Error(_(198));Ea||(Ea=!0,cs=u)}}function fr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function cu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function dl(e){if(fr(e)!==e)throw Error(_(188))}function nf(e){var t=e.alternate;if(!t){if(t=fr(e),t===null)throw Error(_(188));return t!==e?null:e}for(var r=e,n=t;;){var a=r.return;if(a===null)break;var o=a.alternate;if(o===null){if(n=a.return,n!==null){r=n;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===r)return dl(a),e;if(o===n)return dl(a),t;o=o.sibling}throw Error(_(188))}if(r.return!==n.return)r=a,n=o;else{for(var i=!1,l=a.child;l;){if(l===r){i=!0,r=a,n=o;break}if(l===n){i=!0,n=a,r=o;break}l=l.sibling}if(!i){for(l=o.child;l;){if(l===r){i=!0,r=o,n=a;break}if(l===n){i=!0,n=o,r=a;break}l=l.sibling}if(!i)throw Error(_(189))}}if(r.alternate!==n)throw Error(_(190))}if(r.tag!==3)throw Error(_(188));return r.stateNode.current===r?e:t}function uu(e){return e=nf(e),e!==null?du(e):null}function du(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=du(e);if(t!==null)return t;e=e.sibling}return null}var pu=Be.unstable_scheduleCallback,pl=Be.unstable_cancelCallback,af=Be.unstable_shouldYield,of=Be.unstable_requestPaint,se=Be.unstable_now,sf=Be.unstable_getCurrentPriorityLevel,ni=Be.unstable_ImmediatePriority,fu=Be.unstable_UserBlockingPriority,Na=Be.unstable_NormalPriority,lf=Be.unstable_LowPriority,mu=Be.unstable_IdlePriority,Ya=null,mt=null;function cf(e){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Ya,e,void 0,(e.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:pf,uf=Math.log,df=Math.LN2;function pf(e){return e>>>=0,e===0?32:31-(uf(e)/df|0)|0}var Gn=64,Jn=4194304;function ln(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ca(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,a=e.suspendedLanes,o=e.pingedLanes,i=r&268435455;if(i!==0){var l=i&~a;l!==0?n=ln(l):(o&=i,o!==0&&(n=ln(o)))}else i=r&~a,i!==0?n=ln(i):o!==0&&(n=ln(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&a)&&(a=n&-n,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-ot(t),a=1<<r,n|=e[r],t&=~a;return n}function ff(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mf(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-ot(o),l=1<<i,c=a[i];c===-1?(!(l&r)||l&n)&&(a[i]=ff(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function us(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hu(){var e=Gn;return Gn<<=1,!(Gn&4194240)&&(Gn=64),e}function ko(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function On(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ot(t),e[t]=r}function hf(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-ot(r),o=1<<a;t[a]=0,n[a]=-1,e[a]=-1,r&=~o}}function ai(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-ot(r),a=1<<n;a&t|e[n]&t&&(e[n]|=t),r&=~a}}var H=0;function gu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var xu,oi,vu,yu,wu,ds=!1,Yn=[],At=null,Mt=null,Ot=null,kn=new Map,jn=new Map,$t=[],gf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fl(e,t){switch(e){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":kn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jn.delete(t.pointerId)}}function Zr(e,t,r,n,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[a]},t!==null&&(t=Un(t),t!==null&&oi(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function xf(e,t,r,n,a){switch(t){case"focusin":return At=Zr(At,e,t,r,n,a),!0;case"dragenter":return Mt=Zr(Mt,e,t,r,n,a),!0;case"mouseover":return Ot=Zr(Ot,e,t,r,n,a),!0;case"pointerover":var o=a.pointerId;return kn.set(o,Zr(kn.get(o)||null,e,t,r,n,a)),!0;case"gotpointercapture":return o=a.pointerId,jn.set(o,Zr(jn.get(o)||null,e,t,r,n,a)),!0}return!1}function bu(e){var t=Xt(e.target);if(t!==null){var r=fr(t);if(r!==null){if(t=r.tag,t===13){if(t=cu(r),t!==null){e.blockedOn=t,wu(e.priority,function(){vu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=ps(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);ss=n,r.target.dispatchEvent(n),ss=null}else return t=Un(r),t!==null&&oi(t),e.blockedOn=r,!1;t.shift()}return!0}function ml(e,t,r){fa(e)&&r.delete(t)}function vf(){ds=!1,At!==null&&fa(At)&&(At=null),Mt!==null&&fa(Mt)&&(Mt=null),Ot!==null&&fa(Ot)&&(Ot=null),kn.forEach(ml),jn.forEach(ml)}function en(e,t){e.blockedOn===t&&(e.blockedOn=null,ds||(ds=!0,Be.unstable_scheduleCallback(Be.unstable_NormalPriority,vf)))}function Sn(e){function t(a){return en(a,e)}if(0<Yn.length){en(Yn[0],e);for(var r=1;r<Yn.length;r++){var n=Yn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(At!==null&&en(At,e),Mt!==null&&en(Mt,e),Ot!==null&&en(Ot,e),kn.forEach(t),jn.forEach(t),r=0;r<$t.length;r++)n=$t[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<$t.length&&(r=$t[0],r.blockedOn===null);)bu(r),r.blockedOn===null&&$t.shift()}var Ir=zt.ReactCurrentBatchConfig,za=!0;function yf(e,t,r,n){var a=H,o=Ir.transition;Ir.transition=null;try{H=1,si(e,t,r,n)}finally{H=a,Ir.transition=o}}function wf(e,t,r,n){var a=H,o=Ir.transition;Ir.transition=null;try{H=4,si(e,t,r,n)}finally{H=a,Ir.transition=o}}function si(e,t,r,n){if(za){var a=ps(e,t,r,n);if(a===null)Do(e,t,n,Pa,r),fl(e,n);else if(xf(a,e,t,r,n))n.stopPropagation();else if(fl(e,n),t&4&&-1<gf.indexOf(e)){for(;a!==null;){var o=Un(a);if(o!==null&&xu(o),o=ps(e,t,r,n),o===null&&Do(e,t,n,Pa,r),o===a)break;a=o}a!==null&&n.stopPropagation()}else Do(e,t,n,null,r)}}var Pa=null;function ps(e,t,r,n){if(Pa=null,e=ri(n),e=Xt(e),e!==null)if(t=fr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=cu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Pa=e,null}function ku(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sf()){case ni:return 1;case fu:return 4;case Na:case lf:return 16;case mu:return 536870912;default:return 16}default:return 16}}var Lt=null,ii=null,ma=null;function ju(){if(ma)return ma;var e,t=ii,r=t.length,n,a="value"in Lt?Lt.value:Lt.textContent,o=a.length;for(e=0;e<r&&t[e]===a[e];e++);var i=r-e;for(n=1;n<=i&&t[r-n]===a[o-n];n++);return ma=a.slice(e,1<n?1-n:void 0)}function ha(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xn(){return!0}function hl(){return!1}function Ve(e){function t(r,n,a,o,i){this._reactName=r,this._targetInst=a,this.type=n,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Xn:hl,this.isPropagationStopped=hl,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Xn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Xn)},persist:function(){},isPersistent:Xn}),t}var Gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},li=Ve(Gr),Fn=re({},Gr,{view:0,detail:0}),bf=Ve(Fn),jo,So,tn,Xa=re({},Fn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ci,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tn&&(tn&&e.type==="mousemove"?(jo=e.screenX-tn.screenX,So=e.screenY-tn.screenY):So=jo=0,tn=e),jo)},movementY:function(e){return"movementY"in e?e.movementY:So}}),gl=Ve(Xa),kf=re({},Xa,{dataTransfer:0}),jf=Ve(kf),Sf=re({},Fn,{relatedTarget:0}),_o=Ve(Sf),_f=re({},Gr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ef=Ve(_f),Nf=re({},Gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cf=Ve(Nf),zf=re({},Gr,{data:0}),xl=Ve(zf),Pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Df={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $f(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Df[e])?!!t[e]:!1}function ci(){return $f}var Rf=re({},Fn,{key:function(e){if(e.key){var t=Pf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ha(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ci,charCode:function(e){return e.type==="keypress"?ha(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ha(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lf=Ve(Rf),If=re({},Xa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vl=Ve(If),Af=re({},Fn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ci}),Mf=Ve(Af),Of=re({},Gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ff=Ve(Of),Uf=re({},Xa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bf=Ve(Uf),Wf=[9,13,27,32],ui=_t&&"CompositionEvent"in window,pn=null;_t&&"documentMode"in document&&(pn=document.documentMode);var Vf=_t&&"TextEvent"in window&&!pn,Su=_t&&(!ui||pn&&8<pn&&11>=pn),yl=" ",wl=!1;function _u(e,t){switch(e){case"keyup":return Wf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kr=!1;function qf(e,t){switch(e){case"compositionend":return Eu(t);case"keypress":return t.which!==32?null:(wl=!0,yl);case"textInput":return e=t.data,e===yl&&wl?null:e;default:return null}}function Hf(e,t){if(kr)return e==="compositionend"||!ui&&_u(e,t)?(e=ju(),ma=ii=Lt=null,kr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Su&&t.locale!=="ko"?null:t.data;default:return null}}var Qf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qf[e.type]:t==="textarea"}function Nu(e,t,r,n){au(n),t=Ta(t,"onChange"),0<t.length&&(r=new li("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var fn=null,_n=null;function Kf(e){Mu(e,0)}function Za(e){var t=_r(e);if(Yc(t))return e}function Gf(e,t){if(e==="change")return t}var Cu=!1;if(_t){var Eo;if(_t){var No="oninput"in document;if(!No){var kl=document.createElement("div");kl.setAttribute("oninput","return;"),No=typeof kl.oninput=="function"}Eo=No}else Eo=!1;Cu=Eo&&(!document.documentMode||9<document.documentMode)}function jl(){fn&&(fn.detachEvent("onpropertychange",zu),_n=fn=null)}function zu(e){if(e.propertyName==="value"&&Za(_n)){var t=[];Nu(t,_n,e,ri(e)),lu(Kf,t)}}function Jf(e,t,r){e==="focusin"?(jl(),fn=t,_n=r,fn.attachEvent("onpropertychange",zu)):e==="focusout"&&jl()}function Yf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Za(_n)}function Xf(e,t){if(e==="click")return Za(t)}function Zf(e,t){if(e==="input"||e==="change")return Za(t)}function em(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:em;function En(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!Ko.call(t,a)||!it(e[a],t[a]))return!1}return!0}function Sl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _l(e,t){var r=Sl(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Sl(r)}}function Pu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tu(){for(var e=window,t=Sa();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Sa(e.document)}return t}function di(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function tm(e){var t=Tu(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Pu(r.ownerDocument.documentElement,r)){if(n!==null&&di(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,o=Math.min(n.start,a);n=n.end===void 0?o:Math.min(n.end,a),!e.extend&&o>n&&(a=n,n=o,o=a),a=_l(r,o);var i=_l(r,n);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rm=_t&&"documentMode"in document&&11>=document.documentMode,jr=null,fs=null,mn=null,ms=!1;function El(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ms||jr==null||jr!==Sa(n)||(n=jr,"selectionStart"in n&&di(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),mn&&En(mn,n)||(mn=n,n=Ta(fs,"onSelect"),0<n.length&&(t=new li("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=jr)))}function Zn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Sr={animationend:Zn("Animation","AnimationEnd"),animationiteration:Zn("Animation","AnimationIteration"),animationstart:Zn("Animation","AnimationStart"),transitionend:Zn("Transition","TransitionEnd")},Co={},Du={};_t&&(Du=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);function eo(e){if(Co[e])return Co[e];if(!Sr[e])return e;var t=Sr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Du)return Co[e]=t[r];return e}var $u=eo("animationend"),Ru=eo("animationiteration"),Lu=eo("animationstart"),Iu=eo("transitionend"),Au=new Map,Nl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qt(e,t){Au.set(e,t),pr(t,[e])}for(var zo=0;zo<Nl.length;zo++){var Po=Nl[zo],nm=Po.toLowerCase(),am=Po[0].toUpperCase()+Po.slice(1);Qt(nm,"on"+am)}Qt($u,"onAnimationEnd");Qt(Ru,"onAnimationIteration");Qt(Lu,"onAnimationStart");Qt("dblclick","onDoubleClick");Qt("focusin","onFocus");Qt("focusout","onBlur");Qt(Iu,"onTransitionEnd");Ur("onMouseEnter",["mouseout","mouseover"]);Ur("onMouseLeave",["mouseout","mouseover"]);Ur("onPointerEnter",["pointerout","pointerover"]);Ur("onPointerLeave",["pointerout","pointerover"]);pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),om=new Set("cancel close invalid load scroll toggle".split(" ").concat(cn));function Cl(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,rf(n,t,void 0,e),e.currentTarget=null}function Mu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],a=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var i=n.length-1;0<=i;i--){var l=n[i],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&a.isPropagationStopped())break e;Cl(a,l,u),o=c}else for(i=0;i<n.length;i++){if(l=n[i],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&a.isPropagationStopped())break e;Cl(a,l,u),o=c}}}if(Ea)throw e=cs,Ea=!1,cs=null,e}function Y(e,t){var r=t[ys];r===void 0&&(r=t[ys]=new Set);var n=e+"__bubble";r.has(n)||(Ou(t,e,2,!1),r.add(n))}function To(e,t,r){var n=0;t&&(n|=4),Ou(r,e,n,t)}var ea="_reactListening"+Math.random().toString(36).slice(2);function Nn(e){if(!e[ea]){e[ea]=!0,Hc.forEach(function(r){r!=="selectionchange"&&(om.has(r)||To(r,!1,e),To(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ea]||(t[ea]=!0,To("selectionchange",!1,t))}}function Ou(e,t,r,n){switch(ku(t)){case 1:var a=yf;break;case 4:a=wf;break;default:a=si}r=a.bind(null,t,r,e),a=void 0,!ls||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Do(e,t,r,n,a){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var l=n.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(i===4)for(i=n.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;i=i.return}for(;l!==null;){if(i=Xt(l),i===null)return;if(c=i.tag,c===5||c===6){n=o=i;continue e}l=l.parentNode}}n=n.return}lu(function(){var u=o,m=ri(r),f=[];e:{var g=Au.get(e);if(g!==void 0){var y=li,v=e;switch(e){case"keypress":if(ha(r)===0)break e;case"keydown":case"keyup":y=Lf;break;case"focusin":v="focus",y=_o;break;case"focusout":v="blur",y=_o;break;case"beforeblur":case"afterblur":y=_o;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=gl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=jf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Mf;break;case $u:case Ru:case Lu:y=Ef;break;case Iu:y=Ff;break;case"scroll":y=bf;break;case"wheel":y=Bf;break;case"copy":case"cut":case"paste":y=Cf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=vl}var x=(t&4)!==0,j=!x&&e==="scroll",p=x?g!==null?g+"Capture":null:g;x=[];for(var d=u,h;d!==null;){h=d;var b=h.stateNode;if(h.tag===5&&b!==null&&(h=b,p!==null&&(b=bn(d,p),b!=null&&x.push(Cn(d,b,h)))),j)break;d=d.return}0<x.length&&(g=new y(g,v,null,r,m),f.push({event:g,listeners:x}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&r!==ss&&(v=r.relatedTarget||r.fromElement)&&(Xt(v)||v[Et]))break e;if((y||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,y?(v=r.relatedTarget||r.toElement,y=u,v=v?Xt(v):null,v!==null&&(j=fr(v),v!==j||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(x=gl,b="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=vl,b="onPointerLeave",p="onPointerEnter",d="pointer"),j=y==null?g:_r(y),h=v==null?g:_r(v),g=new x(b,d+"leave",y,r,m),g.target=j,g.relatedTarget=h,b=null,Xt(m)===u&&(x=new x(p,d+"enter",v,r,m),x.target=h,x.relatedTarget=j,b=x),j=b,y&&v)t:{for(x=y,p=v,d=0,h=x;h;h=xr(h))d++;for(h=0,b=p;b;b=xr(b))h++;for(;0<d-h;)x=xr(x),d--;for(;0<h-d;)p=xr(p),h--;for(;d--;){if(x===p||p!==null&&x===p.alternate)break t;x=xr(x),p=xr(p)}x=null}else x=null;y!==null&&zl(f,g,y,x,!1),v!==null&&j!==null&&zl(f,j,v,x,!0)}}e:{if(g=u?_r(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var S=Gf;else if(bl(g))if(Cu)S=Zf;else{S=Yf;var E=Jf}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=Xf);if(S&&(S=S(e,u))){Nu(f,S,r,m);break e}E&&E(e,g,u),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&ts(g,"number",g.value)}switch(E=u?_r(u):window,e){case"focusin":(bl(E)||E.contentEditable==="true")&&(jr=E,fs=u,mn=null);break;case"focusout":mn=fs=jr=null;break;case"mousedown":ms=!0;break;case"contextmenu":case"mouseup":case"dragend":ms=!1,El(f,r,m);break;case"selectionchange":if(rm)break;case"keydown":case"keyup":El(f,r,m)}var N;if(ui)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else kr?_u(e,r)&&(z="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(z="onCompositionStart");z&&(Su&&r.locale!=="ko"&&(kr||z!=="onCompositionStart"?z==="onCompositionEnd"&&kr&&(N=ju()):(Lt=m,ii="value"in Lt?Lt.value:Lt.textContent,kr=!0)),E=Ta(u,z),0<E.length&&(z=new xl(z,e,null,r,m),f.push({event:z,listeners:E}),N?z.data=N:(N=Eu(r),N!==null&&(z.data=N)))),(N=Vf?qf(e,r):Hf(e,r))&&(u=Ta(u,"onBeforeInput"),0<u.length&&(m=new xl("onBeforeInput","beforeinput",null,r,m),f.push({event:m,listeners:u}),m.data=N))}Mu(f,t)})}function Cn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ta(e,t){for(var r=t+"Capture",n=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=bn(e,r),o!=null&&n.unshift(Cn(e,o,a)),o=bn(e,t),o!=null&&n.push(Cn(e,o,a))),e=e.return}return n}function xr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zl(e,t,r,n,a){for(var o=t._reactName,i=[];r!==null&&r!==n;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===n)break;l.tag===5&&u!==null&&(l=u,a?(c=bn(r,o),c!=null&&i.unshift(Cn(r,c,l))):a||(c=bn(r,o),c!=null&&i.push(Cn(r,c,l)))),r=r.return}i.length!==0&&e.push({event:t,listeners:i})}var sm=/\r\n?/g,im=/\u0000|\uFFFD/g;function Pl(e){return(typeof e=="string"?e:""+e).replace(sm,`
`).replace(im,"")}function ta(e,t,r){if(t=Pl(t),Pl(e)!==t&&r)throw Error(_(425))}function Da(){}var hs=null,gs=null;function xs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vs=typeof setTimeout=="function"?setTimeout:void 0,lm=typeof clearTimeout=="function"?clearTimeout:void 0,Tl=typeof Promise=="function"?Promise:void 0,cm=typeof queueMicrotask=="function"?queueMicrotask:typeof Tl<"u"?function(e){return Tl.resolve(null).then(e).catch(um)}:vs;function um(e){setTimeout(function(){throw e})}function $o(e,t){var r=t,n=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(n===0){e.removeChild(a),Sn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=a}while(r);Sn(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Dl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Jr=Math.random().toString(36).slice(2),pt="__reactFiber$"+Jr,zn="__reactProps$"+Jr,Et="__reactContainer$"+Jr,ys="__reactEvents$"+Jr,dm="__reactListeners$"+Jr,pm="__reactHandles$"+Jr;function Xt(e){var t=e[pt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Et]||r[pt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Dl(e);e!==null;){if(r=e[pt])return r;e=Dl(e)}return t}e=r,r=e.parentNode}return null}function Un(e){return e=e[pt]||e[Et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _r(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function to(e){return e[zn]||null}var ws=[],Er=-1;function Kt(e){return{current:e}}function X(e){0>Er||(e.current=ws[Er],ws[Er]=null,Er--)}function J(e,t){Er++,ws[Er]=e.current,e.current=t}var Ht={},Se=Kt(Ht),Le=Kt(!1),sr=Ht;function Br(e,t){var r=e.type.contextTypes;if(!r)return Ht;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in r)a[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ie(e){return e=e.childContextTypes,e!=null}function $a(){X(Le),X(Se)}function $l(e,t,r){if(Se.current!==Ht)throw Error(_(168));J(Se,t),J(Le,r)}function Fu(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var a in n)if(!(a in t))throw Error(_(108,Gp(e)||"Unknown",a));return re({},r,n)}function Ra(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ht,sr=Se.current,J(Se,e),J(Le,Le.current),!0}function Rl(e,t,r){var n=e.stateNode;if(!n)throw Error(_(169));r?(e=Fu(e,t,sr),n.__reactInternalMemoizedMergedChildContext=e,X(Le),X(Se),J(Se,e)):X(Le),J(Le,r)}var wt=null,ro=!1,Ro=!1;function Uu(e){wt===null?wt=[e]:wt.push(e)}function fm(e){ro=!0,Uu(e)}function Gt(){if(!Ro&&wt!==null){Ro=!0;var e=0,t=H;try{var r=wt;for(H=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}wt=null,ro=!1}catch(a){throw wt!==null&&(wt=wt.slice(e+1)),pu(ni,Gt),a}finally{H=t,Ro=!1}}return null}var Nr=[],Cr=0,La=null,Ia=0,He=[],Qe=0,ir=null,kt=1,jt="";function Jt(e,t){Nr[Cr++]=Ia,Nr[Cr++]=La,La=e,Ia=t}function Bu(e,t,r){He[Qe++]=kt,He[Qe++]=jt,He[Qe++]=ir,ir=e;var n=kt;e=jt;var a=32-ot(n)-1;n&=~(1<<a),r+=1;var o=32-ot(t)+a;if(30<o){var i=a-a%5;o=(n&(1<<i)-1).toString(32),n>>=i,a-=i,kt=1<<32-ot(t)+a|r<<a|n,jt=o+e}else kt=1<<o|r<<a|n,jt=e}function pi(e){e.return!==null&&(Jt(e,1),Bu(e,1,0))}function fi(e){for(;e===La;)La=Nr[--Cr],Nr[Cr]=null,Ia=Nr[--Cr],Nr[Cr]=null;for(;e===ir;)ir=He[--Qe],He[Qe]=null,jt=He[--Qe],He[Qe]=null,kt=He[--Qe],He[Qe]=null}var Ue=null,Fe=null,Z=!1,nt=null;function Wu(e,t){var r=Ke(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Ll(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ue=e,Fe=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ue=e,Fe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=ir!==null?{id:kt,overflow:jt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Ke(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Ue=e,Fe=null,!0):!1;default:return!1}}function bs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ks(e){if(Z){var t=Fe;if(t){var r=t;if(!Ll(e,t)){if(bs(e))throw Error(_(418));t=Ft(r.nextSibling);var n=Ue;t&&Ll(e,t)?Wu(n,r):(e.flags=e.flags&-4097|2,Z=!1,Ue=e)}}else{if(bs(e))throw Error(_(418));e.flags=e.flags&-4097|2,Z=!1,Ue=e}}}function Il(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ue=e}function ra(e){if(e!==Ue)return!1;if(!Z)return Il(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xs(e.type,e.memoizedProps)),t&&(t=Fe)){if(bs(e))throw Vu(),Error(_(418));for(;t;)Wu(e,t),t=Ft(t.nextSibling)}if(Il(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Fe=Ft(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Fe=null}}else Fe=Ue?Ft(e.stateNode.nextSibling):null;return!0}function Vu(){for(var e=Fe;e;)e=Ft(e.nextSibling)}function Wr(){Fe=Ue=null,Z=!1}function mi(e){nt===null?nt=[e]:nt.push(e)}var mm=zt.ReactCurrentBatchConfig;function rn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(_(309));var n=r.stateNode}if(!n)throw Error(_(147,e));var a=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var l=a.refs;i===null?delete l[o]:l[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!r._owner)throw Error(_(290,e))}return e}function na(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Al(e){var t=e._init;return t(e._payload)}function qu(e){function t(p,d){if(e){var h=p.deletions;h===null?(p.deletions=[d],p.flags|=16):h.push(d)}}function r(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function n(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function a(p,d){return p=Vt(p,d),p.index=0,p.sibling=null,p}function o(p,d,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<d?(p.flags|=2,d):h):(p.flags|=2,d)):(p.flags|=1048576,d)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,d,h,b){return d===null||d.tag!==6?(d=Uo(h,p.mode,b),d.return=p,d):(d=a(d,h),d.return=p,d)}function c(p,d,h,b){var S=h.type;return S===br?m(p,d,h.props.children,b,h.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Tt&&Al(S)===d.type)?(b=a(d,h.props),b.ref=rn(p,d,h),b.return=p,b):(b=ka(h.type,h.key,h.props,null,p.mode,b),b.ref=rn(p,d,h),b.return=p,b)}function u(p,d,h,b){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Bo(h,p.mode,b),d.return=p,d):(d=a(d,h.children||[]),d.return=p,d)}function m(p,d,h,b,S){return d===null||d.tag!==7?(d=nr(h,p.mode,b,S),d.return=p,d):(d=a(d,h),d.return=p,d)}function f(p,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Uo(""+d,p.mode,h),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Hn:return h=ka(d.type,d.key,d.props,null,p.mode,h),h.ref=rn(p,null,d),h.return=p,h;case wr:return d=Bo(d,p.mode,h),d.return=p,d;case Tt:var b=d._init;return f(p,b(d._payload),h)}if(sn(d)||Yr(d))return d=nr(d,p.mode,h,null),d.return=p,d;na(p,d)}return null}function g(p,d,h,b){var S=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:l(p,d,""+h,b);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Hn:return h.key===S?c(p,d,h,b):null;case wr:return h.key===S?u(p,d,h,b):null;case Tt:return S=h._init,g(p,d,S(h._payload),b)}if(sn(h)||Yr(h))return S!==null?null:m(p,d,h,b,null);na(p,h)}return null}function y(p,d,h,b,S){if(typeof b=="string"&&b!==""||typeof b=="number")return p=p.get(h)||null,l(d,p,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Hn:return p=p.get(b.key===null?h:b.key)||null,c(d,p,b,S);case wr:return p=p.get(b.key===null?h:b.key)||null,u(d,p,b,S);case Tt:var E=b._init;return y(p,d,h,E(b._payload),S)}if(sn(b)||Yr(b))return p=p.get(h)||null,m(d,p,b,S,null);na(d,b)}return null}function v(p,d,h,b){for(var S=null,E=null,N=d,z=d=0,D=null;N!==null&&z<h.length;z++){N.index>z?(D=N,N=null):D=N.sibling;var L=g(p,N,h[z],b);if(L===null){N===null&&(N=D);break}e&&N&&L.alternate===null&&t(p,N),d=o(L,d,z),E===null?S=L:E.sibling=L,E=L,N=D}if(z===h.length)return r(p,N),Z&&Jt(p,z),S;if(N===null){for(;z<h.length;z++)N=f(p,h[z],b),N!==null&&(d=o(N,d,z),E===null?S=N:E.sibling=N,E=N);return Z&&Jt(p,z),S}for(N=n(p,N);z<h.length;z++)D=y(N,p,z,h[z],b),D!==null&&(e&&D.alternate!==null&&N.delete(D.key===null?z:D.key),d=o(D,d,z),E===null?S=D:E.sibling=D,E=D);return e&&N.forEach(function(B){return t(p,B)}),Z&&Jt(p,z),S}function x(p,d,h,b){var S=Yr(h);if(typeof S!="function")throw Error(_(150));if(h=S.call(h),h==null)throw Error(_(151));for(var E=S=null,N=d,z=d=0,D=null,L=h.next();N!==null&&!L.done;z++,L=h.next()){N.index>z?(D=N,N=null):D=N.sibling;var B=g(p,N,L.value,b);if(B===null){N===null&&(N=D);break}e&&N&&B.alternate===null&&t(p,N),d=o(B,d,z),E===null?S=B:E.sibling=B,E=B,N=D}if(L.done)return r(p,N),Z&&Jt(p,z),S;if(N===null){for(;!L.done;z++,L=h.next())L=f(p,L.value,b),L!==null&&(d=o(L,d,z),E===null?S=L:E.sibling=L,E=L);return Z&&Jt(p,z),S}for(N=n(p,N);!L.done;z++,L=h.next())L=y(N,p,z,L.value,b),L!==null&&(e&&L.alternate!==null&&N.delete(L.key===null?z:L.key),d=o(L,d,z),E===null?S=L:E.sibling=L,E=L);return e&&N.forEach(function(_e){return t(p,_e)}),Z&&Jt(p,z),S}function j(p,d,h,b){if(typeof h=="object"&&h!==null&&h.type===br&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Hn:e:{for(var S=h.key,E=d;E!==null;){if(E.key===S){if(S=h.type,S===br){if(E.tag===7){r(p,E.sibling),d=a(E,h.props.children),d.return=p,p=d;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Tt&&Al(S)===E.type){r(p,E.sibling),d=a(E,h.props),d.ref=rn(p,E,h),d.return=p,p=d;break e}r(p,E);break}else t(p,E);E=E.sibling}h.type===br?(d=nr(h.props.children,p.mode,b,h.key),d.return=p,p=d):(b=ka(h.type,h.key,h.props,null,p.mode,b),b.ref=rn(p,d,h),b.return=p,p=b)}return i(p);case wr:e:{for(E=h.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){r(p,d.sibling),d=a(d,h.children||[]),d.return=p,p=d;break e}else{r(p,d);break}else t(p,d);d=d.sibling}d=Bo(h,p.mode,b),d.return=p,p=d}return i(p);case Tt:return E=h._init,j(p,d,E(h._payload),b)}if(sn(h))return v(p,d,h,b);if(Yr(h))return x(p,d,h,b);na(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(r(p,d.sibling),d=a(d,h),d.return=p,p=d):(r(p,d),d=Uo(h,p.mode,b),d.return=p,p=d),i(p)):r(p,d)}return j}var Vr=qu(!0),Hu=qu(!1),Aa=Kt(null),Ma=null,zr=null,hi=null;function gi(){hi=zr=Ma=null}function xi(e){var t=Aa.current;X(Aa),e._currentValue=t}function js(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Ar(e,t){Ma=e,hi=zr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Re=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(hi!==e)if(e={context:e,memoizedValue:t,next:null},zr===null){if(Ma===null)throw Error(_(308));zr=e,Ma.dependencies={lanes:0,firstContext:e}}else zr=zr.next=e;return t}var Zt=null;function vi(e){Zt===null?Zt=[e]:Zt.push(e)}function Qu(e,t,r,n){var a=t.interleaved;return a===null?(r.next=r,vi(t)):(r.next=a.next,a.next=r),t.interleaved=r,Nt(e,n)}function Nt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Dt=!1;function yi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ku(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function St(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,U&2){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,Nt(e,r)}return a=n.interleaved,a===null?(t.next=t,vi(n)):(t.next=a.next,a.next=t),n.interleaved=t,Nt(e,r)}function ga(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ai(e,r)}}function Ml(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var a=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?a=o=i:o=o.next=i,r=r.next}while(r!==null);o===null?a=o=t:o=o.next=t}else a=o=t;r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Oa(e,t,r,n){var a=e.updateQueue;Dt=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,u=c.next;c.next=null,i===null?o=u:i.next=u,i=c;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==i&&(l===null?m.firstBaseUpdate=u:l.next=u,m.lastBaseUpdate=c))}if(o!==null){var f=a.baseState;i=0,m=u=c=null,l=o;do{var g=l.lane,y=l.eventTime;if((n&g)===g){m!==null&&(m=m.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,x=l;switch(g=t,y=r,x.tag){case 1:if(v=x.payload,typeof v=="function"){f=v.call(y,f,g);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,g=typeof v=="function"?v.call(y,f,g):v,g==null)break e;f=re({},f,g);break e;case 2:Dt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=a.effects,g===null?a.effects=[l]:g.push(l))}else y={eventTime:y,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(u=m=y,c=f):m=m.next=y,i|=g;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;g=l,l=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(!0);if(m===null&&(c=f),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=m,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);cr|=i,e.lanes=i,e.memoizedState=f}}function Ol(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],a=n.callback;if(a!==null){if(n.callback=null,n=r,typeof a!="function")throw Error(_(191,a));a.call(n)}}}var Bn={},ht=Kt(Bn),Pn=Kt(Bn),Tn=Kt(Bn);function er(e){if(e===Bn)throw Error(_(174));return e}function wi(e,t){switch(J(Tn,t),J(Pn,e),J(ht,Bn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ns(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ns(t,e)}X(ht),J(ht,t)}function qr(){X(ht),X(Pn),X(Tn)}function Gu(e){er(Tn.current);var t=er(ht.current),r=ns(t,e.type);t!==r&&(J(Pn,e),J(ht,r))}function bi(e){Pn.current===e&&(X(ht),X(Pn))}var ee=Kt(0);function Fa(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Lo=[];function ki(){for(var e=0;e<Lo.length;e++)Lo[e]._workInProgressVersionPrimary=null;Lo.length=0}var xa=zt.ReactCurrentDispatcher,Io=zt.ReactCurrentBatchConfig,lr=0,te=null,ce=null,de=null,Ua=!1,hn=!1,Dn=0,hm=0;function we(){throw Error(_(321))}function ji(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!it(e[r],t[r]))return!1;return!0}function Si(e,t,r,n,a,o){if(lr=o,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xa.current=e===null||e.memoizedState===null?ym:wm,e=r(n,a),hn){o=0;do{if(hn=!1,Dn=0,25<=o)throw Error(_(301));o+=1,de=ce=null,t.updateQueue=null,xa.current=bm,e=r(n,a)}while(hn)}if(xa.current=Ba,t=ce!==null&&ce.next!==null,lr=0,de=ce=te=null,Ua=!1,t)throw Error(_(300));return e}function _i(){var e=Dn!==0;return Dn=0,e}function dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?te.memoizedState=de=e:de=de.next=e,de}function Xe(){if(ce===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=de===null?te.memoizedState:de.next;if(t!==null)de=t,ce=e;else{if(e===null)throw Error(_(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},de===null?te.memoizedState=de=e:de=de.next=e}return de}function $n(e,t){return typeof t=="function"?t(e):t}function Ao(e){var t=Xe(),r=t.queue;if(r===null)throw Error(_(311));r.lastRenderedReducer=e;var n=ce,a=n.baseQueue,o=r.pending;if(o!==null){if(a!==null){var i=a.next;a.next=o.next,o.next=i}n.baseQueue=a=o,r.pending=null}if(a!==null){o=a.next,n=n.baseState;var l=i=null,c=null,u=o;do{var m=u.lane;if((lr&m)===m)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var f={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,i=n):c=c.next=f,te.lanes|=m,cr|=m}u=u.next}while(u!==null&&u!==o);c===null?i=n:c.next=l,it(n,t.memoizedState)||(Re=!0),t.memoizedState=n,t.baseState=i,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){a=e;do o=a.lane,te.lanes|=o,cr|=o,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Mo(e){var t=Xe(),r=t.queue;if(r===null)throw Error(_(311));r.lastRenderedReducer=e;var n=r.dispatch,a=r.pending,o=t.memoizedState;if(a!==null){r.pending=null;var i=a=a.next;do o=e(o,i.action),i=i.next;while(i!==a);it(o,t.memoizedState)||(Re=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function Ju(){}function Yu(e,t){var r=te,n=Xe(),a=t(),o=!it(n.memoizedState,a);if(o&&(n.memoizedState=a,Re=!0),n=n.queue,Ei(ed.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||de!==null&&de.memoizedState.tag&1){if(r.flags|=2048,Rn(9,Zu.bind(null,r,n,a,t),void 0,null),pe===null)throw Error(_(349));lr&30||Xu(r,t,a)}return a}function Xu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Zu(e,t,r,n){t.value=r,t.getSnapshot=n,td(t)&&rd(e)}function ed(e,t,r){return r(function(){td(t)&&rd(e)})}function td(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!it(e,r)}catch{return!0}}function rd(e){var t=Nt(e,1);t!==null&&st(t,e,1,-1)}function Fl(e){var t=dt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$n,lastRenderedState:e},t.queue=e,e=e.dispatch=vm.bind(null,te,e),[t.memoizedState,e]}function Rn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function nd(){return Xe().memoizedState}function va(e,t,r,n){var a=dt();te.flags|=e,a.memoizedState=Rn(1|t,r,void 0,n===void 0?null:n)}function no(e,t,r,n){var a=Xe();n=n===void 0?null:n;var o=void 0;if(ce!==null){var i=ce.memoizedState;if(o=i.destroy,n!==null&&ji(n,i.deps)){a.memoizedState=Rn(t,r,o,n);return}}te.flags|=e,a.memoizedState=Rn(1|t,r,o,n)}function Ul(e,t){return va(8390656,8,e,t)}function Ei(e,t){return no(2048,8,e,t)}function ad(e,t){return no(4,2,e,t)}function od(e,t){return no(4,4,e,t)}function sd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function id(e,t,r){return r=r!=null?r.concat([e]):null,no(4,4,sd.bind(null,t,e),r)}function Ni(){}function ld(e,t){var r=Xe();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ji(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function cd(e,t){var r=Xe();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ji(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function ud(e,t,r){return lr&21?(it(r,t)||(r=hu(),te.lanes|=r,cr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=r)}function gm(e,t){var r=H;H=r!==0&&4>r?r:4,e(!0);var n=Io.transition;Io.transition={};try{e(!1),t()}finally{H=r,Io.transition=n}}function dd(){return Xe().memoizedState}function xm(e,t,r){var n=Wt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},pd(e))fd(t,r);else if(r=Qu(e,t,r,n),r!==null){var a=Ce();st(r,e,n,a),md(r,t,n)}}function vm(e,t,r){var n=Wt(e),a={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(pd(e))fd(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,l=o(i,r);if(a.hasEagerState=!0,a.eagerState=l,it(l,i)){var c=t.interleaved;c===null?(a.next=a,vi(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}r=Qu(e,t,a,n),r!==null&&(a=Ce(),st(r,e,n,a),md(r,t,n))}}function pd(e){var t=e.alternate;return e===te||t!==null&&t===te}function fd(e,t){hn=Ua=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function md(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ai(e,r)}}var Ba={readContext:Ye,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},ym={readContext:Ye,useCallback:function(e,t){return dt().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:Ul,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,va(4194308,4,sd.bind(null,t,e),r)},useLayoutEffect:function(e,t){return va(4194308,4,e,t)},useInsertionEffect:function(e,t){return va(4,2,e,t)},useMemo:function(e,t){var r=dt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=dt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=xm.bind(null,te,e),[n.memoizedState,e]},useRef:function(e){var t=dt();return e={current:e},t.memoizedState=e},useState:Fl,useDebugValue:Ni,useDeferredValue:function(e){return dt().memoizedState=e},useTransition:function(){var e=Fl(!1),t=e[0];return e=gm.bind(null,e[1]),dt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=te,a=dt();if(Z){if(r===void 0)throw Error(_(407));r=r()}else{if(r=t(),pe===null)throw Error(_(349));lr&30||Xu(n,t,r)}a.memoizedState=r;var o={value:r,getSnapshot:t};return a.queue=o,Ul(ed.bind(null,n,o,e),[e]),n.flags|=2048,Rn(9,Zu.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=dt(),t=pe.identifierPrefix;if(Z){var r=jt,n=kt;r=(n&~(1<<32-ot(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Dn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=hm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wm={readContext:Ye,useCallback:ld,useContext:Ye,useEffect:Ei,useImperativeHandle:id,useInsertionEffect:ad,useLayoutEffect:od,useMemo:cd,useReducer:Ao,useRef:nd,useState:function(){return Ao($n)},useDebugValue:Ni,useDeferredValue:function(e){var t=Xe();return ud(t,ce.memoizedState,e)},useTransition:function(){var e=Ao($n)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:Ju,useSyncExternalStore:Yu,useId:dd,unstable_isNewReconciler:!1},bm={readContext:Ye,useCallback:ld,useContext:Ye,useEffect:Ei,useImperativeHandle:id,useInsertionEffect:ad,useLayoutEffect:od,useMemo:cd,useReducer:Mo,useRef:nd,useState:function(){return Mo($n)},useDebugValue:Ni,useDeferredValue:function(e){var t=Xe();return ce===null?t.memoizedState=e:ud(t,ce.memoizedState,e)},useTransition:function(){var e=Mo($n)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:Ju,useSyncExternalStore:Yu,useId:dd,unstable_isNewReconciler:!1};function tt(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Ss(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:re({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ao={isMounted:function(e){return(e=e._reactInternals)?fr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Ce(),a=Wt(e),o=St(n,a);o.payload=t,r!=null&&(o.callback=r),t=Ut(e,o,a),t!==null&&(st(t,e,a,n),ga(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Ce(),a=Wt(e),o=St(n,a);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=Ut(e,o,a),t!==null&&(st(t,e,a,n),ga(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ce(),n=Wt(e),a=St(r,n);a.tag=2,t!=null&&(a.callback=t),t=Ut(e,a,n),t!==null&&(st(t,e,n,r),ga(t,e,n))}};function Bl(e,t,r,n,a,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,i):t.prototype&&t.prototype.isPureReactComponent?!En(r,n)||!En(a,o):!0}function hd(e,t,r){var n=!1,a=Ht,o=t.contextType;return typeof o=="object"&&o!==null?o=Ye(o):(a=Ie(t)?sr:Se.current,n=t.contextTypes,o=(n=n!=null)?Br(e,a):Ht),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ao,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function Wl(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&ao.enqueueReplaceState(t,t.state,null)}function _s(e,t,r,n){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},yi(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=Ye(o):(o=Ie(t)?sr:Se.current,a.context=Br(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ss(e,t,o,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&ao.enqueueReplaceState(a,a.state,null),Oa(e,r,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Hr(e,t){try{var r="",n=t;do r+=Kp(n),n=n.return;while(n);var a=r}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function Oo(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Es(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var km=typeof WeakMap=="function"?WeakMap:Map;function gd(e,t,r){r=St(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Va||(Va=!0,Is=n),Es(e,t)},r}function xd(e,t,r){r=St(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=t.value;r.payload=function(){return n(a)},r.callback=function(){Es(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){Es(e,t),typeof n!="function"&&(Bt===null?Bt=new Set([this]):Bt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),r}function Vl(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new km;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(r)||(a.add(r),e=Im.bind(null,e,t,r),t.then(e,e))}function ql(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hl(e,t,r,n,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=St(-1,1),t.tag=2,Ut(r,t,1))),r.lanes|=1),e)}var jm=zt.ReactCurrentOwner,Re=!1;function Ne(e,t,r,n){t.child=e===null?Hu(t,null,r,n):Vr(t,e.child,r,n)}function Ql(e,t,r,n,a){r=r.render;var o=t.ref;return Ar(t,a),n=Si(e,t,r,n,o,a),r=_i(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ct(e,t,a)):(Z&&r&&pi(t),t.flags|=1,Ne(e,t,n,a),t.child)}function Kl(e,t,r,n,a){if(e===null){var o=r.type;return typeof o=="function"&&!Li(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,vd(e,t,o,n,a)):(e=ka(r.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&a)){var i=o.memoizedProps;if(r=r.compare,r=r!==null?r:En,r(i,n)&&e.ref===t.ref)return Ct(e,t,a)}return t.flags|=1,e=Vt(o,n),e.ref=t.ref,e.return=t,t.child=e}function vd(e,t,r,n,a){if(e!==null){var o=e.memoizedProps;if(En(o,n)&&e.ref===t.ref)if(Re=!1,t.pendingProps=n=o,(e.lanes&a)!==0)e.flags&131072&&(Re=!0);else return t.lanes=e.lanes,Ct(e,t,a)}return Ns(e,t,r,n,a)}function yd(e,t,r){var n=t.pendingProps,a=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(Tr,Oe),Oe|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(Tr,Oe),Oe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,J(Tr,Oe),Oe|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,J(Tr,Oe),Oe|=n;return Ne(e,t,a,r),t.child}function wd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ns(e,t,r,n,a){var o=Ie(r)?sr:Se.current;return o=Br(t,o),Ar(t,a),r=Si(e,t,r,n,o,a),n=_i(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ct(e,t,a)):(Z&&n&&pi(t),t.flags|=1,Ne(e,t,r,a),t.child)}function Gl(e,t,r,n,a){if(Ie(r)){var o=!0;Ra(t)}else o=!1;if(Ar(t,a),t.stateNode===null)ya(e,t),hd(t,r,n),_s(t,r,n,a),n=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var c=i.context,u=r.contextType;typeof u=="object"&&u!==null?u=Ye(u):(u=Ie(r)?sr:Se.current,u=Br(t,u));var m=r.getDerivedStateFromProps,f=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==n||c!==u)&&Wl(t,i,n,u),Dt=!1;var g=t.memoizedState;i.state=g,Oa(t,n,i,a),c=t.memoizedState,l!==n||g!==c||Le.current||Dt?(typeof m=="function"&&(Ss(t,r,m,n),c=t.memoizedState),(l=Dt||Bl(t,r,l,n,g,c,u))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),i.props=n,i.state=c,i.context=u,n=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,Ku(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:tt(t.type,l),i.props=u,f=t.pendingProps,g=i.context,c=r.contextType,typeof c=="object"&&c!==null?c=Ye(c):(c=Ie(r)?sr:Se.current,c=Br(t,c));var y=r.getDerivedStateFromProps;(m=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==f||g!==c)&&Wl(t,i,n,c),Dt=!1,g=t.memoizedState,i.state=g,Oa(t,n,i,a);var v=t.memoizedState;l!==f||g!==v||Le.current||Dt?(typeof y=="function"&&(Ss(t,r,y,n),v=t.memoizedState),(u=Dt||Bl(t,r,u,n,g,v,c)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,v,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,v,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=v),i.props=n,i.state=v,i.context=c,n=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return Cs(e,t,r,n,o,a)}function Cs(e,t,r,n,a,o){wd(e,t);var i=(t.flags&128)!==0;if(!n&&!i)return a&&Rl(t,r,!1),Ct(e,t,o);n=t.stateNode,jm.current=t;var l=i&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&i?(t.child=Vr(t,e.child,null,o),t.child=Vr(t,null,l,o)):Ne(e,t,l,o),t.memoizedState=n.state,a&&Rl(t,r,!0),t.child}function bd(e){var t=e.stateNode;t.pendingContext?$l(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$l(e,t.context,!1),wi(e,t.containerInfo)}function Jl(e,t,r,n,a){return Wr(),mi(a),t.flags|=256,Ne(e,t,r,n),t.child}var zs={dehydrated:null,treeContext:null,retryLane:0};function Ps(e){return{baseLanes:e,cachePool:null,transitions:null}}function kd(e,t,r){var n=t.pendingProps,a=ee.current,o=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),J(ee,a&1),e===null)return ks(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=n.children,e=n.fallback,o?(n=t.mode,o=t.child,i={mode:"hidden",children:i},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=io(i,n,0,null),e=nr(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ps(r),t.memoizedState=zs,e):Ci(t,i));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Sm(e,t,i,n,l,a,r);if(o){o=n.fallback,i=t.mode,a=e.child,l=a.sibling;var c={mode:"hidden",children:n.children};return!(i&1)&&t.child!==a?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=Vt(a,c),n.subtreeFlags=a.subtreeFlags&14680064),l!==null?o=Vt(l,o):(o=nr(o,i,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,i=e.child.memoizedState,i=i===null?Ps(r):{baseLanes:i.baseLanes|r,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~r,t.memoizedState=zs,n}return o=e.child,e=o.sibling,n=Vt(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Ci(e,t){return t=io({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function aa(e,t,r,n){return n!==null&&mi(n),Vr(t,e.child,null,r),e=Ci(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Sm(e,t,r,n,a,o,i){if(r)return t.flags&256?(t.flags&=-257,n=Oo(Error(_(422))),aa(e,t,i,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,a=t.mode,n=io({mode:"visible",children:n.children},a,0,null),o=nr(o,a,i,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&Vr(t,e.child,null,i),t.child.memoizedState=Ps(i),t.memoizedState=zs,o);if(!(t.mode&1))return aa(e,t,i,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var l=n.dgst;return n=l,o=Error(_(419)),n=Oo(o,n,void 0),aa(e,t,i,n)}if(l=(i&e.childLanes)!==0,Re||l){if(n=pe,n!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(n.suspendedLanes|i)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,Nt(e,a),st(n,e,a,-1))}return Ri(),n=Oo(Error(_(421))),aa(e,t,i,n)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Am.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Fe=Ft(a.nextSibling),Ue=t,Z=!0,nt=null,e!==null&&(He[Qe++]=kt,He[Qe++]=jt,He[Qe++]=ir,kt=e.id,jt=e.overflow,ir=t),t=Ci(t,n.children),t.flags|=4096,t)}function Yl(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),js(e.return,t,r)}function Fo(e,t,r,n,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=a)}function jd(e,t,r){var n=t.pendingProps,a=n.revealOrder,o=n.tail;if(Ne(e,t,n.children,r),n=ee.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yl(e,r,t);else if(e.tag===19)Yl(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(J(ee,n),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&Fa(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Fo(t,!1,a,r,o);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Fa(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Fo(t,!0,r,null,o);break;case"together":Fo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ya(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ct(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),cr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,r=Vt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Vt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function _m(e,t,r){switch(t.tag){case 3:bd(t),Wr();break;case 5:Gu(t);break;case 1:Ie(t.type)&&Ra(t);break;case 4:wi(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,a=t.memoizedProps.value;J(Aa,n._currentValue),n._currentValue=a;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(J(ee,ee.current&1),t.flags|=128,null):r&t.child.childLanes?kd(e,t,r):(J(ee,ee.current&1),e=Ct(e,t,r),e!==null?e.sibling:null);J(ee,ee.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return jd(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),J(ee,ee.current),n)break;return null;case 22:case 23:return t.lanes=0,yd(e,t,r)}return Ct(e,t,r)}var Sd,Ts,_d,Ed;Sd=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Ts=function(){};_d=function(e,t,r,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,er(ht.current);var o=null;switch(r){case"input":a=Zo(e,a),n=Zo(e,n),o=[];break;case"select":a=re({},a,{value:void 0}),n=re({},n,{value:void 0}),o=[];break;case"textarea":a=rs(e,a),n=rs(e,n),o=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Da)}as(r,n);var i;r=null;for(u in a)if(!n.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(i in l)l.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(yn.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var c=n[u];if(l=a!=null?a[u]:void 0,n.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in c)c.hasOwnProperty(i)&&l[i]!==c[i]&&(r||(r={}),r[i]=c[i])}else r||(o||(o=[]),o.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(yn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Y("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}r&&(o=o||[]).push("style",r);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Ed=function(e,t,r,n){r!==n&&(t.flags|=4)};function nn(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Em(e,t,r){var n=t.pendingProps;switch(fi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return Ie(t.type)&&$a(),be(t),null;case 3:return n=t.stateNode,qr(),X(Le),X(Se),ki(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ra(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,nt!==null&&(Os(nt),nt=null))),Ts(e,t),be(t),null;case 5:bi(t);var a=er(Tn.current);if(r=t.type,e!==null&&t.stateNode!=null)_d(e,t,r,n,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(_(166));return be(t),null}if(e=er(ht.current),ra(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[pt]=t,n[zn]=o,e=(t.mode&1)!==0,r){case"dialog":Y("cancel",n),Y("close",n);break;case"iframe":case"object":case"embed":Y("load",n);break;case"video":case"audio":for(a=0;a<cn.length;a++)Y(cn[a],n);break;case"source":Y("error",n);break;case"img":case"image":case"link":Y("error",n),Y("load",n);break;case"details":Y("toggle",n);break;case"input":sl(n,o),Y("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},Y("invalid",n);break;case"textarea":ll(n,o),Y("invalid",n)}as(r,o),a=null;for(var i in o)if(o.hasOwnProperty(i)){var l=o[i];i==="children"?typeof l=="string"?n.textContent!==l&&(o.suppressHydrationWarning!==!0&&ta(n.textContent,l,e),a=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&ta(n.textContent,l,e),a=["children",""+l]):yn.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&Y("scroll",n)}switch(r){case"input":Qn(n),il(n,o,!0);break;case"textarea":Qn(n),cl(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=Da)}n=a,t.updateQueue=n,n!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=eu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=i.createElement(r,{is:n.is}):(e=i.createElement(r),r==="select"&&(i=e,n.multiple?i.multiple=!0:n.size&&(i.size=n.size))):e=i.createElementNS(e,r),e[pt]=t,e[zn]=n,Sd(e,t,!1,!1),t.stateNode=e;e:{switch(i=os(r,n),r){case"dialog":Y("cancel",e),Y("close",e),a=n;break;case"iframe":case"object":case"embed":Y("load",e),a=n;break;case"video":case"audio":for(a=0;a<cn.length;a++)Y(cn[a],e);a=n;break;case"source":Y("error",e),a=n;break;case"img":case"image":case"link":Y("error",e),Y("load",e),a=n;break;case"details":Y("toggle",e),a=n;break;case"input":sl(e,n),a=Zo(e,n),Y("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=re({},n,{value:void 0}),Y("invalid",e);break;case"textarea":ll(e,n),a=rs(e,n),Y("invalid",e);break;default:a=n}as(r,a),l=a;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?nu(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&tu(e,c)):o==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&wn(e,c):typeof c=="number"&&wn(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(yn.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Y("scroll",e):c!=null&&Xs(e,o,c,i))}switch(r){case"input":Qn(e),il(e,n,!1);break;case"textarea":Qn(e),cl(e);break;case"option":n.value!=null&&e.setAttribute("value",""+qt(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?$r(e,!!n.multiple,o,!1):n.defaultValue!=null&&$r(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Da)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return be(t),null;case 6:if(e&&t.stateNode!=null)Ed(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(_(166));if(r=er(Tn.current),er(ht.current),ra(t)){if(n=t.stateNode,r=t.memoizedProps,n[pt]=t,(o=n.nodeValue!==r)&&(e=Ue,e!==null))switch(e.tag){case 3:ta(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ta(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[pt]=t,t.stateNode=n}return be(t),null;case 13:if(X(ee),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Fe!==null&&t.mode&1&&!(t.flags&128))Vu(),Wr(),t.flags|=98560,o=!1;else if(o=ra(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[pt]=t}else Wr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),o=!1}else nt!==null&&(Os(nt),nt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||ee.current&1?ue===0&&(ue=3):Ri())),t.updateQueue!==null&&(t.flags|=4),be(t),null);case 4:return qr(),Ts(e,t),e===null&&Nn(t.stateNode.containerInfo),be(t),null;case 10:return xi(t.type._context),be(t),null;case 17:return Ie(t.type)&&$a(),be(t),null;case 19:if(X(ee),o=t.memoizedState,o===null)return be(t),null;if(n=(t.flags&128)!==0,i=o.rendering,i===null)if(n)nn(o,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Fa(e),i!==null){for(t.flags|=128,nn(o,!1),n=i.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return J(ee,ee.current&1|2),t.child}e=e.sibling}o.tail!==null&&se()>Qr&&(t.flags|=128,n=!0,nn(o,!1),t.lanes=4194304)}else{if(!n)if(e=Fa(i),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),nn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!Z)return be(t),null}else 2*se()-o.renderingStartTime>Qr&&r!==1073741824&&(t.flags|=128,n=!0,nn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(r=o.last,r!==null?r.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=se(),t.sibling=null,r=ee.current,J(ee,n?r&1|2:r&1),t):(be(t),null);case 22:case 23:return $i(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Oe&1073741824&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Nm(e,t){switch(fi(t),t.tag){case 1:return Ie(t.type)&&$a(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qr(),X(Le),X(Se),ki(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return bi(t),null;case 13:if(X(ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Wr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(ee),null;case 4:return qr(),null;case 10:return xi(t.type._context),null;case 22:case 23:return $i(),null;case 24:return null;default:return null}}var oa=!1,je=!1,Cm=typeof WeakSet=="function"?WeakSet:Set,P=null;function Pr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){ne(e,t,n)}else r.current=null}function Ds(e,t,r){try{r()}catch(n){ne(e,t,n)}}var Xl=!1;function zm(e,t){if(hs=za,e=Tu(),di(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var a=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var i=0,l=-1,c=-1,u=0,m=0,f=e,g=null;t:for(;;){for(var y;f!==r||a!==0&&f.nodeType!==3||(l=i+a),f!==o||n!==0&&f.nodeType!==3||(c=i+n),f.nodeType===3&&(i+=f.nodeValue.length),(y=f.firstChild)!==null;)g=f,f=y;for(;;){if(f===e)break t;if(g===r&&++u===a&&(l=i),g===o&&++m===n&&(c=i),(y=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=y}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(gs={focusedElem:e,selectionRange:r},za=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,j=v.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:tt(t.type,x),j);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(b){ne(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return v=Xl,Xl=!1,v}function gn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&Ds(t,r,o)}a=a.next}while(a!==n)}}function oo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function $s(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Nd(e){var t=e.alternate;t!==null&&(e.alternate=null,Nd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[zn],delete t[ys],delete t[dm],delete t[pm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cd(e){return e.tag===5||e.tag===3||e.tag===4}function Zl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rs(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Da));else if(n!==4&&(e=e.child,e!==null))for(Rs(e,t,r),e=e.sibling;e!==null;)Rs(e,t,r),e=e.sibling}function Ls(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Ls(e,t,r),e=e.sibling;e!==null;)Ls(e,t,r),e=e.sibling}var he=null,rt=!1;function Pt(e,t,r){for(r=r.child;r!==null;)zd(e,t,r),r=r.sibling}function zd(e,t,r){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Ya,r)}catch{}switch(r.tag){case 5:je||Pr(r,t);case 6:var n=he,a=rt;he=null,Pt(e,t,r),he=n,rt=a,he!==null&&(rt?(e=he,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):he.removeChild(r.stateNode));break;case 18:he!==null&&(rt?(e=he,r=r.stateNode,e.nodeType===8?$o(e.parentNode,r):e.nodeType===1&&$o(e,r),Sn(e)):$o(he,r.stateNode));break;case 4:n=he,a=rt,he=r.stateNode.containerInfo,rt=!0,Pt(e,t,r),he=n,rt=a;break;case 0:case 11:case 14:case 15:if(!je&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var o=a,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Ds(r,t,i),a=a.next}while(a!==n)}Pt(e,t,r);break;case 1:if(!je&&(Pr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){ne(r,t,l)}Pt(e,t,r);break;case 21:Pt(e,t,r);break;case 22:r.mode&1?(je=(n=je)||r.memoizedState!==null,Pt(e,t,r),je=n):Pt(e,t,r);break;default:Pt(e,t,r)}}function ec(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Cm),t.forEach(function(n){var a=Mm.bind(null,e,n);r.has(n)||(r.add(n),n.then(a,a))})}}function Ze(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var a=r[n];try{var o=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:he=l.stateNode,rt=!1;break e;case 3:he=l.stateNode.containerInfo,rt=!0;break e;case 4:he=l.stateNode.containerInfo,rt=!0;break e}l=l.return}if(he===null)throw Error(_(160));zd(o,i,a),he=null,rt=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){ne(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pd(t,e),t=t.sibling}function Pd(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ze(t,e),ct(e),n&4){try{gn(3,e,e.return),oo(3,e)}catch(x){ne(e,e.return,x)}try{gn(5,e,e.return)}catch(x){ne(e,e.return,x)}}break;case 1:Ze(t,e),ct(e),n&512&&r!==null&&Pr(r,r.return);break;case 5:if(Ze(t,e),ct(e),n&512&&r!==null&&Pr(r,r.return),e.flags&32){var a=e.stateNode;try{wn(a,"")}catch(x){ne(e,e.return,x)}}if(n&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,i=r!==null?r.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Xc(a,o),os(l,i);var u=os(l,o);for(i=0;i<c.length;i+=2){var m=c[i],f=c[i+1];m==="style"?nu(a,f):m==="dangerouslySetInnerHTML"?tu(a,f):m==="children"?wn(a,f):Xs(a,m,f,u)}switch(l){case"input":es(a,o);break;case"textarea":Zc(a,o);break;case"select":var g=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?$r(a,!!o.multiple,y,!1):g!==!!o.multiple&&(o.defaultValue!=null?$r(a,!!o.multiple,o.defaultValue,!0):$r(a,!!o.multiple,o.multiple?[]:"",!1))}a[zn]=o}catch(x){ne(e,e.return,x)}}break;case 6:if(Ze(t,e),ct(e),n&4){if(e.stateNode===null)throw Error(_(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(x){ne(e,e.return,x)}}break;case 3:if(Ze(t,e),ct(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Sn(t.containerInfo)}catch(x){ne(e,e.return,x)}break;case 4:Ze(t,e),ct(e);break;case 13:Ze(t,e),ct(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(Ti=se())),n&4&&ec(e);break;case 22:if(m=r!==null&&r.memoizedState!==null,e.mode&1?(je=(u=je)||m,Ze(t,e),je=u):Ze(t,e),ct(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(P=e,m=e.child;m!==null;){for(f=P=m;P!==null;){switch(g=P,y=g.child,g.tag){case 0:case 11:case 14:case 15:gn(4,g,g.return);break;case 1:Pr(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){n=g,r=g.return;try{t=n,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){ne(n,r,x)}}break;case 5:Pr(g,g.return);break;case 22:if(g.memoizedState!==null){rc(f);continue}}y!==null?(y.return=g,P=y):rc(f)}m=m.sibling}e:for(m=null,f=e;;){if(f.tag===5){if(m===null){m=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,c=f.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=ru("display",i))}catch(x){ne(e,e.return,x)}}}else if(f.tag===6){if(m===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){ne(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;m===f&&(m=null),f=f.return}m===f&&(m=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ze(t,e),ct(e),n&4&&ec(e);break;case 21:break;default:Ze(t,e),ct(e)}}function ct(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Cd(r)){var n=r;break e}r=r.return}throw Error(_(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(wn(a,""),n.flags&=-33);var o=Zl(e);Ls(e,o,a);break;case 3:case 4:var i=n.stateNode.containerInfo,l=Zl(e);Rs(e,l,i);break;default:throw Error(_(161))}}catch(c){ne(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pm(e,t,r){P=e,Td(e)}function Td(e,t,r){for(var n=(e.mode&1)!==0;P!==null;){var a=P,o=a.child;if(a.tag===22&&n){var i=a.memoizedState!==null||oa;if(!i){var l=a.alternate,c=l!==null&&l.memoizedState!==null||je;l=oa;var u=je;if(oa=i,(je=c)&&!u)for(P=a;P!==null;)i=P,c=i.child,i.tag===22&&i.memoizedState!==null?nc(a):c!==null?(c.return=i,P=c):nc(a);for(;o!==null;)P=o,Td(o),o=o.sibling;P=a,oa=l,je=u}tc(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,P=o):tc(e)}}function tc(e){for(;P!==null;){var t=P;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:je||oo(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!je)if(r===null)n.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:tt(t.type,r.memoizedProps);n.componentDidUpdate(a,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ol(t,o,n);break;case 3:var i=t.updateQueue;if(i!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Ol(t,i,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var f=m.dehydrated;f!==null&&Sn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}je||t.flags&512&&$s(t)}catch(g){ne(t,t.return,g)}}if(t===e){P=null;break}if(r=t.sibling,r!==null){r.return=t.return,P=r;break}P=t.return}}function rc(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var r=t.sibling;if(r!==null){r.return=t.return,P=r;break}P=t.return}}function nc(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{oo(4,t)}catch(c){ne(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var a=t.return;try{n.componentDidMount()}catch(c){ne(t,a,c)}}var o=t.return;try{$s(t)}catch(c){ne(t,o,c)}break;case 5:var i=t.return;try{$s(t)}catch(c){ne(t,i,c)}}}catch(c){ne(t,t.return,c)}if(t===e){P=null;break}var l=t.sibling;if(l!==null){l.return=t.return,P=l;break}P=t.return}}var Tm=Math.ceil,Wa=zt.ReactCurrentDispatcher,zi=zt.ReactCurrentOwner,Je=zt.ReactCurrentBatchConfig,U=0,pe=null,ie=null,ge=0,Oe=0,Tr=Kt(0),ue=0,Ln=null,cr=0,so=0,Pi=0,xn=null,$e=null,Ti=0,Qr=1/0,vt=null,Va=!1,Is=null,Bt=null,sa=!1,It=null,qa=0,vn=0,As=null,wa=-1,ba=0;function Ce(){return U&6?se():wa!==-1?wa:wa=se()}function Wt(e){return e.mode&1?U&2&&ge!==0?ge&-ge:mm.transition!==null?(ba===0&&(ba=hu()),ba):(e=H,e!==0||(e=window.event,e=e===void 0?16:ku(e.type)),e):1}function st(e,t,r,n){if(50<vn)throw vn=0,As=null,Error(_(185));On(e,r,n),(!(U&2)||e!==pe)&&(e===pe&&(!(U&2)&&(so|=r),ue===4&&Rt(e,ge)),Ae(e,n),r===1&&U===0&&!(t.mode&1)&&(Qr=se()+500,ro&&Gt()))}function Ae(e,t){var r=e.callbackNode;mf(e,t);var n=Ca(e,e===pe?ge:0);if(n===0)r!==null&&pl(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&pl(r),t===1)e.tag===0?fm(ac.bind(null,e)):Uu(ac.bind(null,e)),cm(function(){!(U&6)&&Gt()}),r=null;else{switch(gu(n)){case 1:r=ni;break;case 4:r=fu;break;case 16:r=Na;break;case 536870912:r=mu;break;default:r=Na}r=Od(r,Dd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Dd(e,t){if(wa=-1,ba=0,U&6)throw Error(_(327));var r=e.callbackNode;if(Mr()&&e.callbackNode!==r)return null;var n=Ca(e,e===pe?ge:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Ha(e,n);else{t=n;var a=U;U|=2;var o=Rd();(pe!==e||ge!==t)&&(vt=null,Qr=se()+500,rr(e,t));do try{Rm();break}catch(l){$d(e,l)}while(!0);gi(),Wa.current=o,U=a,ie!==null?t=0:(pe=null,ge=0,t=ue)}if(t!==0){if(t===2&&(a=us(e),a!==0&&(n=a,t=Ms(e,a))),t===1)throw r=Ln,rr(e,0),Rt(e,n),Ae(e,se()),r;if(t===6)Rt(e,n);else{if(a=e.current.alternate,!(n&30)&&!Dm(a)&&(t=Ha(e,n),t===2&&(o=us(e),o!==0&&(n=o,t=Ms(e,o))),t===1))throw r=Ln,rr(e,0),Rt(e,n),Ae(e,se()),r;switch(e.finishedWork=a,e.finishedLanes=n,t){case 0:case 1:throw Error(_(345));case 2:Yt(e,$e,vt);break;case 3:if(Rt(e,n),(n&130023424)===n&&(t=Ti+500-se(),10<t)){if(Ca(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){Ce(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=vs(Yt.bind(null,e,$e,vt),t);break}Yt(e,$e,vt);break;case 4:if(Rt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,a=-1;0<n;){var i=31-ot(n);o=1<<i,i=t[i],i>a&&(a=i),n&=~o}if(n=a,n=se()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Tm(n/1960))-n,10<n){e.timeoutHandle=vs(Yt.bind(null,e,$e,vt),n);break}Yt(e,$e,vt);break;case 5:Yt(e,$e,vt);break;default:throw Error(_(329))}}}return Ae(e,se()),e.callbackNode===r?Dd.bind(null,e):null}function Ms(e,t){var r=xn;return e.current.memoizedState.isDehydrated&&(rr(e,t).flags|=256),e=Ha(e,t),e!==2&&(t=$e,$e=r,t!==null&&Os(t)),e}function Os(e){$e===null?$e=e:$e.push.apply($e,e)}function Dm(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var a=r[n],o=a.getSnapshot;a=a.value;try{if(!it(o(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rt(e,t){for(t&=~Pi,t&=~so,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-ot(t),n=1<<r;e[r]=-1,t&=~n}}function ac(e){if(U&6)throw Error(_(327));Mr();var t=Ca(e,0);if(!(t&1))return Ae(e,se()),null;var r=Ha(e,t);if(e.tag!==0&&r===2){var n=us(e);n!==0&&(t=n,r=Ms(e,n))}if(r===1)throw r=Ln,rr(e,0),Rt(e,t),Ae(e,se()),r;if(r===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yt(e,$e,vt),Ae(e,se()),null}function Di(e,t){var r=U;U|=1;try{return e(t)}finally{U=r,U===0&&(Qr=se()+500,ro&&Gt())}}function ur(e){It!==null&&It.tag===0&&!(U&6)&&Mr();var t=U;U|=1;var r=Je.transition,n=H;try{if(Je.transition=null,H=1,e)return e()}finally{H=n,Je.transition=r,U=t,!(U&6)&&Gt()}}function $i(){Oe=Tr.current,X(Tr)}function rr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,lm(r)),ie!==null)for(r=ie.return;r!==null;){var n=r;switch(fi(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&$a();break;case 3:qr(),X(Le),X(Se),ki();break;case 5:bi(n);break;case 4:qr();break;case 13:X(ee);break;case 19:X(ee);break;case 10:xi(n.type._context);break;case 22:case 23:$i()}r=r.return}if(pe=e,ie=e=Vt(e.current,null),ge=Oe=t,ue=0,Ln=null,Pi=so=cr=0,$e=xn=null,Zt!==null){for(t=0;t<Zt.length;t++)if(r=Zt[t],n=r.interleaved,n!==null){r.interleaved=null;var a=n.next,o=r.pending;if(o!==null){var i=o.next;o.next=a,n.next=i}r.pending=n}Zt=null}return e}function $d(e,t){do{var r=ie;try{if(gi(),xa.current=Ba,Ua){for(var n=te.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}Ua=!1}if(lr=0,de=ce=te=null,hn=!1,Dn=0,zi.current=null,r===null||r.return===null){ue=1,Ln=t,ie=null;break}e:{var o=e,i=r.return,l=r,c=t;if(t=ge,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,m=l,f=m.tag;if(!(m.mode&1)&&(f===0||f===11||f===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=ql(i);if(y!==null){y.flags&=-257,Hl(y,i,l,o,t),y.mode&1&&Vl(o,u,t),t=y,c=u;var v=t.updateQueue;if(v===null){var x=new Set;x.add(c),t.updateQueue=x}else v.add(c);break e}else{if(!(t&1)){Vl(o,u,t),Ri();break e}c=Error(_(426))}}else if(Z&&l.mode&1){var j=ql(i);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Hl(j,i,l,o,t),mi(Hr(c,l));break e}}o=c=Hr(c,l),ue!==4&&(ue=2),xn===null?xn=[o]:xn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=gd(o,c,t);Ml(o,p);break e;case 1:l=c;var d=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Bt===null||!Bt.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=xd(o,l,t);Ml(o,b);break e}}o=o.return}while(o!==null)}Id(r)}catch(S){t=S,ie===r&&r!==null&&(ie=r=r.return);continue}break}while(!0)}function Rd(){var e=Wa.current;return Wa.current=Ba,e===null?Ba:e}function Ri(){(ue===0||ue===3||ue===2)&&(ue=4),pe===null||!(cr&268435455)&&!(so&268435455)||Rt(pe,ge)}function Ha(e,t){var r=U;U|=2;var n=Rd();(pe!==e||ge!==t)&&(vt=null,rr(e,t));do try{$m();break}catch(a){$d(e,a)}while(!0);if(gi(),U=r,Wa.current=n,ie!==null)throw Error(_(261));return pe=null,ge=0,ue}function $m(){for(;ie!==null;)Ld(ie)}function Rm(){for(;ie!==null&&!af();)Ld(ie)}function Ld(e){var t=Md(e.alternate,e,Oe);e.memoizedProps=e.pendingProps,t===null?Id(e):ie=t,zi.current=null}function Id(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Nm(r,t),r!==null){r.flags&=32767,ie=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,ie=null;return}}else if(r=Em(r,t,Oe),r!==null){ie=r;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);ue===0&&(ue=5)}function Yt(e,t,r){var n=H,a=Je.transition;try{Je.transition=null,H=1,Lm(e,t,r,n)}finally{Je.transition=a,H=n}return null}function Lm(e,t,r,n){do Mr();while(It!==null);if(U&6)throw Error(_(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(hf(e,o),e===pe&&(ie=pe=null,ge=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||sa||(sa=!0,Od(Na,function(){return Mr(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Je.transition,Je.transition=null;var i=H;H=1;var l=U;U|=4,zi.current=null,zm(e,r),Pd(r,e),tm(gs),za=!!hs,gs=hs=null,e.current=r,Pm(r),of(),U=l,H=i,Je.transition=o}else e.current=r;if(sa&&(sa=!1,It=e,qa=a),o=e.pendingLanes,o===0&&(Bt=null),cf(r.stateNode),Ae(e,se()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],n(a.value,{componentStack:a.stack,digest:a.digest});if(Va)throw Va=!1,e=Is,Is=null,e;return qa&1&&e.tag!==0&&Mr(),o=e.pendingLanes,o&1?e===As?vn++:(vn=0,As=e):vn=0,Gt(),null}function Mr(){if(It!==null){var e=gu(qa),t=Je.transition,r=H;try{if(Je.transition=null,H=16>e?16:e,It===null)var n=!1;else{if(e=It,It=null,qa=0,U&6)throw Error(_(331));var a=U;for(U|=4,P=e.current;P!==null;){var o=P,i=o.child;if(P.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(P=u;P!==null;){var m=P;switch(m.tag){case 0:case 11:case 15:gn(8,m,o)}var f=m.child;if(f!==null)f.return=m,P=f;else for(;P!==null;){m=P;var g=m.sibling,y=m.return;if(Nd(m),m===u){P=null;break}if(g!==null){g.return=y,P=g;break}P=y}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var j=x.sibling;x.sibling=null,x=j}while(x!==null)}}P=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,P=i;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:gn(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,P=p;break e}P=o.return}}var d=e.current;for(P=d;P!==null;){i=P;var h=i.child;if(i.subtreeFlags&2064&&h!==null)h.return=i,P=h;else e:for(i=d;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:oo(9,l)}}catch(S){ne(l,l.return,S)}if(l===i){P=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,P=b;break e}P=l.return}}if(U=a,Gt(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Ya,e)}catch{}n=!0}return n}finally{H=r,Je.transition=t}}return!1}function oc(e,t,r){t=Hr(r,t),t=gd(e,t,1),e=Ut(e,t,1),t=Ce(),e!==null&&(On(e,1,t),Ae(e,t))}function ne(e,t,r){if(e.tag===3)oc(e,e,r);else for(;t!==null;){if(t.tag===3){oc(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Bt===null||!Bt.has(n))){e=Hr(r,e),e=xd(t,e,1),t=Ut(t,e,1),e=Ce(),t!==null&&(On(t,1,e),Ae(t,e));break}}t=t.return}}function Im(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Ce(),e.pingedLanes|=e.suspendedLanes&r,pe===e&&(ge&r)===r&&(ue===4||ue===3&&(ge&130023424)===ge&&500>se()-Ti?rr(e,0):Pi|=r),Ae(e,t)}function Ad(e,t){t===0&&(e.mode&1?(t=Jn,Jn<<=1,!(Jn&130023424)&&(Jn=4194304)):t=1);var r=Ce();e=Nt(e,t),e!==null&&(On(e,t,r),Ae(e,r))}function Am(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Ad(e,r)}function Mm(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(_(314))}n!==null&&n.delete(t),Ad(e,r)}var Md;Md=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)Re=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Re=!1,_m(e,t,r);Re=!!(e.flags&131072)}else Re=!1,Z&&t.flags&1048576&&Bu(t,Ia,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;ya(e,t),e=t.pendingProps;var a=Br(t,Se.current);Ar(t,r),a=Si(null,t,n,e,a,r);var o=_i();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ie(n)?(o=!0,Ra(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,yi(t),a.updater=ao,t.stateNode=a,a._reactInternals=t,_s(t,n,e,r),t=Cs(null,t,n,!0,o,r)):(t.tag=0,Z&&o&&pi(t),Ne(null,t,a,r),t=t.child),t;case 16:n=t.elementType;e:{switch(ya(e,t),e=t.pendingProps,a=n._init,n=a(n._payload),t.type=n,a=t.tag=Fm(n),e=tt(n,e),a){case 0:t=Ns(null,t,n,e,r);break e;case 1:t=Gl(null,t,n,e,r);break e;case 11:t=Ql(null,t,n,e,r);break e;case 14:t=Kl(null,t,n,tt(n.type,e),r);break e}throw Error(_(306,n,""))}return t;case 0:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:tt(n,a),Ns(e,t,n,a,r);case 1:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:tt(n,a),Gl(e,t,n,a,r);case 3:e:{if(bd(t),e===null)throw Error(_(387));n=t.pendingProps,o=t.memoizedState,a=o.element,Ku(e,t),Oa(t,n,null,r);var i=t.memoizedState;if(n=i.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Hr(Error(_(423)),t),t=Jl(e,t,n,r,a);break e}else if(n!==a){a=Hr(Error(_(424)),t),t=Jl(e,t,n,r,a);break e}else for(Fe=Ft(t.stateNode.containerInfo.firstChild),Ue=t,Z=!0,nt=null,r=Hu(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Wr(),n===a){t=Ct(e,t,r);break e}Ne(e,t,n,r)}t=t.child}return t;case 5:return Gu(t),e===null&&ks(t),n=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,i=a.children,xs(n,a)?i=null:o!==null&&xs(n,o)&&(t.flags|=32),wd(e,t),Ne(e,t,i,r),t.child;case 6:return e===null&&ks(t),null;case 13:return kd(e,t,r);case 4:return wi(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Vr(t,null,n,r):Ne(e,t,n,r),t.child;case 11:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:tt(n,a),Ql(e,t,n,a,r);case 7:return Ne(e,t,t.pendingProps,r),t.child;case 8:return Ne(e,t,t.pendingProps.children,r),t.child;case 12:return Ne(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,a=t.pendingProps,o=t.memoizedProps,i=a.value,J(Aa,n._currentValue),n._currentValue=i,o!==null)if(it(o.value,i)){if(o.children===a.children&&!Le.current){t=Ct(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){i=o.child;for(var c=l.firstContext;c!==null;){if(c.context===n){if(o.tag===1){c=St(-1,r&-r),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?c.next=c:(c.next=m.next,m.next=c),u.pending=c}}o.lanes|=r,c=o.alternate,c!==null&&(c.lanes|=r),js(o.return,r,t),l.lanes|=r;break}c=c.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(_(341));i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),js(i,r,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}Ne(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,n=t.pendingProps.children,Ar(t,r),a=Ye(a),n=n(a),t.flags|=1,Ne(e,t,n,r),t.child;case 14:return n=t.type,a=tt(n,t.pendingProps),a=tt(n.type,a),Kl(e,t,n,a,r);case 15:return vd(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:tt(n,a),ya(e,t),t.tag=1,Ie(n)?(e=!0,Ra(t)):e=!1,Ar(t,r),hd(t,n,a),_s(t,n,a,r),Cs(null,t,n,!0,e,r);case 19:return jd(e,t,r);case 22:return yd(e,t,r)}throw Error(_(156,t.tag))};function Od(e,t){return pu(e,t)}function Om(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(e,t,r,n){return new Om(e,t,r,n)}function Li(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fm(e){if(typeof e=="function")return Li(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ei)return 11;if(e===ti)return 14}return 2}function Vt(e,t){var r=e.alternate;return r===null?(r=Ke(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ka(e,t,r,n,a,o){var i=2;if(n=e,typeof e=="function")Li(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case br:return nr(r.children,a,o,t);case Zs:i=8,a|=8;break;case Go:return e=Ke(12,r,t,a|2),e.elementType=Go,e.lanes=o,e;case Jo:return e=Ke(13,r,t,a),e.elementType=Jo,e.lanes=o,e;case Yo:return e=Ke(19,r,t,a),e.elementType=Yo,e.lanes=o,e;case Gc:return io(r,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Qc:i=10;break e;case Kc:i=9;break e;case ei:i=11;break e;case ti:i=14;break e;case Tt:i=16,n=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Ke(i,r,t,a),t.elementType=e,t.type=n,t.lanes=o,t}function nr(e,t,r,n){return e=Ke(7,e,n,t),e.lanes=r,e}function io(e,t,r,n){return e=Ke(22,e,n,t),e.elementType=Gc,e.lanes=r,e.stateNode={isHidden:!1},e}function Uo(e,t,r){return e=Ke(6,e,null,t),e.lanes=r,e}function Bo(e,t,r){return t=Ke(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Um(e,t,r,n,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ko(0),this.expirationTimes=ko(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ko(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ii(e,t,r,n,a,o,i,l,c){return e=new Um(e,t,r,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ke(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},yi(o),e}function Bm(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Fd(e){if(!e)return Ht;e=e._reactInternals;e:{if(fr(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ie(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var r=e.type;if(Ie(r))return Fu(e,r,t)}return t}function Ud(e,t,r,n,a,o,i,l,c){return e=Ii(r,n,!0,e,a,o,i,l,c),e.context=Fd(null),r=e.current,n=Ce(),a=Wt(r),o=St(n,a),o.callback=t??null,Ut(r,o,a),e.current.lanes=a,On(e,a,n),Ae(e,n),e}function lo(e,t,r,n){var a=t.current,o=Ce(),i=Wt(a);return r=Fd(r),t.context===null?t.context=r:t.pendingContext=r,t=St(o,i),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Ut(a,t,i),e!==null&&(st(e,a,i,o),ga(e,a,i)),i}function Qa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Ai(e,t){sc(e,t),(e=e.alternate)&&sc(e,t)}function Wm(){return null}var Bd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mi(e){this._internalRoot=e}co.prototype.render=Mi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));lo(e,t,null,null)};co.prototype.unmount=Mi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ur(function(){lo(null,e,null,null)}),t[Et]=null}};function co(e){this._internalRoot=e}co.prototype.unstable_scheduleHydration=function(e){if(e){var t=yu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<$t.length&&t!==0&&t<$t[r].priority;r++);$t.splice(r,0,e),r===0&&bu(e)}};function Oi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function uo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ic(){}function Vm(e,t,r,n,a){if(a){if(typeof n=="function"){var o=n;n=function(){var u=Qa(i);o.call(u)}}var i=Ud(t,n,e,0,null,!1,!1,"",ic);return e._reactRootContainer=i,e[Et]=i.current,Nn(e.nodeType===8?e.parentNode:e),ur(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var l=n;n=function(){var u=Qa(c);l.call(u)}}var c=Ii(e,0,!1,null,null,!1,!1,"",ic);return e._reactRootContainer=c,e[Et]=c.current,Nn(e.nodeType===8?e.parentNode:e),ur(function(){lo(t,c,r,n)}),c}function po(e,t,r,n,a){var o=r._reactRootContainer;if(o){var i=o;if(typeof a=="function"){var l=a;a=function(){var c=Qa(i);l.call(c)}}lo(t,i,e,a)}else i=Vm(r,t,e,a,n);return Qa(i)}xu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=ln(t.pendingLanes);r!==0&&(ai(t,r|1),Ae(t,se()),!(U&6)&&(Qr=se()+500,Gt()))}break;case 13:ur(function(){var n=Nt(e,1);if(n!==null){var a=Ce();st(n,e,1,a)}}),Ai(e,1)}};oi=function(e){if(e.tag===13){var t=Nt(e,134217728);if(t!==null){var r=Ce();st(t,e,134217728,r)}Ai(e,134217728)}};vu=function(e){if(e.tag===13){var t=Wt(e),r=Nt(e,t);if(r!==null){var n=Ce();st(r,e,t,n)}Ai(e,t)}};yu=function(){return H};wu=function(e,t){var r=H;try{return H=e,t()}finally{H=r}};is=function(e,t,r){switch(t){case"input":if(es(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var a=to(n);if(!a)throw Error(_(90));Yc(n),es(n,a)}}}break;case"textarea":Zc(e,r);break;case"select":t=r.value,t!=null&&$r(e,!!r.multiple,t,!1)}};su=Di;iu=ur;var qm={usingClientEntryPoint:!1,Events:[Un,_r,to,au,ou,Di]},an={findFiberByHostInstance:Xt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hm={bundleType:an.bundleType,version:an.version,rendererPackageName:an.rendererPackageName,rendererConfig:an.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=uu(e),e===null?null:e.stateNode},findFiberByHostInstance:an.findFiberByHostInstance||Wm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ia=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ia.isDisabled&&ia.supportsFiber)try{Ya=ia.inject(Hm),mt=ia}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qm;We.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oi(t))throw Error(_(200));return Bm(e,t,null,r)};We.createRoot=function(e,t){if(!Oi(e))throw Error(_(299));var r=!1,n="",a=Bd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Ii(e,1,!1,null,null,r,!1,n,a),e[Et]=t.current,Nn(e.nodeType===8?e.parentNode:e),new Mi(t)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=uu(t),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return ur(e)};We.hydrate=function(e,t,r){if(!uo(t))throw Error(_(200));return po(null,e,t,!0,r)};We.hydrateRoot=function(e,t,r){if(!Oi(e))throw Error(_(405));var n=r!=null&&r.hydratedSources||null,a=!1,o="",i=Bd;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),t=Ud(t,null,e,1,r??null,a,!1,o,i),e[Et]=t.current,Nn(e),n)for(e=0;e<n.length;e++)r=n[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new co(t)};We.render=function(e,t,r){if(!uo(t))throw Error(_(200));return po(null,e,t,!1,r)};We.unmountComponentAtNode=function(e){if(!uo(e))throw Error(_(40));return e._reactRootContainer?(ur(function(){po(null,null,e,!1,function(){e._reactRootContainer=null,e[Et]=null})}),!0):!1};We.unstable_batchedUpdates=Di;We.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!uo(r))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return po(e,t,r,!1,n)};We.version="18.3.1-next-f1338f8080-20240426";function Wd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wd)}catch(e){console.error(e)}}Wd(),Wc.exports=We;var Qm=Wc.exports,lc=Qm;Qo.createRoot=lc.createRoot,Qo.hydrateRoot=lc.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function In(){return In=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},In.apply(null,arguments)}var tr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(tr||(tr={}));const cc="popstate";function Km(e){e===void 0&&(e={});function t(n,a){let{pathname:o,search:i,hash:l}=n.location;return Fs("",{pathname:o,search:i,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:Vd(a)}return Ym(t,r,null,e)}function gt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Gm(e,t){{typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Jm(){return Math.random().toString(36).substr(2,8)}function uc(e,t){return{usr:e.state,key:e.key,idx:t}}function Fs(e,t,r,n){return r===void 0&&(r=null),In({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?fo(t):t,{state:r,key:t&&t.key||n||Jm()})}function Vd(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function fo(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Ym(e,t,r,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:o=!1}=n,i=a.history,l=tr.Pop,c=null,u=m();u==null&&(u=0,i.replaceState(In({},i.state,{idx:u}),""));function m(){return(i.state||{idx:null}).idx}function f(){l=tr.Pop;let j=m(),p=j==null?null:j-u;u=j,c&&c({action:l,location:x.location,delta:p})}function g(j,p){l=tr.Push;let d=Fs(x.location,j,p);u=m()+1;let h=uc(d,u),b=x.createHref(d);try{i.pushState(h,"",b)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;a.location.assign(b)}o&&c&&c({action:l,location:x.location,delta:1})}function y(j,p){l=tr.Replace;let d=Fs(x.location,j,p);u=m();let h=uc(d,u),b=x.createHref(d);i.replaceState(h,"",b),o&&c&&c({action:l,location:x.location,delta:0})}function v(j){let p=a.location.origin!=="null"?a.location.origin:a.location.href,d=typeof j=="string"?j:Vd(j);return d=d.replace(/ $/,"%20"),gt(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let x={get action(){return l},get location(){return e(a,i)},listen(j){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(cc,f),c=j,()=>{a.removeEventListener(cc,f),c=null}},createHref(j){return t(a,j)},createURL:v,encodeLocation(j){let p=v(j);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:y,go(j){return i.go(j)}};return x}var dc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(dc||(dc={}));function Xm(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const Zm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,eh=e=>Zm.test(e);function th(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?fo(e):e,o;if(r)if(eh(r))o=r;else{if(r.includes("//")){let i=r;r=qd(r),Gm(!1,"Pathnames cannot have embedded double slashes - normalizing "+(i+" -> "+r))}r.startsWith("/")?o=pc(r.substring(1),"/"):o=pc(r,t)}else o=t;return{pathname:o,search:sh(n),hash:ih(a)}}function pc(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function Wo(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function rh(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function nh(e,t){let r=rh(e);return t?r.map((n,a)=>a===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function ah(e,t,r,n){n===void 0&&(n=!1);let a;typeof e=="string"?a=fo(e):(a=In({},e),gt(!a.pathname||!a.pathname.includes("?"),Wo("?","pathname","search",a)),gt(!a.pathname||!a.pathname.includes("#"),Wo("#","pathname","hash",a)),gt(!a.search||!a.search.includes("#"),Wo("#","search","hash",a)));let o=e===""||a.pathname==="",i=o?"/":a.pathname,l;if(i==null)l=r;else{let f=t.length-1;if(!n&&i.startsWith("..")){let g=i.split("/");for(;g[0]==="..";)g.shift(),f-=1;a.pathname=g.join("/")}l=f>=0?t[f]:"/"}let c=th(a,l),u=i&&i!=="/"&&i.endsWith("/"),m=(o||i===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||m)&&(c.pathname+="/"),c}const qd=e=>e.replace(/\/\/+/g,"/"),oh=e=>qd(e.join("/")),sh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ih=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Hd=["post","put","patch","delete"];new Set(Hd);const lh=["get",...Hd];new Set(lh);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ka(){return Ka=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ka.apply(null,arguments)}const Qd=w.createContext(null),Fi=w.createContext(null),Ui=w.createContext(null),Bi=w.createContext({outlet:null,matches:[],isDataRoute:!1});function Wi(){return w.useContext(Ui)!=null}function Kd(){return Wi()||gt(!1),w.useContext(Ui).location}function Gd(e){w.useContext(Fi).static||w.useLayoutEffect(e)}function ch(){let{isDataRoute:e}=w.useContext(Bi);return e?mh():uh()}function uh(){Wi()||gt(!1);let e=w.useContext(Qd),{basename:t,future:r,navigator:n}=w.useContext(Fi),{matches:a}=w.useContext(Bi),{pathname:o}=Kd(),i=JSON.stringify(nh(a,r.v7_relativeSplatPath)),l=w.useRef(!1);return Gd(()=>{l.current=!0}),w.useCallback(function(u,m){if(m===void 0&&(m={}),!l.current)return;if(typeof u=="number"){n.go(u);return}let f=ah(u,JSON.parse(i),o,m.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:oh([t,f.pathname])),(m.replace?n.replace:n.push)(f,m.state,m)},[t,n,i,o,e])}var Jd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Jd||{}),Yd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Yd||{});function dh(e){let t=w.useContext(Qd);return t||gt(!1),t}function ph(e){let t=w.useContext(Bi);return t||gt(!1),t}function fh(e){let t=ph(),r=t.matches[t.matches.length-1];return r.route.id||gt(!1),r.route.id}function mh(){let{router:e}=dh(Jd.UseNavigateStable),t=fh(Yd.UseNavigateStable),r=w.useRef(!1);return Gd(()=>{r.current=!0}),w.useCallback(function(a,o){o===void 0&&(o={}),r.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Ka({fromRouteId:t},o)))},[e,t])}function hh(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function gh(e){let{basename:t="/",children:r=null,location:n,navigationType:a=tr.Pop,navigator:o,static:i=!1,future:l}=e;Wi()&&gt(!1);let c=t.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:c,navigator:o,static:i,future:Ka({v7_relativeSplatPath:!1},l)}),[c,l,o,i]);typeof n=="string"&&(n=fo(n));let{pathname:m="/",search:f="",hash:g="",state:y=null,key:v="default"}=n,x=w.useMemo(()=>{let j=Xm(m,c);return j==null?null:{location:{pathname:j,search:f,hash:g,state:y,key:v},navigationType:a}},[c,m,f,g,y,v,a]);return x==null?null:w.createElement(Fi.Provider,{value:u},w.createElement(Ui.Provider,{children:r,value:x}))}new Promise(()=>{});/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const xh="6";try{window.__reactRouterVersion=xh}catch{}const vh="startTransition",fc=Lp[vh];function yh(e){let{basename:t,children:r,future:n,window:a}=e,o=w.useRef();o.current==null&&(o.current=Km({window:a,v5Compat:!0}));let i=o.current,[l,c]=w.useState({action:i.action,location:i.location}),{v7_startTransition:u}=n||{},m=w.useCallback(f=>{u&&fc?fc(()=>c(f)):c(f)},[c,u]);return w.useLayoutEffect(()=>i.listen(m),[i,m]),w.useEffect(()=>hh(n),[n]),w.createElement(gh,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:i,future:n})}var mc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(mc||(mc={}));var hc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(hc||(hc={}));const q="/api",wh=".pdf,.png,.jpg,.jpeg,.tif,.tiff,.bmp,.webp,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv",G={ADDED:{bg:"var(--diff-added-bg)",border:"var(--diff-added-border)",text:"var(--diff-added-text)",chip:"var(--diff-added-chip)"},DELETED:{bg:"var(--diff-deleted-bg)",border:"var(--diff-deleted-border)",text:"var(--diff-deleted-text)",chip:"var(--diff-deleted-chip)"},MODIFIED:{bg:"var(--diff-modified-bg)",border:"var(--diff-modified-border)",text:"var(--diff-modified-text)",chip:"var(--diff-modified-chip)"},UNCHANGED:{bg:"var(--diff-unchanged-bg)",border:"var(--diff-unchanged-border)",text:"var(--diff-unchanged-text)",chip:"var(--diff-unchanged-chip)"},MATCH:{bg:"var(--diff-match-bg)",border:"var(--diff-match-border)",text:"var(--diff-match-text)",chip:"var(--diff-match-chip)"}},bh=`
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
`,ft={background:"#fffdf8",border:"1px solid #ded6c8",borderRadius:8,boxShadow:"0 1px 3px rgba(31,41,55,.08)"},ar={textAlign:"start",padding:"8px 9px",borderBottom:"1px solid #ded6c8",fontWeight:650,verticalAlign:"top",whiteSpace:"normal",overflowWrap:"anywhere"},Or={padding:"8px 9px",borderBottom:"1px solid #eee7dc",verticalAlign:"top",whiteSpace:"normal",overflowWrap:"anywhere",lineHeight:1.35},vr={border:"1px solid #ded6c8",background:"#fbfaf6",color:"#344054",borderRadius:999,padding:"4px 8px",fontSize:12,fontWeight:600};function kh(e=!1,t={}){return{border:"none",borderRadius:6,background:e?"#98a2b3":"#1f2937",color:"white",padding:"9px 14px",fontWeight:550,cursor:e?"default":"pointer",...t}}function jh(e={}){return{border:"1px solid #c9c0b0",borderRadius:6,background:"#fffdf8",color:"#344054",padding:"9px 13px",fontWeight:550,cursor:"pointer",...e}}function Dr(e){if(!e)return"";const t=String(e);return t.includes("Traceback (most recent call last)")||t.includes("Internal Server Error")||t.includes("psycopg")||t.includes("OperationalError")||t.includes('File "')||t.length>500?"An unexpected internal server error occurred. Please try again or check server logs.":t.replace(/\/Users\/[a-zA-Z0-9_-]+\//g,".../")}async function ae(e){try{const t=await e.text();if(!t)return`Request failed with status ${e.status}`;try{const r=JSON.parse(t);return Dr(at(r.detail||r.error||r.message||r))}catch{return t.trim().startsWith("<!DOCTYPE html>")||t.includes("<html")||t.length>200?`Server error (${e.status}). Please check backend logs.`:Dr(t)}}catch{return`Request failed with status ${e.status}`}}function oe(e){const t=at(e);return t.toLowerCase().includes("failed to fetch")?"The app could not reach the comparison service. Please confirm the backend is running and the API URL is correct.":t||"Something went wrong while processing the documents."}async function Sh(e){const t=await fetch(`${q}/extract-runs/${e}/structured-json`);if(t.ok){const o=Us(await t.json());if(ja(o))return o;const i=await gc(e,o);return ja(i)?i:o}const r=await fetch(`${q}/extract-runs/${e}/json`);if(!r.ok)throw new Error(await ae(t));const n=await r.json(),a=Us(n);return ja(a)?a:gc(e,a)}function ja(e){return!!(e&&((e.content||[]).length>0||(e.tables||[]).length>0||(e.pages||[]).some(t=>(t.content||[]).length>0||(t.tables||[]).length>0)))}async function gc(e,t={}){const[r,n]=await Promise.allSettled([fetch(`${q}/extract-runs/${e}/blocks?limit=2000`).then(async i=>{if(!i.ok)throw new Error(await ae(i));return i.json()}),fetch(`${q}/extract-runs/${e}/tables?include_rows=true`).then(async i=>{if(!i.ok)throw new Error(await ae(i));return i.json()})]),a=r.status==="fulfilled"?r.value.blocks||[]:[],o=n.status==="fulfilled"?n.value.tables||[]:[];return Us({...t,blocks:a,tables:o.length?o:t.tables||[]})}function Us(e){var l,c,u;if(e!=null&&e.structured_json)return e.structured_json;if((e!=null&&e.document_summary||e!=null&&e.content||e!=null&&e.pages)&&ja(e))return e;const t=(e==null?void 0:e.blocks)||[],r=(e==null?void 0:e.tables)||[],n=[];t.forEach(m=>{var y;const f=m.text||((y=m.payload)==null?void 0:y.text)||"",g=String(f).match(/^\s*([^:：]{2,80})\s*[:：]\s*(.{1,300})$/);g&&n.push({field:g[1].trim(),value:g[2].trim(),page:m.page_number,source:m.type,citation:`p.${m.page_number||"-"} - ${m.path||"document"}`}),Nh(f).forEach(v=>{n.push({...v,page:m.page_number,source:m.type,citation:`p.${m.page_number||"-"} - ${m.path||"document"}`})})}),r.slice(0,40).forEach(m=>{(m.rows||[]).slice(0,50).forEach(f=>{Object.entries(f||{}).forEach(([g,y])=>{!y||String(g).startsWith("__")||n.push({field:g,value:y,page:m.page_first||m.page_number,source:"table",table:m.display_name||m.title,citation:`${m.page_label||"page"} - ${m.title||"table"}`})})})});const a=t.filter(m=>["paragraph","list_item","kv_pair","figure","section","heading"].includes(m.type)).map(m=>{var x;const f=m.text||((x=m.payload)==null?void 0:x.text)||"",g={page:m.page_number,order:m.sequence||0,type:m.type,path:m.path,text:f,citation:`p.${m.page_number||"-"} - ${m.path||"document"}`},y=[],v=String(f).match(/^\s*([^:：]{2,80})\s*[:：]\s*(.{1,300})$/);return v&&y.push({name:v[1].trim(),value:v[2].trim()}),y.length&&(g.key_values=y),g}).filter(m=>String(m.text||"").trim()),o=[],i=new Map;return a.forEach(m=>{const f=m.page||1;i.has(f)||i.set(f,{page:f,citation:`p.${f}`,content:[],tables:[]}),i.get(f).content.push(m)}),r.forEach(m=>{const f=m.page_first||m.page_number||1;i.has(f)||i.set(f,{page:f,citation:`p.${f}`,content:[],tables:[]}),i.get(f).tables.push(m)}),Array.from(i.keys()).sort((m,f)=>m-f).forEach(m=>o.push(i.get(m))),{document_summary:(e==null?void 0:e.document_summary)||{label:((l=e==null?void 0:e.summary)==null?void 0:l.label)||(e==null?void 0:e.label)||"Extracted document",source_type:((c=e==null?void 0:e.summary)==null?void 0:c.source_format)||(e==null?void 0:e.source_format)||"document",extraction_quality:{grade:((u=e==null?void 0:e.summary)==null?void 0:u.quality)||"not rated",coverage:e==null?void 0:e.coverage},counts:{text_blocks:a.length,tables:r.length,pages:o.length}},semantic_fields:n.slice(0,220),business_structure:_h(t,r,n),sections:t.filter(m=>["section","heading"].includes(m.type)).slice(0,200),tables:r,pages:o,content:a}}function _h(e,t,r){const n=[{document_index:1,label:"Extracted document",sections:[]}];let a=null;return e.slice().sort((o,i)=>(o.page_number||1)-(i.page_number||1)||(o.sequence||0)-(i.sequence||0)).forEach(o=>{var i;if(["section","heading"].includes(o.type)){a={title:o.text||o.path||`Page ${o.page_number||1}`,page:o.page_number||1,path:o.path,content:[],fields:[],inline_records:[],tables:[]},n[0].sections.push(a);return}if((!a||a.page!==(o.page_number||1))&&(a={title:`Page ${o.page_number||1}`,page:o.page_number||1,path:`/page_${o.page_number||1}`,content:[],fields:[],inline_records:[],tables:[]},n[0].sections.push(a)),["paragraph","list_item","kv_pair","figure"].includes(o.type)){const l=o.text||((i=o.payload)==null?void 0:i.text)||"",c=r.filter(m=>{var f;return m.page===o.page_number&&((f=m.citation)==null?void 0:f.includes(o.path||"__no_path__"))}),u=Eh(l);a.content.push({type:o.type,page:o.page_number,path:o.path,text:l,fields:c}),a.fields.push(...c),u&&a.inline_records.push({...u,page:o.page_number,citation:`p.${o.page_number||"-"} - ${o.path||"document"}`})}}),t.forEach(o=>{const i=o.page_first||o.page_number||1;let l=n[0].sections.find(c=>c.page===i);l||(l={title:`Page ${i}`,page:i,path:`/page_${i}`,content:[],fields:[],inline_records:[],tables:[]},n[0].sections.push(l)),l.tables.push({title:o.display_name||o.title||"Detected table",page_label:o.page_label,columns:o.columns||[],row_count:o.n_rows||0,sample_rows:(o.rows||o.row_preview||[]).slice(0,8)})}),{documents:n,section_count:n[0].sections.length}}function Eh(e){const t=String(e||"").trim();if(!t)return null;const r=t.includes("|")?t.split("|").map(n=>n.trim()).filter(Boolean):t.split(/\s{3,}/).map(n=>n.trim()).filter(Boolean);return r.length<2?null:{record_type:"inline_row",columns:r.map((n,a)=>`Column ${a+1}`),values:Object.fromEntries(r.map((n,a)=>[`Column ${a+1}`,n])),text:t}}function Nh(e){const t=String(e||""),r=[["color",/\b(?:colou?r|shade)\s*(?:is|=|:)?\s*([A-Za-z][A-Za-z\s/-]{2,40})/gi],["size",/\b(?:size|dimension)\s*(?:is|=|:)?\s*([A-Z0-9][A-Z0-9\s./x-]{0,40})/gi],["quantity",/\b(?:qty|quantity|count|units?)\s*(?:is|=|:)?\s*(\d[\d,]*(?:\.\d+)?)/gi],["price",/([$€£]\s?\d[\d,]*(?:\.\d+)?)/g],["percentage",/\b(\d+(?:\.\d+)?%)\b/g],["date",/\b(\d{1,2}[/-]\d{1,2}[/-]\d{2,4}|\d{4}-\d{1,2}-\d{1,2})\b/g],["code",/\b([A-Z]{1,8}[- ]?\d{2,12}[A-Z]?)\b/gi]],n=[],a=new Set;return r.forEach(([o,i])=>{for(const l of t.matchAll(i)){const c=String(l[1]||"").replace(/\s+/g," ").trim(),u=`${o}:${c.toLowerCase()}`;!c||a.has(u)||(a.add(u),n.push({field:o,value:c}))}}),n}function at(e){if(!e)return"";if(typeof e=="string")return Dr(e);if(e instanceof Error)return at(e.message);if(Array.isArray(e))return e.map(at).filter(Boolean).join(`
`);if(typeof e=="object"){if(e.detail)return at(e.detail);if(e.error)return at(e.error);if(e.message)return at(e.message);try{return Dr(JSON.stringify(e,null,2))}catch{return Dr(String(e))}}return Dr(String(e))}function Ch(e){if(!(e!=null&&e.length))return[];const t=new Set;return e.slice(0,20).forEach(r=>{r&&typeof r=="object"&&!Array.isArray(r)&&Object.keys(r).forEach(n=>{mr(n)||t.add(n)})}),Array.from(t).slice(0,12)}function mr(e){const t=String(e||"");return!t||t.startsWith("__")?!0:["payload","raw","field_profiles","column_profiles","extraction_intelligence","source_tables","table_fingerprint","bbox_by_page","quality_warnings"].includes(t)}function dr(e){if(e==null||e==="")return"-";if(Array.isArray(e))return e.map(dr).join(", ");if(typeof e=="object"){const t=Object.fromEntries(Object.entries(e).filter(([r])=>!mr(r)));return Object.keys(t).length?JSON.stringify(t):"-"}return String(e)}function xc(e){return!e||typeof e!="object"?"":Object.entries(e).filter(([,t])=>t!=null&&String(t).trim()!=="").map(([t,r])=>`${t}: ${r}`).join(" | ")}function zh(e,t=560,r=1280){const n=Math.max(1,Number(e)||1);return Math.min(r,Math.max(t,180+n*180))}function Ge(e,t){if(!e)return"";const r=String(e).replace(/\s+/g," ").trim();return r.length<=t?r:`${r.slice(0,t-1)}...`}function bt(e){const t=Number(e||0);return Number.isFinite(t)?Math.round(t).toLocaleString():"0"}function Ph(e){if(!e)return"-";const t=new Date(e);return Number.isNaN(t.getTime())?"-":t.toLocaleString(void 0,{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function Th(e,t){const r=Number(e||0);if(!Number.isFinite(r)||r<=0)return t==="complete"||t==="failed"?"-":"Running";const n=Math.max(1,Math.round(r/1e3));if(n<60)return`${n}s`;const a=Math.floor(n/60),o=n%60;if(a<60)return o?`${a}m ${o}s`:`${a}m`;const i=Math.floor(a/60),l=a%60;return l?`${i}h ${l}m`:`${i}h`}function Dh(e){return String(e||"-").replace(/\bbase\s*p\.?\s*(\d+)/gi,"Baseline page $1").replace(/\btarget\s*p\.?\s*(\d+)/gi,"Revised page $1").replace(/\bbaseline\s*p\.?\s*(\d+)/gi,"Baseline page $1").replace(/\brevised\s*p\.?\s*(\d+)/gi,"Revised page $1").replace(/\s*->\s*/g," → ")}function vc(e){const t=String(e||"").toLowerCase();return t.includes("high")?3:t.includes("medium")?2:t.includes("low")?1:0}function Fr(e){const t=String((e==null?void 0:e.change_type)||(e==null?void 0:e.changeType)||(e==null?void 0:e.status)||"").toUpperCase();if(["ADDED","DELETED","MODIFIED","UNCHANGED","MATCH"].includes(t))return t;if((e!=null&&e.after||e!=null&&e.target_text)&&!(e!=null&&e.before||e!=null&&e.base_text))return"ADDED";if((e!=null&&e.before||e!=null&&e.base_text)&&!(e!=null&&e.after||e!=null&&e.target_text))return"DELETED";const r=`${(e==null?void 0:e.type)||""} ${(e==null?void 0:e.change)||""} ${(e==null?void 0:e.description)||""} ${(e==null?void 0:e.review)||""}`.toUpperCase();return r.includes("ADDED")||r.includes("NEW CONTENT")||r.includes("INTRODUCED")?"ADDED":r.includes("DELETED")||r.includes("REMOVED")||r.includes("DROPPED")?"DELETED":r.includes("MODIFIED")||r.includes("CHANGED")||r.includes("UPDATED")||r.includes("REVISED")?"MODIFIED":t||"MODIFIED"}function $h(e){const t=Fr(e),r=(e==null?void 0:e.before)||"",n=(e==null?void 0:e.after)||"",a=(e==null?void 0:e.stable_key)||yc(e==null?void 0:e.path)||"Document change",o=[e!=null&&e.page_base?`Baseline page ${e.page_base}`:"",e!=null&&e.page_target?`Revised page ${e.page_target}`:""].filter(Boolean).join(" -> "),i=t==="ADDED"?`Added: ${Ge(n,260)}`:t==="DELETED"?`Deleted: ${Ge(r,260)}`:`Changed from "${Ge(r,120)}" to "${Ge(n,120)}"`;return{feature:a,item:a,area:yc(e==null?void 0:e.path)||"Document",change_type:t,change:i,before:r,after:n,citation:o,impact:e==null?void 0:e.impact,confidence:typeof(e==null?void 0:e.similarity)=="number"?Math.max(.55,Math.min(.98,1-Math.abs(1-e.similarity))):null,seek_clarification:t==="UNCHANGED"?"None":"Review recommended."}}function Rh(e,t){const r=Array.isArray(e)?[...e]:[],n=Array.isArray(t)?t:[],a=new Set(r.map(Fr)),o=new Set(r.map(i=>`${Fr(i)}:${i.stable_key||i.item||i.feature||i.path||i.change}`));return["ADDED","DELETED"].forEach(i=>{if(a.has(i))return;let l=0;n.forEach(c=>{if(l>=12||Fr(c)!==i)return;const u=`${i}:${c.stable_key||c.path||c.before||c.after}`;o.has(u)||(r.push($h(c)),o.add(u),l+=1)})}),r}function yc(e){const t=String(e||"").split("/").map(r=>r.trim()).filter(Boolean);return t[t.length-1]||""}function wc(e){const t=`${e.seek_clarification||""} ${e.review||""} ${e.recommendation||""}`.toLowerCase(),r=Bs(e.confidence);return t.includes("review")||t.includes("clarif")||t.includes("confirm")||typeof r=="number"&&r<.8}function Bs(e){return typeof e!="number"?null:e>1?e/100:e}function bc(e){return{border:"1px solid #c9c0b0",background:e?"#f1ece3":"#fffdf8",color:e?"#98a2b3":"#344054",borderRadius:7,padding:"7px 12px",cursor:e?"default":"pointer",fontWeight:600}}function kc(e){return{border:"1px solid #c9c0b0",background:e?"#f1ece3":"#fffdf8",color:e?"#98a2b3":"#344054",borderRadius:6,padding:"5px 8px",cursor:e?"default":"pointer",fontWeight:600,fontSize:12}}function Ws(e,t=!1){const r=String(e||"").toLowerCase();return r==="added"?{background:t?G.ADDED.bg:"rgba(31,160,70,.08)",border:t?void 0:`1px solid ${G.ADDED.border}`,borderInlineStart:`3px solid ${G.ADDED.border}`}:r==="deleted"?{background:t?G.DELETED.bg:"rgba(218,54,54,.08)",border:t?void 0:`1px solid ${G.DELETED.border}`,borderInlineStart:`3px solid ${G.DELETED.border}`}:r==="modified"?{background:t?"rgba(196,85,16,.10)":"rgba(196,85,16,.08)",border:t?void 0:`1px solid ${G.MODIFIED.border}`,borderInlineStart:`3px solid ${G.MODIFIED.border}`}:{background:t?"transparent":"#fffdf8",border:t?void 0:"1px solid transparent",borderInlineStart:"3px solid transparent"}}function Lh({meta:e}){var r,n,a;const t=e.stats||{};return s.jsxs("section",{className:"stats-strip",children:[s.jsx(ke,{label:"Added",value:t.ADDED||0,tone:"added"}),s.jsx(ke,{label:"Deleted",value:t.DELETED||0,tone:"deleted"}),s.jsx(ke,{label:"Modified",value:t.MODIFIED||0,tone:"modified"}),s.jsx(ke,{label:"Unchanged",value:t.UNCHANGED||0}),s.jsx(ke,{label:"Coverage",value:`${jc((r=e.coverage)==null?void 0:r.base)} / ${jc((n=e.coverage)==null?void 0:n.target)}`}),s.jsx(ke,{label:"Pages",value:`${e.n_pages_base} / ${e.n_pages_target}`}),Number(((a=e.ai_usage)==null?void 0:a.total_tokens)||0)>0&&s.jsx(ke,{label:"AI tokens",value:`${bt(e.ai_usage.total_tokens)} (${bt(e.ai_usage.calls||0)} calls)`})]})}function jc(e){return typeof e=="number"?`${e.toFixed(1)}%`:"-"}function ke({label:e,value:t,tone:r}){return s.jsxs("span",{className:`stat-chip ${r||"neutral"}`,children:[s.jsx("span",{children:e}),s.jsx("strong",{children:t})]})}function Ih({usage:e}){const t=Number((e==null?void 0:e.total_tokens)||0);if(!t)return null;const n=(Array.isArray(e==null?void 0:e.operations)?e.operations:[]).slice(-4);return s.jsxs("div",{style:{border:"1px solid #ded6c8",borderRadius:8,padding:10,marginBottom:12,background:"#fbfaf6",fontSize:12,color:"#475467"},children:[s.jsx("strong",{style:{color:"#344054"},children:"AI usage:"})," ",bt(t)," tokens · ",bt(e.calls||0)," call(s) · ",bt(e.prompt_tokens||0)," input / ",bt(e.completion_tokens||0)," output",n.length>0&&s.jsx("div",{style:{marginTop:6,display:"flex",flexWrap:"wrap",gap:6},children:n.map((a,o)=>s.jsxs("span",{style:{border:"1px solid #d8d0c3",borderRadius:999,padding:"3px 7px",background:"#fffdf8"},children:[a.operation||"AI call"," · ",bt(a.total_tokens||0)]},`${a.operation||"op"}-${o}`))})]})}function Sc({progress:e,message:t,status:r}){const n=mo(r),a=Math.max(0,Math.min(100,Number(e)||0)),o=n.isFailed?100:Math.max(7,n.isComplete?100:a);return s.jsxs("div",{className:"processing-state",children:[s.jsxs("div",{className:"processing-state-head",children:[s.jsx("span",{style:{fontWeight:600},children:t}),s.jsxs("span",{children:[a,"%"]})]}),s.jsx("div",{className:"progress-track",children:s.jsx("div",{className:`progress-fill ${n.className}`,style:{width:`${o}%`}})}),s.jsx("p",{children:"The job is still running. This view updates automatically as the backend reports progress."})]})}function An({message:e}){return s.jsx("div",{style:{marginTop:16,border:"1px solid #f0b4b4",background:"#fff5f5",color:"#9f1d1d",borderRadius:8,padding:13,fontSize:14,fontWeight:600,lineHeight:1.45,whiteSpace:"pre-wrap"},children:at(e)})}function Wn({label:e}){return s.jsx("div",{style:{padding:20,color:"#667085",fontWeight:600},children:e})}function hr({label:e}){return s.jsx("div",{style:{padding:18,border:"1px dashed #c9c0b0",borderRadius:8,color:"#667085",background:"#fbfaf7",fontWeight:600},children:e})}function Ah({status:e}){const t=mo(e);return s.jsx("span",{style:{display:"inline-block",background:t.tone.chip,color:t.tone.text,border:`1px solid ${t.tone.border}`,padding:"2px 8px",borderRadius:999,fontWeight:650,fontSize:12},children:t.label})}function mo(e){const t=String(e||"queued").toLowerCase(),r=t==="complete"||t==="completed",n=t==="failed"||t==="error",a=t==="running"||t==="processing"||t==="uploading";return{value:t,label:r?"complete":n?"failed":t,className:r?"complete":n?"failed":a?"running":"queued",tone:r?G.ADDED:n?G.DELETED:a?G.MODIFIED:G.UNCHANGED,isComplete:r,isFailed:n}}function Mh({value:e,status:t}){const r=mo(t),n=Math.max(0,Math.min(100,Number(e)||0)),a=r.isFailed||r.isComplete?100:n;return s.jsxs("div",{children:[s.jsx("div",{className:"progress-track",style:{height:6,minWidth:140},children:s.jsx("div",{className:`progress-fill ${r.className}`,style:{width:`${a}%`}})}),s.jsx("div",{style:{marginTop:5,color:"#667085",fontSize:12},children:r.isFailed?"failed":`${r.isComplete?100:n}%`})]})}function Xd({type:e}){const t=String(e||"MODIFIED").toUpperCase(),r=G[t]||G.MODIFIED;return s.jsx("span",{style:{display:"inline-block",background:r.chip,color:r.text,border:`1px solid ${r.border}`,padding:"2px 8px",borderRadius:999,fontWeight:650,fontSize:12},children:t})}function Oh({onOpenJob:e,onAskJob:t,error:r,historyKind:n="all",onStartCompare:a,onStartExtract:o}){const[i,l]=w.useState({loading:!0,error:"",jobs:[]}),[c,u]=w.useState(""),m=async()=>{try{const p=await fetch(`${q}/jobs?limit=80`);if(!p.ok)throw new Error(await ae(p));const d=await p.json();l({loading:!1,error:"",jobs:d.jobs||[]})}catch(p){l({loading:!1,error:oe(p),jobs:[]})}};w.useEffect(()=>{let p=!1,d=null;const h=async()=>{p||(await m(),p||(d=setTimeout(h,2200)))};return h(),()=>{p=!0,d&&clearTimeout(d)}},[]);const f=async p=>{if(!(!(p!=null&&p.run_id)||c)){u(p.run_id);try{const d=await fetch(`${q}/jobs/${p.run_id}`,{method:"DELETE"});if(!d.ok)throw new Error(await ae(d));await m()}catch(d){l(h=>({...h,error:oe(d)}))}finally{u("")}}},g=(i.jobs||[]).filter(p=>n==="all"||p.kind===n),y=g.filter(p=>!["complete","failed","error"].includes(p.status)).length,v=g.filter(p=>p.status==="complete").length,x=n==="comparison"?"Comparison History":n==="extraction"?"Extraction History":"Work History",j=n==="comparison"?"No comparison runs are available yet.":n==="extraction"?"No extraction runs are available yet.":"No document work is available yet.";return s.jsxs("section",{className:"session-board",children:[s.jsxs("div",{className:"board-head",children:[s.jsx("div",{children:s.jsx("h2",{children:x})}),s.jsxs("div",{className:"board-actions",children:[s.jsx("button",{type:"button",onClick:a,className:"primary-action compact",children:"New compare"}),s.jsx("button",{type:"button",onClick:o,className:"ghost-action compact",children:"New extract"}),s.jsxs("span",{children:[y," running"]}),s.jsxs("span",{children:[v," complete"]}),s.jsx("button",{type:"button",onClick:m,className:"ghost-action",children:"Refresh"})]})]}),r&&s.jsx(An,{message:r}),i.error&&s.jsx(An,{message:i.error}),i.loading&&!g.length?s.jsx(Wn,{label:"Loading jobs"}):g.length===0?s.jsx(hr,{label:j}):s.jsx("div",{className:"job-list",children:g.map(p=>s.jsx(Fh,{job:p,deleting:c===p.run_id,onOpen:()=>e(p),onAsk:()=>t==null?void 0:t(p),onDelete:()=>f(p)},p.run_id))})]})}function Fh({job:e,deleting:t,onOpen:r,onAsk:n,onDelete:a}){const o=e.status==="complete",i=mo(e.status),l=e.kind==="extraction",c=l?e.label||"Uploaded document":`${e.base_label||"Baseline"} → ${e.target_label||"Revised"}`,u=l?e.n_pages||"-":`${e.n_pages_base||"-"} / ${e.n_pages_target||"-"}`;return s.jsxs("article",{className:`job-card ${i.className}`,children:[s.jsxs("div",{className:"job-main",children:[s.jsx("div",{className:"job-kind",children:l?"Extraction":"Comparison"}),s.jsx("h3",{dir:"auto",children:c}),s.jsxs("div",{className:"job-meta",children:[s.jsxs("span",{children:["#",String(e.run_id||"").slice(0,6)]}),s.jsx("span",{children:[e.source_format,e.base_format,e.target_format].filter(Boolean).join(" / ")||"document"}),s.jsxs("span",{children:[u," pages"]}),s.jsx("span",{children:Th(e.duration_ms,e.status)})]}),e.status_message&&s.jsx("p",{dir:"auto",children:e.status_message}),i.isFailed&&e.error&&s.jsx("p",{className:"job-error",dir:"auto",children:Ge(at(e.error),180)})]}),s.jsxs("div",{className:"job-side",children:[s.jsx(Ah,{status:e.status}),s.jsx(Mh,{value:e.progress||0,status:e.status}),s.jsx("span",{className:"job-date",children:Ph(e.created_at)}),s.jsxs("div",{className:"job-actions",children:[s.jsx("button",{type:"button",onClick:r,disabled:!o,className:"primary-action compact",children:"Open"}),s.jsx("button",{type:"button",onClick:n,disabled:!o||!l,className:"ghost-action compact",children:"Query"}),s.jsx("button",{type:"button",onClick:a,disabled:t,className:"danger-action compact",children:t?"Deleting":"Delete"})]})]})]})}function Uh({onUpload:e,busy:t,onAdmin:r}){const n=Zd("comparison"),a=t||n.loading||!n.selectedId||n.datasets.length===0;return s.jsxs("form",{onSubmit:e,className:"doc-workflow-card",children:[s.jsx("div",{className:"workflow-card-head",children:s.jsx("div",{children:s.jsx("h2",{children:"Compare two documents"})})}),s.jsx(ep,{...n,busy:t,onAdmin:r}),!n.loading&&n.datasets.length===0?s.jsx(tp,{onAdmin:r}):null,s.jsxs("div",{className:"upload-grid compare",children:[s.jsx(Vs,{label:"Baseline",helper:"Approved or reference file",name:"base",disabled:a}),s.jsx(Vs,{label:"Revised",helper:"Latest or proposed file",name:"target",disabled:a}),s.jsxs("div",{className:"workflow-action-rail",children:[s.jsx("button",{disabled:a,className:"primary-action full",children:t?"Processing":"Compare documents"}),s.jsx("div",{className:"workflow-note",children:"Side-by-side preview, semantic changes, and export."})]})]})]})}function Bh({onUpload:e,busy:t,onAdmin:r}){const n=Zd("extraction"),a=t||n.loading||!n.selectedId||n.datasets.length===0;return s.jsxs("form",{onSubmit:e,className:"doc-workflow-card",children:[s.jsx("div",{className:"workflow-card-head",children:s.jsx("div",{children:s.jsx("h2",{children:"Extract documents"})})}),s.jsx(ep,{...n,busy:t,onAdmin:r}),!n.loading&&n.datasets.length===0?s.jsx(tp,{onAdmin:r}):null,s.jsxs("div",{className:"upload-grid extract",children:[s.jsx(Vs,{label:"Document or image",helper:"PDF, image, Word, Excel, xlsb, CSV, or TSV",name:"document",disabled:a,multiple:!0}),s.jsxs("div",{className:"workflow-action-rail",children:[s.jsx("button",{disabled:a,className:"primary-action full",children:t?"Extracting":"Extract content"}),s.jsx("div",{className:"workflow-note",children:"Text, tables, OCR, structured JSON, and document query."})]})]})]})}function Zd(e){const[t,r]=w.useState([]),[n,a]=w.useState(""),[o,i]=w.useState(!0),[l,c]=w.useState("");return w.useEffect(()=>{let u=!0;return(async()=>{i(!0),c("");try{const f=window.sessionStorage.getItem("simulated_role")||"platform_admin",g=await fetch(`${q}/datasets`,{headers:{"X-User-Role":f}});if(!g.ok){const j=g.status===404?"Use case service is not available. Confirm the backend admin/datasets routes are deployed, then refresh.":`Could not load use cases (${g.status})`;throw new Error(j)}const x=((await g.json()).datasets||[]).filter(j=>(j.use_case_type||"comparison")===e);if(!u)return;r(x),a(j=>{var p;return j||((p=x[0])==null?void 0:p.id)||""})}catch(f){if(!u)return;r([]),a(""),c((f==null?void 0:f.message)||"Could not load use cases.")}finally{u&&i(!1)}})(),()=>{u=!1}},[]),{datasets:t,selectedId:n,setSelectedId:a,loading:o,error:l}}function ep({datasets:e,selectedId:t,setSelectedId:r,loading:n,error:a,busy:o,onAdmin:i}){return s.jsxs("div",{className:"usecase-selector",children:[s.jsxs("label",{children:[s.jsx("span",{children:"Use case"}),s.jsxs("select",{name:"family_id",value:t,onChange:l=>r(l.target.value),required:!0,disabled:o||n||e.length===0,children:[s.jsx("option",{value:"",disabled:!0,children:n?"Loading use cases":"Select a use case"}),e.map(l=>s.jsxs("option",{value:l.id,children:[l.supplier," - ",l.family_name," (",l.domain||"generic",")"]},l.id))]})]}),a?s.jsx("p",{className:"usecase-error",children:a}):null,e.length>0?s.jsx("button",{type:"button",className:"ghost-action compact",onClick:i,children:"Manage"}):null]})}function tp({onAdmin:e}){return s.jsxs("div",{className:"usecase-required",children:[s.jsx("strong",{children:"Use case required"}),s.jsx("p",{children:"Create or bootstrap a document use case before uploading files. The selected use case supplies metadata, template rules, access policy, and extraction guidance."}),s.jsx("button",{type:"button",className:"primary-action compact",onClick:e,children:"Open Admin Studio"})]})}function Vs({label:e,helper:t,name:r,disabled:n,multiple:a=!1}){const[o,i]=w.useState(""),l=w.useRef(null),c=()=>{var u;n||(u=l.current)==null||u.click()};return s.jsxs("div",{onClick:c,onKeyDown:u=>{(u.key==="Enter"||u.key===" ")&&c()},role:"button",tabIndex:n?-1:0,className:`file-lane${n?" disabled":""}`,children:[s.jsx("input",{ref:l,type:"file",name:r,accept:wh,multiple:a,required:!0,disabled:n,onClick:u=>u.stopPropagation(),onChange:u=>{var f;const m=Array.from(u.target.files||[]);i(m.length>1?`${m.length} files selected`:((f=m[0])==null?void 0:f.name)||"")},style:{position:"absolute",width:1,height:1,opacity:0,pointerEvents:"none"}}),s.jsxs("div",{className:"file-lane-head",children:[s.jsxs("div",{children:[s.jsx("div",{className:"file-lane-title",children:e}),s.jsx("div",{className:"file-lane-helper",children:t})]}),s.jsx("span",{className:"file-lane-pill",children:"Files"})]}),s.jsx("div",{className:`file-lane-value${o?" selected":""}`,children:o||"Select a file"})]})}function Wh({runId:e,meta:t,onVerifyPage:r}){const n=t.base_format&&t.base_format!=="pdf"?t.base_native_pages||t.n_pages_base||1:t.n_pages_base||1,a=t.target_format&&t.target_format!=="pdf"?t.target_native_pages||t.n_pages_target||1:t.n_pages_target||1,o=Math.max(n,a),[i,l]=w.useState(null),[c,u]=w.useState(!1);w.useEffect(()=>{let y=!1;return l(null),Promise.all([fetch(`${q}/runs/${e}/summary`).then(async v=>{if(!v.ok)throw new Error("Failed to load summary");return v.json()}),fetch(`${q}/runs/${e}/diff?limit=500`).then(async v=>v.ok?v.json():{diffs:[]})]).then(([v,x])=>{if(y)return;const j=Array.isArray(v)?v:v.rows||v.summary||[];l(Rh(j,x.diffs||[]))}).catch(v=>{y||(console.error("Failed to build quick summary",v),l([]))}),()=>{y=!0}},[e]);const m=Ja.useMemo(()=>(Array.isArray(i)?i:[]).filter(v=>v.change||v.description||v.before||v.after).sort((v,x)=>{const j=vc(v.impact)+(wc(v)?2:0)+(Bs(v.confidence)||0);return vc(x.impact)+(wc(x)?2:0)+(Bs(x.confidence)||0)-j}),[i]),f=y=>{const v=String(y||""),x=v.match(/(?:revised|target|page|p\.)\s*(\d+)/i)||v.match(/\b(\d{1,4})\b/);if(!x)return null;const j=Number.parseInt(x[1],10);return Number.isFinite(j)&&j>=1&&j<=o?j:null};if(i===null)return s.jsx("div",{className:"key-audit-empty",children:"Building comparison summary..."});if(!m.length)return s.jsx("div",{className:"key-audit-empty",children:"No prioritized summary items were returned for this comparison."});const g=c?m.slice(0,16):m.slice(0,8);return s.jsxs("div",{className:"key-audit-panel compact",children:[s.jsx("div",{className:"key-audit-list",children:g.map((y,v)=>{const x=f(y.citation);return s.jsxs("div",{className:"key-audit-item",children:[s.jsx(Xd,{type:Fr(y)}),s.jsxs("div",{className:"key-audit-copy",dir:"auto",children:[s.jsx("strong",{children:Ge(y.feature||y.item||y.area||"Document change",120)}),s.jsx("span",{children:Ge(y.change||y.description||y.before||y.after||"Value updated.",260)}),y.citation?s.jsx("small",{children:Dh(y.citation)}):null]}),x?s.jsxs("button",{type:"button",className:"primary-action compact",onClick:()=>r(x),children:["Verify page ",x]}):null]},`${y.stable_key||y.feature||y.item||v}`)})}),m.length>8&&s.jsx("button",{type:"button",className:"key-audit-more",onClick:()=>u(y=>!y),children:c?"Show fewer":`Show ${Math.min(16,m.length)} items`})]})}function Vh({runId:e,meta:t,pageNum:r,setPageNum:n}){const a=t.base_format&&t.base_format!=="pdf"?t.base_native_pages||t.n_pages_base||1:t.n_pages_base||1,o=t.target_format&&t.target_format!=="pdf"?t.target_native_pages||t.n_pages_target||1:t.n_pages_target||1,i=Math.max(a,o),[l,c]=w.useState(r),[u,m]=w.useState(r),[f,g]=w.useState(100),[y,v]=w.useState(!1),[x,j]=w.useState(!0),p=w.useRef(null),d=w.useRef(null);w.useEffect(()=>{c(r),m(r)},[e,r]),w.useEffect(()=>{if(!x)return;const b=p.current,S=d.current;if(!b||!S)return;let E=!1;const N=(L,B)=>{E||(E=!0,B.scrollTop=L.scrollTop,B.scrollLeft=L.scrollLeft,window.requestAnimationFrame(()=>{E=!1}))},z=()=>N(b,S),D=()=>N(S,b);return b.addEventListener("scroll",z,{passive:!0}),S.addEventListener("scroll",D,{passive:!0}),()=>{b.removeEventListener("scroll",z),S.removeEventListener("scroll",D)}},[e,r,x]);const h=b=>{const S=Math.max(1,Math.min(i,b));n(S),c(S),m(S)};return s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:12,flexWrap:"wrap"},children:[s.jsx("button",{onClick:()=>h(r-1),disabled:r<=1,style:bc(r<=1),children:"Prev both"}),s.jsxs("span",{style:{fontSize:17,fontWeight:650,minWidth:100},children:["Page ",r," / ",i]}),s.jsx("button",{onClick:()=>h(r+1),disabled:r>=i,style:bc(r>=i),children:"Next both"}),s.jsxs("div",{className:"viewer-toolbar-group","aria-label":"PDF zoom controls",children:[s.jsx("button",{type:"button",onClick:()=>g(b=>Math.max(50,b-25)),title:"Zoom out",children:"-"}),s.jsxs("span",{children:[f,"%"]}),s.jsx("button",{type:"button",onClick:()=>g(b=>Math.min(300,b+25)),title:"Zoom in",children:"+"}),s.jsx("button",{type:"button",onClick:()=>g(100),title:"Reset zoom",children:"Reset"})]}),s.jsxs("label",{className:"viewer-sync-toggle",children:[s.jsx("input",{type:"checkbox",checked:x,onChange:b=>j(b.target.checked)}),s.jsx("span",{children:"Sync scroll"})]}),s.jsxs("label",{className:"viewer-sync-toggle",style:{marginLeft:8},children:[s.jsx("input",{type:"checkbox",checked:y,onChange:b=>v(b.target.checked)}),s.jsx("span",{children:"Smart crop"})]}),s.jsx(qh,{})]}),s.jsxs("div",{className:"viewer-grid",style:{display:"grid",gridTemplateColumns:"minmax(0, 1fr) minmax(0, 1fr)",gap:14},children:[s.jsx(_c,{runId:e,side:"base",pageNum:l,setPageNum:c,totalPages:a,label:"Baseline document",docName:t.base_label,format:t.base_format,zoom:f,scrollRef:p,cropMargins:y}),s.jsx(_c,{runId:e,side:"target",pageNum:u,setPageNum:m,totalPages:o,label:"Revised document",docName:t.target_label,format:t.target_format,zoom:f,scrollRef:d,cropMargins:y})]})]})}function qh(){return s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7,marginLeft:6,flexWrap:"wrap"},children:[s.jsx(Vo,{label:"added",color:G.ADDED.bg,border:G.ADDED.border}),s.jsx(Vo,{label:"deleted",color:G.DELETED.bg,border:G.DELETED.border}),s.jsx(Vo,{label:"modified",color:G.MODIFIED.bg,border:G.MODIFIED.border})]})}function Vo({label:e,color:t,border:r}){return s.jsx("span",{style:{background:t,border:`1px solid ${r}`,color:"var(--text-primary)",padding:"2px 8px",borderRadius:999,fontSize:12,fontWeight:600},children:e})}function _c({runId:e,side:t,pageNum:r,setPageNum:n,totalPages:a,label:o,docName:i,format:l,zoom:c=100,scrollRef:u,cropMargins:m}){const[f,g]=w.useState({regions:[]}),[y,v]=w.useState(null),[x,j]=w.useState("idle"),p=r>=1&&r<=a,d=l&&l!=="pdf";w.useEffect(()=>{if(j(p&&!d?"loading":"idle"),!p){g({regions:[]}),v(null);return}if(d){g({regions:[]}),fetch(`${q}/runs/${e}/native-page/${t}/${r}`).then(D=>D.json()).then(v).catch(()=>v({items:[]}));return}v(null),fetch(`${q}/runs/${e}/overlay/${t}/${r}`).then(D=>D.json()).then(g).catch(()=>g({regions:[]}))},[e,t,r,p,d]);const h=f.content_box,b=f.page_width||612,S=f.page_height||792,E=m&&h&&h.x_max>h.x_min&&h.y_max>h.y_min;let N={position:"relative",width:"100%"},z={position:"relative",width:`${c}%`};if(E){const D=h.x_min/b,L=h.y_min/S,B=(h.x_max-h.x_min)/b;N={position:"relative",overflow:"hidden",width:"100%",paddingTop:`${(h.y_max-h.y_min)/S/B*c}%`},z={position:"absolute",left:`${-(D/B)*c}%`,top:`${-(L/B)*c}%`,width:`${1/B*c}%`}}return s.jsxs("div",{className:"doc-viewer-shell",children:[s.jsxs("div",{style:{marginBottom:7,display:"flex",justifyContent:"space-between",gap:10,alignItems:"flex-end",flexWrap:"wrap"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:13,color:"var(--text-secondary)",fontWeight:600},children:o}),s.jsxs("div",{style:{fontSize:14,color:"var(--text-primary)",fontWeight:600},children:[i," - ",p?`page ${r}`:"no page",l&&s.jsx("span",{style:{color:"var(--text-secondary)",fontSize:11,marginLeft:6},children:String(l).toUpperCase()})]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[s.jsx("button",{type:"button",onClick:()=>n(Math.max(1,r-1)),disabled:r<=1,style:kc(r<=1),title:`Previous ${o}`,children:"Prev"}),s.jsxs("span",{style:{color:"var(--text-secondary)",fontSize:12,minWidth:46,textAlign:"center"},children:[r,"/",a||1]}),s.jsx("button",{type:"button",onClick:()=>n(Math.min(a||1,r+1)),disabled:r>=(a||1),style:kc(r>=(a||1)),title:`Next ${o}`,children:"Next"})]})]}),s.jsx("div",{ref:u,className:`doc-frame dl-scrollbar ${d?"native":""}`,style:{overflow:"auto",maxHeight:"75vh",position:"relative"},children:p?d?s.jsx(Qh,{page:y,side:t}):s.jsx("div",{style:N,children:s.jsxs("div",{className:"pdf-zoom-stage",style:z,children:[x==="loading"&&s.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)",background:"var(--surface-raised)",zIndex:1,fontWeight:600},children:["Loading page ",r]}),s.jsx("img",{src:`${q}/runs/${e}/pages/${t}/${r}`,onLoad:()=>j("ready"),onError:()=>j("error"),style:{display:"block",width:"100%",height:"auto"},alt:`${t} page ${r}`},`${t}-${r}`),x==="error"&&s.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:G.DELETED.text,background:"#fff5f5",zIndex:2,fontWeight:600},children:["Could not load page ",r]}),(f.regions||[]).map((D,L)=>{const[B,_e,Te,xt]=D.bbox||[0,0,0,0],lt=G[String(D.change_type||"").toUpperCase()]||G.MODIFIED,fe=D.page_width||f.page_width||612,me=D.page_height||f.page_height||792,C=D.border_color||lt.border,$=D.color||lt.bg;return s.jsx("div",{title:`${D.change_type||"change"} ${D.stable_key||""} (${D.block_type||"block"})`,style:{position:"absolute",left:`${B/fe*100}%`,top:`${_e/me*100}%`,width:`${Math.max(.15,(Te-B)/fe*100)}%`,height:`${Math.max(.15,(xt-_e)/me*100)}%`,background:$,border:`1px solid ${C}`,boxShadow:`inset 0 0 0 1px ${$}`,pointerEvents:"auto"}},L)})]})}):s.jsx(Hh,{pageNum:r})})]})}function Hh({pageNum:e}){return s.jsxs("div",{style:{minHeight:520,display:"grid",placeItems:"center",color:"var(--text-secondary)",fontWeight:600},children:["No page ",e," in this document."]})}function Qh({page:e,side:t}){if(!e)return s.jsx("div",{style:{minHeight:520,display:"grid",placeItems:"center",color:"var(--text-secondary)",fontWeight:600},children:"Loading structured page"});const r=e.items||[],n=e.viewer_type||(e.format==="spreadsheet"?"spreadsheet":"document");return r.length?s.jsx("div",{className:`native-page ${n}`,dir:"auto",children:r.map(a=>s.jsx(Kh,{item:a,viewerType:n,side:t||e.side},a.id))}):s.jsx("div",{style:{minHeight:520,display:"grid",placeItems:"center",color:"var(--text-secondary)",fontWeight:600},children:"No structured content on this page."})}function Kh({item:e,viewerType:t,side:r}){var i;const n=Ws(e.highlight);if(e.type==="table"&&!((i=e.payload)!=null&&i.layout_table)&&!Xh(e,t))return s.jsx(Jh,{item:e,viewerType:t});const a=e.type==="table"?{...e,text:Yh(e),payload:{...e.payload||{},layout_table:!0}}:e,o=e.type==="section"||e.type==="heading";return s.jsx("div",{className:"native-block",dir:"auto",style:{...n,marginBottom:o?10:8,padding:o?"7px 9px":"6px 8px",borderRadius:6,fontSize:o?14:13,fontWeight:o?650:400,lineHeight:1.45},title:e.change_type,children:s.jsx(Gh,{item:a,side:r})})}function Gh({item:e,side:t}){var a,o;const r=e.token_diff||[];return e.highlight==="modified"&&Array.isArray(r)&&r.some(i=>i.op&&i.op!=="equal")?s.jsx("span",{dir:"auto",children:r.map((i,l)=>{const c=i.op;if(c==="delete"&&t!=="base"||c==="insert"&&t==="base")return null;const u=c==="equal"||t==="base"?i.text_a:i.text_b;if(!u)return null;let m="";return c==="delete"&&(m="native-token-delete"),c==="insert"&&(m="native-token-insert"),c==="replace"&&(m=t==="base"?"native-token-replace-base":"native-token-replace-target"),s.jsxs(Ja.Fragment,{children:[l>0?" ":"",s.jsx("span",{className:`native-token ${m}`,dir:"auto",children:u})]},l)})}):s.jsx("span",{dir:"auto",children:e.text||((a=e.payload)==null?void 0:a.text)||((o=e.payload)==null?void 0:o.layout_text)||e.path||"-"})}function Jh({item:e,viewerType:t}){var i;const r=Vi(e),n=e.rows||[],a=((i=e.payload)==null?void 0:i.table_title)||e.text||"Table",o=t==="spreadsheet";return s.jsxs("div",{className:"native-block",dir:"auto",style:{...Ws(e.highlight),marginBottom:14,padding:10,borderRadius:7},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:10,alignItems:"baseline",flexWrap:"wrap",marginBottom:7},children:[s.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--text-primary)"},children:a}),s.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)"},children:[n.length," row",n.length===1?"":"s"]})]}),s.jsx("div",{className:"native-table-wrap dl-scrollbar",children:s.jsxs("table",{className:`native-table ${o?"spreadsheet":""}`,style:{fontSize:12},children:[s.jsx("thead",{children:s.jsx("tr",{style:{background:"var(--surface-sunken)",color:"var(--text-primary)"},children:r.map((l,c)=>{const u=String(l||"").toLowerCase(),m=c>0&&(u.includes("pcv")||u.includes("pcb")||u.includes("model")||u.includes("spec")||String(l||"").length<=4||r.length>=6&&String(l||"").length<=12);return s.jsx("th",{dir:"auto",className:m?"vertical-th":"",style:m?{...ar,verticalAlign:"bottom"}:ar,children:m?s.jsx("span",{className:"vertical-th-text",children:l}):l},l)})})}),s.jsx("tbody",{children:n.map(l=>{const c=Ws(l.highlight,!0);return s.jsx("tr",{title:l.change_type,style:{background:c.background},children:r.map(u=>{var m;return s.jsx("td",{dir:"auto",style:{...Or,borderLeft:c.borderLeft},children:dr((m=qi(l.values))==null?void 0:m[u])},u)})},l.id)})})]})})]})}function Vi(e){return(Array.isArray(e==null?void 0:e.header)?e.header:[]).map(r=>String(r||"").trim()).filter(r=>r&&!mr(r))}function qi(e){return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).map(([t,r])=>[String(t||"").trim(),r]).filter(([t])=>t&&!mr(t)))}function Yh(e){const r=(Array.isArray(e==null?void 0:e.rows)?e.rows:[]).map(n=>{const a=qi(n.values);return Object.values(a).map(i=>dr(i)).filter(i=>i&&i!=="-").join(" / ")||n.text||""}).filter(Boolean);return r.length?r.join(`
`):(e==null?void 0:e.text)||Vi(e).join(" / ")||"Document text"}function Xh(e,t){var y;if(((y=e==null?void 0:e.payload)==null?void 0:y.source_format)==="docx"||t!=="document")return!1;const r=Array.isArray(e==null?void 0:e.header)?e.header:[],n=Vi(e),a=Array.isArray(e==null?void 0:e.rows)?e.rows:[],o=r.some(v=>mr(v)),i=a.flatMap(v=>Object.values(qi(v.values||{})).map(x=>String(x||"").trim()).filter(Boolean));if(o&&n.length<=2)return!0;if(!a.length||!i.length)return!1;const c=i.filter(v=>v.length>70||v.split(/\s+/).length>=10).length/Math.max(1,i.length),m=i.filter(v=>/[\u0600-\u06ff]/.test(v)&&/[A-Za-z]/.test(v)).length/Math.max(1,i.length),g=n.filter(v=>/feature|description|item|name|order|code|part|model|price|amount|status|date|term|rent|fee/i.test(v)).length/Math.max(1,n.length);return m>=.2&&g<.35||a.length<=6&&c>=.45&&g<.35}function Zh({columns:e,rows:t}){if(e=(e||[]).filter(n=>!mr(n)),!e.length||!(t!=null&&t.length))return null;const r=zh(e.length,420,920);return s.jsx("div",{className:"dl-scrollbar table-scroll-frame",style:{marginTop:12},children:s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12,minWidth:r},children:[s.jsx("thead",{children:s.jsx("tr",{style:{background:"#f2eee6"},children:e.map(n=>s.jsx("th",{title:n,style:ar,dir:"auto",children:n},n))})}),s.jsx("tbody",{children:t.map((n,a)=>s.jsx("tr",{children:e.map(o=>{var i;return s.jsx("td",{style:Or,dir:"auto",children:dr(((i=n==null?void 0:n.values)==null?void 0:i[o])??(n==null?void 0:n[o]))},o)})},a))})]})})}function or({columns:e,rows:t}){const r=(e||[]).filter(n=>!mr(n));return s.jsx("div",{className:"dl-scrollbar",style:{overflowX:"auto"},children:s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13,minWidth:780},children:[s.jsx("thead",{children:s.jsx("tr",{style:{background:"#1f2937",color:"white"},children:r.map(n=>s.jsx("th",{dir:"auto",style:{...ar,padding:"10px 12px",borderBottom:"1px solid #384250",color:"white"},children:n},n))})}),s.jsx("tbody",{children:t.slice(0,200).map((n,a)=>s.jsx("tr",{children:r.map(o=>s.jsx("td",{dir:"auto",style:Or,children:dr(n[o])},o))},a))})]})})}function eg({rows:e}){return e!=null&&e.length?s.jsx("div",{className:"dl-scrollbar",style:{overflowX:"auto",marginTop:10},children:s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13,minWidth:640},children:[s.jsx("thead",{children:s.jsxs("tr",{style:{background:"#f2eee6",color:"#344054"},children:[s.jsx("th",{style:ar,dir:"auto",children:"Field"}),s.jsx("th",{style:ar,dir:"auto",children:"Before"}),s.jsx("th",{style:ar,dir:"auto",children:"After"})]})}),s.jsx("tbody",{children:e.map((t,r)=>s.jsxs("tr",{children:[s.jsx("td",{style:Or,dir:"auto",children:t.field||t.column||t.name||"-"}),s.jsx("td",{style:{...Or,color:G.DELETED.text},dir:"auto",children:dr(t.before??t.base??t.old)}),s.jsx("td",{style:{...Or,color:G.ADDED.text},dir:"auto",children:dr(t.after??t.target??t.new)})]},r))})]})}):null}function tg({runId:e,meta:t,tab:r,setTab:n}){return s.jsxs(s.Fragment,{children:[s.jsx(ng,{meta:t}),s.jsx(ag,{tab:r,setTab:n}),s.jsxs("main",{style:{...ft,padding:12},children:[r==="overview"&&s.jsx(og,{runId:e,meta:t}),r==="tables"&&s.jsx(sg,{runId:e}),r==="text"&&s.jsx(ig,{runId:e}),r==="json"&&s.jsx(lg,{runId:e,meta:t})]}),s.jsxs("section",{className:"workspace-surface extraction-query-surface",style:{marginTop:12},children:[s.jsx("div",{className:"surface-title-row",children:s.jsxs("div",{children:[s.jsx("h3",{children:"Ask This Extraction"}),s.jsx("p",{children:"Search the extracted text, tables, headings, and page evidence from this document."})]})}),s.jsx(rg,{runId:e})]})]})}function rg({runId:e}){const[t,r]=w.useState(""),[n,a]=w.useState([]),[o,i]=w.useState(!1),l=async()=>{const c=t.trim();if(!c||o)return;const u=`extract-user-${Date.now()}`,m=`extract-answer-${Date.now()}`;a(f=>[...f,{id:u,role:"user",text:c,timestamp:new Date().toLocaleTimeString()}]),r(""),i(!0);try{const f=await fetch(`${q}/extract-runs/${e}/query`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:c,mode:"fast"})});if(!f.ok)throw new Error(await ae(f));const g=await f.json();a(y=>{var v;return[...y,{id:m,role:"assistant",text:g.answer||`Found ${((v=g.rows)==null?void 0:v.length)||0} matching passages.`,rows:g.rows||[],columns:g.columns||["Page","Type","Path","Text","Score"],timestamp:new Date().toLocaleTimeString()}]})}catch(f){a(g=>[...g,{id:m,role:"assistant",text:oe(f),rows:[],timestamp:new Date().toLocaleTimeString(),isError:!0}])}finally{i(!1)}};return s.jsxs("section",{className:"query-workbench",children:[n.length===0?s.jsx(hr,{label:"Ask about clauses, tables, fields, dates, page content, or extracted values."}):s.jsx("div",{className:"query-chat-log",children:n.map(c=>{var u;return s.jsxs("article",{className:`query-message ${c.role}${c.isError?" error":""}`,children:[s.jsxs("div",{className:"query-message-meta",children:[s.jsx("span",{children:c.role==="user"?"You":"Extraction query"}),s.jsx("span",{children:c.timestamp})]}),s.jsx("div",{className:"query-message-text",dir:"auto",children:c.text}),((u=c.rows)==null?void 0:u.length)>0&&s.jsx("div",{className:"query-results-shell",style:{marginTop:10},children:s.jsx(or,{columns:c.columns,rows:c.rows})})]},c.id)})}),s.jsxs("div",{className:"query-composer",children:[s.jsx("textarea",{value:t,onChange:c=>r(c.target.value),onKeyDown:c=>{c.key==="Enter"&&!c.shiftKey&&(c.preventDefault(),l())},placeholder:"Ask about the extracted document...",disabled:o,rows:3}),s.jsx("div",{className:"query-composer-actions",children:s.jsx("button",{type:"button",className:"primary-action compact",onClick:l,disabled:o||!t.trim(),children:o?"Searching":"Ask"})})]})]})}function ng({meta:e}){var r,n;const t=e.summary||{};return s.jsxs("section",{style:{...ft,padding:12,display:"flex",gap:8,marginBottom:12,flexWrap:"wrap",alignItems:"center"},children:[s.jsx(ke,{label:"Format",value:(e.source_format||"-").toUpperCase()}),s.jsx(ke,{label:"Documents",value:((r=e.documents)==null?void 0:r.length)||t.document_count||1}),s.jsx(ke,{label:"Coverage",value:typeof e.coverage=="number"?`${e.coverage.toFixed(1)}%`:"-"}),s.jsx(ke,{label:"Quality",value:t.quality||"-"}),s.jsx(ke,{label:"Tables",value:t.table_count||0}),s.jsx(ke,{label:"Blocks",value:Object.values(t.block_counts||{}).reduce((a,o)=>a+Number(o||0),0)}),s.jsx(ke,{label:"Pages",value:e.n_pages||e.native_pages||0}),Number(((n=e.ai_usage)==null?void 0:n.total_tokens)||0)>0&&s.jsx(ke,{label:"AI tokens",value:`${bt(e.ai_usage.total_tokens)} (${bt(e.ai_usage.calls||0)} calls)`})]})}function ag({tab:e,setTab:t}){const r=[["overview","Extraction overview"],["tables","Extracted tables"],["text","Text blocks"],["json","Structured JSON"]];return s.jsx("nav",{style:{display:"flex",gap:4,borderBottom:"1px solid #d8d0c3",marginBottom:12,overflowX:"auto"},children:r.map(([n,a])=>{const o=e===n;return s.jsx("button",{onClick:()=>t(n),style:{padding:"10px 14px",background:o?"#1f2937":"transparent",color:o?"white":"#344054",border:o?"1px solid #1f2937":"1px solid transparent",borderRadius:"8px 8px 0 0",cursor:"pointer",fontWeight:600,whiteSpace:"nowrap"},children:a},n)})})}function og({runId:e,meta:t}){const r=t.summary||{},n=t.ai_analysis,a=(n==null?void 0:n.result)||null;return s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12,flexWrap:"wrap",marginBottom:12},children:[s.jsxs("div",{children:[s.jsx("h2",{style:{margin:0,fontSize:18,fontWeight:650},dir:"auto",children:t.label||"Extracted document"}),s.jsx("p",{style:{margin:"6px 0 0",color:"#667085",fontSize:13},dir:"auto",children:r.message||"Extraction complete."})]}),s.jsx("button",{onClick:()=>{window.location.href=`${q}/extract-runs/${e}/json`},style:kh(!1),children:"Download JSON"})]}),s.jsxs("div",{className:"report-metrics",style:{display:"grid",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",gap:10,marginBottom:12},children:[s.jsx(la,{label:"Extraction coverage",value:typeof t.coverage=="number"?`${t.coverage.toFixed(1)}%`:"-"}),s.jsx(la,{label:"Tables detected",value:r.table_count||0}),s.jsx(la,{label:"Table rows",value:r.table_row_count||0}),s.jsx(la,{label:"Image/OCR blocks",value:r.figure_count||0})]}),s.jsxs("div",{style:{...ft,padding:14,boxShadow:"none",marginBottom:12},children:[s.jsx("div",{style:{fontWeight:650,marginBottom:8},children:"Block breakdown"}),s.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[Object.entries(r.block_counts||{}).map(([o,i])=>s.jsx(ke,{label:o.replace("_"," "),value:i},o)),Object.keys(r.block_counts||{}).length===0&&s.jsx("span",{style:{color:"#667085"},children:"No block statistics available."})]})]}),n&&s.jsxs("div",{style:{...ft,padding:14,boxShadow:"none"},children:[s.jsxs("div",{style:{fontWeight:650,marginBottom:8},children:["AI-assisted analysis ",n.available?"- available":"- unavailable"]}),!n.available&&s.jsx("div",{style:{color:G.DELETED.text},dir:"auto",children:normalizeErrorMessage(n.error)||"AI analysis was not generated."}),a&&s.jsxs("div",{style:{color:"#344054",lineHeight:1.5},children:[s.jsx("p",{style:{marginTop:0},dir:"auto",children:a.executive_summary||"AI analysis completed."}),Array.isArray(a.key_items)&&a.key_items.length>0&&s.jsx(or,{columns:["Item"],rows:a.key_items.slice(0,20).map(o=>({Item:typeof o=="string"?o:JSON.stringify(o)}))})]})]}),s.jsx(Ih,{usage:t.ai_usage})]})}function la({label:e,value:t}){return s.jsxs("div",{style:{background:"#fbfaf6",border:"1px solid #ded6c8",borderRadius:8,padding:12},children:[s.jsx("div",{style:{fontSize:12,color:"#667085",fontWeight:600},children:e}),s.jsx("div",{style:{marginTop:4,fontSize:22,color:"#1f2937",fontWeight:650},children:t})]})}function sg({runId:e}){const[t,r]=w.useState({loading:!0,error:"",tables:[]});return w.useEffect(()=>{let n=!1;return r({loading:!0,error:"",tables:[]}),fetch(`${q}/extract-runs/${e}/tables?include_rows=true`).then(async a=>{if(!a.ok)throw new Error(await ae(a));return a.json()}).then(a=>{n||r({loading:!1,error:"",tables:a.tables||[]})}).catch(a=>{n||r({loading:!1,error:oe(a),tables:[]})}),()=>{n=!0}},[e]),t.loading?s.jsx(Wn,{label:"Loading extracted tables..."}):t.error?s.jsx(Hi,{message:t.error}):t.tables.length?s.jsx("div",{style:{display:"grid",gap:12},children:t.tables.map(n=>s.jsxs("div",{style:{...ft,padding:12,boxShadow:"none"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12,flexWrap:"wrap",marginBottom:8},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:650},dir:"auto",children:n.display_name||n.title||"Detected table"}),s.jsxs("div",{style:{color:"#667085",fontSize:13,marginTop:3},dir:"auto",children:[n.page_label," · ",n.n_columns," columns · ",n.n_rows," rows · header quality ",Math.round((n.header_quality||0)*100),"%",n.extraction_confidence?` · extraction ${Math.round(n.extraction_confidence*100)}%`:""]})]}),s.jsx("code",{children:String(n.id||"").slice(0,8)})]}),Array.isArray(n.quality_warnings)&&n.quality_warnings.length>0&&s.jsxs("div",{style:{color:"#8a5a00",fontSize:13,marginBottom:8},dir:"auto",children:["Review note: ",n.quality_warnings.slice(0,2).join(" ")]}),s.jsxs("div",{style:{color:"#475467",fontSize:13,marginBottom:8},dir:"auto",children:["Columns: ",(n.columns||[]).slice(0,12).join(" | ")||"No columns detected"]}),s.jsx(Zh,{columns:n.columns||[],rows:n.rows||n.row_preview||[]})]},n.id))}):s.jsx(hr,{label:"No tables were detected in this document."})}function ig({runId:e}){const[t,r]=w.useState({loading:!0,error:"",blocks:[]});if(w.useEffect(()=>{let a=!1;return r({loading:!0,error:"",blocks:[]}),fetch(`${q}/extract-runs/${e}/blocks?limit=1000`).then(async o=>{if(!o.ok)throw new Error(await ae(o));return o.json()}).then(o=>{a||r({loading:!1,error:"",blocks:o.blocks||[]})}).catch(o=>{a||r({loading:!1,error:oe(o),blocks:[]})}),()=>{a=!0}},[e]),t.loading)return s.jsx(Wn,{label:"Loading extracted text blocks..."});if(t.error)return s.jsx(Hi,{message:t.error});const n=t.blocks.filter(a=>a.text||a.type==="table").slice(0,500).map(a=>({Page:a.page_number,Type:a.type,Path:a.path,Text:Ge(a.text||JSON.stringify(a.payload||{}),700)}));return n.length?s.jsx(or,{columns:["Page","Type","Path","Text"],rows:n}):s.jsx(hr,{label:"No extracted text blocks were returned."})}function lg({runId:e,meta:t}){const[r,n]=w.useState({loading:!0,error:"",data:null});if(w.useEffect(()=>{let f=!1;return n({loading:!0,error:"",data:null}),Sh(e).then(g=>{f||n({loading:!1,error:"",data:g})}).catch(g=>{f||n({loading:!1,error:oe(g),data:null})}),()=>{f=!0}},[e]),r.loading)return s.jsx(Wn,{label:"Building structured JSON preview..."});if(r.error)return s.jsx(Hi,{message:r.error});const a=r.data||{},o=a.tables||[],i=a.pages||[],l=a.content||i.flatMap(f=>f.content||[]),c=a.document_summary||{},u=c.extraction_quality||{},m=l.map(f=>f.inferred_record).filter(Boolean);return s.jsxs("div",{style:{display:"grid",gap:12},children:[s.jsxs("div",{style:{...ft,padding:12,boxShadow:"none"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12,alignItems:"flex-start",flexWrap:"wrap"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:650,marginBottom:8},dir:"auto",children:"Business extraction summary"}),s.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",color:"#344054",fontSize:13},children:[s.jsxs("span",{style:vr,children:["Document: ",c.label||t.label||"uploaded file"]}),s.jsxs("span",{style:vr,children:["Type: ",c.source_type||t.source_format||"document"]}),s.jsxs("span",{style:vr,children:["Template: ",c.detected_template||"generic document"]}),s.jsxs("span",{style:vr,children:["Quality: ",u.grade||"not rated"]}),Number.isFinite(u.score)&&s.jsxs("span",{style:vr,children:["Score: ",Math.round(u.score*100),"%"]}),c.detected_language&&s.jsxs("span",{style:vr,children:["Script: ",c.detected_language]})]})]}),s.jsx("button",{onClick:()=>{window.location.href=`${q}/extract-runs/${e}/json`},style:jh(),children:"Download clean JSON"})]}),Array.isArray(u.warnings)&&u.warnings.length>0&&s.jsx("div",{style:{color:"#8a5a00",fontSize:13,marginTop:8,lineHeight:1.4},dir:"auto",children:u.warnings.slice(0,3).map(f=>f.message||f).join(" ")})]}),s.jsxs("div",{style:{...ft,padding:12,boxShadow:"none"},children:[s.jsx("div",{style:{display:"flex",justifyContent:"space-between",gap:10,alignItems:"center",marginBottom:8},children:s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:650},children:"Document-order extracted text"}),s.jsxs("div",{style:{color:"#667085",fontSize:13,marginTop:3},children:[l.length," text block(s), ",m.length," inferred record(s), ",o.length," table(s), ",i.length," page(s)"]})]})}),l.length>0?s.jsx(or,{columns:["Page","Type","Path","Text","Inferred record"],rows:l.slice(0,500).map(f=>({Page:f.page,Type:f.type,Path:f.path,Text:Ge(f.text,900),"Inferred record":f.inferred_record?xc(f.inferred_record.values):""}))}):s.jsx(hr,{label:"No ordered text content was returned. Check the Text blocks tab."})]}),m.length>0&&s.jsxs("div",{style:{...ft,padding:12,boxShadow:"none"},children:[s.jsx("div",{style:{fontWeight:650,marginBottom:8},children:"Inferred business records"}),s.jsx(or,{columns:["Page","Values","Source text","Citation"],rows:m.slice(0,120).map(f=>({Page:f.page,Values:xc(f.values),"Source text":Ge(f.source_text,700),Citation:f.citation}))})]}),o.length>0&&s.jsxs("div",{style:{...ft,padding:12,boxShadow:"none"},children:[s.jsx("div",{style:{fontWeight:650,marginBottom:8},children:"Extracted tables"}),s.jsx(or,{columns:["title","page","area","row_count","columns"],rows:o.slice(0,30).map(f=>({title:f.title,page:f.page,area:f.area,row_count:f.row_count,columns:(f.columns||[]).join(" | ")}))})]}),s.jsxs("div",{style:{...ft,padding:12,boxShadow:"none"},children:[s.jsx("div",{style:{fontWeight:650,marginBottom:8},children:"Clean JSON preview"}),s.jsx("pre",{className:"dl-scrollbar",style:{margin:0,maxHeight:360,overflow:"auto",background:"#fbfaf6",border:"1px solid #e0d8ca",borderRadius:8,padding:12,fontSize:12,lineHeight:1.45,whiteSpace:"pre-wrap"},children:JSON.stringify({document_summary:a.document_summary,content:l.slice(0,30),tables:o.slice(0,10)},null,2)})]})]})}function Hi({message:e}){return s.jsx("div",{style:{marginTop:16,border:"1px solid #f0b4b4",background:"#fff5f5",color:"#9f1d1d",borderRadius:8,padding:13,fontSize:14,fontWeight:600,lineHeight:1.45},children:e})}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rp=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ug={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=w.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:a="",children:o,iconNode:i,...l},c)=>w.createElement("svg",{ref:c,...ug,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:rp("lucide",a),...l},[...i.map(([u,m])=>w.createElement(u,m)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=(e,t)=>{const r=w.forwardRef(({className:n,...a},o)=>w.createElement(dg,{ref:o,iconNode:t,className:rp(`lucide-${cg(e)}`,n),...a}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=gr("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=gr("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=gr("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=gr("FileOutput",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2",key:"1vk7w2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6",key:"1jink5"}],["path",{d:"m5 11-3 3",key:"1dgrs4"}],["path",{d:"m5 17-3-3h10",key:"1mvvaf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=gr("GitCompare",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=gr("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=gr("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);function yg(){return s.jsxs("div",{className:"altrai-wordmark","aria-label":"Altrai",children:[s.jsx("span",{children:"Altr"}),s.jsx("span",{className:"accent",children:"ai"})]})}const wg=[{label:"AI Document Intelligence",items:[{key:"compare",label:"Compare",icon:gg},{key:"extract",label:"Extract",icon:hg},{key:"jobs",label:"Work History",icon:xg}]},{label:"Administration",items:[{key:"admin",label:"Admin Studio",icon:vg,title:"Use cases, datasets, and access policies"}]},{label:"AI Agents",items:[{key:"agents",label:"Coming soon",icon:pg,disabled:!0,title:"Future skills and multi-agent workflows"}]}];function bg({workspace:e,onNavigate:t,collapsed:r=!1}){return s.jsx("nav",{className:"workspace-nav","aria-label":"Workspace navigation",children:wg.map(n=>s.jsxs("div",{className:"workspace-nav-group",children:[!r&&s.jsx("div",{className:"workspace-nav-label",children:n.label}),n.items.map(a=>{const o=e===a.key;return s.jsxs("button",{type:"button",className:`workspace-nav-item${o?" active":""}`,onClick:()=>!a.disabled&&t(a.key),disabled:a.disabled,title:r?a.title||a.label:a.title,children:[s.jsx(a.icon,{className:"workspace-nav-icon","aria-hidden":"true"}),!r&&s.jsx("span",{className:"workspace-nav-text",children:a.label})]},`${n.label}-${a.label}-${a.key}`)})]},n.label))})}const np=w.createContext(null),Ec="altrai_theme";function kg({children:e}){const[t,r]=w.useState(()=>typeof window>"u"?"system":window.localStorage.getItem(Ec)||"system");w.useEffect(()=>{document.documentElement.dataset.theme=t,window.localStorage.setItem(Ec,t)},[t]);const n=w.useMemo(()=>({theme:t,setTheme:r}),[t]);return s.jsx(np.Provider,{value:n,children:e})}function ap(){const e=w.useContext(np);if(!e)throw new Error("useTheme must be used within ThemeProvider");return e}const jg=[["system","Auto"],["light","Light"],["dark","Dark"]];function Sg({collapsed:e=!1}){const{theme:t,setTheme:r}=ap();return s.jsxs("footer",{className:"user-footer",children:[s.jsx("div",{className:"user-avatar","aria-hidden":"true",children:"N"}),!e&&s.jsxs("div",{className:"user-meta",children:[s.jsx("strong",{children:"Nithin"}),s.jsx("span",{children:"platform_admin"})]}),!e&&s.jsx("div",{className:"rail-theme-toggle","aria-label":"Theme selector",children:jg.map(([n,a])=>s.jsx("button",{type:"button",className:t===n?"active":"",onClick:()=>r(n),children:a},n))})]})}const _g={jobs:"Work History",compare:"Compare",extract:"Extract",agents:"AI Agents",admin:"Admin Studio"},Eg={compare:{label:"Comparison History",historyKind:"comparison"},extract:{label:"Extraction History",historyKind:"extraction"}};function Ng({workspace:e,runId:t,onNavigate:r,onDownloadReport:n,children:a}){const[o,i]=w.useState(!1),{theme:l}=ap(),c=Eg[e];return s.jsxs("div",{className:`workspace-shell theme-${l}${o?" collapsed":""}`,children:[s.jsxs("aside",{className:"workspace-sidebar",children:[s.jsxs("div",{className:"workspace-brand",children:[s.jsx("div",{className:"workspace-brand-copy",children:s.jsx(yg,{})}),s.jsx("button",{type:"button",className:"workspace-collapse-button",onClick:()=>i(u=>!u),"aria-label":o?"Expand navigation":"Collapse navigation",title:o?"Expand navigation":"Collapse navigation",children:o?s.jsx(mg,{size:16,strokeWidth:1.5}):s.jsx(fg,{size:16,strokeWidth:1.5})})]}),s.jsx(bg,{workspace:e,onNavigate:r,collapsed:o}),s.jsx(Sg,{collapsed:o})]}),s.jsxs("section",{className:"workspace-main",children:[s.jsxs("header",{className:"workspace-topbar",children:[s.jsx("div",{children:s.jsx("h1",{children:_g[e]||"Workspace"})}),s.jsxs("div",{className:"workspace-actions",children:[t&&s.jsx("button",{type:"button",className:"workspace-primary-action",onClick:n,children:"Export report"}),c&&s.jsx("button",{type:"button",className:"workspace-secondary-action",onClick:()=>r("jobs",{historyKind:c.historyKind}),children:c.label})]})]}),s.jsx("div",{className:"workspace-content",children:a})]})]})}const Cg=[["platform_admin","Platform Admin"],["business_unit_admin","Business Unit Admin"],["reviewer","Reviewer"],["submitter","Submitter"],["viewer","Viewer"]],Nc={supplier:"",family_name:"",domain:"generic",description:"",use_case_type:"comparison",expected_formats:["pdf","docx"],sample_plan:"",onboarding_notes:"",learning_mode:"ai_assisted_bootstrap",allowed_roles:[]},zg=[["pdf","PDF"],["docx","Word"],["xlsx","Excel"],["csv","CSV/TSV"],["image","Scanned image"]],Pg=[["deterministic_first","Deterministic first"],["ai_assisted_bootstrap","AI-assisted bootstrap"],["manual_profile","Manual profile"]],Tg=()=>({id:crypto.randomUUID(),baseline:null,revised:null});function Dg(){var Ji,Yi,Xi,Zi;const[e,t]=w.useState([]),[r,n]=w.useState(""),[a,o]=w.useState(null),[i,l]=w.useState(Nc),[c,u]=w.useState(""),[m,f]=w.useState([]),[g,y]=w.useState(""),[v,x]=w.useState({use_case_type:"comparison",expected_formats:["pdf","docx"],sample_plan:"",onboarding_notes:"",learning_mode:"ai_assisted_bootstrap"}),[j,p]=w.useState({baseline:null,revised:null,variationPairs:[]}),[d,h]=w.useState(!0),[b,S]=w.useState(null),[E,N]=w.useState(""),[z,D]=w.useState(null),[L,B]=w.useState(null),[_e,Te]=w.useState(null),[xt,lt]=w.useState(0),[fe,me]=w.useState({baseline:null,revised:null,variations:[]}),[C,$]=w.useState([]),[I,K]=w.useState(!0),[F,le]=w.useState(""),[Me,T]=w.useState(""),[A,M]=w.useState(""),Q=()=>({"Content-Type":"application/json","X-User-Role":window.sessionStorage.getItem("simulated_role")||"platform_admin"}),W=async()=>{K(!0),T("");try{const k=await yr("/admin/datasets",{headers:Q()});t(k.datasets||[])}catch(k){T(oe(k))}finally{K(!1)}};w.useEffect(()=>{W(),ve()},[]),w.useEffect(()=>{if(F!=="analyze"&&F!=="create")return;const k=Date.now();lt(0);const R=window.setInterval(()=>{lt(Math.floor((Date.now()-k)/1e3))},1e3);return()=>window.clearInterval(R)},[F]);const ve=async()=>{try{const k=await yr("/ai-health");S(k);const R=(k.models||[]).find(V=>V.kind==="chat"&&V.configured);R!=null&&R.id&&N(R.id)}catch{S({ok:!1,models:[],message:"AI model status is unavailable."})}},qe=async k=>{var R;n(k),T(""),M("");try{const V=await yr(`/admin/datasets/${k}`,{headers:Q()});o(V),u(V.prompt_guidelines||""),f(V.allowed_roles||[]),x({use_case_type:V.use_case_type||"comparison",expected_formats:V.expected_formats||["pdf","docx"],sample_plan:V.sample_plan||"",onboarding_notes:V.onboarding_notes||"",learning_mode:V.learning_mode||"deterministic_first"}),y(JSON.stringify(((R=V.template_profile)==null?void 0:R.column_rules)||[],null,2)),await sp(k)}catch(V){T(oe(V))}},sp=async k=>{try{const R=await yr(`/admin/datasets/${k}/documents`,{headers:Q()});$(R.documents||[])}catch{$([])}},ip=async k=>{k.preventDefault(),le("create"),T(""),M("");const R=qo(j);Te({status:"running",stage:"create",submitted:R,startedAt:new Date().toISOString(),error:""});try{const V=await Vg("/admin/datasets",{method:"POST",headers:Q(),body:JSON.stringify(i)});let Ee="",ye="";if(V.id&&ca(j)){Te(De=>({...De||{},stage:"samples"}));try{await Qi(V.id,j,i.onboarding_notes,i.learning_mode==="ai_assisted_bootstrap"),Ee=" Sample documents learned and model profile bootstrapped."}catch(De){ye=` Sample learning did not finish: ${oe(De)}`}}Te(De=>({...De||{},status:"success",stage:"done",datasetId:V.id,sampleWarning:ye,finishedAt:new Date().toISOString()})),M(`Use case created.${Ee||ye||" You can attach or relearn samples from the saved use case."}`),l(Nc),p({baseline:null,revised:null,variationPairs:[]}),D(null);try{await W(),V.id&&await qe(V.id)}catch{M(`Use case created.${Ee||ye||""} Refresh the use case list if it does not appear immediately.`)}}catch(V){const Ee=oe(V);T(Ee),Te(ye=>({...ye||{},status:"failed",finishedAt:new Date().toISOString(),error:Ee}))}finally{le("")}},lp=k=>{try{const R=Pc(g);if(R.some(Ee=>Ee.role===k)){M(`A rule for label '${k}' already exists.`);return}const V=[...R,{pattern:`.*${k.toLowerCase().replace(/_/g,".*")}.*`,role:k}];y(JSON.stringify(V,null,2)),M(`Added suggested mapping rule for '${k}'. Click 'Save profile settings' to apply.`)}catch{T("Column rules JSON is malformed. Please fix it before adding labels.")}},cp=async()=>{if(r){le("save"),T(""),M("");try{await yr(`/admin/datasets/${r}`,{method:"PUT",headers:Q(),body:JSON.stringify({prompt_guidelines:c,allowed_roles:m,column_rules:Pc(g),...v})}),M("Use case settings saved."),await W(),await qe(r)}catch(k){T(oe(k))}finally{le("")}}},up=async k=>{if(k.preventDefault(),!(!r||!ca(fe))){le("bootstrap"),T(""),M("");try{await Qi(r,fe,v.onboarding_notes||"",v.learning_mode==="ai_assisted_bootstrap"),M("Sample documents learned and model profile updated."),me({baseline:null,revised:null,variations:[]}),await qe(r)}catch(R){T(oe(R))}finally{le("")}}},Qi=async(k,R,V,Ee)=>{const ye=new FormData;R.baseline&&ye.append("baseline",R.baseline),R.revised&&ye.append("revised",R.revised),ho(R).forEach(go=>ye.append("variations",go)),ye.append("notes",V||""),ye.append("use_llm",String(Ee));const De=await dp(k,ye);if(!De.ok)throw new Error(await ae(De));return De.json()},dp=async(k,R)=>{const V=()=>{const De=new FormData;for(const[go,xp]of R.entries())De.append(go,xp);return De},Ee=De=>fetch(`${q}${De}`,{method:"POST",headers:{"X-User-Role":window.sessionStorage.getItem("simulated_role")||"platform_admin"},body:V()}),ye=await Ee(`/admin/datasets/${k}/samples`);return ye.status!==404?ye:Ee(`/api/admin/datasets/${k}/samples`)},pp=async()=>{if(ca(j)){if(d&&!E){T("Select a configured AI model before running AI-assisted sample analysis.");return}le("analyze"),T(""),M(""),D(null),B({status:"running",mode:d?"ai":"deterministic",model:d?E:"",submitted:qo(j),startedAt:new Date().toISOString(),error:""});try{const k=await Ig({files:j,form:i,useAiAnalysis:d,selectedModel:E});if(!k.ok)throw new Error(await ae(k));const R=await k.json(),V=R.suggested_dataset||{};D(R),B(Ee=>({...Ee||{},status:"success",finishedAt:new Date().toISOString(),backendUsage:Rg(R),model:R.selected_model||E})),l({...i,...V,allowed_roles:i.allowed_roles||[],learning_mode:d?"ai_assisted_bootstrap":"deterministic_first"}),M(d?"Sample analysis complete. Review the suggested use case model before creating it.":"Deterministic sample scan complete. Review the suggested use case model before creating it.")}catch(k){const R=oe(k);T(R),B(V=>({...V||{},status:"failed",finishedAt:new Date().toISOString(),error:R}))}finally{le("")}}},fp=async()=>{if(!(!r||!a)){le("delete"),T(""),M("");try{await yr(`/admin/datasets/${r}`,{method:"DELETE",headers:Q()}),M("Use case deleted."),n(""),o(null),$([]),await W()}catch(k){T(oe(k))}finally{le("")}}},Ki=qo(j),Vn=ca(j),Gi=d&&!E,mp=!Vn||F==="analyze"||Gi,hp=F==="analyze"?"Analyzing samples":d?"Analyze samples with AI":"Scan samples without AI",gp=Vn?Gi?"Select an available chat model before AI analysis.":d?"Ready to send selected samples and context to the model.":"Ready for deterministic structure scan. No AI tokens will be used.":"Attach a baseline, revised, or variation sample to start.";return s.jsxs("section",{className:"admin-studio",children:[s.jsx("div",{className:"admin-intro",children:s.jsxs("div",{children:[s.jsx("h2",{children:"Use Case Onboarding"}),s.jsx("p",{children:"Create document models from representative samples. Use AI to suggest metadata, then keep governance and access settings with the saved use case."})]})}),A&&s.jsx("div",{className:"admin-notice",children:A}),Me&&s.jsx(An,{message:Me}),s.jsxs("div",{className:"admin-grid",children:[s.jsxs("aside",{className:"admin-panel",children:[s.jsxs("div",{className:"admin-panel-head",children:[s.jsx("h3",{children:"Use Cases"}),s.jsx("button",{type:"button",className:"ghost-action compact",onClick:W,children:"Refresh"})]}),I?s.jsx(Wn,{label:"Loading use cases"}):e.length===0?s.jsx(hr,{label:"No use cases onboarded yet."}):s.jsx("div",{className:"dataset-list",children:e.map(k=>s.jsxs("button",{type:"button",className:`dataset-item${r===k.id?" active":""}`,onClick:()=>qe(k.id),children:[s.jsx("strong",{children:k.supplier}),s.jsx("span",{children:k.family_name}),s.jsxs("small",{children:[k.use_case_type||"comparison"," · ",(k.expected_formats||[]).join(", ")||"formats"," · ",(k.allowed_roles||[]).length||"all"," roles"]})]},k.id))})]}),s.jsxs("main",{className:"admin-panel",children:[s.jsx("div",{className:"admin-panel-head",children:s.jsxs("div",{children:[s.jsx("h3",{children:"Onboard Document Model"}),s.jsx("p",{children:"Start with baseline, revised, or layout samples. The platform learns the structure and suggests the use-case metadata."})]})}),s.jsxs("form",{className:"admin-form onboarding-flow",onSubmit:ip,children:[s.jsxs("section",{className:"admin-review-card",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Use Case Identity"}),s.jsx("p",{children:"Define the business model before uploading samples. Analysis will use these values as context instead of guessing from file names."})]}),s.jsxs("div",{className:"admin-review-grid",children:[s.jsxs("label",{children:["Supplier or entity",s.jsx("input",{value:i.supplier,required:!0,onChange:k=>l({...i,supplier:k.target.value}),placeholder:"Ford, HR, Finance, Legal"})]}),s.jsxs("label",{children:["Use case or family",s.jsx("input",{value:i.family_name,required:!0,onChange:k=>l({...i,family_name:k.target.value}),placeholder:"Order Guide, Policy, Contract"})]}),s.jsxs("label",{children:["Use case type",s.jsxs("select",{value:i.use_case_type,onChange:k=>l({...i,use_case_type:k.target.value}),children:[s.jsx("option",{value:"comparison",children:"Comparison"}),s.jsx("option",{value:"extraction",children:"Extraction"})]})]}),s.jsxs("label",{children:["Domain",s.jsxs("select",{value:i.domain,onChange:k=>l({...i,domain:k.target.value}),children:[s.jsx("option",{value:"generic",children:"Generic"}),s.jsx("option",{value:"automotive",children:"Automotive"}),s.jsx("option",{value:"legal",children:"Legal"}),s.jsx("option",{value:"financial",children:"Financial"}),s.jsx("option",{value:"hr",children:"HR"}),s.jsx("option",{value:"engineering",children:"Engineering"})]})]}),s.jsx("div",{className:"admin-wide-field",children:s.jsx(zc,{value:i.expected_formats,onChange:k=>l({...i,expected_formats:k})})})]})]}),s.jsxs("section",{className:"sample-intake-card",children:[s.jsxs("div",{className:"sample-intake-head",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Training Samples"}),s.jsx("p",{children:"Attach one baseline and one revised document. Add variation pairs only when you have alternate layouts, suppliers, model years, or document structures."})]}),s.jsxs("label",{className:"ai-toggle",children:[s.jsx("input",{type:"checkbox",checked:d,onChange:k=>h(k.target.checked)}),"Analyze with AI model"]})]}),d?s.jsxs("div",{className:"model-select-row",children:[s.jsxs("label",{children:["Model deployment",s.jsx("select",{value:E,onChange:k=>N(k.target.value),children:Cc(b).length?Cc(b).map(k=>s.jsx("option",{value:k.id,children:k.label||k.id},k.id)):s.jsx("option",{value:"",children:"No configured chat model found"})})]}),s.jsx("button",{type:"button",className:"ghost-action compact",onClick:ve,children:"Refresh models"}),s.jsx("span",{children:b!=null&&b.ok?"Model connection verified.":(b==null?void 0:b.message)||"Checking AI model status."})]}):null,s.jsxs("div",{className:"sample-pair-grid",children:[s.jsxs("label",{children:["Baseline sample",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>{var R;return p({...j,baseline:((R=k.target.files)==null?void 0:R[0])||null})}})]}),s.jsxs("label",{children:["Revised sample",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>{var R;return p({...j,revised:((R=k.target.files)==null?void 0:R[0])||null})}})]})]}),s.jsx(Og,{value:j.variationPairs,onChange:k=>p({...j,variationPairs:k})}),s.jsxs("div",{className:"sample-actions analysis-action-row",children:[s.jsxs("button",{type:"button",className:"analyze-action-button",onClick:pp,disabled:mp,"aria-busy":F==="analyze",children:[s.jsx("span",{children:hp}),s.jsx("small",{children:d?E||"No model selected":"Deterministic mode"})]}),s.jsxs("div",{className:"analysis-readiness",children:[s.jsx("span",{className:Vn?"ready":"blocked",children:Vn?"Samples ready":"Waiting for samples"}),s.jsxs("span",{children:[yt(Ki.count)," file(s)"]}),s.jsx("span",{children:op(Ki.totalBytes)}),s.jsx("span",{children:d?"AI-assisted metadata":"No AI tokens"}),s.jsx("small",{children:gp})]})]}),s.jsx(Ag,{run:L,elapsedSeconds:xt,useAiAnalysis:d,selectedModel:E})]}),z?s.jsx(Fg,{data:z}):null,s.jsxs("section",{className:"admin-review-card",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Generated Metadata"}),s.jsx("p",{children:"Analysis fills this section with document understanding, extraction focus, accuracy hints, and reviewer notes. You can also maintain it manually."})]}),s.jsxs("div",{className:"admin-review-grid",children:[s.jsxs("label",{children:["Content description",s.jsx("textarea",{value:i.description,onChange:k=>l({...i,description:k.target.value}),placeholder:"Describe the documents, expected fields, tables, identifiers, and business context."})]}),s.jsxs("label",{children:["Onboarding notes",s.jsx("textarea",{value:i.onboarding_notes,onChange:k=>l({...i,onboarding_notes:k.target.value}),placeholder:"Known pain points, nested headers, language handling, reviewer expectations, or accuracy targets."})]}),s.jsxs("label",{className:"admin-wide-field",children:["Sample strategy",s.jsx("textarea",{value:i.sample_plan,onChange:k=>l({...i,sample_plan:k.target.value}),placeholder:"How many baseline/revised/variation samples should represent this model?"})]})]})]}),s.jsx("button",{type:"submit",className:"primary-action",disabled:F==="create",children:F==="create"?"Creating":"Create use case"}),s.jsx(Mg,{run:_e,elapsedSeconds:xt})]})]})]}),a?s.jsx("section",{className:"admin-panel",children:s.jsxs("div",{className:"admin-detail",children:[s.jsxs("div",{className:"admin-detail-head",children:[s.jsxs("div",{children:[s.jsxs("h3",{children:[a.supplier," · ",a.family_name]}),s.jsx("p",{children:a.description||"No description yet."}),s.jsxs("span",{className:"admin-model-badge",children:[v.use_case_type," model · ",(v.expected_formats||[]).join(", ")]})]}),s.jsx("button",{type:"button",className:"danger-action compact",onClick:fp,disabled:F==="delete",children:F==="delete"?"Deleting":"Delete"})]}),s.jsxs("div",{className:"admin-config-grid",children:[s.jsxs("label",{children:["Use case type",s.jsxs("select",{value:v.use_case_type,onChange:k=>x({...v,use_case_type:k.target.value}),children:[s.jsx("option",{value:"comparison",children:"Comparison"}),s.jsx("option",{value:"extraction",children:"Extraction"})]})]}),s.jsxs("label",{children:["Learning mode",s.jsx("select",{value:v.learning_mode,onChange:k=>x({...v,learning_mode:k.target.value}),children:Pg.map(([k,R])=>s.jsx("option",{value:k,children:R},k))})]}),s.jsx("div",{className:"admin-wide-field",children:s.jsx(zc,{value:v.expected_formats,onChange:k=>x({...v,expected_formats:k})})}),s.jsxs("label",{children:["Sample strategy",s.jsx("textarea",{value:v.sample_plan,onChange:k=>x({...v,sample_plan:k.target.value}),placeholder:"How many samples or variations should represent this model?"})]}),s.jsxs("label",{children:["Onboarding notes",s.jsx("textarea",{value:v.onboarding_notes,onChange:k=>x({...v,onboarding_notes:k.target.value}),placeholder:"Business context, known table layouts, accuracy targets, and reviewer comments."})]}),s.jsxs("label",{children:["Prompt and extraction guidelines",s.jsx("textarea",{value:c,onChange:k=>u(k.target.value),placeholder:"Example: prioritize PCB thickness, PCV code changes, nested pricing rows, or legal obligations."})]}),s.jsxs("label",{children:["Column rules JSON",s.jsx("textarea",{className:"mono",value:g,onChange:k=>y(k.target.value)})]})]}),s.jsx(Ug,{value:m,onChange:f}),s.jsx("button",{type:"button",className:"primary-action",onClick:cp,disabled:F==="save",children:F==="save"?"Saving":"Save profile settings"}),s.jsxs("form",{className:"seed-form",onSubmit:up,children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Sample Document Learning"}),s.jsx("p",{children:"For comparison models, upload a baseline, revised document, and any format/layout variations. The profile stores structure, page range, table signatures, stable keys, and reviewer guidance."})]}),s.jsxs("div",{className:"sample-upload-grid",children:[s.jsxs("label",{children:["Baseline sample",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>{var R;return me({...fe,baseline:((R=k.target.files)==null?void 0:R[0])||null})}})]}),s.jsxs("label",{children:["Revised sample",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>{var R;return me({...fe,revised:((R=k.target.files)==null?void 0:R[0])||null})}})]}),s.jsxs("label",{children:["Additional variations",s.jsx("input",{type:"file",multiple:!0,accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:k=>me({...fe,variations:Array.from(k.target.files||[])})})]})]}),s.jsx("button",{type:"submit",className:"primary-action",disabled:!fe.baseline&&!fe.revised&&fe.variations.length===0||F==="bootstrap",children:F==="bootstrap"?"Learning":"Learn from samples"})]}),s.jsxs("div",{className:"admin-profile-grid",children:[s.jsx(Bg,{profile:(Ji=a.template_profile)==null?void 0:Ji.sample_profile}),s.jsx(Ho,{title:"Sample Documents",items:C,labelKey:"label",valueKey:"page_count"}),s.jsx(Wg,{profile:(Yi=a.template_profile)==null?void 0:Yi.ai_reasoning_profile,onAddLabel:lp}),s.jsx(Ho,{title:"Stable Keys",items:(Xi=a.template_profile)==null?void 0:Xi.stable_key_patterns,labelKey:"name",valueKey:"regex"}),s.jsx(Ho,{title:"Column Rules",items:(Zi=a.template_profile)==null?void 0:Zi.column_rules,labelKey:"role",valueKey:"pattern"})]})]})}):null]})}function ca(e){var t;return!!(e!=null&&e.baseline||e!=null&&e.revised||(t=e==null?void 0:e.variations)!=null&&t.length||ho(e).length)}function ho(e){const t=Array.isArray(e==null?void 0:e.variations)?e.variations:[],r=Array.isArray(e==null?void 0:e.variationPairs)?e.variationPairs.flatMap(n=>[n.baseline,n.revised].filter(Boolean)):[];return[...t,...r]}function $g(e){return[e==null?void 0:e.baseline,e==null?void 0:e.revised,...ho(e)].filter(Boolean)}function qo(e){const t=$g(e),r=t.reduce((n,a)=>n+Number(a.size||0),0);return{count:t.length,totalBytes:r,totalMb:r/(1024*1024),estimatedInputTokens:Math.max(1,Math.ceil(r/4)),files:t.map(n=>({name:n.name,size:n.size||0}))}}function op(e){const t=Number(e||0);return t>=1024*1024?`${(t/(1024*1024)).toFixed(2)} MB`:t>=1024?`${(t/1024).toFixed(1)} KB`:`${t} B`}function yt(e){return new Intl.NumberFormat().format(Math.round(Number(e||0)))}function Cc(e){const t=Array.isArray(e==null?void 0:e.models)?e.models:[];return t.length?t.filter(r=>r.kind==="chat"):e!=null&&e.deployment?[{id:e.deployment,label:e.deployment,kind:"chat",configured:e.configured}]:[]}function Rg(e){var n,a,o;if(e!=null&&e.usage)return{prompt_tokens:Number(e.usage.prompt_tokens||0),completion_tokens:Number(e.usage.completion_tokens||0),total_tokens:Number(e.usage.total_tokens||0),estimated_prompt_tokens:Number(e.usage.estimated_prompt_tokens||0),prompt_chars:Number(e.usage.prompt_chars||0),calls:Number(e.usage.calls||0)};const t=[],r=(n=e==null?void 0:e.analysis)==null?void 0:n.usage;return r&&t.push(r),(o=(a=e==null?void 0:e.template_profile)==null?void 0:a.ai_reasoning_profile)!=null&&o.usage&&t.push(e.template_profile.ai_reasoning_profile.usage),t.reduce((i,l)=>({prompt_tokens:i.prompt_tokens+Number(l.prompt_tokens||0),completion_tokens:i.completion_tokens+Number(l.completion_tokens||0),total_tokens:i.total_tokens+Number(l.total_tokens||0),estimated_prompt_tokens:i.estimated_prompt_tokens+Number(l.estimated_prompt_tokens||0),prompt_chars:i.prompt_chars+Number(l.prompt_chars||0),calls:i.calls+Number(l.calls||(l.total_tokens?1:0))}),{prompt_tokens:0,completion_tokens:0,total_tokens:0,estimated_prompt_tokens:0,prompt_chars:0,calls:0})}function Lg({files:e,form:t,useAiAnalysis:r,selectedModel:n}){const a=new FormData;return e.baseline&&a.append("baseline",e.baseline),e.revised&&a.append("revised",e.revised),ho(e).forEach(o=>a.append("variations",o)),a.append("supplier",t.supplier||""),a.append("family_name",t.family_name||""),a.append("domain",t.domain||"generic"),a.append("use_case_type",t.use_case_type||"comparison"),a.append("expected_formats",(t.expected_formats||[]).join(",")),a.append("notes",t.onboarding_notes||t.sample_plan||""),a.append("use_llm",String(r)),a.append("model_name",r?n:""),a}async function Ig(e){const t=async a=>fetch(`${q}${a}`,{method:"POST",headers:{"X-User-Role":window.sessionStorage.getItem("simulated_role")||"platform_admin"},body:Lg(e)}),r=await t("/admin/analyze-use-case-samples");if(r.status!==404)return r;const n=await t("/admin/datasets/analyze-samples");if(n.status!==404)return n;throw new Error("Sample analyzer route is missing in the deployed backend revision. This is not a database schema issue. Rebuild and deploy the backend image that includes backend/routers/admin.py with POST /admin/analyze-use-case-samples.")}function Ag({run:e,elapsedSeconds:t,useAiAnalysis:r,selectedModel:n}){if(!e)return null;const a=e.submitted||{},o=e.backendUsage||{},i=e.status==="running"?"Running":e.status==="success"?"Completed":"Failed",l=e.status==="success"?3:e.status==="failed"?1:Math.min(3,Math.floor(t/12)),c=[["prepare","Preparing upload context"],["extract","Extracting sample structure"],["model",r?`Invoking ${n||"selected model"}`:"Deterministic profile scan"],["metadata","Generating metadata suggestions"]];return s.jsxs("div",{className:`analysis-run-panel ${e.status}`,children:[s.jsxs("div",{className:"analysis-run-head",children:[s.jsxs("div",{children:[s.jsx("strong",{children:i}),s.jsx("span",{children:e.status==="running"?`${t}s elapsed`:e.finishedAt?"Run finished":"Waiting"})]}),s.jsx("small",{children:e.mode==="ai"?`AI model: ${e.model||n||"not selected"}`:"AI disabled"})]}),s.jsxs("div",{className:"analysis-run-metrics",children:[s.jsxs("span",{children:[yt(a.count)," file(s)"]}),s.jsx("span",{children:op(a.totalBytes)}),s.jsxs("span",{children:["Upload-size estimate ",yt(a.estimatedInputTokens)," tokens"]}),e.mode==="ai"?s.jsxs(s.Fragment,{children:[s.jsxs("span",{children:["LLM prompt est. ",yt(o.estimated_prompt_tokens||0)," tokens"]}),s.jsxs("span",{children:["Prompt ",o.prompt_tokens?yt(o.prompt_tokens):"not reported"]}),s.jsxs("span",{children:["Output ",o.completion_tokens?yt(o.completion_tokens):"not reported"]}),s.jsxs("span",{children:["Total ",o.total_tokens?yt(o.total_tokens):"not reported"]}),s.jsxs("span",{children:["Calls ",yt(o.calls||0)]})]}):s.jsx("span",{children:"No AI tokens used"})]}),s.jsx("div",{className:"analysis-run-steps",children:c.map(([u,m],f)=>s.jsx("span",{className:`${e.status==="success"||f<l?"done":""} ${e.status==="running"&&f===l?"active":""}`,children:m},u))}),e.error?s.jsx("p",{className:"analysis-run-error",children:e.error}):null]})}function Mg({run:e,elapsedSeconds:t}){var i,l;if(!e)return null;const r=e.status==="running"?"Creating use case":e.status==="success"?"Use case created":"Create failed",n=Number(((i=e.submitted)==null?void 0:i.count)||0)>0,a=[["create","Saving use case metadata"],["samples",n?"Learning attached samples":"No samples attached"],["done","Opening saved use case"]],o=Math.max(0,a.findIndex(([c])=>c===e.stage));return s.jsxs("div",{className:`analysis-run-panel create-run ${e.status}`,children:[s.jsxs("div",{className:"analysis-run-head",children:[s.jsxs("div",{children:[s.jsx("strong",{children:r}),s.jsx("span",{children:e.status==="running"?`${t}s elapsed`:e.finishedAt?"Run finished":"Waiting"})]}),s.jsx("small",{children:e.datasetId?`ID ${String(e.datasetId).slice(0,8)}`:`${yt(((l=e.submitted)==null?void 0:l.count)||0)} sample file(s)`})]}),s.jsx("div",{className:"analysis-run-steps",children:a.map(([c,u],m)=>s.jsx("span",{className:`${!n&&c==="samples"?"skipped":""} ${m<o||e.status==="success"?"done":""} ${m===o&&e.status==="running"?"active":""}`,children:u},c))}),e.sampleWarning?s.jsx("p",{className:"analysis-run-warning",children:e.sampleWarning}):null,e.error?s.jsx("p",{className:"analysis-run-error",children:e.error}):null]})}function Og({value:e,onChange:t}){const r=Array.isArray(e)?e:[],n=(o,i)=>{t(r.map(l=>l.id===o?{...l,...i}:l))},a=o=>{t(r.filter(i=>i.id!==o))};return s.jsxs("div",{className:"variation-pairs",children:[s.jsxs("div",{className:"variation-pairs-head",children:[s.jsxs("div",{children:[s.jsx("h5",{children:"Variation pairs"}),s.jsx("p",{children:"Add only when another baseline/revised pair represents a different layout or document family variation."})]}),s.jsx("button",{type:"button",className:"icon-action",onClick:()=>t([...r,Tg()]),disabled:r.length>=5,title:"Add variation pair",children:"+"})]}),r.length?s.jsx("div",{className:"variation-pair-list",children:r.map((o,i)=>s.jsxs("div",{className:"variation-pair-row",children:[s.jsxs("strong",{children:["Variation ",i+1]}),s.jsxs("label",{children:["Baseline",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:l=>{var c;return n(o.id,{baseline:((c=l.target.files)==null?void 0:c[0])||null})}})]}),s.jsxs("label",{children:["Revised",s.jsx("input",{type:"file",accept:".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff",onChange:l=>{var c;return n(o.id,{revised:((c=l.target.files)==null?void 0:c[0])||null})}})]}),s.jsx("button",{type:"button",className:"ghost-action compact",onClick:()=>a(o.id),children:"Remove"})]},o.id))}):s.jsx("span",{className:"variation-empty",children:"No variation pairs added."})]})}function Fg({data:e}){const t=(e==null?void 0:e.suggested_dataset)||{},r=(e==null?void 0:e.analysis)||{},n=r.confidence_score!==void 0?Math.round(Number(r.confidence_score||0)*100):null,a=Array.isArray(r.complexity_reasons)?r.complexity_reasons:[],o=Array.isArray(r.enhancement_tips)?r.enhancement_tips:[];return s.jsxs("section",{className:"analysis-card",children:[s.jsxs("div",{className:"analysis-card-head",children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Sample Analysis"}),s.jsx("p",{children:e!=null&&e.used_ai?"GPT-4o assisted the metadata suggestions.":"Deterministic scan generated metadata suggestions."})]}),s.jsxs("span",{children:[String(r.complexity_rating||"standard")," complexity"]})]}),s.jsxs("div",{className:"analysis-grid",children:[s.jsxs("p",{children:[s.jsx("strong",{children:t.supplier||"Supplier pending"}),s.jsx("small",{children:t.family_name||"Use case pending"})]}),s.jsxs("p",{children:[s.jsx("strong",{children:t.use_case_type||"comparison"}),s.jsx("small",{children:(t.expected_formats||[]).join(", ")||"formats pending"})]}),s.jsxs("p",{children:[s.jsx("strong",{children:t.domain||"generic"}),s.jsx("small",{children:n!==null?`${n}% estimated parser confidence`:"confidence pending"})]})]}),a.length||o.length?s.jsxs("div",{className:"analysis-notes",children:[a.slice(0,3).map((i,l)=>s.jsx("span",{children:i},`reason-${l}`)),o.slice(0,3).map((i,l)=>s.jsx("span",{children:i},`tip-${l}`))]}):null]})}function Ug({value:e,onChange:t}){const r=n=>{t(e.includes(n)?e.filter(a=>a!==n):[...e,n])};return s.jsxs("fieldset",{className:"role-picker",children:[s.jsx("legend",{children:"Allowed roles"}),Cg.map(([n,a])=>s.jsxs("label",{children:[s.jsx("input",{type:"checkbox",checked:e.includes(n),onChange:()=>r(n)}),a]},n))]})}function zc({value:e,onChange:t}){const r=Array.isArray(e)?e:[],n=a=>{t(r.includes(a)?r.filter(o=>o!==a):[...r,a])};return s.jsxs("fieldset",{className:"format-picker",children:[s.jsx("legend",{children:"Expected formats"}),zg.map(([a,o])=>s.jsxs("label",{children:[s.jsx("input",{type:"checkbox",checked:r.includes(a),onChange:()=>n(a)}),o]},a))]})}function Bg({profile:e}){const t=e&&typeof e=="object"?e:{};return s.jsxs("div",{className:"profile-card",children:[s.jsx("h4",{children:"Model Samples"}),s.jsxs("p",{children:[s.jsxs("strong",{children:[String(t.sample_count||0)," samples"]}),s.jsx("small",{children:(t.roles_present||[]).join(", ")||"No roles learned yet"})]}),s.jsxs("p",{children:[s.jsxs("strong",{children:[String(t.average_pages||0)," avg pages"]}),s.jsxs("small",{children:[String(t.min_pages||0)," min · ",String(t.max_pages||0)," max"]})]}),t.last_bootstrap_notes?s.jsxs("p",{children:[s.jsx("strong",{children:"Latest notes"}),s.jsx("small",{children:String(t.last_bootstrap_notes)})]}):null]})}function Ho({title:e,items:t,labelKey:r,valueKey:n}){const a=Array.isArray(t)?t:[];return s.jsxs("div",{className:"profile-card",children:[s.jsx("h4",{children:e}),a.length===0?s.jsx("span",{children:"No entries yet."}):a.slice(0,8).map((o,i)=>s.jsxs("p",{children:[s.jsx("strong",{children:String((o==null?void 0:o[r])??"Item")}),s.jsx("small",{children:String((o==null?void 0:o[n])??"")})]},i))]})}function Wg({profile:e,onAddLabel:t}){const r=e&&typeof e=="object"?e:{},n=String(r.complexity_rating||"low").toUpperCase(),a=r.confidence_score!==void 0?Math.round(r.confidence_score*100):null,o=Array.isArray(r.complexity_reasons)?r.complexity_reasons:[],i=Array.isArray(r.enhancement_tips)?r.enhancement_tips:[],l=Array.isArray(r.suggested_data_labels)?r.suggested_data_labels:[],c=n==="HIGH"?"#9f2525":n==="MEDIUM"?"#c45510":"#1f7e41",u=n==="HIGH"?"#fff7f7":n==="MEDIUM"?"#fffbf7":"#f7fff9",m=n==="HIGH"?"#f1c6c6":n==="MEDIUM"?"#f7d6c1":"#c1f1d1";return s.jsxs("div",{className:"profile-card",style:{gridColumn:"span 2"},children:[s.jsxs("h4",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("span",{children:"AI Onboarding Analysis"}),s.jsxs("span",{style:{fontSize:11,fontWeight:700,color:c,background:u,border:`1px solid ${m}`,padding:"2px 8px",borderRadius:99},children:[n," COMPLEXITY"]})]}),a!==null&&s.jsxs("p",{style:{marginTop:8},children:[s.jsxs("strong",{children:["Parser Confidence Rating: ",a,"%"]}),s.jsx("small",{children:"Estimated baseline accuracy without AI assistance"})]}),o.length>0&&s.jsxs("p",{style:{marginTop:10},children:[s.jsx("strong",{children:"Structural Complexity Indicators"}),s.jsx("small",{style:{display:"block",marginTop:4},children:o.map((f,g)=>s.jsxs("span",{style:{display:"block",color:"var(--text-primary)"},children:["• ",f]},g))})]}),i.length>0&&s.jsxs("p",{style:{marginTop:10},children:[s.jsx("strong",{children:"Extraction Optimization Recommendations"}),s.jsx("small",{style:{display:"block",marginTop:4},children:i.map((f,g)=>s.jsxs("span",{style:{display:"block",color:"var(--text-primary)"},children:["• ",f]},g))})]}),l.length>0&&s.jsxs("p",{style:{marginTop:12},children:[s.jsx("strong",{children:"Suggested Data Labels (Click to map)"}),s.jsx("span",{style:{display:"flex",flexWrap:"wrap",gap:6,marginTop:6},children:l.map(f=>s.jsxs("button",{type:"button",onClick:()=>t(f),style:{background:"var(--surface-sunken)",border:"1px solid var(--border)",color:"var(--text-primary)",borderRadius:"4px",padding:"2px 8px",fontSize:12,fontWeight:650,cursor:"pointer"},title:"Click to automatically create a mapping rule for this label",children:["Add ",f]},f))})]})]})}async function yr(e,t={}){const r=await fetch(`${q}${e}`,t);if(r.status===404&&e.startsWith("/admin/")){const n=await fetch(`${q}/api${e}`,t);if(!n.ok)throw new Error(await ae(n));return n.json()}if(!r.ok)throw new Error(await ae(r));return r.json()}async function Vg(e,t={}){const r=await fetch(`${q}${e}`,t);if(r.status!==404){if(!r.ok)throw new Error(await ae(r));return r.json()}const n=await fetch(`${q}/api${e}`,t);if(!n.ok)throw new Error(await ae(n));return n.json()}function Pc(e){const t=e.trim();if(!t)return[];const r=JSON.parse(t);if(!Array.isArray(r))throw new Error("Column rules must be a JSON array.");return r}function qg(e){w.useEffect(()=>{document.title=`${e} · Altrai`},[e])}const ua=e=>Number(e||0).toLocaleString();function Hg(e,t,r){const n=String(e||"").toLowerCase(),a=n.includes("gpt-4")&&!n.includes("mini"),o=a?2.5:.15,i=a?10:.6;return(Number(t||0)*o+Number(r||0)*i)/1e6}function Qg({runId:e}){const[t,r]=w.useState(""),[n,a]=w.useState("fast"),[o,i]=w.useState("gpt-4o"),[l,c]=w.useState([]),[u,m]=w.useState({}),[f,g]=w.useState(!1),y=w.useMemo(()=>l.reduce((x,j)=>{const p=j.usage;return p&&(x.prompt+=Number(p.prompt_tokens||0),x.completion+=Number(p.completion_tokens||0),x.total+=Number(p.total_tokens||0),x.calls+=1,x.cost+=Hg(j.model,p.prompt_tokens,p.completion_tokens)),x},{prompt:0,completion:0,total:0,calls:0,cost:0}),[l]),v=async()=>{const x=t.trim();if(!x||f||!e)return;const j=`user-${Date.now()}`,p=`answer-${Date.now()}`;c(d=>[...d,{id:j,role:"user",text:x,timestamp:new Date().toLocaleTimeString()}]),r(""),g(!0);try{const d=await fetch(`${q}/runs/${e}/query`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:x,mode:n,response_language:"source",model_name:n==="ai"?o:null})});if(!d.ok)throw new Error(await ae(d));const h=await d.json();c(b=>{var S;return[...b,{id:p,role:"assistant",text:h.answer||`I found ${((S=h.rows)==null?void 0:S.length)||0} matching changes.`,rows:h.rows||[],columns:h.columns||Ch(h.rows||[]),mode:h.mode||n,model:n==="ai"?o:null,usage:h.usage,confidence:h.confidence,warning:h.ai_error||(h.ai_unavailable?"AI response was unavailable; showing grounded evidence results.":""),timestamp:new Date().toLocaleTimeString()}]})}catch(d){c(h=>[...h,{id:p,role:"assistant",text:oe(d),rows:[],timestamp:new Date().toLocaleTimeString(),isError:!0}])}finally{g(!1)}};return s.jsxs("section",{className:"query-workbench",children:[l.length===0?s.jsx(hr,{label:"Ask what changed, why it matters, or where the evidence appears in the compared documents."}):s.jsx("div",{className:"query-chat-log",children:l.map(x=>{var j,p;return s.jsxs("article",{className:`query-message ${x.role}${x.isError?" error":""}`,children:[s.jsxs("div",{className:"query-message-meta",children:[s.jsx("span",{children:x.role==="user"?"You":x.mode==="ai"?`AI answer${x.model?` - ${x.model}`:""}`:"Natural language query"}),s.jsx("span",{children:x.timestamp})]}),s.jsx("div",{className:"query-message-text",dir:"auto",children:x.text}),x.warning&&s.jsx("div",{className:"query-warning",children:x.warning}),x.usage&&s.jsxs("div",{className:"query-usage",children:[s.jsxs("span",{children:[ua(x.usage.total_tokens)," tokens"]}),s.jsxs("span",{children:[ua(x.usage.prompt_tokens)," input / ",ua(x.usage.completion_tokens)," output"]})]}),((j=x.rows)==null?void 0:j.length)>0&&s.jsxs("div",{className:"query-evidence",children:[s.jsx("button",{type:"button",className:"key-audit-toggle",onClick:()=>m(d=>({...d,[x.id]:!d[x.id]})),children:u[x.id]?"Hide evidence":`Show evidence (${x.rows.length})`}),u[x.id]&&s.jsx("div",{className:"query-results-shell",children:(p=x.columns)!=null&&p.length?s.jsx(or,{columns:x.columns,rows:x.rows}):x.rows.slice(0,50).map((d,h)=>s.jsx(Kg,{row:d},h))})]})]},x.id)})}),y.total>0&&s.jsxs("div",{className:"query-usage-strip",children:[s.jsxs("span",{children:[ua(y.total)," tokens across ",y.calls," AI call",y.calls===1?"":"s"]}),s.jsxs("strong",{children:["$",y.cost.toFixed(5)]})]}),s.jsxs("div",{className:"query-composer",children:[s.jsx("textarea",{value:t,onChange:x=>r(x.target.value),onKeyDown:x=>{x.key==="Enter"&&!x.shiftKey&&(x.preventDefault(),v())},placeholder:"Ask about changed clauses, tables, dates, values, deleted text, or page evidence...",disabled:f,rows:3}),s.jsxs("div",{className:"query-composer-actions",children:[s.jsxs("label",{children:[s.jsx("span",{children:"Mode"}),s.jsxs("select",{value:n,onChange:x=>a(x.target.value),disabled:f,children:[s.jsx("option",{value:"fast",children:"NL query"}),s.jsx("option",{value:"ai",children:"AI chat"})]})]}),n==="ai"&&s.jsxs("label",{children:[s.jsx("span",{children:"Model"}),s.jsxs("select",{value:o,onChange:x=>i(x.target.value),disabled:f,children:[s.jsx("option",{value:"gpt-4o",children:"gpt-4o"}),s.jsx("option",{value:"gpt-4o-mini",children:"gpt-4o-mini"}),s.jsx("option",{value:"phi-4-mini",children:"phi-4-mini"})]})]}),s.jsx("button",{type:"button",className:"primary-action compact",onClick:v,disabled:f||!t.trim(),children:f?"Working":n==="ai"?"Ask AI":"Ask"})]})]})]})}function Kg({row:e}){var t;return s.jsxs("div",{className:"query-result",children:[s.jsxs("div",{className:"query-result-head",children:[s.jsx(Xd,{type:Fr(e)}),e.stable_key&&s.jsx("code",{children:e.stable_key}),s.jsx("span",{children:e.citation||`page ${e.page||"-"}`})]}),e.before&&s.jsxs("div",{dir:"auto",children:[s.jsx("strong",{children:"Before:"})," ",Ge(e.before,260)]}),e.after&&s.jsxs("div",{dir:"auto",children:[s.jsx("strong",{children:"After:"})," ",Ge(e.after,260)]}),((t=e.field_changes)==null?void 0:t.length)>0&&s.jsx(eg,{rows:e.field_changes})]})}const ut=(e,t)=>{if(typeof window>"u")return t;try{const r=window.sessionStorage.getItem(`doculens_${e}`);return r!==null?JSON.parse(r):t}catch{return t}},et=(e,t)=>{if(!(typeof window>"u"))try{window.sessionStorage.setItem(`doculens_${e}`,JSON.stringify(t))}catch(r){console.error(r)}},qs={compare:"/compare",extract:"/extract",jobs:"/work-history",agents:"/ai-agents",admin:"/admin"},Gg={"/":"compare",...Object.fromEntries(Object.entries(qs).map(([e,t])=>[t,e]))},Tc=e=>Gg[e]||"compare";function Jg(){const e=Kd(),t=ch(),[r,n]=w.useState(()=>Tc(window.location.pathname)),[a,o]=w.useState(()=>ut("runId",null)),[i,l]=w.useState(()=>ut("meta",null)),[c,u]=w.useState(()=>ut("tab","viewer")),[m,f]=w.useState(()=>ut("pageNum",1)),[g,y]=w.useState(()=>ut("busy",!1)),[v,x]=w.useState(""),[j,p]=w.useState(()=>ut("extractRunId",null)),[d,h]=w.useState(()=>ut("extractMeta",null)),[b,S]=w.useState(()=>ut("extractBusy",!1)),[E,N]=w.useState(""),[z,D]=w.useState(()=>ut("extractTab","overview")),[L,B]=w.useState(""),[_e,Te]=w.useState(()=>ut("historyKind","all")),xt={compare:"Compare",extract:"Extract",jobs:"Work History",agents:"AI Agents",admin:"Admin Studio"}[r]||"Workspace";qg(xt),w.useEffect(()=>{et("workspace",r)},[r]),w.useEffect(()=>{et("runId",a)},[a]),w.useEffect(()=>{et("meta",i)},[i]),w.useEffect(()=>{et("tab",c)},[c]),w.useEffect(()=>{et("pageNum",m)},[m]),w.useEffect(()=>{et("busy",g)},[g]),w.useEffect(()=>{et("extractRunId",j)},[j]),w.useEffect(()=>{et("extractMeta",d)},[d]),w.useEffect(()=>{et("extractBusy",b)},[b]),w.useEffect(()=>{et("extractTab",z)},[z]),w.useEffect(()=>{et("historyKind",_e)},[_e]),w.useEffect(()=>{const T=Tc(e.pathname);T!==r&&n(T)},[e.pathname]),w.useEffect(()=>{r==="compare"&&c!=="viewer"&&u("viewer")},[r]);const lt=()=>{o(null),l(null),y(!1),x(""),f(1),u("viewer"),me("compare")},fe=()=>{p(null),h(null),S(!1),N(""),D("overview"),me("extract")},me=(T,A={})=>{n(T),T==="jobs"&&Te(A.historyKind||"all"),x(""),N(""),B(""),t(qs[T]||qs.compare,{replace:!1})};w.useEffect(()=>{if(!a||!g)return;let T=!1,A=null;const M=async()=>{try{const Q=await fetch(`${q}/runs/${a}`);if(!Q.ok)throw new Error(await ae(Q));const W=await Q.json();if(T)return;if(l(W),W.status==="complete"){y(!1),u("viewer");return}if(W.status==="failed"){y(!1),x(at(W.error||W.status_message||"Comparison failed."));return}A=setTimeout(M,1e3)}catch(Q){if(T)return;y(!1),x(oe(Q))}};return M(),()=>{T=!0,A&&clearTimeout(A)}},[a,g]),w.useEffect(()=>{if(!j||!b)return;let T=!1,A=null;const M=async()=>{try{const Q=await fetch(`${q}/extract-runs/${j}`);if(!Q.ok)throw new Error(await ae(Q));const W=await Q.json();if(T)return;if(h(W),W.status==="complete"){S(!1),D("overview");return}if(W.status==="failed"){S(!1),N(at(W.error||W.status_message||"Extraction failed."));return}A=setTimeout(M,1e3)}catch(Q){if(T)return;S(!1),N(oe(Q))}};return M(),()=>{T=!0,A&&clearTimeout(A)}},[j,b]);const C=async T=>{T.preventDefault();const A=new FormData(T.currentTarget),M=A.get("base"),Q=A.get("target"),W=String(A.get("family_id")||"").trim();if(!M||!Q||!M.name||!Q.name){x("Please select both documents before starting.");return}if(!W){x("Please select a document use case before starting comparison.");return}n("compare"),y(!0),x(""),o(null),f(1),u("viewer"),l({status:"uploading",status_message:"Uploading documents",progress:3,stats:{},coverage:{},n_pages_base:0,n_pages_target:0});try{const ve=await fetch(`${q}/compare`,{method:"POST",body:A});if(!ve.ok)throw new Error(await ae(ve));const qe=await ve.json();o(qe.run_id),y(qe.status!=="complete"&&qe.status!=="failed"),l({run_id:qe.run_id,status:qe.status,status_message:qe.status_message||"Starting comparison",progress:qe.progress||5,stats:{},coverage:{},n_pages_base:0,n_pages_target:0}),n("compare")}catch(ve){y(!1),x(oe(ve))}},$=async T=>{T.preventDefault();const A=new FormData(T.currentTarget),M=A.getAll("document").filter(W=>W&&W.name),Q=String(A.get("family_id")||"").trim();if(!M.length){N("Please select at least one document, spreadsheet, PDF, or image before starting extraction.");return}if(!Q){N("Please select a document use case before starting extraction.");return}n("extract"),S(!0),N(""),p(null),D("overview"),h({status:"uploading",status_message:"Uploading document",progress:3,summary:{}});try{const W=await fetch(`${q}/extract`,{method:"POST",body:A});if(!W.ok)throw new Error(await ae(W));const ve=await W.json();p(ve.run_id),S(ve.status!=="complete"&&ve.status!=="failed"),h({run_id:ve.run_id,status:ve.status,status_message:ve.status_message||"Starting extraction",progress:ve.progress||5,summary:{}}),n("extract")}catch(W){S(!1),N(oe(W))}},I=async T=>{B("");try{if(T.kind==="extraction"){const Q=await fetch(`${q}/extract-runs/${T.run_id}`);if(!Q.ok)throw new Error(await ae(Q));const W=await Q.json();o(null),l(null),y(!1),p(T.run_id),h(W),S(W.status!=="complete"&&W.status!=="failed"),D("overview"),n("extract");return}const A=await fetch(`${q}/runs/${T.run_id}`);if(!A.ok)throw new Error(await ae(A));const M=await A.json();p(null),h(null),S(!1),o(T.run_id),l(M),y(M.status!=="complete"&&M.status!=="failed"),u("viewer"),f(1),n("compare")}catch(A){B(oe(A))}},K=async T=>{B("");try{if(T.kind==="extraction"){const A=await fetch(`${q}/extract-runs/${T.run_id}`);if(!A.ok)throw new Error(await ae(A));const M=await A.json();o(null),l(null),y(!1),p(T.run_id),h(M),S(M.status!=="complete"&&M.status!=="failed"),n("extract");return}await I(T)}catch(A){B(oe(A))}},F=()=>{a&&(window.location.href=`${q}/runs/${a}/report.pdf`)},le=(i==null?void 0:i.status)==="complete",Me=(d==null?void 0:d.status)==="complete";return s.jsxs("div",{children:[s.jsx("style",{children:bh}),s.jsxs(Ng,{workspace:r,runId:r==="compare"&&le?a:null,onNavigate:me,onDownloadReport:F,children:[r==="jobs"&&s.jsx(Oh,{onOpenJob:I,onAskJob:K,error:L,historyKind:_e,onStartCompare:lt,onStartExtract:fe}),r==="compare"&&!le&&s.jsxs("section",{className:"workflow-panel",children:[s.jsx(Uh,{onUpload:C,busy:g,onAdmin:()=>me("admin")}),g&&i&&s.jsx(Sc,{progress:i.progress||0,message:i.status_message||"Processing documents",status:i.status||"running"}),v&&s.jsx(An,{message:v})]}),r==="extract"&&!Me&&s.jsxs("section",{className:"workflow-panel",children:[s.jsx(Bh,{onUpload:$,busy:b,onAdmin:()=>me("admin")}),b&&d&&s.jsx(Sc,{progress:d.progress||0,message:d.status_message||"Extracting document",status:d.status||"running"}),E&&s.jsx(An,{message:E})]}),r==="compare"&&le&&a&&i&&s.jsxs("section",{className:"comparison-workspace",children:[s.jsxs("div",{className:"comparison-head",children:[s.jsx("div",{children:s.jsxs("h2",{dir:"auto",children:[i.base_label||"Baseline"," → ",i.target_label||"Revised"]})}),s.jsxs("div",{className:"comparison-head-actions",children:[s.jsx("button",{type:"button",className:"ghost-action compact",onClick:lt,children:"New comparison"}),s.jsxs("div",{className:"comparison-id",children:["#",String(a).slice(0,6)]})]})]}),s.jsx(Lh,{meta:i}),s.jsxs("main",{className:"comparison-flow",children:[s.jsxs("section",{className:"workspace-surface",children:[s.jsx("div",{className:"surface-title-row",children:s.jsxs("div",{children:[s.jsx("h3",{children:"Quick Summary"}),s.jsx("p",{children:"Highest-priority differences detected from the comparison evidence."})]})}),s.jsx(Wh,{runId:a,meta:i,onVerifyPage:f})]}),s.jsxs("section",{className:"workspace-surface",children:[s.jsx("div",{className:"surface-title-row",children:s.jsxs("div",{children:[s.jsx("h3",{children:"Visual Comparison"}),s.jsx("p",{children:"Side-by-side verification with synchronized scroll, zoom, and document overlays."})]})}),s.jsx(Vh,{runId:a,meta:i,pageNum:m,setPageNum:f})]}),s.jsxs("section",{className:"workspace-surface",children:[s.jsx("div",{className:"surface-title-row",children:s.jsxs("div",{children:[s.jsx("h3",{children:"Ask This Comparison"}),s.jsx("p",{children:"Start with natural language search. Switch to an AI model only when reasoning or richer synthesis is needed."})]})}),s.jsx(Qg,{runId:a})]})]})]}),r==="extract"&&Me&&j&&d&&s.jsx(tg,{runId:j,meta:d,tab:z,setTab:D}),r==="agents"&&s.jsxs("section",{className:"workspace-placeholder",children:[s.jsx("h2",{children:"AI Agents"}),s.jsx("p",{children:"Future skills and multi-agent workflows will live here after the document intelligence workspace is stable."}),s.jsx("div",{className:"placeholder-list",children:s.jsx("span",{children:"Coming soon"})})]}),r==="admin"&&s.jsx(Dg,{})]})]})}Qo.createRoot(document.getElementById("root")).render(s.jsx(Ja.StrictMode,{children:s.jsx(kg,{children:s.jsx(yh,{children:s.jsx(Jg,{})})})}));
