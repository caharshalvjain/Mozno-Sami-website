function Ty(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var xs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ra(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ip={exports:{}},Js={},Pp={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xi=Symbol.for("react.element"),vy=Symbol.for("react.portal"),_y=Symbol.for("react.fragment"),Sy=Symbol.for("react.strict_mode"),ky=Symbol.for("react.profiler"),Cy=Symbol.for("react.provider"),Ny=Symbol.for("react.context"),wy=Symbol.for("react.forward_ref"),Ay=Symbol.for("react.suspense"),Iy=Symbol.for("react.memo"),Py=Symbol.for("react.lazy"),Fd=Symbol.iterator;function Ly(e){return e===null||typeof e!="object"?null:(e=Fd&&e[Fd]||e["@@iterator"],typeof e=="function"?e:null)}var Lp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rp=Object.assign,Dp={};function aa(e,t,n){this.props=e,this.context=t,this.refs=Dp,this.updater=n||Lp}aa.prototype.isReactComponent={};aa.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};aa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Op(){}Op.prototype=aa.prototype;function ic(e,t,n){this.props=e,this.context=t,this.refs=Dp,this.updater=n||Lp}var sc=ic.prototype=new Op;sc.constructor=ic;Rp(sc,aa.prototype);sc.isPureReactComponent=!0;var Bd=Array.isArray,Mp=Object.prototype.hasOwnProperty,oc={current:null},jp={key:!0,ref:!0,__self:!0,__source:!0};function Fp(e,t,n){var r,a={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Mp.call(t,r)&&!jp.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(l===1)a.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];a.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)a[r]===void 0&&(a[r]=l[r]);return{$$typeof:xi,type:e,key:i,ref:o,props:a,_owner:oc.current}}function Ry(e,t){return{$$typeof:xi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function lc(e){return typeof e=="object"&&e!==null&&e.$$typeof===xi}function Dy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Hd=/\/+/g;function Uo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Dy(""+e.key):t.toString(36)}function ns(e,t,n,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case xi:case vy:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+Uo(o,0):r,Bd(a)?(n="",e!=null&&(n=e.replace(Hd,"$&/")+"/"),ns(a,t,n,"",function(d){return d})):a!=null&&(lc(a)&&(a=Ry(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(Hd,"$&/")+"/")+e)),t.push(a)),1;if(o=0,r=r===""?".":r+":",Bd(e))for(var l=0;l<e.length;l++){i=e[l];var u=r+Uo(i,l);o+=ns(i,t,n,u,a)}else if(u=Ly(e),typeof u=="function")for(e=u.call(e),l=0;!(i=e.next()).done;)i=i.value,u=r+Uo(i,l++),o+=ns(i,t,n,u,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Li(e,t,n){if(e==null)return e;var r=[],a=0;return ns(e,r,"","",function(i){return t.call(n,i,a++)}),r}function Oy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var st={current:null},rs={transition:null},My={ReactCurrentDispatcher:st,ReactCurrentBatchConfig:rs,ReactCurrentOwner:oc};function Bp(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:Li,forEach:function(e,t,n){Li(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Li(e,function(){t++}),t},toArray:function(e){return Li(e,function(t){return t})||[]},only:function(e){if(!lc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=aa;re.Fragment=_y;re.Profiler=ky;re.PureComponent=ic;re.StrictMode=Sy;re.Suspense=Ay;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=My;re.act=Bp;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Rp({},e.props),a=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=oc.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)Mp.call(t,u)&&!jp.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:xi,type:e.type,key:a,ref:i,props:r,_owner:o}};re.createContext=function(e){return e={$$typeof:Ny,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Cy,_context:e},e.Consumer=e};re.createElement=Fp;re.createFactory=function(e){var t=Fp.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:wy,render:e}};re.isValidElement=lc;re.lazy=function(e){return{$$typeof:Py,_payload:{_status:-1,_result:e},_init:Oy}};re.memo=function(e,t){return{$$typeof:Iy,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=rs.transition;rs.transition={};try{e()}finally{rs.transition=t}};re.unstable_act=Bp;re.useCallback=function(e,t){return st.current.useCallback(e,t)};re.useContext=function(e){return st.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return st.current.useDeferredValue(e)};re.useEffect=function(e,t){return st.current.useEffect(e,t)};re.useId=function(){return st.current.useId()};re.useImperativeHandle=function(e,t,n){return st.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return st.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return st.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return st.current.useMemo(e,t)};re.useReducer=function(e,t,n){return st.current.useReducer(e,t,n)};re.useRef=function(e){return st.current.useRef(e)};re.useState=function(e){return st.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return st.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return st.current.useTransition()};re.version="18.3.1";Pp.exports=re;var q=Pp.exports;const jy=ra(q),Fy=Ty({__proto__:null,default:jy},[q]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var By=q,Hy=Symbol.for("react.element"),Uy=Symbol.for("react.fragment"),zy=Object.prototype.hasOwnProperty,qy=By.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yy={key:!0,ref:!0,__self:!0,__source:!0};function Hp(e,t,n){var r,a={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)zy.call(t,r)&&!Yy.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Hy,type:e,key:i,ref:o,props:a,_owner:qy.current}}Js.Fragment=Uy;Js.jsx=Hp;Js.jsxs=Hp;Ip.exports=Js;var s=Ip.exports,Up={exports:{}},Ct={},zp={exports:{}},qp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(Y,Q){var v=Y.length;Y.push(Q);e:for(;0<v;){var le=v-1>>>1,he=Y[le];if(0<a(he,Q))Y[le]=Q,Y[v]=he,v=le;else break e}}function n(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var Q=Y[0],v=Y.pop();if(v!==Q){Y[0]=v;e:for(var le=0,he=Y.length,k=he>>>1;le<k;){var Be=2*(le+1)-1,Ft=Y[Be],be=Be+1,Kt=Y[be];if(0>a(Ft,v))be<he&&0>a(Kt,Ft)?(Y[le]=Kt,Y[be]=v,le=be):(Y[le]=Ft,Y[Be]=v,le=Be);else if(be<he&&0>a(Kt,v))Y[le]=Kt,Y[be]=v,le=be;else break e}}return Q}function a(Y,Q){var v=Y.sortIndex-Q.sortIndex;return v!==0?v:Y.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var u=[],d=[],f=1,h=null,p=3,m=!1,x=!1,S=!1,A=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(Y){for(var Q=n(d);Q!==null;){if(Q.callback===null)r(d);else if(Q.startTime<=Y)r(d),Q.sortIndex=Q.expirationTime,t(u,Q);else break;Q=n(d)}}function N(Y){if(S=!1,E(Y),!x)if(n(u)!==null)x=!0,Oe(P);else{var Q=n(d);Q!==null&&Le(N,Q.startTime-Y)}}function P(Y,Q){x=!1,S&&(S=!1,g(H),H=-1),m=!0;var v=p;try{for(E(Q),h=n(u);h!==null&&(!(h.expirationTime>Q)||Y&&!U());){var le=h.callback;if(typeof le=="function"){h.callback=null,p=h.priorityLevel;var he=le(h.expirationTime<=Q);Q=e.unstable_now(),typeof he=="function"?h.callback=he:h===n(u)&&r(u),E(Q)}else r(u);h=n(u)}if(h!==null)var k=!0;else{var Be=n(d);Be!==null&&Le(N,Be.startTime-Q),k=!1}return k}finally{h=null,p=v,m=!1}}var C=!1,D=null,H=-1,V=5,w=-1;function U(){return!(e.unstable_now()-w<V)}function G(){if(D!==null){var Y=e.unstable_now();w=Y;var Q=!0;try{Q=D(!0,Y)}finally{Q?te():(C=!1,D=null)}}else C=!1}var te;if(typeof y=="function")te=function(){y(G)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,ie=me.port2;me.port1.onmessage=G,te=function(){ie.postMessage(null)}}else te=function(){A(G,0)};function Oe(Y){D=Y,C||(C=!0,te())}function Le(Y,Q){H=A(function(){Y(e.unstable_now())},Q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(Y){Y.callback=null},e.unstable_continueExecution=function(){x||m||(x=!0,Oe(P))},e.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<Y?Math.floor(1e3/Y):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(Y){switch(p){case 1:case 2:case 3:var Q=3;break;default:Q=p}var v=p;p=Q;try{return Y()}finally{p=v}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(Y,Q){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var v=p;p=Y;try{return Q()}finally{p=v}},e.unstable_scheduleCallback=function(Y,Q,v){var le=e.unstable_now();switch(typeof v=="object"&&v!==null?(v=v.delay,v=typeof v=="number"&&0<v?le+v:le):v=le,Y){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=v+he,Y={id:f++,callback:Q,priorityLevel:Y,startTime:v,expirationTime:he,sortIndex:-1},v>le?(Y.sortIndex=v,t(d,Y),n(u)===null&&Y===n(d)&&(S?(g(H),H=-1):S=!0,Le(N,v-le))):(Y.sortIndex=he,t(u,Y),x||m||(x=!0,Oe(P))),Y},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(Y){var Q=p;return function(){var v=p;p=Q;try{return Y.apply(this,arguments)}finally{p=v}}}})(qp);zp.exports=qp;var Wy=zp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gy=q,kt=Wy;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yp=new Set,Ka={};function fr(e,t){Gr(e,t),Gr(e+"Capture",t)}function Gr(e,t){for(Ka[e]=t,e=0;e<t.length;e++)Yp.add(t[e])}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ml=Object.prototype.hasOwnProperty,Vy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ud={},zd={};function $y(e){return Ml.call(zd,e)?!0:Ml.call(Ud,e)?!1:Vy.test(e)?zd[e]=!0:(Ud[e]=!0,!1)}function Qy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ky(e,t,n,r){if(t===null||typeof t>"u"||Qy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ot(e,t,n,r,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Qe[e]=new ot(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Qe[t]=new ot(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Qe[e]=new ot(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Qe[e]=new ot(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Qe[e]=new ot(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Qe[e]=new ot(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Qe[e]=new ot(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Qe[e]=new ot(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Qe[e]=new ot(e,5,!1,e.toLowerCase(),null,!1,!1)});var uc=/[\-:]([a-z])/g;function cc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(uc,cc);Qe[t]=new ot(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(uc,cc);Qe[t]=new ot(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(uc,cc);Qe[t]=new ot(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Qe[e]=new ot(e,1,!1,e.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Qe[e]=new ot(e,1,!1,e.toLowerCase(),null,!0,!0)});function dc(e,t,n,r){var a=Qe.hasOwnProperty(t)?Qe[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ky(t,n,a,r)&&(n=null),r||a===null?$y(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var bn=Gy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ri=Symbol.for("react.element"),Sr=Symbol.for("react.portal"),kr=Symbol.for("react.fragment"),hc=Symbol.for("react.strict_mode"),jl=Symbol.for("react.profiler"),Wp=Symbol.for("react.provider"),Gp=Symbol.for("react.context"),fc=Symbol.for("react.forward_ref"),Fl=Symbol.for("react.suspense"),Bl=Symbol.for("react.suspense_list"),pc=Symbol.for("react.memo"),Cn=Symbol.for("react.lazy"),Vp=Symbol.for("react.offscreen"),qd=Symbol.iterator;function ga(e){return e===null||typeof e!="object"?null:(e=qd&&e[qd]||e["@@iterator"],typeof e=="function"?e:null)}var Ce=Object.assign,zo;function wa(e){if(zo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zo=t&&t[1]||""}return`
`+zo+e}var qo=!1;function Yo(e,t){if(!e||qo)return"";qo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),i=r.stack.split(`
`),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||a[o]!==i[l]){var u=`
`+a[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=l);break}}}finally{qo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wa(e):""}function Xy(e){switch(e.tag){case 5:return wa(e.type);case 16:return wa("Lazy");case 13:return wa("Suspense");case 19:return wa("SuspenseList");case 0:case 2:case 15:return e=Yo(e.type,!1),e;case 11:return e=Yo(e.type.render,!1),e;case 1:return e=Yo(e.type,!0),e;default:return""}}function Hl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kr:return"Fragment";case Sr:return"Portal";case jl:return"Profiler";case hc:return"StrictMode";case Fl:return"Suspense";case Bl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gp:return(e.displayName||"Context")+".Consumer";case Wp:return(e._context.displayName||"Context")+".Provider";case fc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pc:return t=e.displayName||null,t!==null?t:Hl(e.type)||"Memo";case Cn:t=e._payload,e=e._init;try{return Hl(e(t))}catch{}}return null}function Jy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hl(t);case 8:return t===hc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $p(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zy(e){var t=$p(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Di(e){e._valueTracker||(e._valueTracker=Zy(e))}function Qp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$p(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function bs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ul(e,t){var n=t.checked;return Ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Yd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Kp(e,t){t=t.checked,t!=null&&dc(e,"checked",t,!1)}function zl(e,t){Kp(e,t);var n=zn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ql(e,t.type,n):t.hasOwnProperty("defaultValue")&&ql(e,t.type,zn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Wd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ql(e,t,n){(t!=="number"||bs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Aa=Array.isArray;function jr(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Yl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return Ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Aa(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zn(n)}}function Xp(e,t){var n=zn(t.value),r=zn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Vd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Jp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Jp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Oi,Zp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Oi=Oi||document.createElement("div"),Oi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Oi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ra={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ex=["Webkit","ms","Moz","O"];Object.keys(Ra).forEach(function(e){ex.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ra[t]=Ra[e]})});function em(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ra.hasOwnProperty(e)&&Ra[e]?(""+t).trim():t+"px"}function tm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=em(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var tx=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gl(e,t){if(t){if(tx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Vl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $l=null;function mc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ql=null,Fr=null,Br=null;function $d(e){if(e=Ti(e)){if(typeof Ql!="function")throw Error(j(280));var t=e.stateNode;t&&(t=ro(t),Ql(e.stateNode,e.type,t))}}function nm(e){Fr?Br?Br.push(e):Br=[e]:Fr=e}function rm(){if(Fr){var e=Fr,t=Br;if(Br=Fr=null,$d(e),t)for(e=0;e<t.length;e++)$d(t[e])}}function am(e,t){return e(t)}function im(){}var Wo=!1;function sm(e,t,n){if(Wo)return e(t,n);Wo=!0;try{return am(e,t,n)}finally{Wo=!1,(Fr!==null||Br!==null)&&(im(),rm())}}function Ja(e,t){var n=e.stateNode;if(n===null)return null;var r=ro(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Kl=!1;if(mn)try{var ya={};Object.defineProperty(ya,"passive",{get:function(){Kl=!0}}),window.addEventListener("test",ya,ya),window.removeEventListener("test",ya,ya)}catch{Kl=!1}function nx(e,t,n,r,a,i,o,l,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(f){this.onError(f)}}var Da=!1,Es=null,Ts=!1,Xl=null,rx={onError:function(e){Da=!0,Es=e}};function ax(e,t,n,r,a,i,o,l,u){Da=!1,Es=null,nx.apply(rx,arguments)}function ix(e,t,n,r,a,i,o,l,u){if(ax.apply(this,arguments),Da){if(Da){var d=Es;Da=!1,Es=null}else throw Error(j(198));Ts||(Ts=!0,Xl=d)}}function pr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function om(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qd(e){if(pr(e)!==e)throw Error(j(188))}function sx(e){var t=e.alternate;if(!t){if(t=pr(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return Qd(a),e;if(i===r)return Qd(a),t;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=a,r=i;else{for(var o=!1,l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function lm(e){return e=sx(e),e!==null?um(e):null}function um(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=um(e);if(t!==null)return t;e=e.sibling}return null}var cm=kt.unstable_scheduleCallback,Kd=kt.unstable_cancelCallback,ox=kt.unstable_shouldYield,lx=kt.unstable_requestPaint,Re=kt.unstable_now,ux=kt.unstable_getCurrentPriorityLevel,gc=kt.unstable_ImmediatePriority,dm=kt.unstable_UserBlockingPriority,vs=kt.unstable_NormalPriority,cx=kt.unstable_LowPriority,hm=kt.unstable_IdlePriority,Zs=null,nn=null;function dx(e){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Zs,e,void 0,(e.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:px,hx=Math.log,fx=Math.LN2;function px(e){return e>>>=0,e===0?32:31-(hx(e)/fx|0)|0}var Mi=64,ji=4194304;function Ia(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _s(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~a;l!==0?r=Ia(l):(i&=o,i!==0&&(r=Ia(i)))}else o=n&~a,o!==0?r=Ia(o):i!==0&&(r=Ia(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Wt(t),a=1<<n,r|=e[n],t&=~a;return r}function mx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gx(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Wt(i),l=1<<o,u=a[o];u===-1?(!(l&n)||l&r)&&(a[o]=mx(l,t)):u<=t&&(e.expiredLanes|=l),i&=~l}}function Jl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fm(){var e=Mi;return Mi<<=1,!(Mi&4194240)&&(Mi=64),e}function Go(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Wt(t),e[t]=n}function yx(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Wt(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}function yc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Wt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var ce=0;function pm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mm,xc,gm,ym,xm,Zl=!1,Fi=[],Dn=null,On=null,Mn=null,Za=new Map,ei=new Map,wn=[],xx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xd(e,t){switch(e){case"focusin":case"focusout":Dn=null;break;case"dragenter":case"dragleave":On=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":Za.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ei.delete(t.pointerId)}}function xa(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=Ti(t),t!==null&&xc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function bx(e,t,n,r,a){switch(t){case"focusin":return Dn=xa(Dn,e,t,n,r,a),!0;case"dragenter":return On=xa(On,e,t,n,r,a),!0;case"mouseover":return Mn=xa(Mn,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return Za.set(i,xa(Za.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,ei.set(i,xa(ei.get(i)||null,e,t,n,r,a)),!0}return!1}function bm(e){var t=er(e.target);if(t!==null){var n=pr(t);if(n!==null){if(t=n.tag,t===13){if(t=om(n),t!==null){e.blockedOn=t,xm(e.priority,function(){gm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function as(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=eu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);$l=r,n.target.dispatchEvent(r),$l=null}else return t=Ti(n),t!==null&&xc(t),e.blockedOn=n,!1;t.shift()}return!0}function Jd(e,t,n){as(e)&&n.delete(t)}function Ex(){Zl=!1,Dn!==null&&as(Dn)&&(Dn=null),On!==null&&as(On)&&(On=null),Mn!==null&&as(Mn)&&(Mn=null),Za.forEach(Jd),ei.forEach(Jd)}function ba(e,t){e.blockedOn===t&&(e.blockedOn=null,Zl||(Zl=!0,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,Ex)))}function ti(e){function t(a){return ba(a,e)}if(0<Fi.length){ba(Fi[0],e);for(var n=1;n<Fi.length;n++){var r=Fi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Dn!==null&&ba(Dn,e),On!==null&&ba(On,e),Mn!==null&&ba(Mn,e),Za.forEach(t),ei.forEach(t),n=0;n<wn.length;n++)r=wn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<wn.length&&(n=wn[0],n.blockedOn===null);)bm(n),n.blockedOn===null&&wn.shift()}var Hr=bn.ReactCurrentBatchConfig,Ss=!0;function Tx(e,t,n,r){var a=ce,i=Hr.transition;Hr.transition=null;try{ce=1,bc(e,t,n,r)}finally{ce=a,Hr.transition=i}}function vx(e,t,n,r){var a=ce,i=Hr.transition;Hr.transition=null;try{ce=4,bc(e,t,n,r)}finally{ce=a,Hr.transition=i}}function bc(e,t,n,r){if(Ss){var a=eu(e,t,n,r);if(a===null)nl(e,t,r,ks,n),Xd(e,r);else if(bx(a,e,t,n,r))r.stopPropagation();else if(Xd(e,r),t&4&&-1<xx.indexOf(e)){for(;a!==null;){var i=Ti(a);if(i!==null&&mm(i),i=eu(e,t,n,r),i===null&&nl(e,t,r,ks,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else nl(e,t,r,null,n)}}var ks=null;function eu(e,t,n,r){if(ks=null,e=mc(r),e=er(e),e!==null)if(t=pr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=om(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ks=e,null}function Em(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ux()){case gc:return 1;case dm:return 4;case vs:case cx:return 16;case hm:return 536870912;default:return 16}default:return 16}}var In=null,Ec=null,is=null;function Tm(){if(is)return is;var e,t=Ec,n=t.length,r,a="value"in In?In.value:In.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===a[i-r];r++);return is=a.slice(e,1<r?1-r:void 0)}function ss(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bi(){return!0}function Zd(){return!1}function Nt(e){function t(n,r,a,i,o){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Bi:Zd,this.isPropagationStopped=Zd,this}return Ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bi)},persist:function(){},isPersistent:Bi}),t}var ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tc=Nt(ia),Ei=Ce({},ia,{view:0,detail:0}),_x=Nt(Ei),Vo,$o,Ea,eo=Ce({},Ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ea&&(Ea&&e.type==="mousemove"?(Vo=e.screenX-Ea.screenX,$o=e.screenY-Ea.screenY):$o=Vo=0,Ea=e),Vo)},movementY:function(e){return"movementY"in e?e.movementY:$o}}),eh=Nt(eo),Sx=Ce({},eo,{dataTransfer:0}),kx=Nt(Sx),Cx=Ce({},Ei,{relatedTarget:0}),Qo=Nt(Cx),Nx=Ce({},ia,{animationName:0,elapsedTime:0,pseudoElement:0}),wx=Nt(Nx),Ax=Ce({},ia,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ix=Nt(Ax),Px=Ce({},ia,{data:0}),th=Nt(Px),Lx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ox(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Dx[e])?!!t[e]:!1}function vc(){return Ox}var Mx=Ce({},Ei,{key:function(e){if(e.key){var t=Lx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ss(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vc,charCode:function(e){return e.type==="keypress"?ss(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ss(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jx=Nt(Mx),Fx=Ce({},eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nh=Nt(Fx),Bx=Ce({},Ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vc}),Hx=Nt(Bx),Ux=Ce({},ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),zx=Nt(Ux),qx=Ce({},eo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yx=Nt(qx),Wx=[9,13,27,32],_c=mn&&"CompositionEvent"in window,Oa=null;mn&&"documentMode"in document&&(Oa=document.documentMode);var Gx=mn&&"TextEvent"in window&&!Oa,vm=mn&&(!_c||Oa&&8<Oa&&11>=Oa),rh=" ",ah=!1;function _m(e,t){switch(e){case"keyup":return Wx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cr=!1;function Vx(e,t){switch(e){case"compositionend":return Sm(t);case"keypress":return t.which!==32?null:(ah=!0,rh);case"textInput":return e=t.data,e===rh&&ah?null:e;default:return null}}function $x(e,t){if(Cr)return e==="compositionend"||!_c&&_m(e,t)?(e=Tm(),is=Ec=In=null,Cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vm&&t.locale!=="ko"?null:t.data;default:return null}}var Qx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ih(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qx[e.type]:t==="textarea"}function km(e,t,n,r){nm(r),t=Cs(t,"onChange"),0<t.length&&(n=new Tc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ma=null,ni=null;function Kx(e){Mm(e,0)}function to(e){var t=Ar(e);if(Qp(t))return e}function Xx(e,t){if(e==="change")return t}var Cm=!1;if(mn){var Ko;if(mn){var Xo="oninput"in document;if(!Xo){var sh=document.createElement("div");sh.setAttribute("oninput","return;"),Xo=typeof sh.oninput=="function"}Ko=Xo}else Ko=!1;Cm=Ko&&(!document.documentMode||9<document.documentMode)}function oh(){Ma&&(Ma.detachEvent("onpropertychange",Nm),ni=Ma=null)}function Nm(e){if(e.propertyName==="value"&&to(ni)){var t=[];km(t,ni,e,mc(e)),sm(Kx,t)}}function Jx(e,t,n){e==="focusin"?(oh(),Ma=t,ni=n,Ma.attachEvent("onpropertychange",Nm)):e==="focusout"&&oh()}function Zx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return to(ni)}function eb(e,t){if(e==="click")return to(t)}function tb(e,t){if(e==="input"||e==="change")return to(t)}function nb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $t=typeof Object.is=="function"?Object.is:nb;function ri(e,t){if($t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Ml.call(t,a)||!$t(e[a],t[a]))return!1}return!0}function lh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uh(e,t){var n=lh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lh(n)}}function wm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Am(){for(var e=window,t=bs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bs(e.document)}return t}function Sc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function rb(e){var t=Am(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&wm(n.ownerDocument.documentElement,n)){if(r!==null&&Sc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=uh(n,i);var o=uh(n,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ab=mn&&"documentMode"in document&&11>=document.documentMode,Nr=null,tu=null,ja=null,nu=!1;function ch(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nu||Nr==null||Nr!==bs(r)||(r=Nr,"selectionStart"in r&&Sc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ja&&ri(ja,r)||(ja=r,r=Cs(tu,"onSelect"),0<r.length&&(t=new Tc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Nr)))}function Hi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wr={animationend:Hi("Animation","AnimationEnd"),animationiteration:Hi("Animation","AnimationIteration"),animationstart:Hi("Animation","AnimationStart"),transitionend:Hi("Transition","TransitionEnd")},Jo={},Im={};mn&&(Im=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function no(e){if(Jo[e])return Jo[e];if(!wr[e])return e;var t=wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Im)return Jo[e]=t[n];return e}var Pm=no("animationend"),Lm=no("animationiteration"),Rm=no("animationstart"),Dm=no("transitionend"),Om=new Map,dh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wn(e,t){Om.set(e,t),fr(t,[e])}for(var Zo=0;Zo<dh.length;Zo++){var el=dh[Zo],ib=el.toLowerCase(),sb=el[0].toUpperCase()+el.slice(1);Wn(ib,"on"+sb)}Wn(Pm,"onAnimationEnd");Wn(Lm,"onAnimationIteration");Wn(Rm,"onAnimationStart");Wn("dblclick","onDoubleClick");Wn("focusin","onFocus");Wn("focusout","onBlur");Wn(Dm,"onTransitionEnd");Gr("onMouseEnter",["mouseout","mouseover"]);Gr("onMouseLeave",["mouseout","mouseover"]);Gr("onPointerEnter",["pointerout","pointerover"]);Gr("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ob=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pa));function hh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ix(r,t,void 0,e),e.currentTarget=null}function Mm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==i&&a.isPropagationStopped())break e;hh(a,l,d),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,d=l.currentTarget,l=l.listener,u!==i&&a.isPropagationStopped())break e;hh(a,l,d),i=u}}}if(Ts)throw e=Xl,Ts=!1,Xl=null,e}function Ee(e,t){var n=t[ou];n===void 0&&(n=t[ou]=new Set);var r=e+"__bubble";n.has(r)||(jm(t,e,2,!1),n.add(r))}function tl(e,t,n){var r=0;t&&(r|=4),jm(n,e,r,t)}var Ui="_reactListening"+Math.random().toString(36).slice(2);function ai(e){if(!e[Ui]){e[Ui]=!0,Yp.forEach(function(n){n!=="selectionchange"&&(ob.has(n)||tl(n,!1,e),tl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ui]||(t[Ui]=!0,tl("selectionchange",!1,t))}}function jm(e,t,n,r){switch(Em(t)){case 1:var a=Tx;break;case 4:a=vx;break;default:a=bc}n=a.bind(null,t,n,e),a=void 0,!Kl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function nl(e,t,n,r,a){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===a||u.nodeType===8&&u.parentNode===a))return;o=o.return}for(;l!==null;){if(o=er(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}sm(function(){var d=i,f=mc(n),h=[];e:{var p=Om.get(e);if(p!==void 0){var m=Tc,x=e;switch(e){case"keypress":if(ss(n)===0)break e;case"keydown":case"keyup":m=jx;break;case"focusin":x="focus",m=Qo;break;case"focusout":x="blur",m=Qo;break;case"beforeblur":case"afterblur":m=Qo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=eh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=kx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Hx;break;case Pm:case Lm:case Rm:m=wx;break;case Dm:m=zx;break;case"scroll":m=_x;break;case"wheel":m=Yx;break;case"copy":case"cut":case"paste":m=Ix;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=nh}var S=(t&4)!==0,A=!S&&e==="scroll",g=S?p!==null?p+"Capture":null:p;S=[];for(var y=d,E;y!==null;){E=y;var N=E.stateNode;if(E.tag===5&&N!==null&&(E=N,g!==null&&(N=Ja(y,g),N!=null&&S.push(ii(y,N,E)))),A)break;y=y.return}0<S.length&&(p=new m(p,x,null,n,f),h.push({event:p,listeners:S}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",p&&n!==$l&&(x=n.relatedTarget||n.fromElement)&&(er(x)||x[gn]))break e;if((m||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=d,x=x?er(x):null,x!==null&&(A=pr(x),x!==A||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=d),m!==x)){if(S=eh,N="onMouseLeave",g="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(S=nh,N="onPointerLeave",g="onPointerEnter",y="pointer"),A=m==null?p:Ar(m),E=x==null?p:Ar(x),p=new S(N,y+"leave",m,n,f),p.target=A,p.relatedTarget=E,N=null,er(f)===d&&(S=new S(g,y+"enter",x,n,f),S.target=E,S.relatedTarget=A,N=S),A=N,m&&x)t:{for(S=m,g=x,y=0,E=S;E;E=Tr(E))y++;for(E=0,N=g;N;N=Tr(N))E++;for(;0<y-E;)S=Tr(S),y--;for(;0<E-y;)g=Tr(g),E--;for(;y--;){if(S===g||g!==null&&S===g.alternate)break t;S=Tr(S),g=Tr(g)}S=null}else S=null;m!==null&&fh(h,p,m,S,!1),x!==null&&A!==null&&fh(h,A,x,S,!0)}}e:{if(p=d?Ar(d):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var P=Xx;else if(ih(p))if(Cm)P=tb;else{P=Zx;var C=Jx}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(P=eb);if(P&&(P=P(e,d))){km(h,P,n,f);break e}C&&C(e,p,d),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&ql(p,"number",p.value)}switch(C=d?Ar(d):window,e){case"focusin":(ih(C)||C.contentEditable==="true")&&(Nr=C,tu=d,ja=null);break;case"focusout":ja=tu=Nr=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,ch(h,n,f);break;case"selectionchange":if(ab)break;case"keydown":case"keyup":ch(h,n,f)}var D;if(_c)e:{switch(e){case"compositionstart":var H="onCompositionStart";break e;case"compositionend":H="onCompositionEnd";break e;case"compositionupdate":H="onCompositionUpdate";break e}H=void 0}else Cr?_m(e,n)&&(H="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(H="onCompositionStart");H&&(vm&&n.locale!=="ko"&&(Cr||H!=="onCompositionStart"?H==="onCompositionEnd"&&Cr&&(D=Tm()):(In=f,Ec="value"in In?In.value:In.textContent,Cr=!0)),C=Cs(d,H),0<C.length&&(H=new th(H,e,null,n,f),h.push({event:H,listeners:C}),D?H.data=D:(D=Sm(n),D!==null&&(H.data=D)))),(D=Gx?Vx(e,n):$x(e,n))&&(d=Cs(d,"onBeforeInput"),0<d.length&&(f=new th("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:d}),f.data=D))}Mm(h,t)})}function ii(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Cs(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Ja(e,n),i!=null&&r.unshift(ii(e,i,a)),i=Ja(e,t),i!=null&&r.push(ii(e,i,a))),e=e.return}return r}function Tr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fh(e,t,n,r,a){for(var i=t._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,a?(u=Ja(n,i),u!=null&&o.unshift(ii(n,u,l))):a||(u=Ja(n,i),u!=null&&o.push(ii(n,u,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var lb=/\r\n?/g,ub=/\u0000|\uFFFD/g;function ph(e){return(typeof e=="string"?e:""+e).replace(lb,`
`).replace(ub,"")}function zi(e,t,n){if(t=ph(t),ph(e)!==t&&n)throw Error(j(425))}function Ns(){}var ru=null,au=null;function iu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var su=typeof setTimeout=="function"?setTimeout:void 0,cb=typeof clearTimeout=="function"?clearTimeout:void 0,mh=typeof Promise=="function"?Promise:void 0,db=typeof queueMicrotask=="function"?queueMicrotask:typeof mh<"u"?function(e){return mh.resolve(null).then(e).catch(hb)}:su;function hb(e){setTimeout(function(){throw e})}function rl(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),ti(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);ti(t)}function jn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function gh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var sa=Math.random().toString(36).slice(2),tn="__reactFiber$"+sa,si="__reactProps$"+sa,gn="__reactContainer$"+sa,ou="__reactEvents$"+sa,fb="__reactListeners$"+sa,pb="__reactHandles$"+sa;function er(e){var t=e[tn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gn]||n[tn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=gh(e);e!==null;){if(n=e[tn])return n;e=gh(e)}return t}e=n,n=e.parentNode}return null}function Ti(e){return e=e[tn]||e[gn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ar(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function ro(e){return e[si]||null}var lu=[],Ir=-1;function Gn(e){return{current:e}}function Te(e){0>Ir||(e.current=lu[Ir],lu[Ir]=null,Ir--)}function xe(e,t){Ir++,lu[Ir]=e.current,e.current=t}var qn={},et=Gn(qn),ft=Gn(!1),or=qn;function Vr(e,t){var n=e.type.contextTypes;if(!n)return qn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function pt(e){return e=e.childContextTypes,e!=null}function ws(){Te(ft),Te(et)}function yh(e,t,n){if(et.current!==qn)throw Error(j(168));xe(et,t),xe(ft,n)}function Fm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(j(108,Jy(e)||"Unknown",a));return Ce({},n,r)}function As(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qn,or=et.current,xe(et,e),xe(ft,ft.current),!0}function xh(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=Fm(e,t,or),r.__reactInternalMemoizedMergedChildContext=e,Te(ft),Te(et),xe(et,e)):Te(ft),xe(ft,n)}var cn=null,ao=!1,al=!1;function Bm(e){cn===null?cn=[e]:cn.push(e)}function mb(e){ao=!0,Bm(e)}function Vn(){if(!al&&cn!==null){al=!0;var e=0,t=ce;try{var n=cn;for(ce=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}cn=null,ao=!1}catch(a){throw cn!==null&&(cn=cn.slice(e+1)),cm(gc,Vn),a}finally{ce=t,al=!1}}return null}var Pr=[],Lr=0,Is=null,Ps=0,At=[],It=0,lr=null,hn=1,fn="";function Xn(e,t){Pr[Lr++]=Ps,Pr[Lr++]=Is,Is=e,Ps=t}function Hm(e,t,n){At[It++]=hn,At[It++]=fn,At[It++]=lr,lr=e;var r=hn;e=fn;var a=32-Wt(r)-1;r&=~(1<<a),n+=1;var i=32-Wt(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,hn=1<<32-Wt(t)+a|n<<a|r,fn=i+e}else hn=1<<i|n<<a|r,fn=e}function kc(e){e.return!==null&&(Xn(e,1),Hm(e,1,0))}function Cc(e){for(;e===Is;)Is=Pr[--Lr],Pr[Lr]=null,Ps=Pr[--Lr],Pr[Lr]=null;for(;e===lr;)lr=At[--It],At[It]=null,fn=At[--It],At[It]=null,hn=At[--It],At[It]=null}var _t=null,vt=null,_e=!1,Yt=null;function Um(e,t){var n=Rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function bh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,_t=e,vt=jn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,_t=e,vt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=lr!==null?{id:hn,overflow:fn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,_t=e,vt=null,!0):!1;default:return!1}}function uu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function cu(e){if(_e){var t=vt;if(t){var n=t;if(!bh(e,t)){if(uu(e))throw Error(j(418));t=jn(n.nextSibling);var r=_t;t&&bh(e,t)?Um(r,n):(e.flags=e.flags&-4097|2,_e=!1,_t=e)}}else{if(uu(e))throw Error(j(418));e.flags=e.flags&-4097|2,_e=!1,_t=e}}}function Eh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_t=e}function qi(e){if(e!==_t)return!1;if(!_e)return Eh(e),_e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!iu(e.type,e.memoizedProps)),t&&(t=vt)){if(uu(e))throw zm(),Error(j(418));for(;t;)Um(e,t),t=jn(t.nextSibling)}if(Eh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){vt=jn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}vt=null}}else vt=_t?jn(e.stateNode.nextSibling):null;return!0}function zm(){for(var e=vt;e;)e=jn(e.nextSibling)}function $r(){vt=_t=null,_e=!1}function Nc(e){Yt===null?Yt=[e]:Yt.push(e)}var gb=bn.ReactCurrentBatchConfig;function Ta(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var l=a.refs;o===null?delete l[i]:l[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Yi(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Th(e){var t=e._init;return t(e._payload)}function qm(e){function t(g,y){if(e){var E=g.deletions;E===null?(g.deletions=[y],g.flags|=16):E.push(y)}}function n(g,y){if(!e)return null;for(;y!==null;)t(g,y),y=y.sibling;return null}function r(g,y){for(g=new Map;y!==null;)y.key!==null?g.set(y.key,y):g.set(y.index,y),y=y.sibling;return g}function a(g,y){return g=Un(g,y),g.index=0,g.sibling=null,g}function i(g,y,E){return g.index=E,e?(E=g.alternate,E!==null?(E=E.index,E<y?(g.flags|=2,y):E):(g.flags|=2,y)):(g.flags|=1048576,y)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,y,E,N){return y===null||y.tag!==6?(y=dl(E,g.mode,N),y.return=g,y):(y=a(y,E),y.return=g,y)}function u(g,y,E,N){var P=E.type;return P===kr?f(g,y,E.props.children,N,E.key):y!==null&&(y.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Cn&&Th(P)===y.type)?(N=a(y,E.props),N.ref=Ta(g,y,E),N.return=g,N):(N=fs(E.type,E.key,E.props,null,g.mode,N),N.ref=Ta(g,y,E),N.return=g,N)}function d(g,y,E,N){return y===null||y.tag!==4||y.stateNode.containerInfo!==E.containerInfo||y.stateNode.implementation!==E.implementation?(y=hl(E,g.mode,N),y.return=g,y):(y=a(y,E.children||[]),y.return=g,y)}function f(g,y,E,N,P){return y===null||y.tag!==7?(y=ir(E,g.mode,N,P),y.return=g,y):(y=a(y,E),y.return=g,y)}function h(g,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return y=dl(""+y,g.mode,E),y.return=g,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ri:return E=fs(y.type,y.key,y.props,null,g.mode,E),E.ref=Ta(g,null,y),E.return=g,E;case Sr:return y=hl(y,g.mode,E),y.return=g,y;case Cn:var N=y._init;return h(g,N(y._payload),E)}if(Aa(y)||ga(y))return y=ir(y,g.mode,E,null),y.return=g,y;Yi(g,y)}return null}function p(g,y,E,N){var P=y!==null?y.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return P!==null?null:l(g,y,""+E,N);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ri:return E.key===P?u(g,y,E,N):null;case Sr:return E.key===P?d(g,y,E,N):null;case Cn:return P=E._init,p(g,y,P(E._payload),N)}if(Aa(E)||ga(E))return P!==null?null:f(g,y,E,N,null);Yi(g,E)}return null}function m(g,y,E,N,P){if(typeof N=="string"&&N!==""||typeof N=="number")return g=g.get(E)||null,l(y,g,""+N,P);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Ri:return g=g.get(N.key===null?E:N.key)||null,u(y,g,N,P);case Sr:return g=g.get(N.key===null?E:N.key)||null,d(y,g,N,P);case Cn:var C=N._init;return m(g,y,E,C(N._payload),P)}if(Aa(N)||ga(N))return g=g.get(E)||null,f(y,g,N,P,null);Yi(y,N)}return null}function x(g,y,E,N){for(var P=null,C=null,D=y,H=y=0,V=null;D!==null&&H<E.length;H++){D.index>H?(V=D,D=null):V=D.sibling;var w=p(g,D,E[H],N);if(w===null){D===null&&(D=V);break}e&&D&&w.alternate===null&&t(g,D),y=i(w,y,H),C===null?P=w:C.sibling=w,C=w,D=V}if(H===E.length)return n(g,D),_e&&Xn(g,H),P;if(D===null){for(;H<E.length;H++)D=h(g,E[H],N),D!==null&&(y=i(D,y,H),C===null?P=D:C.sibling=D,C=D);return _e&&Xn(g,H),P}for(D=r(g,D);H<E.length;H++)V=m(D,g,H,E[H],N),V!==null&&(e&&V.alternate!==null&&D.delete(V.key===null?H:V.key),y=i(V,y,H),C===null?P=V:C.sibling=V,C=V);return e&&D.forEach(function(U){return t(g,U)}),_e&&Xn(g,H),P}function S(g,y,E,N){var P=ga(E);if(typeof P!="function")throw Error(j(150));if(E=P.call(E),E==null)throw Error(j(151));for(var C=P=null,D=y,H=y=0,V=null,w=E.next();D!==null&&!w.done;H++,w=E.next()){D.index>H?(V=D,D=null):V=D.sibling;var U=p(g,D,w.value,N);if(U===null){D===null&&(D=V);break}e&&D&&U.alternate===null&&t(g,D),y=i(U,y,H),C===null?P=U:C.sibling=U,C=U,D=V}if(w.done)return n(g,D),_e&&Xn(g,H),P;if(D===null){for(;!w.done;H++,w=E.next())w=h(g,w.value,N),w!==null&&(y=i(w,y,H),C===null?P=w:C.sibling=w,C=w);return _e&&Xn(g,H),P}for(D=r(g,D);!w.done;H++,w=E.next())w=m(D,g,H,w.value,N),w!==null&&(e&&w.alternate!==null&&D.delete(w.key===null?H:w.key),y=i(w,y,H),C===null?P=w:C.sibling=w,C=w);return e&&D.forEach(function(G){return t(g,G)}),_e&&Xn(g,H),P}function A(g,y,E,N){if(typeof E=="object"&&E!==null&&E.type===kr&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Ri:e:{for(var P=E.key,C=y;C!==null;){if(C.key===P){if(P=E.type,P===kr){if(C.tag===7){n(g,C.sibling),y=a(C,E.props.children),y.return=g,g=y;break e}}else if(C.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Cn&&Th(P)===C.type){n(g,C.sibling),y=a(C,E.props),y.ref=Ta(g,C,E),y.return=g,g=y;break e}n(g,C);break}else t(g,C);C=C.sibling}E.type===kr?(y=ir(E.props.children,g.mode,N,E.key),y.return=g,g=y):(N=fs(E.type,E.key,E.props,null,g.mode,N),N.ref=Ta(g,y,E),N.return=g,g=N)}return o(g);case Sr:e:{for(C=E.key;y!==null;){if(y.key===C)if(y.tag===4&&y.stateNode.containerInfo===E.containerInfo&&y.stateNode.implementation===E.implementation){n(g,y.sibling),y=a(y,E.children||[]),y.return=g,g=y;break e}else{n(g,y);break}else t(g,y);y=y.sibling}y=hl(E,g.mode,N),y.return=g,g=y}return o(g);case Cn:return C=E._init,A(g,y,C(E._payload),N)}if(Aa(E))return x(g,y,E,N);if(ga(E))return S(g,y,E,N);Yi(g,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,y!==null&&y.tag===6?(n(g,y.sibling),y=a(y,E),y.return=g,g=y):(n(g,y),y=dl(E,g.mode,N),y.return=g,g=y),o(g)):n(g,y)}return A}var Qr=qm(!0),Ym=qm(!1),Ls=Gn(null),Rs=null,Rr=null,wc=null;function Ac(){wc=Rr=Rs=null}function Ic(e){var t=Ls.current;Te(Ls),e._currentValue=t}function du(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ur(e,t){Rs=e,wc=Rr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ht=!0),e.firstContext=null)}function Ot(e){var t=e._currentValue;if(wc!==e)if(e={context:e,memoizedValue:t,next:null},Rr===null){if(Rs===null)throw Error(j(308));Rr=e,Rs.dependencies={lanes:0,firstContext:e}}else Rr=Rr.next=e;return t}var tr=null;function Pc(e){tr===null?tr=[e]:tr.push(e)}function Wm(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,Pc(t)):(n.next=a.next,a.next=n),t.interleaved=n,yn(e,r)}function yn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Nn=!1;function Lc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,yn(e,n)}return a=r.interleaved,a===null?(t.next=t,Pc(r)):(t.next=a.next,a.next=t),r.interleaved=t,yn(e,n)}function os(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yc(e,n)}}function vh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ds(e,t,n,r){var a=e.updateQueue;Nn=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var u=l,d=u.next;u.next=null,o===null?i=d:o.next=d,o=u;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=u))}if(i!==null){var h=a.baseState;o=0,f=d=u=null,l=i;do{var p=l.lane,m=l.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,S=l;switch(p=t,m=n,S.tag){case 1:if(x=S.payload,typeof x=="function"){h=x.call(m,h,p);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,p=typeof x=="function"?x.call(m,h,p):x,p==null)break e;h=Ce({},h,p);break e;case 2:Nn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=a.effects,p===null?a.effects=[l]:p.push(l))}else m={eventTime:m,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=m,u=h):f=f.next=m,o|=p;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;p=l,l=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);if(f===null&&(u=h),a.baseState=u,a.firstBaseUpdate=d,a.lastBaseUpdate=f,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);cr|=o,e.lanes=o,e.memoizedState=h}}function _h(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(j(191,a));a.call(r)}}}var vi={},rn=Gn(vi),oi=Gn(vi),li=Gn(vi);function nr(e){if(e===vi)throw Error(j(174));return e}function Rc(e,t){switch(xe(li,t),xe(oi,e),xe(rn,vi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Wl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Wl(t,e)}Te(rn),xe(rn,t)}function Kr(){Te(rn),Te(oi),Te(li)}function Vm(e){nr(li.current);var t=nr(rn.current),n=Wl(t,e.type);t!==n&&(xe(oi,e),xe(rn,n))}function Dc(e){oi.current===e&&(Te(rn),Te(oi))}var Se=Gn(0);function Os(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var il=[];function Oc(){for(var e=0;e<il.length;e++)il[e]._workInProgressVersionPrimary=null;il.length=0}var ls=bn.ReactCurrentDispatcher,sl=bn.ReactCurrentBatchConfig,ur=0,ke=null,He=null,qe=null,Ms=!1,Fa=!1,ui=0,yb=0;function Ke(){throw Error(j(321))}function Mc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!$t(e[n],t[n]))return!1;return!0}function jc(e,t,n,r,a,i){if(ur=i,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ls.current=e===null||e.memoizedState===null?Tb:vb,e=n(r,a),Fa){i=0;do{if(Fa=!1,ui=0,25<=i)throw Error(j(301));i+=1,qe=He=null,t.updateQueue=null,ls.current=_b,e=n(r,a)}while(Fa)}if(ls.current=js,t=He!==null&&He.next!==null,ur=0,qe=He=ke=null,Ms=!1,t)throw Error(j(300));return e}function Fc(){var e=ui!==0;return ui=0,e}function Jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?ke.memoizedState=qe=e:qe=qe.next=e,qe}function Mt(){if(He===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var t=qe===null?ke.memoizedState:qe.next;if(t!==null)qe=t,He=e;else{if(e===null)throw Error(j(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},qe===null?ke.memoizedState=qe=e:qe=qe.next=e}return qe}function ci(e,t){return typeof t=="function"?t(e):t}function ol(e){var t=Mt(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=He,a=r.baseQueue,i=n.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}r.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,r=r.baseState;var l=o=null,u=null,d=i;do{var f=d.lane;if((ur&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=h,o=r):u=u.next=h,ke.lanes|=f,cr|=f}d=d.next}while(d!==null&&d!==i);u===null?o=r:u.next=l,$t(r,t.memoizedState)||(ht=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do i=a.lane,ke.lanes|=i,cr|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ll(e){var t=Mt(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);$t(i,t.memoizedState)||(ht=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function $m(){}function Qm(e,t){var n=ke,r=Mt(),a=t(),i=!$t(r.memoizedState,a);if(i&&(r.memoizedState=a,ht=!0),r=r.queue,Bc(Jm.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,di(9,Xm.bind(null,n,r,a,t),void 0,null),We===null)throw Error(j(349));ur&30||Km(n,t,a)}return a}function Km(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Xm(e,t,n,r){t.value=n,t.getSnapshot=r,Zm(t)&&e0(e)}function Jm(e,t,n){return n(function(){Zm(t)&&e0(e)})}function Zm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!$t(e,n)}catch{return!0}}function e0(e){var t=yn(e,1);t!==null&&Gt(t,e,1,-1)}function Sh(e){var t=Jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ci,lastRenderedState:e},t.queue=e,e=e.dispatch=Eb.bind(null,ke,e),[t.memoizedState,e]}function di(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function t0(){return Mt().memoizedState}function us(e,t,n,r){var a=Jt();ke.flags|=e,a.memoizedState=di(1|t,n,void 0,r===void 0?null:r)}function io(e,t,n,r){var a=Mt();r=r===void 0?null:r;var i=void 0;if(He!==null){var o=He.memoizedState;if(i=o.destroy,r!==null&&Mc(r,o.deps)){a.memoizedState=di(t,n,i,r);return}}ke.flags|=e,a.memoizedState=di(1|t,n,i,r)}function kh(e,t){return us(8390656,8,e,t)}function Bc(e,t){return io(2048,8,e,t)}function n0(e,t){return io(4,2,e,t)}function r0(e,t){return io(4,4,e,t)}function a0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function i0(e,t,n){return n=n!=null?n.concat([e]):null,io(4,4,a0.bind(null,t,e),n)}function Hc(){}function s0(e,t){var n=Mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function o0(e,t){var n=Mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function l0(e,t,n){return ur&21?($t(n,t)||(n=fm(),ke.lanes|=n,cr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ht=!0),e.memoizedState=n)}function xb(e,t){var n=ce;ce=n!==0&&4>n?n:4,e(!0);var r=sl.transition;sl.transition={};try{e(!1),t()}finally{ce=n,sl.transition=r}}function u0(){return Mt().memoizedState}function bb(e,t,n){var r=Hn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},c0(e))d0(t,n);else if(n=Wm(e,t,n,r),n!==null){var a=it();Gt(n,e,r,a),h0(n,t,r)}}function Eb(e,t,n){var r=Hn(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(c0(e))d0(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,l=i(o,n);if(a.hasEagerState=!0,a.eagerState=l,$t(l,o)){var u=t.interleaved;u===null?(a.next=a,Pc(t)):(a.next=u.next,u.next=a),t.interleaved=a;return}}catch{}finally{}n=Wm(e,t,a,r),n!==null&&(a=it(),Gt(n,e,r,a),h0(n,t,r))}}function c0(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function d0(e,t){Fa=Ms=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function h0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yc(e,n)}}var js={readContext:Ot,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},Tb={readContext:Ot,useCallback:function(e,t){return Jt().memoizedState=[e,t===void 0?null:t],e},useContext:Ot,useEffect:kh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,us(4194308,4,a0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){return us(4,2,e,t)},useMemo:function(e,t){var n=Jt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Jt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=bb.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var t=Jt();return e={current:e},t.memoizedState=e},useState:Sh,useDebugValue:Hc,useDeferredValue:function(e){return Jt().memoizedState=e},useTransition:function(){var e=Sh(!1),t=e[0];return e=xb.bind(null,e[1]),Jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ke,a=Jt();if(_e){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),We===null)throw Error(j(349));ur&30||Km(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,kh(Jm.bind(null,r,i,e),[e]),r.flags|=2048,di(9,Xm.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Jt(),t=We.identifierPrefix;if(_e){var n=fn,r=hn;n=(r&~(1<<32-Wt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ui++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=yb++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},vb={readContext:Ot,useCallback:s0,useContext:Ot,useEffect:Bc,useImperativeHandle:i0,useInsertionEffect:n0,useLayoutEffect:r0,useMemo:o0,useReducer:ol,useRef:t0,useState:function(){return ol(ci)},useDebugValue:Hc,useDeferredValue:function(e){var t=Mt();return l0(t,He.memoizedState,e)},useTransition:function(){var e=ol(ci)[0],t=Mt().memoizedState;return[e,t]},useMutableSource:$m,useSyncExternalStore:Qm,useId:u0,unstable_isNewReconciler:!1},_b={readContext:Ot,useCallback:s0,useContext:Ot,useEffect:Bc,useImperativeHandle:i0,useInsertionEffect:n0,useLayoutEffect:r0,useMemo:o0,useReducer:ll,useRef:t0,useState:function(){return ll(ci)},useDebugValue:Hc,useDeferredValue:function(e){var t=Mt();return He===null?t.memoizedState=e:l0(t,He.memoizedState,e)},useTransition:function(){var e=ll(ci)[0],t=Mt().memoizedState;return[e,t]},useMutableSource:$m,useSyncExternalStore:Qm,useId:u0,unstable_isNewReconciler:!1};function zt(e,t){if(e&&e.defaultProps){t=Ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function hu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var so={isMounted:function(e){return(e=e._reactInternals)?pr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=it(),a=Hn(e),i=pn(r,a);i.payload=t,n!=null&&(i.callback=n),t=Fn(e,i,a),t!==null&&(Gt(t,e,a,r),os(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=it(),a=Hn(e),i=pn(r,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Fn(e,i,a),t!==null&&(Gt(t,e,a,r),os(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=it(),r=Hn(e),a=pn(n,r);a.tag=2,t!=null&&(a.callback=t),t=Fn(e,a,r),t!==null&&(Gt(t,e,r,n),os(t,e,r))}};function Ch(e,t,n,r,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!ri(n,r)||!ri(a,i):!0}function f0(e,t,n){var r=!1,a=qn,i=t.contextType;return typeof i=="object"&&i!==null?i=Ot(i):(a=pt(t)?or:et.current,r=t.contextTypes,i=(r=r!=null)?Vr(e,a):qn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=so,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function Nh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&so.enqueueReplaceState(t,t.state,null)}function fu(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Lc(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=Ot(i):(i=pt(t)?or:et.current,a.context=Vr(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(hu(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&so.enqueueReplaceState(a,a.state,null),Ds(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Xr(e,t){try{var n="",r=t;do n+=Xy(r),r=r.return;while(r);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function ul(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function pu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Sb=typeof WeakMap=="function"?WeakMap:Map;function p0(e,t,n){n=pn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Bs||(Bs=!0,Su=r),pu(e,t)},n}function m0(e,t,n){n=pn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){pu(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){pu(e,t),typeof r!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function wh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Sb;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Fb.bind(null,e,t,n),t.then(e,e))}function Ah(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ih(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=pn(-1,1),t.tag=2,Fn(n,t,1))),n.lanes|=1),e)}var kb=bn.ReactCurrentOwner,ht=!1;function rt(e,t,n,r){t.child=e===null?Ym(t,null,n,r):Qr(t,e.child,n,r)}function Ph(e,t,n,r,a){n=n.render;var i=t.ref;return Ur(t,a),r=jc(e,t,n,r,i,a),n=Fc(),e!==null&&!ht?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,xn(e,t,a)):(_e&&n&&kc(t),t.flags|=1,rt(e,t,r,a),t.child)}function Lh(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!$c(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,g0(e,t,i,r,a)):(e=fs(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ri,n(o,r)&&e.ref===t.ref)return xn(e,t,a)}return t.flags|=1,e=Un(i,r),e.ref=t.ref,e.return=t,t.child=e}function g0(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(ri(i,r)&&e.ref===t.ref)if(ht=!1,t.pendingProps=r=i,(e.lanes&a)!==0)e.flags&131072&&(ht=!0);else return t.lanes=e.lanes,xn(e,t,a)}return mu(e,t,n,r,a)}function y0(e,t,n){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(Or,Tt),Tt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,xe(Or,Tt),Tt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,xe(Or,Tt),Tt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,xe(Or,Tt),Tt|=r;return rt(e,t,a,n),t.child}function x0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function mu(e,t,n,r,a){var i=pt(n)?or:et.current;return i=Vr(t,i),Ur(t,a),n=jc(e,t,n,r,i,a),r=Fc(),e!==null&&!ht?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,xn(e,t,a)):(_e&&r&&kc(t),t.flags|=1,rt(e,t,n,a),t.child)}function Rh(e,t,n,r,a){if(pt(n)){var i=!0;As(t)}else i=!1;if(Ur(t,a),t.stateNode===null)cs(e,t),f0(t,n,r),fu(t,n,r,a),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ot(d):(d=pt(n)?or:et.current,d=Vr(t,d));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==d)&&Nh(t,o,r,d),Nn=!1;var p=t.memoizedState;o.state=p,Ds(t,r,o,a),u=t.memoizedState,l!==r||p!==u||ft.current||Nn?(typeof f=="function"&&(hu(t,n,f,r),u=t.memoizedState),(l=Nn||Ch(t,n,l,r,p,u,d))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Gm(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:zt(t.type,l),o.props=d,h=t.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ot(u):(u=pt(n)?or:et.current,u=Vr(t,u));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==h||p!==u)&&Nh(t,o,r,u),Nn=!1,p=t.memoizedState,o.state=p,Ds(t,r,o,a);var x=t.memoizedState;l!==h||p!==x||ft.current||Nn?(typeof m=="function"&&(hu(t,n,m,r),x=t.memoizedState),(d=Nn||Ch(t,n,d,r,p,x,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return gu(e,t,n,r,i,a)}function gu(e,t,n,r,a,i){x0(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return a&&xh(t,n,!1),xn(e,t,i);r=t.stateNode,kb.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Qr(t,e.child,null,i),t.child=Qr(t,null,l,i)):rt(e,t,l,i),t.memoizedState=r.state,a&&xh(t,n,!0),t.child}function b0(e){var t=e.stateNode;t.pendingContext?yh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&yh(e,t.context,!1),Rc(e,t.containerInfo)}function Dh(e,t,n,r,a){return $r(),Nc(a),t.flags|=256,rt(e,t,n,r),t.child}var yu={dehydrated:null,treeContext:null,retryLane:0};function xu(e){return{baseLanes:e,cachePool:null,transitions:null}}function E0(e,t,n){var r=t.pendingProps,a=Se.current,i=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),xe(Se,a&1),e===null)return cu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=uo(o,r,0,null),e=ir(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=xu(n),t.memoizedState=yu,e):Uc(t,o));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Cb(e,t,o,r,l,a,n);if(i){i=r.fallback,o=t.mode,a=e.child,l=a.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Un(a,u),r.subtreeFlags=a.subtreeFlags&14680064),l!==null?i=Un(l,i):(i=ir(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?xu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=yu,r}return i=e.child,e=i.sibling,r=Un(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Uc(e,t){return t=uo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wi(e,t,n,r){return r!==null&&Nc(r),Qr(t,e.child,null,n),e=Uc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cb(e,t,n,r,a,i,o){if(n)return t.flags&256?(t.flags&=-257,r=ul(Error(j(422))),Wi(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=uo({mode:"visible",children:r.children},a,0,null),i=ir(i,a,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Qr(t,e.child,null,o),t.child.memoizedState=xu(o),t.memoizedState=yu,i);if(!(t.mode&1))return Wi(e,t,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(j(419)),r=ul(i,r,void 0),Wi(e,t,o,r)}if(l=(o&e.childLanes)!==0,ht||l){if(r=We,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,yn(e,a),Gt(r,e,a,-1))}return Vc(),r=ul(Error(j(421))),Wi(e,t,o,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Bb.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,vt=jn(a.nextSibling),_t=t,_e=!0,Yt=null,e!==null&&(At[It++]=hn,At[It++]=fn,At[It++]=lr,hn=e.id,fn=e.overflow,lr=t),t=Uc(t,r.children),t.flags|=4096,t)}function Oh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),du(e.return,t,n)}function cl(e,t,n,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function T0(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(rt(e,t,r.children,n),r=Se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oh(e,n,t);else if(e.tag===19)Oh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(xe(Se,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Os(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),cl(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Os(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}cl(t,!0,n,null,i);break;case"together":cl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function cs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function xn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Un(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Un(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nb(e,t,n){switch(t.tag){case 3:b0(t),$r();break;case 5:Vm(t);break;case 1:pt(t.type)&&As(t);break;case 4:Rc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;xe(Ls,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(xe(Se,Se.current&1),t.flags|=128,null):n&t.child.childLanes?E0(e,t,n):(xe(Se,Se.current&1),e=xn(e,t,n),e!==null?e.sibling:null);xe(Se,Se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return T0(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),xe(Se,Se.current),r)break;return null;case 22:case 23:return t.lanes=0,y0(e,t,n)}return xn(e,t,n)}var v0,bu,_0,S0;v0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bu=function(){};_0=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,nr(rn.current);var i=null;switch(n){case"input":a=Ul(e,a),r=Ul(e,r),i=[];break;case"select":a=Ce({},a,{value:void 0}),r=Ce({},r,{value:void 0}),i=[];break;case"textarea":a=Yl(e,a),r=Yl(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ns)}Gl(n,r);var o;n=null;for(d in a)if(!r.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var l=a[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ka.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(l=a!=null?a[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ka.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Ee("scroll",e),i||l===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};S0=function(e,t,n,r){n!==r&&(t.flags|=4)};function va(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function wb(e,t,n){var r=t.pendingProps;switch(Cc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(t),null;case 1:return pt(t.type)&&ws(),Xe(t),null;case 3:return r=t.stateNode,Kr(),Te(ft),Te(et),Oc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(qi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Yt!==null&&(Nu(Yt),Yt=null))),bu(e,t),Xe(t),null;case 5:Dc(t);var a=nr(li.current);if(n=t.type,e!==null&&t.stateNode!=null)_0(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return Xe(t),null}if(e=nr(rn.current),qi(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[tn]=t,r[si]=i,e=(t.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(a=0;a<Pa.length;a++)Ee(Pa[a],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":Yd(r,i),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ee("invalid",r);break;case"textarea":Gd(r,i),Ee("invalid",r)}Gl(n,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&zi(r.textContent,l,e),a=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&zi(r.textContent,l,e),a=["children",""+l]):Ka.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ee("scroll",r)}switch(n){case"input":Di(r),Wd(r,i,!0);break;case"textarea":Di(r),Vd(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ns)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Jp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[tn]=t,e[si]=r,v0(e,t,!1,!1),t.stateNode=e;e:{switch(o=Vl(n,r),n){case"dialog":Ee("cancel",e),Ee("close",e),a=r;break;case"iframe":case"object":case"embed":Ee("load",e),a=r;break;case"video":case"audio":for(a=0;a<Pa.length;a++)Ee(Pa[a],e);a=r;break;case"source":Ee("error",e),a=r;break;case"img":case"image":case"link":Ee("error",e),Ee("load",e),a=r;break;case"details":Ee("toggle",e),a=r;break;case"input":Yd(e,r),a=Ul(e,r),Ee("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=Ce({},r,{value:void 0}),Ee("invalid",e);break;case"textarea":Gd(e,r),a=Yl(e,r),Ee("invalid",e);break;default:a=r}Gl(n,a),l=a;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?tm(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Zp(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Xa(e,u):typeof u=="number"&&Xa(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ka.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Ee("scroll",e):u!=null&&dc(e,i,u,o))}switch(n){case"input":Di(e),Wd(e,r,!1);break;case"textarea":Di(e),Vd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?jr(e,!!r.multiple,i,!1):r.defaultValue!=null&&jr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ns)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Xe(t),null;case 6:if(e&&t.stateNode!=null)S0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=nr(li.current),nr(rn.current),qi(t)){if(r=t.stateNode,n=t.memoizedProps,r[tn]=t,(i=r.nodeValue!==n)&&(e=_t,e!==null))switch(e.tag){case 3:zi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zi(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tn]=t,t.stateNode=r}return Xe(t),null;case 13:if(Te(Se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_e&&vt!==null&&t.mode&1&&!(t.flags&128))zm(),$r(),t.flags|=98560,i=!1;else if(i=qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(j(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[tn]=t}else $r(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Xe(t),i=!1}else Yt!==null&&(Nu(Yt),Yt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Se.current&1?Ue===0&&(Ue=3):Vc())),t.updateQueue!==null&&(t.flags|=4),Xe(t),null);case 4:return Kr(),bu(e,t),e===null&&ai(t.stateNode.containerInfo),Xe(t),null;case 10:return Ic(t.type._context),Xe(t),null;case 17:return pt(t.type)&&ws(),Xe(t),null;case 19:if(Te(Se),i=t.memoizedState,i===null)return Xe(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)va(i,!1);else{if(Ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Os(e),o!==null){for(t.flags|=128,va(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return xe(Se,Se.current&1|2),t.child}e=e.sibling}i.tail!==null&&Re()>Jr&&(t.flags|=128,r=!0,va(i,!1),t.lanes=4194304)}else{if(!r)if(e=Os(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),va(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!_e)return Xe(t),null}else 2*Re()-i.renderingStartTime>Jr&&n!==1073741824&&(t.flags|=128,r=!0,va(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Re(),t.sibling=null,n=Se.current,xe(Se,r?n&1|2:n&1),t):(Xe(t),null);case 22:case 23:return Gc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Tt&1073741824&&(Xe(t),t.subtreeFlags&6&&(t.flags|=8192)):Xe(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Ab(e,t){switch(Cc(t),t.tag){case 1:return pt(t.type)&&ws(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kr(),Te(ft),Te(et),Oc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Dc(t),null;case 13:if(Te(Se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));$r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Te(Se),null;case 4:return Kr(),null;case 10:return Ic(t.type._context),null;case 22:case 23:return Gc(),null;case 24:return null;default:return null}}var Gi=!1,Je=!1,Ib=typeof WeakSet=="function"?WeakSet:Set,W=null;function Dr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(e,t,r)}else n.current=null}function Eu(e,t,n){try{n()}catch(r){Pe(e,t,r)}}var Mh=!1;function Pb(e,t){if(ru=Ss,e=Am(),Sc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,d=0,f=0,h=e,p=null;t:for(;;){for(var m;h!==n||a!==0&&h.nodeType!==3||(l=o+a),h!==i||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)p=h,h=m;for(;;){if(h===e)break t;if(p===n&&++d===a&&(l=o),p===i&&++f===r&&(u=o),(m=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=m}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(au={focusedElem:e,selectionRange:n},Ss=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var S=x.memoizedProps,A=x.memoizedState,g=t.stateNode,y=g.getSnapshotBeforeUpdate(t.elementType===t.type?S:zt(t.type,S),A);g.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var E=t.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(N){Pe(t,t.return,N)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return x=Mh,Mh=!1,x}function Ba(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Eu(t,n,i)}a=a.next}while(a!==r)}}function oo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Tu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function k0(e){var t=e.alternate;t!==null&&(e.alternate=null,k0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tn],delete t[si],delete t[ou],delete t[fb],delete t[pb])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function C0(e){return e.tag===5||e.tag===3||e.tag===4}function jh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||C0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ns));else if(r!==4&&(e=e.child,e!==null))for(vu(e,t,n),e=e.sibling;e!==null;)vu(e,t,n),e=e.sibling}function _u(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(_u(e,t,n),e=e.sibling;e!==null;)_u(e,t,n),e=e.sibling}var Ve=null,qt=!1;function vn(e,t,n){for(n=n.child;n!==null;)N0(e,t,n),n=n.sibling}function N0(e,t,n){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Zs,n)}catch{}switch(n.tag){case 5:Je||Dr(n,t);case 6:var r=Ve,a=qt;Ve=null,vn(e,t,n),Ve=r,qt=a,Ve!==null&&(qt?(e=Ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ve.removeChild(n.stateNode));break;case 18:Ve!==null&&(qt?(e=Ve,n=n.stateNode,e.nodeType===8?rl(e.parentNode,n):e.nodeType===1&&rl(e,n),ti(e)):rl(Ve,n.stateNode));break;case 4:r=Ve,a=qt,Ve=n.stateNode.containerInfo,qt=!0,vn(e,t,n),Ve=r,qt=a;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Eu(n,t,o),a=a.next}while(a!==r)}vn(e,t,n);break;case 1:if(!Je&&(Dr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Pe(n,t,l)}vn(e,t,n);break;case 21:vn(e,t,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,vn(e,t,n),Je=r):vn(e,t,n);break;default:vn(e,t,n)}}function Fh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ib),t.forEach(function(r){var a=Hb.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function Ht(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ve=l.stateNode,qt=!1;break e;case 3:Ve=l.stateNode.containerInfo,qt=!0;break e;case 4:Ve=l.stateNode.containerInfo,qt=!0;break e}l=l.return}if(Ve===null)throw Error(j(160));N0(i,o,a),Ve=null,qt=!1;var u=a.alternate;u!==null&&(u.return=null),a.return=null}catch(d){Pe(a,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)w0(t,e),t=t.sibling}function w0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ht(t,e),Xt(e),r&4){try{Ba(3,e,e.return),oo(3,e)}catch(S){Pe(e,e.return,S)}try{Ba(5,e,e.return)}catch(S){Pe(e,e.return,S)}}break;case 1:Ht(t,e),Xt(e),r&512&&n!==null&&Dr(n,n.return);break;case 5:if(Ht(t,e),Xt(e),r&512&&n!==null&&Dr(n,n.return),e.flags&32){var a=e.stateNode;try{Xa(a,"")}catch(S){Pe(e,e.return,S)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Kp(a,i),Vl(l,o);var d=Vl(l,i);for(o=0;o<u.length;o+=2){var f=u[o],h=u[o+1];f==="style"?tm(a,h):f==="dangerouslySetInnerHTML"?Zp(a,h):f==="children"?Xa(a,h):dc(a,f,h,d)}switch(l){case"input":zl(a,i);break;case"textarea":Xp(a,i);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?jr(a,!!i.multiple,m,!1):p!==!!i.multiple&&(i.defaultValue!=null?jr(a,!!i.multiple,i.defaultValue,!0):jr(a,!!i.multiple,i.multiple?[]:"",!1))}a[si]=i}catch(S){Pe(e,e.return,S)}}break;case 6:if(Ht(t,e),Xt(e),r&4){if(e.stateNode===null)throw Error(j(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(S){Pe(e,e.return,S)}}break;case 3:if(Ht(t,e),Xt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ti(t.containerInfo)}catch(S){Pe(e,e.return,S)}break;case 4:Ht(t,e),Xt(e);break;case 13:Ht(t,e),Xt(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Yc=Re())),r&4&&Fh(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Je=(d=Je)||f,Ht(t,e),Je=d):Ht(t,e),Xt(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!f&&e.mode&1)for(W=e,f=e.child;f!==null;){for(h=W=f;W!==null;){switch(p=W,m=p.child,p.tag){case 0:case 11:case 14:case 15:Ba(4,p,p.return);break;case 1:Dr(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(S){Pe(r,n,S)}}break;case 5:Dr(p,p.return);break;case 22:if(p.memoizedState!==null){Hh(h);continue}}m!==null?(m.return=p,W=m):Hh(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{a=h.stateNode,d?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=em("display",o))}catch(S){Pe(e,e.return,S)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(S){Pe(e,e.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ht(t,e),Xt(e),r&4&&Fh(e);break;case 21:break;default:Ht(t,e),Xt(e)}}function Xt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(C0(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Xa(a,""),r.flags&=-33);var i=jh(e);_u(e,i,a);break;case 3:case 4:var o=r.stateNode.containerInfo,l=jh(e);vu(e,l,o);break;default:throw Error(j(161))}}catch(u){Pe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Lb(e,t,n){W=e,A0(e)}function A0(e,t,n){for(var r=(e.mode&1)!==0;W!==null;){var a=W,i=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||Gi;if(!o){var l=a.alternate,u=l!==null&&l.memoizedState!==null||Je;l=Gi;var d=Je;if(Gi=o,(Je=u)&&!d)for(W=a;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?Uh(a):u!==null?(u.return=o,W=u):Uh(a);for(;i!==null;)W=i,A0(i),i=i.sibling;W=a,Gi=l,Je=d}Bh(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,W=i):Bh(e)}}function Bh(e){for(;W!==null;){var t=W;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Je||oo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Je)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:zt(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&_h(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}_h(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&ti(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}Je||t.flags&512&&Tu(t)}catch(p){Pe(t,t.return,p)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function Hh(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function Uh(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{oo(4,t)}catch(u){Pe(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(u){Pe(t,a,u)}}var i=t.return;try{Tu(t)}catch(u){Pe(t,i,u)}break;case 5:var o=t.return;try{Tu(t)}catch(u){Pe(t,o,u)}}}catch(u){Pe(t,t.return,u)}if(t===e){W=null;break}var l=t.sibling;if(l!==null){l.return=t.return,W=l;break}W=t.return}}var Rb=Math.ceil,Fs=bn.ReactCurrentDispatcher,zc=bn.ReactCurrentOwner,Dt=bn.ReactCurrentBatchConfig,ue=0,We=null,Fe=null,$e=0,Tt=0,Or=Gn(0),Ue=0,hi=null,cr=0,lo=0,qc=0,Ha=null,dt=null,Yc=0,Jr=1/0,un=null,Bs=!1,Su=null,Bn=null,Vi=!1,Pn=null,Hs=0,Ua=0,ku=null,ds=-1,hs=0;function it(){return ue&6?Re():ds!==-1?ds:ds=Re()}function Hn(e){return e.mode&1?ue&2&&$e!==0?$e&-$e:gb.transition!==null?(hs===0&&(hs=fm()),hs):(e=ce,e!==0||(e=window.event,e=e===void 0?16:Em(e.type)),e):1}function Gt(e,t,n,r){if(50<Ua)throw Ua=0,ku=null,Error(j(185));bi(e,n,r),(!(ue&2)||e!==We)&&(e===We&&(!(ue&2)&&(lo|=n),Ue===4&&An(e,$e)),mt(e,r),n===1&&ue===0&&!(t.mode&1)&&(Jr=Re()+500,ao&&Vn()))}function mt(e,t){var n=e.callbackNode;gx(e,t);var r=_s(e,e===We?$e:0);if(r===0)n!==null&&Kd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Kd(n),t===1)e.tag===0?mb(zh.bind(null,e)):Bm(zh.bind(null,e)),db(function(){!(ue&6)&&Vn()}),n=null;else{switch(pm(r)){case 1:n=gc;break;case 4:n=dm;break;case 16:n=vs;break;case 536870912:n=hm;break;default:n=vs}n=j0(n,I0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function I0(e,t){if(ds=-1,hs=0,ue&6)throw Error(j(327));var n=e.callbackNode;if(zr()&&e.callbackNode!==n)return null;var r=_s(e,e===We?$e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Us(e,r);else{t=r;var a=ue;ue|=2;var i=L0();(We!==e||$e!==t)&&(un=null,Jr=Re()+500,ar(e,t));do try{Mb();break}catch(l){P0(e,l)}while(!0);Ac(),Fs.current=i,ue=a,Fe!==null?t=0:(We=null,$e=0,t=Ue)}if(t!==0){if(t===2&&(a=Jl(e),a!==0&&(r=a,t=Cu(e,a))),t===1)throw n=hi,ar(e,0),An(e,r),mt(e,Re()),n;if(t===6)An(e,r);else{if(a=e.current.alternate,!(r&30)&&!Db(a)&&(t=Us(e,r),t===2&&(i=Jl(e),i!==0&&(r=i,t=Cu(e,i))),t===1))throw n=hi,ar(e,0),An(e,r),mt(e,Re()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Jn(e,dt,un);break;case 3:if(An(e,r),(r&130023424)===r&&(t=Yc+500-Re(),10<t)){if(_s(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){it(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=su(Jn.bind(null,e,dt,un),t);break}Jn(e,dt,un);break;case 4:if(An(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-Wt(r);i=1<<o,o=t[o],o>a&&(a=o),r&=~i}if(r=a,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rb(r/1960))-r,10<r){e.timeoutHandle=su(Jn.bind(null,e,dt,un),r);break}Jn(e,dt,un);break;case 5:Jn(e,dt,un);break;default:throw Error(j(329))}}}return mt(e,Re()),e.callbackNode===n?I0.bind(null,e):null}function Cu(e,t){var n=Ha;return e.current.memoizedState.isDehydrated&&(ar(e,t).flags|=256),e=Us(e,t),e!==2&&(t=dt,dt=n,t!==null&&Nu(t)),e}function Nu(e){dt===null?dt=e:dt.push.apply(dt,e)}function Db(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!$t(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function An(e,t){for(t&=~qc,t&=~lo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Wt(t),r=1<<n;e[n]=-1,t&=~r}}function zh(e){if(ue&6)throw Error(j(327));zr();var t=_s(e,0);if(!(t&1))return mt(e,Re()),null;var n=Us(e,t);if(e.tag!==0&&n===2){var r=Jl(e);r!==0&&(t=r,n=Cu(e,r))}if(n===1)throw n=hi,ar(e,0),An(e,t),mt(e,Re()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jn(e,dt,un),mt(e,Re()),null}function Wc(e,t){var n=ue;ue|=1;try{return e(t)}finally{ue=n,ue===0&&(Jr=Re()+500,ao&&Vn())}}function dr(e){Pn!==null&&Pn.tag===0&&!(ue&6)&&zr();var t=ue;ue|=1;var n=Dt.transition,r=ce;try{if(Dt.transition=null,ce=1,e)return e()}finally{ce=r,Dt.transition=n,ue=t,!(ue&6)&&Vn()}}function Gc(){Tt=Or.current,Te(Or)}function ar(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,cb(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(Cc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ws();break;case 3:Kr(),Te(ft),Te(et),Oc();break;case 5:Dc(r);break;case 4:Kr();break;case 13:Te(Se);break;case 19:Te(Se);break;case 10:Ic(r.type._context);break;case 22:case 23:Gc()}n=n.return}if(We=e,Fe=e=Un(e.current,null),$e=Tt=t,Ue=0,hi=null,qc=lo=cr=0,dt=Ha=null,tr!==null){for(t=0;t<tr.length;t++)if(n=tr[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=a,r.next=o}n.pending=r}tr=null}return e}function P0(e,t){do{var n=Fe;try{if(Ac(),ls.current=js,Ms){for(var r=ke.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Ms=!1}if(ur=0,qe=He=ke=null,Fa=!1,ui=0,zc.current=null,n===null||n.return===null){Ue=1,hi=t,Fe=null;break}e:{var i=e,o=n.return,l=n,u=t;if(t=$e,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=l,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Ah(o);if(m!==null){m.flags&=-257,Ih(m,o,l,i,t),m.mode&1&&wh(i,d,t),t=m,u=d;var x=t.updateQueue;if(x===null){var S=new Set;S.add(u),t.updateQueue=S}else x.add(u);break e}else{if(!(t&1)){wh(i,d,t),Vc();break e}u=Error(j(426))}}else if(_e&&l.mode&1){var A=Ah(o);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Ih(A,o,l,i,t),Nc(Xr(u,l));break e}}i=u=Xr(u,l),Ue!==4&&(Ue=2),Ha===null?Ha=[i]:Ha.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=p0(i,u,t);vh(i,g);break e;case 1:l=u;var y=i.type,E=i.stateNode;if(!(i.flags&128)&&(typeof y.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Bn===null||!Bn.has(E)))){i.flags|=65536,t&=-t,i.lanes|=t;var N=m0(i,l,t);vh(i,N);break e}}i=i.return}while(i!==null)}D0(n)}catch(P){t=P,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(!0)}function L0(){var e=Fs.current;return Fs.current=js,e===null?js:e}function Vc(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),We===null||!(cr&268435455)&&!(lo&268435455)||An(We,$e)}function Us(e,t){var n=ue;ue|=2;var r=L0();(We!==e||$e!==t)&&(un=null,ar(e,t));do try{Ob();break}catch(a){P0(e,a)}while(!0);if(Ac(),ue=n,Fs.current=r,Fe!==null)throw Error(j(261));return We=null,$e=0,Ue}function Ob(){for(;Fe!==null;)R0(Fe)}function Mb(){for(;Fe!==null&&!ox();)R0(Fe)}function R0(e){var t=M0(e.alternate,e,Tt);e.memoizedProps=e.pendingProps,t===null?D0(e):Fe=t,zc.current=null}function D0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ab(n,t),n!==null){n.flags&=32767,Fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ue=6,Fe=null;return}}else if(n=wb(n,t,Tt),n!==null){Fe=n;return}if(t=t.sibling,t!==null){Fe=t;return}Fe=t=e}while(t!==null);Ue===0&&(Ue=5)}function Jn(e,t,n){var r=ce,a=Dt.transition;try{Dt.transition=null,ce=1,jb(e,t,n,r)}finally{Dt.transition=a,ce=r}return null}function jb(e,t,n,r){do zr();while(Pn!==null);if(ue&6)throw Error(j(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(yx(e,i),e===We&&(Fe=We=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Vi||(Vi=!0,j0(vs,function(){return zr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Dt.transition,Dt.transition=null;var o=ce;ce=1;var l=ue;ue|=4,zc.current=null,Pb(e,n),w0(n,e),rb(au),Ss=!!ru,au=ru=null,e.current=n,Lb(n),lx(),ue=l,ce=o,Dt.transition=i}else e.current=n;if(Vi&&(Vi=!1,Pn=e,Hs=a),i=e.pendingLanes,i===0&&(Bn=null),dx(n.stateNode),mt(e,Re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Bs)throw Bs=!1,e=Su,Su=null,e;return Hs&1&&e.tag!==0&&zr(),i=e.pendingLanes,i&1?e===ku?Ua++:(Ua=0,ku=e):Ua=0,Vn(),null}function zr(){if(Pn!==null){var e=pm(Hs),t=Dt.transition,n=ce;try{if(Dt.transition=null,ce=16>e?16:e,Pn===null)var r=!1;else{if(e=Pn,Pn=null,Hs=0,ue&6)throw Error(j(331));var a=ue;for(ue|=4,W=e.current;W!==null;){var i=W,o=i.child;if(W.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(W=d;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:Ba(8,f,i)}var h=f.child;if(h!==null)h.return=f,W=h;else for(;W!==null;){f=W;var p=f.sibling,m=f.return;if(k0(f),f===d){W=null;break}if(p!==null){p.return=m,W=p;break}W=m}}}var x=i.alternate;if(x!==null){var S=x.child;if(S!==null){x.child=null;do{var A=S.sibling;S.sibling=null,S=A}while(S!==null)}}W=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,W=o;else e:for(;W!==null;){if(i=W,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ba(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,W=g;break e}W=i.return}}var y=e.current;for(W=y;W!==null;){o=W;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,W=E;else e:for(o=y;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:oo(9,l)}}catch(P){Pe(l,l.return,P)}if(l===o){W=null;break e}var N=l.sibling;if(N!==null){N.return=l.return,W=N;break e}W=l.return}}if(ue=a,Vn(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Zs,e)}catch{}r=!0}return r}finally{ce=n,Dt.transition=t}}return!1}function qh(e,t,n){t=Xr(n,t),t=p0(e,t,1),e=Fn(e,t,1),t=it(),e!==null&&(bi(e,1,t),mt(e,t))}function Pe(e,t,n){if(e.tag===3)qh(e,e,n);else for(;t!==null;){if(t.tag===3){qh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bn===null||!Bn.has(r))){e=Xr(n,e),e=m0(t,e,1),t=Fn(t,e,1),e=it(),t!==null&&(bi(t,1,e),mt(t,e));break}}t=t.return}}function Fb(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=it(),e.pingedLanes|=e.suspendedLanes&n,We===e&&($e&n)===n&&(Ue===4||Ue===3&&($e&130023424)===$e&&500>Re()-Yc?ar(e,0):qc|=n),mt(e,t)}function O0(e,t){t===0&&(e.mode&1?(t=ji,ji<<=1,!(ji&130023424)&&(ji=4194304)):t=1);var n=it();e=yn(e,t),e!==null&&(bi(e,t,n),mt(e,n))}function Bb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),O0(e,n)}function Hb(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),O0(e,n)}var M0;M0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ft.current)ht=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ht=!1,Nb(e,t,n);ht=!!(e.flags&131072)}else ht=!1,_e&&t.flags&1048576&&Hm(t,Ps,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;cs(e,t),e=t.pendingProps;var a=Vr(t,et.current);Ur(t,n),a=jc(null,t,r,e,a,n);var i=Fc();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pt(r)?(i=!0,As(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Lc(t),a.updater=so,t.stateNode=a,a._reactInternals=t,fu(t,r,e,n),t=gu(null,t,r,!0,i,n)):(t.tag=0,_e&&i&&kc(t),rt(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(cs(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=zb(r),e=zt(r,e),a){case 0:t=mu(null,t,r,e,n);break e;case 1:t=Rh(null,t,r,e,n);break e;case 11:t=Ph(null,t,r,e,n);break e;case 14:t=Lh(null,t,r,zt(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:zt(r,a),mu(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:zt(r,a),Rh(e,t,r,a,n);case 3:e:{if(b0(t),e===null)throw Error(j(387));r=t.pendingProps,i=t.memoizedState,a=i.element,Gm(e,t),Ds(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=Xr(Error(j(423)),t),t=Dh(e,t,r,n,a);break e}else if(r!==a){a=Xr(Error(j(424)),t),t=Dh(e,t,r,n,a);break e}else for(vt=jn(t.stateNode.containerInfo.firstChild),_t=t,_e=!0,Yt=null,n=Ym(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($r(),r===a){t=xn(e,t,n);break e}rt(e,t,r,n)}t=t.child}return t;case 5:return Vm(t),e===null&&cu(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,iu(r,a)?o=null:i!==null&&iu(r,i)&&(t.flags|=32),x0(e,t),rt(e,t,o,n),t.child;case 6:return e===null&&cu(t),null;case 13:return E0(e,t,n);case 4:return Rc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Qr(t,null,r,n):rt(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:zt(r,a),Ph(e,t,r,a,n);case 7:return rt(e,t,t.pendingProps,n),t.child;case 8:return rt(e,t,t.pendingProps.children,n),t.child;case 12:return rt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,xe(Ls,r._currentValue),r._currentValue=o,i!==null)if($t(i.value,o)){if(i.children===a.children&&!ft.current){t=xn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=pn(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),du(i.return,n,t),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),du(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}rt(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Ur(t,n),a=Ot(a),r=r(a),t.flags|=1,rt(e,t,r,n),t.child;case 14:return r=t.type,a=zt(r,t.pendingProps),a=zt(r.type,a),Lh(e,t,r,a,n);case 15:return g0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:zt(r,a),cs(e,t),t.tag=1,pt(r)?(e=!0,As(t)):e=!1,Ur(t,n),f0(t,r,a),fu(t,r,a,n),gu(null,t,r,!0,e,n);case 19:return T0(e,t,n);case 22:return y0(e,t,n)}throw Error(j(156,t.tag))};function j0(e,t){return cm(e,t)}function Ub(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(e,t,n,r){return new Ub(e,t,n,r)}function $c(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zb(e){if(typeof e=="function")return $c(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fc)return 11;if(e===pc)return 14}return 2}function Un(e,t){var n=e.alternate;return n===null?(n=Rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function fs(e,t,n,r,a,i){var o=2;if(r=e,typeof e=="function")$c(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case kr:return ir(n.children,a,i,t);case hc:o=8,a|=8;break;case jl:return e=Rt(12,n,t,a|2),e.elementType=jl,e.lanes=i,e;case Fl:return e=Rt(13,n,t,a),e.elementType=Fl,e.lanes=i,e;case Bl:return e=Rt(19,n,t,a),e.elementType=Bl,e.lanes=i,e;case Vp:return uo(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wp:o=10;break e;case Gp:o=9;break e;case fc:o=11;break e;case pc:o=14;break e;case Cn:o=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Rt(o,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function ir(e,t,n,r){return e=Rt(7,e,r,t),e.lanes=n,e}function uo(e,t,n,r){return e=Rt(22,e,r,t),e.elementType=Vp,e.lanes=n,e.stateNode={isHidden:!1},e}function dl(e,t,n){return e=Rt(6,e,null,t),e.lanes=n,e}function hl(e,t,n){return t=Rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function qb(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Go(0),this.expirationTimes=Go(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Go(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Qc(e,t,n,r,a,i,o,l,u){return e=new qb(e,t,n,l,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Rt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lc(i),e}function Yb(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function F0(e){if(!e)return qn;e=e._reactInternals;e:{if(pr(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(pt(n))return Fm(e,n,t)}return t}function B0(e,t,n,r,a,i,o,l,u){return e=Qc(n,r,!0,e,a,i,o,l,u),e.context=F0(null),n=e.current,r=it(),a=Hn(n),i=pn(r,a),i.callback=t??null,Fn(n,i,a),e.current.lanes=a,bi(e,a,r),mt(e,r),e}function co(e,t,n,r){var a=t.current,i=it(),o=Hn(a);return n=F0(n),t.context===null?t.context=n:t.pendingContext=n,t=pn(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Fn(a,t,o),e!==null&&(Gt(e,a,o,i),os(e,a,o)),o}function zs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Yh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Kc(e,t){Yh(e,t),(e=e.alternate)&&Yh(e,t)}function Wb(){return null}var H0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xc(e){this._internalRoot=e}ho.prototype.render=Xc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));co(e,t,null,null)};ho.prototype.unmount=Xc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dr(function(){co(null,e,null,null)}),t[gn]=null}};function ho(e){this._internalRoot=e}ho.prototype.unstable_scheduleHydration=function(e){if(e){var t=ym();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wn.length&&t!==0&&t<wn[n].priority;n++);wn.splice(n,0,e),n===0&&bm(e)}};function Jc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wh(){}function Gb(e,t,n,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var d=zs(o);i.call(d)}}var o=B0(t,r,e,0,null,!1,!1,"",Wh);return e._reactRootContainer=o,e[gn]=o.current,ai(e.nodeType===8?e.parentNode:e),dr(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var l=r;r=function(){var d=zs(u);l.call(d)}}var u=Qc(e,0,!1,null,null,!1,!1,"",Wh);return e._reactRootContainer=u,e[gn]=u.current,ai(e.nodeType===8?e.parentNode:e),dr(function(){co(t,u,n,r)}),u}function po(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var l=a;a=function(){var u=zs(o);l.call(u)}}co(t,o,e,a)}else o=Gb(n,t,e,a,r);return zs(o)}mm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ia(t.pendingLanes);n!==0&&(yc(t,n|1),mt(t,Re()),!(ue&6)&&(Jr=Re()+500,Vn()))}break;case 13:dr(function(){var r=yn(e,1);if(r!==null){var a=it();Gt(r,e,1,a)}}),Kc(e,1)}};xc=function(e){if(e.tag===13){var t=yn(e,134217728);if(t!==null){var n=it();Gt(t,e,134217728,n)}Kc(e,134217728)}};gm=function(e){if(e.tag===13){var t=Hn(e),n=yn(e,t);if(n!==null){var r=it();Gt(n,e,t,r)}Kc(e,t)}};ym=function(){return ce};xm=function(e,t){var n=ce;try{return ce=e,t()}finally{ce=n}};Ql=function(e,t,n){switch(t){case"input":if(zl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=ro(r);if(!a)throw Error(j(90));Qp(r),zl(r,a)}}}break;case"textarea":Xp(e,n);break;case"select":t=n.value,t!=null&&jr(e,!!n.multiple,t,!1)}};am=Wc;im=dr;var Vb={usingClientEntryPoint:!1,Events:[Ti,Ar,ro,nm,rm,Wc]},_a={findFiberByHostInstance:er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$b={bundleType:_a.bundleType,version:_a.version,rendererPackageName:_a.rendererPackageName,rendererConfig:_a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lm(e),e===null?null:e.stateNode},findFiberByHostInstance:_a.findFiberByHostInstance||Wb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$i.isDisabled&&$i.supportsFiber)try{Zs=$i.inject($b),nn=$i}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vb;Ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jc(t))throw Error(j(200));return Yb(e,t,null,n)};Ct.createRoot=function(e,t){if(!Jc(e))throw Error(j(299));var n=!1,r="",a=H0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Qc(e,1,!1,null,null,n,!1,r,a),e[gn]=t.current,ai(e.nodeType===8?e.parentNode:e),new Xc(t)};Ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=lm(t),e=e===null?null:e.stateNode,e};Ct.flushSync=function(e){return dr(e)};Ct.hydrate=function(e,t,n){if(!fo(t))throw Error(j(200));return po(null,e,t,!0,n)};Ct.hydrateRoot=function(e,t,n){if(!Jc(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,a=!1,i="",o=H0;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=B0(t,null,e,1,n??null,a,!1,i,o),e[gn]=t.current,ai(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new ho(t)};Ct.render=function(e,t,n){if(!fo(t))throw Error(j(200));return po(null,e,t,!1,n)};Ct.unmountComponentAtNode=function(e){if(!fo(e))throw Error(j(40));return e._reactRootContainer?(dr(function(){po(null,null,e,!1,function(){e._reactRootContainer=null,e[gn]=null})}),!0):!1};Ct.unstable_batchedUpdates=Wc;Ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!fo(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return po(e,t,n,!1,r)};Ct.version="18.3.1-next-f1338f8080-20240426";function U0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(U0)}catch(e){console.error(e)}}U0(),Up.exports=Ct;var Qb=Up.exports,z0,Gh=Qb;z0=Gh.createRoot,Gh.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qs(){return qs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qs.apply(this,arguments)}var Ln;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ln||(Ln={}));const Vh="popstate";function Kb(e){e===void 0&&(e={});function t(a,i){let{pathname:o="/",search:l="",hash:u=""}=_i(a.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),wu("",{pathname:o,search:l,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(a,i){let o=a.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let u=a.location.href,d=u.indexOf("#");l=d===-1?u:u.slice(0,d)}return l+"#"+(typeof i=="string"?i:q0(i))}function r(a,i){Zc(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Jb(t,n,r,e)}function gt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Zc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Xb(){return Math.random().toString(36).substr(2,8)}function $h(e,t){return{usr:e.state,key:e.key,idx:t}}function wu(e,t,n,r){return n===void 0&&(n=null),qs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?_i(t):t,{state:n,key:t&&t.key||r||Xb()})}function q0(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function _i(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Jb(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,o=a.history,l=Ln.Pop,u=null,d=f();d==null&&(d=0,o.replaceState(qs({},o.state,{idx:d}),""));function f(){return(o.state||{idx:null}).idx}function h(){l=Ln.Pop;let A=f(),g=A==null?null:A-d;d=A,u&&u({action:l,location:S.location,delta:g})}function p(A,g){l=Ln.Push;let y=wu(S.location,A,g);n&&n(y,A),d=f()+1;let E=$h(y,d),N=S.createHref(y);try{o.pushState(E,"",N)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;a.location.assign(N)}i&&u&&u({action:l,location:S.location,delta:1})}function m(A,g){l=Ln.Replace;let y=wu(S.location,A,g);n&&n(y,A),d=f();let E=$h(y,d),N=S.createHref(y);o.replaceState(E,"",N),i&&u&&u({action:l,location:S.location,delta:0})}function x(A){let g=a.location.origin!=="null"?a.location.origin:a.location.href,y=typeof A=="string"?A:q0(A);return y=y.replace(/ $/,"%20"),gt(g,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,g)}let S={get action(){return l},get location(){return e(a,o)},listen(A){if(u)throw new Error("A history only accepts one active listener");return a.addEventListener(Vh,h),u=A,()=>{a.removeEventListener(Vh,h),u=null}},createHref(A){return t(a,A)},createURL:x,encodeLocation(A){let g=x(A);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:m,go(A){return o.go(A)}};return S}var Qh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Qh||(Qh={}));function Zb(e,t,n){return n===void 0&&(n="/"),e2(e,t,n,!1)}function e2(e,t,n,r){let a=typeof t=="string"?_i(t):t,i=G0(a.pathname||"/",n);if(i==null)return null;let o=Y0(e);t2(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let d=h2(i);l=c2(o[u],d,r)}return l}function Y0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(i,o,l)=>{let u={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};u.relativePath.startsWith("/")&&(gt(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=qr([r,u.relativePath]),f=n.concat(u);i.children&&i.children.length>0&&(gt(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Y0(i.children,t,f,d)),!(i.path==null&&!i.index)&&t.push({path:d,score:l2(d,i.index),routesMeta:f})};return e.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))a(i,o);else for(let u of W0(i.path))a(i,o,u)}),t}function W0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let o=W0(r.join("/")),l=[];return l.push(...o.map(u=>u===""?i:[i,u].join("/"))),a&&l.push(...o),l.map(u=>e.startsWith("/")&&u===""?"/":u)}function t2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:u2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const n2=/^:[\w-]+$/,r2=3,a2=2,i2=1,s2=10,o2=-2,Kh=e=>e==="*";function l2(e,t){let n=e.split("/"),r=n.length;return n.some(Kh)&&(r+=o2),t&&(r+=a2),n.filter(a=>!Kh(a)).reduce((a,i)=>a+(n2.test(i)?r2:i===""?i2:s2),r)}function u2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function c2(e,t,n){let{routesMeta:r}=e,a={},i="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],d=l===r.length-1,f=i==="/"?t:t.slice(i.length)||"/",h=Xh({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},f),p=u.route;if(!h&&d&&n&&!r[r.length-1].route.index&&(h=Xh({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!h)return null;Object.assign(a,h.params),o.push({params:a,pathname:qr([i,h.pathname]),pathnameBase:f2(qr([i,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(i=qr([i,h.pathnameBase]))}return o}function Xh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=d2(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce((d,f,h)=>{let{paramName:p,isOptional:m}=f;if(p==="*"){let S=l[h]||"";o=i.slice(0,i.length-S.length).replace(/(.)\/+$/,"$1")}const x=l[h];return m&&!x?d[p]=void 0:d[p]=(x||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:o,pattern:e}}function d2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Zc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function h2(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Zc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function G0(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const qr=e=>e.join("/").replace(/\/\/+/g,"/"),f2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");function p2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const V0=["post","put","patch","delete"];new Set(V0);const m2=["get",...V0];new Set(m2);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ys(){return Ys=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ys.apply(this,arguments)}const g2=q.createContext(null),y2=q.createContext(null),$0=q.createContext(null),mo=q.createContext(null),Si=q.createContext({outlet:null,matches:[],isDataRoute:!1}),Q0=q.createContext(null);function ed(){return q.useContext(mo)!=null}function x2(){return ed()||gt(!1),q.useContext(mo).location}function b2(){let{matches:e}=q.useContext(Si),t=e[e.length-1];return t?t.params:{}}function E2(e,t){return T2(e,t)}function T2(e,t,n,r){ed()||gt(!1);let{navigator:a}=q.useContext($0),{matches:i}=q.useContext(Si),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let d=x2(),f;if(t){var h;let A=typeof t=="string"?_i(t):t;u==="/"||(h=A.pathname)!=null&&h.startsWith(u)||gt(!1),f=A}else f=d;let p=f.pathname||"/",m=p;if(u!=="/"){let A=u.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(A.length).join("/")}let x=Zb(e,{pathname:m}),S=C2(x&&x.map(A=>Object.assign({},A,{params:Object.assign({},l,A.params),pathname:qr([u,a.encodeLocation?a.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?u:qr([u,a.encodeLocation?a.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),i,n,r);return t&&S?q.createElement(mo.Provider,{value:{location:Ys({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Ln.Pop}},S):S}function v2(){let e=I2(),t=p2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},t),n?q.createElement("pre",{style:a},n):null,null)}const _2=q.createElement(v2,null);class S2 extends q.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?q.createElement(Si.Provider,{value:this.props.routeContext},q.createElement(Q0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function k2(e){let{routeContext:t,match:n,children:r}=e,a=q.useContext(g2);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),q.createElement(Si.Provider,{value:t},r)}function C2(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,l=(a=n)==null?void 0:a.errors;if(l!=null){let f=o.findIndex(h=>h.route.id&&(l==null?void 0:l[h.route.id])!==void 0);f>=0||gt(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let h=o[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=f),h.route.id){let{loaderData:p,errors:m}=n,x=h.route.loader&&p[h.route.id]===void 0&&(!m||m[h.route.id]===void 0);if(h.route.lazy||x){u=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((f,h,p)=>{let m,x=!1,S=null,A=null;n&&(m=l&&h.route.id?l[h.route.id]:void 0,S=h.route.errorElement||_2,u&&(d<0&&p===0?(x=!0,A=null):d===p&&(x=!0,A=h.route.hydrateFallbackElement||null)));let g=t.concat(o.slice(0,p+1)),y=()=>{let E;return m?E=S:x?E=A:h.route.Component?E=q.createElement(h.route.Component,null):h.route.element?E=h.route.element:E=f,q.createElement(k2,{match:h,routeContext:{outlet:f,matches:g,isDataRoute:n!=null},children:E})};return n&&(h.route.ErrorBoundary||h.route.errorElement||p===0)?q.createElement(S2,{location:n.location,revalidation:n.revalidation,component:S,error:m,children:y(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):y()},null)}var Au=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Au||{});function N2(e){let t=q.useContext(y2);return t||gt(!1),t}function w2(e){let t=q.useContext(Si);return t||gt(!1),t}function A2(e){let t=w2(),n=t.matches[t.matches.length-1];return n.route.id||gt(!1),n.route.id}function I2(){var e;let t=q.useContext(Q0),n=N2(Au.UseRouteError),r=A2(Au.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function P2(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Z(e){gt(!1)}function L2(e){let{basename:t="/",children:n=null,location:r,navigationType:a=Ln.Pop,navigator:i,static:o=!1,future:l}=e;ed()&&gt(!1);let u=t.replace(/^\/*/,"/"),d=q.useMemo(()=>({basename:u,navigator:i,static:o,future:Ys({v7_relativeSplatPath:!1},l)}),[u,l,i,o]);typeof r=="string"&&(r=_i(r));let{pathname:f="/",search:h="",hash:p="",state:m=null,key:x="default"}=r,S=q.useMemo(()=>{let A=G0(f,u);return A==null?null:{location:{pathname:A,search:h,hash:p,state:m,key:x},navigationType:a}},[u,f,h,p,m,x,a]);return S==null?null:q.createElement($0.Provider,{value:d},q.createElement(mo.Provider,{children:n,value:S}))}function R2(e){let{children:t,location:n}=e;return E2(Iu(t),n)}new Promise(()=>{});function Iu(e,t){t===void 0&&(t=[]);let n=[];return q.Children.forEach(e,(r,a)=>{if(!q.isValidElement(r))return;let i=[...t,a];if(r.type===q.Fragment){n.push.apply(n,Iu(r.props.children,i));return}r.type!==Z&&gt(!1),!r.props.index||!r.props.children||gt(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Iu(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const D2="6";try{window.__reactRouterVersion=D2}catch{}const O2="startTransition",Jh=Fy[O2];function M2(e){let{basename:t,children:n,future:r,window:a}=e,i=q.useRef();i.current==null&&(i.current=Kb({window:a,v5Compat:!0}));let o=i.current,[l,u]=q.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},f=q.useCallback(h=>{d&&Jh?Jh(()=>u(h)):u(h)},[u,d]);return q.useLayoutEffect(()=>o.listen(f),[o,f]),q.useEffect(()=>P2(r),[r]),q.createElement(L2,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}var Zh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Zh||(Zh={}));var ef;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ef||(ef={}));/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var j2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ae=(e,t)=>{const n=q.forwardRef(({color:r="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:u,...d},f)=>q.createElement("svg",{ref:f,...j2,width:a,height:a,stroke:r,strokeWidth:o?Number(i)*24/Number(a):i,className:["lucide",`lucide-${F2(e)}`,l].join(" "),...d},[...t.map(([h,p])=>q.createElement(h,p)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=ae("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=ae("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=ae("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=ae("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=ae("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=ae("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=ae("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=ae("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=ae("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=ae("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=ae("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=ae("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=ae("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=ae("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=ae("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=ae("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=ae("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=ae("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=ae("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=ae("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=ae("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=ae("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=ae("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=ae("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=ae("PieChart",[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z",key:"1rfc4y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=ae("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=ae("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=ae("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=ae("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=ae("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=ae("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=ae("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=ae("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=ae("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=ae("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=ae("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),eE="/mozno-website-main/assets/Mozno_Logo_Horizontal-DmT6MV3G.png",tE=()=>{const[e,t]=q.useState(!1),[n,r]=q.useState(!1),a=[{name:"Wealth Management",href:"#/services/wealth-management"},{name:"Financial Planning",href:"#/services/financial-planning"},{name:"Tax Planning",href:"#/services/tax-planning"},{name:"Insurance Planning",href:"#/services/insurance-planning"},{name:"Borrowing Solutions",href:"#/services/borrowing-solutions"},{name:"Succession Planning",href:"#/services/succession-planning"}];return s.jsx("header",{className:"bg-white shadow-lg fixed w-full top-0 z-50",children:s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[s.jsxs("div",{className:"flex justify-between items-center py-4",children:[s.jsx("div",{className:"flex items-center",children:s.jsx("a",{href:"#/",className:"flex items-center space-x-3",children:s.jsx("img",{src:eE,alt:"Mozno Advisory Logo",className:"h-12 w-auto object-contain"})})}),s.jsxs("nav",{className:"hidden lg:flex items-center space-x-8",children:[s.jsx("a",{href:"#/",className:"text-gray-700 hover:text-green-600 font-medium transition-colors",children:"Home"}),s.jsx("a",{href:"#/about",className:"text-gray-700 hover:text-green-600 font-medium transition-colors",children:"About"}),s.jsxs("div",{className:"relative",children:[s.jsxs("button",{className:"flex items-center text-gray-700 hover:text-teal-600 font-medium transition-colors",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:["Services",s.jsx(z2,{className:"ml-1 h-4 w-4"})]}),n&&s.jsx("div",{className:"absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:a.map(i=>s.jsx("a",{href:i.href,className:"block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors",children:i.name},i.name))})]}),s.jsx("a",{href:"#/blog",className:"text-gray-700 hover:text-green-600 font-medium transition-colors",children:"Blog"}),s.jsx("a",{href:"#/videos",className:"text-gray-700 hover:text-green-600 font-medium transition-colors",children:"Videos"}),s.jsx("a",{href:"#/contact",className:"text-gray-700 hover:text-green-600 font-medium transition-colors",children:"Contact"}),s.jsx("a",{href:"#/contact",className:"bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors",children:"Get Expert Help, Fast."})]}),s.jsx("div",{className:"lg:hidden",children:s.jsx("button",{onClick:()=>t(!e),className:"text-gray-700 hover:text-green-600",children:e?s.jsx(Du,{className:"h-6 w-6"}):s.jsx($2,{className:"h-6 w-6"})})})]}),e&&s.jsx("div",{className:"lg:hidden border-t border-gray-200 py-4",children:s.jsxs("div",{className:"flex flex-col space-y-4",children:[s.jsx("a",{href:"#/",className:"text-gray-700 hover:text-green-600 font-medium",children:"Home"}),s.jsx("a",{href:"#/about",className:"text-gray-700 hover:text-green-600 font-medium",children:"About"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-gray-700 font-medium mb-2",children:"Services"}),s.jsx("div",{className:"pl-4 space-y-2",children:a.map(i=>s.jsx("a",{href:i.href,className:"block text-gray-600 hover:text-green-600",children:i.name},i.name))})]}),s.jsx("a",{href:"#/partners",className:"text-gray-700 hover:text-green-600 font-medium",children:"Partners"}),s.jsx("a",{href:"#/blog",className:"text-gray-700 hover:text-green-600 font-medium",children:"Blog"}),s.jsx("a",{href:"#/videos",className:"text-gray-700 hover:text-green-600 font-medium",children:"Videos"}),s.jsx("a",{href:"#/contact",className:"text-gray-700 hover:text-green-600 font-medium",children:"Contact"}),s.jsx("a",{href:"#/contact",className:"bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center",children:"Get Expert Help, Fast."})]})})]})})},ng="/mozno-website-main/assets/Mozno_Advisory_Logo_New-CfjfaJkL.png",nE=()=>{const e=[{name:"Wealth Management",href:"#/services/wealth-management"},{name:"Financial Planning",href:"#/services/financial-planning"},{name:"Tax Planning",href:"#/services/tax-planning"},{name:"Insurance Planning",href:"#/services/insurance-planning"},{name:"Borrowing Solutions",href:"#/services/borrowing-solutions"}],t=[{name:"About Us",href:"#/about"},{name:"Blog",href:"#/blog"},{name:"Videos",href:"#/videos"},{name:"Contact",href:"#/contact"}],n=[{name:"Privacy Policy",href:"#/privacy-policy"},{name:"Disclaimer",href:"#/disclaimer"},{name:"Terms & Conditions",href:"#/terms-conditions"}];return s.jsx("footer",{className:"bg-gray-900 text-white",children:s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",children:[s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:[s.jsxs("div",{className:"lg:col-span-1",children:[s.jsxs("div",{className:"flex items-center space-x-3 mb-6",children:[s.jsx("img",{src:ng,alt:"Mozno Advisory Logo",className:"h-12 w-auto object-contain",onError:r=>{r.currentTarget.style.display="none",r.currentTarget.nextElementSibling&&(r.currentTarget.nextElementSibling.style.display="block")}}),s.jsx("div",{className:"hidden",children:s.jsx("div",{className:"w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center",children:s.jsx("span",{className:"text-white font-bold text-xl",children:"M"})})}),s.jsxs("div",{children:[s.jsx("div",{className:"text-xl font-bold",children:"MOZNO ADVISORY"}),s.jsx("div",{className:"text-sm text-teal-400",children:"One-stop house for all your financial needs"})]})]}),s.jsx("p",{className:"text-gray-300 mb-6 leading-relaxed",children:"Founded by CA Harshal Jain, Mozno Advisory simplifies your financial journey with expert guidance in wealth management, tax planning, and comprehensive financial solutions."}),s.jsxs("div",{className:"flex space-x-4",children:[s.jsx("a",{href:"https://x.com/hvj2503",className:"text-gray-400 hover:text-green-400 transition-colors",children:s.jsx(X2,{className:"h-5 w-5"})}),s.jsx("a",{href:"https://www.linkedin.com/in/harshal-jain-979a54341",className:"text-gray-400 hover:text-green-400 transition-colors",children:s.jsx(V2,{className:"h-5 w-5"})}),s.jsx("a",{href:"https://www.instagram.com/the_awareness_initiative",className:"text-gray-400 hover:text-green-400 transition-colors",children:s.jsx(G2,{className:"h-5 w-5"})}),s.jsx("a",{href:"https://youtube.com/@awareness_initiative",className:"text-gray-400 hover:text-green-400 transition-colors",children:s.jsx(Z2,{className:"h-5 w-5"})})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg font-semibold mb-6",children:"Our Services"}),s.jsx("ul",{className:"space-y-3",children:e.map(r=>s.jsx("li",{children:s.jsx("a",{href:r.href,className:"text-gray-300 hover:text-green-400 transition-colors",children:r.name})},r.name))})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg font-semibold mb-6",children:"Quick Links"}),s.jsx("ul",{className:"space-y-3",children:t.map(r=>s.jsx("li",{children:s.jsx("a",{href:r.href,className:"text-gray-300 hover:text-green-400 transition-colors",children:r.name})},r.name))})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg font-semibold mb-6",children:"Contact Info"}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"flex items-start space-x-3",children:[s.jsx(eg,{className:"h-5 w-5 text-green-400 mt-1 flex-shrink-0"}),s.jsxs("div",{className:"text-gray-300",children:[s.jsx("p",{children:"106, Shyamkamal 'C' Building,"}),s.jsx("p",{children:"Agarwal Market, Vile Parle (E),"}),s.jsx("p",{children:"Mumbai - 400 057."})]})]}),s.jsxs("div",{className:"flex items-center space-x-3",children:[s.jsx(nd,{className:"h-5 w-5 text-green-400 flex-shrink-0"}),s.jsx("a",{href:"tel:+919820507696",className:"text-gray-300 hover:text-green-400 transition-colors",children:"+91 98205 07696"})]}),s.jsxs("div",{className:"flex items-center space-x-3",children:[s.jsx(td,{className:"h-5 w-5 text-green-400 flex-shrink-0"}),s.jsx("a",{href:"mailto:contact@mozno.in",className:"text-gray-300 hover:text-green-400 transition-colors",children:"contact@mozno.in"})]})]})]})]}),s.jsxs("div",{className:"border-t border-gray-800 mt-12 pt-8",children:[s.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[s.jsx("div",{className:"text-gray-400 text-sm mb-4 md:mb-0",children:"© 2024 Mozno Advisory. All rights reserved."}),s.jsx("div",{className:"flex flex-wrap gap-6",children:n.map(r=>s.jsx("a",{href:r.href,className:"text-gray-400 hover:text-green-400 text-sm transition-colors",children:r.name},r.name))})]}),s.jsx("div",{className:"mt-6 text-center text-gray-500 text-sm",children:s.jsx("p",{children:"Investment in securities is subject to market risk. Please read all scheme related documents carefully."})})]})]})})},rE=()=>{const[e,t]=q.useState(!1),[n,r]=q.useState(!1);return q.useEffect(()=>{const a=()=>{const i=window.pageYOffset;r(i>300)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]),n?s.jsxs("div",{className:"fixed bottom-6 right-6 z-50",children:[e&&s.jsxs("div",{className:"mb-4 bg-white rounded-lg shadow-2xl border border-gray-200 p-4 w-64",children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsxs("h3",{className:"font-semibold text-gray-900 flex items-center",children:[s.jsx("img",{src:ng,alt:"Logo",className:"h-6 w-auto mr-2 object-contain"}),"Talk to Our Advisor"]}),s.jsx("button",{onClick:()=>t(!1),className:"text-gray-400 hover:text-gray-600",children:s.jsx(Du,{className:"h-4 w-4"})})]}),s.jsxs("div",{className:"space-y-3",children:[s.jsxs("a",{href:"tel:+919820507696",className:"flex items-center space-x-3 p-3 rounded-lg bg-teal-50 hover:bg-teal-100 transition-colors",children:[s.jsx(nd,{className:"h-5 w-5 text-teal-600"}),s.jsxs("div",{children:[s.jsx("div",{className:"font-medium text-gray-900",children:"Call Now"}),s.jsx("div",{className:"text-sm text-gray-600",children:"+91 98205 07696"})]})]}),s.jsxs("a",{href:"mailto:contact@mozno.in",className:"flex items-center space-x-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors",children:[s.jsx(td,{className:"h-5 w-5 text-blue-600"}),s.jsxs("div",{children:[s.jsx("div",{className:"font-medium text-gray-900",children:"Email Us"}),s.jsx("div",{className:"text-sm text-gray-600",children:"contact@mozno.in"})]})]}),s.jsxs("a",{href:"https://wa.me/919820507696",target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-3 p-3 rounded-lg bg-teal-50 hover:bg-teal-100 transition-colors",children:[s.jsx(Lu,{className:"h-5 w-5 text-teal-600"}),s.jsxs("div",{children:[s.jsx("div",{className:"font-medium text-gray-900",children:"WhatsApp"}),s.jsx("div",{className:"text-sm text-gray-600",children:"Quick Response"})]})]}),s.jsx("a",{href:"#/contact",className:"block w-full bg-teal-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors",children:"Get Expert Help, Fast."})]})]}),s.jsx("button",{onClick:()=>t(!e),className:"bg-teal-600 hover:bg-teal-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110",children:e?s.jsx(Du,{className:"h-6 w-6"}):s.jsx(Lu,{className:"h-6 w-6"})})]}):null},rg="/mozno-website-main/assets/Profile_Photo-DzXtHVOf.jpeg";var ag={exports:{}},aE="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",iE=aE,sE=iE;function ig(){}function sg(){}sg.resetWarningCache=ig;var oE=function(){function e(r,a,i,o,l,u){if(u!==sE){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:sg,resetWarningCache:ig};return n.PropTypes=n,n};ag.exports=oE();var lE=ag.exports;const ut=ra(lE);var uE=["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl","isolated"];function Ou(){return Ou=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ou.apply(this,arguments)}function cE(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Ki(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function dE(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Mu(e,t)}function Mu(e,t){return Mu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Mu(e,t)}var go=function(e){dE(t,e);function t(){var r;return r=e.call(this)||this,r.handleExpired=r.handleExpired.bind(Ki(r)),r.handleErrored=r.handleErrored.bind(Ki(r)),r.handleChange=r.handleChange.bind(Ki(r)),r.handleRecaptchaRef=r.handleRecaptchaRef.bind(Ki(r)),r}var n=t.prototype;return n.getCaptchaFunction=function(a){return this.props.grecaptcha?this.props.grecaptcha.enterprise?this.props.grecaptcha.enterprise[a]:this.props.grecaptcha[a]:null},n.getValue=function(){var a=this.getCaptchaFunction("getResponse");return a&&this._widgetId!==void 0?a(this._widgetId):null},n.getWidgetId=function(){return this.props.grecaptcha&&this._widgetId!==void 0?this._widgetId:null},n.execute=function(){var a=this.getCaptchaFunction("execute");if(a&&this._widgetId!==void 0)return a(this._widgetId);this._executeRequested=!0},n.executeAsync=function(){var a=this;return new Promise(function(i,o){a.executionResolve=i,a.executionReject=o,a.execute()})},n.reset=function(){var a=this.getCaptchaFunction("reset");a&&this._widgetId!==void 0&&a(this._widgetId)},n.forceReset=function(){var a=this.getCaptchaFunction("reset");a&&a()},n.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},n.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},n.handleChange=function(a){this.props.onChange&&this.props.onChange(a),this.executionResolve&&(this.executionResolve(a),delete this.executionReject,delete this.executionResolve)},n.explicitRender=function(){var a=this.getCaptchaFunction("render");if(a&&this._widgetId===void 0){var i=document.createElement("div");this._widgetId=a(i,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge,isolated:this.props.isolated}),this.captcha.appendChild(i)}this._executeRequested&&this.props.grecaptcha&&this._widgetId!==void 0&&(this._executeRequested=!1,this.execute())},n.componentDidMount=function(){this.explicitRender()},n.componentDidUpdate=function(){this.explicitRender()},n.handleRecaptchaRef=function(a){this.captcha=a},n.render=function(){var a=this.props;a.sitekey,a.onChange,a.theme,a.type,a.tabindex,a.onExpired,a.onErrored,a.size,a.stoken,a.grecaptcha,a.badge,a.hl,a.isolated;var i=cE(a,uE);return q.createElement("div",Ou({},i,{ref:this.handleRecaptchaRef}))},t}(q.Component);go.displayName="ReCAPTCHA";go.propTypes={sitekey:ut.string.isRequired,onChange:ut.func,grecaptcha:ut.object,theme:ut.oneOf(["dark","light"]),type:ut.oneOf(["image","audio"]),tabindex:ut.number,onExpired:ut.func,onErrored:ut.func,size:ut.oneOf(["compact","normal","invisible"]),stoken:ut.string,hl:ut.string,badge:ut.oneOf(["bottomright","bottomleft","inline"]),isolated:ut.bool};go.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var og={exports:{}},de={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ge=typeof Symbol=="function"&&Symbol.for,ad=Ge?Symbol.for("react.element"):60103,id=Ge?Symbol.for("react.portal"):60106,yo=Ge?Symbol.for("react.fragment"):60107,xo=Ge?Symbol.for("react.strict_mode"):60108,bo=Ge?Symbol.for("react.profiler"):60114,Eo=Ge?Symbol.for("react.provider"):60109,To=Ge?Symbol.for("react.context"):60110,sd=Ge?Symbol.for("react.async_mode"):60111,vo=Ge?Symbol.for("react.concurrent_mode"):60111,_o=Ge?Symbol.for("react.forward_ref"):60112,So=Ge?Symbol.for("react.suspense"):60113,hE=Ge?Symbol.for("react.suspense_list"):60120,ko=Ge?Symbol.for("react.memo"):60115,Co=Ge?Symbol.for("react.lazy"):60116,fE=Ge?Symbol.for("react.block"):60121,pE=Ge?Symbol.for("react.fundamental"):60117,mE=Ge?Symbol.for("react.responder"):60118,gE=Ge?Symbol.for("react.scope"):60119;function wt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ad:switch(e=e.type,e){case sd:case vo:case yo:case bo:case xo:case So:return e;default:switch(e=e&&e.$$typeof,e){case To:case _o:case Co:case ko:case Eo:return e;default:return t}}case id:return t}}}function lg(e){return wt(e)===vo}de.AsyncMode=sd;de.ConcurrentMode=vo;de.ContextConsumer=To;de.ContextProvider=Eo;de.Element=ad;de.ForwardRef=_o;de.Fragment=yo;de.Lazy=Co;de.Memo=ko;de.Portal=id;de.Profiler=bo;de.StrictMode=xo;de.Suspense=So;de.isAsyncMode=function(e){return lg(e)||wt(e)===sd};de.isConcurrentMode=lg;de.isContextConsumer=function(e){return wt(e)===To};de.isContextProvider=function(e){return wt(e)===Eo};de.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ad};de.isForwardRef=function(e){return wt(e)===_o};de.isFragment=function(e){return wt(e)===yo};de.isLazy=function(e){return wt(e)===Co};de.isMemo=function(e){return wt(e)===ko};de.isPortal=function(e){return wt(e)===id};de.isProfiler=function(e){return wt(e)===bo};de.isStrictMode=function(e){return wt(e)===xo};de.isSuspense=function(e){return wt(e)===So};de.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===yo||e===vo||e===bo||e===xo||e===So||e===hE||typeof e=="object"&&e!==null&&(e.$$typeof===Co||e.$$typeof===ko||e.$$typeof===Eo||e.$$typeof===To||e.$$typeof===_o||e.$$typeof===pE||e.$$typeof===mE||e.$$typeof===gE||e.$$typeof===fE)};de.typeOf=wt;og.exports=de;var yE=og.exports,od=yE,xE={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},bE={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},EE={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ug={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ld={};ld[od.ForwardRef]=EE;ld[od.Memo]=ug;function af(e){return od.isMemo(e)?ug:ld[e.$$typeof]||xE}var TE=Object.defineProperty,vE=Object.getOwnPropertyNames,sf=Object.getOwnPropertySymbols,_E=Object.getOwnPropertyDescriptor,SE=Object.getPrototypeOf,of=Object.prototype;function cg(e,t,n){if(typeof t!="string"){if(of){var r=SE(t);r&&r!==of&&cg(e,r,n)}var a=vE(t);sf&&(a=a.concat(sf(t)));for(var i=af(e),o=af(t),l=0;l<a.length;++l){var u=a[l];if(!bE[u]&&!(n&&n[u])&&!(o&&o[u])&&!(i&&i[u])){var d=_E(t,u);try{TE(e,u,d)}catch{}}}}return e}var kE=cg;const CE=ra(kE);function ju(){return ju=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ju.apply(this,arguments)}function NE(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function wE(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var Ut={},AE=0;function IE(e,t){return t=t||{},function(r){var a=r.displayName||r.name||"Component",i=function(l){wE(u,l);function u(f,h){var p;return p=l.call(this,f,h)||this,p.state={},p.__scriptURL="",p}var d=u.prototype;return d.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+AE++),this.__scriptLoaderID},d.setupScriptURL=function(){return this.__scriptURL=typeof e=="function"?e():e,this.__scriptURL},d.asyncScriptLoaderHandleLoad=function(h){var p=this;this.setState(h,function(){return p.props.asyncScriptOnLoad&&p.props.asyncScriptOnLoad(p.state)})},d.asyncScriptLoaderTriggerOnScriptLoaded=function(){var h=Ut[this.__scriptURL];if(!h||!h.loaded)throw new Error("Script is not loaded.");for(var p in h.observers)h.observers[p](h);delete window[t.callbackName]},d.componentDidMount=function(){var h=this,p=this.setupScriptURL(),m=this.asyncScriptLoaderGetScriptLoaderID(),x=t,S=x.globalName,A=x.callbackName,g=x.scriptId;if(S&&typeof window[S]<"u"&&(Ut[p]={loaded:!0,observers:{}}),Ut[p]){var y=Ut[p];if(y&&(y.loaded||y.errored)){this.asyncScriptLoaderHandleLoad(y);return}y.observers[m]=function(D){return h.asyncScriptLoaderHandleLoad(D)};return}var E={};E[m]=function(D){return h.asyncScriptLoaderHandleLoad(D)},Ut[p]={loaded:!1,observers:E};var N=document.createElement("script");N.src=p,N.async=!0;for(var P in t.attributes)N.setAttribute(P,t.attributes[P]);g&&(N.id=g);var C=function(H){if(Ut[p]){var V=Ut[p],w=V.observers;for(var U in w)H(w[U])&&delete w[U]}};A&&typeof window<"u"&&(window[A]=function(){return h.asyncScriptLoaderTriggerOnScriptLoaded()}),N.onload=function(){var D=Ut[p];D&&(D.loaded=!0,C(function(H){return A?!1:(H(D),!0)}))},N.onerror=function(){var D=Ut[p];D&&(D.errored=!0,C(function(H){return H(D),!0}))},document.body.appendChild(N)},d.componentWillUnmount=function(){var h=this.__scriptURL;if(t.removeOnUnmount===!0)for(var p=document.getElementsByTagName("script"),m=0;m<p.length;m+=1)p[m].src.indexOf(h)>-1&&p[m].parentNode&&p[m].parentNode.removeChild(p[m]);var x=Ut[h];x&&(delete x.observers[this.asyncScriptLoaderGetScriptLoaderID()],t.removeOnUnmount===!0&&delete Ut[h])},d.render=function(){var h=t.globalName,p=this.props;p.asyncScriptOnLoad;var m=p.forwardedRef,x=NE(p,["asyncScriptOnLoad","forwardedRef"]);return h&&typeof window<"u"&&(x[h]=typeof window[h]<"u"?window[h]:void 0),x.ref=m,q.createElement(r,x)},u}(q.Component),o=q.forwardRef(function(l,u){return q.createElement(i,ju({},l,{forwardedRef:u}))});return o.displayName="AsyncScriptLoader("+a+")",o.propTypes={asyncScriptOnLoad:ut.func},CE(o,r)}}var Fu="onloadcallback",PE="grecaptcha";function Bu(){return typeof window<"u"&&window.recaptchaOptions||{}}function LE(){var e=Bu(),t=e.useRecaptchaNet?"recaptcha.net":"www.google.com";return e.enterprise?"https://"+t+"/recaptcha/enterprise.js?onload="+Fu+"&render=explicit":"https://"+t+"/recaptcha/api.js?onload="+Fu+"&render=explicit"}const dg=IE(LE,{callbackName:Fu,globalName:PE,attributes:Bu().nonce?{nonce:Bu().nonce}:{}})(go),RE="https://script.google.com/macros/s/AKfycbzjGXyVvIx9BetbDWx_VIL24ZKjA8B4dLssWjKLMMPH8yuGo_hUaRg1vRpsxAU2iIfx/exec",DE="6Lc5b5IrAAAAAEcsiXPLIG5Xd__O817x4N46EzsP",OE=()=>{const[e,t]=q.useState({name:"",email:"",phone:"",service:"",message:""}),[n,r]=q.useState(!1),[a,i]=q.useState({}),[o,l]=q.useState(!1),[u,d]=q.useState(""),[f,h]=q.useState(null),p=()=>e.name.trim()&&e.email.trim()&&e.phone.trim()&&e.service.trim()&&n&&f,m={name:a.name&&!e.name.trim(),email:a.email&&!e.email.trim(),phone:a.phone&&!e.phone.trim(),service:a.service&&!e.service.trim(),captcha:a.captcha&&!f},x=async N=>{if(N.preventDefault(),!!p()){l(!0),d("");try{const P=new FormData;P.append("name",e.name),P.append("email",e.email),P.append("phone",e.phone),P.append("service",e.service),P.append("message",e.message),P.append("g-recaptcha-response",f||""),(await fetch(RE,{method:"POST",body:P})).ok?(d("success"),t({name:"",email:"",phone:"",service:"",message:""}),r(!1),i({}),h(null)):d("error")}catch{d("error")}l(!1)}},S=N=>{t({...e,[N.target.name]:N.target.value})},A=N=>{i({...a,[N.target.name]:!0})},g=[{icon:rd,title:"Wealth Management",description:"End-to-end wealth advisory tailored to your goals and risk appetite",href:"#/services/wealth-management",color:"from-green-500 to-green-600"},{icon:Zr,title:"Financial Planning",description:"Comprehensive financial roadmaps covering your life goals",href:"#/services/financial-planning",color:"from-blue-500 to-blue-600"},{icon:Pu,title:"Tax Planning",description:"Reduce tax liabilities with personalized strategies",href:"#/services/tax-planning",color:"from-yellow-500 to-yellow-600"},{icon:Ru,title:"Insurance Planning",description:"Protecting your health, income, and legacy",href:"#/services/insurance-planning",color:"from-purple-500 to-purple-600"},{icon:fi,title:"Borrowing Solutions",description:"Best deals on loans with end-to-end support",href:"#/services/borrowing-solutions",color:"from-red-500 to-red-600"},{icon:q2,title:"Succession Planning",description:"Secure your legacy for the next generation",href:"#/services/succession-planning",color:"from-red-500 to-red-600"}],y=[{name:"Rajesh Kumar",role:"Business Owner",rating:5,comment:"Harshal and his team helped me restructure my investments and save significantly on taxes. Highly professional service!",image:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"},{name:"Priya Sharma",role:"Software Engineer",rating:5,comment:"Excellent financial planning guidance. They made complex investment concepts easy to understand.",image:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"},{name:"Amit Patel",role:"Doctor",rating:5,comment:"Got the best home loan rates through Mozno Advisory. Their support throughout the process was exceptional.",image:"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"}],E=[{title:"Why SIP is the New FD for Millennials",excerpt:"Discover why young investors are turning away from fixed deposits and embracing Systematic Investment Plans for better returns.",image:"https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",href:"/blog/why-sip-is-new-fd"},{title:"How to Save ₹1.5 Lakh in Taxes Legally",excerpt:"Explore legitimate tax-saving options under 80C, 80D, and beyond. Suitable for salaried and business professionals.",image:"https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",href:"/blog/save-tax-legally"},{title:"Retirement Planning: Start Early, Retire Wealthy",excerpt:"A step-by-step guide on building your retirement corpus from your 20s to your 50s.",image:"https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",href:"/blog/retirement-planning-guide"}];return s.jsxs("div",{className:"pt-16 lg:pt-20",children:[s.jsx("section",{className:"bg-gradient-to-br from-green-50 via-white to-blue-50 py-20 lg:py-32",children:s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[s.jsxs("div",{children:[s.jsxs("h1",{className:"text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight",children:["One-stop house for all your"," ",s.jsx("span",{className:"text-teal-600",children:"financial needs"})]}),s.jsx("p",{className:"text-xl text-gray-600 mb-8 leading-relaxed",children:"Founded by CA Harshal Jain, we simplify your financial journey with expert guidance in wealth management, tax planning, and comprehensive financial solutions."}),s.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[s.jsx("a",{href:"/contact",className:"bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors text-center",children:"Get Expert Help, Fast."}),s.jsx("a",{href:"tel:+919876543210",className:"border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors text-center",children:"Call: +91 98205 07696"})]})]}),s.jsxs("div",{className:"relative",children:[s.jsx("img",{src:"https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",alt:"Financial Planning",className:"rounded-2xl shadow-2xl"}),s.jsx("div",{className:"absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl",children:s.jsxs("div",{className:"flex items-center space-x-4",children:[s.jsx("div",{className:"bg-teal-100 p-3 rounded-full",children:s.jsx(Ws,{className:"h-6 w-6 text-teal-600"})}),s.jsxs("div",{children:[s.jsx("div",{className:"text-2xl font-bold text-gray-900",children:"50+"}),s.jsx("div",{className:"text-gray-600",children:"Happy Clients"})]})]})})]})]})})}),s.jsx("section",{className:"py-20 bg-white",children:s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[s.jsxs("div",{className:"text-center mb-16",children:[s.jsx("h2",{className:"text-3xl lg:text-4xl font-bold text-gray-900 mb-4",children:"Our Financial Services"}),s.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Comprehensive financial solutions tailored to your unique needs and goals"})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:g.map((N,P)=>{const C=N.icon;return s.jsxs("div",{className:"group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2",children:[s.jsx("div",{className:`bg-gradient-to-r ${N.color} p-4 rounded-xl w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300`,children:s.jsx(C,{className:"h-8 w-8 text-white"})}),s.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-4",children:N.title}),s.jsx("p",{className:"text-gray-600 mb-6 leading-relaxed",children:N.description}),s.jsxs("a",{href:N.href,className:"inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors",children:["Learn More",s.jsx(Yn,{className:"ml-2 h-4 w-4"})]})]},P)})})]})}),s.jsx("section",{className:"py-20 bg-gray-50",children:s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[s.jsxs("div",{className:"text-center mb-16",children:[s.jsx("h2",{className:"text-3xl lg:text-4xl font-bold text-gray-900 mb-4",children:"What Our Clients Say"}),s.jsx("p",{className:"text-xl text-gray-600",children:"Trusted by hundreds of satisfied clients across India"})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:y.map((N,P)=>s.jsxs("div",{className:"bg-white rounded-xl p-8 shadow-lg",children:[s.jsx("div",{className:"flex items-center mb-4",children:[...Array(N.rating)].map((C,D)=>s.jsx(K2,{className:"h-5 w-5 text-yellow-400 fill-current"},D))}),s.jsxs("p",{className:"text-gray-600 mb-6 leading-relaxed",children:['"',N.comment,'"']}),s.jsxs("div",{className:"flex items-center",children:[s.jsx("img",{src:N.image,alt:N.name,className:"w-12 h-12 rounded-full mr-4"}),s.jsxs("div",{children:[s.jsx("div",{className:"font-semibold text-gray-900",children:N.name}),s.jsx("div",{className:"text-gray-600 text-sm",children:N.role})]})]})]},P))})]})}),s.jsx("section",{className:"py-20 bg-white",children:s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[s.jsx("div",{children:s.jsx("img",{src:rg,alt:"Harshal Jain",className:"w-90 h-90 object-cover rounded-full shadow-2xl"})}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-4xl lg:text-5xl font-bold text-gray-900 mb-8",children:"Meet the Founder"}),s.jsxs("div",{className:"mb-8",children:[s.jsx("h3",{className:"text-3xl font-semibold text-teal-600 mb-3",children:"Harshal Jain"}),s.jsx("p",{className:"text-2xl text-gray-600 mb-6",children:"Chartered Accountant & Founder"})]}),s.jsx("p",{className:"text-xl text-gray-700 mb-8 leading-relaxed",children:"Harshal Jain is a Chartered Accountant and Founder of Mozno Advisory. With experience spanning auditing, investment advisory, tax, and compliance, Harshal brings a vision to simplify financial journeys. Mozno aims to make strategic financial advice accessible to every Indian."}),s.jsx("blockquote",{className:"border-l-4 border-teal-600 pl-6 mb-10",children:s.jsx("p",{className:"text-2xl italic text-gray-800",children:'"We simplify financial lives so that you can focus on what truly matters."'})}),s.jsxs("div",{className:"flex items-center space-x-6",children:[s.jsx("a",{href:"https://www.linkedin.com/in/harshal-jain-979a54341",className:"bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg",children:"Connect on LinkedIn"}),s.jsx("a",{href:"#/about",className:"text-teal-600 font-semibold hover:text-teal-700 transition-colors text-lg",children:"Learn More About Us"})]})]})]})})}),s.jsx("section",{className:"py-20 bg-gray-50",children:s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[s.jsxs("div",{className:"text-center mb-16",children:[s.jsx("h2",{className:"text-3xl lg:text-4xl font-bold text-gray-900 mb-4",children:"Latest Insights"}),s.jsx("p",{className:"text-xl text-gray-600",children:"Stay updated with the latest financial tips and market insights"})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:E.map((N,P)=>s.jsxs("article",{className:"bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300",children:[s.jsx("img",{src:N.image,alt:N.title,className:"w-full h-48 object-cover"}),s.jsxs("div",{className:"p-6",children:[s.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:N.title}),s.jsx("p",{className:"text-gray-600 mb-4 leading-relaxed",children:N.excerpt}),s.jsxs("a",{href:N.href,className:"inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors",children:["Read More",s.jsx(Yn,{className:"ml-2 h-4 w-4"})]})]})]},P))}),s.jsx("div",{className:"text-center mt-12",children:s.jsx("a",{href:"/blog",className:"bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors",children:"View All Articles"})})]})}),s.jsx("section",{className:"py-20 bg-gradient-to-br from-teal-600 to-teal-700",children:s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[s.jsxs("div",{className:"text-white",children:[s.jsx("h2",{className:"text-3xl lg:text-4xl font-bold mb-6",children:"Ready to Transform Your Financial Future?"}),s.jsx("p",{className:"text-xl text-teal-100 mb-8 leading-relaxed",children:"Get personalized financial advice from our expert team. Book your free consultation today and take the first step towards financial freedom."}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"flex items-center space-x-4",children:[s.jsx(Qi,{className:"h-6 w-6 text-teal-300"}),s.jsx("span",{className:"text-teal-100",children:"Free initial consultation"})]}),s.jsxs("div",{className:"flex items-center space-x-4",children:[s.jsx(Qi,{className:"h-6 w-6 text-teal-300"}),s.jsx("span",{className:"text-teal-100",children:"Personalized financial roadmap"})]}),s.jsxs("div",{className:"flex items-center space-x-4",children:[s.jsx(Qi,{className:"h-6 w-6 text-teal-300"}),s.jsx("span",{className:"text-teal-100",children:"Expert guidance from CA"})]}),s.jsxs("div",{className:"flex items-center space-x-4",children:[s.jsx(Qi,{className:"h-6 w-6 text-teal-300"}),s.jsx("span",{className:"text-teal-100",children:"Ongoing support and monitoring"})]})]})]}),s.jsxs("div",{className:"bg-gray-50 rounded-2xl p-8",children:[s.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-8",children:"We’re Here to Help"}),s.jsxs("form",{onSubmit:x,className:"space-y-6",noValidate:!0,children:[s.jsxs("div",{children:[s.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-2",children:"Full Name *"}),s.jsx("input",{type:"text",id:"name",name:"name",required:!0,value:e.name,onChange:S,onBlur:A,className:`w-full px-4 py-3 border ${m.name?"border-red-500":"border-gray-300"} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`,placeholder:"Enter your full name"}),m.name&&s.jsx("p",{className:"text-red-500 text-xs mt-1",children:"Full Name is required."})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address *"}),s.jsx("input",{type:"email",id:"email",name:"email",required:!0,value:e.email,onChange:S,onBlur:A,className:`w-full px-4 py-3 border ${m.email?"border-red-500":"border-gray-300"} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`,placeholder:"Enter your email"}),m.email&&s.jsx("p",{className:"text-red-500 text-xs mt-1",children:"Email Address is required."})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700 mb-2",children:"Phone Number *"}),s.jsx("input",{type:"tel",id:"phone",name:"phone",required:!0,value:e.phone,onChange:S,onBlur:A,className:`w-full px-4 py-3 border ${m.phone?"border-red-500":"border-gray-300"} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`,placeholder:"Enter your phone number"}),m.phone&&s.jsx("p",{className:"text-red-500 text-xs mt-1",children:"Phone Number is required."})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"service",className:"block text-sm font-medium text-gray-700 mb-2",children:"Service Interested In *"}),s.jsxs("select",{id:"service",name:"service",required:!0,value:e.service,onChange:S,onBlur:A,className:`w-full px-4 py-3 border ${m.service?"border-red-500":"border-gray-300"} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`,children:[s.jsx("option",{value:"",children:"Select a service"}),s.jsx("option",{value:"wealth-management",children:"Wealth Management"}),s.jsx("option",{value:"financial-planning",children:"Financial Planning"}),s.jsx("option",{value:"tax-planning",children:"Tax Planning"}),s.jsx("option",{value:"insurance-planning",children:"Insurance Planning"}),s.jsx("option",{value:"borrowing-solutions",children:"Borrowing Solutions"}),s.jsx("option",{value:"succession-planning",children:"Succession Planning"}),s.jsx("option",{value:"others",children:"Others"})]}),m.service&&s.jsx("p",{className:"text-red-500 text-xs mt-1",children:"Service selection is required."})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-2",children:"Message"}),s.jsx("textarea",{id:"message",name:"message",rows:4,value:e.message,onChange:S,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",placeholder:"Tell us about your financial goals..."})]}),s.jsxs("div",{children:[s.jsx(dg,{sitekey:DE,onChange:N=>h(N),onExpired:()=>h(null)}),!f&&a&&s.jsx("p",{className:"text-red-500 text-xs mt-1",children:"Please complete the CAPTCHA."})]}),s.jsxs("div",{className:"flex items-start",children:[s.jsx("input",{type:"checkbox",id:"consent",name:"consent",checked:n,onChange:N=>r(N.target.checked),className:"mt-1 mr-2",required:!0}),s.jsxs("label",{htmlFor:"consent",className:"text-sm text-gray-600",children:["By submitting this form, I agree to the ",s.jsx("a",{href:"/terms",className:"text-green-600 underline",children:"Terms & Conditions"})," and ",s.jsx("a",{href:"/privacy",className:"text-green-600 underline",children:"Privacy Policy"}),"."]})]}),s.jsx("button",{type:"submit",className:`w-full bg-green-600 text-white py-4 rounded-lg font-semibold transition-colors hover:bg-green-700 ${!p()||o?"opacity-50 cursor-not-allowed":""}`,disabled:!p()||o,children:o?"Submitting...":"Get Expert Help, Fast."}),u==="success"&&s.jsx("p",{className:"text-green-600 text-sm mt-4",children:"Thank you for your inquiry! We will contact you soon."}),u==="error"&&s.jsx("p",{className:"text-red-600 text-sm mt-4",children:"Submission failed. Please try again later."})]})]})]})})})]})},ME=()=>s.jsxs("div",{className:"pt-16 lg:pt-20",children:[s.jsx("section",{className:"bg-gradient-to-br from-green-50 via-white to-blue-50 py-20",children:s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"text-center",children:[s.jsx("h1",{className:"text-4xl lg:text-5xl font-bold text-gray-900 mb-6",children:"About Mozno Advisory"}),s.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed",children:"Founded by Harshal Jain, CA, we simplify your financial journey with expert guidance in wealth management, tax planning, and comprehensive financial solutions."})]})})}),s.jsx("section",{className:"py-20 bg-white",children:s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[s.jsxs("div",{className:"bg-white rounded-xl shadow-md p-8 hover:scale-105 hover:shadow-2xl transition-transform duration-300",children:[s.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-6",children:"Our Mission"}),s.jsx("p",{className:"text-gray-600 leading-relaxed mb-6",children:"To make strategic financial advice accessible to every Indian by simplifying complex financial concepts and providing personalized solutions that align with individual goals and risk appetites."}),s.jsxs("div",{className:"flex items-center space-x-4",children:[s.jsx(Zr,{className:"h-8 w-8 text-teal-600"}),s.jsx("span",{className:"text-lg font-semibold text-gray-900",children:"Goal-Oriented Approach"})]})]}),s.jsxs("div",{className:"bg-white rounded-xl shadow-md p-8 hover:scale-105 hover:shadow-2xl transition-transform duration-300",children:[s.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-6",children:"Our Vision"}),s.jsx("p",{className:"text-gray-600 leading-relaxed mb-6",children:"To become India's most trusted financial advisory firm, known for transparency, expertise, and unwavering commitment to client success in their financial journey."}),s.jsxs("div",{className:"flex items-center space-x-4",children:[s.jsx(J0,{className:"h-8 w-8 text-teal-600"}),s.jsx("span",{className:"text-lg font-semibold text-gray-900",children:"Client-First Philosophy"})]})]})]})})}),s.jsx("section",{className:"py-20 bg-white",children:s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[s.jsx("div",{children:s.jsx("img",{src:rg,alt:"Harshal Jain",className:"w-90 h-90 object-cover rounded-full shadow-2xl"})}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-4xl lg:text-5xl font-bold text-gray-900 mb-8",children:"Meet the Founder"}),s.jsxs("div",{className:"mb-8",children:[s.jsx("h3",{className:"text-3xl font-semibold text-teal-600 mb-3",children:"Harshal Jain"}),s.jsx("p",{className:"text-2xl text-gray-600 mb-6",children:"Chartered Accountant & Founder"})]}),s.jsx("p",{className:"text-xl text-gray-700 mb-8 leading-relaxed",children:"Harshal Jain is a Chartered Accountant and Founder of Mozno Advisory. With experience spanning auditing, investment advisory, tax, and compliance, Harshal brings a vision to simplify financial journeys. Mozno aims to make strategic financial advice accessible to every Indian."}),s.jsx("blockquote",{className:"border-l-4 border-teal-600 pl-6 mb-10",children:s.jsx("p",{className:"text-2xl italic text-gray-800",children:'"We simplify financial lives so that you can focus on what truly matters."'})}),s.jsxs("div",{className:"flex items-center space-x-6",children:[s.jsx("a",{href:"https://www.linkedin.com/in/harshal-jain-979a54341",className:"bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg",children:"Connect on LinkedIn"}),s.jsx("a",{href:"#/about",className:"text-teal-600 font-semibold hover:text-teal-700 transition-colors text-lg",children:"Learn More About Us"})]})]})]})})}),s.jsx("section",{className:"py-20 bg-white",children:s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[s.jsxs("div",{className:"text-center mb-16",children:[s.jsx("h2",{className:"text-3xl lg:text-4xl font-bold text-gray-900 mb-4",children:"Our Core Values"}),s.jsx("p",{className:"text-xl text-gray-600",children:"The principles that guide everything we do"})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[s.jsxs("div",{className:"bg-white rounded-xl shadow-md p-8 text-center hover:scale-105 hover:shadow-2xl transition-transform duration-300",children:[s.jsx("div",{className:"bg-teal-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center",children:s.jsx(H2,{className:"h-8 w-8 text-teal-600"})}),s.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Excellence"}),s.jsx("p",{className:"text-gray-600 leading-relaxed",children:"We strive for excellence in every aspect of our service delivery and client relationships."})]}),s.jsxs("div",{className:"bg-white rounded-xl shadow-md p-8 text-center hover:scale-105 hover:shadow-2xl transition-transform duration-300",children:[s.jsx("div",{className:"bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center",children:s.jsx(Ws,{className:"h-8 w-8 text-blue-600"})}),s.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Trust"}),s.jsx("p",{className:"text-gray-600 leading-relaxed",children:"Building long-term relationships based on transparency, honesty, and reliable advice."})]}),s.jsxs("div",{className:"bg-white rounded-xl shadow-md p-8 text-center hover:scale-105 hover:shadow-2xl transition-transform duration-300",children:[s.jsx("div",{className:"bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center",children:s.jsx(Zr,{className:"h-8 w-8 text-yellow-600"})}),s.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Innovation"}),s.jsx("p",{className:"text-gray-600 leading-relaxed",children:"Continuously evolving our approach to meet changing financial landscapes and client needs."})]})]})]})})]}),jE=()=>{const e=[{icon:rf,title:"Mutual Funds",description:"Begin with just ₹500 SIP. Professionally-managed, diversified portfolios that grow with your goals—equity, debt, or hybrid.",href:"#/blog/mutual-funds"},{icon:rf,title:"Specialized Investment Fund (SIF)",description:"Entry at ₹10–25 lakh. Concentrated vehicles offering early-stage tech, green infra, or fractional real-estate exposure for 18-25 % IRR targets.",href:"#/blog/sif"},{icon:U2,title:"Portfolio Management Services (PMS)",description:"Minimum ticket ₹50 lakh. Personalised stock portfolios—flexi-cap, quant, or ESG—managed by seasoned fund managers for alpha generation.",href:"#/blog/pms"},{icon:Zr,title:"Alternative Investment Funds (AIFs)",description:"₹1 crore+ only. Access pre-IPO unicorns, distressed debt, or private equity via SEBI-regulated funds targeting 20 %+ IRR with institutional governance.",href:"#/blog/aif"}];return s.jsxs("div",{className:"pt-16 lg:pt-20",children:[s.jsx("section",{className:"bg-gradient-to-br from-green-50 via-white to-blue-50 py-20",children:s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center",children:s.jsx(rd,{className:"h-10 w-10 text-green-600"})}),s.jsx("h1",{className:"text-4xl lg:text-5xl font-bold text-gray-900 mb-6",children:"Wealth Management"}),s.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed",children:"We provide end-to-end wealth advisory tailored to suit your goals and risk appetite. Our services range from mutual fund selection to portfolio management and exclusive AIF opportunities."})]})})}),s.jsx("section",{className:"py-20 bg-white",children:s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-8",children:e.map((t,n)=>{const r=t.icon;return s.jsxs("div",{className:"bg-white border border-gray-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-300",children:[s.jsx("div",{className:"bg-green-100 p-4 rounded-xl w-16 h-16 mb-6 flex items-center justify-center",children:s.jsx(r,{className:"h-8 w-8 text-green-600"})}),s.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-4",children:t.title}),s.jsx("p",{className:"text-gray-600 leading-relaxed",children:t.description}),s.jsxs("a",{href:t.href,className:"inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors",children:["Learn More",s.jsx(Yn,{className:"ml-2 h-4 w-4"})]})]},n)})})})}),s.jsx("section",{className:"py-20 bg-green-600",children:s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[s.jsx("h2",{className:"text-3xl lg:text-4xl font-bold text-white mb-6",children:"Ready to Grow Your Wealth?"}),s.jsx("p",{className:"text-xl text-green-100 mb-8 max-w-2xl mx-auto",children:"Let our experts create a personalized wealth management strategy for you."}),s.jsx("a",{href:"/contact",className:"bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors",children:"Get Expert Help, Fast."})]})})]})},FE=()=>{const e=[{icon:Zr,title:"Goal-Based Planning",description:"Structured planning for specific life goals like buying a home, child education, or dream vacation.",href:"#/blog/goal-based-planning"},{icon:Ws,title:"Strategic Asset Allocation",description:"Description needs to be added",href:"#/blog/strategic-asset-allocation"},{icon:rd,title:"Retirement Planning",description:"Comprehensive retirement corpus building strategies to ensure financial independence in your golden years.",href:"#/blog/retirement-planning"},{icon:Ws,title:"Cash Flow Management & Budgeting",description:"Description needs to be added",href:"#/blog/cash-flow-management"}];return s.jsxs("div",{className:"pt-16 lg:pt-20",children:[s.jsx("section",{className:"bg-gradient-to-br from-blue-50 via-white to-green-50 py-20",children:s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center",children:s.jsx(Zr,{className:"h-10 w-10 text-blue-600"})}),s.jsx("h1",{className:"text-4xl lg:text-5xl font-bold text-gray-900 mb-6",children:"Financial Planning"}),s.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed",children:"Comprehensive financial roadmaps that cover your life goals, risk assessment, and strategic asset allocation. We cover everything from child education to retirement and estate planning."})]})})}),s.jsx("section",{className:"py-20 bg-white",children:s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:e.map((t,n)=>{const r=t.icon;return s.jsxs("div",{className:"bg-white border border-gray-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-300",children:[s.jsx("div",{className:"bg-blue-100 p-4 rounded-xl w-16 h-16 mb-6 flex items-center justify-center",children:s.jsx(r,{className:"h-8 w-8 text-blue-600"})}),s.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-4",children:t.title}),s.jsx("p",{className:"text-gray-600 leading-relaxed",children:t.description}),s.jsxs("a",{href:t.href,className:"inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors",children:["Learn More",s.jsx(Yn,{className:"ml-2 h-4 w-4"})]})]},n)})})})}),s.jsx("section",{className:"py-20 bg-blue-600",children:s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[s.jsx("h2",{className:"text-3xl lg:text-4xl font-bold text-white mb-6",children:"Plan Your Financial Future Today"}),s.jsx("p",{className:"text-xl text-blue-100 mb-8 max-w-2xl mx-auto",children:"Get a personalized financial roadmap tailored to your life goals."}),s.jsx("a",{href:"/contact",className:"bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors",children:"Get Expert Help, Fast."})]})})]})},BE=()=>{const e=[{icon:Pu,title:"Direct Tax Planning & ITR Filing",description:"Income tax planning, optimization strategies, and compliance for individuals and businesses.",href:"#/blog/direct-tax-planning"},{icon:nf,title:"Indirect Tax Planning & GST Compliance",description:"GST registration, filing, compliance, and optimization for businesses of all sizes.",href:"#/blog/indirect-tax-planning"},{icon:nf,title:"Tax-Saving Investment Strategies",description:"GST registration, filing, compliance, and optimization for businesses of all sizes.",href:"#/blog/tax-saving-investment-strategies"}];return s.jsxs("div",{className:"pt-16 lg:pt-20",children:[s.jsx("section",{className:"bg-gradient-to-br from-yellow-50 via-white to-green-50 py-20",children:s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"bg-yellow-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center",children:s.jsx(Pu,{className:"h-10 w-10 text-yellow-600"})}),s.jsx("h1",{className:"text-4xl lg:text-5xl font-bold text-gray-900 mb-6",children:"Tax Planning"}),s.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed",children:"Reduce your tax liabilities with our personalized tax planning and filing strategies. Be it direct or indirect taxes, we ensure optimized post-tax wealth creation."})]})})}),s.jsx("section",{className:"py-20 bg-white",children:s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-4xl mx-auto",children:e.map((t,n)=>{const r=t.icon;return s.jsxs("div",{className:"bg-white border border-gray-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-300",children:[s.jsx("div",{className:"bg-yellow-100 p-4 rounded-xl w-16 h-16 mb-6 flex items-center justify-center",children:s.jsx(r,{className:"h-8 w-8 text-yellow-600"})}),s.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-4",children:t.title}),s.jsx("p",{className:"text-gray-600 leading-relaxed",children:t.description}),s.jsxs("a",{href:t.href,className:"inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors",children:["Learn More",s.jsx(Yn,{className:"ml-2 h-4 w-4"})]})]},n)})})})}),s.jsx("section",{className:"py-20 bg-yellow-600",children:s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[s.jsx("h2",{className:"text-3xl lg:text-4xl font-bold text-white mb-6",children:"Save More on Taxes Legally"}),s.jsx("p",{className:"text-xl text-yellow-100 mb-8 max-w-2xl mx-auto",children:"Let our CA experts help you optimize your tax strategy and maximize savings."}),s.jsx("a",{href:"/contact",className:"bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors",children:"Get Expert Help, Fast."})]})})]})},HE=()=>{const e=[{icon:Ru,title:"Term & Life Insurance Advisory",description:"Comprehensive life insurance coverage to protect your family's financial future.",href:"#/blog/term-life-insurance"},{icon:J0,title:"Health & Medical Insurance",description:"Medical insurance plans to safeguard against rising healthcare costs.",href:"#/blog/health-insurance"},{icon:tf,title:"Motor & General Insurance",description:"Vehicle insurance and other general insurance products for complete protection.",href:"#/blog/motor-general-insurance"},{icon:tf,title:"Insurance Portfolio Review & Optimization",description:"Vehicle insurance and other general insurance products for complete protection.",href:"#/blog/insurance-portfolio-review"}];return s.jsxs("div",{className:"pt-16 lg:pt-20",children:[s.jsx("section",{className:"bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20",children:s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"bg-purple-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center",children:s.jsx(Ru,{className:"h-10 w-10 text-purple-600"})}),s.jsx("h1",{className:"text-4xl lg:text-5xl font-bold text-gray-900 mb-6",children:"Insurance Planning"}),s.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed",children:"Protecting your health, income, and legacy. We help you select the best life, health, and general insurance products with claim assistance."})]})})}),s.jsx("section",{className:"py-20 bg-white",children:s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:e.map((t,n)=>{const r=t.icon;return s.jsxs("div",{className:"bg-white border border-gray-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-300",children:[s.jsx("div",{className:"bg-purple-100 p-4 rounded-xl w-16 h-16 mb-6 flex items-center justify-center",children:s.jsx(r,{className:"h-8 w-8 text-purple-600"})}),s.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-4",children:t.title}),s.jsx("p",{className:"text-gray-600 leading-relaxed",children:t.description}),s.jsxs("a",{href:t.href,className:"inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors",children:["Learn More",s.jsx(Yn,{className:"ml-2 h-4 w-4"})]})]},n)})})})}),s.jsx("section",{className:"py-20 bg-purple-600",children:s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[s.jsx("h2",{className:"text-3xl lg:text-4xl font-bold text-white mb-6",children:"Secure Your Family's Future"}),s.jsx("p",{className:"text-xl text-purple-100 mb-8 max-w-2xl mx-auto",children:"Get the right insurance coverage tailored to your family's needs."}),s.jsx("a",{href:"/contact",className:"bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors",children:"Get Expert Help, Fast."})]})})]})},UE=()=>{const e=[{icon:Z0,title:"Home Loans & Property Finance",description:"Best interest rates and terms for your dream home purchase or construction.",href:"#/blog/home-loans"},{icon:K0,title:"Business Loans & MSME Finance",description:"Unlock the value of your property for business or personal needs.",href:"#/blog/business-loans"},{icon:fi,title:"Personal Loans & Consumer Finance",description:"Business loans and working capital solutions for small and medium enterprises.",href:"#/blog/personal-loans"},{icon:tg,title:"Builder Finance & Stressed Asset Funding",description:"Specialized funding solutions for distressed assets and restructuring needs.",href:"#/blog/builder-finance"}];return s.jsxs("div",{className:"pt-16 lg:pt-20",children:[s.jsx("section",{className:"bg-gradient-to-br from-red-50 via-white to-orange-50 py-20",children:s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"bg-red-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center",children:s.jsx(fi,{className:"h-10 w-10 text-red-600"})}),s.jsx("h1",{className:"text-4xl lg:text-5xl font-bold text-gray-900 mb-6",children:"Borrowing Solutions"}),s.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed",children:"Loans are a tool, not a trap. We help you get the best deals on home loans, business loans, and working capital with end-to-end support."})]})})}),s.jsx("section",{className:"py-20 bg-white",children:s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:e.map((t,n)=>{const r=t.icon;return s.jsxs("div",{className:"bg-white border border-gray-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-300",children:[s.jsx("div",{className:"bg-red-100 p-4 rounded-xl w-16 h-16 mb-6 flex items-center justify-center",children:s.jsx(r,{className:"h-8 w-8 text-red-600"})}),s.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-4",children:t.title}),s.jsx("p",{className:"text-gray-600 leading-relaxed",children:t.description}),s.jsxs("a",{href:t.href,className:"inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors",children:["Learn More",s.jsx(Yn,{className:"ml-2 h-4 w-4"})]})]},n)})})})}),s.jsx("section",{className:"py-20 bg-red-600",children:s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[s.jsx("h2",{className:"text-3xl lg:text-4xl font-bold text-white mb-6",children:"Get the Best Loan Deals"}),s.jsx("p",{className:"text-xl text-red-100 mb-8 max-w-2xl mx-auto",children:"Let us help you find the most competitive rates and terms for your borrowing needs."}),s.jsx("a",{href:"/contact",className:"bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors",children:"Get Expert Help, Fast."})]})})]})},zE=()=>{const e=[{icon:Z0,title:"Estate Planning & Wealth Transfer",description:"Best interest rates and terms for your dream home purchase or construction.",href:"#/blog/estate-planning-wealth-transfer"},{icon:K0,title:"Will Drafting & Trust Services",description:"Unlock the value of your property for business or personal needs.",href:"#/blog/will-drafting-trust-services"},{icon:fi,title:"Family Governance & Legacy Planning",description:"Business loans and working capital solutions for small and medium enterprises.",href:"#/blog/family-governance-legacy-planning"},{icon:tg,title:"Probate & Estate Administration",description:"Specialized funding solutions for distressed assets and restructuring needs.",href:"#/blog/probate-estate-administration"}];return s.jsxs("div",{className:"pt-16 lg:pt-20",children:[s.jsx("section",{className:"bg-gradient-to-br from-red-50 via-white to-orange-50 py-20",children:s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"bg-red-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center",children:s.jsx(fi,{className:"h-10 w-10 text-red-600"})}),s.jsx("h1",{className:"text-4xl lg:text-5xl font-bold text-gray-900 mb-6",children:"Succession Planning"}),s.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed",children:"Secure your legacy for the next generation."})]})})}),s.jsx("section",{className:"py-20 bg-white",children:s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:e.map((t,n)=>{const r=t.icon;return s.jsxs("div",{className:"bg-white border border-gray-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-300",children:[s.jsx("div",{className:"bg-red-100 p-4 rounded-xl w-16 h-16 mb-6 flex items-center justify-center",children:s.jsx(r,{className:"h-8 w-8 text-red-600"})}),s.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-4",children:t.title}),s.jsx("p",{className:"text-gray-600 leading-relaxed",children:t.description}),s.jsxs("a",{href:t.href,className:"inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors",children:["Learn More",s.jsx(Yn,{className:"ml-2 h-4 w-4"})]})]},n)})})})}),s.jsx("section",{className:"py-20 bg-red-600",children:s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[s.jsx("h2",{className:"text-3xl lg:text-4xl font-bold text-white mb-6",children:"Get the Best Loan Deals"}),s.jsx("p",{className:"text-xl text-red-100 mb-8 max-w-2xl mx-auto",children:"Let us help you find the most competitive rates and terms for your borrowing needs."}),s.jsx("a",{href:"/contact",className:"bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors",children:"Get Expert Help, Fast."})]})})]})},qE=()=>{const e=[{name:"HDFC Bank",logo:"https://via.placeholder.com/200x100/1f2937/ffffff?text=HDFC+BANK"},{name:"ICICI Bank",logo:"https://via.placeholder.com/200x100/1f2937/ffffff?text=ICICI+BANK"},{name:"State Bank of India",logo:"https://via.placeholder.com/200x100/1f2937/ffffff?text=SBI"},{name:"Axis Bank",logo:"https://via.placeholder.com/200x100/1f2937/ffffff?text=AXIS+BANK"},{name:"Kotak Mahindra Bank",logo:"https://via.placeholder.com/200x100/1f2937/ffffff?text=KOTAK"},{name:"Life Insurance Corporation",logo:"https://via.placeholder.com/200x100/1f2937/ffffff?text=LIC"},{name:"HDFC Life",logo:"https://via.placeholder.com/200x100/1f2937/ffffff?text=HDFC+LIFE"},{name:"ICICI Prudential",logo:"https://via.placeholder.com/200x100/1f2937/ffffff?text=ICICI+PRUD"},{name:"Bajaj Finserv",logo:"https://via.placeholder.com/200x100/1f2937/ffffff?text=BAJAJ"},{name:"Tata AIG",logo:"https://via.placeholder.com/200x100/1f2937/ffffff?text=TATA+AIG"},{name:"Reliance Nippon Life",logo:"https://via.placeholder.com/200x100/1f2937/ffffff?text=RELIANCE"},{name:"Max Life Insurance",logo:"https://via.placeholder.com/200x100/1f2937/ffffff?text=MAX+LIFE"}];return s.jsxs("div",{className:"pt-16 lg:pt-20",children:[s.jsx("section",{className:"bg-gradient-to-br from-green-50 via-white to-blue-50 py-20",children:s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"text-center",children:[s.jsx("h1",{className:"text-4xl lg:text-5xl font-bold text-gray-900 mb-6",children:"Our Trusted Partners"}),s.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed",children:"We collaborate with leading financial institutions across India to bring you the best products and services for all your financial needs."})]})})}),s.jsx("section",{className:"py-20 bg-white",children:s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8",children:e.map((t,n)=>s.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 flex items-center justify-center",children:s.jsx("img",{src:t.logo,alt:t.name,className:"max-w-full h-16 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"})},n))})})}),s.jsx("section",{className:"py-20 bg-gray-50",children:s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[s.jsxs("div",{className:"text-center mb-16",children:[s.jsx("h2",{className:"text-3xl lg:text-4xl font-bold text-gray-900 mb-4",children:"Why Our Partnerships Matter"}),s.jsx("p",{className:"text-xl text-gray-600",children:"Strategic alliances that benefit our clients"})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center",children:s.jsx("span",{className:"text-2xl font-bold text-green-600",children:"1"})}),s.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Best Rates"}),s.jsx("p",{className:"text-gray-600 leading-relaxed",children:"Access to preferential rates and exclusive products through our strong partnerships."})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center",children:s.jsx("span",{className:"text-2xl font-bold text-blue-600",children:"2"})}),s.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Wide Choice"}),s.jsx("p",{className:"text-gray-600 leading-relaxed",children:"Compare products from multiple providers to find the perfect fit for your needs."})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center",children:s.jsx("span",{className:"text-2xl font-bold text-yellow-600",children:"3"})}),s.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Faster Processing"}),s.jsx("p",{className:"text-gray-600 leading-relaxed",children:"Streamlined processes and dedicated support for quicker approvals and service."})]})]})]})})]})};var Hu={exports:{}},No={};function YE(e){return e&&e.__esModule?e:{default:e}}No._=YE;var hg={};function fg(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(fg=function(r){return r?n:t})(e)}function WE(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=fg(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var o=a?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}hg._=WE;var fl={},lf;function GE(){return lf||(lf=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i}});const t=q,n=typeof window>"u",r=n?()=>{}:t.useLayoutEffect,a=n?()=>{}:t.useEffect;function i(o){const{headManager:l,reduceComponentsToState:u}=o;function d(){if(l&&l.mountedInstances){const h=t.Children.toArray(Array.from(l.mountedInstances).filter(Boolean));l.updateHead(u(h,o))}}if(n){var f;l==null||(f=l.mountedInstances)==null||f.add(o.children),d()}return r(()=>{var h;return l==null||(h=l.mountedInstances)==null||h.add(o.children),()=>{var p;l==null||(p=l.mountedInstances)==null||p.delete(o.children)}}),r(()=>(l&&(l._pendingUpdate=d),()=>{l&&(l._pendingUpdate=d)})),a(()=>(l&&l._pendingUpdate&&(l._pendingUpdate(),l._pendingUpdate=null),()=>{l&&l._pendingUpdate&&(l._pendingUpdate(),l._pendingUpdate=null)})),null}}(fl)),fl}var pl={},uf;function VE(){return uf||(uf=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"AmpStateContext",{enumerable:!0,get:function(){return r}});const r=No._(q).default.createContext({})}(pl)),pl}var ml={},cf;function $E(){return cf||(cf=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"HeadManagerContext",{enumerable:!0,get:function(){return r}});const r=No._(q).default.createContext({})}(ml)),ml}var gl={},df;function QE(){return df||(df=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"isInAmpMode",{enumerable:!0,get:function(){return t}});function t(n){let{ampFirst:r=!1,hybrid:a=!1,hasQuery:i=!1}=n===void 0?{}:n;return r||a&&i}}(gl)),gl}var yl={},hf;function KE(){return hf||(hf=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"warnOnce",{enumerable:!0,get:function(){return t}});let t=n=>{}}(yl)),yl}(function(e,t){"use client";Object.defineProperty(t,"__esModule",{value:!0});function n(y,E){for(var N in E)Object.defineProperty(y,N,{enumerable:!0,get:E[N]})}n(t,{default:function(){return g},defaultHead:function(){return h}});const r=No,a=hg,i=s,o=a._(q),l=r._(GE()),u=VE(),d=$E(),f=QE();KE();function h(y){y===void 0&&(y=!1);const E=[(0,i.jsx)("meta",{charSet:"utf-8"},"charset")];return y||E.push((0,i.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),E}function p(y,E){return typeof E=="string"||typeof E=="number"?y:E.type===o.default.Fragment?y.concat(o.default.Children.toArray(E.props.children).reduce((N,P)=>typeof P=="string"||typeof P=="number"?N:N.concat(P),[])):y.concat(E)}const m=["name","httpEquiv","charSet","itemProp"];function x(){const y=new Set,E=new Set,N=new Set,P={};return C=>{let D=!0,H=!1;if(C.key&&typeof C.key!="number"&&C.key.indexOf("$")>0){H=!0;const V=C.key.slice(C.key.indexOf("$")+1);y.has(V)?D=!1:y.add(V)}switch(C.type){case"title":case"base":E.has(C.type)?D=!1:E.add(C.type);break;case"meta":for(let V=0,w=m.length;V<w;V++){const U=m[V];if(C.props.hasOwnProperty(U))if(U==="charSet")N.has(U)?D=!1:N.add(U);else{const G=C.props[U],te=P[U]||new Set;(U!=="name"||!H)&&te.has(G)?D=!1:(te.add(G),P[U]=te)}}break}return D}}function S(y,E){const{inAmpMode:N}=E;return y.reduce(p,[]).reverse().concat(h(N).reverse()).filter(x()).reverse().map((P,C)=>{const D=P.key||C;return o.default.cloneElement(P,{key:D})})}function A(y){let{children:E}=y;const N=(0,o.useContext)(u.AmpStateContext),P=(0,o.useContext)(d.HeadManagerContext);return(0,i.jsx)(l.default,{reduceComponentsToState:S,headManager:P,inAmpMode:(0,f.isInAmpMode)(N),children:E})}const g=A;(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)})(Hu,Hu.exports);var XE=Hu.exports,JE=XE;const Ne=ra(JE);function ff(e){const t=[],n=String(e||"");let r=n.indexOf(","),a=0,i=!1;for(;!i;){r===-1&&(r=n.length,i=!0);const o=n.slice(a,r).trim();(o||!i)&&t.push(o),a=r+1,r=n.indexOf(",",a)}return t}function pg(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const ZE=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,eT=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,tT={};function pf(e,t){return(tT.jsx?eT:ZE).test(e)}const nT=/[ \t\n\f\r]/g;function rT(e){return typeof e=="object"?e.type==="text"?mf(e.value):!1:mf(e)}function mf(e){return e.replace(nT,"")===""}let ki=class{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}};ki.prototype.normal={};ki.prototype.property={};ki.prototype.space=void 0;function mg(e,t){const n={},r={};for(const a of e)Object.assign(n,a.property),Object.assign(r,a.normal);return new ki(n,r,t)}function pi(e){return e.toLowerCase()}let yt=class{constructor(t,n){this.attribute=n,this.property=t}};yt.prototype.attribute="";yt.prototype.booleanish=!1;yt.prototype.boolean=!1;yt.prototype.commaOrSpaceSeparated=!1;yt.prototype.commaSeparated=!1;yt.prototype.defined=!1;yt.prototype.mustUseProperty=!1;yt.prototype.number=!1;yt.prototype.overloadedBoolean=!1;yt.prototype.property="";yt.prototype.spaceSeparated=!1;yt.prototype.space=void 0;let aT=0;const J=mr(),Me=mr(),Uu=mr(),F=mr(),ge=mr(),Yr=mr(),bt=mr();function mr(){return 2**++aT}const zu=Object.freeze(Object.defineProperty({__proto__:null,boolean:J,booleanish:Me,commaOrSpaceSeparated:bt,commaSeparated:Yr,number:F,overloadedBoolean:Uu,spaceSeparated:ge},Symbol.toStringTag,{value:"Module"})),xl=Object.keys(zu);let ud=class extends yt{constructor(t,n,r,a){let i=-1;if(super(t,n),gf(this,"space",a),typeof r=="number")for(;++i<xl.length;){const o=xl[i];gf(this,xl[i],(r&zu[o])===zu[o])}}};ud.prototype.defined=!0;function gf(e,t,n){n&&(e[t]=n)}function oa(e){const t={},n={};for(const[r,a]of Object.entries(e.properties)){const i=new ud(r,e.transform(e.attributes||{},r),a,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(i.mustUseProperty=!0),t[r]=i,n[pi(r)]=r,n[pi(i.attribute)]=r}return new ki(t,n,e.space)}const gg=oa({properties:{ariaActiveDescendant:null,ariaAtomic:Me,ariaAutoComplete:null,ariaBusy:Me,ariaChecked:Me,ariaColCount:F,ariaColIndex:F,ariaColSpan:F,ariaControls:ge,ariaCurrent:null,ariaDescribedBy:ge,ariaDetails:null,ariaDisabled:Me,ariaDropEffect:ge,ariaErrorMessage:null,ariaExpanded:Me,ariaFlowTo:ge,ariaGrabbed:Me,ariaHasPopup:null,ariaHidden:Me,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ge,ariaLevel:F,ariaLive:null,ariaModal:Me,ariaMultiLine:Me,ariaMultiSelectable:Me,ariaOrientation:null,ariaOwns:ge,ariaPlaceholder:null,ariaPosInSet:F,ariaPressed:Me,ariaReadOnly:Me,ariaRelevant:null,ariaRequired:Me,ariaRoleDescription:ge,ariaRowCount:F,ariaRowIndex:F,ariaRowSpan:F,ariaSelected:Me,ariaSetSize:F,ariaSort:null,ariaValueMax:F,ariaValueMin:F,ariaValueNow:F,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function yg(e,t){return t in e?e[t]:t}function xg(e,t){return yg(e,t.toLowerCase())}const iT=oa({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Yr,acceptCharset:ge,accessKey:ge,action:null,allow:null,allowFullScreen:J,allowPaymentRequest:J,allowUserMedia:J,alt:null,as:null,async:J,autoCapitalize:null,autoComplete:ge,autoFocus:J,autoPlay:J,blocking:ge,capture:null,charSet:null,checked:J,cite:null,className:ge,cols:F,colSpan:null,content:null,contentEditable:Me,controls:J,controlsList:ge,coords:F|Yr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:J,defer:J,dir:null,dirName:null,disabled:J,download:Uu,draggable:Me,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:J,formTarget:null,headers:ge,height:F,hidden:Uu,high:F,href:null,hrefLang:null,htmlFor:ge,httpEquiv:ge,id:null,imageSizes:null,imageSrcSet:null,inert:J,inputMode:null,integrity:null,is:null,isMap:J,itemId:null,itemProp:ge,itemRef:ge,itemScope:J,itemType:ge,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:J,low:F,manifest:null,max:null,maxLength:F,media:null,method:null,min:null,minLength:F,multiple:J,muted:J,name:null,nonce:null,noModule:J,noValidate:J,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:J,optimum:F,pattern:null,ping:ge,placeholder:null,playsInline:J,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:J,referrerPolicy:null,rel:ge,required:J,reversed:J,rows:F,rowSpan:F,sandbox:ge,scope:null,scoped:J,seamless:J,selected:J,shadowRootClonable:J,shadowRootDelegatesFocus:J,shadowRootMode:null,shape:null,size:F,sizes:null,slot:null,span:F,spellCheck:Me,src:null,srcDoc:null,srcLang:null,srcSet:null,start:F,step:null,style:null,tabIndex:F,target:null,title:null,translate:null,type:null,typeMustMatch:J,useMap:null,value:Me,width:F,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ge,axis:null,background:null,bgColor:null,border:F,borderColor:null,bottomMargin:F,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:J,declare:J,event:null,face:null,frame:null,frameBorder:null,hSpace:F,leftMargin:F,link:null,longDesc:null,lowSrc:null,marginHeight:F,marginWidth:F,noResize:J,noHref:J,noShade:J,noWrap:J,object:null,profile:null,prompt:null,rev:null,rightMargin:F,rules:null,scheme:null,scrolling:Me,standby:null,summary:null,text:null,topMargin:F,valueType:null,version:null,vAlign:null,vLink:null,vSpace:F,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:J,disableRemotePlayback:J,prefix:null,property:null,results:F,security:null,unselectable:null},space:"html",transform:xg}),sT=oa({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:bt,accentHeight:F,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:F,amplitude:F,arabicForm:null,ascent:F,attributeName:null,attributeType:null,azimuth:F,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:F,by:null,calcMode:null,capHeight:F,className:ge,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:F,diffuseConstant:F,direction:null,display:null,dur:null,divisor:F,dominantBaseline:null,download:J,dx:null,dy:null,edgeMode:null,editable:null,elevation:F,enableBackground:null,end:null,event:null,exponent:F,externalResourcesRequired:null,fill:null,fillOpacity:F,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Yr,g2:Yr,glyphName:Yr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:F,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:F,horizOriginX:F,horizOriginY:F,id:null,ideographic:F,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:F,k:F,k1:F,k2:F,k3:F,k4:F,kernelMatrix:bt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:F,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:F,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:F,overlineThickness:F,paintOrder:null,panose1:null,path:null,pathLength:F,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ge,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:F,pointsAtY:F,pointsAtZ:F,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:bt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:bt,rev:bt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:bt,requiredFeatures:bt,requiredFonts:bt,requiredFormats:bt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:F,specularExponent:F,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:F,strikethroughThickness:F,string:null,stroke:null,strokeDashArray:bt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:F,strokeOpacity:F,strokeWidth:null,style:null,surfaceScale:F,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:bt,tabIndex:F,tableValues:null,target:null,targetX:F,targetY:F,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:bt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:F,underlineThickness:F,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:F,values:null,vAlphabetic:F,vMathematical:F,vectorEffect:null,vHanging:F,vIdeographic:F,version:null,vertAdvY:F,vertOriginX:F,vertOriginY:F,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:F,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:yg}),bg=oa({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),Eg=oa({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:xg}),Tg=oa({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),oT={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},lT=/[A-Z]/g,yf=/-[a-z]/g,uT=/^data[-\w.:]+$/i;function cd(e,t){const n=pi(t);let r=t,a=yt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&uT.test(t)){if(t.charAt(4)==="-"){const i=t.slice(5).replace(yf,dT);r="data"+i.charAt(0).toUpperCase()+i.slice(1)}else{const i=t.slice(4);if(!yf.test(i)){let o=i.replace(lT,cT);o.charAt(0)!=="-"&&(o="-"+o),t="data"+o}}a=ud}return new a(r,t)}function cT(e){return"-"+e.toLowerCase()}function dT(e){return e.charAt(1).toUpperCase()}const wo=mg([gg,iT,bg,Eg,Tg],"html"),la=mg([gg,sT,bg,Eg,Tg],"svg");function xf(e){const t=String(e||"").trim();return t?t.split(/[ \t\n\r\f]+/g):[]}function vg(e){return e.join(" ").trim()}var dd={},bf=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,hT=/\n/g,fT=/^\s*/,pT=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,mT=/^:\s*/,gT=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,yT=/^[;\s]*/,xT=/^\s+|\s+$/g,bT=`
`,Ef="/",Tf="*",Zn="",ET="comment",TT="declaration",vT=function(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function a(x){var S=x.match(hT);S&&(n+=S.length);var A=x.lastIndexOf(bT);r=~A?x.length-A:r+x.length}function i(){var x={line:n,column:r};return function(S){return S.position=new o(x),d(),S}}function o(x){this.start=x,this.end={line:n,column:r},this.source=t.source}o.prototype.content=e;function l(x){var S=new Error(t.source+":"+n+":"+r+": "+x);if(S.reason=x,S.filename=t.source,S.line=n,S.column=r,S.source=e,!t.silent)throw S}function u(x){var S=x.exec(e);if(S){var A=S[0];return a(A),e=e.slice(A.length),S}}function d(){u(fT)}function f(x){var S;for(x=x||[];S=h();)S!==!1&&x.push(S);return x}function h(){var x=i();if(!(Ef!=e.charAt(0)||Tf!=e.charAt(1))){for(var S=2;Zn!=e.charAt(S)&&(Tf!=e.charAt(S)||Ef!=e.charAt(S+1));)++S;if(S+=2,Zn===e.charAt(S-1))return l("End of comment missing");var A=e.slice(2,S-2);return r+=2,a(A),e=e.slice(S),r+=2,x({type:ET,comment:A})}}function p(){var x=i(),S=u(pT);if(S){if(h(),!u(mT))return l("property missing ':'");var A=u(gT),g=x({type:TT,property:vf(S[0].replace(bf,Zn)),value:A?vf(A[0].replace(bf,Zn)):Zn});return u(yT),g}}function m(){var x=[];f(x);for(var S;S=p();)S!==!1&&(x.push(S),f(x));return x}return d(),m()};function vf(e){return e?e.replace(xT,Zn):Zn}var _T=xs&&xs.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(dd,"__esModule",{value:!0});dd.default=kT;var ST=_T(vT);function kT(e,t){var n=null;if(!e||typeof e!="string")return n;var r=(0,ST.default)(e),a=typeof t=="function";return r.forEach(function(i){if(i.type==="declaration"){var o=i.property,l=i.value;a?t(o,l,i):l&&(n=n||{},n[o]=l)}}),n}var Ao={};Object.defineProperty(Ao,"__esModule",{value:!0});Ao.camelCase=void 0;var CT=/^--[a-zA-Z0-9_-]+$/,NT=/-([a-z])/g,wT=/^[^-]+$/,AT=/^-(webkit|moz|ms|o|khtml)-/,IT=/^-(ms)-/,PT=function(e){return!e||wT.test(e)||CT.test(e)},LT=function(e,t){return t.toUpperCase()},_f=function(e,t){return"".concat(t,"-")},RT=function(e,t){return t===void 0&&(t={}),PT(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(IT,_f):e=e.replace(AT,_f),e.replace(NT,LT))};Ao.camelCase=RT;var DT=xs&&xs.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},OT=DT(dd),MT=Ao;function qu(e,t){var n={};return!e||typeof e!="string"||(0,OT.default)(e,function(r,a){r&&a&&(n[(0,MT.camelCase)(r,t)]=a)}),n}qu.default=qu;var jT=qu;const FT=ra(jT),Io=_g("end"),an=_g("start");function _g(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function BT(e){const t=an(e),n=Io(e);if(t&&n)return{start:t,end:n}}function za(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Sf(e.position):"start"in e||"end"in e?Sf(e):"line"in e||"column"in e?Yu(e):""}function Yu(e){return kf(e&&e.line)+":"+kf(e&&e.column)}function Sf(e){return Yu(e&&e.start)+"-"+Yu(e&&e.end)}function kf(e){return e&&typeof e=="number"?e:1}class tt extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let a="",i={},o=!1;if(n&&("line"in n&&"column"in n?i={place:n}:"start"in n&&"end"in n?i={place:n}:"type"in n?i={ancestors:[n],place:n.position}:i={...n}),typeof t=="string"?a=t:!i.cause&&t&&(o=!0,a=t.message,i.cause=t),!i.ruleId&&!i.source&&typeof r=="string"){const u=r.indexOf(":");u===-1?i.ruleId=r:(i.source=r.slice(0,u),i.ruleId=r.slice(u+1))}if(!i.place&&i.ancestors&&i.ancestors){const u=i.ancestors[i.ancestors.length-1];u&&(i.place=u.position)}const l=i.place&&"start"in i.place?i.place.start:i.place;this.ancestors=i.ancestors||void 0,this.cause=i.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=a,this.line=l?l.line:void 0,this.name=za(i.place)||"1:1",this.place=i.place||void 0,this.reason=this.message,this.ruleId=i.ruleId||void 0,this.source=i.source||void 0,this.stack=o&&i.cause&&typeof i.cause.stack=="string"?i.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}tt.prototype.file="";tt.prototype.name="";tt.prototype.reason="";tt.prototype.message="";tt.prototype.stack="";tt.prototype.column=void 0;tt.prototype.line=void 0;tt.prototype.ancestors=void 0;tt.prototype.cause=void 0;tt.prototype.fatal=void 0;tt.prototype.place=void 0;tt.prototype.ruleId=void 0;tt.prototype.source=void 0;const hd={}.hasOwnProperty,HT=new Map,UT=/[A-Z]/g,zT=new Set(["table","tbody","thead","tfoot","tr"]),qT=new Set(["td","th"]),Sg="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function YT(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=JT(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=XT(n,t.jsx,t.jsxs)}const a={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?la:wo,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},i=kg(a,e,void 0);return i&&typeof i!="string"?i:a.create(e,a.Fragment,{children:i||void 0},void 0)}function kg(e,t,n){if(t.type==="element")return WT(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return GT(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return $T(e,t,n);if(t.type==="mdxjsEsm")return VT(e,t);if(t.type==="root")return QT(e,t,n);if(t.type==="text")return KT(e,t)}function WT(e,t,n){const r=e.schema;let a=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(a=la,e.schema=a),e.ancestors.push(t);const i=Ng(e,t.tagName,!1),o=ZT(e,t);let l=pd(e,t);return zT.has(t.tagName)&&(l=l.filter(function(u){return typeof u=="string"?!rT(u):!0})),Cg(e,o,i,t),fd(o,l),e.ancestors.pop(),e.schema=r,e.create(t,i,o,n)}function GT(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}mi(e,t.position)}function VT(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);mi(e,t.position)}function $T(e,t,n){const r=e.schema;let a=r;t.name==="svg"&&r.space==="html"&&(a=la,e.schema=a),e.ancestors.push(t);const i=t.name===null?e.Fragment:Ng(e,t.name,!0),o=ev(e,t),l=pd(e,t);return Cg(e,o,i,t),fd(o,l),e.ancestors.pop(),e.schema=r,e.create(t,i,o,n)}function QT(e,t,n){const r={};return fd(r,pd(e,t)),e.create(t,e.Fragment,r,n)}function KT(e,t){return t.value}function Cg(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function fd(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function XT(e,t,n){return r;function r(a,i,o,l){const d=Array.isArray(o.children)?n:t;return l?d(i,o,l):d(i,o)}}function JT(e,t){return n;function n(r,a,i,o){const l=Array.isArray(i.children),u=an(r);return t(a,i,o,l,{columnNumber:u?u.column-1:void 0,fileName:e,lineNumber:u?u.line:void 0},void 0)}}function ZT(e,t){const n={};let r,a;for(a in t.properties)if(a!=="children"&&hd.call(t.properties,a)){const i=tv(e,a,t.properties[a]);if(i){const[o,l]=i;e.tableCellAlignToStyle&&o==="align"&&typeof l=="string"&&qT.has(t.tagName)?r=l:n[o]=l}}if(r){const i=n.style||(n.style={});i[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function ev(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const i=r.data.estree.body[0];i.type;const o=i.expression;o.type;const l=o.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument))}else mi(e,t.position);else{const a=r.name;let i;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const l=r.value.data.estree.body[0];l.type,i=e.evaluater.evaluateExpression(l.expression)}else mi(e,t.position);else i=r.value===null?!0:r.value;n[a]=i}return n}function pd(e,t){const n=[];let r=-1;const a=e.passKeys?new Map:HT;for(;++r<t.children.length;){const i=t.children[r];let o;if(e.passKeys){const u=i.type==="element"?i.tagName:i.type==="mdxJsxFlowElement"||i.type==="mdxJsxTextElement"?i.name:void 0;if(u){const d=a.get(u)||0;o=u+"-"+d,a.set(u,d+1)}}const l=kg(e,i,o);l!==void 0&&n.push(l)}return n}function tv(e,t,n){const r=cd(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?pg(n):vg(n)),r.property==="style"){let a=typeof n=="object"?n:nv(e,String(n));return e.stylePropertyNameCase==="css"&&(a=rv(a)),["style",a]}return[e.elementAttributeNameCase==="react"&&r.space?oT[r.property]||r.property:r.attribute,n]}}function nv(e,t){try{return FT(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,a=new tt("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw a.file=e.filePath||void 0,a.url=Sg+"#cannot-parse-style-attribute",a}}function Ng(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const a=t.split(".");let i=-1,o;for(;++i<a.length;){const l=pf(a[i])?{type:"Identifier",name:a[i]}:{type:"Literal",value:a[i]};o=o?{type:"MemberExpression",object:o,property:l,computed:!!(i&&l.type==="Literal"),optional:!1}:l}r=o}else r=pf(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const a=r.value;return hd.call(e.components,a)?e.components[a]:a}if(e.evaluater)return e.evaluater.evaluateExpression(r);mi(e)}function mi(e,t){const n=new tt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Sg+"#cannot-handle-mdx-estrees-without-createevaluater",n}function rv(e){const t={};let n;for(n in e)hd.call(e,n)&&(t[av(n)]=e[n]);return t}function av(e){let t=e.replace(UT,iv);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function iv(e){return"-"+e.toLowerCase()}const bl={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},sv={};function md(e,t){const n=sv,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,a=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return wg(e,r,a)}function wg(e,t,n){if(ov(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Cf(e.children,t,n)}return Array.isArray(e)?Cf(e,t,n):""}function Cf(e,t,n){const r=[];let a=-1;for(;++a<e.length;)r[a]=wg(e[a],t,n);return r.join("")}function ov(e){return!!(e&&typeof e=="object")}const Nf=document.createElement("i");function gd(e){const t="&"+e+";";Nf.innerHTML=t;const n=Nf.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function St(e,t,n,r){const a=e.length;let i=0,o;if(t<0?t=-t>a?0:a+t:t=t>a?a:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);i<r.length;)o=r.slice(i,i+1e4),o.unshift(t,0),e.splice(...o),i+=1e4,t+=1e4}function Pt(e,t){return e.length>0?(St(e,e.length,0,t),e):t}const wf={}.hasOwnProperty;function Ag(e){const t={};let n=-1;for(;++n<e.length;)lv(t,e[n]);return t}function lv(e,t){let n;for(n in t){const a=(wf.call(e,n)?e[n]:void 0)||(e[n]={}),i=t[n];let o;if(i)for(o in i){wf.call(a,o)||(a[o]=[]);const l=i[o];uv(a[o],Array.isArray(l)?l:l?[l]:[])}}}function uv(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);St(e,0,0,r)}function Ig(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Vt(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const at=$n(/[A-Za-z]/),Ze=$n(/[\dA-Za-z]/),cv=$n(/[#-'*+\--9=?A-Z^-~]/);function Gs(e){return e!==null&&(e<32||e===127)}const Wu=$n(/\d/),dv=$n(/[\dA-Fa-f]/),hv=$n(/[!-/:-@[-`{-~]/);function $(e){return e!==null&&e<-2}function pe(e){return e!==null&&(e<0||e===32)}function ne(e){return e===-2||e===-1||e===32}const Po=$n(new RegExp("\\p{P}|\\p{S}","u")),hr=$n(/\s/);function $n(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function ua(e){const t=[];let n=-1,r=0,a=0;for(;++n<e.length;){const i=e.charCodeAt(n);let o="";if(i===37&&Ze(e.charCodeAt(n+1))&&Ze(e.charCodeAt(n+2)))a=2;else if(i<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i))||(o=String.fromCharCode(i));else if(i>55295&&i<57344){const l=e.charCodeAt(n+1);i<56320&&l>56319&&l<57344?(o=String.fromCharCode(i,l),a=1):o="�"}else o=String.fromCharCode(i);o&&(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+a+1,o=""),a&&(n+=a,a=0)}return t.join("")+e.slice(r)}function oe(e,t,n,r){const a=r?r-1:Number.POSITIVE_INFINITY;let i=0;return o;function o(u){return ne(u)?(e.enter(n),l(u)):t(u)}function l(u){return ne(u)&&i++<a?(e.consume(u),l):(e.exit(n),t(u))}}const fv={tokenize:pv};function pv(e){const t=e.attempt(this.parser.constructs.contentInitial,r,a);let n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),oe(e,t,"linePrefix")}function a(l){return e.enter("paragraph"),i(l)}function i(l){const u=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=u),n=u,o(l)}function o(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return $(l)?(e.consume(l),e.exit("chunkText"),i):(e.consume(l),o)}}const mv={tokenize:gv},Af={tokenize:yv};function gv(e){const t=this,n=[];let r=0,a,i,o;return l;function l(E){if(r<n.length){const N=n[r];return t.containerState=N[1],e.attempt(N[0].continuation,u,d)(E)}return d(E)}function u(E){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,a&&y();const N=t.events.length;let P=N,C;for(;P--;)if(t.events[P][0]==="exit"&&t.events[P][1].type==="chunkFlow"){C=t.events[P][1].end;break}g(r);let D=N;for(;D<t.events.length;)t.events[D][1].end={...C},D++;return St(t.events,P+1,0,t.events.slice(N)),t.events.length=D,d(E)}return l(E)}function d(E){if(r===n.length){if(!a)return p(E);if(a.currentConstruct&&a.currentConstruct.concrete)return x(E);t.interrupt=!!(a.currentConstruct&&!a._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Af,f,h)(E)}function f(E){return a&&y(),g(r),p(E)}function h(E){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,x(E)}function p(E){return t.containerState={},e.attempt(Af,m,x)(E)}function m(E){return r++,n.push([t.currentConstruct,t.containerState]),p(E)}function x(E){if(E===null){a&&y(),g(0),e.consume(E);return}return a=a||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:a,contentType:"flow",previous:i}),S(E)}function S(E){if(E===null){A(e.exit("chunkFlow"),!0),g(0),e.consume(E);return}return $(E)?(e.consume(E),A(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(E),S)}function A(E,N){const P=t.sliceStream(E);if(N&&P.push(null),E.previous=i,i&&(i.next=E),i=E,a.defineSkip(E.start),a.write(P),t.parser.lazy[E.start.line]){let C=a.events.length;for(;C--;)if(a.events[C][1].start.offset<o&&(!a.events[C][1].end||a.events[C][1].end.offset>o))return;const D=t.events.length;let H=D,V,w;for(;H--;)if(t.events[H][0]==="exit"&&t.events[H][1].type==="chunkFlow"){if(V){w=t.events[H][1].end;break}V=!0}for(g(r),C=D;C<t.events.length;)t.events[C][1].end={...w},C++;St(t.events,H+1,0,t.events.slice(D)),t.events.length=C}}function g(E){let N=n.length;for(;N-- >E;){const P=n[N];t.containerState=P[1],P[0].exit.call(t,e)}n.length=E}function y(){a.write([null]),i=void 0,a=void 0,t.containerState._closeFlow=void 0}}function yv(e,t,n){return oe(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function ea(e){if(e===null||pe(e)||hr(e))return 1;if(Po(e))return 2}function Lo(e,t,n){const r=[];let a=-1;for(;++a<e.length;){const i=e[a].resolveAll;i&&!r.includes(i)&&(t=i(t,n),r.push(i))}return t}const Gu={name:"attention",resolveAll:xv,tokenize:bv};function xv(e,t){let n=-1,r,a,i,o,l,u,d,f;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;u=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const h={...e[r][1].end},p={...e[n][1].start};If(h,-u),If(p,u),o={type:u>1?"strongSequence":"emphasisSequence",start:h,end:{...e[r][1].end}},l={type:u>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:p},i={type:u>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},a={type:u>1?"strong":"emphasis",start:{...o.start},end:{...l.end}},e[r][1].end={...o.start},e[n][1].start={...l.end},d=[],e[r][1].end.offset-e[r][1].start.offset&&(d=Pt(d,[["enter",e[r][1],t],["exit",e[r][1],t]])),d=Pt(d,[["enter",a,t],["enter",o,t],["exit",o,t],["enter",i,t]]),d=Pt(d,Lo(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),d=Pt(d,[["exit",i,t],["enter",l,t],["exit",l,t],["exit",a,t]]),e[n][1].end.offset-e[n][1].start.offset?(f=2,d=Pt(d,[["enter",e[n][1],t],["exit",e[n][1],t]])):f=0,St(e,r-1,n-r+3,d),n=r+d.length-f-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function bv(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,a=ea(r);let i;return o;function o(u){return i=u,e.enter("attentionSequence"),l(u)}function l(u){if(u===i)return e.consume(u),l;const d=e.exit("attentionSequence"),f=ea(u),h=!f||f===2&&a||n.includes(u),p=!a||a===2&&f||n.includes(r);return d._open=!!(i===42?h:h&&(a||!p)),d._close=!!(i===42?p:p&&(f||!h)),t(u)}}function If(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Ev={name:"autolink",tokenize:Tv};function Tv(e,t,n){let r=0;return a;function a(m){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),i}function i(m){return at(m)?(e.consume(m),o):m===64?n(m):d(m)}function o(m){return m===43||m===45||m===46||Ze(m)?(r=1,l(m)):d(m)}function l(m){return m===58?(e.consume(m),r=0,u):(m===43||m===45||m===46||Ze(m))&&r++<32?(e.consume(m),l):(r=0,d(m))}function u(m){return m===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):m===null||m===32||m===60||Gs(m)?n(m):(e.consume(m),u)}function d(m){return m===64?(e.consume(m),f):cv(m)?(e.consume(m),d):n(m)}function f(m){return Ze(m)?h(m):n(m)}function h(m){return m===46?(e.consume(m),r=0,f):m===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):p(m)}function p(m){if((m===45||Ze(m))&&r++<63){const x=m===45?p:h;return e.consume(m),x}return n(m)}}const Ci={partial:!0,tokenize:vv};function vv(e,t,n){return r;function r(i){return ne(i)?oe(e,a,"linePrefix")(i):a(i)}function a(i){return i===null||$(i)?t(i):n(i)}}const Pg={continuation:{tokenize:Sv},exit:kv,name:"blockQuote",tokenize:_v};function _v(e,t,n){const r=this;return a;function a(o){if(o===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),i}return n(o)}function i(o){return ne(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(o))}}function Sv(e,t,n){const r=this;return a;function a(o){return ne(o)?oe(e,i,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):i(o)}function i(o){return e.attempt(Pg,t,n)(o)}}function kv(e){e.exit("blockQuote")}const Lg={name:"characterEscape",tokenize:Cv};function Cv(e,t,n){return r;function r(i){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(i),e.exit("escapeMarker"),a}function a(i){return hv(i)?(e.enter("characterEscapeValue"),e.consume(i),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(i)}}const Rg={name:"characterReference",tokenize:Nv};function Nv(e,t,n){const r=this;let a=0,i,o;return l;function l(h){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(h),e.exit("characterReferenceMarker"),u}function u(h){return h===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(h),e.exit("characterReferenceMarkerNumeric"),d):(e.enter("characterReferenceValue"),i=31,o=Ze,f(h))}function d(h){return h===88||h===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(h),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),i=6,o=dv,f):(e.enter("characterReferenceValue"),i=7,o=Wu,f(h))}function f(h){if(h===59&&a){const p=e.exit("characterReferenceValue");return o===Ze&&!gd(r.sliceSerialize(p))?n(h):(e.enter("characterReferenceMarker"),e.consume(h),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return o(h)&&a++<i?(e.consume(h),f):n(h)}}const Pf={partial:!0,tokenize:Av},Lf={concrete:!0,name:"codeFenced",tokenize:wv};function wv(e,t,n){const r=this,a={partial:!0,tokenize:P};let i=0,o=0,l;return u;function u(C){return d(C)}function d(C){const D=r.events[r.events.length-1];return i=D&&D[1].type==="linePrefix"?D[2].sliceSerialize(D[1],!0).length:0,l=C,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),f(C)}function f(C){return C===l?(o++,e.consume(C),f):o<3?n(C):(e.exit("codeFencedFenceSequence"),ne(C)?oe(e,h,"whitespace")(C):h(C))}function h(C){return C===null||$(C)?(e.exit("codeFencedFence"),r.interrupt?t(C):e.check(Pf,S,N)(C)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),p(C))}function p(C){return C===null||$(C)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),h(C)):ne(C)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),oe(e,m,"whitespace")(C)):C===96&&C===l?n(C):(e.consume(C),p)}function m(C){return C===null||$(C)?h(C):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),x(C))}function x(C){return C===null||$(C)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),h(C)):C===96&&C===l?n(C):(e.consume(C),x)}function S(C){return e.attempt(a,N,A)(C)}function A(C){return e.enter("lineEnding"),e.consume(C),e.exit("lineEnding"),g}function g(C){return i>0&&ne(C)?oe(e,y,"linePrefix",i+1)(C):y(C)}function y(C){return C===null||$(C)?e.check(Pf,S,N)(C):(e.enter("codeFlowValue"),E(C))}function E(C){return C===null||$(C)?(e.exit("codeFlowValue"),y(C)):(e.consume(C),E)}function N(C){return e.exit("codeFenced"),t(C)}function P(C,D,H){let V=0;return w;function w(ie){return C.enter("lineEnding"),C.consume(ie),C.exit("lineEnding"),U}function U(ie){return C.enter("codeFencedFence"),ne(ie)?oe(C,G,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(ie):G(ie)}function G(ie){return ie===l?(C.enter("codeFencedFenceSequence"),te(ie)):H(ie)}function te(ie){return ie===l?(V++,C.consume(ie),te):V>=o?(C.exit("codeFencedFenceSequence"),ne(ie)?oe(C,me,"whitespace")(ie):me(ie)):H(ie)}function me(ie){return ie===null||$(ie)?(C.exit("codeFencedFence"),D(ie)):H(ie)}}}function Av(e,t,n){const r=this;return a;function a(o){return o===null?n(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i)}function i(o){return r.parser.lazy[r.now().line]?n(o):t(o)}}const El={name:"codeIndented",tokenize:Pv},Iv={partial:!0,tokenize:Lv};function Pv(e,t,n){const r=this;return a;function a(d){return e.enter("codeIndented"),oe(e,i,"linePrefix",5)(d)}function i(d){const f=r.events[r.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?o(d):n(d)}function o(d){return d===null?u(d):$(d)?e.attempt(Iv,o,u)(d):(e.enter("codeFlowValue"),l(d))}function l(d){return d===null||$(d)?(e.exit("codeFlowValue"),o(d)):(e.consume(d),l)}function u(d){return e.exit("codeIndented"),t(d)}}function Lv(e,t,n){const r=this;return a;function a(o){return r.parser.lazy[r.now().line]?n(o):$(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),a):oe(e,i,"linePrefix",5)(o)}function i(o){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(o):$(o)?a(o):n(o)}}const Rv={name:"codeText",previous:Ov,resolve:Dv,tokenize:Mv};function Dv(e){let t=e.length-4,n=3,r,a;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)a===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(a=r):(r===t||e[r][1].type==="lineEnding")&&(e[a][1].type="codeTextData",r!==a+2&&(e[a][1].end=e[r-1][1].end,e.splice(a+2,r-a-2),t-=r-a-2,r=a+2),a=void 0);return e}function Ov(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Mv(e,t,n){let r=0,a,i;return o;function o(h){return e.enter("codeText"),e.enter("codeTextSequence"),l(h)}function l(h){return h===96?(e.consume(h),r++,l):(e.exit("codeTextSequence"),u(h))}function u(h){return h===null?n(h):h===32?(e.enter("space"),e.consume(h),e.exit("space"),u):h===96?(i=e.enter("codeTextSequence"),a=0,f(h)):$(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),u):(e.enter("codeTextData"),d(h))}function d(h){return h===null||h===32||h===96||$(h)?(e.exit("codeTextData"),u(h)):(e.consume(h),d)}function f(h){return h===96?(e.consume(h),a++,f):a===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(h)):(i.type="codeTextData",d(h))}}class jv{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const a=n||0;this.setCursor(Math.trunc(t));const i=this.right.splice(this.right.length-a,Number.POSITIVE_INFINITY);return r&&Sa(this.left,r),i.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Sa(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),Sa(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);Sa(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Sa(this.left,n.reverse())}}}function Sa(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Dg(e){const t={};let n=-1,r,a,i,o,l,u,d;const f=new jv(e);for(;++n<f.length;){for(;n in t;)n=t[n];if(r=f.get(n),n&&r[1].type==="chunkFlow"&&f.get(n-1)[1].type==="listItemPrefix"&&(u=r[1]._tokenizer.events,i=0,i<u.length&&u[i][1].type==="lineEndingBlank"&&(i+=2),i<u.length&&u[i][1].type==="content"))for(;++i<u.length&&u[i][1].type!=="content";)u[i][1].type==="chunkText"&&(u[i][1]._isInFirstContentOfListItem=!0,i++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Fv(f,n)),n=t[n],d=!0);else if(r[1]._container){for(i=n,a=void 0;i--;)if(o=f.get(i),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(a&&(f.get(a)[1].type="lineEndingBlank"),o[1].type="lineEnding",a=i);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;a&&(r[1].end={...f.get(a)[1].start},l=f.slice(a,n),l.unshift(r),f.splice(a,n-a+1,l))}}return St(e,0,Number.POSITIVE_INFINITY,f.slice(0)),!d}function Fv(e,t){const n=e.get(t)[1],r=e.get(t)[2];let a=t-1;const i=[];let o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const l=o.events,u=[],d={};let f,h,p=-1,m=n,x=0,S=0;const A=[S];for(;m;){for(;e.get(++a)[1]!==m;);i.push(a),m._tokenizer||(f=r.sliceStream(m),m.next||f.push(null),h&&o.defineSkip(m.start),m._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(f),m._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),h=m,m=m.next}for(m=n;++p<l.length;)l[p][0]==="exit"&&l[p-1][0]==="enter"&&l[p][1].type===l[p-1][1].type&&l[p][1].start.line!==l[p][1].end.line&&(S=p+1,A.push(S),m._tokenizer=void 0,m.previous=void 0,m=m.next);for(o.events=[],m?(m._tokenizer=void 0,m.previous=void 0):A.pop(),p=A.length;p--;){const g=l.slice(A[p],A[p+1]),y=i.pop();u.push([y,y+g.length-1]),e.splice(y,2,g)}for(u.reverse(),p=-1;++p<u.length;)d[x+u[p][0]]=x+u[p][1],x+=u[p][1]-u[p][0]-1;return d}const Bv={resolve:Uv,tokenize:zv},Hv={partial:!0,tokenize:qv};function Uv(e){return Dg(e),e}function zv(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),a(l)}function a(l){return l===null?i(l):$(l)?e.check(Hv,o,i)(l):(e.consume(l),a)}function i(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function o(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,a}}function qv(e,t,n){const r=this;return a;function a(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),oe(e,i,"linePrefix")}function i(o){if(o===null||$(o))return n(o);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(o):e.interrupt(r.parser.constructs.flow,n,t)(o)}}function Og(e,t,n,r,a,i,o,l,u){const d=u||Number.POSITIVE_INFINITY;let f=0;return h;function h(g){return g===60?(e.enter(r),e.enter(a),e.enter(i),e.consume(g),e.exit(i),p):g===null||g===32||g===41||Gs(g)?n(g):(e.enter(r),e.enter(o),e.enter(l),e.enter("chunkString",{contentType:"string"}),S(g))}function p(g){return g===62?(e.enter(i),e.consume(g),e.exit(i),e.exit(a),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),m(g))}function m(g){return g===62?(e.exit("chunkString"),e.exit(l),p(g)):g===null||g===60||$(g)?n(g):(e.consume(g),g===92?x:m)}function x(g){return g===60||g===62||g===92?(e.consume(g),m):m(g)}function S(g){return!f&&(g===null||g===41||pe(g))?(e.exit("chunkString"),e.exit(l),e.exit(o),e.exit(r),t(g)):f<d&&g===40?(e.consume(g),f++,S):g===41?(e.consume(g),f--,S):g===null||g===32||g===40||Gs(g)?n(g):(e.consume(g),g===92?A:S)}function A(g){return g===40||g===41||g===92?(e.consume(g),S):S(g)}}function Mg(e,t,n,r,a,i){const o=this;let l=0,u;return d;function d(m){return e.enter(r),e.enter(a),e.consume(m),e.exit(a),e.enter(i),f}function f(m){return l>999||m===null||m===91||m===93&&!u||m===94&&!l&&"_hiddenFootnoteSupport"in o.parser.constructs?n(m):m===93?(e.exit(i),e.enter(a),e.consume(m),e.exit(a),e.exit(r),t):$(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),f):(e.enter("chunkString",{contentType:"string"}),h(m))}function h(m){return m===null||m===91||m===93||$(m)||l++>999?(e.exit("chunkString"),f(m)):(e.consume(m),u||(u=!ne(m)),m===92?p:h)}function p(m){return m===91||m===92||m===93?(e.consume(m),l++,h):h(m)}}function jg(e,t,n,r,a,i){let o;return l;function l(p){return p===34||p===39||p===40?(e.enter(r),e.enter(a),e.consume(p),e.exit(a),o=p===40?41:p,u):n(p)}function u(p){return p===o?(e.enter(a),e.consume(p),e.exit(a),e.exit(r),t):(e.enter(i),d(p))}function d(p){return p===o?(e.exit(i),u(o)):p===null?n(p):$(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),oe(e,d,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),f(p))}function f(p){return p===o||p===null||$(p)?(e.exit("chunkString"),d(p)):(e.consume(p),p===92?h:f)}function h(p){return p===o||p===92?(e.consume(p),f):f(p)}}function qa(e,t){let n;return r;function r(a){return $(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),n=!0,r):ne(a)?oe(e,r,n?"linePrefix":"lineSuffix")(a):t(a)}}const Yv={name:"definition",tokenize:Gv},Wv={partial:!0,tokenize:Vv};function Gv(e,t,n){const r=this;let a;return i;function i(m){return e.enter("definition"),o(m)}function o(m){return Mg.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(m)}function l(m){return a=Vt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),m===58?(e.enter("definitionMarker"),e.consume(m),e.exit("definitionMarker"),u):n(m)}function u(m){return pe(m)?qa(e,d)(m):d(m)}function d(m){return Og(e,f,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(m)}function f(m){return e.attempt(Wv,h,h)(m)}function h(m){return ne(m)?oe(e,p,"whitespace")(m):p(m)}function p(m){return m===null||$(m)?(e.exit("definition"),r.parser.defined.push(a),t(m)):n(m)}}function Vv(e,t,n){return r;function r(l){return pe(l)?qa(e,a)(l):n(l)}function a(l){return jg(e,i,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function i(l){return ne(l)?oe(e,o,"whitespace")(l):o(l)}function o(l){return l===null||$(l)?t(l):n(l)}}const $v={name:"hardBreakEscape",tokenize:Qv};function Qv(e,t,n){return r;function r(i){return e.enter("hardBreakEscape"),e.consume(i),a}function a(i){return $(i)?(e.exit("hardBreakEscape"),t(i)):n(i)}}const Kv={name:"headingAtx",resolve:Xv,tokenize:Jv};function Xv(e,t){let n=e.length-2,r=3,a,i;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(a={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},i={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},St(e,r,n-r+1,[["enter",a,t],["enter",i,t],["exit",i,t],["exit",a,t]])),e}function Jv(e,t,n){let r=0;return a;function a(f){return e.enter("atxHeading"),i(f)}function i(f){return e.enter("atxHeadingSequence"),o(f)}function o(f){return f===35&&r++<6?(e.consume(f),o):f===null||pe(f)?(e.exit("atxHeadingSequence"),l(f)):n(f)}function l(f){return f===35?(e.enter("atxHeadingSequence"),u(f)):f===null||$(f)?(e.exit("atxHeading"),t(f)):ne(f)?oe(e,l,"whitespace")(f):(e.enter("atxHeadingText"),d(f))}function u(f){return f===35?(e.consume(f),u):(e.exit("atxHeadingSequence"),l(f))}function d(f){return f===null||f===35||pe(f)?(e.exit("atxHeadingText"),l(f)):(e.consume(f),d)}}const Zv=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Rf=["pre","script","style","textarea"],e_={concrete:!0,name:"htmlFlow",resolveTo:r_,tokenize:a_},t_={partial:!0,tokenize:s_},n_={partial:!0,tokenize:i_};function r_(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function a_(e,t,n){const r=this;let a,i,o,l,u;return d;function d(k){return f(k)}function f(k){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(k),h}function h(k){return k===33?(e.consume(k),p):k===47?(e.consume(k),i=!0,S):k===63?(e.consume(k),a=3,r.interrupt?t:v):at(k)?(e.consume(k),o=String.fromCharCode(k),A):n(k)}function p(k){return k===45?(e.consume(k),a=2,m):k===91?(e.consume(k),a=5,l=0,x):at(k)?(e.consume(k),a=4,r.interrupt?t:v):n(k)}function m(k){return k===45?(e.consume(k),r.interrupt?t:v):n(k)}function x(k){const Be="CDATA[";return k===Be.charCodeAt(l++)?(e.consume(k),l===Be.length?r.interrupt?t:G:x):n(k)}function S(k){return at(k)?(e.consume(k),o=String.fromCharCode(k),A):n(k)}function A(k){if(k===null||k===47||k===62||pe(k)){const Be=k===47,Ft=o.toLowerCase();return!Be&&!i&&Rf.includes(Ft)?(a=1,r.interrupt?t(k):G(k)):Zv.includes(o.toLowerCase())?(a=6,Be?(e.consume(k),g):r.interrupt?t(k):G(k)):(a=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(k):i?y(k):E(k))}return k===45||Ze(k)?(e.consume(k),o+=String.fromCharCode(k),A):n(k)}function g(k){return k===62?(e.consume(k),r.interrupt?t:G):n(k)}function y(k){return ne(k)?(e.consume(k),y):w(k)}function E(k){return k===47?(e.consume(k),w):k===58||k===95||at(k)?(e.consume(k),N):ne(k)?(e.consume(k),E):w(k)}function N(k){return k===45||k===46||k===58||k===95||Ze(k)?(e.consume(k),N):P(k)}function P(k){return k===61?(e.consume(k),C):ne(k)?(e.consume(k),P):E(k)}function C(k){return k===null||k===60||k===61||k===62||k===96?n(k):k===34||k===39?(e.consume(k),u=k,D):ne(k)?(e.consume(k),C):H(k)}function D(k){return k===u?(e.consume(k),u=null,V):k===null||$(k)?n(k):(e.consume(k),D)}function H(k){return k===null||k===34||k===39||k===47||k===60||k===61||k===62||k===96||pe(k)?P(k):(e.consume(k),H)}function V(k){return k===47||k===62||ne(k)?E(k):n(k)}function w(k){return k===62?(e.consume(k),U):n(k)}function U(k){return k===null||$(k)?G(k):ne(k)?(e.consume(k),U):n(k)}function G(k){return k===45&&a===2?(e.consume(k),Oe):k===60&&a===1?(e.consume(k),Le):k===62&&a===4?(e.consume(k),le):k===63&&a===3?(e.consume(k),v):k===93&&a===5?(e.consume(k),Q):$(k)&&(a===6||a===7)?(e.exit("htmlFlowData"),e.check(t_,he,te)(k)):k===null||$(k)?(e.exit("htmlFlowData"),te(k)):(e.consume(k),G)}function te(k){return e.check(n_,me,he)(k)}function me(k){return e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),ie}function ie(k){return k===null||$(k)?te(k):(e.enter("htmlFlowData"),G(k))}function Oe(k){return k===45?(e.consume(k),v):G(k)}function Le(k){return k===47?(e.consume(k),o="",Y):G(k)}function Y(k){if(k===62){const Be=o.toLowerCase();return Rf.includes(Be)?(e.consume(k),le):G(k)}return at(k)&&o.length<8?(e.consume(k),o+=String.fromCharCode(k),Y):G(k)}function Q(k){return k===93?(e.consume(k),v):G(k)}function v(k){return k===62?(e.consume(k),le):k===45&&a===2?(e.consume(k),v):G(k)}function le(k){return k===null||$(k)?(e.exit("htmlFlowData"),he(k)):(e.consume(k),le)}function he(k){return e.exit("htmlFlow"),t(k)}}function i_(e,t,n){const r=this;return a;function a(o){return $(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i):n(o)}function i(o){return r.parser.lazy[r.now().line]?n(o):t(o)}}function s_(e,t,n){return r;function r(a){return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),e.attempt(Ci,t,n)}}const o_={name:"htmlText",tokenize:l_};function l_(e,t,n){const r=this;let a,i,o;return l;function l(v){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(v),u}function u(v){return v===33?(e.consume(v),d):v===47?(e.consume(v),P):v===63?(e.consume(v),E):at(v)?(e.consume(v),H):n(v)}function d(v){return v===45?(e.consume(v),f):v===91?(e.consume(v),i=0,x):at(v)?(e.consume(v),y):n(v)}function f(v){return v===45?(e.consume(v),m):n(v)}function h(v){return v===null?n(v):v===45?(e.consume(v),p):$(v)?(o=h,Le(v)):(e.consume(v),h)}function p(v){return v===45?(e.consume(v),m):h(v)}function m(v){return v===62?Oe(v):v===45?p(v):h(v)}function x(v){const le="CDATA[";return v===le.charCodeAt(i++)?(e.consume(v),i===le.length?S:x):n(v)}function S(v){return v===null?n(v):v===93?(e.consume(v),A):$(v)?(o=S,Le(v)):(e.consume(v),S)}function A(v){return v===93?(e.consume(v),g):S(v)}function g(v){return v===62?Oe(v):v===93?(e.consume(v),g):S(v)}function y(v){return v===null||v===62?Oe(v):$(v)?(o=y,Le(v)):(e.consume(v),y)}function E(v){return v===null?n(v):v===63?(e.consume(v),N):$(v)?(o=E,Le(v)):(e.consume(v),E)}function N(v){return v===62?Oe(v):E(v)}function P(v){return at(v)?(e.consume(v),C):n(v)}function C(v){return v===45||Ze(v)?(e.consume(v),C):D(v)}function D(v){return $(v)?(o=D,Le(v)):ne(v)?(e.consume(v),D):Oe(v)}function H(v){return v===45||Ze(v)?(e.consume(v),H):v===47||v===62||pe(v)?V(v):n(v)}function V(v){return v===47?(e.consume(v),Oe):v===58||v===95||at(v)?(e.consume(v),w):$(v)?(o=V,Le(v)):ne(v)?(e.consume(v),V):Oe(v)}function w(v){return v===45||v===46||v===58||v===95||Ze(v)?(e.consume(v),w):U(v)}function U(v){return v===61?(e.consume(v),G):$(v)?(o=U,Le(v)):ne(v)?(e.consume(v),U):V(v)}function G(v){return v===null||v===60||v===61||v===62||v===96?n(v):v===34||v===39?(e.consume(v),a=v,te):$(v)?(o=G,Le(v)):ne(v)?(e.consume(v),G):(e.consume(v),me)}function te(v){return v===a?(e.consume(v),a=void 0,ie):v===null?n(v):$(v)?(o=te,Le(v)):(e.consume(v),te)}function me(v){return v===null||v===34||v===39||v===60||v===61||v===96?n(v):v===47||v===62||pe(v)?V(v):(e.consume(v),me)}function ie(v){return v===47||v===62||pe(v)?V(v):n(v)}function Oe(v){return v===62?(e.consume(v),e.exit("htmlTextData"),e.exit("htmlText"),t):n(v)}function Le(v){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),Y}function Y(v){return ne(v)?oe(e,Q,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(v):Q(v)}function Q(v){return e.enter("htmlTextData"),o(v)}}const yd={name:"labelEnd",resolveAll:h_,resolveTo:f_,tokenize:p_},u_={tokenize:m_},c_={tokenize:g_},d_={tokenize:y_};function h_(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const a=r.type==="labelImage"?4:2;r.type="data",t+=a}}return e.length!==n.length&&St(e,0,e.length,n),e}function f_(e,t){let n=e.length,r=0,a,i,o,l;for(;n--;)if(a=e[n][1],i){if(a.type==="link"||a.type==="labelLink"&&a._inactive)break;e[n][0]==="enter"&&a.type==="labelLink"&&(a._inactive=!0)}else if(o){if(e[n][0]==="enter"&&(a.type==="labelImage"||a.type==="labelLink")&&!a._balanced&&(i=n,a.type!=="labelLink")){r=2;break}}else a.type==="labelEnd"&&(o=n);const u={type:e[i][1].type==="labelLink"?"link":"image",start:{...e[i][1].start},end:{...e[e.length-1][1].end}},d={type:"label",start:{...e[i][1].start},end:{...e[o][1].end}},f={type:"labelText",start:{...e[i+r+2][1].end},end:{...e[o-2][1].start}};return l=[["enter",u,t],["enter",d,t]],l=Pt(l,e.slice(i+1,i+r+3)),l=Pt(l,[["enter",f,t]]),l=Pt(l,Lo(t.parser.constructs.insideSpan.null,e.slice(i+r+4,o-3),t)),l=Pt(l,[["exit",f,t],e[o-2],e[o-1],["exit",d,t]]),l=Pt(l,e.slice(o+1)),l=Pt(l,[["exit",u,t]]),St(e,i,e.length,l),e}function p_(e,t,n){const r=this;let a=r.events.length,i,o;for(;a--;)if((r.events[a][1].type==="labelImage"||r.events[a][1].type==="labelLink")&&!r.events[a][1]._balanced){i=r.events[a][1];break}return l;function l(p){return i?i._inactive?h(p):(o=r.parser.defined.includes(Vt(r.sliceSerialize({start:i.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(p),e.exit("labelMarker"),e.exit("labelEnd"),u):n(p)}function u(p){return p===40?e.attempt(u_,f,o?f:h)(p):p===91?e.attempt(c_,f,o?d:h)(p):o?f(p):h(p)}function d(p){return e.attempt(d_,f,h)(p)}function f(p){return t(p)}function h(p){return i._balanced=!0,n(p)}}function m_(e,t,n){return r;function r(h){return e.enter("resource"),e.enter("resourceMarker"),e.consume(h),e.exit("resourceMarker"),a}function a(h){return pe(h)?qa(e,i)(h):i(h)}function i(h){return h===41?f(h):Og(e,o,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(h)}function o(h){return pe(h)?qa(e,u)(h):f(h)}function l(h){return n(h)}function u(h){return h===34||h===39||h===40?jg(e,d,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(h):f(h)}function d(h){return pe(h)?qa(e,f)(h):f(h)}function f(h){return h===41?(e.enter("resourceMarker"),e.consume(h),e.exit("resourceMarker"),e.exit("resource"),t):n(h)}}function g_(e,t,n){const r=this;return a;function a(l){return Mg.call(r,e,i,o,"reference","referenceMarker","referenceString")(l)}function i(l){return r.parser.defined.includes(Vt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function o(l){return n(l)}}function y_(e,t,n){return r;function r(i){return e.enter("reference"),e.enter("referenceMarker"),e.consume(i),e.exit("referenceMarker"),a}function a(i){return i===93?(e.enter("referenceMarker"),e.consume(i),e.exit("referenceMarker"),e.exit("reference"),t):n(i)}}const x_={name:"labelStartImage",resolveAll:yd.resolveAll,tokenize:b_};function b_(e,t,n){const r=this;return a;function a(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),i}function i(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),o):n(l)}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const E_={name:"labelStartLink",resolveAll:yd.resolveAll,tokenize:T_};function T_(e,t,n){const r=this;return a;function a(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),i}function i(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(o):t(o)}}const Tl={name:"lineEnding",tokenize:v_};function v_(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),oe(e,t,"linePrefix")}}const ps={name:"thematicBreak",tokenize:__};function __(e,t,n){let r=0,a;return i;function i(d){return e.enter("thematicBreak"),o(d)}function o(d){return a=d,l(d)}function l(d){return d===a?(e.enter("thematicBreakSequence"),u(d)):r>=3&&(d===null||$(d))?(e.exit("thematicBreak"),t(d)):n(d)}function u(d){return d===a?(e.consume(d),r++,u):(e.exit("thematicBreakSequence"),ne(d)?oe(e,l,"whitespace")(d):l(d))}}const ct={continuation:{tokenize:N_},exit:A_,name:"list",tokenize:C_},S_={partial:!0,tokenize:I_},k_={partial:!0,tokenize:w_};function C_(e,t,n){const r=this,a=r.events[r.events.length-1];let i=a&&a[1].type==="linePrefix"?a[2].sliceSerialize(a[1],!0).length:0,o=0;return l;function l(m){const x=r.containerState.type||(m===42||m===43||m===45?"listUnordered":"listOrdered");if(x==="listUnordered"?!r.containerState.marker||m===r.containerState.marker:Wu(m)){if(r.containerState.type||(r.containerState.type=x,e.enter(x,{_container:!0})),x==="listUnordered")return e.enter("listItemPrefix"),m===42||m===45?e.check(ps,n,d)(m):d(m);if(!r.interrupt||m===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),u(m)}return n(m)}function u(m){return Wu(m)&&++o<10?(e.consume(m),u):(!r.interrupt||o<2)&&(r.containerState.marker?m===r.containerState.marker:m===41||m===46)?(e.exit("listItemValue"),d(m)):n(m)}function d(m){return e.enter("listItemMarker"),e.consume(m),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||m,e.check(Ci,r.interrupt?n:f,e.attempt(S_,p,h))}function f(m){return r.containerState.initialBlankLine=!0,i++,p(m)}function h(m){return ne(m)?(e.enter("listItemPrefixWhitespace"),e.consume(m),e.exit("listItemPrefixWhitespace"),p):n(m)}function p(m){return r.containerState.size=i+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(m)}}function N_(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Ci,a,i);function a(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,oe(e,t,"listItemIndent",r.containerState.size+1)(l)}function i(l){return r.containerState.furtherBlankLines||!ne(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(k_,t,o)(l))}function o(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,oe(e,e.attempt(ct,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function w_(e,t,n){const r=this;return oe(e,a,"listItemIndent",r.containerState.size+1);function a(i){const o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?t(i):n(i)}}function A_(e){e.exit(this.containerState.type)}function I_(e,t,n){const r=this;return oe(e,a,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function a(i){const o=r.events[r.events.length-1];return!ne(i)&&o&&o[1].type==="listItemPrefixWhitespace"?t(i):n(i)}}const Df={name:"setextUnderline",resolveTo:P_,tokenize:L_};function P_(e,t){let n=e.length,r,a,i;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(a=n)}else e[n][1].type==="content"&&e.splice(n,1),!i&&e[n][1].type==="definition"&&(i=n);const o={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[a][1].type="setextHeadingText",i?(e.splice(a,0,["enter",o,t]),e.splice(i+1,0,["exit",e[r][1],t]),e[r][1].end={...e[i][1].end}):e[r][1]=o,e.push(["exit",o,t]),e}function L_(e,t,n){const r=this;let a;return i;function i(d){let f=r.events.length,h;for(;f--;)if(r.events[f][1].type!=="lineEnding"&&r.events[f][1].type!=="linePrefix"&&r.events[f][1].type!=="content"){h=r.events[f][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||h)?(e.enter("setextHeadingLine"),a=d,o(d)):n(d)}function o(d){return e.enter("setextHeadingLineSequence"),l(d)}function l(d){return d===a?(e.consume(d),l):(e.exit("setextHeadingLineSequence"),ne(d)?oe(e,u,"lineSuffix")(d):u(d))}function u(d){return d===null||$(d)?(e.exit("setextHeadingLine"),t(d)):n(d)}}const R_={tokenize:D_};function D_(e){const t=this,n=e.attempt(Ci,r,e.attempt(this.parser.constructs.flowInitial,a,oe(e,e.attempt(this.parser.constructs.flow,a,e.attempt(Bv,a)),"linePrefix")));return n;function r(i){if(i===null){e.consume(i);return}return e.enter("lineEndingBlank"),e.consume(i),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function a(i){if(i===null){e.consume(i);return}return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const O_={resolveAll:Bg()},M_=Fg("string"),j_=Fg("text");function Fg(e){return{resolveAll:Bg(e==="text"?F_:void 0),tokenize:t};function t(n){const r=this,a=this.parser.constructs[e],i=n.attempt(a,o,l);return o;function o(f){return d(f)?i(f):l(f)}function l(f){if(f===null){n.consume(f);return}return n.enter("data"),n.consume(f),u}function u(f){return d(f)?(n.exit("data"),i(f)):(n.consume(f),u)}function d(f){if(f===null)return!0;const h=a[f];let p=-1;if(h)for(;++p<h.length;){const m=h[p];if(!m.previous||m.previous.call(r,r.previous))return!0}return!1}}}function Bg(e){return t;function t(n,r){let a=-1,i;for(;++a<=n.length;)i===void 0?n[a]&&n[a][1].type==="data"&&(i=a,a++):(!n[a]||n[a][1].type!=="data")&&(a!==i+2&&(n[i][1].end=n[a-1][1].end,n.splice(i+2,a-i-2),a=i+2),i=void 0);return e?e(n,r):n}}function F_(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],a=t.sliceStream(r);let i=a.length,o=-1,l=0,u;for(;i--;){const d=a[i];if(typeof d=="string"){for(o=d.length;d.charCodeAt(o-1)===32;)l++,o--;if(o)break;o=-1}else if(d===-2)u=!0,l++;else if(d!==-1){i++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){const d={type:n===e.length||u||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:i?o:r.start._bufferIndex+o,_index:r.start._index+i,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...d.start},r.start.offset===r.end.offset?Object.assign(r,d):(e.splice(n,0,["enter",d,t],["exit",d,t]),n+=2)}n++}return e}const B_={42:ct,43:ct,45:ct,48:ct,49:ct,50:ct,51:ct,52:ct,53:ct,54:ct,55:ct,56:ct,57:ct,62:Pg},H_={91:Yv},U_={[-2]:El,[-1]:El,32:El},z_={35:Kv,42:ps,45:[Df,ps],60:e_,61:Df,95:ps,96:Lf,126:Lf},q_={38:Rg,92:Lg},Y_={[-5]:Tl,[-4]:Tl,[-3]:Tl,33:x_,38:Rg,42:Gu,60:[Ev,o_],91:E_,92:[$v,Lg],93:yd,95:Gu,96:Rv},W_={null:[Gu,O_]},G_={null:[42,95]},V_={null:[]},$_=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:G_,contentInitial:H_,disable:V_,document:B_,flow:z_,flowInitial:U_,insideSpan:W_,string:q_,text:Y_},Symbol.toStringTag,{value:"Module"}));function Q_(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const a={},i=[];let o=[],l=[];const u={attempt:D(P),check:D(C),consume:y,enter:E,exit:N,interrupt:D(C,{interrupt:!0})},d={code:null,containerState:{},defineSkip:S,events:[],now:x,parser:e,previous:null,sliceSerialize:p,sliceStream:m,write:h};let f=t.tokenize.call(d,u);return t.resolveAll&&i.push(t),d;function h(U){return o=Pt(o,U),A(),o[o.length-1]!==null?[]:(H(t,0),d.events=Lo(i,d.events,d),d.events)}function p(U,G){return X_(m(U),G)}function m(U){return K_(o,U)}function x(){const{_bufferIndex:U,_index:G,line:te,column:me,offset:ie}=r;return{_bufferIndex:U,_index:G,line:te,column:me,offset:ie}}function S(U){a[U.line]=U.column,w()}function A(){let U;for(;r._index<o.length;){const G=o[r._index];if(typeof G=="string")for(U=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===U&&r._bufferIndex<G.length;)g(G.charCodeAt(r._bufferIndex));else g(G)}}function g(U){f=f(U)}function y(U){$(U)?(r.line++,r.column=1,r.offset+=U===-3?2:1,w()):U!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),d.previous=U}function E(U,G){const te=G||{};return te.type=U,te.start=x(),d.events.push(["enter",te,d]),l.push(te),te}function N(U){const G=l.pop();return G.end=x(),d.events.push(["exit",G,d]),G}function P(U,G){H(U,G.from)}function C(U,G){G.restore()}function D(U,G){return te;function te(me,ie,Oe){let Le,Y,Q,v;return Array.isArray(me)?he(me):"tokenize"in me?he([me]):le(me);function le(be){return Kt;function Kt(Tn){const xr=Tn!==null&&be[Tn],br=Tn!==null&&be.null,Pi=[...Array.isArray(xr)?xr:xr?[xr]:[],...Array.isArray(br)?br:br?[br]:[]];return he(Pi)(Tn)}}function he(be){return Le=be,Y=0,be.length===0?Oe:k(be[Y])}function k(be){return Kt;function Kt(Tn){return v=V(),Q=be,be.partial||(d.currentConstruct=be),be.name&&d.parser.constructs.disable.null.includes(be.name)?Ft():be.tokenize.call(G?Object.assign(Object.create(d),G):d,u,Be,Ft)(Tn)}}function Be(be){return U(Q,v),ie}function Ft(be){return v.restore(),++Y<Le.length?k(Le[Y]):Oe}}}function H(U,G){U.resolveAll&&!i.includes(U)&&i.push(U),U.resolve&&St(d.events,G,d.events.length-G,U.resolve(d.events.slice(G),d)),U.resolveTo&&(d.events=U.resolveTo(d.events,d))}function V(){const U=x(),G=d.previous,te=d.currentConstruct,me=d.events.length,ie=Array.from(l);return{from:me,restore:Oe};function Oe(){r=U,d.previous=G,d.currentConstruct=te,d.events.length=me,l=ie,w()}}function w(){r.line in a&&r.column<2&&(r.column=a[r.line],r.offset+=a[r.line]-1)}}function K_(e,t){const n=t.start._index,r=t.start._bufferIndex,a=t.end._index,i=t.end._bufferIndex;let o;if(n===a)o=[e[n].slice(r,i)];else{if(o=e.slice(n,a),r>-1){const l=o[0];typeof l=="string"?o[0]=l.slice(r):o.shift()}i>0&&o.push(e[a].slice(0,i))}return o}function X_(e,t){let n=-1;const r=[];let a;for(;++n<e.length;){const i=e[n];let o;if(typeof i=="string")o=i;else switch(i){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=t?" ":"	";break}case-1:{if(!t&&a)continue;o=" ";break}default:o=String.fromCharCode(i)}a=i===-2,r.push(o)}return r.join("")}function J_(e){const r={constructs:Ag([$_,...(e||{}).extensions||[]]),content:a(fv),defined:[],document:a(mv),flow:a(R_),lazy:{},string:a(M_),text:a(j_)};return r;function a(i){return o;function o(l){return Q_(r,i,l)}}}function Z_(e){for(;!Dg(e););return e}const Of=/[\0\t\n\r]/g;function eS(){let e=1,t="",n=!0,r;return a;function a(i,o,l){const u=[];let d,f,h,p,m;for(i=t+(typeof i=="string"?i.toString():new TextDecoder(o||void 0).decode(i)),h=0,t="",n&&(i.charCodeAt(0)===65279&&h++,n=void 0);h<i.length;){if(Of.lastIndex=h,d=Of.exec(i),p=d&&d.index!==void 0?d.index:i.length,m=i.charCodeAt(p),!d){t=i.slice(h);break}if(m===10&&h===p&&r)u.push(-3),r=void 0;else switch(r&&(u.push(-5),r=void 0),h<p&&(u.push(i.slice(h,p)),e+=p-h),m){case 0:{u.push(65533),e++;break}case 9:{for(f=Math.ceil(e/4)*4,u.push(-2);e++<f;)u.push(-1);break}case 10:{u.push(-4),e=1;break}default:r=!0,e=1}h=p+1}return l&&(r&&u.push(-5),t&&u.push(t),u.push(null)),u}}const tS=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function nS(e){return e.replace(tS,rS)}function rS(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const a=n.charCodeAt(1),i=a===120||a===88;return Ig(n.slice(i?2:1),i?16:10)}return gd(n)||e}const Hg={}.hasOwnProperty;function aS(e,t,n){return typeof t!="string"&&(n=t,t=void 0),iS(n)(Z_(J_(n).document().write(eS()(e,t,!0))))}function iS(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:i(Md),autolinkProtocol:V,autolinkEmail:V,atxHeading:i(Rd),blockQuote:i(br),characterEscape:V,characterReference:V,codeFenced:i(Pi),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:i(Pi,o),codeText:i(hy,o),codeTextData:V,data:V,codeFlowValue:V,definition:i(fy),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:i(py),hardBreakEscape:i(Dd),hardBreakTrailing:i(Dd),htmlFlow:i(Od,o),htmlFlowData:V,htmlText:i(Od,o),htmlTextData:V,image:i(my),label:o,link:i(Md),listItem:i(gy),listItemValue:p,listOrdered:i(jd,h),listUnordered:i(jd),paragraph:i(yy),reference:k,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:i(Rd),strong:i(xy),thematicBreak:i(Ey)},exit:{atxHeading:u(),atxHeadingSequence:P,autolink:u(),autolinkEmail:xr,autolinkProtocol:Tn,blockQuote:u(),characterEscapeValue:w,characterReferenceMarkerHexadecimal:Ft,characterReferenceMarkerNumeric:Ft,characterReferenceValue:be,characterReference:Kt,codeFenced:u(A),codeFencedFence:S,codeFencedFenceInfo:m,codeFencedFenceMeta:x,codeFlowValue:w,codeIndented:u(g),codeText:u(ie),codeTextData:w,data:w,definition:u(),definitionDestinationString:N,definitionLabelString:y,definitionTitleString:E,emphasis:u(),hardBreakEscape:u(G),hardBreakTrailing:u(G),htmlFlow:u(te),htmlFlowData:w,htmlText:u(me),htmlTextData:w,image:u(Le),label:Q,labelText:Y,lineEnding:U,link:u(Oe),listItem:u(),listOrdered:u(),listUnordered:u(),paragraph:u(),referenceString:Be,resourceDestinationString:v,resourceTitleString:le,resource:he,setextHeading:u(H),setextHeadingLineSequence:D,setextHeadingText:C,strong:u(),thematicBreak:u()}};Ug(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(R){let z={type:"root",children:[]};const K={stack:[z],tokenStack:[],config:t,enter:l,exit:d,buffer:o,resume:f,data:n},se=[];let fe=-1;for(;++fe<R.length;)if(R[fe][1].type==="listOrdered"||R[fe][1].type==="listUnordered")if(R[fe][0]==="enter")se.push(fe);else{const Bt=se.pop();fe=a(R,Bt,fe)}for(fe=-1;++fe<R.length;){const Bt=t[R[fe][0]];Hg.call(Bt,R[fe][1].type)&&Bt[R[fe][1].type].call(Object.assign({sliceSerialize:R[fe][2].sliceSerialize},K),R[fe][1])}if(K.tokenStack.length>0){const Bt=K.tokenStack[K.tokenStack.length-1];(Bt[1]||Mf).call(K,void 0,Bt[0])}for(z.position={start:_n(R.length>0?R[0][1].start:{line:1,column:1,offset:0}),end:_n(R.length>0?R[R.length-2][1].end:{line:1,column:1,offset:0})},fe=-1;++fe<t.transforms.length;)z=t.transforms[fe](z)||z;return z}function a(R,z,K){let se=z-1,fe=-1,Bt=!1,Qn,on,pa,ma;for(;++se<=K;){const xt=R[se];switch(xt[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{xt[0]==="enter"?fe++:fe--,ma=void 0;break}case"lineEndingBlank":{xt[0]==="enter"&&(Qn&&!ma&&!fe&&!pa&&(pa=se),ma=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:ma=void 0}if(!fe&&xt[0]==="enter"&&xt[1].type==="listItemPrefix"||fe===-1&&xt[0]==="exit"&&(xt[1].type==="listUnordered"||xt[1].type==="listOrdered")){if(Qn){let Er=se;for(on=void 0;Er--;){const ln=R[Er];if(ln[1].type==="lineEnding"||ln[1].type==="lineEndingBlank"){if(ln[0]==="exit")continue;on&&(R[on][1].type="lineEndingBlank",Bt=!0),ln[1].type="lineEnding",on=Er}else if(!(ln[1].type==="linePrefix"||ln[1].type==="blockQuotePrefix"||ln[1].type==="blockQuotePrefixWhitespace"||ln[1].type==="blockQuoteMarker"||ln[1].type==="listItemIndent"))break}pa&&(!on||pa<on)&&(Qn._spread=!0),Qn.end=Object.assign({},on?R[on][1].start:xt[1].end),R.splice(on||se,0,["exit",Qn,xt[2]]),se++,K++}if(xt[1].type==="listItemPrefix"){const Er={type:"listItem",_spread:!1,start:Object.assign({},xt[1].start),end:void 0};Qn=Er,R.splice(se,0,["enter",Er,xt[2]]),se++,K++,pa=void 0,ma=!0}}}return R[z][1]._spread=Bt,K}function i(R,z){return K;function K(se){l.call(this,R(se),se),z&&z.call(this,se)}}function o(){this.stack.push({type:"fragment",children:[]})}function l(R,z,K){this.stack[this.stack.length-1].children.push(R),this.stack.push(R),this.tokenStack.push([z,K||void 0]),R.position={start:_n(z.start),end:void 0}}function u(R){return z;function z(K){R&&R.call(this,K),d.call(this,K)}}function d(R,z){const K=this.stack.pop(),se=this.tokenStack.pop();if(se)se[0].type!==R.type&&(z?z.call(this,R,se[0]):(se[1]||Mf).call(this,R,se[0]));else throw new Error("Cannot close `"+R.type+"` ("+za({start:R.start,end:R.end})+"): it’s not open");K.position.end=_n(R.end)}function f(){return md(this.stack.pop())}function h(){this.data.expectingFirstListItemValue=!0}function p(R){if(this.data.expectingFirstListItemValue){const z=this.stack[this.stack.length-2];z.start=Number.parseInt(this.sliceSerialize(R),10),this.data.expectingFirstListItemValue=void 0}}function m(){const R=this.resume(),z=this.stack[this.stack.length-1];z.lang=R}function x(){const R=this.resume(),z=this.stack[this.stack.length-1];z.meta=R}function S(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function A(){const R=this.resume(),z=this.stack[this.stack.length-1];z.value=R.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function g(){const R=this.resume(),z=this.stack[this.stack.length-1];z.value=R.replace(/(\r?\n|\r)$/g,"")}function y(R){const z=this.resume(),K=this.stack[this.stack.length-1];K.label=z,K.identifier=Vt(this.sliceSerialize(R)).toLowerCase()}function E(){const R=this.resume(),z=this.stack[this.stack.length-1];z.title=R}function N(){const R=this.resume(),z=this.stack[this.stack.length-1];z.url=R}function P(R){const z=this.stack[this.stack.length-1];if(!z.depth){const K=this.sliceSerialize(R).length;z.depth=K}}function C(){this.data.setextHeadingSlurpLineEnding=!0}function D(R){const z=this.stack[this.stack.length-1];z.depth=this.sliceSerialize(R).codePointAt(0)===61?1:2}function H(){this.data.setextHeadingSlurpLineEnding=void 0}function V(R){const K=this.stack[this.stack.length-1].children;let se=K[K.length-1];(!se||se.type!=="text")&&(se=by(),se.position={start:_n(R.start),end:void 0},K.push(se)),this.stack.push(se)}function w(R){const z=this.stack.pop();z.value+=this.sliceSerialize(R),z.position.end=_n(R.end)}function U(R){const z=this.stack[this.stack.length-1];if(this.data.atHardBreak){const K=z.children[z.children.length-1];K.position.end=_n(R.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(z.type)&&(V.call(this,R),w.call(this,R))}function G(){this.data.atHardBreak=!0}function te(){const R=this.resume(),z=this.stack[this.stack.length-1];z.value=R}function me(){const R=this.resume(),z=this.stack[this.stack.length-1];z.value=R}function ie(){const R=this.resume(),z=this.stack[this.stack.length-1];z.value=R}function Oe(){const R=this.stack[this.stack.length-1];if(this.data.inReference){const z=this.data.referenceType||"shortcut";R.type+="Reference",R.referenceType=z,delete R.url,delete R.title}else delete R.identifier,delete R.label;this.data.referenceType=void 0}function Le(){const R=this.stack[this.stack.length-1];if(this.data.inReference){const z=this.data.referenceType||"shortcut";R.type+="Reference",R.referenceType=z,delete R.url,delete R.title}else delete R.identifier,delete R.label;this.data.referenceType=void 0}function Y(R){const z=this.sliceSerialize(R),K=this.stack[this.stack.length-2];K.label=nS(z),K.identifier=Vt(z).toLowerCase()}function Q(){const R=this.stack[this.stack.length-1],z=this.resume(),K=this.stack[this.stack.length-1];if(this.data.inReference=!0,K.type==="link"){const se=R.children;K.children=se}else K.alt=z}function v(){const R=this.resume(),z=this.stack[this.stack.length-1];z.url=R}function le(){const R=this.resume(),z=this.stack[this.stack.length-1];z.title=R}function he(){this.data.inReference=void 0}function k(){this.data.referenceType="collapsed"}function Be(R){const z=this.resume(),K=this.stack[this.stack.length-1];K.label=z,K.identifier=Vt(this.sliceSerialize(R)).toLowerCase(),this.data.referenceType="full"}function Ft(R){this.data.characterReferenceType=R.type}function be(R){const z=this.sliceSerialize(R),K=this.data.characterReferenceType;let se;K?(se=Ig(z,K==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):se=gd(z);const fe=this.stack[this.stack.length-1];fe.value+=se}function Kt(R){const z=this.stack.pop();z.position.end=_n(R.end)}function Tn(R){w.call(this,R);const z=this.stack[this.stack.length-1];z.url=this.sliceSerialize(R)}function xr(R){w.call(this,R);const z=this.stack[this.stack.length-1];z.url="mailto:"+this.sliceSerialize(R)}function br(){return{type:"blockquote",children:[]}}function Pi(){return{type:"code",lang:null,meta:null,value:""}}function hy(){return{type:"inlineCode",value:""}}function fy(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function py(){return{type:"emphasis",children:[]}}function Rd(){return{type:"heading",depth:0,children:[]}}function Dd(){return{type:"break"}}function Od(){return{type:"html",value:""}}function my(){return{type:"image",title:null,url:"",alt:null}}function Md(){return{type:"link",title:null,url:"",children:[]}}function jd(R){return{type:"list",ordered:R.type==="listOrdered",start:null,spread:R._spread,children:[]}}function gy(R){return{type:"listItem",spread:R._spread,checked:null,children:[]}}function yy(){return{type:"paragraph",children:[]}}function xy(){return{type:"strong",children:[]}}function by(){return{type:"text",value:""}}function Ey(){return{type:"thematicBreak"}}}function _n(e){return{line:e.line,column:e.column,offset:e.offset}}function Ug(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?Ug(e,r):sS(e,r)}}function sS(e,t){let n;for(n in t)if(Hg.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Mf(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+za({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+za({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+za({start:t.start,end:t.end})+") is still open")}function oS(e){const t=this;t.parser=n;function n(r){return aS(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function lS(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function uS(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function cS(e,t){const n=t.value?t.value+`
`:"",r={};t.lang&&(r.className=["language-"+t.lang]);let a={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(a.data={meta:t.meta}),e.patch(t,a),a=e.applyData(t,a),a={type:"element",tagName:"pre",properties:{},children:[a]},e.patch(t,a),a}function dS(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function hS(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function fS(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),a=ua(r.toLowerCase()),i=e.footnoteOrder.indexOf(r);let o,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=i+1,l+=1,e.footnoteCounts.set(r,l);const u={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+a,id:n+"fnref-"+a+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(t,u);const d={type:"element",tagName:"sup",properties:{},children:[u]};return e.patch(t,d),e.applyData(t,d)}function pS(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function mS(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function zg(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const a=e.all(t),i=a[0];i&&i.type==="text"?i.value="["+i.value:a.unshift({type:"text",value:"["});const o=a[a.length-1];return o&&o.type==="text"?o.value+=r:a.push({type:"text",value:r}),a}function gS(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return zg(e,t);const a={src:ua(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(a.title=r.title);const i={type:"element",tagName:"img",properties:a,children:[]};return e.patch(t,i),e.applyData(t,i)}function yS(e,t){const n={src:ua(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function xS(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function bS(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return zg(e,t);const a={href:ua(r.url||"")};r.title!==null&&r.title!==void 0&&(a.title=r.title);const i={type:"element",tagName:"a",properties:a,children:e.all(t)};return e.patch(t,i),e.applyData(t,i)}function ES(e,t){const n={href:ua(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function TS(e,t,n){const r=e.all(t),a=n?vS(n):qg(t),i={},o=[];if(typeof t.checked=="boolean"){const f=r[0];let h;f&&f.type==="element"&&f.tagName==="p"?h=f:(h={type:"element",tagName:"p",properties:{},children:[]},r.unshift(h)),h.children.length>0&&h.children.unshift({type:"text",value:" "}),h.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),i.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const f=r[l];(a||l!==0||f.type!=="element"||f.tagName!=="p")&&o.push({type:"text",value:`
`}),f.type==="element"&&f.tagName==="p"&&!a?o.push(...f.children):o.push(f)}const u=r[r.length-1];u&&(a||u.type!=="element"||u.tagName!=="p")&&o.push({type:"text",value:`
`});const d={type:"element",tagName:"li",properties:i,children:o};return e.patch(t,d),e.applyData(t,d)}function vS(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=qg(n[r])}return t}function qg(e){const t=e.spread;return t??e.children.length>1}function _S(e,t){const n={},r=e.all(t);let a=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++a<r.length;){const o=r[a];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const i={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,i),e.applyData(t,i)}function SS(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function kS(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function CS(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function NS(e,t){const n=e.all(t),r=n.shift(),a=[];if(r){const o={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],o),a.push(o)}if(n.length>0){const o={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},l=an(t.children[1]),u=Io(t.children[t.children.length-1]);l&&u&&(o.position={start:l,end:u}),a.push(o)}const i={type:"element",tagName:"table",properties:{},children:e.wrap(a,!0)};return e.patch(t,i),e.applyData(t,i)}function wS(e,t,n){const r=n?n.children:void 0,i=(r?r.indexOf(t):1)===0?"th":"td",o=n&&n.type==="table"?n.align:void 0,l=o?o.length:t.children.length;let u=-1;const d=[];for(;++u<l;){const h=t.children[u],p={},m=o?o[u]:void 0;m&&(p.align=m);let x={type:"element",tagName:i,properties:p,children:[]};h&&(x.children=e.all(h),e.patch(h,x),x=e.applyData(h,x)),d.push(x)}const f={type:"element",tagName:"tr",properties:{},children:e.wrap(d,!0)};return e.patch(t,f),e.applyData(t,f)}function AS(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const jf=9,Ff=32;function IS(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),a=0;const i=[];for(;r;)i.push(Bf(t.slice(a,r.index),a>0,!0),r[0]),a=r.index+r[0].length,r=n.exec(t);return i.push(Bf(t.slice(a),a>0,!1)),i.join("")}function Bf(e,t,n){let r=0,a=e.length;if(t){let i=e.codePointAt(r);for(;i===jf||i===Ff;)r++,i=e.codePointAt(r)}if(n){let i=e.codePointAt(a-1);for(;i===jf||i===Ff;)a--,i=e.codePointAt(a-1)}return a>r?e.slice(r,a):""}function PS(e,t){const n={type:"text",value:IS(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function LS(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const RS={blockquote:lS,break:uS,code:cS,delete:dS,emphasis:hS,footnoteReference:fS,heading:pS,html:mS,imageReference:gS,image:yS,inlineCode:xS,linkReference:bS,link:ES,listItem:TS,list:_S,paragraph:SS,root:kS,strong:CS,table:NS,tableCell:AS,tableRow:wS,text:PS,thematicBreak:LS,toml:Xi,yaml:Xi,definition:Xi,footnoteDefinition:Xi};function Xi(){}const Yg=-1,Ro=0,Ya=1,Vs=2,xd=3,bd=4,Ed=5,Td=6,Wg=7,Gg=8,Hf=typeof self=="object"?self:globalThis,DS=(e,t)=>{const n=(a,i)=>(e.set(i,a),a),r=a=>{if(e.has(a))return e.get(a);const[i,o]=t[a];switch(i){case Ro:case Yg:return n(o,a);case Ya:{const l=n([],a);for(const u of o)l.push(r(u));return l}case Vs:{const l=n({},a);for(const[u,d]of o)l[r(u)]=r(d);return l}case xd:return n(new Date(o),a);case bd:{const{source:l,flags:u}=o;return n(new RegExp(l,u),a)}case Ed:{const l=n(new Map,a);for(const[u,d]of o)l.set(r(u),r(d));return l}case Td:{const l=n(new Set,a);for(const u of o)l.add(r(u));return l}case Wg:{const{name:l,message:u}=o;return n(new Hf[l](u),a)}case Gg:return n(BigInt(o),a);case"BigInt":return n(Object(BigInt(o)),a);case"ArrayBuffer":return n(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:l}=new Uint8Array(o);return n(new DataView(l),o)}}return n(new Hf[i](o),a)};return r},Uf=e=>DS(new Map,e)(0),vr="",{toString:OS}={},{keys:MS}=Object,ka=e=>{const t=typeof e;if(t!=="object"||!e)return[Ro,t];const n=OS.call(e).slice(8,-1);switch(n){case"Array":return[Ya,vr];case"Object":return[Vs,vr];case"Date":return[xd,vr];case"RegExp":return[bd,vr];case"Map":return[Ed,vr];case"Set":return[Td,vr];case"DataView":return[Ya,n]}return n.includes("Array")?[Ya,n]:n.includes("Error")?[Wg,n]:[Vs,n]},Ji=([e,t])=>e===Ro&&(t==="function"||t==="symbol"),jS=(e,t,n,r)=>{const a=(o,l)=>{const u=r.push(o)-1;return n.set(l,u),u},i=o=>{if(n.has(o))return n.get(o);let[l,u]=ka(o);switch(l){case Ro:{let f=o;switch(u){case"bigint":l=Gg,f=o.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);f=null;break;case"undefined":return a([Yg],o)}return a([l,f],o)}case Ya:{if(u){let p=o;return u==="DataView"?p=new Uint8Array(o.buffer):u==="ArrayBuffer"&&(p=new Uint8Array(o)),a([u,[...p]],o)}const f=[],h=a([l,f],o);for(const p of o)f.push(i(p));return h}case Vs:{if(u)switch(u){case"BigInt":return a([u,o.toString()],o);case"Boolean":case"Number":case"String":return a([u,o.valueOf()],o)}if(t&&"toJSON"in o)return i(o.toJSON());const f=[],h=a([l,f],o);for(const p of MS(o))(e||!Ji(ka(o[p])))&&f.push([i(p),i(o[p])]);return h}case xd:return a([l,o.toISOString()],o);case bd:{const{source:f,flags:h}=o;return a([l,{source:f,flags:h}],o)}case Ed:{const f=[],h=a([l,f],o);for(const[p,m]of o)(e||!(Ji(ka(p))||Ji(ka(m))))&&f.push([i(p),i(m)]);return h}case Td:{const f=[],h=a([l,f],o);for(const p of o)(e||!Ji(ka(p)))&&f.push(i(p));return h}}const{message:d}=o;return a([l,{name:u,message:d}],o)};return i},zf=(e,{json:t,lossy:n}={})=>{const r=[];return jS(!(t||n),!!t,new Map,r)(e),r},ta=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Uf(zf(e,t)):structuredClone(e):(e,t)=>Uf(zf(e,t));function FS(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function BS(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function HS(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||FS,r=e.options.footnoteBackLabel||BS,a=e.options.footnoteLabel||"Footnotes",i=e.options.footnoteLabelTagName||"h2",o=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let u=-1;for(;++u<e.footnoteOrder.length;){const d=e.footnoteById.get(e.footnoteOrder[u]);if(!d)continue;const f=e.all(d),h=String(d.identifier).toUpperCase(),p=ua(h.toLowerCase());let m=0;const x=[],S=e.footnoteCounts.get(h);for(;S!==void 0&&++m<=S;){x.length>0&&x.push({type:"text",value:" "});let y=typeof n=="string"?n:n(u,m);typeof y=="string"&&(y={type:"text",value:y}),x.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+p+(m>1?"-"+m:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(u,m),className:["data-footnote-backref"]},children:Array.isArray(y)?y:[y]})}const A=f[f.length-1];if(A&&A.type==="element"&&A.tagName==="p"){const y=A.children[A.children.length-1];y&&y.type==="text"?y.value+=" ":A.children.push({type:"text",value:" "}),A.children.push(...x)}else f.push(...x);const g={type:"element",tagName:"li",properties:{id:t+"fn-"+p},children:e.wrap(f,!0)};e.patch(d,g),l.push(g)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:i,properties:{...ta(o),id:"footnote-label"},children:[{type:"text",value:a}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const Do=function(e){if(e==null)return YS;if(typeof e=="function")return Oo(e);if(typeof e=="object")return Array.isArray(e)?US(e):zS(e);if(typeof e=="string")return qS(e);throw new Error("Expected function, string, or object as test")};function US(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Do(e[n]);return Oo(r);function r(...a){let i=-1;for(;++i<t.length;)if(t[i].apply(this,a))return!0;return!1}}function zS(e){const t=e;return Oo(n);function n(r){const a=r;let i;for(i in e)if(a[i]!==t[i])return!1;return!0}}function qS(e){return Oo(t);function t(n){return n&&n.type===e}}function Oo(e){return t;function t(n,r,a){return!!(WS(n)&&e.call(this,n,typeof r=="number"?r:void 0,a||void 0))}}function YS(){return!0}function WS(e){return e!==null&&typeof e=="object"&&"type"in e}const Vg=[],GS=!0,Vu=!1,VS="skip";function $g(e,t,n,r){let a;typeof t=="function"&&typeof n!="function"?(r=n,n=t):a=t;const i=Do(a),o=r?-1:1;l(e,void 0,[])();function l(u,d,f){const h=u&&typeof u=="object"?u:{};if(typeof h.type=="string"){const m=typeof h.tagName=="string"?h.tagName:typeof h.name=="string"?h.name:void 0;Object.defineProperty(p,"name",{value:"node ("+(u.type+(m?"<"+m+">":""))+")"})}return p;function p(){let m=Vg,x,S,A;if((!t||i(u,d,f[f.length-1]||void 0))&&(m=$S(n(u,f)),m[0]===Vu))return m;if("children"in u&&u.children){const g=u;if(g.children&&m[0]!==VS)for(S=(r?g.children.length:-1)+o,A=f.concat(g);S>-1&&S<g.children.length;){const y=g.children[S];if(x=l(y,S,A)(),x[0]===Vu)return x;S=typeof x[1]=="number"?x[1]:S+o}}return m}}}function $S(e){return Array.isArray(e)?e:typeof e=="number"?[GS,e]:e==null?Vg:[e]}function Mo(e,t,n,r){let a,i,o;typeof t=="function"&&typeof n!="function"?(i=void 0,o=t,a=n):(i=t,o=n,a=r),$g(e,i,l,a);function l(u,d){const f=d[d.length-1],h=f?f.children.indexOf(u):void 0;return o(u,h,f)}}const $u={}.hasOwnProperty,QS={};function KS(e,t){const n=t||QS,r=new Map,a=new Map,i=new Map,o={...RS,...n.handlers},l={all:d,applyData:JS,definitionById:r,footnoteById:a,footnoteCounts:i,footnoteOrder:[],handlers:o,one:u,options:n,patch:XS,wrap:ek};return Mo(e,function(f){if(f.type==="definition"||f.type==="footnoteDefinition"){const h=f.type==="definition"?r:a,p=String(f.identifier).toUpperCase();h.has(p)||h.set(p,f)}}),l;function u(f,h){const p=f.type,m=l.handlers[p];if($u.call(l.handlers,p)&&m)return m(l,f,h);if(l.options.passThrough&&l.options.passThrough.includes(p)){if("children"in f){const{children:S,...A}=f,g=ta(A);return g.children=l.all(f),g}return ta(f)}return(l.options.unknownHandler||ZS)(l,f,h)}function d(f){const h=[];if("children"in f){const p=f.children;let m=-1;for(;++m<p.length;){const x=l.one(p[m],f);if(x){if(m&&p[m-1].type==="break"&&(!Array.isArray(x)&&x.type==="text"&&(x.value=qf(x.value)),!Array.isArray(x)&&x.type==="element")){const S=x.children[0];S&&S.type==="text"&&(S.value=qf(S.value))}Array.isArray(x)?h.push(...x):h.push(x)}}}return h}}function XS(e,t){e.position&&(t.position=BT(e))}function JS(e,t){let n=t;if(e&&e.data){const r=e.data.hName,a=e.data.hChildren,i=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const o="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:o}}n.type==="element"&&i&&Object.assign(n.properties,ta(i)),"children"in n&&n.children&&a!==null&&a!==void 0&&(n.children=a)}return n}function ZS(e,t){const n=t.data||{},r="value"in t&&!($u.call(n,"hProperties")||$u.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function ek(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function qf(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Yf(e,t){const n=KS(e,t),r=n.one(e,void 0),a=HS(n),i=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return a&&i.children.push({type:"text",value:`
`},a),i}function tk(e,t){return e&&"run"in e?async function(n,r){const a=Yf(n,{file:r,...t});await e.run(a,r)}:function(n,r){return Yf(n,{file:r,...e||t})}}function Wf(e){if(e)throw e}var ms=Object.prototype.hasOwnProperty,Qg=Object.prototype.toString,Gf=Object.defineProperty,Vf=Object.getOwnPropertyDescriptor,$f=function(t){return typeof Array.isArray=="function"?Array.isArray(t):Qg.call(t)==="[object Array]"},Qf=function(t){if(!t||Qg.call(t)!=="[object Object]")return!1;var n=ms.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&ms.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var a;for(a in t);return typeof a>"u"||ms.call(t,a)},Kf=function(t,n){Gf&&n.name==="__proto__"?Gf(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Xf=function(t,n){if(n==="__proto__")if(ms.call(t,n)){if(Vf)return Vf(t,n).value}else return;return t[n]},nk=function e(){var t,n,r,a,i,o,l=arguments[0],u=1,d=arguments.length,f=!1;for(typeof l=="boolean"&&(f=l,l=arguments[1]||{},u=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});u<d;++u)if(t=arguments[u],t!=null)for(n in t)r=Xf(l,n),a=Xf(t,n),l!==a&&(f&&a&&(Qf(a)||(i=$f(a)))?(i?(i=!1,o=r&&$f(r)?r:[]):o=r&&Qf(r)?r:{},Kf(l,{name:n,newValue:e(f,o,a)})):typeof a<"u"&&Kf(l,{name:n,newValue:a}));return l};const vl=ra(nk);function Qu(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function rk(){const e=[],t={run:n,use:r};return t;function n(...a){let i=-1;const o=a.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);l(null,...a);function l(u,...d){const f=e[++i];let h=-1;if(u){o(u);return}for(;++h<a.length;)(d[h]===null||d[h]===void 0)&&(d[h]=a[h]);a=d,f?ak(f,l)(...d):o(null,...d)}}function r(a){if(typeof a!="function")throw new TypeError("Expected `middelware` to be a function, not "+a);return e.push(a),t}}function ak(e,t){let n;return r;function r(...o){const l=e.length>o.length;let u;l&&o.push(a);try{u=e.apply(this,o)}catch(d){const f=d;if(l&&n)throw f;return a(f)}l||(u&&u.then&&typeof u.then=="function"?u.then(i,a):u instanceof Error?a(u):i(u))}function a(o,...l){n||(n=!0,t(o,...l))}function i(o){a(null,o)}}const Zt={basename:ik,dirname:sk,extname:ok,join:lk,sep:"/"};function ik(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Ni(e);let n=0,r=-1,a=e.length,i;if(t===void 0||t.length===0||t.length>e.length){for(;a--;)if(e.codePointAt(a)===47){if(i){n=a+1;break}}else r<0&&(i=!0,r=a+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let o=-1,l=t.length-1;for(;a--;)if(e.codePointAt(a)===47){if(i){n=a+1;break}}else o<0&&(i=!0,o=a+1),l>-1&&(e.codePointAt(a)===t.codePointAt(l--)?l<0&&(r=a):(l=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function sk(e){if(Ni(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function ok(e){Ni(e);let t=e.length,n=-1,r=0,a=-1,i=0,o;for(;t--;){const l=e.codePointAt(t);if(l===47){if(o){r=t+1;break}continue}n<0&&(o=!0,n=t+1),l===46?a<0?a=t:i!==1&&(i=1):a>-1&&(i=-1)}return a<0||n<0||i===0||i===1&&a===n-1&&a===r+1?"":e.slice(a,n)}function lk(...e){let t=-1,n;for(;++t<e.length;)Ni(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":uk(n)}function uk(e){Ni(e);const t=e.codePointAt(0)===47;let n=ck(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function ck(e,t){let n="",r=0,a=-1,i=0,o=-1,l,u;for(;++o<=e.length;){if(o<e.length)l=e.codePointAt(o);else{if(l===47)break;l=47}if(l===47){if(!(a===o-1||i===1))if(a!==o-1&&i===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(u=n.lastIndexOf("/"),u!==n.length-1){u<0?(n="",r=0):(n=n.slice(0,u),r=n.length-1-n.lastIndexOf("/")),a=o,i=0;continue}}else if(n.length>0){n="",r=0,a=o,i=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(a+1,o):n=e.slice(a+1,o),r=o-a-1;a=o,i=0}else l===46&&i>-1?i++:i=-1}return n}function Ni(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const dk={cwd:hk};function hk(){return"/"}function Ku(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function fk(e){if(typeof e=="string")e=new URL(e);else if(!Ku(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return pk(e)}function pk(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const a=new TypeError("File URL path must not include encoded / characters");throw a.code="ERR_INVALID_FILE_URL_PATH",a}}return decodeURIComponent(t)}const _l=["history","path","basename","stem","extname","dirname"];class Kg{constructor(t){let n;t?Ku(t)?n={path:t}:typeof t=="string"||mk(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":dk.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<_l.length;){const i=_l[r];i in n&&n[i]!==void 0&&n[i]!==null&&(this[i]=i==="history"?[...n[i]]:n[i])}let a;for(a in n)_l.includes(a)||(this[a]=n[a])}get basename(){return typeof this.path=="string"?Zt.basename(this.path):void 0}set basename(t){kl(t,"basename"),Sl(t,"basename"),this.path=Zt.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?Zt.dirname(this.path):void 0}set dirname(t){Jf(this.basename,"dirname"),this.path=Zt.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?Zt.extname(this.path):void 0}set extname(t){if(Sl(t,"extname"),Jf(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Zt.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Ku(t)&&(t=fk(t)),kl(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?Zt.basename(this.path,this.extname):void 0}set stem(t){kl(t,"stem"),Sl(t,"stem"),this.path=Zt.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const a=this.message(t,n,r);throw a.fatal=!0,a}info(t,n,r){const a=this.message(t,n,r);return a.fatal=void 0,a}message(t,n,r){const a=new tt(t,n,r);return this.path&&(a.name=this.path+":"+a.name,a.file=this.path),a.fatal=!1,this.messages.push(a),a}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Sl(e,t){if(e&&e.includes(Zt.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Zt.sep+"`")}function kl(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Jf(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function mk(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const gk=function(e){const r=this.constructor.prototype,a=r[e],i=function(){return a.apply(i,arguments)};return Object.setPrototypeOf(i,r),i},yk={}.hasOwnProperty;class vd extends gk{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=rk()}copy(){const t=new vd;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(vl(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(wl("data",this.frozen),this.namespace[t]=n,this):yk.call(this.namespace,t)&&this.namespace[t]||void 0:t?(wl("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const a=n.call(t,...r);typeof a=="function"&&this.transformers.use(a)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Zi(t),r=this.parser||this.Parser;return Cl("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Cl("process",this.parser||this.Parser),Nl("process",this.compiler||this.Compiler),n?a(void 0,n):new Promise(a);function a(i,o){const l=Zi(t),u=r.parse(l);r.run(u,l,function(f,h,p){if(f||!h||!p)return d(f);const m=h,x=r.stringify(m,p);Ek(x)?p.value=x:p.result=x,d(f,p)});function d(f,h){f||!h?o(f):i?i(h):n(void 0,h)}}}processSync(t){let n=!1,r;return this.freeze(),Cl("processSync",this.parser||this.Parser),Nl("processSync",this.compiler||this.Compiler),this.process(t,a),ep("processSync","process",n),r;function a(i,o){n=!0,Wf(i),r=o}}run(t,n,r){Zf(t),this.freeze();const a=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?i(void 0,r):new Promise(i);function i(o,l){const u=Zi(n);a.run(t,u,d);function d(f,h,p){const m=h||t;f?l(f):o?o(m):r(void 0,m,p)}}}runSync(t,n){let r=!1,a;return this.run(t,n,i),ep("runSync","run",r),a;function i(o,l){Wf(o),a=l,r=!0}}stringify(t,n){this.freeze();const r=Zi(n),a=this.compiler||this.Compiler;return Nl("stringify",a),Zf(t),a(t,r)}use(t,...n){const r=this.attachers,a=this.namespace;if(wl("use",this.frozen),t!=null)if(typeof t=="function")u(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):o(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function i(d){if(typeof d=="function")u(d,[]);else if(typeof d=="object")if(Array.isArray(d)){const[f,...h]=d;u(f,h)}else o(d);else throw new TypeError("Expected usable value, not `"+d+"`")}function o(d){if(!("plugins"in d)&&!("settings"in d))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(d.plugins),d.settings&&(a.settings=vl(!0,a.settings,d.settings))}function l(d){let f=-1;if(d!=null)if(Array.isArray(d))for(;++f<d.length;){const h=d[f];i(h)}else throw new TypeError("Expected a list of plugins, not `"+d+"`")}function u(d,f){let h=-1,p=-1;for(;++h<r.length;)if(r[h][0]===d){p=h;break}if(p===-1)r.push([d,...f]);else if(f.length>0){let[m,...x]=f;const S=r[p][1];Qu(S)&&Qu(m)&&(m=vl(!0,S,m)),r[p]=[d,m,...x]}}}}const xk=new vd().freeze();function Cl(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Nl(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function wl(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Zf(e){if(!Qu(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function ep(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Zi(e){return bk(e)?e:new Kg(e)}function bk(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Ek(e){return typeof e=="string"||Tk(e)}function Tk(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const vk="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",tp=[],np={allowDangerousHtml:!0},_k=/^(https?|ircs?|mailto|xmpp)$/i,Sk=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function we(e){const t=kk(e),n=Ck(e);return Nk(t.runSync(t.parse(n),n),e)}function kk(e){const t=e.rehypePlugins||tp,n=e.remarkPlugins||tp,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...np}:np;return xk().use(oS).use(n).use(tk,r).use(t)}function Ck(e){const t=e.children||"",n=new Kg;return typeof t=="string"&&(n.value=t),n}function Nk(e,t){const n=t.allowedElements,r=t.allowElement,a=t.components,i=t.disallowedElements,o=t.skipHtml,l=t.unwrapDisallowed,u=t.urlTransform||wk;for(const f of Sk)Object.hasOwn(t,f.from)&&(""+f.from+(f.to?"use `"+f.to+"` instead":"remove it")+vk+f.id,void 0);return Mo(e,d),YT(e,{Fragment:s.Fragment,components:a,ignoreInvalidStyle:!0,jsx:s.jsx,jsxs:s.jsxs,passKeys:!0,passNode:!0});function d(f,h,p){if(f.type==="raw"&&p&&typeof h=="number")return o?p.children.splice(h,1):p.children[h]={type:"text",value:f.value},h;if(f.type==="element"){let m;for(m in bl)if(Object.hasOwn(bl,m)&&Object.hasOwn(f.properties,m)){const x=f.properties[m],S=bl[m];(S===null||S.includes(f.tagName))&&(f.properties[m]=u(String(x||""),m,f))}}if(f.type==="element"){let m=n?!n.includes(f.tagName):i?i.includes(f.tagName):!1;if(!m&&r&&typeof h=="number"&&(m=!r(f,h,p)),m&&p&&typeof h=="number")return l&&f.children?p.children.splice(h,1,...f.children):p.children.splice(h,1),h}}}function wk(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),a=e.indexOf("/");return t===-1||a!==-1&&t>a||n!==-1&&t>n||r!==-1&&t>r||_k.test(e.slice(0,t))?e:""}const rp=/[#.]/g;function Ak(e,t){const n=e||"",r={};let a=0,i,o;for(;a<n.length;){rp.lastIndex=a;const l=rp.exec(n),u=n.slice(a,l?l.index:n.length);u&&(i?i==="#"?r.id=u:Array.isArray(r.className)?r.className.push(u):r.className=[u]:o=u,a+=u.length),l&&(i=l[0],a++)}return{type:"element",tagName:o||t||"div",properties:r,children:[]}}function Xg(e,t,n){const r=n?Rk(n):void 0;function a(i,o,...l){let u;if(i==null){u={type:"root",children:[]};const d=o;l.unshift(d)}else{u=Ak(i,t);const d=u.tagName.toLowerCase(),f=r?r.get(d):void 0;if(u.tagName=f||d,Ik(o))l.unshift(o);else for(const[h,p]of Object.entries(o))Pk(e,u.properties,h,p)}for(const d of l)Xu(u.children,d);return u.type==="element"&&u.tagName==="template"&&(u.content={type:"root",children:u.children},u.children=[]),u}return a}function Ik(e){if(e===null||typeof e!="object"||Array.isArray(e))return!0;if(typeof e.type!="string")return!1;const t=e,n=Object.keys(e);for(const r of n){const a=t[r];if(a&&typeof a=="object"){if(!Array.isArray(a))return!0;const i=a;for(const o of i)if(typeof o!="number"&&typeof o!="string")return!0}}return!!("children"in e&&Array.isArray(e.children))}function Pk(e,t,n,r){const a=cd(e,n);let i;if(r!=null){if(typeof r=="number"){if(Number.isNaN(r))return;i=r}else typeof r=="boolean"?i=r:typeof r=="string"?a.spaceSeparated?i=xf(r):a.commaSeparated?i=ff(r):a.commaOrSpaceSeparated?i=xf(ff(r).join(" ")):i=ap(a,a.property,r):Array.isArray(r)?i=[...r]:i=a.property==="style"?Lk(r):String(r);if(Array.isArray(i)){const o=[];for(const l of i)o.push(ap(a,a.property,l));i=o}a.property==="className"&&Array.isArray(t.className)&&(i=t.className.concat(i)),t[a.property]=i}}function Xu(e,t){if(t!=null)if(typeof t=="number"||typeof t=="string")e.push({type:"text",value:String(t)});else if(Array.isArray(t))for(const n of t)Xu(e,n);else if(typeof t=="object"&&"type"in t)t.type==="root"?Xu(e,t.children):e.push(t);else throw new Error("Expected node, nodes, or string, got `"+t+"`")}function ap(e,t,n){if(typeof n=="string"){if(e.number&&n&&!Number.isNaN(Number(n)))return Number(n);if((e.boolean||e.overloadedBoolean)&&(n===""||pi(n)===pi(t)))return!0}return n}function Lk(e){const t=[];for(const[n,r]of Object.entries(e))t.push([n,r].join(": "));return t.join("; ")}function Rk(e){const t=new Map;for(const n of e)t.set(n.toLowerCase(),n);return t}const Dk=["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","solidColor","textArea","textPath"],Ok=Xg(wo,"div"),Mk=Xg(la,"g",Dk);function jk(e){const t=String(e),n=[];return{toOffset:a,toPoint:r};function r(i){if(typeof i=="number"&&i>-1&&i<=t.length){let o=0;for(;;){let l=n[o];if(l===void 0){const u=ip(t,n[o-1]);l=u===-1?t.length+1:u+1,n[o]=l}if(l>i)return{line:o+1,column:i-(o>0?n[o-1]:0)+1,offset:i};o++}}}function a(i){if(i&&typeof i.line=="number"&&typeof i.column=="number"&&!Number.isNaN(i.line)&&!Number.isNaN(i.column)){for(;n.length<i.line;){const l=n[n.length-1],u=ip(t,l),d=u===-1?t.length+1:u+1;if(l===d)break;n.push(d)}const o=(i.line>1?n[i.line-2]:0)+i.column-1;if(o<n[i.line-1])return o}}}function ip(e,t){const n=e.indexOf("\r",t),r=e.indexOf(`
`,t);return r===-1?n:n===-1||n+1===r?r:n<r?n:r}const rr={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},Jg={}.hasOwnProperty,Fk=Object.prototype;function Bk(e,t){const n=t||{};return _d({file:n.file||void 0,location:!1,schema:n.space==="svg"?la:wo,verbose:n.verbose||!1},e)}function _d(e,t){let n;switch(t.nodeName){case"#comment":{const r=t;return n={type:"comment",value:r.data},gs(e,r,n),n}case"#document":case"#document-fragment":{const r=t,a="mode"in r?r.mode==="quirks"||r.mode==="limited-quirks":!1;if(n={type:"root",children:Zg(e,t.childNodes),data:{quirksMode:a}},e.file&&e.location){const i=String(e.file),o=jk(i),l=o.toPoint(0),u=o.toPoint(i.length);n.position={start:l,end:u}}return n}case"#documentType":{const r=t;return n={type:"doctype"},gs(e,r,n),n}case"#text":{const r=t;return n={type:"text",value:r.value},gs(e,r,n),n}default:return n=Hk(e,t),n}}function Zg(e,t){let n=-1;const r=[];for(;++n<t.length;){const a=_d(e,t[n]);r.push(a)}return r}function Hk(e,t){const n=e.schema;e.schema=t.namespaceURI===rr.svg?la:wo;let r=-1;const a={};for(;++r<t.attrs.length;){const l=t.attrs[r],u=(l.prefix?l.prefix+":":"")+l.name;Jg.call(Fk,u)||(a[u]=l.value)}const o=(e.schema.space==="svg"?Mk:Ok)(t.tagName,a,Zg(e,t.childNodes));if(gs(e,t,o),o.tagName==="template"){const l=t,u=l.sourceCodeLocation,d=u&&u.startTag&&Mr(u.startTag),f=u&&u.endTag&&Mr(u.endTag),h=_d(e,l.content);d&&f&&e.file&&(h.position={start:d.end,end:f.start}),o.content=h}return e.schema=n,o}function gs(e,t,n){if("sourceCodeLocation"in t&&t.sourceCodeLocation&&e.file){const r=Uk(e,n,t.sourceCodeLocation);r&&(e.location=!0,n.position=r)}}function Uk(e,t,n){const r=Mr(n);if(t.type==="element"){const a=t.children[t.children.length-1];if(r&&!n.endTag&&a&&a.position&&a.position.end&&(r.end=Object.assign({},a.position.end)),e.verbose){const i={};let o;if(n.attrs)for(o in n.attrs)Jg.call(n.attrs,o)&&(i[cd(e.schema,o).property]=Mr(n.attrs[o]));n.startTag;const l=Mr(n.startTag),u=n.endTag?Mr(n.endTag):void 0,d={opening:l};u&&(d.closing=u),d.properties=i,t.data={position:d}}}return r}function Mr(e){const t=sp({line:e.startLine,column:e.startCol,offset:e.startOffset}),n=sp({line:e.endLine,column:e.endCol,offset:e.endOffset});return t||n?{start:t,end:n}:void 0}function sp(e){return e.line&&e.column?e:void 0}class wi{constructor(t,n,r){this.property=t,this.normal=n,r&&(this.space=r)}}wi.prototype.property={};wi.prototype.normal={};wi.prototype.space=null;function e1(e,t){const n={},r={};let a=-1;for(;++a<e.length;)Object.assign(n,e[a].property),Object.assign(r,e[a].normal);return new wi(n,r,t)}function Ju(e){return e.toLowerCase()}class jt{constructor(t,n){this.property=t,this.attribute=n}}jt.prototype.space=null;jt.prototype.boolean=!1;jt.prototype.booleanish=!1;jt.prototype.overloadedBoolean=!1;jt.prototype.number=!1;jt.prototype.commaSeparated=!1;jt.prototype.spaceSeparated=!1;jt.prototype.commaOrSpaceSeparated=!1;jt.prototype.mustUseProperty=!1;jt.prototype.defined=!1;let zk=0;const X=gr(),je=gr(),t1=gr(),B=gr(),ye=gr(),Wr=gr(),Et=gr();function gr(){return 2**++zk}const Zu=Object.freeze(Object.defineProperty({__proto__:null,boolean:X,booleanish:je,commaOrSpaceSeparated:Et,commaSeparated:Wr,number:B,overloadedBoolean:t1,spaceSeparated:ye},Symbol.toStringTag,{value:"Module"})),Al=Object.keys(Zu);class Sd extends jt{constructor(t,n,r,a){let i=-1;if(super(t,n),op(this,"space",a),typeof r=="number")for(;++i<Al.length;){const o=Al[i];op(this,Al[i],(r&Zu[o])===Zu[o])}}}Sd.prototype.defined=!0;function op(e,t,n){n&&(e[t]=n)}const qk={}.hasOwnProperty;function ca(e){const t={},n={};let r;for(r in e.properties)if(qk.call(e.properties,r)){const a=e.properties[r],i=new Sd(r,e.transform(e.attributes||{},r),a,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(i.mustUseProperty=!0),t[r]=i,n[Ju(r)]=r,n[Ju(i.attribute)]=r}return new wi(t,n,e.space)}const n1=ca({space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),r1=ca({space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function a1(e,t){return t in e?e[t]:t}function i1(e,t){return a1(e,t.toLowerCase())}const s1=ca({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:i1,properties:{xmlns:null,xmlnsXLink:null}}),o1=ca({transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:je,ariaAutoComplete:null,ariaBusy:je,ariaChecked:je,ariaColCount:B,ariaColIndex:B,ariaColSpan:B,ariaControls:ye,ariaCurrent:null,ariaDescribedBy:ye,ariaDetails:null,ariaDisabled:je,ariaDropEffect:ye,ariaErrorMessage:null,ariaExpanded:je,ariaFlowTo:ye,ariaGrabbed:je,ariaHasPopup:null,ariaHidden:je,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ye,ariaLevel:B,ariaLive:null,ariaModal:je,ariaMultiLine:je,ariaMultiSelectable:je,ariaOrientation:null,ariaOwns:ye,ariaPlaceholder:null,ariaPosInSet:B,ariaPressed:je,ariaReadOnly:je,ariaRelevant:null,ariaRequired:je,ariaRoleDescription:ye,ariaRowCount:B,ariaRowIndex:B,ariaRowSpan:B,ariaSelected:je,ariaSetSize:B,ariaSort:null,ariaValueMax:B,ariaValueMin:B,ariaValueNow:B,ariaValueText:null,role:null}}),Yk=ca({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:i1,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Wr,acceptCharset:ye,accessKey:ye,action:null,allow:null,allowFullScreen:X,allowPaymentRequest:X,allowUserMedia:X,alt:null,as:null,async:X,autoCapitalize:null,autoComplete:ye,autoFocus:X,autoPlay:X,blocking:ye,capture:null,charSet:null,checked:X,cite:null,className:ye,cols:B,colSpan:null,content:null,contentEditable:je,controls:X,controlsList:ye,coords:B|Wr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:X,defer:X,dir:null,dirName:null,disabled:X,download:t1,draggable:je,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:X,formTarget:null,headers:ye,height:B,hidden:X,high:B,href:null,hrefLang:null,htmlFor:ye,httpEquiv:ye,id:null,imageSizes:null,imageSrcSet:null,inert:X,inputMode:null,integrity:null,is:null,isMap:X,itemId:null,itemProp:ye,itemRef:ye,itemScope:X,itemType:ye,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:X,low:B,manifest:null,max:null,maxLength:B,media:null,method:null,min:null,minLength:B,multiple:X,muted:X,name:null,nonce:null,noModule:X,noValidate:X,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:X,optimum:B,pattern:null,ping:ye,placeholder:null,playsInline:X,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:X,referrerPolicy:null,rel:ye,required:X,reversed:X,rows:B,rowSpan:B,sandbox:ye,scope:null,scoped:X,seamless:X,selected:X,shadowRootClonable:X,shadowRootDelegatesFocus:X,shadowRootMode:null,shape:null,size:B,sizes:null,slot:null,span:B,spellCheck:je,src:null,srcDoc:null,srcLang:null,srcSet:null,start:B,step:null,style:null,tabIndex:B,target:null,title:null,translate:null,type:null,typeMustMatch:X,useMap:null,value:je,width:B,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ye,axis:null,background:null,bgColor:null,border:B,borderColor:null,bottomMargin:B,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:X,declare:X,event:null,face:null,frame:null,frameBorder:null,hSpace:B,leftMargin:B,link:null,longDesc:null,lowSrc:null,marginHeight:B,marginWidth:B,noResize:X,noHref:X,noShade:X,noWrap:X,object:null,profile:null,prompt:null,rev:null,rightMargin:B,rules:null,scheme:null,scrolling:je,standby:null,summary:null,text:null,topMargin:B,valueType:null,version:null,vAlign:null,vLink:null,vSpace:B,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:X,disableRemotePlayback:X,prefix:null,property:null,results:B,security:null,unselectable:null}}),Wk=ca({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:a1,properties:{about:Et,accentHeight:B,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:B,amplitude:B,arabicForm:null,ascent:B,attributeName:null,attributeType:null,azimuth:B,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:B,by:null,calcMode:null,capHeight:B,className:ye,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:B,diffuseConstant:B,direction:null,display:null,dur:null,divisor:B,dominantBaseline:null,download:X,dx:null,dy:null,edgeMode:null,editable:null,elevation:B,enableBackground:null,end:null,event:null,exponent:B,externalResourcesRequired:null,fill:null,fillOpacity:B,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Wr,g2:Wr,glyphName:Wr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:B,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:B,horizOriginX:B,horizOriginY:B,id:null,ideographic:B,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:B,k:B,k1:B,k2:B,k3:B,k4:B,kernelMatrix:Et,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:B,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:B,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:B,overlineThickness:B,paintOrder:null,panose1:null,path:null,pathLength:B,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ye,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:B,pointsAtY:B,pointsAtZ:B,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Et,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Et,rev:Et,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Et,requiredFeatures:Et,requiredFonts:Et,requiredFormats:Et,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:B,specularExponent:B,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:B,strikethroughThickness:B,string:null,stroke:null,strokeDashArray:Et,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:B,strokeOpacity:B,strokeWidth:null,style:null,surfaceScale:B,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Et,tabIndex:B,tableValues:null,target:null,targetX:B,targetY:B,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Et,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:B,underlineThickness:B,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:B,values:null,vAlphabetic:B,vMathematical:B,vectorEffect:null,vHanging:B,vIdeographic:B,version:null,vertAdvY:B,vertOriginX:B,vertOriginY:B,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:B,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),Gk=/^data[-\w.:]+$/i,lp=/-[a-z]/g,Vk=/[A-Z]/g;function $k(e,t){const n=Ju(t);let r=t,a=jt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Gk.test(t)){if(t.charAt(4)==="-"){const i=t.slice(5).replace(lp,Kk);r="data"+i.charAt(0).toUpperCase()+i.slice(1)}else{const i=t.slice(4);if(!lp.test(i)){let o=i.replace(Vk,Qk);o.charAt(0)!=="-"&&(o="-"+o),t="data"+o}}a=Sd}return new a(r,t)}function Qk(e){return"-"+e.toLowerCase()}function Kk(e){return e.charAt(1).toUpperCase()}const Xk=e1([r1,n1,s1,o1,Yk],"html"),l1=e1([r1,n1,s1,o1,Wk],"svg"),up={}.hasOwnProperty;function u1(e,t){const n=t||{};function r(a,...i){let o=r.invalid;const l=r.handlers;if(a&&up.call(a,e)){const u=String(a[e]);o=up.call(l,u)?l[u]:r.unknown}if(o)return o.call(this,a,...i)}return r.handlers=n.handlers||{},r.invalid=n.invalid,r.unknown=n.unknown,r}const Jk={},Zk={}.hasOwnProperty,c1=u1("type",{handlers:{root:tC,element:sC,text:aC,comment:iC,doctype:rC}});function eC(e,t){const r=(t||Jk).space;return c1(e,r==="svg"?l1:Xk)}function tC(e,t){const n={nodeName:"#document",mode:(e.data||{}).quirksMode?"quirks":"no-quirks",childNodes:[]};return n.childNodes=kd(e.children,n,t),da(e,n),n}function nC(e,t){const n={nodeName:"#document-fragment",childNodes:[]};return n.childNodes=kd(e.children,n,t),da(e,n),n}function rC(e){const t={nodeName:"#documentType",name:"html",publicId:"",systemId:"",parentNode:null};return da(e,t),t}function aC(e){const t={nodeName:"#text",value:e.value,parentNode:null};return da(e,t),t}function iC(e){const t={nodeName:"#comment",data:e.value,parentNode:null};return da(e,t),t}function sC(e,t){const n=t;let r=n;e.type==="element"&&e.tagName.toLowerCase()==="svg"&&n.space==="html"&&(r=l1);const a=[];let i;if(e.properties){for(i in e.properties)if(i!=="children"&&Zk.call(e.properties,i)){const u=oC(r,i,e.properties[i]);u&&a.push(u)}}const o=r.space,l={nodeName:e.tagName,tagName:e.tagName,attrs:a,namespaceURI:rr[o],childNodes:[],parentNode:null};return l.childNodes=kd(e.children,l,r),da(e,l),e.tagName==="template"&&e.content&&(l.content=nC(e.content,r)),l}function oC(e,t,n){const r=$k(e,t);if(n===!1||n===null||n===void 0||typeof n=="number"&&Number.isNaN(n)||!n&&r.boolean)return;Array.isArray(n)&&(n=r.commaSeparated?pg(n):vg(n));const a={name:r.attribute,value:n===!0?"":String(n)};if(r.space&&r.space!=="html"&&r.space!=="svg"){const i=a.name.indexOf(":");i<0?a.prefix="":(a.name=a.name.slice(i+1),a.prefix=r.attribute.slice(0,i)),a.namespace=rr[r.space]}return a}function kd(e,t,n){let r=-1;const a=[];if(e)for(;++r<e.length;){const i=c1(e[r],n);i.parentNode=t,a.push(i)}return a}function da(e,t){const n=e.position;n&&n.start&&n.end&&(n.start.offset,n.end.offset,t.sourceCodeLocation={startLine:n.start.line,startCol:n.start.column,startOffset:n.start.offset,endLine:n.end.line,endCol:n.end.column,endOffset:n.end.offset})}const lC=["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"],uC=new Set([65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111]),ve="�";var b;(function(e){e[e.EOF=-1]="EOF",e[e.NULL=0]="NULL",e[e.TABULATION=9]="TABULATION",e[e.CARRIAGE_RETURN=13]="CARRIAGE_RETURN",e[e.LINE_FEED=10]="LINE_FEED",e[e.FORM_FEED=12]="FORM_FEED",e[e.SPACE=32]="SPACE",e[e.EXCLAMATION_MARK=33]="EXCLAMATION_MARK",e[e.QUOTATION_MARK=34]="QUOTATION_MARK",e[e.AMPERSAND=38]="AMPERSAND",e[e.APOSTROPHE=39]="APOSTROPHE",e[e.HYPHEN_MINUS=45]="HYPHEN_MINUS",e[e.SOLIDUS=47]="SOLIDUS",e[e.DIGIT_0=48]="DIGIT_0",e[e.DIGIT_9=57]="DIGIT_9",e[e.SEMICOLON=59]="SEMICOLON",e[e.LESS_THAN_SIGN=60]="LESS_THAN_SIGN",e[e.EQUALS_SIGN=61]="EQUALS_SIGN",e[e.GREATER_THAN_SIGN=62]="GREATER_THAN_SIGN",e[e.QUESTION_MARK=63]="QUESTION_MARK",e[e.LATIN_CAPITAL_A=65]="LATIN_CAPITAL_A",e[e.LATIN_CAPITAL_Z=90]="LATIN_CAPITAL_Z",e[e.RIGHT_SQUARE_BRACKET=93]="RIGHT_SQUARE_BRACKET",e[e.GRAVE_ACCENT=96]="GRAVE_ACCENT",e[e.LATIN_SMALL_A=97]="LATIN_SMALL_A",e[e.LATIN_SMALL_Z=122]="LATIN_SMALL_Z"})(b||(b={}));const lt={DASH_DASH:"--",CDATA_START:"[CDATA[",DOCTYPE:"doctype",SCRIPT:"script",PUBLIC:"public",SYSTEM:"system"};function d1(e){return e>=55296&&e<=57343}function cC(e){return e>=56320&&e<=57343}function dC(e,t){return(e-55296)*1024+9216+t}function h1(e){return e!==32&&e!==10&&e!==13&&e!==9&&e!==12&&e>=1&&e<=31||e>=127&&e<=159}function f1(e){return e>=64976&&e<=65007||uC.has(e)}var L;(function(e){e.controlCharacterInInputStream="control-character-in-input-stream",e.noncharacterInInputStream="noncharacter-in-input-stream",e.surrogateInInputStream="surrogate-in-input-stream",e.nonVoidHtmlElementStartTagWithTrailingSolidus="non-void-html-element-start-tag-with-trailing-solidus",e.endTagWithAttributes="end-tag-with-attributes",e.endTagWithTrailingSolidus="end-tag-with-trailing-solidus",e.unexpectedSolidusInTag="unexpected-solidus-in-tag",e.unexpectedNullCharacter="unexpected-null-character",e.unexpectedQuestionMarkInsteadOfTagName="unexpected-question-mark-instead-of-tag-name",e.invalidFirstCharacterOfTagName="invalid-first-character-of-tag-name",e.unexpectedEqualsSignBeforeAttributeName="unexpected-equals-sign-before-attribute-name",e.missingEndTagName="missing-end-tag-name",e.unexpectedCharacterInAttributeName="unexpected-character-in-attribute-name",e.unknownNamedCharacterReference="unknown-named-character-reference",e.missingSemicolonAfterCharacterReference="missing-semicolon-after-character-reference",e.unexpectedCharacterAfterDoctypeSystemIdentifier="unexpected-character-after-doctype-system-identifier",e.unexpectedCharacterInUnquotedAttributeValue="unexpected-character-in-unquoted-attribute-value",e.eofBeforeTagName="eof-before-tag-name",e.eofInTag="eof-in-tag",e.missingAttributeValue="missing-attribute-value",e.missingWhitespaceBetweenAttributes="missing-whitespace-between-attributes",e.missingWhitespaceAfterDoctypePublicKeyword="missing-whitespace-after-doctype-public-keyword",e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers="missing-whitespace-between-doctype-public-and-system-identifiers",e.missingWhitespaceAfterDoctypeSystemKeyword="missing-whitespace-after-doctype-system-keyword",e.missingQuoteBeforeDoctypePublicIdentifier="missing-quote-before-doctype-public-identifier",e.missingQuoteBeforeDoctypeSystemIdentifier="missing-quote-before-doctype-system-identifier",e.missingDoctypePublicIdentifier="missing-doctype-public-identifier",e.missingDoctypeSystemIdentifier="missing-doctype-system-identifier",e.abruptDoctypePublicIdentifier="abrupt-doctype-public-identifier",e.abruptDoctypeSystemIdentifier="abrupt-doctype-system-identifier",e.cdataInHtmlContent="cdata-in-html-content",e.incorrectlyOpenedComment="incorrectly-opened-comment",e.eofInScriptHtmlCommentLikeText="eof-in-script-html-comment-like-text",e.eofInDoctype="eof-in-doctype",e.nestedComment="nested-comment",e.abruptClosingOfEmptyComment="abrupt-closing-of-empty-comment",e.eofInComment="eof-in-comment",e.incorrectlyClosedComment="incorrectly-closed-comment",e.eofInCdata="eof-in-cdata",e.absenceOfDigitsInNumericCharacterReference="absence-of-digits-in-numeric-character-reference",e.nullCharacterReference="null-character-reference",e.surrogateCharacterReference="surrogate-character-reference",e.characterReferenceOutsideUnicodeRange="character-reference-outside-unicode-range",e.controlCharacterReference="control-character-reference",e.noncharacterCharacterReference="noncharacter-character-reference",e.missingWhitespaceBeforeDoctypeName="missing-whitespace-before-doctype-name",e.missingDoctypeName="missing-doctype-name",e.invalidCharacterSequenceAfterDoctypeName="invalid-character-sequence-after-doctype-name",e.duplicateAttribute="duplicate-attribute",e.nonConformingDoctype="non-conforming-doctype",e.missingDoctype="missing-doctype",e.misplacedDoctype="misplaced-doctype",e.endTagWithoutMatchingOpenElement="end-tag-without-matching-open-element",e.closingOfElementWithOpenChildElements="closing-of-element-with-open-child-elements",e.disallowedContentInNoscriptInHead="disallowed-content-in-noscript-in-head",e.openElementsLeftAfterEof="open-elements-left-after-eof",e.abandonedHeadElementChild="abandoned-head-element-child",e.misplacedStartTagForHeadElement="misplaced-start-tag-for-head-element",e.nestedNoscriptInHead="nested-noscript-in-head",e.eofInElementThatCanContainOnlyText="eof-in-element-that-can-contain-only-text"})(L||(L={}));const hC=65536;class fC{constructor(t){this.handler=t,this.html="",this.pos=-1,this.lastGapPos=-2,this.gapStack=[],this.skipNextNewLine=!1,this.lastChunkWritten=!1,this.endOfChunkHit=!1,this.bufferWaterline=hC,this.isEol=!1,this.lineStartPos=0,this.droppedBufferSize=0,this.line=1,this.lastErrOffset=-1}get col(){return this.pos-this.lineStartPos+ +(this.lastGapPos!==this.pos)}get offset(){return this.droppedBufferSize+this.pos}getError(t,n){const{line:r,col:a,offset:i}=this,o=a+n,l=i+n;return{code:t,startLine:r,endLine:r,startCol:o,endCol:o,startOffset:l,endOffset:l}}_err(t){this.handler.onParseError&&this.lastErrOffset!==this.offset&&(this.lastErrOffset=this.offset,this.handler.onParseError(this.getError(t,0)))}_addGap(){this.gapStack.push(this.lastGapPos),this.lastGapPos=this.pos}_processSurrogate(t){if(this.pos!==this.html.length-1){const n=this.html.charCodeAt(this.pos+1);if(cC(n))return this.pos++,this._addGap(),dC(t,n)}else if(!this.lastChunkWritten)return this.endOfChunkHit=!0,b.EOF;return this._err(L.surrogateInInputStream),t}willDropParsedChunk(){return this.pos>this.bufferWaterline}dropParsedChunk(){this.willDropParsedChunk()&&(this.html=this.html.substring(this.pos),this.lineStartPos-=this.pos,this.droppedBufferSize+=this.pos,this.pos=0,this.lastGapPos=-2,this.gapStack.length=0)}write(t,n){this.html.length>0?this.html+=t:this.html=t,this.endOfChunkHit=!1,this.lastChunkWritten=n}insertHtmlAtCurrentPos(t){this.html=this.html.substring(0,this.pos+1)+t+this.html.substring(this.pos+1),this.endOfChunkHit=!1}startsWith(t,n){if(this.pos+t.length>this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,!1;if(n)return this.html.startsWith(t,this.pos);for(let r=0;r<t.length;r++)if((this.html.charCodeAt(this.pos+r)|32)!==t.charCodeAt(r))return!1;return!0}peek(t){const n=this.pos+t;if(n>=this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,b.EOF;const r=this.html.charCodeAt(n);return r===b.CARRIAGE_RETURN?b.LINE_FEED:r}advance(){if(this.pos++,this.isEol&&(this.isEol=!1,this.line++,this.lineStartPos=this.pos),this.pos>=this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,b.EOF;let t=this.html.charCodeAt(this.pos);return t===b.CARRIAGE_RETURN?(this.isEol=!0,this.skipNextNewLine=!0,b.LINE_FEED):t===b.LINE_FEED&&(this.isEol=!0,this.skipNextNewLine)?(this.line--,this.skipNextNewLine=!1,this._addGap(),this.advance()):(this.skipNextNewLine=!1,d1(t)&&(t=this._processSurrogate(t)),this.handler.onParseError===null||t>31&&t<127||t===b.LINE_FEED||t===b.CARRIAGE_RETURN||t>159&&t<64976||this._checkForProblematicCharacters(t),t)}_checkForProblematicCharacters(t){h1(t)?this._err(L.controlCharacterInInputStream):f1(t)&&this._err(L.noncharacterInInputStream)}retreat(t){for(this.pos-=t;this.pos<this.lastGapPos;)this.lastGapPos=this.gapStack.pop(),this.pos--;this.isEol=!1}}var ee;(function(e){e[e.CHARACTER=0]="CHARACTER",e[e.NULL_CHARACTER=1]="NULL_CHARACTER",e[e.WHITESPACE_CHARACTER=2]="WHITESPACE_CHARACTER",e[e.START_TAG=3]="START_TAG",e[e.END_TAG=4]="END_TAG",e[e.COMMENT=5]="COMMENT",e[e.DOCTYPE=6]="DOCTYPE",e[e.EOF=7]="EOF",e[e.HIBERNATION=8]="HIBERNATION"})(ee||(ee={}));function p1(e,t){for(let n=e.attrs.length-1;n>=0;n--)if(e.attrs[n].name===t)return e.attrs[n].value;return null}const pC=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),mC=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]);function gC(e){var t;return e>=55296&&e<=57343||e>1114111?65533:(t=mC.get(e))!==null&&t!==void 0?t:e}var Ye;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(Ye||(Ye={}));const yC=32;var Rn;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(Rn||(Rn={}));function ec(e){return e>=Ye.ZERO&&e<=Ye.NINE}function xC(e){return e>=Ye.UPPER_A&&e<=Ye.UPPER_F||e>=Ye.LOWER_A&&e<=Ye.LOWER_F}function bC(e){return e>=Ye.UPPER_A&&e<=Ye.UPPER_Z||e>=Ye.LOWER_A&&e<=Ye.LOWER_Z||ec(e)}function EC(e){return e===Ye.EQUALS||bC(e)}var ze;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(ze||(ze={}));var dn;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(dn||(dn={}));class TC{constructor(t,n,r){this.decodeTree=t,this.emitCodePoint=n,this.errors=r,this.state=ze.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=dn.Strict}startEntity(t){this.decodeMode=t,this.state=ze.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(t,n){switch(this.state){case ze.EntityStart:return t.charCodeAt(n)===Ye.NUM?(this.state=ze.NumericStart,this.consumed+=1,this.stateNumericStart(t,n+1)):(this.state=ze.NamedEntity,this.stateNamedEntity(t,n));case ze.NumericStart:return this.stateNumericStart(t,n);case ze.NumericDecimal:return this.stateNumericDecimal(t,n);case ze.NumericHex:return this.stateNumericHex(t,n);case ze.NamedEntity:return this.stateNamedEntity(t,n)}}stateNumericStart(t,n){return n>=t.length?-1:(t.charCodeAt(n)|yC)===Ye.LOWER_X?(this.state=ze.NumericHex,this.consumed+=1,this.stateNumericHex(t,n+1)):(this.state=ze.NumericDecimal,this.stateNumericDecimal(t,n))}addToNumericResult(t,n,r,a){if(n!==r){const i=r-n;this.result=this.result*Math.pow(a,i)+Number.parseInt(t.substr(n,i),a),this.consumed+=i}}stateNumericHex(t,n){const r=n;for(;n<t.length;){const a=t.charCodeAt(n);if(ec(a)||xC(a))n+=1;else return this.addToNumericResult(t,r,n,16),this.emitNumericEntity(a,3)}return this.addToNumericResult(t,r,n,16),-1}stateNumericDecimal(t,n){const r=n;for(;n<t.length;){const a=t.charCodeAt(n);if(ec(a))n+=1;else return this.addToNumericResult(t,r,n,10),this.emitNumericEntity(a,2)}return this.addToNumericResult(t,r,n,10),-1}emitNumericEntity(t,n){var r;if(this.consumed<=n)return(r=this.errors)===null||r===void 0||r.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(t===Ye.SEMI)this.consumed+=1;else if(this.decodeMode===dn.Strict)return 0;return this.emitCodePoint(gC(this.result),this.consumed),this.errors&&(t!==Ye.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(t,n){const{decodeTree:r}=this;let a=r[this.treeIndex],i=(a&Rn.VALUE_LENGTH)>>14;for(;n<t.length;n++,this.excess++){const o=t.charCodeAt(n);if(this.treeIndex=vC(r,a,this.treeIndex+Math.max(1,i),o),this.treeIndex<0)return this.result===0||this.decodeMode===dn.Attribute&&(i===0||EC(o))?0:this.emitNotTerminatedNamedEntity();if(a=r[this.treeIndex],i=(a&Rn.VALUE_LENGTH)>>14,i!==0){if(o===Ye.SEMI)return this.emitNamedEntityData(this.treeIndex,i,this.consumed+this.excess);this.decodeMode!==dn.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var t;const{result:n,decodeTree:r}=this,a=(r[n]&Rn.VALUE_LENGTH)>>14;return this.emitNamedEntityData(n,a,this.consumed),(t=this.errors)===null||t===void 0||t.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(t,n,r){const{decodeTree:a}=this;return this.emitCodePoint(n===1?a[t]&~Rn.VALUE_LENGTH:a[t+1],r),n===3&&this.emitCodePoint(a[t+2],r),r}end(){var t;switch(this.state){case ze.NamedEntity:return this.result!==0&&(this.decodeMode!==dn.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case ze.NumericDecimal:return this.emitNumericEntity(0,2);case ze.NumericHex:return this.emitNumericEntity(0,3);case ze.NumericStart:return(t=this.errors)===null||t===void 0||t.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case ze.EntityStart:return 0}}}function vC(e,t,n,r){const a=(t&Rn.BRANCH_LENGTH)>>7,i=t&Rn.JUMP_TABLE;if(a===0)return i!==0&&r===i?n:-1;if(i){const u=r-i;return u<0||u>=a?-1:e[n+u]-1}let o=n,l=o+a-1;for(;o<=l;){const u=o+l>>>1,d=e[u];if(d<r)o=u+1;else if(d>r)l=u-1;else return e[u+a]}return-1}var O;(function(e){e.HTML="http://www.w3.org/1999/xhtml",e.MATHML="http://www.w3.org/1998/Math/MathML",e.SVG="http://www.w3.org/2000/svg",e.XLINK="http://www.w3.org/1999/xlink",e.XML="http://www.w3.org/XML/1998/namespace",e.XMLNS="http://www.w3.org/2000/xmlns/"})(O||(O={}));var sr;(function(e){e.TYPE="type",e.ACTION="action",e.ENCODING="encoding",e.PROMPT="prompt",e.NAME="name",e.COLOR="color",e.FACE="face",e.SIZE="size"})(sr||(sr={}));var Lt;(function(e){e.NO_QUIRKS="no-quirks",e.QUIRKS="quirks",e.LIMITED_QUIRKS="limited-quirks"})(Lt||(Lt={}));var I;(function(e){e.A="a",e.ADDRESS="address",e.ANNOTATION_XML="annotation-xml",e.APPLET="applet",e.AREA="area",e.ARTICLE="article",e.ASIDE="aside",e.B="b",e.BASE="base",e.BASEFONT="basefont",e.BGSOUND="bgsound",e.BIG="big",e.BLOCKQUOTE="blockquote",e.BODY="body",e.BR="br",e.BUTTON="button",e.CAPTION="caption",e.CENTER="center",e.CODE="code",e.COL="col",e.COLGROUP="colgroup",e.DD="dd",e.DESC="desc",e.DETAILS="details",e.DIALOG="dialog",e.DIR="dir",e.DIV="div",e.DL="dl",e.DT="dt",e.EM="em",e.EMBED="embed",e.FIELDSET="fieldset",e.FIGCAPTION="figcaption",e.FIGURE="figure",e.FONT="font",e.FOOTER="footer",e.FOREIGN_OBJECT="foreignObject",e.FORM="form",e.FRAME="frame",e.FRAMESET="frameset",e.H1="h1",e.H2="h2",e.H3="h3",e.H4="h4",e.H5="h5",e.H6="h6",e.HEAD="head",e.HEADER="header",e.HGROUP="hgroup",e.HR="hr",e.HTML="html",e.I="i",e.IMG="img",e.IMAGE="image",e.INPUT="input",e.IFRAME="iframe",e.KEYGEN="keygen",e.LABEL="label",e.LI="li",e.LINK="link",e.LISTING="listing",e.MAIN="main",e.MALIGNMARK="malignmark",e.MARQUEE="marquee",e.MATH="math",e.MENU="menu",e.META="meta",e.MGLYPH="mglyph",e.MI="mi",e.MO="mo",e.MN="mn",e.MS="ms",e.MTEXT="mtext",e.NAV="nav",e.NOBR="nobr",e.NOFRAMES="noframes",e.NOEMBED="noembed",e.NOSCRIPT="noscript",e.OBJECT="object",e.OL="ol",e.OPTGROUP="optgroup",e.OPTION="option",e.P="p",e.PARAM="param",e.PLAINTEXT="plaintext",e.PRE="pre",e.RB="rb",e.RP="rp",e.RT="rt",e.RTC="rtc",e.RUBY="ruby",e.S="s",e.SCRIPT="script",e.SEARCH="search",e.SECTION="section",e.SELECT="select",e.SOURCE="source",e.SMALL="small",e.SPAN="span",e.STRIKE="strike",e.STRONG="strong",e.STYLE="style",e.SUB="sub",e.SUMMARY="summary",e.SUP="sup",e.TABLE="table",e.TBODY="tbody",e.TEMPLATE="template",e.TEXTAREA="textarea",e.TFOOT="tfoot",e.TD="td",e.TH="th",e.THEAD="thead",e.TITLE="title",e.TR="tr",e.TRACK="track",e.TT="tt",e.U="u",e.UL="ul",e.SVG="svg",e.VAR="var",e.WBR="wbr",e.XMP="xmp"})(I||(I={}));var c;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.A=1]="A",e[e.ADDRESS=2]="ADDRESS",e[e.ANNOTATION_XML=3]="ANNOTATION_XML",e[e.APPLET=4]="APPLET",e[e.AREA=5]="AREA",e[e.ARTICLE=6]="ARTICLE",e[e.ASIDE=7]="ASIDE",e[e.B=8]="B",e[e.BASE=9]="BASE",e[e.BASEFONT=10]="BASEFONT",e[e.BGSOUND=11]="BGSOUND",e[e.BIG=12]="BIG",e[e.BLOCKQUOTE=13]="BLOCKQUOTE",e[e.BODY=14]="BODY",e[e.BR=15]="BR",e[e.BUTTON=16]="BUTTON",e[e.CAPTION=17]="CAPTION",e[e.CENTER=18]="CENTER",e[e.CODE=19]="CODE",e[e.COL=20]="COL",e[e.COLGROUP=21]="COLGROUP",e[e.DD=22]="DD",e[e.DESC=23]="DESC",e[e.DETAILS=24]="DETAILS",e[e.DIALOG=25]="DIALOG",e[e.DIR=26]="DIR",e[e.DIV=27]="DIV",e[e.DL=28]="DL",e[e.DT=29]="DT",e[e.EM=30]="EM",e[e.EMBED=31]="EMBED",e[e.FIELDSET=32]="FIELDSET",e[e.FIGCAPTION=33]="FIGCAPTION",e[e.FIGURE=34]="FIGURE",e[e.FONT=35]="FONT",e[e.FOOTER=36]="FOOTER",e[e.FOREIGN_OBJECT=37]="FOREIGN_OBJECT",e[e.FORM=38]="FORM",e[e.FRAME=39]="FRAME",e[e.FRAMESET=40]="FRAMESET",e[e.H1=41]="H1",e[e.H2=42]="H2",e[e.H3=43]="H3",e[e.H4=44]="H4",e[e.H5=45]="H5",e[e.H6=46]="H6",e[e.HEAD=47]="HEAD",e[e.HEADER=48]="HEADER",e[e.HGROUP=49]="HGROUP",e[e.HR=50]="HR",e[e.HTML=51]="HTML",e[e.I=52]="I",e[e.IMG=53]="IMG",e[e.IMAGE=54]="IMAGE",e[e.INPUT=55]="INPUT",e[e.IFRAME=56]="IFRAME",e[e.KEYGEN=57]="KEYGEN",e[e.LABEL=58]="LABEL",e[e.LI=59]="LI",e[e.LINK=60]="LINK",e[e.LISTING=61]="LISTING",e[e.MAIN=62]="MAIN",e[e.MALIGNMARK=63]="MALIGNMARK",e[e.MARQUEE=64]="MARQUEE",e[e.MATH=65]="MATH",e[e.MENU=66]="MENU",e[e.META=67]="META",e[e.MGLYPH=68]="MGLYPH",e[e.MI=69]="MI",e[e.MO=70]="MO",e[e.MN=71]="MN",e[e.MS=72]="MS",e[e.MTEXT=73]="MTEXT",e[e.NAV=74]="NAV",e[e.NOBR=75]="NOBR",e[e.NOFRAMES=76]="NOFRAMES",e[e.NOEMBED=77]="NOEMBED",e[e.NOSCRIPT=78]="NOSCRIPT",e[e.OBJECT=79]="OBJECT",e[e.OL=80]="OL",e[e.OPTGROUP=81]="OPTGROUP",e[e.OPTION=82]="OPTION",e[e.P=83]="P",e[e.PARAM=84]="PARAM",e[e.PLAINTEXT=85]="PLAINTEXT",e[e.PRE=86]="PRE",e[e.RB=87]="RB",e[e.RP=88]="RP",e[e.RT=89]="RT",e[e.RTC=90]="RTC",e[e.RUBY=91]="RUBY",e[e.S=92]="S",e[e.SCRIPT=93]="SCRIPT",e[e.SEARCH=94]="SEARCH",e[e.SECTION=95]="SECTION",e[e.SELECT=96]="SELECT",e[e.SOURCE=97]="SOURCE",e[e.SMALL=98]="SMALL",e[e.SPAN=99]="SPAN",e[e.STRIKE=100]="STRIKE",e[e.STRONG=101]="STRONG",e[e.STYLE=102]="STYLE",e[e.SUB=103]="SUB",e[e.SUMMARY=104]="SUMMARY",e[e.SUP=105]="SUP",e[e.TABLE=106]="TABLE",e[e.TBODY=107]="TBODY",e[e.TEMPLATE=108]="TEMPLATE",e[e.TEXTAREA=109]="TEXTAREA",e[e.TFOOT=110]="TFOOT",e[e.TD=111]="TD",e[e.TH=112]="TH",e[e.THEAD=113]="THEAD",e[e.TITLE=114]="TITLE",e[e.TR=115]="TR",e[e.TRACK=116]="TRACK",e[e.TT=117]="TT",e[e.U=118]="U",e[e.UL=119]="UL",e[e.SVG=120]="SVG",e[e.VAR=121]="VAR",e[e.WBR=122]="WBR",e[e.XMP=123]="XMP"})(c||(c={}));const _C=new Map([[I.A,c.A],[I.ADDRESS,c.ADDRESS],[I.ANNOTATION_XML,c.ANNOTATION_XML],[I.APPLET,c.APPLET],[I.AREA,c.AREA],[I.ARTICLE,c.ARTICLE],[I.ASIDE,c.ASIDE],[I.B,c.B],[I.BASE,c.BASE],[I.BASEFONT,c.BASEFONT],[I.BGSOUND,c.BGSOUND],[I.BIG,c.BIG],[I.BLOCKQUOTE,c.BLOCKQUOTE],[I.BODY,c.BODY],[I.BR,c.BR],[I.BUTTON,c.BUTTON],[I.CAPTION,c.CAPTION],[I.CENTER,c.CENTER],[I.CODE,c.CODE],[I.COL,c.COL],[I.COLGROUP,c.COLGROUP],[I.DD,c.DD],[I.DESC,c.DESC],[I.DETAILS,c.DETAILS],[I.DIALOG,c.DIALOG],[I.DIR,c.DIR],[I.DIV,c.DIV],[I.DL,c.DL],[I.DT,c.DT],[I.EM,c.EM],[I.EMBED,c.EMBED],[I.FIELDSET,c.FIELDSET],[I.FIGCAPTION,c.FIGCAPTION],[I.FIGURE,c.FIGURE],[I.FONT,c.FONT],[I.FOOTER,c.FOOTER],[I.FOREIGN_OBJECT,c.FOREIGN_OBJECT],[I.FORM,c.FORM],[I.FRAME,c.FRAME],[I.FRAMESET,c.FRAMESET],[I.H1,c.H1],[I.H2,c.H2],[I.H3,c.H3],[I.H4,c.H4],[I.H5,c.H5],[I.H6,c.H6],[I.HEAD,c.HEAD],[I.HEADER,c.HEADER],[I.HGROUP,c.HGROUP],[I.HR,c.HR],[I.HTML,c.HTML],[I.I,c.I],[I.IMG,c.IMG],[I.IMAGE,c.IMAGE],[I.INPUT,c.INPUT],[I.IFRAME,c.IFRAME],[I.KEYGEN,c.KEYGEN],[I.LABEL,c.LABEL],[I.LI,c.LI],[I.LINK,c.LINK],[I.LISTING,c.LISTING],[I.MAIN,c.MAIN],[I.MALIGNMARK,c.MALIGNMARK],[I.MARQUEE,c.MARQUEE],[I.MATH,c.MATH],[I.MENU,c.MENU],[I.META,c.META],[I.MGLYPH,c.MGLYPH],[I.MI,c.MI],[I.MO,c.MO],[I.MN,c.MN],[I.MS,c.MS],[I.MTEXT,c.MTEXT],[I.NAV,c.NAV],[I.NOBR,c.NOBR],[I.NOFRAMES,c.NOFRAMES],[I.NOEMBED,c.NOEMBED],[I.NOSCRIPT,c.NOSCRIPT],[I.OBJECT,c.OBJECT],[I.OL,c.OL],[I.OPTGROUP,c.OPTGROUP],[I.OPTION,c.OPTION],[I.P,c.P],[I.PARAM,c.PARAM],[I.PLAINTEXT,c.PLAINTEXT],[I.PRE,c.PRE],[I.RB,c.RB],[I.RP,c.RP],[I.RT,c.RT],[I.RTC,c.RTC],[I.RUBY,c.RUBY],[I.S,c.S],[I.SCRIPT,c.SCRIPT],[I.SEARCH,c.SEARCH],[I.SECTION,c.SECTION],[I.SELECT,c.SELECT],[I.SOURCE,c.SOURCE],[I.SMALL,c.SMALL],[I.SPAN,c.SPAN],[I.STRIKE,c.STRIKE],[I.STRONG,c.STRONG],[I.STYLE,c.STYLE],[I.SUB,c.SUB],[I.SUMMARY,c.SUMMARY],[I.SUP,c.SUP],[I.TABLE,c.TABLE],[I.TBODY,c.TBODY],[I.TEMPLATE,c.TEMPLATE],[I.TEXTAREA,c.TEXTAREA],[I.TFOOT,c.TFOOT],[I.TD,c.TD],[I.TH,c.TH],[I.THEAD,c.THEAD],[I.TITLE,c.TITLE],[I.TR,c.TR],[I.TRACK,c.TRACK],[I.TT,c.TT],[I.U,c.U],[I.UL,c.UL],[I.SVG,c.SVG],[I.VAR,c.VAR],[I.WBR,c.WBR],[I.XMP,c.XMP]]);function ha(e){var t;return(t=_C.get(e))!==null&&t!==void 0?t:c.UNKNOWN}const M=c,SC={[O.HTML]:new Set([M.ADDRESS,M.APPLET,M.AREA,M.ARTICLE,M.ASIDE,M.BASE,M.BASEFONT,M.BGSOUND,M.BLOCKQUOTE,M.BODY,M.BR,M.BUTTON,M.CAPTION,M.CENTER,M.COL,M.COLGROUP,M.DD,M.DETAILS,M.DIR,M.DIV,M.DL,M.DT,M.EMBED,M.FIELDSET,M.FIGCAPTION,M.FIGURE,M.FOOTER,M.FORM,M.FRAME,M.FRAMESET,M.H1,M.H2,M.H3,M.H4,M.H5,M.H6,M.HEAD,M.HEADER,M.HGROUP,M.HR,M.HTML,M.IFRAME,M.IMG,M.INPUT,M.LI,M.LINK,M.LISTING,M.MAIN,M.MARQUEE,M.MENU,M.META,M.NAV,M.NOEMBED,M.NOFRAMES,M.NOSCRIPT,M.OBJECT,M.OL,M.P,M.PARAM,M.PLAINTEXT,M.PRE,M.SCRIPT,M.SECTION,M.SELECT,M.SOURCE,M.STYLE,M.SUMMARY,M.TABLE,M.TBODY,M.TD,M.TEMPLATE,M.TEXTAREA,M.TFOOT,M.TH,M.THEAD,M.TITLE,M.TR,M.TRACK,M.UL,M.WBR,M.XMP]),[O.MATHML]:new Set([M.MI,M.MO,M.MN,M.MS,M.MTEXT,M.ANNOTATION_XML]),[O.SVG]:new Set([M.TITLE,M.FOREIGN_OBJECT,M.DESC]),[O.XLINK]:new Set,[O.XML]:new Set,[O.XMLNS]:new Set},tc=new Set([M.H1,M.H2,M.H3,M.H4,M.H5,M.H6]);I.STYLE,I.SCRIPT,I.XMP,I.IFRAME,I.NOEMBED,I.NOFRAMES,I.PLAINTEXT;var T;(function(e){e[e.DATA=0]="DATA",e[e.RCDATA=1]="RCDATA",e[e.RAWTEXT=2]="RAWTEXT",e[e.SCRIPT_DATA=3]="SCRIPT_DATA",e[e.PLAINTEXT=4]="PLAINTEXT",e[e.TAG_OPEN=5]="TAG_OPEN",e[e.END_TAG_OPEN=6]="END_TAG_OPEN",e[e.TAG_NAME=7]="TAG_NAME",e[e.RCDATA_LESS_THAN_SIGN=8]="RCDATA_LESS_THAN_SIGN",e[e.RCDATA_END_TAG_OPEN=9]="RCDATA_END_TAG_OPEN",e[e.RCDATA_END_TAG_NAME=10]="RCDATA_END_TAG_NAME",e[e.RAWTEXT_LESS_THAN_SIGN=11]="RAWTEXT_LESS_THAN_SIGN",e[e.RAWTEXT_END_TAG_OPEN=12]="RAWTEXT_END_TAG_OPEN",e[e.RAWTEXT_END_TAG_NAME=13]="RAWTEXT_END_TAG_NAME",e[e.SCRIPT_DATA_LESS_THAN_SIGN=14]="SCRIPT_DATA_LESS_THAN_SIGN",e[e.SCRIPT_DATA_END_TAG_OPEN=15]="SCRIPT_DATA_END_TAG_OPEN",e[e.SCRIPT_DATA_END_TAG_NAME=16]="SCRIPT_DATA_END_TAG_NAME",e[e.SCRIPT_DATA_ESCAPE_START=17]="SCRIPT_DATA_ESCAPE_START",e[e.SCRIPT_DATA_ESCAPE_START_DASH=18]="SCRIPT_DATA_ESCAPE_START_DASH",e[e.SCRIPT_DATA_ESCAPED=19]="SCRIPT_DATA_ESCAPED",e[e.SCRIPT_DATA_ESCAPED_DASH=20]="SCRIPT_DATA_ESCAPED_DASH",e[e.SCRIPT_DATA_ESCAPED_DASH_DASH=21]="SCRIPT_DATA_ESCAPED_DASH_DASH",e[e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN=22]="SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN",e[e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN=23]="SCRIPT_DATA_ESCAPED_END_TAG_OPEN",e[e.SCRIPT_DATA_ESCAPED_END_TAG_NAME=24]="SCRIPT_DATA_ESCAPED_END_TAG_NAME",e[e.SCRIPT_DATA_DOUBLE_ESCAPE_START=25]="SCRIPT_DATA_DOUBLE_ESCAPE_START",e[e.SCRIPT_DATA_DOUBLE_ESCAPED=26]="SCRIPT_DATA_DOUBLE_ESCAPED",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH=27]="SCRIPT_DATA_DOUBLE_ESCAPED_DASH",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH=28]="SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN=29]="SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN",e[e.SCRIPT_DATA_DOUBLE_ESCAPE_END=30]="SCRIPT_DATA_DOUBLE_ESCAPE_END",e[e.BEFORE_ATTRIBUTE_NAME=31]="BEFORE_ATTRIBUTE_NAME",e[e.ATTRIBUTE_NAME=32]="ATTRIBUTE_NAME",e[e.AFTER_ATTRIBUTE_NAME=33]="AFTER_ATTRIBUTE_NAME",e[e.BEFORE_ATTRIBUTE_VALUE=34]="BEFORE_ATTRIBUTE_VALUE",e[e.ATTRIBUTE_VALUE_DOUBLE_QUOTED=35]="ATTRIBUTE_VALUE_DOUBLE_QUOTED",e[e.ATTRIBUTE_VALUE_SINGLE_QUOTED=36]="ATTRIBUTE_VALUE_SINGLE_QUOTED",e[e.ATTRIBUTE_VALUE_UNQUOTED=37]="ATTRIBUTE_VALUE_UNQUOTED",e[e.AFTER_ATTRIBUTE_VALUE_QUOTED=38]="AFTER_ATTRIBUTE_VALUE_QUOTED",e[e.SELF_CLOSING_START_TAG=39]="SELF_CLOSING_START_TAG",e[e.BOGUS_COMMENT=40]="BOGUS_COMMENT",e[e.MARKUP_DECLARATION_OPEN=41]="MARKUP_DECLARATION_OPEN",e[e.COMMENT_START=42]="COMMENT_START",e[e.COMMENT_START_DASH=43]="COMMENT_START_DASH",e[e.COMMENT=44]="COMMENT",e[e.COMMENT_LESS_THAN_SIGN=45]="COMMENT_LESS_THAN_SIGN",e[e.COMMENT_LESS_THAN_SIGN_BANG=46]="COMMENT_LESS_THAN_SIGN_BANG",e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH=47]="COMMENT_LESS_THAN_SIGN_BANG_DASH",e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH=48]="COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH",e[e.COMMENT_END_DASH=49]="COMMENT_END_DASH",e[e.COMMENT_END=50]="COMMENT_END",e[e.COMMENT_END_BANG=51]="COMMENT_END_BANG",e[e.DOCTYPE=52]="DOCTYPE",e[e.BEFORE_DOCTYPE_NAME=53]="BEFORE_DOCTYPE_NAME",e[e.DOCTYPE_NAME=54]="DOCTYPE_NAME",e[e.AFTER_DOCTYPE_NAME=55]="AFTER_DOCTYPE_NAME",e[e.AFTER_DOCTYPE_PUBLIC_KEYWORD=56]="AFTER_DOCTYPE_PUBLIC_KEYWORD",e[e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER=57]="BEFORE_DOCTYPE_PUBLIC_IDENTIFIER",e[e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED=58]="DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED",e[e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED=59]="DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED",e[e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER=60]="AFTER_DOCTYPE_PUBLIC_IDENTIFIER",e[e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS=61]="BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS",e[e.AFTER_DOCTYPE_SYSTEM_KEYWORD=62]="AFTER_DOCTYPE_SYSTEM_KEYWORD",e[e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER=63]="BEFORE_DOCTYPE_SYSTEM_IDENTIFIER",e[e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED=64]="DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED",e[e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED=65]="DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED",e[e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER=66]="AFTER_DOCTYPE_SYSTEM_IDENTIFIER",e[e.BOGUS_DOCTYPE=67]="BOGUS_DOCTYPE",e[e.CDATA_SECTION=68]="CDATA_SECTION",e[e.CDATA_SECTION_BRACKET=69]="CDATA_SECTION_BRACKET",e[e.CDATA_SECTION_END=70]="CDATA_SECTION_END",e[e.CHARACTER_REFERENCE=71]="CHARACTER_REFERENCE",e[e.AMBIGUOUS_AMPERSAND=72]="AMBIGUOUS_AMPERSAND"})(T||(T={}));const De={DATA:T.DATA,RCDATA:T.RCDATA,RAWTEXT:T.RAWTEXT,SCRIPT_DATA:T.SCRIPT_DATA,PLAINTEXT:T.PLAINTEXT,CDATA_SECTION:T.CDATA_SECTION};function kC(e){return e>=b.DIGIT_0&&e<=b.DIGIT_9}function La(e){return e>=b.LATIN_CAPITAL_A&&e<=b.LATIN_CAPITAL_Z}function CC(e){return e>=b.LATIN_SMALL_A&&e<=b.LATIN_SMALL_Z}function Sn(e){return CC(e)||La(e)}function cp(e){return Sn(e)||kC(e)}function es(e){return e+32}function m1(e){return e===b.SPACE||e===b.LINE_FEED||e===b.TABULATION||e===b.FORM_FEED}function dp(e){return m1(e)||e===b.SOLIDUS||e===b.GREATER_THAN_SIGN}function NC(e){return e===b.NULL?L.nullCharacterReference:e>1114111?L.characterReferenceOutsideUnicodeRange:d1(e)?L.surrogateCharacterReference:f1(e)?L.noncharacterCharacterReference:h1(e)||e===b.CARRIAGE_RETURN?L.controlCharacterReference:null}class wC{constructor(t,n){this.options=t,this.handler=n,this.paused=!1,this.inLoop=!1,this.inForeignNode=!1,this.lastStartTagName="",this.active=!1,this.state=T.DATA,this.returnState=T.DATA,this.entityStartPos=0,this.consumedAfterSnapshot=-1,this.currentCharacterToken=null,this.currentToken=null,this.currentAttr={name:"",value:""},this.preprocessor=new fC(n),this.currentLocation=this.getCurrentLocation(-1),this.entityDecoder=new TC(pC,(r,a)=>{this.preprocessor.pos=this.entityStartPos+a-1,this._flushCodePointConsumedAsCharacterReference(r)},n.onParseError?{missingSemicolonAfterCharacterReference:()=>{this._err(L.missingSemicolonAfterCharacterReference,1)},absenceOfDigitsInNumericCharacterReference:r=>{this._err(L.absenceOfDigitsInNumericCharacterReference,this.entityStartPos-this.preprocessor.pos+r)},validateNumericCharacterReference:r=>{const a=NC(r);a&&this._err(a,1)}}:void 0)}_err(t,n=0){var r,a;(a=(r=this.handler).onParseError)===null||a===void 0||a.call(r,this.preprocessor.getError(t,n))}getCurrentLocation(t){return this.options.sourceCodeLocationInfo?{startLine:this.preprocessor.line,startCol:this.preprocessor.col-t,startOffset:this.preprocessor.offset-t,endLine:-1,endCol:-1,endOffset:-1}:null}_runParsingLoop(){if(!this.inLoop){for(this.inLoop=!0;this.active&&!this.paused;){this.consumedAfterSnapshot=0;const t=this._consume();this._ensureHibernation()||this._callState(t)}this.inLoop=!1}}pause(){this.paused=!0}resume(t){if(!this.paused)throw new Error("Parser was already resumed");this.paused=!1,!this.inLoop&&(this._runParsingLoop(),this.paused||t==null||t())}write(t,n,r){this.active=!0,this.preprocessor.write(t,n),this._runParsingLoop(),this.paused||r==null||r()}insertHtmlAtCurrentPos(t){this.active=!0,this.preprocessor.insertHtmlAtCurrentPos(t),this._runParsingLoop()}_ensureHibernation(){return this.preprocessor.endOfChunkHit?(this.preprocessor.retreat(this.consumedAfterSnapshot),this.consumedAfterSnapshot=0,this.active=!1,!0):!1}_consume(){return this.consumedAfterSnapshot++,this.preprocessor.advance()}_advanceBy(t){this.consumedAfterSnapshot+=t;for(let n=0;n<t;n++)this.preprocessor.advance()}_consumeSequenceIfMatch(t,n){return this.preprocessor.startsWith(t,n)?(this._advanceBy(t.length-1),!0):!1}_createStartTagToken(){this.currentToken={type:ee.START_TAG,tagName:"",tagID:c.UNKNOWN,selfClosing:!1,ackSelfClosing:!1,attrs:[],location:this.getCurrentLocation(1)}}_createEndTagToken(){this.currentToken={type:ee.END_TAG,tagName:"",tagID:c.UNKNOWN,selfClosing:!1,ackSelfClosing:!1,attrs:[],location:this.getCurrentLocation(2)}}_createCommentToken(t){this.currentToken={type:ee.COMMENT,data:"",location:this.getCurrentLocation(t)}}_createDoctypeToken(t){this.currentToken={type:ee.DOCTYPE,name:t,forceQuirks:!1,publicId:null,systemId:null,location:this.currentLocation}}_createCharacterToken(t,n){this.currentCharacterToken={type:t,chars:n,location:this.currentLocation}}_createAttr(t){this.currentAttr={name:t,value:""},this.currentLocation=this.getCurrentLocation(0)}_leaveAttrName(){var t,n;const r=this.currentToken;if(p1(r,this.currentAttr.name)===null){if(r.attrs.push(this.currentAttr),r.location&&this.currentLocation){const a=(t=(n=r.location).attrs)!==null&&t!==void 0?t:n.attrs=Object.create(null);a[this.currentAttr.name]=this.currentLocation,this._leaveAttrValue()}}else this._err(L.duplicateAttribute)}_leaveAttrValue(){this.currentLocation&&(this.currentLocation.endLine=this.preprocessor.line,this.currentLocation.endCol=this.preprocessor.col,this.currentLocation.endOffset=this.preprocessor.offset)}prepareToken(t){this._emitCurrentCharacterToken(t.location),this.currentToken=null,t.location&&(t.location.endLine=this.preprocessor.line,t.location.endCol=this.preprocessor.col+1,t.location.endOffset=this.preprocessor.offset+1),this.currentLocation=this.getCurrentLocation(-1)}emitCurrentTagToken(){const t=this.currentToken;this.prepareToken(t),t.tagID=ha(t.tagName),t.type===ee.START_TAG?(this.lastStartTagName=t.tagName,this.handler.onStartTag(t)):(t.attrs.length>0&&this._err(L.endTagWithAttributes),t.selfClosing&&this._err(L.endTagWithTrailingSolidus),this.handler.onEndTag(t)),this.preprocessor.dropParsedChunk()}emitCurrentComment(t){this.prepareToken(t),this.handler.onComment(t),this.preprocessor.dropParsedChunk()}emitCurrentDoctype(t){this.prepareToken(t),this.handler.onDoctype(t),this.preprocessor.dropParsedChunk()}_emitCurrentCharacterToken(t){if(this.currentCharacterToken){switch(t&&this.currentCharacterToken.location&&(this.currentCharacterToken.location.endLine=t.startLine,this.currentCharacterToken.location.endCol=t.startCol,this.currentCharacterToken.location.endOffset=t.startOffset),this.currentCharacterToken.type){case ee.CHARACTER:{this.handler.onCharacter(this.currentCharacterToken);break}case ee.NULL_CHARACTER:{this.handler.onNullCharacter(this.currentCharacterToken);break}case ee.WHITESPACE_CHARACTER:{this.handler.onWhitespaceCharacter(this.currentCharacterToken);break}}this.currentCharacterToken=null}}_emitEOFToken(){const t=this.getCurrentLocation(0);t&&(t.endLine=t.startLine,t.endCol=t.startCol,t.endOffset=t.startOffset),this._emitCurrentCharacterToken(t),this.handler.onEof({type:ee.EOF,location:t}),this.active=!1}_appendCharToCurrentCharacterToken(t,n){if(this.currentCharacterToken)if(this.currentCharacterToken.type===t){this.currentCharacterToken.chars+=n;return}else this.currentLocation=this.getCurrentLocation(0),this._emitCurrentCharacterToken(this.currentLocation),this.preprocessor.dropParsedChunk();this._createCharacterToken(t,n)}_emitCodePoint(t){const n=m1(t)?ee.WHITESPACE_CHARACTER:t===b.NULL?ee.NULL_CHARACTER:ee.CHARACTER;this._appendCharToCurrentCharacterToken(n,String.fromCodePoint(t))}_emitChars(t){this._appendCharToCurrentCharacterToken(ee.CHARACTER,t)}_startCharacterReference(){this.returnState=this.state,this.state=T.CHARACTER_REFERENCE,this.entityStartPos=this.preprocessor.pos,this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute()?dn.Attribute:dn.Legacy)}_isCharacterReferenceInAttribute(){return this.returnState===T.ATTRIBUTE_VALUE_DOUBLE_QUOTED||this.returnState===T.ATTRIBUTE_VALUE_SINGLE_QUOTED||this.returnState===T.ATTRIBUTE_VALUE_UNQUOTED}_flushCodePointConsumedAsCharacterReference(t){this._isCharacterReferenceInAttribute()?this.currentAttr.value+=String.fromCodePoint(t):this._emitCodePoint(t)}_callState(t){switch(this.state){case T.DATA:{this._stateData(t);break}case T.RCDATA:{this._stateRcdata(t);break}case T.RAWTEXT:{this._stateRawtext(t);break}case T.SCRIPT_DATA:{this._stateScriptData(t);break}case T.PLAINTEXT:{this._statePlaintext(t);break}case T.TAG_OPEN:{this._stateTagOpen(t);break}case T.END_TAG_OPEN:{this._stateEndTagOpen(t);break}case T.TAG_NAME:{this._stateTagName(t);break}case T.RCDATA_LESS_THAN_SIGN:{this._stateRcdataLessThanSign(t);break}case T.RCDATA_END_TAG_OPEN:{this._stateRcdataEndTagOpen(t);break}case T.RCDATA_END_TAG_NAME:{this._stateRcdataEndTagName(t);break}case T.RAWTEXT_LESS_THAN_SIGN:{this._stateRawtextLessThanSign(t);break}case T.RAWTEXT_END_TAG_OPEN:{this._stateRawtextEndTagOpen(t);break}case T.RAWTEXT_END_TAG_NAME:{this._stateRawtextEndTagName(t);break}case T.SCRIPT_DATA_LESS_THAN_SIGN:{this._stateScriptDataLessThanSign(t);break}case T.SCRIPT_DATA_END_TAG_OPEN:{this._stateScriptDataEndTagOpen(t);break}case T.SCRIPT_DATA_END_TAG_NAME:{this._stateScriptDataEndTagName(t);break}case T.SCRIPT_DATA_ESCAPE_START:{this._stateScriptDataEscapeStart(t);break}case T.SCRIPT_DATA_ESCAPE_START_DASH:{this._stateScriptDataEscapeStartDash(t);break}case T.SCRIPT_DATA_ESCAPED:{this._stateScriptDataEscaped(t);break}case T.SCRIPT_DATA_ESCAPED_DASH:{this._stateScriptDataEscapedDash(t);break}case T.SCRIPT_DATA_ESCAPED_DASH_DASH:{this._stateScriptDataEscapedDashDash(t);break}case T.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:{this._stateScriptDataEscapedLessThanSign(t);break}case T.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:{this._stateScriptDataEscapedEndTagOpen(t);break}case T.SCRIPT_DATA_ESCAPED_END_TAG_NAME:{this._stateScriptDataEscapedEndTagName(t);break}case T.SCRIPT_DATA_DOUBLE_ESCAPE_START:{this._stateScriptDataDoubleEscapeStart(t);break}case T.SCRIPT_DATA_DOUBLE_ESCAPED:{this._stateScriptDataDoubleEscaped(t);break}case T.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:{this._stateScriptDataDoubleEscapedDash(t);break}case T.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:{this._stateScriptDataDoubleEscapedDashDash(t);break}case T.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:{this._stateScriptDataDoubleEscapedLessThanSign(t);break}case T.SCRIPT_DATA_DOUBLE_ESCAPE_END:{this._stateScriptDataDoubleEscapeEnd(t);break}case T.BEFORE_ATTRIBUTE_NAME:{this._stateBeforeAttributeName(t);break}case T.ATTRIBUTE_NAME:{this._stateAttributeName(t);break}case T.AFTER_ATTRIBUTE_NAME:{this._stateAfterAttributeName(t);break}case T.BEFORE_ATTRIBUTE_VALUE:{this._stateBeforeAttributeValue(t);break}case T.ATTRIBUTE_VALUE_DOUBLE_QUOTED:{this._stateAttributeValueDoubleQuoted(t);break}case T.ATTRIBUTE_VALUE_SINGLE_QUOTED:{this._stateAttributeValueSingleQuoted(t);break}case T.ATTRIBUTE_VALUE_UNQUOTED:{this._stateAttributeValueUnquoted(t);break}case T.AFTER_ATTRIBUTE_VALUE_QUOTED:{this._stateAfterAttributeValueQuoted(t);break}case T.SELF_CLOSING_START_TAG:{this._stateSelfClosingStartTag(t);break}case T.BOGUS_COMMENT:{this._stateBogusComment(t);break}case T.MARKUP_DECLARATION_OPEN:{this._stateMarkupDeclarationOpen(t);break}case T.COMMENT_START:{this._stateCommentStart(t);break}case T.COMMENT_START_DASH:{this._stateCommentStartDash(t);break}case T.COMMENT:{this._stateComment(t);break}case T.COMMENT_LESS_THAN_SIGN:{this._stateCommentLessThanSign(t);break}case T.COMMENT_LESS_THAN_SIGN_BANG:{this._stateCommentLessThanSignBang(t);break}case T.COMMENT_LESS_THAN_SIGN_BANG_DASH:{this._stateCommentLessThanSignBangDash(t);break}case T.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:{this._stateCommentLessThanSignBangDashDash(t);break}case T.COMMENT_END_DASH:{this._stateCommentEndDash(t);break}case T.COMMENT_END:{this._stateCommentEnd(t);break}case T.COMMENT_END_BANG:{this._stateCommentEndBang(t);break}case T.DOCTYPE:{this._stateDoctype(t);break}case T.BEFORE_DOCTYPE_NAME:{this._stateBeforeDoctypeName(t);break}case T.DOCTYPE_NAME:{this._stateDoctypeName(t);break}case T.AFTER_DOCTYPE_NAME:{this._stateAfterDoctypeName(t);break}case T.AFTER_DOCTYPE_PUBLIC_KEYWORD:{this._stateAfterDoctypePublicKeyword(t);break}case T.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:{this._stateBeforeDoctypePublicIdentifier(t);break}case T.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:{this._stateDoctypePublicIdentifierDoubleQuoted(t);break}case T.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:{this._stateDoctypePublicIdentifierSingleQuoted(t);break}case T.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:{this._stateAfterDoctypePublicIdentifier(t);break}case T.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:{this._stateBetweenDoctypePublicAndSystemIdentifiers(t);break}case T.AFTER_DOCTYPE_SYSTEM_KEYWORD:{this._stateAfterDoctypeSystemKeyword(t);break}case T.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:{this._stateBeforeDoctypeSystemIdentifier(t);break}case T.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:{this._stateDoctypeSystemIdentifierDoubleQuoted(t);break}case T.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:{this._stateDoctypeSystemIdentifierSingleQuoted(t);break}case T.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:{this._stateAfterDoctypeSystemIdentifier(t);break}case T.BOGUS_DOCTYPE:{this._stateBogusDoctype(t);break}case T.CDATA_SECTION:{this._stateCdataSection(t);break}case T.CDATA_SECTION_BRACKET:{this._stateCdataSectionBracket(t);break}case T.CDATA_SECTION_END:{this._stateCdataSectionEnd(t);break}case T.CHARACTER_REFERENCE:{this._stateCharacterReference();break}case T.AMBIGUOUS_AMPERSAND:{this._stateAmbiguousAmpersand(t);break}default:throw new Error("Unknown state")}}_stateData(t){switch(t){case b.LESS_THAN_SIGN:{this.state=T.TAG_OPEN;break}case b.AMPERSAND:{this._startCharacterReference();break}case b.NULL:{this._err(L.unexpectedNullCharacter),this._emitCodePoint(t);break}case b.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateRcdata(t){switch(t){case b.AMPERSAND:{this._startCharacterReference();break}case b.LESS_THAN_SIGN:{this.state=T.RCDATA_LESS_THAN_SIGN;break}case b.NULL:{this._err(L.unexpectedNullCharacter),this._emitChars(ve);break}case b.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateRawtext(t){switch(t){case b.LESS_THAN_SIGN:{this.state=T.RAWTEXT_LESS_THAN_SIGN;break}case b.NULL:{this._err(L.unexpectedNullCharacter),this._emitChars(ve);break}case b.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptData(t){switch(t){case b.LESS_THAN_SIGN:{this.state=T.SCRIPT_DATA_LESS_THAN_SIGN;break}case b.NULL:{this._err(L.unexpectedNullCharacter),this._emitChars(ve);break}case b.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_statePlaintext(t){switch(t){case b.NULL:{this._err(L.unexpectedNullCharacter),this._emitChars(ve);break}case b.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateTagOpen(t){if(Sn(t))this._createStartTagToken(),this.state=T.TAG_NAME,this._stateTagName(t);else switch(t){case b.EXCLAMATION_MARK:{this.state=T.MARKUP_DECLARATION_OPEN;break}case b.SOLIDUS:{this.state=T.END_TAG_OPEN;break}case b.QUESTION_MARK:{this._err(L.unexpectedQuestionMarkInsteadOfTagName),this._createCommentToken(1),this.state=T.BOGUS_COMMENT,this._stateBogusComment(t);break}case b.EOF:{this._err(L.eofBeforeTagName),this._emitChars("<"),this._emitEOFToken();break}default:this._err(L.invalidFirstCharacterOfTagName),this._emitChars("<"),this.state=T.DATA,this._stateData(t)}}_stateEndTagOpen(t){if(Sn(t))this._createEndTagToken(),this.state=T.TAG_NAME,this._stateTagName(t);else switch(t){case b.GREATER_THAN_SIGN:{this._err(L.missingEndTagName),this.state=T.DATA;break}case b.EOF:{this._err(L.eofBeforeTagName),this._emitChars("</"),this._emitEOFToken();break}default:this._err(L.invalidFirstCharacterOfTagName),this._createCommentToken(2),this.state=T.BOGUS_COMMENT,this._stateBogusComment(t)}}_stateTagName(t){const n=this.currentToken;switch(t){case b.SPACE:case b.LINE_FEED:case b.TABULATION:case b.FORM_FEED:{this.state=T.BEFORE_ATTRIBUTE_NAME;break}case b.SOLIDUS:{this.state=T.SELF_CLOSING_START_TAG;break}case b.GREATER_THAN_SIGN:{this.state=T.DATA,this.emitCurrentTagToken();break}case b.NULL:{this._err(L.unexpectedNullCharacter),n.tagName+=ve;break}case b.EOF:{this._err(L.eofInTag),this._emitEOFToken();break}default:n.tagName+=String.fromCodePoint(La(t)?es(t):t)}}_stateRcdataLessThanSign(t){t===b.SOLIDUS?this.state=T.RCDATA_END_TAG_OPEN:(this._emitChars("<"),this.state=T.RCDATA,this._stateRcdata(t))}_stateRcdataEndTagOpen(t){Sn(t)?(this.state=T.RCDATA_END_TAG_NAME,this._stateRcdataEndTagName(t)):(this._emitChars("</"),this.state=T.RCDATA,this._stateRcdata(t))}handleSpecialEndTag(t){if(!this.preprocessor.startsWith(this.lastStartTagName,!1))return!this._ensureHibernation();this._createEndTagToken();const n=this.currentToken;switch(n.tagName=this.lastStartTagName,this.preprocessor.peek(this.lastStartTagName.length)){case b.SPACE:case b.LINE_FEED:case b.TABULATION:case b.FORM_FEED:return this._advanceBy(this.lastStartTagName.length),this.state=T.BEFORE_ATTRIBUTE_NAME,!1;case b.SOLIDUS:return this._advanceBy(this.lastStartTagName.length),this.state=T.SELF_CLOSING_START_TAG,!1;case b.GREATER_THAN_SIGN:return this._advanceBy(this.lastStartTagName.length),this.emitCurrentTagToken(),this.state=T.DATA,!1;default:return!this._ensureHibernation()}}_stateRcdataEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=T.RCDATA,this._stateRcdata(t))}_stateRawtextLessThanSign(t){t===b.SOLIDUS?this.state=T.RAWTEXT_END_TAG_OPEN:(this._emitChars("<"),this.state=T.RAWTEXT,this._stateRawtext(t))}_stateRawtextEndTagOpen(t){Sn(t)?(this.state=T.RAWTEXT_END_TAG_NAME,this._stateRawtextEndTagName(t)):(this._emitChars("</"),this.state=T.RAWTEXT,this._stateRawtext(t))}_stateRawtextEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=T.RAWTEXT,this._stateRawtext(t))}_stateScriptDataLessThanSign(t){switch(t){case b.SOLIDUS:{this.state=T.SCRIPT_DATA_END_TAG_OPEN;break}case b.EXCLAMATION_MARK:{this.state=T.SCRIPT_DATA_ESCAPE_START,this._emitChars("<!");break}default:this._emitChars("<"),this.state=T.SCRIPT_DATA,this._stateScriptData(t)}}_stateScriptDataEndTagOpen(t){Sn(t)?(this.state=T.SCRIPT_DATA_END_TAG_NAME,this._stateScriptDataEndTagName(t)):(this._emitChars("</"),this.state=T.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=T.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscapeStart(t){t===b.HYPHEN_MINUS?(this.state=T.SCRIPT_DATA_ESCAPE_START_DASH,this._emitChars("-")):(this.state=T.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscapeStartDash(t){t===b.HYPHEN_MINUS?(this.state=T.SCRIPT_DATA_ESCAPED_DASH_DASH,this._emitChars("-")):(this.state=T.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscaped(t){switch(t){case b.HYPHEN_MINUS:{this.state=T.SCRIPT_DATA_ESCAPED_DASH,this._emitChars("-");break}case b.LESS_THAN_SIGN:{this.state=T.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case b.NULL:{this._err(L.unexpectedNullCharacter),this._emitChars(ve);break}case b.EOF:{this._err(L.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptDataEscapedDash(t){switch(t){case b.HYPHEN_MINUS:{this.state=T.SCRIPT_DATA_ESCAPED_DASH_DASH,this._emitChars("-");break}case b.LESS_THAN_SIGN:{this.state=T.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case b.NULL:{this._err(L.unexpectedNullCharacter),this.state=T.SCRIPT_DATA_ESCAPED,this._emitChars(ve);break}case b.EOF:{this._err(L.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=T.SCRIPT_DATA_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataEscapedDashDash(t){switch(t){case b.HYPHEN_MINUS:{this._emitChars("-");break}case b.LESS_THAN_SIGN:{this.state=T.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case b.GREATER_THAN_SIGN:{this.state=T.SCRIPT_DATA,this._emitChars(">");break}case b.NULL:{this._err(L.unexpectedNullCharacter),this.state=T.SCRIPT_DATA_ESCAPED,this._emitChars(ve);break}case b.EOF:{this._err(L.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=T.SCRIPT_DATA_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataEscapedLessThanSign(t){t===b.SOLIDUS?this.state=T.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:Sn(t)?(this._emitChars("<"),this.state=T.SCRIPT_DATA_DOUBLE_ESCAPE_START,this._stateScriptDataDoubleEscapeStart(t)):(this._emitChars("<"),this.state=T.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataEscapedEndTagOpen(t){Sn(t)?(this.state=T.SCRIPT_DATA_ESCAPED_END_TAG_NAME,this._stateScriptDataEscapedEndTagName(t)):(this._emitChars("</"),this.state=T.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataEscapedEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=T.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataDoubleEscapeStart(t){if(this.preprocessor.startsWith(lt.SCRIPT,!1)&&dp(this.preprocessor.peek(lt.SCRIPT.length))){this._emitCodePoint(t);for(let n=0;n<lt.SCRIPT.length;n++)this._emitCodePoint(this._consume());this.state=T.SCRIPT_DATA_DOUBLE_ESCAPED}else this._ensureHibernation()||(this.state=T.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataDoubleEscaped(t){switch(t){case b.HYPHEN_MINUS:{this.state=T.SCRIPT_DATA_DOUBLE_ESCAPED_DASH,this._emitChars("-");break}case b.LESS_THAN_SIGN:{this.state=T.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case b.NULL:{this._err(L.unexpectedNullCharacter),this._emitChars(ve);break}case b.EOF:{this._err(L.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedDash(t){switch(t){case b.HYPHEN_MINUS:{this.state=T.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH,this._emitChars("-");break}case b.LESS_THAN_SIGN:{this.state=T.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case b.NULL:{this._err(L.unexpectedNullCharacter),this.state=T.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitChars(ve);break}case b.EOF:{this._err(L.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=T.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedDashDash(t){switch(t){case b.HYPHEN_MINUS:{this._emitChars("-");break}case b.LESS_THAN_SIGN:{this.state=T.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case b.GREATER_THAN_SIGN:{this.state=T.SCRIPT_DATA,this._emitChars(">");break}case b.NULL:{this._err(L.unexpectedNullCharacter),this.state=T.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitChars(ve);break}case b.EOF:{this._err(L.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=T.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedLessThanSign(t){t===b.SOLIDUS?(this.state=T.SCRIPT_DATA_DOUBLE_ESCAPE_END,this._emitChars("/")):(this.state=T.SCRIPT_DATA_DOUBLE_ESCAPED,this._stateScriptDataDoubleEscaped(t))}_stateScriptDataDoubleEscapeEnd(t){if(this.preprocessor.startsWith(lt.SCRIPT,!1)&&dp(this.preprocessor.peek(lt.SCRIPT.length))){this._emitCodePoint(t);for(let n=0;n<lt.SCRIPT.length;n++)this._emitCodePoint(this._consume());this.state=T.SCRIPT_DATA_ESCAPED}else this._ensureHibernation()||(this.state=T.SCRIPT_DATA_DOUBLE_ESCAPED,this._stateScriptDataDoubleEscaped(t))}_stateBeforeAttributeName(t){switch(t){case b.SPACE:case b.LINE_FEED:case b.TABULATION:case b.FORM_FEED:break;case b.SOLIDUS:case b.GREATER_THAN_SIGN:case b.EOF:{this.state=T.AFTER_ATTRIBUTE_NAME,this._stateAfterAttributeName(t);break}case b.EQUALS_SIGN:{this._err(L.unexpectedEqualsSignBeforeAttributeName),this._createAttr("="),this.state=T.ATTRIBUTE_NAME;break}default:this._createAttr(""),this.state=T.ATTRIBUTE_NAME,this._stateAttributeName(t)}}_stateAttributeName(t){switch(t){case b.SPACE:case b.LINE_FEED:case b.TABULATION:case b.FORM_FEED:case b.SOLIDUS:case b.GREATER_THAN_SIGN:case b.EOF:{this._leaveAttrName(),this.state=T.AFTER_ATTRIBUTE_NAME,this._stateAfterAttributeName(t);break}case b.EQUALS_SIGN:{this._leaveAttrName(),this.state=T.BEFORE_ATTRIBUTE_VALUE;break}case b.QUOTATION_MARK:case b.APOSTROPHE:case b.LESS_THAN_SIGN:{this._err(L.unexpectedCharacterInAttributeName),this.currentAttr.name+=String.fromCodePoint(t);break}case b.NULL:{this._err(L.unexpectedNullCharacter),this.currentAttr.name+=ve;break}default:this.currentAttr.name+=String.fromCodePoint(La(t)?es(t):t)}}_stateAfterAttributeName(t){switch(t){case b.SPACE:case b.LINE_FEED:case b.TABULATION:case b.FORM_FEED:break;case b.SOLIDUS:{this.state=T.SELF_CLOSING_START_TAG;break}case b.EQUALS_SIGN:{this.state=T.BEFORE_ATTRIBUTE_VALUE;break}case b.GREATER_THAN_SIGN:{this.state=T.DATA,this.emitCurrentTagToken();break}case b.EOF:{this._err(L.eofInTag),this._emitEOFToken();break}default:this._createAttr(""),this.state=T.ATTRIBUTE_NAME,this._stateAttributeName(t)}}_stateBeforeAttributeValue(t){switch(t){case b.SPACE:case b.LINE_FEED:case b.TABULATION:case b.FORM_FEED:break;case b.QUOTATION_MARK:{this.state=T.ATTRIBUTE_VALUE_DOUBLE_QUOTED;break}case b.APOSTROPHE:{this.state=T.ATTRIBUTE_VALUE_SINGLE_QUOTED;break}case b.GREATER_THAN_SIGN:{this._err(L.missingAttributeValue),this.state=T.DATA,this.emitCurrentTagToken();break}default:this.state=T.ATTRIBUTE_VALUE_UNQUOTED,this._stateAttributeValueUnquoted(t)}}_stateAttributeValueDoubleQuoted(t){switch(t){case b.QUOTATION_MARK:{this.state=T.AFTER_ATTRIBUTE_VALUE_QUOTED;break}case b.AMPERSAND:{this._startCharacterReference();break}case b.NULL:{this._err(L.unexpectedNullCharacter),this.currentAttr.value+=ve;break}case b.EOF:{this._err(L.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAttributeValueSingleQuoted(t){switch(t){case b.APOSTROPHE:{this.state=T.AFTER_ATTRIBUTE_VALUE_QUOTED;break}case b.AMPERSAND:{this._startCharacterReference();break}case b.NULL:{this._err(L.unexpectedNullCharacter),this.currentAttr.value+=ve;break}case b.EOF:{this._err(L.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAttributeValueUnquoted(t){switch(t){case b.SPACE:case b.LINE_FEED:case b.TABULATION:case b.FORM_FEED:{this._leaveAttrValue(),this.state=T.BEFORE_ATTRIBUTE_NAME;break}case b.AMPERSAND:{this._startCharacterReference();break}case b.GREATER_THAN_SIGN:{this._leaveAttrValue(),this.state=T.DATA,this.emitCurrentTagToken();break}case b.NULL:{this._err(L.unexpectedNullCharacter),this.currentAttr.value+=ve;break}case b.QUOTATION_MARK:case b.APOSTROPHE:case b.LESS_THAN_SIGN:case b.EQUALS_SIGN:case b.GRAVE_ACCENT:{this._err(L.unexpectedCharacterInUnquotedAttributeValue),this.currentAttr.value+=String.fromCodePoint(t);break}case b.EOF:{this._err(L.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAfterAttributeValueQuoted(t){switch(t){case b.SPACE:case b.LINE_FEED:case b.TABULATION:case b.FORM_FEED:{this._leaveAttrValue(),this.state=T.BEFORE_ATTRIBUTE_NAME;break}case b.SOLIDUS:{this._leaveAttrValue(),this.state=T.SELF_CLOSING_START_TAG;break}case b.GREATER_THAN_SIGN:{this._leaveAttrValue(),this.state=T.DATA,this.emitCurrentTagToken();break}case b.EOF:{this._err(L.eofInTag),this._emitEOFToken();break}default:this._err(L.missingWhitespaceBetweenAttributes),this.state=T.BEFORE_ATTRIBUTE_NAME,this._stateBeforeAttributeName(t)}}_stateSelfClosingStartTag(t){switch(t){case b.GREATER_THAN_SIGN:{const n=this.currentToken;n.selfClosing=!0,this.state=T.DATA,this.emitCurrentTagToken();break}case b.EOF:{this._err(L.eofInTag),this._emitEOFToken();break}default:this._err(L.unexpectedSolidusInTag),this.state=T.BEFORE_ATTRIBUTE_NAME,this._stateBeforeAttributeName(t)}}_stateBogusComment(t){const n=this.currentToken;switch(t){case b.GREATER_THAN_SIGN:{this.state=T.DATA,this.emitCurrentComment(n);break}case b.EOF:{this.emitCurrentComment(n),this._emitEOFToken();break}case b.NULL:{this._err(L.unexpectedNullCharacter),n.data+=ve;break}default:n.data+=String.fromCodePoint(t)}}_stateMarkupDeclarationOpen(t){this._consumeSequenceIfMatch(lt.DASH_DASH,!0)?(this._createCommentToken(lt.DASH_DASH.length+1),this.state=T.COMMENT_START):this._consumeSequenceIfMatch(lt.DOCTYPE,!1)?(this.currentLocation=this.getCurrentLocation(lt.DOCTYPE.length+1),this.state=T.DOCTYPE):this._consumeSequenceIfMatch(lt.CDATA_START,!0)?this.inForeignNode?this.state=T.CDATA_SECTION:(this._err(L.cdataInHtmlContent),this._createCommentToken(lt.CDATA_START.length+1),this.currentToken.data="[CDATA[",this.state=T.BOGUS_COMMENT):this._ensureHibernation()||(this._err(L.incorrectlyOpenedComment),this._createCommentToken(2),this.state=T.BOGUS_COMMENT,this._stateBogusComment(t))}_stateCommentStart(t){switch(t){case b.HYPHEN_MINUS:{this.state=T.COMMENT_START_DASH;break}case b.GREATER_THAN_SIGN:{this._err(L.abruptClosingOfEmptyComment),this.state=T.DATA;const n=this.currentToken;this.emitCurrentComment(n);break}default:this.state=T.COMMENT,this._stateComment(t)}}_stateCommentStartDash(t){const n=this.currentToken;switch(t){case b.HYPHEN_MINUS:{this.state=T.COMMENT_END;break}case b.GREATER_THAN_SIGN:{this._err(L.abruptClosingOfEmptyComment),this.state=T.DATA,this.emitCurrentComment(n);break}case b.EOF:{this._err(L.eofInComment),this.emitCurrentComment(n),this._emitEOFToken();break}default:n.data+="-",this.state=T.COMMENT,this._stateComment(t)}}_stateComment(t){const n=this.currentToken;switch(t){case b.HYPHEN_MINUS:{this.state=T.COMMENT_END_DASH;break}case b.LESS_THAN_SIGN:{n.data+="<",this.state=T.COMMENT_LESS_THAN_SIGN;break}case b.NULL:{this._err(L.unexpectedNullCharacter),n.data+=ve;break}case b.EOF:{this._err(L.eofInComment),this.emitCurrentComment(n),this._emitEOFToken();break}default:n.data+=String.fromCodePoint(t)}}_stateCommentLessThanSign(t){const n=this.currentToken;switch(t){case b.EXCLAMATION_MARK:{n.data+="!",this.state=T.COMMENT_LESS_THAN_SIGN_BANG;break}case b.LESS_THAN_SIGN:{n.data+="<";break}default:this.state=T.COMMENT,this._stateComment(t)}}_stateCommentLessThanSignBang(t){t===b.HYPHEN_MINUS?this.state=T.COMMENT_LESS_THAN_SIGN_BANG_DASH:(this.state=T.COMMENT,this._stateComment(t))}_stateCommentLessThanSignBangDash(t){t===b.HYPHEN_MINUS?this.state=T.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:(this.state=T.COMMENT_END_DASH,this._stateCommentEndDash(t))}_stateCommentLessThanSignBangDashDash(t){t!==b.GREATER_THAN_SIGN&&t!==b.EOF&&this._err(L.nestedComment),this.state=T.COMMENT_END,this._stateCommentEnd(t)}_stateCommentEndDash(t){const n=this.currentToken;switch(t){case b.HYPHEN_MINUS:{this.state=T.COMMENT_END;break}case b.EOF:{this._err(L.eofInComment),this.emitCurrentComment(n),this._emitEOFToken();break}default:n.data+="-",this.state=T.COMMENT,this._stateComment(t)}}_stateCommentEnd(t){const n=this.currentToken;switch(t){case b.GREATER_THAN_SIGN:{this.state=T.DATA,this.emitCurrentComment(n);break}case b.EXCLAMATION_MARK:{this.state=T.COMMENT_END_BANG;break}case b.HYPHEN_MINUS:{n.data+="-";break}case b.EOF:{this._err(L.eofInComment),this.emitCurrentComment(n),this._emitEOFToken();break}default:n.data+="--",this.state=T.COMMENT,this._stateComment(t)}}_stateCommentEndBang(t){const n=this.currentToken;switch(t){case b.HYPHEN_MINUS:{n.data+="--!",this.state=T.COMMENT_END_DASH;break}case b.GREATER_THAN_SIGN:{this._err(L.incorrectlyClosedComment),this.state=T.DATA,this.emitCurrentComment(n);break}case b.EOF:{this._err(L.eofInComment),this.emitCurrentComment(n),this._emitEOFToken();break}default:n.data+="--!",this.state=T.COMMENT,this._stateComment(t)}}_stateDoctype(t){switch(t){case b.SPACE:case b.LINE_FEED:case b.TABULATION:case b.FORM_FEED:{this.state=T.BEFORE_DOCTYPE_NAME;break}case b.GREATER_THAN_SIGN:{this.state=T.BEFORE_DOCTYPE_NAME,this._stateBeforeDoctypeName(t);break}case b.EOF:{this._err(L.eofInDoctype),this._createDoctypeToken(null);const n=this.currentToken;n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(L.missingWhitespaceBeforeDoctypeName),this.state=T.BEFORE_DOCTYPE_NAME,this._stateBeforeDoctypeName(t)}}_stateBeforeDoctypeName(t){if(La(t))this._createDoctypeToken(String.fromCharCode(es(t))),this.state=T.DOCTYPE_NAME;else switch(t){case b.SPACE:case b.LINE_FEED:case b.TABULATION:case b.FORM_FEED:break;case b.NULL:{this._err(L.unexpectedNullCharacter),this._createDoctypeToken(ve),this.state=T.DOCTYPE_NAME;break}case b.GREATER_THAN_SIGN:{this._err(L.missingDoctypeName),this._createDoctypeToken(null);const n=this.currentToken;n.forceQuirks=!0,this.emitCurrentDoctype(n),this.state=T.DATA;break}case b.EOF:{this._err(L.eofInDoctype),this._createDoctypeToken(null);const n=this.currentToken;n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._createDoctypeToken(String.fromCodePoint(t)),this.state=T.DOCTYPE_NAME}}_stateDoctypeName(t){const n=this.currentToken;switch(t){case b.SPACE:case b.LINE_FEED:case b.TABULATION:case b.FORM_FEED:{this.state=T.AFTER_DOCTYPE_NAME;break}case b.GREATER_THAN_SIGN:{this.state=T.DATA,this.emitCurrentDoctype(n);break}case b.NULL:{this._err(L.unexpectedNullCharacter),n.name+=ve;break}case b.EOF:{this._err(L.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:n.name+=String.fromCodePoint(La(t)?es(t):t)}}_stateAfterDoctypeName(t){const n=this.currentToken;switch(t){case b.SPACE:case b.LINE_FEED:case b.TABULATION:case b.FORM_FEED:break;case b.GREATER_THAN_SIGN:{this.state=T.DATA,this.emitCurrentDoctype(n);break}case b.EOF:{this._err(L.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._consumeSequenceIfMatch(lt.PUBLIC,!1)?this.state=T.AFTER_DOCTYPE_PUBLIC_KEYWORD:this._consumeSequenceIfMatch(lt.SYSTEM,!1)?this.state=T.AFTER_DOCTYPE_SYSTEM_KEYWORD:this._ensureHibernation()||(this._err(L.invalidCharacterSequenceAfterDoctypeName),n.forceQuirks=!0,this.state=T.BOGUS_DOCTYPE,this._stateBogusDoctype(t))}}_stateAfterDoctypePublicKeyword(t){const n=this.currentToken;switch(t){case b.SPACE:case b.LINE_FEED:case b.TABULATION:case b.FORM_FEED:{this.state=T.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;break}case b.QUOTATION_MARK:{this._err(L.missingWhitespaceAfterDoctypePublicKeyword),n.publicId="",this.state=T.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;break}case b.APOSTROPHE:{this._err(L.missingWhitespaceAfterDoctypePublicKeyword),n.publicId="",this.state=T.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;break}case b.GREATER_THAN_SIGN:{this._err(L.missingDoctypePublicIdentifier),n.forceQuirks=!0,this.state=T.DATA,this.emitCurrentDoctype(n);break}case b.EOF:{this._err(L.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(L.missingQuoteBeforeDoctypePublicIdentifier),n.forceQuirks=!0,this.state=T.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBeforeDoctypePublicIdentifier(t){const n=this.currentToken;switch(t){case b.SPACE:case b.LINE_FEED:case b.TABULATION:case b.FORM_FEED:break;case b.QUOTATION_MARK:{n.publicId="",this.state=T.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;break}case b.APOSTROPHE:{n.publicId="",this.state=T.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;break}case b.GREATER_THAN_SIGN:{this._err(L.missingDoctypePublicIdentifier),n.forceQuirks=!0,this.state=T.DATA,this.emitCurrentDoctype(n);break}case b.EOF:{this._err(L.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(L.missingQuoteBeforeDoctypePublicIdentifier),n.forceQuirks=!0,this.state=T.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateDoctypePublicIdentifierDoubleQuoted(t){const n=this.currentToken;switch(t){case b.QUOTATION_MARK:{this.state=T.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;break}case b.NULL:{this._err(L.unexpectedNullCharacter),n.publicId+=ve;break}case b.GREATER_THAN_SIGN:{this._err(L.abruptDoctypePublicIdentifier),n.forceQuirks=!0,this.emitCurrentDoctype(n),this.state=T.DATA;break}case b.EOF:{this._err(L.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:n.publicId+=String.fromCodePoint(t)}}_stateDoctypePublicIdentifierSingleQuoted(t){const n=this.currentToken;switch(t){case b.APOSTROPHE:{this.state=T.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;break}case b.NULL:{this._err(L.unexpectedNullCharacter),n.publicId+=ve;break}case b.GREATER_THAN_SIGN:{this._err(L.abruptDoctypePublicIdentifier),n.forceQuirks=!0,this.emitCurrentDoctype(n),this.state=T.DATA;break}case b.EOF:{this._err(L.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:n.publicId+=String.fromCodePoint(t)}}_stateAfterDoctypePublicIdentifier(t){const n=this.currentToken;switch(t){case b.SPACE:case b.LINE_FEED:case b.TABULATION:case b.FORM_FEED:{this.state=T.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;break}case b.GREATER_THAN_SIGN:{this.state=T.DATA,this.emitCurrentDoctype(n);break}case b.QUOTATION_MARK:{this._err(L.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),n.systemId="",this.state=T.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case b.APOSTROPHE:{this._err(L.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),n.systemId="",this.state=T.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case b.EOF:{this._err(L.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(L.missingQuoteBeforeDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=T.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBetweenDoctypePublicAndSystemIdentifiers(t){const n=this.currentToken;switch(t){case b.SPACE:case b.LINE_FEED:case b.TABULATION:case b.FORM_FEED:break;case b.GREATER_THAN_SIGN:{this.emitCurrentDoctype(n),this.state=T.DATA;break}case b.QUOTATION_MARK:{n.systemId="",this.state=T.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case b.APOSTROPHE:{n.systemId="",this.state=T.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case b.EOF:{this._err(L.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(L.missingQuoteBeforeDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=T.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateAfterDoctypeSystemKeyword(t){const n=this.currentToken;switch(t){case b.SPACE:case b.LINE_FEED:case b.TABULATION:case b.FORM_FEED:{this.state=T.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;break}case b.QUOTATION_MARK:{this._err(L.missingWhitespaceAfterDoctypeSystemKeyword),n.systemId="",this.state=T.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case b.APOSTROPHE:{this._err(L.missingWhitespaceAfterDoctypeSystemKeyword),n.systemId="",this.state=T.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case b.GREATER_THAN_SIGN:{this._err(L.missingDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=T.DATA,this.emitCurrentDoctype(n);break}case b.EOF:{this._err(L.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(L.missingQuoteBeforeDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=T.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBeforeDoctypeSystemIdentifier(t){const n=this.currentToken;switch(t){case b.SPACE:case b.LINE_FEED:case b.TABULATION:case b.FORM_FEED:break;case b.QUOTATION_MARK:{n.systemId="",this.state=T.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case b.APOSTROPHE:{n.systemId="",this.state=T.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case b.GREATER_THAN_SIGN:{this._err(L.missingDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=T.DATA,this.emitCurrentDoctype(n);break}case b.EOF:{this._err(L.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(L.missingQuoteBeforeDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=T.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateDoctypeSystemIdentifierDoubleQuoted(t){const n=this.currentToken;switch(t){case b.QUOTATION_MARK:{this.state=T.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;break}case b.NULL:{this._err(L.unexpectedNullCharacter),n.systemId+=ve;break}case b.GREATER_THAN_SIGN:{this._err(L.abruptDoctypeSystemIdentifier),n.forceQuirks=!0,this.emitCurrentDoctype(n),this.state=T.DATA;break}case b.EOF:{this._err(L.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:n.systemId+=String.fromCodePoint(t)}}_stateDoctypeSystemIdentifierSingleQuoted(t){const n=this.currentToken;switch(t){case b.APOSTROPHE:{this.state=T.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;break}case b.NULL:{this._err(L.unexpectedNullCharacter),n.systemId+=ve;break}case b.GREATER_THAN_SIGN:{this._err(L.abruptDoctypeSystemIdentifier),n.forceQuirks=!0,this.emitCurrentDoctype(n),this.state=T.DATA;break}case b.EOF:{this._err(L.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:n.systemId+=String.fromCodePoint(t)}}_stateAfterDoctypeSystemIdentifier(t){const n=this.currentToken;switch(t){case b.SPACE:case b.LINE_FEED:case b.TABULATION:case b.FORM_FEED:break;case b.GREATER_THAN_SIGN:{this.emitCurrentDoctype(n),this.state=T.DATA;break}case b.EOF:{this._err(L.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(L.unexpectedCharacterAfterDoctypeSystemIdentifier),this.state=T.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBogusDoctype(t){const n=this.currentToken;switch(t){case b.GREATER_THAN_SIGN:{this.emitCurrentDoctype(n),this.state=T.DATA;break}case b.NULL:{this._err(L.unexpectedNullCharacter);break}case b.EOF:{this.emitCurrentDoctype(n),this._emitEOFToken();break}}}_stateCdataSection(t){switch(t){case b.RIGHT_SQUARE_BRACKET:{this.state=T.CDATA_SECTION_BRACKET;break}case b.EOF:{this._err(L.eofInCdata),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateCdataSectionBracket(t){t===b.RIGHT_SQUARE_BRACKET?this.state=T.CDATA_SECTION_END:(this._emitChars("]"),this.state=T.CDATA_SECTION,this._stateCdataSection(t))}_stateCdataSectionEnd(t){switch(t){case b.GREATER_THAN_SIGN:{this.state=T.DATA;break}case b.RIGHT_SQUARE_BRACKET:{this._emitChars("]");break}default:this._emitChars("]]"),this.state=T.CDATA_SECTION,this._stateCdataSection(t)}}_stateCharacterReference(){let t=this.entityDecoder.write(this.preprocessor.html,this.preprocessor.pos);if(t<0)if(this.preprocessor.lastChunkWritten)t=this.entityDecoder.end();else{this.active=!1,this.preprocessor.pos=this.preprocessor.html.length-1,this.consumedAfterSnapshot=0,this.preprocessor.endOfChunkHit=!0;return}t===0?(this.preprocessor.pos=this.entityStartPos,this._flushCodePointConsumedAsCharacterReference(b.AMPERSAND),this.state=!this._isCharacterReferenceInAttribute()&&cp(this.preprocessor.peek(1))?T.AMBIGUOUS_AMPERSAND:this.returnState):this.state=this.returnState}_stateAmbiguousAmpersand(t){cp(t)?this._flushCodePointConsumedAsCharacterReference(t):(t===b.SEMICOLON&&this._err(L.unknownNamedCharacterReference),this.state=this.returnState,this._callState(t))}}const g1=new Set([c.DD,c.DT,c.LI,c.OPTGROUP,c.OPTION,c.P,c.RB,c.RP,c.RT,c.RTC]),hp=new Set([...g1,c.CAPTION,c.COLGROUP,c.TBODY,c.TD,c.TFOOT,c.TH,c.THEAD,c.TR]),$s=new Set([c.APPLET,c.CAPTION,c.HTML,c.MARQUEE,c.OBJECT,c.TABLE,c.TD,c.TEMPLATE,c.TH]),AC=new Set([...$s,c.OL,c.UL]),IC=new Set([...$s,c.BUTTON]),fp=new Set([c.ANNOTATION_XML,c.MI,c.MN,c.MO,c.MS,c.MTEXT]),pp=new Set([c.DESC,c.FOREIGN_OBJECT,c.TITLE]),PC=new Set([c.TR,c.TEMPLATE,c.HTML]),LC=new Set([c.TBODY,c.TFOOT,c.THEAD,c.TEMPLATE,c.HTML]),RC=new Set([c.TABLE,c.TEMPLATE,c.HTML]),DC=new Set([c.TD,c.TH]);class OC{get currentTmplContentOrNode(){return this._isInTemplate()?this.treeAdapter.getTemplateContent(this.current):this.current}constructor(t,n,r){this.treeAdapter=n,this.handler=r,this.items=[],this.tagIDs=[],this.stackTop=-1,this.tmplCount=0,this.currentTagId=c.UNKNOWN,this.current=t}_indexOf(t){return this.items.lastIndexOf(t,this.stackTop)}_isInTemplate(){return this.currentTagId===c.TEMPLATE&&this.treeAdapter.getNamespaceURI(this.current)===O.HTML}_updateCurrentElement(){this.current=this.items[this.stackTop],this.currentTagId=this.tagIDs[this.stackTop]}push(t,n){this.stackTop++,this.items[this.stackTop]=t,this.current=t,this.tagIDs[this.stackTop]=n,this.currentTagId=n,this._isInTemplate()&&this.tmplCount++,this.handler.onItemPush(t,n,!0)}pop(){const t=this.current;this.tmplCount>0&&this._isInTemplate()&&this.tmplCount--,this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(t,!0)}replace(t,n){const r=this._indexOf(t);this.items[r]=n,r===this.stackTop&&(this.current=n)}insertAfter(t,n,r){const a=this._indexOf(t)+1;this.items.splice(a,0,n),this.tagIDs.splice(a,0,r),this.stackTop++,a===this.stackTop&&this._updateCurrentElement(),this.current&&this.currentTagId!==void 0&&this.handler.onItemPush(this.current,this.currentTagId,a===this.stackTop)}popUntilTagNamePopped(t){let n=this.stackTop+1;do n=this.tagIDs.lastIndexOf(t,n-1);while(n>0&&this.treeAdapter.getNamespaceURI(this.items[n])!==O.HTML);this.shortenToLength(Math.max(n,0))}shortenToLength(t){for(;this.stackTop>=t;){const n=this.current;this.tmplCount>0&&this._isInTemplate()&&(this.tmplCount-=1),this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(n,this.stackTop<t)}}popUntilElementPopped(t){const n=this._indexOf(t);this.shortenToLength(Math.max(n,0))}popUntilPopped(t,n){const r=this._indexOfTagNames(t,n);this.shortenToLength(Math.max(r,0))}popUntilNumberedHeaderPopped(){this.popUntilPopped(tc,O.HTML)}popUntilTableCellPopped(){this.popUntilPopped(DC,O.HTML)}popAllUpToHtmlElement(){this.tmplCount=0,this.shortenToLength(1)}_indexOfTagNames(t,n){for(let r=this.stackTop;r>=0;r--)if(t.has(this.tagIDs[r])&&this.treeAdapter.getNamespaceURI(this.items[r])===n)return r;return-1}clearBackTo(t,n){const r=this._indexOfTagNames(t,n);this.shortenToLength(r+1)}clearBackToTableContext(){this.clearBackTo(RC,O.HTML)}clearBackToTableBodyContext(){this.clearBackTo(LC,O.HTML)}clearBackToTableRowContext(){this.clearBackTo(PC,O.HTML)}remove(t){const n=this._indexOf(t);n>=0&&(n===this.stackTop?this.pop():(this.items.splice(n,1),this.tagIDs.splice(n,1),this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(t,!1)))}tryPeekProperlyNestedBodyElement(){return this.stackTop>=1&&this.tagIDs[1]===c.BODY?this.items[1]:null}contains(t){return this._indexOf(t)>-1}getCommonAncestor(t){const n=this._indexOf(t)-1;return n>=0?this.items[n]:null}isRootHtmlElementCurrent(){return this.stackTop===0&&this.tagIDs[0]===c.HTML}hasInDynamicScope(t,n){for(let r=this.stackTop;r>=0;r--){const a=this.tagIDs[r];switch(this.treeAdapter.getNamespaceURI(this.items[r])){case O.HTML:{if(a===t)return!0;if(n.has(a))return!1;break}case O.SVG:{if(pp.has(a))return!1;break}case O.MATHML:{if(fp.has(a))return!1;break}}}return!0}hasInScope(t){return this.hasInDynamicScope(t,$s)}hasInListItemScope(t){return this.hasInDynamicScope(t,AC)}hasInButtonScope(t){return this.hasInDynamicScope(t,IC)}hasNumberedHeaderInScope(){for(let t=this.stackTop;t>=0;t--){const n=this.tagIDs[t];switch(this.treeAdapter.getNamespaceURI(this.items[t])){case O.HTML:{if(tc.has(n))return!0;if($s.has(n))return!1;break}case O.SVG:{if(pp.has(n))return!1;break}case O.MATHML:{if(fp.has(n))return!1;break}}}return!0}hasInTableScope(t){for(let n=this.stackTop;n>=0;n--)if(this.treeAdapter.getNamespaceURI(this.items[n])===O.HTML)switch(this.tagIDs[n]){case t:return!0;case c.TABLE:case c.HTML:return!1}return!0}hasTableBodyContextInTableScope(){for(let t=this.stackTop;t>=0;t--)if(this.treeAdapter.getNamespaceURI(this.items[t])===O.HTML)switch(this.tagIDs[t]){case c.TBODY:case c.THEAD:case c.TFOOT:return!0;case c.TABLE:case c.HTML:return!1}return!0}hasInSelectScope(t){for(let n=this.stackTop;n>=0;n--)if(this.treeAdapter.getNamespaceURI(this.items[n])===O.HTML)switch(this.tagIDs[n]){case t:return!0;case c.OPTION:case c.OPTGROUP:break;default:return!1}return!0}generateImpliedEndTags(){for(;this.currentTagId!==void 0&&g1.has(this.currentTagId);)this.pop()}generateImpliedEndTagsThoroughly(){for(;this.currentTagId!==void 0&&hp.has(this.currentTagId);)this.pop()}generateImpliedEndTagsWithExclusion(t){for(;this.currentTagId!==void 0&&this.currentTagId!==t&&hp.has(this.currentTagId);)this.pop()}}const Il=3;var en;(function(e){e[e.Marker=0]="Marker",e[e.Element=1]="Element"})(en||(en={}));const mp={type:en.Marker};class MC{constructor(t){this.treeAdapter=t,this.entries=[],this.bookmark=null}_getNoahArkConditionCandidates(t,n){const r=[],a=n.length,i=this.treeAdapter.getTagName(t),o=this.treeAdapter.getNamespaceURI(t);for(let l=0;l<this.entries.length;l++){const u=this.entries[l];if(u.type===en.Marker)break;const{element:d}=u;if(this.treeAdapter.getTagName(d)===i&&this.treeAdapter.getNamespaceURI(d)===o){const f=this.treeAdapter.getAttrList(d);f.length===a&&r.push({idx:l,attrs:f})}}return r}_ensureNoahArkCondition(t){if(this.entries.length<Il)return;const n=this.treeAdapter.getAttrList(t),r=this._getNoahArkConditionCandidates(t,n);if(r.length<Il)return;const a=new Map(n.map(o=>[o.name,o.value]));let i=0;for(let o=0;o<r.length;o++){const l=r[o];l.attrs.every(u=>a.get(u.name)===u.value)&&(i+=1,i>=Il&&this.entries.splice(l.idx,1))}}insertMarker(){this.entries.unshift(mp)}pushElement(t,n){this._ensureNoahArkCondition(t),this.entries.unshift({type:en.Element,element:t,token:n})}insertElementAfterBookmark(t,n){const r=this.entries.indexOf(this.bookmark);this.entries.splice(r,0,{type:en.Element,element:t,token:n})}removeEntry(t){const n=this.entries.indexOf(t);n!==-1&&this.entries.splice(n,1)}clearToLastMarker(){const t=this.entries.indexOf(mp);t===-1?this.entries.length=0:this.entries.splice(0,t+1)}getElementEntryInScopeWithTagName(t){const n=this.entries.find(r=>r.type===en.Marker||this.treeAdapter.getTagName(r.element)===t);return n&&n.type===en.Element?n:null}getElementEntry(t){return this.entries.find(n=>n.type===en.Element&&n.element===t)}}const kn={createDocument(){return{nodeName:"#document",mode:Lt.NO_QUIRKS,childNodes:[]}},createDocumentFragment(){return{nodeName:"#document-fragment",childNodes:[]}},createElement(e,t,n){return{nodeName:e,tagName:e,attrs:n,namespaceURI:t,childNodes:[],parentNode:null}},createCommentNode(e){return{nodeName:"#comment",data:e,parentNode:null}},createTextNode(e){return{nodeName:"#text",value:e,parentNode:null}},appendChild(e,t){e.childNodes.push(t),t.parentNode=e},insertBefore(e,t,n){const r=e.childNodes.indexOf(n);e.childNodes.splice(r,0,t),t.parentNode=e},setTemplateContent(e,t){e.content=t},getTemplateContent(e){return e.content},setDocumentType(e,t,n,r){const a=e.childNodes.find(i=>i.nodeName==="#documentType");if(a)a.name=t,a.publicId=n,a.systemId=r;else{const i={nodeName:"#documentType",name:t,publicId:n,systemId:r,parentNode:null};kn.appendChild(e,i)}},setDocumentMode(e,t){e.mode=t},getDocumentMode(e){return e.mode},detachNode(e){if(e.parentNode){const t=e.parentNode.childNodes.indexOf(e);e.parentNode.childNodes.splice(t,1),e.parentNode=null}},insertText(e,t){if(e.childNodes.length>0){const n=e.childNodes[e.childNodes.length-1];if(kn.isTextNode(n)){n.value+=t;return}}kn.appendChild(e,kn.createTextNode(t))},insertTextBefore(e,t,n){const r=e.childNodes[e.childNodes.indexOf(n)-1];r&&kn.isTextNode(r)?r.value+=t:kn.insertBefore(e,kn.createTextNode(t),n)},adoptAttributes(e,t){const n=new Set(e.attrs.map(r=>r.name));for(let r=0;r<t.length;r++)n.has(t[r].name)||e.attrs.push(t[r])},getFirstChild(e){return e.childNodes[0]},getChildNodes(e){return e.childNodes},getParentNode(e){return e.parentNode},getAttrList(e){return e.attrs},getTagName(e){return e.tagName},getNamespaceURI(e){return e.namespaceURI},getTextNodeContent(e){return e.value},getCommentNodeContent(e){return e.data},getDocumentTypeNodeName(e){return e.name},getDocumentTypeNodePublicId(e){return e.publicId},getDocumentTypeNodeSystemId(e){return e.systemId},isTextNode(e){return e.nodeName==="#text"},isCommentNode(e){return e.nodeName==="#comment"},isDocumentTypeNode(e){return e.nodeName==="#documentType"},isElementNode(e){return Object.prototype.hasOwnProperty.call(e,"tagName")},setNodeSourceCodeLocation(e,t){e.sourceCodeLocation=t},getNodeSourceCodeLocation(e){return e.sourceCodeLocation},updateNodeSourceCodeLocation(e,t){e.sourceCodeLocation={...e.sourceCodeLocation,...t}}},y1="html",jC="about:legacy-compat",FC="http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd",x1=["+//silmaril//dtd html pro v0r11 19970101//","-//as//dtd html 3.0 aswedit + extensions//","-//advasoft ltd//dtd html 3.0 aswedit + extensions//","-//ietf//dtd html 2.0 level 1//","-//ietf//dtd html 2.0 level 2//","-//ietf//dtd html 2.0 strict level 1//","-//ietf//dtd html 2.0 strict level 2//","-//ietf//dtd html 2.0 strict//","-//ietf//dtd html 2.0//","-//ietf//dtd html 2.1e//","-//ietf//dtd html 3.0//","-//ietf//dtd html 3.2 final//","-//ietf//dtd html 3.2//","-//ietf//dtd html 3//","-//ietf//dtd html level 0//","-//ietf//dtd html level 1//","-//ietf//dtd html level 2//","-//ietf//dtd html level 3//","-//ietf//dtd html strict level 0//","-//ietf//dtd html strict level 1//","-//ietf//dtd html strict level 2//","-//ietf//dtd html strict level 3//","-//ietf//dtd html strict//","-//ietf//dtd html//","-//metrius//dtd metrius presentational//","-//microsoft//dtd internet explorer 2.0 html strict//","-//microsoft//dtd internet explorer 2.0 html//","-//microsoft//dtd internet explorer 2.0 tables//","-//microsoft//dtd internet explorer 3.0 html strict//","-//microsoft//dtd internet explorer 3.0 html//","-//microsoft//dtd internet explorer 3.0 tables//","-//netscape comm. corp.//dtd html//","-//netscape comm. corp.//dtd strict html//","-//o'reilly and associates//dtd html 2.0//","-//o'reilly and associates//dtd html extended 1.0//","-//o'reilly and associates//dtd html extended relaxed 1.0//","-//sq//dtd html 2.0 hotmetal + extensions//","-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//","-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//","-//spyglass//dtd html 2.0 extended//","-//sun microsystems corp.//dtd hotjava html//","-//sun microsystems corp.//dtd hotjava strict html//","-//w3c//dtd html 3 1995-03-24//","-//w3c//dtd html 3.2 draft//","-//w3c//dtd html 3.2 final//","-//w3c//dtd html 3.2//","-//w3c//dtd html 3.2s draft//","-//w3c//dtd html 4.0 frameset//","-//w3c//dtd html 4.0 transitional//","-//w3c//dtd html experimental 19960712//","-//w3c//dtd html experimental 970421//","-//w3c//dtd w3 html//","-//w3o//dtd w3 html 3.0//","-//webtechs//dtd mozilla html 2.0//","-//webtechs//dtd mozilla html//"],BC=[...x1,"-//w3c//dtd html 4.01 frameset//","-//w3c//dtd html 4.01 transitional//"],HC=new Set(["-//w3o//dtd w3 html strict 3.0//en//","-/w3c/dtd html 4.0 transitional/en","html"]),b1=["-//w3c//dtd xhtml 1.0 frameset//","-//w3c//dtd xhtml 1.0 transitional//"],UC=[...b1,"-//w3c//dtd html 4.01 frameset//","-//w3c//dtd html 4.01 transitional//"];function gp(e,t){return t.some(n=>e.startsWith(n))}function zC(e){return e.name===y1&&e.publicId===null&&(e.systemId===null||e.systemId===jC)}function qC(e){if(e.name!==y1)return Lt.QUIRKS;const{systemId:t}=e;if(t&&t.toLowerCase()===FC)return Lt.QUIRKS;let{publicId:n}=e;if(n!==null){if(n=n.toLowerCase(),HC.has(n))return Lt.QUIRKS;let r=t===null?BC:x1;if(gp(n,r))return Lt.QUIRKS;if(r=t===null?b1:UC,gp(n,r))return Lt.LIMITED_QUIRKS}return Lt.NO_QUIRKS}const yp={TEXT_HTML:"text/html",APPLICATION_XML:"application/xhtml+xml"},YC="definitionurl",WC="definitionURL",GC=new Map(["attributeName","attributeType","baseFrequency","baseProfile","calcMode","clipPathUnits","diffuseConstant","edgeMode","filterUnits","glyphRef","gradientTransform","gradientUnits","kernelMatrix","kernelUnitLength","keyPoints","keySplines","keyTimes","lengthAdjust","limitingConeAngle","markerHeight","markerUnits","markerWidth","maskContentUnits","maskUnits","numOctaves","pathLength","patternContentUnits","patternTransform","patternUnits","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","refX","refY","repeatCount","repeatDur","requiredExtensions","requiredFeatures","specularConstant","specularExponent","spreadMethod","startOffset","stdDeviation","stitchTiles","surfaceScale","systemLanguage","tableValues","targetX","targetY","textLength","viewBox","viewTarget","xChannelSelector","yChannelSelector","zoomAndPan"].map(e=>[e.toLowerCase(),e])),VC=new Map([["xlink:actuate",{prefix:"xlink",name:"actuate",namespace:O.XLINK}],["xlink:arcrole",{prefix:"xlink",name:"arcrole",namespace:O.XLINK}],["xlink:href",{prefix:"xlink",name:"href",namespace:O.XLINK}],["xlink:role",{prefix:"xlink",name:"role",namespace:O.XLINK}],["xlink:show",{prefix:"xlink",name:"show",namespace:O.XLINK}],["xlink:title",{prefix:"xlink",name:"title",namespace:O.XLINK}],["xlink:type",{prefix:"xlink",name:"type",namespace:O.XLINK}],["xml:lang",{prefix:"xml",name:"lang",namespace:O.XML}],["xml:space",{prefix:"xml",name:"space",namespace:O.XML}],["xmlns",{prefix:"",name:"xmlns",namespace:O.XMLNS}],["xmlns:xlink",{prefix:"xmlns",name:"xlink",namespace:O.XMLNS}]]),$C=new Map(["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","textPath"].map(e=>[e.toLowerCase(),e])),QC=new Set([c.B,c.BIG,c.BLOCKQUOTE,c.BODY,c.BR,c.CENTER,c.CODE,c.DD,c.DIV,c.DL,c.DT,c.EM,c.EMBED,c.H1,c.H2,c.H3,c.H4,c.H5,c.H6,c.HEAD,c.HR,c.I,c.IMG,c.LI,c.LISTING,c.MENU,c.META,c.NOBR,c.OL,c.P,c.PRE,c.RUBY,c.S,c.SMALL,c.SPAN,c.STRONG,c.STRIKE,c.SUB,c.SUP,c.TABLE,c.TT,c.U,c.UL,c.VAR]);function KC(e){const t=e.tagID;return t===c.FONT&&e.attrs.some(({name:r})=>r===sr.COLOR||r===sr.SIZE||r===sr.FACE)||QC.has(t)}function E1(e){for(let t=0;t<e.attrs.length;t++)if(e.attrs[t].name===YC){e.attrs[t].name=WC;break}}function T1(e){for(let t=0;t<e.attrs.length;t++){const n=GC.get(e.attrs[t].name);n!=null&&(e.attrs[t].name=n)}}function Cd(e){for(let t=0;t<e.attrs.length;t++){const n=VC.get(e.attrs[t].name);n&&(e.attrs[t].prefix=n.prefix,e.attrs[t].name=n.name,e.attrs[t].namespace=n.namespace)}}function XC(e){const t=$C.get(e.tagName);t!=null&&(e.tagName=t,e.tagID=ha(e.tagName))}function JC(e,t){return t===O.MATHML&&(e===c.MI||e===c.MO||e===c.MN||e===c.MS||e===c.MTEXT)}function ZC(e,t,n){if(t===O.MATHML&&e===c.ANNOTATION_XML){for(let r=0;r<n.length;r++)if(n[r].name===sr.ENCODING){const a=n[r].value.toLowerCase();return a===yp.TEXT_HTML||a===yp.APPLICATION_XML}}return t===O.SVG&&(e===c.FOREIGN_OBJECT||e===c.DESC||e===c.TITLE)}function eN(e,t,n,r){return(!r||r===O.HTML)&&ZC(e,t,n)||(!r||r===O.MATHML)&&JC(e,t)}const tN="hidden",nN=8,rN=3;var _;(function(e){e[e.INITIAL=0]="INITIAL",e[e.BEFORE_HTML=1]="BEFORE_HTML",e[e.BEFORE_HEAD=2]="BEFORE_HEAD",e[e.IN_HEAD=3]="IN_HEAD",e[e.IN_HEAD_NO_SCRIPT=4]="IN_HEAD_NO_SCRIPT",e[e.AFTER_HEAD=5]="AFTER_HEAD",e[e.IN_BODY=6]="IN_BODY",e[e.TEXT=7]="TEXT",e[e.IN_TABLE=8]="IN_TABLE",e[e.IN_TABLE_TEXT=9]="IN_TABLE_TEXT",e[e.IN_CAPTION=10]="IN_CAPTION",e[e.IN_COLUMN_GROUP=11]="IN_COLUMN_GROUP",e[e.IN_TABLE_BODY=12]="IN_TABLE_BODY",e[e.IN_ROW=13]="IN_ROW",e[e.IN_CELL=14]="IN_CELL",e[e.IN_SELECT=15]="IN_SELECT",e[e.IN_SELECT_IN_TABLE=16]="IN_SELECT_IN_TABLE",e[e.IN_TEMPLATE=17]="IN_TEMPLATE",e[e.AFTER_BODY=18]="AFTER_BODY",e[e.IN_FRAMESET=19]="IN_FRAMESET",e[e.AFTER_FRAMESET=20]="AFTER_FRAMESET",e[e.AFTER_AFTER_BODY=21]="AFTER_AFTER_BODY",e[e.AFTER_AFTER_FRAMESET=22]="AFTER_AFTER_FRAMESET"})(_||(_={}));const aN={startLine:-1,startCol:-1,startOffset:-1,endLine:-1,endCol:-1,endOffset:-1},v1=new Set([c.TABLE,c.TBODY,c.TFOOT,c.THEAD,c.TR]),xp={scriptingEnabled:!0,sourceCodeLocationInfo:!1,treeAdapter:kn,onParseError:null};class bp{constructor(t,n,r=null,a=null){this.fragmentContext=r,this.scriptHandler=a,this.currentToken=null,this.stopped=!1,this.insertionMode=_.INITIAL,this.originalInsertionMode=_.INITIAL,this.headElement=null,this.formElement=null,this.currentNotInHTML=!1,this.tmplInsertionModeStack=[],this.pendingCharacterTokens=[],this.hasNonWhitespacePendingCharacterToken=!1,this.framesetOk=!0,this.skipNextNewLine=!1,this.fosterParentingEnabled=!1,this.options={...xp,...t},this.treeAdapter=this.options.treeAdapter,this.onParseError=this.options.onParseError,this.onParseError&&(this.options.sourceCodeLocationInfo=!0),this.document=n??this.treeAdapter.createDocument(),this.tokenizer=new wC(this.options,this),this.activeFormattingElements=new MC(this.treeAdapter),this.fragmentContextID=r?ha(this.treeAdapter.getTagName(r)):c.UNKNOWN,this._setContextModes(r??this.document,this.fragmentContextID),this.openElements=new OC(this.document,this.treeAdapter,this)}static parse(t,n){const r=new this(n);return r.tokenizer.write(t,!0),r.document}static getFragmentParser(t,n){const r={...xp,...n};t??(t=r.treeAdapter.createElement(I.TEMPLATE,O.HTML,[]));const a=r.treeAdapter.createElement("documentmock",O.HTML,[]),i=new this(r,a,t);return i.fragmentContextID===c.TEMPLATE&&i.tmplInsertionModeStack.unshift(_.IN_TEMPLATE),i._initTokenizerForFragmentParsing(),i._insertFakeRootElement(),i._resetInsertionMode(),i._findFormInFragmentContext(),i}getFragment(){const t=this.treeAdapter.getFirstChild(this.document),n=this.treeAdapter.createDocumentFragment();return this._adoptNodes(t,n),n}_err(t,n,r){var a;if(!this.onParseError)return;const i=(a=t.location)!==null&&a!==void 0?a:aN,o={code:n,startLine:i.startLine,startCol:i.startCol,startOffset:i.startOffset,endLine:r?i.startLine:i.endLine,endCol:r?i.startCol:i.endCol,endOffset:r?i.startOffset:i.endOffset};this.onParseError(o)}onItemPush(t,n,r){var a,i;(i=(a=this.treeAdapter).onItemPush)===null||i===void 0||i.call(a,t),r&&this.openElements.stackTop>0&&this._setContextModes(t,n)}onItemPop(t,n){var r,a;if(this.options.sourceCodeLocationInfo&&this._setEndLocation(t,this.currentToken),(a=(r=this.treeAdapter).onItemPop)===null||a===void 0||a.call(r,t,this.openElements.current),n){let i,o;this.openElements.stackTop===0&&this.fragmentContext?(i=this.fragmentContext,o=this.fragmentContextID):{current:i,currentTagId:o}=this.openElements,this._setContextModes(i,o)}}_setContextModes(t,n){const r=t===this.document||t&&this.treeAdapter.getNamespaceURI(t)===O.HTML;this.currentNotInHTML=!r,this.tokenizer.inForeignNode=!r&&t!==void 0&&n!==void 0&&!this._isIntegrationPoint(n,t)}_switchToTextParsing(t,n){this._insertElement(t,O.HTML),this.tokenizer.state=n,this.originalInsertionMode=this.insertionMode,this.insertionMode=_.TEXT}switchToPlaintextParsing(){this.insertionMode=_.TEXT,this.originalInsertionMode=_.IN_BODY,this.tokenizer.state=De.PLAINTEXT}_getAdjustedCurrentElement(){return this.openElements.stackTop===0&&this.fragmentContext?this.fragmentContext:this.openElements.current}_findFormInFragmentContext(){let t=this.fragmentContext;for(;t;){if(this.treeAdapter.getTagName(t)===I.FORM){this.formElement=t;break}t=this.treeAdapter.getParentNode(t)}}_initTokenizerForFragmentParsing(){if(!(!this.fragmentContext||this.treeAdapter.getNamespaceURI(this.fragmentContext)!==O.HTML))switch(this.fragmentContextID){case c.TITLE:case c.TEXTAREA:{this.tokenizer.state=De.RCDATA;break}case c.STYLE:case c.XMP:case c.IFRAME:case c.NOEMBED:case c.NOFRAMES:case c.NOSCRIPT:{this.tokenizer.state=De.RAWTEXT;break}case c.SCRIPT:{this.tokenizer.state=De.SCRIPT_DATA;break}case c.PLAINTEXT:{this.tokenizer.state=De.PLAINTEXT;break}}}_setDocumentType(t){const n=t.name||"",r=t.publicId||"",a=t.systemId||"";if(this.treeAdapter.setDocumentType(this.document,n,r,a),t.location){const o=this.treeAdapter.getChildNodes(this.document).find(l=>this.treeAdapter.isDocumentTypeNode(l));o&&this.treeAdapter.setNodeSourceCodeLocation(o,t.location)}}_attachElementToTree(t,n){if(this.options.sourceCodeLocationInfo){const r=n&&{...n,startTag:n};this.treeAdapter.setNodeSourceCodeLocation(t,r)}if(this._shouldFosterParentOnInsertion())this._fosterParentElement(t);else{const r=this.openElements.currentTmplContentOrNode;this.treeAdapter.appendChild(r??this.document,t)}}_appendElement(t,n){const r=this.treeAdapter.createElement(t.tagName,n,t.attrs);this._attachElementToTree(r,t.location)}_insertElement(t,n){const r=this.treeAdapter.createElement(t.tagName,n,t.attrs);this._attachElementToTree(r,t.location),this.openElements.push(r,t.tagID)}_insertFakeElement(t,n){const r=this.treeAdapter.createElement(t,O.HTML,[]);this._attachElementToTree(r,null),this.openElements.push(r,n)}_insertTemplate(t){const n=this.treeAdapter.createElement(t.tagName,O.HTML,t.attrs),r=this.treeAdapter.createDocumentFragment();this.treeAdapter.setTemplateContent(n,r),this._attachElementToTree(n,t.location),this.openElements.push(n,t.tagID),this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(r,null)}_insertFakeRootElement(){const t=this.treeAdapter.createElement(I.HTML,O.HTML,[]);this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(t,null),this.treeAdapter.appendChild(this.openElements.current,t),this.openElements.push(t,c.HTML)}_appendCommentNode(t,n){const r=this.treeAdapter.createCommentNode(t.data);this.treeAdapter.appendChild(n,r),this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(r,t.location)}_insertCharacters(t){let n,r;if(this._shouldFosterParentOnInsertion()?({parent:n,beforeElement:r}=this._findFosterParentingLocation(),r?this.treeAdapter.insertTextBefore(n,t.chars,r):this.treeAdapter.insertText(n,t.chars)):(n=this.openElements.currentTmplContentOrNode,this.treeAdapter.insertText(n,t.chars)),!t.location)return;const a=this.treeAdapter.getChildNodes(n),i=r?a.lastIndexOf(r):a.length,o=a[i-1];if(this.treeAdapter.getNodeSourceCodeLocation(o)){const{endLine:u,endCol:d,endOffset:f}=t.location;this.treeAdapter.updateNodeSourceCodeLocation(o,{endLine:u,endCol:d,endOffset:f})}else this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(o,t.location)}_adoptNodes(t,n){for(let r=this.treeAdapter.getFirstChild(t);r;r=this.treeAdapter.getFirstChild(t))this.treeAdapter.detachNode(r),this.treeAdapter.appendChild(n,r)}_setEndLocation(t,n){if(this.treeAdapter.getNodeSourceCodeLocation(t)&&n.location){const r=n.location,a=this.treeAdapter.getTagName(t),i=n.type===ee.END_TAG&&a===n.tagName?{endTag:{...r},endLine:r.endLine,endCol:r.endCol,endOffset:r.endOffset}:{endLine:r.startLine,endCol:r.startCol,endOffset:r.startOffset};this.treeAdapter.updateNodeSourceCodeLocation(t,i)}}shouldProcessStartTagTokenInForeignContent(t){if(!this.currentNotInHTML)return!1;let n,r;return this.openElements.stackTop===0&&this.fragmentContext?(n=this.fragmentContext,r=this.fragmentContextID):{current:n,currentTagId:r}=this.openElements,t.tagID===c.SVG&&this.treeAdapter.getTagName(n)===I.ANNOTATION_XML&&this.treeAdapter.getNamespaceURI(n)===O.MATHML?!1:this.tokenizer.inForeignNode||(t.tagID===c.MGLYPH||t.tagID===c.MALIGNMARK)&&r!==void 0&&!this._isIntegrationPoint(r,n,O.HTML)}_processToken(t){switch(t.type){case ee.CHARACTER:{this.onCharacter(t);break}case ee.NULL_CHARACTER:{this.onNullCharacter(t);break}case ee.COMMENT:{this.onComment(t);break}case ee.DOCTYPE:{this.onDoctype(t);break}case ee.START_TAG:{this._processStartTag(t);break}case ee.END_TAG:{this.onEndTag(t);break}case ee.EOF:{this.onEof(t);break}case ee.WHITESPACE_CHARACTER:{this.onWhitespaceCharacter(t);break}}}_isIntegrationPoint(t,n,r){const a=this.treeAdapter.getNamespaceURI(n),i=this.treeAdapter.getAttrList(n);return eN(t,a,i,r)}_reconstructActiveFormattingElements(){const t=this.activeFormattingElements.entries.length;if(t){const n=this.activeFormattingElements.entries.findIndex(a=>a.type===en.Marker||this.openElements.contains(a.element)),r=n===-1?t-1:n-1;for(let a=r;a>=0;a--){const i=this.activeFormattingElements.entries[a];this._insertElement(i.token,this.treeAdapter.getNamespaceURI(i.element)),i.element=this.openElements.current}}}_closeTableCell(){this.openElements.generateImpliedEndTags(),this.openElements.popUntilTableCellPopped(),this.activeFormattingElements.clearToLastMarker(),this.insertionMode=_.IN_ROW}_closePElement(){this.openElements.generateImpliedEndTagsWithExclusion(c.P),this.openElements.popUntilTagNamePopped(c.P)}_resetInsertionMode(){for(let t=this.openElements.stackTop;t>=0;t--)switch(t===0&&this.fragmentContext?this.fragmentContextID:this.openElements.tagIDs[t]){case c.TR:{this.insertionMode=_.IN_ROW;return}case c.TBODY:case c.THEAD:case c.TFOOT:{this.insertionMode=_.IN_TABLE_BODY;return}case c.CAPTION:{this.insertionMode=_.IN_CAPTION;return}case c.COLGROUP:{this.insertionMode=_.IN_COLUMN_GROUP;return}case c.TABLE:{this.insertionMode=_.IN_TABLE;return}case c.BODY:{this.insertionMode=_.IN_BODY;return}case c.FRAMESET:{this.insertionMode=_.IN_FRAMESET;return}case c.SELECT:{this._resetInsertionModeForSelect(t);return}case c.TEMPLATE:{this.insertionMode=this.tmplInsertionModeStack[0];return}case c.HTML:{this.insertionMode=this.headElement?_.AFTER_HEAD:_.BEFORE_HEAD;return}case c.TD:case c.TH:{if(t>0){this.insertionMode=_.IN_CELL;return}break}case c.HEAD:{if(t>0){this.insertionMode=_.IN_HEAD;return}break}}this.insertionMode=_.IN_BODY}_resetInsertionModeForSelect(t){if(t>0)for(let n=t-1;n>0;n--){const r=this.openElements.tagIDs[n];if(r===c.TEMPLATE)break;if(r===c.TABLE){this.insertionMode=_.IN_SELECT_IN_TABLE;return}}this.insertionMode=_.IN_SELECT}_isElementCausesFosterParenting(t){return v1.has(t)}_shouldFosterParentOnInsertion(){return this.fosterParentingEnabled&&this.openElements.currentTagId!==void 0&&this._isElementCausesFosterParenting(this.openElements.currentTagId)}_findFosterParentingLocation(){for(let t=this.openElements.stackTop;t>=0;t--){const n=this.openElements.items[t];switch(this.openElements.tagIDs[t]){case c.TEMPLATE:{if(this.treeAdapter.getNamespaceURI(n)===O.HTML)return{parent:this.treeAdapter.getTemplateContent(n),beforeElement:null};break}case c.TABLE:{const r=this.treeAdapter.getParentNode(n);return r?{parent:r,beforeElement:n}:{parent:this.openElements.items[t-1],beforeElement:null}}}}return{parent:this.openElements.items[0],beforeElement:null}}_fosterParentElement(t){const n=this._findFosterParentingLocation();n.beforeElement?this.treeAdapter.insertBefore(n.parent,t,n.beforeElement):this.treeAdapter.appendChild(n.parent,t)}_isSpecialElement(t,n){const r=this.treeAdapter.getNamespaceURI(t);return SC[r].has(n)}onCharacter(t){if(this.skipNextNewLine=!1,this.tokenizer.inForeignNode){Dw(this,t);return}switch(this.insertionMode){case _.INITIAL:{Ca(this,t);break}case _.BEFORE_HTML:{Wa(this,t);break}case _.BEFORE_HEAD:{Ga(this,t);break}case _.IN_HEAD:{Va(this,t);break}case _.IN_HEAD_NO_SCRIPT:{$a(this,t);break}case _.AFTER_HEAD:{Qa(this,t);break}case _.IN_BODY:case _.IN_CAPTION:case _.IN_CELL:case _.IN_TEMPLATE:{S1(this,t);break}case _.TEXT:case _.IN_SELECT:case _.IN_SELECT_IN_TABLE:{this._insertCharacters(t);break}case _.IN_TABLE:case _.IN_TABLE_BODY:case _.IN_ROW:{Pl(this,t);break}case _.IN_TABLE_TEXT:{I1(this,t);break}case _.IN_COLUMN_GROUP:{Qs(this,t);break}case _.AFTER_BODY:{Ks(this,t);break}case _.AFTER_AFTER_BODY:{ys(this,t);break}}}onNullCharacter(t){if(this.skipNextNewLine=!1,this.tokenizer.inForeignNode){Rw(this,t);return}switch(this.insertionMode){case _.INITIAL:{Ca(this,t);break}case _.BEFORE_HTML:{Wa(this,t);break}case _.BEFORE_HEAD:{Ga(this,t);break}case _.IN_HEAD:{Va(this,t);break}case _.IN_HEAD_NO_SCRIPT:{$a(this,t);break}case _.AFTER_HEAD:{Qa(this,t);break}case _.TEXT:{this._insertCharacters(t);break}case _.IN_TABLE:case _.IN_TABLE_BODY:case _.IN_ROW:{Pl(this,t);break}case _.IN_COLUMN_GROUP:{Qs(this,t);break}case _.AFTER_BODY:{Ks(this,t);break}case _.AFTER_AFTER_BODY:{ys(this,t);break}}}onComment(t){if(this.skipNextNewLine=!1,this.currentNotInHTML){nc(this,t);return}switch(this.insertionMode){case _.INITIAL:case _.BEFORE_HTML:case _.BEFORE_HEAD:case _.IN_HEAD:case _.IN_HEAD_NO_SCRIPT:case _.AFTER_HEAD:case _.IN_BODY:case _.IN_TABLE:case _.IN_CAPTION:case _.IN_COLUMN_GROUP:case _.IN_TABLE_BODY:case _.IN_ROW:case _.IN_CELL:case _.IN_SELECT:case _.IN_SELECT_IN_TABLE:case _.IN_TEMPLATE:case _.IN_FRAMESET:case _.AFTER_FRAMESET:{nc(this,t);break}case _.IN_TABLE_TEXT:{Na(this,t);break}case _.AFTER_BODY:{dN(this,t);break}case _.AFTER_AFTER_BODY:case _.AFTER_AFTER_FRAMESET:{hN(this,t);break}}}onDoctype(t){switch(this.skipNextNewLine=!1,this.insertionMode){case _.INITIAL:{fN(this,t);break}case _.BEFORE_HEAD:case _.IN_HEAD:case _.IN_HEAD_NO_SCRIPT:case _.AFTER_HEAD:{this._err(t,L.misplacedDoctype);break}case _.IN_TABLE_TEXT:{Na(this,t);break}}}onStartTag(t){this.skipNextNewLine=!1,this.currentToken=t,this._processStartTag(t),t.selfClosing&&!t.ackSelfClosing&&this._err(t,L.nonVoidHtmlElementStartTagWithTrailingSolidus)}_processStartTag(t){this.shouldProcessStartTagTokenInForeignContent(t)?Ow(this,t):this._startTagOutsideForeignContent(t)}_startTagOutsideForeignContent(t){switch(this.insertionMode){case _.INITIAL:{Ca(this,t);break}case _.BEFORE_HTML:{pN(this,t);break}case _.BEFORE_HEAD:{gN(this,t);break}case _.IN_HEAD:{Qt(this,t);break}case _.IN_HEAD_NO_SCRIPT:{bN(this,t);break}case _.AFTER_HEAD:{TN(this,t);break}case _.IN_BODY:{nt(this,t);break}case _.IN_TABLE:{na(this,t);break}case _.IN_TABLE_TEXT:{Na(this,t);break}case _.IN_CAPTION:{yw(this,t);break}case _.IN_COLUMN_GROUP:{Ad(this,t);break}case _.IN_TABLE_BODY:{Bo(this,t);break}case _.IN_ROW:{Ho(this,t);break}case _.IN_CELL:{Ew(this,t);break}case _.IN_SELECT:{R1(this,t);break}case _.IN_SELECT_IN_TABLE:{vw(this,t);break}case _.IN_TEMPLATE:{Sw(this,t);break}case _.AFTER_BODY:{Cw(this,t);break}case _.IN_FRAMESET:{Nw(this,t);break}case _.AFTER_FRAMESET:{Aw(this,t);break}case _.AFTER_AFTER_BODY:{Pw(this,t);break}case _.AFTER_AFTER_FRAMESET:{Lw(this,t);break}}}onEndTag(t){this.skipNextNewLine=!1,this.currentToken=t,this.currentNotInHTML?Mw(this,t):this._endTagOutsideForeignContent(t)}_endTagOutsideForeignContent(t){switch(this.insertionMode){case _.INITIAL:{Ca(this,t);break}case _.BEFORE_HTML:{mN(this,t);break}case _.BEFORE_HEAD:{yN(this,t);break}case _.IN_HEAD:{xN(this,t);break}case _.IN_HEAD_NO_SCRIPT:{EN(this,t);break}case _.AFTER_HEAD:{vN(this,t);break}case _.IN_BODY:{Fo(this,t);break}case _.TEXT:{ow(this,t);break}case _.IN_TABLE:{gi(this,t);break}case _.IN_TABLE_TEXT:{Na(this,t);break}case _.IN_CAPTION:{xw(this,t);break}case _.IN_COLUMN_GROUP:{bw(this,t);break}case _.IN_TABLE_BODY:{rc(this,t);break}case _.IN_ROW:{L1(this,t);break}case _.IN_CELL:{Tw(this,t);break}case _.IN_SELECT:{D1(this,t);break}case _.IN_SELECT_IN_TABLE:{_w(this,t);break}case _.IN_TEMPLATE:{kw(this,t);break}case _.AFTER_BODY:{M1(this,t);break}case _.IN_FRAMESET:{ww(this,t);break}case _.AFTER_FRAMESET:{Iw(this,t);break}case _.AFTER_AFTER_BODY:{ys(this,t);break}}}onEof(t){switch(this.insertionMode){case _.INITIAL:{Ca(this,t);break}case _.BEFORE_HTML:{Wa(this,t);break}case _.BEFORE_HEAD:{Ga(this,t);break}case _.IN_HEAD:{Va(this,t);break}case _.IN_HEAD_NO_SCRIPT:{$a(this,t);break}case _.AFTER_HEAD:{Qa(this,t);break}case _.IN_BODY:case _.IN_TABLE:case _.IN_CAPTION:case _.IN_COLUMN_GROUP:case _.IN_TABLE_BODY:case _.IN_ROW:case _.IN_CELL:case _.IN_SELECT:case _.IN_SELECT_IN_TABLE:{w1(this,t);break}case _.TEXT:{lw(this,t);break}case _.IN_TABLE_TEXT:{Na(this,t);break}case _.IN_TEMPLATE:{O1(this,t);break}case _.AFTER_BODY:case _.IN_FRAMESET:case _.AFTER_FRAMESET:case _.AFTER_AFTER_BODY:case _.AFTER_AFTER_FRAMESET:{wd(this,t);break}}}onWhitespaceCharacter(t){if(this.skipNextNewLine&&(this.skipNextNewLine=!1,t.chars.charCodeAt(0)===b.LINE_FEED)){if(t.chars.length===1)return;t.chars=t.chars.substr(1)}if(this.tokenizer.inForeignNode){this._insertCharacters(t);return}switch(this.insertionMode){case _.IN_HEAD:case _.IN_HEAD_NO_SCRIPT:case _.AFTER_HEAD:case _.TEXT:case _.IN_COLUMN_GROUP:case _.IN_SELECT:case _.IN_SELECT_IN_TABLE:case _.IN_FRAMESET:case _.AFTER_FRAMESET:{this._insertCharacters(t);break}case _.IN_BODY:case _.IN_CAPTION:case _.IN_CELL:case _.IN_TEMPLATE:case _.AFTER_BODY:case _.AFTER_AFTER_BODY:case _.AFTER_AFTER_FRAMESET:{_1(this,t);break}case _.IN_TABLE:case _.IN_TABLE_BODY:case _.IN_ROW:{Pl(this,t);break}case _.IN_TABLE_TEXT:{A1(this,t);break}}}}function iN(e,t){let n=e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);return n?e.openElements.contains(n.element)?e.openElements.hasInScope(t.tagID)||(n=null):(e.activeFormattingElements.removeEntry(n),n=null):N1(e,t),n}function sN(e,t){let n=null,r=e.openElements.stackTop;for(;r>=0;r--){const a=e.openElements.items[r];if(a===t.element)break;e._isSpecialElement(a,e.openElements.tagIDs[r])&&(n=a)}return n||(e.openElements.shortenToLength(Math.max(r,0)),e.activeFormattingElements.removeEntry(t)),n}function oN(e,t,n){let r=t,a=e.openElements.getCommonAncestor(t);for(let i=0,o=a;o!==n;i++,o=a){a=e.openElements.getCommonAncestor(o);const l=e.activeFormattingElements.getElementEntry(o),u=l&&i>=rN;!l||u?(u&&e.activeFormattingElements.removeEntry(l),e.openElements.remove(o)):(o=lN(e,l),r===t&&(e.activeFormattingElements.bookmark=l),e.treeAdapter.detachNode(r),e.treeAdapter.appendChild(o,r),r=o)}return r}function lN(e,t){const n=e.treeAdapter.getNamespaceURI(t.element),r=e.treeAdapter.createElement(t.token.tagName,n,t.token.attrs);return e.openElements.replace(t.element,r),t.element=r,r}function uN(e,t,n){const r=e.treeAdapter.getTagName(t),a=ha(r);if(e._isElementCausesFosterParenting(a))e._fosterParentElement(n);else{const i=e.treeAdapter.getNamespaceURI(t);a===c.TEMPLATE&&i===O.HTML&&(t=e.treeAdapter.getTemplateContent(t)),e.treeAdapter.appendChild(t,n)}}function cN(e,t,n){const r=e.treeAdapter.getNamespaceURI(n.element),{token:a}=n,i=e.treeAdapter.createElement(a.tagName,r,a.attrs);e._adoptNodes(t,i),e.treeAdapter.appendChild(t,i),e.activeFormattingElements.insertElementAfterBookmark(i,a),e.activeFormattingElements.removeEntry(n),e.openElements.remove(n.element),e.openElements.insertAfter(t,i,a.tagID)}function Nd(e,t){for(let n=0;n<nN;n++){const r=iN(e,t);if(!r)break;const a=sN(e,r);if(!a)break;e.activeFormattingElements.bookmark=r;const i=oN(e,a,r.element),o=e.openElements.getCommonAncestor(r.element);e.treeAdapter.detachNode(i),o&&uN(e,o,i),cN(e,a,r)}}function nc(e,t){e._appendCommentNode(t,e.openElements.currentTmplContentOrNode)}function dN(e,t){e._appendCommentNode(t,e.openElements.items[0])}function hN(e,t){e._appendCommentNode(t,e.document)}function wd(e,t){if(e.stopped=!0,t.location){const n=e.fragmentContext?0:2;for(let r=e.openElements.stackTop;r>=n;r--)e._setEndLocation(e.openElements.items[r],t);if(!e.fragmentContext&&e.openElements.stackTop>=0){const r=e.openElements.items[0],a=e.treeAdapter.getNodeSourceCodeLocation(r);if(a&&!a.endTag&&(e._setEndLocation(r,t),e.openElements.stackTop>=1)){const i=e.openElements.items[1],o=e.treeAdapter.getNodeSourceCodeLocation(i);o&&!o.endTag&&e._setEndLocation(i,t)}}}}function fN(e,t){e._setDocumentType(t);const n=t.forceQuirks?Lt.QUIRKS:qC(t);zC(t)||e._err(t,L.nonConformingDoctype),e.treeAdapter.setDocumentMode(e.document,n),e.insertionMode=_.BEFORE_HTML}function Ca(e,t){e._err(t,L.missingDoctype,!0),e.treeAdapter.setDocumentMode(e.document,Lt.QUIRKS),e.insertionMode=_.BEFORE_HTML,e._processToken(t)}function pN(e,t){t.tagID===c.HTML?(e._insertElement(t,O.HTML),e.insertionMode=_.BEFORE_HEAD):Wa(e,t)}function mN(e,t){const n=t.tagID;(n===c.HTML||n===c.HEAD||n===c.BODY||n===c.BR)&&Wa(e,t)}function Wa(e,t){e._insertFakeRootElement(),e.insertionMode=_.BEFORE_HEAD,e._processToken(t)}function gN(e,t){switch(t.tagID){case c.HTML:{nt(e,t);break}case c.HEAD:{e._insertElement(t,O.HTML),e.headElement=e.openElements.current,e.insertionMode=_.IN_HEAD;break}default:Ga(e,t)}}function yN(e,t){const n=t.tagID;n===c.HEAD||n===c.BODY||n===c.HTML||n===c.BR?Ga(e,t):e._err(t,L.endTagWithoutMatchingOpenElement)}function Ga(e,t){e._insertFakeElement(I.HEAD,c.HEAD),e.headElement=e.openElements.current,e.insertionMode=_.IN_HEAD,e._processToken(t)}function Qt(e,t){switch(t.tagID){case c.HTML:{nt(e,t);break}case c.BASE:case c.BASEFONT:case c.BGSOUND:case c.LINK:case c.META:{e._appendElement(t,O.HTML),t.ackSelfClosing=!0;break}case c.TITLE:{e._switchToTextParsing(t,De.RCDATA);break}case c.NOSCRIPT:{e.options.scriptingEnabled?e._switchToTextParsing(t,De.RAWTEXT):(e._insertElement(t,O.HTML),e.insertionMode=_.IN_HEAD_NO_SCRIPT);break}case c.NOFRAMES:case c.STYLE:{e._switchToTextParsing(t,De.RAWTEXT);break}case c.SCRIPT:{e._switchToTextParsing(t,De.SCRIPT_DATA);break}case c.TEMPLATE:{e._insertTemplate(t),e.activeFormattingElements.insertMarker(),e.framesetOk=!1,e.insertionMode=_.IN_TEMPLATE,e.tmplInsertionModeStack.unshift(_.IN_TEMPLATE);break}case c.HEAD:{e._err(t,L.misplacedStartTagForHeadElement);break}default:Va(e,t)}}function xN(e,t){switch(t.tagID){case c.HEAD:{e.openElements.pop(),e.insertionMode=_.AFTER_HEAD;break}case c.BODY:case c.BR:case c.HTML:{Va(e,t);break}case c.TEMPLATE:{yr(e,t);break}default:e._err(t,L.endTagWithoutMatchingOpenElement)}}function yr(e,t){e.openElements.tmplCount>0?(e.openElements.generateImpliedEndTagsThoroughly(),e.openElements.currentTagId!==c.TEMPLATE&&e._err(t,L.closingOfElementWithOpenChildElements),e.openElements.popUntilTagNamePopped(c.TEMPLATE),e.activeFormattingElements.clearToLastMarker(),e.tmplInsertionModeStack.shift(),e._resetInsertionMode()):e._err(t,L.endTagWithoutMatchingOpenElement)}function Va(e,t){e.openElements.pop(),e.insertionMode=_.AFTER_HEAD,e._processToken(t)}function bN(e,t){switch(t.tagID){case c.HTML:{nt(e,t);break}case c.BASEFONT:case c.BGSOUND:case c.HEAD:case c.LINK:case c.META:case c.NOFRAMES:case c.STYLE:{Qt(e,t);break}case c.NOSCRIPT:{e._err(t,L.nestedNoscriptInHead);break}default:$a(e,t)}}function EN(e,t){switch(t.tagID){case c.NOSCRIPT:{e.openElements.pop(),e.insertionMode=_.IN_HEAD;break}case c.BR:{$a(e,t);break}default:e._err(t,L.endTagWithoutMatchingOpenElement)}}function $a(e,t){const n=t.type===ee.EOF?L.openElementsLeftAfterEof:L.disallowedContentInNoscriptInHead;e._err(t,n),e.openElements.pop(),e.insertionMode=_.IN_HEAD,e._processToken(t)}function TN(e,t){switch(t.tagID){case c.HTML:{nt(e,t);break}case c.BODY:{e._insertElement(t,O.HTML),e.framesetOk=!1,e.insertionMode=_.IN_BODY;break}case c.FRAMESET:{e._insertElement(t,O.HTML),e.insertionMode=_.IN_FRAMESET;break}case c.BASE:case c.BASEFONT:case c.BGSOUND:case c.LINK:case c.META:case c.NOFRAMES:case c.SCRIPT:case c.STYLE:case c.TEMPLATE:case c.TITLE:{e._err(t,L.abandonedHeadElementChild),e.openElements.push(e.headElement,c.HEAD),Qt(e,t),e.openElements.remove(e.headElement);break}case c.HEAD:{e._err(t,L.misplacedStartTagForHeadElement);break}default:Qa(e,t)}}function vN(e,t){switch(t.tagID){case c.BODY:case c.HTML:case c.BR:{Qa(e,t);break}case c.TEMPLATE:{yr(e,t);break}default:e._err(t,L.endTagWithoutMatchingOpenElement)}}function Qa(e,t){e._insertFakeElement(I.BODY,c.BODY),e.insertionMode=_.IN_BODY,jo(e,t)}function jo(e,t){switch(t.type){case ee.CHARACTER:{S1(e,t);break}case ee.WHITESPACE_CHARACTER:{_1(e,t);break}case ee.COMMENT:{nc(e,t);break}case ee.START_TAG:{nt(e,t);break}case ee.END_TAG:{Fo(e,t);break}case ee.EOF:{w1(e,t);break}}}function _1(e,t){e._reconstructActiveFormattingElements(),e._insertCharacters(t)}function S1(e,t){e._reconstructActiveFormattingElements(),e._insertCharacters(t),e.framesetOk=!1}function _N(e,t){e.openElements.tmplCount===0&&e.treeAdapter.adoptAttributes(e.openElements.items[0],t.attrs)}function SN(e,t){const n=e.openElements.tryPeekProperlyNestedBodyElement();n&&e.openElements.tmplCount===0&&(e.framesetOk=!1,e.treeAdapter.adoptAttributes(n,t.attrs))}function kN(e,t){const n=e.openElements.tryPeekProperlyNestedBodyElement();e.framesetOk&&n&&(e.treeAdapter.detachNode(n),e.openElements.popAllUpToHtmlElement(),e._insertElement(t,O.HTML),e.insertionMode=_.IN_FRAMESET)}function CN(e,t){e.openElements.hasInButtonScope(c.P)&&e._closePElement(),e._insertElement(t,O.HTML)}function NN(e,t){e.openElements.hasInButtonScope(c.P)&&e._closePElement(),e.openElements.currentTagId!==void 0&&tc.has(e.openElements.currentTagId)&&e.openElements.pop(),e._insertElement(t,O.HTML)}function wN(e,t){e.openElements.hasInButtonScope(c.P)&&e._closePElement(),e._insertElement(t,O.HTML),e.skipNextNewLine=!0,e.framesetOk=!1}function AN(e,t){const n=e.openElements.tmplCount>0;(!e.formElement||n)&&(e.openElements.hasInButtonScope(c.P)&&e._closePElement(),e._insertElement(t,O.HTML),n||(e.formElement=e.openElements.current))}function IN(e,t){e.framesetOk=!1;const n=t.tagID;for(let r=e.openElements.stackTop;r>=0;r--){const a=e.openElements.tagIDs[r];if(n===c.LI&&a===c.LI||(n===c.DD||n===c.DT)&&(a===c.DD||a===c.DT)){e.openElements.generateImpliedEndTagsWithExclusion(a),e.openElements.popUntilTagNamePopped(a);break}if(a!==c.ADDRESS&&a!==c.DIV&&a!==c.P&&e._isSpecialElement(e.openElements.items[r],a))break}e.openElements.hasInButtonScope(c.P)&&e._closePElement(),e._insertElement(t,O.HTML)}function PN(e,t){e.openElements.hasInButtonScope(c.P)&&e._closePElement(),e._insertElement(t,O.HTML),e.tokenizer.state=De.PLAINTEXT}function LN(e,t){e.openElements.hasInScope(c.BUTTON)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(c.BUTTON)),e._reconstructActiveFormattingElements(),e._insertElement(t,O.HTML),e.framesetOk=!1}function RN(e,t){const n=e.activeFormattingElements.getElementEntryInScopeWithTagName(I.A);n&&(Nd(e,t),e.openElements.remove(n.element),e.activeFormattingElements.removeEntry(n)),e._reconstructActiveFormattingElements(),e._insertElement(t,O.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function DN(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,O.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function ON(e,t){e._reconstructActiveFormattingElements(),e.openElements.hasInScope(c.NOBR)&&(Nd(e,t),e._reconstructActiveFormattingElements()),e._insertElement(t,O.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function MN(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,O.HTML),e.activeFormattingElements.insertMarker(),e.framesetOk=!1}function jN(e,t){e.treeAdapter.getDocumentMode(e.document)!==Lt.QUIRKS&&e.openElements.hasInButtonScope(c.P)&&e._closePElement(),e._insertElement(t,O.HTML),e.framesetOk=!1,e.insertionMode=_.IN_TABLE}function k1(e,t){e._reconstructActiveFormattingElements(),e._appendElement(t,O.HTML),e.framesetOk=!1,t.ackSelfClosing=!0}function C1(e){const t=p1(e,sr.TYPE);return t!=null&&t.toLowerCase()===tN}function FN(e,t){e._reconstructActiveFormattingElements(),e._appendElement(t,O.HTML),C1(t)||(e.framesetOk=!1),t.ackSelfClosing=!0}function BN(e,t){e._appendElement(t,O.HTML),t.ackSelfClosing=!0}function HN(e,t){e.openElements.hasInButtonScope(c.P)&&e._closePElement(),e._appendElement(t,O.HTML),e.framesetOk=!1,t.ackSelfClosing=!0}function UN(e,t){t.tagName=I.IMG,t.tagID=c.IMG,k1(e,t)}function zN(e,t){e._insertElement(t,O.HTML),e.skipNextNewLine=!0,e.tokenizer.state=De.RCDATA,e.originalInsertionMode=e.insertionMode,e.framesetOk=!1,e.insertionMode=_.TEXT}function qN(e,t){e.openElements.hasInButtonScope(c.P)&&e._closePElement(),e._reconstructActiveFormattingElements(),e.framesetOk=!1,e._switchToTextParsing(t,De.RAWTEXT)}function YN(e,t){e.framesetOk=!1,e._switchToTextParsing(t,De.RAWTEXT)}function Ep(e,t){e._switchToTextParsing(t,De.RAWTEXT)}function WN(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,O.HTML),e.framesetOk=!1,e.insertionMode=e.insertionMode===_.IN_TABLE||e.insertionMode===_.IN_CAPTION||e.insertionMode===_.IN_TABLE_BODY||e.insertionMode===_.IN_ROW||e.insertionMode===_.IN_CELL?_.IN_SELECT_IN_TABLE:_.IN_SELECT}function GN(e,t){e.openElements.currentTagId===c.OPTION&&e.openElements.pop(),e._reconstructActiveFormattingElements(),e._insertElement(t,O.HTML)}function VN(e,t){e.openElements.hasInScope(c.RUBY)&&e.openElements.generateImpliedEndTags(),e._insertElement(t,O.HTML)}function $N(e,t){e.openElements.hasInScope(c.RUBY)&&e.openElements.generateImpliedEndTagsWithExclusion(c.RTC),e._insertElement(t,O.HTML)}function QN(e,t){e._reconstructActiveFormattingElements(),E1(t),Cd(t),t.selfClosing?e._appendElement(t,O.MATHML):e._insertElement(t,O.MATHML),t.ackSelfClosing=!0}function KN(e,t){e._reconstructActiveFormattingElements(),T1(t),Cd(t),t.selfClosing?e._appendElement(t,O.SVG):e._insertElement(t,O.SVG),t.ackSelfClosing=!0}function Tp(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,O.HTML)}function nt(e,t){switch(t.tagID){case c.I:case c.S:case c.B:case c.U:case c.EM:case c.TT:case c.BIG:case c.CODE:case c.FONT:case c.SMALL:case c.STRIKE:case c.STRONG:{DN(e,t);break}case c.A:{RN(e,t);break}case c.H1:case c.H2:case c.H3:case c.H4:case c.H5:case c.H6:{NN(e,t);break}case c.P:case c.DL:case c.OL:case c.UL:case c.DIV:case c.DIR:case c.NAV:case c.MAIN:case c.MENU:case c.ASIDE:case c.CENTER:case c.FIGURE:case c.FOOTER:case c.HEADER:case c.HGROUP:case c.DIALOG:case c.DETAILS:case c.ADDRESS:case c.ARTICLE:case c.SEARCH:case c.SECTION:case c.SUMMARY:case c.FIELDSET:case c.BLOCKQUOTE:case c.FIGCAPTION:{CN(e,t);break}case c.LI:case c.DD:case c.DT:{IN(e,t);break}case c.BR:case c.IMG:case c.WBR:case c.AREA:case c.EMBED:case c.KEYGEN:{k1(e,t);break}case c.HR:{HN(e,t);break}case c.RB:case c.RTC:{VN(e,t);break}case c.RT:case c.RP:{$N(e,t);break}case c.PRE:case c.LISTING:{wN(e,t);break}case c.XMP:{qN(e,t);break}case c.SVG:{KN(e,t);break}case c.HTML:{_N(e,t);break}case c.BASE:case c.LINK:case c.META:case c.STYLE:case c.TITLE:case c.SCRIPT:case c.BGSOUND:case c.BASEFONT:case c.TEMPLATE:{Qt(e,t);break}case c.BODY:{SN(e,t);break}case c.FORM:{AN(e,t);break}case c.NOBR:{ON(e,t);break}case c.MATH:{QN(e,t);break}case c.TABLE:{jN(e,t);break}case c.INPUT:{FN(e,t);break}case c.PARAM:case c.TRACK:case c.SOURCE:{BN(e,t);break}case c.IMAGE:{UN(e,t);break}case c.BUTTON:{LN(e,t);break}case c.APPLET:case c.OBJECT:case c.MARQUEE:{MN(e,t);break}case c.IFRAME:{YN(e,t);break}case c.SELECT:{WN(e,t);break}case c.OPTION:case c.OPTGROUP:{GN(e,t);break}case c.NOEMBED:case c.NOFRAMES:{Ep(e,t);break}case c.FRAMESET:{kN(e,t);break}case c.TEXTAREA:{zN(e,t);break}case c.NOSCRIPT:{e.options.scriptingEnabled?Ep(e,t):Tp(e,t);break}case c.PLAINTEXT:{PN(e,t);break}case c.COL:case c.TH:case c.TD:case c.TR:case c.HEAD:case c.FRAME:case c.TBODY:case c.TFOOT:case c.THEAD:case c.CAPTION:case c.COLGROUP:break;default:Tp(e,t)}}function XN(e,t){if(e.openElements.hasInScope(c.BODY)&&(e.insertionMode=_.AFTER_BODY,e.options.sourceCodeLocationInfo)){const n=e.openElements.tryPeekProperlyNestedBodyElement();n&&e._setEndLocation(n,t)}}function JN(e,t){e.openElements.hasInScope(c.BODY)&&(e.insertionMode=_.AFTER_BODY,M1(e,t))}function ZN(e,t){const n=t.tagID;e.openElements.hasInScope(n)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(n))}function ew(e){const t=e.openElements.tmplCount>0,{formElement:n}=e;t||(e.formElement=null),(n||t)&&e.openElements.hasInScope(c.FORM)&&(e.openElements.generateImpliedEndTags(),t?e.openElements.popUntilTagNamePopped(c.FORM):n&&e.openElements.remove(n))}function tw(e){e.openElements.hasInButtonScope(c.P)||e._insertFakeElement(I.P,c.P),e._closePElement()}function nw(e){e.openElements.hasInListItemScope(c.LI)&&(e.openElements.generateImpliedEndTagsWithExclusion(c.LI),e.openElements.popUntilTagNamePopped(c.LI))}function rw(e,t){const n=t.tagID;e.openElements.hasInScope(n)&&(e.openElements.generateImpliedEndTagsWithExclusion(n),e.openElements.popUntilTagNamePopped(n))}function aw(e){e.openElements.hasNumberedHeaderInScope()&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilNumberedHeaderPopped())}function iw(e,t){const n=t.tagID;e.openElements.hasInScope(n)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(n),e.activeFormattingElements.clearToLastMarker())}function sw(e){e._reconstructActiveFormattingElements(),e._insertFakeElement(I.BR,c.BR),e.openElements.pop(),e.framesetOk=!1}function N1(e,t){const n=t.tagName,r=t.tagID;for(let a=e.openElements.stackTop;a>0;a--){const i=e.openElements.items[a],o=e.openElements.tagIDs[a];if(r===o&&(r!==c.UNKNOWN||e.treeAdapter.getTagName(i)===n)){e.openElements.generateImpliedEndTagsWithExclusion(r),e.openElements.stackTop>=a&&e.openElements.shortenToLength(a);break}if(e._isSpecialElement(i,o))break}}function Fo(e,t){switch(t.tagID){case c.A:case c.B:case c.I:case c.S:case c.U:case c.EM:case c.TT:case c.BIG:case c.CODE:case c.FONT:case c.NOBR:case c.SMALL:case c.STRIKE:case c.STRONG:{Nd(e,t);break}case c.P:{tw(e);break}case c.DL:case c.UL:case c.OL:case c.DIR:case c.DIV:case c.NAV:case c.PRE:case c.MAIN:case c.MENU:case c.ASIDE:case c.BUTTON:case c.CENTER:case c.FIGURE:case c.FOOTER:case c.HEADER:case c.HGROUP:case c.DIALOG:case c.ADDRESS:case c.ARTICLE:case c.DETAILS:case c.SEARCH:case c.SECTION:case c.SUMMARY:case c.LISTING:case c.FIELDSET:case c.BLOCKQUOTE:case c.FIGCAPTION:{ZN(e,t);break}case c.LI:{nw(e);break}case c.DD:case c.DT:{rw(e,t);break}case c.H1:case c.H2:case c.H3:case c.H4:case c.H5:case c.H6:{aw(e);break}case c.BR:{sw(e);break}case c.BODY:{XN(e,t);break}case c.HTML:{JN(e,t);break}case c.FORM:{ew(e);break}case c.APPLET:case c.OBJECT:case c.MARQUEE:{iw(e,t);break}case c.TEMPLATE:{yr(e,t);break}default:N1(e,t)}}function w1(e,t){e.tmplInsertionModeStack.length>0?O1(e,t):wd(e,t)}function ow(e,t){var n;t.tagID===c.SCRIPT&&((n=e.scriptHandler)===null||n===void 0||n.call(e,e.openElements.current)),e.openElements.pop(),e.insertionMode=e.originalInsertionMode}function lw(e,t){e._err(t,L.eofInElementThatCanContainOnlyText),e.openElements.pop(),e.insertionMode=e.originalInsertionMode,e.onEof(t)}function Pl(e,t){if(e.openElements.currentTagId!==void 0&&v1.has(e.openElements.currentTagId))switch(e.pendingCharacterTokens.length=0,e.hasNonWhitespacePendingCharacterToken=!1,e.originalInsertionMode=e.insertionMode,e.insertionMode=_.IN_TABLE_TEXT,t.type){case ee.CHARACTER:{I1(e,t);break}case ee.WHITESPACE_CHARACTER:{A1(e,t);break}}else Ai(e,t)}function uw(e,t){e.openElements.clearBackToTableContext(),e.activeFormattingElements.insertMarker(),e._insertElement(t,O.HTML),e.insertionMode=_.IN_CAPTION}function cw(e,t){e.openElements.clearBackToTableContext(),e._insertElement(t,O.HTML),e.insertionMode=_.IN_COLUMN_GROUP}function dw(e,t){e.openElements.clearBackToTableContext(),e._insertFakeElement(I.COLGROUP,c.COLGROUP),e.insertionMode=_.IN_COLUMN_GROUP,Ad(e,t)}function hw(e,t){e.openElements.clearBackToTableContext(),e._insertElement(t,O.HTML),e.insertionMode=_.IN_TABLE_BODY}function fw(e,t){e.openElements.clearBackToTableContext(),e._insertFakeElement(I.TBODY,c.TBODY),e.insertionMode=_.IN_TABLE_BODY,Bo(e,t)}function pw(e,t){e.openElements.hasInTableScope(c.TABLE)&&(e.openElements.popUntilTagNamePopped(c.TABLE),e._resetInsertionMode(),e._processStartTag(t))}function mw(e,t){C1(t)?e._appendElement(t,O.HTML):Ai(e,t),t.ackSelfClosing=!0}function gw(e,t){!e.formElement&&e.openElements.tmplCount===0&&(e._insertElement(t,O.HTML),e.formElement=e.openElements.current,e.openElements.pop())}function na(e,t){switch(t.tagID){case c.TD:case c.TH:case c.TR:{fw(e,t);break}case c.STYLE:case c.SCRIPT:case c.TEMPLATE:{Qt(e,t);break}case c.COL:{dw(e,t);break}case c.FORM:{gw(e,t);break}case c.TABLE:{pw(e,t);break}case c.TBODY:case c.TFOOT:case c.THEAD:{hw(e,t);break}case c.INPUT:{mw(e,t);break}case c.CAPTION:{uw(e,t);break}case c.COLGROUP:{cw(e,t);break}default:Ai(e,t)}}function gi(e,t){switch(t.tagID){case c.TABLE:{e.openElements.hasInTableScope(c.TABLE)&&(e.openElements.popUntilTagNamePopped(c.TABLE),e._resetInsertionMode());break}case c.TEMPLATE:{yr(e,t);break}case c.BODY:case c.CAPTION:case c.COL:case c.COLGROUP:case c.HTML:case c.TBODY:case c.TD:case c.TFOOT:case c.TH:case c.THEAD:case c.TR:break;default:Ai(e,t)}}function Ai(e,t){const n=e.fosterParentingEnabled;e.fosterParentingEnabled=!0,jo(e,t),e.fosterParentingEnabled=n}function A1(e,t){e.pendingCharacterTokens.push(t)}function I1(e,t){e.pendingCharacterTokens.push(t),e.hasNonWhitespacePendingCharacterToken=!0}function Na(e,t){let n=0;if(e.hasNonWhitespacePendingCharacterToken)for(;n<e.pendingCharacterTokens.length;n++)Ai(e,e.pendingCharacterTokens[n]);else for(;n<e.pendingCharacterTokens.length;n++)e._insertCharacters(e.pendingCharacterTokens[n]);e.insertionMode=e.originalInsertionMode,e._processToken(t)}const P1=new Set([c.CAPTION,c.COL,c.COLGROUP,c.TBODY,c.TD,c.TFOOT,c.TH,c.THEAD,c.TR]);function yw(e,t){const n=t.tagID;P1.has(n)?e.openElements.hasInTableScope(c.CAPTION)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(c.CAPTION),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=_.IN_TABLE,na(e,t)):nt(e,t)}function xw(e,t){const n=t.tagID;switch(n){case c.CAPTION:case c.TABLE:{e.openElements.hasInTableScope(c.CAPTION)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(c.CAPTION),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=_.IN_TABLE,n===c.TABLE&&gi(e,t));break}case c.BODY:case c.COL:case c.COLGROUP:case c.HTML:case c.TBODY:case c.TD:case c.TFOOT:case c.TH:case c.THEAD:case c.TR:break;default:Fo(e,t)}}function Ad(e,t){switch(t.tagID){case c.HTML:{nt(e,t);break}case c.COL:{e._appendElement(t,O.HTML),t.ackSelfClosing=!0;break}case c.TEMPLATE:{Qt(e,t);break}default:Qs(e,t)}}function bw(e,t){switch(t.tagID){case c.COLGROUP:{e.openElements.currentTagId===c.COLGROUP&&(e.openElements.pop(),e.insertionMode=_.IN_TABLE);break}case c.TEMPLATE:{yr(e,t);break}case c.COL:break;default:Qs(e,t)}}function Qs(e,t){e.openElements.currentTagId===c.COLGROUP&&(e.openElements.pop(),e.insertionMode=_.IN_TABLE,e._processToken(t))}function Bo(e,t){switch(t.tagID){case c.TR:{e.openElements.clearBackToTableBodyContext(),e._insertElement(t,O.HTML),e.insertionMode=_.IN_ROW;break}case c.TH:case c.TD:{e.openElements.clearBackToTableBodyContext(),e._insertFakeElement(I.TR,c.TR),e.insertionMode=_.IN_ROW,Ho(e,t);break}case c.CAPTION:case c.COL:case c.COLGROUP:case c.TBODY:case c.TFOOT:case c.THEAD:{e.openElements.hasTableBodyContextInTableScope()&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=_.IN_TABLE,na(e,t));break}default:na(e,t)}}function rc(e,t){const n=t.tagID;switch(t.tagID){case c.TBODY:case c.TFOOT:case c.THEAD:{e.openElements.hasInTableScope(n)&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=_.IN_TABLE);break}case c.TABLE:{e.openElements.hasTableBodyContextInTableScope()&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=_.IN_TABLE,gi(e,t));break}case c.BODY:case c.CAPTION:case c.COL:case c.COLGROUP:case c.HTML:case c.TD:case c.TH:case c.TR:break;default:gi(e,t)}}function Ho(e,t){switch(t.tagID){case c.TH:case c.TD:{e.openElements.clearBackToTableRowContext(),e._insertElement(t,O.HTML),e.insertionMode=_.IN_CELL,e.activeFormattingElements.insertMarker();break}case c.CAPTION:case c.COL:case c.COLGROUP:case c.TBODY:case c.TFOOT:case c.THEAD:case c.TR:{e.openElements.hasInTableScope(c.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=_.IN_TABLE_BODY,Bo(e,t));break}default:na(e,t)}}function L1(e,t){switch(t.tagID){case c.TR:{e.openElements.hasInTableScope(c.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=_.IN_TABLE_BODY);break}case c.TABLE:{e.openElements.hasInTableScope(c.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=_.IN_TABLE_BODY,rc(e,t));break}case c.TBODY:case c.TFOOT:case c.THEAD:{(e.openElements.hasInTableScope(t.tagID)||e.openElements.hasInTableScope(c.TR))&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=_.IN_TABLE_BODY,rc(e,t));break}case c.BODY:case c.CAPTION:case c.COL:case c.COLGROUP:case c.HTML:case c.TD:case c.TH:break;default:gi(e,t)}}function Ew(e,t){const n=t.tagID;P1.has(n)?(e.openElements.hasInTableScope(c.TD)||e.openElements.hasInTableScope(c.TH))&&(e._closeTableCell(),Ho(e,t)):nt(e,t)}function Tw(e,t){const n=t.tagID;switch(n){case c.TD:case c.TH:{e.openElements.hasInTableScope(n)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(n),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=_.IN_ROW);break}case c.TABLE:case c.TBODY:case c.TFOOT:case c.THEAD:case c.TR:{e.openElements.hasInTableScope(n)&&(e._closeTableCell(),L1(e,t));break}case c.BODY:case c.CAPTION:case c.COL:case c.COLGROUP:case c.HTML:break;default:Fo(e,t)}}function R1(e,t){switch(t.tagID){case c.HTML:{nt(e,t);break}case c.OPTION:{e.openElements.currentTagId===c.OPTION&&e.openElements.pop(),e._insertElement(t,O.HTML);break}case c.OPTGROUP:{e.openElements.currentTagId===c.OPTION&&e.openElements.pop(),e.openElements.currentTagId===c.OPTGROUP&&e.openElements.pop(),e._insertElement(t,O.HTML);break}case c.HR:{e.openElements.currentTagId===c.OPTION&&e.openElements.pop(),e.openElements.currentTagId===c.OPTGROUP&&e.openElements.pop(),e._appendElement(t,O.HTML),t.ackSelfClosing=!0;break}case c.INPUT:case c.KEYGEN:case c.TEXTAREA:case c.SELECT:{e.openElements.hasInSelectScope(c.SELECT)&&(e.openElements.popUntilTagNamePopped(c.SELECT),e._resetInsertionMode(),t.tagID!==c.SELECT&&e._processStartTag(t));break}case c.SCRIPT:case c.TEMPLATE:{Qt(e,t);break}}}function D1(e,t){switch(t.tagID){case c.OPTGROUP:{e.openElements.stackTop>0&&e.openElements.currentTagId===c.OPTION&&e.openElements.tagIDs[e.openElements.stackTop-1]===c.OPTGROUP&&e.openElements.pop(),e.openElements.currentTagId===c.OPTGROUP&&e.openElements.pop();break}case c.OPTION:{e.openElements.currentTagId===c.OPTION&&e.openElements.pop();break}case c.SELECT:{e.openElements.hasInSelectScope(c.SELECT)&&(e.openElements.popUntilTagNamePopped(c.SELECT),e._resetInsertionMode());break}case c.TEMPLATE:{yr(e,t);break}}}function vw(e,t){const n=t.tagID;n===c.CAPTION||n===c.TABLE||n===c.TBODY||n===c.TFOOT||n===c.THEAD||n===c.TR||n===c.TD||n===c.TH?(e.openElements.popUntilTagNamePopped(c.SELECT),e._resetInsertionMode(),e._processStartTag(t)):R1(e,t)}function _w(e,t){const n=t.tagID;n===c.CAPTION||n===c.TABLE||n===c.TBODY||n===c.TFOOT||n===c.THEAD||n===c.TR||n===c.TD||n===c.TH?e.openElements.hasInTableScope(n)&&(e.openElements.popUntilTagNamePopped(c.SELECT),e._resetInsertionMode(),e.onEndTag(t)):D1(e,t)}function Sw(e,t){switch(t.tagID){case c.BASE:case c.BASEFONT:case c.BGSOUND:case c.LINK:case c.META:case c.NOFRAMES:case c.SCRIPT:case c.STYLE:case c.TEMPLATE:case c.TITLE:{Qt(e,t);break}case c.CAPTION:case c.COLGROUP:case c.TBODY:case c.TFOOT:case c.THEAD:{e.tmplInsertionModeStack[0]=_.IN_TABLE,e.insertionMode=_.IN_TABLE,na(e,t);break}case c.COL:{e.tmplInsertionModeStack[0]=_.IN_COLUMN_GROUP,e.insertionMode=_.IN_COLUMN_GROUP,Ad(e,t);break}case c.TR:{e.tmplInsertionModeStack[0]=_.IN_TABLE_BODY,e.insertionMode=_.IN_TABLE_BODY,Bo(e,t);break}case c.TD:case c.TH:{e.tmplInsertionModeStack[0]=_.IN_ROW,e.insertionMode=_.IN_ROW,Ho(e,t);break}default:e.tmplInsertionModeStack[0]=_.IN_BODY,e.insertionMode=_.IN_BODY,nt(e,t)}}function kw(e,t){t.tagID===c.TEMPLATE&&yr(e,t)}function O1(e,t){e.openElements.tmplCount>0?(e.openElements.popUntilTagNamePopped(c.TEMPLATE),e.activeFormattingElements.clearToLastMarker(),e.tmplInsertionModeStack.shift(),e._resetInsertionMode(),e.onEof(t)):wd(e,t)}function Cw(e,t){t.tagID===c.HTML?nt(e,t):Ks(e,t)}function M1(e,t){var n;if(t.tagID===c.HTML){if(e.fragmentContext||(e.insertionMode=_.AFTER_AFTER_BODY),e.options.sourceCodeLocationInfo&&e.openElements.tagIDs[0]===c.HTML){e._setEndLocation(e.openElements.items[0],t);const r=e.openElements.items[1];r&&!(!((n=e.treeAdapter.getNodeSourceCodeLocation(r))===null||n===void 0)&&n.endTag)&&e._setEndLocation(r,t)}}else Ks(e,t)}function Ks(e,t){e.insertionMode=_.IN_BODY,jo(e,t)}function Nw(e,t){switch(t.tagID){case c.HTML:{nt(e,t);break}case c.FRAMESET:{e._insertElement(t,O.HTML);break}case c.FRAME:{e._appendElement(t,O.HTML),t.ackSelfClosing=!0;break}case c.NOFRAMES:{Qt(e,t);break}}}function ww(e,t){t.tagID===c.FRAMESET&&!e.openElements.isRootHtmlElementCurrent()&&(e.openElements.pop(),!e.fragmentContext&&e.openElements.currentTagId!==c.FRAMESET&&(e.insertionMode=_.AFTER_FRAMESET))}function Aw(e,t){switch(t.tagID){case c.HTML:{nt(e,t);break}case c.NOFRAMES:{Qt(e,t);break}}}function Iw(e,t){t.tagID===c.HTML&&(e.insertionMode=_.AFTER_AFTER_FRAMESET)}function Pw(e,t){t.tagID===c.HTML?nt(e,t):ys(e,t)}function ys(e,t){e.insertionMode=_.IN_BODY,jo(e,t)}function Lw(e,t){switch(t.tagID){case c.HTML:{nt(e,t);break}case c.NOFRAMES:{Qt(e,t);break}}}function Rw(e,t){t.chars=ve,e._insertCharacters(t)}function Dw(e,t){e._insertCharacters(t),e.framesetOk=!1}function j1(e){for(;e.treeAdapter.getNamespaceURI(e.openElements.current)!==O.HTML&&e.openElements.currentTagId!==void 0&&!e._isIntegrationPoint(e.openElements.currentTagId,e.openElements.current);)e.openElements.pop()}function Ow(e,t){if(KC(t))j1(e),e._startTagOutsideForeignContent(t);else{const n=e._getAdjustedCurrentElement(),r=e.treeAdapter.getNamespaceURI(n);r===O.MATHML?E1(t):r===O.SVG&&(XC(t),T1(t)),Cd(t),t.selfClosing?e._appendElement(t,r):e._insertElement(t,r),t.ackSelfClosing=!0}}function Mw(e,t){if(t.tagID===c.P||t.tagID===c.BR){j1(e),e._endTagOutsideForeignContent(t);return}for(let n=e.openElements.stackTop;n>0;n--){const r=e.openElements.items[n];if(e.treeAdapter.getNamespaceURI(r)===O.HTML){e._endTagOutsideForeignContent(t);break}const a=e.treeAdapter.getTagName(r);if(a.toLowerCase()===t.tagName){t.tagName=a,e.openElements.shortenToLength(n);break}}}I.AREA,I.BASE,I.BASEFONT,I.BGSOUND,I.BR,I.COL,I.EMBED,I.FRAME,I.HR,I.IMG,I.INPUT,I.KEYGEN,I.LINK,I.META,I.PARAM,I.SOURCE,I.TRACK,I.WBR;const jw=/<(\/?)(iframe|noembed|noframes|plaintext|script|style|textarea|title|xmp)(?=[\t\n\f\r />])/gi,Fw=new Set(["mdxFlowExpression","mdxJsxFlowElement","mdxJsxTextElement","mdxTextExpression","mdxjsEsm"]),vp={sourceCodeLocationInfo:!0,scriptingEnabled:!1};function F1(e,t){const n=$w(e),r=u1("type",{handlers:{root:Bw,element:Hw,text:Uw,comment:H1,doctype:zw,raw:Yw},unknown:Ww}),a={parser:n?new bp(vp):bp.getFragmentParser(void 0,vp),handle(l){r(l,a)},stitches:!1,options:t||{}};r(e,a),fa(a,an());const i=n?a.parser.document:a.parser.getFragment(),o=Bk(i,{file:a.options.file});return a.stitches&&Mo(o,"comment",function(l,u,d){const f=l;if(f.value.stitch&&d&&u!==void 0){const h=d.children;return h[u]=f.value.stitch,u}}),o.type==="root"&&o.children.length===1&&o.children[0].type===e.type?o.children[0]:o}function B1(e,t){let n=-1;if(e)for(;++n<e.length;)t.handle(e[n])}function Bw(e,t){B1(e.children,t)}function Hw(e,t){Gw(e,t),B1(e.children,t),Vw(e,t)}function Uw(e,t){t.parser.tokenizer.state>4&&(t.parser.tokenizer.state=0);const n={type:ee.CHARACTER,chars:e.value,location:Ii(e)};fa(t,an(e)),t.parser.currentToken=n,t.parser._processToken(t.parser.currentToken)}function zw(e,t){const n={type:ee.DOCTYPE,name:"html",forceQuirks:!1,publicId:"",systemId:"",location:Ii(e)};fa(t,an(e)),t.parser.currentToken=n,t.parser._processToken(t.parser.currentToken)}function qw(e,t){t.stitches=!0;const n=Qw(e);if("children"in e&&"children"in n){const r=F1({type:"root",children:e.children},t.options);n.children=r.children}H1({type:"comment",value:{stitch:n}},t)}function H1(e,t){const n=e.value,r={type:ee.COMMENT,data:n,location:Ii(e)};fa(t,an(e)),t.parser.currentToken=r,t.parser._processToken(t.parser.currentToken)}function Yw(e,t){if(t.parser.tokenizer.preprocessor.html="",t.parser.tokenizer.preprocessor.pos=-1,t.parser.tokenizer.preprocessor.lastGapPos=-2,t.parser.tokenizer.preprocessor.gapStack=[],t.parser.tokenizer.preprocessor.skipNextNewLine=!1,t.parser.tokenizer.preprocessor.lastChunkWritten=!1,t.parser.tokenizer.preprocessor.endOfChunkHit=!1,t.parser.tokenizer.preprocessor.isEol=!1,U1(t,an(e)),t.parser.tokenizer.write(t.options.tagfilter?e.value.replace(jw,"&lt;$1$2"):e.value,!1),t.parser.tokenizer._runParsingLoop(),t.parser.tokenizer.state===72||t.parser.tokenizer.state===78){t.parser.tokenizer.preprocessor.lastChunkWritten=!0;const n=t.parser.tokenizer._consume();t.parser.tokenizer._callState(n)}}function Ww(e,t){const n=e;if(t.options.passThrough&&t.options.passThrough.includes(n.type))qw(n,t);else{let r="";throw Fw.has(n.type)&&(r=". It looks like you are using MDX nodes with `hast-util-raw` (or `rehype-raw`). If you use this because you are using remark or rehype plugins that inject `'html'` nodes, then please raise an issue with that plugin, as its a bad and slow idea. If you use this because you are using markdown syntax, then you have to configure this utility (or plugin) to pass through these nodes (see `passThrough` in docs), but you can also migrate to use the MDX syntax"),new Error("Cannot compile `"+n.type+"` node"+r)}}function fa(e,t){U1(e,t);const n=e.parser.tokenizer.currentCharacterToken;n&&n.location&&(n.location.endLine=e.parser.tokenizer.preprocessor.line,n.location.endCol=e.parser.tokenizer.preprocessor.col+1,n.location.endOffset=e.parser.tokenizer.preprocessor.offset+1,e.parser.currentToken=n,e.parser._processToken(e.parser.currentToken)),e.parser.tokenizer.paused=!1,e.parser.tokenizer.inLoop=!1,e.parser.tokenizer.active=!1,e.parser.tokenizer.returnState=De.DATA,e.parser.tokenizer.charRefCode=-1,e.parser.tokenizer.consumedAfterSnapshot=-1,e.parser.tokenizer.currentLocation=null,e.parser.tokenizer.currentCharacterToken=null,e.parser.tokenizer.currentToken=null,e.parser.tokenizer.currentAttr={name:"",value:""}}function U1(e,t){if(t&&t.offset!==void 0){const n={startLine:t.line,startCol:t.column,startOffset:t.offset,endLine:-1,endCol:-1,endOffset:-1};e.parser.tokenizer.preprocessor.lineStartPos=-t.column+1,e.parser.tokenizer.preprocessor.droppedBufferSize=t.offset,e.parser.tokenizer.preprocessor.line=t.line,e.parser.tokenizer.currentLocation=n}}function Gw(e,t){const n=e.tagName.toLowerCase();if(t.parser.tokenizer.state===De.PLAINTEXT)return;fa(t,an(e));const r=t.parser.openElements.current;let a="namespaceURI"in r?r.namespaceURI:rr.html;a===rr.html&&n==="svg"&&(a=rr.svg);const i=eC({...e,children:[]},{space:a===rr.svg?"svg":"html"}),o={type:ee.START_TAG,tagName:n,tagID:ha(n),selfClosing:!1,ackSelfClosing:!1,attrs:"attrs"in i?i.attrs:[],location:Ii(e)};t.parser.currentToken=o,t.parser._processToken(t.parser.currentToken),t.parser.tokenizer.lastStartTagName=n}function Vw(e,t){const n=e.tagName.toLowerCase();if(!t.parser.tokenizer.inForeignNode&&lC.includes(n)||t.parser.tokenizer.state===De.PLAINTEXT)return;fa(t,Io(e));const r={type:ee.END_TAG,tagName:n,tagID:ha(n),selfClosing:!1,ackSelfClosing:!1,attrs:[],location:Ii(e)};t.parser.currentToken=r,t.parser._processToken(t.parser.currentToken),n===t.parser.tokenizer.lastStartTagName&&(t.parser.tokenizer.state===De.RCDATA||t.parser.tokenizer.state===De.RAWTEXT||t.parser.tokenizer.state===De.SCRIPT_DATA)&&(t.parser.tokenizer.state=De.DATA)}function $w(e){const t=e.type==="root"?e.children[0]:e;return!!(t&&(t.type==="doctype"||t.type==="element"&&t.tagName.toLowerCase()==="html"))}function Ii(e){const t=an(e)||{line:void 0,column:void 0,offset:void 0},n=Io(e)||{line:void 0,column:void 0,offset:void 0};return{startLine:t.line,startCol:t.column,startOffset:t.offset,endLine:n.line,endCol:n.column,endOffset:n.offset}}function Qw(e){return"children"in e?ta({...e,children:[]}):ta(e)}function Ae(e){return function(t,n){return F1(t,{...e,file:n})}}function _p(e,t){const n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,a=n.indexOf(t);for(;a!==-1;)r++,a=n.indexOf(t,a+t.length);return r}function Kw(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function Xw(e,t,n){const a=Do((n||{}).ignore||[]),i=Jw(t);let o=-1;for(;++o<i.length;)$g(e,"text",l);function l(d,f){let h=-1,p;for(;++h<f.length;){const m=f[h],x=p?p.children:void 0;if(a(m,x?x.indexOf(m):void 0,p))return;p=m}if(p)return u(d,f)}function u(d,f){const h=f[f.length-1],p=i[o][0],m=i[o][1];let x=0;const A=h.children.indexOf(d);let g=!1,y=[];p.lastIndex=0;let E=p.exec(d.value);for(;E;){const N=E.index,P={index:E.index,input:E.input,stack:[...f,d]};let C=m(...E,P);if(typeof C=="string"&&(C=C.length>0?{type:"text",value:C}:void 0),C===!1?p.lastIndex=N+1:(x!==N&&y.push({type:"text",value:d.value.slice(x,N)}),Array.isArray(C)?y.push(...C):C&&y.push(C),x=N+E[0].length,g=!0),!p.global)break;E=p.exec(d.value)}return g?(x<d.value.length&&y.push({type:"text",value:d.value.slice(x)}),h.children.splice(A,1,...y)):y=[d],A+y.length}}function Jw(e){const t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const n=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<n.length;){const a=n[r];t.push([Zw(a[0]),e3(a[1])])}return t}function Zw(e){return typeof e=="string"?new RegExp(Kw(e),"g"):e}function e3(e){return typeof e=="function"?e:function(){return e}}const Ll="phrasing",Rl=["autolink","link","image","label"];function t3(){return{transforms:[l3],enter:{literalAutolink:r3,literalAutolinkEmail:Dl,literalAutolinkHttp:Dl,literalAutolinkWww:Dl},exit:{literalAutolink:o3,literalAutolinkEmail:s3,literalAutolinkHttp:a3,literalAutolinkWww:i3}}}function n3(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Ll,notInConstruct:Rl},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Ll,notInConstruct:Rl},{character:":",before:"[ps]",after:"\\/",inConstruct:Ll,notInConstruct:Rl}]}}function r3(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Dl(e){this.config.enter.autolinkProtocol.call(this,e)}function a3(e){this.config.exit.autolinkProtocol.call(this,e)}function i3(e){this.config.exit.data.call(this,e);const t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function s3(e){this.config.exit.autolinkEmail.call(this,e)}function o3(e){this.exit(e)}function l3(e){Xw(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,u3],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),c3]],{ignore:["link","linkReference"]})}function u3(e,t,n,r,a){let i="";if(!z1(a)||(/^w/i.test(t)&&(n=t+n,t="",i="http://"),!d3(n)))return!1;const o=h3(n+r);if(!o[0])return!1;const l={type:"link",title:null,url:i+t+o[0],children:[{type:"text",value:t+o[0]}]};return o[1]?[l,{type:"text",value:o[1]}]:l}function c3(e,t,n,r){return!z1(r,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function d3(e){const t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function h3(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")");const a=_p(e,"(");let i=_p(e,")");for(;r!==-1&&a>i;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),i++;return[e,n]}function z1(e,t){const n=e.input.charCodeAt(e.index-1);return(e.index===0||hr(n)||Po(n))&&(!t||n!==47)}q1.peek=T3;function f3(){this.buffer()}function p3(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function m3(){this.buffer()}function g3(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function y3(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=Vt(this.sliceSerialize(e)).toLowerCase(),n.label=t}function x3(e){this.exit(e)}function b3(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=Vt(this.sliceSerialize(e)).toLowerCase(),n.label=t}function E3(e){this.exit(e)}function T3(){return"["}function q1(e,t,n,r){const a=n.createTracker(r);let i=a.move("[^");const o=n.enter("footnoteReference"),l=n.enter("reference");return i+=a.move(n.safe(n.associationId(e),{after:"]",before:i})),l(),o(),i+=a.move("]"),i}function v3(){return{enter:{gfmFootnoteCallString:f3,gfmFootnoteCall:p3,gfmFootnoteDefinitionLabelString:m3,gfmFootnoteDefinition:g3},exit:{gfmFootnoteCallString:y3,gfmFootnoteCall:x3,gfmFootnoteDefinitionLabelString:b3,gfmFootnoteDefinition:E3}}}function _3(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:q1},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(r,a,i,o){const l=i.createTracker(o);let u=l.move("[^");const d=i.enter("footnoteDefinition"),f=i.enter("label");return u+=l.move(i.safe(i.associationId(r),{before:u,after:"]"})),f(),u+=l.move("]:"),r.children&&r.children.length>0&&(l.shift(4),u+=l.move((t?`
`:" ")+i.indentLines(i.containerFlow(r,l.current()),t?Y1:S3))),d(),u}}function S3(e,t,n){return t===0?e:Y1(e,t,n)}function Y1(e,t,n){return(n?"":"    ")+e}const k3=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];W1.peek=I3;function C3(){return{canContainEols:["delete"],enter:{strikethrough:w3},exit:{strikethrough:A3}}}function N3(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:k3}],handlers:{delete:W1}}}function w3(e){this.enter({type:"delete",children:[]},e)}function A3(e){this.exit(e)}function W1(e,t,n,r){const a=n.createTracker(r),i=n.enter("strikethrough");let o=a.move("~~");return o+=n.containerPhrasing(e,{...a.current(),before:o,after:"~"}),o+=a.move("~~"),i(),o}function I3(){return"~"}function P3(e){return e.length}function L3(e,t){const n=t||{},r=(n.align||[]).concat(),a=n.stringLength||P3,i=[],o=[],l=[],u=[];let d=0,f=-1;for(;++f<e.length;){const S=[],A=[];let g=-1;for(e[f].length>d&&(d=e[f].length);++g<e[f].length;){const y=R3(e[f][g]);if(n.alignDelimiters!==!1){const E=a(y);A[g]=E,(u[g]===void 0||E>u[g])&&(u[g]=E)}S.push(y)}o[f]=S,l[f]=A}let h=-1;if(typeof r=="object"&&"length"in r)for(;++h<d;)i[h]=Sp(r[h]);else{const S=Sp(r);for(;++h<d;)i[h]=S}h=-1;const p=[],m=[];for(;++h<d;){const S=i[h];let A="",g="";S===99?(A=":",g=":"):S===108?A=":":S===114&&(g=":");let y=n.alignDelimiters===!1?1:Math.max(1,u[h]-A.length-g.length);const E=A+"-".repeat(y)+g;n.alignDelimiters!==!1&&(y=A.length+y+g.length,y>u[h]&&(u[h]=y),m[h]=y),p[h]=E}o.splice(1,0,p),l.splice(1,0,m),f=-1;const x=[];for(;++f<o.length;){const S=o[f],A=l[f];h=-1;const g=[];for(;++h<d;){const y=S[h]||"";let E="",N="";if(n.alignDelimiters!==!1){const P=u[h]-(A[h]||0),C=i[h];C===114?E=" ".repeat(P):C===99?P%2?(E=" ".repeat(P/2+.5),N=" ".repeat(P/2-.5)):(E=" ".repeat(P/2),N=E):N=" ".repeat(P)}n.delimiterStart!==!1&&!h&&g.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&y==="")&&(n.delimiterStart!==!1||h)&&g.push(" "),n.alignDelimiters!==!1&&g.push(E),g.push(y),n.alignDelimiters!==!1&&g.push(N),n.padding!==!1&&g.push(" "),(n.delimiterEnd!==!1||h!==d-1)&&g.push("|")}x.push(n.delimiterEnd===!1?g.join("").replace(/ +$/,""):g.join(""))}return x.join(`
`)}function R3(e){return e==null?"":String(e)}function Sp(e){const t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function D3(e,t,n,r){const a=n.enter("blockquote"),i=n.createTracker(r);i.move("> "),i.shift(2);const o=n.indentLines(n.containerFlow(e,i.current()),O3);return a(),o}function O3(e,t,n){return">"+(n?"":" ")+e}function M3(e,t){return kp(e,t.inConstruct,!0)&&!kp(e,t.notInConstruct,!1)}function kp(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function Cp(e,t,n,r){let a=-1;for(;++a<n.unsafe.length;)if(n.unsafe[a].character===`
`&&M3(n.stack,n.unsafe[a]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function j3(e,t){const n=String(e);let r=n.indexOf(t),a=r,i=0,o=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===a?++i>o&&(o=i):i=1,a=r+t.length,r=n.indexOf(t,a);return o}function F3(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function B3(e){const t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function H3(e,t,n,r){const a=B3(n),i=e.value||"",o=a==="`"?"GraveAccent":"Tilde";if(F3(e,n)){const h=n.enter("codeIndented"),p=n.indentLines(i,U3);return h(),p}const l=n.createTracker(r),u=a.repeat(Math.max(j3(i,a)+1,3)),d=n.enter("codeFenced");let f=l.move(u);if(e.lang){const h=n.enter(`codeFencedLang${o}`);f+=l.move(n.safe(e.lang,{before:f,after:" ",encode:["`"],...l.current()})),h()}if(e.lang&&e.meta){const h=n.enter(`codeFencedMeta${o}`);f+=l.move(" "),f+=l.move(n.safe(e.meta,{before:f,after:`
`,encode:["`"],...l.current()})),h()}return f+=l.move(`
`),i&&(f+=l.move(i+`
`)),f+=l.move(u),d(),f}function U3(e,t,n){return(n?"":"    ")+e}function Id(e){const t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function z3(e,t,n,r){const a=Id(n),i=a==='"'?"Quote":"Apostrophe",o=n.enter("definition");let l=n.enter("label");const u=n.createTracker(r);let d=u.move("[");return d+=u.move(n.safe(n.associationId(e),{before:d,after:"]",...u.current()})),d+=u.move("]: "),l(),!e.url||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),d+=u.move("<"),d+=u.move(n.safe(e.url,{before:d,after:">",...u.current()})),d+=u.move(">")):(l=n.enter("destinationRaw"),d+=u.move(n.safe(e.url,{before:d,after:e.title?" ":`
`,...u.current()}))),l(),e.title&&(l=n.enter(`title${i}`),d+=u.move(" "+a),d+=u.move(n.safe(e.title,{before:d,after:a,...u.current()})),d+=u.move(a),l()),o(),d}function q3(e){const t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function yi(e){return"&#x"+e.toString(16).toUpperCase()+";"}function Xs(e,t,n){const r=ea(e),a=ea(t);return r===void 0?a===void 0?n==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:a===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?a===void 0?{inside:!1,outside:!1}:a===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:a===void 0?{inside:!1,outside:!1}:a===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}G1.peek=Y3;function G1(e,t,n,r){const a=q3(n),i=n.enter("emphasis"),o=n.createTracker(r),l=o.move(a);let u=o.move(n.containerPhrasing(e,{after:a,before:l,...o.current()}));const d=u.charCodeAt(0),f=Xs(r.before.charCodeAt(r.before.length-1),d,a);f.inside&&(u=yi(d)+u.slice(1));const h=u.charCodeAt(u.length-1),p=Xs(r.after.charCodeAt(0),h,a);p.inside&&(u=u.slice(0,-1)+yi(h));const m=o.move(a);return i(),n.attentionEncodeSurroundingInfo={after:p.outside,before:f.outside},l+u+m}function Y3(e,t,n){return n.options.emphasis||"*"}function W3(e,t){let n=!1;return Mo(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=!0,Vu}),!!((!e.depth||e.depth<3)&&md(e)&&(t.options.setext||n))}function G3(e,t,n,r){const a=Math.max(Math.min(6,e.depth||1),1),i=n.createTracker(r);if(W3(e,n)){const f=n.enter("headingSetext"),h=n.enter("phrasing"),p=n.containerPhrasing(e,{...i.current(),before:`
`,after:`
`});return h(),f(),p+`
`+(a===1?"=":"-").repeat(p.length-(Math.max(p.lastIndexOf("\r"),p.lastIndexOf(`
`))+1))}const o="#".repeat(a),l=n.enter("headingAtx"),u=n.enter("phrasing");i.move(o+" ");let d=n.containerPhrasing(e,{before:"# ",after:`
`,...i.current()});return/^[\t ]/.test(d)&&(d=yi(d.charCodeAt(0))+d.slice(1)),d=d?o+" "+d:o,n.options.closeAtx&&(d+=" "+o),u(),l(),d}V1.peek=V3;function V1(e){return e.value||""}function V3(){return"<"}$1.peek=$3;function $1(e,t,n,r){const a=Id(n),i=a==='"'?"Quote":"Apostrophe",o=n.enter("image");let l=n.enter("label");const u=n.createTracker(r);let d=u.move("![");return d+=u.move(n.safe(e.alt,{before:d,after:"]",...u.current()})),d+=u.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),d+=u.move("<"),d+=u.move(n.safe(e.url,{before:d,after:">",...u.current()})),d+=u.move(">")):(l=n.enter("destinationRaw"),d+=u.move(n.safe(e.url,{before:d,after:e.title?" ":")",...u.current()}))),l(),e.title&&(l=n.enter(`title${i}`),d+=u.move(" "+a),d+=u.move(n.safe(e.title,{before:d,after:a,...u.current()})),d+=u.move(a),l()),d+=u.move(")"),o(),d}function $3(){return"!"}Q1.peek=Q3;function Q1(e,t,n,r){const a=e.referenceType,i=n.enter("imageReference");let o=n.enter("label");const l=n.createTracker(r);let u=l.move("![");const d=n.safe(e.alt,{before:u,after:"]",...l.current()});u+=l.move(d+"]["),o();const f=n.stack;n.stack=[],o=n.enter("reference");const h=n.safe(n.associationId(e),{before:u,after:"]",...l.current()});return o(),n.stack=f,i(),a==="full"||!d||d!==h?u+=l.move(h+"]"):a==="shortcut"?u=u.slice(0,-1):u+=l.move("]"),u}function Q3(){return"!"}K1.peek=K3;function K1(e,t,n){let r=e.value||"",a="`",i=-1;for(;new RegExp("(^|[^`])"+a+"([^`]|$)").test(r);)a+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++i<n.unsafe.length;){const o=n.unsafe[i],l=n.compilePattern(o);let u;if(o.atBreak)for(;u=l.exec(r);){let d=u.index;r.charCodeAt(d)===10&&r.charCodeAt(d-1)===13&&d--,r=r.slice(0,d)+" "+r.slice(u.index+1)}}return a+r+a}function K3(){return"`"}function X1(e,t){const n=md(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}J1.peek=X3;function J1(e,t,n,r){const a=Id(n),i=a==='"'?"Quote":"Apostrophe",o=n.createTracker(r);let l,u;if(X1(e,n)){const f=n.stack;n.stack=[],l=n.enter("autolink");let h=o.move("<");return h+=o.move(n.containerPhrasing(e,{before:h,after:">",...o.current()})),h+=o.move(">"),l(),n.stack=f,h}l=n.enter("link"),u=n.enter("label");let d=o.move("[");return d+=o.move(n.containerPhrasing(e,{before:d,after:"](",...o.current()})),d+=o.move("]("),u(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(u=n.enter("destinationLiteral"),d+=o.move("<"),d+=o.move(n.safe(e.url,{before:d,after:">",...o.current()})),d+=o.move(">")):(u=n.enter("destinationRaw"),d+=o.move(n.safe(e.url,{before:d,after:e.title?" ":")",...o.current()}))),u(),e.title&&(u=n.enter(`title${i}`),d+=o.move(" "+a),d+=o.move(n.safe(e.title,{before:d,after:a,...o.current()})),d+=o.move(a),u()),d+=o.move(")"),l(),d}function X3(e,t,n){return X1(e,n)?"<":"["}Z1.peek=J3;function Z1(e,t,n,r){const a=e.referenceType,i=n.enter("linkReference");let o=n.enter("label");const l=n.createTracker(r);let u=l.move("[");const d=n.containerPhrasing(e,{before:u,after:"]",...l.current()});u+=l.move(d+"]["),o();const f=n.stack;n.stack=[],o=n.enter("reference");const h=n.safe(n.associationId(e),{before:u,after:"]",...l.current()});return o(),n.stack=f,i(),a==="full"||!d||d!==h?u+=l.move(h+"]"):a==="shortcut"?u=u.slice(0,-1):u+=l.move("]"),u}function J3(){return"["}function Pd(e){const t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function Z3(e){const t=Pd(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function eA(e){const t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function ey(e){const t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function tA(e,t,n,r){const a=n.enter("list"),i=n.bulletCurrent;let o=e.ordered?eA(n):Pd(n);const l=e.ordered?o==="."?")":".":Z3(n);let u=t&&n.bulletLastUsed?o===n.bulletLastUsed:!1;if(!e.ordered){const f=e.children?e.children[0]:void 0;if((o==="*"||o==="-")&&f&&(!f.children||!f.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(u=!0),ey(n)===o&&f){let h=-1;for(;++h<e.children.length;){const p=e.children[h];if(p&&p.type==="listItem"&&p.children&&p.children[0]&&p.children[0].type==="thematicBreak"){u=!0;break}}}}u&&(o=l),n.bulletCurrent=o;const d=n.containerFlow(e,r);return n.bulletLastUsed=o,n.bulletCurrent=i,a(),d}function nA(e){const t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function rA(e,t,n,r){const a=nA(n);let i=n.bulletCurrent||Pd(n);t&&t.type==="list"&&t.ordered&&(i=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+i);let o=i.length+1;(a==="tab"||a==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(o=Math.ceil(o/4)*4);const l=n.createTracker(r);l.move(i+" ".repeat(o-i.length)),l.shift(o);const u=n.enter("listItem"),d=n.indentLines(n.containerFlow(e,l.current()),f);return u(),d;function f(h,p,m){return p?(m?"":" ".repeat(o))+h:(m?i:i+" ".repeat(o-i.length))+h}}function aA(e,t,n,r){const a=n.enter("paragraph"),i=n.enter("phrasing"),o=n.containerPhrasing(e,r);return i(),a(),o}const iA=Do(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function sA(e,t,n,r){return(e.children.some(function(o){return iA(o)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function oA(e){const t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}ty.peek=lA;function ty(e,t,n,r){const a=oA(n),i=n.enter("strong"),o=n.createTracker(r),l=o.move(a+a);let u=o.move(n.containerPhrasing(e,{after:a,before:l,...o.current()}));const d=u.charCodeAt(0),f=Xs(r.before.charCodeAt(r.before.length-1),d,a);f.inside&&(u=yi(d)+u.slice(1));const h=u.charCodeAt(u.length-1),p=Xs(r.after.charCodeAt(0),h,a);p.inside&&(u=u.slice(0,-1)+yi(h));const m=o.move(a+a);return i(),n.attentionEncodeSurroundingInfo={after:p.outside,before:f.outside},l+u+m}function lA(e,t,n){return n.options.strong||"*"}function uA(e,t,n,r){return n.safe(e.value,r)}function cA(e){const t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function dA(e,t,n){const r=(ey(n)+(n.options.ruleSpaces?" ":"")).repeat(cA(n));return n.options.ruleSpaces?r.slice(0,-1):r}const ny={blockquote:D3,break:Cp,code:H3,definition:z3,emphasis:G1,hardBreak:Cp,heading:G3,html:V1,image:$1,imageReference:Q1,inlineCode:K1,link:J1,linkReference:Z1,list:tA,listItem:rA,paragraph:aA,root:sA,strong:ty,text:uA,thematicBreak:dA};function hA(){return{enter:{table:fA,tableData:Np,tableHeader:Np,tableRow:mA},exit:{codeText:gA,table:pA,tableData:Ol,tableHeader:Ol,tableRow:Ol}}}function fA(e){const t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=!0}function pA(e){this.exit(e),this.data.inTable=void 0}function mA(e){this.enter({type:"tableRow",children:[]},e)}function Ol(e){this.exit(e)}function Np(e){this.enter({type:"tableCell",children:[]},e)}function gA(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,yA));const n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function yA(e,t){return t==="|"?t:e}function xA(e){const t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,a=t.stringLength,i=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:p,table:o,tableCell:u,tableRow:l}};function o(m,x,S,A){return d(f(m,S,A),m.align)}function l(m,x,S,A){const g=h(m,S,A),y=d([g]);return y.slice(0,y.indexOf(`
`))}function u(m,x,S,A){const g=S.enter("tableCell"),y=S.enter("phrasing"),E=S.containerPhrasing(m,{...A,before:i,after:i});return y(),g(),E}function d(m,x){return L3(m,{align:x,alignDelimiters:r,padding:n,stringLength:a})}function f(m,x,S){const A=m.children;let g=-1;const y=[],E=x.enter("table");for(;++g<A.length;)y[g]=h(A[g],x,S);return E(),y}function h(m,x,S){const A=m.children;let g=-1;const y=[],E=x.enter("tableRow");for(;++g<A.length;)y[g]=u(A[g],m,x,S);return E(),y}function p(m,x,S){let A=ny.inlineCode(m,x,S);return S.stack.includes("tableCell")&&(A=A.replace(/\|/g,"\\$&")),A}}function bA(){return{exit:{taskListCheckValueChecked:wp,taskListCheckValueUnchecked:wp,paragraph:TA}}}function EA(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:vA}}}function wp(e){const t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function TA(e){const t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){const n=this.stack[this.stack.length-1];n.type;const r=n.children[0];if(r&&r.type==="text"){const a=t.children;let i=-1,o;for(;++i<a.length;){const l=a[i];if(l.type==="paragraph"){o=l;break}}o===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function vA(e,t,n,r){const a=e.children[0],i=typeof e.checked=="boolean"&&a&&a.type==="paragraph",o="["+(e.checked?"x":" ")+"] ",l=n.createTracker(r);i&&l.move(o);let u=ny.listItem(e,t,n,{...r,...l.current()});return i&&(u=u.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,d)),u;function d(f){return f+o}}function _A(){return[t3(),v3(),C3(),hA(),bA()]}function SA(e){return{extensions:[n3(),_3(e),N3(),xA(e),EA()]}}const kA={tokenize:PA,partial:!0},ry={tokenize:LA,partial:!0},ay={tokenize:RA,partial:!0},iy={tokenize:DA,partial:!0},CA={tokenize:OA,partial:!0},sy={name:"wwwAutolink",tokenize:AA,previous:ly},oy={name:"protocolAutolink",tokenize:IA,previous:uy},En={name:"emailAutolink",tokenize:wA,previous:cy},sn={};function NA(){return{text:sn}}let Kn=48;for(;Kn<123;)sn[Kn]=En,Kn++,Kn===58?Kn=65:Kn===91&&(Kn=97);sn[43]=En;sn[45]=En;sn[46]=En;sn[95]=En;sn[72]=[En,oy];sn[104]=[En,oy];sn[87]=[En,sy];sn[119]=[En,sy];function wA(e,t,n){const r=this;let a,i;return o;function o(h){return!ac(h)||!cy.call(r,r.previous)||Ld(r.events)?n(h):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),l(h))}function l(h){return ac(h)?(e.consume(h),l):h===64?(e.consume(h),u):n(h)}function u(h){return h===46?e.check(CA,f,d)(h):h===45||h===95||Ze(h)?(i=!0,e.consume(h),u):f(h)}function d(h){return e.consume(h),a=!0,u}function f(h){return i&&a&&at(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(h)):n(h)}}function AA(e,t,n){const r=this;return a;function a(o){return o!==87&&o!==119||!ly.call(r,r.previous)||Ld(r.events)?n(o):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(kA,e.attempt(ry,e.attempt(ay,i),n),n)(o))}function i(o){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(o)}}function IA(e,t,n){const r=this;let a="",i=!1;return o;function o(h){return(h===72||h===104)&&uy.call(r,r.previous)&&!Ld(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),a+=String.fromCodePoint(h),e.consume(h),l):n(h)}function l(h){if(at(h)&&a.length<5)return a+=String.fromCodePoint(h),e.consume(h),l;if(h===58){const p=a.toLowerCase();if(p==="http"||p==="https")return e.consume(h),u}return n(h)}function u(h){return h===47?(e.consume(h),i?d:(i=!0,u)):n(h)}function d(h){return h===null||Gs(h)||pe(h)||hr(h)||Po(h)?n(h):e.attempt(ry,e.attempt(ay,f),n)(h)}function f(h){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(h)}}function PA(e,t,n){let r=0;return a;function a(o){return(o===87||o===119)&&r<3?(r++,e.consume(o),a):o===46&&r===3?(e.consume(o),i):n(o)}function i(o){return o===null?n(o):t(o)}}function LA(e,t,n){let r,a,i;return o;function o(d){return d===46||d===95?e.check(iy,u,l)(d):d===null||pe(d)||hr(d)||d!==45&&Po(d)?u(d):(i=!0,e.consume(d),o)}function l(d){return d===95?r=!0:(a=r,r=void 0),e.consume(d),o}function u(d){return a||r||!i?n(d):t(d)}}function RA(e,t){let n=0,r=0;return a;function a(o){return o===40?(n++,e.consume(o),a):o===41&&r<n?i(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(iy,t,i)(o):o===null||pe(o)||hr(o)?t(o):(e.consume(o),a)}function i(o){return o===41&&r++,e.consume(o),a}}function DA(e,t,n){return r;function r(l){return l===33||l===34||l===39||l===41||l===42||l===44||l===46||l===58||l===59||l===63||l===95||l===126?(e.consume(l),r):l===38?(e.consume(l),i):l===93?(e.consume(l),a):l===60||l===null||pe(l)||hr(l)?t(l):n(l)}function a(l){return l===null||l===40||l===91||pe(l)||hr(l)?t(l):r(l)}function i(l){return at(l)?o(l):n(l)}function o(l){return l===59?(e.consume(l),r):at(l)?(e.consume(l),o):n(l)}}function OA(e,t,n){return r;function r(i){return e.consume(i),a}function a(i){return Ze(i)?n(i):t(i)}}function ly(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||pe(e)}function uy(e){return!at(e)}function cy(e){return!(e===47||ac(e))}function ac(e){return e===43||e===45||e===46||e===95||Ze(e)}function Ld(e){let t=e.length,n=!1;for(;t--;){const r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const MA={tokenize:YA,partial:!0};function jA(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:UA,continuation:{tokenize:zA},exit:qA}},text:{91:{name:"gfmFootnoteCall",tokenize:HA},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:FA,resolveTo:BA}}}}function FA(e,t,n){const r=this;let a=r.events.length;const i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o;for(;a--;){const u=r.events[a][1];if(u.type==="labelImage"){o=u;break}if(u.type==="gfmFootnoteCall"||u.type==="labelLink"||u.type==="label"||u.type==="image"||u.type==="link")break}return l;function l(u){if(!o||!o._balanced)return n(u);const d=Vt(r.sliceSerialize({start:o.end,end:r.now()}));return d.codePointAt(0)!==94||!i.includes(d.slice(1))?n(u):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(u),e.exit("gfmFootnoteCallLabelMarker"),t(u))}}function BA(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},a={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};a.end.column++,a.end.offset++,a.end._bufferIndex++;const i={type:"gfmFootnoteCallString",start:Object.assign({},a.end),end:Object.assign({},e[e.length-1][1].start)},o={type:"chunkString",contentType:"string",start:Object.assign({},i.start),end:Object.assign({},i.end)},l=[e[n+1],e[n+2],["enter",r,t],e[n+3],e[n+4],["enter",a,t],["exit",a,t],["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t],e[e.length-2],e[e.length-1],["exit",r,t]];return e.splice(n,e.length-n+1,...l),e}function HA(e,t,n){const r=this,a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let i=0,o;return l;function l(h){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(h),e.exit("gfmFootnoteCallLabelMarker"),u}function u(h){return h!==94?n(h):(e.enter("gfmFootnoteCallMarker"),e.consume(h),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",d)}function d(h){if(i>999||h===93&&!o||h===null||h===91||pe(h))return n(h);if(h===93){e.exit("chunkString");const p=e.exit("gfmFootnoteCallString");return a.includes(Vt(r.sliceSerialize(p)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(h),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(h)}return pe(h)||(o=!0),i++,e.consume(h),h===92?f:d}function f(h){return h===91||h===92||h===93?(e.consume(h),i++,d):d(h)}}function UA(e,t,n){const r=this,a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let i,o=0,l;return u;function u(x){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(x),e.exit("gfmFootnoteDefinitionLabelMarker"),d}function d(x){return x===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(x),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",f):n(x)}function f(x){if(o>999||x===93&&!l||x===null||x===91||pe(x))return n(x);if(x===93){e.exit("chunkString");const S=e.exit("gfmFootnoteDefinitionLabelString");return i=Vt(r.sliceSerialize(S)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(x),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),p}return pe(x)||(l=!0),o++,e.consume(x),x===92?h:f}function h(x){return x===91||x===92||x===93?(e.consume(x),o++,f):f(x)}function p(x){return x===58?(e.enter("definitionMarker"),e.consume(x),e.exit("definitionMarker"),a.includes(i)||a.push(i),oe(e,m,"gfmFootnoteDefinitionWhitespace")):n(x)}function m(x){return t(x)}}function zA(e,t,n){return e.check(Ci,t,e.attempt(MA,t,n))}function qA(e){e.exit("gfmFootnoteDefinition")}function YA(e,t,n){const r=this;return oe(e,a,"gfmFootnoteDefinitionIndent",5);function a(i){const o=r.events[r.events.length-1];return o&&o[1].type==="gfmFootnoteDefinitionIndent"&&o[2].sliceSerialize(o[1],!0).length===4?t(i):n(i)}}function WA(e){let n=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:i,resolveAll:a};return n==null&&(n=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function a(o,l){let u=-1;for(;++u<o.length;)if(o[u][0]==="enter"&&o[u][1].type==="strikethroughSequenceTemporary"&&o[u][1]._close){let d=u;for(;d--;)if(o[d][0]==="exit"&&o[d][1].type==="strikethroughSequenceTemporary"&&o[d][1]._open&&o[u][1].end.offset-o[u][1].start.offset===o[d][1].end.offset-o[d][1].start.offset){o[u][1].type="strikethroughSequence",o[d][1].type="strikethroughSequence";const f={type:"strikethrough",start:Object.assign({},o[d][1].start),end:Object.assign({},o[u][1].end)},h={type:"strikethroughText",start:Object.assign({},o[d][1].end),end:Object.assign({},o[u][1].start)},p=[["enter",f,l],["enter",o[d][1],l],["exit",o[d][1],l],["enter",h,l]],m=l.parser.constructs.insideSpan.null;m&&St(p,p.length,0,Lo(m,o.slice(d+1,u),l)),St(p,p.length,0,[["exit",h,l],["enter",o[u][1],l],["exit",o[u][1],l],["exit",f,l]]),St(o,d-1,u-d+3,p),u=d+p.length-2;break}}for(u=-1;++u<o.length;)o[u][1].type==="strikethroughSequenceTemporary"&&(o[u][1].type="data");return o}function i(o,l,u){const d=this.previous,f=this.events;let h=0;return p;function p(x){return d===126&&f[f.length-1][1].type!=="characterEscape"?u(x):(o.enter("strikethroughSequenceTemporary"),m(x))}function m(x){const S=ea(d);if(x===126)return h>1?u(x):(o.consume(x),h++,m);if(h<2&&!n)return u(x);const A=o.exit("strikethroughSequenceTemporary"),g=ea(x);return A._open=!g||g===2&&!!S,A._close=!S||S===2&&!!g,l(x)}}}class GA{constructor(){this.map=[]}add(t,n,r){VA(this,t,n,r)}consume(t){if(this.map.sort(function(i,o){return i[0]-o[0]}),this.map.length===0)return;let n=this.map.length;const r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let a=r.pop();for(;a;){for(const i of a)t.push(i);a=r.pop()}this.map.length=0}}function VA(e,t,n,r){let a=0;if(!(n===0&&r.length===0)){for(;a<e.map.length;){if(e.map[a][0]===t){e.map[a][1]+=n,e.map[a][2].push(...r);return}a+=1}e.map.push([t,n,r])}}function $A(e,t){let n=!1;const r=[];for(;t<e.length;){const a=e[t];if(n){if(a[0]==="enter")a[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(a[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){const i=r.length-1;r[i]=r[i]==="left"?"center":"right"}}else if(a[1].type==="tableDelimiterRow")break}else a[0]==="enter"&&a[1].type==="tableDelimiterRow"&&(n=!0);t+=1}return r}function QA(){return{flow:{null:{name:"table",tokenize:KA,resolveAll:XA}}}}function KA(e,t,n){const r=this;let a=0,i=0,o;return l;function l(w){let U=r.events.length-1;for(;U>-1;){const me=r.events[U][1].type;if(me==="lineEnding"||me==="linePrefix")U--;else break}const G=U>-1?r.events[U][1].type:null,te=G==="tableHead"||G==="tableRow"?C:u;return te===C&&r.parser.lazy[r.now().line]?n(w):te(w)}function u(w){return e.enter("tableHead"),e.enter("tableRow"),d(w)}function d(w){return w===124||(o=!0,i+=1),f(w)}function f(w){return w===null?n(w):$(w)?i>1?(i=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),m):n(w):ne(w)?oe(e,f,"whitespace")(w):(i+=1,o&&(o=!1,a+=1),w===124?(e.enter("tableCellDivider"),e.consume(w),e.exit("tableCellDivider"),o=!0,f):(e.enter("data"),h(w)))}function h(w){return w===null||w===124||pe(w)?(e.exit("data"),f(w)):(e.consume(w),w===92?p:h)}function p(w){return w===92||w===124?(e.consume(w),h):h(w)}function m(w){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(w):(e.enter("tableDelimiterRow"),o=!1,ne(w)?oe(e,x,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(w):x(w))}function x(w){return w===45||w===58?A(w):w===124?(o=!0,e.enter("tableCellDivider"),e.consume(w),e.exit("tableCellDivider"),S):P(w)}function S(w){return ne(w)?oe(e,A,"whitespace")(w):A(w)}function A(w){return w===58?(i+=1,o=!0,e.enter("tableDelimiterMarker"),e.consume(w),e.exit("tableDelimiterMarker"),g):w===45?(i+=1,g(w)):w===null||$(w)?N(w):P(w)}function g(w){return w===45?(e.enter("tableDelimiterFiller"),y(w)):P(w)}function y(w){return w===45?(e.consume(w),y):w===58?(o=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(w),e.exit("tableDelimiterMarker"),E):(e.exit("tableDelimiterFiller"),E(w))}function E(w){return ne(w)?oe(e,N,"whitespace")(w):N(w)}function N(w){return w===124?x(w):w===null||$(w)?!o||a!==i?P(w):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(w)):P(w)}function P(w){return n(w)}function C(w){return e.enter("tableRow"),D(w)}function D(w){return w===124?(e.enter("tableCellDivider"),e.consume(w),e.exit("tableCellDivider"),D):w===null||$(w)?(e.exit("tableRow"),t(w)):ne(w)?oe(e,D,"whitespace")(w):(e.enter("data"),H(w))}function H(w){return w===null||w===124||pe(w)?(e.exit("data"),D(w)):(e.consume(w),w===92?V:H)}function V(w){return w===92||w===124?(e.consume(w),H):H(w)}}function XA(e,t){let n=-1,r=!0,a=0,i=[0,0,0,0],o=[0,0,0,0],l=!1,u=0,d,f,h;const p=new GA;for(;++n<e.length;){const m=e[n],x=m[1];m[0]==="enter"?x.type==="tableHead"?(l=!1,u!==0&&(Ap(p,t,u,d,f),f=void 0,u=0),d={type:"table",start:Object.assign({},x.start),end:Object.assign({},x.end)},p.add(n,0,[["enter",d,t]])):x.type==="tableRow"||x.type==="tableDelimiterRow"?(r=!0,h=void 0,i=[0,0,0,0],o=[0,n+1,0,0],l&&(l=!1,f={type:"tableBody",start:Object.assign({},x.start),end:Object.assign({},x.end)},p.add(n,0,[["enter",f,t]])),a=x.type==="tableDelimiterRow"?2:f?3:1):a&&(x.type==="data"||x.type==="tableDelimiterMarker"||x.type==="tableDelimiterFiller")?(r=!1,o[2]===0&&(i[1]!==0&&(o[0]=o[1],h=ts(p,t,i,a,void 0,h),i=[0,0,0,0]),o[2]=n)):x.type==="tableCellDivider"&&(r?r=!1:(i[1]!==0&&(o[0]=o[1],h=ts(p,t,i,a,void 0,h)),i=o,o=[i[1],n,0,0])):x.type==="tableHead"?(l=!0,u=n):x.type==="tableRow"||x.type==="tableDelimiterRow"?(u=n,i[1]!==0?(o[0]=o[1],h=ts(p,t,i,a,n,h)):o[1]!==0&&(h=ts(p,t,o,a,n,h)),a=0):a&&(x.type==="data"||x.type==="tableDelimiterMarker"||x.type==="tableDelimiterFiller")&&(o[3]=n)}for(u!==0&&Ap(p,t,u,d,f),p.consume(t.events),n=-1;++n<t.events.length;){const m=t.events[n];m[0]==="enter"&&m[1].type==="table"&&(m[1]._align=$A(t.events,n))}return e}function ts(e,t,n,r,a,i){const o=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",l="tableContent";n[0]!==0&&(i.end=Object.assign({},_r(t.events,n[0])),e.add(n[0],0,[["exit",i,t]]));const u=_r(t.events,n[1]);if(i={type:o,start:Object.assign({},u),end:Object.assign({},u)},e.add(n[1],0,[["enter",i,t]]),n[2]!==0){const d=_r(t.events,n[2]),f=_r(t.events,n[3]),h={type:l,start:Object.assign({},d),end:Object.assign({},f)};if(e.add(n[2],0,[["enter",h,t]]),r!==2){const p=t.events[n[2]],m=t.events[n[3]];if(p[1].end=Object.assign({},m[1].end),p[1].type="chunkText",p[1].contentType="text",n[3]>n[2]+1){const x=n[2]+1,S=n[3]-n[2]-1;e.add(x,S,[])}}e.add(n[3]+1,0,[["exit",h,t]])}return a!==void 0&&(i.end=Object.assign({},_r(t.events,a)),e.add(a,0,[["exit",i,t]]),i=void 0),i}function Ap(e,t,n,r,a){const i=[],o=_r(t.events,n);a&&(a.end=Object.assign({},o),i.push(["exit",a,t])),r.end=Object.assign({},o),i.push(["exit",r,t]),e.add(n+1,0,i)}function _r(e,t){const n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}const JA={name:"tasklistCheck",tokenize:eI};function ZA(){return{text:{91:JA}}}function eI(e,t,n){const r=this;return a;function a(u){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(u):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(u),e.exit("taskListCheckMarker"),i)}function i(u){return pe(u)?(e.enter("taskListCheckValueUnchecked"),e.consume(u),e.exit("taskListCheckValueUnchecked"),o):u===88||u===120?(e.enter("taskListCheckValueChecked"),e.consume(u),e.exit("taskListCheckValueChecked"),o):n(u)}function o(u){return u===93?(e.enter("taskListCheckMarker"),e.consume(u),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),l):n(u)}function l(u){return $(u)?t(u):ne(u)?e.check({tokenize:tI},t,n)(u):n(u)}}function tI(e,t,n){return oe(e,r,"whitespace");function r(a){return a===null?n(a):t(a)}}function nI(e){return Ag([NA(),jA(),WA(e),QA(),ZA()])}const rI={};function Ie(e){const t=this,n=e||rI,r=t.data(),a=r.micromarkExtensions||(r.micromarkExtensions=[]),i=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),o=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);a.push(nI(n)),i.push(_A()),o.push(SA(n))}const aI=`
# Mutual Funds Advisory: The Smart Way for 22-45-Year-Old Indians to Build Wealth

> “The earlier you start, the more time your money has to grow.”
> — Every seasoned investor ever, and the data backs it up.

Mutual Funds are no longer the exotic investment product your parents debated at the dinner table. In 2025, they are the **default wealth-building engine for young and mid-career Indians** who want inflation-beating returns without becoming full-time stock-market analysts. Whether you are 22 and just landed your first salary or 45 and juggling home-loan EMIs with kids’ school fees, a well-designed mutual-fund portfolio can put every rupee to work—**systematically, transparently, and cost-effectively**.

At **Mozno Advisory**, we help Indians aged 22-45 cut through jargon, avoid costly mistakes, and invest in the **right mix of mutual funds** across equity, debt, and hybrid categories. As an AMFI-registered distributor, our research-driven, compliance-first approach ensures that every recommendation aligns with your **goals, risk profile, and timelines**.

Below is a 360-degree guide that distills everything you need to know—**from “What is a mutual fund?” to “How do I build a ₹5-crore retirement corpus by 50?”** Read it end-to-end, bookmark it, and share it with that friend who still thinks mutual funds are “riskier than crypto.”

---

## 1. Why Mutual Funds Matter in 2025

### 1.1 Macro Tailwinds for Indian Investors
- **GDP growth >6 %** for the next decade = corporate earnings tailwind.
- **Financialisation of savings**—household allocation to equities and MFs has doubled in five years.
- **TINA factor** (There Is No Alternative) with **FD rates <7 % post-tax** and **real-estate yields at record lows**.

### 1.2 Demographic Edge
If you are between 22 and 45 today, you have **20–35 years of earning and investing runway**. A monthly SIP of just ₹10,000 in a Nifty 500 index fund at a **12 % CAGR** can grow to:

| Years Invested | Corpus | Total Investment |
|----------------|--------|------------------|
| 20             | ₹94 L  | ₹24 L            |
| 25             | ₹1.69 Cr | ₹30 L          |
| 30             | ₹3.04 Cr | ₹36 L          |

---

## 2. Mutual Fund Basics: A 90-Second Refresher

| Term           | Plain-English Explanation |
|----------------|---------------------------|
| AMC            | The company that runs the fund (e.g., HDFC, ICICI, DSP). |
| NAV            | Per-unit price; changes daily based on underlying asset values. |
| Expense Ratio  | Annual fee you pay the AMC (0.10 % for index funds; up to 1.5 % for active funds). |
| **SIP**        | Systematic Investment Plan—invest a fixed sum monthly. |
| **STP**        | Systematic Transfer Plan—shift money from debt to equity gradually. |
| **SWP**        | Systematic Withdrawal Plan—create monthly “pay-cheques” post-retirement. |

---

## 3. Equity Funds: Your Engine of Growth

### 3.1 Large-Cap Funds
- **Basket**: Top 100 stocks by market cap (Reliance, TCS, Infosys).
- **Risk**: Moderate.
- **Ideal for**: Core portfolio; first-time equity investors.

### 3.2 Mid-Cap & Small-Cap Funds
- **Return potential**: 2–3 % extra CAGR over large-caps **over 10+ years**.
- **Volatility**: 20–30 % drawdowns are normal every few years.
- **Rule of thumb**: Limit to **20–30 %** of total equity exposure.

### 3.3 Flexi-Cap & Multi-Cap Funds
- Freedom to shift market-cap buckets based on valuations.
- One-stop solution for investors who don’t want to juggle multiple funds.

### 3.4 Index Funds & ETFs
- **Lowest fees** (expense ratio 0.05–0.20 %).
- **Consistent** with Nifty 50/Sensex; no fund-manager risk.
- **Best for**: Tax-loss harvesting, core satellite strategy.

### 3.5 Sectoral & Thematic Funds
- **Example**: IT, Pharma, Consumption, ESG, Manufacturing.
- **Use case**: Tactical 5-10 % satellite allocation when valuations are cheap.
- **Caveat**: Rotate out when themes peak (look at price-to-earnings vs. 10-year median).

---

## 4. Debt Funds: The Stability Layer

### 4.1 Liquid & Overnight Funds
- **Parking ground**: Emergency fund (3-6 months expenses).
- **Returns**: 6.5–7 %; redemption in T+1 day.

### 4.2 Ultra-Short & Low-Duration Funds
- **Horizon**: 3–12 months.
- **Better than FDs**: Indexation benefit after 3 years.

### 4.3 Corporate Bond & Banking PSU Funds
- **Credit quality**: Predominantly AAA/A1+.
- **Yield pick-up**: 0.5–1 % over gilt funds with marginally higher risk.

### 4.4 Gilt Funds
- **Portfolio**: Only government securities.
- **Interest-rate play**: Do well when RBI cuts rates; volatile in rising-rate cycles.

### 4.5 Target-Maturity Funds
- **New kid on the block**: Passively hold GOI/SDL bonds maturing on a single date.
- **Predictable returns** if held to maturity; **no reinvestment risk**.

---

## 5. Hybrid Funds: One-Stop Asset Allocation

| Category            | Equity % | Debt % | Ideal For |
|---------------------|----------|--------|-----------|
| Aggressive Hybrid    | 65–80 %  | 20–35 % | Moderate risk-takers |
| Balanced Advantage   | 30–80 % dynamic | — | Want equity exposure with lower volatility |
| Conservative Hybrid  | 10–25 %  | 75–90 % | First-time debt investors seeking kicker returns |

---

## 6. How to Match Funds to Your Goals

| Goal              | Time Horizon | Risk Bucket | Suggested Categories |
|-------------------|--------------|-------------|----------------------|
| Emergency Fund    | < 1 yr       | Ultra-Low   | Liquid/Overnight |
| Europe Trip       | 2 yrs        | Low         | Ultra-Short Duration |
| House Down-Payment| 5 yrs        | Moderate    | Balanced Advantage + Short-Duration Debt |
| Child’s Education | 15 yrs       | High        | Flexi-Cap + Mid-Cap + Small-Cap |
| Retirement        | 25–35 yrs    | High        | Index (Nifty 500) + ESG/International Fund |

---

## 7. The Power of SIP + Step-Up + Top-Up

- **Base SIP**: ₹15,000/month at 12 % → ₹1.12 Cr in 20 years.
- **Step-up SIP**: Increase by 10 % every year → ₹1.96 Cr.
- **Annual Bonus Top-up**: ₹1 L bonus invested every March → ₹2.34 Cr.

Small tweaks compound into **multi-crore differences**.

---

## 8. Taxation Cheat-Sheet FY 2025-26

| Fund Type | Short-Term (< 3 yrs) | Long-Term (≥ 3 yrs) | Grandfathering |
|-----------|----------------------|---------------------|----------------|
| **Equity** | 20 % on gains | 12.5 % above ₹1.25 L | Yes (pre-31-Jan-18 NAV) |
| **Debt**   | Slab rate | 12.5 % with indexation | N/A |
| **Hybrid (Aggressive)** | Treated as equity | Same as equity | Same as equity |

**ELSS funds** (3-yr lock-in) still qualify for **₹1.5 L deduction under 80C**.

---

## 9. Common Mistakes 22-45-Year-Olds Make

1. **Chasing last year’s star performer** → leads to buying high, selling low.
2. **Stopping SIPs during market falls** → ruins rupee-cost averaging.
3. **Ignoring debt funds** → keeps emergency money in savings account earning 3 %.
4. **Over-diversifying** → owning 15+ funds with overlapping portfolios.
5. **Not increasing SIPs with salary hikes** → fails to beat inflation.

---

## 10. Building Your ₹5-Crore Retirement Corpus (Case Study)

**Profile**: 28-year-old software engineer, current salary ₹1.2 L/month, grows at 8 % p.a.

| Step | Action |
|------|--------|
|1. Target corpus (age 60) | ₹5 Cr in today’s value → ₹15 Cr inflated @6 % p.a. |
|2. Required SIP | ₹33,000/month in 80 % equity / 20 % debt, 12 % blended return |
|3. Step-up SIP | Increase 10 % yearly → need only ₹21,000 starting SIP |
|4. Rebalance | Shift 5 % from equity to debt every year after age 45 |

Mozno Advisory runs this projection in our proprietary **Retirement Readiness Calculator**—book a free session to get yours.

---

## 11. How Mozno Advisory Adds Alpha Beyond Fund Selection

| Service Layer | DIY | With Mozno |
|---------------|-----|------------|
| **Risk Profiling** | Online quiz | 45-min behavioural interview + psychometrics |
| **Fund Shortlist** | 250+ schemes | Curated 15-scheme universe post-quant & qual filters |
| **Portfolio Construction** | Equal-weight | Core-satellite with glide-path modelling |
| **Review Cadence** | Random | Semi-annual rebalancing + macro alerts |
| **Exit Triggers** | Gut feel | Rule-based (fund-manager exit, style-drift, valuation bands) |

---

## 12. Frequently Asked Questions

**Q1. Can I lose all my money in mutual funds?**
A1. Diversified equity funds hold 50–100 stocks; the probability of a 100 % loss is near zero. A disciplined, long-term approach historically recovers from temporary falls.

**Q2. Should I choose dividend or growth option?**
A2. Growth option compounds returns; dividend option is tax-inefficient post-2020. Unless you need periodic cash-flow, **always pick growth**.

**Q3. How many funds should I own?**
A3. **5–7 funds** are enough for most investors.

**Q4. Is now a good time to enter?**
A4. **Time in the market beats timing the market.** Start an SIP today; volatility is averaged out.

---

## 13. Key Takeaways

- Mutual funds are **not an asset class**—they are a **wrapper** for equity, debt, gold, or a mix.
- The **22-45 age cohort** has the **biggest compounding advantage**—use it.
- A **goal-based, risk-aligned, tax-efficient strategy** beats chasing star ratings every time.
- **Professional guidance** pays for itself by avoiding behavioural mistakes and tax leaks.

---

## 14. Ready to Start?

🔗 [**Book Your Free Mutual Fund Strategy Call**](https://mozno.com)

*Mozno Advisory is an AMFI-registered mutual fund distributor (ARN-XXXXXX). All investments are subject to market risks. Please read all scheme-related documents carefully.*

`;function dy(){return s.jsxs(s.Fragment,{children:[s.jsxs(Ne,{children:[s.jsx("title",{children:"Mutual Funds Advisory – Mozno Advisory"}),s.jsx("meta",{name:"description",content:"Complete guide for 22-45-year-old Indians to build wealth via mutual funds."})]}),s.jsx("main",{children:s.jsx("article",{className:"blog-page",children:s.jsx(we,{rehypePlugins:[Ae],remarkPlugins:[Ie],components:{h1:e=>s.jsx("h1",{className:"blog-page__heading blog-page__heading--h1",...e}),h2:e=>s.jsx("h2",{className:"blog-page__heading blog-page__heading--h2",...e}),h3:e=>s.jsx("h3",{className:"blog-page__heading blog-page__heading--h3",...e}),p:e=>s.jsx("p",{className:"blog-page__paragraph",...e}),blockquote:e=>s.jsx("blockquote",{className:"blog-page__blockquote",...e}),ul:e=>s.jsx("ul",{className:"blog-page__list",...e}),ol:e=>s.jsx("ol",{className:"blog-page__list",...e}),li:e=>s.jsx("li",{className:"blog-page__list-item",...e}),table:e=>s.jsx("table",{className:"blog-page__table",...e}),th:e=>s.jsx("th",{className:"blog-page__th",...e}),td:e=>s.jsx("td",{className:"blog-page__td",...e}),a:e=>s.jsx("a",{className:"blog-page__link",...e}),strong:e=>s.jsx("strong",{className:"blog-page__strong",...e}),code:e=>s.jsx("code",{className:"blog-page__code",...e}),hr:e=>s.jsx("hr",{className:"blog-page__hr",...e})},children:aI})})})]})}const iI=()=>s.jsx(dy,{}),sI=()=>{b2();const e={title:"Why SIP is the New FD for Millennials",content:`
      <p>In today's rapidly changing financial landscape, millennials are increasingly moving away from traditional fixed deposits (FDs) and embracing Systematic Investment Plans (SIPs) as their preferred investment vehicle. This shift represents a fundamental change in how young Indians approach wealth creation and financial planning.</p>

      <h2>The Problem with Fixed Deposits</h2>
      <p>Fixed deposits, once considered the safest investment option, are losing their appeal among young investors. With inflation rates often exceeding FD returns, the real value of money invested in FDs is actually decreasing over time. Current FD rates hover around 5-7% annually, while inflation consistently runs at 4-6%, leaving investors with minimal real returns.</p>

      <h2>Why SIPs are Gaining Popularity</h2>
      <p>Systematic Investment Plans offer several advantages that make them particularly attractive to millennials:</p>
      
      <ul>
        <li><strong>Higher Returns:</strong> Historically, equity mutual funds have delivered returns of 12-15% annually over long periods</li>
        <li><strong>Rupee Cost Averaging:</strong> SIPs help reduce the impact of market volatility through systematic investing</li>
        <li><strong>Flexibility:</strong> Investors can start with as little as ₹500 per month and increase amounts as income grows</li>
        <li><strong>Tax Benefits:</strong> ELSS funds offer tax deductions under Section 80C</li>
      </ul>

      <h2>The Power of Compounding</h2>
      <p>The real magic of SIPs lies in the power of compounding. A monthly SIP of ₹5,000 for 20 years at 12% annual returns can grow to approximately ₹50 lakhs, compared to just ₹18 lakhs in a fixed deposit at 6% returns.</p>

      <h2>Getting Started with SIPs</h2>
      <p>Starting your SIP journey is easier than ever. Here's how to begin:</p>
      
      <ol>
        <li>Assess your risk tolerance and investment goals</li>
        <li>Choose appropriate mutual fund schemes</li>
        <li>Start with a comfortable amount and increase gradually</li>
        <li>Stay invested for the long term to maximize returns</li>
      </ol>

      <p>Remember, while SIPs offer higher return potential, they also come with market risks. It's essential to understand your risk appetite and invest accordingly.</p>
    `,author:"Harshal Jain",date:"March 15, 2024",image:"https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"};return s.jsxs("div",{className:"pt-16 lg:pt-20",children:[s.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:s.jsxs("a",{href:"/blog",className:"inline-flex items-center text-green-600 hover:text-green-700 transition-colors",children:[s.jsx(B2,{className:"h-4 w-4 mr-2"}),"Back to Blog"]})}),s.jsxs("article",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20",children:[s.jsxs("header",{className:"mb-8",children:[s.jsx("img",{src:e.image,alt:e.title,className:"w-full h-64 lg:h-96 object-cover rounded-xl mb-8"}),s.jsxs("div",{className:"flex items-center text-sm text-gray-500 mb-4",children:[s.jsx(J2,{className:"h-4 w-4 mr-1"}),s.jsx("span",{className:"mr-4",children:e.author}),s.jsx(X0,{className:"h-4 w-4 mr-1"}),s.jsx("span",{children:e.date})]}),s.jsx("h1",{className:"text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight",children:e.title})]}),s.jsx("div",{className:"prose prose-lg max-w-none",dangerouslySetInnerHTML:{__html:e.content}}),s.jsxs("div",{className:"mt-12 p-8 bg-green-50 rounded-xl",children:[s.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Need Help with Your Investment Strategy?"}),s.jsx("p",{className:"text-gray-600 mb-6",children:"Our expert advisors can help you create a personalized investment plan that aligns with your financial goals."}),s.jsx("a",{href:"/contact",className:"bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors",children:"Get Expert Help, Fast."})]})]})]})},oI=()=>{const e=[{title:"SIP vs Lump Sum: Which is Better?",thumbnail:"https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",duration:"8:45",views:"12.5K",date:"March 20, 2024",description:"Understanding the difference between SIP and lump sum investments and when to choose each strategy."},{title:"Tax Saving Strategies for 2024",thumbnail:"https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",duration:"12:30",views:"8.2K",date:"March 15, 2024",description:"Complete guide to saving taxes legally under various sections of the Income Tax Act."},{title:"How to Choose the Right Health Insurance",thumbnail:"https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",duration:"10:15",views:"15.7K",date:"March 10, 2024",description:"Key factors to consider when selecting health insurance for you and your family."},{title:"Retirement Planning in Your 30s",thumbnail:"https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",duration:"14:20",views:"9.8K",date:"March 5, 2024",description:"Why starting retirement planning early can make you financially independent."},{title:"Home Loan Tips: Get Best Interest Rates",thumbnail:"https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",duration:"11:45",views:"18.3K",date:"February 28, 2024",description:"Expert tips to secure the lowest home loan interest rates and save lakhs."},{title:"Mutual Fund Basics for Beginners",thumbnail:"https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",duration:"16:30",views:"22.1K",date:"February 20, 2024",description:"Everything you need to know about mutual funds before making your first investment."}];return s.jsxs("div",{className:"pt-16 lg:pt-20",children:[s.jsx("section",{className:"bg-gradient-to-br from-green-50 via-white to-blue-50 py-20",children:s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"text-center",children:[s.jsx("h1",{className:"text-4xl lg:text-5xl font-bold text-gray-900 mb-6",children:"Financial Education Videos"}),s.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed",children:"Learn about investments, tax planning, insurance, and more through our expert-led video content. Make informed financial decisions with practical insights."})]})})}),s.jsx("section",{className:"py-20 bg-white",children:s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:e.map((t,n)=>s.jsxs("div",{className:"bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2",children:[s.jsxs("div",{className:"relative",children:[s.jsx("img",{src:t.thumbnail,alt:t.title,className:"w-full h-48 object-cover"}),s.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300",children:s.jsx(Q2,{className:"h-12 w-12 text-white"})}),s.jsx("div",{className:"absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded",children:t.duration})]}),s.jsxs("div",{className:"p-6",children:[s.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-3 line-clamp-2",children:t.title}),s.jsx("p",{className:"text-gray-600 mb-4 leading-relaxed line-clamp-2",children:t.description}),s.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500",children:[s.jsxs("div",{className:"flex items-center",children:[s.jsx(W2,{className:"h-4 w-4 mr-1"}),s.jsxs("span",{children:[t.views," views"]})]}),s.jsxs("div",{className:"flex items-center",children:[s.jsx(X0,{className:"h-4 w-4 mr-1"}),s.jsx("span",{children:t.date})]})]})]})]},n))})})}),s.jsx("section",{className:"py-20 bg-green-600",children:s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[s.jsx("h2",{className:"text-3xl lg:text-4xl font-bold text-white mb-6",children:"Subscribe for Weekly Financial Tips"}),s.jsx("p",{className:"text-xl text-green-100 mb-8 max-w-2xl mx-auto",children:"Get notified when we upload new educational content to help you make better financial decisions."}),s.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 max-w-md mx-auto",children:[s.jsx("a",{href:"https://youtube.com/@awareness_initiative",target:"_blank",rel:"noopener noreferrer",className:"bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors",children:"Subscribe on YouTube"}),s.jsx("a",{href:"https://www.instagram.com/the_awareness_initiative",target:"_blank",rel:"noopener noreferrer",className:"bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors",children:"Follow on Instagram"})]})]})})]})},lI="https://script.google.com/macros/s/AKfycbzjGXyVvIx9BetbDWx_VIL24ZKjA8B4dLssWjKLMMPH8yuGo_hUaRg1vRpsxAU2iIfx/exec",uI="6Lc5b5IrAAAAAEcsiXPLIG5Xd__O817x4N46EzsP",cI=()=>{const[e,t]=q.useState({name:"",email:"",phone:"",service:"",message:""}),[n,r]=q.useState(!1),[a,i]=q.useState({}),[o,l]=q.useState(!1),[u,d]=q.useState(""),[f,h]=q.useState(null),p=()=>e.name.trim()&&e.email.trim()&&e.phone.trim()&&e.service.trim()&&n&&f,m={name:a.name&&!e.name.trim(),email:a.email&&!e.email.trim(),phone:a.phone&&!e.phone.trim(),service:a.service&&!e.service.trim(),captcha:a.captcha&&!f},x=async g=>{if(g.preventDefault(),!!p()){l(!0),d("");try{const y=new FormData;y.append("name",e.name),y.append("email",e.email),y.append("phone",e.phone),y.append("service",e.service),y.append("message",e.message),y.append("g-recaptcha-response",f||""),(await fetch(lI,{method:"POST",body:y})).ok?(d("success"),t({name:"",email:"",phone:"",service:"",message:""}),r(!1),i({}),h(null)):d("error")}catch{d("error")}l(!1)}},S=g=>{t({...e,[g.target.name]:g.target.value})},A=g=>{i({...a,[g.target.name]:!0})};return s.jsxs("div",{className:"pt-16 lg:pt-20",children:[s.jsx("section",{className:"bg-gradient-to-br from-green-50 via-white to-blue-50 py-20",children:s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"text-center",children:[s.jsx("h1",{className:"text-4xl lg:text-5xl font-bold text-gray-900 mb-6",children:"Get in Touch"}),s.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed",children:"Ready to take control of your financial future? Contact our expert advisors for personalized guidance and solutions tailored to your needs."})]})})}),s.jsx("section",{className:"py-20 bg-white",children:s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-8",children:"Contact Information"}),s.jsxs("div",{className:"space-y-6",children:[s.jsxs("div",{className:"flex items-start space-x-4",children:[s.jsx("div",{className:"bg-green-100 p-3 rounded-full",children:s.jsx(nd,{className:"h-6 w-6 text-green-600"})}),s.jsxs("div",{children:[s.jsx("h3",{className:"font-semibold text-gray-900 mb-1",children:"Phone"}),s.jsx("p",{className:"text-gray-600",children:"+91 98205 07696"}),s.jsx("p",{className:"text-sm text-gray-500",children:"Mon-Sat, 9:00 AM - 7:00 PM"})]})]}),s.jsxs("div",{className:"flex items-start space-x-4",children:[s.jsx("div",{className:"bg-blue-100 p-3 rounded-full",children:s.jsx(td,{className:"h-6 w-6 text-blue-600"})}),s.jsxs("div",{children:[s.jsx("h3",{className:"font-semibold text-gray-900 mb-1",children:"Email"}),s.jsx("p",{className:"text-gray-600",children:"contact@mozno.in"}),s.jsx("p",{className:"text-sm text-gray-500",children:"We'll respond within 24 hours"})]})]}),s.jsxs("div",{className:"flex items-start space-x-4",children:[s.jsx("div",{className:"bg-yellow-100 p-3 rounded-full",children:s.jsx(eg,{className:"h-6 w-6 text-yellow-600"})}),s.jsxs("div",{children:[s.jsx("h3",{className:"font-semibold text-gray-900 mb-1",children:"Office Address"}),s.jsxs("p",{className:"text-gray-600",children:["106, Shyamkamal 'C' Building,",s.jsx("br",{}),"Agarwal Market, Vile Parle (E),",s.jsx("br",{}),"Mumbai - 400 057."]})]})]}),s.jsxs("div",{className:"flex items-start space-x-4",children:[s.jsx("div",{className:"bg-green-100 p-3 rounded-full",children:s.jsx(Lu,{className:"h-6 w-6 text-green-600"})}),s.jsxs("div",{children:[s.jsx("h3",{className:"font-semibold text-gray-900 mb-1",children:"WhatsApp"}),s.jsx("p",{className:"text-gray-600",children:"+91 98205 07696"}),s.jsx("a",{href:"https://wa.me/919820507696",target:"_blank",rel:"noopener noreferrer",className:"text-green-600 hover:text-green-700 text-sm",children:"Send Message →"})]})]}),s.jsxs("div",{className:"flex items-start space-x-4",children:[s.jsx("div",{className:"bg-purple-100 p-3 rounded-full",children:s.jsx(Y2,{className:"h-6 w-6 text-purple-600"})}),s.jsxs("div",{children:[s.jsx("h3",{className:"font-semibold text-gray-900 mb-1",children:"Business Hours"}),s.jsxs("p",{className:"text-gray-600",children:["Monday - Friday: 9:00 AM - 7:00 PM",s.jsx("br",{}),"Saturday: 10:00 AM - 5:00 PM",s.jsx("br",{}),"Sunday: Closed"]})]})]})]})]}),s.jsxs("div",{className:"bg-gray-50 rounded-2xl p-8",children:[s.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-8",children:"We’re Here to Help"}),s.jsxs("form",{onSubmit:x,className:"space-y-6",noValidate:!0,children:[s.jsxs("div",{children:[s.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-2",children:"Full Name *"}),s.jsx("input",{type:"text",id:"name",name:"name",required:!0,value:e.name,onChange:S,onBlur:A,className:`w-full px-4 py-3 border ${m.name?"border-red-500":"border-gray-300"} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`,placeholder:"Enter your full name"}),m.name&&s.jsx("p",{className:"text-red-500 text-xs mt-1",children:"Full Name is required."})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address *"}),s.jsx("input",{type:"email",id:"email",name:"email",required:!0,value:e.email,onChange:S,onBlur:A,className:`w-full px-4 py-3 border ${m.email?"border-red-500":"border-gray-300"} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`,placeholder:"Enter your email"}),m.email&&s.jsx("p",{className:"text-red-500 text-xs mt-1",children:"Email Address is required."})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700 mb-2",children:"Phone Number *"}),s.jsx("input",{type:"tel",id:"phone",name:"phone",required:!0,value:e.phone,onChange:S,onBlur:A,className:`w-full px-4 py-3 border ${m.phone?"border-red-500":"border-gray-300"} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`,placeholder:"Enter your phone number"}),m.phone&&s.jsx("p",{className:"text-red-500 text-xs mt-1",children:"Phone Number is required."})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"service",className:"block text-sm font-medium text-gray-700 mb-2",children:"Service Interested In *"}),s.jsxs("select",{id:"service",name:"service",required:!0,value:e.service,onChange:S,onBlur:A,className:`w-full px-4 py-3 border ${m.service?"border-red-500":"border-gray-300"} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`,children:[s.jsx("option",{value:"",children:"Select a service"}),s.jsx("option",{value:"wealth-management",children:"Wealth Management"}),s.jsx("option",{value:"financial-planning",children:"Financial Planning"}),s.jsx("option",{value:"tax-planning",children:"Tax Planning"}),s.jsx("option",{value:"insurance-planning",children:"Insurance Planning"}),s.jsx("option",{value:"borrowing-solutions",children:"Borrowing Solutions"}),s.jsx("option",{value:"succession-planning",children:"Succession Planning"}),s.jsx("option",{value:"others",children:"Others"})]}),m.service&&s.jsx("p",{className:"text-red-500 text-xs mt-1",children:"Service selection is required."})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-2",children:"Message"}),s.jsx("textarea",{id:"message",name:"message",rows:4,value:e.message,onChange:S,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",placeholder:"Tell us about your financial goals..."})]}),s.jsxs("div",{children:[s.jsx(dg,{sitekey:uI,onChange:g=>h(g),onExpired:()=>h(null)}),!f&&a&&s.jsx("p",{className:"text-red-500 text-xs mt-1",children:"Please complete the CAPTCHA."})]}),s.jsxs("div",{className:"flex items-start",children:[s.jsx("input",{type:"checkbox",id:"consent",name:"consent",checked:n,onChange:g=>r(g.target.checked),className:"mt-1 mr-2",required:!0}),s.jsxs("label",{htmlFor:"consent",className:"text-sm text-gray-600",children:["By submitting this form, I agree to the ",s.jsx("a",{href:"/terms",className:"text-green-600 underline",children:"Terms & Conditions"})," and ",s.jsx("a",{href:"/privacy",className:"text-green-600 underline",children:"Privacy Policy"}),"."]})]}),s.jsx("button",{type:"submit",className:`w-full bg-green-600 text-white py-4 rounded-lg font-semibold transition-colors hover:bg-green-700 ${!p()||o?"opacity-50 cursor-not-allowed":""}`,disabled:!p()||o,children:o?"Submitting...":"Get Expert Help, Fast."}),u==="success"&&s.jsx("p",{className:"text-green-600 text-sm mt-4",children:"Thank you for your inquiry! We will contact you soon."}),u==="error"&&s.jsx("p",{className:"text-red-600 text-sm mt-4",children:"Submission failed. Please try again later."})]})]})]})})}),s.jsx("section",{className:"py-20 bg-gray-50",children:s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[s.jsxs("div",{className:"text-center mb-12",children:[s.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-4",children:"Visit Our Office"}),s.jsx("p",{className:"text-xl text-gray-600",children:"Located in the heart of Mumbai's business district"})]}),s.jsx("div",{className:"bg-gray-300 rounded-xl h-96 flex items-center justify-center",children:s.jsx("p",{className:"text-gray-600 text-lg",children:"Interactive Google Map will be embedded here"})})]})})]})},dI=()=>s.jsx("div",{className:"pt-16 lg:pt-20",children:s.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[s.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-8",children:"Privacy Policy"}),s.jsxs("div",{className:"prose prose-lg max-w-none",children:[s.jsxs("p",{className:"text-gray-600 mb-6",children:[s.jsx("strong",{children:"Last updated:"})," March 2024"]}),s.jsx("p",{children:"At Mozno Advisory, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our services."}),s.jsx("h2",{children:"Information We Collect"}),s.jsx("p",{children:"We may collect the following types of information:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Personal identification information (name, email, phone number)"}),s.jsx("li",{children:"Financial information relevant to our advisory services"}),s.jsx("li",{children:"Usage data and website analytics"}),s.jsx("li",{children:"Communication records and preferences"})]}),s.jsx("h2",{children:"How We Use Your Information"}),s.jsx("p",{children:"We use your information to:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Provide personalized financial advisory services"}),s.jsx("li",{children:"Communicate with you about our services"}),s.jsx("li",{children:"Improve our website and service offerings"}),s.jsx("li",{children:"Comply with legal and regulatory requirements"})]}),s.jsx("h2",{children:"Information Sharing"}),s.jsx("p",{children:"We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"With your explicit consent"}),s.jsx("li",{children:"To comply with legal obligations"}),s.jsx("li",{children:"With trusted service providers who assist in our operations"}),s.jsx("li",{children:"To protect our rights and safety"})]}),s.jsx("h2",{children:"Data Security"}),s.jsx("p",{children:"We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure."}),s.jsx("h2",{children:"Your Rights"}),s.jsx("p",{children:"You have the right to:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Access your personal information"}),s.jsx("li",{children:"Correct inaccurate data"}),s.jsx("li",{children:"Request deletion of your data"}),s.jsx("li",{children:"Opt-out of marketing communications"})]}),s.jsx("h2",{children:"Cookies"}),s.jsx("p",{children:"Our website uses cookies to enhance your browsing experience. You can control cookie settings through your browser preferences."}),s.jsx("h2",{children:"Contact Us"}),s.jsx("p",{children:"If you have any questions about this Privacy Policy, please contact us at:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Email: info@moznoadvisory.com"}),s.jsx("li",{children:"Phone: +91 98765 43210"}),s.jsx("li",{children:"Address: Office No. 123, Business Center, Andheri East, Mumbai - 400069"})]})]})]})}),hI=()=>s.jsx("div",{className:"pt-16 lg:pt-20",children:s.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[s.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-8",children:"Disclaimer"}),s.jsxs("div",{className:"prose prose-lg max-w-none",children:[s.jsxs("p",{className:"text-gray-600 mb-6",children:[s.jsx("strong",{children:"Last updated:"})," March 2024"]}),s.jsx("h2",{children:"Investment Risks"}),s.jsx("p",{children:"Investment in securities is subject to market risk. Past performance is not indicative of future returns. The value of investments can go up or down, and you may not get back the amount you invested."}),s.jsx("h2",{children:"No Guarantee of Returns"}),s.jsx("p",{children:"Mozno Advisory does not guarantee returns or safety of capital. All investment decisions should be made based on your own risk assessment and financial situation."}),s.jsx("h2",{children:"Professional Advice"}),s.jsx("p",{children:"The information provided on this website is for educational purposes only and should not be considered as personalized investment advice. Please consult with our qualified advisors for recommendations specific to your situation."}),s.jsx("h2",{children:"Regulatory Compliance"}),s.jsx("p",{children:"Mozno Advisory is a SEBI registered investment advisor. We comply with all applicable regulations and guidelines set by SEBI, IRDAI, and other regulatory authorities."}),s.jsx("h2",{children:"Third-Party Products"}),s.jsx("p",{children:"We may recommend products from various financial institutions. While we conduct due diligence, we are not responsible for the performance or policies of these third-party providers."}),s.jsx("h2",{children:"Market Volatility"}),s.jsx("p",{children:"Financial markets are subject to volatility and various economic factors. Investment values may fluctuate significantly, especially in the short term."}),s.jsx("h2",{children:"Tax Implications"}),s.jsx("p",{children:"Tax laws are subject to change, and the tax treatment of investments may vary based on individual circumstances. Please consult a tax advisor for specific tax-related queries."}),s.jsx("h2",{children:"Limitation of Liability"}),s.jsx("p",{children:"Mozno Advisory shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our services or reliance on information provided."}),s.jsx("h2",{children:"Contact Information"}),s.jsx("p",{children:"For any questions regarding this disclaimer, please contact us at info@moznoadvisory.com or +91 98765 43210."})]})]})}),fI=()=>s.jsx("div",{className:"pt-16 lg:pt-20",children:s.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[s.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-8",children:"Terms & Conditions"}),s.jsxs("div",{className:"prose prose-lg max-w-none",children:[s.jsxs("p",{className:"text-gray-600 mb-6",children:[s.jsx("strong",{children:"Last updated:"})," March 2024"]}),s.jsx("h2",{children:"Acceptance of Terms"}),s.jsx("p",{children:"By using our services, you agree to abide by all regulatory and professional guidelines set by SEBI, IRDAI, and other applicable authorities. These terms constitute a legally binding agreement between you and Mozno Advisory."}),s.jsx("h2",{children:"Services Provided"}),s.jsx("p",{children:"Mozno Advisory provides financial advisory services including but not limited to:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Wealth management and investment advisory"}),s.jsx("li",{children:"Financial planning and goal-based investing"}),s.jsx("li",{children:"Tax planning and optimization strategies"}),s.jsx("li",{children:"Insurance planning and product recommendations"}),s.jsx("li",{children:"Loan and borrowing solutions"})]}),s.jsx("h2",{children:"Client Responsibilities"}),s.jsx("p",{children:"As a client, you agree to:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Provide accurate and complete information about your financial situation"}),s.jsx("li",{children:"Inform us of any material changes in your circumstances"}),s.jsx("li",{children:"Make investment decisions based on your own risk assessment"}),s.jsx("li",{children:"Pay fees and charges as agreed upon"})]}),s.jsx("h2",{children:"Fee Structure"}),s.jsx("p",{children:"Our fee structure will be clearly communicated before engaging our services. Fees may include advisory fees, transaction charges, and third-party costs as applicable."}),s.jsx("h2",{children:"Confidentiality"}),s.jsx("p",{children:"We maintain strict confidentiality of all client information and will not disclose personal or financial details to unauthorized parties, except as required by law."}),s.jsx("h2",{children:"Risk Disclosure"}),s.jsx("p",{children:"All investments carry risk, and past performance does not guarantee future results. You acknowledge that you understand the risks associated with financial products and services."}),s.jsx("h2",{children:"Termination"}),s.jsx("p",{children:"Either party may terminate the advisory relationship with appropriate notice. Upon termination, all outstanding fees become due and payable."}),s.jsx("h2",{children:"Dispute Resolution"}),s.jsx("p",{children:"Any disputes arising from our services will be resolved through arbitration in Mumbai, Maharashtra, in accordance with Indian law."}),s.jsx("h2",{children:"Amendments"}),s.jsx("p",{children:"We reserve the right to modify these terms and conditions. Changes will be communicated to clients and posted on our website."}),s.jsx("h2",{children:"Governing Law"}),s.jsx("p",{children:"These terms are governed by the laws of India and subject to the jurisdiction of Mumbai courts."}),s.jsx("h2",{children:"Contact Information"}),s.jsx("p",{children:"For questions about these terms and conditions, please contact us at:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Email: info@moznoadvisory.com"}),s.jsx("li",{children:"Phone: +91 98765 43210"}),s.jsx("li",{children:"Address: Office No. 123, Business Center, Andheri East, Mumbai - 400069"})]})]})]})}),pI=`
# Specified Investment Funds (SIFs): The Niche Advantage for 22-45-Year-Old Indian Investors

> “If you want outsized returns, you have to be willing to go where the crowd isn’t—yet.”

Mutual funds cover the broad market; PMS and AIFs cater to the ultra-wealthy. **Specified Investment Funds (SIFs)** sit in the middle—**bespoke, concentrated, and lightly regulated vehicles** that give discerning investors aged 22-45 **targeted exposure to themes, sectors, or strategies** that plain-vanilla products simply cannot access.

At **Mozno Advisory**, we curate SIFs for clients who want:

- **Pre-IPO tech unicorns** before they list at 3× the valuation  
- **Green-energy infrastructure** yielding 12–14 % IRRs  
- **Quant-driven long-short** strategies uncorrelated to Nifty swings  
- **Fractional ownership** of Grade-A commercial real estate with 8 % rental yields  

This 2,000-word guide demystifies SIFs—what they are, how they’re structured, the risks, the rewards, and how to integrate them into a modern Indian portfolio.

---

## 1. What Exactly Is a Specified Investment Fund?

| Feature | Mutual Fund | PMS | AIF Cat-III | SIF |
|---------|-------------|-----|-------------|-----|
| **Minimum Ticket** | ₹500 SIP | ₹50 lakh | ₹1 crore | ₹10–25 lakh* |
| **Regulation** | SEBI MF Regs | SEBI PMS Regs | SEBI AIF Regs | **Contractual / LLP** |
| **Concentration** | Diversified ≤10 % per stock | ≤25 % per stock | Flexible | **Up to 100 % single theme** |
| **Liquidity** | Daily | Monthly | Quarterly–Yearly | **Strategy-specific** |
| **Reporting** | Monthly factsheet | Monthly | Quarterly | **Custom dashboards** |

*Ticket size is **set by the investment manager and Mozno Advisory jointly**—allowing **young professionals** to club family money or use **step-up commitments**.

---

## 2. Why SIFs Make Sense for 22-45-Year-Olds

### 2.1 Demographic Tailwinds
- **Long runway**: 20–35 years to harvest illiquidity premiums.  
- **Higher risk appetite**: Still in wealth-accumulation phase.  
- **Tech-savvy**: Comfortable with data rooms, virtual roadshows, and tokenised assets.

### 2.2 Market Gaps SIFs Fill

| Gap | Vanilla Product Limitation | SIF Solution |
|-----|----------------------------|--------------|
| **Pre-IPO Access** | Mutual funds cannot hold unlisted | Dedicated pre-IPO fund |
| **Thematic Leverage** | Index funds cap sector weights | 2× leveraged climate-tech fund |
| **Distressed Debt** | Credit-risk funds restricted | Special-situation SIF buying NPA pools at 40 % discount |

---

## 3. Common SIF Strategies in India (2024-25)

### 3.1 Pre-IPO Tech Pool
- **Target IRR**: 18–22 % over 4–5 years  
- **Pipeline**: 8–10 late-stage fintech, SaaS, and EV-charging startups  
- **Exit**: IPO, strategic sale, or buyback

### 3.2 Green Infrastructure Yield Trust
- **Asset**: 250 MW solar farms with 20-year PPA at ₹4.5/kWh  
- **Yield**: 12 % pre-tax cash yield + 2 % escalation  
- **Structure**: LLP with quarterly distributions

### 3.3 Quant Long-Short Equity
- **Edge**: Machine-learning factor model (momentum + quality)  
- **Gross exposure**: 150 % long / 50 % short  
- **Target**: 12–15 % net CAGR with <8 % max drawdown

### 3.4 Fractional Commercial Real Estate (CRE)
- **Asset**: Grade-A office in Bengaluru’s ORR, 95 % occupancy  
- **Minimum bite**: ₹25 lakh for 1,000 sq ft equivalent  
- **Returns**: 8 % net rental yield + 4–5 % capital appreciation

---

## 4. How SIFs Are Structured

### 4.1 Legal Wrapper
- **Special Purpose LLP** or **Trust**  
- **Investment Management Agreement (IMA)** defining fees, hurdle, high-water mark  
- **SEBI AIF-like governance** even if not formally registered (voluntary adoption)

### 4.2 Fee Stack

| Fee Component | Typical Range |
|---------------|---------------|
| **Management Fee** | 1–1.5 % p.a. |
| **Performance Fee** | 10–15 % above hurdle (8 % IRR) |
| **Exit Load** | 2 % first year, 1 % second, nil thereafter |

### 4.3 Liquidity Windows
- **Annual redemption** with 90-day notice  
- **Quarterly NAV** published by independent valuer  
- **Secondary trading desk** for fractional CRE tokens (optional)

---

## 5. Risk Map: What Can Go Wrong?

| Risk | Mitigation Tactics |
|------|--------------------|
| **Liquidity** | Staggered exits, secondary market quotes |
| **Concentration** | Cap single-name exposure via side-pockets |
| **Regulatory** | Voluntary SEBI AIF registration; quarterly legal audit |
| **Valuation** | Third-party CA/valuer + conservative DCF assumptions |
| **Key-Man** | Co-manager structure + key-man insurance |

---

## 6. Suitability Checklist for Investors

| Criterion | Conservative | Balanced | Aggressive |
|-----------|--------------|----------|------------|
| **Net-worth in SIF** | ≤ 5 % | 5–15 % | 15–30 % |
| **Emergency Fund** | 12 months | 9 months | 6 months |
| **Time Horizon** | ≥ 7 yrs | ≥ 5 yrs | ≥ 3 yrs |
| **Knowledge** | Basic | Moderate | Advanced |

---

## 7. Taxation Primer FY 2025-26

| Structure | STCG (< 3 yrs) | LTCG (≥ 3 yrs) | Notes |
|-----------|----------------|----------------|-------|
| **LLP** | Slab rate | 12.5 % with indexation | Pass-through to partners |
| **Trust** | 30 % flat | 12.5 % post-indexation | Can elect for AIF-like pass-through |
| **Listed REIT Fractionals** | 15 % | 10 % beyond ₹1.25 L | Rental yield taxed at slab |

**Pro-tip**: Club family HUF or parents as partners to **optimise tax slabs**.

---

## 8. Case Study: 32-Year-Old Building a ₹2-Crore Second Home

| Step | Details |
|------|---------|
| **Goal** | Down-payment of ₹2 Cr in 8 years |
| **SIF Allocation** | ₹30 lakh today in Green Infra Yield Trust |
| **Projected Value** | ₹60 lakh @ 12 % IRR (4 % yield + 8 % cap gain) |
| **Exit Strategy** | Exit Year-7 to lock gains; balance via equity SIPs |

---

## 9. How Mozno Advisory Curates SIFs

### 9.1 Screening Funnel
1. **Theme Viability** – TAM ≥ ₹10,000 Cr, policy tailwinds  
2. **Manager Track** – 5-year IRR > 15 %, downside < 10 %  
3. **Governance** – Independent trustee, quarterly audit  
4. **Liquidity** – At least one secondary exit window per year  
5. **Fee Fairness** – Hurdle ≥ 8 %, no catch-up clauses

### 9.2 Ongoing Monitoring
- **Monthly flash report** (occupancy, cash-flow)  
- **Quarterly NAV + valuation memo**  
- **Annual on-site audit** by Big-4 CA firm  
- **Investor call** every half-year

---

## 10. Building a SIF-Lite Portfolio

| Sleeve | Allocation | Vehicle |
|--------|------------|---------|
| **Core** | 60 % | Nifty 500 ETF |
| **Satellite-SIF** | 25 % | Pre-IPO Tech Pool |
| **Satellite-SIF** | 10 % | Fractional CRE |
| **Liquidity Buffer** | 5 % | Liquid Fund |

**Review**: Rebalance annually; reduce SIF to 15 % once goal is 3 years away.

---

## 11. Due-Diligence Checklist Before You Commit

- [ ] **Private Placement Memorandum** read end-to-end  
- [ ] **Key-man insurance** in place  
- [ ] **Exit gate mechanics** documented  
- [ ] **Audited P&L & balance sheet** last 3 years  
- [ ] **Side-pocket policy** for stressed assets  
- [ ] **Dispute resolution** – arbitration seat (Mumbai/Delhi)

---

## 12. Common Myths Busted

| Myth | Reality |
|------|---------|
| “SIFs are only for ₹1 Cr+” | **Minimum ₹10 lakh tickets** now common via pooling. |
| “Unregulated wild-west” | **Voluntary AIF-like governance** adopted by top managers. |
| “Can’t exit before 5 yrs” | **Annual windows + secondary desks** emerging. |

---

## 13. Fees & Transparency Snapshot

| Item | Mozno | Industry Avg |
|------|-------|--------------|
| **Access Fee** | ₹0 | 0.5–1 % |
| **Ongoing Advisory** | 0.25 % p.a. | 0.5 % p.a. |
| **Performance Review** | Quarterly | Annual |
| **Exit Advisory** | Free | 1 % |

---

## 14. Final Word

Specified Investment Funds are **the bridge between vanilla mutual funds and exclusive AIFs**, giving 22-45-year-old Indians **scalpel-like precision** to harvest **non-linear returns** without locking up crores for decades. Done right—with stringent due diligence, prudent sizing, and periodic rebalancing—SIFs can **turbo-charge goal achievement** while remaining within a well-structured risk framework.

---

## 15. Ready to Explore?

🔗 [**Book Your 30-Minute SIF Discovery Call**](https://mozno.com)

*Mozno Advisory acts as a distributor/arranger and does not guarantee returns. Investments carry market, liquidity, and regulatory risks. Please read all offering documents carefully.*
`;function mI(){return s.jsxs(s.Fragment,{children:[s.jsxs(Ne,{children:[s.jsx("title",{children:"Specified Investment Funds – Mozno"}),s.jsx("meta",{name:"description",content:"Complete guide for 22-45-year-old Indians to build wealth via mutual funds."})]}),s.jsx("main",{children:s.jsx("article",{className:"blog-page",children:s.jsx(we,{rehypePlugins:[Ae],remarkPlugins:[Ie],components:{h1:e=>s.jsx("h1",{className:"blog-page__heading blog-page__heading--h1",...e}),h2:e=>s.jsx("h2",{className:"blog-page__heading blog-page__heading--h2",...e}),h3:e=>s.jsx("h3",{className:"blog-page__heading blog-page__heading--h3",...e}),p:e=>s.jsx("p",{className:"blog-page__paragraph",...e}),blockquote:e=>s.jsx("blockquote",{className:"blog-page__blockquote",...e}),ul:e=>s.jsx("ul",{className:"blog-page__list",...e}),ol:e=>s.jsx("ol",{className:"blog-page__list",...e}),li:e=>s.jsx("li",{className:"blog-page__list-item",...e}),table:e=>s.jsx("table",{className:"blog-page__table",...e}),th:e=>s.jsx("th",{className:"blog-page__th",...e}),td:e=>s.jsx("td",{className:"blog-page__td",...e}),a:e=>s.jsx("a",{className:"blog-page__link",...e}),strong:e=>s.jsx("strong",{className:"blog-page__strong",...e}),code:e=>s.jsx("code",{className:"blog-page__code",...e}),hr:e=>s.jsx("hr",{className:"blog-page__hr",...e})},children:pI})})})]})}const gI=`
# Portfolio Management Services (PMS): The Premium Wealth-Building Playbook for 22-45-Year-Old Indians

> *“When your net-worth starts looking like a phone number, cookie-cutter investing stops making sense.”*

If you are **22-45 years old**, earning strong cash-flow, and sitting on **more than ₹50 lakh** in investable surplus, **Portfolio Management Services (PMS)** can move the needle from **“wealth accumulation”** to **“wealth acceleration”**. Unlike mutual funds that pool thousands of investors, PMS creates a **separate, personalised portfolio in your own demat account**, run by a professional fund manager who can take **concentrated bets, use derivatives, and time the market**—all while staying within SEBI’s tight regulatory guardrails.

At **Mozno Advisory**, we **curate, monitor, and periodically rotate PMS strategies** for young professionals, entrepreneurs, and CXOs who demand **alpha, transparency, and tax efficiency** in one package. Below is a **2,000-word master-guide** that walks you through **every nuance you need** before writing that first ₹50 lakh cheque.

---

## 1. What Exactly Is PMS?

| Parameter | Mutual Fund | PMS | AIF Cat-III |
|-----------|-------------|-----|-------------|
| **Minimum Ticket** | ₹500 SIP | **₹50 lakh** | ₹1 crore |
| **Ownership** | Pooled units | **Your own stocks** | LLP/Trust units |
| **Flexibility** | 10 % max single stock | **Up to 25 % single stock** | Flexible |
| **Derivatives** | Limited | **Full F&O allowed** | Full |
| **Reporting** | Monthly factsheet | **Daily/weekly portfolio** | Quarterly |
| **Taxation** | Investor level | **Direct in your PAN** | Pass-through |

---

## 2. Why PMS Makes Sense at 22-45

### 2.1 The Demographic Sweet Spot
- **High human-capital runway**: 20-35 years of future earnings.
- **Liquidity surplus**: ESOPs, business exits, founder liquidity events.

### 2.2 Numbers That Matter
| Starting Age | SIP in PMS (₹) | CAGR | Corpus @ 55 |
|--------------|----------------|------|-------------|
| 30           | 5 lakh/yr      | 15 % | ₹7.2 Cr |
| 30           | 5 lakh/yr      | 18 % | ₹11.4 Cr |
*Assumes step-up of 10 % per year.*

---

## 3. Regulatory Landscape (SEBI PMS Rules 2023)

- **Registration**: SEBI PMS licence mandatory. Check **ARN-PMS** on SEBI portal.  
- **Disclosure**: Daily NAV & portfolio e-mailed; **monthly performance** + **annual audit**.  
- **Leverage**: Gross exposure ≤ 200 % of net assets (derivatives included).  
- **Segregation**: Client assets held in **separate demat/bank accounts**—no pooling.  
- **Fees**: Only two components allowed—**fixed (max 2.5 % p.a.) + performance (max 20 % above hurdle)**.

---

## 4. PMS Styles in India (2024-25)

| Style | Description | Target CAGR | Volatility |
|-------|-------------|-------------|------------|
| **Large-Cap Focus** | Top-100 stocks, low churn | 12–14 % | Medium |
| **Flexi/Multi-Cap** | 50–70 stocks, active sector tilt | 15–17 % | Medium-High |
| **Mid/Small-Cap** | 25–40 high-growth stocks | 18–22 % | High |
| **Quant-Derivative** | Long-short via F&O, market-neutral | 14–16 % | Low |
| **ESG Leaders** | High-governance companies | 13–15 % | Medium |

---

## 5. Fee Structures Demystified

| Fee Type | Typical Range |
|----------|---------------|
| **Fixed** | 1.5–2.5 % p.a. |
| **Performance** | 10–20 % above hurdle |
| **Exit Load** | 0–2 % first year |

**Pro-tip**: Always ask for **“post-fee CAGR”** in the pitchbook, not gross.

---

## 6. Taxation Cheat-Sheet FY 2025-26

| Holding Period | Equity PMS | Derivative PMS |
|----------------|------------|----------------|
| **< 12 months** | 20 % STCG | Speculative 30 % |
| **≥ 12 months** | 12.5 % LTCG above ₹1.25 lakh | 12.5 % LTCG |
| **Sec 80C/80D** | Not applicable | Not applicable |

**Key**: Since stocks sit in **your own PAN**, you can **harvest losses** and **claim grandfathering** on pre-31-Jan-2018 holdings.

---

## 7. How Mozno Advisory Picks a PMS

### 7.1 Quant Filter
- **Rolling 5-yr CAGR ≥ 14 %**  
- **Downside capture < 75 %**  
- **Sharpe > 1.0** over last 5 yrs  
- **Maximum drawdown < 25 %**

### 7.2 Qual Filter
- **Fund-manager tenure ≥ 7 yrs**  
- **Skin in the game** (manager money ≥ ₹5 Cr)  
- **Transparent model portfolio** (no black-box)  
- **SEBI PMS licence clean track** (no show-cause notices)

### 7.3 Continuous Monitoring
- **Monthly attribution report** (sector vs stock bets)  
- **Quarterly call** with fund manager  
- **Annual audit** + **risk dashboard** (VaR, beta, concentration)

---

## 8. Case Studies

### 8.1 The ESOP Millionaire
**Profile**: 34-year-old fintech VP, just liquidated ₹2 Cr ESOPs.  
**Allocation**:  
- 70 % Mid/Small-Cap PMS (target 18 % CAGR)  
- 20 % Quant-Derivative PMS (market-neutral, 14 %)  
- 10 % Liquid fund buffer  

**Outcome (projected)**: ₹7.8 Cr at age 50, post-fees.

### 8.2 Young Entrepreneur
**Profile**: 28-year-old D2C founder, surplus ₹60 lakh.  
**Strategy**:  
- ₹50 lakh Flexi-Cap PMS (high-conviction 25 stocks)  
- ₹10 lakh index ETF (liquidity buffer)  

**Glide-path**: Shift 10 % to debt every birthday after 40.

---

## 9. Risk Controls in PMS

| Control | Mechanism |
|---------|-----------|
| **Concentration** | Single stock ≤ 25 %, sector ≤ 35 % |
| **Leverage** | Gross exposure ≤ 200 % (SEBI cap) |
| **Liquidity** | 90 % portfolio in top-500 stocks |
| **Stop-loss** | Model-level 15 % trailing stop (optional) |
| **Transparency** | **Real-time** back-office login |

---

## 10. Common Mistakes to Avoid

1. **Chasing last year’s star PMS** → leads to buying high.  
2. **Ignoring post-fee returns** → 2 % fees can erode 25 % wealth in 10 yrs.  
3. **Concentrated sector bets without hedge** → 2008 infra funds down 70 %.  
4. **No liquidity ladder** → PMS lock-in clashes with house down-payment.  
5. **Forgetting tax harvesting** → losing indexation on grandfathered stocks.

---

## 11. PMS vs DIY Stock-Picking

| Factor | DIY | PMS |
|--------|-----|-----|
| **Time** | 10 hrs/week | 0 hrs |
| **Research Depth** | Limited | Team of CFAs, tech stack |
| **Execution** | Retail brokerage | **Institutional DMA** |
| **Risk Tools** | Basic | **VaR, portfolio optimiser** |
| **Tax Planning** | Self | **Year-end loss harvesting** included |

---

## 12. Role of Mozno Advisory (End-to-End Service)

| Stage | Deliverable |
|-------|-------------|
| **Discovery** | 45-min risk interview + psychometrics |
| **Shortlist** | 3 PMS options matched to persona |
| **Due-Diligence** | Independent audit + peer benchmarking |
| **Onboarding** | KYC, PMS agreement, demat mapping |
| **Funding** | RTGS/Net-banking; 24-hr credit |
| **Monitoring** | Monthly call + dashboard |
| **Exit/Rebalance** | Trigger-based (goal or risk drift) |

---

## 13. Fee Negotiation Hacks

- **Bulk ticket**: ₹1 Cr+ usually fetches 0.75 % fixed vs 1.5 %.  
- **Performance hurdle**: Negotiate 10 % vs 12 %.  
- **Exit load waiver**: Ask for **nil after 12 months**.  
- **Family pooling**: Spouse + HUF can hit higher tier discounts.

---

## 14. Tax-Loss Harvesting Example

**Scenario**: ₹1 Cr portfolio, ₹20 lakh unrealised losses.  
**Action**: Book losses before 31 March → offset ₹20 lakh gains elsewhere → **tax saving = ₹2.5 lakh** (12.5 % LTCG).  
**Mozno Service**: Automated sell-buy in 30-day window to avoid wash-sale.

---

## 15. How to Start: 7-Day Action Plan

| Day | Task |
|-----|------|
| **1** | Fill **PMS Suitability Form** (link). |
| **2** | 30-minute Zoom call with Mozno expert. |
| **3** | Receive **custom PMS shortlist + factsheets**. |
| **4** | Compare **post-fee CAGR & max drawdown**. |
| **5** | Sign **PMS agreement** + KYC upload. |
| **6** | Fund account via RTGS; receive **welcome kit**. |
| **7** | **Live dashboard** credentials + first quarterly call invite.

---

## 16. Frequently Asked Questions

**Q1. Is ₹50 lakh too small to start PMS?**  
A: **No.** Many managers accept ₹50 lakh; pooling with family can unlock lower fees.

**Q2. Can I lose more than invested?**  
A: **No.** SEBI caps leverage at 200 % gross; your liability is limited to capital.

**Q3. How liquid is PMS?**  
A: **T+3 settlement** for equity; **monthly liquidity** for derivative strategies.

**Q4. Do I need a demat account?**  
A: **Yes**, stocks are held in **your own demat**—not pooled.

**Q5. Can I run SIPs into PMS?**  
A: **Monthly or quarterly** top-ups allowed; minimum ₹2 lakh per tranche.

---

## 17. Key Takeaways

- PMS is **not “costly mutual fund”**—it is **personalised, concentrated, and tax-transparent**.  
- **22-45 age group** has the **time and surplus** to harvest alpha efficiently.  
- **Manager selection + fee negotiation + ongoing monitoring** are the **three levers** that decide final wealth.  
- **Transparency and liquidity** have improved dramatically post-SEBI 2020 rules.

---

## 18. Ready to Explore?

🔗 [**Book Your Free PMS Strategy Call**](https://mozno.com)

*Mozno Advisory is a SEBI-registered investment adviser and AMFI-registered mutual fund distributor. PMS services are provided in partnership with SEBI-licensed portfolio managers. All investments are subject to market risks. Please read the PMS disclosure document carefully.*
`;function yI(){return s.jsxs(s.Fragment,{children:[s.jsxs(Ne,{children:[s.jsx("title",{children:"PMS Guide – Mozno Advisory"}),s.jsx("meta",{name:"description",content:"Complete guide for 22-45-year-old Indians to build wealth via mutual funds."})]}),s.jsx("main",{children:s.jsx("article",{className:"blog-page",children:s.jsx(we,{rehypePlugins:[Ae],remarkPlugins:[Ie],components:{h1:e=>s.jsx("h1",{className:"blog-page__heading blog-page__heading--h1",...e}),h2:e=>s.jsx("h2",{className:"blog-page__heading blog-page__heading--h2",...e}),h3:e=>s.jsx("h3",{className:"blog-page__heading blog-page__heading--h3",...e}),p:e=>s.jsx("p",{className:"blog-page__paragraph",...e}),blockquote:e=>s.jsx("blockquote",{className:"blog-page__blockquote",...e}),ul:e=>s.jsx("ul",{className:"blog-page__list",...e}),ol:e=>s.jsx("ol",{className:"blog-page__list",...e}),li:e=>s.jsx("li",{className:"blog-page__list-item",...e}),table:e=>s.jsx("table",{className:"blog-page__table",...e}),th:e=>s.jsx("th",{className:"blog-page__th",...e}),td:e=>s.jsx("td",{className:"blog-page__td",...e}),a:e=>s.jsx("a",{className:"blog-page__link",...e}),strong:e=>s.jsx("strong",{className:"blog-page__strong",...e}),code:e=>s.jsx("code",{className:"blog-page__code",...e}),hr:e=>s.jsx("hr",{className:"blog-page__hr",...e})},children:gI})})})]})}const xI=`
# Alternative Investment Funds (AIFs): The Power-Play Guide for 22-45-Year-Old Indians

> “When the public markets feel crowded, alpha hides in the private corners.”

If you are 22-45 years old, already maxing out your ELSS and PMS, and still hunting for **venture-style returns**, **real-asset yields**, or **market-neutral alpha**, **Alternative Investment Funds (AIFs)** are where the action is.  
Think **pre-IPO unicorns**, **fractional Grade-A warehouses**, **climate-tech**, **distressed debt**, or **quant long-short strategies**—all wrapped in a **SEBI-regulated** structure with **institutional-grade governance** and **ticket sizes starting at ₹1 crore**.

At **Mozno Advisory**, we **source, vet, and monitor Category I, II & III AIFs** so that young professionals, CXOs, and business owners can **deploy capital surgically** without becoming full-time private-equity analysts.  
Below is a **2,000-word playbook** covering every angle—from **regulations to real-world returns**—so you can decide **where, how, and how much** to allocate.

---

## 1. AIF Landscape in India (SEBI 2012 Regulations)

| Category | Focus | Risk | Tax Pass-Through | Min Ticket |
|----------|-------|------|------------------|------------|
| **Cat I – Social/Infra/VC** | Start-ups, VC, social ventures, affordable housing | High | **Yes** | ₹1 Cr |
| **Cat II – PE/Real Estate** | Private equity, real estate, PIPE | Med-High | **Yes** | ₹1 Cr |
| **Cat III – Hedge/Quant** | Long-short, arbitrage, derivatives | Medium | **Yes** | ₹1 Cr |

---

## 2. Why AIFs for 22-45-Year-Olds?

| Advantage | Vanilla MF Limitation | AIF Solution |
|-----------|-----------------------|--------------|
| **Venture Exposure** | Max 10 % unlisted | **100 % pre-IPO** |
| **Leverage** | No | **2× gross exposure (Cat III)** |
| **Real Assets** | REITs only listed | **Direct warehouses, solar farms** |
| **Tax Efficiency** | LTCG 12.5 % | **Pass-through to investor slab** |

---

## 3. Deep-Dive: Each Category

### 3.1 Category I – The “Impact & Early-Stage” Bucket
- **Sub-strategies**  
  - **Venture Capital (VC)**: Pre-Series A to Pre-IPO tech.  
  - **Social Venture**: Affordable housing, ed-tech for Bharat.  
  - **Infrastructure**: Toll roads, data centres, green hydrogen.

- **Target IRR**: **18–25 %** over 7–10 yrs.  
- **Exit**: IPO, strategic sale, secondary buyouts.

**Case: Cat I VC Fund – Fintech Series-B to IPO**

| Year | NAV | Event |
|------|-----|-------|
| 2020 | ₹100 | Series-B @ $400 m |
| 2022 | ₹220 | Series-D @ $1.1 bn |
| 2024 | ₹480 | IPO @ $3.2 bn |

---

### 3.2 Category II – The “Growth & Yield” Engine
- **Private Equity (PE)**: 5–7 yr growth capital in mid-cap unlisted.  
- **Real Estate (RE)**: Fractional logistics parks yielding **10–12 %**.  
- **Distressed Debt**: Buying NPAs at 40 ¢ on the ₹.

**Case: Cat II Logistics RE**
- **Asset**: 1.2 mn sq ft Grade-A warehouse, NCR.  
- **Yield**: 11 % net + 4 % escalation.  
- **Exit**: REIT listing Year-7 → **2.2× MOIC**.

---

### 3.3 Category III – The “Market-Neutral & Absolute Return” Play
- **Long-Short Equity**: Machine-learning factor model.  
- **Stat-Arb**: Pair trading, volatility harvesting.  
- **Event-Driven**: M&A, buy-back, delisting.

**Performance Snapshot (Cat III Quant)**

| Metric | Value |
|--------|-------|
| **Since-Inception CAGR** | 15.4 % |
| **Max Drawdown** | 6.8 % |
| **Sharpe** | 1.9 |
| **Correlation with Nifty** | 0.12 |

---

## 4. Fee Architecture

| Layer | Typical Range | Mozno Negotiated |
|-------|---------------|------------------|
| **Management Fee** | 1–2 % p.a. | 1 % (Cat II), 1.5 % (Cat I/III) |
| **Performance Fee** | 10–20 % above hurdle | 12 % above 10 % hurdle |
| **Organisational Expenses** | 0.2–0.5 % | Capped at 0.3 % |

---

## 5. Taxation FY 2025-26

| Structure | Short-Term (< 3 yrs) | Long-Term (≥ 3 yrs) | Notes |
|-----------|----------------------|---------------------|-------|
| **Cat I & II (Pass-through)** | Slab rate | Slab rate | Indexation **not** available |
| **Cat III (Pass-through)** | Slab rate | Slab rate | Gains flow to investor PAN |
| **Sponsor Dividend** | Exempt in fund | Exempt in investor | TDS 10 % if > ₹5,000 |

**Pro-tip**: Time exits to low-income years (sabbatical, startup loss offset).

---

## 6. Liquidity & Tenor Map

| Category | Commitment | Liquidity Window | Typical Life |
|----------|------------|------------------|--------------|
| **Cat I VC** | 3–5 yrs | Yearly tender | 10 yrs |
| **Cat II PE/RE** | 3–5 yrs | Yearly tender / REIT IPO | 7–9 yrs |
| **Cat III Hedge** | Monthly | Monthly / Quarterly | Open-ended |

---

## 7. How Mozno Advisory Selects AIFs

### 7.1 Quant Filter
- **Vintage ≥ 3 yrs**  
- **IRR ≥ 15 % net**  
- **DPI ≥ 1.0×** (Cat I/II)  
- **Max Drawdown < 12 %** (Cat III)

### 7.2 Qual Filter
- **Fund manager tenure ≥ 7 yrs**  
- **Skin in game ≥ 5 % of corpus**  
- **SEBI Cat I/II/III registration clean**  
- **Transparent valuation policy** (Big-4 CA sign-off)

### 7.3 Ongoing Oversight
- **Quarterly GP letter**  
- **Annual onsite asset visit** (RE)  
- **Investor call** every half-year  
- **Risk dashboard** (VaR, concentration, leverage)

---

## 8. Case Studies

### 8.1 The ESOP Unicorn Play
**Profile**: 29-year-old product manager, ₹1.5 Cr surplus.  
**Allocation**: ₹75 lakh Cat I VC Fund (Pre-Series B SaaS).  
**Timeline**:

| Year | Event | NAV Multiple |
|------|-------|--------------|
| 2021 | Series-B @ $500 m | 1.0× |
| 2023 | Series-E @ $2 bn | 2.4× |
| 2025 | IPO @ $6 bn | 5.8× |

**Net IRR**: **26 %** post-fees & carry.

---

### 8.2 Fractional Solar Yield
**Profile**: 35-year-old doctor, ₹1 Cr ticket.  
**Asset**: 50 MW solar SPV, 20-yr PPA @ ₹4.3/kWh.  
**Cash Yield**: 12 % (pre-tax) + 2 % escalation.  
**Exit**: Refinancing Year-6 → **2.1× equity MOIC**.

---

## 9. Building an AIF Allocation Framework

| Bucket | Allocation | Rationale |
|--------|------------|-----------|
| **Core Equity (PMS/MF)** | 50 % | Liquidity & base growth |
| **Cat I – VC** | 15 % | Pre-IPO alpha |
| **Cat II – RE/PE** | 25 % | Real-asset yield & diversification |
| **Cat III – Hedge** | 10 % | Absolute return, low correlation |

**Rebalance**: Shift 5 % from Cat I/II to debt every year **post age 45**.

---

## 10. Due-Diligence Checklist

- [ ] **SID & PPM** read end-to-end.  
- [ ] **GP commitment** ≥ 5 % of fund.  
- [ ] **Valuation policy** audited by Big-4.  
- [ ] **Key-man insurance** & **ESOP retention pool**.  
- [ ] **Exit/liquidity** clause (tender, REIT, secondary).  
- [ ] **Side-pocket** policy for stressed assets.

---

## 11. Liquidity Solutions Pre-Maturity

| Option | Mechanism | Discount |
|--------|-----------|----------|
| **Secondary Sale** | PE/VC exchanges (LetsVenture, Trica) | 5–15 % |
| **Structured Exit** | GP-led continuation fund | 0–5 % |
| **REIT Listing** | Sponsor rolls assets into public REIT | Par-to-premium |

---

## 12. Common Myths Busted

| Myth | Reality |
|------|---------|
| “Only ₹5 Cr+ tickets” | **₹1 Cr entry** now common via feeder structures. |
| “No regulation” | **SEBI AIF Rules 2012**, monthly disclosures. |
| “Locked for 10 yrs” | Cat III offers **monthly liquidity**. |
| “Tax inefficient” | **Pass-through** often beats company-level tax. |

---

## 13. How to Start: 7-Day Workflow

| Day | Action |
|-----|--------|
| **1** | Fill **AIF Suitability Matrix** (link). |
| **2** | 30-minute Zoom call with Mozno specialist. |
| **3** | Receive **short-list of 3 AIFs** + SID/PPMs. |
| **4** | Review legal docs, investor calls recordings. |
| **5** | Sign **Contribution Agreement** + KYC. |
| **6** | Wire funds to AIF escrow. |
| **7** | **Welcome kit**, capital-call schedule, dashboard login.

---

## 14. Fee Negotiation Levers

- **Early-bird discount** (first close) → 0.5 % off mgmt fee.  
- **Family pooling** → HUF + parents = tier-break.  
- **Co-investment** → commit to follow-on rounds → 2 % carry rebate.

---

## 15. Tax-Loss Harvesting Snapshot

| Scenario | Gain | Loss Booked | Net Tax |
|----------|------|-------------|---------|
| Cat II RE exit | ₹40 L | ₹10 L | ₹3.75 L vs ₹5 L |

Mozno dashboard **flags harvestable losses** quarterly.

---

## 16. Key Takeaways

- AIFs give **access to private alpha** once reserved for institutions.  
- **Cat I = growth**, **Cat II = yield**, **Cat III = absolute return**.  
- **1 Cr ticket, 7-10 yr horizon, and robust due-diligence** are non-negotiable.  
- **Tax pass-through** and **liquidity windows** have made AIFs **mainstream** for affluent Indians.

---

## 17. Ready to Deep-Dive?

🔗 [**Book Your 30-Minute AIF Discovery Call**](https://www.moznoadvisory.com/aif-call)  
📥 [**Download Top 5 Cat II/Cat III Tear-Sheets**](https://www.moznoadvisory.com/aif-samples)

*Mozno Advisory is a SEBI-registered investment adviser. AIF services are provided in partnership with SEBI-licensed Category I/II/III fund managers. All investments carry market, liquidity, and regulatory risks. Please read the Private Placement Memorandum and contribution agreement carefully.*
`;function bI(){return s.jsxs(s.Fragment,{children:[s.jsxs(Ne,{children:[s.jsx("title",{children:"AIF Guide – Mozno Advisory"}),s.jsx("meta",{name:"description",content:"Complete guide for 22-45-year-old Indians to build wealth via mutual funds."})]}),s.jsx("main",{children:s.jsx("article",{className:"blog-page",children:s.jsx(we,{rehypePlugins:[Ae],remarkPlugins:[Ie],components:{h1:e=>s.jsx("h1",{className:"blog-page__heading blog-page__heading--h1",...e}),h2:e=>s.jsx("h2",{className:"blog-page__heading blog-page__heading--h2",...e}),h3:e=>s.jsx("h3",{className:"blog-page__heading blog-page__heading--h3",...e}),p:e=>s.jsx("p",{className:"blog-page__paragraph",...e}),blockquote:e=>s.jsx("blockquote",{className:"blog-page__blockquote",...e}),ul:e=>s.jsx("ul",{className:"blog-page__list",...e}),ol:e=>s.jsx("ol",{className:"blog-page__list",...e}),li:e=>s.jsx("li",{className:"blog-page__list-item",...e}),table:e=>s.jsx("table",{className:"blog-page__table",...e}),th:e=>s.jsx("th",{className:"blog-page__th",...e}),td:e=>s.jsx("td",{className:"blog-page__td",...e}),a:e=>s.jsx("a",{className:"blog-page__link",...e}),strong:e=>s.jsx("strong",{className:"blog-page__strong",...e}),code:e=>s.jsx("code",{className:"blog-page__code",...e}),hr:e=>s.jsx("hr",{className:"blog-page__hr",...e})},children:xI})})})]})}const EI=`
# 2.1 Goal-Based Financial Planning  

> “A goal without a plan is just a wish.” – and in India, inflation makes it an expensive wish.

Goal-Based Financial Planning (GBFP) is the **blueprint that turns life milestones into rupee targets and timelines**.  
Instead of chasing “maximum returns”, we **reverse-engineer the exact amount you need to save and invest** to buy a home in Mumbai, send two kids to Ivy League colleges, or retire at 50 on ₹2 lakh a month.  
Written for **22-45-year-old Indians**, this guide walks step-by-step from **dream to dashboard**.

---

## 1. Why Goal-Based Planning Matters in 2025
- **Inflation is real**: Education costs rise 8–10 % p.a.; healthcare 12 %.
- **Life-stage compression**: Marriage at 28, kids at 30, second home at 35, FIRE at 45.
- **Product overload**: 2,500+ mutual funds, REITs, PMS, AIFs—**GBFP is the filter**.

---

## 2. The GBFP Framework

| Step | Tool | Output |
|------|------|--------|
| 1. Define SMART Goals | Excel/Goal Calculator | Target corpus + date |
| 2. Map Cash-Flow | Budget App | Surplus per month |
| 3. Risk Score | Psychometric Quiz | Equity vs Debt split |
| 4. Choose Instruments | Fund Short-list | SIP amounts |
| 5. Monitor & Rebalance | Dashboard Review | Course-corrections |

---

## 3. Three Buckets Every Indian Must Fill

| Bucket | Horizon | Example | Instruments |
|--------|---------|---------|-------------|
| **Safety** | 0–3 yrs | Emergency fund, Europe trip | Liquid fund, FD |
| **Growth** | 3–10 yrs | Home down-payment | Flexi-cap, balanced-advantage |
| **Legacy** | 10 yrs+ | Retirement, kids’ college | Equity, PPF, NPS |

---

## 4. Quantifying Goals with Real Numbers

### 4.1 Home in Bengaluru
- **Future cost** (8 yrs, 7 % inflation): ₹1.9 Cr  
- **Down-payment (20 %)**: ₹38 lakh  
- **Monthly SIP** @ 11 % → ₹27,000

### 4.2 Child’s Undergrad Abroad
- **Future cost** (15 yrs, 9 % inflation): ₹2.7 Cr  
- **Lumpsum today** @ 12 % → ₹39 lakh  
- **Monthly SIP** → ₹54,000

---

## 5. Risk Profiling – The Mozno 5-Minute Matrix

| Factor | Score 1 | Score 2 | Score 3 |
|--------|---------|---------|---------|
| Age | ≥ 45 | 35–44 | ≤ 34 |
| Stability | Govt job | Pvt job | Business |
| Loss Tolerance | Can’t sleep | Accept 15 % fall | Buy more dip |
| Debt-to-Income | ≥ 40 % | 20–40 % | ≤ 20 % |
| Experience | < 2 yrs | 2–7 yrs | ≥ 7 yrs |

**Total 5–8** → Balanced; **9–15** → Aggressive.

---

## 6. Asset Allocation by Risk Score

| Score | Equity % | Debt % | Gold % |
|-------|----------|--------|--------|
| Conservative | 40 | 50 | 10 |
| Balanced | 60 | 30 | 10 |
| Aggressive | 80 | 15 | 5 |

---

## 7. Choosing the Right Instruments

### 7.1 Safety Bucket
- **Liquid fund** – 6.8 %, T+1 redemption  
- **Ultra-short duration** – 7.2 %, indexation after 3 yrs  
- **Bank FD** – 7 % (lock-in 1–3 yrs)

### 7.2 Growth Bucket
- **Flexi-cap active** – 12–14 % 10-yr CAGR  
- **ELSS** – Tax-saving + lock-in 3 yrs  
- **Balanced-advantage** – Low volatility, equity taxation

### 7.3 Legacy Bucket
- **Nifty 500 ETF** – 0.1 % TER  
- **NPS Tier-1** – Extra ₹50k 80CCD(1B) + 75 % equity auto-glide  
- **PPF** – 7.1 % tax-free + 15-yr lock-in

---

## 8. Automation & Discipline

| Tool | Benefit |
|------|---------|
| **SIP Mandate** | Rupee-cost averaging |
| **Step-up SIP** | 10 % annual increase with salary |
| **Goal-tracking App** | Visual % progress daily |
| **Annual Rebalance** | Book profits, move to debt near goal |

---

## 9. Behavioural Biases & Fixes

| Bias | Behaviour | Fix |
|------|-----------|-----|
| **Loss Aversion** | Panic sell in crash | Auto-rebalance rules |
| **Present Bias** | Skip SIP for iPhone | “Pay yourself first” rule |
| **Overconfidence** | 80 % small-cap at 25 | IPS (Investment Policy Statement) |

---

## 10. Real-Life Case Study: 29-Year-Old Consultant

| Goal | Years | Corpus Needed | SIP Today |
|------|-------|---------------|-----------|
| Emergency | 1 | ₹6 L | Done (liquid fund) |
| Car | 3 | ₹15 L | ₹36k balanced fund |
| House | 8 | ₹50 L | ₹38k flexi-cap |
| Retirement | 30 | ₹8 Cr | ₹35k NPS + ETF |

**Total monthly SIP**: ₹1.09 L (step-up 8 % yearly).

---

## 11. Tech Stack for DIY Goal Tracking

- **Moneyfront** – Goal SIP calculator  
- **Kuvera** – Family tagging, tax harvesting  
- **Excel** – Custom glide-path model  
- **Notion** – Annual review template

---

## 12. Annual Review Checklist

- [ ] **Goal inflation** revised (CPI + 2 %)  
- [ ] **SIP step-up** executed (salary hike)  
- [ ] **Asset drift** > 5 % → rebalance  
- [ ] **Insurance** cover reviewed  
- [ ] **Tax harvesting** executed (loss booking)

---

## 13. When to Seek Professional Help

- Multiple conflicting goals  
- ESOP or business sale windfall  
- Cross-border income (RSUs, ESPP)  
- Complex tax situations (NRIs, HUF)

---

## 14. Key Takeaways

- **Start early**—every 5-year delay doubles the SIP amount.  
- **Inflation-adjusted targets** prevent nasty shortfalls.  
- **Automate everything**—behaviour trumps brilliance.  
- **Review annually**—life, markets, and goals change.

---

## 15. Ready to Blueprint Your Goals?

🔗 [**Book Your 45-Minute Goal-Planning Session**](https://www.moznoadvisory.com/goal-call)  
📥 [**Download Free Goal-Setting Excel**](https://www.moznoadvisory.com/goal-excel)

*Mozno Advisory is a SEBI-registered investment adviser. Past performance does not guarantee future results.*
`;function TI(){return s.jsxs(s.Fragment,{children:[s.jsxs(Ne,{children:[s.jsx("title",{children:"Goal-Based Planning – Mozno Advisory"}),s.jsx("meta",{name:"description",content:"Complete guide for 22-45-year-old Indians to build wealth via mutual funds."})]}),s.jsx("main",{children:s.jsx("article",{className:"blog-page",children:s.jsx(we,{rehypePlugins:[Ae],remarkPlugins:[Ie],components:{h1:e=>s.jsx("h1",{className:"blog-page__heading blog-page__heading--h1",...e}),h2:e=>s.jsx("h2",{className:"blog-page__heading blog-page__heading--h2",...e}),h3:e=>s.jsx("h3",{className:"blog-page__heading blog-page__heading--h3",...e}),p:e=>s.jsx("p",{className:"blog-page__paragraph",...e}),blockquote:e=>s.jsx("blockquote",{className:"blog-page__blockquote",...e}),ul:e=>s.jsx("ul",{className:"blog-page__list",...e}),ol:e=>s.jsx("ol",{className:"blog-page__list",...e}),li:e=>s.jsx("li",{className:"blog-page__list-item",...e}),table:e=>s.jsx("table",{className:"blog-page__table",...e}),th:e=>s.jsx("th",{className:"blog-page__th",...e}),td:e=>s.jsx("td",{className:"blog-page__td",...e}),a:e=>s.jsx("a",{className:"blog-page__link",...e}),strong:e=>s.jsx("strong",{className:"blog-page__strong",...e}),code:e=>s.jsx("code",{className:"blog-page__code",...e}),hr:e=>s.jsx("hr",{className:"blog-page__hr",...e})},children:EI})})})]})}const vI=`
# 2.2 Strategic Asset Allocation (SAA): Your GPS for Lifetime Wealth

> “It’s not timing the market, but time **in** the right allocation that builds fortunes.”

Strategic Asset Allocation (SAA) is the **single biggest driver** of long-term portfolio returns—more than stock-picking or market-timing.  
For Indians aged 22-45, it answers: **“Given my goals, risk, and time, what % of my money should sleep in equity, debt, gold, real-estate, and alternatives today—and how should that drift over decades?”**

Below is a **2,000-word field manual** to build, implement, and glide your SAA.

---

## 1. SAA vs Tactical Allocation

| Dimension | SAA (Strategic) | TAA (Tactical) |
|-----------|-----------------|----------------|
| **Time Horizon** | 5–30 yrs | 3–12 months |
| **Driver** | Goals + Risk | Market valuation |
| **Rebalance Freq.** | Annual | Monthly/Quarterly |
| **Example** | 70 % equity @ 25 yrs | +10 % equity if P/E < 18 |

---

## 2. Inputs for SAA Design

| Input | Tools | Sample Output |
|-------|-------|---------------|
| **Goals** | Goal calculator | ₹5 Cr retirement @ 50 |
| **Risk** | Psychometric quiz | Aggressive (score 12/15) |
| **Time** | Age + horizon | 25 yrs |
| **Liquidity** | Cash-flow model | Need 5 % liquid always |

---

## 3. Historical Risk-Return Grid (INR, 1997-2024)

| Asset | CAGR | Std Dev | Max DD | Sharpe |
|--------|------|---------|--------|--------|
| **Nifty 500** | 12.8 % | 19 % | 60 % | 0.67 |
| **10-yr Gilt** | 7.9 % | 6 % | 15 % | 1.32 |
| **Gold** | 9.4 % | 14 % | 40 % | 0.67 |
| **REITs** | 11.2 % | 13 % | 30 % | 0.86 |

---

## 4. Glide-Path Models

### 4.1 Age-Based Rule (Simple)
| Age | Equity % | Debt % |
|-----|----------|--------|
| 25 | 80 | 20 |
| 35 | 70 | 30 |
| 45 | 60 | 40 |
| 55 | 45 | 55 |

### 4.2 Risk-Capacity Model (Advanced)
- **Dynamic drift**: Equity % = 120 – (Age × 1.2) – (Debt-to-Income × 10)  
- **Floor**: Never < 25 % equity to fight inflation.

---

## 5. Sample Allocations by Profile

| Profile | Equity % | Debt % | Gold % | REIT % |
|---------|----------|--------|--------|--------|
| **Young Aggressive** | 80 | 10 | 5 | 5 |
| **Mid-Career Balanced** | 65 | 20 | 10 | 5 |
| **Near-Goal Conservative** | 40 | 45 | 10 | 5 |

---

## 6. Building Blocks

### 6.1 Equity Sleeve
- **Core**: Nifty 500 ETF (0.1 % TER)  
- **Satellite**: Flexi-cap active, mid-cap tilt  
- **Global**: Nasdaq 100 FoF (hedged)

### 6.2 Debt Sleeve
- **Core**: Gilt ETF for duration play  
- **Short**: Corporate bond fund  
- **Floater**: Banking & PSU debt

### 6.3 Gold & Alternatives
- **Gold**: Sovereign Gold Bonds (2.5 % interest)  
- **REITs**: Embassy, Mindspace, Brookfield  
- **AIF**: 5-10 % satellite for diversification

---

## 7. Rebalancing Rules

| Rule | Trigger | Action |
|------|---------|--------|
| **Tolerance Band** | ±5 % drift | Reset to target |
| **Calendar** | Every birthday | Mechanical rebalance |
| **Volatility** | VIX > 25 | Shift 5 % equity → debt |

---

## 8. Behavioural Guardrails

| Bias | Tool |
|------|------|
| **Recency** | Quarterly IPS review |
| **Overconfidence** | Cap single stock at 5 % |
| **FOMO** | Pre-approved tactical band (±10 %) |

---

## 9. Tech Stack for DIY SAA
- **Kuvera Portfolios** – Glide-path templates  
- **Excel Solver** – Optimise Sharpe ratio  
- **Smallcase** – Rule-based rebalancing  
- **Zerodha Sentinel** – Price alerts for bands

---

## 10. Case Study: 30-Year-Old FIRE Aspirant

| Year | Equity % | Debt % | Portfolio Value |
|------|----------|--------|-----------------|
| 30   | 80       | 20     | ₹50 L           |
| 40   | 65       | 35     | ₹2.1 Cr         |
| 45   | 50       | 50     | ₹3.8 Cr         |
*Assumes ₹1 L monthly SIP, 12 % equity, 7 % debt, 10 % step-up.*

---

## 11. Tax-Efficient Rebalancing
- **Harvest losses** before 31 Mar.  
- **Switch via STP** to defer gains.  
- **Use NPS** for additional 80CCD(1B) ₹50k.

---

## 12. Common Mistakes
1. **Static allocation** → ignore age drift.  
2. **Home bias** → 0 % global equity.  
3. **Ignoring liquidity** → 90 % real estate.  
4. **Over-rebalancing** → >6 trades/yr.  
5. **Emotional overrides** → sell in 2020 crash.

---

## 13. Annual Review Checklist
- [ ] **Goal inflation** updated (CPI + 2 %)  
- [ ] **Risk score** re-measured  
- [ ] **Asset drift** calculated  
- [ ] **Tax-loss** harvested  
- [ ] **Liquidity buffer** 5 % intact

---

## 14. Sample IPS (One-Pager)

| Section | Entry |
|---------|-------|
| **Objective** | ₹5 Cr @ 50 yrs |
| **SAA today** | 75/15/10 Equity/Debt/Gold |
| **Tolerance** | ±15 % drawdown |
| **Rebalance** | Semi-annual |
| **Tactical band** | ±10 % |
| **Review date** | Every birthday |

---

## 15. Key Takeaways
- **SAA beats stock-picking** over decades.  
- **Age/risk glide-path** keeps plan relevant.  
- **Low-cost, broad, tax-efficient** instruments are non-negotiable.  
- **Rebalance with discipline**, not emotion.

---

## 16. Ready to Architect Your Allocation?

🔗 [**Book Your SAA Design Session**](https://www.moznoadvisory.com/saa-call)  
📥 [**Download Glide-Path Calculator**](https://www.moznoadvisory.com/saa-calc)

*Mozno Advisory is a SEBI-registered investment adviser. Asset allocation does not guarantee returns. Please read all product documents carefully.*
`;function _I(){return s.jsxs(s.Fragment,{children:[s.jsxs(Ne,{children:[s.jsx("title",{children:"Strategic Asset Allocation – Mozno Advisory"}),s.jsx("meta",{name:"description",content:"Complete guide for 22-45-year-old Indians to build wealth via mutual funds."})]}),s.jsx("main",{children:s.jsx("article",{className:"blog-page",children:s.jsx(we,{rehypePlugins:[Ae],remarkPlugins:[Ie],components:{h1:e=>s.jsx("h1",{className:"blog-page__heading blog-page__heading--h1",...e}),h2:e=>s.jsx("h2",{className:"blog-page__heading blog-page__heading--h2",...e}),h3:e=>s.jsx("h3",{className:"blog-page__heading blog-page__heading--h3",...e}),p:e=>s.jsx("p",{className:"blog-page__paragraph",...e}),blockquote:e=>s.jsx("blockquote",{className:"blog-page__blockquote",...e}),ul:e=>s.jsx("ul",{className:"blog-page__list",...e}),ol:e=>s.jsx("ol",{className:"blog-page__list",...e}),li:e=>s.jsx("li",{className:"blog-page__list-item",...e}),table:e=>s.jsx("table",{className:"blog-page__table",...e}),th:e=>s.jsx("th",{className:"blog-page__th",...e}),td:e=>s.jsx("td",{className:"blog-page__td",...e}),a:e=>s.jsx("a",{className:"blog-page__link",...e}),strong:e=>s.jsx("strong",{className:"blog-page__strong",...e}),code:e=>s.jsx("code",{className:"blog-page__code",...e}),hr:e=>s.jsx("hr",{className:"blog-page__hr",...e})},children:vI})})})]})}const SI=`
# 2.3 Retirement Planning  
> “Retirement is not an age; it’s a financial number you hit—preferably early.”

For 22-45-year-old Indians, retirement can feel **decades away**—yet the **power of compounding** is most potent **now**.  
A ₹10,000 monthly SIP started at 25 can create **₹4.4 Cr by 60**; start at 35 and you need **₹28,000** for the same corpus.  
Below is a **2,000-word playbook** to **calculate, fund, and protect** the retirement lifestyle you want—without sacrificing today’s dreams.

---

## 1. Why Start Early?

| Age Start | Monthly SIP | Corpus @ 12 % | Extra Needed if Delayed |
|-----------|-------------|---------------|-------------------------|
| 25        | ₹10,000     | ₹4.4 Cr       | –                       |
| 30        | ₹10,000     | ₹2.5 Cr       | +₹14k/month             |
| 35        | ₹10,000     | ₹1.4 Cr       | +₹28k/month             |

---

## 2. Step-1: Visualise Your Retirement

| Parameter | Example |
|-----------|---------|
| **Retirement age** | 50/55/60 |
| **Monthly expense today** | ₹80,000 |
| **Inflation** | 6 % |
| **Life expectancy** | 85 yrs |
| **Safe withdrawal rate** | 4 % |

**Future expense @ 60** = ₹80,000 × (1.06)³⁰ = **₹4.6 L/month**  
**Corpus needed** = ₹4.6 L × 12 ÷ 0.04 = **₹13.8 Cr**

---

## 3. Step-2: Map Income Sources

| Source | Role | Tax* |
|--------|------|------|
| **NPS Tier-1** | Core annuity | Partial taxable |
| **EPF** | Debt ballast | EEE |
| **Equity MF** | Growth engine | LTCG 12.5 % |
| **Rental** | Inflation hedge | Slab |
| **Reverse mortgage** | Liquidity | Slab |

*FY 2025-26 rules.

---

## 4. Step-3: Build the Retirement Stack

### 4.1 Foundation Layer (Debt)
- **EPF + VPF** – 8.25 % tax-free  
- **NPS** – ₹50k extra 80CCD(1B) + equity auto-glide  
- **Gilt ETF** – Duration play, liquid

### 4.2 Growth Layer (Equity)
- **Nifty 500 ETF** – 0.1 % TER  
- **Flexi-cap active** – Alpha overlay  
- **International ETF** – Nasdaq 100 FoF (hedged)

### 4.3 Buffer Layer (Annuity & Gold)
- **Immediate annuity** – 6 % inflation-indexed  
- **Sovereign Gold Bonds** – 2.5 % coupon + hedge

---

## 5. Asset-Glide Path Example

| Age Band | Equity % | Debt % | Gold % |
|----------|----------|--------|--------|
| 25-35    | 80       | 15     | 5      |
| 35-45    | 70       | 25     | 5      |
| 45-55    | 55       | 40     | 5      |
| 55-60    | 40       | 55     | 5      |

---

## 6. Tools to Calculate

- **Mozno Retirement Calculator** – Excel + Monte-Carlo  
- **NPS Calculator** – Govt site  
- **FireCalc India** – Historical sequence-risk simulator

---

## 7. Tax Optimisation Tricks

- **Super-annuation fund** – Employer contribution up to ₹5 L tax-free  
- **Voluntary NPS** – ₹50k extra deduction  
- **Equity MF SWP** – Zero tax up to ₹1.25 L LTCG/yr  
- **Senior Citizens Savings Scheme** – 8.2 % post-60, Sec 80C

---

## 8. Case Study: 32-Year-Old FIRE at 50

| Input | Value |
|-------|-------|
| Current income | ₹2 L/month |
| Retirement age | 50 |
| Monthly expense today | ₹80k |
| Inflation | 6 % |
| Target corpus | ₹11 Cr |
| SIP needed | ₹75k/month (step-up 8 %/yr) |
| Instruments | 70 % equity MF, 20 % NPS, 10 % debt |

**Result**: ₹11.2 Cr at 50; **SWP of ₹4.5 L/month** for 35 yrs @ 4 % withdrawal.

---

## 9. Behavioural Guardrails

| Trap | Guardrail |
|------|-----------|
| **Early withdrawal** | Lock-in via NPS & ELSS |
| **Lifestyle creep** | Auto-step-up SIP with salary hikes |
| **Market panic** | IPS document: “No change if market falls < 30 %” |

---

## 10. Annual Review Checklist

- [ ] **Inflation assumption** updated  
- [ ] **SIP step-up** executed  
- [ ] **Health cover** upgraded  
- [ ] **Nominees** re-confirmed  
- [ ] **Tax-loss** harvested

---

## 11. Key Takeaways

- **Start early** – compounding is a young person’s superpower.  
- **Inflation-adjusted targets** prevent nasty surprises.  
- **Diversified, low-cost, tax-efficient** vehicles win.  
- **Review and adapt**—life is not linear.

---

## 12. Ready to Retire Early?

🔗 [**Book Your Retirement Blueprint Call**](https://www.moznoadvisory.com/retire-call)  
📥 [**Download Retirement Calculator**](https://www.moznoadvisory.com/retire-calc)

*Mozno Advisory is a SEBI-registered investment adviser. Projections are illustrative; actual returns may vary.*
`;function kI(){return s.jsxs(s.Fragment,{children:[s.jsxs(Ne,{children:[s.jsx("title",{children:"Retirement Planning – Mozno Advisory"}),s.jsx("meta",{name:"description",content:"Complete guide for 22-45-year-old Indians to build wealth via mutual funds."})]}),s.jsx("main",{children:s.jsx("article",{className:"blog-page",children:s.jsx(we,{rehypePlugins:[Ae],remarkPlugins:[Ie],components:{h1:e=>s.jsx("h1",{className:"blog-page__heading blog-page__heading--h1",...e}),h2:e=>s.jsx("h2",{className:"blog-page__heading blog-page__heading--h2",...e}),h3:e=>s.jsx("h3",{className:"blog-page__heading blog-page__heading--h3",...e}),p:e=>s.jsx("p",{className:"blog-page__paragraph",...e}),blockquote:e=>s.jsx("blockquote",{className:"blog-page__blockquote",...e}),ul:e=>s.jsx("ul",{className:"blog-page__list",...e}),ol:e=>s.jsx("ol",{className:"blog-page__list",...e}),li:e=>s.jsx("li",{className:"blog-page__list-item",...e}),table:e=>s.jsx("table",{className:"blog-page__table",...e}),th:e=>s.jsx("th",{className:"blog-page__th",...e}),td:e=>s.jsx("td",{className:"blog-page__td",...e}),a:e=>s.jsx("a",{className:"blog-page__link",...e}),strong:e=>s.jsx("strong",{className:"blog-page__strong",...e}),code:e=>s.jsx("code",{className:"blog-page__code",...e}),hr:e=>s.jsx("hr",{className:"blog-page__hr",...e})},children:SI})})})]})}const CI=`
# 2.4 Cash-Flow Management & Budgeting

> “Tell your money where to go, or you’ll wonder where it went.”

Mastering **cash-flow** is the **first domino** to every other financial goal.  
If you are 22-45, juggling EMIs, UPI splurges, and OTT subscriptions, this 2,000-word guide will give you **systems, apps, and scripts** to **track, control, and redirect** every rupee toward what actually matters.

---

## 1. Why Budgeting Beats Budgets

Old-school **“spend ₹200 on movies”** budgets fail because **life is unpredictable**.  
Modern cash-flow management is **directional**:

- **Automate** good behaviour  
- **Track** trends, not transactions  
- **Optimise** ruthlessly every 90 days

---

## 2. The 4-Step Cash-Flow Loop

| Step | Tool | KPI |
|------|------|-----|
| **Audit** | 90-day bank statement | Net surplus % |
| **Allocate** | 50/30/20 or Zero-based | % to goals |
| **Automate** | Bank rules + SIPs | Missed-payment = 0 |
| **Analyse** | Monthly dashboard | Spend vs budget variance |

---

## 3. Popular Budgeting Models

| Model | Split | Best For |
|-------|-------|----------|
| **50/30/20** | Needs/Wants/Savings | Salaried beginners |
| **Zero-based** | Every ₹ assigned | Freelancers |
| **Envelope** | Physical/digital jars | Couples |
| **YNAB** | Age of money | Tech-savvy users |

---

## 4. Tech Stack 2025

| App | Feature |
|-----|---------|
| **Walnut** | Auto-splits UPI, credit card |
| **Moneycontrol** | Portfolio + expense tracker |
| **Notion Template** | Custom category tags |
| **Google Sheets** | Pivot table magic |
| **Jupiter + Fi** | Auto-rules & pots |

---

## 5. Sample Monthly Cash-Flow (₹1.5 L Net)

| Category | % | ₹ | Notes |
|----------|---|---|-------|
| **Needs** | 50 % | 75k | Rent, EMIs, food |
| **Wants** | 25 % | 37.5k | Travel, dining |
| **Goals** | 20 % | 30k | SIPs, NPS |
| **Buffer** | 5 % | 7.5k | Misc/annual bills |

---

## 6. Automate the Flow

| Rule | Action |
|------|--------|
| Salary day | Auto-transfer ₹30k to investments |
| 1st weekend | Sweep excess to liquid fund |
| Credit-card | Full auto-debit on due date |
| OTT reminder | Annual purge every Jan |

---

## 7. Cutting the Fat – 15 Quick Wins

| Area | Hack | Monthly Save |
|------|------|--------------|
| **Subscriptions** | Share family plans | ₹800 |
| **Groceries** | Bulk on 1st & 15th | ₹1,200 |
| **Fuel** | Fuel credit card + weekends | ₹1,000 |
| **Dining** | 1 “no-spend” weekend | ₹2,000 |
| **Banking** | Zero-fee savings account | ₹300 |

---

## 8. Debt Avalanche vs Snowball

| Method | Logic | Psych Win |
|--------|-------|-----------|
| **Avalanche** | Highest interest first | Mathematically optimal |
| **Snowball** | Smallest balance first | Quick dopamine hit |

Mozno rule: **Avalanche for rates > 12 %, snowball for motivation**.

---

## 9. Couples & Joint Budgeting

| Tool | Benefit |
|------|---------|
| **Splitwise** | Shared expense tracking |
| **Shared Google Sheet** | Real-time update |
| **Monthly Money Date** | 30-min review + coffee |

---

## 10. Emergency Fund Formula

| Tier | Size | Vehicle | Liquidity |
|------|------|---------|-----------|
| **Tier 1** | 1 month | Savings A/c | T+0 |
| **Tier 2** | 2 months | Liquid fund | T+1 |
| **Tier 3** | 3 months | Ultra-short fund | T+2 |

---

## 11. Irregular Income Hacks

| Income Type | Rule |
|-------------|------|
| **Freelancer** | 30 % to GST + tax pot instantly |
| **Founder** | Quarterly salary + bonus sweep to goals |
| **Gig worker** | Weekly auto-invest 20 % |

---

## 12. Scripts & Templates

### 12.1 Weekly Review (10 min)
1. Open Walnut → export CSV  
2. Tag > ₹500 spends  
3. Update Google Sheet  
4. Celebrate if variance < 5 %

### 12.2 Monthly Dashboard
- **Income vs budget**  
- **SIP hit rate**  
- **Credit-card utilisation**  
- **Net-worth delta**

---

## 13. Case Study: 28-Year-Old Designer

| Metric | Before | After 6 months |
|--------|--------|----------------|
| **Savings rate** | 8 % | 28 % |
| **Sub-count** | 12 | 4 |
| **Cash buffer** | ₹20k | ₹2 L |

**Method**: 50/30/20 + auto-sweep + OTT audit.

---

## 14. Behavioural Nudges

| Nudge | Implementation |
|-------|----------------|
| **Default bias** | Auto-enrol SIP on salary day |
| **Loss aversion** | Rename pots “Europe Trip” not “Savings” |
| **Social proof** | Share net-worth chart with accountability buddy |

---

## 15. Annual Cash-Flow Tune-Up

- [ ] **Insurance premium** escrow created  
- [ ] **Credit score** > 750  
- [ ] **EMI-to-income** < 40 %  
- [ ] **Emergency fund** 6 months intact  
- [ ] **Annual raise** → 50 % to SIP

---

## 16. Key Takeaways

- **Track trends, not transactions**.  
- **Automate > will-power**.  
- **Review quarterly**, not daily.  
- **Cash-flow mastery is the foundation** for every other goal.

---

## 17. Ready to Master Your Money Flow?

🔗 [**Book a 30-Minute Cash-Flow Makeover**](https://www.moznoadvisory.com/cash-call)  
📥 [**Download Budget Template**](https://www.moznoadvisory.com/budget-template)

*Mozno Advisory is a SEBI-registered investment adviser. Budgeting is advisory; actual results depend on execution.*
`;function NI(){return s.jsxs(s.Fragment,{children:[s.jsxs(Ne,{children:[s.jsx("title",{children:"Cash-Flow Management & Budgeting – Mozno Advisory"}),s.jsx("meta",{name:"description",content:"Complete guide for 22-45-year-old Indians to build wealth via mutual funds."})]}),s.jsx("main",{children:s.jsx("article",{className:"blog-page",children:s.jsx(we,{rehypePlugins:[Ae],remarkPlugins:[Ie],components:{h1:e=>s.jsx("h1",{className:"blog-page__heading blog-page__heading--h1",...e}),h2:e=>s.jsx("h2",{className:"blog-page__heading blog-page__heading--h2",...e}),h3:e=>s.jsx("h3",{className:"blog-page__heading blog-page__heading--h3",...e}),p:e=>s.jsx("p",{className:"blog-page__paragraph",...e}),blockquote:e=>s.jsx("blockquote",{className:"blog-page__blockquote",...e}),ul:e=>s.jsx("ul",{className:"blog-page__list",...e}),ol:e=>s.jsx("ol",{className:"blog-page__list",...e}),li:e=>s.jsx("li",{className:"blog-page__list-item",...e}),table:e=>s.jsx("table",{className:"blog-page__table",...e}),th:e=>s.jsx("th",{className:"blog-page__th",...e}),td:e=>s.jsx("td",{className:"blog-page__td",...e}),a:e=>s.jsx("a",{className:"blog-page__link",...e}),strong:e=>s.jsx("strong",{className:"blog-page__strong",...e}),code:e=>s.jsx("code",{className:"blog-page__code",...e}),hr:e=>s.jsx("hr",{className:"blog-page__hr",...e})},children:CI})})})]})}const wI=`
# 3.1 Direct Tax Planning & ITR Filing
> “Paying tax is patriotic; over-paying is just poor planning.”

Direct taxes—levied on **income**—are the single largest leak in most Indian households.  
For 22-45-year-old salaried professionals, freelancers, and business owners, **proactive planning** and **error-free ITR filing** can legally **save lakhs** every year.  
This 2,000-word guide demystifies the **Income-Tax Act, 1961**, **new vs old regime**, **deductions**, and **ITR forms** so you can **minimise tax, maximise refunds, and stay SEBI-clean**.

---

## 1. Direct Tax Snapshot FY 2025-26

| Income Slab (₹) | Old Regime Rate | New Regime Rate |
|------------------|-----------------|-----------------|
| 0 – 3 L          | 0 %             | 0 %             |
| 3 – 6 L          | 5 %             | 5 %             |
| 6 – 9 L          | 20 %            | 10 %            |
| 9 – 12 L         | 30 %            | 15 %            |
| 12 – 15 L        | 30 %            | 20 %            |
| > 15 L           | 30 %            | 30 %            |

**Rebate u/s 87A**: ₹25,000 (new regime) vs ₹12,500 (old) for income ≤ ₹7 L.

---

## 2. Choose Your Regime—The 60-Second Decision Tree

| Factor | Old Regime Favour | New Regime Favour |
|--------|-------------------|-------------------|
| **Home loan interest** | High (≥ ₹2 L) | Low / no loan |
| **80C full** | ₹1.5 L | Minimal |
| **80D premium** | ₹25k-50k | Minimal |
| **HRA large** | Metro | Remote work |

Use **Mozno Regime Comparator** (Excel) for exact breakeven.

---

## 3. Deductions Cheat-Sheet

| Section | Max (₹) | Eligible Uses |
|---------|---------|---------------|
| **80C** | 1.5 L | ELSS, PPF, 5-yr FD, life premium |
| **80CCD(1B)** | 50k | Voluntary NPS only |
| **80D** | 25k self + 25k parents | Health insurance |
| **24(b)** | 2 L | Home loan interest |
| **80E** | No cap | Education loan interest |
| **80G** | 50 %/100 % | Donations |
| **80TTA** | 10k | Savings account interest |
| **80TTB** | 50k | Senior citizens FD interest |

---

## 4. Salary Optimisation Hacks

| Component | Tax Treatment | Hack |
|-----------|---------------|------|
| **Basic** | Fully taxable | Opt for lower basic, higher allowances |
| **HRA** | Exempt u/s 10(13A) | Pay rent to parents (PAN required) |
| **LTA** | 2 journeys in 4-yr block | Submit air tickets |
| **Food Coupons** | ₹50/meal × 2 × 22 days = ₹26,400/yr | Sodexo/Zeta |
| **NPS under 80CCD(2)** | Employer 10 % basic | Ask HR to route via NPS |
| **Professional Tax** | ₹2,400 max | Claim full amount |

---

## 5. Freelancers & Business Owners

| Income Head | Section | Deductions |
|-------------|---------|------------|
| **Business/Profession** | 44ADA | 50 % deemed profit if gross ≤ ₹75 L |
| **Capital gains** | 111A | 20 % STCG on equity; 12.5 % LTCG |
| **Presumptive 44AD** | 6 % digital turnover | No books audit if < ₹2 Cr |

**Pro-tip**: File **Form 10IE** to choose new regime **before ITR**.

---

## 6. ITR Forms Decoded

| Form | Who Should File |
|------|-----------------|
| **ITR-1 (Sahaj)** | Salary + interest, ≤ ₹50 L |
| **ITR-2** | Salary + capital gains + foreign assets |
| **ITR-3** | Business/Profession + trading |
| **ITR-4 (Sugam)** | Presumptive income 44AD/44ADA |

---

## 7. Filing Workflow (7-Day Plan)

| Day | Task |
|-----|------|
| **1** | Download **Form 26AS** & AIS |
| **2** | Reconcile salary, interest, MF gains |
| **3** | Claim deductions, upload proofs |
| **4** | Compute tax under both regimes |
| **5** | Select regime & generate JSON |
| **6** | Upload & e-verify (Aadhaar OTP) |
| **7** | Save **ITR-V PDF** + acknowledgement |

---

## 8. Common Mistakes & Penalties

| Mistake | Penalty |
|---------|---------|
| **Wrong regime** | Re-file u/s 139(5) before 31 Dec |
| **Missing interest income** | ₹10k-₹1 L penalty |
| **Foreign asset non-disclosure** | ₹10 L or imprisonment |
| **Late filing** | ₹5,000 (income < ₹5 L) to ₹10,000 |

---

## 9. Tax-Loss Harvesting Example

| Trade | Gain | Loss | Net Tax Saved |
|-------|------|------|---------------|
| Sell A | ₹3 L LTCG | – | ₹37.5k |
| Sell B | – | ₹1 L LTCL | ₹12.5k saved |
| Net taxable | ₹2 L | – | ₹25k |

---

## 10. Tools & Apps

| Tool | Use |
|------|-----|
| **ClearTax** | ITR wizard |
| **Quicko** | Regime comparator |
| **Taxspanner** | Salary optimisation |
| **Excel** | Custom tax calculator |

---

## 11. Key Takeaways

- **Pick regime early**—switching later is messy.  
- **Use every legal deduction**—it’s your right.  
- **File on time**—penalties compound.  
- **Reconcile 26AS**—pre-empt notices.

---

## 12. Ready for a Tax-Smart Year?

🔗 [**Book Your Direct Tax Review Call**](https://www.moznoadvisory.com/tax-call)  
📥 [**Download 80C Optimiser Excel**](https://www.moznoadvisory.com/80c-calc)

*Mozno Advisory is a SEBI-registered investment adviser and authorised e-return intermediary. Always consult a chartered accountant for complex cases.*
`;function AI(){return s.jsxs(s.Fragment,{children:[s.jsxs(Ne,{children:[s.jsx("title",{children:"Direct Tax Planning & ITR Filing – Mozno Advisory"}),s.jsx("meta",{name:"description",content:"Complete guide for 22-45-year-old Indians to build wealth via mutual funds."})]}),s.jsx("main",{children:s.jsx("article",{className:"blog-page",children:s.jsx(we,{rehypePlugins:[Ae],remarkPlugins:[Ie],components:{h1:e=>s.jsx("h1",{className:"blog-page__heading blog-page__heading--h1",...e}),h2:e=>s.jsx("h2",{className:"blog-page__heading blog-page__heading--h2",...e}),h3:e=>s.jsx("h3",{className:"blog-page__heading blog-page__heading--h3",...e}),p:e=>s.jsx("p",{className:"blog-page__paragraph",...e}),blockquote:e=>s.jsx("blockquote",{className:"blog-page__blockquote",...e}),ul:e=>s.jsx("ul",{className:"blog-page__list",...e}),ol:e=>s.jsx("ol",{className:"blog-page__list",...e}),li:e=>s.jsx("li",{className:"blog-page__list-item",...e}),table:e=>s.jsx("table",{className:"blog-page__table",...e}),th:e=>s.jsx("th",{className:"blog-page__th",...e}),td:e=>s.jsx("td",{className:"blog-page__td",...e}),a:e=>s.jsx("a",{className:"blog-page__link",...e}),strong:e=>s.jsx("strong",{className:"blog-page__strong",...e}),code:e=>s.jsx("code",{className:"blog-page__code",...e}),hr:e=>s.jsx("hr",{className:"blog-page__hr",...e})},children:wI})})})]})}const II=`
# 3.2 Indirect Tax Planning & GST Compliance
> “GST is not a cost centre—it’s a cash-flow lever when managed right.”

If you are a **freelancer, Amazon seller, SaaS founder, or boutique consultant** aged 22-45, **GST compliance** can make or break your working capital.  
This 2,000-word guide covers **registration to refunds**, **input tax credit (ITC) hacks**, and **audit-proof record-keeping** so you stay **penalty-free** and **cash-flow positive**.

---

## 1. GST Landscape 2025

| Tax Head | Rate | Applies To |
|----------|------|------------|
| **CGST** | 9 % | Intrastate |
| **SGST** | 9 % | Intrastate |
| **IGST** | 18 % | Interstate |
| **Compensation Cess** | 1-22 % | Luxury & sin goods |

---

## 2. Registration Triggers

| Scenario | Threshold (₹) | Action |
|----------|----------------|--------|
| **Service provider** | ₹20 L (₹10 L NE) | Compulsory registration |
| **Goods supplier** | ₹40 L | Compulsory |
| **E-commerce operator** | Any turnover | Immediate |
| **Casual taxable person** | No threshold | 90-day temporary registration |

---

## 3. Choosing the Right Scheme

| Scheme | Pros | Cons |
|--------|------|------|
| **Regular** | Full ITC | Monthly returns |
| **Composition** | 1-6 % flat rate | No ITC, ₹1.5 Cr cap |
| **QRMP** | Quarterly return, monthly PMT-06 | Ideal for < ₹5 Cr |

---

## 4. Input Tax Credit (ITC) Maximisation

| Expense | ITC Eligible | Proof |
|---------|--------------|-------|
| **Laptop purchase** | 18 % GST | Tax invoice + e-way bill |
| **Cloud hosting** | 18 % GST | Invoice with GSTIN |
| **Professional fees** | 18 % GST | GSTR-2A match |
| **Petrol (business)** | No | Blocked credit list |

**Pro-tip**: Use **TallyPrime** auto-matching with **GSTR-2A** to catch missing credits.

---

## 5. Filing Calendar

| Return | Due Date | Frequency |
|--------|----------|-----------|
| **GSTR-1** | 11th next month | Monthly |
| **GSTR-3B** | 20th next month | Monthly |
| **GSTR-9** | 31 Dec FY | Annual |
| **GSTR-9C** | 31 Dec FY | If turnover > ₹5 Cr |

QRMP users file **GSTR-1 quarterly**, **PMT-06 monthly**.

---

## 6. E-way Bill & E-invoicing

| Turnover | Requirement |
|----------|-------------|
| **> ₹5 Cr** | E-invoice mandatory |
| **> ₹50,000** | E-way bill for interstate movement |

**Hack**: Generate e-way bill **auto-linked** to e-invoice via API.

---

## 7. GST Planning Strategies

| Strategy | Benefit |
|----------|---------|
| **Branch transfer** | Stock transfer without GST via GTA |
| **RCM on reverse charge** | Claim ITC on legal fees |
| **Export LUT** | Zero-rated supply, claim refund |
| **Input service distributor** | Pool ITC across branches |

---

## 8. Working-Capital Optimisation

| Lever | Impact |
|-------|--------|
| **Claim ITC in 30 days** | Improves cash-flow by 18 % |
| **Early filing** | Faster refund cycle |
| **Invoice discounting** | Monetise receivables @ 1 %/month |

---

## 9. Common Mistakes & Penalties

| Mistake | Penalty |
|---------|---------|
| **Late GSTR-3B** | ₹50/day (₹20 CGST + ₹30 SGST) |
| **Wrong HSN code** | ₹25,000 |
| **ITC mismatch** | 100 % of excess credit + interest |
| **No e-way bill** | ₹10,000 or tax evaded, whichever higher |

---

## 10. Tech Stack for Compliance

| App | Feature |
|-----|---------|
| **ClearTax GST** | Auto-upload invoices |
| **Zoho Books** | E-invoice + e-way bill |
| **GSTZen** | GSTR-2A reconciliation |
| **Khatabook** | Small shop invoicing |

---

## 11. Case Study: SaaS Startup

| Metric | Year 1 | Year 2 |
|--------|--------|--------|
| **Turnover** | ₹1.2 Cr | ₹3.5 Cr |
| **GST paid** | ₹21.6 L | ₹63 L |
| **ITC claimed** | ₹18.9 L | ₹59 L |
| **Refund (export)** | ₹2.7 L | ₹4 L |

**Action**: Switched to **LUT + monthly refund** → **working-capital positive**.

---

## 12. Annual Compliance Checklist

- [ ] **GST audit** if turnover > ₹5 Cr  
- [ ] **E-way bill compliance** 100 %  
- [ ] **ITC reconciliation** by 30 Sep  
- [ ] **Outstanding demand** closure  
- [ ] **Upgrade to QRMP** if eligible

---

## 13. Key Takeaways

- **Register early**—penalties > benefits of delay.  
- **Claim every eligible ITC**—it’s a cash-flow booster.  
- **Automate filings**—deadlines are non-negotiable.  
- **Audit-proof records**—cloud + backups.

---

## 14. Ready for Audit-Proof GST?

🔗 [**Book Your GST Health Check**](https://www.moznoadvisory.com/gst-call)  
📥 [**Download GST Compliance Checklist**](https://www.moznoadvisory.com/gst-checklist)

*Mozno Advisory partners with chartered accountants for GST registration, return filing, and refund assistance. Always consult a GST practitioner for complex cases.*
`;function PI(){return s.jsxs(s.Fragment,{children:[s.jsxs(Ne,{children:[s.jsx("title",{children:"Indirect Tax & GST Compliance – Mozno Advisory"}),s.jsx("meta",{name:"description",content:"Complete guide for 22-45-year-old Indians to build wealth via mutual funds."})]}),s.jsx("main",{children:s.jsx("article",{className:"blog-page",children:s.jsx(we,{rehypePlugins:[Ae],remarkPlugins:[Ie],components:{h1:e=>s.jsx("h1",{className:"blog-page__heading blog-page__heading--h1",...e}),h2:e=>s.jsx("h2",{className:"blog-page__heading blog-page__heading--h2",...e}),h3:e=>s.jsx("h3",{className:"blog-page__heading blog-page__heading--h3",...e}),p:e=>s.jsx("p",{className:"blog-page__paragraph",...e}),blockquote:e=>s.jsx("blockquote",{className:"blog-page__blockquote",...e}),ul:e=>s.jsx("ul",{className:"blog-page__list",...e}),ol:e=>s.jsx("ol",{className:"blog-page__list",...e}),li:e=>s.jsx("li",{className:"blog-page__list-item",...e}),table:e=>s.jsx("table",{className:"blog-page__table",...e}),th:e=>s.jsx("th",{className:"blog-page__th",...e}),td:e=>s.jsx("td",{className:"blog-page__td",...e}),a:e=>s.jsx("a",{className:"blog-page__link",...e}),strong:e=>s.jsx("strong",{className:"blog-page__strong",...e}),code:e=>s.jsx("code",{className:"blog-page__code",...e}),hr:e=>s.jsx("hr",{className:"blog-page__hr",...e})},children:II})})})]})}const LI=`
# 3.3 Tax-Saving Investment Strategies
> “Don’t let the tax-tail wag the investment-dog, but do wag it smartly.”

Every rupee saved in tax is a rupee that can compound for decades.  
This 2,000-word playbook shows **22-45-year-old Indians** how to **legally shrink tax out-go** while **building wealth**—using **Section 80C, 80D, 80CCD, 24(b)** and **beyond FY 2025-26**.

---

## 1. Tax-Saving Universe Snapshot

| Section | Limit (₹) | Lock-in | Ideal For |
|---------|-----------|---------|-----------|
| **80C** | 1.5 L | 3–15 yrs | ELSS, PPF, 5-yr FD |
| **80CCD(1B)** | 50k | Till 60 | Extra NPS |
| **80D** | 25k–1 L | Annual | Health insurance |
| **24(b)** | 2 L p.a. | Loan tenure | Home loan interest |
| **80E** | No cap | Loan tenure | Education loan |

---

## 2. ELSS – Equity with a Lock-In

| Fund | 10-Yr CAGR | TER | Notes |
|------|------------|-----|-------|
| **Mirae Tax Saver** | 17 % | 1.2 % | Mid-cap tilt |
| **Axis Long Term** | 15 % | 1.4 % | Large-cap focus |
| **Nippon ETF ELSS** | 14 % | 0.3 % | Passive option |

**SIP Strategy**: ₹12,500/month = ₹1.5 L/year + 3-yr lock-in.

---

## 3. PPF vs ELSS vs Tax-Saver FD

| Metric | PPF | ELSS | 5-yr FD |
|--------|-----|------|---------|
| **Returns** | 7.1 % tax-free | 12–15 % | 7 % taxable |
| **Lock-in** | 15 yrs | 3 yrs | 5 yrs |
| **Risk** | Sovereign | Equity | Bank risk |
| **Liquidity** | Partial | After 3 yrs | Break with penalty |

---

## 4. NPS Triple-Tax Advantage

| Tier | Contribution | Deduction | Exit Tax |
|------|--------------|-----------|----------|
| **Employee (10 % basic)** | 80CCD(1) | Slab | 60 % tax-free |
| **Voluntary (₹50k)** | 80CCD(1B) | Extra | Same |
| **Employer (10 % basic)** | 80CCD(2) | No limit | Same |

**Illustration**: Salary ₹20 L, employer NPS ₹2 L → **tax saved ₹60k**.

---

## 5. Health Insurance – 80D Deep-Dive

| Cover | Premium | Deduction |
|-------|---------|-----------|
| **Self + spouse** | ₹25k | ₹25k |
| **Parents (senior)** | ₹50k | ₹50k |
| **Top-up plan** | ₹15k | Included |
| **Total** | ₹90k | ₹75k |

---

## 6. Home Loan – 24(b) + 80C Combo

| Part | Deduction | Max |
|------|-----------|-----|
| **Principal** | 80C | ₹1.5 L |
| **Interest** | 24(b) | ₹2 L |
| **First-time buyer** | 80EEA | Extra ₹1.5 L interest |

**Example**: ₹50 L loan @ 9 % → Year-1 interest ₹4.5 L  
**Total deduction**: ₹1.5 L (principal) + ₹2 L (interest) + ₹1.5 L (80EEA) = **₹5 L**

---

## 7. Beyond 80C – Often Missed

| Section | Use Case | Limit |
|---------|----------|-------|
| **80GG** | No HRA, pay rent | ₹60k/year |
| **80TTA** | Savings interest | ₹10k |
| **80U** | Disability | ₹75k–₹1.25 L |
| **80GGC** | Political donation | 100 % deduction |

---

## 8. New vs Old Regime Decision Grid

| Income (₹) | Old Tax | New Tax | Optimal |
|------------|---------|---------|---------|
| 7 L | 0 | 0 | Tie |
| 10 L | 78k | 52k | New |
| 15 L | 1.95 L | 1.45 L | New |
| 25 L | 5.85 L | 5.85 L | Depends on deductions |

---

## 9. Monthly SIP Calendar for 80C

| Date | Instrument | Amount |
|------|------------|--------|
| 1st | ELSS SIP | ₹12,500 |
| 5th | PPF | ₹5,000 |
| 10th | Sukanya Samriddhi | ₹3,000 |
| 15th | Term insurance | ₹2,000 |
| 20th | 5-yr FD | ₹2,500 |
| **Total** | – | ₹25,000 |

---

## 10. Tax-Loss Harvesting – ELSS

| Scenario | Gain | Loss Booked | Net Tax |
|----------|------|-------------|---------|
| ELSS redemption | ₹2 L LTCG | ₹50k LTCL | ₹18.75k vs ₹25k |

---

## 11. Section 80C vs 80CCD vs 24(b) – Allocation Matrix

| Goal | 80C | 80CCD(1B) | 24(b) |
|------|-----|-----------|--------|
| **Retirement** | 50 % | 30 % | – |
| **Home** | 30 % | – | 70 % |
| **Child** | 20 % | – | – |

---

## 12. Tools & Calculators

| Tool | Use |
|------|-----|
| **ClearTax 80C Optimiser** | Best mix |
| **NPS calculator** | Annuity projection |
| **Excel goal seek** | Loan vs tax trade-off |

---

## 13. Behavioural Hacks

| Hack | Implementation |
|------|----------------|
| **Default ELSS SIP** | Salary day auto-debit |
| **Annual raise** | 50 % to tax-saver |
| **March panic** | Advance SIP Jan-Feb |

---

## 14. Annual Review Checklist

- [ ] **Section 80C limit** fully used  
- [ ] **Health premium** 80D receipt  
- [ ] **Home loan certificate** downloaded  
- [ ] **Donation receipts** 80G collected  
- [ ] **Regime choice** re-evaluated

---

## 15. Key Takeaways

- **Start with ELSS for equity exposure**, layer PPF for debt.  
- **NPS is the only triple-tax-advantaged product**.  
- **Health + home loan** often exhaust 80D + 24(b).  
- **Rebalance annually**—products and tax laws change.

---

## 16. Ready to Optimise?

🔗 [**Book Your Tax-Saving Strategy Call**](https://www.moznoadvisory.com/taxsave-call)  
📥 [**Download 80C vs New Regime Calculator**](https://www.moznoadvisory.com/80c-calc)

*Mozno Advisory is a SEBI-registered investment adviser. Tax rules are subject to change; consult a chartered accountant for personalised advice.*
`;function RI(){return s.jsxs(s.Fragment,{children:[s.jsxs(Ne,{children:[s.jsx("title",{children:"Tax-Saving Investment Strategies – Mozno Advisory"}),s.jsx("meta",{name:"description",content:"Complete guide for 22-45-year-old Indians to build wealth via mutual funds."})]}),s.jsx("main",{children:s.jsx("article",{className:"blog-page",children:s.jsx(we,{rehypePlugins:[Ae],remarkPlugins:[Ie],components:{h1:e=>s.jsx("h1",{className:"blog-page__heading blog-page__heading--h1",...e}),h2:e=>s.jsx("h2",{className:"blog-page__heading blog-page__heading--h2",...e}),h3:e=>s.jsx("h3",{className:"blog-page__heading blog-page__heading--h3",...e}),p:e=>s.jsx("p",{className:"blog-page__paragraph",...e}),blockquote:e=>s.jsx("blockquote",{className:"blog-page__blockquote",...e}),ul:e=>s.jsx("ul",{className:"blog-page__list",...e}),ol:e=>s.jsx("ol",{className:"blog-page__list",...e}),li:e=>s.jsx("li",{className:"blog-page__list-item",...e}),table:e=>s.jsx("table",{className:"blog-page__table",...e}),th:e=>s.jsx("th",{className:"blog-page__th",...e}),td:e=>s.jsx("td",{className:"blog-page__td",...e}),a:e=>s.jsx("a",{className:"blog-page__link",...e}),strong:e=>s.jsx("strong",{className:"blog-page__strong",...e}),code:e=>s.jsx("code",{className:"blog-page__code",...e}),hr:e=>s.jsx("hr",{className:"blog-page__hr",...e})},children:LI})})})]})}const DI=`
# 4.1 Term & Life Insurance Advisory  
> “Term insurance is not a cost—it’s the cheapest promise you’ll ever keep.”

Life insurance is the **anchor of every Indian financial plan**, yet **1 in 3 urban families is under-insured**.  
For 22-45-year-olds juggling home loans, aging parents, and young kids, **term life cover** is the **fastest, cheapest way to guarantee that dreams don’t die with you**.  
This 2,000-word master-guide walks you through **how much, how long, what riders, and which insurer**—all without the jargon or pushy sales pitch.

---

## 1. Why Term Insurance Beats Every Other Life Product

| Product | Core Purpose | Typical IRR | Moral |
|---------|--------------|-------------|-------|
| **Term Plan** | Pure risk cover | 0 % (no maturity) | Cheapest promise |
| **Endowment** | Savings + cover | 4-5 % | Expensive combo |
| **ULIP** | Market-linked | 8-10 % post-cost | High charges |
| **Whole Life** | Estate tool | 6-7 % | Useful for HNIs |

---

## 2. How Much Cover Do You Need?

| Method | Formula | Example (₹) |
|--------|---------|-------------|
| **Income multiple** | 15× gross annual income | ₹1.5 Cr for ₹10 L salary |
| **Human Life Value** | PV of future earnings | ₹2.1 Cr @ 7 % discount |
| **Need-based** | Loans + goals + expenses | ₹1.8 Cr |

Mozno rule: **Round up to nearest ₹25 lakh band** for inflation buffer.

---

## 3. Tenure Selection Cheat-Sheet

| Age | Loan Tenure | Working Years | Suggested Term |
|-----|-------------|---------------|----------------|
| 25  | 30 yrs      | 35 yrs        | 35-40 yrs      |
| 35  | 20 yrs      | 25 yrs        | 25-30 yrs      |
| 45  | 10 yrs      | 15 yrs        | 15-20 yrs      |

---

## 4. Policy Types & Features

| Type | Premium* | Pros | Cons |
|------|----------|------|------|
| **Level Term** | ₹12k/yr | Cheapest | No maturity |
| **Increasing Term** | ₹18k/yr | Covers inflation | Higher cost |
| **Decreasing Term** | ₹10k/yr | Tracks loan | Static sum |
| **Return of Premium** | ₹25k/yr | Gets money back | 3× cost |

*₹1 Cr cover, 30-yr-old male, non-smoker.

---

## 5. Essential Riders

| Rider | Cost | When to Add |
|-------|------|-------------|
| **Accidental Death** | ₹300/yr | Travel-heavy job |
| **Critical Illness** | ₹1,500/yr | Family history |
| **Waiver of Premium** | ₹800/yr | Disability risk |
| **Terminal Illness** | Free | Most insurers |

---

## 6. Premium Comparison Snapshot (2025)

| Insurer | Premium (₹) | Claim Ratio | Solvency |
|---------|-------------|-------------|----------|
| **HDFC Life** | 11,800 | 99.1 % | 1.92 |
| **Max Life** | 11,200 | 99.5 % | 2.05 |
| **ICICI Pru** | 12,100 | 98.7 % | 1.85 |
| **Tata AIA** | 11,500 | 99.2 % | 1.98 |

*₹1 Cr, 30-yr, male, 30-yr term, annual mode.

---

## 7. Underwriting Secrets

| Factor | Impact |
|--------|--------|
| **Smoker** | +30-50 % premium |
| **BMI > 30** | +20 % |
| **Family history** | Possible loading |
| **Hobbies** | Skydiving = decline or extra premium |

**Pro-tip**: Buy before lifestyle diseases set in.

---

## 8. Buying Process (7-Day Roadmap)

| Day | Action |
|-----|--------|
| **1** | Calculate need + tenure |
| **2** | Shortlist 3 insurers via Mozno |
| **3** | Fill proposal form + medicals |
| **4** | Upload KYC + income proof |
| **5** | Counter-offer negotiation |
| **6** | Policy issuance + soft copy |
| **7** | Store e-policy + nominee update

---

## 9. Claim Process – Step-By-Step

1. **Intimate within 30 days** via toll-free or app.  
2. **Submit** death certificate, KYC, nominee bank proof.  
3. **Investigation period** 15-30 days (natural death).  
4. **Settlement** TAT: 30 days (98 % cases < 7 days).

---

## 10. Common Myths Busted

| Myth | Reality |
|------|---------|
| “ULIP gives life cover” | Charges > returns |
| “Company cover enough” | 2-3× salary rarely covers liabilities |
| “Online is risky” | Same policy, 20 % cheaper |
| “Smokers can’t buy” | Can, at higher premium |

---

## 11. Annual Review Checklist

- [ ] **Increase cover** with salary hike  
- [ ] **Check claim ratio** update  
- [ ] **Re-assess tenure** post loan closure  
- [ ] **Update nominee** after marriage/birth  
- [ ] **Port policy** if better rates emerge

---

## 12. Key Takeaways

- **₹1 Cr is the new minimum**.  
- **Buy pure term, online, early**.  
- **Add riders only if needed**.  
- **Review every 3-5 years**.

---

## 13. Ready for a Quote?

🔗 [**Book Your Term Plan Review**](https://www.moznoadvisory.com/term-call)  
📥 [**Download Premium Comparison Sheet**](https://www.moznoadvisory.com/term-sheet)

*Mozno Advisory is an IRDAI-licensed insurance broker (License No. IRDAI/INT 123456). Terms and conditions apply.*
`;function OI(){return s.jsxs(s.Fragment,{children:[s.jsxs(Ne,{children:[s.jsx("title",{children:"Term & Life Insurance – Mozno Advisory"}),s.jsx("meta",{name:"description",content:"Complete guide for 22-45-year-old Indians to build wealth via mutual funds."})]}),s.jsx("main",{children:s.jsx("article",{className:"blog-page",children:s.jsx(we,{rehypePlugins:[Ae],remarkPlugins:[Ie],components:{h1:e=>s.jsx("h1",{className:"blog-page__heading blog-page__heading--h1",...e}),h2:e=>s.jsx("h2",{className:"blog-page__heading blog-page__heading--h2",...e}),h3:e=>s.jsx("h3",{className:"blog-page__heading blog-page__heading--h3",...e}),p:e=>s.jsx("p",{className:"blog-page__paragraph",...e}),blockquote:e=>s.jsx("blockquote",{className:"blog-page__blockquote",...e}),ul:e=>s.jsx("ul",{className:"blog-page__list",...e}),ol:e=>s.jsx("ol",{className:"blog-page__list",...e}),li:e=>s.jsx("li",{className:"blog-page__list-item",...e}),table:e=>s.jsx("table",{className:"blog-page__table",...e}),th:e=>s.jsx("th",{className:"blog-page__th",...e}),td:e=>s.jsx("td",{className:"blog-page__td",...e}),a:e=>s.jsx("a",{className:"blog-page__link",...e}),strong:e=>s.jsx("strong",{className:"blog-page__strong",...e}),code:e=>s.jsx("code",{className:"blog-page__code",...e}),hr:e=>s.jsx("hr",{className:"blog-page__hr",...e})},children:DI})})})]})}const MI=`
# 4.2 Health & Medical Insurance  
> “Medical inflation in India is 12–14 % per year—your savings account isn’t.”

A single cardiac surgery can wipe out **₹8–10 lakh** of savings.  
For 22-45-year-olds, health insurance is **not optional**—it’s the **financial helmet** against life’s curveballs.  
This 2,000-word guide covers **how much cover, floater vs individual, top-ups vs super-top-ups, OPD, and digital claims**—tailored for Indian millennials and Gen-Z.

---

## 1. Why Health Insurance Beats Self-Funding

| Scenario | Cost | Insurance Pays |
|----------|------|----------------|
| **Appendix surgery** | ₹2 L | ₹0 deductible |
| **Cancer chemo** | ₹12 L | ₹11.5 L (5 % copay) |
| **COVID ICU** | ₹6 L | ₹5.7 L (after consumables) |

---

## 2. How Much Cover Do You Need?

| Age | Single | Couple | Couple + 2 kids | Recommendation |
|-----|--------|--------|-----------------|----------------|
| 22-30 | ₹5 L | ₹10 L floater | ₹15 L floater | Upgrade every 5 yrs |
| 30-40 | ₹10 L | ₹20 L | ₹25-30 L | Add top-up |
| 40-45 | ₹20 L | ₹30 L | ₹50 L | Super-top-up |

Mozno rule: **Annual cover ≥ 50 % of annual income**.

---

## 3. Plan Types Decoded

| Plan Type | Best For | Pros | Cons |
|-----------|----------|------|------|
| **Individual** | Single | No dilution | Higher premium |
| **Family Floater** | Nuclear | Cheaper | Age-based premium jump |
| **Senior Citizen** | Parents | No pre-medical | High premium, copay |
| **Group Cover** | Start-ups | Free | Ceases on exit |

---

## 4. Key Features to Compare

| Feature | Ideal | Notes |
|---------|-------|-------|
| **Room rent cap** | Single private AC | No-cap = better |
| **Copay** | 0 % or 5 % | Avoid > 10 % |
| **Restoration** | Unlimited | Lifesaver |
| **No-claim bonus** | 50–100 % | Cumulative |
| **Pre-existing wait** | 2–3 yrs | Shorter is better |

---

## 5. Top-Up vs Super-Top-Up

| Metric | Top-Up | Super-Top-Up |
|--------|--------|--------------|
| **Trigger** | Single claim > deductible | Aggregate claims > deductible |
| **Example** | ₹10 L base + ₹30 L top-up with ₹10 L deductible | Same, but covers multiple claims |
| **Cost** | ₹2,500/yr | ₹3,500/yr for ₹30 L |

**Winner**: **Super-top-up** for families.

---

## 6. Premium Comparison Snapshot (2025)

| Insurer | ₹10 L Floater | Claim Ratio | Network Hospitals |
|---------|---------------|-------------|-------------------|
| **Star Health** | ₹18k | 99 % | 13,000+ |
| **HDFC Ergo** | ₹16k | 97 % | 12,000+ |
| **ICICI Lombard** | ₹17k | 98 % | 11,000+ |
| **Care Health** | ₹15k | 96 % | 9,800+ |

*30-yr couple + 2 kids, no pre-existing.

---

## 7. Riders & Add-ons

| Rider | Cost | When to Add |
|-------|------|-------------|
| **Maternity** | ₹3k/yr | Planning baby |
| **OPD** | ₹4k/yr | Frequent doctor visits |
| **Critical illness** | ₹1k/yr | Family history |
| **Air ambulance** | ₹500/yr | Tier-2/3 cities |

---

## 8. Digital Claims Process

1. **Cashless**: Pre-authorisation at network hospital.  
2. **Reimbursement**: Upload bills within 30 days.  
3. **TAT**: 2 hrs cashless, 7 days reimbursement.  
4. **App tracking**: Live TPA chat.

---

## 9. Pre-Existing Disease (PED) Strategy

| Age | PED Likely | Action |
|-----|------------|--------|
| < 30 | Low | Buy early, cheapest premium |
| 30-40 | Moderate | Disclose fully, shorter wait |
| 40+ | High | Moratorium route (8 yrs) |

---

## 10. Employer vs Personal Cover

| Factor | Employer | Personal |
|--------|----------|----------|
| **Sum insured** | ₹3-5 L | Customisable |
| **Portability** | No | Yes |
| **Premium** | Free | Paid |
| **Recommendation** | Use as base, top-up personal |

---

## 11. Annual Review Checklist

- [ ] **Sum insured** ≥ 50 % income rise  
- [ ] **New members** added (newborn)  
- [ ] **PED completed** wait period  
- [ ] **Port better plan** if cheaper  
- [ ] **Top-up** upgraded

---

## 12. Key Takeaways

- **₹10 L is the new ₹5 L**—medical inflation demands it.  
- **Family floater + super-top-up** is the sweet spot.  
- **Buy before 30**—cheapest lifetime premium.  
- **Disclose everything**—claims denied for non-disclosure.

---

## 13. Ready to Compare?

🔗 [**Book Your Health Policy Consultation**](https://www.moznoadvisory.com/health-call)  
📥 [**Download Premium Comparison Sheet**](https://www.moznoadvisory.com/health-sheet)

*Mozno Advisory is an IRDAI-licensed insurance broker. Terms and conditions apply.*
`;function jI(){return s.jsxs(s.Fragment,{children:[s.jsxs(Ne,{children:[s.jsx("title",{children:"Health & Medical Insurance – Mozno Advisory"}),s.jsx("meta",{name:"description",content:"Complete guide for 22-45-year-old Indians to build wealth via mutual funds."})]}),s.jsx("main",{children:s.jsx("article",{className:"blog-page",children:s.jsx(we,{rehypePlugins:[Ae],remarkPlugins:[Ie],components:{h1:e=>s.jsx("h1",{className:"blog-page__heading blog-page__heading--h1",...e}),h2:e=>s.jsx("h2",{className:"blog-page__heading blog-page__heading--h2",...e}),h3:e=>s.jsx("h3",{className:"blog-page__heading blog-page__heading--h3",...e}),p:e=>s.jsx("p",{className:"blog-page__paragraph",...e}),blockquote:e=>s.jsx("blockquote",{className:"blog-page__blockquote",...e}),ul:e=>s.jsx("ul",{className:"blog-page__list",...e}),ol:e=>s.jsx("ol",{className:"blog-page__list",...e}),li:e=>s.jsx("li",{className:"blog-page__list-item",...e}),table:e=>s.jsx("table",{className:"blog-page__table",...e}),th:e=>s.jsx("th",{className:"blog-page__th",...e}),td:e=>s.jsx("td",{className:"blog-page__td",...e}),a:e=>s.jsx("a",{className:"blog-page__link",...e}),strong:e=>s.jsx("strong",{className:"blog-page__strong",...e}),code:e=>s.jsx("code",{className:"blog-page__code",...e}),hr:e=>s.jsx("hr",{className:"blog-page__hr",...e})},children:MI})})})]})}const FI=`
# 4.3 Motor & General Insurance
> “Protect the assets that move you—and the ones that don’t.”

India registers **2.1 crore new vehicles** every year and **₹50,000 crore in non-life claims**.  
For 22-45-year-olds, **motor, home, travel, and gadget insurance** are **cheapest risk transfers** available.  
This 2,000-word guide decodes **coverage, add-ons, claim hacks, and renewal tricks**—so you’re never caught off-guard.

---

## 1. Motor Insurance – Third-Party vs Comprehensive
| Cover | Mandatory? | Damage to Own Car? | Premium |
|-------|------------|--------------------|---------|
| **Third-party** | Yes | No | ₹3k-₹10k |
| **Comprehensive** | No | Yes | ₹12k-₹50k |

**Rule**: Always buy **comprehensive** for cars < 7 yrs.

---

## 2. Add-Ons That Actually Matter
| Add-on | Cost | Claim Example |
|--------|------|---------------|
| **Zero Depreciation** | ₹2k/yr | Bumper ₹15k → ₹0 out-of-pocket |
| **Engine Protector** | ₹1k/yr | Flood damage ₹1.2 L |
| **Roadside Assistance** | ₹500/yr | Flat tyre @ midnight |
| **Return to Invoice** | ₹1.5k/yr | Total loss, get ex-showroom |

---

## 3. No-Claim Bonus (NCB) Hack
| Claim-Free Years | Discount |
|------------------|----------|
| 1 year | 20 % |
| 5 years | 50 % |
| **Break-even** | Self-fund claims < ₹20k to keep NCB |

---

## 4. Home Insurance – Structure vs Contents
| Cover | What’s Covered | Typical Premium |
|-------|----------------|-----------------|
| **Structure** | Fire, earthquake | ₹2k/₹50 L |
| **Contents** | Jewellery, electronics | ₹1k/₹10 L |
| **Tenant** | Contents only | ₹500/yr |

---

## 5. Travel Insurance – Domestic & International
| Scenario | Cover | Premium |
|----------|-------|---------|
| **Domestic flight delay** | ₹1k/hr | ₹250 |
| **International medical** | $250k | ₹1,500 (7-day US) |
| **Trip cancellation** | 100 % | ₹800 |

---

## 6. Gadget & Personal Accident
| Product | Cover | Premium |
|---------|-------|---------|
| **Mobile screen** | ₹30k | ₹1,200/yr |
| **Personal accident** | ₹25 L | ₹1,500/yr |
| **Wallet loss** | ₹10k | ₹300/yr |

---

## 7. Premium Comparison – Motor (2025)
| Insurer | IDV ₹8 L | Zero Dep | Premium |
|---------|----------|----------|---------|
| **Bajaj Allianz** | ₹8 L | Yes | ₹18k |
| **HDFC Ergo** | ₹8 L | Yes | ₹17k |
| **ICICI Lombard** | ₹8 L | Yes | ₹16.5k |

---

## 8. Claim Process – Motor
| Step | Timeline |
|------|----------|
| **Intimate insurer** | Within 24 hrs |
| **Survey & estimate** | 48 hrs |
| **Cashless approval** | 4 hrs (network garage) |
| **Reimbursement** | 7 days |

---

## 9. Renewal Hacks
| Hack | Savings |
|------|---------|
| **Compare online** | 15–30 % |
| **Voluntary deductible** | ₹2k premium cut |
| **Multi-year policy** | 5–10 % |
| **Bundle home + motor** | 10 % |

---

## 10. Key Takeaways
- **Comprehensive motor + zero dep** is non-negotiable.  
- **Home insurance is cheaper than one pizza a month**.  
- **Travel insurance costs less than airport coffee**.  
- **Bundle policies** for discounts and single renewal date.

---

## 11. Ready to Protect Everything?

🔗 [Book General Insurance Review](https://www.moznoadvisory.com/general-call)  
📥 [Download Add-On Cheat-Sheet](https://www.moznoadvisory.com/addon-sheet)

*Mozno Advisory is an IRDAI-licensed insurance broker. Terms and conditions apply.*
`;function BI(){return s.jsxs(s.Fragment,{children:[s.jsxs(Ne,{children:[s.jsx("title",{children:"Motor & General Insurance – Mozno Advisory"}),s.jsx("meta",{name:"description",content:"Complete guide for 22-45-year-old Indians to build wealth via mutual funds."})]}),s.jsx("main",{children:s.jsx("article",{className:"blog-page",children:s.jsx(we,{rehypePlugins:[Ae],remarkPlugins:[Ie],components:{h1:e=>s.jsx("h1",{className:"blog-page__heading blog-page__heading--h1",...e}),h2:e=>s.jsx("h2",{className:"blog-page__heading blog-page__heading--h2",...e}),h3:e=>s.jsx("h3",{className:"blog-page__heading blog-page__heading--h3",...e}),p:e=>s.jsx("p",{className:"blog-page__paragraph",...e}),blockquote:e=>s.jsx("blockquote",{className:"blog-page__blockquote",...e}),ul:e=>s.jsx("ul",{className:"blog-page__list",...e}),ol:e=>s.jsx("ol",{className:"blog-page__list",...e}),li:e=>s.jsx("li",{className:"blog-page__list-item",...e}),table:e=>s.jsx("table",{className:"blog-page__table",...e}),th:e=>s.jsx("th",{className:"blog-page__th",...e}),td:e=>s.jsx("td",{className:"blog-page__td",...e}),a:e=>s.jsx("a",{className:"blog-page__link",...e}),strong:e=>s.jsx("strong",{className:"blog-page__strong",...e}),code:e=>s.jsx("code",{className:"blog-page__code",...e}),hr:e=>s.jsx("hr",{className:"blog-page__hr",...e})},children:FI})})})]})}const HI=`
# 4.4 Insurance Portfolio Review & Optimization  
> “Insurance is not ‘set and forget’—it’s ‘set and reset’ with life.”

Marriage, kids, loans, ESOP liquidity, or even a pandemic can **obsolete yesterday’s cover**.  
This 2,000-word guide shows 22-45-year-olds **how to audit existing policies**, **plug gaps**, **remove overlaps**, and **upgrade cost-effectively**—so your insurance **evolves with you**, not against you.

---

## 1. Why Review Every 3–5 Years?

| Life Event | Impact on Cover |
|------------|-----------------|
| **Marriage** | Double dependents |
| **Home loan** | ₹50 L liability |
| **Childbirth** | ₹50 L education goal |
| **Job change** | Loss of employer cover |
| **Salary hike** | Lifestyle inflation |

---

## 2. 10-Minute DIY Audit Checklist

| Policy | Cover | Need Gap | Action |
|--------|-------|----------|--------|
| **Term Life** | ₹1 Cr | ₹2 Cr needed | Upgrade |
| **Health** | ₹5 L floater | ₹15 L needed | Top-up |
| **Motor** | ₹6 L IDV | ₹10 L market value | Increase |
| **Home** | ₹40 L | ₹60 L reconstruction | Reinstate |

---

## 3. Free Portfolio Scanner (Mozno Tool)

| Metric | Green | Amber | Red |
|--------|-------|-------|-----|
| **Sum assured vs income** | ≥ 15× | 10–15× | < 10× |
| **Health cover vs income** | ≥ 50 % | 25–50 % | < 25 % |
| **Renewal premium vs income** | ≤ 5 % | 5–10 % | > 10 % |

---

## 4. Optimisation Levers

| Lever | How | Savings |
|-------|-----|---------|
| **Port to cheaper insurer** | Same cover, lower premium | 10–25 % |
| **Increase deductible** | Health top-up | 20 % |
| **Drop riders** | Unneeded add-ons | ₹3k-₹5k/yr |
| **Bundle policies** | Multi-product discount | 10 % |

---

## 5. Case Study: 35-Year-Old Techie

| Before Review | After Optimisation |
|---------------|--------------------|
| **Term life** ₹1 Cr → ₹2.5 Cr | Ported to cheaper insurer, +₹5 L rider |
| **Health** ₹3 L → ₹25 L | Base ₹5 L + ₹20 L super-top-up |
| **Motor** ₹5 L → ₹8 L IDV | Zero-dep + roadside |
| **Annual premium** ₹45k → ₹52k | **Coverage ↑ 3×, cost ↑ 15 %** |

---

## 6. When to Port vs When to Layer

| Situation | Port | Layer |
|-----------|------|-------|
| **Premium hiked 30 %** | ✅ | ❌ |
| **Need 2× cover** | ❌ | ✅ Top-up |
| **Insurer claim ratio fallen** | ✅ | ❌ |

---

## 7. Nominee & Beneficiary Hygiene

| Task | Frequency |
|------|-----------|
| **Update nominee** | Marriage/birth/divorce |
| **Add secondary nominee** | Every 3 yrs |
| **Register e-insurance account** | Once |

---

## 8. Digital Locker & Cloud Backup

| Document | Storage |
|----------|---------|
| **Policy PDF** | Google Drive + DigiLocker |
| **Medical reports** | WhatsApp chat with spouse |
| **Claim forms** | Email to self |

---

## 9. Annual Review Calendar

| Month | Task |
|-------|------|
| **April** | Check sum insured vs income |
| **July** | Post-budget regime check |
| **October** | Compare renewal quotes |
| **December** | Health check + disclosure update |

---

## 10. Key Takeaways

- **Review every 3-5 years or life event**.  
- **Port only when cheaper + same features**.  
- **Layer cover via top-ups instead of replacing**.  
- **Nominee & document hygiene prevents claim delays**.

---

## 11. Ready for an Insurance MOT?

🔗 [Book Portfolio Review Session](https://www.moznoadvisory.com/review-call)  
📥 [Download Insurance Audit Checklist](https://www.moznoadvisory.com/audit-sheet)

*Mozno Advisory is an IRDAI-licensed insurance broker. Terms and conditions apply.*
`;function UI(){return s.jsxs(s.Fragment,{children:[s.jsxs(Ne,{children:[s.jsx("title",{children:"Insurance Portfolio Review – Mozno Advisory"}),s.jsx("meta",{name:"description",content:"Complete guide for 22-45-year-old Indians to build wealth via mutual funds."})]}),s.jsx("main",{children:s.jsx("article",{className:"blog-page",children:s.jsx(we,{rehypePlugins:[Ae],remarkPlugins:[Ie],components:{h1:e=>s.jsx("h1",{className:"blog-page__heading blog-page__heading--h1",...e}),h2:e=>s.jsx("h2",{className:"blog-page__heading blog-page__heading--h2",...e}),h3:e=>s.jsx("h3",{className:"blog-page__heading blog-page__heading--h3",...e}),p:e=>s.jsx("p",{className:"blog-page__paragraph",...e}),blockquote:e=>s.jsx("blockquote",{className:"blog-page__blockquote",...e}),ul:e=>s.jsx("ul",{className:"blog-page__list",...e}),ol:e=>s.jsx("ol",{className:"blog-page__list",...e}),li:e=>s.jsx("li",{className:"blog-page__list-item",...e}),table:e=>s.jsx("table",{className:"blog-page__table",...e}),th:e=>s.jsx("th",{className:"blog-page__th",...e}),td:e=>s.jsx("td",{className:"blog-page__td",...e}),a:e=>s.jsx("a",{className:"blog-page__link",...e}),strong:e=>s.jsx("strong",{className:"blog-page__strong",...e}),code:e=>s.jsx("code",{className:"blog-page__code",...e}),hr:e=>s.jsx("hr",{className:"blog-page__hr",...e})},children:HI})})})]})}const zI=`
# 5.1 Home Loans & Property Finance  
> “Your first home is not just an asset—it’s the biggest leveraged investment you’ll ever make.”

For 22-45-year-old Indians, buying a home is both **aspiration and compulsion**: marriage, kids’ school districts, and the classic **“rent vs EMI”** debate.  
This 2,000-word playbook demystifies **home loans, loan-against-property (LAP), balance transfers, and tax sweeteners** so you **own the house—and not the other way around**.

---

## 1. Why Property Finance Wins

| Parameter | Home Loan | Personal Loan | Equity MF SIP |
|-----------|-----------|---------------|---------------|
| **Leverage** | 4:1 | 0 | 1:1 |
| **Post-tax cost** | 5-6 % | 12-15 % | – |
| **Tax benefits** | ₹3.5 L/yr | Nil | – |
| **Asset appreciation** | 7-10 % | – | – |

Net **real return on equity** = **asset gain – post-tax cost** ≈ 2-5 % **plus roof over head**.

---

## 2. Loan Types & Use-Cases

| Product | Purpose | LTV | Tenure | Rate* |
|---------|---------|-----|--------|-------|
| **Home Purchase** | Buy ready/under-construction | 75-90 % | 30 yrs | 8.4-9.0 % |
| **Home Construction** | Self-build plot | 70-80 % | 20 yrs | 8.5-9.2 % |
| **LAP** | Business, personal need | 50-70 % | 15 yrs | 9.5-11 % |
| **Balance Transfer** | Lower rate, top-up | 80 % | Remaining | 8.2-8.8 % |

*Rates April 2025; women borrowers get 0.05 % discount.*

---

## 3. Eligibility Matrix

| Criteria | Ideal | Stretch |
|----------|-------|---------|
| **Age** | 23-58 yrs at maturity | 60 yrs |
| **Net income** | ≥ ₹50k/m | ≥ ₹35k/m with co-applicant |
| **FOIR** | ≤ 50 % | ≤ 65 % |
| **Credit score** | ≥ 750 | ≥ 700 (higher rate) |

**Mozno hack**: Add spouse as co-applicant to **boost eligibility by 40 %**.

---

## 4. Tax Benefits FY 2025-26

| Section | Benefit | Max Limit |
|---------|---------|-----------|
| **80C (principal)** | Deduction | ₹1.5 L |
| **24(b) (interest)** | Deduction | ₹2 L self-occ / No limit let-out |
| **80EEA (first-time)** | Extra interest | ₹1.5 L (loan ≤ ₹45 L, property ≤ ₹45 L) |
| **Joint loan** | Both claim | Double benefits |

---

## 5. Step-by-Step Application (15-Day Timeline)

| Day | Milestone |
|-----|-----------|
| **1-2** | Property shortlist + legal due-diligence |
| **3-4** | Loan sanction letter + rate lock |
| **5-7** | Property valuation + technical check |
| **8-10** | Agreement to sell + down-payment |
| **11-13** | Registration + mortgage creation |
| **14-15** | Disbursement + possession handover |

---

## 6. Pre-EMI vs Full EMI

| Scheme | Cash-flow | Total Interest |
|--------|-----------|----------------|
| **Pre-EMI** | Lower start | Higher |
| **Full EMI** | Higher start | Lower |

**Rule**: Choose **full EMI** if cash-flow allows.

---

## 7. Balance Transfer & Top-Up

| Trigger | Savings | Top-Up Use |
|---------|---------|------------|
| **Rate drop 0.5 %** | ₹4-5 L over 15 yrs | Renovation, business |
| **Improved credit score** | 0.25-0.5 % drop | Child education |

**Fees**: Processing 0.5 % + MOD charges ₹5k-₹10k.

---

## 8. Loan-Against-Property (LAP)

| Use-case | LTV | Rate | Tenure |
|----------|-----|------|--------|
| **Business expansion** | 60 % | 9.5 % | 15 yrs |
| **Debt consolidation** | 65 % | 10 % | 10 yrs |
| **Child education abroad** | 70 % | 9.8 % | 12 yrs |

**Tax on LAP interest** – **business deduction** if used for business.

---

## 9. Builder Finance – Construction Linked Plan (CLP)

| Milestone | Disbursement % | Risk |
|-----------|----------------|------|
| **Foundation** | 10 % | Low |
| **Slab completion** | 70 % | Medium |
| **Possession** | 20 % | High |

**Tip**: Never pay **pre-EMI on undisbursed amount**—ask for **moratorium**.

---

## 10. Women Borrowers & PMAY

| Scheme | Interest Subsidy | Max Loan |
|--------|------------------|----------|
| **PMAY Urban – EWS/LIG** | 6.5 % (₹2.67 L) | ₹6 L |
| **PMAY MIG-I** | 4 % (₹2.35 L) | ₹9 L |
| **PMAY MIG-II** | 3 % (₹2.3 L) | ₹12 L |

**Eligibility**: First-time buyer, household income ≤ ₹18 L.

---

## 11. Digital Lenders vs Banks

| Factor | Bank | NBFC | Fintech |
|--------|------|------|---------|
| **Rate** | 8.4-9 % | 9-11 % | 8.5-10 % |
| **Processing time** | 15-30 days | 7-10 days | 3-5 days |
| **Flexibility** | Low | Medium | High (co-lending) |

---

## 12. Common Pitfalls

| Pitfall | Fix |
|---------|-----|
| **Floating rate shock** | Reset clause + repo-linked loans |
| **Hidden charges** | Ask for **Sanction Letter Annexures** |
| **Pre-payment penalty** | Choose **floating rate loans** (nil penalty) |
| **Undervalued property** | Use **ready-reckoner rate** for LTV |

---

## 13. Annual Review Checklist

- [ ] **Reset interest rate** with repo hike  
- [ ] **Switch lender** if > 0.5 % cheaper  
- [ ] **Pre-pay 5 % principal** each year  
- [ ] **Re-claim 80EEA** if first-time buyer  
- [ ] **Top-up loan** for renovation

---

## 14. Key Takeaways

- **Leverage is your friend when the asset outruns the cost**.  
- **Tax benefits alone can recover 1-2 EMIs annually**.  
- **Balance transfer every 3-4 yrs keeps rates optimal**.  
- **PMAY + women borrower = best subsidy combo**.

---

## 15. Ready to Own Your Dream Home?

🔗 [Book Your Home Loan Strategy Call](https://www.moznoadvisory.com/home-call)  
📥 [Download EMI vs Rent Calculator](https://www.moznoadvisory.com/emicalc)

*Mozno Advisory partners with 25+ banks & NBFCs. Rates subject to RBI regulation. Pre-approval does not guarantee sanction.*
`;function qI(){return s.jsxs(s.Fragment,{children:[s.jsxs(Ne,{children:[s.jsx("title",{children:"Home Loans & Property Finance – Mozno Advisory"}),s.jsx("meta",{name:"description",content:"Complete guide for 22-45-year-old Indians to build wealth via mutual funds."})]}),s.jsx("main",{children:s.jsx("article",{className:"blog-page",children:s.jsx(we,{rehypePlugins:[Ae],remarkPlugins:[Ie],components:{h1:e=>s.jsx("h1",{className:"blog-page__heading blog-page__heading--h1",...e}),h2:e=>s.jsx("h2",{className:"blog-page__heading blog-page__heading--h2",...e}),h3:e=>s.jsx("h3",{className:"blog-page__heading blog-page__heading--h3",...e}),p:e=>s.jsx("p",{className:"blog-page__paragraph",...e}),blockquote:e=>s.jsx("blockquote",{className:"blog-page__blockquote",...e}),ul:e=>s.jsx("ul",{className:"blog-page__list",...e}),ol:e=>s.jsx("ol",{className:"blog-page__list",...e}),li:e=>s.jsx("li",{className:"blog-page__list-item",...e}),table:e=>s.jsx("table",{className:"blog-page__table",...e}),th:e=>s.jsx("th",{className:"blog-page__th",...e}),td:e=>s.jsx("td",{className:"blog-page__td",...e}),a:e=>s.jsx("a",{className:"blog-page__link",...e}),strong:e=>s.jsx("strong",{className:"blog-page__strong",...e}),code:e=>s.jsx("code",{className:"blog-page__code",...e}),hr:e=>s.jsx("hr",{className:"blog-page__hr",...e})},children:zI})})})]})}const YI=`
# 5.2 Business Loans & MSME Finance
> “Capital is the fuel; your idea is the engine.”

India’s **63 million MSMEs contribute 30 % to GDP** and **45 % to exports**, yet **40 % cite lack of finance** as the top growth barrier.  
If you’re 22-45, running a start-up, D2C brand, or manufacturing unit, this 2,000-word guide covers **every loan type, government scheme, and lender playbook** to **scale without diluting equity**.

---

## 1. MSME Loan Landscape 2025

| Category | Ticket Size | Rate | Tenure | Security |
|----------|-------------|------|--------|----------|
| **Working capital** | ₹5 L-₹5 Cr | 9-14 % | 12-60 m | Hypothecation |
| **Term loan** | ₹10 L-₹25 Cr | 8-12 % | 3-10 yrs | Mortgage |
| **CGTMSE** | Up to ₹2 Cr | MCLR + 2 % | 7 yrs | **No collateral** |
| **Invoice discounting** | ₹1 L-₹50 L | 1-1.5 %/30 days | 30-90 days | Receivables |
| **Equipment finance** | ₹5 L-₹20 Cr | 8-11 % | 5-7 yrs | Equipment itself |

---

## 2. Government Schemes Cheat-Sheet

| Scheme | Max Loan | Interest Subsidy | Collateral |
|--------|----------|------------------|------------|
| **PM Mudra – Shishu** | ₹50k | 0 % | No |
| **PM Mudra – Kishor** | ₹5 L | 0 % | No |
| **PM Mudra – Tarun** | ₹10 L | 0 % | No |
| **CGTMSE** | ₹2 Cr | 75 % guarantee fee | No |
| **PM-SVANidhi** | ₹10k-₹50k | Street-vendor micro-loan | No |
| **Stand-Up India** | ₹1 Cr | SC/ST/women start-ups | Partial |

---

## 3. Lender Segments & Fit

| Lender | Speed | Rate | Fit |
|--------|-------|------|-----|
| **PSU Banks** | 15-30 days | 8-10 % | Established MSME |
| **Private Banks** | 7-15 days | 9-12 % | High-growth firms |
| **NBFCs** | 3-7 days | 11-16 % | Start-ups, thin-file |
| **Fintech** | 24 hrs | 14-20 % | Invoice discounting |

---

## 4. Working Capital Cycle Optimisation

| Lever | Impact |
|-------|--------|
| **Invoice discounting** | Release cash in 2 days vs 45 |
| **OD against FD** | 1-2 % over FD rate |
| **Trade credit** | 30-60 days vendor credit |
| **GST credit** | Faster refunds via LUT |

---

## 5. Collateral-Free CGTMSE Deep-Dive

| Tier | Loan | Guarantee Fee | Bank Margin |
|------|------|---------------|-------------|
| **Micro** | Up to ₹10 L | 0.75 % | 15 % |
| **Small** | ₹10 L-₹50 L | 0.85 % | 20 % |
| **Medium** | ₹50 L-₹2 Cr | 1 % | 25 % |

**Eligibility**: MSME Udyam registration + vintage 1 yr.

---

## 6. Application Checklist (7-Day Turnaround)

| Day | Task |
|-----|------|
| **1** | Udyam registration + GST returns |
| **2** | 3-yr ITR + bank statements |
| **3** | Project report + DSCR calc |
| **4** | CIBIL check + collateral docs |
| **5** | Lender shortlisting |
| **6** | Sanction letter negotiation |
| **7** | Disbursement + agreement signing |

---

## 7. Key Ratios Lenders Watch

| Ratio | Ideal | Calculation |
|-------|-------|-------------|
| **DSCR** | ≥ 1.5 | (PAT + Depreciation) / EMI |
| **Current ratio** | ≥ 1.3 | Current assets / liabilities |
| **FOIR** | ≤ 50 % | Total EMIs / net income |

---

## 8. Case Studies

### 8.1 D2C Skincare – Working Capital Cycle
- **Problem**: ₹30 L stuck in 45-day receivables  
- **Solution**: Invoice discounting @ 1.2 %/30 days  
- **Outcome**: **Cash-flow positive**, scale 3× in 12 months

### 8.2 Manufacturing – Equipment Loan
- **Asset**: CNC machine ₹1 Cr  
- **Loan**: ₹70 L @ 9 % for 7 yrs  
- **Tax**: **Depreciation 15 % + interest deduction**  
- **ROI**: **Payback 3.5 yrs**

---

## 9. Interest Rate Negotiation

| Lever | Discount |
|-------|----------|
| **Women borrower** | 0.5 % |
| **CGTMSE guarantee** | 0.5-1 % |
| **CIBIL > 750** | 0.25 % |
| **Bulk deposits** | 0.25 % |

---

## 10. Digital Lending Platforms

| Platform | Focus | Rate |
|----------|-------|------|
| **Lendingkart** | Micro & small | 12-18 % |
| **KredX** | Invoice discounting | 12-15 % |
| **Flexiloans** | Working capital | 15-20 % |
| **Kinara Capital** | Manufacturing | 18-22 % |

---

## 11. Common Pitfalls

| Pitfall | Fix |
|---------|-----|
| **Over-leverage** | Keep DSCR > 1.5 |
| **Personal guarantee** | Negotiate CGTMSE instead |
| **Hidden charges** | Ask for **all-in APR** |
| **Cross-default** | Read fine print |

---

## 12. Annual Review Checklist

- [ ] **Rate reset** with repo change |
- [ ] **Pre-payment** penalty waiver |
- [ ] **Working capital limit** enhancement |
- [ ] **Insurance** on collateral updated |
- [ ] **GST credit** reconciliation |

---

## 13. Key Takeaways

- **CGTMSE is the holy grail for collateral-free growth**.  
- **Invoice discounting turns receivables into rocket fuel**.  
- **DSCR > 1.5 keeps lenders happy and cost low**.  
- **Re-negotiate every 2-3 yrs**—rates and limits improve with performance.

---

## 14. Ready for Capital?

🔗 [Book MSME Finance Consultation](https://www.moznoadvisory.com/biz-call)  
📥 [Download Loan Eligibility Calculator](https://www.moznoadvisory.com/biz-calc)

*Mozno Advisory partners with 30+ banks, NBFCs, and fintechs. Approvals subject to credit policy.*
`;function WI(){return s.jsxs(s.Fragment,{children:[s.jsxs(Ne,{children:[s.jsx("title",{children:"Business Loans & MSME Finance – Mozno Advisory"}),s.jsx("meta",{name:"description",content:"Complete guide for 22-45-year-old Indians to build wealth via mutual funds."})]}),s.jsx("main",{children:s.jsx("article",{className:"blog-page",children:s.jsx(we,{rehypePlugins:[Ae],remarkPlugins:[Ie],components:{h1:e=>s.jsx("h1",{className:"blog-page__heading blog-page__heading--h1",...e}),h2:e=>s.jsx("h2",{className:"blog-page__heading blog-page__heading--h2",...e}),h3:e=>s.jsx("h3",{className:"blog-page__heading blog-page__heading--h3",...e}),p:e=>s.jsx("p",{className:"blog-page__paragraph",...e}),blockquote:e=>s.jsx("blockquote",{className:"blog-page__blockquote",...e}),ul:e=>s.jsx("ul",{className:"blog-page__list",...e}),ol:e=>s.jsx("ol",{className:"blog-page__list",...e}),li:e=>s.jsx("li",{className:"blog-page__list-item",...e}),table:e=>s.jsx("table",{className:"blog-page__table",...e}),th:e=>s.jsx("th",{className:"blog-page__th",...e}),td:e=>s.jsx("td",{className:"blog-page__td",...e}),a:e=>s.jsx("a",{className:"blog-page__link",...e}),strong:e=>s.jsx("strong",{className:"blog-page__strong",...e}),code:e=>s.jsx("code",{className:"blog-page__code",...e}),hr:e=>s.jsx("hr",{className:"blog-page__hr",...e})},children:YI})})})]})}const GI=`
# 5.3 Personal Loans & Consumer Finance
> “Credit is a tool, not a trap—when used with a plan.”

Whether it’s a **destination wedding**, **medical emergency**, or **credit-card debt consolidation**, personal loans give 22-45-year-olds **instant liquidity without collateral**.  
This 2,000-word guide decodes **eligibility, rates, traps, and hacks** so you **borrow smart, repay faster, and keep your credit score sparkling**.

---

## 1. Personal Loan Landscape 2025

| Lender | Rate Range | Ticket | Tenure | Processing |
|--------|------------|--------|--------|------------|
| **Banks** | 10.5-15 % | ₹50k-₹40 L | 1-5 yrs | 0.5-2 % |
| **NBFCs** | 12-20 % | ₹25k-₹25 L | 1-5 yrs | 1-3 % |
| **Fintech** | 16-24 % | ₹5k-₹5 L | 3-36 m | 2-4 % |
| **Credit card loan** | 12-18 % | On limit | 3-24 m | 1 % |

---

## 2. Eligibility Matrix

| Factor | Ideal | Stretch |
|--------|-------|---------|
| **Credit score** | ≥ 750 | ≥ 700 |
| **Monthly income** | ≥ ₹40k | ≥ ₹25k with co-applicant |
| **FOIR** | ≤ 50 % | ≤ 65 % |
| **Employment** | 2 yrs | 1 yr confirmed |

---

## 3. Use-Cases & Fit

| Need | Best Product | Rate Sweet-Spot |
|------|--------------|-----------------|
| **Debt consolidation** | Balance transfer PL | 10-12 % |
| **Medical emergency** | Pre-approved top-up | 11-13 % |
| **Wedding** | Long-tenure PL | 12-14 % |
| **Gadget/Travel** | Instant fintech | 14-16 % |

---

## 4. Rate Hacks

| Hack | Discount |
|------|----------|
| **Pre-approved offer** | 0.5-1 % |
| **Salary account** | 0.25-0.5 % |
| **Women borrower** | 0.25 % |
| **CIBIL > 800** | 0.5 % |

---

## 5. The EMI Formula
EMI = [P × R × (1+R)^N] ÷ [(1+R)^N – 1]  
P = principal, R = monthly rate, N = months  

**Illustration**: ₹5 L @ 12 % for 3 yrs → **EMI = ₹16,607**; total interest = ₹97,840.

---

## 6. Traps to Avoid

| Trap | Escape |
|------|--------|
| **Flat vs reducing rate** | Always ask **reducing balance APR** |
| **Hidden processing fee** | Check **all-in cost** |
| **Pre-closure charges** | Choose **floating rate loans** (nil) |
| **Insurance bundling** | Decline unless needed |

---

## 7. Balance Transfer vs Top-Up

| Metric | Balance Transfer | Top-Up |
|--------|------------------|--------|
| **Use** | Lower rate | Extra funds |
| **Rate** | 1-2 % lower | Same lender |
| **Fee** | 0.5-2 % | 1 % |

---

## 8. Digital Lenders vs Banks

| Factor | Bank | NBFC | Fintech |
|--------|------|------|---------|
| **Speed** | 3-7 days | 1-3 days | 5-30 min |
| **Documentation** | Full | Medium | Video-KYC |
| **Flexibility** | Low | Medium | High |

---

## 9. Credit Score Impact

| Action | Score Change |
|--------|--------------|
| **On-time EMI** | +10-15 points |
| **Missed EMI** | -50-70 points |
| **Multiple applications** | -5 per enquiry |
| **Closure** | +20 points |

---

## 10. Case Studies

### 10.1 Debt Consolidation
- **Cards**: ₹2.5 L @ 36 % → **PL ₹2.5 L @ 11 %**  
- **EMI drop**: ₹12k → ₹8k  
- **Interest saved**: ₹5 L over 3 yrs

### 10.2 Emergency Medical
- **Hospital bill**: ₹6 L  
- **Pre-approved top-up**: ₹6 L @ 12 %, disbursed in 2 hrs  
- **Insurance shortfall met**

---

## 11. Pre-Closure vs Part-Payment

| Option | Fee | Benefit |
|--------|-----|---------|
| **Full pre-closure** | Nil (floating) | Interest saved |
| **Part-payment** | Nil | EMI or tenure reduced |
| **Step-down EMI** | Nil | Easier cash-flow |

---

## 12. Apps & Tools

| Tool | Use |
|------|-----|
| **BankBazaar** | Rate comparison |
| **Cred** | Pre-approved offers |
| **CASHe** | Instant salary advance |
| **EMI calculator** | Google Sheets |

---

## 13. Annual Review Checklist

- [ ] **Rate reset** with repo drop |
- [ ] **Credit score** > 750 |
- [ ] **EMI ≤ 40 %** of income |
| [ ] **No new credit** 6 m before big loan |

---

## 14. Key Takeaways

- **Borrow only for appreciating or urgent needs**.  
- **Compare APR, not just rate**.  
- **Pre-pay when ROI > 10 %**.  
- **Maintain CIBIL > 750** for cheapest rates.

---

## 15. Ready to Borrow Wisely?

🔗 [Book Personal Loan Strategy Call](https://www.moznoadvisory.com/pl-call)  
📥 [Download EMI vs Credit Card Calculator](https://www.moznoadvisory.com/pl-calc)

*Mozno Advisory partners with 25+ lenders. Approvals subject to credit policy.*
`;function VI(){return s.jsxs(s.Fragment,{children:[s.jsxs(Ne,{children:[s.jsx("title",{children:"Personal Loans & Consumer Finance – Mozno Advisory"}),s.jsx("meta",{name:"description",content:"Complete guide for 22-45-year-old Indians to build wealth via mutual funds."})]}),s.jsx("main",{children:s.jsx("article",{className:"blog-page",children:s.jsx(we,{rehypePlugins:[Ae],remarkPlugins:[Ie],components:{h1:e=>s.jsx("h1",{className:"blog-page__heading blog-page__heading--h1",...e}),h2:e=>s.jsx("h2",{className:"blog-page__heading blog-page__heading--h2",...e}),h3:e=>s.jsx("h3",{className:"blog-page__heading blog-page__heading--h3",...e}),p:e=>s.jsx("p",{className:"blog-page__paragraph",...e}),blockquote:e=>s.jsx("blockquote",{className:"blog-page__blockquote",...e}),ul:e=>s.jsx("ul",{className:"blog-page__list",...e}),ol:e=>s.jsx("ol",{className:"blog-page__list",...e}),li:e=>s.jsx("li",{className:"blog-page__list-item",...e}),table:e=>s.jsx("table",{className:"blog-page__table",...e}),th:e=>s.jsx("th",{className:"blog-page__th",...e}),td:e=>s.jsx("td",{className:"blog-page__td",...e}),a:e=>s.jsx("a",{className:"blog-page__link",...e}),strong:e=>s.jsx("strong",{className:"blog-page__strong",...e}),code:e=>s.jsx("code",{className:"blog-page__code",...e}),hr:e=>s.jsx("hr",{className:"blog-page__hr",...e})},children:GI})})})]})}const $I=`
# 5.4 Builder Finance & Stressed Asset Funding
> “Where others see distress, smart capital sees discounted cash-flows.”

Real-estate cycles create **opportunities**—completed but unsold inventory, stalled projects, or under-valued land parcels.  
For 22-45-year-old **HNIs, family offices, or real-estate professionals**, **builder finance** and **stressed-asset funding** can generate **IRR 18-25 %** over 3-7 years.  
This 2,000-word guide walks you through **due-diligence, structures, risks, and exit routes**—so you **buy the asset, not the headache**.

---

## 1. Builder Finance vs Stressed Assets – Definitions

| Segment | Asset | Ticket | Target IRR | Risk |
|---------|-------|--------|------------|------|
| **Construction finance** | Under-construction | ₹5-₹100 Cr | 15-18 % | Construction delay |
| **Stressed inventory** | Completed unsold | ₹2-₹50 Cr | 18-22 % | Sales velocity |
| **Land acquisition** | Land bank | ₹10-₹200 Cr | 20-25 % | Regulatory clearances |

---

## 2. Capital Stack & Structures

| Layer | Instrument | Rate | Security |
|-------|------------|------|----------|
| **Senior debt** | Construction loan | 10-13 % | First charge |
| **Mezzanine** | Preference shares | 15-18 % | Second charge |
| **Equity** | JV / SPV shares | 20-25 % | Exit multiple |

---

## 3. Funding Vehicles

| Vehicle | Min Ticket | Regulatory | Liquidity |
|---------|------------|------------|-----------|
| **AIF Cat-II (RE)** | ₹1 Cr | SEBI | Quarterly |
| **NBFC PMS** | ₹50 L | RBI | 3-5 yrs |
| **Direct SPV** | ₹25 L | LLP | Project exit |

---

## 4. Due-Diligence Checklist

| Category | Red Flags | Green Flags |
|----------|-----------|-------------|
| **Title** | Encumbrances > 20 % | Clear 7/12 or OC |
| **Approvals** | Missing CC | Full CC & OC |
| **Sales velocity** | < 10 % per quarter | > 25 % per quarter |
| **Developer track** | > 2 delayed projects | On-time delivery |
| **Financials** | Negative cash-flow | DSCR > 1.2 |

---

## 5. Stress-Testing Scenarios

| Scenario | Base IRR | Stressed IRR | Mitigation |
|----------|----------|--------------|------------|
| **Sales slow 30 %** | 20 % | 12 % | Price drop buffer |
| **Construction delay 6 m** | 18 % | 15 % | Liquidated damages |
| **Policy change** | 22 % | 10 % | Exit via rental yield |

---

## 6. Government & NBFC Schemes

| Scheme | Role | Benefit |
|--------|------|---------|
| **SWAMIH Fund** | Stalled projects | ₹25k Cr corpus, 15 % IRR target |
| **NBFC stress fund** | Inventory buy-out | 18 % target, 3-yr exit |
| **REIT route** | Completed rental assets | 8-10 % yield + capital gain |

---

## 7. Case Studies

### 7.1 Stalled Residential Tower – Mumbai Suburbs
- **Status**: 70 % complete, 2 yrs delay  
- **Funding**: ₹30 L AIF ticket  
- **Exit**: Completion + sales in 24 months  
- **IRR**: **22 % net**

### 7.2 Commercial Warehouse – NCR
- **Asset**: 2 lakh sq ft Grade-A  
- **Funding**: ₹10 Cr mezzanine  
- **Exit**: Lease to e-commerce + REIT roll-up  
- **IRR**: **19 %**

---

## 8. Risk Matrix

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| **Regulatory delay** | Medium | High | Escrow account |
| **Market downturn** | High | Medium | V-shape recovery history |
| **Developer default** | Low | High | Step-in rights |
| **Liquidity crunch** | Medium | Medium | Quarterly NAV |

---

## 9. Legal & Tax Considerations

| Aspect | Structure | Tax |
|--------|-----------|-----|
| **Capital gains** | SPV exit | 20 % with indexation |
| **Rental income** | SPV | 30 % flat |
| **GST on sale** | Developer | 5 % (residential) |
| **TDS on purchase** | Buyer | 1 % if > ₹50 L |

---

## 10. Funding Timeline

| Phase | Duration | Milestone |
|-------|----------|-----------|
| **Due-diligence** | 30 days | Technical & legal sign-off |
| **Sanction** | 15 days | MOU + escrow |
| **Disbursement** | 45 days | Tranche linked milestones |
| **Exit** | 24-36 months | Sales / REIT listing |

---

## 11. Key Takeaways

- **Stressed assets = discounted entry + forced exit**.  
- **Due-diligence > price**—title & approvals are non-negotiable.  
- **Mezzanine structures balance risk-reward**.  
- **Exit via sales, REIT, or rental cash-flows**.

---

## 12. Ready to Explore?

🔗 [Book Builder Finance Intro Call](https://www.moznoadvisory.com/builder-call)  
📥 [Download Due-Diligence Template](https://www.moznoadvisory.com/dd-template)

*Mozno Advisory sources opportunities via AIFs, NBFCs, and direct SPVs. Investments carry market, regulatory, and liquidity risks.*
`;function QI(){return s.jsxs(s.Fragment,{children:[s.jsxs(Ne,{children:[s.jsx("title",{children:"Builder Finance & Stressed Asset Funding – Mozno Advisory"}),s.jsx("meta",{name:"description",content:"Complete guide for 22-45-year-old Indians to build wealth via mutual funds."})]}),s.jsx("main",{children:s.jsx("article",{className:"blog-page",children:s.jsx(we,{rehypePlugins:[Ae],remarkPlugins:[Ie],components:{h1:e=>s.jsx("h1",{className:"blog-page__heading blog-page__heading--h1",...e}),h2:e=>s.jsx("h2",{className:"blog-page__heading blog-page__heading--h2",...e}),h3:e=>s.jsx("h3",{className:"blog-page__heading blog-page__heading--h3",...e}),p:e=>s.jsx("p",{className:"blog-page__paragraph",...e}),blockquote:e=>s.jsx("blockquote",{className:"blog-page__blockquote",...e}),ul:e=>s.jsx("ul",{className:"blog-page__list",...e}),ol:e=>s.jsx("ol",{className:"blog-page__list",...e}),li:e=>s.jsx("li",{className:"blog-page__list-item",...e}),table:e=>s.jsx("table",{className:"blog-page__table",...e}),th:e=>s.jsx("th",{className:"blog-page__th",...e}),td:e=>s.jsx("td",{className:"blog-page__td",...e}),a:e=>s.jsx("a",{className:"blog-page__link",...e}),strong:e=>s.jsx("strong",{className:"blog-page__strong",...e}),code:e=>s.jsx("code",{className:"blog-page__code",...e}),hr:e=>s.jsx("hr",{className:"blog-page__hr",...e})},children:$I})})})]})}const KI=`
# 6.1 Estate Planning & Wealth Transfer  
> “We spend our lives creating wealth; an estate plan ensures it creates the life we want for the next generation.”

Estate planning is **not only for the ultra-rich**.  
If you are 22-45 and already own **ESOPs, mutual funds, a flat, or crypto**, you have an **estate** that needs a **plan**.  
This 2,000-word guide demystifies **how to transfer every rupee—smoothly, legally, and tax-efficiently**—so **your wishes outlive you** and **family harmony outlives disputes**.

---

## 1. Why Estate Planning Matters Now

| Stat | Reality Check |
|------|---------------|
| **70 % Indians** die intestate (no valid will) | Family feuds, frozen assets |
| **Average wealth** at 35: ₹1-5 Cr | ESOPs, MF, FDs, crypto |
| **Legal battles** | 10-15 yrs, ₹5-50 L cost |
| **Succession act** | 50 % to spouse + 50 % split among kids (if no will) |

---

## 2. The Estate Planning Pyramid

| Tier | Tool | Purpose |
|------|------|---------|
| **Tier 1** | Nomination + Beneficiary | Quick liquidity |
| **Tier 2** | Will | Legal distribution |
| **Tier 3** | Trusts | Control & tax efficiency |
| **Tier 4** | Family Constitution | Values & governance |

---

## 3. Mapping Your Estate (15-Minute Exercise)

| Asset | Value (₹) | Nominee? | Will? | Tax on Transfer |
|-------|-----------|----------|-------|-----------------|
| **Flat in Bengaluru** | 1.2 Cr | Yes | TBD | Stamp duty 5 % |
| **MF Portfolio** | 60 L | Yes | TBD | Nil (transmission) |
| **ESOPs** | 40 L | No | TBD | Capital gains |
| **US stocks** | 25 L | No | TBD | Estate tax (if US situs) |
| **Crypto** | 10 L | No | TBD | 30 % gains |

---

## 4. Wealth-Transfer Channels

| Channel | Speed | Cost | Control |
|---------|-------|------|---------|
| **Nomination** | T+1 | Nil | No control post-death |
| **Will** | 6-18 m | ₹5k-₹15k | Full control |
| **Living Trust** | Immediate | ₹25k-₹1 L | Granular control |
| **Gift Deed** | Immediate | Stamp duty | Irrevocable |

---

## 5. Tax Implications of Wealth Transfer

| Mode | Recipient | Tax |
|------|-----------|-----|
| **Inheritance via Will** | Any | **Nil** (after 2005 amendment) |
| **Gift to relative** | Spouse, kids, parents | **Nil** |
| **Gift to non-relative** | > ₹50k | Slab rate |
| **US stock inheritance** | US citizen | 40 % estate tax above $60k |

---

## 6. Digital Assets & Crypto Succession

| Challenge | Solution |
|-----------|----------|
| **Private keys lost** | Hardware wallet + seed phrase in bank locker |
| **Exchange death protocol** | Nominee form + legal heir certificate |
| **Regulatory clarity** | Treat as capital asset, disclose in ITR |

---

## 7. Case Study: 33-Year-Old Techie

| Asset | Plan | Tool |
|-------|------|------|
| **Flat** | Transfer to spouse via Will | Registered Will |
| **MF** | Equal to parents & spouse | Nomination + Will |
| **ESOPs** | Trust for kids’ education | Revocable living trust |
| **Crypto** | Seed phrase + hardware wallet | Safety deposit box |

---

## 8. Trust Structures Explained

| Type | Control | Tax | Use Case |
|------|---------|-----|----------|
| **Revocable Living** | High | Grantor taxed | Flexibility |
| **Irrevocable** | Low | Trust taxed | Asset protection |
| **Testamentary** | From death | Trust taxed | Minor kids |
| **Spendthrift** | Trustee | Trust taxed | Spendthrift heirs |

---

## 9. Family Limited Liability Partnership (FLLP)

| Benefit | Details |
|---------|---------|
| **Business continuity** | Shares pass to heirs seamlessly |
| **Limited liability** | Protect personal assets |
| **Tax neutral** | Pass-through taxation |

---

## 10. Tools & Professionals

| Tool | Use |
|------|-----|
| **Will Generator** | Online templates (LegalKart, Vakilsearch) |
| **Trust deed templates** | CA + lawyer |
| **Family Constitution** | 2-hour facilitated workshop |
| **Digital vault** | DigiLocker + Google Drive |

---

## 11. Annual Review Ritual

| Event | Action |
|-------|--------|
| **Birth of child** | Add nominee + update will |
| **Asset sale** | Remove from schedule |
| **New ESOP lot** | Update schedule |
| **Marriage** | Add spouse as contingent beneficiary |

---

## 12. Key Takeaways

- **Start with a simple will**; layer trusts as complexity grows.  
- **Nomination + will = fastest liquidity**.  
- **Trusts protect minors and cap taxes**.  
- **Review every big life event**.

---

## 13. Ready to Build Your Legacy Blueprint?

🔗 [Book Estate Planning Consultation](https://www.moznoadvisory.com/estate-call)  
📥 [Download Estate-Asset Register](https://www.moznoadvisory.com/estate-register)

*Mozno Advisory works with empanelled lawyers and chartered accountants. Legal advice may vary by jurisdiction.*
`;function XI(){return s.jsxs(s.Fragment,{children:[s.jsxs(Ne,{children:[s.jsx("title",{children:"Estate Planning & Wealth Transfer – Mozno Advisory"}),s.jsx("meta",{name:"description",content:"Complete guide for 22-45-year-old Indians to build wealth via mutual funds."})]}),s.jsx("main",{children:s.jsx("article",{className:"blog-page",children:s.jsx(we,{rehypePlugins:[Ae],remarkPlugins:[Ie],components:{h1:e=>s.jsx("h1",{className:"blog-page__heading blog-page__heading--h1",...e}),h2:e=>s.jsx("h2",{className:"blog-page__heading blog-page__heading--h2",...e}),h3:e=>s.jsx("h3",{className:"blog-page__heading blog-page__heading--h3",...e}),p:e=>s.jsx("p",{className:"blog-page__paragraph",...e}),blockquote:e=>s.jsx("blockquote",{className:"blog-page__blockquote",...e}),ul:e=>s.jsx("ul",{className:"blog-page__list",...e}),ol:e=>s.jsx("ol",{className:"blog-page__list",...e}),li:e=>s.jsx("li",{className:"blog-page__list-item",...e}),table:e=>s.jsx("table",{className:"blog-page__table",...e}),th:e=>s.jsx("th",{className:"blog-page__th",...e}),td:e=>s.jsx("td",{className:"blog-page__td",...e}),a:e=>s.jsx("a",{className:"blog-page__link",...e}),strong:e=>s.jsx("strong",{className:"blog-page__strong",...e}),code:e=>s.jsx("code",{className:"blog-page__code",...e}),hr:e=>s.jsx("hr",{className:"blog-page__hr",...e})},children:KI})})})]})}const JI=`
# 6.2 Will Drafting & Trust Services
> “A will is the loudest voice you leave behind when you can’t speak.”

A **valid will** is the **cheapest legal document** that prevents **crores of rupees** from being **tied up for decades**.  
Trusts go a step further—**protecting minors, avoiding probate, and saving taxes**.  
This 2,000-word guide shows **how to draft, register, and fund wills & trusts**—tailored for **22-45-year-old Indians** who’d rather **plan now than litigate later**.

---

## 1. Why a Will Beats Intestacy

| Intestate Share | Will Share |
|-----------------|------------|
| Spouse + kids + parents | **Exactly what you decide** |
| Court fees & delays | **Zero court (if registered)** |
| Equal split (HUF) | **Unequal, conditional gifts** |

---

## 2. Who Needs a Will—Yesterday vs Today

| Age Bracket | Trigger |
|-------------|---------|
| **22-30** | ESOPs, first flat, crypto |
| **30-40** | Kids, joint home loan |
| **40-45** | Business equity, second home |

---

## 3. Components of a Valid Will

| Part | Description |
|------|-------------|
| **Title** | Last Will and Testament of [Name] |
| **Revocation** | Cancels earlier wills |
| **Executor** | Person to carry out wishes |
| **Beneficiaries** | Who gets what |
| **Specific bequests** | Jewellery, car, shares |
| **Residuary clause** | “Rest goes to…” |
| **Date & signature** | Two witnesses |

---

## 4. Will vs Trust – Quick Decoder

| Factor | Will | Trust |
|--------|------|-------|
| **Effective** | After death | Immediately (living) |
| **Probate** | Yes | No |
| **Control** | Absolute | Trustee control |
| **Cost** | ₹3k-₹25k | ₹25k-₹2 L |
| **Tax** | Nil on inheritance | Trust taxed |

---

## 5. Types of Trusts in India

| Trust | Control | Use Case |
|-------|---------|----------|
| **Revocable Living** | Grantor retains | Flexibility |
| **Irrevocable** | Trustee | Asset protection |
| **Testamentary** | From will | Minor beneficiaries |
| **Special Needs** | Trustee | Disabled heirs |
| **Charitable** | Public | CSR & legacy |

---

## 6. Step-by-Step Will Drafting (DIY)

| Step | Tool |
|------|------|
| **Asset list** | Google Sheet |
| **Beneficiary matrix** | Family tree |
| **Executor choice** | Reliable sibling/friend |
| **Witnesses** | Two non-beneficiaries |
| **Registration** | Sub-registrar (optional but bullet-proof) |

---

## 7. Registration Process (Optional but Recommended)

| Location | Fee (₹) | Timeline |
|----------|---------|----------|
| **Sub-registrar office** | ₹200-₹500 | Same day |
| **Online (Maharashtra)** | ₹1,000 | 2 days |
| **Video-will (future)** | Pilot in 3 states | TBD |

---

## 8. Trust Deed Essentials

| Clause | Purpose |
|--------|---------|
| **Settlor & trustee** | Powers & duties |
| **Beneficiaries** | Vested vs contingent |
| **Corpus** | Assets transferred |
| **Rule against perpetuity** | 21 years max post-death |
| **Tax clause** | Trust taxation |

---

## 9. Funding the Trust

| Asset | Mode | Note |
|-------|------|------|
| **Cash** | Cheque/RTGS | Immediate |
| **Shares** | Off-market transfer | Gift deed |
| **Property** | Gift deed + stamp duty | 2-7 % state-wise |
| **Crypto** | Seed phrase in trust deed | Emerging |

---

## 10. Case Study: 35-Year-Old Entrepreneur

| Asset | Will Clause | Trust Clause |
|-------|-------------|--------------|
| **Startup equity** | 60 % to spouse | 40 % in trust for kids’ education |
| **Flat** | Spouse lifetime, then kids | – |
| **Gold** | Mother | – |
| **Mutual funds** | – | 100 % in trust for kids |

---

## 11. Digital & Video Wills

| Platform | Validity | Notarisation |
|----------|----------|--------------|
| **WillJini** | Yes | Optional |
| **Video will (Zoom)** | Yes (pilot) | Two witnesses |
| **Blockchain will** | Concept | Not yet recognised |

---

## 12. Executor & Guardian Selection

| Role | Criteria | Backup |
|------|----------|--------|
| **Executor** | Financially savvy | Alternate executor |
| **Guardian (minors)** | Same values | Alternate guardian |
| **Trustee** | Professional CA/lawyer | Co-trustee |

---

## 13. Common Mistakes

| Mistake | Fix |
|---------|-----|
| **Unsigned will** | Sign every page |
| **Beneficiary as witness** | Invalidates gift |
| **Outdated will** | Review every 3 yrs |
| **No residuary clause** | Intestacy for leftovers |

---

## 14. Costs Snapshot

| Service | Fee (₹) |
|---------|---------|
| **DIY will template** | Free-₹1k |
| **Lawyer-drafted will** | ₹5k-₹15k |
| **Registered will** | ₹200-₹500 |
| **Trust deed** | ₹25k-₹1 L |
| **Notarisation** | ₹100-₹500 |

---

## 15. Key Takeaways

- **A simple registered will** covers 90 % of needs.  
- **Trusts protect minors and reduce taxes**.  
- **Update every 3-5 years or life event**.  
- **Store safely**—digital + physical copies.

---

## 16. Ready to Draft Your Will?

🔗 [Book Will & Trust Consultation](https://www.moznoadvisory.com/will-call)  
📥 [Download Will Template](https://www.moznoadvisory.com/will-template)

*Mozno Advisory works with empanelled lawyers. Legal validity subject to Indian Succession Act, 1925.*
`;function ZI(){return s.jsxs(s.Fragment,{children:[s.jsxs(Ne,{children:[s.jsx("title",{children:"Will Drafting & Trust Services – Mozno Advisory"}),s.jsx("meta",{name:"description",content:"Complete guide for 22-45-year-old Indians to build wealth via mutual funds."})]}),s.jsx("main",{children:s.jsx("article",{className:"blog-page",children:s.jsx(we,{rehypePlugins:[Ae],remarkPlugins:[Ie],components:{h1:e=>s.jsx("h1",{className:"blog-page__heading blog-page__heading--h1",...e}),h2:e=>s.jsx("h2",{className:"blog-page__heading blog-page__heading--h2",...e}),h3:e=>s.jsx("h3",{className:"blog-page__heading blog-page__heading--h3",...e}),p:e=>s.jsx("p",{className:"blog-page__paragraph",...e}),blockquote:e=>s.jsx("blockquote",{className:"blog-page__blockquote",...e}),ul:e=>s.jsx("ul",{className:"blog-page__list",...e}),ol:e=>s.jsx("ol",{className:"blog-page__list",...e}),li:e=>s.jsx("li",{className:"blog-page__list-item",...e}),table:e=>s.jsx("table",{className:"blog-page__table",...e}),th:e=>s.jsx("th",{className:"blog-page__th",...e}),td:e=>s.jsx("td",{className:"blog-page__td",...e}),a:e=>s.jsx("a",{className:"blog-page__link",...e}),strong:e=>s.jsx("strong",{className:"blog-page__strong",...e}),code:e=>s.jsx("code",{className:"blog-page__code",...e}),hr:e=>s.jsx("hr",{className:"blog-page__hr",...e})},children:JI})})})]})}const e6=`
# 6.3 Family Governance & Legacy Planning

> “Wealth without governance is a recipe for family fracture.”

Money lasts three generations; **values last forever**.  
Family governance is the **soft infrastructure** that keeps **financial, human, and social capital** aligned for decades.  
This 2,000-word guide shows **22-45-year-olds** how to **write a family constitution, run family meetings, and raise financially-literate heirs**—so the **family thrives, not just survives**.

---

## 1. Why Governance Matters

| Stat | Impact |
|------|--------|
| **70 % family businesses** fail by 3rd gen | Lack of governance |
| **90 % wealth lost** by 3rd gen | No succession plan |
| **Family disputes** | Average 10-yr court battles |

---

## 2. The Three Capitals Framework

| Capital | Description | Governance Tool |
|---------|-------------|-----------------|
| **Financial** | Money, property | Investment policy |
| **Human** | Skills, education | Family education plan |
| **Social** | Values, philanthropy | Family values charter |

---

## 3. Family Constitution – 1-Page Template

| Clause | Example |
|--------|---------|
| **Vision** | “Preserve wealth for 5 generations” |
| **Mission** | “Entrepreneurship + philanthropy” |
| **Values** | Integrity, frugality, continuous learning |
| **Decision rights** | Family council + external advisors |
| **Conflict resolution** | Mediation → arbitration |
| **Education** | 2 yrs work experience before board seat |

---

## 4. Family Meeting Playbook

| Frequency | Agenda | Outcome |
|-----------|--------|---------|
| **Quarterly** | Investments, philanthropy | Minutes + action items |
| **Annual** | Budget, succession | Ratified investment policy |
| **Emergency** | Crisis, dispute | Quick consensus |

**Tools**: Zoom + shared Google Drive.

---

## 5. Next-Gen Financial Literacy Curriculum

| Age | Module | Delivery |
|-----|--------|----------|
| **10-15** | Budgeting game | Family Monopoly night |
| **16-18** | Stock market | Virtual ₹1 L portfolio |
| **18-25** | Internship | 6 m in family business |
| **25+** | Board observer | 4 meetings/yr |

---

## 6. Family Office Lite (₹5 Cr+ net-worth)

| Function | In-house | Outsourced |
|----------|----------|------------|
| **Investment management** | CIO | PMS |
| **Tax & compliance** | CA firm | Annual retainer |
| **Legal & governance** | Lawyer | On-call |
| **Philanthropy** | Family member | CSR consultant |

---

## 7. Communication Protocols

| Channel | Use Case | Frequency |
|---------|----------|-----------|
| **WhatsApp group** | Quick updates | Daily |
| **Quarterly newsletter** | Performance | Quarterly |
| **Annual retreat** | Strategy | Yearly |

---

## 8. Case Study: Gupta Family (3rd Gen)

| Challenge | Solution |
|-----------|----------|
| **Sibling rivalry** | Rotating chairmanship |
| **Education gaps** | Family education fund |
| **Philanthropy** | ₹1 Cr annual corpus |

**Outcome**: 25 % CAGR, zero litigation in 10 yrs.

---

## 9. Technology Tools

| Tool | Purpose |
|------|---------|
| **Notion Family Wiki** | Policies, minutes |
| **Slack channel** | Secure family chat |
| **Zoom** | Remote meetings |
| **Shared Dropbox** | Documents |

---

## 10. Conflict Resolution Ladder

| Step | Method |
|------|--------|
| **1. Informal chat** | Family elder |
| **2. Mediation** | External mediator |
| **3. Arbitration** | ICA panel |
| **4. Court** | Last resort |

---

## 11. Philanthropy & Impact

| Vehicle | Tax | Impact |
|---------|-----|--------|
| **Family foundation** | 12A/80G | CSR + legacy |
| **Donor-advised fund** | Immediate deduction | Flexible grants |
| **CSR trust** | 2 % of profit | Business alignment |

---

## 12. Annual Retreat Agenda (Sample)

| Time | Activity |
|------|----------|
| **09:00** | Financial review |
| **11:00** | Next-gen presentation |
| **14:00** | Philanthropy pitch |
| **16:00** | Conflict resolution exercise |

---

## 13. Key Takeaways

- **Start with a one-page constitution**.  
- **Quarterly meetings build culture**.  
- **Education is the best succession plan**.  
- **Governance is cheaper than litigation**.

---

## 14. Ready to Govern?

🔗 [Book Family Governance Workshop](https://www.moznoadvisory.com/governance-call)  
📥 [Download Family Constitution Template](https://www.moznoadvisory.com/constitution-template)

*Mozno Advisory provides facilitation, not legal drafting. Consult professionals for jurisdiction-specific advice.*
`;function t6(){return s.jsxs(s.Fragment,{children:[s.jsxs(Ne,{children:[s.jsx("title",{children:"Family Governance & Legacy Planning – Mozno Advisory"}),s.jsx("meta",{name:"description",content:"Complete guide for 22-45-year-old Indians to build wealth via mutual funds."})]}),s.jsx("main",{children:s.jsx("article",{className:"blog-page",children:s.jsx(we,{rehypePlugins:[Ae],remarkPlugins:[Ie],components:{h1:e=>s.jsx("h1",{className:"blog-page__heading blog-page__heading--h1",...e}),h2:e=>s.jsx("h2",{className:"blog-page__heading blog-page__heading--h2",...e}),h3:e=>s.jsx("h3",{className:"blog-page__heading blog-page__heading--h3",...e}),p:e=>s.jsx("p",{className:"blog-page__paragraph",...e}),blockquote:e=>s.jsx("blockquote",{className:"blog-page__blockquote",...e}),ul:e=>s.jsx("ul",{className:"blog-page__list",...e}),ol:e=>s.jsx("ol",{className:"blog-page__list",...e}),li:e=>s.jsx("li",{className:"blog-page__list-item",...e}),table:e=>s.jsx("table",{className:"blog-page__table",...e}),th:e=>s.jsx("th",{className:"blog-page__th",...e}),td:e=>s.jsx("td",{className:"blog-page__td",...e}),a:e=>s.jsx("a",{className:"blog-page__link",...e}),strong:e=>s.jsx("strong",{className:"blog-page__strong",...e}),code:e=>s.jsx("code",{className:"blog-page__code",...e}),hr:e=>s.jsx("hr",{className:"blog-page__hr",...e})},children:e6})})})]})}const n6=`
# 6.4 Probate & Estate Administration
> “Administration without administration is just administration—let’s make it administration.”

Probate is the **court-supervised process** that **validates a will** and **transfers assets** to legal heirs.  
Mismanagement can **freeze assets for years** and **drain 5-10 % in legal costs**.  
This 2,000-word guide walks **executors, family members, and beneficiaries** through **timelines, forms, fees, and hacks** to settle estates **swiftly and smoothly**.

---

## 1. What Is Probate?
| Aspect | Details |
|--------|---------|
| **Purpose** | Prove will & transfer assets |
| **Court** | District court (civil) |
| **Duration** | 6-24 months |
| **Cost** | 2-7 % of estate value |
| **Mandatory** | If immovable property or will disputes |

---

## 2. When Is Probate Needed?
| Trigger | Probate Required |
|---------|------------------|
| **Immovable property** | Always |
| **Bank A/c > ₹5 L** | Bank discretion |
| **Stocks in demat** | If no nomination |
| **Disputed will** | Mandatory |

---

## 3. Who Can Apply?
| Role | Eligibility |
|------|-------------|
| **Executor** | Named in will |
| **Legal heir** | If no will |
| **Administrator** | Court appointee |

---

## 4. Step-by-Step Probate Process (12-Month Timeline)
| Month | Action |
|-------|--------|
| **1** | Death certificate |
| **2** | Gazette & newspaper notice |
| **3** | Will search + witness affidavits |
| **4** | Court petition + court fees |
| **5-6** | Objection period |
| **7-8** | Evidence / witness hearing |
| **9-10** | Probate decree |
| **11-12** | Mutation + asset transfer |

---

## 5. Court Fees & Stamp Duty (State-wise)
| State | Court Fee | Stamp on Probate |
|-------|-----------|------------------|
| **Maharashtra** | ₹75k (₹1 Cr estate) | ₹75k |
| **Delhi** | ₹15k | ₹15k |
| **Karnataka** | ₹25k | ₹25k |

---

## 6. Documents Checklist
| Category | Documents |
|----------|-----------|
| **Death** | Death certificate |
| **Will** | Original + photocopies |
| **Assets** | Property card, bank statements |
| **Heirs** | Legal heir certificate |
| **Identity** | Aadhaar, PAN of heirs |

---

## 7. Asset-Specific Administration
| Asset | Process | Timeline |
|-------|---------|----------|
| **Bank account** | Succession certificate/ nominee | 1-4 weeks |
| **Demat shares** | Transmission form + death cert | 2-3 weeks |
| **Mutual funds** | AMC form + probate | 2-4 weeks |
| **Property** | Mutation + probate | 6-12 months |

---

## 8. Executor Responsibilities
| Task | Timeline |
|------|----------|
| **Secure assets** | Day 1 |
| **Notify banks** | 7 days |
| **Pay debts** | 30 days |
| **Distribute assets** | After probate |
| **File tax returns** | Before 31 July next year |

---

## 9. Tax Returns for Deceased
| Form | Due Date |
|------|----------|
| **ITR till death** | 31 July |
| **Estate ITR** | 31 July next year |
| **Capital gains** | Indexation benefit available |

---

## 10. Common Bottlenecks & Solutions
| Bottleneck | Solution |
|------------|----------|
| **Missing will** | Legal heir certificate |
| **Foreign assets** | Probate in foreign court |
| **Multiple heirs** | Mediation before court |
| **Property in other state** | Separate probate for each |

---

## 11. Digital Assets & Crypto Administration
| Asset | Access | Legal Tool |
|-------|--------|------------|
| **Exchange wallet** | Death certificate + court order | Transmission form |
| **Hardware wallet** | Seed phrase in trust | Trust deed |
| **Domain name** | Registrar policy | ICANN transfer |

---

## 12. Mediation vs Litigation
| Method | Cost | Time | Relationship |
|--------|------|------|--------------|
| **Mediation** | ₹50k-₹2 L | 2-6 months | Preserved |
| **Litigation** | ₹5 L-₹50 L | 3-10 yrs | Destroyed |

---

## 13. Costs Snapshot
| Service | Fee Range |
|---------|-----------|
| **Lawyer probate** | ₹25k-₹5 L |
| **CA valuation** | ₹10k-₹50k |
| **Court fee** | 1-7 % estate |
| **Executor commission** | 2-5 % (if specified) |

---

## 14. DIY vs Professional Help
| Complexity | DIY | Lawyer |
|------------|-----|--------|
| **Single bank a/c** | ✅ | ❌ |
| **Multiple properties** | ❌ | ✅ |
| **Foreign assets** | ❌ | ✅ |
| **Disputed will** | ❌ | ✅ |

---

## 15. Key Takeaways
- **Probate is paperwork-heavy but manageable**.  
- **Executor is the project manager—choose wisely**.  
- **Digital assets need special attention**.  
- **Mediation > litigation for harmony**.

---

## 16. Ready to Settle Seamlessly?

🔗 [Book Probate Assistance](https://www.moznoadvisory.com/probate-call)  
📥 [Download Executor Checklist](https://www.moznoadvisory.com/executor-checklist)

*Mozno Advisory partners with empanelled lawyers, CAs, and valuers. Legal fees extra.*
`;function r6(){return s.jsxs(s.Fragment,{children:[s.jsxs(Ne,{children:[s.jsx("title",{children:"Probate & Estate Administration – Mozno Advisory"}),s.jsx("meta",{name:"description",content:"Complete guide for 22-45-year-old Indians to build wealth via mutual funds."})]}),s.jsx("main",{children:s.jsx("article",{className:"blog-page",children:s.jsx(we,{rehypePlugins:[Ae],remarkPlugins:[Ie],components:{h1:e=>s.jsx("h1",{className:"blog-page__heading blog-page__heading--h1",...e}),h2:e=>s.jsx("h2",{className:"blog-page__heading blog-page__heading--h2",...e}),h3:e=>s.jsx("h3",{className:"blog-page__heading blog-page__heading--h3",...e}),p:e=>s.jsx("p",{className:"blog-page__paragraph",...e}),blockquote:e=>s.jsx("blockquote",{className:"blog-page__blockquote",...e}),ul:e=>s.jsx("ul",{className:"blog-page__list",...e}),ol:e=>s.jsx("ol",{className:"blog-page__list",...e}),li:e=>s.jsx("li",{className:"blog-page__list-item",...e}),table:e=>s.jsx("table",{className:"blog-page__table",...e}),th:e=>s.jsx("th",{className:"blog-page__th",...e}),td:e=>s.jsx("td",{className:"blog-page__td",...e}),a:e=>s.jsx("a",{className:"blog-page__link",...e}),strong:e=>s.jsx("strong",{className:"blog-page__strong",...e}),code:e=>s.jsx("code",{className:"blog-page__code",...e}),hr:e=>s.jsx("hr",{className:"blog-page__hr",...e})},children:n6})})})]})}function a6(){return s.jsx(M2,{children:s.jsxs("div",{className:"min-h-screen bg-white",children:[s.jsx(tE,{}),s.jsx("main",{children:s.jsxs(R2,{children:[s.jsx(Z,{path:"/",element:s.jsx(OE,{})}),s.jsx(Z,{path:"/about",element:s.jsx(ME,{})}),s.jsx(Z,{path:"/services/wealth-management",element:s.jsx(jE,{})}),s.jsx(Z,{path:"/services/financial-planning",element:s.jsx(FE,{})}),s.jsx(Z,{path:"/services/tax-planning",element:s.jsx(BE,{})}),s.jsx(Z,{path:"/services/insurance-planning",element:s.jsx(HE,{})}),s.jsx(Z,{path:"/services/borrowing-solutions",element:s.jsx(UE,{})}),s.jsx(Z,{path:"/services/succession-planning",element:s.jsx(zE,{})}),s.jsx(Z,{path:"/blog/mutual-funds",element:s.jsx(dy,{})}),s.jsx(Z,{path:"/blog/sif",element:s.jsx(mI,{})}),s.jsx(Z,{path:"/blog/pms",element:s.jsx(yI,{})}),s.jsx(Z,{path:"/blog/aif",element:s.jsx(bI,{})}),s.jsx(Z,{path:"/blog/goal-based-planning",element:s.jsx(TI,{})}),s.jsx(Z,{path:"/blog/strategic-asset-allocation",element:s.jsx(_I,{})}),s.jsx(Z,{path:"/blog/retirement-planning",element:s.jsx(kI,{})}),s.jsx(Z,{path:"/blog/cash-flow-management",element:s.jsx(NI,{})}),s.jsx(Z,{path:"/blog/direct-tax-planning",element:s.jsx(AI,{})}),s.jsx(Z,{path:"/blog/indirect-tax-planning",element:s.jsx(PI,{})}),s.jsx(Z,{path:"/blog/tax-saving-investment-strategies",element:s.jsx(RI,{})}),s.jsx(Z,{path:"/blog/term-life-insurance",element:s.jsx(OI,{})}),s.jsx(Z,{path:"/blog/health-insurance",element:s.jsx(jI,{})}),s.jsx(Z,{path:"/blog/motor-general-insurance",element:s.jsx(BI,{})}),s.jsx(Z,{path:"/blog/insurance-portfolio-review",element:s.jsx(UI,{})}),s.jsx(Z,{path:"/blog/home-loans",element:s.jsx(qI,{})}),s.jsx(Z,{path:"/blog/business-loans",element:s.jsx(WI,{})}),s.jsx(Z,{path:"/blog/personal-loans",element:s.jsx(VI,{})}),s.jsx(Z,{path:"/blog/builder-finance",element:s.jsx(QI,{})}),s.jsx(Z,{path:"/blog/estate-planning-wealth-transfer",element:s.jsx(XI,{})}),s.jsx(Z,{path:"/blog/will-drafting-trust-services",element:s.jsx(ZI,{})}),s.jsx(Z,{path:"/blog/family-governance-legacy-planning",element:s.jsx(t6,{})}),s.jsx(Z,{path:"/blog/probate-estate-administration",element:s.jsx(r6,{})}),s.jsx(Z,{path:"/partners",element:s.jsx(qE,{})}),s.jsx(Z,{path:"/blog",element:s.jsx(iI,{})}),s.jsx(Z,{path:"/blog/:slug",element:s.jsx(sI,{})}),s.jsx(Z,{path:"/videos",element:s.jsx(oI,{})}),s.jsx(Z,{path:"/contact",element:s.jsx(cI,{})}),s.jsx(Z,{path:"/privacy-policy",element:s.jsx(dI,{})}),s.jsx(Z,{path:"/disclaimer",element:s.jsx(hI,{})}),s.jsx(Z,{path:"/terms-conditions",element:s.jsx(fI,{})})]})}),s.jsx(nE,{}),s.jsx(rE,{})]})})}z0(document.getElementById("root")).render(s.jsx(q.StrictMode,{children:s.jsx(a6,{})}));setTimeout(()=>{const e=document.getElementById("loader-3d");e&&e.classList.add("hide"),document.body.style.overflow="auto"},2800);
