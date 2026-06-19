const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/landing-TMoELmU0.js","assets/code-block-Bk3NnwHF.js","assets/getting-started-Ch2NjLo6.js","assets/doc-utils-XkOyWBCy.js","assets/configuration-DFpgwuv1.js","assets/api-Dl3UszFN.js","assets/theming-hrqYM8pb.js","assets/filters-BlL5oE1x.js","assets/types-DPNAgA2W.js","assets/basic-hrV_8TSV.js","assets/single-select-BCCz3NHx.js","assets/multi-select-DPmQYzOw.js","assets/disabled-assets-DmSwasiX.js","assets/theming-CgJMsfIW.js","assets/custom-theming-2LqPXfz5.js","assets/default-filters-DcmuikEz.js","assets/forced-filters-3x96KDdG.js","assets/hidden-tabs-DTE-IILn.js","assets/root-folder-CUgQr_23.js","assets/events-DfKEnUSq.js","assets/react-wrapper-BXYjOtmk.js","assets/inline-Cy1mUE50.js","assets/sticky-filters-D50Dh0JM.js","assets/grid-size-oAXRjzQV.js","assets/preferences-CfypOWl8.js","assets/uploader-r5CkHRtc.js","assets/folder-selection-C5Gze1iL.js","assets/ai-search-DzwSikwR.js","assets/transformations-AJ0amlLa.js","assets/language-switcher-gtOKSEC-.js"])))=>i.map(i=>d[i]);
function Ur(t,e){for(var s=0;s<e.length;s++){const i=e[s];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in t)){const r=Object.getOwnPropertyDescriptor(i,a);r&&Object.defineProperty(t,a,r.get?r:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();const Kr="modulepreload",Br=function(t){return"/asset-picker/"+t},da={},W=function(e,s,i){let a=Promise.resolve();if(s&&s.length>0){let o=function(d){return Promise.all(d.map(h=>Promise.resolve(h).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),l=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));a=o(s.map(d=>{if(d=Br(d),d in da)return;da[d]=!0;const h=d.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${u}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":Kr,h||(p.as="script"),p.crossOrigin="",p.href=d,l&&p.setAttribute("nonce",l),document.head.appendChild(p),h)return new Promise((g,b)=>{p.addEventListener("load",g),p.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${d}`)))})}))}function r(o){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=o,window.dispatchEvent(n),!n.defaultPrevented)throw o}return a.then(o=>{for(const n of o||[])n.status==="rejected"&&r(n.reason);return e().catch(r)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vs=globalThis,Ui=Vs.ShadowRoot&&(Vs.ShadyCSS===void 0||Vs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ki=Symbol(),pa=new WeakMap;let sr=class{constructor(e,s,i){if(this._$cssResult$=!0,i!==Ki)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o;const s=this.t;if(Ui&&e===void 0){const i=s!==void 0&&s.length===1;i&&(e=pa.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&pa.set(s,e))}return e}toString(){return this.cssText}};const Vr=t=>new sr(typeof t=="string"?t:t+"",void 0,Ki),I=(t,...e)=>{const s=t.length===1?t[0]:e.reduce((i,a,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+t[r+1],t[0]);return new sr(s,t,Ki)},qr=(t,e)=>{if(Ui)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of e){const i=document.createElement("style"),a=Vs.litNonce;a!==void 0&&i.setAttribute("nonce",a),i.textContent=s.cssText,t.appendChild(i)}},ha=Ui?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(const i of e.cssRules)s+=i.cssText;return Vr(s)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Hr,defineProperty:Gr,getOwnPropertyDescriptor:Qr,getOwnPropertyNames:Wr,getOwnPropertySymbols:Yr,getPrototypeOf:Xr}=Object,lt=globalThis,ua=lt.trustedTypes,Jr=ua?ua.emptyScript:"",mi=lt.reactiveElementPolyfillSupport,hs=(t,e)=>t,Qs={toAttribute(t,e){switch(e){case Boolean:t=t?Jr:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},Bi=(t,e)=>!Hr(t,e),fa={attribute:!0,type:String,converter:Qs,reflect:!1,useDefault:!1,hasChanged:Bi};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),lt.litPropertyMetadata??(lt.litPropertyMetadata=new WeakMap);let Bt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=fa){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(e,s),!s.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(e,i,s);a!==void 0&&Gr(this.prototype,e,a)}}static getPropertyDescriptor(e,s,i){const{get:a,set:r}=Qr(this.prototype,e)??{get(){return this[s]},set(o){this[s]=o}};return{get:a,set(o){const n=a==null?void 0:a.call(this);r==null||r.call(this,o),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??fa}static _$Ei(){if(this.hasOwnProperty(hs("elementProperties")))return;const e=Xr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(hs("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(hs("properties"))){const s=this.properties,i=[...Wr(s),...Yr(s)];for(const a of i)this.createProperty(a,s[a])}const e=this[Symbol.metadata];if(e!==null){const s=litPropertyMetadata.get(e);if(s!==void 0)for(const[i,a]of s)this.elementProperties.set(i,a)}this._$Eh=new Map;for(const[s,i]of this.elementProperties){const a=this._$Eu(s,i);a!==void 0&&this._$Eh.set(a,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const s=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const a of i)s.unshift(ha(a))}else e!==void 0&&s.push(ha(e));return s}static _$Eu(e,s){const i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(s=>s(this))}addController(e){var s;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var s;(s=this._$EO)==null||s.delete(e)}_$E_(){const e=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return qr(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostConnected)==null?void 0:i.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostDisconnected)==null?void 0:i.call(s)})}attributeChangedCallback(e,s,i){this._$AK(e,i)}_$ET(e,s){var r;const i=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,i);if(a!==void 0&&i.reflect===!0){const o=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:Qs).toAttribute(s,i.type);this._$Em=e,o==null?this.removeAttribute(a):this.setAttribute(a,o),this._$Em=null}}_$AK(e,s){var r,o;const i=this.constructor,a=i._$Eh.get(e);if(a!==void 0&&this._$Em!==a){const n=i.getPropertyOptions(a),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)==null?void 0:r.fromAttribute)!==void 0?n.converter:Qs;this._$Em=a;const d=l.fromAttribute(s,n.type);this[a]=d??((o=this._$Ej)==null?void 0:o.get(a))??d,this._$Em=null}}requestUpdate(e,s,i,a=!1,r){var o;if(e!==void 0){const n=this.constructor;if(a===!1&&(r=this[e]),i??(i=n.getPropertyOptions(e)),!((i.hasChanged??Bi)(r,s)||i.useDefault&&i.reflect&&r===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,s,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,s,{useDefault:i,reflect:a,wrapped:r},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??s??this[e]),r!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(s=void 0),this._$AL.set(e,s)),a===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const a=this.constructor.elementProperties;if(a.size>0)for(const[r,o]of a){const{wrapped:n}=o,l=this[r];n!==!0||this._$AL.has(r)||l===void 0||this.C(r,void 0,o,l)}}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(i=this._$EO)==null||i.forEach(a=>{var r;return(r=a.hostUpdate)==null?void 0:r.call(a)}),this.update(s)):this._$EM()}catch(a){throw e=!1,this._$EM(),a}e&&this._$AE(s)}willUpdate(e){}_$AE(e){var s;(s=this._$EO)==null||s.forEach(i=>{var a;return(a=i.hostUpdated)==null?void 0:a.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(s=>this._$ET(s,this[s]))),this._$EM()}updated(e){}firstUpdated(e){}};Bt.elementStyles=[],Bt.shadowRootOptions={mode:"open"},Bt[hs("elementProperties")]=new Map,Bt[hs("finalized")]=new Map,mi==null||mi({ReactiveElement:Bt}),(lt.reactiveElementVersions??(lt.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const us=globalThis,ga=t=>t,Ws=us.trustedTypes,va=Ws?Ws.createPolicy("lit-html",{createHTML:t=>t}):void 0,ir="$lit$",ot=`lit$${Math.random().toFixed(9).slice(2)}$`,ar="?"+ot,Zr=`<${ar}>`,Ot=document,vs=()=>Ot.createComment(""),ms=t=>t===null||typeof t!="object"&&typeof t!="function",Vi=Array.isArray,eo=t=>Vi(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",bi=`[ 	
\f\r]`,ns=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ma=/-->/g,ba=/>/g,xt=RegExp(`>|${bi}(?:([^\\s"'>=/]+)(${bi}*=${bi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ya=/'/g,_a=/"/g,rr=/^(?:script|style|textarea|title)$/i,or=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),c=or(1),nt=or(2),Xe=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),xa=new WeakMap,Ct=Ot.createTreeWalker(Ot,129);function nr(t,e){if(!Vi(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return va!==void 0?va.createHTML(e):e}const to=(t,e)=>{const s=t.length-1,i=[];let a,r=e===2?"<svg>":e===3?"<math>":"",o=ns;for(let n=0;n<s;n++){const l=t[n];let d,h,u=-1,p=0;for(;p<l.length&&(o.lastIndex=p,h=o.exec(l),h!==null);)p=o.lastIndex,o===ns?h[1]==="!--"?o=ma:h[1]!==void 0?o=ba:h[2]!==void 0?(rr.test(h[2])&&(a=RegExp("</"+h[2],"g")),o=xt):h[3]!==void 0&&(o=xt):o===xt?h[0]===">"?(o=a??ns,u=-1):h[1]===void 0?u=-2:(u=o.lastIndex-h[2].length,d=h[1],o=h[3]===void 0?xt:h[3]==='"'?_a:ya):o===_a||o===ya?o=xt:o===ma||o===ba?o=ns:(o=xt,a=void 0);const g=o===xt&&t[n+1].startsWith("/>")?" ":"";r+=o===ns?l+Zr:u>=0?(i.push(d),l.slice(0,u)+ir+l.slice(u)+ot+g):l+ot+(u===-2?n:g)}return[nr(t,r+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class bs{constructor({strings:e,_$litType$:s},i){let a;this.parts=[];let r=0,o=0;const n=e.length-1,l=this.parts,[d,h]=to(e,s);if(this.el=bs.createElement(d,i),Ct.currentNode=this.el.content,s===2||s===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(a=Ct.nextNode())!==null&&l.length<n;){if(a.nodeType===1){if(a.hasAttributes())for(const u of a.getAttributeNames())if(u.endsWith(ir)){const p=h[o++],g=a.getAttribute(u).split(ot),b=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:b[2],strings:g,ctor:b[1]==="."?io:b[1]==="?"?ao:b[1]==="@"?ro:di}),a.removeAttribute(u)}else u.startsWith(ot)&&(l.push({type:6,index:r}),a.removeAttribute(u));if(rr.test(a.tagName)){const u=a.textContent.split(ot),p=u.length-1;if(p>0){a.textContent=Ws?Ws.emptyScript:"";for(let g=0;g<p;g++)a.append(u[g],vs()),Ct.nextNode(),l.push({type:2,index:++r});a.append(u[p],vs())}}}else if(a.nodeType===8)if(a.data===ar)l.push({type:2,index:r});else{let u=-1;for(;(u=a.data.indexOf(ot,u+1))!==-1;)l.push({type:7,index:r}),u+=ot.length-1}r++}}static createElement(e,s){const i=Ot.createElement("template");return i.innerHTML=e,i}}function Gt(t,e,s=t,i){var o,n;if(e===Xe)return e;let a=i!==void 0?(o=s._$Co)==null?void 0:o[i]:s._$Cl;const r=ms(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==r&&((n=a==null?void 0:a._$AO)==null||n.call(a,!1),r===void 0?a=void 0:(a=new r(t),a._$AT(t,s,i)),i!==void 0?(s._$Co??(s._$Co=[]))[i]=a:s._$Cl=a),a!==void 0&&(e=Gt(t,a._$AS(t,e.values),a,i)),e}class so{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:s},parts:i}=this._$AD,a=((e==null?void 0:e.creationScope)??Ot).importNode(s,!0);Ct.currentNode=a;let r=Ct.nextNode(),o=0,n=0,l=i[0];for(;l!==void 0;){if(o===l.index){let d;l.type===2?d=new Ls(r,r.nextSibling,this,e):l.type===1?d=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(d=new oo(r,this,e)),this._$AV.push(d),l=i[++n]}o!==(l==null?void 0:l.index)&&(r=Ct.nextNode(),o++)}return Ct.currentNode=Ot,a}p(e){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,s),s+=i.strings.length-2):i._$AI(e[s])),s++}}class Ls{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,s,i,a){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=i,this.options=a,this._$Cv=(a==null?void 0:a.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=Gt(this,e,s),ms(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==Xe&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):eo(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==v&&ms(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ot.createTextNode(e)),this._$AH=e}$(e){var r;const{values:s,_$litType$:i}=e,a=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=bs.createElement(nr(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===a)this._$AH.p(s);else{const o=new so(a,this),n=o.u(this.options);o.p(s),this.T(n),this._$AH=o}}_$AC(e){let s=xa.get(e.strings);return s===void 0&&xa.set(e.strings,s=new bs(e)),s}k(e){Vi(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,a=0;for(const r of e)a===s.length?s.push(i=new Ls(this.O(vs()),this.O(vs()),this,this.options)):i=s[a],i._$AI(r),a++;a<s.length&&(this._$AR(i&&i._$AB.nextSibling,a),s.length=a)}_$AR(e=this._$AA.nextSibling,s){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,s);e!==this._$AB;){const a=ga(e).nextSibling;ga(e).remove(),e=a}}setConnected(e){var s;this._$AM===void 0&&(this._$Cv=e,(s=this._$AP)==null||s.call(this,e))}}class di{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,i,a,r){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=s,this._$AM=a,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=v}_$AI(e,s=this,i,a){const r=this.strings;let o=!1;if(r===void 0)e=Gt(this,e,s,0),o=!ms(e)||e!==this._$AH&&e!==Xe,o&&(this._$AH=e);else{const n=e;let l,d;for(e=r[0],l=0;l<r.length-1;l++)d=Gt(this,n[i+l],s,l),d===Xe&&(d=this._$AH[l]),o||(o=!ms(d)||d!==this._$AH[l]),d===v?e=v:e!==v&&(e+=(d??"")+r[l+1]),this._$AH[l]=d}o&&!a&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class io extends di{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}}class ao extends di{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}}class ro extends di{constructor(e,s,i,a,r){super(e,s,i,a,r),this.type=5}_$AI(e,s=this){if((e=Gt(this,e,s,0)??v)===Xe)return;const i=this._$AH,a=e===v&&i!==v||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==v&&(i===v||a);a&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,e):this._$AH.handleEvent(e)}}class oo{constructor(e,s,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Gt(this,e)}}const yi=us.litHtmlPolyfillSupport;yi==null||yi(bs,Ls),(us.litHtmlVersions??(us.litHtmlVersions=[])).push("3.3.2");const no=(t,e,s)=>{const i=(s==null?void 0:s.renderBefore)??e;let a=i._$litPart$;if(a===void 0){const r=(s==null?void 0:s.renderBefore)??null;i._$litPart$=a=new Ls(e.insertBefore(vs(),r),r,void 0,s??{})}return a._$AI(t),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Et=globalThis;let O=class extends Bt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const e=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=e.firstChild),e}update(e){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=no(s,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Xe}};var tr;O._$litElement$=!0,O.finalized=!0,(tr=Et.litElementHydrateSupport)==null||tr.call(Et,{LitElement:O});const _i=Et.litElementPolyfillSupport;_i==null||_i({LitElement:O});(Et.litElementVersions??(Et.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=t=>(e,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lo={attribute:!0,type:String,converter:Qs,reflect:!1,hasChanged:Bi},co=(t=lo,e,s)=>{const{kind:i,metadata:a}=s;let r=globalThis.litPropertyMetadata.get(a);if(r===void 0&&globalThis.litPropertyMetadata.set(a,r=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),r.set(s.name,t),i==="accessor"){const{name:o}=s;return{set(n){const l=e.get.call(this);e.set.call(this,n),this.requestUpdate(o,l,t,!0,n)},init(n){return n!==void 0&&this.C(o,void 0,t,n),n}}}if(i==="setter"){const{name:o}=s;return function(n){const l=this[o];e.call(this,n),this.requestUpdate(o,l,t,!0,n)}}throw Error("Unsupported decorator location: "+i)};function f(t){return(e,s)=>typeof s=="object"?co(t,e,s):((i,a,r)=>{const o=a.hasOwnProperty(r);return a.constructor.createProperty(r,i),o?Object.getOwnPropertyDescriptor(a,r):void 0})(t,e,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function w(t){return f({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const po=(t,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(t,e){return(s,i,a)=>{const r=o=>{var n;return((n=o.renderRoot)==null?void 0:n.querySelector(t))??null};return po(s,i,{get(){return r(this)}})}}class ho{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}const s=this.state;this.state={...s,...e},this._notifying=!0;try{this.listeners.forEach(i=>i(this.state,s))}finally{this._notifying=!1}if(this._pendingState){const i=this._pendingState;this._pendingState=null,this.setState(i)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function uo(){return new ho({t:(t,e,s)=>{const i=(a,r)=>a.replace(/\{\{(\w+)\}\}/g,(o,n)=>String(r[n]??""));if(typeof e=="string")return i(e,s??{});if(typeof e=="object"&&e!==null){const a=e,r=a.count;if(r!==void 0){const o=String((r===1?a.defaultValue_one:a.defaultValue_other)??a.defaultValue??t);return i(o,a)}return i(String(a.defaultValue??t),a)}return t},config:null,projectToken:"",sassKey:"",permissions:null,brandColor:"",isOpen:!1,activeTab:"assets",viewMode:"grid",searchQuery:"",isAISearchActive:!1,sortBy:"modified_at",sortDirection:"desc",previewAsset:null,isPreviewOpen:!1,assets:[],folders:[],folderPreviews:{},labels:[],tags:[],currentFolder:null,currentFolderPath:"/",breadcrumb:[],activeLabelUuid:null,collections:[],activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,offset:0,limit:100,totalCount:0,totalFolderCount:0,isLoading:!1,isSelectingAll:!1,hasMore:!1,filters:{metadata:{pinned:[],visible:[],applied:{}},pinned:[],visible:[],applied:{}},fileTypes:[],metadataFields:[],regionalVariantGroups:[],regionalFilters:{},selectedAssets:new Map,selectedFolders:new Map,disabledAssetIds:new Set,disabledFolderIds:new Set,isResolvingFolders:!1})}const D=t=>typeof t=="string",ls=()=>{let t,e;const s=new Promise((i,a)=>{t=i,e=a});return s.resolve=t,s.reject=e,s},$a=t=>t==null?"":""+t,fo=(t,e,s)=>{t.forEach(i=>{e[i]&&(s[i]=e[i])})},go=/###/g,wa=t=>t&&t.indexOf("###")>-1?t.replace(go,"."):t,ka=t=>!t||D(t),fs=(t,e,s)=>{const i=D(e)?e.split("."):e;let a=0;for(;a<i.length-1;){if(ka(t))return{};const r=wa(i[a]);!t[r]&&s&&(t[r]=new s),Object.prototype.hasOwnProperty.call(t,r)?t=t[r]:t={},++a}return ka(t)?{}:{obj:t,k:wa(i[a])}},Sa=(t,e,s)=>{const{obj:i,k:a}=fs(t,e,Object);if(i!==void 0||e.length===1){i[a]=s;return}let r=e[e.length-1],o=e.slice(0,e.length-1),n=fs(t,o,Object);for(;n.obj===void 0&&o.length;)r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),n=fs(t,o,Object),n&&n.obj&&typeof n.obj[`${n.k}.${r}`]<"u"&&(n.obj=void 0);n.obj[`${n.k}.${r}`]=s},vo=(t,e,s,i)=>{const{obj:a,k:r}=fs(t,e,Object);a[r]=a[r]||[],a[r].push(s)},Ys=(t,e)=>{const{obj:s,k:i}=fs(t,e);if(s)return s[i]},mo=(t,e,s)=>{const i=Ys(t,s);return i!==void 0?i:Ys(e,s)},lr=(t,e,s)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in t?D(t[i])||t[i]instanceof String||D(e[i])||e[i]instanceof String?s&&(t[i]=e[i]):lr(t[i],e[i],s):t[i]=e[i]);return t},jt=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var bo={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const yo=t=>D(t)?t.replace(/[&<>"'\/]/g,e=>bo[e]):t;class _o{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const s=this.regExpMap.get(e);if(s!==void 0)return s;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const xo=[" ",",","?","!",";"],$o=new _o(20),wo=(t,e,s)=>{e=e||"",s=s||"";const i=xo.filter(o=>e.indexOf(o)<0&&s.indexOf(o)<0);if(i.length===0)return!0;const a=$o.getRegExp(`(${i.map(o=>o==="?"?"\\?":o).join("|")})`);let r=!a.test(t);if(!r){const o=t.indexOf(s);o>0&&!a.test(t.substring(0,o))&&(r=!0)}return r},Li=function(t,e){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return t[e];const i=e.split(s);let a=t;for(let r=0;r<i.length;){if(!a||typeof a!="object")return;let o,n="";for(let l=r;l<i.length;++l)if(l!==r&&(n+=s),n+=i[l],o=a[n],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&l<i.length-1)continue;r+=l-r+1;break}a=o}return a},Xs=t=>t&&t.replace("_","-"),ko={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};class Js{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,s)}init(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=s.prefix||"i18next:",this.logger=e||ko,this.options=s,this.debug=s.debug}log(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"log","",!0)}warn(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"warn","",!0)}error(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"error","")}deprecate(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"warn","WARNING DEPRECATED: ",!0)}forward(e,s,i,a){return a&&!this.debug?null:(D(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[s](e))}create(e){return new Js(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Js(this.logger,e)}}var Ke=new Js;class pi{constructor(){this.observers={}}on(e,s){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const a=this.observers[i].get(s)||0;this.observers[i].set(s,a+1)}),this}off(e,s){if(this.observers[e]){if(!s){delete this.observers[e];return}this.observers[e].delete(s)}}emit(e){for(var s=arguments.length,i=new Array(s>1?s-1:0),a=1;a<s;a++)i[a-1]=arguments[a];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(o=>{let[n,l]=o;for(let d=0;d<l;d++)n(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[n,l]=o;for(let d=0;d<l;d++)n.apply(n,[e,...i])})}}class Ca extends pi{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=s,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const s=this.options.ns.indexOf(e);s>-1&&this.options.ns.splice(s,1)}getResource(e,s,i){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,o=a.ignoreJSONStructure!==void 0?a.ignoreJSONStructure:this.options.ignoreJSONStructure;let n;e.indexOf(".")>-1?n=e.split("."):(n=[e,s],i&&(Array.isArray(i)?n.push(...i):D(i)&&r?n.push(...i.split(r)):n.push(i)));const l=Ys(this.data,n);return!l&&!s&&!i&&e.indexOf(".")>-1&&(e=n[0],s=n[1],i=n.slice(2).join(".")),l||!o||!D(i)?l:Li(this.data&&this.data[e]&&this.data[e][s],i,r)}addResource(e,s,i,a){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let n=[e,s];i&&(n=n.concat(o?i.split(o):i)),e.indexOf(".")>-1&&(n=e.split("."),a=s,s=n[1]),this.addNamespaces(s),Sa(this.data,n,a),r.silent||this.emit("added",e,s,i,a)}addResources(e,s,i){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const r in i)(D(i[r])||Array.isArray(i[r]))&&this.addResource(e,s,r,i[r],{silent:!0});a.silent||this.emit("added",e,s,i)}addResourceBundle(e,s,i,a,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},n=[e,s];e.indexOf(".")>-1&&(n=e.split("."),a=i,i=s,s=n[1]),this.addNamespaces(s);let l=Ys(this.data,n)||{};o.skipCopy||(i=JSON.parse(JSON.stringify(i))),a?lr(l,i,r):l={...l,...i},Sa(this.data,n,l),o.silent||this.emit("added",e,s,i)}removeResourceBundle(e,s){this.hasResourceBundle(e,s)&&delete this.data[e][s],this.removeNamespaces(s),this.emit("removed",e,s)}hasResourceBundle(e,s){return this.getResource(e,s)!==void 0}getResourceBundle(e,s){return s||(s=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,s)}:this.getResource(e,s)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const s=this.getDataByLanguage(e);return!!(s&&Object.keys(s)||[]).find(a=>s[a]&&Object.keys(s[a]).length>0)}toJSON(){return this.data}}var cr={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,s,i,a){return t.forEach(r=>{this.processors[r]&&(e=this.processors[r].process(e,s,i,a))}),e}};const Aa={};class Zs extends pi{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),fo(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=s,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Ke.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,s);return i&&i.res!==void 0}extractFromKey(e,s){let i=s.nsSeparator!==void 0?s.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const a=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator;let r=s.ns||this.options.defaultNS||[];const o=i&&e.indexOf(i)>-1,n=!this.options.userDefinedKeySeparator&&!s.keySeparator&&!this.options.userDefinedNsSeparator&&!s.nsSeparator&&!wo(e,i,a);if(o&&!n){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:D(r)?[r]:r};const d=e.split(i);(i!==a||i===a&&this.options.ns.indexOf(d[0])>-1)&&(r=d.shift()),e=d.join(a)}return{key:e,namespaces:D(r)?[r]:r}}translate(e,s,i){if(typeof s!="object"&&this.options.overloadTranslationOptionHandler&&(s=this.options.overloadTranslationOptionHandler(arguments)),typeof s=="object"&&(s={...s}),s||(s={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const a=s.returnDetails!==void 0?s.returnDetails:this.options.returnDetails,r=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,{key:o,namespaces:n}=this.extractFromKey(e[e.length-1],s),l=n[n.length-1],d=s.lng||this.language,h=s.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d&&d.toLowerCase()==="cimode"){if(h){const T=s.nsSeparator||this.options.nsSeparator;return a?{res:`${l}${T}${o}`,usedKey:o,exactUsedKey:o,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(s)}:`${l}${T}${o}`}return a?{res:o,usedKey:o,exactUsedKey:o,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(s)}:o}const u=this.resolve(e,s);let p=u&&u.res;const g=u&&u.usedKey||o,b=u&&u.exactUsedKey||o,y=Object.prototype.toString.apply(p),_=["[object Number]","[object Function]","[object RegExp]"],S=s.joinArrays!==void 0?s.joinArrays:this.options.joinArrays,k=!this.i18nFormat||this.i18nFormat.handleAsObject,N=!D(p)&&typeof p!="boolean"&&typeof p!="number";if(k&&p&&N&&_.indexOf(y)<0&&!(D(S)&&Array.isArray(p))){if(!s.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const T=this.options.returnedObjectHandler?this.options.returnedObjectHandler(g,p,{...s,ns:n}):`key '${o} (${this.language})' returned an object instead of string.`;return a?(u.res=T,u.usedParams=this.getUsedParamsDetails(s),u):T}if(r){const T=Array.isArray(p),E=T?[]:{},H=T?b:g;for(const A in p)if(Object.prototype.hasOwnProperty.call(p,A)){const Q=`${H}${r}${A}`;E[A]=this.translate(Q,{...s,joinArrays:!1,ns:n}),E[A]===Q&&(E[A]=p[A])}p=E}}else if(k&&D(S)&&Array.isArray(p))p=p.join(S),p&&(p=this.extendTranslation(p,e,s,i));else{let T=!1,E=!1;const H=s.count!==void 0&&!D(s.count),A=Zs.hasDefaultValue(s),Q=H?this.pluralResolver.getSuffix(d,s.count,s):"",z=s.ordinal&&H?this.pluralResolver.getSuffix(d,s.count,{ordinal:!1}):"",F=H&&!s.ordinal&&s.count===0&&this.pluralResolver.shouldUseIntlApi(),ee=F&&s[`defaultValue${this.options.pluralSeparator}zero`]||s[`defaultValue${Q}`]||s[`defaultValue${z}`]||s.defaultValue;!this.isValidLookup(p)&&A&&(T=!0,p=ee),this.isValidLookup(p)||(E=!0,p=o);const Z=(s.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&E?void 0:p,ie=A&&ee!==p&&this.options.updateMissing;if(E||T||ie){if(this.logger.log(ie?"updateKey":"missingKey",d,l,o,ie?ee:p),r){const M=this.resolve(o,{...s,keySeparator:!1});M&&M.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let m=[];const x=this.languageUtils.getFallbackCodes(this.options.fallbackLng,s.lng||this.language);if(this.options.saveMissingTo==="fallback"&&x&&x[0])for(let M=0;M<x.length;M++)m.push(x[M]);else this.options.saveMissingTo==="all"?m=this.languageUtils.toResolveHierarchy(s.lng||this.language):m.push(s.lng||this.language);const P=(M,V,U)=>{const Se=A&&U!==p?U:Z;this.options.missingKeyHandler?this.options.missingKeyHandler(M,l,V,Se,ie,s):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(M,l,V,Se,ie,s),this.emit("missingKey",M,l,V,p)};this.options.saveMissing&&(this.options.saveMissingPlurals&&H?m.forEach(M=>{const V=this.pluralResolver.getSuffixes(M,s);F&&s[`defaultValue${this.options.pluralSeparator}zero`]&&V.indexOf(`${this.options.pluralSeparator}zero`)<0&&V.push(`${this.options.pluralSeparator}zero`),V.forEach(U=>{P([M],o+U,s[`defaultValue${U}`]||ee)})}):P(m,o,ee))}p=this.extendTranslation(p,e,s,u,i),E&&p===o&&this.options.appendNamespaceToMissingKey&&(p=`${l}:${o}`),(E||T)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?p=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${o}`:o,T?p:void 0):p=this.options.parseMissingKeyHandler(p))}return a?(u.res=p,u.usedParams=this.getUsedParamsDetails(s),u):p}extendTranslation(e,s,i,a,r){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||a.usedLng,a.usedNS,a.usedKey,{resolved:a});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const d=D(e)&&(i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let h;if(d){const p=e.match(this.interpolator.nestingRegexp);h=p&&p.length}let u=i.replace&&!D(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(u={...this.options.interpolation.defaultVariables,...u}),e=this.interpolator.interpolate(e,u,i.lng||this.language||a.usedLng,i),d){const p=e.match(this.interpolator.nestingRegexp),g=p&&p.length;h<g&&(i.nest=!1)}!i.lng&&this.options.compatibilityAPI!=="v1"&&a&&a.res&&(i.lng=this.language||a.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var p=arguments.length,g=new Array(p),b=0;b<p;b++)g[b]=arguments[b];return r&&r[0]===g[0]&&!i.context?(o.logger.warn(`It seems you are nesting recursively key: ${g[0]} in key: ${s[0]}`),null):o.translate(...g,s)},i)),i.interpolation&&this.interpolator.reset()}const n=i.postProcess||this.options.postProcess,l=D(n)?[n]:n;return e!=null&&l&&l.length&&i.applyPostProcessor!==!1&&(e=cr.handle(l,e,s,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...a,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,a,r,o,n;return D(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const d=this.extractFromKey(l,s),h=d.key;a=h;let u=d.namespaces;this.options.fallbackNS&&(u=u.concat(this.options.fallbackNS));const p=s.count!==void 0&&!D(s.count),g=p&&!s.ordinal&&s.count===0&&this.pluralResolver.shouldUseIntlApi(),b=s.context!==void 0&&(D(s.context)||typeof s.context=="number")&&s.context!=="",y=s.lngs?s.lngs:this.languageUtils.toResolveHierarchy(s.lng||this.language,s.fallbackLng);u.forEach(_=>{this.isValidLookup(i)||(n=_,!Aa[`${y[0]}-${_}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(n)&&(Aa[`${y[0]}-${_}`]=!0,this.logger.warn(`key "${a}" for languages "${y.join(", ")}" won't get resolved as namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),y.forEach(S=>{if(this.isValidLookup(i))return;o=S;const k=[h];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(k,h,S,_,s);else{let T;p&&(T=this.pluralResolver.getSuffix(S,s.count,s));const E=`${this.options.pluralSeparator}zero`,H=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(p&&(k.push(h+T),s.ordinal&&T.indexOf(H)===0&&k.push(h+T.replace(H,this.options.pluralSeparator)),g&&k.push(h+E)),b){const A=`${h}${this.options.contextSeparator}${s.context}`;k.push(A),p&&(k.push(A+T),s.ordinal&&T.indexOf(H)===0&&k.push(A+T.replace(H,this.options.pluralSeparator)),g&&k.push(A+E))}}let N;for(;N=k.pop();)this.isValidLookup(i)||(r=N,i=this.getResource(S,_,N,s))}))})}),{res:i,usedKey:a,exactUsedKey:r,usedLng:o,usedNS:n}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,s,i){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,s,i,a):this.resourceStore.getResource(e,s,i,a)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const s=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!D(e.replace);let a=i?e.replace:e;if(i&&typeof e.count<"u"&&(a.count=e.count),this.options.interpolation.defaultVariables&&(a={...this.options.interpolation.defaultVariables,...a}),!i){a={...a};for(const r of s)delete a[r]}return a}static hasDefaultValue(e){const s="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&s===i.substring(0,s.length)&&e[i]!==void 0)return!0;return!1}}const xi=t=>t.charAt(0).toUpperCase()+t.slice(1);class Ea{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Ke.create("languageUtils")}getScriptPartFromCode(e){if(e=Xs(e),!e||e.indexOf("-")<0)return null;const s=e.split("-");return s.length===2||(s.pop(),s[s.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(s.join("-"))}getLanguagePartFromCode(e){if(e=Xs(e),!e||e.indexOf("-")<0)return e;const s=e.split("-");return this.formatLanguageCode(s[0])}formatLanguageCode(e){if(D(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let a=Intl.getCanonicalLocales(e)[0];if(a&&this.options.lowerCaseLng&&(a=a.toLowerCase()),a)return a}catch{}const s=["hans","hant","latn","cyrl","cans","mong","arab"];let i=e.split("-");return this.options.lowerCaseLng?i=i.map(a=>a.toLowerCase()):i.length===2?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),s.indexOf(i[1].toLowerCase())>-1&&(i[1]=xi(i[1].toLowerCase()))):i.length===3&&(i[0]=i[0].toLowerCase(),i[1].length===2&&(i[1]=i[1].toUpperCase()),i[0]!=="sgn"&&i[2].length===2&&(i[2]=i[2].toUpperCase()),s.indexOf(i[1].toLowerCase())>-1&&(i[1]=xi(i[1].toLowerCase())),s.indexOf(i[2].toLowerCase())>-1&&(i[2]=xi(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let s;return e.forEach(i=>{if(s)return;const a=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(a))&&(s=a)}),!s&&this.options.supportedLngs&&e.forEach(i=>{if(s)return;const a=this.getLanguagePartFromCode(i);if(this.isSupportedCode(a))return s=a;s=this.options.supportedLngs.find(r=>{if(r===a)return r;if(!(r.indexOf("-")<0&&a.indexOf("-")<0)&&(r.indexOf("-")>0&&a.indexOf("-")<0&&r.substring(0,r.indexOf("-"))===a||r.indexOf(a)===0&&a.length>1))return r})}),s||(s=this.getFallbackCodes(this.options.fallbackLng)[0]),s}getFallbackCodes(e,s){if(!e)return[];if(typeof e=="function"&&(e=e(s)),D(e)&&(e=[e]),Array.isArray(e))return e;if(!s)return e.default||[];let i=e[s];return i||(i=e[this.getScriptPartFromCode(s)]),i||(i=e[this.formatLanguageCode(s)]),i||(i=e[this.getLanguagePartFromCode(s)]),i||(i=e.default),i||[]}toResolveHierarchy(e,s){const i=this.getFallbackCodes(s||this.options.fallbackLng||[],e),a=[],r=o=>{o&&(this.isSupportedCode(o)?a.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return D(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&r(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&r(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&r(this.getLanguagePartFromCode(e))):D(e)&&r(this.formatLanguageCode(e)),i.forEach(o=>{a.indexOf(o)<0&&r(this.formatLanguageCode(o))}),a}}let So=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Co={1:t=>+(t>1),2:t=>+(t!=1),3:t=>0,4:t=>t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,5:t=>t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5,6:t=>t==1?0:t>=2&&t<=4?1:2,7:t=>t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,8:t=>t==1?0:t==2?1:t!=8&&t!=11?2:3,9:t=>+(t>=2),10:t=>t==1?0:t==2?1:t<7?2:t<11?3:4,11:t=>t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3,12:t=>+(t%10!=1||t%100==11),13:t=>+(t!==0),14:t=>t==1?0:t==2?1:t==3?2:3,15:t=>t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2,16:t=>t%10==1&&t%100!=11?0:t!==0?1:2,17:t=>t==1||t%10==1&&t%100!=11?0:1,18:t=>t==0?0:t==1?1:2,19:t=>t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3,20:t=>t==1?0:t==0||t%100>0&&t%100<20?1:2,21:t=>t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0,22:t=>t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3};const Ao=["v1","v2","v3"],Eo=["v4"],Fa={zero:0,one:1,two:2,few:3,many:4,other:5},Fo=()=>{const t={};return So.forEach(e=>{e.lngs.forEach(s=>{t[s]={numbers:e.nr,plurals:Co[e.fc]}})}),t};class Oo{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=s,this.logger=Ke.create("pluralResolver"),(!this.options.compatibilityJSON||Eo.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=Fo(),this.pluralRulesCache={}}addRule(e,s){this.rules[e]=s}clearCache(){this.pluralRulesCache={}}getRule(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const i=Xs(e==="dev"?"en":e),a=s.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:i,type:a});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let o;try{o=new Intl.PluralRules(i,{type:a})}catch{if(!e.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(l,s)}return this.pluralRulesCache[r]=o,o}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,s);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}getPluralFormsOfKey(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(a=>`${s}${a}`)}getSuffixes(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,s);return i?this.shouldUseIntlApi()?i.resolvedOptions().pluralCategories.sort((a,r)=>Fa[a]-Fa[r]).map(a=>`${this.options.prepend}${s.ordinal?`ordinal${this.options.prepend}`:""}${a}`):i.numbers.map(a=>this.getSuffix(e,a,s)):[]}getSuffix(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const a=this.getRule(e,i);return a?this.shouldUseIntlApi()?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${a.select(s)}`:this.getSuffixRetroCompatible(a,s):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,s){const i=e.noAbs?e.plurals(s):e.plurals(Math.abs(s));let a=e.numbers[i];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(a===2?a="plural":a===1&&(a=""));const r=()=>this.options.prepend&&a.toString()?this.options.prepend+a.toString():a.toString();return this.options.compatibilityJSON==="v1"?a===1?"":typeof a=="number"?`_plural_${a.toString()}`:r():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?r():this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}shouldUseIntlApi(){return!Ao.includes(this.options.compatibilityJSON)}}const Oa=function(t,e,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,r=mo(t,e,s);return!r&&a&&D(s)&&(r=Li(t,s,i),r===void 0&&(r=Li(e,s,i))),r},$i=t=>t.replace(/\$/g,"$$$$");class To{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ke.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(s=>s),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:s,escapeValue:i,useRawValueToEscape:a,prefix:r,prefixEscaped:o,suffix:n,suffixEscaped:l,formatSeparator:d,unescapeSuffix:h,unescapePrefix:u,nestingPrefix:p,nestingPrefixEscaped:g,nestingSuffix:b,nestingSuffixEscaped:y,nestingOptionsSeparator:_,maxReplaces:S,alwaysFormat:k}=e.interpolation;this.escape=s!==void 0?s:yo,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=a!==void 0?a:!1,this.prefix=r?jt(r):o||"{{",this.suffix=n?jt(n):l||"}}",this.formatSeparator=d||",",this.unescapePrefix=h?"":u||"-",this.unescapeSuffix=this.unescapePrefix?"":h||"",this.nestingPrefix=p?jt(p):g||jt("$t("),this.nestingSuffix=b?jt(b):y||jt(")"),this.nestingOptionsSeparator=_||",",this.maxReplaces=S||1e3,this.alwaysFormat=k!==void 0?k:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(s,i)=>s&&s.source===i?(s.lastIndex=0,s):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,s,i,a){let r,o,n;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},d=g=>{if(g.indexOf(this.formatSeparator)<0){const S=Oa(s,l,g,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(S,void 0,i,{...a,...s,interpolationkey:g}):S}const b=g.split(this.formatSeparator),y=b.shift().trim(),_=b.join(this.formatSeparator).trim();return this.format(Oa(s,l,y,this.options.keySeparator,this.options.ignoreJSONStructure),_,i,{...a,...s,interpolationkey:y})};this.resetRegExp();const h=a&&a.missingInterpolationHandler||this.options.missingInterpolationHandler,u=a&&a.interpolation&&a.interpolation.skipOnVariables!==void 0?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:g=>$i(g)},{regex:this.regexp,safeValue:g=>this.escapeValue?$i(this.escape(g)):$i(g)}].forEach(g=>{for(n=0;r=g.regex.exec(e);){const b=r[1].trim();if(o=d(b),o===void 0)if(typeof h=="function"){const _=h(e,r,a);o=D(_)?_:""}else if(a&&Object.prototype.hasOwnProperty.call(a,b))o="";else if(u){o=r[0];continue}else this.logger.warn(`missed to pass in variable ${b} for interpolating ${e}`),o="";else!D(o)&&!this.useRawValueToEscape&&(o=$a(o));const y=g.safeValue(o);if(e=e.replace(r[0],y),u?(g.regex.lastIndex+=o.length,g.regex.lastIndex-=r[0].length):g.regex.lastIndex=0,n++,n>=this.maxReplaces)break}}),e}nest(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a,r,o;const n=(l,d)=>{const h=this.nestingOptionsSeparator;if(l.indexOf(h)<0)return l;const u=l.split(new RegExp(`${h}[ ]*{`));let p=`{${u[1]}`;l=u[0],p=this.interpolate(p,o);const g=p.match(/'/g),b=p.match(/"/g);(g&&g.length%2===0&&!b||b.length%2!==0)&&(p=p.replace(/'/g,'"'));try{o=JSON.parse(p),d&&(o={...d,...o})}catch(y){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,y),`${l}${h}${p}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,l};for(;a=this.nestingRegexp.exec(e);){let l=[];o={...i},o=o.replace&&!D(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let d=!1;if(a[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(a[1])){const h=a[1].split(this.formatSeparator).map(u=>u.trim());a[1]=h.shift(),l=h,d=!0}if(r=s(n.call(this,a[1].trim(),o),o),r&&a[0]===e&&!D(r))return r;D(r)||(r=$a(r)),r||(this.logger.warn(`missed to resolve ${a[1]} for nesting ${e}`),r=""),d&&(r=l.reduce((h,u)=>this.format(h,u,i.lng,{...i,interpolationkey:a[1].trim()}),r.trim())),e=e.replace(a[0],r),this.regexp.lastIndex=0}return e}}const Po=t=>{let e=t.toLowerCase().trim();const s={};if(t.indexOf("(")>-1){const i=t.split("(");e=i[0].toLowerCase().trim();const a=i[1].substring(0,i[1].length-1);e==="currency"&&a.indexOf(":")<0?s.currency||(s.currency=a.trim()):e==="relativetime"&&a.indexOf(":")<0?s.range||(s.range=a.trim()):a.split(";").forEach(o=>{if(o){const[n,...l]=o.split(":"),d=l.join(":").trim().replace(/^'+|'+$/g,""),h=n.trim();s[h]||(s[h]=d),d==="false"&&(s[h]=!1),d==="true"&&(s[h]=!0),isNaN(d)||(s[h]=parseInt(d,10))}})}return{formatName:e,formatOptions:s}},Ut=t=>{const e={};return(s,i,a)=>{let r=a;a&&a.interpolationkey&&a.formatParams&&a.formatParams[a.interpolationkey]&&a[a.interpolationkey]&&(r={...r,[a.interpolationkey]:void 0});const o=i+JSON.stringify(r);let n=e[o];return n||(n=t(Xs(i),a),e[o]=n),n(s)}};class Lo{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ke.create("formatter"),this.options=e,this.formats={number:Ut((s,i)=>{const a=new Intl.NumberFormat(s,{...i});return r=>a.format(r)}),currency:Ut((s,i)=>{const a=new Intl.NumberFormat(s,{...i,style:"currency"});return r=>a.format(r)}),datetime:Ut((s,i)=>{const a=new Intl.DateTimeFormat(s,{...i});return r=>a.format(r)}),relativetime:Ut((s,i)=>{const a=new Intl.RelativeTimeFormat(s,{...i});return r=>a.format(r,i.range||"day")}),list:Ut((s,i)=>{const a=new Intl.ListFormat(s,{...i});return r=>a.format(r)})},this.init(e)}init(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=s.interpolation.formatSeparator||","}add(e,s){this.formats[e.toLowerCase().trim()]=s}addCached(e,s){this.formats[e.toLowerCase().trim()]=Ut(s)}format(e,s,i){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=s.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&r[0].indexOf(")")<0&&r.find(n=>n.indexOf(")")>-1)){const n=r.findIndex(l=>l.indexOf(")")>-1);r[0]=[r[0],...r.splice(1,n)].join(this.formatSeparator)}return r.reduce((n,l)=>{const{formatName:d,formatOptions:h}=Po(l);if(this.formats[d]){let u=n;try{const p=a&&a.formatParams&&a.formatParams[a.interpolationkey]||{},g=p.locale||p.lng||a.locale||a.lng||i;u=this.formats[d](n,g,{...h,...a,...p})}catch(p){this.logger.warn(p)}return u}else this.logger.warn(`there was no format function for ${d}`);return n},e)}}const Io=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class Do extends pi{constructor(e,s,i){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=s,this.services=i,this.languageUtils=i.languageUtils,this.options=a,this.logger=Ke.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=a.maxParallelReads||10,this.readingCalls=0,this.maxRetries=a.maxRetries>=0?a.maxRetries:5,this.retryTimeout=a.retryTimeout>=1?a.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(i,a.backend,a)}queueLoad(e,s,i,a){const r={},o={},n={},l={};return e.forEach(d=>{let h=!0;s.forEach(u=>{const p=`${d}|${u}`;!i.reload&&this.store.hasResourceBundle(d,u)?this.state[p]=2:this.state[p]<0||(this.state[p]===1?o[p]===void 0&&(o[p]=!0):(this.state[p]=1,h=!1,o[p]===void 0&&(o[p]=!0),r[p]===void 0&&(r[p]=!0),l[u]===void 0&&(l[u]=!0)))}),h||(n[d]=!0)}),(Object.keys(r).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:a}),{toLoad:Object.keys(r),pending:Object.keys(o),toLoadLanguages:Object.keys(n),toLoadNamespaces:Object.keys(l)}}loaded(e,s,i){const a=e.split("|"),r=a[0],o=a[1];s&&this.emit("failedLoading",r,o,s),!s&&i&&this.store.addResourceBundle(r,o,i,void 0,void 0,{skipCopy:!0}),this.state[e]=s?-1:2,s&&i&&(this.state[e]=0);const n={};this.queue.forEach(l=>{vo(l.loaded,[r],o),Io(l,e),s&&l.errors.push(s),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(d=>{n[d]||(n[d]={});const h=l.loaded[d];h.length&&h.forEach(u=>{n[d][u]===void 0&&(n[d][u]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",n),this.queue=this.queue.filter(l=>!l.done)}read(e,s,i){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:s,fcName:i,tried:a,wait:r,callback:o});return}this.readingCalls++;const n=(d,h)=>{if(this.readingCalls--,this.waitingReads.length>0){const u=this.waitingReads.shift();this.read(u.lng,u.ns,u.fcName,u.tried,u.wait,u.callback)}if(d&&h&&a<this.maxRetries){setTimeout(()=>{this.read.call(this,e,s,i,a+1,r*2,o)},r);return}o(d,h)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const d=l(e,s);d&&typeof d.then=="function"?d.then(h=>n(null,h)).catch(n):n(null,d)}catch(d){n(d)}return}return l(e,s,n)}prepareLoading(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),a&&a();D(e)&&(e=this.languageUtils.toResolveHierarchy(e)),D(s)&&(s=[s]);const r=this.queueLoad(e,s,i,a);if(!r.toLoad.length)return r.pending.length||a(),null;r.toLoad.forEach(o=>{this.loadOne(o)})}load(e,s,i){this.prepareLoading(e,s,{},i)}reload(e,s,i){this.prepareLoading(e,s,{reload:!0},i)}loadOne(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),a=i[0],r=i[1];this.read(a,r,"read",void 0,void 0,(o,n)=>{o&&this.logger.warn(`${s}loading namespace ${r} for language ${a} failed`,o),!o&&n&&this.logger.log(`${s}loaded namespace ${r} for language ${a}`,n),this.loaded(e,o,n)})}saveMissing(e,s,i,a,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},n=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(s)){this.logger.warn(`did not save key "${i}" as the namespace "${s}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if(this.backend&&this.backend.create){const l={...o,isUpdate:r},d=this.backend.create.bind(this.backend);if(d.length<6)try{let h;d.length===5?h=d(e,s,i,a,l):h=d(e,s,i,a),h&&typeof h.then=="function"?h.then(u=>n(null,u)).catch(n):n(null,h)}catch(h){n(h)}else d(e,s,i,a,n,l)}!e||!e[0]||this.store.addResource(e[0],s,i,a)}}}const Ta=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),D(t[1])&&(e.defaultValue=t[1]),D(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const s=t[3]||t[2];Object.keys(s).forEach(i=>{e[i]=s[i]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Pa=t=>(D(t.ns)&&(t.ns=[t.ns]),D(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),D(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),zs=()=>{},Mo=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(s=>{typeof t[s]=="function"&&(t[s]=t[s].bind(t))})};class ys extends pi{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Pa(e),this.services={},this.logger=Ke,this.modules={external:[]},Mo(this),s&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,s),this;setTimeout(()=>{this.init(e,s)},0)}}init(){var e=this;let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof s=="function"&&(i=s,s={}),!s.defaultNS&&s.defaultNS!==!1&&s.ns&&(D(s.ns)?s.defaultNS=s.ns:s.ns.indexOf("translation")<0&&(s.defaultNS=s.ns[0]));const a=Ta();this.options={...a,...this.options,...Pa(s)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...a.interpolation,...this.options.interpolation}),s.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=s.keySeparator),s.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=s.nsSeparator);const r=h=>h?typeof h=="function"?new h:h:null;if(!this.options.isClone){this.modules.logger?Ke.init(r(this.modules.logger),this.options):Ke.init(null,this.options);let h;this.modules.formatter?h=this.modules.formatter:typeof Intl<"u"&&(h=Lo);const u=new Ea(this.options);this.store=new Ca(this.options.resources,this.options);const p=this.services;p.logger=Ke,p.resourceStore=this.store,p.languageUtils=u,p.pluralResolver=new Oo(u,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),h&&(!this.options.interpolation.format||this.options.interpolation.format===a.interpolation.format)&&(p.formatter=r(h),p.formatter.init(p,this.options),this.options.interpolation.format=p.formatter.format.bind(p.formatter)),p.interpolator=new To(this.options),p.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},p.backendConnector=new Do(r(this.modules.backend),p.resourceStore,p,this.options),p.backendConnector.on("*",function(g){for(var b=arguments.length,y=new Array(b>1?b-1:0),_=1;_<b;_++)y[_-1]=arguments[_];e.emit(g,...y)}),this.modules.languageDetector&&(p.languageDetector=r(this.modules.languageDetector),p.languageDetector.init&&p.languageDetector.init(p,this.options.detection,this.options)),this.modules.i18nFormat&&(p.i18nFormat=r(this.modules.i18nFormat),p.i18nFormat.init&&p.i18nFormat.init(this)),this.translator=new Zs(this.services,this.options),this.translator.on("*",function(g){for(var b=arguments.length,y=new Array(b>1?b-1:0),_=1;_<b;_++)y[_-1]=arguments[_];e.emit(g,...y)}),this.modules.external.forEach(g=>{g.init&&g.init(this)})}if(this.format=this.options.interpolation.format,i||(i=zs),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const h=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);h.length>0&&h[0]!=="dev"&&(this.options.lng=h[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(h=>{this[h]=function(){return e.store[h](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(h=>{this[h]=function(){return e.store[h](...arguments),e}});const l=ls(),d=()=>{const h=(u,p)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(p),i(u,p)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return h(null,this.t.bind(this));this.changeLanguage(this.options.lng,h)};return this.options.resources||!this.options.initImmediate?d():setTimeout(d,0),l}loadResources(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:zs;const a=D(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if(a&&a.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const r=[],o=n=>{if(!n||n==="cimode")return;this.services.languageUtils.toResolveHierarchy(n).forEach(d=>{d!=="cimode"&&r.indexOf(d)<0&&r.push(d)})};a?o(a):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>o(l)),this.options.preload&&this.options.preload.forEach(n=>o(n)),this.services.backendConnector.load(r,this.options.ns,n=>{!n&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(n)})}else i(null)}reloadResources(e,s,i){const a=ls();return typeof e=="function"&&(i=e,e=void 0),typeof s=="function"&&(i=s,s=void 0),e||(e=this.languages),s||(s=this.options.ns),i||(i=zs),this.services.backendConnector.reload(e,s,r=>{a.resolve(),i(r)}),a}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&cr.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let s=0;s<this.languages.length;s++){const i=this.languages[s];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,s){var i=this;this.isLanguageChangingTo=e;const a=ls();this.emit("languageChanging",e);const r=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},o=(l,d)=>{d?(r(d),this.translator.changeLanguage(d),this.isLanguageChangingTo=void 0,this.emit("languageChanged",d),this.logger.log("languageChanged",d)):this.isLanguageChangingTo=void 0,a.resolve(function(){return i.t(...arguments)}),s&&s(l,function(){return i.t(...arguments)})},n=l=>{!e&&!l&&this.services.languageDetector&&(l=[]);const d=D(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);d&&(this.language||r(d),this.translator.language||this.translator.changeLanguage(d),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(d)),this.loadResources(d,h=>{o(h,d)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?n(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(n):this.services.languageDetector.detect(n):n(e),a}getFixedT(e,s,i){var a=this;const r=function(o,n){let l;if(typeof n!="object"){for(var d=arguments.length,h=new Array(d>2?d-2:0),u=2;u<d;u++)h[u-2]=arguments[u];l=a.options.overloadTranslationOptionHandler([o,n].concat(h))}else l={...n};l.lng=l.lng||r.lng,l.lngs=l.lngs||r.lngs,l.ns=l.ns||r.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||r.keyPrefix);const p=a.options.keySeparator||".";let g;return l.keyPrefix&&Array.isArray(o)?g=o.map(b=>`${l.keyPrefix}${p}${b}`):g=l.keyPrefix?`${l.keyPrefix}${p}${o}`:o,a.t(g,l)};return D(e)?r.lng=e:r.lngs=e,r.ns=s,r.keyPrefix=i,r}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=s.lng||this.resolvedLanguage||this.languages[0],a=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const o=(n,l)=>{const d=this.services.backendConnector.state[`${n}|${l}`];return d===-1||d===0||d===2};if(s.precheck){const n=s.precheck(this,o);if(n!==void 0)return n}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(i,e)&&(!a||o(r,e)))}loadNamespaces(e,s){const i=ls();return this.options.ns?(D(e)&&(e=[e]),e.forEach(a=>{this.options.ns.indexOf(a)<0&&this.options.ns.push(a)}),this.loadResources(a=>{i.resolve(),s&&s(a)}),i):(s&&s(),Promise.resolve())}loadLanguages(e,s){const i=ls();D(e)&&(e=[e]);const a=this.options.preload||[],r=e.filter(o=>a.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return r.length?(this.options.preload=a.concat(r),this.loadResources(o=>{i.resolve(),s&&s(o)}),i):(s&&s(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const s=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=this.services&&this.services.languageUtils||new Ea(Ta());return s.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;return new ys(e,s)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:zs;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const a={...this.options,...e,isClone:!0},r=new ys(a);return(e.debug!==void 0||e.prefix!==void 0)&&(r.logger=r.logger.clone(e)),["store","services","language"].forEach(n=>{r[n]=this[n]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},i&&(r.store=new Ca(this.store.data,a),r.services.resourceStore=r.store),r.translator=new Zs(r.services,a),r.translator.on("*",function(n){for(var l=arguments.length,d=new Array(l>1?l-1:0),h=1;h<l;h++)d[h-1]=arguments[h];r.emit(n,...d)}),r.init(a,s),r.translator.options=a,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const he=ys.createInstance();he.createInstance=ys.createInstance;he.createInstance;he.dir;he.init;he.loadResources;he.reloadResources;he.use;he.changeLanguage;he.getFixedT;he.t;he.exists;he.setDefaultNamespace;he.hasLoadedNamespace;he.loadNamespaces;he.loadLanguages;function Ii(t){"@babel/helpers - typeof";return Ii=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ii(t)}function dr(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":Ii(XMLHttpRequest))==="object"}function Ro(t){return!!t&&typeof t.then=="function"}function zo(t){return Ro(t)?t:Promise.resolve(t)}var gs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function No(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function jo(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ns={exports:{}},js={exports:{}},La;function Uo(){return La||(La=1,(function(t,e){var s=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof gs<"u"&&gs,i=(function(){function r(){this.fetch=!1,this.DOMException=s.DOMException}return r.prototype=s,new r})();(function(r){(function(o){var n=typeof r<"u"&&r||typeof self<"u"&&self||typeof n<"u"&&n,l={searchParams:"URLSearchParams"in n,iterable:"Symbol"in n&&"iterator"in Symbol,blob:"FileReader"in n&&"Blob"in n&&(function(){try{return new Blob,!0}catch{return!1}})(),formData:"FormData"in n,arrayBuffer:"ArrayBuffer"in n};function d(m){return m&&DataView.prototype.isPrototypeOf(m)}if(l.arrayBuffer)var h=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],u=ArrayBuffer.isView||function(m){return m&&h.indexOf(Object.prototype.toString.call(m))>-1};function p(m){if(typeof m!="string"&&(m=String(m)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(m)||m==="")throw new TypeError('Invalid character in header field name: "'+m+'"');return m.toLowerCase()}function g(m){return typeof m!="string"&&(m=String(m)),m}function b(m){var x={next:function(){var P=m.shift();return{done:P===void 0,value:P}}};return l.iterable&&(x[Symbol.iterator]=function(){return x}),x}function y(m){this.map={},m instanceof y?m.forEach(function(x,P){this.append(P,x)},this):Array.isArray(m)?m.forEach(function(x){this.append(x[0],x[1])},this):m&&Object.getOwnPropertyNames(m).forEach(function(x){this.append(x,m[x])},this)}y.prototype.append=function(m,x){m=p(m),x=g(x);var P=this.map[m];this.map[m]=P?P+", "+x:x},y.prototype.delete=function(m){delete this.map[p(m)]},y.prototype.get=function(m){return m=p(m),this.has(m)?this.map[m]:null},y.prototype.has=function(m){return this.map.hasOwnProperty(p(m))},y.prototype.set=function(m,x){this.map[p(m)]=g(x)},y.prototype.forEach=function(m,x){for(var P in this.map)this.map.hasOwnProperty(P)&&m.call(x,this.map[P],P,this)},y.prototype.keys=function(){var m=[];return this.forEach(function(x,P){m.push(P)}),b(m)},y.prototype.values=function(){var m=[];return this.forEach(function(x){m.push(x)}),b(m)},y.prototype.entries=function(){var m=[];return this.forEach(function(x,P){m.push([P,x])}),b(m)},l.iterable&&(y.prototype[Symbol.iterator]=y.prototype.entries);function _(m){if(m.bodyUsed)return Promise.reject(new TypeError("Already read"));m.bodyUsed=!0}function S(m){return new Promise(function(x,P){m.onload=function(){x(m.result)},m.onerror=function(){P(m.error)}})}function k(m){var x=new FileReader,P=S(x);return x.readAsArrayBuffer(m),P}function N(m){var x=new FileReader,P=S(x);return x.readAsText(m),P}function T(m){for(var x=new Uint8Array(m),P=new Array(x.length),M=0;M<x.length;M++)P[M]=String.fromCharCode(x[M]);return P.join("")}function E(m){if(m.slice)return m.slice(0);var x=new Uint8Array(m.byteLength);return x.set(new Uint8Array(m)),x.buffer}function H(){return this.bodyUsed=!1,this._initBody=function(m){this.bodyUsed=this.bodyUsed,this._bodyInit=m,m?typeof m=="string"?this._bodyText=m:l.blob&&Blob.prototype.isPrototypeOf(m)?this._bodyBlob=m:l.formData&&FormData.prototype.isPrototypeOf(m)?this._bodyFormData=m:l.searchParams&&URLSearchParams.prototype.isPrototypeOf(m)?this._bodyText=m.toString():l.arrayBuffer&&l.blob&&d(m)?(this._bodyArrayBuffer=E(m.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):l.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(m)||u(m))?this._bodyArrayBuffer=E(m):this._bodyText=m=Object.prototype.toString.call(m):this._bodyText="",this.headers.get("content-type")||(typeof m=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):l.searchParams&&URLSearchParams.prototype.isPrototypeOf(m)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},l.blob&&(this.blob=function(){var m=_(this);if(m)return m;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var m=_(this);return m||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else return this.blob().then(k)}),this.text=function(){var m=_(this);if(m)return m;if(this._bodyBlob)return N(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(T(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},l.formData&&(this.formData=function(){return this.text().then(F)}),this.json=function(){return this.text().then(JSON.parse)},this}var A=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function Q(m){var x=m.toUpperCase();return A.indexOf(x)>-1?x:m}function z(m,x){if(!(this instanceof z))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');x=x||{};var P=x.body;if(m instanceof z){if(m.bodyUsed)throw new TypeError("Already read");this.url=m.url,this.credentials=m.credentials,x.headers||(this.headers=new y(m.headers)),this.method=m.method,this.mode=m.mode,this.signal=m.signal,!P&&m._bodyInit!=null&&(P=m._bodyInit,m.bodyUsed=!0)}else this.url=String(m);if(this.credentials=x.credentials||this.credentials||"same-origin",(x.headers||!this.headers)&&(this.headers=new y(x.headers)),this.method=Q(x.method||this.method||"GET"),this.mode=x.mode||this.mode||null,this.signal=x.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&P)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(P),(this.method==="GET"||this.method==="HEAD")&&(x.cache==="no-store"||x.cache==="no-cache")){var M=/([?&])_=[^&]*/;if(M.test(this.url))this.url=this.url.replace(M,"$1_="+new Date().getTime());else{var V=/\?/;this.url+=(V.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}z.prototype.clone=function(){return new z(this,{body:this._bodyInit})};function F(m){var x=new FormData;return m.trim().split("&").forEach(function(P){if(P){var M=P.split("="),V=M.shift().replace(/\+/g," "),U=M.join("=").replace(/\+/g," ");x.append(decodeURIComponent(V),decodeURIComponent(U))}}),x}function ee(m){var x=new y,P=m.replace(/\r?\n[\t ]+/g," ");return P.split("\r").map(function(M){return M.indexOf(`
`)===0?M.substr(1,M.length):M}).forEach(function(M){var V=M.split(":"),U=V.shift().trim();if(U){var Se=V.join(":").trim();x.append(U,Se)}}),x}H.call(z.prototype);function X(m,x){if(!(this instanceof X))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');x||(x={}),this.type="default",this.status=x.status===void 0?200:x.status,this.ok=this.status>=200&&this.status<300,this.statusText=x.statusText===void 0?"":""+x.statusText,this.headers=new y(x.headers),this.url=x.url||"",this._initBody(m)}H.call(X.prototype),X.prototype.clone=function(){return new X(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new y(this.headers),url:this.url})},X.error=function(){var m=new X(null,{status:0,statusText:""});return m.type="error",m};var Z=[301,302,303,307,308];X.redirect=function(m,x){if(Z.indexOf(x)===-1)throw new RangeError("Invalid status code");return new X(null,{status:x,headers:{location:m}})},o.DOMException=n.DOMException;try{new o.DOMException}catch{o.DOMException=function(x,P){this.message=x,this.name=P;var M=Error(x);this.stack=M.stack},o.DOMException.prototype=Object.create(Error.prototype),o.DOMException.prototype.constructor=o.DOMException}function ie(m,x){return new Promise(function(P,M){var V=new z(m,x);if(V.signal&&V.signal.aborted)return M(new o.DOMException("Aborted","AbortError"));var U=new XMLHttpRequest;function Se(){U.abort()}U.onload=function(){var ae={status:U.status,statusText:U.statusText,headers:ee(U.getAllResponseHeaders()||"")};ae.url="responseURL"in U?U.responseURL:ae.headers.get("X-Request-URL");var Ue="response"in U?U.response:U.responseText;setTimeout(function(){P(new X(Ue,ae))},0)},U.onerror=function(){setTimeout(function(){M(new TypeError("Network request failed"))},0)},U.ontimeout=function(){setTimeout(function(){M(new TypeError("Network request failed"))},0)},U.onabort=function(){setTimeout(function(){M(new o.DOMException("Aborted","AbortError"))},0)};function _t(ae){try{return ae===""&&n.location.href?n.location.href:ae}catch{return ae}}U.open(V.method,_t(V.url),!0),V.credentials==="include"?U.withCredentials=!0:V.credentials==="omit"&&(U.withCredentials=!1),"responseType"in U&&(l.blob?U.responseType="blob":l.arrayBuffer&&V.headers.get("Content-Type")&&V.headers.get("Content-Type").indexOf("application/octet-stream")!==-1&&(U.responseType="arraybuffer")),x&&typeof x.headers=="object"&&!(x.headers instanceof y)?Object.getOwnPropertyNames(x.headers).forEach(function(ae){U.setRequestHeader(ae,g(x.headers[ae]))}):V.headers.forEach(function(ae,Ue){U.setRequestHeader(Ue,ae)}),V.signal&&(V.signal.addEventListener("abort",Se),U.onreadystatechange=function(){U.readyState===4&&V.signal.removeEventListener("abort",Se)}),U.send(typeof V._bodyInit>"u"?null:V._bodyInit)})}return ie.polyfill=!0,n.fetch||(n.fetch=ie,n.Headers=y,n.Request=z,n.Response=X),o.Headers=y,o.Request=z,o.Response=X,o.fetch=ie,o})({})})(i),i.fetch.ponyfill=!0,delete i.fetch.polyfill;var a=s.fetch?s:i;e=a.fetch,e.default=a.fetch,e.fetch=a.fetch,e.Headers=a.Headers,e.Request=a.Request,e.Response=a.Response,t.exports=e})(js,js.exports)),js.exports}var Ia;function Ko(){return Ia||(Ia=1,(function(t,e){var s=typeof fetch=="function"?fetch:void 0;if(typeof gs<"u"&&gs.fetch?s=gs.fetch:typeof window<"u"&&window.fetch&&(s=window.fetch),typeof jo<"u"&&typeof window>"u"){var i=s||Uo();i.default&&(i=i.default),e.default=i,t.exports=e.default}})(Ns,Ns.exports)),Ns.exports}var pr=Ko();const hr=No(pr),Da=Ur({__proto__:null,default:hr},[pr]);function Ma(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),s.push.apply(s,i)}return s}function Ra(t){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?Ma(Object(s),!0).forEach(function(i){Bo(t,i,s[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):Ma(Object(s)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(s,i))})}return t}function Bo(t,e,s){return(e=Vo(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function Vo(t){var e=qo(t,"string");return Tt(e)=="symbol"?e:e+""}function qo(t,e){if(Tt(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var i=s.call(t,e);if(Tt(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Tt(t){"@babel/helpers - typeof";return Tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Tt(t)}var ct=typeof fetch=="function"?fetch:void 0;typeof global<"u"&&global.fetch?ct=global.fetch:typeof window<"u"&&window.fetch&&(ct=window.fetch);var _s;dr()&&(typeof global<"u"&&global.XMLHttpRequest?_s=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(_s=window.XMLHttpRequest));var ei;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?ei=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(ei=window.ActiveXObject));!ct&&Da&&!_s&&!ei&&(ct=hr||Da);typeof ct!="function"&&(ct=void 0);var Di=function(e,s){if(s&&Tt(s)==="object"){var i="";for(var a in s)i+="&"+encodeURIComponent(a)+"="+encodeURIComponent(s[a]);if(!i)return e;e=e+(e.indexOf("?")!==-1?"&":"?")+i.slice(1)}return e},za=function(e,s,i,a){var r=function(l){if(!l.ok)return i(l.statusText||"Error",{status:l.status});l.text().then(function(d){i(null,{status:l.status,data:d})}).catch(i)};if(a){var o=a(e,s);if(o instanceof Promise){o.then(r).catch(i);return}}typeof fetch=="function"?fetch(e,s).then(r).catch(i):ct(e,s).then(r).catch(i)},Na=!1,Ho=function(e,s,i,a){e.queryStringParams&&(s=Di(s,e.queryStringParams));var r=Ra({},typeof e.customHeaders=="function"?e.customHeaders():e.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(r["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),i&&(r["Content-Type"]="application/json");var o=typeof e.requestOptions=="function"?e.requestOptions(i):e.requestOptions,n=Ra({method:i?"POST":"GET",body:i?e.stringify(i):void 0,headers:r},Na?{}:o),l=typeof e.alternateFetch=="function"&&e.alternateFetch.length>=1?e.alternateFetch:void 0;try{za(s,n,a,l)}catch(d){if(!o||Object.keys(o).length===0||!d.message||d.message.indexOf("not implemented")<0)return a(d);try{Object.keys(o).forEach(function(h){delete n[h]}),za(s,n,a,l),Na=!0}catch(h){a(h)}}},Go=function(e,s,i,a){i&&Tt(i)==="object"&&(i=Di("",i).slice(1)),e.queryStringParams&&(s=Di(s,e.queryStringParams));try{var r;_s?r=new _s:r=new ei("MSXML2.XMLHTTP.3.0"),r.open(i?"POST":"GET",s,1),e.crossDomain||r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.withCredentials=!!e.withCredentials,i&&r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.overrideMimeType&&r.overrideMimeType("application/json");var o=e.customHeaders;if(o=typeof o=="function"?o():o,o)for(var n in o)r.setRequestHeader(n,o[n]);r.onreadystatechange=function(){r.readyState>3&&a(r.status>=400?r.statusText:null,{status:r.status,data:r.responseText})},r.send(i)}catch(l){console&&console.log(l)}},Qo=function(e,s,i,a){if(typeof i=="function"&&(a=i,i=void 0),a=a||function(){},ct&&s.indexOf("file:")!==0)return Ho(e,s,i,a);if(dr()||typeof ActiveXObject=="function")return Go(e,s,i,a);a(new Error("No fetch and no xhr implementation found!"))};function Qt(t){"@babel/helpers - typeof";return Qt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qt(t)}function ja(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),s.push.apply(s,i)}return s}function wi(t){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?ja(Object(s),!0).forEach(function(i){ur(t,i,s[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):ja(Object(s)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(s,i))})}return t}function Wo(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Yo(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,fr(i.key),i)}}function Xo(t,e,s){return e&&Yo(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function ur(t,e,s){return(e=fr(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function fr(t){var e=Jo(t,"string");return Qt(e)=="symbol"?e:e+""}function Jo(t,e){if(Qt(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var i=s.call(t,e);if(Qt(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var Zo=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(s){return JSON.parse(s)},stringify:JSON.stringify,parsePayload:function(s,i,a){return ur({},i,a||"")},parseLoadPayload:function(s,i){},request:Qo,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},gr=(function(){function t(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};Wo(this,t),this.services=e,this.options=s,this.allOptions=i,this.type="backend",this.init(e,s,i)}return Xo(t,[{key:"init",value:function(s){var i=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.services=s,this.options=wi(wi(wi({},Zo()),this.options||{}),a),this.allOptions=r,this.services&&this.options.reloadInterval){var o=setInterval(function(){return i.reload()},this.options.reloadInterval);Qt(o)==="object"&&typeof o.unref=="function"&&o.unref()}}},{key:"readMulti",value:function(s,i,a){this._readAny(s,s,i,i,a)}},{key:"read",value:function(s,i,a){this._readAny([s],s,[i],i,a)}},{key:"_readAny",value:function(s,i,a,r,o){var n=this,l=this.options.loadPath;typeof this.options.loadPath=="function"&&(l=this.options.loadPath(s,a)),l=zo(l),l.then(function(d){if(!d)return o(null,{});var h=n.services.interpolator.interpolate(d,{lng:s.join("+"),ns:a.join("+")});n.loadUrl(h,o,i,r)})}},{key:"loadUrl",value:function(s,i,a,r){var o=this,n=typeof a=="string"?[a]:a,l=typeof r=="string"?[r]:r,d=this.options.parseLoadPayload(n,l);this.options.request(this.options,s,d,function(h,u){if(u&&(u.status>=500&&u.status<600||!u.status))return i("failed loading "+s+"; status code: "+u.status,!0);if(u&&u.status>=400&&u.status<500)return i("failed loading "+s+"; status code: "+u.status,!1);if(!u&&h&&h.message){var p=h.message.toLowerCase(),g=["failed","fetch","network","load"].find(function(_){return p.indexOf(_)>-1});if(g)return i("failed loading "+s+": "+h.message,!0)}if(h)return i(h,!1);var b,y;try{typeof u.data=="string"?b=o.options.parse(u.data,a,r):b=u.data}catch{y="failed parsing "+s+" to json"}if(y)return i(y,!1);i(null,b)})}},{key:"create",value:function(s,i,a,r,o){var n=this;if(this.options.addPath){typeof s=="string"&&(s=[s]);var l=this.options.parsePayload(i,a,r),d=0,h=[],u=[];s.forEach(function(p){var g=n.options.addPath;typeof n.options.addPath=="function"&&(g=n.options.addPath(p,i));var b=n.services.interpolator.interpolate(g,{lng:p,ns:i});n.options.request(n.options,b,l,function(y,_){d+=1,h.push(y),u.push(_),d===s.length&&typeof o=="function"&&o(h,u)})})}}},{key:"reload",value:function(){var s=this,i=this.services,a=i.backendConnector,r=i.languageUtils,o=i.logger,n=a.language;if(!(n&&n.toLowerCase()==="cimode")){var l=[],d=function(u){var p=r.toResolveHierarchy(u);p.forEach(function(g){l.indexOf(g)<0&&l.push(g)})};d(n),this.allOptions.preload&&this.allOptions.preload.forEach(function(h){return d(h)}),l.forEach(function(h){s.allOptions.ns.forEach(function(u){a.read(h,u,"read",null,null,function(p,g){p&&o.warn("loading namespace ".concat(u," for language ").concat(h," failed"),p),!p&&g&&o.log("loaded namespace ".concat(u," for language ").concat(h),g),a.loaded("".concat(h,"|").concat(u),p,g)})})})}}}])})();gr.type="backend";const vr="a656ff82-0270-46dc-8de8-c734318d841d",en="https://i18n-fastly.ultrafast.io",tn="https://neo.wordplex.io",Mi="asset-picker";let $t=null;async function sn(t="en"){return $t?($t.language!==t&&await $t.changeLanguage(t),{i18n:$t,isNew:!1}):($t=he.createInstance(),await $t.use(gr).init({lng:t,fallbackLng:"en",ns:[Mi],defaultNS:Mi,saveMissing:!0,missingKeyNoValueFallbackToKey:!1,backend:{loadPath:`${en}/api/export/grid/f2/${vr}?langs={{lng}}&separator=+&response_format=i18next_multi`,parse(e,s){var r;const i=JSON.parse(e),a=Array.isArray(s)?s[0]:s;return a&&((r=i[a])!=null&&r.__without_namespace)?i[a].__without_namespace:i}}}),{i18n:$t,isNew:!0})}const an="apTranslationsMissingKeysEnabled";class rn{constructor(){this.enabled=!1,this._missingKeys={},this._timer=null,this.debounceDelay=2e3,this.enabled=typeof localStorage<"u"&&localStorage.getItem(an)==="true",this.enabled&&console.log("%c[asset-picker] TranslationMissingKeysHelper enabled","font-weight:600;"),this._missingKeys=new Proxy(this._missingKeys,{set:(e,s,i,a)=>(this._timer&&clearTimeout(this._timer),this._timer=setTimeout(()=>this._renderCurl(),this.debounceDelay),Reflect.set(e,s,i,a))})}handleMissingKey(e,s="",i=Mi){if(!this.enabled)return;const a=`${i}:${e}`;this._missingKeys[a]={value:s,ns:i}}_renderCurl(){console.group("[asset-picker] Missing translation keys"),console.log("%cMissing keys:","font-weight:600;font-size:200%;"),console.table({...this._missingKeys}),console.log("%ccURL (check carefully data before send):","font-weight:600;font-size:150%;"),console.log(`
curl '${tn}/api/import/request-translations' \\
  --data-raw '{"grid_uuid":"${vr}","translations_requests":${JSON.stringify(Object.entries(this._missingKeys).map(([e,{value:s,ns:i}])=>({key:i&&e.startsWith(`${i}:`)?e.slice(i.length+1):e,lang:"en",default:s}))).replaceAll("'","'\\''")}}'
    `),console.groupEnd()}}const on=new rn;class nn{constructor(e,s){this.host=e,this.store=s,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this)}}function ln(t){return"extension"in t&&!("path"in t)}class cn{constructor(e,s){this.lastClickedIndex=-1,this.host=e,this.store=s,e.addController(this)}hostConnected(){}hostDisconnected(){}get _folderSelectionEnabled(){var e;return((e=this.store.getState().config)==null?void 0:e.folderSelection)===!0}_getCombinedList(){const e=this.store.getState();return this._folderSelectionEnabled?[...e.folders,...e.assets]:e.assets}_applyRangeSelection(e,s,i,a){const r=this.store.getState(),o=this._getCombinedList();for(let n=e;n<=s;n++){const l=o[n];l&&(ln(l)?r.disabledAssetIds.has(l.uuid)||i.set(l.uuid,l):r.disabledFolderIds.has(l.uuid)||a.set(l.uuid,l))}}handleSelect(e,s,i){var n,l,d,h;const a=this.store.getState();if(a.disabledAssetIds.has(e.uuid))return;const r=new Map(a.selectedAssets);if(!(((n=a.config)==null?void 0:n.multiSelect)??!0)){r.clear(),r.set(e.uuid,e),this.store.setState({selectedAssets:r,selectedFolders:new Map}),this.lastClickedIndex=s;return}if(i.shiftKey&&this.lastClickedIndex>=0)if(this._folderSelectionEnabled){const u=Math.min(this.lastClickedIndex,s),p=Math.max(this.lastClickedIndex,s),g=new Map(a.selectedFolders);this._applyRangeSelection(u,p,r,g);const b=(l=a.config)==null?void 0:l.maxSelections;if(b&&r.size+g.size>b)return;this.store.setState({selectedAssets:r,selectedFolders:g})}else{const u=Math.min(this.lastClickedIndex,s),p=Math.max(this.lastClickedIndex,s),g=a.assets;for(let y=u;y<=p;y++)g[y]&&!a.disabledAssetIds.has(g[y].uuid)&&r.set(g[y].uuid,g[y]);const b=(d=a.config)==null?void 0:d.maxSelections;if(b&&r.size>b)return;this.store.setState({selectedAssets:r})}else if(i.metaKey||i.ctrlKey){r.has(e.uuid)?r.delete(e.uuid):r.set(e.uuid,e);const u=(h=a.config)==null?void 0:h.maxSelections,p=r.size+(this._folderSelectionEnabled?a.selectedFolders.size:0);if(u&&p>u)return;this.store.setState({selectedAssets:r})}else r.clear(),r.set(e.uuid,e),this.store.setState({selectedAssets:r,selectedFolders:new Map});this.lastClickedIndex=s}handleFolderSelect(e,s,i){var n,l,d;if(!this._folderSelectionEnabled)return;const a=this.store.getState();if(a.disabledFolderIds.has(e.uuid))return;const r=new Map(a.selectedFolders);if(!(((n=a.config)==null?void 0:n.multiSelect)??!0)){r.clear(),r.set(e.uuid,e),this.store.setState({selectedFolders:r,selectedAssets:new Map}),this.lastClickedIndex=s;return}if(i.shiftKey&&this.lastClickedIndex>=0){const h=Math.min(this.lastClickedIndex,s),u=Math.max(this.lastClickedIndex,s),p=new Map(a.selectedAssets);this._applyRangeSelection(h,u,p,r);const g=(l=a.config)==null?void 0:l.maxSelections;if(g&&p.size+r.size>g)return;this.store.setState({selectedAssets:p,selectedFolders:r})}else if(i.metaKey||i.ctrlKey){r.has(e.uuid)?r.delete(e.uuid):r.set(e.uuid,e);const h=(d=a.config)==null?void 0:d.maxSelections,u=r.size+a.selectedAssets.size;if(h&&u>h)return;this.store.setState({selectedFolders:r})}else r.clear(),r.set(e.uuid,e),this.store.setState({selectedFolders:r,selectedAssets:new Map});this.lastClickedIndex=s}isSelected(e){return this.store.getState().selectedAssets.has(e)}isFolderSelected(e){return this.store.getState().selectedFolders.has(e)}resetRange(){this.lastClickedIndex=-1}selectAll(e){var l;const s=this.store.getState(),i=(l=s.config)==null?void 0:l.maxSelections,a=this._folderSelectionEnabled?s.selectedFolders.size:0,r=e.filter(d=>!s.disabledAssetIds.has(d.uuid)),o=new Map,n=i?Math.max(0,Math.min(r.length,i-a)):r.length;for(let d=0;d<n;d++)o.set(r[d].uuid,r[d]);return this.store.setState({selectedAssets:o}),this.lastClickedIndex=-1,o.size}selectAllFolders(e){var n;if(!this._folderSelectionEnabled)return;const s=this.store.getState(),i=(n=s.config)==null?void 0:n.maxSelections,a=e.filter(l=>!s.disabledFolderIds.has(l.uuid)),r=new Map,o=i?Math.max(0,Math.min(a.length,i-s.selectedAssets.size)):a.length;for(let l=0;l<o;l++)r.set(a[l].uuid,a[l]);this.store.setState({selectedFolders:r})}clearSelection(){this.store.setState({selectedAssets:new Map,selectedFolders:new Map}),this.lastClickedIndex=-1}getSelectedAssets(){return Array.from(this.store.getState().selectedAssets.values())}getSelectedFolders(){return Array.from(this.store.getState().selectedFolders.values())}}class dn{constructor(e,s){this.host=e,this.onLoadMore=s,e.addController(this)}hostConnected(){}hostDisconnected(){this.disconnect()}observe(e,s){this.disconnect(),this.sentinel=e,this.observer=new IntersectionObserver(i=>{var a;(a=i[0])!=null&&a.isIntersecting&&this.onLoadMore()},{root:s??null,rootMargin:"200px"}),this.observer.observe(e)}disconnect(){this.observer&&this.sentinel&&(this.observer.unobserve(this.sentinel),this.observer.disconnect()),this.observer=void 0,this.sentinel=void 0}}const Ua=5,Kt=40,Ka=15;class pn{constructor(e,s){this.startX=0,this.startY=0,this.startClientX=0,this.startClientY=0,this.preMarqueeSelection=new Map,this.preMarqueeFolderSelection=new Map,this._dragging=!1,this._scrollRAF=null,this._lastMouseEvent=null,this.isActive=!1,this.rect={x:0,y:0,width:0,height:0},this.handleMouseDown=i=>this.onMouseDown(i),this.handleMouseMove=i=>this.onMouseMove(i),this.handleMouseUp=()=>this.onMouseUp(),this.preventSelect=i=>i.preventDefault(),this.host=e,this.store=s,e.addController(this)}hostConnected(){}hostDisconnected(){this.detach()}attach(e){this.detach(),this.container=e,e.addEventListener("mousedown",this.handleMouseDown)}detach(){this.container&&this.container.removeEventListener("mousedown",this.handleMouseDown),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("selectstart",this.preventSelect),this.stopAutoScroll(),this._lastMouseEvent=null}isInteractiveTarget(e){return e.composedPath().some(i=>{if(!(i instanceof HTMLElement))return!1;if(i instanceof HTMLButtonElement||i instanceof HTMLInputElement)return!0;const a=i.tagName.toLowerCase();return!!(a.startsWith("ap-asset-")||a.startsWith("ap-folder-")||i.classList.contains("check")||i.classList.contains("check-box"))})}onMouseDown(e){var a;if(e.button!==0||this.isInteractiveTarget(e)||!(((a=this.store.getState().config)==null?void 0:a.multiSelect)??!0))return;const i=this.container.getBoundingClientRect();this.startX=e.clientX-i.left+this.container.scrollLeft,this.startY=e.clientY-i.top+this.container.scrollTop,this.startClientX=e.clientX,this.startClientY=e.clientY,this._dragging=!1,this.isActive=!1,document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp)}onMouseMove(e){var s;if(this.container){if(!this._dragging){const i=Math.abs(e.clientX-this.startClientX),a=Math.abs(e.clientY-this.startClientY);if(i<Ua&&a<Ua)return;this._dragging=!0,this.isActive=!0,document.addEventListener("selectstart",this.preventSelect),(s=window.getSelection())==null||s.removeAllRanges(),this.preMarqueeSelection=new Map(this.store.getState().selectedAssets),this.preMarqueeFolderSelection=new Map(this.store.getState().selectedFolders)}this._lastMouseEvent=e,this.updateMarqueeRect(e),this.startAutoScroll(e)}}updateMarqueeRect(e){if(!this.container)return;const s=this.container.getBoundingClientRect(),i=e.clientX-s.left+this.container.scrollLeft,a=e.clientY-s.top+this.container.scrollTop;let r=Math.min(this.startX,i),o=Math.min(this.startY,a),n=Math.abs(i-this.startX),l=Math.abs(a-this.startY);const d=this.container.scrollWidth,h=this.container.scrollHeight;r+n>d&&(n=d-r),o+l>h&&(l=h-o),r<0&&(n+=r,r=0),o<0&&(l+=o,o=0),this.rect={x:r,y:o,width:n,height:l},this.host.requestUpdate(),this.selectIntersecting()}startAutoScroll(e){if(!this.container)return;if(this.container.scrollHeight<=this.container.clientHeight){this.stopAutoScroll();return}const s=this.container.getBoundingClientRect(),i=e.clientY-s.top,a=s.bottom-e.clientY,r=i<Kt||a<Kt;r&&!this._scrollRAF?this._scrollRAF=requestAnimationFrame(()=>this.autoScrollTick()):r||this.stopAutoScroll()}autoScrollTick(){if(this._scrollRAF=null,!this.container||!this._dragging||!this._lastMouseEvent||this.container.scrollHeight<=this.container.clientHeight)return;const e=this.container.getBoundingClientRect(),s=this._lastMouseEvent,i=s.clientY-e.top,a=e.bottom-s.clientY;let r=0;i<Kt?r=-Ka*(1-i/Kt):a<Kt&&(r=Ka*(1-a/Kt)),r!==0&&(this.container.scrollTop+=r,this.updateMarqueeRect(s),this._scrollRAF=requestAnimationFrame(()=>this.autoScrollTick()))}stopAutoScroll(){this._scrollRAF&&(cancelAnimationFrame(this._scrollRAF),this._scrollRAF=null)}onMouseUp(){document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("selectstart",this.preventSelect),this.stopAutoScroll(),this._lastMouseEvent=null,this._dragging&&(this.isActive=!1,this._dragging=!1,this.rect={x:0,y:0,width:0,height:0},this.host.requestUpdate())}querySelectableElements(){const e=[],s=[];for(const i of Array.from(this.container.children))if(i.shadowRoot){const a=i.shadowRoot.querySelectorAll("[data-asset-uuid]");a.length>0&&e.push(...Array.from(a));const r=i.shadowRoot.querySelectorAll("[data-folder-uuid]");r.length>0&&s.push(...Array.from(r))}return e.length===0&&e.push(...Array.from(this.container.querySelectorAll("[data-asset-uuid]"))),s.length===0&&s.push(...Array.from(this.container.querySelectorAll("[data-folder-uuid]"))),{assetCards:e,folderCards:s}}getCardRelativeRect(e){const s=e.getBoundingClientRect(),i=this.container.getBoundingClientRect();return{x:s.left-i.left+this.container.scrollLeft,y:s.top-i.top+this.container.scrollTop,width:s.width,height:s.height}}intersectsMarquee(e){return this.rect.x<e.x+e.width&&this.rect.x+this.rect.width>e.x&&this.rect.y<e.y+e.height&&this.rect.y+this.rect.height>e.y}selectIntersecting(){var d,h;if(!this.container)return;const e=this.store.getState(),s=((d=e.config)==null?void 0:d.folderSelection)===!0,{assetCards:i,folderCards:a}=this.querySelectableElements(),r=new Map(this.preMarqueeSelection),o=s?new Map(this.preMarqueeFolderSelection):e.selectedFolders;i.forEach(u=>{const p=this.getCardRelativeRect(u),g=u.dataset.assetUuid;if(this.intersectsMarquee(p)&&!e.disabledAssetIds.has(g)){const b=e.assets.find(y=>y.uuid===g);b&&r.set(g,b)}}),s&&a.forEach(u=>{const p=this.getCardRelativeRect(u),g=u.dataset.folderUuid;if(this.intersectsMarquee(p)&&!e.disabledFolderIds.has(g)){const b=e.folders.find(y=>y.uuid===g);b&&o.set(g,b)}});const n=(h=e.config)==null?void 0:h.maxSelections,l=r.size+(s?o.size:0);if(n&&l>n){const u=Array.from(r.entries()).slice(0,Math.max(0,n-o.size));this.store.setState({selectedAssets:new Map(u),...s?{selectedFolders:o}:{}})}else this.store.setState({selectedAssets:r,...s?{selectedFolders:o}:{}})}}class hn{constructor(e,s){this.auth=e;const i=e.projectToken;this.baseUrl=s||`https://api.filerobot.com/${i}/v5`,e.mode==="sassKey"&&(this.sassKey=e.sassKey)}setSassKey(e){this.sassKey=e}getSecurityTemplateKey(){if(this.auth.mode==="securityTemplate")return this.auth.securityTemplateKey}_applyAuthHeaders(e){this.sassKey?e["X-Filerobot-Key"]=this.sassKey:this.auth.mode==="securityTemplate"&&(e["X-Filerobot-Key"]=this.auth.securityTemplateKey)}async request(e,s){const i=new URL(`${this.baseUrl}${e}`);s&&Object.entries(s).forEach(([n,l])=>{l!=null&&(Array.isArray(l)?i.searchParams.set(n,l.join(",")):i.searchParams.set(n,String(l)))});const a={};this._applyAuthHeaders(a);const r=new AbortController,o=setTimeout(()=>r.abort(),3e4);try{const n=await fetch(i.toString(),{headers:a,signal:r.signal});if(clearTimeout(o),!n.ok){let d=`API error: ${n.status} ${n.statusText}`;try{const h=await n.json();h.msg&&(d=`API error: ${n.status} - ${h.msg}`)}catch{}throw new Error(d)}const l=await n.json();if(l.status==="error")throw new Error(`API error: ${l.msg||"Unknown error"}`);return l}catch(n){throw clearTimeout(o),n instanceof DOMException&&n.name==="AbortError"?new Error("API request timed out"):n}}async post(e,s){const i=new URL(`${this.baseUrl}${e}`),a={"Content-Type":"application/json"};this._applyAuthHeaders(a);const r=new AbortController,o=setTimeout(()=>r.abort(),3e4);try{const n=await fetch(i.toString(),{method:"POST",headers:a,body:JSON.stringify(s),signal:r.signal});if(clearTimeout(o),!n.ok){let d=`API error: ${n.status} ${n.statusText}`;try{const h=await n.json();h.msg&&(d=`API error: ${n.status} - ${h.msg}`)}catch{}throw new Error(d)}const l=await n.json();if(l.status==="error")throw new Error(`API error: ${l.msg||"Unknown error"}`);return l}catch(n){throw clearTimeout(o),n instanceof DOMException&&n.name==="AbortError"?new Error("API request timed out"):n}}}const un=["cdn_permalink"];function fn(t){const e=t.fields??un,s={offset:t.offset??0,limit:t.limit??100,format:"json,regvar:api,select:internal",preview:2301,recursive:t.recursive??1};e.length>0&&(s.fields=e);const i=t.sort_by??"created_at",a=t.sort_direction??"desc",r={created_at:"created_at",modified_at:"modified_at",name:"name",size:"size",type:"type"};s.sort=`${r[i]||i}:${a}`,t.folder&&(s.folder=t.folder);const o=[];return t.search&&!t.with_ai&&o.push(t.search),t.q&&o.push(t.q),o.length>0&&(s.q=o.join(" ")),t.with_ai&&(s.with_ai=!0,t.ai_query&&(s.ai_query=t.ai_query),t.ai_lang&&(s.ai_lang=t.ai_lang)),t.collection_uuid&&(s.collection_uuid=t.collection_uuid),t.f64&&(s.f64=t.f64),s}async function wt(t,e){const s=fn(e);return t.request("/files",s)}async function Us(t,e){const s={recursive:e.recursive??1};e.folder&&(s.folder=e.folder);const i=[];return e.search&&!e.with_ai&&i.push(e.search),e.q&&i.push(e.q),i.length>0&&(s.q=i.join(" ")),e.with_ai&&(s.with_ai=!0,e.ai_query&&(s.ai_query=e.ai_query),e.ai_lang&&(s.ai_lang=e.ai_lang)),e.collection_uuid&&(s.collection_uuid=e.collection_uuid),e.f64&&(s.f64=e.f64),t.request("/files/stats",s)}async function gn(t,e){const s={recursive:(e==null?void 0:e.recursive)??0,folder:(e==null?void 0:e.folderPath)??"/",limit:(e==null?void 0:e.limit)??1e3,offset:(e==null?void 0:e.offset)??0};e!=null&&e.q&&(s.q=e.q);const i=(e==null?void 0:e.sort_by)??"created_at",a=(e==null?void 0:e.sort_direction)??"asc",r={created_at:"created_at",modified_at:"modified_at",name:"name"};return s.sort=`${r[i]||i}:${a}`,await t.request("/folders",s)}async function vn(t,e){return e.length===0?{}:(await t.post("/folders/previews",{folders:e})).folders||{}}async function mn(t,e,s){const i=s.replace(/\/+$/,""),a=i?`${i}/${e}`:`/${e}`,r=await t.post("/folders",{name:a});if(r.status!=="success")throw new Error(r.msg||"Failed to create folder")}async function bn(t){return await t.request("/labels")}async function yn(t){return t.request("/collections")}async function _n(t,e){return t.request(`/collections/${e}/folders`)}function mr(t){return t.filter(e=>!!e.name).map(e=>({...e,children:mr(e.children??[])})).filter(e=>{var s;return!((((s=e.children)==null?void 0:s.length)??0)<1&&!e.filters)})}async function xn(t){return((await t.request("/tags")).tags||[]).map(i=>({...i,label:i.names.en||Object.values(i.names)[0]||""})).filter(i=>i.label).sort((i,a)=>i.label.localeCompare(a.label))}async function $n(t){const e=t.getSecurityTemplateKey();if(!e)throw new Error("Security template key is required for SASS key exchange");const s=await t.request(`/key/${e}`);return{key:s.key,permissions:s.permissions??[]}}function wn(t,e){return t?t.includes(e):!1}const kn={FOLDER_CREATE:"DIR_CREATE"};function Sn(t){var a,r;const e=(a=t.info)==null?void 0:a.playlists;if(!(e!=null&&e.length))return null;const s=(r=e[0])==null?void 0:r.playlists;return s!=null&&s.length&&s[0]||null}function Vt(t){return(t.type??"").startsWith("image")}function Ba(t){var e,s;return((e=t.info)==null?void 0:e.img_w)??((s=t.info)==null?void 0:s.video_w)??0}function Va(t){var e,s;return((e=t.info)==null?void 0:e.img_h)??((s=t.info)==null?void 0:s.video_h)??0}const Cn={excellent:90,good:75,fair:60},An=[{label:"WEBP",value:"webp"},{label:"JPEG",value:"jpeg"},{label:"PNG",value:"png"},{label:"GIF",value:"gif"}],En=[{label:"Excellent",value:"excellent"},{label:"Good",value:"good"},{label:"Fair",value:"fair"}],Fn=[{label:"Original",value:"original"},{label:"Full HD",value:"full_hd",width:1920},{label:"Large",value:"large",width:1200},{label:"Medium",value:"medium",width:600},{label:"Small",value:"small",width:300}],On={webp:"awebp,webp",jpeg:"jpeg",png:"png",gif:"agif,gif"},Tn=new Set(["jpg","jpeg","png","gif","webp","svg","bmp","ico","tiff","tif","avif","heic","heif","psd","eps"]),Pn=new Set([...Tn,"pdf","psd","eps","ai","ttf","otf","woff","woff2","eot"]);function Ht(t){if(!t)return"other";const e={image:"image",video:"video",audio:"audio",application:"document",font:"font",text:"document"};return e[t]?e[t]:t.startsWith("image/")?"image":t.startsWith("video/")?"video":t.startsWith("audio/")?"audio":t.startsWith("application/pdf")||t.startsWith("text/")||t.startsWith("application/msword")||t.startsWith("application/vnd.")?"document":t.startsWith("application/zip")||t.startsWith("application/x-rar")||t.startsWith("application/x-7z")||t.startsWith("application/gzip")?"archive":t.startsWith("font/")?"font":"other"}function br(t){const e=(t==null?void 0:t.toLowerCase().replace(".",""))||"";return Pn.has(e)}const $="https://scaleflex.cloudimg.io/v7/assets/file-types/v3/",Ri={_default:$+"GENERIC.svg?vh=9a518a",png:$+"PNG.svg?vh=96cd9a",jpg:$+"JPG.svg?vh=06e819",jpg2:$+"JPG2.svg?vh=f0eb7f",jpeg:$+"JPEG.svg?vh=6a65e9",gif:$+"GIF.svg?vh=c3c2c3",bmp:$+"BMP.svg?vh=d2243a",webp:$+"WEBP.svg?vh=fedd74",svg:$+"SVG.svg?vh=a15e46",tiff:$+"TIFF.svg?vh=1f30c3",tif:$+"TIF.svg?vh=b383c9",heic:$+"HEIC.svg?vh=84adfe",avif:$+"AVIF.svg?vh=536b30",ico:$+"ICO.svg?vh=79063d",psd:$+"PSD.svg?vh=be6140",psb:$+"PSB.svg?vh=678646",ai:$+"AI.svg?vh=84b254",dwg:$+"DWG.svg?vh=971fb3",mp4:$+"MP4.svg?vh=42f175",webm:$+"WEBM.svg?vh=26a84a",avi:$+"AVI.svg?vh=d22ba8",mpeg:$+"MPEG.svg?vh=ba93bb",ogv:$+"OGV.svg?vh=74d453","3gp":$+"3GP.svg?vh=f0d388","3g2":$+"3G2.svg?vh=04c652",swf:$+"SWF.svg?vh=3955e2",fla:$+"FLA.svg?vh=daf585",m3u8:$+"M3U8.svg?vh=7d5e62",mp3:$+"MP3.svg?vh=66bbef",wav:$+"WAV.svg?vh=d7a7d5",aac:$+"AAC.svg?vh=07f3f9",oga:$+"OGA.svg?vh=a5c622",opus:$+"OPUS.svg?vh=9548b1",weba:$+"WEBA.svg?vh=4dcf70",mid:$+"MID.svg?vh=3f0e29",midi:$+"MIDI.svg?vh=9fedec",cda:$+"CDA.svg?vh=85b83b",pdf:$+"PDF.svg?vh=18c5f7",doc:$+"DOC.svg?vh=d1b47c",docx:$+"DOCX.svg?vh=1eb6b0",txt:$+"TXT.svg?vh=307979",rtf:$+"RTF.svg?vh=978c5f",xls:$+"XLS.svg?vh=13b5f7",xlsx:$+"XLSX.svg?vh=79d64a",ppt:$+"PPT.svg?vh=4ee29b",pptx:$+"PPTX.svg?vh=8b1568",csv:$+"CSV.svg?vh=4add78",odt:$+"ODT.svg?vh=940781",ods:$+"ODS.svg?vh=9fbe9a",odp:$+"ODP.svg?vh=bf892d",dbf:$+"DBF.svg?vh=457bd4",vsd:$+"VSD.svg?vh=8a9ccb",abw:$+"ABW.svg?vh=313dc7",epub:$+"EPUB.svg?vh=15263d",azw:$+"AZW.svg?vh=a018b1",ics:$+"ICS.svg?vh=909f63",ogx:$+"OGX.svg?vh=f694d2",zip:$+"ZIP.svg?vh=84f98b",rar:$+"RAR.svg?vh=1d6423","7z":$+"7Z.svg?vh=e007e5",tar:$+"TAR.svg?vh=603aed",gz:$+"GZ.svg?vh=de13f7",bz:$+"BZ.svg?vh=0374ff",bz2:$+"BZ2.svg?vh=e14294",arc:$+"ARC.svg?vh=942fad",jar:$+"JAR.svg?vh=149796",mpkg:$+"MPKG.svg?vh=dea655",ttf:$+"TTF.svg?vh=d2e2c1",otf:$+"OTF.svg?vh=c904fd",woff:$+"WOFF.svg?vh=4b8177",woff2:$+"WOFF2.svg?vh=b532d3",eot:$+"EOT.svg?vh=a54980",js:$+"JS.svg?vh=524691",mjs:$+"MJS.svg?vh=d57921",ts:$+"TS.svg?vh=9af3ae",css:$+"CSS.svg?vh=287863",html:$+"HTML.svg?vh=fa7a87",htm:$+"HTM.svg?vh=21323d",xhtml:$+"XHTML.svg?vh=e6d6a9",xul:$+"XUL.svg?vh=6c9c71",json:$+"JSON.svg?vh=104c9e",jsonld:$+"JSONLD.svg?vh=f30c0f",xml:$+"XML.svg?vh=7f7194",php:$+"PHP.svg?vh=503e36",sh:$+"SH.svg?vh=3b820e",csh:$+"CSH.svg?vh=08c0cc",exe:$+"EXE.svg?vh=ccca53",iso:$+"ISO.svg?vh=064b8f",bin:$+"BIN.svg?vh=1e9618"};function Is(t){const e=(t==null?void 0:t.toLowerCase().replace(".",""))||"";return Ri[e]||Ri._default}function Wt(){return Ri._default}function hi(t){if(!t)return"";const e=t.split("/");return e.length>1?e[1]:e[0]}const Ln=new Set(["png","svg","webp","gif","avif"]);function qi(t){const e=(t==null?void 0:t.toLowerCase().replace(".",""))||"";return Ln.has(e)}const In=new Set(["svg","svg+xml","png","pdf"]);function yr(t){return In.has(hi(t).toLowerCase())}let zi=null;function Dn(t){zi=t??null}function Ye(t,e){if(!t||!zi)return t;try{return zi(t,e)||t}catch(s){return console.warn("[asset-picker] transformRemoteThumbnail threw:",s),t}}function ti(t){var i;const e=t.info,s=(e==null?void 0:e.video_thumbnail)||(e==null?void 0:e.image_thumbnail)||(e==null?void 0:e.thumbnail)||(e==null?void 0:e.preview)||((i=t.url)==null?void 0:i.cdn)||"";return Ye(Yt(s),{source:"asset",asset:t})}function _r(t){const e=t.info,s=(e==null?void 0:e.video_thumbnail)||(e==null?void 0:e.image_thumbnail)||(e==null?void 0:e.thumbnail)||"";return s?Ye(Yt(s),{source:"video",asset:t}):""}function Hi(t){var s,i;let e=Yt(((s=t.url)==null?void 0:s.cdn)||((i=t.url)==null?void 0:i.public)||"");return e?(e=e.replace(/([?&])func=proxy&?/,"$1").replace(/[?&]$/,""),Ye(Ft(e,{w:"200",force_format:"webp,jpeg",doc_page:"1",bypass_process_proxy:"1"}),{source:"pdf",asset:t})):""}function Ft(t,e){try{const s=new URL(t);for(const[i,a]of Object.entries(e))s.searchParams.set(i,a);return s.toString()}catch{return t}}const qa=/^(https:\/\/)([a-z0-9_-]+)\.filerobot\.com\//i;function Yt(t,e){if(!t)return"";const s=a=>a.replace(/(\.filerobot\.com\/[a-z0-9_-]+)\/v\d+\//i,"$1/");if(t.includes("assets.filerobot.com"))return s(t);const i=t.match(qa);if(i){const a=i[2],r=t.replace(qa,`$1assets.filerobot.com/${a}/`);return s(r)}if(e)try{const a=new URL(t);return s(`https://assets.filerobot.com/${e}${a.pathname}${a.search}`)}catch{}return t}function xr(t,e){const s=t.file_uri_cdn;if(!s)return"";let i=Yt(s);const a=Ht(t.file_type),r=String(window.devicePixelRatio||1);let o;return a==="video"?o=Ft(i,{w:e,dpr:r,force_format:"webp,jpeg"}):t.file_type==="application/pdf"||hi(t.file_type).toLowerCase()==="pdf"?(i=i.replace(/([?&])func=proxy&?/,"$1").replace(/[?&]$/,""),o=Ft(i,{w:e,dpr:r,force_format:"webp,jpeg",doc_page:"1",bypass_process_proxy:"1"})):o=Ft(i,{w:e,dpr:r}),Ye(o,{source:"folder"})}function Mn(t,e){const s={};return t.format&&(s.force_format=On[t.format]),t.quality&&t.format!=="png"&&(s.q=String(Cn[t.quality])),t.width&&(s.w=String(t.width)),t.height&&(s.h=String(t.height)),(t.width||t.height)&&(s.org_if_sml="1",e!=null&&e.isMultiSelect?s.func="bound":(e==null?void 0:e.isAspectLocked)===!1&&(s.func="cover")),s}const C={TYPE:"type",MIME_TYPE:"mimetype",METADATA:"metadata",DATE:"date",APPROVAL:"approval",SIZE:"size",LICENSE_EXPIRY:"asset_expiration",TAGS:"tags",IMAGE:"image",LABELS:"labels",PRODUCT_REF:"product_ref",FACES:"faces",COLOR:"color"},j={STATUS:"approval_status",APPROVER:"task_approver",REQUESTOR:"task_requester",DUE_DATE:"task_duedate"},K={IS:":",RANGE:"..",IS_NOT:":-",IS_EXACT:":=",CONTAINS_IN_TEXT:"~~~",GREATER_THAN_OR_EQUAL:">=",LESS_THAN_OR_EQUAL:"<="},Rn={AND:"AND"},L={NUMERIC:"numeric",SELECT_ONE:"select-one",MULTI_SELECT:"multi-select",TEXT_AREA:"textarea",TEXT:"text",SUPERTAGS:"tags",DATE:"date",BOOLEAN:"boolean",ATTACHMENTS_ASSETS:"attachments-assets",ATTACHMENT_URI:"attachment-uri",GEO_POINT:"geopoint",DECIMAL2:"decimal2",INTEGER_LIST:"integer-list"},ui={[L.DATE]:"date_",[L.BOOLEAN]:"bool_",[L.NUMERIC]:"num_",[L.DECIMAL2]:"dec_",[L.ATTACHMENTS_ASSETS]:"attach_",[L.ATTACHMENT_URI]:"uri_",[L.SELECT_ONE]:"one_",[L.MULTI_SELECT]:"multi_",[L.SUPERTAGS]:"tags_",[L.TEXT]:"text_",[L.TEXT_AREA]:"area_",[L.GEO_POINT]:"geo_",[L.INTEGER_LIST]:"intlist_"};Object.fromEntries(Object.entries(ui).map(([t,e])=>[e,t]));const $r=Object.values(ui),Re={PRESET:"preset",AFTER:"after",BEFORE:"before",BETWEEN:"between",SPECIFIC:"specific"},Ha={EMPTY:"empty",NOT_EMPTY:"non-empty"},Fe="empty",Oe="non-empty",kt="specific",ki=10,cs=10,Ks=10,wr="filters:pinned:",kr="metadata:pinned:",Ga=[C.DATE,C.TYPE,C.SIZE],Sr=K.IS,qs="20",Hs="1",zn=0,Nn=[{key:C.DATE,labelKey:"filterDate",label:"Date",icon:"calendar",type:"date"},{key:C.TYPE,labelKey:"filterFormat",label:"Format",icon:"file-type",type:"string"},{key:C.SIZE,labelKey:"filterSize",label:"Size",icon:"scaling",type:"string"},{key:C.LICENSE_EXPIRY,labelKey:"filterLicenseExpiry",label:"License expiry",icon:"history",type:"date"},{key:C.TAGS,labelKey:"filterTags",label:"Tags",icon:"hash",type:"string"},{key:C.LABELS,labelKey:"filterLabels",label:"Labels",icon:"tag",type:"string"},{key:C.PRODUCT_REF,labelKey:"filterProducts",label:"Products",icon:"box",type:"string"},{key:C.IMAGE,labelKey:"filterImage",label:"Image",icon:"image",type:"string"},{key:C.COLOR,labelKey:"filterColor",label:"Color",icon:"swatch-book",type:"string"}],jn={key:C.METADATA,labelKey:"filterMetadata",label:"Metadata",icon:"file-text",type:"string"},Un={key:C.APPROVAL,labelKey:"filterApproval",label:"Approval",icon:"badge-check",type:"string"},xs=[jn,...Nn,Un],qt={[C.TYPE]:"Format",[C.DATE]:"Date",[C.SIZE]:"Size",[C.LICENSE_EXPIRY]:"License expiry",[C.TAGS]:"Tags",[C.LABELS]:"Labels",[C.PRODUCT_REF]:"Products",[C.IMAGE]:"Image",[C.COLOR]:"Color",[C.METADATA]:"Metadata",[C.APPROVAL]:"Approval",[j.STATUS]:"Approval",[j.APPROVER]:"Approval",[j.REQUESTOR]:"Approval",[j.DUE_DATE]:"Approval"},ps={...Object.fromEntries(xs.map(t=>[t.key,t.labelKey])),[j.STATUS]:"filterApproval",[j.APPROVER]:"filterApproval",[j.REQUESTOR]:"filterApproval",[j.DUE_DATE]:"filterApproval"},we={IMAGE:"image",VIDEO:"video",AUDIO:"audio",DOCUMENT:"document",ARCHIVE:"archive",DESIGN_TEMPLATE:"template_fdt",OTHER:"other",FONTS:"font"},si=[{value:we.IMAGE,labelKey:"assetTypeImage",label:"Image",icon:"image"},{value:we.VIDEO,labelKey:"assetTypeVideo",label:"Video",icon:"clapperboard"},{value:we.AUDIO,labelKey:"assetTypeAudio",label:"Audio",icon:"music"},{value:we.DOCUMENT,labelKey:"assetTypeDocument",label:"Document",icon:"document"},{value:we.ARCHIVE,labelKey:"assetTypeArchive",label:"Archive",icon:"archive"},{value:we.DESIGN_TEMPLATE,labelKey:"assetTypeDesignTemplate",label:"Design template",icon:"layout-template"},{value:we.FONTS,labelKey:"assetTypeFonts",label:"Fonts",icon:"text"},{value:we.OTHER,labelKey:"assetTypeOther",label:"Other",icon:"layout-grid"}],Kn={[we.IMAGE]:["jpg","jpeg","png","gif","webp","svg","bmp","ico","tiff","tif","avif","heic","heif","psd","eps"],[we.VIDEO]:["mp4","webm","ogg","mov","avi","mkv","flv","wmv","m4v"],[we.AUDIO]:["mp3","wav","ogg","flac","aac","wma","m4a","opus"],[we.DOCUMENT]:["pdf","doc","docx","xls","xlsx","ppt","pptx","txt","csv","rtf","odt","ods","odp","html"],[we.ARCHIVE]:["zip","rar","7z","tar","gz","bz2","xz"],[we.FONTS]:["ttf","otf","woff","woff2","eot"]},Si={RESOLUTION:0,ORIENTATION:1,FACES:2},Bn=[{value:"small",label:"Small",labelKey:"resolutionSmall"},{value:"medium",label:"Medium",labelKey:"resolutionMedium"},{value:"large",label:"Large",labelKey:"resolutionLarge"}],Vn=[{value:"portrait",label:"Portrait",labelKey:"orientationPortrait"},{value:"landscape",label:"Landscape",labelKey:"orientationLandscape"},{value:"square",label:"Square",labelKey:"orientationSquare"},{value:"panorama",label:"Panorama",labelKey:"orientationPanorama"}],qn=[{value:"none",label:"None",labelKey:"facesNone"},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3..",label:"3+"}],Cr=[{value:"created",label:"Created at",labelKey:"createdAt"},{value:"updated",label:"Updated at",labelKey:"updatedAt"}],Gi=[{value:"today",label:"Today",labelKey:"today"},{value:"before",label:"Before date",labelKey:"beforeDate"},{value:"last_week",label:"Last week",labelKey:"lastWeek"},{value:"after",label:"After date",labelKey:"afterDate"},{value:"last_month",label:"Last month",labelKey:"lastMonth"},{value:"between",label:"Between dates",labelKey:"betweenDates"},{value:"last_year",label:"Last year",labelKey:"lastYear"}],Ar=[{value:"today",label:"Today",labelKey:"today"},{value:"before",label:"Before date",labelKey:"beforeDate"},{value:"within_week",label:"Within week",labelKey:"withinWeek"},{value:"after",label:"After date",labelKey:"afterDate"},{value:"within_month",label:"Within month",labelKey:"withinMonth"},{value:"between",label:"Between dates",labelKey:"betweenDates"},{value:"within_year",label:"Within year",labelKey:"withinYear"},{value:"specific",label:"Specific date",labelKey:"specificDate"}],Er=[{value:"today",label:"Today",labelKey:"today"},{value:"before",label:"Before date",labelKey:"beforeDate"},{value:"within_week",label:"Within week",labelKey:"withinWeek"},{value:"after",label:"After date",labelKey:"afterDate"},{value:"within_month",label:"Within month",labelKey:"withinMonth"},{value:"between",label:"Between dates",labelKey:"betweenDates"},{value:"within_year",label:"Within year",labelKey:"withinYear"},{value:"specific",label:"Specific date",labelKey:"specificDate"}],Hn=["#ffffff","#99a1af","#000000","#894b00","#e7000b","#ff8904","#fdc700","#9ae600","#008236","#00bcff","#1447e6","#7f22fe","#e60076"],Gn=[{label:"None (Exact)",value:"0",labelKey:"colorDiffNone"},{label:"Small",value:"1",labelKey:"colorDiffSmall"},{label:"Medium",value:"2",labelKey:"colorDiffMedium"},{label:"Large",value:"4",labelKey:"colorDiffLarge"}],Ci=[{label:"Is",value:K.IS,labelKey:"operatorIs"},{label:"Contains",value:K.CONTAINS_IN_TEXT,labelKey:"operatorContains"}],rt=[{label:"Is",value:K.IS,labelKey:"operatorIs"},{label:"Is not",value:K.IS_NOT,labelKey:"operatorIsNot"}],Ai=[{label:"Is",value:K.IS_EXACT,labelKey:"operatorIs"},{label:"Contains",value:K.IS,labelKey:"operatorContains"},{label:"Does not contain",value:K.IS_NOT,labelKey:"operatorDoesNotContain"}],Ei=[{label:"Is",value:K.IS,labelKey:"operatorIs"},{label:"Greater than",value:K.GREATER_THAN_OR_EQUAL,labelKey:"operatorGreaterThan"},{label:"Is not",value:K.IS_NOT,labelKey:"operatorIsNot"},{label:"Less than",value:K.LESS_THAN_OR_EQUAL,labelKey:"operatorLessThan"},{label:"Between",value:K.RANGE,labelKey:"operatorBetween"}],Qa=[{label:"Is",value:K.IS_EXACT,labelKey:"operatorIs"},{label:"Is not",value:K.IS_NOT,labelKey:"operatorIsNot"}],Qn=[{value:"APPROVED",label:"Approved",labelKey:"approved",icon:"circle-check-big",iconColor:"var(--ap-success, oklch(0.637 0.17 151.295))"},{value:"PENDING",label:"Pending",labelKey:"pending",icon:"clock",iconColor:"var(--ap-warning, oklch(0.734 0.157 69.419))"},{value:"REJECTED",label:"Rejected",labelKey:"rejected",icon:"x-circle",iconColor:"var(--ap-destructive, oklch(0.577 0.215 27.325))"},{value:"CANCELLED",label:"Cancelled",labelKey:"cancelled",icon:"ban",iconColor:"var(--ap-muted-foreground, oklch(0.685 0.033 249.82))"}],ii=[{label:"Empty",value:Fe,labelKey:"empty"},{label:"Not empty",value:Oe,labelKey:"notEmpty"}],Wn=[...ii,{label:"Specific",value:kt,labelKey:"specific"}],Yn=[{label:"Empty",value:Fe,labelKey:"empty"},{label:"Not empty",value:Oe,labelKey:"notEmpty"},{label:"True",value:"true",labelKey:"boolTrue"},{label:"False",value:"false",labelKey:"boolFalse"}],Gs={[L.DATE]:"calendar",[L.BOOLEAN]:"toggle-left",[L.NUMERIC]:"file-digit",[L.DECIMAL2]:"decimals-arrow-right",[L.ATTACHMENTS_ASSETS]:"paperclip",[L.ATTACHMENT_URI]:"link-2",[L.SELECT_ONE]:"circle-dot",[L.MULTI_SELECT]:"square-check",[L.SUPERTAGS]:"hash",[L.TEXT]:"text-initial",[L.TEXT_AREA]:"text-align-justify",[L.GEO_POINT]:"locate",[L.INTEGER_LIST]:"list-ordered"},Xn={[L.TEXT]:"text",[L.TEXT_AREA]:"text",[L.NUMERIC]:"number",[L.DECIMAL2]:"number",[L.BOOLEAN]:"boolean",[L.SELECT_ONE]:"select-one",[L.MULTI_SELECT]:"multi-select",[L.SUPERTAGS]:"tags",[L.DATE]:"date",[L.GEO_POINT]:"geo",[L.ATTACHMENTS_ASSETS]:"attachment",[L.ATTACHMENT_URI]:"attachment",[L.INTEGER_LIST]:"attachment"};async function Jn(t){var i;return(((i=(await t.request("/filters",{filter_by:"filetype",format:"list",limit:200})).filters)==null?void 0:i.file_types)??[]).map(a=>({name:a.name,value:a.value,count:a.count,category:a.category??a.value.split("_")[0],label:Zn(a.name)}))}function Zn(t){const e=t.indexOf("›");return(e!==-1?t.slice(e+1).trim():t).toUpperCase()}async function el(t){var b,y;const e=await t.request("/settings"),s=e.settings??e,i=(s==null?void 0:s.metadata)??e.metadata,r=((i==null?void 0:i.model)??[])[zn],o=i==null?void 0:i.store,l=((o==null?void 0:o.regional_variants_groups)??[]).map(_=>({uuid:_.uuid,label:_.label??_.name??"",variants:(_.variants??[]).map(S=>({api_value:S.api_value??S.value??"",internal_unique_value:S.internal_unique_value??S.api_value??"",label:S.label??S.name??""}))})).filter(_=>_.variants.length>1),d={};for(const _ of l)d[_.uuid]=((b=_.variants[0])==null?void 0:b.api_value)??"";const h=(s==null?void 0:s.project_branding)??((y=e.settings)==null?void 0:y.project_branding),u=h==null?void 0:h.brandColor;if(!r)return{fields:[],regionalVariantGroups:l,regionalFilters:d,brandColor:u};const p=r.groups??[],g=[];for(const _ of p){const S=_.name||"";for(const k of _.fields??[]){const N=k.possible_values,T=N==null?void 0:N.map(E=>({api_value:E.api_value??E.value??"",internal_unique_value:E.internal_unique_value??E.api_value??"",label:E.label??E.name??E.api_value??""}));g.push({key:k.key??k.ckey,label:k.title??k.label??k.key??"",type:k.type??"text",slug:k.slug,ckey:k.ckey,possible_values:T,group:S,regionalVariantsGroupUuid:k.regional_variants_group_uuid})}}return{fields:g,regionalVariantGroups:l,regionalFilters:d,brandColor:u}}function St(t){return t.toLocaleDateString("en-CA")}function Bs(){return St(new Date)}function Qi(t){const e=new Date;switch(t){case"today":return{from:Bs(),to:null};case"last_week":{const s=new Date(e);return s.setDate(s.getDate()-7),{from:St(s),to:null}}case"within_week":{const s=new Date(e);return s.setDate(s.getDate()+7),{from:Bs(),to:St(s)}}case"last_month":{const s=new Date(e);return s.setDate(s.getDate()-30),{from:St(s),to:null}}case"within_month":{const s=new Date(e);return s.setDate(s.getDate()+30),{from:Bs(),to:St(s)}}case"last_year":{const s=new Date(e);return s.setDate(s.getDate()-365),{from:St(s),to:null}}case"within_year":{const s=new Date(e);return s.setDate(s.getDate()+365),{from:Bs(),to:St(s)}}default:return null}}function Wa(t,e){return e?e.type==="date"?tl(e):e.type==="string"?sl(e):!0:!1}function tl(t){return!(!t.kind&&!t.preset||t.kind==="preset"&&!t.preset||t.kind==="between"&&!t.from&&!t.to||t.kind==="after"&&!t.from||t.kind==="before"&&!t.to||t.kind==="specific"&&!t.from||t.from&&t.to&&new Date(t.from)>new Date(t.to))}function sl(t){return!t.values||!Array.isArray(t.values)?!1:t.values.filter(Boolean).length>0}function il(t,e={}){const s=[];for(const[i,a]of Object.entries(t)){if(!a||!Wa(i,a))continue;const r=rl(i,a);s.push(...r)}for(const[i,a]of Object.entries(e)){if(!a||!Wa(i,a))continue;const r=hl(i,a);s.push(...r)}return al(s)}function al(t){const e=[],s=[],i=[];for(const a of t)a.startsWith("type:")||a.startsWith("type=")?e.push(a):a.startsWith("mimetype:")||a.startsWith("mimetype=")?s.push(a):i.push(a);if(e.length>0&&s.length>0){const a=[...e,...s].join(" , ");i.push(a)}else i.push(...e,...s);return i}function rl(t,e){if(e.type==="date")return Fr(t,e);if(t===C.IMAGE)return pl(e);const s=e,{operator:i=Sr,values:a=[],logic:r}=s;if(a.length===0)return[];switch(t){case C.SIZE:return ol(t,a,"..");case C.FACES:return nl(t,i,a);case C.TAGS:return At(t,i,Ya(a),",",r);case C.LABELS:return At(t,i,Ya(a),",",r);case C.COLOR:return ll(i,a,r);case C.TYPE:return cl(a,i);case C.MIME_TYPE:return dl(t,a,i);case C.PRODUCT_REF:return At(t,"=%",a,",",r);default:return At(t,i,a,",",r)}}function Fr(t,e){const s=e.field||"created";if(e.kind===Re.PRESET&&e.preset){if(e.preset===Ha.EMPTY)return[`${s}:"empty"`];if(e.preset===Ha.NOT_EMPTY)return[`${s}:"non-empty"`];const i=Qi(e.preset);return i?i.to===null?[`${s}>"${i.from}"`]:[`${s}:"${i.from}..${i.to}"`]:[]}if(e.kind===Re.AFTER&&e.from)return[`${s}:>"${e.from}"`];if(e.kind===Re.BEFORE&&e.to)return[`${s}:<"${e.to}"`];if(e.kind===Re.BETWEEN){if(e.from&&e.to)return[`${s}:"${e.from}..${e.to}"`];if(e.from&&!e.to)return[`${s}:>"${e.from}"`];if(!e.from&&e.to)return[`${s}:<"${e.to}"`]}return e.kind===Re.SPECIFIC&&e.from?[`${s}:"${e.from}"`]:[]}function ol(t,e,s){return e.length===0?[]:[`${t}:"${e.join(s)}"`]}function nl(t,e,s){return s.length===0?[]:[`${t}${e}"${s.join(",")}"`]}function At(t,e,s,i,a){if(s.length===0)return[];if(a===Rn.AND)return s.map(o=>`${t}${e}"${o}"`);const r=s.map(o=>`"${o}"`).join(i);return[`${t}${e}${r}`]}function ll(t,e,s){const i=[],a=At("color_search",t,e,",",s);return i.push(...a),i.push('color_operator:"AND"'),i}function cl(t,e){if(t.length===0)return[];const s=new Set,i=[];for(const r of t){const o=Kn[r];if(o)for(const n of o){const l=`${r}_${n}`;s.has(l)||(s.add(l),i.push(l))}else s.has(r)||(s.add(r),i.push(r))}const a=i.map(r=>`"${r}"`).join(",");return[`type${e}${a}`]}function dl(t,e,s,i){if(e.length===0)return[];const a=e.map(r=>`"${r}"`).join(",");return[`${t}${s}${a}`]}function pl(t){const e=[];if(typeof t=="object"&&t!==null&&!Array.isArray(t)){const o=t,n=o.resolution,l=o.orientation,d=o.faces;return n!=null&&n.length&&e.push(`resolution:"${n.join(",")}"`),l!=null&&l.length&&e.push(`orientation:"${l.join(",")}"`),d!=null&&d.length&&e.push(`faces:"${d.join(",")}"`),e}const s=t,i=s[Si.RESOLUTION],a=s[Si.ORIENTATION],r=s[Si.FACES];return i&&e.push(`resolution:"${i}"`),a&&e.push(`orientation:"${a}"`),r&&e.push(`faces:"${r}"`),e}function hl(t,e){const s=gl(t),i=fl(t);if(e.type==="date")return ul(s,e,i);const a=e,{operator:r=Sr,values:o=[],logic:n,metadataType:l}=a;if(o.length===0)return[];if(o.length===1&&(o[0]===Fe||o[0]===Oe)){const d=l===L.GEO_POINT?K.IS+"~":K.IS;return[`${s}${d}"${o[0]}"`]}if((l===L.NUMERIC||l===L.DECIMAL2)&&r===K.RANGE)return[`${s}${K.IS}"${o.join('","')}"`];if(l===L.GEO_POINT){const d=o.map(h=>{const u=h.indexOf("..");if(u===-1)return`(${h})`;const p=h.slice(0,u),g=h.slice(u);return`(${p})${g}`});return At(s,r+"~",d,",",n)}return At(s,r,o,",",n)}function ul(t,e,s){const i=Fr(t,e);return!s||i.length===0?i:i.map(a=>{const r=a.search(/[^a-zA-Z0-9_]/);if(r===-1)return`"${a}"`;const o=a.slice(0,r),l=a.slice(r).replace(/"/g,"");return`"${o}${l}"`})}function fl(t){return t.startsWith("date_")}function gl(t){for(const e of $r)if(t.startsWith(e))return t.slice(e.length);return t}function Ya(t){return t.map(e=>e.replace(/#/g,""))}const vl=new Set([C.DATE,C.LICENSE_EXPIRY,j.DUE_DATE]),ml={[C.DATE]:"created",[C.LICENSE_EXPIRY]:C.LICENSE_EXPIRY,[j.DUE_DATE]:j.DUE_DATE};function Ni(t){if(!t)return{};const e={};for(const[s,i]of Object.entries(t))i&&(e[s]=bl(s,i));return e}function bl(t,e){return e.type==="string"||e.type==="date"?e:vl.has(t)?{type:"date",field:e.field??ml[t]??"created",kind:e.kind??null,preset:e.preset??null,from:e.from??null,to:e.to??null}:{type:"string",values:e.values,...e.operator!==void 0&&{operator:e.operator},...e.logic!==void 0&&{logic:e.logic}}}function yl(t){const e=localStorage.getItem(wr+t),s=localStorage.getItem(kr+t);let i;try{i=e?JSON.parse(e):[...Ga]}catch{i=[...Ga]}let a;try{a=s?JSON.parse(s):[]}catch{a=[]}return{pinnedFilters:i,pinnedMetadata:a}}function _l(t,e){localStorage.setItem(wr+t,JSON.stringify(e))}function xl(t,e){localStorage.setItem(kr+t,JSON.stringify(e))}const Or="sort-by",Tr="sort-order";function Xa(t,e){try{localStorage.setItem(Or,t),localStorage.setItem(Tr,e)}catch{}}function $l(){try{const t=localStorage.getItem(Or),e=localStorage.getItem(Tr);return{sortBy:t,sortDirection:e}}catch{return{sortBy:null,sortDirection:null}}}const Pr="ap-last-folder",Lr="ap-last-view",Ir="ap-last-tab";function Jt(t,e){return e?`${t}:${e}`:t}function Ja(t,e){try{localStorage.setItem(Jt(Pr,e),t)}catch{}}function wl(t){try{return localStorage.getItem(Jt(Pr,t))}catch{return null}}function kl(t,e){try{localStorage.setItem(Jt(Lr,e),t)}catch{}}function Sl(t){try{return localStorage.getItem(Jt(Lr,t))}catch{return null}}function Cl(t,e){try{localStorage.setItem(Jt(Ir,e),t)}catch{}}function Al(t){try{const e=localStorage.getItem(Jt(Ir,t));return e==="assets"||e==="folders"||e==="labels"||e==="collections"?e:null}catch{return null}}function El(t){const e=t.replace("#",""),s=e.length===3?e[0]+e[0]+e[1]+e[1]+e[2]+e[2]:e,i=parseInt(s.slice(0,2),16)/255,a=parseInt(s.slice(2,4),16)/255,r=parseInt(s.slice(4,6),16)/255;return[i,a,r]}function Fi(t){return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function Fl(t,e,s){const i=Fi(t),a=Fi(e),r=Fi(s),o=.4122214708*i+.5363325363*a+.0514459929*r,n=.2119034982*i+.6806995451*a+.1073969566*r,l=.0883024619*i+.2817188376*a+.6299787005*r,d=Math.cbrt(o),h=Math.cbrt(n),u=Math.cbrt(l),p=.2104542553*d+.793617785*h-.0040720468*u,g=1.9779984951*d-2.428592205*h+.4505937099*u,b=.0259040371*d+.7827717662*h-.808675766*u,y=Math.sqrt(g*g+b*b);let _=Math.atan2(b,g)*(180/Math.PI);return _<0&&(_+=360),[p,y,_]}function Ol(t){return t>.7}function Tl(t,e){const s=["--ap-primary","--ap-primary-foreground","--ap-primary-10","--ap-primary-20","--ap-accent","--ap-accent-foreground","--ap-ring","--ap-selection-bg"];if(!e){for(const u of s)t.style.removeProperty(u);return}const[i,a,r]=El(e),[o,n,l]=Fl(i,a,r),d=`oklch(${o.toFixed(3)} ${n.toFixed(3)} ${l.toFixed(1)})`,h=Ol(o)?"#000":"#fff";t.style.setProperty("--ap-primary",d),t.style.setProperty("--ap-primary-foreground",h),t.style.setProperty("--ap-primary-10",`oklch(${o.toFixed(3)} ${n.toFixed(3)} ${l.toFixed(1)} / 0.1)`),t.style.setProperty("--ap-primary-20",`oklch(${o.toFixed(3)} ${n.toFixed(3)} ${l.toFixed(1)} / 0.2)`),t.style.setProperty("--ap-accent",`oklch(${o.toFixed(3)} ${n.toFixed(3)} ${l.toFixed(1)} / 0.07)`),t.style.setProperty("--ap-accent-foreground",d),t.style.setProperty("--ap-ring",`oklch(${o.toFixed(3)} ${n.toFixed(3)} ${l.toFixed(1)} / 0.7)`),t.style.setProperty("--ap-selection-bg",`oklch(${o.toFixed(3)} ${n.toFixed(3)} ${l.toFixed(1)} / 0.08)`)}const Wi=[{value:"name",labelKey:"sortName",label:"Name"},{value:"created_at",labelKey:"sortUploaded",label:"Uploaded"},{value:"modified_at",labelKey:"sortModified",label:"Modified"},{value:"size",labelKey:"sortSize",label:"Size"},{value:"type",labelKey:"sortFormat",label:"Format"}],Pl=[{value:"relevance",labelKey:"sortRelevance",label:"Relevance"},...Wi],Ll=[{value:"name",labelKey:"sortName",label:"Name"},{value:"created_at",labelKey:"sortUploaded",label:"Uploaded"},{value:"modified_at",labelKey:"sortModified",label:"Modified"},{value:"files_count_recursive",labelKey:"sortAssetsCount",label:"Assets count"},{value:"files_size_recursive",labelKey:"sortAssetsSize",label:"Assets size"}],Il=[{value:"name",labelKey:"sortName",label:"Name"}],Dl=[{value:"name",labelKey:"sortName",label:"Name"},{value:"created_at",labelKey:"sortUploaded",label:"Uploaded"},{value:"updated_at",labelKey:"sortModified",label:"Modified"}],Ml=[{value:"name",labelKey:"sortName",label:"Name"}];var Rl=Object.defineProperty,zl=Object.getOwnPropertyDescriptor,Yi=(t,e,s,i)=>{for(var a=i>1?void 0:i?zl(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Rl(e,s,a),a};let $s=class extends O{constructor(){super(...arguments),this.open=!1}updated(t){var e;super.updated(t),t.has("open")&&(this.open?this.dialog&&!this.dialog.open&&this.dialog.showModal():(e=this.dialog)!=null&&e.open&&this._animateClose())}_animateClose(){const t=this.dialog;if(t){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){t.close();return}t.classList.add("closing"),t.addEventListener("animationend",()=>{t.classList.remove("closing"),t.close()},{once:!0})}}_handleBackdropClick(t){t.target===this.dialog&&this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:"backdrop"},bubbles:!0,composed:!0}))}_handleCancel(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:"escape"},bubbles:!0,composed:!0}))}render(){return c`
      <dialog
        @click=${this._handleBackdropClick}
        @cancel=${this._handleCancel}
      >
        <div class="modal-body">
          <div class="modal-header">
            <slot name="header"></slot>
          </div>
          <div class="modal-content">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </dialog>
    `}};$s.styles=I`
    :host {
      display: contents;
    }
    dialog:not([open]) {
      display: none;
    }
    dialog {
      position: fixed;
      inset: 0;
      width: 100%;
      max-width: var(--ap-modal-max-width, 1200px);
      height: var(--ap-modal-height, 85vh);
      max-height: var(--ap-modal-max-height, 85vh);
      margin: auto;
      padding: 0;
      border: none;
      border-radius: var(--ap-modal-radius, 12px);
      box-shadow: var(--ap-modal-shadow, 0 25px 50px -12px rgb(0 0 0 / 0.25));
      background: var(--ap-background, oklch(1 0 0));
      overflow: hidden;
      display: flex;
      flex-direction: column;
      font-family: var(--ap-font-family, system-ui, -apple-system, sans-serif);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    dialog[open] {
      animation: ap-modal-in 200ms ease-out;
    }
    dialog.closing {
      animation: ap-modal-out 150ms ease-in forwards;
    }
    dialog::backdrop {
      background: var(--ap-modal-backdrop, rgba(0, 0, 0, 0.5));
      animation: ap-backdrop-in 200ms ease-out;
    }
    @keyframes ap-modal-in {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
    @keyframes ap-modal-out {
      from { opacity: 1; transform: scale(1); }
      to { opacity: 0; transform: scale(0.95); }
    }
    @keyframes ap-backdrop-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .modal-body {
      display: flex;
      flex-direction: column;
      height: 100%;
      max-height: var(--ap-modal-max-height, 85vh);
      overflow: hidden;
    }
    .modal-header {
      flex-shrink: 0;
    }
    .modal-content {
      flex: 1;
      overflow: hidden;
      position: relative;
      display: flex;
      flex-direction: column;
    }
    .modal-footer {
      flex-shrink: 0;
    }
    @media (prefers-reduced-motion: reduce) {
      dialog[open], dialog::backdrop, dialog.closing {
        animation: none;
      }
    }
  `;Yi([f({type:Boolean})],$s.prototype,"open",2);Yi([ut("dialog")],$s.prototype,"dialog",2);$s=Yi([R("ap-modal")],$s);function Nl(t,e){let s;const i=((...a)=>{clearTimeout(s),s=setTimeout(()=>t(...a),e)});return i.cancel=()=>clearTimeout(s),i}const me=I`
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;var jl=Object.defineProperty,Ul=Object.getOwnPropertyDescriptor,Ds=(t,e,s,i)=>{for(var a=i>1?void 0:i?Ul(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&jl(e,s,a),a};let Pt=class extends O{constructor(){super(...arguments),this.groups=[],this.selectedFilters={},this.t=(t,e)=>typeof e=="string"?e:t,this._open=!1,this._handleOutsideClick=t=>{this._open&&!t.composedPath().includes(this)&&(this._open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}_selectVariant(t,e){this.dispatchEvent(new CustomEvent("regional-change",{detail:{groupUuid:t,value:e},bubbles:!0,composed:!0}))}render(){const t=this.groups.length>0;return c`
      <button
        class="trigger ${this._open?"active":""}"
        @click=${()=>this._open=!this._open}
        aria-label=${this.t("regionalSettings","Regional settings")}
        title=${this.t("regionalSettings","Regional settings")}
      >
        <ap-icon name="globe" .size=${18}></ap-icon>
      </button>
      <div class="popover ${this._open?"open":""}">
        ${t?v:c`
          <div class="empty-msg">
            ${this.t("noRegionalSettings","No regional settings configured")}
          </div>
        `}
        ${this.groups.map(e=>c`
          <div class="group">
            <div class="group-label">${e.label}</div>
            ${e.variants.map(s=>{const i=this.selectedFilters[e.uuid]===s.api_value;return c`
                <button
                  class="variant-option"
                  ?data-selected=${i}
                  @click=${()=>this._selectVariant(e.uuid,s.api_value)}
                >
                  <span class="variant-label">${s.label}</span>
                  <span class="check-mark">${i?c`<ap-icon name="check" .size=${14}></ap-icon>`:""}</span>
                </button>
              `})}
          </div>
        `)}
      </div>
    `}};Pt.styles=I`
    :host {
      position: relative;
      display: inline-block;
    }
    .trigger {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border: 1px solid transparent;
      border-radius: var(--ap-radius-sm, 6px);
      background: none;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      cursor: pointer;
    }
    .trigger:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .trigger.active {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .popover {
      display: none;
      position: absolute;
      top: calc(100% + 4px);
      right: 0;
      z-index: 50;
      min-width: 220px;
      max-height: 320px;
      overflow-y: auto;
      background: var(--ap-card, oklch(1 0 0));
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius, 8px);
      box-shadow: 0 4px 12px rgb(0 0 0 / 0.12);
      padding: 0;
    }
    .popover.open {
      display: block;
    }
    .group {
      padding: 4px 0;
    }
    .group + .group {
      border-top: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }
    .group-label {
      padding: 6px 12px 8px;
      font-size: 0.875rem;
      font-weight: 400;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
    }
    .variant-option {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      width: 100%;
      padding: 6px 16px 6px 24px;
      border: none;
      background: none;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: inherit;
      text-align: left;
      cursor: pointer;
      border-radius: 0;
    }
    .variant-label {
      flex: 1;
    }
    .variant-option:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .variant-option[data-selected] {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.08));
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      font-weight: 400;
    }
    .check-mark {
      width: 16px;
      flex-shrink: 0;
    }
    .empty-msg {
      padding: 12px;
      font-size: 0.8125rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
  `;Ds([f({type:Array})],Pt.prototype,"groups",2);Ds([f({type:Object})],Pt.prototype,"selectedFilters",2);Ds([f({attribute:!1})],Pt.prototype,"t",2);Ds([w()],Pt.prototype,"_open",2);Pt=Ds([R("ap-regional-settings")],Pt);var Kl=Object.defineProperty,Bl=Object.getOwnPropertyDescriptor,be=(t,e,s,i)=>{for(var a=i>1?void 0:i?Bl(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Kl(e,s,a),a};const Vl=[{value:"assets",labelKey:"tabAssets",labelDefault:"Assets",icon:"gallery-vertical-end"},{value:"folders",labelKey:"tabFolders",labelDefault:"Folders",icon:"folder-open"},{value:"labels",labelKey:"tabLabels",labelDefault:"Labels",icon:"tag"},{value:"collections",labelKey:"tabCollections",labelDefault:"Collections",icon:"layout-grid"}];let ne=class extends O{constructor(){super(...arguments),this.activeTab="assets",this.tabs=["assets","folders"],this.isInsideLabel=!1,this.isInsideCollection=!1,this.isInsideCollectionLeaf=!1,this.viewMode="grid",this.searchQuery="",this.regionalGroups=[],this.regionalFilters={},this.hideClose=!1,this.enableAISearch=!1,this.isAISearchActive=!1,this.t=(t,e)=>typeof e=="string"?e:t,this._localSearch="",this._debouncedSearch=Nl(t=>{(t.length===0||t.length>=3)&&this.dispatchEvent(new CustomEvent("search-change",{detail:{value:t},bubbles:!0,composed:!0}))},300)}disconnectedCallback(){super.disconnectedCallback(),this._debouncedSearch.cancel()}willUpdate(t){t.has("searchQuery")&&(this._localSearch=this.searchQuery)}_handleInput(t){const e=t.target.value;this._localSearch=e,this._debouncedSearch(e)}_clearSearch(){this._localSearch="",this._debouncedSearch.cancel(),this.dispatchEvent(new CustomEvent("search-change",{detail:{value:""},bubbles:!0,composed:!0}))}_toggleView(){const t=this.viewMode==="grid"?"list":"grid";this.dispatchEvent(new CustomEvent("view-change",{detail:{mode:t},bubbles:!0,composed:!0}))}_handleTabChange(t){this.dispatchEvent(new CustomEvent("tab-change",{detail:{tab:t.detail.value},bubbles:!0,composed:!0}))}_handleRegionalChange(t){this.dispatchEvent(new CustomEvent("regional-change",{detail:t.detail,bubbles:!0,composed:!0}))}_toggleAISearch(){this.dispatchEvent(new CustomEvent("ai-search-toggle",{detail:{active:!this.isAISearchActive},bubbles:!0,composed:!0}))}_handleClose(){this.dispatchEvent(new CustomEvent("ap-close",{bubbles:!0,composed:!0}))}render(){const{t}=this,e=Vl.filter(s=>this.tabs.includes(s.value)).map(s=>({...s,label:t(s.labelKey,s.labelDefault)}));return c`
      <div class="header-row">
        ${e.length>1?c`<ap-dropdown
              .value=${this.activeTab}
              .options=${e}
              @ap-change=${this._handleTabChange}
            ></ap-dropdown>`:v}
        <div class="search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${16}></ap-icon>
          <input
            type="text"
            placeholder=${this.isAISearchActive?this.activeTab==="folders"?t("aiSearchFoldersPlaceholder","AI search folders and assets"):t("aiSearchAssetsPlaceholder","AI search assets"):this.activeTab==="labels"&&!this.isInsideLabel?t("searchLabelsPlaceholder","Search labels"):this.activeTab==="collections"&&!this.isInsideCollection?t("searchCollectionsPlaceholder","Search collections"):this.activeTab==="collections"&&this.isInsideCollection&&!this.isInsideCollectionLeaf?t("searchCollectionFoldersPlaceholder","Search collection folders"):this.activeTab==="folders"?t("searchFoldersPlaceholder","Search folders and assets"):t("searchAssetsPlaceholder","Search assets")}
            .value=${this.searchQuery}
            @input=${this._handleInput}
          />
          <div class="search-actions">
            ${this._localSearch?c`
              <button class="clear-btn" @click=${this._clearSearch} aria-label=${t("clearSearch","Clear search")}>
                <ap-icon name="close" .size=${14}></ap-icon>
              </button>
            `:""}
            ${this.enableAISearch?c`
              <button
                class="ai-toggle ${this.isAISearchActive?"active":""}"
                @click=${this._toggleAISearch}
                aria-label=${this.isAISearchActive?t("disableAISearch","Disable AI search"):t("enableAISearch","Enable AI search")}
                title=${this.isAISearchActive?t("aiSearchOn","AI search on"):t("aiSearchOff","AI search off")}
              >
                <ap-icon name="sparkles" .size=${12}></ap-icon>
                <span>AI</span>
              </button>
            `:""}
          </div>
        </div>
        <div class="actions">
          <ap-regional-settings
            .groups=${this.regionalGroups}
            .selectedFilters=${this.regionalFilters}
            .t=${t}
            @regional-change=${this._handleRegionalChange}
          ></ap-regional-settings>
          <button
            class="icon-btn"
            @click=${this._toggleView}
            aria-label=${this.viewMode==="grid"?t("switchToListView","Switch to list view"):t("switchToGridView","Switch to grid view")}
            title=${this.viewMode==="grid"?t("listView","List view"):t("gridView","Grid view")}
          >
            <ap-icon name=${this.viewMode==="grid"?"list":"layout-grid"} .size=${18}></ap-icon>
          </button>
          ${this.hideClose?v:c`
            <div class="divider"></div>
            <button class="icon-btn icon-btn--muted" @click=${this._handleClose} aria-label=${t("close","Close")}>
              <ap-icon name="close" .size=${18}></ap-icon>
            </button>
          `}
        </div>
      </div>
    `}};ne.styles=[me,I`
    :host {
      display: block;
      padding: 16px 20px;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }
    .header-row {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .search-wrapper {
      flex: 1;
      min-width: 0;
      max-width: 548px;
      position: relative;
    }
    .search-icon {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      pointer-events: none;
    }
    input {
      width: 100%;
      height: 36px;
      box-sizing: border-box;
      padding: 0 34px 0 38px;
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: var(--ap-font-family, system-ui, sans-serif);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-background, oklch(1 0 0));
      outline: none;
    }
    input:hover {
      border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    input:focus {
      border-color: var(--ap-ring, oklch(0.578 0.198 268.129 / 0.7));
      box-shadow: 0 0 0 2px var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
    }
    input:focus-visible {
      outline: none; /* already has focus ring via border-color + box-shadow */
    }
    input::placeholder {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      font-weight: 400;
    }
    :host([ai-search]) input {
      padding-right: 90px;
    }
    .search-actions {
      position: absolute;
      right: 6px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      gap: 2px;
    }
    .clear-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 22px;
      height: 22px;
      border: none;
      border-radius: var(--ap-radius-sm, 6px);
      background: none;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      cursor: pointer;
      padding: 0;
    }
    .clear-btn:hover {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .ai-toggle {
      display: flex;
      align-items: center;
      gap: 4px;
      height: 26px;
      padding: 0 8px;
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: var(--ap-radius-sm, 6px);
      background: none;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      font-size: 12px;
      font-weight: 500;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      cursor: pointer;
      white-space: nowrap;
    }
    .ai-toggle:hover {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    .ai-toggle.active {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: white;
      border-color: transparent;
    }
    .ai-toggle.active:hover {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: white;
      border-color: transparent;
      opacity: 0.9;
    }
    .icon-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border: 1px solid transparent;
      border-radius: var(--ap-radius-sm, 6px);
      background: none;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      cursor: pointer;
    }
    .icon-btn:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .icon-btn:focus-visible {
      outline: 2px solid var(--ap-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: -2px;
    }
    .tab-label {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      padding: 0 4px;
      white-space: nowrap;
    }
    .actions {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-left: auto;
    }
    .divider {
      width: 1px;
      height: 24px;
      background: var(--ap-border, oklch(92.86% 0.009 247.92));
    }
    .icon-btn--muted {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
  `];be([f()],ne.prototype,"activeTab",2);be([f({type:Array})],ne.prototype,"tabs",2);be([f({type:Boolean})],ne.prototype,"isInsideLabel",2);be([f({type:Boolean})],ne.prototype,"isInsideCollection",2);be([f({type:Boolean})],ne.prototype,"isInsideCollectionLeaf",2);be([f()],ne.prototype,"viewMode",2);be([f()],ne.prototype,"searchQuery",2);be([f({type:Array})],ne.prototype,"regionalGroups",2);be([f({type:Object})],ne.prototype,"regionalFilters",2);be([f({type:Boolean})],ne.prototype,"hideClose",2);be([f({type:Boolean,reflect:!0,attribute:"ai-search"})],ne.prototype,"enableAISearch",2);be([f({type:Boolean})],ne.prototype,"isAISearchActive",2);be([f({attribute:!1})],ne.prototype,"t",2);be([w()],ne.prototype,"_localSearch",2);ne=be([R("ap-header")],ne);var ql=Object.defineProperty,Hl=Object.getOwnPropertyDescriptor,Xi=(t,e,s,i)=>{for(var a=i>1?void 0:i?Hl(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&ql(e,s,a),a};let ws=class extends O{constructor(){super(...arguments),this.items=[],this.rootLabel="Root"}_navigate(t){this.dispatchEvent(new CustomEvent("breadcrumb-navigate",{detail:{uuid:t},bubbles:!0,composed:!0}))}render(){return this.items.length===0?c``:c`
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <button @click=${()=>this._navigate("")}>${this.rootLabel}</button>
        ${this.items.map((t,e)=>c`
            <ap-icon name="chevron-right" .size=${14}></ap-icon>
            ${e<this.items.length-1?c`<button @click=${()=>this._navigate(t.uuid)}>${t.name}</button>`:c`<span class="current">${t.name}</span>`}
          `)}
      </nav>
    `}};ws.styles=I`
    :host {
      display: block;
      padding: 4px 20px 12px;
    }
    .breadcrumb {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: var(--ap-font-size-sm, 0.875rem);
    }
    button {
      border: none;
      background: none;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      cursor: pointer;
      padding: 4px 6px;
      border-radius: 4px;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      font-size: var(--ap-font-size-sm, 0.875rem);
    }
    button:first-child {
      margin-left: -6px;
    }
    button:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .current {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      font-weight: 500;
      padding: 4px 6px;
    }
    ap-icon {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
  `;Xi([f({type:Array})],ws.prototype,"items",2);Xi([f()],ws.prototype,"rootLabel",2);ws=Xi([R("ap-breadcrumb")],ws);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gl={ATTRIBUTE:1,CHILD:2,ELEMENT:6},Ql=t=>(...e)=>({_$litDirective$:t,values:e});class Wl{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,i){this._$Ct=e,this._$AM=s,this._$Ci=i}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}const Oi=t=>t.includes("-")?t:t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`);class Yl extends Wl{constructor(e){if(super(e),this._appliedProps=new Set,e.type!==Gl.ELEMENT)throw new Error("cspStyle must be used as an element directive: <el ${cspStyle({...})}>")}render(e){return Xe}update(e,[s]){if(s===this._lastStyles)return Xe;this._lastStyles=s;const{style:i}=e.element,a=s??{};for(const r of this._appliedProps)(!(r in a)||a[r]==null||a[r]==="")&&(i.removeProperty(Oi(r)),this._appliedProps.delete(r));for(const[r,o]of Object.entries(a))o!=null&&o!==""?(i.setProperty(Oi(r),o),this._appliedProps.add(r)):this._appliedProps.has(r)&&(i.removeProperty(Oi(r)),this._appliedProps.delete(r));return Xe}}const B=Ql(Yl);var Xl=Object.defineProperty,Jl=Object.getOwnPropertyDescriptor,Ji=(t,e,s,i)=>{for(var a=i>1?void 0:i?Jl(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Xl(e,s,a),a};let ks=class extends O{constructor(){super(...arguments),this.title="",this.open=!1}render(){return this.open?c`
      <div class="popover">
        ${this.title?c`<div class="title">${this.title}</div>`:""}
        <slot></slot>
      </div>
    `:c``}};ks.styles=I`
    :host {
      display: block;
    }
    .popover {
      position: absolute;
      top: calc(100% + 4px);
      left: 20px;
      z-index: 50;
      width: 320px;
      max-height: 400px;
      overflow-y: auto;
      overscroll-behavior: contain;
      background: var(--ap-card, oklch(1 0 0));
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius, 8px);
      box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1);
      padding: 12px;
    }
    .title {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 600;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      margin-bottom: 12px;
    }
  `;Ji([f()],ks.prototype,"title",2);Ji([f({type:Boolean})],ks.prototype,"open",2);ks=Ji([R("ap-filter-popover")],ks);var Zl=Object.defineProperty,ec=Object.getOwnPropertyDescriptor,Zt=(t,e,s,i)=>{for(var a=i>1?void 0:i?ec(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Zl(e,s,a),a};function Za(t){var i;const e=new Map;for(const a of t){const r=a.category||a.value.split("_")[0];if(!e.has(r)){const n=si.find(l=>l.value===r);e.set(r,{key:r,labelKey:(n==null?void 0:n.labelKey)||r,label:(n==null?void 0:n.label)||r.charAt(0).toUpperCase()+r.slice(1),icon:(n==null?void 0:n.icon)||"file",extensions:[],totalCount:0})}const o=e.get(r);o.extensions.push({value:a.value,label:a.label||((i=a.value.split("_").pop())==null?void 0:i.toUpperCase())||a.value,count:a.count}),o.totalCount+=a.count}const s=si.map(a=>a.value);return[...e.values()].sort((a,r)=>{const o=s.indexOf(a.key),n=s.indexOf(r.key);return(o===-1?999:o)-(n===-1?999:n)})}let dt=class extends O{constructor(){super(...arguments),this.selected=[],this.fileTypes=[],this.t=(t,e)=>typeof e=="string"?e:t,this._search="",this._expanded=new Set}_extValues(t){return t.extensions.map(e=>e.value)}_isGroupFullySelected(t){if(this.selected.includes(t.key))return!0;const e=this._extValues(t);return e.length>0&&e.every(s=>this.selected.includes(s))}_isGroupPartial(t){if(this.selected.includes(t.key))return!1;const e=this._extValues(t),s=e.filter(i=>this.selected.includes(i)).length;return s>0&&s<e.length}_isExtSelected(t,e){return this.selected.includes(e)||this.selected.includes(t)}_toggleGroup(t){const e=this._extValues(t),s=this._isGroupFullySelected(t);let i;if(s){const a=new Set([t.key,...e]);i=this.selected.filter(r=>!a.has(r))}else{const a=new Set(e);i=this.selected.filter(r=>!a.has(r)),i.push(t.key)}this._emit(i)}_toggleExt(t,e){const s=this._extValues(e);let i=[...this.selected];i.includes(e.key)&&(i=i.filter(a=>a!==e.key),i.push(...s)),i.includes(t)?i=i.filter(a=>a!==t):(i.push(t),s.every(a=>i.includes(a))&&(i=i.filter(a=>!s.includes(a)),i.push(e.key))),this._emit(i)}_clearAll(){this._emit([])}_emit(t){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:C.TYPE,values:t,operator:K.IS},bubbles:!0,composed:!0}))}_toggleExpand(t){const e=new Set(this._expanded);e.has(t)?e.delete(t):e.add(t),this._expanded=e}_filteredGroups(t){const e=this._search.toLowerCase().trim();return e?t.map(s=>{if(s.label.toLowerCase().includes(e)||s.key.toLowerCase().includes(e))return s;const a=s.extensions.filter(r=>r.label.toLowerCase().includes(e)||r.value.toLowerCase().includes(e));return a.length===0?null:{...s,extensions:a}}).filter(s=>s!==null):t}_toggleCategory(t){const e=this.selected.includes(t)?this.selected.filter(s=>s!==t):[...this.selected,t];this._emit(e)}updated(t){if(t.has("fileTypes")&&this.fileTypes.length>0){const e=Za(this.fileTypes),s=new Set(this._expanded);for(const i of e)(this._isGroupFullySelected(i)||this._isGroupPartial(i))&&s.add(i.key);this._expanded=s}}render(){if(this.fileTypes.length===0)return this._renderFallback();const t=Za(this.fileTypes),e=this._filteredGroups(t),s=this.selected.length>0;return c`
      <input
        class="search-input"
        type="text"
        .placeholder=${this.t("searchFormatsPlaceholder","Search formats...")}
        .value=${this._search}
        @input=${i=>{this._search=i.target.value}}
      />
      <div class="header-row">
        <span class="section-label">${this.t("formats","Formats")}</span>
        ${s?c`<button class="clear-btn" @click=${this._clearAll}>${this.t("clearAll","Clear all")}</button>`:v}
      </div>
      <div class="groups">
        ${e.length===0&&this._search.trim()?c`<div class="no-results">${this.t("noFormatsFound","No formats found")}</div>`:e.map(i=>this._renderGroup(i))}
      </div>
    `}_renderGroup(t){const e=this._expanded.has(t.key)||this._search.trim().length>0,s=this._isGroupFullySelected(t),i=this._isGroupPartial(t);return c`
      <div
        class="group-header ${s||i?"selected":""}"
        @click=${()=>this._toggleExpand(t.key)}
      >
        <svg class="group-chevron ${e?"expanded":""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"/>
        </svg>
        <ap-icon name=${t.icon} size="16"></ap-icon>
        <span class="group-label">${this.t(t.labelKey,t.label)}</span>
        <ap-checkbox
          ?checked=${s}
          ?indeterminate=${i}
          @click=${a=>a.stopPropagation()}
          @ap-toggle=${()=>this._toggleGroup(t)}
        ></ap-checkbox>
      </div>
      ${e?c`
          <div class="extensions">
            ${t.extensions.map(a=>c`
              <div
                class="ext-row"
                @click=${()=>this._toggleExt(a.value,t)}
              >
                <ap-checkbox
                  ?checked=${this._isExtSelected(a.value,t.key)}
                  @click=${r=>r.stopPropagation()}
                  @ap-toggle=${()=>this._toggleExt(a.value,t)}
                ></ap-checkbox>
                <span class="ext-label">${a.label}</span>
              </div>
            `)}
          </div>
        `:v}
    `}_renderFallback(){return c`
      <div class="options">
        <span class="section-label">${this.t("formats","Formats")}</span>
        ${si.map(t=>c`
            <div
              class="option ${this.selected.includes(t.value)?"selected":""}"
              @click=${()=>this._toggleCategory(t.value)}
            >
              <ap-checkbox ?checked=${this.selected.includes(t.value)}></ap-checkbox>
              <ap-icon name=${t.icon} size="16"></ap-icon>
              <span class="option-label">${t.label}</span>
            </div>
          `)}
      </div>
    `}};dt.styles=I`
    :host {
      display: block;
    }

    .header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
    }

    .section-label {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      cursor: default;
    }

    .clear-btn {
      background: none;
      border: none;
      font-size: 0.75rem;
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      cursor: pointer;
      padding: 2px 4px;
      border-radius: var(--ap-radius-sm, 6px);
    }
    .clear-btn:hover {
      text-decoration: underline;
    }

    .search-input {
      width: 100%;
      box-sizing: border-box;
      padding: 6px 10px;
      margin-bottom: 8px;
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-background, oklch(1 0 0));
      outline: none;
    }
    .search-input:focus {
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .search-input::placeholder {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }

    .groups {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .group-header {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
      user-select: none;
    }
    .group-header:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    .group-chevron {
      flex-shrink: 0;
      width: 14px;
      height: 14px;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      transition: transform 150ms;
    }
    .group-chevron.expanded {
      transform: rotate(90deg);
    }

    ap-icon {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      flex-shrink: 0;
    }
    .group-header.selected ap-icon {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }

    .group-label {
      flex: 1;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }

    .extensions {
      display: flex;
      flex-direction: column;
      gap: 1px;
      padding-left: 22px;
    }

    .ext-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 4px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }
    .ext-row:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    .ext-label {
      flex: 1;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }

    /* Fallback flat list (no API data) */
    .options {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .option {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 6px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }
    .option:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .option-label {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .option.selected ap-icon {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }

    .no-results {
      padding: 12px;
      text-align: center;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
  `;Zt([f({type:Array})],dt.prototype,"selected",2);Zt([f({type:Array})],dt.prototype,"fileTypes",2);Zt([f({attribute:!1})],dt.prototype,"t",2);Zt([w()],dt.prototype,"_search",2);Zt([w()],dt.prototype,"_expanded",2);dt=Zt([R("ap-filter-type")],dt);const st=I`
  :host {
    display: block;
  }

  .filter-content {
    position: relative;
    padding: 0;
  }

  /* ── Clear all button ── */
  .clear-btn {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    padding: 0;
    border: none;
    background: none;
    font-size: var(--ap-font-size-sm, 0.875rem);
    font-family: inherit;
    color: var(--ap-primary, oklch(0.578 0.198 268.129));
    cursor: pointer;
    opacity: 0.9;
  }
  .clear-btn:hover:not(:disabled) {
    opacity: 1;
    text-decoration: underline;
  }
  .clear-btn:disabled {
    opacity: 0.4;
    cursor: default;
  }

  /* ── Section label ── */
  .section-label {
    display: block;
    font-size: var(--ap-font-size-sm, 0.875rem);
    font-weight: 400;
    color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
    margin-bottom: 8px;
    cursor: default;
  }

  /* ── Section header (label + clear-btn row) ── */
  .section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .section-header .section-label {
    margin-bottom: 0;
  }
  .section-header .clear-btn {
    position: static;
  }

  /* ── Section spacing ── */
  .filter-section {
    position: relative;
    margin-bottom: 20px;
  }
  .filter-section:last-child {
    margin-bottom: 0;
  }

  /* ── Separator ── */
  .separator {
    height: 1px;
    background: var(--ap-border, oklch(92.86% 0.009 247.92));
    margin: 16px 0;
  }

  /* ── Info alert ── */
  .info-alert {
    display: flex;
    gap: 8px;
    padding: 10px 12px;
    background: oklch(0.97 0.01 245);
    border: 1px solid oklch(0.92 0.015 245);
    border-radius: var(--ap-radius-sm, 6px);
    font-size: 0.8125rem;
    color: var(--ap-info-foreground, oklch(0.391 0.091 241.289));
    line-height: 1.4;
    margin-top: 16px;
  }
  .info-alert ap-icon {
    flex-shrink: 0;
    margin-top: 1px;
    color: var(--ap-info, oklch(0.632 0.161 245.564));
  }

  /* ── Text/Number inputs ── */
  .filter-input {
    box-sizing: border-box;
    width: 100%;
    height: 36px;
    padding: 0 10px;
    border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
    border-radius: var(--ap-radius-sm, 6px);
    font-size: var(--ap-font-size-sm, 0.875rem);
    font-family: inherit;
    color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    background: var(--ap-background, oklch(1 0 0));
    outline: none;
    transition: border-color 150ms;
  }
  .filter-input:focus {
    border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
  }
  .filter-input:disabled {
    opacity: 0.5;
    cursor: default;
  }
  .filter-input::placeholder {
    color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    font-weight: 400;
  }

  /* ── Date input: Lucide calendar icon ── */
  .filter-input[type="date"]::-webkit-calendar-picker-indicator {
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .filter-input[type="date"] {
    position: relative;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8 2v4'/%3E%3Cpath d='M16 2v4'/%3E%3Crect width='18' height='18' x='3' y='4' rx='2'/%3E%3Cpath d='M3 10h18'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 16px 16px;
    padding-right: 32px;
  }

  textarea.filter-input {
    min-height: 60px;
    resize: vertical;
  }

  /* ── Input label ── */
  .input-label {
    display: block;
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
    margin-bottom: 4px;
  }
  .input-label[aria-disabled="true"] {
    opacity: 0.5;
  }

  /* ── Grid layouts ── */
  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  .grid-3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
  }

  /* ── Removable chip ── */
  .chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    border-radius: 9999px;
    font-size: 0.8125rem;
    color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    background: var(--ap-background, oklch(1 0 0));
    max-width: 200px;
  }
  .chip-label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .chip-remove {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    border: none;
    background: none;
    color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    cursor: pointer;
    padding: 0;
    flex-shrink: 0;
  }
  .chip-remove:hover {
    color: var(--ap-foreground, oklch(0.37 0.022 248.413));
  }
  .chips-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  /* ── Error text ── */
  .error-text {
    font-size: 0.8125rem;
    color: var(--ap-destructive, oklch(0.577 0.215 27.325));
    margin-top: 4px;
  }

  /* ── Search input (flush with popover edges, like tags) ── */
  .search-wrapper {
    position: sticky;
    top: -10px;
    z-index: 2;
    background: var(--ap-card, oklch(1 0 0));
    margin: -10px -8px 10px;
  }
  .search-wrapper .search-icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    pointer-events: none;
  }
  .search-input {
    width: 100%;
    padding: 8px 32px 8px 32px;
    border: none;
    border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    border-radius: 0;
    font-size: var(--ap-font-size-sm, 0.875rem);
    font-family: inherit;
    color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    background: transparent;
    outline: none;
  }
  .search-input::placeholder {
    color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    font-weight: 400;
  }
  .search-clear {
    position: absolute;
    right: 6px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: none;
    background: none;
    color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    cursor: pointer;
    padding: 0;
  }
  .search-clear:hover {
    color: var(--ap-foreground, oklch(0.37 0.022 248.413));
  }

  /* ── Options list (checkbox-based) ── */
  .options-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .options-list.short {
    max-height: none;
    overflow-y: visible;
  }
  .no-results {
    padding: 12px;
    text-align: center;
    font-size: var(--ap-font-size-sm, 0.875rem);
    color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
  }
`;var tc=Object.defineProperty,sc=Object.getOwnPropertyDescriptor,ft=(t,e,s,i)=>{for(var a=i>1?void 0:i?sc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&tc(e,s,a),a};function Ti(t){return t.toISOString().split("T")[0]}let Be=class extends O{constructor(){super(...arguments),this.filterKey=C.DATE,this.t=(t,e)=>typeof e=="string"?e:t,this.field="created",this.kind=null,this.preset="",this.from="",this.to=""}get _isLicenseExpiry(){return this.filterKey===C.LICENSE_EXPIRY}get _rangeOptions(){return(this._isLicenseExpiry?Ar:Gi).map(e=>({...e,label:this.t(e.labelKey,e.label)}))}get _fieldOptions(){return Cr.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _todayStr(){return Ti(new Date)}get _hasFilter(){return!!(this.kind||this.preset||this.from||this.to)}_kindFromValue(t){return["before","after","between","specific"].includes(t)?t:"preset"}_selectField(t){this.field=t,this._dispatchChange()}_selectPreset(t){if(!t){this._clearAll();return}const e=this._kindFromValue(t);if(this.kind=e,this.preset=t,["before","after","between","specific"].includes(t)){this.from="",this.to="",this.requestUpdate();return}const s=Qi(t);s&&(this.from=s.from,this.to=s.to??""),this._dispatchChange()}_clearAll(){this.field="created",this.kind=null,this.preset="",this.from="",this.to="",this._dispatchChange()}_dispatchChange(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:{field:this.field,kind:this.kind,preset:this.preset,from:this.from,to:this.to}},bubbles:!0,composed:!0}))}_handleDateInput(t,e){const s=e.target.value,i=s?new Date(s+"T00:00:00").toISOString():"";if(t==="from"?this.from=i:this.to=i,this.preset==="specific"&&t==="from"&&i){const a=new Date(s+"T23:59:59");this.to=a.toISOString()}this.preset==="after"&&t==="from"&&i&&(this.to=new Date().toISOString()),this.preset==="before"&&t==="to"&&i&&(this.from=new Date(0).toISOString()),this._dispatchChange()}_renderDateTypeSection(){return this._isLicenseExpiry?v:c`
      <div class="filter-section">
        <span class="section-label">${this.t("dateType","Date type")}</span>
        <ap-radio-group
          .options=${this._fieldOptions}
          .value=${this.field}
          @ap-change=${t=>this._selectField(t.detail.value)}
        ></ap-radio-group>
      </div>
    `}_renderRangeSection(){return c`
      <div class="filter-section">
        <span class="section-label">${this.t("dateRange","Range")}</span>
        <ap-radio-group
          clearable
          columns="2"
          .options=${this._rangeOptions}
          .value=${this.preset}
          @ap-change=${t=>this._selectPreset(t.detail.value)}
        ></ap-radio-group>
      </div>
    `}_renderDateInputs(){const t=this.preset;if(!["before","after","between","specific"].includes(t))return v;const e=this.from?Ti(new Date(this.from)):"",s=this.to?Ti(new Date(this.to)):"",i=this._todayStr;return t==="specific"?c`
        <div class="filter-section date-inputs">
          <div>
            <span class="input-label">${this.t("date","Date")}</span>
            <input
              type="date"
              class="filter-input"
              max=${i}
              .value=${e}
              @change=${a=>this._handleDateInput("from",a)}
            />
          </div>
        </div>
      `:t==="before"?c`
        <div class="filter-section date-inputs">
          <div>
            <span class="input-label">${this.t("endDate","End date")}</span>
            <input
              type="date"
              class="filter-input"
              max=${i}
              .value=${s}
              @change=${a=>this._handleDateInput("to",a)}
            />
          </div>
        </div>
      `:t==="after"?c`
        <div class="filter-section date-inputs">
          <div>
            <span class="input-label">${this.t("startDate","Start date")}</span>
            <input
              type="date"
              class="filter-input"
              max=${i}
              .value=${e}
              @change=${a=>this._handleDateInput("from",a)}
            />
          </div>
        </div>
      `:c`
      <div class="filter-section date-inputs">
        <div class="grid-2">
          <div>
            <span class="input-label">${this.t("startDate","Start date")}</span>
            <input
              type="date"
              class="filter-input"
              max=${s||i}
              .value=${e}
              @change=${a=>this._handleDateInput("from",a)}
            />
          </div>
          <div>
            <span class="input-label">${this.t("endDate","End date")}</span>
            <input
              type="date"
              class="filter-input"
              min=${e}
              max=${i}
              .value=${s}
              @change=${a=>this._handleDateInput("to",a)}
            />
          </div>
        </div>
      </div>
    `}render(){return c`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!this._hasFilter}
          @click=${()=>this._clearAll()}
        >${this.t("clearAll","Clear all")}</button>
        ${this._renderDateTypeSection()}
        ${this._renderRangeSection()}
        ${this._renderDateInputs()}
      </div>
    `}};Be.styles=[st,I`
    .date-inputs {
      margin-top: 4px;
    }
  `];ft([f()],Be.prototype,"filterKey",2);ft([f({attribute:!1})],Be.prototype,"t",2);ft([f()],Be.prototype,"field",2);ft([f()],Be.prototype,"kind",2);ft([f()],Be.prototype,"preset",2);ft([f()],Be.prototype,"from",2);ft([f()],Be.prototype,"to",2);Be=ft([R("ap-filter-date")],Be);var ic=Object.defineProperty,ac=Object.getOwnPropertyDescriptor,Dt=(t,e,s,i)=>{for(var a=i>1?void 0:i?ac(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&ic(e,s,a),a};let Je=class extends O{constructor(){super(...arguments),this.tags=[],this.selected=[],this.filterKey=C.TAGS,this.t=(t,e)=>typeof e=="string"?e:t,this._search=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var t;return(t=this._searchInput)==null?void 0:t.focus()})}get _suggestedTags(){return this.tags.filter(t=>t.primary)}get _otherTags(){return this.tags.filter(t=>!t.primary)}get _atLimit(){return this.selected.length>=ki}get _isSearching(){return this._search.trim().length>0}_toggle(t){const e=this.selected.includes(t);if(!e&&this._atLimit)return;const s=e?this.selected.filter(i=>i!==t):[...this.selected,t];this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:s,operator:K.IS},bubbles:!0,composed:!0}))}_remove(t){const e=this.selected.filter(s=>s!==t);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:e,operator:K.IS},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:[],operator:K.IS},bubbles:!0,composed:!0}))}_onSearchInput(t){this._search=t.target.value}_clearSearch(){this._search=""}_getTagBySid(t){return this.tags.find(e=>e.sid===t)}_renderTagItem(t){const e=this.selected.includes(t.sid),s=!e&&this._atLimit;return c`
      <div
        class="tag-item ${s?"disabled":""}"
        title=${s?`You can select up to ${ki} tags`:v}
        @click=${()=>!s&&this._toggle(t.sid)}
      >
        <ap-checkbox ?checked=${e}></ap-checkbox>
        <span class="tag-name">${t.label}</span>
      </div>
    `}render(){const t=this._search.toLowerCase().trim();return c`
      <div class="filter-content">
        <div class="filter-header">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="tag-search"
            type="text"
            .placeholder=${this.t("searchTagsPlaceholder","Search tags")}
            .value=${this._search}
            @input=${this._onSearchInput}
          />
          ${this._search?c`
                <button class="search-clear" @click=${this._clearSearch}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:v}
        </div>

        <!-- Selected chips (when not searching) -->
        ${!this._isSearching&&this.selected.length>0?c`
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">Selected</span>
                  <button
                    class="clear-btn"
                    @click=${this._clearAll}
                  >Clear all</button>
                </div>
                <div class="chips-wrap">
                  ${this.selected.map(e=>{const s=this._getTagBySid(e);return s?c`
                      <div class="chip">
                        <span class="chip-label">${s.label}</span>
                        <button class="chip-remove" @click=${()=>this._remove(e)}>
                          <ap-icon name="close" .size=${10}></ap-icon>
                        </button>
                      </div>
                    `:v})}
                </div>
              </div>
            `:v}

        ${this._isSearching?this._renderSearchResults(t):this._renderSections()}

        <!-- Limit warning -->
        ${this._atLimit?c`
              <div class="info-alert">
                <ap-icon name="info" .size=${14}></ap-icon>
                <span>You can select up to ${ki} tags.</span>
              </div>
            `:v}
      </div>
    `}_renderSearchResults(t){const e=a=>a.toLowerCase().includes(t),s=this._suggestedTags.filter(a=>e(a.label)).slice(0,50),i=this._otherTags.filter(a=>e(a.label)).slice(0,50);return s.length===0&&i.length===0?c`<div class="no-results">${this.t("noTagsFound","No tags found")}</div>`:c`
      ${s.length>0?c`
            <div class="filter-section">
              <div class="section-header">
                <span class="section-label">${this.t("suggestedTags","Suggested tags")}</span>
                <button
                  class="clear-btn"
                  ?disabled=${this.selected.length===0}
                  @click=${this._clearAll}
                >${this.t("clearAll","Clear all")}</button>
              </div>
              <div class="options-list short">
                ${s.map(a=>this._renderTagItem(a))}
              </div>
            </div>
          `:v}

      ${i.length>0?c`
            <div class="filter-section">
              <div class="section-header">
                ${s.length===0?c`<span class="section-label">${this.t("allTags","All tags")}</span>
                    <button
                      class="clear-btn"
                      ?disabled=${this.selected.length===0}
                      @click=${this._clearAll}
                    >${this.t("clearAll","Clear all")}</button>`:c`<span class="section-label">${this.t("allTags","All tags")}</span>`}
              </div>
              <div class="options-list">
                ${i.map(a=>this._renderTagItem(a))}
              </div>
            </div>
          `:v}
    `}_renderSections(){if(this.tags.length===0)return c`<div class="no-results">${this.t("noTagsAvailable","No tags available")}</div>`;const t=this._suggestedTags.filter(e=>!this.selected.includes(e.sid));return c`
      <div class="filter-section">
        ${t.length>0?c`<span class="section-label">${this.t("suggestedTags","Suggested tags")}</span>`:v}
        ${t.length>0?c`
              <div class="options-list short">
                ${t.map(e=>this._renderTagItem(e))}
              </div>
            `:v}
      </div>

      ${t.length>0?c`<div class="separator"></div>`:v}

      <div class="hint-message">${this.t("findMoreTagsBySearch","Find more tags by using search")}</div>
    `}};Je.styles=[me,st,I`
    .tag-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 6px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }

    .tag-item:hover:not(.disabled) {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    .tag-item.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .tag-item.disabled:hover {
      background: none;
    }

    .tag-name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .hint-message {
      font-size: 0.8125rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      padding: 8px 0;
    }

    /* Sticky search within popover scroll */
    .filter-header {
      position: sticky;
      top: -10px;
      z-index: 1;
      background: var(--ap-card, oklch(1 0 0));
      margin: -10px -8px 10px;
    }

    .filter-header .search-icon {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      pointer-events: none;
    }

    .tag-search {
      width: 100%;
      padding: 8px 32px 8px 32px;
      border: none;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: transparent;
      outline: none;
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }

    .tag-search::placeholder {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      font-weight: 400;
    }

    .search-clear {
      top: 50%;
      transform: translateY(-50%);
      right: 8px;
    }

    .options-list {
      max-height: none;
      overflow-y: visible;
    }
  `];Dt([f({type:Array})],Je.prototype,"tags",2);Dt([f({type:Array})],Je.prototype,"selected",2);Dt([f()],Je.prototype,"filterKey",2);Dt([f({attribute:!1})],Je.prototype,"t",2);Dt([ut(".tag-search")],Je.prototype,"_searchInput",2);Dt([w()],Je.prototype,"_search",2);Je=Dt([R("ap-filter-tags")],Je);var rc=Object.defineProperty,oc=Object.getOwnPropertyDescriptor,es=(t,e,s,i)=>{for(var a=i>1?void 0:i?oc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&rc(e,s,a),a};let pt=class extends O{constructor(){super(...arguments),this.labels=[],this.selected=[],this.t=(t,e)=>typeof e=="string"?e:t,this._search=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var t;return(t=this._searchInput)==null?void 0:t.focus()})}get _atLimit(){return this.selected.length>=cs}get _isSearching(){return this._search.trim().length>0}_toggle(t){const e=this.selected.includes(t);if(!e&&this._atLimit)return;const s=e?this.selected.filter(i=>i!==t):[...this.selected,t];this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:C.LABELS,values:s,operator:K.IS},bubbles:!0,composed:!0}))}_remove(t){const e=this.selected.filter(s=>s!==t);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:C.LABELS,values:e,operator:K.IS},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:C.LABELS,values:[],operator:K.IS},bubbles:!0,composed:!0}))}_onSearchInput(t){this._search=t.target.value}_clearSearch(){this._search=""}_getLabelBySid(t){return this.labels.find(e=>e.sid===t)}_renderLabelItem(t){const e=this.selected.includes(t.sid),s=!e&&this._atLimit;return c`
      <div
        class="label-item ${s?"disabled":""}"
        title=${s?this.t("labelsLimitTitle",`You can select up to ${cs} labels`,{count:cs}):v}
        @click=${()=>!s&&this._toggle(t.sid)}
      >
        <ap-checkbox ?checked=${e}></ap-checkbox>
        <span class="label-icon" ${B({color:t.color})}>
          <ap-icon name="tag" .size=${16}></ap-icon>
        </span>
        <span class="label-name">${t.name}</span>
        <span class="count">${t.assets_count}</span>
      </div>
    `}render(){const t=this._search.toLowerCase().trim(),e=this.labels.filter(s=>s.name.toLowerCase().includes(t));return c`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchLabelsPlaceholder","Search labels")}
            .value=${this._search}
            @input=${this._onSearchInput}
          />
          ${this._search?c`
                <button class="search-clear" @click=${this._clearSearch}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:v}
        </div>

        <!-- Selected chips (when not searching) -->
        ${!this._isSearching&&this.selected.length>0?c`
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("selected","Selected")}</span>
                  <button
                    class="clear-btn"
                    @click=${this._clearAll}
                  >${this.t("clearAll","Clear all")}</button>
                </div>
                <div class="chips-wrap">
                  ${this.selected.map(s=>{const i=this._getLabelBySid(s);return i?c`
                      <div class="chip">
                        <span class="chip-icon" ${B({color:i.color})}>
                          <ap-icon name="tag" .size=${12}></ap-icon>
                        </span>
                        <span class="chip-label">${i.name}</span>
                        <button class="chip-remove" @click=${()=>this._remove(s)}>
                          <ap-icon name="close" .size=${10}></ap-icon>
                        </button>
                      </div>
                    `:v})}
                </div>
              </div>
            `:v}

        <!-- Labels list -->
        <div class="filter-section">
          <div class="section-header">
            <span class="section-label">${this.t("allLabels","All labels")}</span>
            <button
              class="clear-btn"
              ?disabled=${this.selected.length===0}
              @click=${this._clearAll}
            >${this.t("clearAll","Clear all")}</button>
          </div>
          <div class="options-list">
            ${e.length===0?c`<div class="no-results">${this.t("noLabelsFound","No labels found")}</div>`:e.map(s=>this._renderLabelItem(s))}
          </div>
        </div>

        <!-- Limit warning -->
        ${this._atLimit?c`
              <div class="info-alert">
                <ap-icon name="info" .size=${14}></ap-icon>
                <span>${this.t("labelsLimitAlert",`You can select up to ${cs} labels.`,{count:cs})}</span>
              </div>
            `:v}
      </div>
    `}};pt.styles=[st,I`
    .label-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 6px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }

    .label-item:hover:not(.disabled) {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    .label-item.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .label-item.disabled:hover {
      background: none;
    }

    .label-icon {
      flex-shrink: 0;
      line-height: 0;
    }

    .label-name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .count {
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      flex-shrink: 0;
    }

    .chip-icon {
      flex-shrink: 0;
      line-height: 0;
    }
  `];es([f({type:Array})],pt.prototype,"labels",2);es([f({type:Array})],pt.prototype,"selected",2);es([f({attribute:!1})],pt.prototype,"t",2);es([ut(".search-input")],pt.prototype,"_searchInput",2);es([w()],pt.prototype,"_search",2);pt=es([R("ap-filter-labels")],pt);var nc=Object.defineProperty,lc=Object.getOwnPropertyDescriptor,Mt=(t,e,s,i)=>{for(var a=i>1?void 0:i?lc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&nc(e,s,a),a};const Pi=3,ji=/^#[0-9A-Fa-f]{6}$/;function cc(t){const e=t.trim().split(/\s+/);return e.length<1||!ji.test(e[0])?null:{hex:e[0],tolerance:e[1]||Hs,coverage:e[3]||qs}}let Ze=class extends O{constructor(){super(...arguments),this.values=[],this.t=(t,e)=>typeof e=="string"?e:t,this._colors=[],this._advanced=!1,this._showPalette=!1,this._initialized=!1}get _hasSelection(){return this._colors.length>0}get _selectedHexes(){return new Set(this._colors.map(t=>t.hex))}willUpdate(t){if(t.has("values")){const e=[];for(const s of this.values){const i=cc(s);i&&e.push(i)}(!this._initialized||this.values.length===0&&this._colors.length>0)&&(this._colors=e,e.length>0&&(this._advanced=e.some(s=>s.tolerance!==Hs||s.coverage!==qs)),this._initialized=!0)}}_selectColor(t){if(!ji.test(t))return;const e=this._colors.findIndex(s=>s.hex.toLowerCase()===t.toLowerCase());if(e>=0){this._removeColor(e);return}this._colors.length>=Pi||(this._colors=[...this._colors,{hex:t,tolerance:Hs,coverage:qs}],this._showPalette=!1,this._dispatchChange())}_removeColor(t){this._colors=this._colors.filter((e,s)=>s!==t),this._dispatchChange()}_clearAll(){this._colors=[],this._showPalette=!1,this._dispatchChange()}_toggleAdvanced(){this._advanced=!this._advanced,this._colors.length>0&&this._dispatchChange()}_handleHexInput(t,e){let i=e.target.value.trim();if(i.startsWith("#")||(i="#"+i),!ji.test(i)||this._colors.some((o,n)=>n!==t&&o.hex.toLowerCase()===i.toLowerCase()))return;const r=[...this._colors];r[t]={...r[t],hex:i},this._colors=r,this._dispatchChange()}_handleToleranceChange(t,e){const s=[...this._colors];s[t]={...s[t],tolerance:e.detail.value},this._colors=s,this._dispatchChange()}_handleCoverageInput(t,e){const s=e.target.value,i=parseInt(s,10);if(!isNaN(i)&&i>=1&&i<=100){const a=[...this._colors];a[t]={...a[t],coverage:String(i)},this._colors=a,this._dispatchChange()}}_showAddPalette(){this._showPalette=!0}_dispatchChange(){if(this._colors.length===0){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"color",values:"",operator:":"},bubbles:!0,composed:!0}));return}const t=this._colors.map(e=>{const s=this._advanced?e.tolerance:Hs,i=this._advanced?e.coverage:qs;return`${e.hex} ${s} ${s} ${i}`});this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"color",values:t,operator:":"},bubbles:!0,composed:!0}))}_renderPalette(){const t=this._selectedHexes,e=this._colors.length>=Pi;return c`
      <div class="palette">
        ${Hn.map(s=>{const i=t.has(s),a=e&&!i;return c`
              <button
                class="swatch ${i?"selected":""} ${a?"disabled":""}"
                ${B({background:s,...s==="#ffffff"?{border:"1px solid #e4e4e7"}:{}})}
                @click=${()=>!a&&this._selectColor(s)}
                title=${s}
                ?disabled=${a}
              ></button>
            `})}
      </div>
    `}_renderColorEntry(t,e){return this._advanced?c`
      <div class="color-row advanced">
        <div class="adv-field">
          <span class="adv-field-label">${this.t("colorLabel","Color")}</span>
          <div class="color-row">
            <div class="color-swatch-small" ${B({background:t.hex})}></div>
            <input
              class="color-hex-input"
              type="text"
              .value=${t.hex}
              maxlength="7"
              @change=${s=>this._handleHexInput(e,s)}
            />
          </div>
        </div>
        <div class="adv-field">
          <span class="adv-field-label">${this.t("difference","Difference")}</span>
          <ap-dropdown
            .value=${t.tolerance}
            .options=${Gn.map(s=>({...s,label:this.t(s.labelKey,s.label)}))}
            @ap-change=${s=>this._handleToleranceChange(e,s)}
          ></ap-dropdown>
        </div>
        <div class="adv-field">
          <span class="adv-field-label">${this.t("coverage","Coverage")}</span>
          <div class="coverage-wrap">
            <span class="coverage-unit">%</span>
            <input
              type="number"
              class="coverage-input"
              min="1"
              max="100"
              .value=${t.coverage}
              @change=${s=>this._handleCoverageInput(e,s)}
            />
          </div>
        </div>
        <button class="remove-btn" title=${this.t("removeColor","Remove color")} @click=${()=>this._removeColor(e)}>
          <ap-icon name="close" .size=${14}></ap-icon>
        </button>
      </div>
    `:c`
        <div class="color-row">
          <div class="color-swatch-small" ${B({background:t.hex})}></div>
          <input
            class="color-hex-input"
            type="text"
            .value=${t.hex}
            maxlength="7"
            @change=${s=>this._handleHexInput(e,s)}
          />
          <button class="remove-btn" title=${this.t("removeColor","Remove color")} @click=${()=>this._removeColor(e)}>
            <ap-icon name="close" .size=${14}></ap-icon>
          </button>
        </div>
      `}render(){const t=this._colors.length===0||this._showPalette,e=this._colors.length<Pi&&!this._showPalette;return c`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!this._hasSelection}
          @click=${this._clearAll}
        >${this.t("clearAll","Clear all")}</button>

        <span class="section-label">${this.t("colorLabel","Color")}</span>

        <div class="advanced-row">
          <label class="advanced-toggle" @click=${this._toggleAdvanced}>
            <span class="toggle-track ${this._advanced?"on":""}">
              <span class="toggle-thumb"></span>
            </span>
            ${this.t("advanced","Advanced")}
          </label>
        </div>

        <div class="filter-section">
          ${t?this._renderPalette():v}
        </div>

        ${this._colors.length>0?c`
          <div class="filter-section">
            <div class="selected-colors">
              ${this._colors.map((s,i)=>this._renderColorEntry(s,i))}
            </div>
          </div>
        `:v}

        ${e?c`
          <div class="filter-section">
            <button class="add-color-btn" @click=${this._showAddPalette}>
              <ap-icon name="plus" .size=${14}></ap-icon>
              ${this.t("addColor","Add color")}
            </button>
          </div>
        `:v}

        <div class="info-alert">
          <ap-icon name="info" .size=${14}></ap-icon>
          <span>${this.t("requiresImageProcessing","Requires image processing to be enabled.")}</span>
        </div>
      </div>
    `}};Ze.styles=[me,st,I`
    /* ── Palette ── */
    .palette {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      gap: 12px;
      justify-items: center;
    }

    .swatch {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 2px solid transparent;
      cursor: pointer;
      transition: transform 100ms;
      padding: 0;
    }

    .swatch:hover {
      transform: scale(1.15);
    }

    .swatch.selected {
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
      box-shadow: 0 0 0 2px var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
    }

    .swatch.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .swatch.disabled:hover {
      transform: none;
    }

    /* ── Advanced toggle (own row, pill-style) ── */
    .advanced-row {
      display: flex;
      align-items: center;
      margin-bottom: 14px;
    }

    .advanced-toggle {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      cursor: pointer;
      user-select: none;
    }

    .toggle-track {
      position: relative;
      width: 32px;
      height: 18px;
      border-radius: 9px;
      background: var(--ap-border, oklch(92.86% 0.009 247.92));
      transition: background 150ms;
      flex-shrink: 0;
    }

    .toggle-track.on {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
    }

    .toggle-thumb {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #fff;
      transition: transform 150ms;
      box-shadow: 0 1px 2px rgb(0 0 0 / 0.15);
    }

    .toggle-track.on .toggle-thumb {
      transform: translateX(14px);
    }

    /* ── Selected colors list ── */
    .selected-colors {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    /* ── Color entry row (both modes) ── */
    .color-row {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .color-swatch-small {
      width: 36px;
      height: 36px;
      border-radius: var(--ap-radius-sm, 6px);
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      flex-shrink: 0;
    }

    .color-hex-input {
      height: 36px;
      padding: 0 8px;
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      font-family: var(--ap-font-family, system-ui, sans-serif);
      background: var(--ap-background, oklch(1 0 0));
      min-width: 0;
    }

    .color-hex-input:focus {
      outline: none;
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }

    /* Normal mode: hex input takes remaining space */
    .color-row:not(.advanced) .color-hex-input {
      flex: 1;
    }

    .remove-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      border: none;
      background: none;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      cursor: pointer;
      padding: 0;
      flex-shrink: 0;
      border-radius: 4px;
    }

    .remove-btn:hover {
      color: var(--ap-destructive, oklch(0.577 0.215 27.325));
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    /* ── Advanced layout: full-width grid ── */
    .color-row.advanced {
      display: grid;
      grid-template-columns: 1.4fr 1fr 1fr auto;
      align-items: end;
      gap: 8px;
    }

    .color-row.advanced .remove-btn {
      align-self: end;
      margin-bottom: 8px;
    }

    .adv-field {
      display: flex;
      flex-direction: column;
      gap: 6px;
      min-width: 0;
    }

    .adv-field ap-dropdown {
      display: block;
      width: 100%;
    }

    .adv-field-label {
      font-size: 0.6875rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      line-height: 1;
    }

    .coverage-wrap {
      display: flex;
      align-items: center;
      height: 36px;
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius-sm, 6px);
      background: var(--ap-background, oklch(1 0 0));
      overflow: hidden;
    }

    .coverage-wrap:focus-within {
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }

    .coverage-unit {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      padding-left: 8px;
      flex-shrink: 0;
      line-height: 36px;
    }

    .coverage-input {
      flex: 1;
      min-width: 0;
      height: 100%;
      padding: 0 6px 0 2px;
      border: none;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      font-family: var(--ap-font-family, system-ui, sans-serif);
      background: transparent;
      outline: none;
    }

    .coverage-input::-webkit-inner-spin-button,
    .coverage-input::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    .coverage-input {
      -moz-appearance: textfield;
    }

    /* ── Add color button ── */
    .add-color-btn {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 6px 0;
      border: none;
      background: none;
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: inherit;
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      cursor: pointer;
      transition: opacity 150ms;
    }

    .add-color-btn:hover {
      opacity: 0.8;
    }
  `];Mt([f({type:Array})],Ze.prototype,"values",2);Mt([f({attribute:!1})],Ze.prototype,"t",2);Mt([w()],Ze.prototype,"_colors",2);Mt([w()],Ze.prototype,"_advanced",2);Mt([w()],Ze.prototype,"_showPalette",2);Mt([w()],Ze.prototype,"_initialized",2);Ze=Mt([R("ap-filter-color")],Ze);var dc=Object.defineProperty,pc=Object.getOwnPropertyDescriptor,gt=(t,e,s,i)=>{for(var a=i>1?void 0:i?pc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&dc(e,s,a),a};const hc={KB:1/1e3,MB:1,GB:1e3},uc=[{value:"MB",label:"MB"},{value:"GB",label:"GB"}];let Ve=class extends O{constructor(){super(...arguments),this.min=0,this.max=0,this.t=(t,e)=>typeof e=="string"?e:t,this._minVal="",this._maxVal="",this._unit="MB",this._initialized=!1}willUpdate(t){!this._initialized&&(t.has("min")||t.has("max"))&&(this._initialized=!0,this.min>0&&(this._minVal=String(this.min)),this.max>0&&(this._maxVal=String(this.max)))}get _hasFilter(){return this._minVal!==""||this._maxVal!==""}_clearAll(){this._minVal="",this._maxVal="",this._emitChange()}_setUnit(t){this._unit=t.detail.value,this._emitChange()}_emitChange(){const t=hc[this._unit],e=this._minVal!==""?parseFloat((parseFloat(this._minVal)*t).toFixed(2)).toString():null,s=this._maxVal!==""?parseFloat((parseFloat(this._maxVal)*t).toFixed(2)).toString():null;let i;if(e!==null&&s!==null)i=`${e}..${s}`;else if(e!==null)i=`${e}..`;else if(s!==null)i=`..${s}`;else{this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:C.SIZE,values:[],operator:K.RANGE},bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:C.SIZE,values:[i],operator:K.RANGE},bubbles:!0,composed:!0}))}_onMinInput(t){this._minVal=t.target.value,this._emitChange()}_onMaxInput(t){this._maxVal=t.target.value,this._emitChange()}render(){return c`
      <div class="filter-content">
        <span class="section-label">${this.t("sizeLabel","Size")}</span>
        <button
          class="clear-btn"
          ?disabled=${!this._hasFilter}
          @click=${this._clearAll}
        >${this.t("clearAll","Clear all")}</button>

        <div class="size-grid">
          <div>
            <span class="input-label">${this.t("sizeFrom","From")}</span>
            <input
              class="filter-input"
              type="number"
              placeholder="0"
              min="0"
              step="0.1"
              .value=${this._minVal}
              @change=${this._onMinInput}
            />
          </div>
          <div>
            <span class="input-label">${this.t("sizeTo","To")}</span>
            <input
              class="filter-input"
              type="number"
              placeholder="Any"
              min="0"
              step="0.1"
              .value=${this._maxVal}
              @change=${this._onMaxInput}
            />
          </div>
          <div>
            <span class="input-label">${this.t("sizeUnit","Unit")}</span>
            <ap-dropdown
              .options=${uc}
              .value=${this._unit}
              @ap-change=${this._setUnit}
            ></ap-dropdown>
          </div>
        </div>
      </div>
    `}};Ve.styles=[st,I`
      /* Hide number input spinners */
      .filter-input[type='number']::-webkit-inner-spin-button,
      .filter-input[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      .filter-input[type='number'] {
        -moz-appearance: textfield;
      }
      .size-grid {
        display: grid;
        grid-template-columns: 1fr 1fr auto;
        gap: 12px;
      }
      .size-grid ap-dropdown {
        display: block;
        width: 100%;
      }
    `];gt([f({type:Number})],Ve.prototype,"min",2);gt([f({type:Number})],Ve.prototype,"max",2);gt([f({attribute:!1})],Ve.prototype,"t",2);gt([w()],Ve.prototype,"_minVal",2);gt([w()],Ve.prototype,"_maxVal",2);gt([w()],Ve.prototype,"_unit",2);gt([w()],Ve.prototype,"_initialized",2);Ve=gt([R("ap-filter-size")],Ve);var fc=Object.defineProperty,gc=Object.getOwnPropertyDescriptor,Ms=(t,e,s,i)=>{for(var a=i>1?void 0:i?gc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&fc(e,s,a),a};const vc=nt`
  <svg width="20" height="20" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.66666 1.9987C2.29847 1.9987 1.99999 2.29717 1.99999 2.66536L1.99999 13.332C1.99999 13.7002 2.29847 13.9987 2.66666 13.9987L9.33332 13.9987C9.70151 13.9987 9.99999 13.7002 9.99999 13.332L9.99999 2.66536C9.99999 2.29717 9.70151 1.9987 9.33332 1.9987L2.66666 1.9987ZM9.33332 0.665364C10.4379 0.665364 11.3333 1.56079 11.3333 2.66536L11.3333 13.332C11.3333 14.4366 10.4379 15.332 9.33332 15.332L2.66666 15.332C1.56209 15.332 0.666656 14.4366 0.666656 13.332L0.666656 2.66536C0.666656 1.56079 1.56209 0.665364 2.66666 0.665364L9.33332 0.665364Z" fill="#9747FF"/>
    <path d="M5.33332 4.65885C5.33332 4.29066 5.6318 3.99219 5.99999 3.99219C6.36818 3.99219 6.66666 4.29066 6.66666 4.65885L6.66666 4.66536C6.66666 5.03355 6.36818 5.33203 5.99999 5.33203C5.6318 5.33203 5.33332 5.03355 5.33332 4.66536L5.33332 4.65885Z" fill="#9747FF"/>
    <path d="M5.33332 11.3255C5.33332 10.9573 5.6318 10.6589 5.99999 10.6589C6.36818 10.6589 6.66666 10.9573 6.66666 11.3255L6.66666 11.332C6.66666 11.7002 6.36818 11.9987 5.99999 11.9987C5.6318 11.9987 5.33332 11.7002 5.33332 11.332L5.33332 11.3255Z" fill="#9747FF"/>
  </svg>
`,mc=nt`
  <svg width="20" height="20" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2.66797C14 2.29978 13.7015 2.0013 13.3333 2.0013H2.66666C2.29847 2.0013 1.99999 2.29978 1.99999 2.66797V9.33463C1.99999 9.70282 2.29847 10.0013 2.66666 10.0013H13.3333C13.7015 10.0013 14 9.70282 14 9.33463V2.66797ZM15.3333 9.33463C15.3333 10.4392 14.4379 11.3346 13.3333 11.3346H2.66666C1.56209 11.3346 0.666656 10.4392 0.666656 9.33463V2.66797C0.666656 1.5634 1.56209 0.667969 2.66666 0.667969H13.3333C14.4379 0.667969 15.3333 1.5634 15.3333 2.66797V9.33463Z" fill="#65A30D"/>
    <path d="M11.3398 5.33464C11.708 5.33464 12.0065 5.63311 12.0065 6.0013C12.0065 6.36949 11.708 6.66797 11.3398 6.66797H11.3333C10.9651 6.66797 10.6667 6.36949 10.6667 6.0013C10.6667 5.63311 10.9651 5.33464 11.3333 5.33464H11.3398Z" fill="#65A30D"/>
    <path d="M4.67317 5.33464C5.04136 5.33464 5.33983 5.63311 5.33983 6.0013C5.33983 6.36949 5.04136 6.66797 4.67317 6.66797H4.66666C4.29847 6.66797 3.99999 6.36949 3.99999 6.0013C3.99999 5.63311 4.29847 5.33464 4.66666 5.33464H4.67317Z" fill="#65A30D"/>
  </svg>
`,bc=nt`
  <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.3333 2.33203C12.3333 1.96384 12.0349 1.66536 11.6667 1.66536H2.33334C1.96515 1.66536 1.66668 1.96384 1.66668 2.33203V11.6654C1.66668 12.0336 1.96515 12.332 2.33334 12.332H11.6667C12.0349 12.332 12.3333 12.0336 12.3333 11.6654V2.33203ZM13.6667 11.6654C13.6667 12.7699 12.7712 13.6654 11.6667 13.6654H2.33334C1.22877 13.6654 0.333344 12.7699 0.333344 11.6654V2.33203C0.333344 1.22746 1.22877 0.332031 2.33334 0.332031H11.6667C12.7712 0.332031 13.6667 1.22746 13.6667 2.33203V11.6654Z" fill="#6366F1"/>
    <path d="M9.67319 3.66536C10.0414 3.66536 10.3399 3.96384 10.3399 4.33203C10.3399 4.70022 10.0414 4.9987 9.67319 4.9987H9.66668C9.29849 4.9987 9.00001 4.70022 9.00001 4.33203C9.00001 3.96384 9.29849 3.66536 9.66668 3.66536H9.67319Z" fill="#6366F1"/>
    <path d="M4.33985 3.66536C4.70804 3.66536 5.00652 3.96384 5.00652 4.33203C5.00652 4.70022 4.70804 4.9987 4.33985 4.9987H4.33334C3.96515 4.9987 3.66668 4.70022 3.66668 4.33203C3.66668 3.96384 3.96515 3.66536 4.33334 3.66536H4.33985Z" fill="#6366F1"/>
    <path d="M4.33985 8.9987C4.70804 8.9987 5.00652 9.29718 5.00652 9.66537C5.00652 10.0336 4.70804 10.332 4.33985 10.332H4.33334C3.96515 10.332 3.66668 10.0336 3.66668 9.66537C3.66668 9.29718 3.96515 8.9987 4.33334 8.9987H4.33985Z" fill="#6366F1"/>
    <path d="M9.67319 8.9987C10.0414 8.9987 10.3399 9.29718 10.3399 9.66537C10.3399 10.0336 10.0414 10.332 9.67319 10.332H9.66668C9.29849 10.332 9.00001 10.0336 9.00001 9.66537C9.00001 9.29718 9.29849 8.9987 9.66668 8.9987H9.67319Z" fill="#6366F1"/>
  </svg>
`,yc=nt`
  <svg width="20" height="20" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2.33203C14 1.96384 13.7015 1.66536 13.3333 1.66536H2.66666C2.29847 1.66536 1.99999 1.96384 1.99999 2.33203V5.66536C1.99999 6.03355 2.29847 6.33203 2.66666 6.33203H13.3333C13.7015 6.33203 14 6.03355 14 5.66536V2.33203ZM15.3333 5.66536C15.3333 6.76993 14.4379 7.66536 13.3333 7.66536H2.66666C1.56209 7.66536 0.666656 6.76993 0.666656 5.66536V2.33203C0.666656 1.22746 1.56209 0.332031 2.66666 0.332031H13.3333C14.4379 0.332031 15.3333 1.22746 15.3333 2.33203V5.66536Z" fill="#4BA3AD"/>
    <path d="M11.3398 3.33203C11.708 3.33203 12.0065 3.63051 12.0065 3.9987C12.0065 4.36689 11.708 4.66536 11.3398 4.66536H11.3333C10.9651 4.66536 10.6667 4.36689 10.6667 3.9987C10.6667 3.63051 10.9651 3.33203 11.3333 3.33203H11.3398Z" fill="#4BA3AD"/>
    <path d="M4.67317 3.33203C5.04136 3.33203 5.33983 3.63051 5.33983 3.9987C5.33983 4.36689 5.04136 4.66536 4.67317 4.66536H4.66666C4.29847 4.66536 3.99999 4.36689 3.99999 3.9987C3.99999 3.63051 4.29847 3.33203 4.66666 3.33203H4.67317Z" fill="#4BA3AD"/>
  </svg>
`,_c={portrait:vc,landscape:mc,square:bc,panorama:yc};let Lt=class extends O{constructor(){super(...arguments),this.selectedResolution=[],this.selectedOrientation=[],this.selectedFaces=[],this.t=(t,e)=>typeof e=="string"?e:t}get _hasSelection(){return this.selectedResolution.length>0||this.selectedOrientation.length>0||this.selectedFaces.length>0}_toggle(t,e){return t.includes(e)?t.filter(s=>s!==e):[...t,e]}_toggleResolution(t){this.selectedResolution=this._toggle(this.selectedResolution,t),this._dispatchChange()}_toggleOrientation(t){this.selectedOrientation=this._toggle(this.selectedOrientation,t),this._dispatchChange()}_toggleFaces(t){this.selectedFaces=this._toggle(this.selectedFaces,t),this._dispatchChange()}_clearAll(){this.selectedResolution=[],this.selectedOrientation=[],this.selectedFaces=[],this._dispatchChange()}_dispatchChange(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"image",values:{resolution:this.selectedResolution,orientation:this.selectedOrientation,faces:this.selectedFaces}},bubbles:!0,composed:!0}))}render(){return c`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!this._hasSelection}
          @click=${this._clearAll}
        >${this.t("clearAll","Clear all")}</button>

        <div class="filter-section">
          <span class="section-label">${this.t("imageResolution","Resolution")}</span>
          <div class="options-horizontal">
            ${Bn.map(t=>c`
                <ap-checkbox
                  ?checked=${this.selectedResolution.includes(t.value)}
                  @ap-toggle=${()=>{this._toggleResolution(t.value)}}
                >${this.t(t.labelKey,t.label)}</ap-checkbox>
              `)}
          </div>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t("imageOrientation","Orientation")}</span>
          <div class="options-vertical">
            ${Vn.map(t=>c`
                <ap-checkbox
                  ?checked=${this.selectedOrientation.includes(t.value)}
                  @ap-toggle=${()=>{this._toggleOrientation(t.value)}}
                ><span class="orientation-label">${_c[t.value]}${this.t(t.labelKey,t.label)}</span></ap-checkbox>
              `)}
          </div>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t("imageFaces","Faces")}</span>
          <div class="options-horizontal">
            ${qn.map(t=>c`
                <ap-checkbox
                  ?checked=${this.selectedFaces.includes(t.value)}
                  @ap-toggle=${()=>{this._toggleFaces(t.value)}}
                >${t.labelKey?this.t(t.labelKey,t.label):t.label}</ap-checkbox>
              `)}
          </div>
        </div>

        <div class="info-alert">
          <ap-icon name="info" .size=${14}></ap-icon>
          <span>${this.t("imageProcessingNotice","Some images might not have been processed, so they won't be displayed.")}</span>
        </div>
      </div>
    `}};Lt.styles=[st,I`
    .options-horizontal {
      display: flex;
      gap: 28px;
    }
    .options-vertical {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .options-vertical ap-checkbox {
      --ap-checkbox-gap: 12px;
    }
    .orientation-label {
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .orientation-label svg {
      flex-shrink: 0;
    }
  `];Ms([f({type:Array})],Lt.prototype,"selectedResolution",2);Ms([f({type:Array})],Lt.prototype,"selectedOrientation",2);Ms([f({type:Array})],Lt.prototype,"selectedFaces",2);Ms([f({attribute:!1})],Lt.prototype,"t",2);Lt=Ms([R("ap-filter-image")],Lt);var xc=Object.defineProperty,$c=Object.getOwnPropertyDescriptor,te=(t,e,s,i)=>{for(var a=i>1?void 0:i?$c(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&xc(e,s,a),a};function q(t){return`${ui[t.type]||""}${t.key}`}let J=class extends O{constructor(){super(...arguments),this.fields=[],this.appliedFilters={},this.visibleFields=[],this.mode="full",this.activeFieldKey="",this.pinnedFields=[],this.appliedMetadata={},this.t=(t,e)=>typeof e=="string"?e:t,this._showFieldSelection=!1,this._fieldSearch="",this._collapsedFields=new Set,this._tagInputs={},this._tagSuggestions={},this._tagLoading={},this._datePresets={},this._dateFroms={},this._dateTos={},this._specificModeFields=new Set,this._selectSearches={},this._tagDebounceTimers={}}get _tTextOperatorOptions(){return Ci.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tNumberOperatorOptions(){return Ei.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tSingleSelectOperatorOptions(){return rt.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tMultiSelectOperatorOptions(){return Ai.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tBooleanOptions(){return Yn.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tEmptyOptions(){return ii.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tEmptyAndSpecificOptions(){return Wn.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>this._focusSearch())}disconnectedCallback(){super.disconnectedCallback();for(const t of Object.values(this._tagDebounceTimers))clearTimeout(t)}_focusSearch(){const t=this.renderRoot.querySelector(".field-search, .search-input");t==null||t.focus()}get _atFieldLimit(){return this.visibleFields.length>=Ks}_getField(t){return this.fields.find(e=>q(e)===t)}_getUIType(t){return Xn[t.type]}_getApplied(t){return this.appliedMetadata[t]||this.appliedFilters[t]||{}}_isSpecialValue(t){return!t||t.length!==1?!1:t[0]===Fe||t[0]===Oe}_getContentMode(t){var s,i;const e=this._getApplied(t);return((s=e.values)==null?void 0:s[0])===Fe?Fe:((i=e.values)==null?void 0:i[0])===Oe?Oe:this._specificModeFields.has(t)||e.values&&e.values.length>0?kt:""}_emitFilterChange(t,e,s){const i=q(t);this.dispatchEvent(new CustomEvent("metadata-filter-change",{detail:{fieldKey:i,operator:e,values:s,metadataType:t.type},bubbles:!0,composed:!0}))}_emitFieldToggle(t,e){const s=q(t);this.dispatchEvent(new CustomEvent("metadata-field-toggle",{detail:{fieldKey:s,visible:e},bubbles:!0,composed:!0}))}_emitFieldSelect(t){const e=q(t);!this.visibleFields.includes(e)&&this._atFieldLimit||(this.visibleFields.includes(e)||this._emitFieldToggle(t,!0),this.dispatchEvent(new CustomEvent("metadata-field-select",{detail:{fieldKey:e},bubbles:!0,composed:!0})))}_emitPin(t,e){this.dispatchEvent(new CustomEvent("metadata-pin",{detail:{fieldKey:t,pinned:e},bubbles:!0,composed:!0}))}_openFieldSelection(){this._showFieldSelection=!0,this._fieldSearch=""}_closeFieldSelection(){this._showFieldSelection=!1,this._fieldSearch=""}_addField(t){if(this._atFieldLimit)return;const e=q(t);this.visibleFields.includes(e)||this._emitFieldToggle(t,!0)}_removeField(t){this._emitFieldToggle(t,!1),this._emitFilterChange(t,void 0,[])}_toggleCollapse(t){const e=new Set(this._collapsedFields);e.has(t)?e.delete(t):e.add(t),this._collapsedFields=e}_onOperatorChange(t,e){const i=this._getApplied(q(t)).values||[];this._emitFilterChange(t,e,i)}_onContentModeChange(t,e){const s=q(t);if(e===kt){const i=new Set(this._specificModeFields);i.add(s),this._specificModeFields=i;const a=this._getApplied(s);this._isSpecialValue(a.values)&&this._emitFilterChange(t,a.operator,[])}else{if(this._specificModeFields.has(s)){const i=new Set(this._specificModeFields);i.delete(s),this._specificModeFields=i}if(e)this._onEmptyOption(t,e);else{const i=this._getApplied(s);this._emitFilterChange(t,i.operator,[])}}}_clearFieldFilter(t){const e=q(t);if(this._specificModeFields.has(e)){const p=new Set(this._specificModeFields);p.delete(e),this._specificModeFields=p}const{[e]:s,...i}=this._datePresets;this._datePresets=i;const{[e]:a,...r}=this._dateFroms;this._dateFroms=r;const{[e]:o,...n}=this._dateTos;this._dateTos=n;const{[e]:l,...d}=this._selectSearches;this._selectSearches=d;const{[e]:h,...u}=this._tagInputs;this._tagInputs=u,this._emitFilterChange(t,void 0,[])}_onTextInput(t,e){const s=e.target.value,a=this._getApplied(q(t)).operator||Ci[0].value;this._emitFilterChange(t,a,s?[s]:[])}_onNumberInput(t,e,s){const i=e.target.value,a=q(t),r=this._getApplied(a),o=r.operator||Ei[0].value,n=[...r.values||[]];s===0?n[0]=i:n[1]=i;const l=n.filter(d=>d!==""&&d!==void 0);if(l.length>0){const d=t.type===L.DECIMAL2;if(!l.every(u=>d?!isNaN(parseFloat(u)):/^-?\d+$/.test(u)))return}this._emitFilterChange(t,o,n)}_onBooleanSelect(t,e){var a;const s=this._getApplied(q(t)),i=(a=s.values)==null?void 0:a[0];!e||i===e?this._emitFilterChange(t,void 0,[]):this._emitFilterChange(t,s.operator,[e])}_onSelectOneToggle(t,e){const s=q(t),i=this._getApplied(s),a=i.operator||rt[0].value,r=i.values||[];r.length===1&&r[0]===e?this._emitFilterChange(t,a,[]):this._emitFilterChange(t,a,[e])}_onMultiSelectToggle(t,e){const s=q(t),i=this._getApplied(s),a=i.operator||Ai[0].value,r=i.values||[],o=r.includes(e)?r.filter(n=>n!==e):[...r,e];this._emitFilterChange(t,a,o)}_onTagKeydown(t,e){const s=q(t);(e.key==="Enter"||e.key===",")&&(e.preventDefault(),this._commitTagInput(t,s))}_onTagInput(t,e,s){const i=s.target.value;if(i.includes(",")){const a=i.replace(/,/g,"").trim();a&&(this._tagInputs={...this._tagInputs,[e]:a},this._commitTagInput(t,e));return}this._tagInputs={...this._tagInputs,[e]:i},this._fetchTagSuggestions(t,e,i.trim())}_selectTagSuggestion(t,e){const s=q(t),i=this._getApplied(s),a=i.operator||rt[0].value,r=i.values||[];r.includes(e)||this._emitFilterChange(t,a,[...r,e]),this._tagInputs={...this._tagInputs,[s]:""},this._tagSuggestions={...this._tagSuggestions,[s]:[]}}_fetchTagSuggestions(t,e,s){if(this._tagDebounceTimers[e]&&clearTimeout(this._tagDebounceTimers[e]),!s||!this.apiClient){this._tagSuggestions={...this._tagSuggestions,[e]:[]},this._tagLoading={...this._tagLoading,[e]:!1};return}this._tagDebounceTimers[e]=setTimeout(async()=>{this._tagLoading={...this._tagLoading,[e]:!0};try{const i=`_${t.ckey||t.key}`,a=await this.apiClient.request("/metadata/autocomplete",{q:s,meta_key:i});(this._tagInputs[e]||"").trim()===s&&(this._tagSuggestions={...this._tagSuggestions,[e]:(a.tags||[]).map(r=>r.tag)})}catch{this._tagSuggestions={...this._tagSuggestions,[e]:[]}}finally{this._tagLoading={...this._tagLoading,[e]:!1}}},300)}_commitTagInput(t,e){const s=(this._tagInputs[e]||"").trim();if(!s)return;const i=this._getApplied(e),a=i.operator||rt[0].value,r=i.values||[];r.includes(s)||this._emitFilterChange(t,a,[...r,s]),this._tagInputs={...this._tagInputs,[e]:""},this._tagSuggestions={...this._tagSuggestions,[e]:[]}}_removeTag(t,e){const s=q(t),i=this._getApplied(s),a=i.operator||rt[0].value,r=i.values||[];this._emitFilterChange(t,a,r.filter(o=>o!==e))}_onTagOperatorChange(t,e){const s=q(t),a=this._getApplied(s).values||[];this._emitFilterChange(t,e,a)}_onDatePreset(t,e){const s=q(t);if(!e){this._clearFieldFilter(t);return}if(this._datePresets={...this._datePresets,[s]:e},["before","after","between"].includes(e)){this._dateFroms={...this._dateFroms,[s]:""},this._dateTos={...this._dateTos,[s]:""};return}if(e==="empty"||e==="non-empty"){this._emitFilterChange(t,void 0,[e]);return}const i=new Date;let a="",r="";switch(e){case"today":{const o=new Date(i);o.setHours(0,0,0,0),a=o.toISOString(),r=i.toISOString();break}case"last_week":{const o=new Date(i),n=o.getDay();o.setDate(o.getDate()-(n===0?6:n-1)),o.setHours(0,0,0,0);const l=new Date(o);l.setDate(l.getDate()-7),a=l.toISOString(),r=o.toISOString();break}case"last_month":{const o=new Date(i.getFullYear(),i.getMonth(),1),n=new Date(o);n.setMonth(n.getMonth()-1),a=n.toISOString(),r=o.toISOString();break}case"last_year":{const o=new Date(i.getFullYear(),0,1),n=new Date(o);n.setFullYear(n.getFullYear()-1),a=n.toISOString(),r=o.toISOString();break}}a&&r&&(this._dateFroms={...this._dateFroms,[s]:a},this._dateTos={...this._dateTos,[s]:r},this._emitFilterChange(t,"..",[a,r]))}_onDateInput(t,e,s){const i=s.target.value,a=q(t),r=this._datePresets[a]||"",o=i?new Date(i+"T00:00:00").toISOString():"";e==="from"?this._dateFroms={...this._dateFroms,[a]:o}:this._dateTos={...this._dateTos,[a]:o};let n=this._dateFroms[a]||"",l=this._dateTos[a]||"";r==="after"&&n&&(l=new Date().toISOString(),this._dateTos={...this._dateTos,[a]:l}),r==="before"&&l&&(n=new Date(0).toISOString(),this._dateFroms={...this._dateFroms,[a]:n}),n&&l&&this._emitFilterChange(t,"..",[n,l])}_onGeoLocationInput(t,e){var u;const s=e.target.value.trim(),i=q(t),a=(u=this.shadowRoot)==null?void 0:u.querySelector(`[data-geo-radius="${i}"]`),r=(a==null?void 0:a.value)||"";if(!s){this._emitFilterChange(t,void 0,[]);return}const o=s.split(",").map(p=>p.trim());if(o.length!==2||o.some(p=>isNaN(Number(p))||p===""))return;const[n,l]=o;let h=`${n},${l}..${r||"0"}`;this._emitFilterChange(t,K.IS,[h])}_onGeoRadiusInput(t,e){var l;const s=e.target.value,i=q(t),a=this._getApplied(i);if(!((l=a.values)!=null&&l[0]))return;const r=a.values[0],[o]=r.split("..");let n=o;s&&(n+=`..${s}`),this._emitFilterChange(t,K.IS,[n])}_onEmptyOption(t,e){var a;const s=this._getApplied(q(t)),i=(a=s.values)==null?void 0:a[0];!e||i===e?this._emitFilterChange(t,s.operator,[]):this._emitFilterChange(t,s.operator,[e])}_getGroupedFields(t){const e=new Map;for(const s of t){const i=s.group||this.t("rootFields","Root fields");e.has(i)||e.set(i,[]),e.get(i).push(s)}return e}_renderFieldSelection(){const t=this._fieldSearch.toLowerCase(),e=this.fields.filter(a=>a.label.toLowerCase().includes(t)),s=this._getGroupedFields(e),i=(a,r)=>r.length===0?v:c`
        <div class="field-group-label">${a}</div>
        ${r.map(o=>{const n=q(o),l=this.visibleFields.includes(n),d=!l&&this._atFieldLimit;return c`
            <div
              class="field-item ${l?"selected":""} ${d?"disabled":""}"
              @click=${()=>!d&&!l&&this._addField(o)}
            >
              ${l?c`<ap-icon name="check" .size=${14}></ap-icon>`:c`<ap-icon name=${Gs[o.type]||"file-text"} .size=${14} ${B({color:"var(--ap-muted-foreground, oklch(0.685 0.033 249.82))"})}></ap-icon>`}
              <span>${o.label}</span>
            </div>
          `})}
      `;return c`
      <div class="field-selection">
        <div class="field-selection-header">
          <span class="field-selection-title">${this.t("addMetadataField","Add metadata field")}</span>
          <button
            class="field-selection-close"
            @click=${this._closeFieldSelection}
          >
            <ap-icon name="close" .size=${16}></ap-icon>
          </button>
        </div>
        <div class="field-search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="field-search"
            type="text"
            .placeholder=${this.t("searchFieldsPlaceholder","Search fields")}
            .value=${this._fieldSearch}
            @input=${a=>{this._fieldSearch=a.target.value}}
          />
        </div>
        <div class="field-list">
          ${e.length===0?c`<div class="empty-msg">${this.t("noFieldsFound","No fields found")}</div>`:c`${[...s.entries()].map(([a,r])=>i(a,r))}`}
        </div>
      </div>
    `}_renderTextFilter(t){var d,h;const e=q(t),s=this._getApplied(e),a=this._isSpecialValue(s.values)?"":((d=s.values)==null?void 0:d[0])||"",r=this._getContentMode(e),o=r===Fe||r===Oe,n=s.operator||Ci[0].value,l=t.type===L.TEXT_AREA;return c`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!((h=s.values)!=null&&h.length)&&!s.operator}
          @click=${()=>this._clearFieldFilter(t)}
        >${this.t("clearAll","Clear all")}</button>

        <div class="filter-section">
          <span class="section-label">${this.t("operator","Operator")}</span>
          <ap-radio-group
            direction="horizontal"
            .options=${this._tTextOperatorOptions}
            .value=${n}
            ?disabled=${o}
            @ap-change=${u=>this._onOperatorChange(t,u.detail.value)}
          ></ap-radio-group>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t("content","Content")}</span>
          <ap-radio-group
            clearable
            .options=${this._tEmptyAndSpecificOptions}
            .value=${r}
            @ap-change=${u=>this._onContentModeChange(t,u.detail.value)}
          ></ap-radio-group>
        </div>

        ${r===kt?c`
              <div class="filter-section">
                <span class="section-label">${this.t("value","Value")}</span>
                ${l?c`
                      <textarea
                        class="filter-input"
                        .placeholder=${this.t("enterValue","Enter value")}
                        .value=${a}
                        @change=${u=>this._onTextInput(t,u)}
                      ></textarea>
                    `:c`
                      <input
                        class="filter-input"
                        type="text"
                        .placeholder=${this.t("enterValue","Enter value")}
                        .value=${a}
                        @change=${u=>this._onTextInput(t,u)}
                        @keydown=${u=>{u.key==="Enter"&&u.preventDefault()}}
                      />
                    `}
              </div>
            `:v}
      </div>
    `}_renderNumberFilter(t){var k,N,T;const e=q(t),s=this._getApplied(e),i=s.operator||Ei[0].value,a=this._isSpecialValue(s.values),r=this._getContentMode(e),o=r===Fe||r===Oe,n=i===K.RANGE,l=i===K.GREATER_THAN_OR_EQUAL,d=i===K.LESS_THAN_OR_EQUAL,h=t.type===L.DECIMAL2,u=h?"0.01":"1",p=h?"0.00":"0",g=a?"":((k=s.values)==null?void 0:k[0])||"",b=a?"":((N=s.values)==null?void 0:N[1])||"",y=n||l||d,_=n||l||d?this.t("min","Min"):this.t("value","Value"),S=this.t("max","Max");return c`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!((T=s.values)!=null&&T.length)&&!s.operator}
          @click=${()=>this._clearFieldFilter(t)}
        >${this.t("clearAll","Clear all")}</button>

        <div class="filter-section">
          <span class="section-label">${this.t("condition","Condition")}</span>
          <ap-radio-group
            columns="2"
            .options=${this._tNumberOperatorOptions}
            .value=${i}
            ?disabled=${o}
            @ap-change=${E=>this._onOperatorChange(t,E.detail.value)}
          ></ap-radio-group>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t("content","Content")}</span>
          <ap-radio-group
            clearable
            .options=${this._tEmptyAndSpecificOptions}
            .value=${r}
            @ap-change=${E=>this._onContentModeChange(t,E.detail.value)}
          ></ap-radio-group>
        </div>

        ${r===kt?c`
              <div class="filter-section">
                <div class="grid-2">
                  <div>
                    <span class="input-label" aria-disabled=${d?"true":v}>${_}</span>
                    <input
                      class="filter-input"
                      type="number"
                      step=${u}
                      placeholder=${p}
                      .value=${g}
                      ?disabled=${d}
                      @change=${E=>this._onNumberInput(t,E,0)}
                    />
                  </div>
                  ${y?c`
                        <div>
                          <span class="input-label" aria-disabled=${l?"true":v}>${S}</span>
                          <input
                            class="filter-input"
                            type="number"
                            step=${u}
                            placeholder=${p}
                            .value=${b}
                            ?disabled=${l}
                            @change=${E=>this._onNumberInput(t,E,1)}
                          />
                        </div>
                      `:v}
                </div>
              </div>
            `:v}
      </div>
    `}_renderBooleanFilter(t){var i,a;const e=this._getApplied(q(t)),s=((i=e.values)==null?void 0:i[0])||"";return c`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!((a=e.values)!=null&&a.length)}
          @click=${()=>this._clearFieldFilter(t)}
        >${this.t("clearAll","Clear all")}</button>

        <div class="filter-section">
          <span class="section-label">${this.t("value","Value")}</span>
          <ap-radio-group
            clearable
            .options=${this._tBooleanOptions}
            .value=${s}
            @ap-change=${r=>this._onBooleanSelect(t,r.detail.value)}
          ></ap-radio-group>
        </div>
      </div>
    `}_renderSelectOneFilter(t){const e=q(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),a=i?[]:s.values||[],r=t.possible_values||[],o=s.operator||rt[0].value,n=(this._selectSearches[e]||"").toLowerCase(),l=n.length>0,d=a.length>0||i,h=n?r.filter(p=>p.label.toLowerCase().includes(n)):r,u=a.length>=Ks;return c`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchOptionsPlaceholder","Search options")}
            .value=${this._selectSearches[e]||""}
            @input=${p=>{this._selectSearches={...this._selectSearches,[e]:p.target.value}}}
          />
          ${l?c`
                <button class="search-clear" @click=${()=>{this._selectSearches={...this._selectSearches,[e]:""}}}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:v}
        </div>

        ${l?c`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!d&&!s.operator}
                  @click=${()=>this._clearFieldFilter(t)}
                >${this.t("clearAll","Clear all")}</button>
              </div>
            `:c`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("operator","Operator")}</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!d&&!s.operator}
                    @click=${()=>this._clearFieldFilter(t)}
                  >${this.t("clearAll","Clear all")}</button>
                </div>
                <ap-radio-group
                  direction="horizontal"
                  .options=${this._tSingleSelectOperatorOptions}
                  .value=${o}
                  @ap-change=${p=>this._onOperatorChange(t,p.detail.value)}
                ></ap-radio-group>
              </div>

              <!-- Selected chips -->
              ${a.length>0?c`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">${this.t("selected","Selected")}</span>
                        <button
                          class="clear-btn"
                          @click=${()=>this._clearFieldFilter(t)}
                        >${this.t("clearAll","Clear all")}</button>
                      </div>
                      <div class="chips-wrap">
                        ${a.map(p=>{const g=r.find(b=>b.api_value===p);return c`
                            <div class="chip">
                              <span class="chip-label">${(g==null?void 0:g.label)||p}</span>
                              <button class="chip-remove" @click=${()=>this._onSelectOneToggle(t,p)}>
                                <ap-icon name="close" .size=${10}></ap-icon>
                              </button>
                            </div>
                          `})}
                      </div>
                    </div>
                  `:v}
            `}

        <!-- Options list -->
        <div class="filter-section">
          <span class="section-label">${this.t("allOptions","All options")}</span>

          <!-- Empty/Not empty checkboxes -->
          <div class="options-list short">
            ${this._tEmptyOptions.map(p=>{var g;return c`
                <div
                  class="option-item"
                  @click=${()=>this._onEmptyOption(t,p.value)}
                >
                  <ap-checkbox ?checked=${((g=s.values)==null?void 0:g[0])===p.value}></ap-checkbox>
                  <span>${p.label}</span>
                </div>
              `})}
          </div>

          <div class="separator"></div>

          <!-- Regular options -->
          <div class="options-list">
            ${h.length===0?c`<div class="no-results">${this.t("noOptionsFound","No options found")}</div>`:h.map(p=>{const g=a.includes(p.api_value),b=!g&&u;return c`
                    <div
                      class="option-item ${b?"disabled":""}"
                      @click=${()=>!b&&this._onSelectOneToggle(t,p.api_value)}
                    >
                      <ap-checkbox ?checked=${g}></ap-checkbox>
                      <span>${p.label}</span>
                    </div>
                  `})}
          </div>
        </div>
      </div>
    `}_renderMultiSelectFilter(t){const e=q(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),a=i?[]:s.values||[],r=t.possible_values||[],o=s.operator||Ai[0].value,n=(this._selectSearches[e]||"").toLowerCase(),l=n.length>0,d=a.length>0||i,h=n?r.filter(p=>p.label.toLowerCase().includes(n)):r,u=a.length>=Ks;return c`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchOptionsPlaceholder","Search options")}
            .value=${this._selectSearches[e]||""}
            @input=${p=>{this._selectSearches={...this._selectSearches,[e]:p.target.value}}}
          />
          ${l?c`
                <button class="search-clear" @click=${()=>{this._selectSearches={...this._selectSearches,[e]:""}}}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:v}
        </div>

        ${l?c`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!d&&!s.operator}
                  @click=${()=>this._clearFieldFilter(t)}
                >${this.t("clearAll","Clear all")}</button>
              </div>
            `:c`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("operator","Operator")}</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!d&&!s.operator}
                    @click=${()=>this._clearFieldFilter(t)}
                  >${this.t("clearAll","Clear all")}</button>
                </div>
                <ap-radio-group
                  direction="horizontal"
                  .options=${this._tMultiSelectOperatorOptions}
                  .value=${o}
                  @ap-change=${p=>this._onOperatorChange(t,p.detail.value)}
                ></ap-radio-group>
              </div>

              <!-- Selected chips -->
              ${a.length>0?c`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">${this.t("selected","Selected")}</span>
                        <button
                          class="clear-btn"
                          @click=${()=>this._clearFieldFilter(t)}
                        >${this.t("clearAll","Clear all")}</button>
                      </div>
                      <div class="chips-wrap">
                        ${a.map(p=>{const g=r.find(b=>b.api_value===p);return c`
                            <div class="chip">
                              <span class="chip-label">${(g==null?void 0:g.label)||p}</span>
                              <button class="chip-remove" @click=${()=>this._onMultiSelectToggle(t,p)}>
                                <ap-icon name="close" .size=${10}></ap-icon>
                              </button>
                            </div>
                          `})}
                      </div>
                    </div>
                  `:v}
            `}

        <!-- Options list -->
        <div class="filter-section">
          <span class="section-label">${this.t("allOptions","All options")}</span>

          <!-- Empty/Not empty checkboxes -->
          <div class="options-list short">
            ${this._tEmptyOptions.map(p=>{var g;return c`
                <div
                  class="option-item"
                  @click=${()=>this._onEmptyOption(t,p.value)}
                >
                  <ap-checkbox ?checked=${((g=s.values)==null?void 0:g[0])===p.value}></ap-checkbox>
                  <span>${p.label}</span>
                </div>
              `})}
          </div>

          <div class="separator"></div>

          <!-- Regular options -->
          <div class="options-list">
            ${h.length===0?c`<div class="no-results">${this.t("noOptionsFound","No options found")}</div>`:h.map(p=>{const g=a.includes(p.api_value),b=!g&&u;return c`
                    <div
                      class="option-item ${b?"disabled":""}"
                      @click=${()=>!b&&this._onMultiSelectToggle(t,p.api_value)}
                    >
                      <ap-checkbox ?checked=${g}></ap-checkbox>
                      <span>${p.label}</span>
                    </div>
                  `})}
          </div>
        </div>
      </div>
    `}_renderTagsFilter(t){const e=q(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),a=i?[]:s.values||[],r=this._tagInputs[e]||"",o=s.operator||rt[0].value,n=a.length>0||i,l=this._tagSuggestions[e]||[],d=this._tagLoading[e]||!1,h=r.trim().length>0,u=a.length>=Ks;return c`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchTagsPlaceholder","Search tags")}
            .value=${r}
            @input=${p=>this._onTagInput(t,e,p)}
            @keydown=${p=>this._onTagKeydown(t,p)}
          />
          ${h?c`
                <button class="search-clear" @click=${()=>{this._tagInputs={...this._tagInputs,[e]:""},this._tagSuggestions={...this._tagSuggestions,[e]:[]}}}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:v}
        </div>

        ${h?c`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!n&&!s.operator}
                  @click=${()=>this._clearFieldFilter(t)}
                >${this.t("clearAll","Clear all")}</button>
              </div>
            `:c`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("condition","Condition")}</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!n&&!s.operator}
                    @click=${()=>this._clearFieldFilter(t)}
                  >${this.t("clearAll","Clear all")}</button>
                </div>
                <ap-radio-group
                  direction="horizontal"
                  .options=${this._tSingleSelectOperatorOptions}
                  .value=${o}
                  ?disabled=${i}
                  @ap-change=${p=>this._onTagOperatorChange(t,p.detail.value)}
                ></ap-radio-group>
              </div>

              <!-- Selected chips -->
              ${a.length>0?c`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">${this.t("selected","Selected")}</span>
                        <button
                          class="clear-btn"
                          @click=${()=>this._clearFieldFilter(t)}
                        >${this.t("clearAll","Clear all")}</button>
                      </div>
                      <div class="chips-wrap">
                        ${a.map(p=>c`
                            <div class="chip">
                              <span class="chip-label">${p}</span>
                              <button class="chip-remove" @click=${()=>this._removeTag(t,p)}>
                                <ap-icon name="close" .size=${10}></ap-icon>
                              </button>
                            </div>
                          `)}
                      </div>
                    </div>
                  `:v}

              <!-- Empty/Not empty -->
              <div class="filter-section">
                <span class="section-label">${this.t("allOptions","All options")}</span>
                <div class="options-list short">
                  ${this._tEmptyOptions.map(p=>{var g;return c`
                      <div
                        class="option-item"
                        @click=${()=>this._onEmptyOption(t,p.value)}
                      >
                        <ap-checkbox ?checked=${((g=s.values)==null?void 0:g[0])===p.value}></ap-checkbox>
                        <span>${p.label}</span>
                      </div>
                    `})}
                </div>
              </div>
            `}

        <!-- Suggestions list -->
        ${h?c`
              <div class="filter-section">
                <div class="options-list">
                  ${d?c`<div class="option-item disabled"><span>${this.t("loading","Loading...")}</span></div>`:l.length>0?l.map(p=>{const g=a.includes(p),b=!g&&u;return c`
                              <div
                                class="option-item ${b?"disabled":""}"
                                @click=${()=>!b&&(g?this._removeTag(t,p):this._selectTagSuggestion(t,p))}
                              >
                                <ap-checkbox ?checked=${g}></ap-checkbox>
                                <span>${p}</span>
                              </div>
                            `}):c`<div class="option-item disabled"><span>${this.t("noResults","No results")}</span></div>`}
                </div>
              </div>
            `:v}
      </div>
    `}_renderDateFilter(t){var h,u;const e=q(t),s=this._datePresets[e]||"",i=this._getApplied(e),r=this._isSpecialValue(i.values)?((h=i.values)==null?void 0:h[0])||"":s,o=[{value:"empty",label:"Empty"},{value:"non-empty",label:"Not empty"}],n=this._dateFroms[e]?new Date(this._dateFroms[e]).toISOString().split("T")[0]:"",l=this._dateTos[e]?new Date(this._dateTos[e]).toISOString().split("T")[0]:"",d=["before","after","between"].includes(r);return c`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!r&&!((u=i.values)!=null&&u.length)}
          @click=${()=>this._clearFieldFilter(t)}
        >${this.t("clearAll","Clear all")}</button>

        <div class="filter-section">
          <ap-radio-group
            clearable
            .options=${o}
            .value=${r==="empty"||r==="non-empty"?r:""}
            @ap-change=${p=>this._onDatePreset(t,p.detail.value)}
          ></ap-radio-group>

          <div class="separator"></div>

          <ap-radio-group
            clearable
            columns="2"
            .options=${Gi.map(p=>({...p,label:this.t(p.labelKey,p.label)}))}
            .value=${r!=="empty"&&r!=="non-empty"?r:""}
            @ap-change=${p=>this._onDatePreset(t,p.detail.value)}
          ></ap-radio-group>
        </div>

        ${d?c`
              <div class="filter-section">
                <div class="grid-2">
                  ${r==="before"?c`
                        <div>
                          <span class="input-label">${this.t("endDate","End date")}</span>
                          <input
                            type="date"
                            class="filter-input"
                            .value=${l}
                            @change=${p=>this._onDateInput(t,"to",p)}
                          />
                        </div>
                      `:r==="after"?c`
                          <div>
                            <span class="input-label">${this.t("startDate","Start date")}</span>
                            <input
                              type="date"
                              class="filter-input"
                              .value=${n}
                              @change=${p=>this._onDateInput(t,"from",p)}
                            />
                          </div>
                        `:c`
                          <div>
                            <span class="input-label">${this.t("startDate","Start date")}</span>
                            <input
                              type="date"
                              class="filter-input"
                              .value=${n}
                              @change=${p=>this._onDateInput(t,"from",p)}
                            />
                          </div>
                          <div>
                            <span class="input-label">${this.t("endDate","End date")}</span>
                            <input
                              type="date"
                              class="filter-input"
                              .value=${l}
                              @change=${p=>this._onDateInput(t,"to",p)}
                            />
                          </div>
                        `}
                </div>
              </div>
            `:v}
      </div>
    `}_renderGeoFilter(t){var h,u;const e=q(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),a=this._getContentMode(e);let r="",o="";if(!i&&((h=s.values)!=null&&h[0])){const p=s.values[0],[g,b]=p.split("..");r=g||"",o=b||""}const n=r.length>0,l=r.split(",").map(p=>p.trim()),d=!n||l.length===2&&l.every(p=>!isNaN(Number(p))&&p!=="");return c`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!((u=s.values)!=null&&u.length)}
          @click=${()=>this._clearFieldFilter(t)}
        >${this.t("clearAll","Clear all")}</button>

        <div class="filter-section">
          <span class="section-label">${this.t("content","Content")}</span>
          <ap-radio-group
            clearable
            .options=${this._tEmptyAndSpecificOptions}
            .value=${a}
            @ap-change=${p=>this._onContentModeChange(t,p.detail.value)}
          ></ap-radio-group>
        </div>

        ${a===kt?c`
              <div class="filter-section">
                <div class="geo-row">
                  <div class="geo-location">
                    <span class="input-label">${this.t("location","Location")}</span>
                    <input
                      class="filter-input"
                      type="text"
                      .placeholder=${this.t("latLngPlaceholder","Latitude, longitude")}
                      .value=${r}
                      @change=${p=>this._onGeoLocationInput(t,p)}
                    />
                    ${n&&!d?c`<div class="error-text">${this.t("geoCoordinatesError",'Enter coordinates as "latitude, longitude"')}</div>`:v}
                  </div>
                  <div class="geo-radius">
                    <span class="input-label">${this.t("maxRadius","Max radius")} (&deg;)</span>
                    <input
                      class="filter-input"
                      type="number"
                      placeholder="0"
                      data-geo-radius=${e}
                      .value=${o}
                      @change=${p=>this._onGeoRadiusInput(t,p)}
                    />
                  </div>
                </div>
              </div>
            `:v}
      </div>
    `}_renderAttachmentFilter(t){var i,a;const e=this._getApplied(q(t)),s=((i=e.values)==null?void 0:i[0])||"";return c`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!((a=e.values)!=null&&a.length)}
          @click=${()=>this._clearFieldFilter(t)}
        >${this.t("clearAll","Clear all")}</button>

        <div class="filter-section">
          <ap-radio-group
            clearable
            .options=${this._tEmptyOptions}
            .value=${s}
            @ap-change=${r=>this._onEmptyOption(t,r.detail.value)}
          ></ap-radio-group>
        </div>
      </div>
    `}_renderFaceMatcherFilter(t){const e=q(t),s=this._getApplied(e),i=s.values||[],a=s.operator||K.IS;return c`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${i.length===0}
          @click=${()=>this._clearFieldFilter(t)}
        >${this.t("clearAll","Clear all")}</button>

        <div class="filter-section">
          <span class="section-label">${this.t("condition","Condition")}</span>
          <ap-radio-group
            direction="horizontal"
            .options=${rt}
            .value=${a}
            @ap-change=${r=>this._emitFilterChange(t,r.detail.value,i)}
          ></ap-radio-group>
          <input
            class="filter-input"
            type="text"
            .placeholder=${this.t("searchFacesPlaceholder","Search faces")}
            .value=${i.join(", ")}
            @change=${r=>{const n=r.target.value.split(",").map(l=>l.trim()).filter(Boolean);this._emitFilterChange(t,a,n)}}
          />
        </div>
      </div>
    `}_renderFieldControl(t){switch(this._getUIType(t)){case"text":return this._renderTextFilter(t);case"number":return this._renderNumberFilter(t);case"boolean":return this._renderBooleanFilter(t);case"select-one":return this._renderSelectOneFilter(t);case"multi-select":return this._renderMultiSelectFilter(t);case"tags":return this._renderTagsFilter(t);case"date":return this._renderDateFilter(t);case"geo":return this._renderGeoFilter(t);case"attachment":return t.type===L.INTEGER_LIST&&t.slug==="face_matcher"?this._renderFaceMatcherFilter(t):this._renderAttachmentFilter(t);default:return v}}_renderFieldSection(t){const e=this._getField(t);if(!e)return v;const s=this._collapsedFields.has(t);return c`
      <div class="field-section">
        <div
          class="field-header"
          @click=${()=>this._toggleCollapse(t)}
        >
          <div class="field-header-left">
            <ap-icon
              class="chevron ${s?"":"expanded"}"
              name="chevron-right"
              .size=${14}
            ></ap-icon>
            <ap-icon name=${Gs[e.type]||"file-text"} .size=${14} ${B({color:"var(--ap-muted-foreground, oklch(0.685 0.033 249.82))"})}></ap-icon>
            <span>${e.label}</span>
          </div>
          <div class="field-header-actions">
            <button
              class="icon-btn remove"
              @click=${i=>{i.stopPropagation(),this._removeField(e)}}
              title=${this.t("removeField","Remove field")}
            >
              <ap-icon name="close" .size=${14}></ap-icon>
            </button>
          </div>
        </div>
        <div class="field-body ${s?"collapsed":""}">
          ${this._renderFieldControl(e)}
        </div>
      </div>
    `}_renderSelectorMode(){const t=this._fieldSearch.toLowerCase(),e=this.fields.filter(a=>a.label.toLowerCase().includes(t)),s=this._getGroupedFields(e),i=(a,r)=>r.length===0?v:c`
        <div class="field-group-label">${a}</div>
        ${r.map(o=>{const n=q(o),l=this.visibleFields.includes(n),d=!!this.appliedMetadata[n]||!!this.appliedFilters[n],h=this.pinnedFields.includes(n),u=!l&&this._atFieldLimit;return c`
            <div
              class="field-item ${d?"has-filter":""} ${u?"disabled":""}"
              @click=${()=>!u&&this._emitFieldSelect(o)}
            >
              <ap-icon name=${Gs[o.type]||"file-text"} .size=${14} ${B({color:"var(--ap-muted-foreground, oklch(0.685 0.033 249.82))"})}></ap-icon>
              <span class="field-item-label">${o.label}</span>
              <button
                class="field-item-pin ${h?"pinned":""}"
                @click=${p=>{p.stopPropagation(),this._emitPin(n,!h)}}
                title=${h?this.t("unpinField","Unpin field"):this.t("pinField","Pin field")}
              >
                <ap-icon name="pin" .size=${12}></ap-icon>
              </button>
              ${d?c`<ap-icon name="check" .size=${14}></ap-icon>`:v}
            </div>
          `})}
      `;return c`
      <div class="selector-wrap">
        <div class="field-search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="field-search"
            type="text"
            .placeholder=${this.t("searchFieldsPlaceholder","Search fields")}
            .value=${this._fieldSearch}
            @input=${a=>{this._fieldSearch=a.target.value}}
          />
        </div>
        <div class="field-list">
          ${e.length===0?c`<div class="empty-msg">${this.t("noFieldsFound","No fields found")}</div>`:c`${[...s.entries()].map(([a,r])=>i(a,r))}`}
        </div>
      </div>
    `}_renderFieldMode(){const t=this._getField(this.activeFieldKey);return t?this._renderFieldControl(t):c`<div class="empty-msg">${this.t("fieldNotFound","Field not found")}</div>`}render(){if(this.mode==="selector")return this._renderSelectorMode();if(this.mode==="field")return this._renderFieldMode();const t=this.visibleFields.length>0;return c`
      ${this._showFieldSelection||!t?this._renderFieldSelection():v}

      ${t?c`
            <div class="field-filters">
              ${this.visibleFields.map(e=>this._renderFieldSection(e))}
            </div>

            ${!this._showFieldSelection&&!this._atFieldLimit?c`
                  <button
                    class="add-field-btn"
                    @click=${this._openFieldSelection}
                  >
                    <ap-icon name="filter" .size=${14}></ap-icon>
                    ${this.t("addField","Add field")}
                  </button>
                `:v}
          `:v}
    `}};J.styles=[me,st,I`
    /* ── Field selection panel ─────────────────────────────── */

    .add-field-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      border: 1px dashed var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius-sm, 6px);
      background: none;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      cursor: pointer;
      width: 100%;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      transition: all 150ms;
      margin-top: 8px;
    }

    .add-field-btn:hover {
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }

    .field-selection {
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius-sm, 6px);
      background: var(--ap-background, oklch(1 0 0));
      margin-bottom: 12px;
    }

    .field-selection-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 12px;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }

    .field-selection-title {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }

    .field-selection-close {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      padding: 2px;
      display: flex;
      align-items: center;
    }

    .field-selection-close:hover {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }

    .selector-wrap {
      margin: 0;
    }

    .field-search-wrapper {
      position: sticky;
      top: 0;
      z-index: 2;
    }

    .field-search-wrapper .search-icon {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      pointer-events: none;
    }

    .field-search {
      width: 100%;
      height: 34px;
      padding: 0 20px 0 32px;
      box-sizing: border-box;
      border: none;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-card, oklch(1 0 0));
      outline: none;
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }

    .field-search::placeholder {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      font-weight: 400;
    }

    .field-list {
      padding: 12px 0;
    }

    .field-group-label {
      padding: 6px 12px 4px;
      font-size: 0.875rem;
      font-weight: 400;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }

    .field-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 16px 6px 24px;
      cursor: pointer;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      transition: background 100ms;
    }

    .field-item:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    .field-item.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .field-item.selected {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }

    .limit-note {
      padding: 8px 16px 8px 24px;
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      text-align: center;
    }

    .limit-note.at-limit {
      color: var(--ap-destructive, oklch(0.577 0.215 27.325));
    }

    .empty-msg {
      padding: 16px 16px 16px 24px;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      text-align: center;
    }

    /* ── Per-field filter sections ─────────────────────────── */

    .field-filters {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .field-section {
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius-sm, 6px);
      overflow: hidden;
    }

    .field-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 12px;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      cursor: pointer;
      user-select: none;
    }

    .field-header-left {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }

    .field-header-actions {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .icon-btn {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      padding: 2px;
      display: flex;
      align-items: center;
      border-radius: 4px;
      transition: all 100ms;
    }

    .icon-btn:hover {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-border, oklch(92.86% 0.009 247.92));
    }

    .icon-btn.remove:hover {
      color: var(--ap-destructive, oklch(0.577 0.215 27.325));
    }

    .field-body {
      padding: 10px 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .field-body.collapsed {
      display: none;
    }

    /* ── Tags input ─────────────────────────────────────── */

    .tags-container {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      padding: 6px;
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius-sm, 6px);
      min-height: 36px;
      align-items: center;
    }

    .tag-chip {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 2px 8px;
      border-radius: 9999px;
      font-size: 0.8125rem;
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }

    .tag-chip-remove {
      background: none;
      border: none;
      cursor: pointer;
      color: inherit;
      padding: 0;
      display: flex;
      align-items: center;
      opacity: 0.7;
    }

    .tag-chip-remove:hover {
      opacity: 1;
    }

    .tag-input {
      border: none;
      outline: none;
      font-size: var(--ap-font-size-sm, 0.875rem);
      flex: 1;
      min-width: 80px;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: transparent;
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }

    .tag-input::placeholder {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }

    /* ── Geo inputs ─────────────────────────────────────── */

    .geo-row {
      display: flex;
      gap: 12px;
    }

    .geo-location {
      flex: 2;
    }

    .geo-radius {
      flex: 1;
    }

    /* ── Select option items ────────────────────────────── */

    .option-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      transition: background 150ms;
    }

    .option-item:hover:not(.disabled) {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    .option-item.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    /* ── Chevron ────────────────────────────────────────── */

    .chevron {
      transition: transform 150ms;
    }

    .chevron.expanded {
      transform: rotate(90deg);
    }

    /* ── Selector mode ─────────────────────────────────── */

    .field-item-label {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .field-item-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      flex-shrink: 0;
    }

    .field-item-pin {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 22px;
      height: 22px;
      border: none;
      background: none;
      cursor: pointer;
      padding: 0;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      border-radius: 4px;
      flex-shrink: 0;
      margin-left: auto;
      opacity: 0;
      transition: all 150ms;
    }

    .field-item:hover .field-item-pin,
    .field-item-pin.pinned {
      opacity: 1;
    }

    .field-item-pin:hover {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.08));
    }

    .field-item-pin.pinned {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }

    .field-item.has-filter {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
    }
  `];te([f({type:Array})],J.prototype,"fields",2);te([f({type:Object})],J.prototype,"appliedFilters",2);te([f({type:Array})],J.prototype,"visibleFields",2);te([f()],J.prototype,"mode",2);te([f()],J.prototype,"activeFieldKey",2);te([f({type:Array})],J.prototype,"pinnedFields",2);te([f({type:Object})],J.prototype,"appliedMetadata",2);te([f({attribute:!1})],J.prototype,"apiClient",2);te([f({attribute:!1})],J.prototype,"t",2);te([w()],J.prototype,"_showFieldSelection",2);te([w()],J.prototype,"_fieldSearch",2);te([w()],J.prototype,"_collapsedFields",2);te([w()],J.prototype,"_tagInputs",2);te([w()],J.prototype,"_tagSuggestions",2);te([w()],J.prototype,"_tagLoading",2);te([w()],J.prototype,"_datePresets",2);te([w()],J.prototype,"_dateFroms",2);te([w()],J.prototype,"_dateTos",2);te([w()],J.prototype,"_specificModeFields",2);te([w()],J.prototype,"_selectSearches",2);J=te([R("ap-filter-metadata")],J);var wc=Object.defineProperty,kc=Object.getOwnPropertyDescriptor,ue=(t,e,s,i)=>{for(var a=i>1?void 0:i?kc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&wc(e,s,a),a};let re=class extends O{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.selectedStatus=[],this.statusOperator=":=",this.approverValues=[],this.approverOperator=K.IS_EXACT,this.approverUsers=[],this.requesterValues=[],this.requesterOperator=K.IS_EXACT,this.requesterUsers=[],this.dueDateKind=null,this.dueDatePreset="",this.dueDateFrom="",this.dueDateTo="",this._approverSearch="",this._requesterSearch=""}get _statusHasOnlyEmptyValues(){return this.selectedStatus.length>0&&this.selectedStatus.every(t=>t===Fe||t===Oe)}get _dueDateNeedsInputs(){return["before","after","between","specific"].includes(this.dueDatePreset)}get _showApproverSection(){return this.approverUsers.length>0}get _showRequesterSection(){return this.requesterUsers.length>0}_toggleStatus(t){const e=this.selectedStatus.includes(t)?this.selectedStatus.filter(s=>s!==t):[...this.selectedStatus,t];this._emitChange(j.STATUS,e,this.statusOperator)}_handleStatusOperator(t){const e=t.detail.value;this._emitChange(j.STATUS,this.selectedStatus,e)}_clearStatus(){this._emitChange(j.STATUS,[],this.statusOperator)}_toggleApprover(t){const e=this.approverValues.includes(t)?this.approverValues.filter(s=>s!==t):[...this.approverValues,t];this._emitChange(j.APPROVER,e,this.approverOperator)}_handleApproverOperator(t){const e=t.detail.value;this._emitChange(j.APPROVER,this.approverValues,e)}_clearApprover(){this._emitChange(j.APPROVER,[],this.approverOperator)}_onApproverSearchInput(t){this._approverSearch=t.target.value}_clearApproverSearch(){this._approverSearch=""}_toggleRequester(t){const e=this.requesterValues.includes(t)?this.requesterValues.filter(s=>s!==t):[...this.requesterValues,t];this._emitChange(j.REQUESTOR,e,this.requesterOperator)}_handleRequesterOperator(t){const e=t.detail.value;this._emitChange(j.REQUESTOR,this.requesterValues,e)}_clearRequester(){this._emitChange(j.REQUESTOR,[],this.requesterOperator)}_onRequesterSearchInput(t){this._requesterSearch=t.target.value}_clearRequesterSearch(){this._requesterSearch=""}_kindFromDuedateValue(t){return t===Re.BEFORE||t===Re.AFTER||t===Re.BETWEEN||t===Re.SPECIFIC?t:Re.PRESET}_handleDueDatePreset(t){const e=t.detail.value;if(!e||this.dueDatePreset===e){this._clearDueDate();return}const s=this._kindFromDuedateValue(e);let i="",a="";if(s===Re.PRESET){const r=Qi(e);r&&(i=r.from,a=r.to??"")}this._emitDuedate({kind:s,preset:e,from:i,to:a})}_handleDueDateFrom(t){const e=t.target.value;this._emitDuedate({kind:this.dueDateKind,preset:this.dueDatePreset,from:e,to:this.dueDateTo})}_handleDueDateTo(t){const e=t.target.value;this._emitDuedate({kind:this.dueDateKind,preset:this.dueDatePreset,from:this.dueDateFrom,to:e})}_clearDueDate(){this._emitDuedate({kind:null,preset:"",from:"",to:""})}_emitDuedate(t){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:j.DUE_DATE,values:{field:j.DUE_DATE,kind:t.kind,preset:t.preset||null,from:t.from,to:t.to}},bubbles:!0,composed:!0}))}_emitChange(t,e,s){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:t,values:e,operator:s},bubbles:!0,composed:!0}))}_filterUsers(t,e){const s=e.trim().toLowerCase();return s?t.filter(i=>{var a;return i.name.toLowerCase().includes(s)||(((a=i.email)==null?void 0:a.toLowerCase().includes(s))??!1)}):t}_getInitials(t){const e=t.name||t.email||"";if(!e)return"?";const s=e.split(/\s+/).filter(Boolean);return s.length===0?"?":s.length===1?s[0].slice(0,2).toUpperCase():(s[0][0]+s[s.length-1][0]).toUpperCase()}_renderStatusSection(){const t=this.selectedStatus.length>0;return c`
      <div class="filter-section">
        <button
          class="clear-btn"
          ?disabled=${!t}
          @click=${this._clearStatus}
        >${this.t("clearAll","Clear all")}</button>

        <span class="section-label">${this.t("approvalStatus","Status")}</span>

        <!-- Condition -->
        <span class="section-label condition-label">${this.t("condition","Condition")}</span>
        <ap-radio-group
          direction="horizontal"
          .options=${Qa.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}
          .value=${this.statusOperator}
          ?disabled=${this._statusHasOnlyEmptyValues}
          @ap-change=${this._handleStatusOperator}
        ></ap-radio-group>

        <!-- Empty / Not empty checkboxes -->
        <div class="options-list short mt-12">
          ${ii.map(e=>c`
              <ap-checkbox
                ?checked=${this.selectedStatus.includes(e.value)}
                @ap-toggle=${()=>this._toggleStatus(e.value)}
              >${this.t(e.labelKey,e.label)}</ap-checkbox>
            `)}
        </div>

        <div class="separator"></div>

        <!-- Status options -->
        <div class="options-list short">
          ${Qn.map(e=>c`
              <ap-checkbox
                ?checked=${this.selectedStatus.includes(e.value)}
                @ap-toggle=${()=>this._toggleStatus(e.value)}
              >
                <span class="status-icon-label">
                  <ap-icon name=${e.icon} .size=${16} ${B({color:e.iconColor})}></ap-icon>
                  ${this.t(e.labelKey,e.label)}
                </span>
              </ap-checkbox>
            `)}
        </div>
      </div>
    `}_renderUserItem(t,e,s){return c`
      <div class="user-item" @click=${s}>
        <ap-checkbox ?checked=${e}></ap-checkbox>
        <span class="user-avatar">
          ${t.avatarUrl?c`<img src=${t.avatarUrl} alt="" />`:c`<span>${this._getInitials(t)}</span>`}
        </span>
        <span class="user-text">
          <span class="user-name">${t.name}</span>
          ${t.email?c`<span class="user-email">${t.email}</span>`:v}
        </span>
      </div>
    `}_renderUserSelectedChips(t,e,s){return e.length===0?v:c`
      <div class="chips-wrap">
        ${e.map(i=>{const a=t.find(r=>r.uuid===i);return a?c`
            <div class="chip">
              <span class="user-chip-avatar">
                ${a.avatarUrl?c`<img src=${a.avatarUrl} alt="" />`:c`<span>${this._getInitials(a)}</span>`}
              </span>
              <span class="chip-label">${a.name}</span>
              <button class="chip-remove" @click=${()=>s(i)}>
                <ap-icon name="close" .size=${10}></ap-icon>
              </button>
            </div>
          `:v})}
      </div>
    `}_renderUserPickerSection(t){const e=t.selectedValues.length>0,s=this._filterUsers(t.users,t.search);return c`
      <div class="filter-section">
        <button
          class="clear-btn"
          ?disabled=${!e}
          @click=${t.onClear}
        >${this.t("clearAll","Clear all")}</button>

        <span class="section-label">${t.title}</span>

        <!-- Condition -->
        <span class="section-label condition-label">${this.t("condition","Condition")}</span>
        <ap-radio-group
          direction="horizontal"
          .options=${Qa.map(i=>({...i,label:this.t(i.labelKey,i.label)}))}
          .value=${t.operator}
          @ap-change=${t.onOperatorChange}
        ></ap-radio-group>

        ${this._renderUserSelectedChips(t.users,t.selectedValues,t.onToggle)}

        <div class="search-wrapper mt-12">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${t.searchPlaceholder}
            .value=${t.search}
            @input=${t.onSearchInput}
          />
          ${t.search?c`
                <button class="search-clear" @click=${t.onSearchClear}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:v}
        </div>

        <div class="options-list users-list">
          ${s.length===0?c`<div class="no-results">${this.t("noUsersFound","No users found")}</div>`:s.map(i=>this._renderUserItem(i,t.selectedValues.includes(i.uuid),()=>t.onToggle(i.uuid)))}
        </div>
      </div>
    `}_renderApproverSection(){return this._renderUserPickerSection({title:this.t("approver","Approver"),searchPlaceholder:this.t("searchApproverPlaceholder","Search approvers"),users:this.approverUsers,selectedValues:this.approverValues,operator:this.approverOperator,search:this._approverSearch,onClear:()=>this._clearApprover(),onOperatorChange:t=>this._handleApproverOperator(t),onSearchInput:t=>this._onApproverSearchInput(t),onSearchClear:()=>this._clearApproverSearch(),onToggle:t=>this._toggleApprover(t)})}_renderRequesterSection(){return this._renderUserPickerSection({title:this.t("requester","Requester"),searchPlaceholder:this.t("searchRequesterPlaceholder","Search requesters"),users:this.requesterUsers,selectedValues:this.requesterValues,operator:this.requesterOperator,search:this._requesterSearch,onClear:()=>this._clearRequester(),onOperatorChange:t=>this._handleRequesterOperator(t),onSearchInput:t=>this._onRequesterSearchInput(t),onSearchClear:()=>this._clearRequesterSearch(),onToggle:t=>this._toggleRequester(t)})}_renderDueDateSection(){const t=!!this.dueDatePreset||!!this.dueDateFrom||!!this.dueDateTo;return c`
      <div class="filter-section">
        <button
          class="clear-btn"
          ?disabled=${!t}
          @click=${this._clearDueDate}
        >${this.t("clearAll","Clear all")}</button>

        <span class="section-label">${this.t("dueDate","Due date")}</span>

        <!-- Empty / Not empty radio buttons -->
        <ap-radio-group
          clearable
          .options=${ii.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}
          .value=${this.dueDatePreset===Fe||this.dueDatePreset===Oe?this.dueDatePreset:""}
          @ap-change=${this._handleDueDatePreset}
        ></ap-radio-group>

        <div class="separator"></div>

        <!-- Date range options -->
        <ap-radio-group
          clearable
          columns="2"
          .options=${Er.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}
          .value=${this.dueDatePreset!==Fe&&this.dueDatePreset!==Oe?this.dueDatePreset:""}
          @ap-change=${this._handleDueDatePreset}
        ></ap-radio-group>

        <!-- Date inputs -->
        ${this._dueDateNeedsInputs?c`
            <div class="grid-2 mt-12">
              ${this.dueDatePreset!=="before"?c`
                  <div class="date-input-col">
                    <span class="input-label">${this.t("startDate","Start date")}</span>
                    <input
                      class="filter-input"
                      type="date"
                      .value=${this.dueDateFrom}
                      @change=${this._handleDueDateFrom}
                    />
                  </div>
                `:v}
              ${this.dueDatePreset!=="after"&&this.dueDatePreset!=="specific"?c`
                  <div class="date-input-col">
                    <span class="input-label">${this.t("endDate","End date")}</span>
                    <input
                      class="filter-input"
                      type="date"
                      .value=${this.dueDateTo}
                      @change=${this._handleDueDateTo}
                    />
                  </div>
                `:v}
            </div>
          `:v}
      </div>
    `}render(){return c`
      <div class="filter-content">
        ${this._renderStatusSection()}
        ${this._showApproverSection?c`<div class="separator"></div>${this._renderApproverSection()}`:v}
        ${this._showRequesterSection?c`<div class="separator"></div>${this._renderRequesterSection()}`:v}
        <div class="separator"></div>
        ${this._renderDueDateSection()}
      </div>
    `}};re.styles=[me,st,I`
    .options-list.short {
      max-height: none;
    }
    .date-input-col {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .date-input-col input[type="date"] {
      width: 100%;
    }
    .condition-label {
      font-weight: 500;
      margin-bottom: 8px;
    }
    .mt-12 {
      margin-top: 12px;
    }
    .status-icon-label {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .users-list {
      max-height: 220px;
      overflow-y: auto;
      overscroll-behavior: contain;
    }
    .user-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 6px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }
    .user-item:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .user-avatar {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      flex-shrink: 0;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      overflow: hidden;
      font-size: 0.75rem;
      font-weight: 500;
    }
    .user-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .user-text {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      line-height: 1.2;
    }
    .user-name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .user-email {
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .user-chip-avatar {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      flex-shrink: 0;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      overflow: hidden;
      font-size: 0.625rem;
      font-weight: 500;
    }
    .user-chip-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `];ue([f({attribute:!1})],re.prototype,"t",2);ue([f({type:Array})],re.prototype,"selectedStatus",2);ue([f()],re.prototype,"statusOperator",2);ue([f({type:Array})],re.prototype,"approverValues",2);ue([f()],re.prototype,"approverOperator",2);ue([f({type:Array})],re.prototype,"approverUsers",2);ue([f({type:Array})],re.prototype,"requesterValues",2);ue([f()],re.prototype,"requesterOperator",2);ue([f({type:Array})],re.prototype,"requesterUsers",2);ue([f()],re.prototype,"dueDateKind",2);ue([f()],re.prototype,"dueDatePreset",2);ue([f()],re.prototype,"dueDateFrom",2);ue([f()],re.prototype,"dueDateTo",2);ue([w()],re.prototype,"_approverSearch",2);ue([w()],re.prototype,"_requesterSearch",2);re=ue([R("ap-filter-approval")],re);var Sc=Object.defineProperty,Cc=Object.getOwnPropertyDescriptor,je=(t,e,s,i)=>{for(var a=i>1?void 0:i?Cc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Sc(e,s,a),a};const Ac=300;function Ec(t){return t.filter(e=>e.toLowerCase().includes("*")||!t.some(s=>s.toLowerCase().includes("*")&&e.toLowerCase().startsWith(s.slice(0,-1).toLowerCase())))}let Te=class extends O{constructor(){super(...arguments),this.selected=[],this.t=(t,e)=>typeof e=="string"?e:t,this._search="",this._debouncedSearch="",this._products=[],this._isLoading=!1,this._showAddList=!1,this._addListText=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var t;return(t=this._searchInput)==null?void 0:t.focus()})}disconnectedCallback(){super.disconnectedCallback(),this._debounceTimer&&clearTimeout(this._debounceTimer)}get _isSearching(){return this._debouncedSearch.length>0}_emit(t){const e=Ec(t);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:C.PRODUCT_REF,values:e,operator:K.IS},bubbles:!0,composed:!0}))}_toggle(t){const s=this.selected.includes(t)?this.selected.filter(i=>i!==t):[...this.selected,t];this._emit(s)}_remove(t){this._emit(this.selected.filter(e=>e!==t))}_clearAll(){this._emit([]),this._search="",this._debouncedSearch="",this._products=[]}_onSearchInput(t){const e=t.target.value;this._search=e,this._debounceTimer&&clearTimeout(this._debounceTimer),this._debounceTimer=setTimeout(()=>{const s=e.trim().toLowerCase();this._debouncedSearch=s,s?this._fetchProducts(s):(this._products=[],this._isLoading=!1)},Ac)}_clearSearch(){this._search="",this._debouncedSearch="",this._products=[],this._isLoading=!1,this._debounceTimer&&clearTimeout(this._debounceTimer)}async _fetchProducts(t){if(this.apiClient){this._isLoading=!0;try{const e=await this.apiClient.request("/products",{q:`reference~^${t}`});this._debouncedSearch===t&&(this._products=e.products??[])}catch{this._debouncedSearch===t&&(this._products=[])}finally{this._debouncedSearch===t&&(this._isLoading=!1)}}}_openAddList(){this._showAddList=!0,this._addListText=""}_closeAddList(){this._showAddList=!1,this._addListText=""}_onAddListInput(t){this._addListText=t.target.value}_onAddListKeydown(t){t.key==="Enter"&&!t.shiftKey&&t.stopPropagation()}_submitAddList(){const t=this._addListText.split(`
`).map(e=>e.trim()).filter(e=>e!=="");if(t.length>0){const e=new Set(this.selected),s=[...this.selected,...t.filter(i=>!e.has(i))];this._emit(s)}this._closeAddList()}_renderProductItem(t){const e=this.selected.includes(t);return c`
      <div
        class="product-item"
        @click=${()=>this._toggle(t)}
      >
        <ap-checkbox ?checked=${e}></ap-checkbox>
        <span class="product-name">${t}</span>
      </div>
    `}render(){const t=this.selected.length===0;return c`
      <div class="filter-content">
        <div class="filter-header">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="product-search"
            type="text"
            .placeholder=${this.t("searchProductRefsPlaceholder","Search product references")}
            .value=${this._search}
            @input=${this._onSearchInput}
          />
          ${this._search?c`
                <button class="search-clear" @click=${this._clearSearch}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:v}
        </div>

        <!-- Clear all (when searching and has selection) -->
        ${this._isSearching&&!t?c`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  @click=${this._clearAll}
                >${this.t("clearAll","Clear all")}</button>
              </div>
            `:v}

        <!-- Selected chips (when not searching) -->
        ${!this._isSearching&&this.selected.length>0?c`
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("selected","Selected")}</span>
                  <button
                    class="clear-btn"
                    @click=${this._clearAll}
                  >${this.t("clearAll","Clear all")}</button>
                </div>
                <div class="chips-wrap">
                  ${this.selected.map(e=>c`
                      <div class="chip">
                        <span class="chip-label">${e}</span>
                        <button class="chip-remove" @click=${()=>this._remove(e)}>
                          <ap-icon name="close" .size=${10}></ap-icon>
                        </button>
                      </div>
                    `)}
                </div>
              </div>
            `:v}

        <!-- Search results -->
        ${this._isSearching?c`
              <div class="filter-section">
                <span class="section-label">${this.t("productReferences","Product references")}</span>
                <div class="options-list">
                  <!-- Wildcard "Select all" option when multiple results -->
                  ${this._products.length>1?this._renderProductItem(`${this._search.trim()}*`):v}
                  ${this._products.map(({ref:e})=>this._renderProductItem(e))}
                </div>
              </div>
            `:v}

        <!-- Placeholder (when not searching) -->
        ${this._isSearching?v:c`
              <div class="placeholder">
                ${t?c`<ap-icon name="box" .size=${40} ${B({color:"var(--ap-border, oklch(92.86% 0.009 247.92))","margin-bottom":"4px"})}></ap-icon>`:v}
                <div class="placeholder-title">${this.t("findProductRef","Find product reference")}</div>
                <div class="placeholder-text">${this.t("productRefSearchHint","By using the search or pressing the button below to import the product references list.")}</div>
                <button class="add-list-btn" @click=${this._openAddList}>
                  <ap-icon name="plus" .size=${14}></ap-icon>
                  ${this.t("addList","Add list")}
                </button>
              </div>
            `}

        <!-- Loading skeleton -->
        ${this._isLoading?c`
              <div class="loading-skeleton">
                <div class="skeleton-item"></div>
                <div class="skeleton-item"></div>
                <div class="skeleton-item"></div>
              </div>
            `:v}

        <!-- No results -->
        ${this._isSearching&&!this._isLoading&&this._products.length===0?c`<div class="no-results">${this.t("noResultsFound","No results found")}</div>`:v}
      </div>

      <!-- Add List Dialog -->
      ${this._showAddList?c`
            <div class="dialog-overlay" @click=${e=>{e.target===e.currentTarget&&this._closeAddList()}}>
              <div class="dialog">
                <div class="dialog-header">${this.t("addProductRefsList","Add products references list")}</div>
                <div class="dialog-body">
                  <div class="info-alert" ${B({"margin-top":"0"})}>
                    <ap-icon name="info" .size=${14}></ap-icon>
                    <span>${this.t("wildcardInfo",'Use "*" to select all references starting with your text.')}</span>
                  </div>
                  <label class="input-label" ${B({"margin-bottom":"0","font-weight":"400",color:"var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89))"})}>${this.t("productReferences","Product references")}</label>
                  <textarea
                    class="dialog-textarea"
                    .placeholder=${this.t("productRefsTextareaPlaceholder","Enter product references separated by new lines")}
                    .value=${this._addListText}
                    @input=${this._onAddListInput}
                    @keydown=${this._onAddListKeydown}
                  ></textarea>
                </div>
                <div class="dialog-footer">
                  <button class="dialog-btn dialog-btn-cancel" @click=${this._closeAddList}>${this.t("cancel","Cancel")}</button>
                  <button class="dialog-btn dialog-btn-primary" @click=${this._submitAddList}>${this.t("continue","Continue")}</button>
                </div>
              </div>
            </div>
          `:v}
    `}};Te.styles=[me,st,I`
    .product-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }

    .product-item:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    .product-name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* Sticky search within popover scroll */
    .filter-header {
      position: sticky;
      top: -10px;
      z-index: 2;
      background: var(--ap-card, oklch(1 0 0));
      margin: -10px -8px 10px;
    }

    .filter-header .search-icon {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      pointer-events: none;
    }

    .product-search {
      width: 100%;
      padding: 8px 32px 8px 32px;
      border: none;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: transparent;
      outline: none;
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }

    .product-search::placeholder {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      font-weight: 400;
    }

    .search-clear {
      top: 50%;
      transform: translateY(-50%);
      right: 8px;
    }

    .options-list {
      max-height: none;
      overflow-y: visible;
    }

    .placeholder {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 16px 8px 20px;
      gap: 4px;
    }

    .placeholder-title {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }

    .placeholder-text {
      font-size: 0.8125rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }

    .add-list-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-top: 8px;
      padding: 6px 14px;
      border: none;
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: inherit;
      background: none;
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      cursor: pointer;
      transition: background 150ms;
    }

    .add-list-btn:hover {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.08));
    }

    /* Add list dialog overlay */
    .dialog-overlay {
      position: fixed;
      inset: 0;
      z-index: 1360;
      background: rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .dialog {
      background: var(--ap-card, oklch(1 0 0));
      border-radius: var(--ap-radius, 8px);
      box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1);
      width: 420px;
      max-width: 90vw;
      padding: 0;
    }

    .dialog-header {
      padding: 16px 20px;
      font-size: 1rem;
      font-weight: 600;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      text-align: center;
    }

    .dialog-body {
      padding: 16px 20px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .dialog-body .info-alert {
      margin-bottom: 14px;
    }

    .dialog-textarea {
      width: 100%;
      min-height: 150px;
      max-height: 300px;
      padding: 8px 10px;
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: inherit;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-background, oklch(1 0 0));
      resize: vertical;
      outline: none;
    }

    .dialog-textarea:focus {
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }

    .dialog-textarea::placeholder {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }

    .dialog-footer {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      padding: 12px 20px;
      border-top: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }

    .dialog-btn {
      padding: 8px 16px;
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: inherit;
      cursor: pointer;
      transition: background 150ms;
    }

    .dialog-btn-cancel {
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      background: var(--ap-background, oklch(1 0 0));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }

    .dialog-btn-cancel:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    .dialog-btn-primary {
      border: none;
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: var(--ap-primary-foreground, oklch(1 0 0));
    }

    .dialog-btn-primary:hover {
      opacity: 0.9;
    }

    .loading-skeleton {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 8px 0;
    }

    .skeleton-item {
      height: 32px;
      border-radius: var(--ap-radius-sm, 6px);
      background: linear-gradient(90deg, var(--ap-muted, oklch(0.974 0.006 239.819)) 25%, #e8e8ea 50%, var(--ap-muted, oklch(0.974 0.006 239.819)) 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }

    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }

    @media (prefers-reduced-motion: reduce) {
      .skeleton-item { animation: none; }
    }

    .wildcard-tooltip {
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      margin-left: 4px;
    }
  `];je([f({type:Array})],Te.prototype,"selected",2);je([f({attribute:!1})],Te.prototype,"apiClient",2);je([f({attribute:!1})],Te.prototype,"t",2);je([ut(".product-search")],Te.prototype,"_searchInput",2);je([w()],Te.prototype,"_search",2);je([w()],Te.prototype,"_debouncedSearch",2);je([w()],Te.prototype,"_products",2);je([w()],Te.prototype,"_isLoading",2);je([w()],Te.prototype,"_showAddList",2);je([w()],Te.prototype,"_addListText",2);Te=je([R("ap-filter-product-ref")],Te);var Fc=Object.defineProperty,Oc=Object.getOwnPropertyDescriptor,Y=(t,e,s,i)=>{for(var a=i>1?void 0:i?Oc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Fc(e,s,a),a};let G=class extends O{constructor(){super(...arguments),this.totalCount=0,this.totalFolderCount=0,this.isLoading=!1,this.showUpload=!1,this.showCreateFolder=!1,this.showFilters=!0,this.countLabel="",this.sortBy="created_at",this.sortDirection="desc",this.sortOptions=Wi,this.filters={metadata:{pinned:[],visible:[],applied:{}},pinned:[],visible:[],applied:{}},this.labels=[],this.tags=[],this.fileTypes=[],this.metadataFields=[],this.pinnedFilters=[],this.forcedFilterKeys=[],this.approverUsers=[],this.requesterUsers=[],this.t=(t,e)=>typeof e=="string"?e:t,this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null,this._outsideClickHandler=t=>{const e=t.composedPath();if(this._externalTrigger&&e.some(r=>{var o;return r instanceof HTMLElement&&r.classList.contains("chip")&&((o=r.closest)==null?void 0:o.call(r,"ap-filters-bar"))}))return;const s=this._openFilter&&e.some(a=>a instanceof HTMLElement?a.classList.contains("popover-anchor")||a.classList.contains("popover-panel"):!1),i=(this._showDropdown||this._showMetadataSelector)&&e.some(a=>a instanceof HTMLElement&&(a.classList.contains("dropdown-menu")||a.classList.contains("filter-dropdown")||a.classList.contains("metadata-selector-overlay")));s||i||(this._openFilter&&(this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null),(this._showDropdown||this._showMetadataSelector)&&(this._showDropdown=!1,this._showMetadataSelector=!1))}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this._outsideClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._outsideClickHandler)}updated(t){if((t.has("_openFilter")||t.has("_externalTrigger")||t.has("_openMetadataField"))&&this.dispatchEvent(new CustomEvent("filter-panel-change",{detail:{key:this._externalTrigger?this._openFilter:null,metadataFieldKey:this._externalTrigger?this._openMetadataField:null},bubbles:!0,composed:!0})),this._externalTrigger&&this._externalLeft!=null&&(t.has("_openFilter")||t.has("_externalLeft")||t.has("_openMetadataField"))){const e=this.renderRoot.querySelector(".popover-panel");if(e){const s=e.closest(".popover-anchor"),i=s?s.offsetWidth:this.offsetWidth,a=e.offsetWidth;this._externalLeft+a>i-8&&(e.style.left=`${Math.max(8,i-a-8)}px`)}}}_closeAllDropdowns(){var t;this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null,(t=this._sortDropdown)==null||t.close()}_handleUploadClick(){this.dispatchEvent(new CustomEvent("upload-click",{bubbles:!0,composed:!0}))}_handleCreateFolderClick(){this.dispatchEvent(new CustomEvent("create-folder-click",{bubbles:!0,composed:!0}))}_toggleDropdown(){const t=this._showDropdown;this._closeAllDropdowns(),this._showDropdown=!t}_toggleMetadataSelector(){this._showMetadataSelector=!this._showMetadataSelector}closeFilterPanel(){this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}openFilterPanel(t,e=!1,s,i){if(e&&this._externalTrigger&&this._openFilter===t&&!this._openMetadataField){this.closeFilterPanel();return}const a=t==="approval"&&this._isApprovalActive();if(!e&&!this._isFilterActive(t)&&!a){this._showDropdown=!1,this._showMetadataSelector=!1,this.dispatchEvent(new CustomEvent("filter-pending",{detail:{key:t},bubbles:!0,composed:!0}));return}this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=t,this._openMetadataField=null,this._externalTrigger=e,this._externalLeft=s??null,this._externalTop=i??null}_handleSortOpen(){this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}_handleSort(t){this.dispatchEvent(new CustomEvent("sort-change",{detail:t.detail,bubbles:!0,composed:!0}))}_toggleSortDirection(){const t=this.sortDirection==="asc"?"desc":"asc";this.dispatchEvent(new CustomEvent("sort-direction-change",{detail:{value:t},bubbles:!0,composed:!0}))}_isFilterActive(t){return t in this.filters.applied&&this.filters.applied[t]!==void 0}_isApprovalActive(){const t=this.filters.applied;return j.STATUS in t||j.APPROVER in t||j.REQUESTOR in t||j.DUE_DATE in t}_handleFilterChange(t){t.stopPropagation();const{key:e,values:s,operator:i}=t.detail;this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:e,values:s,operator:i},bubbles:!0,composed:!0}))}_handleMetadataFilterChange(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-filter-change",{detail:t.detail,bubbles:!0,composed:!0}))}_handleMetadataFieldToggle(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-field-toggle",{detail:t.detail,bubbles:!0,composed:!0}))}_handleMetadataFieldSelect(t){t.stopPropagation(),this._openMetadataField=t.detail.fieldKey}_handleMetadataSelectorFieldSelect(t){var s;t.stopPropagation();const e=t.detail.fieldKey;if(this._showMetadataSelector=!1,this._showDropdown=!1,!(e in(((s=this.filters.metadata)==null?void 0:s.applied)||{}))){this.dispatchEvent(new CustomEvent("filter-pending",{detail:{metadataFieldKey:e},bubbles:!0,composed:!0}));return}this._openFilter="metadata",this._openMetadataField=e}_handleMetadataPin(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-pin",{detail:t.detail,bubbles:!0,composed:!0}))}openMetadataFieldPanel(t,e=!1,s,i){if(e&&this._externalTrigger&&this._openMetadataField===t){this.closeFilterPanel();return}this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter="metadata",this._openMetadataField=t,this._externalTrigger=e,this._externalLeft=s??null,this._externalTop=i??null}_getMetadataFieldLabel(t){for(const e of this.metadataFields)if(`${ui[e.type]||""}${e.key}`===t)return e.label;return t}_togglePin(t,e){e.stopPropagation();const s=this.pinnedFilters.includes(t);this.dispatchEvent(new CustomEvent("filter-pin",{detail:{key:t,pinned:!s},bubbles:!0,composed:!0}))}_getFilterIcon(t){const e=xs.find(s=>s.key===t);return(e==null?void 0:e.icon)||"filter"}_renderFilterContent(t){var r;const{t:e}=this,s=this.filters.applied,i=t;switch(i===j.STATUS||i===j.APPROVER||i===j.REQUESTOR||i===j.DUE_DATE?"approval":t){case"type":{const o=s.type;return c`<ap-filter-type
          .selected=${(o==null?void 0:o.values)||[]}
          .fileTypes=${this.fileTypes}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-type>`}case"tags":{const o=s.tags;return c`<ap-filter-tags
          .tags=${this.tags}
          .selected=${(o==null?void 0:o.values)||[]}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-tags>`}case"labels":{const o=s.labels;return c`<ap-filter-labels
          .labels=${this.labels}
          .selected=${(o==null?void 0:o.values)||[]}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-labels>`}case"color":{const o=s.color;return c`<ap-filter-color
          .values=${(o==null?void 0:o.values)||[]}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-color>`}case"date":{const o=s.date;return c`<ap-filter-date
          .filterKey=${"date"}
          .field=${(o==null?void 0:o.field)||"created"}
          .kind=${(o==null?void 0:o.kind)||null}
          .from=${(o==null?void 0:o.from)||""}
          .to=${(o==null?void 0:o.to)||""}
          .preset=${(o==null?void 0:o.preset)||""}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-date>`}case"asset_expiration":{const o=s.asset_expiration;return c`<ap-filter-date
          .filterKey=${"asset_expiration"}
          .field=${"asset_expiration"}
          .kind=${(o==null?void 0:o.kind)||null}
          .from=${(o==null?void 0:o.from)||""}
          .to=${(o==null?void 0:o.to)||""}
          .preset=${(o==null?void 0:o.preset)||""}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-date>`}case"size":{const o=s.size,n=((r=o==null?void 0:o.values)==null?void 0:r[0])||"",[l,d]=n.split(".."),h=l?parseFloat(l)/1e6:0,u=d?parseFloat(d)/1e6:0;return c`<ap-filter-size
          .min=${h}
          .max=${u}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-size>`}case"image":{const o=s.image,n=o&&"resolution"in o?o:null;return c`<ap-filter-image
          .selectedResolution=${(n==null?void 0:n.resolution)||[]}
          .selectedOrientation=${(n==null?void 0:n.orientation)||[]}
          .selectedFaces=${(n==null?void 0:n.faces)||[]}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-image>`}case"approval":{const o=s.approval_status,n=s.task_approver,l=s.task_requester,d=s.task_duedate;return c`<ap-filter-approval
          .selectedStatus=${(o==null?void 0:o.values)||[]}
          .statusOperator=${(o==null?void 0:o.operator)||":="}
          .approverValues=${(n==null?void 0:n.values)||[]}
          .approverOperator=${(n==null?void 0:n.operator)||":="}
          .approverUsers=${this.approverUsers}
          .requesterValues=${(l==null?void 0:l.values)||[]}
          .requesterOperator=${(l==null?void 0:l.operator)||":="}
          .requesterUsers=${this.requesterUsers}
          .dueDateKind=${(d==null?void 0:d.kind)??null}
          .dueDatePreset=${(d==null?void 0:d.preset)||""}
          .dueDateFrom=${(d==null?void 0:d.from)||""}
          .dueDateTo=${(d==null?void 0:d.to)||""}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-approval>`}case"metadata":return this._openMetadataField?c`<ap-filter-metadata
            mode="field"
            .activeFieldKey=${this._openMetadataField}
            .fields=${this.metadataFields}
            .appliedMetadata=${this.filters.metadata.applied}
            .visibleFields=${this.filters.metadata.visible}
            .pinnedFields=${this.filters.metadata.pinned}
            .apiClient=${this.apiClient}
            .t=${e}
            @metadata-filter-change=${this._handleMetadataFilterChange}
            @metadata-field-toggle=${this._handleMetadataFieldToggle}
          ></ap-filter-metadata>`:c`<ap-filter-metadata
          mode="selector"
          .fields=${this.metadataFields}
          .appliedMetadata=${this.filters.metadata.applied}
          .visibleFields=${this.filters.metadata.visible}
          .pinnedFields=${this.filters.metadata.pinned}
          .apiClient=${this.apiClient}
          .t=${e}
          @metadata-filter-change=${this._handleMetadataFilterChange}
          @metadata-field-toggle=${this._handleMetadataFieldToggle}
          @metadata-field-select=${this._handleMetadataFieldSelect}
          @metadata-pin=${this._handleMetadataPin}
        ></ap-filter-metadata>`;case"product_ref":{const o=s.product_ref;return c`<ap-filter-product-ref
          .selected=${(o==null?void 0:o.values)||[]}
          .apiClient=${this.apiClient}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-product-ref>`}default:return v}}_renderFilterButton(t){const{t:e}=this,s=t.key==="metadata",i=t.key==="approval",a=s?Object.keys(this.filters.metadata.applied).length>0:i?this._isApprovalActive():this._isFilterActive(t.key),r=this.pinnedFilters.includes(t.key),o=c`
      <button
        class="filter-btn ${a?"active":""} ${r?"pinned":""}"
        @click=${()=>s?this._toggleMetadataSelector():this.openFilterPanel(t.key)}
      >
        <span class="filter-btn-icon">
          <ap-icon name=${t.icon} .size=${18}></ap-icon>
        </span>
        <span class="filter-btn-label">
          ${e(t.labelKey,t.label)}
        </span>
        ${s?c`<span class="submenu-chevron"><ap-icon name="chevron-right" .size=${14}></ap-icon></span>`:c`
              <span
                class="pin-btn ${r?"pinned":""}"
                title=${r?e("unpinFilter","Unpin filter"):e("pinFilter","Pin filter")}
                @click=${n=>this._togglePin(t.key,n)}
              >
                <ap-icon name="pin" .size=${14}></ap-icon>
              </span>
            `}
      </button>
    `;return s?c`
      <div class="filter-btn-wrapper">
        ${o}
        ${this._showMetadataSelector?c`
          <div class="metadata-selector-overlay">
            <ap-filter-metadata
              mode="selector"
              .fields=${this.metadataFields}
              .appliedMetadata=${this.filters.metadata.applied}
              .visibleFields=${this.filters.metadata.visible}
              .pinnedFields=${this.filters.metadata.pinned}
              .t=${this.t}
              @metadata-field-select=${this._handleMetadataSelectorFieldSelect}
              @metadata-field-toggle=${this._handleMetadataFieldToggle}
              @metadata-pin=${this._handleMetadataPin}
            ></ap-filter-metadata>
          </div>
        `:v}
      </div>
    `:o}render(){const{t}=this,e=Object.keys(this.filters.applied).length+Object.keys(this.filters.metadata.applied).length;return c`
      <div class="toolbar-row">
        ${this.isLoading?c`<span class="count-skeleton"></span>`:c`<span class="count">${this.countLabel||[this.totalFolderCount>0?t("folderCount",{count:this.totalFolderCount,defaultValue_one:"{{count}} folder",defaultValue_other:"{{count}} folders"}):"",this.totalCount>0||this.totalFolderCount===0?t("assetCount",{count:this.totalCount,defaultValue_one:"{{count}} asset",defaultValue_other:"{{count}} assets"}):""].filter(Boolean).join(", ")}</span>`}
        <span class="spacer"></span>
        <div class="controls">
          ${this.showFilters?c`
          <div class="filter-dropdown">
            <button class="add-btn ${this._showDropdown?"open":""}" @click=${this._toggleDropdown}>
              <ap-icon name="filter" .size=${16}></ap-icon>
              ${t("filters","Filters")}
              ${e>0?c`<span class="filter-count">${e}</span>`:c`<ap-icon name="chevron-down" .size=${16}></ap-icon>`}
            </button>
            ${this._showDropdown?c`
              <div class="dropdown-menu">
                ${xs.filter(s=>!this.forcedFilterKeys.includes(s.key)).map(s=>this._renderFilterButton(s))}
              </div>
            `:v}
          </div>
          `:v}
          <ap-dropdown
            variant="borderless"
            .label=${t("sort","Sort")}
            .value=${this.sortBy}
            .options=${this.sortOptions.map(s=>({...s,label:t(s.labelKey,s.label)}))}
            @ap-change=${this._handleSort}
            @dropdown-open=${this._handleSortOpen}
          ></ap-dropdown>
          <button
            class="icon-btn"
            @click=${this._toggleSortDirection}
            aria-label=${this.sortDirection==="asc"?t("sortAscending","Sort ascending"):t("sortDescending","Sort descending")}
            title=${this.sortDirection==="asc"?t("ascending","Ascending"):t("descending","Descending")}
          >
            <ap-icon name=${this.sortDirection==="asc"?"sort-asc":"sort-desc"} .size=${18}></ap-icon>
          </button>
          ${this.showCreateFolder?c`
            <button class="new-folder-btn" @click=${this._handleCreateFolderClick}>
              <ap-icon name="folder-plus" .size=${16}></ap-icon>
              New folder
            </button>
          `:v}
          ${this.showUpload?c`
            <button class="upload-btn" @click=${this._handleUploadClick}>
              <ap-icon name="upload" .size=${16}></ap-icon>
              ${t("upload","Upload")}
            </button>
          `:v}
        </div>
      </div>
      ${this._openFilter?c`
        <div class="popover-anchor ${this._externalTrigger?"external":""}" ${B(this._externalTrigger&&this._externalTop!=null?{top:`${this._externalTop+4}px`}:null)}>
          ${this._externalTrigger?v:c`
            <div class="anchor-tab">
              ${this._openFilter==="metadata"&&this._openMetadataField?c`
                    <button class="anchor-back" @click=${s=>{s.stopPropagation(),this._openMetadataField=null}} title="Back to fields">
                      <ap-icon name="chevron-left" .size=${14}></ap-icon>
                    </button>
                    ${this._getMetadataFieldLabel(this._openMetadataField)}
                  `:c`
                    <ap-icon name=${this._getFilterIcon(this._openFilter)} .size=${16}></ap-icon>
                    ${t(ps[this._openFilter]??this._openFilter,qt[this._openFilter]||this._openFilter)}
                  `}
              <button class="anchor-close" @click=${()=>{this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}} title="Close">
                <ap-icon name="close" .size=${14}></ap-icon>
              </button>
            </div>
          `}
          <div class="popover-panel" ${B(this._externalTrigger&&this._externalLeft!=null?{left:`${this._externalLeft}px`}:null)}>
            ${this._renderFilterContent(this._openFilter)}
          </div>
        </div>
      `:v}
    `}};G.styles=I`
    :host {
      display: block;
      padding: 8px 20px 6px;
    }
    .toolbar-row {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .count {
      font-size: 0.8125rem;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      white-space: nowrap;
    }
    .count-skeleton {
      display: inline-block;
      width: 80px;
      height: 14px;
      border-radius: 4px;
      background: linear-gradient(90deg, var(--ap-muted, oklch(0.974 0.006 239.819)) 25%, #e8e8ea 50%, var(--ap-muted, oklch(0.974 0.006 239.819)) 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }
    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    @media (prefers-reduced-motion: reduce) {
      .count-skeleton { animation: none; }
    }
    .spacer {
      flex: 1;
    }
    .controls {
      display: flex;
      align-items: center;
      gap: 0;
      min-width: 0;
    }

    /* Filter dropdown trigger */
    .filter-dropdown {
      position: relative;
      display: inline-block;
    }
    .add-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      height: 36px;
      padding: 0 14px;
      border: none;
      border-radius: 6px;
      font-size: 0.875rem;
      font-weight: 500;
      background: none;
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      cursor: pointer;
      white-space: nowrap;
      transition: background 150ms;
    }
    .add-btn:hover {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.08));
    }
    .add-btn ap-icon {
      transition: transform 200ms;
    }
    .add-btn.open ap-icon:last-child {
      transform: rotate(180deg);
    }
    .add-btn .filter-count {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 18px;
      height: 18px;
      padding: 0 5px;
      border-radius: 9px;
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: var(--ap-primary-foreground, oklch(1 0 0));
      font-size: 0.6875rem;
      font-weight: 600;
      line-height: 1;
    }
    .dropdown-menu {
      position: absolute;
      top: calc(100% + 4px);
      right: 0;
      z-index: 50;
      min-width: 480px;
      background: var(--ap-card, oklch(1 0 0));
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius, 8px);
      box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
      padding: 16px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      overscroll-behavior: contain;
    }
    .filter-btn-wrapper {
      position: relative;
      display: flex;
    }
    .filter-btn-wrapper .filter-btn {
      flex: 1;
    }
    .metadata-selector-overlay {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      z-index: 60;
      width: 280px;
      max-height: 400px;
      overflow-y: auto;
      background: var(--ap-card, oklch(1 0 0));
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius, 8px);
      box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    }

    /* Filter button in dropdown */
    .filter-btn {
      display: flex;
      align-items: center;
      text-align: left;
      gap: 8px;
      padding: 8px 12px;
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius, 8px);
      background: var(--ap-background, oklch(1 0 0));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      font-size: 0.9375rem;
      cursor: pointer;
      transition: all 150ms;
      min-height: 40px;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    }
    .filter-btn:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      border-color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .filter-btn.active {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.08));
      border-color: var(--ap-primary-20, oklch(0.578 0.198 268.129 / 0.2));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .filter-btn.active:hover {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.12));
    }
    .filter-btn.pinned {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.08));
      border-color: var(--ap-primary-20, oklch(0.578 0.198 268.129 / 0.2));
    }
    .filter-btn.pinned:hover {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.12));
    }
    .filter-btn-icon {
      display: flex;
      align-items: center;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      flex-shrink: 0;
    }
    .filter-btn.active .filter-btn-icon,
    .filter-btn.pinned .filter-btn-icon {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .filter-btn-label {
      display: flex;
      align-items: center;
      gap: 4px;
      flex: 1;
      min-width: 0;
    }
    .filter-btn-label ap-icon {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .pin-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border: none;
      background: none;
      cursor: pointer;
      padding: 0;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      border-radius: 4px;
      flex-shrink: 0;
      margin-left: auto;
      transition: all 150ms;
      opacity: 0;
    }
    .filter-btn:hover .pin-btn,
    .pin-btn.pinned {
      opacity: 1;
    }
    .pin-btn:hover {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.08));
    }
    .pin-btn.pinned {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .submenu-chevron {
      display: flex;
      align-items: center;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      margin-left: auto;
    }

    .divider {
      width: 1px;
      height: 24px;
      background: var(--ap-border, oklch(92.86% 0.009 247.92));
    }
    .icon-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border: 1px solid transparent;
      border-radius: var(--ap-radius-sm, 6px);
      background: none;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      cursor: pointer;
    }
    .icon-btn:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .icon-btn:focus-visible {
      outline: 2px solid var(--ap-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: -2px;
    }
    .upload-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-left: 4px;
      padding: 6px 14px;
      border: none;
      border-radius: 6px;
      font-size: 0.875rem;
      font-weight: 500;
      background: var(--ap-primary, oklch(0.65 0.19 258));
      color: var(--ap-primary-foreground, #fff);
      cursor: pointer;
      white-space: nowrap;
      transition: opacity 150ms;
    }
    .upload-btn:hover {
      opacity: 0.9;
    }
    .upload-btn:focus-visible {
      outline: 2px solid var(--ap-ring, oklch(0.65 0.19 258));
      outline-offset: 2px;
    }

    .new-folder-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-left: 4px;
      padding: 6px 14px;
      border: 1px solid var(--ap-primary, oklch(0.578 0.198 268.129));
      border-radius: 6px;
      font-size: 0.875rem;
      font-weight: 500;
      background: var(--ap-background, oklch(1 0 0));
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      cursor: pointer;
      white-space: nowrap;
      transition: background 150ms;
    }
    .new-folder-btn:hover {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.08));
    }
    .new-folder-btn:focus-visible {
      outline: 2px solid var(--ap-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }

    /* Popover anchor row */
    .popover-anchor {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      display: flex;
      align-items: flex-start;
      padding: 0 20px;
      z-index: 50;
    }
    .anchor-tab {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-bottom: 1px solid var(--ap-card, oklch(1 0 0));
      border-radius: 8px 8px 0 0;
      background: var(--ap-card, oklch(1 0 0));
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      position: relative;
      z-index: 51;
      margin-bottom: -1px;
    }
    .anchor-close {
      display: flex;
      align-items: center;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      transition: color 150ms;
    }
    .anchor-close:hover {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .anchor-back {
      display: flex;
      align-items: center;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      transition: color 150ms;
    }
    .anchor-back:hover {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .popover-panel {
      position: absolute;
      top: 100%;
      left: 20px;
      z-index: 50;
      width: 360px;
      max-height: 400px;
      overflow-x: hidden;
      overflow-y: auto;
      overscroll-behavior: contain;
      background: var(--ap-card, oklch(1 0 0));
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: 0 8px 8px 8px;
      box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1);
      padding: 12px;
    }
    .popover-anchor.external {
      padding: 0;
      top: 0;
    }
    .popover-anchor.external .popover-panel {
      border-radius: 8px;
      top: 0;
    }
  `;Y([f({type:Number})],G.prototype,"totalCount",2);Y([f({type:Number})],G.prototype,"totalFolderCount",2);Y([f({type:Boolean})],G.prototype,"isLoading",2);Y([f({type:Boolean})],G.prototype,"showUpload",2);Y([f({type:Boolean})],G.prototype,"showCreateFolder",2);Y([f({type:Boolean})],G.prototype,"showFilters",2);Y([f()],G.prototype,"countLabel",2);Y([f()],G.prototype,"sortBy",2);Y([f()],G.prototype,"sortDirection",2);Y([f({type:Array})],G.prototype,"sortOptions",2);Y([f({type:Object})],G.prototype,"filters",2);Y([f({type:Array})],G.prototype,"labels",2);Y([f({type:Array})],G.prototype,"tags",2);Y([f({type:Array})],G.prototype,"fileTypes",2);Y([f({type:Array})],G.prototype,"metadataFields",2);Y([f({type:Array})],G.prototype,"pinnedFilters",2);Y([f({type:Array})],G.prototype,"forcedFilterKeys",2);Y([f({type:Array})],G.prototype,"approverUsers",2);Y([f({type:Array})],G.prototype,"requesterUsers",2);Y([f({attribute:!1})],G.prototype,"apiClient",2);Y([f({attribute:!1})],G.prototype,"t",2);Y([ut("ap-dropdown")],G.prototype,"_sortDropdown",2);Y([w()],G.prototype,"_showDropdown",2);Y([w()],G.prototype,"_showMetadataSelector",2);Y([w()],G.prototype,"_openFilter",2);Y([w()],G.prototype,"_openMetadataField",2);Y([w()],G.prototype,"_externalTrigger",2);Y([w()],G.prototype,"_externalLeft",2);Y([w()],G.prototype,"_externalTop",2);G=Y([R("ap-content-toolbar")],G);var Tc=Object.defineProperty,Pc=Object.getOwnPropertyDescriptor,fe=(t,e,s,i)=>{for(var a=i>1?void 0:i?Pc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Tc(e,s,a),a};let oe=class extends O{constructor(){super(...arguments),this.appliedFilters={},this.appliedMetadata={},this.forcedFilters={},this.metadataFields=[],this.pinnedFilters=[],this.pinnedMetadataFields=[],this.tags=[],this.labels=[],this.approverUsers=[],this.requesterUsers=[],this.activeFilter=null,this.activeMetadataField=null,this.pendingFilter=null,this.pendingMetadataField=null,this.t=(t,e)=>typeof e=="string"?e:t}_mapTypeLabel(t){var i;const e=(i=si.find(a=>a.value===t))==null?void 0:i.label;if(e)return e;const s=t.indexOf("_");return s!==-1?t.slice(s+1).toUpperCase():t}_getSizeSummary(t){if(t.values.length===0)return"";const e=t.values[0],[s,i]=e.split(".."),a=s?parseFloat(s):null,r=i?parseFloat(i):null,o=n=>n>=1e3?`${(n/1e3).toFixed(n%1e3===0?0:1)} GB`:`${n} MB`;return a!==null&&r!==null?`${o(a)} – ${o(r)}`:a!==null?`> ${o(a)}`:r!==null?`< ${o(r)}`:""}_getFilterSummary(t,e){if(t.type==="string"){const s=t;if(s.values.length===0)return"";if(e===C.SIZE)return this._getSizeSummary(s);if(e===C.COLOR){const r=s.values.map(o=>o.split(" ")[0]).filter(Boolean);return r.length===0?"":r.length===1?r[0]:`${r[0]} +${r.length-1}`}const i=r=>r===Fe?this.t("empty","Empty"):r===Oe?this.t("notEmpty","Not empty"):null,a=e===C.TYPE?r=>i(r)??this._mapTypeLabel(r):e===C.TAGS?r=>{var o;return i(r)??(((o=this.tags.find(n=>n.sid===r))==null?void 0:o.label)||r)}:e===C.LABELS?r=>{var o;return i(r)??(((o=this.labels.find(n=>n.sid===r))==null?void 0:o.name)||r)}:e===j.APPROVER?r=>{var o;return i(r)??(((o=this.approverUsers.find(n=>n.uuid===r))==null?void 0:o.name)||r)}:e===j.REQUESTOR?r=>{var o;return i(r)??(((o=this.requesterUsers.find(n=>n.uuid===r))==null?void 0:o.name)||r)}:r=>i(r)??r;return s.values.length===1?a(s.values[0]):`${a(s.values[0])} +${s.values.length-1}`}if(t.type==="date")return e===j.DUE_DATE?this._getDuedateSummary(t):this._getDateSummary(t);if(typeof t=="object"&&"resolution"in t){const s=t,i=[...s.resolution,...s.orientation,...s.faces];return i.length===0?"":i.length===1?i[0]:`${i[0]} +${i.length-1}`}return""}_getDuedateSummary(t){const e=i=>i.split("T")[0],s=t.preset||"";if(s===Fe)return this.t("empty","Empty");if(s===Oe)return this.t("notEmpty","Not empty");if(t.kind==="preset"){const i=Er.find(a=>a.value===s);return i?this.t(i.labelKey,i.label):s}if(t.kind==="between"){if(t.from&&t.to)return`${e(t.from)} – ${e(t.to)}`;if(t.from)return`${this.t("afterDate","After date")}: ${e(t.from)}`;if(t.to)return`${this.t("beforeDate","Before date")}: ${e(t.to)}`}return t.kind==="after"&&t.from?`${this.t("afterDate","After date")}: ${e(t.from)}`:t.kind==="before"&&t.to?`${this.t("beforeDate","Before date")}: ${e(t.to)}`:t.kind==="specific"&&t.from?e(t.from):""}_getDateSummary(t){const e=Cr.find(l=>l.value===t.field),s=e?this.t(e.labelKey,e.label):"",i=[...Gi,...Ar],a=t.preset?i.find(l=>l.value===t.preset):null,r=a?this.t(a.labelKey,a.label):t.preset||"",o=l=>{try{return l.split("T")[0]}catch{return l}};let n="";switch(t.kind){case"preset":n=r;break;case"before":n=t.to?`${this.t("beforeDate","Before date")}: ${o(t.to)}`:r;break;case"after":n=t.from?`${this.t("afterDate","After date")}: ${o(t.from)}`:r;break;case"between":t.from&&t.to?n=`${o(t.from)} – ${o(t.to)}`:t.from?n=`${this.t("afterDate","After date")}: ${o(t.from)}`:t.to&&(n=`${this.t("beforeDate","Before date")}: ${o(t.to)}`);break;case"specific":n=t.from?o(t.from):"";break;default:n=r}return n?s?`${s}: ${n}`:n:""}_getFilterIcon(t){var e,s;return t===j.STATUS||t===j.APPROVER||t===j.REQUESTOR||t===j.DUE_DATE?((e=xs.find(i=>i.key===C.APPROVAL))==null?void 0:e.icon)||"filter":((s=xs.find(i=>i.key===t))==null?void 0:s.icon)||"filter"}_getMetadataLabel(t){const e=this._stripMetadataPrefix(t),s=this.metadataFields.find(i=>i.key===e);return(s==null?void 0:s.label)||e}_getMetadataIcon(t){const e=this._stripMetadataPrefix(t),s=this.metadataFields.find(i=>i.key===e);return s&&Gs[s.type]||"file-text"}_stripMetadataPrefix(t){for(const e of $r)if(t.startsWith(e))return t.slice(e.length);return t}_removeFilter(t){this.dispatchEvent(new CustomEvent("filter-remove",{detail:{key:t},bubbles:!0,composed:!0}))}_removeMetadataFilter(t){this.dispatchEvent(new CustomEvent("metadata-filter-remove",{detail:{fieldKey:t},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filters-clear-all",{bubbles:!0,composed:!0}))}_openFilter(t,e){const i=e.currentTarget.getBoundingClientRect();this.dispatchEvent(new CustomEvent("filter-open",{detail:{key:t,chipRect:{left:i.left,right:i.right,bottom:i.bottom,width:i.width}},bubbles:!0,composed:!0}))}_openMetadataFilter(t,e){const i=e.currentTarget.getBoundingClientRect();this.dispatchEvent(new CustomEvent("metadata-filter-open",{detail:{fieldKey:t,chipRect:{left:i.left,right:i.right,bottom:i.bottom,width:i.width}},bubbles:!0,composed:!0}))}_renderForcedChip(t,e){const{t:s}=this,i=this._getFilterSummary(e,t),a=e.type==="date";return c`
      <span class="chip forced">
        ${(a||t===C.TYPE||t===C.SIZE)&&i?c`<span class="chip-label">${i}</span>`:c`
              <span class="chip-label">${s(ps[t]??t,qt[t]||t)}</span>
              ${i?c`<span class="chip-summary">${i}</span>`:v}
            `}
        <span class="chip-lock">
          <ap-icon name="lock" .size=${12}></ap-icon>
        </span>
      </span>
    `}_renderFilterChip(t,e){const{t:s}=this;if(!e)return c`
        <span class="chip pinned-empty ${t===this.activeFilter?"active":""}" @click=${r=>this._openFilter(t,r)}>
          <span class="chip-icon"><ap-icon name=${this._getFilterIcon(t)} .size=${16}></ap-icon></span>
          <span class="chip-label">${s(ps[t]??t,qt[t]||t)}</span>
          <span class="chip-chevron"><ap-icon name="chevron-down" .size=${14}></ap-icon></span>
        </span>
      `;const i=this._getFilterSummary(e,t),a=e.type==="date";return c`
      <span class="chip ${t===this.activeFilter?"active":""}" @click=${r=>this._openFilter(t,r)}>
        ${(a||t===C.TYPE||t===C.SIZE)&&i?c`
              <span class="chip-icon"><ap-icon name=${this._getFilterIcon(t)} .size=${16}></ap-icon></span>
              <span class="chip-label">${i}</span>`:c`
              <span class="chip-label">${s(ps[t]??t,qt[t]||t)}</span>
              ${i?c`<span class="chip-summary">${i}</span>`:v}
            `}
        <button class="chip-remove" @click=${r=>{r.stopPropagation(),this._removeFilter(t)}} title=${s("removeFilter","Remove filter")}>
          <ap-icon name="close" .size=${12}></ap-icon>
        </button>
      </span>
    `}_renderMetadataChip(t,e){if(!e){const r=this._getMetadataLabel(t),o=this._getMetadataIcon(t);return c`
        <span class="chip pinned-empty ${t===this.activeMetadataField?"active":""}" @click=${n=>this._openMetadataFilter(t,n)}>
          <span class="chip-icon"><ap-icon name=${o} .size=${16}></ap-icon></span>
          <span class="chip-label">${r}</span>
          <span class="chip-chevron"><ap-icon name="chevron-down" .size=${14}></ap-icon></span>
        </span>
      `}const s=this._getFilterSummary(e),i=this._getMetadataLabel(t),a=this._getMetadataIcon(t);return c`
      <span class="chip ${t===this.activeMetadataField?"active":""}" @click=${r=>this._openMetadataFilter(t,r)}>
        <span class="chip-icon"><ap-icon name=${a} .size=${16}></ap-icon></span>
        <span class="chip-label">${i}</span>
        ${s?c`<span class="chip-summary">${s}</span>`:v}
        <button class="chip-remove" @click=${r=>{r.stopPropagation(),this._removeMetadataFilter(t)}} title=${this.t("removeFilter","Remove filter")}>
          <ap-icon name="close" .size=${12}></ap-icon>
        </button>
      </span>
    `}render(){const t=Ni(this.forcedFilters),e=new Set(Object.keys(t)),s=Object.keys(this.appliedFilters).filter(g=>!e.has(g)),i=Object.keys(this.appliedMetadata),a=new Set(this.pinnedFilters),r=new Set(this.pinnedMetadataFields),o=this.pinnedFilters.filter(g=>!e.has(g)),n=s.filter(g=>!a.has(g)),l=i.filter(g=>!r.has(g)),d=this.pendingFilter&&!a.has(this.pendingFilter)&&!(this.pendingFilter in this.appliedFilters),h=this.pendingMetadataField&&!r.has(this.pendingMetadataField)&&!(this.pendingMetadataField in this.appliedMetadata),u=s.length+i.length>0;return e.size+o.length+this.pinnedMetadataFields.length+n.length+l.length+(d?1:0)+(h?1:0)===0?v:c`
      <div class="chips-row">
        <div class="chips">
          ${[...e].map(g=>this._renderForcedChip(g,t[g]))}
          ${o.map(g=>this._renderFilterChip(g,this.appliedFilters[g]))}
          ${this.pinnedMetadataFields.map(g=>this._renderMetadataChip(g,this.appliedMetadata[g]))}
          ${n.map(g=>this._renderFilterChip(g,this.appliedFilters[g]))}
          ${d?c`
            <span class="chip pinned-empty active pending" @click=${g=>this._openFilter(this.pendingFilter,g)}>
              <span class="chip-icon"><ap-icon name=${this._getFilterIcon(this.pendingFilter)} .size=${16}></ap-icon></span>
              <span class="chip-label">${this.t(ps[this.pendingFilter]??this.pendingFilter,qt[this.pendingFilter]||this.pendingFilter)}</span>
              <span class="chip-chevron"><ap-icon name="chevron-down" .size=${14}></ap-icon></span>
            </span>
          `:v}
          ${l.map(g=>this._renderMetadataChip(g,this.appliedMetadata[g]))}
          ${h?c`
            <span class="chip pinned-empty active pending" @click=${g=>this._openMetadataFilter(this.pendingMetadataField,g)}>
              <span class="chip-icon"><ap-icon name=${this._getMetadataIcon(this.pendingMetadataField)} .size=${16}></ap-icon></span>
              <span class="chip-label">${this._getMetadataLabel(this.pendingMetadataField)}</span>
              <span class="chip-chevron"><ap-icon name="chevron-down" .size=${14}></ap-icon></span>
            </span>
          `:v}
          ${u?c`<button class="clear-all" @click=${this._clearAll}>${this.t("clearFilters","Clear filters")}</button>`:v}
        </div>
      </div>
    `}};oe.styles=I`
    :host {
      display: block;
    }
    :host([hidden]) {
      display: none;
    }
    .chips-row {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 0 20px 16px;
    }
    .chips {
      display: flex;
      align-items: center;
      gap: 12px;
      overflow-x: auto;
      scrollbar-width: none;
      min-width: 0;
      flex: 1;
    }
    .chips::-webkit-scrollbar {
      display: none;
    }
    .chip {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      height: 32px;
      padding: 0 12px;
      border: 1px solid var(--ap-primary-20, oklch(0.578 0.198 268.129 / 0.2));
      border-radius: 6px;
      font-size: 0.8125rem;
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      cursor: pointer;
      white-space: nowrap;
      transition: all 150ms;
    }
    .chip:hover {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.15));
    }
    .chip.active {
      background: var(--ap-primary-20, oklch(0.578 0.198 268.129 / 0.2));
    }
    .chip-label {
      font-weight: 500;
    }
    .chip-summary {
      opacity: 0.8;
      max-width: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .chip-remove {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      cursor: pointer;
      padding: 2px;
      color: inherit;
      opacity: 0.7;
      transition: opacity 150ms;
      border-radius: 4px;
      margin-left: 4px;
    }
    .chip-remove:hover {
      opacity: 1;
    }
    .clear-all {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      height: 34px;
      padding: 0 10px;
      border: none;
      border-radius: 6px;
      font-size: 0.8125rem;
      background: none;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      cursor: pointer;
      white-space: nowrap;
      transition: all 150ms;
    }
    .clear-all:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .chip.forced {
      cursor: default;
      opacity: 0.85;
    }
    .chip.forced:hover {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
    }
    .chip-lock {
      display: flex;
      align-items: center;
      color: inherit;
      opacity: 0.6;
      margin-left: 4px;
    }
    .chip.pinned-empty {
      height: 32px;
      padding: 0 12px;
      gap: 6px;
      border-style: solid;
      border-radius: 6px;
      background: transparent;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      border-color: var(--ap-input, oklch(0.871 0.016 241.798));
      font-weight: 400;
    }
    .chip .chip-icon {
      display: flex;
      align-items: center;
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .chip.pinned-empty .chip-icon {
      display: flex;
      align-items: center;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .chip.pinned-empty:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      border-color: var(--ap-input, oklch(0.871 0.016 241.798));
    }
    .chip.pinned-empty:hover .chip-icon {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .chip.pinned-empty.active {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      border-color: var(--ap-primary-20, oklch(0.578 0.198 268.129 / 0.2));
    }
    .chip.pinned-empty.active .chip-icon {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .chip-chevron {
      display: flex;
      align-items: center;
      opacity: 0.6;
    }
  `;fe([f({type:Object})],oe.prototype,"appliedFilters",2);fe([f({type:Object})],oe.prototype,"appliedMetadata",2);fe([f({type:Object})],oe.prototype,"forcedFilters",2);fe([f({type:Array})],oe.prototype,"metadataFields",2);fe([f({type:Array})],oe.prototype,"pinnedFilters",2);fe([f({type:Array})],oe.prototype,"pinnedMetadataFields",2);fe([f({type:Array})],oe.prototype,"tags",2);fe([f({type:Array})],oe.prototype,"labels",2);fe([f({type:Array})],oe.prototype,"approverUsers",2);fe([f({type:Array})],oe.prototype,"requesterUsers",2);fe([f()],oe.prototype,"activeFilter",2);fe([f()],oe.prototype,"activeMetadataField",2);fe([f()],oe.prototype,"pendingFilter",2);fe([f()],oe.prototype,"pendingMetadataField",2);fe([f({attribute:!1})],oe.prototype,"t",2);oe=fe([R("ap-filters-bar")],oe);var Lc=Object.defineProperty,Ic=Object.getOwnPropertyDescriptor,Pe=(t,e,s,i)=>{for(var a=i>1?void 0:i?Ic(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Lc(e,s,a),a};const Dc=6;let ve=class extends O{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.assets=[],this.folders=[],this.folderPreviews={},this.selectedIds=[],this.selectedFolderIds=[],this.disabledAssetIds=[],this.disabledFolderIds=[],this.isLoading=!1,this.multiSelect=!0,this.folderSelectable=!1,this.gridSize="normal",this._prevCount=0}willUpdate(t){if(t.has("assets")){const e=t.get("assets");e&&this.assets.length>e.length?this._prevCount=e.length:this._prevCount=0}}render(){const t=this.gridSize==="large"?"280px":"220px";return c`
      <div class="grid" role="list" aria-label="Assets" ${B({"--ap-grid-min-col":String(t)})}>
        ${this.folders.map((e,s)=>c`
            <ap-folder-card
              .folder=${e}
              .previews=${this.folderPreviews[e.uuid]||[]}
              .selectable=${this.folderSelectable}
              .multiSelect=${this.multiSelect}
              ?selected=${this.selectedFolderIds.includes(e.uuid)}
              ?disabled=${this.disabledFolderIds.includes(e.uuid)}
              .index=${s}
              data-folder-uuid=${e.uuid}
              @folder-open=${i=>{i.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-open",{detail:i.detail,bubbles:!0,composed:!0}))}}
              @folder-select=${i=>{i.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-select",{detail:i.detail,bubbles:!0,composed:!0}))}}
            ></ap-folder-card>
          `)}
        ${this.assets.map((e,s)=>{const i=s>=this._prevCount?Math.min(s-this._prevCount,20):Math.min(s,20);return c`
              <ap-asset-card
                .asset=${e}
                .t=${this.t}
                .index=${this.folderSelectable?this.folders.length+s:s}
                ?selected=${this.selectedIds.includes(e.uuid)}
                ?disabled=${this.disabledAssetIds.includes(e.uuid)}
                .multiSelect=${this.multiSelect}
                ${B({"--ap-stagger-index":String(i)})}
                data-asset-uuid=${e.uuid}
                @asset-select=${a=>this.dispatchEvent(new CustomEvent("asset-select",{detail:a.detail,bubbles:!0,composed:!0}))}
                @asset-preview=${a=>this.dispatchEvent(new CustomEvent("asset-preview",{detail:a.detail,bubbles:!0,composed:!0}))}
                @asset-quick-select=${a=>this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:a.detail,bubbles:!0,composed:!0}))}
              ></ap-asset-card>
            `})}
        ${this.isLoading?Array.from({length:Dc},()=>c`<div class="ghost-card">
                <div class="ghost-thumb"></div>
                <div class="ghost-info">
                  <div class="ghost-line ghost-name"></div>
                  <div class="ghost-line ghost-meta"></div>
                </div>
              </div>`):v}
      </div>
    `}};ve.styles=I`
    :host {
      display: block;
      padding: 0 20px 16px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(var(--ap-grid-min-col, 220px), 1fr));
      gap: 24px;
    }
    .ghost-card {
      border-radius: var(--ap-radius, 8px);
      overflow: hidden;
    }
    .ghost-thumb {
      aspect-ratio: 6/4;
      background: linear-gradient(
        90deg,
        var(--ap-muted, oklch(0.974 0.006 239.819)) 25%,
        #e8e8ea 50%,
        var(--ap-muted, oklch(0.974 0.006 239.819)) 75%
      );
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }
    .ghost-info {
      padding: 10px 12px;
    }
    .ghost-line {
      border-radius: 4px;
      background: linear-gradient(
        90deg,
        var(--ap-muted, oklch(0.974 0.006 239.819)) 25%,
        #e8e8ea 50%,
        var(--ap-muted, oklch(0.974 0.006 239.819)) 75%
      );
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }
    .ghost-name {
      height: 14px;
      width: 70%;
    }
    .ghost-meta {
      height: 12px;
      width: 50%;
      margin-top: 6px;
    }
    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    @media (prefers-reduced-motion: reduce) {
      .ghost-thumb, .ghost-line { animation: none; }
    }
  `;Pe([f({attribute:!1})],ve.prototype,"t",2);Pe([f({type:Array})],ve.prototype,"assets",2);Pe([f({type:Array})],ve.prototype,"folders",2);Pe([f({type:Object})],ve.prototype,"folderPreviews",2);Pe([f({type:Array})],ve.prototype,"selectedIds",2);Pe([f({type:Array})],ve.prototype,"selectedFolderIds",2);Pe([f({type:Array})],ve.prototype,"disabledAssetIds",2);Pe([f({type:Array})],ve.prototype,"disabledFolderIds",2);Pe([f({type:Boolean})],ve.prototype,"isLoading",2);Pe([f({type:Boolean})],ve.prototype,"multiSelect",2);Pe([f({type:Boolean})],ve.prototype,"folderSelectable",2);Pe([f({type:String})],ve.prototype,"gridSize",2);ve=Pe([R("ap-grid-view")],ve);var Mc=Object.defineProperty,Rc=Object.getOwnPropertyDescriptor,ye=(t,e,s,i)=>{for(var a=i>1?void 0:i?Rc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Mc(e,s,a),a};const zc=5;let le=class extends O{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.assets=[],this.folders=[],this.selectedIds=[],this.selectedFolderIds=[],this.disabledAssetIds=[],this.disabledFolderIds=[],this.isLoading=!1,this.multiSelect=!0,this.folderSelectable=!1,this.totalCount=0,this.isSelectingAll=!1,this.folderPreviews={},this._compactLevel=0}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver(t=>{var i;const e=((i=t[0])==null?void 0:i.contentRect.width)??0,s=e<550?2:e<680?1:0;s!==this._compactLevel&&(this._compactLevel=s)}),this._resizeObserver.observe(this)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._resizeObserver)==null||t.disconnect()}_getGridColumns(t){const e=[];return t&&e.push("32px"),e.push("48px"),e.push("minmax(120px, 1fr)"),e.push("72px"),this._compactLevel<2&&e.push("100px"),this._compactLevel<1&&e.push("120px"),e.push("64px"),e.join(" ")}get _allVisibleSelected(){if(this.assets.length===0&&this.folders.length===0||this.selectedIds.length===0&&this.selectedFolderIds.length===0)return!1;const t=new Set(this.selectedIds),e=this.assets.length===0||this.assets.every(a=>t.has(a.uuid));if(!this.folderSelectable)return e&&this.assets.length>0;const s=new Set(this.selectedFolderIds),i=this.folders.length===0||this.folders.every(a=>s.has(a.uuid));return e&&i}_handleHeaderCheckboxClick(){if(this.isSelectingAll)return;const t=this.folderSelectable?this.totalCount+this.folders.length:this.totalCount,e=this.folderSelectable?this.selectedIds.length+this.selectedFolderIds.length:this.selectedIds.length;this._allVisibleSelected&&e>=t?this.dispatchEvent(new CustomEvent("selection-clear",{bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("select-all",{detail:{scope:"all"},bubbles:!0,composed:!0}))}render(){const t=this.folderSelectable?this.totalCount+this.folders.length:this.totalCount,e=this.folderSelectable?this.selectedIds.length+this.selectedFolderIds.length:this.selectedIds.length,s=this._allVisibleSelected&&e>=t;return c`
      <div class="list-header" ${B({"grid-template-columns":this._getGridColumns(this.multiSelect)})} role="row" aria-label="Column headers">
        ${this.multiSelect?c`<span class="header-checkbox" @click=${this._handleHeaderCheckboxClick}>
              <div class="header-check-box ${s?"checked":e>0?"indeterminate":""}">
                <svg class="header-check-icon check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <svg class="header-check-icon dash" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                </svg>
              </div>
            </span>`:v}
        <span></span>
        <span>${this.t("name","Name")}</span>
        <span>${this.t("type","Type")}</span>
        ${this._compactLevel<2?c`<span>${this.t("size","Size")}</span>`:v}
        ${this._compactLevel<1?c`<span>${this.t("date","Date")}</span>`:v}
        <span></span>
      </div>
      <div class="list-body" role="list" aria-label="Assets">
        ${this.folders.map((i,a)=>c`
            <ap-folder-row
              .folder=${i}
              .previews=${this.folderPreviews[i.uuid]||[]}
              .selectable=${this.folderSelectable}
              .multiSelect=${this.multiSelect}
              .compactLevel=${this._compactLevel}
              ?selected=${this.selectedFolderIds.includes(i.uuid)}
              ?disabled=${this.disabledFolderIds.includes(i.uuid)}
              .index=${a}
              data-folder-uuid=${i.uuid}
              @folder-open=${r=>{r.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-open",{detail:r.detail,bubbles:!0,composed:!0}))}}
              @folder-select=${r=>{r.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-select",{detail:r.detail,bubbles:!0,composed:!0}))}}
            ></ap-folder-row>
          `)}
        ${this.assets.map((i,a)=>c`
            <ap-asset-row
              .asset=${i}
              .t=${this.t}
              .index=${this.folderSelectable?this.folders.length+a:a}
              ?selected=${this.selectedIds.includes(i.uuid)}
              ?disabled=${this.disabledAssetIds.includes(i.uuid)}
              .multiSelect=${this.multiSelect}
              .compactLevel=${this._compactLevel}
              data-asset-uuid=${i.uuid}
              @asset-select=${r=>this.dispatchEvent(new CustomEvent("asset-select",{detail:r.detail,bubbles:!0,composed:!0}))}
              @asset-preview=${r=>this.dispatchEvent(new CustomEvent("asset-preview",{detail:r.detail,bubbles:!0,composed:!0}))}
              @asset-quick-select=${r=>this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:r.detail,bubbles:!0,composed:!0}))}
            ></ap-asset-row>
          `)}
        ${this.isLoading?Array.from({length:zc},(i,a)=>{const r=["70%","55%","80%","45%","65%"];return c`
                <div class="ghost-row" ${B({"grid-template-columns":this._getGridColumns(this.multiSelect)})}>
                  ${this.multiSelect?c`<div class="ghost-el ghost-check"></div>`:v}
                  <div class="ghost-el ghost-thumb"></div>
                  <div class="ghost-el ghost-name" ${B({width:r[a]})}></div>
                  <div class="ghost-el ghost-type"></div>
                  ${this._compactLevel<2?c`<div class="ghost-el ghost-size"></div>`:v}
                  ${this._compactLevel<1?c`<div class="ghost-el ghost-date"></div>`:v}
                  <div></div>
                </div>
              `}):v}
      </div>
    `}};le.styles=I`
    :host {
      display: block;
      padding: 0 20px 16px;
    }
    .list-header {
      display: grid;
      gap: 12px;
      padding: 8px 12px;
      font-size: 14px;
      font-weight: 400;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }
    .list-header span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .header-checkbox {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .header-check-box {
      box-sizing: border-box;
      width: 22px;
      height: 22px;
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 150ms;
      background: var(--ap-background, oklch(1 0 0));
    }
    .header-check-box.checked,
    .header-check-box.indeterminate {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .header-check-icon {
      display: none;
      color: var(--ap-primary-foreground, oklch(1 0 0));
    }
    .header-check-box.checked .header-check-icon.check {
      display: block;
    }
    .header-check-box.indeterminate .header-check-icon.dash {
      display: block;
    }
    .list-body {
      display: flex;
      flex-direction: column;
    }
    .ghost-row {
      display: grid;
      gap: 12px;
      padding: 8px 12px;
      align-items: center;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }
    .ghost-el {
      background: linear-gradient(
        90deg,
        var(--ap-muted, oklch(0.974 0.006 239.819)) 25%,
        #e8e8ea 50%,
        var(--ap-muted, oklch(0.974 0.006 239.819)) 75%
      );
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
      border-radius: 4px;
    }
    .ghost-check { width: 22px; height: 22px; }
    .ghost-thumb { width: 40px; height: 40px; }
    .ghost-name { height: 14px; border-radius: 4px; }
    .ghost-type { height: 12px; width: 40px; }
    .ghost-size { height: 12px; width: 48px; }
    .ghost-date { height: 12px; width: 72px; }
    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    @media (prefers-reduced-motion: reduce) {
      .ghost-el { animation: none; }
    }
  `;ye([f({attribute:!1})],le.prototype,"t",2);ye([f({type:Array})],le.prototype,"assets",2);ye([f({type:Array})],le.prototype,"folders",2);ye([f({type:Array})],le.prototype,"selectedIds",2);ye([f({type:Array})],le.prototype,"selectedFolderIds",2);ye([f({type:Array})],le.prototype,"disabledAssetIds",2);ye([f({type:Array})],le.prototype,"disabledFolderIds",2);ye([f({type:Boolean})],le.prototype,"isLoading",2);ye([f({type:Boolean})],le.prototype,"multiSelect",2);ye([f({type:Boolean})],le.prototype,"folderSelectable",2);ye([f({type:Number})],le.prototype,"totalCount",2);ye([f({type:Boolean})],le.prototype,"isSelectingAll",2);ye([f({type:Object})],le.prototype,"folderPreviews",2);ye([w()],le.prototype,"_compactLevel",2);le=ye([R("ap-list-view")],le);function Zi(t){if(t===0)return"0 B";const e=["B","KB","MB","GB","TB"],s=1024,i=Math.floor(Math.log(t)/Math.log(s));return`${(t/Math.pow(s,i)).toFixed(i===0?0:1)} ${e[i]}`}function ai(t){if(!t)return"—";const e=new Date(t);return isNaN(e.getTime())?"—":e.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}function Dr(t,e){return!t||!e?"":`${t} x ${e}`}var Nc=Object.defineProperty,jc=Object.getOwnPropertyDescriptor,Rt=(t,e,s,i)=>{for(var a=i>1?void 0:i?jc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Nc(e,s,a),a};let et=class extends O{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.index=0,this.selected=!1,this.disabled=!1,this.multiSelect=!0}_handleSelect(t){if(t.stopPropagation(),t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0}));return}this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:t},bubbles:!0}))}_handlePreview(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-preview",{detail:{asset:this.asset},bubbles:!0}))}_formatDuration(t){const e=Math.floor(t/3600),s=Math.floor(t%3600/60),i=Math.floor(t%60),a=r=>String(r).padStart(2,"0");return e>0?`${e}:${a(s)}:${a(i)}`:`${a(s)}:${a(i)}`}_handleQuickSelect(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0}))}render(){var d,h,u,p,g,b,y,_;const t=this.asset;if(!t)return c``;const s=Ht(t.type)==="video",i=((d=t.extension)==null?void 0:d.toLowerCase())==="pdf",a=!!((h=t.info)!=null&&h.thumbnail||(u=t.info)!=null&&u.image_thumbnail||(p=t.info)!=null&&p.preview),r=br(t.extension||"")||a;let o="";s?o=_r(t):i?o=Hi(t):r&&(o=ti(t));const n=Is(t.extension||""),l=qi(t.extension||"");return c`
      <div class="card" @click=${this._handleSelect}>
        <div class="thumbnail ${l&&o?"chess":""}">
          ${o?c`<img
                src=${o}
                alt=${t.name}
                loading="lazy"
                class="thumb-img ${l?"transparent-asset":""}"
                @error=${S=>{const k=S.target,N=Wt();k.src!==n&&k.src!==N?(k.src=n,k.classList.add("icon-fallback")):k.src!==N&&(k.src=N)}}
              />`:c`<img
                src=${n}
                alt=${t.name}
                class="thumb-img icon-fallback"
                @error=${S=>{const k=S.target,N=Wt();k.src!==N&&(k.src=N)}}
              />`}
          ${s&&(((g=t.info)==null?void 0:g.video_duration)??((b=t.info)==null?void 0:b.duration))!=null?c`<span class="duration">${this._formatDuration(t.info.video_duration??t.info.duration)}</span>`:v}
          <div class="overlay">
            <button class="overlay-btn" @click=${this._handlePreview} aria-label=${this.t("preview","Preview")}>
              <ap-icon name="preview" .size=${16}></ap-icon>
              ${this.t("preview","Preview")}
            </button>
            <button class="overlay-btn select-btn" @click=${this._handleQuickSelect} aria-label=${this.t("select","Select")}>
              <ap-icon name="select" .size=${16}></ap-icon>
              ${this.t("select","Select")}
            </button>
          </div>
          ${this.multiSelect?c`
            <div class="check">
              <div class="check-box">
                <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
            </div>
          `:v}
        </div>
        <div class="info">
          <div class="name" title=${t.name}>${t.name}</div>
          <div class="meta">${(y=t.extension)==null?void 0:y.toUpperCase()}${(()=>{var T,E,H,A;const S=((T=t.info)==null?void 0:T.img_w)||((E=t.info)==null?void 0:E.video_w),k=((H=t.info)==null?void 0:H.img_h)||((A=t.info)==null?void 0:A.video_h),N=Dr(S,k);return N?` · ${N}`:""})()} · ${Zi(((_=t.size)==null?void 0:_.bytes)||0)}</div>
        </div>
      </div>
    `}};et.styles=I`
    :host {
      display: block;
      animation: ap-card-in 300ms ease-out both;
      animation-delay: calc(var(--ap-stagger-index, 0) * 50ms);
    }
    @keyframes ap-card-in {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .card {
      position: relative;
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius, 8px);
      overflow: hidden;
      cursor: pointer;
      user-select: none;
      -webkit-user-drag: none;
      transition: box-shadow 150ms, border-color 150ms;
      background: var(--ap-card, oklch(1 0 0));
    }
    .card:focus-visible {
      outline: 2px solid var(--ap-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }
    .card:hover {
      box-shadow: 0 4px 12px rgb(0 0 0 / 0.08);
    }
    :host([selected]) .card {
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
      box-shadow: 0 0 0 2px var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
    }
    :host([disabled]) {
      opacity: 0.4;
      cursor: not-allowed;
      pointer-events: none;
      animation: none;
    }
    :host([disabled]) .overlay-btn {
      pointer-events: none;
    }
    :host([disabled]) .check-box {
      background: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      border-color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    :host([disabled]) .check-icon {
      display: block;
    }
    .thumbnail {
      aspect-ratio: 6/4;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      overflow: hidden;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .thumb-img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      -webkit-user-drag: none;
    }
    .thumb-img.transparent-asset {
      padding: 12px;
    }
    .thumb-img.icon-fallback {
      width: auto;
      height: auto;
      max-width: 100px;
      max-height: 100%;
      padding: 16px;
      object-fit: scale-down;
    }
    .overlay {
      position: absolute;
      inset: 0;
      z-index: 1;
      background: rgba(0, 0, 0, 0.4);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 150ms;
    }
    .card:hover .overlay {
      opacity: 1;
    }
    .overlay-btn {
      pointer-events: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 10px 20px;
      min-width: 120px;
      border: none;
      border-radius: var(--ap-radius, 8px);
      background: var(--ap-card, rgba(255, 255, 255, 0.9));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      border: 1px solid var(--ap-border, transparent);
      cursor: pointer;
      transition: transform 100ms;
      font-size: 0.875rem;
      font-weight: 500;
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }
    .overlay-btn:hover {
      transform: scale(1.05);
    }
    .overlay-btn.select-btn {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: var(--ap-primary-foreground, oklch(1 0 0));
    }
    .info {
      padding: 10px 12px;
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .meta {
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      margin-top: 6px;
    }
    .check {
      position: absolute;
      top: 8px;
      left: 8px;
      z-index: 10;
      cursor: pointer;
    }
    .check-box {
      width: 22px;
      height: 22px;
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 150ms;
      background: var(--ap-background, oklch(1 0 0));
    }
    .check:hover .check-box {
      border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    :host([selected]) .check-box {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .check-icon {
      display: none;
      color: var(--ap-primary-foreground, oklch(1 0 0));
    }
    :host([selected]) .check-icon {
      display: block;
    }
    .thumbnail.chess {
      background-image: conic-gradient(var(--ap-chess-a, #f0f0f0) 25%, var(--ap-chess-b, #fff) 25% 50%, var(--ap-chess-a, #f0f0f0) 50% 75%, var(--ap-chess-b, #fff) 75%);
      background-size: 16px 16px;
    }
    .type-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .duration {
      position: absolute;
      bottom: 8px;
      right: 12px;
      z-index: 1;
      padding: 2px 6px;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.7);
      color: #fff;
      font-size: 0.6875rem;
      font-weight: 500;
      line-height: 1.2;
      font-variant-numeric: tabular-nums;
    }
    @media (prefers-reduced-motion: reduce) {
      :host { animation: none; }
      .overlay { transition: none; }
    }
  `;Rt([f({attribute:!1})],et.prototype,"t",2);Rt([f({type:Object})],et.prototype,"asset",2);Rt([f({type:Number})],et.prototype,"index",2);Rt([f({type:Boolean,reflect:!0})],et.prototype,"selected",2);Rt([f({type:Boolean,reflect:!0})],et.prototype,"disabled",2);Rt([f({type:Boolean})],et.prototype,"multiSelect",2);et=Rt([R("ap-asset-card")],et);var Uc=Object.defineProperty,Kc=Object.getOwnPropertyDescriptor,vt=(t,e,s,i)=>{for(var a=i>1?void 0:i?Kc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Uc(e,s,a),a};let qe=class extends O{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.index=0,this.selected=!1,this.disabled=!1,this.multiSelect=!0,this.compactLevel=0}_getGridColumns(){const t=[];return this.multiSelect&&t.push("32px"),t.push("48px"),t.push("minmax(120px, 1fr)"),t.push("72px"),this.compactLevel<2&&t.push("100px"),this.compactLevel<1&&t.push("120px"),t.push("64px"),t.join(" ")}_handleSelect(t){if(t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0}));return}this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:t},bubbles:!0}))}_handlePreview(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-preview",{detail:{asset:this.asset},bubbles:!0}))}_handleQuickSelect(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0}))}render(){var d,h,u,p,g,b;const t=this.asset;if(!t)return c``;const s=Ht(t.type)==="video",i=((d=t.extension)==null?void 0:d.toLowerCase())==="pdf",a=!!((h=t.info)!=null&&h.thumbnail||(u=t.info)!=null&&u.image_thumbnail||(p=t.info)!=null&&p.preview),r=br(t.extension||"")||a;let o="";s?o=_r(t):i?o=Hi(t):r&&(o=ti(t));const n=Is(t.extension||""),l=qi(t.extension||"");return c`
      <div class="row" ${B({"grid-template-columns":this._getGridColumns()})} @click=${this._handleSelect}>
        ${this.multiSelect?c`
          <div class="check">
            <div class="check-box">
              <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
            </div>
          </div>
        `:v}
        <div class="thumb ${l&&o?"chess":""}">
          ${o?c`<img
                src=${o}
                alt=${t.name}
                class="${l?"transparent-asset":""}"
                loading="lazy"
                @error=${y=>{const _=y.target,S=Wt();_.src!==n&&_.src!==S?(_.src=n,_.classList.add("icon-fallback")):_.src!==S&&(_.src=S)}}
              />`:c`<img
                src=${n}
                alt=${t.name}
                class="icon-fallback"
                @error=${y=>{const _=y.target,S=Wt();_.src!==S&&(_.src=S)}}
              />`}
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="type">${(g=t.extension)==null?void 0:g.toUpperCase()}</div>
        ${this.compactLevel<2?c`<div class="desc">${Zi(((b=t.size)==null?void 0:b.bytes)||0)}</div>`:v}
        ${this.compactLevel<1?c`<div class="date">${ai(t.created_at||"")}</div>`:v}
        <div class="actions">
          <button class="icon-btn select-btn" @click=${this._handleQuickSelect} aria-label=${this.t("select","Select")} title=${this.t("select","Select")}>
            <ap-icon name="select" .size=${16}></ap-icon>
          </button>
          <button class="icon-btn" @click=${this._handlePreview} aria-label=${this.t("preview","Preview")} title=${this.t("preview","Preview")}>
            <ap-icon name="preview" .size=${16}></ap-icon>
          </button>
        </div>
      </div>
    `}};qe.styles=I`
    :host {
      display: block;
    }
    .row {
      display: grid;
      gap: 12px;
      padding: 8px 12px;
      align-items: center;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      cursor: pointer;
      user-select: none;
      -webkit-user-drag: none;
      transition: background 100ms;
    }
    .row:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    :host([selected]) .row {
      background: var(--ap-selection-bg, oklch(0.578 0.198 268.129 / 0.08));
    }
    :host([disabled]) {
      opacity: 0.4;
      cursor: not-allowed;
      pointer-events: none;
    }
    :host([disabled]) .check-box {
      background: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      border-color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    :host([disabled]) .check-icon {
      display: block;
    }
    .thumb {
      width: 40px;
      height: 40px;
      border-radius: 4px;
      overflow: hidden;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .thumb img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      -webkit-user-drag: none;
    }
    .thumb img.transparent-asset {
      padding: 4px;
    }
    .thumb img.icon-fallback {
      object-fit: scale-down;
      padding: 4px;
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .type {
      font-size: 0.8125rem;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .desc, .date {
      font-size: 0.8125rem;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .actions {
      display: flex;
      gap: 4px;
      opacity: 0;
      transition: opacity 100ms;
    }
    .row:hover .actions {
      opacity: 1;
    }
    .icon-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border: none;
      border-radius: 4px;
      background: none;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      cursor: pointer;
    }
    .icon-btn:hover {
      background: var(--ap-background, oklch(1 0 0));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .icon-btn.select-btn {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .thumb.chess {
      background-image: conic-gradient(var(--ap-chess-a, #f0f0f0) 25%, var(--ap-chess-b, #fff) 25% 50%, var(--ap-chess-a, #f0f0f0) 50% 75%, var(--ap-chess-b, #fff) 75%);
      background-size: 12px 12px;
    }
    .check {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .check-box {
      box-sizing: border-box;
      width: 22px;
      height: 22px;
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 150ms;
      background: var(--ap-background, oklch(1 0 0));
    }
    .check:hover .check-box {
      border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    :host([selected]) .check-box {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .check-icon {
      display: none;
      color: var(--ap-primary-foreground, oklch(1 0 0));
    }
    :host([selected]) .check-icon {
      display: block;
    }
  `;vt([f({attribute:!1})],qe.prototype,"t",2);vt([f({type:Object})],qe.prototype,"asset",2);vt([f({type:Number})],qe.prototype,"index",2);vt([f({type:Boolean,reflect:!0})],qe.prototype,"selected",2);vt([f({type:Boolean,reflect:!0})],qe.prototype,"disabled",2);vt([f({type:Boolean})],qe.prototype,"multiSelect",2);vt([f({type:Number})],qe.prototype,"compactLevel",2);qe=vt([R("ap-asset-row")],qe);var Bc=Object.defineProperty,Vc=Object.getOwnPropertyDescriptor,mt=(t,e,s,i)=>{for(var a=i>1?void 0:i?Vc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Bc(e,s,a),a};let He=class extends O{constructor(){super(...arguments),this.previews=[],this.selected=!1,this.disabled=!1,this.selectable=!1,this.multiSelect=!0,this.index=0}_handleClick(t){if(!this.selectable){this._handleOpen();return}if(t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){t.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-select",{detail:{folder:this.folder,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0,composed:!0}));return}this._handleOpen()}_handleOpen(){this.dispatchEvent(new CustomEvent("folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}_getPreviewUrl(t){return xr(t,"200")}_renderPreviewImg(t){const e=yr(t.file_type),s=this._getPreviewUrl(t),i=Is(hi(t.file_type)),a=Wt();return c`<div class="preview-slot ${e?"icon-bg":""}">
      <img
        class="preview-img ${e?"icon-mode":""}"
        src="${s||i}"
        alt=""
        loading="lazy"
        @error=${r=>{const o=r.target,n=o.parentElement;o.src!==i&&o.src!==a?(o.src=i,o.classList.add("icon-mode"),n==null||n.classList.add("icon-bg")):o.src!==a&&(o.src=a,o.classList.add("icon-mode"),n==null||n.classList.add("icon-bg"))}}
        @load=${r=>{const o=r.target,n=o.parentElement;o.src.includes("assets/file-types")&&(o.classList.add("icon-mode"),n==null||n.classList.add("icon-bg"))}}
      />
    </div>`}_renderPreviews(){if(this.previews.length===0)return c`<div class="empty-preview"><ap-icon name="inbox" .size=${64}></ap-icon></div>`;const t=this.previews.slice(0,3);return t.length===1?c`<div class="preview-left">${this._renderPreviewImg(t[0])}</div>`:c`
      <div class="preview-grid">
        <div class="preview-left">${this._renderPreviewImg(t[0])}</div>
        <div class="preview-right">
          <div class="preview-right-item">${this._renderPreviewImg(t[1])}</div>
          ${t[2]?c`<div class="preview-right-item">${this._renderPreviewImg(t[2])}</div>`:v}
        </div>
      </div>
    `}render(){var a,r;const t=this.folder;if(!t)return c``;const e=((a=t.count)==null?void 0:a.files_direct)??0,i=(((r=t.count)==null?void 0:r.files_recursive)??0)-e;return c`
      <div class="card" @click=${this._handleClick}>
        <!-- Folder shape background -->
        <svg class="folder-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z"
                rx="3" ry="3" />
        </svg>
        ${this.selectable&&this.multiSelect?c`
          <div class="check">
            <div class="check-box">
              <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
            </div>
          </div>
        `:v}
        <div class="card-content">
          <div class="preview-container">
            <div class="preview-overlay"></div>
            ${this._renderPreviews()}
          </div>
          <div class="info">
            <div class="name" title=${t.name}>${t.name}</div>
            <div class="counts">
              <span>${e} asset${e!==1?"s":""}</span>
              ${i>0?c`<span>${i} sub-asset${i!==1?"s":""}</span>`:v}
            </div>
          </div>
        </div>
      </div>
    `}};He.styles=[me,I`
    :host {
      display: block;
    }
    .card {
      position: relative;
      cursor: pointer;
      transition: filter 150ms;
    }
    :host([selected]) .card {
      filter:
        drop-shadow(2px 0 0 var(--ap-primary, oklch(0.578 0.198 268.129)))
        drop-shadow(-2px 0 0 var(--ap-primary, oklch(0.578 0.198 268.129)))
        drop-shadow(0 2px 0 var(--ap-primary, oklch(0.578 0.198 268.129)))
        drop-shadow(0 -2px 0 var(--ap-primary, oklch(0.578 0.198 268.129)));
    }
    /* Folder shape SVG fills card */
    .folder-svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }
    .folder-svg path {
      fill: var(--ap-folder-bg, #E3E8ED);
    }
    .preview-overlay {
      position: absolute;
      inset: 0;
      z-index: 2;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 4px;
      opacity: 0;
      transition: opacity 150ms;
      pointer-events: none;
    }
    .card:hover {
      filter: drop-shadow(0 4px 12px rgb(0 0 0 / 0.08));
    }
    :host([selected]) .card:hover {
      filter:
        drop-shadow(2px 0 0 var(--ap-primary, oklch(0.578 0.198 268.129)))
        drop-shadow(-2px 0 0 var(--ap-primary, oklch(0.578 0.198 268.129)))
        drop-shadow(0 2px 0 var(--ap-primary, oklch(0.578 0.198 268.129)))
        drop-shadow(0 -2px 0 var(--ap-primary, oklch(0.578 0.198 268.129)))
        drop-shadow(0 4px 12px rgb(0 0 0 / 0.08));
    }
    :host([disabled]) {
      opacity: 0.4;
      cursor: not-allowed;
      pointer-events: none;
    }
    :host([disabled]) .check-box {
      background: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      border-color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    :host([disabled]) .check-icon {
      display: block;
    }
    .card:hover .preview-overlay {
      opacity: 1;
    }
    .card-content {
      position: relative;
      z-index: 1;
      padding: 12% 3.5% 12px;
      display: flex;
      flex-direction: column;
    }
    .preview-container {
      position: relative;
      aspect-ratio: 16/9;
      display: flex;
      overflow: hidden;
      border-radius: 4px;
    }
    .preview-grid {
      display: flex;
      width: 100%;
      height: 100%;
      gap: 6px;
    }
    .preview-left {
      flex: 1;
      min-width: 0;
      min-height: 0;
      overflow: hidden;
      border-radius: 4px;
    }
    .preview-right {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .preview-right-item {
      flex: 1;
      min-height: 0;
      overflow: hidden;
      border-radius: 4px;
    }
    .preview-left > .preview-slot,
    .preview-right-item > .preview-slot {
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 4px;
    }
    .preview-slot {
      display: flex;
      position: relative;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .preview-slot.icon-bg {
      background: var(--ap-card, oklch(1 0 0));
    }
    .preview-img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
    .preview-img.icon-mode {
      object-fit: contain;
      padding: 8px;
    }
    .empty-preview {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      border-radius: 4px;
      color: var(--ap-input, oklch(0.871 0.016 241.798));
    }
    .info {
      flex-shrink: 0;
      padding-top: 8px;
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .counts {
      display: flex;
      justify-content: space-between;
      font-size: 0.75rem;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      margin-top: 6px;
    }
    .check {
      position: absolute;
      top: 8px;
      left: 8px;
      z-index: 3;
      cursor: pointer;
    }
    .check-box {
      width: 22px;
      height: 22px;
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 150ms;
      background: var(--ap-background, oklch(1 0 0));
    }
    .check:hover .check-box {
      border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    :host([selected]) .check-box {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .check-icon {
      display: none;
      color: var(--ap-primary-foreground, oklch(1 0 0));
    }
    :host([selected]) .check-icon {
      display: block;
    }
  `];mt([f({type:Object})],He.prototype,"folder",2);mt([f({type:Array})],He.prototype,"previews",2);mt([f({type:Boolean,reflect:!0})],He.prototype,"selected",2);mt([f({type:Boolean,reflect:!0})],He.prototype,"disabled",2);mt([f({type:Boolean})],He.prototype,"selectable",2);mt([f({type:Boolean})],He.prototype,"multiSelect",2);mt([f({type:Number})],He.prototype,"index",2);He=mt([R("ap-folder-card")],He);var qc=Object.defineProperty,Hc=Object.getOwnPropertyDescriptor,it=(t,e,s,i)=>{for(var a=i>1?void 0:i?Hc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&qc(e,s,a),a};let ze=class extends O{constructor(){super(...arguments),this.previews=[],this.selected=!1,this.disabled=!1,this.selectable=!1,this.multiSelect=!0,this.index=0,this.compactLevel=0}_getGridColumns(){const t=[];return this.multiSelect&&t.push("32px"),t.push("48px"),t.push("minmax(120px, 1fr)"),t.push("72px"),this.compactLevel<2&&t.push("100px"),this.compactLevel<1&&t.push("120px"),t.push("64px"),t.join(" ")}_renderPreviewImg(t){const e=yr(t.file_type),s=xr(t,"80"),i=Is(hi(t.file_type)),a=Wt();return c`<div class="preview-slot ${e?"icon-bg":""}"><img
      class="preview-img ${e?"icon-mode":""}"
      src="${s||i}"
      alt=""
      loading="lazy"
      @error=${r=>{const o=r.target,n=o.parentElement;o.src!==i&&o.src!==a?(o.src=i,o.classList.add("icon-mode"),n==null||n.classList.add("icon-bg")):o.src!==a&&(o.src=a,o.classList.add("icon-mode"),n==null||n.classList.add("icon-bg"))}}
    /></div>`}_renderThumb(){const t=c`
      <svg class="folder-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z"
              />
      </svg>
    `,e=this.previews.slice(0,2);return c`
      ${t}
      <div class="preview-area">
        ${e.length>0?e.map(s=>this._renderPreviewImg(s)):c`<div class="empty-preview">
              <ap-icon name="inbox" .size=${14}></ap-icon>
            </div>`}
      </div>
    `}_handleClick(t){if(!this.selectable){this._handleOpen();return}if(t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){t.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-select",{detail:{folder:this.folder,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0,composed:!0}));return}this._handleOpen()}_handleOpen(){this.dispatchEvent(new CustomEvent("folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){var e,s;const t=this.folder;return t?c`
      <div class="row" ${B({"grid-template-columns":this._getGridColumns()})} @click=${this._handleClick}>
        ${this.multiSelect?this.selectable?c`
              <div class="check">
                <div class="check-box">
                  <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
              </div>`:c`<div></div>`:v}
        <div class="thumb">${this._renderThumb()}</div>
        <div class="name">${t.name}</div>
        <div class="meta">Folder</div>
        ${this.compactLevel<2?c`<div class="meta">${((e=t.count)==null?void 0:e.files_recursive)??((s=t.count)==null?void 0:s.files_direct)??0} items</div>`:v}
        ${this.compactLevel<1?c`<div class="meta">${ai(t.modified_at||t.updated_at||"")}</div>`:v}
        <div></div>
      </div>
    `:c``}};ze.styles=I`
    :host {
      display: block;
    }
    .row {
      display: grid;
      gap: 12px;
      padding: 8px 12px;
      align-items: center;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      cursor: pointer;
      transition: background 100ms;
    }
    .row:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    :host([selected]) .row {
      background: var(--ap-selection-bg, oklch(0.578 0.198 268.129 / 0.08));
    }
    :host([disabled]) {
      opacity: 0.4;
      cursor: not-allowed;
      pointer-events: none;
    }
    :host([disabled]) .check-box {
      background: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      border-color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    :host([disabled]) .check-icon {
      display: block;
    }
    .thumb {
      width: 40px;
      height: 36px;
      position: relative;
      flex-shrink: 0;
    }
    .folder-svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }
    .preview-area {
      position: absolute;
      top: 30%;
      left: 4%;
      right: 4%;
      bottom: 8%;
      overflow: hidden;
      border-radius: 1.5px;
      display: flex;
      gap: 1px;
    }
    .preview-slot {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .preview-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .preview-img.icon-mode {
      object-fit: contain;
      padding: 2px;
    }
    .empty-preview {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      color: var(--ap-input, oklch(0.871 0.016 241.798));
    }
    .folder-svg path {
      fill: var(--ap-folder-bg, #E3E8ED);
    }
    .preview-slot.icon-bg {
      background: var(--ap-card, oklch(1 0 0));
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .meta {
      font-size: 0.8125rem;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .check {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .check-box {
      width: 22px;
      height: 22px;
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 150ms;
      background: var(--ap-background, oklch(1 0 0));
    }
    .check:hover .check-box {
      border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    :host([selected]) .check-box {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .check-icon {
      display: none;
      color: var(--ap-primary-foreground, oklch(1 0 0));
    }
    :host([selected]) .check-icon {
      display: block;
    }
  `;it([f({type:Object})],ze.prototype,"folder",2);it([f({type:Array})],ze.prototype,"previews",2);it([f({type:Boolean,reflect:!0})],ze.prototype,"selected",2);it([f({type:Boolean,reflect:!0})],ze.prototype,"disabled",2);it([f({type:Boolean})],ze.prototype,"selectable",2);it([f({type:Boolean})],ze.prototype,"multiSelect",2);it([f({type:Number})],ze.prototype,"index",2);it([f({type:Number})],ze.prototype,"compactLevel",2);ze=it([R("ap-folder-row")],ze);var Gc=Object.defineProperty,Qc=Object.getOwnPropertyDescriptor,ea=(t,e,s,i)=>{for(var a=i>1?void 0:i?Qc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Gc(e,s,a),a};let Ss=class extends O{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("label-open",{detail:{label:this.label},bubbles:!0,composed:!0}))}render(){const t=this.label;if(!t)return c``;const e=t.assets_count??0,s=t.color||"#94a3b8";return c`
      <div class="card" @click=${this._handleClick}>
        <div class="icon-wrapper" ${B({background:`color-mix(in srgb, ${s} 10%, transparent)`})}>
          <ap-icon name="tag" .size=${18} ${B({color:s})}></ap-icon>
        </div>
        <div class="info">
          <div class="name" title=${t.name}>${t.name}</div>
          <div class="count">${e} asset${e!==1?"s":""}</div>
        </div>
      </div>
    `}};Ss.styles=[me,I`
    :host {
      display: block;
    }
    .card {
      position: relative;
      cursor: pointer;
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius, 8px);
      padding: 16px;
      display: flex;
      align-items: center;
      gap: 12px;
      transition: box-shadow 150ms, border-color 150ms, background 150ms;
      background: var(--ap-card, oklch(1 0 0));
      overflow: hidden;
    }
    .card:hover {
      box-shadow: 0 4px 12px rgb(0 0 0 / 0.08);
      border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    .icon-wrapper {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .info {
      min-width: 0;
      flex: 1;
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .count {
      font-size: 0.75rem;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      margin-top: 2px;
    }
  `];ea([f({type:Object})],Ss.prototype,"label",2);ea([f({type:Number})],Ss.prototype,"index",2);Ss=ea([R("ap-label-card")],Ss);var Wc=Object.defineProperty,Yc=Object.getOwnPropertyDescriptor,ta=(t,e,s,i)=>{for(var a=i>1?void 0:i?Yc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Wc(e,s,a),a};let Cs=class extends O{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("label-open",{detail:{label:this.label},bubbles:!0,composed:!0}))}render(){const t=this.label;if(!t)return c``;const e=t.assets_count??0,s=t.color||"#94a3b8";return c`
      <div class="row" @click=${this._handleClick}>
        <div class="icon-wrapper" ${B({background:`color-mix(in srgb, ${s} 10%, transparent)`})}>
          <ap-icon name="tag" .size=${16} ${B({color:s})}></ap-icon>
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="count">${e} asset${e!==1?"s":""}</div>
      </div>
    `}};Cs.styles=I`
    :host {
      display: block;
    }
    .row {
      display: grid;
      grid-template-columns: 40px minmax(120px, 1fr) 100px;
      gap: 12px;
      padding: 8px 12px;
      align-items: center;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      cursor: pointer;
      transition: background 100ms;
    }
    .row:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .icon-wrapper {
      width: 32px;
      height: 32px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      justify-self: center;
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .count {
      font-size: 0.8125rem;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      white-space: nowrap;
      text-align: right;
    }
  `;ta([f({type:Object})],Cs.prototype,"label",2);ta([f({type:Number})],Cs.prototype,"index",2);Cs=ta([R("ap-label-row")],Cs);var Xc=Object.defineProperty,Jc=Object.getOwnPropertyDescriptor,sa=(t,e,s,i)=>{for(var a=i>1?void 0:i?Jc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Xc(e,s,a),a};let As=class extends O{constructor(){super(...arguments),this.index=0}connectedCallback(){super.connectedCallback(),this.style.setProperty("--ap-stagger-index",String(this.index))}updated(t){t.has("index")&&this.style.setProperty("--ap-stagger-index",String(this.index))}_handleClick(){this.dispatchEvent(new CustomEvent("collection-open",{detail:{collection:this.collection},bubbles:!0,composed:!0}))}render(){const t=this.collection;return t?c`
      <div class="card" @click=${this._handleClick}>
        <div class="icon-wrapper">
          <ap-icon name="layout-grid" .size=${22}></ap-icon>
        </div>
        <div class="info">
          <div class="name" title=${t.title}>${t.title}</div>
        </div>
        <div class="chevron">
          <ap-icon name="chevron-right" .size=${16}></ap-icon>
        </div>
      </div>
    `:c``}};As.styles=[me,I`
    @keyframes ap-card-in {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    :host {
      display: block;
      animation: ap-card-in 300ms ease-out both;
      animation-delay: calc(var(--ap-stagger-index, 0) * 50ms);
    }
    .card {
      position: relative;
      cursor: pointer;
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius, 8px);
      padding: 16px;
      display: flex;
      align-items: center;
      gap: 14px;
      transition: box-shadow 150ms, border-color 150ms;
      background: var(--ap-card, oklch(1 0 0));
    }
    .card:hover {
      box-shadow: 0 4px 12px rgb(0 0 0 / 0.08);
      border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    .card:hover .chevron {
      opacity: 1;
    }
    .icon-wrapper {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: linear-gradient(
        135deg,
        var(--ap-primary-20, oklch(0.578 0.198 268.129 / 0.2)),
        var(--ap-accent, oklch(0.578 0.198 268.129 / 0.07))
      );
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .info {
      min-width: 0;
      flex: 1;
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .chevron {
      flex-shrink: 0;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      opacity: 0.5;
      transition: opacity 150ms;
    }
  `];sa([f({type:Object})],As.prototype,"collection",2);sa([f({type:Number})],As.prototype,"index",2);As=sa([R("ap-collection-card")],As);var Zc=Object.defineProperty,ed=Object.getOwnPropertyDescriptor,ia=(t,e,s,i)=>{for(var a=i>1?void 0:i?ed(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Zc(e,s,a),a};let Es=class extends O{constructor(){super(...arguments),this.index=0}_formatDate(t){if(!t)return"";try{return new Date(t).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return""}}_handleClick(){this.dispatchEvent(new CustomEvent("collection-open",{detail:{collection:this.collection},bubbles:!0,composed:!0}))}render(){const t=this.collection;return t?c`
      <div class="row" @click=${this._handleClick}>
        <div class="icon-wrapper">
          <ap-icon name="layout-grid" .size=${16}></ap-icon>
        </div>
        <div class="name" title=${t.title}>${t.title}</div>
        <div class="date">${this._formatDate(t.updated_at)}</div>
        <div class="chevron">
          <ap-icon name="chevron-right" .size=${16}></ap-icon>
        </div>
      </div>
    `:c``}};Es.styles=I`
    :host {
      display: block;
    }
    .row {
      display: grid;
      grid-template-columns: 40px minmax(120px, 1fr) 100px 24px;
      gap: 12px;
      padding: 10px 12px;
      align-items: center;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      cursor: pointer;
      transition: background 100ms;
    }
    .row:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .row:hover .chevron {
      opacity: 1;
    }
    .icon-wrapper {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: linear-gradient(
        135deg,
        var(--ap-primary-20, oklch(0.578 0.198 268.129 / 0.2)),
        var(--ap-accent, oklch(0.578 0.198 268.129 / 0.07))
      );
      display: flex;
      align-items: center;
      justify-content: center;
      justify-self: center;
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .date {
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      white-space: nowrap;
      text-align: right;
    }
    .chevron {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      justify-self: end;
      opacity: 0.5;
      transition: opacity 150ms;
    }
  `;ia([f({type:Object})],Es.prototype,"collection",2);ia([f({type:Number})],Es.prototype,"index",2);Es=ia([R("ap-collection-row")],Es);var td=Object.defineProperty,sd=Object.getOwnPropertyDescriptor,aa=(t,e,s,i)=>{for(var a=i>1?void 0:i?sd(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&td(e,s,a),a};let Fs=class extends O{constructor(){super(...arguments),this.index=0}connectedCallback(){super.connectedCallback(),this.style.setProperty("--ap-stagger-index",String(this.index))}updated(t){t.has("index")&&this.style.setProperty("--ap-stagger-index",String(this.index))}_handleClick(){this.dispatchEvent(new CustomEvent("collection-folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){const t=this.folder;return t?c`
      <div class="card" @click=${this._handleClick}>
        <div class="icon-wrapper">
          <ap-icon name="folder" .size=${22}></ap-icon>
        </div>
        <div class="info">
          <div class="name" title=${t.name}>${t.name}</div>
        </div>
        <div class="chevron">
          <ap-icon name="chevron-right" .size=${16}></ap-icon>
        </div>
      </div>
    `:c``}};Fs.styles=[me,I`
    @keyframes ap-card-in {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    :host {
      display: block;
      animation: ap-card-in 300ms ease-out both;
      animation-delay: calc(var(--ap-stagger-index, 0) * 50ms);
    }
    .card {
      position: relative;
      cursor: pointer;
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius, 8px);
      padding: 16px;
      display: flex;
      align-items: center;
      gap: 14px;
      transition: box-shadow 150ms, border-color 150ms;
      background: var(--ap-card, oklch(1 0 0));
    }
    .card:hover {
      box-shadow: 0 4px 12px rgb(0 0 0 / 0.08);
      border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    .card:hover .chevron {
      opacity: 1;
    }
    .icon-wrapper {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
    }
    .info {
      min-width: 0;
      flex: 1;
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .chevron {
      flex-shrink: 0;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      opacity: 0.5;
      transition: opacity 150ms;
    }
  `];aa([f({type:Object})],Fs.prototype,"folder",2);aa([f({type:Number})],Fs.prototype,"index",2);Fs=aa([R("ap-collection-folder-card")],Fs);var id=Object.defineProperty,ad=Object.getOwnPropertyDescriptor,ra=(t,e,s,i)=>{for(var a=i>1?void 0:i?ad(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&id(e,s,a),a};let Os=class extends O{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("collection-folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){const t=this.folder;return t?c`
      <div class="row" @click=${this._handleClick}>
        <div class="icon-wrapper">
          <ap-icon name="folder" .size=${16}></ap-icon>
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="chevron">
          <ap-icon name="chevron-right" .size=${16}></ap-icon>
        </div>
      </div>
    `:c``}};Os.styles=I`
    :host {
      display: block;
    }
    .row {
      display: grid;
      grid-template-columns: 40px minmax(120px, 1fr) 24px;
      gap: 12px;
      padding: 10px 12px;
      align-items: center;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      cursor: pointer;
      transition: background 100ms;
    }
    .row:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .row:hover .chevron {
      opacity: 1;
    }
    .icon-wrapper {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      display: flex;
      align-items: center;
      justify-content: center;
      justify-self: center;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .chevron {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      justify-self: end;
      opacity: 0.5;
      transition: opacity 150ms;
    }
  `;ra([f({type:Object})],Os.prototype,"folder",2);ra([f({type:Number})],Os.prototype,"index",2);Os=ra([R("ap-collection-folder-row")],Os);var rd=Object.defineProperty,od=Object.getOwnPropertyDescriptor,ts=(t,e,s,i)=>{for(var a=i>1?void 0:i?od(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&rd(e,s,a),a};let ht=class extends O{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.variant="grid",this.gridSize="normal",this.multiSelect=!0,this.folderCount=0}render(){if(this.variant==="grid"){const o=this.gridSize==="large"?"280px":"220px";return c`
        <div class="grid-skeleton" ${B({"--ap-grid-min-col":String(o)})}>
          ${Array.from({length:18},()=>c`<div class="card-skel">
            <div class="skeleton card-skel-thumb"></div>
            <div class="card-skel-info">
              <div class="skeleton card-skel-name"></div>
              <div class="skeleton card-skel-meta"></div>
            </div>
          </div>`)}
        </div>
      `}const t=[];this.multiSelect&&t.push("32px"),t.push("48px","minmax(120px, 1fr)","72px","100px","120px","36px");const e=t.join(" "),s=c`
      <div class="row-skel" ${B({"grid-template-columns":e})}>
        ${this.multiSelect?c`<div class="row-skel-check-wrap"><div class="skeleton row-skel-check"></div></div>`:""}
        <div class="row-skel-folder-thumb">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z" />
          </svg>
        </div>
        <div class="skeleton row-skel-name row-skel-folder-name"></div>
        <div class="skeleton row-skel-type"></div>
        <div class="skeleton row-skel-size"></div>
        <div class="skeleton row-skel-date"></div>
        <div></div>
      </div>
    `,i=o=>c`
      <div class="row-skel" ${B({"grid-template-columns":e})}>
        ${this.multiSelect?c`<div class="row-skel-check-wrap"><div class="skeleton row-skel-check"></div></div>`:""}
        <div class="skeleton row-skel-thumb"></div>
        <div class="skeleton row-skel-name" ${B({width:o})}></div>
        <div class="skeleton row-skel-type"></div>
        <div class="skeleton row-skel-size"></div>
        <div class="skeleton row-skel-date"></div>
        <div></div>
      </div>
    `,a=["70%","55%","80%","45%","65%","50%","75%","60%","85%","40%","72%","58%"],r=12-this.folderCount;return c`
      <div class="list-header" ${B({"grid-template-columns":e})}>
        ${this.multiSelect?c`<div class="header-check-wrap"><div class="header-check-box"></div></div>`:""}
        <span></span>
        <span>${this.t("name","Name")}</span>
        <span>${this.t("type","Type")}</span>
        <span>${this.t("size","Size")}</span>
        <span>${this.t("date","Date")}</span>
        <span></span>
      </div>
      ${Array.from({length:this.folderCount},()=>s)}
      ${Array.from({length:r},(o,n)=>i(a[n%a.length]))}
    `}};ht.styles=I`
    :host {
      display: block;
      padding: 0 20px 16px;
    }
    .skeleton {
      background: linear-gradient(90deg, var(--ap-muted, oklch(0.974 0.006 239.819)) 25%, #e8e8ea 50%, var(--ap-muted, oklch(0.974 0.006 239.819)) 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
      border-radius: var(--ap-radius, 8px);
    }
    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    .grid-skeleton {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(var(--ap-grid-min-col, 220px), 1fr));
      gap: 24px;
    }
    .card-skel {
      border-radius: var(--ap-radius, 8px);
      overflow: hidden;
    }
    .card-skel-thumb {
      aspect-ratio: 6/4;
    }
    .card-skel-info {
      padding: 10px 12px;
    }
    .card-skel-name {
      height: 14px;
      width: 70%;
      border-radius: 4px;
    }
    .card-skel-meta {
      height: 12px;
      width: 50%;
      border-radius: 4px;
      margin-top: 6px;
    }
    .row-skel {
      display: grid;
      gap: 12px;
      padding: 8px 12px;
      align-items: center;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }
    .row-skel-check-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .row-skel-check {
      width: 22px;
      height: 22px;
      border-radius: 4px;
    }
    .row-skel-thumb {
      width: 40px;
      height: 40px;
      border-radius: 4px;
    }
    .row-skel-name {
      height: 14px;
      width: 70%;
      border-radius: 4px;
    }
    .row-skel-folder-name {
      width: 55%;
    }
    .row-skel-type {
      height: 12px;
      width: 40px;
      border-radius: 4px;
    }
    .row-skel-size {
      height: 12px;
      width: 48px;
      border-radius: 4px;
    }
    .row-skel-date {
      height: 12px;
      width: 72px;
      border-radius: 4px;
    }
    .row-skel-folder-thumb {
      width: 40px;
      height: 36px;
      position: relative;
    }
    .row-skel-folder-thumb svg {
      width: 100%;
      height: 100%;
    }
    .row-skel-folder-thumb svg path {
      fill: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .list-header {
      display: grid;
      gap: 12px;
      padding: 8px 12px;
      font-size: 14px;
      font-weight: 400;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }
    .list-header span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .header-check-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .header-check-box {
      box-sizing: border-box;
      width: 22px;
      height: 22px;
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: 4px;
      background: var(--ap-background, oklch(1 0 0));
    }
    @media (prefers-reduced-motion: reduce) {
      .skeleton { animation: none; }
    }
  `;ts([f({attribute:!1})],ht.prototype,"t",2);ts([f({reflect:!0})],ht.prototype,"variant",2);ts([f({type:String})],ht.prototype,"gridSize",2);ts([f({type:Boolean})],ht.prototype,"multiSelect",2);ts([f({type:Number})],ht.prototype,"folderCount",2);ht=ts([R("ap-skeleton")],ht);var nd=Object.defineProperty,ld=Object.getOwnPropertyDescriptor,de=(t,e,s,i)=>{for(var a=i>1?void 0:i?ld(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&nd(e,s,a),a};let se=class extends O{constructor(){super(...arguments),this.asset=null,this.assets=[],this.selectedIds=[],this.containerToken="",this.showMetadata=!0,this.metadataFields=[],this.labels=[],this.regionalFilters={},this.multiSelect=!0,this.t=(t,e)=>typeof e=="string"?e:t,this._isFullscreen=!1,this._fsImageLoaded=!1,this._previewLoading=!1,this._openSections=new Set(["file-info","metadata"]),this._hls=null}connectedCallback(){super.connectedCallback(),this._onFullscreenChange=this._onFullscreenChange.bind(this),this._onKeyDown=this._onKeyDown.bind(this),document.addEventListener("fullscreenchange",this._onFullscreenChange),document.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this._onFullscreenChange),document.removeEventListener("keydown",this._onKeyDown),this._destroyHls()}_onKeyDown(t){if(t.key!=="ArrowLeft"&&t.key!=="ArrowRight")return;const e=t.composedPath()[0];if(!e)return;const s=e.tagName;s==="INPUT"||s==="TEXTAREA"||s==="SELECT"||e.getAttribute("role")==="radio"||e.getAttribute("role")==="listbox"||e.isContentEditable||(t.preventDefault(),t.key==="ArrowLeft"?this._prev():this._next())}_destroyHls(){this._hls&&(this._hls.destroy(),this._hls=null)}updated(t){if(super.updated(t),t.has("asset")&&(this._destroyHls(),this._previewLoading=!0,this.asset)){const e=Ht(this.asset.type);e==="video"&&this._setupHls(this.asset),e!=="image"&&e!=="video"&&(this._previewLoading=!1)}}async _setupHls(t){var i,a;const e=Sn(t);if(!e||(await this.updateComplete,((i=this.asset)==null?void 0:i.uuid)!==t.uuid))return;const s=this._videoEl;if(s){if(s.canPlayType("application/vnd.apple.mpegurl")){s.src=e;return}try{const{default:r}=await W(async()=>{const{default:n}=await import("./hls.light-8mz_AqX7.js");return{default:n}},[]);if(!r.isSupported()||((a=this.asset)==null?void 0:a.uuid)!==t.uuid||!this.isConnected)return;const o=new r;this._hls=o,o.loadSource(e),o.attachMedia(s),o.on(r.Events.ERROR,(n,l)=>{var d;l.fatal&&(this._destroyHls(),s.src=((d=t.url)==null?void 0:d.cdn)||"")})}catch{}}}_onFullscreenChange(){this._isFullscreen=!!document.fullscreenElement,this._isFullscreen&&(this._fsImageLoaded=!1)}_close(){this.dispatchEvent(new CustomEvent("preview-close",{bubbles:!0,composed:!0}))}_exitFullscreen(){var t;(t=document.exitFullscreen)==null||t.call(document)}_fullscreen(){var e,s,i,a,r,o;if(((s=(e=this.asset)==null?void 0:e.extension)==null?void 0:s.toLowerCase())==="pdf"&&((a=(i=this.asset)==null?void 0:i.url)!=null&&a.cdn)){window.open(this.asset.url.cdn,"_blank","noopener");return}this._fsImageLoaded=!1,(o=(r=this.previewArea)==null?void 0:r.requestFullscreen)==null||o.call(r)}_select(){if(!this.asset)return;if(!this.multiSelect){this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0,composed:!0}));return}const t=this._getCurrentIndex();this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:t,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0})},bubbles:!0,composed:!0}))}_getCurrentIndex(){return!this.asset||this.assets.length===0?-1:this.assets.findIndex(t=>t.uuid===this.asset.uuid)}_navigateTo(t){this._fsImageLoaded=!1,this.dispatchEvent(new CustomEvent("preview-navigate",{detail:{asset:t},bubbles:!0,composed:!0}))}_supportsFullscreen(t){const e=Ht(t.type);return e==="image"||e==="video"||e==="audio"}_findNavTarget(t,e){const s=e===1?this.assets.length:-1;for(let i=t+e;i!==s;i+=e)if(!this._isFullscreen||this._supportsFullscreen(this.assets[i]))return i;return-1}_prev(){const t=this._getCurrentIndex();if(t<=0)return;const e=this._findNavTarget(t,-1);e>=0&&this._navigateTo(this.assets[e])}_next(){const t=this._getCurrentIndex();if(t<0||t>=this.assets.length-1)return;const e=this._findNavTarget(t,1);e>=0&&this._navigateTo(this.assets[e])}_getFullscreenImageUrl(t){var a,r;const e=(a=t.url)==null?void 0:a.cdn;if(!e)return ti(t)||"";const s={source:"asset",asset:t};if(((r=t.extension)==null?void 0:r.toLowerCase())==="svg")return Ye(e,s);const i=Yt(e,this.containerToken);return Ye(Ft(i,{w:String(window.screen.width),dpr:String(window.devicePixelRatio||1),org_if_sml:"1"}),s)}_getBlurDimensions(t){var o,n;const e=(o=t.info)==null?void 0:o.img_w,s=(n=t.info)==null?void 0:n.img_h;if(!e||!s)return{width:"100vw",height:"100vh"};const i=window.innerWidth,a=window.innerHeight,r=Math.min(i/e,a/s,1);return{width:`${Math.round(e*r)}px`,height:`${Math.round(s*r)}px`}}_onFsImageLoad(){this._fsImageLoaded=!0}_getTagEntries(t){if(!t)return[];if(Array.isArray(t))return this._parseTagArray(t);const e=Object.values(t);if(e.length>0&&Array.isArray(e[0])){const s=e.flat(),i=new Set;return s.filter(a=>!a.label||i.has(a.sid)?!1:(i.add(a.sid),!0))}return e.map(s=>({label:s.label,sid:s.sid})).filter(s=>s.label)}_parseTagArray(t){return t.map(e=>{if(typeof e=="string")return{label:e,sid:e};const s=e;return{label:s.label||Object.values(s.names||{})[0]||"",sid:s.sid||""}}).filter(e=>e.label)}_applyTagFilter(t){this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:C.TAGS,values:[t],operator:K.IS},bubbles:!0,composed:!0}))}_applyLabelFilter(t){this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:C.LABELS,values:[t],operator:K.IS},bubbles:!0,composed:!0}))}_toggleSection(t){const e=new Set(this._openSections);e.has(t)?e.delete(t):e.add(t),this._openSections=e}_renderFileInfoSection(t){const e=this._getFileInfoRows(t);if(e.length===0)return v;const s=this._openSections.has("file-info");return c`
      <div class="accordion">
        <button
          class="accordion-trigger"
          aria-expanded=${s?"true":"false"}
          @click=${()=>this._toggleSection("file-info")}
        >
          <span>${this.t("fileInfo","File info")}</span>
          <svg class="accordion-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </button>
        <div class="accordion-content ${s?"open":""}">
          ${e.map(i=>c`
            <div class="meta-row">
              <span class="meta-label" title=${i.label}>${i.label}</span>
              <span class="meta-value" title=${i.value}>${i.value}</span>
            </div>
          `)}
          ${this._renderTagsRow(t)}
          ${this._renderLabelsRow(t)}
        </div>
      </div>
    `}_renderAccordion(t,e,s){if(s.length===0)return v;const i=this._openSections.has(t);return c`
      <div class="accordion">
        <button
          class="accordion-trigger"
          aria-expanded=${i?"true":"false"}
          @click=${()=>this._toggleSection(t)}
        >
          <span>${e}</span>
          <svg class="accordion-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </button>
        <div class="accordion-content ${i?"open":""}">
          ${s.map(a=>c`
            <div class="meta-row">
              <span class="meta-label" title=${a.label}>${a.label}</span>
              <span class="meta-value" title=${a.value}>${a.value}</span>
            </div>
          `)}
        </div>
      </div>
    `}_getFileInfoRows(t){var s,i,a,r,o,n;const e=[];return e.push({label:this.t("fileName","File name"),value:t.name}),t.extension&&e.push({label:this.t("fileType","Type"),value:t.extension.toUpperCase()}),(s=t.size)!=null&&s.bytes&&e.push({label:this.t("fileSize","Size"),value:Zi(t.size.bytes)}),(i=t.info)!=null&&i.img_w&&e.push({label:this.t("dimensions","Dimensions"),value:Dr(t.info.img_w,t.info.img_h)}),(a=t.info)!=null&&a.video_w&&e.push({label:this.t("videoResolution","Video resolution"),value:`${t.info.video_w} x ${t.info.video_h}`}),(((r=t.info)==null?void 0:r.video_duration)??((o=t.info)==null?void 0:o.duration))!=null&&e.push({label:this.t("duration","Duration"),value:`${Math.round(t.info.video_duration??t.info.duration)}s`}),(n=t.info)!=null&&n.color_space&&e.push({label:this.t("colorSpace","Color space"),value:t.info.color_space}),t.created_at&&e.push({label:this.t("created","Created"),value:ai(t.created_at)}),t.modified_at&&e.push({label:this.t("modified","Modified"),value:ai(t.modified_at)}),e}_buildFieldMap(){const t=new Map;for(const e of this.metadataFields)t.set(e.key,e),e.ckey&&t.set(e.ckey,e),e.slug&&t.set(e.slug,e);return t}_resolveSlug(t,e){var i;if(!((i=e.possible_values)!=null&&i.length)||!t.startsWith("@"))return t;const s=e.possible_values.find(a=>a.internal_unique_value===t||a.api_value===t);return(s==null?void 0:s.label)??t}_resolveFieldValue(t,e){var s;if(t==null||t==="")return"";if(e.regionalVariantsGroupUuid&&typeof t=="object"&&t!==null&&!Array.isArray(t)){const i=this.regionalFilters[e.regionalVariantsGroupUuid];if(i){const a=t[i];if(a!=null&&a!=="")return this._resolveFieldValue(a,{...e,regionalVariantsGroupUuid:void 0})}return""}if((s=e.possible_values)!=null&&s.length)return Array.isArray(t)?t.map(a=>this._resolveSlug(String(a),e)).filter(Boolean).join(", "):this._resolveSlug(String(t),e);if(Array.isArray(t))return t.join(", ");if(typeof t=="object"){const i=JSON.stringify(t);return i==="{}"||i==="[]"?"":i}return String(t)}_getAllMetadataRows(t){var r,o,n,l;const e=[],s=this._buildFieldMap(),i=new Set;if(this.metadataFields.length>0){const d=t;for(const h of this.metadataFields){const u=d[h.key]??((o=(r=t.info)==null?void 0:r.metadata)==null?void 0:o[h.key])??((n=t.meta)==null?void 0:n[h.key]),p=this._resolveFieldValue(u,h);if(!p)continue;i.add(h.key),h.slug&&i.add(h.slug);const g=p.length>50;e.push({label:h.label,value:p,wrap:g})}}if(t.meta)for(const[d,h]of Object.entries(t.meta)){if(i.has(d)||h==null||h==="")continue;const u=s.get(d);if(u){const p=this._resolveFieldValue(h,u);if(!p)continue;i.add(d);const g=p.length>50;e.push({label:u.label,value:p,wrap:g})}else{const p=typeof h=="object"?JSON.stringify(h):String(h);if(!p||p==="{}"||p==="[]")continue;i.add(d);const g=d.charAt(0).toUpperCase()+d.slice(1).replace(/_/g," "),b=p.length>50;e.push({label:g,value:p,wrap:b})}}const a=(l=t.info)==null?void 0:l.metadata;if(a&&typeof a=="object")for(const[d,h]of Object.entries(a)){if(i.has(d)||h==null||h==="")continue;const u=s.get(d);if(u){const p=this._resolveFieldValue(h,u);if(!p)continue;i.add(d);const g=p.length>50;e.push({label:u.label,value:p,wrap:g})}else{const p=typeof h=="object"?JSON.stringify(h):String(h);if(!p||p==="{}"||p==="[]")continue;i.add(d);const g=d.charAt(0).toUpperCase()+d.slice(1).replace(/_/g," "),b=p.length>50;e.push({label:g,value:p,wrap:b})}}return e}_getAssetLabels(t){return!t.labels||t.labels.length===0?[]:t.labels.map(e=>this.labels.find(s=>s.sid===e||s.uuid===e)).filter(e=>!!e)}_renderLabelsRow(t){const e=this._getAssetLabels(t);return e.length===0?v:c`
      <div class="meta-row meta-row--col">
        <span class="meta-label">${this.t("labels","Labels")}</span>
        <div class="tags-list">
          ${e.map(s=>c`
            <ap-badge class="tag-link" ${B({"--ap-muted":`${s.color}22`,"--ap-muted-foreground":s.color})} @click=${()=>this._applyLabelFilter(s.sid||s.uuid)}>
              <span class="label-content">
                <ap-icon name="tag" .size=${12} ${B({color:s.color})}></ap-icon>
                ${s.name}
              </span>
            </ap-badge>
          `)}
        </div>
      </div>
    `}_renderTagsRow(t){const e=this._getTagEntries(t.tags);return e.length===0?v:c`
      <div class="meta-row">
        <span class="meta-label">${this.t("tags","Tags")}</span>
        <div class="tags-list">
          ${e.map(s=>c`
            <ap-badge class="tag-link" @click=${()=>this._applyTagFilter(s.sid)}>${s.label}</ap-badge>
          `)}
        </div>
      </div>
    `}render(){var T,E,H,A,Q,z,F,ee;const t=this.asset;if(!t)return v;const e=Ht(t.type),s=e==="image",i=e==="video",a=e==="audio",r=((T=t.extension)==null?void 0:T.toLowerCase())==="pdf",o=Is(t.extension||""),n=qi(t.extension||""),l=((E=t.extension)==null?void 0:E.toLowerCase())==="svg",d=ti(t),h=s?l?Ye(((H=t.url)==null?void 0:H.cdn)||"",{source:"asset",asset:t}):d||Ye(Yt(((A=t.url)==null?void 0:A.cdn)||"",this.containerToken),{source:"asset",asset:t}):"",u=s?this._getFullscreenImageUrl(t):"",p=s&&!l?this._getBlurDimensions(t):null,g=i&&((Q=t.url)==null?void 0:Q.cdn)||"",b=i?Ye(((z=t.info)==null?void 0:z.video_thumbnail)||((F=t.info)==null?void 0:F.preview)||"",{source:"video",asset:t}):"",y=r&&!s?Hi(t):"",_=this._getCurrentIndex(),S=_>0&&this._findNavTarget(_,-1)>=0,k=_>=0&&this._findNavTarget(_,1)>=0,N=this.assets.length>1;return c`
      <div class="panel">
        <div class="panel-header">
          <span class="panel-title" title=${t.name}>${t.name}</span>
          <div class="header-actions">
            <button class="icon-btn" @click=${this._fullscreen} ?disabled=${!s&&!i&&!a&&!r} aria-label=${this.t("fullscreen","Fullscreen")} title=${this.t("fullscreen","Fullscreen")}>
              <ap-icon name="fullscreen" .size=${16}></ap-icon>
            </button>
            <button class="icon-btn ${this.asset&&this.selectedIds.includes(this.asset.uuid)?"selected":""}" @click=${this._select} aria-label=${this.t("select","Select")} title=${this.t("selectAsset","Select the asset")}>
              <ap-icon name="select" .size=${16}></ap-icon>
            </button>
            <div class="header-divider"></div>
            <button class="icon-btn" @click=${this._close} aria-label="Close">
              <ap-icon name="close" .size=${16}></ap-icon>
            </button>
          </div>
        </div>

        <div class="preview-area ${s&&n?"chess":""}">
          ${N?c`
            <button class="nav-btn prev" @click=${this._prev} ?disabled=${!S} aria-label=${this.t("previous","Previous")}>
              <ap-icon name="chevron-left" .size=${16}></ap-icon>
            </button>
            <button class="nav-btn next" @click=${this._next} ?disabled=${!k} aria-label=${this.t("next","Next")}>
              <ap-icon name="chevron-right" .size=${16}></ap-icon>
            </button>
          `:v}
          ${this._isFullscreen?c`
            <button class="fs-close-btn" @click=${this._exitFullscreen} aria-label=${this.t("exitFullscreen","Exit fullscreen")}>
              <ap-icon name="close" .size=${16}></ap-icon>
            </button>
          `:v}
          ${this._previewLoading?c`<div class="preview-loading"><div class="spinner"></div></div>`:v}
          ${s?c`
            <img
              src=${h}
              alt=${t.name}
              @load=${X=>{X.target.classList.remove("icon-fallback"),this._previewLoading=!1}}
              @error=${X=>{const Z=X.target;this._previewLoading=!1,Z.src!==o&&(Z.src=o,Z.classList.add("icon-fallback"))}}
            />
            <div class="fs-wrapper">
              ${l?v:c`
                <img
                  class="fs-blur ${this._fsImageLoaded?"hidden":""}"
                  src=${h}
                  alt=""
                  ${B({width:p.width,height:p.height})}
                />
              `}
              <img
                class="fs-full ${l||this._fsImageLoaded?"loaded":""}"
                src=${this._isFullscreen?u:""}
                alt=${t.name}
                ${B(l?{width:"100vw",height:"100vh"}:null)}
                @load=${this._onFsImageLoad}
              />
            </div>
          `:v}
          ${i?c`<video src=${g} poster=${b||v} controls controlsList="nofullscreen" @loadeddata=${()=>{this._previewLoading=!1}} @error=${()=>{this._previewLoading=!1}}></video>`:v}
          ${a?c`<audio src=${((ee=t.url)==null?void 0:ee.cdn)||""} controls></audio>`:v}
          ${r&&!s?c`
            <img
              src=${y||o}
              alt=${t.name}
              class=${y?"":"icon-fallback"}
              @error=${X=>{const Z=X.target;Z.src!==o&&(Z.src=o,Z.classList.add("icon-fallback"))}}
            />
          `:v}
          ${!s&&!i&&!a&&!r?c`<img src=${o} alt=${t.name} class="icon-fallback" />`:v}
        </div>

        ${this._renderFileInfoSection(t)}
        ${this.showMetadata?c`
          ${this._renderAccordion("metadata",this.t("metadata","Metadata"),this._getAllMetadataRows(t))}
        `:v}
      </div>
    `}};se.styles=I`
    :host {
      display: block;
    }
    .panel {
      width: 420px;
      min-width: 420px;
      max-width: 100%;
      height: 100%;
      background: var(--ap-background, oklch(1 0 0));
      border-left: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      display: flex;
      flex-direction: column;
      animation: ap-panel-in 300ms ease-out;
      overflow-y: auto;
      user-select: none;
    }
    @keyframes ap-panel-in {
      from { transform: translateX(100%); }
      to { transform: translateX(0); }
    }
    .panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      height: 50px;
      min-height: 50px;
      padding: 0 16px;
    }
    .panel-title {
      font-size: 14px;
      font-weight: 600;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      user-select: none;
    }
    .header-actions {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .header-divider {
      width: 1px;
      height: 16px;
      background: var(--ap-border, oklch(92.86% 0.009 247.92));
      margin: 0 2px;
    }
    .icon-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border: none;
      border-radius: var(--ap-radius-sm, 6px);
      background: none;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      cursor: pointer;
    }
    .icon-btn:hover:not(:disabled) {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .icon-btn:disabled {
      opacity: 0.3;
      cursor: default;
    }
    .icon-btn.selected {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: #fff;
    }
    .icon-btn.selected:hover {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: #fff;
      opacity: 0.9;
    }
    .preview-area {
      position: relative;
      padding: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      min-height: 300px;
      height: 300px;
      flex-shrink: 0;
      overflow: hidden;
    }
    .preview-loading {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      z-index: 3;
    }
    .preview-loading .spinner {
      width: 24px;
      height: 24px;
      border: 2.5px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-top-color: var(--ap-primary, oklch(0.578 0.198 268.129));
      border-radius: 50%;
      animation: ap-spin 0.6s linear infinite;
    }
    @keyframes ap-spin {
      to { transform: rotate(360deg); }
    }
    .preview-area img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      border-radius: var(--ap-radius-sm, 6px);
      -webkit-user-drag: none;
      pointer-events: none;
    }
    .preview-area.chess {
      background-image: conic-gradient(var(--ap-chess-a, #f0f0f0) 25%, var(--ap-chess-b, #fff) 25% 50%, var(--ap-chess-a, #f0f0f0) 50% 75%, var(--ap-chess-b, #fff) 75%);
      background-size: 16px 16px;
    }
    .preview-area img.icon-fallback {
      object-fit: scale-down;
      padding: 16px;
      max-width: 100px;
    }
    .preview-area video {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
    /* Fullscreen styles */
    .preview-area:fullscreen {
      background: #000;
      padding: 0;
    }
    .preview-area:fullscreen .fs-wrapper {
      position: relative;
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .preview-area:fullscreen .fs-wrapper .fs-blur {
      position: absolute;
      inset: 0;
      margin: auto;
      object-fit: contain;
      filter: blur(8px);
      overflow: hidden;
      clip-path: inset(0);
      transition: opacity 0.3s ease;
    }
    .preview-area:fullscreen .fs-wrapper .fs-blur.hidden {
      opacity: 0;
      pointer-events: none;
    }
    .preview-area:fullscreen .fs-wrapper .fs-full {
      position: relative;
      z-index: 1;
      max-width: 100vw;
      max-height: 100vh;
      object-fit: contain;
      border-radius: 0;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    .preview-area:fullscreen .fs-wrapper .fs-full.loaded {
      opacity: 1;
    }
    /* Hide panel img in fullscreen, show fs-wrapper instead */
    .preview-area:fullscreen > img { display: none; }
    .fs-wrapper { display: none; }
    .preview-area:fullscreen .fs-wrapper { display: flex; }
    .preview-area:fullscreen img {
      max-height: 100vh;
      max-width: 100vw;
      border-radius: 0;
    }
    .preview-area:fullscreen video {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .preview-area:fullscreen .nav-btn {
      background: rgba(0,0,0,0.5);
      color: #fff;
      width: 40px;
      height: 40px;
    }
    .preview-area:fullscreen .nav-btn:hover:not(:disabled) {
      background: rgba(0,0,0,0.7);
    }
    .fs-close-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 16px;
      right: 16px;
      width: 40px;
      height: 40px;
      border: none;
      border-radius: 50%;
      background: rgba(0,0,0,0.5);
      color: #fff;
      cursor: pointer;
      z-index: 3;
    }
    .fs-close-btn:hover {
      background: rgba(0,0,0,0.7);
    }
    .nav-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border: none;
      border-radius: 50%;
      background: var(--ap-background, oklch(1 0 0));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      cursor: pointer;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
      z-index: 2;
    }
    .nav-btn:hover:not(:disabled) {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .nav-btn:disabled {
      opacity: 0.3;
      cursor: default;
    }
    .nav-btn.prev { left: 8px; }
    .nav-btn.next { right: 8px; }
    .tags-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .meta-row--col {
      flex-direction: column;
      gap: 6px;
    }
    .label-content {
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
    .tag-link {
      cursor: pointer;
      transition: opacity 150ms;
    }
    .tag-link:hover {
      opacity: 0.75;
    }
    /* Accordion styles */
    .accordion-trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 12px 16px;
      border: none;
      background: none;
      cursor: pointer;
      font-family: inherit;
      font-size: 0.8125rem;
      font-weight: 600;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      text-align: left;
    }
    .accordion-trigger:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .accordion-chevron {
      transition: transform 200ms;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .accordion-trigger[aria-expanded="true"] .accordion-chevron {
      transform: rotate(180deg);
    }
    .accordion-content {
      display: none;
      padding: 0 16px 12px;
    }
    .accordion-content.open {
      display: block;
    }
    .meta-row {
      display: flex;
      gap: 12px;
      padding: 6px 0;
    }
    .meta-label {
      font-size: 0.8125rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      flex-shrink: 0;
      width: 100px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .meta-value {
      font-size: 0.8125rem;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      min-width: 0;
      user-select: text;
      word-break: break-word;
    }
    @media (prefers-reduced-motion: reduce) {
      .panel { animation: none; }
      .accordion-chevron { transition: none; }
    }
  `;de([f({type:Object})],se.prototype,"asset",2);de([f({type:Array})],se.prototype,"assets",2);de([f({type:Array})],se.prototype,"selectedIds",2);de([f()],se.prototype,"containerToken",2);de([f({type:Boolean})],se.prototype,"showMetadata",2);de([f({type:Array})],se.prototype,"metadataFields",2);de([f({type:Array})],se.prototype,"labels",2);de([f({type:Object})],se.prototype,"regionalFilters",2);de([f({type:Boolean})],se.prototype,"multiSelect",2);de([f({attribute:!1})],se.prototype,"t",2);de([ut(".preview-area")],se.prototype,"previewArea",2);de([ut("video")],se.prototype,"_videoEl",2);de([w()],se.prototype,"_isFullscreen",2);de([w()],se.prototype,"_fsImageLoaded",2);de([w()],se.prototype,"_previewLoading",2);de([w()],se.prototype,"_openSections",2);se=de([R("ap-preview-panel")],se);var cd=Object.defineProperty,dd=Object.getOwnPropertyDescriptor,oa=(t,e,s,i)=>{for(var a=i>1?void 0:i?dd(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&cd(e,s,a),a};const pd={sparkles:[{tag:"path",attrs:{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"}},{tag:"path",attrs:{d:"M5 3v4"}},{tag:"path",attrs:{d:"M19 17v4"}},{tag:"path",attrs:{d:"M3 5h4"}},{tag:"path",attrs:{d:"M17 19h4"}}],search:[{tag:"circle",attrs:{cx:"11",cy:"11",r:"8"}},{tag:"path",attrs:{d:"m21 21-4.3-4.3"}}],check:"M20 6 9 17l-5-5","check-check":[{tag:"path",attrs:{d:"M18 6 7 17l-5-5"}},{tag:"path",attrs:{d:"m22 10-7.5 7.5L13 16"}}],close:[{tag:"path",attrs:{d:"M18 6 6 18"}},{tag:"path",attrs:{d:"m6 6 12 12"}}],"chevron-left":"m15 18-6-6 6-6","chevron-right":"m9 18 6-6-6-6","chevron-down":"m6 9 6 6 6-6",download:[{tag:"path",attrs:{d:"M12 15V3"}},{tag:"path",attrs:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"path",attrs:{d:"m7 10 5 5 5-5"}}],upload:[{tag:"path",attrs:{d:"M12 3v12"}},{tag:"path",attrs:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"path",attrs:{d:"m17 8-5-5-5 5"}}],fullscreen:[{tag:"path",attrs:{d:"M8 3H5a2 2 0 0 0-2 2v3"}},{tag:"path",attrs:{d:"M21 8V5a2 2 0 0 0-2-2h-3"}},{tag:"path",attrs:{d:"M3 16v3a2 2 0 0 0 2 2h3"}},{tag:"path",attrs:{d:"M16 21h3a2 2 0 0 0 2-2v-3"}}],trash:[{tag:"path",attrs:{d:"M10 11v6"}},{tag:"path",attrs:{d:"M14 11v6"}},{tag:"path",attrs:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}},{tag:"path",attrs:{d:"M3 6h18"}},{tag:"path",attrs:{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}}],more:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"1"}},{tag:"circle",attrs:{cx:"19",cy:"12",r:"1"}},{tag:"circle",attrs:{cx:"5",cy:"12",r:"1"}}],grid:[{tag:"rect",attrs:{x:"3",y:"3",width:"18",height:"18",rx:"2"}},{tag:"path",attrs:{d:"M12 3v18"}},{tag:"path",attrs:{d:"M3 12h18"}}],list:[{tag:"path",attrs:{d:"M3 5h.01"}},{tag:"path",attrs:{d:"M3 12h.01"}},{tag:"path",attrs:{d:"M3 19h.01"}},{tag:"path",attrs:{d:"M8 5h13"}},{tag:"path",attrs:{d:"M8 12h13"}},{tag:"path",attrs:{d:"M8 19h13"}}],preview:[{tag:"path",attrs:{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}},{tag:"circle",attrs:{cx:"12",cy:"12",r:"3"}}],select:[{tag:"path",attrs:{d:"M5 12h14"}},{tag:"path",attrs:{d:"M12 5v14"}}],"gallery-vertical-end":[{tag:"path",attrs:{d:"M7 2h10"}},{tag:"path",attrs:{d:"M5 6h14"}},{tag:"rect",attrs:{width:"18",height:"12",x:"3",y:"10",rx:"2"}}],filter:[{tag:"path",attrs:{d:"M2 5h20"}},{tag:"path",attrs:{d:"M6 12h12"}},{tag:"path",attrs:{d:"M9 19h6"}}],sort:[{tag:"path",attrs:{d:"m21 16-4 4-4-4"}},{tag:"path",attrs:{d:"M17 20V4"}},{tag:"path",attrs:{d:"m3 8 4-4 4 4"}},{tag:"path",attrs:{d:"M7 4v16"}}],"sort-asc":[{tag:"path",attrs:{d:"m3 8 4-4 4 4"}},{tag:"path",attrs:{d:"M7 4v16"}},{tag:"path",attrs:{d:"M11 12h4"}},{tag:"path",attrs:{d:"M11 16h7"}},{tag:"path",attrs:{d:"M11 20h10"}}],"sort-desc":[{tag:"path",attrs:{d:"m3 16 4 4 4-4"}},{tag:"path",attrs:{d:"M7 20V4"}},{tag:"path",attrs:{d:"M11 4h4"}},{tag:"path",attrs:{d:"M11 8h7"}},{tag:"path",attrs:{d:"M11 12h10"}}],image:[{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}},{tag:"circle",attrs:{cx:"9",cy:"9",r:"2"}},{tag:"path",attrs:{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}}],video:[{tag:"path",attrs:{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}},{tag:"rect",attrs:{x:"2",y:"6",width:"14",height:"12",rx:"2"}}],audio:[{tag:"path",attrs:{d:"M9 18V5l12-2v13"}},{tag:"circle",attrs:{cx:"6",cy:"18",r:"3"}},{tag:"circle",attrs:{cx:"18",cy:"16",r:"3"}}],music:[{tag:"path",attrs:{d:"M9 18V5l12-2v13"}},{tag:"circle",attrs:{cx:"6",cy:"18",r:"3"}},{tag:"circle",attrs:{cx:"18",cy:"16",r:"3"}}],document:[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 9H8"}},{tag:"path",attrs:{d:"M16 13H8"}},{tag:"path",attrs:{d:"M16 17H8"}}],"file-text":[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 9H8"}},{tag:"path",attrs:{d:"M16 13H8"}},{tag:"path",attrs:{d:"M16 17H8"}}],file:[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}}],archive:[{tag:"rect",attrs:{width:"20",height:"5",x:"2",y:"3",rx:"1"}},{tag:"path",attrs:{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}},{tag:"path",attrs:{d:"M10 12h4"}}],font:[{tag:"path",attrs:{d:"M12 4v16"}},{tag:"path",attrs:{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"}},{tag:"path",attrs:{d:"M9 20h6"}}],text:[{tag:"path",attrs:{d:"M12 4v16"}},{tag:"path",attrs:{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"}},{tag:"path",attrs:{d:"M9 20h6"}}],clapperboard:[{tag:"path",attrs:{d:"m12.296 3.464 3.02 3.956"}},{tag:"path",attrs:{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z"}},{tag:"path",attrs:{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}},{tag:"path",attrs:{d:"m6.18 5.276 3.1 3.899"}}],folder:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z","folder-open":"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2","folder-plus":[{tag:"path",attrs:{d:"M12 10v6"}},{tag:"path",attrs:{d:"M9 13h6"}},{tag:"path",attrs:{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}}],inbox:[{tag:"path",attrs:{d:"M22 12L16 12L14 15L10 15L8 12L2 12"}},{tag:"path",attrs:{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}}],tags:[{tag:"path",attrs:{d:"M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z"}},{tag:"path",attrs:{d:"M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193"}},{tag:"circle",attrs:{cx:"10.5",cy:"6.5",r:".5",fill:"currentColor"}}],tag:[{tag:"path",attrs:{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}},{tag:"circle",attrs:{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}}],hash:[{tag:"path",attrs:{d:"M4 9h16"}},{tag:"path",attrs:{d:"M4 15h16"}},{tag:"path",attrs:{d:"M10 3 8 21"}},{tag:"path",attrs:{d:"M14 3 16 21"}}],calendar:[{tag:"path",attrs:{d:"M8 2v4"}},{tag:"path",attrs:{d:"M16 2v4"}},{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"4",rx:"2"}},{tag:"path",attrs:{d:"M3 10h18"}}],"file-type":[{tag:"path",attrs:{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}},{tag:"path",attrs:{d:"M14 2v4a2 2 0 0 0 2 2h4"}},{tag:"path",attrs:{d:"M2 13v-1h6v1"}},{tag:"path",attrs:{d:"M5 12v6"}},{tag:"path",attrs:{d:"M4 18h2"}}],scaling:[{tag:"path",attrs:{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}},{tag:"path",attrs:{d:"M14 15H9v-5"}},{tag:"path",attrs:{d:"M20 9V4h-5"}},{tag:"path",attrs:{d:"M20 4l-6 6"}}],history:[{tag:"path",attrs:{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}},{tag:"path",attrs:{d:"M3 3v5h5"}},{tag:"path",attrs:{d:"M12 7v5l4 2"}}],"swatch-book":[{tag:"path",attrs:{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"}},{tag:"path",attrs:{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"}},{tag:"path",attrs:{d:"M7 17h.01"}},{tag:"path",attrs:{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"}}],"badge-check":[{tag:"path",attrs:{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}},{tag:"path",attrs:{d:"m9 12 2 2 4-4"}}],box:[{tag:"path",attrs:{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}},{tag:"path",attrs:{d:"m3.3 7 8.7 5 8.7-5"}},{tag:"path",attrs:{d:"M12 22V12"}}],"layout-grid":[{tag:"rect",attrs:{width:"7",height:"7",x:"3",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"14",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"14",y:"14",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"3",y:"14",rx:"1"}}],"layout-template":[{tag:"rect",attrs:{width:"18",height:"7",x:"3",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"9",height:"7",x:"3",y:"14",rx:"1"}},{tag:"rect",attrs:{width:"5",height:"7",x:"16",y:"14",rx:"1"}}],pin:[{tag:"path",attrs:{d:"M12 17v5"}},{tag:"path",attrs:{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 2-2H6a2 2 0 0 0 2 2 1 1 0 0 1 1 1z"}}],"pin-off":[{tag:"path",attrs:{d:"M12 17v5"}},{tag:"path",attrs:{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 2-2H6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v2.34"}},{tag:"path",attrs:{d:"M2 2l20 20"}},{tag:"path",attrs:{d:"M9 12a2 2 0 0 1-1.11 1.79l-1.78.9"}},{tag:"path",attrs:{d:"M17 17H5"}}],lock:[{tag:"rect",attrs:{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}},{tag:"path",attrs:{d:"M7 11V7a5 5 0 0 1 10 0v4"}}],globe:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}},{tag:"path",attrs:{d:"M2 12h20"}}],"circle-check-big":[{tag:"path",attrs:{d:"M21.801 10A10 10 0 1 1 17 3.335"}},{tag:"path",attrs:{d:"m9 11 3 3L22 4"}}],"x-circle":[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"m15 9-6 6"}},{tag:"path",attrs:{d:"m9 9 6 6"}}],ban:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"m4.9 4.9 14.2 14.2"}}],clock:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"M12 6v6l4 2"}}],"toggle-left":[{tag:"rect",attrs:{width:"20",height:"14",x:"2",y:"5",rx:"7"}},{tag:"circle",attrs:{cx:"9",cy:"12",r:"3"}}],"file-digit":[{tag:"path",attrs:{d:"M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 16h2v6"}},{tag:"path",attrs:{d:"M10 22h4"}},{tag:"rect",attrs:{width:"4",height:"6",x:"2",y:"16",rx:"2"}}],"decimals-arrow-right":[{tag:"path",attrs:{d:"M10 18h10"}},{tag:"path",attrs:{d:"m17 21 3-3-3-3"}},{tag:"path",attrs:{d:"M3 11h.01"}},{tag:"rect",attrs:{width:"5",height:"8",x:"15",y:"3",rx:"2.5"}},{tag:"rect",attrs:{width:"5",height:"8",x:"6",y:"3",rx:"2.5"}}],"text-initial":[{tag:"path",attrs:{d:"M15 5h6"}},{tag:"path",attrs:{d:"M15 12h6"}},{tag:"path",attrs:{d:"M3 19h18"}},{tag:"path",attrs:{d:"m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12"}},{tag:"path",attrs:{d:"M3.92 10h6.16"}}],"text-align-justify":[{tag:"path",attrs:{d:"M3 5h18"}},{tag:"path",attrs:{d:"M3 12h18"}},{tag:"path",attrs:{d:"M3 19h18"}}],paperclip:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551","link-2":[{tag:"path",attrs:{d:"M9 17H7A5 5 0 0 1 7 7h2"}},{tag:"path",attrs:{d:"M15 7h2a5 5 0 1 1 0 10h-2"}},{tag:"path",attrs:{d:"M8 12h8"}}],"circle-dot":[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"circle",attrs:{cx:"12",cy:"12",r:"1"}}],"square-check":[{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"3",rx:"2"}},{tag:"path",attrs:{d:"m9 12 2 2 4-4"}}],locate:[{tag:"path",attrs:{d:"M2 12h3"}},{tag:"path",attrs:{d:"M19 12h3"}},{tag:"path",attrs:{d:"M12 2v3"}},{tag:"path",attrs:{d:"M12 19v3"}},{tag:"circle",attrs:{cx:"12",cy:"12",r:"7"}}],"list-ordered":[{tag:"path",attrs:{d:"M11 5h10"}},{tag:"path",attrs:{d:"M11 12h10"}},{tag:"path",attrs:{d:"M11 19h10"}},{tag:"path",attrs:{d:"M4 4h1v5"}},{tag:"path",attrs:{d:"M4 9h2"}},{tag:"path",attrs:{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02"}}],plus:[{tag:"path",attrs:{d:"M5 12h14"}},{tag:"path",attrs:{d:"M12 5v14"}}],component:[{tag:"path",attrs:{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}}]};let Ts=class extends O{constructor(){super(...arguments),this.name="",this.size=20}render(){const t=pd[this.name];if(!t)return v;const e=typeof t=="string"?nt`<path d=${t}></path>`:t.map(s=>{const{tag:i,attrs:a}=s;return i==="circle"?nt`<circle cx=${a.cx} cy=${a.cy} r=${a.r} fill=${a.fill??"none"}></circle>`:i==="rect"?nt`<rect width=${a.width} height=${a.height} x=${a.x} y=${a.y} rx=${a.rx??"0"} ry=${a.ry??"0"}></rect>`:nt`<path d=${a.d}></path>`});return c`
      <svg
        ${B({"--icon-size":`${this.size}px`})}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        ${e}
      </svg>
    `}};Ts.styles=[I`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      svg {
        width: var(--icon-size, 20px);
        height: var(--icon-size, 20px);
      }
    `];oa([f()],Ts.prototype,"name",2);oa([f({type:Number})],Ts.prototype,"size",2);Ts=oa([R("ap-icon")],Ts);var hd=Object.defineProperty,ud=Object.getOwnPropertyDescriptor,Qe=(t,e,s,i)=>{for(var a=i>1?void 0:i?ud(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&hd(e,s,a),a};let Ie=class extends O{constructor(){super(...arguments),this.selectedAssets=[],this.selectedFolders=[],this.totalCount=0,this.totalFolderCount=0,this.isSelectingAll=!1,this.multiSelect=!0,this.showTransform=!1,this.t=(t,e)=>typeof e=="string"?e:t}get _totalSelected(){return this.selectedAssets.length+this.selectedFolders.length}_formatCount(){const{t}=this,e=this.selectedAssets.length,s=this.selectedFolders.length;if(s===0)return t("assetsSelected",{count:e,defaultValue_one:"{{count}} asset selected",defaultValue_other:"{{count}} assets selected"});if(e===0)return t("foldersSelected",{count:s,defaultValue_one:"{{count}} folder selected",defaultValue_other:"{{count}} folders selected"});const i=t("foldersCount",{count:s,defaultValue_one:"{{count}} folder",defaultValue_other:"{{count}} folders"}),a=t("assetsCount",{count:e,defaultValue_one:"{{count}} asset",defaultValue_other:"{{count}} assets"});return t("foldersAndAssetsSelected","{{folders}} and {{assets}} selected",{folders:i,assets:a})}_confirm(){this.dispatchEvent(new CustomEvent("selection-confirm",{detail:{assets:this.selectedAssets,folders:this.selectedFolders},bubbles:!0,composed:!0}))}_transform(){this.dispatchEvent(new CustomEvent("selection-transform",{detail:{assets:this.selectedAssets,folders:this.selectedFolders},bubbles:!0,composed:!0}))}_clear(){this.dispatchEvent(new CustomEvent("selection-clear",{bubbles:!0,composed:!0}))}_canSelectMore(){if(this.maxSelections&&this._totalSelected>=this.maxSelections)return!1;const t=this._selectScope;return t==="assets"?this.selectedAssets.length<this.totalCount:t==="folders"?this.selectedFolders.length<this.totalFolderCount:this._totalSelected<this.totalCount+this.totalFolderCount}get _scopeTotal(){const t=this._selectScope;return t==="assets"?this.totalCount:t==="folders"?this.totalFolderCount:this.totalCount+this.totalFolderCount}get _selectScope(){const t=this.selectedAssets.length>0,e=this.selectedFolders.length>0;return t&&!e?"assets":e&&!t?"folders":"all"}_selectAll(){this.dispatchEvent(new CustomEvent("select-all",{detail:{scope:this._selectScope},bubbles:!0,composed:!0}))}render(){return this._totalSelected===0?v:c`
      <div class="bar">
        <span class="count">${this._formatCount()}</span>
        ${this.multiSelect?c`
          <span class="divider"></span>
          <span class="select-label">Select:</span>
          ${this._canSelectMore()?c`<button
                class="bar-btn"
                ?disabled=${this.isSelectingAll}
                @click=${this._selectAll}
              ><ap-icon name="check-check" .size=${14}></ap-icon>${this.isSelectingAll?this.t("selecting","Selecting..."):this.maxSelections&&this.maxSelections<this._scopeTotal?this.t("selectFirst",`First ${this.maxSelections}`,{count:this.maxSelections}):this._selectScope==="assets"?this.t("selectAllAssets","Select all assets"):this._selectScope==="folders"?this.t("selectAllFolders","Select all folders"):this.t("selectAll","Select all")}</button>`:v}
          <button class="bar-btn" @click=${this._clear}><ap-icon name="close" .size=${14}></ap-icon>${this.t("deselectAll","Deselect all")}</button>
          ${this.maxSelections&&this._totalSelected>=this.maxSelections?c`<span class="limit-notice">${this.t("maxSelectionsAllowed",`Max ${this.maxSelections} allowed`,{count:this.maxSelections})}</span>`:v}
        `:v}
        <div class="spacer"></div>
        ${this.showTransform?c`
          <button class="btn-confirm btn-transform" @click=${this._transform}>${this.t("transform","Transform")}</button>
        `:v}
        <button class="btn-confirm" @click=${this._confirm}>${this.t("confirm","Confirm")}</button>
      </div>
    `}};Ie.styles=I`
    :host {
      display: block;
      padding: 0 8px 8px;
    }
    .bar {
      display: flex;
      align-items: center;
      padding: 12px 20px;
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      border-radius: var(--ap-radius-lg, 12px);
      animation: ap-bar-in 250ms ease-out;
    }
    @keyframes ap-bar-in {
      from { transform: translateY(100%); }
      to { transform: translateY(0); }
    }
    .count {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-primary-foreground, oklch(1 0 0));
      white-space: nowrap;
    }
    .divider {
      width: 1px;
      height: 20px;
      background: oklch(1 0 0 / 0.3);
      margin: 0 16px;
      flex-shrink: 0;
    }
    .select-label {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: oklch(1 0 0 / 0.7);
      white-space: nowrap;
    }
    .bar-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      height: 32px;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-primary-foreground, oklch(1 0 0));
      background: none;
      border: none;
      cursor: pointer;
      padding: 0 14px;
      margin-left: 8px;
      font-weight: 500;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      white-space: nowrap;
      border-radius: var(--ap-radius-sm, 6px);
      transition: background 100ms;
    }
    .bar-btn:hover {
      background: oklch(1 0 0 / 0.1);
    }
    .bar-btn:disabled {
      opacity: 0.5;
      cursor: default;
    }
    .limit-notice {
      font-size: var(--ap-font-size-xs, 0.75rem);
      color: oklch(1 0 0 / 0.7);
      margin-left: 8px;
      white-space: nowrap;
    }
    .spacer {
      flex: 1;
    }
    .btn-confirm {
      padding: 8px 24px;
      border: 1.5px solid var(--ap-primary-foreground, oklch(1 0 0));
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      cursor: pointer;
      transition: background 100ms;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      background: transparent;
      color: var(--ap-primary-foreground, oklch(1 0 0));
    }
    .btn-confirm:hover {
      background: oklch(1 0 0 / 0.1);
    }
    .btn-transform {
      margin-right: 8px;
      border-color: oklch(1 0 0 / 0.5);
    }
    @media (prefers-reduced-motion: reduce) {
      .bar { animation: none; }
    }
  `;Qe([f({type:Array})],Ie.prototype,"selectedAssets",2);Qe([f({type:Array})],Ie.prototype,"selectedFolders",2);Qe([f({type:Number})],Ie.prototype,"totalCount",2);Qe([f({type:Number})],Ie.prototype,"totalFolderCount",2);Qe([f({type:Boolean})],Ie.prototype,"isSelectingAll",2);Qe([f({type:Boolean})],Ie.prototype,"multiSelect",2);Qe([f({type:Number})],Ie.prototype,"maxSelections",2);Qe([f({type:Boolean})],Ie.prototype,"showTransform",2);Qe([f({attribute:!1})],Ie.prototype,"t",2);Ie=Qe([R("ap-selection-bar")],Ie);var fd=Object.defineProperty,gd=Object.getOwnPropertyDescriptor,na=(t,e,s,i)=>{for(var a=i>1?void 0:i?gd(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&fd(e,s,a),a};let Ps=class extends O{constructor(){super(...arguments),this.active=!1,this.rect={x:0,y:0,width:0,height:0}}render(){return!this.active||this.rect.width<5||this.rect.height<5?v:c`
      <div
        class="marquee"
        ${B({left:`${this.rect.x}px`,top:`${this.rect.y}px`,width:`${this.rect.width}px`,height:`${this.rect.height}px`})}
      ></div>
    `}};Ps.styles=I`
    :host {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      min-height: 100%;
      pointer-events: none;
      z-index: 10;
    }
    .marquee {
      position: absolute;
      border: 2px solid var(--ap-primary, oklch(0.578 0.198 268.129));
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
      border-radius: 2px;
    }
  `;na([f({type:Boolean})],Ps.prototype,"active",2);na([f({type:Object})],Ps.prototype,"rect",2);Ps=na([R("ap-marquee-overlay")],Ps);var vd=Object.defineProperty,md=Object.getOwnPropertyDescriptor,zt=(t,e,s,i)=>{for(var a=i>1?void 0:i?md(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&vd(e,s,a),a};let tt=class extends O{constructor(){super(...arguments),this.value="",this.options=[],this.disabled=!1,this.clearable=!1,this.direction="vertical",this._onKeydown=t=>{const e=this.options.filter(a=>!this.disabled&&!a.disabled);if(e.length===0)return;const s=e.findIndex(a=>a.value===this.value);let i=null;switch(t.key){case"ArrowDown":case"ArrowRight":t.preventDefault(),i=s<0?0:(s+1)%e.length;break;case"ArrowUp":case"ArrowLeft":t.preventDefault(),i=s<0?e.length-1:(s-1+e.length)%e.length;break;case" ":case"Enter":t.preventDefault(),s>=0?this._select(e[s]):e.length>0&&this._select(e[0]);return;default:return}i!==null&&this._select(e[i])}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radiogroup"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this.addEventListener("keydown",this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onKeydown)}render(){return c`
      ${this.options.map(t=>c`
          <div
            class="option"
            role="radio"
            aria-checked=${t.value===this.value}
            aria-disabled=${this.disabled||t.disabled?"true":v}
            @click=${()=>this._select(t)}
          >
            <div class="radio"><div class="dot"></div></div>
            ${t.icon?c`<ap-icon name=${t.icon} .size=${16}></ap-icon>`:v}
            <span class="label">${t.label}</span>
          </div>
        `)}
    `}_select(t){if(this.disabled||t.disabled)return;const e=this.clearable&&t.value===this.value?"":t.value;this.dispatchEvent(new CustomEvent("ap-change",{detail:{value:e},bubbles:!0,composed:!0}))}};tt.styles=[me,I`
      :host {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      :host([direction="horizontal"]) {
        flex-direction: row;
        gap: 16px;
      }
      :host([columns="2"]) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
      }
      .option {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        padding: 2px 0;
      }
      .option[aria-disabled="true"] {
        opacity: 0.5;
        cursor: default;
        pointer-events: none;
      }
      .radio {
        width: 18px;
        height: 18px;
        min-width: 18px;
        border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: border-color 150ms;
        background: var(--ap-background, oklch(1 0 0));
      }
      .radio .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: transparent;
        transition: background 150ms;
      }
      .option:hover .radio {
        border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
      }
      .option[aria-checked="true"] .radio {
        border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
      }
      .option[aria-checked="true"] .radio .dot {
        background: var(--ap-primary, oklch(0.578 0.198 268.129));
      }
      .label {
        font-size: var(--ap-font-size-sm, 0.875rem);
        color: var(--ap-foreground, oklch(0.37 0.022 248.413));
        font-family: inherit;
        user-select: none;
      }
    `];zt([f()],tt.prototype,"value",2);zt([f({type:Array})],tt.prototype,"options",2);zt([f({type:Boolean})],tt.prototype,"disabled",2);zt([f({type:Boolean})],tt.prototype,"clearable",2);zt([f({reflect:!0})],tt.prototype,"direction",2);zt([f({reflect:!0})],tt.prototype,"columns",2);tt=zt([R("ap-radio-group")],tt);var bd=Object.defineProperty,yd=Object.getOwnPropertyDescriptor,Mr=(t,e,s,i)=>{for(var a=i>1?void 0:i?yd(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&bd(e,s,a),a};let ri=class extends O{constructor(){super(...arguments),this.size=24}render(){return c`<div class="spinner" ${B({width:`${this.size}px`,height:`${this.size}px`})}></div>`}};ri.styles=[I`
      :host {
        display: inline-flex;
      }
      .spinner {
        border: 2px solid var(--ap-border, oklch(92.86% 0.009 247.92));
        border-top-color: var(--ap-primary, oklch(0.578 0.198 268.129));
        border-radius: 50%;
        animation: spin 0.6s linear infinite;
      }
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `];Mr([f({type:Number})],ri.prototype,"size",2);ri=Mr([R("ap-spinner")],ri);var _d=Object.defineProperty,xd=Object.getOwnPropertyDescriptor,Rs=(t,e,s,i)=>{for(var a=i>1?void 0:i?xd(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&_d(e,s,a),a};let It=class extends O{constructor(){super(...arguments),this.folders=[],this.loading=!1,this.t=(t,e)=>typeof e=="string"?e:t,this._mode="recursive"}_handleConfirm(){this.dispatchEvent(new CustomEvent("folder-resolve-confirm",{detail:{mode:this._mode},bubbles:!0,composed:!0}))}_handleCancel(){this.dispatchEvent(new CustomEvent("folder-resolve-cancel",{bubbles:!0,composed:!0}))}_handleModeChange(t){this._mode=t.detail.value}render(){const t=this.folders.length;return c`
      <div class="backdrop" @click=${e=>{e.target===e.currentTarget&&this._handleCancel()}}>
        <div class="dialog">
          <div class="title">${this.t("addFolderContents","Add folder contents")}</div>
          <div class="description">
            ${this.t("folderResolveDescription","You selected {{count}} folder(s). How would you like to add the assets?",{count:t})}
          </div>
          <div class="options">
            <ap-radio-group
              .value=${this._mode}
              .options=${[{value:"direct",label:this.t("directAssetsOnly","Direct assets only")},{value:"recursive",label:this.t("allAssetsIncludingSubfolders","All assets (including subfolders)")}]}
              @ap-change=${this._handleModeChange}
            ></ap-radio-group>
          </div>
          <div class="actions">
            <button class="btn" @click=${this._handleCancel} ?disabled=${this.loading}>${this.t("cancel","Cancel")}</button>
            <button class="btn btn-primary" @click=${this._handleConfirm} ?disabled=${this.loading}>
              ${this.loading?c`<span class="loading-content"><ap-spinner .size=${14}></ap-spinner> ${this.t("loading","Loading...")}</span>`:this.t("addAssets","Add assets")}
            </button>
          </div>
        </div>
      </div>
    `}};It.styles=[me,I`
    :host {
      display: block;
    }
    .backdrop {
      position: fixed;
      inset: 0;
      z-index: 100;
      background: oklch(0 0 0 / 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .dialog {
      background: var(--ap-background, oklch(1 0 0));
      border-radius: var(--ap-radius-lg, 12px);
      padding: 28px 32px;
      max-width: 440px;
      width: 90%;
      box-shadow: 0 16px 48px oklch(0 0 0 / 0.16);
    }
    .title {
      font-size: 1rem;
      font-weight: 600;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      margin-bottom: 8px;
    }
    .description {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      margin-bottom: 20px;
      line-height: 1.5;
    }
    .options {
      margin-bottom: 24px;
    }
    .actions {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
    }
    .btn {
      padding: 8px 20px;
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      cursor: pointer;
      transition: background 100ms;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      background: var(--ap-background, oklch(1 0 0));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .btn:not(.btn-primary):hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .btn-primary {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: var(--ap-primary-foreground, oklch(1 0 0));
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .btn-primary:hover {
      opacity: 0.9;
    }
    .btn:disabled {
      opacity: 0.5;
      cursor: default;
    }
    .btn-primary .loading-content {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  `];Rs([f({type:Array})],It.prototype,"folders",2);Rs([f({type:Boolean})],It.prototype,"loading",2);Rs([f({attribute:!1})],It.prototype,"t",2);Rs([w()],It.prototype,"_mode",2);It=Rs([R("ap-folder-resolve-dialog")],It);var $d=Object.defineProperty,wd=Object.getOwnPropertyDescriptor,_e=(t,e,s,i)=>{for(var a=i>1?void 0:i?wd(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&$d(e,s,a),a};let ce=class extends O{constructor(){super(...arguments),this.value="",this.label="",this.variant="default",this.clearable=!1,this.options=[],this._open=!1,this._focusedIndex=-1,this._menuPosition="below",this._menuAlign="align-left",this._menuTop=0,this._menuBottom=0,this._menuLeft=0,this._menuRight=0,this._menuWidth=0,this._handleOutsideClick=t=>{t.composedPath().includes(this)||(this._open=!1,document.removeEventListener("click",this._handleOutsideClick))}}close(){this._open=!1}render(){const t=this.options.find(s=>s.value===this.value),e="ap-dropdown-menu";return c`
      <button
        class="trigger"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded=${this._open}
        aria-controls=${e}
        @click=${this._toggle}
        @keydown=${this._handleTriggerKeydown}
      >
        ${t!=null&&t.icon?c`<ap-icon name=${t.icon} .size=${16}></ap-icon>`:v}
        ${this.label?c`<span class="label">${this.label}${t?": ":""}</span>`:v}${t?t.label:""}
        ${this.clearable&&t?c`<span class="clear-trigger" @click=${this._clear}><ap-icon name="close" .size=${12}></ap-icon></span>`:c`<ap-icon name="chevron-down" .size=${14}></ap-icon>`}
      </button>
      ${this._open?c`
        <div
          id=${e}
          class="menu ${this._menuPosition} ${this._menuAlign}"
          ${B({[this._menuPosition==="below"?"top":"bottom"]:`${this._menuPosition==="below"?this._menuTop:this._menuBottom}px`,[this._menuAlign==="align-left"?"left":"right"]:`${this._menuAlign==="align-left"?this._menuLeft:this._menuRight}px`,...this._menuWidth?{"min-width":`${this._menuWidth}px`}:{}})}
          role="listbox"
          @keydown=${this._handleMenuKeydown}
        >
          ${this.options.map((s,i)=>c`
              <button
                class="option ${i===this._focusedIndex?"focused":""}"
                role="option"
                aria-selected=${s.value===this.value}
                @click=${()=>this._select(s.value)}
                @mouseenter=${()=>{this._focusedIndex=i}}
              >
                <span class="option-label">
                  ${s.icon?c`<ap-icon name=${s.icon} .size=${16}></ap-icon>`:v}
                  ${s.label}
                </span>
                ${s.value===this.value?c`<ap-icon name="check" .size=${14}></ap-icon>`:v}
              </button>
            `)}
        </div>
      `:v}
    `}_toggle(){this._open=!this._open,this._open?(this._focusedIndex=this.options.findIndex(t=>t.value===this.value),this._updateMenuPosition(),this.dispatchEvent(new CustomEvent("dropdown-open",{bubbles:!0,composed:!0})),document.addEventListener("click",this._handleOutsideClick),this.updateComplete.then(()=>this._focusCurrentOption())):document.removeEventListener("click",this._handleOutsideClick)}_clear(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("ap-change",{detail:{value:""},bubbles:!0,composed:!0}))}_select(t){this._open=!1,document.removeEventListener("click",this._handleOutsideClick),this.dispatchEvent(new CustomEvent("ap-change",{detail:{value:t},bubbles:!0,composed:!0}))}_updateMenuPosition(){const t=this.getBoundingClientRect();this._menuWidth=t.width;const e=window.innerHeight-t.bottom,s=t.top,i=Math.min(this.options.length*36+8,300);this._menuPosition=e<i&&s>e?"above":"below",this._menuPosition==="below"?this._menuTop=t.bottom+4:this._menuBottom=window.innerHeight-t.top+4;const a=window.innerWidth-t.left;this._menuAlign=a<200?"align-right":"align-left",this._menuAlign==="align-left"?this._menuLeft=t.left:this._menuRight=window.innerWidth-t.right}_handleTriggerKeydown(t){t.key==="ArrowDown"||t.key==="ArrowUp"||t.key==="Enter"||t.key===" "?(t.preventDefault(),this._open||(this._open=!0,this._focusedIndex=t.key==="ArrowUp"?this.options.length-1:Math.max(0,this.options.findIndex(e=>e.value===this.value)),this._updateMenuPosition(),this.dispatchEvent(new CustomEvent("dropdown-open",{bubbles:!0,composed:!0})),document.addEventListener("click",this._handleOutsideClick),this.updateComplete.then(()=>this._focusCurrentOption()))):t.key==="Escape"&&this._open&&(t.preventDefault(),this._open=!1,document.removeEventListener("click",this._handleOutsideClick))}_handleMenuKeydown(t){var e,s,i,a;switch(t.key){case"ArrowDown":t.preventDefault(),this._focusedIndex=(this._focusedIndex+1)%this.options.length,this._focusCurrentOption();break;case"ArrowUp":t.preventDefault(),this._focusedIndex=(this._focusedIndex-1+this.options.length)%this.options.length,this._focusCurrentOption();break;case"Enter":case" ":t.preventDefault(),this._focusedIndex>=0&&this._focusedIndex<this.options.length&&(this._select(this.options[this._focusedIndex].value),(s=(e=this.shadowRoot)==null?void 0:e.querySelector(".trigger"))==null||s.focus());break;case"Escape":t.preventDefault(),this._open=!1,document.removeEventListener("click",this._handleOutsideClick),(a=(i=this.shadowRoot)==null?void 0:i.querySelector(".trigger"))==null||a.focus();break;case"Tab":this._open=!1,document.removeEventListener("click",this._handleOutsideClick);break;case"Home":t.preventDefault(),this._focusedIndex=0,this._focusCurrentOption();break;case"End":t.preventDefault(),this._focusedIndex=this.options.length-1,this._focusCurrentOption();break}}_focusCurrentOption(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelectorAll(".option");t&&this._focusedIndex>=0&&this._focusedIndex<t.length&&t[this._focusedIndex].focus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}};ce.styles=[me,I`
      :host {
        position: relative;
        display: inline-block;
      }
      .trigger {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        height: 36px;
        padding: 0 12px;
        box-sizing: border-box;
        border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
        border-radius: var(--ap-radius-sm, 6px);
        background: var(--ap-background, oklch(1 0 0));
        color: var(--ap-foreground, oklch(0.37 0.022 248.413));
        font-family: inherit;
        font-size: var(--ap-font-size-sm, 0.875rem);
        cursor: pointer;
        white-space: nowrap;
      }
      .trigger:hover {
        background: var(--ap-muted, oklch(0.974 0.006 239.819));
      }
      :host([variant="borderless"]) .trigger {
        border-color: transparent;
        background: none;
      }
      :host([variant="borderless"]) .trigger:hover {
        background: var(--ap-muted, oklch(0.974 0.006 239.819));
      }
      .menu {
        position: fixed;
        z-index: 50;
        min-width: 160px;
        background: var(--ap-card, oklch(1 0 0));
        border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--ap-radius, 8px);
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        padding: 4px;
      }
      .menu.below { bottom: auto; }
      .menu.above { top: auto; }
      .menu.align-left { right: auto; }
      .menu.align-right { left: auto; }
      .option {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        padding: 6px 12px;
        justify-content: space-between;
        border: none;
        background: none;
        color: var(--ap-foreground, oklch(0.37 0.022 248.413));
        font-family: inherit;
        font-size: var(--ap-font-size-sm, 0.875rem);
        text-align: left;
        cursor: pointer;
        border-radius: 4px;
      }
      .option:hover, .option.focused {
        background: var(--ap-muted, oklch(0.974 0.006 239.819));
      }
      .option-label {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .option[aria-selected="true"] {
        background: var(--ap-selection-bg, oklch(0.578 0.198 268.129 / 0.08));
        color: var(--ap-primary, oklch(0.578 0.198 268.129));
      }
      .option[aria-selected="true"] > ap-icon {
        color: var(--ap-primary, oklch(0.578 0.198 268.129));
      }
      .trigger .label {
        color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      }
      .clear-trigger {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin: 0 -4px 0 auto;
        border: none;
        background: none;
        color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
        cursor: pointer;
        border-radius: 50%;
        flex-shrink: 0;
      }
      .clear-trigger:hover {
        color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      }
      .clear-trigger ap-icon {
        color: inherit;
      }
      .trigger ap-icon {
        color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
        margin-left: auto;
      }
      .option ap-icon {
        color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      }
      .option[aria-selected="true"] ap-icon {
        color: var(--ap-primary, oklch(0.578 0.198 268.129));
      }
    `];_e([f()],ce.prototype,"value",2);_e([f()],ce.prototype,"label",2);_e([f({reflect:!0})],ce.prototype,"variant",2);_e([f({type:Boolean})],ce.prototype,"clearable",2);_e([f({type:Array})],ce.prototype,"options",2);_e([w()],ce.prototype,"_open",2);_e([w()],ce.prototype,"_focusedIndex",2);_e([w()],ce.prototype,"_menuPosition",2);_e([w()],ce.prototype,"_menuAlign",2);_e([w()],ce.prototype,"_menuTop",2);_e([w()],ce.prototype,"_menuBottom",2);_e([w()],ce.prototype,"_menuLeft",2);_e([w()],ce.prototype,"_menuRight",2);_e([w()],ce.prototype,"_menuWidth",2);ce=_e([R("ap-dropdown")],ce);var kd=Object.defineProperty,Sd=Object.getOwnPropertyDescriptor,De=(t,e,s,i)=>{for(var a=i>1?void 0:i?Sd(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&kd(e,s,a),a};const Cd=["webp","jpeg","png","gif"];function Ad(t){const e=(t??"").toLowerCase();return Cd.includes(e)?e:"jpeg"}let ke=class extends O{constructor(){super(...arguments),this.assets=[],this.isMultiSelect=!1,this.t=(t,e)=>typeof e=="string"?e:t,this._format="jpeg",this._quality="excellent",this._lockAspect=!0,this._activePreset="original",this._defaultFormat="jpeg"}get _ratio(){const t=this.assets.find(i=>Vt(i));if(!t)return 1.5;const e=Ba(t),s=Va(t);return e&&s?e/s:1.5}get _isDirty(){return this._format!==this._defaultFormat||this._quality!=="excellent"||this._width!==this._defaultWidth||this._height!==this._defaultHeight}willUpdate(t){t.has("assets")&&this._initDefaults()}_initDefaults(){const t=this.assets.find(e=>Vt(e));if(this._defaultFormat=Ad(t==null?void 0:t.extension),this._format=this._defaultFormat,this._quality="excellent",this._lockAspect=!0,this._activePreset="original",this.isMultiSelect)this._defaultWidth=void 0,this._defaultHeight=void 0;else if(t){const e=Ba(t),s=Va(t);this._defaultWidth=e||void 0,this._defaultHeight=s||void 0}else this._defaultWidth=void 0,this._defaultHeight=void 0;this._width=this._defaultWidth,this._height=this._defaultHeight}_handleFormatChange(t){this._format=t.detail.value}_handleQualityChange(t){this._quality=t.detail.value}_handleWidthInput(t){const e=t.target.value,s=parseInt(e,10),i=e===""||isNaN(s)||s<=0?void 0:s;this._width=i,this._activePreset="",this._lockAspect&&i&&(this._height=Math.round(i/this._ratio))}_handleHeightInput(t){const e=t.target.value,s=parseInt(e,10),i=e===""||isNaN(s)||s<=0?void 0:s;this._height=i,this._activePreset="",this._lockAspect&&i&&(this._width=Math.round(i*this._ratio))}_handleMaxSizeInput(t){const e=t.target.value,s=parseInt(e,10),i=e===""||isNaN(s)||s<=0?void 0:s;this._width=i,this._height=i,this._activePreset=""}_toggleLock(){this._lockAspect=!this._lockAspect}_handlePreset(t){this._activePreset=t.value,t.value==="original"?(this._width=this._defaultWidth,this._height=this._defaultHeight):t.width&&(this._width=t.width,this._height=Math.round(t.width/this._ratio))}_handleApply(){const t={format:this._format,quality:this._format!=="png"?this._quality:void 0,width:this._width,height:this._height};this.dispatchEvent(new CustomEvent("transform-confirm",{detail:{params:t,isAspectLocked:this._lockAspect},bubbles:!0,composed:!0}))}_handleSkip(){this.dispatchEvent(new CustomEvent("transform-skip",{bubbles:!0,composed:!0}))}_handleClose(){this.dispatchEvent(new CustomEvent("transform-cancel",{bubbles:!0,composed:!0}))}_handleBackdropClick(t){t.target===t.currentTarget&&this._handleClose()}render(){const t=this._format==="png";return c`
      <div class="backdrop" @click=${this._handleBackdropClick}>
        <div class="dialog">
          <div class="header">
            <div class="title">${this.t("exportOptions","Export Options")}</div>
            <button class="close-btn" @click=${this._handleClose} title=${this.t("close","Close")}>
              <ap-icon name="close" .size=${16}></ap-icon>
            </button>
          </div>

          <div class="section">
            <span class="section-label">${this.t("format","Format")}</span>
            <ap-radio-group
              direction="horizontal"
              .value=${this._format}
              .options=${An}
              @ap-change=${this._handleFormatChange}
            ></ap-radio-group>
          </div>

          ${t?v:c`
            <div class="section">
              <span class="section-label">${this.t("quality","Quality")}</span>
              <ap-dropdown
                .value=${this._quality}
                .options=${En}
                @ap-change=${this._handleQualityChange}
              ></ap-dropdown>
            </div>
          `}

          <div class="section">
            <span class="section-label">${this.t("size","Size")}</span>
            ${this.isMultiSelect?c`
              <div class="input-group half-width">
                <span class="input-label">${this.t("maxSize","Max Size")}</span>
                <div class="input-wrapper">
                  <input
                    type="number"
                    min="1"
                    .value=${this._width!=null?String(this._width):""}
                    placeholder="Original"
                    @input=${this._handleMaxSizeInput}
                  />
                  <span class="input-suffix">px</span>
                </div>
              </div>
            `:c`
              <div class="dimensions-row">
                <div class="input-group">
                  <span class="input-label">${this.t("width","Width")}</span>
                  <div class="input-wrapper">
                    <input
                      type="number"
                      min="1"
                      .value=${this._width!=null?String(this._width):""}
                      @input=${this._handleWidthInput}
                    />
                    <span class="input-suffix">px</span>
                  </div>
                </div>
                <button
                  class="lock-btn ${this._lockAspect?"locked":""}"
                  @click=${this._toggleLock}
                  title=${this._lockAspect?this.t("unlockAspectRatio","Unlock aspect ratio"):this.t("lockAspectRatio","Lock aspect ratio")}
                >
                  <ap-icon name=${this._lockAspect?"lock":"link-2"} .size=${16}></ap-icon>
                </button>
                <div class="input-group">
                  <span class="input-label">${this.t("height","Height")}</span>
                  <div class="input-wrapper">
                    <input
                      type="number"
                      min="1"
                      .value=${this._height!=null?String(this._height):""}
                      @input=${this._handleHeightInput}
                    />
                    <span class="input-suffix">px</span>
                  </div>
                </div>
              </div>
            `}
            <div class="presets-row">
              ${Fn.map(e=>c`
                <button
                  class="preset-btn ${this._activePreset===e.value?"active":""}"
                  @click=${()=>this._handlePreset(e)}
                >${e.label}</button>
              `)}
            </div>
          </div>

          <div class="actions">
            <button class="btn" @click=${this._handleSkip}>${this.exportOriginalLabel??this.t("exportOriginal","Export Original")}</button>
            <button class="btn btn-primary" @click=${this._handleApply} ?disabled=${!this._isDirty}>${this.applyExportLabel??this.t("applyAndExport","Apply & Export")}</button>
          </div>
        </div>
      </div>
    `}};ke.styles=[me,I`
    :host {
      display: block;
    }
    .backdrop {
      position: fixed;
      inset: 0;
      z-index: 100;
      background: oklch(0 0 0 / 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .dialog {
      background: var(--ap-background, oklch(1 0 0));
      border-radius: var(--ap-radius-lg, 12px);
      padding: 28px 32px;
      max-width: 520px;
      width: 90%;
      box-shadow: 0 16px 48px oklch(0 0 0 / 0.16);
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 16px;
      margin-bottom: 20px;
      margin-left: -32px;
      margin-right: -32px;
      padding-left: 32px;
      padding-right: 32px;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }
    .title {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 600;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .close-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border: none;
      background: none;
      cursor: pointer;
      border-radius: var(--ap-radius-sm, 6px);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      transition: color 100ms, background 100ms;
    }
    .close-btn:hover {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .section {
      margin-bottom: 16px;
    }
    .section-label {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      margin-bottom: 8px;
      display: block;
    }
    .dimensions-row {
      display: flex;
      align-items: flex-end;
      gap: 8px;
    }
    .input-group {
      flex: 1;
      min-width: 0;
    }
    .input-group.half-width {
      flex: none;
      width: 50%;
    }
    .input-label {
      font-size: var(--ap-font-size-xs, 0.75rem);
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      margin-bottom: 4px;
      display: block;
    }
    .input-wrapper {
      display: flex;
      align-items: center;
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: var(--ap-radius-sm, 6px);
      overflow: hidden;
      background: var(--ap-background, oklch(1 0 0));
    }
    .input-wrapper input {
      flex: 1;
      min-width: 0;
      border: none;
      outline: none;
      padding: 8px 12px;
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: inherit;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: transparent;
      -moz-appearance: textfield;
    }
    .input-wrapper input::-webkit-inner-spin-button,
    .input-wrapper input::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    .input-wrapper input::placeholder {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .input-suffix {
      padding: 0 10px;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      user-select: none;
    }
    .lock-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 36px;
      border: none;
      background: none;
      cursor: pointer;
      border-radius: var(--ap-radius-sm, 6px);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      flex-shrink: 0;
      transition: color 100ms;
    }
    .lock-btn:hover {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .lock-btn.locked {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .presets-row {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-top: 10px;
      flex-wrap: wrap;
    }
    .preset-btn {
      padding: 4px 10px;
      border: none;
      background: none;
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: inherit;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      cursor: pointer;
      border-radius: var(--ap-radius-sm, 6px);
      transition: color 100ms, background 100ms;
    }
    .preset-btn:hover {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .preset-btn.active {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      font-weight: 600;
    }
    .actions {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
      margin-top: 24px;
      margin-left: -32px;
      margin-right: -32px;
      padding: 20px 32px 0;
      border-top: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }
    .btn {
      padding: 8px 20px;
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      cursor: pointer;
      transition: background 100ms, opacity 100ms;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      background: var(--ap-background, oklch(1 0 0));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .btn:not(.btn-primary):hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .btn-primary {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: var(--ap-primary-foreground, oklch(1 0 0));
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .btn-primary:hover {
      opacity: 0.9;
    }
    .btn:disabled {
      opacity: 0.5;
      cursor: default;
    }
    ap-dropdown {
      display: block;
      width: 100%;
    }
  `];De([f({type:Array})],ke.prototype,"assets",2);De([f({type:Boolean})],ke.prototype,"isMultiSelect",2);De([f({attribute:!1})],ke.prototype,"t",2);De([f({attribute:!1})],ke.prototype,"exportOriginalLabel",2);De([f({attribute:!1})],ke.prototype,"applyExportLabel",2);De([w()],ke.prototype,"_format",2);De([w()],ke.prototype,"_quality",2);De([w()],ke.prototype,"_width",2);De([w()],ke.prototype,"_height",2);De([w()],ke.prototype,"_lockAspect",2);De([w()],ke.prototype,"_activePreset",2);ke=De([R("ap-transformation-dialog")],ke);var Ed=Object.defineProperty,Fd=Object.getOwnPropertyDescriptor,fi=(t,e,s,i)=>{for(var a=i>1?void 0:i?Fd(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Ed(e,s,a),a};let Xt=class extends O{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this._hasLabel=!1,this._handleHostClick=()=>{this.dispatchEvent(new CustomEvent("ap-toggle",{detail:{checked:!this.checked},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleHostClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleHostClick)}_onSlotChange(t){const e=t.target;this._hasLabel=e.assignedNodes({flatten:!0}).length>0,this.requestUpdate()}render(){return c`
      <div class="box">
        <svg class="check" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 6 9 17l-5-5"></path>
        </svg>
        <svg class="dash" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14"></path>
        </svg>
      </div>
      <span class="label" ?hidden=${!this._hasLabel}><slot @slotchange=${this._onSlotChange}></slot></span>
    `}};Xt.styles=[I`
      :host {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
      }
      .box {
        width: 16px;
        height: 16px;
        border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 150ms;
        background: var(--ap-background, oklch(1 0 0));
      }
      :host(:hover) .box {
        border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
      }
      :host([checked]) .box {
        background: var(--ap-primary, oklch(0.578 0.198 268.129));
        border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
      }
      .check {
        display: none;
        color: var(--ap-primary-foreground, oklch(1 0 0));
      }
      :host([checked]) .check {
        display: block;
      }
      :host([indeterminate]) .box {
        background: var(--ap-primary, oklch(0.578 0.198 268.129));
        border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
      }
      .dash {
        display: none;
        color: var(--ap-primary-foreground, oklch(1 0 0));
      }
      :host([indeterminate]:not([checked])) .dash {
        display: block;
      }
      :host([indeterminate]:not([checked])) .check {
        display: none;
      }
      :host([disabled]) {
        opacity: 0.5;
        pointer-events: none;
      }
      .label {
        margin-left: var(--ap-checkbox-gap, 8px);
        font-size: var(--ap-font-size-sm, 0.875rem);
        color: var(--ap-foreground, oklch(0.37 0.022 248.413));
        display: inline-flex;
        align-items: center;
      }
      .label[hidden] {
        display: none;
      }
    `];fi([f({type:Boolean,reflect:!0})],Xt.prototype,"checked",2);fi([f({type:Boolean,reflect:!0})],Xt.prototype,"indeterminate",2);fi([f({type:Boolean,reflect:!0})],Xt.prototype,"disabled",2);Xt=fi([R("ap-checkbox")],Xt);var Od=Object.defineProperty,Td=Object.getOwnPropertyDescriptor,Rr=(t,e,s,i)=>{for(var a=i>1?void 0:i?Td(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Od(e,s,a),a};let oi=class extends O{constructor(){super(...arguments),this.open=!1,this._handleOutsideClick=t=>{this.open&&!t.composedPath().includes(this)&&(this.open=!1)}}render(){return c`
      <slot name="trigger" @click=${()=>this.open=!this.open}></slot>
      <div class="content ${this.open?"open":""}">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}};oi.styles=[I`
      :host {
        position: relative;
        display: inline-block;
      }
      .content {
        display: none;
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        z-index: 50;
        min-width: 200px;
        background: var(--ap-card, oklch(1 0 0));
        border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--ap-radius, 8px);
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        padding: 8px;
      }
      .content.open {
        display: block;
      }
    `];Rr([w()],oi.prototype,"open",2);oi=Rr([R("ap-popover")],oi);var Pd=Object.defineProperty,Ld=Object.getOwnPropertyDescriptor,zr=(t,e,s,i)=>{for(var a=i>1?void 0:i?Ld(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Pd(e,s,a),a};let ni=class extends O{constructor(){super(...arguments),this.variant="default"}render(){return c`<span class="badge"><slot></slot></span>`}};ni.styles=[I`
      :host {
        display: inline-flex;
      }
      .badge {
        display: inline-flex;
        align-items: center;
        height: 24px;
        padding: 0 8px;
        font-size: 0.75rem;
        font-weight: 500;
        border-radius: 9999px;
        background: var(--ap-muted, oklch(0.974 0.006 239.819));
        color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      }
      :host([variant="primary"]) .badge {
        background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
        color: var(--ap-primary, oklch(0.578 0.198 268.129));
      }
    `];zr([f({reflect:!0})],ni.prototype,"variant",2);ni=zr([R("ap-badge")],ni);var Id=Object.defineProperty,Dd=Object.getOwnPropertyDescriptor,Nr=(t,e,s,i)=>{for(var a=i>1?void 0:i?Dd(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Id(e,s,a),a};let li=class extends O{constructor(){super(...arguments),this.text=""}render(){return c`
      <slot></slot>
      <div class="tip">${this.text}</div>
    `}};li.styles=[I`
      :host {
        position: relative;
        display: inline-flex;
      }
      .tip {
        display: none;
        position: absolute;
        bottom: calc(100% + 6px);
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
        padding: 4px 8px;
        font-size: 0.75rem;
        background: var(--ap-foreground, oklch(0.37 0.022 248.413));
        color: var(--ap-background, oklch(1 0 0));
        border-radius: 4px;
        pointer-events: none;
        z-index: 100;
      }
      :host(:hover) .tip {
        display: block;
      }
    `];Nr([f()],li.prototype,"text",2);li=Nr([R("ap-tooltip")],li);var Md=Object.defineProperty,Rd=Object.getOwnPropertyDescriptor,bt=(t,e,s,i)=>{for(var a=i>1?void 0:i?Rd(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Md(e,s,a),a};const zd=/[/\\\x00-\x1f]/;function Nd(t){return zd.test(t)?`Folder name can't contain "/" or "\\".`:t==="."||t===".."?`Folder name can't be "." or "..".`:null}let Ge=class extends O{constructor(){super(...arguments),this.currentFolderPath="/",this.loading=!1,this.error=null,this._name="",this._localError=null,this._apiErrorDismissed=!1,this._handleDocKeyDown=t=>{t.key==="Escape"&&(t.preventDefault(),this._handleCancel())}}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._handleDocKeyDown),requestAnimationFrame(()=>{var t;return(t=this._input)==null?void 0:t.focus()})}disconnectedCallback(){document.removeEventListener("keydown",this._handleDocKeyDown),super.disconnectedCallback()}updated(t){t.has("error")&&this.error&&(this._apiErrorDismissed=!1)}_handleInput(t){this._name=t.target.value,this._localError&&(this._localError=null),this.error&&!this._apiErrorDismissed&&(this._apiErrorDismissed=!0)}_canSubmit(){return!this.loading&&this._name.trim().length>0}_handleConfirm(){if(!this._canSubmit())return;const t=this._name.trim(),e=Nd(t);if(e){this._localError=e;return}this.dispatchEvent(new CustomEvent("create-folder-confirm",{detail:{name:t},bubbles:!0,composed:!0}))}_handleCancel(){this.dispatchEvent(new CustomEvent("create-folder-cancel",{bubbles:!0,composed:!0}))}_handleBackdropClick(t){t.target===t.currentTarget&&this._handleCancel()}_handleKeyDown(t){t.key==="Enter"&&(t.preventDefault(),this._handleConfirm())}render(){const t=this.currentFolderPath||"/",e=this._localError??(this._apiErrorDismissed?null:this.error);return c`
      <div class="backdrop" @click=${this._handleBackdropClick}>
        <div class="dialog" role="dialog" aria-modal="true" aria-labelledby="ap-cf-title">
          <div class="title" id="ap-cf-title">Create folder</div>
          <div class="description">In <code>${t}</code></div>

          <input
            type="text"
            placeholder="Folder name"
            .value=${this._name}
            ?disabled=${this.loading}
            @input=${this._handleInput}
            @keydown=${this._handleKeyDown}
            aria-label="Folder name"
            aria-invalid=${e?"true":"false"}
          />
          ${e?c`<div class="error" role="alert">${e}</div>`:v}

          <div class="actions">
            <button class="btn" @click=${this._handleCancel}>Cancel</button>
            <button class="btn btn-primary" @click=${this._handleConfirm} ?disabled=${!this._canSubmit()}>
              ${this.loading?c`<span class="loading-content"><ap-spinner .size=${14}></ap-spinner> Creating...</span>`:"Create"}
            </button>
          </div>
        </div>
      </div>
    `}};Ge.styles=[me,I`
    :host {
      display: block;
    }
    .backdrop {
      position: fixed;
      inset: 0;
      z-index: 100;
      background: oklch(0 0 0 / 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      animation: ap-cf-backdrop-in 150ms ease-out;
    }
    .dialog {
      background: var(--ap-background, oklch(1 0 0));
      border-radius: var(--ap-radius-lg, 12px);
      padding: 24px 28px 20px;
      max-width: 440px;
      width: 90%;
      box-shadow: 0 16px 48px oklch(0 0 0 / 0.16);
      font-family: var(--ap-font-family, system-ui, sans-serif);
      animation: ap-cf-dialog-in 180ms ease-out;
    }
    @keyframes ap-cf-backdrop-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes ap-cf-dialog-in {
      from { opacity: 0; transform: scale(0.96); }
      to { opacity: 1; transform: scale(1); }
    }
    @media (prefers-reduced-motion: reduce) {
      .backdrop, .dialog { animation: none; }
    }
    .title {
      font-size: 1rem;
      font-weight: 600;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      margin-bottom: 6px;
    }
    .description {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      margin-bottom: 16px;
      line-height: 1.5;
      word-break: break-all;
      overflow-wrap: anywhere;
    }
    .description code {
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
      font-size: 0.8125rem;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      padding: 1px 6px;
      border-radius: 4px;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    input {
      width: 100%;
      box-sizing: border-box;
      height: 36px;
      padding: 0 12px;
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: var(--ap-font-family, system-ui, sans-serif);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-background, oklch(1 0 0));
      outline: none;
    }
    input:hover {
      border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    input:focus {
      border-color: var(--ap-ring, oklch(0.578 0.198 268.129 / 0.7));
      box-shadow: 0 0 0 2px var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
    }
    .error {
      font-size: 0.8125rem;
      color: var(--ap-destructive, oklch(0.577 0.245 27.325));
      margin: 6px 0 0;
      line-height: 1.25rem;
    }
    .actions {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
      margin-top: 16px;
    }
    .btn {
      padding: 8px 20px;
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      cursor: pointer;
      transition: background 100ms;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      background: var(--ap-background, oklch(1 0 0));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .btn:not(.btn-primary):hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .btn-primary {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: var(--ap-primary-foreground, oklch(1 0 0));
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .btn-primary:hover {
      opacity: 0.9;
    }
    .btn:disabled {
      opacity: 0.5;
      cursor: default;
    }
    .btn-primary .loading-content {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  `];bt([f()],Ge.prototype,"currentFolderPath",2);bt([f({type:Boolean})],Ge.prototype,"loading",2);bt([f()],Ge.prototype,"error",2);bt([w()],Ge.prototype,"_name",2);bt([w()],Ge.prototype,"_localError",2);bt([w()],Ge.prototype,"_apiErrorDismissed",2);bt([ut("input")],Ge.prototype,"_input",2);Ge=bt([R("ap-create-folder-dialog")],Ge);var jd=Object.defineProperty,yt=(t,e,s,i)=>{for(var a=void 0,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=o(e,s,a)||a);return a&&jd(e,s,a),a};const ca=class ca extends O{constructor(){super(),this._initFailed=!1,this._loadId=0,this._loadMoreId=0,this._selectAllId=0,this._loadDataTimer=null,this._pendingFilter=null,this._pendingMetadataField=null,this._normalizedForcedFilters={},this._uploaderEl=null,this._uploaderImportPromise=null,this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1,this._folderResolveOpen=!1,this._transformOpen=!1,this._createFolderOpen=!1,this._isCreatingFolder=!1,this._createFolderError=null,this._transformAssets=[],this._transformFolders=[],this._transformAfterResolve=!1,this._onDragEnter=e=>{var s;!((s=this.config)!=null&&s.uploader)||!this._hasFileTransfer(e)||(e.preventDefault(),this._dragCounter++,this._dragCounter===1&&(this._isDragOver=!0))},this._onDragOver=e=>{var s;!((s=this.config)!=null&&s.uploader)||!this._hasFileTransfer(e)||(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy"))},this._onDragLeave=e=>{var s;!((s=this.config)!=null&&s.uploader)||!this._hasFileTransfer(e)||(e.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._isDragOver=!1))},this._onDrop=e=>{var i,a;if(!((i=this.config)!=null&&i.uploader)||!this._hasFileTransfer(e))return;e.preventDefault(),this._dragCounter=0,this._isDragOver=!1;const s=Array.from(((a=e.dataTransfer)==null?void 0:a.files)??[]);s.length>0&&this._openUploader(s)},this._cancelCreateFolderRequested=!1,this.store=uo(),this.storeCtrl=new nn(this,this.store),this.selectionCtrl=new cn(this,this.store),this.infiniteScrollCtrl=new dn(this,()=>this._loadMore()),this.marqueeCtrl=new pn(this,this.store)}get _isInline(){var e;return((e=this.config)==null?void 0:e.displayMode)==="inline"}disconnectedCallback(){super.disconnectedCallback(),this._uploaderEl&&(this._uploaderEl.remove(),this._uploaderEl=null),this._uploaderImportPromise=null,this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1}updated(e){super.updated(e),e.has("config")&&this.config&&this._initConfig(this.config);const s=this.renderRoot.querySelector("#sentinel");if(s&&s!==this._lastSentinel){this._lastSentinel=s;const a=this.renderRoot.querySelector(".main-content");this.infiniteScrollCtrl.observe(s,a)}const i=this.renderRoot.querySelector(".main-content");i&&i!==this._lastMarqueeContainer&&(this._lastMarqueeContainer=i,this.marqueeCtrl.attach(i))}_initConfig(e){const s={folderSelection:!0,...e};this._initFailed=!1,this.store.setState({disabledAssetIds:new Set(s.disabledAssetIds??[]),disabledFolderIds:new Set(s.disabledFolderIds??[])}),Dn(s.transformRemoteThumbnail),this._normalizedForcedFilters=Ni(s.forcedFilters),this._initPromise=this._doInit(s).catch(()=>{this._initFailed=!0}),this._initI18n(s.locale),this.toggleAttribute("inline",s.displayMode==="inline"),s.displayMode==="inline"&&!this.store.getState().isOpen&&this.open()}async _initI18n(e){try{const{i18n:s,isNew:i}=await sn(e||"en");i&&s.on("missingKey",(r,o,n,l,d,h)=>{const u=n.match(/_(?:zero|one|two|few|many|other)$/),p=u&&(h!=null&&h[`defaultValue${u[0]}`])?String(h[`defaultValue${u[0]}`]):l;on.handleMissingKey(n,p,o)});const a=(r,o,n)=>typeof o=="string"?s.t(r,o,n??{}):s.t(r,o??{});this.store.setState({t:a})}catch{}}async _doInit(e){const s=$l(),i=s.sortBy??e.defaultSortBy??"created_at",a=s.sortDirection??e.defaultSortDirection??"desc";this.store.setState({config:e,projectToken:e.auth.projectToken,viewMode:e.rememberLastView&&Sl(e.auth.projectToken)||e.defaultViewMode||"grid",sortBy:i,sortDirection:a}),this.apiClient=new hn(e.auth,e.apiBase);try{if(e.auth.mode==="securityTemplate"){const{key:y,permissions:_}=await $n(this.apiClient);this.apiClient.setSassKey(y),this.store.setState({sassKey:y,permissions:_})}const[r,o,n,l,d]=await Promise.allSettled([el(this.apiClient),bn(this.apiClient),xn(this.apiClient),Jn(this.apiClient),yn(this.apiClient)]),h={};if(r.status==="fulfilled"){const{fields:y,regionalVariantGroups:_,regionalFilters:S,brandColor:k}=r.value;h.metadataFields=y,h.regionalVariantGroups=_,h.regionalFilters=S,k&&(h.brandColor=k)}o.status==="fulfilled"&&(h.labels=o.value.labels||[]),n.status==="fulfilled"&&(h.tags=n.value),d.status==="fulfilled"&&(h.collections=d.value.collections||[]),l.status==="fulfilled"&&(h.fileTypes=l.value);const{pinnedFilters:u,pinnedMetadata:p}=yl(e.auth.projectToken??null),g=this.store.getState().filters;h.filters={...g,pinned:u,visible:[...u],metadata:{...g.metadata,pinned:p,visible:[...p]}},this.store.setState(h);const b=e.brandColor||h.brandColor||this.store.getState().brandColor;b&&(h.brandColor||this.store.setState({brandColor:b}),Tl(this,b))}catch(r){throw this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:r,context:"init"},bubbles:!0,composed:!0})),r}}_ensureUploaderImport(){return customElements.get("sfx-uploader")?Promise.resolve():this._uploaderImportPromise?this._uploaderImportPromise:(this._uploaderImportPromise=W(()=>import("./define-h8Fqheno.js").then(e=>e.d),[]).then(()=>{},e=>{throw this._uploaderImportPromise=null,e}),this._uploaderImportPromise)}_buildUploaderConfig(){const e=this.config,s=e.uploader,i=this.store.getState();let a;return e.auth.mode==="securityTemplate"?a={mode:"security-template",container:e.auth.projectToken,securityTemplateId:e.auth.securityTemplateKey}:a={mode:"sass-key",container:e.auth.projectToken,sassKey:e.auth.sassKey},{auth:a,targetFolder:i.currentFolderPath||"/",mode:"inline",restrictions:s.restrictions,concurrency:s.concurrency,autoProceed:s.autoProceed,showFillMetadata:s.showFillMetadata,connectors:s.connectors,sourcesLayout:s.sourcesLayout,header:s.header??"back",clearOnClose:s.clearOnClose,clearOnComplete:s.clearOnComplete,closeOnComplete:s.closeOnComplete,rejectedFileAutoRemoveDelay:s.rejectedFileAutoRemoveDelay,lastUploadReview:s.lastUploadReview,showLocateButton:s.showLocateButton,showCopyCdnButton:s.showCopyCdnButton,getLocateUrl:s.getLocateUrl,minimizeOnUpload:s.minimizeOnUpload,metadataConfig:s.metadataConfig,tusConfig:s.tusConfig,locale:s.locale??e.locale,transformRemoteThumbnail:e.transformRemoteThumbnail}}async _openUploader(e){var i;if(!((i=this.config)!=null&&i.uploader)||this._isUploaderOpen)return;try{await this._ensureUploaderImport()}catch(a){this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:a instanceof Error?a:new Error(String(a)),context:"uploader-load"},bubbles:!0,composed:!0}));return}this._uploaderEl=document.createElement("sfx-uploader");const s=this._uploaderEl;s.addEventListener("sfx-all-complete",()=>{this.store.getState().isOpen&&this._loadData()}),s.addEventListener("sfx-complete-action",()=>{this._closeUploader()}),s.addEventListener("sfx-cancel",()=>{this._closeUploader()}),this._isUploaderOpen=!0,await this.updateComplete,s.config=this._buildUploaderConfig(),await s.updateComplete,e!=null&&e.length&&s.addFiles(e)}_closeUploader(){this._isUploaderOpen=!1,this._uploaderEl&&(this._uploaderEl.remove(),this._uploaderEl=null)}_handleUploadClick(){this._openUploader()}_hasFileTransfer(e){var s,i;return!!((i=(s=e.dataTransfer)==null?void 0:s.types)!=null&&i.includes("Files"))}async open(){var d,h,u,p,g,b,y,_;const e=this.store.getState(),s=new Set(Object.keys(this._normalizedForcedFilters)),i={},a=Ni((d=this.config)==null?void 0:d.defaultFilters);for(const[S,k]of Object.entries(a))s.has(S)||(i[S]=k);const r=Object.keys(i),o=((h=this.config)==null?void 0:h.tabs)??["assets","folders"],n=(u=this.config)!=null&&u.rememberLastTab?Al(this.config.auth.projectToken):null,l=(n&&o.includes(n)?n:null)??((p=this.config)!=null&&p.defaultTab&&o.includes(this.config.defaultTab)?this.config.defaultTab:null)??((g=this.config)!=null&&g.initialFolderPath&&o.includes("folders")?"folders":null)??o[0]??"assets";this.store.setState({isOpen:!0,activeTab:l,searchQuery:"",isAISearchActive:!!((b=this.config)!=null&&b.enableAISearch&&((y=this.config)!=null&&y.defaultAISearch)),filters:{metadata:{pinned:e.filters.metadata.pinned,visible:[...e.filters.metadata.pinned],applied:{}},pinned:e.filters.pinned,visible:[...new Set([...e.filters.pinned,...r])],applied:i},offset:0,assets:[],folders:[],currentFolder:null,currentFolderPath:this._resolveInitialFolderPath(l),activeLabelUuid:null,activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,breadcrumb:this._buildBreadcrumbFromPath(this._resolveInitialFolderPath(l),((_=this.config)==null?void 0:_.rootFolderPath)||"/"),selectedAssets:new Map,selectedFolders:new Map,isResolvingFolders:!1,folderPreviews:{},isPreviewOpen:!1,previewAsset:null,isLoading:!0,isSelectingAll:!1}),this._dragCounter=0,this._isDragOver=!1,this.dispatchEvent(new CustomEvent("ap-open",{detail:{timestamp:Date.now()},bubbles:!0,composed:!0})),await this.updateComplete,!this._initPromise&&this.config&&this._initConfig(this.config),!(this._initPromise&&(await this._initPromise,this._initFailed))&&this._loadData()}close(){this.store.setState({isOpen:!1}),this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1,this._folderResolveOpen=!1,this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._transformAfterResolve=!1,this._selectAllId++}_scrollToTop(){var e;(e=this.renderRoot.querySelector(".main-content"))==null||e.scrollTo({top:0})}async _loadData(){var i,a,r,o,n,l,d,h,u,p,g,b,y,_,S,k,N,T,E,H,A,Q,z,F,ee,X,Z,ie,m,x,P,M,V,U,Se,_t,ae,Ue,ss,is,as,rs,os;if(!this.apiClient)return;const e=++this._loadId,s=this.store.getState();this._scrollToTop(),this.store.setState({isLoading:!0});try{const We=s.activeTab;if(We==="assets"){const xe=this._buildSearchNotation(),at=s.currentFolderPath||"/",Me=s.isAISearchActive&&!!s.searchQuery,Le=wt(this.apiClient,{fields:(i=this.config)==null?void 0:i.apiFields,folder:at,offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:xe||void 0,recursive:1,...Me&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((a=s.config)==null?void 0:a.locale)??"en"}}),$e=Us(this.apiClient,{folder:at,q:xe||void 0,search:s.searchQuery||void 0,recursive:1,...Me&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((r=s.config)==null?void 0:r.locale)??"en"}}).catch(()=>null),[ge,Ce]=await Promise.all([Le,$e]);if(e!==this._loadId)return;const Ae=((o=ge.files)==null?void 0:o.length)??0,pe=Ae>=s.limit,Ee=((n=Ce==null?void 0:Ce.stats)==null?void 0:n.approx_files_count)??((l=Ce==null?void 0:Ce.info)==null?void 0:l.total_files_count)??((d=ge.info)==null?void 0:d.total_files_count)??((u=(h=ge.base)==null?void 0:h.count)==null?void 0:u.files_recursive)??((g=(p=ge.base)==null?void 0:p.count)==null?void 0:g.files_direct)??Ae;this.store.setState({assets:ge.files||[],folders:[],totalCount:Ee,totalFolderCount:0,offset:0,hasMore:pe,isLoading:!1})}else if(We==="folders"){const xe=this._buildSearchNotation(),at=s.currentFolderPath||"/",[Me,Le,$e]=await Promise.all([gn(this.apiClient,{folderPath:s.currentFolderPath,q:s.searchQuery||void 0,recursive:s.searchQuery?1:0,sort_by:s.sortBy,sort_direction:s.sortDirection}),wt(this.apiClient,{fields:(b=this.config)==null?void 0:b.apiFields,folder:at,offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:xe||void 0,recursive:0,...s.isAISearchActive&&s.searchQuery&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((y=s.config)==null?void 0:y.locale)??"en"}}),Us(this.apiClient,{folder:at,q:xe||void 0,search:s.searchQuery||void 0,recursive:0,...s.isAISearchActive&&s.searchQuery&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((_=s.config)==null?void 0:_.locale)??"en"}}).catch(()=>null)]);if(e!==this._loadId)return;const ge=Me.folders||[];let Ce={};if(ge.length>0)try{Ce=await vn(this.apiClient,ge.map(Nt=>Nt.uuid))}catch{}if(e!==this._loadId)return;const Ae=((S=Le.files)==null?void 0:S.length)??0,pe=Ae>=s.limit,Ee=((k=$e==null?void 0:$e.stats)==null?void 0:k.approx_files_count)??((N=$e==null?void 0:$e.info)==null?void 0:N.total_files_count)??((T=Le.info)==null?void 0:T.total_files_count)??((H=(E=Le.base)==null?void 0:E.count)==null?void 0:H.files_direct)??Ae;this.store.setState({assets:Le.files||[],folders:ge,folderPreviews:Ce,totalCount:Ee,totalFolderCount:Me.total??ge.length,offset:0,hasMore:pe,isLoading:!1})}else if(We==="labels"){if(!s.activeLabelUuid){this.store.setState({assets:[],folders:[],totalCount:s.labels.length,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}const xe=s.labels.find(vi=>vi.uuid===s.activeLabelUuid);if(!xe){this.store.setState({isLoading:!1});return}const at=xe.sid.replace("#",""),Me=this._buildSearchNotation(),Le=`labels:${at}${Me?" "+Me:""}`,$e=s.isAISearchActive&&!!s.searchQuery,ge=wt(this.apiClient,{fields:(A=this.config)==null?void 0:A.apiFields,folder:"/",offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:Le,recursive:1,...$e&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((Q=s.config)==null?void 0:Q.locale)??"en"}}),Ce=Us(this.apiClient,{folder:"/",q:Le,search:s.searchQuery||void 0,recursive:1,...$e&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((z=s.config)==null?void 0:z.locale)??"en"}}).catch(()=>null),[Ae,pe]=await Promise.all([ge,Ce]);if(e!==this._loadId)return;const Ee=((F=Ae.files)==null?void 0:F.length)??0,Nt=Ee>=s.limit,gi=((ee=pe==null?void 0:pe.stats)==null?void 0:ee.approx_files_count)??((X=pe==null?void 0:pe.info)==null?void 0:X.total_files_count)??((Z=Ae.info)==null?void 0:Z.total_files_count)??((m=(ie=Ae.base)==null?void 0:ie.count)==null?void 0:m.files_recursive)??((P=(x=Ae.base)==null?void 0:x.count)==null?void 0:P.files_direct)??Ee;this.store.setState({assets:Ae.files||[],folders:[],totalCount:gi,totalFolderCount:0,offset:0,hasMore:Nt,isLoading:!1})}else if(We==="collections"){if(!s.activeCollectionUuid){this.store.setState({assets:[],folders:[],totalCount:0,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}const xe=s.activeCollectionFolder;if(!(xe&&!((M=xe.children)!=null&&M.length))){this.store.setState({assets:[],folders:[],totalCount:0,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}const Me=s.activeCollectionUuid,Le=xe.filters||void 0,$e=this._buildSearchNotation(),ge=s.isAISearchActive&&!!s.searchQuery,Ce=wt(this.apiClient,{fields:(V=this.config)==null?void 0:V.apiFields,offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:$e||void 0,recursive:1,collection_uuid:Me,f64:Le,...ge&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((U=s.config)==null?void 0:U.locale)??"en"}}),Ae=Us(this.apiClient,{q:$e||void 0,search:s.searchQuery||void 0,recursive:1,collection_uuid:Me,f64:Le,...ge&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((Se=s.config)==null?void 0:Se.locale)??"en"}}).catch(()=>null),[pe,Ee]=await Promise.all([Ce,Ae]);if(e!==this._loadId)return;const Nt=((_t=pe.files)==null?void 0:_t.length)??0,gi=Nt>=s.limit,vi=((ae=Ee==null?void 0:Ee.stats)==null?void 0:ae.approx_files_count)??((Ue=Ee==null?void 0:Ee.info)==null?void 0:Ue.total_files_count)??((ss=pe.info)==null?void 0:ss.total_files_count)??((as=(is=pe.base)==null?void 0:is.count)==null?void 0:as.files_recursive)??((os=(rs=pe.base)==null?void 0:rs.count)==null?void 0:os.files_direct)??Nt;this.store.setState({assets:pe.files||[],folders:[],totalCount:vi,totalFolderCount:0,offset:0,hasMore:gi,isLoading:!1})}}catch(We){if(e!==this._loadId)return;this.store.setState({isLoading:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:We,context:"loadData"},bubbles:!0,composed:!0}))}}async _loadMore(){var a,r,o;const e=this.store.getState();if(e.isLoading||!e.hasMore||!this.apiClient||e.activeTab==="labels"&&!e.activeLabelUuid||e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((a=e.activeCollectionFolder.children)!=null&&a.length)))return;const s=++this._loadMoreId,i=e.offset+e.limit;this.store.setState({isLoading:!0});try{const n=this._buildSearchNotation();let l=n||void 0,d=e.currentFolderPath||"/",h=e.activeTab==="folders"?0:1;if(e.activeTab==="labels"&&e.activeLabelUuid){const k=e.labels.find(N=>N.uuid===e.activeLabelUuid);k&&(l=`labels:${k.sid.replace("#","")}${n?" "+n:""}`),d="/",h=1}let u,p;e.activeTab==="collections"&&e.activeCollectionFolder&&(u=e.activeCollectionUuid||void 0,p=e.activeCollectionFolder.filters||void 0,d="",h=1);const g=await wt(this.apiClient,{fields:(r=this.config)==null?void 0:r.apiFields,...d?{folder:d}:{},offset:i,limit:e.limit,sort_by:e.sortBy,sort_direction:e.sortDirection,search:e.searchQuery||void 0,q:l,recursive:h,...u&&{collection_uuid:u},...p&&{f64:p},...e.isAISearchActive&&e.searchQuery&&{with_ai:!0,ai_query:e.searchQuery,ai_lang:((o=e.config)==null?void 0:o.locale)??"en"}});if(s!==this._loadMoreId)return;const b=this.store.getState().assets,y=g.files||[],_=y.length>=e.limit,S=[...b,...y];this.store.setState({assets:S,offset:i,hasMore:_,isLoading:!1})}catch{if(s!==this._loadMoreId)return;this.store.setState({isLoading:!1})}}_debouncedLoadData(e=120){this._loadDataTimer&&clearTimeout(this._loadDataTimer),this._loadDataTimer=setTimeout(()=>{this._loadDataTimer=null,this._loadData()},e)}_handleCancel(e){var s,i;this.close(),(i=(s=this.config)==null?void 0:s.onCancel)==null||i.call(s),this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:e},bubbles:!0,composed:!0}))}_handleSearchChange(e){var a;const s=this.store.getState();if(s.activeTab==="labels"&&!s.activeLabelUuid){this.store.setState({searchQuery:e.detail.value});return}if(s.activeTab==="collections"&&!(s.activeCollectionFolder&&!((a=s.activeCollectionFolder.children)!=null&&a.length))){this.store.setState({searchQuery:e.detail.value});return}const i={searchQuery:e.detail.value,offset:0,assets:[],folders:[],isLoading:!0};s.isAISearchActive&&e.detail.value&&(i.sortBy="relevance"),this.store.setState(i),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleAISearchToggle(e){var r;const s=e.detail.active,i=this.store.getState(),a={isAISearchActive:s};i.searchQuery&&(s?a.sortBy="relevance":i.sortBy==="relevance"&&(a.sortBy=((r=this.config)==null?void 0:r.defaultSortBy)??"created_at"),a.offset=0,a.assets=[],a.folders=[],a.isLoading=!0),this.store.setState(a),i.searchQuery&&this._debouncedLoadData()}_handleViewChange(e){var i;const s=e.detail.mode;this.store.setState({viewMode:s}),(i=this.config)!=null&&i.rememberLastView&&kl(s,this.config.auth.projectToken),this._scrollToTop()}_handleRegionalChange(e){const{groupUuid:s,value:i}=e.detail,a=this.store.getState().regionalFilters;this.store.setState({regionalFilters:{...a,[s]:i}})}_handleSortChange(e){const s=e.detail.value,i=this.store.getState();this.store.setState({sortBy:s,offset:0,assets:[],folders:[]}),Xa(s,i.sortDirection),this.selectionCtrl.resetRange(),this._loadData()}_handleSortDirectionChange(e){const s=e.detail.value,i=this.store.getState();this.store.setState({sortDirection:s,offset:0,assets:[],folders:[]}),Xa(i.sortBy,s),this.selectionCtrl.resetRange(),this._loadData()}_handleTabChange(e){var i,a;const s=e.detail.tab;(i=this.config)!=null&&i.rememberLastTab&&Cl(s,this.config.auth.projectToken),this._selectAllId++,this.store.setState({activeTab:s,activeLabelUuid:null,activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,currentFolder:null,currentFolderPath:((a=this.config)==null?void 0:a.rootFolderPath)??"/",breadcrumb:[],offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleAssetSelect(e){this.selectionCtrl.handleSelect(e.detail.asset,e.detail.index,e.detail.event)}_handleFolderSelect(e){this.selectionCtrl.handleFolderSelect(e.detail.folder,e.detail.index,e.detail.event)}_handleAssetPreview(e){this.store.setState({previewAsset:e.detail.asset,isPreviewOpen:!0})}get _transformationsConfig(){var s;const e=(s=this.config)==null?void 0:s.transformations;return typeof e=="object"?e:void 0}_handleQuickSelect(e){var i;const s=e.detail.asset;if((i=this.config)!=null&&i.transformations&&Vt(s)){this._transformAssets=[s],this._transformFolders=[],this._transformOpen=!0;return}this._emitSelect([s])}_emitSelect(e,s){var a,r;const i={assets:e};s!=null&&s.length&&(i.folders=s),(r=(a=this.config)==null?void 0:a.onSelect)==null||r.call(a,e,s!=null&&s.length?s:void 0),this.dispatchEvent(new CustomEvent("ap-select",{detail:i,bubbles:!0,composed:!0})),this._isInline||this.close()}_handleFolderOpen(e){var r;const s=e.detail.folder,i=this.store.getState(),a=s.path||`${i.currentFolderPath}${s.name}/`;(r=this.config)!=null&&r.rememberLastFolder&&Ja(a,this.config.auth.projectToken),this._selectAllId++,this.store.setState({currentFolder:s.uuid,currentFolderPath:a,breadcrumb:[...i.breadcrumb,{uuid:s.uuid,name:s.name,path:a}],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleBreadcrumbNavigate(e){var n,l;const s=e.detail.uuid,i=this.store.getState();if(i.activeTab==="labels"){this._selectAllId++,this.store.setState({activeLabelUuid:null,breadcrumb:[],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData();return}if(i.activeTab==="collections"){if(this._selectAllId++,!s){this.store.setState({activeCollectionUuid:null,activeCollectionFolder:null,activeCollectionFolders:[],breadcrumb:[],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!1}),this.selectionCtrl.resetRange();return}if(s===i.activeCollectionUuid){this.store.setState({activeCollectionFolder:null,breadcrumb:[i.breadcrumb[0]],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!1}),this.selectionCtrl.resetRange();return}const d=this._findCollectionFolder(i.activeCollectionFolders,s);if(d){const h=i.breadcrumb.findIndex(p=>p.uuid===s),u=i.breadcrumb.slice(0,h+1);this.store.setState({activeCollectionFolder:d,breadcrumb:u,searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}return}const a=s?i.breadcrumb.findIndex(d=>d.uuid===s):-1,r=s?i.breadcrumb.slice(0,a+1):[],o=r.length>0?r[r.length-1].path:((n=this.config)==null?void 0:n.rootFolderPath)||"/";(l=this.config)!=null&&l.rememberLastFolder&&Ja(o,this.config.auth.projectToken),this._selectAllId++,this.store.setState({currentFolder:s||null,currentFolderPath:o,breadcrumb:r,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleLabelOpen(e){const s=e.detail.label;this._selectAllId++,this.store.setState({activeLabelUuid:s.uuid,breadcrumb:[{uuid:s.uuid,name:s.name,path:""}],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}async _handleCollectionOpen(e){const s=e.detail.collection;if(this.apiClient){this._selectAllId++,this.store.setState({activeCollectionUuid:s.uuid,activeCollectionFolder:null,activeCollectionFolders:[],isLoadingCollectionFolders:!0,breadcrumb:[{uuid:s.uuid,name:s.title,path:""}],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange();try{const i=await _n(this.apiClient,s.uuid),a=mr(i.folders||[]);this.store.setState({activeCollectionFolders:a,isLoadingCollectionFolders:!1,isLoading:!1})}catch(i){this.store.setState({isLoadingCollectionFolders:!1,isLoading:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:i,context:"loadCollectionFolders"},bubbles:!0,composed:!0}))}}}_handleCollectionFolderOpen(e){var n;const s=e.detail.folder,i=this.store.getState(),a=s.path.split(" -> ").filter(Boolean),r=[{uuid:i.activeCollectionUuid,name:((n=i.breadcrumb[0])==null?void 0:n.name)||"Collection",path:""}];let o="";for(const l of a)o=o?`${o} -> ${l}`:l,r.push({uuid:o,name:l,path:o});this._selectAllId++,this.store.setState({activeCollectionFolder:s,breadcrumb:r,searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_findCollectionFolder(e,s){for(const i of e){if(i.path===s)return i;if(i.children){const a=this._findCollectionFolder(i.children,s);if(a)return a}}return null}_getVisibleCollectionFolders(){const e=this.store.getState();return e.activeCollectionUuid?e.activeCollectionFolder?e.activeCollectionFolder.children??[]:e.activeCollectionFolders:[]}_resolveInitialFolderPath(e){var s,i,a;return e==="folders"&&((s=this.config)==null?void 0:s.rememberLastFolder)&&wl(this.config.auth.projectToken)||((i=this.config)==null?void 0:i.initialFolderPath)||((a=this.config)==null?void 0:a.rootFolderPath)||"/"}_buildBreadcrumbFromPath(e,s){if(!e||e===s||e==="/")return[];const a=(e.startsWith(s)?e.slice(s.length):e.replace(/^\//,"")).split("/").filter(Boolean),r=[];let o=s.endsWith("/")?s:s+"/";for(const n of a)o+=n+"/",r.push({uuid:o,name:n,path:o});return r}_handlePreviewClose(){this.store.setState({isPreviewOpen:!1,previewAsset:null})}_handlePreviewNavigate(e){this.store.setState({previewAsset:e.detail.asset})}_handleSelectionConfirm(e){var a,r;const s=e.detail.assets,i=e.detail.folders||[];if(i.length>0&&((a=this.config)==null?void 0:a.folderSelection)!==!1&&((r=this.config)==null?void 0:r.folderSelectionMode)==="assets"){this._folderResolveOpen=!0;return}this._emitSelect(s,i.length?i:void 0)}_handleSelectionTransform(e){var r,o;const s=e.detail.assets,i=e.detail.folders||[];if(i.length>0&&((r=this.config)==null?void 0:r.folderSelection)!==!1&&((o=this.config)==null?void 0:o.folderSelectionMode)==="assets"){this._transformAfterResolve=!0,this._folderResolveOpen=!0;return}if(s.filter(Vt).length===0){this._emitSelect(s,i.length?i:void 0);return}this._transformAssets=s,this._transformFolders=i,this._transformOpen=!0}async _handleFolderResolveConfirm(e){var r;const s=e.detail.mode,i=this.selectionCtrl.getSelectedFolders(),a=this.selectionCtrl.getSelectedAssets();this.store.setState({isResolvingFolders:!0});try{const o=await Promise.all(i.map(p=>{var g;return wt(this.apiClient,{fields:(g=this.config)==null?void 0:g.apiFields,folder:p.path,recursive:s==="recursive"?1:0,limit:1e4})})),n=[];for(const p of o)n.push(...p.files);const l=[...a],d=new Set(l.map(p=>p.uuid));for(const p of n)d.has(p.uuid)||(l.push(p),d.add(p.uuid));const h=(r=this.config)==null?void 0:r.maxSelections,u=h?l.slice(0,h):l;if(this._folderResolveOpen=!1,this.store.setState({isResolvingFolders:!1}),this._transformAfterResolve){this._transformAfterResolve=!1,this._transformAssets=u,this._transformFolders=[],this._transformOpen=!0;return}this._emitSelect(u)}catch(o){this.store.setState({isResolvingFolders:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:o,context:"folderResolve"},bubbles:!0,composed:!0}))}}_handleFolderResolveCancel(){this._folderResolveOpen=!1,this._transformAfterResolve=!1}_handleTransformConfirm(e){const s=e.detail.params,i=e.detail.isAspectLocked??!0,a=this._transformAssets,r=this._transformFolders,o=a.length>1,n=Mn(s,{isMultiSelect:o,isAspectLocked:i}),l=a.map(d=>{var g,b;if(!Vt(d))return d;const h=(g=d.url)==null?void 0:g.cdn,u=(b=d.url)==null?void 0:b.permalink,p={cdn:h?Ft(h,n):""};return u&&(p.permalink_cdn=Ft(u,n)),{...d,transformation:{params:s,url:p}}});this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._emitSelect(l,r.length?r:void 0)}_handleTransformSkip(){const e=this._transformAssets,s=this._transformFolders;this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._emitSelect(e,s.length?s:void 0)}_handleTransformCancel(){this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[]}_openCreateFolderDialog(){this._createFolderError=null,this._createFolderOpen=!0}_handleCreateFolderCancel(){this._isCreatingFolder&&(this._cancelCreateFolderRequested=!0),this._createFolderOpen=!1,this._createFolderError=null}async _handleCreateFolderConfirm(e){const s=e.detail.name;if(!s||this._isCreatingFolder||!this.apiClient)return;const i=this.store.getState().currentFolderPath||"/";this._isCreatingFolder=!0,this._cancelCreateFolderRequested=!1,this._createFolderError=null;try{await mn(this.apiClient,s,i),this._cancelCreateFolderRequested||(this._createFolderOpen=!1),this._loadData()}catch(a){this._cancelCreateFolderRequested||(this._createFolderError=this._mapCreateFolderError(a))}finally{this._isCreatingFolder=!1,this._cancelCreateFolderRequested=!1}}_mapCreateFolderError(e){const s=(e==null?void 0:e.message)??"";if(/timed out/i.test(s))return"Request timed out. Please try again.";const i=s.match(/^API error: (\d+)/);if(i)switch(Number(i[1])){case 400:return"Invalid folder name.";case 401:return"Authentication failed. Please reload the page.";case 403:return"You do not have permission to create a folder here.";case 409:return"A folder with this name already exists.";default:return"Failed to create folder. Please try again."}return s||"Failed to create folder. Please try again."}async _handleSelectAll(e){var l,d,h;const s=this.store.getState();if(s.isSelectingAll||!this.apiClient||!(((l=s.config)==null?void 0:l.multiSelect)??!0))return;const a=((d=e==null?void 0:e.detail)==null?void 0:d.scope)??"all",r=a!=="assets"&&((h=this.config)==null?void 0:h.folderSelection)!==!1&&s.folders.length>0;if(!(a!=="folders")){r&&this.selectionCtrl.selectAllFolders(s.folders);return}if(s.assets.length>=s.totalCount){r&&this.selectionCtrl.selectAllFolders(s.folders),this.selectionCtrl.selectAll(s.assets);return}const n=++this._selectAllId;this.store.setState({isSelectingAll:!0});try{const u=this._buildSearchNotation();let p=s.currentFolderPath||"/";const g=s.limit,b=s.assets,y=s.totalCount;let _=s.activeTab==="folders"?0:1,S=u||void 0;if(s.activeTab==="labels"&&s.activeLabelUuid){const F=s.labels.find(ee=>ee.uuid===s.activeLabelUuid);F&&(S=`labels:${F.sid.replace("#","")}${u?" "+u:""}`),p="/",_=1}let k,N;s.activeTab==="collections"&&s.activeCollectionFolder&&(k=s.activeCollectionUuid||void 0,N=s.activeCollectionFolder.filters||void 0,p="",_=1);const T=[];for(let F=b.length;F<y;F+=g)T.push(F);const E=4,H=[];for(let F=0;F<T.length;F+=E){if(n!==this._selectAllId)return;const ee=T.slice(F,F+E),X=await Promise.all(ee.map(Z=>{var ie,m;return wt(this.apiClient,{fields:(ie=this.config)==null?void 0:ie.apiFields,...p?{folder:p}:{},offset:Z,limit:g,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:S,recursive:_,...k&&{collection_uuid:k},...N&&{f64:N},...s.isAISearchActive&&s.searchQuery&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((m=s.config)==null?void 0:m.locale)??"en"}})}));if(n!==this._selectAllId)return;for(const Z of X)Z.files&&H.push(...Z.files)}if(n!==this._selectAllId)return;const A=new Set(b.map(F=>F.uuid)),Q=H.filter(F=>A.has(F.uuid)?!1:(A.add(F.uuid),!0)),z=[...b,...Q];this.store.setState({assets:z,offset:Math.max(0,z.length-g),hasMore:!1,isSelectingAll:!1}),r&&this.selectionCtrl.selectAllFolders(s.folders),this.selectionCtrl.selectAll(z)}catch(u){if(n!==this._selectAllId)return;this.store.setState({isSelectingAll:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:u,context:"selectAll"},bubbles:!0,composed:!0}))}}_handleSelectionClear(){this.selectionCtrl.clearSelection()}_handleSelectionDeselect(e){const s=new Map(this.store.getState().selectedAssets);s.delete(e.detail.uuid),this.store.setState({selectedAssets:s})}_isDateFilterKey(e){return e===C.DATE||e===C.LICENSE_EXPIRY||e===j.DUE_DATE}_handleFilterUpdate(e){const{key:s,values:i,operator:a}=e.detail,o={...this.store.getState().filters};let n=i===""||i===null||i===void 0||Array.isArray(i)&&i.length===0||typeof i=="object"&&!Array.isArray(i)&&Object.values(i).every(d=>d==null||d===""||Array.isArray(d)&&d.length===0);if(!n&&this._isDateFilterKey(s)&&typeof i=="object"&&!Array.isArray(i)){const{kind:d,preset:h,from:u,to:p}=i;n=!d&&!h&&!u&&!p}if(n){const d={...o.applied};delete d[s],o.applied=d,o.pinned.includes(s)||(o.visible=o.visible.filter(h=>h!==s))}else{const d={...o.applied};this._isDateFilterKey(s)&&typeof i=="object"&&!Array.isArray(i)?d[s]={type:"date",field:i.field||"created",kind:i.kind||null,preset:i.preset||null,from:i.from||null,to:i.to||null}:s===C.IMAGE&&typeof i=="object"&&!Array.isArray(i)?d[s]=i:d[s]={type:"string",values:Array.isArray(i)?i:[i],operator:a||":"},o.applied=d,o.visible.includes(s)||(o.visible=[...o.visible,s])}this.store.setState({filters:o,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData();const l=s===j.STATUS||s===j.APPROVER||s===j.REQUESTOR||s===j.DUE_DATE;if(this._pendingFilter===s||this._pendingFilter===C.APPROVAL&&l){this._pendingFilter=null;const d=this.renderRoot.querySelector("ap-filters-bar");d&&(d.pendingFilter=null)}}_handleFilterOpen(e){const s=e.detail.key,i=e.detail.chipRect,a=this.renderRoot.querySelector("ap-content-toolbar");let r,o;if(i){const n=this.renderRoot.querySelector(".toolbar-filters-wrapper");if(n){const l=n.getBoundingClientRect();r=i.left-l.left,o=i.bottom-l.top}}a==null||a.openFilterPanel(s,!0,r,o)}_handleMetadataFilterOpen(e){const{fieldKey:s,chipRect:i}=e.detail,a=this.renderRoot.querySelector("ap-content-toolbar");let r,o;if(i){const n=this.renderRoot.querySelector(".toolbar-filters-wrapper");if(n){const l=n.getBoundingClientRect();r=i.left-l.left,o=i.bottom-l.top}}a==null||a.openMetadataFieldPanel(s,!0,r,o)}_handleFilterPanelChange(e){const s=this.renderRoot.querySelector("ap-filters-bar");s&&(s.activeFilter=e.detail.key,s.activeMetadataField=e.detail.metadataFieldKey||null),!e.detail.key&&!e.detail.metadataFieldKey&&(this._pendingFilter||this._pendingMetadataField)&&(this._pendingFilter=null,this._pendingMetadataField=null,s&&(s.pendingFilter=null,s.pendingMetadataField=null))}async _handleFilterPending(e){var p,g,b;const{key:s,metadataFieldKey:i}=e.detail,a=this.renderRoot.querySelector("ap-filters-bar"),r=this.renderRoot.querySelector("ap-content-toolbar");if(!a||!r)return;i?(this._pendingMetadataField=i,a.pendingMetadataField=i):s&&(this._pendingFilter=s,a.pendingFilter=s),await a.updateComplete;let o=a.renderRoot.querySelector(".chip.pending");if(!o){const y=a.renderRoot.querySelectorAll(".chip.pinned-empty"),_=i?(p=a._getMetadataLabel)==null?void 0:p.call(a,i):void 0;for(const S of y){const k=(b=(g=S.querySelector(".chip-label"))==null?void 0:g.textContent)==null?void 0:b.trim();if(i&&k===_){o=S;break}if(s&&k===(qt[s]||s)){o=S;break}}}if(!o)return;const n=o.getBoundingClientRect(),l=this.renderRoot.querySelector(".toolbar-filters-wrapper"),d=l==null?void 0:l.getBoundingClientRect(),h=d?n.left-d.left:n.left,u=d?n.bottom-d.top:void 0;i?r.openMetadataFieldPanel(i,!0,h,u):s&&r.openFilterPanel(s,!0,h,u)}_handleFilterRemove(e){var o;const s=e.detail.key;if(s in(((o=this.config)==null?void 0:o.forcedFilters)??{}))return;const a={...this.store.getState().filters},r={...a.applied};delete r[s],a.applied=r,a.pinned.includes(s)||(a.visible=a.visible.filter(n=>n!==s)),this.store.setState({filters:a,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleMetadataFilterChange(e){const{fieldKey:s,operator:i,values:a,metadataType:r}=e.detail,n={...this.store.getState().filters},l={...n.metadata},d={...l.applied};if(!a||Array.isArray(a)&&a.length===0?(delete d[s],l.applied=d,l.pinned.includes(s)||(l.visible=l.visible.filter(u=>u!==s))):(d[s]={type:"string",values:Array.isArray(a)?a:[a],operator:i||":",metadataType:r},l.applied=d,l.visible.includes(s)||(l.visible=[...l.visible,s])),n.metadata=l,this.store.setState({filters:n,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData(),this._pendingMetadataField===s){this._pendingMetadataField=null;const u=this.renderRoot.querySelector("ap-filters-bar");u&&(u.pendingMetadataField=null)}}_handleMetadataFieldToggle(e){const{fieldKey:s,visible:i}=e.detail,r={...this.store.getState().filters},o={...r.metadata};i?o.visible.includes(s)||(o.visible=[...o.visible,s]):o.visible=o.visible.filter(n=>n!==s),r.metadata=o,this.store.setState({filters:r})}_handleMetadataFilterRemove(e){const{fieldKey:s}=e.detail,a={...this.store.getState().filters},r={...a.metadata},o={...r.applied};delete o[s],r.applied=o,r.pinned.includes(s)||(r.visible=r.visible.filter(n=>n!==s)),a.metadata=r,this.store.setState({filters:a,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleFilterPin(e){var n,l;const{key:s,pinned:i}=e.detail,r={...this.store.getState().filters};i?r.pinned.includes(s)||(r.pinned=[...r.pinned,s]):(r.pinned=r.pinned.filter(d=>d!==s),s in r.applied||(r.visible=r.visible.filter(d=>d!==s))),this.store.setState({filters:r});const o=((l=(n=this.store.getState().config)==null?void 0:n.auth)==null?void 0:l.projectToken)??null;_l(o,r.pinned)}_handleMetadataPin(e){var l,d;const{fieldKey:s,pinned:i}=e.detail,r={...this.store.getState().filters},o={...r.metadata};i?o.pinned.includes(s)||(o.pinned=[...o.pinned,s]):(o.pinned=o.pinned.filter(h=>h!==s),s in o.applied||(o.visible=o.visible.filter(h=>h!==s))),r.metadata=o,this.store.setState({filters:r});const n=((d=(l=this.store.getState().config)==null?void 0:l.auth)==null?void 0:d.projectToken)??null;xl(n,o.pinned)}_handleFiltersClearAll(){const e=this.store.getState();this.store.setState({filters:{...e.filters,applied:{},visible:[...e.filters.pinned],metadata:{...e.filters.metadata,applied:{},visible:[...e.filters.metadata.pinned]}},offset:0,assets:[],folders:[],isLoading:!0});const s=this.renderRoot.querySelector("ap-filters-bar");s&&(s.activeFilter=null),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleFilterDeactivate(e){const s=e.detail.key,a={...this.store.getState().filters};a.visible=a.visible.filter(r=>r!==s),this.store.setState({filters:a})}_handleMetadataFieldDeactivate(e){const{fieldKey:s}=e.detail,a={...this.store.getState().filters},r={...a.metadata};r.visible=r.visible.filter(o=>o!==s),a.metadata=r,this.store.setState({filters:a})}_handleFiltersSet(e){var d;const{applied:s,metadata:i}=e.detail,r={...this.store.getState().filters},o=new Set(Object.keys(((d=this.config)==null?void 0:d.forcedFilters)??{})),n={...s};for(const h of o)delete n[h];r.applied=n;const l=Object.keys(s);if(r.visible=[...new Set([...r.pinned,...l])],i){const h={...r.metadata};h.applied=i.applied;const u=Object.keys(i.applied);h.visible=[...new Set([...h.pinned,...u])],r.metadata=h}this.store.setState({filters:r,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_getSortOptions(){var s;const e=this.storeCtrl.state;if(e.activeTab==="labels"&&!e.activeLabelUuid)return Il;if(e.activeTab==="collections"){if(!e.activeCollectionUuid)return Dl;if(!(e.activeCollectionFolder&&!((s=e.activeCollectionFolder.children)!=null&&s.length)))return Ml}return e.searchQuery?Pl:e.activeTab==="folders"?Ll:Wi}_buildSearchNotation(){const e=this.store.getState(),s={...this._normalizedForcedFilters,...e.filters.applied};return il(s,e.filters.metadata.applied).join(" ")}render(){var N,T,E,H,A,Q,z,F,ee,X,Z,ie,m,x,P,M,V,U,Se,_t,ae,Ue,ss,is,as,rs,os,We;const e=this.storeCtrl.state,s=e.t,i=Array.from(e.selectedAssets.keys()),a=Array.from(e.selectedFolders.keys()),r=((N=this.config)==null?void 0:N.disabledAssetIds)??[],o=((T=this.config)==null?void 0:T.disabledFolderIds)??[],n=this.selectionCtrl.getSelectedAssets(),l=this.selectionCtrl.getSelectedFolders(),d=((E=this.config)==null?void 0:E.folderSelection)!==!1,h=c`
      <ap-header
        .activeTab=${e.activeTab}
        .tabs=${((H=this.config)==null?void 0:H.tabs)??["assets","folders"]}
        .isInsideLabel=${e.activeTab==="labels"&&!!e.activeLabelUuid}
        .isInsideCollection=${e.activeTab==="collections"&&!!e.activeCollectionUuid}
        .isInsideCollectionLeaf=${e.activeTab==="collections"&&!!e.activeCollectionFolder&&!((A=e.activeCollectionFolder.children)!=null&&A.length)}
        .viewMode=${e.viewMode}
        .searchQuery=${e.searchQuery}
        .enableAISearch=${!!((Q=this.config)!=null&&Q.enableAISearch)}
        .isAISearchActive=${e.isAISearchActive}
        .regionalGroups=${e.regionalVariantGroups}
        .regionalFilters=${e.regionalFilters}
        .hideClose=${this._isInline}
        .t=${s}
        @tab-change=${this._handleTabChange}
        @search-change=${this._handleSearchChange}
        @ai-search-toggle=${this._handleAISearchToggle}
        @view-change=${this._handleViewChange}
        @regional-change=${this._handleRegionalChange}
        @ap-close=${()=>this._handleCancel("close-button")}
      ></ap-header>
    `,u=!!((z=this.config)!=null&&z.uploader),p=((F=this.config)==null?void 0:F.folderCreation)===!0,g=((ee=this.config)==null?void 0:ee.auth.mode)==="sassKey",b=e.activeTab==="folders",y=p&&b&&(g||wn(e.permissions,kn.FOLDER_CREATE)),_=c`
      <div class="content-area"
        @dragenter=${this._onDragEnter}
        @dragover=${this._onDragOver}
        @dragleave=${this._onDragLeave}
        @drop=${this._onDrop}
      >
        ${this._isDragOver?c`
          <div class="drop-zone-overlay">
            <div class="drop-zone-label">
              <ap-icon name="upload" .size=${32}></ap-icon>
              ${s("dropFilesToUpload","Drop files to upload")}
            </div>
          </div>
        `:v}
        <div class="main-content">
          <div class="toolbar-filters-wrapper${(X=this.config)!=null&&X.stickyFilters?" sticky":""}">
            <ap-content-toolbar
              .isLoading=${e.isLoading}
              .totalCount=${e.totalCount}
              .totalFolderCount=${e.totalFolderCount}
              .showUpload=${u}
              .showCreateFolder=${y}
              .showFilters=${!(e.activeTab==="labels"&&!e.activeLabelUuid)&&!(e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((Z=e.activeCollectionFolder.children)!=null&&Z.length)))}
              .countLabel=${e.activeTab==="labels"&&!e.activeLabelUuid?s("labelCount",{count:e.labels.length,defaultValue_one:"{{count}} label",defaultValue_other:"{{count}} labels"}):e.activeTab==="collections"&&!e.activeCollectionUuid?s("collectionCount",{count:e.collections.length,defaultValue_one:"{{count}} collection",defaultValue_other:"{{count}} collections"}):e.activeTab==="collections"&&e.activeCollectionUuid&&!(e.activeCollectionFolder&&!((ie=e.activeCollectionFolder.children)!=null&&ie.length))?s("folderCount",{count:this._getVisibleCollectionFolders().length,defaultValue_one:"{{count}} folder",defaultValue_other:"{{count}} folders"}):""}
              .sortBy=${e.sortBy}
              .sortDirection=${e.sortDirection}
              .sortOptions=${this._getSortOptions()}
              .filters=${e.filters}
              .labels=${e.labels}
              .tags=${e.tags}
              .fileTypes=${e.fileTypes}
              .metadataFields=${e.metadataFields}
              .pinnedFilters=${e.filters.pinned}
              .apiClient=${this.apiClient}
              .forcedFilterKeys=${Object.keys(this._normalizedForcedFilters)}
              .approverUsers=${((m=this.config)==null?void 0:m.approverUsers)??[]}
              .requesterUsers=${((x=this.config)==null?void 0:x.requesterUsers)??[]}
              .t=${s}
              @sort-change=${this._handleSortChange}
              @sort-direction-change=${this._handleSortDirectionChange}
              @filter-update=${this._handleFilterUpdate}
              @filter-pin=${this._handleFilterPin}
              @metadata-filter-change=${this._handleMetadataFilterChange}
              @metadata-field-toggle=${this._handleMetadataFieldToggle}
              @metadata-pin=${this._handleMetadataPin}
              @filter-panel-change=${this._handleFilterPanelChange}
              @filter-pending=${this._handleFilterPending}
              @upload-click=${this._handleUploadClick}
              @create-folder-click=${this._openCreateFolderDialog}
            ></ap-content-toolbar>

            ${e.activeTab==="labels"&&!e.activeLabelUuid||e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((P=e.activeCollectionFolder.children)!=null&&P.length))?v:c`
            <ap-filters-bar
              .appliedFilters=${e.filters.applied}
              .appliedMetadata=${e.filters.metadata.applied}
              .metadataFields=${e.metadataFields}
              .tags=${e.tags}
              .labels=${e.labels}
              .approverUsers=${((M=this.config)==null?void 0:M.approverUsers)??[]}
              .requesterUsers=${((V=this.config)==null?void 0:V.requesterUsers)??[]}
              .pinnedFilters=${e.filters.pinned}
              .pinnedMetadataFields=${e.filters.metadata.pinned}
              .forcedFilters=${((U=this.config)==null?void 0:U.forcedFilters)??{}}
              .t=${s}
              @filter-remove=${this._handleFilterRemove}
              @filter-deactivate=${this._handleFilterDeactivate}
              @filter-open=${this._handleFilterOpen}
              @metadata-filter-open=${this._handleMetadataFilterOpen}
              @metadata-filter-remove=${this._handleMetadataFilterRemove}
              @metadata-field-deactivate=${this._handleMetadataFieldDeactivate}
              @metadata-pin=${this._handleMetadataPin}
              @filters-clear-all=${this._handleFiltersClearAll}
              @filters-set=${this._handleFiltersSet}
            ></ap-filters-bar>
            `}

            ${e.breadcrumb.length>0?c`<ap-breadcrumb
                  .items=${e.breadcrumb}
                  .rootLabel=${e.activeTab==="labels"?s("tabLabels","Labels"):e.activeTab==="collections"?s("tabCollections","Collections"):s("rootFolder","Root")}
                  @breadcrumb-navigate=${this._handleBreadcrumbNavigate}
                ></ap-breadcrumb>`:v}
          </div>

          ${e.isLoading&&e.assets.length===0&&e.folders.length===0&&!(e.activeTab==="labels"&&!e.activeLabelUuid)&&!(e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((Se=e.activeCollectionFolder.children)!=null&&Se.length)))?c`<ap-skeleton .variant=${e.viewMode} .gridSize=${((_t=this.config)==null?void 0:_t.gridSize)??"normal"} .multiSelect=${((ae=this.config)==null?void 0:ae.multiSelect)!==!1} .folderCount=${2} .t=${s}></ap-skeleton>`:this._renderContent(e,i,a,d,r,o)}

          <ap-marquee-overlay .active=${this.marqueeCtrl.isActive} .rect=${this.marqueeCtrl.rect}></ap-marquee-overlay>
          ${this._folderResolveOpen?c`
            <ap-folder-resolve-dialog
              .folders=${l}
              .loading=${e.isResolvingFolders}
              .t=${s}
              @folder-resolve-confirm=${this._handleFolderResolveConfirm}
              @folder-resolve-cancel=${this._handleFolderResolveCancel}
            ></ap-folder-resolve-dialog>
          `:v}
          ${this._transformOpen?c`
            <ap-transformation-dialog
              .assets=${this._transformAssets}
              .isMultiSelect=${this._transformAssets.length>1}
              .t=${s}
              .exportOriginalLabel=${(Ue=this._transformationsConfig)==null?void 0:Ue.exportOriginalLabel}
              .applyExportLabel=${(ss=this._transformationsConfig)==null?void 0:ss.applyExportLabel}
              @transform-confirm=${this._handleTransformConfirm}
              @transform-skip=${this._handleTransformSkip}
              @transform-cancel=${this._handleTransformCancel}
            ></ap-transformation-dialog>
          `:v}
          ${this._createFolderOpen?c`
            <ap-create-folder-dialog
              .currentFolderPath=${e.currentFolderPath}
              .loading=${this._isCreatingFolder}
              .error=${this._createFolderError}
              @create-folder-confirm=${this._handleCreateFolderConfirm}
              @create-folder-cancel=${this._handleCreateFolderCancel}
            ></ap-create-folder-dialog>
          `:v}
        </div>

        ${e.isPreviewOpen&&e.previewAsset?c`<ap-preview-panel
              .asset=${e.previewAsset}
              .assets=${e.assets}
              .selectedIds=${i}
              .containerToken=${e.projectToken}
              .showMetadata=${((is=this.config)==null?void 0:is.showMetadata)!==!1}
              .metadataFields=${e.metadataFields}
              .labels=${e.labels}
              .regionalFilters=${e.regionalFilters}
              .multiSelect=${((as=this.config)==null?void 0:as.multiSelect)??!0}
              .t=${s}
              @preview-close=${this._handlePreviewClose}
              @preview-navigate=${this._handlePreviewNavigate}
              @asset-select=${this._handleAssetSelect}
              @asset-quick-select=${this._handleQuickSelect}
              @filter-update=${this._handleFilterUpdate}
            ></ap-preview-panel>`:v}
      </div>
    `,S=c`
      <ap-selection-bar
        .selectedAssets=${n}
        .selectedFolders=${l}
        .totalCount=${e.totalCount}
        .totalFolderCount=${e.totalFolderCount}
        .isSelectingAll=${e.isSelectingAll}
        .multiSelect=${((rs=this.config)==null?void 0:rs.multiSelect)??!0}
        .maxSelections=${(os=this.config)==null?void 0:os.maxSelections}
        .showTransform=${!!((We=this.config)!=null&&We.transformations)&&n.some(Vt)}
        .t=${s}
        @selection-confirm=${this._handleSelectionConfirm}
        @selection-transform=${this._handleSelectionTransform}
        @selection-clear=${this._handleSelectionClear}
        @selection-deselect=${this._handleSelectionDeselect}
        @select-all=${this._handleSelectAll}
      ></ap-selection-bar>
    `,k=this._isUploaderOpen?c`
      <div class="uploader-overlay">
        <div class="uploader-body">${this._uploaderEl}</div>
      </div>
    `:v;return this._isInline?e.isOpen?c`
        <div class="ap-inline">
          ${this._isUploaderOpen?k:c`
            <div class="inline-header">${h}</div>
            <div class="inline-content">${_}</div>
            <div class="inline-footer">${S}</div>
          `}
        </div>
      `:v:c`
      <ap-modal
        ?open=${e.isOpen}
        @ap-cancel=${xe=>this._handleCancel(xe.detail.reason)}
      >
        ${this._isUploaderOpen?k:c`
          <div slot="header">${h}</div>
          ${_}
          <div slot="footer">${S}</div>
        `}
      </ap-modal>
    `}_renderContent(e,s,i=[],a=!1,r=[],o=[]){var l,d,h,u,p,g,b,y,_,S,k,N,T;const n=e.t;if(e.activeTab==="assets")return!e.isLoading&&e.assets.length===0?c`
          <div class="empty-state">
            <ap-icon name="search" .size=${48}></ap-icon>
            <div class="empty-title">${n("noAssetsFound","No assets found")}</div>
            <div class="empty-desc">${n("noAssetsFoundDesc","Try adjusting your search or filters")}</div>
          </div>
        `:e.viewMode==="grid"?c`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${[]}
            .t=${n}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .disabledAssetIds=${r}
            .disabledFolderIds=${o}
            .isLoading=${e.isLoading}
            .multiSelect=${((l=this.config)==null?void 0:l.multiSelect)??!0}
            .folderSelectable=${a}
            .gridSize=${((d=this.config)==null?void 0:d.gridSize)??"normal"}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
            @folder-select=${this._handleFolderSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:c`
        <ap-list-view
          .assets=${e.assets}
          .folders=${[]}
          .t=${n}
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .disabledAssetIds=${r}
          .disabledFolderIds=${o}
          .isLoading=${e.isLoading}
          .multiSelect=${((h=this.config)==null?void 0:h.multiSelect)??!0}
          .folderSelectable=${a}
          .totalCount=${e.totalCount}
          .isSelectingAll=${e.isSelectingAll}
          @asset-select=${this._handleAssetSelect}
          @asset-preview=${this._handleAssetPreview}
          @asset-quick-select=${this._handleQuickSelect}
          @folder-select=${this._handleFolderSelect}
          @select-all=${this._handleSelectAll}
          @selection-clear=${this._handleSelectionClear}
        ></ap-list-view>
        <div id="sentinel"></div>
      `;if(e.activeTab==="folders")return!e.isLoading&&e.folders.length===0&&e.assets.length===0?c`
          <div class="empty-state">
            <ap-icon name="folder" .size=${48}></ap-icon>
            <div class="empty-title">${n("emptyFolder","This folder is empty")}</div>
            <div class="empty-desc">${n("emptyFolderDesc","No folders or files found here")}</div>
          </div>
        `:e.viewMode==="grid"?c`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${e.folders}
            .folderPreviews=${e.folderPreviews}
            .t=${n}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .disabledAssetIds=${r}
            .disabledFolderIds=${o}
            .isLoading=${e.isLoading}
            .multiSelect=${((u=this.config)==null?void 0:u.multiSelect)??!0}
            .folderSelectable=${a}
            .gridSize=${((p=this.config)==null?void 0:p.gridSize)??"normal"}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
            @folder-open=${this._handleFolderOpen}
            @folder-select=${this._handleFolderSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:c`
        <ap-list-view
          .assets=${e.assets}
          .folders=${e.folders}
          .folderPreviews=${e.folderPreviews}
          .t=${n}
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .disabledAssetIds=${r}
          .disabledFolderIds=${o}
          .isLoading=${e.isLoading}
          .multiSelect=${((g=this.config)==null?void 0:g.multiSelect)??!0}
          .folderSelectable=${a}
          .totalCount=${e.totalCount}
          .isSelectingAll=${e.isSelectingAll}
          @asset-select=${this._handleAssetSelect}
          @asset-preview=${this._handleAssetPreview}
          @asset-quick-select=${this._handleQuickSelect}
          @folder-open=${this._handleFolderOpen}
          @folder-select=${this._handleFolderSelect}
          @select-all=${this._handleSelectAll}
          @selection-clear=${this._handleSelectionClear}
        ></ap-list-view>
        <div id="sentinel"></div>
      `;if(e.activeTab==="labels"){if(!e.activeLabelUuid){let E=e.labels;if(e.searchQuery){const A=e.searchQuery.toLowerCase();E=e.labels.filter(Q=>Q.name.toLowerCase().includes(A))}const H=e.sortDirection==="asc"?1:-1;return E=[...E].sort((A,Q)=>H*A.name.localeCompare(Q.name)),E.length===0?c`
            <div class="empty-state">
              <ap-icon name="tag" .size=${48}></ap-icon>
              <div class="empty-title">${e.searchQuery?n("noLabelsMatchSearch","No labels match your search"):n("noLabelsFound","No labels found")}</div>
              <div class="empty-desc">${e.searchQuery?n("tryDifferentSearch","Try a different search term"):n("labelsWillAppear","Labels will appear here once created")}</div>
            </div>
          `:e.viewMode==="grid"?c`
            <div class="labels-grid">
              ${E.map((A,Q)=>c`
                <ap-label-card .label=${A} .index=${Q} @label-open=${this._handleLabelOpen}></ap-label-card>
              `)}
            </div>
          `:c`
          <div class="labels-list">
            ${E.map((A,Q)=>c`
              <ap-label-row .label=${A} .index=${Q} @label-open=${this._handleLabelOpen}></ap-label-row>
            `)}
          </div>
        `}return!e.isLoading&&e.assets.length===0?c`
          <div class="empty-state">
            <ap-icon name="tag" .size=${48}></ap-icon>
            <div class="empty-title">${n("noAssetsInLabel","No assets in this label")}</div>
            <div class="empty-desc">${n("noAssetsInLabelDesc","Assets added to this label will appear here")}</div>
          </div>
        `:e.viewMode==="grid"?c`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${[]}
            .t=${n}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .disabledAssetIds=${r}
            .disabledFolderIds=${o}
            .isLoading=${e.isLoading}
            .multiSelect=${((b=this.config)==null?void 0:b.multiSelect)??!0}
            .folderSelectable=${!1}
            .gridSize=${((y=this.config)==null?void 0:y.gridSize)??"normal"}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:c`
        <ap-list-view
          .assets=${e.assets}
          .folders=${[]}
          .t=${n}
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .disabledAssetIds=${r}
          .disabledFolderIds=${o}
          .isLoading=${e.isLoading}
          .multiSelect=${((_=this.config)==null?void 0:_.multiSelect)??!0}
          .folderSelectable=${!1}
          .totalCount=${e.totalCount}
          .isSelectingAll=${e.isSelectingAll}
          @asset-select=${this._handleAssetSelect}
          @asset-preview=${this._handleAssetPreview}
          @asset-quick-select=${this._handleQuickSelect}
          @select-all=${this._handleSelectAll}
          @selection-clear=${this._handleSelectionClear}
        ></ap-list-view>
        <div id="sentinel"></div>
      `}if(e.activeTab==="collections"){if(!e.activeCollectionUuid){let A=e.collections;if(e.searchQuery){const z=e.searchQuery.toLowerCase();A=e.collections.filter(F=>F.title.toLowerCase().includes(z))}const Q=e.sortDirection==="asc"?1:-1;return e.sortBy==="created_at"?A=[...A].sort((z,F)=>Q*(new Date(z.created_at).getTime()-new Date(F.created_at).getTime())):e.sortBy==="updated_at"?A=[...A].sort((z,F)=>Q*(new Date(z.updated_at).getTime()-new Date(F.updated_at).getTime())):A=[...A].sort((z,F)=>Q*z.title.localeCompare(F.title)),A.length===0?c`
            <div class="empty-state">
              <ap-icon name="layout-grid" .size=${48}></ap-icon>
              <div class="empty-title">${e.searchQuery?n("noCollectionsMatchSearch","No collections match your search"):n("noCollectionsFound","No collections found")}</div>
              <div class="empty-desc">${e.searchQuery?n("tryDifferentSearch","Try a different search term"):n("collectionsWillAppear","Collections will appear here once created")}</div>
            </div>
          `:e.viewMode==="grid"?c`
            <div class="collections-grid">
              ${A.map((z,F)=>c`
                <ap-collection-card .collection=${z} .index=${F} @collection-open=${this._handleCollectionOpen}></ap-collection-card>
              `)}
            </div>
          `:c`
          <div class="collections-list">
            ${A.map((z,F)=>c`
              <ap-collection-row .collection=${z} .index=${F} @collection-open=${this._handleCollectionOpen}></ap-collection-row>
            `)}
          </div>
        `}if(e.isLoadingCollectionFolders)return c`<div class="loading-center"><ap-spinner></ap-spinner></div>`;const E=this._getVisibleCollectionFolders();if(!e.activeCollectionFolder||(((S=e.activeCollectionFolder.children)==null?void 0:S.length)??0)>0){let A=E;if(e.searchQuery){const z=e.searchQuery.toLowerCase();A=E.filter(F=>F.name.toLowerCase().includes(z))}const Q=e.sortDirection==="asc"?1:-1;return A=[...A].sort((z,F)=>Q*z.name.localeCompare(F.name)),A.length===0?c`
            <div class="empty-state">
              <ap-icon name="folder" .size=${48}></ap-icon>
              <div class="empty-title">${e.searchQuery?n("noFoldersMatchSearch","No folders match your search"):n("noFoldersInCollection","No folders in this collection")}</div>
              <div class="empty-desc">${e.searchQuery?n("tryDifferentSearch","Try a different search term"):n("collectionFoldersWillAppear","Collection folders will appear here")}</div>
            </div>
          `:e.viewMode==="grid"?c`
            <div class="collection-folders-grid">
              ${A.map((z,F)=>c`
                <ap-collection-folder-card .folder=${z} .index=${F} @collection-folder-open=${this._handleCollectionFolderOpen}></ap-collection-folder-card>
              `)}
            </div>
          `:c`
          <div class="collection-folders-list">
            ${A.map((z,F)=>c`
              <ap-collection-folder-row .folder=${z} .index=${F} @collection-folder-open=${this._handleCollectionFolderOpen}></ap-collection-folder-row>
            `)}
          </div>
        `}return!e.isLoading&&e.assets.length===0?c`
          <div class="empty-state">
            <ap-icon name="folder" .size=${48}></ap-icon>
            <div class="empty-title">${n("noAssetsInCollectionFolder","No assets in this collection folder")}</div>
            <div class="empty-desc">${n("noAssetsInCollectionFolderDesc","Assets matching this collection's criteria will appear here")}</div>
          </div>
        `:e.viewMode==="grid"?c`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${[]}
            .t=${n}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .disabledAssetIds=${r}
            .disabledFolderIds=${o}
            .isLoading=${e.isLoading}
            .multiSelect=${((k=this.config)==null?void 0:k.multiSelect)??!0}
            .folderSelectable=${!1}
            .gridSize=${((N=this.config)==null?void 0:N.gridSize)??"normal"}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:c`
        <ap-list-view
          .assets=${e.assets}
          .folders=${[]}
          .t=${n}
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .disabledAssetIds=${r}
          .disabledFolderIds=${o}
          .isLoading=${e.isLoading}
          .multiSelect=${((T=this.config)==null?void 0:T.multiSelect)??!0}
          .folderSelectable=${!1}
          .totalCount=${e.totalCount}
          .isSelectingAll=${e.isSelectingAll}
          @asset-select=${this._handleAssetSelect}
          @asset-preview=${this._handleAssetPreview}
          @asset-quick-select=${this._handleQuickSelect}
          @select-all=${this._handleSelectAll}
          @selection-clear=${this._handleSelectionClear}
        ></ap-list-view>
        <div id="sentinel"></div>
      `}return v}};ca.styles=[I`
      :host {
        display: contents;
        font-family: var(--ap-font-family, system-ui, -apple-system, sans-serif);
      }
      :host([inline]) {
        display: block;
        overflow: hidden;
        width: 100%;
        min-width: 0;
        box-sizing: border-box;
        height: var(--ap-inline-height, 600px);
      }
      .content-area {
        position: relative;
        flex: 1;
        display: flex;
        overflow: hidden;
        min-height: 0;
      }
      .main-content {
        position: relative;
        flex: 1;
        min-width: 0;
        overflow-y: auto;
      }
      .toolbar-filters-wrapper {
        position: relative;
        z-index: 10;
      }
      .toolbar-filters-wrapper.sticky {
        position: sticky;
        top: 0;
        z-index: 20;
        background: var(--ap-background, oklch(1 0 0));
      }
      .empty-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 64px 20px;
        color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
        text-align: center;
      }
      .empty-state ap-icon {
        margin-bottom: 16px;
        opacity: 0.5;
      }
      .empty-title {
        font-size: var(--ap-font-size-base, 1rem);
        font-weight: 500;
        color: var(--ap-foreground, oklch(0.37 0.022 248.413));
        margin-bottom: 4px;
      }
      .empty-desc {
        font-size: var(--ap-font-size-sm, 0.875rem);
      }
      .labels-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 16px;
        padding: 0 20px 16px;
      }
      .labels-list {
        padding: 0 20px 16px;
      }
      .collections-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        gap: 12px;
        padding: 0 20px 16px;
      }
      .collections-list {
        padding: 0 20px 16px;
      }
      .collection-folders-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 12px;
        padding: 0 20px 16px;
      }
      .collection-folders-list {
        padding: 0 20px 16px;
      }
      .loading-center {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 64px 20px;
      }
      .ap-inline {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        background: var(--ap-background, oklch(1 0 0));
        font-family: var(--ap-font-family, system-ui, -apple-system, sans-serif);
        color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      }
      .ap-inline .inline-header {
        flex-shrink: 0;
      }
      .ap-inline .inline-content {
        flex: 1;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
      }
      .ap-inline .inline-footer {
        flex-shrink: 0;
      }

      /* Upload drop zone overlay */
      .drop-zone-overlay {
        position: absolute;
        inset: 0;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.08));
        border: 2px dashed var(--ap-primary, oklch(0.65 0.19 258));
        border-radius: var(--ap-radius, 8px);
        pointer-events: none;
        animation: drop-zone-in 150ms ease-out;
      }
      .drop-zone-overlay .drop-zone-label {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        color: var(--ap-primary, oklch(0.65 0.19 258));
        font-size: 1rem;
        font-weight: 500;
      }
      @keyframes drop-zone-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @media (prefers-reduced-motion: reduce) {
        .drop-zone-overlay { animation: none; }
      }

      /* Uploader overlay panel — fills the entire modal/inline container */
      .uploader-overlay {
        position: relative;
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 0;
        background: var(--ap-background, oklch(1 0 0));
        animation: uploader-slide-in 250ms ease-out;
      }
      @keyframes uploader-slide-in {
        from { transform: translateX(100%); }
        to   { transform: translateX(0); }
      }
      @media (prefers-reduced-motion: reduce) {
        .uploader-overlay { animation: none; }
      }
      .uploader-body {
        flex: 1;
        overflow: hidden;
        min-height: 0;
      }
      .uploader-body sfx-uploader {
        display: block;
        width: 100%;
        height: 100%;
      }
    `];let Ne=ca;yt([w()],Ne.prototype,"_isDragOver");yt([w()],Ne.prototype,"_isUploaderOpen");yt([w()],Ne.prototype,"_folderResolveOpen");yt([w()],Ne.prototype,"_transformOpen");yt([w()],Ne.prototype,"_createFolderOpen");yt([w()],Ne.prototype,"_isCreatingFolder");yt([w()],Ne.prototype,"_createFolderError");yt([f({type:Object})],Ne.prototype,"config");typeof customElements<"u"&&!customElements.get("sfx-asset-picker")&&customElements.define("sfx-asset-picker",Ne);const Ud=[{pattern:"/",load:()=>W(()=>import("./landing-TMoELmU0.js"),__vite__mapDeps([0,1])).then(t=>t.default)},{pattern:"/docs/getting-started",load:()=>W(()=>import("./getting-started-Ch2NjLo6.js"),__vite__mapDeps([2,3])).then(t=>t.default)},{pattern:"/docs/configuration",load:()=>W(()=>import("./configuration-DFpgwuv1.js"),__vite__mapDeps([4,3])).then(t=>t.default)},{pattern:"/docs/api",load:()=>W(()=>import("./api-Dl3UszFN.js"),__vite__mapDeps([5,3])).then(t=>t.default)},{pattern:"/docs/theming",load:()=>W(()=>import("./theming-hrqYM8pb.js"),__vite__mapDeps([6,3])).then(t=>t.default)},{pattern:"/docs/filters",load:()=>W(()=>import("./filters-BlL5oE1x.js"),__vite__mapDeps([7,3])).then(t=>t.default)},{pattern:"/docs/types",load:()=>W(()=>import("./types-DPNAgA2W.js"),__vite__mapDeps([8,3])).then(t=>t.default)},{pattern:"/examples/basic",load:()=>W(()=>import("./basic-hrV_8TSV.js"),__vite__mapDeps([9,1])).then(t=>t.default)},{pattern:"/examples/single-select",load:()=>W(()=>import("./single-select-BCCz3NHx.js"),__vite__mapDeps([10,1])).then(t=>t.default)},{pattern:"/examples/multi-select",load:()=>W(()=>import("./multi-select-DPmQYzOw.js"),__vite__mapDeps([11,1])).then(t=>t.default)},{pattern:"/examples/disabled-assets",load:()=>W(()=>import("./disabled-assets-DmSwasiX.js"),__vite__mapDeps([12,1])).then(t=>t.default)},{pattern:"/examples/theming",load:()=>W(()=>import("./theming-CgJMsfIW.js"),__vite__mapDeps([13,1])).then(t=>t.default)},{pattern:"/examples/custom-theming",load:()=>W(()=>import("./custom-theming-2LqPXfz5.js"),__vite__mapDeps([14,1])).then(t=>t.default)},{pattern:"/examples/default-filters",load:()=>W(()=>import("./default-filters-DcmuikEz.js"),__vite__mapDeps([15,1])).then(t=>t.default)},{pattern:"/examples/forced-filters",load:()=>W(()=>import("./forced-filters-3x96KDdG.js"),__vite__mapDeps([16,1])).then(t=>t.default)},{pattern:"/examples/hidden-tabs",load:()=>W(()=>import("./hidden-tabs-DTE-IILn.js"),__vite__mapDeps([17,1])).then(t=>t.default)},{pattern:"/examples/root-folder",load:()=>W(()=>import("./root-folder-CUgQr_23.js"),__vite__mapDeps([18,1])).then(t=>t.default)},{pattern:"/examples/events",load:()=>W(()=>import("./events-DfKEnUSq.js"),__vite__mapDeps([19,1])).then(t=>t.default)},{pattern:"/examples/react-wrapper",load:()=>W(()=>import("./react-wrapper-BXYjOtmk.js"),__vite__mapDeps([20,1])).then(t=>t.default)},{pattern:"/examples/inline",load:()=>W(()=>import("./inline-Cy1mUE50.js"),__vite__mapDeps([21,1])).then(t=>t.default)},{pattern:"/examples/sticky-filters",load:()=>W(()=>import("./sticky-filters-D50Dh0JM.js"),__vite__mapDeps([22,1])).then(t=>t.default)},{pattern:"/examples/grid-size",load:()=>W(()=>import("./grid-size-oAXRjzQV.js"),__vite__mapDeps([23,1])).then(t=>t.default)},{pattern:"/examples/preferences",load:()=>W(()=>import("./preferences-CfypOWl8.js"),__vite__mapDeps([24,1])).then(t=>t.default)},{pattern:"/examples/uploader",load:()=>W(()=>import("./uploader-r5CkHRtc.js"),__vite__mapDeps([25,1])).then(t=>t.default)},{pattern:"/examples/folder-selection",load:()=>W(()=>import("./folder-selection-C5Gze1iL.js"),__vite__mapDeps([26,1])).then(t=>t.default)},{pattern:"/examples/ai-search",load:()=>W(()=>import("./ai-search-DzwSikwR.js"),__vite__mapDeps([27,1])).then(t=>t.default)},{pattern:"/examples/transformations",load:()=>W(()=>import("./transformations-AJ0amlLa.js"),__vite__mapDeps([28,1])).then(t=>t.default)},{pattern:"/examples/language-switcher",load:()=>W(()=>import("./language-switcher-gtOKSEC-.js"),__vite__mapDeps([29,1])).then(t=>t.default)}];let ds=null,er=0;function Kd(t){const e=document.getElementById("content"),s=document.getElementById("sidebar"),i=document.getElementById("sidebar-docs"),a=document.getElementById("sidebar-examples"),r=document.querySelectorAll(".topbar-nav-link");async function o(){const n=location.hash.slice(1)||"/",l=++er;ds!=null&&ds.destroy&&ds.destroy(),t.close();const d=Ud.find(_=>_.pattern===n);if(!d){location.hash="#/";return}const h=n.startsWith("/docs/"),u=n.startsWith("/examples/"),p=h||u,g=n==="/";s.classList.toggle("hidden",!p),document.body.classList.toggle("has-sidebar",p),document.body.classList.toggle("is-home",g),i.classList.toggle("hidden",!h),a.classList.toggle("hidden",!u),s.querySelectorAll(".sidebar-link").forEach(_=>{_.classList.toggle("active",_.getAttribute("data-route")===n)});const b=h?"docs":u?"examples":"home";r.forEach(_=>{_.classList.toggle("active",_.getAttribute("data-section")===b)}),s.classList.remove("mobile-open"),window.scrollTo(0,0);const y=await d.load();l===er&&(ds=y,e.innerHTML=y.render(),y.init&&y.init(t))}window.addEventListener("hashchange",o),o()}const la="ap-demo-auth",ci={projectToken:"fbmjmuoeb",securityTemplateKey:"SECU_47D57B3106A841F7A1FEA951846CC5F3"};function Bd(){try{const t=localStorage.getItem(la);if(t)return{...ci,...JSON.parse(t)}}catch{}return{...ci}}function Vd(t){localStorage.setItem(la,JSON.stringify(t))}function qd(){const t=window.__apDemoFlags;return t&&typeof t=="object"?t:{}}function Jd(t={}){const{projectToken:e,securityTemplateKey:s}=Bd();return{auth:{mode:"securityTemplate",securityTemplateKey:s,projectToken:e},...t,...qd()}}function Hd(){const t=document.getElementById("auth-btn"),e=document.getElementById("auth-popover"),s=document.getElementById("auth-project-token"),i=document.getElementById("auth-sec-key"),a=document.getElementById("auth-save");try{const r=localStorage.getItem(la);if(r){const o=JSON.parse(r);s.value=o.projectToken??"",i.value=o.securityTemplateKey??""}}catch{}t.addEventListener("click",r=>{r.stopPropagation(),e.classList.toggle("hidden")}),a.addEventListener("click",()=>{Vd({projectToken:s.value.trim()||ci.projectToken,securityTemplateKey:i.value.trim()||ci.securityTemplateKey}),window.location.reload()}),document.addEventListener("click",r=>{!e.contains(r.target)&&!t.contains(r.target)&&e.classList.add("hidden")})}Hd();console.info(`%c[asset-picker demo]%c Override picker config from the console:
  window.__apDemoFlags = { folderCreation: true }
Then re-open the picker. Flags merge over the example's own overrides.`,"color: #5b6cff; font-weight: 600;","color: inherit;");const Gd=document.getElementById("sidebar-toggle"),jr=document.getElementById("sidebar");Gd.addEventListener("click",()=>{jr.classList.toggle("mobile-open")});document.getElementById("content").addEventListener("click",()=>{jr.classList.remove("mobile-open")});const Qd=document.getElementById("picker");Kd(Qd);export{v as A,no as D,Xe as E,W as _,I as a,Jd as b,ut as c,O as d,Ql as e,c as f,Wl as i,f as n,w as r,Gl as t,nt as w};
