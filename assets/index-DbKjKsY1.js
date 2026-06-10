const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/landing-r51i0_JQ.js","assets/code-block-Bk3NnwHF.js","assets/getting-started-Ch2NjLo6.js","assets/doc-utils-XkOyWBCy.js","assets/configuration-DFpgwuv1.js","assets/api-Dl3UszFN.js","assets/theming-hrqYM8pb.js","assets/filters-BlL5oE1x.js","assets/types-DPNAgA2W.js","assets/basic-KsnSBHoo.js","assets/single-select-B6Dvjd_q.js","assets/multi-select-BFLQ6nVr.js","assets/disabled-assets-DsmOL6Np.js","assets/theming-167ULGtS.js","assets/custom-theming-DH66u_Pf.js","assets/default-filters-B3oaA7_t.js","assets/forced-filters-BTQ3ECVM.js","assets/hidden-tabs-BEcuV-8N.js","assets/root-folder-B73wxui3.js","assets/events-4loqtsrE.js","assets/react-wrapper-BXYjOtmk.js","assets/inline-gB0JfcBZ.js","assets/sticky-filters-BPG_q-BJ.js","assets/grid-size-CwKRR8UW.js","assets/preferences-BRL39KLW.js","assets/uploader-Dy_6OmfC.js","assets/folder-selection-D_jmNqS3.js","assets/ai-search-BnWKKIHZ.js","assets/transformations-6nAhdtzX.js","assets/language-switcher-Dw5EXS7S.js"])))=>i.map(i=>d[i]);
function jr(t,e){for(var s=0;s<e.length;s++){const i=e[s];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in t)){const r=Object.getOwnPropertyDescriptor(i,a);r&&Object.defineProperty(t,a,r.get?r:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();const Ur="modulepreload",Kr=function(t){return"/asset-picker/"+t},ca={},G=function(e,s,i){let a=Promise.resolve();if(s&&s.length>0){let o=function(p){return Promise.all(p.map(h=>Promise.resolve(h).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),l=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));a=o(s.map(p=>{if(p=Kr(p),p in ca)return;ca[p]=!0;const h=p.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${u}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":Ur,h||(d.as="script"),d.crossOrigin="",d.href=p,l&&d.setAttribute("nonce",l),document.head.appendChild(d),h)return new Promise((g,b)=>{d.addEventListener("load",g),d.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${p}`)))})}))}function r(o){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=o,window.dispatchEvent(n),!n.defaultPrevented)throw o}return a.then(o=>{for(const n of o||[])n.status==="rejected"&&r(n.reason);return e().catch(r)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Us=globalThis,Ni=Us.ShadowRoot&&(Us.ShadyCSS===void 0||Us.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ji=Symbol(),da=new WeakMap;let tr=class{constructor(e,s,i){if(this._$cssResult$=!0,i!==ji)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o;const s=this.t;if(Ni&&e===void 0){const i=s!==void 0&&s.length===1;i&&(e=da.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&da.set(s,e))}return e}toString(){return this.cssText}};const Br=t=>new tr(typeof t=="string"?t:t+"",void 0,ji),I=(t,...e)=>{const s=t.length===1?t[0]:e.reduce((i,a,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+t[r+1],t[0]);return new tr(s,t,ji)},Vr=(t,e)=>{if(Ni)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of e){const i=document.createElement("style"),a=Us.litNonce;a!==void 0&&i.setAttribute("nonce",a),i.textContent=s.cssText,t.appendChild(i)}},pa=Ni?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(const i of e.cssRules)s+=i.cssText;return Br(s)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Hr,defineProperty:qr,getOwnPropertyDescriptor:Gr,getOwnPropertyNames:Qr,getOwnPropertySymbols:Wr,getPrototypeOf:Yr}=Object,ot=globalThis,ha=ot.trustedTypes,Xr=ha?ha.emptyScript:"",gi=ot.reactiveElementPolyfillSupport,cs=(t,e)=>t,Hs={toAttribute(t,e){switch(e){case Boolean:t=t?Xr:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},Ui=(t,e)=>!Hr(t,e),ua={attribute:!0,type:String,converter:Hs,reflect:!1,useDefault:!1,hasChanged:Ui};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ot.litPropertyMetadata??(ot.litPropertyMetadata=new WeakMap);let Kt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=ua){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(e,s),!s.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(e,i,s);a!==void 0&&qr(this.prototype,e,a)}}static getPropertyDescriptor(e,s,i){const{get:a,set:r}=Gr(this.prototype,e)??{get(){return this[s]},set(o){this[s]=o}};return{get:a,set(o){const n=a==null?void 0:a.call(this);r==null||r.call(this,o),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ua}static _$Ei(){if(this.hasOwnProperty(cs("elementProperties")))return;const e=Yr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(cs("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(cs("properties"))){const s=this.properties,i=[...Qr(s),...Wr(s)];for(const a of i)this.createProperty(a,s[a])}const e=this[Symbol.metadata];if(e!==null){const s=litPropertyMetadata.get(e);if(s!==void 0)for(const[i,a]of s)this.elementProperties.set(i,a)}this._$Eh=new Map;for(const[s,i]of this.elementProperties){const a=this._$Eu(s,i);a!==void 0&&this._$Eh.set(a,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const s=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const a of i)s.unshift(pa(a))}else e!==void 0&&s.push(pa(e));return s}static _$Eu(e,s){const i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(s=>s(this))}addController(e){var s;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var s;(s=this._$EO)==null||s.delete(e)}_$E_(){const e=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Vr(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostConnected)==null?void 0:i.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostDisconnected)==null?void 0:i.call(s)})}attributeChangedCallback(e,s,i){this._$AK(e,i)}_$ET(e,s){var r;const i=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,i);if(a!==void 0&&i.reflect===!0){const o=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:Hs).toAttribute(s,i.type);this._$Em=e,o==null?this.removeAttribute(a):this.setAttribute(a,o),this._$Em=null}}_$AK(e,s){var r,o;const i=this.constructor,a=i._$Eh.get(e);if(a!==void 0&&this._$Em!==a){const n=i.getPropertyOptions(a),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)==null?void 0:r.fromAttribute)!==void 0?n.converter:Hs;this._$Em=a;const p=l.fromAttribute(s,n.type);this[a]=p??((o=this._$Ej)==null?void 0:o.get(a))??p,this._$Em=null}}requestUpdate(e,s,i,a=!1,r){var o;if(e!==void 0){const n=this.constructor;if(a===!1&&(r=this[e]),i??(i=n.getPropertyOptions(e)),!((i.hasChanged??Ui)(r,s)||i.useDefault&&i.reflect&&r===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,s,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,s,{useDefault:i,reflect:a,wrapped:r},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??s??this[e]),r!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(s=void 0),this._$AL.set(e,s)),a===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const a=this.constructor.elementProperties;if(a.size>0)for(const[r,o]of a){const{wrapped:n}=o,l=this[r];n!==!0||this._$AL.has(r)||l===void 0||this.C(r,void 0,o,l)}}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(i=this._$EO)==null||i.forEach(a=>{var r;return(r=a.hostUpdate)==null?void 0:r.call(a)}),this.update(s)):this._$EM()}catch(a){throw e=!1,this._$EM(),a}e&&this._$AE(s)}willUpdate(e){}_$AE(e){var s;(s=this._$EO)==null||s.forEach(i=>{var a;return(a=i.hostUpdated)==null?void 0:a.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(s=>this._$ET(s,this[s]))),this._$EM()}updated(e){}firstUpdated(e){}};Kt.elementStyles=[],Kt.shadowRootOptions={mode:"open"},Kt[cs("elementProperties")]=new Map,Kt[cs("finalized")]=new Map,gi==null||gi({ReactiveElement:Kt}),(ot.reactiveElementVersions??(ot.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ds=globalThis,fa=t=>t,qs=ds.trustedTypes,ga=qs?qs.createPolicy("lit-html",{createHTML:t=>t}):void 0,sr="$lit$",at=`lit$${Math.random().toFixed(9).slice(2)}$`,ir="?"+at,Jr=`<${ir}>`,Et=document,us=()=>Et.createComment(""),fs=t=>t===null||typeof t!="object"&&typeof t!="function",Ki=Array.isArray,Zr=t=>Ki(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",vi=`[ 	
\f\r]`,is=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,va=/-->/g,ma=/>/g,yt=RegExp(`>|${vi}(?:([^\\s"'>=/]+)(${vi}*=${vi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ba=/'/g,ya=/"/g,ar=/^(?:script|style|textarea|title)$/i,rr=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),c=rr(1),rt=rr(2),We=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),_a=new WeakMap,kt=Et.createTreeWalker(Et,129);function or(t,e){if(!Ki(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return ga!==void 0?ga.createHTML(e):e}const eo=(t,e)=>{const s=t.length-1,i=[];let a,r=e===2?"<svg>":e===3?"<math>":"",o=is;for(let n=0;n<s;n++){const l=t[n];let p,h,u=-1,d=0;for(;d<l.length&&(o.lastIndex=d,h=o.exec(l),h!==null);)d=o.lastIndex,o===is?h[1]==="!--"?o=va:h[1]!==void 0?o=ma:h[2]!==void 0?(ar.test(h[2])&&(a=RegExp("</"+h[2],"g")),o=yt):h[3]!==void 0&&(o=yt):o===yt?h[0]===">"?(o=a??is,u=-1):h[1]===void 0?u=-2:(u=o.lastIndex-h[2].length,p=h[1],o=h[3]===void 0?yt:h[3]==='"'?ya:ba):o===ya||o===ba?o=yt:o===va||o===ma?o=is:(o=yt,a=void 0);const g=o===yt&&t[n+1].startsWith("/>")?" ":"";r+=o===is?l+Jr:u>=0?(i.push(p),l.slice(0,u)+sr+l.slice(u)+at+g):l+at+(u===-2?n:g)}return[or(t,r+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class gs{constructor({strings:e,_$litType$:s},i){let a;this.parts=[];let r=0,o=0;const n=e.length-1,l=this.parts,[p,h]=eo(e,s);if(this.el=gs.createElement(p,i),kt.currentNode=this.el.content,s===2||s===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(a=kt.nextNode())!==null&&l.length<n;){if(a.nodeType===1){if(a.hasAttributes())for(const u of a.getAttributeNames())if(u.endsWith(sr)){const d=h[o++],g=a.getAttribute(u).split(at),b=/([.?@])?(.*)/.exec(d);l.push({type:1,index:r,name:b[2],strings:g,ctor:b[1]==="."?so:b[1]==="?"?io:b[1]==="@"?ao:li}),a.removeAttribute(u)}else u.startsWith(at)&&(l.push({type:6,index:r}),a.removeAttribute(u));if(ar.test(a.tagName)){const u=a.textContent.split(at),d=u.length-1;if(d>0){a.textContent=qs?qs.emptyScript:"";for(let g=0;g<d;g++)a.append(u[g],us()),kt.nextNode(),l.push({type:2,index:++r});a.append(u[d],us())}}}else if(a.nodeType===8)if(a.data===ir)l.push({type:2,index:r});else{let u=-1;for(;(u=a.data.indexOf(at,u+1))!==-1;)l.push({type:7,index:r}),u+=at.length-1}r++}}static createElement(e,s){const i=Et.createElement("template");return i.innerHTML=e,i}}function qt(t,e,s=t,i){var o,n;if(e===We)return e;let a=i!==void 0?(o=s._$Co)==null?void 0:o[i]:s._$Cl;const r=fs(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==r&&((n=a==null?void 0:a._$AO)==null||n.call(a,!1),r===void 0?a=void 0:(a=new r(t),a._$AT(t,s,i)),i!==void 0?(s._$Co??(s._$Co=[]))[i]=a:s._$Cl=a),a!==void 0&&(e=qt(t,a._$AS(t,e.values),a,i)),e}class to{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:s},parts:i}=this._$AD,a=((e==null?void 0:e.creationScope)??Et).importNode(s,!0);kt.currentNode=a;let r=kt.nextNode(),o=0,n=0,l=i[0];for(;l!==void 0;){if(o===l.index){let p;l.type===2?p=new Fs(r,r.nextSibling,this,e):l.type===1?p=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(p=new ro(r,this,e)),this._$AV.push(p),l=i[++n]}o!==(l==null?void 0:l.index)&&(r=kt.nextNode(),o++)}return kt.currentNode=Et,a}p(e){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,s),s+=i.strings.length-2):i._$AI(e[s])),s++}}class Fs{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,s,i,a){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=i,this.options=a,this._$Cv=(a==null?void 0:a.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=qt(this,e,s),fs(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==We&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Zr(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==v&&fs(this._$AH)?this._$AA.nextSibling.data=e:this.T(Et.createTextNode(e)),this._$AH=e}$(e){var r;const{values:s,_$litType$:i}=e,a=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=gs.createElement(or(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===a)this._$AH.p(s);else{const o=new to(a,this),n=o.u(this.options);o.p(s),this.T(n),this._$AH=o}}_$AC(e){let s=_a.get(e.strings);return s===void 0&&_a.set(e.strings,s=new gs(e)),s}k(e){Ki(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,a=0;for(const r of e)a===s.length?s.push(i=new Fs(this.O(us()),this.O(us()),this,this.options)):i=s[a],i._$AI(r),a++;a<s.length&&(this._$AR(i&&i._$AB.nextSibling,a),s.length=a)}_$AR(e=this._$AA.nextSibling,s){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,s);e!==this._$AB;){const a=fa(e).nextSibling;fa(e).remove(),e=a}}setConnected(e){var s;this._$AM===void 0&&(this._$Cv=e,(s=this._$AP)==null||s.call(this,e))}}class li{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,i,a,r){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=s,this._$AM=a,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=v}_$AI(e,s=this,i,a){const r=this.strings;let o=!1;if(r===void 0)e=qt(this,e,s,0),o=!fs(e)||e!==this._$AH&&e!==We,o&&(this._$AH=e);else{const n=e;let l,p;for(e=r[0],l=0;l<r.length-1;l++)p=qt(this,n[i+l],s,l),p===We&&(p=this._$AH[l]),o||(o=!fs(p)||p!==this._$AH[l]),p===v?e=v:e!==v&&(e+=(p??"")+r[l+1]),this._$AH[l]=p}o&&!a&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class so extends li{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}}class io extends li{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}}class ao extends li{constructor(e,s,i,a,r){super(e,s,i,a,r),this.type=5}_$AI(e,s=this){if((e=qt(this,e,s,0)??v)===We)return;const i=this._$AH,a=e===v&&i!==v||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==v&&(i===v||a);a&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,e):this._$AH.handleEvent(e)}}class ro{constructor(e,s,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){qt(this,e)}}const mi=ds.litHtmlPolyfillSupport;mi==null||mi(gs,Fs),(ds.litHtmlVersions??(ds.litHtmlVersions=[])).push("3.3.2");const oo=(t,e,s)=>{const i=(s==null?void 0:s.renderBefore)??e;let a=i._$litPart$;if(a===void 0){const r=(s==null?void 0:s.renderBefore)??null;i._$litPart$=a=new Fs(e.insertBefore(us(),r),r,void 0,s??{})}return a._$AI(t),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ct=globalThis;let O=class extends Kt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const e=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=e.firstChild),e}update(e){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=oo(s,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return We}};var er;O._$litElement$=!0,O.finalized=!0,(er=Ct.litElementHydrateSupport)==null||er.call(Ct,{LitElement:O});const bi=Ct.litElementPolyfillSupport;bi==null||bi({LitElement:O});(Ct.litElementVersions??(Ct.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=t=>(e,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const no={attribute:!0,type:String,converter:Hs,reflect:!1,hasChanged:Ui},lo=(t=no,e,s)=>{const{kind:i,metadata:a}=s;let r=globalThis.litPropertyMetadata.get(a);if(r===void 0&&globalThis.litPropertyMetadata.set(a,r=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),r.set(s.name,t),i==="accessor"){const{name:o}=s;return{set(n){const l=e.get.call(this);e.set.call(this,n),this.requestUpdate(o,l,t,!0,n)},init(n){return n!==void 0&&this.C(o,void 0,t,n),n}}}if(i==="setter"){const{name:o}=s;return function(n){const l=this[o];e.call(this,n),this.requestUpdate(o,l,t,!0,n)}}throw Error("Unsupported decorator location: "+i)};function f(t){return(e,s)=>typeof s=="object"?lo(t,e,s):((i,a,r)=>{const o=a.hasOwnProperty(r);return a.constructor.createProperty(r,i),o?Object.getOwnPropertyDescriptor(a,r):void 0})(t,e,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function w(t){return f({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const co=(t,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(t,e){return(s,i,a)=>{const r=o=>{var n;return((n=o.renderRoot)==null?void 0:n.querySelector(t))??null};return co(s,i,{get(){return r(this)}})}}class po{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}const s=this.state;this.state={...s,...e},this._notifying=!0;try{this.listeners.forEach(i=>i(this.state,s))}finally{this._notifying=!1}if(this._pendingState){const i=this._pendingState;this._pendingState=null,this.setState(i)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function ho(){return new po({t:(t,e,s)=>{const i=(a,r)=>a.replace(/\{\{(\w+)\}\}/g,(o,n)=>String(r[n]??""));if(typeof e=="string")return i(e,s??{});if(typeof e=="object"&&e!==null){const a=e,r=a.count;if(r!==void 0){const o=String((r===1?a.defaultValue_one:a.defaultValue_other)??a.defaultValue??t);return i(o,a)}return i(String(a.defaultValue??t),a)}return t},config:null,projectToken:"",sassKey:"",permissions:null,brandColor:"",isOpen:!1,activeTab:"assets",viewMode:"grid",searchQuery:"",isAISearchActive:!1,sortBy:"modified_at",sortDirection:"desc",previewAsset:null,isPreviewOpen:!1,assets:[],folders:[],folderPreviews:{},labels:[],tags:[],currentFolder:null,currentFolderPath:"/",breadcrumb:[],activeLabelUuid:null,collections:[],activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,offset:0,limit:100,totalCount:0,totalFolderCount:0,isLoading:!1,isSelectingAll:!1,hasMore:!1,filters:{metadata:{pinned:[],visible:[],applied:{}},pinned:[],visible:[],applied:{}},fileTypes:[],metadataFields:[],regionalVariantGroups:[],regionalFilters:{},selectedAssets:new Map,selectedFolders:new Map,disabledAssetIds:new Set,disabledFolderIds:new Set,isResolvingFolders:!1})}const M=t=>typeof t=="string",as=()=>{let t,e;const s=new Promise((i,a)=>{t=i,e=a});return s.resolve=t,s.reject=e,s},xa=t=>t==null?"":""+t,uo=(t,e,s)=>{t.forEach(i=>{e[i]&&(s[i]=e[i])})},fo=/###/g,$a=t=>t&&t.indexOf("###")>-1?t.replace(fo,"."):t,wa=t=>!t||M(t),ps=(t,e,s)=>{const i=M(e)?e.split("."):e;let a=0;for(;a<i.length-1;){if(wa(t))return{};const r=$a(i[a]);!t[r]&&s&&(t[r]=new s),Object.prototype.hasOwnProperty.call(t,r)?t=t[r]:t={},++a}return wa(t)?{}:{obj:t,k:$a(i[a])}},ka=(t,e,s)=>{const{obj:i,k:a}=ps(t,e,Object);if(i!==void 0||e.length===1){i[a]=s;return}let r=e[e.length-1],o=e.slice(0,e.length-1),n=ps(t,o,Object);for(;n.obj===void 0&&o.length;)r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),n=ps(t,o,Object),n&&n.obj&&typeof n.obj[`${n.k}.${r}`]<"u"&&(n.obj=void 0);n.obj[`${n.k}.${r}`]=s},go=(t,e,s,i)=>{const{obj:a,k:r}=ps(t,e,Object);a[r]=a[r]||[],a[r].push(s)},Gs=(t,e)=>{const{obj:s,k:i}=ps(t,e);if(s)return s[i]},vo=(t,e,s)=>{const i=Gs(t,s);return i!==void 0?i:Gs(e,s)},nr=(t,e,s)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in t?M(t[i])||t[i]instanceof String||M(e[i])||e[i]instanceof String?s&&(t[i]=e[i]):nr(t[i],e[i],s):t[i]=e[i]);return t},Nt=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var mo={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const bo=t=>M(t)?t.replace(/[&<>"'\/]/g,e=>mo[e]):t;class yo{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const s=this.regExpMap.get(e);if(s!==void 0)return s;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const _o=[" ",",","?","!",";"],xo=new yo(20),$o=(t,e,s)=>{e=e||"",s=s||"";const i=_o.filter(o=>e.indexOf(o)<0&&s.indexOf(o)<0);if(i.length===0)return!0;const a=xo.getRegExp(`(${i.map(o=>o==="?"?"\\?":o).join("|")})`);let r=!a.test(t);if(!r){const o=t.indexOf(s);o>0&&!a.test(t.substring(0,o))&&(r=!0)}return r},Ti=function(t,e){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return t[e];const i=e.split(s);let a=t;for(let r=0;r<i.length;){if(!a||typeof a!="object")return;let o,n="";for(let l=r;l<i.length;++l)if(l!==r&&(n+=s),n+=i[l],o=a[n],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&l<i.length-1)continue;r+=l-r+1;break}a=o}return a},Qs=t=>t&&t.replace("_","-"),wo={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};class Ws{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,s)}init(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=s.prefix||"i18next:",this.logger=e||wo,this.options=s,this.debug=s.debug}log(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"log","",!0)}warn(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"warn","",!0)}error(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"error","")}deprecate(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"warn","WARNING DEPRECATED: ",!0)}forward(e,s,i,a){return a&&!this.debug?null:(M(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[s](e))}create(e){return new Ws(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Ws(this.logger,e)}}var Ue=new Ws;class ci{constructor(){this.observers={}}on(e,s){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const a=this.observers[i].get(s)||0;this.observers[i].set(s,a+1)}),this}off(e,s){if(this.observers[e]){if(!s){delete this.observers[e];return}this.observers[e].delete(s)}}emit(e){for(var s=arguments.length,i=new Array(s>1?s-1:0),a=1;a<s;a++)i[a-1]=arguments[a];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(o=>{let[n,l]=o;for(let p=0;p<l;p++)n(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[n,l]=o;for(let p=0;p<l;p++)n.apply(n,[e,...i])})}}class Sa extends ci{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=s,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const s=this.options.ns.indexOf(e);s>-1&&this.options.ns.splice(s,1)}getResource(e,s,i){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,o=a.ignoreJSONStructure!==void 0?a.ignoreJSONStructure:this.options.ignoreJSONStructure;let n;e.indexOf(".")>-1?n=e.split("."):(n=[e,s],i&&(Array.isArray(i)?n.push(...i):M(i)&&r?n.push(...i.split(r)):n.push(i)));const l=Gs(this.data,n);return!l&&!s&&!i&&e.indexOf(".")>-1&&(e=n[0],s=n[1],i=n.slice(2).join(".")),l||!o||!M(i)?l:Ti(this.data&&this.data[e]&&this.data[e][s],i,r)}addResource(e,s,i,a){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let n=[e,s];i&&(n=n.concat(o?i.split(o):i)),e.indexOf(".")>-1&&(n=e.split("."),a=s,s=n[1]),this.addNamespaces(s),ka(this.data,n,a),r.silent||this.emit("added",e,s,i,a)}addResources(e,s,i){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const r in i)(M(i[r])||Array.isArray(i[r]))&&this.addResource(e,s,r,i[r],{silent:!0});a.silent||this.emit("added",e,s,i)}addResourceBundle(e,s,i,a,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},n=[e,s];e.indexOf(".")>-1&&(n=e.split("."),a=i,i=s,s=n[1]),this.addNamespaces(s);let l=Gs(this.data,n)||{};o.skipCopy||(i=JSON.parse(JSON.stringify(i))),a?nr(l,i,r):l={...l,...i},ka(this.data,n,l),o.silent||this.emit("added",e,s,i)}removeResourceBundle(e,s){this.hasResourceBundle(e,s)&&delete this.data[e][s],this.removeNamespaces(s),this.emit("removed",e,s)}hasResourceBundle(e,s){return this.getResource(e,s)!==void 0}getResourceBundle(e,s){return s||(s=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,s)}:this.getResource(e,s)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const s=this.getDataByLanguage(e);return!!(s&&Object.keys(s)||[]).find(a=>s[a]&&Object.keys(s[a]).length>0)}toJSON(){return this.data}}var lr={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,s,i,a){return t.forEach(r=>{this.processors[r]&&(e=this.processors[r].process(e,s,i,a))}),e}};const Ca={};class Ys extends ci{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),uo(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=s,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Ue.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,s);return i&&i.res!==void 0}extractFromKey(e,s){let i=s.nsSeparator!==void 0?s.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const a=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator;let r=s.ns||this.options.defaultNS||[];const o=i&&e.indexOf(i)>-1,n=!this.options.userDefinedKeySeparator&&!s.keySeparator&&!this.options.userDefinedNsSeparator&&!s.nsSeparator&&!$o(e,i,a);if(o&&!n){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:M(r)?[r]:r};const p=e.split(i);(i!==a||i===a&&this.options.ns.indexOf(p[0])>-1)&&(r=p.shift()),e=p.join(a)}return{key:e,namespaces:M(r)?[r]:r}}translate(e,s,i){if(typeof s!="object"&&this.options.overloadTranslationOptionHandler&&(s=this.options.overloadTranslationOptionHandler(arguments)),typeof s=="object"&&(s={...s}),s||(s={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const a=s.returnDetails!==void 0?s.returnDetails:this.options.returnDetails,r=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,{key:o,namespaces:n}=this.extractFromKey(e[e.length-1],s),l=n[n.length-1],p=s.lng||this.language,h=s.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(p&&p.toLowerCase()==="cimode"){if(h){const T=s.nsSeparator||this.options.nsSeparator;return a?{res:`${l}${T}${o}`,usedKey:o,exactUsedKey:o,usedLng:p,usedNS:l,usedParams:this.getUsedParamsDetails(s)}:`${l}${T}${o}`}return a?{res:o,usedKey:o,exactUsedKey:o,usedLng:p,usedNS:l,usedParams:this.getUsedParamsDetails(s)}:o}const u=this.resolve(e,s);let d=u&&u.res;const g=u&&u.usedKey||o,b=u&&u.exactUsedKey||o,y=Object.prototype.toString.apply(d),_=["[object Number]","[object Function]","[object RegExp]"],S=s.joinArrays!==void 0?s.joinArrays:this.options.joinArrays,k=!this.i18nFormat||this.i18nFormat.handleAsObject,N=!M(d)&&typeof d!="boolean"&&typeof d!="number";if(k&&d&&N&&_.indexOf(y)<0&&!(M(S)&&Array.isArray(d))){if(!s.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const T=this.options.returnedObjectHandler?this.options.returnedObjectHandler(g,d,{...s,ns:n}):`key '${o} (${this.language})' returned an object instead of string.`;return a?(u.res=T,u.usedParams=this.getUsedParamsDetails(s),u):T}if(r){const T=Array.isArray(d),E=T?[]:{},H=T?b:g;for(const A in d)if(Object.prototype.hasOwnProperty.call(d,A)){const q=`${H}${r}${A}`;E[A]=this.translate(q,{...s,joinArrays:!1,ns:n}),E[A]===q&&(E[A]=d[A])}d=E}}else if(k&&M(S)&&Array.isArray(d))d=d.join(S),d&&(d=this.extendTranslation(d,e,s,i));else{let T=!1,E=!1;const H=s.count!==void 0&&!M(s.count),A=Ys.hasDefaultValue(s),q=H?this.pluralResolver.getSuffix(p,s.count,s):"",z=s.ordinal&&H?this.pluralResolver.getSuffix(p,s.count,{ordinal:!1}):"",F=H&&!s.ordinal&&s.count===0&&this.pluralResolver.shouldUseIntlApi(),ee=F&&s[`defaultValue${this.options.pluralSeparator}zero`]||s[`defaultValue${q}`]||s[`defaultValue${z}`]||s.defaultValue;!this.isValidLookup(d)&&A&&(T=!0,d=ee),this.isValidLookup(d)||(E=!0,d=o);const J=(s.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&E?void 0:d,ie=A&&ee!==d&&this.options.updateMissing;if(E||T||ie){if(this.logger.log(ie?"updateKey":"missingKey",p,l,o,ie?ee:d),r){const D=this.resolve(o,{...s,keySeparator:!1});D&&D.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let m=[];const x=this.languageUtils.getFallbackCodes(this.options.fallbackLng,s.lng||this.language);if(this.options.saveMissingTo==="fallback"&&x&&x[0])for(let D=0;D<x.length;D++)m.push(x[D]);else this.options.saveMissingTo==="all"?m=this.languageUtils.toResolveHierarchy(s.lng||this.language):m.push(s.lng||this.language);const P=(D,B,j)=>{const $e=A&&j!==d?j:J;this.options.missingKeyHandler?this.options.missingKeyHandler(D,l,B,$e,ie,s):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(D,l,B,$e,ie,s),this.emit("missingKey",D,l,B,d)};this.options.saveMissing&&(this.options.saveMissingPlurals&&H?m.forEach(D=>{const B=this.pluralResolver.getSuffixes(D,s);F&&s[`defaultValue${this.options.pluralSeparator}zero`]&&B.indexOf(`${this.options.pluralSeparator}zero`)<0&&B.push(`${this.options.pluralSeparator}zero`),B.forEach(j=>{P([D],o+j,s[`defaultValue${j}`]||ee)})}):P(m,o,ee))}d=this.extendTranslation(d,e,s,u,i),E&&d===o&&this.options.appendNamespaceToMissingKey&&(d=`${l}:${o}`),(E||T)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?d=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${o}`:o,T?d:void 0):d=this.options.parseMissingKeyHandler(d))}return a?(u.res=d,u.usedParams=this.getUsedParamsDetails(s),u):d}extendTranslation(e,s,i,a,r){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||a.usedLng,a.usedNS,a.usedKey,{resolved:a});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const p=M(e)&&(i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let h;if(p){const d=e.match(this.interpolator.nestingRegexp);h=d&&d.length}let u=i.replace&&!M(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(u={...this.options.interpolation.defaultVariables,...u}),e=this.interpolator.interpolate(e,u,i.lng||this.language||a.usedLng,i),p){const d=e.match(this.interpolator.nestingRegexp),g=d&&d.length;h<g&&(i.nest=!1)}!i.lng&&this.options.compatibilityAPI!=="v1"&&a&&a.res&&(i.lng=this.language||a.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var d=arguments.length,g=new Array(d),b=0;b<d;b++)g[b]=arguments[b];return r&&r[0]===g[0]&&!i.context?(o.logger.warn(`It seems you are nesting recursively key: ${g[0]} in key: ${s[0]}`),null):o.translate(...g,s)},i)),i.interpolation&&this.interpolator.reset()}const n=i.postProcess||this.options.postProcess,l=M(n)?[n]:n;return e!=null&&l&&l.length&&i.applyPostProcessor!==!1&&(e=lr.handle(l,e,s,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...a,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,a,r,o,n;return M(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const p=this.extractFromKey(l,s),h=p.key;a=h;let u=p.namespaces;this.options.fallbackNS&&(u=u.concat(this.options.fallbackNS));const d=s.count!==void 0&&!M(s.count),g=d&&!s.ordinal&&s.count===0&&this.pluralResolver.shouldUseIntlApi(),b=s.context!==void 0&&(M(s.context)||typeof s.context=="number")&&s.context!=="",y=s.lngs?s.lngs:this.languageUtils.toResolveHierarchy(s.lng||this.language,s.fallbackLng);u.forEach(_=>{this.isValidLookup(i)||(n=_,!Ca[`${y[0]}-${_}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(n)&&(Ca[`${y[0]}-${_}`]=!0,this.logger.warn(`key "${a}" for languages "${y.join(", ")}" won't get resolved as namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),y.forEach(S=>{if(this.isValidLookup(i))return;o=S;const k=[h];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(k,h,S,_,s);else{let T;d&&(T=this.pluralResolver.getSuffix(S,s.count,s));const E=`${this.options.pluralSeparator}zero`,H=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(d&&(k.push(h+T),s.ordinal&&T.indexOf(H)===0&&k.push(h+T.replace(H,this.options.pluralSeparator)),g&&k.push(h+E)),b){const A=`${h}${this.options.contextSeparator}${s.context}`;k.push(A),d&&(k.push(A+T),s.ordinal&&T.indexOf(H)===0&&k.push(A+T.replace(H,this.options.pluralSeparator)),g&&k.push(A+E))}}let N;for(;N=k.pop();)this.isValidLookup(i)||(r=N,i=this.getResource(S,_,N,s))}))})}),{res:i,usedKey:a,exactUsedKey:r,usedLng:o,usedNS:n}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,s,i){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,s,i,a):this.resourceStore.getResource(e,s,i,a)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const s=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!M(e.replace);let a=i?e.replace:e;if(i&&typeof e.count<"u"&&(a.count=e.count),this.options.interpolation.defaultVariables&&(a={...this.options.interpolation.defaultVariables,...a}),!i){a={...a};for(const r of s)delete a[r]}return a}static hasDefaultValue(e){const s="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&s===i.substring(0,s.length)&&e[i]!==void 0)return!0;return!1}}const yi=t=>t.charAt(0).toUpperCase()+t.slice(1);class Aa{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Ue.create("languageUtils")}getScriptPartFromCode(e){if(e=Qs(e),!e||e.indexOf("-")<0)return null;const s=e.split("-");return s.length===2||(s.pop(),s[s.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(s.join("-"))}getLanguagePartFromCode(e){if(e=Qs(e),!e||e.indexOf("-")<0)return e;const s=e.split("-");return this.formatLanguageCode(s[0])}formatLanguageCode(e){if(M(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let a=Intl.getCanonicalLocales(e)[0];if(a&&this.options.lowerCaseLng&&(a=a.toLowerCase()),a)return a}catch{}const s=["hans","hant","latn","cyrl","cans","mong","arab"];let i=e.split("-");return this.options.lowerCaseLng?i=i.map(a=>a.toLowerCase()):i.length===2?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),s.indexOf(i[1].toLowerCase())>-1&&(i[1]=yi(i[1].toLowerCase()))):i.length===3&&(i[0]=i[0].toLowerCase(),i[1].length===2&&(i[1]=i[1].toUpperCase()),i[0]!=="sgn"&&i[2].length===2&&(i[2]=i[2].toUpperCase()),s.indexOf(i[1].toLowerCase())>-1&&(i[1]=yi(i[1].toLowerCase())),s.indexOf(i[2].toLowerCase())>-1&&(i[2]=yi(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let s;return e.forEach(i=>{if(s)return;const a=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(a))&&(s=a)}),!s&&this.options.supportedLngs&&e.forEach(i=>{if(s)return;const a=this.getLanguagePartFromCode(i);if(this.isSupportedCode(a))return s=a;s=this.options.supportedLngs.find(r=>{if(r===a)return r;if(!(r.indexOf("-")<0&&a.indexOf("-")<0)&&(r.indexOf("-")>0&&a.indexOf("-")<0&&r.substring(0,r.indexOf("-"))===a||r.indexOf(a)===0&&a.length>1))return r})}),s||(s=this.getFallbackCodes(this.options.fallbackLng)[0]),s}getFallbackCodes(e,s){if(!e)return[];if(typeof e=="function"&&(e=e(s)),M(e)&&(e=[e]),Array.isArray(e))return e;if(!s)return e.default||[];let i=e[s];return i||(i=e[this.getScriptPartFromCode(s)]),i||(i=e[this.formatLanguageCode(s)]),i||(i=e[this.getLanguagePartFromCode(s)]),i||(i=e.default),i||[]}toResolveHierarchy(e,s){const i=this.getFallbackCodes(s||this.options.fallbackLng||[],e),a=[],r=o=>{o&&(this.isSupportedCode(o)?a.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return M(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&r(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&r(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&r(this.getLanguagePartFromCode(e))):M(e)&&r(this.formatLanguageCode(e)),i.forEach(o=>{a.indexOf(o)<0&&r(this.formatLanguageCode(o))}),a}}let ko=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],So={1:t=>+(t>1),2:t=>+(t!=1),3:t=>0,4:t=>t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,5:t=>t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5,6:t=>t==1?0:t>=2&&t<=4?1:2,7:t=>t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,8:t=>t==1?0:t==2?1:t!=8&&t!=11?2:3,9:t=>+(t>=2),10:t=>t==1?0:t==2?1:t<7?2:t<11?3:4,11:t=>t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3,12:t=>+(t%10!=1||t%100==11),13:t=>+(t!==0),14:t=>t==1?0:t==2?1:t==3?2:3,15:t=>t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2,16:t=>t%10==1&&t%100!=11?0:t!==0?1:2,17:t=>t==1||t%10==1&&t%100!=11?0:1,18:t=>t==0?0:t==1?1:2,19:t=>t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3,20:t=>t==1?0:t==0||t%100>0&&t%100<20?1:2,21:t=>t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0,22:t=>t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3};const Co=["v1","v2","v3"],Ao=["v4"],Ea={zero:0,one:1,two:2,few:3,many:4,other:5},Eo=()=>{const t={};return ko.forEach(e=>{e.lngs.forEach(s=>{t[s]={numbers:e.nr,plurals:So[e.fc]}})}),t};class Fo{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=s,this.logger=Ue.create("pluralResolver"),(!this.options.compatibilityJSON||Ao.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=Eo(),this.pluralRulesCache={}}addRule(e,s){this.rules[e]=s}clearCache(){this.pluralRulesCache={}}getRule(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const i=Qs(e==="dev"?"en":e),a=s.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:i,type:a});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let o;try{o=new Intl.PluralRules(i,{type:a})}catch{if(!e.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(l,s)}return this.pluralRulesCache[r]=o,o}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,s);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}getPluralFormsOfKey(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(a=>`${s}${a}`)}getSuffixes(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,s);return i?this.shouldUseIntlApi()?i.resolvedOptions().pluralCategories.sort((a,r)=>Ea[a]-Ea[r]).map(a=>`${this.options.prepend}${s.ordinal?`ordinal${this.options.prepend}`:""}${a}`):i.numbers.map(a=>this.getSuffix(e,a,s)):[]}getSuffix(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const a=this.getRule(e,i);return a?this.shouldUseIntlApi()?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${a.select(s)}`:this.getSuffixRetroCompatible(a,s):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,s){const i=e.noAbs?e.plurals(s):e.plurals(Math.abs(s));let a=e.numbers[i];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(a===2?a="plural":a===1&&(a=""));const r=()=>this.options.prepend&&a.toString()?this.options.prepend+a.toString():a.toString();return this.options.compatibilityJSON==="v1"?a===1?"":typeof a=="number"?`_plural_${a.toString()}`:r():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?r():this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}shouldUseIntlApi(){return!Co.includes(this.options.compatibilityJSON)}}const Fa=function(t,e,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,r=vo(t,e,s);return!r&&a&&M(s)&&(r=Ti(t,s,i),r===void 0&&(r=Ti(e,s,i))),r},_i=t=>t.replace(/\$/g,"$$$$");class Oo{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ue.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(s=>s),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:s,escapeValue:i,useRawValueToEscape:a,prefix:r,prefixEscaped:o,suffix:n,suffixEscaped:l,formatSeparator:p,unescapeSuffix:h,unescapePrefix:u,nestingPrefix:d,nestingPrefixEscaped:g,nestingSuffix:b,nestingSuffixEscaped:y,nestingOptionsSeparator:_,maxReplaces:S,alwaysFormat:k}=e.interpolation;this.escape=s!==void 0?s:bo,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=a!==void 0?a:!1,this.prefix=r?Nt(r):o||"{{",this.suffix=n?Nt(n):l||"}}",this.formatSeparator=p||",",this.unescapePrefix=h?"":u||"-",this.unescapeSuffix=this.unescapePrefix?"":h||"",this.nestingPrefix=d?Nt(d):g||Nt("$t("),this.nestingSuffix=b?Nt(b):y||Nt(")"),this.nestingOptionsSeparator=_||",",this.maxReplaces=S||1e3,this.alwaysFormat=k!==void 0?k:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(s,i)=>s&&s.source===i?(s.lastIndex=0,s):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,s,i,a){let r,o,n;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},p=g=>{if(g.indexOf(this.formatSeparator)<0){const S=Fa(s,l,g,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(S,void 0,i,{...a,...s,interpolationkey:g}):S}const b=g.split(this.formatSeparator),y=b.shift().trim(),_=b.join(this.formatSeparator).trim();return this.format(Fa(s,l,y,this.options.keySeparator,this.options.ignoreJSONStructure),_,i,{...a,...s,interpolationkey:y})};this.resetRegExp();const h=a&&a.missingInterpolationHandler||this.options.missingInterpolationHandler,u=a&&a.interpolation&&a.interpolation.skipOnVariables!==void 0?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:g=>_i(g)},{regex:this.regexp,safeValue:g=>this.escapeValue?_i(this.escape(g)):_i(g)}].forEach(g=>{for(n=0;r=g.regex.exec(e);){const b=r[1].trim();if(o=p(b),o===void 0)if(typeof h=="function"){const _=h(e,r,a);o=M(_)?_:""}else if(a&&Object.prototype.hasOwnProperty.call(a,b))o="";else if(u){o=r[0];continue}else this.logger.warn(`missed to pass in variable ${b} for interpolating ${e}`),o="";else!M(o)&&!this.useRawValueToEscape&&(o=xa(o));const y=g.safeValue(o);if(e=e.replace(r[0],y),u?(g.regex.lastIndex+=o.length,g.regex.lastIndex-=r[0].length):g.regex.lastIndex=0,n++,n>=this.maxReplaces)break}}),e}nest(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a,r,o;const n=(l,p)=>{const h=this.nestingOptionsSeparator;if(l.indexOf(h)<0)return l;const u=l.split(new RegExp(`${h}[ ]*{`));let d=`{${u[1]}`;l=u[0],d=this.interpolate(d,o);const g=d.match(/'/g),b=d.match(/"/g);(g&&g.length%2===0&&!b||b.length%2!==0)&&(d=d.replace(/'/g,'"'));try{o=JSON.parse(d),p&&(o={...p,...o})}catch(y){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,y),`${l}${h}${d}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,l};for(;a=this.nestingRegexp.exec(e);){let l=[];o={...i},o=o.replace&&!M(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let p=!1;if(a[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(a[1])){const h=a[1].split(this.formatSeparator).map(u=>u.trim());a[1]=h.shift(),l=h,p=!0}if(r=s(n.call(this,a[1].trim(),o),o),r&&a[0]===e&&!M(r))return r;M(r)||(r=xa(r)),r||(this.logger.warn(`missed to resolve ${a[1]} for nesting ${e}`),r=""),p&&(r=l.reduce((h,u)=>this.format(h,u,i.lng,{...i,interpolationkey:a[1].trim()}),r.trim())),e=e.replace(a[0],r),this.regexp.lastIndex=0}return e}}const To=t=>{let e=t.toLowerCase().trim();const s={};if(t.indexOf("(")>-1){const i=t.split("(");e=i[0].toLowerCase().trim();const a=i[1].substring(0,i[1].length-1);e==="currency"&&a.indexOf(":")<0?s.currency||(s.currency=a.trim()):e==="relativetime"&&a.indexOf(":")<0?s.range||(s.range=a.trim()):a.split(";").forEach(o=>{if(o){const[n,...l]=o.split(":"),p=l.join(":").trim().replace(/^'+|'+$/g,""),h=n.trim();s[h]||(s[h]=p),p==="false"&&(s[h]=!1),p==="true"&&(s[h]=!0),isNaN(p)||(s[h]=parseInt(p,10))}})}return{formatName:e,formatOptions:s}},jt=t=>{const e={};return(s,i,a)=>{let r=a;a&&a.interpolationkey&&a.formatParams&&a.formatParams[a.interpolationkey]&&a[a.interpolationkey]&&(r={...r,[a.interpolationkey]:void 0});const o=i+JSON.stringify(r);let n=e[o];return n||(n=t(Qs(i),a),e[o]=n),n(s)}};class Po{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ue.create("formatter"),this.options=e,this.formats={number:jt((s,i)=>{const a=new Intl.NumberFormat(s,{...i});return r=>a.format(r)}),currency:jt((s,i)=>{const a=new Intl.NumberFormat(s,{...i,style:"currency"});return r=>a.format(r)}),datetime:jt((s,i)=>{const a=new Intl.DateTimeFormat(s,{...i});return r=>a.format(r)}),relativetime:jt((s,i)=>{const a=new Intl.RelativeTimeFormat(s,{...i});return r=>a.format(r,i.range||"day")}),list:jt((s,i)=>{const a=new Intl.ListFormat(s,{...i});return r=>a.format(r)})},this.init(e)}init(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=s.interpolation.formatSeparator||","}add(e,s){this.formats[e.toLowerCase().trim()]=s}addCached(e,s){this.formats[e.toLowerCase().trim()]=jt(s)}format(e,s,i){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=s.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&r[0].indexOf(")")<0&&r.find(n=>n.indexOf(")")>-1)){const n=r.findIndex(l=>l.indexOf(")")>-1);r[0]=[r[0],...r.splice(1,n)].join(this.formatSeparator)}return r.reduce((n,l)=>{const{formatName:p,formatOptions:h}=To(l);if(this.formats[p]){let u=n;try{const d=a&&a.formatParams&&a.formatParams[a.interpolationkey]||{},g=d.locale||d.lng||a.locale||a.lng||i;u=this.formats[p](n,g,{...h,...a,...d})}catch(d){this.logger.warn(d)}return u}else this.logger.warn(`there was no format function for ${p}`);return n},e)}}const Lo=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class Io extends ci{constructor(e,s,i){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=s,this.services=i,this.languageUtils=i.languageUtils,this.options=a,this.logger=Ue.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=a.maxParallelReads||10,this.readingCalls=0,this.maxRetries=a.maxRetries>=0?a.maxRetries:5,this.retryTimeout=a.retryTimeout>=1?a.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(i,a.backend,a)}queueLoad(e,s,i,a){const r={},o={},n={},l={};return e.forEach(p=>{let h=!0;s.forEach(u=>{const d=`${p}|${u}`;!i.reload&&this.store.hasResourceBundle(p,u)?this.state[d]=2:this.state[d]<0||(this.state[d]===1?o[d]===void 0&&(o[d]=!0):(this.state[d]=1,h=!1,o[d]===void 0&&(o[d]=!0),r[d]===void 0&&(r[d]=!0),l[u]===void 0&&(l[u]=!0)))}),h||(n[p]=!0)}),(Object.keys(r).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:a}),{toLoad:Object.keys(r),pending:Object.keys(o),toLoadLanguages:Object.keys(n),toLoadNamespaces:Object.keys(l)}}loaded(e,s,i){const a=e.split("|"),r=a[0],o=a[1];s&&this.emit("failedLoading",r,o,s),!s&&i&&this.store.addResourceBundle(r,o,i,void 0,void 0,{skipCopy:!0}),this.state[e]=s?-1:2,s&&i&&(this.state[e]=0);const n={};this.queue.forEach(l=>{go(l.loaded,[r],o),Lo(l,e),s&&l.errors.push(s),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(p=>{n[p]||(n[p]={});const h=l.loaded[p];h.length&&h.forEach(u=>{n[p][u]===void 0&&(n[p][u]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",n),this.queue=this.queue.filter(l=>!l.done)}read(e,s,i){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:s,fcName:i,tried:a,wait:r,callback:o});return}this.readingCalls++;const n=(p,h)=>{if(this.readingCalls--,this.waitingReads.length>0){const u=this.waitingReads.shift();this.read(u.lng,u.ns,u.fcName,u.tried,u.wait,u.callback)}if(p&&h&&a<this.maxRetries){setTimeout(()=>{this.read.call(this,e,s,i,a+1,r*2,o)},r);return}o(p,h)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const p=l(e,s);p&&typeof p.then=="function"?p.then(h=>n(null,h)).catch(n):n(null,p)}catch(p){n(p)}return}return l(e,s,n)}prepareLoading(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),a&&a();M(e)&&(e=this.languageUtils.toResolveHierarchy(e)),M(s)&&(s=[s]);const r=this.queueLoad(e,s,i,a);if(!r.toLoad.length)return r.pending.length||a(),null;r.toLoad.forEach(o=>{this.loadOne(o)})}load(e,s,i){this.prepareLoading(e,s,{},i)}reload(e,s,i){this.prepareLoading(e,s,{reload:!0},i)}loadOne(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),a=i[0],r=i[1];this.read(a,r,"read",void 0,void 0,(o,n)=>{o&&this.logger.warn(`${s}loading namespace ${r} for language ${a} failed`,o),!o&&n&&this.logger.log(`${s}loaded namespace ${r} for language ${a}`,n),this.loaded(e,o,n)})}saveMissing(e,s,i,a,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},n=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(s)){this.logger.warn(`did not save key "${i}" as the namespace "${s}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if(this.backend&&this.backend.create){const l={...o,isUpdate:r},p=this.backend.create.bind(this.backend);if(p.length<6)try{let h;p.length===5?h=p(e,s,i,a,l):h=p(e,s,i,a),h&&typeof h.then=="function"?h.then(u=>n(null,u)).catch(n):n(null,h)}catch(h){n(h)}else p(e,s,i,a,n,l)}!e||!e[0]||this.store.addResource(e[0],s,i,a)}}}const Oa=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),M(t[1])&&(e.defaultValue=t[1]),M(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const s=t[3]||t[2];Object.keys(s).forEach(i=>{e[i]=s[i]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Ta=t=>(M(t.ns)&&(t.ns=[t.ns]),M(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),M(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),Ms=()=>{},Mo=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(s=>{typeof t[s]=="function"&&(t[s]=t[s].bind(t))})};class vs extends ci{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Ta(e),this.services={},this.logger=Ue,this.modules={external:[]},Mo(this),s&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,s),this;setTimeout(()=>{this.init(e,s)},0)}}init(){var e=this;let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof s=="function"&&(i=s,s={}),!s.defaultNS&&s.defaultNS!==!1&&s.ns&&(M(s.ns)?s.defaultNS=s.ns:s.ns.indexOf("translation")<0&&(s.defaultNS=s.ns[0]));const a=Oa();this.options={...a,...this.options,...Ta(s)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...a.interpolation,...this.options.interpolation}),s.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=s.keySeparator),s.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=s.nsSeparator);const r=h=>h?typeof h=="function"?new h:h:null;if(!this.options.isClone){this.modules.logger?Ue.init(r(this.modules.logger),this.options):Ue.init(null,this.options);let h;this.modules.formatter?h=this.modules.formatter:typeof Intl<"u"&&(h=Po);const u=new Aa(this.options);this.store=new Sa(this.options.resources,this.options);const d=this.services;d.logger=Ue,d.resourceStore=this.store,d.languageUtils=u,d.pluralResolver=new Fo(u,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),h&&(!this.options.interpolation.format||this.options.interpolation.format===a.interpolation.format)&&(d.formatter=r(h),d.formatter.init(d,this.options),this.options.interpolation.format=d.formatter.format.bind(d.formatter)),d.interpolator=new Oo(this.options),d.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},d.backendConnector=new Io(r(this.modules.backend),d.resourceStore,d,this.options),d.backendConnector.on("*",function(g){for(var b=arguments.length,y=new Array(b>1?b-1:0),_=1;_<b;_++)y[_-1]=arguments[_];e.emit(g,...y)}),this.modules.languageDetector&&(d.languageDetector=r(this.modules.languageDetector),d.languageDetector.init&&d.languageDetector.init(d,this.options.detection,this.options)),this.modules.i18nFormat&&(d.i18nFormat=r(this.modules.i18nFormat),d.i18nFormat.init&&d.i18nFormat.init(this)),this.translator=new Ys(this.services,this.options),this.translator.on("*",function(g){for(var b=arguments.length,y=new Array(b>1?b-1:0),_=1;_<b;_++)y[_-1]=arguments[_];e.emit(g,...y)}),this.modules.external.forEach(g=>{g.init&&g.init(this)})}if(this.format=this.options.interpolation.format,i||(i=Ms),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const h=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);h.length>0&&h[0]!=="dev"&&(this.options.lng=h[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(h=>{this[h]=function(){return e.store[h](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(h=>{this[h]=function(){return e.store[h](...arguments),e}});const l=as(),p=()=>{const h=(u,d)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(d),i(u,d)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return h(null,this.t.bind(this));this.changeLanguage(this.options.lng,h)};return this.options.resources||!this.options.initImmediate?p():setTimeout(p,0),l}loadResources(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ms;const a=M(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if(a&&a.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const r=[],o=n=>{if(!n||n==="cimode")return;this.services.languageUtils.toResolveHierarchy(n).forEach(p=>{p!=="cimode"&&r.indexOf(p)<0&&r.push(p)})};a?o(a):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>o(l)),this.options.preload&&this.options.preload.forEach(n=>o(n)),this.services.backendConnector.load(r,this.options.ns,n=>{!n&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(n)})}else i(null)}reloadResources(e,s,i){const a=as();return typeof e=="function"&&(i=e,e=void 0),typeof s=="function"&&(i=s,s=void 0),e||(e=this.languages),s||(s=this.options.ns),i||(i=Ms),this.services.backendConnector.reload(e,s,r=>{a.resolve(),i(r)}),a}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&lr.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let s=0;s<this.languages.length;s++){const i=this.languages[s];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,s){var i=this;this.isLanguageChangingTo=e;const a=as();this.emit("languageChanging",e);const r=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},o=(l,p)=>{p?(r(p),this.translator.changeLanguage(p),this.isLanguageChangingTo=void 0,this.emit("languageChanged",p),this.logger.log("languageChanged",p)):this.isLanguageChangingTo=void 0,a.resolve(function(){return i.t(...arguments)}),s&&s(l,function(){return i.t(...arguments)})},n=l=>{!e&&!l&&this.services.languageDetector&&(l=[]);const p=M(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);p&&(this.language||r(p),this.translator.language||this.translator.changeLanguage(p),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(p)),this.loadResources(p,h=>{o(h,p)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?n(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(n):this.services.languageDetector.detect(n):n(e),a}getFixedT(e,s,i){var a=this;const r=function(o,n){let l;if(typeof n!="object"){for(var p=arguments.length,h=new Array(p>2?p-2:0),u=2;u<p;u++)h[u-2]=arguments[u];l=a.options.overloadTranslationOptionHandler([o,n].concat(h))}else l={...n};l.lng=l.lng||r.lng,l.lngs=l.lngs||r.lngs,l.ns=l.ns||r.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||r.keyPrefix);const d=a.options.keySeparator||".";let g;return l.keyPrefix&&Array.isArray(o)?g=o.map(b=>`${l.keyPrefix}${d}${b}`):g=l.keyPrefix?`${l.keyPrefix}${d}${o}`:o,a.t(g,l)};return M(e)?r.lng=e:r.lngs=e,r.ns=s,r.keyPrefix=i,r}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=s.lng||this.resolvedLanguage||this.languages[0],a=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const o=(n,l)=>{const p=this.services.backendConnector.state[`${n}|${l}`];return p===-1||p===0||p===2};if(s.precheck){const n=s.precheck(this,o);if(n!==void 0)return n}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(i,e)&&(!a||o(r,e)))}loadNamespaces(e,s){const i=as();return this.options.ns?(M(e)&&(e=[e]),e.forEach(a=>{this.options.ns.indexOf(a)<0&&this.options.ns.push(a)}),this.loadResources(a=>{i.resolve(),s&&s(a)}),i):(s&&s(),Promise.resolve())}loadLanguages(e,s){const i=as();M(e)&&(e=[e]);const a=this.options.preload||[],r=e.filter(o=>a.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return r.length?(this.options.preload=a.concat(r),this.loadResources(o=>{i.resolve(),s&&s(o)}),i):(s&&s(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const s=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=this.services&&this.services.languageUtils||new Aa(Oa());return s.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;return new vs(e,s)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ms;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const a={...this.options,...e,isClone:!0},r=new vs(a);return(e.debug!==void 0||e.prefix!==void 0)&&(r.logger=r.logger.clone(e)),["store","services","language"].forEach(n=>{r[n]=this[n]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},i&&(r.store=new Sa(this.store.data,a),r.services.resourceStore=r.store),r.translator=new Ys(r.services,a),r.translator.on("*",function(n){for(var l=arguments.length,p=new Array(l>1?l-1:0),h=1;h<l;h++)p[h-1]=arguments[h];r.emit(n,...p)}),r.init(a,s),r.translator.options=a,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const pe=vs.createInstance();pe.createInstance=vs.createInstance;pe.createInstance;pe.dir;pe.init;pe.loadResources;pe.reloadResources;pe.use;pe.changeLanguage;pe.getFixedT;pe.t;pe.exists;pe.setDefaultNamespace;pe.hasLoadedNamespace;pe.loadNamespaces;pe.loadLanguages;function Pi(t){"@babel/helpers - typeof";return Pi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pi(t)}function cr(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":Pi(XMLHttpRequest))==="object"}function Do(t){return!!t&&typeof t.then=="function"}function Ro(t){return Do(t)?t:Promise.resolve(t)}var hs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zo(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function No(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ds={exports:{}},Rs={exports:{}},Pa;function jo(){return Pa||(Pa=1,(function(t,e){var s=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof hs<"u"&&hs,i=(function(){function r(){this.fetch=!1,this.DOMException=s.DOMException}return r.prototype=s,new r})();(function(r){(function(o){var n=typeof r<"u"&&r||typeof self<"u"&&self||typeof n<"u"&&n,l={searchParams:"URLSearchParams"in n,iterable:"Symbol"in n&&"iterator"in Symbol,blob:"FileReader"in n&&"Blob"in n&&(function(){try{return new Blob,!0}catch{return!1}})(),formData:"FormData"in n,arrayBuffer:"ArrayBuffer"in n};function p(m){return m&&DataView.prototype.isPrototypeOf(m)}if(l.arrayBuffer)var h=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],u=ArrayBuffer.isView||function(m){return m&&h.indexOf(Object.prototype.toString.call(m))>-1};function d(m){if(typeof m!="string"&&(m=String(m)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(m)||m==="")throw new TypeError('Invalid character in header field name: "'+m+'"');return m.toLowerCase()}function g(m){return typeof m!="string"&&(m=String(m)),m}function b(m){var x={next:function(){var P=m.shift();return{done:P===void 0,value:P}}};return l.iterable&&(x[Symbol.iterator]=function(){return x}),x}function y(m){this.map={},m instanceof y?m.forEach(function(x,P){this.append(P,x)},this):Array.isArray(m)?m.forEach(function(x){this.append(x[0],x[1])},this):m&&Object.getOwnPropertyNames(m).forEach(function(x){this.append(x,m[x])},this)}y.prototype.append=function(m,x){m=d(m),x=g(x);var P=this.map[m];this.map[m]=P?P+", "+x:x},y.prototype.delete=function(m){delete this.map[d(m)]},y.prototype.get=function(m){return m=d(m),this.has(m)?this.map[m]:null},y.prototype.has=function(m){return this.map.hasOwnProperty(d(m))},y.prototype.set=function(m,x){this.map[d(m)]=g(x)},y.prototype.forEach=function(m,x){for(var P in this.map)this.map.hasOwnProperty(P)&&m.call(x,this.map[P],P,this)},y.prototype.keys=function(){var m=[];return this.forEach(function(x,P){m.push(P)}),b(m)},y.prototype.values=function(){var m=[];return this.forEach(function(x){m.push(x)}),b(m)},y.prototype.entries=function(){var m=[];return this.forEach(function(x,P){m.push([P,x])}),b(m)},l.iterable&&(y.prototype[Symbol.iterator]=y.prototype.entries);function _(m){if(m.bodyUsed)return Promise.reject(new TypeError("Already read"));m.bodyUsed=!0}function S(m){return new Promise(function(x,P){m.onload=function(){x(m.result)},m.onerror=function(){P(m.error)}})}function k(m){var x=new FileReader,P=S(x);return x.readAsArrayBuffer(m),P}function N(m){var x=new FileReader,P=S(x);return x.readAsText(m),P}function T(m){for(var x=new Uint8Array(m),P=new Array(x.length),D=0;D<x.length;D++)P[D]=String.fromCharCode(x[D]);return P.join("")}function E(m){if(m.slice)return m.slice(0);var x=new Uint8Array(m.byteLength);return x.set(new Uint8Array(m)),x.buffer}function H(){return this.bodyUsed=!1,this._initBody=function(m){this.bodyUsed=this.bodyUsed,this._bodyInit=m,m?typeof m=="string"?this._bodyText=m:l.blob&&Blob.prototype.isPrototypeOf(m)?this._bodyBlob=m:l.formData&&FormData.prototype.isPrototypeOf(m)?this._bodyFormData=m:l.searchParams&&URLSearchParams.prototype.isPrototypeOf(m)?this._bodyText=m.toString():l.arrayBuffer&&l.blob&&p(m)?(this._bodyArrayBuffer=E(m.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):l.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(m)||u(m))?this._bodyArrayBuffer=E(m):this._bodyText=m=Object.prototype.toString.call(m):this._bodyText="",this.headers.get("content-type")||(typeof m=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):l.searchParams&&URLSearchParams.prototype.isPrototypeOf(m)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},l.blob&&(this.blob=function(){var m=_(this);if(m)return m;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var m=_(this);return m||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else return this.blob().then(k)}),this.text=function(){var m=_(this);if(m)return m;if(this._bodyBlob)return N(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(T(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},l.formData&&(this.formData=function(){return this.text().then(F)}),this.json=function(){return this.text().then(JSON.parse)},this}var A=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function q(m){var x=m.toUpperCase();return A.indexOf(x)>-1?x:m}function z(m,x){if(!(this instanceof z))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');x=x||{};var P=x.body;if(m instanceof z){if(m.bodyUsed)throw new TypeError("Already read");this.url=m.url,this.credentials=m.credentials,x.headers||(this.headers=new y(m.headers)),this.method=m.method,this.mode=m.mode,this.signal=m.signal,!P&&m._bodyInit!=null&&(P=m._bodyInit,m.bodyUsed=!0)}else this.url=String(m);if(this.credentials=x.credentials||this.credentials||"same-origin",(x.headers||!this.headers)&&(this.headers=new y(x.headers)),this.method=q(x.method||this.method||"GET"),this.mode=x.mode||this.mode||null,this.signal=x.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&P)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(P),(this.method==="GET"||this.method==="HEAD")&&(x.cache==="no-store"||x.cache==="no-cache")){var D=/([?&])_=[^&]*/;if(D.test(this.url))this.url=this.url.replace(D,"$1_="+new Date().getTime());else{var B=/\?/;this.url+=(B.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}z.prototype.clone=function(){return new z(this,{body:this._bodyInit})};function F(m){var x=new FormData;return m.trim().split("&").forEach(function(P){if(P){var D=P.split("="),B=D.shift().replace(/\+/g," "),j=D.join("=").replace(/\+/g," ");x.append(decodeURIComponent(B),decodeURIComponent(j))}}),x}function ee(m){var x=new y,P=m.replace(/\r?\n[\t ]+/g," ");return P.split("\r").map(function(D){return D.indexOf(`
`)===0?D.substr(1,D.length):D}).forEach(function(D){var B=D.split(":"),j=B.shift().trim();if(j){var $e=B.join(":").trim();x.append(j,$e)}}),x}H.call(z.prototype);function Y(m,x){if(!(this instanceof Y))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');x||(x={}),this.type="default",this.status=x.status===void 0?200:x.status,this.ok=this.status>=200&&this.status<300,this.statusText=x.statusText===void 0?"":""+x.statusText,this.headers=new y(x.headers),this.url=x.url||"",this._initBody(m)}H.call(Y.prototype),Y.prototype.clone=function(){return new Y(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new y(this.headers),url:this.url})},Y.error=function(){var m=new Y(null,{status:0,statusText:""});return m.type="error",m};var J=[301,302,303,307,308];Y.redirect=function(m,x){if(J.indexOf(x)===-1)throw new RangeError("Invalid status code");return new Y(null,{status:x,headers:{location:m}})},o.DOMException=n.DOMException;try{new o.DOMException}catch{o.DOMException=function(x,P){this.message=x,this.name=P;var D=Error(x);this.stack=D.stack},o.DOMException.prototype=Object.create(Error.prototype),o.DOMException.prototype.constructor=o.DOMException}function ie(m,x){return new Promise(function(P,D){var B=new z(m,x);if(B.signal&&B.signal.aborted)return D(new o.DOMException("Aborted","AbortError"));var j=new XMLHttpRequest;function $e(){j.abort()}j.onload=function(){var ae={status:j.status,statusText:j.statusText,headers:ee(j.getAllResponseHeaders()||"")};ae.url="responseURL"in j?j.responseURL:ae.headers.get("X-Request-URL");var je="response"in j?j.response:j.responseText;setTimeout(function(){P(new Y(je,ae))},0)},j.onerror=function(){setTimeout(function(){D(new TypeError("Network request failed"))},0)},j.ontimeout=function(){setTimeout(function(){D(new TypeError("Network request failed"))},0)},j.onabort=function(){setTimeout(function(){D(new o.DOMException("Aborted","AbortError"))},0)};function bt(ae){try{return ae===""&&n.location.href?n.location.href:ae}catch{return ae}}j.open(B.method,bt(B.url),!0),B.credentials==="include"?j.withCredentials=!0:B.credentials==="omit"&&(j.withCredentials=!1),"responseType"in j&&(l.blob?j.responseType="blob":l.arrayBuffer&&B.headers.get("Content-Type")&&B.headers.get("Content-Type").indexOf("application/octet-stream")!==-1&&(j.responseType="arraybuffer")),x&&typeof x.headers=="object"&&!(x.headers instanceof y)?Object.getOwnPropertyNames(x.headers).forEach(function(ae){j.setRequestHeader(ae,g(x.headers[ae]))}):B.headers.forEach(function(ae,je){j.setRequestHeader(je,ae)}),B.signal&&(B.signal.addEventListener("abort",$e),j.onreadystatechange=function(){j.readyState===4&&B.signal.removeEventListener("abort",$e)}),j.send(typeof B._bodyInit>"u"?null:B._bodyInit)})}return ie.polyfill=!0,n.fetch||(n.fetch=ie,n.Headers=y,n.Request=z,n.Response=Y),o.Headers=y,o.Request=z,o.Response=Y,o.fetch=ie,o})({})})(i),i.fetch.ponyfill=!0,delete i.fetch.polyfill;var a=s.fetch?s:i;e=a.fetch,e.default=a.fetch,e.fetch=a.fetch,e.Headers=a.Headers,e.Request=a.Request,e.Response=a.Response,t.exports=e})(Rs,Rs.exports)),Rs.exports}var La;function Uo(){return La||(La=1,(function(t,e){var s=typeof fetch=="function"?fetch:void 0;if(typeof hs<"u"&&hs.fetch?s=hs.fetch:typeof window<"u"&&window.fetch&&(s=window.fetch),typeof No<"u"&&typeof window>"u"){var i=s||jo();i.default&&(i=i.default),e.default=i,t.exports=e.default}})(Ds,Ds.exports)),Ds.exports}var dr=Uo();const pr=zo(dr),Ia=jr({__proto__:null,default:pr},[dr]);function Ma(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),s.push.apply(s,i)}return s}function Da(t){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?Ma(Object(s),!0).forEach(function(i){Ko(t,i,s[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):Ma(Object(s)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(s,i))})}return t}function Ko(t,e,s){return(e=Bo(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function Bo(t){var e=Vo(t,"string");return Ft(e)=="symbol"?e:e+""}function Vo(t,e){if(Ft(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var i=s.call(t,e);if(Ft(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ft(t){"@babel/helpers - typeof";return Ft=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ft(t)}var nt=typeof fetch=="function"?fetch:void 0;typeof global<"u"&&global.fetch?nt=global.fetch:typeof window<"u"&&window.fetch&&(nt=window.fetch);var ms;cr()&&(typeof global<"u"&&global.XMLHttpRequest?ms=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(ms=window.XMLHttpRequest));var Xs;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?Xs=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(Xs=window.ActiveXObject));!nt&&Ia&&!ms&&!Xs&&(nt=pr||Ia);typeof nt!="function"&&(nt=void 0);var Li=function(e,s){if(s&&Ft(s)==="object"){var i="";for(var a in s)i+="&"+encodeURIComponent(a)+"="+encodeURIComponent(s[a]);if(!i)return e;e=e+(e.indexOf("?")!==-1?"&":"?")+i.slice(1)}return e},Ra=function(e,s,i,a){var r=function(l){if(!l.ok)return i(l.statusText||"Error",{status:l.status});l.text().then(function(p){i(null,{status:l.status,data:p})}).catch(i)};if(a){var o=a(e,s);if(o instanceof Promise){o.then(r).catch(i);return}}typeof fetch=="function"?fetch(e,s).then(r).catch(i):nt(e,s).then(r).catch(i)},za=!1,Ho=function(e,s,i,a){e.queryStringParams&&(s=Li(s,e.queryStringParams));var r=Da({},typeof e.customHeaders=="function"?e.customHeaders():e.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(r["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),i&&(r["Content-Type"]="application/json");var o=typeof e.requestOptions=="function"?e.requestOptions(i):e.requestOptions,n=Da({method:i?"POST":"GET",body:i?e.stringify(i):void 0,headers:r},za?{}:o),l=typeof e.alternateFetch=="function"&&e.alternateFetch.length>=1?e.alternateFetch:void 0;try{Ra(s,n,a,l)}catch(p){if(!o||Object.keys(o).length===0||!p.message||p.message.indexOf("not implemented")<0)return a(p);try{Object.keys(o).forEach(function(h){delete n[h]}),Ra(s,n,a,l),za=!0}catch(h){a(h)}}},qo=function(e,s,i,a){i&&Ft(i)==="object"&&(i=Li("",i).slice(1)),e.queryStringParams&&(s=Li(s,e.queryStringParams));try{var r;ms?r=new ms:r=new Xs("MSXML2.XMLHTTP.3.0"),r.open(i?"POST":"GET",s,1),e.crossDomain||r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.withCredentials=!!e.withCredentials,i&&r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.overrideMimeType&&r.overrideMimeType("application/json");var o=e.customHeaders;if(o=typeof o=="function"?o():o,o)for(var n in o)r.setRequestHeader(n,o[n]);r.onreadystatechange=function(){r.readyState>3&&a(r.status>=400?r.statusText:null,{status:r.status,data:r.responseText})},r.send(i)}catch(l){console&&console.log(l)}},Go=function(e,s,i,a){if(typeof i=="function"&&(a=i,i=void 0),a=a||function(){},nt&&s.indexOf("file:")!==0)return Ho(e,s,i,a);if(cr()||typeof ActiveXObject=="function")return qo(e,s,i,a);a(new Error("No fetch and no xhr implementation found!"))};function Gt(t){"@babel/helpers - typeof";return Gt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gt(t)}function Na(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),s.push.apply(s,i)}return s}function xi(t){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?Na(Object(s),!0).forEach(function(i){hr(t,i,s[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):Na(Object(s)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(s,i))})}return t}function Qo(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Wo(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,ur(i.key),i)}}function Yo(t,e,s){return e&&Wo(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function hr(t,e,s){return(e=ur(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function ur(t){var e=Xo(t,"string");return Gt(e)=="symbol"?e:e+""}function Xo(t,e){if(Gt(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var i=s.call(t,e);if(Gt(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var Jo=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(s){return JSON.parse(s)},stringify:JSON.stringify,parsePayload:function(s,i,a){return hr({},i,a||"")},parseLoadPayload:function(s,i){},request:Go,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},fr=(function(){function t(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};Qo(this,t),this.services=e,this.options=s,this.allOptions=i,this.type="backend",this.init(e,s,i)}return Yo(t,[{key:"init",value:function(s){var i=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.services=s,this.options=xi(xi(xi({},Jo()),this.options||{}),a),this.allOptions=r,this.services&&this.options.reloadInterval){var o=setInterval(function(){return i.reload()},this.options.reloadInterval);Gt(o)==="object"&&typeof o.unref=="function"&&o.unref()}}},{key:"readMulti",value:function(s,i,a){this._readAny(s,s,i,i,a)}},{key:"read",value:function(s,i,a){this._readAny([s],s,[i],i,a)}},{key:"_readAny",value:function(s,i,a,r,o){var n=this,l=this.options.loadPath;typeof this.options.loadPath=="function"&&(l=this.options.loadPath(s,a)),l=Ro(l),l.then(function(p){if(!p)return o(null,{});var h=n.services.interpolator.interpolate(p,{lng:s.join("+"),ns:a.join("+")});n.loadUrl(h,o,i,r)})}},{key:"loadUrl",value:function(s,i,a,r){var o=this,n=typeof a=="string"?[a]:a,l=typeof r=="string"?[r]:r,p=this.options.parseLoadPayload(n,l);this.options.request(this.options,s,p,function(h,u){if(u&&(u.status>=500&&u.status<600||!u.status))return i("failed loading "+s+"; status code: "+u.status,!0);if(u&&u.status>=400&&u.status<500)return i("failed loading "+s+"; status code: "+u.status,!1);if(!u&&h&&h.message){var d=h.message.toLowerCase(),g=["failed","fetch","network","load"].find(function(_){return d.indexOf(_)>-1});if(g)return i("failed loading "+s+": "+h.message,!0)}if(h)return i(h,!1);var b,y;try{typeof u.data=="string"?b=o.options.parse(u.data,a,r):b=u.data}catch{y="failed parsing "+s+" to json"}if(y)return i(y,!1);i(null,b)})}},{key:"create",value:function(s,i,a,r,o){var n=this;if(this.options.addPath){typeof s=="string"&&(s=[s]);var l=this.options.parsePayload(i,a,r),p=0,h=[],u=[];s.forEach(function(d){var g=n.options.addPath;typeof n.options.addPath=="function"&&(g=n.options.addPath(d,i));var b=n.services.interpolator.interpolate(g,{lng:d,ns:i});n.options.request(n.options,b,l,function(y,_){p+=1,h.push(y),u.push(_),p===s.length&&typeof o=="function"&&o(h,u)})})}}},{key:"reload",value:function(){var s=this,i=this.services,a=i.backendConnector,r=i.languageUtils,o=i.logger,n=a.language;if(!(n&&n.toLowerCase()==="cimode")){var l=[],p=function(u){var d=r.toResolveHierarchy(u);d.forEach(function(g){l.indexOf(g)<0&&l.push(g)})};p(n),this.allOptions.preload&&this.allOptions.preload.forEach(function(h){return p(h)}),l.forEach(function(h){s.allOptions.ns.forEach(function(u){a.read(h,u,"read",null,null,function(d,g){d&&o.warn("loading namespace ".concat(u," for language ").concat(h," failed"),d),!d&&g&&o.log("loaded namespace ".concat(u," for language ").concat(h),g),a.loaded("".concat(h,"|").concat(u),d,g)})})})}}}])})();fr.type="backend";const gr="a656ff82-0270-46dc-8de8-c734318d841d",Zo="https://i18n-fastly.ultrafast.io",en="https://neo.wordplex.io",Ii="asset-picker";let _t=null;async function tn(t="en"){return _t?(_t.language!==t&&await _t.changeLanguage(t),{i18n:_t,isNew:!1}):(_t=pe.createInstance(),await _t.use(fr).init({lng:t,fallbackLng:"en",ns:[Ii],defaultNS:Ii,saveMissing:!0,missingKeyNoValueFallbackToKey:!1,backend:{loadPath:`${Zo}/api/export/grid/f2/${gr}?langs={{lng}}&separator=+&response_format=i18next_multi`,parse(e,s){var r;const i=JSON.parse(e),a=Array.isArray(s)?s[0]:s;return a&&((r=i[a])!=null&&r.__without_namespace)?i[a].__without_namespace:i}}}),{i18n:_t,isNew:!0})}const sn="apTranslationsMissingKeysEnabled";class an{constructor(){this.enabled=!1,this._missingKeys={},this._timer=null,this.debounceDelay=2e3,this.enabled=typeof localStorage<"u"&&localStorage.getItem(sn)==="true",this.enabled&&console.log("%c[asset-picker] TranslationMissingKeysHelper enabled","font-weight:600;"),this._missingKeys=new Proxy(this._missingKeys,{set:(e,s,i,a)=>(this._timer&&clearTimeout(this._timer),this._timer=setTimeout(()=>this._renderCurl(),this.debounceDelay),Reflect.set(e,s,i,a))})}handleMissingKey(e,s="",i=Ii){if(!this.enabled)return;const a=`${i}:${e}`;this._missingKeys[a]={value:s,ns:i}}_renderCurl(){console.group("[asset-picker] Missing translation keys"),console.log("%cMissing keys:","font-weight:600;font-size:200%;"),console.table({...this._missingKeys}),console.log("%ccURL (check carefully data before send):","font-weight:600;font-size:150%;"),console.log(`
curl '${en}/api/import/request-translations' \\
  --data-raw '{"grid_uuid":"${gr}","translations_requests":${JSON.stringify(Object.entries(this._missingKeys).map(([e,{value:s,ns:i}])=>({key:i&&e.startsWith(`${i}:`)?e.slice(i.length+1):e,lang:"en",default:s}))).replaceAll("'","'\\''")}}'
    `),console.groupEnd()}}const rn=new an;class on{constructor(e,s){this.host=e,this.store=s,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this)}}function nn(t){return"extension"in t&&!("path"in t)}class ln{constructor(e,s){this.lastClickedIndex=-1,this.host=e,this.store=s,e.addController(this)}hostConnected(){}hostDisconnected(){}get _folderSelectionEnabled(){var e;return((e=this.store.getState().config)==null?void 0:e.folderSelection)===!0}_getCombinedList(){const e=this.store.getState();return this._folderSelectionEnabled?[...e.folders,...e.assets]:e.assets}_applyRangeSelection(e,s,i,a){const r=this.store.getState(),o=this._getCombinedList();for(let n=e;n<=s;n++){const l=o[n];l&&(nn(l)?r.disabledAssetIds.has(l.uuid)||i.set(l.uuid,l):r.disabledFolderIds.has(l.uuid)||a.set(l.uuid,l))}}handleSelect(e,s,i){var n,l,p,h;const a=this.store.getState();if(a.disabledAssetIds.has(e.uuid))return;const r=new Map(a.selectedAssets);if(!(((n=a.config)==null?void 0:n.multiSelect)??!0)){r.clear(),r.set(e.uuid,e),this.store.setState({selectedAssets:r,selectedFolders:new Map}),this.lastClickedIndex=s;return}if(i.shiftKey&&this.lastClickedIndex>=0)if(this._folderSelectionEnabled){const u=Math.min(this.lastClickedIndex,s),d=Math.max(this.lastClickedIndex,s),g=new Map(a.selectedFolders);this._applyRangeSelection(u,d,r,g);const b=(l=a.config)==null?void 0:l.maxSelections;if(b&&r.size+g.size>b)return;this.store.setState({selectedAssets:r,selectedFolders:g})}else{const u=Math.min(this.lastClickedIndex,s),d=Math.max(this.lastClickedIndex,s),g=a.assets;for(let y=u;y<=d;y++)g[y]&&!a.disabledAssetIds.has(g[y].uuid)&&r.set(g[y].uuid,g[y]);const b=(p=a.config)==null?void 0:p.maxSelections;if(b&&r.size>b)return;this.store.setState({selectedAssets:r})}else if(i.metaKey||i.ctrlKey){r.has(e.uuid)?r.delete(e.uuid):r.set(e.uuid,e);const u=(h=a.config)==null?void 0:h.maxSelections,d=r.size+(this._folderSelectionEnabled?a.selectedFolders.size:0);if(u&&d>u)return;this.store.setState({selectedAssets:r})}else r.clear(),r.set(e.uuid,e),this.store.setState({selectedAssets:r,selectedFolders:new Map});this.lastClickedIndex=s}handleFolderSelect(e,s,i){var n,l,p;if(!this._folderSelectionEnabled)return;const a=this.store.getState();if(a.disabledFolderIds.has(e.uuid))return;const r=new Map(a.selectedFolders);if(!(((n=a.config)==null?void 0:n.multiSelect)??!0)){r.clear(),r.set(e.uuid,e),this.store.setState({selectedFolders:r,selectedAssets:new Map}),this.lastClickedIndex=s;return}if(i.shiftKey&&this.lastClickedIndex>=0){const h=Math.min(this.lastClickedIndex,s),u=Math.max(this.lastClickedIndex,s),d=new Map(a.selectedAssets);this._applyRangeSelection(h,u,d,r);const g=(l=a.config)==null?void 0:l.maxSelections;if(g&&d.size+r.size>g)return;this.store.setState({selectedAssets:d,selectedFolders:r})}else if(i.metaKey||i.ctrlKey){r.has(e.uuid)?r.delete(e.uuid):r.set(e.uuid,e);const h=(p=a.config)==null?void 0:p.maxSelections,u=r.size+a.selectedAssets.size;if(h&&u>h)return;this.store.setState({selectedFolders:r})}else r.clear(),r.set(e.uuid,e),this.store.setState({selectedFolders:r,selectedAssets:new Map});this.lastClickedIndex=s}isSelected(e){return this.store.getState().selectedAssets.has(e)}isFolderSelected(e){return this.store.getState().selectedFolders.has(e)}resetRange(){this.lastClickedIndex=-1}selectAll(e){var l;const s=this.store.getState(),i=(l=s.config)==null?void 0:l.maxSelections,a=this._folderSelectionEnabled?s.selectedFolders.size:0,r=e.filter(p=>!s.disabledAssetIds.has(p.uuid)),o=new Map,n=i?Math.max(0,Math.min(r.length,i-a)):r.length;for(let p=0;p<n;p++)o.set(r[p].uuid,r[p]);return this.store.setState({selectedAssets:o}),this.lastClickedIndex=-1,o.size}selectAllFolders(e){var n;if(!this._folderSelectionEnabled)return;const s=this.store.getState(),i=(n=s.config)==null?void 0:n.maxSelections,a=e.filter(l=>!s.disabledFolderIds.has(l.uuid)),r=new Map,o=i?Math.max(0,Math.min(a.length,i-s.selectedAssets.size)):a.length;for(let l=0;l<o;l++)r.set(a[l].uuid,a[l]);this.store.setState({selectedFolders:r})}clearSelection(){this.store.setState({selectedAssets:new Map,selectedFolders:new Map}),this.lastClickedIndex=-1}getSelectedAssets(){return Array.from(this.store.getState().selectedAssets.values())}getSelectedFolders(){return Array.from(this.store.getState().selectedFolders.values())}}class cn{constructor(e,s){this.host=e,this.onLoadMore=s,e.addController(this)}hostConnected(){}hostDisconnected(){this.disconnect()}observe(e,s){this.disconnect(),this.sentinel=e,this.observer=new IntersectionObserver(i=>{var a;(a=i[0])!=null&&a.isIntersecting&&this.onLoadMore()},{root:s??null,rootMargin:"200px"}),this.observer.observe(e)}disconnect(){this.observer&&this.sentinel&&(this.observer.unobserve(this.sentinel),this.observer.disconnect()),this.observer=void 0,this.sentinel=void 0}}const ja=5,Ut=40,Ua=15;class dn{constructor(e,s){this.startX=0,this.startY=0,this.startClientX=0,this.startClientY=0,this.preMarqueeSelection=new Map,this.preMarqueeFolderSelection=new Map,this._dragging=!1,this._scrollRAF=null,this._lastMouseEvent=null,this.isActive=!1,this.rect={x:0,y:0,width:0,height:0},this.handleMouseDown=i=>this.onMouseDown(i),this.handleMouseMove=i=>this.onMouseMove(i),this.handleMouseUp=()=>this.onMouseUp(),this.preventSelect=i=>i.preventDefault(),this.host=e,this.store=s,e.addController(this)}hostConnected(){}hostDisconnected(){this.detach()}attach(e){this.detach(),this.container=e,e.addEventListener("mousedown",this.handleMouseDown)}detach(){this.container&&this.container.removeEventListener("mousedown",this.handleMouseDown),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("selectstart",this.preventSelect),this.stopAutoScroll(),this._lastMouseEvent=null}isInteractiveTarget(e){return e.composedPath().some(i=>{if(!(i instanceof HTMLElement))return!1;if(i instanceof HTMLButtonElement||i instanceof HTMLInputElement)return!0;const a=i.tagName.toLowerCase();return!!(a.startsWith("ap-asset-")||a.startsWith("ap-folder-")||i.classList.contains("check")||i.classList.contains("check-box"))})}onMouseDown(e){var a;if(e.button!==0||this.isInteractiveTarget(e)||!(((a=this.store.getState().config)==null?void 0:a.multiSelect)??!0))return;const i=this.container.getBoundingClientRect();this.startX=e.clientX-i.left+this.container.scrollLeft,this.startY=e.clientY-i.top+this.container.scrollTop,this.startClientX=e.clientX,this.startClientY=e.clientY,this._dragging=!1,this.isActive=!1,document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp)}onMouseMove(e){var s;if(this.container){if(!this._dragging){const i=Math.abs(e.clientX-this.startClientX),a=Math.abs(e.clientY-this.startClientY);if(i<ja&&a<ja)return;this._dragging=!0,this.isActive=!0,document.addEventListener("selectstart",this.preventSelect),(s=window.getSelection())==null||s.removeAllRanges(),this.preMarqueeSelection=new Map(this.store.getState().selectedAssets),this.preMarqueeFolderSelection=new Map(this.store.getState().selectedFolders)}this._lastMouseEvent=e,this.updateMarqueeRect(e),this.startAutoScroll(e)}}updateMarqueeRect(e){if(!this.container)return;const s=this.container.getBoundingClientRect(),i=e.clientX-s.left+this.container.scrollLeft,a=e.clientY-s.top+this.container.scrollTop;let r=Math.min(this.startX,i),o=Math.min(this.startY,a),n=Math.abs(i-this.startX),l=Math.abs(a-this.startY);const p=this.container.scrollWidth,h=this.container.scrollHeight;r+n>p&&(n=p-r),o+l>h&&(l=h-o),r<0&&(n+=r,r=0),o<0&&(l+=o,o=0),this.rect={x:r,y:o,width:n,height:l},this.host.requestUpdate(),this.selectIntersecting()}startAutoScroll(e){if(!this.container)return;if(this.container.scrollHeight<=this.container.clientHeight){this.stopAutoScroll();return}const s=this.container.getBoundingClientRect(),i=e.clientY-s.top,a=s.bottom-e.clientY,r=i<Ut||a<Ut;r&&!this._scrollRAF?this._scrollRAF=requestAnimationFrame(()=>this.autoScrollTick()):r||this.stopAutoScroll()}autoScrollTick(){if(this._scrollRAF=null,!this.container||!this._dragging||!this._lastMouseEvent||this.container.scrollHeight<=this.container.clientHeight)return;const e=this.container.getBoundingClientRect(),s=this._lastMouseEvent,i=s.clientY-e.top,a=e.bottom-s.clientY;let r=0;i<Ut?r=-Ua*(1-i/Ut):a<Ut&&(r=Ua*(1-a/Ut)),r!==0&&(this.container.scrollTop+=r,this.updateMarqueeRect(s),this._scrollRAF=requestAnimationFrame(()=>this.autoScrollTick()))}stopAutoScroll(){this._scrollRAF&&(cancelAnimationFrame(this._scrollRAF),this._scrollRAF=null)}onMouseUp(){document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("selectstart",this.preventSelect),this.stopAutoScroll(),this._lastMouseEvent=null,this._dragging&&(this.isActive=!1,this._dragging=!1,this.rect={x:0,y:0,width:0,height:0},this.host.requestUpdate())}querySelectableElements(){const e=[],s=[];for(const i of Array.from(this.container.children))if(i.shadowRoot){const a=i.shadowRoot.querySelectorAll("[data-asset-uuid]");a.length>0&&e.push(...Array.from(a));const r=i.shadowRoot.querySelectorAll("[data-folder-uuid]");r.length>0&&s.push(...Array.from(r))}return e.length===0&&e.push(...Array.from(this.container.querySelectorAll("[data-asset-uuid]"))),s.length===0&&s.push(...Array.from(this.container.querySelectorAll("[data-folder-uuid]"))),{assetCards:e,folderCards:s}}getCardRelativeRect(e){const s=e.getBoundingClientRect(),i=this.container.getBoundingClientRect();return{x:s.left-i.left+this.container.scrollLeft,y:s.top-i.top+this.container.scrollTop,width:s.width,height:s.height}}intersectsMarquee(e){return this.rect.x<e.x+e.width&&this.rect.x+this.rect.width>e.x&&this.rect.y<e.y+e.height&&this.rect.y+this.rect.height>e.y}selectIntersecting(){var p,h;if(!this.container)return;const e=this.store.getState(),s=((p=e.config)==null?void 0:p.folderSelection)===!0,{assetCards:i,folderCards:a}=this.querySelectableElements(),r=new Map(this.preMarqueeSelection),o=s?new Map(this.preMarqueeFolderSelection):e.selectedFolders;i.forEach(u=>{const d=this.getCardRelativeRect(u),g=u.dataset.assetUuid;if(this.intersectsMarquee(d)&&!e.disabledAssetIds.has(g)){const b=e.assets.find(y=>y.uuid===g);b&&r.set(g,b)}}),s&&a.forEach(u=>{const d=this.getCardRelativeRect(u),g=u.dataset.folderUuid;if(this.intersectsMarquee(d)&&!e.disabledFolderIds.has(g)){const b=e.folders.find(y=>y.uuid===g);b&&o.set(g,b)}});const n=(h=e.config)==null?void 0:h.maxSelections,l=r.size+(s?o.size:0);if(n&&l>n){const u=Array.from(r.entries()).slice(0,Math.max(0,n-o.size));this.store.setState({selectedAssets:new Map(u),...s?{selectedFolders:o}:{}})}else this.store.setState({selectedAssets:r,...s?{selectedFolders:o}:{}})}}class pn{constructor(e,s){this.auth=e;const i=e.projectToken;this.baseUrl=s||`https://api.filerobot.com/${i}/v5`,e.mode==="sassKey"&&(this.sassKey=e.sassKey)}setSassKey(e){this.sassKey=e}getSecurityTemplateKey(){if(this.auth.mode==="securityTemplate")return this.auth.securityTemplateKey}_applyAuthHeaders(e){this.sassKey?e["X-Filerobot-Key"]=this.sassKey:this.auth.mode==="securityTemplate"&&(e["X-Filerobot-Key"]=this.auth.securityTemplateKey)}async request(e,s){const i=new URL(`${this.baseUrl}${e}`);s&&Object.entries(s).forEach(([n,l])=>{l!=null&&(Array.isArray(l)?i.searchParams.set(n,l.join(",")):i.searchParams.set(n,String(l)))});const a={};this._applyAuthHeaders(a);const r=new AbortController,o=setTimeout(()=>r.abort(),3e4);try{const n=await fetch(i.toString(),{headers:a,signal:r.signal});if(clearTimeout(o),!n.ok){let p=`API error: ${n.status} ${n.statusText}`;try{const h=await n.json();h.msg&&(p=`API error: ${n.status} - ${h.msg}`)}catch{}throw new Error(p)}const l=await n.json();if(l.status==="error")throw new Error(`API error: ${l.msg||"Unknown error"}`);return l}catch(n){throw clearTimeout(o),n instanceof DOMException&&n.name==="AbortError"?new Error("API request timed out"):n}}async post(e,s){const i=new URL(`${this.baseUrl}${e}`),a={"Content-Type":"application/json"};this._applyAuthHeaders(a);const r=new AbortController,o=setTimeout(()=>r.abort(),3e4);try{const n=await fetch(i.toString(),{method:"POST",headers:a,body:JSON.stringify(s),signal:r.signal});if(clearTimeout(o),!n.ok){let p=`API error: ${n.status} ${n.statusText}`;try{const h=await n.json();h.msg&&(p=`API error: ${n.status} - ${h.msg}`)}catch{}throw new Error(p)}const l=await n.json();if(l.status==="error")throw new Error(`API error: ${l.msg||"Unknown error"}`);return l}catch(n){throw clearTimeout(o),n instanceof DOMException&&n.name==="AbortError"?new Error("API request timed out"):n}}}const hn=["cdn_permalink"];function un(t){const e=t.fields??hn,s={offset:t.offset??0,limit:t.limit??100,format:"json,regvar:api,select:internal",preview:2301,recursive:t.recursive??1};e.length>0&&(s.fields=e);const i=t.sort_by??"created_at",a=t.sort_direction??"desc",r={created_at:"created_at",modified_at:"modified_at",name:"name",size:"size",type:"type"};s.sort=`${r[i]||i}:${a}`,t.folder&&(s.folder=t.folder);const o=[];return t.search&&!t.with_ai&&o.push(t.search),t.q&&o.push(t.q),o.length>0&&(s.q=o.join(" ")),t.with_ai&&(s.with_ai=!0,t.ai_query&&(s.ai_query=t.ai_query),t.ai_lang&&(s.ai_lang=t.ai_lang)),t.collection_uuid&&(s.collection_uuid=t.collection_uuid),t.f64&&(s.f64=t.f64),s}async function xt(t,e){const s=un(e);return t.request("/files",s)}async function zs(t,e){const s={recursive:e.recursive??1};e.folder&&(s.folder=e.folder);const i=[];return e.search&&!e.with_ai&&i.push(e.search),e.q&&i.push(e.q),i.length>0&&(s.q=i.join(" ")),e.with_ai&&(s.with_ai=!0,e.ai_query&&(s.ai_query=e.ai_query),e.ai_lang&&(s.ai_lang=e.ai_lang)),e.collection_uuid&&(s.collection_uuid=e.collection_uuid),e.f64&&(s.f64=e.f64),t.request("/files/stats",s)}async function fn(t,e){const s={recursive:(e==null?void 0:e.recursive)??0,folder:(e==null?void 0:e.folderPath)??"/",limit:(e==null?void 0:e.limit)??1e3,offset:(e==null?void 0:e.offset)??0};e!=null&&e.q&&(s.q=e.q);const i=(e==null?void 0:e.sort_by)??"created_at",a=(e==null?void 0:e.sort_direction)??"asc",r={created_at:"created_at",modified_at:"modified_at",name:"name"};return s.sort=`${r[i]||i}:${a}`,await t.request("/folders",s)}async function gn(t,e){return e.length===0?{}:(await t.post("/folders/previews",{folders:e})).folders||{}}async function vn(t,e,s){const i=s.replace(/\/+$/,""),a=i?`${i}/${e}`:`/${e}`,r=await t.post("/folders",{name:a});if(r.status!=="success")throw new Error(r.msg||"Failed to create folder")}async function mn(t){return await t.request("/labels")}async function bn(t){return t.request("/collections")}async function yn(t,e){return t.request(`/collections/${e}/folders`)}function vr(t){return t.filter(e=>!!e.name).map(e=>({...e,children:vr(e.children??[])})).filter(e=>{var s;return!((((s=e.children)==null?void 0:s.length)??0)<1&&!e.filters)})}async function _n(t){return((await t.request("/tags")).tags||[]).map(i=>({...i,label:i.names.en||Object.values(i.names)[0]||""})).filter(i=>i.label).sort((i,a)=>i.label.localeCompare(a.label))}async function xn(t){const e=t.getSecurityTemplateKey();if(!e)throw new Error("Security template key is required for SASS key exchange");const s=await t.request(`/key/${e}`);return{key:s.key,permissions:s.permissions??[]}}function $n(t,e){return t?t.includes(e):!1}const wn={FOLDER_CREATE:"DIR_CREATE"};function kn(t){var a,r;const e=(a=t.info)==null?void 0:a.playlists;if(!(e!=null&&e.length))return null;const s=(r=e[0])==null?void 0:r.playlists;return s!=null&&s.length&&s[0]||null}function Bt(t){return(t.type??"").startsWith("image")}function Ka(t){var e,s;return((e=t.info)==null?void 0:e.img_w)??((s=t.info)==null?void 0:s.video_w)??0}function Ba(t){var e,s;return((e=t.info)==null?void 0:e.img_h)??((s=t.info)==null?void 0:s.video_h)??0}const Sn={excellent:90,good:75,fair:60},Cn=[{label:"WEBP",value:"webp"},{label:"JPEG",value:"jpeg"},{label:"PNG",value:"png"},{label:"GIF",value:"gif"}],An=[{label:"Excellent",value:"excellent"},{label:"Good",value:"good"},{label:"Fair",value:"fair"}],En=[{label:"Original",value:"original"},{label:"Full HD",value:"full_hd",width:1920},{label:"Large",value:"large",width:1200},{label:"Medium",value:"medium",width:600},{label:"Small",value:"small",width:300}],Fn={webp:"awebp,webp",jpeg:"jpeg",png:"png",gif:"agif,gif"},On=new Set(["jpg","jpeg","png","gif","webp","svg","bmp","ico","tiff","tif","avif","heic","heif","psd","eps"]),Tn=new Set([...On,"pdf","psd","eps","ai","ttf","otf","woff","woff2","eot"]);function Ht(t){if(!t)return"other";const e={image:"image",video:"video",audio:"audio",application:"document",font:"font",text:"document"};return e[t]?e[t]:t.startsWith("image/")?"image":t.startsWith("video/")?"video":t.startsWith("audio/")?"audio":t.startsWith("application/pdf")||t.startsWith("text/")||t.startsWith("application/msword")||t.startsWith("application/vnd.")?"document":t.startsWith("application/zip")||t.startsWith("application/x-rar")||t.startsWith("application/x-7z")||t.startsWith("application/gzip")?"archive":t.startsWith("font/")?"font":"other"}function mr(t){const e=(t==null?void 0:t.toLowerCase().replace(".",""))||"";return Tn.has(e)}const $="https://scaleflex.cloudimg.io/v7/assets/file-types/v3/",Mi={_default:$+"GENERIC.svg?vh=9a518a",png:$+"PNG.svg?vh=96cd9a",jpg:$+"JPG.svg?vh=06e819",jpg2:$+"JPG2.svg?vh=f0eb7f",jpeg:$+"JPEG.svg?vh=6a65e9",gif:$+"GIF.svg?vh=c3c2c3",bmp:$+"BMP.svg?vh=d2243a",webp:$+"WEBP.svg?vh=fedd74",svg:$+"SVG.svg?vh=a15e46",tiff:$+"TIFF.svg?vh=1f30c3",tif:$+"TIF.svg?vh=b383c9",heic:$+"HEIC.svg?vh=84adfe",avif:$+"AVIF.svg?vh=536b30",ico:$+"ICO.svg?vh=79063d",psd:$+"PSD.svg?vh=be6140",psb:$+"PSB.svg?vh=678646",ai:$+"AI.svg?vh=84b254",dwg:$+"DWG.svg?vh=971fb3",mp4:$+"MP4.svg?vh=42f175",webm:$+"WEBM.svg?vh=26a84a",avi:$+"AVI.svg?vh=d22ba8",mpeg:$+"MPEG.svg?vh=ba93bb",ogv:$+"OGV.svg?vh=74d453","3gp":$+"3GP.svg?vh=f0d388","3g2":$+"3G2.svg?vh=04c652",swf:$+"SWF.svg?vh=3955e2",fla:$+"FLA.svg?vh=daf585",m3u8:$+"M3U8.svg?vh=7d5e62",mp3:$+"MP3.svg?vh=66bbef",wav:$+"WAV.svg?vh=d7a7d5",aac:$+"AAC.svg?vh=07f3f9",oga:$+"OGA.svg?vh=a5c622",opus:$+"OPUS.svg?vh=9548b1",weba:$+"WEBA.svg?vh=4dcf70",mid:$+"MID.svg?vh=3f0e29",midi:$+"MIDI.svg?vh=9fedec",cda:$+"CDA.svg?vh=85b83b",pdf:$+"PDF.svg?vh=18c5f7",doc:$+"DOC.svg?vh=d1b47c",docx:$+"DOCX.svg?vh=1eb6b0",txt:$+"TXT.svg?vh=307979",rtf:$+"RTF.svg?vh=978c5f",xls:$+"XLS.svg?vh=13b5f7",xlsx:$+"XLSX.svg?vh=79d64a",ppt:$+"PPT.svg?vh=4ee29b",pptx:$+"PPTX.svg?vh=8b1568",csv:$+"CSV.svg?vh=4add78",odt:$+"ODT.svg?vh=940781",ods:$+"ODS.svg?vh=9fbe9a",odp:$+"ODP.svg?vh=bf892d",dbf:$+"DBF.svg?vh=457bd4",vsd:$+"VSD.svg?vh=8a9ccb",abw:$+"ABW.svg?vh=313dc7",epub:$+"EPUB.svg?vh=15263d",azw:$+"AZW.svg?vh=a018b1",ics:$+"ICS.svg?vh=909f63",ogx:$+"OGX.svg?vh=f694d2",zip:$+"ZIP.svg?vh=84f98b",rar:$+"RAR.svg?vh=1d6423","7z":$+"7Z.svg?vh=e007e5",tar:$+"TAR.svg?vh=603aed",gz:$+"GZ.svg?vh=de13f7",bz:$+"BZ.svg?vh=0374ff",bz2:$+"BZ2.svg?vh=e14294",arc:$+"ARC.svg?vh=942fad",jar:$+"JAR.svg?vh=149796",mpkg:$+"MPKG.svg?vh=dea655",ttf:$+"TTF.svg?vh=d2e2c1",otf:$+"OTF.svg?vh=c904fd",woff:$+"WOFF.svg?vh=4b8177",woff2:$+"WOFF2.svg?vh=b532d3",eot:$+"EOT.svg?vh=a54980",js:$+"JS.svg?vh=524691",mjs:$+"MJS.svg?vh=d57921",ts:$+"TS.svg?vh=9af3ae",css:$+"CSS.svg?vh=287863",html:$+"HTML.svg?vh=fa7a87",htm:$+"HTM.svg?vh=21323d",xhtml:$+"XHTML.svg?vh=e6d6a9",xul:$+"XUL.svg?vh=6c9c71",json:$+"JSON.svg?vh=104c9e",jsonld:$+"JSONLD.svg?vh=f30c0f",xml:$+"XML.svg?vh=7f7194",php:$+"PHP.svg?vh=503e36",sh:$+"SH.svg?vh=3b820e",csh:$+"CSH.svg?vh=08c0cc",exe:$+"EXE.svg?vh=ccca53",iso:$+"ISO.svg?vh=064b8f",bin:$+"BIN.svg?vh=1e9618"};function Os(t){const e=(t==null?void 0:t.toLowerCase().replace(".",""))||"";return Mi[e]||Mi._default}function Qt(){return Mi._default}function di(t){if(!t)return"";const e=t.split("/");return e.length>1?e[1]:e[0]}const Pn=new Set(["png","svg","webp","gif","avif"]);function Bi(t){const e=(t==null?void 0:t.toLowerCase().replace(".",""))||"";return Pn.has(e)}const Ln=new Set(["svg","svg+xml","png","pdf"]);function br(t){return Ln.has(di(t).toLowerCase())}let Di=null;function In(t){Di=t??null}function Qe(t,e){if(!t||!Di)return t;try{return Di(t,e)||t}catch(s){return console.warn("[asset-picker] transformRemoteThumbnail threw:",s),t}}function Js(t){var i;const e=t.info,s=(e==null?void 0:e.video_thumbnail)||(e==null?void 0:e.image_thumbnail)||(e==null?void 0:e.thumbnail)||(e==null?void 0:e.preview)||((i=t.url)==null?void 0:i.cdn)||"";return Qe(Wt(s),{source:"asset",asset:t})}function yr(t){const e=t.info,s=(e==null?void 0:e.video_thumbnail)||(e==null?void 0:e.image_thumbnail)||(e==null?void 0:e.thumbnail)||"";return s?Qe(Wt(s),{source:"video",asset:t}):""}function Vi(t){var s,i;let e=Wt(((s=t.url)==null?void 0:s.cdn)||((i=t.url)==null?void 0:i.public)||"");return e?(e=e.replace(/([?&])func=proxy&?/,"$1").replace(/[?&]$/,""),Qe(At(e,{w:"200",force_format:"webp,jpeg",doc_page:"1",bypass_process_proxy:"1"}),{source:"pdf",asset:t})):""}function At(t,e){try{const s=new URL(t);for(const[i,a]of Object.entries(e))s.searchParams.set(i,a);return s.toString()}catch{return t}}const Va=/^(https:\/\/)([a-z0-9_-]+)\.filerobot\.com\//i;function Wt(t,e){if(!t)return"";const s=a=>a.replace(/(\.filerobot\.com\/[a-z0-9_-]+)\/v\d+\//i,"$1/");if(t.includes("assets.filerobot.com"))return s(t);const i=t.match(Va);if(i){const a=i[2],r=t.replace(Va,`$1assets.filerobot.com/${a}/`);return s(r)}if(e)try{const a=new URL(t);return s(`https://assets.filerobot.com/${e}${a.pathname}${a.search}`)}catch{}return t}function _r(t,e){const s=t.file_uri_cdn;if(!s)return"";let i=Wt(s);const a=Ht(t.file_type),r=String(window.devicePixelRatio||1);let o;return a==="video"?o=At(i,{w:e,dpr:r,force_format:"webp,jpeg"}):t.file_type==="application/pdf"||di(t.file_type).toLowerCase()==="pdf"?(i=i.replace(/([?&])func=proxy&?/,"$1").replace(/[?&]$/,""),o=At(i,{w:e,dpr:r,force_format:"webp,jpeg",doc_page:"1",bypass_process_proxy:"1"})):o=At(i,{w:e,dpr:r}),Qe(o,{source:"folder"})}function Mn(t,e){const s={};return t.format&&(s.force_format=Fn[t.format]),t.quality&&t.format!=="png"&&(s.q=String(Sn[t.quality])),t.width&&(s.w=String(t.width)),t.height&&(s.h=String(t.height)),(t.width||t.height)&&(s.org_if_sml="1",e!=null&&e.isMultiSelect?s.func="bound":(e==null?void 0:e.isAspectLocked)===!1&&(s.func="cover")),s}const C={TYPE:"type",MIME_TYPE:"mimetype",METADATA:"metadata",DATE:"date",APPROVAL:"approval",SIZE:"size",LICENSE_EXPIRY:"asset_expiration",TAGS:"tags",IMAGE:"image",LABELS:"labels",PRODUCT_REF:"product_ref",FACES:"faces",COLOR:"color"},Z={STATUS:"approval_status",APPROVER:"task_approver",REQUESTOR:"task_requester",DUE_DATE:"task_duedate"},U={IS:":",RANGE:"..",IS_NOT:":-",IS_EXACT:":=",CONTAINS:"~",CONTAINS_IN_TEXT:"~~~",GREATER_THAN_OR_EQUAL:">=",LESS_THAN_OR_EQUAL:"<="},Dn={AND:"AND"},L={NUMERIC:"numeric",SELECT_ONE:"select-one",MULTI_SELECT:"multi-select",TEXT_AREA:"textarea",TEXT:"text",SUPERTAGS:"tags",DATE:"date",BOOLEAN:"boolean",ATTACHMENTS_ASSETS:"attachments-assets",ATTACHMENT_URI:"attachment-uri",GEO_POINT:"geopoint",DECIMAL2:"decimal2",INTEGER_LIST:"integer-list"},pi={[L.DATE]:"date_",[L.BOOLEAN]:"bool_",[L.NUMERIC]:"num_",[L.DECIMAL2]:"dec_",[L.ATTACHMENTS_ASSETS]:"attach_",[L.ATTACHMENT_URI]:"uri_",[L.SELECT_ONE]:"one_",[L.MULTI_SELECT]:"multi_",[L.SUPERTAGS]:"tags_",[L.TEXT]:"text_",[L.TEXT_AREA]:"area_",[L.GEO_POINT]:"geo_",[L.INTEGER_LIST]:"intlist_"};Object.fromEntries(Object.entries(pi).map(([t,e])=>[e,t]));const xr=Object.values(pi),rs={PRESET:"preset",AFTER:"after",BEFORE:"before",BETWEEN:"between",SPECIFIC:"specific"},Ha={EMPTY:"empty",NOT_EMPTY:"non-empty"},Te="empty",Pe="non-empty",$t="specific",$i=10,os=10,Ns=10,$r="filters:pinned:",wr="metadata:pinned:",qa=[C.DATE,C.TYPE,C.SIZE],kr=U.IS,Ks="20",Bs="1",Rn=0,zn=[{key:C.DATE,labelKey:"filterDate",label:"Date",icon:"calendar",type:"date"},{key:C.TYPE,labelKey:"filterFormat",label:"Format",icon:"file-type",type:"string"},{key:C.SIZE,labelKey:"filterSize",label:"Size",icon:"scaling",type:"string"},{key:C.LICENSE_EXPIRY,labelKey:"filterLicenseExpiry",label:"License expiry",icon:"history",type:"date"},{key:C.TAGS,labelKey:"filterTags",label:"Tags",icon:"hash",type:"string"},{key:C.LABELS,labelKey:"filterLabels",label:"Labels",icon:"tag",type:"string"},{key:C.PRODUCT_REF,labelKey:"filterProducts",label:"Products",icon:"box",type:"string"},{key:C.IMAGE,labelKey:"filterImage",label:"Image",icon:"image",type:"string"},{key:C.COLOR,labelKey:"filterColor",label:"Color",icon:"swatch-book",type:"string"}],Nn={key:C.METADATA,labelKey:"filterMetadata",label:"Metadata",icon:"file-text",type:"string"},jn={key:C.APPROVAL,labelKey:"filterApproval",label:"Approval",icon:"badge-check",type:"string"},Zs=[Nn,...zn,jn],Vt={[C.TYPE]:"Format",[C.DATE]:"Date",[C.SIZE]:"Size",[C.LICENSE_EXPIRY]:"License expiry",[C.TAGS]:"Tags",[C.LABELS]:"Labels",[C.PRODUCT_REF]:"Products",[C.IMAGE]:"Image",[C.COLOR]:"Color",[C.METADATA]:"Metadata",[C.APPROVAL]:"Approval",[Z.STATUS]:"Approval",[Z.APPROVER]:"Approval",[Z.REQUESTOR]:"Approval",[Z.DUE_DATE]:"Approval"},ls={...Object.fromEntries(Zs.map(t=>[t.key,t.labelKey])),[Z.STATUS]:"filterApproval",[Z.APPROVER]:"filterApproval",[Z.REQUESTOR]:"filterApproval",[Z.DUE_DATE]:"filterApproval"},ye={IMAGE:"image",VIDEO:"video",AUDIO:"audio",DOCUMENT:"document",ARCHIVE:"archive",DESIGN_TEMPLATE:"template_fdt",OTHER:"other",FONTS:"font"},ei=[{value:ye.IMAGE,labelKey:"assetTypeImage",label:"Image",icon:"image"},{value:ye.VIDEO,labelKey:"assetTypeVideo",label:"Video",icon:"clapperboard"},{value:ye.AUDIO,labelKey:"assetTypeAudio",label:"Audio",icon:"music"},{value:ye.DOCUMENT,labelKey:"assetTypeDocument",label:"Document",icon:"document"},{value:ye.ARCHIVE,labelKey:"assetTypeArchive",label:"Archive",icon:"archive"},{value:ye.DESIGN_TEMPLATE,labelKey:"assetTypeDesignTemplate",label:"Design template",icon:"layout-template"},{value:ye.FONTS,labelKey:"assetTypeFonts",label:"Fonts",icon:"text"},{value:ye.OTHER,labelKey:"assetTypeOther",label:"Other",icon:"layout-grid"}],Un={[ye.IMAGE]:["jpg","jpeg","png","gif","webp","svg","bmp","ico","tiff","tif","avif","heic","heif","psd","eps"],[ye.VIDEO]:["mp4","webm","ogg","mov","avi","mkv","flv","wmv","m4v"],[ye.AUDIO]:["mp3","wav","ogg","flac","aac","wma","m4a","opus"],[ye.DOCUMENT]:["pdf","doc","docx","xls","xlsx","ppt","pptx","txt","csv","rtf","odt","ods","odp","html"],[ye.ARCHIVE]:["zip","rar","7z","tar","gz","bz2","xz"],[ye.FONTS]:["ttf","otf","woff","woff2","eot"]},wi={RESOLUTION:0,ORIENTATION:1,FACES:2},Kn=[{value:"small",label:"Small",labelKey:"resolutionSmall"},{value:"medium",label:"Medium",labelKey:"resolutionMedium"},{value:"large",label:"Large",labelKey:"resolutionLarge"}],Bn=[{value:"portrait",label:"Portrait",labelKey:"orientationPortrait"},{value:"landscape",label:"Landscape",labelKey:"orientationLandscape"},{value:"square",label:"Square",labelKey:"orientationSquare"},{value:"panorama",label:"Panorama",labelKey:"orientationPanorama"}],Vn=[{value:"none",label:"None",labelKey:"facesNone"},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3..",label:"3+"}],Sr=[{value:"created",label:"Created at",labelKey:"createdAt"},{value:"updated",label:"Updated at",labelKey:"updatedAt"}],Hi=[{value:"today",label:"Today",labelKey:"today"},{value:"before",label:"Before date",labelKey:"beforeDate"},{value:"last_week",label:"Last week",labelKey:"lastWeek"},{value:"after",label:"After date",labelKey:"afterDate"},{value:"last_month",label:"Last month",labelKey:"lastMonth"},{value:"between",label:"Between dates",labelKey:"betweenDates"},{value:"last_year",label:"Last year",labelKey:"lastYear"}],Cr=[{value:"today",label:"Today",labelKey:"today"},{value:"before",label:"Before date",labelKey:"beforeDate"},{value:"within_week",label:"Within week",labelKey:"withinWeek"},{value:"after",label:"After date",labelKey:"afterDate"},{value:"within_month",label:"Within month",labelKey:"withinMonth"},{value:"between",label:"Between dates",labelKey:"betweenDates"},{value:"within_year",label:"Within year",labelKey:"withinYear"},{value:"specific",label:"Specific date",labelKey:"specificDate"}],Hn=[{value:"today",label:"Today",labelKey:"today"},{value:"before",label:"Before date",labelKey:"beforeDate"},{value:"within_week",label:"Within week",labelKey:"withinWeek"},{value:"after",label:"After date",labelKey:"afterDate"},{value:"within_month",label:"Within month",labelKey:"withinMonth"},{value:"between",label:"Between dates",labelKey:"betweenDates"},{value:"within_year",label:"Within year",labelKey:"withinYear"},{value:"specific",label:"Specific date",labelKey:"specificDate"}],qn=["#ffffff","#99a1af","#000000","#894b00","#e7000b","#ff8904","#fdc700","#9ae600","#008236","#00bcff","#1447e6","#7f22fe","#e60076"],Gn=[{label:"None (Exact)",value:"0",labelKey:"colorDiffNone"},{label:"Small",value:"1",labelKey:"colorDiffSmall"},{label:"Medium",value:"2",labelKey:"colorDiffMedium"},{label:"Large",value:"4",labelKey:"colorDiffLarge"}],ki=[{label:"Is",value:U.IS,labelKey:"operatorIs"},{label:"Contains",value:U.CONTAINS_IN_TEXT,labelKey:"operatorContains"}],it=[{label:"Is",value:U.IS,labelKey:"operatorIs"},{label:"Is not",value:U.IS_NOT,labelKey:"operatorIsNot"}],Si=[{label:"Is",value:U.IS_EXACT,labelKey:"operatorIs"},{label:"Contains",value:U.IS,labelKey:"operatorContains"},{label:"Does not contain",value:U.IS_NOT,labelKey:"operatorDoesNotContain"}],Ci=[{label:"Is",value:U.IS,labelKey:"operatorIs"},{label:"Greater than",value:U.GREATER_THAN_OR_EQUAL,labelKey:"operatorGreaterThan"},{label:"Is not",value:U.IS_NOT,labelKey:"operatorIsNot"},{label:"Less than",value:U.LESS_THAN_OR_EQUAL,labelKey:"operatorLessThan"},{label:"Between",value:U.RANGE,labelKey:"operatorBetween"}],Qn=[{label:"Is",value:U.IS_EXACT,labelKey:"operatorIs"},{label:"Is not",value:U.IS_NOT,labelKey:"operatorIsNot"}],Ga=[{label:"Contains",value:U.CONTAINS,labelKey:"operatorContains"},{label:"Does not contain",value:U.IS_NOT,labelKey:"operatorDoesNotContain"}],Wn=[{value:"APPROVED",label:"Approved",labelKey:"approved",icon:"circle-check-big",iconColor:"var(--ap-success, oklch(0.637 0.17 151.295))"},{value:"PENDING",label:"Pending",labelKey:"pending",icon:"clock",iconColor:"var(--ap-warning, oklch(0.734 0.157 69.419))"},{value:"REJECTED",label:"Rejected",labelKey:"rejected",icon:"x-circle",iconColor:"var(--ap-destructive, oklch(0.577 0.215 27.325))"},{value:"CANCELLED",label:"Cancelled",labelKey:"cancelled",icon:"ban",iconColor:"var(--ap-muted-foreground, oklch(0.685 0.033 249.82))"}],ti=[{label:"Empty",value:Te,labelKey:"empty"},{label:"Not empty",value:Pe,labelKey:"notEmpty"}],Yn=[...ti,{label:"Specific",value:$t,labelKey:"specific"}],Xn=[{label:"Empty",value:Te,labelKey:"empty"},{label:"Not empty",value:Pe,labelKey:"notEmpty"},{label:"True",value:"true",labelKey:"boolTrue"},{label:"False",value:"false",labelKey:"boolFalse"}],Vs={[L.DATE]:"calendar",[L.BOOLEAN]:"toggle-left",[L.NUMERIC]:"file-digit",[L.DECIMAL2]:"decimals-arrow-right",[L.ATTACHMENTS_ASSETS]:"paperclip",[L.ATTACHMENT_URI]:"link-2",[L.SELECT_ONE]:"circle-dot",[L.MULTI_SELECT]:"square-check",[L.SUPERTAGS]:"hash",[L.TEXT]:"text-initial",[L.TEXT_AREA]:"text-align-justify",[L.GEO_POINT]:"locate",[L.INTEGER_LIST]:"list-ordered"},Jn={[L.TEXT]:"text",[L.TEXT_AREA]:"text",[L.NUMERIC]:"number",[L.DECIMAL2]:"number",[L.BOOLEAN]:"boolean",[L.SELECT_ONE]:"select-one",[L.MULTI_SELECT]:"multi-select",[L.SUPERTAGS]:"tags",[L.DATE]:"date",[L.GEO_POINT]:"geo",[L.ATTACHMENTS_ASSETS]:"attachment",[L.ATTACHMENT_URI]:"attachment",[L.INTEGER_LIST]:"attachment"};async function Zn(t){var i;return(((i=(await t.request("/filters",{filter_by:"filetype",format:"list",limit:200})).filters)==null?void 0:i.file_types)??[]).map(a=>({name:a.name,value:a.value,count:a.count,category:a.category??a.value.split("_")[0],label:el(a.name)}))}function el(t){const e=t.indexOf("›");return(e!==-1?t.slice(e+1).trim():t).toUpperCase()}async function tl(t){var b,y;const e=await t.request("/settings"),s=e.settings??e,i=(s==null?void 0:s.metadata)??e.metadata,r=((i==null?void 0:i.model)??[])[Rn],o=i==null?void 0:i.store,l=((o==null?void 0:o.regional_variants_groups)??[]).map(_=>({uuid:_.uuid,label:_.label??_.name??"",variants:(_.variants??[]).map(S=>({api_value:S.api_value??S.value??"",internal_unique_value:S.internal_unique_value??S.api_value??"",label:S.label??S.name??""}))})).filter(_=>_.variants.length>1),p={};for(const _ of l)p[_.uuid]=((b=_.variants[0])==null?void 0:b.api_value)??"";const h=(s==null?void 0:s.project_branding)??((y=e.settings)==null?void 0:y.project_branding),u=h==null?void 0:h.brandColor;if(!r)return{fields:[],regionalVariantGroups:l,regionalFilters:p,brandColor:u};const d=r.groups??[],g=[];for(const _ of d){const S=_.name||"";for(const k of _.fields??[]){const N=k.possible_values,T=N==null?void 0:N.map(E=>({api_value:E.api_value??E.value??"",internal_unique_value:E.internal_unique_value??E.api_value??"",label:E.label??E.name??E.api_value??""}));g.push({key:k.key??k.ckey,label:k.title??k.label??k.key??"",type:k.type??"text",slug:k.slug,ckey:k.ckey,possible_values:T,group:S,regionalVariantsGroupUuid:k.regional_variants_group_uuid})}}return{fields:g,regionalVariantGroups:l,regionalFilters:p,brandColor:u}}function wt(t){return t.toLocaleDateString("en-CA")}function js(){return wt(new Date)}function Ar(t){const e=new Date;switch(t){case"today":return{from:js(),to:null};case"last_week":{const s=new Date(e);return s.setDate(s.getDate()-7),{from:wt(s),to:null}}case"within_week":{const s=new Date(e);return s.setDate(s.getDate()+7),{from:js(),to:wt(s)}}case"last_month":{const s=new Date(e);return s.setDate(s.getDate()-30),{from:wt(s),to:null}}case"within_month":{const s=new Date(e);return s.setDate(s.getDate()+30),{from:js(),to:wt(s)}}case"last_year":{const s=new Date(e);return s.setDate(s.getDate()-365),{from:wt(s),to:null}}case"within_year":{const s=new Date(e);return s.setDate(s.getDate()+365),{from:js(),to:wt(s)}}default:return null}}function Qa(t,e){return e?e.type==="date"?sl(e):e.type==="string"?il(e):!0:!1}function sl(t){return!(!t.kind&&!t.preset||t.kind==="preset"&&!t.preset||t.kind==="between"&&!t.from&&!t.to||t.kind==="after"&&!t.from||t.kind==="before"&&!t.to||t.kind==="specific"&&!t.from||t.from&&t.to&&new Date(t.from)>new Date(t.to))}function il(t){return!t.values||!Array.isArray(t.values)?!1:t.values.filter(Boolean).length>0}function al(t,e={}){const s=[];for(const[i,a]of Object.entries(t)){if(!a||!Qa(i,a))continue;const r=ol(i,a);s.push(...r)}for(const[i,a]of Object.entries(e)){if(!a||!Qa(i,a))continue;const r=ul(i,a);s.push(...r)}return rl(s)}function rl(t){const e=[],s=[],i=[];for(const a of t)a.startsWith("type:")||a.startsWith("type=")?e.push(a):a.startsWith("mimetype:")||a.startsWith("mimetype=")?s.push(a):i.push(a);if(e.length>0&&s.length>0){const a=[...e,...s].join(" , ");i.push(a)}else i.push(...e,...s);return i}function ol(t,e){if(e.type==="date")return Er(t,e);if(t===C.IMAGE)return hl(e);const s=e,{operator:i=kr,values:a=[],logic:r}=s;if(a.length===0)return[];switch(t){case C.SIZE:return nl(t,a,"..");case C.FACES:return ll(t,i,a);case C.TAGS:return St(t,i,Wa(a),",",r);case C.LABELS:return St(t,i,Wa(a),",",r);case C.COLOR:return cl(i,a,r);case C.TYPE:return dl(a,i);case C.MIME_TYPE:return pl(t,a,i);case C.PRODUCT_REF:return St(t,"=%",a,",",r);default:return St(t,i,a,",",r)}}function Er(t,e){const s=e.field||"created";if(e.kind===rs.PRESET&&e.preset){if(e.preset===Ha.EMPTY)return[`${s}:"empty"`];if(e.preset===Ha.NOT_EMPTY)return[`${s}:"non-empty"`];const i=Ar(e.preset);return i?i.to===null?[`${s}>"${i.from}"`]:[`${s}:"${i.from}..${i.to}"`]:[]}if(e.kind===rs.AFTER&&e.from)return[`${s}:>"${e.from}"`];if(e.kind===rs.BEFORE&&e.to)return[`${s}:<"${e.to}"`];if(e.kind===rs.BETWEEN){if(e.from&&e.to)return[`${s}:"${e.from}..${e.to}"`];if(e.from&&!e.to)return[`${s}:>"${e.from}"`];if(!e.from&&e.to)return[`${s}:<"${e.to}"`]}return e.kind===rs.SPECIFIC&&e.from?[`${s}:"${e.from}"`]:[]}function nl(t,e,s){return e.length===0?[]:[`${t}:"${e.join(s)}"`]}function ll(t,e,s){return s.length===0?[]:[`${t}${e}"${s.join(",")}"`]}function St(t,e,s,i,a){if(s.length===0)return[];if(a===Dn.AND)return s.map(o=>`${t}${e}"${o}"`);const r=s.map(o=>`"${o}"`).join(i);return[`${t}${e}${r}`]}function cl(t,e,s){const i=[],a=St("color_search",t,e,",",s);return i.push(...a),i.push('color_operator:"AND"'),i}function dl(t,e){if(t.length===0)return[];const s=new Set,i=[];for(const r of t){const o=Un[r];if(o)for(const n of o){const l=`${r}_${n}`;s.has(l)||(s.add(l),i.push(l))}else s.has(r)||(s.add(r),i.push(r))}const a=i.map(r=>`"${r}"`).join(",");return[`type${e}${a}`]}function pl(t,e,s,i){if(e.length===0)return[];const a=e.map(r=>`"${r}"`).join(",");return[`${t}${s}${a}`]}function hl(t){const e=[];if(typeof t=="object"&&t!==null&&!Array.isArray(t)){const o=t,n=o.resolution,l=o.orientation,p=o.faces;return n!=null&&n.length&&e.push(`resolution:"${n.join(",")}"`),l!=null&&l.length&&e.push(`orientation:"${l.join(",")}"`),p!=null&&p.length&&e.push(`faces:"${p.join(",")}"`),e}const s=t,i=s[wi.RESOLUTION],a=s[wi.ORIENTATION],r=s[wi.FACES];return i&&e.push(`resolution:"${i}"`),a&&e.push(`orientation:"${a}"`),r&&e.push(`faces:"${r}"`),e}function ul(t,e){const s=vl(t),i=gl(t);if(e.type==="date")return fl(s,e,i);const a=e,{operator:r=kr,values:o=[],logic:n,metadataType:l}=a;if(o.length===0)return[];if(o.length===1&&(o[0]===Te||o[0]===Pe)){const p=l===L.GEO_POINT?U.IS+"~":U.IS;return[`${s}${p}"${o[0]}"`]}if((l===L.NUMERIC||l===L.DECIMAL2)&&r===U.RANGE)return[`${s}${U.IS}"${o.join('","')}"`];if(l===L.GEO_POINT){const p=o.map(h=>{const u=h.indexOf("..");if(u===-1)return`(${h})`;const d=h.slice(0,u),g=h.slice(u);return`(${d})${g}`});return St(s,r+"~",p,",",n)}return St(s,r,o,",",n)}function fl(t,e,s){const i=Er(t,e);return!s||i.length===0?i:i.map(a=>{const r=a.search(/[^a-zA-Z0-9_]/);if(r===-1)return`"${a}"`;const o=a.slice(0,r),l=a.slice(r).replace(/"/g,"");return`"${o}${l}"`})}function gl(t){return t.startsWith("date_")}function vl(t){for(const e of xr)if(t.startsWith(e))return t.slice(e.length);return t}function Wa(t){return t.map(e=>e.replace(/#/g,""))}const ml=new Set([C.DATE,C.LICENSE_EXPIRY,Z.DUE_DATE]);function Ri(t){if(!t)return{};const e={};for(const[s,i]of Object.entries(t))i&&(e[s]=bl(s,i));return e}function bl(t,e){return e.type==="string"||e.type==="date"?e:ml.has(t)?{type:"date",field:e.field??"created",kind:e.kind??null,preset:e.preset??null,from:e.from??null,to:e.to??null}:{type:"string",values:e.values,...e.operator!==void 0&&{operator:e.operator},...e.logic!==void 0&&{logic:e.logic}}}function yl(t){const e=localStorage.getItem($r+t),s=localStorage.getItem(wr+t);let i;try{i=e?JSON.parse(e):[...qa]}catch{i=[...qa]}let a;try{a=s?JSON.parse(s):[]}catch{a=[]}return{pinnedFilters:i,pinnedMetadata:a}}function _l(t,e){localStorage.setItem($r+t,JSON.stringify(e))}function xl(t,e){localStorage.setItem(wr+t,JSON.stringify(e))}const Fr="sort-by",Or="sort-order";function Ya(t,e){try{localStorage.setItem(Fr,t),localStorage.setItem(Or,e)}catch{}}function $l(){try{const t=localStorage.getItem(Fr),e=localStorage.getItem(Or);return{sortBy:t,sortDirection:e}}catch{return{sortBy:null,sortDirection:null}}}const Tr="ap-last-folder",Pr="ap-last-view",Lr="ap-last-tab";function Xt(t,e){return e?`${t}:${e}`:t}function Xa(t,e){try{localStorage.setItem(Xt(Tr,e),t)}catch{}}function wl(t){try{return localStorage.getItem(Xt(Tr,t))}catch{return null}}function kl(t,e){try{localStorage.setItem(Xt(Pr,e),t)}catch{}}function Sl(t){try{return localStorage.getItem(Xt(Pr,t))}catch{return null}}function Cl(t,e){try{localStorage.setItem(Xt(Lr,e),t)}catch{}}function Al(t){try{const e=localStorage.getItem(Xt(Lr,t));return e==="assets"||e==="folders"||e==="labels"||e==="collections"?e:null}catch{return null}}function El(t){const e=t.replace("#",""),s=e.length===3?e[0]+e[0]+e[1]+e[1]+e[2]+e[2]:e,i=parseInt(s.slice(0,2),16)/255,a=parseInt(s.slice(2,4),16)/255,r=parseInt(s.slice(4,6),16)/255;return[i,a,r]}function Ai(t){return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function Fl(t,e,s){const i=Ai(t),a=Ai(e),r=Ai(s),o=.4122214708*i+.5363325363*a+.0514459929*r,n=.2119034982*i+.6806995451*a+.1073969566*r,l=.0883024619*i+.2817188376*a+.6299787005*r,p=Math.cbrt(o),h=Math.cbrt(n),u=Math.cbrt(l),d=.2104542553*p+.793617785*h-.0040720468*u,g=1.9779984951*p-2.428592205*h+.4505937099*u,b=.0259040371*p+.7827717662*h-.808675766*u,y=Math.sqrt(g*g+b*b);let _=Math.atan2(b,g)*(180/Math.PI);return _<0&&(_+=360),[d,y,_]}function Ol(t){return t>.7}function Tl(t,e){const s=["--ap-primary","--ap-primary-foreground","--ap-primary-10","--ap-primary-20","--ap-accent","--ap-accent-foreground","--ap-ring","--ap-selection-bg"];if(!e){for(const u of s)t.style.removeProperty(u);return}const[i,a,r]=El(e),[o,n,l]=Fl(i,a,r),p=`oklch(${o.toFixed(3)} ${n.toFixed(3)} ${l.toFixed(1)})`,h=Ol(o)?"#000":"#fff";t.style.setProperty("--ap-primary",p),t.style.setProperty("--ap-primary-foreground",h),t.style.setProperty("--ap-primary-10",`oklch(${o.toFixed(3)} ${n.toFixed(3)} ${l.toFixed(1)} / 0.1)`),t.style.setProperty("--ap-primary-20",`oklch(${o.toFixed(3)} ${n.toFixed(3)} ${l.toFixed(1)} / 0.2)`),t.style.setProperty("--ap-accent",`oklch(${o.toFixed(3)} ${n.toFixed(3)} ${l.toFixed(1)} / 0.07)`),t.style.setProperty("--ap-accent-foreground",p),t.style.setProperty("--ap-ring",`oklch(${o.toFixed(3)} ${n.toFixed(3)} ${l.toFixed(1)} / 0.7)`),t.style.setProperty("--ap-selection-bg",`oklch(${o.toFixed(3)} ${n.toFixed(3)} ${l.toFixed(1)} / 0.08)`)}const qi=[{value:"name",labelKey:"sortName",label:"Name"},{value:"created_at",labelKey:"sortUploaded",label:"Uploaded"},{value:"modified_at",labelKey:"sortModified",label:"Modified"},{value:"size",labelKey:"sortSize",label:"Size"},{value:"type",labelKey:"sortFormat",label:"Format"}],Pl=[{value:"relevance",labelKey:"sortRelevance",label:"Relevance"},...qi],Ll=[{value:"name",labelKey:"sortName",label:"Name"},{value:"created_at",labelKey:"sortUploaded",label:"Uploaded"},{value:"modified_at",labelKey:"sortModified",label:"Modified"},{value:"files_count_recursive",labelKey:"sortAssetsCount",label:"Assets count"},{value:"files_size_recursive",labelKey:"sortAssetsSize",label:"Assets size"}],Il=[{value:"name",labelKey:"sortName",label:"Name"}],Ml=[{value:"name",labelKey:"sortName",label:"Name"},{value:"created_at",labelKey:"sortUploaded",label:"Uploaded"},{value:"updated_at",labelKey:"sortModified",label:"Modified"}],Dl=[{value:"name",labelKey:"sortName",label:"Name"}];var Rl=Object.defineProperty,zl=Object.getOwnPropertyDescriptor,Gi=(t,e,s,i)=>{for(var a=i>1?void 0:i?zl(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Rl(e,s,a),a};let bs=class extends O{constructor(){super(...arguments),this.open=!1}updated(t){var e;super.updated(t),t.has("open")&&(this.open?this.dialog&&!this.dialog.open&&this.dialog.showModal():(e=this.dialog)!=null&&e.open&&this._animateClose())}_animateClose(){const t=this.dialog;if(t){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){t.close();return}t.classList.add("closing"),t.addEventListener("animationend",()=>{t.classList.remove("closing"),t.close()},{once:!0})}}_handleBackdropClick(t){t.target===this.dialog&&this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:"backdrop"},bubbles:!0,composed:!0}))}_handleCancel(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:"escape"},bubbles:!0,composed:!0}))}render(){return c`
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
    `}};bs.styles=I`
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
  `;Gi([f({type:Boolean})],bs.prototype,"open",2);Gi([pt("dialog")],bs.prototype,"dialog",2);bs=Gi([R("ap-modal")],bs);function Nl(t,e){let s;const i=((...a)=>{clearTimeout(s),s=setTimeout(()=>t(...a),e)});return i.cancel=()=>clearTimeout(s),i}const fe=I`
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;var jl=Object.defineProperty,Ul=Object.getOwnPropertyDescriptor,Ts=(t,e,s,i)=>{for(var a=i>1?void 0:i?Ul(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&jl(e,s,a),a};let Ot=class extends O{constructor(){super(...arguments),this.groups=[],this.selectedFilters={},this.t=(t,e)=>typeof e=="string"?e:t,this._open=!1,this._handleOutsideClick=t=>{this._open&&!t.composedPath().includes(this)&&(this._open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}_selectVariant(t,e){this.dispatchEvent(new CustomEvent("regional-change",{detail:{groupUuid:t,value:e},bubbles:!0,composed:!0}))}render(){const t=this.groups.length>0;return c`
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
    `}};Ot.styles=I`
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
  `;Ts([f({type:Array})],Ot.prototype,"groups",2);Ts([f({type:Object})],Ot.prototype,"selectedFilters",2);Ts([f({attribute:!1})],Ot.prototype,"t",2);Ts([w()],Ot.prototype,"_open",2);Ot=Ts([R("ap-regional-settings")],Ot);var Kl=Object.defineProperty,Bl=Object.getOwnPropertyDescriptor,ge=(t,e,s,i)=>{for(var a=i>1?void 0:i?Bl(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Kl(e,s,a),a};const Vl=[{value:"assets",labelKey:"tabAssets",labelDefault:"Assets",icon:"gallery-vertical-end"},{value:"folders",labelKey:"tabFolders",labelDefault:"Folders",icon:"folder-open"},{value:"labels",labelKey:"tabLabels",labelDefault:"Labels",icon:"tag"},{value:"collections",labelKey:"tabCollections",labelDefault:"Collections",icon:"layout-grid"}];let re=class extends O{constructor(){super(...arguments),this.activeTab="assets",this.tabs=["assets","folders"],this.isInsideLabel=!1,this.isInsideCollection=!1,this.isInsideCollectionLeaf=!1,this.viewMode="grid",this.searchQuery="",this.regionalGroups=[],this.regionalFilters={},this.hideClose=!1,this.enableAISearch=!1,this.isAISearchActive=!1,this.t=(t,e)=>typeof e=="string"?e:t,this._localSearch="",this._debouncedSearch=Nl(t=>{(t.length===0||t.length>=3)&&this.dispatchEvent(new CustomEvent("search-change",{detail:{value:t},bubbles:!0,composed:!0}))},300)}disconnectedCallback(){super.disconnectedCallback(),this._debouncedSearch.cancel()}willUpdate(t){t.has("searchQuery")&&(this._localSearch=this.searchQuery)}_handleInput(t){const e=t.target.value;this._localSearch=e,this._debouncedSearch(e)}_clearSearch(){this._localSearch="",this._debouncedSearch.cancel(),this.dispatchEvent(new CustomEvent("search-change",{detail:{value:""},bubbles:!0,composed:!0}))}_toggleView(){const t=this.viewMode==="grid"?"list":"grid";this.dispatchEvent(new CustomEvent("view-change",{detail:{mode:t},bubbles:!0,composed:!0}))}_handleTabChange(t){this.dispatchEvent(new CustomEvent("tab-change",{detail:{tab:t.detail.value},bubbles:!0,composed:!0}))}_handleRegionalChange(t){this.dispatchEvent(new CustomEvent("regional-change",{detail:t.detail,bubbles:!0,composed:!0}))}_toggleAISearch(){this.dispatchEvent(new CustomEvent("ai-search-toggle",{detail:{active:!this.isAISearchActive},bubbles:!0,composed:!0}))}_handleClose(){this.dispatchEvent(new CustomEvent("ap-close",{bubbles:!0,composed:!0}))}render(){const{t}=this,e=Vl.filter(s=>this.tabs.includes(s.value)).map(s=>({...s,label:t(s.labelKey,s.labelDefault)}));return c`
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
    `}};re.styles=[fe,I`
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
  `];ge([f()],re.prototype,"activeTab",2);ge([f({type:Array})],re.prototype,"tabs",2);ge([f({type:Boolean})],re.prototype,"isInsideLabel",2);ge([f({type:Boolean})],re.prototype,"isInsideCollection",2);ge([f({type:Boolean})],re.prototype,"isInsideCollectionLeaf",2);ge([f()],re.prototype,"viewMode",2);ge([f()],re.prototype,"searchQuery",2);ge([f({type:Array})],re.prototype,"regionalGroups",2);ge([f({type:Object})],re.prototype,"regionalFilters",2);ge([f({type:Boolean})],re.prototype,"hideClose",2);ge([f({type:Boolean,reflect:!0,attribute:"ai-search"})],re.prototype,"enableAISearch",2);ge([f({type:Boolean})],re.prototype,"isAISearchActive",2);ge([f({attribute:!1})],re.prototype,"t",2);ge([w()],re.prototype,"_localSearch",2);re=ge([R("ap-header")],re);var Hl=Object.defineProperty,ql=Object.getOwnPropertyDescriptor,Qi=(t,e,s,i)=>{for(var a=i>1?void 0:i?ql(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Hl(e,s,a),a};let ys=class extends O{constructor(){super(...arguments),this.items=[],this.rootLabel="Root"}_navigate(t){this.dispatchEvent(new CustomEvent("breadcrumb-navigate",{detail:{uuid:t},bubbles:!0,composed:!0}))}render(){return this.items.length===0?c``:c`
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <button @click=${()=>this._navigate("")}>${this.rootLabel}</button>
        ${this.items.map((t,e)=>c`
            <ap-icon name="chevron-right" .size=${14}></ap-icon>
            ${e<this.items.length-1?c`<button @click=${()=>this._navigate(t.uuid)}>${t.name}</button>`:c`<span class="current">${t.name}</span>`}
          `)}
      </nav>
    `}};ys.styles=I`
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
  `;Qi([f({type:Array})],ys.prototype,"items",2);Qi([f()],ys.prototype,"rootLabel",2);ys=Qi([R("ap-breadcrumb")],ys);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gl={ATTRIBUTE:1,CHILD:2,ELEMENT:6},Ql=t=>(...e)=>({_$litDirective$:t,values:e});class Wl{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,i){this._$Ct=e,this._$AM=s,this._$Ci=i}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}const Ei=t=>t.includes("-")?t:t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`);class Yl extends Wl{constructor(e){if(super(e),this._appliedProps=new Set,e.type!==Gl.ELEMENT)throw new Error("cspStyle must be used as an element directive: <el ${cspStyle({...})}>")}render(e){return We}update(e,[s]){if(s===this._lastStyles)return We;this._lastStyles=s;const{style:i}=e.element,a=s??{};for(const r of this._appliedProps)(!(r in a)||a[r]==null||a[r]==="")&&(i.removeProperty(Ei(r)),this._appliedProps.delete(r));for(const[r,o]of Object.entries(a))o!=null&&o!==""?(i.setProperty(Ei(r),o),this._appliedProps.add(r)):this._appliedProps.has(r)&&(i.removeProperty(Ei(r)),this._appliedProps.delete(r));return We}}const K=Ql(Yl);var Xl=Object.defineProperty,Jl=Object.getOwnPropertyDescriptor,Wi=(t,e,s,i)=>{for(var a=i>1?void 0:i?Jl(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Xl(e,s,a),a};let _s=class extends O{constructor(){super(...arguments),this.title="",this.open=!1}render(){return this.open?c`
      <div class="popover">
        ${this.title?c`<div class="title">${this.title}</div>`:""}
        <slot></slot>
      </div>
    `:c``}};_s.styles=I`
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
  `;Wi([f()],_s.prototype,"title",2);Wi([f({type:Boolean})],_s.prototype,"open",2);_s=Wi([R("ap-filter-popover")],_s);var Zl=Object.defineProperty,ec=Object.getOwnPropertyDescriptor,Jt=(t,e,s,i)=>{for(var a=i>1?void 0:i?ec(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Zl(e,s,a),a};function Ja(t){var i;const e=new Map;for(const a of t){const r=a.category||a.value.split("_")[0];if(!e.has(r)){const n=ei.find(l=>l.value===r);e.set(r,{key:r,labelKey:(n==null?void 0:n.labelKey)||r,label:(n==null?void 0:n.label)||r.charAt(0).toUpperCase()+r.slice(1),icon:(n==null?void 0:n.icon)||"file",extensions:[],totalCount:0})}const o=e.get(r);o.extensions.push({value:a.value,label:a.label||((i=a.value.split("_").pop())==null?void 0:i.toUpperCase())||a.value,count:a.count}),o.totalCount+=a.count}const s=ei.map(a=>a.value);return[...e.values()].sort((a,r)=>{const o=s.indexOf(a.key),n=s.indexOf(r.key);return(o===-1?999:o)-(n===-1?999:n)})}let lt=class extends O{constructor(){super(...arguments),this.selected=[],this.fileTypes=[],this.t=(t,e)=>typeof e=="string"?e:t,this._search="",this._expanded=new Set}_extValues(t){return t.extensions.map(e=>e.value)}_isGroupFullySelected(t){if(this.selected.includes(t.key))return!0;const e=this._extValues(t);return e.length>0&&e.every(s=>this.selected.includes(s))}_isGroupPartial(t){if(this.selected.includes(t.key))return!1;const e=this._extValues(t),s=e.filter(i=>this.selected.includes(i)).length;return s>0&&s<e.length}_isExtSelected(t,e){return this.selected.includes(e)||this.selected.includes(t)}_toggleGroup(t){const e=this._extValues(t),s=this._isGroupFullySelected(t);let i;if(s){const a=new Set([t.key,...e]);i=this.selected.filter(r=>!a.has(r))}else{const a=new Set(e);i=this.selected.filter(r=>!a.has(r)),i.push(t.key)}this._emit(i)}_toggleExt(t,e){const s=this._extValues(e);let i=[...this.selected];i.includes(e.key)&&(i=i.filter(a=>a!==e.key),i.push(...s)),i.includes(t)?i=i.filter(a=>a!==t):(i.push(t),s.every(a=>i.includes(a))&&(i=i.filter(a=>!s.includes(a)),i.push(e.key))),this._emit(i)}_clearAll(){this._emit([])}_emit(t){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:C.TYPE,values:t,operator:U.IS},bubbles:!0,composed:!0}))}_toggleExpand(t){const e=new Set(this._expanded);e.has(t)?e.delete(t):e.add(t),this._expanded=e}_filteredGroups(t){const e=this._search.toLowerCase().trim();return e?t.map(s=>{if(s.label.toLowerCase().includes(e)||s.key.toLowerCase().includes(e))return s;const a=s.extensions.filter(r=>r.label.toLowerCase().includes(e)||r.value.toLowerCase().includes(e));return a.length===0?null:{...s,extensions:a}}).filter(s=>s!==null):t}_toggleCategory(t){const e=this.selected.includes(t)?this.selected.filter(s=>s!==t):[...this.selected,t];this._emit(e)}updated(t){if(t.has("fileTypes")&&this.fileTypes.length>0){const e=Ja(this.fileTypes),s=new Set(this._expanded);for(const i of e)(this._isGroupFullySelected(i)||this._isGroupPartial(i))&&s.add(i.key);this._expanded=s}}render(){if(this.fileTypes.length===0)return this._renderFallback();const t=Ja(this.fileTypes),e=this._filteredGroups(t),s=this.selected.length>0;return c`
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
        ${ei.map(t=>c`
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
    `}};lt.styles=I`
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
  `;Jt([f({type:Array})],lt.prototype,"selected",2);Jt([f({type:Array})],lt.prototype,"fileTypes",2);Jt([f({attribute:!1})],lt.prototype,"t",2);Jt([w()],lt.prototype,"_search",2);Jt([w()],lt.prototype,"_expanded",2);lt=Jt([R("ap-filter-type")],lt);const et=I`
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
`;var tc=Object.defineProperty,sc=Object.getOwnPropertyDescriptor,ht=(t,e,s,i)=>{for(var a=i>1?void 0:i?sc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&tc(e,s,a),a};function Fi(t){return t.toISOString().split("T")[0]}let Ke=class extends O{constructor(){super(...arguments),this.filterKey=C.DATE,this.t=(t,e)=>typeof e=="string"?e:t,this.field="created",this.kind=null,this.preset="",this.from="",this.to=""}get _isLicenseExpiry(){return this.filterKey===C.LICENSE_EXPIRY}get _rangeOptions(){return(this._isLicenseExpiry?Cr:Hi).map(e=>({...e,label:this.t(e.labelKey,e.label)}))}get _fieldOptions(){return Sr.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _todayStr(){return Fi(new Date)}get _hasFilter(){return!!(this.kind||this.preset||this.from||this.to)}_kindFromValue(t){return["before","after","between","specific"].includes(t)?t:"preset"}_selectField(t){this.field=t,this._dispatchChange()}_selectPreset(t){if(!t){this._clearAll();return}const e=this._kindFromValue(t);if(this.kind=e,this.preset=t,["before","after","between","specific"].includes(t)){this.from="",this.to="",this.requestUpdate();return}const s=Ar(t);s&&(this.from=s.from,this.to=s.to??""),this._dispatchChange()}_clearAll(){this.field="created",this.kind=null,this.preset="",this.from="",this.to="",this._dispatchChange()}_dispatchChange(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:{field:this.field,kind:this.kind,preset:this.preset,from:this.from,to:this.to}},bubbles:!0,composed:!0}))}_handleDateInput(t,e){const s=e.target.value,i=s?new Date(s+"T00:00:00").toISOString():"";if(t==="from"?this.from=i:this.to=i,this.preset==="specific"&&t==="from"&&i){const a=new Date(s+"T23:59:59");this.to=a.toISOString()}this.preset==="after"&&t==="from"&&i&&(this.to=new Date().toISOString()),this.preset==="before"&&t==="to"&&i&&(this.from=new Date(0).toISOString()),this._dispatchChange()}_renderDateTypeSection(){return this._isLicenseExpiry?v:c`
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
    `}_renderDateInputs(){const t=this.preset;if(!["before","after","between","specific"].includes(t))return v;const e=this.from?Fi(new Date(this.from)):"",s=this.to?Fi(new Date(this.to)):"",i=this._todayStr;return t==="specific"?c`
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
    `}};Ke.styles=[et,I`
    .date-inputs {
      margin-top: 4px;
    }
  `];ht([f()],Ke.prototype,"filterKey",2);ht([f({attribute:!1})],Ke.prototype,"t",2);ht([f()],Ke.prototype,"field",2);ht([f()],Ke.prototype,"kind",2);ht([f()],Ke.prototype,"preset",2);ht([f()],Ke.prototype,"from",2);ht([f()],Ke.prototype,"to",2);Ke=ht([R("ap-filter-date")],Ke);var ic=Object.defineProperty,ac=Object.getOwnPropertyDescriptor,Lt=(t,e,s,i)=>{for(var a=i>1?void 0:i?ac(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&ic(e,s,a),a};let Ye=class extends O{constructor(){super(...arguments),this.tags=[],this.selected=[],this.filterKey=C.TAGS,this.t=(t,e)=>typeof e=="string"?e:t,this._search=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var t;return(t=this._searchInput)==null?void 0:t.focus()})}get _suggestedTags(){return this.tags.filter(t=>t.primary)}get _otherTags(){return this.tags.filter(t=>!t.primary)}get _atLimit(){return this.selected.length>=$i}get _isSearching(){return this._search.trim().length>0}_toggle(t){const e=this.selected.includes(t);if(!e&&this._atLimit)return;const s=e?this.selected.filter(i=>i!==t):[...this.selected,t];this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:s,operator:U.IS},bubbles:!0,composed:!0}))}_remove(t){const e=this.selected.filter(s=>s!==t);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:e,operator:U.IS},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:[],operator:U.IS},bubbles:!0,composed:!0}))}_onSearchInput(t){this._search=t.target.value}_clearSearch(){this._search=""}_getTagBySid(t){return this.tags.find(e=>e.sid===t)}_renderTagItem(t){const e=this.selected.includes(t.sid),s=!e&&this._atLimit;return c`
      <div
        class="tag-item ${s?"disabled":""}"
        title=${s?`You can select up to ${$i} tags`:v}
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
                <span>You can select up to ${$i} tags.</span>
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
    `}};Ye.styles=[fe,et,I`
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
  `];Lt([f({type:Array})],Ye.prototype,"tags",2);Lt([f({type:Array})],Ye.prototype,"selected",2);Lt([f()],Ye.prototype,"filterKey",2);Lt([f({attribute:!1})],Ye.prototype,"t",2);Lt([pt(".tag-search")],Ye.prototype,"_searchInput",2);Lt([w()],Ye.prototype,"_search",2);Ye=Lt([R("ap-filter-tags")],Ye);var rc=Object.defineProperty,oc=Object.getOwnPropertyDescriptor,Zt=(t,e,s,i)=>{for(var a=i>1?void 0:i?oc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&rc(e,s,a),a};let ct=class extends O{constructor(){super(...arguments),this.labels=[],this.selected=[],this.t=(t,e)=>typeof e=="string"?e:t,this._search=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var t;return(t=this._searchInput)==null?void 0:t.focus()})}get _atLimit(){return this.selected.length>=os}get _isSearching(){return this._search.trim().length>0}_toggle(t){const e=this.selected.includes(t);if(!e&&this._atLimit)return;const s=e?this.selected.filter(i=>i!==t):[...this.selected,t];this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:C.LABELS,values:s,operator:U.IS},bubbles:!0,composed:!0}))}_remove(t){const e=this.selected.filter(s=>s!==t);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:C.LABELS,values:e,operator:U.IS},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:C.LABELS,values:[],operator:U.IS},bubbles:!0,composed:!0}))}_onSearchInput(t){this._search=t.target.value}_clearSearch(){this._search=""}_getLabelBySid(t){return this.labels.find(e=>e.sid===t)}_renderLabelItem(t){const e=this.selected.includes(t.sid),s=!e&&this._atLimit;return c`
      <div
        class="label-item ${s?"disabled":""}"
        title=${s?this.t("labelsLimitTitle",`You can select up to ${os} labels`,{count:os}):v}
        @click=${()=>!s&&this._toggle(t.sid)}
      >
        <ap-checkbox ?checked=${e}></ap-checkbox>
        <span class="label-icon" ${K({color:t.color})}>
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
                        <span class="chip-icon" ${K({color:i.color})}>
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
                <span>${this.t("labelsLimitAlert",`You can select up to ${os} labels.`,{count:os})}</span>
              </div>
            `:v}
      </div>
    `}};ct.styles=[et,I`
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
  `];Zt([f({type:Array})],ct.prototype,"labels",2);Zt([f({type:Array})],ct.prototype,"selected",2);Zt([f({attribute:!1})],ct.prototype,"t",2);Zt([pt(".search-input")],ct.prototype,"_searchInput",2);Zt([w()],ct.prototype,"_search",2);ct=Zt([R("ap-filter-labels")],ct);var nc=Object.defineProperty,lc=Object.getOwnPropertyDescriptor,It=(t,e,s,i)=>{for(var a=i>1?void 0:i?lc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&nc(e,s,a),a};const Oi=3,zi=/^#[0-9A-Fa-f]{6}$/;function cc(t){const e=t.trim().split(/\s+/);return e.length<1||!zi.test(e[0])?null:{hex:e[0],tolerance:e[1]||Bs,coverage:e[3]||Ks}}let Xe=class extends O{constructor(){super(...arguments),this.values=[],this.t=(t,e)=>typeof e=="string"?e:t,this._colors=[],this._advanced=!1,this._showPalette=!1,this._initialized=!1}get _hasSelection(){return this._colors.length>0}get _selectedHexes(){return new Set(this._colors.map(t=>t.hex))}willUpdate(t){if(t.has("values")){const e=[];for(const s of this.values){const i=cc(s);i&&e.push(i)}(!this._initialized||this.values.length===0&&this._colors.length>0)&&(this._colors=e,e.length>0&&(this._advanced=e.some(s=>s.tolerance!==Bs||s.coverage!==Ks)),this._initialized=!0)}}_selectColor(t){if(!zi.test(t))return;const e=this._colors.findIndex(s=>s.hex.toLowerCase()===t.toLowerCase());if(e>=0){this._removeColor(e);return}this._colors.length>=Oi||(this._colors=[...this._colors,{hex:t,tolerance:Bs,coverage:Ks}],this._showPalette=!1,this._dispatchChange())}_removeColor(t){this._colors=this._colors.filter((e,s)=>s!==t),this._dispatchChange()}_clearAll(){this._colors=[],this._showPalette=!1,this._dispatchChange()}_toggleAdvanced(){this._advanced=!this._advanced,this._colors.length>0&&this._dispatchChange()}_handleHexInput(t,e){let i=e.target.value.trim();if(i.startsWith("#")||(i="#"+i),!zi.test(i)||this._colors.some((o,n)=>n!==t&&o.hex.toLowerCase()===i.toLowerCase()))return;const r=[...this._colors];r[t]={...r[t],hex:i},this._colors=r,this._dispatchChange()}_handleToleranceChange(t,e){const s=[...this._colors];s[t]={...s[t],tolerance:e.detail.value},this._colors=s,this._dispatchChange()}_handleCoverageInput(t,e){const s=e.target.value,i=parseInt(s,10);if(!isNaN(i)&&i>=1&&i<=100){const a=[...this._colors];a[t]={...a[t],coverage:String(i)},this._colors=a,this._dispatchChange()}}_showAddPalette(){this._showPalette=!0}_dispatchChange(){if(this._colors.length===0){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"color",values:"",operator:":"},bubbles:!0,composed:!0}));return}const t=this._colors.map(e=>{const s=this._advanced?e.tolerance:Bs,i=this._advanced?e.coverage:Ks;return`${e.hex} ${s} ${s} ${i}`});this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"color",values:t,operator:":"},bubbles:!0,composed:!0}))}_renderPalette(){const t=this._selectedHexes,e=this._colors.length>=Oi;return c`
      <div class="palette">
        ${qn.map(s=>{const i=t.has(s),a=e&&!i;return c`
              <button
                class="swatch ${i?"selected":""} ${a?"disabled":""}"
                ${K({background:s,...s==="#ffffff"?{border:"1px solid #e4e4e7"}:{}})}
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
            <div class="color-swatch-small" ${K({background:t.hex})}></div>
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
          <div class="color-swatch-small" ${K({background:t.hex})}></div>
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
      `}render(){const t=this._colors.length===0||this._showPalette,e=this._colors.length<Oi&&!this._showPalette;return c`
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
    `}};Xe.styles=[fe,et,I`
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
  `];It([f({type:Array})],Xe.prototype,"values",2);It([f({attribute:!1})],Xe.prototype,"t",2);It([w()],Xe.prototype,"_colors",2);It([w()],Xe.prototype,"_advanced",2);It([w()],Xe.prototype,"_showPalette",2);It([w()],Xe.prototype,"_initialized",2);Xe=It([R("ap-filter-color")],Xe);var dc=Object.defineProperty,pc=Object.getOwnPropertyDescriptor,ut=(t,e,s,i)=>{for(var a=i>1?void 0:i?pc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&dc(e,s,a),a};const hc={KB:1/1e3,MB:1,GB:1e3},uc=[{value:"MB",label:"MB"},{value:"GB",label:"GB"}];let Be=class extends O{constructor(){super(...arguments),this.min=0,this.max=0,this.t=(t,e)=>typeof e=="string"?e:t,this._minVal="",this._maxVal="",this._unit="MB",this._initialized=!1}willUpdate(t){!this._initialized&&(t.has("min")||t.has("max"))&&(this._initialized=!0,this.min>0&&(this._minVal=String(this.min)),this.max>0&&(this._maxVal=String(this.max)))}get _hasFilter(){return this._minVal!==""||this._maxVal!==""}_clearAll(){this._minVal="",this._maxVal="",this._emitChange()}_setUnit(t){this._unit=t.detail.value,this._emitChange()}_emitChange(){const t=hc[this._unit],e=this._minVal!==""?parseFloat((parseFloat(this._minVal)*t).toFixed(2)).toString():null,s=this._maxVal!==""?parseFloat((parseFloat(this._maxVal)*t).toFixed(2)).toString():null;let i;if(e!==null&&s!==null)i=`${e}..${s}`;else if(e!==null)i=`${e}..`;else if(s!==null)i=`..${s}`;else{this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:C.SIZE,values:[],operator:U.RANGE},bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:C.SIZE,values:[i],operator:U.RANGE},bubbles:!0,composed:!0}))}_onMinInput(t){this._minVal=t.target.value,this._emitChange()}_onMaxInput(t){this._maxVal=t.target.value,this._emitChange()}render(){return c`
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
    `}};Be.styles=[et,I`
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
    `];ut([f({type:Number})],Be.prototype,"min",2);ut([f({type:Number})],Be.prototype,"max",2);ut([f({attribute:!1})],Be.prototype,"t",2);ut([w()],Be.prototype,"_minVal",2);ut([w()],Be.prototype,"_maxVal",2);ut([w()],Be.prototype,"_unit",2);ut([w()],Be.prototype,"_initialized",2);Be=ut([R("ap-filter-size")],Be);var fc=Object.defineProperty,gc=Object.getOwnPropertyDescriptor,Ps=(t,e,s,i)=>{for(var a=i>1?void 0:i?gc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&fc(e,s,a),a};const vc=rt`
  <svg width="20" height="20" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.66666 1.9987C2.29847 1.9987 1.99999 2.29717 1.99999 2.66536L1.99999 13.332C1.99999 13.7002 2.29847 13.9987 2.66666 13.9987L9.33332 13.9987C9.70151 13.9987 9.99999 13.7002 9.99999 13.332L9.99999 2.66536C9.99999 2.29717 9.70151 1.9987 9.33332 1.9987L2.66666 1.9987ZM9.33332 0.665364C10.4379 0.665364 11.3333 1.56079 11.3333 2.66536L11.3333 13.332C11.3333 14.4366 10.4379 15.332 9.33332 15.332L2.66666 15.332C1.56209 15.332 0.666656 14.4366 0.666656 13.332L0.666656 2.66536C0.666656 1.56079 1.56209 0.665364 2.66666 0.665364L9.33332 0.665364Z" fill="#9747FF"/>
    <path d="M5.33332 4.65885C5.33332 4.29066 5.6318 3.99219 5.99999 3.99219C6.36818 3.99219 6.66666 4.29066 6.66666 4.65885L6.66666 4.66536C6.66666 5.03355 6.36818 5.33203 5.99999 5.33203C5.6318 5.33203 5.33332 5.03355 5.33332 4.66536L5.33332 4.65885Z" fill="#9747FF"/>
    <path d="M5.33332 11.3255C5.33332 10.9573 5.6318 10.6589 5.99999 10.6589C6.36818 10.6589 6.66666 10.9573 6.66666 11.3255L6.66666 11.332C6.66666 11.7002 6.36818 11.9987 5.99999 11.9987C5.6318 11.9987 5.33332 11.7002 5.33332 11.332L5.33332 11.3255Z" fill="#9747FF"/>
  </svg>
`,mc=rt`
  <svg width="20" height="20" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2.66797C14 2.29978 13.7015 2.0013 13.3333 2.0013H2.66666C2.29847 2.0013 1.99999 2.29978 1.99999 2.66797V9.33463C1.99999 9.70282 2.29847 10.0013 2.66666 10.0013H13.3333C13.7015 10.0013 14 9.70282 14 9.33463V2.66797ZM15.3333 9.33463C15.3333 10.4392 14.4379 11.3346 13.3333 11.3346H2.66666C1.56209 11.3346 0.666656 10.4392 0.666656 9.33463V2.66797C0.666656 1.5634 1.56209 0.667969 2.66666 0.667969H13.3333C14.4379 0.667969 15.3333 1.5634 15.3333 2.66797V9.33463Z" fill="#65A30D"/>
    <path d="M11.3398 5.33464C11.708 5.33464 12.0065 5.63311 12.0065 6.0013C12.0065 6.36949 11.708 6.66797 11.3398 6.66797H11.3333C10.9651 6.66797 10.6667 6.36949 10.6667 6.0013C10.6667 5.63311 10.9651 5.33464 11.3333 5.33464H11.3398Z" fill="#65A30D"/>
    <path d="M4.67317 5.33464C5.04136 5.33464 5.33983 5.63311 5.33983 6.0013C5.33983 6.36949 5.04136 6.66797 4.67317 6.66797H4.66666C4.29847 6.66797 3.99999 6.36949 3.99999 6.0013C3.99999 5.63311 4.29847 5.33464 4.66666 5.33464H4.67317Z" fill="#65A30D"/>
  </svg>
`,bc=rt`
  <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.3333 2.33203C12.3333 1.96384 12.0349 1.66536 11.6667 1.66536H2.33334C1.96515 1.66536 1.66668 1.96384 1.66668 2.33203V11.6654C1.66668 12.0336 1.96515 12.332 2.33334 12.332H11.6667C12.0349 12.332 12.3333 12.0336 12.3333 11.6654V2.33203ZM13.6667 11.6654C13.6667 12.7699 12.7712 13.6654 11.6667 13.6654H2.33334C1.22877 13.6654 0.333344 12.7699 0.333344 11.6654V2.33203C0.333344 1.22746 1.22877 0.332031 2.33334 0.332031H11.6667C12.7712 0.332031 13.6667 1.22746 13.6667 2.33203V11.6654Z" fill="#6366F1"/>
    <path d="M9.67319 3.66536C10.0414 3.66536 10.3399 3.96384 10.3399 4.33203C10.3399 4.70022 10.0414 4.9987 9.67319 4.9987H9.66668C9.29849 4.9987 9.00001 4.70022 9.00001 4.33203C9.00001 3.96384 9.29849 3.66536 9.66668 3.66536H9.67319Z" fill="#6366F1"/>
    <path d="M4.33985 3.66536C4.70804 3.66536 5.00652 3.96384 5.00652 4.33203C5.00652 4.70022 4.70804 4.9987 4.33985 4.9987H4.33334C3.96515 4.9987 3.66668 4.70022 3.66668 4.33203C3.66668 3.96384 3.96515 3.66536 4.33334 3.66536H4.33985Z" fill="#6366F1"/>
    <path d="M4.33985 8.9987C4.70804 8.9987 5.00652 9.29718 5.00652 9.66537C5.00652 10.0336 4.70804 10.332 4.33985 10.332H4.33334C3.96515 10.332 3.66668 10.0336 3.66668 9.66537C3.66668 9.29718 3.96515 8.9987 4.33334 8.9987H4.33985Z" fill="#6366F1"/>
    <path d="M9.67319 8.9987C10.0414 8.9987 10.3399 9.29718 10.3399 9.66537C10.3399 10.0336 10.0414 10.332 9.67319 10.332H9.66668C9.29849 10.332 9.00001 10.0336 9.00001 9.66537C9.00001 9.29718 9.29849 8.9987 9.66668 8.9987H9.67319Z" fill="#6366F1"/>
  </svg>
`,yc=rt`
  <svg width="20" height="20" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2.33203C14 1.96384 13.7015 1.66536 13.3333 1.66536H2.66666C2.29847 1.66536 1.99999 1.96384 1.99999 2.33203V5.66536C1.99999 6.03355 2.29847 6.33203 2.66666 6.33203H13.3333C13.7015 6.33203 14 6.03355 14 5.66536V2.33203ZM15.3333 5.66536C15.3333 6.76993 14.4379 7.66536 13.3333 7.66536H2.66666C1.56209 7.66536 0.666656 6.76993 0.666656 5.66536V2.33203C0.666656 1.22746 1.56209 0.332031 2.66666 0.332031H13.3333C14.4379 0.332031 15.3333 1.22746 15.3333 2.33203V5.66536Z" fill="#4BA3AD"/>
    <path d="M11.3398 3.33203C11.708 3.33203 12.0065 3.63051 12.0065 3.9987C12.0065 4.36689 11.708 4.66536 11.3398 4.66536H11.3333C10.9651 4.66536 10.6667 4.36689 10.6667 3.9987C10.6667 3.63051 10.9651 3.33203 11.3333 3.33203H11.3398Z" fill="#4BA3AD"/>
    <path d="M4.67317 3.33203C5.04136 3.33203 5.33983 3.63051 5.33983 3.9987C5.33983 4.36689 5.04136 4.66536 4.67317 4.66536H4.66666C4.29847 4.66536 3.99999 4.36689 3.99999 3.9987C3.99999 3.63051 4.29847 3.33203 4.66666 3.33203H4.67317Z" fill="#4BA3AD"/>
  </svg>
`,_c={portrait:vc,landscape:mc,square:bc,panorama:yc};let Tt=class extends O{constructor(){super(...arguments),this.selectedResolution=[],this.selectedOrientation=[],this.selectedFaces=[],this.t=(t,e)=>typeof e=="string"?e:t}get _hasSelection(){return this.selectedResolution.length>0||this.selectedOrientation.length>0||this.selectedFaces.length>0}_toggle(t,e){return t.includes(e)?t.filter(s=>s!==e):[...t,e]}_toggleResolution(t){this.selectedResolution=this._toggle(this.selectedResolution,t),this._dispatchChange()}_toggleOrientation(t){this.selectedOrientation=this._toggle(this.selectedOrientation,t),this._dispatchChange()}_toggleFaces(t){this.selectedFaces=this._toggle(this.selectedFaces,t),this._dispatchChange()}_clearAll(){this.selectedResolution=[],this.selectedOrientation=[],this.selectedFaces=[],this._dispatchChange()}_dispatchChange(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"image",values:{resolution:this.selectedResolution,orientation:this.selectedOrientation,faces:this.selectedFaces}},bubbles:!0,composed:!0}))}render(){return c`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!this._hasSelection}
          @click=${this._clearAll}
        >${this.t("clearAll","Clear all")}</button>

        <div class="filter-section">
          <span class="section-label">${this.t("imageResolution","Resolution")}</span>
          <div class="options-horizontal">
            ${Kn.map(t=>c`
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
            ${Bn.map(t=>c`
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
            ${Vn.map(t=>c`
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
    `}};Tt.styles=[et,I`
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
  `];Ps([f({type:Array})],Tt.prototype,"selectedResolution",2);Ps([f({type:Array})],Tt.prototype,"selectedOrientation",2);Ps([f({type:Array})],Tt.prototype,"selectedFaces",2);Ps([f({attribute:!1})],Tt.prototype,"t",2);Tt=Ps([R("ap-filter-image")],Tt);var xc=Object.defineProperty,$c=Object.getOwnPropertyDescriptor,te=(t,e,s,i)=>{for(var a=i>1?void 0:i?$c(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&xc(e,s,a),a};function V(t){return`${pi[t.type]||""}${t.key}`}let X=class extends O{constructor(){super(...arguments),this.fields=[],this.appliedFilters={},this.visibleFields=[],this.mode="full",this.activeFieldKey="",this.pinnedFields=[],this.appliedMetadata={},this.t=(t,e)=>typeof e=="string"?e:t,this._showFieldSelection=!1,this._fieldSearch="",this._collapsedFields=new Set,this._tagInputs={},this._tagSuggestions={},this._tagLoading={},this._datePresets={},this._dateFroms={},this._dateTos={},this._specificModeFields=new Set,this._selectSearches={},this._tagDebounceTimers={}}get _tTextOperatorOptions(){return ki.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tNumberOperatorOptions(){return Ci.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tSingleSelectOperatorOptions(){return it.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tMultiSelectOperatorOptions(){return Si.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tBooleanOptions(){return Xn.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tEmptyOptions(){return ti.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tEmptyAndSpecificOptions(){return Yn.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>this._focusSearch())}disconnectedCallback(){super.disconnectedCallback();for(const t of Object.values(this._tagDebounceTimers))clearTimeout(t)}_focusSearch(){const t=this.renderRoot.querySelector(".field-search, .search-input");t==null||t.focus()}get _atFieldLimit(){return this.visibleFields.length>=Ns}_getField(t){return this.fields.find(e=>V(e)===t)}_getUIType(t){return Jn[t.type]}_getApplied(t){return this.appliedMetadata[t]||this.appliedFilters[t]||{}}_isSpecialValue(t){return!t||t.length!==1?!1:t[0]===Te||t[0]===Pe}_getContentMode(t){var s,i;const e=this._getApplied(t);return((s=e.values)==null?void 0:s[0])===Te?Te:((i=e.values)==null?void 0:i[0])===Pe?Pe:this._specificModeFields.has(t)||e.values&&e.values.length>0?$t:""}_emitFilterChange(t,e,s){const i=V(t);this.dispatchEvent(new CustomEvent("metadata-filter-change",{detail:{fieldKey:i,operator:e,values:s,metadataType:t.type},bubbles:!0,composed:!0}))}_emitFieldToggle(t,e){const s=V(t);this.dispatchEvent(new CustomEvent("metadata-field-toggle",{detail:{fieldKey:s,visible:e},bubbles:!0,composed:!0}))}_emitFieldSelect(t){const e=V(t);!this.visibleFields.includes(e)&&this._atFieldLimit||(this.visibleFields.includes(e)||this._emitFieldToggle(t,!0),this.dispatchEvent(new CustomEvent("metadata-field-select",{detail:{fieldKey:e},bubbles:!0,composed:!0})))}_emitPin(t,e){this.dispatchEvent(new CustomEvent("metadata-pin",{detail:{fieldKey:t,pinned:e},bubbles:!0,composed:!0}))}_openFieldSelection(){this._showFieldSelection=!0,this._fieldSearch=""}_closeFieldSelection(){this._showFieldSelection=!1,this._fieldSearch=""}_addField(t){if(this._atFieldLimit)return;const e=V(t);this.visibleFields.includes(e)||this._emitFieldToggle(t,!0)}_removeField(t){this._emitFieldToggle(t,!1),this._emitFilterChange(t,void 0,[])}_toggleCollapse(t){const e=new Set(this._collapsedFields);e.has(t)?e.delete(t):e.add(t),this._collapsedFields=e}_onOperatorChange(t,e){const i=this._getApplied(V(t)).values||[];this._emitFilterChange(t,e,i)}_onContentModeChange(t,e){const s=V(t);if(e===$t){const i=new Set(this._specificModeFields);i.add(s),this._specificModeFields=i;const a=this._getApplied(s);this._isSpecialValue(a.values)&&this._emitFilterChange(t,a.operator,[])}else{if(this._specificModeFields.has(s)){const i=new Set(this._specificModeFields);i.delete(s),this._specificModeFields=i}if(e)this._onEmptyOption(t,e);else{const i=this._getApplied(s);this._emitFilterChange(t,i.operator,[])}}}_clearFieldFilter(t){const e=V(t);if(this._specificModeFields.has(e)){const d=new Set(this._specificModeFields);d.delete(e),this._specificModeFields=d}const{[e]:s,...i}=this._datePresets;this._datePresets=i;const{[e]:a,...r}=this._dateFroms;this._dateFroms=r;const{[e]:o,...n}=this._dateTos;this._dateTos=n;const{[e]:l,...p}=this._selectSearches;this._selectSearches=p;const{[e]:h,...u}=this._tagInputs;this._tagInputs=u,this._emitFilterChange(t,void 0,[])}_onTextInput(t,e){const s=e.target.value,a=this._getApplied(V(t)).operator||ki[0].value;this._emitFilterChange(t,a,s?[s]:[])}_onNumberInput(t,e,s){const i=e.target.value,a=V(t),r=this._getApplied(a),o=r.operator||Ci[0].value,n=[...r.values||[]];s===0?n[0]=i:n[1]=i;const l=n.filter(p=>p!==""&&p!==void 0);if(l.length>0){const p=t.type===L.DECIMAL2;if(!l.every(u=>p?!isNaN(parseFloat(u)):/^-?\d+$/.test(u)))return}this._emitFilterChange(t,o,n)}_onBooleanSelect(t,e){var a;const s=this._getApplied(V(t)),i=(a=s.values)==null?void 0:a[0];!e||i===e?this._emitFilterChange(t,void 0,[]):this._emitFilterChange(t,s.operator,[e])}_onSelectOneToggle(t,e){const s=V(t),i=this._getApplied(s),a=i.operator||it[0].value,r=i.values||[];r.length===1&&r[0]===e?this._emitFilterChange(t,a,[]):this._emitFilterChange(t,a,[e])}_onMultiSelectToggle(t,e){const s=V(t),i=this._getApplied(s),a=i.operator||Si[0].value,r=i.values||[],o=r.includes(e)?r.filter(n=>n!==e):[...r,e];this._emitFilterChange(t,a,o)}_onTagKeydown(t,e){const s=V(t);(e.key==="Enter"||e.key===",")&&(e.preventDefault(),this._commitTagInput(t,s))}_onTagInput(t,e,s){const i=s.target.value;if(i.includes(",")){const a=i.replace(/,/g,"").trim();a&&(this._tagInputs={...this._tagInputs,[e]:a},this._commitTagInput(t,e));return}this._tagInputs={...this._tagInputs,[e]:i},this._fetchTagSuggestions(t,e,i.trim())}_selectTagSuggestion(t,e){const s=V(t),i=this._getApplied(s),a=i.operator||it[0].value,r=i.values||[];r.includes(e)||this._emitFilterChange(t,a,[...r,e]),this._tagInputs={...this._tagInputs,[s]:""},this._tagSuggestions={...this._tagSuggestions,[s]:[]}}_fetchTagSuggestions(t,e,s){if(this._tagDebounceTimers[e]&&clearTimeout(this._tagDebounceTimers[e]),!s||!this.apiClient){this._tagSuggestions={...this._tagSuggestions,[e]:[]},this._tagLoading={...this._tagLoading,[e]:!1};return}this._tagDebounceTimers[e]=setTimeout(async()=>{this._tagLoading={...this._tagLoading,[e]:!0};try{const i=`_${t.ckey||t.key}`,a=await this.apiClient.request("/metadata/autocomplete",{q:s,meta_key:i});(this._tagInputs[e]||"").trim()===s&&(this._tagSuggestions={...this._tagSuggestions,[e]:(a.tags||[]).map(r=>r.tag)})}catch{this._tagSuggestions={...this._tagSuggestions,[e]:[]}}finally{this._tagLoading={...this._tagLoading,[e]:!1}}},300)}_commitTagInput(t,e){const s=(this._tagInputs[e]||"").trim();if(!s)return;const i=this._getApplied(e),a=i.operator||it[0].value,r=i.values||[];r.includes(s)||this._emitFilterChange(t,a,[...r,s]),this._tagInputs={...this._tagInputs,[e]:""},this._tagSuggestions={...this._tagSuggestions,[e]:[]}}_removeTag(t,e){const s=V(t),i=this._getApplied(s),a=i.operator||it[0].value,r=i.values||[];this._emitFilterChange(t,a,r.filter(o=>o!==e))}_onTagOperatorChange(t,e){const s=V(t),a=this._getApplied(s).values||[];this._emitFilterChange(t,e,a)}_onDatePreset(t,e){const s=V(t);if(!e){this._clearFieldFilter(t);return}if(this._datePresets={...this._datePresets,[s]:e},["before","after","between"].includes(e)){this._dateFroms={...this._dateFroms,[s]:""},this._dateTos={...this._dateTos,[s]:""};return}if(e==="empty"||e==="non-empty"){this._emitFilterChange(t,void 0,[e]);return}const i=new Date;let a="",r="";switch(e){case"today":{const o=new Date(i);o.setHours(0,0,0,0),a=o.toISOString(),r=i.toISOString();break}case"last_week":{const o=new Date(i),n=o.getDay();o.setDate(o.getDate()-(n===0?6:n-1)),o.setHours(0,0,0,0);const l=new Date(o);l.setDate(l.getDate()-7),a=l.toISOString(),r=o.toISOString();break}case"last_month":{const o=new Date(i.getFullYear(),i.getMonth(),1),n=new Date(o);n.setMonth(n.getMonth()-1),a=n.toISOString(),r=o.toISOString();break}case"last_year":{const o=new Date(i.getFullYear(),0,1),n=new Date(o);n.setFullYear(n.getFullYear()-1),a=n.toISOString(),r=o.toISOString();break}}a&&r&&(this._dateFroms={...this._dateFroms,[s]:a},this._dateTos={...this._dateTos,[s]:r},this._emitFilterChange(t,"..",[a,r]))}_onDateInput(t,e,s){const i=s.target.value,a=V(t),r=this._datePresets[a]||"",o=i?new Date(i+"T00:00:00").toISOString():"";e==="from"?this._dateFroms={...this._dateFroms,[a]:o}:this._dateTos={...this._dateTos,[a]:o};let n=this._dateFroms[a]||"",l=this._dateTos[a]||"";r==="after"&&n&&(l=new Date().toISOString(),this._dateTos={...this._dateTos,[a]:l}),r==="before"&&l&&(n=new Date(0).toISOString(),this._dateFroms={...this._dateFroms,[a]:n}),n&&l&&this._emitFilterChange(t,"..",[n,l])}_onGeoLocationInput(t,e){var u;const s=e.target.value.trim(),i=V(t),a=(u=this.shadowRoot)==null?void 0:u.querySelector(`[data-geo-radius="${i}"]`),r=(a==null?void 0:a.value)||"";if(!s){this._emitFilterChange(t,void 0,[]);return}const o=s.split(",").map(d=>d.trim());if(o.length!==2||o.some(d=>isNaN(Number(d))||d===""))return;const[n,l]=o;let h=`${n},${l}..${r||"0"}`;this._emitFilterChange(t,U.IS,[h])}_onGeoRadiusInput(t,e){var l;const s=e.target.value,i=V(t),a=this._getApplied(i);if(!((l=a.values)!=null&&l[0]))return;const r=a.values[0],[o]=r.split("..");let n=o;s&&(n+=`..${s}`),this._emitFilterChange(t,U.IS,[n])}_onEmptyOption(t,e){var a;const s=this._getApplied(V(t)),i=(a=s.values)==null?void 0:a[0];!e||i===e?this._emitFilterChange(t,s.operator,[]):this._emitFilterChange(t,s.operator,[e])}_getGroupedFields(t){const e=new Map;for(const s of t){const i=s.group||this.t("rootFields","Root fields");e.has(i)||e.set(i,[]),e.get(i).push(s)}return e}_renderFieldSelection(){const t=this._fieldSearch.toLowerCase(),e=this.fields.filter(a=>a.label.toLowerCase().includes(t)),s=this._getGroupedFields(e),i=(a,r)=>r.length===0?v:c`
        <div class="field-group-label">${a}</div>
        ${r.map(o=>{const n=V(o),l=this.visibleFields.includes(n),p=!l&&this._atFieldLimit;return c`
            <div
              class="field-item ${l?"selected":""} ${p?"disabled":""}"
              @click=${()=>!p&&!l&&this._addField(o)}
            >
              ${l?c`<ap-icon name="check" .size=${14}></ap-icon>`:c`<ap-icon name=${Vs[o.type]||"file-text"} .size=${14} ${K({color:"var(--ap-muted-foreground, oklch(0.685 0.033 249.82))"})}></ap-icon>`}
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
    `}_renderTextFilter(t){var p,h;const e=V(t),s=this._getApplied(e),a=this._isSpecialValue(s.values)?"":((p=s.values)==null?void 0:p[0])||"",r=this._getContentMode(e),o=r===Te||r===Pe,n=s.operator||ki[0].value,l=t.type===L.TEXT_AREA;return c`
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

        ${r===$t?c`
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
    `}_renderNumberFilter(t){var k,N,T;const e=V(t),s=this._getApplied(e),i=s.operator||Ci[0].value,a=this._isSpecialValue(s.values),r=this._getContentMode(e),o=r===Te||r===Pe,n=i===U.RANGE,l=i===U.GREATER_THAN_OR_EQUAL,p=i===U.LESS_THAN_OR_EQUAL,h=t.type===L.DECIMAL2,u=h?"0.01":"1",d=h?"0.00":"0",g=a?"":((k=s.values)==null?void 0:k[0])||"",b=a?"":((N=s.values)==null?void 0:N[1])||"",y=n||l||p,_=n||l||p?this.t("min","Min"):this.t("value","Value"),S=this.t("max","Max");return c`
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

        ${r===$t?c`
              <div class="filter-section">
                <div class="grid-2">
                  <div>
                    <span class="input-label" aria-disabled=${p?"true":v}>${_}</span>
                    <input
                      class="filter-input"
                      type="number"
                      step=${u}
                      placeholder=${d}
                      .value=${g}
                      ?disabled=${p}
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
                            placeholder=${d}
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
    `}_renderBooleanFilter(t){var i,a;const e=this._getApplied(V(t)),s=((i=e.values)==null?void 0:i[0])||"";return c`
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
    `}_renderSelectOneFilter(t){const e=V(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),a=i?[]:s.values||[],r=t.possible_values||[],o=s.operator||it[0].value,n=(this._selectSearches[e]||"").toLowerCase(),l=n.length>0,p=a.length>0||i,h=n?r.filter(d=>d.label.toLowerCase().includes(n)):r,u=a.length>=Ns;return c`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchOptionsPlaceholder","Search options")}
            .value=${this._selectSearches[e]||""}
            @input=${d=>{this._selectSearches={...this._selectSearches,[e]:d.target.value}}}
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
                  ?disabled=${!p&&!s.operator}
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
                    ?disabled=${!p&&!s.operator}
                    @click=${()=>this._clearFieldFilter(t)}
                  >${this.t("clearAll","Clear all")}</button>
                </div>
                <ap-radio-group
                  direction="horizontal"
                  .options=${this._tSingleSelectOperatorOptions}
                  .value=${o}
                  @ap-change=${d=>this._onOperatorChange(t,d.detail.value)}
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
                        ${a.map(d=>{const g=r.find(b=>b.api_value===d);return c`
                            <div class="chip">
                              <span class="chip-label">${(g==null?void 0:g.label)||d}</span>
                              <button class="chip-remove" @click=${()=>this._onSelectOneToggle(t,d)}>
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
            ${this._tEmptyOptions.map(d=>{var g;return c`
                <div
                  class="option-item"
                  @click=${()=>this._onEmptyOption(t,d.value)}
                >
                  <ap-checkbox ?checked=${((g=s.values)==null?void 0:g[0])===d.value}></ap-checkbox>
                  <span>${d.label}</span>
                </div>
              `})}
          </div>

          <div class="separator"></div>

          <!-- Regular options -->
          <div class="options-list">
            ${h.length===0?c`<div class="no-results">${this.t("noOptionsFound","No options found")}</div>`:h.map(d=>{const g=a.includes(d.api_value),b=!g&&u;return c`
                    <div
                      class="option-item ${b?"disabled":""}"
                      @click=${()=>!b&&this._onSelectOneToggle(t,d.api_value)}
                    >
                      <ap-checkbox ?checked=${g}></ap-checkbox>
                      <span>${d.label}</span>
                    </div>
                  `})}
          </div>
        </div>
      </div>
    `}_renderMultiSelectFilter(t){const e=V(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),a=i?[]:s.values||[],r=t.possible_values||[],o=s.operator||Si[0].value,n=(this._selectSearches[e]||"").toLowerCase(),l=n.length>0,p=a.length>0||i,h=n?r.filter(d=>d.label.toLowerCase().includes(n)):r,u=a.length>=Ns;return c`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchOptionsPlaceholder","Search options")}
            .value=${this._selectSearches[e]||""}
            @input=${d=>{this._selectSearches={...this._selectSearches,[e]:d.target.value}}}
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
                  ?disabled=${!p&&!s.operator}
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
                    ?disabled=${!p&&!s.operator}
                    @click=${()=>this._clearFieldFilter(t)}
                  >${this.t("clearAll","Clear all")}</button>
                </div>
                <ap-radio-group
                  direction="horizontal"
                  .options=${this._tMultiSelectOperatorOptions}
                  .value=${o}
                  @ap-change=${d=>this._onOperatorChange(t,d.detail.value)}
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
                        ${a.map(d=>{const g=r.find(b=>b.api_value===d);return c`
                            <div class="chip">
                              <span class="chip-label">${(g==null?void 0:g.label)||d}</span>
                              <button class="chip-remove" @click=${()=>this._onMultiSelectToggle(t,d)}>
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
            ${this._tEmptyOptions.map(d=>{var g;return c`
                <div
                  class="option-item"
                  @click=${()=>this._onEmptyOption(t,d.value)}
                >
                  <ap-checkbox ?checked=${((g=s.values)==null?void 0:g[0])===d.value}></ap-checkbox>
                  <span>${d.label}</span>
                </div>
              `})}
          </div>

          <div class="separator"></div>

          <!-- Regular options -->
          <div class="options-list">
            ${h.length===0?c`<div class="no-results">${this.t("noOptionsFound","No options found")}</div>`:h.map(d=>{const g=a.includes(d.api_value),b=!g&&u;return c`
                    <div
                      class="option-item ${b?"disabled":""}"
                      @click=${()=>!b&&this._onMultiSelectToggle(t,d.api_value)}
                    >
                      <ap-checkbox ?checked=${g}></ap-checkbox>
                      <span>${d.label}</span>
                    </div>
                  `})}
          </div>
        </div>
      </div>
    `}_renderTagsFilter(t){const e=V(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),a=i?[]:s.values||[],r=this._tagInputs[e]||"",o=s.operator||it[0].value,n=a.length>0||i,l=this._tagSuggestions[e]||[],p=this._tagLoading[e]||!1,h=r.trim().length>0,u=a.length>=Ns;return c`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchTagsPlaceholder","Search tags")}
            .value=${r}
            @input=${d=>this._onTagInput(t,e,d)}
            @keydown=${d=>this._onTagKeydown(t,d)}
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
                  @ap-change=${d=>this._onTagOperatorChange(t,d.detail.value)}
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
                        ${a.map(d=>c`
                            <div class="chip">
                              <span class="chip-label">${d}</span>
                              <button class="chip-remove" @click=${()=>this._removeTag(t,d)}>
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
                  ${this._tEmptyOptions.map(d=>{var g;return c`
                      <div
                        class="option-item"
                        @click=${()=>this._onEmptyOption(t,d.value)}
                      >
                        <ap-checkbox ?checked=${((g=s.values)==null?void 0:g[0])===d.value}></ap-checkbox>
                        <span>${d.label}</span>
                      </div>
                    `})}
                </div>
              </div>
            `}

        <!-- Suggestions list -->
        ${h?c`
              <div class="filter-section">
                <div class="options-list">
                  ${p?c`<div class="option-item disabled"><span>${this.t("loading","Loading...")}</span></div>`:l.length>0?l.map(d=>{const g=a.includes(d),b=!g&&u;return c`
                              <div
                                class="option-item ${b?"disabled":""}"
                                @click=${()=>!b&&(g?this._removeTag(t,d):this._selectTagSuggestion(t,d))}
                              >
                                <ap-checkbox ?checked=${g}></ap-checkbox>
                                <span>${d}</span>
                              </div>
                            `}):c`<div class="option-item disabled"><span>${this.t("noResults","No results")}</span></div>`}
                </div>
              </div>
            `:v}
      </div>
    `}_renderDateFilter(t){var h,u;const e=V(t),s=this._datePresets[e]||"",i=this._getApplied(e),r=this._isSpecialValue(i.values)?((h=i.values)==null?void 0:h[0])||"":s,o=[{value:"empty",label:"Empty"},{value:"non-empty",label:"Not empty"}],n=this._dateFroms[e]?new Date(this._dateFroms[e]).toISOString().split("T")[0]:"",l=this._dateTos[e]?new Date(this._dateTos[e]).toISOString().split("T")[0]:"",p=["before","after","between"].includes(r);return c`
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
            @ap-change=${d=>this._onDatePreset(t,d.detail.value)}
          ></ap-radio-group>

          <div class="separator"></div>

          <ap-radio-group
            clearable
            columns="2"
            .options=${Hi.map(d=>({...d,label:this.t(d.labelKey,d.label)}))}
            .value=${r!=="empty"&&r!=="non-empty"?r:""}
            @ap-change=${d=>this._onDatePreset(t,d.detail.value)}
          ></ap-radio-group>
        </div>

        ${p?c`
              <div class="filter-section">
                <div class="grid-2">
                  ${r==="before"?c`
                        <div>
                          <span class="input-label">${this.t("endDate","End date")}</span>
                          <input
                            type="date"
                            class="filter-input"
                            .value=${l}
                            @change=${d=>this._onDateInput(t,"to",d)}
                          />
                        </div>
                      `:r==="after"?c`
                          <div>
                            <span class="input-label">${this.t("startDate","Start date")}</span>
                            <input
                              type="date"
                              class="filter-input"
                              .value=${n}
                              @change=${d=>this._onDateInput(t,"from",d)}
                            />
                          </div>
                        `:c`
                          <div>
                            <span class="input-label">${this.t("startDate","Start date")}</span>
                            <input
                              type="date"
                              class="filter-input"
                              .value=${n}
                              @change=${d=>this._onDateInput(t,"from",d)}
                            />
                          </div>
                          <div>
                            <span class="input-label">${this.t("endDate","End date")}</span>
                            <input
                              type="date"
                              class="filter-input"
                              .value=${l}
                              @change=${d=>this._onDateInput(t,"to",d)}
                            />
                          </div>
                        `}
                </div>
              </div>
            `:v}
      </div>
    `}_renderGeoFilter(t){var h,u;const e=V(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),a=this._getContentMode(e);let r="",o="";if(!i&&((h=s.values)!=null&&h[0])){const d=s.values[0],[g,b]=d.split("..");r=g||"",o=b||""}const n=r.length>0,l=r.split(",").map(d=>d.trim()),p=!n||l.length===2&&l.every(d=>!isNaN(Number(d))&&d!=="");return c`
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
            @ap-change=${d=>this._onContentModeChange(t,d.detail.value)}
          ></ap-radio-group>
        </div>

        ${a===$t?c`
              <div class="filter-section">
                <div class="geo-row">
                  <div class="geo-location">
                    <span class="input-label">${this.t("location","Location")}</span>
                    <input
                      class="filter-input"
                      type="text"
                      .placeholder=${this.t("latLngPlaceholder","Latitude, longitude")}
                      .value=${r}
                      @change=${d=>this._onGeoLocationInput(t,d)}
                    />
                    ${n&&!p?c`<div class="error-text">${this.t("geoCoordinatesError",'Enter coordinates as "latitude, longitude"')}</div>`:v}
                  </div>
                  <div class="geo-radius">
                    <span class="input-label">${this.t("maxRadius","Max radius")} (&deg;)</span>
                    <input
                      class="filter-input"
                      type="number"
                      placeholder="0"
                      data-geo-radius=${e}
                      .value=${o}
                      @change=${d=>this._onGeoRadiusInput(t,d)}
                    />
                  </div>
                </div>
              </div>
            `:v}
      </div>
    `}_renderAttachmentFilter(t){var i,a;const e=this._getApplied(V(t)),s=((i=e.values)==null?void 0:i[0])||"";return c`
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
    `}_renderFaceMatcherFilter(t){const e=V(t),s=this._getApplied(e),i=s.values||[],a=s.operator||U.IS;return c`
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
            .options=${it}
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
            <ap-icon name=${Vs[e.type]||"file-text"} .size=${14} ${K({color:"var(--ap-muted-foreground, oklch(0.685 0.033 249.82))"})}></ap-icon>
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
        ${r.map(o=>{const n=V(o),l=this.visibleFields.includes(n),p=!!this.appliedMetadata[n]||!!this.appliedFilters[n],h=this.pinnedFields.includes(n),u=!l&&this._atFieldLimit;return c`
            <div
              class="field-item ${p?"has-filter":""} ${u?"disabled":""}"
              @click=${()=>!u&&this._emitFieldSelect(o)}
            >
              <ap-icon name=${Vs[o.type]||"file-text"} .size=${14} ${K({color:"var(--ap-muted-foreground, oklch(0.685 0.033 249.82))"})}></ap-icon>
              <span class="field-item-label">${o.label}</span>
              <button
                class="field-item-pin ${h?"pinned":""}"
                @click=${d=>{d.stopPropagation(),this._emitPin(n,!h)}}
                title=${h?this.t("unpinField","Unpin field"):this.t("pinField","Pin field")}
              >
                <ap-icon name="pin" .size=${12}></ap-icon>
              </button>
              ${p?c`<ap-icon name="check" .size=${14}></ap-icon>`:v}
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
    `}};X.styles=[fe,et,I`
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
  `];te([f({type:Array})],X.prototype,"fields",2);te([f({type:Object})],X.prototype,"appliedFilters",2);te([f({type:Array})],X.prototype,"visibleFields",2);te([f()],X.prototype,"mode",2);te([f()],X.prototype,"activeFieldKey",2);te([f({type:Array})],X.prototype,"pinnedFields",2);te([f({type:Object})],X.prototype,"appliedMetadata",2);te([f({attribute:!1})],X.prototype,"apiClient",2);te([f({attribute:!1})],X.prototype,"t",2);te([w()],X.prototype,"_showFieldSelection",2);te([w()],X.prototype,"_fieldSearch",2);te([w()],X.prototype,"_collapsedFields",2);te([w()],X.prototype,"_tagInputs",2);te([w()],X.prototype,"_tagSuggestions",2);te([w()],X.prototype,"_tagLoading",2);te([w()],X.prototype,"_datePresets",2);te([w()],X.prototype,"_dateFroms",2);te([w()],X.prototype,"_dateTos",2);te([w()],X.prototype,"_specificModeFields",2);te([w()],X.prototype,"_selectSearches",2);X=te([R("ap-filter-metadata")],X);var wc=Object.defineProperty,kc=Object.getOwnPropertyDescriptor,ze=(t,e,s,i)=>{for(var a=i>1?void 0:i?kc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&wc(e,s,a),a};let Ce=class extends O{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.selectedStatus=[],this.statusOperator=":=",this.approverValue="",this.approverOperator="~",this.requesterValue="",this.requesterOperator="~",this.dueDatePreset="",this.dueDateFrom="",this.dueDateTo=""}get _hasAnySelection(){return this.selectedStatus.length>0||!!this.approverValue||!!this.requesterValue||!!this.dueDatePreset||!!this.dueDateFrom||!!this.dueDateTo}get _statusHasEmptyValue(){return this.selectedStatus.includes(Te)||this.selectedStatus.includes(Pe)}get _statusHasOnlyEmptyValues(){return this.selectedStatus.length>0&&this.selectedStatus.every(t=>t===Te||t===Pe)}get _dueDateNeedsInputs(){return["before","after","between","specific"].includes(this.dueDatePreset)}_toggleStatus(t){const e=this.selectedStatus.includes(t)?this.selectedStatus.filter(s=>s!==t):[...this.selectedStatus,t];this._emitChange(Z.STATUS,e,this.statusOperator)}_handleStatusOperator(t){const e=t.detail.value;this._emitChange(Z.STATUS,this.selectedStatus,e)}_clearStatus(){this._emitChange(Z.STATUS,[],this.statusOperator)}_handleApproverInput(t){const e=t.target.value;this._emitChange(Z.APPROVER,e?[e]:[],this.approverOperator)}_handleApproverOperator(t){const e=t.detail.value;this._emitChange(Z.APPROVER,this.approverValue?[this.approverValue]:[],e)}_clearApprover(){this._emitChange(Z.APPROVER,[],this.approverOperator)}_handleRequesterInput(t){const e=t.target.value;this._emitChange(Z.REQUESTOR,e?[e]:[],this.requesterOperator)}_handleRequesterOperator(t){const e=t.detail.value;this._emitChange(Z.REQUESTOR,this.requesterValue?[this.requesterValue]:[],e)}_clearRequester(){this._emitChange(Z.REQUESTOR,[],this.requesterOperator)}_handleDueDatePreset(t){const e=t.detail.value,s=this.dueDatePreset===e?"":e;this._emitChange(Z.DUE_DATE,s?[s]:[],":")}_handleDueDateFrom(t){const e=t.target.value;this._emitDateChange(e,this.dueDateTo)}_handleDueDateTo(t){const e=t.target.value;this._emitDateChange(this.dueDateFrom,e)}_clearDueDate(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:Z.DUE_DATE,values:[],operator:":"},bubbles:!0,composed:!0}))}_emitDateChange(t,e){const s=[];t&&s.push(t),e&&s.push(e),this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:Z.DUE_DATE,values:s,operator:t&&e?"..":t?">=":"<="},bubbles:!0,composed:!0}))}_emitChange(t,e,s){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:t,values:e,operator:s},bubbles:!0,composed:!0}))}_renderStatusSection(){const t=this.selectedStatus.length>0;return c`
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
          .options=${Qn.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}
          .value=${this.statusOperator}
          ?disabled=${this._statusHasOnlyEmptyValues}
          @ap-change=${this._handleStatusOperator}
        ></ap-radio-group>

        <!-- Empty / Not empty checkboxes -->
        <div class="options-list short mt-12">
          ${ti.map(e=>c`
              <ap-checkbox
                ?checked=${this.selectedStatus.includes(e.value)}
                @ap-toggle=${()=>this._toggleStatus(e.value)}
              >${this.t(e.labelKey,e.label)}</ap-checkbox>
            `)}
        </div>

        <div class="separator"></div>

        <!-- Status options -->
        <div class="options-list short">
          ${Wn.map(e=>c`
              <ap-checkbox
                ?checked=${this.selectedStatus.includes(e.value)}
                @ap-toggle=${()=>this._toggleStatus(e.value)}
              >
                <span class="status-icon-label">
                  <ap-icon name=${e.icon} .size=${16} ${K({color:e.iconColor})}></ap-icon>
                  ${this.t(e.labelKey,e.label)}
                </span>
              </ap-checkbox>
            `)}
        </div>
      </div>
    `}_renderApproverSection(){const t=!!this.approverValue;return c`
      <div class="filter-section">
        <button
          class="clear-btn"
          ?disabled=${!t}
          @click=${this._clearApprover}
        >${this.t("clearAll","Clear all")}</button>

        <span class="section-label">${this.t("approver","Approver")}</span>

        <!-- Condition -->
        <span class="section-label condition-label">${this.t("condition","Condition")}</span>
        <ap-radio-group
          direction="horizontal"
          .options=${Ga.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}
          .value=${this.approverOperator}
          @ap-change=${this._handleApproverOperator}
        ></ap-radio-group>

        <input
          class="filter-input mt-12"
          type="text"
          .placeholder=${this.t("enterApproverName","Enter approver name")}
          .value=${this.approverValue}
          @input=${this._handleApproverInput}
        />
      </div>
    `}_renderRequesterSection(){const t=!!this.requesterValue;return c`
      <div class="filter-section">
        <button
          class="clear-btn"
          ?disabled=${!t}
          @click=${this._clearRequester}
        >${this.t("clearAll","Clear all")}</button>

        <span class="section-label">${this.t("requester","Requester")}</span>

        <!-- Condition -->
        <span class="section-label condition-label">${this.t("condition","Condition")}</span>
        <ap-radio-group
          direction="horizontal"
          .options=${Ga.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}
          .value=${this.requesterOperator}
          @ap-change=${this._handleRequesterOperator}
        ></ap-radio-group>

        <input
          class="filter-input mt-12"
          type="text"
          .placeholder=${this.t("enterRequesterName","Enter requester name")}
          .value=${this.requesterValue}
          @input=${this._handleRequesterInput}
        />
      </div>
    `}_renderDueDateSection(){const t=!!this.dueDatePreset||!!this.dueDateFrom||!!this.dueDateTo;return c`
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
          .options=${ti.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}
          .value=${this.dueDatePreset===Te||this.dueDatePreset===Pe?this.dueDatePreset:""}
          @ap-change=${this._handleDueDatePreset}
        ></ap-radio-group>

        <div class="separator"></div>

        <!-- Date range options -->
        <ap-radio-group
          clearable
          columns="2"
          .options=${Hn.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}
          .value=${this.dueDatePreset!==Te&&this.dueDatePreset!==Pe?this.dueDatePreset:""}
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
        <div class="separator"></div>
        ${this._renderApproverSection()}
        <div class="separator"></div>
        ${this._renderRequesterSection()}
        <div class="separator"></div>
        ${this._renderDueDateSection()}
      </div>
    `}};Ce.styles=[fe,et,I`
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
  `];ze([f({attribute:!1})],Ce.prototype,"t",2);ze([f({type:Array})],Ce.prototype,"selectedStatus",2);ze([f()],Ce.prototype,"statusOperator",2);ze([f()],Ce.prototype,"approverValue",2);ze([f()],Ce.prototype,"approverOperator",2);ze([f()],Ce.prototype,"requesterValue",2);ze([f()],Ce.prototype,"requesterOperator",2);ze([f()],Ce.prototype,"dueDatePreset",2);ze([f()],Ce.prototype,"dueDateFrom",2);ze([f()],Ce.prototype,"dueDateTo",2);Ce=ze([R("ap-filter-approval")],Ce);var Sc=Object.defineProperty,Cc=Object.getOwnPropertyDescriptor,Ne=(t,e,s,i)=>{for(var a=i>1?void 0:i?Cc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Sc(e,s,a),a};const Ac=300;function Ec(t){return t.filter(e=>e.toLowerCase().includes("*")||!t.some(s=>s.toLowerCase().includes("*")&&e.toLowerCase().startsWith(s.slice(0,-1).toLowerCase())))}let Ae=class extends O{constructor(){super(...arguments),this.selected=[],this.t=(t,e)=>typeof e=="string"?e:t,this._search="",this._debouncedSearch="",this._products=[],this._isLoading=!1,this._showAddList=!1,this._addListText=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var t;return(t=this._searchInput)==null?void 0:t.focus()})}disconnectedCallback(){super.disconnectedCallback(),this._debounceTimer&&clearTimeout(this._debounceTimer)}get _isSearching(){return this._debouncedSearch.length>0}_emit(t){const e=Ec(t);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:C.PRODUCT_REF,values:e,operator:U.IS},bubbles:!0,composed:!0}))}_toggle(t){const s=this.selected.includes(t)?this.selected.filter(i=>i!==t):[...this.selected,t];this._emit(s)}_remove(t){this._emit(this.selected.filter(e=>e!==t))}_clearAll(){this._emit([]),this._search="",this._debouncedSearch="",this._products=[]}_onSearchInput(t){const e=t.target.value;this._search=e,this._debounceTimer&&clearTimeout(this._debounceTimer),this._debounceTimer=setTimeout(()=>{const s=e.trim().toLowerCase();this._debouncedSearch=s,s?this._fetchProducts(s):(this._products=[],this._isLoading=!1)},Ac)}_clearSearch(){this._search="",this._debouncedSearch="",this._products=[],this._isLoading=!1,this._debounceTimer&&clearTimeout(this._debounceTimer)}async _fetchProducts(t){if(this.apiClient){this._isLoading=!0;try{const e=await this.apiClient.request("/products",{q:`reference~^${t}`});this._debouncedSearch===t&&(this._products=e.products??[])}catch{this._debouncedSearch===t&&(this._products=[])}finally{this._debouncedSearch===t&&(this._isLoading=!1)}}}_openAddList(){this._showAddList=!0,this._addListText=""}_closeAddList(){this._showAddList=!1,this._addListText=""}_onAddListInput(t){this._addListText=t.target.value}_onAddListKeydown(t){t.key==="Enter"&&!t.shiftKey&&t.stopPropagation()}_submitAddList(){const t=this._addListText.split(`
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
                ${t?c`<ap-icon name="box" .size=${40} ${K({color:"var(--ap-border, oklch(92.86% 0.009 247.92))","margin-bottom":"4px"})}></ap-icon>`:v}
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
                  <div class="info-alert" ${K({"margin-top":"0"})}>
                    <ap-icon name="info" .size=${14}></ap-icon>
                    <span>${this.t("wildcardInfo",'Use "*" to select all references starting with your text.')}</span>
                  </div>
                  <label class="input-label" ${K({"margin-bottom":"0","font-weight":"400",color:"var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89))"})}>${this.t("productReferences","Product references")}</label>
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
    `}};Ae.styles=[fe,et,I`
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
  `];Ne([f({type:Array})],Ae.prototype,"selected",2);Ne([f({attribute:!1})],Ae.prototype,"apiClient",2);Ne([f({attribute:!1})],Ae.prototype,"t",2);Ne([pt(".product-search")],Ae.prototype,"_searchInput",2);Ne([w()],Ae.prototype,"_search",2);Ne([w()],Ae.prototype,"_debouncedSearch",2);Ne([w()],Ae.prototype,"_products",2);Ne([w()],Ae.prototype,"_isLoading",2);Ne([w()],Ae.prototype,"_showAddList",2);Ne([w()],Ae.prototype,"_addListText",2);Ae=Ne([R("ap-filter-product-ref")],Ae);var Fc=Object.defineProperty,Oc=Object.getOwnPropertyDescriptor,W=(t,e,s,i)=>{for(var a=i>1?void 0:i?Oc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Fc(e,s,a),a};let Q=class extends O{constructor(){super(...arguments),this.totalCount=0,this.totalFolderCount=0,this.isLoading=!1,this.showUpload=!1,this.showCreateFolder=!1,this.showFilters=!0,this.countLabel="",this.sortBy="created_at",this.sortDirection="desc",this.sortOptions=qi,this.filters={metadata:{pinned:[],visible:[],applied:{}},pinned:[],visible:[],applied:{}},this.labels=[],this.tags=[],this.fileTypes=[],this.metadataFields=[],this.pinnedFilters=[],this.forcedFilterKeys=[],this.t=(t,e)=>typeof e=="string"?e:t,this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null,this._outsideClickHandler=t=>{const e=t.composedPath();if(this._externalTrigger&&e.some(r=>{var o;return r instanceof HTMLElement&&r.classList.contains("chip")&&((o=r.closest)==null?void 0:o.call(r,"ap-filters-bar"))}))return;const s=this._openFilter&&e.some(a=>a instanceof HTMLElement?a.classList.contains("popover-anchor")||a.classList.contains("popover-panel"):!1),i=(this._showDropdown||this._showMetadataSelector)&&e.some(a=>a instanceof HTMLElement&&(a.classList.contains("dropdown-menu")||a.classList.contains("filter-dropdown")||a.classList.contains("metadata-selector-overlay")));s||i||(this._openFilter&&(this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null),(this._showDropdown||this._showMetadataSelector)&&(this._showDropdown=!1,this._showMetadataSelector=!1))}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this._outsideClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._outsideClickHandler)}updated(t){if((t.has("_openFilter")||t.has("_externalTrigger")||t.has("_openMetadataField"))&&this.dispatchEvent(new CustomEvent("filter-panel-change",{detail:{key:this._externalTrigger?this._openFilter:null,metadataFieldKey:this._externalTrigger?this._openMetadataField:null},bubbles:!0,composed:!0})),this._externalTrigger&&this._externalLeft!=null&&(t.has("_openFilter")||t.has("_externalLeft")||t.has("_openMetadataField"))){const e=this.renderRoot.querySelector(".popover-panel");if(e){const s=e.closest(".popover-anchor"),i=s?s.offsetWidth:this.offsetWidth,a=e.offsetWidth;this._externalLeft+a>i-8&&(e.style.left=`${Math.max(8,i-a-8)}px`)}}}_closeAllDropdowns(){var t;this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null,(t=this._sortDropdown)==null||t.close()}_handleUploadClick(){this.dispatchEvent(new CustomEvent("upload-click",{bubbles:!0,composed:!0}))}_handleCreateFolderClick(){this.dispatchEvent(new CustomEvent("create-folder-click",{bubbles:!0,composed:!0}))}_toggleDropdown(){const t=this._showDropdown;this._closeAllDropdowns(),this._showDropdown=!t}_toggleMetadataSelector(){this._showMetadataSelector=!this._showMetadataSelector}closeFilterPanel(){this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}openFilterPanel(t,e=!1,s,i){if(e&&this._externalTrigger&&this._openFilter===t&&!this._openMetadataField){this.closeFilterPanel();return}if(!e&&!this._isFilterActive(t)){this._showDropdown=!1,this._showMetadataSelector=!1,this.dispatchEvent(new CustomEvent("filter-pending",{detail:{key:t},bubbles:!0,composed:!0}));return}this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=t,this._openMetadataField=null,this._externalTrigger=e,this._externalLeft=s??null,this._externalTop=i??null}_handleSortOpen(){this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}_handleSort(t){this.dispatchEvent(new CustomEvent("sort-change",{detail:t.detail,bubbles:!0,composed:!0}))}_toggleSortDirection(){const t=this.sortDirection==="asc"?"desc":"asc";this.dispatchEvent(new CustomEvent("sort-direction-change",{detail:{value:t},bubbles:!0,composed:!0}))}_isFilterActive(t){return t in this.filters.applied&&this.filters.applied[t]!==void 0}_handleFilterChange(t){t.stopPropagation();const{key:e,values:s,operator:i}=t.detail;this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:e,values:s,operator:i},bubbles:!0,composed:!0}))}_handleMetadataFilterChange(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-filter-change",{detail:t.detail,bubbles:!0,composed:!0}))}_handleMetadataFieldToggle(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-field-toggle",{detail:t.detail,bubbles:!0,composed:!0}))}_handleMetadataFieldSelect(t){t.stopPropagation(),this._openMetadataField=t.detail.fieldKey}_handleMetadataSelectorFieldSelect(t){var s;t.stopPropagation();const e=t.detail.fieldKey;if(this._showMetadataSelector=!1,this._showDropdown=!1,!(e in(((s=this.filters.metadata)==null?void 0:s.applied)||{}))){this.dispatchEvent(new CustomEvent("filter-pending",{detail:{metadataFieldKey:e},bubbles:!0,composed:!0}));return}this._openFilter="metadata",this._openMetadataField=e}_handleMetadataPin(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-pin",{detail:t.detail,bubbles:!0,composed:!0}))}openMetadataFieldPanel(t,e=!1,s,i){if(e&&this._externalTrigger&&this._openMetadataField===t){this.closeFilterPanel();return}this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter="metadata",this._openMetadataField=t,this._externalTrigger=e,this._externalLeft=s??null,this._externalTop=i??null}_getMetadataFieldLabel(t){for(const e of this.metadataFields)if(`${pi[e.type]||""}${e.key}`===t)return e.label;return t}_togglePin(t,e){e.stopPropagation();const s=this.pinnedFilters.includes(t);this.dispatchEvent(new CustomEvent("filter-pin",{detail:{key:t,pinned:!s},bubbles:!0,composed:!0}))}_getFilterIcon(t){const e=Zs.find(s=>s.key===t);return(e==null?void 0:e.icon)||"filter"}_renderFilterContent(t){var i,a,r;const{t:e}=this,s=this.filters.applied;switch(t){case"type":{const o=s.type;return c`<ap-filter-type
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
          .field=${(o==null?void 0:o.field)||"created"}
          .kind=${(o==null?void 0:o.kind)||null}
          .from=${(o==null?void 0:o.from)||""}
          .to=${(o==null?void 0:o.to)||""}
          .preset=${(o==null?void 0:o.preset)||""}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-date>`}case"size":{const o=s.size,n=((i=o==null?void 0:o.values)==null?void 0:i[0])||"",[l,p]=n.split(".."),h=l?parseFloat(l)/1e6:0,u=p?parseFloat(p)/1e6:0;return c`<ap-filter-size
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
        ></ap-filter-image>`}case"approval":{const o=s.approval_status,n=s.task_approver,l=s.task_requester,p=s.task_duedate;return c`<ap-filter-approval
          .selectedStatus=${(o==null?void 0:o.values)||[]}
          .statusOperator=${(o==null?void 0:o.operator)||":"}
          .approverValue=${((a=n==null?void 0:n.values)==null?void 0:a[0])||""}
          .approverOperator=${(n==null?void 0:n.operator)||":"}
          .requesterValue=${((r=l==null?void 0:l.values)==null?void 0:r[0])||""}
          .requesterOperator=${(l==null?void 0:l.operator)||":"}
          .dueDatePreset=${(p==null?void 0:p.preset)||""}
          .dueDateFrom=${(p==null?void 0:p.from)||""}
          .dueDateTo=${(p==null?void 0:p.to)||""}
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
        ></ap-filter-product-ref>`}default:return v}}_renderFilterButton(t){const{t:e}=this,s=t.key==="metadata",i=s?Object.keys(this.filters.metadata.applied).length>0:this._isFilterActive(t.key),a=this.pinnedFilters.includes(t.key),r=c`
      <button
        class="filter-btn ${i?"active":""} ${a?"pinned":""}"
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
                class="pin-btn ${a?"pinned":""}"
                title=${a?e("unpinFilter","Unpin filter"):e("pinFilter","Pin filter")}
                @click=${o=>this._togglePin(t.key,o)}
              >
                <ap-icon name="pin" .size=${14}></ap-icon>
              </span>
            `}
      </button>
    `;return s?c`
      <div class="filter-btn-wrapper">
        ${r}
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
    `:r}render(){const{t}=this,e=Object.keys(this.filters.applied).length+Object.keys(this.filters.metadata.applied).length;return c`
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
                ${Zs.filter(s=>!this.forcedFilterKeys.includes(s.key)).map(s=>this._renderFilterButton(s))}
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
        <div class="popover-anchor ${this._externalTrigger?"external":""}" ${K(this._externalTrigger&&this._externalTop!=null?{top:`${this._externalTop+4}px`}:null)}>
          ${this._externalTrigger?v:c`
            <div class="anchor-tab">
              ${this._openFilter==="metadata"&&this._openMetadataField?c`
                    <button class="anchor-back" @click=${s=>{s.stopPropagation(),this._openMetadataField=null}} title="Back to fields">
                      <ap-icon name="chevron-left" .size=${14}></ap-icon>
                    </button>
                    ${this._getMetadataFieldLabel(this._openMetadataField)}
                  `:c`
                    <ap-icon name=${this._getFilterIcon(this._openFilter)} .size=${16}></ap-icon>
                    ${t(ls[this._openFilter]??this._openFilter,Vt[this._openFilter]||this._openFilter)}
                  `}
              <button class="anchor-close" @click=${()=>{this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}} title="Close">
                <ap-icon name="close" .size=${14}></ap-icon>
              </button>
            </div>
          `}
          <div class="popover-panel" ${K(this._externalTrigger&&this._externalLeft!=null?{left:`${this._externalLeft}px`}:null)}>
            ${this._renderFilterContent(this._openFilter)}
          </div>
        </div>
      `:v}
    `}};Q.styles=I`
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
  `;W([f({type:Number})],Q.prototype,"totalCount",2);W([f({type:Number})],Q.prototype,"totalFolderCount",2);W([f({type:Boolean})],Q.prototype,"isLoading",2);W([f({type:Boolean})],Q.prototype,"showUpload",2);W([f({type:Boolean})],Q.prototype,"showCreateFolder",2);W([f({type:Boolean})],Q.prototype,"showFilters",2);W([f()],Q.prototype,"countLabel",2);W([f()],Q.prototype,"sortBy",2);W([f()],Q.prototype,"sortDirection",2);W([f({type:Array})],Q.prototype,"sortOptions",2);W([f({type:Object})],Q.prototype,"filters",2);W([f({type:Array})],Q.prototype,"labels",2);W([f({type:Array})],Q.prototype,"tags",2);W([f({type:Array})],Q.prototype,"fileTypes",2);W([f({type:Array})],Q.prototype,"metadataFields",2);W([f({type:Array})],Q.prototype,"pinnedFilters",2);W([f({type:Array})],Q.prototype,"forcedFilterKeys",2);W([f({attribute:!1})],Q.prototype,"apiClient",2);W([f({attribute:!1})],Q.prototype,"t",2);W([pt("ap-dropdown")],Q.prototype,"_sortDropdown",2);W([w()],Q.prototype,"_showDropdown",2);W([w()],Q.prototype,"_showMetadataSelector",2);W([w()],Q.prototype,"_openFilter",2);W([w()],Q.prototype,"_openMetadataField",2);W([w()],Q.prototype,"_externalTrigger",2);W([w()],Q.prototype,"_externalLeft",2);W([w()],Q.prototype,"_externalTop",2);Q=W([R("ap-content-toolbar")],Q);var Tc=Object.defineProperty,Pc=Object.getOwnPropertyDescriptor,xe=(t,e,s,i)=>{for(var a=i>1?void 0:i?Pc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Tc(e,s,a),a};let de=class extends O{constructor(){super(...arguments),this.appliedFilters={},this.appliedMetadata={},this.forcedFilters={},this.metadataFields=[],this.pinnedFilters=[],this.pinnedMetadataFields=[],this.tags=[],this.labels=[],this.activeFilter=null,this.activeMetadataField=null,this.pendingFilter=null,this.pendingMetadataField=null,this.t=(t,e)=>typeof e=="string"?e:t}_mapTypeLabel(t){var i;const e=(i=ei.find(a=>a.value===t))==null?void 0:i.label;if(e)return e;const s=t.indexOf("_");return s!==-1?t.slice(s+1).toUpperCase():t}_getSizeSummary(t){if(t.values.length===0)return"";const e=t.values[0],[s,i]=e.split(".."),a=s?parseFloat(s):null,r=i?parseFloat(i):null,o=n=>n>=1e3?`${(n/1e3).toFixed(n%1e3===0?0:1)} GB`:`${n} MB`;return a!==null&&r!==null?`${o(a)} – ${o(r)}`:a!==null?`> ${o(a)}`:r!==null?`< ${o(r)}`:""}_getFilterSummary(t,e){if(t.type==="string"){const s=t;if(s.values.length===0)return"";if(e===C.SIZE)return this._getSizeSummary(s);if(e===C.COLOR){const a=s.values.map(r=>r.split(" ")[0]).filter(Boolean);return a.length===0?"":a.length===1?a[0]:`${a[0]} +${a.length-1}`}const i=e===C.TYPE?a=>this._mapTypeLabel(a):e===C.TAGS?a=>{var r;return((r=this.tags.find(o=>o.sid===a))==null?void 0:r.label)||a}:e===C.LABELS?a=>{var r;return((r=this.labels.find(o=>o.sid===a))==null?void 0:r.name)||a}:a=>a;return s.values.length===1?i(s.values[0]):`${i(s.values[0])} +${s.values.length-1}`}if(t.type==="date")return this._getDateSummary(t);if(typeof t=="object"&&"resolution"in t){const s=t,i=[...s.resolution,...s.orientation,...s.faces];return i.length===0?"":i.length===1?i[0]:`${i[0]} +${i.length-1}`}return""}_getDateSummary(t){const e=Sr.find(l=>l.value===t.field),s=e?this.t(e.labelKey,e.label):t.field,i=[...Hi,...Cr],a=t.preset?i.find(l=>l.value===t.preset):null,r=a?this.t(a.labelKey,a.label):t.preset||"",o=l=>{try{return l.split("T")[0]}catch{return l}};let n="";switch(t.kind){case"preset":n=r;break;case"before":n=t.to?`Before ${o(t.to)}`:r;break;case"after":n=t.from?`After ${o(t.from)}`:r;break;case"between":t.from&&t.to?n=`${o(t.from)} – ${o(t.to)}`:t.from?n=`After ${o(t.from)}`:t.to&&(n=`Before ${o(t.to)}`);break;case"specific":n=t.from?o(t.from):"";break;default:n=r}return n?`${s}: ${n}`:""}_getFilterIcon(t){var e;return((e=Zs.find(s=>s.key===t))==null?void 0:e.icon)||"filter"}_getMetadataLabel(t){const e=this._stripMetadataPrefix(t),s=this.metadataFields.find(i=>i.key===e);return(s==null?void 0:s.label)||e}_getMetadataIcon(t){const e=this._stripMetadataPrefix(t),s=this.metadataFields.find(i=>i.key===e);return s&&Vs[s.type]||"file-text"}_stripMetadataPrefix(t){for(const e of xr)if(t.startsWith(e))return t.slice(e.length);return t}_removeFilter(t){this.dispatchEvent(new CustomEvent("filter-remove",{detail:{key:t},bubbles:!0,composed:!0}))}_removeMetadataFilter(t){this.dispatchEvent(new CustomEvent("metadata-filter-remove",{detail:{fieldKey:t},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filters-clear-all",{bubbles:!0,composed:!0}))}_openFilter(t,e){const i=e.currentTarget.getBoundingClientRect();this.dispatchEvent(new CustomEvent("filter-open",{detail:{key:t,chipRect:{left:i.left,right:i.right,bottom:i.bottom,width:i.width}},bubbles:!0,composed:!0}))}_openMetadataFilter(t,e){const i=e.currentTarget.getBoundingClientRect();this.dispatchEvent(new CustomEvent("metadata-filter-open",{detail:{fieldKey:t,chipRect:{left:i.left,right:i.right,bottom:i.bottom,width:i.width}},bubbles:!0,composed:!0}))}_renderForcedChip(t,e){const{t:s}=this,i=this._getFilterSummary(e,t),a=e.type==="date";return c`
      <span class="chip forced">
        ${(a||t===C.TYPE||t===C.SIZE)&&i?c`<span class="chip-label">${i}</span>`:c`
              <span class="chip-label">${s(ls[t]??t,Vt[t]||t)}</span>
              ${i?c`<span class="chip-summary">${i}</span>`:v}
            `}
        <span class="chip-lock">
          <ap-icon name="lock" .size=${12}></ap-icon>
        </span>
      </span>
    `}_renderFilterChip(t,e){const{t:s}=this;if(!e)return c`
        <span class="chip pinned-empty ${t===this.activeFilter?"active":""}" @click=${r=>this._openFilter(t,r)}>
          <span class="chip-icon"><ap-icon name=${this._getFilterIcon(t)} .size=${16}></ap-icon></span>
          <span class="chip-label">${s(ls[t]??t,Vt[t]||t)}</span>
          <span class="chip-chevron"><ap-icon name="chevron-down" .size=${14}></ap-icon></span>
        </span>
      `;const i=this._getFilterSummary(e,t),a=e.type==="date";return c`
      <span class="chip ${t===this.activeFilter?"active":""}" @click=${r=>this._openFilter(t,r)}>
        ${(a||t===C.TYPE||t===C.SIZE)&&i?c`
              <span class="chip-icon"><ap-icon name=${this._getFilterIcon(t)} .size=${16}></ap-icon></span>
              <span class="chip-label">${i}</span>`:c`
              <span class="chip-label">${s(ls[t]??t,Vt[t]||t)}</span>
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
    `}render(){const t=Ri(this.forcedFilters),e=new Set(Object.keys(t)),s=Object.keys(this.appliedFilters).filter(g=>!e.has(g)),i=Object.keys(this.appliedMetadata),a=new Set(this.pinnedFilters),r=new Set(this.pinnedMetadataFields),o=this.pinnedFilters.filter(g=>!e.has(g)),n=s.filter(g=>!a.has(g)),l=i.filter(g=>!r.has(g)),p=this.pendingFilter&&!a.has(this.pendingFilter)&&!(this.pendingFilter in this.appliedFilters),h=this.pendingMetadataField&&!r.has(this.pendingMetadataField)&&!(this.pendingMetadataField in this.appliedMetadata),u=s.length+i.length>0;return e.size+o.length+this.pinnedMetadataFields.length+n.length+l.length+(p?1:0)+(h?1:0)===0?v:c`
      <div class="chips-row">
        <div class="chips">
          ${[...e].map(g=>this._renderForcedChip(g,t[g]))}
          ${o.map(g=>this._renderFilterChip(g,this.appliedFilters[g]))}
          ${this.pinnedMetadataFields.map(g=>this._renderMetadataChip(g,this.appliedMetadata[g]))}
          ${n.map(g=>this._renderFilterChip(g,this.appliedFilters[g]))}
          ${p?c`
            <span class="chip pinned-empty active pending" @click=${g=>this._openFilter(this.pendingFilter,g)}>
              <span class="chip-icon"><ap-icon name=${this._getFilterIcon(this.pendingFilter)} .size=${16}></ap-icon></span>
              <span class="chip-label">${this.t(ls[this.pendingFilter]??this.pendingFilter,Vt[this.pendingFilter]||this.pendingFilter)}</span>
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
    `}};de.styles=I`
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
  `;xe([f({type:Object})],de.prototype,"appliedFilters",2);xe([f({type:Object})],de.prototype,"appliedMetadata",2);xe([f({type:Object})],de.prototype,"forcedFilters",2);xe([f({type:Array})],de.prototype,"metadataFields",2);xe([f({type:Array})],de.prototype,"pinnedFilters",2);xe([f({type:Array})],de.prototype,"pinnedMetadataFields",2);xe([f({type:Array})],de.prototype,"tags",2);xe([f({type:Array})],de.prototype,"labels",2);xe([f()],de.prototype,"activeFilter",2);xe([f()],de.prototype,"activeMetadataField",2);xe([f()],de.prototype,"pendingFilter",2);xe([f()],de.prototype,"pendingMetadataField",2);xe([f({attribute:!1})],de.prototype,"t",2);de=xe([R("ap-filters-bar")],de);var Lc=Object.defineProperty,Ic=Object.getOwnPropertyDescriptor,Ee=(t,e,s,i)=>{for(var a=i>1?void 0:i?Ic(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Lc(e,s,a),a};const Mc=6;let ue=class extends O{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.assets=[],this.folders=[],this.folderPreviews={},this.selectedIds=[],this.selectedFolderIds=[],this.disabledAssetIds=[],this.disabledFolderIds=[],this.isLoading=!1,this.multiSelect=!0,this.folderSelectable=!1,this.gridSize="normal",this._prevCount=0}willUpdate(t){if(t.has("assets")){const e=t.get("assets");e&&this.assets.length>e.length?this._prevCount=e.length:this._prevCount=0}}render(){const t=this.gridSize==="large"?"280px":"220px";return c`
      <div class="grid" role="list" aria-label="Assets" ${K({"--ap-grid-min-col":String(t)})}>
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
                ${K({"--ap-stagger-index":String(i)})}
                data-asset-uuid=${e.uuid}
                @asset-select=${a=>this.dispatchEvent(new CustomEvent("asset-select",{detail:a.detail,bubbles:!0,composed:!0}))}
                @asset-preview=${a=>this.dispatchEvent(new CustomEvent("asset-preview",{detail:a.detail,bubbles:!0,composed:!0}))}
                @asset-quick-select=${a=>this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:a.detail,bubbles:!0,composed:!0}))}
              ></ap-asset-card>
            `})}
        ${this.isLoading?Array.from({length:Mc},()=>c`<div class="ghost-card">
                <div class="ghost-thumb"></div>
                <div class="ghost-info">
                  <div class="ghost-line ghost-name"></div>
                  <div class="ghost-line ghost-meta"></div>
                </div>
              </div>`):v}
      </div>
    `}};ue.styles=I`
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
  `;Ee([f({attribute:!1})],ue.prototype,"t",2);Ee([f({type:Array})],ue.prototype,"assets",2);Ee([f({type:Array})],ue.prototype,"folders",2);Ee([f({type:Object})],ue.prototype,"folderPreviews",2);Ee([f({type:Array})],ue.prototype,"selectedIds",2);Ee([f({type:Array})],ue.prototype,"selectedFolderIds",2);Ee([f({type:Array})],ue.prototype,"disabledAssetIds",2);Ee([f({type:Array})],ue.prototype,"disabledFolderIds",2);Ee([f({type:Boolean})],ue.prototype,"isLoading",2);Ee([f({type:Boolean})],ue.prototype,"multiSelect",2);Ee([f({type:Boolean})],ue.prototype,"folderSelectable",2);Ee([f({type:String})],ue.prototype,"gridSize",2);ue=Ee([R("ap-grid-view")],ue);var Dc=Object.defineProperty,Rc=Object.getOwnPropertyDescriptor,ve=(t,e,s,i)=>{for(var a=i>1?void 0:i?Rc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Dc(e,s,a),a};const zc=5;let oe=class extends O{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.assets=[],this.folders=[],this.selectedIds=[],this.selectedFolderIds=[],this.disabledAssetIds=[],this.disabledFolderIds=[],this.isLoading=!1,this.multiSelect=!0,this.folderSelectable=!1,this.totalCount=0,this.isSelectingAll=!1,this.folderPreviews={},this._compactLevel=0}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver(t=>{var i;const e=((i=t[0])==null?void 0:i.contentRect.width)??0,s=e<550?2:e<680?1:0;s!==this._compactLevel&&(this._compactLevel=s)}),this._resizeObserver.observe(this)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._resizeObserver)==null||t.disconnect()}_getGridColumns(t){const e=[];return t&&e.push("32px"),e.push("48px"),e.push("minmax(120px, 1fr)"),e.push("72px"),this._compactLevel<2&&e.push("100px"),this._compactLevel<1&&e.push("120px"),e.push("64px"),e.join(" ")}get _allVisibleSelected(){if(this.assets.length===0&&this.folders.length===0||this.selectedIds.length===0&&this.selectedFolderIds.length===0)return!1;const t=new Set(this.selectedIds),e=this.assets.length===0||this.assets.every(a=>t.has(a.uuid));if(!this.folderSelectable)return e&&this.assets.length>0;const s=new Set(this.selectedFolderIds),i=this.folders.length===0||this.folders.every(a=>s.has(a.uuid));return e&&i}_handleHeaderCheckboxClick(){if(this.isSelectingAll)return;const t=this.folderSelectable?this.totalCount+this.folders.length:this.totalCount,e=this.folderSelectable?this.selectedIds.length+this.selectedFolderIds.length:this.selectedIds.length;this._allVisibleSelected&&e>=t?this.dispatchEvent(new CustomEvent("selection-clear",{bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("select-all",{detail:{scope:"all"},bubbles:!0,composed:!0}))}render(){const t=this.folderSelectable?this.totalCount+this.folders.length:this.totalCount,e=this.folderSelectable?this.selectedIds.length+this.selectedFolderIds.length:this.selectedIds.length,s=this._allVisibleSelected&&e>=t;return c`
      <div class="list-header" ${K({"grid-template-columns":this._getGridColumns(this.multiSelect)})} role="row" aria-label="Column headers">
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
                <div class="ghost-row" ${K({"grid-template-columns":this._getGridColumns(this.multiSelect)})}>
                  ${this.multiSelect?c`<div class="ghost-el ghost-check"></div>`:v}
                  <div class="ghost-el ghost-thumb"></div>
                  <div class="ghost-el ghost-name" ${K({width:r[a]})}></div>
                  <div class="ghost-el ghost-type"></div>
                  ${this._compactLevel<2?c`<div class="ghost-el ghost-size"></div>`:v}
                  ${this._compactLevel<1?c`<div class="ghost-el ghost-date"></div>`:v}
                  <div></div>
                </div>
              `}):v}
      </div>
    `}};oe.styles=I`
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
  `;ve([f({attribute:!1})],oe.prototype,"t",2);ve([f({type:Array})],oe.prototype,"assets",2);ve([f({type:Array})],oe.prototype,"folders",2);ve([f({type:Array})],oe.prototype,"selectedIds",2);ve([f({type:Array})],oe.prototype,"selectedFolderIds",2);ve([f({type:Array})],oe.prototype,"disabledAssetIds",2);ve([f({type:Array})],oe.prototype,"disabledFolderIds",2);ve([f({type:Boolean})],oe.prototype,"isLoading",2);ve([f({type:Boolean})],oe.prototype,"multiSelect",2);ve([f({type:Boolean})],oe.prototype,"folderSelectable",2);ve([f({type:Number})],oe.prototype,"totalCount",2);ve([f({type:Boolean})],oe.prototype,"isSelectingAll",2);ve([f({type:Object})],oe.prototype,"folderPreviews",2);ve([w()],oe.prototype,"_compactLevel",2);oe=ve([R("ap-list-view")],oe);function Yi(t){if(t===0)return"0 B";const e=["B","KB","MB","GB","TB"],s=1024,i=Math.floor(Math.log(t)/Math.log(s));return`${(t/Math.pow(s,i)).toFixed(i===0?0:1)} ${e[i]}`}function si(t){if(!t)return"—";const e=new Date(t);return isNaN(e.getTime())?"—":e.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}function Ir(t,e){return!t||!e?"":`${t} x ${e}`}var Nc=Object.defineProperty,jc=Object.getOwnPropertyDescriptor,Mt=(t,e,s,i)=>{for(var a=i>1?void 0:i?jc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Nc(e,s,a),a};let Je=class extends O{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.index=0,this.selected=!1,this.disabled=!1,this.multiSelect=!0}_handleSelect(t){if(t.stopPropagation(),t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0}));return}this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:t},bubbles:!0}))}_handlePreview(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-preview",{detail:{asset:this.asset},bubbles:!0}))}_formatDuration(t){const e=Math.floor(t/3600),s=Math.floor(t%3600/60),i=Math.floor(t%60),a=r=>String(r).padStart(2,"0");return e>0?`${e}:${a(s)}:${a(i)}`:`${a(s)}:${a(i)}`}_handleQuickSelect(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0}))}render(){var p,h,u,d,g,b,y,_;const t=this.asset;if(!t)return c``;const s=Ht(t.type)==="video",i=((p=t.extension)==null?void 0:p.toLowerCase())==="pdf",a=!!((h=t.info)!=null&&h.thumbnail||(u=t.info)!=null&&u.image_thumbnail||(d=t.info)!=null&&d.preview),r=mr(t.extension||"")||a;let o="";s?o=yr(t):i?o=Vi(t):r&&(o=Js(t));const n=Os(t.extension||""),l=Bi(t.extension||"");return c`
      <div class="card" @click=${this._handleSelect}>
        <div class="thumbnail ${l&&o?"chess":""}">
          ${o?c`<img
                src=${o}
                alt=${t.name}
                loading="lazy"
                class="thumb-img ${l?"transparent-asset":""}"
                @error=${S=>{const k=S.target,N=Qt();k.src!==n&&k.src!==N?(k.src=n,k.classList.add("icon-fallback")):k.src!==N&&(k.src=N)}}
              />`:c`<img
                src=${n}
                alt=${t.name}
                class="thumb-img icon-fallback"
                @error=${S=>{const k=S.target,N=Qt();k.src!==N&&(k.src=N)}}
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
          <div class="meta">${(y=t.extension)==null?void 0:y.toUpperCase()}${(()=>{var T,E,H,A;const S=((T=t.info)==null?void 0:T.img_w)||((E=t.info)==null?void 0:E.video_w),k=((H=t.info)==null?void 0:H.img_h)||((A=t.info)==null?void 0:A.video_h),N=Ir(S,k);return N?` · ${N}`:""})()} · ${Yi(((_=t.size)==null?void 0:_.bytes)||0)}</div>
        </div>
      </div>
    `}};Je.styles=I`
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
  `;Mt([f({attribute:!1})],Je.prototype,"t",2);Mt([f({type:Object})],Je.prototype,"asset",2);Mt([f({type:Number})],Je.prototype,"index",2);Mt([f({type:Boolean,reflect:!0})],Je.prototype,"selected",2);Mt([f({type:Boolean,reflect:!0})],Je.prototype,"disabled",2);Mt([f({type:Boolean})],Je.prototype,"multiSelect",2);Je=Mt([R("ap-asset-card")],Je);var Uc=Object.defineProperty,Kc=Object.getOwnPropertyDescriptor,ft=(t,e,s,i)=>{for(var a=i>1?void 0:i?Kc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Uc(e,s,a),a};let Ve=class extends O{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.index=0,this.selected=!1,this.disabled=!1,this.multiSelect=!0,this.compactLevel=0}_getGridColumns(){const t=[];return this.multiSelect&&t.push("32px"),t.push("48px"),t.push("minmax(120px, 1fr)"),t.push("72px"),this.compactLevel<2&&t.push("100px"),this.compactLevel<1&&t.push("120px"),t.push("64px"),t.join(" ")}_handleSelect(t){if(t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0}));return}this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:t},bubbles:!0}))}_handlePreview(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-preview",{detail:{asset:this.asset},bubbles:!0}))}_handleQuickSelect(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0}))}render(){var p,h,u,d,g,b;const t=this.asset;if(!t)return c``;const s=Ht(t.type)==="video",i=((p=t.extension)==null?void 0:p.toLowerCase())==="pdf",a=!!((h=t.info)!=null&&h.thumbnail||(u=t.info)!=null&&u.image_thumbnail||(d=t.info)!=null&&d.preview),r=mr(t.extension||"")||a;let o="";s?o=yr(t):i?o=Vi(t):r&&(o=Js(t));const n=Os(t.extension||""),l=Bi(t.extension||"");return c`
      <div class="row" ${K({"grid-template-columns":this._getGridColumns()})} @click=${this._handleSelect}>
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
                @error=${y=>{const _=y.target,S=Qt();_.src!==n&&_.src!==S?(_.src=n,_.classList.add("icon-fallback")):_.src!==S&&(_.src=S)}}
              />`:c`<img
                src=${n}
                alt=${t.name}
                class="icon-fallback"
                @error=${y=>{const _=y.target,S=Qt();_.src!==S&&(_.src=S)}}
              />`}
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="type">${(g=t.extension)==null?void 0:g.toUpperCase()}</div>
        ${this.compactLevel<2?c`<div class="desc">${Yi(((b=t.size)==null?void 0:b.bytes)||0)}</div>`:v}
        ${this.compactLevel<1?c`<div class="date">${si(t.created_at||"")}</div>`:v}
        <div class="actions">
          <button class="icon-btn select-btn" @click=${this._handleQuickSelect} aria-label=${this.t("select","Select")} title=${this.t("select","Select")}>
            <ap-icon name="select" .size=${16}></ap-icon>
          </button>
          <button class="icon-btn" @click=${this._handlePreview} aria-label=${this.t("preview","Preview")} title=${this.t("preview","Preview")}>
            <ap-icon name="preview" .size=${16}></ap-icon>
          </button>
        </div>
      </div>
    `}};Ve.styles=I`
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
  `;ft([f({attribute:!1})],Ve.prototype,"t",2);ft([f({type:Object})],Ve.prototype,"asset",2);ft([f({type:Number})],Ve.prototype,"index",2);ft([f({type:Boolean,reflect:!0})],Ve.prototype,"selected",2);ft([f({type:Boolean,reflect:!0})],Ve.prototype,"disabled",2);ft([f({type:Boolean})],Ve.prototype,"multiSelect",2);ft([f({type:Number})],Ve.prototype,"compactLevel",2);Ve=ft([R("ap-asset-row")],Ve);var Bc=Object.defineProperty,Vc=Object.getOwnPropertyDescriptor,gt=(t,e,s,i)=>{for(var a=i>1?void 0:i?Vc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Bc(e,s,a),a};let He=class extends O{constructor(){super(...arguments),this.previews=[],this.selected=!1,this.disabled=!1,this.selectable=!1,this.multiSelect=!0,this.index=0}_handleClick(t){if(!this.selectable){this._handleOpen();return}if(t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){t.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-select",{detail:{folder:this.folder,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0,composed:!0}));return}this._handleOpen()}_handleOpen(){this.dispatchEvent(new CustomEvent("folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}_getPreviewUrl(t){return _r(t,"200")}_renderPreviewImg(t){const e=br(t.file_type),s=this._getPreviewUrl(t),i=Os(di(t.file_type)),a=Qt();return c`<div class="preview-slot ${e?"icon-bg":""}">
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
    `}};He.styles=[fe,I`
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
  `];gt([f({type:Object})],He.prototype,"folder",2);gt([f({type:Array})],He.prototype,"previews",2);gt([f({type:Boolean,reflect:!0})],He.prototype,"selected",2);gt([f({type:Boolean,reflect:!0})],He.prototype,"disabled",2);gt([f({type:Boolean})],He.prototype,"selectable",2);gt([f({type:Boolean})],He.prototype,"multiSelect",2);gt([f({type:Number})],He.prototype,"index",2);He=gt([R("ap-folder-card")],He);var Hc=Object.defineProperty,qc=Object.getOwnPropertyDescriptor,tt=(t,e,s,i)=>{for(var a=i>1?void 0:i?qc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Hc(e,s,a),a};let De=class extends O{constructor(){super(...arguments),this.previews=[],this.selected=!1,this.disabled=!1,this.selectable=!1,this.multiSelect=!0,this.index=0,this.compactLevel=0}_getGridColumns(){const t=[];return this.multiSelect&&t.push("32px"),t.push("48px"),t.push("minmax(120px, 1fr)"),t.push("72px"),this.compactLevel<2&&t.push("100px"),this.compactLevel<1&&t.push("120px"),t.push("64px"),t.join(" ")}_renderPreviewImg(t){const e=br(t.file_type),s=_r(t,"80"),i=Os(di(t.file_type)),a=Qt();return c`<div class="preview-slot ${e?"icon-bg":""}"><img
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
      <div class="row" ${K({"grid-template-columns":this._getGridColumns()})} @click=${this._handleClick}>
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
        ${this.compactLevel<1?c`<div class="meta">${si(t.modified_at||t.updated_at||"")}</div>`:v}
        <div></div>
      </div>
    `:c``}};De.styles=I`
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
  `;tt([f({type:Object})],De.prototype,"folder",2);tt([f({type:Array})],De.prototype,"previews",2);tt([f({type:Boolean,reflect:!0})],De.prototype,"selected",2);tt([f({type:Boolean,reflect:!0})],De.prototype,"disabled",2);tt([f({type:Boolean})],De.prototype,"selectable",2);tt([f({type:Boolean})],De.prototype,"multiSelect",2);tt([f({type:Number})],De.prototype,"index",2);tt([f({type:Number})],De.prototype,"compactLevel",2);De=tt([R("ap-folder-row")],De);var Gc=Object.defineProperty,Qc=Object.getOwnPropertyDescriptor,Xi=(t,e,s,i)=>{for(var a=i>1?void 0:i?Qc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Gc(e,s,a),a};let xs=class extends O{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("label-open",{detail:{label:this.label},bubbles:!0,composed:!0}))}render(){const t=this.label;if(!t)return c``;const e=t.assets_count??0,s=t.color||"#94a3b8";return c`
      <div class="card" @click=${this._handleClick}>
        <div class="icon-wrapper" ${K({background:`color-mix(in srgb, ${s} 10%, transparent)`})}>
          <ap-icon name="tag" .size=${18} ${K({color:s})}></ap-icon>
        </div>
        <div class="info">
          <div class="name" title=${t.name}>${t.name}</div>
          <div class="count">${e} asset${e!==1?"s":""}</div>
        </div>
      </div>
    `}};xs.styles=[fe,I`
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
  `];Xi([f({type:Object})],xs.prototype,"label",2);Xi([f({type:Number})],xs.prototype,"index",2);xs=Xi([R("ap-label-card")],xs);var Wc=Object.defineProperty,Yc=Object.getOwnPropertyDescriptor,Ji=(t,e,s,i)=>{for(var a=i>1?void 0:i?Yc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Wc(e,s,a),a};let $s=class extends O{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("label-open",{detail:{label:this.label},bubbles:!0,composed:!0}))}render(){const t=this.label;if(!t)return c``;const e=t.assets_count??0,s=t.color||"#94a3b8";return c`
      <div class="row" @click=${this._handleClick}>
        <div class="icon-wrapper" ${K({background:`color-mix(in srgb, ${s} 10%, transparent)`})}>
          <ap-icon name="tag" .size=${16} ${K({color:s})}></ap-icon>
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="count">${e} asset${e!==1?"s":""}</div>
      </div>
    `}};$s.styles=I`
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
  `;Ji([f({type:Object})],$s.prototype,"label",2);Ji([f({type:Number})],$s.prototype,"index",2);$s=Ji([R("ap-label-row")],$s);var Xc=Object.defineProperty,Jc=Object.getOwnPropertyDescriptor,Zi=(t,e,s,i)=>{for(var a=i>1?void 0:i?Jc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Xc(e,s,a),a};let ws=class extends O{constructor(){super(...arguments),this.index=0}connectedCallback(){super.connectedCallback(),this.style.setProperty("--ap-stagger-index",String(this.index))}updated(t){t.has("index")&&this.style.setProperty("--ap-stagger-index",String(this.index))}_handleClick(){this.dispatchEvent(new CustomEvent("collection-open",{detail:{collection:this.collection},bubbles:!0,composed:!0}))}render(){const t=this.collection;return t?c`
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
    `:c``}};ws.styles=[fe,I`
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
  `];Zi([f({type:Object})],ws.prototype,"collection",2);Zi([f({type:Number})],ws.prototype,"index",2);ws=Zi([R("ap-collection-card")],ws);var Zc=Object.defineProperty,ed=Object.getOwnPropertyDescriptor,ea=(t,e,s,i)=>{for(var a=i>1?void 0:i?ed(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Zc(e,s,a),a};let ks=class extends O{constructor(){super(...arguments),this.index=0}_formatDate(t){if(!t)return"";try{return new Date(t).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return""}}_handleClick(){this.dispatchEvent(new CustomEvent("collection-open",{detail:{collection:this.collection},bubbles:!0,composed:!0}))}render(){const t=this.collection;return t?c`
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
    `:c``}};ks.styles=I`
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
  `;ea([f({type:Object})],ks.prototype,"collection",2);ea([f({type:Number})],ks.prototype,"index",2);ks=ea([R("ap-collection-row")],ks);var td=Object.defineProperty,sd=Object.getOwnPropertyDescriptor,ta=(t,e,s,i)=>{for(var a=i>1?void 0:i?sd(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&td(e,s,a),a};let Ss=class extends O{constructor(){super(...arguments),this.index=0}connectedCallback(){super.connectedCallback(),this.style.setProperty("--ap-stagger-index",String(this.index))}updated(t){t.has("index")&&this.style.setProperty("--ap-stagger-index",String(this.index))}_handleClick(){this.dispatchEvent(new CustomEvent("collection-folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){const t=this.folder;return t?c`
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
    `:c``}};Ss.styles=[fe,I`
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
  `];ta([f({type:Object})],Ss.prototype,"folder",2);ta([f({type:Number})],Ss.prototype,"index",2);Ss=ta([R("ap-collection-folder-card")],Ss);var id=Object.defineProperty,ad=Object.getOwnPropertyDescriptor,sa=(t,e,s,i)=>{for(var a=i>1?void 0:i?ad(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&id(e,s,a),a};let Cs=class extends O{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("collection-folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){const t=this.folder;return t?c`
      <div class="row" @click=${this._handleClick}>
        <div class="icon-wrapper">
          <ap-icon name="folder" .size=${16}></ap-icon>
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="chevron">
          <ap-icon name="chevron-right" .size=${16}></ap-icon>
        </div>
      </div>
    `:c``}};Cs.styles=I`
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
  `;sa([f({type:Object})],Cs.prototype,"folder",2);sa([f({type:Number})],Cs.prototype,"index",2);Cs=sa([R("ap-collection-folder-row")],Cs);var rd=Object.defineProperty,od=Object.getOwnPropertyDescriptor,es=(t,e,s,i)=>{for(var a=i>1?void 0:i?od(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&rd(e,s,a),a};let dt=class extends O{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.variant="grid",this.gridSize="normal",this.multiSelect=!0,this.folderCount=0}render(){if(this.variant==="grid"){const o=this.gridSize==="large"?"280px":"220px";return c`
        <div class="grid-skeleton" ${K({"--ap-grid-min-col":String(o)})}>
          ${Array.from({length:18},()=>c`<div class="card-skel">
            <div class="skeleton card-skel-thumb"></div>
            <div class="card-skel-info">
              <div class="skeleton card-skel-name"></div>
              <div class="skeleton card-skel-meta"></div>
            </div>
          </div>`)}
        </div>
      `}const t=[];this.multiSelect&&t.push("32px"),t.push("48px","minmax(120px, 1fr)","72px","100px","120px","36px");const e=t.join(" "),s=c`
      <div class="row-skel" ${K({"grid-template-columns":e})}>
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
      <div class="row-skel" ${K({"grid-template-columns":e})}>
        ${this.multiSelect?c`<div class="row-skel-check-wrap"><div class="skeleton row-skel-check"></div></div>`:""}
        <div class="skeleton row-skel-thumb"></div>
        <div class="skeleton row-skel-name" ${K({width:o})}></div>
        <div class="skeleton row-skel-type"></div>
        <div class="skeleton row-skel-size"></div>
        <div class="skeleton row-skel-date"></div>
        <div></div>
      </div>
    `,a=["70%","55%","80%","45%","65%","50%","75%","60%","85%","40%","72%","58%"],r=12-this.folderCount;return c`
      <div class="list-header" ${K({"grid-template-columns":e})}>
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
    `}};dt.styles=I`
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
  `;es([f({attribute:!1})],dt.prototype,"t",2);es([f({reflect:!0})],dt.prototype,"variant",2);es([f({type:String})],dt.prototype,"gridSize",2);es([f({type:Boolean})],dt.prototype,"multiSelect",2);es([f({type:Number})],dt.prototype,"folderCount",2);dt=es([R("ap-skeleton")],dt);var nd=Object.defineProperty,ld=Object.getOwnPropertyDescriptor,le=(t,e,s,i)=>{for(var a=i>1?void 0:i?ld(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&nd(e,s,a),a};let se=class extends O{constructor(){super(...arguments),this.asset=null,this.assets=[],this.selectedIds=[],this.containerToken="",this.showMetadata=!0,this.metadataFields=[],this.labels=[],this.regionalFilters={},this.multiSelect=!0,this.t=(t,e)=>typeof e=="string"?e:t,this._isFullscreen=!1,this._fsImageLoaded=!1,this._previewLoading=!1,this._openSections=new Set(["file-info","metadata"]),this._hls=null}connectedCallback(){super.connectedCallback(),this._onFullscreenChange=this._onFullscreenChange.bind(this),this._onKeyDown=this._onKeyDown.bind(this),document.addEventListener("fullscreenchange",this._onFullscreenChange),document.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this._onFullscreenChange),document.removeEventListener("keydown",this._onKeyDown),this._destroyHls()}_onKeyDown(t){if(t.key!=="ArrowLeft"&&t.key!=="ArrowRight")return;const e=t.composedPath()[0];if(!e)return;const s=e.tagName;s==="INPUT"||s==="TEXTAREA"||s==="SELECT"||e.getAttribute("role")==="radio"||e.getAttribute("role")==="listbox"||e.isContentEditable||(t.preventDefault(),t.key==="ArrowLeft"?this._prev():this._next())}_destroyHls(){this._hls&&(this._hls.destroy(),this._hls=null)}updated(t){if(super.updated(t),t.has("asset")&&(this._destroyHls(),this._previewLoading=!0,this.asset)){const e=Ht(this.asset.type);e==="video"&&this._setupHls(this.asset),e!=="image"&&e!=="video"&&(this._previewLoading=!1)}}async _setupHls(t){var i,a;const e=kn(t);if(!e||(await this.updateComplete,((i=this.asset)==null?void 0:i.uuid)!==t.uuid))return;const s=this._videoEl;if(s){if(s.canPlayType("application/vnd.apple.mpegurl")){s.src=e;return}try{const{default:r}=await G(async()=>{const{default:n}=await import("./hls.light-8mz_AqX7.js");return{default:n}},[]);if(!r.isSupported()||((a=this.asset)==null?void 0:a.uuid)!==t.uuid||!this.isConnected)return;const o=new r;this._hls=o,o.loadSource(e),o.attachMedia(s),o.on(r.Events.ERROR,(n,l)=>{var p;l.fatal&&(this._destroyHls(),s.src=((p=t.url)==null?void 0:p.cdn)||"")})}catch{}}}_onFullscreenChange(){this._isFullscreen=!!document.fullscreenElement,this._isFullscreen&&(this._fsImageLoaded=!1)}_close(){this.dispatchEvent(new CustomEvent("preview-close",{bubbles:!0,composed:!0}))}_exitFullscreen(){var t;(t=document.exitFullscreen)==null||t.call(document)}_fullscreen(){var e,s,i,a,r,o;if(((s=(e=this.asset)==null?void 0:e.extension)==null?void 0:s.toLowerCase())==="pdf"&&((a=(i=this.asset)==null?void 0:i.url)!=null&&a.cdn)){window.open(this.asset.url.cdn,"_blank","noopener");return}this._fsImageLoaded=!1,(o=(r=this.previewArea)==null?void 0:r.requestFullscreen)==null||o.call(r)}_select(){if(!this.asset)return;if(!this.multiSelect){this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0,composed:!0}));return}const t=this._getCurrentIndex();this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:t,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0})},bubbles:!0,composed:!0}))}_getCurrentIndex(){return!this.asset||this.assets.length===0?-1:this.assets.findIndex(t=>t.uuid===this.asset.uuid)}_navigateTo(t){this._fsImageLoaded=!1,this.dispatchEvent(new CustomEvent("preview-navigate",{detail:{asset:t},bubbles:!0,composed:!0}))}_supportsFullscreen(t){const e=Ht(t.type);return e==="image"||e==="video"||e==="audio"}_findNavTarget(t,e){const s=e===1?this.assets.length:-1;for(let i=t+e;i!==s;i+=e)if(!this._isFullscreen||this._supportsFullscreen(this.assets[i]))return i;return-1}_prev(){const t=this._getCurrentIndex();if(t<=0)return;const e=this._findNavTarget(t,-1);e>=0&&this._navigateTo(this.assets[e])}_next(){const t=this._getCurrentIndex();if(t<0||t>=this.assets.length-1)return;const e=this._findNavTarget(t,1);e>=0&&this._navigateTo(this.assets[e])}_getFullscreenImageUrl(t){var a,r;const e=(a=t.url)==null?void 0:a.cdn;if(!e)return Js(t)||"";const s={source:"asset",asset:t};if(((r=t.extension)==null?void 0:r.toLowerCase())==="svg")return Qe(e,s);const i=Wt(e,this.containerToken);return Qe(At(i,{w:String(window.screen.width),dpr:String(window.devicePixelRatio||1),org_if_sml:"1"}),s)}_getBlurDimensions(t){var o,n;const e=(o=t.info)==null?void 0:o.img_w,s=(n=t.info)==null?void 0:n.img_h;if(!e||!s)return{width:"100vw",height:"100vh"};const i=window.innerWidth,a=window.innerHeight,r=Math.min(i/e,a/s,1);return{width:`${Math.round(e*r)}px`,height:`${Math.round(s*r)}px`}}_onFsImageLoad(){this._fsImageLoaded=!0}_getTagEntries(t){if(!t)return[];if(Array.isArray(t))return this._parseTagArray(t);const e=Object.values(t);if(e.length>0&&Array.isArray(e[0])){const s=e.flat(),i=new Set;return s.filter(a=>!a.label||i.has(a.sid)?!1:(i.add(a.sid),!0))}return e.map(s=>({label:s.label,sid:s.sid})).filter(s=>s.label)}_parseTagArray(t){return t.map(e=>{if(typeof e=="string")return{label:e,sid:e};const s=e;return{label:s.label||Object.values(s.names||{})[0]||"",sid:s.sid||""}}).filter(e=>e.label)}_applyTagFilter(t){this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:C.TAGS,values:[t],operator:U.IS},bubbles:!0,composed:!0}))}_applyLabelFilter(t){this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:C.LABELS,values:[t],operator:U.IS},bubbles:!0,composed:!0}))}_toggleSection(t){const e=new Set(this._openSections);e.has(t)?e.delete(t):e.add(t),this._openSections=e}_renderFileInfoSection(t){const e=this._getFileInfoRows(t);if(e.length===0)return v;const s=this._openSections.has("file-info");return c`
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
    `}_getFileInfoRows(t){var s,i,a,r,o,n;const e=[];return e.push({label:this.t("fileName","File name"),value:t.name}),t.extension&&e.push({label:this.t("fileType","Type"),value:t.extension.toUpperCase()}),(s=t.size)!=null&&s.bytes&&e.push({label:this.t("fileSize","Size"),value:Yi(t.size.bytes)}),(i=t.info)!=null&&i.img_w&&e.push({label:this.t("dimensions","Dimensions"),value:Ir(t.info.img_w,t.info.img_h)}),(a=t.info)!=null&&a.video_w&&e.push({label:this.t("videoResolution","Video resolution"),value:`${t.info.video_w} x ${t.info.video_h}`}),(((r=t.info)==null?void 0:r.video_duration)??((o=t.info)==null?void 0:o.duration))!=null&&e.push({label:this.t("duration","Duration"),value:`${Math.round(t.info.video_duration??t.info.duration)}s`}),(n=t.info)!=null&&n.color_space&&e.push({label:this.t("colorSpace","Color space"),value:t.info.color_space}),t.created_at&&e.push({label:this.t("created","Created"),value:si(t.created_at)}),t.modified_at&&e.push({label:this.t("modified","Modified"),value:si(t.modified_at)}),e}_buildFieldMap(){const t=new Map;for(const e of this.metadataFields)t.set(e.key,e),e.ckey&&t.set(e.ckey,e),e.slug&&t.set(e.slug,e);return t}_resolveSlug(t,e){var i;if(!((i=e.possible_values)!=null&&i.length)||!t.startsWith("@"))return t;const s=e.possible_values.find(a=>a.internal_unique_value===t||a.api_value===t);return(s==null?void 0:s.label)??t}_resolveFieldValue(t,e){var s;if(t==null||t==="")return"";if(e.regionalVariantsGroupUuid&&typeof t=="object"&&t!==null&&!Array.isArray(t)){const i=this.regionalFilters[e.regionalVariantsGroupUuid];if(i){const a=t[i];if(a!=null&&a!=="")return this._resolveFieldValue(a,{...e,regionalVariantsGroupUuid:void 0})}return""}if((s=e.possible_values)!=null&&s.length)return Array.isArray(t)?t.map(a=>this._resolveSlug(String(a),e)).filter(Boolean).join(", "):this._resolveSlug(String(t),e);if(Array.isArray(t))return t.join(", ");if(typeof t=="object"){const i=JSON.stringify(t);return i==="{}"||i==="[]"?"":i}return String(t)}_getAllMetadataRows(t){var r,o,n,l;const e=[],s=this._buildFieldMap(),i=new Set;if(this.metadataFields.length>0){const p=t;for(const h of this.metadataFields){const u=p[h.key]??((o=(r=t.info)==null?void 0:r.metadata)==null?void 0:o[h.key])??((n=t.meta)==null?void 0:n[h.key]),d=this._resolveFieldValue(u,h);if(!d)continue;i.add(h.key),h.slug&&i.add(h.slug);const g=d.length>50;e.push({label:h.label,value:d,wrap:g})}}if(t.meta)for(const[p,h]of Object.entries(t.meta)){if(i.has(p)||h==null||h==="")continue;const u=s.get(p);if(u){const d=this._resolveFieldValue(h,u);if(!d)continue;i.add(p);const g=d.length>50;e.push({label:u.label,value:d,wrap:g})}else{const d=typeof h=="object"?JSON.stringify(h):String(h);if(!d||d==="{}"||d==="[]")continue;i.add(p);const g=p.charAt(0).toUpperCase()+p.slice(1).replace(/_/g," "),b=d.length>50;e.push({label:g,value:d,wrap:b})}}const a=(l=t.info)==null?void 0:l.metadata;if(a&&typeof a=="object")for(const[p,h]of Object.entries(a)){if(i.has(p)||h==null||h==="")continue;const u=s.get(p);if(u){const d=this._resolveFieldValue(h,u);if(!d)continue;i.add(p);const g=d.length>50;e.push({label:u.label,value:d,wrap:g})}else{const d=typeof h=="object"?JSON.stringify(h):String(h);if(!d||d==="{}"||d==="[]")continue;i.add(p);const g=p.charAt(0).toUpperCase()+p.slice(1).replace(/_/g," "),b=d.length>50;e.push({label:g,value:d,wrap:b})}}return e}_getAssetLabels(t){return!t.labels||t.labels.length===0?[]:t.labels.map(e=>this.labels.find(s=>s.sid===e||s.uuid===e)).filter(e=>!!e)}_renderLabelsRow(t){const e=this._getAssetLabels(t);return e.length===0?v:c`
      <div class="meta-row meta-row--col">
        <span class="meta-label">${this.t("labels","Labels")}</span>
        <div class="tags-list">
          ${e.map(s=>c`
            <ap-badge class="tag-link" ${K({"--ap-muted":`${s.color}22`,"--ap-muted-foreground":s.color})} @click=${()=>this._applyLabelFilter(s.sid||s.uuid)}>
              <span class="label-content">
                <ap-icon name="tag" .size=${12} ${K({color:s.color})}></ap-icon>
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
    `}render(){var T,E,H,A,q,z,F,ee;const t=this.asset;if(!t)return v;const e=Ht(t.type),s=e==="image",i=e==="video",a=e==="audio",r=((T=t.extension)==null?void 0:T.toLowerCase())==="pdf",o=Os(t.extension||""),n=Bi(t.extension||""),l=((E=t.extension)==null?void 0:E.toLowerCase())==="svg",p=Js(t),h=s?l?Qe(((H=t.url)==null?void 0:H.cdn)||"",{source:"asset",asset:t}):p||Qe(Wt(((A=t.url)==null?void 0:A.cdn)||"",this.containerToken),{source:"asset",asset:t}):"",u=s?this._getFullscreenImageUrl(t):"",d=s&&!l?this._getBlurDimensions(t):null,g=i&&((q=t.url)==null?void 0:q.cdn)||"",b=i?Qe(((z=t.info)==null?void 0:z.video_thumbnail)||((F=t.info)==null?void 0:F.preview)||"",{source:"video",asset:t}):"",y=r&&!s?Vi(t):"",_=this._getCurrentIndex(),S=_>0&&this._findNavTarget(_,-1)>=0,k=_>=0&&this._findNavTarget(_,1)>=0,N=this.assets.length>1;return c`
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
              @load=${Y=>{Y.target.classList.remove("icon-fallback"),this._previewLoading=!1}}
              @error=${Y=>{const J=Y.target;this._previewLoading=!1,J.src!==o&&(J.src=o,J.classList.add("icon-fallback"))}}
            />
            <div class="fs-wrapper">
              ${l?v:c`
                <img
                  class="fs-blur ${this._fsImageLoaded?"hidden":""}"
                  src=${h}
                  alt=""
                  ${K({width:d.width,height:d.height})}
                />
              `}
              <img
                class="fs-full ${l||this._fsImageLoaded?"loaded":""}"
                src=${this._isFullscreen?u:""}
                alt=${t.name}
                ${K(l?{width:"100vw",height:"100vh"}:null)}
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
              @error=${Y=>{const J=Y.target;J.src!==o&&(J.src=o,J.classList.add("icon-fallback"))}}
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
  `;le([f({type:Object})],se.prototype,"asset",2);le([f({type:Array})],se.prototype,"assets",2);le([f({type:Array})],se.prototype,"selectedIds",2);le([f()],se.prototype,"containerToken",2);le([f({type:Boolean})],se.prototype,"showMetadata",2);le([f({type:Array})],se.prototype,"metadataFields",2);le([f({type:Array})],se.prototype,"labels",2);le([f({type:Object})],se.prototype,"regionalFilters",2);le([f({type:Boolean})],se.prototype,"multiSelect",2);le([f({attribute:!1})],se.prototype,"t",2);le([pt(".preview-area")],se.prototype,"previewArea",2);le([pt("video")],se.prototype,"_videoEl",2);le([w()],se.prototype,"_isFullscreen",2);le([w()],se.prototype,"_fsImageLoaded",2);le([w()],se.prototype,"_previewLoading",2);le([w()],se.prototype,"_openSections",2);se=le([R("ap-preview-panel")],se);var cd=Object.defineProperty,dd=Object.getOwnPropertyDescriptor,ia=(t,e,s,i)=>{for(var a=i>1?void 0:i?dd(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&cd(e,s,a),a};const pd={sparkles:[{tag:"path",attrs:{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"}},{tag:"path",attrs:{d:"M5 3v4"}},{tag:"path",attrs:{d:"M19 17v4"}},{tag:"path",attrs:{d:"M3 5h4"}},{tag:"path",attrs:{d:"M17 19h4"}}],search:[{tag:"circle",attrs:{cx:"11",cy:"11",r:"8"}},{tag:"path",attrs:{d:"m21 21-4.3-4.3"}}],check:"M20 6 9 17l-5-5","check-check":[{tag:"path",attrs:{d:"M18 6 7 17l-5-5"}},{tag:"path",attrs:{d:"m22 10-7.5 7.5L13 16"}}],close:[{tag:"path",attrs:{d:"M18 6 6 18"}},{tag:"path",attrs:{d:"m6 6 12 12"}}],"chevron-left":"m15 18-6-6 6-6","chevron-right":"m9 18 6-6-6-6","chevron-down":"m6 9 6 6 6-6",download:[{tag:"path",attrs:{d:"M12 15V3"}},{tag:"path",attrs:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"path",attrs:{d:"m7 10 5 5 5-5"}}],upload:[{tag:"path",attrs:{d:"M12 3v12"}},{tag:"path",attrs:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"path",attrs:{d:"m17 8-5-5-5 5"}}],fullscreen:[{tag:"path",attrs:{d:"M8 3H5a2 2 0 0 0-2 2v3"}},{tag:"path",attrs:{d:"M21 8V5a2 2 0 0 0-2-2h-3"}},{tag:"path",attrs:{d:"M3 16v3a2 2 0 0 0 2 2h3"}},{tag:"path",attrs:{d:"M16 21h3a2 2 0 0 0 2-2v-3"}}],trash:[{tag:"path",attrs:{d:"M10 11v6"}},{tag:"path",attrs:{d:"M14 11v6"}},{tag:"path",attrs:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}},{tag:"path",attrs:{d:"M3 6h18"}},{tag:"path",attrs:{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}}],more:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"1"}},{tag:"circle",attrs:{cx:"19",cy:"12",r:"1"}},{tag:"circle",attrs:{cx:"5",cy:"12",r:"1"}}],grid:[{tag:"rect",attrs:{x:"3",y:"3",width:"18",height:"18",rx:"2"}},{tag:"path",attrs:{d:"M12 3v18"}},{tag:"path",attrs:{d:"M3 12h18"}}],list:[{tag:"path",attrs:{d:"M3 5h.01"}},{tag:"path",attrs:{d:"M3 12h.01"}},{tag:"path",attrs:{d:"M3 19h.01"}},{tag:"path",attrs:{d:"M8 5h13"}},{tag:"path",attrs:{d:"M8 12h13"}},{tag:"path",attrs:{d:"M8 19h13"}}],preview:[{tag:"path",attrs:{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}},{tag:"circle",attrs:{cx:"12",cy:"12",r:"3"}}],select:[{tag:"path",attrs:{d:"M5 12h14"}},{tag:"path",attrs:{d:"M12 5v14"}}],"gallery-vertical-end":[{tag:"path",attrs:{d:"M7 2h10"}},{tag:"path",attrs:{d:"M5 6h14"}},{tag:"rect",attrs:{width:"18",height:"12",x:"3",y:"10",rx:"2"}}],filter:[{tag:"path",attrs:{d:"M2 5h20"}},{tag:"path",attrs:{d:"M6 12h12"}},{tag:"path",attrs:{d:"M9 19h6"}}],sort:[{tag:"path",attrs:{d:"m21 16-4 4-4-4"}},{tag:"path",attrs:{d:"M17 20V4"}},{tag:"path",attrs:{d:"m3 8 4-4 4 4"}},{tag:"path",attrs:{d:"M7 4v16"}}],"sort-asc":[{tag:"path",attrs:{d:"m3 8 4-4 4 4"}},{tag:"path",attrs:{d:"M7 4v16"}},{tag:"path",attrs:{d:"M11 12h4"}},{tag:"path",attrs:{d:"M11 16h7"}},{tag:"path",attrs:{d:"M11 20h10"}}],"sort-desc":[{tag:"path",attrs:{d:"m3 16 4 4 4-4"}},{tag:"path",attrs:{d:"M7 20V4"}},{tag:"path",attrs:{d:"M11 4h4"}},{tag:"path",attrs:{d:"M11 8h7"}},{tag:"path",attrs:{d:"M11 12h10"}}],image:[{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}},{tag:"circle",attrs:{cx:"9",cy:"9",r:"2"}},{tag:"path",attrs:{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}}],video:[{tag:"path",attrs:{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}},{tag:"rect",attrs:{x:"2",y:"6",width:"14",height:"12",rx:"2"}}],audio:[{tag:"path",attrs:{d:"M9 18V5l12-2v13"}},{tag:"circle",attrs:{cx:"6",cy:"18",r:"3"}},{tag:"circle",attrs:{cx:"18",cy:"16",r:"3"}}],music:[{tag:"path",attrs:{d:"M9 18V5l12-2v13"}},{tag:"circle",attrs:{cx:"6",cy:"18",r:"3"}},{tag:"circle",attrs:{cx:"18",cy:"16",r:"3"}}],document:[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 9H8"}},{tag:"path",attrs:{d:"M16 13H8"}},{tag:"path",attrs:{d:"M16 17H8"}}],"file-text":[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 9H8"}},{tag:"path",attrs:{d:"M16 13H8"}},{tag:"path",attrs:{d:"M16 17H8"}}],file:[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}}],archive:[{tag:"rect",attrs:{width:"20",height:"5",x:"2",y:"3",rx:"1"}},{tag:"path",attrs:{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}},{tag:"path",attrs:{d:"M10 12h4"}}],font:[{tag:"path",attrs:{d:"M12 4v16"}},{tag:"path",attrs:{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"}},{tag:"path",attrs:{d:"M9 20h6"}}],text:[{tag:"path",attrs:{d:"M12 4v16"}},{tag:"path",attrs:{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"}},{tag:"path",attrs:{d:"M9 20h6"}}],clapperboard:[{tag:"path",attrs:{d:"m12.296 3.464 3.02 3.956"}},{tag:"path",attrs:{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z"}},{tag:"path",attrs:{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}},{tag:"path",attrs:{d:"m6.18 5.276 3.1 3.899"}}],folder:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z","folder-open":"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2","folder-plus":[{tag:"path",attrs:{d:"M12 10v6"}},{tag:"path",attrs:{d:"M9 13h6"}},{tag:"path",attrs:{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}}],inbox:[{tag:"path",attrs:{d:"M22 12L16 12L14 15L10 15L8 12L2 12"}},{tag:"path",attrs:{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}}],tags:[{tag:"path",attrs:{d:"M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z"}},{tag:"path",attrs:{d:"M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193"}},{tag:"circle",attrs:{cx:"10.5",cy:"6.5",r:".5",fill:"currentColor"}}],tag:[{tag:"path",attrs:{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}},{tag:"circle",attrs:{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}}],hash:[{tag:"path",attrs:{d:"M4 9h16"}},{tag:"path",attrs:{d:"M4 15h16"}},{tag:"path",attrs:{d:"M10 3 8 21"}},{tag:"path",attrs:{d:"M14 3 16 21"}}],calendar:[{tag:"path",attrs:{d:"M8 2v4"}},{tag:"path",attrs:{d:"M16 2v4"}},{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"4",rx:"2"}},{tag:"path",attrs:{d:"M3 10h18"}}],"file-type":[{tag:"path",attrs:{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}},{tag:"path",attrs:{d:"M14 2v4a2 2 0 0 0 2 2h4"}},{tag:"path",attrs:{d:"M2 13v-1h6v1"}},{tag:"path",attrs:{d:"M5 12v6"}},{tag:"path",attrs:{d:"M4 18h2"}}],scaling:[{tag:"path",attrs:{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}},{tag:"path",attrs:{d:"M14 15H9v-5"}},{tag:"path",attrs:{d:"M20 9V4h-5"}},{tag:"path",attrs:{d:"M20 4l-6 6"}}],history:[{tag:"path",attrs:{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}},{tag:"path",attrs:{d:"M3 3v5h5"}},{tag:"path",attrs:{d:"M12 7v5l4 2"}}],"swatch-book":[{tag:"path",attrs:{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"}},{tag:"path",attrs:{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"}},{tag:"path",attrs:{d:"M7 17h.01"}},{tag:"path",attrs:{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"}}],"badge-check":[{tag:"path",attrs:{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}},{tag:"path",attrs:{d:"m9 12 2 2 4-4"}}],box:[{tag:"path",attrs:{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}},{tag:"path",attrs:{d:"m3.3 7 8.7 5 8.7-5"}},{tag:"path",attrs:{d:"M12 22V12"}}],"layout-grid":[{tag:"rect",attrs:{width:"7",height:"7",x:"3",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"14",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"14",y:"14",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"3",y:"14",rx:"1"}}],"layout-template":[{tag:"rect",attrs:{width:"18",height:"7",x:"3",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"9",height:"7",x:"3",y:"14",rx:"1"}},{tag:"rect",attrs:{width:"5",height:"7",x:"16",y:"14",rx:"1"}}],pin:[{tag:"path",attrs:{d:"M12 17v5"}},{tag:"path",attrs:{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 2-2H6a2 2 0 0 0 2 2 1 1 0 0 1 1 1z"}}],"pin-off":[{tag:"path",attrs:{d:"M12 17v5"}},{tag:"path",attrs:{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 2-2H6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v2.34"}},{tag:"path",attrs:{d:"M2 2l20 20"}},{tag:"path",attrs:{d:"M9 12a2 2 0 0 1-1.11 1.79l-1.78.9"}},{tag:"path",attrs:{d:"M17 17H5"}}],lock:[{tag:"rect",attrs:{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}},{tag:"path",attrs:{d:"M7 11V7a5 5 0 0 1 10 0v4"}}],globe:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}},{tag:"path",attrs:{d:"M2 12h20"}}],"circle-check-big":[{tag:"path",attrs:{d:"M21.801 10A10 10 0 1 1 17 3.335"}},{tag:"path",attrs:{d:"m9 11 3 3L22 4"}}],"x-circle":[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"m15 9-6 6"}},{tag:"path",attrs:{d:"m9 9 6 6"}}],ban:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"m4.9 4.9 14.2 14.2"}}],clock:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"M12 6v6l4 2"}}],"toggle-left":[{tag:"rect",attrs:{width:"20",height:"14",x:"2",y:"5",rx:"7"}},{tag:"circle",attrs:{cx:"9",cy:"12",r:"3"}}],"file-digit":[{tag:"path",attrs:{d:"M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 16h2v6"}},{tag:"path",attrs:{d:"M10 22h4"}},{tag:"rect",attrs:{width:"4",height:"6",x:"2",y:"16",rx:"2"}}],"decimals-arrow-right":[{tag:"path",attrs:{d:"M10 18h10"}},{tag:"path",attrs:{d:"m17 21 3-3-3-3"}},{tag:"path",attrs:{d:"M3 11h.01"}},{tag:"rect",attrs:{width:"5",height:"8",x:"15",y:"3",rx:"2.5"}},{tag:"rect",attrs:{width:"5",height:"8",x:"6",y:"3",rx:"2.5"}}],"text-initial":[{tag:"path",attrs:{d:"M15 5h6"}},{tag:"path",attrs:{d:"M15 12h6"}},{tag:"path",attrs:{d:"M3 19h18"}},{tag:"path",attrs:{d:"m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12"}},{tag:"path",attrs:{d:"M3.92 10h6.16"}}],"text-align-justify":[{tag:"path",attrs:{d:"M3 5h18"}},{tag:"path",attrs:{d:"M3 12h18"}},{tag:"path",attrs:{d:"M3 19h18"}}],paperclip:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551","link-2":[{tag:"path",attrs:{d:"M9 17H7A5 5 0 0 1 7 7h2"}},{tag:"path",attrs:{d:"M15 7h2a5 5 0 1 1 0 10h-2"}},{tag:"path",attrs:{d:"M8 12h8"}}],"circle-dot":[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"circle",attrs:{cx:"12",cy:"12",r:"1"}}],"square-check":[{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"3",rx:"2"}},{tag:"path",attrs:{d:"m9 12 2 2 4-4"}}],locate:[{tag:"path",attrs:{d:"M2 12h3"}},{tag:"path",attrs:{d:"M19 12h3"}},{tag:"path",attrs:{d:"M12 2v3"}},{tag:"path",attrs:{d:"M12 19v3"}},{tag:"circle",attrs:{cx:"12",cy:"12",r:"7"}}],"list-ordered":[{tag:"path",attrs:{d:"M11 5h10"}},{tag:"path",attrs:{d:"M11 12h10"}},{tag:"path",attrs:{d:"M11 19h10"}},{tag:"path",attrs:{d:"M4 4h1v5"}},{tag:"path",attrs:{d:"M4 9h2"}},{tag:"path",attrs:{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02"}}],plus:[{tag:"path",attrs:{d:"M5 12h14"}},{tag:"path",attrs:{d:"M12 5v14"}}],component:[{tag:"path",attrs:{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}}]};let As=class extends O{constructor(){super(...arguments),this.name="",this.size=20}render(){const t=pd[this.name];if(!t)return v;const e=typeof t=="string"?rt`<path d=${t}></path>`:t.map(s=>{const{tag:i,attrs:a}=s;return i==="circle"?rt`<circle cx=${a.cx} cy=${a.cy} r=${a.r} fill=${a.fill??"none"}></circle>`:i==="rect"?rt`<rect width=${a.width} height=${a.height} x=${a.x} y=${a.y} rx=${a.rx??"0"} ry=${a.ry??"0"}></rect>`:rt`<path d=${a.d}></path>`});return c`
      <svg
        ${K({"--icon-size":`${this.size}px`})}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        ${e}
      </svg>
    `}};As.styles=[I`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      svg {
        width: var(--icon-size, 20px);
        height: var(--icon-size, 20px);
      }
    `];ia([f()],As.prototype,"name",2);ia([f({type:Number})],As.prototype,"size",2);As=ia([R("ap-icon")],As);var hd=Object.defineProperty,ud=Object.getOwnPropertyDescriptor,Ge=(t,e,s,i)=>{for(var a=i>1?void 0:i?ud(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&hd(e,s,a),a};let Le=class extends O{constructor(){super(...arguments),this.selectedAssets=[],this.selectedFolders=[],this.totalCount=0,this.totalFolderCount=0,this.isSelectingAll=!1,this.multiSelect=!0,this.showTransform=!1,this.t=(t,e)=>typeof e=="string"?e:t}get _totalSelected(){return this.selectedAssets.length+this.selectedFolders.length}_formatCount(){const{t}=this,e=this.selectedAssets.length,s=this.selectedFolders.length;if(s===0)return t("assetsSelected",{count:e,defaultValue_one:"{{count}} asset selected",defaultValue_other:"{{count}} assets selected"});if(e===0)return t("foldersSelected",{count:s,defaultValue_one:"{{count}} folder selected",defaultValue_other:"{{count}} folders selected"});const i=t("foldersCount",{count:s,defaultValue_one:"{{count}} folder",defaultValue_other:"{{count}} folders"}),a=t("assetsCount",{count:e,defaultValue_one:"{{count}} asset",defaultValue_other:"{{count}} assets"});return t("foldersAndAssetsSelected","{{folders}} and {{assets}} selected",{folders:i,assets:a})}_confirm(){this.dispatchEvent(new CustomEvent("selection-confirm",{detail:{assets:this.selectedAssets,folders:this.selectedFolders},bubbles:!0,composed:!0}))}_transform(){this.dispatchEvent(new CustomEvent("selection-transform",{detail:{assets:this.selectedAssets,folders:this.selectedFolders},bubbles:!0,composed:!0}))}_clear(){this.dispatchEvent(new CustomEvent("selection-clear",{bubbles:!0,composed:!0}))}_canSelectMore(){if(this.maxSelections&&this._totalSelected>=this.maxSelections)return!1;const t=this._selectScope;return t==="assets"?this.selectedAssets.length<this.totalCount:t==="folders"?this.selectedFolders.length<this.totalFolderCount:this._totalSelected<this.totalCount+this.totalFolderCount}get _scopeTotal(){const t=this._selectScope;return t==="assets"?this.totalCount:t==="folders"?this.totalFolderCount:this.totalCount+this.totalFolderCount}get _selectScope(){const t=this.selectedAssets.length>0,e=this.selectedFolders.length>0;return t&&!e?"assets":e&&!t?"folders":"all"}_selectAll(){this.dispatchEvent(new CustomEvent("select-all",{detail:{scope:this._selectScope},bubbles:!0,composed:!0}))}render(){return this._totalSelected===0?v:c`
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
    `}};Le.styles=I`
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
  `;Ge([f({type:Array})],Le.prototype,"selectedAssets",2);Ge([f({type:Array})],Le.prototype,"selectedFolders",2);Ge([f({type:Number})],Le.prototype,"totalCount",2);Ge([f({type:Number})],Le.prototype,"totalFolderCount",2);Ge([f({type:Boolean})],Le.prototype,"isSelectingAll",2);Ge([f({type:Boolean})],Le.prototype,"multiSelect",2);Ge([f({type:Number})],Le.prototype,"maxSelections",2);Ge([f({type:Boolean})],Le.prototype,"showTransform",2);Ge([f({attribute:!1})],Le.prototype,"t",2);Le=Ge([R("ap-selection-bar")],Le);var fd=Object.defineProperty,gd=Object.getOwnPropertyDescriptor,aa=(t,e,s,i)=>{for(var a=i>1?void 0:i?gd(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&fd(e,s,a),a};let Es=class extends O{constructor(){super(...arguments),this.active=!1,this.rect={x:0,y:0,width:0,height:0}}render(){return!this.active||this.rect.width<5||this.rect.height<5?v:c`
      <div
        class="marquee"
        ${K({left:`${this.rect.x}px`,top:`${this.rect.y}px`,width:`${this.rect.width}px`,height:`${this.rect.height}px`})}
      ></div>
    `}};Es.styles=I`
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
  `;aa([f({type:Boolean})],Es.prototype,"active",2);aa([f({type:Object})],Es.prototype,"rect",2);Es=aa([R("ap-marquee-overlay")],Es);var vd=Object.defineProperty,md=Object.getOwnPropertyDescriptor,Dt=(t,e,s,i)=>{for(var a=i>1?void 0:i?md(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&vd(e,s,a),a};let Ze=class extends O{constructor(){super(...arguments),this.value="",this.options=[],this.disabled=!1,this.clearable=!1,this.direction="vertical",this._onKeydown=t=>{const e=this.options.filter(a=>!this.disabled&&!a.disabled);if(e.length===0)return;const s=e.findIndex(a=>a.value===this.value);let i=null;switch(t.key){case"ArrowDown":case"ArrowRight":t.preventDefault(),i=s<0?0:(s+1)%e.length;break;case"ArrowUp":case"ArrowLeft":t.preventDefault(),i=s<0?e.length-1:(s-1+e.length)%e.length;break;case" ":case"Enter":t.preventDefault(),s>=0?this._select(e[s]):e.length>0&&this._select(e[0]);return;default:return}i!==null&&this._select(e[i])}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radiogroup"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this.addEventListener("keydown",this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onKeydown)}render(){return c`
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
    `}_select(t){if(this.disabled||t.disabled)return;const e=this.clearable&&t.value===this.value?"":t.value;this.dispatchEvent(new CustomEvent("ap-change",{detail:{value:e},bubbles:!0,composed:!0}))}};Ze.styles=[fe,I`
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
    `];Dt([f()],Ze.prototype,"value",2);Dt([f({type:Array})],Ze.prototype,"options",2);Dt([f({type:Boolean})],Ze.prototype,"disabled",2);Dt([f({type:Boolean})],Ze.prototype,"clearable",2);Dt([f({reflect:!0})],Ze.prototype,"direction",2);Dt([f({reflect:!0})],Ze.prototype,"columns",2);Ze=Dt([R("ap-radio-group")],Ze);var bd=Object.defineProperty,yd=Object.getOwnPropertyDescriptor,Mr=(t,e,s,i)=>{for(var a=i>1?void 0:i?yd(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&bd(e,s,a),a};let ii=class extends O{constructor(){super(...arguments),this.size=24}render(){return c`<div class="spinner" ${K({width:`${this.size}px`,height:`${this.size}px`})}></div>`}};ii.styles=[I`
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
    `];Mr([f({type:Number})],ii.prototype,"size",2);ii=Mr([R("ap-spinner")],ii);var _d=Object.defineProperty,xd=Object.getOwnPropertyDescriptor,Ls=(t,e,s,i)=>{for(var a=i>1?void 0:i?xd(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&_d(e,s,a),a};let Pt=class extends O{constructor(){super(...arguments),this.folders=[],this.loading=!1,this.t=(t,e)=>typeof e=="string"?e:t,this._mode="recursive"}_handleConfirm(){this.dispatchEvent(new CustomEvent("folder-resolve-confirm",{detail:{mode:this._mode},bubbles:!0,composed:!0}))}_handleCancel(){this.dispatchEvent(new CustomEvent("folder-resolve-cancel",{bubbles:!0,composed:!0}))}_handleModeChange(t){this._mode=t.detail.value}render(){const t=this.folders.length;return c`
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
    `}};Pt.styles=[fe,I`
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
  `];Ls([f({type:Array})],Pt.prototype,"folders",2);Ls([f({type:Boolean})],Pt.prototype,"loading",2);Ls([f({attribute:!1})],Pt.prototype,"t",2);Ls([w()],Pt.prototype,"_mode",2);Pt=Ls([R("ap-folder-resolve-dialog")],Pt);var $d=Object.defineProperty,wd=Object.getOwnPropertyDescriptor,me=(t,e,s,i)=>{for(var a=i>1?void 0:i?wd(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&$d(e,s,a),a};let ne=class extends O{constructor(){super(...arguments),this.value="",this.label="",this.variant="default",this.clearable=!1,this.options=[],this._open=!1,this._focusedIndex=-1,this._menuPosition="below",this._menuAlign="align-left",this._menuTop=0,this._menuBottom=0,this._menuLeft=0,this._menuRight=0,this._menuWidth=0,this._handleOutsideClick=t=>{t.composedPath().includes(this)||(this._open=!1,document.removeEventListener("click",this._handleOutsideClick))}}close(){this._open=!1}render(){const t=this.options.find(s=>s.value===this.value),e="ap-dropdown-menu";return c`
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
          ${K({[this._menuPosition==="below"?"top":"bottom"]:`${this._menuPosition==="below"?this._menuTop:this._menuBottom}px`,[this._menuAlign==="align-left"?"left":"right"]:`${this._menuAlign==="align-left"?this._menuLeft:this._menuRight}px`,...this._menuWidth?{"min-width":`${this._menuWidth}px`}:{}})}
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
    `}_toggle(){this._open=!this._open,this._open?(this._focusedIndex=this.options.findIndex(t=>t.value===this.value),this._updateMenuPosition(),this.dispatchEvent(new CustomEvent("dropdown-open",{bubbles:!0,composed:!0})),document.addEventListener("click",this._handleOutsideClick),this.updateComplete.then(()=>this._focusCurrentOption())):document.removeEventListener("click",this._handleOutsideClick)}_clear(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("ap-change",{detail:{value:""},bubbles:!0,composed:!0}))}_select(t){this._open=!1,document.removeEventListener("click",this._handleOutsideClick),this.dispatchEvent(new CustomEvent("ap-change",{detail:{value:t},bubbles:!0,composed:!0}))}_updateMenuPosition(){const t=this.getBoundingClientRect();this._menuWidth=t.width;const e=window.innerHeight-t.bottom,s=t.top,i=Math.min(this.options.length*36+8,300);this._menuPosition=e<i&&s>e?"above":"below",this._menuPosition==="below"?this._menuTop=t.bottom+4:this._menuBottom=window.innerHeight-t.top+4;const a=window.innerWidth-t.left;this._menuAlign=a<200?"align-right":"align-left",this._menuAlign==="align-left"?this._menuLeft=t.left:this._menuRight=window.innerWidth-t.right}_handleTriggerKeydown(t){t.key==="ArrowDown"||t.key==="ArrowUp"||t.key==="Enter"||t.key===" "?(t.preventDefault(),this._open||(this._open=!0,this._focusedIndex=t.key==="ArrowUp"?this.options.length-1:Math.max(0,this.options.findIndex(e=>e.value===this.value)),this._updateMenuPosition(),this.dispatchEvent(new CustomEvent("dropdown-open",{bubbles:!0,composed:!0})),document.addEventListener("click",this._handleOutsideClick),this.updateComplete.then(()=>this._focusCurrentOption()))):t.key==="Escape"&&this._open&&(t.preventDefault(),this._open=!1,document.removeEventListener("click",this._handleOutsideClick))}_handleMenuKeydown(t){var e,s,i,a;switch(t.key){case"ArrowDown":t.preventDefault(),this._focusedIndex=(this._focusedIndex+1)%this.options.length,this._focusCurrentOption();break;case"ArrowUp":t.preventDefault(),this._focusedIndex=(this._focusedIndex-1+this.options.length)%this.options.length,this._focusCurrentOption();break;case"Enter":case" ":t.preventDefault(),this._focusedIndex>=0&&this._focusedIndex<this.options.length&&(this._select(this.options[this._focusedIndex].value),(s=(e=this.shadowRoot)==null?void 0:e.querySelector(".trigger"))==null||s.focus());break;case"Escape":t.preventDefault(),this._open=!1,document.removeEventListener("click",this._handleOutsideClick),(a=(i=this.shadowRoot)==null?void 0:i.querySelector(".trigger"))==null||a.focus();break;case"Tab":this._open=!1,document.removeEventListener("click",this._handleOutsideClick);break;case"Home":t.preventDefault(),this._focusedIndex=0,this._focusCurrentOption();break;case"End":t.preventDefault(),this._focusedIndex=this.options.length-1,this._focusCurrentOption();break}}_focusCurrentOption(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelectorAll(".option");t&&this._focusedIndex>=0&&this._focusedIndex<t.length&&t[this._focusedIndex].focus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}};ne.styles=[fe,I`
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
    `];me([f()],ne.prototype,"value",2);me([f()],ne.prototype,"label",2);me([f({reflect:!0})],ne.prototype,"variant",2);me([f({type:Boolean})],ne.prototype,"clearable",2);me([f({type:Array})],ne.prototype,"options",2);me([w()],ne.prototype,"_open",2);me([w()],ne.prototype,"_focusedIndex",2);me([w()],ne.prototype,"_menuPosition",2);me([w()],ne.prototype,"_menuAlign",2);me([w()],ne.prototype,"_menuTop",2);me([w()],ne.prototype,"_menuBottom",2);me([w()],ne.prototype,"_menuLeft",2);me([w()],ne.prototype,"_menuRight",2);me([w()],ne.prototype,"_menuWidth",2);ne=me([R("ap-dropdown")],ne);var kd=Object.defineProperty,Sd=Object.getOwnPropertyDescriptor,Ie=(t,e,s,i)=>{for(var a=i>1?void 0:i?Sd(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&kd(e,s,a),a};const Cd=["webp","jpeg","png","gif"];function Ad(t){const e=(t??"").toLowerCase();return Cd.includes(e)?e:"jpeg"}let _e=class extends O{constructor(){super(...arguments),this.assets=[],this.isMultiSelect=!1,this.t=(t,e)=>typeof e=="string"?e:t,this._format="jpeg",this._quality="excellent",this._lockAspect=!0,this._activePreset="original",this._defaultFormat="jpeg"}get _ratio(){const t=this.assets.find(i=>Bt(i));if(!t)return 1.5;const e=Ka(t),s=Ba(t);return e&&s?e/s:1.5}get _isDirty(){return this._format!==this._defaultFormat||this._quality!=="excellent"||this._width!==this._defaultWidth||this._height!==this._defaultHeight}willUpdate(t){t.has("assets")&&this._initDefaults()}_initDefaults(){const t=this.assets.find(e=>Bt(e));if(this._defaultFormat=Ad(t==null?void 0:t.extension),this._format=this._defaultFormat,this._quality="excellent",this._lockAspect=!0,this._activePreset="original",this.isMultiSelect)this._defaultWidth=void 0,this._defaultHeight=void 0;else if(t){const e=Ka(t),s=Ba(t);this._defaultWidth=e||void 0,this._defaultHeight=s||void 0}else this._defaultWidth=void 0,this._defaultHeight=void 0;this._width=this._defaultWidth,this._height=this._defaultHeight}_handleFormatChange(t){this._format=t.detail.value}_handleQualityChange(t){this._quality=t.detail.value}_handleWidthInput(t){const e=t.target.value,s=parseInt(e,10),i=e===""||isNaN(s)||s<=0?void 0:s;this._width=i,this._activePreset="",this._lockAspect&&i&&(this._height=Math.round(i/this._ratio))}_handleHeightInput(t){const e=t.target.value,s=parseInt(e,10),i=e===""||isNaN(s)||s<=0?void 0:s;this._height=i,this._activePreset="",this._lockAspect&&i&&(this._width=Math.round(i*this._ratio))}_handleMaxSizeInput(t){const e=t.target.value,s=parseInt(e,10),i=e===""||isNaN(s)||s<=0?void 0:s;this._width=i,this._height=i,this._activePreset=""}_toggleLock(){this._lockAspect=!this._lockAspect}_handlePreset(t){this._activePreset=t.value,t.value==="original"?(this._width=this._defaultWidth,this._height=this._defaultHeight):t.width&&(this._width=t.width,this._height=Math.round(t.width/this._ratio))}_handleApply(){const t={format:this._format,quality:this._format!=="png"?this._quality:void 0,width:this._width,height:this._height};this.dispatchEvent(new CustomEvent("transform-confirm",{detail:{params:t,isAspectLocked:this._lockAspect},bubbles:!0,composed:!0}))}_handleSkip(){this.dispatchEvent(new CustomEvent("transform-skip",{bubbles:!0,composed:!0}))}_handleClose(){this.dispatchEvent(new CustomEvent("transform-cancel",{bubbles:!0,composed:!0}))}_handleBackdropClick(t){t.target===t.currentTarget&&this._handleClose()}render(){const t=this._format==="png";return c`
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
              .options=${Cn}
              @ap-change=${this._handleFormatChange}
            ></ap-radio-group>
          </div>

          ${t?v:c`
            <div class="section">
              <span class="section-label">${this.t("quality","Quality")}</span>
              <ap-dropdown
                .value=${this._quality}
                .options=${An}
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
              ${En.map(e=>c`
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
    `}};_e.styles=[fe,I`
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
  `];Ie([f({type:Array})],_e.prototype,"assets",2);Ie([f({type:Boolean})],_e.prototype,"isMultiSelect",2);Ie([f({attribute:!1})],_e.prototype,"t",2);Ie([f({attribute:!1})],_e.prototype,"exportOriginalLabel",2);Ie([f({attribute:!1})],_e.prototype,"applyExportLabel",2);Ie([w()],_e.prototype,"_format",2);Ie([w()],_e.prototype,"_quality",2);Ie([w()],_e.prototype,"_width",2);Ie([w()],_e.prototype,"_height",2);Ie([w()],_e.prototype,"_lockAspect",2);Ie([w()],_e.prototype,"_activePreset",2);_e=Ie([R("ap-transformation-dialog")],_e);var Ed=Object.defineProperty,Fd=Object.getOwnPropertyDescriptor,hi=(t,e,s,i)=>{for(var a=i>1?void 0:i?Fd(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Ed(e,s,a),a};let Yt=class extends O{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this._hasLabel=!1,this._handleHostClick=()=>{this.dispatchEvent(new CustomEvent("ap-toggle",{detail:{checked:!this.checked},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleHostClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleHostClick)}_onSlotChange(t){const e=t.target;this._hasLabel=e.assignedNodes({flatten:!0}).length>0,this.requestUpdate()}render(){return c`
      <div class="box">
        <svg class="check" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 6 9 17l-5-5"></path>
        </svg>
        <svg class="dash" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14"></path>
        </svg>
      </div>
      <span class="label" ?hidden=${!this._hasLabel}><slot @slotchange=${this._onSlotChange}></slot></span>
    `}};Yt.styles=[I`
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
    `];hi([f({type:Boolean,reflect:!0})],Yt.prototype,"checked",2);hi([f({type:Boolean,reflect:!0})],Yt.prototype,"indeterminate",2);hi([f({type:Boolean,reflect:!0})],Yt.prototype,"disabled",2);Yt=hi([R("ap-checkbox")],Yt);var Od=Object.defineProperty,Td=Object.getOwnPropertyDescriptor,Dr=(t,e,s,i)=>{for(var a=i>1?void 0:i?Td(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Od(e,s,a),a};let ai=class extends O{constructor(){super(...arguments),this.open=!1,this._handleOutsideClick=t=>{this.open&&!t.composedPath().includes(this)&&(this.open=!1)}}render(){return c`
      <slot name="trigger" @click=${()=>this.open=!this.open}></slot>
      <div class="content ${this.open?"open":""}">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}};ai.styles=[I`
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
    `];Dr([w()],ai.prototype,"open",2);ai=Dr([R("ap-popover")],ai);var Pd=Object.defineProperty,Ld=Object.getOwnPropertyDescriptor,Rr=(t,e,s,i)=>{for(var a=i>1?void 0:i?Ld(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Pd(e,s,a),a};let ri=class extends O{constructor(){super(...arguments),this.variant="default"}render(){return c`<span class="badge"><slot></slot></span>`}};ri.styles=[I`
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
    `];Rr([f({reflect:!0})],ri.prototype,"variant",2);ri=Rr([R("ap-badge")],ri);var Id=Object.defineProperty,Md=Object.getOwnPropertyDescriptor,zr=(t,e,s,i)=>{for(var a=i>1?void 0:i?Md(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Id(e,s,a),a};let oi=class extends O{constructor(){super(...arguments),this.text=""}render(){return c`
      <slot></slot>
      <div class="tip">${this.text}</div>
    `}};oi.styles=[I`
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
    `];zr([f()],oi.prototype,"text",2);oi=zr([R("ap-tooltip")],oi);var Dd=Object.defineProperty,Rd=Object.getOwnPropertyDescriptor,vt=(t,e,s,i)=>{for(var a=i>1?void 0:i?Rd(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Dd(e,s,a),a};const zd=/[/\\\x00-\x1f]/;function Nd(t){return zd.test(t)?`Folder name can't contain "/" or "\\".`:t==="."||t===".."?`Folder name can't be "." or "..".`:null}let qe=class extends O{constructor(){super(...arguments),this.currentFolderPath="/",this.loading=!1,this.error=null,this._name="",this._localError=null,this._apiErrorDismissed=!1,this._handleDocKeyDown=t=>{t.key==="Escape"&&(t.preventDefault(),this._handleCancel())}}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._handleDocKeyDown),requestAnimationFrame(()=>{var t;return(t=this._input)==null?void 0:t.focus()})}disconnectedCallback(){document.removeEventListener("keydown",this._handleDocKeyDown),super.disconnectedCallback()}updated(t){t.has("error")&&this.error&&(this._apiErrorDismissed=!1)}_handleInput(t){this._name=t.target.value,this._localError&&(this._localError=null),this.error&&!this._apiErrorDismissed&&(this._apiErrorDismissed=!0)}_canSubmit(){return!this.loading&&this._name.trim().length>0}_handleConfirm(){if(!this._canSubmit())return;const t=this._name.trim(),e=Nd(t);if(e){this._localError=e;return}this.dispatchEvent(new CustomEvent("create-folder-confirm",{detail:{name:t},bubbles:!0,composed:!0}))}_handleCancel(){this.dispatchEvent(new CustomEvent("create-folder-cancel",{bubbles:!0,composed:!0}))}_handleBackdropClick(t){t.target===t.currentTarget&&this._handleCancel()}_handleKeyDown(t){t.key==="Enter"&&(t.preventDefault(),this._handleConfirm())}render(){const t=this.currentFolderPath||"/",e=this._localError??(this._apiErrorDismissed?null:this.error);return c`
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
    `}};qe.styles=[fe,I`
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
  `];vt([f()],qe.prototype,"currentFolderPath",2);vt([f({type:Boolean})],qe.prototype,"loading",2);vt([f()],qe.prototype,"error",2);vt([w()],qe.prototype,"_name",2);vt([w()],qe.prototype,"_localError",2);vt([w()],qe.prototype,"_apiErrorDismissed",2);vt([pt("input")],qe.prototype,"_input",2);qe=vt([R("ap-create-folder-dialog")],qe);var jd=Object.defineProperty,mt=(t,e,s,i)=>{for(var a=void 0,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=o(e,s,a)||a);return a&&jd(e,s,a),a};const oa=class oa extends O{constructor(){super(),this._initFailed=!1,this._loadId=0,this._loadMoreId=0,this._selectAllId=0,this._loadDataTimer=null,this._pendingFilter=null,this._pendingMetadataField=null,this._normalizedForcedFilters={},this._uploaderEl=null,this._uploaderImportPromise=null,this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1,this._folderResolveOpen=!1,this._transformOpen=!1,this._createFolderOpen=!1,this._isCreatingFolder=!1,this._createFolderError=null,this._transformAssets=[],this._transformFolders=[],this._transformAfterResolve=!1,this._onDragEnter=e=>{var s;!((s=this.config)!=null&&s.uploader)||!this._hasFileTransfer(e)||(e.preventDefault(),this._dragCounter++,this._dragCounter===1&&(this._isDragOver=!0))},this._onDragOver=e=>{var s;!((s=this.config)!=null&&s.uploader)||!this._hasFileTransfer(e)||(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy"))},this._onDragLeave=e=>{var s;!((s=this.config)!=null&&s.uploader)||!this._hasFileTransfer(e)||(e.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._isDragOver=!1))},this._onDrop=e=>{var i,a;if(!((i=this.config)!=null&&i.uploader)||!this._hasFileTransfer(e))return;e.preventDefault(),this._dragCounter=0,this._isDragOver=!1;const s=Array.from(((a=e.dataTransfer)==null?void 0:a.files)??[]);s.length>0&&this._openUploader(s)},this._cancelCreateFolderRequested=!1,this.store=ho(),this.storeCtrl=new on(this,this.store),this.selectionCtrl=new ln(this,this.store),this.infiniteScrollCtrl=new cn(this,()=>this._loadMore()),this.marqueeCtrl=new dn(this,this.store)}get _isInline(){var e;return((e=this.config)==null?void 0:e.displayMode)==="inline"}disconnectedCallback(){super.disconnectedCallback(),this._uploaderEl&&(this._uploaderEl.remove(),this._uploaderEl=null),this._uploaderImportPromise=null,this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1}updated(e){super.updated(e),e.has("config")&&this.config&&this._initConfig(this.config);const s=this.renderRoot.querySelector("#sentinel");if(s&&s!==this._lastSentinel){this._lastSentinel=s;const a=this.renderRoot.querySelector(".main-content");this.infiniteScrollCtrl.observe(s,a)}const i=this.renderRoot.querySelector(".main-content");i&&i!==this._lastMarqueeContainer&&(this._lastMarqueeContainer=i,this.marqueeCtrl.attach(i))}_initConfig(e){const s={folderSelection:!0,...e};this._initFailed=!1,this.store.setState({disabledAssetIds:new Set(s.disabledAssetIds??[]),disabledFolderIds:new Set(s.disabledFolderIds??[])}),In(s.transformRemoteThumbnail),this._normalizedForcedFilters=Ri(s.forcedFilters),this._initPromise=this._doInit(s).catch(()=>{this._initFailed=!0}),this._initI18n(s.locale),this.toggleAttribute("inline",s.displayMode==="inline"),s.displayMode==="inline"&&!this.store.getState().isOpen&&this.open()}async _initI18n(e){try{const{i18n:s,isNew:i}=await tn(e||"en");i&&s.on("missingKey",(r,o,n,l,p,h)=>{const u=n.match(/_(?:zero|one|two|few|many|other)$/),d=u&&(h!=null&&h[`defaultValue${u[0]}`])?String(h[`defaultValue${u[0]}`]):l;rn.handleMissingKey(n,d,o)});const a=(r,o,n)=>typeof o=="string"?s.t(r,o,n??{}):s.t(r,o??{});this.store.setState({t:a})}catch{}}async _doInit(e){const s=$l(),i=s.sortBy??e.defaultSortBy??"created_at",a=s.sortDirection??e.defaultSortDirection??"desc";this.store.setState({config:e,projectToken:e.auth.projectToken,viewMode:e.rememberLastView&&Sl(e.auth.projectToken)||e.defaultViewMode||"grid",sortBy:i,sortDirection:a}),this.apiClient=new pn(e.auth,e.apiBase);try{if(e.auth.mode==="securityTemplate"){const{key:y,permissions:_}=await xn(this.apiClient);this.apiClient.setSassKey(y),this.store.setState({sassKey:y,permissions:_})}const[r,o,n,l,p]=await Promise.allSettled([tl(this.apiClient),mn(this.apiClient),_n(this.apiClient),Zn(this.apiClient),bn(this.apiClient)]),h={};if(r.status==="fulfilled"){const{fields:y,regionalVariantGroups:_,regionalFilters:S,brandColor:k}=r.value;h.metadataFields=y,h.regionalVariantGroups=_,h.regionalFilters=S,k&&(h.brandColor=k)}o.status==="fulfilled"&&(h.labels=o.value.labels||[]),n.status==="fulfilled"&&(h.tags=n.value),p.status==="fulfilled"&&(h.collections=p.value.collections||[]),l.status==="fulfilled"&&(h.fileTypes=l.value);const{pinnedFilters:u,pinnedMetadata:d}=yl(e.auth.projectToken??null),g=this.store.getState().filters;h.filters={...g,pinned:u,visible:[...u],metadata:{...g.metadata,pinned:d,visible:[...d]}},this.store.setState(h);const b=e.brandColor||h.brandColor||this.store.getState().brandColor;b&&(h.brandColor||this.store.setState({brandColor:b}),Tl(this,b))}catch(r){throw this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:r,context:"init"},bubbles:!0,composed:!0})),r}}_ensureUploaderImport(){return customElements.get("sfx-uploader")?Promise.resolve():this._uploaderImportPromise?this._uploaderImportPromise:(this._uploaderImportPromise=G(()=>import("./define-Dn2BycCJ.js").then(e=>e.d),[]).then(()=>{},e=>{throw this._uploaderImportPromise=null,e}),this._uploaderImportPromise)}_buildUploaderConfig(){const e=this.config,s=e.uploader,i=this.store.getState();let a;return e.auth.mode==="securityTemplate"?a={mode:"security-template",container:e.auth.projectToken,securityTemplateId:e.auth.securityTemplateKey}:a={mode:"sass-key",container:e.auth.projectToken,sassKey:e.auth.sassKey},{auth:a,targetFolder:i.currentFolderPath||"/",mode:"inline",restrictions:s.restrictions,concurrency:s.concurrency,autoProceed:s.autoProceed,showFillMetadata:s.showFillMetadata,connectors:s.connectors,sourcesLayout:s.sourcesLayout,header:s.header??"back",clearOnClose:s.clearOnClose,clearOnComplete:s.clearOnComplete,closeOnComplete:s.closeOnComplete,rejectedFileAutoRemoveDelay:s.rejectedFileAutoRemoveDelay,lastUploadReview:s.lastUploadReview,showLocateButton:s.showLocateButton,showCopyCdnButton:s.showCopyCdnButton,getLocateUrl:s.getLocateUrl,minimizeOnUpload:s.minimizeOnUpload,metadataConfig:s.metadataConfig,tusConfig:s.tusConfig,locale:s.locale??e.locale,transformRemoteThumbnail:e.transformRemoteThumbnail}}async _openUploader(e){var i;if(!((i=this.config)!=null&&i.uploader)||this._isUploaderOpen)return;try{await this._ensureUploaderImport()}catch(a){this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:a instanceof Error?a:new Error(String(a)),context:"uploader-load"},bubbles:!0,composed:!0}));return}this._uploaderEl=document.createElement("sfx-uploader");const s=this._uploaderEl;s.addEventListener("sfx-all-complete",()=>{this.store.getState().isOpen&&this._loadData()}),s.addEventListener("sfx-complete-action",()=>{this._closeUploader()}),s.addEventListener("sfx-cancel",()=>{this._closeUploader()}),this._isUploaderOpen=!0,await this.updateComplete,s.config=this._buildUploaderConfig(),await s.updateComplete,e!=null&&e.length&&s.addFiles(e)}_closeUploader(){this._isUploaderOpen=!1,this._uploaderEl&&(this._uploaderEl.remove(),this._uploaderEl=null)}_handleUploadClick(){this._openUploader()}_hasFileTransfer(e){var s,i;return!!((i=(s=e.dataTransfer)==null?void 0:s.types)!=null&&i.includes("Files"))}async open(){var p,h,u,d,g,b,y,_;const e=this.store.getState(),s=new Set(Object.keys(this._normalizedForcedFilters)),i={},a=Ri((p=this.config)==null?void 0:p.defaultFilters);for(const[S,k]of Object.entries(a))s.has(S)||(i[S]=k);const r=Object.keys(i),o=((h=this.config)==null?void 0:h.tabs)??["assets","folders"],n=(u=this.config)!=null&&u.rememberLastTab?Al(this.config.auth.projectToken):null,l=(n&&o.includes(n)?n:null)??((d=this.config)!=null&&d.defaultTab&&o.includes(this.config.defaultTab)?this.config.defaultTab:null)??((g=this.config)!=null&&g.initialFolderPath&&o.includes("folders")?"folders":null)??o[0]??"assets";this.store.setState({isOpen:!0,activeTab:l,searchQuery:"",isAISearchActive:!!((b=this.config)!=null&&b.enableAISearch&&((y=this.config)!=null&&y.defaultAISearch)),filters:{metadata:{pinned:e.filters.metadata.pinned,visible:[...e.filters.metadata.pinned],applied:{}},pinned:e.filters.pinned,visible:[...new Set([...e.filters.pinned,...r])],applied:i},offset:0,assets:[],folders:[],currentFolder:null,currentFolderPath:this._resolveInitialFolderPath(l),activeLabelUuid:null,activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,breadcrumb:this._buildBreadcrumbFromPath(this._resolveInitialFolderPath(l),((_=this.config)==null?void 0:_.rootFolderPath)||"/"),selectedAssets:new Map,selectedFolders:new Map,isResolvingFolders:!1,folderPreviews:{},isPreviewOpen:!1,previewAsset:null,isLoading:!0,isSelectingAll:!1}),this._dragCounter=0,this._isDragOver=!1,this.dispatchEvent(new CustomEvent("ap-open",{detail:{timestamp:Date.now()},bubbles:!0,composed:!0})),await this.updateComplete,!this._initPromise&&this.config&&this._initConfig(this.config),!(this._initPromise&&(await this._initPromise,this._initFailed))&&this._loadData()}close(){this.store.setState({isOpen:!1}),this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1,this._folderResolveOpen=!1,this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._transformAfterResolve=!1,this._selectAllId++}_scrollToTop(){var e;(e=this.renderRoot.querySelector(".main-content"))==null||e.scrollTo({top:0})}async _loadData(){var i,a,r,o,n,l,p,h,u,d,g,b,y,_,S,k,N,T,E,H,A,q,z,F,ee,Y,J,ie,m,x,P,D,B,j,$e,bt,ae,je,ts,ss,Is,na,la;if(!this.apiClient)return;const e=++this._loadId,s=this.store.getState();this._scrollToTop(),this.store.setState({isLoading:!0});try{const Rt=s.activeTab;if(Rt==="assets"){const Fe=this._buildSearchNotation(),st=s.currentFolderPath||"/",Me=s.isAISearchActive&&!!s.searchQuery,Oe=xt(this.apiClient,{fields:(i=this.config)==null?void 0:i.apiFields,folder:st,offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:Fe||void 0,recursive:1,...Me&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((a=s.config)==null?void 0:a.locale)??"en"}}),be=zs(this.apiClient,{folder:st,q:Fe||void 0,search:s.searchQuery||void 0,recursive:1,...Me&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((r=s.config)==null?void 0:r.locale)??"en"}}).catch(()=>null),[he,we]=await Promise.all([Oe,be]);if(e!==this._loadId)return;const ke=((o=he.files)==null?void 0:o.length)??0,ce=ke>=s.limit,Se=((n=we==null?void 0:we.stats)==null?void 0:n.approx_files_count)??((l=we==null?void 0:we.info)==null?void 0:l.total_files_count)??((p=he.info)==null?void 0:p.total_files_count)??((u=(h=he.base)==null?void 0:h.count)==null?void 0:u.files_recursive)??((g=(d=he.base)==null?void 0:d.count)==null?void 0:g.files_direct)??ke;this.store.setState({assets:he.files||[],folders:[],totalCount:Se,totalFolderCount:0,offset:0,hasMore:ce,isLoading:!1})}else if(Rt==="folders"){const Fe=this._buildSearchNotation(),st=s.currentFolderPath||"/",[Me,Oe,be]=await Promise.all([fn(this.apiClient,{folderPath:s.currentFolderPath,q:s.searchQuery||void 0,recursive:s.searchQuery?1:0,sort_by:s.sortBy,sort_direction:s.sortDirection}),xt(this.apiClient,{fields:(b=this.config)==null?void 0:b.apiFields,folder:st,offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:Fe||void 0,recursive:0,...s.isAISearchActive&&s.searchQuery&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((y=s.config)==null?void 0:y.locale)??"en"}}),zs(this.apiClient,{folder:st,q:Fe||void 0,search:s.searchQuery||void 0,recursive:0,...s.isAISearchActive&&s.searchQuery&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((_=s.config)==null?void 0:_.locale)??"en"}}).catch(()=>null)]);if(e!==this._loadId)return;const he=Me.folders||[];let we={};if(he.length>0)try{we=await gn(this.apiClient,he.map(zt=>zt.uuid))}catch{}if(e!==this._loadId)return;const ke=((S=Oe.files)==null?void 0:S.length)??0,ce=ke>=s.limit,Se=((k=be==null?void 0:be.stats)==null?void 0:k.approx_files_count)??((N=be==null?void 0:be.info)==null?void 0:N.total_files_count)??((T=Oe.info)==null?void 0:T.total_files_count)??((H=(E=Oe.base)==null?void 0:E.count)==null?void 0:H.files_direct)??ke;this.store.setState({assets:Oe.files||[],folders:he,folderPreviews:we,totalCount:Se,totalFolderCount:Me.total??he.length,offset:0,hasMore:ce,isLoading:!1})}else if(Rt==="labels"){if(!s.activeLabelUuid){this.store.setState({assets:[],folders:[],totalCount:s.labels.length,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}const Fe=s.labels.find(fi=>fi.uuid===s.activeLabelUuid);if(!Fe){this.store.setState({isLoading:!1});return}const st=Fe.sid.replace("#",""),Me=this._buildSearchNotation(),Oe=`labels:${st}${Me?" "+Me:""}`,be=s.isAISearchActive&&!!s.searchQuery,he=xt(this.apiClient,{fields:(A=this.config)==null?void 0:A.apiFields,folder:"/",offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:Oe,recursive:1,...be&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((q=s.config)==null?void 0:q.locale)??"en"}}),we=zs(this.apiClient,{folder:"/",q:Oe,search:s.searchQuery||void 0,recursive:1,...be&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((z=s.config)==null?void 0:z.locale)??"en"}}).catch(()=>null),[ke,ce]=await Promise.all([he,we]);if(e!==this._loadId)return;const Se=((F=ke.files)==null?void 0:F.length)??0,zt=Se>=s.limit,ui=((ee=ce==null?void 0:ce.stats)==null?void 0:ee.approx_files_count)??((Y=ce==null?void 0:ce.info)==null?void 0:Y.total_files_count)??((J=ke.info)==null?void 0:J.total_files_count)??((m=(ie=ke.base)==null?void 0:ie.count)==null?void 0:m.files_recursive)??((P=(x=ke.base)==null?void 0:x.count)==null?void 0:P.files_direct)??Se;this.store.setState({assets:ke.files||[],folders:[],totalCount:ui,totalFolderCount:0,offset:0,hasMore:zt,isLoading:!1})}else if(Rt==="collections"){if(!s.activeCollectionUuid){this.store.setState({assets:[],folders:[],totalCount:0,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}const Fe=s.activeCollectionFolder;if(!(Fe&&!((D=Fe.children)!=null&&D.length))){this.store.setState({assets:[],folders:[],totalCount:0,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}const Me=s.activeCollectionUuid,Oe=Fe.filters||void 0,be=this._buildSearchNotation(),he=s.isAISearchActive&&!!s.searchQuery,we=xt(this.apiClient,{fields:(B=this.config)==null?void 0:B.apiFields,offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:be||void 0,recursive:1,collection_uuid:Me,f64:Oe,...he&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((j=s.config)==null?void 0:j.locale)??"en"}}),ke=zs(this.apiClient,{q:be||void 0,search:s.searchQuery||void 0,recursive:1,collection_uuid:Me,f64:Oe,...he&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:(($e=s.config)==null?void 0:$e.locale)??"en"}}).catch(()=>null),[ce,Se]=await Promise.all([we,ke]);if(e!==this._loadId)return;const zt=((bt=ce.files)==null?void 0:bt.length)??0,ui=zt>=s.limit,fi=((ae=Se==null?void 0:Se.stats)==null?void 0:ae.approx_files_count)??((je=Se==null?void 0:Se.info)==null?void 0:je.total_files_count)??((ts=ce.info)==null?void 0:ts.total_files_count)??((Is=(ss=ce.base)==null?void 0:ss.count)==null?void 0:Is.files_recursive)??((la=(na=ce.base)==null?void 0:na.count)==null?void 0:la.files_direct)??zt;this.store.setState({assets:ce.files||[],folders:[],totalCount:fi,totalFolderCount:0,offset:0,hasMore:ui,isLoading:!1})}}catch(Rt){if(e!==this._loadId)return;this.store.setState({isLoading:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:Rt,context:"loadData"},bubbles:!0,composed:!0}))}}async _loadMore(){var a,r,o;const e=this.store.getState();if(e.isLoading||!e.hasMore||!this.apiClient||e.activeTab==="labels"&&!e.activeLabelUuid||e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((a=e.activeCollectionFolder.children)!=null&&a.length)))return;const s=++this._loadMoreId,i=e.offset+e.limit;this.store.setState({isLoading:!0});try{const n=this._buildSearchNotation();let l=n||void 0,p=e.currentFolderPath||"/",h=e.activeTab==="folders"?0:1;if(e.activeTab==="labels"&&e.activeLabelUuid){const k=e.labels.find(N=>N.uuid===e.activeLabelUuid);k&&(l=`labels:${k.sid.replace("#","")}${n?" "+n:""}`),p="/",h=1}let u,d;e.activeTab==="collections"&&e.activeCollectionFolder&&(u=e.activeCollectionUuid||void 0,d=e.activeCollectionFolder.filters||void 0,p="",h=1);const g=await xt(this.apiClient,{fields:(r=this.config)==null?void 0:r.apiFields,...p?{folder:p}:{},offset:i,limit:e.limit,sort_by:e.sortBy,sort_direction:e.sortDirection,search:e.searchQuery||void 0,q:l,recursive:h,...u&&{collection_uuid:u},...d&&{f64:d},...e.isAISearchActive&&e.searchQuery&&{with_ai:!0,ai_query:e.searchQuery,ai_lang:((o=e.config)==null?void 0:o.locale)??"en"}});if(s!==this._loadMoreId)return;const b=this.store.getState().assets,y=g.files||[],_=y.length>=e.limit,S=[...b,...y];this.store.setState({assets:S,offset:i,hasMore:_,isLoading:!1})}catch{if(s!==this._loadMoreId)return;this.store.setState({isLoading:!1})}}_debouncedLoadData(e=120){this._loadDataTimer&&clearTimeout(this._loadDataTimer),this._loadDataTimer=setTimeout(()=>{this._loadDataTimer=null,this._loadData()},e)}_handleCancel(e){var s,i;this.close(),(i=(s=this.config)==null?void 0:s.onCancel)==null||i.call(s),this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:e},bubbles:!0,composed:!0}))}_handleSearchChange(e){var a;const s=this.store.getState();if(s.activeTab==="labels"&&!s.activeLabelUuid){this.store.setState({searchQuery:e.detail.value});return}if(s.activeTab==="collections"&&!(s.activeCollectionFolder&&!((a=s.activeCollectionFolder.children)!=null&&a.length))){this.store.setState({searchQuery:e.detail.value});return}const i={searchQuery:e.detail.value,offset:0,assets:[],folders:[],isLoading:!0};s.isAISearchActive&&e.detail.value&&(i.sortBy="relevance"),this.store.setState(i),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleAISearchToggle(e){var r;const s=e.detail.active,i=this.store.getState(),a={isAISearchActive:s};i.searchQuery&&(s?a.sortBy="relevance":i.sortBy==="relevance"&&(a.sortBy=((r=this.config)==null?void 0:r.defaultSortBy)??"created_at"),a.offset=0,a.assets=[],a.folders=[],a.isLoading=!0),this.store.setState(a),i.searchQuery&&this._debouncedLoadData()}_handleViewChange(e){var i;const s=e.detail.mode;this.store.setState({viewMode:s}),(i=this.config)!=null&&i.rememberLastView&&kl(s,this.config.auth.projectToken),this._scrollToTop()}_handleRegionalChange(e){const{groupUuid:s,value:i}=e.detail,a=this.store.getState().regionalFilters;this.store.setState({regionalFilters:{...a,[s]:i}})}_handleSortChange(e){const s=e.detail.value,i=this.store.getState();this.store.setState({sortBy:s,offset:0,assets:[],folders:[]}),Ya(s,i.sortDirection),this.selectionCtrl.resetRange(),this._loadData()}_handleSortDirectionChange(e){const s=e.detail.value,i=this.store.getState();this.store.setState({sortDirection:s,offset:0,assets:[],folders:[]}),Ya(i.sortBy,s),this.selectionCtrl.resetRange(),this._loadData()}_handleTabChange(e){var i,a;const s=e.detail.tab;(i=this.config)!=null&&i.rememberLastTab&&Cl(s,this.config.auth.projectToken),this._selectAllId++,this.store.setState({activeTab:s,activeLabelUuid:null,activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,currentFolder:null,currentFolderPath:((a=this.config)==null?void 0:a.rootFolderPath)??"/",breadcrumb:[],offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleAssetSelect(e){this.selectionCtrl.handleSelect(e.detail.asset,e.detail.index,e.detail.event)}_handleFolderSelect(e){this.selectionCtrl.handleFolderSelect(e.detail.folder,e.detail.index,e.detail.event)}_handleAssetPreview(e){this.store.setState({previewAsset:e.detail.asset,isPreviewOpen:!0})}get _transformationsConfig(){var s;const e=(s=this.config)==null?void 0:s.transformations;return typeof e=="object"?e:void 0}_handleQuickSelect(e){var i;const s=e.detail.asset;if((i=this.config)!=null&&i.transformations&&Bt(s)){this._transformAssets=[s],this._transformFolders=[],this._transformOpen=!0;return}this._emitSelect([s])}_emitSelect(e,s){var a,r;const i={assets:e};s!=null&&s.length&&(i.folders=s),(r=(a=this.config)==null?void 0:a.onSelect)==null||r.call(a,e,s!=null&&s.length?s:void 0),this.dispatchEvent(new CustomEvent("ap-select",{detail:i,bubbles:!0,composed:!0})),this._isInline||this.close()}_handleFolderOpen(e){var r;const s=e.detail.folder,i=this.store.getState(),a=s.path||`${i.currentFolderPath}${s.name}/`;(r=this.config)!=null&&r.rememberLastFolder&&Xa(a,this.config.auth.projectToken),this._selectAllId++,this.store.setState({currentFolder:s.uuid,currentFolderPath:a,breadcrumb:[...i.breadcrumb,{uuid:s.uuid,name:s.name,path:a}],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleBreadcrumbNavigate(e){var n,l;const s=e.detail.uuid,i=this.store.getState();if(i.activeTab==="labels"){this._selectAllId++,this.store.setState({activeLabelUuid:null,breadcrumb:[],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData();return}if(i.activeTab==="collections"){if(this._selectAllId++,!s){this.store.setState({activeCollectionUuid:null,activeCollectionFolder:null,activeCollectionFolders:[],breadcrumb:[],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!1}),this.selectionCtrl.resetRange();return}if(s===i.activeCollectionUuid){this.store.setState({activeCollectionFolder:null,breadcrumb:[i.breadcrumb[0]],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!1}),this.selectionCtrl.resetRange();return}const p=this._findCollectionFolder(i.activeCollectionFolders,s);if(p){const h=i.breadcrumb.findIndex(d=>d.uuid===s),u=i.breadcrumb.slice(0,h+1);this.store.setState({activeCollectionFolder:p,breadcrumb:u,searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}return}const a=s?i.breadcrumb.findIndex(p=>p.uuid===s):-1,r=s?i.breadcrumb.slice(0,a+1):[],o=r.length>0?r[r.length-1].path:((n=this.config)==null?void 0:n.rootFolderPath)||"/";(l=this.config)!=null&&l.rememberLastFolder&&Xa(o,this.config.auth.projectToken),this._selectAllId++,this.store.setState({currentFolder:s||null,currentFolderPath:o,breadcrumb:r,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleLabelOpen(e){const s=e.detail.label;this._selectAllId++,this.store.setState({activeLabelUuid:s.uuid,breadcrumb:[{uuid:s.uuid,name:s.name,path:""}],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}async _handleCollectionOpen(e){const s=e.detail.collection;if(this.apiClient){this._selectAllId++,this.store.setState({activeCollectionUuid:s.uuid,activeCollectionFolder:null,activeCollectionFolders:[],isLoadingCollectionFolders:!0,breadcrumb:[{uuid:s.uuid,name:s.title,path:""}],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange();try{const i=await yn(this.apiClient,s.uuid),a=vr(i.folders||[]);this.store.setState({activeCollectionFolders:a,isLoadingCollectionFolders:!1,isLoading:!1})}catch(i){this.store.setState({isLoadingCollectionFolders:!1,isLoading:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:i,context:"loadCollectionFolders"},bubbles:!0,composed:!0}))}}}_handleCollectionFolderOpen(e){var n;const s=e.detail.folder,i=this.store.getState(),a=s.path.split(" -> ").filter(Boolean),r=[{uuid:i.activeCollectionUuid,name:((n=i.breadcrumb[0])==null?void 0:n.name)||"Collection",path:""}];let o="";for(const l of a)o=o?`${o} -> ${l}`:l,r.push({uuid:o,name:l,path:o});this._selectAllId++,this.store.setState({activeCollectionFolder:s,breadcrumb:r,searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_findCollectionFolder(e,s){for(const i of e){if(i.path===s)return i;if(i.children){const a=this._findCollectionFolder(i.children,s);if(a)return a}}return null}_getVisibleCollectionFolders(){const e=this.store.getState();return e.activeCollectionUuid?e.activeCollectionFolder?e.activeCollectionFolder.children??[]:e.activeCollectionFolders:[]}_resolveInitialFolderPath(e){var s,i,a;return e==="folders"&&((s=this.config)==null?void 0:s.rememberLastFolder)&&wl(this.config.auth.projectToken)||((i=this.config)==null?void 0:i.initialFolderPath)||((a=this.config)==null?void 0:a.rootFolderPath)||"/"}_buildBreadcrumbFromPath(e,s){if(!e||e===s||e==="/")return[];const a=(e.startsWith(s)?e.slice(s.length):e.replace(/^\//,"")).split("/").filter(Boolean),r=[];let o=s.endsWith("/")?s:s+"/";for(const n of a)o+=n+"/",r.push({uuid:o,name:n,path:o});return r}_handlePreviewClose(){this.store.setState({isPreviewOpen:!1,previewAsset:null})}_handlePreviewNavigate(e){this.store.setState({previewAsset:e.detail.asset})}_handleSelectionConfirm(e){var a,r;const s=e.detail.assets,i=e.detail.folders||[];if(i.length>0&&((a=this.config)==null?void 0:a.folderSelection)!==!1&&((r=this.config)==null?void 0:r.folderSelectionMode)==="assets"){this._folderResolveOpen=!0;return}this._emitSelect(s,i.length?i:void 0)}_handleSelectionTransform(e){var r,o;const s=e.detail.assets,i=e.detail.folders||[];if(i.length>0&&((r=this.config)==null?void 0:r.folderSelection)!==!1&&((o=this.config)==null?void 0:o.folderSelectionMode)==="assets"){this._transformAfterResolve=!0,this._folderResolveOpen=!0;return}if(s.filter(Bt).length===0){this._emitSelect(s,i.length?i:void 0);return}this._transformAssets=s,this._transformFolders=i,this._transformOpen=!0}async _handleFolderResolveConfirm(e){var r;const s=e.detail.mode,i=this.selectionCtrl.getSelectedFolders(),a=this.selectionCtrl.getSelectedAssets();this.store.setState({isResolvingFolders:!0});try{const o=await Promise.all(i.map(d=>{var g;return xt(this.apiClient,{fields:(g=this.config)==null?void 0:g.apiFields,folder:d.path,recursive:s==="recursive"?1:0,limit:1e4})})),n=[];for(const d of o)n.push(...d.files);const l=[...a],p=new Set(l.map(d=>d.uuid));for(const d of n)p.has(d.uuid)||(l.push(d),p.add(d.uuid));const h=(r=this.config)==null?void 0:r.maxSelections,u=h?l.slice(0,h):l;if(this._folderResolveOpen=!1,this.store.setState({isResolvingFolders:!1}),this._transformAfterResolve){this._transformAfterResolve=!1,this._transformAssets=u,this._transformFolders=[],this._transformOpen=!0;return}this._emitSelect(u)}catch(o){this.store.setState({isResolvingFolders:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:o,context:"folderResolve"},bubbles:!0,composed:!0}))}}_handleFolderResolveCancel(){this._folderResolveOpen=!1,this._transformAfterResolve=!1}_handleTransformConfirm(e){const s=e.detail.params,i=e.detail.isAspectLocked??!0,a=this._transformAssets,r=this._transformFolders,o=a.length>1,n=Mn(s,{isMultiSelect:o,isAspectLocked:i}),l=a.map(p=>{var g,b;if(!Bt(p))return p;const h=(g=p.url)==null?void 0:g.cdn,u=(b=p.url)==null?void 0:b.permalink,d={cdn:h?At(h,n):""};return u&&(d.permalink_cdn=At(u,n)),{...p,transformation:{params:s,url:d}}});this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._emitSelect(l,r.length?r:void 0)}_handleTransformSkip(){const e=this._transformAssets,s=this._transformFolders;this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._emitSelect(e,s.length?s:void 0)}_handleTransformCancel(){this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[]}_openCreateFolderDialog(){this._createFolderError=null,this._createFolderOpen=!0}_handleCreateFolderCancel(){this._isCreatingFolder&&(this._cancelCreateFolderRequested=!0),this._createFolderOpen=!1,this._createFolderError=null}async _handleCreateFolderConfirm(e){const s=e.detail.name;if(!s||this._isCreatingFolder||!this.apiClient)return;const i=this.store.getState().currentFolderPath||"/";this._isCreatingFolder=!0,this._cancelCreateFolderRequested=!1,this._createFolderError=null;try{await vn(this.apiClient,s,i),this._cancelCreateFolderRequested||(this._createFolderOpen=!1),this._loadData()}catch(a){this._cancelCreateFolderRequested||(this._createFolderError=this._mapCreateFolderError(a))}finally{this._isCreatingFolder=!1,this._cancelCreateFolderRequested=!1}}_mapCreateFolderError(e){const s=(e==null?void 0:e.message)??"";if(/timed out/i.test(s))return"Request timed out. Please try again.";const i=s.match(/^API error: (\d+)/);if(i)switch(Number(i[1])){case 400:return"Invalid folder name.";case 401:return"Authentication failed. Please reload the page.";case 403:return"You do not have permission to create a folder here.";case 409:return"A folder with this name already exists.";default:return"Failed to create folder. Please try again."}return s||"Failed to create folder. Please try again."}async _handleSelectAll(e){var l,p,h;const s=this.store.getState();if(s.isSelectingAll||!this.apiClient||!(((l=s.config)==null?void 0:l.multiSelect)??!0))return;const a=((p=e==null?void 0:e.detail)==null?void 0:p.scope)??"all",r=a!=="assets"&&((h=this.config)==null?void 0:h.folderSelection)!==!1&&s.folders.length>0;if(!(a!=="folders")){r&&this.selectionCtrl.selectAllFolders(s.folders);return}if(s.assets.length>=s.totalCount){r&&this.selectionCtrl.selectAllFolders(s.folders),this.selectionCtrl.selectAll(s.assets);return}const n=++this._selectAllId;this.store.setState({isSelectingAll:!0});try{const u=this._buildSearchNotation();let d=s.currentFolderPath||"/";const g=s.limit,b=s.assets,y=s.totalCount;let _=s.activeTab==="folders"?0:1,S=u||void 0;if(s.activeTab==="labels"&&s.activeLabelUuid){const F=s.labels.find(ee=>ee.uuid===s.activeLabelUuid);F&&(S=`labels:${F.sid.replace("#","")}${u?" "+u:""}`),d="/",_=1}let k,N;s.activeTab==="collections"&&s.activeCollectionFolder&&(k=s.activeCollectionUuid||void 0,N=s.activeCollectionFolder.filters||void 0,d="",_=1);const T=[];for(let F=b.length;F<y;F+=g)T.push(F);const E=4,H=[];for(let F=0;F<T.length;F+=E){if(n!==this._selectAllId)return;const ee=T.slice(F,F+E),Y=await Promise.all(ee.map(J=>{var ie,m;return xt(this.apiClient,{fields:(ie=this.config)==null?void 0:ie.apiFields,...d?{folder:d}:{},offset:J,limit:g,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:S,recursive:_,...k&&{collection_uuid:k},...N&&{f64:N},...s.isAISearchActive&&s.searchQuery&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((m=s.config)==null?void 0:m.locale)??"en"}})}));if(n!==this._selectAllId)return;for(const J of Y)J.files&&H.push(...J.files)}if(n!==this._selectAllId)return;const A=new Set(b.map(F=>F.uuid)),q=H.filter(F=>A.has(F.uuid)?!1:(A.add(F.uuid),!0)),z=[...b,...q];this.store.setState({assets:z,offset:Math.max(0,z.length-g),hasMore:!1,isSelectingAll:!1}),r&&this.selectionCtrl.selectAllFolders(s.folders),this.selectionCtrl.selectAll(z)}catch(u){if(n!==this._selectAllId)return;this.store.setState({isSelectingAll:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:u,context:"selectAll"},bubbles:!0,composed:!0}))}}_handleSelectionClear(){this.selectionCtrl.clearSelection()}_handleSelectionDeselect(e){const s=new Map(this.store.getState().selectedAssets);s.delete(e.detail.uuid),this.store.setState({selectedAssets:s})}_isDateFilterKey(e){return e===C.DATE||e===C.LICENSE_EXPIRY||e===Z.DUE_DATE}_handleFilterUpdate(e){const{key:s,values:i,operator:a}=e.detail,o={...this.store.getState().filters};let n=i===""||i===null||i===void 0||Array.isArray(i)&&i.length===0||typeof i=="object"&&!Array.isArray(i)&&Object.values(i).every(l=>l==null||l===""||Array.isArray(l)&&l.length===0);if(!n&&this._isDateFilterKey(s)&&typeof i=="object"&&!Array.isArray(i)){const{kind:l,preset:p,from:h,to:u}=i;n=!l&&!p&&!h&&!u}if(n){const l={...o.applied};delete l[s],o.applied=l,o.pinned.includes(s)||(o.visible=o.visible.filter(p=>p!==s))}else{const l={...o.applied};this._isDateFilterKey(s)&&typeof i=="object"&&!Array.isArray(i)?l[s]={type:"date",field:i.field||"created",kind:i.kind||null,preset:i.preset||null,from:i.from||null,to:i.to||null}:s===C.IMAGE&&typeof i=="object"&&!Array.isArray(i)?l[s]=i:l[s]={type:"string",values:Array.isArray(i)?i:[i],operator:a||":"},o.applied=l,o.visible.includes(s)||(o.visible=[...o.visible,s])}if(this.store.setState({filters:o,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData(),this._pendingFilter===s){this._pendingFilter=null;const l=this.renderRoot.querySelector("ap-filters-bar");l&&(l.pendingFilter=null)}}_handleFilterOpen(e){const s=e.detail.key,i=e.detail.chipRect,a=this.renderRoot.querySelector("ap-content-toolbar");let r,o;if(i){const n=this.renderRoot.querySelector(".toolbar-filters-wrapper");if(n){const l=n.getBoundingClientRect();r=i.left-l.left,o=i.bottom-l.top}}a==null||a.openFilterPanel(s,!0,r,o)}_handleMetadataFilterOpen(e){const{fieldKey:s,chipRect:i}=e.detail,a=this.renderRoot.querySelector("ap-content-toolbar");let r,o;if(i){const n=this.renderRoot.querySelector(".toolbar-filters-wrapper");if(n){const l=n.getBoundingClientRect();r=i.left-l.left,o=i.bottom-l.top}}a==null||a.openMetadataFieldPanel(s,!0,r,o)}_handleFilterPanelChange(e){const s=this.renderRoot.querySelector("ap-filters-bar");s&&(s.activeFilter=e.detail.key,s.activeMetadataField=e.detail.metadataFieldKey||null),!e.detail.key&&!e.detail.metadataFieldKey&&(this._pendingFilter||this._pendingMetadataField)&&(this._pendingFilter=null,this._pendingMetadataField=null,s&&(s.pendingFilter=null,s.pendingMetadataField=null))}async _handleFilterPending(e){var d,g,b;const{key:s,metadataFieldKey:i}=e.detail,a=this.renderRoot.querySelector("ap-filters-bar"),r=this.renderRoot.querySelector("ap-content-toolbar");if(!a||!r)return;i?(this._pendingMetadataField=i,a.pendingMetadataField=i):s&&(this._pendingFilter=s,a.pendingFilter=s),await a.updateComplete;let o=a.renderRoot.querySelector(".chip.pending");if(!o){const y=a.renderRoot.querySelectorAll(".chip.pinned-empty"),_=i?(d=a._getMetadataLabel)==null?void 0:d.call(a,i):void 0;for(const S of y){const k=(b=(g=S.querySelector(".chip-label"))==null?void 0:g.textContent)==null?void 0:b.trim();if(i&&k===_){o=S;break}if(s&&k===(Vt[s]||s)){o=S;break}}}if(!o)return;const n=o.getBoundingClientRect(),l=this.renderRoot.querySelector(".toolbar-filters-wrapper"),p=l==null?void 0:l.getBoundingClientRect(),h=p?n.left-p.left:n.left,u=p?n.bottom-p.top:void 0;i?r.openMetadataFieldPanel(i,!0,h,u):s&&r.openFilterPanel(s,!0,h,u)}_handleFilterRemove(e){var o;const s=e.detail.key;if(s in(((o=this.config)==null?void 0:o.forcedFilters)??{}))return;const a={...this.store.getState().filters},r={...a.applied};delete r[s],a.applied=r,a.pinned.includes(s)||(a.visible=a.visible.filter(n=>n!==s)),this.store.setState({filters:a,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleMetadataFilterChange(e){const{fieldKey:s,operator:i,values:a,metadataType:r}=e.detail,n={...this.store.getState().filters},l={...n.metadata},p={...l.applied};if(!a||Array.isArray(a)&&a.length===0?(delete p[s],l.applied=p,l.pinned.includes(s)||(l.visible=l.visible.filter(u=>u!==s))):(p[s]={type:"string",values:Array.isArray(a)?a:[a],operator:i||":",metadataType:r},l.applied=p,l.visible.includes(s)||(l.visible=[...l.visible,s])),n.metadata=l,this.store.setState({filters:n,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData(),this._pendingMetadataField===s){this._pendingMetadataField=null;const u=this.renderRoot.querySelector("ap-filters-bar");u&&(u.pendingMetadataField=null)}}_handleMetadataFieldToggle(e){const{fieldKey:s,visible:i}=e.detail,r={...this.store.getState().filters},o={...r.metadata};i?o.visible.includes(s)||(o.visible=[...o.visible,s]):o.visible=o.visible.filter(n=>n!==s),r.metadata=o,this.store.setState({filters:r})}_handleMetadataFilterRemove(e){const{fieldKey:s}=e.detail,a={...this.store.getState().filters},r={...a.metadata},o={...r.applied};delete o[s],r.applied=o,r.pinned.includes(s)||(r.visible=r.visible.filter(n=>n!==s)),a.metadata=r,this.store.setState({filters:a,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleFilterPin(e){var n,l;const{key:s,pinned:i}=e.detail,r={...this.store.getState().filters};i?r.pinned.includes(s)||(r.pinned=[...r.pinned,s]):(r.pinned=r.pinned.filter(p=>p!==s),s in r.applied||(r.visible=r.visible.filter(p=>p!==s))),this.store.setState({filters:r});const o=((l=(n=this.store.getState().config)==null?void 0:n.auth)==null?void 0:l.projectToken)??null;_l(o,r.pinned)}_handleMetadataPin(e){var l,p;const{fieldKey:s,pinned:i}=e.detail,r={...this.store.getState().filters},o={...r.metadata};i?o.pinned.includes(s)||(o.pinned=[...o.pinned,s]):(o.pinned=o.pinned.filter(h=>h!==s),s in o.applied||(o.visible=o.visible.filter(h=>h!==s))),r.metadata=o,this.store.setState({filters:r});const n=((p=(l=this.store.getState().config)==null?void 0:l.auth)==null?void 0:p.projectToken)??null;xl(n,o.pinned)}_handleFiltersClearAll(){const e=this.store.getState();this.store.setState({filters:{...e.filters,applied:{},visible:[...e.filters.pinned],metadata:{...e.filters.metadata,applied:{},visible:[...e.filters.metadata.pinned]}},offset:0,assets:[],folders:[],isLoading:!0});const s=this.renderRoot.querySelector("ap-filters-bar");s&&(s.activeFilter=null),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleFilterDeactivate(e){const s=e.detail.key,a={...this.store.getState().filters};a.visible=a.visible.filter(r=>r!==s),this.store.setState({filters:a})}_handleMetadataFieldDeactivate(e){const{fieldKey:s}=e.detail,a={...this.store.getState().filters},r={...a.metadata};r.visible=r.visible.filter(o=>o!==s),a.metadata=r,this.store.setState({filters:a})}_handleFiltersSet(e){var p;const{applied:s,metadata:i}=e.detail,r={...this.store.getState().filters},o=new Set(Object.keys(((p=this.config)==null?void 0:p.forcedFilters)??{})),n={...s};for(const h of o)delete n[h];r.applied=n;const l=Object.keys(s);if(r.visible=[...new Set([...r.pinned,...l])],i){const h={...r.metadata};h.applied=i.applied;const u=Object.keys(i.applied);h.visible=[...new Set([...h.pinned,...u])],r.metadata=h}this.store.setState({filters:r,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_getSortOptions(){var s;const e=this.storeCtrl.state;if(e.activeTab==="labels"&&!e.activeLabelUuid)return Il;if(e.activeTab==="collections"){if(!e.activeCollectionUuid)return Ml;if(!(e.activeCollectionFolder&&!((s=e.activeCollectionFolder.children)!=null&&s.length)))return Dl}return e.searchQuery?Pl:e.activeTab==="folders"?Ll:qi}_buildSearchNotation(){const e=this.store.getState(),s={...this._normalizedForcedFilters,...e.filters.applied};return al(s,e.filters.metadata.applied).join(" ")}render(){var N,T,E,H,A,q,z,F,ee,Y,J,ie,m,x,P,D,B,j,$e,bt,ae,je,ts,ss;const e=this.storeCtrl.state,s=e.t,i=Array.from(e.selectedAssets.keys()),a=Array.from(e.selectedFolders.keys()),r=((N=this.config)==null?void 0:N.disabledAssetIds)??[],o=((T=this.config)==null?void 0:T.disabledFolderIds)??[],n=this.selectionCtrl.getSelectedAssets(),l=this.selectionCtrl.getSelectedFolders(),p=((E=this.config)==null?void 0:E.folderSelection)!==!1,h=c`
      <ap-header
        .activeTab=${e.activeTab}
        .tabs=${((H=this.config)==null?void 0:H.tabs)??["assets","folders"]}
        .isInsideLabel=${e.activeTab==="labels"&&!!e.activeLabelUuid}
        .isInsideCollection=${e.activeTab==="collections"&&!!e.activeCollectionUuid}
        .isInsideCollectionLeaf=${e.activeTab==="collections"&&!!e.activeCollectionFolder&&!((A=e.activeCollectionFolder.children)!=null&&A.length)}
        .viewMode=${e.viewMode}
        .searchQuery=${e.searchQuery}
        .enableAISearch=${!!((q=this.config)!=null&&q.enableAISearch)}
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
    `,u=!!((z=this.config)!=null&&z.uploader),d=((F=this.config)==null?void 0:F.folderCreation)===!0,g=((ee=this.config)==null?void 0:ee.auth.mode)==="sassKey",b=e.activeTab==="folders",y=d&&b&&(g||$n(e.permissions,wn.FOLDER_CREATE)),_=c`
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
          <div class="toolbar-filters-wrapper${(Y=this.config)!=null&&Y.stickyFilters?" sticky":""}">
            <ap-content-toolbar
              .isLoading=${e.isLoading}
              .totalCount=${e.totalCount}
              .totalFolderCount=${e.totalFolderCount}
              .showUpload=${u}
              .showCreateFolder=${y}
              .showFilters=${!(e.activeTab==="labels"&&!e.activeLabelUuid)&&!(e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((J=e.activeCollectionFolder.children)!=null&&J.length)))}
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

            ${e.activeTab==="labels"&&!e.activeLabelUuid||e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((m=e.activeCollectionFolder.children)!=null&&m.length))?v:c`
            <ap-filters-bar
              .appliedFilters=${e.filters.applied}
              .appliedMetadata=${e.filters.metadata.applied}
              .metadataFields=${e.metadataFields}
              .tags=${e.tags}
              .labels=${e.labels}
              .pinnedFilters=${e.filters.pinned}
              .pinnedMetadataFields=${e.filters.metadata.pinned}
              .forcedFilters=${((x=this.config)==null?void 0:x.forcedFilters)??{}}
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

          ${e.isLoading&&e.assets.length===0&&e.folders.length===0&&!(e.activeTab==="labels"&&!e.activeLabelUuid)&&!(e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((P=e.activeCollectionFolder.children)!=null&&P.length)))?c`<ap-skeleton .variant=${e.viewMode} .gridSize=${((D=this.config)==null?void 0:D.gridSize)??"normal"} .multiSelect=${((B=this.config)==null?void 0:B.multiSelect)!==!1} .folderCount=${2} .t=${s}></ap-skeleton>`:this._renderContent(e,i,a,p,r,o)}

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
              .exportOriginalLabel=${(j=this._transformationsConfig)==null?void 0:j.exportOriginalLabel}
              .applyExportLabel=${($e=this._transformationsConfig)==null?void 0:$e.applyExportLabel}
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
              .showMetadata=${((bt=this.config)==null?void 0:bt.showMetadata)!==!1}
              .metadataFields=${e.metadataFields}
              .labels=${e.labels}
              .regionalFilters=${e.regionalFilters}
              .multiSelect=${((ae=this.config)==null?void 0:ae.multiSelect)??!0}
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
        .multiSelect=${((je=this.config)==null?void 0:je.multiSelect)??!0}
        .maxSelections=${(ts=this.config)==null?void 0:ts.maxSelections}
        .showTransform=${!!((ss=this.config)!=null&&ss.transformations)&&n.some(Bt)}
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
        @ap-cancel=${Is=>this._handleCancel(Is.detail.reason)}
      >
        ${this._isUploaderOpen?k:c`
          <div slot="header">${h}</div>
          ${_}
          <div slot="footer">${S}</div>
        `}
      </ap-modal>
    `}_renderContent(e,s,i=[],a=!1,r=[],o=[]){var l,p,h,u,d,g,b,y,_,S,k,N,T;const n=e.t;if(e.activeTab==="assets")return!e.isLoading&&e.assets.length===0?c`
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
            .gridSize=${((p=this.config)==null?void 0:p.gridSize)??"normal"}
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
            .gridSize=${((d=this.config)==null?void 0:d.gridSize)??"normal"}
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
      `;if(e.activeTab==="labels"){if(!e.activeLabelUuid){let E=e.labels;if(e.searchQuery){const A=e.searchQuery.toLowerCase();E=e.labels.filter(q=>q.name.toLowerCase().includes(A))}const H=e.sortDirection==="asc"?1:-1;return E=[...E].sort((A,q)=>H*A.name.localeCompare(q.name)),E.length===0?c`
            <div class="empty-state">
              <ap-icon name="tag" .size=${48}></ap-icon>
              <div class="empty-title">${e.searchQuery?n("noLabelsMatchSearch","No labels match your search"):n("noLabelsFound","No labels found")}</div>
              <div class="empty-desc">${e.searchQuery?n("tryDifferentSearch","Try a different search term"):n("labelsWillAppear","Labels will appear here once created")}</div>
            </div>
          `:e.viewMode==="grid"?c`
            <div class="labels-grid">
              ${E.map((A,q)=>c`
                <ap-label-card .label=${A} .index=${q} @label-open=${this._handleLabelOpen}></ap-label-card>
              `)}
            </div>
          `:c`
          <div class="labels-list">
            ${E.map((A,q)=>c`
              <ap-label-row .label=${A} .index=${q} @label-open=${this._handleLabelOpen}></ap-label-row>
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
      `}if(e.activeTab==="collections"){if(!e.activeCollectionUuid){let A=e.collections;if(e.searchQuery){const z=e.searchQuery.toLowerCase();A=e.collections.filter(F=>F.title.toLowerCase().includes(z))}const q=e.sortDirection==="asc"?1:-1;return e.sortBy==="created_at"?A=[...A].sort((z,F)=>q*(new Date(z.created_at).getTime()-new Date(F.created_at).getTime())):e.sortBy==="updated_at"?A=[...A].sort((z,F)=>q*(new Date(z.updated_at).getTime()-new Date(F.updated_at).getTime())):A=[...A].sort((z,F)=>q*z.title.localeCompare(F.title)),A.length===0?c`
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
        `}if(e.isLoadingCollectionFolders)return c`<div class="loading-center"><ap-spinner></ap-spinner></div>`;const E=this._getVisibleCollectionFolders();if(!e.activeCollectionFolder||(((S=e.activeCollectionFolder.children)==null?void 0:S.length)??0)>0){let A=E;if(e.searchQuery){const z=e.searchQuery.toLowerCase();A=E.filter(F=>F.name.toLowerCase().includes(z))}const q=e.sortDirection==="asc"?1:-1;return A=[...A].sort((z,F)=>q*z.name.localeCompare(F.name)),A.length===0?c`
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
      `}return v}};oa.styles=[I`
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
    `];let Re=oa;mt([w()],Re.prototype,"_isDragOver");mt([w()],Re.prototype,"_isUploaderOpen");mt([w()],Re.prototype,"_folderResolveOpen");mt([w()],Re.prototype,"_transformOpen");mt([w()],Re.prototype,"_createFolderOpen");mt([w()],Re.prototype,"_isCreatingFolder");mt([w()],Re.prototype,"_createFolderError");mt([f({type:Object})],Re.prototype,"config");typeof customElements<"u"&&!customElements.get("sfx-asset-picker")&&customElements.define("sfx-asset-picker",Re);const Ud=[{pattern:"/",load:()=>G(()=>import("./landing-r51i0_JQ.js"),__vite__mapDeps([0,1])).then(t=>t.default)},{pattern:"/docs/getting-started",load:()=>G(()=>import("./getting-started-Ch2NjLo6.js"),__vite__mapDeps([2,3])).then(t=>t.default)},{pattern:"/docs/configuration",load:()=>G(()=>import("./configuration-DFpgwuv1.js"),__vite__mapDeps([4,3])).then(t=>t.default)},{pattern:"/docs/api",load:()=>G(()=>import("./api-Dl3UszFN.js"),__vite__mapDeps([5,3])).then(t=>t.default)},{pattern:"/docs/theming",load:()=>G(()=>import("./theming-hrqYM8pb.js"),__vite__mapDeps([6,3])).then(t=>t.default)},{pattern:"/docs/filters",load:()=>G(()=>import("./filters-BlL5oE1x.js"),__vite__mapDeps([7,3])).then(t=>t.default)},{pattern:"/docs/types",load:()=>G(()=>import("./types-DPNAgA2W.js"),__vite__mapDeps([8,3])).then(t=>t.default)},{pattern:"/examples/basic",load:()=>G(()=>import("./basic-KsnSBHoo.js"),__vite__mapDeps([9,1])).then(t=>t.default)},{pattern:"/examples/single-select",load:()=>G(()=>import("./single-select-B6Dvjd_q.js"),__vite__mapDeps([10,1])).then(t=>t.default)},{pattern:"/examples/multi-select",load:()=>G(()=>import("./multi-select-BFLQ6nVr.js"),__vite__mapDeps([11,1])).then(t=>t.default)},{pattern:"/examples/disabled-assets",load:()=>G(()=>import("./disabled-assets-DsmOL6Np.js"),__vite__mapDeps([12,1])).then(t=>t.default)},{pattern:"/examples/theming",load:()=>G(()=>import("./theming-167ULGtS.js"),__vite__mapDeps([13,1])).then(t=>t.default)},{pattern:"/examples/custom-theming",load:()=>G(()=>import("./custom-theming-DH66u_Pf.js"),__vite__mapDeps([14,1])).then(t=>t.default)},{pattern:"/examples/default-filters",load:()=>G(()=>import("./default-filters-B3oaA7_t.js"),__vite__mapDeps([15,1])).then(t=>t.default)},{pattern:"/examples/forced-filters",load:()=>G(()=>import("./forced-filters-BTQ3ECVM.js"),__vite__mapDeps([16,1])).then(t=>t.default)},{pattern:"/examples/hidden-tabs",load:()=>G(()=>import("./hidden-tabs-BEcuV-8N.js"),__vite__mapDeps([17,1])).then(t=>t.default)},{pattern:"/examples/root-folder",load:()=>G(()=>import("./root-folder-B73wxui3.js"),__vite__mapDeps([18,1])).then(t=>t.default)},{pattern:"/examples/events",load:()=>G(()=>import("./events-4loqtsrE.js"),__vite__mapDeps([19,1])).then(t=>t.default)},{pattern:"/examples/react-wrapper",load:()=>G(()=>import("./react-wrapper-BXYjOtmk.js"),__vite__mapDeps([20,1])).then(t=>t.default)},{pattern:"/examples/inline",load:()=>G(()=>import("./inline-gB0JfcBZ.js"),__vite__mapDeps([21,1])).then(t=>t.default)},{pattern:"/examples/sticky-filters",load:()=>G(()=>import("./sticky-filters-BPG_q-BJ.js"),__vite__mapDeps([22,1])).then(t=>t.default)},{pattern:"/examples/grid-size",load:()=>G(()=>import("./grid-size-CwKRR8UW.js"),__vite__mapDeps([23,1])).then(t=>t.default)},{pattern:"/examples/preferences",load:()=>G(()=>import("./preferences-BRL39KLW.js"),__vite__mapDeps([24,1])).then(t=>t.default)},{pattern:"/examples/uploader",load:()=>G(()=>import("./uploader-Dy_6OmfC.js"),__vite__mapDeps([25,1])).then(t=>t.default)},{pattern:"/examples/folder-selection",load:()=>G(()=>import("./folder-selection-D_jmNqS3.js"),__vite__mapDeps([26,1])).then(t=>t.default)},{pattern:"/examples/ai-search",load:()=>G(()=>import("./ai-search-BnWKKIHZ.js"),__vite__mapDeps([27,1])).then(t=>t.default)},{pattern:"/examples/transformations",load:()=>G(()=>import("./transformations-6nAhdtzX.js"),__vite__mapDeps([28,1])).then(t=>t.default)},{pattern:"/examples/language-switcher",load:()=>G(()=>import("./language-switcher-Dw5EXS7S.js"),__vite__mapDeps([29,1])).then(t=>t.default)}];let ns=null,Za=0;function Kd(t){const e=document.getElementById("content"),s=document.getElementById("sidebar"),i=document.getElementById("sidebar-docs"),a=document.getElementById("sidebar-examples"),r=document.querySelectorAll(".topbar-nav-link");async function o(){const n=location.hash.slice(1)||"/",l=++Za;ns!=null&&ns.destroy&&ns.destroy(),t.close();const p=Ud.find(_=>_.pattern===n);if(!p){location.hash="#/";return}const h=n.startsWith("/docs/"),u=n.startsWith("/examples/"),d=h||u,g=n==="/";s.classList.toggle("hidden",!d),document.body.classList.toggle("has-sidebar",d),document.body.classList.toggle("is-home",g),i.classList.toggle("hidden",!h),a.classList.toggle("hidden",!u),s.querySelectorAll(".sidebar-link").forEach(_=>{_.classList.toggle("active",_.getAttribute("data-route")===n)});const b=h?"docs":u?"examples":"home";r.forEach(_=>{_.classList.toggle("active",_.getAttribute("data-section")===b)}),s.classList.remove("mobile-open"),window.scrollTo(0,0);const y=await p.load();l===Za&&(ns=y,e.innerHTML=y.render(),y.init&&y.init(t))}window.addEventListener("hashchange",o),o()}const ra="ap-demo-auth",ni={projectToken:"fbmjmuoeb",securityTemplateKey:"SECU_47D57B3106A841F7A1FEA951846CC5F3"};function Bd(){try{const t=localStorage.getItem(ra);if(t)return{...ni,...JSON.parse(t)}}catch{}return{...ni}}function Vd(t){localStorage.setItem(ra,JSON.stringify(t))}function Hd(){const t=window.__apDemoFlags;return t&&typeof t=="object"?t:{}}function Jd(t={}){const{projectToken:e,securityTemplateKey:s}=Bd();return{auth:{mode:"securityTemplate",securityTemplateKey:s,projectToken:e},...t,...Hd()}}function qd(){const t=document.getElementById("auth-btn"),e=document.getElementById("auth-popover"),s=document.getElementById("auth-project-token"),i=document.getElementById("auth-sec-key"),a=document.getElementById("auth-save");try{const r=localStorage.getItem(ra);if(r){const o=JSON.parse(r);s.value=o.projectToken??"",i.value=o.securityTemplateKey??""}}catch{}t.addEventListener("click",r=>{r.stopPropagation(),e.classList.toggle("hidden")}),a.addEventListener("click",()=>{Vd({projectToken:s.value.trim()||ni.projectToken,securityTemplateKey:i.value.trim()||ni.securityTemplateKey}),window.location.reload()}),document.addEventListener("click",r=>{!e.contains(r.target)&&!t.contains(r.target)&&e.classList.add("hidden")})}qd();console.info(`%c[asset-picker demo]%c Override picker config from the console:
  window.__apDemoFlags = { folderCreation: true }
Then re-open the picker. Flags merge over the example's own overrides.`,"color: #5b6cff; font-weight: 600;","color: inherit;");const Gd=document.getElementById("sidebar-toggle"),Nr=document.getElementById("sidebar");Gd.addEventListener("click",()=>{Nr.classList.toggle("mobile-open")});document.getElementById("content").addEventListener("click",()=>{Nr.classList.remove("mobile-open")});const Qd=document.getElementById("picker");Kd(Qd);export{v as A,oo as D,We as E,G as _,I as a,Jd as b,pt as c,O as d,Ql as e,c as f,Wl as i,f as n,w as r,Gl as t,rt as w};
