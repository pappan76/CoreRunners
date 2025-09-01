function vC(n,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in n)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(n,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function AE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var PE={exports:{}},eh={},RE={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vu=Symbol.for("react.element"),wC=Symbol.for("react.portal"),IC=Symbol.for("react.fragment"),EC=Symbol.for("react.strict_mode"),TC=Symbol.for("react.profiler"),SC=Symbol.for("react.provider"),AC=Symbol.for("react.context"),PC=Symbol.for("react.forward_ref"),RC=Symbol.for("react.suspense"),CC=Symbol.for("react.memo"),bC=Symbol.for("react.lazy"),ov=Symbol.iterator;function kC(n){return n===null||typeof n!="object"?null:(n=ov&&n[ov]||n["@@iterator"],typeof n=="function"?n:null)}var CE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bE=Object.assign,kE={};function sa(n,e,t){this.props=n,this.context=e,this.refs=kE,this.updater=t||CE}sa.prototype.isReactComponent={};sa.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};sa.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function xE(){}xE.prototype=sa.prototype;function qm(n,e,t){this.props=n,this.context=e,this.refs=kE,this.updater=t||CE}var Wm=qm.prototype=new xE;Wm.constructor=qm;bE(Wm,sa.prototype);Wm.isPureReactComponent=!0;var av=Array.isArray,NE=Object.prototype.hasOwnProperty,Km={current:null},DE={key:!0,ref:!0,__self:!0,__source:!0};function VE(n,e,t){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)NE.call(e,r)&&!DE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(n&&n.defaultProps)for(r in a=n.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:vu,type:n,key:s,ref:o,props:i,_owner:Km.current}}function xC(n,e){return{$$typeof:vu,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Gm(n){return typeof n=="object"&&n!==null&&n.$$typeof===vu}function NC(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var lv=/\/+/g;function _f(n,e){return typeof n=="object"&&n!==null&&n.key!=null?NC(""+n.key):e.toString(36)}function Oc(n,e,t,r,i){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case vu:case wC:o=!0}}if(o)return o=n,i=i(o),n=r===""?"."+_f(o,0):r,av(i)?(t="",n!=null&&(t=n.replace(lv,"$&/")+"/"),Oc(i,e,t,"",function(c){return c})):i!=null&&(Gm(i)&&(i=xC(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(lv,"$&/")+"/")+n)),e.push(i)),1;if(o=0,r=r===""?".":r+":",av(n))for(var a=0;a<n.length;a++){s=n[a];var l=r+_f(s,a);o+=Oc(s,e,t,l,i)}else if(l=kC(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=r+_f(s,a++),o+=Oc(s,e,t,l,i);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function uc(n,e,t){if(n==null)return n;var r=[],i=0;return Oc(n,r,"","",function(s){return e.call(t,s,i++)}),r}function DC(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var qt={current:null},Lc={transition:null},VC={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:Lc,ReactCurrentOwner:Km};function OE(){throw Error("act(...) is not supported in production builds of React.")}le.Children={map:uc,forEach:function(n,e,t){uc(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return uc(n,function(){e++}),e},toArray:function(n){return uc(n,function(e){return e})||[]},only:function(n){if(!Gm(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};le.Component=sa;le.Fragment=IC;le.Profiler=TC;le.PureComponent=qm;le.StrictMode=EC;le.Suspense=RC;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=VC;le.act=OE;le.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var r=bE({},n.props),i=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Km.current),e.key!==void 0&&(i=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)NE.call(e,l)&&!DE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:vu,type:n.type,key:i,ref:s,props:r,_owner:o}};le.createContext=function(n){return n={$$typeof:AC,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:SC,_context:n},n.Consumer=n};le.createElement=VE;le.createFactory=function(n){var e=VE.bind(null,n);return e.type=n,e};le.createRef=function(){return{current:null}};le.forwardRef=function(n){return{$$typeof:PC,render:n}};le.isValidElement=Gm;le.lazy=function(n){return{$$typeof:bC,_payload:{_status:-1,_result:n},_init:DC}};le.memo=function(n,e){return{$$typeof:CC,type:n,compare:e===void 0?null:e}};le.startTransition=function(n){var e=Lc.transition;Lc.transition={};try{n()}finally{Lc.transition=e}};le.unstable_act=OE;le.useCallback=function(n,e){return qt.current.useCallback(n,e)};le.useContext=function(n){return qt.current.useContext(n)};le.useDebugValue=function(){};le.useDeferredValue=function(n){return qt.current.useDeferredValue(n)};le.useEffect=function(n,e){return qt.current.useEffect(n,e)};le.useId=function(){return qt.current.useId()};le.useImperativeHandle=function(n,e,t){return qt.current.useImperativeHandle(n,e,t)};le.useInsertionEffect=function(n,e){return qt.current.useInsertionEffect(n,e)};le.useLayoutEffect=function(n,e){return qt.current.useLayoutEffect(n,e)};le.useMemo=function(n,e){return qt.current.useMemo(n,e)};le.useReducer=function(n,e,t){return qt.current.useReducer(n,e,t)};le.useRef=function(n){return qt.current.useRef(n)};le.useState=function(n){return qt.current.useState(n)};le.useSyncExternalStore=function(n,e,t){return qt.current.useSyncExternalStore(n,e,t)};le.useTransition=function(){return qt.current.useTransition()};le.version="18.3.1";RE.exports=le;var B=RE.exports;const G=AE(B),OC=vC({__proto__:null,default:G},[B]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LC=B,MC=Symbol.for("react.element"),FC=Symbol.for("react.fragment"),UC=Object.prototype.hasOwnProperty,BC=LC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jC={key:!0,ref:!0,__self:!0,__source:!0};function LE(n,e,t){var r,i={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)UC.call(e,r)&&!jC.hasOwnProperty(r)&&(i[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:MC,type:n,key:s,ref:o,props:i,_owner:BC.current}}eh.Fragment=FC;eh.jsx=LE;eh.jsxs=LE;PE.exports=eh;var $=PE.exports,up={},ME={exports:{}},mn={},FE={exports:{}},UE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(Q,W){var ee=Q.length;Q.push(W);e:for(;0<ee;){var Ee=ee-1>>>1,te=Q[Ee];if(0<i(te,W))Q[Ee]=W,Q[ee]=te,ee=Ee;else break e}}function t(Q){return Q.length===0?null:Q[0]}function r(Q){if(Q.length===0)return null;var W=Q[0],ee=Q.pop();if(ee!==W){Q[0]=ee;e:for(var Ee=0,te=Q.length,re=te>>>1;Ee<re;){var he=2*(Ee+1)-1,xe=Q[he],Pt=he+1,me=Q[Pt];if(0>i(xe,ee))Pt<te&&0>i(me,xe)?(Q[Ee]=me,Q[Pt]=ee,Ee=Pt):(Q[Ee]=xe,Q[he]=ee,Ee=he);else if(Pt<te&&0>i(me,ee))Q[Ee]=me,Q[Pt]=ee,Ee=Pt;else break e}}return W}function i(Q,W){var ee=Q.sortIndex-W.sortIndex;return ee!==0?ee:Q.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,m=3,g=!1,S=!1,A=!1,C=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(Q){for(var W=t(c);W!==null;){if(W.callback===null)r(c);else if(W.startTime<=Q)r(c),W.sortIndex=W.expirationTime,e(l,W);else break;W=t(c)}}function N(Q){if(A=!1,E(Q),!S)if(t(l)!==null)S=!0,on(M);else{var W=t(c);W!==null&&ot(N,W.startTime-Q)}}function M(Q,W){S=!1,A&&(A=!1,I(y),y=-1),g=!0;var ee=m;try{for(E(W),f=t(l);f!==null&&(!(f.expirationTime>W)||Q&&!b());){var Ee=f.callback;if(typeof Ee=="function"){f.callback=null,m=f.priorityLevel;var te=Ee(f.expirationTime<=W);W=n.unstable_now(),typeof te=="function"?f.callback=te:f===t(l)&&r(l),E(W)}else r(l);f=t(l)}if(f!==null)var re=!0;else{var he=t(c);he!==null&&ot(N,he.startTime-W),re=!1}return re}finally{f=null,m=ee,g=!1}}var L=!1,v=null,y=-1,T=5,P=-1;function b(){return!(n.unstable_now()-P<T)}function k(){if(v!==null){var Q=n.unstable_now();P=Q;var W=!0;try{W=v(!0,Q)}finally{W?R():(L=!1,v=null)}}else L=!1}var R;if(typeof w=="function")R=function(){w(k)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,yn=st.port2;st.port1.onmessage=k,R=function(){yn.postMessage(null)}}else R=function(){C(k,0)};function on(Q){v=Q,L||(L=!0,R())}function ot(Q,W){y=C(function(){Q(n.unstable_now())},W)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Q){Q.callback=null},n.unstable_continueExecution=function(){S||g||(S=!0,on(M))},n.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<Q?Math.floor(1e3/Q):5},n.unstable_getCurrentPriorityLevel=function(){return m},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(Q){switch(m){case 1:case 2:case 3:var W=3;break;default:W=m}var ee=m;m=W;try{return Q()}finally{m=ee}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(Q,W){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var ee=m;m=Q;try{return W()}finally{m=ee}},n.unstable_scheduleCallback=function(Q,W,ee){var Ee=n.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?Ee+ee:Ee):ee=Ee,Q){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=ee+te,Q={id:d++,callback:W,priorityLevel:Q,startTime:ee,expirationTime:te,sortIndex:-1},ee>Ee?(Q.sortIndex=ee,e(c,Q),t(l)===null&&Q===t(c)&&(A?(I(y),y=-1):A=!0,ot(N,ee-Ee))):(Q.sortIndex=te,e(l,Q),S||g||(S=!0,on(M))),Q},n.unstable_shouldYield=b,n.unstable_wrapCallback=function(Q){var W=m;return function(){var ee=m;m=W;try{return Q.apply(this,arguments)}finally{m=ee}}}})(UE);FE.exports=UE;var zC=FE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $C=B,fn=zC;function j(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var BE=new Set,bl={};function Ns(n,e){Oo(n,e),Oo(n+"Capture",e)}function Oo(n,e){for(bl[n]=e,n=0;n<e.length;n++)BE.add(e[n])}var Tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cp=Object.prototype.hasOwnProperty,qC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uv={},cv={};function WC(n){return cp.call(cv,n)?!0:cp.call(uv,n)?!1:qC.test(n)?cv[n]=!0:(uv[n]=!0,!1)}function KC(n,e,t,r){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function GC(n,e,t,r){if(e===null||typeof e>"u"||KC(n,e,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Wt(n,e,t,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var St={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){St[n]=new Wt(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];St[e]=new Wt(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){St[n]=new Wt(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){St[n]=new Wt(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){St[n]=new Wt(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){St[n]=new Wt(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){St[n]=new Wt(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){St[n]=new Wt(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){St[n]=new Wt(n,5,!1,n.toLowerCase(),null,!1,!1)});var Hm=/[\-:]([a-z])/g;function Qm(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Hm,Qm);St[e]=new Wt(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Hm,Qm);St[e]=new Wt(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Hm,Qm);St[e]=new Wt(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){St[n]=new Wt(n,1,!1,n.toLowerCase(),null,!1,!1)});St.xlinkHref=new Wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){St[n]=new Wt(n,1,!1,n.toLowerCase(),null,!0,!0)});function Ym(n,e,t,r){var i=St.hasOwnProperty(e)?St[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(GC(e,t,i,r)&&(t=null),r||i===null?WC(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):i.mustUseProperty?n[i.propertyName]=t===null?i.type===3?!1:"":t:(e=i.attributeName,r=i.attributeNamespace,t===null?n.removeAttribute(e):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?n.setAttributeNS(r,e,t):n.setAttribute(e,t))))}var xr=$C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cc=Symbol.for("react.element"),uo=Symbol.for("react.portal"),co=Symbol.for("react.fragment"),Jm=Symbol.for("react.strict_mode"),dp=Symbol.for("react.profiler"),jE=Symbol.for("react.provider"),zE=Symbol.for("react.context"),Xm=Symbol.for("react.forward_ref"),hp=Symbol.for("react.suspense"),fp=Symbol.for("react.suspense_list"),Zm=Symbol.for("react.memo"),Hr=Symbol.for("react.lazy"),$E=Symbol.for("react.offscreen"),dv=Symbol.iterator;function Fa(n){return n===null||typeof n!="object"?null:(n=dv&&n[dv]||n["@@iterator"],typeof n=="function"?n:null)}var je=Object.assign,vf;function el(n){if(vf===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);vf=e&&e[1]||""}return`
`+vf+n}var wf=!1;function If(n,e){if(!n||wf)return"";wf=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){r=c}n.call(e.prototype)}else{try{throw Error()}catch(c){r=c}n()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{wf=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?el(n):""}function HC(n){switch(n.tag){case 5:return el(n.type);case 16:return el("Lazy");case 13:return el("Suspense");case 19:return el("SuspenseList");case 0:case 2:case 15:return n=If(n.type,!1),n;case 11:return n=If(n.type.render,!1),n;case 1:return n=If(n.type,!0),n;default:return""}}function pp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case co:return"Fragment";case uo:return"Portal";case dp:return"Profiler";case Jm:return"StrictMode";case hp:return"Suspense";case fp:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case zE:return(n.displayName||"Context")+".Consumer";case jE:return(n._context.displayName||"Context")+".Provider";case Xm:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Zm:return e=n.displayName||null,e!==null?e:pp(n.type)||"Memo";case Hr:e=n._payload,n=n._init;try{return pp(n(e))}catch{}}return null}function QC(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pp(e);case 8:return e===Jm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yi(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function qE(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function YC(n){var e=qE(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),r=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function dc(n){n._valueTracker||(n._valueTracker=YC(n))}function WE(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),r="";return n&&(r=qE(n)?n.checked?"true":"false":n.value),n=r,n!==t?(e.setValue(n),!0):!1}function sd(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function mp(n,e){var t=e.checked;return je({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function hv(n,e){var t=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;t=yi(e.value!=null?e.value:t),n._wrapperState={initialChecked:r,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function KE(n,e){e=e.checked,e!=null&&Ym(n,"checked",e,!1)}function gp(n,e){KE(n,e);var t=yi(e.value),r=e.type;if(t!=null)r==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(r==="submit"||r==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?yp(n,e.type,t):e.hasOwnProperty("defaultValue")&&yp(n,e.type,yi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function fv(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function yp(n,e,t){(e!=="number"||sd(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var tl=Array.isArray;function To(n,e,t,r){if(n=n.options,e){e={};for(var i=0;i<t.length;i++)e["$"+t[i]]=!0;for(t=0;t<n.length;t++)i=e.hasOwnProperty("$"+n[t].value),n[t].selected!==i&&(n[t].selected=i),i&&r&&(n[t].defaultSelected=!0)}else{for(t=""+yi(t),e=null,i=0;i<n.length;i++){if(n[i].value===t){n[i].selected=!0,r&&(n[i].defaultSelected=!0);return}e!==null||n[i].disabled||(e=n[i])}e!==null&&(e.selected=!0)}}function _p(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return je({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function pv(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(j(92));if(tl(t)){if(1<t.length)throw Error(j(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:yi(t)}}function GE(n,e){var t=yi(e.value),r=yi(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),r!=null&&(n.defaultValue=""+r)}function mv(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function HE(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?HE(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var hc,QE=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,r,i){MSApp.execUnsafeLocalFunction(function(){return n(e,t,r,i)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(hc=hc||document.createElement("div"),hc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=hc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function kl(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var dl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},JC=["Webkit","ms","Moz","O"];Object.keys(dl).forEach(function(n){JC.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),dl[e]=dl[n]})});function YE(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||dl.hasOwnProperty(n)&&dl[n]?(""+e).trim():e+"px"}function JE(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=YE(t,e[t],r);t==="float"&&(t="cssFloat"),r?n.setProperty(t,i):n[t]=i}}var XC=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wp(n,e){if(e){if(XC[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function Ip(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ep=null;function eg(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Tp=null,So=null,Ao=null;function gv(n){if(n=Eu(n)){if(typeof Tp!="function")throw Error(j(280));var e=n.stateNode;e&&(e=sh(e),Tp(n.stateNode,n.type,e))}}function XE(n){So?Ao?Ao.push(n):Ao=[n]:So=n}function ZE(){if(So){var n=So,e=Ao;if(Ao=So=null,gv(n),e)for(n=0;n<e.length;n++)gv(e[n])}}function e0(n,e){return n(e)}function t0(){}var Ef=!1;function n0(n,e,t){if(Ef)return n(e,t);Ef=!0;try{return e0(n,e,t)}finally{Ef=!1,(So!==null||Ao!==null)&&(t0(),ZE())}}function xl(n,e){var t=n.stateNode;if(t===null)return null;var r=sh(t);if(r===null)return null;t=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(n=n.type,r=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!r;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(j(231,e,typeof t));return t}var Sp=!1;if(Tr)try{var Ua={};Object.defineProperty(Ua,"passive",{get:function(){Sp=!0}}),window.addEventListener("test",Ua,Ua),window.removeEventListener("test",Ua,Ua)}catch{Sp=!1}function ZC(n,e,t,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(d){this.onError(d)}}var hl=!1,od=null,ad=!1,Ap=null,eb={onError:function(n){hl=!0,od=n}};function tb(n,e,t,r,i,s,o,a,l){hl=!1,od=null,ZC.apply(eb,arguments)}function nb(n,e,t,r,i,s,o,a,l){if(tb.apply(this,arguments),hl){if(hl){var c=od;hl=!1,od=null}else throw Error(j(198));ad||(ad=!0,Ap=c)}}function Ds(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function r0(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function yv(n){if(Ds(n)!==n)throw Error(j(188))}function rb(n){var e=n.alternate;if(!e){if(e=Ds(n),e===null)throw Error(j(188));return e!==n?null:n}for(var t=n,r=e;;){var i=t.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===t)return yv(i),n;if(s===r)return yv(i),e;s=s.sibling}throw Error(j(188))}if(t.return!==r.return)t=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===t){o=!0,t=i,r=s;break}if(a===r){o=!0,r=i,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,r=i;break}if(a===r){o=!0,r=s,t=i;break}a=a.sibling}if(!o)throw Error(j(189))}}if(t.alternate!==r)throw Error(j(190))}if(t.tag!==3)throw Error(j(188));return t.stateNode.current===t?n:e}function i0(n){return n=rb(n),n!==null?s0(n):null}function s0(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=s0(n);if(e!==null)return e;n=n.sibling}return null}var o0=fn.unstable_scheduleCallback,_v=fn.unstable_cancelCallback,ib=fn.unstable_shouldYield,sb=fn.unstable_requestPaint,Je=fn.unstable_now,ob=fn.unstable_getCurrentPriorityLevel,tg=fn.unstable_ImmediatePriority,a0=fn.unstable_UserBlockingPriority,ld=fn.unstable_NormalPriority,ab=fn.unstable_LowPriority,l0=fn.unstable_IdlePriority,th=null,Zn=null;function lb(n){if(Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot(th,n,void 0,(n.current.flags&128)===128)}catch{}}var Ln=Math.clz32?Math.clz32:db,ub=Math.log,cb=Math.LN2;function db(n){return n>>>=0,n===0?32:31-(ub(n)/cb|0)|0}var fc=64,pc=4194304;function nl(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ud(n,e){var t=n.pendingLanes;if(t===0)return 0;var r=0,i=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~i;a!==0?r=nl(a):(s&=o,s!==0&&(r=nl(s)))}else o=t&~i,o!==0?r=nl(o):s!==0&&(r=nl(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=r;0<e;)t=31-Ln(e),i=1<<t,r|=n[t],e&=~i;return r}function hb(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fb(n,e){for(var t=n.suspendedLanes,r=n.pingedLanes,i=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Ln(s),a=1<<o,l=i[o];l===-1?(!(a&t)||a&r)&&(i[o]=hb(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Pp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function u0(){var n=fc;return fc<<=1,!(fc&4194240)&&(fc=64),n}function Tf(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function wu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Ln(e),n[e]=t}function pb(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var r=n.eventTimes;for(n=n.expirationTimes;0<t;){var i=31-Ln(t),s=1<<i;e[i]=0,r[i]=-1,n[i]=-1,t&=~s}}function ng(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var r=31-Ln(t),i=1<<r;i&e|n[r]&e&&(n[r]|=e),t&=~i}}var we=0;function c0(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var d0,rg,h0,f0,p0,Rp=!1,mc=[],oi=null,ai=null,li=null,Nl=new Map,Dl=new Map,Jr=[],mb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vv(n,e){switch(n){case"focusin":case"focusout":oi=null;break;case"dragenter":case"dragleave":ai=null;break;case"mouseover":case"mouseout":li=null;break;case"pointerover":case"pointerout":Nl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dl.delete(e.pointerId)}}function Ba(n,e,t,r,i,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Eu(e),e!==null&&rg(e)),n):(n.eventSystemFlags|=r,e=n.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),n)}function gb(n,e,t,r,i){switch(e){case"focusin":return oi=Ba(oi,n,e,t,r,i),!0;case"dragenter":return ai=Ba(ai,n,e,t,r,i),!0;case"mouseover":return li=Ba(li,n,e,t,r,i),!0;case"pointerover":var s=i.pointerId;return Nl.set(s,Ba(Nl.get(s)||null,n,e,t,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Dl.set(s,Ba(Dl.get(s)||null,n,e,t,r,i)),!0}return!1}function m0(n){var e=rs(n.target);if(e!==null){var t=Ds(e);if(t!==null){if(e=t.tag,e===13){if(e=r0(t),e!==null){n.blockedOn=e,p0(n.priority,function(){h0(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Mc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Cp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var r=new t.constructor(t.type,t);Ep=r,t.target.dispatchEvent(r),Ep=null}else return e=Eu(t),e!==null&&rg(e),n.blockedOn=t,!1;e.shift()}return!0}function wv(n,e,t){Mc(n)&&t.delete(e)}function yb(){Rp=!1,oi!==null&&Mc(oi)&&(oi=null),ai!==null&&Mc(ai)&&(ai=null),li!==null&&Mc(li)&&(li=null),Nl.forEach(wv),Dl.forEach(wv)}function ja(n,e){n.blockedOn===e&&(n.blockedOn=null,Rp||(Rp=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,yb)))}function Vl(n){function e(i){return ja(i,n)}if(0<mc.length){ja(mc[0],n);for(var t=1;t<mc.length;t++){var r=mc[t];r.blockedOn===n&&(r.blockedOn=null)}}for(oi!==null&&ja(oi,n),ai!==null&&ja(ai,n),li!==null&&ja(li,n),Nl.forEach(e),Dl.forEach(e),t=0;t<Jr.length;t++)r=Jr[t],r.blockedOn===n&&(r.blockedOn=null);for(;0<Jr.length&&(t=Jr[0],t.blockedOn===null);)m0(t),t.blockedOn===null&&Jr.shift()}var Po=xr.ReactCurrentBatchConfig,cd=!0;function _b(n,e,t,r){var i=we,s=Po.transition;Po.transition=null;try{we=1,ig(n,e,t,r)}finally{we=i,Po.transition=s}}function vb(n,e,t,r){var i=we,s=Po.transition;Po.transition=null;try{we=4,ig(n,e,t,r)}finally{we=i,Po.transition=s}}function ig(n,e,t,r){if(cd){var i=Cp(n,e,t,r);if(i===null)Df(n,e,r,dd,t),vv(n,r);else if(gb(i,n,e,t,r))r.stopPropagation();else if(vv(n,r),e&4&&-1<mb.indexOf(n)){for(;i!==null;){var s=Eu(i);if(s!==null&&d0(s),s=Cp(n,e,t,r),s===null&&Df(n,e,r,dd,t),s===i)break;i=s}i!==null&&r.stopPropagation()}else Df(n,e,r,null,t)}}var dd=null;function Cp(n,e,t,r){if(dd=null,n=eg(r),n=rs(n),n!==null)if(e=Ds(n),e===null)n=null;else if(t=e.tag,t===13){if(n=r0(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return dd=n,null}function g0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ob()){case tg:return 1;case a0:return 4;case ld:case ab:return 16;case l0:return 536870912;default:return 16}default:return 16}}var ti=null,sg=null,Fc=null;function y0(){if(Fc)return Fc;var n,e=sg,t=e.length,r,i="value"in ti?ti.value:ti.textContent,s=i.length;for(n=0;n<t&&e[n]===i[n];n++);var o=t-n;for(r=1;r<=o&&e[t-r]===i[s-r];r++);return Fc=i.slice(n,1<r?1-r:void 0)}function Uc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function gc(){return!0}function Iv(){return!1}function gn(n){function e(t,r,i,s,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?gc:Iv,this.isPropagationStopped=Iv,this}return je(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=gc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=gc)},persist:function(){},isPersistent:gc}),e}var oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},og=gn(oa),Iu=je({},oa,{view:0,detail:0}),wb=gn(Iu),Sf,Af,za,nh=je({},Iu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ag,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==za&&(za&&n.type==="mousemove"?(Sf=n.screenX-za.screenX,Af=n.screenY-za.screenY):Af=Sf=0,za=n),Sf)},movementY:function(n){return"movementY"in n?n.movementY:Af}}),Ev=gn(nh),Ib=je({},nh,{dataTransfer:0}),Eb=gn(Ib),Tb=je({},Iu,{relatedTarget:0}),Pf=gn(Tb),Sb=je({},oa,{animationName:0,elapsedTime:0,pseudoElement:0}),Ab=gn(Sb),Pb=je({},oa,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Rb=gn(Pb),Cb=je({},oa,{data:0}),Tv=gn(Cb),bb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nb(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=xb[n])?!!e[n]:!1}function ag(){return Nb}var Db=je({},Iu,{key:function(n){if(n.key){var e=bb[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Uc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?kb[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ag,charCode:function(n){return n.type==="keypress"?Uc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Uc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Vb=gn(Db),Ob=je({},nh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sv=gn(Ob),Lb=je({},Iu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ag}),Mb=gn(Lb),Fb=je({},oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ub=gn(Fb),Bb=je({},nh,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),jb=gn(Bb),zb=[9,13,27,32],lg=Tr&&"CompositionEvent"in window,fl=null;Tr&&"documentMode"in document&&(fl=document.documentMode);var $b=Tr&&"TextEvent"in window&&!fl,_0=Tr&&(!lg||fl&&8<fl&&11>=fl),Av=" ",Pv=!1;function v0(n,e){switch(n){case"keyup":return zb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function w0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ho=!1;function qb(n,e){switch(n){case"compositionend":return w0(e);case"keypress":return e.which!==32?null:(Pv=!0,Av);case"textInput":return n=e.data,n===Av&&Pv?null:n;default:return null}}function Wb(n,e){if(ho)return n==="compositionend"||!lg&&v0(n,e)?(n=y0(),Fc=sg=ti=null,ho=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _0&&e.locale!=="ko"?null:e.data;default:return null}}var Kb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rv(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Kb[n.type]:e==="textarea"}function I0(n,e,t,r){XE(r),e=hd(e,"onChange"),0<e.length&&(t=new og("onChange","change",null,t,r),n.push({event:t,listeners:e}))}var pl=null,Ol=null;function Gb(n){N0(n,0)}function rh(n){var e=mo(n);if(WE(e))return n}function Hb(n,e){if(n==="change")return e}var E0=!1;if(Tr){var Rf;if(Tr){var Cf="oninput"in document;if(!Cf){var Cv=document.createElement("div");Cv.setAttribute("oninput","return;"),Cf=typeof Cv.oninput=="function"}Rf=Cf}else Rf=!1;E0=Rf&&(!document.documentMode||9<document.documentMode)}function bv(){pl&&(pl.detachEvent("onpropertychange",T0),Ol=pl=null)}function T0(n){if(n.propertyName==="value"&&rh(Ol)){var e=[];I0(e,Ol,n,eg(n)),n0(Gb,e)}}function Qb(n,e,t){n==="focusin"?(bv(),pl=e,Ol=t,pl.attachEvent("onpropertychange",T0)):n==="focusout"&&bv()}function Yb(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return rh(Ol)}function Jb(n,e){if(n==="click")return rh(e)}function Xb(n,e){if(n==="input"||n==="change")return rh(e)}function Zb(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Un=typeof Object.is=="function"?Object.is:Zb;function Ll(n,e){if(Un(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),r=Object.keys(e);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!cp.call(e,i)||!Un(n[i],e[i]))return!1}return!0}function kv(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function xv(n,e){var t=kv(n);n=0;for(var r;t;){if(t.nodeType===3){if(r=n+t.textContent.length,n<=e&&r>=e)return{node:t,offset:e-n};n=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=kv(t)}}function S0(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?S0(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function A0(){for(var n=window,e=sd();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=sd(n.document)}return e}function ug(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function ek(n){var e=A0(),t=n.focusedElem,r=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&S0(t.ownerDocument.documentElement,t)){if(r!==null&&ug(t)){if(e=r.start,n=r.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var i=t.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!n.extend&&s>r&&(i=r,r=s,s=i),i=xv(t,s);var o=xv(t,r);i&&o&&(n.rangeCount!==1||n.anchorNode!==i.node||n.anchorOffset!==i.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),n.removeAllRanges(),s>r?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var tk=Tr&&"documentMode"in document&&11>=document.documentMode,fo=null,bp=null,ml=null,kp=!1;function Nv(n,e,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;kp||fo==null||fo!==sd(r)||(r=fo,"selectionStart"in r&&ug(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ml&&Ll(ml,r)||(ml=r,r=hd(bp,"onSelect"),0<r.length&&(e=new og("onSelect","select",null,e,t),n.push({event:e,listeners:r}),e.target=fo)))}function yc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var po={animationend:yc("Animation","AnimationEnd"),animationiteration:yc("Animation","AnimationIteration"),animationstart:yc("Animation","AnimationStart"),transitionend:yc("Transition","TransitionEnd")},bf={},P0={};Tr&&(P0=document.createElement("div").style,"AnimationEvent"in window||(delete po.animationend.animation,delete po.animationiteration.animation,delete po.animationstart.animation),"TransitionEvent"in window||delete po.transitionend.transition);function ih(n){if(bf[n])return bf[n];if(!po[n])return n;var e=po[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in P0)return bf[n]=e[t];return n}var R0=ih("animationend"),C0=ih("animationiteration"),b0=ih("animationstart"),k0=ih("transitionend"),x0=new Map,Dv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ki(n,e){x0.set(n,e),Ns(e,[n])}for(var kf=0;kf<Dv.length;kf++){var xf=Dv[kf],nk=xf.toLowerCase(),rk=xf[0].toUpperCase()+xf.slice(1);ki(nk,"on"+rk)}ki(R0,"onAnimationEnd");ki(C0,"onAnimationIteration");ki(b0,"onAnimationStart");ki("dblclick","onDoubleClick");ki("focusin","onFocus");ki("focusout","onBlur");ki(k0,"onTransitionEnd");Oo("onMouseEnter",["mouseout","mouseover"]);Oo("onMouseLeave",["mouseout","mouseover"]);Oo("onPointerEnter",["pointerout","pointerover"]);Oo("onPointerLeave",["pointerout","pointerover"]);Ns("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ns("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ns("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ns("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ns("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ns("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ik=new Set("cancel close invalid load scroll toggle".split(" ").concat(rl));function Vv(n,e,t){var r=n.type||"unknown-event";n.currentTarget=t,nb(r,e,void 0,n),n.currentTarget=null}function N0(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var r=n[t],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Vv(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Vv(i,a,c),s=l}}}if(ad)throw n=Ap,ad=!1,Ap=null,n}function Ce(n,e){var t=e[Op];t===void 0&&(t=e[Op]=new Set);var r=n+"__bubble";t.has(r)||(D0(e,n,2,!1),t.add(r))}function Nf(n,e,t){var r=0;e&&(r|=4),D0(t,n,r,e)}var _c="_reactListening"+Math.random().toString(36).slice(2);function Ml(n){if(!n[_c]){n[_c]=!0,BE.forEach(function(t){t!=="selectionchange"&&(ik.has(t)||Nf(t,!1,n),Nf(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[_c]||(e[_c]=!0,Nf("selectionchange",!1,e))}}function D0(n,e,t,r){switch(g0(e)){case 1:var i=_b;break;case 4:i=vb;break;default:i=ig}t=i.bind(null,e,t,n),i=void 0,!Sp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?n.addEventListener(e,t,{capture:!0,passive:i}):n.addEventListener(e,t,!0):i!==void 0?n.addEventListener(e,t,{passive:i}):n.addEventListener(e,t,!1)}function Df(n,e,t,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=rs(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}n0(function(){var c=s,d=eg(t),f=[];e:{var m=x0.get(n);if(m!==void 0){var g=og,S=n;switch(n){case"keypress":if(Uc(t)===0)break e;case"keydown":case"keyup":g=Vb;break;case"focusin":S="focus",g=Pf;break;case"focusout":S="blur",g=Pf;break;case"beforeblur":case"afterblur":g=Pf;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ev;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Eb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Mb;break;case R0:case C0:case b0:g=Ab;break;case k0:g=Ub;break;case"scroll":g=wb;break;case"wheel":g=jb;break;case"copy":case"cut":case"paste":g=Rb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Sv}var A=(e&4)!==0,C=!A&&n==="scroll",I=A?m!==null?m+"Capture":null:m;A=[];for(var w=c,E;w!==null;){E=w;var N=E.stateNode;if(E.tag===5&&N!==null&&(E=N,I!==null&&(N=xl(w,I),N!=null&&A.push(Fl(w,N,E)))),C)break;w=w.return}0<A.length&&(m=new g(m,S,null,t,d),f.push({event:m,listeners:A}))}}if(!(e&7)){e:{if(m=n==="mouseover"||n==="pointerover",g=n==="mouseout"||n==="pointerout",m&&t!==Ep&&(S=t.relatedTarget||t.fromElement)&&(rs(S)||S[Sr]))break e;if((g||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,g?(S=t.relatedTarget||t.toElement,g=c,S=S?rs(S):null,S!==null&&(C=Ds(S),S!==C||S.tag!==5&&S.tag!==6)&&(S=null)):(g=null,S=c),g!==S)){if(A=Ev,N="onMouseLeave",I="onMouseEnter",w="mouse",(n==="pointerout"||n==="pointerover")&&(A=Sv,N="onPointerLeave",I="onPointerEnter",w="pointer"),C=g==null?m:mo(g),E=S==null?m:mo(S),m=new A(N,w+"leave",g,t,d),m.target=C,m.relatedTarget=E,N=null,rs(d)===c&&(A=new A(I,w+"enter",S,t,d),A.target=E,A.relatedTarget=C,N=A),C=N,g&&S)t:{for(A=g,I=S,w=0,E=A;E;E=Xs(E))w++;for(E=0,N=I;N;N=Xs(N))E++;for(;0<w-E;)A=Xs(A),w--;for(;0<E-w;)I=Xs(I),E--;for(;w--;){if(A===I||I!==null&&A===I.alternate)break t;A=Xs(A),I=Xs(I)}A=null}else A=null;g!==null&&Ov(f,m,g,A,!1),S!==null&&C!==null&&Ov(f,C,S,A,!0)}}e:{if(m=c?mo(c):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var M=Hb;else if(Rv(m))if(E0)M=Xb;else{M=Yb;var L=Qb}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=Jb);if(M&&(M=M(n,c))){I0(f,M,t,d);break e}L&&L(n,m,c),n==="focusout"&&(L=m._wrapperState)&&L.controlled&&m.type==="number"&&yp(m,"number",m.value)}switch(L=c?mo(c):window,n){case"focusin":(Rv(L)||L.contentEditable==="true")&&(fo=L,bp=c,ml=null);break;case"focusout":ml=bp=fo=null;break;case"mousedown":kp=!0;break;case"contextmenu":case"mouseup":case"dragend":kp=!1,Nv(f,t,d);break;case"selectionchange":if(tk)break;case"keydown":case"keyup":Nv(f,t,d)}var v;if(lg)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ho?v0(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(_0&&t.locale!=="ko"&&(ho||y!=="onCompositionStart"?y==="onCompositionEnd"&&ho&&(v=y0()):(ti=d,sg="value"in ti?ti.value:ti.textContent,ho=!0)),L=hd(c,y),0<L.length&&(y=new Tv(y,n,null,t,d),f.push({event:y,listeners:L}),v?y.data=v:(v=w0(t),v!==null&&(y.data=v)))),(v=$b?qb(n,t):Wb(n,t))&&(c=hd(c,"onBeforeInput"),0<c.length&&(d=new Tv("onBeforeInput","beforeinput",null,t,d),f.push({event:d,listeners:c}),d.data=v))}N0(f,e)})}function Fl(n,e,t){return{instance:n,listener:e,currentTarget:t}}function hd(n,e){for(var t=e+"Capture",r=[];n!==null;){var i=n,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=xl(n,t),s!=null&&r.unshift(Fl(n,s,i)),s=xl(n,e),s!=null&&r.push(Fl(n,s,i))),n=n.return}return r}function Xs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ov(n,e,t,r,i){for(var s=e._reactName,o=[];t!==null&&t!==r;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=xl(t,s),l!=null&&o.unshift(Fl(t,l,a))):i||(l=xl(t,s),l!=null&&o.push(Fl(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var sk=/\r\n?/g,ok=/\u0000|\uFFFD/g;function Lv(n){return(typeof n=="string"?n:""+n).replace(sk,`
`).replace(ok,"")}function vc(n,e,t){if(e=Lv(e),Lv(n)!==e&&t)throw Error(j(425))}function fd(){}var xp=null,Np=null;function Dp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vp=typeof setTimeout=="function"?setTimeout:void 0,ak=typeof clearTimeout=="function"?clearTimeout:void 0,Mv=typeof Promise=="function"?Promise:void 0,lk=typeof queueMicrotask=="function"?queueMicrotask:typeof Mv<"u"?function(n){return Mv.resolve(null).then(n).catch(uk)}:Vp;function uk(n){setTimeout(function(){throw n})}function Vf(n,e){var t=e,r=0;do{var i=t.nextSibling;if(n.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){n.removeChild(i),Vl(e);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Vl(e)}function ui(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Fv(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var aa=Math.random().toString(36).slice(2),Wn="__reactFiber$"+aa,Ul="__reactProps$"+aa,Sr="__reactContainer$"+aa,Op="__reactEvents$"+aa,ck="__reactListeners$"+aa,dk="__reactHandles$"+aa;function rs(n){var e=n[Wn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Sr]||t[Wn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Fv(n);n!==null;){if(t=n[Wn])return t;n=Fv(n)}return e}n=t,t=n.parentNode}return null}function Eu(n){return n=n[Wn]||n[Sr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function mo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(j(33))}function sh(n){return n[Ul]||null}var Lp=[],go=-1;function xi(n){return{current:n}}function ke(n){0>go||(n.current=Lp[go],Lp[go]=null,go--)}function Ae(n,e){go++,Lp[go]=n.current,n.current=e}var _i={},Dt=xi(_i),nn=xi(!1),ms=_i;function Lo(n,e){var t=n.type.contextTypes;if(!t)return _i;var r=n.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in t)i[s]=e[s];return r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=i),i}function rn(n){return n=n.childContextTypes,n!=null}function pd(){ke(nn),ke(Dt)}function Uv(n,e,t){if(Dt.current!==_i)throw Error(j(168));Ae(Dt,e),Ae(nn,t)}function V0(n,e,t){var r=n.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,QC(n)||"Unknown",i));return je({},t,r)}function md(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||_i,ms=Dt.current,Ae(Dt,n),Ae(nn,nn.current),!0}function Bv(n,e,t){var r=n.stateNode;if(!r)throw Error(j(169));t?(n=V0(n,e,ms),r.__reactInternalMemoizedMergedChildContext=n,ke(nn),ke(Dt),Ae(Dt,n)):ke(nn),Ae(nn,t)}var mr=null,oh=!1,Of=!1;function O0(n){mr===null?mr=[n]:mr.push(n)}function hk(n){oh=!0,O0(n)}function Ni(){if(!Of&&mr!==null){Of=!0;var n=0,e=we;try{var t=mr;for(we=1;n<t.length;n++){var r=t[n];do r=r(!0);while(r!==null)}mr=null,oh=!1}catch(i){throw mr!==null&&(mr=mr.slice(n+1)),o0(tg,Ni),i}finally{we=e,Of=!1}}return null}var yo=[],_o=0,gd=null,yd=0,vn=[],wn=0,gs=null,gr=1,yr="";function Hi(n,e){yo[_o++]=yd,yo[_o++]=gd,gd=n,yd=e}function L0(n,e,t){vn[wn++]=gr,vn[wn++]=yr,vn[wn++]=gs,gs=n;var r=gr;n=yr;var i=32-Ln(r)-1;r&=~(1<<i),t+=1;var s=32-Ln(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,gr=1<<32-Ln(e)+i|t<<i|r,yr=s+n}else gr=1<<s|t<<i|r,yr=n}function cg(n){n.return!==null&&(Hi(n,1),L0(n,1,0))}function dg(n){for(;n===gd;)gd=yo[--_o],yo[_o]=null,yd=yo[--_o],yo[_o]=null;for(;n===gs;)gs=vn[--wn],vn[wn]=null,yr=vn[--wn],vn[wn]=null,gr=vn[--wn],vn[wn]=null}var hn=null,cn=null,Ve=!1,On=null;function M0(n,e){var t=In(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function jv(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,hn=n,cn=ui(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,hn=n,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=gs!==null?{id:gr,overflow:yr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=In(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,hn=n,cn=null,!0):!1;default:return!1}}function Mp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Fp(n){if(Ve){var e=cn;if(e){var t=e;if(!jv(n,e)){if(Mp(n))throw Error(j(418));e=ui(t.nextSibling);var r=hn;e&&jv(n,e)?M0(r,t):(n.flags=n.flags&-4097|2,Ve=!1,hn=n)}}else{if(Mp(n))throw Error(j(418));n.flags=n.flags&-4097|2,Ve=!1,hn=n}}}function zv(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;hn=n}function wc(n){if(n!==hn)return!1;if(!Ve)return zv(n),Ve=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Dp(n.type,n.memoizedProps)),e&&(e=cn)){if(Mp(n))throw F0(),Error(j(418));for(;e;)M0(n,e),e=ui(e.nextSibling)}if(zv(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(j(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){cn=ui(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}cn=null}}else cn=hn?ui(n.stateNode.nextSibling):null;return!0}function F0(){for(var n=cn;n;)n=ui(n.nextSibling)}function Mo(){cn=hn=null,Ve=!1}function hg(n){On===null?On=[n]:On.push(n)}var fk=xr.ReactCurrentBatchConfig;function $a(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(j(309));var r=t.stateNode}if(!r)throw Error(j(147,n));var i=r,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(j(284));if(!t._owner)throw Error(j(290,n))}return n}function Ic(n,e){throw n=Object.prototype.toString.call(e),Error(j(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function $v(n){var e=n._init;return e(n._payload)}function U0(n){function e(I,w){if(n){var E=I.deletions;E===null?(I.deletions=[w],I.flags|=16):E.push(w)}}function t(I,w){if(!n)return null;for(;w!==null;)e(I,w),w=w.sibling;return null}function r(I,w){for(I=new Map;w!==null;)w.key!==null?I.set(w.key,w):I.set(w.index,w),w=w.sibling;return I}function i(I,w){return I=fi(I,w),I.index=0,I.sibling=null,I}function s(I,w,E){return I.index=E,n?(E=I.alternate,E!==null?(E=E.index,E<w?(I.flags|=2,w):E):(I.flags|=2,w)):(I.flags|=1048576,w)}function o(I){return n&&I.alternate===null&&(I.flags|=2),I}function a(I,w,E,N){return w===null||w.tag!==6?(w=zf(E,I.mode,N),w.return=I,w):(w=i(w,E),w.return=I,w)}function l(I,w,E,N){var M=E.type;return M===co?d(I,w,E.props.children,N,E.key):w!==null&&(w.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Hr&&$v(M)===w.type)?(N=i(w,E.props),N.ref=$a(I,w,E),N.return=I,N):(N=Kc(E.type,E.key,E.props,null,I.mode,N),N.ref=$a(I,w,E),N.return=I,N)}function c(I,w,E,N){return w===null||w.tag!==4||w.stateNode.containerInfo!==E.containerInfo||w.stateNode.implementation!==E.implementation?(w=$f(E,I.mode,N),w.return=I,w):(w=i(w,E.children||[]),w.return=I,w)}function d(I,w,E,N,M){return w===null||w.tag!==7?(w=ds(E,I.mode,N,M),w.return=I,w):(w=i(w,E),w.return=I,w)}function f(I,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return w=zf(""+w,I.mode,E),w.return=I,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case cc:return E=Kc(w.type,w.key,w.props,null,I.mode,E),E.ref=$a(I,null,w),E.return=I,E;case uo:return w=$f(w,I.mode,E),w.return=I,w;case Hr:var N=w._init;return f(I,N(w._payload),E)}if(tl(w)||Fa(w))return w=ds(w,I.mode,E,null),w.return=I,w;Ic(I,w)}return null}function m(I,w,E,N){var M=w!==null?w.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return M!==null?null:a(I,w,""+E,N);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case cc:return E.key===M?l(I,w,E,N):null;case uo:return E.key===M?c(I,w,E,N):null;case Hr:return M=E._init,m(I,w,M(E._payload),N)}if(tl(E)||Fa(E))return M!==null?null:d(I,w,E,N,null);Ic(I,E)}return null}function g(I,w,E,N,M){if(typeof N=="string"&&N!==""||typeof N=="number")return I=I.get(E)||null,a(w,I,""+N,M);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case cc:return I=I.get(N.key===null?E:N.key)||null,l(w,I,N,M);case uo:return I=I.get(N.key===null?E:N.key)||null,c(w,I,N,M);case Hr:var L=N._init;return g(I,w,E,L(N._payload),M)}if(tl(N)||Fa(N))return I=I.get(E)||null,d(w,I,N,M,null);Ic(w,N)}return null}function S(I,w,E,N){for(var M=null,L=null,v=w,y=w=0,T=null;v!==null&&y<E.length;y++){v.index>y?(T=v,v=null):T=v.sibling;var P=m(I,v,E[y],N);if(P===null){v===null&&(v=T);break}n&&v&&P.alternate===null&&e(I,v),w=s(P,w,y),L===null?M=P:L.sibling=P,L=P,v=T}if(y===E.length)return t(I,v),Ve&&Hi(I,y),M;if(v===null){for(;y<E.length;y++)v=f(I,E[y],N),v!==null&&(w=s(v,w,y),L===null?M=v:L.sibling=v,L=v);return Ve&&Hi(I,y),M}for(v=r(I,v);y<E.length;y++)T=g(v,I,y,E[y],N),T!==null&&(n&&T.alternate!==null&&v.delete(T.key===null?y:T.key),w=s(T,w,y),L===null?M=T:L.sibling=T,L=T);return n&&v.forEach(function(b){return e(I,b)}),Ve&&Hi(I,y),M}function A(I,w,E,N){var M=Fa(E);if(typeof M!="function")throw Error(j(150));if(E=M.call(E),E==null)throw Error(j(151));for(var L=M=null,v=w,y=w=0,T=null,P=E.next();v!==null&&!P.done;y++,P=E.next()){v.index>y?(T=v,v=null):T=v.sibling;var b=m(I,v,P.value,N);if(b===null){v===null&&(v=T);break}n&&v&&b.alternate===null&&e(I,v),w=s(b,w,y),L===null?M=b:L.sibling=b,L=b,v=T}if(P.done)return t(I,v),Ve&&Hi(I,y),M;if(v===null){for(;!P.done;y++,P=E.next())P=f(I,P.value,N),P!==null&&(w=s(P,w,y),L===null?M=P:L.sibling=P,L=P);return Ve&&Hi(I,y),M}for(v=r(I,v);!P.done;y++,P=E.next())P=g(v,I,y,P.value,N),P!==null&&(n&&P.alternate!==null&&v.delete(P.key===null?y:P.key),w=s(P,w,y),L===null?M=P:L.sibling=P,L=P);return n&&v.forEach(function(k){return e(I,k)}),Ve&&Hi(I,y),M}function C(I,w,E,N){if(typeof E=="object"&&E!==null&&E.type===co&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case cc:e:{for(var M=E.key,L=w;L!==null;){if(L.key===M){if(M=E.type,M===co){if(L.tag===7){t(I,L.sibling),w=i(L,E.props.children),w.return=I,I=w;break e}}else if(L.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Hr&&$v(M)===L.type){t(I,L.sibling),w=i(L,E.props),w.ref=$a(I,L,E),w.return=I,I=w;break e}t(I,L);break}else e(I,L);L=L.sibling}E.type===co?(w=ds(E.props.children,I.mode,N,E.key),w.return=I,I=w):(N=Kc(E.type,E.key,E.props,null,I.mode,N),N.ref=$a(I,w,E),N.return=I,I=N)}return o(I);case uo:e:{for(L=E.key;w!==null;){if(w.key===L)if(w.tag===4&&w.stateNode.containerInfo===E.containerInfo&&w.stateNode.implementation===E.implementation){t(I,w.sibling),w=i(w,E.children||[]),w.return=I,I=w;break e}else{t(I,w);break}else e(I,w);w=w.sibling}w=$f(E,I.mode,N),w.return=I,I=w}return o(I);case Hr:return L=E._init,C(I,w,L(E._payload),N)}if(tl(E))return S(I,w,E,N);if(Fa(E))return A(I,w,E,N);Ic(I,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,w!==null&&w.tag===6?(t(I,w.sibling),w=i(w,E),w.return=I,I=w):(t(I,w),w=zf(E,I.mode,N),w.return=I,I=w),o(I)):t(I,w)}return C}var Fo=U0(!0),B0=U0(!1),_d=xi(null),vd=null,vo=null,fg=null;function pg(){fg=vo=vd=null}function mg(n){var e=_d.current;ke(_d),n._currentValue=e}function Up(n,e,t){for(;n!==null;){var r=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),n===t)break;n=n.return}}function Ro(n,e){vd=n,fg=vo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Xt=!0),n.firstContext=null)}function An(n){var e=n._currentValue;if(fg!==n)if(n={context:n,memoizedValue:e,next:null},vo===null){if(vd===null)throw Error(j(308));vo=n,vd.dependencies={lanes:0,firstContext:n}}else vo=vo.next=n;return e}var is=null;function gg(n){is===null?is=[n]:is.push(n)}function j0(n,e,t,r){var i=e.interleaved;return i===null?(t.next=t,gg(e)):(t.next=i.next,i.next=t),e.interleaved=t,Ar(n,r)}function Ar(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Qr=!1;function yg(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function z0(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ir(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function ci(n,e,t){var r=n.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ar(n,t)}return i=r.interleaved,i===null?(e.next=e,gg(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ar(n,t)}function Bc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,ng(n,t)}}function qv(n,e){var t=n.updateQueue,r=n.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?i=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?i=s=e:s=s.next=e}else i=s=e;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function wd(n,e,t,r){var i=n.updateQueue;Qr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=n.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,d=c=l=null,a=s;do{var m=a.lane,g=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=n,A=a;switch(m=e,g=t,A.tag){case 1:if(S=A.payload,typeof S=="function"){f=S.call(g,f,m);break e}f=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=A.payload,m=typeof S=="function"?S.call(g,f,m):S,m==null)break e;f=je({},f,m);break e;case 2:Qr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=f):d=d.next=g,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);_s|=o,n.lanes=o,n.memoizedState=f}}function Wv(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var r=n[e],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var Tu={},er=xi(Tu),Bl=xi(Tu),jl=xi(Tu);function ss(n){if(n===Tu)throw Error(j(174));return n}function _g(n,e){switch(Ae(jl,e),Ae(Bl,n),Ae(er,Tu),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=vp(e,n)}ke(er),Ae(er,e)}function Uo(){ke(er),ke(Bl),ke(jl)}function $0(n){ss(jl.current);var e=ss(er.current),t=vp(e,n.type);e!==t&&(Ae(Bl,n),Ae(er,t))}function vg(n){Bl.current===n&&(ke(er),ke(Bl))}var Fe=xi(0);function Id(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lf=[];function wg(){for(var n=0;n<Lf.length;n++)Lf[n]._workInProgressVersionPrimary=null;Lf.length=0}var jc=xr.ReactCurrentDispatcher,Mf=xr.ReactCurrentBatchConfig,ys=0,Ue=null,at=null,ht=null,Ed=!1,gl=!1,zl=0,pk=0;function bt(){throw Error(j(321))}function Ig(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Un(n[t],e[t]))return!1;return!0}function Eg(n,e,t,r,i,s){if(ys=s,Ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,jc.current=n===null||n.memoizedState===null?_k:vk,n=t(r,i),gl){s=0;do{if(gl=!1,zl=0,25<=s)throw Error(j(301));s+=1,ht=at=null,e.updateQueue=null,jc.current=wk,n=t(r,i)}while(gl)}if(jc.current=Td,e=at!==null&&at.next!==null,ys=0,ht=at=Ue=null,Ed=!1,e)throw Error(j(300));return n}function Tg(){var n=zl!==0;return zl=0,n}function qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?Ue.memoizedState=ht=n:ht=ht.next=n,ht}function Pn(){if(at===null){var n=Ue.alternate;n=n!==null?n.memoizedState:null}else n=at.next;var e=ht===null?Ue.memoizedState:ht.next;if(e!==null)ht=e,at=n;else{if(n===null)throw Error(j(310));at=n,n={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},ht===null?Ue.memoizedState=ht=n:ht=ht.next=n}return ht}function $l(n,e){return typeof e=="function"?e(n):e}function Ff(n){var e=Pn(),t=e.queue;if(t===null)throw Error(j(311));t.lastRenderedReducer=n;var r=at,i=r.baseQueue,s=t.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,t.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((ys&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:n(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Ue.lanes|=d,_s|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,Un(r,e.memoizedState)||(Xt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,t.lastRenderedState=r}if(n=t.interleaved,n!==null){i=n;do s=i.lane,Ue.lanes|=s,_s|=s,i=i.next;while(i!==n)}else i===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Uf(n){var e=Pn(),t=e.queue;if(t===null)throw Error(j(311));t.lastRenderedReducer=n;var r=t.dispatch,i=t.pending,s=e.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do s=n(s,o.action),o=o.next;while(o!==i);Un(s,e.memoizedState)||(Xt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,r]}function q0(){}function W0(n,e){var t=Ue,r=Pn(),i=e(),s=!Un(r.memoizedState,i);if(s&&(r.memoizedState=i,Xt=!0),r=r.queue,Sg(H0.bind(null,t,r,n),[n]),r.getSnapshot!==e||s||ht!==null&&ht.memoizedState.tag&1){if(t.flags|=2048,ql(9,G0.bind(null,t,r,i,e),void 0,null),pt===null)throw Error(j(349));ys&30||K0(t,e,i)}return i}function K0(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Ue.updateQueue,e===null?(e={lastEffect:null,stores:null},Ue.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function G0(n,e,t,r){e.value=t,e.getSnapshot=r,Q0(e)&&Y0(n)}function H0(n,e,t){return t(function(){Q0(e)&&Y0(n)})}function Q0(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Un(n,t)}catch{return!0}}function Y0(n){var e=Ar(n,1);e!==null&&Mn(e,n,1,-1)}function Kv(n){var e=qn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$l,lastRenderedState:n},e.queue=n,n=n.dispatch=yk.bind(null,Ue,n),[e.memoizedState,n]}function ql(n,e,t,r){return n={tag:n,create:e,destroy:t,deps:r,next:null},e=Ue.updateQueue,e===null?(e={lastEffect:null,stores:null},Ue.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(r=t.next,t.next=n,n.next=r,e.lastEffect=n)),n}function J0(){return Pn().memoizedState}function zc(n,e,t,r){var i=qn();Ue.flags|=n,i.memoizedState=ql(1|e,t,void 0,r===void 0?null:r)}function ah(n,e,t,r){var i=Pn();r=r===void 0?null:r;var s=void 0;if(at!==null){var o=at.memoizedState;if(s=o.destroy,r!==null&&Ig(r,o.deps)){i.memoizedState=ql(e,t,s,r);return}}Ue.flags|=n,i.memoizedState=ql(1|e,t,s,r)}function Gv(n,e){return zc(8390656,8,n,e)}function Sg(n,e){return ah(2048,8,n,e)}function X0(n,e){return ah(4,2,n,e)}function Z0(n,e){return ah(4,4,n,e)}function eT(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function tT(n,e,t){return t=t!=null?t.concat([n]):null,ah(4,4,eT.bind(null,e,n),t)}function Ag(){}function nT(n,e){var t=Pn();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&Ig(e,r[1])?r[0]:(t.memoizedState=[n,e],n)}function rT(n,e){var t=Pn();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&Ig(e,r[1])?r[0]:(n=n(),t.memoizedState=[n,e],n)}function iT(n,e,t){return ys&21?(Un(t,e)||(t=u0(),Ue.lanes|=t,_s|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Xt=!0),n.memoizedState=t)}function mk(n,e){var t=we;we=t!==0&&4>t?t:4,n(!0);var r=Mf.transition;Mf.transition={};try{n(!1),e()}finally{we=t,Mf.transition=r}}function sT(){return Pn().memoizedState}function gk(n,e,t){var r=hi(n);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},oT(n))aT(e,t);else if(t=j0(n,e,t,r),t!==null){var i=Ut();Mn(t,n,r,i),lT(t,e,r)}}function yk(n,e,t){var r=hi(n),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(oT(n))aT(e,i);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(i.hasEagerState=!0,i.eagerState=a,Un(a,o)){var l=e.interleaved;l===null?(i.next=i,gg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}t=j0(n,e,i,r),t!==null&&(i=Ut(),Mn(t,n,r,i),lT(t,e,r))}}function oT(n){var e=n.alternate;return n===Ue||e!==null&&e===Ue}function aT(n,e){gl=Ed=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function lT(n,e,t){if(t&4194240){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,ng(n,t)}}var Td={readContext:An,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useInsertionEffect:bt,useLayoutEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useMutableSource:bt,useSyncExternalStore:bt,useId:bt,unstable_isNewReconciler:!1},_k={readContext:An,useCallback:function(n,e){return qn().memoizedState=[n,e===void 0?null:e],n},useContext:An,useEffect:Gv,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,zc(4194308,4,eT.bind(null,e,n),t)},useLayoutEffect:function(n,e){return zc(4194308,4,n,e)},useInsertionEffect:function(n,e){return zc(4,2,n,e)},useMemo:function(n,e){var t=qn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var r=qn();return e=t!==void 0?t(e):e,r.memoizedState=r.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},r.queue=n,n=n.dispatch=gk.bind(null,Ue,n),[r.memoizedState,n]},useRef:function(n){var e=qn();return n={current:n},e.memoizedState=n},useState:Kv,useDebugValue:Ag,useDeferredValue:function(n){return qn().memoizedState=n},useTransition:function(){var n=Kv(!1),e=n[0];return n=mk.bind(null,n[1]),qn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var r=Ue,i=qn();if(Ve){if(t===void 0)throw Error(j(407));t=t()}else{if(t=e(),pt===null)throw Error(j(349));ys&30||K0(r,e,t)}i.memoizedState=t;var s={value:t,getSnapshot:e};return i.queue=s,Gv(H0.bind(null,r,s,n),[n]),r.flags|=2048,ql(9,G0.bind(null,r,s,t,e),void 0,null),t},useId:function(){var n=qn(),e=pt.identifierPrefix;if(Ve){var t=yr,r=gr;t=(r&~(1<<32-Ln(r)-1)).toString(32)+t,e=":"+e+"R"+t,t=zl++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=pk++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},vk={readContext:An,useCallback:nT,useContext:An,useEffect:Sg,useImperativeHandle:tT,useInsertionEffect:X0,useLayoutEffect:Z0,useMemo:rT,useReducer:Ff,useRef:J0,useState:function(){return Ff($l)},useDebugValue:Ag,useDeferredValue:function(n){var e=Pn();return iT(e,at.memoizedState,n)},useTransition:function(){var n=Ff($l)[0],e=Pn().memoizedState;return[n,e]},useMutableSource:q0,useSyncExternalStore:W0,useId:sT,unstable_isNewReconciler:!1},wk={readContext:An,useCallback:nT,useContext:An,useEffect:Sg,useImperativeHandle:tT,useInsertionEffect:X0,useLayoutEffect:Z0,useMemo:rT,useReducer:Uf,useRef:J0,useState:function(){return Uf($l)},useDebugValue:Ag,useDeferredValue:function(n){var e=Pn();return at===null?e.memoizedState=n:iT(e,at.memoizedState,n)},useTransition:function(){var n=Uf($l)[0],e=Pn().memoizedState;return[n,e]},useMutableSource:q0,useSyncExternalStore:W0,useId:sT,unstable_isNewReconciler:!1};function Nn(n,e){if(n&&n.defaultProps){e=je({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Bp(n,e,t,r){e=n.memoizedState,t=t(r,e),t=t==null?e:je({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var lh={isMounted:function(n){return(n=n._reactInternals)?Ds(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var r=Ut(),i=hi(n),s=Ir(r,i);s.payload=e,t!=null&&(s.callback=t),e=ci(n,s,i),e!==null&&(Mn(e,n,i,r),Bc(e,n,i))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var r=Ut(),i=hi(n),s=Ir(r,i);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=ci(n,s,i),e!==null&&(Mn(e,n,i,r),Bc(e,n,i))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Ut(),r=hi(n),i=Ir(t,r);i.tag=2,e!=null&&(i.callback=e),e=ci(n,i,r),e!==null&&(Mn(e,n,r,t),Bc(e,n,r))}};function Hv(n,e,t,r,i,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ll(t,r)||!Ll(i,s):!0}function uT(n,e,t){var r=!1,i=_i,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(i=rn(e)?ms:Dt.current,r=e.contextTypes,s=(r=r!=null)?Lo(n,i):_i),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=lh,n.stateNode=e,e._reactInternals=n,r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=s),e}function Qv(n,e,t,r){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,r),e.state!==n&&lh.enqueueReplaceState(e,e.state,null)}function jp(n,e,t,r){var i=n.stateNode;i.props=t,i.state=n.memoizedState,i.refs={},yg(n);var s=e.contextType;typeof s=="object"&&s!==null?i.context=An(s):(s=rn(e)?ms:Dt.current,i.context=Lo(n,s)),i.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Bp(n,e,s,t),i.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&lh.enqueueReplaceState(i,i.state,null),wd(n,t,i,r),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308)}function Bo(n,e){try{var t="",r=e;do t+=HC(r),r=r.return;while(r);var i=t}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:i,digest:null}}function Bf(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function zp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Ik=typeof WeakMap=="function"?WeakMap:Map;function cT(n,e,t){t=Ir(-1,t),t.tag=3,t.payload={element:null};var r=e.value;return t.callback=function(){Ad||(Ad=!0,Xp=r),zp(n,e)},t}function dT(n,e,t){t=Ir(-1,t),t.tag=3;var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;t.payload=function(){return r(i)},t.callback=function(){zp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){zp(n,e),typeof r!="function"&&(di===null?di=new Set([this]):di.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Yv(n,e,t){var r=n.pingCache;if(r===null){r=n.pingCache=new Ik;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(t)||(i.add(t),n=Ok.bind(null,n,e,t),e.then(n,n))}function Jv(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Xv(n,e,t,r,i){return n.mode&1?(n.flags|=65536,n.lanes=i,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Ir(-1,1),e.tag=2,ci(t,e,1))),t.lanes|=1),n)}var Ek=xr.ReactCurrentOwner,Xt=!1;function Ot(n,e,t,r){e.child=n===null?B0(e,null,t,r):Fo(e,n.child,t,r)}function Zv(n,e,t,r,i){t=t.render;var s=e.ref;return Ro(e,i),r=Eg(n,e,t,r,s,i),t=Tg(),n!==null&&!Xt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~i,Pr(n,e,i)):(Ve&&t&&cg(e),e.flags|=1,Ot(n,e,r,i),e.child)}function ew(n,e,t,r,i){if(n===null){var s=t.type;return typeof s=="function"&&!Dg(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,hT(n,e,s,r,i)):(n=Kc(t.type,null,r,e,e.mode,i),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&i)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Ll,t(o,r)&&n.ref===e.ref)return Pr(n,e,i)}return e.flags|=1,n=fi(s,r),n.ref=e.ref,n.return=e,e.child=n}function hT(n,e,t,r,i){if(n!==null){var s=n.memoizedProps;if(Ll(s,r)&&n.ref===e.ref)if(Xt=!1,e.pendingProps=r=s,(n.lanes&i)!==0)n.flags&131072&&(Xt=!0);else return e.lanes=n.lanes,Pr(n,e,i)}return $p(n,e,t,r,i)}function fT(n,e,t){var r=e.pendingProps,i=r.children,s=n!==null?n.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ae(Io,ln),ln|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Ae(Io,ln),ln|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:t,Ae(Io,ln),ln|=r}else s!==null?(r=s.baseLanes|t,e.memoizedState=null):r=t,Ae(Io,ln),ln|=r;return Ot(n,e,i,t),e.child}function pT(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function $p(n,e,t,r,i){var s=rn(t)?ms:Dt.current;return s=Lo(e,s),Ro(e,i),t=Eg(n,e,t,r,s,i),r=Tg(),n!==null&&!Xt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~i,Pr(n,e,i)):(Ve&&r&&cg(e),e.flags|=1,Ot(n,e,t,i),e.child)}function tw(n,e,t,r,i){if(rn(t)){var s=!0;md(e)}else s=!1;if(Ro(e,i),e.stateNode===null)$c(n,e),uT(e,t,r),jp(e,t,r,i),r=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=An(c):(c=rn(t)?ms:Dt.current,c=Lo(e,c));var d=t.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Qv(e,o,r,c),Qr=!1;var m=e.memoizedState;o.state=m,wd(e,r,o,i),l=e.memoizedState,a!==r||m!==l||nn.current||Qr?(typeof d=="function"&&(Bp(e,t,d,r),l=e.memoizedState),(a=Qr||Hv(e,t,a,r,m,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,z0(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:Nn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=An(l):(l=rn(t)?ms:Dt.current,l=Lo(e,l));var g=t.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==l)&&Qv(e,o,r,l),Qr=!1,m=e.memoizedState,o.state=m,wd(e,r,o,i);var S=e.memoizedState;a!==f||m!==S||nn.current||Qr?(typeof g=="function"&&(Bp(e,t,g,r),S=e.memoizedState),(c=Qr||Hv(e,t,c,r,m,S,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&m===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&m===n.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&m===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&m===n.memoizedState||(e.flags|=1024),r=!1)}return qp(n,e,t,r,s,i)}function qp(n,e,t,r,i,s){pT(n,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Bv(e,t,!1),Pr(n,e,s);r=e.stateNode,Ek.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,n!==null&&o?(e.child=Fo(e,n.child,null,s),e.child=Fo(e,null,a,s)):Ot(n,e,a,s),e.memoizedState=r.state,i&&Bv(e,t,!0),e.child}function mT(n){var e=n.stateNode;e.pendingContext?Uv(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Uv(n,e.context,!1),_g(n,e.containerInfo)}function nw(n,e,t,r,i){return Mo(),hg(i),e.flags|=256,Ot(n,e,t,r),e.child}var Wp={dehydrated:null,treeContext:null,retryLane:0};function Kp(n){return{baseLanes:n,cachePool:null,transitions:null}}function gT(n,e,t){var r=e.pendingProps,i=Fe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(i|=1),Ae(Fe,i&1),n===null)return Fp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,n=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=dh(o,r,0,null),n=ds(n,r,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Kp(t),e.memoizedState=Wp,n):Pg(e,o));if(i=n.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Tk(n,e,o,r,a,i,t);if(s){s=r.fallback,o=e.mode,i=n.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=fi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=fi(a,s):(s=ds(s,o,t,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=n.child.memoizedState,o=o===null?Kp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Wp,r}return s=n.child,n=s.sibling,r=fi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=t),r.return=e,r.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=r,e.memoizedState=null,r}function Pg(n,e){return e=dh({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Ec(n,e,t,r){return r!==null&&hg(r),Fo(e,n.child,null,t),n=Pg(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Tk(n,e,t,r,i,s,o){if(t)return e.flags&256?(e.flags&=-257,r=Bf(Error(j(422))),Ec(n,e,o,r)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=dh({mode:"visible",children:r.children},i,0,null),s=ds(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Fo(e,n.child,null,o),e.child.memoizedState=Kp(o),e.memoizedState=Wp,s);if(!(e.mode&1))return Ec(n,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(j(419)),r=Bf(s,r,void 0),Ec(n,e,o,r)}if(a=(o&n.childLanes)!==0,Xt||a){if(r=pt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ar(n,i),Mn(r,n,i,-1))}return Ng(),r=Bf(Error(j(421))),Ec(n,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=n.child,e=Lk.bind(null,n),i._reactRetry=e,null):(n=s.treeContext,cn=ui(i.nextSibling),hn=e,Ve=!0,On=null,n!==null&&(vn[wn++]=gr,vn[wn++]=yr,vn[wn++]=gs,gr=n.id,yr=n.overflow,gs=e),e=Pg(e,r.children),e.flags|=4096,e)}function rw(n,e,t){n.lanes|=e;var r=n.alternate;r!==null&&(r.lanes|=e),Up(n.return,e,t)}function jf(n,e,t,r,i){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=t,s.tailMode=i)}function yT(n,e,t){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ot(n,e,r.children,t),r=Fe.current,r&2)r=r&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&rw(n,t,e);else if(n.tag===19)rw(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}r&=1}if(Ae(Fe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(t=e.child,i=null;t!==null;)n=t.alternate,n!==null&&Id(n)===null&&(i=t),t=t.sibling;t=i,t===null?(i=e.child,e.child=null):(i=t.sibling,t.sibling=null),jf(e,!1,i,t,s);break;case"backwards":for(t=null,i=e.child,e.child=null;i!==null;){if(n=i.alternate,n!==null&&Id(n)===null){e.child=i;break}n=i.sibling,i.sibling=t,t=i,i=n}jf(e,!0,t,null,s);break;case"together":jf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $c(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Pr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),_s|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(j(153));if(e.child!==null){for(n=e.child,t=fi(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=fi(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Sk(n,e,t){switch(e.tag){case 3:mT(e),Mo();break;case 5:$0(e);break;case 1:rn(e.type)&&md(e);break;case 4:_g(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ae(_d,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ae(Fe,Fe.current&1),e.flags|=128,null):t&e.child.childLanes?gT(n,e,t):(Ae(Fe,Fe.current&1),n=Pr(n,e,t),n!==null?n.sibling:null);Ae(Fe,Fe.current&1);break;case 19:if(r=(t&e.childLanes)!==0,n.flags&128){if(r)return yT(n,e,t);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ae(Fe,Fe.current),r)break;return null;case 22:case 23:return e.lanes=0,fT(n,e,t)}return Pr(n,e,t)}var _T,Gp,vT,wT;_T=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Gp=function(){};vT=function(n,e,t,r){var i=n.memoizedProps;if(i!==r){n=e.stateNode,ss(er.current);var s=null;switch(t){case"input":i=mp(n,i),r=mp(n,r),s=[];break;case"select":i=je({},i,{value:void 0}),r=je({},r,{value:void 0}),s=[];break;case"textarea":i=_p(n,i),r=_p(n,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(n.onclick=fd)}wp(t,r);var o;t=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(bl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(bl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Ce("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};wT=function(n,e,t,r){t!==r&&(e.flags|=4)};function qa(n,e){if(!Ve)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:r.sibling=null}}function kt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,r=0;if(e)for(var i=n.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=n,i=i.sibling;else for(i=n.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=n,i=i.sibling;return n.subtreeFlags|=r,n.childLanes=t,e}function Ak(n,e,t){var r=e.pendingProps;switch(dg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return rn(e.type)&&pd(),kt(e),null;case 3:return r=e.stateNode,Uo(),ke(nn),ke(Dt),wg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(wc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,On!==null&&(tm(On),On=null))),Gp(n,e),kt(e),null;case 5:vg(e);var i=ss(jl.current);if(t=e.type,n!==null&&e.stateNode!=null)vT(n,e,t,r,i),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return kt(e),null}if(n=ss(er.current),wc(e)){r=e.stateNode,t=e.type;var s=e.memoizedProps;switch(r[Wn]=e,r[Ul]=s,n=(e.mode&1)!==0,t){case"dialog":Ce("cancel",r),Ce("close",r);break;case"iframe":case"object":case"embed":Ce("load",r);break;case"video":case"audio":for(i=0;i<rl.length;i++)Ce(rl[i],r);break;case"source":Ce("error",r);break;case"img":case"image":case"link":Ce("error",r),Ce("load",r);break;case"details":Ce("toggle",r);break;case"input":hv(r,s),Ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ce("invalid",r);break;case"textarea":pv(r,s),Ce("invalid",r)}wp(t,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&vc(r.textContent,a,n),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&vc(r.textContent,a,n),i=["children",""+a]):bl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ce("scroll",r)}switch(t){case"input":dc(r),fv(r,s,!0);break;case"textarea":dc(r),mv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=fd)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=HE(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof r.is=="string"?n=o.createElement(t,{is:r.is}):(n=o.createElement(t),t==="select"&&(o=n,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):n=o.createElementNS(n,t),n[Wn]=e,n[Ul]=r,_T(n,e,!1,!1),e.stateNode=n;e:{switch(o=Ip(t,r),t){case"dialog":Ce("cancel",n),Ce("close",n),i=r;break;case"iframe":case"object":case"embed":Ce("load",n),i=r;break;case"video":case"audio":for(i=0;i<rl.length;i++)Ce(rl[i],n);i=r;break;case"source":Ce("error",n),i=r;break;case"img":case"image":case"link":Ce("error",n),Ce("load",n),i=r;break;case"details":Ce("toggle",n),i=r;break;case"input":hv(n,r),i=mp(n,r),Ce("invalid",n);break;case"option":i=r;break;case"select":n._wrapperState={wasMultiple:!!r.multiple},i=je({},r,{value:void 0}),Ce("invalid",n);break;case"textarea":pv(n,r),i=_p(n,r),Ce("invalid",n);break;default:i=r}wp(t,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?JE(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&QE(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&kl(n,l):typeof l=="number"&&kl(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ce("scroll",n):l!=null&&Ym(n,s,l,o))}switch(t){case"input":dc(n),fv(n,r,!1);break;case"textarea":dc(n),mv(n);break;case"option":r.value!=null&&n.setAttribute("value",""+yi(r.value));break;case"select":n.multiple=!!r.multiple,s=r.value,s!=null?To(n,!!r.multiple,s,!1):r.defaultValue!=null&&To(n,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(n.onclick=fd)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(n&&e.stateNode!=null)wT(n,e,n.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(t=ss(jl.current),ss(er.current),wc(e)){if(r=e.stateNode,t=e.memoizedProps,r[Wn]=e,(s=r.nodeValue!==t)&&(n=hn,n!==null))switch(n.tag){case 3:vc(r.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&vc(r.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Wn]=e,e.stateNode=r}return kt(e),null;case 13:if(ke(Fe),r=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ve&&cn!==null&&e.mode&1&&!(e.flags&128))F0(),Mo(),e.flags|=98560,s=!1;else if(s=wc(e),r!==null&&r.dehydrated!==null){if(n===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[Wn]=e}else Mo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else On!==null&&(tm(On),On=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(r=r!==null,r!==(n!==null&&n.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(n===null||Fe.current&1?lt===0&&(lt=3):Ng())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return Uo(),Gp(n,e),n===null&&Ml(e.stateNode.containerInfo),kt(e),null;case 10:return mg(e.type._context),kt(e),null;case 17:return rn(e.type)&&pd(),kt(e),null;case 19:if(ke(Fe),s=e.memoizedState,s===null)return kt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)qa(s,!1);else{if(lt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Id(n),o!==null){for(e.flags|=128,qa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=t,t=e.child;t!==null;)s=t,n=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Ae(Fe,Fe.current&1|2),e.child}n=n.sibling}s.tail!==null&&Je()>jo&&(e.flags|=128,r=!0,qa(s,!1),e.lanes=4194304)}else{if(!r)if(n=Id(o),n!==null){if(e.flags|=128,r=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),qa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ve)return kt(e),null}else 2*Je()-s.renderingStartTime>jo&&t!==1073741824&&(e.flags|=128,r=!0,qa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Je(),e.sibling=null,t=Fe.current,Ae(Fe,r?t&1|2:t&1),e):(kt(e),null);case 22:case 23:return xg(),r=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ln&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function Pk(n,e){switch(dg(e),e.tag){case 1:return rn(e.type)&&pd(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Uo(),ke(nn),ke(Dt),wg(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return vg(e),null;case 13:if(ke(Fe),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(j(340));Mo()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return ke(Fe),null;case 4:return Uo(),null;case 10:return mg(e.type._context),null;case 22:case 23:return xg(),null;case 24:return null;default:return null}}var Tc=!1,Nt=!1,Rk=typeof WeakSet=="function"?WeakSet:Set,J=null;function wo(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){We(n,e,r)}else t.current=null}function Hp(n,e,t){try{t()}catch(r){We(n,e,r)}}var iw=!1;function Ck(n,e){if(xp=cd,n=A0(),ug(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=n,m=null;t:for(;;){for(var g;f!==t||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)m=f,f=g;for(;;){if(f===n)break t;if(m===t&&++c===i&&(a=o),m===s&&++d===r&&(l=o),(g=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=g}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Np={focusedElem:n,selectionRange:t},cd=!1,J=e;J!==null;)if(e=J,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,J=n;else for(;J!==null;){e=J;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var A=S.memoizedProps,C=S.memoizedState,I=e.stateNode,w=I.getSnapshotBeforeUpdate(e.elementType===e.type?A:Nn(e.type,A),C);I.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(N){We(e,e.return,N)}if(n=e.sibling,n!==null){n.return=e.return,J=n;break}J=e.return}return S=iw,iw=!1,S}function yl(n,e,t){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&n)===n){var s=i.destroy;i.destroy=void 0,s!==void 0&&Hp(e,t,s)}i=i.next}while(i!==r)}}function uh(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}}function Qp(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function IT(n){var e=n.alternate;e!==null&&(n.alternate=null,IT(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Wn],delete e[Ul],delete e[Op],delete e[ck],delete e[dk])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function ET(n){return n.tag===5||n.tag===3||n.tag===4}function sw(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||ET(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Yp(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=fd));else if(r!==4&&(n=n.child,n!==null))for(Yp(n,e,t),n=n.sibling;n!==null;)Yp(n,e,t),n=n.sibling}function Jp(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(r!==4&&(n=n.child,n!==null))for(Jp(n,e,t),n=n.sibling;n!==null;)Jp(n,e,t),n=n.sibling}var vt=null,Vn=!1;function $r(n,e,t){for(t=t.child;t!==null;)TT(n,e,t),t=t.sibling}function TT(n,e,t){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount(th,t)}catch{}switch(t.tag){case 5:Nt||wo(t,e);case 6:var r=vt,i=Vn;vt=null,$r(n,e,t),vt=r,Vn=i,vt!==null&&(Vn?(n=vt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):vt.removeChild(t.stateNode));break;case 18:vt!==null&&(Vn?(n=vt,t=t.stateNode,n.nodeType===8?Vf(n.parentNode,t):n.nodeType===1&&Vf(n,t),Vl(n)):Vf(vt,t.stateNode));break;case 4:r=vt,i=Vn,vt=t.stateNode.containerInfo,Vn=!0,$r(n,e,t),vt=r,Vn=i;break;case 0:case 11:case 14:case 15:if(!Nt&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Hp(t,e,o),i=i.next}while(i!==r)}$r(n,e,t);break;case 1:if(!Nt&&(wo(t,e),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){We(t,e,a)}$r(n,e,t);break;case 21:$r(n,e,t);break;case 22:t.mode&1?(Nt=(r=Nt)||t.memoizedState!==null,$r(n,e,t),Nt=r):$r(n,e,t);break;default:$r(n,e,t)}}function ow(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Rk),e.forEach(function(r){var i=Mk.bind(null,n,r);t.has(r)||(t.add(r),r.then(i,i))})}}function kn(n,e){var t=e.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:vt=a.stateNode,Vn=!1;break e;case 3:vt=a.stateNode.containerInfo,Vn=!0;break e;case 4:vt=a.stateNode.containerInfo,Vn=!0;break e}a=a.return}if(vt===null)throw Error(j(160));TT(s,o,i),vt=null,Vn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){We(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ST(e,n),e=e.sibling}function ST(n,e){var t=n.alternate,r=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(kn(e,n),$n(n),r&4){try{yl(3,n,n.return),uh(3,n)}catch(A){We(n,n.return,A)}try{yl(5,n,n.return)}catch(A){We(n,n.return,A)}}break;case 1:kn(e,n),$n(n),r&512&&t!==null&&wo(t,t.return);break;case 5:if(kn(e,n),$n(n),r&512&&t!==null&&wo(t,t.return),n.flags&32){var i=n.stateNode;try{kl(i,"")}catch(A){We(n,n.return,A)}}if(r&4&&(i=n.stateNode,i!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&KE(i,s),Ip(a,o);var c=Ip(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?JE(i,f):d==="dangerouslySetInnerHTML"?QE(i,f):d==="children"?kl(i,f):Ym(i,d,f,c)}switch(a){case"input":gp(i,s);break;case"textarea":GE(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?To(i,!!s.multiple,g,!1):m!==!!s.multiple&&(s.defaultValue!=null?To(i,!!s.multiple,s.defaultValue,!0):To(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ul]=s}catch(A){We(n,n.return,A)}}break;case 6:if(kn(e,n),$n(n),r&4){if(n.stateNode===null)throw Error(j(162));i=n.stateNode,s=n.memoizedProps;try{i.nodeValue=s}catch(A){We(n,n.return,A)}}break;case 3:if(kn(e,n),$n(n),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Vl(e.containerInfo)}catch(A){We(n,n.return,A)}break;case 4:kn(e,n),$n(n);break;case 13:kn(e,n),$n(n),i=n.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(bg=Je())),r&4&&ow(n);break;case 22:if(d=t!==null&&t.memoizedState!==null,n.mode&1?(Nt=(c=Nt)||d,kn(e,n),Nt=c):kn(e,n),$n(n),r&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!d&&n.mode&1)for(J=n,d=n.child;d!==null;){for(f=J=d;J!==null;){switch(m=J,g=m.child,m.tag){case 0:case 11:case 14:case 15:yl(4,m,m.return);break;case 1:wo(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,t=m.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(A){We(r,t,A)}}break;case 5:wo(m,m.return);break;case 22:if(m.memoizedState!==null){lw(f);continue}}g!==null?(g.return=m,J=g):lw(f)}d=d.sibling}e:for(d=null,f=n;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=YE("display",o))}catch(A){We(n,n.return,A)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(A){We(n,n.return,A)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:kn(e,n),$n(n),r&4&&ow(n);break;case 21:break;default:kn(e,n),$n(n)}}function $n(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(ET(t)){var r=t;break e}t=t.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(kl(i,""),r.flags&=-33);var s=sw(n);Jp(n,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=sw(n);Yp(n,a,o);break;default:throw Error(j(161))}}catch(l){We(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function bk(n,e,t){J=n,AT(n)}function AT(n,e,t){for(var r=(n.mode&1)!==0;J!==null;){var i=J,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Tc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Nt;a=Tc;var c=Nt;if(Tc=o,(Nt=l)&&!c)for(J=i;J!==null;)o=J,l=o.child,o.tag===22&&o.memoizedState!==null?uw(i):l!==null?(l.return=o,J=l):uw(i);for(;s!==null;)J=s,AT(s),s=s.sibling;J=i,Tc=a,Nt=c}aw(n)}else i.subtreeFlags&8772&&s!==null?(s.return=i,J=s):aw(n)}}function aw(n){for(;J!==null;){var e=J;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Nt||uh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Nt)if(t===null)r.componentDidMount();else{var i=e.elementType===e.type?t.memoizedProps:Nn(e.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Wv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Wv(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Vl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}Nt||e.flags&512&&Qp(e)}catch(m){We(e,e.return,m)}}if(e===n){J=null;break}if(t=e.sibling,t!==null){t.return=e.return,J=t;break}J=e.return}}function lw(n){for(;J!==null;){var e=J;if(e===n){J=null;break}var t=e.sibling;if(t!==null){t.return=e.return,J=t;break}J=e.return}}function uw(n){for(;J!==null;){var e=J;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{uh(4,e)}catch(l){We(e,t,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){We(e,i,l)}}var s=e.return;try{Qp(e)}catch(l){We(e,s,l)}break;case 5:var o=e.return;try{Qp(e)}catch(l){We(e,o,l)}}}catch(l){We(e,e.return,l)}if(e===n){J=null;break}var a=e.sibling;if(a!==null){a.return=e.return,J=a;break}J=e.return}}var kk=Math.ceil,Sd=xr.ReactCurrentDispatcher,Rg=xr.ReactCurrentOwner,Tn=xr.ReactCurrentBatchConfig,pe=0,pt=null,rt=null,Et=0,ln=0,Io=xi(0),lt=0,Wl=null,_s=0,ch=0,Cg=0,_l=null,Jt=null,bg=0,jo=1/0,pr=null,Ad=!1,Xp=null,di=null,Sc=!1,ni=null,Pd=0,vl=0,Zp=null,qc=-1,Wc=0;function Ut(){return pe&6?Je():qc!==-1?qc:qc=Je()}function hi(n){return n.mode&1?pe&2&&Et!==0?Et&-Et:fk.transition!==null?(Wc===0&&(Wc=u0()),Wc):(n=we,n!==0||(n=window.event,n=n===void 0?16:g0(n.type)),n):1}function Mn(n,e,t,r){if(50<vl)throw vl=0,Zp=null,Error(j(185));wu(n,t,r),(!(pe&2)||n!==pt)&&(n===pt&&(!(pe&2)&&(ch|=t),lt===4&&Xr(n,Et)),sn(n,r),t===1&&pe===0&&!(e.mode&1)&&(jo=Je()+500,oh&&Ni()))}function sn(n,e){var t=n.callbackNode;fb(n,e);var r=ud(n,n===pt?Et:0);if(r===0)t!==null&&_v(t),n.callbackNode=null,n.callbackPriority=0;else if(e=r&-r,n.callbackPriority!==e){if(t!=null&&_v(t),e===1)n.tag===0?hk(cw.bind(null,n)):O0(cw.bind(null,n)),lk(function(){!(pe&6)&&Ni()}),t=null;else{switch(c0(r)){case 1:t=tg;break;case 4:t=a0;break;case 16:t=ld;break;case 536870912:t=l0;break;default:t=ld}t=DT(t,PT.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function PT(n,e){if(qc=-1,Wc=0,pe&6)throw Error(j(327));var t=n.callbackNode;if(Co()&&n.callbackNode!==t)return null;var r=ud(n,n===pt?Et:0);if(r===0)return null;if(r&30||r&n.expiredLanes||e)e=Rd(n,r);else{e=r;var i=pe;pe|=2;var s=CT();(pt!==n||Et!==e)&&(pr=null,jo=Je()+500,cs(n,e));do try{Dk();break}catch(a){RT(n,a)}while(!0);pg(),Sd.current=s,pe=i,rt!==null?e=0:(pt=null,Et=0,e=lt)}if(e!==0){if(e===2&&(i=Pp(n),i!==0&&(r=i,e=em(n,i))),e===1)throw t=Wl,cs(n,0),Xr(n,r),sn(n,Je()),t;if(e===6)Xr(n,r);else{if(i=n.current.alternate,!(r&30)&&!xk(i)&&(e=Rd(n,r),e===2&&(s=Pp(n),s!==0&&(r=s,e=em(n,s))),e===1))throw t=Wl,cs(n,0),Xr(n,r),sn(n,Je()),t;switch(n.finishedWork=i,n.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Qi(n,Jt,pr);break;case 3:if(Xr(n,r),(r&130023424)===r&&(e=bg+500-Je(),10<e)){if(ud(n,0)!==0)break;if(i=n.suspendedLanes,(i&r)!==r){Ut(),n.pingedLanes|=n.suspendedLanes&i;break}n.timeoutHandle=Vp(Qi.bind(null,n,Jt,pr),e);break}Qi(n,Jt,pr);break;case 4:if(Xr(n,r),(r&4194240)===r)break;for(e=n.eventTimes,i=-1;0<r;){var o=31-Ln(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kk(r/1960))-r,10<r){n.timeoutHandle=Vp(Qi.bind(null,n,Jt,pr),r);break}Qi(n,Jt,pr);break;case 5:Qi(n,Jt,pr);break;default:throw Error(j(329))}}}return sn(n,Je()),n.callbackNode===t?PT.bind(null,n):null}function em(n,e){var t=_l;return n.current.memoizedState.isDehydrated&&(cs(n,e).flags|=256),n=Rd(n,e),n!==2&&(e=Jt,Jt=t,e!==null&&tm(e)),n}function tm(n){Jt===null?Jt=n:Jt.push.apply(Jt,n)}function xk(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],s=i.getSnapshot;i=i.value;try{if(!Un(s(),i))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xr(n,e){for(e&=~Cg,e&=~ch,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Ln(e),r=1<<t;n[t]=-1,e&=~r}}function cw(n){if(pe&6)throw Error(j(327));Co();var e=ud(n,0);if(!(e&1))return sn(n,Je()),null;var t=Rd(n,e);if(n.tag!==0&&t===2){var r=Pp(n);r!==0&&(e=r,t=em(n,r))}if(t===1)throw t=Wl,cs(n,0),Xr(n,e),sn(n,Je()),t;if(t===6)throw Error(j(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Qi(n,Jt,pr),sn(n,Je()),null}function kg(n,e){var t=pe;pe|=1;try{return n(e)}finally{pe=t,pe===0&&(jo=Je()+500,oh&&Ni())}}function vs(n){ni!==null&&ni.tag===0&&!(pe&6)&&Co();var e=pe;pe|=1;var t=Tn.transition,r=we;try{if(Tn.transition=null,we=1,n)return n()}finally{we=r,Tn.transition=t,pe=e,!(pe&6)&&Ni()}}function xg(){ln=Io.current,ke(Io)}function cs(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,ak(t)),rt!==null)for(t=rt.return;t!==null;){var r=t;switch(dg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pd();break;case 3:Uo(),ke(nn),ke(Dt),wg();break;case 5:vg(r);break;case 4:Uo();break;case 13:ke(Fe);break;case 19:ke(Fe);break;case 10:mg(r.type._context);break;case 22:case 23:xg()}t=t.return}if(pt=n,rt=n=fi(n.current,null),Et=ln=e,lt=0,Wl=null,Cg=ch=_s=0,Jt=_l=null,is!==null){for(e=0;e<is.length;e++)if(t=is[e],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,s=t.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}t.pending=r}is=null}return n}function RT(n,e){do{var t=rt;try{if(pg(),jc.current=Td,Ed){for(var r=Ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ed=!1}if(ys=0,ht=at=Ue=null,gl=!1,zl=0,Rg.current=null,t===null||t.return===null){lt=1,Wl=e,rt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Et,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Jv(o);if(g!==null){g.flags&=-257,Xv(g,o,a,s,e),g.mode&1&&Yv(s,c,e),e=g,l=c;var S=e.updateQueue;if(S===null){var A=new Set;A.add(l),e.updateQueue=A}else S.add(l);break e}else{if(!(e&1)){Yv(s,c,e),Ng();break e}l=Error(j(426))}}else if(Ve&&a.mode&1){var C=Jv(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Xv(C,o,a,s,e),hg(Bo(l,a));break e}}s=l=Bo(l,a),lt!==4&&(lt=2),_l===null?_l=[s]:_l.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=cT(s,l,e);qv(s,I);break e;case 1:a=l;var w=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(di===null||!di.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var N=dT(s,a,e);qv(s,N);break e}}s=s.return}while(s!==null)}kT(t)}catch(M){e=M,rt===t&&t!==null&&(rt=t=t.return);continue}break}while(!0)}function CT(){var n=Sd.current;return Sd.current=Td,n===null?Td:n}function Ng(){(lt===0||lt===3||lt===2)&&(lt=4),pt===null||!(_s&268435455)&&!(ch&268435455)||Xr(pt,Et)}function Rd(n,e){var t=pe;pe|=2;var r=CT();(pt!==n||Et!==e)&&(pr=null,cs(n,e));do try{Nk();break}catch(i){RT(n,i)}while(!0);if(pg(),pe=t,Sd.current=r,rt!==null)throw Error(j(261));return pt=null,Et=0,lt}function Nk(){for(;rt!==null;)bT(rt)}function Dk(){for(;rt!==null&&!ib();)bT(rt)}function bT(n){var e=NT(n.alternate,n,ln);n.memoizedProps=n.pendingProps,e===null?kT(n):rt=e,Rg.current=null}function kT(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=Pk(t,e),t!==null){t.flags&=32767,rt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{lt=6,rt=null;return}}else if(t=Ak(t,e,ln),t!==null){rt=t;return}if(e=e.sibling,e!==null){rt=e;return}rt=e=n}while(e!==null);lt===0&&(lt=5)}function Qi(n,e,t){var r=we,i=Tn.transition;try{Tn.transition=null,we=1,Vk(n,e,t,r)}finally{Tn.transition=i,we=r}return null}function Vk(n,e,t,r){do Co();while(ni!==null);if(pe&6)throw Error(j(327));t=n.finishedWork;var i=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(j(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(pb(n,s),n===pt&&(rt=pt=null,Et=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Sc||(Sc=!0,DT(ld,function(){return Co(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Tn.transition,Tn.transition=null;var o=we;we=1;var a=pe;pe|=4,Rg.current=null,Ck(n,t),ST(t,n),ek(Np),cd=!!xp,Np=xp=null,n.current=t,bk(t),sb(),pe=a,we=o,Tn.transition=s}else n.current=t;if(Sc&&(Sc=!1,ni=n,Pd=i),s=n.pendingLanes,s===0&&(di=null),lb(t.stateNode),sn(n,Je()),e!==null)for(r=n.onRecoverableError,t=0;t<e.length;t++)i=e[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ad)throw Ad=!1,n=Xp,Xp=null,n;return Pd&1&&n.tag!==0&&Co(),s=n.pendingLanes,s&1?n===Zp?vl++:(vl=0,Zp=n):vl=0,Ni(),null}function Co(){if(ni!==null){var n=c0(Pd),e=Tn.transition,t=we;try{if(Tn.transition=null,we=16>n?16:n,ni===null)var r=!1;else{if(n=ni,ni=null,Pd=0,pe&6)throw Error(j(331));var i=pe;for(pe|=4,J=n.current;J!==null;){var s=J,o=s.child;if(J.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(J=c;J!==null;){var d=J;switch(d.tag){case 0:case 11:case 15:yl(8,d,s)}var f=d.child;if(f!==null)f.return=d,J=f;else for(;J!==null;){d=J;var m=d.sibling,g=d.return;if(IT(d),d===c){J=null;break}if(m!==null){m.return=g,J=m;break}J=g}}}var S=s.alternate;if(S!==null){var A=S.child;if(A!==null){S.child=null;do{var C=A.sibling;A.sibling=null,A=C}while(A!==null)}}J=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,J=o;else e:for(;J!==null;){if(s=J,s.flags&2048)switch(s.tag){case 0:case 11:case 15:yl(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,J=I;break e}J=s.return}}var w=n.current;for(J=w;J!==null;){o=J;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,J=E;else e:for(o=w;J!==null;){if(a=J,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:uh(9,a)}}catch(M){We(a,a.return,M)}if(a===o){J=null;break e}var N=a.sibling;if(N!==null){N.return=a.return,J=N;break e}J=a.return}}if(pe=i,Ni(),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot(th,n)}catch{}r=!0}return r}finally{we=t,Tn.transition=e}}return!1}function dw(n,e,t){e=Bo(t,e),e=cT(n,e,1),n=ci(n,e,1),e=Ut(),n!==null&&(wu(n,1,e),sn(n,e))}function We(n,e,t){if(n.tag===3)dw(n,n,t);else for(;e!==null;){if(e.tag===3){dw(e,n,t);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(di===null||!di.has(r))){n=Bo(t,n),n=dT(e,n,1),e=ci(e,n,1),n=Ut(),e!==null&&(wu(e,1,n),sn(e,n));break}}e=e.return}}function Ok(n,e,t){var r=n.pingCache;r!==null&&r.delete(e),e=Ut(),n.pingedLanes|=n.suspendedLanes&t,pt===n&&(Et&t)===t&&(lt===4||lt===3&&(Et&130023424)===Et&&500>Je()-bg?cs(n,0):Cg|=t),sn(n,e)}function xT(n,e){e===0&&(n.mode&1?(e=pc,pc<<=1,!(pc&130023424)&&(pc=4194304)):e=1);var t=Ut();n=Ar(n,e),n!==null&&(wu(n,e,t),sn(n,t))}function Lk(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),xT(n,t)}function Mk(n,e){var t=0;switch(n.tag){case 13:var r=n.stateNode,i=n.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=n.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),xT(n,t)}var NT;NT=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||nn.current)Xt=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Xt=!1,Sk(n,e,t);Xt=!!(n.flags&131072)}else Xt=!1,Ve&&e.flags&1048576&&L0(e,yd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;$c(n,e),n=e.pendingProps;var i=Lo(e,Dt.current);Ro(e,t),i=Eg(null,e,r,n,i,t);var s=Tg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(r)?(s=!0,md(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,yg(e),i.updater=lh,e.stateNode=i,i._reactInternals=e,jp(e,r,n,t),e=qp(null,e,r,!0,s,t)):(e.tag=0,Ve&&s&&cg(e),Ot(null,e,i,t),e=e.child),e;case 16:r=e.elementType;e:{switch($c(n,e),n=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Uk(r),n=Nn(r,n),i){case 0:e=$p(null,e,r,n,t);break e;case 1:e=tw(null,e,r,n,t);break e;case 11:e=Zv(null,e,r,n,t);break e;case 14:e=ew(null,e,r,Nn(r.type,n),t);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),$p(n,e,r,i,t);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),tw(n,e,r,i,t);case 3:e:{if(mT(e),n===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,z0(n,e),wd(e,r,null,t);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Bo(Error(j(423)),e),e=nw(n,e,r,t,i);break e}else if(r!==i){i=Bo(Error(j(424)),e),e=nw(n,e,r,t,i);break e}else for(cn=ui(e.stateNode.containerInfo.firstChild),hn=e,Ve=!0,On=null,t=B0(e,null,r,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Mo(),r===i){e=Pr(n,e,t);break e}Ot(n,e,r,t)}e=e.child}return e;case 5:return $0(e),n===null&&Fp(e),r=e.type,i=e.pendingProps,s=n!==null?n.memoizedProps:null,o=i.children,Dp(r,i)?o=null:s!==null&&Dp(r,s)&&(e.flags|=32),pT(n,e),Ot(n,e,o,t),e.child;case 6:return n===null&&Fp(e),null;case 13:return gT(n,e,t);case 4:return _g(e,e.stateNode.containerInfo),r=e.pendingProps,n===null?e.child=Fo(e,null,r,t):Ot(n,e,r,t),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),Zv(n,e,r,i,t);case 7:return Ot(n,e,e.pendingProps,t),e.child;case 8:return Ot(n,e,e.pendingProps.children,t),e.child;case 12:return Ot(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ae(_d,r._currentValue),r._currentValue=o,s!==null)if(Un(s.value,o)){if(s.children===i.children&&!nn.current){e=Pr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Ir(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Up(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Up(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ot(n,e,i.children,t),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ro(e,t),i=An(i),r=r(i),e.flags|=1,Ot(n,e,r,t),e.child;case 14:return r=e.type,i=Nn(r,e.pendingProps),i=Nn(r.type,i),ew(n,e,r,i,t);case 15:return hT(n,e,e.type,e.pendingProps,t);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),$c(n,e),e.tag=1,rn(r)?(n=!0,md(e)):n=!1,Ro(e,t),uT(e,r,i),jp(e,r,i,t),qp(null,e,r,!0,n,t);case 19:return yT(n,e,t);case 22:return fT(n,e,t)}throw Error(j(156,e.tag))};function DT(n,e){return o0(n,e)}function Fk(n,e,t,r){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(n,e,t,r){return new Fk(n,e,t,r)}function Dg(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Uk(n){if(typeof n=="function")return Dg(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Xm)return 11;if(n===Zm)return 14}return 2}function fi(n,e){var t=n.alternate;return t===null?(t=In(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Kc(n,e,t,r,i,s){var o=2;if(r=n,typeof n=="function")Dg(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case co:return ds(t.children,i,s,e);case Jm:o=8,i|=8;break;case dp:return n=In(12,t,e,i|2),n.elementType=dp,n.lanes=s,n;case hp:return n=In(13,t,e,i),n.elementType=hp,n.lanes=s,n;case fp:return n=In(19,t,e,i),n.elementType=fp,n.lanes=s,n;case $E:return dh(t,i,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case jE:o=10;break e;case zE:o=9;break e;case Xm:o=11;break e;case Zm:o=14;break e;case Hr:o=16,r=null;break e}throw Error(j(130,n==null?n:typeof n,""))}return e=In(o,t,e,i),e.elementType=n,e.type=r,e.lanes=s,e}function ds(n,e,t,r){return n=In(7,n,r,e),n.lanes=t,n}function dh(n,e,t,r){return n=In(22,n,r,e),n.elementType=$E,n.lanes=t,n.stateNode={isHidden:!1},n}function zf(n,e,t){return n=In(6,n,null,e),n.lanes=t,n}function $f(n,e,t){return e=In(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Bk(n,e,t,r,i){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tf(0),this.expirationTimes=Tf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vg(n,e,t,r,i,s,o,a,l){return n=new Bk(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=In(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},yg(s),n}function jk(n,e,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:uo,key:r==null?null:""+r,children:n,containerInfo:e,implementation:t}}function VT(n){if(!n)return _i;n=n._reactInternals;e:{if(Ds(n)!==n||n.tag!==1)throw Error(j(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(n.tag===1){var t=n.type;if(rn(t))return V0(n,t,e)}return e}function OT(n,e,t,r,i,s,o,a,l){return n=Vg(t,r,!0,n,i,s,o,a,l),n.context=VT(null),t=n.current,r=Ut(),i=hi(t),s=Ir(r,i),s.callback=e??null,ci(t,s,i),n.current.lanes=i,wu(n,i,r),sn(n,r),n}function hh(n,e,t,r){var i=e.current,s=Ut(),o=hi(i);return t=VT(t),e.context===null?e.context=t:e.pendingContext=t,e=Ir(s,o),e.payload={element:n},r=r===void 0?null:r,r!==null&&(e.callback=r),n=ci(i,e,o),n!==null&&(Mn(n,i,o,s),Bc(n,i,o)),o}function Cd(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function hw(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Og(n,e){hw(n,e),(n=n.alternate)&&hw(n,e)}function zk(){return null}var LT=typeof reportError=="function"?reportError:function(n){console.error(n)};function Lg(n){this._internalRoot=n}fh.prototype.render=Lg.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(j(409));hh(n,e,null,null)};fh.prototype.unmount=Lg.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;vs(function(){hh(null,n,null,null)}),e[Sr]=null}};function fh(n){this._internalRoot=n}fh.prototype.unstable_scheduleHydration=function(n){if(n){var e=f0();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Jr.length&&e!==0&&e<Jr[t].priority;t++);Jr.splice(t,0,n),t===0&&m0(n)}};function Mg(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ph(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function fw(){}function $k(n,e,t,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Cd(o);s.call(c)}}var o=OT(e,r,n,0,null,!1,!1,"",fw);return n._reactRootContainer=o,n[Sr]=o.current,Ml(n.nodeType===8?n.parentNode:n),vs(),o}for(;i=n.lastChild;)n.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Cd(l);a.call(c)}}var l=Vg(n,0,!1,null,null,!1,!1,"",fw);return n._reactRootContainer=l,n[Sr]=l.current,Ml(n.nodeType===8?n.parentNode:n),vs(function(){hh(e,l,t,r)}),l}function mh(n,e,t,r,i){var s=t._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Cd(o);a.call(l)}}hh(e,o,n,i)}else o=$k(t,e,n,i,r);return Cd(o)}d0=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=nl(e.pendingLanes);t!==0&&(ng(e,t|1),sn(e,Je()),!(pe&6)&&(jo=Je()+500,Ni()))}break;case 13:vs(function(){var r=Ar(n,1);if(r!==null){var i=Ut();Mn(r,n,1,i)}}),Og(n,1)}};rg=function(n){if(n.tag===13){var e=Ar(n,134217728);if(e!==null){var t=Ut();Mn(e,n,134217728,t)}Og(n,134217728)}};h0=function(n){if(n.tag===13){var e=hi(n),t=Ar(n,e);if(t!==null){var r=Ut();Mn(t,n,e,r)}Og(n,e)}};f0=function(){return we};p0=function(n,e){var t=we;try{return we=n,e()}finally{we=t}};Tp=function(n,e,t){switch(e){case"input":if(gp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var r=t[e];if(r!==n&&r.form===n.form){var i=sh(r);if(!i)throw Error(j(90));WE(r),gp(r,i)}}}break;case"textarea":GE(n,t);break;case"select":e=t.value,e!=null&&To(n,!!t.multiple,e,!1)}};e0=kg;t0=vs;var qk={usingClientEntryPoint:!1,Events:[Eu,mo,sh,XE,ZE,kg]},Wa={findFiberByHostInstance:rs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wk={bundleType:Wa.bundleType,version:Wa.version,rendererPackageName:Wa.rendererPackageName,rendererConfig:Wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=i0(n),n===null?null:n.stateNode},findFiberByHostInstance:Wa.findFiberByHostInstance||zk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ac.isDisabled&&Ac.supportsFiber)try{th=Ac.inject(Wk),Zn=Ac}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qk;mn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mg(e))throw Error(j(200));return jk(n,e,null,t)};mn.createRoot=function(n,e){if(!Mg(n))throw Error(j(299));var t=!1,r="",i=LT;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Vg(n,1,!1,null,null,t,!1,r,i),n[Sr]=e.current,Ml(n.nodeType===8?n.parentNode:n),new Lg(e)};mn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(j(188)):(n=Object.keys(n).join(","),Error(j(268,n)));return n=i0(e),n=n===null?null:n.stateNode,n};mn.flushSync=function(n){return vs(n)};mn.hydrate=function(n,e,t){if(!ph(e))throw Error(j(200));return mh(null,n,e,!0,t)};mn.hydrateRoot=function(n,e,t){if(!Mg(n))throw Error(j(405));var r=t!=null&&t.hydratedSources||null,i=!1,s="",o=LT;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=OT(e,null,n,1,t??null,i,!1,s,o),n[Sr]=e.current,Ml(n),r)for(n=0;n<r.length;n++)t=r[n],i=t._getVersion,i=i(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,i]:e.mutableSourceEagerHydrationData.push(t,i);return new fh(e)};mn.render=function(n,e,t){if(!ph(e))throw Error(j(200));return mh(null,n,e,!1,t)};mn.unmountComponentAtNode=function(n){if(!ph(n))throw Error(j(40));return n._reactRootContainer?(vs(function(){mh(null,null,n,!1,function(){n._reactRootContainer=null,n[Sr]=null})}),!0):!1};mn.unstable_batchedUpdates=kg;mn.unstable_renderSubtreeIntoContainer=function(n,e,t,r){if(!ph(t))throw Error(j(200));if(n==null||n._reactInternals===void 0)throw Error(j(38));return mh(n,e,t,!1,r)};mn.version="18.3.1-next-f1338f8080-20240426";function MT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(MT)}catch(n){console.error(n)}}MT(),ME.exports=mn;var FT=ME.exports;const Kk=AE(FT);var pw=FT;up.createRoot=pw.createRoot,up.hydrateRoot=pw.hydrateRoot;class gh{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){const t={listener:e};return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}const Fg=typeof window>"u"||"Deno"in window;function Dn(){}function Gk(n,e){return typeof n=="function"?n(e):n}function Hk(n){return typeof n=="number"&&n>=0&&n!==1/0}function Qk(n,e){return Math.max(n+(e||0)-Date.now(),0)}function Pc(n,e,t){return yh(n)?typeof e=="function"?{...t,queryKey:n,queryFn:e}:{...e,queryKey:n}:n}function Yr(n,e,t){return yh(n)?[{...e,queryKey:n},t]:[n||{},e]}function mw(n,e){const{type:t="all",exact:r,fetchStatus:i,predicate:s,queryKey:o,stale:a}=n;if(yh(o)){if(r){if(e.queryHash!==Ug(o,e.options))return!1}else if(!bd(e.queryKey,o))return!1}if(t!=="all"){const l=e.isActive();if(t==="active"&&!l||t==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||typeof i<"u"&&i!==e.state.fetchStatus||s&&!s(e))}function gw(n,e){const{exact:t,fetching:r,predicate:i,mutationKey:s}=n;if(yh(s)){if(!e.options.mutationKey)return!1;if(t){if(os(e.options.mutationKey)!==os(s))return!1}else if(!bd(e.options.mutationKey,s))return!1}return!(typeof r=="boolean"&&e.state.status==="loading"!==r||i&&!i(e))}function Ug(n,e){return((e==null?void 0:e.queryKeyHashFn)||os)(n)}function os(n){return JSON.stringify(n,(e,t)=>nm(t)?Object.keys(t).sort().reduce((r,i)=>(r[i]=t[i],r),{}):t)}function bd(n,e){return UT(n,e)}function UT(n,e){return n===e?!0:typeof n!=typeof e?!1:n&&e&&typeof n=="object"&&typeof e=="object"?!Object.keys(e).some(t=>!UT(n[t],e[t])):!1}function BT(n,e){if(n===e)return n;const t=yw(n)&&yw(e);if(t||nm(n)&&nm(e)){const r=t?n.length:Object.keys(n).length,i=t?e:Object.keys(e),s=i.length,o=t?[]:{};let a=0;for(let l=0;l<s;l++){const c=t?l:i[l];o[c]=BT(n[c],e[c]),o[c]===n[c]&&a++}return r===s&&a===r?n:o}return e}function yw(n){return Array.isArray(n)&&n.length===Object.keys(n).length}function nm(n){if(!_w(n))return!1;const e=n.constructor;if(typeof e>"u")return!0;const t=e.prototype;return!(!_w(t)||!t.hasOwnProperty("isPrototypeOf"))}function _w(n){return Object.prototype.toString.call(n)==="[object Object]"}function yh(n){return Array.isArray(n)}function jT(n){return new Promise(e=>{setTimeout(e,n)})}function vw(n){jT(0).then(n)}function Yk(){if(typeof AbortController=="function")return new AbortController}function Jk(n,e,t){return t.isDataEqual!=null&&t.isDataEqual(n,e)?n:typeof t.structuralSharing=="function"?t.structuralSharing(n,e):t.structuralSharing!==!1?BT(n,e):e}class Xk extends gh{constructor(){super(),this.setup=e=>{if(!Fg&&window.addEventListener){const t=()=>e();return window.addEventListener("visibilitychange",t,!1),window.addEventListener("focus",t,!1),()=>{window.removeEventListener("visibilitychange",t),window.removeEventListener("focus",t)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.cleanup)==null||e.call(this),this.cleanup=void 0}}setEventListener(e){var t;this.setup=e,(t=this.cleanup)==null||t.call(this),this.cleanup=e(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()})}setFocused(e){this.focused!==e&&(this.focused=e,this.onFocus())}onFocus(){this.listeners.forEach(({listener:e})=>{e()})}isFocused(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)}}const rm=new Xk,ww=["online","offline"];class Zk extends gh{constructor(){super(),this.setup=e=>{if(!Fg&&window.addEventListener){const t=()=>e();return ww.forEach(r=>{window.addEventListener(r,t,!1)}),()=>{ww.forEach(r=>{window.removeEventListener(r,t)})}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.cleanup)==null||e.call(this),this.cleanup=void 0}}setEventListener(e){var t;this.setup=e,(t=this.cleanup)==null||t.call(this),this.cleanup=e(r=>{typeof r=="boolean"?this.setOnline(r):this.onOnline()})}setOnline(e){this.online!==e&&(this.online=e,this.onOnline())}onOnline(){this.listeners.forEach(({listener:e})=>{e()})}isOnline(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine}}const kd=new Zk;function e1(n){return Math.min(1e3*2**n,3e4)}function Bg(n){return(n??"online")==="online"?kd.isOnline():!0}class zT{constructor(e){this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}}function qf(n){return n instanceof zT}function $T(n){let e=!1,t=0,r=!1,i,s,o;const a=new Promise((C,I)=>{s=C,o=I}),l=C=>{r||(g(new zT(C)),n.abort==null||n.abort())},c=()=>{e=!0},d=()=>{e=!1},f=()=>!rm.isFocused()||n.networkMode!=="always"&&!kd.isOnline(),m=C=>{r||(r=!0,n.onSuccess==null||n.onSuccess(C),i==null||i(),s(C))},g=C=>{r||(r=!0,n.onError==null||n.onError(C),i==null||i(),o(C))},S=()=>new Promise(C=>{i=I=>{const w=r||!f();return w&&C(I),w},n.onPause==null||n.onPause()}).then(()=>{i=void 0,r||n.onContinue==null||n.onContinue()}),A=()=>{if(r)return;let C;try{C=n.fn()}catch(I){C=Promise.reject(I)}Promise.resolve(C).then(m).catch(I=>{var w,E;if(r)return;const N=(w=n.retry)!=null?w:3,M=(E=n.retryDelay)!=null?E:e1,L=typeof M=="function"?M(t,I):M,v=N===!0||typeof N=="number"&&t<N||typeof N=="function"&&N(t,I);if(e||!v){g(I);return}t++,n.onFail==null||n.onFail(t,I),jT(L).then(()=>{if(f())return S()}).then(()=>{e?g(I):A()})})};return Bg(n.networkMode)?A():S().then(A),{promise:a,cancel:l,continue:()=>(i==null?void 0:i())?a:Promise.resolve(),cancelRetry:c,continueRetry:d}}const jg=console;function t1(){let n=[],e=0,t=d=>{d()},r=d=>{d()};const i=d=>{let f;e++;try{f=d()}finally{e--,e||a()}return f},s=d=>{e?n.push(d):vw(()=>{t(d)})},o=d=>(...f)=>{s(()=>{d(...f)})},a=()=>{const d=n;n=[],d.length&&vw(()=>{r(()=>{d.forEach(f=>{t(f)})})})};return{batch:i,batchCalls:o,schedule:s,setNotifyFunction:d=>{t=d},setBatchNotifyFunction:d=>{r=d}}}const Ft=t1();class qT{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Hk(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(e){this.cacheTime=Math.max(this.cacheTime||0,e??(Fg?1/0:5*60*1e3))}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}let n1=class extends qT{constructor(e){super(),this.abortSignalConsumed=!1,this.defaultOptions=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.cache=e.cache,this.logger=e.logger||jg,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.initialState=e.state||r1(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.cache.remove(this)}setData(e,t){const r=Jk(this.state.data,e,this.options);return this.dispatch({data:r,type:"success",dataUpdatedAt:t==null?void 0:t.updatedAt,manual:t==null?void 0:t.manual}),r}setState(e,t){this.dispatch({type:"setState",state:e,setStateOptions:t})}cancel(e){var t;const r=this.promise;return(t=this.retryer)==null||t.cancel(e),r?r.then(Dn).catch(Dn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(e=>e.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(e=>e.getCurrentResult().isStale)}isStaleByTime(e=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!Qk(this.state.dataUpdatedAt,e)}onFocus(){var e;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t&&t.refetch({cancelRefetch:!1}),(e=this.retryer)==null||e.continue()}onOnline(){var e;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t&&t.refetch({cancelRefetch:!1}),(e=this.retryer)==null||e.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(e,t){var r,i;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&t!=null&&t.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var s;return(s=this.retryer)==null||s.continueRetry(),this.promise}}if(e&&this.setOptions(e),!this.options.queryFn){const g=this.observers.find(S=>S.options.queryFn);g&&this.setOptions(g.options)}const o=Yk(),a={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},l=g=>{Object.defineProperty(g,"signal",{enumerable:!0,get:()=>{if(o)return this.abortSignalConsumed=!0,o.signal}})};l(a);const c=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(a)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'"),d={fetchOptions:t,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:c};if(l(d),(r=this.options.behavior)==null||r.onFetch(d),this.revertState=this.state,this.state.fetchStatus==="idle"||this.state.fetchMeta!==((i=d.fetchOptions)==null?void 0:i.meta)){var f;this.dispatch({type:"fetch",meta:(f=d.fetchOptions)==null?void 0:f.meta})}const m=g=>{if(qf(g)&&g.silent||this.dispatch({type:"error",error:g}),!qf(g)){var S,A,C,I;(S=(A=this.cache.config).onError)==null||S.call(A,g,this),(C=(I=this.cache.config).onSettled)==null||C.call(I,this.state.data,g,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=$T({fn:d.fetchFn,abort:o==null?void 0:o.abort.bind(o),onSuccess:g=>{var S,A,C,I;if(typeof g>"u"){m(new Error(this.queryHash+" data is undefined"));return}this.setData(g),(S=(A=this.cache.config).onSuccess)==null||S.call(A,g,this),(C=(I=this.cache.config).onSettled)==null||C.call(I,g,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:m,onFail:(g,S)=>{this.dispatch({type:"failed",failureCount:g,error:S})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:d.options.retry,retryDelay:d.options.retryDelay,networkMode:d.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(e){const t=r=>{var i,s;switch(e.type){case"failed":return{...r,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:(i=e.meta)!=null?i:null,fetchStatus:Bg(this.options.networkMode)?"fetching":"paused",...!r.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...r,data:e.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(s=e.dataUpdatedAt)!=null?s:Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const o=e.error;return qf(o)&&o.revert&&this.revertState?{...this.revertState,fetchStatus:"idle"}:{...r,error:o,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:o,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...e.state}}};this.state=t(this.state),Ft.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate(e)}),this.cache.notify({query:this,type:"updated",action:e})})}};function r1(n){const e=typeof n.initialData=="function"?n.initialData():n.initialData,t=typeof e<"u",r=t?typeof n.initialDataUpdatedAt=="function"?n.initialDataUpdatedAt():n.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:t?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:t?"success":"loading",fetchStatus:"idle"}}class i1 extends gh{constructor(e){super(),this.config=e||{},this.queries=[],this.queriesMap={}}build(e,t,r){var i;const s=t.queryKey,o=(i=t.queryHash)!=null?i:Ug(s,t);let a=this.get(o);return a||(a=new n1({cache:this,logger:e.getLogger(),queryKey:s,queryHash:o,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(s)}),this.add(a)),a}add(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"added",query:e}))}remove(e){const t=this.queriesMap[e.queryHash];t&&(e.destroy(),this.queries=this.queries.filter(r=>r!==e),t===e&&delete this.queriesMap[e.queryHash],this.notify({type:"removed",query:e}))}clear(){Ft.batch(()=>{this.queries.forEach(e=>{this.remove(e)})})}get(e){return this.queriesMap[e]}getAll(){return this.queries}find(e,t){const[r]=Yr(e,t);return typeof r.exact>"u"&&(r.exact=!0),this.queries.find(i=>mw(r,i))}findAll(e,t){const[r]=Yr(e,t);return Object.keys(r).length>0?this.queries.filter(i=>mw(r,i)):this.queries}notify(e){Ft.batch(()=>{this.listeners.forEach(({listener:t})=>{t(e)})})}onFocus(){Ft.batch(()=>{this.queries.forEach(e=>{e.onFocus()})})}onOnline(){Ft.batch(()=>{this.queries.forEach(e=>{e.onOnline()})})}}let s1=class extends qT{constructor(e){super(),this.defaultOptions=e.defaultOptions,this.mutationId=e.mutationId,this.mutationCache=e.mutationCache,this.logger=e.logger||jg,this.observers=[],this.state=e.state||o1(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(e){this.dispatch({type:"setState",state:e})}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.observers=this.observers.filter(t=>t!==e),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.observers.length||(this.state.status==="loading"?this.scheduleGc():this.mutationCache.remove(this))}continue(){var e,t;return(e=(t=this.retryer)==null?void 0:t.continue())!=null?e:this.execute()}async execute(){const e=()=>{var v;return this.retryer=$T({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(y,T)=>{this.dispatch({type:"failed",failureCount:y,error:T})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:(v=this.options.retry)!=null?v:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},t=this.state.status==="loading";try{var r,i,s,o,a,l,c,d;if(!t){var f,m,g,S;this.dispatch({type:"loading",variables:this.options.variables}),await((f=(m=this.mutationCache.config).onMutate)==null?void 0:f.call(m,this.state.variables,this));const y=await((g=(S=this.options).onMutate)==null?void 0:g.call(S,this.state.variables));y!==this.state.context&&this.dispatch({type:"loading",context:y,variables:this.state.variables})}const v=await e();return await((r=(i=this.mutationCache.config).onSuccess)==null?void 0:r.call(i,v,this.state.variables,this.state.context,this)),await((s=(o=this.options).onSuccess)==null?void 0:s.call(o,v,this.state.variables,this.state.context)),await((a=(l=this.mutationCache.config).onSettled)==null?void 0:a.call(l,v,null,this.state.variables,this.state.context,this)),await((c=(d=this.options).onSettled)==null?void 0:c.call(d,v,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:v}),v}catch(v){try{var A,C,I,w,E,N,M,L;throw await((A=(C=this.mutationCache.config).onError)==null?void 0:A.call(C,v,this.state.variables,this.state.context,this)),await((I=(w=this.options).onError)==null?void 0:I.call(w,v,this.state.variables,this.state.context)),await((E=(N=this.mutationCache.config).onSettled)==null?void 0:E.call(N,void 0,v,this.state.variables,this.state.context,this)),await((M=(L=this.options).onSettled)==null?void 0:M.call(L,void 0,v,this.state.variables,this.state.context)),v}finally{this.dispatch({type:"error",error:v})}}}dispatch(e){const t=r=>{switch(e.type){case"failed":return{...r,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"loading":return{...r,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!Bg(this.options.networkMode),status:"loading",variables:e.variables};case"success":return{...r,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:e.error,failureCount:r.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"};case"setState":return{...r,...e.state}}};this.state=t(this.state),Ft.batch(()=>{this.observers.forEach(r=>{r.onMutationUpdate(e)}),this.mutationCache.notify({mutation:this,type:"updated",action:e})})}};function o1(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}class a1 extends gh{constructor(e){super(),this.config=e||{},this.mutations=[],this.mutationId=0}build(e,t,r){const i=new s1({mutationCache:this,logger:e.getLogger(),mutationId:++this.mutationId,options:e.defaultMutationOptions(t),state:r,defaultOptions:t.mutationKey?e.getMutationDefaults(t.mutationKey):void 0});return this.add(i),i}add(e){this.mutations.push(e),this.notify({type:"added",mutation:e})}remove(e){this.mutations=this.mutations.filter(t=>t!==e),this.notify({type:"removed",mutation:e})}clear(){Ft.batch(()=>{this.mutations.forEach(e=>{this.remove(e)})})}getAll(){return this.mutations}find(e){return typeof e.exact>"u"&&(e.exact=!0),this.mutations.find(t=>gw(e,t))}findAll(e){return this.mutations.filter(t=>gw(e,t))}notify(e){Ft.batch(()=>{this.listeners.forEach(({listener:t})=>{t(e)})})}resumePausedMutations(){var e;return this.resuming=((e=this.resuming)!=null?e:Promise.resolve()).then(()=>{const t=this.mutations.filter(r=>r.state.isPaused);return Ft.batch(()=>t.reduce((r,i)=>r.then(()=>i.continue().catch(Dn)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}function l1(){return{onFetch:n=>{n.fetchFn=()=>{var e,t,r,i,s,o;const a=(e=n.fetchOptions)==null||(t=e.meta)==null?void 0:t.refetchPage,l=(r=n.fetchOptions)==null||(i=r.meta)==null?void 0:i.fetchMore,c=l==null?void 0:l.pageParam,d=(l==null?void 0:l.direction)==="forward",f=(l==null?void 0:l.direction)==="backward",m=((s=n.state.data)==null?void 0:s.pages)||[],g=((o=n.state.data)==null?void 0:o.pageParams)||[];let S=g,A=!1;const C=L=>{Object.defineProperty(L,"signal",{enumerable:!0,get:()=>{var v;if((v=n.signal)!=null&&v.aborted)A=!0;else{var y;(y=n.signal)==null||y.addEventListener("abort",()=>{A=!0})}return n.signal}})},I=n.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+n.options.queryHash+"'")),w=(L,v,y,T)=>(S=T?[v,...S]:[...S,v],T?[y,...L]:[...L,y]),E=(L,v,y,T)=>{if(A)return Promise.reject("Cancelled");if(typeof y>"u"&&!v&&L.length)return Promise.resolve(L);const P={queryKey:n.queryKey,pageParam:y,meta:n.options.meta};C(P);const b=I(P);return Promise.resolve(b).then(R=>w(L,y,R,T))};let N;if(!m.length)N=E([]);else if(d){const L=typeof c<"u",v=L?c:Iw(n.options,m);N=E(m,L,v)}else if(f){const L=typeof c<"u",v=L?c:u1(n.options,m);N=E(m,L,v,!0)}else{S=[];const L=typeof n.options.getNextPageParam>"u";N=(a&&m[0]?a(m[0],0,m):!0)?E([],L,g[0]):Promise.resolve(w([],g[0],m[0]));for(let y=1;y<m.length;y++)N=N.then(T=>{if(a&&m[y]?a(m[y],y,m):!0){const b=L?g[y]:Iw(n.options,T);return E(T,L,b)}return Promise.resolve(w(T,g[y],m[y]))})}return N.then(L=>({pages:L,pageParams:S}))}}}}function Iw(n,e){return n.getNextPageParam==null?void 0:n.getNextPageParam(e[e.length-1],e)}function u1(n,e){return n.getPreviousPageParam==null?void 0:n.getPreviousPageParam(e[0],e)}class c1{constructor(e={}){this.queryCache=e.queryCache||new i1,this.mutationCache=e.mutationCache||new a1,this.logger=e.logger||jg,this.defaultOptions=e.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,this.mountCount===1&&(this.unsubscribeFocus=rm.subscribe(()=>{rm.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=kd.subscribe(()=>{kd.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var e,t;this.mountCount--,this.mountCount===0&&((e=this.unsubscribeFocus)==null||e.call(this),this.unsubscribeFocus=void 0,(t=this.unsubscribeOnline)==null||t.call(this),this.unsubscribeOnline=void 0)}isFetching(e,t){const[r]=Yr(e,t);return r.fetchStatus="fetching",this.queryCache.findAll(r).length}isMutating(e){return this.mutationCache.findAll({...e,fetching:!0}).length}getQueryData(e,t){var r;return(r=this.queryCache.find(e,t))==null?void 0:r.state.data}ensureQueryData(e,t,r){const i=Pc(e,t,r),s=this.getQueryData(i.queryKey);return s?Promise.resolve(s):this.fetchQuery(i)}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:t,state:r})=>{const i=r.data;return[t,i]})}setQueryData(e,t,r){const i=this.queryCache.find(e),s=i==null?void 0:i.state.data,o=Gk(t,s);if(typeof o>"u")return;const a=Pc(e),l=this.defaultQueryOptions(a);return this.queryCache.build(this,l).setData(o,{...r,manual:!0})}setQueriesData(e,t,r){return Ft.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:i})=>[i,this.setQueryData(i,t,r)]))}getQueryState(e,t){var r;return(r=this.queryCache.find(e,t))==null?void 0:r.state}removeQueries(e,t){const[r]=Yr(e,t),i=this.queryCache;Ft.batch(()=>{i.findAll(r).forEach(s=>{i.remove(s)})})}resetQueries(e,t,r){const[i,s]=Yr(e,t,r),o=this.queryCache,a={type:"active",...i};return Ft.batch(()=>(o.findAll(i).forEach(l=>{l.reset()}),this.refetchQueries(a,s)))}cancelQueries(e,t,r){const[i,s={}]=Yr(e,t,r);typeof s.revert>"u"&&(s.revert=!0);const o=Ft.batch(()=>this.queryCache.findAll(i).map(a=>a.cancel(s)));return Promise.all(o).then(Dn).catch(Dn)}invalidateQueries(e,t,r){const[i,s]=Yr(e,t,r);return Ft.batch(()=>{var o,a;if(this.queryCache.findAll(i).forEach(c=>{c.invalidate()}),i.refetchType==="none")return Promise.resolve();const l={...i,type:(o=(a=i.refetchType)!=null?a:i.type)!=null?o:"active"};return this.refetchQueries(l,s)})}refetchQueries(e,t,r){const[i,s]=Yr(e,t,r),o=Ft.batch(()=>this.queryCache.findAll(i).filter(l=>!l.isDisabled()).map(l=>{var c;return l.fetch(void 0,{...s,cancelRefetch:(c=s==null?void 0:s.cancelRefetch)!=null?c:!0,meta:{refetchPage:i.refetchPage}})}));let a=Promise.all(o).then(Dn);return s!=null&&s.throwOnError||(a=a.catch(Dn)),a}fetchQuery(e,t,r){const i=Pc(e,t,r),s=this.defaultQueryOptions(i);typeof s.retry>"u"&&(s.retry=!1);const o=this.queryCache.build(this,s);return o.isStaleByTime(s.staleTime)?o.fetch(s):Promise.resolve(o.state.data)}prefetchQuery(e,t,r){return this.fetchQuery(e,t,r).then(Dn).catch(Dn)}fetchInfiniteQuery(e,t,r){const i=Pc(e,t,r);return i.behavior=l1(),this.fetchQuery(i)}prefetchInfiniteQuery(e,t,r){return this.fetchInfiniteQuery(e,t,r).then(Dn).catch(Dn)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(e){this.defaultOptions=e}setQueryDefaults(e,t){const r=this.queryDefaults.find(i=>os(e)===os(i.queryKey));r?r.defaultOptions=t:this.queryDefaults.push({queryKey:e,defaultOptions:t})}getQueryDefaults(e){if(!e)return;const t=this.queryDefaults.find(r=>bd(e,r.queryKey));return t==null?void 0:t.defaultOptions}setMutationDefaults(e,t){const r=this.mutationDefaults.find(i=>os(e)===os(i.mutationKey));r?r.defaultOptions=t:this.mutationDefaults.push({mutationKey:e,defaultOptions:t})}getMutationDefaults(e){if(!e)return;const t=this.mutationDefaults.find(r=>bd(e,r.mutationKey));return t==null?void 0:t.defaultOptions}defaultQueryOptions(e){if(e!=null&&e._defaulted)return e;const t={...this.defaultOptions.queries,...this.getQueryDefaults(e==null?void 0:e.queryKey),...e,_defaulted:!0};return!t.queryHash&&t.queryKey&&(t.queryHash=Ug(t.queryKey,t)),typeof t.refetchOnReconnect>"u"&&(t.refetchOnReconnect=t.networkMode!=="always"),typeof t.useErrorBoundary>"u"&&(t.useErrorBoundary=!!t.suspense),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...this.defaultOptions.mutations,...this.getMutationDefaults(e==null?void 0:e.mutationKey),...e,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}const Ew=B.createContext(void 0),d1=B.createContext(!1);function h1(n,e){return n||(e&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=Ew),window.ReactQueryClientContext):Ew)}const f1=({client:n,children:e,context:t,contextSharing:r=!1})=>{B.useEffect(()=>(n.mount(),()=>{n.unmount()}),[n]);const i=h1(t,r);return B.createElement(d1.Provider,{value:!t&&r},B.createElement(i.Provider,{value:n},e))};/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kl(){return Kl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Kl.apply(this,arguments)}var ri;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(ri||(ri={}));const Tw="popstate";function p1(n){n===void 0&&(n={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return im("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(r,i){return typeof i=="string"?i:xd(i)}return g1(e,t,null,n)}function it(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function WT(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function m1(){return Math.random().toString(36).substr(2,8)}function Sw(n,e){return{usr:n.state,key:n.key,idx:e}}function im(n,e,t,r){return t===void 0&&(t=null),Kl({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?la(e):e,{state:t,key:e&&e.key||r||m1()})}function xd(n){let{pathname:e="/",search:t="",hash:r=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function la(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substr(r),n=n.substr(0,r)),n&&(e.pathname=n)}return e}function g1(n,e,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ri.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(Kl({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=ri.Pop;let C=d(),I=C==null?null:C-c;c=C,l&&l({action:a,location:A.location,delta:I})}function m(C,I){a=ri.Push;let w=im(A.location,C,I);c=d()+1;let E=Sw(w,c),N=A.createHref(w);try{o.pushState(E,"",N)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(N)}s&&l&&l({action:a,location:A.location,delta:1})}function g(C,I){a=ri.Replace;let w=im(A.location,C,I);c=d();let E=Sw(w,c),N=A.createHref(w);o.replaceState(E,"",N),s&&l&&l({action:a,location:A.location,delta:0})}function S(C){let I=i.location.origin!=="null"?i.location.origin:i.location.href,w=typeof C=="string"?C:xd(C);return w=w.replace(/ $/,"%20"),it(I,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,I)}let A={get action(){return a},get location(){return n(i,o)},listen(C){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Tw,f),l=C,()=>{i.removeEventListener(Tw,f),l=null}},createHref(C){return e(i,C)},createURL:S,encodeLocation(C){let I=S(C);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:m,replace:g,go(C){return o.go(C)}};return A}var Aw;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Aw||(Aw={}));function y1(n,e,t){return t===void 0&&(t="/"),_1(n,e,t)}function _1(n,e,t,r){let i=typeof e=="string"?la(e):e,s=zg(i.pathname||"/",t);if(s==null)return null;let o=KT(n);v1(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=x1(s);a=C1(o[l],c)}return a}function KT(n,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(it(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=pi([r,l.relativePath]),d=t.concat(l);s.children&&s.children.length>0&&(it(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),KT(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:P1(c,s.index),routesMeta:d})};return n.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of GT(s.path))i(s,o,l)}),e}function GT(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,i=t.endsWith("?"),s=t.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=GT(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>n.startsWith("/")&&l===""?"/":l)}function v1(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:R1(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const w1=/^:[\w-]+$/,I1=3,E1=2,T1=1,S1=10,A1=-2,Pw=n=>n==="*";function P1(n,e){let t=n.split("/"),r=t.length;return t.some(Pw)&&(r+=A1),e&&(r+=E1),t.filter(i=>!Pw(i)).reduce((i,s)=>i+(w1.test(s)?I1:s===""?T1:S1),r)}function R1(n,e){return n.length===e.length&&n.slice(0,-1).every((r,i)=>r===e[i])?n[n.length-1]-e[e.length-1]:0}function C1(n,e,t){let{routesMeta:r}=n,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=b1({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),m=l.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:pi([s,f.pathname]),pathnameBase:O1(pi([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=pi([s,f.pathnameBase]))}return o}function b1(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=k1(n.path,n.caseSensitive,n.end),i=e.match(t);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:g}=d;if(m==="*"){let A=a[f]||"";o=s.slice(0,s.length-A.length).replace(/(.)\/+$/,"$1")}const S=a[f];return g&&!S?c[m]=void 0:c[m]=(S||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:n}}function k1(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),WT(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let r=[],i="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),i+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":n!==""&&n!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function x1(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return WT(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function zg(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function N1(n,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:i=""}=typeof n=="string"?la(n):n;return{pathname:t?t.startsWith("/")?t:D1(t,e):e,search:L1(r),hash:M1(i)}}function D1(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function Wf(n,e,t,r){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function V1(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function HT(n,e){let t=V1(n);return e?t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function QT(n,e,t,r){r===void 0&&(r=!1);let i;typeof n=="string"?i=la(n):(i=Kl({},n),it(!i.pathname||!i.pathname.includes("?"),Wf("?","pathname","search",i)),it(!i.pathname||!i.pathname.includes("#"),Wf("#","pathname","hash",i)),it(!i.search||!i.search.includes("#"),Wf("#","search","hash",i)));let s=n===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=t;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let l=N1(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const pi=n=>n.join("/").replace(/\/\/+/g,"/"),O1=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),L1=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,M1=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function F1(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const YT=["post","put","patch","delete"];new Set(YT);const U1=["get",...YT];new Set(U1);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gl(){return Gl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Gl.apply(this,arguments)}const $g=B.createContext(null),B1=B.createContext(null),Vs=B.createContext(null),_h=B.createContext(null),Os=B.createContext({outlet:null,matches:[],isDataRoute:!1}),JT=B.createContext(null);function j1(n,e){let{relative:t}=e===void 0?{}:e;Su()||it(!1);let{basename:r,navigator:i}=B.useContext(Vs),{hash:s,pathname:o,search:a}=ZT(n,{relative:t}),l=o;return r!=="/"&&(l=o==="/"?r:pi([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Su(){return B.useContext(_h)!=null}function vh(){return Su()||it(!1),B.useContext(_h).location}function XT(n){B.useContext(Vs).static||B.useLayoutEffect(n)}function z1(){let{isDataRoute:n}=B.useContext(Os);return n?tx():$1()}function $1(){Su()||it(!1);let n=B.useContext($g),{basename:e,future:t,navigator:r}=B.useContext(Vs),{matches:i}=B.useContext(Os),{pathname:s}=vh(),o=JSON.stringify(HT(i,t.v7_relativeSplatPath)),a=B.useRef(!1);return XT(()=>{a.current=!0}),B.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=QT(c,JSON.parse(o),s,d.relative==="path");n==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:pi([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,n])}function ZT(n,e){let{relative:t}=e===void 0?{}:e,{future:r}=B.useContext(Vs),{matches:i}=B.useContext(Os),{pathname:s}=vh(),o=JSON.stringify(HT(i,r.v7_relativeSplatPath));return B.useMemo(()=>QT(n,JSON.parse(o),s,t==="path"),[n,o,s,t])}function q1(n,e){return W1(n,e)}function W1(n,e,t,r){Su()||it(!1);let{navigator:i}=B.useContext(Vs),{matches:s}=B.useContext(Os),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=vh(),d;if(e){var f;let C=typeof e=="string"?la(e):e;l==="/"||(f=C.pathname)!=null&&f.startsWith(l)||it(!1),d=C}else d=c;let m=d.pathname||"/",g=m;if(l!=="/"){let C=l.replace(/^\//,"").split("/");g="/"+m.replace(/^\//,"").split("/").slice(C.length).join("/")}let S=y1(n,{pathname:g}),A=Y1(S&&S.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:pi([l,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?l:pi([l,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,t,r);return e&&A?B.createElement(_h.Provider,{value:{location:Gl({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:ri.Pop}},A):A}function K1(){let n=ex(),e=F1(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return B.createElement(B.Fragment,null,B.createElement("h2",null,"Unexpected Application Error!"),B.createElement("h3",{style:{fontStyle:"italic"}},e),t?B.createElement("pre",{style:i},t):null,null)}const G1=B.createElement(K1,null);class H1 extends B.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?B.createElement(Os.Provider,{value:this.props.routeContext},B.createElement(JT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Q1(n){let{routeContext:e,match:t,children:r}=n,i=B.useContext($g);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),B.createElement(Os.Provider,{value:e},r)}function Y1(n,e,t,r){var i;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),n==null){var s;if(!t)return null;if(t.errors)n=t.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,a=(i=t)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||it(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,c=-1;if(t&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:g}=t,S=f.route.loader&&m[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||S){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let g,S=!1,A=null,C=null;t&&(g=a&&f.route.id?a[f.route.id]:void 0,A=f.route.errorElement||G1,l&&(c<0&&m===0?(nx("route-fallback"),S=!0,C=null):c===m&&(S=!0,C=f.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,m+1)),w=()=>{let E;return g?E=A:S?E=C:f.route.Component?E=B.createElement(f.route.Component,null):f.route.element?E=f.route.element:E=d,B.createElement(Q1,{match:f,routeContext:{outlet:d,matches:I,isDataRoute:t!=null},children:E})};return t&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?B.createElement(H1,{location:t.location,revalidation:t.revalidation,component:A,error:g,children:w(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):w()},null)}var eS=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(eS||{}),tS=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(tS||{});function J1(n){let e=B.useContext($g);return e||it(!1),e}function X1(n){let e=B.useContext(B1);return e||it(!1),e}function Z1(n){let e=B.useContext(Os);return e||it(!1),e}function nS(n){let e=Z1(),t=e.matches[e.matches.length-1];return t.route.id||it(!1),t.route.id}function ex(){var n;let e=B.useContext(JT),t=X1(),r=nS();return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function tx(){let{router:n}=J1(eS.UseNavigateStable),e=nS(tS.UseNavigateStable),t=B.useRef(!1);return XT(()=>{t.current=!0}),B.useCallback(function(i,s){s===void 0&&(s={}),t.current&&(typeof i=="number"?n.navigate(i):n.navigate(i,Gl({fromRouteId:e},s)))},[n,e])}const Rw={};function nx(n,e,t){Rw[n]||(Rw[n]=!0)}function rx(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function sm(n){it(!1)}function ix(n){let{basename:e="/",children:t=null,location:r,navigationType:i=ri.Pop,navigator:s,static:o=!1,future:a}=n;Su()&&it(!1);let l=e.replace(/^\/*/,"/"),c=B.useMemo(()=>({basename:l,navigator:s,static:o,future:Gl({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=la(r));let{pathname:d="/",search:f="",hash:m="",state:g=null,key:S="default"}=r,A=B.useMemo(()=>{let C=zg(d,l);return C==null?null:{location:{pathname:C,search:f,hash:m,state:g,key:S},navigationType:i}},[l,d,f,m,g,S,i]);return A==null?null:B.createElement(Vs.Provider,{value:c},B.createElement(_h.Provider,{children:t,value:A}))}function sx(n){let{children:e,location:t}=n;return q1(om(e),t)}new Promise(()=>{});function om(n,e){e===void 0&&(e=[]);let t=[];return B.Children.forEach(n,(r,i)=>{if(!B.isValidElement(r))return;let s=[...e,i];if(r.type===B.Fragment){t.push.apply(t,om(r.props.children,s));return}r.type!==sm&&it(!1),!r.props.index||!r.props.children||it(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=om(r.props.children,s)),t.push(o)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function am(){return am=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},am.apply(this,arguments)}function ox(n,e){if(n==null)return{};var t={},r=Object.keys(n),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(t[i]=n[i]);return t}function ax(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function lx(n,e){return n.button===0&&(!e||e==="_self")&&!ax(n)}const ux=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],cx="6";try{window.__reactRouterVersion=cx}catch{}const dx="startTransition",Cw=OC[dx];function hx(n){let{basename:e,children:t,future:r,window:i}=n,s=B.useRef();s.current==null&&(s.current=p1({window:i,v5Compat:!0}));let o=s.current,[a,l]=B.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=B.useCallback(f=>{c&&Cw?Cw(()=>l(f)):l(f)},[l,c]);return B.useLayoutEffect(()=>o.listen(d),[o,d]),B.useEffect(()=>rx(r),[r]),B.createElement(ix,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:o,future:r})}const fx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",px=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mx=B.forwardRef(function(e,t){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:d,viewTransition:f}=e,m=ox(e,ux),{basename:g}=B.useContext(Vs),S,A=!1;if(typeof c=="string"&&px.test(c)&&(S=c,fx))try{let E=new URL(window.location.href),N=c.startsWith("//")?new URL(E.protocol+c):new URL(c),M=zg(N.pathname,g);N.origin===E.origin&&M!=null?c=M+N.search+N.hash:A=!0}catch{}let C=j1(c,{relative:i}),I=gx(c,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,viewTransition:f});function w(E){r&&r(E),E.defaultPrevented||I(E)}return B.createElement("a",am({},m,{href:S||C,onClick:A||s?r:w,ref:t,target:l}))});var bw;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(bw||(bw={}));var kw;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(kw||(kw={}));function gx(n,e){let{target:t,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=z1(),c=vh(),d=ZT(n,{relative:o});return B.useCallback(f=>{if(lx(f,t)){f.preventDefault();let m=r!==void 0?r:xd(c)===xd(d);l(n,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,d,r,i,t,n,s,o,a])}var yx=n=>{switch(n){case"success":return wx;case"info":return Ex;case"warning":return Ix;case"error":return Tx;default:return null}},_x=Array(12).fill(0),vx=({visible:n,className:e})=>G.createElement("div",{className:["sonner-loading-wrapper",e].filter(Boolean).join(" "),"data-visible":n},G.createElement("div",{className:"sonner-spinner"},_x.map((t,r)=>G.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),wx=G.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},G.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),Ix=G.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},G.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),Ex=G.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},G.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),Tx=G.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},G.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),Sx=G.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},G.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),G.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),Ax=()=>{let[n,e]=G.useState(document.hidden);return G.useEffect(()=>{let t=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",t),()=>window.removeEventListener("visibilitychange",t)},[]),n},lm=1,Px=class{constructor(){this.subscribe=n=>(this.subscribers.push(n),()=>{let e=this.subscribers.indexOf(n);this.subscribers.splice(e,1)}),this.publish=n=>{this.subscribers.forEach(e=>e(n))},this.addToast=n=>{this.publish(n),this.toasts=[...this.toasts,n]},this.create=n=>{var e;let{message:t,...r}=n,i=typeof(n==null?void 0:n.id)=="number"||((e=n.id)==null?void 0:e.length)>0?n.id:lm++,s=this.toasts.find(a=>a.id===i),o=n.dismissible===void 0?!0:n.dismissible;return this.dismissedToasts.has(i)&&this.dismissedToasts.delete(i),s?this.toasts=this.toasts.map(a=>a.id===i?(this.publish({...a,...n,id:i,title:t}),{...a,...n,id:i,dismissible:o,title:t}):a):this.addToast({title:t,...r,dismissible:o,id:i}),i},this.dismiss=n=>(this.dismissedToasts.add(n),n||this.toasts.forEach(e=>{this.subscribers.forEach(t=>t({id:e.id,dismiss:!0}))}),this.subscribers.forEach(e=>e({id:n,dismiss:!0})),n),this.message=(n,e)=>this.create({...e,message:n}),this.error=(n,e)=>this.create({...e,message:n,type:"error"}),this.success=(n,e)=>this.create({...e,type:"success",message:n}),this.info=(n,e)=>this.create({...e,type:"info",message:n}),this.warning=(n,e)=>this.create({...e,type:"warning",message:n}),this.loading=(n,e)=>this.create({...e,type:"loading",message:n}),this.promise=(n,e)=>{if(!e)return;let t;e.loading!==void 0&&(t=this.create({...e,promise:n,type:"loading",message:e.loading,description:typeof e.description!="function"?e.description:void 0}));let r=n instanceof Promise?n:n(),i=t!==void 0,s,o=r.then(async l=>{if(s=["resolve",l],G.isValidElement(l))i=!1,this.create({id:t,type:"default",message:l});else if(Cx(l)&&!l.ok){i=!1;let c=typeof e.error=="function"?await e.error(`HTTP error! status: ${l.status}`):e.error,d=typeof e.description=="function"?await e.description(`HTTP error! status: ${l.status}`):e.description;this.create({id:t,type:"error",message:c,description:d})}else if(e.success!==void 0){i=!1;let c=typeof e.success=="function"?await e.success(l):e.success,d=typeof e.description=="function"?await e.description(l):e.description;this.create({id:t,type:"success",message:c,description:d})}}).catch(async l=>{if(s=["reject",l],e.error!==void 0){i=!1;let c=typeof e.error=="function"?await e.error(l):e.error,d=typeof e.description=="function"?await e.description(l):e.description;this.create({id:t,type:"error",message:c,description:d})}}).finally(()=>{var l;i&&(this.dismiss(t),t=void 0),(l=e.finally)==null||l.call(e)}),a=()=>new Promise((l,c)=>o.then(()=>s[0]==="reject"?c(s[1]):l(s[1])).catch(c));return typeof t!="string"&&typeof t!="number"?{unwrap:a}:Object.assign(t,{unwrap:a})},this.custom=(n,e)=>{let t=(e==null?void 0:e.id)||lm++;return this.create({jsx:n(t),id:t,...e}),t},this.getActiveToasts=()=>this.toasts.filter(n=>!this.dismissedToasts.has(n.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},Ht=new Px,Rx=(n,e)=>{let t=(e==null?void 0:e.id)||lm++;return Ht.addToast({title:n,...e,id:t}),t},Cx=n=>n&&typeof n=="object"&&"ok"in n&&typeof n.ok=="boolean"&&"status"in n&&typeof n.status=="number",bx=Rx,kx=()=>Ht.toasts,xx=()=>Ht.getActiveToasts();Object.assign(bx,{success:Ht.success,info:Ht.info,warning:Ht.warning,error:Ht.error,custom:Ht.custom,message:Ht.message,promise:Ht.promise,dismiss:Ht.dismiss,loading:Ht.loading},{getHistory:kx,getToasts:xx});function Nx(n,{insertAt:e}={}){if(typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",e==="top"&&t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}Nx(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Rc(n){return n.label!==void 0}var Dx=3,Vx="32px",Ox="16px",xw=4e3,Lx=356,Mx=14,Fx=20,Ux=200;function xn(...n){return n.filter(Boolean).join(" ")}function Bx(n){let[e,t]=n.split("-"),r=[];return e&&r.push(e),t&&r.push(t),r}var jx=n=>{var e,t,r,i,s,o,a,l,c,d,f;let{invert:m,toast:g,unstyled:S,interacting:A,setHeights:C,visibleToasts:I,heights:w,index:E,toasts:N,expanded:M,removeToast:L,defaultRichColors:v,closeButton:y,style:T,cancelButtonStyle:P,actionButtonStyle:b,className:k="",descriptionClassName:R="",duration:st,position:yn,gap:on,loadingIcon:ot,expandByDefault:Q,classNames:W,icons:ee,closeButtonAriaLabel:Ee="Close toast",pauseWhenPageIsHidden:te}=n,[re,he]=G.useState(null),[xe,Pt]=G.useState(null),[me,Ia]=G.useState(!1),[Ui,ur]=G.useState(!1),[jn,Bi]=G.useState(!1),[$s,Ea]=G.useState(!1),[Ta,Sa]=G.useState(!1),[nf,Aa]=G.useState(0),[Wu,qs]=G.useState(0),Mr=G.useRef(g.duration||st||xw),Ku=G.useRef(null),Cn=G.useRef(null),Pa=E===0,Gu=E+1<=I,_e=g.type,$e=g.dismissible!==!1,Ws=g.className||"",Hu=g.descriptionClassName||"",ji=G.useMemo(()=>w.findIndex(ie=>ie.toastId===g.id)||0,[w,g.id]),rf=G.useMemo(()=>{var ie;return(ie=g.closeButton)!=null?ie:y},[g.closeButton,y]),Fr=G.useMemo(()=>g.duration||st||xw,[g.duration,st]),Ks=G.useRef(0),cr=G.useRef(0),Gs=G.useRef(0),Ur=G.useRef(null),[sf,Ra]=yn.split("-"),Ca=G.useMemo(()=>w.reduce((ie,fe,Te)=>Te>=ji?ie:ie+fe.height,0),[w,ji]),ba=Ax(),zi=g.invert||m,$i=_e==="loading";cr.current=G.useMemo(()=>ji*on+Ca,[ji,Ca]),G.useEffect(()=>{Mr.current=Fr},[Fr]),G.useEffect(()=>{Ia(!0)},[]),G.useEffect(()=>{let ie=Cn.current;if(ie){let fe=ie.getBoundingClientRect().height;return qs(fe),C(Te=>[{toastId:g.id,height:fe,position:g.position},...Te]),()=>C(Te=>Te.filter(gt=>gt.toastId!==g.id))}},[C,g.id]),G.useLayoutEffect(()=>{if(!me)return;let ie=Cn.current,fe=ie.style.height;ie.style.height="auto";let Te=ie.getBoundingClientRect().height;ie.style.height=fe,qs(Te),C(gt=>gt.find(Kt=>Kt.toastId===g.id)?gt.map(Kt=>Kt.toastId===g.id?{...Kt,height:Te}:Kt):[{toastId:g.id,height:Te,position:g.position},...gt])},[me,g.title,g.description,C,g.id]);let _n=G.useCallback(()=>{ur(!0),Aa(cr.current),C(ie=>ie.filter(fe=>fe.toastId!==g.id)),setTimeout(()=>{L(g)},Ux)},[g,L,C,cr]);G.useEffect(()=>{if(g.promise&&_e==="loading"||g.duration===1/0||g.type==="loading")return;let ie;return M||A||te&&ba?(()=>{if(Gs.current<Ks.current){let fe=new Date().getTime()-Ks.current;Mr.current=Mr.current-fe}Gs.current=new Date().getTime()})():Mr.current!==1/0&&(Ks.current=new Date().getTime(),ie=setTimeout(()=>{var fe;(fe=g.onAutoClose)==null||fe.call(g,g),_n()},Mr.current)),()=>clearTimeout(ie)},[M,A,g,_e,te,ba,_n]),G.useEffect(()=>{g.delete&&_n()},[_n,g.delete]);function dr(){var ie,fe,Te;return ee!=null&&ee.loading?G.createElement("div",{className:xn(W==null?void 0:W.loader,(ie=g==null?void 0:g.classNames)==null?void 0:ie.loader,"sonner-loader"),"data-visible":_e==="loading"},ee.loading):ot?G.createElement("div",{className:xn(W==null?void 0:W.loader,(fe=g==null?void 0:g.classNames)==null?void 0:fe.loader,"sonner-loader"),"data-visible":_e==="loading"},ot):G.createElement(vx,{className:xn(W==null?void 0:W.loader,(Te=g==null?void 0:g.classNames)==null?void 0:Te.loader),visible:_e==="loading"})}return G.createElement("li",{tabIndex:0,ref:Cn,className:xn(k,Ws,W==null?void 0:W.toast,(e=g==null?void 0:g.classNames)==null?void 0:e.toast,W==null?void 0:W.default,W==null?void 0:W[_e],(t=g==null?void 0:g.classNames)==null?void 0:t[_e]),"data-sonner-toast":"","data-rich-colors":(r=g.richColors)!=null?r:v,"data-styled":!(g.jsx||g.unstyled||S),"data-mounted":me,"data-promise":!!g.promise,"data-swiped":Ta,"data-removed":Ui,"data-visible":Gu,"data-y-position":sf,"data-x-position":Ra,"data-index":E,"data-front":Pa,"data-swiping":jn,"data-dismissible":$e,"data-type":_e,"data-invert":zi,"data-swipe-out":$s,"data-swipe-direction":xe,"data-expanded":!!(M||Q&&me),style:{"--index":E,"--toasts-before":E,"--z-index":N.length-E,"--offset":`${Ui?nf:cr.current}px`,"--initial-height":Q?"auto":`${Wu}px`,...T,...g.style},onDragEnd:()=>{Bi(!1),he(null),Ur.current=null},onPointerDown:ie=>{$i||!$e||(Ku.current=new Date,Aa(cr.current),ie.target.setPointerCapture(ie.pointerId),ie.target.tagName!=="BUTTON"&&(Bi(!0),Ur.current={x:ie.clientX,y:ie.clientY}))},onPointerUp:()=>{var ie,fe,Te,gt;if($s||!$e)return;Ur.current=null;let Kt=Number(((ie=Cn.current)==null?void 0:ie.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),Ne=Number(((fe=Cn.current)==null?void 0:fe.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),zn=new Date().getTime()-((Te=Ku.current)==null?void 0:Te.getTime()),yt=re==="x"?Kt:Ne,Gt=Math.abs(yt)/zn;if(Math.abs(yt)>=Fx||Gt>.11){Aa(cr.current),(gt=g.onDismiss)==null||gt.call(g,g),Pt(re==="x"?Kt>0?"right":"left":Ne>0?"down":"up"),_n(),Ea(!0),Sa(!1);return}Bi(!1),he(null)},onPointerMove:ie=>{var fe,Te,gt,Kt;if(!Ur.current||!$e||((fe=window.getSelection())==null?void 0:fe.toString().length)>0)return;let Ne=ie.clientY-Ur.current.y,zn=ie.clientX-Ur.current.x,yt=(Te=n.swipeDirections)!=null?Te:Bx(yn);!re&&(Math.abs(zn)>1||Math.abs(Ne)>1)&&he(Math.abs(zn)>Math.abs(Ne)?"x":"y");let Gt={x:0,y:0};re==="y"?(yt.includes("top")||yt.includes("bottom"))&&(yt.includes("top")&&Ne<0||yt.includes("bottom")&&Ne>0)&&(Gt.y=Ne):re==="x"&&(yt.includes("left")||yt.includes("right"))&&(yt.includes("left")&&zn<0||yt.includes("right")&&zn>0)&&(Gt.x=zn),(Math.abs(Gt.x)>0||Math.abs(Gt.y)>0)&&Sa(!0),(gt=Cn.current)==null||gt.style.setProperty("--swipe-amount-x",`${Gt.x}px`),(Kt=Cn.current)==null||Kt.style.setProperty("--swipe-amount-y",`${Gt.y}px`)}},rf&&!g.jsx?G.createElement("button",{"aria-label":Ee,"data-disabled":$i,"data-close-button":!0,onClick:$i||!$e?()=>{}:()=>{var ie;_n(),(ie=g.onDismiss)==null||ie.call(g,g)},className:xn(W==null?void 0:W.closeButton,(i=g==null?void 0:g.classNames)==null?void 0:i.closeButton)},(s=ee==null?void 0:ee.close)!=null?s:Sx):null,g.jsx||B.isValidElement(g.title)?g.jsx?g.jsx:typeof g.title=="function"?g.title():g.title:G.createElement(G.Fragment,null,_e||g.icon||g.promise?G.createElement("div",{"data-icon":"",className:xn(W==null?void 0:W.icon,(o=g==null?void 0:g.classNames)==null?void 0:o.icon)},g.promise||g.type==="loading"&&!g.icon?g.icon||dr():null,g.type!=="loading"?g.icon||(ee==null?void 0:ee[_e])||yx(_e):null):null,G.createElement("div",{"data-content":"",className:xn(W==null?void 0:W.content,(a=g==null?void 0:g.classNames)==null?void 0:a.content)},G.createElement("div",{"data-title":"",className:xn(W==null?void 0:W.title,(l=g==null?void 0:g.classNames)==null?void 0:l.title)},typeof g.title=="function"?g.title():g.title),g.description?G.createElement("div",{"data-description":"",className:xn(R,Hu,W==null?void 0:W.description,(c=g==null?void 0:g.classNames)==null?void 0:c.description)},typeof g.description=="function"?g.description():g.description):null),B.isValidElement(g.cancel)?g.cancel:g.cancel&&Rc(g.cancel)?G.createElement("button",{"data-button":!0,"data-cancel":!0,style:g.cancelButtonStyle||P,onClick:ie=>{var fe,Te;Rc(g.cancel)&&$e&&((Te=(fe=g.cancel).onClick)==null||Te.call(fe,ie),_n())},className:xn(W==null?void 0:W.cancelButton,(d=g==null?void 0:g.classNames)==null?void 0:d.cancelButton)},g.cancel.label):null,B.isValidElement(g.action)?g.action:g.action&&Rc(g.action)?G.createElement("button",{"data-button":!0,"data-action":!0,style:g.actionButtonStyle||b,onClick:ie=>{var fe,Te;Rc(g.action)&&((Te=(fe=g.action).onClick)==null||Te.call(fe,ie),!ie.defaultPrevented&&_n())},className:xn(W==null?void 0:W.actionButton,(f=g==null?void 0:g.classNames)==null?void 0:f.actionButton)},g.action.label):null))};function Nw(){if(typeof window>"u"||typeof document>"u")return"ltr";let n=document.documentElement.getAttribute("dir");return n==="auto"||!n?window.getComputedStyle(document.documentElement).direction:n}function zx(n,e){let t={};return[n,e].forEach((r,i)=>{let s=i===1,o=s?"--mobile-offset":"--offset",a=s?Ox:Vx;function l(c){["top","right","bottom","left"].forEach(d=>{t[`${o}-${d}`]=typeof c=="number"?`${c}px`:c})}typeof r=="number"||typeof r=="string"?l(r):typeof r=="object"?["top","right","bottom","left"].forEach(c=>{r[c]===void 0?t[`${o}-${c}`]=a:t[`${o}-${c}`]=typeof r[c]=="number"?`${r[c]}px`:r[c]}):l(a)}),t}var $x=B.forwardRef(function(n,e){let{invert:t,position:r="bottom-right",hotkey:i=["altKey","KeyT"],expand:s,closeButton:o,className:a,offset:l,mobileOffset:c,theme:d="light",richColors:f,duration:m,style:g,visibleToasts:S=Dx,toastOptions:A,dir:C=Nw(),gap:I=Mx,loadingIcon:w,icons:E,containerAriaLabel:N="Notifications",pauseWhenPageIsHidden:M}=n,[L,v]=G.useState([]),y=G.useMemo(()=>Array.from(new Set([r].concat(L.filter(te=>te.position).map(te=>te.position)))),[L,r]),[T,P]=G.useState([]),[b,k]=G.useState(!1),[R,st]=G.useState(!1),[yn,on]=G.useState(d!=="system"?d:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),ot=G.useRef(null),Q=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),W=G.useRef(null),ee=G.useRef(!1),Ee=G.useCallback(te=>{v(re=>{var he;return(he=re.find(xe=>xe.id===te.id))!=null&&he.delete||Ht.dismiss(te.id),re.filter(({id:xe})=>xe!==te.id)})},[]);return G.useEffect(()=>Ht.subscribe(te=>{if(te.dismiss){v(re=>re.map(he=>he.id===te.id?{...he,delete:!0}:he));return}setTimeout(()=>{Kk.flushSync(()=>{v(re=>{let he=re.findIndex(xe=>xe.id===te.id);return he!==-1?[...re.slice(0,he),{...re[he],...te},...re.slice(he+1)]:[te,...re]})})})}),[]),G.useEffect(()=>{if(d!=="system"){on(d);return}if(d==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?on("dark"):on("light")),typeof window>"u")return;let te=window.matchMedia("(prefers-color-scheme: dark)");try{te.addEventListener("change",({matches:re})=>{on(re?"dark":"light")})}catch{te.addListener(({matches:he})=>{try{on(he?"dark":"light")}catch(xe){console.error(xe)}})}},[d]),G.useEffect(()=>{L.length<=1&&k(!1)},[L]),G.useEffect(()=>{let te=re=>{var he,xe;i.every(Pt=>re[Pt]||re.code===Pt)&&(k(!0),(he=ot.current)==null||he.focus()),re.code==="Escape"&&(document.activeElement===ot.current||(xe=ot.current)!=null&&xe.contains(document.activeElement))&&k(!1)};return document.addEventListener("keydown",te),()=>document.removeEventListener("keydown",te)},[i]),G.useEffect(()=>{if(ot.current)return()=>{W.current&&(W.current.focus({preventScroll:!0}),W.current=null,ee.current=!1)}},[ot.current]),G.createElement("section",{ref:e,"aria-label":`${N} ${Q}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},y.map((te,re)=>{var he;let[xe,Pt]=te.split("-");return L.length?G.createElement("ol",{key:te,dir:C==="auto"?Nw():C,tabIndex:-1,ref:ot,className:a,"data-sonner-toaster":!0,"data-theme":yn,"data-y-position":xe,"data-lifted":b&&L.length>1&&!s,"data-x-position":Pt,style:{"--front-toast-height":`${((he=T[0])==null?void 0:he.height)||0}px`,"--width":`${Lx}px`,"--gap":`${I}px`,...g,...zx(l,c)},onBlur:me=>{ee.current&&!me.currentTarget.contains(me.relatedTarget)&&(ee.current=!1,W.current&&(W.current.focus({preventScroll:!0}),W.current=null))},onFocus:me=>{me.target instanceof HTMLElement&&me.target.dataset.dismissible==="false"||ee.current||(ee.current=!0,W.current=me.relatedTarget)},onMouseEnter:()=>k(!0),onMouseMove:()=>k(!0),onMouseLeave:()=>{R||k(!1)},onDragEnd:()=>k(!1),onPointerDown:me=>{me.target instanceof HTMLElement&&me.target.dataset.dismissible==="false"||st(!0)},onPointerUp:()=>st(!1)},L.filter(me=>!me.position&&re===0||me.position===te).map((me,Ia)=>{var Ui,ur;return G.createElement(jx,{key:me.id,icons:E,index:Ia,toast:me,defaultRichColors:f,duration:(Ui=A==null?void 0:A.duration)!=null?Ui:m,className:A==null?void 0:A.className,descriptionClassName:A==null?void 0:A.descriptionClassName,invert:t,visibleToasts:S,closeButton:(ur=A==null?void 0:A.closeButton)!=null?ur:o,interacting:R,position:te,style:A==null?void 0:A.style,unstyled:A==null?void 0:A.unstyled,classNames:A==null?void 0:A.classNames,cancelButtonStyle:A==null?void 0:A.cancelButtonStyle,actionButtonStyle:A==null?void 0:A.actionButtonStyle,removeToast:Ee,toasts:L.filter(jn=>jn.position==me.position),heights:T.filter(jn=>jn.position==me.position),setHeights:P,expandByDefault:s,gap:I,loadingIcon:w,expanded:b,pauseWhenPageIsHidden:M,swipeDirections:n.swipeDirections})})):null}))});const qx=()=>$.jsx("div",{id:"toaster"}),Wx=B.createContext({}),Kx=({children:n})=>$.jsx(Wx.Provider,{value:{},children:n}),Gx=B.createContext(void 0),Hx=({children:n})=>{const[e,t]=B.useState("light");return B.useEffect(()=>{document.documentElement.className=e},[e]),$.jsx(Gx.Provider,{value:{theme:e,setTheme:t},children:n})};var Dw={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Qx=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},iS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(m=64)),r.push(t[d],t[f],t[m],t[g])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(rS(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Qx(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const f=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new Yx;const m=s<<2|a>>4;if(r.push(m),c!==64){const g=a<<4&240|c>>2;if(r.push(g),f!==64){const S=c<<6&192|f;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Yx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jx=function(n){const e=rS(n);return iS.encodeByteArray(e,!0)},Nd=function(n){return Jx(n).replace(/\./g,"")},sS=function(n){try{return iS.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Dd(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Xx(t)||(n[t]=Dd(n[t],e[t]));return n}function Xx(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zx=()=>oS().__FIREBASE_DEFAULTS__,eN=()=>{if(typeof process>"u"||typeof Dw>"u")return;const n=Dw.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},tN=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&sS(n[1]);return e&&JSON.parse(e)},qg=()=>{try{return Zx()||eN()||tN()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},aS=()=>{var n;return(n=qg())===null||n===void 0?void 0:n.config},nN=n=>{var e;return(e=qg())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iN(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Nd(JSON.stringify(t)),Nd(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sN(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function Wg(){var n;const e=(n=qg())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function oN(){return typeof window<"u"||lS()}function lS(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function aN(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function uS(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Kg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cS(){const n=ze();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function dS(){return!Wg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Hl(){try{return typeof indexedDB=="object"}catch{return!1}}function lN(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN="FirebaseError";class Bt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=uN,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ls.prototype.create)}}class Ls{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?cN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Bt(i,a,r)}}function cN(n,e){return n.replace(dN,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const dN=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vw(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function hN(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ql(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Ow(s)&&Ow(o)){if(!Ql(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Ow(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Eo(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function il(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function hS(n,e){const t=new fN(n,e);return t.subscribe.bind(t)}class fN{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");pN(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Kf),i.error===void 0&&(i.error=Kf),i.complete===void 0&&(i.complete=Kf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pN(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Kf(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(n){return n&&n._delegate?n._delegate:n}class rr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new rN;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yN(e))try{this.getOrInitializeService({instanceIdentifier:Yi})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Yi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yi){return this.instances.has(e)}getOptions(e=Yi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gN(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yi){return this.component?this.component.multipleInstances?e:Yi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gN(n){return n===Yi?void 0:n}function yN(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new mN(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg=[];var ae;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ae||(ae={}));const pS={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},_N=ae.INFO,vN={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},wN=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=vN[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wh{constructor(e){this.name=e,this._logLevel=_N,this._logHandler=wN,this._userLogHandler=null,Gg.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}function IN(n){Gg.forEach(e=>{e.setLogLevel(n)})}function EN(n,e){for(const t of Gg){let r=null;e&&e.level&&(r=pS[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&n({level:ae[s].toLowerCase(),message:a,args:o,type:i.name})}}}const TN=(n,e)=>e.some(t=>n instanceof t);let Lw,Mw;function SN(){return Lw||(Lw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AN(){return Mw||(Mw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mS=new WeakMap,um=new WeakMap,gS=new WeakMap,Gf=new WeakMap,Hg=new WeakMap;function PN(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(mi(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&mS.set(t,n)}).catch(()=>{}),Hg.set(e,n),e}function RN(n){if(um.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});um.set(n,e)}let cm={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return um.get(n);if(e==="objectStoreNames")return n.objectStoreNames||gS.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function CN(n){cm=n(cm)}function bN(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Hf(this),e,...t);return gS.set(r,e.sort?e.sort():[e]),mi(r)}:AN().includes(n)?function(...e){return n.apply(Hf(this),e),mi(mS.get(this))}:function(...e){return mi(n.apply(Hf(this),e))}}function kN(n){return typeof n=="function"?bN(n):(n instanceof IDBTransaction&&RN(n),TN(n,SN())?new Proxy(n,cm):n)}function mi(n){if(n instanceof IDBRequest)return PN(n);if(Gf.has(n))return Gf.get(n);const e=kN(n);return e!==n&&(Gf.set(n,e),Hg.set(e,n)),e}const Hf=n=>Hg.get(n);function xN(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=mi(o);return r&&o.addEventListener("upgradeneeded",l=>{r(mi(o.result),l.oldVersion,l.newVersion,mi(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const NN=["get","getKey","getAll","getAllKeys","count"],DN=["put","add","delete","clear"],Qf=new Map;function Fw(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Qf.get(e))return Qf.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=DN.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||NN.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return Qf.set(e,s),s}CN(n=>({...n,get:(e,t,r)=>Fw(e,t)||n.get(e,t,r),has:(e,t)=>!!Fw(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ON(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function ON(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vd="@firebase/app",dm="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new wh("@firebase/app"),LN="@firebase/app-compat",MN="@firebase/analytics-compat",FN="@firebase/analytics",UN="@firebase/app-check-compat",BN="@firebase/app-check",jN="@firebase/auth",zN="@firebase/auth-compat",$N="@firebase/database",qN="@firebase/data-connect",WN="@firebase/database-compat",KN="@firebase/functions",GN="@firebase/functions-compat",HN="@firebase/installations",QN="@firebase/installations-compat",YN="@firebase/messaging",JN="@firebase/messaging-compat",XN="@firebase/performance",ZN="@firebase/performance-compat",eD="@firebase/remote-config",tD="@firebase/remote-config-compat",nD="@firebase/storage",rD="@firebase/storage-compat",iD="@firebase/firestore",sD="@firebase/vertexai-preview",oD="@firebase/firestore-compat",aD="firebase",lD="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi="[DEFAULT]",uD={[Vd]:"fire-core",[LN]:"fire-core-compat",[FN]:"fire-analytics",[MN]:"fire-analytics-compat",[BN]:"fire-app-check",[UN]:"fire-app-check-compat",[jN]:"fire-auth",[zN]:"fire-auth-compat",[$N]:"fire-rtdb",[qN]:"fire-data-connect",[WN]:"fire-rtdb-compat",[KN]:"fire-fn",[GN]:"fire-fn-compat",[HN]:"fire-iid",[QN]:"fire-iid-compat",[YN]:"fire-fcm",[JN]:"fire-fcm-compat",[XN]:"fire-perf",[ZN]:"fire-perf-compat",[eD]:"fire-rc",[tD]:"fire-rc-compat",[nD]:"fire-gcs",[rD]:"fire-gcs-compat",[iD]:"fire-fst",[oD]:"fire-fst-compat",[sD]:"fire-vertex","fire-js":"fire-js",[aD]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new Map,zo=new Map,$o=new Map;function Yl(n,e){try{n.container.addComponent(e)}catch(t){Rr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function yS(n,e){n.container.addOrOverwriteComponent(e)}function Ii(n){const e=n.name;if($o.has(e))return Rr.debug(`There were multiple attempts to register component ${e}.`),!1;$o.set(e,n);for(const t of wi.values())Yl(t,n);for(const t of zo.values())Yl(t,n);return!0}function _S(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function cD(n,e,t=vi){_S(n,e).clearInstance(t)}function vS(n){return n.options!==void 0}function Ke(n){return n.settings!==void 0}function dD(){$o.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Sn=new Ls("app","Firebase",hD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wS=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sn.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD extends wS{constructor(e,t,r,i){const s=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},t),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Fn(Vd,dm,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Yg(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Sn.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=lD;function Qg(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:vi,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Sn.create("bad-app-name",{appName:String(i)});if(t||(t=aS()),!t)throw Sn.create("no-options");const s=wi.get(i);if(s){if(Ql(t,s.options)&&Ql(r,s.config))return s;throw Sn.create("duplicate-app",{appName:i})}const o=new fS(i);for(const l of $o.values())o.addComponent(l);const a=new wS(t,r,o);return wi.set(i,a),a}function pD(n,e){if(oN()&&!lS())throw Sn.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;vS(n)?t=n.options:t=n;const r=Object.assign(Object.assign({},e),t);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((d,f)=>Math.imul(31,d)+f.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Sn.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=zo.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new fS(s);for(const c of $o.values())a.addComponent(c);const l=new fD(t,e,s,a);return zo.set(s,l),l}function mD(n=vi){const e=wi.get(n);if(!e&&n===vi&&aS())return Qg();if(!e)throw Sn.create("no-app",{appName:n});return e}function gD(){return Array.from(wi.values())}async function Yg(n){let e=!1;const t=n.name;wi.has(t)?(e=!0,wi.delete(t)):zo.has(t)&&n.decRefCount()<=0&&(zo.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function Fn(n,e,t){var r;let i=(r=uD[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rr.warn(a.join(" "));return}Ii(new rr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function IS(n,e){if(n!==null&&typeof n!="function")throw Sn.create("invalid-log-argument");EN(n,e)}function ES(n){IN(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yD="firebase-heartbeat-database",_D=1,Jl="firebase-heartbeat-store";let Yf=null;function TS(){return Yf||(Yf=xN(yD,_D,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Jl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Sn.create("idb-open",{originalErrorMessage:n.message})})),Yf}async function vD(n){try{const t=(await TS()).transaction(Jl),r=await t.objectStore(Jl).get(SS(n));return await t.done,r}catch(e){if(e instanceof Bt)Rr.warn(e.message);else{const t=Sn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rr.warn(t.message)}}}async function Uw(n,e){try{const r=(await TS()).transaction(Jl,"readwrite");await r.objectStore(Jl).put(e,SS(n)),await r.done}catch(t){if(t instanceof Bt)Rr.warn(t.message);else{const r=Sn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Rr.warn(r.message)}}}function SS(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD=1024,ID=30*24*60*60*1e3;class ED{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new SD(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Bw();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ID}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Rr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Bw(),{heartbeatsToSend:r,unsentEntries:i}=TD(this._heartbeatsCache.heartbeats),s=Nd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Rr.warn(t),""}}}function Bw(){return new Date().toISOString().substring(0,10)}function TD(n,e=wD){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),jw(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),jw(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class SD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hl()?lN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await vD(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uw(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uw(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function jw(n){return Nd(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AD(n){Ii(new rr("platform-logger",e=>new VN(e),"PRIVATE")),Ii(new rr("heartbeat",e=>new ED(e),"PRIVATE")),Fn(Vd,dm,n),Fn(Vd,dm,"esm2017"),Fn("fire-js","")}AD("");const PD=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Bt,SDK_VERSION:Di,_DEFAULT_ENTRY_NAME:vi,_addComponent:Yl,_addOrOverwriteComponent:yS,_apps:wi,_clearComponents:dD,_components:$o,_getProvider:_S,_isFirebaseApp:vS,_isFirebaseServerApp:Ke,_registerComponent:Ii,_removeServiceInstance:cD,_serverApps:zo,deleteApp:Yg,getApp:mD,getApps:gD,initializeApp:Qg,initializeServerApp:pD,onLog:IS,registerVersion:Fn,setLogLevel:ES},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e,t){this._delegate=e,this.firebase=t,Yl(e,new rr("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Yg(this._delegate)))}_getService(e,t=vi){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=vi){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Yl(this._delegate,e)}_addOrOverwriteComponent(e){yS(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},zw=new Ls("app-compat","Firebase",CD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bD(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:Fn,setLogLevel:ES,onLog:IS,apps:null,SDK_VERSION:Di,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:PD}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||vi,!Vw(e,c))throw zw.create("no-app",{appName:c});return e[c]}i.App=n;function s(c,d={}){const f=Qg(c,d);if(Vw(e,f.name))return e[f.name];const m=new n(f,t);return e[f.name]=m,m}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const d=c.name,f=d.replace("-compat","");if(Ii(c)&&c.type==="PUBLIC"){const m=(g=i())=>{if(typeof g[f]!="function")throw zw.create("invalid-app-argument",{appName:d});return g[f]()};c.serviceProps!==void 0&&Dd(m,c.serviceProps),t[f]=m,n.prototype[f]=function(...g){return this._getService.bind(this,d).apply(this,c.multipleInstances?g:[])}}return c.type==="PUBLIC"?t[f]:null}function l(c,d){return d==="serverAuth"?null:d}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AS(){const n=bD(RD);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:AS,extendNamespace:e,createSubscribe:hS,ErrorFactory:Ls,deepExtend:Dd});function e(t){Dd(n,t)}return n}const kD=AS();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=new wh("@firebase/app-compat"),xD="@firebase/app-compat",ND="0.2.43";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DD(n){Fn(xD,ND,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */try{const n=oS();if(n.firebase!==void 0){$w.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=n.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&$w.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const ir=kD;DD();var VD="firebase",OD="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ir.registerVersion(VD,OD,"app-compat");function Jg(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}const Ka={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},Zs={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LD(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function PS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const MD=LD,FD=PS,RS=new Ls("auth","Firebase",PS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od=new wh("@firebase/auth");function UD(n,...e){Od.logLevel<=ae.WARN&&Od.warn(`Auth (${Di}): ${n}`,...e)}function Gc(n,...e){Od.logLevel<=ae.ERROR&&Od.error(`Auth (${Di}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(n,...e){throw Zg(n,...e)}function ut(n,...e){return Zg(n,...e)}function Xg(n,e,t){const r=Object.assign(Object.assign({},FD()),{[e]:t});return new Ls("auth","Firebase",r).create(e,{appName:n.name})}function mt(n){return Xg(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ca(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&At(n,"argument-error"),Xg(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Zg(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return RS.create(n,...e)}function z(n,e,...t){if(!n)throw Zg(e,...t)}function Yn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Gc(e),new Error(e)}function Bn(n,e){n||Yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function ey(){return qw()==="http:"||qw()==="https:"}function qw(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ey()||uS()||"connection"in navigator)?navigator.onLine:!0}function jD(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,t){this.shortDelay=e,this.longDelay=t,Bn(t>e,"Short delay should be less than long delay!"),this.isMobile=sN()||Kg()}get(){return BD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(n,e){Bn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $D=new Au(3e4,6e4);function Qe(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ye(n,e,t,r,i={}){return bS(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ua(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const c=Object.assign({method:e,headers:l},s);return aN()||(c.referrerPolicy="no-referrer"),CS.fetch()(kS(n,n.config.apiHost,t,a),c)})}async function bS(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},zD),e);try{const i=new WD(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw sl(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw sl(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw sl(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw sl(n,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Xg(n,d,c);At(n,d)}}catch(i){if(i instanceof Bt)throw i;At(n,"network-request-failed",{message:String(i)})}}async function Nr(n,e,t,r,i={}){const s=await Ye(n,e,t,r,i);return"mfaPendingCredential"in s&&At(n,"multi-factor-auth-required",{_serverResponse:s}),s}function kS(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?ty(n.config,i):`${n.config.apiScheme}://${i}`}function qD(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class WD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ut(this.auth,"network-request-failed")),$D.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function sl(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=ut(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(n){return n!==void 0&&n.getResponse!==void 0}function Kw(n){return n!==void 0&&n.enterprise!==void 0}class KD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return qD(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GD(n){return(await Ye(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function HD(n,e){return Ye(n,"GET","/v2/recaptchaConfig",Qe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QD(n,e){return Ye(n,"POST","/v1/accounts:delete",e)}async function YD(n,e){return Ye(n,"POST","/v1/accounts:update",e)}async function xS(n,e){return Ye(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function JD(n,e=!1){const t=ne(n),r=await t.getIdToken(e),i=Ih(r);z(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:wl(Jf(i.auth_time)),issuedAtTime:wl(Jf(i.iat)),expirationTime:wl(Jf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Jf(n){return Number(n)*1e3}function Ih(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Gc("JWT malformed, contained fewer than 3 sections"),null;try{const i=sS(t);return i?JSON.parse(i):(Gc("Failed to decode base64 JWT payload"),null)}catch(i){return Gc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Gw(n){const e=Ih(n);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Bt&&XD(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function XD({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=wl(this.lastLoginAt),this.creationTime=wl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zl(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Cr(n,xS(t,{idToken:r}));z(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?NS(s.providerUserInfo):[],a=tV(n.providerData,o),l=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new hm(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,f)}async function eV(n){const e=ne(n);await Zl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tV(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function NS(n){return n.map(e=>{var{providerId:t}=e,r=Jg(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nV(n,e){const t=await bS(n,{},async()=>{const r=ua({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=kS(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",CS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function rV(n,e){return Ye(n,"POST","/v2/accounts:revokeToken",Qe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){z(e.length!==0,"internal-error");const t=Gw(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await nV(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new bo;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bo,this.toJSON())}_performRefresh(){return Yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(n,e){z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class _r{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Jg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ZD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new hm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Cr(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return JD(this,e)}reload(){return eV(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new _r(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Zl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ke(this.auth.app))return Promise.reject(mt(this.auth));const e=await this.getIdToken();return await Cr(this,QD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,l,c,d;const f=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(i=t.email)!==null&&i!==void 0?i:void 0,g=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,S=(o=t.photoURL)!==null&&o!==void 0?o:void 0,A=(a=t.tenantId)!==null&&a!==void 0?a:void 0,C=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,I=(c=t.createdAt)!==null&&c!==void 0?c:void 0,w=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:E,emailVerified:N,isAnonymous:M,providerData:L,stsTokenManager:v}=t;z(E&&v,e,"internal-error");const y=bo.fromJSON(this.name,v);z(typeof E=="string",e,"internal-error"),qr(f,e.name),qr(m,e.name),z(typeof N=="boolean",e,"internal-error"),z(typeof M=="boolean",e,"internal-error"),qr(g,e.name),qr(S,e.name),qr(A,e.name),qr(C,e.name),qr(I,e.name),qr(w,e.name);const T=new _r({uid:E,auth:e,email:m,emailVerified:N,displayName:f,isAnonymous:M,photoURL:S,phoneNumber:g,tenantId:A,stsTokenManager:y,createdAt:I,lastLoginAt:w});return L&&Array.isArray(L)&&(T.providerData=L.map(P=>Object.assign({},P))),C&&(T._redirectEventId=C),T}static async _fromIdTokenResponse(e,t,r=!1){const i=new bo;i.updateFromServerResponse(t);const s=new _r({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Zl(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?NS(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new bo;a.updateFromIdToken(r);const l=new _r({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new hm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=new Map;function dn(n){Bn(n instanceof Function,"Expected a class definition");let e=Hw.get(n);return e?(Bn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Hw.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}DS.type="NONE";const qo=DS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(n,e,t){return`firebase:${n}:${e}:${t}`}class ko{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=hs(this.userKey,i.apiKey,s),this.fullPersistenceKey=hs("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_r._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ko(dn(qo),e,r);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||dn(qo);const o=hs(r,e.config.apiKey,e.name);let a=null;for(const c of t)try{const d=await c._get(o);if(d){const f=_r._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ko(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ko(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(MS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(VS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(FS(e))return"Blackberry";if(US(e))return"Webos";if(OS(e))return"Safari";if((e.includes("chrome/")||LS(e))&&!e.includes("edge/"))return"Chrome";if(Pu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function VS(n=ze()){return/firefox\//i.test(n)}function OS(n=ze()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function LS(n=ze()){return/crios\//i.test(n)}function MS(n=ze()){return/iemobile/i.test(n)}function Pu(n=ze()){return/android/i.test(n)}function FS(n=ze()){return/blackberry/i.test(n)}function US(n=ze()){return/webos/i.test(n)}function Ru(n=ze()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function iV(n=ze()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function sV(n=ze()){var e;return Ru(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function oV(){return cS()&&document.documentMode===10}function BS(n=ze()){return Ru(n)||Pu(n)||US(n)||FS(n)||/windows phone/i.test(n)||MS(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(n,e=[]){let t;switch(n){case"Browser":t=Qw(ze());break;case"Worker":t=`${Qw(ze())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Di}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aV{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lV(n,e={}){return Ye(n,"GET","/v2/passwordPolicy",Qe(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uV=6;class cV{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:uV,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dV{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yw(this),this.idTokenSubscription=new Yw(this),this.beforeStateQueue=new aV(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=RS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=dn(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ko.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await xS(this,{idToken:e}),r=await _r._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ke(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Zl(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ke(this.app))return Promise.reject(mt(this));const t=e?ne(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ke(this.app)?Promise.reject(mt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ke(this.app)?Promise.reject(mt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lV(this),t=new cV(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ls("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await rV(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&dn(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await ko.create(this,[dn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&UD(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ge(n){return ne(n)}class Yw{constructor(e){this.auth=e,this.observer=null,this.addObserver=hS(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hV(n){Cu=n}function ny(n){return Cu.loadJS(n)}function fV(){return Cu.recaptchaV2Script}function pV(){return Cu.recaptchaEnterpriseScript}function mV(){return Cu.gapiScript}function zS(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const gV="recaptcha-enterprise",yV="NO_RECAPTCHA";class _V{constructor(e){this.type=gV,this.auth=Ge(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{HD(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new KD(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Kw(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(yV)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&Kw(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=pV();l.length!==0&&(l+=a),ny(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Jw(n,e,t,r=!1){const i=new _V(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function eu(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Jw(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Jw(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(s)})}function vV(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(dn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function wV(n,e,t){const r=Ge(n);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=$S(e),{host:o,port:a}=IV(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||EV()}function $S(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function IV(n){const e=$S(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Xw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Xw(o)}}}function Xw(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function EV(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Yn("not implemented")}_getIdTokenResponse(e){return Yn("not implemented")}_linkToIdToken(e,t){return Yn("not implemented")}_getReauthenticationResolver(e){return Yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qS(n,e){return Ye(n,"POST","/v1/accounts:resetPassword",Qe(n,e))}async function TV(n,e){return Ye(n,"POST","/v1/accounts:update",e)}async function SV(n,e){return Ye(n,"POST","/v1/accounts:signUp",e)}async function AV(n,e){return Ye(n,"POST","/v1/accounts:update",Qe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PV(n,e){return Nr(n,"POST","/v1/accounts:signInWithPassword",Qe(n,e))}async function Eh(n,e){return Ye(n,"POST","/v1/accounts:sendOobCode",Qe(n,e))}async function RV(n,e){return Eh(n,e)}async function CV(n,e){return Eh(n,e)}async function bV(n,e){return Eh(n,e)}async function kV(n,e){return Eh(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xV(n,e){return Nr(n,"POST","/v1/accounts:signInWithEmailLink",Qe(n,e))}async function NV(n,e){return Nr(n,"POST","/v1/accounts:signInWithEmailLink",Qe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu extends da{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new tu(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new tu(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return eu(e,t,"signInWithPassword",PV);case"emailLink":return xV(e,{email:this._email,oobCode:this._password});default:At(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return eu(e,r,"signUpPassword",SV);case"emailLink":return NV(e,{idToken:t,email:this._email,oobCode:this._password});default:At(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Er(n,e){return Nr(n,"POST","/v1/accounts:signInWithIdp",Qe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DV="http://localhost";class sr extends da{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):At("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Jg(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new sr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Er(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Er(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Er(e,t)}buildRequest(){const e={requestUri:DV,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ua(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VV(n,e){return Ye(n,"POST","/v1/accounts:sendVerificationCode",Qe(n,e))}async function OV(n,e){return Nr(n,"POST","/v1/accounts:signInWithPhoneNumber",Qe(n,e))}async function LV(n,e){const t=await Nr(n,"POST","/v1/accounts:signInWithPhoneNumber",Qe(n,e));if(t.temporaryProof)throw sl(n,"account-exists-with-different-credential",t);return t}const MV={USER_NOT_FOUND:"user-not-found"};async function FV(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Nr(n,"POST","/v1/accounts:signInWithPhoneNumber",Qe(n,t),MV)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends da{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new fs({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new fs({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return OV(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return LV(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return FV(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new fs({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UV(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BV(n){const e=Eo(il(n)).link,t=e?Eo(il(e)).deep_link_id:null,r=Eo(il(n)).deep_link_id;return(r?Eo(il(r)).link:null)||r||t||e||n}class Th{constructor(e){var t,r,i,s,o,a;const l=Eo(il(e)),c=(t=l.apiKey)!==null&&t!==void 0?t:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,f=UV((i=l.mode)!==null&&i!==void 0?i:null);z(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=BV(e);try{return new Th(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(){this.providerId=Vi.PROVIDER_ID}static credential(e,t){return tu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Th.parseLink(t);return z(r,"argument-error"),tu._fromEmailAndCode(e,r.code,r.tenantId)}}Vi.PROVIDER_ID="password";Vi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha extends Dr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class xo extends ha{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return z("providerId"in t&&"signInMethod"in t,"argument-error"),sr._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return z(e.idToken||e.accessToken,"argument-error"),sr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return xo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return xo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new xo(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends ha{constructor(){super("facebook.com")}static credential(e){return sr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends ha{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return sr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Gn.credential(t,r)}catch{return null}}}Gn.GOOGLE_SIGN_IN_METHOD="google.com";Gn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends ha{constructor(){super("github.com")}static credential(e){return sr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.GITHUB_SIGN_IN_METHOD="github.com";Hn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jV="http://localhost";class Wo extends da{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Er(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Er(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Er(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new Wo(r,s)}static _create(e,t){return new Wo(e,t)}buildRequest(){return{requestUri:jV,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zV="saml.";class Ld extends Dr{constructor(e){z(e.startsWith(zV),"argument-error"),super(e)}static credentialFromResult(e){return Ld.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ld.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Wo.fromJSON(e);return z(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return Wo._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends ha{constructor(){super("twitter.com")}static credential(e,t){return sr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Qn.credential(t,r)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WS(n,e){return Nr(n,"POST","/v1/accounts:signUp",Qe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await _r._fromIdTokenResponse(e,r,i),o=Zw(r);return new Rn({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Zw(r);return new Rn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Zw(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $V(n){var e;if(Ke(n.app))return Promise.reject(mt(n));const t=Ge(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Rn({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await WS(t,{returnSecureToken:!0}),i=await Rn._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md extends Bt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Md.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Md(e,t,r,i)}}function KS(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Md._fromErrorAndOperation(n,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qV(n,e){const t=ne(n);await Sh(!0,t,e);const{providerUserInfo:r}=await YD(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=GS(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function ry(n,e,t=!1){const r=await Cr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Rn._forOperation(n,"link",r)}async function Sh(n,e,t){await Zl(e);const r=GS(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";z(r.has(t)===n,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HS(n,e,t=!1){const{auth:r}=n;if(Ke(r.app))return Promise.reject(mt(r));const i="reauthenticate";try{const s=await Cr(n,KS(r,i,e,n),t);z(s.idToken,r,"internal-error");const o=Ih(s.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(n.uid===a,r,"user-mismatch"),Rn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&At(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QS(n,e,t=!1){if(Ke(n.app))return Promise.reject(mt(n));const r="signIn",i=await KS(n,r,e),s=await Rn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Ah(n,e){return QS(Ge(n),e)}async function YS(n,e){const t=ne(n);return await Sh(!1,t,e.providerId),ry(t,e)}async function JS(n,e){return HS(ne(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WV(n,e){return Nr(n,"POST","/v1/accounts:signInWithCustomToken",Qe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KV(n,e){if(Ke(n.app))return Promise.reject(mt(n));const t=Ge(n),r=await WV(t,{token:e,returnSecureToken:!0}),i=await Rn._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?iy._fromServerResponse(e,t):"totpInfo"in t?sy._fromServerResponse(e,t):At(e,"internal-error")}}class iy extends bu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new iy(t)}}class sy extends bu{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new sy(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(n,e,t){var r;z(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),z(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(z(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(z(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oy(n){const e=Ge(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function GV(n,e,t){const r=Ge(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Ph(r,i,t),await eu(r,i,"getOobCode",CV)}async function HV(n,e,t){await qS(ne(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&oy(n),r})}async function QV(n,e){await AV(ne(n),{oobCode:e})}async function XS(n,e){const t=ne(n),r=await qS(t,{oobCode:e}),i=r.requestType;switch(z(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":z(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":z(r.mfaInfo,t,"internal-error");default:z(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=bu._fromServerResponse(Ge(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function YV(n,e){const{data:t}=await XS(ne(n),e);return t.email}async function JV(n,e,t){if(Ke(n.app))return Promise.reject(mt(n));const r=Ge(n),o=await eu(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",WS).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&oy(n),l}),a=await Rn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function XV(n,e,t){return Ke(n.app)?Promise.reject(mt(n)):Ah(ne(n),Vi.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&oy(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZV(n,e,t){const r=Ge(n),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){z(a.handleCodeInApp,r,"argument-error"),a&&Ph(r,o,a)}s(i,t),await eu(r,i,"getOobCode",bV)}function eO(n,e){const t=Th.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function tO(n,e,t){if(Ke(n.app))return Promise.reject(mt(n));const r=ne(n),i=Vi.credentialWithLink(e,t||Xl());return z(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Ah(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nO(n,e){return Ye(n,"POST","/v1/accounts:createAuthUri",Qe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rO(n,e){const t=ey()?Xl():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await nO(ne(n),r);return i||[]}async function iO(n,e){const t=ne(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&Ph(t.auth,i,e);const{email:s}=await RV(t.auth,i);s!==n.email&&await n.reload()}async function sO(n,e,t){const r=ne(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&Ph(r.auth,s,t);const{email:o}=await kV(r.auth,s);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oO(n,e){return Ye(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aO(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=ne(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Cr(r,oO(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function lO(n,e){const t=ne(n);return Ke(t.auth.app)?Promise.reject(mt(t.auth)):ZS(t,e,null)}function uO(n,e){return ZS(ne(n),null,e)}async function ZS(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await Cr(n,TV(r,s));await n._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cO(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=Ih(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new No(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new dO(s,i);case"github.com":return new hO(s,i);case"google.com":return new fO(s,i);case"twitter.com":return new pO(s,i,n.screenName||null);case"custom":case"anonymous":return new No(s,null);default:return new No(s,r,i)}}class No{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class eA extends No{constructor(e,t,r,i){super(e,t,r),this.username=i}}class dO extends No{constructor(e,t){super(e,"facebook.com",t)}}class hO extends eA{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class fO extends No{constructor(e,t){super(e,"google.com",t)}}class pO extends eA{constructor(e,t,r){super(e,"twitter.com",t,r)}}function mO(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:cO(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new as("enroll",e,t)}static _fromMfaPendingCredential(e){return new as("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return as._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return as._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=Ge(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>bu._fromServerResponse(r,a));z(i.mfaPendingCredential,r,"internal-error");const o=as._fromMfaPendingCredential(i.mfaPendingCredential);return new ay(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(t.operationType){case"signIn":const d=await Rn._fromIdTokenResponse(r,t.operationType,c);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return z(t.user,r,"internal-error"),Rn._forOperation(t.user,t.operationType,c);default:At(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function gO(n,e){var t;const r=ne(n),i=e;return z(e.customData.operationType,r,"argument-error"),z((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),ay._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yO(n,e){return Ye(n,"POST","/v2/accounts/mfaEnrollment:start",Qe(n,e))}function _O(n,e){return Ye(n,"POST","/v2/accounts/mfaEnrollment:finalize",Qe(n,e))}function vO(n,e){return Ye(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Qe(n,e))}class ly{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>bu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new ly(e)}async getSession(){return as._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,i=await this.getSession(),s=await Cr(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Cr(this.user,vO(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Xf=new WeakMap;function wO(n){const e=ne(n);return Xf.has(e)||Xf.set(e,ly._fromUser(e)),Xf.get(e)}const Fd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Fd,"1"),this.storage.removeItem(Fd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO=1e3,EO=10;class nA extends tA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=BS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);oV()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,EO):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},IO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}nA.type="LOCAL";const uy=nA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA extends tA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}rA.type="SESSION";const ws=rA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TO(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Rh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,s)),l=await TO(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=ku("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return window}function AO(n){nt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function PO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function RO(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function CO(){return cy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA="firebaseLocalStorageDb",bO=1,Ud="firebaseLocalStorage",sA="fbase_key";class xu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ch(n,e){return n.transaction([Ud],e?"readwrite":"readonly").objectStore(Ud)}function kO(){const n=indexedDB.deleteDatabase(iA);return new xu(n).toPromise()}function fm(){const n=indexedDB.open(iA,bO);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ud,{keyPath:sA})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ud)?e(r):(r.close(),await kO(),e(await fm()))})})}async function eI(n,e,t){const r=Ch(n,!0).put({[sA]:e,value:t});return new xu(r).toPromise()}async function xO(n,e){const t=Ch(n,!1).get(e),r=await new xu(t).toPromise();return r===void 0?null:r.value}function tI(n,e){const t=Ch(n,!0).delete(e);return new xu(t).toPromise()}const NO=800,DO=3;class oA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>DO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rh._getInstance(CO()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await PO(),!this.activeServiceWorker)return;this.sender=new SO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||RO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fm();return await eI(e,Fd,"1"),await tI(e,Fd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>eI(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>xO(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>tI(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ch(i,!1).getAll();return new xu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),NO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oA.type="LOCAL";const nu=oA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VO(n,e){return Ye(n,"POST","/v2/accounts/mfaSignIn:start",Qe(n,e))}function OO(n,e){return Ye(n,"POST","/v2/accounts/mfaSignIn:finalize",Qe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LO=500,MO=6e4,Cc=1e12;class FO{constructor(e){this.auth=e,this.counter=Cc,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new UO(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||Cc;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||Cc;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||Cc;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class UO{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;z(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=BO(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},MO)},LO))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function BO(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf=zS("rcb"),jO=new Au(3e4,6e4);class zO{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=nt().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return z($O(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Ww(nt().grecaptcha)?Promise.resolve(nt().grecaptcha):new Promise((r,i)=>{const s=nt().setTimeout(()=>{i(ut(e,"network-request-failed"))},jO.get());nt()[Zf]=()=>{nt().clearTimeout(s),delete nt()[Zf];const a=nt().grecaptcha;if(!a||!Ww(a)){i(ut(e,"internal-error"));return}const l=a.render;a.render=(c,d)=>{const f=l(c,d);return this.counter++,f},this.hostLanguage=t,r(a)};const o=`${fV()}?${ua({onload:Zf,render:"explicit",hl:t})}`;ny(o).catch(()=>{clearTimeout(s),i(ut(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=nt().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function $O(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class qO{async load(e){return new FO(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA="recaptcha",WO={theme:"light",type:"image"};let KO=class{constructor(e,t,r=Object.assign({},WO)){this.parameters=r,this.type=aA,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ge(e),this.isInvisible=this.parameters.size==="invisible",z(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;z(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new qO:new zO,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){z(!this.parameters.sitekey,this.auth,"argument-error"),z(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),z(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=nt()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){z(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){z(ey()&&!cy(),this.auth,"internal-error"),await GO(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await GD(this.auth);z(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return z(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function GO(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=fs._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function HO(n,e,t){if(Ke(n.app))return Promise.reject(mt(n));const r=Ge(n),i=await bh(r,e,ne(t));return new dy(i,s=>Ah(r,s))}async function QO(n,e,t){const r=ne(n);await Sh(!1,r,"phone");const i=await bh(r.auth,e,ne(t));return new dy(i,s=>YS(r,s))}async function YO(n,e,t){const r=ne(n);if(Ke(r.auth.app))return Promise.reject(mt(r.auth));const i=await bh(r.auth,e,ne(t));return new dy(i,s=>JS(r,s))}async function bh(n,e,t){var r;const i=await t.verify();try{z(typeof i=="string",n,"argument-error"),z(t.type===aA,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return z(o.type==="enroll",n,"internal-error"),(await yO(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{z(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return z(a,n,"missing-multi-factor-info"),(await VO(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await VV(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function JO(n,e){const t=ne(n);if(Ke(t.auth.app))return Promise.reject(mt(t.auth));await ry(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Is=class Hc{constructor(e){this.providerId=Hc.PROVIDER_ID,this.auth=Ge(e)}verifyPhoneNumber(e,t){return bh(this.auth,e,ne(t))}static credential(e,t){return fs._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Hc.credentialFromTaggedObject(t)}static credentialFromError(e){return Hc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?fs._fromTokenResponse(t,r):null}};Is.PROVIDER_ID="phone";Is.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(n,e){return e?dn(e):(z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy extends da{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Er(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Er(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Er(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function XO(n){return QS(n.auth,new hy(n),n.bypassAuthState)}function ZO(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),HS(t,new hy(n),n.bypassAuthState)}async function eL(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),ry(t,new hy(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return XO;case"linkViaPopup":case"linkViaRedirect":return eL;case"reauthViaPopup":case"reauthViaRedirect":return ZO;default:At(this.auth,"internal-error")}}resolve(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tL=new Au(2e3,1e4);async function nL(n,e,t){if(Ke(n.app))return Promise.reject(ut(n,"operation-not-supported-in-this-environment"));const r=Ge(n);ca(n,e,Dr);const i=Ms(r,t);return new vr(r,"signInViaPopup",e,i).executeNotNull()}async function rL(n,e,t){const r=ne(n);if(Ke(r.auth.app))return Promise.reject(ut(r.auth,"operation-not-supported-in-this-environment"));ca(r.auth,e,Dr);const i=Ms(r.auth,t);return new vr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function iL(n,e,t){const r=ne(n);ca(r.auth,e,Dr);const i=Ms(r.auth,t);return new vr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class vr extends lA{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,vr.currentPopupAction&&vr.currentPopupAction.cancel(),vr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Bn(this.filter.length===1,"Popup operations only handle one event");const e=ku();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ut(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tL.get())};e()}}vr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sL="pendingRedirect",Il=new Map;class oL extends lA{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Il.get(this.auth._key());if(!e){try{const r=await aL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Il.set(this.auth._key(),e)}return this.bypassAuthState||Il.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aL(n,e){const t=cA(e),r=uA(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function fy(n,e){return uA(n)._set(cA(e),"true")}function lL(){Il.clear()}function py(n,e){Il.set(n._key(),e)}function uA(n){return dn(n._redirectPersistence)}function cA(n){return hs(sL,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uL(n,e,t){return cL(n,e,t)}async function cL(n,e,t){if(Ke(n.app))return Promise.reject(mt(n));const r=Ge(n);ca(n,e,Dr),await r._initializationPromise;const i=Ms(r,t);return await fy(i,r),i._openRedirect(r,e,"signInViaRedirect")}function dL(n,e,t){return hL(n,e,t)}async function hL(n,e,t){const r=ne(n);if(ca(r.auth,e,Dr),Ke(r.auth.app))return Promise.reject(mt(r.auth));await r.auth._initializationPromise;const i=Ms(r.auth,t);await fy(i,r.auth);const s=await dA(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function fL(n,e,t){return pL(n,e,t)}async function pL(n,e,t){const r=ne(n);ca(r.auth,e,Dr),await r.auth._initializationPromise;const i=Ms(r.auth,t);await Sh(!1,r,e.providerId),await fy(i,r.auth);const s=await dA(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function mL(n,e){return await Ge(n)._initializationPromise,kh(n,e,!1)}async function kh(n,e,t=!1){if(Ke(n.app))return Promise.reject(mt(n));const r=Ge(n),i=Ms(r,e),o=await new oL(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function dA(n){const e=ku(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gL=10*60*1e3;class hA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yL(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!fA(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ut(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gL&&this.cachedEventUids.clear(),this.cachedEventUids.has(nI(e))}saveEventToCache(e){this.cachedEventUids.add(nI(e)),this.lastProcessedEventTime=Date.now()}}function nI(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function fA({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yL(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fA(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pA(n,e={}){return Ye(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _L=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vL=/^https?/;async function wL(n){if(n.config.emulator)return;const{authorizedDomains:e}=await pA(n);for(const t of e)try{if(IL(t))return}catch{}At(n,"unauthorized-domain")}function IL(n){const e=Xl(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!vL.test(t))return!1;if(_L.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EL=new Au(3e4,6e4);function rI(){const n=nt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function TL(n){return new Promise((e,t)=>{var r,i,s;function o(){rI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rI(),t(ut(n,"network-request-failed"))},timeout:EL.get()})}if(!((i=(r=nt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=nt().gapi)===null||s===void 0)&&s.load)o();else{const a=zS("iframefcb");return nt()[a]=()=>{gapi.load?o():t(ut(n,"network-request-failed"))},ny(`${mV()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Qc=null,e})}let Qc=null;function SL(n){return Qc=Qc||TL(n),Qc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AL=new Au(5e3,15e3),PL="__/auth/iframe",RL="emulator/auth/iframe",CL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kL(n){const e=n.config;z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ty(e,RL):`https://${n.config.authDomain}/${PL}`,r={apiKey:e.apiKey,appName:n.name,v:Di},i=bL.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${ua(r).slice(1)}`}async function xL(n){const e=await SL(n),t=nt().gapi;return z(t,n,"internal-error"),e.open({where:document.body,url:kL(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ut(n,"network-request-failed"),a=nt().setTimeout(()=>{s(o)},AL.get());function l(){nt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DL=500,VL=600,OL="_blank",LL="http://localhost";class iI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ML(n,e,t,r=DL,i=VL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},NL),{width:r.toString(),height:i.toString(),top:s,left:o}),c=ze().toLowerCase();t&&(a=LS(c)?OL:t),VS(c)&&(e=e||LL,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[g,S])=>`${m}${g}=${S},`,"");if(sV(c)&&a!=="_self")return FL(e||"",a),new iI(null);const f=window.open(e||"",a,d);z(f,n,"popup-blocked");try{f.focus()}catch{}return new iI(f)}function FL(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UL="__/auth/handler",BL="emulator/auth/handler",jL=encodeURIComponent("fac");async function pm(n,e,t,r,i,s){z(n.config.authDomain,n,"auth-domain-config-required"),z(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Di,eventId:i};if(e instanceof Dr){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",hN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(s||{}))o[d]=f}if(e instanceof ha){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await n._getAppCheckToken(),c=l?`#${jL}=${encodeURIComponent(l)}`:"";return`${zL(n)}?${ua(a).slice(1)}${c}`}function zL({config:n}){return n.emulator?ty(n,BL):`https://${n.authDomain}/${UL}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep="webStorageSupport";class $L{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ws,this._completeRedirectFn=kh,this._overrideRedirectResult=py}async _openPopup(e,t,r,i){var s;Bn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await pm(e,t,r,Xl(),i);return ML(e,o,ku())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await pm(e,t,r,Xl(),i);return AO(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Bn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await xL(e),r=new hA(e);return t.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ep,{type:ep},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ep];o!==void 0&&t(!!o),At(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=wL(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return BS()||OS()||Ru()}}const qL=$L;class WL{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Yn("unexpected MultiFactorSessionType")}}}class my extends WL{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new my(e)}_finalizeEnroll(e,t,r){return _O(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return OO(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class mA{constructor(){}static assertion(e){return my._fromCredential(e)}}mA.FACTOR_ID="phone";var sI="@firebase/auth",oI="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GL(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function HL(n){Ii(new rr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jS(n)},c=new dV(r,i,s,l);return vV(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ii(new rr("auth-internal",e=>{const t=Ge(e.getProvider("auth").getImmediate());return(r=>new KL(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fn(sI,oI,GL(n)),Fn(sI,oI,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QL=5*60;nN("authIdTokenMaxAge");function YL(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}hV({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=ut("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",YL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});HL("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JL=2e3;async function XL(n,e,t){var r;const{BuildInfo:i}=Es();Bn(e.sessionId,"AuthEvent did not contain a session ID");const s=await r2(e.sessionId),o={};return Ru()?o.ibi=i.packageName:Pu()?o.apn=i.packageName:At(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,pm(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function ZL(n){const{BuildInfo:e}=Es(),t={};Ru()?t.iosBundleId=e.packageName:Pu()?t.androidPackageName=e.packageName:At(n,"operation-not-supported-in-this-environment"),await pA(n,t)}function e2(n){const{cordova:e}=Es();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,iV()?"_blank":"_system","location=yes"),t(i)})})}async function t2(n,e,t){const{cordova:r}=Es();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var f;s();const m=(f=r.plugins.browsertab)===null||f===void 0?void 0:f.close;typeof m=="function"&&m(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function c(){a||(a=window.setTimeout(()=>{o(ut(n,"redirect-cancelled-by-user"))},JL))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(l),document.addEventListener("resume",c,!1),Pu()&&document.addEventListener("visibilitychange",d,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",d,!1),a&&window.clearTimeout(a)}})}finally{i()}}function n2(n){var e,t,r,i,s,o,a,l,c,d;const f=Es();z(typeof((e=f==null?void 0:f.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),z(typeof((t=f==null?void 0:f.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),z(typeof((s=(i=(r=f==null?void 0:f.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),z(typeof((l=(a=(o=f==null?void 0:f.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),z(typeof((d=(c=f==null?void 0:f.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function r2(n){const e=i2(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function i2(n){if(Bn(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s2=20;class o2 extends hA{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function a2(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:c2(),postBody:null,tenantId:n.tenantId,error:ut(n,"no-auth-event")}}function l2(n,e){return mm()._set(gm(n),e)}async function aI(n){const e=await mm()._get(gm(n));return e&&await mm()._remove(gm(n)),e}function u2(n,e){var t,r;const i=h2(e);if(i.includes("/__/auth/callback")){const s=Yc(i),o=s.firebaseError?d2(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],l=a?ut(a):null;return l?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function c2(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<s2;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function mm(){return dn(uy)}function gm(n){return hs("authEvent",n.config.apiKey,n.name)}function d2(n){try{return JSON.parse(n)}catch{return null}}function h2(n){const e=Yc(n),t=e.link?decodeURIComponent(e.link):void 0,r=Yc(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Yc(i).link||i||r||t||n}function Yc(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return Eo(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2=500;class p2{constructor(){this._redirectPersistence=ws,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=kh,this._overrideRedirectResult=py}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new o2(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){At(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){n2(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),lL(),await this._originValidation(e);const o=a2(e,r,i);await l2(e,o);const a=await XL(e,o,t),l=await e2(a);return t2(e,s,l)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ZL(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Es(),o=setTimeout(async()=>{await aI(e),t.onEvent(lI())},f2),a=async d=>{clearTimeout(o);const f=await aI(e);let m=null;f&&(d!=null&&d.url)&&(m=u2(f,d.url)),t.onEvent(m||lI())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,c=`${s.packageName.toLowerCase()}://`;Es().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(c)&&a({url:d}),typeof l=="function")try{l(d)}catch(f){console.error(f)}}}}const m2=p2;function lI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ut("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g2(n,e){Ge(n)._logFramework(e)}var y2="@firebase/auth-compat",_2="0.5.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v2=1e3;function El(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function w2(){return El()==="http:"||El()==="https:"}function gA(n=ze()){return!!((El()==="file:"||El()==="ionic:"||El()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function I2(){return Kg()||Wg()}function E2(){return cS()&&(document==null?void 0:document.documentMode)===11}function T2(n=ze()){return/Edge\/\d+/.test(n)}function S2(n=ze()){return E2()||T2(n)}function yA(){try{const n=self.localStorage,e=ku();if(n)return n.setItem(e,"1"),n.removeItem(e),S2()?Hl():!0}catch{return gy()&&Hl()}return!1}function gy(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function tp(){return(w2()||uS()||gA())&&!I2()&&yA()&&!gy()}function _A(){return gA()&&typeof document<"u"}async function A2(){return _A()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},v2);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function P2(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un={LOCAL:"local",NONE:"none",SESSION:"session"},Ga=z,vA="persistence";function R2(n,e){if(Ga(Object.values(un).includes(e),n,"invalid-persistence-type"),Kg()){Ga(e!==un.SESSION,n,"unsupported-persistence-type");return}if(Wg()){Ga(e===un.NONE,n,"unsupported-persistence-type");return}if(gy()){Ga(e===un.NONE||e===un.LOCAL&&Hl(),n,"unsupported-persistence-type");return}Ga(e===un.NONE||yA(),n,"unsupported-persistence-type")}async function ym(n){await n._initializationPromise;const e=wA(),t=hs(vA,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function C2(n,e){const t=wA();if(!t)return[];const r=hs(vA,n,e);switch(t.getItem(r)){case un.NONE:return[qo];case un.LOCAL:return[nu,ws];case un.SESSION:return[ws];default:return[]}}function wA(){var n;try{return((n=P2())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b2=z;class ii{constructor(){this.browserResolver=dn(qL),this.cordovaResolver=dn(m2),this.underlyingResolver=null,this._redirectPersistence=ws,this._completeRedirectFn=kh,this._overrideRedirectResult=py}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return _A()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return b2(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await A2();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IA(n){return n.unwrap()}function k2(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x2(n){return EA(n)}function N2(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new D2(n,gO(n,e))}else if(r){const i=EA(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function EA(n){const{_tokenResponse:e}=n instanceof Bt?n.customData:n;if(!e)return null;if(!(n instanceof Bt)&&"temporaryProof"in e&&"phoneNumber"in e)return Is.credentialFromResult(n);const t=e.providerId;if(!t||t===Ka.PASSWORD)return null;let r;switch(t){case Ka.GOOGLE:r=Gn;break;case Ka.FACEBOOK:r=Kn;break;case Ka.GITHUB:r=Hn;break;case Ka.TWITTER:r=Qn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?Wo._create(t,a):sr._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new xo(t).credential({idToken:i,accessToken:s,rawNonce:l})}return n instanceof Bt?r.credentialFromError(n):r.credentialFromResult(n)}function Qt(n,e){return e.catch(t=>{throw t instanceof Bt&&N2(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:x2(t),additionalUserInfo:mO(t),user:xh.getOrCreate(i)}})}async function _m(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>Qt(n,t.confirm(r))}}class D2{constructor(e,t){this.resolver=t,this.auth=k2(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Qt(IA(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xh=class ol{constructor(e){this._delegate=e,this.multiFactor=wO(e)}static getOrCreate(e){return ol.USER_MAP.has(e)||ol.USER_MAP.set(e,new ol(e)),ol.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Qt(this.auth,YS(this._delegate,e))}async linkWithPhoneNumber(e,t){return _m(this.auth,QO(this._delegate,e,t))}async linkWithPopup(e){return Qt(this.auth,iL(this._delegate,e,ii))}async linkWithRedirect(e){return await ym(Ge(this.auth)),fL(this._delegate,e,ii)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Qt(this.auth,JS(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return _m(this.auth,YO(this._delegate,e,t))}reauthenticateWithPopup(e){return Qt(this.auth,rL(this._delegate,e,ii))}async reauthenticateWithRedirect(e){return await ym(Ge(this.auth)),dL(this._delegate,e,ii)}sendEmailVerification(e){return iO(this._delegate,e)}async unlink(e){return await qV(this._delegate,e),this}updateEmail(e){return lO(this._delegate,e)}updatePassword(e){return uO(this._delegate,e)}updatePhoneNumber(e){return JO(this._delegate,e)}updateProfile(e){return aO(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return sO(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};xh.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha=z;class vm{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Ha(r,"invalid-api-key",{appName:e.name}),Ha(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?ii:void 0;this._delegate=t.initialize({options:{persistence:V2(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(MD),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?xh.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){wV(this._delegate,e,t)}applyActionCode(e){return QV(this._delegate,e)}checkActionCode(e){return XS(this._delegate,e)}confirmPasswordReset(e,t){return HV(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Qt(this._delegate,JV(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return rO(this._delegate,e)}isSignInWithEmailLink(e){return eO(this._delegate,e)}async getRedirectResult(){Ha(tp(),this._delegate,"operation-not-supported-in-this-environment");const e=await mL(this._delegate,ii);return e?Qt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){g2(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=uI(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=uI(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return ZV(this._delegate,e,t)}sendPasswordResetEmail(e,t){return GV(this._delegate,e,t||void 0)}async setPersistence(e){R2(this._delegate,e);let t;switch(e){case un.SESSION:t=ws;break;case un.LOCAL:t=await dn(nu)._isAvailable()?nu:uy;break;case un.NONE:t=qo;break;default:return At("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Qt(this._delegate,$V(this._delegate))}signInWithCredential(e){return Qt(this._delegate,Ah(this._delegate,e))}signInWithCustomToken(e){return Qt(this._delegate,KV(this._delegate,e))}signInWithEmailAndPassword(e,t){return Qt(this._delegate,XV(this._delegate,e,t))}signInWithEmailLink(e,t){return Qt(this._delegate,tO(this._delegate,e,t))}signInWithPhoneNumber(e,t){return _m(this._delegate,HO(this._delegate,e,t))}async signInWithPopup(e){return Ha(tp(),this._delegate,"operation-not-supported-in-this-environment"),Qt(this._delegate,nL(this._delegate,e,ii))}async signInWithRedirect(e){return Ha(tp(),this._delegate,"operation-not-supported-in-this-environment"),await ym(this._delegate),uL(this._delegate,e,ii)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return YV(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}vm.Persistence=un;function uI(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&xh.getOrCreate(o)),error:e,complete:t}}function V2(n,e){const t=C2(n,e);if(typeof self<"u"&&!t.includes(nu)&&t.push(nu),typeof window<"u")for(const r of[uy,ws])t.includes(r)||t.push(r);return t.includes(qo)||t.push(qo),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(){this.providerId="phone",this._delegate=new Is(IA(ir.auth()))}static credential(e,t){return Is.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}yy.PHONE_SIGN_IN_METHOD=Is.PHONE_SIGN_IN_METHOD;yy.PROVIDER_ID=Is.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2=z;class L2{constructor(e,t,r=ir.app()){var i;O2((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new KO(r.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2="auth-compat";function F2(n){n.INTERNAL.registerComponent(new rr(M2,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new vm(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Zs.EMAIL_SIGNIN,PASSWORD_RESET:Zs.PASSWORD_RESET,RECOVER_EMAIL:Zs.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Zs.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Zs.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Zs.VERIFY_EMAIL}},EmailAuthProvider:Vi,FacebookAuthProvider:Kn,GithubAuthProvider:Hn,GoogleAuthProvider:Gn,OAuthProvider:xo,SAMLAuthProvider:Ld,PhoneAuthProvider:yy,PhoneMultiFactorGenerator:mA,RecaptchaVerifier:L2,TwitterAuthProvider:Qn,Auth:vm,AuthCredential:da,Error:Bt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(y2,_2)}F2(ir);var cI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ps,TA;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function T(){}T.prototype=y.prototype,v.D=y.prototype,v.prototype=new T,v.prototype.constructor=v,v.C=function(P,b,k){for(var R=Array(arguments.length-2),st=2;st<arguments.length;st++)R[st-2]=arguments[st];return y.prototype[b].apply(P,R)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,y,T){T||(T=0);var P=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)P[b]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(b=0;16>b;++b)P[b]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=v.g[0],T=v.g[1],b=v.g[2];var k=v.g[3],R=y+(k^T&(b^k))+P[0]+3614090360&4294967295;y=T+(R<<7&4294967295|R>>>25),R=k+(b^y&(T^b))+P[1]+3905402710&4294967295,k=y+(R<<12&4294967295|R>>>20),R=b+(T^k&(y^T))+P[2]+606105819&4294967295,b=k+(R<<17&4294967295|R>>>15),R=T+(y^b&(k^y))+P[3]+3250441966&4294967295,T=b+(R<<22&4294967295|R>>>10),R=y+(k^T&(b^k))+P[4]+4118548399&4294967295,y=T+(R<<7&4294967295|R>>>25),R=k+(b^y&(T^b))+P[5]+1200080426&4294967295,k=y+(R<<12&4294967295|R>>>20),R=b+(T^k&(y^T))+P[6]+2821735955&4294967295,b=k+(R<<17&4294967295|R>>>15),R=T+(y^b&(k^y))+P[7]+4249261313&4294967295,T=b+(R<<22&4294967295|R>>>10),R=y+(k^T&(b^k))+P[8]+1770035416&4294967295,y=T+(R<<7&4294967295|R>>>25),R=k+(b^y&(T^b))+P[9]+2336552879&4294967295,k=y+(R<<12&4294967295|R>>>20),R=b+(T^k&(y^T))+P[10]+4294925233&4294967295,b=k+(R<<17&4294967295|R>>>15),R=T+(y^b&(k^y))+P[11]+2304563134&4294967295,T=b+(R<<22&4294967295|R>>>10),R=y+(k^T&(b^k))+P[12]+1804603682&4294967295,y=T+(R<<7&4294967295|R>>>25),R=k+(b^y&(T^b))+P[13]+4254626195&4294967295,k=y+(R<<12&4294967295|R>>>20),R=b+(T^k&(y^T))+P[14]+2792965006&4294967295,b=k+(R<<17&4294967295|R>>>15),R=T+(y^b&(k^y))+P[15]+1236535329&4294967295,T=b+(R<<22&4294967295|R>>>10),R=y+(b^k&(T^b))+P[1]+4129170786&4294967295,y=T+(R<<5&4294967295|R>>>27),R=k+(T^b&(y^T))+P[6]+3225465664&4294967295,k=y+(R<<9&4294967295|R>>>23),R=b+(y^T&(k^y))+P[11]+643717713&4294967295,b=k+(R<<14&4294967295|R>>>18),R=T+(k^y&(b^k))+P[0]+3921069994&4294967295,T=b+(R<<20&4294967295|R>>>12),R=y+(b^k&(T^b))+P[5]+3593408605&4294967295,y=T+(R<<5&4294967295|R>>>27),R=k+(T^b&(y^T))+P[10]+38016083&4294967295,k=y+(R<<9&4294967295|R>>>23),R=b+(y^T&(k^y))+P[15]+3634488961&4294967295,b=k+(R<<14&4294967295|R>>>18),R=T+(k^y&(b^k))+P[4]+3889429448&4294967295,T=b+(R<<20&4294967295|R>>>12),R=y+(b^k&(T^b))+P[9]+568446438&4294967295,y=T+(R<<5&4294967295|R>>>27),R=k+(T^b&(y^T))+P[14]+3275163606&4294967295,k=y+(R<<9&4294967295|R>>>23),R=b+(y^T&(k^y))+P[3]+4107603335&4294967295,b=k+(R<<14&4294967295|R>>>18),R=T+(k^y&(b^k))+P[8]+1163531501&4294967295,T=b+(R<<20&4294967295|R>>>12),R=y+(b^k&(T^b))+P[13]+2850285829&4294967295,y=T+(R<<5&4294967295|R>>>27),R=k+(T^b&(y^T))+P[2]+4243563512&4294967295,k=y+(R<<9&4294967295|R>>>23),R=b+(y^T&(k^y))+P[7]+1735328473&4294967295,b=k+(R<<14&4294967295|R>>>18),R=T+(k^y&(b^k))+P[12]+2368359562&4294967295,T=b+(R<<20&4294967295|R>>>12),R=y+(T^b^k)+P[5]+4294588738&4294967295,y=T+(R<<4&4294967295|R>>>28),R=k+(y^T^b)+P[8]+2272392833&4294967295,k=y+(R<<11&4294967295|R>>>21),R=b+(k^y^T)+P[11]+1839030562&4294967295,b=k+(R<<16&4294967295|R>>>16),R=T+(b^k^y)+P[14]+4259657740&4294967295,T=b+(R<<23&4294967295|R>>>9),R=y+(T^b^k)+P[1]+2763975236&4294967295,y=T+(R<<4&4294967295|R>>>28),R=k+(y^T^b)+P[4]+1272893353&4294967295,k=y+(R<<11&4294967295|R>>>21),R=b+(k^y^T)+P[7]+4139469664&4294967295,b=k+(R<<16&4294967295|R>>>16),R=T+(b^k^y)+P[10]+3200236656&4294967295,T=b+(R<<23&4294967295|R>>>9),R=y+(T^b^k)+P[13]+681279174&4294967295,y=T+(R<<4&4294967295|R>>>28),R=k+(y^T^b)+P[0]+3936430074&4294967295,k=y+(R<<11&4294967295|R>>>21),R=b+(k^y^T)+P[3]+3572445317&4294967295,b=k+(R<<16&4294967295|R>>>16),R=T+(b^k^y)+P[6]+76029189&4294967295,T=b+(R<<23&4294967295|R>>>9),R=y+(T^b^k)+P[9]+3654602809&4294967295,y=T+(R<<4&4294967295|R>>>28),R=k+(y^T^b)+P[12]+3873151461&4294967295,k=y+(R<<11&4294967295|R>>>21),R=b+(k^y^T)+P[15]+530742520&4294967295,b=k+(R<<16&4294967295|R>>>16),R=T+(b^k^y)+P[2]+3299628645&4294967295,T=b+(R<<23&4294967295|R>>>9),R=y+(b^(T|~k))+P[0]+4096336452&4294967295,y=T+(R<<6&4294967295|R>>>26),R=k+(T^(y|~b))+P[7]+1126891415&4294967295,k=y+(R<<10&4294967295|R>>>22),R=b+(y^(k|~T))+P[14]+2878612391&4294967295,b=k+(R<<15&4294967295|R>>>17),R=T+(k^(b|~y))+P[5]+4237533241&4294967295,T=b+(R<<21&4294967295|R>>>11),R=y+(b^(T|~k))+P[12]+1700485571&4294967295,y=T+(R<<6&4294967295|R>>>26),R=k+(T^(y|~b))+P[3]+2399980690&4294967295,k=y+(R<<10&4294967295|R>>>22),R=b+(y^(k|~T))+P[10]+4293915773&4294967295,b=k+(R<<15&4294967295|R>>>17),R=T+(k^(b|~y))+P[1]+2240044497&4294967295,T=b+(R<<21&4294967295|R>>>11),R=y+(b^(T|~k))+P[8]+1873313359&4294967295,y=T+(R<<6&4294967295|R>>>26),R=k+(T^(y|~b))+P[15]+4264355552&4294967295,k=y+(R<<10&4294967295|R>>>22),R=b+(y^(k|~T))+P[6]+2734768916&4294967295,b=k+(R<<15&4294967295|R>>>17),R=T+(k^(b|~y))+P[13]+1309151649&4294967295,T=b+(R<<21&4294967295|R>>>11),R=y+(b^(T|~k))+P[4]+4149444226&4294967295,y=T+(R<<6&4294967295|R>>>26),R=k+(T^(y|~b))+P[11]+3174756917&4294967295,k=y+(R<<10&4294967295|R>>>22),R=b+(y^(k|~T))+P[2]+718787259&4294967295,b=k+(R<<15&4294967295|R>>>17),R=T+(k^(b|~y))+P[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(b+(R<<21&4294967295|R>>>11))&4294967295,v.g[2]=v.g[2]+b&4294967295,v.g[3]=v.g[3]+k&4294967295}r.prototype.u=function(v,y){y===void 0&&(y=v.length);for(var T=y-this.blockSize,P=this.B,b=this.h,k=0;k<y;){if(b==0)for(;k<=T;)i(this,v,k),k+=this.blockSize;if(typeof v=="string"){for(;k<y;)if(P[b++]=v.charCodeAt(k++),b==this.blockSize){i(this,P),b=0;break}}else for(;k<y;)if(P[b++]=v[k++],b==this.blockSize){i(this,P),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;var T=8*this.o;for(y=v.length-8;y<v.length;++y)v[y]=T&255,T/=256;for(this.u(v),v=Array(16),y=T=0;4>y;++y)for(var P=0;32>P;P+=8)v[T++]=this.g[y]>>>P&255;return v};function s(v,y){var T=a;return Object.prototype.hasOwnProperty.call(T,v)?T[v]:T[v]=y(v)}function o(v,y){this.h=y;for(var T=[],P=!0,b=v.length-1;0<=b;b--){var k=v[b]|0;P&&k==y||(T[b]=k,P=!1)}this.g=T}var a={};function l(v){return-128<=v&&128>v?s(v,function(y){return new o([y|0],0>y?-1:0)}):new o([v|0],0>v?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return f;if(0>v)return C(c(-v));for(var y=[],T=1,P=0;v>=T;P++)y[P]=v/T|0,T*=4294967296;return new o(y,0)}function d(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return C(d(v.substring(1),y));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(y,8)),P=f,b=0;b<v.length;b+=8){var k=Math.min(8,v.length-b),R=parseInt(v.substring(b,b+k),y);8>k?(k=c(Math.pow(y,k)),P=P.j(k).add(c(R))):(P=P.j(T),P=P.add(c(R)))}return P}var f=l(0),m=l(1),g=l(16777216);n=o.prototype,n.m=function(){if(A(this))return-C(this).m();for(var v=0,y=1,T=0;T<this.g.length;T++){var P=this.i(T);v+=(0<=P?P:4294967296+P)*y,y*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(S(this))return"0";if(A(this))return"-"+C(this).toString(v);for(var y=c(Math.pow(v,6)),T=this,P="";;){var b=N(T,y).g;T=I(T,b.j(y));var k=((0<T.g.length?T.g[0]:T.h)>>>0).toString(v);if(T=b,S(T))return k+P;for(;6>k.length;)k="0"+k;P=k+P}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function S(v){if(v.h!=0)return!1;for(var y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function A(v){return v.h==-1}n.l=function(v){return v=I(this,v),A(v)?-1:S(v)?0:1};function C(v){for(var y=v.g.length,T=[],P=0;P<y;P++)T[P]=~v.g[P];return new o(T,~v.h).add(m)}n.abs=function(){return A(this)?C(this):this},n.add=function(v){for(var y=Math.max(this.g.length,v.g.length),T=[],P=0,b=0;b<=y;b++){var k=P+(this.i(b)&65535)+(v.i(b)&65535),R=(k>>>16)+(this.i(b)>>>16)+(v.i(b)>>>16);P=R>>>16,k&=65535,R&=65535,T[b]=R<<16|k}return new o(T,T[T.length-1]&-2147483648?-1:0)};function I(v,y){return v.add(C(y))}n.j=function(v){if(S(this)||S(v))return f;if(A(this))return A(v)?C(this).j(C(v)):C(C(this).j(v));if(A(v))return C(this.j(C(v)));if(0>this.l(g)&&0>v.l(g))return c(this.m()*v.m());for(var y=this.g.length+v.g.length,T=[],P=0;P<2*y;P++)T[P]=0;for(P=0;P<this.g.length;P++)for(var b=0;b<v.g.length;b++){var k=this.i(P)>>>16,R=this.i(P)&65535,st=v.i(b)>>>16,yn=v.i(b)&65535;T[2*P+2*b]+=R*yn,w(T,2*P+2*b),T[2*P+2*b+1]+=k*yn,w(T,2*P+2*b+1),T[2*P+2*b+1]+=R*st,w(T,2*P+2*b+1),T[2*P+2*b+2]+=k*st,w(T,2*P+2*b+2)}for(P=0;P<y;P++)T[P]=T[2*P+1]<<16|T[2*P];for(P=y;P<2*y;P++)T[P]=0;return new o(T,0)};function w(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function E(v,y){this.g=v,this.h=y}function N(v,y){if(S(y))throw Error("division by zero");if(S(v))return new E(f,f);if(A(v))return y=N(C(v),y),new E(C(y.g),C(y.h));if(A(y))return y=N(v,C(y)),new E(C(y.g),y.h);if(30<v.g.length){if(A(v)||A(y))throw Error("slowDivide_ only works with positive integers.");for(var T=m,P=y;0>=P.l(v);)T=M(T),P=M(P);var b=L(T,1),k=L(P,1);for(P=L(P,2),T=L(T,2);!S(P);){var R=k.add(P);0>=R.l(v)&&(b=b.add(T),k=R),P=L(P,1),T=L(T,1)}return y=I(v,b.j(y)),new E(b,y)}for(b=f;0<=v.l(y);){for(T=Math.max(1,Math.floor(v.m()/y.m())),P=Math.ceil(Math.log(T)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),k=c(T),R=k.j(y);A(R)||0<R.l(v);)T-=P,k=c(T),R=k.j(y);S(k)&&(k=m),b=b.add(k),v=I(v,R)}return new E(b,v)}n.A=function(v){return N(this,v).h},n.and=function(v){for(var y=Math.max(this.g.length,v.g.length),T=[],P=0;P<y;P++)T[P]=this.i(P)&v.i(P);return new o(T,this.h&v.h)},n.or=function(v){for(var y=Math.max(this.g.length,v.g.length),T=[],P=0;P<y;P++)T[P]=this.i(P)|v.i(P);return new o(T,this.h|v.h)},n.xor=function(v){for(var y=Math.max(this.g.length,v.g.length),T=[],P=0;P<y;P++)T[P]=this.i(P)^v.i(P);return new o(T,this.h^v.h)};function M(v){for(var y=v.g.length+1,T=[],P=0;P<y;P++)T[P]=v.i(P)<<1|v.i(P-1)>>>31;return new o(T,v.h)}function L(v,y){var T=y>>5;y%=32;for(var P=v.g.length-T,b=[],k=0;k<P;k++)b[k]=0<y?v.i(k+T)>>>y|v.i(k+T+1)<<32-y:v.i(k+T);return new o(b,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,TA=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,ps=o}).apply(typeof cI<"u"?cI:typeof self<"u"?self:typeof window<"u"?window:{});var bc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var SA,al,AA,Jc,wm,PA,RA,CA;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,h,p){return u==Array.prototype||u==Object.prototype||(u[h]=p.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof bc=="object"&&bc];for(var h=0;h<u.length;++h){var p=u[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=t(this);function i(u,h){if(h)e:{var p=r;u=u.split(".");for(var _=0;_<u.length-1;_++){var x=u[_];if(!(x in p))break e;p=p[x]}u=u[u.length-1],_=p[u],h=h(_),h!=_&&h!=null&&e(p,u,{configurable:!0,writable:!0,value:h})}}function s(u,h){u instanceof String&&(u+="");var p=0,_=!1,x={next:function(){if(!_&&p<u.length){var O=p++;return{value:h(O,u[O]),done:!1}}return _=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}i("Array.prototype.values",function(u){return u||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var h=typeof u;return h=h!="object"?h:u?Array.isArray(u)?"array":h:"null",h=="array"||h=="object"&&typeof u.length=="number"}function c(u){var h=typeof u;return h=="object"&&u!=null||h=="function"}function d(u,h,p){return u.call.apply(u.bind,arguments)}function f(u,h,p){if(!u)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,_),u.apply(h,x)}}return function(){return u.apply(h,arguments)}}function m(u,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function g(u,h){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),u.apply(this,_)}}function S(u,h){function p(){}p.prototype=h.prototype,u.aa=h.prototype,u.prototype=new p,u.prototype.constructor=u,u.Qb=function(_,x,O){for(var q=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)q[Se-2]=arguments[Se];return h.prototype[x].apply(_,q)}}function A(u){const h=u.length;if(0<h){const p=Array(h);for(let _=0;_<h;_++)p[_]=u[_];return p}return[]}function C(u,h){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(l(_)){const x=u.length||0,O=_.length||0;u.length=x+O;for(let q=0;q<O;q++)u[x+q]=_[q]}else u.push(_)}}class I{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function w(u){return/^[\s\xa0]*$/.test(u)}function E(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function N(u){return N[" "](u),u}N[" "]=function(){};var M=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function L(u,h,p){for(const _ in u)h.call(p,u[_],_,u)}function v(u,h){for(const p in u)h.call(void 0,u[p],p,u)}function y(u){const h={};for(const p in u)h[p]=u[p];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(u,h){let p,_;for(let x=1;x<arguments.length;x++){_=arguments[x];for(p in _)u[p]=_[p];for(let O=0;O<T.length;O++)p=T[O],Object.prototype.hasOwnProperty.call(_,p)&&(u[p]=_[p])}}function b(u){var h=1;u=u.split(":");const p=[];for(;0<h&&u.length;)p.push(u.shift()),h--;return u.length&&p.push(u.join(":")),p}function k(u){a.setTimeout(()=>{throw u},0)}function R(){var u=W;let h=null;return u.g&&(h=u.g,u.g=u.g.next,u.g||(u.h=null),h.next=null),h}class st{constructor(){this.h=this.g=null}add(h,p){const _=yn.get();_.set(h,p),this.h?this.h.next=_:this.g=_,this.h=_}}var yn=new I(()=>new on,u=>u.reset());class on{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let ot,Q=!1,W=new st,ee=()=>{const u=a.Promise.resolve(void 0);ot=()=>{u.then(Ee)}};var Ee=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(p){k(p)}var h=yn;h.j(u),100>h.h&&(h.h++,u.next=h.g,h.g=u)}Q=!1};function te(){this.s=this.s,this.C=this.C}te.prototype.s=!1,te.prototype.ma=function(){this.s||(this.s=!0,this.N())},te.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function re(u,h){this.type=u,this.g=this.target=h,this.defaultPrevented=!1}re.prototype.h=function(){this.defaultPrevented=!0};var he=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,h=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return u}();function xe(u,h){if(re.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var p=this.type=u.type,_=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=h,h=u.relatedTarget){if(M){e:{try{N(h.nodeName);var x=!0;break e}catch{}x=!1}x||(h=null)}}else p=="mouseover"?h=u.fromElement:p=="mouseout"&&(h=u.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Pt[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&xe.aa.h.call(this)}}S(xe,re);var Pt={2:"touch",3:"pen",4:"mouse"};xe.prototype.h=function(){xe.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var me="closure_listenable_"+(1e6*Math.random()|0),Ia=0;function Ui(u,h,p,_,x){this.listener=u,this.proxy=null,this.src=h,this.type=p,this.capture=!!_,this.ha=x,this.key=++Ia,this.da=this.fa=!1}function ur(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function jn(u){this.src=u,this.g={},this.h=0}jn.prototype.add=function(u,h,p,_,x){var O=u.toString();u=this.g[O],u||(u=this.g[O]=[],this.h++);var q=$s(u,h,_,x);return-1<q?(h=u[q],p||(h.fa=!1)):(h=new Ui(h,this.src,O,!!_,x),h.fa=p,u.push(h)),h};function Bi(u,h){var p=h.type;if(p in u.g){var _=u.g[p],x=Array.prototype.indexOf.call(_,h,void 0),O;(O=0<=x)&&Array.prototype.splice.call(_,x,1),O&&(ur(h),u.g[p].length==0&&(delete u.g[p],u.h--))}}function $s(u,h,p,_){for(var x=0;x<u.length;++x){var O=u[x];if(!O.da&&O.listener==h&&O.capture==!!p&&O.ha==_)return x}return-1}var Ea="closure_lm_"+(1e6*Math.random()|0),Ta={};function Sa(u,h,p,_,x){if(Array.isArray(h)){for(var O=0;O<h.length;O++)Sa(u,h[O],p,_,x);return null}return p=Gu(p),u&&u[me]?u.K(h,p,c(_)?!!_.capture:!1,x):nf(u,h,p,!1,_,x)}function nf(u,h,p,_,x,O){if(!h)throw Error("Invalid event type");var q=c(x)?!!x.capture:!!x,Se=Cn(u);if(Se||(u[Ea]=Se=new jn(u)),p=Se.add(h,p,_,q,O),p.proxy)return p;if(_=Aa(),p.proxy=_,_.src=u,_.listener=p,u.addEventListener)he||(x=q),x===void 0&&(x=!1),u.addEventListener(h.toString(),_,x);else if(u.attachEvent)u.attachEvent(Mr(h.toString()),_);else if(u.addListener&&u.removeListener)u.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Aa(){function u(p){return h.call(u.src,u.listener,p)}const h=Ku;return u}function Wu(u,h,p,_,x){if(Array.isArray(h))for(var O=0;O<h.length;O++)Wu(u,h[O],p,_,x);else _=c(_)?!!_.capture:!!_,p=Gu(p),u&&u[me]?(u=u.i,h=String(h).toString(),h in u.g&&(O=u.g[h],p=$s(O,p,_,x),-1<p&&(ur(O[p]),Array.prototype.splice.call(O,p,1),O.length==0&&(delete u.g[h],u.h--)))):u&&(u=Cn(u))&&(h=u.g[h.toString()],u=-1,h&&(u=$s(h,p,_,x)),(p=-1<u?h[u]:null)&&qs(p))}function qs(u){if(typeof u!="number"&&u&&!u.da){var h=u.src;if(h&&h[me])Bi(h.i,u);else{var p=u.type,_=u.proxy;h.removeEventListener?h.removeEventListener(p,_,u.capture):h.detachEvent?h.detachEvent(Mr(p),_):h.addListener&&h.removeListener&&h.removeListener(_),(p=Cn(h))?(Bi(p,u),p.h==0&&(p.src=null,h[Ea]=null)):ur(u)}}}function Mr(u){return u in Ta?Ta[u]:Ta[u]="on"+u}function Ku(u,h){if(u.da)u=!0;else{h=new xe(h,this);var p=u.listener,_=u.ha||u.src;u.fa&&qs(u),u=p.call(_,h)}return u}function Cn(u){return u=u[Ea],u instanceof jn?u:null}var Pa="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gu(u){return typeof u=="function"?u:(u[Pa]||(u[Pa]=function(h){return u.handleEvent(h)}),u[Pa])}function _e(){te.call(this),this.i=new jn(this),this.M=this,this.F=null}S(_e,te),_e.prototype[me]=!0,_e.prototype.removeEventListener=function(u,h,p,_){Wu(this,u,h,p,_)};function $e(u,h){var p,_=u.F;if(_)for(p=[];_;_=_.F)p.push(_);if(u=u.M,_=h.type||h,typeof h=="string")h=new re(h,u);else if(h instanceof re)h.target=h.target||u;else{var x=h;h=new re(_,u),P(h,x)}if(x=!0,p)for(var O=p.length-1;0<=O;O--){var q=h.g=p[O];x=Ws(q,_,!0,h)&&x}if(q=h.g=u,x=Ws(q,_,!0,h)&&x,x=Ws(q,_,!1,h)&&x,p)for(O=0;O<p.length;O++)q=h.g=p[O],x=Ws(q,_,!1,h)&&x}_e.prototype.N=function(){if(_e.aa.N.call(this),this.i){var u=this.i,h;for(h in u.g){for(var p=u.g[h],_=0;_<p.length;_++)ur(p[_]);delete u.g[h],u.h--}}this.F=null},_e.prototype.K=function(u,h,p,_){return this.i.add(String(u),h,!1,p,_)},_e.prototype.L=function(u,h,p,_){return this.i.add(String(u),h,!0,p,_)};function Ws(u,h,p,_){if(h=u.i.g[String(h)],!h)return!0;h=h.concat();for(var x=!0,O=0;O<h.length;++O){var q=h[O];if(q&&!q.da&&q.capture==p){var Se=q.listener,_t=q.ha||q.src;q.fa&&Bi(u.i,q),x=Se.call(_t,_)!==!1&&x}}return x&&!_.defaultPrevented}function Hu(u,h,p){if(typeof u=="function")p&&(u=m(u,p));else if(u&&typeof u.handleEvent=="function")u=m(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(u,h||0)}function ji(u){u.g=Hu(()=>{u.g=null,u.i&&(u.i=!1,ji(u))},u.l);const h=u.h;u.h=null,u.m.apply(null,h)}class rf extends te{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ji(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fr(u){te.call(this),this.h=u,this.g={}}S(Fr,te);var Ks=[];function cr(u){L(u.g,function(h,p){this.g.hasOwnProperty(p)&&qs(h)},u),u.g={}}Fr.prototype.N=function(){Fr.aa.N.call(this),cr(this)},Fr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gs=a.JSON.stringify,Ur=a.JSON.parse,sf=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function Ra(){}Ra.prototype.h=null;function Ca(u){return u.h||(u.h=u.i())}function ba(){}var zi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function $i(){re.call(this,"d")}S($i,re);function _n(){re.call(this,"c")}S(_n,re);var dr={},ie=null;function fe(){return ie=ie||new _e}dr.La="serverreachability";function Te(u){re.call(this,dr.La,u)}S(Te,re);function gt(u){const h=fe();$e(h,new Te(h))}dr.STAT_EVENT="statevent";function Kt(u,h){re.call(this,dr.STAT_EVENT,u),this.stat=h}S(Kt,re);function Ne(u){const h=fe();$e(h,new Kt(h,u))}dr.Ma="timingevent";function zn(u,h){re.call(this,dr.Ma,u),this.size=h}S(zn,re);function yt(u,h){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},h)}function Gt(){this.g=!0}Gt.prototype.xa=function(){this.g=!1};function YR(u,h,p,_,x,O){u.info(function(){if(u.g)if(O)for(var q="",Se=O.split("&"),_t=0;_t<Se.length;_t++){var ge=Se[_t].split("=");if(1<ge.length){var Rt=ge[0];ge=ge[1];var Ct=Rt.split("_");q=2<=Ct.length&&Ct[1]=="type"?q+(Rt+"="+ge+"&"):q+(Rt+"=redacted&")}}else q=null;else q=O;return"XMLHTTP REQ ("+_+") [attempt "+x+"]: "+h+`
`+p+`
`+q})}function JR(u,h,p,_,x,O,q){u.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+x+"]: "+h+`
`+p+`
`+O+" "+q})}function Hs(u,h,p,_){u.info(function(){return"XMLHTTP TEXT ("+h+"): "+ZR(u,p)+(_?" "+_:"")})}function XR(u,h){u.info(function(){return"TIMEOUT: "+h})}Gt.prototype.info=function(){};function ZR(u,h){if(!u.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(u=0;u<p.length;u++)if(Array.isArray(p[u])){var _=p[u];if(!(2>_.length)){var x=_[1];if(Array.isArray(x)&&!(1>x.length)){var O=x[0];if(O!="noop"&&O!="stop"&&O!="close")for(var q=1;q<x.length;q++)x[q]=""}}}}return Gs(p)}catch{return h}}var Qu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},I_={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},of;function Yu(){}S(Yu,Ra),Yu.prototype.g=function(){return new XMLHttpRequest},Yu.prototype.i=function(){return{}},of=new Yu;function Br(u,h,p,_){this.j=u,this.i=h,this.l=p,this.R=_||1,this.U=new Fr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new E_}function E_(){this.i=null,this.g="",this.h=!1}var T_={},af={};function lf(u,h,p){u.L=1,u.v=ec(hr(h)),u.m=p,u.P=!0,S_(u,null)}function S_(u,h){u.F=Date.now(),Ju(u),u.A=hr(u.v);var p=u.A,_=u.R;Array.isArray(_)||(_=[String(_)]),F_(p.i,"t",_),u.C=0,p=u.j.J,u.h=new E_,u.g=nv(u.j,p?h:null,!u.m),0<u.O&&(u.M=new rf(m(u.Y,u,u.g),u.O)),h=u.U,p=u.g,_=u.ca;var x="readystatechange";Array.isArray(x)||(x&&(Ks[0]=x.toString()),x=Ks);for(var O=0;O<x.length;O++){var q=Sa(p,x[O],_||h.handleEvent,!1,h.h||h);if(!q)break;h.g[q.key]=q}h=u.H?y(u.H):{},u.m?(u.u||(u.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,h)):(u.u="GET",u.g.ea(u.A,u.u,null,h)),gt(),YR(u.i,u.u,u.A,u.l,u.R,u.m)}Br.prototype.ca=function(u){u=u.target;const h=this.M;h&&fr(u)==3?h.j():this.Y(u)},Br.prototype.Y=function(u){try{if(u==this.g)e:{const Ct=fr(this.g);var h=this.g.Ba();const Js=this.g.Z();if(!(3>Ct)&&(Ct!=3||this.g&&(this.h.h||this.g.oa()||W_(this.g)))){this.J||Ct!=4||h==7||(h==8||0>=Js?gt(3):gt(2)),uf(this);var p=this.g.Z();this.X=p;t:if(A_(this)){var _=W_(this.g);u="";var x=_.length,O=fr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qi(this),ka(this);var q="";break t}this.h.i=new a.TextDecoder}for(h=0;h<x;h++)this.h.h=!0,u+=this.h.i.decode(_[h],{stream:!(O&&h==x-1)});_.length=0,this.h.g+=u,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=p==200,JR(this.i,this.u,this.A,this.l,this.R,Ct,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Se,_t=this.g;if((Se=_t.g?_t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(Se)){var ge=Se;break t}}ge=null}if(p=ge)Hs(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cf(this,p);else{this.o=!1,this.s=3,Ne(12),qi(this),ka(this);break e}}if(this.P){p=!0;let bn;for(;!this.J&&this.C<q.length;)if(bn=eC(this,q),bn==af){Ct==4&&(this.s=4,Ne(14),p=!1),Hs(this.i,this.l,null,"[Incomplete Response]");break}else if(bn==T_){this.s=4,Ne(15),Hs(this.i,this.l,q,"[Invalid Chunk]"),p=!1;break}else Hs(this.i,this.l,bn,null),cf(this,bn);if(A_(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ct!=4||q.length!=0||this.h.h||(this.s=1,Ne(16),p=!1),this.o=this.o&&p,!p)Hs(this.i,this.l,q,"[Invalid Chunked Response]"),qi(this),ka(this);else if(0<q.length&&!this.W){this.W=!0;var Rt=this.j;Rt.g==this&&Rt.ba&&!Rt.M&&(Rt.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),gf(Rt),Rt.M=!0,Ne(11))}}else Hs(this.i,this.l,q,null),cf(this,q);Ct==4&&qi(this),this.o&&!this.J&&(Ct==4?X_(this.j,this):(this.o=!1,Ju(this)))}else yC(this.g),p==400&&0<q.indexOf("Unknown SID")?(this.s=3,Ne(12)):(this.s=0,Ne(13)),qi(this),ka(this)}}}catch{}finally{}};function A_(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function eC(u,h){var p=u.C,_=h.indexOf(`
`,p);return _==-1?af:(p=Number(h.substring(p,_)),isNaN(p)?T_:(_+=1,_+p>h.length?af:(h=h.slice(_,_+p),u.C=_+p,h)))}Br.prototype.cancel=function(){this.J=!0,qi(this)};function Ju(u){u.S=Date.now()+u.I,P_(u,u.I)}function P_(u,h){if(u.B!=null)throw Error("WatchDog timer not null");u.B=yt(m(u.ba,u),h)}function uf(u){u.B&&(a.clearTimeout(u.B),u.B=null)}Br.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(XR(this.i,this.A),this.L!=2&&(gt(),Ne(17)),qi(this),this.s=2,ka(this)):P_(this,this.S-u)};function ka(u){u.j.G==0||u.J||X_(u.j,u)}function qi(u){uf(u);var h=u.M;h&&typeof h.ma=="function"&&h.ma(),u.M=null,cr(u.U),u.g&&(h=u.g,u.g=null,h.abort(),h.ma())}function cf(u,h){try{var p=u.j;if(p.G!=0&&(p.g==u||df(p.h,u))){if(!u.K&&df(p.h,u)&&p.G==3){try{var _=p.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var x=_;if(x[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<u.F)oc(p),ic(p);else break e;mf(p),Ne(18)}}else p.za=x[1],0<p.za-p.T&&37500>x[2]&&p.F&&p.v==0&&!p.C&&(p.C=yt(m(p.Za,p),6e3));if(1>=b_(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Ki(p,11)}else if((u.K||p.g==u)&&oc(p),!w(h))for(x=p.Da.g.parse(h),h=0;h<x.length;h++){let ge=x[h];if(p.T=ge[0],ge=ge[1],p.G==2)if(ge[0]=="c"){p.K=ge[1],p.ia=ge[2];const Rt=ge[3];Rt!=null&&(p.la=Rt,p.j.info("VER="+p.la));const Ct=ge[4];Ct!=null&&(p.Aa=Ct,p.j.info("SVER="+p.Aa));const Js=ge[5];Js!=null&&typeof Js=="number"&&0<Js&&(_=1.5*Js,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const bn=u.g;if(bn){const lc=bn.g?bn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(lc){var O=_.h;O.g||lc.indexOf("spdy")==-1&&lc.indexOf("quic")==-1&&lc.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(hf(O,O.h),O.h=null))}if(_.D){const yf=bn.g?bn.g.getResponseHeader("X-HTTP-Session-Id"):null;yf&&(_.ya=yf,Re(_.I,_.D,yf))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-u.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var q=u;if(_.qa=tv(_,_.J?_.ia:null,_.W),q.K){k_(_.h,q);var Se=q,_t=_.L;_t&&(Se.I=_t),Se.B&&(uf(Se),Ju(Se)),_.g=q}else Y_(_);0<p.i.length&&sc(p)}else ge[0]!="stop"&&ge[0]!="close"||Ki(p,7);else p.G==3&&(ge[0]=="stop"||ge[0]=="close"?ge[0]=="stop"?Ki(p,7):pf(p):ge[0]!="noop"&&p.l&&p.l.ta(ge),p.v=0)}}gt(4)}catch{}}var tC=class{constructor(u,h){this.g=u,this.map=h}};function R_(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function C_(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function b_(u){return u.h?1:u.g?u.g.size:0}function df(u,h){return u.h?u.h==h:u.g?u.g.has(h):!1}function hf(u,h){u.g?u.g.add(h):u.h=h}function k_(u,h){u.h&&u.h==h?u.h=null:u.g&&u.g.has(h)&&u.g.delete(h)}R_.prototype.cancel=function(){if(this.i=x_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function x_(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let h=u.i;for(const p of u.g.values())h=h.concat(p.D);return h}return A(u.i)}function nC(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var h=[],p=u.length,_=0;_<p;_++)h.push(u[_]);return h}h=[],p=0;for(_ in u)h[p++]=u[_];return h}function rC(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var h=[];u=u.length;for(var p=0;p<u;p++)h.push(p);return h}h=[],p=0;for(const _ in u)h[p++]=_;return h}}}function N_(u,h){if(u.forEach&&typeof u.forEach=="function")u.forEach(h,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,h,void 0);else for(var p=rC(u),_=nC(u),x=_.length,O=0;O<x;O++)h.call(void 0,_[O],p&&p[O],u)}var D_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function iC(u,h){if(u){u=u.split("&");for(var p=0;p<u.length;p++){var _=u[p].indexOf("="),x=null;if(0<=_){var O=u[p].substring(0,_);x=u[p].substring(_+1)}else O=u[p];h(O,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Wi(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Wi){this.h=u.h,Xu(this,u.j),this.o=u.o,this.g=u.g,Zu(this,u.s),this.l=u.l;var h=u.i,p=new Da;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),V_(this,p),this.m=u.m}else u&&(h=String(u).match(D_))?(this.h=!1,Xu(this,h[1]||"",!0),this.o=xa(h[2]||""),this.g=xa(h[3]||"",!0),Zu(this,h[4]),this.l=xa(h[5]||"",!0),V_(this,h[6]||"",!0),this.m=xa(h[7]||"")):(this.h=!1,this.i=new Da(null,this.h))}Wi.prototype.toString=function(){var u=[],h=this.j;h&&u.push(Na(h,O_,!0),":");var p=this.g;return(p||h=="file")&&(u.push("//"),(h=this.o)&&u.push(Na(h,O_,!0),"@"),u.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&u.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&u.push("/"),u.push(Na(p,p.charAt(0)=="/"?aC:oC,!0))),(p=this.i.toString())&&u.push("?",p),(p=this.m)&&u.push("#",Na(p,uC)),u.join("")};function hr(u){return new Wi(u)}function Xu(u,h,p){u.j=p?xa(h,!0):h,u.j&&(u.j=u.j.replace(/:$/,""))}function Zu(u,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);u.s=h}else u.s=null}function V_(u,h,p){h instanceof Da?(u.i=h,cC(u.i,u.h)):(p||(h=Na(h,lC)),u.i=new Da(h,u.h))}function Re(u,h,p){u.i.set(h,p)}function ec(u){return Re(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function xa(u,h){return u?h?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Na(u,h,p){return typeof u=="string"?(u=encodeURI(u).replace(h,sC),p&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function sC(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var O_=/[#\/\?@]/g,oC=/[#\?:]/g,aC=/[#\?]/g,lC=/[#\?@]/g,uC=/#/g;function Da(u,h){this.h=this.g=null,this.i=u||null,this.j=!!h}function jr(u){u.g||(u.g=new Map,u.h=0,u.i&&iC(u.i,function(h,p){u.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}n=Da.prototype,n.add=function(u,h){jr(this),this.i=null,u=Qs(this,u);var p=this.g.get(u);return p||this.g.set(u,p=[]),p.push(h),this.h+=1,this};function L_(u,h){jr(u),h=Qs(u,h),u.g.has(h)&&(u.i=null,u.h-=u.g.get(h).length,u.g.delete(h))}function M_(u,h){return jr(u),h=Qs(u,h),u.g.has(h)}n.forEach=function(u,h){jr(this),this.g.forEach(function(p,_){p.forEach(function(x){u.call(h,x,_,this)},this)},this)},n.na=function(){jr(this);const u=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let _=0;_<h.length;_++){const x=u[_];for(let O=0;O<x.length;O++)p.push(h[_])}return p},n.V=function(u){jr(this);let h=[];if(typeof u=="string")M_(this,u)&&(h=h.concat(this.g.get(Qs(this,u))));else{u=Array.from(this.g.values());for(let p=0;p<u.length;p++)h=h.concat(u[p])}return h},n.set=function(u,h){return jr(this),this.i=null,u=Qs(this,u),M_(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[h]),this.h+=1,this},n.get=function(u,h){return u?(u=this.V(u),0<u.length?String(u[0]):h):h};function F_(u,h,p){L_(u,h),0<p.length&&(u.i=null,u.g.set(Qs(u,h),A(p)),u.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var _=h[p];const O=encodeURIComponent(String(_)),q=this.V(_);for(_=0;_<q.length;_++){var x=O;q[_]!==""&&(x+="="+encodeURIComponent(String(q[_]))),u.push(x)}}return this.i=u.join("&")};function Qs(u,h){return h=String(h),u.j&&(h=h.toLowerCase()),h}function cC(u,h){h&&!u.j&&(jr(u),u.i=null,u.g.forEach(function(p,_){var x=_.toLowerCase();_!=x&&(L_(this,_),F_(this,x,p))},u)),u.j=h}function dC(u,h){const p=new Gt;if(a.Image){const _=new Image;_.onload=g(zr,p,"TestLoadImage: loaded",!0,h,_),_.onerror=g(zr,p,"TestLoadImage: error",!1,h,_),_.onabort=g(zr,p,"TestLoadImage: abort",!1,h,_),_.ontimeout=g(zr,p,"TestLoadImage: timeout",!1,h,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=u}else h(!1)}function hC(u,h){const p=new Gt,_=new AbortController,x=setTimeout(()=>{_.abort(),zr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(u,{signal:_.signal}).then(O=>{clearTimeout(x),O.ok?zr(p,"TestPingServer: ok",!0,h):zr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(x),zr(p,"TestPingServer: error",!1,h)})}function zr(u,h,p,_,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),_(p)}catch{}}function fC(){this.g=new sf}function pC(u,h,p){const _=p||"";try{N_(u,function(x,O){let q=x;c(x)&&(q=Gs(x)),h.push(_+O+"="+encodeURIComponent(q))})}catch(x){throw h.push(_+"type="+encodeURIComponent("_badmap")),x}}function tc(u){this.l=u.Ub||null,this.j=u.eb||!1}S(tc,Ra),tc.prototype.g=function(){return new nc(this.l,this.j)},tc.prototype.i=function(u){return function(){return u}}({});function nc(u,h){_e.call(this),this.D=u,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(nc,_e),n=nc.prototype,n.open=function(u,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=h,this.readyState=1,Oa(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(h.body=u),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Va(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Oa(this)),this.g&&(this.readyState=3,Oa(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;U_(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function U_(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var h=u.value?u.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!u.done}))&&(this.response=this.responseText+=h)}u.done?Va(this):Oa(this),this.readyState==3&&U_(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Va(this))},n.Qa=function(u){this.g&&(this.response=u,Va(this))},n.ga=function(){this.g&&Va(this)};function Va(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Oa(u)}n.setRequestHeader=function(u,h){this.u.append(u,h)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,u.push(p[0]+": "+p[1]),p=h.next();return u.join(`\r
`)};function Oa(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(nc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function B_(u){let h="";return L(u,function(p,_){h+=_,h+=":",h+=p,h+=`\r
`}),h}function ff(u,h,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=B_(p),typeof u=="string"?p!=null&&encodeURIComponent(String(p)):Re(u,h,p))}function qe(u){_e.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(qe,_e);var mC=/^https?$/i,gC=["POST","PUT"];n=qe.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,h,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);h=h?h.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():of.g(),this.v=this.o?Ca(this.o):Ca(of),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(u),!0),this.B=!1}catch(O){j_(this,O);return}if(u=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var x in _)p.set(x,_[x]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const O of _.keys())p.set(O,_.get(O));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(O=>O.toLowerCase()=="content-type"),x=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(gC,h,void 0))||_||x||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,q]of p)this.g.setRequestHeader(O,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{q_(this),this.u=!0,this.g.send(u),this.u=!1}catch(O){j_(this,O)}};function j_(u,h){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=h,u.m=5,z_(u),rc(u)}function z_(u){u.A||(u.A=!0,$e(u,"complete"),$e(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,$e(this,"complete"),$e(this,"abort"),rc(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),rc(this,!0)),qe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?$_(this):this.bb())},n.bb=function(){$_(this)};function $_(u){if(u.h&&typeof o<"u"&&(!u.v[1]||fr(u)!=4||u.Z()!=2)){if(u.u&&fr(u)==4)Hu(u.Ea,0,u);else if($e(u,"readystatechange"),fr(u)==4){u.h=!1;try{const q=u.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var _;if(_=q===0){var x=String(u.D).match(D_)[1]||null;!x&&a.self&&a.self.location&&(x=a.self.location.protocol.slice(0,-1)),_=!mC.test(x?x.toLowerCase():"")}p=_}if(p)$e(u,"complete"),$e(u,"success");else{u.m=6;try{var O=2<fr(u)?u.g.statusText:""}catch{O=""}u.l=O+" ["+u.Z()+"]",z_(u)}}finally{rc(u)}}}}function rc(u,h){if(u.g){q_(u);const p=u.g,_=u.v[0]?()=>{}:null;u.g=null,u.v=null,h||$e(u,"ready");try{p.onreadystatechange=_}catch{}}}function q_(u){u.I&&(a.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function fr(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<fr(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var h=this.g.responseText;return u&&h.indexOf(u)==0&&(h=h.substring(u.length)),Ur(h)}};function W_(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function yC(u){const h={};u=(u.g&&2<=fr(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<u.length;_++){if(w(u[_]))continue;var p=b(u[_]);const x=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const O=h[x]||[];h[x]=O,O.push(p)}v(h,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function La(u,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[u]||h}function K_(u){this.Aa=0,this.i=[],this.j=new Gt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=La("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=La("baseRetryDelayMs",5e3,u),this.cb=La("retryDelaySeedMs",1e4,u),this.Wa=La("forwardChannelMaxRetries",2,u),this.wa=La("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new R_(u&&u.concurrentRequestLimit),this.Da=new fC,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=K_.prototype,n.la=8,n.G=1,n.connect=function(u,h,p,_){Ne(0),this.W=u,this.H=h||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=tv(this,null,this.W),sc(this)};function pf(u){if(G_(u),u.G==3){var h=u.U++,p=hr(u.I);if(Re(p,"SID",u.K),Re(p,"RID",h),Re(p,"TYPE","terminate"),Ma(u,p),h=new Br(u,u.j,h),h.L=2,h.v=ec(hr(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=nv(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ju(h)}ev(u)}function ic(u){u.g&&(gf(u),u.g.cancel(),u.g=null)}function G_(u){ic(u),u.u&&(a.clearTimeout(u.u),u.u=null),oc(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function sc(u){if(!C_(u.h)&&!u.s){u.s=!0;var h=u.Ga;ot||ee(),Q||(ot(),Q=!0),W.add(h,u),u.B=0}}function _C(u,h){return b_(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=h.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=yt(m(u.Ga,u,h),Z_(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const x=new Br(this,this.j,u);let O=this.o;if(this.S&&(O?(O=y(O),P(O,this.S)):O=this.S),this.m!==null||this.O||(x.H=O,O=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Q_(this,x,h),p=hr(this.I),Re(p,"RID",u),Re(p,"CVER",22),this.D&&Re(p,"X-HTTP-Session-Id",this.D),Ma(this,p),O&&(this.O?h="headers="+encodeURIComponent(String(B_(O)))+"&"+h:this.m&&ff(p,this.m,O)),hf(this.h,x),this.Ua&&Re(p,"TYPE","init"),this.P?(Re(p,"$req",h),Re(p,"SID","null"),x.T=!0,lf(x,p,null)):lf(x,p,h),this.G=2}}else this.G==3&&(u?H_(this,u):this.i.length==0||C_(this.h)||H_(this))};function H_(u,h){var p;h?p=h.l:p=u.U++;const _=hr(u.I);Re(_,"SID",u.K),Re(_,"RID",p),Re(_,"AID",u.T),Ma(u,_),u.m&&u.o&&ff(_,u.m,u.o),p=new Br(u,u.j,p,u.B+1),u.m===null&&(p.H=u.o),h&&(u.i=h.D.concat(u.i)),h=Q_(u,p,1e3),p.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),hf(u.h,p),lf(p,_,h)}function Ma(u,h){u.H&&L(u.H,function(p,_){Re(h,_,p)}),u.l&&N_({},function(p,_){Re(h,_,p)})}function Q_(u,h,p){p=Math.min(u.i.length,p);var _=u.l?m(u.l.Na,u.l,u):null;e:{var x=u.i;let O=-1;for(;;){const q=["count="+p];O==-1?0<p?(O=x[0].g,q.push("ofs="+O)):O=0:q.push("ofs="+O);let Se=!0;for(let _t=0;_t<p;_t++){let ge=x[_t].g;const Rt=x[_t].map;if(ge-=O,0>ge)O=Math.max(0,x[_t].g-100),Se=!1;else try{pC(Rt,q,"req"+ge+"_")}catch{_&&_(Rt)}}if(Se){_=q.join("&");break e}}}return u=u.i.splice(0,p),h.D=u,_}function Y_(u){if(!u.g&&!u.u){u.Y=1;var h=u.Fa;ot||ee(),Q||(ot(),Q=!0),W.add(h,u),u.v=0}}function mf(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=yt(m(u.Fa,u),Z_(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,J_(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=yt(m(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ne(10),ic(this),J_(this))};function gf(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function J_(u){u.g=new Br(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var h=hr(u.qa);Re(h,"RID","rpc"),Re(h,"SID",u.K),Re(h,"AID",u.T),Re(h,"CI",u.F?"0":"1"),!u.F&&u.ja&&Re(h,"TO",u.ja),Re(h,"TYPE","xmlhttp"),Ma(u,h),u.m&&u.o&&ff(h,u.m,u.o),u.L&&(u.g.I=u.L);var p=u.g;u=u.ia,p.L=1,p.v=ec(hr(h)),p.m=null,p.P=!0,S_(p,u)}n.Za=function(){this.C!=null&&(this.C=null,ic(this),mf(this),Ne(19))};function oc(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function X_(u,h){var p=null;if(u.g==h){oc(u),gf(u),u.g=null;var _=2}else if(df(u.h,h))p=h.D,k_(u.h,h),_=1;else return;if(u.G!=0){if(h.o)if(_==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var x=u.B;_=fe(),$e(_,new zn(_,p)),sc(u)}else Y_(u);else if(x=h.s,x==3||x==0&&0<h.X||!(_==1&&_C(u,h)||_==2&&mf(u)))switch(p&&0<p.length&&(h=u.h,h.i=h.i.concat(p)),x){case 1:Ki(u,5);break;case 4:Ki(u,10);break;case 3:Ki(u,6);break;default:Ki(u,2)}}}function Z_(u,h){let p=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(p*=2),p*h}function Ki(u,h){if(u.j.info("Error code "+h),h==2){var p=m(u.fb,u),_=u.Xa;const x=!_;_=new Wi(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Xu(_,"https"),ec(_),x?dC(_.toString(),p):hC(_.toString(),p)}else Ne(2);u.G=0,u.l&&u.l.sa(h),ev(u),G_(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Ne(2)):(this.j.info("Failed to ping google.com"),Ne(1))};function ev(u){if(u.G=0,u.ka=[],u.l){const h=x_(u.h);(h.length!=0||u.i.length!=0)&&(C(u.ka,h),C(u.ka,u.i),u.h.i.length=0,A(u.i),u.i.length=0),u.l.ra()}}function tv(u,h,p){var _=p instanceof Wi?hr(p):new Wi(p);if(_.g!="")h&&(_.g=h+"."+_.g),Zu(_,_.s);else{var x=a.location;_=x.protocol,h=h?h+"."+x.hostname:x.hostname,x=+x.port;var O=new Wi(null);_&&Xu(O,_),h&&(O.g=h),x&&Zu(O,x),p&&(O.l=p),_=O}return p=u.D,h=u.ya,p&&h&&Re(_,p,h),Re(_,"VER",u.la),Ma(u,_),_}function nv(u,h,p){if(h&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=u.Ca&&!u.pa?new qe(new tc({eb:p})):new qe(u.pa),h.Ha(u.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function rv(){}n=rv.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ac(){}ac.prototype.g=function(u,h){return new an(u,h)};function an(u,h){_e.call(this),this.g=new K_(h),this.l=u,this.h=h&&h.messageUrlParams||null,u=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(u?u["X-WebChannel-Content-Type"]=h.messageContentType:u={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(u?u["X-WebChannel-Client-Profile"]=h.va:u={"X-WebChannel-Client-Profile":h.va}),this.g.S=u,(u=h&&h.Sb)&&!w(u)&&(this.g.m=u),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.D=h,u=this.h,u!==null&&h in u&&(u=this.h,h in u&&delete u[h])),this.j=new Ys(this)}S(an,_e),an.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},an.prototype.close=function(){pf(this.g)},an.prototype.o=function(u){var h=this.g;if(typeof u=="string"){var p={};p.__data__=u,u=p}else this.u&&(p={},p.__data__=Gs(u),u=p);h.i.push(new tC(h.Ya++,u)),h.G==3&&sc(h)},an.prototype.N=function(){this.g.l=null,delete this.j,pf(this.g),delete this.g,an.aa.N.call(this)};function iv(u){$i.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var h=u.__sm__;if(h){e:{for(const p in h){u=p;break e}u=void 0}(this.i=u)&&(u=this.i,h=h!==null&&u in h?h[u]:void 0),this.data=h}else this.data=u}S(iv,$i);function sv(){_n.call(this),this.status=1}S(sv,_n);function Ys(u){this.g=u}S(Ys,rv),Ys.prototype.ua=function(){$e(this.g,"a")},Ys.prototype.ta=function(u){$e(this.g,new iv(u))},Ys.prototype.sa=function(u){$e(this.g,new sv)},Ys.prototype.ra=function(){$e(this.g,"b")},ac.prototype.createWebChannel=ac.prototype.g,an.prototype.send=an.prototype.o,an.prototype.open=an.prototype.m,an.prototype.close=an.prototype.close,CA=function(){return new ac},RA=function(){return fe()},PA=dr,wm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Qu.NO_ERROR=0,Qu.TIMEOUT=8,Qu.HTTP_ERROR=6,Jc=Qu,I_.COMPLETE="complete",AA=I_,ba.EventType=zi,zi.OPEN="a",zi.CLOSE="b",zi.ERROR="c",zi.MESSAGE="d",_e.prototype.listen=_e.prototype.K,al=ba,qe.prototype.listenOnce=qe.prototype.L,qe.prototype.getLastError=qe.prototype.Ka,qe.prototype.getLastErrorCode=qe.prototype.Ba,qe.prototype.getStatus=qe.prototype.Z,qe.prototype.getResponseJson=qe.prototype.Oa,qe.prototype.getResponseText=qe.prototype.oa,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Ha,SA=qe}).apply(typeof bc<"u"?bc:typeof self<"u"?self:typeof window<"u"?window:{});const dI="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fa="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=new wh("@firebase/firestore");function io(){return Ei.logLevel}function U2(n){Ei.setLogLevel(n)}function U(n,...e){if(Ei.logLevel<=ae.DEBUG){const t=e.map(_y);Ei.debug(`Firestore (${fa}): ${n}`,...t)}}function Xe(n,...e){if(Ei.logLevel<=ae.ERROR){const t=e.map(_y);Ei.error(`Firestore (${fa}): ${n}`,...t)}}function or(n,...e){if(Ei.logLevel<=ae.WARN){const t=e.map(_y);Ei.warn(`Firestore (${fa}): ${n}`,...t)}}function _y(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(n="Unexpected state"){const e=`FIRESTORE (${fa}) INTERNAL ASSERTION FAILED: `+n;throw Xe(e),new Error(e)}function X(n,e){n||Y()}function B2(n,e){n||Y()}function H(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends Bt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class j2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ft.UNAUTHENTICATED))}shutdown(){}}class z2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class $2{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){X(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let s=new Tt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Tt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Tt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string"),new bA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string"),new ft(e)}}class q2{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class W2{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new q2(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class K2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class G2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){X(this.o===void 0);const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(X(typeof t.token=="string"),this.R=t.token,new K2(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H2(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=H2(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function se(n,e){return n<e?-1:n>e?1:0}function Ko(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function xA(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new F(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Me(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Me(0,0))}static max(){return new Z(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,t,r){t===void 0?t=0:t>e.length&&Y(),r===void 0?r=e.length-t:r>e.length-t&&Y(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ru.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ru?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ue extends ru{construct(e,t,r){return new ue(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new ue(t)}static emptyPath(){return new ue([])}}const Q2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Oe extends ru{construct(e,t,r){return new Oe(e,t,r)}static isValidIdentifier(e){return Q2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Oe(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new F(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new F(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new F(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Oe(t)}static emptyPath(){return new Oe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(ue.fromString(e))}static fromName(e){return new K(ue.fromString(e).popFirst(5))}static empty(){return new K(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ue.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new ue(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function Im(n){return n.fields.find(e=>e.kind===2)}function Ji(n){return n.fields.filter(e=>e.kind!==2)}Bd.UNKNOWN_ID=-1;class Xc{constructor(e,t){this.fieldPath=e,this.kind=t}}class iu{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new iu(0,pn.min())}}function NA(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new Me(t+1,0):new Me(t,r));return new pn(i,K.empty(),e)}function DA(n){return new pn(n.readTime,n.key,-1)}class pn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new pn(Z.min(),K.empty(),-1)}static max(){return new pn(Z.max(),K.empty(),-1)}}function vy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=K.comparator(n.documentKey,e.documentKey),t!==0?t:se(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class OA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==VA)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):D.reject(t)}static resolve(e){return new D((t,r)=>{t(e)})}static reject(e){return new D((t,r)=>{r(e)})}static waitFor(e){return new D((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},l=>r(l))}),o=!0,s===i&&t()})}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next(i=>i?D.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new D((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;t(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,t){return new D((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new Tt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Tl(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=wy(r.target.error);this.V.reject(new Tl(e,i))}}static open(e,t,r,i){try{return new Nh(t,e.transaction(i,r))}catch(s){throw new Tl(t,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(U("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new J2(t)}}class tr{constructor(e,t,r){this.name=e,this.version=t,this.p=r,tr.S(ze())===12.2&&Xe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return U("SimpleDb","Removing database:",e),Xi(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Hl())return!1;if(tr.v())return!0;const e=ze(),t=tr.S(e),r=0<t&&t<10,i=LA(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(U("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new Tl(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new F(V.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new F(V.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Tl(e,o))},i.onupgradeneeded=s=>{U("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{U("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=Nh.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),D.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(U("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function LA(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class Y2{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Xi(this.B.delete())}}class Tl extends F{constructor(e,t){super(V.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Li(n){return n.name==="IndexedDbTransactionError"}class J2{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(U("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(U("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Xi(r)}add(e){return U("SimpleDb","ADD",this.store.name,e,e),Xi(this.store.add(e))}get(e){return Xi(this.store.get(e)).next(t=>(t===void 0&&(t=null),U("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return U("SimpleDb","DELETE",this.store.name,e),Xi(this.store.delete(e))}count(){return U("SimpleDb","COUNT",this.store.name),Xi(this.store.count())}U(e,t){const r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new D((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,l)=>{o.push(l)}).next(()=>o)}}G(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new D((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,t){U("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.W(i,t)}Y(e){const t=this.cursor({});return new D((r,i)=>{t.onerror=s=>{const o=wy(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new D((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new Y2(a),c=t(a.primaryKey,a.value,l);if(c instanceof D){const d=c.catch(f=>(l.done(),D.reject(f)));r.push(d)}l.isDone?i():l.K===null?a.continue():a.continue(l.K)}}).next(()=>D.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Xi(n){return new D((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=wy(r.target.error);t(i)}})}let hI=!1;function wy(n){const e=tr.S(ze());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new F("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return hI||(hI=!0,setTimeout(()=>{throw r},0)),r}}return n}class X2{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){U("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{U("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Li(t)?U("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await Oi(t)}await this.X(6e4)})}}class Z2{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const r=new Set;let i=t,s=!0;return D.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return U("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(U("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}re(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=DA(s);vy(o,r)>0&&(r=o)}),new pn(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Zt.oe=-1;function Nu(n){return n==null}function su(n){return n===0&&1/n==-1/0}function MA(n){return typeof n=="number"&&Number.isInteger(n)&&!su(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=fI(e)),e=eM(n.get(t),e);return fI(e)}function eM(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function fI(n){return n+""}function Jn(n){const e=n.length;if(X(e>=2),e===2)return X(n.charAt(0)===""&&n.charAt(1)===""),ue.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&Y(),n.charAt(o+1)){case"":const a=n.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:Y()}s=o+2}return new ue(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(n,e){return[n,jt(e)]}function FA(n,e,t){return[n,jt(e),t]}const tM={},nM=["prefixPath","collectionGroup","readTime","documentId"],rM=["prefixPath","collectionGroup","documentId"],iM=["collectionGroup","readTime","prefixPath","documentId"],sM=["canonicalId","targetId"],oM=["targetId","path"],aM=["path","targetId"],lM=["collectionId","parent"],uM=["indexId","uid"],cM=["uid","sequenceNumber"],dM=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],hM=["indexId","uid","orderedDocumentKey"],fM=["userId","collectionPath","documentId"],pM=["userId","collectionPath","largestBatchId"],mM=["userId","collectionGroup","largestBatchId"],UA=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],gM=[...UA,"documentOverlays"],BA=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],jA=BA,Iy=[...jA,"indexConfiguration","indexState","indexEntries"],yM=Iy,_M=[...Iy,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em extends OA{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function ct(n,e){const t=H(n);return tr.F(t._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Fs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function zA(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,t){this.comparator=e,this.root=t||wt.EMPTY}insert(e,t){return new Pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,wt.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,wt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new kc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new kc(this.root,e,this.comparator,!1)}getReverseIterator(){return new kc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new kc(this.root,e,this.comparator,!0)}}class kc{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class wt{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??wt.RED,this.left=i??wt.EMPTY,this.right=s??wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new wt(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return wt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return wt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}wt.EMPTY=null,wt.RED=!0,wt.BLACK=!1;wt.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,t,r,i,s){return this}insert(e,t,r){return new wt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new gI(this.data.getIterator())}getIteratorFrom(e){return new gI(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ie)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ie(this.comparator);return t.data=e,t}}class gI{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function eo(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.fields=e,e.sort(Oe.comparator)}static empty(){return new en([])}unionWith(e){let t=new Ie(Oe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new en(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ko(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vM(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new $A("Invalid base64 string: "+s):s}}(e);return new He(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new He(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}He.EMPTY_BYTE_STRING=new He("");const wM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function br(n){if(X(!!n),typeof n=="string"){let e=0;const t=wM.exec(n);if(X(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(n.seconds),nanos:De(n.nanos)}}function De(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ti(n){return typeof n=="string"?He.fromBase64String(n):He.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ey(n){const e=n.mapValue.fields.__previous_value__;return Dh(e)?Ey(e):e}function ou(n){const e=br(n.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IM{constructor(e,t,r,i,s,o,a,l,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Si{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Si("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Si&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},ed={nullValue:"NULL_VALUE"};function Ts(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Dh(n)?4:qA(n)?9007199254740991:Vh(n)?10:11:Y()}function ar(n,e){if(n===e)return!0;const t=Ts(n);if(t!==Ts(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ou(n).isEqual(ou(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=br(i.timestampValue),a=br(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Ti(i.bytesValue).isEqual(Ti(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return De(i.geoPointValue.latitude)===De(s.geoPointValue.latitude)&&De(i.geoPointValue.longitude)===De(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return De(i.integerValue)===De(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=De(i.doubleValue),a=De(s.doubleValue);return o===a?su(o)===su(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return Ko(n.arrayValue.values||[],e.arrayValue.values||[],ar);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(mI(o)!==mI(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!ar(o[l],a[l])))return!1;return!0}(n,e);default:return Y()}}function au(n,e){return(n.values||[]).find(t=>ar(t,e))!==void 0}function Ai(n,e){if(n===e)return 0;const t=Ts(n),r=Ts(e);if(t!==r)return se(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return se(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=De(s.integerValue||s.doubleValue),l=De(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,e);case 3:return yI(n.timestampValue,e.timestampValue);case 4:return yI(ou(n),ou(e));case 5:return se(n.stringValue,e.stringValue);case 6:return function(s,o){const a=Ti(s),l=Ti(o);return a.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const d=se(a[c],l[c]);if(d!==0)return d}return se(a.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=se(De(s.latitude),De(o.latitude));return a!==0?a:se(De(s.longitude),De(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return _I(n.arrayValue,e.arrayValue);case 10:return function(s,o){var a,l,c,d;const f=s.fields||{},m=o.fields||{},g=(a=f.value)===null||a===void 0?void 0:a.arrayValue,S=(l=m.value)===null||l===void 0?void 0:l.arrayValue,A=se(((c=g==null?void 0:g.values)===null||c===void 0?void 0:c.length)||0,((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0);return A!==0?A:_I(g,S)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===si.mapValue&&o===si.mapValue)return 0;if(s===si.mapValue)return 1;if(o===si.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},d=Object.keys(c);l.sort(),d.sort();for(let f=0;f<l.length&&f<d.length;++f){const m=se(l[f],d[f]);if(m!==0)return m;const g=Ai(a[l[f]],c[d[f]]);if(g!==0)return g}return se(l.length,d.length)}(n.mapValue,e.mapValue);default:throw Y()}}function yI(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return se(n,e);const t=br(n),r=br(e),i=se(t.seconds,r.seconds);return i!==0?i:se(t.nanos,r.nanos)}function _I(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Ai(t[i],r[i]);if(s)return s}return se(t.length,r.length)}function Go(n){return Tm(n)}function Tm(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=br(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ti(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return K.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Tm(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Tm(t.fields[o])}`;return i+"}"}(n.mapValue):Y()}function Ss(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Sm(n){return!!n&&"integerValue"in n}function lu(n){return!!n&&"arrayValue"in n}function vI(n){return!!n&&"nullValue"in n}function wI(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function td(n){return!!n&&"mapValue"in n}function Vh(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Sl(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Fs(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Sl(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Sl(n.arrayValue.values[t]);return e}return Object.assign({},n)}function qA(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const WA={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function EM(n){return"nullValue"in n?ed:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Ss(Si.empty(),K.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Vh(n)?WA:{mapValue:{}}:Y()}function TM(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Ss(Si.empty(),K.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?WA:"mapValue"in n?Vh(n)?{mapValue:{}}:si:Y()}function II(n,e){const t=Ai(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function EI(n,e){const t=Ai(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!td(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Sl(t)}setAll(e){let t=Oe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=Sl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());td(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ar(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];td(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Fs(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new It(Sl(this.value))}}function KA(n){const e=[];return Fs(n.fields,(t,r)=>{const i=new Oe([t]);if(td(r)){const s=KA(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new en(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new be(e,0,Z.min(),Z.min(),Z.min(),It.empty(),0)}static newFoundDocument(e,t,r,i){return new be(e,1,t,Z.min(),r,i,0)}static newNoDocument(e,t){return new be(e,2,t,Z.min(),Z.min(),It.empty(),0)}static newUnknownDocument(e,t){return new be(e,3,t,Z.min(),Z.min(),It.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,t){this.position=e,this.inclusive=t}}function TI(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),t.key):r=Ai(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function SI(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ar(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,t="asc"){this.field=e,this.dir=t}}function SM(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{}class ce extends GA{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new AM(e,t,r):t==="array-contains"?new CM(e,r):t==="in"?new ZA(e,r):t==="not-in"?new bM(e,r):t==="array-contains-any"?new kM(e,r):new ce(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new PM(e,r):new RM(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ai(t,this.value)):t!==null&&Ts(this.value)===Ts(t)&&this.matchesComparison(Ai(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ve extends GA{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ve(e,t)}matches(e){return Ho(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ho(n){return n.op==="and"}function Am(n){return n.op==="or"}function Ty(n){return HA(n)&&Ho(n)}function HA(n){for(const e of n.filters)if(e instanceof ve)return!1;return!0}function Pm(n){if(n instanceof ce)return n.field.canonicalString()+n.op.toString()+Go(n.value);if(Ty(n))return n.filters.map(e=>Pm(e)).join(",");{const e=n.filters.map(t=>Pm(t)).join(",");return`${n.op}(${e})`}}function QA(n,e){return n instanceof ce?function(r,i){return i instanceof ce&&r.op===i.op&&r.field.isEqual(i.field)&&ar(r.value,i.value)}(n,e):n instanceof ve?function(r,i){return i instanceof ve&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&QA(o,i.filters[a]),!0):!1}(n,e):void Y()}function YA(n,e){const t=n.filters.concat(e);return ve.create(t,n.op)}function JA(n){return n instanceof ce?function(t){return`${t.field.canonicalString()} ${t.op} ${Go(t.value)}`}(n):n instanceof ve?function(t){return t.op.toString()+" {"+t.getFilters().map(JA).join(" ,")+"}"}(n):"Filter"}class AM extends ce{constructor(e,t,r){super(e,t,r),this.key=K.fromName(r.referenceValue)}matches(e){const t=K.comparator(e.key,this.key);return this.matchesComparison(t)}}class PM extends ce{constructor(e,t){super(e,"in",t),this.keys=XA("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class RM extends ce{constructor(e,t){super(e,"not-in",t),this.keys=XA("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function XA(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>K.fromName(r.referenceValue))}class CM extends ce{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return lu(t)&&au(t.arrayValue,this.value)}}class ZA extends ce{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&au(this.value.arrayValue,t)}}class bM extends ce{constructor(e,t){super(e,"not-in",t)}matches(e){if(au(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!au(this.value.arrayValue,t)}}class kM extends ce{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!lu(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>au(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xM{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Rm(n,e=null,t=[],r=[],i=null,s=null,o=null){return new xM(n,e,t,r,i,s,o)}function As(n){const e=H(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Pm(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Nu(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Go(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Go(r)).join(",")),e.ue=t}return e.ue}function Du(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!SM(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!QA(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!SI(n.startAt,e.startAt)&&SI(n.endAt,e.endAt)}function jd(n){return K.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function zd(n,e){return n.filters.filter(t=>t instanceof ce&&t.field.isEqual(e))}function AI(n,e,t){let r=ed,i=!0;for(const s of zd(n,e)){let o=ed,a=!0;switch(s.op){case"<":case"<=":o=EM(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=ed}II({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];II({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function PI(n,e,t){let r=si,i=!0;for(const s of zd(n,e)){let o=si,a=!0;switch(s.op){case">=":case">":o=TM(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=si}EI({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];EI({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function eP(n,e,t,r,i,s,o,a){return new Vr(n,e,t,r,i,s,o,a)}function pa(n){return new Vr(n)}function RI(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Sy(n){return n.collectionGroup!==null}function Do(n){const e=H(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ie(Oe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new uu(s,r))}),t.has(Oe.keyField().canonicalString())||e.ce.push(new uu(Oe.keyField(),r))}return e.ce}function zt(n){const e=H(n);return e.le||(e.le=NM(e,Do(n))),e.le}function NM(n,e){if(n.limitType==="F")return Rm(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new uu(i.field,s)});const t=n.endAt?new Pi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Pi(n.startAt.position,n.startAt.inclusive):null;return Rm(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Cm(n,e){const t=n.filters.concat([e]);return new Vr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function $d(n,e,t){return new Vr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Vu(n,e){return Du(zt(n),zt(e))&&n.limitType===e.limitType}function tP(n){return`${As(zt(n))}|lt:${n.limitType}`}function so(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>JA(i)).join(", ")}]`),Nu(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Go(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Go(i)).join(",")),`Target(${r})`}(zt(n))}; limitType=${n.limitType})`}function Ou(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Do(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=TI(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Do(r),i)||r.endAt&&!function(o,a,l){const c=TI(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Do(r),i))}(n,e)}function nP(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function rP(n){return(e,t)=>{let r=!1;for(const i of Do(n)){const s=DM(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function DM(n,e,t){const r=n.field.isKeyField()?K.comparator(e.key,t.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?Ai(l,c):Y()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Fs(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return zA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VM=new Pe(K.comparator);function tn(){return VM}const iP=new Pe(K.comparator);function ll(...n){let e=iP;for(const t of n)e=e.insert(t.key,t);return e}function sP(n){let e=iP;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Xn(){return Al()}function oP(){return Al()}function Al(){return new Mi(n=>n.toString(),(n,e)=>n.isEqual(e))}const OM=new Pe(K.comparator),LM=new Ie(K.comparator);function oe(...n){let e=LM;for(const t of n)e=e.add(t);return e}const MM=new Ie(se);function Ay(){return MM}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:su(e)?"-0":e}}function aP(n){return{integerValue:""+n}}function lP(n,e){return MA(e)?aP(e):Py(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(){this._=void 0}}function FM(n,e,t){return n instanceof Qo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Dh(s)&&(s=Ey(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof Ps?cP(n,e):n instanceof Rs?dP(n,e):function(i,s){const o=uP(i,s),a=CI(o)+CI(i.Pe);return Sm(o)&&Sm(i.Pe)?aP(a):Py(i.serializer,a)}(n,e)}function UM(n,e,t){return n instanceof Ps?cP(n,e):n instanceof Rs?dP(n,e):t}function uP(n,e){return n instanceof Yo?function(r){return Sm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Qo extends Oh{}class Ps extends Oh{constructor(e){super(),this.elements=e}}function cP(n,e){const t=hP(e);for(const r of n.elements)t.some(i=>ar(i,r))||t.push(r);return{arrayValue:{values:t}}}class Rs extends Oh{constructor(e){super(),this.elements=e}}function dP(n,e){let t=hP(e);for(const r of n.elements)t=t.filter(i=>!ar(i,r));return{arrayValue:{values:t}}}class Yo extends Oh{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function CI(n){return De(n.integerValue||n.doubleValue)}function hP(n){return lu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,t){this.field=e,this.transform=t}}function BM(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Ps&&i instanceof Ps||r instanceof Rs&&i instanceof Rs?Ko(r.elements,i.elements,ar):r instanceof Yo&&i instanceof Yo?ar(r.Pe,i.Pe):r instanceof Qo&&i instanceof Qo}(n.transform,e.transform)}class jM{constructor(e,t){this.version=e,this.transformResults=t}}class Le{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Le}static exists(e){return new Le(void 0,e)}static updateTime(e){return new Le(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nd(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Lh{}function fP(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ga(n.key,Le.none()):new ma(n.key,n.data,Le.none());{const t=n.data,r=It.empty();let i=new Ie(Oe.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Or(n.key,r,new en(i.toArray()),Le.none())}}function zM(n,e,t){n instanceof ma?function(i,s,o){const a=i.value.clone(),l=kI(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof Or?function(i,s,o){if(!nd(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=kI(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(pP(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Pl(n,e,t,r){return n instanceof ma?function(s,o,a,l){if(!nd(s.precondition,o))return a;const c=s.value.clone(),d=xI(s.fieldTransforms,l,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof Or?function(s,o,a,l){if(!nd(s.precondition,o))return a;const c=xI(s.fieldTransforms,l,o),d=o.data;return d.setAll(pP(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(n,e,t,r):function(s,o,a){return nd(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function $M(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=uP(r.transform,i||null);s!=null&&(t===null&&(t=It.empty()),t.set(r.field,s))}return t||null}function bI(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ko(r,i,(s,o)=>BM(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ma extends Lh{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Or extends Lh{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function pP(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function kI(n,e,t){const r=new Map;X(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,UM(o,a,t[i]))}return r}function xI(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,FM(s,o,e))}return r}class ga extends Lh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ry extends Lh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&zM(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Pl(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Pl(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=oP();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const l=fP(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),oe())}isEqual(e){return this.batchId===e.batchId&&Ko(this.mutations,e.mutations,(t,r)=>bI(t,r))&&Ko(this.baseMutations,e.baseMutations,(t,r)=>bI(t,r))}}class by{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){X(e.mutations.length===r.length);let i=function(){return OM}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new by(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qM{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,de;function mP(n){switch(n){default:return Y();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function gP(n){if(n===void 0)return Xe("GRPC error has no .code"),V.UNKNOWN;switch(n){case tt.OK:return V.OK;case tt.CANCELLED:return V.CANCELLED;case tt.UNKNOWN:return V.UNKNOWN;case tt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case tt.INTERNAL:return V.INTERNAL;case tt.UNAVAILABLE:return V.UNAVAILABLE;case tt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case tt.NOT_FOUND:return V.NOT_FOUND;case tt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case tt.ABORTED:return V.ABORTED;case tt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case tt.DATA_LOSS:return V.DATA_LOSS;default:return Y()}}(de=tt||(tt={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yP(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WM=new ps([4294967295,4294967295],0);function NI(n){const e=yP().encode(n),t=new TA;return t.update(e),new Uint8Array(t.digest())}function DI(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ps([t,r],0),new ps([i,s],0)]}class xy{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ul(`Invalid padding: ${t}`);if(r<0)throw new ul(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ul(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ul(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=ps.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(ps.fromNumber(r)));return i.compare(WM)===1&&(i=new ps([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=NI(e),[r,i]=DI(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new xy(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const t=NI(e),[r,i]=DI(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ul extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Fu.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Mu(Z.min(),i,new Pe(se),tn(),oe())}}class Fu{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Fu(r,t,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class _P{constructor(e,t){this.targetId=e,this.me=t}}class vP{constructor(e,t,r=He.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class VI{constructor(){this.fe=0,this.ge=LI(),this.pe=He.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=oe(),t=oe(),r=oe();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new Fu(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=LI()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,X(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class KM{constructor(e){this.Le=e,this.Be=new Map,this.ke=tn(),this.qe=OI(),this.Qe=new Pe(se)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(jd(s))if(r===0){const o=new K(s.path);this.Ue(t,o,be.newNoDocument(o,Z.min()))}else X(r===1);else{const o=this.Ye(t);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(t);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,c)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,a;try{o=Ti(r).toUint8Array()}catch(l){if(l instanceof $A)return or("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new xy(o,i,s)}catch(l){return or(l instanceof ul?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&jd(a.target)){const l=new K(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,be.newNoDocument(l,e))}s.be&&(t.set(o,s.ve()),s.Ce())}});let r=oe();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Mu(e,t,this.Qe,this.ke,r);return this.ke=tn(),this.qe=OI(),this.Qe=new Pe(se),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new VI,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ie(se),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||U("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new VI),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function OI(){return new Pe(K.comparator)}function LI(){return new Pe(K.comparator)}const GM={asc:"ASCENDING",desc:"DESCENDING"},HM={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},QM={and:"AND",or:"OR"};class YM{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function bm(n,e){return n.useProto3Json||Nu(e)?e:{value:e}}function Jo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wP(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function JM(n,e){return Jo(n,e.toTimestamp())}function Ze(n){return X(!!n),Z.fromTimestamp(function(t){const r=br(t);return new Me(r.seconds,r.nanos)}(n))}function Ny(n,e){return km(n,e).canonicalString()}function km(n,e){const t=function(i){return new ue(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function IP(n){const e=ue.fromString(n);return X(xP(e)),e}function cu(n,e){return Ny(n.databaseId,e.path)}function nr(n,e){const t=IP(e);if(t.get(1)!==n.databaseId.projectId)throw new F(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new F(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new K(SP(t))}function EP(n,e){return Ny(n.databaseId,e)}function TP(n){const e=IP(n);return e.length===4?ue.emptyPath():SP(e)}function xm(n){return new ue(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function SP(n){return X(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function MI(n,e,t){return{name:cu(n,e),fields:t.value.mapValue.fields}}function AP(n,e,t){const r=nr(n,e.name),i=Ze(e.updateTime),s=e.createTime?Ze(e.createTime):Z.min(),o=new It({mapValue:{fields:e.fields}}),a=be.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function XM(n,e){return"found"in e?function(r,i){X(!!i.found),i.found.name,i.found.updateTime;const s=nr(r,i.found.name),o=Ze(i.found.updateTime),a=i.found.createTime?Ze(i.found.createTime):Z.min(),l=new It({mapValue:{fields:i.found.fields}});return be.newFoundDocument(s,o,a,l)}(n,e):"missing"in e?function(r,i){X(!!i.missing),X(!!i.readTime);const s=nr(r,i.missing),o=Ze(i.readTime);return be.newNoDocument(s,o)}(n,e):Y()}function ZM(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(X(d===void 0||typeof d=="string"),He.fromBase64String(d||"")):(X(d===void 0||d instanceof Buffer||d instanceof Uint8Array),He.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?V.UNKNOWN:gP(c.code);return new F(d,c.message||"")}(o);t=new vP(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=nr(n,r.document.name),s=Ze(r.document.updateTime),o=r.document.createTime?Ze(r.document.createTime):Z.min(),a=new It({mapValue:{fields:r.document.fields}}),l=be.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];t=new rd(c,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=nr(n,r.document),s=r.readTime?Ze(r.readTime):Z.min(),o=be.newNoDocument(i,s),a=r.removedTargetIds||[];t=new rd([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=nr(n,r.document),s=r.removedTargetIds||[];t=new rd([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new qM(i,s),a=r.targetId;t=new _P(a,o)}}return t}function du(n,e){let t;if(e instanceof ma)t={update:MI(n,e.key,e.value)};else if(e instanceof ga)t={delete:cu(n,e.key)};else if(e instanceof Or)t={update:MI(n,e.key,e.data),updateMask:sF(e.fieldMask)};else{if(!(e instanceof Ry))return Y();t={verify:cu(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Qo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ps)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Rs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Yo)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Y()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:JM(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(n,e.precondition)),t}function Nm(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?Le.updateTime(Ze(s.updateTime)):s.exists!==void 0?Le.exists(s.exists):Le.none()}(e.currentDocument):Le.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)X(a.setToServerValue==="REQUEST_TIME"),l=new Qo;else if("appendMissingElements"in a){const d=a.appendMissingElements.values||[];l=new Ps(d)}else if("removeAllFromArray"in a){const d=a.removeAllFromArray.values||[];l=new Rs(d)}else"increment"in a?l=new Yo(o,a.increment):Y();const c=Oe.fromServerFormat(a.fieldPath);return new Lu(c,l)}(n,i)):[];if(e.update){e.update.name;const i=nr(n,e.update.name),s=new It({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const c=l.fieldPaths||[];return new en(c.map(d=>Oe.fromServerFormat(d)))}(e.updateMask);return new Or(i,s,o,t,r)}return new ma(i,s,t,r)}if(e.delete){const i=nr(n,e.delete);return new ga(i,t)}if(e.verify){const i=nr(n,e.verify);return new Ry(i,t)}return Y()}function eF(n,e){return n&&n.length>0?(X(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?Ze(i.updateTime):Ze(s);return o.isEqual(Z.min())&&(o=Ze(s)),new jM(o,i.transformResults||[])}(t,e))):[]}function PP(n,e){return{documents:[EP(n,e.path)]}}function RP(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=EP(n,i);const s=function(c){if(c.length!==0)return kP(ve.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:oo(m.field),direction:nF(m.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=bm(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:t,parent:i}}function CP(n){let e=TP(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){X(r===1);const d=t.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];t.where&&(s=function(f){const m=bP(f);return m instanceof ve&&Ty(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(f){return f.map(m=>function(S){return new uu(ao(S.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(t.orderBy));let a=null;t.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Nu(m)?null:m}(t.limit));let l=null;t.startAt&&(l=function(f){const m=!!f.before,g=f.values||[];return new Pi(g,m)}(t.startAt));let c=null;return t.endAt&&(c=function(f){const m=!f.before,g=f.values||[];return new Pi(g,m)}(t.endAt)),eP(e,i,o,s,a,"F",l,c)}function tF(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function bP(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ao(t.unaryFilter.field);return ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ao(t.unaryFilter.field);return ce.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ao(t.unaryFilter.field);return ce.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ao(t.unaryFilter.field);return ce.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(n):n.fieldFilter!==void 0?function(t){return ce.create(ao(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ve.create(t.compositeFilter.filters.map(r=>bP(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(t.compositeFilter.op))}(n):Y()}function nF(n){return GM[n]}function rF(n){return HM[n]}function iF(n){return QM[n]}function oo(n){return{fieldPath:n.canonicalString()}}function ao(n){return Oe.fromServerFormat(n.fieldPath)}function kP(n){return n instanceof ce?function(t){if(t.op==="=="){if(wI(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NAN"}};if(vI(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(wI(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NOT_NAN"}};if(vI(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:oo(t.field),op:rF(t.op),value:t.value}}}(n):n instanceof ve?function(t){const r=t.getFilters().map(i=>kP(i));return r.length===1?r[0]:{compositeFilter:{op:iF(t.op),filters:r}}}(n):Y()}function sF(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function xP(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,t,r,i,s=Z.min(),o=Z.min(),a=He.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new wr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e){this.ct=e}}function oF(n,e){let t;if(e.document)t=AP(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=K.fromSegments(e.noDocument.path),i=bs(e.noDocument.readTime);t=be.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return Y();{const r=K.fromSegments(e.unknownDocument.path),i=bs(e.unknownDocument.version);t=be.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const s=new Me(i[0],i[1]);return Z.fromTimestamp(s)}(e.readTime)),t}function FI(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:qd(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:cu(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Jo(s,o.version.toTimestamp()),createTime:Jo(s,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Cs(e.version)};else{if(!e.isUnknownDocument())return Y();r.unknownDocument={path:t.path.toArray(),version:Cs(e.version)}}return r}function qd(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Cs(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function bs(n){const e=new Me(n.seconds,n.nanoseconds);return Z.fromTimestamp(e)}function Zi(n,e){const t=(e.baseMutations||[]).map(s=>Nm(n.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Nm(n.ct,s)),i=Me.fromMillis(e.localWriteTimeMs);return new Cy(e.batchId,i,t,r)}function cl(n){const e=bs(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?bs(n.lastLimboFreeSnapshotVersion):Z.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return X(s.documents.length===1),zt(pa(TP(s.documents[0])))}(n.query):function(s){return zt(CP(s))}(n.query),new wr(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,He.fromBase64String(n.resumeToken))}function DP(n,e){const t=Cs(e.snapshotVersion),r=Cs(e.lastLimboFreeSnapshotVersion);let i;i=jd(e.target)?PP(n.ct,e.target):RP(n.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:As(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Dy(n){const e=CP({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?$d(e,e.limit,"L"):e}function np(n,e){return new ky(e.largestBatchId,Nm(n.ct,e.overlayMutation))}function UI(n,e){const t=e.path.lastSegment();return[n,jt(e.path.popLast()),t]}function BI(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Cs(r.readTime),documentKey:jt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aF{getBundleMetadata(e,t){return jI(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:bs(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return jI(e).put(function(i){return{bundleId:i.id,createTime:Cs(Ze(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return zI(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:Dy(s.bundledQuery),readTime:bs(s.readTime)}}(r)})}saveNamedQuery(e,t){return zI(e).put(function(i){return{name:i.name,readTime:Cs(Ze(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function jI(n){return ct(n,"bundles")}function zI(n){return ct(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new Mh(e,r)}getOverlay(e,t){return Qa(e).get(UI(this.userId,t)).next(r=>r?np(this.serializer,r):null)}getOverlays(e,t){const r=Xn();return D.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new ky(t,o);i.push(this.ht(e,a))}),D.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(jt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Qa(e).j("collectionPathOverlayIndex",a))}),D.waitFor(s)}getOverlaysForCollection(e,t,r){const i=Xn(),s=jt(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Qa(e).U("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const c=np(this.serializer,l);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=Xn();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Qa(e).J({index:"collectionGroupOverlayIndex",range:a},(l,c,d)=>{const f=np(this.serializer,c);s.size()<i||f.largestBatchId===o?(s.set(f.getKey(),f),o=f.largestBatchId):d.done()}).next(()=>s)}ht(e,t){return Qa(e).put(function(i,s,o){const[a,l,c]=UI(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:du(i.ct,o.mutation)}}(this.serializer,this.userId,t))}}function Qa(n){return ct(n,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lF{Pt(e){return ct(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?He.fromUint8Array(r):He.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(De(e.integerValue));else if("doubleValue"in e){const r=De(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),su(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=br(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Ti(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?qA(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Vh(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):Y()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const r=e.fields||{};this.dt(t,55);for(const i of Object.keys(r))this.Vt(i,t),this.Tt(r[i],t)}wt(e,t){var r,i;const s=e.fields||{};this.dt(t,53);const o="value",a=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(t,15),t.At(De(a)),this.Vt(o,t),this.Tt(s[o],t)}bt(e,t){const r=e.values||[];this.dt(t,50);for(const i of r)this.Tt(i,t)}yt(e,t){this.dt(t,37),K.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}es.vt=new es;function uF(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function $I(n){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=uF(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}class cF{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Lt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=t.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=t.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const t=this.qt(e),r=$I(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Kt(e){const t=this.qt(e),r=$I(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class dF{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class hF{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class Ya{constructor(){this.jt=new cF,this.Ht=new dF(this.jt),this.Jt=new hF(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new ts(this.indexId,this.documentKey,this.arrayValue,r)}}function Wr(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=qI(n.arrayValue,e.arrayValue),t!==0?t:(t=qI(n.directionalValue,e.directionalValue),t!==0?t:K.comparator(n.documentKey,e.documentKey)))}function qI(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e){this.Xt=new Ie((t,r)=>Oe.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(X(e.collectionGroup===this.collectionId),this.nn)return!1;const t=Im(e);if(t!==void 0&&!this.sn(t))return!1;const r=Ji(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){const a=this.Xt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.on(a,l)||!this._n(this.en[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.en.length||!this._n(this.en[o++],a))return!1}return!0}an(){if(this.nn)return null;let e=new Ie(Oe.comparator);const t=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Xc(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Xc(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Xc(r.field,r.dir==="asc"?0:1)));return new Bd(Bd.UNKNOWN_ID,this.collectionId,t,iu.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VP(n){var e,t;if(X(n instanceof ce||n instanceof ve),n instanceof ce){if(n instanceof ZA){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>ce.create(n.field,"==",s)))||[];return ve.create(i,"or")}return n}const r=n.filters.map(i=>VP(i));return ve.create(r,n.op)}function fF(n){if(n.getFilters().length===0)return[];const e=Om(VP(n));return X(OP(e)),Dm(e)||Vm(e)?[e]:e.getFilters()}function Dm(n){return n instanceof ce}function Vm(n){return n instanceof ve&&Ty(n)}function OP(n){return Dm(n)||Vm(n)||function(t){if(t instanceof ve&&Am(t)){for(const r of t.getFilters())if(!Dm(r)&&!Vm(r))return!1;return!0}return!1}(n)}function Om(n){if(X(n instanceof ce||n instanceof ve),n instanceof ce)return n;if(n.filters.length===1)return Om(n.filters[0]);const e=n.filters.map(r=>Om(r));let t=ve.create(e,n.op);return t=Wd(t),OP(t)?t:(X(t instanceof ve),X(Ho(t)),X(t.filters.length>1),t.filters.reduce((r,i)=>Vy(r,i)))}function Vy(n,e){let t;return X(n instanceof ce||n instanceof ve),X(e instanceof ce||e instanceof ve),t=n instanceof ce?e instanceof ce?function(i,s){return ve.create([i,s],"and")}(n,e):KI(n,e):e instanceof ce?KI(e,n):function(i,s){if(X(i.filters.length>0&&s.filters.length>0),Ho(i)&&Ho(s))return YA(i,s.getFilters());const o=Am(i)?i:s,a=Am(i)?s:i,l=o.filters.map(c=>Vy(c,a));return ve.create(l,"or")}(n,e),Wd(t)}function KI(n,e){if(Ho(e))return YA(e,n.getFilters());{const t=e.filters.map(r=>Vy(n,r));return ve.create(t,"or")}}function Wd(n){if(X(n instanceof ce||n instanceof ve),n instanceof ce)return n;const e=n.getFilters();if(e.length===1)return Wd(e[0]);if(HA(n))return n;const t=e.map(i=>Wd(i)),r=[];return t.forEach(i=>{i instanceof ce?r.push(i):i instanceof ve&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ve.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pF{constructor(){this.un=new Oy}addToCollectionParentIndex(e,t){return this.un.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(pn.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(pn.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class Oy{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ie(ue.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ie(ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc=new Uint8Array(0);class mF{constructor(e,t){this.databaseId=t,this.cn=new Oy,this.ln=new Mi(r=>As(r),(r,i)=>Du(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const s={collectionId:r,parent:jt(i)};return GI(e).put(s)}return D.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[xA(t),""],!1,!0);return GI(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(Jn(o.parent))}return r})}addFieldIndex(e,t){const r=Ja(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=no(e);return s.next(a=>{o.put(BI(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=Ja(e),i=no(e),s=to(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Ja(e),r=to(e),i=no(e);return t.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,t){return D.forEach(this.hn(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new WI(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const r=to(e);let i=!0;const s=new Map;return D.forEach(this.hn(t),o=>this.Pn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=oe();const a=[];return D.forEach(s,(l,c)=>{U("IndexedDbIndexManager",`Using index ${function(E){return`id=${E.indexId}|cg=${E.collectionGroup}|f=${E.fields.map(N=>`${N.fieldPath}:${N.kind}`).join(",")}`}(l)} to execute ${As(t)}`);const d=function(E,N){const M=Im(N);if(M===void 0)return null;for(const L of zd(E,M.fieldPath))switch(L.op){case"array-contains-any":return L.value.arrayValue.values||[];case"array-contains":return[L.value]}return null}(c,l),f=function(E,N){const M=new Map;for(const L of Ji(N))for(const v of zd(E,L.fieldPath))switch(v.op){case"==":case"in":M.set(L.fieldPath.canonicalString(),v.value);break;case"not-in":case"!=":return M.set(L.fieldPath.canonicalString(),v.value),Array.from(M.values())}return null}(c,l),m=function(E,N){const M=[];let L=!0;for(const v of Ji(N)){const y=v.kind===0?AI(E,v.fieldPath,E.startAt):PI(E,v.fieldPath,E.startAt);M.push(y.value),L&&(L=y.inclusive)}return new Pi(M,L)}(c,l),g=function(E,N){const M=[];let L=!0;for(const v of Ji(N)){const y=v.kind===0?PI(E,v.fieldPath,E.endAt):AI(E,v.fieldPath,E.endAt);M.push(y.value),L&&(L=y.inclusive)}return new Pi(M,L)}(c,l),S=this.In(l,c,m),A=this.In(l,c,g),C=this.Tn(l,c,f),I=this.En(l.indexId,d,S,m.inclusive,A,g.inclusive,C);return D.forEach(I,w=>r.G(w,t.limit).next(E=>{E.forEach(N=>{const M=K.fromSegments(N.documentKey);o.has(M)||(o=o.add(M),a.push(M))})}))}).next(()=>a)}return D.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=fF(ve.create(e.filters,"and")).map(r=>Rm(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,r,i,s,o,a){const l=(t!=null?t.length:1)*Math.max(r.length,s.length),c=l/(t!=null?t.length:1),d=[];for(let f=0;f<l;++f){const m=t?this.dn(t[f/c]):xc,g=this.An(e,m,r[f%c],i),S=this.Rn(e,m,s[f%c],o),A=a.map(C=>this.An(e,m,C,!0));d.push(...this.createRange(g,S,A))}return d}An(e,t,r,i){const s=new ts(e,K.empty(),t,r);return i?s:s.Zt()}Rn(e,t,r,i){const s=new ts(e,K.empty(),t,r);return i?s.Zt():s}Pn(e,t){const r=new WI(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.rn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.hn(t);return D.forEach(i,s=>this.Pn(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let c=new Ie(Oe.comparator),d=!1;for(const f of l.filters)for(const m of f.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?d=!0:c=c.add(m.field));for(const f of l.orderBy)f.field.isKeyField()||(c=c.add(f.field));return c.size+(d?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}Vn(e,t){const r=new Ya;for(const i of Ji(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);es.vt.It(s,o)}return r.zt()}dn(e){const t=new Ya;return es.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const r=new Ya;return es.vt.It(Ss(this.databaseId,t),r.Yt(function(s){const o=Ji(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,t,r){if(r===null)return[];let i=[];i.push(new Ya);let s=0;for(const o of Ji(e)){const a=r[s++];for(const l of i)if(this.fn(t,o.fieldPath)&&lu(a))i=this.gn(i,o,a);else{const c=l.Yt(o.kind);es.vt.It(a,c)}}return this.pn(i)}In(e,t,r){return this.Tn(e,t,r.position)}pn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}gn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new Ya;l.seed(a.zt()),es.vt.It(o,l.Yt(t.kind)),s.push(l)}return s}fn(e,t){return!!e.filters.find(r=>r instanceof ce&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Ja(e),i=no(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(s=>{const o=[];return D.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(d,f){const m=f?new iu(f.sequenceNumber,new pn(bs(f.readTime),new K(Jn(f.documentKey)),f.largestBatchId)):iu.empty(),g=d.fields.map(([S,A])=>new Xc(Oe.fromServerFormat(S),A));return new Bd(d.indexId,d.collectionGroup,g,m)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:se(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=Ja(e),s=no(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>D.forEach(a,l=>s.put(BI(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return D.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?D.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),D.forEach(a,l=>this.wn(e,i,l).next(c=>{const d=this.Sn(s,l);return c.isEqual(d)?D.resolve():this.bn(e,s,l,c,d)}))))})}Dn(e,t,r,i){return to(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,t.key),documentKey:t.key.path.toArray()})}vn(e,t,r,i){return to(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,t.key),t.key.path.toArray()])}wn(e,t,r){const i=to(e);let s=new Ie(Wr);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,t)])},(o,a)=>{s=s.add(new ts(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}Sn(e,t){let r=new Ie(Wr);const i=this.Vn(t,e);if(i==null)return r;const s=Im(t);if(s!=null){const o=e.data.field(s.fieldPath);if(lu(o))for(const a of o.arrayValue.values||[])r=r.add(new ts(t.indexId,e.key,this.dn(a),i))}else r=r.add(new ts(t.indexId,e.key,xc,i));return r}bn(e,t,r,i,s){U("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(l,c,d,f,m){const g=l.getIterator(),S=c.getIterator();let A=eo(g),C=eo(S);for(;A||C;){let I=!1,w=!1;if(A&&C){const E=d(A,C);E<0?w=!0:E>0&&(I=!0)}else A!=null?w=!0:I=!0;I?(f(C),C=eo(S)):w?(m(A),A=eo(g)):(A=eo(g),C=eo(S))}}(i,s,Wr,a=>{o.push(this.Dn(e,t,r,a))},a=>{o.push(this.vn(e,t,r,a))}),D.waitFor(o)}yn(e){let t=1;return no(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>Wr(o,a)).filter((o,a,l)=>!a||Wr(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Wr(o,e),l=Wr(o,t);if(a===0)i[0]=e.Zt();else if(a>0&&l<0)i.push(o),i.push(o.Zt());else if(l>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,xc,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,xc,[]];s.push(IDBKeyRange.bound(a,l))}return s}Cn(e,t){return Wr(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(HI)}getMinOffset(e,t){return D.mapArray(this.hn(t),r=>this.Pn(e,r).next(i=>i||Y())).next(HI)}}function GI(n){return ct(n,"collectionParents")}function to(n){return ct(n,"indexEntries")}function Ja(n){return ct(n,"indexConfiguration")}function no(n){return ct(n,"indexState")}function HI(n){X(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;vy(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new pn(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Yt{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Yt(e,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const l=r.J({range:o},(d,f,m)=>(a++,m.delete()));s.push(l.next(()=>{X(a===1)}));const c=[];for(const d of t.mutations){const f=FA(e,d.key.path,t.batchId);s.push(i.delete(f)),c.push(d.key)}return D.waitFor(s).next(()=>c)}function Kd(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw Y();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt.DEFAULT_COLLECTION_PERCENTILE=10,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Yt.DEFAULT=new Yt(41943040,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Yt.DISABLED=new Yt(-1,0,0);class Fh{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,t,r,i){X(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Fh(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Kr(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=lo(e),o=Kr(e);return o.add({}).next(a=>{X(typeof a=="number");const l=new Cy(a,t,r,i),c=function(g,S,A){const C=A.baseMutations.map(w=>du(g.ct,w)),I=A.mutations.map(w=>du(g.ct,w));return{userId:S,batchId:A.batchId,localWriteTimeMs:A.localWriteTime.toMillis(),baseMutations:C,mutations:I}}(this.serializer,this.userId,l),d=[];let f=new Ie((m,g)=>se(m.canonicalString(),g.canonicalString()));for(const m of i){const g=FA(this.userId,m.key.path,a);f=f.add(m.key.path.popLast()),d.push(o.put(c)),d.push(s.put(g,tM))}return f.forEach(m=>{d.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Fn[a]=l.keys()}),D.waitFor(d).next(()=>l)})}lookupMutationBatch(e,t){return Kr(e).get(t).next(r=>r?(X(r.userId===this.userId),Zi(this.serializer,r)):null)}Mn(e,t){return this.Fn[t]?D.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Fn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Kr(e).J({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(X(a.batchId>=r),s=Zi(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Kr(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Kr(e).U("userMutationsIndex",t).next(r=>r.map(i=>Zi(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Zc(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return lo(e).J({range:i},(o,a,l)=>{const[c,d,f]=o,m=Jn(d);if(c===this.userId&&t.path.isEqual(m))return Kr(e).get(f).next(g=>{if(!g)throw Y();X(g.userId===this.userId),s.push(Zi(this.serializer,g))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ie(se);const i=[];return t.forEach(s=>{const o=Zc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=lo(e).J({range:a},(c,d,f)=>{const[m,g,S]=c,A=Jn(g);m===this.userId&&s.path.isEqual(A)?r=r.add(S):f.done()});i.push(l)}),D.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=Zc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Ie(se);return lo(e).J({range:o},(l,c,d)=>{const[f,m,g]=l,S=Jn(m);f===this.userId&&r.isPrefixOf(S)?S.length===i&&(a=a.add(g)):d.done()}).next(()=>this.xn(e,a))}xn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(Kr(e).get(s).next(o=>{if(o===null)throw Y();X(o.userId===this.userId),r.push(Zi(this.serializer,o))}))}),D.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return LP(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),D.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return D.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return lo(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=Jn(s[1]);i.push(l)}else a.done()}).next(()=>{X(i.length===0)})})}containsKey(e,t){return MP(e,this.userId,t)}Nn(e){return FP(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function MP(n,e,t){const r=Zc(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return lo(n).J({range:s,H:!0},(a,l,c)=>{const[d,f,m]=a;d===e&&f===i&&(o=!0),c.done()}).next(()=>o)}function Kr(n){return ct(n,"mutations")}function lo(n){return ct(n,"documentMutations")}function FP(n){return ct(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ks(0)}static kn(){return new ks(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gF{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const r=new ks(t.highestTargetId);return t.highestTargetId=r.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>Z.fromTimestamp(new Me(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Qn(e,i)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(t,r),this.Qn(e,r))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>ro(e).delete(t.targetId)).next(()=>this.qn(e)).next(r=>(X(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return ro(e).J((o,a)=>{const l=cl(a);l.sequenceNumber<=t&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>D.waitFor(s)).next(()=>i)}forEachTarget(e,t){return ro(e).J((r,i)=>{const s=cl(i);t(s)})}qn(e){return YI(e).get("targetGlobalKey").next(t=>(X(t!==null),t))}Qn(e,t){return YI(e).put("targetGlobalKey",t)}Kn(e,t){return ro(e).put(DP(this.serializer,t))}$n(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=As(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ro(e).J({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const c=cl(a);Du(t,c.target)&&(s=c,l.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=Zr(e);return t.forEach(o=>{const a=jt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),D.waitFor(i)}removeMatchingKeys(e,t,r){const i=Zr(e);return D.forEach(t,s=>{const o=jt(s.path);return D.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=Zr(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=Zr(e);let s=oe();return i.J({range:r,H:!0},(o,a,l)=>{const c=Jn(o[1]),d=new K(c);s=s.add(d)}).next(()=>s)}containsKey(e,t){const r=jt(t.path),i=IDBKeyRange.bound([r],[xA(r)],!1,!0);let s=0;return Zr(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],l,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,t){return ro(e).get(t).next(r=>r?cl(r):null)}}function ro(n){return ct(n,"targets")}function YI(n){return ct(n,"targetGlobal")}function Zr(n){return ct(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI([n,e],[t,r]){const i=se(n,t);return i===0?se(e,r):i}class yF{constructor(e){this.Un=e,this.buffer=new Ie(JI),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();JI(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class _F{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){U("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Li(t)?U("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Oi(t)}await this.Hn(3e5)})}}class vF{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return D.resolve(Zt.oe);const r=new yF(t);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(QI)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),QI):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,i,s,o,a,l,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,t))).next(f=>(s=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),io()<=ae.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(c-l)+`ms
Total Duration: ${c-d}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function wF(n,e){return new vF(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IF{constructor(e,t){this.db=e,this.garbageCollector=wF(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(r,i)=>t(i))}addReference(e,t,r){return Nc(e,r)}removeReference(e,t,r){return Nc(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Nc(e,t)}nr(e,t){return function(i,s){let o=!1;return FP(i).Y(a=>MP(i,a,s).next(l=>(l&&(o=!0),D.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,a)=>{if(a<=t){const l=this.nr(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,Z.min()),Zr(e).delete(function(f){return[0,jt(f.path)]}(o))))});i.push(l)}}).next(()=>D.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Nc(e,t)}tr(e,t){const r=Zr(e);let i,s=Zt.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:c})=>{o===0?(s!==Zt.oe&&t(new K(Jn(i)),s),s=c,i=l):s=Zt.oe}).next(()=>{s!==Zt.oe&&t(new K(Jn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Nc(n,e){return Zr(n).put(function(r,i){return{targetId:0,path:jt(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(){this.changes=new Mi(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,be.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EF{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Gi(e).put(r)}removeEntry(e,t,r){return Gi(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],qd(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.rr(e,r)))}getEntry(e,t){let r=be.newInvalidDocument(t);return Gi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Xa(t))},(i,s)=>{r=this.ir(t,s)}).next(()=>r)}sr(e,t){let r={size:0,document:be.newInvalidDocument(t)};return Gi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Xa(t))},(i,s)=>{r={document:this.ir(t,s),size:Kd(s)}}).next(()=>r)}getEntries(e,t){let r=tn();return this._r(e,t,(i,s)=>{const o=this.ir(i,s);r=r.insert(i,o)}).next(()=>r)}ar(e,t){let r=tn(),i=new Pe(K.comparator);return this._r(e,t,(s,o)=>{const a=this.ir(s,o);r=r.insert(s,a),i=i.insert(s,Kd(o))}).next(()=>({documents:r,ur:i}))}_r(e,t,r){if(t.isEmpty())return D.resolve();let i=new Ie(eE);t.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(Xa(i.first()),Xa(i.last())),o=i.getIterator();let a=o.getNext();return Gi(e).J({index:"documentKeyIndex",range:s},(l,c,d)=>{const f=K.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&eE(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?d.$(Xa(a)):d.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),qd(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Gi(e).U(IDBKeyRange.bound(a,l,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let d=tn();for(const f of c){const m=this.ir(K.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);m.isFoundDocument()&&(Ou(t,m)||i.has(m.key))&&(d=d.insert(m.key,m))}return d})}getAllFromCollectionGroup(e,t,r,i){let s=tn();const o=ZI(t,r),a=ZI(t,pn.max());return Gi(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,c,d)=>{const f=this.ir(K.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(f.key,f),s.size===i&&d.done()}).next(()=>s)}newChangeBuffer(e){return new TF(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return XI(e).get("remoteDocumentGlobalKey").next(t=>(X(!!t),t))}rr(e,t){return XI(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const r=oF(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(Z.min())))return r}return be.newInvalidDocument(e)}}function BP(n){return new EF(n)}class TF extends UP{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new Mi(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new Ie((s,o)=>se(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.lr.get(s);if(t.push(this.cr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=FI(this.cr.serializer,o);i=i.add(s.path.popLast());const c=Kd(l);r+=c-a.size,t.push(this.cr.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=FI(this.cr.serializer,o.convertToNoDocument(Z.min()));t.push(this.cr.addEntry(e,s,l))}}),i.forEach(s=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.cr.updateMetadata(e,r)),D.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(r=>(this.lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:r,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function XI(n){return ct(n,"remoteDocumentGlobal")}function Gi(n){return ct(n,"remoteDocumentsV14")}function Xa(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function ZI(n,e){const t=e.documentKey.path.toArray();return[n,qd(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function eE(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=se(t[s],r[s]),i)return i;return i=se(t.length,r.length),i||(i=se(t[t.length-2],r[r.length-2]),i||se(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SF{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Pl(r.mutation,i,en.empty(),Me.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=oe()){const i=Xn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=ll();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Xn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,oe()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=tn();const o=Al(),a=function(){return Al()}();return t.forEach((l,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Or)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Pl(d.mutation,c,d.mutation.getFieldMask(),Me.now())):o.set(c.key,en.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,d)=>o.set(c,d)),t.forEach((c,d)=>{var f;return a.set(c,new SF(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,t){const r=Al();let i=new Pe((o,a)=>o-a),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=t.get(l);if(c===null)return;let d=r.get(l)||en.empty();d=a.applyToLocalView(c,d),r.set(l,d);const f=(i.get(a.batchId)||oe()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,d=l.value,f=oP();d.forEach(m=>{if(!s.has(m)){const g=fP(t.get(m),r.get(m));g!==null&&f.set(m,g),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return D.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Sy(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):D.resolve(Xn());let a=-1,l=s;return o.next(c=>D.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?D.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,oe())).next(d=>({batchId:a,changes:sP(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new K(t)).next(r=>{let i=ll();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=ll();return this.indexManager.getCollectionParents(e,s).next(a=>D.forEach(a,l=>{const c=function(f,m){return new Vr(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((l,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,be.newInvalidDocument(d)))});let a=ll();return o.forEach((l,c)=>{const d=s.get(l);d!==void 0&&Pl(d.mutation,c,en.empty(),Me.now()),Ou(t,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AF{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return D.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Ze(i.createTime)}}(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:Dy(i.bundledQuery),readTime:Ze(i.readTime)}}(t)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PF{constructor(){this.overlays=new Pe(K.comparator),this.Ir=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Xn();return D.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),D.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const i=Xn(),s=t.length+1,o=new K(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return D.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new Pe((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Xn(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=Xn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return D.resolve(a)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ky(t,r));let s=this.Ir.get(t);s===void 0&&(s=oe(),this.Ir.set(t,s)),this.Ir.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RF{constructor(){this.sessionToken=He.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(){this.Tr=new Ie(dt.Er),this.dr=new Ie(dt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new dt(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new dt(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new K(new ue([])),r=new dt(t,e),i=new dt(t,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new K(new ue([])),r=new dt(t,e),i=new dt(t,e+1);let s=oe();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new dt(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class dt{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return K.comparator(e.key,t.key)||se(e.wr,t.wr)}static Ar(e,t){return se(e.wr,t.wr)||K.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CF{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ie(dt.Er)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Cy(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new dt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,t){return D.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new dt(t,0),i=new dt(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ie(se);return t.forEach(i=>{const s=new dt(i,0),o=new dt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),D.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new dt(new K(s),0);let a=new Ie(se);return this.br.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.wr)),!0)},o),D.resolve(this.Cr(a))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){X(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return D.forEach(t.mutations,i=>{const s=new dt(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new dt(t,0),i=this.br.firstAfterOrEqual(r);return D.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bF{constructor(e){this.Mr=e,this.docs=function(){return new Pe(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():be.newInvalidDocument(t))}getEntries(e,t){let r=tn();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():be.newInvalidDocument(i))}),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=tn();const o=t.path,a=new K(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:d}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||vy(DA(d),r)<=0||(i.has(d.key)||Ou(t,d))&&(s=s.insert(d.key,d.mutableCopy()))}return D.resolve(s)}getAllFromCollectionGroup(e,t,r,i){Y()}Or(e,t){return D.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new kF(this)}getSize(e){return D.resolve(this.size)}}class kF extends UP{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),D.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xF{constructor(e){this.persistence=e,this.Nr=new Mi(t=>As(t),Du),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ly,this.targetCount=0,this.kr=ks.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),D.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new ks(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.Kn(t),D.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),D.waitFor(s).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),D.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Zt(0),this.Kr=!1,this.Kr=!0,this.$r=new RF,this.referenceDelegate=e(this),this.Ur=new xF(this),this.indexManager=new pF,this.remoteDocumentCache=function(i){return new bF(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new NP(t),this.Gr=new AF(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new PF,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new CF(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){U("MemoryPersistence","Starting transaction:",e);const i=new NF(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return D.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class NF extends OA{constructor(e){super(),this.currentSequenceNumber=e}}class Uh{constructor(e){this.persistence=e,this.Jr=new Ly,this.Yr=null}static Zr(e){return new Uh(e)}get Xr(){if(this.Yr)return this.Yr;throw Y()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),D.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||t.removeEntry(i,Z.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return D.or([()=>D.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DF{constructor(e){this.serializer=e}O(e,t,r,i){const s=new Nh("createOrUpgrade",t);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",pI,{unique:!0}),l.createObjectStore("documentMutations")}(e),tE(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=D.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),tE(e)),o=o.next(()=>function(l){const c=l.store("targetGlobal"),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Z.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",d)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,c){return c.store("mutations").U().next(d=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",pI,{unique:!0});const f=c.store("mutations"),m=d.map(g=>f.put(g));return D.waitFor(m)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ni(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(o=o.next(()=>this.ii(s))),r<8&&i>=8&&(o=o.next(()=>this.si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.oi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const c=l.createObjectStore("documentOverlays",{keyPath:fM});c.createIndex("collectionPathOverlayIndex",pM,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",mM,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const c=l.createObjectStore("remoteDocumentsV14",{keyPath:nM});c.createIndex("documentKeyIndex",rM),c.createIndex("collectionGroupIndex",iM)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:uM}).createIndex("sequenceNumberIndex",cM,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:dM}).createIndex("documentKeyIndex",hM,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((r,i)=>{t+=Kd(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(i=>D.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>D.forEach(a,l=>{X(l.userId===s.userId);const c=Zi(this.serializer,l);return LP(e,s.userId,c).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const l=new ue(o),c=function(f){return[0,jt(f)]}(l);s.push(t.get(c).next(d=>d?D.resolve():(f=>t.put({targetId:0,path:jt(f),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>D.waitFor(s))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:lM});const r=t.store("collectionParents"),i=new Oy,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:jt(l)})}};return t.store("remoteDocuments").J({H:!0},(o,a)=>{const l=new ue(o);return s(l.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,a,l],c)=>{const d=Jn(a);return s(d.popLast())}))}oi(e){const t=e.store("targets");return t.J((r,i)=>{const s=cl(i),o=DP(this.serializer,s);return t.put(o)})}_i(e,t){const r=t.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=t.store("remoteDocumentsV14"),l=function(f){return f.document?new K(ue.fromString(f.document.name).popFirst(5)):f.noDocument?K.fromSegments(f.noDocument.path):f.unknownDocument?K.fromSegments(f.unknownDocument.path):Y()}(o).path.toArray(),c={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>D.waitFor(i))}ai(e,t){const r=t.store("mutations"),i=BP(this.serializer),s=new zP(Uh.Zr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(l=>{var c;let d=(c=a.get(l.userId))!==null&&c!==void 0?c:oe();Zi(this.serializer,l).keys().forEach(f=>d=d.add(f)),a.set(l.userId,d)}),D.forEach(a,(l,c)=>{const d=new ft(c),f=Mh.lt(this.serializer,d),m=s.getIndexManager(d),g=Fh.lt(d,this.serializer,m,s.referenceDelegate);return new jP(i,g,f,m).recalculateAndSaveOverlaysForDocumentKeys(new Em(t,Zt.oe),l).next()})})}}function tE(n){n.createObjectStore("targetDocuments",{keyPath:oM}).createIndex("documentTargetsIndex",aM,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",sM,{unique:!0}),n.createObjectStore("targetGlobal")}const rp="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class My{constructor(e,t,r,i,s,o,a,l,c,d,f=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ui=s,this.window=o,this.document=a,this.ci=c,this.li=d,this.hi=f,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=m=>Promise.resolve(),!My.D())throw new F(V.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new IF(this,i),this.Ai=t+"main",this.serializer=new NP(l),this.Ri=new tr(this.Ai,this.hi,new DF(this.serializer)),this.$r=new lF,this.Ur=new gF(this.referenceDelegate,this.serializer),this.remoteDocumentCache=BP(this.serializer),this.Gr=new aF,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,d===!1&&Xe("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new F(V.FAILED_PRECONDITION,rp);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Zt(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Dc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(Li(e))return U("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return U("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Za(e).get("owner").next(t=>D.resolve(this.vi(t)))}Ci(e){return Dc(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=ct(t,"clientMetadata");return r.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return D.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?D.resolve(!0):Za(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new F(V.FAILED_PRECONDITION,rp);return!1}}return!(!this.networkEnabled||!this.inForeground)||Dc(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&U("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Em(e,Zt.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(r=>this.Mi(r.updateTimeMs,t)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>Dc(e).U().next(t=>this.xi(t,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return Fh.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new mF(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Mh.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,r){U("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(l){return l===17?_M:l===16?yM:l===15?Iy:l===14?jA:l===13?BA:l===12?gM:l===11?UA:void Y()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,a=>(o=new Em(a,this.Qr?this.Qr.next():Zt.oe),t==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw Xe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new F(V.FAILED_PRECONDITION,VA);return r(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ki(e){return Za(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new F(V.FAILED_PRECONDITION,rp)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Za(e).put("owner",t)}static D(){return tr.D()}bi(e){const t=Za(e);return t.get("owner").next(r=>this.vi(r)?(U("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):D.resolve())}Mi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Xe(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;dS()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const r=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return U("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Xe("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){Xe("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Za(n){return ct(n,"owner")}function Dc(n){return ct(n,"clientMetadata")}function Fy(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=oe(),i=oe();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Uy(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VF{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return dS()?8:LA(ze())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Yi(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new VF;return this.Xi(e,t,o).next(a=>{if(s.result=a,this.zi)return this.es(e,t,o,a.size)})}).next(()=>s.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(io()<=ae.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",so(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),D.resolve()):(io()<=ae.DEBUG&&U("QueryEngine","Query:",so(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(io()<=ae.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",so(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,zt(t))):D.resolve())}Yi(e,t){if(RI(t))return D.resolve(null);let r=zt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=$d(t,null,"F"),r=zt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=oe(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.ts(t,a);return this.ns(t,c,o,l.readTime)?this.Yi(e,$d(t,null,"F")):this.rs(e,c,t,l)}))})))}Zi(e,t,r,i){return RI(t)||i.isEqual(Z.min())?D.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(t,s);return this.ns(t,o,r,i)?D.resolve(null):(io()<=ae.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),so(t)),this.rs(e,o,t,NA(i,-1)).next(a=>a))})}ts(e,t){let r=new Ie(rP(e));return t.forEach((i,s)=>{Ou(e,s)&&(r=r.add(s))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,r){return io()<=ae.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",so(t)),this.Ji.getDocumentsMatchingQuery(e,t,pn.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OF{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new Pe(se),this._s=new Mi(s=>As(s),Du),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jP(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function qP(n,e,t,r){return new OF(n,e,t,r)}async function WP(n,e){const t=H(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=oe();for(const c of i){o.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}return t.localDocuments.getDocuments(r,l).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function LF(n,e){const t=H(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,c,d){const f=c.batch,m=f.keys();let g=D.resolve();return m.forEach(S=>{g=g.next(()=>d.getEntry(l,S)).next(A=>{const C=c.docVersions.get(S);X(C!==null),A.version.compareTo(C)<0&&(f.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),d.addEntry(A)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=oe();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function KP(n){const e=H(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function MF(n,e){const t=H(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const a=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;a.push(t.Ur.removeMatchingKeys(s,d.removedDocuments,f).next(()=>t.Ur.addMatchingKeys(s,d.addedDocuments,f)));let g=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(He.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):d.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(d.resumeToken,r)),i=i.insert(f,g),function(A,C,I){return A.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(m,g,d)&&a.push(t.Ur.updateTargetData(s,g))});let l=tn(),c=oe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(GP(s,o,e.documentUpdates).next(d=>{l=d.Ps,c=d.Is})),!r.isEqual(Z.min())){const d=t.Ur.getLastRemoteSnapshotVersion(s).next(f=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return D.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(t.os=i,s))}function GP(n,e,t){let r=oe(),i=oe();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=tn();return t.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Ps:o,Is:i}})}function FF(n,e){const t=H(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Xo(n,e){const t=H(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(s=>s?(i=s,D.resolve(i)):t.Ur.allocateTargetId(r).next(o=>(i=new wr(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Zo(n,e,t){const r=H(n),i=r.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Li(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Gd(n,e,t){const r=H(n);let i=Z.min(),s=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,d){const f=H(l),m=f._s.get(d);return m!==void 0?D.resolve(f.os.get(m)):f.Ur.getTargetData(c,d)}(r,o,zt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?i:Z.min(),t?s:oe())).next(a=>(YP(r,nP(e),a),{documents:a,Ts:s})))}function HP(n,e){const t=H(n),r=H(t.Ur),i=t.os.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function QP(n,e){const t=H(n),r=t.us.get(e)||Z.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.cs.getAllFromCollectionGroup(i,e,NA(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(YP(t,e,i),i))}function YP(n,e,t){let r=n.us.get(e)||Z.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(e,r)}async function UF(n,e,t,r){const i=H(n);let s=oe(),o=tn();for(const c of t){const d=e.Es(c.metadata.name);c.document&&(s=s.add(d));const f=e.ds(c);f.setReadTime(e.As(c.metadata.readTime)),o=o.insert(d,f)}const a=i.cs.newChangeBuffer({trackRemovals:!0}),l=await Xo(i,function(d){return zt(pa(ue.fromString(`__bundle__/docs/${d}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>GP(c,a,o).next(d=>(a.apply(c),d)).next(d=>i.Ur.removeMatchingKeysForTargetId(c,l.targetId).next(()=>i.Ur.addMatchingKeys(c,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,d.Ps,d.Is)).next(()=>d.Ps)))}async function BF(n,e,t=oe()){const r=await Xo(n,zt(Dy(e.bundledQuery))),i=H(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Ze(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Gr.saveNamedQuery(s,e);const a=r.withResumeToken(He.EMPTY_BYTE_STRING,o);return i.os=i.os.insert(a.targetId,a),i.Ur.updateTargetData(s,a).next(()=>i.Ur.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Ur.addMatchingKeys(s,t,r.targetId)).next(()=>i.Gr.saveNamedQuery(s,e))})}function nE(n,e){return`firestore_clients_${n}_${e}`}function rE(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function ip(n,e){return`firestore_targets_${n}_${e}`}class Hd{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static Rs(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new F(i.error.code,i.error.message))),o?new Hd(e,t,i.state,s):(Xe("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Rl{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Rs(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new F(r.error.code,r.error.message))),s?new Rl(e,r.state,i):(Xe("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Qd{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Ay();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=MA(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Qd(e,s):(Xe("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class By{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new By(t.clientId,t.onlineState):(Xe("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Lm{constructor(){this.activeTargetIds=Ay()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sp{constructor(e,t,r,i,s){this.window=e,this.ui=t,this.persistenceKey=r,this.ps=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new Pe(se),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ds=nE(this.persistenceKey,this.ps),this.vs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new Lm),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Os=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const i=this.getItem(nE(this.persistenceKey,r));if(i){const s=Qd.Rs(r,i);s&&(this.Ss=this.Ss.insert(s.clientId,s))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const r=this.Ls(t);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,r){this.qs(e,t,r),this.Qs(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(ip(this.persistenceKey,e));if(i){const s=Rl.Rs(e,i);s&&(r=s.state)}}return t&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ip(this.persistenceKey,e))}updateQueryState(e,t,r){this.$s(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Qs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return U("SharedClientState","READ",e,t),t}setItem(e,t){U("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){U("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(U("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void Xe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const r=this.Gs(t.key);return this.zs(r,null)}{const r=this.js(t.key,t.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const r=this.Hs(t.key,t.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const r=this.Ys(t.key,t.newValue);if(r)return this.Zs(r)}}else if(t.key===this.xs){if(t.newValue!==null){const r=this.Ls(t.newValue);if(r)return this.Bs(r)}}else if(t.key===this.vs){const r=function(s){let o=Zt.oe;if(s!=null)try{const a=JSON.parse(s);X(typeof a=="number"),o=a}catch(a){Xe("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(t.newValue);r!==Zt.oe&&this.sequenceNumberHandler(r)}else if(t.key===this.Os){const r=this.Xs(t.newValue);await Promise.all(r.map(i=>this.syncEngine.eo(i)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,r){const i=new Hd(this.currentUser,e,t,r),s=rE(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Vs())}Qs(e){const t=rE(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,r){const i=ip(this.persistenceKey,e),s=new Rl(e,t,r);this.setItem(i,s.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const r=this.Gs(e);return Qd.Rs(r,t)}Hs(e,t){const r=this.Fs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Hd.Rs(new ft(s),i,t)}Ys(e,t){const r=this.Ms.exec(e),i=Number(r[1]);return Rl.Rs(i,t)}Ls(e){return By.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);U("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const r=t?this.Ss.insert(e,t):this.Ss.remove(e),i=this.ks(this.Ss),s=this.ks(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.io(o,a).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=Ay();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class JP{constructor(){this.so=new Lm,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Lm,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jF{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vc=null;function op(){return Vc===null?Vc=function(){return 268435456+Math.round(2147483648*Math.random())}():Vc++,"0x"+Vc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $F{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="WebChannelConnection";class qF extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,r,i,s,o){const a=op(),l=this.xo(t,r.toUriEncodedString());U("RestConnection",`Sending RPC '${t}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(t,l,c,i).then(d=>(U("RestConnection",`Received RPC '${t}' ${a}: `,d),d),d=>{throw or("RestConnection",`RPC '${t}' ${a} failed with error: `,d,"url: ",l,"request:",i),d})}Lo(t,r,i,s,o,a){return this.Mo(t,r,i,s,o)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fa}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}xo(t,r){const i=zF[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const s=op();return new Promise((o,a)=>{const l=new SA;l.setWithCredentials(!0),l.listenOnce(AA.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Jc.NO_ERROR:const d=l.getResponseJson();U(xt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Jc.TIMEOUT:U(xt,`RPC '${e}' ${s} timed out`),a(new F(V.DEADLINE_EXCEEDED,"Request time out"));break;case Jc.HTTP_ERROR:const f=l.getStatus();if(U(xt,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const g=m==null?void 0:m.error;if(g&&g.status&&g.message){const S=function(C){const I=C.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(I)>=0?I:V.UNKNOWN}(g.status);a(new F(S,g.message))}else a(new F(V.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new F(V.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{U(xt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);U(xt,`RPC '${e}' ${s} sending request:`,i),l.send(t,"POST",c,r,15)})}Bo(e,t,r){const i=op(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=CA(),a=RA(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const d=s.join("");U(xt,`Creating RPC '${e}' stream ${i}: ${d}`,l);const f=o.createWebChannel(d,l);let m=!1,g=!1;const S=new $F({Io:C=>{g?U(xt,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(m||(U(xt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),U(xt,`RPC '${e}' stream ${i} sending:`,C),f.send(C))},To:()=>f.close()}),A=(C,I,w)=>{C.listen(I,E=>{try{w(E)}catch(N){setTimeout(()=>{throw N},0)}})};return A(f,al.EventType.OPEN,()=>{g||(U(xt,`RPC '${e}' stream ${i} transport opened.`),S.yo())}),A(f,al.EventType.CLOSE,()=>{g||(g=!0,U(xt,`RPC '${e}' stream ${i} transport closed`),S.So())}),A(f,al.EventType.ERROR,C=>{g||(g=!0,or(xt,`RPC '${e}' stream ${i} transport errored:`,C),S.So(new F(V.UNAVAILABLE,"The operation could not be completed")))}),A(f,al.EventType.MESSAGE,C=>{var I;if(!g){const w=C.data[0];X(!!w);const E=w,N=E.error||((I=E[0])===null||I===void 0?void 0:I.error);if(N){U(xt,`RPC '${e}' stream ${i} received error:`,N);const M=N.status;let L=function(T){const P=tt[T];if(P!==void 0)return gP(P)}(M),v=N.message;L===void 0&&(L=V.INTERNAL,v="Unknown error status: "+M+" with message "+N.message),g=!0,S.So(new F(L,v)),f.close()}else U(xt,`RPC '${e}' stream ${i} received:`,w),S.bo(w)}}),A(a,PA.STAT_EVENT,C=>{C.stat===wm.PROXY?U(xt,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===wm.NOPROXY&&U(xt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XP(){return typeof window<"u"?window:null}function id(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(n){return new YM(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(e,t,r,i,s,o,a,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new jy(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(Xe(t.toString()),Xe("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new F(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class WF extends ZP{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=ZM(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?Ze(o.readTime):Z.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=xm(this.serializer),t.addTarget=function(s,o){let a;const l=o.target;if(a=jd(l)?{documents:PP(s,l)}:{query:RP(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=wP(s,o.resumeToken);const c=bm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Z.min())>0){a.readTime=Jo(s,o.snapshotVersion.toTimestamp());const c=bm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=tF(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=xm(this.serializer),t.removeTarget=e,this.a_(t)}}class KF extends ZP{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return X(!!e.streamToken),this.lastStreamToken=e.streamToken,X(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){X(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=eF(e.writeResults,e.commitTime),r=Ze(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=xm(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>du(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GF extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new F(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,km(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new F(V.UNKNOWN,s.toString())})}Lo(e,t,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,km(t,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new F(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class HF{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Xe(t),this.D_=!1):U("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QF{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Fi(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=H(l);c.L_.add(4),await ya(c),c.q_.set("Unknown"),c.L_.delete(4),await Bu(c)}(this))})}),this.q_=new HF(r,i)}}async function Bu(n){if(Fi(n))for(const e of n.B_)await e(!0)}async function ya(n){for(const e of n.B_)await e(!1)}function Bh(n,e){const t=H(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),qy(t)?$y(t):va(t).r_()&&zy(t,e))}function ea(n,e){const t=H(n),r=va(t);t.N_.delete(e),r.r_()&&eR(t,e),t.N_.size===0&&(r.r_()?r.o_():Fi(t)&&t.q_.set("Unknown"))}function zy(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}va(n).A_(e)}function eR(n,e){n.Q_.xe(e),va(n).R_(e)}function $y(n){n.Q_=new KM({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),va(n).start(),n.q_.v_()}function qy(n){return Fi(n)&&!va(n).n_()&&n.N_.size>0}function Fi(n){return H(n).L_.size===0}function tR(n){n.Q_=void 0}async function YF(n){n.q_.set("Online")}async function JF(n){n.N_.forEach((e,t)=>{zy(n,e)})}async function XF(n,e){tR(n),qy(n)?(n.q_.M_(e),$y(n)):n.q_.set("Unknown")}async function ZF(n,e,t){if(n.q_.set("Online"),e instanceof vP&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(n,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Yd(n,r)}else if(e instanceof rd?n.Q_.Ke(e):e instanceof _P?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Z.min()))try{const r=await KP(n.localStore);t.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const d=s.N_.get(l);if(!d)return;s.N_.set(l,d.withResumeToken(He.EMPTY_BYTE_STRING,d.snapshotVersion)),eR(s,l);const f=new wr(d.target,l,c,d.sequenceNumber);zy(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await Yd(n,r)}}async function Yd(n,e,t){if(!Li(e))throw e;n.L_.add(1),await ya(n),n.q_.set("Offline"),t||(t=()=>KP(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Bu(n)})}function nR(n,e){return e().catch(t=>Yd(n,t,e))}async function _a(n){const e=H(n),t=Ri(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;eU(e);)try{const i=await FF(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,tU(e,i)}catch(i){await Yd(e,i)}rR(e)&&iR(e)}function eU(n){return Fi(n)&&n.O_.length<10}function tU(n,e){n.O_.push(e);const t=Ri(n);t.r_()&&t.V_&&t.m_(e.mutations)}function rR(n){return Fi(n)&&!Ri(n).n_()&&n.O_.length>0}function iR(n){Ri(n).start()}async function nU(n){Ri(n).p_()}async function rU(n){const e=Ri(n);for(const t of n.O_)e.m_(t.mutations)}async function iU(n,e,t){const r=n.O_.shift(),i=by.from(r,e,t);await nR(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await _a(n)}async function sU(n,e){e&&Ri(n).V_&&await async function(r,i){if(function(o){return mP(o)&&o!==V.ABORTED}(i.code)){const s=r.O_.shift();Ri(r).s_(),await nR(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await _a(r)}}(n,e),rR(n)&&iR(n)}async function sE(n,e){const t=H(n);t.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=Fi(t);t.L_.add(3),await ya(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Bu(t)}async function Mm(n,e){const t=H(n);e?(t.L_.delete(2),await Bu(t)):e||(t.L_.add(2),await ya(t),t.q_.set("Unknown"))}function va(n){return n.K_||(n.K_=function(t,r,i){const s=H(t);return s.w_(),new WF(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:YF.bind(null,n),Ro:JF.bind(null,n),mo:XF.bind(null,n),d_:ZF.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),qy(n)?$y(n):n.q_.set("Unknown")):(await n.K_.stop(),tR(n))})),n.K_}function Ri(n){return n.U_||(n.U_=function(t,r,i){const s=H(t);return s.w_(),new KF(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:nU.bind(null,n),mo:sU.bind(null,n),f_:rU.bind(null,n),g_:iU.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await _a(n)):(await n.U_.stop(),n.O_.length>0&&(U("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new Wy(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wa(n,e){if(Xe("AsyncQueue",`${e}: ${n}`),Li(n))return new F(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e){this.comparator=e?(t,r)=>e(t,r)||K.comparator(t.key,r.key):(t,r)=>K.comparator(t.key,r.key),this.keyedMap=ll(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new Vo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Vo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Vo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(){this.W_=new Pe(K.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):Y():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class ta{constructor(e,t,r,i,s,o,a,l,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new ta(e,t,Vo.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oU{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class aU{constructor(){this.queries=aE(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=H(t),s=i.queries;i.queries=aE(),s.forEach((o,a)=>{for(const l of a.j_)l.onError(r)})})(this,new F(V.ABORTED,"Firestore shutting down"))}}function aE(){return new Mi(n=>tP(n),Vu)}async function Ky(n,e){const t=H(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new oU,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const a=wa(o,`Initialization of query '${so(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&Hy(t)}async function Gy(n,e){const t=H(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function lU(n,e){const t=H(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&Hy(t)}function uU(n,e,t){const r=H(n),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(t);r.queries.delete(e)}function Hy(n){n.Y_.forEach(e=>{e.next()})}var Fm,lE;(lE=Fm||(Fm={})).ea="default",lE.Cache="cache";class Qy{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ta(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=ta.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Fm.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cU{constructor(e,t){this.aa=e,this.byteLength=t}ua(){return"metadata"in this.aa}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e){this.serializer=e}Es(e){return nr(this.serializer,e)}ds(e){return e.metadata.exists?AP(this.serializer,e.document,!1):be.newNoDocument(this.Es(e.metadata.name),this.As(e.metadata.readTime))}As(e){return Ze(e)}}class dU{constructor(e,t,r){this.ca=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=sR(e)}la(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.aa.namedQuery)this.queries.push(e.aa.namedQuery);else if(e.aa.documentMetadata){this.documents.push({metadata:e.aa.documentMetadata}),e.aa.documentMetadata.exists||++t;const r=ue.fromString(e.aa.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.aa.document&&(this.documents[this.documents.length-1].document=e.aa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ha(e){const t=new Map,r=new uE(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Es(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||oe()).add(s);t.set(o,a)}}return t}async complete(){const e=await UF(this.localStore,new uE(this.serializer),this.documents,this.ca.id),t=this.ha(this.documents);for(const r of this.queries)await BF(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Pa:this.collectionGroups,Ia:e}}}function sR(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e){this.key=e}}class aR{constructor(e){this.key=e}}class lR{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=oe(),this.mutatedKeys=oe(),this.Aa=rP(e),this.Ra=new Vo(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new oE,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),g=Ou(this.query,f)?f:null,S=!!m&&this.mutatedKeys.has(m.key),A=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let C=!1;m&&g?m.data.isEqual(g.data)?S!==A&&(r.track({type:3,doc:g}),C=!0):this.ga(m,g)||(r.track({type:2,doc:g}),C=!0,(l&&this.Aa(g,l)>0||c&&this.Aa(g,c)<0)&&(a=!0)):!m&&g?(r.track({type:0,doc:g}),C=!0):m&&!g&&(r.track({type:1,doc:m}),C=!0,(l||c)&&(a=!0)),C&&(g?(o=o.add(g),s=A?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,f)=>function(g,S){const A=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return A(g)-A(S)}(d.type,f.type)||this.Aa(d.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=t&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,c=l!==this.Ea;return this.Ea=l,o.length!==0||c?{snapshot:new ta(this.query,e.Ra,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new oE,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=oe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new aR(r))}),this.da.forEach(r=>{e.has(r)||t.push(new oR(r))}),t}ba(e){this.Ta=e.Ts,this.da=oe();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return ta.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class hU{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class fU{constructor(e){this.key=e,this.va=!1}}class pU{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Mi(a=>tP(a),Vu),this.Ma=new Map,this.xa=new Set,this.Oa=new Pe(K.comparator),this.Na=new Map,this.La=new Ly,this.Ba={},this.ka=new Map,this.qa=ks.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function mU(n,e,t=!0){const r=jh(n);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await uR(r,e,t,!0),i}async function gU(n,e){const t=jh(n);await uR(t,e,!0,!1)}async function uR(n,e,t,r){const i=await Xo(n.localStore,zt(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let a;return r&&(a=await Yy(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&Bh(n.remoteStore,i),a}async function Yy(n,e,t,r,i){n.Ka=(f,m,g)=>async function(A,C,I,w){let E=C.view.ma(I);E.ns&&(E=await Gd(A.localStore,C.query,!1).then(({documents:v})=>C.view.ma(v,E)));const N=w&&w.targetChanges.get(C.targetId),M=w&&w.targetMismatches.get(C.targetId)!=null,L=C.view.applyChanges(E,A.isPrimaryClient,N,M);return Um(A,C.targetId,L.wa),L.snapshot}(n,f,m,g);const s=await Gd(n.localStore,e,!0),o=new lR(e,s.Ts),a=o.ma(s.documents),l=Fu.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),c=o.applyChanges(a,n.isPrimaryClient,l);Um(n,t,c.wa);const d=new hU(e,t,o);return n.Fa.set(e,d),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),c.snapshot}async function yU(n,e,t){const r=H(n),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Vu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Zo(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&ea(r.remoteStore,i.targetId),na(r,i.targetId)}).catch(Oi)):(na(r,i.targetId),await Zo(r.localStore,i.targetId,!0))}async function _U(n,e){const t=H(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ea(t.remoteStore,r.targetId))}async function vU(n,e,t){const r=e_(n);try{const i=await function(o,a){const l=H(o),c=Me.now(),d=a.reduce((g,S)=>g.add(S.key),oe());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let S=tn(),A=oe();return l.cs.getEntries(g,d).next(C=>{S=C,S.forEach((I,w)=>{w.isValidDocument()||(A=A.add(I))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,S)).next(C=>{f=C;const I=[];for(const w of a){const E=$M(w,f.get(w.key).overlayedDocument);E!=null&&I.push(new Or(w.key,E,KA(E.value.mapValue),Le.exists(!0)))}return l.mutationQueue.addMutationBatch(g,c,I,a)}).next(C=>{m=C;const I=C.applyToLocalDocumentSet(f,A);return l.documentOverlayCache.saveOverlays(g,C.batchId,I)})}).then(()=>({batchId:m.batchId,changes:sP(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.Ba[o.currentUser.toKey()];c||(c=new Pe(se)),c=c.insert(a,l),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,t),await Lr(r,i.changes),await _a(r.remoteStore)}catch(i){const s=wa(i,"Failed to persist write");t.reject(s)}}async function cR(n,e){const t=H(n);try{const r=await MF(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Na.get(s);o&&(X(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?X(o.va):i.removedDocuments.size>0&&(X(o.va),o.va=!1))}),await Lr(t,r,e)}catch(r){await Oi(r)}}function cE(n,e,t){const r=H(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=H(o);l.onlineState=a;let c=!1;l.queries.forEach((d,f)=>{for(const m of f.j_)m.Z_(a)&&(c=!0)}),c&&Hy(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wU(n,e,t){const r=H(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Pe(K.comparator);o=o.insert(s,be.newNoDocument(s,Z.min()));const a=oe().add(s),l=new Mu(Z.min(),new Map,new Pe(se),o,a);await cR(r,l),r.Oa=r.Oa.remove(s),r.Na.delete(e),Zy(r)}else await Zo(r.localStore,e,!1).then(()=>na(r,e,t)).catch(Oi)}async function IU(n,e){const t=H(n),r=e.batch.batchId;try{const i=await LF(t.localStore,e);Xy(t,r,null),Jy(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Lr(t,i)}catch(i){await Oi(i)}}async function EU(n,e,t){const r=H(n);try{const i=await function(o,a){const l=H(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(X(f!==null),d=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>l.localDocuments.getDocuments(c,d))})}(r.localStore,e);Xy(r,e,t),Jy(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Lr(r,i)}catch(i){await Oi(i)}}async function TU(n,e){const t=H(n);Fi(t.remoteStore)||U("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=H(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(t.localStore);if(r===-1)return void e.resolve();const i=t.ka.get(r)||[];i.push(e),t.ka.set(r,i)}catch(r){const i=wa(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Jy(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Xy(n,e,t){const r=H(n);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function na(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||dR(n,r)})}function dR(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(ea(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Zy(n))}function Um(n,e,t){for(const r of t)r instanceof oR?(n.La.addReference(r.key,e),SU(n,r)):r instanceof aR?(U("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||dR(n,r.key)):Y()}function SU(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(U("SyncEngine","New document in limbo: "+t),n.xa.add(r),Zy(n))}function Zy(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new K(ue.fromString(e)),r=n.qa.next();n.Na.set(r,new fU(t)),n.Oa=n.Oa.insert(t,r),Bh(n.remoteStore,new wr(zt(pa(t.path)),r,"TargetPurposeLimboResolution",Zt.oe))}}async function Lr(n,e,t){const r=H(n),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{o.push(r.Ka(l,e,t).then(c=>{var d;if((c||t)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=t==null?void 0:t.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Uy.Wi(l.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(l,c){const d=H(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>D.forEach(c,m=>D.forEach(m.$i,g=>d.persistence.referenceDelegate.addReference(f,m.targetId,g)).next(()=>D.forEach(m.Ui,g=>d.persistence.referenceDelegate.removeReference(f,m.targetId,g)))))}catch(f){if(!Li(f))throw f;U("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const g=d.os.get(m),S=g.snapshotVersion,A=g.withLastLimboFreeSnapshotVersion(S);d.os=d.os.insert(m,A)}}}(r.localStore,s))}async function AU(n,e){const t=H(n);if(!t.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await WP(t.localStore,e);t.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(l=>{l.reject(new F(V.CANCELLED,o))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Lr(t,r.hs)}}function PU(n,e){const t=H(n),r=t.Na.get(e);if(r&&r.va)return oe().add(r.key);{let i=oe();const s=t.Ma.get(e);if(!s)return i;for(const o of s){const a=t.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}async function RU(n,e){const t=H(n),r=await Gd(t.localStore,e.query,!0),i=e.view.ba(r);return t.isPrimaryClient&&Um(t,e.targetId,i.wa),i}async function CU(n,e){const t=H(n);return QP(t.localStore,e).then(r=>Lr(t,r))}async function bU(n,e,t,r){const i=H(n),s=await function(a,l){const c=H(a),d=H(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",f=>d.Mn(f,l).next(m=>m?c.localDocuments.getDocuments(f,m):D.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await _a(i.remoteStore):t==="acknowledged"||t==="rejected"?(Xy(i,e,r||null),Jy(i,e),function(a,l){H(H(a).mutationQueue).On(l)}(i.localStore,e)):Y(),await Lr(i,s)):U("SyncEngine","Cannot apply mutation batch with id: "+e)}async function kU(n,e){const t=H(n);if(jh(t),e_(t),e===!0&&t.Qa!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await dE(t,r.toArray());t.Qa=!0,await Mm(t.remoteStore,!0);for(const s of i)Bh(t.remoteStore,s)}else if(e===!1&&t.Qa!==!1){const r=[];let i=Promise.resolve();t.Ma.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(na(t,o),Zo(t.localStore,o,!0))),ea(t.remoteStore,o)}),await i,await dE(t,r),function(o){const a=H(o);a.Na.forEach((l,c)=>{ea(a.remoteStore,c)}),a.La.pr(),a.Na=new Map,a.Oa=new Pe(K.comparator)}(t),t.Qa=!1,await Mm(t.remoteStore,!1)}}async function dE(n,e,t){const r=H(n),i=[],s=[];for(const o of e){let a;const l=r.Ma.get(o);if(l&&l.length!==0){a=await Xo(r.localStore,zt(l[0]));for(const c of l){const d=r.Fa.get(c),f=await RU(r,d);f.snapshot&&s.push(f.snapshot)}}else{const c=await HP(r.localStore,o);a=await Xo(r.localStore,c),await Yy(r,hR(c),o,!1,a.resumeToken)}i.push(a)}return r.Ca.d_(s),i}function hR(n){return eP(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function xU(n){return function(t){return H(H(t).persistence).Qi()}(H(n).localStore)}async function NU(n,e,t,r){const i=H(n);if(i.Qa)return void U("SyncEngine","Ignoring unexpected query state notification.");const s=i.Ma.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await QP(i.localStore,nP(s[0])),a=Mu.createSynthesizedRemoteEventForCurrentChange(e,t==="current",He.EMPTY_BYTE_STRING);await Lr(i,o,a);break}case"rejected":await Zo(i.localStore,e,!0),na(i,e,r);break;default:Y()}}async function DU(n,e,t){const r=jh(n);if(r.Qa){for(const i of e){if(r.Ma.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){U("SyncEngine","Adding an already active target "+i);continue}const s=await HP(r.localStore,i),o=await Xo(r.localStore,s);await Yy(r,hR(s),o.targetId,!1,o.resumeToken),Bh(r.remoteStore,o)}for(const i of t)r.Ma.has(i)&&await Zo(r.localStore,i,!1).then(()=>{ea(r.remoteStore,i),na(r,i)}).catch(Oi)}}function jh(n){const e=H(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=cR.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=PU.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wU.bind(null,e),e.Ca.d_=lU.bind(null,e.eventManager),e.Ca.$a=uU.bind(null,e.eventManager),e}function e_(n){const e=H(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=IU.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=EU.bind(null,e),e}function VU(n,e,t){const r=H(n);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(g,S){const A=H(g),C=Ze(S.createTime);return A.persistence.runTransaction("hasNewerBundle","readonly",I=>A.Gr.getBundleMetadata(I,S.id)).then(I=>!!I&&I.createTime.compareTo(C)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(g){return{taskState:"Success",documentsLoaded:g.totalDocuments,bytesLoaded:g.totalBytes,totalDocuments:g.totalDocuments,totalBytes:g.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(sR(l));const c=new dU(l,s.localStore,o.serializer);let d=await o.Ua();for(;d;){const m=await c.la(d);m&&a._updateProgress(m),d=await o.Ua()}const f=await c.complete();return await Lr(s,f.Ia,void 0),await function(g,S){const A=H(g);return A.persistence.runTransaction("Save bundle","readwrite",C=>A.Gr.saveBundleMetadata(C,S))}(s.localStore,l),a._completeWith(f.progress),Promise.resolve(f.Pa)}catch(l){return or("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class hu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Uu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return qP(this.persistence,new $P,e.initialUser,this.serializer)}Ga(e){return new zP(Uh.Zr,this.serializer)}Wa(e){return new JP}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}hu.provider={build:()=>new hu};class fR extends hu{constructor(e,t,r){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await e_(this.Ja.syncEngine),await _a(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return qP(this.persistence,new $P,e.initialUser,this.serializer)}ja(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new _F(r,e.asyncQueue,t)}Ha(e,t){const r=new Z2(t,this.persistence);return new X2(e.asyncQueue,r)}Ga(e){const t=Fy(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Yt.withCacheSize(this.cacheSizeBytes):Yt.DEFAULT;return new My(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,XP(),id(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new JP}}class OU extends fR{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof sp&&(this.sharedClientState.syncEngine={no:bU.bind(null,t),ro:NU.bind(null,t),io:DU.bind(null,t),Qi:xU.bind(null,t),eo:CU.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await kU(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const t=XP();if(!sp.D(t))throw new F(V.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Fy(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new sp(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class fu{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>cE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=AU.bind(null,this.syncEngine),await Mm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new aU}()}createDatastore(e){const t=Uu(e.databaseInfo.databaseId),r=function(s){return new qF(s)}(e.databaseInfo);return function(s,o,a,l){return new GF(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new QF(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>cE(this.syncEngine,t,0),function(){return iE.D()?new iE:new jF}())}createSyncEngine(e,t){return function(i,s,o,a,l,c,d){const f=new pU(i,s,o,a,l,c);return d&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=H(i);U("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ya(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}fu.provider={build:()=>new fu};function hE(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Xe("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LU{constructor(e,t){this.Xa=e,this.serializer=t,this.metadata=new Tt,this.buffer=new Uint8Array,this.eu=function(){return new TextDecoder("utf-8")}(),this.tu().then(r=>{r&&r.ua()?this.metadata.resolve(r.aa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.aa)}`))},r=>this.metadata.reject(r))}close(){return this.Xa.cancel()}async getMetadata(){return this.metadata.promise}async Ua(){return await this.getMetadata(),this.tu()}async tu(){const e=await this.nu();if(e===null)return null;const t=this.eu.decode(e),r=Number(t);isNaN(r)&&this.ru(`length string (${t}) is not valid number`);const i=await this.iu(r);return new cU(JSON.parse(i),e.length+r)}su(){return this.buffer.findIndex(e=>e===123)}async nu(){for(;this.su()<0&&!await this.ou(););if(this.buffer.length===0)return null;const e=this.su();e<0&&this.ru("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async iu(e){for(;this.buffer.length<e;)await this.ou()&&this.ru("Reached the end of bundle when more is expected.");const t=this.eu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}ru(e){throw this.Xa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ou(){const e=await this.Xa.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MU{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new F(V.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(i,s){const o=H(i),a={documents:s.map(f=>cu(o.serializer,f))},l=await o.Lo("BatchGetDocuments",o.serializer.databaseId,ue.emptyPath(),a,s.length),c=new Map;l.forEach(f=>{const m=XM(o.serializer,f);c.set(m.key.toString(),m)});const d=[];return s.forEach(f=>{const m=c.get(f.toString());X(!!m),d.push(m)}),d}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new ga(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=K.fromPath(r);this.mutations.push(new Ry(i,this.precondition(i)))}),await async function(r,i){const s=H(r),o={writes:i.map(a=>du(s.serializer,a))};await s.Mo("Commit",s.serializer.databaseId,ue.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Y();t=Z.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new F(V.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Z.min())?Le.exists(!1):Le.updateTime(t):Le.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Z.min()))throw new F(V.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Le.updateTime(t)}return Le.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FU{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this._u=r.maxAttempts,this.t_=new jy(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new MU(this.datastore),t=this.cu(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.lu(i)}))}).catch(r=>{this.lu(r)})})}cu(e){try{const t=this.updateFunction(e);return!Nu(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!mP(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UU{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=ft.UNAUTHENTICATED,this.clientId=kA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{U("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(U("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=wa(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ap(n,e){n.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await WP(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function fE(n,e){n.asyncQueue.verifyOperationInProgress();const t=await t_(n);U("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>sE(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>sE(e.remoteStore,i)),n._onlineComponents=e}async function t_(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await ap(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;or("Error using user provided cache. Falling back to memory cache: "+t),await ap(n,new hu)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await ap(n,new hu);return n._offlineComponents}async function $h(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await fE(n,n._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await fE(n,new fu))),n._onlineComponents}function pR(n){return t_(n).then(e=>e.persistence)}function n_(n){return t_(n).then(e=>e.localStore)}function mR(n){return $h(n).then(e=>e.remoteStore)}function r_(n){return $h(n).then(e=>e.syncEngine)}function BU(n){return $h(n).then(e=>e.datastore)}async function ra(n){const e=await $h(n),t=e.eventManager;return t.onListen=mU.bind(null,e.syncEngine),t.onUnlisten=yU.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=gU.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=_U.bind(null,e.syncEngine),t}function jU(n){return n.asyncQueue.enqueue(async()=>{const e=await pR(n),t=await mR(n);return e.setNetworkEnabled(!0),function(i){const s=H(i);return s.L_.delete(0),Bu(s)}(t)})}function zU(n){return n.asyncQueue.enqueue(async()=>{const e=await pR(n),t=await mR(n);return e.setNetworkEnabled(!1),async function(i){const s=H(i);s.L_.add(0),await ya(s),s.q_.set("Offline")}(t)})}function $U(n,e){const t=new Tt;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,d){const f=H(c);return f.persistence.runTransaction("read document","readonly",m=>f.localDocuments.getDocument(m,d))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new F(V.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=wa(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await n_(n),e,t)),t.promise}function gR(n,e,t={}){const r=new Tt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const d=new zh({next:m=>{d.Za(),o.enqueueAndForget(()=>Gy(s,f));const g=m.docs.has(a);!g&&m.fromCache?c.reject(new F(V.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&m.fromCache&&l&&l.source==="server"?c.reject(new F(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new Qy(pa(a.path),d,{includeMetadataChanges:!0,_a:!0});return Ky(s,f)}(await ra(n),n.asyncQueue,e,t,r)),r.promise}function qU(n,e){const t=new Tt;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await Gd(i,s,!0),l=new lR(s,a.Ts),c=l.ma(a.documents),d=l.applyChanges(c,!1);o.resolve(d.snapshot)}catch(a){const l=wa(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await n_(n),e,t)),t.promise}function yR(n,e,t={}){const r=new Tt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const d=new zh({next:m=>{d.Za(),o.enqueueAndForget(()=>Gy(s,f)),m.fromCache&&l.source==="server"?c.reject(new F(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new Qy(a,d,{includeMetadataChanges:!0,_a:!0});return Ky(s,f)}(await ra(n),n.asyncQueue,e,t,r)),r.promise}function WU(n,e){const t=new zh(e);return n.asyncQueue.enqueueAndForget(async()=>function(i,s){H(i).Y_.add(s),s.next()}(await ra(n),t)),()=>{t.Za(),n.asyncQueue.enqueueAndForget(async()=>function(i,s){H(i).Y_.delete(s)}(await ra(n),t))}}function KU(n,e,t,r){const i=function(o,a){let l;return l=typeof o=="string"?yP().encode(o):o,function(d,f){return new LU(d,f)}(function(d,f){if(d instanceof Uint8Array)return hE(d,f);if(d instanceof ArrayBuffer)return hE(new Uint8Array(d),f);if(d instanceof ReadableStream)return d.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(t,Uu(e));n.asyncQueue.enqueueAndForget(async()=>{VU(await r_(n),i,r)})}function GU(n,e){return n.asyncQueue.enqueue(async()=>function(r,i){const s=H(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Gr.getNamedQuery(o,i))}(await n_(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _R(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(n,e,t){if(!t)throw new F(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function vR(n,e,t,r){if(e===!0&&r===!0)throw new F(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function mE(n){if(!K.isDocumentKey(n))throw new F(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function gE(n){if(K.isDocumentKey(n))throw new F(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function qh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Y()}function ye(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new F(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=qh(n);throw new F(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function wR(n,e){if(e<=0)throw new F(V.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new F(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_R((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new F(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new F(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new F(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ju{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yE({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new j2;switch(r.type){case"firstParty":return new W2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=pE.get(t);r&&(U("ComponentProvider","Removing Datastore"),pE.delete(t),r.terminate())}(this),Promise.resolve()}}function HU(n,e,t,r={}){var i;const s=(n=ye(n,ju))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&or("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=ft.MOCK_USER;else{a=iN(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new F(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ft(c)}n._authCredentials=new z2(new bA(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $t=class IR{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new IR(this.firestore,e,this._query)}},Be=class ER{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ER(this.firestore,e,this._key)}},gi=class TR extends $t{constructor(e,t,r){super(e,t,pa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Be(this.firestore,null,new K(e))}withConverter(e){return new TR(this.firestore,e,this._path)}};function SR(n,e,...t){if(n=ne(n),i_("collection","path",e),n instanceof ju){const r=ue.fromString(e,...t);return gE(r),new gi(n,null,r)}{if(!(n instanceof Be||n instanceof gi))throw new F(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ue.fromString(e,...t));return gE(r),new gi(n.firestore,null,r)}}function QU(n,e){if(n=ye(n,ju),i_("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new F(V.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new $t(n,null,function(r){return new Vr(ue.emptyPath(),r)}(e))}function Jd(n,e,...t){if(n=ne(n),arguments.length===1&&(e=kA.newId()),i_("doc","path",e),n instanceof ju){const r=ue.fromString(e,...t);return mE(r),new Be(n,null,new K(r))}{if(!(n instanceof Be||n instanceof gi))throw new F(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ue.fromString(e,...t));return mE(r),new Be(n.firestore,n instanceof gi?n.converter:null,new K(r))}}function AR(n,e){return n=ne(n),e=ne(e),(n instanceof Be||n instanceof gi)&&(e instanceof Be||e instanceof gi)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function PR(n,e){return n=ne(n),e=ne(e),n instanceof $t&&e instanceof $t&&n.firestore===e.firestore&&Vu(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new jy(this,"async_queue_retry"),this.Vu=()=>{const r=id();r&&U("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=id();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=id();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Tt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Li(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Xe("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=Wy.createAndSchedule(this,e,t,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Y()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Bm(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class YU{constructor(){this._progressObserver={},this._taskCompletionResolver=new Tt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JU=-1;let et=class extends ju{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new _E,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _E(e),this._firestoreClient=void 0,await e}}};function Vt(n){if(n._terminated)throw new F(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||RR(n),n._firestoreClient}function RR(n){var e,t,r;const i=n._freezeSettings(),s=function(a,l,c,d){return new IM(a,l,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,_R(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new UU(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(n._componentsProvider))}function XU(n,e){or("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return CR(n,fu.provider,{build:r=>new fR(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function ZU(n){or("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();CR(n,fu.provider,{build:t=>new OU(t,e.cacheSizeBytes)})}function CR(n,e,t){if((n=ye(n,et))._firestoreClient||n._terminated)throw new F(V.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new F(V.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},RR(n)}function e4(n){if(n._initialized&&!n._terminated)throw new F(V.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Tt;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!tr.D())return Promise.resolve();const i=r+"main";await tr.delete(i)}(Fy(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function t4(n){return function(t){const r=new Tt;return t.asyncQueue.enqueueAndForget(async()=>TU(await r_(t),r)),r.promise}(Vt(n=ye(n,et)))}function n4(n){return jU(Vt(n=ye(n,et)))}function r4(n){return zU(Vt(n=ye(n,et)))}function i4(n,e){const t=Vt(n=ye(n,et)),r=new YU;return KU(t,n._databaseId,e,r),r}function s4(n,e){return GU(Vt(n=ye(n,et)),e).then(t=>t?new $t(n,null,t.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new lr(He.fromBase64String(e))}catch(t){throw new F(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new lr(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ci=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Us=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o4=/^__.*__$/;class a4{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Or(e,this.data,this.fieldMask,t,this.fieldTransforms):new ma(e,this.data,t,this.fieldTransforms)}}class bR{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Or(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function kR(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class Kh{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Kh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Xd(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(kR(this.Cu)&&o4.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class l4{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Uu(e)}Qu(e,t,r,i=!1){return new Kh({Cu:e,methodName:t,qu:r,path:Oe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bs(n){const e=n._freezeSettings(),t=Uu(n._databaseId);return new l4(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Gh(n,e,t,r,i,s={}){const o=n.Qu(s.merge||s.mergeFields?2:0,e,t,i);h_("Data must be an object, but it was:",o,r);const a=DR(r,o);let l,c;if(s.merge)l=new en(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=jm(e,f,t);if(!o.contains(m))throw new F(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);OR(d,m)||d.push(m)}l=new en(d),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new a4(new It(a),l,c)}class zu extends Us{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof zu}}function xR(n,e,t){return new Kh({Cu:3,qu:e.settings.qu,methodName:n._methodName,xu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class o_ extends Us{_toFieldTransform(e){return new Lu(e.path,new Qo)}isEqual(e){return e instanceof o_}}class a_ extends Us{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=xR(this,e,!0),r=this.Ku.map(s=>js(s,t)),i=new Ps(r);return new Lu(e.path,i)}isEqual(e){return e instanceof a_&&Ql(this.Ku,e.Ku)}}class l_ extends Us{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=xR(this,e,!0),r=this.Ku.map(s=>js(s,t)),i=new Rs(r);return new Lu(e.path,i)}isEqual(e){return e instanceof l_&&Ql(this.Ku,e.Ku)}}class u_ extends Us{constructor(e,t){super(e),this.$u=t}_toFieldTransform(e){const t=new Yo(e.serializer,lP(e.serializer,this.$u));return new Lu(e.path,t)}isEqual(e){return e instanceof u_&&this.$u===e.$u}}function c_(n,e,t,r){const i=n.Qu(1,e,t);h_("Data must be an object, but it was:",i,r);const s=[],o=It.empty();Fs(r,(l,c)=>{const d=f_(e,l,t);c=ne(c);const f=i.Nu(d);if(c instanceof zu)s.push(d);else{const m=js(c,f);m!=null&&(s.push(d),o.set(d,m))}});const a=new en(s);return new bR(o,a,i.fieldTransforms)}function d_(n,e,t,r,i,s){const o=n.Qu(1,e,t),a=[jm(e,r,t)],l=[i];if(s.length%2!=0)throw new F(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(jm(e,s[m])),l.push(s[m+1]);const c=[],d=It.empty();for(let m=a.length-1;m>=0;--m)if(!OR(c,a[m])){const g=a[m];let S=l[m];S=ne(S);const A=o.Nu(g);if(S instanceof zu)c.push(g);else{const C=js(S,A);C!=null&&(c.push(g),d.set(g,C))}}const f=new en(c);return new bR(d,f,o.fieldTransforms)}function NR(n,e,t,r=!1){return js(t,n.Qu(r?4:3,e))}function js(n,e){if(VR(n=ne(n)))return h_("Unsupported field value:",e,n),DR(n,e);if(n instanceof Us)return function(r,i){if(!kR(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=js(a,i.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return lP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Me.fromDate(r);return{timestampValue:Jo(i.serializer,s)}}if(r instanceof Me){const s=new Me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Jo(i.serializer,s)}}if(r instanceof Wh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof lr)return{bytesValue:wP(i.serializer,r._byteString)};if(r instanceof Be){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ny(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof s_)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return Py(a.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${qh(r)}`)}(n,e)}function DR(n,e){const t={};return zA(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fs(n,(r,i)=>{const s=js(i,e.Mu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function VR(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Me||n instanceof Wh||n instanceof lr||n instanceof Be||n instanceof Us||n instanceof s_)}function h_(n,e,t){if(!VR(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=qh(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function jm(n,e,t){if((e=ne(e))instanceof Ci)return e._internalPath;if(typeof e=="string")return f_(n,e);throw Xd("Field path arguments must be of type string or ",n,!1,void 0,t)}const u4=new RegExp("[~\\*/\\[\\]]");function f_(n,e,t){if(e.search(u4)>=0)throw Xd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ci(...e.split("."))._internalPath}catch{throw Xd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Xd(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new F(V.INVALID_ARGUMENT,a+n+l)}function OR(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new c4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Hh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class c4 extends pu{data(){return super.data()}}function Hh(n,e){return typeof e=="string"?f_(n,e):e instanceof Ci?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LR(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class p_{}class $u extends p_{}function Gr(n,e,...t){let r=[];e instanceof p_&&r.push(e),r=r.concat(t),function(s){const o=s.filter(l=>l instanceof m_).length,a=s.filter(l=>l instanceof Qh).length;if(o>1||o>0&&a>0)throw new F(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Qh extends $u{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Qh(e,t,r)}_apply(e){const t=this._parse(e);return FR(e._query,t),new $t(e.firestore,e.converter,Cm(e._query,t))}_parse(e){const t=Bs(e.firestore);return function(s,o,a,l,c,d,f){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new F(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){wE(f,d);const g=[];for(const S of f)g.push(vE(l,s,S));m={arrayValue:{values:g}}}else m=vE(l,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||wE(f,d),m=NR(a,o,f,d==="in"||d==="not-in");return ce.create(c,d,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function d4(n,e,t){const r=e,i=Hh("where",n);return Qh._create(i,r,t)}class m_ extends p_{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new m_(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ve.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)FR(o,l),o=Cm(o,l)}(e._query,t),new $t(e.firestore,e.converter,Cm(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class g_ extends $u{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new g_(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new F(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new F(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new uu(s,o)}(e._query,this._field,this._direction);return new $t(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Vr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function h4(n,e="asc"){const t=e,r=Hh("orderBy",n);return g_._create(r,t)}class Yh extends $u{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Yh(e,t,r)}_apply(e){return new $t(e.firestore,e.converter,$d(e._query,this._limit,this._limitType))}}function f4(n){return wR("limit",n),Yh._create("limit",n,"F")}function p4(n){return wR("limitToLast",n),Yh._create("limitToLast",n,"L")}class Jh extends $u{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Jh(e,t,r)}_apply(e){const t=MR(e,this.type,this._docOrFields,this._inclusive);return new $t(e.firestore,e.converter,function(i,s){return new Vr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function m4(...n){return Jh._create("startAt",n,!0)}function g4(...n){return Jh._create("startAfter",n,!1)}class Xh extends $u{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Xh(e,t,r)}_apply(e){const t=MR(e,this.type,this._docOrFields,this._inclusive);return new $t(e.firestore,e.converter,function(i,s){return new Vr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}}function y4(...n){return Xh._create("endBefore",n,!1)}function _4(...n){return Xh._create("endAt",n,!0)}function MR(n,e,t,r){if(t[0]=ne(t[0]),t[0]instanceof pu)return function(s,o,a,l,c){if(!l)throw new F(V.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const d=[];for(const f of Do(s))if(f.field.isKeyField())d.push(Ss(o,l.key));else{const m=l.data.field(f.field);if(Dh(m))throw new F(V.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const g=f.field.canonicalString();throw new F(V.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${g}' (used as the orderBy) does not exist.`)}d.push(m)}return new Pi(d,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=Bs(n.firestore);return function(o,a,l,c,d,f){const m=o.explicitOrderBy;if(d.length>m.length)throw new F(V.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const g=[];for(let S=0;S<d.length;S++){const A=d[S];if(m[S].field.isKeyField()){if(typeof A!="string")throw new F(V.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof A}`);if(!Sy(o)&&A.indexOf("/")!==-1)throw new F(V.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${A}' contains a slash.`);const C=o.path.child(ue.fromString(A));if(!K.isDocumentKey(C))throw new F(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${C}' is not because it contains an odd number of segments.`);const I=new K(C);g.push(Ss(a,I))}else{const C=NR(l,c,A);g.push(C)}}return new Pi(g,f)}(n._query,n.firestore._databaseId,i,e,t,r)}}function vE(n,e,t){if(typeof(t=ne(t))=="string"){if(t==="")throw new F(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Sy(e)&&t.indexOf("/")!==-1)throw new F(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ue.fromString(t));if(!K.isDocumentKey(r))throw new F(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ss(n,new K(r))}if(t instanceof Be)return Ss(n,t._key);throw new F(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qh(t)}.`)}function wE(n,e){if(!Array.isArray(n)||n.length===0)throw new F(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function FR(n,e){const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new F(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class y_{convertValue(e,t="none"){switch(Ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ti(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Y()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Fs(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>De(o.doubleValue));return new s_(s)}convertGeoPoint(e){return new Wh(De(e.latitude),De(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ey(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ou(e));default:return null}}convertTimestamp(e){const t=br(e);return new Me(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ue.fromString(e);X(xP(r));const i=new Si(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(t)||Xe(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class v4 extends y_{constructor(e){super(),this.firestore=e}convertBytes(e){return new lr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Be(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let kr=class extends pu{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Cl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Hh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},Cl=class extends kr{data(e={}){return super.data(e)}},bi=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ls(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Cl(this._firestore,this._userDataWriter,r.key,r,new ls(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Cl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ls(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Cl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ls(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:w4(a.type),doc:l,oldIndex:c,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function w4(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}function UR(n,e){return n instanceof kr&&e instanceof kr?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof bi&&e instanceof bi&&n._firestore===e._firestore&&PR(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I4(n){n=ye(n,Be);const e=ye(n.firestore,et);return gR(Vt(e),n._key).then(t=>__(e,n,t))}class zs extends y_{constructor(e){super(),this.firestore=e}convertBytes(e){return new lr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Be(this.firestore,null,t)}}function E4(n){n=ye(n,Be);const e=ye(n.firestore,et),t=Vt(e),r=new zs(e);return $U(t,n._key).then(i=>new kr(e,r,n._key,i,new ls(i!==null&&i.hasLocalMutations,!0),n.converter))}function T4(n){n=ye(n,Be);const e=ye(n.firestore,et);return gR(Vt(e),n._key,{source:"server"}).then(t=>__(e,n,t))}function S4(n){n=ye(n,$t);const e=ye(n.firestore,et),t=Vt(e),r=new zs(e);return LR(n._query),yR(t,n._query).then(i=>new bi(e,r,n,i))}function A4(n){n=ye(n,$t);const e=ye(n.firestore,et),t=Vt(e),r=new zs(e);return qU(t,n._query).then(i=>new bi(e,r,n,i))}function P4(n){n=ye(n,$t);const e=ye(n.firestore,et),t=Vt(e),r=new zs(e);return yR(t,n._query,{source:"server"}).then(i=>new bi(e,r,n,i))}function IE(n,e,t){n=ye(n,Be);const r=ye(n.firestore,et),i=Zh(n.converter,e,t);return qu(r,[Gh(Bs(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Le.none())])}function EE(n,e,t,...r){n=ye(n,Be);const i=ye(n.firestore,et),s=Bs(i);let o;return o=typeof(e=ne(e))=="string"||e instanceof Ci?d_(s,"updateDoc",n._key,e,t,r):c_(s,"updateDoc",n._key,e),qu(i,[o.toMutation(n._key,Le.exists(!0))])}function R4(n){return qu(ye(n.firestore,et),[new ga(n._key,Le.none())])}function C4(n,e){const t=ye(n.firestore,et),r=Jd(n),i=Zh(n.converter,e);return qu(t,[Gh(Bs(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Le.exists(!1))]).then(()=>r)}function BR(n,...e){var t,r,i;n=ne(n);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Bm(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Bm(e[o])){const f=e[o];e[o]=(t=f.next)===null||t===void 0?void 0:t.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,c,d;if(n instanceof Be)c=ye(n.firestore,et),d=pa(n._key.path),l={next:f=>{e[o]&&e[o](__(c,n,f))},error:e[o+1],complete:e[o+2]};else{const f=ye(n,$t);c=ye(f.firestore,et),d=f._query;const m=new zs(c);l={next:g=>{e[o]&&e[o](new bi(c,m,f,g))},error:e[o+1],complete:e[o+2]},LR(n._query)}return function(m,g,S,A){const C=new zh(A),I=new Qy(g,C,S);return m.asyncQueue.enqueueAndForget(async()=>Ky(await ra(m),I)),()=>{C.Za(),m.asyncQueue.enqueueAndForget(async()=>Gy(await ra(m),I))}}(Vt(c),d,a,l)}function b4(n,e){return WU(Vt(n=ye(n,et)),Bm(e)?e:{next:e})}function qu(n,e){return function(r,i){const s=new Tt;return r.asyncQueue.enqueueAndForget(async()=>vU(await r_(r),i,s)),s.promise}(Vt(n),e)}function __(n,e,t){const r=t.docs.get(e._key),i=new zs(n);return new kr(n,i,e._key,r,new ls(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k4={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let x4=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Bs(e)}set(e,t,r){this._verifyNotCommitted();const i=ei(e,this._firestore),s=Zh(i.converter,t,r),o=Gh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Le.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=ei(e,this._firestore);let o;return o=typeof(t=ne(t))=="string"||t instanceof Ci?d_(this._dataReader,"WriteBatch.update",s._key,t,r,i):c_(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,Le.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=ei(e,this._firestore);return this._mutations=this._mutations.concat(new ga(t._key,Le.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new F(V.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function ei(n,e){if((n=ne(n)).firestore!==e)throw new F(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let N4=class extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=Bs(t)}get(t){const r=ei(t,this._firestore),i=new v4(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return Y();const o=s[0];if(o.isFoundDocument())return new pu(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new pu(this._firestore,i,r._key,null,r.converter);throw Y()})}set(t,r,i){const s=ei(t,this._firestore),o=Zh(s.converter,r,i),a=Gh(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(t,r,i,...s){const o=ei(t,this._firestore);let a;return a=typeof(r=ne(r))=="string"||r instanceof Ci?d_(this._dataReader,"Transaction.update",o._key,r,i,s):c_(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(t){const r=ei(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=ei(e,this._firestore),r=new zs(this._firestore);return super.get(e).then(i=>new kr(this._firestore,r,t._key,i._document,new ls(!1,!1),t.converter))}};function D4(n,e,t){n=ye(n,et);const r=Object.assign(Object.assign({},k4),t);return function(s){if(s.maxAttempts<1)throw new F(V.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new Tt;return s.asyncQueue.enqueueAndForget(async()=>{const c=await BU(s);new FU(s.asyncQueue,c,a,o,l).au()}),l.promise}(Vt(n),i=>e(new N4(n,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V4(){return new zu("deleteField")}function O4(){return new o_("serverTimestamp")}function L4(...n){return new a_("arrayUnion",n)}function M4(...n){return new l_("arrayRemove",n)}function F4(n){return new u_("increment",n)}(function(e,t=!0){(function(i){fa=i})(Di),Ii(new rr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new et(new $2(r.getProvider("auth-internal")),new G2(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new F(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Si(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Fn(dI,"4.7.3",e),Fn(dI,"4.7.3","esm2017")})();const U4="@firebase/firestore-compat",B4="0.3.38";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new F("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(){if(typeof Uint8Array>"u")throw new F("unimplemented","Uint8Arrays are not available in this environment.")}function SE(){if(!vM())throw new F("unimplemented","Blobs are unavailable in Firestore in this environment.")}class mu{constructor(e){this._delegate=e}static fromBase64String(e){return SE(),new mu(lr.fromBase64String(e))}static fromUint8Array(e){return TE(),new mu(lr.fromUint8Array(e))}toBase64(){return SE(),this._delegate.toBase64()}toUint8Array(){return TE(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(n){return j4(n,["next","error","complete"])}function j4(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z4{enableIndexedDbPersistence(e,t){return XU(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return ZU(e._delegate)}clearIndexedDbPersistence(e){return e4(e._delegate)}}class jR{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Si||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&or("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){HU(this._delegate,e,t,r)}enableNetwork(){return n4(this._delegate)}disableNetwork(){return r4(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,vR("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return t4(this._delegate)}onSnapshotsInSync(e){return b4(this._delegate,e)}get app(){if(!this._appCompat)throw new F("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new ia(this,SR(this._delegate,e))}catch(t){throw Mt(t,"collection()","Firestore.collection()")}}doc(e){try{return new En(this,Jd(this._delegate,e))}catch(t){throw Mt(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Lt(this,QU(this._delegate,e))}catch(t){throw Mt(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return D4(this._delegate,t=>e(new zR(this,t)))}batch(){return Vt(this._delegate),new $R(new x4(this._delegate,e=>qu(this._delegate,e)))}loadBundle(e){return i4(this._delegate,e)}namedQuery(e){return s4(this._delegate,e).then(t=>t?new Lt(this,t):null)}}class ef extends y_{constructor(e){super(),this.firestore=e}convertBytes(e){return new mu(new lr(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return En.forKey(t,this.firestore,null)}}function $4(n){U2(n)}class zR{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new ef(e)}get(e){const t=us(e);return this._delegate.get(t).then(r=>new gu(this._firestore,new kr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=us(e);return r?(v_("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=us(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=us(e);return this._delegate.delete(t),this}}class $R{constructor(e){this._delegate=e}set(e,t,r){const i=us(e);return r?(v_("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=us(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=us(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class xs{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Cl(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new yu(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=xs.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new xs(e,new ef(e),t),i.set(t,s)),s}}xs.INSTANCES=new WeakMap;class En{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ef(e)}static forPath(e,t,r){if(e.length%2!==0)throw new F("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new En(t,new Be(t._delegate,r,new K(e)))}static forKey(e,t,r){return new En(t,new Be(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new ia(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new ia(this.firestore,SR(this._delegate,e))}catch(t){throw Mt(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=ne(e),e instanceof Be?AR(this._delegate,e):!1}set(e,t){t=v_("DocumentReference.set",t);try{return t?IE(this._delegate,e,t):IE(this._delegate,e)}catch(r){throw Mt(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?EE(this._delegate,e):EE(this._delegate,e,t,...r)}catch(i){throw Mt(i,"updateDoc()","DocumentReference.update()")}}delete(){return R4(this._delegate)}onSnapshot(...e){const t=qR(e),r=WR(e,i=>new gu(this.firestore,new kr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return BR(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=E4(this._delegate):(e==null?void 0:e.source)==="server"?t=T4(this._delegate):t=I4(this._delegate),t.then(r=>new gu(this.firestore,new kr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new En(this.firestore,e?this._delegate.withConverter(xs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Mt(n,e,t){return n.message=n.message.replace(e,t),n}function qR(n){for(const e of n)if(typeof e=="object"&&!zm(e))return e;return{}}function WR(n,e){var t,r;let i;return zm(n[0])?i=n[0]:zm(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class gu{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new En(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return UR(this._delegate,e._delegate)}}class yu extends gu{data(e){const t=this._delegate.data(e);return this._delegate._converter||B2(t!==void 0),t}}class Lt{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ef(e)}where(e,t,r){try{return new Lt(this.firestore,Gr(this._delegate,d4(e,t,r)))}catch(i){throw Mt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Lt(this.firestore,Gr(this._delegate,h4(e,t)))}catch(r){throw Mt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Lt(this.firestore,Gr(this._delegate,f4(e)))}catch(t){throw Mt(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Lt(this.firestore,Gr(this._delegate,p4(e)))}catch(t){throw Mt(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Lt(this.firestore,Gr(this._delegate,m4(...e)))}catch(t){throw Mt(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Lt(this.firestore,Gr(this._delegate,g4(...e)))}catch(t){throw Mt(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Lt(this.firestore,Gr(this._delegate,y4(...e)))}catch(t){throw Mt(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Lt(this.firestore,Gr(this._delegate,_4(...e)))}catch(t){throw Mt(t,"endAt()","Query.endAt()")}}isEqual(e){return PR(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=A4(this._delegate):(e==null?void 0:e.source)==="server"?t=P4(this._delegate):t=S4(this._delegate),t.then(r=>new $m(this.firestore,new bi(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=qR(e),r=WR(e,i=>new $m(this.firestore,new bi(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return BR(this._delegate,t,r)}withConverter(e){return new Lt(this.firestore,e?this._delegate.withConverter(xs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class q4{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new yu(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class $m{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Lt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new yu(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new q4(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new yu(this._firestore,r))})}isEqual(e){return UR(this._delegate,e._delegate)}}class ia extends Lt{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new En(this.firestore,e):null}doc(e){try{return e===void 0?new En(this.firestore,Jd(this._delegate)):new En(this.firestore,Jd(this._delegate,e))}catch(t){throw Mt(t,"doc()","CollectionReference.doc()")}}add(e){return C4(this._delegate,e).then(t=>new En(this.firestore,t))}isEqual(e){return AR(this._delegate,e._delegate)}withConverter(e){return new ia(this.firestore,e?this._delegate.withConverter(xs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function us(n){return ye(n,Be)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(...e){this._delegate=new Ci(...e)}static documentId(){return new w_(Oe.keyField().canonicalString())}isEqual(e){return e=ne(e),e instanceof Ci?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this._delegate=e}static serverTimestamp(){const e=O4();return e._methodName="FieldValue.serverTimestamp",new ns(e)}static delete(){const e=V4();return e._methodName="FieldValue.delete",new ns(e)}static arrayUnion(...e){const t=L4(...e);return t._methodName="FieldValue.arrayUnion",new ns(t)}static arrayRemove(...e){const t=M4(...e);return t._methodName="FieldValue.arrayRemove",new ns(t)}static increment(e){const t=F4(e);return t._methodName="FieldValue.increment",new ns(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W4={Firestore:jR,GeoPoint:Wh,Timestamp:Me,Blob:mu,Transaction:zR,WriteBatch:$R,DocumentReference:En,DocumentSnapshot:gu,Query:Lt,QueryDocumentSnapshot:yu,QuerySnapshot:$m,CollectionReference:ia,FieldPath:w_,FieldValue:ns,setLogLevel:$4,CACHE_SIZE_UNLIMITED:JU};function K4(n,e){n.INTERNAL.registerComponent(new rr("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},W4)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G4(n){K4(n,(e,t)=>new jR(e,t,new z4)),n.registerVersion(U4,B4)}G4(ir);const H4={apiKey:"AIzaSyBkhICRh0Cy_Cw-iRWWw8pkUqnuf6896aY",authDomain:"ricorerunners.firebaseapp.com",projectId:"ricorerunners",storageBucket:"ricorerunners.firebasestorage.app",messagingSenderId:"238115407585",appId:"1:238115407585:web:18566d684b0a7e23e919a0",measurementId:"G-RGRDKSERPR"};ir.apps.length||ir.initializeApp(H4);const lp=ir.auth(),_u=ir.firestore(),KR=B.createContext(void 0),Q4=({children:n})=>{const[e,t]=B.useState(null),[r,i]=B.useState(null);B.useEffect(()=>lp.onAuthStateChanged(async a=>{if(a){t(a);const l=await Y4(a);i(l)}else t(null),i(null)}),[]);const s=async()=>{const a=new ir.auth.GoogleAuthProvider;await lp.signInWithPopup(a)},o=async()=>{await lp.signOut()};return $.jsx(KR.Provider,{value:{user:e,profile:r,login:s,logout:o},children:n})},tf=()=>{const n=B.useContext(KR);if(!n)throw new Error("useAuth must be used inside AuthProvider");return n};async function Y4(n){const e=_u.collection("users").doc(n.uid),t=await e.get();let{firstName:r="",lastName:i=""}=t.exists?t.data():{};if(!r&&!i&&n.displayName){const s=n.displayName.split(" ");r=s[0],i=s.slice(1).join(" ")}return await e.set({firstName:r,lastName:i,email:n.email},{merge:!0}),{firstName:r,lastName:i,email:n.email}}const GR=B.createContext(void 0),J4=({children:n})=>{const{user:e}=tf(),[t,r]=B.useState([]),[i,s]=B.useState(null);function o(f){const m=f.getDay(),g=m===6?0:-((m+1)%7),S=new Date(f);return S.setDate(f.getDate()+g),S.setHours(0,0,0,0),S}function a(f){return`${f.getFullYear()}-${f.getMonth()+1}-${f.getDate()}`}B.useEffect(()=>{if(!e){r([]);return}const f=o(new Date),m=a(f);s(m),_u.collection("users").doc(e.uid).collection("weeks").doc(m).get().then(S=>{S.exists?r(S.data().habits):r([{name:"Exercise",done:Array(7).fill(!1)},{name:"Read",done:Array(7).fill(!1)},{name:"Meditate",done:Array(7).fill(!1)},{name:"Sleep 8h",done:Array(7).fill(!1)}])})},[e]);function l(f,m){r(g=>g.map((S,A)=>A===f?{...S,done:S.done.map((C,I)=>I===m?!C:C)}:S))}async function c(){if(!e||!i)return;const f=t.reduce((g,S)=>g+S.done.filter(Boolean).length,0);await _u.collection("users").doc(e.uid).collection("weeks").doc(i).set({habits:t,total:f})}const d=t.reduce((f,m)=>f+m.done.filter(Boolean).length,0);return $.jsx(GR.Provider,{value:{habits:t,weekKey:i,toggleHabit:l,saveWeek:c,totalCompleted:d},children:n})},X4=()=>{const n=B.useContext(GR);if(!n)throw new Error("useHabits must be used inside HabitsProvider");return n},HR=B.createContext(void 0),Z4=({children:n})=>{const{user:e}=tf(),{weekKey:t}=X4(),[r,i]=B.useState([]);return B.useEffect(()=>{if(!t)return;const s=_u.collection("users").onSnapshot(async o=>{const a=[];for(const l of o.docs){const{firstName:c="Unknown",lastName:d="User"}=l.data(),f=await _u.collection("users").doc(l.id).collection("weeks").doc(t).get();f.exists&&a.push({uid:l.id,name:`${c} ${d}`,total:f.data().total})}a.sort((l,c)=>c.total-l.total),i(a)});return()=>s()},[t]),$.jsx(HR.Provider,{value:{leaderboard:r},children:n})},eB=()=>{const n=B.useContext(HR);if(!n)throw new Error("useLeaderboard must be used inside LeaderboardProvider");return n},tB=B.createContext(void 0),nB={setTheme:n=>{},themes:[]},rB=()=>{var n;return(n=B.useContext(tB))!==null&&n!==void 0?n:nB},Zd=({children:n,...e})=>$.jsx("button",{...e,className:`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${e.className||""}`,children:n});var iB={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const sB=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),QR=(n,e)=>{const t=B.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,children:a,...l},c)=>B.createElement("svg",{ref:c,...iB,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:`lucide lucide-${sB(n)}`,...l},[...e.map(([d,f])=>B.createElement(d,f)),...(Array.isArray(a)?a:[a])||[]]));return t.displayName=`${n}`,t},oB=QR("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]),aB=QR("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);function lB(){const{theme:n,setTheme:e}=rB();return $.jsx(Zd,{variant:"outline",size:"icon",onClick:()=>e(n==="dark"?"light":"dark"),children:n==="dark"?$.jsx(aB,{className:"h-5 w-5"}):$.jsx(oB,{className:"h-5 w-5"})})}const uB=({children:n})=>$.jsx("div",{className:"p-4 rounded shadow bg-white",children:n});function cB(){const{user:n,profile:e,login:t,logout:r}=tf();return $.jsx(uB,{className:"w-full shadow-sm border-b sticky top-0 z-50",children:$.jsxs("div",{className:"flex items-center justify-between px-6 py-3",children:[$.jsx("h1",{className:"text-lg font-bold",children:"🏃 Weekly Habit Tracker"}),$.jsxs("div",{className:"flex items-center space-x-4",children:[n?$.jsxs($.Fragment,{children:[$.jsxs("span",{className:"text-sm text-muted-foreground hidden sm:inline",children:[e==null?void 0:e.firstName," ",e==null?void 0:e.lastName]}),$.jsx(Zd,{variant:"destructive",size:"sm",onClick:r,children:"Logout"})]}):$.jsx(Zd,{size:"sm",onClick:t,children:"Login with Google"}),$.jsx(lB,{})]})]})})}const dB=({habits:n,onToggleDay:e})=>{const t=n.reduce((r,i)=>r+i.days.filter(Boolean).length,0);return $.jsxs("div",{children:[$.jsxs("table",{className:"w-full border-collapse border border-gray-300",children:[$.jsx("thead",{children:$.jsxs("tr",{className:"bg-gray-200",children:[$.jsx("th",{className:"border border-gray-300 p-2 text-left",children:"Habit"}),$.jsx("th",{className:"border border-gray-300 p-2",children:"Sat"}),$.jsx("th",{className:"border border-gray-300 p-2",children:"Sun"}),$.jsx("th",{className:"border border-gray-300 p-2",children:"Mon"}),$.jsx("th",{className:"border border-gray-300 p-2",children:"Tue"}),$.jsx("th",{className:"border border-gray-300 p-2",children:"Wed"}),$.jsx("th",{className:"border border-gray-300 p-2",children:"Thu"}),$.jsx("th",{className:"border border-gray-300 p-2",children:"Fri"}),$.jsx("th",{className:"border border-gray-300 p-2",children:"Total"})]})}),$.jsx("tbody",{children:n.map((r,i)=>$.jsxs("tr",{children:[$.jsx("td",{className:"border border-gray-300 p-2",children:r.name}),r.days.map((s,o)=>$.jsx("td",{className:`border border-gray-300 p-2 text-center cursor-pointer ${s?"bg-green-200":""}`,onClick:()=>e(i,o),children:s?"✔":""},o)),$.jsx("td",{className:"border border-gray-300 p-2 text-center",children:r.days.filter(Boolean).length})]},r.name))})]}),$.jsxs("p",{className:"mt-4 text-gray-700 font-medium",children:["Total completed this week: ",t]})]})};function hB(){const{user:n}=tf(),{leaderboard:e}=eB();return e.length?$.jsxs("div",{className:"p-4",children:[$.jsx("h2",{className:"text-xl font-bold mb-2",children:"Leaderboard (This Week)"}),$.jsxs("table",{className:"border-collapse border border-gray-400 w-full",children:[$.jsx("thead",{children:$.jsxs("tr",{children:[$.jsx("th",{className:"border p-2",children:"Rank"}),$.jsx("th",{className:"border p-2",children:"Name"}),$.jsx("th",{className:"border p-2",children:"Total Habits"})]})}),$.jsx("tbody",{children:e.map((t,r)=>$.jsxs("tr",{className:(n==null?void 0:n.uid)===t.uid?"bg-blue-100 font-bold":"",children:[$.jsx("td",{className:"border p-2 text-center",children:r+1}),$.jsx("td",{className:"border p-2",children:t.name}),$.jsx("td",{className:"border p-2 text-center",children:t.total})]},t.uid))})]})]}):$.jsx("p",{className:"p-4",children:"No leaderboard data yet."})}function fB(){return $.jsxs("div",{className:"p-6 text-center",children:[$.jsx("h2",{className:"text-2xl font-bold",children:"Welcome to the Habit Tracker 🎯"}),$.jsx("p",{className:"text-muted-foreground mt-2",children:"Log in to start tracking your weekly habits and climb the leaderboard."})]})}function pB(){return $.jsxs("div",{className:"h-[80vh] flex flex-col items-center justify-center text-center space-y-4",children:[$.jsx("h2",{className:"text-3xl font-bold",children:"404 - Page Not Found"}),$.jsx("p",{className:"text-muted-foreground",children:"Oops! The page you’re looking for doesn’t exist."}),$.jsx(Zd,{asChild:!0,children:$.jsx(mx,{to:"/",children:"Go Back Home"})})]})}const mB=new c1;function gB(){return $.jsx(f1,{client:mB,children:$.jsx(Q4,{children:$.jsx(J4,{children:$.jsx(Z4,{children:$.jsx(Hx,{children:$.jsxs(Kx,{children:[$.jsx(qx,{}),$.jsx($x,{}),$.jsxs(hx,{children:[$.jsx(cB,{}),$.jsxs(sx,{children:[$.jsx(sm,{path:"/",element:$.jsx(fB,{})}),$.jsx(sm,{path:"*",element:$.jsx(pB,{})})]})]}),$.jsxs("div",{className:"space-y-6 p-6",children:[$.jsx(dB,{}),$.jsx(hB,{})]})]})})})})})})}up.createRoot(document.getElementById("root")).render($.jsx(G.StrictMode,{children:$.jsx(gB,{})}));
